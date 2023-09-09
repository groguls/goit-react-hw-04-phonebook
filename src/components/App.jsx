import { Component } from 'react';
import { nanoid } from 'nanoid';
import { Div, GlobalStyle, MainTitle, PageWrapper, Title } from './GlobalStyle';
import { ContactForm } from './ContactForm/ContactForm';
import { ContactList } from './ContactList/ContactList';
import { Filter } from './Filter/Filter';

export class App extends Component {
  state = {
    contacts: [],
    filter: '',
  };

  componentDidMount() {
    const savedContacts = localStorage.getItem('ContactsApp');
    savedContacts !== null &&
      this.setState({ contacts: JSON.parse(savedContacts) });
  }

  componentDidUpdate(prevProps, prevState) {
    const { contacts } = this.state;

    if (contacts.length === 0) {
      localStorage.removeItem('ContactsApp');
    } else if (prevState.contacts !== contacts) {
      localStorage.setItem('ContactsApp', JSON.stringify(contacts));
    }
  }

  addContact = data => {
    const { name, number } = data;
    const contact = {
      id: nanoid(),
      name,
      number,
    };
    const isNameInContacts = this.state.contacts.some(
      contact => contact.name.toLowerCase() === name.toLowerCase()
    );

    if (isNameInContacts) {
      alert(`${name} is alredy in contacts`);
      return;
    }
    this.setState(({ contacts }) => ({
      contacts: [contact, ...contacts],
    }));
  };

  deleteContact = contactId => {
    this.setState(pState => ({
      contacts: pState.contacts.filter(contact => contact.id !== contactId),
    }));
  };

  filterChange = evt => {
    this.setState({ filter: evt.currentTarget.value });
  };

  render() {
    const { contacts, filter } = this.state;
    const normalizedFilter = filter.toLowerCase();
    const filteredContacts = contacts.filter(contact =>
      contact.name.toLowerCase().includes(normalizedFilter)
    );
    return (
      <PageWrapper>
        <GlobalStyle />
        <MainTitle>Phonebook</MainTitle>
        <ContactForm onFormSubmit={this.addContact} />
        <Div>
          <Title>Contacts</Title>
          {contacts.length > 0 && (
            <Filter filterValue={filter} onChange={this.filterChange} />
          )}
          <ContactList
            contacts={filteredContacts}
            onDeleteContact={this.deleteContact}
          />
        </Div>
      </PageWrapper>
    );
  }
}

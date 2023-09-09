import { useEffect, useState } from 'react';
import { nanoid } from 'nanoid';
import {
  ContactListWraper,
  GlobalStyle,
  MainTitle,
  PageWrapper,
  Title,
} from './GlobalStyle';
import { ContactForm } from './ContactForm/ContactForm';
import { ContactList } from './ContactList/ContactList';
import { Filter } from './Filter/Filter';

const getInitialContacts = () => {
  const savedContacts = localStorage.getItem('ContactsApp');
  return savedContacts !== null ? JSON.parse(savedContacts) : [];
};

export const App = () => {
  const [contacts, setContacts] = useState(getInitialContacts);
  const [filter, setFilter] = useState('');

  useEffect(() => {
    localStorage.setItem('ContactsApp', JSON.stringify(contacts));

    return () => {
      if (contacts.length === 0) {
        localStorage.removeItem('ContactsApp');
      }
    };
  }, [contacts]);

  const addContact = data => {
    const { name, number } = data;
    const contact = {
      id: nanoid(),
      name,
      number,
    };
    const isNameInContacts = contacts.some(
      contact => contact.name.toLowerCase() === name.toLowerCase()
    );

    if (isNameInContacts) {
      alert(`${name} is alredy in contacts`);
      return;
    }

    setContacts(prevContacts => [contact, ...prevContacts]);
  };

  const deleteContact = contactId => {
    setContacts(prevContacts =>
      prevContacts.filter(contact => contact.id !== contactId)
    );
  };

  const filterChange = evt => {
    setFilter(evt.currentTarget.value);
  };

  const normalizedFilter = filter.toLowerCase();
  const filteredContacts = contacts.filter(contact =>
    contact.name.toLowerCase().includes(normalizedFilter)
  );

  return (
    <PageWrapper>
      <GlobalStyle />
      <MainTitle>Phonebook</MainTitle>
      <ContactForm onFormSubmit={addContact} />
      <ContactListWraper>
        <Title>Contacts</Title>
        {contacts.length > 0 && (
          <>
            <Filter filterValue={filter} onChange={filterChange} />
            <ContactList
              contacts={filteredContacts}
              onDeleteContact={deleteContact}
            />
          </>
        )}
      </ContactListWraper>
    </PageWrapper>
  );
};

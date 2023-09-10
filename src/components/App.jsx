import { useEffect, useReducer } from 'react';
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
import { contactsReducer, initialState } from '../contactsReducer';

export const App = () => {
  const [state, dispatch] = useReducer(contactsReducer, initialState);

  useEffect(() => {
    localStorage.setItem('ContactsApp', JSON.stringify(state.contacts));

    return () => {
      if (state.contacts.length === 0) {
        localStorage.removeItem('ContactsApp');
      }
    };
  }, [state.contacts]);

  const addContact = contactData => {
    dispatch({
      type: 'added',
      newContact: contactData,
    });
  };

  const deleteContact = contactId => {
    dispatch({
      type: 'deleted',
      contactId: contactId,
    });
  };

  const filterChange = evt => {
    dispatch({
      type: 'filtered',
      filter: evt.currentTarget.value,
    });
  };

  const normalizedFilter = state.filter.toLowerCase();
  const filteredContacts = state.contacts.filter(contact =>
    contact.name.toLowerCase().includes(normalizedFilter)
  );

  return (
    <PageWrapper>
      <GlobalStyle />
      <MainTitle>Phonebook</MainTitle>
      <ContactForm onFormSubmit={addContact} />
      <ContactListWraper>
        <Title>Contacts</Title>
        {state.contacts.length > 0 && (
          <>
            <Filter filterValue={state.filter} onChange={filterChange} />
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

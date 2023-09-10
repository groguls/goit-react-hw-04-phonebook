import { nanoid } from 'nanoid';

const getInitialContacts = () => {
  const savedContacts = localStorage.getItem('ContactsApp');
  return savedContacts !== null ? JSON.parse(savedContacts) : [];
};

export const initialState = {
  contacts: getInitialContacts(),
  filter: '',
};

export const contactsReducer = (state, action) => {
  switch (action.type) {
    case 'added': {
      const { name, number } = action.newContact;
      const contact = {
        id: nanoid(),
        name,
        number,
      };
      const isNameInContacts = state.contacts.some(
        contact => contact.name.toLowerCase() === name.toLowerCase()
      );

      if (isNameInContacts) {
        alert(`${name} is alredy in contacts`);
        return;
      }
      return {
        ...state,
        contacts: [contact, ...state.contacts],
      };
    }
    case 'deleted': {
      return {
        ...state,
        contacts: state.contacts.filter(
          contact => contact.id !== action.contactId
        ),
      };
    }
    case 'filtered': {
      return {
        ...state,
        filter: action.filter,
      };
    }

    default: {
      throw Error('Unknown action: ' + action.type);
    }
  }
};

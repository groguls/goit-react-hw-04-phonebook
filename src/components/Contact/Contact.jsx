import { ContactItem, DeleteButton } from './Contact.styled';

export const Contact = ({ name, number, onDeleteContact }) => {
  return (
    <ContactItem>
      <p>
        {name}: {number}
      </p>
      <DeleteButton type="button" onClick={onDeleteContact}>
        Delete
      </DeleteButton>
    </ContactItem>
  );
};

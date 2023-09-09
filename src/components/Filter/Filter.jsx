import { Label } from 'components/ContactForm/ContactForm.styled';

export const Filter = ({ filterValue, onChange }) => {
  return (
    <Label>
      Find contacts by name
      <input
        type="text"
        placeholder="Enter contact name"
        value={filterValue}
        onChange={onChange}
      />
    </Label>
  );
};

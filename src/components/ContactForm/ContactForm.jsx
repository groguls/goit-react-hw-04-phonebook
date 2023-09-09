import { Formik, Field } from 'formik';
import * as Yup from 'yup';
import { StyledForm, Label, Button, ErrorMsg } from './ContactForm.styled';

const SignupSchema = Yup.object().shape({
  name: Yup.string()
    .min(2, 'Too Short!')
    .matches(
      /^[a-zA-Zа-яА-ЯіІєЄїЇ]+(([' -][a-zA-Zа-яА-ЯіІєЄїЇ ])?[a-zA-Zа-яА-ЯіІєЄїЇ]*)*$/,
      "Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
    )
    .required('Required'),
  number: Yup.string()
    .matches(
      /\+?\d{1,4}?[ .\-\s]?\(?\d{1,3}?\)?[ .\-\s]?\d{1,4}[ .\-\s]?\d{1,4}[ .\-\s]?\d{1,9}/,
      'Phone number must be digits and can contain spaces, dashes, parentheses and can start with +'
    )
    .required('Required'),
});

export const ContactForm = ({ onFormSubmit }) => {
  return (
    <Formik
      initialValues={{ name: '', number: '' }}
      validationSchema={SignupSchema}
      onSubmit={(values, actions) => {
        onFormSubmit(values);
        actions.resetForm();
      }}
    >
      <StyledForm>
        <Label>
          Name
          <Field name="name" type="text" placeholder="Jacob Mercer" />
          <ErrorMsg component="div" name="name" />
        </Label>
        <Label>
          Phone number
          <Field name="number" type="tel" placeholder="067 123 45 67" />
          <ErrorMsg component="div" name="number" />
        </Label>

        <Button type="submit">Add contact</Button>
      </StyledForm>
    </Formik>
  );
};

import { ErrorMessage, Form } from 'formik';
import { styled } from 'styled-components';

export const StyledForm = styled(Form)`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 15px;
  width: 100%;
  max-width: 500px;
  padding: 25px 50px;
  border-radius: 5px;
  border: 2px #e1ecf4 solid;
  box-shadow: inset 0 0 15px 4px rgba(0, 149, 255, 0.15);
`;

export const Label = styled.label`
  display: flex;
  flex-direction: column;
  gap: 5px;
  margin: 0 auto;
`;

export const Button = styled.button`
  background-color: #e1ecf4;
  border-radius: 3px;
  border: 1px solid #7aa7c7;
  color: #39739d;
  cursor: pointer;
  padding: 8px 12px;

  &:hover,
  :focus {
    background-color: #b3d3ea;
    color: #2c5777;
    box-shadow: 0 0 3px 3px rgba(0, 149, 255, 0.15);
  }
`;

export const ErrorMsg = styled(ErrorMessage)`
  color: red;
  font-size: 14px;
`;

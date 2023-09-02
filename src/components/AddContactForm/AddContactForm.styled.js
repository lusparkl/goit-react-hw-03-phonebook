import { styled } from "styled-components";
import { ErrorMessage } from 'formik';

export const Form = styled.form`
    display: flex;
    width: 300px;
    flex-direction: column;
    border: 1px solid black;
    border-radius: 4px;
    gap: 20px;
    padding: 4px;
`
export const Error = styled(ErrorMessage)`
`
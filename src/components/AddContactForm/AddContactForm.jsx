import { Form, Error } from './AddContactForm.styled';
import { Formik } from 'formik';
import * as Yup from 'yup';
import { nanoid } from 'nanoid'


const phoneRegExp = /^[+]?[(]?\d{1,4}[)]?[-\s.\d]*$/;
const Schema = Yup.object().shape({
    name: Yup.string()
        .min(2, 'Too Short!')
        .max(50, 'Too Long!')
        .required('Required'),
    phoneNumber: Yup.string()
        .min(9, 'Too Short!')
        .matches(phoneRegExp, 'Uncorrect!')
        .required('Required')
});

export const AddContactForm = ({ addContact }) => {
  return (
      <Formik
          initialValues={{ name: '', phoneNumber: '' }}
          validationSchema={Schema}
          onSubmit={(values, { setSubmitting }) => {
              values.id = nanoid();
              addContact(values);
              setSubmitting(false);
          }}
      >
          {({
              values,
              handleChange,
              handleBlur,
              handleSubmit,
              isSubmitting,
              
          }) => (
              <Form onSubmit={handleSubmit}>
                  <input
                      type="name"
                      name="name"
                      onChange={handleChange}
                      onBlur={handleBlur}
                      value={values.name}
                      title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
                  />
                  <Error name="name" />
                  <input
                      type="text"
                      name="phoneNumber"
                      onChange={handleChange}
                      onBlur={handleBlur}
                      value={values.phoneNumber}
                  />
                  <Error name="phoneNumber" />
                  <button type="submit" disabled={isSubmitting}>
                      Submit
                  </button>
              </Form>
          )}
      </Formik>
  )
}

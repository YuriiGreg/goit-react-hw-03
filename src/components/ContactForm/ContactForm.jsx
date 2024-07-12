import React from 'react';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import styles from './ContactForm.module.css';

const ContactForm = ({ addContact }) => {
  const validationSchema = Yup.object({
    name: Yup.string()
      .min(3, 'Must be at least 3 characters')
      .max(50, 'Must be 50 characters or less')
      .required('Required'),
    number: Yup.string()
      .min(3, 'Must be at least 3 characters')
      .max(50, 'Must be 50 characters or less')
      .required('Required'),
  });

  return (
    <Formik
      initialValues={{ name: '', number: '' }}
      validationSchema={validationSchema}
      onSubmit={(values, { resetForm }) => {
        addContact(values);
        resetForm();
      }}
    >
      <Form className={styles.form}>
        <label htmlFor="name" className={styles.label}>Name</label>
        <Field name="name" type="text" className={styles.input} />
        <ErrorMessage name="name" component="div" className={styles.error} />

        <label htmlFor="number" className={styles.label}>Number</label>
        <Field name="number" type="text" className={styles.input} />
        <ErrorMessage name="number" component="div" className={styles.error} />

        <button type="submit" className={styles.button}>Add contact</button>
      </Form>
    </Formik>
  );
};

export default ContactForm;


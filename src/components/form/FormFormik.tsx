import { Formik, Field, Form, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import './Form.css';

type Values = {
  firstName: string;
  lastName: string;
  email: string;
};

const initialValuesEmpty: Values = { firstName: '', lastName: '', email: '' };

const FormFormik = () => {
  return (
    <div>
      <h3>Form Formik</h3>
      <Formik
        initialValues={initialValuesEmpty}
        validationSchema={Yup.object({
          firstName: Yup.string()
            .max(15, 'Must be 15 characters or less')
            .required('Requiered'),
          lastName: Yup.string()
            .max(20, 'Must be 20 characters or less')
            .required('Requiered'),
          email: Yup.string()
            .email('Invalid email address')
            .required('Required'),
        })}
        onSubmit={(values, { setSubmitting }) => {
          setTimeout(() => {
            alert(JSON.stringify(values, null, 2));
            setSubmitting(false);
          }, 500);
        }}>
        <Form>
          <label htmlFor="firstName">First Name:</label>
          <Field type="text" name="firstName" />
          <ErrorMessage name="firstName" />
          <label htmlFor="lastName">Last Name:</label>
          <Field type="text" name="lastName" />
          <ErrorMessage name="lastName" />
          <label htmlFor="email">Email Address</label>
          <Field type="text" name="email" />
          <ErrorMessage name="email" />
          <button type="submit">Submit</button>
          {
            // <input className="form-input" placeHolder="Jane"  />
          }
          <Field name="firstName" className="form-input" placeholder="Jane" />

          {
            // <textarea className="form-textarea"/></textarea>
          }
          <Field name="message" as="textarea" className="form-textarea" />

          {
            // <select className="my-select"/>
          }
          <Field name="colors" as="select" className="my-select">
            <option value="red">Red</option>
            <option value="green">Green</option>
            <option value="blue">Blue</option>
          </Field>
        </Form>
      </Formik>
    </div>
  );
};

export default FormFormik;

import { useFormik } from 'formik';
import * as Yup from 'yup';
import './Form.css';

type Values = {
  firstName: string;
  lastName: string;
  email: string;
};

const initialValuesEmpty: Values = { firstName: '', lastName: '', email: '' };

const FormYupReduced = () => {
  const formik = useFormik({
    initialValues: initialValuesEmpty,
    validationSchema: Yup.object({
      firstName: Yup.string()
        .max(15, 'Must be 15 characters or less')
        .required('Requiered'),
      lastName: Yup.string()
        .max(20, 'Must be 20 characters or less')
        .required('Requiered'),
      email: Yup.string().email('Invalid email address').required('Required'),
    }),
    onSubmit: (values) => {
      alert(JSON.stringify(values, null, 2));
    },
  });

  return (
    <form onSubmit={formik.handleSubmit}>
      <label htmlFor="firstName">First Name:</label>
      <input
        type="text"
        id="firstName"
        {...formik.getFieldProps('firstName')}
      />
      {formik.touched.firstName && formik.errors.firstName ? (
        <div>{formik.errors.firstName}</div>
      ) : null}
      <label htmlFor="lastName">Last Name:</label>
      <input type="text" id="lastName" {...formik.getFieldProps('lastName')} />
      {formik.touched.lastName && formik.errors.lastName ? (
        <div>{formik.errors.lastName}</div>
      ) : null}
      <label htmlFor="email">Email Address</label>
      <input type="email" id="email" {...formik.getFieldProps('email')} />
      {formik.touched.email && formik.errors.email ? (
        <div>{formik.errors.email}</div>
      ) : null}
      <br />
      <button type="submit">Submit</button>
    </form>
  );
};

export default FormYupReduced;

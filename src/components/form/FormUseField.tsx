import { Formik, Form, useField } from 'formik';
import * as Yup from 'yup';
import './Form.css';

type Values = {
  firstName: string;
  lastName: string;
  email: string;
  acceptedTerms: boolean;
  jobType: string;
};

const initialValuesEmpty: Values = {
  firstName: '',
  lastName: '',
  email: '',
  acceptedTerms: false,
  jobType: '',
};

type TextInput = {
  label: string;
  id?: string;
  name: string;
  type: string;
  placeholder: string;
};

const MyTextInput = ({ label, ...props }: TextInput) => {
  const [field, meta] = useField(props);
  return (
    <div>
      <label htmlFor={props.id || props.name}>{label}</label>
      <input className="text-input" {...field} {...props} />
      {meta.touched && meta.error ? (
        <div className="error">{meta.error}</div>
      ) : null}
    </div>
  );
};

type CheckboxInput = {
  children: string;
  id?: string;
  name: string;
};

const MyCheckbox = ({ children, ...props }: CheckboxInput) => {
  const [field, meta] = useField({ ...props, type: 'checkbox' });
  return (
    <div>
      <label className="checkbox-input">
        <input type="checkbox" {...field} {...props} />
        {children}
      </label>
      {meta.touched && meta.error ? (
        <div className="error">{meta.error}</div>
      ) : null}
    </div>
  );
};

type SelectInput = {
  label: string;
  id?: string;
  name: string;
  children: JSX.Element[];
};

const MySelect = ({ label, ...props }: SelectInput) => {
  const [field, meta] = useField(props);
  return (
    <div>
      <label htmlFor={props.id || props.name}>{label}</label>
      <select {...field} {...props} />
      {meta.touched && meta.error ? (
        <div className="error">{meta.error}</div>
      ) : null}
    </div>
  );
};

const FormUseField = () => {
  return (
    <div>
      <h3>Form useField</h3>
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
          acceptedTerms: Yup.boolean()
            .required('Required')
            .oneOf([true], 'You must accept the terms and conditions'),
          jobType: Yup.string()
            .required('Required')
            .oneOf(
              ['designer', 'development', 'product', 'other'],
              'Invalid job type'
            ),
        })}
        onSubmit={(values, { setSubmitting }) => {
          setTimeout(() => {
            alert(JSON.stringify(values, null, 2));
            setSubmitting(false);
          }, 500);
        }}>
        <Form>
          <MyTextInput
            label="First Name"
            name="firstName"
            type="text"
            placeholder="John"
          />
          <MyTextInput
            label="Last Name"
            name="lastName"
            type="text"
            placeholder="Doe"
          />
          <MyTextInput
            label="Email Address"
            name="email"
            type="email"
            placeholder="john.doe@mail.com"
          />
          <MySelect label="Job Type" name="jobType">
            <option value="">Select a job type</option>
            <option value="designer">Designer</option>
            <option value="development">Developer</option>
            <option value="product">Product Manager</option>
            <option value="other">Other</option>
          </MySelect>
          <MyCheckbox name="acceptedTerms">
            I accept the terms and conditions
          </MyCheckbox>
          <button type="submit">Submit</button>
        </Form>
      </Formik>
    </div>
  );
};

export default FormUseField;

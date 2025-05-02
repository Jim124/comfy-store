import { Form, Link } from 'react-router';
import { FormInput, SubmitBtn } from '../components';

const Register = () => {
  return (
    <section className='h-screen grid place-items-center'>
      <Form
        method='post'
        className='card p-8 w-96 flex flex-col gap-y-4 bg-base-100 shadow-lg'
      >
        <h4 className='text-center text-3xl font-bold'>Register</h4>
        <FormInput type='text' label='Username' name='username' />
        <FormInput type='email' label='Email' name='email' />
        <FormInput type='password' label='Password' name='password' />
        <div className='mt-4'>
          <SubmitBtn text='register' />
        </div>
        <p className='text-center'>
          Already a member?
          <Link
            to='/login'
            className='ml-2 link link-hover link-primary capitalize'
          >
            sign in
          </Link>
        </p>
      </Form>
    </section>
  );
};
export default Register;

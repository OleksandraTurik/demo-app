import * as yup from 'yup';

export const signInSchema = yup.object().shape({
  username: yup
    .string()
    .required('User Name is required')
    .min(3, 'User Name must be at least 3 characters long'),
  password: yup
    .string()
    .required('Password is required')
    .min(8, 'Password must be at least 8 characters long'),
});

export const signUpSchema = yup.object().shape({
  username: yup
    .string()
    .required('User Name is required')
    .min(3, 'User Name must be at least 3 characters long'),
  password: yup
    .string()
    .required('Password is required')
    .min(8, 'Password must be at least 8 characters long'),
  displayName: yup.string().min(3, 'Full Name must be at least 3 characters long'),
  confirmPassword: yup
    .string()
    // .oneOf([yup.ref('password')], 'Passwords must match')
    .min(8, 'Password must be at least 8 characters long')
    .required('Confirm Password is required'),
});

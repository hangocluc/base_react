import { FormLoginType } from '@model/authentication';
import * as yup from 'yup';

export const loginValidation: yup.SchemaOf<FormLoginType> = yup.object().shape({
  phone: yup.string().required('Yêu cầu nhập số điện thoại'),
  password: yup.string().required('Yêu cầu nhập mật khẩu'),
});

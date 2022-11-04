import * as Yup from 'yup';

const artistloginschema = Yup.object().shape({
    firstname: Yup.string()
        .min(2, 'Too Short!')
        .max(50, 'Too Long!')
        .required('Required'),
    lastname: Yup.string()
        .min(2, 'Too Short!')
        .max(50, 'Too Long!')
        .required('Required'),
    email: Yup.string().email('Invalid email').required('Required'),
    phone: Yup.string().required('Required'),
    gender: Yup.string().required('Required'),
    search: Yup.string().required('Required'),
    houseno: Yup.string().required('Required'),
    country: Yup.string().required('Required'),
    city: Yup.string().required('Required'),
    state: Yup.string().required('Required'),
    price: Yup.string().required('Required'),
    experience: Yup.string().required('Required'),


});
export default artistloginschema;
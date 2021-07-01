import * as Yup from 'yup';

export const formValues = {
  name: '',
  description: '',
  categories_id: 0,
};

export const getValuesToEdit = () => {
  return {
    name: '',
    description: '',
    categories_id: 0,
  };
};

export const validation = () =>
  Yup.object({
    name: Yup.string().required('Harus diisi'),
    description: Yup.string().required('Harus diisi'),
    categories_id: Yup.number().required('Harus diisi'),
  });

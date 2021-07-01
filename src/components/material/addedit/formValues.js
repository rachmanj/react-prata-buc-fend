import * as Yup from 'yup';

export const formValues = {
  name: '',
  description: '',
  uom: '',
};

export const getValuesToEdit = () => {
  return {
    name: '', //material.name,
    description: '', //material.description,
    uom: '', //material.uom,
  };
};

export const validation = () =>
  Yup.object({
    name: Yup.string().required('Harus diisi'),
    description: Yup.string(),
    uom: Yup.string().required('Harus diisi'),
  });

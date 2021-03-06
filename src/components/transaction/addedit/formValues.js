import * as Yup from 'yup';

export const formValues = {
  date: '',
  assetbucs_id: '',
  jenis_perbaikan: '',
  tindakan_perbaikan: '',
  remarks: '',
};

export const validation = () =>
  Yup.object({
    date: Yup.date().required('Harus diisi'),
    assetbucs_id: Yup.string().required('Harus diisi'),
    jenis_perbaikan: Yup.string().required('Harus diisi'),
    tindakan_perbaikan: Yup.string().required('Harus diisi'),
    remarks: Yup.string(),
  });

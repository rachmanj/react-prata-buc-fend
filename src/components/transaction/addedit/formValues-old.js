import * as Yup from 'yup';

export const formTransactionValues = {
  date: '',
  users_id: '',
  assetbucs_id: '',
  janis_perbaikan: '',
  tindakan_perbaikan: '',
  remarks: '',
  amount: 0,
  status: '',
};

export const validation = () =>
  Yup.object({
    date: Yup.date().required('Harus diisi'),
    users_id: Yup.number().required('Harus diisi'),
    assetbucs_id: Yup.number().required('Harus diisi'),
    jenis_perbaikan: Yup.string().required('Harus diisi'),
    tindakan_perbaikan: Yup.string().required('Harus diisi'),
    remarks: Yup.string(),
    amount: 0,
    status: Yup.string().required('Harus diisi'),
  });

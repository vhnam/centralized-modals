import * as yup from "yup";

const authorFormSchema = yup.object({
  name: yup.string().required(),
  email: yup.string().email().required(),
  jobTitle: yup.string().required(),
  jobType: yup.string().required(),
  isOnline: yup.boolean().required(),
  employed: yup.object().required(),
});

export type AuthorForm = yup.InferType<typeof authorFormSchema>;

export default authorFormSchema;

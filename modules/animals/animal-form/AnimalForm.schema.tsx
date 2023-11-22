import * as yup from "yup";

const animalFormSchema = yup.object({
  name: yup.string().required(),
});

export type AnimalForm = yup.InferType<typeof animalFormSchema>;

export default animalFormSchema;

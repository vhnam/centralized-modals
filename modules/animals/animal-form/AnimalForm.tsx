import { useEffect } from "react";
import { Controller, useFormContext } from "react-hook-form";

import TextField from "../../../components/TextField";

function AnimalForm() {
  const formContext = useFormContext();
  const { control, reset } = formContext;

  useEffect(() => {
    return () => {
      reset();
    };
  }, []);

  return (
    <div>
      <Controller
        control={control}
        name="name"
        render={({ field }) => <TextField {...field} label="Name" />}
      />
    </div>
  );
}

export default AnimalForm;

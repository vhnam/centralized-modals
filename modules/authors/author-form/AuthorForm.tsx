import { Switch } from "antd";
import dayjs, { Dayjs } from "dayjs";
import { useEffect } from "react";
import { Controller, useFormContext } from "react-hook-form";

import DatePicker from "../../../components/DatePicker";
import TextField from "../../../components/TextField";

function AuthorForm() {
  const formContext = useFormContext();
  const { control, reset } = formContext;

  const disabledDate = (current: Dayjs) => {
    return current && current > dayjs().endOf("day");
  };

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

      <Controller
        control={control}
        name="email"
        render={({ field }) => (
          <TextField {...field} label="Email" type="email" />
        )}
      />

      <Controller
        control={control}
        name="jobTitle"
        render={({ field }) => <TextField {...field} label="Job Title" />}
      />

      <Controller
        control={control}
        name="jobType"
        render={({ field }) => <TextField {...field} label="Job Type" />}
      />

      <Controller
        control={control}
        name="employed"
        render={({ field: { value, onChange } }) => (
          <DatePicker
            label="Employed"
            disabledDate={disabledDate}
            value={value}
            onChange={onChange}
          />
        )}
      />

      <Controller
        control={control}
        name="isOnline"
        render={({ field: { value, ...rest } }) => (
          <Switch
            {...rest}
            checkedChildren="Online"
            unCheckedChildren="Offline"
            checked={value}
          />
        )}
      />
    </div>
  );
}

export default AuthorForm;

import { Typography } from "antd";
import generatePicker from "antd/lib/date-picker/generatePicker";
import { Dayjs } from "dayjs";
import dayjsGenerateConfig from "rc-picker/lib/generate/dayjs";
import { OnPanelChange, PanelMode } from "rc-picker/lib/interface";
import { ForwardedRef, forwardRef } from "react";

import styles from "./DatePicker.module.css";

const AntDatePicker = generatePicker<Dayjs>(dayjsGenerateConfig);
const { Text } = Typography;

interface DatePickerProps {
  disabledDate: (value: Dayjs) => boolean;
  format?: string;
  label: string;
  value: Dayjs;
  onChange: (value: Dayjs, dateString: string) => void;
}

const DatePicker = forwardRef(
  (props: DatePickerProps, ref: ForwardedRef<any>) => {
    const {
      disabledDate,
      label,
      format = "DD/MM/YYYY",
      value,
      onChange,
    } = props;

    return (
      <div className={styles.root}>
        <Text>{label}</Text>
        <AntDatePicker
          disabledDate={disabledDate}
          className={styles.datePicker}
          format={format}
          ref={ref}
          value={value}
          onChange={onChange}
        />
      </div>
    );
  }
);

export default DatePicker;

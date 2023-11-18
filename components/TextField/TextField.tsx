import { Input, InputProps, InputRef, Typography } from "antd";
import { ForwardedRef, forwardRef } from "react";

import styles from "./TextField.module.css";

const { Text } = Typography;

interface TextFieldProps extends InputProps {
  label: string;
}

const TextField = forwardRef(
  (props: TextFieldProps, ref: ForwardedRef<InputRef>) => {
    const { label, ...rest } = props;

    return (
      <div className={styles.root}>
        <Text>{label}</Text>
        <Input ref={ref} className={styles.input} {...rest} />
      </div>
    );
  }
);

export default TextField;

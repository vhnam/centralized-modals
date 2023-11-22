import { Spin } from "antd";

import styles from "./LoadingOverlay.module.css";

function LoadingOverlay() {
  return (
    <div className={styles.root}>
      <Spin size="large" />
    </div>
  );
}

export default LoadingOverlay;

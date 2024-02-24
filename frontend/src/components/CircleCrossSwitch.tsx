import { useState } from "react";
import styles from "./CircleCrossSwitch.module.css";

interface Props {
  isOk: boolean;
  onChange: (value: boolean) => void;
}
function CircleCrossSwitch({ isOk, onChange }: Props) {
  const [privateIsOk, setPrivateIsOk] = useState(isOk);
  const handleChange = (value: boolean) => {
    setPrivateIsOk(value);
    onChange(value);
  }
  return (
    <div className={styles.main_div}>
        {
            privateIsOk ?
            <p onClick={()=>handleChange(false)} className={`${styles.button} ${styles.ok}`}>◯</p>
            :
            <p onClick={()=>handleChange(true)} className={`${styles.button} ${styles.ng}`}>✕</p>
        }
    </div>
  );
}

export default CircleCrossSwitch;
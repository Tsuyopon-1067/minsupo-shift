import styles from "./CircleCrossSwitch.module.css";

interface Props {
  isOk: boolean;
  onChange: (value: boolean) => void;
}
function CircleCrossSwitch({ isOk, onChange }: Props) {
  return (
    isOk ?
      <p onClick={()=>onChange(false)} className={`${styles.button} ${styles.ok}`}>◯</p>
      :
      <p onClick={()=>onChange(true)} className={`${styles.button} ${styles.ng}`}>✕</p>
  );
}

export default CircleCrossSwitch;
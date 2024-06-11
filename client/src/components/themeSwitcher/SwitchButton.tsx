import styles from './SwitchButton.module.scss';

const SwitchButton = ({ value, onChange }: any) => {
  return (
    <label className={styles.root} htmlFor="toggler">
      <input id="toggler" type="checkbox" onClick={onChange} checked={value} readOnly />
      <span className={styles.slider} />
      <span className={styles.wave} />
    </label>
  );
};

export { SwitchButton };

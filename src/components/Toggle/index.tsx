import { FC, MouseEventHandler } from 'react'
import styles from './style.module.css'

type Props = {
    onChange: MouseEventHandler<HTMLInputElement>;
    value: boolean;
}

const Toggle: FC<Props> = ({ value, onChange }) => (
  <label className={styles.switch} htmlFor="toggler">
    <input
      id="toggler"
      type="checkbox"
      onClick={onChange}
      checked={value}
      readOnly
    />
    <span className={styles.slider} />
    <span className={styles.wave} />
  </label>
)

export default Toggle
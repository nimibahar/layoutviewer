import { useState } from 'react'
import styles from './style.module.scss';

export default function Text({ readMode, title, content }) {
  const [controlledTitle, setControlledTitle] = useState(title)

  return (
    <div className={styles.Text}>
      {readMode 
        ? <h5>{title}</h5> 
        : <input type="text" value={controlledTitle} onChange={e => setControlledTitle(e.target.value)} />
      }
      <p>{content}</p>
    </div>
  );
}
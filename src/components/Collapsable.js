import { useState } from 'react';
import { Plus } from 'react-feather';
import { componentsMap } from './index';
import styles from './style.module.scss';

export default function Collapsable({ title, contentTypeComponent, contentAttributes }) {
  const [isOpen, setOpen] = useState(false);
  const accordionContentClassName = isOpen
    ? styles.AccordionItemExpanded
    : styles.AccordionItemCollapsed

  const Component = componentsMap[contentTypeComponent];  

  return (
    <div className={styles.AccordionWrapper}>
      <div onClick={() => setOpen(!isOpen)}>
        <span><Plus size={16} /></span>
        {title}
      </div>
      <div className={accordionContentClassName}>
        <Component {...contentAttributes} />
      </div>
    </div>
  )
}


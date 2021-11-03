import styles from './style.module.scss';

export default function Image({ url, caption, altText }) {
  return (
    <div className={styles.Image}>
      <img alt={altText} src={url} />
      <p>{caption}</p>
    </div>
  );
}
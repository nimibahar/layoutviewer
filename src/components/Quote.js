import styles from './style.module.scss';

export default function Quote({ quote, cite }) {
  return (
    <div className={styles.Quote}>
	    <div className={styles.OpenQuote}>
		    <span>“</span>
	    </div>
      <div className={styles.QuoteContent}>
        <blockquote>{quote}</blockquote>
        <cite><span>-</span><span>{cite}</span></cite>
      </div>
      <div className={styles.CloseQuote}>
        <span>“</span>
      </div>
    </div>
  )
}
import styles from './style.module.scss';

export default function Table({ columns, data }) {
  return (
    <div className={styles.TableWrapper}>
      <table>
        <thead>
          <tr>
            {columns.map(({ header }) => <td key={header}>{header}</td>)}
          </tr>
        </thead>
        <tbody>
          {data.map((row, rowId) => {
            const rowClassName = rowId % 2 === 0 
              ? styles.EvenTableRow
              : styles.OddTableRow
            return (
              <tr key={row.keyId} className={rowClassName}>
                {columns.map(({ accessor }, idx) => (
                  <td key={`${accessor}_${idx}`}>{row[accessor]}</td>
                ))}
              </tr>
            )
          })}
        </tbody>
      </table>
    </div>
  )
}
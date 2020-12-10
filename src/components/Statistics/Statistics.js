import styles from './stat.module.css';

function Stats({ options }) {
  return (
    <section className={styles.section}>
      <h2 className={styles.title}>Upload stats</h2>

      <ul className={styles.statList}>
        {options.map(option => (
          <li
            className={styles.statListItem}
            key={option.id}
            style={{ backgroundColor: generateRandomColor() }}
          >
            <span className="label">{option.label}</span>
            <span className="percentage">{option.percentage}</span>
          </li>
        ))}
      </ul>
    </section>
  );
}
export default Stats;

function generateRandomColor() {
  const randomColor = '#' + Math.floor(Math.random() * 16777215).toString(16);
  return randomColor;
}

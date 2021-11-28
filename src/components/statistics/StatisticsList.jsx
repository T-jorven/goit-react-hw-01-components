import PropTypes from 'prop-types';
import styles from './Statistics.module.css';

const Statistics = ({ title, stats }) => {
  return (
    <section className={styles.Statistics}>
      <div>
        {' '}
        {title !== undefined && <h2 className={styles.Title}>{title}</h2>}
      </div>
      <ul className={styles.StatList}>
        {stats.map(datum => (
          <li
            key={datum.id}
            className={styles.ListItem}
            style={{ backgroundColor: `${datum.background}` }}
          >
            <span className={styles.Label}>{datum.label}</span>
            <span className={styles.Percentage}>{datum.percentage}%</span>
          </li>
        ))}
      </ul>
    </section>
  );
};

Statistics.propTypes = {
  title: PropTypes.string,
  stats: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      label: PropTypes.string.isRequired,
      percentage: PropTypes.number.isRequired,
      background: PropTypes.string.isRequired,
    }),
  ).isRequired,
};

export default Statistics;

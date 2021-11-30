import PropTypes from 'prop-types';
import s from './Statistics.module.css';

const Statistics = ({ title, stats }) => {
  return (
    <section className={s.Statistics}>
      <div> {title && <h2 className={s.Title}>{title}</h2>}</div>
      <ul className={s.StatList}>
        {stats.map(({ id, label, percentage }) => (
          <li key={id} className={s.ListItem}>
            <span className={s.Label}>{label}</span>
            <span className={s.Percentage}>{percentage}%</span>
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
      background: PropTypes.string,
    }),
  ).isRequired,
};

export default Statistics;

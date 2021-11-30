import PropTypes from 'prop-types';
import s from './Transaction.module.css';

const TransactionHistory = ({ data }) => {
  return (
    <table className={s.TransactionHistory}>
      <thead>
        <tr className={s.TableTitel}>
          <th>Type</th>
          <th>Amount</th>
          <th>Currency</th>
        </tr>
      </thead>
      <tbody className={s.TransactionBody}>
        {data.map(({id, type, amount, currency}) => (
          <tr className={s.Line} key={id}>
            <td>{type}</td>
            <td>{amount}</td>
            <td>{currency}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

TransactionHistory.propTypes = {
  data: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      type: PropTypes.string.isRequired,
      amount: PropTypes.string.isRequired,
      currency: PropTypes.string.isRequired,
    }),
  ).isRequired,
};

export default TransactionHistory;

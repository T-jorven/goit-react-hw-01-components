import PropTypes from 'prop-types';
import styles from './Transaction.module.css'


const TransactionHistory = ({ data }) => {
   
    return (
         <table className={styles.TransactionHistory}>
      <thead>
        <tr className={styles.TableTitel}>
          <th>Type</th>
          <th>Amount</th>
          <th>Currency</th>
        </tr>
      </thead>
      <tbody className={styles.TransactionBody}>
        {data.map(datum => (
         <tr className={styles.Line} key = {datum.id}>
      <td>{datum.type}</td>
      <td>{datum.amount}</td>
      <td>{datum.currency}</td>
    </tr>
        ))}
      </tbody>
    </table>
    )
}




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
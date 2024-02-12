import TransactionHistoryItem from "../transactionHistoryItem/TransactionHistoryItem";
import css from './TransactionHistory.module.css';

const TransactionHistory = ({ items }) => 
  (
  <section>
    <table className={css.transactionHistoryList}>
      <thead>
        <tr>
          <th>Type</th>
          <th>Amount</th>
          <th>Currency</th>
        </tr>
      </thead>

      <tbody>
        {items.map(item =>
          (<tr key={item.id}><TransactionHistoryItem item={item} /></tr>)
        )}
      </tbody>
    </table>
  </section>
)
  
export default TransactionHistory;
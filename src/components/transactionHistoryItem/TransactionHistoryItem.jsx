import './transactionHistoryItem.module.css';

const TransactionHistoryItem = ({ item }) => 
  (
    <>
      <td>{item.type}</td>
      <td>{item.amount}</td>
      <td>{item.currency}</td>
    </>
)
  
export default TransactionHistoryItem;
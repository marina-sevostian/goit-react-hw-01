import css from './TransactionHistory.module.css';
const TransactionHistory = ({ items }) => {
  return (
    <table className={css.table}>
      <thead>
        <tr>
          <th className={css.tableHead}>Type</th>
          <th className={css.tableHead}>Amount</th>
          <th className={css.tableHead}>Currency</th>
        </tr>
      </thead>

      <tbody>
        {items.map(item => (
          <tr className={css.tableLine} key={item.id}>
            <td className={css.tableCell}>{item.type}</td>
            <td className={css.tableCell}>{item.amount}</td>
            <td className={css.tableCell}>{item.currency}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default TransactionHistory;

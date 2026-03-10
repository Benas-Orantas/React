const Transactions = ({ transactions }) => {
  return (
    <div className="flex justify-center">
      <table className="w-[50%] h-300 border-collapse">
        <thead>
          <tr>
            <th>Type</th>
            <th>Amount</th>
            <th>Currency</th>
          </tr>
        </thead>
        <tbody>
          {transactions.map((transaction) => {
            const {type, amount, currency} = transaction
            return (
              <tr>
                <td>{type}</td>
                <td>{amount}</td>
                <td>{currency}</td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
};

export default Transactions;

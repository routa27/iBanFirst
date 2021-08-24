import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { getAccounts, getRate } from "../store/actions/accountsActions";
import "./style.scss";

const Accounts = () => {
  const dispatch = useDispatch();
  const { accounts, rates, loading } = useSelector(
    (state) => state.AccountsReducer
  );

  // Get list of accounts
  useEffect(() => {
    getAccounts(dispatch);
  }, []);

  // Retrieve all currencies rate
  useEffect(() => {
    if (!accounts.length) return;
    const currencies = new Set(accounts.map((account) => account.currency));
    currencies.forEach((currency) => {
      if (currency !== "EUR") getRate(dispatch, currency);
    });
  }, [accounts]);

  // Convert Amount Currency to EUR
  const getAmount = (amount, currency) => {
    if (currency === "EUR") return +amount;
    if (!rates[`EUR${currency}`]) return 0;
    return rates[`EUR${currency}`] ? amount / rates[`EUR${currency}`] : 0;
  };

  var dataColumns = ["Titulaire", "Code", "BIC", "Amount/Currency"];

  var tableHeaders = (
    <thead>
      <tr>
        {dataColumns.map(function (column) {
          return <th>{column}</th>;
        })}
      </tr>
    </thead>
  );

  var tableBody = accounts.map((account) => {
    return (
      <tr>
        <td>{account.holderBank?.name}</td>
        <td>{account.accountNumber}</td>
        <td>{account.holderBank?.bic}</td>
        <td>{`${getAmount(account.amount, account.currency).toFixed(
          2
        )} EUR`}</td>
      </tr>
    );
  });

  var tableFooter = (
    <tr>
      <td colspan={2}></td>
      <td>Solde consolidé</td>
      <td>
        {accounts
          .reduce(
            (total, account) =>
              total + getAmount(account.amount, account.currency),
            0
          )
          .toFixed(2)}
        EUR
      </td>
    </tr>
  );

  return (
    <table width="100%">
      {tableHeaders}
      {tableBody}
      {tableFooter}
    </table>
  );
};

export default Accounts;

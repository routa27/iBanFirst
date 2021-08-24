import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { getAccounts } from "../store/actions/accountsActions";

const Accounts = () => {
  const dispatch = useDispatch();
  const { accounts } = useSelector((state) => state.AccountsReducer);

  useEffect(() => {
    getAccounts(dispatch);
  }, []);

  console.log(accounts);

  return <p>Accounts</p>;
};

export default Accounts;

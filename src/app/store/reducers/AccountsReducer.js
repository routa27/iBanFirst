import accountsConstants from "../constants/accountsConstants";

export const initialState = {
  accounts: [],
  loading: false,
  error: null,
};

export const AccountsReducer = (state = initialState, action) => {
  switch (action.type) {
    case accountsConstants.REQUEST_ACCOUNTS_REQUEST:
      return {
        ...state,
        loading: true,
        error: null,
      };
    case accountsConstants.REQUEST_ACCOUNTS_GET:
      return {
        ...state,
        accounts: action.payload,
        loading: false,
      };
    case accountsConstants.REQUEST_ACCOUNTS_ERROR:
      return {
        ...state,
        accounts: [],
        error: action.payload,
        loading: false,
      };

    default:
      console.error(`unhandled action ${action.type}`);
      return state;
  }
};

export default AccountsReducer;

import accountsConstants from "../constants/accountsConstants";

export const initialState = {
  accounts: [],
  loading: false,
  error: null,
  rates: {},
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
    case accountsConstants.REQUEST_RATE_REQUEST:
      return {
        ...state,
        error: null,
      };
    case accountsConstants.REQUEST_RATE_GET:
      return {
        ...state,
        rates: {
          ...state.rates,
          [action.payload?.instrument]: action.payload?.rate,
        },
      };
    case accountsConstants.REQUEST_RATE_ERROR:
      return {
        ...state,
        error: action.payload,
      };

    default:
      console.error(`unhandled action ${action.type}`);
      return state;
  }
};

export default AccountsReducer;

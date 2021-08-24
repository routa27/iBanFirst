import { platformApi, publicApi } from "../../../services/api";
import accountsConstants from "../constants/accountsConstants";

export async function getAccounts(dispatch) {
  try {
    dispatch({ type: accountsConstants.REQUEST_ACCOUNTS_REQUEST });

    let response = await platformApi.get("/dataTestDevFront.json");

    dispatch({
      type: accountsConstants.REQUEST_ACCOUNTS_GET,
      payload: response.data?.accounts,
    });
  } catch (error) {
    dispatch({
      type: accountsConstants.REQUEST_ACCOUNTS_ERROR,
      payload: error,
    });
  }
}

export async function getRate(dispatch, currency) {
  try {
    dispatch({ type: accountsConstants.REQUEST_RATE_REQUEST });

    let response = await publicApi.get(`/Rate/EUR${currency}`);

    dispatch({
      type: accountsConstants.REQUEST_RATE_GET,
      payload: response.data?.rate,
    });
  } catch (error) {
    dispatch({
      type: accountsConstants.REQUEST_RATE_ERROR,
      payload: error,
    });
  }
}

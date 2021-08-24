import { platformApi } from "../../../services/api";
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

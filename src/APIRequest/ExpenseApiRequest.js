import axios from "axios";
import { ErrorToast } from "../helper/FormHelper";
import { getToken } from "../helper/SessionHelper";
import { BaseURL } from "../helper/config";
import {
  SetExpenseList,
  SetExpenseListTotal,
} from "../redux/slice/expenseSlice";
import { HideLoader, ShowLoader } from "../redux/slice/settingsSlice";
import store from "../redux/store/store";
const axiosConfig = { headers: { token: getToken() } };

// BrandListRequest
export async function ExpenseListRequest(pageNo, perPage, searchKey) {
  try {
    store.dispatch(ShowLoader());
    let URL = `${BaseURL}/expenseList/${pageNo}/${perPage}/${searchKey}`;

    const result = await axios.get(URL, axiosConfig);
    store.dispatch(HideLoader());

    if (result.status === 200 && result.data["status"] === "success") {
      if (result.data["data"][0]["Rows"].length > 0) {
        store.dispatch(SetExpenseList(result.data["data"][0]["Rows"]));
        store.dispatch(
          SetExpenseListTotal(result.data["data"][0]["Total"][0]["count"])
        );
      } else {
        store.dispatch(SetExpenseList([]));
        store.dispatch(SetExpenseListTotal(0));
        ErrorToast("No Data Found");
      }
    } else {
      ErrorToast("Something Went Wrong***");
    }
  } catch (e) {
    console.log(e);
    ErrorToast("Something Went Wrong+++");
    store.dispatch(HideLoader());
  }
}

export async function DeleteExpenseRequest(pageNo, perPage, searchKey) {
  try {
  } catch (e) {
    console.log(e);
    ErrorToast("Something Went Wrong+++");
    store.dispatch(HideLoader());
  }
}

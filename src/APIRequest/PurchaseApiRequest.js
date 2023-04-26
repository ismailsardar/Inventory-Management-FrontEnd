import axios from "axios";
import { ErrorToast } from "../helper/FormHelper";
import { getToken } from "../helper/SessionHelper";
import { BaseURL } from "../helper/config";
import {
    SetPurchaseList, SetPurchaseListTotal
} from "../redux/slice/purchaseSlice";
import { HideLoader, ShowLoader } from "../redux/slice/settingsSlice";
import store from "../redux/store/store";
const axiosConfig = { headers: { token: getToken() } };

// BrandListRequest
export async function PurchaseListRequest(pageNo, perPage, searchKey) {
  try {
    store.dispatch(ShowLoader());
    let URL = `${BaseURL}/purchasesList/${pageNo}/${perPage}/${searchKey}`;

    const result = await axios.get(URL, axiosConfig);
    store.dispatch(HideLoader());

    if (result.status === 200 && result.data["status"] === "success") {
      if (result.data["data"][0]["Rows"].length > 0) {
        store.dispatch(SetPurchaseList(result.data["data"][0]["Rows"]));
        store.dispatch(
            SetPurchaseListTotal(result.data["data"][0]["Total"][0]["count"])
        );
      } else {
        store.dispatch(SetPurchaseList([]));
        store.dispatch(SetPurchaseListTotal(0));
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

export async function DeletePurchaseRequest(pageNo, perPage, searchKey) {
  try {
  } catch (e) {
    console.log(e);
    ErrorToast("Something Went Wrong+++");
    store.dispatch(HideLoader());
  }
}

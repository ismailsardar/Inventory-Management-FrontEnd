import axios from "axios";
import { ErrorToast } from "../helper/FormHelper";
import { getToken } from "../helper/SessionHelper";
import { BaseURL } from "../helper/config";
import {
  SetProductList,
  SetProductListTotal,
} from "../redux/slice/productSlice";
import { HideLoader, ShowLoader } from "../redux/slice/settingsSlice";
import store from "../redux/store/store";
const axiosConfig = { headers: { token: getToken() } };

// BrandListRequest
export async function ProductListRequest(pageNo, perPage, searchKey) {
  try {
    store.dispatch(ShowLoader());
    let URL = `${BaseURL}/productList/${pageNo}/${perPage}/${searchKey}`;

    const result = await axios.get(URL, axiosConfig);
    store.dispatch(HideLoader());

    if (result.status === 200 && result.data["status"] === "success") {
      if (result.data["data"][0]["Rows"].length > 0) {
        store.dispatch(SetProductList(result.data["data"][0]["Rows"]));
        store.dispatch(
          SetProductListTotal(result.data["data"][0]["Total"][0]["count"])
        );
      } else {
        store.dispatch(SetProductList([]));
        store.dispatch(SetProductListTotal(0));
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

export async function DeleteProductRequest(pageNo, perPage, searchKey) {
    try {
      
    } catch (e) {
      console.log(e);
      ErrorToast("Something Went Wrong+++");
      store.dispatch(HideLoader());
    }
  }

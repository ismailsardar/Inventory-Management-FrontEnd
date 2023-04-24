import { configureStore } from "@reduxjs/toolkit";
import profileReducer from "../slice/profileSlice";
import settingsReducer from "../slice/settingsSlice";

export default configureStore({
    reducer:{
        settings: settingsReducer,
        profile: profileReducer,
    }
});
import { combineReducers } from "redux";
import { GetJobDataReducer } from "./GetJobDataReducer";

export const rootReducer = combineReducers({
    GetJobData : GetJobDataReducer
})
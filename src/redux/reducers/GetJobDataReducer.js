import {
  checkJobRole,
  checkExp,
  checkSalary,
  checkLocation,
  checkFilterCondition,
} from "../../utils/utilityFunctions";

let newData, data;

const state = {
  data: {
    jdList: [],
    totalCount: 0,
  },
  isLoading: false,
  error: {
    hasErrors: false,
  },
};

export const GetJobDataReducer = (newState = state, action) => {
  switch (action.type) {
    case "GET_JOB_DATA_REQUEST":
      return {
        ...newState,
        isLoading: true,
        tempData: null,
      };

    case "GET_JOB_DATA_SUCCESS":
      if (checkFilterCondition(action.payload.filters)) {
        data = [...action.payload.jobData.jdList];
      } else {
        data = [...newState.data.jdList, ...action.payload.jobData.jdList];
      }

      newData = data?.filter((item) => {
        return (
          checkJobRole(item, action.payload.filters?.["Roles"]) &&
          checkExp(item, action.payload.filters?.["Experience"]) &&
          checkSalary(
            item,
            action.payload.filters?.["Minimum Base Pay Salary"]
          ) &&
          checkLocation(item, action.payload.filters?.["Job Type"])
        );
      });

      return {
        ...newState,
        isLoading: false,
        data: {
          totalCount: action.payload.jobData.totalCount,
          jdList: newData,
        },
      };

    case "GET_JOB_DATA_FAILURE":
      return {
        ...newState,
        isLoading: false,
        error: {
          ...newState.error,
          hasErrors: true,
          msg: action.payload,
        },
      };

    default:
      return newState;
  }
};

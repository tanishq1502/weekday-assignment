import Actions from "./actions";
import axios from "axios";

export const actionCreators = {

  getJobData: (body,filters) => {
    return async (dispatch) => {
      dispatch({ type: Actions.GET_JOB_DATA_REQUEST });
      try {
        let res = await axios.post(
          `https://api.weekday.technology/adhoc/getSampleJdJSON`,
          body
        );
        if (res?.status === 200) {
          dispatch({
            type: Actions.GET_JOB_DATA_SUCCESS,
            payload: {
              jobData: res.data,
              filters: filters
            },
          });
          return res;
        } else {
          dispatch({
            type: Actions.GET_JOB_DATA_FAILURE,
            payload: res.data,
          });
          throw res;
        }
      } catch (err) {
        dispatch({ type: Actions.GET_JOB_DATA_FAILURE, payload: err });
        throw err;
      }
    };
  },
};

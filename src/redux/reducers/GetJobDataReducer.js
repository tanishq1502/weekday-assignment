const state = {
    data: {
        jdList:[],
        totalCount: 0
    },
    isLoading: false,
    error: {
        hasErrors: false
    },
    tempData: null 
}
let newData

export const GetJobDataReducer = (newState = state, action) => {
    switch (action.type) {

        case 'GET_JOB_DATA_REQUEST': return {
            ...newState,
            isLoading: true,
            tempData: null 
        }

        case 'GET_JOB_DATA_SUCCESS': 
        newData = newState.tempData ? newState.tempData : newState.data;

        return {
            ...newState,
            isLoading: false,
            data: {
                totalCount: action.payload.totalCount,
                jdList: [...newData.jdList, ...action.payload.jdList]
            },
            tempData: null // Reset tempData after updating data
        };

        case 'GET_JOB_DATA_FAILURE': return {
            ...newState,
            isLoading: false,
            error: {
                ...newState.error,
                hasErrors: true,
                msg: action.payload
            }
        }
        
        default: return newState
    }
}
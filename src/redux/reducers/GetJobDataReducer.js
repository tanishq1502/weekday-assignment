const state = {
    data: [],
    isLoading: false,
    error: {
        hasErrors: false
    }
}

export const GetJobDataReducer = (newState = state, action) => {
    switch (action.type) {

        case 'GET_JOB_DATA_REQUEST': return {
            ...newState,
            isLoading: true
        }

        case 'GET_JOB_DATA_SUCCESS': return {
            ...newState,
            isLoading: false,
            data: action.payload
        }

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
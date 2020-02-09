import * as actionTypes from '../actions'

let initialState = {
    succsess: "",
    loading: ""
};

const loginReducer = (state = initialState, action) => {
    switch (action.type) {
        case actionTypes.LOGIN_SUCCESS: {
            console.log(action.payload, "BUSINSTATE")
            return {
                ...state, businesspremises: action.payload, succsess: "yes"
            };
        }

        case actionTypes.LOGIN_ERROR: {
            console.log(action.payload, "errorreducer")
            return { ...state, succsess: "no", loading: false };
        }

        case actionTypes.LOADING_START: {

            return { ...state, loading: true };
        }

        case actionTypes.LOADING_END: {

            return { ...state, loading: false };
        }

        default: {
            return state;
        }
    }
};

export default loginReducer;

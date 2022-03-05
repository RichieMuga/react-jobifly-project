import React, { useReducer, useContext } from "react";
import { CLEAR_ALERT, DISPLAY_ALERT, REGISTER_USER_BEGIN, REGISTER_USER_SUCCESS, REGISTER_USER_ERROR } from "./actions";
import { reducer } from "./reducer";

const initialState = {
    isloading: false,
    showAlert: false,
    alertText: '',
    alertType: '',
    user: null,
    token: null,
    userLocation: ''
}

//create context
const AppContext = React.createContext()

const AppProvider = ({ children }) => {
    const [state, dispatch] = useReducer(reducer, initialState);

    const displayAlert = () => {
        dispatch({ type: DISPLAY_ALERT })
        clearAlert()
    }
    const clearAlert = () => {
        setTimeout(() => {
            dispatch({ type: CLEAR_ALERT })
        }, 4000);
    }
    const registerUser = async (currentUser) => {
        console.log(currentUser)
    }

    return (
        <AppContext.Provider value={{ ...state, displayAlert, registerUser }}>
            {children}
        </AppContext.Provider>
    )
}

export const useAppContext = () => {
    return useContext(AppContext)
}

export { AppProvider, initialState }


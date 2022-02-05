import React, { useReducer, useContext } from "react";
import { CLEAR_ALERT, DISPLAY_ALERT } from "./actions";
import { reducer } from "./reducer";

const initialState = {
    isloading: false,
    showAlert: false,
    alertText: '',
    alertType: ''
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


    return (
        <AppContext.Provider value={{ ...state, displayAlert }}>
            {children}
        </AppContext.Provider>
    )
}

export const useAppContext = () => {
    return useContext(AppContext)
}

export { AppProvider, initialState }


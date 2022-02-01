import React, { useState, useReducer, useContext } from "react";

const initialState = {
    isloading: false,
    showAlert: false,
    alertText: '',
    alertType: ''
}

//create context
const AppContext = React.createContext()

const AppProvider = ({ children }) => {
    const [state, setstate] = useState(initialState);
    return (
        <AppContext.Provider value={state}>
            {children}
        </AppContext.Provider>
    )
}

export const useAppContext = () => {
    return useContext(AppContext)
}

export { AppProvider, initialState }


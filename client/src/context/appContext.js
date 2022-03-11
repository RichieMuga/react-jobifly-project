import React, { useReducer, useContext } from "react";
import { CLEAR_ALERT, DISPLAY_ALERT, REGISTER_USER_BEGIN, REGISTER_USER_SUCCESS, REGISTER_USER_ERROR } from "./actions";
import { reducer } from "./reducer";
import axios from 'axios';


const initialState = {
    isloading: false,
    showAlert: false,
    alertText: '',
    alertType: '',
    user: null,
    token: null,
    userLocation: '',
    joblocation: ''
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
        dispatch({ type: REGISTER_USER_BEGIN })
        try {
            const response = await axios.post('/api/v1/auth/register', currentUser)
            console.log(response);
            const { user, location, token } = response.data
            dispatch({
                type: REGISTER_USER_SUCCESS, payload: {
                    user,
                    token,
                    location
                }
            })
            ///local storage later
        } catch (error) {
            console.log(error.response);
            dispatch({
                type: REGISTER_USER_ERROR,
                payload: error.response.data.msg
            })
        }
        clearAlert()
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


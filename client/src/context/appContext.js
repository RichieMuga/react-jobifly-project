import React, { useReducer, useContext } from "react";
import {
    CLEAR_ALERT,
    DISPLAY_ALERT,
    REGISTER_USER_BEGIN,
    REGISTER_USER_SUCCESS,
    REGISTER_USER_ERROR,
    LOGIN_USER_BEGIN,
    LOGIN_USER_SUCCESS,
    LOGIN_USER_ERROR,
    TOGGLE_SIDE_BAR,
    LOG_OUT_USER,
} from "./actions";
import { reducer } from "./reducer";
import axios from 'axios';
//import { header } from "express/lib/request";

//setup user when app loads
const token = localStorage.getItem('token')
const user = localStorage.getItem('user')
const userLocation = localStorage.getItem('userLocation')



const initialState = {
    isloading: false,
    showAlert: false,
    alertText: '',
    alertType: '',
    user: user ? JSON.parse(user) : null,
    token: token || '',
    userLocation: userLocation || '',
    joblocation: userLocation || '',
    showSidebar: false
}

//create context
const AppContext = React.createContext()

const AppProvider = ({ children }) => {
    const [state, dispatch] = useReducer(reducer, initialState);


    //axios
    const authFetch = axios.create({
        baseURL: 'api/v1'
    })

    //request
    authFetch.interceptors.request.use((config) => {
        // config.headers.common['Authorization'] = `Bearer ${state.token}`
        return config
    }, (error) => {
        return Promise.reject(error)
    })
    authFetch.interceptors.response.use(function (response) {

        return response;
    }, function (error) {
        console.log(error.response);
        if (error.response.status === 401) {
            console.log('AUTH ERROR');
        }
        return Promise.reject(error);
    });

    const displayAlert = () => {
        dispatch({ type: DISPLAY_ALERT })
        clearAlert()
    }
    const clearAlert = () => {
        setTimeout(() => {
            dispatch({ type: CLEAR_ALERT })
        }, 4000);
    }
    const toggleSidebar = () => {
        dispatch({ type: TOGGLE_SIDE_BAR })
    }

    const addUserToLocalStorage = (token, user, location) => {
        localStorage.setItem('user', JSON.stringify(user))
        localStorage.setItem('token', token)
        localStorage.setItem('location', location)

    }
    const removeUserFromLocal = () => {
        localStorage.removeItem('token')
        localStorage.removeItem('user')
        localStorage.removeItem('location')

    }
    const registerUser = async (currentUser) => {
        dispatch({ type: REGISTER_USER_BEGIN })
        try {
            const response = await authFetch.post('/auth/register', currentUser)
            // console.log(response);
            const { user, location, token } = response.data
            dispatch({
                type: REGISTER_USER_SUCCESS, payload: {
                    user,
                    token,
                    location
                }
            })
            addUserToLocalStorage(token, user, location)
        } catch (error) {
            //console.log(error.response);
            dispatch({
                type: REGISTER_USER_ERROR,
                payload: { msg: error.response.data.msg }
            })
        }
        clearAlert()
    }
    const loginUser = async (currentUser) => {
        dispatch({ type: LOGIN_USER_BEGIN })
        try {
            const response = await axios.post('/api/v1/auth/login', currentUser)
            // console.log(response);
            const { user, location, token } = response.data
            dispatch({
                type: LOGIN_USER_SUCCESS, payload: {
                    user,
                    token,
                    location
                }
            })
            addUserToLocalStorage(token, user, location)
        } catch (error) {
            // console.log(error.response);
            dispatch({
                type: LOGIN_USER_ERROR,
                payload: { msg: error.response.data.msg }
            })
        }
        clearAlert()

    }
    const logout = () => {
        dispatch({ type: LOG_OUT_USER })
        removeUserFromLocal()
    }
    const updateUser = async (currentUser) => {
        try {
            const { data } = await authFetch.patch('/auth/updateUser', currentUser)
            console.log(data)

        } catch (error) {
            //console.log(error.response);
        }
    }

    return (
        <AppContext.Provider value={{ ...state, displayAlert, registerUser, loginUser, toggleSidebar, logout, updateUser }}>
            {children}
        </AppContext.Provider>
    )
}


export const useAppContext = () => {
    return useContext(AppContext)
}

export { AppProvider, initialState }


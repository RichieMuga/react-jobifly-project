import {
    DISPLAY_ALERT,
    CLEAR_ALERT,
    REGISTER_USER_BEGIN,
    REGISTER_USER_SUCCESS,
    REGISTER_USER_ERROR,
    LOGIN_USER_BEGIN,
    LOGIN_USER_SUCCESS,
    LOGIN_USER_ERROR,
    TOGGLE_SIDE_BAR,
    LOG_OUT_USER
} from "./actions"
import { initialState } from './appContext';

const reducer = (state, action) => {
    if (action.type === DISPLAY_ALERT) {
        return {
            ...state,
            showAlert: true,
            alertText: 'Please provide appropriate values!',
            alertType: 'danger',
        }
    }
    if (action.type === CLEAR_ALERT) {
        return { ...state, showAlert: false }
    }
    if (action.type === REGISTER_USER_BEGIN) {
        return { ...state, isloading: true }
    }
    if (action.type === REGISTER_USER_SUCCESS) {
        return {
            ...state,
            user: action.payload.user,
            token: action.payload.token,
            userLocation: action.payload.token,
            joblocation: action.payload.token,
            showAlert: true,
            alertType: 'success',
            alertText: 'Registered successfully redirecting...'
        }
    }
    if (action.type === REGISTER_USER_ERROR) {
        return {
            ...state,
            showAlert: true,
            alertType: 'danger',
            alertText: action.payload.msg,
            isloading: false
        }
    }
    if (action.type === LOGIN_USER_BEGIN) {
        return { ...state, isloading: true }
    }
    if (action.type === LOGIN_USER_SUCCESS) {
        return {
            ...state,
            user: action.payload.user,
            token: action.payload.token,
            userLocation: action.payload.token,
            joblocation: action.payload.token,
            showAlert: true,
            alertType: 'success',
            alertText: 'Login successfull redirecting...'
        }
    }
    if (action.type === LOGIN_USER_ERROR) {
        return {
            ...state,
            showAlert: true,
            alertType: 'danger',
            alertText: action.payload.msg,
            isloading: false
        }
    }
    if (action.type === TOGGLE_SIDE_BAR) {
        return { ...state, showSidebar: !state.showSidebar }
    }
    if (action.type === LOG_OUT_USER) {
        return {
            initialState,
            user: null,
            token: null,
            userLocation: null,
            joblocation: null,
        }
    }
    throw new Error(`No such action ${action.type}`)
}

export { reducer }
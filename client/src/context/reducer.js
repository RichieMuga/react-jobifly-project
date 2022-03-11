import { DISPLAY_ALERT, CLEAR_ALERT, REGISTER_USER_BEGIN, REGISTER_USER_SUCCESS, REGISTER_USER_ERROR } from "./actions"

const reducer = (state, action) => {
    if (action.type === DISPLAY_ALERT) {
        return { ...state, alertText: 'Please provide appropriate values!', alertType: 'danger', showAlert: true }
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
    throw new Error(`No such action ${action.type}`)
}

export { reducer }
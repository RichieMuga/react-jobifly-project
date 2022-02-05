import { DISPLAY_ALERT, CLEAR_ALERT } from "./actions"

const reducer = (state, action) => {
    if (action.type === DISPLAY_ALERT) {
        return { ...state, alertText: 'Please provide appropriate values!', alertType: 'danger', showAlert: true }
    }
    if (action.type === CLEAR_ALERT) {
        return { ...state, showAlert: false }
    }
    throw new Error(`No such action ${action.type}`)
}

export { reducer }
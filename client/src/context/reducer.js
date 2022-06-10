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
    LOG_OUT_USER,
    UPDATE_USER_BEGIN,
    UPDATE_USER_SUCCESS,
    UPDATE_USER_ERROR,
    HANDLE_CHANGE,
    CLEAR_VALUES,
    CREATE_JOB_BEGIN,
    CREATE_JOB_SUCCESS,
    CREATE_JOB_ERROR,
    GET_JOBS_BEGIN,
    GET_JOBS_SUCCESS,
    SET_EDIT_JOB,
    DELETE_JOBS_BEGIN,
    EDIT_JOB_BEGIN,
    EDIT_JOB_SUCCESS,
    EDIT_JOB_ERROR
} from './actions';
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
    if (action.type === UPDATE_USER_BEGIN) {
        return ({
            ...state,
            isloading: true
        })
    }
    if (action.type === UPDATE_USER_SUCCESS) {
        return {
            ...state,
            isloading: false,
            token: action.payload.token,
            user: action.payload.user,
            userLocation: action.payload.location,
            joblocation: action.payload.locaion,
            showAlert: true,
            alertType: 'success',
            alertText: 'User profile updated'
        }
    }
    if (action.type === UPDATE_USER_ERROR) {
        return ({
            ...state,
            showAlert: true,
            alertType: 'danger',
            alertText: action.payload.msg,
            isloading: false
        })
    }
    if (action.type === HANDLE_CHANGE) {
        return {
            ...state,
            [action.payload.name]: action.payload.value
        }
    }
    if (action.type === CLEAR_VALUES) {
        return {
            ...state,
            position: '',
            company: '',
            joblocation: state.userLocation,
            jobType: 'full-time',
            status: 'pending'

        }
    }
    if (action.type === CREATE_JOB_BEGIN) {
        return {
            ...state,
            isloading: true
        }
    }
    if (action.type === CREATE_JOB_SUCCESS) {
        return {
            ...state,
            showAlert: true,
            alertType: 'success',
            alertText: "Job created!",
            isloading: false
        }
    }
    if (action.type === CREATE_JOB_ERROR) {
        return {
            ...state,
            showAlert: true,
            alertType: 'danger',
            alertText: action.payload.msg,
            isloading: false
        }
    }
    if (action.type === GET_JOBS_BEGIN) {
        return {
            ...state,
            showAlert: false,
            isloading: true
        }
    }
    if (action.type === GET_JOBS_SUCCESS) {
        return {
            ...state,
            showAlert: true,
            isloading: false,
            jobs: action.payload.jobs,
            totalJobs: action.payload.totalJobs,
            numOfPages: action.payload.numofpages,
        }
    }

    if (action.type === SET_EDIT_JOB) {
        const job = state.jobs.find((jobo) => jobo._id === action.payload.id)
        const { _id, position, company, jobLocation, jobType } = job
        return {
            ...state,
            isEditing: true,
            editedJobId: _id,
            position,
            company,
            jobLocation,
            jobType
        }
    }
    if (action.type === DELETE_JOBS_BEGIN) {
        return {
            ...state,
            isloading: true
        }
    }
    if (action.type === EDIT_JOB_BEGIN) {
        return {
            ...state,
            isloading: true
        }
    }
    if (action.type === EDIT_JOB_SUCCESS) {
        return {
            ...state,
            showAlert: true,
            alertType: 'success',
            alertText: "Job edited!",
            isloading: false
        }
    }
    if (action.type === EDIT_JOB_ERROR) {
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
import { FormRow, Alert } from '../../components';
import { useAppContext } from '../../context/appContext';
import Wrapper from '../../assets/wrappers/DashboardFormPage';

const AddJob = () => {
    const {
    showAlert,
    displayAlert,
    isEdiing,
    position,
    company,
    jobLocation,
    jobTypeOptions,
    jobType,
    statusOptions,
    status}=useAppContext()

    const handleJobInput=(e)=>{
        e.preventDefault()
        const name= e.target.name;
        const value= e.target.value;
        console.log(`${name}, ${value}`)
    }
    const handleSubmit=(e)=>{
        e.preventDefault()
        if (!position || !company || !jobLocation) {
            displayAlert()
            return
        }
        console.log('create job')
    }

    return (
        <Wrapper>
            <form className='form'>
                <h3>{isEdiing?'Edit Job': 'Add Job'}</h3>
                {showAlert && <Alert/>}
                <div className='form-center'>
                    {/* {position} */}
                    <FormRow type='text' name='position' value={position} handleChange={handleJobInput}/>
                    {/* {company} */}
                    <FormRow type='text' name='company' value={company} handleChange={handleJobInput}/>
                    {/* {jobLocation} */}
                    <FormRow type='text' labelText='Job Location' name='jobLocation' value={jobLocation} handleChange={handleJobInput}/>
                    {/* {jobType} */}
                    {/* {jobStatus} */}
                        <div className='btn-container'>
                            <button type='submit' className='btn btn-block submit-btn' onClick={handleSubmit}>submit</button>
                        </div>

                </div>
            </form>
        </Wrapper>
    )
}

export default AddJob
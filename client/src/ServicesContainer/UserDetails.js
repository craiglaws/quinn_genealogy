import React, { useState } from 'react';

function UserDetails({halftree, onFormSubmit}){

    const [userEntry, setUserEntry] = useState({
        name: '',
        dob: '',
        birthplace: '',
        email: '',
        phoneNumber: ''
    })

    function updateField(e){
        setUserEntry({...userEntry, [e.target.name]: e.target.value})
    }

    function handleSumbit(e){
        e.preventDefault();
        const formEntry = userEntry
        onFormSubmit(formEntry)
    }

    return(
        <div className='tree-bg'>
        <div className='container'>

            <div className='row justify-content-center py-4'>
                <div className='col-8 text-center opacity'>
                    <h2 className='script-text-2'>Your Details</h2>
                    <p className=''>
                        First off, lets get some of your details
                    </p>
                </div>
            </div>

    



            <div className='row justify-content-center'>
                    <form onSubmit={handleSumbit} className='col-8 opacity form-card-dk p-3'>
                        
                        <div className='row'>
                            <div className='py-2 col'>
                                <label className='form-label py-0' htmlFor="name">Name</label>
                            
                                    <input className='form-control' type="text" name="name" id="name" value={userEntry.name} onChange={updateField} />
                                
                            </div>
                            <div className='py-2 col'>
                                <label className='form-label py-0' htmlFor="dob">D.O.B</label>
                            
                                    <input className='form-control' type="text" name="dob" id="dob" value={userEntry.dob} onChange={updateField} />
                            
                            </div>
                        </div>
                        <div className='row'>
                            <div className='py-2 col'>
                                <label className='form-label py-0' htmlFor="birthplace">Birthplace</label>
                                
                                    <input className='form-control' type="text" name="birthplace" id="birthplace" value={userEntry.birthplace} onChange={updateField} />
                                
                            </div>

                            <div className='py-2 col'>
                                <label className='form-label py-0' htmlFor="email">Email</label>
                            
                                    <input className='form-control' type="email" name="email" id="email" value={userEntry.email} onChange={updateField} />
                            
                            </div>
                        </div>
                        <div className='row'>
                            <div className='py-2 col'>
                                <label className='form-label py-0' htmlFor="phoneNumber">Contact Number</label>
                            
                                    <input className='form-control' type="text" name="phoneNumber" id="phoneNumber" value={userEntry.phoneNumber} onChange={updateField} />
                            
                            </div>
                        
                                {halftree
                                ? <>
                                    <div className='py-2 col'>
                                        <label className='form-label py-0' htmlFor="familySide">Family Side</label>
                                    
                                            <select className='form-control' defaultValue='Select Option' name="familySide" id="familySide" value={userEntry.familySide} onChange={updateField}>
                                                <option disabled={true}>Select Option</option>
                                                <option value="mother">Mother</option>
                                                <option value="father">Father</option>
                                            </select>
                                        
                                    </div>
                                    </>
                                : null}
                            </div>
                            <div className='row justify-content-center'>
                                <button className='btn btn-primary-lt mt-4' type="submit">Next</button>
                            </div>
                    </form>
                </div>
                </div>
                
           
       
        </div>
    )
}

export default UserDetails;
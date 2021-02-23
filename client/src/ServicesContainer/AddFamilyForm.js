import React, {useState} from 'react';

function AddFamilyForm({ onFormSubmit, onUpdateField, entryArrayValue, currentEntry }){


    function updateField(e){
        onUpdateField(e, entryArrayValue)
    }

    function handleFormSubmit(e){
        e.preventDefault();
        const formEntry = currentEntry;
        onFormSubmit(formEntry, entryArrayValue);
    }

    return(
        <>
        <div className='row justify-content-center pt-4'>
            <div className='col-10 text-center'>
                <h2 className='script-text-2'>Family Member Details</h2>
                <p className=''>
                Now time to add your family members. If you're not sure on just leave the feild blank 
                </p>
            </div>
        </div>

        <div className='row justify-content-center mb-3'>
                <form onSubmit={handleFormSubmit} className='col-8 opacity form-card-dk p-3'>
                    <div className='row'>
                        <div className='col py-2'>
                            {/* <label className='form-label' htmlFor="name">Name</label> */}
                            <input className='form-control' type="text" name="name" id="name" value={currentEntry.name} onChange={updateField} placeholder='Full Name' />
                        </div>
                        <div className='col py-2'>
                            {/* <label className='form-label' htmlFor="dob">D.O.B</label> */}
                            <input className='form-control' type="text" name="dob" id="dob" value={currentEntry.dob} onChange={updateField} placeholder='D.O.B - DD/MM/YYYY'/>
                        </div>
                    </div>
                    
                    <div className='row'>
                        <div className='col py-2'>
                            {/* <label className='form-label' htmlFor="birthplace">Birthplace</label> */}
                            <input className='form-control' type="text" name="birthplace" id="birthplace" value={currentEntry.birthplace} onChange={updateField} placeholder='Birthplace' />
                        </div>
                        <div className='col py-2'>
                            {/* <label className='form-label' htmlFor="relation">Relation</label> */}
                            <input className='form-control' type="text" name="relation" id="relation" value={currentEntry.relation} onChange={updateField} placeholder='Relation to you '/>
                        </div>
                    </div>

                    <div className='row justify-content-center'>
                        <button className='btn btn-primary-lt' type="submit">Save</button>
                    </div>

                </form>
        </div>
        </>
    )
}

export default AddFamilyForm;
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
        <>
            <form onSubmit={handleSumbit}>
                    <label htmlFor="name">Name</label>
                    <input type="text" name="name" id="name" value={userEntry.name} onChange={updateField} />

                    <label htmlFor="dob">D.O.B</label>
                    <input type="text" name="dob" id="dob" value={userEntry.dob} onChange={updateField} />

                    <label htmlFor="birthplace">Birthplace</label>
                    <input type="text" name="birthplace" id="birthplace" value={userEntry.birthplace} onChange={updateField} />

                    <label htmlFor="email">Email</label>
                    <input type="email" name="email" id="email" value={userEntry.email} onChange={updateField} />

                    <label htmlFor="phoneNumber">Contact Number</label>
                    <input type="text" name="phoneNumber" id="phoneNumber" value={userEntry.phoneNumber} onChange={updateField} />

                    {halftree
                     ? <>
                        <label htmlFor="familySide">Family Side</label>
                            <select defaultValue='Select Option' name="familySide" id="familySide" value={userEntry.familySide} onChange={updateField}>
                                <option disabled={true}>Select Option</option>
                                <option value="mother">Mother</option>
                                <option value="father">Father</option>
                            </select>
                        </>
                     : null}

                    <button type="submit">Save</button>
            </form>
        </>
    )
}

export default UserDetails;
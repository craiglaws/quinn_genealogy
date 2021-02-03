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
            <div className="entry-form">
                <form onSubmit={handleFormSubmit}>
                    <label htmlFor="name">Name</label>
                    <input type="text" name="name" id="name" value={currentEntry.name} onChange={updateField} />

                    <label htmlFor="dob">D.O.B</label>
                    <input type="text" name="dob" id="dob" value={currentEntry.dob} onChange={updateField} />

                    <label htmlFor="birthplace">Birthplace</label>
                    <input type="text" name="birthplace" id="birthplace" value={currentEntry.birthplace} onChange={updateField} />

                    <label htmlFor="relation">Relation</label>
                    <input type="text" name="relation" id="relation" value={currentEntry.relation} onChange={updateField} />

                    <button type="submit">Save</button>

                </form>
            </div>
        </>
    )
}

export default AddFamilyForm;
import React, { useState } from 'react';
import {v4 as uuidv4} from 'uuid';
import AddedFamily from './AddedFamily';

function ServicesTreeView(){

    const [currentEntry, setCurrentEntry] = useState({
        name: '',
        dob: '',
        birthplace: '',
        relation: ''
    });

    const [addedEntries, setAddedEntries] = useState([]);

    const updateField = (e) => {
        setCurrentEntry({...currentEntry, [e.target.name]: e.target.value})
    }

    const handleAddNewMember = (e) => {
        e.preventDefault();
        const newMember = {
            name: currentEntry.name,
            dob: currentEntry.dob,
            birthplace: currentEntry.birthplace,
            relation: currentEntry.relation,
            id: uuidv4()
        };

        setAddedEntries([...addedEntries, newMember])

        setCurrentEntry({
            name: '',
            dob: '',
            birthplace: '',
            relation: ''
        })
    }


    function handleDelete(member){
        setAddedEntries(addedEntries.filter(item => item.id !== member.id))
    }

    return(
        <>
            <div className="entry-form">
                <form onSubmit={handleAddNewMember}>
                    <label htmlFor="name">Name</label>
                    <input type="text" name="name" id="name" value={currentEntry.name} onChange={updateField} />

                    <label htmlFor="dob">D.O.B</label>
                    <input type="text" name="dob" id="dob" value={currentEntry.dob} onChange={updateField} />

                    <label htmlFor="birthplace">Birthplace</label>
                    <input type="text" name="birthplace" id="birthplace" value={currentEntry.birthplace} onChange={updateField} />

                    <label htmlFor="relation">Relation</label>
                    <input type="text" name="relation" id="relation" value={currentEntry.relation} onChange={updateField} />

                    <button type="submit">Add Family Member</button>

                </form>
            </div>

            <div className="added-family">
                <AddedFamily addedEntries={addedEntries} deleteMember={handleDelete} />
            </div>
        </>
    )
}

export default ServicesTreeView;
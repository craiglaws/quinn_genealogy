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

        if(!currentEntry.id){
            const newMember = {
                name: currentEntry.name,
                dob: currentEntry.dob,
                birthplace: currentEntry.birthplace,
                relation: currentEntry.relation,
                id: uuidv4()
            };
            setAddedEntries([...addedEntries, newMember])
        }
        if(currentEntry.id){
           const tempArray = addedEntries.map(x => 
               x.id === currentEntry.id ? currentEntry : x
           );
           console.log(...tempArray);
           setAddedEntries(tempArray)

        }

        

        resetFormFields();
    }

    function resetFormFields(){
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

    function handleUpdate(member){
        setCurrentEntry(member)
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

                    <button type="submit">Save</button>

                </form>
            </div>

            <div className="added-family">
                <AddedFamily addedEntries={addedEntries} deleteMember={handleDelete} updateMember={handleUpdate}/>
            </div>
        </>
    )
}

export default ServicesTreeView;
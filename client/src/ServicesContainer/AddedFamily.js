import React from 'react';
import FamilyMember from './FamilyMember';

function AddedFamily({addedEntries, deleteMember, updateMember, entryArrayValue}){
    
    function handleDelete(member){
        deleteMember(member, entryArrayValue);
    }

    function handleUpdate(member){
        updateMember(member, entryArrayValue)
    }

    if(addedEntries.length > 0){

        const familyMemberComps = addedEntries.map((member) => 
        <FamilyMember key={member.id} member={member} deleteMember={handleDelete} updateMember={handleUpdate}/>);

        

        return(
            <div>
                <div className='text-center pt-2'>
                    <h2 className='script-text-2'>Added Family</h2>
                </div>
                <div className='row row-cols-1 row-cols-md-3 g-4'>
                    {familyMemberComps}
                </div>
            </div>
        )};


        return(
            <div className='text-center pt-2'>
                <h2 className='script-text-2'>Added Family</h2>
                <p>No family added</p>
            </div>
        )
}

export default AddedFamily;
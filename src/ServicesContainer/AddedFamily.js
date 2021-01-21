import React from 'react';
import FamilyMember from './FamilyMember';

function AddedFamily({addedEntries, deleteMember, updateMember}){
    
    function handleDelete(member){
        deleteMember(member);
    }

    function handleUpdate(member){
        updateMember(member)
    }

    if(addedEntries.length > 0){

        const familyMemberComps = addedEntries.map((member) => 
        <FamilyMember key={member.id} member={member} deleteMember={handleDelete} updateMember={handleUpdate}/>);

        

        return(
            <div>
                {familyMemberComps}
            </div>
        )};


        return(
            <div>
                No Family
            </div>
        )
}

export default AddedFamily;
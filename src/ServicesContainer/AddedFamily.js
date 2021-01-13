import React from 'react';
import FamilyMember from './FamilyMember';

function AddedFamily({addedEntries, deleteMember}){
    
    function handleDelete(member){
        deleteMember(member);
    }

    if(addedEntries.length > 0){

        const familyMemberComps = addedEntries.map((member) => 
        <FamilyMember key={member.id} member={member} deleteMember={handleDelete}/>);

        

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
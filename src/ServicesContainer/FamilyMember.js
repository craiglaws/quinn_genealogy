import React from 'react';

function FamilyMember({member, deleteMember}){

    const handleDelete = () => {

        deleteMember(member);
    }

    return(
        <>
        <h2>{member.name}</h2>
        <button onClick={handleDelete}>Delete</button>
        </>
    )
}

export default FamilyMember;
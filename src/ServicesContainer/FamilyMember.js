import React from 'react';

function FamilyMember({member, deleteMember, updateMember}){

    const handleDelete = () => {
        deleteMember(member);
    }

    const handleUpdate = () => {
        updateMember(member)
    }

    return(
        <>
        <h2>{member.name}</h2>
        <button onClick={handleDelete}>Delete</button>
        <button onClick={handleUpdate}>Update</button>
        </>
    )
}

export default FamilyMember;
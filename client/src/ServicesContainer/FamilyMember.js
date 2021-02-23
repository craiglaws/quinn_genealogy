import React from 'react';

function FamilyMember({member, deleteMember, updateMember}){

    const handleDelete = () => {
        deleteMember(member);
    }

    const handleUpdate = () => {
        updateMember(member)
    }

    return(
    <div className="col mb-3">

    
            <div className="family-member bx-shad">
                <ul className='list-group list-group-flush '>
                    <li className='list-group-item'>{member.name}</li>
                    <li className='list-group-item'>D.O.B: {member.dob}</li>
                    <li className='list-group-item'>Birthplace: {member.birthplace}</li>
                    <li className='list-group-item'>Relation: {member.relation}</li>
                    <li className='list-group-icon'>
                        <div className='text-center icon-btn'>
                            <button className='icon-drk' onClick={handleDelete}><i className="bi bi-trash-fill"></i></button>
                            <button className='icon-drk' onClick={handleUpdate}><i className="bi bi-pencil-square"></i></button>
                        </div>
                    </li>
                </ul>
            </div>

    </div>
        
    )
}

export default FamilyMember;
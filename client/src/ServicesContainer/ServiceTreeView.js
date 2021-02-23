import React, { useState } from 'react';
import {v4 as uuidv4} from 'uuid';
import AddedFamily from './AddedFamily';
import AddFamilyForm from './AddFamilyForm'
import ConfirmationPage from './ConfirmationPage';
import UserDetails from './UserDetails';
import Helper from '../Helpers/Helper';


function ServiceTreeView(props){

    const [currentEntry1, setCurrentEntry1] = useState({
        name: '',
        dob: '',
        birthplace: '',
        relation: ''
    });

    const [currentEntry2, setCurrentEntry2] = useState({
        name: '',
        dob: '',
        birthplace: '',
        relation: ''
    });

    const [addedEntries1, setAddedEntries1] = useState([]);
    const [addedEntries2, setAddedEntries2] = useState([]);

    const [pageView, setPageView] = useState(1);

    const [userDetails, setUserDetails] = useState({})

    function updateField(e, arrayValue){
        if(arrayValue === "1"){
            setCurrentEntry1({...currentEntry1, [e.target.name]: e.target.value})
        }
        if(arrayValue === "2"){
            setCurrentEntry2({...currentEntry2, [e.target.name]: e.target.value})
        }
    }

    function handleFormSubmit(currentEntry, arrayValue){
        handleAddNewMember(currentEntry, arrayValue);
        resetFormFields(arrayValue);

    }

    function resetFormFields(arrayValue){
        if(arrayValue === "1"){
            setCurrentEntry1({
                name: '',
                dob: '',
                birthplace: '',
                relation: ''
            })
        }
        if(arrayValue === "2"){
            setCurrentEntry2({
                name: '',
                dob: '',
                birthplace: '',
                relation: ''
            })
        }
    }

    function handleAddNewMember(currentEntry, arrayValue){
        //For new member
        if(!currentEntry.id){
            const newMember = {
                name: currentEntry.name,
                dob: currentEntry.dob,
                birthplace: currentEntry.birthplace,
                relation: currentEntry.relation,
                id: uuidv4()
            };

            if(arrayValue === "1")
            setAddedEntries1([...addedEntries1, newMember])
            if(arrayValue === "2")
            setAddedEntries2([...addedEntries2, newMember])
        }
        //To update details of existing entry
        if(currentEntry.id){
            if(arrayValue === "1"){
                const tempArray = addedEntries1.map(x => 
                    x.id === currentEntry.id ? currentEntry : x
                );
                setAddedEntries1(tempArray)
            }
            if(arrayValue === "2"){
                const tempArray = addedEntries2.map(x => 
                    x.id === currentEntry.id ? currentEntry : x
                );
                setAddedEntries2(tempArray)
            }
        }
    }

    function handleDelete(member, arrayValue){
        if(arrayValue ==="1"){
            setAddedEntries1(addedEntries1.filter(item => item.id !== member.id))
        }
        if(arrayValue ==="2"){
            setAddedEntries2(addedEntries2.filter(item => item.id !== member.id))
        }

    }

    function handleUpdate(member, arrayValue){
        if(arrayValue === "1"){
            setCurrentEntry1(member)
        }
        if(arrayValue === "2"){
            setCurrentEntry2(member)
        }

    }

    function handleMoveToPageTwo(formDetails){
        setUserDetails(formDetails)
        setPageView(2)
    }

    function handleMoveToPageThree(){
        setPageView(3)
        let data = {
            userRequestDetails : userDetails,
            motherSide : userDetails.familySide ? (userDetails.familySide === "mother" ? addedEntries1 : null) : addedEntries1,
            fatherSide : userDetails.familySide ? (userDetails.familySide === "father" ? addedEntries1 : null) : addedEntries2,
        }
        let helper = new Helper();
        helper.post(data)

    }



    if(props.halftree){
        
        if(pageView === 1){
            return(
                <UserDetails halftree onFormSubmit={handleMoveToPageTwo}/>
            )
        }

        if(pageView === 2){
            return(
            <div className='container'>
                <AddFamilyForm currentEntry={currentEntry1} onUpdateField={updateField} onFormSubmit={handleFormSubmit} entryArrayValue="1" />
                <AddedFamily addedEntries={addedEntries1} deleteMember={handleDelete} updateMember={handleUpdate} entryArrayValue="1"/>
                <div className='row justify-content-center pb-3'>
                    <button className='btn btn-primary-drk' onClick={handleMoveToPageThree}>Finish</button>
                </div>
            </div>
            )
        }

        if(pageView === 3){
            return(
                <ConfirmationPage/>
            )
        }

        
    }

    if(props.fulltree){

        if(pageView === 1){
            return(
                <UserDetails onFormSubmit={handleMoveToPageTwo}/>
            )
        }

        if(pageView === 2){
            return(
                <>
                <AddFamilyForm currentEntry={currentEntry1} onUpdateField={updateField} onFormSubmit={handleFormSubmit} entryArrayValue="1" />
                <AddedFamily addedEntries={addedEntries1} deleteMember={handleDelete} updateMember={handleUpdate} entryArrayValue="1"/>            
    
                <AddFamilyForm currentEntry={currentEntry2} onUpdateField={updateField} onFormSubmit={handleFormSubmit} entryArrayValue="2" />
                <AddedFamily addedEntries={addedEntries2} deleteMember={handleDelete} updateMember={handleUpdate} entryArrayValue="2"/>

                <button onClick={handleMoveToPageThree}>Finish</button>
            </>
            )
        }

        if(pageView === 3){
            return(
                <ConfirmationPage/>
            )
        }
    
    }
}

export default ServiceTreeView

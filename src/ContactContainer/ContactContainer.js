import React, {useState} from 'react';

function ContactContainer(){

    const [form, setForm] = useState({
        name: '',
        email: '',
        message: ''
    })

    const updateField = (e) => {
        setForm({...form, [e.target.name]: e.target.value})
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        
    }

    return(
        <div>
            <form onSubmit={handleSubmit}>

                <label htmlFor="name">Name</label>
                <input type="text" name="name" id="name" value={form.name} onChange={updateField} />

                <label htmlFor="email">Email</label>
                <input type="email" name="email" id="email" value={form.email} onChange={updateField} />

                <label htmlFor="message">Message</label>
                <input type="text" name="message" id="message" value={form.message} onChange={updateField} />
                
            </form>
        </div>
    )
}

export default ContactContainer;
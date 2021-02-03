import React, {useState} from 'react';
import emailjs from 'emailjs-com';

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
        emailjs.sendForm('', 'contact_form', '.contact-form', '')
            .then((result) => {
                console.log(result.text);
            }, (error) => {
                console.log(error.text);
            })
        
    }

    return(
        <div>
            <form className="contact-form" onSubmit={handleSubmit}>

                <label htmlFor="name">Name</label>
                <input type="text" name="name" id="name" value={form.name} onChange={updateField} />

                <label htmlFor="email">Email</label>
                <input type="email" name="email" id="email" value={form.email} onChange={updateField} />

                <label htmlFor="message">Message</label>
                <input type="text" name="message" id="message" value={form.message} onChange={updateField} />

                <button type="submit">Send</button>
                
            </form>
        </div>
    )
}

export default ContactContainer;
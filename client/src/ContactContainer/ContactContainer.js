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


        emailjs.sendForm(process.env.REACT_APP_EMAIL_JS_SERVICE_ID, process.env.REACT_APP_EMAIL_JS_TEMPLATE_ID, '#contact_form', 
        process.env.REACT_APP_EMAIL_JS_USER_ID)
            .then((result) => {
                console.log(result.text);
            }, (error) => {
                console.log(error.text);
            })
        
    }

    return(
        <div className='tree-bg'>
            <div className='container'>


            <div className='row justify-content-center py-4'>
                <div className='col-8 text-center opacity'>
                    <h2 className='script-text-2'>Contact Us</h2>
                    <p className=''>
                        Leave us a message and we will get back to as soon as possible
                    </p>
                </div>
            </div>

                <div className='row justify-content-center'>

                    <form id='contact_form' className='col-8 opacity form-card-dk' onSubmit={handleSubmit}>

                        <div className='row'>
                            <div className='py-2 col'>
                                <label className='form-label' htmlFor="name">Name</label>
                                <input className='form-control' type="text" name="name" id="name" value={form.name} onChange={updateField} />
                            </div>
                            <div className='py-2 col'>
                                <label className='form-label' htmlFor="email">Email</label>
                                <input className='form-control' type="email" name="email" id="email" value={form.email} onChange={updateField} />
                            </div>

                        </div>

                        <div className='row'>
                            <div className='col py-2'>
                                <label className='form-label' htmlFor="message">Message</label>
                                <input className='form-control' type="text" name="message" id="message" value={form.message} onChange={updateField} />

                            </div>
                        </div>

                        <div className='row justify-content-center'>
                            <button className='btn btn-primary-lt m-4' type="submit">Send</button>
                            {/* <input type='submit' value='Send'/> */}
                        </div>

                    </form>
                 </div>

            </div>

        </div>
    )
}

export default ContactContainer;
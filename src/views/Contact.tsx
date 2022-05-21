import React, { useRef, useState } from 'react';
import { useNavigate } from "react-router-dom";
import emailjs from '@emailjs/browser';

export default function Contact() {
    const form:any = useRef();
    const navigate = useNavigate();
    const [ submitted, setSubmitted ] = useState(false);
    const [ errors, setErrors ] : any[] = useState([]);

    if (submitted) {
        setTimeout(() => {
        navigate('/');
        }, 4000);
    }

    if (errors.length > 0) {
        console.error(errors);
    }

    const sendEmail = (e: any) => {
        e.preventDefault();

        if (
            process.env.REACT_APP_EMAIL_SERVICE_ID 
            && process.env.REACT_APP_EMAIL_TEMPLATE_ID 
            && process.env.REACT_APP_EMAIL_PUBLIC_KEY
        ) {
            emailjs.sendForm(
                process.env.REACT_APP_EMAIL_SERVICE_ID, 
                process.env.REACT_APP_EMAIL_TEMPLATE_ID, 
                form.current, 
                process.env.REACT_APP_EMAIL_PUBLIC_KEY
            )
            .then(() => {
                setSubmitted(true);
            }, (error) => {
                setErrors((errors: string[]) => [...errors, error]);
            });
        } else {
            setErrors((errors: string[]) => [...errors, 'Env variable issue.']);
        }
    };

  return (
    <div className='contact-form subpage'>
        {!submitted && !errors.length &&
            <React.Fragment>
                <h2>Reach Out to Me Directly.</h2>
                <form ref={form} onSubmit={sendEmail}>
                    <div className='contact-form__row'>
                        <label>Name</label>
                        <input type="text" required name="user_name" />
                    </div>
                    <div className='contact-form__row'>
                        <label>Email</label>
                        <input type="email" required name="user_email" />
                    </div>
                    <div className='contact-form__row'>
                        <label>Message</label>
                        <textarea name="message" />
                    </div>
                    <div className='contact-form__row'>
                        <button className='btn' type="submit">Submit</button>
                    </div>
                </form>
            </React.Fragment>
        }
        {submitted &&  
            <p>Thanks for reaching out - I'll get back to you as soon as I can. Have a great day!</p>
        }
        {errors.length > 0 &&
            <p>Uh oh. You broke the site somehow. It's cool though. Reach out to me directly via nl7robbins@icloud.com. Thanks!</p>
        }
    </div>
  );
};
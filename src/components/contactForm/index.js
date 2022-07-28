
import React, { useState } from "react";
import { validateEmail } from "../../utils/helpers";

function ContactForm() {
    const [formState, setFormState] = useState({ name: "", email: "", message: "" });
    const [errorMessage, setErrorMeassage] = useState("");
    const { name, email, Message } = formState;

    //form submission use logging
    const handleSubmit = (e) => {
        e.prevenDefault();
        if (!errorMessage) {
            setFormState({ [e.target.name]: e.target.value});
            console.log("form", formState);
        }
    };
    //error validation
    const handleChange = (e) => {
        if (e.target.name === "email") {
            const isValid = validateEmail(e.target.value)
            if (!isValid) {
                setErrorMeassage("Your email is not valid.");
            } else {
                setErrorMeassage("");
            } 
        } else {
            if (!e.target.value.length) {
                setErrorMeassage(`${e.target.name} is required.`);
            } else {
                setErrorMeassage("");
            }
        }
    };
    return(
        <section className="content-center">
            <div className="p-5">
                <h1 className="h1tag">Contact me</h1>
                <form id="contac-form" onSubmit={handleSubmit}>
                    <div>
                        <label htmlFor="name">Name: </label>
                        <input type="text" name="name" defaultValue={name} onBlur={handleChange} />
                    </div>
                    <div>
                    <label htmlFor="email">Email address: </label>
                        <input type="text" name="email" defaultValue={email} onBlur={handleChange} />
                    </div>
                    <div>
                    <label htmlFor="message">Message: </label>
                        <input type="text"message="name" defaultValue={Message} onBlur={handleChange} />
                    </div>
                    {errorMessage && (
                        <div>
                            <p className="error-text">{errorMessage}</p>
                        </div>
                    )}
                    <button className="btn" type="submit">Submit</button>
                </form>

            </div>
        </section>
    )
}


export default ContactForm;


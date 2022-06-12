
import React, { useState } from "react";
import { validateEmail } from "../../utils/helpers";

function contactForm() {
    const [formState, setFormState] = useState({ name: "", email: "", message: "" });
    const [errorMessage, setErrorMeassage] = useState("");
    const { name, email, message } = formState;

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
        <section>
            <di className="p-5">
                <h1 className="h1tag">Contact me</h1>
                <form id="contac-form" onSubmit={handleSubmit}>
                    <di>
                        <label htmlFor="name">Name: </label>
                        <input type="text" name="name" defaultValue={name} onBlur={handleChange} />
                    </di>
                    <div>
                    <label htmlFor="email">Email address: </label>
                        <input type="text" name="email" defaultValue={email} onBlur={handleChange} />
                    </div>
                    <di>
                    <label htmlFor="message">Message: </label>
                        <input type="text"message="name" defaultValue={message} onBlur={handleChange} />
                    </di>
                    {errorMessage && (
                        <div>
                            <p className="error-text">{errorMessage}</p>
                        </div>
                    )}
                    <button className="btn" type="submit">Submit</button>
                </form>

            </di>
        </section>
    )
}


export default contactForm;


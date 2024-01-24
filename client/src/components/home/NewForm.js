import React from 'react';
import { useFormik } from 'formik';
import * as yup from 'yup';

function NewForm() {
    const formSchema = yup.object({
        email_title: yup.string().required("Email title is required."),
        subject: yup.string().required("Email subject is required."),
        body: yup.string().required("Email body is required."),
        number_sent: yup.number().required("Number sent is required").positive().integer(),
        number_replied: yup.number().required("Number replied is required.").positive().integer(),
        number_unsubscribed: yup.number().required("Number unsubscribed is required.").positive().integer(),
    });

    const formik = useFormik({
        initialValues: {
            email_title: '',
            subject: '',
            body: '',
            number_sent: 0,
            number_replied: 0,
            number_unsubscribed: 0,
        },
        validationSchema: formSchema,
        onSubmit: (values) => {
            fetch('http://127.0.0.1:5555/emails', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(values),
            })
                .then((res) => {
                    if (res.ok) {
                        return res.json(); // This returns the promise for the next .then()
                    }
                    throw new Error('Network response was not ok.');
                })
                .then((email) => {
                    console.log("Email submitted successfully", email);
                })
                .catch((error) => {
                    console.error("There was a problem with the fetch operation:", error);
                });
        }
    });

    return (
        <div>
            <form onSubmit={formik.handleSubmit} id="form">
                <div>
                    <label htmlFor="email_title">Email Title</label>
                    <input
                        id="email_title"
                        name="email_title"
                        type="text"
                        onChange={formik.handleChange}
                        value={formik.values.email_title}
                    />
                    {formik.errors.email_title && <div>{formik.errors.email_title}</div>}
                </div>

                <div>
                    <label htmlFor="subject">Subject</label>
                    <input
                        id="subject"
                        name="subject"
                        type="text"
                        onChange={formik.handleChange}
                        value={formik.values.subject}
                    />
                    {formik.errors.subject && <div>{formik.errors.subject}</div>}
                </div>

                <div>
                    <label htmlFor="body">Body</label>
                    <textarea
                        id="body"
                        name="body"
                        onChange={formik.handleChange}
                        value={formik.values.body}
                    />
                    {formik.errors.body && <div>{formik.errors.body}</div>}
                </div>
                <button type="submit">Submit</button>
            </form>
        </div>
    );
}

export default NewForm;

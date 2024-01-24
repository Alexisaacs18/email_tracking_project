import React from 'react';
import { useFormik } from 'formik';
import * as yup from 'yup';

function NewForm() {
    const formSchema = yup.object().shape({
        email_title: yup.string().required("Email title is required."),
        subject: yup.string().required("Email subject is required."),
        body: yup.string().required("Email body is required."),
        number_sent: yup.number().required("Number sent is required").positive().integer(),
        number_replied: yup.number().required("Number replied is required.").positive().integer(),
        number_unsubscribed: yup.number().required("Number unsubscribed is required.").positive().integer(),
    })

    const formik = useFormik({
        initialValues: {
            email_title: '',
            subject: '',
            body: '',
            number_sent: '',
            number_replied: '',
            number_unsubscribed: '',
        }
    })
}
return (
    <div>
    </div>
);
}

export default NewForm;

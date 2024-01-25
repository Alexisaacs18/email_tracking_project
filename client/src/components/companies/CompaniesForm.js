import React from 'react';
import { useFormik } from 'formik';
import * as yup from 'yup';
import Draggable from 'react-draggable';

function NewCompanyForm({ companyForm, setCompanyForm }) {
    const formSchema = yup.object({
        name: yup.string().required("Email name is required."),
        employees: yup.string().required("Email employees is required."),
        revenue: yup.string().required("Email revenue is required."),

    });

    const formik = useFormik({
        initialValues: {
            name: '',
            employees: '',
            revenue: '',
        },
        validationSchema: formSchema,
        onSubmit: (values) => {
            fetch('http://127.0.0.1:5555/companies', {
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
                .then((company) => {
                    console.log("Email company submitted successfully", company);
                })
                .catch((error) => {
                    console.error("There was a problem with the fetch operation:", error);
                });
        }
    });
    function handleExit() {
        setCompanyForm(prev => !companyForm)
    }

    return (
        <Draggable>
            <div className="newform">
                <form onSubmit={formik.handleSubmit}>
                    <div>
                        <label htmlFor="name">Name</label>
                        <input
                            id="name"
                            name="name"
                            type="text"
                            onChange={formik.handleChange}
                            value={formik.values.name}
                            placeholder="Company Name"
                        />
                        {formik.errors.name && <div>{formik.errors.name}</div>}
                    </div>

                    <div>
                        <label htmlFor="employees">Employees</label>
                        <input
                            id="employees"
                            name="employees"
                            type="number"
                            onChange={formik.handleChange}
                            value={formik.values.employees}
                            placeholder="Number of Employees"
                        />
                        {formik.errors.employees && <div>{formik.errors.employees}</div>}
                    </div>

                    <div>
                        <label htmlFor="revenue">Revenue</label>
                        <input
                            id="revenue"
                            name="revenue"
                            type="number"
                            onChange={formik.handleChange}
                            value={formik.values.revenue}
                            placeholder="Annual Revenue"
                        />
                        {formik.errors.revenue && <div>{formik.errors.revenue}</div>}
                    </div>
                    <button type="submit">Submit</button>
                    <button type="button" id='newformx' onClick={handleExit}>X</button>
                </form>
            </div>
        </Draggable>
    );
}

export default NewCompanyForm;
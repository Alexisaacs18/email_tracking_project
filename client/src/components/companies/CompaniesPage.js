import React, { useState, useEffect } from "react";
import CompaniesNav from './CompaniesNav'
import CompanyCard from "./CompanyCard"
import CompaniesForm from "./CompaniesForm"
import CompanyList from "./CompanyList";
function CompaniesPage() {

    const url = "http://127.0.0.1:5555"

    const [companies, setCompanies] = useState([])
    const [companyForm, setCompanyForm] = useState(false)

    useEffect(() => {
        fetch(`${url}/companies`)
            .then((res) => res.json())
            .then((data) => {
                setCompanies(data)
                console.log(data)
            })
    }, [])

    function handleClick() {
        setCompanyForm(prev => !companyForm)
    }

    return (
        <div className="companies-container">
            <CompaniesNav />
            <button id="newcompanybutton" onClick={handleClick}> Add New Company </button>
            <CompanyList companies={companies} />
        </div>
    )
}
export default CompaniesPage;

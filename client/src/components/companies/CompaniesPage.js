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
    function addCompany(company) {
        setCompanies((prevCompanies) => [...prevCompanies, company]);
      }
  

    return (
        <div>
            <CompaniesNav />
            <div id ='companyButton-container'>
            <button id="newcompanybutton" onClick={handleClick}> Add New Company </button>
            </div>
            <div id='companyForm-container'>
            {companyForm && <CompaniesForm companyForm={companyForm} setCompanyForm={setCompanyForm} addCompany={addCompany} />}
            </div>
            <div id="companyList-container">
            <CompanyList companies={companies} />
            </div>
            
        </div>
    )
}
export default CompaniesPage;

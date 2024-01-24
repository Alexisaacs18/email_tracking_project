import React, { useState, useEffect } from "react";
import CompaniesNav from './CompaniesNav'
import CompanyCard from "./CompanyCard"
function CompaniesPage() {

    const url = "http://127.0.0.1:5555"

    const [companies, setCompanies] = useState([])

    useEffect(() => {
        fetch(`${url}/companies`)
            .then((res) => res.json())
            .then((data) => {
                setCompanies(data)
                console.log(data)
            })
    }, [])


    return (
        <div>
            <CompaniesNav />
            {companies.map((company) => (
                <CompanyCard
                    key={company.id}
                    name={company.name}
                    employees={company.employees}
                    revenue={company.revenue}
                />
            ))}
        </div>
    )
}
export default CompaniesPage;

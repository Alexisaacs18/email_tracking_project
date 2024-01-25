import React, { useState, useEffect } from "react";
import CompanyCard from "./CompanyCard"
function CompanyList({ companies }) {
    return (
        <ul className="companies-list">
            {companies.map((company) => (
                <CompanyCard
                    key={company.id}
                    name={company.name}
                    employees={company.employees}
                    revenue={company.revenue}
                />
            ))}
        </ul>
    )
}

export default CompanyList;
import React from "react";

function CompanyCard({ name, employees, revenue }) {

    return (
        <div className="company-card">
            <li className="company-card-header">{name}
                <p>Employees: {employees}</p>
                <p>Revenue: {revenue}</p>
            </li>
        </div>
    )
}

export default CompanyCard;
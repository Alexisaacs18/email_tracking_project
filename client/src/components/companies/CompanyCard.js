import React from "react";

function CompanyCard({ name, employees, revenue }) {

    return (
        <div className="company-card">
            <div className="company-card-header">{name}
                <ul>Employees: {employees}</ul>
                <ul>Revenue: {revenue}</ul>
            </div>
        </div>
    )
}

export default CompanyCard;
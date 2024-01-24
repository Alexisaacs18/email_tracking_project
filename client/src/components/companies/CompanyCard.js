import React from "react";

function CompanyCard({ name, employees, revenue }) {

    return (
        <div>
            <h3>Name: {name}</h3>
            <ul>Employees: {employees}</ul>
            <ul>Revenue: {revenue}</ul>
        </div>
    )
}

export default CompanyCard;
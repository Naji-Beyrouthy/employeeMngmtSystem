import React from "react";
import ReactDOM from "react-dom";
import Table from './employeeList/Table';

function System() {
    return (
        <div className="container">
            <div className="row justify-content-center">
                {/*  Employee Table is added here */}
                <Table />
            </div>
        </div>
    );
}

export default System;

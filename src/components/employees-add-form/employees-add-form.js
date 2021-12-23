import React from 'react';
import { useState } from 'react';
import './employees-add-form.css';

const EmployeesAddForm = ({addNewUser}) => {

    const [newUserData, setNewUserData] = useState({name: '', salary: ''});

    const onHandleSubmit = (e) => {
        e.preventDefault();
        addNewUser(newUserData.name, newUserData.salary);
        setNewUserData({name: '', salary: ''})
    }

    const setNewUserName = (e) => {
        setNewUserData({...newUserData, name: e.target.value});
    }

    const setNewUserSalary = (e) => {
        setNewUserData({...newUserData, salary: e.target.value});
    }

    return (
        <div className="app-add-form">
            <h3>Добавьте нового сотрудника</h3>
            <form
                onSubmit={onHandleSubmit}
                className="add-form d-flex">
                <input
                    onChange={(e) => {setNewUserName(e)}}
                    type="text"
                    required
                    className="form-control new-post-label"
                    placeholder="Как его зовут?"
                    value={newUserData.name}
                />
                <input type="number"
                    required
                    onChange={(e)=>{setNewUserSalary(e)}}
                    className="form-control new-post-label"
                    placeholder="З/П в $?"
                    value={newUserData.salary}
                />
                <button type="submit"
                        className="btn btn-outline-light">Добавить</button>
            </form>
        </div>
    )
}

export default EmployeesAddForm;
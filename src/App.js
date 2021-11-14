import React from 'react';
import { useState, useEffect } from 'react';
import AppInfo from './components/app-info/app-info';
import SearchPanel from './components/search-panel/search-panel';
import AppFilter from './components/app-filter/app-filter';
import EmployeesList from './components/employees-list/employees-list';
import EmployeesAddForm from './components/employees-add-form/employees-add-form';

import './App.css'

function App() {

    const [data, setData] = useState([
        {id: 1 ,name: 'John Smith', salary: '500', increase: false},
        {id: 2 ,name: 'Mike Pole', salary: '1000', increase: false},
        {id: 3 ,name: 'Alex Stone', salary: '3000', increase: false}
    ]);

    let [filteredData, setFilteredData] = useState(data);

    console.log(data, filteredData);

    useEffect( () => {
        setFilteredData(data)
    }, [data])

    const changeIncrease = (id) => {
        setData(data.map(item => {
            if(item.id != id) {
                return {...item}
            } else {
                return {...item, increase: !item.increase}
            }
        }))
    }

    const addNewUser = (name, salary) => {
        setData(
            [...data, {id: Date.now(), name, salary, increase: false}]
        )
    }

    const deleteUser = (id) => {
        setData(
            filteredData.data(item => item.id != id)
        )
    }

//////////////////////////////////////////

    const activeBtnClass = 'btn btn-light';
    const btnClass = 'btn btn-outline-light';

    const setActiveBtn = (btnText) => {
        setFilterBtns(filterBtns.map(item => {
            if(item.text != btnText) {
                return {...item, class: btnClass}
            } else {
                return {...item, class: activeBtnClass}
            }
        }))
    }

    const showAllEmployeesFilter = (btnText) => {
        setFilteredData(data);
        setActiveBtn(btnText);
    }

    const increaseUsersFilter = (btnText) => {
        setFilteredData(filteredData.filter(item => item.increase === true));
        setActiveBtn(btnText);
    }

    const increaseSalaryFilter = (btnText) => {
        setFilteredData(filteredData.filter(item => item.salary > 1000));
        setActiveBtn(btnText);
    }

    const [filterBtns, setFilterBtns] = useState([
        {text: 'Все сотрудники', class: activeBtnClass, action: showAllEmployeesFilter},
        {text: 'На повышение', class: btnClass, action: increaseUsersFilter},
        {text: 'З/П больше 1000$', class: btnClass, action: increaseSalaryFilter}
    ])
    ///////////////////////////////////////

    return (
    <div className="app">
        <AppInfo />

        <div className="search-panel">
            <SearchPanel/>
            <AppFilter filterBtns={filterBtns}/>
        </div>

        <EmployeesList data={filteredData}
                       changeIncrease={changeIncrease}
                       deleteUser={deleteUser}/>
        <EmployeesAddForm addNewUser={addNewUser}/>
    </div>
    );
}

export default App;

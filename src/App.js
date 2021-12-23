import React from 'react';
import { useState, useEffect } from 'react';
import AppInfo from './components/app-info/app-info';
import SearchPanel from './components/search-panel/search-panel';
import AppFilter from './components/app-filter/app-filter';
import EmployeesList from './components/employees-list/employees-list';
import EmployeesAddForm from './components/employees-add-form/employees-add-form';

import './App.css';

function App() {

    //increase - higher salary
    //rise - higher position
    const [data, setData] = useState([
        {id: 1 ,name: 'John Smith', salary: 500, increase: true, rise: false},
        {id: 2 ,name: 'Mike Pole', salary: 1000, increase: false, rise: true},
        {id: 3 ,name: 'Alex Stone', salary: 3000, increase: false, rise: true}
    ]);

    const [searchField, updataSearchField] = useState('');
    const [filterValue, setFilterValue] = useState('all');

    const onToggleProp = (id, prop) => {
        setData(data.map(item => {
            if(item.id != id) {
                return {...item}
            } else {
                return {...item, [prop]: !item[prop]}
            }
        }))
    }

    const onChangeSalary = (id, newSalary) => {
        data.map(item => {
            if(item.id === id) {
                return item.salary = newSalary
            } else {
                return item
            }
        })
    }

    const addNewUser = (name, salary) => {
        setData(
            [...data, {id: Date.now(), name, salary, increase: false}]
        )
    }

    const deleteUser = (id) => {
        setData(
            data.filter(item => item.id != id)
        )
    }

    const searchFilter = (data, value) => {
        console.log(value);
        if(data && value) {
            return data.filter(item => item.name.toLowerCase().includes(value.toLowerCase()));
        } else {
            return data
        }
    }

    const btnsFilter = (data, filter) => {
        console.log(filter);
        switch (filter) {
            case 'rise': {
                return data.filter(item => item.rise == true)
            }
            case 'salary': {
                return data.filter(item => item.salary > 1000)
            }
            default : {
                return data
            }
        }
    }

    const employees = data.length;
    const increased = data.filter(item => item.increase == true).length;

    //show data which have been filtered by search and then by filter btns
    let visibleData = btnsFilter(searchFilter(data, searchField), filterValue);

    return (

        <div className="app">
            <AppInfo employees={employees} increased={increased}/>

            <div className="search-panel">
                <SearchPanel updataSearchField={updataSearchField}/>
                <AppFilter filterValue={filterValue} setFilterValue={setFilterValue}/>
            </div>

            <EmployeesList data={visibleData}
                           onChangeSalary={onChangeSalary}
                           onToggleProp={onToggleProp}
                           deleteUser={deleteUser}/>
            <EmployeesAddForm addNewUser={addNewUser}/>
        </div>
    );
}

export default App;

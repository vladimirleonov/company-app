import React from 'react';
import { useState, useEffect } from 'react';
import AppInfo from './components/app-info/app-info';
import SearchPanel from './components/search-panel/search-panel';
import AppFilter from './components/app-filter/app-filter';
import EmployeesList from './components/employees-list/employees-list';
import EmployeesAddForm from './components/employees-add-form/employees-add-form';

import './App.css';

function App() {

    const [data, setData] = useState([
        {id: 1 ,name: 'John Smith', salary: '500', increase: true, rise: false},
        {id: 2 ,name: 'Mike Pole', salary: '1000', increase: false, rise: false},
        {id: 3 ,name: 'Alex Stone', salary: '3000', increase: false, rise: false}
    ]);

    const [searchField, setSearchField] = useState('');

    const toggleIncrease = (id) => {
        setData(data.map(item => {
            if(item.id != id) {
                return {...item}
            } else {
                return {...item, increase: !item.increase}
            }
        }))
    }

    const toggleRise = (id) => {
        setData(data.map(item => {
            if(item.id != id) {
                return {...item}
            } else {
                return {...item, rise: !item.rise}
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

    const filterData = (data, value) => {
        if(data && value) {
            return data.filter(item => item.name.toLowerCase().includes(value.toLowerCase()));
        } else {
            return data
        }
    }

    const employees = data.length;
    const increased = data.filter(item => item.increase == true).length;

    let filteredData = filterData(data, searchField);

    return (

        <div className="app">
            <AppInfo employees={employees} increased={increased}/>

            <div className="search-panel">
                <SearchPanel setSearchField={setSearchField}/>
                <AppFilter/>
            </div>

            <EmployeesList data={filteredData}
                           toggleIncrease={toggleIncrease}
                           toggleRise={toggleRise}
                           deleteUser={deleteUser}/>
            <EmployeesAddForm addNewUser={addNewUser}/>
        </div>
    );
}

export default App;

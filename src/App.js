import React from 'react';
import { useState } from 'react';
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

    return (
    <div className="app">
        <AppInfo />

        <div className="search-panel">
            <SearchPanel/>
            <AppFilter/>
        </div>

        <EmployeesList data={data}
                       changeIncrease={changeIncrease}/>
        <EmployeesAddForm addNewUser={addNewUser}/>
    </div>
    );
}

export default App;

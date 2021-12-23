import './employees-list-item.css';
import {useEffect, useState} from "react";

const EmployeesListItem = ({id, name, salary, increase, rise, onToggleProp, onChangeSalary, deleteUser}) => {

    const [ssalary, setSsalary] = useState('');

    let classes = "list-group-item d-flex justify-content-between";

    if(increase) {
        classes += ' increase';
    }
    if(rise) {
        classes += ' like';
    }

    useEffect(() => {
        setSsalary(salary);
    }, [salary])

    const changeSsalary = (e) => {
        console.log(e.currentTarget.value.slice(0, -1));
        setSsalary(e.currentTarget.value.slice(0, -1));
    }

    const changeSalary = (e) => {
        console.log(e.currentTarget.value.slice(0, -1));
        onChangeSalary(id, e.currentTarget.value.slice(0, -1));
    }

    const toggleProp = (e) => {
        console.log(e.currentTarget.getAttribute('data-prop'));
        onToggleProp(id, e.currentTarget.getAttribute('data-prop'));
    }

    const onDeleteUser = () => {
        deleteUser(id);
    }

    return (
        <li className={classes}>
            <span className="list-group-item-label" data-prop="rise" onClick={toggleProp}>{name}</span>
            <input
                type="text"
                onChange={changeSsalary}
                onBlur={changeSalary}
                className="list-group-item-input"
                value={ssalary + '$'}/>
            <div className='d-flex justify-content-center align-items-center'>
                <button type="button"
                    className="btn-cookie btn-sm "
                    data-prop="increase"
                    onClick={toggleProp}>
                    <i className="fas fa-cookie"></i>
                </button>

                <button type="button"
                        className="btn-trash btn-sm "
                        onClick={onDeleteUser}>
                    <i className="fas fa-trash"></i>
                </button>
                <i className="fas fa-star"></i>
            </div>
        </li>
    )
}

export default EmployeesListItem;
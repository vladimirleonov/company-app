import EmployeesListItem from '../employees-list-item/employees-list-item'

import './employees-list.css';

const EmployeesList = ({data, ...props}) => {
    return (
        <ul className="app-list list-group">
            {data.map(item =>
                <EmployeesListItem key={item.id}
                                   {...item}
                                   onChangeSalary={props.onChangeSalary}
                                   onToggleProp={props.onToggleProp}
                                   deleteUser={props.deleteUser}
                />)
            }
        </ul>
    )
}

export default EmployeesList;
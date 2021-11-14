import './employees-list-item.css';

const EmployeesListItem = ({id, name, salary, increase, changeIncrease}) => {

    let classes = "list-group-item d-flex justify-content-between";
    if(increase) {
        classes += ' increase';
    }

    const onChangeIncrease = () => {
        console.log(id);
        changeIncrease(id);
    }

    return (
        <li className={classes}>
            <span className="list-group-item-label">{name}</span>
            <input type="text" className="list-group-item-input" defaultValue={salary + '$'}/>
            <div className='d-flex justify-content-center align-items-center'>
                <button type="button"
                    className="btn-cookie btn-sm "
                    onClick={onChangeIncrease}>
                    <i className="fas fa-cookie"></i>
                </button>

                <button type="button"
                        className="btn-trash btn-sm ">
                    <i className="fas fa-trash"></i>
                </button>
                <i className="fas fa-star"></i>
            </div>
        </li>
    )
}

export default EmployeesListItem;
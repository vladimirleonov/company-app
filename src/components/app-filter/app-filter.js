import "./app-filter.css";

const AppFilter = ({filterValue, setFilterValue}) => {

    const filterBtns = [
        { name: 'Все сотрудники', label: 'all' },
        { name: 'На повышение', label: 'rise' },
        { name: 'З/П больше 1000$', label: 'salary' }
    ]

    const onSetFilter = (e) => {
        console.log(e.currentTarget.getAttribute('data-filter'));
        setFilterValue(e.currentTarget.getAttribute('data-filter'));
    }

    return (
        <div className="btn-group">
            {filterBtns.map(btn =>
                <button type="button"
                    key={btn.name}
                    className={btn.label === filterValue ? 'btn btn-light' : 'btn btn-outline-light' }
                    data-filter={btn.label}
                    onClick={onSetFilter}>
                        {btn.name}
                </button>
            )}
        </div>
    )
}
//btn btn-light
//btn btn-outline-light
export default AppFilter;
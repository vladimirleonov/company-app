import "./app-filter.css";

const AppFilter = () => {

    const filterBtns = [
        { name: 'Все сотрудники' },
        { name: 'На повышение' },
        { name: 'З/П больше 1000$' }
    ]

    return (
        <div className="btn-group">
            {filterBtns.map(btn =>
                <button type="button"
                    key={btn.name}
                    className={btn.class}>
                        {btn.name}
                </button>
            )}
            {/*<button type="button"
                    className={activeBtnClass}>
                    Все сотрудники
            </button>
            <button type="button"
                    className={btnClass}
                    onClick={() => {increaseFilter()}}>
                    На повышение
            </button>
            <button type="button"
                    className={btnClass}>
                    З/П больше 1000$
            </button>*/}
        </div>
    )
}

export default AppFilter;
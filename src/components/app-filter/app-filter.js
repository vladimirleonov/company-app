import "./app-filter.css";

const AppFilter = ({filterBtns}) => {

    return (
        <div className="btn-group">
            {filterBtns.map(btn =>
                <button type="button"
                    key={btn.text}
                    className={btn.class}
                    onClick={() => {btn.action(btn.text)}}>
                        {btn.text}
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
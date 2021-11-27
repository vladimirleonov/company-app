import './search-panel.css';

const SearchPanel = ({filterData}) => {

    const onFilterData = (e) => {
        console.log(e.currentTarget.value);
        filterData(e.currentTarget.value);
    }

    return (
        <input type="text"
                className="form-control search-input"
                placeholder="Найти сотрудника"
                onChange={onFilterData}/>
    )
}

export default SearchPanel;
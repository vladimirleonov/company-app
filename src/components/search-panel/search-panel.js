import './search-panel.css';

const SearchPanel = ({setSearchField}) => {

    const onSetSearchField = (e) => {
        console.log(e.currentTarget.value);
        setSearchField(e.currentTarget.value);
    }

    return (
        <input type="text"
                className="form-control search-input"
                placeholder="Найти сотрудника"
                onChange={onSetSearchField}/>
    )
}

export default SearchPanel;
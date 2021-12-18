import './search-panel.css';
import {useState} from "react";

const SearchPanel = ({setSearchField}) => {

    const [search, updateSearch] = useState('');

    const onSetSearchField = (e) => {
        console.log(e.currentTarget.value);
        updateSearch(e.currentTarget.value);
        setSearchField(e.currentTarget.value);
    }

    return (
        <input type="text"
                className="form-control search-input"
                placeholder="Найти сотрудника"
                onChange={onSetSearchField}
                value={search}/>
    )
}

export default SearchPanel;
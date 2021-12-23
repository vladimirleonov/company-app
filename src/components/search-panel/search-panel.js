import './search-panel.css';
import {useState} from "react";

const SearchPanel = ({updataSearchField}) => {

    const [search, onUpdateSearch] = useState('');

    const onSetSearchField = (e) => {
        console.log(e.currentTarget.value);
        onUpdateSearch(e.currentTarget.value);
        updataSearchField(e.currentTarget.value);
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
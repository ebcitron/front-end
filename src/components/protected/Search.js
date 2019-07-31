import React, {useState, useEffect} from 'react';
import { Search, Cancel } from "@material-ui/icons";


const Search = (props) => { 
    const [searchValue, setSearchValue] = useState("");

const handleChange = e => {
    setSearchValue(e.target.value);
}

const resetInputField = () => { 
    setSearchValue('') 
}
const callSearchFunction = (e) => {
    e.preventDefault();
    props.search(searchValue);
    resetInputField();
}

return ( 
    <form className="search">
        <input value = {searchValue} onChange={handleSearchInputChanges} type="text" />
        <input onClick={callSearchFunction} type = 'Submit' value="Search" />
        
        
    </form>
)
}
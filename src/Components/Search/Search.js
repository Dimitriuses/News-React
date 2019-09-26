import React from "react";
import "./Search.css";

class Search extends React.Component{
    state={
        search:""
    }

    getSearch = (e) => {
        this.setState({
            search: e.target.value
        })
    }

    onSearch = (e) => {
        //console.log(e.target.value);
        let searchName = this.state.search;
        this.props.onSearch(searchName);
    }


    render(){

        return(
            <form class="form-inline my-2 my-lg-0">
                <input onChange={this.getSearch} class="form-control mr-sm-2" type="search" placeholder="Search" aria-label="Search"/>
                <button onClick={this.onSearch} class="btn btn-outline-success my-2 my-sm-0" type="submit">Search</button>
            </form>
        )
    }
}
export default Search;
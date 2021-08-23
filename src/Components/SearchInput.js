import React,{useRef} from "react";
import { searchCocktail } from "../redux/actions";
import { useDispatch } from "react-redux";
import "../css/SearchInput.css";


const SearchInput = () => {
    let dispatch = useDispatch();
    let searchValue = useRef();

  const search_Cocktail = () => {
    dispatch(searchCocktail(searchValue.current.value));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
  };

  return (
    <section className="section-search">
      <form className="search-form" onSubmit={handleSubmit}>
        <div className="form-control">
          <label htmlFor="name">Search Cocktail</label>
          <input
            type="text"
            ref={searchValue}
            name="name"
            id="name"
           onChange={search_Cocktail}
          />
        </div>
      </form>
    </section>
  );
};

export default SearchInput;

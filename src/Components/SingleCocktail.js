import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { fetchSingleCocktail } from "./../redux/actions";
import { useParams } from "react-router-dom";

const SingleCocktail = (props) => {
  const { cocktail, loading } = useSelector((state) => ({ ...state.data }));
  const [singlecocktail, setSingleCocktail] = useState();
  const { id } = useParams();
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchSingleCocktail(id));
  }, [id]);

  useEffect(() => {
    if (cocktail.length > 0) {
      const {
        strDrink: name,
        strDrinkThumb: image,
        strAlcoholic: info,
        strGlass: glass,
        strCategory : category,
        strInstructions:instructions,
        strIngredient1,
        strIngredient2,
        strIngredient3,
        strIngredient4,
        strIngredient5,
      } = cocktail[0];

      const ingredients = [
        strIngredient1,
        strIngredient2,
        strIngredient3,
        strIngredient4,
        strIngredient5, 
      ];
const newCocktail = {
    name,
    image,
    info,
    category,
    glass,
    instructions,
    ingredients,

}

      setSingleCocktail(newCocktail);
    } else {
      setSingleCocktail(null);
    }
  }, [id,cocktail]);


if(!setSingleCocktail){
    return <h1 className="section-title">No Cocktail to Display</h1>
}


  if (loading) {
    return (
      <div className="spinner-grow" role="status">
        <div className="visually-hidden">Loading...</div>
      </div>
    );
  }

  return (
<h1>Hello</h1>
  );
};

export default SingleCocktail;

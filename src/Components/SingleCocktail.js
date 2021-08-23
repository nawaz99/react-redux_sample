import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { fetchSingleCocktail } from "./../redux/actions";
import { Link, useParams } from "react-router-dom";

const SingleCocktail = (props) => {
  const { cocktail, loading } = useSelector((state) => ({ ...state.data }));
  const [singlecocktail, setSingleCocktail] = useState(null);
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
  }, [cocktail]);


if(!singlecocktail){
    return <h1 className="section-title">No Cocktail to Display</h1>
}else{
    const {name,image,category,info,glass,instructions,ingredients} = singlecocktail;
return <>
{loading?(
    <div className="spinner-grow" role="status">
        <span className="visually-hidden">Loading...</span>
    </div>
):(
    <section className="section cocktail-section" >
        <Link to="/">
            <button className="btn btn-danger" style={{marginTop:"2rem"}}>
                Go back
            </button>
        </Link>
        <h2 className="section-title">{name}</h2>
        <div className="drink">
            <img src={image} alt={name} />
            <div className="drink-info">
                <p><span className="drink-data">Name :</span> {name}</p>
                <p><span className="drink-data">Category :</span> {category}</p>
                <p><span className="drink-data">Info :</span> {info}</p>
                <p><span className="drink-data">Glass :</span> {glass}</p>
                <p><span className="drink-data">Instructions :</span> {" "}
                {instructions}
                </p>
            </div>
        </div>
    </section>
)}
</>


}

};

export default SingleCocktail;

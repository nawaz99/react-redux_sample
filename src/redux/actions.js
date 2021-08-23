import  * as types from './actionTypes';
import axios from 'axios';

const fetchCockTailStart = ()=>({
    type:types.FETCH_COCKTAIL_START
});


const fetchCockTailSuccess = (cocktails)=>({
    type:types.FETCH_COCKTAIL_SUCCESS,
    payload:cocktails
});


const fetchCockTailFail = (err)=>({
    type:types.FETCH_COCKTAIL_FAIL,
    payload:err,
});

const fetchSingleCockTailStart = ()=>({
    type:types.FETCH_SINGLE_COCKTAIL_START
});


const fetchSingleCockTailSuccess = (cocktail)=>({
    type:types.FETCH_SINGLE_COCKTAIL_SUCCESS,
    payload:cocktail
});


const fetchSingleCockTailFail = (err)=>({
    type:types.FETCH_SINGLE_COCKTAIL_FAIL,
    payload:err,
});


const searchCockTailStart = ()=>({
    type:types.SEARCH_COCKTAIL_START
});


const searchCockTailSuccess = (cocktails)=>({
    type:types.SEARCH_COCKTAIL_SUCCESS,
    payload:cocktails
});


const searchCockTailFail = (err)=>({
    type:types.SEARCH_COCKTAIL_FAIL,
    payload:err,
});

export function fetchCocktail(){
    return function (dispatch){
        dispatch(fetchCockTailStart());
        axios.get('https://www.thecocktaildb.com/api/json/v1/1/search.php?s').then(res=>{
            const cocktails = res.data.drinks;
            dispatch(fetchCockTailSuccess(cocktails))
        }).catch(err=>{
            dispatch(fetchCockTailFail(err))
        })

    } 
}


export function fetchSingleCocktail(id){
    return function (dispatch){
        dispatch(fetchSingleCockTailStart());
        axios.get(`https://www.thecocktaildb.com/api/json/v1/1/lookup.php?i=${id}`).then(res=>{
            const cocktail = res.data.drinks;
            dispatch(fetchSingleCockTailSuccess(cocktail))
        }).catch(err=>{
            dispatch(fetchSingleCockTailFail(err))
        })

    } 
}


export function searchCocktail(searchText){
    return function (dispatch){
        dispatch(searchCockTailStart());
        axios.get(`https://www.thecocktaildb.com/api/json/v1/1/search.php?s=${searchText}`).then(res=>{
            const cocktails = res.data.drinks;
            dispatch(searchCockTailSuccess(cocktails))
        }).catch(err=>{
            dispatch(searchCockTailFail(err));
        })

    } 
}
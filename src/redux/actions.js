import  * as types from './actionTypes';
import axios from 'axios';

const fetchCockTailStart = ()=>({
    type:types.FETCH_COCKTAIL_START
});


const fetchCockTailSuccess = (cocktails)=>({
    type:types.FETCH_COCKTAIL_SUCCESS,
    payload:cocktails
});


const fetchCockTailFail = ()=>({
    type:types.FETCH_COCKTAIL_FAIL,
    payload:error,
});
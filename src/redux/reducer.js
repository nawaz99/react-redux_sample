import { FETCH_COCKTAIL_FAIL, FETCH_COCKTAIL_START, FETCH_COCKTAIL_SUCCESS, FETCH_SINGLE_COCKTAIL_FAIL, FETCH_SINGLE_COCKTAIL_START, FETCH_SINGLE_COCKTAIL_SUCCESS } from './actionTypes';
const initialState = {
    cocktails:[],
    cocktail:[],
    loading:false,
    error:null
};

const cockTailReducer = (state = initialState,action)=>{
    switch(action.type){
        case FETCH_COCKTAIL_START:
            return {
                ...state,
                loading:true,

            };
            case FETCH_COCKTAIL_SUCCESS:
            return {
                ...state,
                loading:false,
                cocktails:action.payload
            };

            case FETCH_COCKTAIL_FAIL:
                return {
                    ...state,
                    loading:false,
                    cocktails:action.payload
                };


                case FETCH_SINGLE_COCKTAIL_START:
                    return {
                        ...state,
                        loading:true,
        
                    };
                    case FETCH_SINGLE_COCKTAIL_SUCCESS:
                    return {
                        ...state,
                        loading:false,
                        cocktail:action.payload
                    };
        
                    case FETCH_SINGLE_COCKTAIL_FAIL:
                        return {
                            ...state,
                            loading:false,
                            cocktail:action.payload
                        };
            
        default:return state;
    }
};

export default cockTailReducer;


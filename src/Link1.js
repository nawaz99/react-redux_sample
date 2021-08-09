import React from 'react';
import { connect } from 'react-redux';

const Link1 = ({mystate:{age,name},increment,decrement}) => {
    return (
        <div>
            <button onClick={()=>increment()}>Decrement</button>
            <button onClick={()=>decrement()}>Increment</button>
            <h1>{age}</h1>
            <h1>{name}</h1>
        </div>
    )

}

const mapStatetoProps = (state)=>{
return {
    mystate:state
}
}

const mapdispatchtoProps = (dispatch)=>{
return {
    increment:()=>dispatch({type:'INCREMENT'}),
    decrement:()=>dispatch({type:'DECREMENT'})
}
}

export default connect(mapStatetoProps,mapdispatchtoProps)(Link1);

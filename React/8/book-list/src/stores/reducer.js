const initialState={
    
    books:{
    }
}

const reducer=(state=initialState,action)=>{
    if(action.type==='LOAD_DATA')
    {
        return {books:action.payload}
    }
    return state;
}

export default reducer;

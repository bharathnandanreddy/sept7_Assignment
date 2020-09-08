const initialState={

}

const reducer=(state=initialState,action)=>{
    if(action.type==='LOAD_DATA')
    {
        return {books:action.payload}
    }
    else if(action.type==='UPDATE_DATA'){
        let data={...state}
      
        let n =true

        Object.keys(data['books']).map(index=>{
            if(data['books'][index].key===action.key){
                data["books"][index]=action.payload
                n=false
            }
            return ""
        })

        if(n){
            data['books'][action.key]=action.payload

        }
        
        console.log(data['books'])
        return {books:{...data['books']}}
        
    }

    else if(action.type==="DELETE_DATA"){
        let data={...state}
      

        let newData={}

        Object.keys(data['books']).map(index=>{
            if(data['books'][index].key!==action.key){
                newData[index]=data['books'][index]
            }
            return ""
        })

    
        
        return {books:{...newData}}
    }

    return state;
}

export default reducer;

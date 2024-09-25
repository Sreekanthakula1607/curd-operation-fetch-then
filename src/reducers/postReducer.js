

const intialstate={
    post:null,
    singlePost:null
}
export const postReducer=((state=intialstate,action)=>{
        switch (action.type){
            case 'GET_PRODUCTS':
                return{
                    ...state,
                    post:action.payload
                }
       
        case 'SINGLE_PRODUCTS':
            return {
                ...state,
                singlePost:action.payload
            }
     }
    return state
})


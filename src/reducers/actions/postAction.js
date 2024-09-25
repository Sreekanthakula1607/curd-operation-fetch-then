import { URL } from "./api"



export const getPostAction=()=>async dispatch=>{
   const response= await fetch(URL)
   const result = await response.json()
   dispatch({type:"GET_PRODUCTS",payload:result})
}

 export const createPostAction=(obj)=>async dispatch=>{
    const requestOption={
        method:'POST',
        headers:{'Content-Type':"application/json"},
        body:JSON.stringify(obj)
    }
    const response = await fetch(URL, requestOption);
    const result = await response.json();
    dispatch(getPostAction());

 }
export const deletPostAction=(id)=>async dispatch=>{
    const requestOption={
        method:'DELETE',
        headers: { "Content-Type": "application/json" }
    }
    const response = await fetch(URL+`/${id}`,requestOption)
    const result = await response.json();
    dispatch(getPostAction())
}

export const updatePostAction=(obj)=>async dispatch=>{
    const requestOption={
        method:'PUT',
        headers:{"Content-Type":'application/json'},
        body:JSON.stringify(obj)
    }

    const response = await fetch(URL+`/${obj.id}`,requestOption)
    const result = await response.json();
    dispatch(getPostAction())

}
export const singlePostAction=(id)=>async dispatch=>{
    const response= await fetch(URL+`/${id}`)
    const result = await response.json()
    dispatch({type:"SINGLE_PRODUCTS",payload:result})
 }

   
    
  
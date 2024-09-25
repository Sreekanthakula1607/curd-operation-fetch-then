import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { singlePostAction, updatePostAction } from '../reducers/actions/postAction'

const UpdatePost = () => {
    const dispatch = useDispatch()
    const[formData,setFormData]=useState({name:'',price:''})
    const {singlePost}=useSelector((state)=>{
        return state.postReducer
    })
    useEffect(()=>{
        setFormData(singlePost)
    },[singlePost])
    if(singlePost==null||formData==null){
        return<p>laoding.....</p>
    }
    console.log('singlepost check',singlePost)
  return (
  <form onSubmit={(e)=>{
            e.preventDefault()
           dispatch(updatePostAction(formData))
            setFormData({name:'',price:''})
        }}>
            <input type='text' value={formData.name} onChange={(e)=>{
                setFormData({...formData,name:e.target.value})
            }} placeholder='enter name'required></input>
            <input type='text' value={formData.price} onChange={(e)=>{
                setFormData({...formData,price:e.target.value})
            }} placeholder='enter Price'required></input>
            <button>AddPost</button>
        </form>
  )
}

export default UpdatePost
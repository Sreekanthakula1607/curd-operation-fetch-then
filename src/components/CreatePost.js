import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import { createPostAction } from '../reducers/actions/postAction'

const CreatePost = () => {
    const dispatch = useDispatch()
    const[formData,setFormData]=useState({name:'',price:''})
  return (
    <div>CreatePost
        <form onSubmit={(e)=>{
            e.preventDefault()
            dispatch(createPostAction(formData))
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
    </div>
  )
}

export default CreatePost
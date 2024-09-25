import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { deletPostAction, getPostAction, singlePostAction } from '../reducers/actions/postAction'

const GetProducts = () => {
    const dispatch = useDispatch()
    const {post}=useSelector((state)=>{
        return state.postReducer
    })
    // console.log("cheking...",post)
    useEffect(()=>{
        dispatch(getPostAction())
    },[])
    if(post==null){
        return <p>loading..</p>
    }
  return (
    <div>GetProducts
        <table border={1}>
            <thead>
                <th>Sno</th>
                <th>Name</th>
                <th>Price</th>
                <th>Actions</th>
            </thead>
            <tbody>
                {
                    post.map((el,i)=>{
                        return<tr key={i}>
                                <td>{i+1}</td>
                                <td>{el.name}</td>
                                <td>{el.price}</td>
                                <td><button onClick={()=>{
                                    dispatch(singlePostAction(el.id))
                                }}>Edit</button>
                                <button onClick={()=>{
                                    dispatch(deletPostAction(el.id))
                                }}>Delete</button></td>
                        </tr>
                    })
                }
            </tbody>
        </table>
    </div>
  )
}

export default GetProducts
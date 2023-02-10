import React, { useEffect, useRef, useState } from "react";
import axios from "axios"
import { useContext } from "react";
import {Modal} from "../../components/Modal/Modal"
import { UserContext } from "../../context/UserContext";
export const Posts=()=>{
    const {user}=useContext(UserContext)
    const titleRef=useRef()
    const bodyRef=useRef()
    const [postModal,setPostModal]=useState(false)
    const [posts,setPosts]=useState([])
    const getPosts=async()=>{
        const data=await axios.get("http://localhost:5050/posts")
        if(data){
            setPosts(data.data)
        }
    }
    useEffect(()=>{
        getPosts()
    },[]);
    const handlePost=(evt)=>{
        evt.preventDefault()
        axios.post("http://localhost:5050/posts",{
            title:titleRef.current.value,
            body:bodyRef.current.value,
            author:user.first_name +" "+ user.last_name 
        }).then((res)=>{
            if(res.status==201){
                setPostModal(false)
                getPosts()
            }
        }).catch(err=>console.log(err))

    }
    return(
        <div>
            <button onClick={()=>
            setPostModal(true)} className="btn btn-secondary my-4 mx-auto">Add Posts</button>
            <h2 className=" h2 text-center my-5">Posts</h2>
            {
                posts.length ? (<ul className="list-group w-50 mx-auto">
                    {
                        posts.map(post=>
                             <li className="list-group-item" key={post.id}>
                                {post.title}
                             </li>)
                    }
                </ul>):""
            }
            {
                postModal?
                <Modal title={"Add post"} modal={postModal} setmodal={setPostModal}>
                    <form onSubmit={handlePost}>
                    <input className="form-control mb-3 " ref={titleRef} type="text" placeholder="title"/>
                    <input className="form-control mb-3 " ref={bodyRef} type="text" placeholder="body"/>
                    <button className="btn btn-primary">Send</button>
                    </form>
                </Modal>:("")
            }
        </div>
    )
}
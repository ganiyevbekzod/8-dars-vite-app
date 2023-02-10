import axios from "axios";
import React, { useContext, useRef } from "react";
import { useNavigate } from "react-router-dom";
import { AuthContext } from "../../context/AuthContext";
import { UserContext } from "../../context/UserContext";


export const Login = () => {
    const {setToken}=useContext(AuthContext)
    const {setUser}=useContext(UserContext)
    const emailRef = useRef()
    const Navigate=useNavigate()
    const passwordRef = useRef()
    const handleSubmit = (evt) => {
        evt.preventDefault();
        //////////// Axios////////////
        axios.post("http://localhost:5050/login", {
            email: emailRef.current.value,
            password: passwordRef.current.value
        }).then((data) => {
            if (data.status === 200) {
                setToken(data.data.accessToken);
                setUser(data.data.user)
                Navigate("/")

            }
        })
            .catch((err) => console.log(err))
    }
    return (
        <div className="my-5 w-50 mx-auto p-5 shadow">
            <h2 className="h1 text-center my-3">Login</h2>
            <form onSubmit={handleSubmit} className="text-center">
                <input ref={emailRef} className="form-control mb-3 " type="email" placeholder="Email" />
                <input ref={passwordRef} className="form-control mb-3 " type="password" placeholder="password" />
                <button className="btn btn-primary " type="submit">Send</button>

            </form>
        </div>
    )
}
// {

// }
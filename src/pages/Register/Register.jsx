import axios from "axios";
import React, { useRef, useContext } from "react";
import { UserContext } from "../../context/UserContext";
import { useNavigate } from "react-router-dom";
import { AuthContext } from "../../context/AuthContext";

export const Register = () => {
    const { setToken } = useContext(AuthContext)
    const { setUser } = useContext(UserContext)
    const Navigate = useNavigate()
    const emailRef = useRef()
    const passwordRef = useRef()
    const firstNameRef = useRef()
    const lastNameRef = useRef()
    const handleSubmit = (evt) => {
        evt.preventDefault();
        //////////// Axios////////////
        axios.post(`http://localhost:5050/register`, {
            first_name: firstNameRef.current.value,
            last_name: lastNameRef.current.value,
            email: emailRef.current.value,
            password: passwordRef.current.value
        }).then((data) => {
            if (data.status === 201) {
                setToken(data.data.accessToken);
                setUser(data.data.user)
                Navigate("/")
            }
        })
            .catch((err) => console.log(err))
    }
    return (
        <div className="my-5 w-50 mx-auto p-5 shadow">
            <h2 className="h1 text-center my-3">Register</h2>
            <form onSubmit={handleSubmit} className="text-center">
                <input ref={firstNameRef} className="form-control mb-3 " type="text" placeholder="First name" />
                <input ref={lastNameRef} className="form-control mb-3 " type="text" placeholder="Last name" />
                <input ref={emailRef} className="form-control mb-3 " type="email" placeholder="Email" />
                <input ref={passwordRef} className="form-control mb-3 " type="password" placeholder="password" />
                <button className="btn btn-primary " type="submit">Send</button>
            </form>
        </div>
    )
}

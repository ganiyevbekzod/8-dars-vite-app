import React, { useContext } from "react"
import { Link, useNavigate } from "react-router-dom"
import { AuthContext } from "../../context/AuthContext"
import { UserContext } from "../../context/UserContext"
export const PrivateHeader = () => {
    const { user, setUser } = useContext(UserContext)
    const { setToken } = useContext(AuthContext)
    const navigate = useNavigate()
    return (
        <div>
            <header className="bg-dark py-3">
                <div className="container">
                    <div className="d-flex align-items-center">
                        <Link className="fs-4 text-white text-decoration-none" to="/">LOGO</Link>
                        <Link to="/posts" className="ms-3 text-decoration-none text-white  ">Posts</Link>
                        <Link to="/users" className="ms-3 text-decoration-none text-white  ">Users</Link>
                        <button onClick={() => {
                            setToken("")
                            setUser("")
                            navigate("/")
                        }} className="btn btn-danger px-2 py-1 rounded-circle ms-auto">
                            {user.first_name.at(0)+ " "+ user.last_name.at(0)}
                            </button>
                    </div>
                </div>
            </header>
        </div>
    )
}
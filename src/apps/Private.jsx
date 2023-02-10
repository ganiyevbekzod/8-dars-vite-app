import { PrivateHeader } from "../components/PrivateHeader/PrivateHeader"
import { Route,Routes } from "react-router-dom"
import { PrivateHome } from "../pages/PrivateHome/PrivateHome"
import {Posts} from "../pages/Posts/Posts"
import { User } from "../pages/User/User"
export const Private=()=>{
    return(
        <div>
        <PrivateHeader/>
        <div className="container">
        <Routes>
            <Route path="/" element={<PrivateHome/>} />
            <Route path="/posts" element={<Posts/>} />
            <Route path="/user" element={<User/>} />
            <Route path="*" element={<h2 className="h2 text-center text-danger fw-bold my-5" >Not Found</h2>} />
        </Routes>
        </div>
    </div>
    )
}
// import React from 'react'
// import  React, { useState } from 'react'
import React, { useState } from 'react';
import { Link } from 'react-router-dom'
// import './App.css'

export default function SignInPage() {
    const [user, setUser] = useState({
        name: "", email: "", password: "", Id: "",
    })

    let name, value;
    const HandleInputs = ((e) => {
        console.log(e)
        name = e.target.name
        value = e.target.value

        setUser({ ...user, [name]: value })
    })
//     const postData = async (e) => {
//         e.preventDefault()
//         //const{name,email,password,Id}=user;
//         const res = await fetch('/userDetail', {
//             method: "POST",
//             headers= {
//                 "Content-Type": "application/json"
//             },
//             body= JSON.stringify({
//                 name: firstName,
//                 email: email,
//                 password: password,
//                 Id: adharNumber
//             }),
//       const data = res.json()
//       if(res.status === 400 || !data){
//                 window.alert("Invalid Credential")
//     }
//       else {
//         window.alert("Success!")
//     }
// })

// }method='POST'


return (
    <div className="text-center m-5-auto">
        <h2>Sign in to your account</h2>
        <form  action="/Select">
            <p>
                <label>Username</label><br />
                <input type="text" name="name" required
                    value={user.name}
                    onChange={HandleInputs}
                />
            </p>
            <p>
                <label>Email</label><br />
                <input type="email" name="email" required
                    value={user.email}
                    onChange={HandleInputs}
                />
            </p>
            <p>
                <label>Password</label>
                <Link to="/forget-password"><label className="right-label">Forget password?</label></Link>
                <br />
                <input type="password" name="password" required
                    value={user.password}
                    onChange={HandleInputs}
                />
            </p>
            <p>
                <label>UniqueId</label><br />
                <input type="text" name="Id" required
                    value={user.Id}
                    onChange={HandleInputs}
                />
            </p>
            {/* <p>
                <button id="sub_btn" type="submit" onclick={postData}>Login </button>
            </p> */}
        </form>
        <footer>
            {/* <p>First time? <Link to="/register">Create an account</Link>.</p> */}
            <p><Link to="/">Back to Homepage</Link>.</p>
        </footer>
    </div>
)
}

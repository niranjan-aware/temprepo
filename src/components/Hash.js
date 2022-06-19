import React from 'react'
import { Link } from 'react-router-dom'

export default function Hash() {

    return (
        <div className="text-center m-5-auto">
            <h1>Validation</h1>
            {/* <h5>Create your personal account</h5> */}
            <form action="/verified">
                <p>
                    <label>Enter Your Hsh Id</label><br/>
                    <input type="text" name="first_name" required />
                </p>
                {/* <p>
                    <label>Email address</label><br/>
                    <input type="email" name="email" required />
                </p> */}
                <p>
                    <label>Blank</label><br/>
                    <input type="password" name="password" requiredc />
                </p>
                {/* <p>
                    <input type="checkbox" name="checkbox" id="checkbox" required /> <span>I agree all statements in <a href="https://google.com" target="_blank" rel="noopener noreferrer">terms of service</a></span>.
                </p> */}
                <p>
                   {/* <link to="verified"> */}
                    <button id="sub_btn" type="submit">Verify</button>
                    {/* </link> */}
                </p>
               
            </form>
            {/* <footer>
                <p><Link to="/">Back to Homepage</Link>.</p>
            </footer> */}
        </div>
    )

}

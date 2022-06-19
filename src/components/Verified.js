import React from 'react'
import { Link } from 'react-router-dom'

export default function verified() {

    return (
        <div className="text-center m-5-auto">
            <h1>Validation</h1>
            {/* <h5>Create your personal account</h5> */}
            <form action="/">
                <p>
                    <label>Candidates Name</label><br/>
                    <input type="text" name="first_name" required />
                </p>
                {/* <p>
                    <label>Email address</label><br/>
                    <input type="email" name="email" required />
                </p> */}
                <p>
                    <label>Id</label><br/>
                    <input type="password" name="password" requiredc />
                </p>
                {/* <p>
                    <input type="checkbox" name="checkbox" id="checkbox" required /> <span>I agree all statements in <a href="https://google.com" target="_blank" rel="noopener noreferrer">terms of service</a></span>.
                </p> */}
                <p>
                   {/* <link to="verified"> */}
                    {/* <button id="sub_btn" type="submit">Verify</button> */}
                    <h5>-Authourised By wce</h5>
                    {/* </link> */}
                </p>
               
            </form>
            {/* <footer>
                <p><Link to="/">Back to Homepage</Link>.</p>
            </footer> */}
        </div>
    )

}

import { React, useState, useEffect } from 'react';
//navigate the other page
import { json, useNavigate } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';

function Signup() {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPass] = useState("");
    const navigate = useNavigate();

    useEffect(() => {
        // isme yeh  heck kye hai keh agr user signup hai to user ko dobara signup ka route na dikhen
        const auth = localStorage.getItem('user');
        if (auth) {
            navigate('/');
        }
    });

    const collectData = async () => {
        console.warn(name, email, password);
        // integrate signup api using fetch method
        // phle parameter main api url ayega aur second parameter main body wagera method kya use hoga body main kya jayega header wagera yeh sab cheezen
        let result = await fetch('http://127.0.0.1:5000/register', {
            method: "Post",
            // yeh object hai lekin api object nh leti api json stringify krke leti hai 
            body: JSON.stringify({ name, email, password }),
            headers: {
                'Content-Type': 'application/json'
            },


        });

        // yeh bhi humen promise return krega to isi lye ise hume json me convert krna prega
        result = await result.json()
        console.log(result);

        // yaha par hum local storage main data ko set krenge aur isme first parameter apki key hoti hai aur second parameter apka data jo apko rkhna hai aur waha data apko string main convert krna ai directly ap data ko nh rkh sakte
        localStorage.setItem("user", JSON.stringify(result));
        //aik dafa agr user succesfully register hojaen to use navigate krna hai home page par
        navigate('/')

    }

    return (
        <div className=''>
            <h1 className='text-center text-regsiter'>Register</h1>

            <div className='container'>
                <div className='row justify-content-center'>
                    <div className='col-lg-10 col-12'>
                        <div className="mb-3">
                            <label className="form-label">Name</label>
                            <input type="text" value={name} className="form-control" onChange={(e) => setName(e.target.value)} placeholder='Enter Your Name' />
                        </div>
                        <div className="mb-3">
                            <label className="form-label">Email</label>
                            <input type="email" value={email} className="form-control" onChange={(e) => setEmail(e.target.value)} className="form-control" placeholder='Enter Your Email' />
                        </div>
                        <div className="mb-3">
                            <label className="form-label">Password</label>
                            <input type="password" value={password} className="form-control" onChange={(e) => setPass(e.target.value)} className="form-control" placeholder='Enter Your Password' />
                        </div>
                        <button onClick={collectData} type="button" className="btn-reg">Submit</button>

                    </div>
                </div>
            </div>
        </div>
    );
}

export default Signup;

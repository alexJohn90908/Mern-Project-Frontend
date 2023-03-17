import  React, { useEffect } from 'react';
import { useNavigate, } from 'react-router-dom';
function Login() {
    const [email,setEmail] = React.useState("");
    const [password,setPassword] = React.useState("");
    let navigate = useNavigate();
    useEffect(()=>{
     const  auth = localStorage.getItem("user");
     if(auth){
        navigate("/")
     }
    });

    const handleLogin = async () => {
        console.warn(email,password);
        let result =  await fetch("http://127.0.0.1:5000/login", {
        method: 'Post',
            // yeh object hai lekin api object nh leti api json stringify krke leti hai 
        body: JSON.stringify({email, password}),
        headers: {
            'Content-Type': 'application/json'
        },
        
    });
      // yeh bhi humen promise return krega to isi lye ise hume json me convert krna prega
        result = await result.json()
        console.log(result);

        if(result.name){
        localStorage.setItem("user", JSON.stringify(result));
        navigate('/');
        }
        else{
            alert("Please Enter Your Correct Details!!");
        }
        
    }
    return (
        <div className='login'>
            <h1 className='text-center text-regsiter'>Login</h1>
            <div className='container'>
                <div className='row justify-content-center'>
                    <div className='col-lg-10 col-12'>

                        <div class="mb-3">
                            <label for="exampleInputEmail1" class="form-label" >Email address</label>
                            <input type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder='Enter Email' onChange={(e)=>setEmail(e.target.value)} value={email}/>
                        </div>
                        <div class="mb-3">
                            <label for="exampleInputPassword1" class="form-label">Password</label>
                            <input type="password" class="form-control" id="exampleInputPassword1" placeholder='Enter Your Password' onChange={(e)=>setPassword(e.target.value)} value={password}/>
                        </div>
                        <button onClick={handleLogin} type="button" className="btn-reg">Login</button>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Login;

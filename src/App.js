import React, {useState} from 'react'
import UseReducer from './UseReducer'

const App=()=>{

const [username, setUserName] = useState('')
const [password, setPassword] = useState('')
const [logging, setLogging]= useState(false)
const [error, setError]= useState("")

const handleSubmit=(e)=>{
    e.preventDefault();
    setError("");
   
    try{
        if(username==="Ibrahim" && password==="password")
        {
            setLogging(true)
            
        }
        else{
            throw Error
        }
    }
    catch(error){
        setError("Incorrect userName or Password")
        setUserName("");
        setPassword("");

    }

}
    return(<>

    <div className="flex flex-col justify-center items-center h-screen bg-gray-100">
            <h1 className="text-center text-3xl font-semibold mt-2 py-0">
                Hellow World
            </h1> 
            <div className="flex justify-center items-center h-screen bg-gray-100">
                    <form className='flex flex-col items-center justify-center
                    gap-4 mt-0 py-2
                    ' onSubmit={handleSubmit}>
                    <input className='border rouneded-lg px-2 py-1'
                    type='text'
                    value={username}
                    autoComplete='username'
                    placeholder='UserName'
                    onChange={(e)=>setUserName(e.target.value)}
                    />    
                    <input  className='border rouneded-lg px-2 py-1'
                    type='password'
                    value={password}
                    autoComplete='password'
                    placeholder='Password'
                    onChange={(e)=>setPassword(e.target.value)}
                    />    
                    <button className='bg-blue-600 text-white text-lg
                    font-medium rounded-lg py-1 px-3
                    ' type='submit'>
                        Login
                    </button>
                    <p className='text-red-500 text-center'>{error}</p>


                    </form>                
            </div>
    </div>
    <UseReducer></UseReducer>
    </>)
}
export default App
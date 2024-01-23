import { useEffect } from "react"
import { useNavigate } from "react-router-dom";
import { getAuth, signOut } from "firebase/auth";

function Home() {
    const navigate = useNavigate()
    useEffect(()=>{
        const token = sessionStorage.getItem("token")

        if(!token){console.log("Redirect Login to register");
        navigate("/register")
    }

    }, [])

    const handleSignOut = ()=>{
        const auth = getAuth(app)
        signOut(auth)
        .then(()=>sessionStorage.removeItem("token"),
        navigate("/login"))
    }


  return (
    <>
    <div>Home</div>
    <button onClick={handleSignOut()}>Logout</button>
    </>
  )
}

export default Home
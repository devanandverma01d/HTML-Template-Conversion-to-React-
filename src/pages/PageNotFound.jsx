import React from 'react'
import { Link } from 'react-router-dom'
const PageNotFound = () => {
  return (
    <>
        <Link to="/"><button style={{backgroundColor:"blue",padding:"10px",borderRadius:"10px",margin:"20px"}}>Go to Home</button></Link>
        <div style={{textAlign:"center"}}>
            <h1>404 Page Not Found</h1>
            <img src="https://www.digitalmesh.com/blog/wp-content/uploads/2020/05/404-error.jpg" style={{maxHeight:"500px",}} /> 
        </div>
       
    </>
  )
}

export default PageNotFound
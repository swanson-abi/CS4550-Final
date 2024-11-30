import React from "react"
import { useNavigate } from "react-router-dom";

const Home = (props) => {
    const { loggedIn, email } = props
    const navigate = useNavigate();
    
    const onButtonClick = () => {
        if (loggedIn) {
            localStorage.removeItem("user")
            props.setLoggedIn(false)
        } else {
            navigate("/login")
        }
    }

    return <div className="mainContainer">
        <div className={"titleContainer"}>
            <h1>SnackStack
            <div className={"buttonContainer"}>
            <input
                className={"inputButton"}
                type="button"
                onClick={onButtonClick}
                value={loggedIn ? "Log out" : "Log in"} />
            {(loggedIn ? <div>
                Your email address is {email}
            </div> : <div/>)}
        </div>
                </h1> 
            <h4>Stack up on all the recipes you'd ever want and make magic in the kitchen!
            <h5>The ultimate recipe guide for all things delicious!</h5>
            </h4>
            
        </div>



    </div>
}

export default Home
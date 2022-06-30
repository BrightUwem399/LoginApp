import React from "react";

function WelcomePage({userName}) {
    return (
        <div className="tc">
            <div className="  dib br3 pa3 ma2 bw2 shadow-4" style={{background:'#d0cde1', color:'grey'}}>
            <h4>Hello {userName}</h4>
            <p>Your login was successful!!!</p>
        </div>
        </div>
    )
}

export default WelcomePage;
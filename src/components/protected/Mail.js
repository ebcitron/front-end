import React, {useState, useEffect} from 'react';

const Mail = props => {
//const [mailState, setMailState] = useState();

return(
    <div className ="mail" >
        <div>
            <h5>To: {props.to}</h5>
            <h5>From: {props.from}</h5>
        </div> 
        <div>
            <p>Subject: {props.subject}</p>
            </div> 
    </div>
)
 


}


export default Mail;
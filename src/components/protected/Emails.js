import React, {useState, useEffect } from 'react';

const Emails = props => {
const [emails, setEmails] = useState();

useEffect(

    axios
    .get("")
    .then(emailAxiosRes => {
        console.log('emailAxiosRes', emailAxiosRes)
        setEmails("New Emails")
    
    })
    .catch(emailAxiosErr => {
        console.log('emailAxiosErr', emailAxiosErr)
    })

, []);

return (
<div className = "emails" >
    {emails.map( (mail, index) => {
        <Mail mail = {mail} key = {index} />
    })}
</div>
);

}

export default Emails;
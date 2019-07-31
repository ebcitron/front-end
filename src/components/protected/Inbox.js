import React, {useState, useEffect} from 'react';
const Inbox = props => {
    const [state, setState] = useState();

    return (
                // ^^^ Logic and search bar will be Side by side in the topbar.
        <div className = "inbox" >
            
            <div className = "topBar" >
                <LogicBar />
                <SearchBar />
            </div>

            <div className='mailList' >
               <Emails />
            </div>
        </div>
)


}
export default Inbox;
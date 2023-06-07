import React, {useEffect, useState} from 'react';
import {Link} from "react-router-dom";
import './Friends.css';
import {FriendCard} from '../../components/Friends';
import {sendJSONRequest} from "../../utils/helpers";
import NavTabs from "../../components/Navbar";


export default function Friends() {
    const [users, setUsers] = useState([]);

    const loadData = async () => {
        const res = await sendJSONRequest('GET', '/api/friends/', null, true);
        const data = await res.json();
        setUsers(data.friends);
    }

    useEffect(() => {
        loadData();
    }, [])

    let userEls = <span className='addSomeFriends'>Add some Friends!</span>
    if (users.length > 0) {
        userEls = users.map(x => <FriendCard user={x} context={'friend'} />)
    }

    return (
        <>
            <NavTabs/>
            <div className="mainFriendBlock">
                {/*<header className='friendHead2'>*/}
                {/*    <div className='horizontal'>*/}
                {/*        <h1 className='LifeLine'>Life Line</h1>*/}
                {/*    </div>*/}
                {/*    <div className='navBar'>*/}
                {/*        <Link to="/profile">*/}
                {/*            <button className='go2Profile'>Profile</button>*/}
                {/*        </Link>*/}
                {/*        <button className='go2Friends'>Friends</button>*/}
                {/*        <Link to="/timeline">*/}
                {/*            <button className='go2TimeLine'>Time Line</button>*/}
                {/*        </Link>*/}
                {/*        <button className='logout'>Logout</button>*/}
                {/*    </div>*/}
                {/*</header>*/}
                <div className='friendblock'>
                    {/*<div className='navBackground'></div>*/}
                    <div className='friendSearchBox2'>
                        <input type="text" className='searchBar2' placeholder='search friends'></input>
                        <button className='searchButton2'>+</button>
                    </div>
                    <div className='friendNav'>
                        <div className='friendTab'>
                            <button className='tabWords'>Friends</button>
                        </div>
                        <div className='userTab'>
                            <Link to="/users">
                                <button className='tabWordsUsers2'>All Users</button>
                            </Link>
                        </div>
                        <div className='blockTab'>
                            <Link to="/ignored">
                                <button className='tabWordsBlocked2'>Ignored Users</button>
                            </Link>
                        </div>
                    </div>
                    <div className="allFriends">
                        {userEls}
                    </div>
                </div>
            </div>
        </>
    );
}
  
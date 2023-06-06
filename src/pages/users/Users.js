import React, {useEffect, useState} from 'react';
import { Link } from "react-router-dom";
import './Users.css';
import {FriendCard} from "../../components/Friends";
import {sendJSONRequest} from "../../utils/helpers";

export default function Users()  {
    const [users, setUsers] = useState([]);

    const loadData = async () => {
        const res = await sendJSONRequest('GET', '/api/friends/all-users', null, true);
        const data = await res.json();
        setUsers(data.users);
    }

    const userEls = users.map(x => <FriendCard user={x} context={'user'} />)

    useEffect(() => {
        loadData();
    }, [])

    return (
      <>
        <div className="mainFriendBlock">
        <header className='friendHead2'>
                    <div className='horizontal'>
                        <h1 className='LifeLine'>Life Line</h1>
                    </div>
                    <div className='navBar'>
                        <Link to="/profile"><button className='go2Profile'>Profile</button></Link>
                        <button className='go2Friends'>Friends</button>
                        <Link to="/timeline"><button className='go2TimeLine'>Time Line</button></Link>
                        <button className='logout'>Logout</button>
                    </div>
                </header>
        <div className='friendblock'> 
            <div className='navBackground'></div>
            <div className='friendSearchBox2'>
                <input type="text" className='searchBar2' placeholder='search friends'></input>
                <button className='searchButton2'>+</button>
            </div>
            <div className='friendNav'>
                <div className='friendTab2'>
                    <Link to="/friends"><button className='tabWords'>Friends</button></Link>
                </div>
                <div className='userTab2'><p className='tabWordsUsers'>All Users</p></div>
                <div className='blockTab2'>
                    <Link to="/ignored"><button className='tabWordsBlocked'>Ignored Users</button></Link>
                </div>
            </div>
            <div className="allUsers">
                {userEls}
            </div>
        </div>
        </div>
        <footer className="footer">
            <nav className="footerNav">
            <p className="footLinks">Sign Up</p>
            <p className="footLinks">Log In</p>
            <p className="footLinks">About</p>
            <p className="footLinks">Developers</p>
            </nav>
            <p className="copyright">Meta © 2023 Life Line</p>
        </footer>
      </>
    );
  }
  
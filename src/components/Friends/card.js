import React, {useEffect, useState} from "react";
import {sendJSONRequest} from "../../utils/helpers";
import PersonRemove from "@mui/icons-material/PersonRemove";
import {PendingOutlined, Person} from "@mui/icons-material";
import PersonAddAlt1 from "@mui/icons-material/PersonAddAlt1";
import Clear from "@mui/icons-material/Clear";
import Block from "@mui/icons-material/Block";
import {Link} from "react-router-dom";

export default function FriendCard({user, context, cb}) {
    const [pendingFriend, setPendingFriend] = useState();
    const [isFriend, setisFriend] = useState();

    useEffect(() => {
        if (!user) {
            return;
        }
        setPendingFriend(user.isPending)
        setisFriend(user.isFriend);
    }, [user])

    const addFriend = async () => {
        const res = await sendJSONRequest('POST', '/api/friends/create-request', {
            friendId: user.id,
        }, true)
        if (res.status !== 200) {
            return;
        }
        setPendingFriend(true);
    }

    const deleteFriend = async () => {
        const res = await sendJSONRequest('DELETE', '/api/friends/remove-friend', {
            friendId: user.id,
        }, true)
        if (res.status !== 200) {
            console.log("error deleting a friend");
            return;
        }
        if (cb) {
            cb();
        }
    }

    let showBlockButton = true;
    let action;
    if (context === 'friend') {
        action = <button className='deleteFriend'><PersonRemove sx={{ fontSize: 40 }} onClick={deleteFriend}/></button>;
    } else if (context === 'user') {
        if (isFriend) {
            action = <Person sx={{fontSize: 40}} color={'success'} />
        } else if (pendingFriend) {
            action = <PendingOutlined sx={{fontSize: 40}} />
        } else {
            action = <button className='addFriend'><PersonAddAlt1 sx={{fontSize: 40}} onClick={addFriend}/></button>;
        }
    } else if (context === 'ignored') {
        action = <button className='deleteFriend'><Clear sx={{ fontSize: 40 }}/></button>;
        showBlockButton = false;
    }
    return (
        <figure className='friendCard2'>
            {showBlockButton && <Block sx={{ fontSize: 35 }} className='blockUser'/> }
            <div className='friendPhotoContainer'>
                <Link to={`/timeline/${user.id}`}>
                    <img className="friendPhoto" src={user.profilePhoto} alt={'friend profile'} />
                </Link>
            </div>
            <figcaption className='friendBio'>
                <div className='friendBioName'>
                    <p className='smallerP'>{user.name}</p>
                    <p className='smallerP'>{user.location}</p>
                </div>
                {action}
            </figcaption>
        </figure>
    )
}
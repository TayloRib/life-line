import React, { useState } from 'react';
// import { Link } from "react-router-dom"
import './Profile.css'
import Carousel from 'react-gallery-carousel';
import 'react-gallery-carousel/dist/index.css';

export default function Profile() {
    const [modalVisible, setModalVisible] = useState(false);

    // Array for gallery slider images
    const images = [9, 8, 7, 6, 5].map((number) => (
        {
        src: `https://placedog.net/${number}00/${number}00?id=${number}`,
        // srcset: `https://placedog.net/400/240?id=1 400w, https://placedog.net/700/420?id=1 700w, https://placedog.net/1000/600?id=1 1000w`,
        // sizes: '(max-width: 1000px) 400px, (max-width: 2000px) 700px, 1000px',
        alt: `Dogs are domesticated mammals, not natural wild animals. They were originally bred from wolves. They have been bred by humans for a long time, and were the first animals ever to be domesticated.`,
        // thumbnail: `https://placedog.net/100/60?id=1`
      }
      ));
      
    return (
        <>
        <div className="mainProfileBlock">
            <div className='profileblock'> 
            <div id='blackOut' className={modalVisible ? "blackOut" : "blackOut hidden"} onClick={() => setModalVisible(false)}></div>
                <div className='navBackground'></div>
                <header className='profileHeader'>
                    <div className='horizontal'>
                        <h1 className='LifeLine'>Life Line</h1>
                    </div>
                    <div className='navBar'>
                        <button className='go2Profile'>Profile</button>
                        <Link to="/friends"><button className='go2Friends'>Friends</button></Link>
                        <button className='go2TimeLine'>Time Line</button>
                        <button className='logout'>Logout</button>
                    </div>
                </header>
                <div className='profilePicBox'>
                    <div className='profileBox'>
                        <div className='profilePic'>
                            <div className='colorBlock1'>
                                <div className='editIcon'>EDIT</div>
                            </div>
                            <img className="profileImg" src="http://placekitten.com/300/300" alt='placeholder' />
                            <p className='contactName'>Snowball McKitten</p>
                        </div>
                        <div className='bioColumn'>
                            <div className='colorBlock4'> 
                                <div className='editIcon2'>EDIT</div>
                            </div>
                            <div className='bioWhite'>
                                <p className='contactHead'>Birth Date:</p>
                                <p className='contactDate'>May 1<sup>st</sup>, 2023</p>
                                <p className='contactHead'>Birth Place:</p>
                                <p className='contactLoc'>Seattle, Washington</p>
                                <p className='contactHead'>Current Location:</p>
                                <p className='contactNow'>Burlington, Washington</p>
                            </div>
                            <p className='contactBio'>Profile Info</p>
                        </div>
                        <div className='suggestBox'>
                            <img className='suggestFriend1' src='http://placekitten.com/150/150' alt='placeholder' />
                            <img className='suggestFriend2' src='http://placekitten.com/150/150' alt='placeholder' />
                            <img className='suggestFriend3' src='http://placekitten.com/150/150' alt='placeholder' />
                            <img className='suggestFriend4' src='http://placekitten.com/150/150' alt='placeholder' />
                        </div>
                        <div className='colorBlock5'>
                            <p className='mayKnow'>Users you may know</p>
                        </div>
                    </div>
                <div className='bioBox'>
                    <div className='notifSearchBox'>
                        <div className='notifEvent'>
                            <p className='notifys'><b>New Comments:</b> 12</p>
                            <p className='notifys'><b>New Likes:</b> 36</p>
                            <p className='notifys'><b>New Friend Requests:</b> 7</p>
                        </div>
                        <div>
                            <input type="text" className='searchBar' placeholder='search friends'></input>
                            <button className='searchButton'>+</button>
                        </div>
                    </div>
                    <div className='recentBox'>
                        <figure id="recentCard" className='recentCard' onClick={() => setModalVisible(true)}>

                            <img className='recentMedia' src="https://dummyimage.com/500x325/000/aaa" alt='placeholder' />
                            <figcaption className='recentCaption'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</figcaption>
                            <div className='recentComReac'>
                                <p className='comments'><b>Comments: </b><span>5</span></p>
                                <p className='likes'><b>Likes: </b>15</p>
                            </div>
                        </figure>
                        <div className='colorBlock2'></div>
                        <div className='recentText'><p class="textBar">Recent Events</p></div>
                        <div className='recentManyDiv'>
                            <figure className='recentMany1'>
                                <img className='recentMediaSmall' src="https://dummyimage.com/300x200/000/aaa" alt='placeholder' />
                                <div className='recentComReac'>
                                    <p className='comments2'><b>Comments: </b><span>5</span></p>
                                    <p className='likes2'><b>Likes: </b>15</p>
                                </div>
                            </figure>
                            <figure className='recentMany2'>
                                <img className='recentMediaSmall' src="https://dummyimage.com/300x200/000/aaa" alt='placeholder' />
                                <div className='recentComReac'>
                                    <p className='comments2'><b>Comments: </b><span>5</span></p>
                                    <p className='likes2'><b>Likes: </b>15</p>
                                </div>
                            </figure>
                            <figure className='recentMany3'>
                                <img className='recentMediaSmall' src="https://dummyimage.com/300x200/000/aaa" alt='placeholder' />
                                <div className='recentComReac'>
                                    <p className='comments2'><b>Comments: </b><span>5</span></p>
                                    <p className='likes2'><b>Likes: </b>15</p>
                                </div>
                            </figure>
                            <figure className='recentMany4'>
                                <img className='recentMediaSmall' src="https://dummyimage.com/300x200/000/aaa" alt='placeholder' />
                                <div className='recentComReac'>
                                    <p className='comments2'><b>Comments: </b><span>5</span></p>
                                    <p className='likes2'><b>Likes: </b>15</p>
                                </div>
                            </figure>
                        </div>
                    </div>
                    <div className='friendBox'>
                        <div className='colorBlock3'></div>
                        <div className='friendRow'>
                            <figure className='friendCard'>
                                <img className='friendSmall' src='http://placekitten.com/150/150' alt='placeholder' />
                                <p className='friendName'>Name is too long for this box</p>
                                <p className='friendLocation'>Location is too long for this box</p>
                            </figure>
                        </div>
                        <div className='friendHeaderRow'>
                            <p className='friendHeader'>Friend List</p>
                            <Link to="/friends"><button className='viewMore'>View <span>103</span> more</button></Link>
                        </div>
                    </div>
                </div>
            </div>
            <figure id="modalBox1" className={modalVisible ? "modalBox1" : "modalBox1 hidden"}>
            {/* onClick={() => setModalVisible(false)} */}

                <div className='sliderMedia'>
                    <Carousel 
                    images={images} 
                    style={{ height: 450, width: 700 }} 
                    hasIndexBoard="false"
                    canAutoPlay="false"
                    hasCaptions="true"
                    hasMediaButton="topRight"
                    autoPlayInterval="3000"
                    hasSizeButton="false"
                    >
                    </Carousel>
                </div>
                <figcaption className='sliderText'>Dogs are domesticated mammals, not natural wild animals. They were originally bred from wolves. They have been bred by humans for a long time, and were the first animals ever to be domesticated.</figcaption>
            </figure>
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
        </div>
        </>
        );
      }
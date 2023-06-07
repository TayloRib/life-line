import React from 'react';
import {Link} from "react-router-dom"
import './editEvent.css'

import Carousel from 'react-gallery-carousel';
import 'react-gallery-carousel/dist/index.css';

export default function EventEdit() {

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
        <div className="mainEditBlock">
            <header className='friendHead2'>
            <div className='horizontal'>
                <h1 className='LifeLine'>Life Line</h1>
                </div>
                <div className='navBar'>
                    <Link to="/profile"><button className='go2Profile'>Profile</button></Link>
                    <Link to="/friends"><button className='go2Friends'>Friends</button></Link>
                    <Link to="/timeline"><button className='go2TimeLine'>Time Line</button></Link>
                    <button className='logout'>Logout</button>
                </div>
            </header>

            <div className='flexRow3'>
            <div className='editBlock2'>
                <div className='navBackground'></div>
                <figure id="modalBox3" className="modalBox3">
                        <div className='sliderMedia'>
                            <Carousel 
                                images={images}
                                style={{height: 450, width: 700}}
                                hasIndexBoard="false"
                                canAutoPlay="false"
                                hasCaptions="true"
                                hasMediaButton="topRight"
                                autoPlayInterval="3000"
                                hasSizeButton="false"
                                className="largePlayer"
                            >
                            </Carousel>
                            <Carousel
                                images={images}
                                style={{height: 325, width: 500}}
                                hasIndexBoard="false"
                                canAutoPlay="false"
                                hasCaptions="true"
                                hasMediaButton="topRight"
                                autoPlayInterval="3000"
                                hasSizeButton="false"
                                className="mediumPlayer"
                            >
                            </Carousel>
                            <Carousel
                                images={images}
                                style={{height: 175, width: 315}}
                                hasIndexBoard="false"
                                canAutoPlay="false"
                                hasCaptions="true"
                                hasMediaButton="topRight"
                                autoPlayInterval="3000"
                                hasSizeButton="false"
                                className="smallPlayer"
                            >
                            </Carousel>
                        </div>
                    </figure>
                <div className="timeLineEvent3">
                    <figure className="noMargin">
                        <img className="timelineThumb" src="https://dummyimage.com/300x200/000/aaa" alt={'dummy'}></img>
                    </figure>
                    <div className="timelineInfo">
                        <div className='flexRow2'>
                            <h2 className="timelineTitle">Learned Latin</h2>
                        </div>
                        <p className="timelineDesc2">Lorem ipsum dolor sit amet, consectetur adipisci elit, sed eiusmod tempor incidunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur. Quis aute iure reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint obcaecat cupiditat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
                    </div>
                </div>
            </div>
            <div className='editEventForm'>
                <h2 className='editHeader'>Edit your Event</h2>
                <label for="editPhoto">Choose which images to add:</label>
                <button className='editPhoto'>Upload Photos</button>
                <label for="editThumbnail">Change your album cover:</label>
                <button className='editThumbnail'>Upload Thumbnail</button>
                <label for="editEventTitle">Change your Event title:</label>
                <input className='editEventTitle' placeholder='Event Title'></input>
                <label for="editEventTitle">Change your Event summary:</label>
                <textarea className='editEventDesc' placeholder='Event Description'></textarea>
                <label for="editEventDesc">Change the date your Event occured:</label>
                <input classname="editEventDate" type='date'></input>
                <div className='saveAndDelete'>
                    <button className='updateEventButton'>Save Event</button>
                    <button className='deleteEventButton'>Delete Event</button>
                </div>
                
            </div>
            </div>

        </div>
      </>
    );
  }

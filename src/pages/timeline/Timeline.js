import { useState } from 'react';
import { Link } from "react-router-dom";
import './Timeline.css';

import Carousel from 'react-gallery-carousel';
import 'react-gallery-carousel/dist/index.css';

import * as React from 'react';
import Timeline from '@mui/lab/Timeline';
import TimelineItem from '@mui/lab/TimelineItem';
import TimelineSeparator from '@mui/lab/TimelineSeparator';
import TimelineConnector from '@mui/lab/TimelineConnector';
import TimelineContent from '@mui/lab/TimelineContent';
import TimelineOppositeContent from '@mui/lab/TimelineOppositeContent';
import TimelineDot from '@mui/lab/TimelineDot';
import Typography from '@mui/material/Typography';


export default function TimelineFunc()  {

    const [eventModalVisible, setEventModalVisible] = useState(false);

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

    // React.useEffect(() => {
    //     window.addEventListener('scroll', (event) => {
    //         for (var i = 0; i < items.length; i++) {
    //                     if (isElementInViewport(items[i])) {
    //                       items[i].classList.add("in-view");
    //     }}});
    // }, []);


    return (
      <>
      <div className="mainTimelineBlock">
        <header className='friendHead'>
        <div id='blackOut' className={eventModalVisible ? "blackOut2" : "blackOut2 hidden"}
                         onClick={() => setEventModalVisible(false)}></div>
            <div className='horizontal'>
                <h1 className='LifeLine'>Life Line</h1>
                </div>
                <div className='navBar'>
                    <Link to="/profile"><button className='go2Profile'>Profile</button></Link>
                    <Link to="/friends"><button className='go2Friends'>Friends</button></Link>
                    <button className='go2TimeLine'>Time Line</button>
                    <button className='logout'>Logout</button>
                </div>
        </header>
        <div className='timelineBlock' >
        <div className='navBackground'></div>
            <Timeline position='alternate'>
                <TimelineItem>
                    <TimelineOppositeContent
                        sx={{ m: 'auto 0' }}
                        align="right"
                        variant="body2"
                        color="text.secondary"
                        >
                        <h2 className='timelineDate'>June, 2023</h2>
                    </TimelineOppositeContent>
                        <TimelineSeparator>
                            <TimelineConnector />
                            <TimelineDot>
                            </TimelineDot>
                            <TimelineConnector />
                        </TimelineSeparator>
                        <TimelineContent sx={{ py: '12px', px: 2 }}>
                            <div
                            className="timeLineEvent">
                                <figure className="noMargin">
                                    <img className="timelineThumb" src="https://dummyimage.com/300x200/000/aaa" onClick={() => setEventModalVisible(true)}></img>
                                </figure>
                                <div className="timelineInfo">
                                    <h2 className="timelineTitle">Went to Taco Bell</h2>
                                    <p className="timelineDesc">Lorem ipsum dolor sit amet, consectetur adipisci elit, sed eiusmod tempor incidunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur. Quis aute iure reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint obcaecat cupiditat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
                                    <div className="timelineNotif">
                                        <p className='comments'><b>Comments: </b><span>5</span></p>
                                        <p className='likes'><b>Likes: </b>15</p>
                                    </div>
                                </div>
                            </div>
                        </TimelineContent>
                </TimelineItem>
                <TimelineItem>
                    <TimelineOppositeContent
                        sx={{ m: 'auto 0' }}
                        align="right"
                        variant="body2"
                        color="text.secondary"
                        >
                        <h2 className='timelineDate'>June, 2023</h2>
                    </TimelineOppositeContent>
                        <TimelineSeparator>
                            <TimelineConnector />
                            <TimelineDot>
                            </TimelineDot>
                            <TimelineConnector />
                        </TimelineSeparator>
                        <TimelineContent sx={{ py: '12px', px: 2 }}>
                            <div
                            className="timeLineEvent2"
                            >
                                <figure className="noMargin">
                                    <img className="timelineThumb" src="https://dummyimage.com/300x200/000/aaa" onClick={() => setEventModalVisible(true)}></img>
                                </figure>
                                <div className="timelineInfo">
                                    <h2 className="timelineTitle">Went to Taco Bell</h2>
                                    <p className="timelineDesc">Lorem ipsum dolor sit amet, consectetur adipisci elit, sed eiusmod tempor incidunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur. Quis aute iure reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint obcaecat cupiditat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
                                    <div className="timelineNotif">
                                        <p className='comments'><b>Comments: </b><span>5</span></p>
                                        <p className='likes'><b>Likes: </b>15</p>
                                    </div>
                                </div>
                            </div>
                        </TimelineContent>
                </TimelineItem>
                <TimelineItem>
                        <TimelineOppositeContent
                        sx={{ m: 'auto 0' }}
                        variant="body2"
                        color="text.secondary"
                        >
                        <h2 className='timelineDate'>July, 2023</h2>
                        </TimelineOppositeContent>
                        <TimelineSeparator>
                        <TimelineConnector />
                        <TimelineDot color="primary">
                        </TimelineDot>
                        <TimelineConnector />
                        </TimelineSeparator>
                        <TimelineContent sx={{ py: '12px', px: 2 }}>
                        <Typography variant="h6" component="span">
                            Code
                        </Typography>
                        <Typography>Because it&apos;s awesome!</Typography>
                        </TimelineContent>
                </TimelineItem>
                <TimelineItem>
                        <TimelineOppositeContent
                        sx={{ m: 'auto 0' }}
                        variant="body2"
                        color="text.secondary"
                        >
                        <h2 className='timelineDate'>August, 2023</h2>
                        </TimelineOppositeContent>
                        <TimelineSeparator>
                        <TimelineConnector />
                        <TimelineDot color="primary" variant="outlined">
                        </TimelineDot>
                        <TimelineConnector/>
                        </TimelineSeparator>
                        <TimelineContent sx={{ py: '12px', px: 2 }}>
                        <Typography variant="h6" component="span">
                            Sleep
                        </Typography>
                        <Typography>Because you need rest</Typography>
                        </TimelineContent>
                </TimelineItem>
                <TimelineItem>
                        <TimelineOppositeContent
                        sx={{ m: 'auto 0' }}
                        variant="body2"
                        color="text.secondary"
                        >
                        <h2 className='timelineDate'>September, 2023</h2>
                        </TimelineOppositeContent>
                        <TimelineSeparator>
                        <TimelineConnector/>
                        <TimelineDot color="secondary">
                        </TimelineDot>
                        <TimelineConnector />
                        </TimelineSeparator>
                        <TimelineContent sx={{ py: '12px', px: 2 }}>
                        <Typography variant="h6" component="span">
                            Repeat
                        </Typography>
                        <Typography>Because this is the life you love!</Typography>
                        </TimelineContent>
                </TimelineItem>
                <TimelineItem>
                        <TimelineOppositeContent
                        sx={{ m: 'auto 0' }}
                        variant="body2"
                        color="text.secondary"
                        >
                        <h2 className='timelineDate'>September, 2023</h2>
                        </TimelineOppositeContent>
                        <TimelineSeparator>
                        <TimelineConnector />
                        <TimelineDot color="secondary">
                        </TimelineDot>
                        <TimelineConnector />
                        </TimelineSeparator>
                        <TimelineContent sx={{ py: '12px', px: 2 }}>
                        <Typography variant="h6" component="span">
                            Repeat
                        </Typography>
                        <Typography>Because this is the life you love!</Typography>
                        </TimelineContent>
                </TimelineItem>
            </Timeline>
            <div className='centerModal'>
            <figure id="modalBox1" className={eventModalVisible ? "modalBox1" : "modalBox1 hidden"}>
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
                    >
                    </Carousel>
                    <div className='eventNotifBar'><p className='likes2'><b>Likes: </b>15</p></div>
                    <div className='commentSection'>
                        <div className='commentSingle'>
                            <div className="friendCommentIcon"><img  src='http://placekitten.com/120/200'></img></div>
                            <div className='friendCommentBox'>
                                <h4 className='friendCommentName'> Tabby McKittyCat :</h4>
                                <p className="friendCommentText">Wow! I also love taco bell, we should go together sometime :)Wow! I also love taco bell, we should go together sometime :)Wow! I also love taco bell, we should go together sometime :)Wow! I also love taco bell, we should go together sometime :)Wow! I also love taco bell, we should go together sometime :)Wow! I also love taco bell, we should go together sometime :)</p>
                            </div>
                        </div>
                        <div className='commentSingle'>
                            <div className="friendCommentIcon"><img  src='http://placekitten.com/200/120'></img></div>
                            <div className='friendCommentBox'>
                                <h4 className='friendCommentName'> Mittens McDoggo :</h4>
                                <p className="friendCommentText">Taco Bell is mid tier honestly, go to chipotle!</p>
                            </div>
                        </div>
                        <div className='commentSingle'>
                            <div className="friendCommentIcon"><img  src='http://placekitten.com/200/100'></img></div>
                            <div className='friendCommentBox'>
                                <h4 className='friendCommentName'> Kitty McKitkat :</h4>
                                <p className="friendCommentText">I think I got food poisoning the last time I went to taco bell tbh</p>
                            </div>
                        </div>
                    </div>
                </div>
            </figure>
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
    </div>
      </>
    );
  }
  
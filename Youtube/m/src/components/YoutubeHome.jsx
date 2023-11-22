import { useState } from 'react';
import './YoutubeHome.css';
import { FaHistory, FaHome, FaServer,  FaYoutube, FaYoutubeSquare } from 'react-icons/fa';

const YoutubeHome = () => {

    const [data] = useState([{
        thumbnail: 'https://i.ytimg.com/vi/6Y3zqIL23i0/hq720.jpg?sqp=-oaymwEcCNAFEJQDSFXyq4qpAw4IARUAAIhCGAFwAcABBg==',
        image: 'https://yt3.ggpht.com/FkFiKs8_oZu60jChoFTf3UYE-MTxh_jHrteuUsFOQbdCxmIg8a6DkTGJZt2vA1wkV2lFtFH9m3g=s68-c-k-c0x00ffffff-no-rj',
        owner: 'Atlantic Music ',
        views: '18M Views . 7 months ago',
        title: 'Selena Gomez : Im sorry we lied | feat : ZAYN'
    },  {
        thumbnail: 'https://i.ytimg.com/vi/Rvey9g0VgY0/hq720.jpg?sqp=-oaymwEcCNAFEJQDSFXyq4qpAw4IARUAAIhCGAFwAcABBg==',
        image: 'https://yt3.ggpht.com/ZWxpvdMOumZ2xHDnomL_asj7Zgt_4iOO7b37KIXvW-R462d0HoVSuqbttjdyYBWrHhwOVKVG_Rk=s68-c-k-c0x00ffffff-no-rj',
        owner: 'Matt D,Avella',
        views: '6.9M Views .1 year ago',
        title: 'I learned a System for remembering everything'
    }, {
        thumbnail: 'https://i.ytimg.com/vi/BBkFLEN2G6A/hq720.jpg?sqp=-oaymwEcCNAFEJQDSFXyq4qpAw4IARUAAIhCGAFwAcABBg==',
        image: 'https://yt3.ggpht.com/A_3mLbY1nzH3MPjzEftkO8LK02HazD4PWy9XbwLDQ4hDkbBCla4EkcVNM0kZDTeMWqNCD4jVbA=s68-c-k-c0x00ffffff-no-rj',
        owner: 'Tanay Pratap',
        views: '50 k views. 6 days ago',
        title: 'DATA ANALYST ROADMAP '
    }, {
        thumbnail: 'https://i.ytimg.com/vi/MwmxZ85RLJU/hq720.jpg?sqp=-oaymwEcCNAFEJQDSFXyq4qpAw4IARUAAIhCGAFwAcABBg==',
        image: 'https://yt3.googleusercontent.com/ytc/APkrFKa3yoeLWJXX30BOAgr75umgoreAWWB3A91YoMd6PDE=s176-c-k-c0x00ffffff-no-rj-mo',
        owner: 'Anshika Gupta',
        views: '103K Views . 1 month ago ',
        title: 'Get Job with zero coding (OR minimum coding)|Cloud job roles for Fresher in...'
    }, {
        thumbnail: 'https://i.ytimg.com/vi/RlYHkFMLMtg/hq720.jpg?sqp=-oaymwEcCNAFEJQDSFXyq4qpAw4IARUAAIhCGAFwAcABBg==',
        image: 'https://yt3.ggpht.com/y1F4EOGuP19nZcBlzcyCtnHiYhkAOPQiRxwKeaGrOjXarUZZjcx_heiDiC06_Qj6ERea_qWK9A=s68-c-k-c0x00ffffff-no-rj',
        owner: 'T-Series',
        views: '169M Views . 2 months ago ',
        title: 'JAWAN: Chaleya (Hindi) | Shah Rukh Khan | Nayanthara | atlee | Anirudh | A..'
    },  {
        thumbnail: 'https://i.ytimg.com/vi/stjZKBhQ3lg/hq720.jpg?sqp=-oaymwEcCNAFEJQDSFXyq4qpAw4IARUAAIhCGAFwAcABBg==',
        image: 'https://yt3.ggpht.com/y1F4EOGuP19nZcBlzcyCtnHiYhkAOPQiRxwKeaGrOjXarUZZjcx_heiDiC06_Qj6ERea_qWK9A=s68-c-k-c0x00ffffff-no-rj',
        owner: 'T-Series',
        views: '92M Views . 2 months ago ',
        title: 'JAWAN: Zinda Banda (Hindi) | Shah Rukh Khan | atlee | Anirudh | Narayan..'
    }, {
        thumbnail: 'https://i.ytimg.com/vi/23vKCXZ6yg8/hq720.jpg?sqp=-oaymwEcCNAFEJQDSFXyq4qpAw4IARUAAIhCGAFwAcABBg==',
        image: 'https://yt3.ggpht.com/ytc/APkrFKZJdGQNLYbmqI68IQOrz_4iHbWbt5dSYNUoNv6IWf8=s68-c-k-c0x00ffffff-no-rj',
        owner: 'Technical Guruji',
        views: '115k Views . 9 hours ago ',
        title: 'Redmi Note 13 pro+ Unboxing & First Look - 120W - 200MP - IP68'
    },{
        thumbnail: 'https://i.ytimg.com/vi/a18py61_F_w/hq720.jpg?sqp=-oaymwEcCNAFEJQDSFXyq4qpAw4IARUAAIhCGAFwAcABBg==',
        image: 'https://yt3.ggpht.com/nOd4MDguLocyCgkOOs1YBF0xZfvafKP27Q_E6BwK85myVX9BWhSEBePoeIrhuil_PoYb5O-gOg=s68-c-k-c0x00ffffff-no-rj',
        owner: 'Coke Studio Pakistan',
        views: '473M Views . 8 years ago ',
        title: 'Coke Studio Season 8|Tajdar-e-Haram|Atif Aslam'
    }, {
        thumbnail: 'https://i.ytimg.com/vi/MQH1IcSIeyc/hq720.jpg?sqp=-oaymwEcCNAFEJQDSFXyq4qpAw4IARUAAIhCGAFwAcABBg==',
        image: 'https://i.ytimg.com/vi/MQH1IcSIeyc/hq720.jpg?sqp=-oaymwEcCNAFEJQDSFXyq4qpAw4IARUAAIhCGAFwAcABBg==',
        owner: 'Zee Music Compamny',
        views: '3.3M Views . 6 days ago ',
        title: 'Sara Zamana - Ganapath | Tiger Shroff,Elli AvrRam| Benny Dayal, Prakri..'
    }, {
        thumbnail: 'https://i.ytimg.com/vi/jzYxbnHHhY4/hq720.jpg?sqp=-oaymwEcCOgCEMoBSFXyq4qpAw4IARUAAIhCGAFwAcABBg==',
        image: 'https://yt3.ggpht.com/y1F4EOGuP19nZcBlzcyCtnHiYhkAOPQiRxwKeaGrOjXarUZZjcx_heiDiC06_Qj6ERea_qWK9A=s68-c-k-c0x00ffffff-no-rj',
        owner: 'T-Series',
        views: '171M Views . 1 year ago ',
        title: 'Bhool Bhulaiyaa (Full movie) Akshay Kumar Vidya balan,Shiney A, Prak..'
    },
   {
        thumbnail: 'https://i.ytimg.com/vi/RlYHkFMLMtg/hq720.jpg?sqp=-oaymwEcCNAFEJQDSFXyq4qpAw4IARUAAIhCGAFwAcABBg==',
        image: 'https://yt3.ggpht.com/y1F4EOGuP19nZcBlzcyCtnHiYhkAOPQiRxwKeaGrOjXarUZZjcx_heiDiC06_Qj6ERea_qWK9A=s68-c-k-c0x00ffffff-no-rj',
        owner: 'T-Series',
        views: '169M Views . 2 months ago ',
        title: 'JAWAN: Chaleya (Hindi) | Shah Rukh Khan | Nayanthara | atlee | Anirudh | A..'
    },{
        thumbnail: 'https://i.ytimg.com/vi/CLKrLdPQBGo/hq720.jpg?sqp=-oaymwEcCNAFEJQDSFXyq4qpAw4IARUAAIhCGAFwAcABBg==',
        image: 'https://yt3.ggpht.com/nhDLqeIgXMJBDIrX2bXavvHoWX0tsslDEh7k2xZ1P0W8b_CMRVigp2kxJubYEVwBcBlogZDe=s68-c-k-c0x00ffffff-no-rj',
        owner: 'Apna College',
        views: '243K Views . 18 hours ago',
        title: 'Bringing Complete Web Development Course | in 4.5 Months | Delta 3.0 with..'
    }
    ])
    const [shortsData] = useState([
        {
            SThumbnail: "https://i.ytimg.com/vi/qfeypSg_uWk/oar2.jpg?sqp=-oaymwEdCJUDENAFSFWQAgHyq4qpAwwIARUAAIhCcAHAAQY=&rs=AOn4CLC1OLPw8lfKJdQOFzg4S-nbTcL9qg",
            STitle: "Lucrative IT CAREER",
            SViews: "672 views"
        }, {
            SThumbnail: "https://i.ytimg.com/vi/X2FnO7QX7zI/hq720.jpg?sqp=-oaymwEdCJUDENAFSFXyq4qpAw8IARUAAIhCcAHAAQbQAQE=",
            STitle: "Find weapon",
            SViews: "2M views"
        },{
            SThumbnail : "https://i.ytimg.com/vi/asqrHCbpT10/oar2.jpg?sqp=-oaymwEdCJUDENAFSFWQAgHyq4qpAwwIARUAAIhCcAHAAQY=&rs=AOn4CLDs_HCpyOqFlYxQGwj1xDJeN25UwA",
            STitle: "#sanajaved #pakistan",
            SViews: "9.1K views"
        },{
            SThumbnail : "https://i.ytimg.com/vi/DWBCs75gZ-4/oar2.jpg?sqp=-oaymwEdCJUDENAFSFWQAgHyq4qpAwwIARUAAIhCcAHAAQY=",
            STitle: "Tum tum | Viral Dance Trend | Front View",
            SViews: "37M views"
        },{
            SThumbnail : "https://i.ytimg.com/vi/-CaFEYi9pbA/oar2.jpg?sqp=-oaymwEdCJUDENAFSFWQAgHyq4qpAwwIARUAAIhCcAHAAQY=&rs=AOn4CLDb4ccDX4c2s3-My9EKXsYB3IttKA",
            STitle: "iPhone 12 mini 2022",
            SViews: "898K views"
        }
    ])
    return (
        <div id="home-screen">
            <div className='youtube-body'>
                <div className='home-left'>

                <FaHome style={{FaHome,fontSize:'19px',cursor:'pointer',marginLeft:'10px',marginTop:'8px'}} className= 'icon home'/><br/>
                    <span>Home</span><br />

                    <FaServer style={{FaServer,fontSize:'19px',cursor:'pointer',marginLeft:'10px',marginTop:'30px'}} className= 'icon server'/><br/>
                    <span>Shorts</span><br />

                    <FaYoutube style={{FaYoutube,fontSize:'19px',cursor:'pointer',marginLeft:'10px',marginTop:'30px'}} className= 'icon youtube'/><br/>
                    <span>Subscriptions</span><br />

                    <FaYoutubeSquare style={{FaYoutubeSquare,fontSize:'19px',cursor:'pointer',marginLeft:'10px',marginTop:'30px'}} className= 'icon youtubesquare'/><br/>
                    <span>You</span><br/>

                    <FaHistory style={{FaHistory,fontSize:'19px',cursor:'pointer',marginLeft:'10px',marginTop:'30px'}} className= 'icon history'/><br/>
                    <span>History</span>

                </div>
                <div className='home-right'>
                    <div className='home-body-top'>
                        <button style={{ backgroundColor: 'black', color: 'white' }}>All</button>
                        <button>Computer Science</button>
                        <button>Thoughts</button>
                        <button>Music</button>
                        <button>Gaming</button>
                        <button>Study Skills</button>
                        <button>Live</button>
                        <button>History</button>
                        <button>Action Thriller</button>
                        <button>Playlists</button>
                        <button>Recently Uploaded</button>
                        <button>Watched</button>
                    </div>
                    <div className='youtube-main'>
                        {data.map((pro) => (
                            <div className='youtube-single-div'>
                                <div className='Youtube-thumbnail'>
                                    <img src={pro.thumbnail} />
                                </div>
                                <div className='single-down-div'>
                                    <div className='single-down-img'>
                                        <img src={pro.image} />
                                    </div>
                                    <div className='single-div-content'>
                                        <p>{pro.title}</p>
                                        <span className='single-div-owner'>{pro.owner}</span><br />
                                        <span className='single-div-views'>{pro.views}</span>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                    <div className='youtube-shorts'>
                        <img src='data:image/png;base64,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' />
                    </div>
                    <div className='youtube-main2'>
                        {shortsData.map((pro2) => (
                            <div className='shorts-single-div'>
                                <img src={pro2.SThumbnail}/>
                                <p>{pro2.STitle}</p>
                                <span>{pro2.SViews}</span>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    )
}
export default YoutubeHome


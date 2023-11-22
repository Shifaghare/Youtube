import { useState } from 'react'
import Navbar from './Navbar'
import './You.css'
import { FaHome, FaServer, FaYoutube, FaYoutubeSquare } from 'react-icons/fa'

const You = () => {
    const [data, setData] = useState([{
        thumbnail: 'https://i.ytimg.com/vi/Dsgvzf_YuNw/hqdefault.jpg?sqp=-oaymwE2CPYBEIoBSFXyq4qpAygIARUAAIhCGAFwAcABBvABAfgBtgiAAvwKigIMCAAQARhLIF4oZTAP&rs=AOn4CLCWmRRtD_ZInbevCBI7Y75GCRp-gQ',
        image: 'https://yt3.ggpht.com/ytc/APkrFKb5bcmery3bCCmOwZrBGMS2mu7yqsqjDO8Kpme90g=s68-c-k-c0x00ffffff-no-rj',
        owner: 'Top SWE ',
        views: '165K Views . 9 months ago',
        title: 'Tips after 2000 hours of coding'
    }, {
        thumbnail: 'https://i.ytimg.com/vi/8NDrgU--B28/hqdefault.jpg?sqp=-oaymwEcCPYBEIoBSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLBnNytLQniHi1hYqj_7pmYNQ1CZ4A',
        image: 'https://yt3.ggpht.com/nhDLqeIgXMJBDIrX2bXavvHoWX0tsslDEh7k2xZ1P0W8b_CMRVigp2kxJubYEVwBcBlogZDe=s68-c-k-c0x00ffffff-no-rj',
        owner: 'Coding Addict',
        views: '23K Views . Streamed 3 months ago',
        title: 'Power Hour Live Stream'
    }, {
        thumbnail: 'https://i.ytimg.com/vi/kCgn-7NBPSs/hqdefault.jpg?sqp=-oaymwEcCPYBEIoBSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLDZUEgILWkzoM-hzNVmLpR3v86rjw',
        image: 'https://yt3.ggpht.com/0J2EnnqRfBLqrMl-T7hyOzte7c3fX42SgtXvad9v3g_jWLd9JgtKuX1J3ZLNFbjWBXJbThL6=s68-c-k-c0x00ffffff-no-rj',
        owner: 'PIRATE KING',
        views: '538K Views . 1 year ago',
        title: 'Resume that got selected in Google Microsoft and Amazon'
    }, {
        thumbnail: 'https://i.ytimg.com/vi/m55PTVUrlnA/hqdefault.jpg?sqp=-oaymwEcCPYBEIoBSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLBzNfcMt7gFFtybSgd_EDNtgYpMOw',
        image: 'https://yt3.ggpht.com/oQ2NQMuq-9IS6_MZdsGXa0RWecaACremA01Z7jo-YpoEF1H6PyUF8PZzXkV10OYwSP3UMJDeTg=s68-c-k-c0x00ffffff-no-rj',
        owner: 'Pedro Tech',
        views: '358K Views . 1 years ago',
        title: 'All the Javascript You need to know for react '
    }, {
        thumbnail: 'https://i.ytimg.com/vi/46dZH7LDbf8/hqdefault.jpg?sqp=-oaymwEcCPYBEIoBSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLC_08Ln_O0v5l8Q5IsXEx9xqitqRw',
        image: 'https://yt3.googleusercontent.com/ytc/APkrFKa3yoeLWJXX30BOAgr75umgoreAWWB3A91YoMd6PDE=s176-c-k-c0x00ffffff-no-rj-mo',
        owner: 'Neetcode',
        views: '455K Views . 1 year ago',
        title: 'Mock Coding Interview with a Meta Intern'
    }, {
        thumbnail: 'https://i.ytimg.com/vi/UZt9tS6AeLI/hqdefault.jpg?sqp=-oaymwEcCPYBEIoBSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLB2Rj-YdgGvOjREP7WNVl6fYaDxUg',
        image: 'https://yt3.ggpht.com/y1F4EOGuP19nZcBlzcyCtnHiYhkAOPQiRxwKeaGrOjXarUZZjcx_heiDiC06_Qj6ERea_qWK9A=s68-c-k-c0x00ffffff-no-rj',
        owner: 'Tanmay bhat',
        views: '159k Views . 2 years ago',
        title: 'Is Stock Market a BUBBLE????'
    }, {
        thumbnail: 'https://i.ytimg.com/vi/Hi0zbU3DW6o/hqdefault.jpg?sqp=-oaymwEcCPYBEIoBSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLDn45hEpT-C_iroIjvDsQPkNnFXuQ',
        image: 'https://yt3.ggpht.com/ytc/APkrFKZJdGQNLYbmqI68IQOrz_4iHbWbt5dSYNUoNv6IWf8=s68-c-k-c0x00ffffff-no-rj',
        owner: 'Vogue',
        views: '20M views . 2 years ago',
        title: '73 Questions with kylie jenner'
    }, {
        thumbnail: 'https://i.ytimg.com/vi/r1MXwyiGi_U/hqdefault.jpg?sqp=-oaymwEcCPYBEIoBSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLD4p_LaJ7m2LdpBJsSSpg_hLp7o7g',
        image: 'https://yt3.ggpht.com/y1F4EOGuP19nZcBlzcyCtnHiYhkAOPQiRxwKeaGrOjXarUZZjcx_heiDiC06_Qj6ERea_qWK9A=s68-c-k-c0x00ffffff-no-rj',
        owner: 'TechLead',
        views: '912k . 5 months ago',
        title: 'Top 10 Algorithms for coding interview'
    }, {
        thumbnail: 'https://i.ytimg.com/vi/Q8FUQawC_1I/hqdefault.jpg?sqp=-oaymwEcCPYBEIoBSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLA3H0tNfkq5Gg3mExjSqS7Sk5vzXw',
        image: 'https://yt3.ggpht.com/nOd4MDguLocyCgkOOs1YBF0xZfvafKP27Q_E6BwK85myVX9BWhSEBePoeIrhuil_PoYb5O-gOg=s68-c-k-c0x00ffffff-no-rj',
        owner: 'Ashhad Ahmad',
        views: '1.4M Views . 1 year ago',
        title: 'How i learned to code in 3 months'
    }, {
        thumbnail: 'https://i.ytimg.com/vi/R6ku3U60ZZ8/hqdefault.jpg?sqp=-oaymwEcCPYBEIoBSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLCmIUzdP-aCBfD4zFi_jZaV5kzQlw',
        image: 'https://i.ytimg.com/vi/MQH1IcSIeyc/hq720.jpg?sqp=-oaymwEcCNAFEJQDSFXyq4qpAw4IARUAAIhCGAFwAcABBg==',
        owner: 'Gamery',
        views: '1.2M Views 1 year ago',
        title: 'The End'
    }])
    return (
        <>
            <div id='you-screen'>
                <Navbar />
                <div className='you-body'>
                <div class="you-left">
<FaHome class="icon" /><br/>
<span style={{marginLeft:'-16px'}}>Home</span><br/>
<FaServer class="icon"/><br/>
<span style={{marginLeft:'-13px'}}>Shorts</span><br/>
<FaYoutube class="icon" /><br/>
<span>Subscription</span><br/>
<FaYoutubeSquare class="icon"/><br/>
<span style={{marginLeft:'-16px'}}>Library</span><br/>
</div>
                    <div className='you-right'>
                        <div className='you-right-1'>
                            <div className='you-image'>
                                <img src='https://yt3.ggpht.com/yti/ADpuP3MbFwb25limf7z2Z4jBtthbCpjUl2AgQXS6=s88-c-k-c0x00ffffff-no-rj' />
                            </div>
                            <div className='you-details'>
                                <h1>Shifa Ghare</h1>
                                <p>@shifaghare575 &bull; View channel</p>
                                <button><i class="fa-solid fa-user"></i> Switch account</button>
                                <button><i class="fa-brands fa-google"></i> Google Account</button>
                            </div>
                        </div>
                        <h1 className='you-history-h1'><i class="fa-solid fa-clock-rotate-left"></i> History</h1>
                        <div className='hist-vids'>
                            {data.map((pro) => (
                                <div className='you-history-single'>
                                     <div className='you-hist-thumbnail'>
                                        <img src={pro.thumbnail}/>
                                     </div>
                                     <p className='you-hist-title'>{pro.title}</p>
                                     <span className='you-hist-owner'>{pro.owner}</span>
                                     <p className='you-hist-views'>{pro.views}</p>
                                </div>
                            ))}
                        </div>
                        <h1 className='you-history-h1'><i class="fa-solid fa-list"></i> Playlists</h1>
                        <div className='hist-vids'>
                            {data.map((pro) => (
                                <div className='you-history-single'>
                                     <div className='you-hist-thumbnail'>
                                        <img src={pro.thumbnail}/>
                                     </div>
                                     <p className='you-hist-title'>{pro.title}</p>
                                     <span className='you-hist-owner'>{pro.owner}</span>
                                     <p className='you-hist-views'>{pro.views}</p>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default You
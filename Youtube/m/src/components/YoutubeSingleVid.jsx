import './YoutubeSingleVid.css';
import Navbar from './Navbar';
import { FaAngleDown, FaBell, FaShare, FaThumbsDown, FaThumbsUp } from 'react-icons/fa';

const YoutubeSingleVid = () => {
    return (
        <>
            <Navbar />
            <div id='SV-screen'>
                <div className='SV-body'>
                    <div className='SV-body-left'>
                        <div className='SV-main-vid'>
                            {/* <iframe src='https://youtu.be/_ON9koi7st4?si=p8LTYMsqvAmSmM7i'></iframe> */}
                            <iframe src="https://www.youtube.com/embed/VAdGW7QDJiU?si=Fj8V_9RbPDLRaXkV"  ></iframe>
                        </div>
                        <p className='SV-title'>JAWAN: Chaleya (Hindi)| Shah Rukh Khan | Nayanthara | Atlee | Anirudh | Arijit S, Shilpa R | Kumaar </p>
                        <div className='SV-left-lastdiv'>
                            <div className='SV-owner-photo'>
                                <img src='https://yt3.ggpht.com/y1F4EOGuP19nZcBlzcyCtnHiYhkAOPQiRxwKeaGrOjXarUZZjcx_heiDiC06_Qj6ERea_qWK9A=s88-c-k-c0x00ffffff-no-rj' />
                            </div>
                            <div className='SV-owner-name'>
                                <div>TSeries</div>
                                <div>252M </div>
                            </div>
                            <button className='SV-subs-button'>
                                <FaBell style={{ FaBell, fontSize: '19px', cursor: 'pointer', marginRight: '-15px', marginTop: '2px',width:'60px' }} className='icon bell' />

                                <span> Subscribed </span>
                                <FaAngleDown style={{ FaAngleDown, fontSize: '19px', cursor: 'pointer', marginLeft: '3px', marginTop: '3px' }} className='icon angledown' />
                            </button>

                            <button style={{borderRadius:'20px',border:'none', width:'170px',marginLeft:'50px'}}> 
                           
                            <FaThumbsUp style={{ marginLeft:'-10px',marginTop:'2px' }} className='icon thumbsup' />
                            <span style={{marginLeft:'7%',marginTop:'50px'}}>127K</span>
                            <span style={{marginLeft:'7%'}}>|</span>
                            <FaThumbsDown style={{ marginLeft:'20px',marginTop:'7px' }} className='icon thumbsdown' />
                            </button>

                             <button style={{borderRadius:'20px',border:'none', width:'100px',marginLeft:'50px'}}>
                             <FaShare style={{ marginRight:'70px',marginTop:'-10px' ,marginLeft:'5px',fontSize:'15px'}} className='icon share' />
                                <div style={{marginTop:'-28px',marginLeft:'3px'}}>Share</div>
                             </button> 
                           
                        </div>
                    </div>
                    <div className='SV-body-right'>
                        <div style={{  height: '1000px', }}>


                            <div style={{ height: '100px'}}>
                                <div
                                    style={{
                                        width:'100%',
                                        height: '90px',
                                    
                                        // marginRight: '60%',
                                        marginLeft: '5px',
                                        marginTop: '5px',
                                        display: 'flex',
                                    }}
                                >
                                    <img style={{ width: '200px' }}
                                        src="https://i.ytimg.com/vi/ElZfdU54Cp8/hqdefault.jpg?sqp=-oaymwEcCNACELwBSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLAas6fzyGKXK9YEiqX0EIe1nSgDfw" />
                                    <div style={{ width: '100%', height: 'auto' }}>
                                    <p className='fit' style={{ marginLeft:'9.5px',fontWeight:'600',marginBottom:'-2px'}}>Apna Bana Le</p>
                                        <span style={{marginRight:'150px',fontWeight:'400',fontSize:'13px',marginTop:'-20px'}}>Bollywood hits</span><br/>
                                        <span style={{marginRight:'92px',fontWeight:'400',fontSize:'13px',marginTop:'-20px'}}> 2.9M Views . 1 week ago </span>
                                    </div>
                                </div>
                            </div>
                            <div style={{ height: '100px' }}>
                                <div
                                    style={{
                                        width:'100%',
                                        height: '90px',
                                  
                                        // marginRight: '60%',
                                        marginLeft: '5px',
                                        marginTop: '5px',
                                        display: 'flex',
                                    }}
                                >
                                    <img style={{ width: '265px' }}
                                        src="https://i.ytimg.com/vi/ZMLNAGUQYKo/hqdefault.jpg?sqp=-oaymwE2CNACELwBSFXyq4qpAygIARUAAIhCGAFwAcABBvABAfgB_gmAAtAFigIMCAAQARgvIC8ofzAP&rs=AOn4CLDNWBjiqo73fivIawfE-e0t5gEhpA" />
                                    <div style={{  width: '100%', height: 'auto' }}>
                                        <p className='fit' style={{ marginLeft:'9.5px',fontWeight:'600',marginBottom:'-2px'}}>One Direction:Night Changes</p>
                                        <span style={{marginRight:'166px',fontWeight:'400',fontSize:'13px',marginTop:'-20px'}}>Olivia Lyrics</span><br/>
                                        <span style={{marginRight:'87px',fontWeight:'400',fontSize:'13px',marginTop:'-20px'}}>1.4M Views . 4 weeks ago </span>

                                    </div>
                                </div>
                            </div>
                            <div style={{ height: '100px'}}>
                                <div
                                    style={{
                                        width:'100%',
                                        height: '90px',
                                        // : '1px solid green',
                                        // marginRight: '60%',
                                        marginLeft: '5px',
                                        marginTop: '5px',
                                        display: 'flex',
                                    }}
                                >
                                    <img style={{ width: '200px' }}
                                        src="https://i.ytimg.com/vi/IhLJRgr-r0o/hqdefault.jpg?sqp=-oaymwEcCNACELwBSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLD2XydCiu_bELPDMTw6TzDJpS5flw" />
                                    <div style={{ width: '100%', height: 'auto' }}>
                                    <p className='fit' style={{ marginLeft:'9.5px',fontWeight:'600',marginBottom:'-2px'}}>Heeriye: (Bollywood)</p>
                                        <span style={{marginRight:'190px',fontWeight:'400',fontSize:'13px',marginTop:'-20px'}}>T-Series</span><br/>
                                        <span style={{marginRight:'87px',fontWeight:'400',fontSize:'13px',marginTop:'-20px'}}>50M Views . 2 months ago </span>
                                    </div>
                                </div>
                            </div>
                            <div style={{ height: '100px'}}>
                                <div
                                    style={{
                                        width:'100%',
                                        height: '90px',
                                   
                                        // marginRight: '60%',
                                        marginLeft: '5px',
                                        marginTop: '5px',
                                        display: 'flex',
                                    }}
                                >
                                    <img style={{ width: '200px' }}
                                        src="https://i.ytimg.com/vi/GvFbjknsLJg/hqdefault.jpg?sqp=-oaymwE2CNACELwBSFXyq4qpAygIARUAAIhCGAFwAcABBvABAfgB_gmAAtAFigIMCAAQARhlIFQoPzAP&rs=AOn4CLC74UWEw9S1VaRi3WZfBnNXKgdW5w" />
                                    <div style={{ width: '100%', height: 'auto' }}>
                                    <p className='fit' style={{ marginLeft:'9.5px',fontWeight:'600',marginBottom:'-2px'}}>Ijazat :(Nehaal Naseem)</p>
                                        <span style={{marginRight:'154px',fontWeight:'400',fontSize:'13px',marginTop:'-20px'}}>Bollywood hits</span><br/>
                                        <span style={{marginRight:'97px',fontWeight:'400',fontSize:'13px',marginTop:'-20px'}}>5.8M Views . 1 year ago </span>
                                    </div>
                                </div>
                            </div>
                            <div style={{ height: '100px'}}>
                                <div
                                    style={{
                                        width:'100%',
                                        height: '90px',
                                     
                                        // marginRight: '60%',
                                        marginLeft: '5px',
                                        marginTop: '5px',
                                        display: 'flex',
                                    }}
                                >
                                    <img style={{ width: '200px' }}
                                        src="https://i.ytimg.com/vi/_XBVWlI8TsQ/hqdefault.jpg?sqp=-oaymwEcCNACELwBSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLDykjhNcmDOVja76gEw1iSMq0Tbxw" />
                                    <div style={{ width: '100%', height: 'auto' }}>
                                    <p className='fit' style={{ marginLeft:'9.5px',fontWeight:'600',marginBottom:'-2px'}}>Kaifi Khalil: Kahani Suno </p>
                                        <span style={{marginRight:'166px',fontWeight:'400',fontSize:'13px',marginTop:'-20px'}}>Kaifi Khalil</span><br/>
                                        <span style={{marginRight:'87px',fontWeight:'400',fontSize:'13px',marginTop:'-20px'}}>245M Views . 1.5 year ago </span>
                                    </div>
                                </div>
                            </div>
                            
                           

                            


                        </div>
                    </div>
                </div>

            </div>
        </>
    )
}

export default YoutubeSingleVid;


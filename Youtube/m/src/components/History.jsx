import React from 'react'
import './History.css'
import { FaBan, FaHome, FaPause, FaSearch, FaServer, FaWrench, FaYoutube, FaYoutubeSquare } from 'react-icons/fa'

 const History = () => {
  return (
<>
<div id='screen'>
<div class="left">
<FaHome class="icon" /><br/>
<span style={{marginLeft:'-16px'}}>Home</span><br/>
<FaServer class="icon"/><br/>
<span style={{marginLeft:'-13px'}}>Shorts</span><br/>
<FaYoutube class="icon" /><br/>
<span>Subscription</span><br/>
<FaYoutubeSquare class="icon"/><br/>
<span style={{marginLeft:'-16px'}}>Library</span><br/>
</div>

<div class="mid">
    <span style={{marginRight: '499px', fontSize: '17px',letterSpacing:'-0.6px', display: 'inline-block'}}><b>Watch history</b></span>
    <span style={{marginRight: '529px', fontSize: '17px',letterSpacing:'-0.6px', display: 'inline-block',marginTop:'20px'}}><b>Yesterday</b></span>
<div class="main"> 
    <div class="videos">
         <img class="imgclass" src='https://i.ytimg.com/vi/vAkOwKtd2p0/hqdefault.jpg?sqp=-oaymwE2CNACELwBSFXyq4qpAygIARUAAIhCGAFwAcABBvABAfgB_gmAAtAFigIMCAAQARhsIGwobDAP&rs=AOn4CLAsuxMfog8JFyucoQwo2CMCwvdsXA'/>
         <span class="text"> Waareya : Lofi Song #lofi music <br/><span style={{marginRight:'80px'}}>New Bollywood Song</span> </span><br/>
         <div class="channel"> A21 Lofi Music </div>
         <div class="subchannel"> 408K views </div>
        
         </div>
    <div class="videos"> 
         <img class="imgclass" src='https://i.ytimg.com/vi/WJumea3vEpw/hqdefault.jpg?sqp=-oaymwEcCNACELwBSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLBSYuqg_9GP4horFpN9y28DIGv9Pw'/>
         <span class="text" style={{marginBottom:'30px'}}> Heeriye :(Official Video) Jasleen Royal ft  <br/><span style={{marginRight:'240px'}}>Arijit Singh</span> </span>
         <div style={{marginRight:'270px'}}> PS Official </div><br/>
         <div class="subchannel"> 3.9M views</div>
         </div>
    <div class="videos"> 
         <img class="imgclass" src='https://i.ytimg.com/vi/6Y3zqIL23i0/hqdefault.jpg?sqp=-oaymwEcCNACELwBSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLBwy3c570Lb9sNNrDJiHtO2-yijFw'/>
         <span class="text"> I'M Sorry we lied: (ZAYN MALIK)<br/> <div style={{marginRight:'120px'}}>ft (Selena Gomez)</div><br/><span style={{marginRight:'80px'}}></span> </span>
         <div class="channel"> Atlantic Music </div>
         <div class="subchannel"> 18M Views </div>
        
         </div>
    <div class="videos"> 
         <img class="imgclass" src='https://i.ytimg.com/vi/qhYLX8QWIHQ/hqdefault.jpg?sqp=-oaymwEcCNACELwBSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLDg585ZE6cPGwX0RwR9YMvL45_aQQ'/>
         <span class="text"> Kahani Suno 2.0 </span><br/>
         <div class="channel" > Kaifi Khalil </div>
         <div class="subchannel"> 29M Views </div>
         
         </div>
   
 
         
        

</div>
</div>

<div class="right">

<div class="searchhhbar"> 
<FaSearch class="searchhhicon"/>
<div style={{marginTop:"-20px",marginLeft:'19px'}}>Search Watch History <hr style={{borderTop: '1.5px solid black',marginTop:'3px',width:'250px',marginLeft:'-20px'}}/></div><br/>
</div>

<div class="deletebar"> 
<FaBan class="deleteicon"/>
<div style={{marginTop:"-20px",marginLeft:'19px'}}>Delete Watch History </div><br/>     
</div>

<div class="deletebar"> 
<FaPause class="deleteicon"/>
<div style={{marginTop:"-20px",marginLeft:'19px'}}>Pause Watch History </div><br/>     
</div>

<div class="deletebar"> 
<FaWrench class="deleteicon"/>
<div style={{marginTop:"-20px",marginLeft:'25px'}}>Manage Watch History </div><br/>     
</div>

<div style={{marginRight:'190px',marginTop:'20px',lineHeight:'35px'}}>
<div style={{marginLeft:'-12px'}}><b>Comments</b></div>
<div style={{marginLeft:'37px'}}><b>Community posts</b></div>
<div style={{marginLeft:'-14px'}}><b>Live Chats</b></div>
</div>
</div>

</div>
</>
  )
}
export default History
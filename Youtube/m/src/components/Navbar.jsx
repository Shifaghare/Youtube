import toast from 'react-hot-toast';
import './Navbar.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import { Dropdown } from 'react-bootstrap';
import {FaSearch,FaMicrophone,FaHome,FaVideo,FaBell, FaBars, FaServer, FaYoutube, FaClipboard, FaHistory, FaStopwatch, FaAngleDown, FaPrescription, FaBookmark} from 'react-icons/fa'

const Navbar = () => {
    return(
        <div id='navbar-screen'>
            <div className='navbar-body'>
                <div className='navbar-left'>
                <Dropdown >
      <Dropdown.Toggle variant="white" id="dropdown-basic"  style={{border:'none'}}>
        <FaBars style={{ fontSize: '22px', cursor: 'pointer', marginLeft: '-25px', marginTop: '5px' }} className='icon bars' />
      </Dropdown.Toggle>

      <Dropdown.Menu style={{backgroundColor:'black',color:'white'}}>
        <Dropdown.Item href="/">
            <FaHome style={{ fontSize: '20px', color:'white',cursor: 'pointer', marginLeft: '5px', marginTop: '5px' }} className='icon home' />
            <span style={{color:'white',marginLeft:'10px'}}>Home</span>
            </Dropdown.Item>
            <Dropdown.Item href="shorts">
            <FaServer style={{ fontSize: '20px', color:'white',cursor: 'pointer', marginLeft: '5px', marginTop: '5px' }} className='icon server' />
            <span style={{color:'white',marginLeft:'10px'}}>Shorts</span>
            </Dropdown.Item>
            <Dropdown.Item href="subscriptions">
            <FaYoutube style={{ fontSize: '20px', color:'white',cursor: 'pointer', marginLeft: '5px', marginTop: '5px' }} className='icon youtube' />
            <span style={{color:'white',marginLeft:'10px'}}>Subscriptions</span>
            </Dropdown.Item><hr/>
            <Dropdown.Item href="you">
            <FaBookmark style={{ fontSize: '20px', color:'white',cursor: 'pointer', marginLeft: '5px', marginTop: '5px' }} className='icon bookmark' />
            <span style={{color:'white',marginLeft:'10px'}}>You </span>
            </Dropdown.Item>
            <Dropdown.Item href="/history">
            <FaHistory style={{ fontSize: '20px', color:'white',cursor: 'pointer', marginLeft: '5px', marginTop: '5px' }} className='icon history' />
            <span style={{color:'white',marginLeft:'10px'}}>History</span>
            </Dropdown.Item>
            <hr/>
            <Dropdown.Item href="library">
            <FaClipboard style={{ fontSize: '20px', color:'white',cursor: 'pointer', marginLeft: '5px', marginTop: '5px' }} className='icon clipboard' />
            <span style={{color:'white',marginLeft:'10px'}}>Library </span>
            </Dropdown.Item>
          
            <Dropdown.Item href="Your-Videos">
            <FaVideo style={{ fontSize: '20px', color:'white',cursor: 'pointer', marginLeft: '5px', marginTop: '5px' }} className='icon video' />
            <span style={{color:'white',marginLeft:'10px'}}>Your Videos</span>
            </Dropdown.Item>
            <Dropdown.Item href="Watch-Later">
            <FaStopwatch style={{ fontSize: '20px', color:'white',cursor: 'pointer', marginLeft: '5px', marginTop: '5px' }} className='icon stopwatch' />
            <span style={{color:'white',marginLeft:'10px'}}>Watch Later</span>
            </Dropdown.Item>
            <Dropdown.Item href="more">
            <FaAngleDown style={{ fontSize: '20px', color:'white',cursor: 'pointer', marginLeft: '5px', marginTop: '5px' }} className='icon angledown' />
            <span style={{color:'white',marginLeft:'10px'}}>Show more</span>
            </Dropdown.Item>

      </Dropdown.Menu>
    </Dropdown>                
 
 


                <div>
                    <img src='https://www.gstatic.com/youtube/img/promos/growth/6ab442d6a1002dcfa655526badce27feecfc743e1fbe9cbb98ed6855a504a898_324x72.png'/>
                </div>
                </div>
                <div className='navbar-mid'>
                    <div>
                        <input type='input' placeholder='Search' style={{height:'17px',borderRadius:'50px'}} />
                        <FaSearch style={{FaSearch,fontSize:'19px',cursor:'pointer',marginLeft:'500px',marginTop:'-60px'}} className= 'icon search'/>

                    
                    </div>
                    <div className='voice-button'>
                    <FaMicrophone style={{FaMicrophone,color:'black',fontSize:'19px',cursor:'pointer',marginLeft:'1px',marginTop:'8px'}} className= 'icon Microphone'/>
                    
                    </div>
                </div>
                <div className='navbar-right'>
                <FaVideo style={{FaVideo,fontSize:'19px',cursor:'pointer',marginLeft:'10px',marginTop:'19px'}} className= 'icon video'/>
                <FaBell style={{FaBell,fontSize:'19px',cursor:'pointer',marginLeft:'10px',marginTop:'19px'}} className= 'icon bell'/>

                <div className='nav-photo'>
                  <a href='Login'><img style={{width:'100%',borderRadius:'50%'}} src='https://yt3.ggpht.com/yti/ADpuP3MbFwb25limf7z2Z4jBtthbCpjUl2AgQXS6=s88-c-k-c0x00ffffff-no-rj'/></a>
                </div>
                </div>
            </div>
        </div>
    )
}

export default Navbar;
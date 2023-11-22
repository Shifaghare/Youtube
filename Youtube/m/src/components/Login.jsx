import React from 'react'
import './Login.css'

const login = () => {
  return (
    <div id='sc'>

       <div style={{height:"500px",borderRadius:'10px',border:'1px solid black',opacity:'0.7',marginLeft:'32%',marginRight:'32%',marginTop:'70px'}}>
        <div style={{marginTop:'7%'}}>
        <span style={{color:'blue',fontSize:'25px',fontWeight:'500'}}>G</span>
        <span style={{color:'red',fontSize:'25px',fontWeight:'500'}}>o</span>
        <span style={{color:'yellow',fontSize:'25px',fontWeight:'500'}}>o</span>
        <span style={{color:'blue',fontSize:'25px',fontWeight:'500'}}>g</span>
        <span style={{color:'green',fontSize:'25px',fontWeight:'500'}}>l</span>
        <span style={{color:'red',fontSize:'25px',fontWeight:'500'}}>e</span></div>
        <div style={{marginTop:'5%'}}><span style={{fontSize:'25px',marginTop:'5%',color:'black'}}>Sign in</span></div>
        <div style={{marginTop:'5%'}}><span style={{fontSize:'19px',marginTop:'3%',color:'black'}}>Use your Google Account</span></div>


        {/* <input style={{height:'50px',width:'70%',marginTop:'6%'}} placeholder='Email Or Phone Number'></input><br/> */}

        <div class='input-group'>
        <input type='text' style={{height:'10px',width:'70%',marginTop:'6%',borderRadius:'50px'}}/>
        <label style={{marginTop:'20px',marginLeft:'40px'}}> Email or Phone number</label>
        </div><br/>


        <span style={{marginLeft:'-53%',color:'blue',fontWeight:'500',fontSize:'14px'}}>Forgot email?</span>


        <div style={{fontSize:'14px',marginTop:'13%',marginLeft:'28px'}}>Not your computer? Use Guest mode to sign in privately.</div>
        <span style={{marginLeft:'-58%',color:'blue',fontWeight:'500',fontSize:'13px'}}>Learn More</span>

        <div style={{height:'30px',marginTop:'8%'}}>
        <span style={{marginLeft:'-52%',color:'blue',fontWeight:'500',fontSize:'15px'}}>Create account</span>
        <div style={{marginLeft:'80%',marginTop:'-4.9%',width:'17%',borderRadius:'5px',backgroundColor:'blue',color:'white',height:'30px',fontSize:'15px',textAlign:'center'}}><span>Next</span></div>
        </div>
        

       </div>



    </div>
    
  )
}

export default login

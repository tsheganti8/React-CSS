import React, {Component} from 'react'
import './HomePage.css';
import './reactUsage.jpg';
import MenuItem from "@material-ui/core/MenuItem";
import Button from "@material-ui/core/Button";
import Menu from "@material-ui/core/Menu";

export class HomePage extends Component{
    constructor(props){
        super(props)
        this.state = {
            toggleMenu : false,
            toggleMenuHome: false,
            toggleMenuProfile: false,
            toggleMenuLogout:false
        }
           
    }
    handleCloseHome =()=>{
        this.setState({toggleMenuHome: true, toggleMenu: false, toggleMenuProfile: false, toggleMenuLogout:false})
    }
    handleClickProfile =()=>{
        this.setState({toggleMenuProfile: true, toggleMenu:false, toggleMenuHome: false, toggleMenuLogout:false})
    }
    handleClickLogout =()=>{
        this.setState({toggleMenuLogout: true, toggleMenu:false, toggleMenuHome:false, toggleMenuProfile: false})
    }
    handleClick = ()=>{
        this.setState({toggleMenu: true})
    }
   
    render(){
        const {toggleMenu, toggleMenuHome, toggleMenuProfile, toggleMenuLogout} = this.state;
        console.log("Me",toggleMenu )
        const styling = {
            color: "black",
            backgroundColor: "lightblue",
            padding: "6px",
            fontFamily: "Arial"
          };
        return(
            <div>
<div style={{marginRight: "100%", position:"absolute", marginTop:"0.5%"}}>
{!toggleMenuLogout && <button onClick={this.handleClick}>Menu  </button>}
<span ><Menu
		keepMounted
		toggleMenu={toggleMenu}
		onClose={this.handleClose}
		open={Boolean(toggleMenu)}
        PaperProps={{
            style: {
              maxHeight: `500px`,
               marginTop:'-3.5%'
            }
          }}
	>
		
		<MenuItem onClick={this.handleClickProfile} >Profile</MenuItem>
        <MenuItem onClick={this.handleCloseHome} divider={false}>Home</MenuItem>
		<MenuItem onClick={this.handleClickLogout} >Logout</MenuItem>
	</Menu></span>
    </div>

{!toggleMenuHome && !toggleMenuProfile && !toggleMenuLogout && 
<><h1 style={{color: "white", backgroundColor: "black"}}>Welcome to our site</h1><br />
<p style={styling}> *** Please click the above menu *** </p>
<body></body></>}


        {toggleMenuHome && !toggleMenuProfile && !toggleMenuLogout &&  <span>   <h1 style={{color: "white", backgroundColor: "black"}}>Welcome to React!</h1>
      <p style={styling}> 
      React is a free and open-source front-end JavaScript library for building user interfaces based on UI components. It is maintained by Meta and a community of individual developers and companies. React can be used as a base in the development of single-page or mobile applications.</p>
         <body>
        <h>React PreRequisites :</h><br /> Before you can code using React, you need to learn HTML, CSS, and JavaScript. While HTML and CSS are not required, the JSX syntax used by React is based on HTML. You'll need to have a good knowledge of HTML to understand how it works
         </body> </span>}
         
         {toggleMenuProfile &&  !toggleMenuHome && !toggleMenuLogout && <span> <h1 style={{color: "white", backgroundColor: "black"}}>Welcome to your profile</h1>
         <img src={require('./reactUsage.jpg')} /></span>}
         {toggleMenuLogout && !toggleMenuHome && !toggleMenuProfile && <span>  <h1 style={{color: "white", backgroundColor: "black"}}>Thank you !! <br /> You have successfully logged out</h1></span>}
            </div>
        )

    }
}

export default HomePage
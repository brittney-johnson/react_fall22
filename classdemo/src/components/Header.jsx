import React, {Component} from "react";
import '../sass/Resume.scss';

class Header extends Component{
    //constructor
    constructor(props){
       super(props)
       this.state={ 
        count: 0, 
        theme: window.matchMedia('prefers-color-scheme: dark').matches ? "dark" : "light",
        name: ""
      }
    }
    render(){
        return(
            <header className={`App-header ${this.state.theme}`}>
            <div class="container">
            <h1 className={"testing-this " + this.state.theme}>
               Brittney Johnson
            </h1>
            <h5>Computer Science Student @ CSU</h5>
            <h6>Contact Brittney:<br/>706*573*6496<br/>brittney.breakfree@gmail.com</h6>
            <br></br>

            <i><b><h2><u>Meet Brittney</u></h2></b></i>
            <h6>Motivated, driven and creative computer science student who is passionate about gaining payment industry experience using technology skills. </h6>

            <i><b><h2><u>Technical Skills</u></h2></b></i>
            <h6>Python, Java, C# <br/>Microsoft Office<br/>Google Apps</h6>

            <i><b><h2><u>Projects</u></h2></b></i>
            <h5><b>Book Central Publishing Studio</b></h5>
            <h6>- Implemented the command design pattern using C#<br/>
                - Program stores user input by using a menu interface with different options.<br/> 
                - Libraries were created and used to store the user input.</h6>
             <h5><b>Fun Finder</b></h5>
             <h6>- Designed and developed a Python project that took in user input as limits and returned recreational locations.<br/>
                 - The interface provided options based on age, distance, and more and returned catered results with addresses, phone numbers, and hours of operation.<br/>
                 - Database of organizations and businesses that host events and activities in the local area was gathered.
</h6>

            <i><b><h2><u>Education</u></h2></b></i>
            <h5><b>Columbus State University</b></h5>
            <h6>Senior @ CSU Applied Computer Science track</h6>

            <h5><b>Northside High School</b></h5>
            <h6>- Volunteered to teach elderly members of the community how to use social media<br/> 
                - Organized events to advocate safe and responsible internet usage<br/>
                -Gained early graduation by being involved in dual enrollment.</h6>


            </div>
          </header>
        )

    }
}

export default Header
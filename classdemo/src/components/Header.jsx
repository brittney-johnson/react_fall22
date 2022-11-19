import React, {Component} from "react";
import MainBody from "./MainBody"

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
    //lifecycle methods
    //exp ? true : false


    //render method
    render(){
        const { linkText, linkUrl } = this.props
        const name = this.state.name
        //this.props.linkText
        console.log(window.matchMedia('prefers-color-scheme: dark').matches)
        console.log(this.state)
        return(
            <header className={`App-header ${this.state.theme} ${this.state.count}`}>
            <p className={"testing-this " + this.state.theme}>
               Edit <code>src/App.js</code> and save to reload. */
            </p>
            <a className="App-link" href={linkUrl} target="_blank" rel="noopener noreferrer"
            >
                {linkText}
            </a>
            <div>
              <h3> Your stateful name is: <i>{name}</i></h3>
                  <input type="text" value={name} on Change={(e) => this.setState({name: e.target.value})}/>
            </div>
            <span>
              You have clicked on the button {this.state.count} times!
            </span>
            <button onClick={() => this.setState({ count : this.state.count + 1})}>
              Increment Count
            </button>
            <MainBody />
          </header>
        )

    }
}

export default Header
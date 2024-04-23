import React, { Component } from 'react';
import Popup from 'reactjs-popup';
import { IoMdSend } from "react-icons/io";
import { BsFillPeopleFill } from "react-icons/bs";
import DisplayMessages from '../DisplayMessages';
import 'reactjs-popup/dist/index.css';
import './index.css'

class Chatpage extends Component {
  state = {
    array: [],
    msg: "",
    initialHeight : 0
  }

  elementRef = React.createRef();
  height = 0;
  userList = ["Alan", "Bob", "Carol", "Dean", "Elin"];
  colors = ["blue","red","black","#f73e85","#eb5e34"];

  componentDidMount() {
    this.setHeight();
    this.setInitialHeight();
  }

  componentDidUpdate() {
    this.setHeight();
  }

  setHeight = () => {
    const { initialHeight} = this.state;
    if (this.elementRef.current) {
      // Get the height of the element
      this.height = this.elementRef.current.offsetHeight;
      const difference = this.height - initialHeight;
    window.scrollTo({ top: difference, behavior: 'smooth' });
    }
  }

  setInitialHeight = () => {
    if (this.elementRef.current) {
      // Get the height of the element
      const tempHeight = this.elementRef.current.offsetHeight;
      this.setState({initialHeight : tempHeight});
    }
  }

  submitMessage = (event) => {
    event.preventDefault();
    const number = Math.floor(Math.random()*5);
    const { msg } = this.state;
    this.setState(prevState => ({ array: [...prevState.array, {message : msg,
                                                                person : this.userList[number],
                                                            color: this.colors[number]}], msg: "" }));
  }

  setMessage = (event) => {
    const message = event.target.value;
    this.setState({ msg: message });
  }

  render() {
    const { array, msg} = this.state;
    console.log(array);
    return (
      <div>
        <nav className="nav">
          <div>
            <h1>Introductions</h1>
            <p>This channel is for company wide chatter</p>
          </div>
          <div>
            <Popup trigger={<BsFillPeopleFill className='people-icon'/>} position='top right' modal> 
                <ul className='positioning'>
                    <li>Alan</li>
                    <li>Bob</li>
                    <li>Carol</li>
                    <li>Dean</li>
                    <li>Elin</li>
                </ul>
            </Popup>
          </div>
        </nav>
        <div className='messages-content' ref={this.elementRef}>
          {array.map((item, index) =>{ 
         
          return <div key={index}><DisplayMessages itemDetails={item} /></div>})}
        </div>
        <div className="footer">
          <form onSubmit={this.submitMessage} className="form">
            <input placeholder="Type your message" onChange={this.setMessage} value={msg} className="text-box" />
            <button type="submit" className="send"><IoMdSend/></button>
          </form>
        </div>
      </div>
    );
  }
}

export default Chatpage;

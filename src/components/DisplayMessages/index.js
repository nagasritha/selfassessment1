import { AiOutlineLike } from "react-icons/ai";
import "./index.css";

const DisplayMessages = (props)=>{
 const {itemDetails,increaseLikes} = props;
 const {id,message,person,color,likes} = itemDetails;
 const twoLet = person.substring(0,2);
 console.log(twoLet); 
 const likesIncriment = ()=>{
    increaseLikes(id);
 }
 return <div className='message-item'>
    <p style={{backgroundColor:color}} className="twoLet">{twoLet}</p>
    <div className="message-box">
    <p className="message">{message}</p>
    <div className="like" >
    <AiOutlineLike onClick={likesIncriment}/>
    {likes!==0 && <p>{likes}</p>}
    </div>
    </div>
 </div>
}

export default DisplayMessages;
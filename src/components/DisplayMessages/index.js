import "./index.css";

const DisplayMessages = (props)=>{
 const {itemDetails} = props;
 const {message,person,color} = itemDetails;
 const twoLet = person.substring(0,2);
 console.log(twoLet); 
 return <div className='message-item'>
    <p style={{backgroundColor:color}} className="twoLet">{twoLet}</p>
    <p className="message">{message}</p>
 </div>
}

export default DisplayMessages;
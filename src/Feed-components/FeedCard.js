import './FeedCard.css';
import parse from 'html-react-parser';

function FeedCard(props) {


    let content=null
    try{
        content=parse(props.content)
    }catch(e){
        return
    }
    return (
      <div className="FeedCard">
        <h3>{props.title}</h3>
        <div className="Authur">
            <h5>{props.authur}</h5>
            <h5>published on: {props.pubdate}</h5>
        </div>
        <div>{content}</div>
        <a href={props.link} target="_blank" rel="noopener noreferrer">For more</a>
      </div>
    );
  }
  
export default FeedCard;
  
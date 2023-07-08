import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTwitter} from '@fortawesome/free-brands-svg-icons'
import './App.css';
import useGenerateRandomColor from "./useGenerateRandomColor";


function App() {
  const { color, generateColor,quote }= useGenerateRandomColor();
  const tweetText = encodeURIComponent(quote.body);
  const tweetAuthor = encodeURIComponent(quote.by);
  return (
    <div className="App" style={{backgroundColor: "#" + color}}>
       <div id="quote-box" >
          <div id="header">
            <p id="text" style={{color: "#" + color}}>{quote.body} </p>
            <p id="author" style={{color: "#" + color}}>- {quote.by}</p>
          </div>
          <div id="footer"> 
          <a id="tweet-quote" rel="noreferrer" target="_blank" href={`https://twitter.com/intent/tweet?text=${tweetText} %0A %09 %09 - ${tweetAuthor}`} style={{backgroundColor: "#" + color}} ><FontAwesomeIcon icon={faTwitter} style={{color: 'white'}}/></a>
        <input type="button" value="New quote" id="new-quote" style={{backgroundColor: "#" + color}} onClick={generateColor} />
        </div>
       </div>
       <p id="by">By Kiran</p>
    </div>
    
  );
}
export default App;

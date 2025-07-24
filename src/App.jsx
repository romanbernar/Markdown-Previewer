import { useState } from 'react'
import './App.css'
import { marked  } from 'marked';
import defaultText from './defaultText.txt?raw'

function App() {
 /* React code for Markdown Preview.  
/* Uses purify.js and marked.js
*/ 

//Filler text from defaultText.txt for textbox
const [text, setText] = useState(marked(defaultText));
marked.use({
breaks: true
});
  //< Rendered text={text} />
const clean = DOMPurify.sanitize(marked(defaultText));

const getText = () => {
  const textbox = document.querySelector("textarea");
  textbox.value=(defaultText);
  setText(marked(defaultText));

}

const resetText = () => {
  const textbox = document.querySelector("textarea");
  textbox.value=('');
  setText('');

}

console.log('26 is good')
return(
  <>
  <div className="container"> 
    <button title="click to see more information" onClick={getText}>
    More Info
   </button>
    <button title="Click to reset text" onClick={resetText}>
    Clear Text
    </button>
  </div>
     < RenderMarkdown text={text} setText={setText} />
      </>
)

}

function RenderMarkdown({text, setText}) {
 // HTML => Markdown
  const handleChange = (event) => {
    // Sanitizes text and converts to Markdown before saving to `text`
    console.log('handling change');
    //console.log(marked(DOMPurify.sanitize(event.target.value)));
    setText(DOMPurify.sanitize(marked(event.target.value)));
    
  };
    
    return(
      <> 
        <div className="container">
      < textarea className = "item" rows="50" cols="20" defaultValue = {''}
      onChange= {handleChange} />
      <div className = "item" dangerouslySetInnerHTML={{__html: text}} onChange = {handleChange} />
           </div>
      </>
    ) 
}

export default App
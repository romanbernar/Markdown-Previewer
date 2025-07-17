import { useState } from 'react'
import React from 'react';
import { createRoot } from 'react-dom/client';
import './App.css'
import { marked  } from 'marked';

const defaultText = `Rewrite text here
Markdown Example
================
Markdown example
----------------
*Italics*
**Bold**
 ~~Strike-Through~~


 \`
This is some inline code.
\` 

\`\`\`
Alternatively, code can be typed 
in a block:
\`\`\`



[Here is a link to FreeCodeCamp](http://www.freecodecamp.com)
>This is a block quote. 
>More block quote.

![moo](/src/assets/cow.jpg)

List items:
* Cow
* sheep
* pig
`
function App() {
 /* React code for Markdown Preview.  
/* Uses purify.js and marked.js
*/ 

//Filler text for textbox

const [text, setText] = useState(marked(defaultText));
console.log(text)
marked.use({
breaks: true
});
  //< Rendered text={text} />
const clean = DOMPurify.sanitize(marked(defaultText));
return(
      <div className="container">
     < RenderMarkdown text={text} setText={setText} />
      </div>
)

}

function RenderMarkdown({text, setText}) {
 // HTML => Markdown
  const handleChange = (event) => {
    // Sanitizes text and converts to Markdown before saving to `text`
    console.log(marked(DOMPurify.sanitize(event.target.value)));
    setText(marked(DOMPurify.sanitize(event.target.value)));
    
  };
    
    return(
      <> 
      < textarea className = "item" rows="50" cols="20" defaultValue = {text}
      onChange= {handleChange} />
      <div className = "item" dangerouslySetInnerHTML={{__html: text}} onChange = {handleChange} />
      </>
    ) 
}

export default App
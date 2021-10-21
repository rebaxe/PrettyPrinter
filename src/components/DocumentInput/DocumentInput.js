import { useState } from 'react';
import './DocumentInput.css'

const DocumentInput = ({ updateText }) => {
  const [input, setInput] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault()
    updateText(input)
  }

  return (
    <form onSubmit={(e) => handleSubmit(e)}>
      <textarea 
        name="inputText" 
        id="inputText"
        value={input}
        onChange = {(e) => setInput(e.target.value)}
        cols="50" rows="10" 
        required 
        placeholder="Input the text you want to parse..."></textarea>
      <input type="submit" id="submitInput" value="Parse" />
    </form>
  );
}
 
export default DocumentInput;
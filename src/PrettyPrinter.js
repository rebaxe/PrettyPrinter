import { useState } from "react";
import DocumentInput from "./components/DocumentInput/DocumentInput";
import Printer from "./components/Printer/Printer";
import './PrettyPrinter.css'
import { parse } from '@rebaxe/parser'
import { convertSentence } from "./helpers/converter";

const PrettyPrinter = () => {
  const [textInput, setTextInput] = useState('');

  const updateText = (text) => {
    const myDocument = parse(text)
    const sentences = myDocument.fetchAllSentences()
    const stringSentences = sentences.parsedSentences.map(sentence => convertSentence(sentence))
    setTextInput(stringSentences)
  }

  const resetText = () => {
    setTextInput('')
  }

  return ( 
    <div className="container">
    <h1>PrettyPrinter</h1>
    { textInput === '' 
      ? <DocumentInput updateText={updateText} />
      : <Printer text={textInput} resetText={resetText} />
    }
    </div>
   );
}
 
export default PrettyPrinter;
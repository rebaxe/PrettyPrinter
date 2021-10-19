import { useState } from "react";
import DocumentInput from "./components/DocumentInput/DocumentInput";
import Printer from "./components/Printer/Printer";
import './PrettyPrinter.css'

const PrettyPrinter = () => {
  const [textInput, setTextInput] = useState("");

  const updateText = (text) => {
    setTextInput(text)
  }

  return ( 
    <div className="container">
    <h1>PrettyPrinter</h1>
    { textInput === "" 
      ? <DocumentInput updateText={updateText} />
      : <Printer text={textInput} />
    }
    </div>
   );
}
 
export default PrettyPrinter;
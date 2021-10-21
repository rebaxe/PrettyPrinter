import { useState } from "react"
import DocumentInput from "./components/DocumentInput/DocumentInput"
import Printer from "./components/Printer/Printer"
import './PrettyPrinter.css'
import { parse } from '@rebaxe/parser'
import { Converter } from "./helpers/Converter"

const PrettyPrinter = () => {
  const [textInput, setTextInput] = useState('')
  const [error, setError] = useState(null)
  const converter = new Converter()

  const updateText = (text) => {
    try {
      const myDocument = parse(text)
      const sentences = myDocument.fetchAllSentences()
      const stringSentences = sentences.parsedSentences.map(sentence => converter.convertSentence(sentence))
      setTextInput(stringSentences)
    } catch (error) {
      handleError(error)
      console.log(error.message)
    }
  }

  const handleError = (error) => {
    setError(error)
  }

  const handleCloseError = () => {
    setError(null)
    setTextInput('')
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
  )
}

export default PrettyPrinter
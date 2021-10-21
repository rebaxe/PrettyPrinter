import { RegularSentence } from '@rebaxe/parser/src/RegularSentence'
import { Expression } from '@rebaxe/parser/src/Expression'
import { Question } from '@rebaxe/parser/src/Question'

/**
 * Represents a converter.
 *
 * @class
 */
export class Converter {
  convertSentence (sentence) {
    if (this._isRegular(sentence)) {
      return {
        string: sentence.getStringSentence,
        type: 'regular'
      }
    } else if (this._isExpression(sentence)) {
      return {
        string: sentence.getStringSentence,
        type: 'expression'
      }
    } else if (this._isQuestion(sentence)) {
      return {
        string: sentence.getStringSentence,
        type: 'question'
      }
    }
  }
  
  _isRegular(sentence) {
    return sentence instanceof RegularSentence
  }
  
  _isExpression(sentence) {
    return sentence instanceof Expression
  }
  
  _isQuestion(sentence) {
    return sentence instanceof Question
  }
}

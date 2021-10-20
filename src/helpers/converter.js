import { RegularSentence } from '@rebaxe/parser/src/RegularSentence'
import { Expression } from '@rebaxe/parser/src/Expression'
import { Question } from '@rebaxe/parser/src/Question'

export function convertSentence (sentence) {
  if (isRegular(sentence)) {
    return {
      string: sentence.getStringSentence,
      type: 'regular'
    }
  } else if (isExpression(sentence)) {
    return {
      string: sentence.getStringSentence,
      type: 'expression'
    }
  } else if (isQuestion(sentence)) {
    return {
      string: sentence.getStringSentence,
      type: 'question'
    }
  }
}

function isRegular(sentence) {
  return sentence instanceof RegularSentence
}

function isExpression(sentence) {
  return sentence instanceof Expression
}

function isQuestion(sentence) {
  return sentence instanceof Question
}
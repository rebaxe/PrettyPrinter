# :rainbow: PrettyPrinter 
The application provides an input field where you can input text which you can parse to find valid sentences. 

The valid sentences are:
* **regular sentences** ending with a "."
* **expressions** ending with a "!" 
* **questions** ending with a "?"

The sentences are printed in the same order as you input them, with a prefix indicating their index in the input text. Regular sentences are printed with normal font style, expressions are bold and questions in italic. 

If something goes wrong when parsing the text, an error message will be displayed.

## :rocket: How to run

1. run `npm install` to install dependencies
2. run `npm start` to run the application in development mode locally in your browser
3. open [http://localhost:3000](http://localhost:3000) to view it in the browser *(the page will reload if you make edits.\
You will also see any lint errors in the console)*


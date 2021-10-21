import './Printer.css'

const Printer = ({ text, resetText }) => {
  return (
    <div className="printerContainer">
      <div className="textField">
        {text.map((t, index) => (
          <p className={t.type} key={index}>
            <span className="indexContainer">[{index}]</span> {t.string}&nbsp;
          </p>
        ))}
      </div>
      <button className="clearBtn" onClick={resetText}>Clear document</button>
    </div>
   );
}
 
export default Printer;
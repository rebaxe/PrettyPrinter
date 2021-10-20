import './Printer.css'

const Printer = ({ text }) => {
  return ( 
    <div className="textField">
      {text.map((t, index) => (
        <p className={t.type} key={index}>
          <span className="indexContainer">[{index}]</span> {t.string}&nbsp;
        </p>
      ))}
    </div>
   );
}
 
export default Printer;
import './ErrorMessage.css'

const ErrorMessage = ({ error, handleClose }) => {
  return ( 
    <div className="modalBg">
        <div className="modalContent">
          <button className="closeBtn" onClick={handleClose}>&#215;</button>
          <h1>Something went wrong 😢</h1>
          <div>
            <p>{error.message}</p>
          </div>
        </div>
      </div>
   )
}
 
export default ErrorMessage
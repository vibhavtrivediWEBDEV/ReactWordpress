import React,{useRef} from 'react';
import ReactToPrint, { useReactToPrint } from 'react-to-print';

function Print() {

    setTimeout(() => {
        handlePrint()
    }, 5000);
    const pageStyle = `{ size: 10mm 5mm }`;
const handlePrint = useReactToPrint({
    pageStyle : {pageStyle},
    content : () => componentRef.current,
    documentTitle : 'Ticket',
    onAfterPrint : ()=> alert('Print Success !')
});
const componentRef  = useRef();
  return (
    <>
        <div ref={componentRef} className="ticketPrint">
         <div className='bannerimg'></div>
        <center>
        <h3 style={{color:'#111'}}> VIBHAV</h3>
         <h5 style={{color:'#111'}}>Saitec International</h5>
     
        </center>
         <div className='ticket_images'>
            <div>
                <img src='https://images.unsplash.com/photo-1661961112835-ca6f5811d2af?ixlib=rb-4.0.3&ixid=MnwxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=872&q=80' />
            </div>
            <div>
                <img src='https://images.unsplash.com/photo-1661961112835-ca6f5811d2af?ixlib=rb-4.0.3&ixid=MnwxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=872&q=80' />
            </div>
         </div>
         <center><h6 style={{color:'red'}}>Ticket ID : vibhavtrivedi6@gmail.com</h6></center>
            
        </div>
    </>
  )
}

export default Print
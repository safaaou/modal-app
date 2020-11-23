import '../App.scss';
import React from 'react'
import { Modal } from 'react-bootstrap';
import Row from './Row';



function TimePicker(props) {

  const { show, title, columns, onConfirm} = props;


  /**
   * 
   * return values 
   */
  const handleConfirm = (e) => {
    e.preventDefault();
    const data = {};
   
    for(const column of columns){
      data[column.name] = e.target.elements[column.name].value;
    }
  
    return onConfirm(data);
  };


    return (
       
      <>
              <Modal show={show} onHide={props.onDismiss} scrollable animation={false}>
                <div className="container">
                  <Modal.Header closeButton>
                    <Modal.Title>{title}</Modal.Title>
                  </Modal.Header>
                  
                  <Modal.Body >
                  <form className="form" onSubmit={handleConfirm}>
                    {columns.map((c, index) => (
                      <>
                        <h4>{c.label}</h4>
                        <Row name={c.name} cols={c.options}/>
                    </>
                    ))}


                    <input type="submit" className="submit" value="Confirm" />

                    <input type="submit" className="dismiss" value="Close" onClick={props.onDismiss} />
         
                    </form>
                    </Modal.Body>

                  </div>
                </Modal>
      </>
    );
    
}

export default TimePicker;
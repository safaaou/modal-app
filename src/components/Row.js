import '../App.scss';
import React from 'react';
/**function ButtonList(props) {
    const buttons = props.cols;
    const listItems = buttons.map((btn, index) =>    
    <button type="button" value={btn}className="btn btn-outline-success" 
              key={index} onClick={props.onValue}>{btn}</button> );  
    return (
            <div >{listItems}</div>
          );
  }*/


function Row (props) {

    const { name, cols} = props;

    return (

    
        <>
        
        <section className="picker" style={{display: 'flex', width: '100%',	overflowX: 'scroll',scrollbarWidth: 'none'}}>
                            {cols.map((c) => (
                            <>
                                <input type="radio" name={name} id={c.value} value={c.value}/>
                                <label className="four col" htmlFor={c.value}>{c.texte}</label>
                            </>
                            ))}
                            
        </section>
        </>
    );
}

export default Row;
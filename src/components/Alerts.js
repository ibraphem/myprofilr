import React from 'react';

const Alerts = ({type, msg, closeAlert}) => {
    return (
        <div className={`alert ${type}`} role="alert" style={{maxWidth:"400px"}}>
            <b>{msg}</b>
            <span onClick={() => closeAlert()} style={{color:"#000", fontWeight: 900, cursor: "pointer"}} className='float-end mx-5 text-black'>X</span>
        </div>
    );
};

export default Alerts;
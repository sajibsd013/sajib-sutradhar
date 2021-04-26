import React from 'react';

const Info = (props) => {
    return (
        <div className='list-group-item'>
            <div className="row ">
                <div className="col-5 d-flex align-items-center">
                    <h6>{props.info.Key}</h6>
                </div>
                <div className="col-7 text-muted d-flex align-items-center">
                    <small>{props.info.Value}</small>
                </div>
            </div>
        </div>
    )
}
export default Info;
import React from 'react';
import './About.css'


const details = [
    { Key: "Name", Value: "Sajib Sutradhar" },
    { Key: "Father's Name", Value: "Satish Sutradhar" },
    { Key: "Mother's Name", Value: "Pushpa Sutradhar" },
    { Key: "Date of Birth", Value: "25 January 1999" },
    { Key: "Gender", Value: "Male" },
    { Key: "Religion", Value: "Hindu" },
    { Key: "Blood Group", Value: "B+" },
    { Key: "Nationality", Value: "Bangladeshi" }

];

const About = () => {
    return (
        <div id='about' className="container my-5 py-3">
            <h1 className="text-uppercase text-center py-3 text-muted font-weight-bold ">About</h1>
            <div className='card'>
                <div className="card-header">
                    <h4 className="text-uppercase text-muted text-center">PERSONAL DETAILS</h4>
                </div>
                <div className="card-body row">
                    <div className="col-md-6 py-3 d-flex align-items-center">
                        <h6 className='text-justify text-muted '>
                            Hello! I'm Sajib Sutradhar. I'm Front-end Developer and Search Engine Optimizer. I'm Studying Bachelor of Science (Engineering) in Computer Science and Engineering (CSE) at North East university Bangladesh...
                        </h6>
                    </div>
                    <div className="col-md-6 text-muted information py-3">

                        <ul className="list-group">
                            {
                                details.map(data => <Info info={data}> key={data.Key} </Info>)
                            }

                        </ul>


                    </div>
                </div>
            </div>
        </div>
    );
};



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

export default About;
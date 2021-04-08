import React from 'react';
import './Education.css';

const information = [
    {
        inst: 'NORTH EAST UNIVERSITY BANGLADESH',
        sub: 'BSc (Engg.) in Computer Science & Engineering',
        date: '2019 - Now',
        degree: "BSc"
    },
    {
        inst: 'MULLAPARA HAJI ABDU MIAH COLLEGE',
        sub: 'Higher Secondary Certificate (Science)',
        date: '2016 - 2017',
        degree: "HSC"

    },
    {
        inst: 'SHIKONDARPUR AL-HAJ ABDUL HAFIZ HIGH SCHOOL',
        sub: 'Secondary School Certificate (Science)',
        date: ' 2014 - 2015',
        degree: "SSC"

    }
];

const Education = () => {
    return (
        <section id="education" className='container my-5 py-3'>
            <div >
                <h1 className="text-uppercase text-center text-muted  py-3 font-weight-bold">Education</h1>
                <div id="study" >
                    {
                        information.map(data => <Study info={data} key={data.degree}> </Study>)
                    }
                </div>

            </div>
        </section>
    );
};


const Study = (props) => {
    return (
        <div>
            <div className="row my-3 shadow rounded">
                <div className="col-md-3 py-3 bg-info d-flex justify-content-center align-items-center ">
                    <div>
                    <h4 className="text-center text-white">{props.info.date}</h4>
                    <h4 className="text-white text-center ">{props.info.degree}</h4>
                    </div>
                   
                </div>
                <div className="col-md-9 py-5 d-flex justify-content-start align-items-center bg-white ">
                    <div className='text-muted'>
                        <h4>{props.info.sub}</h4>
                        <h6 className="font-italic py-2">{props.info.inst}</h6>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Education;
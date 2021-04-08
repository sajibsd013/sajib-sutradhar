/* eslint-disable jsx-a11y/anchor-is-valid */

import React, { useState } from 'react';
import './Currency.css'

const Currency = () => {

    const [from, setFrom] = useState('');
    const [to, setTo] = useState('');
    const [amount, setAmount] = useState(0);
    const apiKey = '5ca6fc9b78-8ce657c429-qqxdsp';

    const convert = () => {
        // const fetch = require('node-fetch');

        const url = `http://api.fastforex.io/convert?from=${from}&to=${to}&amount=${amount}&api_key=${apiKey}`;
        const options = {
            method: 'GET',
            headers: { Accept: 'application/json' }
        };


        fetch(url, options)
            .then(res => res.json())
            .then(json => console.log(json))
            .catch(err => console.log('error: ' + err))
    }


    return (
        <section id="Currency" className='container my-5 py-3 d-flex justify-content-center'>
            <form className='card shadow' >
                <div className="card-header">
                    <h1 className="text-uppercase text-center text-muted  py-3 font-weight-bold">Currency Converter</h1>
                </div>
                <div className="card-body">
                    <div className="my-3">
                        <h6 >Enter amount</h6>
                        <input className="form-control" onChange={(event) => { setAmount(Number(event.target.value)) }} type="text" name="" id="totalCreditRetake" />
                    </div>
                    <div className="my-3">
                        <h6 >From </h6>
                        <input className="form-control" onChange={(event) => { setFrom(event.target.value) }} type="text" name="" id="totalCreditRetake" />
                    </div>
                    <div className="my-3">
                        <h6 >To </h6>
                        <input className="form-control" onChange={(event) => { setTo(event.target.value) }} type="text" name="" id="totalCreditRetake" />
                    </div>
                    <div className="mt-4 d-flex justify-content-center">
                        <a onClick={convert} className=" mx-2 btn btn-primary text-white" style={{ width: '120px' }}>GET</a>
                        <input  className=" mx-2 btn btn-primary" style={{ width: '120px' }} type="reset" value="RESET" />
                    </div>

                </div>
            </form>
        </section>
    );
};

export default Currency;
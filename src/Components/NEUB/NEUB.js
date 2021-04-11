import React from 'react';
import { useState } from 'react';
import './NEUB.css';
import { Modal, ModalBody, ModalFooter, ModalHeader , Button} from 'reactstrap';


const NEUB = () => {
    const [department, setDepartment] = useState('default');
    const [total, setTotal] = useState('00');
    const [totalRegularCredit, setTotalRegularCredit] = useState(0);
    const [totalRegularWaiver, setTotalRegularWaiver] = useState(0);
    const [totalRetakeCredit, setTotalRetakeCredit] = useState(0);
    const [totalRetakeWaiver, setTotalRetakeWaiver] = useState(0);
    const [modalIsOpen, setModalIsOpen] = useState(false);


    const amount = () => {
        let perCredit, fixed, regularAmount, retakeAmount;

        switch (department) {
            case "CSE":
                perCredit = 1650;
                fixed = 3600;
                break;
            case "BBA":
                perCredit = 2150;
                fixed = 2600;
                break;
            case "English":
                perCredit = 1450;
                fixed = 2600;
                break;
            case "LLB":
                perCredit = 1500;
                fixed = 2600;
                break;
            case "BSS":
                perCredit = 1300;
                fixed = 2600;
                break;
            default:
                break;
        }

        if (totalRegularCredit !== 0 && totalRegularWaiver !== 0) {
            regularAmount = ((totalRegularCredit * ((perCredit * (100 - totalRegularWaiver)) / 100)) + fixed);
        }

        if (totalRetakeCredit !== 0) {
            retakeAmount = ((totalRetakeCredit * ((perCredit * (100 - totalRetakeWaiver)) / 100)));
        } else {
            retakeAmount = 0;
        }


        return (regularAmount + retakeAmount);

    }

    const setFunc = () => {
        setTotal(amount);
        setModalIsOpen(!modalIsOpen);
    }
    const restFunc = () => {
        setTotal('00');
        setDepartment('default');
        setTotalRegularCredit(0);
        setTotalRegularWaiver(0);
    }

    return (
        <div>
            <section id="NEUB" className='container my-5 py-3'>
                <div>
                    <h1 className="text-uppercase text-center text-muted  py-3 font-weight-bold">NEUB Fee Calculator</h1>
                    <div className='row justify-content-between'>
                        <div className="rounded col-md-4 bg-success shadow p-4 my-3 text-white d-flex justify-content-center align-items-center text-center">
                            <Modal isOpen={modalIsOpen} onClick={setFunc}>
                                <ModalHeader>
                                    <h4>Total Amount</h4>
                                </ModalHeader>
                                <ModalBody className="rounded bg-success shadow p-4 my-3 text-white d-flex justify-content-center align-items-center text-center">
                                    <h1 id="totalAmount" className="display-4" style={{ fontWeight: '400' }}>{total}</h1>
                                </ModalBody>
                                <ModalFooter>
                                    <Button >Close</Button>
                                </ModalFooter>
                            </Modal>
                            <div>
                                <h4>Total Amount</h4>
                                <h1 id="totalAmount" className="display-4" style={{ fontWeight: '400' }}>{total}</h1>
                            </div>
                        </div>
                        <div className="rounded col-md-7 shadow  p-4 my-3">
                            <form >
                                <div className="my-3">
                                    <select className="form-control" onChange={(event) => { setDepartment(event.target.value) }} style={{ fontWeight: '500' }} name="" id="department">
                                        <option value="default">Select Department</option>
                                        <option value="CSE">CSE</option>
                                        <option value="BBA">BBA</option>
                                        <option value="English">BA (English)</option>
                                        <option value="LLB">LLB</option>
                                        <option value="BSS">BSS (Sociology) </option>
                                    </select>
                                </div>
                                <div className="my-3">
                                    <h6>Total Credit (Regular)</h6>
                                    <input className="form-control" onChange={(event) => { setTotalRegularCredit(Number(event.target.value)) }} type="text" name="" />
                                </div>
                                <div className="my-3">
                                    <h6>Waiver (%)- (Regular)</h6>
                                    <input className="form-control" onChange={(event) => { setTotalRegularWaiver(Number(event.target.value)) }} type="text" name="" />
                                </div>


                                <div className="my-3">
                                    <h6>Total Credit (Retake)</h6>
                                    <input className="form-control" onChange={(event) => { setTotalRetakeCredit(Number(event.target.value)) }} type="text" name="" />
                                </div>

                                <div className="my-3">
                                    <h6>Waiver (%)- (Retake)</h6>
                                    <input className="form-control" onChange={(event) => { setTotalRetakeWaiver(Number(event.target.value)) }} type="text" name="" />
                                </div>

                                <div className="mt-4 d-flex justify-content-center">
                                    <a onClick={setFunc}  className=" mx-2 btn btn-primary text-white" style={{ width: '120px' }}>GET</a>
                                    <input id="reset" onClick={restFunc} className=" mx-2 btn btn-primary" style={{ width: '120px' }} type="reset" value="RESET" />
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default NEUB;
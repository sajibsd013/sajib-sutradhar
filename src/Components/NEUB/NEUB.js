
import React, { Component } from 'react';
import './NEUB.css';
import { Modal, ModalBody, ModalFooter, ModalHeader, Button, Form, FormGroup } from 'reactstrap';
import {connect} from 'react-redux';

const mapStateToProps = state => {
    return{
        NEUBData: state.NEUBData
    }
}

class NEUB extends Component {
    state = {
        NEUBData: this.props.NEUBData,
        department: 'default',
        regularCredit: null,
        regularWaiver: null,
        retakeCredit: null,
        retakeWaiver: null,
        total: 0,
        showModal: false
    }


    handleInputChange = event => {
        const name = event.target.name;
        const value = event.target.value;
        this.setState({
            [name]: value
        })
    }

    handleReset = () => {
        this.setState({
            department: 'default',
            regularCredit: null,
            regularWaiver: null,
            retakeCredit: null,
            retakeWaiver: null,
            total: 0,
        })

    }

    closeModal = () =>{
        this.setState({
            showModal: !this.state.showModal
        })
    }

    handleSubmit = (event) => {
        event.preventDefault();
        let info;
        if (this.state.department != 'default') {
            info = this.state.NEUBData.find(data => {
                return data.department === this.state.department;
            })
            let regularAmount = 0;
            let retakeAmount = 0;
    
            if (this.state.regularCredit != 0 && this.state.regularWaiver != 0) {
                regularAmount = ((this.state.regularCredit * ((info.perCredit * (100 - this.state.regularWaiver)) / 100)) + info.fixed);
            }
    
            if (this.state.retakeCredit != 0) {
                retakeAmount = ((this.state.retakeCredit * ((info.perCredit * (100 - this.state.retakeWaiver)) / 100)));
            }
    
            const total = regularAmount + retakeAmount;
            this.setState({
                total: total,
                showModal: !this.state.showModal
            })

        }

    }


    render() {
        return (
            <div>
                <section id="NEUB" className='container my-5 py-3'>
                    <Form onSubmit={event => this.handleSubmit(event)} onReset={this.handleReset}>
                        <h1 className="text-uppercase text-center text-muted  py-3 font-weight-bold">NEUB Fee Calculator</h1>
                        <div className='row justify-content-between'>
                            <div className="rounded col-md-4 bg-success shadow p-4 my-3 text-white d-flex justify-content-center align-items-center text-center">
                                <Modal isOpen={this.state.showModal}>
                                    <ModalHeader>
                                        <h4>Total Amount</h4>
                                    </ModalHeader>
                                    <ModalBody className="rounded bg-success shadow p-4 my-3 text-white d-flex justify-content-center align-items-center text-center">
                                        <h1 id="totalAmount" className="display-4" style={{ fontWeight: '400' }}>{this.state.total} </h1>
                                    </ModalBody>
                                    <ModalFooter>
                                        <Button onClick={this.closeModal}>Close</Button>
                                    </ModalFooter>
                                </Modal>
                                <div>
                                    <h4>Total Amount</h4>
                                    <h1 id="totalAmount" className="display-4" style={{ fontWeight: '400' }}>{this.state.total}</h1>
                                </div>
                            </div>
                            <div className="rounded col-md-7 shadow  p-4 my-3">
                                <div >
                                    <FormGroup className="my-3">
                                        <select
                                            className="form-control"
                                            style={{ fontWeight: '500' }}
                                            name="department"
                                            value={this.state.department}
                                            onChange={event => this.handleInputChange(event)}
                                        >
                                            <option value="default">Select Department</option>
                                            <option value="CSE">CSE</option>
                                            <option value="BBA">BBA</option>
                                            <option value="English">BA (English)</option>
                                            <option value="LLB">LLB</option>
                                            <option value="BSS">BSS (Sociology) </option>
                                        </select>
                                    </FormGroup>
                                    <FormGroup className="my-3">
                                        <h6>Total Credit (Regular)</h6>
                                        <input className="form-control" type="text" name="regularCredit" value={this.state.regularCredit} onChange={event => this.handleInputChange(event)} />
                                    </FormGroup>

                                    <FormGroup className="my-3">
                                        <h6>Waiver (%)- (Regular)</h6>
                                        <input className="form-control" type="text" name="regularWaiver" value={this.state.regularWaiver} onChange={event => this.handleInputChange(event)} />
                                    </FormGroup>

                                    <FormGroup className="my-3">
                                        <h6>Total Credit (Retake)</h6>
                                        <input className="form-control" type="text" name="retakeCredit" value={this.state.retakeCredit} onChange={event => this.handleInputChange(event)} />
                                    </FormGroup>

                                    <FormGroup className="my-3">
                                        <h6>Waiver (%)- (Retake)</h6>
                                        <input className="form-control" type="text" name="retakeWaiver" value={this.state.retakeWaiver} onChange={event => this.handleInputChange(event)} />
                                    </FormGroup>

                                    <FormGroup className="mt-4 d-flex justify-content-center">
                                        <input id="get" className=" mx-2 btn btn-primary" style={{ width: '120px' }} type="submit" value="GET" />
                                        <input id="reset" className=" mx-2 btn btn-primary" style={{ width: '120px' }} type="reset" value="RESET" />
                                    </FormGroup>
                                </div>
                            </div>
                        </div>
                    </Form>
                </section>
            </div>
        );
    };

}

export default connect(mapStateToProps)(NEUB);
import React from 'react';
import './Contact.css'
const Contact = () => {
    return (
        <div id='contact' className='container my-5 py-3'>
            <div className='text-center'>
                <h1 className="text-uppercase text-center py-3 text-muted font-weight-bold ">Contact</h1>
                <h6 className='text-muted text-center '>Contact Me to get any information</h6>
                <div className="row py-3">
                    <div className="col-md-7 p-5">
                        <div className=''>
                            <form action="">
                                <div className="input-group mb-3">
                                    <div className="input-group-prepend">
                                        <div className="input-group-text">
                                            <i className="fa fa-user-circle"></i>
                                        </div>
                                    </div>
                                    <input type="text" className="form-control" placeholder=' Full Name' aria-label="Text input with checkbox" />
                                </div>


                                <div className="input-group mb-3">
                                    <div className="input-group-prepend">
                                        <div className="input-group-text">
                                            <i className="fa fa-file-text "></i>
                                        </div>
                                    </div>
                                    <input className='form-control' placeholder='Subject' type="text" />
                                </div>


                                <div className="input-group mb-3">
                                    <div className="input-group-prepend">
                                        <div className="input-group-text">
                                            <i className="fa fa-envelope"></i>
                                        </div>
                                    </div>
                                    <input className='form-control' placeholder='E-mail' type="email" name="" id="" />
                                </div>



                                <p></p>
                                <p><textarea name="" id="" ></textarea></p>
                                <div>
                                    <input className='btn btn-primary mr-2' type="submit" value="SUBMIT" />
                                    <input className=' btn btn-primary ml-2' type="reset" value="RESET" />
                                </div>
                            </form>
                        </div>
                    </div>
                    <div className="col-md-5 pyp-5">
                        <div className='py-3'>
                            <h3><i className="fa fa-map-marker cl-atlantis fa-2x text-primary"></i> Address</h3>
                            <h6>Sylhet-3100, Bangladesh </h6>
                        </div>
                        <div className='py-3'>
                            <h3><i className="fa fa-phone cl-atlantis fa-2x text-primary"></i> Phone</h3>
                            <h6>+8801771-147384</h6>
                        </div>
                        <div className='py-3'>
                            <h3><i className="fa fa-envelope-o cl-atlantis fa-2x text-primary"></i> Email</h3>
                            <h6>sajibsutradhar@hotmail.com</h6>
                        </div>

                    </div>
                </div>
            </div>
        </div>
    );
};

export default Contact;
import React from 'react';
import './Skill.css'

const Skill = () => {
    return (
        <div id='skill' className="container my-5 py-3">
            <div >
                <h1 className="text-uppercase text-center py-3 text-muted font-weight-bold ">TECHNICAL Skill</h1>
                <div className="py-4 row">
                    <div className="col-md-6 py-3">
                        <div className="card">
                            <div className="card-header">
                                <h4 className="text-uppercase text-muted text-center">Programming</h4>
                            </div>
                            <div className="">
                                <ul className="list-group text-center">
                                    <li className="list-group-item ">C/C++</li>
                                    <li className="list-group-item ">Java</li>
                                    <li className="list-group-item ">JavaScript</li>
                                </ul>
                            </div>
                        </div>
                    </div>
                    <div className=" col-md-6 py-3">
                        <div className="card">
                            <div className="card-header">
                                <h4 className="text-uppercase text-muted text-center">Others</h4>
                            </div>
                            <div className="">
                                <ul className="list-group text-center">
                                    <li className="list-group-item ">MySQL</li>
                                    <li className="list-group-item ">MS Office</li>
                                    <li className="list-group-item">Photoshop</li>
                                </ul>
                            </div>

                        </div>
                    </div>
                </div>
                <div className='card'>
                    <div className="card-header">
                        <h4 className="text-uppercase text-muted text-center"> Web Technologies</h4>
                    </div>
                    <div className="row card-body">
                        <div className="col-md-6">
                            <div className="py-2">
                                <h5 className="text-uppercase text-muted">HTML5 </h5>
                                <div className="progress">
                                    <div className="progress-bar" role="progressbar" style={{ width: "90%" }} aria-valuenow="90" aria-valuemin="0" aria-valuemax="100">90%</div>
                                </div>
                            </div>
                            <div className="py-2">
                                <h5 className="text-uppercase text-muted">CSS3 </h5>
                                <div className="progress">
                                    <div className="progress-bar" role="progressbar" style={{ width: "75%" }} aria-valuenow="75" aria-valuemin="0" aria-valuemax="100">75%</div>
                                </div>
                            </div>
                            <div className="py-2">
                                <h5 className="text-uppercase text-muted">ES6  </h5>
                                <div className="progress">
                                    <div className="progress-bar" role="progressbar" style={{ width: "55%" }} aria-valuenow="55" aria-valuemin="0" aria-valuemax="100">55%</div>
                                </div>
                            </div>

                        </div>
                        <div className="col-md-6">
                            <div className="py-2">
                                <h5 className="text-uppercase text-muted">React JS </h5>
                                <div className="progress">
                                    <div className="progress-bar" role="progressbar" style={{ width: "45%" }} aria-valuenow="45" aria-valuemin="0" aria-valuemax="100">45%</div>
                                </div>
                            </div>
                            <div className="py-2">
                                <h5 className="text-uppercase text-muted">BOOTSTRAP </h5>
                                <div className="progress">
                                    <div className="progress-bar" role="progressbar" style={{ width: "85%" }} aria-valuenow="85" aria-valuemin="0" aria-valuemax="100">85%</div>
                                </div>
                            </div>
                            <div className="py-2">
                                <h5 className="text-uppercase text-muted">Wordpress </h5>
                                <div className="progress">
                                    <div className="progress-bar" role="progressbar" style={{ width: "55%" }} aria-valuenow="55" aria-valuemin="0" aria-valuemax="100">55%</div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Skill;
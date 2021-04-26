import React, { Component } from 'react';
import './About.css';
import { connect } from 'react-redux';
import Info from './Info';


const mapStateToProps = state => {
    return{
        AboutData: state.AboutData,
    }
}

class About extends Component {

    state= {
        details: this.props.AboutData.details,
        description: this.props.AboutData.description

    }

    render() {
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
                                {this.state.description}
                        </h6>
                        </div>
                        <div className="col-md-6 text-muted information py-3">

                            <ul className="list-group">
                                {
                                    this.state.details.map(data => <Info info={data}> key={data.Key} </Info>)
                                }
                            </ul>


                        </div>
                    </div>
                </div>
            </div>
        );
    }
}




export default  connect(mapStateToProps)(About);

import React from 'react';
import './Header.css';
import './bg.jpg';
import About from '../About/About';
import Education from '../Education/Education';
import Skill from '../Skill/Skill';
import Contact from '../Contact/Contact';

const Header = () => {
    return (
        <div>
            <header className="d-flex justify-content-center align-items-center container py-3">
                <section className="d-flex">
                    <div className="text-center">
                        <h2 className="text-dark text-uppercase">i'm SAJIB SUTRADHAR</h2>
                        <h4 className="text-muted text-uppercase">Front-end Developer, search engine optimizer</h4>

                        {/* <h6 className='text-muted pt-4 pb-4 x-5'>
                        I am Sajib Sutradhar and I am Studying Bachelor of Science (Engineering) in Computer Science and Engineering (CSE) at North East university Bangladesh
                    </h6> */}
                        <div className='row cv pt-5 '>
                            <div className="col d-flex justify-content-end">
                                <a className="btn btn-outline-primary text-uppercase font-weight-bold " href="#">Hire me &rarr; </a>
                            </div>
                            <div className="col d-flex justify-content-start">
                                <a className="btn btn-outline-primary text-uppercase font-weight-bold" href="#">Download CV</a>
                            </div>
                        </div>

                        <ul className="list-inline list-social-icons py-4 ">
                            <li className="list-inline-item"> <a href="https://www.facebook.com/sajibsd013" target='_blank'> <span className="fa-stack fa-lg"> <i className="fa fa-circle fa-stack-2x"></i> <i className="fa fa-facebook fa-stack-1x fa-inverse"></i> </span> </a> </li>
                            <li className="list-inline-item"> <a href="#" target='_blank'> <span className="fa-stack fa-lg"> <i className="fa fa-circle fa-stack-2x"></i> <i className="fa fa-twitter fa-stack-1x fa-inverse"></i> </span> </a> </li>
                            <li className="list-inline-item"> <a href="https://www.linkedin.com/in/sajib-sutradhar" target='_blank'> <span className="fa-stack fa-lg"> <i className="fa fa-circle fa-stack-2x"></i> <i className="fa fa-linkedin fa-stack-1x fa-inverse"></i> </span> </a> </li>
                            <li className="list-inline-item"> <a href="https://github.com/sajibsd013" target='_blank'> <span className="fa-stack fa-lg"> <i className="fa fa-circle fa-stack-2x"></i> <i className="fa fa-github fa-stack-1x fa-inverse"></i> </span> </a> </li>
                        </ul>
                    </div>
                </section >
            </header>
            <About></About>
            <Education></Education>
            <Skill></Skill>
            <Contact></Contact>

        </div>

    );
};

export default Header;
import React from 'react';
import Navbar from '../Navbar/Navbar';
import './Projects.css';
import project1 from '../../images/projects/creative-agency.png';
import project2 from '../../images/projects/doctors-portal.png';
import project3 from '../../images/projects/volunteer-network.png';
import project4 from '../../images/projects/travel-guru.png';
import project5 from '../../images/projects/e-school.png';
import project6 from '../../images/projects/hot-gadgets.png';

const Projects = () => {
    return (
        <div className="Projects pt-5">
            <Navbar/>
            <div className="container py-5">
                <div className="header text-center">
                    <h2>MY LATEST <span>PROJECTS</span></h2>
                    <p>An eye for detail makes my works excellent</p>
                    <div className="wrapper">
                        <div className="divider div-transparent div-dot"></div>
                    </div>
                </div>
                <div className="row">
                    <div className="col-md-4">
                        <div className="card mt-4">
                            <img className="card-img-top" src={project1} alt=""/>
                            <div className="card-body">
                                <h5 className="card-title">Creative Agency</h5>
                                <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                                <div className="technology mb-4"><span>React</span> <span>React Router</span> <span>Node.js</span> <span>Express.js</span> <span>MongoDB</span> <span>Bootstrap</span> <span>Firebase</span> <span>Heroku</span></div>
                                <a href="https://creative-agency-tp.web.app/" target="_blank" rel="noopener noreferrer" className="mr-3"><i className="fab fa-github"></i></a>
                                <a href="https://github.com/tayab-pabel/creative-agency-client" target="_blank" rel="noopener noreferrer"><i className="fas fa-external-link-alt"></i></a>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-4">
                        <div className="card mt-4">
                            <img className="card-img-top" src={project2} alt=""/>
                            <div className="card-body">
                                <h5 className="card-title">Doctor's Portal</h5>
                                <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                                <div className="technology mb-4"><span>React</span> <span>React Router</span> <span>Node.js</span> <span>Express.js</span> <span>MongoDB</span> <span>Bootstrap</span> <span>Firebase</span> <span>Heroku</span></div>
                                <a href="https://doctors-portal-tp.web.app/" target="_blank" rel="noopener noreferrer" className="mr-3"><i className="fab fa-github"></i></a>
                                <a href="https://github.com/tayab-pabel/doctors-portal-client" target="_blank" rel="noopener noreferrer"><i className="fas fa-external-link-alt"></i></a>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-4">
                        <div className="card mt-4">
                            <img className="card-img-top" src={project3} alt=""/>
                            <div className="card-body">
                                <h5 className="card-title">Volunteer Network</h5>
                                <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                                <div className="technology mb-4"><span>React</span> <span>React Router</span> <span>Node.js</span> <span>Express.js</span> <span>MongoDB</span> <span>Bootstrap</span> <span>Firebase</span> <span>Heroku</span></div>
                                <a href="https://volunteer-network-tp.web.app/" target="_blank" rel="noopener noreferrer" className="mr-3"><i className="fab fa-github"></i></a>
                                <a href="https://github.com/tayab-pabel/volunteer-network" target="_blank" rel="noopener noreferrer"><i className="fas fa-external-link-alt"></i></a>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="row">
                    <div className="col-md-4">
                        <div className="card mt-4">
                            <img className="card-img-top" src={project4} alt=""/>
                            <div className="card-body">
                                <h5 className="card-title">Travel Guru</h5>
                                <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                                <div className="technology mb-4"><span>React</span> <span>React Router</span> <span>Bootstrap</span><span>Firebase</span></div>
                                <a href="https://travel-guru-d04b3.web.app/" target="_blank" rel="noopener noreferrer" className="mr-3"><i className="fab fa-github"></i></a>
                                <a href="https://github.com/tayab-pabel/travel-guru" target="_blank" rel="noopener noreferrer"><i className="fas fa-external-link-alt"></i></a>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-4">
                        <div className="card mt-4">
                            <img className="card-img-top" src={project5} alt=""/>
                            <div className="card-body">
                                <h5 className="card-title">E-School</h5>
                                <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                                <div className="technology mb-4"><span>Bootstrap</span> <span>HTML</span> <span>CSS</span> <span>Figma</span> <span>GitHub</span></div>
                                <a href="https://tayab-pabel.github.io/e-school/" target="_blank" rel="noopener noreferrer" className="mr-3"><i className="fab fa-github"></i></a>
                                <a href="https://github.com/tayab-pabel/e-school" target="_blank" rel="noopener noreferrer"><i className="fas fa-external-link-alt"></i></a>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-4">
                        <div className="card mt-4">
                            <img className="card-img-top" src={project6} alt=""/>
                            <div className="card-body">
                                <h5 className="card-title">Hot Gadgets</h5>
                                <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                                <div className="technology mb-4"><span>Bootstrap</span> <span>HTML</span> <span>CSS</span> <span>Figma</span> <span>GitHub</span></div>
                                <a href="https://tayab-pabel.github.io/hot-gadgets/" target="_blank" rel="noopener noreferrer" className="mr-3"><i className="fab fa-github"></i></a>
                                <a href="https://github.com/tayab-pabel/hot-gadgets" target="_blank" rel="noopener noreferrer"><i className="fas fa-external-link-alt"></i></a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Projects;
import React from 'react';
import './UnderConstruction.css';
import profilePicture from '../../images/tayab-pabel.jpeg';
import construction from '../../images/construction.gif';

const UnderConstruction = () => {
    return (
        <div className="UnderConstruction text-center d-flex justify-content-center align-items-center pt-5">
            <div className="content mt-5">
                <img src={profilePicture} alt=""/>
                <h2 className="mt-4">&lt; Tayab_Pabel &gt;</h2>
                <h5>Front-End Web Developer</h5>
                {/* <div className="skills p-3 mt-4">
                    <p>HTML <span>&#9679;</span> CSS <span>&#9679;</span> SASS <span>&#9679;</span> Bootstrap <span>&#9679;</span> MaterialUI <span>&#9679;</span> JavaScript <span>&#9679;</span> ReactJS <span>&#9679;</span> ExpressJS <span>&#9679;</span> NodeJS <span>&#9679;</span> MongoDB</p>
                </div> */}
                <div className="social-links mt-3">
                    <a href="https://github.com/tayab-pabel"><i class="fab fa-github"></i></a>
                    <a href="https://www.linkedin.com/in/tayabpabel"><i class="fab fa-linkedin-in"></i></a>
                    <a href="https://www.facebook.com/Tayab.Pabel5/"><i class="fab fa-facebook-f"></i></a>
                    <a href="https://twitter.com/tayabpabel"><i class="fab fa-twitter"></i></a>
                </div>
                <div className="construction my-5">
                    <div className="d-flex justify-content-center align-items-center">
                        <div className="mx-2 pt-2">
                            <h2>Under Construction</h2>
                        </div>
                        <div>
                            <img src={construction} alt=""/>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default UnderConstruction;
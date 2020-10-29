import React from 'react';
import './WorkingProcess.css';

const WorkingProcess = () => {
    return (
        <div className="WorkingProcess container text-center pb-5">
            <h2 className="pb-5 work">My Working Process</h2>
            <div className="row pb-5 mb-5">
                <div className="col-lg-3 col-6">
                    <div className="single-card p-5 m-1">
                        <i class="fas fa-crop-alt"></i>
                        <h4 className="mt-4">Design</h4>
                    </div>
                </div>
                <div className="col-lg-3 col-6">
                    <div className="single-card p-5 m-1">
                        <i class="fas fa-code"></i>
                        <h4 className="mt-4">Development</h4>
                    </div>
                </div>
                <div className="col-lg-3 col-6">
                    <div className="single-card p-5 m-1">
                        <i class="fas fa-cogs"></i>
                        <h4 className="mt-4">Testing</h4>
                    </div>
                </div>
                <div className="col-lg-3 col-6">
                    <div className="single-card p-5 m-1">
                        <i class="fas fa-rocket"></i>
                        <h4 className="mt-4">Launch</h4>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default WorkingProcess;
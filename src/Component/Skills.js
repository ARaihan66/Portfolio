import React from "react";
import ProgressBar from 'react-animated-progress-bar';

const Skills = () => {
    return (
        <div>
            <h2 style={{ marginTop: '10px', textAlign: 'center' }}>Skills</h2>
            <div className="container">
                <div className="row">
                    <div className="col-lg-6">
                        <p>HTML</p>
                        <ProgressBar
                            width="400px"
                            height="10px"
                            rect
                            fontColor="gray"
                            percentage="50"
                            rectPadding="1px"
                            rectBorderRadius="20px"
                            trackPathColor="transparent"
                            bgColor="#333333"
                            trackBorderColor="grey"
                        />
                        <p>CSS</p>
                        <ProgressBar
                            width="400px"
                            height="10px"
                            rect
                            fontColor="gray"
                            percentage="60"
                            rectPadding="1px"
                            rectBorderRadius="20px"
                            trackPathColor="transparent"
                            bgColor="#333333"
                            trackBorderColor="grey"
                        />
                        <p>Bootstrap</p>
                        <ProgressBar
                            width="400px"
                            height="10px"
                            rect
                            fontColor="gray"
                            percentage="80"
                            rectPadding="1px"
                            rectBorderRadius="20px"
                            trackPathColor="transparent"
                            bgColor="#333333"
                            trackBorderColor="grey"
                        />
                        <p>TypeScript</p>
                        <ProgressBar
                            width="400px"
                            height="10px"
                            rect
                            fontColor="gray"
                            percentage="40"
                            rectPadding="1px"
                            rectBorderRadius="20px"
                            trackPathColor="transparent"
                            bgColor="#333333"
                            trackBorderColor="grey"
                        />
                    </div>
                    <div className="col-lg-6">
                        <p>React</p>
                        <ProgressBar
                            width="400px"
                            height="10px"
                            rect
                            fontColor="gray"
                            percentage="50"
                            rectPadding="1px"
                            rectBorderRadius="20px"
                            trackPathColor="transparent"
                            bgColor="#333333"
                            trackBorderColor="grey"
                        />
                        <p>Node</p>
                        <ProgressBar
                            width="400px"
                            height="10px"
                            rect
                            fontColor="gray"
                            percentage="60"
                            rectPadding="1px"
                            rectBorderRadius="20px"
                            trackPathColor="transparent"
                            bgColor="#333333"
                            trackBorderColor="grey"
                        />
                        <p>Express</p>
                        <ProgressBar
                            width="400px"
                            height="10px"
                            rect
                            fontColor="gray"
                            percentage="50"
                            rectPadding="1px"
                            rectBorderRadius="20px"
                            trackPathColor="transparent"
                            bgColor="#333333"
                            trackBorderColor="grey"
                        />
                        <p>MongoDB</p>
                        <ProgressBar
                            width="400px"
                            height="10px"
                            rect
                            fontColor="gray"
                            percentage="65"
                            rectPadding="1px"
                            rectBorderRadius="20px"
                            trackPathColor="transparent"
                            bgColor="#333333"
                            trackBorderColor="grey"
                        />
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Skills;
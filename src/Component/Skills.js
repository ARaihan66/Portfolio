import React from "react";
import ProgressBar from 'react-animated-progress-bar';
import mySelf from "../Assets/data";

const Skills = () => {
    return (
        <div style={{ height: '570px' }}>
            <section id="skills">
                <h2 style={{ marginTop: '20px', textAlign: 'center' }}>SKILLS</h2>
                <div className="container">
                    <div className="row">
                        <div className="col-lg-6">
                            <p>{mySelf.skill[0]}</p>
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
                            <p>{mySelf.skill[1]}</p>
                            <ProgressBar
                                width="400px"
                                height="10px"
                                rect
                                fontColor="gray"
                                percentage="55"
                                rectPadding="1px"
                                rectBorderRadius="20px"
                                trackPathColor="transparent"
                                bgColor="#333333"
                                trackBorderColor="grey"
                            />
                            <p>{mySelf.skill[2]}</p>
                            <ProgressBar
                                width="400px"
                                height="10px"
                                rect
                                fontColor="gray"
                                percentage="55"
                                rectPadding="1px"
                                rectBorderRadius="20px"
                                trackPathColor="transparent"
                                bgColor="#333333"
                                trackBorderColor="grey"
                            />
                            <p>{mySelf.skill[3]}</p>
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
                            <p>{mySelf.skill[4]}</p>
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
                            <p>{mySelf.skill[5]}</p>
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
                            <p>{mySelf.skill[6]}</p>
                            <ProgressBar
                                width="400px"
                                height="10px"
                                rect
                                fontColor="gray"
                                percentage="55"
                                rectPadding="1px"
                                rectBorderRadius="20px"
                                trackPathColor="transparent"
                                bgColor="#333333"
                                trackBorderColor="grey"
                            />
                            <p>{mySelf.skill[7]}</p>
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
                            <p>{mySelf.skill[8]}</p>
                            <ProgressBar
                                width="400px"
                                height="10px"
                                rect
                                fontColor="gray"
                                percentage="45"
                                rectPadding="1px"
                                rectBorderRadius="20px"
                                trackPathColor="transparent"
                                bgColor="#333333"
                                trackBorderColor="grey"
                            />
                            <p>{mySelf.skill[9]}</p>
                            <ProgressBar
                                width="400px"
                                height="10px"
                                rect
                                fontColor="gray"
                                percentage="45"
                                rectPadding="1px"
                                rectBorderRadius="20px"
                                trackPathColor="transparent"
                                bgColor="#333333"
                                trackBorderColor="grey"
                            />
                        </div>
                    </div>
                </div>
            </section>

        </div>

    );
}

export default Skills;

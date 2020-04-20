import React, { Component } from 'react'
import { Row, Col } from 'reactstrap'
const profile = '/img/profile.jpg';

export class Resume extends Component {
    render() {
        return (
            <div>
                <Row>
                    <Col xs={12} md={12} className="text-center">
                        <img alt="profile" className="profile" src={profile} />
                    </Col>
                </Row>
                <Row>
                    <Col xs={12} md={12} className="text-center">
                        <h2>PATCHANIDA KITTIPONGPATTANA</h2>
                        <h2>FRONT-END DEVELOPER</h2>
                    </Col>
                </Row>
                <Row>
                    <Col xs={12} md={6}>
                        <TopicAndDescription
                            icon="fas fa-keyboard"
                            topic1="CAREER SUMMARY"
                            description="I am a front-end developer. I use reactjs is core framework with redux and call API for fetch data from database. The websites I make sometimes have UX/UI designs. I've done many things like landing page, responsive web, onboard,
                                line frontend framework and Business Intelligence."
                        />
                        <TopicAndDescription
                            icon="fas fa-address-card"
                            topic1="SKILLS"
                        >
                            <ul className="square">
                                <li className="text-description">Coding: Reactjs, Redux, Reactstrap, Bootstrap, Javascript, Angular, React-Native, Git, PHP, MySQL, SQL Server, Robot Framework</li>
                                <li className="text-description">Design: Adobe Photoshop, Adobe ILLustrator, Adobe Premiere Pro</li>
                            </ul>
                        </TopicAndDescription>
                        <TopicAndDescription
                            icon="fas fa-university"
                            topic1="EDUCATION"
                            description="Burapha University | Faculty of Information Technology | GPA 3.45"
                        />
                    </Col>
                    <Col xs={12} md={6}>
                        <TopicAndDescription
                            icon="fas fa-pencil-alt"
                            topic1="WORK EXPERIENCE"
                            topic2="FRONT-END DEVELOPER"
                            topic3="G.E.P.P. Sa-Ard | May 2019 - present"
                        >
                            <ul className="square">
                                <li className="text-description">Design and build websites for GEPP To meet the needs of the company to work.</li>
                                <li className="text-description">Working closely with everyone in the organization.</li>
                            </ul>
                        </TopicAndDescription>
                        <TopicAndDescription
                            topic2="FRONT-END DEVELOPER"
                            topic3="Cashnow | Feb 2018 - Mar 2019"
                        >
                            <ul className="square">
                                <li className="text-description">Build landing page, onboard for Cashnow.</li>
                                <li className="text-description">Use google analytics for website.</li>
                                <li className="text-description">Build Line Front end Framework (LIFF) for TQM.</li>
                                <li className="text-description">Maintenance React-Native and Angular Project For SCB (Youtellus).</li>
                            </ul>
                        </TopicAndDescription>
                        <TopicAndDescription
                            topic2="DEVELOPER"
                            topic3="MFEC | Jan 2017 - Jan 2018"
                        >
                            <ul className="square">
                                <li className="text-description">I work business intelligence . I use web intelligence and Power BI program to create a dashboard.</li>
                                <li className="text-description">Analyst big data.</li>
                                <li className="text-description">Migration data.</li>
                            </ul>
                        </TopicAndDescription>
                    </Col>
                </Row>
            </div>
        )
    }
}

export default Resume

class TopicAndDescription extends React.Component {
    render() {
        return (
            <Row style={{ margin: '10px 0px' }}>
                <Col xs={12}>
                    {!!this.props.topic1 &&
                        <h2 className="primary-color">{!!this.props.icon && <i className={this.props.icon}></i>} {this.props.topic1}</h2>
                    }
                    {
                        !!this.props.topic2 &&
                        <h3>{this.props.topic2}</h3>
                    }
                    {
                        !!this.props.topic3 &&
                        <h4>{this.props.topic3}</h4>
                    }
                    <p className="text-description">{this.props.description}</p>
                    {this.props.children}
                </Col>
            </Row>
        );
    }
}

import React from 'react';
import { Card, CardBody, CardTitle, Row, Col } from 'reactstrap';
import { Link } from 'react-router-dom';

const HomeElements = ({ item }) => {
    if (!item) {
        return <div>No data available</div>;
    }

    const buttonStyle = {
        width: '140px', // Ajusta este valor según sea necesario
        height: '20px', // Ajusta este valor según sea necesario
        textAlign: 'center',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center'
    };

    return (
        <React.Fragment>
            <Card className="overflow-hidden" style={{ maxWidth: '100%', maxHeight: '130vh' }}>
                <div style={{ backgroundColor: 'white' }}>
                    <Row>
                        <Col xs="12">
                            <div className="text-primary p-3">
                                <CardTitle className="mb-0" style={{ fontSize: '0.9rem' }}>Home</CardTitle>
                            </div>
                        </Col>
                    </Row>
                </div>
                <CardBody className="pt-0">
                    <Row>
                        <Col sm="12">
                            <div style={{ position: 'relative', width: '100%', height: 'calc(100vh - 50px)', overflow: 'hidden', marginLeft: '43px' }}>
                                <iframe
                                    src="https://docs.google.com/spreadsheets/d/1adAuB3RqxekvZphqqHspS0aHvKCffFSAQCm-h9wCgUs/preview?gid=34232284#gid=34232284"
                                    style={{ width: '100%', height: '100vh', border: 'none', overflow: 'hidden' }}
                                    scrolling="no"
                                ></iframe>
                                <div style={{ position: 'absolute', top: 0, left: 0, right: 0, height: '15px', backgroundColor: 'white' }}></div>
                                <div style={{ position: 'absolute', bottom: 0, left: 0, right: 0, height: '0px', backgroundColor: 'white' }}></div>
                                <div style={{ position: 'absolute', top: 0, left: 0, bottom: 0, width: '0px', backgroundColor: 'white' }}></div>
                                <div style={{ position: 'absolute', top: 0, right: 0, bottom: 0, width: '0px', backgroundColor: 'white' }}></div>
                                
                                <div style={{ position: 'absolute', top: '50px', left: '29%', transform: 'translate(-40%, -40%)' }}>
                                    <Link to="/company-profile" className="btn btn-primary btn-sm" style={buttonStyle}>
                                        Company Profile <i className=""></i>
                                    </Link>
                                </div>                        
                                <div style={{ position: 'absolute', top: '77px', left: '29%', transform: 'translate(-40%, -40%)' }}>
                                    <Link to="/business-ideas" className="btn btn-primary btn-sm" style={buttonStyle}>
                                        Business Ideas <i className=""></i>
                                    </Link>
                                </div>
                                <div style={{ position: 'absolute', top: '140px', left: '29%', transform: 'translate(-40%, -40%)' }}>
                                    <Link to="/develop-company-dna" className="btn btn-primary btn-sm" style={buttonStyle}>
                                        Company DNA <i className=""></i>
                                    </Link>
                                </div>
                                <div style={{ position: 'absolute', top: '166px', left: '29%', transform: 'translate(-40%, -40%)' }}>
                                    <Link to="/industry-analysis" className="btn btn-primary btn-sm" style={buttonStyle}>
                                        Business Landscape <i className=""></i>
                                    </Link>
                                </div>
                                <div style={{ position: 'absolute', top: '229px', left: '29%', transform: 'translate(-40%, -40%)' }}>
                                    <Link to="/business-strategy" className="btn btn-primary btn-sm" style={buttonStyle}>
                                        Strategic Intentions <i className=""></i>
                                    </Link>
                                </div>
                                <div style={{ position: 'absolute', top: '255px', left: '29%', transform: 'translate(-40%, -40%)' }}>
                                    <Link to="/business-model-canvas" className="btn btn-primary btn-sm" style={buttonStyle}>
                                        Business Model <i className=""></i>
                                    </Link>
                                </div>
                                <div style={{ position: 'absolute', top: '319px', left: '29%', transform: 'translate(-40%, -40%)' }}>
                                    <Link to="/summary" className="btn btn-primary btn-sm" style={buttonStyle}>
                                        Summary Plan <i className=""></i>
                                    </Link>
                                </div>
                                <div style={{ position: 'absolute', top: '344px', left: '29%', transform: 'translate(-40%, -40%)' }}>
                                    <Link to="/kris" className="btn btn-primary btn-sm" style={buttonStyle}>
                                        KRIs <i className=""></i>
                                    </Link>
                                </div>
                                <div style={{ position: 'absolute', top: '369px', left: '29%', transform: 'translate(-40%, -40%)' }}>
                                    <Link to="/cash-flow" className="btn btn-primary btn-sm" style={buttonStyle}>
                                        Cashflow Analysis <i className=""></i>
                                    </Link>
                                </div>
                                <div style={{ position: 'absolute', top: '432px', left: '29%', transform: 'translate(-40%, -40%)' }}>
                                    <Link to="/business-plan" className="btn btn-primary btn-sm" style={buttonStyle}>
                                        Business Plan <i className=""></i>
                                    </Link>
                                </div>
                                <div style={{ position: 'absolute', top: '458px', left: '29%', transform: 'translate(-40%, -40%)' }}>
                                    <Link to="/investor-pack" className="btn btn-primary btn-sm" style={buttonStyle}>
                                        Investor Pack <i className=""></i>
                                    </Link>
                                </div>
                            </div>
                        </Col>
                    </Row>
                </CardBody>
            </Card>
        </React.Fragment>
    );
}

export default HomeElements;

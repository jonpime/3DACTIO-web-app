import React from 'react';
import { Card, CardBody, CardTitle, Row, Col } from 'reactstrap';

const StrategyElements = ({ item }) => {
    if (!item) {
        return <div>No data available</div>;
    }

    return (
        <React.Fragment>
            <Card className="overflow-hidden" style={{ maxWidth: '100%', maxHeight: '50vh' }}>
                <div style={{ backgroundColor: 'white' }}>
                    <Row>
                        <Col xs="12">
                            <div className="text-primary p-3">
                                <CardTitle className="mb-0" style={{ fontSize: '0.9rem' }}>Strategy Elements</CardTitle>
                            </div>
                        </Col>
                    </Row>
                </div>
                <CardBody className="pt-0">
                    <Row>
                        <Col sm="12">
                            <div style={{ position: 'relative', width: '100%', height: 'calc(60vh - 50px)', overflow: 'hidden',  marginLeft: '43px' }}>
                                <iframe
                                    src="https://docs.google.com/spreadsheets/d/1adAuB3RqxekvZphqqHspS0aHvKCffFSAQCm-h9wCgUs/preview?gid=1144520934#gid=1144520934"
                                    style={{ width: '100%', height: '100%', border: 'none' }}
                                ></iframe>
                                <div style={{ position: 'absolute', top: 0, left: 0, right: 0, height: '0px', backgroundColor: 'white' }}></div>
                                <div style={{ position: 'absolute', bottom: 0, left: 0, right: 0, height: '0px', backgroundColor: 'white' }}></div>
                                <div style={{ position: 'absolute', top: 0, left: 0, bottom: 0, width: '0px', backgroundColor: 'white' }}></div>
                                <div style={{ position: 'absolute', top: 0, right: 0, bottom: 0, width: '0px', backgroundColor: 'white' }}></div>
                            </div>
                        </Col>
                    </Row>
                </CardBody>
            </Card>
        </React.Fragment>
    );
}

export default StrategyElements;




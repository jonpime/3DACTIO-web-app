import React from 'react';
import { Card, CardBody, CardTitle, Row, Col } from 'reactstrap';

const FillingPercentage = ({ item }) => {
    if (!item) {
        return <div>No data available</div>;
    }

    return (
        <React.Fragment>
            <Card className="overflow-hidden">
                <div style={{ backgroundColor: 'white' }}>
                    <Row>
                        <Col xs="12">
                            <div className="text-primary p-3">
                                <CardTitle className="mb-0" style={{ fontSize: '0.9rem' }}>Completion Status (%): Business Tool</CardTitle>
                            </div>
                        </Col>
                    </Row>
                </div>
                <CardBody className="pt-0">
                    <Row>
                        <Col sm="12">
                            <div style={{ position: 'relative', width: '100%', height: 'calc(70vh - 50px)', overflow: 'hidden', marginTop: '-5px' }}> {/* Ajusta el margen superior */}
                                <iframe
                                    src="https://docs.google.com/spreadsheets/d/1adAuB3RqxekvZphqqHspS0aHvKCffFSAQCm-h9wCgUs/preview?gid=1644427166#gid=1644427166"
                                    style={{ width: '100%', height: '100%', border: 'none' }}
                                ></iframe>
                                <div style={{ position: 'absolute', top: 0, left: 0, right: 0, height: 'px', backgroundColor: 'white' }}></div>
                                <div style={{ position: 'absolute', bottom: 0, left: 0, right: 0, height: '38px', backgroundColor: 'white' }}></div>
                                <div style={{ position: 'absolute', top: 0, left: 0, bottom: 0, width: '0px', backgroundColor: 'white' }}></div>
                                <div style={{ position: 'absolute', top: 0, right: 0, bottom: 0, width: '15px', backgroundColor: 'white' }}></div>
                            </div>
                        </Col>
                    </Row>
                </CardBody>
            </Card>
        </React.Fragment>
    );
}

export default FillingPercentage;




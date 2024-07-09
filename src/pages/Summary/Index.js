import React, { useEffect } from 'react';
import { Container } from 'react-bootstrap';

const Summary = () => {
    document.title = "Summary | 3D ACTIO";

    useEffect(() => {
        document.body.style.overflow = 'hidden'; // Desactiva el scroll en la página

        return () => {
            document.body.style.overflow = 'auto'; // Reactiva el scroll cuando el componente se desmonte
        };
    }, []);

    return (
        <div className="page-content" style={{ paddingTop: '25px' }}>
            <Container fluid>
                {/* Aquí puedes agregar tu breadcrumb si es necesario */}
                <div style={{ position: 'relative', width: '100%', height: 'calc(155vh - 50px)', overflow: 'hidden' }}>
                    <iframe
                        src="https://docs.google.com/spreadsheets/d/1adAuB3RqxekvZphqqHspS0aHvKCffFSAQCm-h9wCgUs/edit?usp=sharing/pubhtml?gid=822064063&amp;single=true&amp;widget=true&amp;headers=false&gid=1984431345"
                        style={{ width: '100%', height: '100%', border: 'none', marginTop: '-125px' }}
                    ></iframe>
                    <div style={{ position: 'absolute', top: 0, left: 0, right: 0, height: '0px', backgroundColor: 'white' }}></div>
                    <div style={{ position: 'absolute', top: 0, left: 0, bottom: 0, width: '46px', backgroundColor: 'white' }}></div>
                </div>
            </Container>
        </div>
    );
}

export default Summary;
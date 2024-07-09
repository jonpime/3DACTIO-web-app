import React, { useEffect } from 'react';
import { Container } from 'react-bootstrap';

const DevelopCompanyDNA = () => {
    document.title = "Develop Company DNA | 3D ACTIO";

    useEffect(() => {
        document.body.style.overflow = 'hidden'; // Desactiva el scroll en la página

        return () => {
            document.body.style.overflow = 'auto'; // Reactiva el scroll cuando el componente se desmonte
        };
    }, []);

    return (
        <div className="page-content" style={{ paddingTop: '-10px' }}>
            <Container fluid>
                {/* Aquí puedes agregar tu breadcrumb si es necesario */}
                <div style={{ position: 'relative', width: '100%', height: 'calc(127vh - 50px)', overflow: 'hidden' }}>
                    <iframe
                        src="https://docs.google.com/spreadsheets/d/1adAuB3RqxekvZphqqHspS0aHvKCffFSAQCm-h9wCgUs/edit?usp=sharing/pubhtml?gid=822064063&amp;single=true&amp;widget=true&amp;headers=false&gid=822064063"
                        style={{ width: '100%', height: '100%', border: 'none', marginTop: '-135px' }}
                    ></iframe>
                    <div style={{ position: 'absolute', top: 0, left: 0, right: 0, height: '35px', backgroundColor: 'white' }}></div>
                    <div style={{ position: 'absolute', top: 0, left: 0, bottom: 0, width: '46px', backgroundColor: 'white' }}></div>
                </div>
            </Container>
        </div>
    );
}

export default DevelopCompanyDNA;

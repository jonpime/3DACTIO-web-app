import React, { useEffect } from 'react';
import { Container } from 'react-bootstrap';

const CompanyProfile = () => {
    document.title = "Company Profile | 3D ACTIO";

    useEffect(() => {
        document.body.style.overflow = 'hidden'; // Desactiva el scroll en la página

        return () => {
            document.body.style.overflow = 'auto'; // Reactiva el scroll cuando el componente se desmonte
        };
    }, []);

    return (
        <div className="page-content" style={{ paddingTop: '45px' }}>
            <Container fluid>
                {/* Aquí puedes agregar tu breadcrumb si es necesario */}
                <div style={{ position: 'relative', width: '100%', height: 'calc(118vh - 50px)', overflow: 'hidden'  }}>
                    <iframe
                        src="https://docs.google.com/spreadsheets/d/1adAuB3RqxekvZphqqHspS0aHvKCffFSAQCm-h9wCgUs/edit?rm=minimal&gid=346611803"
                        style={{ width: '100%', height: '100%', border: 'none' }}
                    ></iframe>
                    <div style={{ position: 'absolute', top: 0, left: 0, right: 0, height: '25px', backgroundColor: 'white' }}></div>
                    <div style={{ position: 'absolute', top: '25px', left: 0, bottom: 0, width: '50px', backgroundColor: 'white' }}></div>
                </div> 
            </Container>
        </div>
    )
}

export default CompanyProfile;

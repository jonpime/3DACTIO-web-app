import React, { useEffect } from 'react';
import { Container } from 'react-bootstrap';
import jsPDF from 'jspdf';

const CompanyDNA = () => {
    document.title = "Company DNA | 3D ACTIO";

    useEffect(() => {
        document.body.style.overflow = 'hidden'; // Desactiva el scroll en la página

        return () => {
            document.body.style.overflow = 'auto'; // Reactiva el scroll cuando el componente se desmonte
        };
    }, []);

    // Función para generar el PDF
    const generatePDF = () => {
        const pdf = new jsPDF('portrait', 'px', 'a4'); // Crea un PDF en formato A4

        // Aquí puedes personalizar el contenido del PDF
        pdf.text("PDF Content", 10, 20);

        // Descargar el PDF
        pdf.save('CompanyDNA.pdf');
    };

    return (
        <div className="page-content" style={{ paddingTop: '-10px' }}>
            <Container fluid>
                {/* Aquí puedes agregar tu breadcrumb si es necesario */}
                <div style={{ position: 'relative', width: '100%', height: 'calc(133vh - 50px)', overflow: 'hidden' }}>
                    <iframe
                        src="https://docs.google.com/spreadsheets/d/1adAuB3RqxekvZphqqHspS0aHvKCffFSAQCm-h9wCgUs/edit?usp=sharing/pubhtml?gid=822064063&amp;single=true&amp;widget=true&amp;headers=false&gid=545534297"
                        style={{ width: '100%', height: '100%', border: 'none', marginTop: '-135px' }}
                    ></iframe>
                    
                    {/* Botón para generar PDF */}
                    <button
                        onClick={generatePDF}
                        style={{
                            position: 'absolute',
                            top: '3px',
                            right: '30px',
                            padding: '5px 10px',
                            backgroundColor: '#777777',
                            color: 'white',
                            border: 'none',
                            borderRadius: '5px',
                            cursor: 'pointer',
                            zIndex: 1000 // Asegura que el botón esté encima del iframe
                        }}
                    >
                        Generate PDF
                    </button>
                    
                    <div style={{ position: 'absolute', top: 0, left: 0, right: 0, height: '35px', backgroundColor: 'white' }}></div>
                    <div style={{ position: 'absolute', top: 0, left: 0, bottom: 0, width: '50px', backgroundColor: 'white' }}></div>
                </div>
            </Container>
        </div>
    );
}

export default CompanyDNA;

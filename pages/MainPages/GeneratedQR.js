import React, { useState } from 'react';
import QRCode from 'qrcode.react';
import Grid from "@mui/material/Grid";
import Card from '@mui/material/Card';
import Typography from '@mui/material/Typography';
import IconButton from '@mui/material/IconButton';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';

function GeneratedQR() {

    const [inputText, setInputText] = useState('');
    const [qrCodeText, setQRCodeText] = useState('');

    // generate QR code
    // const generateQRCode = () => {
    //   setQRCodeText(inputText);
    // }

    // download QR code
    const downloadQRCode = () => {
        const qrCodeURL = document.getElementById('qrCodeEl')
            .toDataURL("image/png")
            .replace("image/png", "image/octet-stream");
        console.log(qrCodeURL)
        let aEl = document.createElement("a");
        aEl.href = qrCodeURL;
        aEl.download = "QR_Code.png";
        document.body.appendChild(aEl);
        aEl.click();
        document.body.removeChild(aEl);
    }

    return (
        <div className="createInfo" style={{ marginTop: '30px' }}>
            <Grid>
                <Card style={{ maxWidth: 550, padding: "20px 10px", margin: "0 auto", backgroundColor: "unset" }}>
                    <IconButton>
                        <ArrowBackIcon />
                    </IconButton>
                    <Grid align="center">
                        <Grid>
                            <Typography gutterBottom variant="h4" align="center">Generated QR Code</Typography>
                            <br></br>
                            <QRCode
                                id="qrCodeEl"
                                size={150}
                                value={"Cattle ID: 36, Breed: Heredford, Antibiotic Type: penicillin, Weight: 400 lbs, DNA: Heredford, Eartag Code: 12233, Farmer: Bob Ross, Gender: Male, Location: Spanish Lookout, Rearing Type: Free Roaming, Reproduction Status: None, Underlying Health Issues: None, Factory Destination: San Ignacio, Factory Name: Running W, Slaughter Date: February 28, 2022, Slaughter Method: Stunning, Batch Number: 123, Cost Per Unit: 12.31, Package Date: March 1, 2022, Expiry Date: April 30, 2022, Factory Destination: Spanish Lookout, Factory Name: Running W, Meat Product Type: Ribs, Product Description: 10% lean, Product Weight: 12 lbs"}
                            />
                            <br />
                            <br></br>
                            <input
                                type="button"
                                className="download-btn"
                                value="Download"
                                onClick={downloadQRCode}
                                style={{backgroundColor: '#3F51B5', color: '#FFFFFF', margin: '15px 0', padding: '6px 16px', 
                                fontSize: '0.875rem', borderRadius: '4px', border: 'none', textTransform: 'uppercase', 
                                height: '30px', width: '30%', position: 'relative', textAlign: 'center'}}
                            />
                        </Grid>
                    </Grid>
                </Card>
            </Grid>
        </div>
    );
}

export default GeneratedQR;
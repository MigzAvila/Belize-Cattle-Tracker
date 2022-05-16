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
                                value={"qrCodeText"}
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
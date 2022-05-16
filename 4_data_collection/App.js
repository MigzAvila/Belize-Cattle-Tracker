import React from 'react'
import QRCode from 'qrcode';
import { useEffect, useState } from 'react';

const App = ({ text }) => {
  const [src, setSrc] = useState('');

  useEffect(() => {
    QRCode.toDataURL(text).then((data) => {
      setSrc(data);
    });

  }, [])
    return (
    <div>
      <img src={src} style={{position: 'absolute; left: 1053px; top: 450px;', width:'10%', height:'20%'} }/>
    </div>
  )
}

export default App
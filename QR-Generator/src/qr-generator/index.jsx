import React, { useState } from 'react';
import { QRCode } from "react-qr-code";


export default function QRGenerator()  {

    const[qrCodeValue, setQrCodeValue] = useState('');
    const[inputValue, setInputValue] = useState('');

    function handleGenerateQrCode() {
        setQrCodeValue(inputValue);
    }

  return (
    <div>
      {/*  */}
      <h1>QR Code Generator</h1>
      <div>
        <input onChange={(e) => setInputValue(e.target.value)} type="text" name="qr-code" placeholder="Enter your name sir!"/>
        <button
        disabled={inputValue.trim() === ""}
        onClick={handleGenerateQrCode} >Generate</button>
      </div>
      <div>
        <QRCode 
        id="qr-code-value"
        value={qrCodeValue}
        size={450}
        bgColor={"white"}
        />
      </div>
    </div>
  );
}
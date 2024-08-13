"use strict";

// <!-- YAA KALO EMG GABISA DICOPAS, TAPI BISA KO COPAS LEWAT INSPECT ELEMENT
//   CUMA SEKEDAR WEBSITE BIASA KO, YG UDAH PRO JANGAN NGEJEK NGE-BULLY LAH YAWW WKWKWK -->

// Mencegah klik kanan pada seluruh halaman
document.addEventListener('contextmenu', function (e) {
    e.preventDefault();
});

// Mencegah pemilihan teks pada seluruh halaman
document.addEventListener('selectstart', function (e) {
    e.preventDefault();
});

(function() {
  // Kode JavaScript Anda di sini
  var sensitiveData = "Data rahasia";
  console.log(sensitiveData);

  // Obfuscation: mengacak kode
  var _0x5b87=["\x76\x61\x6C\x75\x65","\x44\x61\x74\x61\x20\x72\x61\x68\x61\x73\x69\x61"];var sensitiveData=_0x5b87[1];console[_0x5b87[0]](sensitiveData);
})();

document.addEventListener('keydown', function(event) {
  if (event.ctrlKey && event.shiftKey && event.keyCode === 73) {
    event.preventDefault();
  }
});

const express = require('express');
const https = require('https');
const fs = require('fs');

const app = express();

// Middleware dan konfigurasi lainnya

// Menentukan opsi SSL/TLS
const options = {
  key: fs.readFileSync('path/to/private.key'),
  cert: fs.readFileSync('path/to/certificate.crt'),
};

// Menggunakan HTTPS untuk server Express
const server = https.createServer(options, app);

// Menjalankan server di port tertentu
const port = 443;
server.listen(port, () => {
  console.log(`Server HTTPS berjalan di port ${port}`);
});


 

document.addEventListener('keyup', (e) => {
    if (e.key == 'PrintScreen') {
        navigator.clipboard.writeText('');
        alert("Screenshot Disabled");
    }
})

// <!-- YAA KALO EMG GABISA DICOPAS, TAPI BISA KO COPAS LEWAT INSPECT ELEMENT
//   CUMA SEKEDAR WEBSITE BIASA KO, YG UDAH PRO JANGAN NGEJEK NGE-BULLY LAH YAWW WKWKWK -->
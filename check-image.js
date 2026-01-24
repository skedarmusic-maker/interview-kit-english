const https = require('https');

const url = 'https://vz-5af29887-36d.b-cdn.net/90b4a2ad-9a65-4179-8b32-69679527e1fa/thumbnail_9934a3ac.jpg';

https.get(url, (res) => {
    console.log('StatusCode:', res.statusCode);
    console.log('Headers:', res.headers);
}).on('error', (e) => {
    console.error(e);
});

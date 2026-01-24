const https = require('https');

const url = 'https://vz-5af29887-36d.b-cdn.net/90b4a2ad-9a65-4179-8b32-69679527e1fa/thumbnail_9934a3ac.jpg';
const options = {
    headers: {
        'Referer': 'http://localhost:3000/',
        'User-Agent': 'Mozilla/5.0'
    }
};

https.get(url, options, (res) => {
    console.log('StatusCode:', res.statusCode);
    if (res.statusCode === 200) {
        console.log('Success with Localhost Referrer!');
    } else {
        console.log('Failed with Localhost Referrer.');
    }
}).on('error', (e) => {
    console.error(e);
});

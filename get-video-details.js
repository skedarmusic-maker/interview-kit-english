const https = require('https');

const libraryId = '585415';
const videoId = '90b4a2ad-9a65-4179-8b32-69679527e1fa';
const apiKey = 'a20edf38-4aa4-4942-916783480273-1af6-45eb';

const options = {
    hostname: 'video.bunnycdn.com',
    port: 443,
    path: `/library/${libraryId}/videos/${videoId}`,
    method: 'GET',
    headers: {
        'AccessKey': apiKey,
        'Accept': 'application/json'
    }
};

const req = https.request(options, (res) => {
    let data = '';
    res.on('data', (chunk) => data += chunk);
    res.on('end', () => {
        if (res.statusCode === 200) {
            const video = JSON.parse(data);
            console.log('Video Details:');
            console.log('Title:', video.title);
            console.log('ThumbnailFileName:', video.thumbnailFileName);
            console.log('AvailableResolutions:', video.availableResolutions);

            // Construct standard URL to check structure
            // Usually: https://{pullzone}.b-cdn.net/{videoGuid}/{thumbnailFileName}
            console.log('Constructed Thumbnail URL:', `https://vz-5af29887-36d.b-cdn.net/${video.guid}/${video.thumbnailFileName}`);
        } else {
            console.log('Error:', res.statusCode, data);
        }
    });
});

req.on('error', (e) => console.error(e));
req.end();

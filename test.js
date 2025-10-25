const http = require('http');

const options = {
  host: 'localhost',
  port: process.env.PORT || 3000,
  path: '/'
};

const req = http.get(options, (res) => {
  let body = '';
  res.on('data', chunk => body += chunk);
  res.on('end', () => {
    if (res.statusCode === 200 && body.includes('Hello from CI/CD demo')) {
      console.log('TEST PASSED');
      process.exit(0);
    } else {
      console.error('TEST FAILED', res.statusCode, body);
      process.exit(1);
    }
  });
});

req.on('error', (e) => {
  console.error('TEST ERROR', e.message);
  process.exit(1);
});

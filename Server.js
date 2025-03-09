mkdir webhosting-server
cd webhosting-server
npm init -y
npm install express
echo "const express = require('express'); const app = express(); const port = 3000; app.use(express.static('public')); app.listen(port, () => console.log(\'Server running on port \${port}\'))"> server.js
mkdir public
echo "<!DOCTYPE html><html><head><title>Web hosting Server</title></head><body><h1>Welcome to the Web Hosting Server</h1></body></html>" > public/index.html
node server.js

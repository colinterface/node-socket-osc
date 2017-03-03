This example is based on a lecture by [Mark Hellar](https://github.com/mhellar) from the Gray Area Creative Coding Immersive in March 2017

## Install dependencies
`npm i`

`npm i -g nodemon`

## Start the server
`npm start`

nodemon with automatically restart the server when you update `server.js`

## Send OSC messages using TouchOSC
1. Download the TouchOSC app on your phone
1. Make sure both devices are on the same WiFi network
1. In TouchOSC, open the OSC connections menu
1. Enter your computer's IP address in the "Host" field and press "Done" on the virtual keyboard
1. Update the local IP address and outgoing port in `server.js`
1. Open `localhost:1234` in your browser
1. Press "Done" in the TouchOSC navigation bar to start sending OSC messages

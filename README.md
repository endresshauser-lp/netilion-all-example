#netilion-all-example

This is an example application demonstrating how to use netilion-all Javascript package.
NPM: https://www.npmjs.com/package/netilion-all

This example uses yarn, but package can be also used with npm.  

1. Execute `yarn install` in this folder
2. Make sure to add valid credentials in `.env` file.
* BASE_NETILION_URL
Base URL for accessing Netilion API. At the moment of writing (12.03.2021) these are:
`BASE_NETILION_URL = https://api.staging-env.iiot.endress.com/v1` (staging)
`BASE_NETILION_URL = https://api.netilion.endress.com/v1` (productive)
* API_KEY
API Key for your application. Valid key can be obtained under 
https://staging-env.netilion.endress.com/app/id/subscriptions/connect (staging)
or
https://netilion.endress.com/app/id/subscriptions/connect (productive)
E.g.:
`API_KEY = 00000000000000000000000000`
* USER 
Valid Netilion user
* PASS
Password for the aforementioned user

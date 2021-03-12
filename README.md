This is an example application demonstrating how to use netilion-all Javascript package.  

NPM: https://www.npmjs.com/package/netilion-all  

This package is just a helper for accessing Netilion REST endpoints with Javascript.  
https://api.staging-env.iiot.endress.com/doc/v1/ (staging)  
or  
https://api.iiot.endress.com/doc/v1/ (productive)

This example uses yarn, but package can be also used with npm.  

1. Execute `yarn install` in this folder
2. Create `.env` file in the projects root with the following entries:
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

Complete content will look something like this:
```
BASE_NETILION_URL = https://api.staging-env.iiot.endress.com/v1
API_KEY = 00000000000000000000000000
USER = example@server.com
PASS = passwordForThisUser
```

3. Execute `node index.js`. Data of the user and list of Netilion assets available to the user will be shown.

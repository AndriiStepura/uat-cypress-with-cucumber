# UAT-cypress-with-cucumber
If you want to try cypress with cucumber, it's ready project for you


# Requirements
Installed `node` and `npm`


# How to install
## Run to load node modules
`npm install`


## Or manually step by step guide
### Install cypress
```
npm install cypress
npm init
npm install cypress --save-dev
npx cypress open
```


# Highly recommended preconditions
According to https://docs.cypress.io/guides/getting-started/installing-cypress#Nodejs update your node to supported
check current version with `node -v` and if it's below (like my v10.15.3) use `npm install -g n`
which if you are same "lucky" as me - it will fail with new error:
```
npm ERR! notsup Unsupported platform for n@9.2.0: wanted {"os":"!win32","arch":"any"} (current: {"os":"win32","arch":"x64"})
```
so.. open https://nodejs.org/en/download download file for Windows and install it (verified on node-v20.10.0-x64.msi)
Double check with `node -v` if expected version returned, you are ready to go forward, othervise investigate and assure node is compatible (for example - restart Terminal, IDE, PC).


# Issues and fixes notes:
#### Error: read EBADF
`npx cypress open` will fail if you trying to run it on Windows from Git Bash terminal, so if you facing with error:
```
Error: read EBADF
    at Pipe.onStreamRead (internal/stream_base_commons.js:111:27)
```
switch to IDE terminal, VSC node terminal works fine for me 

---

#### If npx cypress open show empty window
Check Node version, in my case it was below supported, welcome to [Highly recommended preconditions](#highly-recommended-preconditions)



# Notes and tricks
You can created account at https://cloud.cypress.io/login to use cypress cloud project, and also can use it by CYPRESS_PROJECT_ID env var to avoid it in code https://docs.cypress.io/guides/cloud/account-management/projects#Project-ID Probably may be usefull to separate staging/pre-prod/prod variables inside project not in code. 


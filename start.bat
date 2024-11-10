@echo off

IF NOT EXIST "node_modules" (
    echo The "node_modules" folder does not exist. Installing dependencies..
    npm install
) ELSE (
    echo The "node_modules" folder already exists. Starting the server..
    npm run start
)

pause
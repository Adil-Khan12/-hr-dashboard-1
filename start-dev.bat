@echo off
echo Starting Angular (Node 18.20.3) and JSON Server (Node 14.21.3)...

:: Angular window
start "Angular" cmd /k "nvm use 14.21.3 && npm run start:angular"

:: JSON Server window
start "JSON Server" cmd /k "nvm use 20.19.4 && npm run start:json"

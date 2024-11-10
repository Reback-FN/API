@echo off

where openssl >nul 2>&1
if %ERRORLEVEL% NEQ 0 (
    echo OpenSSL is not installed or not in the PATH. Please install it first.
    pause
    exit /b 1
)

openssl rand -hex 32 > aes_key.txt

echo AES-256 key generated and saved to aes_key.txt
pause
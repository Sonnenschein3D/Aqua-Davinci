@echo off
setlocal

:: Get the name of the current directory to use as the project name
for %%i in ("%cd%") do set "PROJEKTNAME=%%~ni"

:: Create a robust timestamp (Format: YYYY-MM-DD_HH-MM) using WMIC
for /f "tokens=2 delims==" %%I in ('wmic os get localdatetime /value') do set "dt=%%I"
set "YYYY=%dt:~0,4%"
set "MM=%dt:~4,2%"
set "DD=%dt:~6,2%"
set "HH=%dt:~8,2%"
set "MIN=%dt:~10,2%"
set "TIMESTAMP=%YYYY%-%MM%-%DD%_%HH%-%MIN%"

:: Define the output filename
set "OUTPUT_FILENAME=%PROJEKTNAME%_Backup_%TIMESTAMP%.zip"

echo Erstelle Sicherung: %OUTPUT_FILENAME%
echo.
echo Folgende Ordner und Dateien werden ausgeschlossen:
echo - node_modules
echo - sicherung.bat
echo - .git
echo - Alle .zip Dateien
echo.

:: Use tar to create the zip file, excluding specified folders and files
:: -c : create
:: -a : auto-compress (based on file extension, here .zip)
:: -f : file name
:: -v : verbose (shows processed files)
tar -cvaf "%OUTPUT_FILENAME%" --exclude="node_modules" --exclude="sicherung.bat" --exclude=".git" --exclude="*.zip" .

echo.
echo Sicherung erfolgreich erstellt.
pause

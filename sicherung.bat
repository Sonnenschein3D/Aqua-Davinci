@echo off
setlocal

:: Verzeichnis-Einstellungen
set "SOURCE_DIR=%~dp0"
if "%SOURCE_DIR:~-1%"=="\" set "SOURCE_DIR=%SOURCE_DIR:~0,-1%"

:: Projektname aus dem Ordnernamen lesen
for %%i in ("%SOURCE_DIR%") do set "PROJEKTNAME=%%~ni"

:: Robusten Zeitstempel erstellen (YYYY-MM-DD_HH-MM)
for /f "tokens=2 delims==" %%I in ('wmic os get localdatetime /value') do set "dt=%%I"
set "TIMESTAMP=%dt:~0,4%-%dt:~4,2%-%dt:~6,2%_%dt:~8,2%-%dt:~10,2%"

:: Pfade setzen
set "TEMP_DIR=%TEMP%\%PROJEKTNAME%_Backup_Temp_%TIMESTAMP%"
set "ZIP_NAME=%PROJEKTNAME%_Backup_%TIMESTAMP%.zip"
set "ZIP_FINAL=%SOURCE_DIR%\%ZIP_NAME%"

echo ========================================================
echo   SICHERUNG STARTET
echo ========================================================
echo.
echo Projekt:           %PROJEKTNAME%
echo Ziel-Datei:        %ZIP_FINAL%
echo.

:: 1. Dateien mit Robocopy filtern (sehr zuverlässig unter Windows)
echo [1/3] Dateien vorbereiten (ohne node_modules, .git, etc.)...
if not exist "%TEMP_DIR%" mkdir "%TEMP_DIR%"
:: /XD schließt Ordner aus, /XF schließt Dateien aus
robocopy "%SOURCE_DIR%" "%TEMP_DIR%" /MIR /XD node_modules .git dist .vscode /XF *.zip sicherung.bat /R:0 /W:0 >nul
echo OK.
echo.

:: 2. ZIP-Datei mit PowerShell erstellen
echo [2/3] Erstelle ZIP-Datei...
powershell -NoProfile -Command "& { try { Compress-Archive -Path '%TEMP_DIR%\*' -DestinationPath '%ZIP_FINAL%' -Force -ErrorAction Stop } catch { Write-Host 'Fehler: ' $_.Exception.Message; exit 1 } }"

if %ERRORLEVEL% NEQ 0 (
    echo.
    echo FEHLER beim Erstellen der ZIP-Datei!
    rmdir /s /q "%TEMP_DIR%"
    pause
    exit /b
)
echo OK.
echo.

:: 3. Temporären Ordner löschen
echo [3/3] Temp-Ordner aufraeumen...
rmdir /s /q "%TEMP_DIR%"
echo OK.

echo.

echo ========================================================
echo   SICHERUNG ERFOLGREICH
echo ========================================================
echo.
pause
@echo off
setlocal

:: 1. Verzeichnis-Einstellungen
set "SOURCE_DIR=%~dp0"
:: Entferne evtl. vorhandenen Backslash am Ende von SOURCE_DIR für saubere Pfade
if "%SOURCE_DIR:~-1%"=="\" set "SOURCE_DIR=%SOURCE_DIR:~0,-1%"

set "BACKUP_ROOT=C:\Users\rb\Aqua-Davinci_Backups"

:: Datum und Zeit für Dateinamen formatieren (YYYY-MM-DD_HH-MM)
set "d=%date:~-4%-%date:~-7,2%-%date:~-10,2%"
set "t=%time:~0,2%-%time:~3,2%"
set "t=%t: =0%"
set "TIMESTAMP=%d%_%t%"

:: Zielpfade
set "TEMP_DIR=%BACKUP_ROOT%\Temp_%TIMESTAMP%"
set "ZIP_NAME=Aqua-Davinci_Backup_%TIMESTAMP%.zip"

:: Wir erstellen das ZIP erst im Backup-Ordner (sicherer Ort)
set "ZIP_STAGING=%BACKUP_ROOT%\%ZIP_NAME%"
:: Und verschieben es dann hierher
set "ZIP_FINAL=%SOURCE_DIR%\%ZIP_NAME%"

echo ========================================================
echo   SICHERUNG STARTET (Aqua-Davinci)
echo ========================================================
echo.
echo Quell-Verzeichnis: %SOURCE_DIR%
echo Temp-Verzeichnis:  %TEMP_DIR%
echo Ziel-Datei:        %ZIP_FINAL%
echo.

:: 2. Git-Sicherung
echo [1/4] Git-Status aktualisieren...
cd /d "%SOURCE_DIR%"
git add . >nul 2>&1
git commit -m "Automatisches Backup %date% %time%" >nul 2>&1
echo OK.
echo.

:: 3. Dateien ohne node_modules filtern
echo [2/4] Dateien vorbereiten (ohne node_modules)...
if not exist "%TEMP_DIR%" mkdir "%TEMP_DIR%"
robocopy "%SOURCE_DIR%" "%TEMP_DIR%" /MIR /XD node_modules .git .history dist .gemini .vscode temp tmp /R:0 /W:0 >nul
echo OK.
echo.

:: 4. ZIP erstellen (im Backup-Ordner)
echo [3/4] Erstelle ZIP im Zwischenspeicher...
powershell -NoProfile -Command "& { try { Compress-Archive -Path '%TEMP_DIR%\*' -DestinationPath '%ZIP_STAGING%' -Force -ErrorAction Stop } catch { Write-Host 'Fehler: ' $_.Exception.Message; exit 1 } }"

if %ERRORLEVEL% NEQ 0 (
    echo.
    echo FEHLER beim Erstellen der ZIP-Datei!
    rmdir /s /q "%TEMP_DIR%"
    pause
    exit /b
)

:: 5. ZIP verschieben
echo [4/4] Verschiebe ZIP in Projektordner...
move /Y "%ZIP_STAGING%" "%ZIP_FINAL%" >nul

if exist "%ZIP_FINAL%" (
    echo.
    echo ========================================================
    echo   SICHERUNG ERFOLGREICH
    echo ========================================================
    echo ZIP-Datei liegt hier:
    echo %ZIP_FINAL%
) else (
    echo.
    echo FEHLER: Datei konnte nicht verschoben werden!
    echo Sie liegt eventuell noch hier: %ZIP_STAGING%
)

:: Temp-Ordner löschen
rmdir /s /q "%TEMP_DIR%"

echo.
pause

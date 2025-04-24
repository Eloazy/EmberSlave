@echo off
setlocal

REM *** Configuration ***
set "destinationFolder=%~dp0"
set "waitTime=5" REM Wait time in seconds
set "foundMainRarFile="

echo Starting the script.
echo Destination folder: "%destinationFolder%"

REM *** Phase 1: Unzip the first RAR file found ***
for %%a in ("*.rar") do (
    echo Unzipping the first RAR file: "%%a" to "%destinationFolder%"...
    "C:\Program Files\WinRAR\Rar.exe" x -o+ "%%a" "%destinationFolder%\"
    if errorlevel 1 (
        echo Error unzipping "%%a". Check the file and the WinRAR installation.
        pause
        exit /b 1
    )
    echo First RAR file unzipped.
    set "foundMainRarFile=%%a"
    goto :wait
)
echo No RAR file found in this folder for the first phase.
goto :end_script

:wait
echo.
echo Waiting %waitTime% seconds before unzipping the other files...
timeout /t %waitTime% /nobreak

REM *** Phase 2: Unzip all other RAR files in the destination folder ***
echo.
echo Starting the unzipping of the other RAR files in the folder "%destinationFolder%".
for %%a in ("*.rar") do (
    echo Unzipping the first RAR file: "%%a" to "%destinationFolder%"...
    "C:\Program Files\WinRAR\Rar.exe" x -o+ "%%a" "%destinationFolder%\"
    if errorlevel 1 (
        echo Error unzipping "%%a". Check the file and the WinRAR installation.
        pause
        exit /b 1
    )
    goto :end_script
)

:end_script
echo.
echo Process completed!
endlocal

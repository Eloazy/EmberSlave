title installing helpers
echo installing...
@echo off

REM Define o arquivo de destino
set "arquivo_destino=run_server.bat"
set "arquivo_destino2=EmberSlave.bat"
set "arquivo_destino3=installer.bat"

REM Define o nome da pasta para os atalhos
set "pasta_atalho=API useful"

REM Caminho completo para o arquivo de destino
set "caminho_destino=%CD%\%arquivo_destino%"

REM --- Cria o primeiro atalho (run_server.bat) ---
set "nome_atalho1=%arquivo_destino%"
set "caminho_atalho1=%CD%\%pasta_atalho%\%nome_atalho1%.lnk"
set "icone_dll1=%SystemRoot%\System32\SHELL32.dll,232"
powershell -Command "$Shell = New-Object -ComObject WScript.Shell; $Shortcut = $Shell.CreateShortcut('%caminho_atalho1%'); $Shortcut.TargetPath = '%caminho_destino%'; $Shortcut.WorkingDirectory = '%CD%'; $Shortcut.IconLocation = '%icone_dll1%'; $Shortcut.Save()"

REM --- Cria o segundo atalho (run_server2.bat) ---
set "nome_atalho2=%arquivo_destino2%"
set "caminho_atalho2=%CD%\%pasta_atalho%\%nome_atalho2%.lnk"
set "icone_dll2=%SystemRoot%\System32\SHELL32.dll,17"
powershell -Command "$Shell = New-Object -ComObject WScript.Shell; $Shortcut = $Shell.CreateShortcut('%caminho_atalho2%'); $Shortcut.TargetPath = '%caminho_destino%'; $Shortcut.WorkingDirectory = '%CD%'; $Shortcut.IconLocation = '%icone_dll2%'; $Shortcut.Save()"

REM --- Cria o terceiro atalho (run_server3.bat) ---
set "nome_atalho3=%arquivo_destino3%"
set "caminho_atalho3=%CD%\%pasta_atalho%\%nome_atalho3%.lnk"
set "icone_dll3=%SystemRoot%\System32\SHELL32.dll,135"

powershell -Command "$Shell = New-Object -ComObject WScript.Shell; $Shortcut = $Shell.CreateShortcut('%caminho_atalho3%'); $Shortcut.TargetPath = '%caminho_destino%'; $Shortcut.WorkingDirectory = '%CD%'; $Shortcut.IconLocation = '%icone_dll3%'; $Shortcut.Save()"
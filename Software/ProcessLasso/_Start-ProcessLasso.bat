::自动以管理员身份运行bat文件
cd /d %~dp0
%1 start "" mshta vbscript:createobject("shell.application").shellexecute("""%~0""","::",,"runas",1)(window.close)&exit
::完

::设置config文件夹路径
cd /d %~dp0
set configfolder=%~dp0\config

::删除原配置
del /s /q "%configfolder%\prolasso.ini"

::先从github下载最新配置
start bitsadmin /transfer "prolasso" /priority foreground https://github.com/dupontjoy/customization/raw/master/Software/ProcessLasso/config/prolasso.ini "%configfolder%\prolasso.ini"

::等待一段时间10秒
@echo off
choice /t 10 /d y /n >nul

START ProcessGovernor.exe "/logfolder=." "/configfolder=./config"
START ProcessLasso.exe "/logfolder=." "/configfolder=./config"
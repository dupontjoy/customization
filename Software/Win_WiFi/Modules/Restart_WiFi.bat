::自动以管理员身份运行bat文件
cd /d %~dp0
%1 start "" mshta vbscript:createobject("shell.application").shellexecute("""%~0""","::",,"runas",1)(window.close)&exit

::界面大小，Cols为宽，Lines为高
COLOR 0a
MODE con: COLS=77 LINES=20

:Restart_WiFi
cls
::完整日期和時間
set YY=%date:~0,4%
set MON=%date:~5,2%
set DD=%date:~8,2%
set hh=%time:~0,2%
set mm=%time:~3,2%
set ss=%time:~6,2%
::设置时间格式
set date=%YY%.%MON%.%DD%-%hh%:%mm%:%ss%

::小時數小于10点時的修正
set /a hh=%time:~0,2%*1
if %hh% LSS 10 set hh=0%hh%
::设置时间格式
set date=%YY%.%MON%.%DD%-%hh%:%mm%:%ss%

::输出时间
echo %date% 重启WiFi
@echo.
@echo.

::重启WiFi
netsh wlan stop hostednetwork
netsh wlan start hostednetwork


@echo.
::120分钟自动重启
@echo off
choice /t 7200 /d y /n >nul

Goto Restart_WiFi
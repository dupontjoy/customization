@echo off

::自动以管理员身份运行bat文件
::cd /d %~dp0
::%1 start "" mshta vbscript:createobject("shell.application").shellexecute("""%~0""","::",,"runas",1)(window.close)&exit

::备份部分开始
Title windows wifi 
::界面大小，Cols为宽，Lines为高
COLOR 0a
MODE con: COLS=77 LINES=20
cd /d %~dp0

:menu
cls
ECHO.
ECHO  windows wifi                     
ECHO.
ECHO  1. Build_WiFi
ECHO. *****************************
ECHO  2. Open_WiFi
ECHO. *****************************
ECHO  3. Restart_WiFi
ECHO. *****************************
ECHO  4. Close_WiFi
ECHO.
set /p a=请输入操作序号并回车（1、2）：
cls

if %a%==1 goto Build_WiFi
if %a%==2 goto Open_WiFi
if %a%==3 goto Restart_WiFi
if %a%==4 goto Close_WiFi


:Build_WiFi
netsh wlan set hostednetwork mode=allow ssid=My-8848 key=my888666
@echo.
Goto menu

:Open_WiFi
netsh wlan start hostednetwork
@echo.
Goto menu

:Close_WiFi
netsh wlan stop hostednetwork
@echo.
Goto menu

:Restart_WiFi
netsh wlan stop hostednetwork
netsh wlan start hostednetwork
@echo.
Goto menu
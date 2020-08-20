::2020.08.20

@echo off

::自动以管理员身份运行bat文件
::cd /d %~dp0
::%1 start "" mshta vbscript:createobject("shell.application").shellexecute("""%~0""","::",,"runas",1)(window.close)&exit

::备份部分开始
Title Win_WiFi 備份批處理整合版 by Cing
::界面大小，Cols为宽，Lines为高
COLOR 0a
MODE con: COLS=77 LINES=20
cd /d %~dp0
::設置模塊路徑
::将当前目录保存到参数b中,等号前后不要有空格
set b=%cd%

:menu
cls
ECHO.
ECHO  Windows WiFi                     
ECHO.
ECHO  1. Build_WiFi
ECHO. *****************************
ECHO  2. Open_WiFi
ECHO. *****************************
ECHO  3. Restart_WiFi（自动重启）
ECHO. *****************************
ECHO  4. Close_WiFi
ECHO. *****************************
ECHO  5. DHCP
ECHO.
set /p a=请输入操作序号并回车（1、2）：
cls

if %a%==1 goto Build_WiFi
if %a%==2 goto Open_WiFi
if %a%==3 goto Restart_WiFi
if %a%==4 goto Close_WiFi
if %a%==5 goto DHCP

:Build_WiFi
cls
@echo off
CALL "%b%\Modules\Build_WiFi.bat"
@echo.
Goto menu

:Open_WiFi
cls
@echo off
CALL "%b%\Modules\Open_WiFi.bat"
@echo.
Goto menu

:Restart_WiFi
cls
@echo off
CALL "%b%\Modules\Restart_WiFi.bat"
@echo.
Goto menu

:Close_WiFi
cls
@echo off
CALL "%b%\Modules\Close_WiFi.bat"
@echo.
Goto menu

:DHCP
cls
@echo off
CALL "%b%\Modules\DHCP.bat"
@echo.
Goto menu
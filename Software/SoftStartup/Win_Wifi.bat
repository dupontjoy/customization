@echo off

::�Զ��Թ���Ա�������bat�ļ�
::cd /d %~dp0
::%1 start "" mshta vbscript:createobject("shell.application").shellexecute("""%~0""","::",,"runas",1)(window.close)&exit

::���ݲ��ֿ�ʼ
Title Windows WiFi 
::�����С��ColsΪ��LinesΪ��
COLOR 0a
MODE con: COLS=77 LINES=20
cd /d %~dp0

:menu
cls
ECHO.
ECHO  Windows WiFi                     
ECHO.
ECHO  1. Build_WiFi
ECHO. *****************************
ECHO  2. Open_WiFi
ECHO. *****************************
ECHO  3. Restart_WiFi���Զ�������
ECHO. *****************************
ECHO  4. Close_WiFi
ECHO. *****************************
ECHO  5. DHCP
ECHO.
set /p a=�����������Ų��س���1��2����
cls

if %a%==1 goto Build_WiFi
if %a%==2 goto Open_WiFi
if %a%==3 goto Restart_WiFi
if %a%==4 goto Close_WiFi
if %a%==5 goto DHCP


:Build_WiFi
cls
netsh wlan set hostednetwork mode=allow setting=security ssid=My-8848 key=my888666
@echo.
Goto menu

:Open_WiFi
cls
netsh wlan set hostednetwork mode=allow
netsh wlan start hostednetwork
@echo.
Goto menu

:Close_WiFi
cls
netsh wlan stop hostednetwork
netsh wlan set hostednetwork mode=disallow
@echo.
Goto menu

:Restart_WiFi
cls
::�������ں͕r�g
set YY=%date:~0,4%
set MON=%date:~5,2%
set DD=%date:~8,2%
set hh=%time:~0,2%
set mm=%time:~3,2%
set ss=%time:~6,2%
::����ʱ���ʽ
set date=%YY%.%MON%.%DD%-%hh%:%mm%:%ss%

::С�r��С��10��r������
set /a hh=%time:~0,2%*1
if %hh% LSS 10 set hh=0%hh%
::����ʱ���ʽ
set date=%YY%.%MON%.%DD%-%hh%:%mm%:%ss%

::���ʱ��
echo %date% ����WiFi
@echo.
@echo.

::����WiFi
netsh wlan stop hostednetwork
netsh wlan set hostednetwork mode=disallow
netsh wlan set hostednetwork mode=allow
netsh wlan start hostednetwork
@echo.
::30�����Զ�����
@echo off
choice /t 1800 /d y /n >nul
Goto Restart_WiFi

:DHCP
cls
netsh interface ip set address name="��̫��" source=dhcp
netsh interface ip set dns name="��̫��" source=dhcp
@echo.
Goto menu
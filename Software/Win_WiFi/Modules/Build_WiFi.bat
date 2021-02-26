::自动以管理员身份运行bat文件
cd /d %~dp0
%1 start "" mshta vbscript:createobject("shell.application").shellexecute("""%~0""","::",,"runas",1)(window.close)&exit

::界面大小，Cols为宽，Lines为高
COLOR 0a
MODE con: COLS=77 LINES=20

:Build_WiFi
cls
netsh wlan set hostednetwork mode=allow setting=security ssid=My-8848 key=my888666

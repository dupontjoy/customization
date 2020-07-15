::2018.11.02

@echo off

::設置程序文件夾位置
set dir=D:\Program Files
set dir2=C:\Program Files (x86)

::公司用軟件
start "" "%dir%\Tencent\WeChat\WeChat.exe"

::Win_Wifi
cd /d %~dp0
::設置模塊路徑
::将当前目录保存到参数b中,等号前后不要有空格
set b=%cd%
CALL "%b%\Win_Wifi.bat"

::完成後退出
exit

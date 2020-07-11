::2018.11.02

@echo off

::設置程序文件夾位置
set dir=D:\Program Files
set dir2=C:\Program Files (x86)

::公司用軟件
start "" "%dir%\Tencent\WeChat\WeChat.exe"

::启动wifi热点
netsh wlan set hostednetwork mode=allow ssid=My-8848 key=my888666
netsh wlan start hostednetwork

::完成後退出
exit

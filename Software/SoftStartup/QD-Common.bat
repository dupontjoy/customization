::2021.06.30

@echo off

::自动以管理员身份运行bat文件
::cd /d %~dp0
::%1 start "" mshta vbscript:createobject("shell.application").shellexecute("""%~0""","::",,"runas",1)(window.close)&exit
::完



::設置程序文件夾位置
set softdir=C:\Cing
set softdir2=D:\Cing's Soft\Microsoft


::等待一段时间
@echo off
choice /t 10 /d y /n >nul


::普通啟動
start "" "%softdir%\RimeIME Portable\weasel\WeaselServer.exe"
start /min "" "%softdir%\Tencent\Foxmail\Foxmail.exe"
start /min "" "%softdir%\Tencent\QQ\bin\QQ.exe"
start "" "%softdir%\CingFox\Software\Snipaste\Snipaste.exe"
start "" "%softdir%\CingFox\Software\Ditto\Ditto.exe"


::Processlaso特殊处理
::删除日志临时文件
del "%softdir2%\System Tools\ProcessLassoPortable\prolasso.log.*"  /s /q
::启动程序
start /min "" "%softdir2%\System Tools\ProcessLassoPortable\ProcessGovernor.exe" "/configfolder=%softdir2%\System Tools\ProcessLassoPortable\config" "/logfolder=%softdir2%\System Tools\ProcessLassoPortable\config"
start /min "" "%softdir2%\System Tools\ProcessLassoPortable\ProcessLasso.exe" "/configfolder=%softdir2%\System Tools\ProcessLassoPortable\config" "/logfolder=%softdir2%\System Tools\ProcessLassoPortable\config"



::Listary五代
::初始化Listary磁盘扫描,日志(解决5.x版U盘弹出后还有文件记录)
del "%softdir%\CingFox\Software\Listary Pro\UserData\DiskSearch.db"  /s /q
del "%softdir%\CingFox\Software\Listary Pro\UserData\listary_log.log"  /s /q
del "%softdir%\CingFox\Software\Listary Pro\UserData\*.tmp"  /s /q

::等待一段时间
@echo off
choice /t 3 /d y /n >nul

::再运行一次
::初始化Listary磁盘扫描,日志(解决5.x版U盘弹出后还有文件记录)
del "%softdir%\CingFox\Software\Listary Pro\UserData\DiskSearch.db"  /s /q
del "%softdir%\CingFox\Software\Listary Pro\UserData\listary_log.log"  /s /q
del "%softdir%\CingFox\Software\Listary Pro\UserData\*.tmp"  /s /q

::启动程序
start "" "%softdir%\CingFox\Software\Listary Pro\listary.exe"


::等待一段时间
@echo off
choice /t 3 /d y /n >nul

::延迟启动
start /min "" "%softdir%\Tencent\WeiyunSync\WeiyunSync\Bin\weiyunsync.exe"


::完成後退出
exit
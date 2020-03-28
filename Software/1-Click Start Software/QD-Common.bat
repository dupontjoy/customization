::2019.10.24

@echo off

::自动以管理员身份运行bat文件
::cd /d %~dp0
::%1 start "" mshta vbscript:createobject("shell.application").shellexecute("""%~0""","::",,"runas",1)(window.close)&exit
::完

::等待一段时间
@echo off
choice /t 3 /d y /n >nul

::設置程序文件夾位置
set dir=D:\Program Files

::Processlaso特殊处理
::删除日志临时文件
del "%dir%\System Tools\ProcessLassoPortable\prolasso.log.*"  /s /q
::启动程序
start "" "%dir%\System Tools\ProcessLassoPortable\ProcessGovernor.exe" "/configfolder=%dir%\System Tools\ProcessLassoPortable\config" "/logfolder=%dir%\System Tools\ProcessLassoPortable\config" /min
start "" "%dir%\System Tools\ProcessLassoPortable\ProcessLasso.exe" "/configfolder=%dir%\System Tools\ProcessLassoPortable\config" "/logfolder=%dir%\System Tools\ProcessLassoPortable\config" /min



::Listary五代
::初始化Listary磁盘扫描,日志(解决5.x版U盘弹出后还有文件记录)
del "%dir%\CingFox\Software\Listary Pro\UserData\DiskSearch.db"  /s /q
del "%dir%\CingFox\Software\Listary Pro\UserData\listary_log.log"  /s /q
del "%dir%\CingFox\Software\Listary Pro\UserData\*.tmp"  /s /q
::等待一段时间
@echo off
choice /t 3 /d y /n >nul
::启动程序
start "" "%dir%\CingFox\Software\Listary Pro\listary.exe"

::Listary六代
::start "" "%dir%\CingFox\Software\Listary\listary.exe"


::等待一段时间
@echo off
choice /t 3 /d y /n >nul

::GFW
::start "" "%dir%\CingFox\Software\GFW\SS\Shadowsocks.exe"
::start "" "%dir%\CingFox\Software\GFW\SSR\ShadowsocksR-dotnet4.0.exe"
start "" "%dir%\CingFox\Software\GFW\V2RayN\v2rayN.exe"

::普通啟動
start "" "%dir%\RimeIME Portable\weasel\WeaselServer.exe"
start "" "%dir%\Tencent\QQ\Bin\QQ.exe"
start "" "%dir%\Tencent\Foxmail\Foxmail.exe" /min
start "" "%dir%\CingFox\Software\Snipaste\Snipaste.exe"
start "" "%dir%\Ditto\Ditto.exe"

::等待一段时间
@echo off
choice /t 10 /d y /n >nul

::延迟启动
start "" "%dir%\Tencent\WeiyunSync\Bin\weiyunsync.exe" /min


::完成後退出
exit
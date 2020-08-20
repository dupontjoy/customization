::界面大小，Cols为宽，Lines为高
COLOR 0a
MODE con: COLS=77 LINES=20

:DHCP
cls
::设置自动获取
netsh interface ip set address name="以太网" source=dhcp
netsh interface ip set dns name="以太网" source=dhcp
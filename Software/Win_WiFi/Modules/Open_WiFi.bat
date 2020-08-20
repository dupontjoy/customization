::界面大小，Cols为宽，Lines为高
COLOR 0a
MODE con: COLS=77 LINES=20

:Open_WiFi
cls
netsh wlan set hostednetwork mode=allow
netsh wlan start hostednetwork
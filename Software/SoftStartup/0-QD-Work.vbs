Set ws = CreateObject("Wscript.Shell")
ws.run "cmd /c QD-Common.bat",vbhide
ws.run "cmd /c QD-Work.bat",vbhide
ws.run "cmd /c Win_Wifi.bat"
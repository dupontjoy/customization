Start software at one click

曾經嘗試過多種啟動方式:

- 開機自啟: 拖慢開機時間, 部分程序啟動時会卡死, 另外部分綠色程序不能自啟

- 計劃任務: 可定義開機後多長時間啟動移序, 但是不能批量導入, 編輯起來麻煩

最後找到此批處理方式, 簡單易行, 完美解決上面兩種方式的弊端.

**更新歷史:**
- 2016.01.20 加入最小化運行
- 2016.01.19 加入延遲時間
- 2015.12.28 初建

    
::自动以管理员身份运行bat文件

    cd /d %~dp0
    1 start "" mshta vbscript:createobject("shell.application").shellexecute("""%~0""","::",,"runas",1)(window.close)&exit
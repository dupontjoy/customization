//取消默认的s键stackoverflow搜索, 将s键改为startpage搜索
removeSearchAliasX('s', 'stackoverflow',);
addSearchAliasX('s', 'startpage', 'https://www.startpage.com/sp/search?query=');

//添加os键startpage搜索框
mapkey('os', '#8打开Startpage搜索栏', function() {
    Front.openOmnibar({type: "SearchEngine", extra: "s"});
});

//关掉当前标签页后，切换到哪一侧的标签页。["left", "right"]
settings.focusAfterClosed = "left";

//在哪个位置创建新标签页。["left", "right", "first", "default"]
settings.newTabPosition = "right";
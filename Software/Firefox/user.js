//2021.02.25


/*
# pref(key,value) 会覆盖默认设置,在删除之后会恢复默认设置.
# user_pref(key,value)等同于从about:config修改,删除之后,修改的设置仍然有效.
*/

/*************************************************************************************
# Note:
- OurSticky扩展导致百度网盘离线下载添加BT种子时窗口无法弹出
- Don't Fuck with my Scrolling脚本会导致某些直播视频无法加载
- Https only模式会导致ic后台站点无法切换
- Firefox Beta版surfingkeys容易出问题
 *************************************************************************************/

/******************************************************************************************
 *这里是通用设置。
 *******************************************************************************************/

//*==========选项卡里的设置==========*//
user_pref("privacy.userContext.enabled", true);//启用身份标签页
user_pref("signon.rememberSignons", false);//不保存密码
user_pref("browser.shell.checkDefaultBrowser", false);//总是检查是否为默认浏览器(否)
user_pref("browser.search.suggest.enabled", false);//禁用搜索建议
user_pref("privacy.donottrackheader.enabled", true);//请勿跟踪(一律发送)
user_pref("datareporting.healthreport.uploadEnabled", true);//允许 Firefox 向 Mozilla 发送技术信息及交互数据


//字体语言编码
user_pref("font.name.serif.zh-CN", "Arial");//衬线字体
user_pref("font.name.sans-serif.zh-CN", "Arial");//无衬线字体
user_pref("font.name.monospace.zh-CN", "Arial");//等宽字体

//*==========标签相关==========*//
user_pref("browser.tabs.loadBookmarksInTabs", true);//新标签打开书签
user_pref("browser.tabs.warnOnClose", false);//关闭多个标签时不提示
user_pref("browser.tabs.warnOnCloseOtherTabs", false);//关闭其它标签时不提示
user_pref("browser.tabs.closeWindowWithLastTab", false);//关闭最后一个标签时不关闭Firefox
user_pref("browser.link.open_newwindow.restriction", 0);//单窗口模式(弹出窗口用标签打开)


//*==========下载相关==========*//
user_pref("browser.download.useDownloadDir", false);//下载时每次讯问我要存到何处
user_pref("browser.safebrowsing.downloads.enabled", false);//解决下载卡在最后一秒的问题
user_pref("browser.download.manager.scanWhenDone", false);//关闭下载结束后扫描



//*==========网络相关==========*//
user_pref("security.ssl.enable_ocsp_must_staple", false);//关闭OCSP强制校验, 以确保在网络状况不佳的情况下连接到受SSL保护的站点


//缓存
user_pref("browser.cache.disk.enable", false);//禁用硬盘缓存
user_pref("browser.cache.offline.enable", false);//禁用脱机缓存


//页面加载
user_pref("gfx.webrender.all", true);//启用webrender功能
user_pref("javascript.options.warp", true);//引入了新的Warp在SpiderMonkey JavaScript引擎中的功能
user_pref("browser.startup.preXulSkeletonUI", true);//启用Skeleton UI, 提高整体启动的敏捷性


//*==========FX其它类==========*//

//画中画
user_pref("media.videocontrols.picture-in-picture.video-toggle.always-show", true);


//去除附加组中的"推荐扩展"
user_pref("extensions.htmlaboutaddons.recommendations.enabled", false);
user_pref("extensions.htmlaboutaddons.discover.enabled", false);


//书签相关
user_pref("browser.bookmarks.autoExportHTML", true);//退出时自动备份书签html文件
user_pref("browser.bookmarks.max_backups", 3);//最大备份数目
user_pref("browser.places.smartBookmarksVersion", -1);//禁用智能书签

//单项, 未分类
user_pref("browser.startup.homepage_override.mstone", "ignore");//启动时不弹出"What's New"页面
user_pref("extensions.ui.lastCategory", "addons://list/extension");//默认打开“扩展”项
user_pref("general.warnOnAboutConfig", false);//AboutConfig警告
user_pref("accessibility.force_disabled", 1); //禁用无障碍环境
user_pref("browser.safebrowsing.enabled", false);//关闭欺诈内容和危险软件防护（谷歌网站黑名单）
user_pref("browser.safebrowsing.malware.enabled", false);//关闭欺诈内容和危险软件防护（谷歌网站黑名单）
user_pref("browser.safebrowsing.phishing.enabled", false);//关闭欺诈内容和危险软件防护（谷歌网站黑名单）
user_pref("browser.urlbar.trimURLs", false);//地址栏显示 http://
user_pref("ui.scrollToClick", 1); //点击滚动条将能够直接让你调转到页面上你想要查看的那点
user_pref("toolkit.legacyUserProfileCustomizations.stylesheets", true);//69以后自动加载 userChrome.ss 和 userContent.css
user_pref("dom.webcomponents.shadowdom.enabled", true);//脚本"本地 YouTube 下载器"建议开启
user_pref("extensions.pocket.enabled", false);//自带pocket(禁用,功能太简略,无法离线查看列表)
user_pref("browser.sessionstore.interval", 3600000);//(单位: ms)限制recovery.js文件的写入操作: 默认15s, 改为1小时



/******************************************************************************************
 *这里是个人设置。
 *******************************************************************************************/

//*==========主页==========*//
user_pref("browser.startup.page", 1);//启动Firefox时显示主页
user_pref("browser.startup.homepage", "about:newtab");//首页
//标签页固定的网站(16个)
user_pref("browser.newtabpage.pinned", "[{\"url\":\"https://hbr.org/\",\"title\":\"HBR\"},{\"url\":\"http://www.economist.com/\",\"title\":\"Economist\"},{\"url\":\"http://www.npr.org/\",\"title\":\"NPR\"},{\"url\":\"https://www.wsj.com/\",\"title\":\"wsj\"},{\"url\":\"http://www.ft.com/\",\"title\":\"ft.com\"},{\"url\":\"https://www.youtube.com/\",\"title\":\"Youtube\"},{\"url\":\"https://www.bilibili.com/\",\"title\":\"Bilibili\"},{\"url\":\"https://tophub.today/\",\"title\":\"今日热榜\"},{\"url\":\"https://dig.chouti.com/\",\"title\":\"抽屉\"},{\"url\":\"https://www.guancha.cn/\",\"title\":\"观察者网\"},{\"url\":\"http://bbs.kafan.cn/forum-215-1.html\",\"title\":\"卡饭\"},{\"url\":\"https://www.ithome.com/\",\"title\":\"IT之家\"},{\"url\":\"http://www.cnbeta.com/\",\"title\":\"cnbeta\"},{\"url\":\"http://www.zhihu.com/\",\"title\":\"知乎\"},{\"url\":\"https://36kr.com/\",\"title\":\"36Kr\"},{\"url\":\"https://www.huxiu.com/\",\"title\":\"虎嗅\"}]");
user_pref("browser.newtabpage.activity-stream.topSitesRows", 2);//常用网站2行展示
user_pref("browser.newtabpage.activity-stream.feeds.snippets", false);//不展示只言片语
user_pref("browser.newtabpage.activity-stream.feeds.section.highlights", false);//不展示集锦
user_pref("browser.newtabpage.activity-stream.showSponsoredTopSites", false);//不展示赞助商网站
user_pref("browser.newtabpage.activity-stream.asrouter.userprefs.cfr.addons", false);//在您浏览时推荐扩展(否)
user_pref("browser.newtabpage.activity-stream.asrouter.userprefs.cfr.features", false);//在您浏览时推荐新功能(否)

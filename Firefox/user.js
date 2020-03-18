//2020.03.18

/*
# pref(key,value) 会覆盖默认设置,在删除之后会恢复默认设置.
# user_pref(key,value)等同于从about:config修改,删除之后,修改的设置仍然有效.
*/

/*************************************************************************************
# Note:
- OurSticky扩展导致百度网盘离线下载添加BT种子时窗口无法弹出
- Don't Fuck with my Scrolling脚本会导致某些直播视频无法加载
 *************************************************************************************/

/******************************************************************************************
 *这里是通用设置。
 *******************************************************************************************/

//*==========选项卡里的设置==========*//
user_pref("privacy.userContext.enabled", true);//启用身份标签页
user_pref("signon.rememberSignons", false);//不保存密码
user_pref("browser.shell.checkDefaultBrowser", false);//总是检查是否为默认浏览器(否)
user_pref("browser.search.update", false);//禁用搜索引擎自动更新
user_pref("browser.search.suggest.enabled", false);//禁用搜索建议
user_pref("privacy.donottrackheader.enabled", true);//请勿跟踪(一律发送)
user_pref("browser.newtabpage.activity-stream.asrouter.userprefs.cfr.addons", false);//在您浏览时推荐扩展(否)
user_pref("browser.newtabpage.activity-stream.asrouter.userprefs.cfr.features", false);//在您浏览时推荐新功能(否)


//字体语言编码
user_pref("font.name.serif.zh-CN", "Arial");//衬线字体
user_pref("font.name.sans-serif.zh-CN", "Arial");//无衬线字体
user_pref("font.name.monospace.zh-CN", "Arial");//等宽字体

//自带跟踪保护
//user_pref("browser.contentblocking.enabled", false);//总开关：master switch for all content blocking features (includes tracking protection, but excludes tracking annotations)
//user_pref("browser.contentblocking.category", "custom");//类型：自定义保护
//user_pref("privacy.trackingprotection.enabled", false);//to enable TP globally
//user_pref("network.cookie.cookieBehavior", 0);//内容拦截: cookie(否)
//user_pref("privacy.trackingprotection.cryptomining.enabled", false);//跟踪性内容
//user_pref("privacy.trackingprotection.pbmode.enabled", false);//加密货币挖矿程序
//user_pref("privacy.trackingprotection.fingerprinting.enabled", false);//数字指纹跟踪


//*==========标签相关==========*//
user_pref("browser.tabs.loadBookmarksInTabs", true);//新标签打开书签
user_pref("browser.tabs.warnOnClose", false);//关闭多个标签时不提示
user_pref("browser.tabs.warnOnCloseOtherTabs", false);//关闭其它标签时不提示
user_pref("browser.tabs.closeWindowWithLastTab", false);//关闭最后一个标签时不关闭Firefox
user_pref("browser.link.open_newwindow.restriction", 0);//单窗口模式(弹出窗口用标签打开)
user_pref("browser.urlbar.update1", false);//关闭Firefox72的urlbar放大功能


//*==========下载相关==========*//
user_pref("browser.download.useDownloadDir", false);//下载时每次讯问我要存到何处
user_pref("browser.safebrowsing.downloads.enabled", false);//解决下载卡在最后一秒的问题
user_pref("browser.download.manager.scanWhenDone", false);//关闭下载结束后扫描


//*==========网络相关==========*//
user_pref("network.security.esni.enabled", true);//加密SNI,让 HTTPS 连接不再暴露SNI域名地址
user_pref("network.IDN_show_punycode", true);//避免钓鱼


//画中画
user_pref("media.videocontrols.picture-in-picture.enabled", true);
user_pref("media.videocontrols.picture-in-picture.video-toggle.always-show", true);
user_pref("media.videocontrols.picture-in-picture.video-toggle.enabled", true);


//去除附加组中的"推荐扩展"
user_pref("extensions.htmlaboutaddons.recommendations.enabled", false);
user_pref("extensions.htmlaboutaddons.discover.enabled", false);


//书签相关
user_pref("browser.bookmarks.autoExportHTML", true);//退出时自动备份书签html文件
user_pref("browser.bookmarks.max_backups", 5);//最大备份数目
user_pref("browser.places.smartBookmarksVersion", -1);//禁用智能书签


//插件
user_pref("extensions.blocklist.enabled", false);//关闭flash版本过旧被屏蔽的提示

//*==========FX其它类==========*//
user_pref("extensions.ui.lastCategory", "addons://list/extension");//默认打开“扩展”项
user_pref("general.warnOnAboutConfig", false);//AboutConfig警告
user_pref("accessibility.force_disabled", 1); //禁用无障碍环境
user_pref("datareporting.healthreport.uploadEnabled", false);//关闭安全检测健康中心
user_pref("datareporting.policy.dataSubmissionEnabled", false); //关闭安全检测健康中心
user_pref("datareporting.healthreport.service.enabled", false);//禁止遥测往prefs.js写入数据
user_pref("browser.safebrowsing.enabled", false);//关闭欺诈内容和危险软件防护（谷歌网站黑名单）
user_pref("browser.safebrowsing.malware.enabled", false);//关闭欺诈内容和危险软件防护（谷歌网站黑名单）
user_pref("browser.safebrowsing.phishing.enabled", false);//关闭欺诈内容和危险软件防护（谷歌网站黑名单）
user_pref("browser.urlbar.trimURLs", false);//地址栏显示 http://
user_pref("ui.scrollToClick", 1); //点击滚动条将能够直接让你调转到页面上你想要查看的那点
user_pref("browser.startup.homepage_override.mstone", "ignore");//启动时不弹出"What's New"页面
user_pref("browser.rights.3.shown", false);//火狐首次启动时是否已显示的权利通知
user_pref("browser.backspace_action", 2);//禁止Backspace键返回上一页
user_pref("toolkit.legacyUserProfileCustomizations.stylesheets", true);//69以后自动加载 userChrome.ss 和 userContent.css
user_pref("dom.webcomponents.shadowdom.enabled", true);//脚本"本地 YouTube 下载器"建议开启
user_pref("extensions.pocket.enabled", false);//自带pocket(禁用,功能太简略,无法离线查看列表)
user_pref("browser.sessionstore.interval", 600000);//(单位: ms)限制recovery.js文件的写入操作: 默认15s, 改为10分钟



/******************************************************************************************
 *这里是个人设置。
 *******************************************************************************************/

//*==========主页==========*//
user_pref("browser.startup.page", 1);//启动Firefox时显示主页
user_pref("browser.startup.homepage", "about:newtab");//首页
//标签页固定的网站(16个)
user_pref("browser.newtabpage.pinned", "[{\"url\":\"https://hbr.org/\",\"title\":\"HBR\"},{\"url\":\"http://www.economist.com/\",\"title\":\"Economist\"},{\"url\":\"http://www.npr.org/\",\"title\":\"NPR\"},{\"url\":\"https://www.wsj.com/\",\"title\":\"wsj\"},{\"url\":\"http://www.ft.com/\",\"title\":\"ft.com\"},{\"url\":\"https://www.youtube.com/\",\"title\":\"Youtube\"},{\"url\":\"https://www.bilibili.com/\",\"title\":\"Bilibili\"},{\"url\":\"https://tophub.today/\",\"title\":\"今日热榜\"},{\"url\":\"http://bbs.kafan.cn/forum-215-1.html\",\"title\":\"卡饭\"},{\"url\":\"http://www.techweb.com.cn/\",\"title\":\"techweb\"},{\"url\":\"http://www.cnbeta.com/\",\"title\":\"cnbeta\"},{\"url\":\"http://dig.chouti.com/\",\"title\":\"抽屉新热榜\"},{\"url\":\"http://www.zhihu.com/\",\"title\":\"知乎\"},{\"url\":\"https://www.36kr.com/\",\"title\":\"36KR\"},{\"url\":\"https://www.huxiu.com/\",\"title\":\"虎嗅\"},{\"url\":\"http://www.tmtpost.com/\",\"title\":\"钛媒体\"}]");
user_pref("browser.newtabpage.activity-stream.topSitesRows", 2);//常用网站2行展示
user_pref("browser.newtabpage.activity-stream.feeds.snippets", false);//不展示只言片语
user_pref("browser.newtabpage.activity-stream.feeds.section.highlights", false);//不展示集锦

//=========================enjoy ！！！=============================================
// 1. 修改F键的导航功能，按键生成策略。采用左边前两排+v，b的字符。保证不会生成rv，一些让手指弯曲过度的组合按键。使得输入更加流畅
// 2. 添加快速搜索的能力(可以抛弃一键切换插件)(注：xx可以表达为，域名的缩写，比如，github-gh，google-gg。自己可以改配置，加搜索引擎)：
//	a. ";+xx"，携带当前关键字，切换搜索引擎进行搜索
//	b. ";;+xx", 使用当前复制的内容，进行浏览器的搜索
//	c. ";;;+xx", 使用用户输入，在当前页面打开输入框，进行搜索
// 	d. "alt+s"，快速的自动切换搜索引擎，按照顺序进行搜索
//	e. "oa+xx"，使用关键字，同时打开相同类型的搜索引擎，进行搜索。比如，一个关键字将同时打开，google，baidu。
// 3. 添加导航的功能，使用"m+xx"的方式，直接跳转到目标网站（可以抛弃导航插件了）
//================================================================================

//添加按键Hints配置。一定程度上规避，因逻辑上无脑组合按键的生成，导致违背手掌舒适度的问题。
//分析过程 https://github.com/brookhong/Surfingkeys/commit/ebd4aad2f0fd6946538cced005470366f2170ae4
Hints.characters = 'asfqwertvb';


//关于光标定位到地址栏无法定位回页面的问题。
//可以在浏览器设置里面添加特殊的搜索引擎来实现。搜索引擎的地址为javascript:  关键字设置为";" 最好关键字的中英文个添加一个搜索引擎。这样就很ok了。

// 1.冲突修改
//与浏览器冲突部分,个人认为它更好
// 移除与浏览器的冲突 查看下载历史，历史记录
unmap('<Ctrl-j>');
iunmap('<Ctrl-j>');
vunmap('<Ctrl-j>');
unmap('<Ctrl-h>');
iunmap('<Ctrl-h>');
vunmap('<Ctrl-h>');


// 2.vimium兼容。个人认为vimium逻辑更好
// 相当于是<Shift-[jkhl]>
map('H','S'); // 历史后退
map('L','D'); // 历史前进
map('J','E'); // tab向左
map('K','R'); // tab向右


// 3.当前搜索结果选取，各种按键冲突和不灵。<ctrl-n>是个问题会打开新的窗口，而且<ctrl-.>，<ctrl-，>不起作用
// 个人设置的搜索结果快捷键。 采用vim的逻辑。 
// 相当于是<alt-[jkhl]> 。 原本想采用<ctrl-[jkhl]>，但 ctrl-k 等容易和浏览器快捷键冲突
// jk上下条目，hl,左右页条目 
//cmap('<Alt-j>','<Ctrl-n>');
//cmap('<Alt-k>','<Ctrl-p>');
//cmap('<Alt-l>','<Ctrl-.>');
//cmap('<Alt-h>','<Ctrl-,>');
//cmap和map是不冲突的。
//那么alt键的引入没必要了。因为他本来就不属于vim和emacs，那么直接用<Shift-[jkhl]>，和兼容vimium一样的逻辑就行了。减少新键位的引入。同时使用上更舒适
//cmap('J','<Ctrl-n>');
//cmap('K','<Ctrl-p>');
//cmap('L','<Ctrl-.>');
//cmap('H','<Ctrl-,>');
//又发现新问题。搜索结果还是不应该用<Shift-[jkhl]>。因为牵扯到大写jkhl的输入问题。
//还是改回来吧。<alt-[jkhl]>
cmap('<Alt-j>','<Ctrl-n>');
cmap('<Alt-k>','<Ctrl-p>');
cmap('<Alt-l>','<Ctrl-.>');
cmap('<Alt-h>','<Ctrl-,>');

//4 扩展js，交互其他

//和toby插件进行交互
function openTobyHtml(){
	tabOpenLink("chrome-extension://gfdcgfhkelkdmglklfbndgopaihmoeci/toby.html");	
}
mapkey('ot', '打开toby页面', openTobyHtml);


//5 final.set theme 官网主题。调整字体大小
settings.theme= `
:root {
    --theme-ace-bg:#282828ab; /*Note the fourth channel, this adds transparency*/
    --theme-ace-bg-accent:#3c3836;
    --theme-ace-fg:#ebdbb2;
    --theme-ace-fg-accent:#7c6f64;
    --theme-ace-cursor:#928374;
    --theme-ace-select:#458588;
}
#sk_editor {
    height: 50% !important; /*Remove this to restore the default editor size*/
    background: var(--theme-ace-bg) !important;
}
.sk_theme {
   font-size: 11pt;
}
#sk_omnibar {
   width: 46%;
   left: 28%;
   opacity: 1;
}
#sk_omnibar_middle{
   top: 25%;
}
.sk_theme #sk_omnibarSearchResult>ul>li:nth-child(odd) {
    background: #9194af;
}

.ace-chrome .ace_print-margin, .ace_gutter, .ace_gutter-cell, .ace_dialog{
    background: var(--theme-ace-bg-accent) !important;
}
.ace_dialog-bottom{
    border-top: 1px solid var(--theme-ace-bg) !important;
}
.ace-chrome{
    color: var(--theme-ace-fg) !important;
}
.ace_gutter, .ace_dialog {
    color: var(--theme-ace-fg-accent) !important;
}
.ace_cursor{
    color: var(--theme-ace-cursor) !important;
}
.normal-mode .ace_cursor{
    background-color: var(--theme-ace-cursor) !important;
    border: var(--theme-ace-cursor) !important;
}
.ace_marker-layer .ace_selection {
    background: var(--theme-ace-select) !important;
} `

// 6 添加一个自己写的逻辑。实现一键切换插件的逻辑，甚至还有增强
//=====================faster search engine swither====================start

//{mapkey,siteName,keywordRegex,searchUrl}   commonUseMapkey:(s,search)(v,videa)(c,code)(g,shop)
var switchSearchConfigs=[
	{commonUseMapKey:'s',mapkey:';gg',siteName:'google',keywordRegex: getRegExp('www.google.com/search','q'),searchUrl:'https://www.google.com/search?q=%s'},
	{commonUseMapKey:'s',mapkey:';bd',siteName:'baidu',keywordRegex: getRegExp('www.baidu.com/s','wd'),searchUrl:'https://www.baidu.com/s?wd=%s'},
	{commonUseMapKey:'v',mapkey:';yt',siteName:'youtube',keywordRegex: getRegExp('www.youtube.com/results','search_query'),searchUrl:'https://www.youtube.com/results?search_query=%s'},
	{commonUseMapKey:'c',mapkey:';gh',siteName:'github',keywordRegex: getRegExp('github.com/search','q'),searchUrl:'https://github.com/search?o:desc&q=%s&s:stars&type:Repositories'},
	{commonUseMapKey:'v',mapkey:';bb',siteName:'bilibili',keywordRegex: getRegExp('search.bilibili.com/all','keyword'),searchUrl:'https://search.bilibili.com/all?keyword=%s'},
	{commonUseMapKey:'g',mapkey:';jd',siteName:'jd',keywordRegex: getRegExp('search.jd.com/[Ss]earch','keyword'),searchUrl:'https://search.jd.com/Search?keyword=%s'},
	{commonUseMapKey:'g',mapkey:';tb',siteName:'taobao',keywordRegex: getRegExp('s.taobao.com/search','q'),searchUrl:'https://s.taobao.com/search?q=%s'},
	{commonUseMapKey:'v',mapkey:';xg',siteName:'西瓜',keywordRegex: getRegExp('www.ixigua.com/search','keyword'),searchUrl:'https://www.ixigua.com/search?keyword=%s'},
	{commonUseMapKey:'s',mapkey:';sm',siteName:'神马',keywordRegex: getRegExp('so.m.sm.cn/s','q'),searchUrl:'https://so.m.sm.cn/s?q=%s'}, 
//新增加的搜索引擎startpage
	{commonUseMapKey:'s',mapkey:';ss',siteName:'Startpage',keywordRegex: getRegExp('www.startpage.com/sp/search','query'),searchUrl:'https://www.startpage.com/sp/search?query=%s'}
];

function getRegExp(urlBeforeParam,searchParamKey){
    //ep. ^http[s]{0,1}://www.google.com/search\?.*?[&]{0,1}q=([^&]*)?.*$
	var regStr='^http[s]{0,1}://'+urlBeforeParam+'\?.*?[&]{0,1}'+searchParamKey+'=([^&]*)?.*$';
	return new RegExp(regStr);
}
function getCurrentKeywordAndMapkey(){
	var currentURL=window.location.href;
	for(var i=0,len=switchSearchConfigs.length ; i<len ; i++){
		var searchConfig=switchSearchConfigs[i];
		if(searchConfig.keywordRegex.test(currentURL)){
			var currentKeywordAndMapkey={keyword:RegExp.$1,mapkey:searchConfig.mapkey};
			return currentKeywordAndMapkey;	
		}
	}
}
function getTargetSearchSiteConfig(mapkey){
	for(var i=0,len=switchSearchConfigs.length ; i<len ; i++){
		var searchConfig=switchSearchConfigs[i];
		if(searchConfig.mapkey==mapkey){
			return searchConfig;	
		}
	}		
}
function switchSearchEngineWithKeywordByMapKey(mapkey){
	var currentKeywordAndMapkey=getCurrentKeywordAndMapkey();
	if(!currentKeywordAndMapkey || currentKeywordAndMapkey.length<1 || !currentKeywordAndMapkey.keyword || currentKeywordAndMapkey.keyword<1){
		return;		
	}

	switchSearchEngin(currentKeywordAndMapkey,mapkey);
}
function switchSearchEngin(currentKeywordAndMapkey,mapkey){
    var targetSearchSiteConfig=getTargetSearchSiteConfig(mapkey);
	if(!targetSearchSiteConfig ||　targetSearchSiteConfig.searchUrl.length<1){
		return;
	}
	var targetURLHref=targetSearchSiteConfig.searchUrl.replace('%s',currentKeywordAndMapkey.keyword);
	window.location.href=encodeURI(decodeURI(targetURLHref));
}

function searchWithCopyWordsByMapKey(mapkey){
    var targetSearchSiteConfig=getTargetSearchSiteConfig(mapkey);
	if(!targetSearchSiteConfig ||　targetSearchSiteConfig.searchUrl.length<1){
		return;
	}
	Clipboard.read(function(response) {
        var query = window.getSelection().toString() || response.data;
        if(!query || query.length<1){
        	return;
        }
        var targetURLHref=targetSearchSiteConfig.searchUrl.replace('%s', encodeURIComponent(query));
        tabOpenLink(targetURLHref);      
    });
}
//unmap all key with ';' prefix of default settings

// ;fsDisplay hints to focus scrollable elements
// ;m把鼠标移出最近的元素
// ;w聚焦到主窗口
// ;pj从剪贴板恢复数据
// ;pf用yf复制出来的结果填充表单
// ;pp在当前页粘贴HTML
// ;重复相应的f/F
// ;j关闭下载完毕的提示框   [保留] 不能保留了。会影响 ;jd
// ;cp复制代理信息
// ;ap应用剪贴板中的代理信息
// ;s切换PDF阅读器
// ;t用谷歌翻译选中文本	[保留] 不能保留了。会影响 ;tb
// ;dh删除30天前的所有访问历史记录
// ;db从收藏夹里删除当前网址

// '<Alt-s>' 禁用启动插件，不要，基本没用。下面自动切换搜索引擎使用。
const unmaps = [
  ';fs', ';m', ';w', ';pj', ';pf', ';pp', ';cp', ';ap', ';s', ';dh', ';db','<Alt-s>',';t',';j'
];
unmaps.forEach((u) => {
  unmap(u);
});

//remap ';' as search engine switch prefix
function bindMapKeyForSwitchSearchEngine(){
	for(var i=0,len=switchSearchConfigs.length ; i<len ; i++){
		var searchConfig=switchSearchConfigs[i];
		if(!searchConfig.mapkey || searchConfig.mapkey.length<1){
			continue;
		}
		//notice: use let instead of var
		let mk=searchConfig.mapkey;
		// 1. 使用当前的搜索关键字，换新的搜索引擎 。绑定 （';'+ 两个字母）的快捷键
		mapkey(mk, searchConfig.siteName+ ' 搜索<当前搜索关键字>内容', function (){
		    switchSearchEngineWithKeywordByMapKey(mk);	
		});
		// 2. 使用当前复制的内容，换新的搜索引擎。 绑定 （';;'+ 两个字母）的快捷键
		var mkForCopyWord=';'+mk;
		mapkey(mkForCopyWord, searchConfig.siteName + ' 搜索<复制>内容', function (){
		    searchWithCopyWordsByMapKey(mk);	
		});
		// 3. 在当前页面打开搜索框，输入关键字，换新的搜索引擎。 绑定（';;;'+ 两个字母）的快捷键
		var mkForInput=';;'+mk;
		//addSearchAlias(alias, prompt, url, suggestionURL, listSuggestion)
		let searchAlias=mk.replace(';','');
		var url=searchConfig.searchUrl.replace('%s','{0}');
		var listSuggestion=url;
		addSearchAlias(searchAlias,searchConfig.siteName,url,'s',listSuggestion);
		mapkey(mkForInput, searchConfig.siteName + ' 搜索<输入>内容', function() {
		    Front.openOmnibar({type: "SearchEngine", extra: searchAlias});
		});
	}	
}
// 约定，所有的新增的关键字搜索切换，使用';'前缀 。 ep.   百度= ;bd YouTube= ; yt
bindMapKeyForSwitchSearchEngine();

//auto switch by default order 
function switchSearchEngineWithKeywordByOrder(){
	var searchOrder=[';gg',';bd',';sm'];
	var currentKeywordAndMapkey=getCurrentKeywordAndMapkey();
	if(!currentKeywordAndMapkey && !currentKeywordAndMapkey.mapkey){
		return;
	}
	for(var i=0,len=searchOrder.length ; i<len ; i++){
		if(currentKeywordAndMapkey.mapkey==searchOrder[i]){
			var loopIndex=(i+1)%searchOrder.length;
			var targetMapkey=searchOrder[loopIndex];
			switchSearchEngin(currentKeywordAndMapkey,targetMapkey);
			return;
		}
	}
}

mapkey('<Alt-s>', '循环切换搜索引擎', switchSearchEngineWithKeywordByOrder);

//open muti search engine
function openMutiSearchEngine(commonUseMapKey){
	if(!commonUseMapKey){
		return;
	}
	var currentKeywordAndMapkey=getCurrentKeywordAndMapkey();
	if(!currentKeywordAndMapkey && !currentKeywordAndMapkey.mapkey){
		return;
	}
	var encodeKeyWord=encodeURIComponent(decodeURIComponent(currentKeywordAndMapkey.keyword));
	for (var i=0,len=switchSearchConfigs.length ; i<len ; i++) {
		var switchSearchConfig=switchSearchConfigs[i];
		if(commonUseMapKey==switchSearchConfig.commonUseMapKey && currentKeywordAndMapkey.mapkey!=switchSearchConfig.mapkey){
        	var targetURLHref=switchSearchConfig.searchUrl.replace('%s', encodeKeyWord);
        	tabOpenLink(targetURLHref); 
		}
	}
}

function bindMapKeyForOpenMutiCommonUse(){
	var commonUse=new Map();
	for (var i = switchSearchConfigs.length - 1; i >= 0; i--) {
		var switchSearchConfig=switchSearchConfigs[i];
		if(!switchSearchConfig.commonUseMapKey || switchSearchConfig.commonUseMapKey==''){
			continue;
		}
		if(commonUse.has(switchSearchConfig.commonUseMapKey)){
			var str=commonUse.get(switchSearchConfig.commonUseMapKey)+"#"+switchSearchConfig.siteName;
			commonUse.set(switchSearchConfig.commonUseMapKey,str);
		}else{
			commonUse.set(switchSearchConfig.commonUseMapKey,switchSearchConfig.siteName);
		}	
	}
	for (var [key, value] of commonUse){
		let bindkey='oa'+key;
		let desc='同时打开:'+value;
		let k=key;
		mapkey(bindkey, desc , function (){
		    openMutiSearchEngine(k);	
		});
	}
}
bindMapKeyForOpenMutiCommonUse();

//=====================faster  search engine swither====================end

//=====================faster web index 充当网页导航的功能================== start
var webShortNameConfig=[
{shortName:'gh',siteName:'github',url:'https://github.com/'},
{shortName:'my',siteName:'码云',url:'https://gitee.com/explore/all'},
{shortName:'jd',siteName:'jd',url:'https://www.jd.com/'},
{shortName:'tb',siteName:'taobao',url:'https://www.taobao.com/'},
{shortName:'jj',siteName:'掘金',url:'https://juejin.im/backend/%E5%85%A8%E9%83%A8'},
{shortName:'ct',siteName:'抽屉',url:'https://dig.chouti.com/'},
{shortName:'yt',siteName:'youtube',url:'https://www.youtube.com/'},
{shortName:'bb',siteName:'bilibili',url:'https://www.bilibili.com/'},
{shortName:'ks',siteName:'快手',url:'https://live.kuaishou.com/cate/my-follow/living'},
{shortName:'hy',siteName:'虎牙',url:'https://www.huya.com/g/seeTogether'},
{shortName:'ve',siteName:'v2ex',url:'https://www.v2ex.com'},
{shortName:'gi',siteName:'my-gist',url:'https://gist.github.com/fanlushuai/'},
{shortName:'xg',siteName:'西瓜视频',url:'https://www.ixigua.com'}
]


var webIndexPrefix='m';
unmap(webIndexPrefix);

function bindMapKeyForWebIndex(){
	for (var i = webShortNameConfig.length - 1; i >= 0; i--) {
		let webIndexConfig=webShortNameConfig[i];
		mapkey(webIndexPrefix+webIndexConfig.shortName, '跳转到--->>>> '+webIndexConfig.siteName, function (){
        		tabOpenLink(webIndexConfig.url);      
		});
	}
}

bindMapKeyForWebIndex();
//=====================faster web index ================== end

Front.registerInlineQuery({
    url: function(q) {
        return `http://dict.youdao.com/w/eng/${q}/#keyfrom=dict2.index`;
    },
    parseResult: function(res) {
        var parser = new DOMParser();
        var doc = parser.parseFromString(res.text, "text/html");
        var collinsResult = doc.querySelector("#collinsResult");
        var authTransToggle = doc.querySelector("#authTransToggle");
        var examplesToggle = doc.querySelector("#examplesToggle");
        if (collinsResult) {
            collinsResult.querySelectorAll("div>span.collinsOrder").forEach(function(span) {
                span.nextElementSibling.prepend(span);
            });
            collinsResult.querySelectorAll("div.examples").forEach(function(div) {
                div.innerHTML = div.innerHTML.replace(/<p/gi, "<span").replace(/<\/p>/gi, "</span>");
            });
            var exp = collinsResult.innerHTML;
            return exp;
        } else if (authTransToggle) {
            authTransToggle.querySelector("div.via.ar").remove();
            return authTransToggle.innerHTML;
        } else if (examplesToggle) {
            return examplesToggle.innerHTML;
        }
    }
});
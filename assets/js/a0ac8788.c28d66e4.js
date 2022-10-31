(self.webpackChunkreact_ts_tradingview_widgets_docs=self.webpackChunkreact_ts_tradingview_widgets_docs||[]).push([[954],{4464:function(t,e,a){"use strict";a.r(e),a.d(e,{frontMatter:function(){return p},metadata:function(){return d},toc:function(){return m},default:function(){return g}});var n=a(2122),l=a(9756),r=(a(7294),a(3905)),i=a(492),o=["components"],p={sidebar_position:11},d={unversionedId:"components/SymbolOverview",id:"components/SymbolOverview",isDocsHomePage:!1,title:"Symbol Overview Widget",description:"This is the React component for the Symbol Overview Widget",source:"@site/docs/components/SymbolOverview.md",sourceDirName:"components",slug:"/components/SymbolOverview",permalink:"/docs/components/SymbolOverview",editUrl:"https://github.com/JorrinKievit/react-ts-tradingview-widgets/edit/master/docs/docs/components/SymbolOverview.md",version:"current",sidebarPosition:11,frontMatter:{sidebar_position:11},sidebar:"tutorialSidebar",previous:{title:"Mini Chart Widget",permalink:"/docs/components/MiniChart"},next:{title:"Symbol Info Widget",permalink:"/docs/components/SymbolInfo"}},m=[{value:"Example",id:"example",children:[]},{value:"Used Public types",id:"public-types",children:[]},{value:"Properties",id:"properties",children:[]},{value:"Default symbols",id:"symbols",children:[]}],k={toc:m};function g(t){var e=t.components,a=(0,l.Z)(t,o);return(0,r.kt)("wrapper",(0,n.Z)({},k,a,{components:e,mdxType:"MDXLayout"}),(0,r.kt)("p",null,"This is the React component for the ",(0,r.kt)("a",{parentName:"p",href:"https://www.tradingview.com/widget/symbol-overview/"},"Symbol Overview Widget")),(0,r.kt)("h2",{id:"example"},"Example"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},'import { SymbolOverview } from "react-ts-tradingview-widgets";\n\n<SymbolOverview colorTheme="dark"\n                autosize\n                chartType="candlesticks"\n                downColor="#800080"\n                borderDownColor="#800080"\n                wickDownColor="#800080" />\n')),(0,r.kt)("div",{className:"height-400"},(0,r.kt)(i.vF,{colorTheme:"dark",autosize:!0,chartType:"candlesticks",downColor:"#800080",borderDownColor:"#800080",wickDownColor:"#800080",mdxType:"SymbolOverview"})),(0,r.kt)("h2",{id:"public-types"},"Used Public types"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Type"),(0,r.kt)("th",{parentName:"tr",align:null},"Value"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"ColorTheme"),(0,r.kt)("td",{parentName:"tr",align:null},"light / dark")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"ScalePosition"),(0,r.kt)("td",{parentName:"tr",align:null},"no / left / right")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"ScaleMode"),(0,r.kt)("td",{parentName:"tr",align:null},"Normal / Percentage / Logarithmic")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"ChartType"),(0,r.kt)("td",{parentName:"tr",align:null},"area / bars / candlesticks")))),(0,r.kt)("h2",{id:"properties"},"Properties"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Property"),(0,r.kt)("th",{parentName:"tr",align:null},"Type"),(0,r.kt)("th",{parentName:"tr",align:null},"Required"),(0,r.kt)("th",{parentName:"tr",align:null},"Default"),(0,r.kt)("th",{parentName:"tr",align:null},"Description"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"symbols"),(0,r.kt)("td",{parentName:"tr",align:null},"string","[][]"),(0,r.kt)("td",{parentName:"tr",align:null},"false"),(0,r.kt)("td",{parentName:"tr",align:null},"See ",(0,r.kt)("a",{parentName:"td",href:"#symbols"},(0,r.kt)("em",{parentName:"a"},(0,r.kt)("strong",{parentName:"em"},"here")))),(0,r.kt)("td",{parentName:"tr",align:null})),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"chartOnly"),(0,r.kt)("td",{parentName:"tr",align:null},"boolean"),(0,r.kt)("td",{parentName:"tr",align:null},"false"),(0,r.kt)("td",{parentName:"tr",align:null},"false"),(0,r.kt)("td",{parentName:"tr",align:null},"Chart only in widget")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"width"),(0,r.kt)("td",{parentName:"tr",align:null},"number/string"),(0,r.kt)("td",{parentName:"tr",align:null},"false"),(0,r.kt)("td",{parentName:"tr",align:null},"1000"),(0,r.kt)("td",{parentName:"tr",align:null},"Sets a static width on the component")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"height"),(0,r.kt)("td",{parentName:"tr",align:null},"number/string"),(0,r.kt)("td",{parentName:"tr",align:null},"false"),(0,r.kt)("td",{parentName:"tr",align:null},"400"),(0,r.kt)("td",{parentName:"tr",align:null},"Sets a static height on the component")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"autosize"),(0,r.kt)("td",{parentName:"tr",align:null},"boolean"),(0,r.kt)("td",{parentName:"tr",align:null},"false"),(0,r.kt)("td",{parentName:"tr",align:null},"false"),(0,r.kt)("td",{parentName:"tr",align:null},"Sets the width and height to 100%")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"colorTheme"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("a",{parentName:"td",href:"#public-types"},(0,r.kt)("em",{parentName:"a"},(0,r.kt)("strong",{parentName:"em"},"ColorTheme")))),(0,r.kt)("td",{parentName:"tr",align:null},"false"),(0,r.kt)("td",{parentName:"tr",align:null},"light"),(0,r.kt)("td",{parentName:"tr",align:null},"Sets the default theme")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"locale"),(0,r.kt)("td",{parentName:"tr",align:null},"string"),(0,r.kt)("td",{parentName:"tr",align:null},"false"),(0,r.kt)("td",{parentName:"tr",align:null},"en"),(0,r.kt)("td",{parentName:"tr",align:null},"Sets the default locale")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"gridLineColor"),(0,r.kt)("td",{parentName:"tr",align:null},"string"),(0,r.kt)("td",{parentName:"tr",align:null},"false"),(0,r.kt)("td",{parentName:"tr",align:null},"#F0F3FA"),(0,r.kt)("td",{parentName:"tr",align:null},"Grid color")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"fontColor"),(0,r.kt)("td",{parentName:"tr",align:null},"string"),(0,r.kt)("td",{parentName:"tr",align:null},"false"),(0,r.kt)("td",{parentName:"tr",align:null},"#787B86"),(0,r.kt)("td",{parentName:"tr",align:null},"Font color")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"isTransparent"),(0,r.kt)("td",{parentName:"tr",align:null},"boolean"),(0,r.kt)("td",{parentName:"tr",align:null},"false"),(0,r.kt)("td",{parentName:"tr",align:null},"false"),(0,r.kt)("td",{parentName:"tr",align:null},"Transparent background for component")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"showFloatingTooltip"),(0,r.kt)("td",{parentName:"tr",align:null},"boolean"),(0,r.kt)("td",{parentName:"tr",align:null},"false"),(0,r.kt)("td",{parentName:"tr",align:null},"true"),(0,r.kt)("td",{parentName:"tr",align:null},"Show floating tooltip")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"scalePosition"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("a",{parentName:"td",href:"#public-types"},(0,r.kt)("em",{parentName:"a"},(0,r.kt)("strong",{parentName:"em"},"ScalePosition")))),(0,r.kt)("td",{parentName:"tr",align:null},"false"),(0,r.kt)("td",{parentName:"tr",align:null},"no"),(0,r.kt)("td",{parentName:"tr",align:null},"Scale position")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"scaleMode"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("a",{parentName:"td",href:"#public-types"},(0,r.kt)("em",{parentName:"a"},(0,r.kt)("strong",{parentName:"em"},"ScaleMode")))),(0,r.kt)("td",{parentName:"tr",align:null},"false"),(0,r.kt)("td",{parentName:"tr",align:null},"Normal"),(0,r.kt)("td",{parentName:"tr",align:null},"Sets the scale type")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"fontFamily"),(0,r.kt)("td",{parentName:"tr",align:null},"string"),(0,r.kt)("td",{parentName:"tr",align:null},"false"),(0,r.kt)("td",{parentName:"tr",align:null},"Trebuchet MS, sans-serif"),(0,r.kt)("td",{parentName:"tr",align:null},"Set the chart font")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"noTimeScale"),(0,r.kt)("td",{parentName:"tr",align:null},"boolean"),(0,r.kt)("td",{parentName:"tr",align:null},"false"),(0,r.kt)("td",{parentName:"tr",align:null},"false"),(0,r.kt)("td",{parentName:"tr",align:null},"Include a time scale or not")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"chartType"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("a",{parentName:"td",href:"#public-types"},(0,r.kt)("em",{parentName:"a"},(0,r.kt)("strong",{parentName:"em"},"ChartType")))),(0,r.kt)("td",{parentName:"tr",align:null},"false"),(0,r.kt)("td",{parentName:"tr",align:null},"area"),(0,r.kt)("td",{parentName:"tr",align:null},"Sets the chart type")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"lineColor"),(0,r.kt)("td",{parentName:"tr",align:null},"string"),(0,r.kt)("td",{parentName:"tr",align:null},"false"),(0,r.kt)("td",{parentName:"tr",align:null},"#2962FF"),(0,r.kt)("td",{parentName:"tr",align:null},"Sets the line color, chartType ",(0,r.kt)("strong",{parentName:"td"},"area")," only.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"bottomColor"),(0,r.kt)("td",{parentName:"tr",align:null},"string"),(0,r.kt)("td",{parentName:"tr",align:null},"false"),(0,r.kt)("td",{parentName:"tr",align:null},"rgba(41, 98, 255, 0)"),(0,r.kt)("td",{parentName:"tr",align:null},"Sets the bottom color, chartType ",(0,r.kt)("strong",{parentName:"td"},"area")," only.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"topColor"),(0,r.kt)("td",{parentName:"tr",align:null},"string"),(0,r.kt)("td",{parentName:"tr",align:null},"false"),(0,r.kt)("td",{parentName:"tr",align:null},"rgba(41, 98, 255, 0.3)"),(0,r.kt)("td",{parentName:"tr",align:null},"Sets the top color, chartType ",(0,r.kt)("strong",{parentName:"td"},"area")," only.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"upColor"),(0,r.kt)("td",{parentName:"tr",align:null},"string"),(0,r.kt)("td",{parentName:"tr",align:null},"false"),(0,r.kt)("td",{parentName:"tr",align:null},"#26a69a"),(0,r.kt)("td",{parentName:"tr",align:null},"Sets the default up color, chartType ",(0,r.kt)("strong",{parentName:"td"},"bars or candlesticks")," only")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"downColor"),(0,r.kt)("td",{parentName:"tr",align:null},"string"),(0,r.kt)("td",{parentName:"tr",align:null},"false"),(0,r.kt)("td",{parentName:"tr",align:null},"#26a69a"),(0,r.kt)("td",{parentName:"tr",align:null},"Sets the default down color, chartType ",(0,r.kt)("strong",{parentName:"td"},"bars or candlesticks")," only")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"borderUpColor"),(0,r.kt)("td",{parentName:"tr",align:null},"string"),(0,r.kt)("td",{parentName:"tr",align:null},"false"),(0,r.kt)("td",{parentName:"tr",align:null},"#26a69a"),(0,r.kt)("td",{parentName:"tr",align:null},"Sets the default borderUp color, chartType ",(0,r.kt)("strong",{parentName:"td"},"candlesticks")," only")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"borderDownColor"),(0,r.kt)("td",{parentName:"tr",align:null},"string"),(0,r.kt)("td",{parentName:"tr",align:null},"false"),(0,r.kt)("td",{parentName:"tr",align:null},"#ef5350"),(0,r.kt)("td",{parentName:"tr",align:null},"Sets the default borderDown color, chartType ",(0,r.kt)("strong",{parentName:"td"},"candlesticks")," only")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"wickUpColor"),(0,r.kt)("td",{parentName:"tr",align:null},"string"),(0,r.kt)("td",{parentName:"tr",align:null},"false"),(0,r.kt)("td",{parentName:"tr",align:null},"#26a69a"),(0,r.kt)("td",{parentName:"tr",align:null},"Sets the default wickUp color, chartType ",(0,r.kt)("strong",{parentName:"td"},"candlesticks")," only")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"wickDownColor"),(0,r.kt)("td",{parentName:"tr",align:null},"string"),(0,r.kt)("td",{parentName:"tr",align:null},"false"),(0,r.kt)("td",{parentName:"tr",align:null},"#ef5350"),(0,r.kt)("td",{parentName:"tr",align:null},"Sets the default wickDown color, chartType ",(0,r.kt)("strong",{parentName:"td"},"candlesticks")," only")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"container_id"),(0,r.kt)("td",{parentName:"tr",align:null},"string"),(0,r.kt)("td",{parentName:"tr",align:null},"false"),(0,r.kt)("td",{parentName:"tr",align:null},"symbol-overview-widget-container"),(0,r.kt)("td",{parentName:"tr",align:null},"Set container_id generated ",(0,r.kt)("a",{parentName:"td",href:"https://www.tradingview.com/widget/advanced-chart/"},"here"))))),(0,r.kt)("h2",{id:"symbols"},"Default symbols"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-json"},'[\n  ["Apple", "AAPL"],\n  ["Google", "GOOGL"],\n  ["Microsoft", "MSFT"]\n]\n')))}g.isMDXComponent=!0}}]);
function initPost(){document.querySelector("#readOnOtherDeviceBtn").addEventListener("click",function(){var e,o=document.querySelector("#mdx_read_on_other_device");"function"!=typeof QRCode?o.innerHTML="Error: QRCode.js is not loaded.":(o.innerHTML="",e=new URL(location.href),new window.QRCode(o,{text:e.origin+e.pathname+"?pos="+window.scrollY,width:128,height:128,colorDark:"#000000",colorLight:"#ffffff",useSVG:!0,correctLevel:window.QRCode.CorrectLevel.H}),o.querySelector("canvas").style.padding="20px 20px 0 20px",o.querySelector("img").style.padding="20px")}),null!==new URL(location.href).searchParams.get("pos")&&window.scroll({top:Number(new URL(location.href).searchParams.get("pos")),left:0,behavior:"smooth"});for(var o=document.querySelector("#mainContent > div.postPage"),e=(document.querySelector("#shareToWechatQRCodeDialog").addEventListener("open.mdui.dialog",function(){var e;o.querySelector("div#shareToWechatQRCodeContainer").innerHTML="",e="function"==typeof URL?(e=new URL(location.href)).origin+e.pathname:location.href,new window.QRCode(o.querySelector("div#shareToWechatQRCodeContainer"),{text:e,width:250,height:250,colorDark:"#000000",colorLight:"#ffffff",useSVG:!0,correctLevel:window.QRCode.CorrectLevel.H})}),o.querySelectorAll("table")),t=0;t<e.length;t++)e[t].classList.add("mdui-table");for(var n=o.querySelectorAll("div.mdx-github-card"),r=0;r<n.length;r++)initGHInfoCard(n[r])}function initGHInfoCard(t){console.log(t);var e=t.getAttribute("data-owner"),o=t.getAttribute("data-repo"),n=new XMLHttpRequest;n.open("GET","https://api.github.com/repos/"+e+"/"+o,!0),n.onload=function(){var e=JSON.parse(n.responseText),o=e.description,e=e.stargazers_count;t.children[0].children[1].children[1].innerText=o,t.children[0].children[2].children[0].innerText="★"+e},n.send()}document.addEventListener("DOMContentLoaded",function(){window.postInited=!0,initPost()}),window.addEventListener("load",function(){!0!==window.postInited&&initPost()}),document.addEventListener("scroll",function(){var e;(window.scrollY||window.pageYOffset)>(window.innerHeight||window.screenY)/2?(document.querySelector("svg#mdxReadProgress").classList.remove("hide"),e=166.5+166.5*(window.scrollY||window.pageYOffset)/document.querySelector("#mainContent > div > div.mdui-card-content.mdui-typo").clientHeight,document.querySelector("circle#mdxReadProgressRing").style.setProperty("stroke-dashoffset",Math.min(e,333))):document.querySelector("svg#mdxReadProgress").classList.add("hide")});
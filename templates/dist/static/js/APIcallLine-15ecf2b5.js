import{aC as t}from"./index-8391854f.js";const a=()=>t.request("get","/api?action=GetLineNames"),r=e=>t.request("post","/api?action=GetLineInfos",{data:e}),o=(e=["LineTemplate"])=>t.request("post","/api?action=GetTemplateInfos",{data:e}),i=e=>t.request("get","/api?action=LineState&name="+e),s=e=>t.request("get",`/api?action=${e}&name= `),c=(e,n)=>t.request("post","/api?action=SetLineInfo&name="+e,{data:n}),u=Object.freeze(Object.defineProperty({__proto__:null,reqApiAction:s,reqGetLineNames:a,reqLineDetail:r,reqLineRowState:i,reqLineTemplate:o,reqSetLineInfo:c},Symbol.toStringTag,{value:"Module"}));export{c as a,a as b,r as c,o as d,i as e,u as f,s as r};
import{d as U,n as c,t as B,r as x,o as F,i as S,j as t,g as r,e as u,h as f,c as M,F as P,v as R,z,ay as k,au as L,_ as H}from"./index-8391854f.js";import{i as V}from"./axios-75d0e659.js";const T=({file:i,reset:o,opctionList:d})=>{const p=new FormData;p.append("file",i);const m={};d.forEach(v=>{m[v]=!0});const _=E.map(v=>m[v]===!0?v+"=yes":v+"=no").join("&");return V.post(`/api?action=ImportRedisConfig&reset=${o}&${_}`,p)},G=({file:i})=>{const o=new FormData;return o.append("file",i),V.post("/api?action=ImportPhoneAttribution",o)},J=({reset:i,opctionList:o})=>{const d={};o.forEach(l=>{d[l]=!0});const m=E.map(l=>d[l]===!0?l+"=yes":l+"=no").join("&");return V.get(`/api?action=ExportRedisConfig&reset=${i}&${m}`)},K=[{name:"声音文件",value:"audiofile"},{name:"sip配置",value:"sip"},{name:"分机配置",value:"exten"},{name:"网关配置",value:"gateway"},{name:"拨号方案和路由",value:"dialplan"},{name:"线路和线路组",value:"line"},{name:"排队",value:"acd"},{name:"队列外呼",value:"queuedialer"},{name:"定时外呼",value:"scheduledialer"},{name:"话术流程",value:"robotflow"},{name:"质检配置",value:"callqc"},{name:"配置文件",value:"configfile"},{name:"模板文件",value:"template"}],E=K.map(i=>i.value),Q={class:"content"},W={class:"exportImport"},X=U({__name:"index",setup(i){const o=c(!1),d=[{name:"声音文件",value:"audiofile"},{name:"sip配置",value:"sip"},{name:"分机配置",value:"exten"},{name:"网关配置",value:"gateway"},{name:"拨号方案和路由",value:"dialplan"},{name:"线路和线路组",value:"line"},{name:"排队",value:"acd"},{name:"队列外呼",value:"queuedialer"},{name:"定时外呼",value:"scheduledialer"},{name:"话术流程",value:"robotflow"},{name:"质检配置",value:"callqc"},{name:"配置文件",value:"configfile"},{name:"模板文件",value:"template"}],p=c(!1),m=c(!0),l=c([]),_=d.map(a=>a.value),v=a=>{l.value=a?_:[],m.value=!1},I=a=>{const e=a.length;p.value=e===_.length,m.value=e>0&&e<_.length},N=async()=>{const a={reset:o.value,opctionList:l.value};await J(a)},y=c([]),C=c([]),$=async(a,e)=>{const b={file:a=a.raw,reset:o.value,opctionList:l.value};y.value=[];try{const s=await T(b);k.success(`${s.message}成功导入${s.result}条`)}catch{k.error("导入失败")}},g=c(),q=a=>{g.value.clearFiles();const e=a[0];e.uid=L(),g.value.handleStart(e)},j=async(a,e)=>{const b={file:a=a.raw};C.value=[];try{const s=await G(b);k.success(`总记录${s.count}条,成功导入了${s.result}条`)}catch{k.error("导入失败")}},O=c(),A=a=>{g.value.clearFiles();const e=a[0];e.uid=L(),g.value.handleStart(e)};return B(async()=>{}),(a,e)=>{const h=x("el-checkbox"),b=x("el-checkbox-group"),s=x("el-button"),w=x("el-upload"),D=x("el-card");return F(),S(D,null,{default:t(()=>[r("div",Q,[r("div",null,[u(h,{modelValue:p.value,"onUpdate:modelValue":e[0]||(e[0]=n=>p.value=n),onChange:v},{default:t(()=>[f(" 全选")]),_:1},8,["modelValue"])]),r("div",null,[u(b,{modelValue:l.value,"onUpdate:modelValue":e[1]||(e[1]=n=>l.value=n),onChange:I},{default:t(()=>[(F(),M(P,null,R(d,n=>u(h,{key:n.value,label:n.value},{default:t(()=>[f(z(n.name),1)]),_:2},1032,["label"])),64))]),_:1},8,["modelValue"])]),r("div",W,[r("div",null,[u(s,{disabled:!l.value.length,onClick:N},{default:t(()=>[f("导出")]),_:1},8,["disabled"])]),r("div",null,[u(w,{ref_key:"upload",ref:g,class:"upload-demo","file-list":y.value,"onUpdate:fileList":e[2]||(e[2]=n=>y.value=n),action:"https://run.mocky.io/v3/9d059bf9-4660-45f2-925d-ce80ad6c4d15",limit:1,"on-exceed":q,"auto-upload":!1,"on-change":$},{trigger:t(()=>[u(s,{disabled:!l.value.length},{default:t(()=>[f("导入")]),_:1},8,["disabled"])]),tip:t(()=>[]),_:1},8,["file-list"])]),r("div",null,[u(h,{modelValue:o.value,"onUpdate:modelValue":e[3]||(e[3]=n=>o.value=n)},{default:t(()=>[f(" 先清除配置")]),_:1},8,["modelValue"])])]),r("div",null,[u(w,{ref_key:"uploadNumber",ref:O,class:"upload-demo","file-list":C.value,"onUpdate:fileList":e[4]||(e[4]=n=>C.value=n),action:"https://run.mocky.io/v3/9d059bf9-4660-45f2-925d-ce80ad6c4d15",limit:1,"on-exceed":A,"auto-upload":!1,"on-change":j},{trigger:t(()=>[u(s,null,{default:t(()=>[f("导入号码归属地数据库")]),_:1})]),tip:t(()=>[]),_:1},8,["file-list"])])])]),_:1})}}});const ee=H(X,[["__scopeId","data-v-9e2d0ce9"]]);export{ee as default};
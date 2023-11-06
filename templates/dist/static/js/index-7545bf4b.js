import{e as o,b1 as H,b2 as ae,r as y,aN as te,h as x,aO as oe,d as ue,n as r,aD as se,p as ne,P as $,o as s,c as d,f as l,g as v,j as _,F as T,v as O,i as C,z as J,aI as de,ai as ie,aj as re,_ as pe}from"./index-8391854f.js";import{_ as ve}from"./MyAutocomplete.vue_vue_type_script_setup_true_lang-0b0173c6.js";import{r as W}from"./APIcallLine-15ecf2b5.js";function ce(h){return typeof h=="function"||Object.prototype.toString.call(h)==="[object Object]"&&!oe(h)}function me(){const h=[{label:"编号",prop:"id",hide:function(){return!0}}],I=[{label:"星期一",value:"1"},{label:"星期二",value:"2"},{label:"星期三",value:"3"},{label:"星期四",value:"4"},{label:"星期五",value:"5"},{label:"星期六",value:"6"},{label:"星期日",value:"0"}],B=()=>{},z=(f,A)=>f.split(";").map(g=>{const w=g.split("|"),D=w[0].trim(),S=w[1].trim();return{label:D,prop:D,component:S,input_type:S,key:D,title:D,dataKey:D,align:"center",cellRenderer:({row:n,index:j,column:i,props:V})=>{let M;return o("div",{onClick:()=>e(n,j,i,V),class:"columnContent"},[V.columns[i.no].input_type==="datetime"&&o("div",{class:"datetime flexMax"},[o(H,{modelValue:n[i.property],"onUpdate:modelValue":c=>n[i.property]=c,type:"datetime",placeholder:"Select date and time",style:{width:"100%"},size:"small",format:"YYYY/MM/DD hh:mm:ss","value-format":"YYYY-MM-DD h:m:s"},null)]),V.columns[i.no].input_type==="date"&&o("div",{class:"date flexMax columnContent"},[o(H,{modelValue:n[i.property],"onUpdate:modelValue":c=>n[i.property]=c,type:"date",placeholder:"Pick a day",disabledDate:p,style:{width:"144px"},size:"small",shortcuts:U,format:"YYYY/MM/DD","value-format":"YYYY-MM-DD"},null)]),V.columns[i.no].input_type==="time"&&o("div",{class:"time flexMax columnContent"},[o(ae,{modelValue:n[i.property],"onUpdate:modelValue":c=>n[i.property]=c,placeholder:"Arbitrary time",size:"small",format:"hh:mm:ss","value-format":"h:m:s"},null)]),V.columns[i.no].input_type==="wday"&&o("div",{class:"time flexMax columnContent"},[o(y("el-select"),{modelValue:n[i.property],"onUpdate:modelValue":c=>n[i.property]=c},ce(M=I.map(c=>o(te,{key:c.value,label:c.label,value:c.value},null)))?M:{default:()=>[M]})]),V.columns[i.no].input_type!=="datetime"&&V.columns[i.no].input_type!=="date"&&V.columns[i.no].input_type!=="time"&&o("div",{class:"time flexMax columnContent"},[x("你配置错了")])])}}}),e=(f,A,F,b)=>{b.columns[A]},p=f=>f.getTime()>Date.now(),U=[];return{createColumns:z,createColumnsDatalist:B,columns:h}}const E=h=>(ie("data-v-e4b235c3"),h=h(),re(),h),_e={class:"valueClass"},ye=E(()=>v("div",null,null,-1)),fe={key:0,class:"string flexMax"},he={key:0},be={key:0,class:""},Ve={class:"checkboxBox"},ke={class:"checkboxTree"},xe={key:1,class:"editArr"},ge={key:2},De={key:1,class:"integer"},Ye={key:2,class:"boolean"},Ce={key:3,class:"file"},we={key:4,class:"array"},Me={key:0,class:"columnClass editArr"},ze={class:"flexMax tableClass"},Ue=E(()=>v("br",null,null,-1)),Ae={key:1,class:""},Se={class:"checkboxBox"},je={class:"header"},Ne=E(()=>v("div",{style:{color:"#409EFF"}},"全选",-1)),Te=E(()=>v("div",{style:{color:"red"}},null,-1)),Oe={class:"checkboxTree"},Ee={key:2,class:"editArr"},Ie={class:"header"},Be={class:"editTree"},Fe={key:3,class:"flexMax"},Le={key:5,class:"datetime flexMax"},Pe={key:6,class:"date flexMax"},$e={key:7,class:"time flexMax"},Je={key:8,class:"wday"},Ke={key:0,class:"wday"},Re={key:1,class:"wday"},He={key:9,class:"flexMax"},We=ue({__name:"index",props:["data"],setup(h){const I=h,{createColumns:B}=me(),z=[{label:"星期一",value:1},{label:"星期二",value:2},{label:"星期三",value:3},{label:"星期四",value:4},{label:"星期五",value:5},{label:"星期六",value:6},{label:"星期日",value:0}];r(),r(!1);const{data:e}=se(I),p=r([]);r([]),e.value.value&&!e.value.state&&(e.value.state="null"),r([]);const U=r([]),f=r([]);r(),r();const A=[],F=u=>u.getTime()>Date.now(),b=r([]),g=r(""),w=ne({get(){return p.value.length===n.value.length},set(u){u?n.value=p.value:n.value=[]}});function D(u,a,m){return m!=="inner"}r(),r(),r(!0),r(!1),r(),r(0);const S=({row:u,rowIndex:a})=>{},n=r([]);let j=()=>{};const i=r(),V=(u,a,m)=>{i.value=u},M=()=>{i.value||alert("请选中"),f.value=f.value.filter(u=>u!==i.value)};(function(){if(e.value.input_type==="string"){if(Array.isArray(e.value.input_candidate))return;if(e.value.input_candidate&&(p.value=JSON.parse(JSON.stringify(e.value.input_candidate.split(","))),typeof e.value.value=="string"?n.value=e.value.value.split(","):typeof e.value.value=="object"&&(n.value=e.value.value),e.value.input_candidate.includes("api:"))){if(!p.value.join(",").includes("api:"))return;e.value.input_candidate.split(",").map(async u=>{if(u.includes("api:")){const a=u.substring(4),{result:m}=await W(a);p.value=p.value.filter(Y=>u!==Y),p.value.push(...m)}})}}else if(e.value.input_type==="array")if(e.value.input_column){$(f,()=>{e.value.value=f.value},{deep:!0});const u=B(e.value.input_column,e.value.value);U.value=u,Array.isArray(e.value.value)&&(f.value=e.value.value),j=()=>{const a={};u.forEach(m=>{a[m.label]=""}),f.value.push(a)}}else if(e.value.input_selectonly){if(p.value=JSON.parse(JSON.stringify(e.value.input_candidate.split(","))),typeof e.value.value=="string"?n.value=e.value.value.split(","):typeof e.value.value=="object"&&(n.value=e.value.value),n.value=n.value.filter(u=>u!==""),$(n,(u,a)=>{e.value.value=n.value.join(",")},{deep:!0}),e.value.input_candidate.includes("api:")){if(!p.value.join(",").includes("api:"))return;e.value.input_candidate.split(",").map(async u=>{if(u.includes("api:")){const a=u.substring(4),{result:m}=await W(a);p.value=p.value.filter(Y=>u!==Y),p.value.push(...m)}}),n.value=n.value.filter(u=>u!=="")}}else e.value.input_selectonly||(b.value=[],e.value.value||(e.value.value=[]),Array.isArray(e.value.value)||(e.value.value=e.value.value.split(",")),b.value=e.value.value.map(u=>({label:u})),$(b,()=>{e.value.value=b.value.map(u=>u.label)},{deep:!0}))})();const c=u=>{if(g.value.trim()==="")return;const a={label:g.value};b.value.push(a),g.value=""},q=u=>{const a=b.value.filter(m=>m!==u);b.value=a},G=u=>{n.value=n.value.filter(a=>a!=="")};return(u,a)=>{const m=y("el-option"),Y=y("el-select"),k=y("el-input"),L=y("el-checkbox"),Q=y("el-tag"),X=y("pure-table"),N=y("el-button"),K=y("el-card"),Z=y("el-checkbox-group"),ee=y("el-tree"),R=y("el-date-picker"),le=y("el-time-picker");return s(),d("div",_e,[ye,l(e).input_type==="string"?(s(),d("div",fe,[l(e).input_candidate?(s(),d("div",he,[l(e).input_selectonly===!0?(s(),d("div",be,[v("div",Ve,[v("div",ke,[o(Y,{modelValue:l(e).value,"onUpdate:modelValue":a[0]||(a[0]=t=>l(e).value=t),class:"m-2",placeholder:"请选择",size:"small"},{default:_(()=>[(s(!0),d(T,null,O(p.value,t=>(s(),C(m,{key:t,label:t,value:t},null,8,["label","value"]))),128))]),_:1},8,["modelValue"])])])])):(s(),d("div",xe,[o(ve,{modelValue:l(e).value,"onUpdate:modelValue":a[1]||(a[1]=t=>l(e).value=t),dataList:p.value},null,8,["modelValue","dataList"])]))])):l(e).input_echomode===2||l(e).input_echomode===3?(s(),C(k,{key:1,"show-password":"",modelValue:l(e).value,"onUpdate:modelValue":a[2]||(a[2]=t=>l(e).value=t),size:"small",placeholder:l(e).placeholder},null,8,["modelValue","placeholder"])):(s(),d("div",ge,[o(k,{type:"text",modelValue:l(e).value,"onUpdate:modelValue":a[3]||(a[3]=t=>l(e).value=t),size:"small",placeholder:l(e).placeholder},null,8,["modelValue","placeholder"])]))])):l(e).input_type==="integer"?(s(),d("div",De,[o(k,{modelValue:l(e).value,"onUpdate:modelValue":a[4]||(a[4]=t=>l(e).value=t),size:"small",type:"number",placeholder:l(e).placeholder},null,8,["modelValue","placeholder"])])):l(e).input_type==="boolean"?(s(),d("div",Ye,[o(L,{modelValue:l(e).value,"onUpdate:modelValue":a[5]||(a[5]=t=>l(e).value=t),size:"small"},null,8,["modelValue"])])):l(e).input_type==="file"?(s(),d("div",Ce,[o(Q,null,{default:_(()=>[x(" 文件"+J(l(e).value),1)]),_:1}),x(" "+J(l(e).value),1)])):l(e).input_type==="array"?(s(),d("div",we,[l(e).input_column?(s(),d("div",Me,[o(K,null,{default:_(()=>[v("div",ze,[o(X,{data:f.value,columns:U.value,"row-key":"key",border:"","default-expand-all":"",class:"mb-6 flexMax","highlight-current-row":"",onRowClick:V,"empty-text":"","row-style":S,width:"100%"},null,8,["data","columns"]),v("div",null,[o(N,{onClick:l(j),size:"small",type:"primary"},{default:_(()=>[x("添加")]),_:1},8,["onClick"]),o(N,{onClick:a[6]||(a[6]=t=>M()),size:"small",type:"warning"},{default:_(()=>[x("删除")]),_:1})]),Ue])]),_:1})])):l(e).input_selectonly===!0?(s(),d("div",Ae,[v("div",Se,[v("div",je,[o(L,{modelValue:w.value,"onUpdate:modelValue":a[7]||(a[7]=t=>w.value=t),size:"small"},{default:_(()=>[Ne]),_:1},8,["modelValue"]),Te]),v("div",Oe,[o(Z,{modelValue:n.value,"onUpdate:modelValue":a[8]||(a[8]=t=>n.value=t),size:"small",onChange:G},{default:_(()=>[(s(!0),d(T,null,O(p.value,t=>(s(),C(L,{key:t,label:t},null,8,["label"]))),128))]),_:1},8,["modelValue"])])])])):l(e).input_selectonly===!1?(s(),d("div",Ee,[o(K,null,{default:_(()=>[v("div",Ie,[o(k,{modelValue:g.value,"onUpdate:modelValue":a[9]||(a[9]=t=>g.value=t),onKeyup:a[10]||(a[10]=de(t=>c(l(e)),["enter"])),size:"small"},null,8,["modelValue"]),o(N,{onClick:a[11]||(a[11]=t=>c(l(e))),size:"small"},{default:_(()=>[x("添加")]),_:1})]),v("div",Be,[o(ee,{data:b.value,draggable:"","allow-drop":D,"empty-text":""},{default:_(({node:t,data:P})=>[(s(),d("div",{class:"treeArr",key:P.label},[v("div",null,J(P.label),1),v("div",null,[o(N,{smail:"",onClick:qe=>q(P),text:!0,style:{color:"pink"}},{default:_(()=>[x("x")]),_:2},1032,["onClick"])])]))]),_:1},8,["data"])])]),_:1})])):(s(),d("div",Fe,[l(e).input_echomode===2||l(e).input_echomode===3?(s(),C(k,{key:0,type:"password",modelValue:l(e).value,"onUpdate:modelValue":a[12]||(a[12]=t=>l(e).value=t),size:"small",placeholder:l(e).placeholder},null,8,["modelValue","placeholder"])):(s(),C(k,{key:1,type:"text",modelValue:l(e).value,"onUpdate:modelValue":a[13]||(a[13]=t=>l(e).value=t),size:"small",placeholder:l(e).placeholder},null,8,["modelValue","placeholder"]))]))])):l(e).input_type==="datetime"?(s(),d("div",Le,[o(R,{modelValue:l(e).value,"onUpdate:modelValue":a[14]||(a[14]=t=>l(e).value=t),type:"datetime",placeholder:"Select date and time",style:{width:"100% "},size:"small",format:"YYYY/MM/DD hh:mm:ss","value-format":"YYYY-MM-DD h:m:s"},null,8,["modelValue"])])):l(e).input_type==="date"?(s(),d("div",Pe,[x(" 日期 "),o(R,{modelValue:l(e).value,"onUpdate:modelValue":a[15]||(a[15]=t=>l(e).value=t),type:"date",placeholder:"Pick a day","disabled-date":F,style:{width:"144px"},size:"small",shortcuts:A,format:"YYYY/MM/DD","value-format":"YYYY-MM-DD "},null,8,["modelValue"])])):l(e).input_type==="time"?(s(),d("div",$e,[o(le,{modelValue:l(e).value,"onUpdate:modelValue":a[16]||(a[16]=t=>l(e).value=t),placeholder:"Arbitrary time",size:"small",format:"hh:mm:ss","value-format":"h:m:s"},null,8,["modelValue"])])):l(e).input_type==="wday"?(s(),d("div",Je,[l(e).type==="array"?(s(),d("div",Ke,[o(Y,{modelValue:l(e).value,"onUpdate:modelValue":a[17]||(a[17]=t=>l(e).value=t),multiple:"","collapse-tags":"","collapse-tags-tooltip":"",placeholder:"Select",style:{width:"240px"}},{default:_(()=>[(s(),d(T,null,O(z,t=>o(m,{key:t.value,label:t.label,value:t.value},null,8,["label","value"])),64))]),_:1},8,["modelValue"])])):(s(),d("div",Re,[o(Y,{modelValue:l(e).value,"onUpdate:modelValue":a[18]||(a[18]=t=>l(e).value=t)},{default:_(()=>[(s(),d(T,null,O(z,t=>o(m,{key:t.value,label:t.label,value:t.value},null,8,["label","value"])),64))]),_:1},8,["modelValue"])]))])):(s(),d("div",He,[l(e).input_echomode===3||l(e).input_echomode===4?(s(),C(k,{key:0,"show-password":"",modelValue:l(e).value,"onUpdate:modelValue":a[19]||(a[19]=t=>l(e).value=t),size:"small",placeholder:l(e).placeholder},null,8,["modelValue","placeholder"])):(s(),C(k,{key:1,type:"text",modelValue:l(e).value,"onUpdate:modelValue":a[20]||(a[20]=t=>l(e).value=t),size:"small",placeholder:l(e).placeholder},null,8,["modelValue","placeholder"]))]))])}}});const Ze=pe(We,[["__scopeId","data-v-e4b235c3"]]);export{Ze as V};
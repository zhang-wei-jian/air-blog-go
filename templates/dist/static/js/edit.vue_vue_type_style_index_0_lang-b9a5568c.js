import{b as O,c as R,d as E,a as j}from"./useRowConversionTree-f86c56ba.js";import{V as L}from"./index-7545bf4b.js";import{d as z,n as l,P as S,a0 as J,r as c,o as v,c as h,g as a,e as p,j as y,z as N,f as C,C as w,i as $,h as M,Q as P}from"./index-8391854f.js";const Q={class:"dialog-Wrap"},U=a("div",{class:"headerDiv"},null,-1),W={key:0},G={key:1,class:"titleName"},H=a("h2",null," CTI ",-1),K={class:"treeData"},X=["title"],Y={class:"valueDiv"},Z={class:P({state:!0})},ee=["title"],te={class:"dialog-footer"},le=z({__name:"edit",props:{selctionRow:Object,visible:Number},emits:["handleCloseVisiable","upData"],setup(T,{emit:_}){const u=T;l(!1);let r=l({});const o=l(),b=l();let d=l([]),f=l([]);const q={attributes:!0,attributeFilter:["class"]},F=(e,t)=>{const s=new MutationObserver((g,D)=>{for(let m of g)m.type==="attributes"&&m.attributeName==="class"&&d.value.forEach(i=>{i.className.includes("arrStyle")||i.classList.add("arrStyle")})});return f.value.push(s),s};S(b,()=>{b.value.$el.querySelectorAll(".el-tree-node").forEach(e=>{if(e.querySelector(".array")&&!e.querySelector(".el-tree-node")){d.value.push(e);const t=F();f.value.push(t),f.value.forEach(s=>{s.observe(d.value[d.value.length-1],q)}),e.classList.add("arrStyle")}})});const V=l(!!u.visible),k=e=>{if(V.value=!1,e===void 0)for(let t in r)r[t]="";else e.resetFields(),r.id="";_("handleCloseVisiable")},x=l();J({name:[{required:!0,message:"线路名称不能为空",trigger:"blur"},{min:2,max:20,message:"线路名称为3～20个字符",trigger:"blur"}],caller:[{required:!0,message:"线路名称不能为空",trigger:"blur"}],dialstr:[{required:!0,message:"拨号串不能为空",trigger:"blur"}],rest:[{type:"number",required:!0,trigger:"blur",min:5,max:600,validator:(e,t,s)=>{if(!t)return s(new Error("呼叫间隔不能为空"));if(!Number.isInteger(t))return s(new Error("呼叫间隔为5～600秒之间的整数值"));if(t<5||t>600)return s(new Error("呼叫间隔为5～600秒之间的整数值"));s()}}],count:[{required:!0,message:"呼叫并发不能为空",trigger:"blur"},{type:"number",min:1,max:100,message:"呼叫并发范围为1～100",trigger:"blur"}],timeout:[{required:!0,message:"呼叫超时不能为空",trigger:"blur"},{type:"number",min:40,max:300,message:"呼叫超时范围为40～300",trigger:"blur"}]});const I=async e=>{e&&await e.validate((t,s)=>{if(t)switch(u.visible){case 1:A(),k(e);break;case 2:B(),k(e);break}})},A=()=>{_("upData",o,r.value.itemName)},B=()=>{_("upData",o,r.value.itemName)};return S(()=>u.visible,(e,t)=>{V.value=!!e,e===1?(r.value=JSON.parse(JSON.stringify(u.selctionRow)),o.value=O(r.value),o.value=R(r.value)):e===2&&(r.value.itemName="",o.value=E(j().thisTemplate))}),(e,t)=>{const s=c("el-input"),g=c("el-tree"),D=c("el-form"),m=c("el-button");return v(),h("div",Q,[a("div",null,[U,p(D,{model:o.value,ref_key:"ruleFormRef",ref:x,"label-width":"120px"},{default:y(()=>[u.visible===1?(v(),h("h2",W," CTI"+N(C(r).itemName),1)):w("",!0),u.visible===2?(v(),h("div",G,[H,p(s,{modelValue:C(r).itemName,"onUpdate:modelValue":t[0]||(t[0]=i=>C(r).itemName=i)},null,8,["modelValue"])])):w("",!0),p(g,{data:o.value,"node-key":"id","default-expand-all":"","expand-on-click-node":!1,id:"treeId",ref_key:"treeId",ref:b},{default:y(({node:i,data:n})=>[a("div",K,[a("span",{class:"label",title:n.help},N(i.label||n.name),9,X),a("div",Y,[n.type!=="object"?(v(),$(L,{data:n,key:n.key},null,8,["data"])):w("",!0)]),a("div",Z,[a("span",{title:n.help},N(n.help),9,ee)])])]),_:1},8,["data"])]),_:1},8,["model"]),a("span",te,[p(m,{type:"primary",onClick:t[1]||(t[1]=i=>I(x.value))},{default:y(()=>[M("确 定")]),_:1})])])])}}});export{le as _};

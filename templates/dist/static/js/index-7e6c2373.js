import{d as v,r as s,o as R,c as b,w as n,R as l,f as e,e as o,j as t,h as d,aM as B,bl as D,_ as E}from"./index-8391854f.js";import{useColumns as N}from"./hook-8755b915.js";import"./edit-pen-af58ba35.js";import"./check-3815600c.js";import"./ctiTemplate-08e25d3b.js";import"./browser-5e8f72a1.js";import"./index-46334353.js";const V=v({__name:"index",setup(j){const{columns:m,dataList:i,rowClickHandle:f,currentParent:_,currentRow:a,addRow:r,addRowChilren:C,deleteRow:k,moveRowDown:w,moveRowUp:h,autoExpand:g,loading:x}=N();return(H,I)=>{const c=s("el-button"),u=s("el-card"),p=s("el-icon"),y=s("pure-table");return R(),b("div",null,[n(o(u,null,{default:t(()=>[n(o(c,{type:"success",onClick:e(r)},{default:t(()=>[d("添加行")]),_:1},8,["onClick"]),[[l,e(i).length===0]])]),_:1},512),[[l,!e(_)&&!e(a)&&e(i).length==0]]),n(o(u,null,{default:t(()=>[n(o(c,{type:"success",onClick:e(r)},{default:t(()=>[d("添加并行")]),_:1},8,["onClick"]),[[l,e(_)]]),n(o(c,{type:"success",onClick:e(C)},{default:t(()=>[d("添加子行")]),_:1},8,["onClick"]),[[l,e(a)]]),n(o(c,{onClick:e(k),type:"danger"},{default:t(()=>[d("删除行")]),_:1},8,["onClick"]),[[l,e(a)]]),n(o(c,{onClick:e(h),type:"warning"},{default:t(()=>[o(p,null,{default:t(()=>[o(e(B))]),_:1})]),_:1},8,["onClick"]),[[l,e(a)]]),n(o(c,{onClick:e(w),type:"warning"},{default:t(()=>[o(p,null,{default:t(()=>[o(e(D))]),_:1})]),_:1},8,["onClick"]),[[l,e(a)]])]),_:1},512),[[l,e(_)||e(a)]]),o(y,{data:e(i),columns:e(m),"row-key":"key",loading:e(x),border:"","default-expand-all":e(g),class:"mb-6",height:600,width:700,"highlight-current-row":"",onRowClick:e(f)},null,8,["data","columns","loading","default-expand-all","onRowClick"])])}}});const z=E(V,[["__scopeId","data-v-e3526ce2"]]);export{z as default};
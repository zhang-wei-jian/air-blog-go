import{d as v,r as d,o as R,c as b,w as n,R as l,f as e,e as o,j as t,h as s,aM as B,bl as D,_ as E}from"./index-8391854f.js";import{useColumns as N}from"./hook-ce38987f.js";import"./edit-pen-af58ba35.js";import"./check-3815600c.js";import"./browser-5e8f72a1.js";import"./index-46334353.js";const V=v({__name:"index",setup(j){const{columns:m,dataList:_,rowClickHandle:f,currentParent:i,currentRow:a,addRow:u,addRowChilren:C,deleteRow:k,moveRowDown:w,moveRowUp:h,autoExpand:g,loading:x}=N();return(H,I)=>{const c=d("el-button"),r=d("el-card"),p=d("el-icon"),y=d("pure-table");return R(),b("div",null,[n(o(r,null,{default:t(()=>[n(o(c,{type:"success",onClick:e(u)},{default:t(()=>[s("添加行")]),_:1},8,["onClick"]),[[l,e(_).length===0]])]),_:1},512),[[l,!e(i)&&!e(a)&&e(_).length==0]]),n(o(r,null,{default:t(()=>[n(o(c,{type:"success",onClick:e(u)},{default:t(()=>[s("添加并行")]),_:1},8,["onClick"]),[[l,e(i)]]),n(o(c,{type:"success",onClick:e(C)},{default:t(()=>[s("添加子行")]),_:1},8,["onClick"]),[[l,e(a)]]),n(o(c,{onClick:e(k),type:"danger"},{default:t(()=>[s("删除行")]),_:1},8,["onClick"]),[[l,e(a)]]),n(o(c,{onClick:e(h),type:"warning"},{default:t(()=>[o(p,null,{default:t(()=>[o(e(B))]),_:1})]),_:1},8,["onClick"]),[[l,e(a)]]),n(o(c,{onClick:e(w),type:"warning"},{default:t(()=>[o(p,null,{default:t(()=>[o(e(D))]),_:1})]),_:1},8,["onClick"]),[[l,e(a)]])]),_:1},512),[[l,e(i)||e(a)]]),o(y,{data:e(_),columns:e(m),"row-key":"key",loading:e(x),border:"","default-expand-all":e(g),class:"mb-6",height:600,width:700,"highlight-current-row":"",onRowClick:e(f)},null,8,["data","columns","loading","default-expand-all","onRowClick"])])}}});const q=E(V,[["__scopeId","data-v-2d44765d"]]);export{q as default};
import{d as B,n as u,r as m,o as L,c as N,e as a,j as l,f as e,h as d,X as P,ay as _,_ as M}from"./index-8391854f.js";import{useRole as $}from"./hook-d3b26160.js";import{A as j,D as q,P as H}from"./add-circle-line-c3a03ea3.js";import{u as h}from"./hooks-ec8eac7d.js";import{_ as O}from"./edit.vue_vue_type_style_index_0_lang-2c5980db.js";import{u as U}from"./useRowConversionTree-f86c56ba.js";import"./useArrConversionMapObj-53d04e92.js";import"./useRowState-f0ac559e.js";import"./APIcallLine-15ecf2b5.js";import"./epTheme-4740f7cd.js";import"./index-7545bf4b.js";import"./MyAutocomplete.vue_vue_type_script_setup_true_lang-0b0173c6.js";const X={class:"main"},G=B({__name:"index",setup(J){let r=u(null),s=u(0);const f=()=>{s.value=0},g=o=>{s.value=2,r.value=o},C=o=>{r.value=o,s.value=1},v=async(o,n)=>{try{const t=U(o.value),p={[n]:t};await I(n,t),E();const i=F.value.includes(n);_.success(i?"修改成功":"添加成功")}catch{_.success("保存失败")}},{loading:b,columns:y,dataList:K,pagination:w,buttonClass:Q,onSearch:x,searchForm:W,searchFormRef:Y,resetForm:Z,handleDelete:S,handleSizeChange:R,handleCurrentChange:k,handleSelectionChange:D,getInitList:E,names:F,reqSetInfo:I,currentData:T}=$();return(o,n)=>{const t=m("el-button"),p=m("el-popconfirm"),i=m("pure-table");return L(),N("div",X,[a(e(H),{title:"列表",onRefresh:e(x)},{buttons:l(()=>[a(t,{type:"primary",icon:e(h)(e(j)),onClick:g},{default:l(()=>[d(" 新增 ")]),_:1},8,["icon"])]),default:l(({size:c,checkList:V})=>[a(i,{border:"","align-whole":"center",showOverflowTooltip:"","table-layout":"auto",loading:e(b),size:c,data:e(T),columns:e(y),checkList:V,pagination:e(w),paginationSmall:c==="small","header-cell-style":{background:"var(--el-table-row-hover-bg-color)",color:"var(--el-text-color-primary)"},onSelectionChange:e(D),onSizeChange:e(R),onCurrentChange:e(k),onRowClick:C},{operation:l(({row:z,index:A})=>[a(p,{title:"是否确认删除?",onConfirm:ee=>e(S)(z,A)},{reference:l(()=>[a(t,{class:"reset-margin",link:"",type:"primary",size:c,icon:e(h)(e(q)),onClick:n[0]||(n[0]=P(()=>{},["stop"]))},{default:l(()=>[d(" 删除 ")]),_:2},1032,["size","icon"])]),_:2},1032,["onConfirm"])]),_:2},1032,["loading","size","data","columns","checkList","pagination","paginationSmall","header-cell-style","onSelectionChange","onSizeChange","onCurrentChange"])]),_:1},8,["onRefresh"]),a(O,{selctionRow:e(r),visible:e(s),onHandleCloseVisiable:f,onUpData:v},null,8,["selctionRow","visible"])])}}});const de=M(G,[["__scopeId","data-v-14782120"]]);export{de as default};

import{aR as C,n as t,a0 as d,p as m,t as S,ax as D}from"./index-8391854f.js";import{u as I}from"./useArrConversionMapObj-53d04e92.js";import{r as w,a as b,b as v,c as y,d as M}from"./APIGateWay-614cc828.js";import{u as G}from"./useRowState-f0ac559e.js";import"./useRowConversionTree-f86c56ba.js";C(new Date).format("YYYY-MM-DD");const B=t({list:[{tenantId:1,id:"clg1001",name:"线路组1",firstLines:[{id:"cl1001",name:"cl1001"},{id:"cl1001",name:"cl1001"}],secondLines:[{id:"cl1003",name:"cl1003"},{id:"cl1004",name:"cl1004"}],redialCount:1,redialRule:{hangup_code:[480,481],hangup_cause:["UNALLOCATED_NUMBER","NO_ROUTE_TRANSIT_NET"],duration:1e4,bill:2e3},noRedialRule:{hangup_code:[480,481],hangup_cause:["UNALLOCATED_NUMBER","NO_ROUTE_TRANSIT_NET"],duration:1e4,bill:2e3},remarks:"呼叫教育线路组",addTime:1678961299821,updateTime:1678961314910},{tenantId:1,id:"clg1002",name:"线路组2",firstLines:[{id:"cl1001",name:"cl1001"},{id:"cl1001",name:"cl1001"}],secondLines:[{id:"cl1003",name:"cl1003"},{id:"cl1004",name:"cl1004"}],redialCount:1,redialRule:{hangup_code:[480,481],hangup_cause:["UNALLOCATED_NUMBER","NO_ROUTE_TRANSIT_NET"],duration:1e4,bill:2e3},noRedialRule:{hangup_code:[480,481],hangup_cause:["UNALLOCATED_NUMBER","NO_ROUTE_TRANSIT_NET"],duration:1e4,bill:2e3},remarks:"",addTime:1678961299821,updateTime:1678961314910},{tenantId:1,id:"clg1003",name:"线路组3",firstLines:[{id:"cl1001",name:"cl1001"},{id:"cl1001",name:"cl1001"}],secondLines:[{id:"cl1003",name:"cl1003"},{id:"cl1004",name:"cl1004"}],redialCount:1,redialRule:{hangup_code:[480,481],hangup_cause:["UNALLOCATED_NUMBER","NO_ROUTE_TRANSIT_NET"],duration:1e4,bill:2e3},noRedialRule:{hangup_code:[480,481],hangup_cause:["UNALLOCATED_NUMBER","NO_ROUTE_TRANSIT_NET"],duration:1e4,bill:2e3},remarks:"",addTime:1678961299821,updateTime:1678961314910},{tenantId:1,id:"clg1004",name:"线路组4",firstLines:[{id:"cl1001",name:"cl1001"},{id:"cl1001",name:"cl1001"}],secondLines:[{id:"cl1003",name:"cl1003"},{id:"cl1004",name:"cl1004"}],redialCount:1,redialRule:{hangup_code:[480,481],hangup_cause:["UNALLOCATED_NUMBER","NO_ROUTE_TRANSIT_NET"],duration:1e4,bill:2e3},noRedialRule:{hangup_code:[480,481],hangup_cause:["UNALLOCATED_NUMBER","NO_ROUTE_TRANSIT_NET"],duration:1e4,bill:2e3},remarks:"",addTime:1678961299821,updateTime:1678961314910}],total:4});function Y(){const T=B,n=t([]),l=t(!0),a=d({total:0,pageSize:10,currentPage:1,background:!0});let c=t([{label:"操作",fixed:"right",width:180,slot:"operation"}]);const _=m(()=>n.value.slice((a.currentPage-1)*a.pageSize,a.currentPage*a.pageSize)),N=m(()=>["!h-[20px]","reset-margin","!text-gray-500","dark:!text-white","dark:hover:!text-primary"]);function R(e,s){n.value.splice(s,1),a.total=a.total-1,D("删除成功",{customClass:"el",type:"success"})}function p(e){}function g(e){}function h(e){}const E=t(),L=d({name:"",caller:""});async function i(){l.value=!0;const e=T.value;n.value=e.list,a.total=e.total,r(),l.value=!1}let o=t();const r=async()=>{const{result:e}=await b(),{result:s}=await v(e),O=await y();o.value=e;const U=O.result.GatewayTemplate.children;await G(e,M);const{useDataList:u,useColumns:f}=I(s,U);a.total=u.length,n.value=u,c.value=f},A=e=>{e&&(e.resetFields(),i())};return S(()=>{i()}),{loading:l,columns:c,dataList:n,pagination:a,buttonClass:N,searchForm:L,searchFormRef:E,onSearch:i,resetForm:A,handleDelete:R,handleSizeChange:p,handleCurrentChange:g,handleSelectionChange:h,getInitList:r,reqSetInfo:w,names:o,currentData:_}}export{Y as useRole};

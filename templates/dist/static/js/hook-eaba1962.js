import{aR as O,n,a0 as u,p as d,t as S,ax as U}from"./index-8391854f.js";import{u as I}from"./useArrConversionMapObj-53d04e92.js";import{r as b,a as v,b as M,c as w,d as B}from"./APIGetScheduleDialerConfig-6f464708.js";import{u as k}from"./useRowState-f0ac559e.js";import"./useRowConversionTree-f86c56ba.js";O(new Date).format("YYYY-MM-DD");const q=n({list:[{tenantId:1,id:"clg1001",name:"线路组1",firstLines:[{id:"cl1001",name:"cl1001"},{id:"cl1001",name:"cl1001"}],secondLines:[{id:"cl1003",name:"cl1003"},{id:"cl1004",name:"cl1004"}],redialCount:1,redialRule:{hangup_code:[480,481],hangup_cause:["UNALLOCATED_NUMBER","NO_ROUTE_TRANSIT_NET"],duration:1e4,bill:2e3},noRedialRule:{hangup_code:[480,481],hangup_cause:["UNALLOCATED_NUMBER","NO_ROUTE_TRANSIT_NET"],duration:1e4,bill:2e3},remarks:"呼叫教育线路组",addTime:1678961299821,updateTime:1678961314910},{tenantId:1,id:"clg1002",name:"线路组2",firstLines:[{id:"cl1001",name:"cl1001"},{id:"cl1001",name:"cl1001"}],secondLines:[{id:"cl1003",name:"cl1003"},{id:"cl1004",name:"cl1004"}],redialCount:1,redialRule:{hangup_code:[480,481],hangup_cause:["UNALLOCATED_NUMBER","NO_ROUTE_TRANSIT_NET"],duration:1e4,bill:2e3},noRedialRule:{hangup_code:[480,481],hangup_cause:["UNALLOCATED_NUMBER","NO_ROUTE_TRANSIT_NET"],duration:1e4,bill:2e3},remarks:"",addTime:1678961299821,updateTime:1678961314910},{tenantId:1,id:"clg1003",name:"线路组3",firstLines:[{id:"cl1001",name:"cl1001"},{id:"cl1001",name:"cl1001"}],secondLines:[{id:"cl1003",name:"cl1003"},{id:"cl1004",name:"cl1004"}],redialCount:1,redialRule:{hangup_code:[480,481],hangup_cause:["UNALLOCATED_NUMBER","NO_ROUTE_TRANSIT_NET"],duration:1e4,bill:2e3},noRedialRule:{hangup_code:[480,481],hangup_cause:["UNALLOCATED_NUMBER","NO_ROUTE_TRANSIT_NET"],duration:1e4,bill:2e3},remarks:"",addTime:1678961299821,updateTime:1678961314910},{tenantId:1,id:"clg1004",name:"线路组4",firstLines:[{id:"cl1001",name:"cl1001"},{id:"cl1001",name:"cl1001"}],secondLines:[{id:"cl1003",name:"cl1003"},{id:"cl1004",name:"cl1004"}],redialCount:1,redialRule:{hangup_code:[480,481],hangup_cause:["UNALLOCATED_NUMBER","NO_ROUTE_TRANSIT_NET"],duration:1e4,bill:2e3},noRedialRule:{hangup_code:[480,481],hangup_cause:["UNALLOCATED_NUMBER","NO_ROUTE_TRANSIT_NET"],duration:1e4,bill:2e3},remarks:"",addTime:1678961299821,updateTime:1678961314910}],total:4});function P(){const m=q,t=n([]),l=n(!0),a=u({total:0,pageSize:10,currentPage:1,background:!0});let r=n([{label:"操作",fixed:"right",width:180,slot:"operation"}]);const T=d(()=>t.value.slice((a.currentPage-1)*a.pageSize,a.currentPage*a.pageSize)),_=d(()=>["!h-[20px]","reset-margin","!text-gray-500","dark:!text-white","dark:hover:!text-primary"]);function N(e,c){t.value.splice(c,1),a.total=a.total-1,U("删除成功",{customClass:"el",type:"success"})}function g(e){}function R(e){}function p(e){}const h=n(),E=u({name:"",caller:""});async function i(){l.value=!0;const e=m.value;t.value=e.list,a.total=e.total,o(),l.value=!1}let s=n();const o=async()=>{const{result:e}=await v(),{result:c}=await M(e),f=await w();s.value=e;const C=f.result.ScheduleDialerTemplate.children;await k(e,B);const{useDataList:A,useColumns:D}=I(c,C);t.value=A,r.value=D},L=e=>{e&&(e.resetFields(),i())};return S(()=>{i()}),{loading:l,columns:r,dataList:t,pagination:a,buttonClass:_,searchForm:E,searchFormRef:h,onSearch:i,resetForm:L,handleDelete:N,handleSizeChange:g,handleCurrentChange:R,handleSelectionChange:p,getInitList:o,reqSetInfo:b,names:s,currentData:T}}export{P as useRole};

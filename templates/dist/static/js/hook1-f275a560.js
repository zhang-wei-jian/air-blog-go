import{n as a,a0 as s,p as F,t as q,ax as c,aR as I}from"./index-8391854f.js";import{g as L}from"./datetime-44251b57.js";function Y(){const g=a({list:[{tenantId:1,id:"cl1001",name:"line1",caller:"18118181818",dialstr:"sofia/gateway/ims/${destination_number}",rest:1,codec:[],count:1,timeout:60,fault_threshold:0,ignore_early_media:!0,employee_id:"",bill_least1s:1,bill_round:0,bill_round_minute:0,addTime:1678961299821,updateTime:1678961314910},{tenantId:1,id:"cl1002",name:"line2",caller:"18118181819",dialstr:"sofia/gateway/ims/${destination_number}",rest:1,codec:[],count:1,timeout:60,fault_threshold:0,ignore_early_media:!0,employee_id:"",bill_least1s:1,bill_round:0,bill_round_minute:0,addTime:1678961299821,updateTime:1678961314910},{tenantId:1,id:"cl1003",name:"line3",caller:"18118181820",dialstr:"sofia/gateway/ims/${destination_number}",rest:1,codec:[],count:1,timeout:60,fault_threshold:0,ignore_early_media:!0,employee_id:"",bill_least1s:1,bill_round:0,bill_round_minute:0,addTime:1678961299821,updateTime:1678961314910},{tenantId:1,id:"cl1004",name:"line4",caller:"18118181821",dialstr:"sofia/gateway/ims/${destination_number}",rest:1,codec:[],count:1,timeout:60,fault_threshold:0,ignore_early_media:!0,employee_id:"",bill_least1s:1,bill_round:0,bill_round_minute:0,addTime:1678961299821,updateTime:1678961314910}],total:4}),p=s({name:"",caller:"",status:""}),u=a(!1),b=a(),l=s({tenantId:0,id:"",name:"",caller:"",dialstr:"",rest:5,codec:[],count:1,timeout:60,fault_threshold:0,ignore_early_media:!0,employee_id:"",bill_least1s:1,bill_round:0,bill_round_minute:0,addTime:1678961299821,updateTime:1678961314910}),_=e=>{e&&e.validate(t=>{if(t){debugger;let i=L();l.addTime=i,l.id=i+"",r.total=r.total+1;let m={};Object.assign(m,l),n.value.unshift(m),c("添加成功",{type:"success"}),u.value=!1,e.resetFields()}else return!1})},h=s({name:[{required:!0,message:"线路名称不能为空",trigger:"blur"},{min:2,max:20,message:"线路名称为3～20个字符",trigger:"blur"}],caller:[{required:!0,message:"线路名称不能为空",trigger:"blur"}],dialstr:[{required:!0,message:"拨号串不能为空",trigger:"blur"}],rest:[{type:"number",required:!0,trigger:"blur",min:5,max:600,validator:(e,t,i)=>{if(!t)return i(new Error("呼叫间隔不能为空"));if(!Number.isInteger(t))return i(new Error("呼叫间隔为5～600秒之间的整数值"));if(t<5||t>600)return i(new Error("呼叫间隔为5～600秒之间的整数值"));i()}}],count:[{required:!0,message:"呼叫并发不能为空",trigger:"blur"},{type:"number",min:1,max:100,message:"呼叫并发范围为1～100",trigger:"blur"}],timeout:[{required:!0,message:"呼叫超时不能为空",trigger:"blur"},{type:"number",min:40,max:300,message:"呼叫超时范围为40～300",trigger:"blur"}]}),n=a([]),o=a(!0);a({});const r=s({total:0,pageSize:10,currentPage:1,background:!0}),f=[{type:"selection",width:55,align:"left",hide:({checkList:e})=>!e.includes("勾选列")},{label:"序号",type:"index",width:70,hide:({checkList:e})=>!e.includes("序号列")},{label:"线路编号",prop:"id",minWidth:100},{label:"线路名称",prop:"name",minWidth:120},{label:"主叫号码",prop:"caller",minWidth:120},{label:"拨号串",prop:"dialstr",minWidth:150},{label:"并发数",prop:"count",minWidth:80},{label:"呼叫间隔",prop:"rest",minWidth:80},{label:"呼叫超时",prop:"timeout",minWidth:80},{label:"创建时间",minWidth:180,prop:"createTime",formatter:({createTime:e})=>I(e).format("YYYY-MM-DD HH:mm:ss")},{label:"操作",fixed:"right",width:180,slot:"operation"}],y=F(()=>["!h-[20px]","reset-margin","!text-gray-500","dark:!text-white","dark:hover:!text-primary"]);function T(e){}function w(e,t){n.value.splice(t,1),r.total=r.total-1,c("删除成功",{customClass:"el",type:"success"})}function x(e){}function v(e){}function C(e){}async function d(){o.value=!0;const e=g.value;n.value=e.list,r.total=e.total,setTimeout(()=>{o.value=!1},500)}const W=e=>{e&&(e.resetFields(),d())};return q(()=>{d()}),{loading:o,columns:f,dataList:n,pagination:r,buttonClass:y,onSearch:d,resetForm:W,handleUpdate:T,handleDelete:w,handleSizeChange:x,handleCurrentChange:v,handleSelectionChange:C,addCallLineForm:l,searchForm:p,addCallLineClick:_,formRules:h,addCallLineFormRef:b,dialogFormVisible:u}}export{Y as useRole};

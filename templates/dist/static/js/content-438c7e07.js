import{d as le,aD as ae,av as te,a0 as J,n as M,P as oe,r as g,o as V,c as z,e,j as a,g as r,h as ne,w as v,f as l,aE as D,R as b,aF as L,aG as w,aH as O,F as E,v as N,i as Q,ai as ie,aj as se,_ as de}from"./index-8391854f.js";import{u as _e}from"./DialplanExtension-9e3aa3b0.js";const x=U=>(ie("data-v-7c3a9b64"),U=U(),se(),U),re={class:"nowarp condition"},ue={class:"zhedie"},pe=x(()=>r("h4",null,"condition",-1)),ce=x(()=>r("span",null,null,-1)),me={class:"requireRight"},fe={class:"baseLine"},$e=x(()=>r("span",null,"regex",-1)),ve={class:"treeItem"},be={class:"cardItemRight"},ge=x(()=>r("div",{class:"nowarp"},null,-1)),he={class:"baseLine"},ye=x(()=>r("span",null,"action",-1)),xe={class:"treeItem"},ke={class:"cardItemRight"},Ve=x(()=>r("div",null,null,-1)),we={class:"baseLine"},Ue=x(()=>r("span",null,"anti-action",-1)),ze={class:"treeItem"},Ce={class:"cardItemRight"},Se=x(()=>r("div",{class:"nowarp"},null,-1)),qe=le({__name:"content",props:["data","dataIdex","dataKey","allShow"],setup(U){const W=U,{data:Pe,dataIdex:Re,dataKey:i,allShow:G}=ae(W),X=_e(),{storeResultData:o}=te(X),C=J({name:[{required:!0,message:"Please input Activity name",trigger:"blur"},{min:3,max:5,message:"Length should be 3 to 5",trigger:"blur"}]}),j=J({pass:"",checkPass:"",age:""}),Y=["*** regex ***","regex","*** call...file ***","destination_number","network_addr","caller_id_number","caller_id_name","orig_caller_id_number","orig_caller_id_name","callee_id_number","callee_id_name","username","dialplan","ani","aniii","rdnis","uuid","source","transfer_source","context","chan_name","profile_index","caller_ton","caller_numplan","destination_number_ton","destination_number_numplan","ani_ton","ani_numplan","rdnis_ton","rdnis_numplan","screen_bit","privacy_hide_name","privacy_hide_number","profile_created_time","created_time","answered_time","progress_time","progress_media_time","hungup_time","transferred_time","*** Built In ***","date-time","time-of-day","year","mon","mday","hour","minute","wday","week","mweek","yday","minday","tz-offset","dst","*** Cha...Les ***","${state}","${state_number}","${channel_name}","${direction}","${read_codec}","${read_rate}","${write_codec}","${write_rate}","${mailbox}","${user_name}","${domain_name}","${record_stereo}","${accountcode}","${user_context}","${effective_caller_id_name}","${effective_caller_id_number}","${caller_domain}","${sip_received_ip}","${sip_received_port}","${sip_authorized}","${sip_mailbox}","${sip_auth_username}","${sip_auth_realm}","${sip_from_user}","${sip_from_uri}","${sip_from_host}","${sip_from_user_stripped}","${sip_from_tag}","${sofia_profile_name}","${sofia_profile_domain_name}","${sip_full_route}","${sip_full_via}","${sip_full_from}","${sip_full_to}","${sip_req_params}","${sip_req_user}","${sip_req_uri}","${sip_req_host}","${sip_to_params}","${sip_to_tag}","${sip_to_user}","${sip_to_uri}","${sip_to_host}","${sip_contact_params}","${sip_contact_user}","${sip_contact_port}","${sip_contact_uri}","${sip_contact_host}","${sip_invite_domain}","${sip_call_id}","${sip_user_agent}","${sip_via_host}","${sip_via_port}","${sip_via_rport}","${presence_id}","${sip_h_p-key-flags}","${switch_r_sdp}","${sip_redirect_contact_user_0}","${sip_redirect_contact_host_0}","${sip_h_referred-by}","${sip_refer_to}","${remote_media_ip}","${remote_media_port}","${endpoint_disposition}","${dialed_ext}","${transfer_ringback}","${call_timeout}","${hangup_after_bridge}","${continue_on_fail}","${dialed_user}","${dialed_domain}","${originate_disposition}","${use_profile}","${current_application}"],Z=["*** call...file ***","destination_number","network_addr","caller_id_number","caller_id_name","orig_caller_id_number","orig_caller_id_name","callee_id_number","callee_id_name","username","dialplan","ani","aniii","rdnis","uuid","source","transfer_source","context","chan_name","profile_index","caller_ton","caller_numplan","destination_number_ton","destination_number_numplan","ani_ton","ani_numplan","rdnis_ton","rdnis_numplan","screen_bit","privacy_hide_name","privacy_hide_number","profile_created_time","created_time","answered_time","progress_time","progress_media_time","hungup_time","transferred_time","*** Built In ***","date-time","time-of-day","year","mon","mday","hour","minute","wday","week","mweek","yday","minday","tz-offset","dst","*** Cha...Les ***","${state}","${state_number}","${channel_name}","${direction}","${read_codec}","${read_rate}","${write_codec}","${write_rate}","${mailbox}","${user_name}","${domain_name}","${record_stereo}","${accountcode}","${user_context}","${effective_caller_id_name}","${effective_caller_id_number}","${caller_domain}","${sip_received_ip}","${sip_received_port}","${sip_authorized}","${sip_mailbox}","${sip_auth_username}","${sip_auth_realm}","${sip_from_user}","${sip_from_uri}","${sip_from_host}","${sip_from_user_stripped}","${sip_from_tag}","${sofia_profile_name}","${sofia_profile_domain_name}","${sip_full_route}","${sip_full_via}","${sip_full_from}","${sip_full_to}","${sip_req_params}","${sip_req_user}","${sip_req_uri}","${sip_req_host}","${sip_to_params}","${sip_to_tag}","${sip_to_user}","${sip_to_uri}","${sip_to_host}","${sip_contact_params}","${sip_contact_user}","${sip_contact_port}","${sip_contact_uri}","${sip_contact_host}","${sip_invite_domain}","${sip_call_id}","${sip_user_agent}","${sip_via_host}","${sip_via_port}","${sip_via_rport}","${presence_id}","${sip_h_p-key-flags}","${switch_r_sdp}","${sip_redirect_contact_user_0}","${sip_redirect_contact_host_0}","${sip_h_referred-by}","${sip_refer_to}","${remote_media_ip}","${remote_media_port}","${endpoint_disposition}","${dialed_ext}","${transfer_ringback}","${call_timeout}","${hangup_after_bridge}","${continue_on_fail}","${dialed_user}","${dialed_domain}","${originate_disposition}","${use_profile}","${current_application}"],A=["any","all","xor"],I=["on-false","on-true","allways","never"];function T(u,t,_){return _!=="inner"}const d=M({description:!0,condition:!0,regex:!0,action:!0,"anti-action":!0}),ee=u=>{u.preventDefault()};function k(u,t,_){if(typeof _=="number"&&_>=0){u.splice(_+1,0,{});return}if(t==="condition"){if(d.value.condition=!0,!u){_.condition=[{}];return}u.push({"require-nested":!0,break:"on-true"})}if(t==="regex"){if(d.value.regex=!0,!u){_.regex=[{}];return}u.push({})}if(t==="action"){if(d.value.action=!0,!u){_.action=[{}];return}u.push({})}if(t==="anti-action"){if(d.value["anti-action"]=!0,!u){_["anti-action"]=[{}];return}u.push({})}}function S(u,t,_){_===void 0&&(_=u.indexOf(t)),u===o.value.condition&&o.value.condition.splice(_,1),u.splice(_,1)}M();function H(u,t){return u.findIndex(_=>_===t)}return oe(G,()=>{G.value?Object.keys(d.value).forEach(t=>{d.value[t]=!0}):Object.keys(d.value).forEach(t=>{d.value[t]=!1})}),(u,t)=>{const _=g("el-row"),f=g("el-icon"),c=g("el-col"),h=g("el-button"),q=g("el-switch"),m=g("el-form-item"),y=g("el-input"),P=g("el-option"),R=g("el-select"),B=g("el-form"),F=g("el-card"),K=g("el-tree");return V(),z("div",null,[e(c,{span:20},{default:a(()=>[e(F,null,{default:a(()=>[r("div",re,[e(_,{gutter:20}),e(c,{span:2},{default:a(()=>[r("div",ue,[pe,r("div",{onClick:t[0]||(t[0]=n=>d.value.condition=!d.value.condition)},[ce,ne(),e(f,null,{default:a(()=>[v(e(l(D),null,null,512),[[b,!d.value.condition]]),v(e(l(L),null,null,512),[[b,d.value.condition]])]),_:1})])])]),_:1}),e(c,{span:2,class:"conditionIcon"},{default:a(()=>[e(h,{type:"primary",plain:"",text:"",class:"",size:"small"},{default:a(()=>[e(f,{size:"small",onClick:t[1]||(t[1]=n=>k(l(o).condition,"regex",l(i)))},{default:a(()=>[e(l(w))]),_:1})]),_:1}),e(h,{type:"danger",plain:"",text:"",class:"",size:"small"},{default:a(()=>[e(f,{size:"small",onClick:t[2]||(t[2]=n=>S(l(o).condition,l(o).condition[l(i)]))},{default:a(()=>[e(l(O))]),_:1})]),_:1})]),_:1}),e(c,{span:4},{default:a(()=>[r("div",me,[e(m,{label:"require-nested",prop:"checkPass"},{default:a(()=>[e(q,{modelValue:l(o).condition[l(i)]["require-nested"],"onUpdate:modelValue":t[3]||(t[3]=n=>l(o).condition[l(i)]["require-nested"]=n),class:"ml-2"},null,8,["modelValue"])]),_:1})])]),_:1}),e(c,{span:16},{default:a(()=>[e(m,{label:"description",prop:"checkPass"},{default:a(()=>[e(y,{modelValue:l(o).condition[l(i)].description,"onUpdate:modelValue":t[4]||(t[4]=n=>l(o).condition[l(i)].description=n),type:"text",autocomplete:"off"},null,8,["modelValue"])]),_:1})]),_:1})]),v(e(B,{ref:"ruleFormRef","status-icon":"",rules:C,"label-width":"",class:"conditionTop"},{default:a(()=>[e(_,{gutter:20,class:"condition conditionTop"},{default:a(()=>[e(c,{span:6},{default:a(()=>[e(m,{label:"field"},{default:a(()=>[e(R,{modelValue:l(o).condition[l(i)].field,"onUpdate:modelValue":t[5]||(t[5]=n=>l(o).condition[l(i)].field=n),placeholder:"Select"},{default:a(()=>[(V(),z(E,null,N(Y,n=>e(P,{key:n,label:n,value:n},null,8,["label","value"])),64))]),_:1},8,["modelValue"])]),_:1})]),_:1}),e(c,{span:12,style:{paddingRight:"10px"}},{default:a(()=>[e(m,{label:"expression",prop:"checkPass"},{default:a(()=>[l(o).condition[l(i)].field!=="regex"?(V(),Q(y,{key:0,modelValue:l(o).condition[l(i)].expression,"onUpdate:modelValue":t[6]||(t[6]=n=>l(o).condition[l(i)].expression=n),type:"text",autocomplete:"off"},null,8,["modelValue"])):(V(),Q(R,{key:1,modelValue:l(o).condition[l(i)].expression,"onUpdate:modelValue":t[7]||(t[7]=n=>l(o).condition[l(i)].expression=n),placeholder:"Select"},{default:a(()=>[(V(),z(E,null,N(A,n=>e(P,{key:n,label:n,value:n},null,8,["label","value"])),64))]),_:1},8,["modelValue"]))]),_:1})]),_:1}),e(c,{span:6},{default:a(()=>[e(m,{label:"break",prop:"checkPass",class:"breakFormItem"},{default:a(()=>[e(R,{modelValue:l(o).condition[l(i)].break,"onUpdate:modelValue":t[8]||(t[8]=n=>l(o).condition[l(i)].break=n),placeholder:"Select"},{default:a(()=>[(V(),z(E,null,N(I,n=>e(P,{key:n,label:n,value:n},null,8,["label","value"])),64))]),_:1},8,["modelValue"])]),_:1})]),_:1})]),_:1}),v(r("div",null,[r("div",fe,[$e,e(f,{onClick:t[9]||(t[9]=n=>d.value.regex=!d.value.regex)},{default:a(()=>[v(e(l(D),null,null,512),[[b,!d.value.regex]]),v(e(l(L),null,null,512),[[b,d.value.regex]])]),_:1}),e(h,{type:"primary",plain:"",text:"",class:"labelAdd",onClick:t[10]||(t[10]=n=>k(l(o).condition[l(i)].regex,"regex",l(o).condition[l(i)])),size:"small"},{default:a(()=>[e(f,{size:"small"},{default:a(()=>[e(l(w))]),_:1})]),_:1})]),v(e(K,{data:l(o).condition[l(i)].regex,draggable:"","allow-drop":T,"empty-text":""},{default:a(({node:n,data:s,index:p})=>[r("div",ve,[e(F,null,{default:a(()=>[r("div",be,[e(h,{type:"danger",plain:"",text:"",class:"dangerBtn",size:"small"},{default:a(()=>[e(f,{size:"small"},{default:a(()=>[e(l(O),{onClick:$=>S(l(o).condition[l(i)].regex,p)},null,8,["onClick"])]),_:2},1024)]),_:2},1024),e(h,{type:"primary",plain:"",text:"",class:"addBtn",size:"small"},{default:a(()=>[e(f,{size:"small",onClick:$=>k(l(o).condition[l(i)].regex,"regex",H(l(o).condition[l(i)].regex,s))},{default:a(()=>[e(l(w))]),_:2},1032,["onClick"])]),_:2},1024),ge,e(B,{ref:"ruleFormRef",model:j,"status-icon":"",rules:C,"label-width":"",class:"demo-ruleForm"},{default:a(()=>[e(_,{gutter:20},{default:a(()=>[e(c,{span:6},{default:a(()=>[e(m,{label:"field",prop:"pass"},{default:a(()=>[e(R,{modelValue:s.field,"onUpdate:modelValue":$=>s.field=$,placeholder:"regexSelect"},{default:a(()=>[(V(),z(E,null,N(Z,$=>e(P,{key:$,label:$,value:$},null,8,["label","value"])),64))]),_:2},1032,["modelValue","onUpdate:modelValue"])]),_:2},1024)]),_:2},1024),e(c,{span:9},{default:a(()=>[e(m,{label:"expression",prop:"checkPass"},{default:a(()=>[e(y,{modelValue:s.expression,"onUpdate:modelValue":$=>s.expression=$,onSelectstart:ee,type:"text",autocomplete:"off"},null,8,["modelValue","onUpdate:modelValue"])]),_:2},1024)]),_:2},1024),e(c,{span:3},{default:a(()=>[e(m,{label:"inline",prop:"checkPass"},{default:a(()=>[e(q,{modelValue:s.inline,"onUpdate:modelValue":$=>s.inline=$,class:"ml-2"},null,8,["modelValue","onUpdate:modelValue"])]),_:2},1024)]),_:2},1024),e(c,{span:6},{default:a(()=>[e(m,{label:"description",prop:"checkPass"},{default:a(()=>[e(y,{modelValue:s.description,"onUpdate:modelValue":$=>s.description=$,type:"text",autocomplete:"off"},null,8,["modelValue","onUpdate:modelValue"])]),_:2},1024)]),_:2},1024)]),_:2},1024)]),_:2},1032,["model","rules"])])]),_:2},1024)])]),_:1},8,["data"]),[[b,d.value.regex]])],512),[[b,l(o).condition[l(i)].field==="regex"]]),r("div",he,[ye,e(f,{onClick:t[11]||(t[11]=n=>d.value.action=!d.value.action)},{default:a(()=>[v(e(l(D),null,null,512),[[b,!d.value.action]]),v(e(l(L),null,null,512),[[b,d.value.action]])]),_:1}),e(h,{type:"primary",plain:"",text:"",class:"labelAdd",onClick:t[12]||(t[12]=n=>k(l(o).condition[l(i)].action,"action",l(o).condition[l(i)])),size:"small"},{default:a(()=>[e(f,{size:"small"},{default:a(()=>[e(l(w))]),_:1})]),_:1})]),v(e(K,{data:l(o).condition[l(i)].action,draggable:"","allow-drop":T,"empty-text":""},{default:a(({node:n,data:s})=>[r("div",xe,[e(F,null,{default:a(()=>[r("div",ke,[e(h,{type:"danger",plain:"",text:"",class:"dangerBtn",size:"small"},{default:a(()=>[e(f,{size:"small"},{default:a(()=>[e(l(O),{onClick:p=>S(l(o).condition[l(i)].action,s)},null,8,["onClick"])]),_:2},1024)]),_:2},1024),e(h,{type:"primary",plain:"",text:"",class:"addBtn",size:"small"},{default:a(()=>[e(f,{size:"small",onClick:p=>k(l(o).condition[l(i)].action,"action",H(l(o).condition[l(i)].action,s))},{default:a(()=>[e(l(w))]),_:2},1032,["onClick"])]),_:2},1024),Ve,e(B,{ref:"ruleFormRef",model:j,"status-icon":"",rules:C,"label-width":"",class:"demo-ruleForm"},{default:a(()=>[e(_,{gutter:20},{default:a(()=>[e(c,{span:6},{default:a(()=>[e(m,{label:"application",prop:"pass"},{default:a(()=>[e(y,{modelValue:s.application,"onUpdate:modelValue":p=>s.application=p,type:"text",autocomplete:"off"},null,8,["modelValue","onUpdate:modelValue"])]),_:2},1024)]),_:2},1024),e(c,{span:9,style:{flex:"1"}},{default:a(()=>[e(m,{label:"data",prop:"checkPass"},{default:a(()=>[e(y,{modelValue:s.data,"onUpdate:modelValue":p=>s.data=p,type:"text",autocomplete:"off"},null,8,["modelValue","onUpdate:modelValue"])]),_:2},1024)]),_:2},1024),e(c,{span:3},{default:a(()=>[e(m,{label:"inline",prop:"checkPass"},{default:a(()=>[e(q,{modelValue:s.inline,"onUpdate:modelValue":p=>s.inline=p,class:"ml-2"},null,8,["modelValue","onUpdate:modelValue"])]),_:2},1024)]),_:2},1024),e(c,{span:6},{default:a(()=>[e(m,{label:"description",prop:"checkPass"},{default:a(()=>[e(y,{modelValue:s.description,"onUpdate:modelValue":p=>s.description=p,type:"text",autocomplete:"off"},null,8,["modelValue","onUpdate:modelValue"])]),_:2},1024)]),_:2},1024)]),_:2},1024)]),_:2},1032,["model","rules"])])]),_:2},1024)])]),_:1},8,["data"]),[[b,d.value.action]]),r("div",we,[Ue,e(f,{onClick:t[13]||(t[13]=n=>d.value["anti-action"]=!d.value["anti-action"])},{default:a(()=>[v(e(l(D),null,null,512),[[b,!d.value["anti-action"]]]),v(e(l(L),null,null,512),[[b,d.value["anti-action"]]])]),_:1}),e(h,{type:"primary",plain:"",text:"",class:"labelAdd",onClick:t[14]||(t[14]=n=>k(l(o).condition[l(i)]["anti-action"],"anti-action",l(o).condition[l(i)])),size:"small"},{default:a(()=>[e(f,{size:"small"},{default:a(()=>[e(l(w))]),_:1})]),_:1})]),v(e(K,{data:l(o).condition[l(i)]["anti-action"],draggable:"","allow-drop":T,"empty-text":""},{default:a(({node:n,data:s})=>[r("div",ze,[e(F,null,{default:a(()=>[r("div",Ce,[e(h,{type:"danger",plain:"",text:"",class:"dangerBtn",size:"small"},{default:a(()=>[e(f,{size:"small"},{default:a(()=>[e(l(O),{onClick:p=>S(l(o).condition[l(i)]["anti-action"],s)},null,8,["onClick"])]),_:2},1024)]),_:2},1024),e(h,{type:"primary",plain:"",text:"",class:"addBtn",size:"small"},{default:a(()=>[e(f,{size:"small",onClick:p=>k(l(o).condition[l(i)]["anti-action"],"action",H(l(o).condition[l(i)]["anti-action"],s))},{default:a(()=>[e(l(w))]),_:2},1032,["onClick"])]),_:2},1024),Se,e(B,{ref:"ruleFormRef",model:j,"status-icon":"",rules:C,"label-width":"",class:"demo-ruleForm"},{default:a(()=>[e(_,{gutter:20},{default:a(()=>[e(c,{span:6},{default:a(()=>[e(m,{label:"application",prop:"pass"},{default:a(()=>[e(y,{modelValue:s.application,"onUpdate:modelValue":p=>s.application=p,type:"text",autocomplete:"off"},null,8,["modelValue","onUpdate:modelValue"])]),_:2},1024)]),_:2},1024),e(c,{span:9},{default:a(()=>[e(m,{label:"data",prop:"checkPass"},{default:a(()=>[e(y,{modelValue:s.data,"onUpdate:modelValue":p=>s.data=p,type:"text",autocomplete:"off"},null,8,["modelValue","onUpdate:modelValue"])]),_:2},1024)]),_:2},1024),e(c,{span:3},{default:a(()=>[e(m,{label:"inline",prop:"checkPass"},{default:a(()=>[e(q,{modelValue:s.inline,"onUpdate:modelValue":p=>s.inline=p,class:"ml-2"},null,8,["modelValue","onUpdate:modelValue"])]),_:2},1024)]),_:2},1024),e(c,{span:6},{default:a(()=>[e(m,{label:"description",prop:"checkPass"},{default:a(()=>[e(y,{modelValue:s.description,"onUpdate:modelValue":p=>s.description=p,type:"text",autocomplete:"off"},null,8,["modelValue","onUpdate:modelValue"])]),_:2},1024)]),_:2},1024)]),_:2},1024)]),_:2},1032,["model","rules"])])]),_:2},1024)])]),_:1},8,["data"]),[[b,d.value["anti-action"]]])]),_:1},8,["rules"]),[[b,d.value.condition]])]),_:1})]),_:1})])}}});const De=de(qe,[["__scopeId","data-v-7c3a9b64"]]);export{De as default};

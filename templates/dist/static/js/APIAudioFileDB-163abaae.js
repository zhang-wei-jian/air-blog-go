import{aC as t}from"./index-8391854f.js";import{i as r}from"./axios-75d0e659.js";const u=(e={})=>{const i={...{dir:"",type:"",storage:"db"},...e};return t.request("post","/api?action=ListAudiofilenames",{data:i})},p=({parent:e,name:a,description:i})=>t.request("post",`/api?action=MakeAudiofileDir&dir=${e}&storage=db&description=${i}&name=${a}`),$=({parent:e,file:a,description:i})=>{const o=new FormData;return o.append("file",a),r.post(`/api?action=UploadAudiofile&dir=${e}&storage=db&description=${i}&name=${name}`,o)},c=({parent:e,name:a,type:i})=>t.request("post",`/api?action=DeleteAudiofile&dir=${e}&name=${a}&type=${i}&storage=db`),l=({parent:e,name:a})=>r.get(`/api?action=DownloadAudiofile&dir=${e}&name=${a}&storage=db`),m=({parent:e,name:a,newName:i,newDir:o,type:n})=>t.request("post",`/api?action=RenamedAudiofile&dir=${e}&name=${a}&newdir=${o}&newname=${i}&type=${n}&storage=db`),f=({parent:e,name:a,description:i})=>t.request("post",`/api?action=ChangeDescriptionAudiofile&dir=${e}&name=${a}&storage=db&description=${i}`);export{$ as a,p as b,c,m as d,f as e,l as f,u as r};
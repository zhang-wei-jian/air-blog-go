import{a as o}from"./useRowConversionTree-f86c56ba.js";const c=o();async function m(s,r){const t={};let a;return await Promise.all(s.map(async e=>{a=await r(e).catch(i=>{}),t[e]=a})),c.setThisTableDataState(t),t}export{m as u};

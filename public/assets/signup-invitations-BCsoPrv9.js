import{d as y,n as w,x as C,a5 as v,a as h,o as k,l as a,q as z,c as i,w as e,r as s,b as u,E as A,O as B,y as m,e as r,z as d,g as N}from"./main-_0WdI2da.js";import{_ as S,A as V}from"./account-manager-list-Djfh1H1a.js";import"./index-e_AqwlmS.js";import"./form-validation-Bhn6uNEO.js";import"./primary-button.vue_vue_type_script_setup_true_lang-D9N2jzjA.js";const T=y({__name:"signup-invitations",setup(M){const t=w();C(()=>t.invitationCount,()=>{var n;(n=t.person)!=null&&n.by_invitation&&t.invitationCount===0&&l()});const c=v(void 0),f=h();function l(){a.debug(a.context(),"going to authorized"),f.push({name:"authorized"})}return k(async()=>{var n;if(a.debug(a.context(),"entering"),!((n=t.person)!=null&&n.by_invitation)){const{data:_,error:o}=await z("/api/account",{});if(o){a.error(a.context(),o);return}c.value={id:_._id,role:"user",isOwner:!0,user:t.person}}}),(n,_)=>{const o=s("v-container"),g=s("v-btn"),x=s("v-col"),b=s("v-row");return u(),i(o,{class:"v-col-sm-9 v-col-lg-6"},{default:e(()=>[A(r(o,{class:"px-0 py-2"},{default:e(()=>[r(S)]),_:1},512),[[B,m(t).invitationCount]]),c.value?(u(),i(o,{key:0,class:"px-0 py-2"},{default:e(()=>[r(V,{"current-account":v(c.value)},null,8,["current-account"])]),_:1})):d("",!0),r(o,null,{default:e(()=>[r(b,{class:"mt-6"},{default:e(()=>[r(x,{col:"6"},{default:e(()=>{var p;return[(p=m(t).person)!=null&&p.by_invitation?d("",!0):(u(),i(g,{key:0,color:"primary",block:"",class:"mb-4",onClick:l},{default:e(()=>[N("Continue")]),_:1}))]}),_:1})]),_:1})]),_:1})]),_:1})}}});export{T as default};
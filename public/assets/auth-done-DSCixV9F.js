import{d as b,u as C,a as E,l as x,o as B,m as k,n as A,q as V,c as O,w as s,s as P,t as M,r,b as N,e as i,g,f as p}from"./main-CuD3QBrw.js";const R=p("p",null,"We are working hard for everyone to be able to use sibs.ai soon.",-1),L=p("br",null,null,-1),z=b({__name:"auth-done",setup(S){const{logout:d}=C(),l=E(),c=x({signinError:!1});function _(o){return o=o||{enableHighAccuracy:!1,timeout:1e4,maximumAge:0},new Promise((n,t)=>navigator.geolocation.getCurrentPosition(n,t,o))}function f(){const o={};_().then(n=>{o.latitude=n.coords.latitude,o.longitude=n.coords.longitude,console.log("auth-done: getLocation:",o)}).catch(n=>{console.error("auth-done: getLocation error",n)}).finally(async()=>{let n={login_location:o};const{data:t,error:a}=await P("/api/person/me",{body:n});a?console.error(a):console.log("auth-done: updatePosition returns",t),await M(),console.log("auth-done: getLocation done")})}B(async()=>{var n,t;const o=k();console.log(">>>>>>>>   auth-done: OnBeforeMount entry"),o.clear();try{const a=navigator.languages&&navigator.languages.length?navigator.languages[0]:navigator.language,u=Intl.DateTimeFormat().resolvedOptions().timeZone,e=await A("/api/person/register",{body:{language:a,tz:u}});if(console.log("auth-done: register returns",e),console.log("auth-done: register error",e.error),!e.response.ok||!e.data)throw console.log("auth-done: register error",e.error,e.response.status),e.response.status==403&&(console.error("auth-done: person not allowed"),c.signinError=!0),new Error("register failed");if(console.log("auth-done: person",e.data.person),o.person=e.data.person,console.log("auth-done: OnBeforeMount, userStore.accounts = ",o.accounts),e.data.person.validation==="New")console.log("auth-done: new person: go to profile",e.data.person),l.push({name:"signup_profile"});else if(e.data.person.validation==="Verified")console.log("auth-done: new person verified, go to invitations"),l.push({name:"signup_profile"});else if(e.data.person.validation==="Filled")console.log("auth-done: new person filled, go to verify"),o.invitationCount=((n=e.data.invite_list)==null?void 0:n.length)??0,l.push({name:"signup_invitations"});else if(e.data.person.validation==="Ready"){if(await o.setAccounts(e.data.user_list,e.data.admin_list,e.data.owner_list),o.invitationCount=((t=e.data.invite_list)==null?void 0:t.length)??0,console.log("auth-done: userStore.accounts",o.accounts,"invitation count = ",o.invitationCount),f(),!o.currentAccount)throw new Error("invalid account state");if(o.currentAccount.role=="admin")l.push({name:"chats"});else if(o.currentAccount.role=="user")V();else throw new Error("unknown role")}else throw new Error("unknown validation state")}catch(a){console.error("auth-done: register error",a),c.signinError||await d(),console.log("<<<<<<<   auth-done: OnBeforeMount exit ERROR")}console.log("<<<<<<<   auth-done: OnBeforeMount exit")});async function h(){await d()}return(o,n)=>{const t=r("v-card-title"),a=r("v-card-text"),u=r("v-spacer"),e=r("v-btn"),v=r("v-card-actions"),m=r("v-card"),w=r("v-dialog");return N(),O(w,{modelValue:c.signinError,"onUpdate:modelValue":n[0]||(n[0]=y=>c.signinError=y),persistent:"",width:"400"},{default:s(()=>[i(m,null,{default:s(()=>[i(t,null,{default:s(()=>[g("sibs.ai is open for alpha-testers")]),_:1}),i(a,null,{default:s(()=>[R,L]),_:1}),i(v,null,{default:s(()=>[i(u),i(e,{color:"primary",onClick:h},{default:s(()=>[g("Close")]),_:1})]),_:1})]),_:1})]),_:1},8,["modelValue"])}}});export{z as default};

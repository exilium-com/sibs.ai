var q=Object.defineProperty;var W=(t,r,e)=>r in t?q(t,r,{enumerable:!0,configurable:!0,writable:!0,value:e}):t[r]=e;var k=(t,r,e)=>(W(t,typeof r!="symbol"?r+"":r,e),e);import{d as H,b as s,c as u,w as m,U as f,V as K,X as h,e as y,g as F,S as O,f as V,P as z,h as R,W as X,T as I,b7 as D,R as G,q as J,b8 as Y,a9 as Z,b9 as Q,ba as ee,bb as te,aW as ae,ab as se,t as ne,aX as ie,ap as oe,ah as E,bc as le,bd as re,be as ce,aj as de,as as ue,ad as M,bf as me,A as he,aB as pe,J as $,H as ye,l as i,bg as ge,z as P,a as fe,a3 as a,K as ke,bh as Ie,$ as be,Y as T,Z as j,bi as ve,a2 as Ce,a0 as _e,a1 as Me,bj as xe,bk as we,C as Te,n as Ve}from"./main-C-J6Z3r-.js";import{R as Re}from"./index-CyksbgDq.js";import{V as L,R as Ae}from"./VSkeletonLoader-CXdQ1nyn.js";import{V as Se}from"./VTextField-Bc-Q8fL1.js";const Ne={key:0,class:"py-1 pe-1"},Be={class:"py-0 py-md-1",style:{"min-width":"30%"}},Pe=V("i",{class:"fa-solid fa-ellipsis fa-beat-fade fa-lg"},null,-1),Ue={class:"small"},Fe={class:"d-flex justify-space-between px-4 align-baseline"},Oe={key:1},ze={key:1,class:"py-1 ps-1"},U=H({__name:"chat-message",props:{skeleton:{type:Boolean},message:{},time:{},isMine:{},rating:{},comment:{},messageIndex:{}},setup(t){const r=t;if(isNaN(r.messageIndex))throw new Error("Message requires a numeric key");return(e,d)=>e.skeleton?(s(),u(K,{key:0},{default:m(()=>[e.isMine?(s(),u(L,{key:0,type:"avatar, paragraph",class:"flex-row-reverse"})):f("",!0),e.isMine?f("",!0):(s(),u(L,{key:1,type:"avatar, sentences"}))]),_:1})):(s(),h("div",{key:1,class:D(["d-flex",{"justify-end":e.isMine,"justify-start":!e.isMine}])},[e.isMine?(s(),h("div",Ne,[y(O,{color:"primary"},{default:m(()=>[y(F,{icon:"mdi-account"})]),_:1})])):f("",!0),V("div",Be,[y(G,{class:D(["mb-4",{"bg-primary-surface":e.isMine,"bg-secondary-surface":!e.isMine}])},{default:m(()=>[e.message==="…"&&!e.isMine?(s(),u(z,{key:0},{default:m(()=>[Pe]),_:1})):(s(),u(z,{key:1,class:"pa-2 px-4"},{default:m(()=>[R(X(e.message),1)]),_:1})),V("div",Ue,[V("div",Fe,[e.isMine?(s(),h("span",Oe)):(s(),u(Ae,{key:0,initialRating:e.rating,initialComment:e.comment,messageIndex:r.messageIndex},null,8,["initialRating","initialComment","messageIndex"])),e.time?(s(),u(I(Re),{key:2,class:"text-grey small",time:new Date(e.time),locale:null},null,8,["time"])):f("",!0)])])]),_:1},8,["class"])]),e.isMine?f("",!0):(s(),h("div",ze,[y(O,{color:"secondary"},{default:m(()=>[y(F,{icon:"mdi-robot"})]),_:1})]))],2))}});class De{constructor(r,e,d){k(this,"timeoutId",null);k(this,"timeoutMs");k(this,"userCallback");k(this,"maxConsecutiveIdleCalls");k(this,"boundInternalCallback");k(this,"consecutiveIdleCalls",0);this.timeoutMs=r,this.userCallback=d,this.maxConsecutiveIdleCalls=e,this.boundInternalCallback=this.internalCallback.bind(this),this.reset()}internalCallback(){this.consecutiveIdleCalls++,this.timeoutId=0,this.userCallback()}reset(){this.timeoutId&&(clearTimeout(this.timeoutId),this.timeoutId=0,this.consecutiveIdleCalls=0),!(this.consecutiveIdleCalls>=this.maxConsecutiveIdleCalls)&&(this.timeoutId=setTimeout(this.boundInternalCallback,this.timeoutMs))}clear(){this.timeoutId&&(clearTimeout(this.timeoutId),this.timeoutId=0)}}const Ee=J({app:Boolean,color:String,height:{type:[Number,String],default:"auto"},...Y(),...Z(),...Q(),...ee(),...te(),...ae({tag:"footer"}),...se()},"VFooter"),$e=ne()({name:"VFooter",props:Ee(),setup(t,r){let{slots:e}=r;const{themeClasses:d}=ie(t),{backgroundColorClasses:c,backgroundColorStyles:x}=oe(E(t,"color")),{borderClasses:A}=le(t),{elevationClasses:S}=re(t),{roundedClasses:N}=ce(t),_=de(32),{resizeRef:b}=ue(o=>{o.length&&(_.value=o[0].target.clientHeight)}),v=M(()=>t.height==="auto"?_.value:parseInt(t.height,10)),{layoutItemStyles:w,layoutIsReady:l}=me({id:t.name,order:M(()=>parseInt(t.order,10)),position:M(()=>"bottom"),layoutSize:v,elementSize:M(()=>t.height==="auto"?void 0:v.value),active:M(()=>t.app),absolute:E(t,"absolute")});return he(()=>y(t.tag,{ref:b,class:["v-footer",d.value,c.value,A.value,S.value,N.value,t.class],style:[x.value,t.app?w.value:{height:pe(t.height)},t.style]},e)),t.app?l:{}}}),je={key:0,class:"alert alert-primary",role:"alert"},Le={key:0,class:"py-2 px-2 px-md-3"},He={key:1,class:"py-2 px-2 px-md-3"},Ke=H({__name:"chat-thread",props:{chatId:{},readOnly:{type:Boolean}},emits:["summaryNeedsUpdate"],setup(t,{emit:r}){const e=t,d=$(),c=ye({inputControl:null,typedMessage:"",pendingResponse:!1,invalidChatId:!1}),x=new De(6e4,2,()=>{i.debug(i.context(),"pinging user"),v()});ge(()=>{x.clear()}),P(()=>[d.currentAccount,e.chatId],async(l,o)=>{d.currentAccount&&(i.debug(i.context(),"chatId changed",l,o),await xe(d.currentAccount.id,e.chatId)&&a.chat?(d.chatId=e.chatId,a.chat.messages.length==0&&v(),await b(),_()):c.invalidChatId=!0)},{immediate:!0}),P(()=>e.readOnly,async(l,o)=>{i.debug(i.context(),"readonly changed =",l,o)},{immediate:!0});const A=fe();P(()=>d.currentAccount,(l,o)=>{i.debug(i.context(),"currentAccount changed",l,o),d.currentAccount&&!d.isCurrentAccountMine()&&d.currentAccount.role=="admin"&&A.push({name:"chats"})},{immediate:!0});const S=r;let N=[{key:0,isMine:!1},{key:1,isMine:!0},{key:2,isMine:!1},{key:3,isMine:!0},{key:4,isMine:!1},{key:5,isMine:!0},{key:6,isMine:!1},{key:7,isMine:!0},{key:8,isMine:!1}];function _(){a.chat&&a.chat._id&&we(a.chat)&&(i.debug(i.context(),"emitting summary needs update, chatId = ",a.chat._id,"chat =",a.chat),S("summaryNeedsUpdate"),a.dirtyChatsMetadata.add(a.chat._id))}async function b(){await Te(),window.scrollTo(0,document.body.scrollHeight)}async function v(l){var p;if(!a.chat)return;i.debug(i.context(),e.chatId,{userMessage:l});const o=$();if(!o.currentAccount){i.error(i.context(),"no current account");return}l&&(a.chat.messages.push({content:l,timestamp:new Date().toISOString(),type:"User",key:a.chat.messages.length}),c.typedMessage=""),c.pendingResponse=!0;let C={content:"…",timestamp:"",type:"AI",key:a.chat.messages.length};a.chat.messages.push(C),await b();const B=l?"/api/chat/{account_id}/{chat_id}":a.chat.messages.length>1?"/api/chat/{account_id}/{chat_id}/ping":"/api/chat/{account_id}/{chat_id}/initial",{data:n,error:g}=await ke(B,{params:{path:{account_id:o.currentAccount.id,chat_id:e.chatId}},body:{content:l??""}});g&&i.error(i.context(),g),c.pendingResponse=!1,n&&(a.chat.messages[C.key].timestamp=new Date(n.message.timestamp).toISOString(),a.chat.messages[C.key].content=n.message.content,a.chat={_id:a.chat._id,...n.metadata,messages:a.chat.messages}),await b(),(p=c.inputControl)==null||p.focus(),_(),x.reset()}async function w(){var l,o;if(i.debug(i.context(),"entering"),((l=c.inputControl)==null?void 0:l.value)===""){i.debug(i.context(),"sendMessage empty, ignoring.");return}v((o=c.inputControl)==null?void 0:o.value)}return(l,o)=>{const C=Ie("router-link"),B=be("focus");return s(),h(T,null,[c.invalidChatId?(s(),h("div",je,[R(" This chat does not exist, maybe you should look in "),y(C,{to:"/chats"},{default:m(()=>[R("all chats")]),_:1}),R(". ")])):f("",!0),y(Ce,null,{default:m(()=>[I(a).chat?(s(),h("div",Le,[I(a).chat?(s(),u(ve,{key:0,name:"grow"},{default:m(()=>[(s(!0),h(T,null,j(I(a).chat.messages,n=>{var g,p;return s(),h(T,null,[n.type==="AI"?(s(),u(U,{message:n.content,time:n.timestamp,key:n.key,isMine:!1,messageIndex:n.key,rating:(g=n.rating)==null?void 0:g.rating,comment:((p=n.rating)==null?void 0:p.comment)??""},null,8,["message","time","messageIndex","rating","comment"])):(s(),u(U,{message:n.content,time:n.timestamp,key:-n.key,isMine:!0,messageIndex:n.key},null,8,["message","time","messageIndex"]))],64)}),256))]),_:1})):f("",!0)])):(s(),h("div",He,[(s(!0),h(T,null,j(I(N),n=>(s(),u(U,{skeleton:"",key:n.key,isMine:n.isMine,messageIndex:n.key},null,8,["isMine","messageIndex"]))),128))]))]),_:1}),y($e,{app:"",color:"surface-darken-1"},{default:m(()=>[y(K,{class:"v-col-sm-9 v-col-lg-6 pa-0"},{default:m(()=>{var n,g;return[_e((s(),u(Se,{ref:p=>{c.inputControl=p},"hide-details":"",modelValue:c.typedMessage,"onUpdate:modelValue":o[0]||(o[0]=p=>c.typedMessage=p),density:"compact",variant:"outlined",placeholder:(n=I(a).chat)!=null&&n.closed?"Chat closed":e.readOnly?"":"Type message here",disabled:c.pendingResponse||e.readOnly||((g=I(a).chat)==null?void 0:g.closed),onClick:o[1]||(o[1]=p=>b()),onKeydown:Me(w,["enter"])},{"append-inner":m(()=>[c.typedMessage.length>0?(s(),u(F,{key:0,icon:"mdi-send-variant",color:"primary",onClick:w})):f("",!0)]),_:1},8,["modelValue","placeholder","disabled"])),[[B]])]}),_:1})]),_:1})],64)}}}),Ye=Ve(Ke,[["__scopeId","data-v-df6002a2"]]);export{Ye as C};

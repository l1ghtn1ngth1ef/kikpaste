(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[171,474],{9373:function(e,t,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/pastes/new",function(){return n(8474)}])},8474:function(e,t,n){"use strict";n.r(t),n.d(t,{default:function(){return f}});var s=n(5893),a=n(9018),r=n(1664),i=n.n(r),c=n(1163),o=n(7325),u=n(9993),l=n(443),p=n(5591),h=n(7294),d=(0,n(6709)._)({resolverName:"createPaste",resolverType:"mutation",routePath:"/createPaste",httpMethod:"POST"});let P=()=>{let e=(0,c.useRouter)(),[t]=(0,o.Db)(d);return(0,s.jsxs)(u.Z,{title:"Create New Paste",children:[(0,s.jsx)("h1",{children:"Create New Paste"}),(0,s.jsx)(h.Suspense,{fallback:(0,s.jsx)("div",{children:"Loading..."}),children:(0,s.jsx)(p.W,{submitText:"Create Paste",schema:l.iv,onSubmit:async n=>{try{let s=await t(n);await e.push(a.Z.ShowPastePage({pasteId:s.id}))}catch(e){return console.error(e),{[p.C]:e.toString()}}}})}),(0,s.jsx)("p",{children:(0,s.jsx)(i(),{href:a.Z.PastesPage(),children:"Pastes"})})]})};P.authenticate=!0;var f=P},5591:function(e,t,n){"use strict";n.d(t,{C:function(){return a.Ck},W:function(){return i}});var s=n(5893);n(7294);var a=n(4425),r=n(660);function i(e){return(0,s.jsxs)(a.l0,{...e,children:[(0,s.jsx)(r.I,{name:"pasteDescription",label:"Paste Description",placeholder:"Paste Description",type:"text"}),(0,s.jsx)(r.I,{name:"pasteName",label:"Paste Name",placeholder:"Paste Name",type:"text"}),(0,s.jsx)(r.I,{name:"pasteContent",label:"Paste Content",placeholder:"Paste Content",type:"text"})]})}},443:function(e,t,n){"use strict";n.d(t,{R7:function(){return r},iv:function(){return a}});var s=n(1604);let a=s.z.object({pasteDescription:s.z.string(),pasteName:s.z.string(),pasteContent:s.z.string()}),r=s.z.object({id:s.z.number()});s.z.object({id:s.z.number()})}},function(e){e.O(0,[190,504,603,774,888,179],function(){return e(e.s=9373)}),_N_E=e.O()}]);
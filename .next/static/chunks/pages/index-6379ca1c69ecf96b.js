(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[405],{5557:function(e,t,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/",function(){return n(6616)}])},6616:function(e,t,n){"use strict";n.r(t);var o=n(5893),s=n(1664),i=n.n(s),a=n(9573),c=n.n(a),l=n(7294),r=n(1181),u=n(477),d=n(5210);t.default=function(){let[e,t]=(0,l.useState)(!1);async function n(){try{if(!e)throw Error("Metamask is not installed");let t=new r.Q(window.ethereum);await t.send("eth_requestAccounts",[]);let n=t.getSigner(),o=await n.getAddress();console.log(o);let s=await fetch("/api/nonce",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({address:o})});if(!s.ok){let e=await s.json();console.log(e)}let i=await s.json(),a=i.message;console.log(a);let c=await n.signMessage(a),l=await fetch("/api/login",{method:"POST",headers:{Accept:"application/json","Content-Type":"application/json"},body:JSON.stringify({signedMessage:c,nonce:a,address:o})}),u=await l.json();console.log(u),localStorage.setItem(o,u.token),window.location.href="/protected-route"}catch(e){console.error(e),alert("Failed to login with Metamask")}}return(0,l.useEffect)(()=>{t(!!window.ethereum)},[]),(0,o.jsxs)("div",{className:c().container,children:[(0,o.jsx)(d.x,{children:(0,o.jsx)(u.default,{})}),(0,o.jsx)("h1",{children:"Welcome to my site!"}),(0,o.jsx)("p",{children:"Please select an option below to continue:"}),(0,o.jsxs)("div",{children:[(0,o.jsx)("button",{className:c().btn,onClick:n,children:"Login with Metamask"}),(0,o.jsx)("br",{}),(0,o.jsx)("br",{})]}),(0,o.jsx)(i(),{href:"/signup",children:(0,o.jsx)("button",{className:c().btn,children:"Signup"})})]})}},9573:function(e){e.exports={container:"styles_container__XV0r4",btn:"styles_btn__ZXPUu"}},6601:function(){}},function(e){e.O(0,[163,916,181,915,477,774,888,179],function(){return e(e.s=5557)}),_N_E=e.O()}]);
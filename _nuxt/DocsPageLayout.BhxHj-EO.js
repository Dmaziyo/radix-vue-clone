import O from"./DocsAside.sKBCoJSn.js";import R from"./ProseCodeInline.Cj8u1AG2.js";import U from"./Alert.CWgcF1QV.js";import X from"./DocsPageBottom.DW4_uGwi.js";import Z from"./DocsPrevNext.Ce-ayoKA.js";import{d as G,V as K,ab as Q,v as W,I as m,r as $,q as Y,o as ee,ae as oe,b as u,X as A,w as h,J as t,c as g,g as r,f as x,e as _,Z as te,j as y,t as ae,F as ne,n as k,aa as se,af as ce,p as le,i as re,l as ie}from"./entry.B-4S8tri.js";import pe from"./DocsToc.DLuKCdvJ.js";import"./slot.BHjyL75W.js";import"./node.2ETV-d1z.js";import"./ProseA.B07rB49b.js";import"./EditOnLink.vue.DDKURAdF.js";import"./DocsTocLinks.BCu0lUV-.js";const ue=d=>(le("data-v-e7480aa7"),d=d(),re(),d),_e={class:"page-body"},de={key:1,class:"toc"},me={class:"toc-wrapper"},fe=ue(()=>_("span",{class:"title"},"Table of Contents",-1)),ve=G({__name:"DocsPageLayout",setup(d){const{page:n}=K(),{config:f,tree:T}=Q(),j=W(),F=(e,o=!0)=>{var a;return typeof((a=n.value)==null?void 0:a[e])<"u"?n.value[e]:o},b=m(()=>{var e,o,a;return!n.value||((a=(o=(e=n.value)==null?void 0:e.body)==null?void 0:o.children)==null?void 0:a.length)>0}),S=m(()=>{var e,o,a,c,l;return((e=n.value)==null?void 0:e.toc)!==!1&&((l=(c=(a=(o=n.value)==null?void 0:o.body)==null?void 0:a.toc)==null?void 0:c.links)==null?void 0:l.length)>=2}),C=m(()=>{var e,o,a,c,l;return((e=n.value)==null?void 0:e.aside)!==!1&&(((o=T.value)==null?void 0:o.length)>1||((l=(c=(a=T.value)==null?void 0:a[0])==null?void 0:c.children)==null?void 0:l.length))}),H=m(()=>F("bottom",!0)),i=$(!1),s=$(null),v=()=>j.path.split("/").slice(0,2).join("/"),p=Y("asideScroll",()=>{var e;return{parentPath:v(),scrollTop:((e=s.value)==null?void 0:e.scrollTop)||0}});function P(){s.value&&(s.value.scrollHeight===0&&setTimeout(P,0),s.value.scrollTop=p.value.scrollTop)}return ee(()=>{p.value.parentPath!==v()?(p.value.parentPath=v(),p.value.scrollTop=0):P()}),oe(()=>{s.value&&(p.value.scrollTop=s.value.scrollTop)}),(e,o)=>{var w,B,D,I,N,V;const a=O,c=R,l=U,M=X,q=Z,z=se,E=pe,J=ce;return u(),A(J,{fluid:(B=(w=t(f))==null?void 0:w.main)==null?void 0:B.fluid,padded:(I=(D=t(f))==null?void 0:D.main)==null?void 0:I.padded,class:k(["docs-page-content",{fluid:(V=(N=t(f))==null?void 0:N.main)==null?void 0:V.fluid,"has-toc":t(S),"has-aside":t(C)}])},{default:h(()=>[t(C)?(u(),g("aside",{key:0,ref_key:"asideNav",ref:s,class:"aside-nav"},[r(a,{class:"app-aside"})],512)):x("",!0),_("article",_e,[t(b)?te(e.$slots,"default",{key:0},void 0,!0):(u(),A(l,{key:1,type:"info"},{default:h(()=>[y(" Start writing in "),r(c,null,{default:h(()=>[y("content/"+ae(t(n)._file),1)]),_:1}),y(" to see this page taking shape. ")]),_:1})),t(b)&&t(n)&&t(H)?(u(),g(ne,{key:2},[r(M),r(q)],64)):x("",!0)]),t(S)?(u(),g("div",de,[_("div",me,[_("button",{onClick:o[0]||(o[0]=L=>i.value=!t(i))},[fe,r(z,{name:"heroicons-outline:chevron-right",class:k(["icon",[t(i)&&"rotate"]])},null,8,["class"])]),_("div",{class:k(["docs-toc-wrapper",[t(i)&&"opened"]])},[r(E,{onMove:o[1]||(o[1]=L=>i.value=!1)})],2)])])):x("",!0)]),_:3},8,["fluid","padded","class"])}}}),De=ie(ve,[["__scopeId","data-v-e7480aa7"]]);export{De as default};
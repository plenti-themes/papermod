import{SvelteComponent,append,attr,check_outros,children,claim_component,claim_element,claim_space,claim_text,create_component,destroy_component,detach,element,group_outros,init,insert,mount_component,safe_not_equal,set_data,space,text,transition_in,transition_out}from"../web_modules/svelte/internal/index.mjs";import Archive from"../components/archive.js";import Search from"../components/search.js";import TagsList from"../components/tagsList.js";function create_if_block_2(e){let t,n;return t=new Archive({props:{allContent:e[1]}}),{c(){create_component(t.$$.fragment)},l(e){claim_component(t.$$.fragment,e)},m(e,s){mount_component(t,e,s),n=!0},p(e,n){const s={};n&2&&(s.allContent=e[1]),t.$set(s)},i(e){if(n)return;transition_in(t.$$.fragment,e),n=!0},o(e){transition_out(t.$$.fragment,e),n=!1},d(e){destroy_component(t,e)}}}function create_if_block_1(e){let t,n;return t=new Search({props:{allContent:e[1]}}),{c(){create_component(t.$$.fragment)},l(e){claim_component(t.$$.fragment,e)},m(e,s){mount_component(t,e,s),n=!0},p(e,n){const s={};n&2&&(s.allContent=e[1]),t.$set(s)},i(e){if(n)return;transition_in(t.$$.fragment,e),n=!0},o(e){transition_out(t.$$.fragment,e),n=!1},d(e){destroy_component(t,e)}}}function create_if_block(e){let t,n;return t=new TagsList({props:{allContent:e[1]}}),{c(){create_component(t.$$.fragment)},l(e){claim_component(t.$$.fragment,e)},m(e,s){mount_component(t,e,s),n=!0},p(e,n){const s={};n&2&&(s.allContent=e[1]),t.$set(s)},i(e){if(n)return;transition_in(t.$$.fragment,e),n=!0},o(e){transition_out(t.$$.fragment,e),n=!1},d(e){destroy_component(t,e)}}}function create_fragment(e){let o,i,u,f,d,l,h,c,a,m,r,s=e[0]==="archive"&&create_if_block_2(e),n=e[0]==="search"&&create_if_block_1(e),t=e[0]==="tags"&&create_if_block(e);return{c(){o=element("section"),i=element("h1"),u=text(e[0]),f=space(),s&&s.c(),d=space(),n&&n.c(),l=space(),t&&t.c(),h=space(),c=element("p"),a=element("a"),m=text("Back home"),this.h()},l(r){o=claim_element(r,"SECTION",{class:!0});var g,v,b,p=children(o);i=claim_element(p,"H1",{class:!0}),g=children(i),u=claim_text(g,e[0]),g.forEach(detach),f=claim_space(p),s&&s.l(p),d=claim_space(p),n&&n.l(p),l=claim_space(p),t&&t.l(p),h=claim_space(p),c=claim_element(p,"P",{}),v=children(c),a=claim_element(v,"A",{href:!0}),b=children(a),m=claim_text(b,"Back home"),b.forEach(detach),v.forEach(detach),p.forEach(detach),this.h()},h(){attr(i,"class","svelte-vnha6v"),attr(a,"href","."),attr(o,"class","isMarginAutoCentered svelte-vnha6v")},m(e,p){insert(e,o,p),append(o,i),append(i,u),append(o,f),s&&s.m(o,null),append(o,d),n&&n.m(o,null),append(o,l),t&&t.m(o,null),append(o,h),append(o,c),append(c,a),append(a,m),r=!0},p(e,[i]){(!r||i&1)&&set_data(u,e[0]),e[0]==="archive"?s?(s.p(e,i),i&1&&transition_in(s,1)):(s=create_if_block_2(e),s.c(),transition_in(s,1),s.m(o,d)):s&&(group_outros(),transition_out(s,1,1,()=>{s=null}),check_outros()),e[0]==="search"?n?(n.p(e,i),i&1&&transition_in(n,1)):(n=create_if_block_1(e),n.c(),transition_in(n,1),n.m(o,l)):n&&(group_outros(),transition_out(n,1,1,()=>{n=null}),check_outros()),e[0]==="tags"?t?(t.p(e,i),i&1&&transition_in(t,1)):(t=create_if_block(e),t.c(),transition_in(t,1),t.m(o,h)):t&&(group_outros(),transition_out(t,1,1,()=>{t=null}),check_outros())},i(){if(r)return;transition_in(s),transition_in(n),transition_in(t),r=!0},o(){transition_out(s),transition_out(n),transition_out(t),r=!1},d(e){e&&detach(o),s&&s.d(),n&&n.d(),t&&t.d()}}}function instance(e,t,n){let{page:s}=t,{allContent:o}=t;return e.$$set=e=>{"page"in e&&n(0,s=e.page),"allContent"in e&&n(1,o=e.allContent)},[s,o]}class Component extends SvelteComponent{constructor(e){super(),init(this,e,instance,create_fragment,safe_not_equal,{page:0,allContent:1})}}export default Component
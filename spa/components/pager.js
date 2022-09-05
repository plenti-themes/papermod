import{SvelteComponent,append,attr,children,claim_element,claim_space,claim_text,destroy_each,detach,element,empty,init,insert,noop,safe_not_equal,set_data,space,text}from"../web_modules/svelte/internal/index.mjs";function get_each_context(e,t,n){const s=e.slice();return s[2]=t[n],s[4]=n,s}function get_each_context_1(e,t,n){const s=e.slice();return s[4]=t[n],s}function create_else_block_1(){let t,s,a,i,n,o,r;return{c(){t=element("li"),s=element("span"),a=text("| <"),i=space(),n=element("li"),o=element("span"),r=text("<"),this.h()},l(e){t=claim_element(e,"LI",{class:!0});var c,l,d,u=children(t);s=claim_element(u,"SPAN",{class:!0}),c=children(s),a=claim_text(c,"| <"),c.forEach(detach),u.forEach(detach),i=claim_space(e),n=claim_element(e,"LI",{class:!0}),l=children(n),o=claim_element(l,"SPAN",{class:!0}),d=children(o),r=claim_text(d,"<"),d.forEach(detach),l.forEach(detach),this.h()},h(){attr(s,"class","svelte-vbs5dj"),attr(t,"class","svelte-vbs5dj"),attr(o,"class","svelte-vbs5dj"),attr(n,"class","svelte-vbs5dj")},m(e,c){insert(e,t,c),append(t,s),append(s,a),insert(e,i,c),insert(e,n,c),append(n,o),append(o,r)},p:noop,d(e){e&&detach(t),e&&detach(i),e&&detach(n)}}}function create_if_block_3(e){let n,s,r,i,o,t,c,a;return{c(){n=element("li"),s=element("a"),r=text("| <"),i=space(),o=element("li"),t=element("a"),c=text("<"),this.h()},l(e){n=claim_element(e,"LI",{class:!0});var a,l,d,u=children(n);s=claim_element(u,"A",{class:!0,href:!0}),a=children(s),r=claim_text(a,"| <"),a.forEach(detach),u.forEach(detach),i=claim_space(e),o=claim_element(e,"LI",{class:!0}),l=children(o),t=claim_element(l,"A",{class:!0,href:!0}),d=children(t),c=claim_text(d,"<"),d.forEach(detach),l.forEach(detach),this.h()},h(){attr(s,"class","arrowed svelte-vbs5dj"),attr(s,"href","/"),attr(n,"class","svelte-vbs5dj"),attr(t,"class","arrowed svelte-vbs5dj"),attr(t,"href",a="/"+(e[0]-1)),attr(o,"class","svelte-vbs5dj")},m(e,a){insert(e,n,a),append(n,s),append(s,r),insert(e,i,a),insert(e,o,a),append(o,t),append(t,c)},p(e,n){n&1&&a!==(a="/"+(e[0]-1))&&attr(t,"href",a)},d(e){e&&detach(n),e&&detach(i),e&&detach(o)}}}function create_if_block_2(e){let n,t,s=e[0]-e[4]+"",o,i;return{c(){n=element("li"),t=element("a"),o=text(s),this.h()},l(e){n=claim_element(e,"LI",{class:!0});var i,a=children(n);t=claim_element(a,"A",{href:!0,class:!0}),i=children(t),o=claim_text(i,s),i.forEach(detach),a.forEach(detach),this.h()},h(){attr(t,"href",i="/"+(e[0]-e[4])),attr(t,"class","svelte-vbs5dj"),attr(n,"class","svelte-vbs5dj")},m(e,s){insert(e,n,s),append(n,t),append(t,o)},p(e,n){n&1&&s!==(s=e[0]-e[4]+"")&&set_data(o,s),n&1&&i!==(i="/"+(e[0]-e[4]))&&attr(t,"href",i)},d(e){e&&detach(n)}}}function create_each_block_1(e){let n,t=e[0]-e[4]>0&&create_if_block_2(e);return{c(){t&&t.c(),n=empty()},l(e){t&&t.l(e),n=empty()},m(e,s){t&&t.m(e,s),insert(e,n,s)},p(e,s){e[0]-e[4]>0?t?t.p(e,s):(t=create_if_block_2(e),t.c(),t.m(n.parentNode,n)):t&&(t.d(1),t=null)},d(e){t&&t.d(e),e&&detach(n)}}}function create_if_block_1(e){let n,t,s=e[0]+(e[4]+1)+"",o,i;return{c(){n=element("li"),t=element("a"),o=text(s),this.h()},l(e){n=claim_element(e,"LI",{class:!0});var i,a=children(n);t=claim_element(a,"A",{href:!0,class:!0}),i=children(t),o=claim_text(i,s),i.forEach(detach),a.forEach(detach),this.h()},h(){attr(t,"href",i="/"+(e[0]+(e[4]+1))),attr(t,"class","svelte-vbs5dj"),attr(n,"class","svelte-vbs5dj")},m(e,s){insert(e,n,s),append(n,t),append(t,o)},p(e,n){n&1&&s!==(s=e[0]+(e[4]+1)+"")&&set_data(o,s),n&1&&i!==(i="/"+(e[0]+(e[4]+1)))&&attr(t,"href",i)},d(e){e&&detach(n)}}}function create_each_block(e){let n,t=e[0]+(e[4]+1)<=e[1]&&create_if_block_1(e);return{c(){t&&t.c(),n=empty()},l(e){t&&t.l(e),n=empty()},m(e,s){t&&t.m(e,s),insert(e,n,s)},p(e,s){e[0]+(e[4]+1)<=e[1]?t?t.p(e,s):(t=create_if_block_1(e),t.c(),t.m(n.parentNode,n)):t&&(t.d(1),t=null)},d(e){t&&t.d(e),e&&detach(n)}}}function create_else_block(){let t,s,a,i,n,o,r;return{c(){t=element("li"),s=element("span"),a=text(">"),i=space(),n=element("li"),o=element("span"),r=text("> |"),this.h()},l(e){t=claim_element(e,"LI",{class:!0});var c,l,d,u=children(t);s=claim_element(u,"SPAN",{class:!0}),c=children(s),a=claim_text(c,">"),c.forEach(detach),u.forEach(detach),i=claim_space(e),n=claim_element(e,"LI",{class:!0}),l=children(n),o=claim_element(l,"SPAN",{class:!0}),d=children(o),r=claim_text(d,"> |"),d.forEach(detach),l.forEach(detach),this.h()},h(){attr(s,"class","svelte-vbs5dj"),attr(t,"class","svelte-vbs5dj"),attr(o,"class","svelte-vbs5dj"),attr(n,"class","svelte-vbs5dj")},m(e,c){insert(e,t,c),append(t,s),append(s,a),insert(e,i,c),insert(e,n,c),append(n,o),append(o,r)},p:noop,d(e){e&&detach(t),e&&detach(i),e&&detach(n)}}}function create_if_block(e){let o,n,l,a,r,s,t,c,i;return{c(){o=element("li"),n=element("a"),l=text(">"),r=space(),s=element("li"),t=element("a"),c=text("> |"),this.h()},l(e){o=claim_element(e,"LI",{class:!0});var i,a,d,u=children(o);n=claim_element(u,"A",{class:!0,href:!0}),i=children(n),l=claim_text(i,">"),i.forEach(detach),u.forEach(detach),r=claim_space(e),s=claim_element(e,"LI",{class:!0}),a=children(s),t=claim_element(a,"A",{class:!0,href:!0}),d=children(t),c=claim_text(d,"> |"),d.forEach(detach),a.forEach(detach),this.h()},h(){attr(n,"class","arrowed svelte-vbs5dj"),attr(n,"href",a="/"+(e[0]+1)),attr(o,"class","svelte-vbs5dj"),attr(t,"class","arrowed svelte-vbs5dj"),attr(t,"href",i="/"+e[1]),attr(s,"class","svelte-vbs5dj")},m(e,i){insert(e,o,i),append(o,n),append(n,l),insert(e,r,i),insert(e,s,i),append(s,t),append(t,c)},p(e,s){s&1&&a!==(a="/"+(e[0]+1))&&attr(n,"href",a),s&2&&i!==(i="/"+e[1])&&attr(t,"href",i)},d(e){e&&detach(o),e&&detach(r),e&&detach(s)}}}function create_fragment(e){let t,d,m,c,a,h,p,u;function v(e){return e[0]>1?create_if_block_3:create_else_block_1}let l=v(e,-1),o=l(e),g=[3,2,1],s=[];for(let t=0;t<3;t+=1)s[t]=create_each_block_1(get_each_context_1(e,g,t));let r=Array(3),n=[];for(let t=0;t<r.length;t+=1)n[t]=create_each_block(get_each_context(e,r,t));function b(e){return e[0]<e[1]?create_if_block:create_else_block}let f=b(e,-1),i=f(e);return{c(){t=element("ul"),o.c(),d=space();for(let e=0;e<3;e+=1)s[e].c();m=space(),c=element("li"),a=element("span"),h=text(e[0]),p=space();for(let e=0;e<n.length;e+=1)n[e].c();u=space(),i.c(),this.h()},l(r){t=claim_element(r,"UL",{class:!0});var f,g,l=children(t);o.l(l),d=claim_space(l);for(let e=0;e<3;e+=1)s[e].l(l);m=claim_space(l),c=claim_element(l,"LI",{class:!0}),f=children(c),a=claim_element(f,"SPAN",{class:!0}),g=children(a),h=claim_text(g,e[0]),g.forEach(detach),f.forEach(detach),p=claim_space(l);for(let e=0;e<n.length;e+=1)n[e].l(l);u=claim_space(l),i.l(l),l.forEach(detach),this.h()},h(){attr(a,"class","svelte-vbs5dj"),attr(c,"class","svelte-vbs5dj"),attr(t,"class","svelte-vbs5dj")},m(e,r){insert(e,t,r),o.m(t,null),append(t,d);for(let e=0;e<3;e+=1)s[e].m(t,null);append(t,m),append(t,c),append(c,a),append(a,h),append(t,p);for(let e=0;e<n.length;e+=1)n[e].m(t,null);append(t,u),i.m(t,null)},p(e,[a]){if(l===(l=v(e,a))&&o?o.p(e,a):(o.d(1),o=l(e),o&&(o.c(),o.m(t,d))),a&1){g=[3,2,1];let n;for(n=0;n<3;n+=1){const o=get_each_context_1(e,g,n);s[n]?s[n].p(o,a):(s[n]=create_each_block_1(o),s[n].c(),s[n].m(t,m))}for(;n<3;n+=1)s[n].d(1)}if(a&1&&set_data(h,e[0]),a&3){r=Array(3);let s;for(s=0;s<r.length;s+=1){const o=get_each_context(e,r,s);n[s]?n[s].p(o,a):(n[s]=create_each_block(o),n[s].c(),n[s].m(t,u))}for(;s<n.length;s+=1)n[s].d(1);n.length=r.length}f===(f=b(e,a))&&i?i.p(e,a):(i.d(1),i=f(e),i&&(i.c(),i.m(t,null)))},i:noop,o:noop,d(e){e&&detach(t),o.d(),destroy_each(s,e),destroy_each(n,e),i.d()}}}function instance(e,t,n){let{currentPage:s}=t,{totalPages:o}=t;return e.$$set=e=>{"currentPage"in e&&n(0,s=e.currentPage),"totalPages"in e&&n(1,o=e.totalPages)},[s,o]}class Component extends SvelteComponent{constructor(e){super(),init(this,e,instance,create_fragment,safe_not_equal,{currentPage:0,totalPages:1})}}export default Component
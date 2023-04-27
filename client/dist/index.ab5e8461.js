window.smoothScroll=function(o){let l=o;do{if(l=l.parentNode,!l)return;l.scrollTop+=1}while(0==l.scrollTop);let e=0;do{if(o==l)break;e+=o.offsetTop}while(o=o.offsetParent);scroll=function(o,l,e,r){++r>30||(o.scrollTop=l+(e-l)/30*r,setTimeout((function(){scroll(o,l,e,r)}),20))},scroll(l,l.scrollTop,e,0)};
//# sourceMappingURL=index.ab5e8461.js.map

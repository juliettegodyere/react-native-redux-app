(window.webpackJsonp=window.webpackJsonp||[]).push([[10],{ECpG:function(e,t,n){},EjUH:function(e,t,n){},LD1s:function(e,t,n){"use strict";var a=n("ZdSA"),r=n.n(a),o=n("LvY/"),i=n.n(o),s=n("wpen"),l=n.n(s),c=n("u7UQ"),u=n.n(c),d=n("eeNd"),p=n.n(d),m=(n("i1Qb"),n("ecfV"),n("cDcd")),h=n.n(m),f=n("TSYQ"),v=n.n(f),g=n("xeH2"),b=n.n(g);n("ECpG");function C(){}var k=function(e){function t(){i()(this,t);var e=u()(this,(t.__proto__||r()(t)).call(this));return e.closeDropdown=function(t){var n=e.props,a=n.closeHandleSelector;if(n.open||e.state.open){var r=b()(t.target);(a&&r.closest(a).length||0===r.closest(e.refs.dropdown).length)&&e.setState({open:!1},e.props.onClose)}},e.state={},e}return p()(t,e),l()(t,[{key:"componentDidMount",value:function(){var e=this;b()(this.refs.dropdown).on("click",".js-dropdown-toggle, .dropdown-handle",function(){e.props.disabled||e.setState({open:!e.state.open},function(){e.props[e.state.open?"onOpen":"onClose"]()})}),b()("body").on("click",this.closeDropdown)}},{key:"componentWillReceiveProps",value:function(e){var t=e.disabled,n=e.open;(t||n!==this.props.open)&&this.setState({open:!t&&n})}},{key:"componentWillUnmount",value:function(){b()(this.refs.dropdown).off("click"),b()("body").off("click",this.closeDropdown)}},{key:"render",value:function(){var e=this.props,t=this.state,n=void 0!==e.open?e.open:t.open;return h.a.createElement("div",{ref:"dropdown",className:v()("dropdown",e.className,{open:n})},e.children)}}]),t}(h.a.Component);k.defaultProps={onOpen:C,onClose:C,disabled:!1},t.a=k},S1Ak:function(e,t,n){},SDNY:function(e,t,n){},eqDc:function(e,t,n){},foLx:function(e,t,n){"use strict";var a=n("cDcd"),r=n.n(a),o=n("TSYQ"),i=n.n(o),s=n("eOGF"),l=(n("SDNY"),"http://cdn.hrcdn.net/hackerrank/assets/gravatar.jpg"),c=function(e){var t=e.avatar,n=e.defaultAvatar;return void 0!==t&&t!==(void 0===n?l:n)?function(e){var t=e.avatar,n=e.defaultAvatar,a=void 0===n?l:n,o=e.size,s=e.avatarClass;return r.a.createElement("img",{src:t,height:o,width:o,className:i()("ui-avatar__img",s),onError:function(e){e.target.src!==a&&(e.target.src=a)}})}(e):function(e){var t=e.name,n=e.size,a=e.avatarClass,o=e.customColor,l=e.customFontSize,c=o||Object(s.L)(t),u=Object(s.o)(t),d=l||Math.max(Math.round(n/3),10)+"px";return r.a.createElement("span",{className:i()("ui-avatar__initials",a),style:{backgroundColor:c,width:n+"px",height:n+"px",fontSize:d}},r.a.createElement("span",{className:"ui-avatar__text absolute-center"},u))}(e)};c.defaultProps={size:25},t.a=c},kDgx:function(e,t,n){"use strict";n.d(t,"b",function(){return N}),n.d(t,"a",function(){return y});var a=n("ZdSA"),r=n.n(a),o=n("LvY/"),i=n.n(o),s=n("wpen"),l=n.n(s),c=n("u7UQ"),u=n.n(c),d=n("eeNd"),p=n.n(d),m=n("i1Qb"),h=n.n(m),f=n("cDcd"),v=n.n(f),g=n("TSYQ"),b=n.n(g),C=n("LD1s"),k=(n("eqDc"),function(){}),y=function(e){function t(){return i()(this,t),u()(this,(t.__proto__||r()(t)).apply(this,arguments))}return p()(t,e),l()(t,[{key:"render",value:function(){return null}}]),t}(f.PureComponent);y.defaultProps={renderCell:function(e){return e},renderHeaderCell:function(e){return e},onColumnSelect:k};var N=function(e){function t(e){i()(this,t);var n=u()(this,(t.__proto__||r()(t)).call(this,e));return E.call(n),n.columnsConfig=n.getColumnsConfig(e),n}return p()(t,e),l()(t,[{key:"componentWillReceiveProps",value:function(e){this.columnsConfig=this.getColumnsConfig(e)}},{key:"render",value:function(){var e=this.props,t=e.tableClass,n=e.noHeader,a=e.hover,r=e.data,o={"ui-table-hover":a,"first-col-raised":e.firstColRaised&&r.length};return v.a.createElement("div",{className:b()("ui-table",t,o)},!n&&this.renderHeader(),this.renderBody())}}]),t}(f.Component);N.defaultProps={data:[],noHeader:!1,flexLayout:!0,hover:!1,getRowProps:k,firstColRaised:!0};var E=function(){var e=this;this.getColumnsConfig=function(e){var t=e.children,n=e.flexLayout;if(!t)return[];Array.isArray(t)||(t=[t]);var a=t.filter(function(e){return!!e}).map(function(e){return h()({},e.props)});if(n){var r=a.reduce(function(e,t){return e+Number(t.flex)},0);a.forEach(function(e){e.flexRule=e.flex+" 1 "+100*Number(e.flex)/r+"%"})}return a},this.getColumnStyle=function(t){var n={},a=e.props.flexLayout?"flex":"width",r="width"===a?a:"flexRule";return n[a]=t[r],n},this.renderHeaderDropdown=function(e){var t=e.columnKey,n=e.onColumnSelect,a=e.columnOptions,r=e.header,o=e.dropdownProps;return v.a.createElement(C.a,h()({className:"header-dropdown",closeHandleSelector:".header-item"},o),v.a.createElement("div",{className:"dropdown-selected js-dropdown-toggle"},v.a.createElement("span",{className:"selected-column"},r),v.a.createElement("i",{className:"ui-icon-chevron-down"})),v.a.createElement("ul",{className:"header-list"},a.map(function(e,a){var r=e.key,o=e.name;return v.a.createElement("li",{key:a,className:b()("header-item",{selected:r===t}),onClick:n.bind(null,r,o)},o)})))},this.layoutClass=function(){return e.props.flexLayout?"flex":"table clearfix"},this.renderHeader=function(){var t=e.columnsConfig;return v.a.createElement("div",{className:"table-header-wrapper"},v.a.createElement("header",{className:b()("table-header",e.layoutClass())},t.map(function(t,n){var a=t.headerClass,r=t.columnOptions,o=t.header,i=t.renderHeaderCell;return v.a.createElement("div",{key:n,className:b()("table-header-column",a),style:e.getColumnStyle(t)},r?e.renderHeaderDropdown(t):v.a.createElement("div",{className:"ellipsis"},i(o,t)))})))},this.renderRow=function(t,n,a){var r=e.columnsConfig,o=a?a.className:null;return v.a.createElement("div",h()({key:n},a,{className:b()("table-row-wrapper",o)}),v.a.createElement("div",{className:b()("table-row",e.layoutClass())},r.map(function(n,r){var o=n.columnClass,i=n.columnKey,s=n.renderCell;return v.a.createElement("div",{key:r,className:b()("table-row-column ellipsis",o),style:e.getColumnStyle(n)},s(t[i],t,n,a))})))},this.renderBody=function(){var t=e.props,n=t.data,a=t.getRowProps;return v.a.createElement("div",{className:"table-body"},n.map(function(t,n){var r=a(t,n);return e.renderRow(t,n,r)}))}}},"xxD/":function(e,t,n){"use strict";var a=n("ZdSA"),r=n.n(a),o=n("LvY/"),i=n.n(o),s=n("wpen"),l=n.n(s),c=n("u7UQ"),u=n.n(c),d=n("eeNd"),p=n.n(d),m=n("i1Qb"),h=n.n(m),f=n("cDcd"),v=n.n(f),g=(n("17x9"),n("MGin")),b=n("TSYQ"),C=n.n(b),k=n("eOGF"),y=(n("S1Ak"),function(e){function t(){var e,n,a,o;i()(this,t);for(var s=arguments.length,l=Array(s),c=0;c<s;c++)l[c]=arguments[c];return o=n=u()(this,(e=t.__proto__||r()(t)).call.apply(e,[this].concat(l))),n.handleClick=function(e,t){n.props.currentPage===e&&t.preventDefault()},n.getQuery=function(e,t){var a=n.props,r=a.removeQueries,o=a.addQueries,i=h()({},e.query);return r.forEach(function(e){delete i[e]}),h()({},i,{page:t},o)},n.getLinkAttributes=function(e,t){var a=n.props,r=a.currentPage,o=a.pageOnQuery,i=a.nonUrlPages,s=(a.removeQueries,a.addQueries,n.getPath()),l=void 0;return l=i?void 0:o?function(t){return h()({},t,{query:n.getQuery(t,e)})}:function(t){return h()({},t,{pathname:s+"/"+e})},{"data-analytics":"Pagination","data-attr1":t,"data-attr8":e,"data-attr7":r,onClick:n.handleClick.bind(n,e),to:l}},n.onPageChange=function(e){e!==n.props.currentPage&&n.props.onPageChange(e)},a=o,u()(n,a)}return p()(t,e),l()(t,[{key:"getPath",value:function(){var e=this.props.pageOnQuery,t=this.context.location.pathname;if(e)return t;var n=t.split("/");return Number(n[n.length-1])&&n.pop(),n.join("/")}},{key:"renderMetaInfo",value:function(e,t,n,a){var r=this.context.location,o=this.getLinkAttributes,i=o(n,"Left").to(r),s=Object(k.b)(i.pathname,i.query),l=o(a,"Right").to(r),c=Object(k.b)(l.pathname,l.query);return v.a.createElement("div",null,!e&&v.a.createElement("link",{rel:"prev",href:s}),!t&&v.a.createElement("link",{rel:"next",href:c}))}},{key:"renderEllipsis",value:function(){return v.a.createElement("li",{className:C()("page-item page-ellipsis")},v.a.createElement(g.Link,{className:"page-link"},"..."))}},{key:"render",value:function(){var e=this.props,t=this.getLinkAttributes,n=(this.onPageChange,e.totalItems),a=e.itemPerPage,r=e.maxPageCount,o=e.textControls,i=e.theme,s=e.nonUrlPages,l=Number(e.currentPage),c=Math.ceil(n/a),u=1===l,d=l===c,p=Math.max(1,l-1),m=Math.min(c,l+1),f=Math.max(2,Math.ceil(l-r/2));l>c-r&&(f=Math.max(2,c-r)),c<r&&(f=2);var b=[],k=Math.min(r+f,c);1===r&&2===l&&k!==c&&(k+=1),1===r&&l===c-1&&2!==f&&(f-=1);for(var y=f-1>1,N=c-(k-1)>1,E=f;E<k;E++)b.push(v.a.createElement("li",{key:E,className:C()("page-item number",{active:E===l,"first-item":E===f,"last-item":E===k})},v.a.createElement(g.Link,h()({className:"page-link"},t(E,"Page"),{onClick:this.onPageChange.bind(this,E)}),E)));return v.a.createElement("div",{className:C()("ui-pagination",i,this.props.className)},v.a.createElement("ul",null,v.a.createElement("li",{className:C()("page-item prev-page",{disabled:u})},v.a.createElement(g.Link,h()({className:"prev-page-link page-link"},t(p,"Left"),{onClick:this.onPageChange.bind(this,p)}),o?v.a.createElement("span",{className:"text-control"},"Prev"):v.a.createElement("span",{className:"icon ui-icon-arrow-left"}))),v.a.createElement("li",{className:C()("page-item first-page",{active:1===l,"first-item":1===f})},v.a.createElement(g.Link,h()({className:"page-link"},t(1,"Page"),{onClick:this.onPageChange.bind(this,1)}),1)),y&&this.renderEllipsis(),b,N&&this.renderEllipsis(),c>1&&v.a.createElement("li",{key:c,className:C()("page-item last-page",{active:c===l})},v.a.createElement(g.Link,h()({className:"page-link"},t(c,"Page"),{onClick:this.onPageChange.bind(this,c)}),c)),v.a.createElement("li",{className:C()("page-item next-page",{disabled:d})},v.a.createElement(g.Link,h()({className:"last-page-link page-link"},t(m,"Right"),{onClick:this.onPageChange.bind(this,m)}),o?v.a.createElement("span",{className:"text-control"},"Next"):v.a.createElement("span",{className:"icon ui-icon-arrow-right"})))),!s&&this.renderMetaInfo(u,d,p,m))}}]),t}(v.a.Component));y.contextTypes={location:Object},y.defaultProps={itemPerPage:20,currentPage:1,maxPageCount:5,theme:"new",addQueries:{},removeQueries:[],onPageChange:function(){}},t.a=y},z5MK:function(e,t,n){"use strict";var a=n("ZdSA"),r=n.n(a),o=n("LvY/"),i=n.n(o),s=n("wpen"),l=n.n(s),c=n("u7UQ"),u=n.n(c),d=n("eeNd"),p=n.n(d),m=n("cDcd"),h=n.n(m),f=n("TSYQ"),v=n.n(f),g=n("MGin"),b=n("LD1s");n("EjUH");var C=function(e){function t(){var e,n,a,o;i()(this,t);for(var s=arguments.length,l=Array(s),c=0;c<s;c++)l[c]=arguments[c];return o=n=u()(this,(e=t.__proto__||r()(t)).call.apply(e,[this].concat(l))),n.renderTabItem=function(e){var t=n.props,a=t.renderItem,r=t.activeTab,o=t.onTabClick,i=e.idx,s=e.tab;return h.a.createElement("li",{key:i,id:s.title,className:v()("tab-item",{active:i===r}),onClick:function(){return o(i,s)}},a(s,i))},a=o,u()(n,a)}return p()(t,e),l()(t,[{key:"getTabsWithIndex",value:function(){return this.props.tabList.map(function(e,t){return{idx:t,tab:e}})}},{key:"renderTabs",value:function(){var e=this.props,t=e.visibleTabCount,n=e.activeTab,a=this.getTabsWithIndex(),r=a.slice(0,t);return n>=t&&(r[r.length-1]=a[n]),r.map(this.renderTabItem)}},{key:"renderTabDropdown",value:function(){var e=this.props,t=e.dropdownTitle,n=e.tabList,a=e.visibleTabCount;if(!(n.length<=a)){var r=this.getTabsWithIndex();return h.a.createElement(b.a,{className:"dropdown dropdown-auth tab-item"},h.a.createElement(g.Link,{className:"js-dropdown-toggle js-link dropdown-title",to:""},t,h.a.createElement("i",{className:"ui-icon-chevron-down"})),h.a.createElement("div",{className:"dropdown-menu drop-list pull-right"},h.a.createElement("ul",{className:"dropdown-ul"},r.map(this.renderTabItem))))}}},{key:"render",value:function(){var e=this.props,t=e.visibleTabCount,n=e.className;return h.a.createElement("div",{className:v()("render-list clearfix",n)},h.a.createElement("ul",{className:"tab-header"},this.renderTabs()),t&&this.renderTabDropdown())}}]),t}(h.a.Component);C.defaultProps={activeTab:0,dropdownTitle:"More",onTabClick:function(){},renderItem:function(e){return e}};var k=function(e){function t(){return i()(this,t),u()(this,(t.__proto__||r()(t)).apply(this,arguments))}return p()(t,e),l()(t,[{key:"render",value:function(){var e=this.props,t=e.children,n=e.className;return h.a.createElement("div",{className:v()("tab-list-content",n)},t)}}]),t}(h.a.Component),y=function(e){function t(){return i()(this,t),u()(this,(t.__proto__||r()(t)).apply(this,arguments))}return p()(t,e),l()(t,[{key:"render",value:function(){var e=this.props,t=e.children,n=e.className;return h.a.createElement("div",{className:v()("ui-tabs-wrap",n)},t)}}]),t}(h.a.Component);y.List=C,y.Content=k,t.a=y}}]);
//# sourceMappingURL=https://staging.hackerrank.net/assets/sourcemaps/vendors~hackerrank_r_challenge~hackerrank_r_leaderboard~hackerrank_r_leaderboardv2-fe33b60cdf9a08a34d22.js.map
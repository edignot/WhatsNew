(this["webpackJsonpwhats-new"]=this["webpackJsonpwhats-new"]||[]).push([[0],[,,,,,,,function(e,t,a){e.exports=a(19)},,,,,function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){"use strict";a.r(t);var n=a(0),s=a.n(n),c=a(6),r=a.n(c),l=(a(12),a(1)),i=a(2),u=a(4),o=a(3),h=(a(13),a(14),function(e){Object(u.a)(a,e);var t=Object(o.a)(a);function a(){var e;return Object(l.a)(this,a),(e=t.call(this)).updateInput=function(t){e.setState({searchInput:t.target.value})},e.searchNews=function(t){t.preventDefault(),e.props.searchNews(e.state.searchInput),e.setState({searchInput:""})},e.state={searchInput:""},e}return Object(i.a)(a,[{key:"render",value:function(){return s.a.createElement("form",{className:"search","data-testid":"search"},s.a.createElement("input",{onChange:this.updateInput,className:"search-input",placeholder:"Search for News",value:this.state.searchInput,type:"text"}),s.a.createElement("button",{onClick:this.searchNews,className:"search-btn"},"SEARCH"))}}]),a}(n.Component)),m=(a(15),function(e){var t=e.types.map((function(t){return s.a.createElement("li",{className:e.selected===t?"type-selected":"type","data-testid":e.selected===t?"type-selected":"type",onClick:function(){return e.changeMenu(t)},id:t,key:t},t)}));return s.a.createElement("nav",null,s.a.createElement("div",{className:"menu-img"},s.a.createElement("h1",{onClick:function(){e.changeMenu("local")}}," What's New?")),s.a.createElement("ul",{className:"type-container"},t))}),d=(a(16),a(17),function(e){return s.a.createElement("article",{className:"article"},s.a.createElement("img",{className:"article-img","data-testid":e.img,src:e.img,alt:""}),s.a.createElement("h2",{className:"article-head"},e.headline),s.a.createElement("p",{className:"article-text"},e.description),s.a.createElement("a",{className:"article-link","data-testid":e.url,href:e.url,target:"_blank"},"READ MORE"))}),p=function(e){var t=e.news.map((function(e){return s.a.createElement(d,Object.assign({key:e.id},e))}));return s.a.createElement("section",{className:e.status?"container":"hide","data-testid":e.status?"container":"hide"},t)},f=(a(18),function(e){return s.a.createElement("div",{className:e.status?"hide":"not-found","data-testid":e.status?"hide":"not-found"},s.a.createElement("button",{className:"back-btn",onClick:function(){return e.changeMenu(e.selected)}},"x"),s.a.createElement("h2",{className:"search-message"},"Nothing found!"))}),w=function(e){Object(u.a)(a,e);var t=Object(o.a)(a);function a(){var e;return Object(l.a)(this,a),(e=t.call(this)).changeMenu=function(t){e.setState({news:e.state.allNews[t],selected:t})},e.searchNews=function(t){var a=e.state.news.filter((function(e){return e.description.toLowerCase().includes(t.toLowerCase())}));e.setState({news:a})},e.state={allNews:{},news:[],selected:""},e}return Object(i.a)(a,[{key:"componentDidMount",value:function(){var e=this;fetch("https://whats-new-api.herokuapp.com/api/v1/news").then((function(e){return e.json()})).then((function(t){return e.setState({allNews:t,news:t.local,selected:"local"})}))}},{key:"render",value:function(){return s.a.createElement("div",{className:"app"},s.a.createElement(h,{searchNews:this.searchNews}),s.a.createElement(m,{changeMenu:this.changeMenu,selected:this.state.selected,types:Object.keys(this.state.allNews)}),s.a.createElement(p,{news:this.state.news,status:this.state.news.length}),s.a.createElement(f,{status:this.state.news.length,selected:this.state.selected,changeMenu:this.changeMenu}))}}]),a}(n.Component);r.a.render(s.a.createElement(w,null),document.getElementById("root"))}],[[7,1,2]]]);
//# sourceMappingURL=main.1b71f6a0.chunk.js.map
(window.webpackJsonp=window.webpackJsonp||[]).push([[0],[,,,,,,,,,function(e,t,r){e.exports={Welcome:"welcome_Welcome__3lc2p",Button:"welcome_Button__y-FoE"}},function(e,t,r){e.exports={ScoreBoard:"scoreboard_ScoreBoard__3FrwC",Score:"scoreboard_Score__nD6fM"}},,,function(e,t,r){e.exports={Layout:"layout_Layout__1-wPo"}},function(e,t,r){e.exports={Row:"row_Row__uuy5w"}},function(e,t,r){e.exports={Square:"square_Square__1_CpR"}},function(e,t,r){e.exports={Circle:"circle_Circle__AuNUu"}},function(e,t,r){e.exports={Board:"board_Board__3DNV4"}},function(e,t,r){e.exports=r(28)},,,,,,function(e,t,r){},function(e,t,r){e.exports=r.p+"static/media/logo.5d5d9eef.svg"},function(e,t,r){},function(e,t,r){},function(e,t,r){"use strict";r.r(t);var i=r(0),n=r.n(i),a=r(12),c=r.n(a),u=(r(24),r(5)),s=(r(25),r(26),r(13)),o=r.n(s),l=function(e){return n.a.createElement("div",{className:o.a.Layout},e.children)},f=r(14),h=r.n(f),k=r(15),d=r.n(k),v=r(16),_=r.n(v),m=function(e){return n.a.createElement("div",{style:{backgroundColor:e.color},className:_.a.Circle})};var y=function(e){var t=function(e){switch(e){case"X":return"black";case"O":return"white";default:return"none"}}(e.char);return n.a.createElement("div",{onClick:e.onClick,className:d.a.Square},n.a.createElement(m,{color:t}))},p=function(e){return n.a.createElement("div",{className:h.a.Row},e.squares.map(function(t,r){return n.a.createElement(y,{onClick:function(){return e.squareTicked(r)},char:t,id:r})}))},g=r(17),b=r.n(g),w=function(e){return n.a.createElement("div",{className:b.a.Board},e.rows.map(function(t,r){return n.a.createElement(p,{squareTicked:function(t){return e.squareTicked(r,t)},squares:t,id:r})}))},O=r(4),E=r(3),j=r(1),C=r(2),S=r(7),B=r(6),N=r(8),x=function(){function e(t){Object(j.a)(this,e),this.surface=t}return Object(C.a)(e,[{key:"tickAble",value:function(e){for(var t=0;t<8;t++)for(var r=0;r<8;r++)if(this.check_available(t,r,e))return!0;return!1}},{key:"check_available",value:function(e,t,r){return""===this.surface[e][t]&&!!(this.check_up_left(e,t,r)||this.check_up_middle(e,t,r)||this.check_up_right(e,t,r)||this.check_left(e,t,r)||this.check_right(e,t,r)||this.check_down_left(e,t,r)||this.check_down_middle(e,t,r)||this.check_down_right(e,t,r))}},{key:"check_up_left",value:function(e,t,r){var i=this.surface;if(e<2||t<2)return!1;if(""===i[e-1][t-1]||i[e-1][t-1]===r)return!1;for(var n=e-2,a=t-2;n>=0&&a>=0;){if(""===i[n][a])return!1;if(i[n][a]===r)return!0;n--,a--}return!1}},{key:"check_up_middle",value:function(e,t,r){var i=this.surface;if(e<2)return!1;if(""===i[e-1][t]||i[e-1][t]===r)return!1;for(var n=e-2,a=t;n>=0;){if(""===i[n][a])return!1;if(i[n][a]===r)return!0;n--}return!1}},{key:"check_up_right",value:function(e,t,r){var i=this.surface;if(e<2||t>i[e].length-3)return!1;if(""===i[e-1][t+1]||i[e-1][t+1]===r)return!1;for(var n=e-2,a=t+2;n>=0&&a<i[n].length;){if(""===i[n][a])return!1;if(i[n][a]===r)return!0;n--,a++}return!1}},{key:"check_left",value:function(e,t,r){var i=this.surface;if(t<2)return!1;if(""===i[e][t-1]||i[e][t-1]===r)return!1;for(var n=e,a=t-2;a>=0;){if(""===i[n][a])return!1;if(i[n][a]===r)return!0;a--}return!1}},{key:"check_right",value:function(e,t,r){var i=this.surface;if(t>i[e].length-3)return!1;if(""===i[e][t+1]||i[e][t+1]===r)return!1;for(var n=e,a=t+2;a<i[n].length;){if(""===i[n][a])return!1;if(i[n][a]===r)return!0;a++}return!1}},{key:"check_down_left",value:function(e,t,r){var i=this.surface;if(e>i.length-3||t<2)return!1;if(""===i[e+1][t-1]||i[e+1][t-1]===r)return!1;for(var n=e+2,a=t-2;n<i.length&&a>=0;){if(""===i[n][a])return!1;if(i[n][a]===r)return!0;n++,a--}return!1}},{key:"check_down_middle",value:function(e,t,r){var i=this.surface;if(e>i.length-3)return!1;if(""===i[e+1][t]||i[e+1][t]===r)return!1;for(var n=e+2,a=t;n<i.length;){if(""===i[n][a])return!1;if(i[n][a]===r)return!0;n++}return!1}},{key:"check_down_right",value:function(e,t,r){var i=this.surface;if(e>i.length-3||t>i[e].length-3)return!1;if(""===i[e+1][t+1]||i[e+1][t+1]===r)return!1;for(var n=e+2,a=t+2;n<i.length&&a<i[n].length;){if(""===i[n][a])return!1;if(i[n][a]===r)return!0;n++,a++}return!1}}]),e}(),P=function(){function e(t){Object(j.a)(this,e),this.tickChecker=new x(t),this.surface=t}return Object(C.a)(e,[{key:"tick",value:function(e,t,r){return!!this.tickChecker.check_available(e,t,r)&&(this.tickChecker.check_up_left(e,t,r)&&this.tick_up_left(e,t,r),this.tickChecker.check_up_middle(e,t,r)&&this.tick_up_middle(e,t,r),this.tickChecker.check_up_right(e,t,r)&&this.tick_up_right(e,t,r),this.tickChecker.check_left(e,t,r)&&this.tick_left(e,t,r),this.tickChecker.check_right(e,t,r)&&this.tick_right(e,t,r),this.tickChecker.check_down_left(e,t,r)&&this.tick_down_left(e,t,r),this.tickChecker.check_down_middle(e,t,r)&&this.tick_down_middle(e,t,r),this.tickChecker.check_down_right(e,t,r)&&this.tick_down_right(e,t,r),this.surface[e][t]=r,!0)}},{key:"tick_up_left",value:function(e,t,r){for(e--,t--;this.surface[e][t]!==r;)this.surface[e][t]=r,e--,t--}},{key:"tick_up_middle",value:function(e,t,r){for(e--;this.surface[e][t]!==r;)this.surface[e][t]=r,e--}},{key:"tick_up_right",value:function(e,t,r){for(e--,t++;this.surface[e][t]!==r;)this.surface[e][t]=r,e--,t++}},{key:"tick_left",value:function(e,t,r){for(t--;this.surface[e][t]!==r;)this.surface[e][t]=r,t--}},{key:"tick_right",value:function(e,t,r){for(t++;this.surface[e][t]!==r;)this.surface[e][t]=r,t++}},{key:"tick_down_left",value:function(e,t,r){for(e++,t--;this.surface[e][t]!==r;)this.surface[e][t]=r,e++,t--}},{key:"tick_down_middle",value:function(e,t,r){for(e++;this.surface[e][t]!==r;)this.surface[e][t]=r,e++}},{key:"tick_down_right",value:function(e,t,r){for(e++,t++;this.surface[e][t]!==r;)this.surface[e][t]=r,e++,t++}}]),e}(),q=r(10),A=r.n(q);var X=function(e){var t=function(e){switch(e){case"X":return"black";case"O":return"white";default:return"none"}}(e.char);return n.a.createElement("div",{style:e.active?{color:"red",border:"1px solid red"}:null,className:A.a.Score},n.a.createElement(m,{color:t}),e.score)},T=function(e){var t=e.players;return n.a.createElement("div",{className:A.a.ScoreBoard},t.map(function(e,t){return n.a.createElement(X,{id:t,score:e.score,char:e.char,active:e.active})}))},F=function(){function e(t){Object(j.a)(this,e),this.char=t,this.score=2,this.active=!1,this.type="Human"}return Object(C.a)(e,[{key:"setScore",value:function(e){this.score=e}},{key:"setActive",value:function(){this.active=!0}},{key:"setUnactive",value:function(){this.active=!1}}]),e}(),W=F,R=function(e){function t(e){var r;return Object(j.a)(this,t),(r=Object(S.a)(this,Object(B.a)(t).call(this,e))).priorityBoard=[[1,2,2,2,2,2,2,1],[2,4,4,4,4,4,4,2],[2,4,3,3,3,3,4,2],[2,4,3,0,0,3,4,2],[2,4,3,0,0,3,4,2],[2,4,3,3,3,3,4,2],[2,4,4,4,4,4,4,2],[1,2,2,2,2,2,2,1]],r.type="Computer",r}return Object(N.a)(t,e),Object(C.a)(t,[{key:"updatePriorityBoard",value:function(e){for(var t=0;t<8;t++)for(var r=0;r<8;r++)""!=e[t][r]&&(this.priorityBoard[t][r]=0)}},{key:"getInput",value:function(e){return this.updatePriorityBoard(e),new x(e).tickAble(this.char)?this.getBestPosition(e,1):[-1,-1]}},{key:"getBestPosition",value:function(e,t){for(var r=new x(e),i=0;i<8;i++)for(var n=0;n<8;n++)if(r.check_available(i,n,this.char)&&this.priorityBoard[i][n]===t)return[i,n];return this.getBestPosition(e,t+1)}}]),t}(F),I=(r(27),function(e){return n.a.createElement("div",{style:{opacity:e.opacity},class:"lds-ellipsis"},n.a.createElement("div",null),n.a.createElement("div",null),n.a.createElement("div",null),n.a.createElement("div",null))}),L=function(e){function t(e){var r;Object(j.a)(this,t),r=Object(S.a)(this,Object(B.a)(t).call(this,e));var i,n=e.mode;return(i="multi"===n?[new W("X"),new W("O")]:[new W("X"),new R("O")])[0].setActive(),r.state={mode:n,surface:[["","","","","","","",""],["","","","","","","",""],["","","","","","","",""],["","","","X","O","","",""],["","","","O","X","","",""],["","","","","","","",""],["","","","","","","",""],["","","","","","","",""]],players:i,loading:!1,loadingTime:1e3},r}return Object(N.a)(t,e),Object(C.a)(t,[{key:"tick",value:function(e,t){if(!this.state.loading){var r=this.getNextPlayer(),i=Object(E.a)(this.state.surface),n=new P(i);n.tick(e,t,r.char)&&(this.updateSurface(n.surface),this.updateScore(this.countScore()),this.changePlayer())}}},{key:"getNextPlayer",value:function(){return this.state.players.find(function(e){return!0===e.active})}},{key:"updateSurface",value:function(e){this.setState(Object(O.a)({},this.state,{surface:e}))}},{key:"changePlayer",value:function(){var e=this,t=Object(E.a)(this.state.players);t=t.map(function(e){return e.active=!e.active,e}),this.setState(Object(O.a)({},this.state,{players:t}));var r=Object(E.a)(this.state.surface),i=new x(r),n=this.getNextPlayer();if(!i.tickAble(n.char)&&!this.isFinished())return this.changePlayer();if("Computer"===n.type){if(this.isFinished())return;var a=n.getInput(r),c=Object(u.a)(a,2),s=c[0],o=c[1];this.setState(Object(O.a)({},this.state,{loading:!0})),setTimeout(function(){e.setState(Object(O.a)({},e.state,{loading:!1})),e.tick(s,o)},1e3)}}},{key:"updateScore",value:function(e){var t=Object(E.a)(this.state.players);t[0].score=e[0],t[1].score=e[1],this.setState(Object(O.a)({},this.state,{player:t}))}},{key:"countScore",value:function(){for(var e=0,t=0,r=0;r<8;r++)for(var i=0;i<8;i++)"X"===this.state.surface[r][i]&&e++,"O"===this.state.surface[r][i]&&t++;return[e,t]}},{key:"isFinished",value:function(){for(var e=Object(E.a)(this.state.surface),t=0;t<8;t++)for(var r=0;r<8;r++)if(""===e[t][r])return!1;return!0}},{key:"render",value:function(){var e=this;return n.a.createElement("div",{className:"Game"},n.a.createElement(T,{players:this.state.players}),n.a.createElement(I,{opacity:this.state.loading?1:0}),n.a.createElement(w,{squareTicked:function(t,r){return e.tick(t,r)},rows:this.state.surface}))}}]),t}(i.Component),D=r(9),G=r.n(D),J=function(e){return n.a.createElement("div",{className:G.a.Welcome},n.a.createElement("div",{onClick:e.button1Clicked,className:G.a.Button},"Single Player"),n.a.createElement("div",{onClick:e.button2Clicked,className:G.a.Button},"Multiplayer"))};var M=function(){var e=Object(i.useState)(!1),t=Object(u.a)(e,2),r=t[0],a=t[1],c=Object(i.useState)("single"),s=Object(u.a)(c,2),o=s[0],f=s[1];return n.a.createElement("div",{className:"App"},n.a.createElement(l,null,n.a.createElement("h1",{style:{fontSize:"40px"}},"Othello Game"),r?n.a.createElement(L,{mode:o}):n.a.createElement(J,{button1Clicked:function(){a(!0),f("single")},button2Clicked:function(){a(!0),f("multi")}})))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));c.a.render(n.a.createElement(M,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})}],[[18,1,2]]]);
//# sourceMappingURL=main.66639ed4.chunk.js.map
(window["webpackJsonpmy-react-app"]=window["webpackJsonpmy-react-app"]||[]).push([[0],{18:function(e,t,a){e.exports=a(28)},28:function(e,t,a){"use strict";a.r(t);var s=a(0),n=a.n(s),i=a(13),r=a.n(i),o=a(17),l=(a(6),a(14)),c=a(1),u=a(2),h=a(4),d=a(3),p=a(5);function b(e){return n.a.createElement("button",{className:"square "+e.shade,onClick:e.onClick,style:e.style})}var f=function(e){function t(){return Object(c.a)(this,t),Object(h.a)(this,Object(d.a)(t).apply(this,arguments))}return Object(p.a)(t,e),Object(u.a)(t,[{key:"renderSquare",value:function(e,t){var a=this;return n.a.createElement(b,{piece:this.props.squares[e],style:this.props.squares[e]?this.props.squares[e].style:null,shade:t,onClick:function(){return a.props.onClick(e)}})}},{key:"render",value:function(){for(var e=[],t=0;t<8;t++){for(var a=[],s=0;s<8;s++){var i=m(t)&&m(s)||!m(t)&&!m(s)?"light-square":"dark-square";a.push(this.renderSquare(8*t+s,i))}e.push(n.a.createElement("div",{className:"board-row"},a))}return n.a.createElement("div",null,e)}}]),t}(n.a.Component);function m(e){return e%2===0}var v=function(e){function t(){return Object(c.a)(this,t),Object(h.a)(this,Object(d.a)(t).apply(this,arguments))}return Object(p.a)(t,e),Object(u.a)(t,[{key:"renderSquare",value:function(e){return n.a.createElement(b,{piece:e,style:e.style})}},{key:"render",value:function(){var e=this;return n.a.createElement("div",null,n.a.createElement("div",{className:"board-row"},this.props.whiteFallenSoldiers.map((function(t,a){return e.renderSquare(t,a)}))),n.a.createElement("div",{className:"board-row"},this.props.blackFallenSoldiers.map((function(t,a){return e.renderSquare(t,a)}))))}}]),t}(n.a.Component),k=function e(t,a){Object(c.a)(this,e),this.player=t,this.style={backgroundImage:"url('"+a+"')"}},w=function(e){function t(e){var a;return Object(c.a)(this,t),(a=Object(h.a)(this,Object(d.a)(t).call(this,e,1===e?"https://upload.wikimedia.org/wikipedia/commons/4/45/Chess_plt45.svg":"https://upload.wikimedia.org/wikipedia/commons/c/c7/Chess_pdt45.svg"))).initialPositions={1:[48,49,50,51,52,53,54,55],2:[8,9,10,11,12,13,14,15]},a}return Object(p.a)(t,e),Object(u.a)(t,[{key:"isMovePossible",value:function(e,t,a){if(1===this.player){if(t===e-8&&!a||t===e-16&&-1!==this.initialPositions[1].indexOf(e))return!0;if(a&&(t===e-9||t===e-7))return!0}else if(2===this.player){if(t===e+8&&!a||t===e+16&&-1!==this.initialPositions[2].indexOf(e))return!0;if(a&&(t===e+9||t===e+7))return!0}return!1}},{key:"getToDestination",value:function(e,t){return t===e-16?[e-8]:t===e+16?[e+8]:[]}}]),t}(k),y=function(e){function t(e){return Object(c.a)(this,t),Object(h.a)(this,Object(d.a)(t).call(this,e,1===e?"https://upload.wikimedia.org/wikipedia/commons/b/b1/Chess_blt45.svg":"https://upload.wikimedia.org/wikipedia/commons/9/98/Chess_bdt45.svg"))}return Object(p.a)(t,e),Object(u.a)(t,[{key:"isMovePossible",value:function(e,t){return Math.abs(e-t)%9===0||Math.abs(e-t)%7===0}},{key:"getToDestination",value:function(e,t){var a,s,n,i=[];e>t?(a=t,s=e):(a=e,s=t),Math.abs(e-t)%9===0?(n=9,a+=9):(n=7,a+=7);for(var r=a;r<s;r+=n)i.push(r);return i}}]),t}(k),g=function(e){function t(e){return Object(c.a)(this,t),Object(h.a)(this,Object(d.a)(t).call(this,e,1===e?"https://upload.wikimedia.org/wikipedia/commons/4/42/Chess_klt45.svg":"https://upload.wikimedia.org/wikipedia/commons/f/f0/Chess_kdt45.svg"))}return Object(p.a)(t,e),Object(u.a)(t,[{key:"isMovePossible",value:function(e,t){return e-9===t||e-8===t||e-7===t||e+1===t||e+9===t||e+8===t||e+7===t||e-1===t}},{key:"getToDestination",value:function(){return[]}}]),t}(k),O=function(e){function t(e){return Object(c.a)(this,t),Object(h.a)(this,Object(d.a)(t).call(this,e,1===e?"https://upload.wikimedia.org/wikipedia/commons/7/70/Chess_nlt45.svg":"https://upload.wikimedia.org/wikipedia/commons/e/ef/Chess_ndt45.svg"))}return Object(p.a)(t,e),Object(u.a)(t,[{key:"isMovePossible",value:function(e,t){return e-17===t||e-15===t||e+17===t||e+15===t||e+10===t||e+6===t||e-6===t||e-10===t}},{key:"getToDestination",value:function(){return[]}}]),t}(k),j=function(e){function t(e){return Object(c.a)(this,t),Object(h.a)(this,Object(d.a)(t).call(this,e,1===e?"https://upload.wikimedia.org/wikipedia/commons/1/15/Chess_qlt45.svg":"https://upload.wikimedia.org/wikipedia/commons/4/47/Chess_qdt45.svg"))}return Object(p.a)(t,e),Object(u.a)(t,[{key:"isMovePossible",value:function(e,t){var a=e%8,s=8-a;return Math.abs(e-t)%9===0||Math.abs(e-t)%8===0||Math.abs(e-t)%7===0||t>=e-a&&t<e+s}},{key:"getToDestination",value:function(e,t){var a,s,n,i=[];e>t?(a=t,s=e):(a=e,s=t),Math.abs(e-t)%8===0?(n=8,a+=8):Math.abs(e-t)%9===0?(n=9,a+=9):Math.abs(e-t)%7===0?(n=7,a+=7):(n++,a+=1);for(var r=a;r<s;r+=n)i.push(r);return i}}]),t}(k),S=function(e){function t(e){return Object(c.a)(this,t),Object(h.a)(this,Object(d.a)(t).call(this,e,1===e?"https://upload.wikimedia.org/wikipedia/commons/7/72/Chess_rlt45.svg":"https://upload.wikimedia.org/wikipedia/commons/f/ff/Chess_rdt45.svg"))}return Object(p.a)(t,e),Object(u.a)(t,[{key:"isMovePossible",value:function(e,t){var a=e%8,s=8-a;return Math.abs(e-t)%8===0||t>=e-a&&t<e+s}},{key:"getToDestination",value:function(e,t){var a,s,n,i=[];e>t?(a=t,s=e):(a=e,s=t),Math.abs(e-t)%8===0?(n=8,a+=8):(n=1,a+=1);for(var r=a;r<s;r+=n)i.push(r);return i}}]),t}(k);function C(){for(var e=Array(64).fill(null),t=8;t<16;t++)e[t]=new w(2),e[t+40]=new w(1);return e[0]=new S(2),e[7]=new S(2),e[56]=new S(1),e[63]=new S(1),e[1]=new O(2),e[6]=new O(2),e[57]=new O(1),e[62]=new O(1),e[2]=new y(2),e[5]=new y(2),e[58]=new y(1),e[61]=new y(1),e[3]=new j(2),e[59]=new j(1),e[4]=new g(2),e[60]=new g(1),e}function E(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);t&&(s=s.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,s)}return a}function q(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?E(a,!0).forEach((function(t){Object(l.a)(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):E(a).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}var M=function(e){function t(){var e;return Object(c.a)(this,t),(e=Object(h.a)(this,Object(d.a)(t).call(this))).longLiveTheKing=function(){e.state.whiteFallenSoldiers.findIndex((function(e){return e instanceof g}))>-1?alert("Black is the superior chess player!"):e.state.blackFallenSoldiers.findIndex((function(e){return e instanceof g}))>-1&&alert("White is the superior chess player!")},e.componentDidUpdate=function(){e.longLiveTheKing()},e.resetGame=function(){e.setState({squares:C(),whiteFallenSoldiers:[],blackFallenSoldiers:[],player:1,sourceSelection:-1,status:"",turn:"white"})},e.state={squares:C(),whiteFallenSoldiers:[],blackFallenSoldiers:[],player:1,sourceSelection:-1,status:"",turn:"white"},e}return Object(p.a)(t,e),Object(u.a)(t,[{key:"handleClick",value:function(e){var t=this.state.squares.slice();if(-1===this.state.sourceSelection)t[e]&&t[e].player===this.state.player?(t[e].style=q({},t[e].style,{backgroundColor:"RGB(111,143,114)"}),this.setState({status:"Choose destination for the selected piece",sourceSelection:e})):(this.setState({status:"Wrong selection. Choose player "+this.state.player+" pieces."}),t[e]&&(t[e].style=q({},t[e].style,{backgroundColor:""})));else if(this.state.sourceSelection>-1)if(t[this.state.sourceSelection].style=q({},t[this.state.sourceSelection].style,{backgroundColor:""}),t[e]&&t[e].player===this.state.player)this.setState({status:"Wrong selection. Choose valid source and destination again.",sourceSelection:-1});else{var a=this.state.squares.slice(),s=this.state.whiteFallenSoldiers.slice(),n=this.state.blackFallenSoldiers.slice(),i=!!a[e],r=a[this.state.sourceSelection].isMovePossible(this.state.sourceSelection,e,i),o=a[this.state.sourceSelection].getToDestination(this.state.sourceSelection,e),l=this.isMoveLegal(o);if(r&&l){null!==a[e]&&(1===a[e].player?s.push(a[e]):(console.log("BFS",a[e]),n.push(a[e]),console.log(n.findIndex((function(e){return e instanceof g}))))),a[e]=a[this.state.sourceSelection],a[this.state.sourceSelection]=null;var c=1===this.state.player?2:1,u="white"===this.state.turn?"black":"white";this.setState({sourceSelection:-1,squares:a,whiteFallenSoldiers:s,blackFallenSoldiers:n,player:c,status:"",turn:u})}else this.setState({status:"Wrong selection. Choose valid source and destination again.",sourceSelection:-1})}}},{key:"isMoveLegal",value:function(e){for(var t=!0,a=0;a<e.length;a++)null!==this.state.squares[e[a]]&&(t=!1);return t}},{key:"render",value:function(){var e=this;return n.a.createElement("div",null,n.a.createElement("div",{className:"game"},n.a.createElement("div",{className:"game-board"},n.a.createElement(f,{squares:this.state.squares,onClick:function(t){return e.handleClick(t)}})),n.a.createElement("div",{className:"game-info"},n.a.createElement("h3",null,"Turn"),n.a.createElement("div",{id:"player-turn-box",style:{backgroundColor:this.state.turn}}),n.a.createElement("div",{className:"game-status"},this.state.status),n.a.createElement("div",{className:"fallen-soldier-block"},n.a.createElement(v,{whiteFallenSoldiers:this.state.whiteFallenSoldiers,blackFallenSoldiers:this.state.blackFallenSoldiers}),n.a.createElement("button",{onClick:this.resetGame,className:"reset-button"},"Reset")))))}}]),t}(n.a.Component);r.a.render(n.a.createElement(o.a,{basename:"/ChessGame"},n.a.createElement(M,null)),document.getElementById("root"))},6:function(e,t,a){}},[[18,1,2]]]);
//# sourceMappingURL=main.5b9bab38.chunk.js.map
(this.webpackJsonpreact_carousel=this.webpackJsonpreact_carousel||[]).push([[0],{37:function(e,t,a){e.exports=a(48)},42:function(e,t,a){},43:function(e,t,a){},48:function(e,t,a){"use strict";a.r(t);var i=a(0),n=a.n(i),o=a(12),s=a.n(o),l=a(18),r=a(19),c=a(24),m=a(23),u=(a(42),a(33)),p=a(26),d=a(64),g=a(63),h=(a(43),function(e){Object(c.a)(a,e);var t=Object(m.a)(a);function a(){var e;Object(l.a)(this,a);for(var i=arguments.length,n=new Array(i),o=0;o<i;o++)n[o]=arguments[o];return(e=t.call.apply(t,[this].concat(n))).state={images:e.props.images,itemWidth:e.props.itemWidth,step:e.props.step,frameSize:e.props.frameSize,animationDuration:e.props.animationDuration,infinite:e.props.infinite,positionX:0},e.showNextSlide=function(){e.setState((function(e){var t=e.itemWidth*(e.images.length-e.frameSize);return e.positionX+e.itemWidth*e.step>=t?{positionX:t}:{positionX:e.positionX+e.itemWidth*e.step}}))},e.showPreviouslySlide=function(){e.setState((function(e){return e.positionX-e.itemWidth*e.step<=0?{positionX:0}:{positionX:e.positionX-e.itemWidth*e.step}}))},e.getItemWidth=function(t,a){e.setState({itemWidth:a,positionX:0})},e.getFrameSize=function(t,a){e.setState({frameSize:a,positionX:0})},e.getStepSize=function(t,a){e.setState({step:a})},e.getAnimationDuration=function(t,a){e.setState({animationDuration:1e3*a})},e.makeFillModeOn=function(){document.addEventListener("keydown",e.stopFillMode,!1),e.setState((function(e){return{infinite:!0,step:1,frameSize:1,itemWidth:300,positionX:0,images:Object(p.a)(e.images)}})),e.autoSlider()},e.stopFillMode=function(t){27===t.keyCode&&(e.setState({infinite:!1,step:3,frameSize:3,itemWidth:130,positionX:0,images:e.props.images}),document.removeEventListener("keydown",e.stopFillMode,!1),clearInterval(e.state.sliderId))},e.autoSlider=function(){var t=e.state.animationDuration,a=1;e.state.sliderId=setInterval((function(){e.setState((function(e){return{positionX:e.positionX+e.itemWidth}})),(a+=1)===e.state.images.length-1&&e.setState((function(e){return{images:Object(p.a)(e.images).concat(e.images)}}))}),t)},e}return Object(r.a)(a,[{key:"render",value:function(){var e=this,t=this.state,a=t.images,i=t.itemWidth,o=t.step,s=t.frameSize,l=t.animationDuration,r=t.infinite,c={minWidth:"".concat(a.length*i,"px"),transition:"transform ".concat(l,"ms"),transform:"translateX(-".concat(this.state.positionX,"px)")},m={wrapper:{boxShadow:"0 20px 50px rgba(19, 17, 17, 0.8)",padding:"0 70px",height:"70vh",minHeight:"520px",transition:"max-width 0.5s ease,\n          height 0.5s ease,\n          background-color 0.5s ease"},carousel:{display:"flex",flexDirection:"column",justifyContent:"center",alignItems:"center",height:"min-content",transition:"height 0.5s ease"},control:{display:"none"},button:{display:"none"}};return n.a.createElement("div",{className:"wrapper",style:r?m.wrapper:null},n.a.createElement("div",{className:"carousel",style:r?m.carousel:null},n.a.createElement("button",{className:"carousel__btn",type:"button",onClick:function(){e.showPreviouslySlide()},style:r?m.button:null},n.a.createElement("img",{className:"carousel__btn-prev",src:"./img/arrow-icon.png",alt:"previously"})),r?n.a.createElement("p",{className:"carousel__slide-show-text"},"Slide show"):null,n.a.createElement("div",{className:"carousel__wrapper",style:{maxWidth:"".concat(s*i,"px")}},n.a.createElement("ul",{className:"carousel__list",style:Object(u.a)({},c)},a.map((function(e){return n.a.createElement("li",{key:Math.random(),className:"carousel__item"},n.a.createElement("img",{src:e,alt:"smile",style:{width:"".concat(i,"px")}}))})))),n.a.createElement("button",{className:"carousel__btn",type:"button",onClick:function(){e.showNextSlide()},style:r?m.button:null},n.a.createElement("img",{className:"carousel__btn-next",src:"./img/arrow-icon.png",alt:"previously"}))),n.a.createElement("div",{className:"carousel-control",style:r?m.control:null},n.a.createElement("div",{className:"carousel-control__item-width"},n.a.createElement("p",{className:"carousel-control__label"},"Images width"),n.a.createElement(d.a,{className:"carousel-control__slider",color:"primary",defaultValue:i,min:80,max:200,step:1,key:"slider-".concat(i),onChange:this.getItemWidth,valueLabelDisplay:"auto"})),n.a.createElement("div",{className:"carousel-control__frame-size"},n.a.createElement("p",{className:"carousel-control__label"},"Show images"),n.a.createElement(d.a,{className:"carousel-control__slider",color:"primary",defaultValue:s,min:1,max:5,step:1,key:"slider-".concat(s),onChange:this.getFrameSize,valueLabelDisplay:"auto"})),n.a.createElement("div",{className:"carousel-control__step"},n.a.createElement("p",{className:"carousel-control__label"},"Step of scrolling"),n.a.createElement(d.a,{className:"carousel-control__slider",color:"primary",defaultValue:s,min:1,max:5,step:1,key:"slider-".concat(o),onChange:this.getStepSize,valueLabelDisplay:"auto"})),n.a.createElement("div",{className:"carousel-control__animation"},n.a.createElement("p",{className:"carousel-control__label"},"Scroll duration(sec)"),n.a.createElement(d.a,{className:"carousel-control__slider",color:"primary",defaultValue:l/1e3,min:1,max:5,step:1,key:"slider-".concat(l),onChange:this.getAnimationDuration,valueLabelDisplay:"auto"}))),n.a.createElement("div",{className:"carousel-film-mode"},r?n.a.createElement("p",{className:"carousel-film-mode__text"},"Press esc to exit slideshow mode"):n.a.createElement(g.a,{style:{fontFamily:"inherit",textTransform:"capitalize"},className:"carousel-film-mode__btn",variant:"outlined",color:"primary",onClick:function(){e.makeFillModeOn()}},"Slide Show")))}}]),a}(n.a.Component)),f=h;h.defaultProps={images:[],itemWidth:130,step:1,frameSize:3,animationDuration:1e3,infinite:!1};var _=function(e){Object(c.a)(a,e);var t=Object(m.a)(a);function a(){var e;Object(l.a)(this,a);for(var i=arguments.length,n=new Array(i),o=0;o<i;o++)n[o]=arguments[o];return(e=t.call.apply(t,[this].concat(n))).state={images:["./img/1.png","./img/2.png","./img/3.png","./img/4.png","./img/5.png","./img/6.png","./img/7.png","./img/8.png","./img/9.png","./img/10.png"],step:3,frameSize:3,itemWidth:130,animationDuration:1e3,infinite:!1},e}return Object(r.a)(a,[{key:"render",value:function(){var e=this.state,t=e.images,a=e.step,i=e.frameSize,o=e.itemWidth,s=e.animationDuration,l=e.infinite;return n.a.createElement("div",{className:"app"},n.a.createElement(f,{images:t,step:a,frameSize:i,itemWidth:o,animationDuration:s,infinite:l}))}}]),a}(n.a.Component);s.a.render(n.a.createElement(_,null),document.getElementById("root"))}},[[37,1,2]]]);
//# sourceMappingURL=main.dc872c4b.chunk.js.map
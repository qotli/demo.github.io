"use strict";(self.webpackChunkqotli=self.webpackChunkqotli||[]).push([[3259],{3259:(g,u,l)=>{l.d(u,{u:()=>f,z:()=>O});var d=l(6814),o=l(9467),i=l(2076),h=l(2332),c=l(5219);let f=(()=>{class n{platformId;el;zone;config;renderer;viewContainer;tooltipPosition;tooltipEvent="hover";appendTo;positionStyle;tooltipStyleClass;tooltipZIndex;escape=!0;showDelay;hideDelay;life;positionTop;positionLeft;autoHide=!0;fitContent=!0;hideOnEscape=!0;content;get disabled(){return this._disabled}set disabled(t){this._disabled=t,this.deactivate()}tooltipOptions;_tooltipOptions={tooltipLabel:null,tooltipPosition:"right",tooltipEvent:"hover",appendTo:"body",positionStyle:null,tooltipStyleClass:null,tooltipZIndex:"auto",escape:!0,disabled:null,showDelay:null,hideDelay:null,positionTop:null,positionLeft:null,life:null,autoHide:!0,hideOnEscape:!0,id:(0,h.Th)()+"_tooltip"};_disabled;container;styleClass;tooltipText;showTimeout;hideTimeout;active;mouseEnterListener;mouseLeaveListener;containerMouseleaveListener;clickListener;focusListener;blurListener;scrollHandler;resizeListener;constructor(t,e,s,a,r,p){this.platformId=t,this.el=e,this.zone=s,this.config=a,this.renderer=r,this.viewContainer=p}ngAfterViewInit(){(0,d.NF)(this.platformId)&&this.zone.runOutsideAngular(()=>{if("hover"===this.getOption("tooltipEvent"))this.mouseEnterListener=this.onMouseEnter.bind(this),this.mouseLeaveListener=this.onMouseLeave.bind(this),this.clickListener=this.onInputClick.bind(this),this.el.nativeElement.addEventListener("mouseenter",this.mouseEnterListener),this.el.nativeElement.addEventListener("click",this.clickListener),this.el.nativeElement.addEventListener("mouseleave",this.mouseLeaveListener);else if("focus"===this.getOption("tooltipEvent")){this.focusListener=this.onFocus.bind(this),this.blurListener=this.onBlur.bind(this);let t=this.getTarget(this.el.nativeElement);t.addEventListener("focus",this.focusListener),t.addEventListener("blur",this.blurListener)}})}ngOnChanges(t){t.tooltipPosition&&this.setOption({tooltipPosition:t.tooltipPosition.currentValue}),t.tooltipEvent&&this.setOption({tooltipEvent:t.tooltipEvent.currentValue}),t.appendTo&&this.setOption({appendTo:t.appendTo.currentValue}),t.positionStyle&&this.setOption({positionStyle:t.positionStyle.currentValue}),t.tooltipStyleClass&&this.setOption({tooltipStyleClass:t.tooltipStyleClass.currentValue}),t.tooltipZIndex&&this.setOption({tooltipZIndex:t.tooltipZIndex.currentValue}),t.escape&&this.setOption({escape:t.escape.currentValue}),t.showDelay&&this.setOption({showDelay:t.showDelay.currentValue}),t.hideDelay&&this.setOption({hideDelay:t.hideDelay.currentValue}),t.life&&this.setOption({life:t.life.currentValue}),t.positionTop&&this.setOption({positionTop:t.positionTop.currentValue}),t.positionLeft&&this.setOption({positionLeft:t.positionLeft.currentValue}),t.disabled&&this.setOption({disabled:t.disabled.currentValue}),t.content&&(this.setOption({tooltipLabel:t.content.currentValue}),this.active&&(t.content.currentValue?this.container&&this.container.offsetParent?(this.updateText(),this.align()):this.show():this.hide())),t.autoHide&&this.setOption({autoHide:t.autoHide.currentValue}),t.id&&this.setOption({id:t.id.currentValue}),t.tooltipOptions&&(this._tooltipOptions={...this._tooltipOptions,...t.tooltipOptions.currentValue},this.deactivate(),this.active&&(this.getOption("tooltipLabel")?this.container&&this.container.offsetParent?(this.updateText(),this.align()):this.show():this.hide()))}isAutoHide(){return this.getOption("autoHide")}onMouseEnter(t){!this.container&&!this.showTimeout&&this.activate()}onMouseLeave(t){(this.isAutoHide()||!(i.p.hasClass(t.relatedTarget,"p-tooltip")||i.p.hasClass(t.relatedTarget,"p-tooltip-text")||i.p.hasClass(t.relatedTarget,"p-tooltip-arrow")))&&this.deactivate()}onFocus(t){this.activate()}onBlur(t){this.deactivate()}onInputClick(t){this.deactivate()}onPressEscape(){this.hideOnEscape&&this.deactivate()}activate(){if(this.active=!0,this.clearHideTimeout(),this.getOption("showDelay")?this.showTimeout=setTimeout(()=>{this.show()},this.getOption("showDelay")):this.show(),this.getOption("life")){let t=this.getOption("showDelay")?this.getOption("life")+this.getOption("showDelay"):this.getOption("life");this.hideTimeout=setTimeout(()=>{this.hide()},t)}}deactivate(){this.active=!1,this.clearShowTimeout(),this.getOption("hideDelay")?(this.clearHideTimeout(),this.hideTimeout=setTimeout(()=>{this.hide()},this.getOption("hideDelay"))):this.hide()}create(){this.container&&(this.clearHideTimeout(),this.remove()),this.container=document.createElement("div"),this.container.setAttribute("id",this.getOption("id")),this.container.setAttribute("role","tooltip");let t=document.createElement("div");t.className="p-tooltip-arrow",this.container.appendChild(t),this.tooltipText=document.createElement("div"),this.tooltipText.className="p-tooltip-text",this.updateText(),this.getOption("positionStyle")&&(this.container.style.position=this.getOption("positionStyle")),this.container.appendChild(this.tooltipText),"body"===this.getOption("appendTo")?document.body.appendChild(this.container):"target"===this.getOption("appendTo")?i.p.appendChild(this.container,this.el.nativeElement):i.p.appendChild(this.container,this.getOption("appendTo")),this.container.style.display="inline-block",this.fitContent&&(this.container.style.width="fit-content"),this.isAutoHide()?this.container.style.pointerEvents="none":(this.container.style.pointerEvents="unset",this.bindContainerMouseleaveListener())}bindContainerMouseleaveListener(){this.containerMouseleaveListener||(this.containerMouseleaveListener=this.renderer.listen(this.container??this.container.nativeElement,"mouseleave",e=>{this.deactivate()}))}unbindContainerMouseleaveListener(){this.containerMouseleaveListener&&(this.bindContainerMouseleaveListener(),this.containerMouseleaveListener=null)}show(){!this.getOption("tooltipLabel")||this.getOption("disabled")||(this.create(),this.align(),i.p.fadeIn(this.container,250),"auto"===this.getOption("tooltipZIndex")?h.P9.set("tooltip",this.container,this.config.zIndex.tooltip):this.container.style.zIndex=this.getOption("tooltipZIndex"),this.bindDocumentResizeListener(),this.bindScrollListener())}hide(){"auto"===this.getOption("tooltipZIndex")&&h.P9.clear(this.container),this.remove()}updateText(){const t=this.getOption("tooltipLabel");if(t instanceof o.Rgc){const e=this.viewContainer.createEmbeddedView(t);e.detectChanges(),e.rootNodes.forEach(s=>this.tooltipText.appendChild(s))}else this.getOption("escape")?(this.tooltipText.innerHTML="",this.tooltipText.appendChild(document.createTextNode(t))):this.tooltipText.innerHTML=t}align(){switch(this.getOption("tooltipPosition")){case"top":this.alignTop(),this.isOutOfBounds()&&(this.alignBottom(),this.isOutOfBounds()&&(this.alignRight(),this.isOutOfBounds()&&this.alignLeft()));break;case"bottom":this.alignBottom(),this.isOutOfBounds()&&(this.alignTop(),this.isOutOfBounds()&&(this.alignRight(),this.isOutOfBounds()&&this.alignLeft()));break;case"left":this.alignLeft(),this.isOutOfBounds()&&(this.alignRight(),this.isOutOfBounds()&&(this.alignTop(),this.isOutOfBounds()&&this.alignBottom()));break;case"right":this.alignRight(),this.isOutOfBounds()&&(this.alignLeft(),this.isOutOfBounds()&&(this.alignTop(),this.isOutOfBounds()&&this.alignBottom()))}}getHostOffset(){if("body"===this.getOption("appendTo")||"target"===this.getOption("appendTo")){let t=this.el.nativeElement.getBoundingClientRect();return{left:t.left+i.p.getWindowScrollLeft(),top:t.top+i.p.getWindowScrollTop()}}return{left:0,top:0}}alignRight(){this.preAlign("right");let t=this.getHostOffset(),e=t.left+i.p.getOuterWidth(this.el.nativeElement),s=t.top+(i.p.getOuterHeight(this.el.nativeElement)-i.p.getOuterHeight(this.container))/2;this.container.style.left=e+this.getOption("positionLeft")+"px",this.container.style.top=s+this.getOption("positionTop")+"px"}alignLeft(){this.preAlign("left");let t=this.getHostOffset(),e=t.left-i.p.getOuterWidth(this.container),s=t.top+(i.p.getOuterHeight(this.el.nativeElement)-i.p.getOuterHeight(this.container))/2;this.container.style.left=e+this.getOption("positionLeft")+"px",this.container.style.top=s+this.getOption("positionTop")+"px"}alignTop(){this.preAlign("top");let t=this.getHostOffset(),e=t.left+(i.p.getOuterWidth(this.el.nativeElement)-i.p.getOuterWidth(this.container))/2,s=t.top-i.p.getOuterHeight(this.container);this.container.style.left=e+this.getOption("positionLeft")+"px",this.container.style.top=s+this.getOption("positionTop")+"px"}alignBottom(){this.preAlign("bottom");let t=this.getHostOffset(),e=t.left+(i.p.getOuterWidth(this.el.nativeElement)-i.p.getOuterWidth(this.container))/2,s=t.top+i.p.getOuterHeight(this.el.nativeElement);this.container.style.left=e+this.getOption("positionLeft")+"px",this.container.style.top=s+this.getOption("positionTop")+"px"}setOption(t){this._tooltipOptions={...this._tooltipOptions,...t}}getOption(t){return this._tooltipOptions[t]}getTarget(t){return i.p.hasClass(t,"p-inputwrapper")?i.p.findSingle(t,"input"):t}preAlign(t){this.container.style.left="-999px",this.container.style.top="-999px";let e="p-tooltip p-component p-tooltip-"+t;this.container.className=this.getOption("tooltipStyleClass")?e+" "+this.getOption("tooltipStyleClass"):e}isOutOfBounds(){let t=this.container.getBoundingClientRect(),e=t.top,s=t.left,a=i.p.getOuterWidth(this.container),r=i.p.getOuterHeight(this.container),p=i.p.getViewport();return s+a>p.width||s<0||e<0||e+r>p.height}onWindowResize(t){this.hide()}bindDocumentResizeListener(){this.zone.runOutsideAngular(()=>{this.resizeListener=this.onWindowResize.bind(this),window.addEventListener("resize",this.resizeListener)})}unbindDocumentResizeListener(){this.resizeListener&&(window.removeEventListener("resize",this.resizeListener),this.resizeListener=null)}bindScrollListener(){this.scrollHandler||(this.scrollHandler=new i.V(this.el.nativeElement,()=>{this.container&&this.hide()})),this.scrollHandler.bindScrollListener()}unbindScrollListener(){this.scrollHandler&&this.scrollHandler.unbindScrollListener()}unbindEvents(){if("hover"===this.getOption("tooltipEvent"))this.el.nativeElement.removeEventListener("mouseenter",this.mouseEnterListener),this.el.nativeElement.removeEventListener("mouseleave",this.mouseLeaveListener),this.el.nativeElement.removeEventListener("click",this.clickListener);else if("focus"===this.getOption("tooltipEvent")){let t=this.getTarget(this.el.nativeElement);t.removeEventListener("focus",this.focusListener),t.removeEventListener("blur",this.blurListener)}this.unbindDocumentResizeListener()}remove(){this.container&&this.container.parentElement&&("body"===this.getOption("appendTo")?document.body.removeChild(this.container):"target"===this.getOption("appendTo")?this.el.nativeElement.removeChild(this.container):i.p.removeChild(this.container,this.getOption("appendTo"))),this.unbindDocumentResizeListener(),this.unbindScrollListener(),this.unbindContainerMouseleaveListener(),this.clearTimeouts(),this.container=null,this.scrollHandler=null}clearShowTimeout(){this.showTimeout&&(clearTimeout(this.showTimeout),this.showTimeout=null)}clearHideTimeout(){this.hideTimeout&&(clearTimeout(this.hideTimeout),this.hideTimeout=null)}clearTimeouts(){this.clearShowTimeout(),this.clearHideTimeout()}ngOnDestroy(){this.unbindEvents(),this.container&&h.P9.clear(this.container),this.remove(),this.scrollHandler&&(this.scrollHandler.destroy(),this.scrollHandler=null)}static \u0275fac=function(e){return new(e||n)(o.Y36(o.Lbi),o.Y36(o.SBq),o.Y36(o.R0b),o.Y36(c.b4),o.Y36(o.Qsj),o.Y36(o.s_b))};static \u0275dir=o.lG2({type:n,selectors:[["","pTooltip",""]],hostAttrs:[1,"p-element"],hostBindings:function(e,s){1&e&&o.NdJ("keydown.escape",function(r){return s.onPressEscape(r)},!1,o.evT)},inputs:{tooltipPosition:"tooltipPosition",tooltipEvent:"tooltipEvent",appendTo:"appendTo",positionStyle:"positionStyle",tooltipStyleClass:"tooltipStyleClass",tooltipZIndex:"tooltipZIndex",escape:"escape",showDelay:"showDelay",hideDelay:"hideDelay",life:"life",positionTop:"positionTop",positionLeft:"positionLeft",autoHide:"autoHide",fitContent:"fitContent",hideOnEscape:"hideOnEscape",content:["pTooltip","content"],disabled:["tooltipDisabled","disabled"],tooltipOptions:"tooltipOptions"},features:[o.TTD]})}return n})(),O=(()=>{class n{static \u0275fac=function(e){return new(e||n)};static \u0275mod=o.oAB({type:n});static \u0275inj=o.cJS({imports:[d.ez]})}return n})()}}]);
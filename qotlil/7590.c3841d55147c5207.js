"use strict";(self.webpackChunkqotli=self.webpackChunkqotli||[]).push([[7590],{5289:(C,h,l)=>{l.r(h),l.d(h,{ChartsDemoModule:()=>a});var g=l(6814),c=l(2129),p=l(3620),e=l(9467),d=l(9661),i=l(9252);let r=(()=>{class s{constructor(t){this.layoutService=t,this.subscription=this.layoutService.configUpdate$.pipe((0,p.b)(25)).subscribe(u=>{this.initCharts()})}ngOnInit(){this.initCharts()}initCharts(){const t=getComputedStyle(document.documentElement),u=t.getPropertyValue("--text-color"),n=t.getPropertyValue("--text-color-secondary"),f=t.getPropertyValue("--surface-border");this.barData={labels:["January","February","March","April","May","June","July"],datasets:[{label:"My First dataset",backgroundColor:t.getPropertyValue("--primary-500"),borderColor:t.getPropertyValue("--primary-500"),data:[65,59,80,81,56,55,40]},{label:"My Second dataset",backgroundColor:t.getPropertyValue("--primary-200"),borderColor:t.getPropertyValue("--primary-200"),data:[28,48,40,19,86,27,90]}]},this.barOptions={plugins:{legend:{labels:{fontColor:u}}},scales:{x:{ticks:{color:n,font:{weight:500}},grid:{display:!1,drawBorder:!1}},y:{ticks:{color:n},grid:{color:f,drawBorder:!1}}}},this.pieData={labels:["A","B","C"],datasets:[{data:[540,325,702],backgroundColor:[t.getPropertyValue("--indigo-500"),t.getPropertyValue("--purple-500"),t.getPropertyValue("--teal-500")],hoverBackgroundColor:[t.getPropertyValue("--indigo-400"),t.getPropertyValue("--purple-400"),t.getPropertyValue("--teal-400")]}]},this.pieOptions={plugins:{legend:{labels:{usePointStyle:!0,color:u}}}},this.lineData={labels:["January","February","March","April","May","June","July"],datasets:[{label:"First Dataset",data:[65,59,80,81,56,55,40],fill:!1,backgroundColor:t.getPropertyValue("--primary-500"),borderColor:t.getPropertyValue("--primary-500"),tension:.4},{label:"Second Dataset",data:[28,48,40,19,86,27,90],fill:!1,backgroundColor:t.getPropertyValue("--primary-200"),borderColor:t.getPropertyValue("--primary-200"),tension:.4}]},this.lineOptions={plugins:{legend:{labels:{fontColor:u}}},scales:{x:{ticks:{color:n},grid:{color:f,drawBorder:!1}},y:{ticks:{color:n},grid:{color:f,drawBorder:!1}}}},this.polarData={datasets:[{data:[11,16,7,3],backgroundColor:[t.getPropertyValue("--indigo-500"),t.getPropertyValue("--purple-500"),t.getPropertyValue("--teal-500"),t.getPropertyValue("--orange-500")],label:"My dataset"}],labels:["Indigo","Purple","Teal","Orange"]},this.polarOptions={plugins:{legend:{labels:{color:u}}},scales:{r:{grid:{color:f}}}},this.radarData={labels:["Eating","Drinking","Sleeping","Designing","Coding","Cycling","Running"],datasets:[{label:"My First dataset",borderColor:t.getPropertyValue("--indigo-400"),pointBackgroundColor:t.getPropertyValue("--indigo-400"),pointBorderColor:t.getPropertyValue("--indigo-400"),pointHoverBackgroundColor:u,pointHoverBorderColor:t.getPropertyValue("--indigo-400"),data:[65,59,90,81,56,55,40]},{label:"My Second dataset",borderColor:t.getPropertyValue("--purple-400"),pointBackgroundColor:t.getPropertyValue("--purple-400"),pointBorderColor:t.getPropertyValue("--purple-400"),pointHoverBackgroundColor:u,pointHoverBorderColor:t.getPropertyValue("--purple-400"),data:[28,48,40,19,96,27,100]}]},this.radarOptions={plugins:{legend:{labels:{fontColor:u}}},scales:{r:{grid:{color:n}}}}}ngOnDestroy(){this.subscription&&this.subscription.unsubscribe()}static#e=this.\u0275fac=function(u){return new(u||s)(e.Y36(d.P))};static#t=this.\u0275cmp=e.Xpm({type:s,selectors:[["ng-component"]],decls:27,vars:12,consts:[[1,"grid","p-fluid"],[1,"col-12","lg:col-6"],[1,"card"],["type","line",3,"data","options"],[1,"card","flex","flex-column","align-items-center"],[1,"text-left","w-full"],["type","pie",3,"data","options"],["type","polarArea",3,"data","options"],["type","bar",3,"data","options"],["type","doughnut",3,"data","options"],["type","radar",3,"data","options"]],template:function(u,n){1&u&&(e.TgZ(0,"div",0)(1,"div",1)(2,"div",2)(3,"h5"),e._uU(4,"Linear Chart"),e.qZA(),e._UZ(5,"p-chart",3),e.qZA(),e.TgZ(6,"div",4)(7,"h5",5),e._uU(8,"Pie Chart"),e.qZA(),e._UZ(9,"p-chart",6),e.qZA(),e.TgZ(10,"div",4)(11,"h5",5),e._uU(12,"Polar Area Chart"),e.qZA(),e._UZ(13,"p-chart",7),e.qZA()(),e.TgZ(14,"div",1)(15,"div",2)(16,"h5"),e._uU(17,"Bar Chart"),e.qZA(),e._UZ(18,"p-chart",8),e.qZA(),e.TgZ(19,"div",4)(20,"h5",5),e._uU(21,"Doughnut Chart"),e.qZA(),e._UZ(22,"p-chart",9),e.qZA(),e.TgZ(23,"div",4)(24,"h5",5),e._uU(25,"Radar Chart"),e.qZA(),e._UZ(26,"p-chart",10),e.qZA()()()),2&u&&(e.xp6(5),e.Q6J("data",n.lineData)("options",n.lineOptions),e.xp6(4),e.Q6J("data",n.pieData)("options",n.pieOptions),e.xp6(4),e.Q6J("data",n.polarData)("options",n.polarOptions),e.xp6(5),e.Q6J("data",n.barData)("options",n.barOptions),e.xp6(4),e.Q6J("data",n.pieData)("options",n.pieOptions),e.xp6(4),e.Q6J("data",n.radarData)("options",n.radarOptions))},dependencies:[i.C],encapsulation:2})}return s})(),o=(()=>{class s{static#e=this.\u0275fac=function(u){return new(u||s)};static#t=this.\u0275mod=e.oAB({type:s});static#r=this.\u0275inj=e.cJS({imports:[c.Bz.forChild([{path:"",component:r}]),c.Bz]})}return s})(),a=(()=>{class s{static#e=this.\u0275fac=function(u){return new(u||s)};static#t=this.\u0275mod=e.oAB({type:s});static#r=this.\u0275inj=e.cJS({imports:[g.ez,o,i.S]})}return s})()},1954:(C,h,l)=>{l.d(h,{o:()=>d});var g=l(7394);class c extends g.w0{constructor(r,o){super()}schedule(r,o=0){return this}}const p={setInterval(i,r,...o){const{delegate:a}=p;return a?.setInterval?a.setInterval(i,r,...o):setInterval(i,r,...o)},clearInterval(i){const{delegate:r}=p;return(r?.clearInterval||clearInterval)(i)},delegate:void 0};var e=l(9039);class d extends c{constructor(r,o){super(r,o),this.scheduler=r,this.work=o,this.pending=!1}schedule(r,o=0){var a;if(this.closed)return this;this.state=r;const s=this.id,y=this.scheduler;return null!=s&&(this.id=this.recycleAsyncId(y,s,o)),this.pending=!0,this.delay=o,this.id=null!==(a=this.id)&&void 0!==a?a:this.requestAsyncId(y,this.id,o),this}requestAsyncId(r,o,a=0){return p.setInterval(r.flush.bind(r,this),a)}recycleAsyncId(r,o,a=0){if(null!=a&&this.delay===a&&!1===this.pending)return o;null!=o&&p.clearInterval(o)}execute(r,o){if(this.closed)return new Error("executing a cancelled action");this.pending=!1;const a=this._execute(r,o);if(a)return a;!1===this.pending&&null!=this.id&&(this.id=this.recycleAsyncId(this.scheduler,this.id,null))}_execute(r,o){let s,a=!1;try{this.work(r)}catch(y){a=!0,s=y||new Error("Scheduled action threw falsy error")}if(a)return this.unsubscribe(),s}unsubscribe(){if(!this.closed){const{id:r,scheduler:o}=this,{actions:a}=o;this.work=this.state=this.scheduler=null,this.pending=!1,(0,e.P)(a,this),null!=r&&(this.id=this.recycleAsyncId(o,r,null)),this.delay=null,super.unsubscribe()}}}},9931:(C,h,l)=>{l.d(h,{v:()=>p});const g={now:()=>(g.delegate||Date).now(),delegate:void 0};class c{constructor(d,i=c.now){this.schedulerActionCtor=d,this.now=i}schedule(d,i=0,r){return new this.schedulerActionCtor(this,d).schedule(r,i)}}c.now=g.now;class p extends c{constructor(d,i=c.now){super(d,i),this.actions=[],this._active=!1}flush(d){const{actions:i}=this;if(this._active)return void i.push(d);let r;this._active=!0;do{if(r=d.execute(d.state,d.delay))break}while(d=i.shift());if(this._active=!1,r){for(;d=i.shift();)d.unsubscribe();throw r}}}},6321:(C,h,l)=>{l.d(h,{P:()=>e,z:()=>p});var g=l(1954);const p=new(l(9931).v)(g.o),e=p}}]);
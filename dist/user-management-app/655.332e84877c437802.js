"use strict";(self.webpackChunkuser_management_app=self.webpackChunkuser_management_app||[]).push([[655],{2655:(S,u,n)=>{n.r(u),n.d(u,{LoginModule:()=>C});var m=n(6895),l=n(3456),r=n(4006),e=n(4650),c=n(384),p=n(5830),d=n(4859),g=n(7676),h=n(7392),f=n(4144),v=n(4984);function b(t,M){if(1&t&&(e.TgZ(0,"p",14),e._uU(1),e.qZA()),2&t){const s=e.oxw();e.xp6(1),e.hij(" ",s.errorMessage," ")}}const k=[{path:"",component:(()=>{class t{constructor(s,i,o,a){this.authService=s,this.router=i,this.formBuilder=o,this.apiService=a,this.loginForm=new r.cw({}),this.value="",this.hide=!0,this.spinner=!1,this.errorMessage=""}ngOnInit(){this.authService.isLoggedIn?this.authService.isLoggedIn&&this.router.navigate(["/users"]):this.router.navigate(["/login"]),this.loginForm=this.formBuilder.group({token:["",r.kI.required]})}onSubmit(){this.loginForm.valid?(this.spinner=!0,sessionStorage.setItem("token",this.loginForm.value.token.trim()),this.login()):this.errorMessage="Fill in the Token field"}login(){const s=sessionStorage.getItem("token");this.apiService.get(`users?access-token=${s}`).subscribe({next:i=>{sessionStorage.setItem("isLoggedIn","true"),this.authService.isLoggedIn="true"===sessionStorage.getItem("isLoggedIn"),this.router.navigate(["/users"])},error:i=>{this.errorMessage=401===i.status?"Invalid token. Log in again":"An error occurred while logging in",sessionStorage.removeItem("token"),this.spinner=!1}})}onInput(){this.errorMessage=""}onKeyUp(s){"Enter"===s.key&&this.onSubmit()}static#e=this.\u0275fac=function(i){return new(i||t)(e.Y36(c.e),e.Y36(l.F0),e.Y36(r.qu),e.Y36(p.s))};static#t=this.\u0275cmp=e.Xpm({type:t,selectors:[["app-login"]],decls:23,vars:8,consts:[[1,"w-full","h-screen","flex","justify-center","items-center","bg-login"],[1,"bg-white","rounded-lg","shadow-lg","p-8","max-w-md","text-center"],[1,"text-3xl","font-bold","mb-4","mt-4"],[1,"text-m","font-semibold","mb-4"],[1,"mb-4"],["href","https://gorest.co.in/consumer/login","target","_blank","rel","noopener noreferrer nofollow",1,"text-[#6002ee]"],["class","text-red-500 mb-4",4,"ngIf"],[1,"space-y-4",3,"formGroup"],[1,"w-full"],["matInput","","formControlName","token",3,"type","click","keyup"],["mat-icon-button","","matSuffix",""],[3,"click"],["mat-raised-button","","color","primary","type","submit",1,"w-full",3,"disabled","click"],[3,"showSpinner"],[1,"text-red-500","mb-4"]],template:function(i,o){1&i&&(e.TgZ(0,"div",0)(1,"div",1)(2,"h1",2),e._uU(3,"User Management App"),e.qZA(),e.TgZ(4,"h2",3),e._uU(5,"Login"),e.qZA(),e.TgZ(6,"p",4),e._uU(7," Click "),e.TgZ(8,"a",5),e._uU(9,"here"),e.qZA(),e._uU(10," to get your access token "),e.qZA(),e.YNc(11,b,2,1,"p",6),e.TgZ(12,"form",7)(13,"mat-form-field",8)(14,"mat-label"),e._uU(15,"Token"),e.qZA(),e.TgZ(16,"input",9),e.NdJ("click",function(){return o.onInput()})("keyup",function(I){return o.onKeyUp(I)}),e.qZA(),e.TgZ(17,"button",10)(18,"mat-icon",11),e.NdJ("click",function(){return o.hide=!o.hide}),e._uU(19),e.qZA()()(),e.TgZ(20,"button",12),e.NdJ("click",function(){return o.onSubmit()}),e._uU(21," Login "),e.qZA()(),e._UZ(22,"app-spinner",13),e.qZA()()),2&i&&(e.xp6(11),e.Q6J("ngIf",o.errorMessage&&""!==o.loginForm.value.token.trim()),e.xp6(1),e.Q6J("formGroup",o.loginForm),e.xp6(4),e.Q6J("type",o.hide?"password":"text"),e.xp6(1),e.uIk("aria-label","Hide token")("aria-pressed",o.hide),e.xp6(2),e.Oqu(o.hide?"visibility_off":"visibility"),e.xp6(1),e.Q6J("disabled",!o.loginForm.valid),e.xp6(2),e.Q6J("showSpinner",o.spinner))},dependencies:[m.O5,r._Y,r.Fj,r.JJ,r.JL,r.sg,r.u,d.lW,g.KE,g.hX,g.R9,h.Hw,f.Nt,v.O],styles:[".bg-login[_ngcontent-%COMP%]{display:flex;justify-content:center;align-items:center;background-color:#3b66f6;background-image:url(https://cdn.wallpapersafari.com/77/89/ms3kKF.jpg);background-size:cover}.bg-white[_ngcontent-%COMP%]{width:100%;max-width:400px;padding:33px}.shadow-lg[_ngcontent-%COMP%]{box-shadow:0 4px 6px #0000001a}.rounded-lg[_ngcontent-%COMP%]{border-radius:10px}.space-y-4[_ngcontent-%COMP%] > *[_ngcontent-%COMP%]{margin-bottom:1rem}"]})}return t})()}];let y=(()=>{class t{static#e=this.\u0275fac=function(i){return new(i||t)};static#t=this.\u0275mod=e.oAB({type:t});static#n=this.\u0275inj=e.cJS({imports:[l.Bz.forChild(k),l.Bz]})}return t})();var L=n(4653),Z=n(8580);let C=(()=>{class t{static#e=this.\u0275fac=function(i){return new(i||t)};static#t=this.\u0275mod=e.oAB({type:t});static#n=this.\u0275inj=e.cJS({imports:[m.ez,y,L.q,Z.F]})}return t})()}}]);
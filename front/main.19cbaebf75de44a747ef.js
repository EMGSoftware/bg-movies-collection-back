(window.webpackJsonp=window.webpackJsonp||[]).push([[1],{0:function(l,n,e){l.exports=e("zUnb")},AytR:function(l,n,e){"use strict";e.d(n,"a",function(){return t});var t={production:!0,apiBase:"https://bg-moviescollection.herokuapp.com/api",moviesEndpoint:"/movies",movieCoversEndpoint:"/movies/covers"}},D8yv:function(l,n,e){"use strict";e.d(n,"a",function(){return i});var t=e("mrSG"),a=e("Cy9J"),o=e("oRFT"),u=e("CcnG"),i=function(l){function n(n){var e=l.call(this,n)||this;return e.store=n,e}return Object(t.c)(n,l),n.ngInjectableDef=u.Qb({factory:function(){return new n(u.Rb(o.a))},token:n,providedIn:"root"}),n}(a.b)},YhpO:function(l,n,e){"use strict";e.d(n,"a",function(){return t});var t=function(){return function(){}}()},crnd:function(l,n,e){var t={"./movie-detail/movie-detail.module.ngfactory":["jSlN",5]};function a(l){var n=t[l];return n?e.e(n[1]).then(function(){return e(n[0])}):Promise.resolve().then(function(){var n=new Error("Cannot find module '"+l+"'");throw n.code="MODULE_NOT_FOUND",n})}a.keys=function(){return Object.keys(t)},a.id="crnd",l.exports=a},oRFT:function(l,n,e){"use strict";e.d(n,"a",function(){return u});var t=e("mrSG"),a=e("Cy9J"),o=e("CcnG"),u=function(l){function n(){return l.call(this)||this}return Object(t.c)(n,l),n.ngInjectableDef=o.Qb({factory:function(){return new n},token:n,providedIn:"root"}),n=Object(t.b)([Object(a.c)({name:"Movie"})],n)}(a.a)},zUnb:function(l,n,e){"use strict";e.r(n),e("yLV6");var t=e("CcnG"),a=e("AytR"),o=function(){return function(){}}(),u=e("oRFT"),i=e("xMyE"),r=e("t/Na"),b=function(){function l(l,n){this.movieStore=l,this.http=n}return l.prototype.get=function(){var l=this;return this.http.get(""+a.a.apiBase+a.a.moviesEndpoint).pipe(Object(i.a)(function(n){l.movieStore.set(n)}))},l.ngInjectableDef=t.Qb({factory:function(){return new l(t.Rb(u.a),t.Rb(r.c))},token:l,providedIn:"root"}),l}(),c=function(){function l(l){this.movieService=l}return l.prototype.ngOnInit=function(){this.subscription=this.movieService.get().subscribe()},l.prototype.ngOnDestroy=function(){this.subscription&&this.subscription.unsubscribe()},l}(),s=e("pMnS"),d=e("MlvX"),f=e("Wf4p"),m=e("/dO6"),p=e("dWZg"),h=e("wFw1"),g=e("v9Dh"),G=e("eDkP"),y=e("qAlS"),x=e("lLAP"),v=e("Fzqc"),E=e("ZYjt"),_=e("21Lb"),w=e("OzfB"),k=e("lzlj"),F=e("FVSy"),C=e("tRTW"),L=e("seP3"),S=e("gIcY"),M=e("Ip0R"),O=e("bujt"),j=e("UodH"),I=e("Mr+X"),P=e("SMsm"),J=e("FbN9"),z=e("8mMr"),A=e("dJrM"),q=e("b716"),N=e("/VYK"),D=e("Azqq"),B=e("uGex"),$=e("bne5"),R=e("D8yv"),T=e("67Y/"),K=e("Gi3i"),Y=e("ad02"),U=function(){function l(l,n){this.movieQuery=l,this.router=n,this.selectedGenres=[],this.availableGenres=["Action","Adventure","Biography","Comedy","Crime","Drama","History","Mistery","Scifi","Sport","Thriller"]}return l.prototype.ngOnInit=function(){var l=this;this.loading$=this.movieQuery.selectLoading(),this.moviesFullList$=this.movieQuery.selectAll(),this.movies$=this.moviesFullList$,this.moviesFilteredByGenre$=this.moviesFullList$,this.searchSubscription=Object($.a)(this.searchBox.nativeElement,"input").pipe(Object(T.a)(function(l){return l.target.value}),Object(K.a)(500),Object(Y.a)(),Object(T.a)(function(n){return n.length?l.moviesFilteredByGenre$.pipe(Object(T.a)(function(e){return e.filter(function(e){return l.matchMovie(n,e)})})):l.moviesFilteredByGenre$})).subscribe(function(n){return l.movies$=n}),document.getElementById("start")&&(document.getElementById("start").style.display="none")},l.prototype.ngOnDestroy=function(){this.searchSubscription.unsubscribe()},l.prototype.genreSelectionChanged=function(){var l=this;this.searchBox.nativeElement.value="",this.moviesFilteredByGenre$=this.moviesFullList$.pipe(Object(T.a)(function(n){return n.filter(function(n){return!l.selectedGenres.length||l.matchGenres(l.selectedGenres,n)})})),this.movies$=this.moviesFilteredByGenre$},l.prototype.matchMovie=function(l,n){return n.name.toLowerCase().indexOf(l.toLowerCase())>-1||n.description.toLowerCase().indexOf(l.toLowerCase())>-1},l.prototype.matchGenres=function(l,n){var e=new RegExp(l.join("|"),"i");return n.genres.filter(function(l){return e.test(l)}).length>0},l.prototype.getImagePath=function(l){return""+a.a.apiBase+a.a.movieCoversEndpoint+"/"+(l.img?l.img:"no-image.jpg")},l.prototype.toggleGenre=function(l){l=l[0].toUpperCase()+l.slice(1),this.selectedGenres=this.selectedGenres.includes(l)?this.selectedGenres.filter(function(n){return n!=l}):this.selectedGenres.concat([l]),this.genreSelectionChanged()},l.prototype.showDetails=function(l){this.router.navigate(["details/"+l.key])},l}(),Q=e("ZYCi"),H=t.sb({encapsulation:0,styles:[[".container[_ngcontent-%COMP%]{margin-left:1vw;margin-right:1vw}.movie-list[_ngcontent-%COMP%]{padding:5px}.mat-toolbar[_ngcontent-%COMP%]{font-size:1.1em!important}.search-box[_ngcontent-%COMP%]{width:30vw}.genre-selector[_ngcontent-%COMP%]{width:20vw}.mat-card[_ngcontent-%COMP%]:hover{box-shadow:0 0 3px 1px red;position:relative;top:-2px}.mat-card[_ngcontent-%COMP%]{cursor:default}.mat-card-content[_ngcontent-%COMP%]{max-height:10vh;height:10vh;overflow-y:auto;padding-right:5px}.mat-chip[_ngcontent-%COMP%]{cursor:pointer;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;min-height:1.6em}.mat-card-content[_ngcontent-%COMP%]::-webkit-scrollbar-track{box-shadow:inset 0 0 4px rgba(0,0,0,.3);background-color:#f5f5f5}.mat-card-content[_ngcontent-%COMP%]::-webkit-scrollbar{width:4px;background-color:#f5f5f5}.mat-card-content[_ngcontent-%COMP%]::-webkit-scrollbar-thumb{background-color:#000}.search-icon[_ngcontent-%COMP%]{position:relative;top:10px}"]],data:{}});function V(l){return t.Nb(0,[(l()(),t.ub(0,0,null,null,2,"mat-option",[["class","mat-option"],["role","option"]],[[1,"tabindex",0],[2,"mat-selected",null],[2,"mat-option-multiple",null],[2,"mat-active",null],[8,"id",0],[1,"aria-selected",0],[1,"aria-disabled",0],[2,"mat-option-disabled",null]],[[null,"click"],[null,"keydown"]],function(l,n,e){var a=!0;return"click"===n&&(a=!1!==t.Gb(l,1)._selectViaInteraction()&&a),"keydown"===n&&(a=!1!==t.Gb(l,1)._handleKeydown(e)&&a),a},d.b,d.a)),t.tb(1,8568832,[[21,4]],0,f.p,[t.k,t.h,[2,f.j],[2,f.o]],{value:[0,"value"]},null),(l()(),t.Lb(2,0,["",""]))],function(l,n){l(n,1,0,n.context.$implicit)},function(l,n){l(n,0,0,t.Gb(n,1)._getTabIndex(),t.Gb(n,1).selected,t.Gb(n,1).multiple,t.Gb(n,1).active,t.Gb(n,1).id,t.Gb(n,1)._getAriaSelected(),t.Gb(n,1).disabled.toString(),t.Gb(n,1).disabled),l(n,2,0,n.context.$implicit)})}function X(l){return t.Nb(0,[(l()(),t.ub(0,16777216,null,null,7,"mat-chip",[["class","mat-chip"],["matTooltip","Show other movies with the same genre"],["role","option"]],[[1,"tabindex",0],[2,"mat-chip-selected",null],[2,"mat-chip-with-avatar",null],[2,"mat-chip-with-trailing-icon",null],[2,"mat-chip-disabled",null],[2,"_mat-animation-noopable",null],[1,"disabled",0],[1,"aria-disabled",0],[1,"aria-selected",0]],[[null,"click"],[null,"keydown"],[null,"focus"],[null,"blur"],[null,"longpress"],[null,"touchend"]],function(l,n,e){var a=!0,o=l.component;return"click"===n&&(a=!1!==t.Gb(l,1)._handleClick(e)&&a),"keydown"===n&&(a=!1!==t.Gb(l,1)._handleKeydown(e)&&a),"focus"===n&&(a=!1!==t.Gb(l,1).focus()&&a),"blur"===n&&(a=!1!==t.Gb(l,1)._blur()&&a),"longpress"===n&&(a=!1!==t.Gb(l,5).show()&&a),"keydown"===n&&(a=!1!==t.Gb(l,5)._handleKeydown(e)&&a),"touchend"===n&&(a=!1!==t.Gb(l,5)._handleTouchend()&&a),"click"===n&&(a=!1!==o.toggleGenre(l.context.$implicit)&&a),a},null,null)),t.tb(1,147456,[[24,4]],3,m.b,[t.k,t.z,p.a,[2,f.k],[2,h.a]],null,null),t.Jb(603979776,25,{avatar:0}),t.Jb(603979776,26,{trailingIcon:0}),t.Jb(603979776,27,{removeIcon:0}),t.tb(5,212992,null,0,g.d,[G.c,t.k,y.a,t.P,t.z,p.a,x.c,x.e,g.b,[2,v.b],[2,g.a],[2,E.f]],{message:[0,"message"]},null),(l()(),t.ub(6,0,null,null,1,"small",[],null,null,null,null,null)),(l()(),t.Lb(7,null,["",""])),(l()(),t.jb(0,null,null,0))],function(l,n){l(n,5,0,"Show other movies with the same genre")},function(l,n){l(n,0,0,t.Gb(n,1).disabled?null:-1,t.Gb(n,1).selected,t.Gb(n,1).avatar,t.Gb(n,1).trailingIcon||t.Gb(n,1).removeIcon,t.Gb(n,1).disabled,t.Gb(n,1)._animationsDisabled,t.Gb(n,1).disabled||null,t.Gb(n,1).disabled.toString(),t.Gb(n,1).ariaSelected),l(n,7,0,n.context.$implicit)})}function W(l){return t.Nb(0,[(l()(),t.ub(0,0,null,null,30,"div",[["class","movie-list"],["fxFlex","25"],["fxFlex.md","33"],["fxFlex.sm","50"],["fxFlex.xs","100"],["fxLayout","column"]],null,null,null,null,null)),t.tb(1,671744,null,0,_.c,[t.k,w.i,[2,_.i],w.f],{fxLayout:[0,"fxLayout"]},null),t.tb(2,671744,null,0,_.a,[t.k,w.i,w.e,_.f,w.f],{fxFlex:[0,"fxFlex"],"fxFlex.xs":[1,"fxFlex.xs"],"fxFlex.sm":[2,"fxFlex.sm"],"fxFlex.md":[3,"fxFlex.md"]},null),(l()(),t.ub(3,0,null,null,27,"mat-card",[["class","mat-elevation-z1 mat-card"]],[[2,"_mat-animation-noopable",null]],null,null,k.d,k.a)),t.tb(4,49152,null,0,F.a,[[2,h.a]],null,null),(l()(),t.ub(5,0,null,0,12,"mat-card-header",[["class","movie-title mat-card-header"]],null,null,null,k.c,k.b)),t.tb(6,49152,null,0,F.d,[],null,null),(l()(),t.ub(7,0,null,1,2,"mat-card-title",[["class","mat-card-title"]],null,null,null,null,null)),t.tb(8,16384,null,0,F.h,[],null,null),(l()(),t.Lb(9,null,["",""])),(l()(),t.ub(10,0,null,1,7,"mat-card-subtitle",[["class","mat-card-subtitle"]],null,null,null,null,null)),t.tb(11,16384,null,0,F.g,[],null,null),(l()(),t.ub(12,0,null,null,5,"mat-chip-list",[["class","mat-chip-list"]],[[1,"tabindex",0],[1,"aria-describedby",0],[1,"aria-required",0],[1,"aria-disabled",0],[1,"aria-invalid",0],[1,"aria-multiselectable",0],[1,"role",0],[2,"mat-chip-list-disabled",null],[2,"mat-chip-list-invalid",null],[2,"mat-chip-list-required",null],[1,"aria-orientation",0],[8,"id",0]],[[null,"focus"],[null,"blur"],[null,"keydown"]],function(l,n,e){var a=!0;return"focus"===n&&(a=!1!==t.Gb(l,14).focus()&&a),"blur"===n&&(a=!1!==t.Gb(l,14)._blur()&&a),"keydown"===n&&(a=!1!==t.Gb(l,14)._keydown(e)&&a),a},C.b,C.a)),t.Ib(6144,null,L.c,null,[m.c]),t.tb(14,1556480,null,1,m.c,[t.k,t.h,[2,v.b],[2,S.h],[2,S.b],f.b,[8,null]],null,null),t.Jb(603979776,24,{chips:1}),(l()(),t.jb(16777216,null,0,1,null,X)),t.tb(17,278528,null,0,M.j,[t.P,t.M,t.s],{ngForOf:[0,"ngForOf"]},null),(l()(),t.ub(18,0,null,0,1,"img",[["alt","Movie cover"],["class","mat-card-image"],["mat-card-image",""]],[[8,"src",4]],null,null,null,null)),t.tb(19,16384,null,0,F.e,[],null,null),(l()(),t.ub(20,0,null,0,10,"mat-card-actions",[["class","mat-card-actions"]],[[2,"mat-card-actions-align-end",null]],null,null,null,null)),t.tb(21,16384,null,0,F.b,[],null,null),(l()(),t.ub(22,16777216,null,null,8,"button",[["aria-label","More details about this movie"],["color","secondary"],["fxFlex",""],["mat-button",""],["matTooltip","Know more about this movie"]],[[1,"disabled",0],[2,"_mat-animation-noopable",null]],[[null,"click"],[null,"longpress"],[null,"keydown"],[null,"touchend"]],function(l,n,e){var a=!0,o=l.component;return"longpress"===n&&(a=!1!==t.Gb(l,24).show()&&a),"keydown"===n&&(a=!1!==t.Gb(l,24)._handleKeydown(e)&&a),"touchend"===n&&(a=!1!==t.Gb(l,24)._handleTouchend()&&a),"click"===n&&(a=!1!==o.showDetails(l.context.$implicit)&&a),a},O.b,O.a)),t.tb(23,180224,null,0,j.b,[t.k,x.e,[2,h.a]],{color:[0,"color"]},null),t.tb(24,212992,null,0,g.d,[G.c,t.k,y.a,t.P,t.z,p.a,x.c,x.e,g.b,[2,v.b],[2,g.a],[2,E.f]],{message:[0,"message"]},null),t.tb(25,671744,null,0,_.a,[t.k,w.i,w.e,_.f,w.f],{fxFlex:[0,"fxFlex"]},null),(l()(),t.ub(26,0,null,0,2,"mat-icon",[["class","mat-icon notranslate"],["role","img"]],[[2,"mat-icon-inline",null],[2,"mat-icon-no-color",null]],null,null,I.b,I.a)),t.tb(27,9158656,null,0,P.b,[t.k,P.d,[8,null],[2,P.a]],null,null),(l()(),t.Lb(-1,0,["theaters"])),(l()(),t.ub(29,0,null,0,1,"span",[],null,null,null,null,null)),(l()(),t.Lb(-1,null,[" More Details"]))],function(l,n){l(n,1,0,"column"),l(n,2,0,"25","100","50","33"),l(n,14,0),l(n,17,0,n.context.$implicit.genres),l(n,23,0,"secondary"),l(n,24,0,"Know more about this movie"),l(n,25,0,""),l(n,27,0)},function(l,n){var e=n.component;l(n,3,0,"NoopAnimations"===t.Gb(n,4)._animationMode),l(n,9,0,n.context.$implicit.name),l(n,12,1,[t.Gb(n,14).disabled?null:t.Gb(n,14)._tabIndex,t.Gb(n,14)._ariaDescribedby||null,t.Gb(n,14).required.toString(),t.Gb(n,14).disabled.toString(),t.Gb(n,14).errorState,t.Gb(n,14).multiple,t.Gb(n,14).role,t.Gb(n,14).disabled,t.Gb(n,14).errorState,t.Gb(n,14).required,t.Gb(n,14).ariaOrientation,t.Gb(n,14)._uid]),l(n,18,0,e.getImagePath(n.context.$implicit)),l(n,20,0,"end"===t.Gb(n,21).align),l(n,22,0,t.Gb(n,23).disabled||null,"NoopAnimations"===t.Gb(n,23)._animationMode),l(n,26,0,t.Gb(n,27).inline,"primary"!==t.Gb(n,27).color&&"accent"!==t.Gb(n,27).color&&"warn"!==t.Gb(n,27).color)})}function Z(l){return t.Nb(0,[(l()(),t.ub(0,0,null,null,2,null,null,null,null,null,null,null)),(l()(),t.jb(16777216,null,null,1,null,W)),t.tb(2,278528,null,0,M.j,[t.P,t.M,t.s],{ngForOf:[0,"ngForOf"]},null),(l()(),t.jb(0,null,null,0))],function(l,n){l(n,2,0,n.parent.context.ngIf)},null)}function ll(l){return t.Nb(0,[(l()(),t.ub(0,0,null,null,4,"div",[["fxFlex","100"],["fxLayoutAlign","center center"]],null,null,null,null,null)),t.tb(1,671744,null,0,_.b,[t.k,w.i,[2,_.g],w.f],{fxLayoutAlign:[0,"fxLayoutAlign"]},null),t.tb(2,671744,null,0,_.a,[t.k,w.i,w.e,_.f,w.f],{fxFlex:[0,"fxFlex"]},null),(l()(),t.ub(3,0,null,null,1,"h3",[],null,null,null,null,null)),(l()(),t.Lb(-1,null,["Not matching movies found"]))],function(l,n){l(n,1,0,"center center"),l(n,2,0,"100")},null)}function nl(l){return t.Nb(0,[(l()(),t.jb(16777216,null,null,2,null,ll)),t.tb(1,16384,null,0,M.k,[t.P,t.M],{ngIf:[0,"ngIf"]},null),t.Hb(131072,M.b,[t.h]),(l()(),t.jb(0,null,null,0))],function(l,n){var e=n.component;l(n,1,0,!t.Mb(n,1,0,t.Gb(n,2).transform(e.loading$)))},null)}function el(l){return t.Nb(0,[(l()(),t.ub(0,0,null,null,4,"div",[["fxLayout","row wrap"]],null,null,null,null,null)),t.tb(1,671744,null,0,_.c,[t.k,w.i,[2,_.i],w.f],{fxLayout:[0,"fxLayout"]},null),(l()(),t.jb(16777216,null,null,1,null,Z)),t.tb(3,16384,null,0,M.k,[t.P,t.M],{ngIf:[0,"ngIf"],ngIfElse:[1,"ngIfElse"]},null),(l()(),t.jb(0,[["noItems",2]],null,0,null,nl))],function(l,n){l(n,1,0,"row wrap"),l(n,3,0,n.context.ngIf.length,t.Gb(n,4))},null)}function tl(l){return t.Nb(0,[t.Jb(402653184,1,{searchBox:0}),(l()(),t.ub(1,0,null,null,59,"div",[["class","container"],["fxFlex","100"],["fxLayout","column"],["fxLayoutGap","10px"]],null,null,null,null,null)),t.tb(2,671744,null,0,_.c,[t.k,w.i,[2,_.i],w.f],{fxLayout:[0,"fxLayout"]},null),t.tb(3,1720320,null,0,_.d,[t.k,t.z,v.b,w.i,[2,_.h],w.f],{fxLayoutGap:[0,"fxLayoutGap"]},null),t.tb(4,671744,null,0,_.a,[t.k,w.i,w.e,_.f,w.f],{fxFlex:[0,"fxFlex"]},null),(l()(),t.ub(5,0,null,null,52,"mat-toolbar",[["class","mat-elevation-z5 mat-toolbar"],["color","accent"],["fxLayoutAlign","center center"],["fxLayoutGap","30px"]],[[2,"mat-toolbar-multiple-rows",null],[2,"mat-toolbar-single-row",null]],null,null,J.b,J.a)),t.tb(6,4243456,null,1,z.a,[t.k,p.a,M.d],{color:[0,"color"]},null),t.Jb(603979776,2,{_toolbarRows:1}),t.tb(8,1720320,null,0,_.d,[t.k,t.z,v.b,w.i,[2,_.h],w.f],{fxLayoutGap:[0,"fxLayoutGap"]},null),t.tb(9,671744,null,0,_.b,[t.k,w.i,[2,_.g],w.f],{fxLayoutAlign:[0,"fxLayoutAlign"]},null),(l()(),t.ub(10,0,null,0,19,"mat-form-field",[["class","mat-form-field"],["floatLabel","never"],["fxFlex","30"],["fxFlex.xs","50"]],[[2,"mat-form-field-appearance-standard",null],[2,"mat-form-field-appearance-fill",null],[2,"mat-form-field-appearance-outline",null],[2,"mat-form-field-appearance-legacy",null],[2,"mat-form-field-invalid",null],[2,"mat-form-field-can-float",null],[2,"mat-form-field-should-float",null],[2,"mat-form-field-has-label",null],[2,"mat-form-field-hide-placeholder",null],[2,"mat-form-field-disabled",null],[2,"mat-form-field-autofilled",null],[2,"mat-focused",null],[2,"mat-accent",null],[2,"mat-warn",null],[2,"ng-untouched",null],[2,"ng-touched",null],[2,"ng-pristine",null],[2,"ng-dirty",null],[2,"ng-valid",null],[2,"ng-invalid",null],[2,"ng-pending",null],[2,"_mat-animation-noopable",null]],null,null,A.b,A.a)),t.tb(11,7520256,null,9,L.b,[t.k,t.h,[2,f.h],[2,v.b],[2,L.a],p.a,t.z,[2,h.a]],{floatLabel:[0,"floatLabel"]},null),t.Jb(603979776,3,{_controlNonStatic:0}),t.Jb(335544320,4,{_controlStatic:0}),t.Jb(603979776,5,{_labelChildNonStatic:0}),t.Jb(335544320,6,{_labelChildStatic:0}),t.Jb(603979776,7,{_placeholderChild:0}),t.Jb(603979776,8,{_errorChildren:1}),t.Jb(603979776,9,{_hintChildren:1}),t.Jb(603979776,10,{_prefixChildren:1}),t.Jb(603979776,11,{_suffixChildren:1}),t.tb(21,671744,null,0,_.a,[t.k,w.i,w.e,_.f,w.f],{fxFlex:[0,"fxFlex"],"fxFlex.xs":[1,"fxFlex.xs"]},null),(l()(),t.ub(22,0,null,4,3,"mat-icon",[["aria-label","'Search Movies'"],["class","search-icon mat-icon notranslate"],["matSuffix",""],["role","img"]],[[2,"mat-icon-inline",null],[2,"mat-icon-no-color",null]],null,null,I.b,I.a)),t.tb(23,16384,[[11,4]],0,L.f,[],null,null),t.tb(24,9158656,null,0,P.b,[t.k,P.d,[8,null],[2,P.a]],null,null),(l()(),t.Lb(-1,0,["search"])),(l()(),t.ub(26,16777216,[[1,0],["searchBox",1]],1,3,"input",[["aria-label","Search movies"],["class","mat-input-element mat-form-field-autofill-control"],["matInput",""],["matTooltip","Search movies by entering part of their name or description"],["placeholder","Search Movies"],["type","text"]],[[2,"mat-input-server",null],[1,"id",0],[1,"placeholder",0],[8,"disabled",0],[8,"required",0],[1,"readonly",0],[1,"aria-describedby",0],[1,"aria-invalid",0],[1,"aria-required",0]],[[null,"blur"],[null,"focus"],[null,"input"],[null,"longpress"],[null,"keydown"],[null,"touchend"]],function(l,n,e){var a=!0;return"blur"===n&&(a=!1!==t.Gb(l,27)._focusChanged(!1)&&a),"focus"===n&&(a=!1!==t.Gb(l,27)._focusChanged(!0)&&a),"input"===n&&(a=!1!==t.Gb(l,27)._onInput()&&a),"longpress"===n&&(a=!1!==t.Gb(l,28).show()&&a),"keydown"===n&&(a=!1!==t.Gb(l,28)._handleKeydown(e)&&a),"touchend"===n&&(a=!1!==t.Gb(l,28)._handleTouchend()&&a),a},null,null)),t.tb(27,999424,null,0,q.a,[t.k,p.a,[8,null],[2,S.h],[2,S.b],f.b,[8,null],N.a,t.z],{placeholder:[0,"placeholder"],type:[1,"type"]},null),t.tb(28,212992,null,0,g.d,[G.c,t.k,y.a,t.P,t.z,p.a,x.c,x.e,g.b,[2,v.b],[2,g.a],[2,E.f]],{message:[0,"message"]},null),t.Ib(2048,[[3,4],[4,4]],L.c,null,[q.a]),(l()(),t.ub(30,0,null,0,27,"mat-form-field",[["class","mat-form-field"],["floatLabel","never"],["fxFlex","20"],["fxFlex.xs","50"]],[[2,"mat-form-field-appearance-standard",null],[2,"mat-form-field-appearance-fill",null],[2,"mat-form-field-appearance-outline",null],[2,"mat-form-field-appearance-legacy",null],[2,"mat-form-field-invalid",null],[2,"mat-form-field-can-float",null],[2,"mat-form-field-should-float",null],[2,"mat-form-field-has-label",null],[2,"mat-form-field-hide-placeholder",null],[2,"mat-form-field-disabled",null],[2,"mat-form-field-autofilled",null],[2,"mat-focused",null],[2,"mat-accent",null],[2,"mat-warn",null],[2,"ng-untouched",null],[2,"ng-touched",null],[2,"ng-pristine",null],[2,"ng-dirty",null],[2,"ng-valid",null],[2,"ng-invalid",null],[2,"ng-pending",null],[2,"_mat-animation-noopable",null]],null,null,A.b,A.a)),t.tb(31,7520256,null,9,L.b,[t.k,t.h,[2,f.h],[2,v.b],[2,L.a],p.a,t.z,[2,h.a]],{floatLabel:[0,"floatLabel"]},null),t.Jb(603979776,12,{_controlNonStatic:0}),t.Jb(335544320,13,{_controlStatic:0}),t.Jb(603979776,14,{_labelChildNonStatic:0}),t.Jb(335544320,15,{_labelChildStatic:0}),t.Jb(603979776,16,{_placeholderChild:0}),t.Jb(603979776,17,{_errorChildren:1}),t.Jb(603979776,18,{_hintChildren:1}),t.Jb(603979776,19,{_prefixChildren:1}),t.Jb(603979776,20,{_suffixChildren:1}),t.tb(41,671744,null,0,_.a,[t.k,w.i,w.e,_.f,w.f],{fxFlex:[0,"fxFlex"],"fxFlex.xs":[1,"fxFlex.xs"]},null),(l()(),t.ub(42,0,null,3,2,"mat-label",[],null,null,null,null,null)),t.tb(43,16384,[[14,4],[15,4]],0,L.e,[],null,null),(l()(),t.Lb(-1,null,["Filter by Genre"])),(l()(),t.ub(45,16777216,null,1,12,"mat-select",[["aria-label","Filter by genre"],["class","mat-select"],["matTooltip","Filter movies by selecting one or more genres"],["multiple",""],["role","listbox"]],[[1,"id",0],[1,"tabindex",0],[1,"aria-label",0],[1,"aria-labelledby",0],[1,"aria-required",0],[1,"aria-disabled",0],[1,"aria-invalid",0],[1,"aria-owns",0],[1,"aria-multiselectable",0],[1,"aria-describedby",0],[1,"aria-activedescendant",0],[2,"mat-select-disabled",null],[2,"mat-select-invalid",null],[2,"mat-select-required",null],[2,"mat-select-empty",null],[2,"ng-untouched",null],[2,"ng-touched",null],[2,"ng-pristine",null],[2,"ng-dirty",null],[2,"ng-valid",null],[2,"ng-invalid",null],[2,"ng-pending",null]],[[null,"selectionChange"],[null,"ngModelChange"],[null,"keydown"],[null,"focus"],[null,"blur"],[null,"longpress"],[null,"touchend"]],function(l,n,e){var a=!0,o=l.component;return"keydown"===n&&(a=!1!==t.Gb(l,49)._handleKeydown(e)&&a),"focus"===n&&(a=!1!==t.Gb(l,49)._onFocus()&&a),"blur"===n&&(a=!1!==t.Gb(l,49)._onBlur()&&a),"longpress"===n&&(a=!1!==t.Gb(l,53).show()&&a),"keydown"===n&&(a=!1!==t.Gb(l,53)._handleKeydown(e)&&a),"touchend"===n&&(a=!1!==t.Gb(l,53)._handleTouchend()&&a),"selectionChange"===n&&(a=!1!==o.genreSelectionChanged()&&a),"ngModelChange"===n&&(a=!1!==(o.selectedGenres=e)&&a),a},D.b,D.a)),t.Ib(6144,null,f.j,null,[B.c]),t.tb(47,671744,null,0,S.i,[[8,null],[8,null],[8,null],[8,null]],{model:[0,"model"]},{update:"ngModelChange"}),t.Ib(2048,null,S.f,null,[S.i]),t.tb(49,2080768,null,3,B.c,[y.d,t.h,t.z,f.b,t.k,[2,v.b],[2,S.h],[2,S.b],[2,L.b],[6,S.f],[8,null],B.a,x.f],{multiple:[0,"multiple"],ariaLabel:[1,"ariaLabel"]},{selectionChange:"selectionChange"}),t.Jb(603979776,21,{options:1}),t.Jb(603979776,22,{optionGroups:1}),t.Jb(603979776,23,{customTrigger:0}),t.tb(53,212992,null,0,g.d,[G.c,t.k,y.a,t.P,t.z,p.a,x.c,x.e,g.b,[2,v.b],[2,g.a],[2,E.f]],{message:[0,"message"]},null),t.tb(54,16384,null,0,S.g,[[4,S.f]],null,null),t.Ib(2048,[[12,4],[13,4]],L.c,null,[B.c]),(l()(),t.jb(16777216,null,1,1,null,V)),t.tb(57,278528,null,0,M.j,[t.P,t.M,t.s],{ngForOf:[0,"ngForOf"]},null),(l()(),t.jb(16777216,null,null,2,null,el)),t.tb(59,16384,null,0,M.k,[t.P,t.M],{ngIf:[0,"ngIf"]},null),t.Hb(131072,M.b,[t.h])],function(l,n){var e=n.component;l(n,2,0,"column"),l(n,3,0,"10px"),l(n,4,0,"100"),l(n,6,0,"accent"),l(n,8,0,"30px"),l(n,9,0,"center center"),l(n,11,0,"never"),l(n,21,0,"30","50"),l(n,24,0),l(n,27,0,"Search Movies","text"),l(n,28,0,"Search movies by entering part of their name or description"),l(n,31,0,"never"),l(n,41,0,"20","50"),l(n,47,0,e.selectedGenres),l(n,49,0,"","Filter by genre"),l(n,53,0,"Filter movies by selecting one or more genres"),l(n,57,0,e.availableGenres),l(n,59,0,t.Mb(n,59,0,t.Gb(n,60).transform(e.movies$)))},function(l,n){l(n,5,0,t.Gb(n,6)._toolbarRows.length>0,0===t.Gb(n,6)._toolbarRows.length),l(n,10,1,["standard"==t.Gb(n,11).appearance,"fill"==t.Gb(n,11).appearance,"outline"==t.Gb(n,11).appearance,"legacy"==t.Gb(n,11).appearance,t.Gb(n,11)._control.errorState,t.Gb(n,11)._canLabelFloat,t.Gb(n,11)._shouldLabelFloat(),t.Gb(n,11)._hasFloatingLabel(),t.Gb(n,11)._hideControlPlaceholder(),t.Gb(n,11)._control.disabled,t.Gb(n,11)._control.autofilled,t.Gb(n,11)._control.focused,"accent"==t.Gb(n,11).color,"warn"==t.Gb(n,11).color,t.Gb(n,11)._shouldForward("untouched"),t.Gb(n,11)._shouldForward("touched"),t.Gb(n,11)._shouldForward("pristine"),t.Gb(n,11)._shouldForward("dirty"),t.Gb(n,11)._shouldForward("valid"),t.Gb(n,11)._shouldForward("invalid"),t.Gb(n,11)._shouldForward("pending"),!t.Gb(n,11)._animationsEnabled]),l(n,22,0,t.Gb(n,24).inline,"primary"!==t.Gb(n,24).color&&"accent"!==t.Gb(n,24).color&&"warn"!==t.Gb(n,24).color),l(n,26,0,t.Gb(n,27)._isServer,t.Gb(n,27).id,t.Gb(n,27).placeholder,t.Gb(n,27).disabled,t.Gb(n,27).required,t.Gb(n,27).readonly&&!t.Gb(n,27)._isNativeSelect||null,t.Gb(n,27)._ariaDescribedby||null,t.Gb(n,27).errorState,t.Gb(n,27).required.toString()),l(n,30,1,["standard"==t.Gb(n,31).appearance,"fill"==t.Gb(n,31).appearance,"outline"==t.Gb(n,31).appearance,"legacy"==t.Gb(n,31).appearance,t.Gb(n,31)._control.errorState,t.Gb(n,31)._canLabelFloat,t.Gb(n,31)._shouldLabelFloat(),t.Gb(n,31)._hasFloatingLabel(),t.Gb(n,31)._hideControlPlaceholder(),t.Gb(n,31)._control.disabled,t.Gb(n,31)._control.autofilled,t.Gb(n,31)._control.focused,"accent"==t.Gb(n,31).color,"warn"==t.Gb(n,31).color,t.Gb(n,31)._shouldForward("untouched"),t.Gb(n,31)._shouldForward("touched"),t.Gb(n,31)._shouldForward("pristine"),t.Gb(n,31)._shouldForward("dirty"),t.Gb(n,31)._shouldForward("valid"),t.Gb(n,31)._shouldForward("invalid"),t.Gb(n,31)._shouldForward("pending"),!t.Gb(n,31)._animationsEnabled]),l(n,45,1,[t.Gb(n,49).id,t.Gb(n,49).tabIndex,t.Gb(n,49)._getAriaLabel(),t.Gb(n,49)._getAriaLabelledby(),t.Gb(n,49).required.toString(),t.Gb(n,49).disabled.toString(),t.Gb(n,49).errorState,t.Gb(n,49).panelOpen?t.Gb(n,49)._optionIds:null,t.Gb(n,49).multiple,t.Gb(n,49)._ariaDescribedby||null,t.Gb(n,49)._getAriaActiveDescendant(),t.Gb(n,49).disabled,t.Gb(n,49).errorState,t.Gb(n,49).required,t.Gb(n,49).empty,t.Gb(n,54).ngClassUntouched,t.Gb(n,54).ngClassTouched,t.Gb(n,54).ngClassPristine,t.Gb(n,54).ngClassDirty,t.Gb(n,54).ngClassValid,t.Gb(n,54).ngClassInvalid,t.Gb(n,54).ngClassPending])})}function al(l){return t.Nb(0,[(l()(),t.ub(0,0,null,null,1,"app-movie-list",[],null,null,null,tl,H)),t.tb(1,245760,null,0,U,[R.a,Q.k],null,null)],function(l,n){l(n,1,0)},null)}var ol=t.qb("app-movie-list",U,al,{},{},[]),ul=e("NcP4"),il=t.sb({encapsulation:0,styles:[["mat-toolbar[_ngcontent-%COMP%]{position:-webkit-sticky;position:sticky;top:0;z-index:1000}.popcorn-icon[_ngcontent-%COMP%]{width:50px;margin-right:15px;position:relative;top:10px;opacity:.9}.popcorn-icon[_ngcontent-%COMP%]:hover{transform:rotate(360deg);transition-duration:.4s;transition-property:transform}.title[_ngcontent-%COMP%]{color:#fceeb8}"]],data:{animation:[{type:7,name:"myAnimation",definitions:[{type:1,expr:"* => *",animation:[{type:11,selector:":enter",animation:[{type:6,styles:{opacity:0},offset:null}],options:{optional:!0}},{type:11,selector:":leave",animation:[{type:6,styles:{opacity:1,filter:"grayscale(100%)"},offset:null},{type:4,styles:{type:6,styles:{opacity:0},offset:null},timings:"0.5s"}],options:{optional:!0}},{type:11,selector:":enter",animation:[{type:6,styles:{opacity:0},offset:null},{type:4,styles:{type:6,styles:{opacity:1},offset:null},timings:"0.5s"}],options:{optional:!0}}],options:null}],options:{}}]}});function rl(l){return t.Nb(0,[(l()(),t.ub(0,0,null,null,9,"mat-toolbar",[["class","mat-elevation-z6 mat-toolbar"],["fxLayoutAlign","center center"]],[[2,"mat-toolbar-multiple-rows",null],[2,"mat-toolbar-single-row",null]],null,null,J.b,J.a)),t.tb(1,4243456,null,1,z.a,[t.k,p.a,M.d],null,null),t.Jb(603979776,1,{_toolbarRows:1}),t.tb(3,671744,null,0,_.b,[t.k,w.i,[2,_.g],w.f],{fxLayoutAlign:[0,"fxLayoutAlign"]},null),(l()(),t.ub(4,0,null,1,5,"mat-toolbar-row",[["class","mat-toolbar-row"],["fxLayoutAlign.xs","center center"]],null,null,null,null,null)),t.tb(5,16384,[[1,4]],0,z.c,[],null,null),t.tb(6,671744,null,0,_.b,[t.k,w.i,[2,_.g],w.f],{"fxLayoutAlign.xs":[0,"fxLayoutAlign.xs"]},null),(l()(),t.ub(7,0,null,null,0,"img",[["class","popcorn-icon"],["src","assets/images/popcorn.png"]],null,null,null,null,null)),(l()(),t.ub(8,0,null,null,1,"span",[["class","title"]],null,null,null,null,null)),(l()(),t.Lb(-1,null,["Movies Collection"])),(l()(),t.ub(10,0,null,null,3,"main",[],null,null,null,null,null)),(l()(),t.ub(11,0,null,null,2,"div",[],[[24,"@myAnimation",0]],null,null,null,null)),(l()(),t.ub(12,16777216,null,null,1,"router-outlet",[],null,null,null,null,null)),t.tb(13,212992,[["myOutlet",4]],0,Q.m,[Q.b,t.P,t.j,[8,null],t.h],null,null)],function(l,n){l(n,3,0,"center center"),l(n,6,0,"center center"),l(n,13,0)},function(l,n){l(n,0,0,t.Gb(n,1)._toolbarRows.length>0,0===t.Gb(n,1)._toolbarRows.length),l(n,11,0,t.Gb(n,13).isActivated?t.Gb(n,13).activatedRoute:"")})}function bl(l){return t.Nb(0,[(l()(),t.ub(0,0,null,null,1,"app-root",[],null,null,null,rl,il)),t.tb(1,245760,null,0,c,[b],null,null)],function(l,n){l(n,1,0)},null)}var cl=t.qb("app-root",c,bl,{},{},[]),sl=e("NSYL"),dl=e("ihYY"),fl=e("M2Lx"),ml={state:"Home"},pl={state:"Details"},hl=function(){return function(){}}(),gl=e("4c35"),Gl=e("de3e"),yl=e("YhpO"),xl=e("hUWP"),vl=e("3pJQ"),El=e("V9q+"),_l=e("YSh2"),wl=t.rb(o,[c],function(l){return t.Db([t.Eb(512,t.j,t.cb,[[8,[s.a,ol,ul.a,cl]],[3,t.j],t.x]),t.Eb(5120,t.u,t.ob,[[3,t.u]]),t.Eb(4608,M.m,M.l,[t.u,[2,M.z]]),t.Eb(5120,t.kb,t.pb,[t.z]),t.Eb(5120,t.c,t.lb,[]),t.Eb(5120,t.s,t.mb,[]),t.Eb(5120,t.t,t.nb,[]),t.Eb(4608,E.b,E.k,[M.d]),t.Eb(6144,t.H,null,[E.b]),t.Eb(4608,E.e,f.c,[[2,f.g],[2,f.l]]),t.Eb(5120,E.c,function(l,n,e,t,a,o,u,i){return[new E.i(l,n,e),new E.n(t),new E.m(a,o,u,i)]},[M.d,t.z,t.B,M.d,M.d,E.e,t.db,[2,E.f]]),t.Eb(4608,E.d,E.d,[E.c,t.z]),t.Eb(135680,E.l,E.l,[M.d]),t.Eb(4608,E.j,E.j,[E.d,E.l,t.c]),t.Eb(5120,sl.a,h.e,[]),t.Eb(5120,sl.c,h.f,[]),t.Eb(4608,sl.b,h.d,[M.d,sl.a,sl.c]),t.Eb(5120,t.F,h.g,[E.j,sl.b,t.z]),t.Eb(6144,E.o,null,[E.l]),t.Eb(4608,t.N,t.N,[t.z]),t.Eb(5120,Q.a,Q.w,[Q.k]),t.Eb(4608,Q.e,Q.e,[]),t.Eb(6144,Q.f,null,[Q.e]),t.Eb(135680,Q.n,Q.n,[Q.k,t.w,t.i,t.q,Q.f]),t.Eb(4608,Q.d,Q.d,[]),t.Eb(5120,Q.B,Q.s,[Q.k,M.t,Q.g]),t.Eb(5120,Q.h,Q.z,[Q.x]),t.Eb(5120,t.b,function(l,n,e){return[l,w.j(n,e)]},[Q.h,M.d,t.B]),t.Eb(4608,dl.b,h.c,[t.F,M.d]),t.Eb(4608,f.b,f.b,[]),t.Eb(4608,G.c,G.c,[G.h,G.d,t.j,G.g,G.e,t.q,t.z,M.d,v.b,[2,M.g]]),t.Eb(5120,G.i,G.j,[G.c]),t.Eb(4608,fl.c,fl.c,[]),t.Eb(5120,B.a,B.b,[G.c]),t.Eb(5120,g.b,g.c,[G.c]),t.Eb(4608,r.h,r.n,[M.d,t.B,r.l]),t.Eb(4608,r.o,r.o,[r.h,r.m]),t.Eb(5120,r.a,function(l){return[l]},[r.o]),t.Eb(4608,r.k,r.k,[]),t.Eb(6144,r.i,null,[r.k]),t.Eb(4608,r.g,r.g,[r.i]),t.Eb(6144,r.b,null,[r.g]),t.Eb(4608,r.f,r.j,[r.b,t.q]),t.Eb(4608,r.c,r.c,[r.f]),t.Eb(4608,S.k,S.k,[]),t.Eb(1073742336,M.c,M.c,[]),t.Eb(1024,t.l,E.p,[]),t.Eb(1024,t.y,function(){return[Q.r()]},[]),t.Eb(512,Q.x,Q.x,[t.q]),t.Eb(1024,t.d,function(l,n){return[E.q(l),Q.y(n)]},[[2,t.y],Q.x]),t.Eb(512,t.e,t.e,[[2,t.d]]),t.Eb(131584,t.g,t.g,[t.z,t.db,t.q,t.l,t.j,t.e]),t.Eb(1073742336,t.f,t.f,[t.g]),t.Eb(1073742336,E.a,E.a,[[3,E.a]]),t.Eb(1024,Q.q,Q.u,[[3,Q.k]]),t.Eb(512,Q.p,Q.c,[]),t.Eb(512,Q.b,Q.b,[]),t.Eb(256,Q.g,{preloadingStrategy:Q.e},[]),t.Eb(1024,M.h,Q.t,[M.s,[2,M.a],Q.g]),t.Eb(512,M.g,M.g,[M.h,M.s]),t.Eb(512,t.i,t.i,[]),t.Eb(512,t.w,t.K,[t.i,[2,t.L]]),t.Eb(1024,Q.i,function(){return[[{path:"",component:U,pathMatch:"full",data:ml},{path:"details/:movie_key",loadChildren:"./movie-detail/movie-detail.module#MovieDetailModule",pathMatch:"full",data:pl}]]},[]),t.Eb(1024,Q.k,Q.v,[t.g,Q.p,Q.b,M.g,t.q,t.w,t.i,Q.i,Q.g,[2,Q.o],[2,Q.j]]),t.Eb(1073742336,Q.l,Q.l,[[2,Q.q],[2,Q.k]]),t.Eb(1073742336,hl,hl,[]),t.Eb(1073742336,h.b,h.b,[]),t.Eb(1073742336,m.d,m.d,[]),t.Eb(1073742336,v.a,v.a,[]),t.Eb(1073742336,gl.c,gl.c,[]),t.Eb(1073742336,p.b,p.b,[]),t.Eb(1073742336,y.b,y.b,[]),t.Eb(1073742336,G.f,G.f,[]),t.Eb(1073742336,f.l,f.l,[[2,f.d],[2,E.f]]),t.Eb(1073742336,f.u,f.u,[]),t.Eb(1073742336,f.s,f.s,[]),t.Eb(1073742336,f.q,f.q,[]),t.Eb(1073742336,fl.d,fl.d,[]),t.Eb(1073742336,L.d,L.d,[]),t.Eb(1073742336,B.d,B.d,[]),t.Eb(1073742336,P.c,P.c,[]),t.Eb(1073742336,j.c,j.c,[]),t.Eb(1073742336,Gl.b,Gl.b,[]),t.Eb(1073742336,Gl.a,Gl.a,[]),t.Eb(1073742336,z.b,z.b,[]),t.Eb(1073742336,F.f,F.f,[]),t.Eb(1073742336,N.c,N.c,[]),t.Eb(1073742336,q.b,q.b,[]),t.Eb(1073742336,x.a,x.a,[]),t.Eb(1073742336,g.e,g.e,[]),t.Eb(1073742336,yl.a,yl.a,[]),t.Eb(1073742336,w.c,w.c,[]),t.Eb(1073742336,_.e,_.e,[]),t.Eb(1073742336,xl.b,xl.b,[]),t.Eb(1073742336,vl.a,vl.a,[]),t.Eb(1073742336,El.a,El.a,[[2,w.g],t.B]),t.Eb(1073742336,r.e,r.e,[]),t.Eb(1073742336,r.d,r.d,[]),t.Eb(1073742336,S.j,S.j,[]),t.Eb(1073742336,S.c,S.c,[]),t.Eb(1073742336,o,o,[]),t.Eb(256,t.bb,!0,[]),t.Eb(256,h.a,"BrowserAnimations",[]),t.Eb(256,m.a,{separatorKeyCodes:[_l.f]},[]),t.Eb(256,r.l,"XSRF-TOKEN",[]),t.Eb(256,r.m,"X-XSRF-TOKEN",[])])});a.a.production&&Object(t.U)(),E.h().bootstrapModuleFactory(wl).catch(function(l){return console.error(l)})}},[[0,0,4]]]);
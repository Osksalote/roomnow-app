((a,b)=>{a[b]=a[b]||{}})(self,"$__dart_deferred_initializers__")
$__dart_deferred_initializers__.current=function(a,b,c,$){var J,A,B,E,F,G,C={
c2O(d){return d.h(0,"done_at")==null?null:B.n.aM(A.bJ(d.h(0,"done_at")).cw(A.bJ(d.h(0,"created_at"))).a,6e7)},
AF:function AF(d,e,f){this.c=d
this.d=e
this.a=f},
aPP:function aPP(){},
aPQ:function aPQ(d,e){this.a=d
this.b=e},
aPO:function aPO(d){this.a=d},
aPR:function aPR(d,e){this.a=d
this.b=e},
aPS:function aPS(d,e){this.a=d
this.b=e},
aPT:function aPT(d,e){this.a=d
this.b=e},
aPU:function aPU(d,e){this.a=d
this.b=e},
aPV:function aPV(d){this.a=d},
aPM:function aPM(d,e,f){this.a=d
this.b=e
this.c=f},
aPL:function aPL(d,e,f){this.a=d
this.b=e
this.c=f},
aPI:function aPI(d,e,f){this.a=d
this.b=e
this.c=f},
aPH:function aPH(d,e){this.a=d
this.b=e},
aPJ:function aPJ(d){this.a=d},
aPK:function aPK(d){this.a=d},
aPN:function aPN(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g}},D,H
J=c[1]
A=c[0]
B=c[2]
E=c[30]
F=c[33]
G=c[17]
C=a.updateHolder(c[15],C)
D=c[52]
H=c[49]
C.AF.prototype={
t(a2){var x,w,v,u,t,s,r,q,p,o=this,n="kind",m=null,l="status",k="created_at",j="items",i="line_nad",h="total_nad",g="started_at",f="working",e="handled_name",d="open",a0=o.c,a1=B.Se.h(0,a0.h(0,n))
if(a1==null)a1=B.zq
x=a0.h(0,"bookings")
if(x==null){x=y.b
x=A.E(x,x)}y.B.a(x)
w=A.bS(x.h(0,"guest_phone"))
v=A.fR(a1.c,A.bi(a1.b,B.L,m,18),16)
u=x.h(0,"rooms")
u=u==null?m:J.v(u,"name")
t=y.u
u=A.ap(A.b([v,B.bq,A.aS(A.j(a1.a+" \xb7 "+A.f(u==null?"":u),m,m,m,m,B.ev,m,m,m),1),A.c3k(a0.h(0,l))],t),B.A,B.r,B.t,0,m)
x=x.h(0,"guest_name")
x=A.b([u,B.aD,A.j(A.f(x==null?"":x)+" \xb7 "+A.cy(a0.h(0,k)),m,m,m,m,B.ay,m,m,m),B.aD],t)
v=y.i
if(v.b(a0.h(0,j))&&J.im(v.a(a0.h(0,j)))){u=A.b([],t)
for(v=J.bk(v.a(a0.h(0,j)));v.p();){s=v.gF()
r=J.aK(s)
q=A.j(A.f(r.h(s,"qty"))+" \xd7 "+A.f(r.h(s,"name")),m,m,m,m,B.a_a,m,m,m)
if(r.h(s,i)==null)r="price?"
else{r=r.h(s,i)
p=A.aW("#,##0")
r="N$ "+p.O(A.ah(r==null?0:r))}u.push(A.ap(A.b([new A.cN(1,B.aU,q,m),A.j(r,m,m,m,m,B.nl,m,m,m)],t),B.A,B.r,B.t,0,m))}v=a0.h(0,"body")
v=B.i.gN(A.b(J.aL(v==null?"":v).split("\n"),y.x))
r=new A.hl(v,new C.aPP())
while(r.p())u.push(A.j(v.gF(),m,m,m,m,E.a_4,m,m,m))
if(a0.h(0,h)!=null)u.push(A.ap(A.b([D.ab2,A.j(A.aU(a0.h(0,h)),m,m,m,m,D.cbW,m,m,m)],t),B.A,B.r,B.t,0,m))
B.i.G(x,u)}else{v=a0.h(0,"body")
x.push(A.j(v==null?"":v,m,m,m,m,B.nl,m,m,m))}if(a0.h(0,"photo_path")!=null)x.push(new A.cO(B.bW,m,m,A.dj(D.ag5,D.c_G,new C.aPQ(o,a2),m),m))
if(a0.h(0,"reply")!=null)x.push(new A.I(B.eF,A.j("Reply: "+A.f(a0.h(0,"reply")),m,m,m,m,B.AE,m,m,m),m))
x.push(B.aD)
v=A.b(["Reported "+A.Kb(a0.h(0,k))],y.x)
if(a0.h(0,g)!=null)v.push("started "+A.Kb(a0.h(0,g)))
if(a0.h(0,"fix_by")!=null&&J.d(a0.h(0,l),f))v.push("promised by "+A.Kb(a0.h(0,"fix_by")))
if(a0.h(0,"done_at")!=null){u=A.Kb(a0.h(0,"done_at"))
r=C.c2O(a0)
v.push("done "+u+" ("+A.bK5(r==null?0:r)+")")}if(a0.h(0,e)!=null)v.push("by "+A.f(a0.h(0,e)))
v=B.i.aK(v," \xb7 ")
u=A.xx(a0)?B.Z:B.aH
x.push(A.j(v,m,m,m,m,A.cL(m,m,u,m,m,m,m,m,m,m,m,12,m,m,A.xx(a0)?B.al:m,m,m,!0,m,m,m,m,m,m,m,m),m,m,m))
if(A.xx(a0))x.push(D.c4c)
if(J.d(a0.h(0,l),d)&&B.n.aM(new A.an(Date.now(),0,!1).cw(A.bJ(a0.h(0,k))).a,6e7)>=15)x.push(D.c4O)
x.push(B.S)
v=A.b([],t)
if(J.d(a0.h(0,l),d)){u=A.cg(m,m,D.bYE,m,m,m,m)
v.push(A.b6(A.j(J.d(a0.h(0,n),"order")?"Preparing":"Working on it",m,m,m,m,m,m,m,m),new C.aPR(o,a2),u))}if(J.d(a0.h(0,l),f))v.push(A.c9(D.adI,D.c5o,new C.aPS(o,a2),A.f_(m,m,m,m,m,m,m,m,m,m,m,B.jg,m,m,m,m,m,m,m,m)))
if(J.d(a0.h(0,l),d)||J.d(a0.h(0,l),f)){u=A.cg(B.U,m,B.dD,m,m,m,m)
v.push(A.b6(A.j(J.d(a0.h(0,n),"order")?"Ready / delivered":"Done",m,m,m,m,m,m,m,m),new C.aPT(o,a2),u))}if((J.d(a0.h(0,l),d)||J.d(a0.h(0,l),f))&&$.mg.n(0,a0.h(0,"place_id")))v.push(A.c9(H.Ga,D.c0e,new C.aPU(o,a2),A.f_(m,m,m,m,m,m,m,m,m,m,m,B.jg,m,m,m,m,m,m,m,m)))
if(w!=null)v.push(A.c9(F.fC,B.dX,new C.aPV(w),A.f_(m,m,m,m,m,m,m,m,m,m,m,B.di,m,m,m,m,m,m,m,m)))
x.push(A.bP(B.ab,v,B.ag,8,8))
return A.aV(new A.I(B.aA,A.P(x,B.a9,B.r,B.t,0,B.x),m),m,m,B.b1,m)},
uR(d,e){return this.atK(d,e)},
atK(d,e){var x=0,w=A.o(y.v),v,u=this,t,s,r
var $async$uR=A.k(function(f,g){if(f===1)return A.l(g,w)
for(;;)switch(x){case 0:s={}
r=new A.af(B.a7,$.a5())
s.a=null
t=e==="working"
x=3
return A.e(A.c1(null,null,!0,null,new C.aPM(s,t,r),d,null,!0,!0,y.e),$async$uR)
case 3:if(g!==!0||d.e==null){x=1
break}if(t&&s.a==null&&!J.d(u.c.h(0,"kind"),"order")){A.bq(d,"Choose how long it will take",!0)
x=1
break}x=4
return A.e(A.ae(d,new C.aPN(s,u,e,r),"Guest told"),$async$uR)
case 4:if(g)u.d.$0()
case 1:return A.m(v,w)}})
return A.n($async$uR,w)}}
var z=a.updateTypes(["y?(u<h,@>)"])
C.aPP.prototype={
$1(d){return!B.p.n(d," \xd7 ")&&!B.p.bE(d,"Total N$")},
$S:18}
C.aPQ.prototype={
$0(){var x=0,w=A.o(y.v),v,u=2,t=[],s=this,r,q,p,o,n,m
var $async$$0=A.k(function(d,e){if(d===1){t.push(e)
x=u}for(;;)switch(x){case 0:u=4
p=s.a.c.h(0,"photo_path")
o=$.N().b
o===$&&A.a()
o=o.ay
o===$&&A.a()
x=7
return A.e(o.bg("request-photos").qw(p,3600),$async$$0)
case 7:r=e
p=s.b
if(p.e==null){x=1
break}A.c1(null,null,!0,null,new C.aPO(r),p,null,!0,!0,y.b)
u=2
x=6
break
case 4:u=3
m=t.pop()
q=A.ak(m)
p=s.b
if(p.e!=null)A.bq(p,A.fF(q),!0)
x=6
break
case 3:x=2
break
case 6:case 1:return A.m(v,w)
case 2:return A.l(t.at(-1),w)}})
return A.n($async$$0,w)},
$S:1}
C.aPO.prototype={
$1(d){var x=null
return A.uE(x,x,A.a4M(A.z8(this.a,x,x,B.eG,x,!1,x,x,x)),x,x,x,x,B.i0,x,x,x)},
$S:149}
C.aPR.prototype={
$0(){return this.a.uR(this.b,"working")},
$S:0}
C.aPS.prototype={
$0(){return this.a.uR(this.b,"working")},
$S:0}
C.aPT.prototype={
$0(){return this.a.uR(this.b,"done")},
$S:0}
C.aPU.prototype={
$0(){var x=0,w=A.o(y.v),v,u=this,t,s,r
var $async$$0=A.k(function(d,e){if(d===1)return A.l(e,w)
for(;;)switch(x){case 0:x=3
return A.e(A.oC("team",""),$async$$0)
case 3:t=u.b
if(t.e==null){x=1
break}A.kt("team")
s=u.a
r=s.c
x=4
return A.e(G.K7(t,r.h(0,"place_id"),r),$async$$0)
case 4:if(e)s.d.$0()
case 1:return A.m(v,w)}})
return A.n($async$$0,w)},
$S:1}
C.aPV.prototype={
$0(){return A.e6(A.cw("tel:"+this.a,0,null),B.bZ)},
$S:0}
C.aPM.prototype={
$1(d){return new A.dm(new C.aPL(this.a,this.b,this.c),null)},
$S:11}
C.aPL.prototype={
$2(d,e){var x,w,v,u,t=null,s=this.b,r=A.j(s?"How long will it take?":"Mark as done",t,t,t,t,t,t,t,t),q=y.u,p=A.b([],q)
if(s){x=A.b([],q)
for(w=this.a,v=0;v<7;++v){u=D.b8p[v]
x.push(A.d2(t,A.j(u===1440?"Tomorrow":A.bK5(u),t,t,t,t,t,t,t,t),t,new C.aPI(w,e,u),w.a===u,t,t))}B.i.G(p,A.b([D.c9p,B.S,A.bP(B.ab,x,B.ag,6,6),B.ah],q))}p.push(A.aq(t,B.N,!1,t,!0,B.C,t,A.ar(),this.c,t,t,t,t,t,2,A.as(t,t,t,t,t,t,t,t,!0,t,t,t,t,t,t,t,t,t,t,t,t,t,t,t,t,t,t,t,t,t,t,s?'Message to the guest (optional), e.g. "The plumber is coming"':"Message to the guest (optional)",t,t,t,t,t,t,t,t,t,!0,!0,!1,t,t,t,t,t,t,t,t,t,t,t,t,t,t),B.B,!0,t,!0,t,!1,t,B.O,t,t,t,t,t,t,500,t,3,t,t,!1,"\u2022",t,t,t,t,t,!1,t,t,!1,t,!0,t,B.K,t,t,t,t,t,t,t,t,t,t,t,t,!0,B.H,t,B.P,t,t,t,t))
p=A.dw(A.P(p,B.Y,B.r,B.a2,0,B.x),t,B.B,t,t,t,B.Q)
return A.cm(A.b([A.b5(B.aV,t,t,new C.aPJ(d),t,t),A.b6(B.fN,new C.aPK(d),A.cg(t,t,B.di,t,t,t,t))],q),t,p,t,r)},
$S:29}
C.aPI.prototype={
$1(d){return this.b.$1(new C.aPH(this.a,this.c))},
$S:4}
C.aPH.prototype={
$0(){return this.a.a=this.b},
$S:0}
C.aPJ.prototype={
$0(){A.K(this.a,!1).U(!1)
return null},
$S:0}
C.aPK.prototype={
$0(){A.K(this.a,!1).U(!0)
return null},
$S:0}
C.aPN.prototype={
$0(){var x=this,w=x.b.c.h(0,"id"),v=B.p.al(x.d.a.a),u=x.a.a,t=$.N().b
t===$&&A.a()
return t.a2("update_guest_request",A.J(["p_request",w,"p_status",x.c,"p_reply",v,"p_minutes",u],y.w,y.b),y.v)},
$S:1};(function installTearOffs(){var x=a._static_1
x(C,"coJ","c2O",0)})();(function inheritance(){var x=a.inherit,w=a.inheritMany
x(C.AF,A.a2)
w(A.h5,[C.aPP,C.aPO,C.aPM,C.aPI])
w(A.j9,[C.aPQ,C.aPR,C.aPS,C.aPT,C.aPU,C.aPV,C.aPH,C.aPJ,C.aPK,C.aPN])
x(C.aPL,A.k2)})()
A.ks(b.typeUniverse,JSON.parse('{"AF":{"a2":[],"i":[]}}'))
var y={x:A.a9("F<h>"),u:A.a9("F<i>"),i:A.a9("B<@>"),B:A.a9("u<@,@>"),w:A.a9("h"),e:A.a9("M"),b:A.a9("@"),v:A.a9("~")};(function constants(){var x=a.makeConstList
D.c79=new A.p("Total",B.a3,null,null,null,null)
D.ab2=new A.cN(1,B.aU,D.c79,null)
D.adI=new A.a6(B.pf,18,null,null,null)
D.ag5=new A.a6(E.Fq,null,null,null,null)
D.b8p=x([10,15,30,60,120,240,1440],A.a9("F<y>"))
D.bYE=new A.L(120,44)
D.c_G=new A.p("See photo",null,null,null,null,null)
D.c0e=new A.p("Give to employee",null,null,null,null,null)
D.c4c=new A.p("LATE: the guest is waiting. Fix it or give a new time.",B.dj,null,null,null,null)
D.c4O=new A.p("Not answered for more than 15 minutes.",B.dj,null,null,null,null)
D.c5o=new A.p("New time",null,null,null,null,null)
D.c9p=new A.p("The guest sees this time.",B.a8,null,null,null,null)
D.cbW=new A.H(!0,B.U,null,null,null,null,16,B.al,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)})()};
(a=>{a["o6PM5bFl5VVUNRKZpIyNCTDysgs="]=a.current})($__dart_deferred_initializers__);
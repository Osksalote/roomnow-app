((a,b)=>{a[b]=a[b]||{}})(self,"$__dart_deferred_initializers__")
$__dart_deferred_initializers__.current=function(a,b,c,$){var J,A,B,E,F,G,H,C={
c1h(d){return d.h(0,"done_at")==null?null:B.m.aL(A.bJ(d.h(0,"done_at")).cA(A.bJ(d.h(0,"created_at"))).a,6e7)},
AB:function AB(d,e,f){this.c=d
this.d=e
this.a=f},
aPG:function aPG(){},
aPH:function aPH(d,e){this.a=d
this.b=e},
aPF:function aPF(d){this.a=d},
aPI:function aPI(d,e){this.a=d
this.b=e},
aPJ:function aPJ(d,e){this.a=d
this.b=e},
aPK:function aPK(d,e){this.a=d
this.b=e},
aPL:function aPL(d,e){this.a=d
this.b=e},
aPM:function aPM(d){this.a=d},
aPD:function aPD(d,e,f){this.a=d
this.b=e
this.c=f},
aPC:function aPC(d,e,f){this.a=d
this.b=e
this.c=f},
aPz:function aPz(d,e,f){this.a=d
this.b=e
this.c=f},
aPy:function aPy(d,e){this.a=d
this.b=e},
aPA:function aPA(d){this.a=d},
aPB:function aPB(d){this.a=d},
aPE:function aPE(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g}},D
J=c[1]
A=c[0]
B=c[2]
E=c[31]
F=c[33]
G=c[17]
H=c[51]
C=a.updateHolder(c[15],C)
D=c[54]
C.AB.prototype={
t(a2){var x,w,v,u,t,s,r,q,p,o=this,n="kind",m=null,l="status",k="created_at",j="items",i="line_nad",h="total_nad",g="started_at",f="working",e="handled_name",d="open",a0=o.c,a1=B.Si.h(0,a0.h(0,n))
if(a1==null)a1=B.zn
x=a0.h(0,"bookings")
if(x==null){x=y.b
x=A.D(x,x)}y.B.a(x)
w=A.bT(x.h(0,"guest_phone"))
v=A.fS(a1.c,A.bq(a1.b,B.K,m,18),16)
u=x.h(0,"rooms")
u=u==null?m:J.u(u,"name")
t=y.u
u=A.ap(A.b([v,B.bp,A.aU(A.i(a1.a+" \xb7 "+A.e(u==null?"":u),m,m,m,m,B.et,m,m,m),1),A.c1O(a0.h(0,l))],t),B.A,B.q,B.r,0,m)
x=x.h(0,"guest_name")
x=A.b([u,B.aG,A.i(A.e(x==null?"":x)+" \xb7 "+A.cA(a0.h(0,k)),m,m,m,m,B.aB,m,m,m),B.aG],t)
v=y.i
if(v.b(a0.h(0,j))&&J.im(v.a(a0.h(0,j)))){u=A.b([],t)
for(v=J.bk(v.a(a0.h(0,j)));v.p();){s=v.gG()
r=J.aK(s)
q=A.i(A.e(r.h(s,"qty"))+" \xd7 "+A.e(r.h(s,"name")),m,m,m,m,B.ZN,m,m,m)
if(r.h(s,i)==null)r="price?"
else{r=r.h(s,i)
p=A.aX("#,##0")
r="N$ "+p.O(A.ai(r==null?0:r))}u.push(A.ap(A.b([new A.cP(1,B.aV,q,m),A.i(r,m,m,m,m,B.ng,m,m,m)],t),B.A,B.q,B.r,0,m))}v=a0.h(0,"body")
v=B.h.gN(A.b(J.aL(v==null?"":v).split("\n"),y.x))
r=new A.hl(v,new C.aPG())
while(r.p())u.push(A.i(v.gG(),m,m,m,m,E.ZH,m,m,m))
if(a0.h(0,h)!=null)u.push(A.ap(A.b([D.ab3,A.i(A.aY(a0.h(0,h)),m,m,m,m,D.bNw,m,m,m)],t),B.A,B.q,B.r,0,m))
B.h.I(x,u)}else{v=a0.h(0,"body")
x.push(A.i(v==null?"":v,m,m,m,m,B.ng,m,m,m))}if(a0.h(0,"photo_path")!=null)x.push(new A.cO(B.c0,m,m,A.dl(D.ag2,D.bIM,new C.aPH(o,a2),m),m))
if(a0.h(0,"reply")!=null)x.push(new A.H(B.f3,A.i("Reply: "+A.e(a0.h(0,"reply")),m,m,m,m,B.Ay,m,m,m),m))
x.push(B.aG)
v=A.b(["Reported "+A.K6(a0.h(0,k))],y.x)
if(a0.h(0,g)!=null)v.push("started "+A.K6(a0.h(0,g)))
if(a0.h(0,"fix_by")!=null&&J.c(a0.h(0,l),f))v.push("promised by "+A.K6(a0.h(0,"fix_by")))
if(a0.h(0,"done_at")!=null){u=A.K6(a0.h(0,"done_at"))
r=C.c1h(a0)
v.push("done "+u+" ("+A.bIM(r==null?0:r)+")")}if(a0.h(0,e)!=null)v.push("by "+A.e(a0.h(0,e)))
v=B.h.aK(v," \xb7 ")
u=A.xr(a0)?B.a_:B.aR
x.push(A.i(v,m,m,m,m,A.cN(m,m,u,m,m,m,m,m,m,m,m,12,m,m,A.xr(a0)?B.ao:m,m,m,!0,m,m,m,m,m,m,m,m),m,m,m))
if(A.xr(a0))x.push(D.bXH)
if(J.c(a0.h(0,l),d)&&B.m.aL(new A.aq(Date.now(),0,!1).cA(A.bJ(a0.h(0,k))).a,6e7)>=15)x.push(D.bRQ)
x.push(B.S)
v=A.b([],t)
if(J.c(a0.h(0,l),d)){u=A.cj(m,m,D.bHo,m,m,m,m)
v.push(A.b7(A.i(J.c(a0.h(0,n),"order")?"Preparing":"Working on it",m,m,m,m,m,m,m,m),new C.aPI(o,a2),u))}if(J.c(a0.h(0,l),f))v.push(A.c9(D.adK,D.bVE,new C.aPJ(o,a2),A.f0(m,m,m,m,m,m,m,m,m,m,m,B.jd,m,m,m,m,m,m,m,m)))
if(J.c(a0.h(0,l),d)||J.c(a0.h(0,l),f)){u=A.cj(B.U,m,B.dB,m,m,m,m)
v.push(A.b7(A.i(J.c(a0.h(0,n),"order")?"Ready / delivered":"Done",m,m,m,m,m,m,m,m),new C.aPK(o,a2),u))}if((J.c(a0.h(0,l),d)||J.c(a0.h(0,l),f))&&$.mf.n(0,a0.h(0,"place_id")))v.push(A.c9(H.G8,D.bX6,new C.aPL(o,a2),A.f0(m,m,m,m,m,m,m,m,m,m,m,B.jd,m,m,m,m,m,m,m,m)))
if(w!=null)v.push(A.c9(F.fz,B.Ac,new C.aPM(w),A.f0(m,m,m,m,m,m,m,m,m,m,m,B.d1,m,m,m,m,m,m,m,m)))
x.push(A.bW(B.ac,v,B.ag,8,8))
return A.b_(new A.H(B.ay,A.R(x,B.a9,B.q,B.r,0,B.x),m),m,m,B.b_,m)},
uR(d,e){return this.atB(d,e)},
atB(d,e){var x=0,w=A.n(y.v),v,u=this,t,s,r
var $async$uR=A.j(function(f,g){if(f===1)return A.k(g,w)
for(;;)switch(x){case 0:s={}
r=new A.al(B.aa,$.a5())
s.a=null
t=e==="working"
x=3
return A.d(A.ca(null,null,!0,null,new C.aPD(s,t,r),d,null,!0,!0,y.e),$async$uR)
case 3:if(g!==!0||d.e==null){x=1
break}if(t&&s.a==null&&!J.c(u.c.h(0,"kind"),"order")){A.bv(d,"Choose how long it will take",!0)
x=1
break}x=4
return A.d(A.af(d,new C.aPE(s,u,e,r),"Guest told"),$async$uR)
case 4:if(g)u.d.$0()
case 1:return A.l(v,w)}})
return A.m($async$uR,w)}}
var z=a.updateTypes(["x?(r<f,@>)"])
C.aPG.prototype={
$1(d){return!B.o.n(d," \xd7 ")&&!B.o.bC(d,"Total N$")},
$S:18}
C.aPH.prototype={
$0(){var x=0,w=A.n(y.v),v,u=2,t=[],s=this,r,q,p,o,n,m
var $async$$0=A.j(function(d,e){if(d===1){t.push(e)
x=u}for(;;)switch(x){case 0:u=4
p=s.a.c.h(0,"photo_path")
o=$.M().b
o===$&&A.a()
o=o.ay
o===$&&A.a()
x=7
return A.d(o.be("request-photos").qu(p,3600),$async$$0)
case 7:r=e
p=s.b
if(p.e==null){x=1
break}A.ca(null,null,!0,null,new C.aPF(r),p,null,!0,!0,y.b)
u=2
x=6
break
case 4:u=3
m=t.pop()
q=A.aj(m)
p=s.b
if(p.e!=null)A.bv(p,A.fH(q),!0)
x=6
break
case 3:x=2
break
case 6:case 1:return A.l(v,w)
case 2:return A.k(t.at(-1),w)}})
return A.m($async$$0,w)},
$S:1}
C.aPF.prototype={
$1(d){var x=null
return A.uA(x,x,A.a4D(A.z3(this.a,x,x,B.eD,x,!1,x,x,x)),x,x,x,x,B.hZ,x,x,x)},
$S:124}
C.aPI.prototype={
$0(){return this.a.uR(this.b,"working")},
$S:0}
C.aPJ.prototype={
$0(){return this.a.uR(this.b,"working")},
$S:0}
C.aPK.prototype={
$0(){return this.a.uR(this.b,"done")},
$S:0}
C.aPL.prototype={
$0(){var x=0,w=A.n(y.v),v,u=this,t,s,r
var $async$$0=A.j(function(d,e){if(d===1)return A.k(e,w)
for(;;)switch(x){case 0:x=3
return A.d(A.oC("team.1",""),$async$$0)
case 3:t=u.b
if(t.e==null){x=1
break}A.kt("team.1")
s=u.a
r=s.c
x=4
return A.d(G.K2(t,r.h(0,"place_id"),r),$async$$0)
case 4:if(e)s.d.$0()
case 1:return A.l(v,w)}})
return A.m($async$$0,w)},
$S:1}
C.aPM.prototype={
$0(){return A.e7(A.cv("tel:"+this.a,0,null),B.bY)},
$S:0}
C.aPD.prototype={
$1(d){return new A.dA(new C.aPC(this.a,this.b,this.c),null)},
$S:12}
C.aPC.prototype={
$2(d,e){var x,w,v,u,t=null,s=this.b,r=A.i(s?"How long will it take?":"Mark as done",t,t,t,t,t,t,t,t),q=y.u,p=A.b([],q)
if(s){x=A.b([],q)
for(w=this.a,v=0;v<7;++v){u=D.bal[v]
x.push(A.d9(t,A.i(u===1440?"Tomorrow":A.bIM(u),t,t,t,t,t,t,t,t),t,new C.aPz(w,e,u),w.a===u,t,t))}B.h.I(p,A.b([D.bZ2,B.S,A.bW(B.ac,x,B.ag,6,6),B.ah],q))}p.push(A.as(t,B.O,!1,t,!0,B.C,t,A.au(),this.c,t,t,t,t,t,2,A.eY(t,t,t,t,t,t,t,t,!0,t,t,t,t,t,t,t,t,t,t,t,t,t,t,t,t,t,t,t,t,t,t,s?'Message to the guest (optional), e.g. "The plumber is coming"':"Message to the guest (optional)",t,t,t,t,t,t,t,t,t,!0,!0,!1,t,t,t,t,t,t,t,t,t,t,t,t,t,t),B.B,!0,t,!0,t,!1,t,B.Q,t,t,t,t,t,t,500,t,3,t,t,!1,"\u2022",t,t,t,t,t,!1,t,t,!1,t,!0,t,B.M,t,t,t,t,t,t,t,t,t,t,t,t,!0,B.J,t,B.R,t,t,t,t))
p=A.dN(A.R(p,B.Y,B.q,B.a3,0,B.x),t,B.B,t,t,t,B.N)
return A.cr(A.b([A.b6(B.l0,t,t,new C.aPA(d),t,t),A.b7(B.Ae,new C.aPB(d),A.cj(t,t,B.d1,t,t,t,t))],q),t,p,t,r)},
$S:34}
C.aPz.prototype={
$1(d){return this.b.$1(new C.aPy(this.a,this.c))},
$S:4}
C.aPy.prototype={
$0(){return this.a.a=this.b},
$S:0}
C.aPA.prototype={
$0(){A.J(this.a,!1).U(!1)
return null},
$S:0}
C.aPB.prototype={
$0(){A.J(this.a,!1).U(!0)
return null},
$S:0}
C.aPE.prototype={
$0(){var x=this,w=x.b.c.h(0,"id"),v=B.o.ap(x.d.a.a),u=x.a.a,t=$.M().b
t===$&&A.a()
return t.a1("update_guest_request",A.I(["p_request",w,"p_status",x.c,"p_reply",v,"p_minutes",u],y.w,y.b),y.v)},
$S:1};(function installTearOffs(){var x=a._static_1
x(C,"cn5","c1h",0)})();(function inheritance(){var x=a.inherit,w=a.inheritMany
x(C.AB,A.a3)
w(A.h6,[C.aPG,C.aPF,C.aPD,C.aPz])
w(A.j6,[C.aPH,C.aPI,C.aPJ,C.aPK,C.aPL,C.aPM,C.aPy,C.aPA,C.aPB,C.aPE])
x(C.aPC,A.k1)})()
A.kr(b.typeUniverse,JSON.parse('{"AB":{"a3":[],"h":[]}}'))
var y={x:A.aa("E<f>"),u:A.aa("E<h>"),i:A.aa("A<@>"),B:A.aa("r<@,@>"),w:A.aa("f"),e:A.aa("L"),b:A.aa("@"),v:A.aa("~")};(function constants(){var x=a.makeConstList
D.bTO=new A.t("Total",null,B.a4,null,null,null,null,null,null,null,null)
D.ab3=new A.cP(1,B.aV,D.bTO,null)
D.adK=new A.a9(B.pd,18,null,null,null)
D.ag2=new A.a9(E.Fo,null,null,null,null)
D.bal=x([10,15,30,60,120,240,1440],A.aa("E<x>"))
D.bHo=new A.K(120,44)
D.bIM=new A.a6("See photo",null,null,null,null,null)
D.bNw=new A.G(!0,B.U,null,null,null,null,16,B.ao,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.bRQ=new A.t("Not answered for more than 15 minutes.",null,B.dj,null,null,null,null,null,null,null,null)
D.bVE=new A.t("New time",null,null,null,null,null,null,null,null,null,null)
D.bX6=new A.t("Give to employee",null,null,null,null,null,null,null,null,null,null)
D.bXH=new A.t("LATE: the guest is waiting. Fix it or give a new time.",null,B.dj,null,null,null,null,null,null,null,null)
D.bZ2=new A.t("The guest sees this time.",null,B.a7,null,null,null,null,null,null,null,null)})()};
(a=>{a["cPoTejnsJgkownIFSWxluQ7AnAY="]=a.current})($__dart_deferred_initializers__);
((a,b)=>{a[b]=a[b]||{}})(self,"$__dart_deferred_initializers__")
$__dart_deferred_initializers__.current=function(a,b,c,$){var J,A,B,E,F,G,C={
c1t(d){return d.h(0,"done_at")==null?null:B.n.aL(A.bI(d.h(0,"done_at")).cA(A.bI(d.h(0,"created_at"))).a,6e7)},
AA:function AA(d,e,f){this.c=d
this.d=e
this.a=f},
aPI:function aPI(){},
aPJ:function aPJ(d,e){this.a=d
this.b=e},
aPH:function aPH(d){this.a=d},
aPK:function aPK(d,e){this.a=d
this.b=e},
aPL:function aPL(d,e){this.a=d
this.b=e},
aPM:function aPM(d,e){this.a=d
this.b=e},
aPN:function aPN(d,e){this.a=d
this.b=e},
aPO:function aPO(d){this.a=d},
aPF:function aPF(d,e,f){this.a=d
this.b=e
this.c=f},
aPE:function aPE(d,e,f){this.a=d
this.b=e
this.c=f},
aPB:function aPB(d,e,f){this.a=d
this.b=e
this.c=f},
aPA:function aPA(d,e){this.a=d
this.b=e},
aPC:function aPC(d){this.a=d},
aPD:function aPD(d){this.a=d},
aPG:function aPG(d,e,f,g){var _=this
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
C.AA.prototype={
t(a2){var x,w,v,u,t,s,r,q,p,o=this,n="kind",m=null,l="status",k="created_at",j="items",i="line_nad",h="total_nad",g="started_at",f="working",e="handled_name",d="open",a0=o.c,a1=B.S5.h(0,a0.h(0,n))
if(a1==null)a1=B.zk
x=a0.h(0,"bookings")
if(x==null){x=y.b
x=A.E(x,x)}y.B.a(x)
w=A.bS(x.h(0,"guest_phone"))
v=A.fQ(a1.c,A.bg(a1.b,B.K,m,18),16)
u=x.h(0,"rooms")
u=u==null?m:J.v(u,"name")
t=y.u
u=A.ap(A.b([v,B.bp,A.aT(A.o(a1.a+" \xb7 "+A.e(u==null?"":u),m,m,m,m,B.ev,m,m,m),1),A.c2_(a0.h(0,l))],t),B.A,B.r,B.t,0,m)
x=x.h(0,"guest_name")
x=A.b([u,B.aG,A.o(A.e(x==null?"":x)+" \xb7 "+A.cA(a0.h(0,k)),m,m,m,m,B.aB,m,m,m),B.aG],t)
v=y.i
if(v.b(a0.h(0,j))&&J.il(v.a(a0.h(0,j)))){u=A.b([],t)
for(v=J.bk(v.a(a0.h(0,j)));v.p();){s=v.gG()
r=J.aK(s)
q=A.o(A.e(r.h(s,"qty"))+" \xd7 "+A.e(r.h(s,"name")),m,m,m,m,B.a_0,m,m,m)
if(r.h(s,i)==null)r="price?"
else{r=r.h(s,i)
p=A.aX("#,##0")
r="N$ "+p.O(A.ah(r==null?0:r))}u.push(A.ap(A.b([new A.cP(1,B.aV,q,m),A.o(r,m,m,m,m,B.ni,m,m,m)],t),B.A,B.r,B.t,0,m))}v=a0.h(0,"body")
v=B.h.gN(A.b(J.aN(v==null?"":v).split("\n"),y.x))
r=new A.hj(v,new C.aPI())
while(r.p())u.push(A.o(v.gG(),m,m,m,m,E.ZV,m,m,m))
if(a0.h(0,h)!=null)u.push(A.ap(A.b([D.aaS,A.o(A.aV(a0.h(0,h)),m,m,m,m,D.c2z,m,m,m)],t),B.A,B.r,B.t,0,m))
B.h.I(x,u)}else{v=a0.h(0,"body")
x.push(A.o(v==null?"":v,m,m,m,m,B.ni,m,m,m))}if(a0.h(0,"photo_path")!=null)x.push(new A.cO(B.c0,m,m,A.di(D.afT,D.bRw,new C.aPJ(o,a2),m),m))
if(a0.h(0,"reply")!=null)x.push(new A.I(B.f3,A.o("Reply: "+A.e(a0.h(0,"reply")),m,m,m,m,B.Ay,m,m,m),m))
x.push(B.aG)
v=A.b(["Reported "+A.K6(a0.h(0,k))],y.x)
if(a0.h(0,g)!=null)v.push("started "+A.K6(a0.h(0,g)))
if(a0.h(0,"fix_by")!=null&&J.c(a0.h(0,l),f))v.push("promised by "+A.K6(a0.h(0,"fix_by")))
if(a0.h(0,"done_at")!=null){u=A.K6(a0.h(0,"done_at"))
r=C.c1t(a0)
v.push("done "+u+" ("+A.bIY(r==null?0:r)+")")}if(a0.h(0,e)!=null)v.push("by "+A.e(a0.h(0,e)))
v=B.h.aK(v," \xb7 ")
u=A.xs(a0)?B.a_:B.aR
x.push(A.o(v,m,m,m,m,A.cN(m,m,u,m,m,m,m,m,m,m,m,12,m,m,A.xs(a0)?B.ao:m,m,m,!0,m,m,m,m,m,m,m,m),m,m,m))
if(A.xs(a0))x.push(D.bVU)
if(J.c(a0.h(0,l),d)&&B.n.aL(new A.ao(Date.now(),0,!1).cA(A.bI(a0.h(0,k))).a,6e7)>=15)x.push(D.bWw)
x.push(B.S)
v=A.b([],t)
if(J.c(a0.h(0,l),d)){u=A.cg(m,m,D.bPx,m,m,m,m)
v.push(A.b6(A.o(J.c(a0.h(0,n),"order")?"Preparing":"Working on it",m,m,m,m,m,m,m,m),new C.aPK(o,a2),u))}if(J.c(a0.h(0,l),f))v.push(A.c8(D.ady,D.bX5,new C.aPL(o,a2),A.eZ(m,m,m,m,m,m,m,m,m,m,m,B.jg,m,m,m,m,m,m,m,m)))
if(J.c(a0.h(0,l),d)||J.c(a0.h(0,l),f)){u=A.cg(B.U,m,B.dC,m,m,m,m)
v.push(A.b6(A.o(J.c(a0.h(0,n),"order")?"Ready / delivered":"Done",m,m,m,m,m,m,m,m),new C.aPM(o,a2),u))}if((J.c(a0.h(0,l),d)||J.c(a0.h(0,l),f))&&$.mf.n(0,a0.h(0,"place_id")))v.push(A.c8(H.G2,D.bS4,new C.aPN(o,a2),A.eZ(m,m,m,m,m,m,m,m,m,m,m,B.jg,m,m,m,m,m,m,m,m)))
if(w!=null)v.push(A.c8(F.fA,B.dU,new C.aPO(w),A.eZ(m,m,m,m,m,m,m,m,m,m,m,B.d1,m,m,m,m,m,m,m,m)))
x.push(A.bV(B.ac,v,B.ag,8,8))
return A.aY(new A.I(B.ay,A.S(x,B.a9,B.r,B.t,0,B.x),m),m,m,B.b0,m)},
uR(d,e){return this.atC(d,e)},
atC(d,e){var x=0,w=A.n(y.v),v,u=this,t,s,r
var $async$uR=A.j(function(f,g){if(f===1)return A.k(g,w)
for(;;)switch(x){case 0:s={}
r=new A.al(B.aa,$.a5())
s.a=null
t=e==="working"
x=3
return A.d(A.c9(null,null,!0,null,new C.aPF(s,t,r),d,null,!0,!0,y.e),$async$uR)
case 3:if(g!==!0||d.e==null){x=1
break}if(t&&s.a==null&&!J.c(u.c.h(0,"kind"),"order")){A.bu(d,"Choose how long it will take",!0)
x=1
break}x=4
return A.d(A.ae(d,new C.aPG(s,u,e,r),"Guest told"),$async$uR)
case 4:if(g)u.d.$0()
case 1:return A.l(v,w)}})
return A.m($async$uR,w)}}
var z=a.updateTypes(["y?(u<f,@>)"])
C.aPI.prototype={
$1(d){return!B.p.n(d," \xd7 ")&&!B.p.bC(d,"Total N$")},
$S:18}
C.aPJ.prototype={
$0(){var x=0,w=A.n(y.v),v,u=2,t=[],s=this,r,q,p,o,n,m
var $async$$0=A.j(function(d,e){if(d===1){t.push(e)
x=u}for(;;)switch(x){case 0:u=4
p=s.a.c.h(0,"photo_path")
o=$.N().b
o===$&&A.a()
o=o.ay
o===$&&A.a()
x=7
return A.d(o.be("request-photos").qu(p,3600),$async$$0)
case 7:r=e
p=s.b
if(p.e==null){x=1
break}A.c9(null,null,!0,null,new C.aPH(r),p,null,!0,!0,y.b)
u=2
x=6
break
case 4:u=3
m=t.pop()
q=A.ai(m)
p=s.b
if(p.e!=null)A.bu(p,A.fF(q),!0)
x=6
break
case 3:x=2
break
case 6:case 1:return A.l(v,w)
case 2:return A.k(t.at(-1),w)}})
return A.m($async$$0,w)},
$S:1}
C.aPH.prototype={
$1(d){var x=null
return A.uC(x,x,A.a4G(A.z3(this.a,x,x,B.eE,x,!1,x,x,x)),x,x,x,x,B.i0,x,x,x)},
$S:124}
C.aPK.prototype={
$0(){return this.a.uR(this.b,"working")},
$S:0}
C.aPL.prototype={
$0(){return this.a.uR(this.b,"working")},
$S:0}
C.aPM.prototype={
$0(){return this.a.uR(this.b,"done")},
$S:0}
C.aPN.prototype={
$0(){var x=0,w=A.n(y.v),v,u=this,t,s,r
var $async$$0=A.j(function(d,e){if(d===1)return A.k(e,w)
for(;;)switch(x){case 0:x=3
return A.d(A.oB("team.1",""),$async$$0)
case 3:t=u.b
if(t.e==null){x=1
break}A.ks("team.1")
s=u.a
r=s.c
x=4
return A.d(G.K2(t,r.h(0,"place_id"),r),$async$$0)
case 4:if(e)s.d.$0()
case 1:return A.l(v,w)}})
return A.m($async$$0,w)},
$S:1}
C.aPO.prototype={
$0(){return A.e6(A.cv("tel:"+this.a,0,null),B.bY)},
$S:0}
C.aPF.prototype={
$1(d){return new A.dz(new C.aPE(this.a,this.b,this.c),null)},
$S:12}
C.aPE.prototype={
$2(d,e){var x,w,v,u,t=null,s=this.b,r=A.o(s?"How long will it take?":"Mark as done",t,t,t,t,t,t,t,t),q=y.u,p=A.b([],q)
if(s){x=A.b([],q)
for(w=this.a,v=0;v<7;++v){u=D.b8d[v]
x.push(A.d6(t,A.o(u===1440?"Tomorrow":A.bIY(u),t,t,t,t,t,t,t,t),t,new C.aPB(w,e,u),w.a===u,t,t))}B.h.I(p,A.b([D.c02,B.S,A.bV(B.ac,x,B.ag,6,6),B.ai],q))}p.push(A.at(t,B.O,!1,t,!0,B.C,t,A.av(),this.c,t,t,t,t,t,2,A.aw(t,t,t,t,t,t,t,t,!0,t,t,t,t,t,t,t,t,t,t,t,t,t,t,t,t,t,t,t,t,t,t,s?'Message to the guest (optional), e.g. "The plumber is coming"':"Message to the guest (optional)",t,t,t,t,t,t,t,t,t,!0,!0,!1,t,t,t,t,t,t,t,t,t,t,t,t,t,t),B.B,!0,t,!0,t,!1,t,B.Q,t,t,t,t,t,t,500,t,3,t,t,!1,"\u2022",t,t,t,t,t,!1,t,t,!1,t,!0,t,B.M,t,t,t,t,t,t,t,t,t,t,t,t,!0,B.J,t,B.R,t,t,t,t))
p=A.dM(A.S(p,B.Y,B.r,B.a4,0,B.x),t,B.B,t,t,t,B.N)
return A.cr(A.b([A.b5(B.b_,t,t,new C.aPC(d),t,t),A.b6(B.fL,new C.aPD(d),A.cg(t,t,B.d1,t,t,t,t))],q),t,p,t,r)},
$S:35}
C.aPB.prototype={
$1(d){return this.b.$1(new C.aPA(this.a,this.c))},
$S:4}
C.aPA.prototype={
$0(){return this.a.a=this.b},
$S:0}
C.aPC.prototype={
$0(){A.K(this.a,!1).U(!1)
return null},
$S:0}
C.aPD.prototype={
$0(){A.K(this.a,!1).U(!0)
return null},
$S:0}
C.aPG.prototype={
$0(){var x=this,w=x.b.c.h(0,"id"),v=B.p.ap(x.d.a.a),u=x.a.a,t=$.N().b
t===$&&A.a()
return t.a1("update_guest_request",A.J(["p_request",w,"p_status",x.c,"p_reply",v,"p_minutes",u],y.w,y.b),y.v)},
$S:1};(function installTearOffs(){var x=a._static_1
x(C,"cnh","c1t",0)})();(function inheritance(){var x=a.inherit,w=a.inheritMany
x(C.AA,A.a3)
w(A.h4,[C.aPI,C.aPH,C.aPF,C.aPB])
w(A.j6,[C.aPJ,C.aPK,C.aPL,C.aPM,C.aPN,C.aPO,C.aPA,C.aPC,C.aPD,C.aPG])
x(C.aPE,A.k0)})()
A.kq(b.typeUniverse,JSON.parse('{"AA":{"a3":[],"i":[]}}'))
var y={x:A.a9("F<f>"),u:A.a9("F<i>"),i:A.a9("B<@>"),B:A.a9("u<@,@>"),w:A.a9("f"),e:A.a9("M"),b:A.a9("@"),v:A.a9("~")};(function constants(){var x=a.makeConstList
D.bYO=new A.p("Total",B.a2,null,null,null,null)
D.aaS=new A.cP(1,B.aV,D.bYO,null)
D.ady=new A.a8(B.pd,18,null,null,null)
D.afT=new A.a8(E.Fi,null,null,null,null)
D.b8d=x([10,15,30,60,120,240,1440],A.a9("F<y>"))
D.bPx=new A.L(120,44)
D.bRw=new A.p("See photo",null,null,null,null,null)
D.bS4=new A.p("Give to employee",null,null,null,null,null)
D.bVU=new A.p("LATE: the guest is waiting. Fix it or give a new time.",B.dj,null,null,null,null)
D.bWw=new A.p("Not answered for more than 15 minutes.",B.dj,null,null,null,null)
D.bX5=new A.p("New time",null,null,null,null,null)
D.c02=new A.p("The guest sees this time.",B.a8,null,null,null,null)
D.c2z=new A.H(!0,B.U,null,null,null,null,16,B.ao,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)})()};
(a=>{a["AEzkdzIr8AK902bzNO/V4BW3H4k="]=a.current})($__dart_deferred_initializers__);
((a,b)=>{a[b]=a[b]||{}})(self,"$__dart_deferred_initializers__")
$__dart_deferred_initializers__.current=function(a,b,c,$){var J,A,B,E,F,G,H,C={
bWv(d){return d.h(0,"done_at")==null?null:B.m.aN(A.cx(d.h(0,"done_at")).d5(A.cx(d.h(0,"created_at"))).a,6e7)},
Ab:function Ab(d,e,f){this.c=d
this.d=e
this.a=f},
aNW:function aNW(){},
aNX:function aNX(d,e){this.a=d
this.b=e},
aNV:function aNV(d){this.a=d},
aNY:function aNY(d,e){this.a=d
this.b=e},
aNZ:function aNZ(d,e){this.a=d
this.b=e},
aO_:function aO_(d,e){this.a=d
this.b=e},
aO0:function aO0(d,e){this.a=d
this.b=e},
aO1:function aO1(d){this.a=d},
aNT:function aNT(d,e,f){this.a=d
this.b=e
this.c=f},
aNS:function aNS(d,e,f){this.a=d
this.b=e
this.c=f},
aNP:function aNP(d,e,f){this.a=d
this.b=e
this.c=f},
aNO:function aNO(d,e){this.a=d
this.b=e},
aNQ:function aNQ(d){this.a=d},
aNR:function aNR(d){this.a=d},
aNU:function aNU(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g}},D
J=c[1]
A=c[0]
B=c[2]
E=c[32]
F=c[33]
G=c[17]
H=c[51]
C=a.updateHolder(c[15],C)
D=c[54]
C.Ab.prototype={
t(a2){var x,w,v,u,t,s,r,q,p,o=this,n="kind",m=null,l="status",k="created_at",j="items",i="line_nad",h="total_nad",g="started_at",f="working",e="handled_name",d="open",a0=o.c,a1=B.Rf.h(0,a0.h(0,n))
if(a1==null)a1=B.yA
x=a0.h(0,"bookings")
if(x==null){x=y.b
x=A.D(x,x)}y.B.a(x)
w=A.bO(x.h(0,"guest_phone"))
v=A.i_(a1.c,A.bE(a1.b,B.J,m,18),16)
u=x.h(0,"rooms")
u=u==null?m:J.r(u,"name")
t=y.u
u=A.ax(A.b([v,B.bD,A.b1(A.n(a1.a+" \xb7 "+A.e(u==null?"":u),m,m,m,m,B.ee,m,m,m),1),A.bX3(a0.h(0,l))],t),B.B,B.q,B.w,0,m)
x=x.h(0,"guest_name")
x=A.b([u,B.aP,A.n(A.e(x==null?"":x)+" \xb7 "+A.cw(a0.h(0,k)),m,m,m,m,B.aH,m,m,m),B.aP],t)
v=y.i
if(v.b(a0.h(0,j))&&J.il(v.a(a0.h(0,j)))){u=A.b([],t)
for(v=J.bh(v.a(a0.h(0,j)));v.p();){s=v.gH()
r=J.aK(s)
q=A.n(A.e(r.h(s,"qty"))+" \xd7 "+A.e(r.h(s,"name")),m,m,m,m,B.YF,m,m,m)
if(r.h(s,i)==null)r="price?"
else{r=r.h(s,i)
p=A.br("#,##0")
r="N$ "+p.a3(A.aD(r==null?0:r))}u.push(A.ax(A.b([new A.de(1,B.b8,q,m),A.n(r,m,m,m,m,B.mO,m,m,m)],t),B.B,B.q,B.w,0,m))}v=a0.h(0,"body")
v=B.k.gN(A.b(J.b7(v==null?"":v).split("\n"),y.x))
r=new A.ib(v,new C.aNW())
while(r.p())u.push(A.n(v.gH(),m,m,m,m,E.YB,m,m,m))
if(a0.h(0,h)!=null)u.push(A.ax(A.b([D.a9E,A.n(A.b9(a0.h(0,h)),m,m,m,m,D.bJv,m,m,m)],t),B.B,B.q,B.w,0,m))
B.k.J(x,u)}else{v=a0.h(0,"body")
x.push(A.n(v==null?"":v,m,m,m,m,B.mO,m,m,m))}if(a0.h(0,"photo_path")!=null)x.push(new A.cT(B.cr,m,m,A.dq(D.ae9,D.bF3,new C.aNX(o,a2),m),m))
if(a0.h(0,"reply")!=null)x.push(new A.J(B.eR,A.n("Reply: "+A.e(a0.h(0,"reply")),m,m,m,m,B.zK,m,m,m),m))
x.push(B.aP)
v=A.b(["Reported "+A.Jz(a0.h(0,k))],y.x)
if(a0.h(0,g)!=null)v.push("started "+A.Jz(a0.h(0,g)))
if(a0.h(0,"fix_by")!=null&&J.c(a0.h(0,l),f))v.push("promised by "+A.Jz(a0.h(0,"fix_by")))
if(a0.h(0,"done_at")!=null){u=A.Jz(a0.h(0,"done_at"))
r=C.bWv(a0)
v.push("done "+u+" ("+A.bDN(r==null?0:r)+")")}if(a0.h(0,e)!=null)v.push("by "+A.e(a0.h(0,e)))
v=B.k.aS(v," \xb7 ")
u=A.x9(a0)?B.a5:B.aV
x.push(A.n(v,m,m,m,m,A.da(m,m,u,m,m,m,m,m,m,m,m,12,m,m,A.x9(a0)?B.au:m,m,m,!0,m,m,m,m,m,m,m,m),m,m,m))
if(A.x9(a0))x.push(D.bSL)
if(J.c(a0.h(0,l),d)&&B.m.aN(new A.aP(Date.now(),0,!1).d5(A.cx(a0.h(0,k))).a,6e7)>=15)x.push(D.bNz)
x.push(B.T)
v=A.b([],t)
if(J.c(a0.h(0,l),d)){u=A.cD(m,m,D.bDD,m,m,m,m)
v.push(A.b0(A.n(J.c(a0.h(0,n),"order")?"Preparing":"Working on it",m,m,m,m,m,m,m,m),new C.aNY(o,a2),u))}if(J.c(a0.h(0,l),f))v.push(A.cj(D.ac1,D.bQW,new C.aNZ(o,a2),A.fC(m,m,m,m,m,m,m,m,m,m,m,B.iU,m,m,m,m,m,m,m,m)))
if(J.c(a0.h(0,l),d)||J.c(a0.h(0,l),f)){u=A.cD(B.Z,m,B.dw,m,m,m,m)
v.push(A.b0(A.n(J.c(a0.h(0,n),"order")?"Ready / delivered":"Done",m,m,m,m,m,m,m,m),new C.aO_(o,a2),u))}if((J.c(a0.h(0,l),d)||J.c(a0.h(0,l),f))&&$.m4.n(0,a0.h(0,"place_id")))v.push(A.cj(H.F9,D.bSa,new C.aO0(o,a2),A.fC(m,m,m,m,m,m,m,m,m,m,m,B.iU,m,m,m,m,m,m,m,m)))
if(w!=null)v.push(A.cj(F.fn,B.zq,new C.aO1(w),A.fC(m,m,m,m,m,m,m,m,m,m,m,B.cZ,m,m,m,m,m,m,m,m)))
x.push(A.ce(B.ag,v,B.ai,8,8))
return A.aZ(new A.J(B.aG,A.X(x,B.a8,B.q,B.w,0,B.x),m),m,m,B.b1,m)},
uI(d,e){return this.at3(d,e)},
at3(d,e){var x=0,w=A.m(y.v),v,u=this,t,s,r
var $async$uI=A.i(function(f,g){if(f===1)return A.j(g,w)
for(;;)switch(x){case 0:s={}
r=new A.ak(B.a9,$.a2())
s.a=null
t=e==="working"
x=3
return A.d(A.cb(null,null,!0,null,new C.aNT(s,t,r),d,null,!0,!0,y.e),$async$uI)
case 3:if(g!==!0||d.e==null){x=1
break}if(t&&s.a==null&&!J.c(u.c.h(0,"kind"),"order")){A.bL(d,"Choose how long it will take",!0)
x=1
break}x=4
return A.d(A.ag(d,new C.aNU(s,u,e,r),"Guest told"),$async$uI)
case 4:if(g)u.d.$0()
case 1:return A.k(v,w)}})
return A.l($async$uI,w)}}
var z=a.updateTypes(["w?(t<f,@>)"])
C.aNW.prototype={
$1(d){return!B.o.n(d," \xd7 ")&&!B.o.bJ(d,"Total N$")},
$S:21}
C.aNX.prototype={
$0(){var x=0,w=A.m(y.v),v,u=2,t=[],s=this,r,q,p,o,n,m
var $async$$0=A.i(function(d,e){if(d===1){t.push(e)
x=u}for(;;)switch(x){case 0:u=4
p=s.a.c.h(0,"photo_path")
o=$.M().b
o===$&&A.a()
o=o.ay
o===$&&A.a()
x=7
return A.d(o.bh("request-photos").vB(p,3600),$async$$0)
case 7:r=e
p=s.b
if(p.e==null){x=1
break}A.cb(null,null,!0,null,new C.aNV(r),p,null,!0,!0,y.b)
u=2
x=6
break
case 4:u=3
m=t.pop()
q=A.ah(m)
p=s.b
if(p.e!=null)A.bL(p,A.hz(q),!0)
x=6
break
case 3:x=2
break
case 6:case 1:return A.k(v,w)
case 2:return A.j(t.at(-1),w)}})
return A.l($async$$0,w)},
$S:1}
C.aNV.prototype={
$1(d){var x=null
return A.ui(x,x,A.a3U(A.En(this.a,x,x,B.eS,x,!1,x,x,x)),x,x,x,x,B.hI,x,x,x)},
$S:120}
C.aNY.prototype={
$0(){return this.a.uI(this.b,"working")},
$S:0}
C.aNZ.prototype={
$0(){return this.a.uI(this.b,"working")},
$S:0}
C.aO_.prototype={
$0(){return this.a.uI(this.b,"done")},
$S:0}
C.aO0.prototype={
$0(){var x=0,w=A.m(y.v),v,u=this,t,s,r
var $async$$0=A.i(function(d,e){if(d===1)return A.j(e,w)
for(;;)switch(x){case 0:x=3
return A.d(A.qf("team.1",""),$async$$0)
case 3:t=u.b
if(t.e==null){x=1
break}A.m1("team.1")
s=u.a
r=s.c
x=4
return A.d(G.Jv(t,r.h(0,"place_id"),r),$async$$0)
case 4:if(e)s.d.$0()
case 1:return A.k(v,w)}})
return A.l($async$$0,w)},
$S:1}
C.aO1.prototype={
$0(){return A.e7(A.cr("tel:"+this.a,0,null),B.bS)},
$S:0}
C.aNT.prototype={
$1(d){return new A.dG(new C.aNS(this.a,this.b,this.c),null)},
$S:11}
C.aNS.prototype={
$2(d,e){var x,w,v,u,t=null,s=this.b,r=A.n(s?"How long will it take?":"Mark as done",t,t,t,t,t,t,t,t),q=y.u,p=A.b([],q)
if(s){x=A.b([],q)
for(w=this.a,v=0;v<7;++v){u=D.b83[v]
x.push(A.dx(t,A.n(u===1440?"Tomorrow":A.bDN(u),t,t,t,t,t,t,t,t),t,new C.aNP(w,e,u),w.a===u,t,t))}B.k.J(p,A.b([D.bU_,B.T,A.ce(B.ag,x,B.ai,6,6),B.ao],q))}p.push(A.at(t,B.Q,!1,t,!0,B.G,t,A.au(),this.c,t,t,t,t,t,2,A.fQ(t,t,t,t,t,t,t,t,!0,t,t,t,t,t,t,t,t,t,t,t,t,t,t,t,t,t,t,t,t,t,t,s?'Message to the guest (optional), e.g. "The plumber is coming"':"Message to the guest (optional)",t,t,t,t,t,t,t,t,t,!0,!0,!1,t,t,t,t,t,t,t,t,t,t,t,t,t,t),B.A,!0,t,!0,t,!1,t,B.R,t,t,t,t,t,t,500,t,3,t,t,!1,"\u2022",t,t,t,t,t,!1,t,t,!1,t,!0,t,B.N,t,t,t,t,t,t,t,t,t,t,t,t,!0,B.L,t,B.S,t,t,t,t))
p=A.dQ(A.X(p,B.a_,B.q,B.a4,0,B.x),t,B.A,t,t,t,B.O)
return A.cA(A.b([A.b3(B.kF,t,t,new C.aNQ(d),t,t),A.b0(B.zs,new C.aNR(d),A.cD(t,t,B.cZ,t,t,t,t))],q),t,p,t,r)},
$S:37}
C.aNP.prototype={
$1(d){return this.b.$1(new C.aNO(this.a,this.c))},
$S:4}
C.aNO.prototype={
$0(){return this.a.a=this.b},
$S:0}
C.aNQ.prototype={
$0(){A.I(this.a,!1).V(!1)
return null},
$S:0}
C.aNR.prototype={
$0(){A.I(this.a,!1).V(!0)
return null},
$S:0}
C.aNU.prototype={
$0(){var x=this,w=x.b.c.h(0,"id"),v=B.o.aC(x.d.a.a),u=x.a.a,t=$.M().b
t===$&&A.a()
return t.a7("update_guest_request",A.H(["p_request",w,"p_status",x.c,"p_reply",v,"p_minutes",u],y.w,y.b),y.v)},
$S:1};(function installTearOffs(){var x=a._static_1
x(C,"ch7","bWv",0)})();(function inheritance(){var x=a.inherit,w=a.inheritMany
x(C.Ab,A.a3)
w(A.hm,[C.aNW,C.aNV,C.aNT,C.aNP])
w(A.j2,[C.aNX,C.aNY,C.aNZ,C.aO_,C.aO0,C.aO1,C.aNO,C.aNQ,C.aNR,C.aNU])
x(C.aNS,A.jX)})()
A.l3(b.typeUniverse,JSON.parse('{"Ab":{"a3":[],"h":[]}}'))
var y={x:A.ab("E<f>"),u:A.ab("E<h>"),i:A.ab("y<@>"),B:A.ab("t<@,@>"),w:A.ab("f"),e:A.ab("L"),b:A.ab("@"),v:A.ab("~")};(function constants(){var x=a.makeConstList
D.bPe=new A.x("Total",null,B.a7,null,null,null,null,null,null,null,null)
D.a9E=new A.de(1,B.b8,D.bPe,null)
D.ac1=new A.aa(B.oC,18,null,null,null)
D.ae9=new A.aa(E.Ew,null,null,null,null)
D.b83=x([10,15,30,60,120,240,1440],A.ab("E<w>"))
D.bDD=new A.K(120,44)
D.bF3=new A.a6("See photo",null,null,null,null,null)
D.bJv=new A.G(!0,B.Z,null,null,null,null,16,B.au,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.bNz=new A.x("Not answered for more than 15 minutes.",null,B.dy,null,null,null,null,null,null,null,null)
D.bQW=new A.x("New time",null,null,null,null,null,null,null,null,null,null)
D.bSa=new A.x("Give to employee",null,null,null,null,null,null,null,null,null,null)
D.bSL=new A.x("LATE: the guest is waiting. Fix it or give a new time.",null,B.dy,null,null,null,null,null,null,null,null)
D.bU_=new A.x("The guest sees this time.",null,B.ac,null,null,null,null,null,null,null,null)})()};
(a=>{a["OB+GQGX/5tiMt4O7ZGr4ZPyPtIU="]=a.current})($__dart_deferred_initializers__);
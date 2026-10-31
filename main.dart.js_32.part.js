((a,b)=>{a[b]=a[b]||{}})(self,"$__dart_deferred_initializers__")
$__dart_deferred_initializers__.current=function(a,b,c,$){var J,A,C,F,B={
K2(d,e,f){return B.ckA(d,e,f)},
ckA(d,e,f){var x=0,w=A.n(y.e),v,u=2,t=[],s,r,q,p,o,n,m,l,k,j
var $async$K2=A.j(function(g,h){if(g===1){t.push(h)
x=u}for(;;)switch(x){case 0:l={}
k=null
u=4
x=7
return A.d(E.KV(e),$async$K2)
case 7:k=h
u=2
x=6
break
case 4:u=3
j=t.pop()
s=A.ai(j)
if(d.e!=null)A.bu(d,A.fF(s),!0)
v=!1
x=1
break
x=6
break
case 3:x=2
break
case 6:if(d.e==null||k==null){v=!1
x=1
break}q=k.h(0,"team")
if(q==null)q=C.aH
q=A.aD(q,!0,y.y)
p=A.ad(q).i("aj<1>")
o=A.O(new A.aj(q,new B.bGS(),p),p.i("A.E"))
if(o.length===0){A.bu(d,"Add your team first (More \u2192 Managers & receptionists).",!0)
v=!1
x=1
break}C.h.e3(o,new B.bGT())
l.a=C.h.gX(o).h(0,"id")
q=f==null
l.b=q?null:30
p=$.a5()
n=new A.al(C.aa,p)
m=new A.al(C.aa,p)
x=8
return A.d(A.dQ(new B.bGU(l,f,o,n,m),d,!0,null,y.e),$async$K2)
case 8:if(h!==!0||d.e==null||l.a==null){v=!1
x=1
break}if(q&&C.p.ap(n.a.a).length<2){A.bu(d,"Write what needs to be done.",!0)
v=!1
x=1
break}v=A.ae(d,new B.bGV(l,f,n,m),'Task given. The employee sees it under "My work".')
x=1
break
case 1:return A.l(v,w)
case 2:return A.k(t.at(-1),w)}})
return A.m($async$K2,w)},
bGS:function bGS(){},
bGT:function bGT(){},
bGU:function bGU(d,e,f,g,h){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h},
bGR:function bGR(d,e,f,g,h){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h},
bGO:function bGO(d,e,f){this.a=d
this.b=e
this.c=f},
bGN:function bGN(d,e){this.a=d
this.b=e},
bGP:function bGP(d,e,f){this.a=d
this.b=e
this.c=f},
bGM:function bGM(d,e){this.a=d
this.b=e},
bGQ:function bGQ(d){this.a=d},
bGV:function bGV(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g}},D,E
J=c[1]
A=c[0]
C=c[2]
F=c[53]
B=a.updateHolder(c[17],B)
D=c[50]
E=c[19]
var z=a.updateTypes([])
B.bGS.prototype={
$1(d){return!J.c(d.h(0,"status"),"removed")},
$S:3}
B.bGT.prototype={
$2(d,e){var x="on_shift",w=J.c(e.h(0,x),!0)?1:0
return w-(J.c(d.h(0,x),!0)?1:0)},
$S:49}
B.bGU.prototype={
$1(d){var x=this
return new A.dz(new B.bGR(x.a,x.b,x.c,x.d,x.e),null)},
$S:12}
B.bGR.prototype={
$2(d,e){var x,w,v,u,t,s,r,q,p,o,n=this,m=null,l="on_leave",k=A.az(d,m,y.x).w,j=n.b,i=j==null,h=y.u,g=A.b([A.o(i?"Give a task":"Give this guest request to an employee",m,m,m,m,C.dl,m,m,m)],h)
if(!i)g.push(new A.I(C.f3,A.o('"'+A.e(j.h(0,"body"))+'"',m,m,m,m,D.c4X,m,m,m),m))
g.push(C.ai)
g.push(D.bWU)
j=A.b([],h)
for(x=n.c,w=x.length,v=n.a,u=0;u<x.length;x.length===w||(0,A.G)(x),++u){t=x[u]
s=A.e(t.h(0,"name"))
r=J.c(t.h(0,"on_shift"),!0)?" \xb7 on shift":""
q=J.c(t.h(0,l),!0)?" \xb7 on leave":""
q=A.o(s+r+q,m,m,m,m,m,m,m,m)
r=v.a
s=t.h(0,"id")
p=J.c(t.h(0,l),!0)?m:new B.bGO(v,e,t)
j.push(A.d6(m,q,m,p,r==null?s==null:r===s,m,m))}g.push(A.bV(C.ac,j,C.ag,6,6))
if(i)C.h.I(g,A.b([C.S,A.at(m,C.O,!1,m,!0,C.C,m,A.av(),n.d,m,m,m,m,m,2,A.aw(m,m,m,m,m,m,m,m,!0,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,A.C("What needs to be done?"),!0,!0,!1,m,m,m,m,m,m,m,m,m,m,m,m,m,m),C.B,!0,m,!0,m,!1,m,C.Q,m,m,m,m,m,m,120,m,1,m,m,!1,"\u2022",m,m,m,m,m,!1,m,m,!1,m,!0,m,C.M,m,m,m,m,m,m,m,m,m,m,m,m,!0,C.J,m,C.R,m,m,m,m)],h))
g.push(A.at(m,C.O,!1,m,!0,C.C,m,A.av(),n.e,m,m,m,m,m,2,A.aw(m,m,m,m,m,m,m,m,!0,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,A.C("Details (optional)"),!0,!0,!1,m,m,m,m,m,m,m,m,m,m,m,m,m,m),C.B,!0,m,!0,m,!1,m,C.Q,m,m,m,m,m,m,1000,m,3,m,m,!1,"\u2022",m,m,m,m,m,!1,m,m,!1,m,!0,m,C.M,m,m,m,m,m,m,m,m,m,m,m,m,!0,C.J,m,C.R,m,m,m,m))
g.push(D.bZC)
j=A.b([],h)
for(u=0;u<5;++u){o=D.b1M[u]
j.push(A.d6(m,A.o(E.a_a(o),m,m,m,m,m,m,m,m),m,new B.bGP(v,e,o),v.b===o,m,m))}g.push(A.bV(C.ac,j,C.ag,0,6))
g.push(C.ai)
g.push(A.b6(D.Zu,new B.bGQ(d),m))
return new A.I(new A.aa(20,20,20,k.f.d+20),A.dM(A.S(g,C.a9,C.r,C.a4,0,C.x),m,C.B,m,m,m,C.N),m)},
$S:24}
B.bGO.prototype={
$1(d){return this.b.$1(new B.bGN(this.a,this.c))},
$S:4}
B.bGN.prototype={
$0(){return this.a.a=this.b.h(0,"id")},
$S:0}
B.bGP.prototype={
$1(d){return this.b.$1(new B.bGM(this.a,this.c))},
$S:4}
B.bGM.prototype={
$0(){var x=this.a,w=this.b
return x.b=x.b===w?null:w},
$S:0}
B.bGQ.prototype={
$0(){A.K(this.a,!1).U(!0)
return null},
$S:0}
B.bGV.prototype={
$0(){var x,w,v,u,t=this,s=t.a,r=s.a
r.toString
x=t.b
w=x==null
v=w?C.p.ap(t.c.a.a):null
u=C.p.ap(t.d.a.a)
x=w?null:x.h(0,"id")
s=s.b
w=$.N().b
w===$&&A.a()
return w.a1("assign_task",A.J(["p_staff",r,"p_title",v,"p_details",u,"p_request",x,"p_minutes",s],y.w,y.b),y.v)},
$S:1};(function inheritance(){var x=a.inheritMany
x(A.h4,[B.bGS,B.bGU,B.bGO,B.bGP])
x(A.k0,[B.bGT,B.bGR])
x(A.j6,[B.bGN,B.bGM,B.bGQ,B.bGV])})()
var y={u:A.a9("F<i>"),y:A.a9("u<f,@>"),x:A.a9("iv"),w:A.a9("f"),e:A.a9("M"),b:A.a9("@"),v:A.a9("~")};(function constants(){var x=a.makeConstList
D.b1M=x([15,30,60,120,240],A.a9("F<y>"))
D.bWU=new A.p("Who?",C.a2,null,null,null,null)
D.bZC=new A.p("Finish within",C.a2,null,null,null,null)
D.Zu=new A.p("Give task",null,null,null,null,null)
D.c4X=new A.H(!0,C.aR,null,null,null,null,null,null,F.EF,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)})()};
(a=>{a["3SjRwR5CSA6jQ5uAVs8XqZoUjI0="]=a.current})($__dart_deferred_initializers__);
((a,b)=>{a[b]=a[b]||{}})(self,"$__dart_deferred_initializers__")
$__dart_deferred_initializers__.current=function(a,b,c,$){var J,A,C,F,B={
Jw(d,e,f){return B.cev(d,e,f)},
cev(d,e,f){var x=0,w=A.m(y.e),v,u=2,t=[],s,r,q,p,o,n,m,l,k,j
var $async$Jw=A.i(function(g,h){if(g===1){t.push(h)
x=u}for(;;)switch(x){case 0:l={}
k=null
u=4
x=7
return A.d(E.Kk(e),$async$Jw)
case 7:k=h
u=2
x=6
break
case 4:u=3
j=t.pop()
s=A.ah(j)
if(d.e!=null)A.bL(d,A.hz(s),!0)
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
if(q==null)q=C.b9
q=A.aM(q,!0,y.y)
p=A.aj(q).i("as<1>")
o=A.P(new A.as(q,new B.bBL(),p),p.i("z.E"))
if(o.length===0){A.bL(d,"Add your team first (More \u2192 Managers & receptionists).",!0)
v=!1
x=1
break}C.k.e0(o,new B.bBM())
l.a=C.k.ga4(o).h(0,"id")
q=f==null
l.b=q?null:30
p=$.a2()
n=new A.ak(C.a9,p)
m=new A.ak(C.a9,p)
x=8
return A.d(A.e_(new B.bBN(l,f,o,n,m),d,!0,null,y.e),$async$Jw)
case 8:if(h!==!0||d.e==null||l.a==null){v=!1
x=1
break}if(q&&C.o.aC(n.a.a).length<2){A.bL(d,"Write what needs to be done.",!0)
v=!1
x=1
break}v=A.ag(d,new B.bBO(l,f,n,m),'Task given. The employee sees it under "My work".')
x=1
break
case 1:return A.k(v,w)
case 2:return A.j(t.at(-1),w)}})
return A.l($async$Jw,w)},
bBL:function bBL(){},
bBM:function bBM(){},
bBN:function bBN(d,e,f,g,h){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h},
bBK:function bBK(d,e,f,g,h){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h},
bBH:function bBH(d,e,f){this.a=d
this.b=e
this.c=f},
bBG:function bBG(d,e){this.a=d
this.b=e},
bBI:function bBI(d,e,f){this.a=d
this.b=e
this.c=f},
bBF:function bBF(d,e){this.a=d
this.b=e},
bBJ:function bBJ(d){this.a=d},
bBO:function bBO(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g}},D,E,G
J=c[1]
A=c[0]
C=c[2]
F=c[55]
B=a.updateHolder(c[17],B)
D=c[52]
E=c[19]
G=c[43]
var z=a.updateTypes([])
B.bBL.prototype={
$1(d){return!J.c(d.h(0,"status"),"removed")},
$S:3}
B.bBM.prototype={
$2(d,e){var x="on_shift",w=J.c(e.h(0,x),!0)?1:0
return w-(J.c(d.h(0,x),!0)?1:0)},
$S:55}
B.bBN.prototype={
$1(d){var x=this
return new A.dG(new B.bBK(x.a,x.b,x.c,x.d,x.e),null)},
$S:11}
B.bBK.prototype={
$2(d,e){var x,w,v,u,t,s,r,q,p,o,n=this,m=null,l="on_leave",k=A.ap(d,m,y.x).w,j=n.b,i=j==null,h=y.u,g=A.b([A.n(i?"Give a task":"Give this guest request to an employee",m,m,m,m,C.dh,m,m,m)],h)
if(!i)g.push(new A.J(C.eR,A.n('"'+A.e(j.h(0,"body"))+'"',m,m,m,m,D.bLN,m,m,m),m))
g.push(C.ao)
g.push(D.bQM)
j=A.b([],h)
for(x=n.c,w=x.length,v=n.a,u=0;u<x.length;x.length===w||(0,A.F)(x),++u){t=x[u]
s=A.e(t.h(0,"name"))
r=J.c(t.h(0,"on_shift"),!0)?" \xb7 on shift":""
q=J.c(t.h(0,l),!0)?" \xb7 on leave":""
q=A.n(s+r+q,m,m,m,m,m,m,m,m)
r=v.a
s=t.h(0,"id")
p=J.c(t.h(0,l),!0)?m:new B.bBH(v,e,t)
j.push(A.dx(m,q,m,p,r==null?s==null:r===s,m,m))}g.push(A.ce(C.ag,j,C.ai,6,6))
if(i)C.k.J(g,A.b([C.T,A.at(m,C.Q,!1,m,!0,C.G,m,A.au(),n.d,m,m,m,m,m,2,D.agQ,C.A,!0,m,!0,m,!1,m,C.R,m,m,m,m,m,m,120,m,1,m,m,!1,"\u2022",m,m,m,m,m,!1,m,m,!1,m,!0,m,C.N,m,m,m,m,m,m,m,m,m,m,m,m,!0,C.L,m,C.S,m,m,m,m)],h))
g.push(A.at(m,C.Q,!1,m,!0,C.G,m,A.au(),n.e,m,m,m,m,m,2,G.wv,C.A,!0,m,!0,m,!1,m,C.R,m,m,m,m,m,m,1000,m,3,m,m,!1,"\u2022",m,m,m,m,m,!1,m,m,!1,m,!0,m,C.N,m,m,m,m,m,m,m,m,m,m,m,m,!0,C.L,m,C.S,m,m,m,m))
g.push(D.bNt)
j=A.b([],h)
for(u=0;u<5;++u){o=D.b1G[u]
j.push(A.dx(m,A.n(E.Zu(o),m,m,m,m,m,m,m,m),m,new B.bBI(v,e,o),v.b===o,m,m))}g.push(A.ce(C.ag,j,C.ai,0,6))
g.push(C.ao)
g.push(A.b0(D.YU,new B.bBJ(d),m))
return new A.J(new A.ad(20,20,20,k.f.d+20),A.dQ(A.X(g,C.a8,C.q,C.a4,0,C.x),m,C.A,m,m,m,C.O),m)},
$S:26}
B.bBH.prototype={
$1(d){return this.b.$1(new B.bBG(this.a,this.c))},
$S:4}
B.bBG.prototype={
$0(){return this.a.a=this.b.h(0,"id")},
$S:0}
B.bBI.prototype={
$1(d){return this.b.$1(new B.bBF(this.a,this.c))},
$S:4}
B.bBF.prototype={
$0(){var x=this.a,w=this.b
return x.b=x.b===w?null:w},
$S:0}
B.bBJ.prototype={
$0(){A.I(this.a,!1).V(!0)
return null},
$S:0}
B.bBO.prototype={
$0(){var x,w,v,u,t=this,s=t.a,r=s.a
r.toString
x=t.b
w=x==null
v=w?C.o.aC(t.c.a.a):null
u=C.o.aC(t.d.a.a)
x=w?null:x.h(0,"id")
s=s.b
w=$.M().b
w===$&&A.a()
return w.a7("assign_task",A.H(["p_staff",r,"p_title",v,"p_details",u,"p_request",x,"p_minutes",s],y.w,y.b),y.v)},
$S:1};(function inheritance(){var x=a.inheritMany
x(A.hm,[B.bBL,B.bBN,B.bBH,B.bBI])
x(A.jX,[B.bBM,B.bBK])
x(A.j2,[B.bBG,B.bBF,B.bBJ,B.bBO])})()
var y={u:A.ab("E<h>"),y:A.ab("t<f,@>"),x:A.ab("iu"),w:A.ab("f"),e:A.ab("L"),b:A.ab("@"),v:A.ab("~")};(function constants(){var x=a.makeConstList
D.agQ=new A.aQ(null,null,null,"What needs to be done?",null,null,null,null,null,null,null,null,null,null,null,null,!0,!0,!1,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,!0,null,null,null,null)
D.b1G=x([15,30,60,120,240],A.ab("E<w>"))
D.bLN=new A.G(!0,C.aV,null,null,null,null,null,null,F.DN,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.bNt=new A.x("Finish within",null,C.a7,null,null,null,null,null,null,null,null)
D.YU=new A.x("Give task",null,null,null,null,null,null,null,null,null,null)
D.bQM=new A.x("Who?",null,C.a7,null,null,null,null,null,null,null,null)})()};
(a=>{a["jRDHzFL7DN2jhYqq9ts+p3Vkgf4="]=a.current})($__dart_deferred_initializers__);
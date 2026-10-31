((a,b)=>{a[b]=a[b]||{}})(self,"$__dart_deferred_initializers__")
$__dart_deferred_initializers__.current=function(a,b,c,$){var J,A,B,E,H,I,K,L,M,N,C={
c3V(d,e){return new C.qU(d,e,null)},
c3i(d){return new C.up(d,null)},
qU:function qU(d,e,f){this.c=d
this.d=e
this.a=f},
aA3:function aA3(d){this.a=d},
aA7:function aA7(d){this.a=d},
aA8:function aA8(d){this.a=d},
aA6:function aA6(d){this.a=d},
aA4:function aA4(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
aA5:function aA5(d,e){this.a=d
this.b=e},
tp:function tp(d,e,f,g){var _=this
_.c=d
_.d=e
_.e=f
_.a=g},
up:function up(d,e){this.c=d
this.a=e},
axS:function axS(d){this.a=d},
axT:function axT(d){this.a=d},
cbL(){return A.qf("repairs","")},
ma:function ma(d,e,f){this.c=d
this.d=e
this.a=f},
atS:function atS(d){this.a=d},
atT:function atT(d){this.a=d},
atF:function atF(d){this.a=d},
atG:function atG(){},
atH:function atH(){},
atK:function atK(){},
atL:function atL(){},
atM:function atM(){},
atN:function atN(){},
atO:function atO(d){this.a=d},
atP:function atP(){},
atQ:function atQ(){},
atU:function atU(d){this.a=d},
atR:function atR(d){this.a=d},
atI:function atI(){},
atJ:function atJ(d,e){this.a=d
this.b=e},
atE:function atE(d){this.a=d},
aq7(d){var w=0,v=A.m(x.h),u,t,s,r
var $async$aq7=A.i(function(e,f){if(e===1)return A.j(f,v)
for(;;)switch(w){case 0:s=$.M().b
s===$&&A.a()
t=x.z
r=x.h
w=3
return A.d(s.a7("place_feedback",A.H(["p_place",d],x.N,t),t),$async$aq7)
case 3:u=r.a(f)
w=1
break
case 1:return A.k(u,v)}})
return A.l($async$aq7,v)},
a_J(d){var w=0,v=A.m(x.h),u,t,s,r
var $async$a_J=A.i(function(e,f){if(e===1)return A.j(f,v)
for(;;)switch(w){case 0:s=$.M().b
s===$&&A.a()
t=x.z
r=x.h
w=3
return A.d(s.a7("place_coach",A.H(["p_place",d],x.N,t),t),$async$a_J)
case 3:u=r.a(f)
w=1
break
case 1:return A.k(u,v)}})
return A.l($async$a_J,v)},
a_M(d,e){var w=0,v=A.m(x.D),u,t,s,r
var $async$a_M=A.i(function(f,g){if(f===1)return A.j(g,v)
for(;;)switch(w){case 0:s=$.M().b
s===$&&A.a()
t=s.bh("guest_requests").eY("*, bookings(guest_name, guest_phone, rooms(name))").bQ("place_id",d)
if(e)t=t.NJ("status",["open","working"])
r=A
w=3
return A.d((!e?A.i6(t.f1(t.f5("created_at","gte."+new A.aP(Date.now(),0,!1).de(-2592e9).ly().oe())),t.$ti.c):t).dI("created_at",!1).qF(300),$async$a_M)
case 3:u=r.aM(g,!0,x.P)
w=1
break
case 1:return A.k(u,v)}})
return A.l($async$a_M,v)}},D,G,F
J=c[1]
A=c[0]
B=c[2]
E=c[22]
H=c[20]
I=c[21]
K=c[28]
L=c[35]
M=c[13]
N=c[45]
C=a.updateHolder(c[6],C)
D=c[41]
G=c[50]
F=c[15]
C.qU.prototype={
asq(d,e){var w,v,u=this,t=null,s={},r=e.toLowerCase()
s.a=null
if(B.o.n(r,"not visible")||B.o.n(r,"approval"))s.a=new E.fT(u.c,5,t)
else if(B.o.n(r,"room(s) have no photo"))s.a=new E.fT(u.c,3,t)
else if(B.o.n(r,"photo"))s.a=new E.fT(u.c,4,t)
else if(B.o.n(r,"description"))s.a=new E.fT(u.c,1,t)
else if(B.o.n(r,"price")||B.o.n(r,"offers"))s.a=new E.fT(u.c,3,t)
else if(B.o.n(r,"share")||B.o.n(r,"few travellers")){A.bLU(d,u.d,y.b+u.c)
return}else{w=B.o.n(r,"request")||B.o.n(r,"problems took")
v=u.c
if(w)s.a=new C.ma(v,!1,t)
else s.a=new C.up(v,t)}s=A.aJ(new C.aA3(s),!1,t,x.z)
A.I(d,!1).ar(s)},
t(d){var w=null
return A.bK(A.bW(A.b([D.aeP],x.p),w,w,w,w,w,w,w,w,D.bNK,w,w),w,new A.bk(new C.aA7(this),new C.aA8(this),B.bN,w,x.W),w,w)}}
C.tp.prototype={
t(d){var w=null,v=A.b([I.Mr(A.n(this.c,w,w,w,w,D.bKF,w,w,w)),A.n(this.d,2,w,w,w,B.di,w,w,w)],x.p),u=this.e
if(u.length!==0)v.push(A.n(u,1,w,w,w,B.eB,w,w,w))
return A.aZ(new A.J(B.eo,A.X(v,B.a_,B.cy,B.w,0,B.x),w),w,w,w,w)}}
C.up.prototype={
DE(d,e){var w=null,v=A.cM(A.n(d,w,w,w,w,w,w,w,w),w,130),u=e==null,t=u?w:B.n.aB(A.aD(e))
return new A.J(K.o_,A.ax(A.b([v,new A.rV(t,18,w,w),B.bD,A.n(u?"-":A.e(e),w,w,w,w,B.a7,w,w,w)],x.p),B.B,B.q,B.w,0,w),w)},
t(d){var w=null
return A.bK(A.bW(A.b([D.aeL],x.p),w,w,w,w,w,w,w,w,D.bNc,w,w),w,new A.bk(new C.axS(this),new C.axT(this),A.b([new A.ca("notifications","user_id",A.eq())],x.k),w,x.W),w,w)}}
C.ma.prototype={
t(d){return new A.bk(new C.atS(this),new C.atT(this),A.b([new A.ca("guest_requests","place_id",this.c)],x.k),null,x.w)}}
var z=a.updateTypes(["kQ()","a9<@>()"])
C.aA3.prototype={
$1(d){var w=this.a.a
w.toString
return w},
$S:18}
C.aA7.prototype={
$0(){return C.a_J(this.a.c)},
$S:56}
C.aA8.prototype={
$3(a3,a4,a5){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e=null,d="recommended",a0=" in the last 7 days",a1="avg_price",a2="town_avg_price"
if(a4==null)return G.uZ
w=a4.h(0,"tips")
if(w==null)w=B.b9
v=A.aM(w,!0,x.N)
u=a4.h(0,"occupancy_30")
if(u==null)u=0
t=a4.h(0,"town_occupancy_30")
w=J.c(a4.h(0,d),!0)?B.C8:B.ar
s=J.c(a4.h(0,d),!0)?B.lD:D.aaG
s=A.bE(s,J.c(a4.h(0,d),!0)?B.Ci:B.W,e,32)
r=A.n(J.c(a4.h(0,d),!0)?"You are on the Recommended list":"Not on the Recommended list yet",e,e,e,e,B.a7,e,e,e)
w=A.aZ(A.aL(!1,e,e,e,!0,e,e,e,!0,e,s,e,e,e,e,e,!1,e,e,e,e,e,A.n(J.c(a4.h(0,d),!0)?"Keep rooms clean and answer guests fast to stay there.":"You need "+A.e(a4.h(0,"need_for_recommended"))+" more good rating(s) (4 or 5 stars).",e,e,e,e,e,e,e,e),e,r,e,e,e),e,w,e,e)
s=a4.h(0,"views_30")
s=A.e(s==null?0:s)
r=a4.h(0,"views_7")
r=A.e(r==null?0:r)
q=a4.h(0,"bookings_30")
q=A.e(q==null?0:q)
p=a4.h(0,"bookings_7")
p=A.e(p==null?0:p)
o=A.e(u)
n=t==null?"":"town average "+A.e(t)+"%"
m=a4.h(0,a1)==null?"-":A.b9(a4.h(0,a1))
l=a4.h(0,a2)==null?"":"town average "+A.b9(a4.h(0,a2))
k=a4.h(0,"overall")==null?"-":A.e(a4.h(0,"overall"))+"\u2605"
j=a4.h(0,"ratings")
j=A.e(j==null?0:j)
i=a4.h(0,"service")==null?"-":A.e(a4.h(0,"service"))+"\u2605"
h=x.p
h=A.b([w,D.bBw,H.yw(1.35,A.b([new C.tp(s,"travellers looked at your place",r+a0,e),new C.tp(q,"bookings",p+a0,e),new C.tp(o+"%","rooms full",n,e),new C.tp(m,"your average price",l,e),new C.tp(k,"private guest rating",j+" rating(s)",e),new C.tp(i,"service rate","only you see this",e)],h),8,8,170,B.dY,!0),D.bBc],h)
for(w=this.a,g=0;g<v.length;g=f){f=g+1
h.push(new A.ch(e,e,e,B.b1,A.aL(!1,e,e,e,!0,e,e,e,!0,e,A.i_(B.W,A.n(""+f,e,e,e,e,D.bKz,e,e,e),14),e,e,e,e,new C.aA4(w,a3,v,g),!1,e,e,e,e,e,e,e,A.n(v[g],e,e,e,e,e,e,e,e),e,B.bE,e),e))}h.push(B.T)
h.push(A.cj(B.wm,D.bPr,new C.aA5(w,a3),e))
h.push(B.T)
h.push(D.bNW)
return A.nS(A.bf(h,e,B.aN,e,B.O,!1),new C.aA6(a5))},
$S:118}
C.aA6.prototype={
$0(){var w=0,v=A.m(x.H),u,t=this
var $async$$0=A.i(function(d,e){if(d===1)return A.j(e,v)
for(;;)switch(w){case 0:u=t.a.$0()
w=1
break
case 1:return A.k(u,v)}})
return A.l($async$$0,v)},
$S:1}
C.aA4.prototype={
$0(){var w=this
return w.a.asq(w.b,w.c[w.d])},
$S:0}
C.aA5.prototype={
$0(){var w=this.a
return A.bLU(this.b,w.d,y.b+w.c)},
$S:0}
C.axS.prototype={
$0(){return C.aq7(this.a.c)},
$S:56}
C.axT.prototype={
$3(a0,a1,a2){var w,v,u,t,s,r,q,p,o,n,m,l,k=null,j="overall",i="clean",h="service",g="comfort",f="value",e="avg_fix_minutes",d="disliked"
if(a1==null)return G.uZ
w=a1.h(0,"items")
if(w==null)w=B.b9
v=A.aM(w,!0,x.P)
w=a1.h(0,"count")
w=A.e(w==null?0:w)
u=a1.h(0,"happy_pct")
w=A.n(w+" rating(s) \xb7 "+A.e(u==null?"-":u)+"% happy guests",k,k,k,k,B.c3,k,k,k)
u=this.a
t=u.DE("Overall",a1.h(0,j))
s=u.DE("Clean",a1.h(0,i))
r=u.DE("Service rate",a1.h(0,h))
q=u.DE("Comfort",a1.h(0,g))
u=u.DE("Value for money",a1.h(0,f))
p=a1.h(0,"complaints_90")
p=A.e(p==null?0:p)
o=a1.h(0,e)==null?"":" \xb7 fixed in "+A.e(a1.h(0,e))+" min on average"
n=x.p
o=A.aZ(new A.J(B.ci,A.X(A.b([w,B.T,t,s,r,q,u,B.jD,A.n("Complaints (last 90 days): "+p+o,k,k,k,k,k,k,k,k)],n),B.a_,B.q,B.w,0,B.x),k),k,k,k,k)
p=v.length
o=A.b([D.bAY,B.ao,o,new A.c2("What guests said ("+p+")",k,k)],n)
if(p===0)o.push(D.bN9)
for(w=x.s,m=0;m<p;++m){l=v[m]
u=l.h(0,j)
u=J.Co(u==null?5:u,2)?B.b5:k
t=A.hy(l.h(0,j))
s=l.h(0,"guest")
s=A.e(s==null?"Guest":s)
t=A.b([A.ax(A.b([new A.rV(t,18,k,k),B.bD,new A.de(1,B.b8,A.n(s+(l.h(0,"room")==null?"":" \xb7 "+A.e(l.h(0,"room"))),k,k,k,k,B.a7,k,k,k),k),A.n(A.ay(l.h(0,"at")),k,k,k,k,B.aH,k,k,k)],n),B.B,B.q,B.w,0,k)],n)
if(l.h(0,"liked")!=null)B.k.J(t,A.b([B.aP,A.ax(A.b([D.aec,B.dx,new A.de(1,B.b8,A.n(l.h(0,"liked"),k,k,k,k,k,k,k,k),k)],n),B.a_,B.q,B.w,0,k)],n))
if(l.h(0,d)!=null)B.k.J(t,A.b([B.aP,A.ax(A.b([D.adD,B.dx,new A.de(1,B.b8,A.n(l.h(0,d),k,k,k,k,L.Yv,k,k,k),k)],n),B.a_,B.q,B.w,0,k)],n))
if(l.h(0,i)!=null||l.h(0,h)!=null){s=A.b([],w)
if(l.h(0,i)!=null)s.push("clean "+A.e(l.h(0,i)))
if(l.h(0,h)!=null)s.push("service "+A.e(l.h(0,h)))
if(l.h(0,g)!=null)s.push("comfort "+A.e(l.h(0,g)))
if(l.h(0,f)!=null)s.push("value "+A.e(l.h(0,f)))
t.push(new A.J(B.en,A.n(B.k.aS(s," \xb7 "),k,k,k,k,B.aH,k,k,k),k))}o.push(new A.ch(u,k,k,B.b1,new A.J(B.aG,A.X(t,B.a_,B.q,B.w,0,B.x),k),k))}return A.bf(o,k,B.aN,k,B.O,!1)},
$S:104}
C.atS.prototype={
$0(){return C.a_M(this.a.c,!1)},
$S:13}
C.atT.prototype={
$3(a5,a6,a7){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f=null,e="Guest orders",d="Complaints & requests",a0="To attend",a1="Being fixed",a2=this.a,a3=J.dc(a6,new C.atF(a2)),a4=A.P(a3,a3.$ti.i("z.E"))
a3=A.aj(a4).i("as<1>")
w=a3.i("z.E")
v=A.P(new A.as(a4,new C.atG(),a3),w)
B.k.e0(v,new C.atH())
u=A.P(new A.as(a4,new C.atK(),a3),w)
B.k.e0(u,new C.atL())
t=A.P(new A.as(a4,new C.atM(),a3),w)
B.k.e0(t,new C.atN())
s=new A.as(u,A.ch8(),A.aj(u).i("as<1>")).gA(0)
w=Date.now()
r=A.bI("yyyy-MM-dd").a3(new A.aP(w,0,!1))
w=A.aj(t)
q=new A.as(t,new C.atO(r),w.i("as<1>")).gA(0)
p=x.t
o=p.i("as<z.E>")
n=A.P(new A.as(new A.dk(new A.aB(t,F.ch7(),w.i("aB<1,w?>")),p),new C.atP(),o),o.i("z.E"))
m=n.length===0?f:B.n.aB(B.k.iy(n,new C.atQ())/n.length)
l=new C.atU(a7)
w=a2.d
p=A.n(w?e:d,f,f,f,f,f,f,f,f)
o=w?e:d
k=B.xW.h(0,w?"orders":"requests")
k.toString
j=x.p
k=A.b([A.nv(o,k)],j)
o=w?"New":a0
i=v.length
h=w?"Being prepared":a1
h=A.b([new A.bA(o+" "+i,B.aF,B.aQ,f),new A.bA(h+" "+u.length,B.Z,B.ar,f)],j)
if(w)h.push(new A.bA("Today "+A.b9(new A.as(a4,new C.atR(r),a3).hf(0,0,new C.atI())),B.Z,B.ar,f))
if(s>0)h.push(new A.bA("Late "+s,B.a5,B.b5,f))
h.push(new A.bA("Done today "+q,B.Z,B.ar,f))
if(m!=null)h.push(new A.bA("Average fix "+A.bDN(m),B.aV,B.e6,f))
a3=A.ce(B.ag,h,B.ai,4,6)
o=w?"New":a0
o=A.lO(o+" ("+v.length+")")
i=w?"Preparing":a1
i=A.lO(i+" ("+u.length+")")
h=w?"Delivered":"Attended"
p=A.bW(k,f,f,new A.zZ(A.X(A.b([new A.J(B.ep,a3,f),A.GL(f,f,!1,f,f,f,f,A.b([o,i,A.lO(h+" ("+t.length+")")],j))],j),B.B,B.q,B.w,0,B.x),D.bE9,f),f,f,f,f,f,p,f,f)
h=A.b([],j)
if(!w)h.push(A.aZ(new A.J(B.aG,A.X(A.b([D.bSB,A.dq(D.lG,D.bQs,new C.atJ(a2,a5),f)],j),B.a_,B.q,B.w,0,B.x),f),f,B.ar,D.a80,f))
if(v.length===0)h.push(new A.cC(B.lC,w?"No new orders.":"Nothing to attend. Well done!",f,f))
for(a2=v.length,g=0;g<v.length;v.length===a2||(0,A.F)(v),++g)h.push(new A.J(B.ep,new F.Ab(v[g],a7,f),f))
a2=A.bf(h,f,B.a0,f,B.O,!1)
a3=l.$2(u,w?"No orders being prepared.":"Nothing being fixed right now.")
return A.DL(A.bK(p,f,A.GN(A.b([a2,a3,l.$2(t,w?"No orders delivered in the last 30 days.":"Nothing attended in the last 30 days.")],j)),f,f),0,3)},
$S:947}
C.atF.prototype={
$1(d){return this.a.d?J.c(d.h(0,"kind"),"order"):!J.c(d.h(0,"kind"),"order")},
$S:3}
C.atG.prototype={
$1(d){return J.c(d.h(0,"status"),"open")},
$S:3}
C.atH.prototype={
$2(d,e){var w="created_at"
return J.h8(d.h(0,w),e.h(0,w))},
$S:55}
C.atK.prototype={
$1(d){return J.c(d.h(0,"status"),"working")},
$S:3}
C.atL.prototype={
$2(d,e){var w=A.x9(e)?1:0
return w-(A.x9(d)?1:0)},
$S:55}
C.atM.prototype={
$1(d){return J.c(d.h(0,"status"),"done")||J.c(d.h(0,"status"),"cancelled")},
$S:3}
C.atN.prototype={
$2(d,e){var w,v="updated_at",u=e.h(0,"done_at")
if(u==null)u=e.h(0,v)
w=d.h(0,"done_at")
return J.h8(u,w==null?d.h(0,v):w)},
$S:55}
C.atO.prototype={
$1(d){var w
if(d.h(0,"done_at")!=null){w=A.cx(d.h(0,"done_at")).nl()
w=A.bI("yyyy-MM-dd").a3(w)===this.a}else w=!1
return w},
$S:3}
C.atP.prototype={
$1(d){return d>=0},
$S:96}
C.atQ.prototype={
$2(d,e){return d+e},
$S:166}
C.atU.prototype={
$2(d,e){var w,v,u,t,s=null
if(d.length===0)w=new A.cC(B.lC,e,s,s)
else{w=A.b([],x.p)
for(v=d.length,u=this.a,t=0;t<d.length;d.length===v||(0,A.F)(d),++t)w.push(new F.Ab(d[t],u,s))
w=A.bf(w,s,B.aG,s,B.O,!1)}return w},
$S:948}
C.atR.prototype={
$1(d){var w=A.cx(d.h(0,"created_at")).nl()
return A.bI("yyyy-MM-dd").a3(w)===this.a&&!J.c(d.h(0,"status"),"cancelled")},
$S:3}
C.atI.prototype={
$2(d,e){var w=e.h(0,"total_nad")
return d+A.an(w==null?0:w)},
$S:52}
C.atJ.prototype={
$0(){return A.JG(this.b,C.ch6(),new C.atE(this.a),x.z)},
$S:0}
C.atE.prototype={
$0(){A.m1("repairs")
return M.c71(this.a.c)},
$S:z+0};(function installTearOffs(){var w=a._static_0
w(C,"ch6","cbL",1)})();(function inheritance(){var w=a.inheritMany
w(A.a3,[C.qU,C.tp,C.up,C.ma])
w(A.hm,[C.aA3,C.aA8,C.axT,C.atT,C.atF,C.atG,C.atK,C.atM,C.atO,C.atP,C.atR])
w(A.j2,[C.aA7,C.aA6,C.aA4,C.aA5,C.axS,C.atS,C.atJ,C.atE])
w(A.jX,[C.atH,C.atL,C.atN,C.atQ,C.atU,C.atI])})()
A.l3(b.typeUniverse,JSON.parse('{"qU":{"a3":[],"h":[]},"up":{"a3":[],"h":[]},"tp":{"a3":[],"h":[]},"ma":{"a3":[],"h":[]}}'))
var y={b:"https://osksalote.github.io/roomnow-app/?place="}
var x=(function rtii(){var w=A.ab
return{k:w("E<ca>"),s:w("E<f>"),p:w("E<h>"),D:w("y<t<f,@>>"),w:w("bk<y<t<f,@>>>"),W:w("bk<t<f,@>?>"),P:w("t<f,@>"),N:w("f"),t:w("dk<w>"),z:w("@"),h:w("t<f,@>?"),H:w("~")}})();(function constants(){var w=a.makeConstList
D.a80=new A.ad(12,12,12,0)
D.aaG=new A.a5(57900,"MaterialIcons",!1)
D.lG=new A.aa(N.jU,null,null,null,null)
D.abs=new A.a5(58969,"MaterialIcons",!1)
D.adD=new A.aa(D.abs,16,B.a5,null,null)
D.abt=new A.a5(58972,"MaterialIcons",!1)
D.aec=new A.aa(D.abt,16,B.Z,null,null)
D.aeL=new A.hL("Guest feedback","What guests said after their stay. Only you see it, not other guests.",null)
D.aeP=new A.hL("Grow my business","How many people looked at your place and booked, compared with the town. Tips to get more guests.",null)
D.bU2=new A.x("Only you, your manager and the guest see this. Not the public, not other guesthouses.",null,B.Yx,null,null,null,null,null,null,null,null)
D.a9s=new A.de(1,B.b8,D.bU2,null)
D.b0X=w([B.EY,B.dx,D.a9s],x.p)
D.bAY=new A.pH(B.bl,B.q,B.w,B.B,null,B.x,null,0,D.b0X,null)
D.bBc=new A.c2("What to do now",null,null)
D.bBw=new A.c2("Last 30 days",null,null)
D.bE9=new A.K(1/0,96)
D.bKz=new A.G(!0,B.J,null,null,null,null,13,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.bKF=new A.G(!0,B.W,null,null,null,null,24,B.au,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.bN9=new A.x("No feedback yet. Guests are asked for it when they check out.",null,B.ac,null,null,null,null,null,null,null,null)
D.bNc=new A.x("Guest feedback (private)",null,null,null,null,null,null,null,null,null,null)
D.bNK=new A.x("Grow my business",null,null,null,null,null,null,null,null,null,null)
D.bNW=new A.x("Fair for everyone: NamStay changes the order of guesthouses every day, and places with fewer recent bookings are shown first. Good private ratings put you on the Recommended list. Your numbers are private: only you and your manager see them.",null,B.aH,null,null,null,null,null,null,null,null)
D.bPr=new A.x("Share my NamStay link",null,null,null,null,null,null,null,null,null,null)
D.bQs=new A.x("Open the Repairs list",null,null,null,null,null,null,null,null,null,null)
D.bSB=new A.x("What guests report during their stay: things not working and damage. Orders are on their own list. Answer fast and tell the guest how long it will take. Repairs also go on the Repairs list, where you choose who fixes them and record the cost.",null,B.h8,null,null,null,null,null,null,null,null)})()};
(a=>{a["Emw3SDXIuQLVy2PL1XBvLZhfO+k="]=a.current})($__dart_deferred_initializers__);
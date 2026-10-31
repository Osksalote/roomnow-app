((a,b)=>{a[b]=a[b]||{}})(self,"$__dart_deferred_initializers__")
$__dart_deferred_initializers__.current=function(a,b,c,$){var J,A,B,E,H,I,K,L,M,N,C={
c9w(d,e){return new C.r6(d,e,null)},
c8U(d){return new C.uI(d,null)},
r6:function r6(d,e,f){this.c=d
this.d=e
this.a=f},
aBm:function aBm(d){this.a=d},
aBq:function aBq(d){this.a=d},
aBr:function aBr(d){this.a=d},
aBp:function aBp(d){this.a=d},
aBn:function aBn(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
aBo:function aBo(d,e){this.a=d
this.b=e},
tG:function tG(d,e,f,g){var _=this
_.c=d
_.d=e
_.e=f
_.a=g},
uI:function uI(d,e){this.c=d
this.a=e},
az6:function az6(d){this.a=d},
az7:function az7(d){this.a=d},
chm(){return A.oC("repairs","")},
mm:function mm(d,e,f){this.c=d
this.d=e
this.a=f},
auZ:function auZ(d){this.a=d},
av_:function av_(d){this.a=d},
auM:function auM(d){this.a=d},
auN:function auN(){},
auO:function auO(){},
auR:function auR(){},
auS:function auS(){},
auT:function auT(){},
auU:function auU(){},
auV:function auV(d){this.a=d},
auW:function auW(){},
auX:function auX(){},
av0:function av0(d){this.a=d},
auY:function auY(d){this.a=d},
auP:function auP(){},
auQ:function auQ(d,e){this.a=d
this.b=e},
auL:function auL(d){this.a=d},
ar9(d){var w=0,v=A.n(x.h),u,t,s,r
var $async$ar9=A.j(function(e,f){if(e===1)return A.k(f,v)
for(;;)switch(w){case 0:s=$.M().b
s===$&&A.a()
t=x.z
r=x.h
w=3
return A.d(s.a4("place_feedback",A.I(["p_place",d],x.N,t),t),$async$ar9)
case 3:u=r.a(f)
w=1
break
case 1:return A.l(u,v)}})
return A.m($async$ar9,v)},
a0m(d){var w=0,v=A.n(x.h),u,t,s,r
var $async$a0m=A.j(function(e,f){if(e===1)return A.k(f,v)
for(;;)switch(w){case 0:s=$.M().b
s===$&&A.a()
t=x.z
r=x.h
w=3
return A.d(s.a4("place_coach",A.I(["p_place",d],x.N,t),t),$async$a0m)
case 3:u=r.a(f)
w=1
break
case 1:return A.l(u,v)}})
return A.m($async$a0m,v)},
a0p(d,e){var w=0,v=A.n(x.D),u,t,s,r
var $async$a0p=A.j(function(f,g){if(f===1)return A.k(g,v)
for(;;)switch(w){case 0:s=$.M().b
s===$&&A.a()
t=s.bf("guest_requests").f0("*, bookings(guest_name, guest_phone, rooms(name))").bJ("place_id",d)
if(e)t=t.NZ("status",["open","working"])
r=A
w=3
return A.d((!e?A.i9(t.f4(t.f9("created_at","gte."+new A.aq(Date.now(),0,!1).d8(-2592e9).lz().mj())),t.$ti.c):t).dK("created_at",!1).qP(300),$async$a0p)
case 3:u=r.aD(g,!0,x.P)
w=1
break
case 1:return A.l(u,v)}})
return A.m($async$a0p,v)}},D,G,F
J=c[1]
A=c[0]
B=c[2]
E=c[22]
H=c[20]
I=c[21]
K=c[28]
L=c[35]
M=c[14]
N=c[48]
C=a.updateHolder(c[6],C)
D=c[44]
G=c[50]
F=c[15]
C.r6.prototype={
at4(d,e){var w,v,u=this,t=null,s={},r=e.toLowerCase()
s.a=null
if(B.o.n(r,"not visible")||B.o.n(r,"approval"))s.a=new E.fY(u.c,5,t)
else if(B.o.n(r,"room(s) have no photo"))s.a=new E.fY(u.c,3,t)
else if(B.o.n(r,"photo"))s.a=new E.fY(u.c,4,t)
else if(B.o.n(r,"description"))s.a=new E.fY(u.c,1,t)
else if(B.o.n(r,"price")||B.o.n(r,"offers"))s.a=new E.fY(u.c,3,t)
else if(B.o.n(r,"share")||B.o.n(r,"few travellers")){A.bRh(d,u.d,y.b+u.c)
return}else{w=B.o.n(r,"request")||B.o.n(r,"problems took")
v=u.c
if(w)s.a=new C.mm(v,!1,t)
else s.a=new C.uI(v,t)}s=A.aN(new C.aBm(s),!1,t,x.z)
A.J(d,!1).ak(s)},
t(d){var w=null
return A.bH(A.bR(A.b([D.agF],x.p),w,w,w,w,w,w,w,w,D.bRW,w,w),w,new A.bl(new C.aBq(this),new C.aBr(this),B.bO,w,x.W),w,w)}}
C.tG.prototype={
t(d){var w=null,v=A.b([I.uL(A.i(this.c,w,w,w,w,D.bOE,w,w,w),B.fX),A.i(this.d,2,w,w,w,B.dV,w,w,w)],x.p),u=this.e
if(u.length!==0)v.push(A.i(u,1,w,w,w,B.ec,w,w,w))
return A.b_(new A.H(B.e2,A.R(v,B.Y,B.cJ,B.r,0,B.x),w),w,w,w,w)}}
C.uI.prototype={
DU(d,e){var w=null,v=A.cI(A.i(d,w,w,w,w,w,w,w,w),w,130),u=e==null,t=u?w:B.n.aB(A.ai(e))
return new A.H(K.ox,A.ap(A.b([v,new A.ta(t,18,w,w),B.bp,A.i(u?"-":A.e(e),w,w,w,w,B.a4,w,w,w)],x.p),B.A,B.q,B.r,0,w),w)},
t(d){var w=null
return A.bH(A.bR(A.b([D.agB],x.p),w,w,w,w,w,w,w,w,D.bRn,w,w),w,new A.bl(new C.az6(this),new C.az7(this),A.b([new A.cc("notifications","user_id",A.el())],x.k),w,x.W),w,w)}}
C.mm.prototype={
t(d){return new A.bl(new C.auZ(this),new C.av_(this),A.b([new A.cc("guest_requests","place_id",this.c)],x.k),null,x.w)}}
var z=a.updateTypes(["kY()","ab<@>()"])
C.aBm.prototype={
$1(d){var w=this.a.a
w.toString
return w},
$S:20}
C.aBq.prototype={
$0(){return C.a0m(this.a.c)},
$S:60}
C.aBr.prototype={
$3(a3,a4,a5){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e=null,d="recommended",a0=" in the last 7 days",a1="avg_price",a2="town_avg_price"
if(a4==null)return G.vK
w=a4.h(0,"tips")
if(w==null)w=B.aH
v=A.aD(w,!0,x.N)
u=a4.h(0,"occupancy_30")
if(u==null)u=0
t=a4.h(0,"town_occupancy_30")
w=J.c(a4.h(0,d),!0)?B.CY:B.an
s=J.c(a4.h(0,d),!0)?B.lZ:D.ac8
s=A.bq(s,J.c(a4.h(0,d),!0)?B.Da:B.V,e,32)
r=A.i(J.c(a4.h(0,d),!0)?"You are on the Recommended list":"Not on the Recommended list yet",e,e,e,e,B.a4,e,e,e)
w=A.b_(A.aM(!1,e,e,e,!0,e,e,e,!0,e,s,e,e,e,e,e,e,!1,e,e,e,e,e,A.i(J.c(a4.h(0,d),!0)?"Keep rooms clean and answer guests fast to stay there.":"You need "+A.e(a4.h(0,"need_for_recommended"))+" more good rating(s) (4 or 5 stars).",e,e,e,e,e,e,e,e),e,r,e,e,e),e,w,e,e)
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
m=a4.h(0,a1)==null?"-":A.aY(a4.h(0,a1))
l=a4.h(0,a2)==null?"":"town average "+A.aY(a4.h(0,a2))
k=a4.h(0,"overall")==null?"-":A.e(a4.h(0,"overall"))+"\u2605"
j=a4.h(0,"ratings")
j=A.e(j==null?0:j)
i=a4.h(0,"service")==null?"-":A.e(a4.h(0,"service"))+"\u2605"
h=x.p
h=A.b([w,D.bFe,H.EM(1.35,A.b([new C.tG(s,"travellers looked at your place",r+a0,e),new C.tG(q,"bookings",p+a0,e),new C.tG(o+"%","rooms full",n,e),new C.tG(m,"your average price",l,e),new C.tG(k,"private guest rating",j+" rating(s)",e),new C.tG(i,"service rate","only you see this",e)],h),8,8,170,B.e9,!0),D.bEV],h)
for(w=this.a,g=0;g<v.length;g=f){f=g+1
h.push(new A.c7(e,e,e,B.b_,A.aM(!1,e,e,e,!0,e,e,e,!0,e,A.fS(B.V,A.i(""+f,e,e,e,e,D.bOy,e,e,e),14),e,e,e,e,e,new C.aBn(w,a3,v,g),!1,e,e,e,e,e,e,e,A.i(v[g],e,e,e,e,e,e,e,e),e,B.bH,e),e))}h.push(B.S)
h.push(A.c9(B.x8,D.bTY,new C.aBo(w,a3),e))
h.push(B.S)
h.push(D.bSa)
return A.mN(A.bg(h,e,B.aK,e,B.N,!1),new C.aBp(a5))},
$S:122}
C.aBp.prototype={
$0(){var w=0,v=A.n(x.H),u,t=this
var $async$$0=A.j(function(d,e){if(d===1)return A.k(e,v)
for(;;)switch(w){case 0:u=t.a.$0()
w=1
break
case 1:return A.l(u,v)}})
return A.m($async$$0,v)},
$S:1}
C.aBn.prototype={
$0(){var w=this
return w.a.at4(w.b,w.c[w.d])},
$S:0}
C.aBo.prototype={
$0(){var w=this.a
return A.bRh(this.b,w.d,y.b+w.c)},
$S:0}
C.az6.prototype={
$0(){return C.ar9(this.a.c)},
$S:60}
C.az7.prototype={
$3(a0,a1,a2){var w,v,u,t,s,r,q,p,o,n,m,l,k=null,j="overall",i="clean",h="service",g="comfort",f="value",e="avg_fix_minutes",d="disliked"
if(a1==null)return G.vK
w=a1.h(0,"items")
if(w==null)w=B.aH
v=A.aD(w,!0,x.P)
w=a1.h(0,"count")
w=A.e(w==null?0:w)
u=a1.h(0,"happy_pct")
w=A.i(w+" rating(s) \xb7 "+A.e(u==null?"-":u)+"% happy guests",k,k,k,k,B.bU,k,k,k)
u=this.a
t=u.DU("Overall",a1.h(0,j))
s=u.DU("Clean",a1.h(0,i))
r=u.DU("Service rate",a1.h(0,h))
q=u.DU("Comfort",a1.h(0,g))
u=u.DU("Value for money",a1.h(0,f))
p=a1.h(0,"complaints_90")
p=A.e(p==null?0:p)
o=a1.h(0,e)==null?"":" \xb7 fixed in "+A.e(a1.h(0,e))+" min on average"
n=x.p
o=A.b_(new A.H(B.cc,A.R(A.b([w,B.S,t,s,r,q,u,B.jV,A.i("Complaints (last 90 days): "+p+o,k,k,k,k,k,k,k,k)],n),B.Y,B.q,B.r,0,B.x),k),k,k,k,k)
p=v.length
o=A.b([D.bEG,B.ah,o,new A.c6("What guests said ("+p+")",k,k)],n)
if(p===0)o.push(D.bRj)
for(w=x.s,m=0;m<p;++m){l=v[m]
u=l.h(0,j)
u=J.CS(u==null?5:u,2)?B.b5:k
t=A.ho(l.h(0,j))
s=l.h(0,"guest")
s=A.e(s==null?"Guest":s)
t=A.b([A.ap(A.b([new A.ta(t,18,k,k),B.bp,new A.cP(1,B.aV,A.i(s+(l.h(0,"room")==null?"":" \xb7 "+A.e(l.h(0,"room"))),k,k,k,k,B.a4,k,k,k),k),A.i(A.ay(l.h(0,"at")),k,k,k,k,B.aB,k,k,k)],n),B.A,B.q,B.r,0,k)],n)
if(l.h(0,"liked")!=null)B.h.I(t,A.b([B.aG,A.ap(A.b([D.ag2,B.cw,new A.cP(1,B.aV,A.i(l.h(0,"liked"),k,k,k,k,k,k,k,k),k)],n),B.Y,B.q,B.r,0,k)],n))
if(l.h(0,d)!=null)B.h.I(t,A.b([B.aG,A.ap(A.b([D.afr,B.cw,new A.cP(1,B.aV,A.i(l.h(0,d),k,k,k,k,L.Av,k,k,k),k)],n),B.Y,B.q,B.r,0,k)],n))
if(l.h(0,i)!=null||l.h(0,h)!=null){s=A.b([],w)
if(l.h(0,i)!=null)s.push("clean "+A.e(l.h(0,i)))
if(l.h(0,h)!=null)s.push("service "+A.e(l.h(0,h)))
if(l.h(0,g)!=null)s.push("comfort "+A.e(l.h(0,g)))
if(l.h(0,f)!=null)s.push("value "+A.e(l.h(0,f)))
t.push(new A.H(B.dK,A.i(B.h.aL(s," \xb7 "),k,k,k,k,B.aB,k,k,k),k))}o.push(new A.c7(u,k,k,B.b_,new A.H(B.ay,A.R(t,B.Y,B.q,B.r,0,B.x),k),k))}return A.bg(o,k,B.aK,k,B.N,!1)},
$S:116}
C.auZ.prototype={
$0(){return C.a0p(this.a.c,!1)},
$S:13}
C.av_.prototype={
$3(a5,a6,a7){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f=null,e="Guest orders",d="Complaints & requests",a0="To attend",a1="Being fixed",a2=this.a,a3=J.d5(a6,new C.auM(a2)),a4=A.N(a3,a3.$ti.i("z.E"))
a3=A.ae(a4).i("ak<1>")
w=a3.i("z.E")
v=A.N(new A.ak(a4,new C.auN(),a3),w)
B.h.e3(v,new C.auO())
u=A.N(new A.ak(a4,new C.auR(),a3),w)
B.h.e3(u,new C.auS())
t=A.N(new A.ak(a4,new C.auT(),a3),w)
B.h.e3(t,new C.auU())
s=new A.ak(u,A.cmV(),A.ae(u).i("ak<1>")).gv(0)
w=Date.now()
r=A.b5("yyyy-MM-dd").O(new A.aq(w,0,!1))
w=A.ae(t)
q=new A.ak(t,new C.auV(r),w.i("ak<1>")).gv(0)
p=x.t
o=p.i("ak<z.E>")
n=A.N(new A.ak(new A.dt(new A.at(t,F.cmU(),w.i("at<1,w?>")),p),new C.auW(),o),o.i("z.E"))
m=n.length===0?f:B.n.aB(B.h.im(n,new C.auX())/n.length)
l=new C.av0(a7)
w=a2.d
p=A.i(w?e:d,f,f,f,f,f,f,f,f)
o=w?e:d
k=B.yH.h(0,w?"orders":"requests")
k.toString
j=x.p
k=A.b([A.nG(o,k)],j)
o=w?"New":a0
i=v.length
h=w?"Being prepared":a1
h=A.b([new A.bG(o+" "+i,B.aF,B.aS,f),new A.bG(h+" "+u.length,B.U,B.an,f)],j)
if(w)h.push(new A.bG("Today "+A.aY(new A.ak(a4,new C.auY(r),a3).dI(0,0,new C.auP())),B.U,B.an,f))
if(s>0)h.push(new A.bG("Late "+s,B.a_,B.b5,f))
h.push(new A.bG("Done today "+q,B.U,B.an,f))
if(m!=null)h.push(new A.bG("Average fix "+A.bIB(m),B.aR,B.ei,f))
a3=A.bW(B.ac,h,B.ag,4,6)
o=w?"New":a0
o=A.lX(o+" ("+v.length+")")
i=w?"Preparing":a1
i=A.lX(i+" ("+u.length+")")
h=w?"Delivered":"Attended"
p=A.bR(k,f,f,new A.Ao(A.R(A.b([new A.H(B.ek,a3,f),A.Hi(f,f,!1,f,f,f,f,A.b([o,i,A.lX(h+" ("+t.length+")")],j))],j),B.A,B.q,B.r,0,B.x),D.bHP,f),f,f,f,f,f,p,f,f)
h=A.b([],j)
if(!w)h.push(A.b_(new A.H(B.ay,A.R(A.b([D.bXt,A.dl(D.m1,D.bV3,new C.auQ(a2,a5),f)],j),B.Y,B.q,B.r,0,B.x),f),f,B.an,D.a9j,f))
if(v.length===0)h.push(new A.cE(B.ke,w?"No new orders.":"Nothing to attend. Well done!",f,f))
for(a2=v.length,g=0;g<v.length;v.length===a2||(0,A.F)(v),++g)h.push(new A.H(B.ek,new F.AB(v[g],a7,f),f))
a2=A.bg(h,f,B.a1,f,B.N,!1)
a3=l.$2(u,w?"No orders being prepared.":"Nothing being fixed right now.")
return A.ux(A.bH(p,f,A.wo(A.b([a2,a3,l.$2(t,w?"No orders delivered in the last 30 days.":"Nothing attended in the last 30 days.")],j)),f,f),0,3)},
$S:970}
C.auM.prototype={
$1(d){return this.a.d?J.c(d.h(0,"kind"),"order"):!J.c(d.h(0,"kind"),"order")},
$S:3}
C.auN.prototype={
$1(d){return J.c(d.h(0,"status"),"open")},
$S:3}
C.auO.prototype={
$2(d,e){var w="created_at"
return J.h4(d.h(0,w),e.h(0,w))},
$S:47}
C.auR.prototype={
$1(d){return J.c(d.h(0,"status"),"working")},
$S:3}
C.auS.prototype={
$2(d,e){var w=A.xq(e)?1:0
return w-(A.xq(d)?1:0)},
$S:47}
C.auT.prototype={
$1(d){return J.c(d.h(0,"status"),"done")||J.c(d.h(0,"status"),"cancelled")},
$S:3}
C.auU.prototype={
$2(d,e){var w,v="updated_at",u=e.h(0,"done_at")
if(u==null)u=e.h(0,v)
w=d.h(0,"done_at")
return J.h4(u,w==null?d.h(0,v):w)},
$S:47}
C.auV.prototype={
$1(d){var w
if(d.h(0,"done_at")!=null){w=A.bJ(d.h(0,"done_at")).eO()
w=A.b5("yyyy-MM-dd").O(w)===this.a}else w=!1
return w},
$S:3}
C.auW.prototype={
$1(d){return d>=0},
$S:89}
C.auX.prototype={
$2(d,e){return d+e},
$S:211}
C.av0.prototype={
$2(d,e){var w,v,u,t,s=null
if(d.length===0)w=new A.cE(B.ke,e,s,s)
else{w=A.b([],x.p)
for(v=d.length,u=this.a,t=0;t<d.length;d.length===v||(0,A.F)(d),++t)w.push(new F.AB(d[t],u,s))
w=A.bg(w,s,B.ay,s,B.N,!1)}return w},
$S:971}
C.auY.prototype={
$1(d){var w=A.bJ(d.h(0,"created_at")).eO()
return A.b5("yyyy-MM-dd").O(w)===this.a&&!J.c(d.h(0,"status"),"cancelled")},
$S:3}
C.auP.prototype={
$2(d,e){var w=e.h(0,"total_nad")
return d+A.ar(w==null?0:w)},
$S:55}
C.auQ.prototype={
$0(){return A.Kg(this.b,C.cmT(),new C.auL(this.a),x.z)},
$S:0}
C.auL.prototype={
$0(){A.kt("repairs")
return M.ccE(this.a.c)},
$S:z+0};(function installTearOffs(){var w=a._static_0
w(C,"cmT","chm",1)})();(function inheritance(){var w=a.inheritMany
w(A.a3,[C.r6,C.tG,C.uI,C.mm])
w(A.h6,[C.aBm,C.aBr,C.az7,C.av_,C.auM,C.auN,C.auR,C.auT,C.auV,C.auW,C.auY])
w(A.j6,[C.aBq,C.aBp,C.aBn,C.aBo,C.az6,C.auZ,C.auQ,C.auL])
w(A.k1,[C.auO,C.auS,C.auU,C.auX,C.av0,C.auP])})()
A.kr(b.typeUniverse,JSON.parse('{"r6":{"a3":[],"h":[]},"uI":{"a3":[],"h":[]},"tG":{"a3":[],"h":[]},"mm":{"a3":[],"h":[]}}'))
var y={b:"https://osksalote.github.io/roomnow-app/?place="}
var x=(function rtii(){var w=A.aa
return{k:w("E<cc>"),s:w("E<f>"),p:w("E<h>"),D:w("A<r<f,@>>"),w:w("bl<A<r<f,@>>>"),W:w("bl<r<f,@>?>"),P:w("r<f,@>"),N:w("f"),t:w("dt<w>"),z:w("@"),h:w("r<f,@>?"),H:w("~")}})();(function constants(){var w=a.makeConstList
D.a9j=new A.ac(12,12,12,0)
D.ac8=new A.a1(57900,"MaterialIcons",!1)
D.m1=new A.a9(N.kc,null,null,null,null)
D.ad0=new A.a1(58969,"MaterialIcons",!1)
D.afr=new A.a9(D.ad0,16,B.a_,null,null)
D.ad1=new A.a1(58972,"MaterialIcons",!1)
D.ag2=new A.a9(D.ad1,16,B.U,null,null)
D.agB=new A.hQ("Guest feedback","What guests said after their stay. Only you see it, not other guests.",null)
D.agF=new A.hQ("Grow my business","How many people looked at your place and booked, compared with the town. Tips to get more guests.",null)
D.bZ0=new A.t("Only you, your manager and the guest see this. Not the public, not other guesthouses.",null,B.ZC,null,null,null,null,null,null,null,null)
D.aaR=new A.cP(1,B.aV,D.bZ0,null)
D.b34=w([B.FO,B.cw,D.aaR],x.p)
D.bEG=new A.o3(B.bn,B.q,B.r,B.A,null,B.x,null,0,D.b34,null)
D.bEV=new A.c6("What to do now",null,null)
D.bFe=new A.c6("Last 30 days",null,null)
D.bHP=new A.K(1/0,96)
D.bOy=new A.G(!0,B.K,null,null,null,null,13,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.bOE=new A.G(!0,B.V,null,null,null,null,24,B.ao,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.bRj=new A.t("No feedback yet. Guests are asked for it when they check out.",null,B.a7,null,null,null,null,null,null,null,null)
D.bRn=new A.t("Guest feedback (private)",null,null,null,null,null,null,null,null,null,null)
D.bRW=new A.t("Grow my business",null,null,null,null,null,null,null,null,null,null)
D.bSa=new A.t("Fair for everyone: NamStay changes the order of guesthouses every day, and places with fewer recent bookings are shown first. Good private ratings put you on the Recommended list. Your numbers are private: only you and your manager see them.",null,B.aB,null,null,null,null,null,null,null,null)
D.bTY=new A.t("Share my NamStay link",null,null,null,null,null,null,null,null,null,null)
D.bV3=new A.t("Open the Repairs list",null,null,null,null,null,null,null,null,null,null)
D.bXt=new A.t("What guests report during their stay: things not working and damage. Orders are on their own list. Answer fast and tell the guest how long it will take. Repairs also go on the Repairs list, where you choose who fixes them and record the cost.",null,B.hn,null,null,null,null,null,null,null,null)})()};
(a=>{a["T2d9qr9cwISFr8VUZnN5wrMroqI="]=a.current})($__dart_deferred_initializers__);
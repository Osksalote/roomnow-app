((a,b)=>{a[b]=a[b]||{}})(self,"$__dart_deferred_initializers__")
$__dart_deferred_initializers__.current=function(a,b,c,$){var J,A,B,E,H,I,K,L,M,N,C={
c9U(d,e){return new C.r7(d,e,null)},
c9h(d){return new C.uL(d,null)},
r7:function r7(d,e,f){this.c=d
this.d=e
this.a=f},
aBs:function aBs(d){this.a=d},
aBw:function aBw(d){this.a=d},
aBx:function aBx(d){this.a=d},
aBv:function aBv(d){this.a=d},
aBt:function aBt(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
aBu:function aBu(d,e){this.a=d
this.b=e},
tI:function tI(d,e,f,g){var _=this
_.c=d
_.d=e
_.e=f
_.a=g},
uL:function uL(d,e){this.c=d
this.a=e},
azc:function azc(d){this.a=d},
azd:function azd(d){this.a=d},
chK(){return A.oB("repairs","")},
mm:function mm(d,e,f){this.c=d
this.d=e
this.a=f},
av4:function av4(d){this.a=d},
av5:function av5(d){this.a=d},
auS:function auS(d){this.a=d},
auT:function auT(){},
auU:function auU(){},
auX:function auX(){},
auY:function auY(){},
auZ:function auZ(){},
av_:function av_(){},
av0:function av0(d){this.a=d},
av1:function av1(){},
av2:function av2(){},
av6:function av6(d){this.a=d},
av3:function av3(d){this.a=d},
auV:function auV(){},
auW:function auW(d,e){this.a=d
this.b=e},
auR:function auR(d){this.a=d},
arf(d){var w=0,v=A.n(x.h),u,t,s,r
var $async$arf=A.j(function(e,f){if(e===1)return A.k(f,v)
for(;;)switch(w){case 0:s=$.N().b
s===$&&A.a()
t=x.z
r=x.h
w=3
return A.d(s.a1("place_feedback",A.J(["p_place",d],x.N,t),t),$async$arf)
case 3:u=r.a(f)
w=1
break
case 1:return A.l(u,v)}})
return A.m($async$arf,v)},
a0s(d){var w=0,v=A.n(x.h),u,t,s,r
var $async$a0s=A.j(function(e,f){if(e===1)return A.k(f,v)
for(;;)switch(w){case 0:s=$.N().b
s===$&&A.a()
t=x.z
r=x.h
w=3
return A.d(s.a1("place_coach",A.J(["p_place",d],x.N,t),t),$async$a0s)
case 3:u=r.a(f)
w=1
break
case 1:return A.l(u,v)}})
return A.m($async$a0s,v)},
a0v(d,e){var w=0,v=A.n(x.D),u,t,s,r
var $async$a0v=A.j(function(f,g){if(f===1)return A.k(g,v)
for(;;)switch(w){case 0:s=$.N().b
s===$&&A.a()
t=s.be("guest_requests").f1("*, bookings(guest_name, guest_phone, rooms(name))").bG("place_id",d)
if(e)t=t.NV("status",["open","working"])
r=A
w=3
return A.d((!e?A.ia(t.f5(t.fa("created_at","gte."+new A.ao(Date.now(),0,!1).da(-2592e9).lu().me())),t.$ti.c):t).dL("created_at",!1).qN(300),$async$a0v)
case 3:u=r.aD(g,!0,x.P)
w=1
break
case 1:return A.l(u,v)}})
return A.m($async$a0v,v)}},D,G,F
J=c[1]
A=c[0]
B=c[2]
E=c[22]
H=c[20]
I=c[21]
K=c[28]
L=c[34]
M=c[14]
N=c[46]
C=a.updateHolder(c[6],C)
D=c[44]
G=c[48]
F=c[15]
C.r7.prototype={
asZ(d,e){var w,v,u=this,t=null,s={},r=e.toLowerCase()
s.a=null
if(B.p.n(r,"not visible")||B.p.n(r,"approval"))s.a=new E.fW(u.c,5,t)
else if(B.p.n(r,"room(s) have no photo"))s.a=new E.fW(u.c,3,t)
else if(B.p.n(r,"photo"))s.a=new E.fW(u.c,4,t)
else if(B.p.n(r,"description"))s.a=new E.fW(u.c,1,t)
else if(B.p.n(r,"price")||B.p.n(r,"offers"))s.a=new E.fW(u.c,3,t)
else if(B.p.n(r,"share")||B.p.n(r,"few travellers")){A.bRE(d,u.d,y.b+u.c)
return}else{w=B.p.n(r,"request")||B.p.n(r,"problems took")
v=u.c
if(w)s.a=new C.mm(v,!1,t)
else s.a=new C.uL(v,t)}s=A.aL(new C.aBs(s),!1,t,x.z)
A.K(d,!1).ah(s)},
t(d){var w=null
return A.bH(A.bQ(A.b([D.agy],x.p),w,w,w,w,w,w,w,w,D.bX9,w,w),w,new A.bl(new C.aBw(this),new C.aBx(this),B.bO,w,x.W),w,w)}}
C.tI.prototype={
t(d){var w=null,v=A.b([I.uO(A.o(this.c,w,w,w,w,D.c3M,w,w,w),B.fY),A.o(this.d,2,w,w,w,B.dW,w,w,w)],x.p),u=this.e
if(u.length!==0)v.push(A.o(u,1,w,w,w,B.ed,w,w,w))
return A.aY(new A.I(B.e3,A.S(v,B.Y,B.cJ,B.t,0,B.x),w),w,w,w,w)}}
C.uL.prototype={
DU(d,e){var w=null,v=A.cH(A.o(d,w,w,w,w,w,w,w,w),w,130),u=e==null,t=u?w:B.o.av(A.ah(e))
return new A.I(K.ox,A.ap(A.b([v,new A.tc(t,18,w,w),B.bp,A.o(u?"-":A.e(e),w,w,w,w,B.a2,w,w,w)],x.p),B.A,B.r,B.t,0,w),w)},
t(d){var w=null
return A.bH(A.bQ(A.b([D.agu],x.p),w,w,w,w,w,w,w,w,D.bQV,w,w),w,new A.bl(new C.azc(this),new C.azd(this),A.b([new A.cc("notifications","user_id",A.ek())],x.k),w,x.W),w,w)}}
C.mm.prototype={
t(d){return new A.bl(new C.av4(this),new C.av5(this),A.b([new A.cc("guest_requests","place_id",this.c)],x.k),null,x.w)}}
var z=a.updateTypes(["kY()","ab<@>()"])
C.aBs.prototype={
$1(d){var w=this.a.a
w.toString
return w},
$S:20}
C.aBw.prototype={
$0(){return C.a0s(this.a.c)},
$S:60}
C.aBx.prototype={
$3(a3,a4,a5){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e=null,d="recommended",a0=" in the last 7 days",a1="avg_price",a2="town_avg_price"
if(a4==null)return G.vI
w=a4.h(0,"tips")
if(w==null)w=B.aH
v=A.aD(w,!0,x.N)
u=a4.h(0,"occupancy_30")
if(u==null)u=0
t=a4.h(0,"town_occupancy_30")
w=J.c(a4.h(0,d),!0)?B.CT:B.am
s=J.c(a4.h(0,d),!0)?B.lZ:D.abY
s=A.bg(s,J.c(a4.h(0,d),!0)?B.D5:B.V,e,32)
r=A.o(J.c(a4.h(0,d),!0)?"You are on the Recommended list":"Not on the Recommended list yet",e,e,e,e,B.a2,e,e,e)
w=A.aY(A.aM(!1,e,e,e,!0,e,e,e,!0,e,s,e,e,e,e,e,e,!1,e,e,e,e,e,A.o(J.c(a4.h(0,d),!0)?"Keep rooms clean and answer guests fast to stay there.":"You need "+A.e(a4.h(0,"need_for_recommended"))+" more good rating(s) (4 or 5 stars).",e,e,e,e,e,e,e,e),e,r,e,e,e),e,w,e,e)
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
m=a4.h(0,a1)==null?"-":A.aV(a4.h(0,a1))
l=a4.h(0,a2)==null?"":"town average "+A.aV(a4.h(0,a2))
k=a4.h(0,"overall")==null?"-":A.e(a4.h(0,"overall"))+"\u2605"
j=a4.h(0,"ratings")
j=A.e(j==null?0:j)
i=a4.h(0,"service")==null?"-":A.e(a4.h(0,"service"))+"\u2605"
h=x.p
h=A.b([w,D.bNq,H.EL(1.35,A.b([new C.tI(s,"travellers looked at your place",r+a0,e),new C.tI(q,"bookings",p+a0,e),new C.tI(o+"%","rooms full",n,e),new C.tI(m,"your average price",l,e),new C.tI(k,"private guest rating",j+" rating(s)",e),new C.tI(i,"service rate","only you see this",e)],h),8,8,170,B.ea,!0),D.bN6],h)
for(w=this.a,g=0;g<v.length;g=f){f=g+1
h.push(new A.c6(e,e,e,B.b0,A.aM(!1,e,e,e,!0,e,e,e,!0,e,A.fQ(B.V,A.o(""+f,e,e,e,e,D.c3G,e,e,e),14),e,e,e,e,e,new C.aBt(w,a3,v,g),!1,e,e,e,e,e,e,e,A.o(v[g],e,e,e,e,e,e,e,e),e,B.bD,e),e))}h.push(B.S)
h.push(A.c8(B.x6,D.bVJ,new C.aBu(w,a3),e))
h.push(B.S)
h.push(D.bV_)
return A.mM(A.bf(h,e,B.aK,e,B.N,!1),new C.aBv(a5))},
$S:128}
C.aBv.prototype={
$0(){var w=0,v=A.n(x.H),u,t=this
var $async$$0=A.j(function(d,e){if(d===1)return A.k(e,v)
for(;;)switch(w){case 0:u=t.a.$0()
w=1
break
case 1:return A.l(u,v)}})
return A.m($async$$0,v)},
$S:1}
C.aBt.prototype={
$0(){var w=this
return w.a.asZ(w.b,w.c[w.d])},
$S:0}
C.aBu.prototype={
$0(){var w=this.a
return A.bRE(this.b,w.d,y.b+w.c)},
$S:0}
C.azc.prototype={
$0(){return C.arf(this.a.c)},
$S:60}
C.azd.prototype={
$3(a0,a1,a2){var w,v,u,t,s,r,q,p,o,n,m,l,k=null,j="overall",i="clean",h="service",g="comfort",f="value",e="avg_fix_minutes",d="disliked"
if(a1==null)return G.vI
w=a1.h(0,"items")
if(w==null)w=B.aH
v=A.aD(w,!0,x.P)
w=a1.h(0,"count")
w=A.e(w==null?0:w)
u=a1.h(0,"happy_pct")
w=A.o(w+" rating(s) \xb7 "+A.e(u==null?"-":u)+"% happy guests",k,k,k,k,B.bU,k,k,k)
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
o=A.aY(new A.I(B.cc,A.S(A.b([w,B.S,t,s,r,q,u,B.jZ,A.o("Complaints (last 90 days): "+p+o,k,k,k,k,k,k,k,k)],n),B.Y,B.r,B.t,0,B.x),k),k,k,k,k)
p=v.length
o=A.b([D.bMS,B.ai,o,new A.c5("What guests said ("+p+")",k,k)],n)
if(p===0)o.push(D.bZ2)
for(w=x.s,m=0;m<p;++m){l=v[m]
u=l.h(0,j)
u=J.CR(u==null?5:u,2)?B.b6:k
t=A.hm(l.h(0,j))
s=l.h(0,"guest")
s=A.e(s==null?"Guest":s)
t=A.b([A.ap(A.b([new A.tc(t,18,k,k),B.bp,new A.cP(1,B.aV,A.o(s+(l.h(0,"room")==null?"":" \xb7 "+A.e(l.h(0,"room"))),k,k,k,k,B.a2,k,k,k),k),A.o(A.as(l.h(0,"at")),k,k,k,k,B.aB,k,k,k)],n),B.A,B.r,B.t,0,k)],n)
if(l.h(0,"liked")!=null)B.h.I(t,A.b([B.aG,A.ap(A.b([D.afW,B.cx,new A.cP(1,B.aV,A.o(l.h(0,"liked"),k,k,k,k,k,k,k,k),k)],n),B.Y,B.r,B.t,0,k)],n))
if(l.h(0,d)!=null)B.h.I(t,A.b([B.aG,A.ap(A.b([D.afj,B.cx,new A.cP(1,B.aV,A.o(l.h(0,d),k,k,k,k,L.Av,k,k,k),k)],n),B.Y,B.r,B.t,0,k)],n))
if(l.h(0,i)!=null||l.h(0,h)!=null){s=A.b([],w)
if(l.h(0,i)!=null)s.push("clean "+A.e(l.h(0,i)))
if(l.h(0,h)!=null)s.push("service "+A.e(l.h(0,h)))
if(l.h(0,g)!=null)s.push("comfort "+A.e(l.h(0,g)))
if(l.h(0,f)!=null)s.push("value "+A.e(l.h(0,f)))
t.push(new A.I(B.dK,A.o(B.h.aK(s," \xb7 "),k,k,k,k,B.aB,k,k,k),k))}o.push(new A.c6(u,k,k,B.b0,new A.I(B.ay,A.S(t,B.Y,B.r,B.t,0,B.x),k),k))}return A.bf(o,k,B.aK,k,B.N,!1)},
$S:105}
C.av4.prototype={
$0(){return C.a0v(this.a.c,!1)},
$S:13}
C.av5.prototype={
$3(a5,a6,a7){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f=null,e="Guest orders",d="Complaints & requests",a0="To attend",a1="Being fixed",a2=this.a,a3=J.d5(a6,new C.auS(a2)),a4=A.O(a3,a3.$ti.i("A.E"))
a3=A.ad(a4).i("aj<1>")
w=a3.i("A.E")
v=A.O(new A.aj(a4,new C.auT(),a3),w)
B.h.e3(v,new C.auU())
u=A.O(new A.aj(a4,new C.auX(),a3),w)
B.h.e3(u,new C.auY())
t=A.O(new A.aj(a4,new C.auZ(),a3),w)
B.h.e3(t,new C.av_())
s=new A.aj(u,A.cni(),A.ad(u).i("aj<1>")).gv(0)
w=Date.now()
r=A.b_("yyyy-MM-dd").O(new A.ao(w,0,!1))
w=A.ad(t)
q=new A.aj(t,new C.av0(r),w.i("aj<1>")).gv(0)
p=x.t
o=p.i("aj<A.E>")
n=A.O(new A.aj(new A.ds(new A.au(t,F.cnh(),w.i("au<1,y?>")),p),new C.av1(),o),o.i("A.E"))
m=n.length===0?f:B.o.av(B.h.ik(n,new C.av2())/n.length)
l=new C.av6(a7)
w=a2.d
p=A.o(w?e:d,f,f,f,f,f,f,f,f)
o=w?e:d
k=B.yE.h(0,w?"orders":"requests")
k.toString
j=x.p
k=A.b([A.nF(o,k)],j)
o=w?"New":a0
i=v.length
h=w?"Being prepared":a1
h=A.b([new A.bG(o+" "+i,B.aF,B.aS,f),new A.bG(h+" "+u.length,B.U,B.am,f)],j)
if(w)h.push(new A.bG("Today "+A.aV(new A.aj(a4,new C.av3(r),a3).dJ(0,0,new C.auV())),B.U,B.am,f))
if(s>0)h.push(new A.bG("Late "+s,B.a_,B.b6,f))
h.push(new A.bG("Done today "+q,B.U,B.am,f))
if(m!=null)h.push(new A.bG("Average fix "+A.bIY(m),B.aR,B.ej,f))
a3=A.bV(B.ac,h,B.ag,4,6)
o=w?"New":a0
o=A.lX(o+" ("+v.length+")")
i=w?"Preparing":a1
i=A.lX(i+" ("+u.length+")")
h=w?"Delivered":"Attended"
p=A.bQ(k,f,f,new A.An(A.S(A.b([new A.I(B.el,a3,f),A.Hi(f,f,!1,f,f,f,f,A.b([o,i,A.lX(h+" ("+t.length+")")],j))],j),B.A,B.r,B.t,0,B.x),D.bQ1,f),f,f,f,f,f,p,f,f)
h=A.b([],j)
if(!w)h.push(A.aY(new A.I(B.ay,A.S(A.b([D.bT1,A.di(D.m1,D.bR1,new C.auW(a2,a5),f)],j),B.Y,B.r,B.t,0,B.x),f),f,B.am,D.a97,f))
if(v.length===0)h.push(new A.cD(B.kj,w?"No new orders.":"Nothing to attend. Well done!",f,f))
for(a2=v.length,g=0;g<v.length;v.length===a2||(0,A.G)(v),++g)h.push(new A.I(B.el,new F.AA(v[g],a7,f),f))
a2=A.bf(h,f,B.a1,f,B.N,!1)
a3=l.$2(u,w?"No orders being prepared.":"Nothing being fixed right now.")
return A.uA(A.bH(p,f,A.wr(A.b([a2,a3,l.$2(t,w?"No orders delivered in the last 30 days.":"Nothing attended in the last 30 days.")],j)),f,f),0,3)},
$S:972}
C.auS.prototype={
$1(d){return this.a.d?J.c(d.h(0,"kind"),"order"):!J.c(d.h(0,"kind"),"order")},
$S:3}
C.auT.prototype={
$1(d){return J.c(d.h(0,"status"),"open")},
$S:3}
C.auU.prototype={
$2(d,e){var w="created_at"
return J.h2(d.h(0,w),e.h(0,w))},
$S:49}
C.auX.prototype={
$1(d){return J.c(d.h(0,"status"),"working")},
$S:3}
C.auY.prototype={
$2(d,e){var w=A.xs(e)?1:0
return w-(A.xs(d)?1:0)},
$S:49}
C.auZ.prototype={
$1(d){return J.c(d.h(0,"status"),"done")||J.c(d.h(0,"status"),"cancelled")},
$S:3}
C.av_.prototype={
$2(d,e){var w,v="updated_at",u=e.h(0,"done_at")
if(u==null)u=e.h(0,v)
w=d.h(0,"done_at")
return J.h2(u,w==null?d.h(0,v):w)},
$S:49}
C.av0.prototype={
$1(d){var w
if(d.h(0,"done_at")!=null){w=A.bI(d.h(0,"done_at")).eO()
w=A.b_("yyyy-MM-dd").O(w)===this.a}else w=!1
return w},
$S:3}
C.av1.prototype={
$1(d){return d>=0},
$S:85}
C.av2.prototype={
$2(d,e){return d+e},
$S:211}
C.av6.prototype={
$2(d,e){var w,v,u,t,s=null
if(d.length===0)w=new A.cD(B.kj,e,s,s)
else{w=A.b([],x.p)
for(v=d.length,u=this.a,t=0;t<d.length;d.length===v||(0,A.G)(d),++t)w.push(new F.AA(d[t],u,s))
w=A.bf(w,s,B.ay,s,B.N,!1)}return w},
$S:973}
C.av3.prototype={
$1(d){var w=A.bI(d.h(0,"created_at")).eO()
return A.b_("yyyy-MM-dd").O(w)===this.a&&!J.c(d.h(0,"status"),"cancelled")},
$S:3}
C.auV.prototype={
$2(d,e){var w=e.h(0,"total_nad")
return d+A.ar(w==null?0:w)},
$S:55}
C.auW.prototype={
$0(){return A.Kg(this.b,C.cng(),new C.auR(this.a),x.z)},
$S:0}
C.auR.prototype={
$0(){A.ks("repairs")
return M.cd1(this.a.c)},
$S:z+0};(function installTearOffs(){var w=a._static_0
w(C,"cng","chK",1)})();(function inheritance(){var w=a.inheritMany
w(A.a3,[C.r7,C.tI,C.uL,C.mm])
w(A.h4,[C.aBs,C.aBx,C.azd,C.av5,C.auS,C.auT,C.auX,C.auZ,C.av0,C.av1,C.av3])
w(A.j6,[C.aBw,C.aBv,C.aBt,C.aBu,C.azc,C.av4,C.auW,C.auR])
w(A.k0,[C.auU,C.auY,C.av_,C.av2,C.av6,C.auV])})()
A.kq(b.typeUniverse,JSON.parse('{"r7":{"a3":[],"i":[]},"uL":{"a3":[],"i":[]},"tI":{"a3":[],"i":[]},"mm":{"a3":[],"i":[]}}'))
var y={b:"https://osksalote.github.io/roomnow-app/?place="}
var x=(function rtii(){var w=A.a9
return{k:w("F<cc>"),s:w("F<f>"),p:w("F<i>"),D:w("B<u<f,@>>"),w:w("bl<B<u<f,@>>>"),W:w("bl<u<f,@>?>"),P:w("u<f,@>"),N:w("f"),t:w("ds<y>"),z:w("@"),h:w("u<f,@>?"),H:w("~")}})();(function constants(){var w=a.makeConstList
D.a97=new A.aa(12,12,12,0)
D.abY=new A.a1(57900,"MaterialIcons",!1)
D.m1=new A.a8(N.kh,null,null,null,null)
D.acQ=new A.a1(58969,"MaterialIcons",!1)
D.afj=new A.a8(D.acQ,16,B.a_,null,null)
D.acR=new A.a1(58972,"MaterialIcons",!1)
D.afW=new A.a8(D.acR,16,B.U,null,null)
D.agu=new A.hO("Guest feedback","What guests said after their stay. Only you see it, not other guests.",null)
D.agy=new A.hO("Grow my business","How many people looked at your place and booked, compared with the town. Tips to get more guests.",null)
D.bRj=new A.p("Only you, your manager and the guest see this. Not the public, not other guesthouses.",B.ZS,null,null,null,null)
D.aaQ=new A.cP(1,B.aV,D.bRj,null)
D.bj5=w([B.FL,B.cx,D.aaQ],x.p)
D.bMS=new A.o2(B.bo,B.r,B.t,B.A,null,B.x,null,0,D.bj5,null)
D.bN6=new A.c5("What to do now",null,null)
D.bNq=new A.c5("Last 30 days",null,null)
D.bQ1=new A.L(1/0,96)
D.bQV=new A.p("Guest feedback (private)",null,null,null,null,null)
D.bR1=new A.p("Open the Repairs list",null,null,null,null,null)
D.bT1=new A.p("What guests report during their stay: things not working and damage. Orders are on their own list. Answer fast and tell the guest how long it will take. Repairs also go on the Repairs list, where you choose who fixes them and record the cost.",B.hp,null,null,null,null)
D.bV_=new A.p("Fair for everyone: NamStay changes the order of guesthouses every day, and places with fewer recent bookings are shown first. Good private ratings put you on the Recommended list. Your numbers are private: only you and your manager see them.",B.aB,null,null,null,null)
D.bVJ=new A.p("Share my NamStay link",null,null,null,null,null)
D.bX9=new A.p("Grow my business",null,null,null,null,null)
D.bZ2=new A.p("No feedback yet. Guests are asked for it when they check out.",B.a8,null,null,null,null)
D.c3G=new A.H(!0,B.K,null,null,null,null,13,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.c3M=new A.H(!0,B.V,null,null,null,null,24,B.ao,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)})()};
(a=>{a["WGYFuDvFOkul9qiV6mBOhH2fW3M="]=a.current})($__dart_deferred_initializers__);
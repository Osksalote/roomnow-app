((a,b)=>{a[b]=a[b]||{}})(self,"$__dart_deferred_initializers__")
$__dart_deferred_initializers__.current=function(a,b,c,$){var J,A,B,E,H,I,K,L,M,N,C={
cbg(d,e){return new C.r8(d,e,null)},
caE(d){return new C.uN(d,null)},
r8:function r8(d,e,f){this.c=d
this.d=e
this.a=f},
aBz:function aBz(d){this.a=d},
aBD:function aBD(d){this.a=d},
aBE:function aBE(d){this.a=d},
aBC:function aBC(d){this.a=d},
aBA:function aBA(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
aBB:function aBB(d,e){this.a=d
this.b=e},
tJ:function tJ(d,e,f,g){var _=this
_.c=d
_.d=e
_.e=f
_.a=g},
uN:function uN(d,e){this.c=d
this.a=e},
azj:function azj(d){this.a=d},
azk:function azk(d){this.a=d},
cja(){return A.oC("repairs","")},
mn:function mn(d,e,f){this.c=d
this.d=e
this.a=f},
avb:function avb(d){this.a=d},
avc:function avc(d){this.a=d},
auZ:function auZ(d){this.a=d},
av_:function av_(){},
av0:function av0(){},
av3:function av3(){},
av4:function av4(){},
av5:function av5(){},
av6:function av6(){},
av7:function av7(d){this.a=d},
av8:function av8(){},
av9:function av9(){},
avd:function avd(d){this.a=d},
ava:function ava(d){this.a=d},
av1:function av1(){},
av2:function av2(d,e){this.a=d
this.b=e},
auY:function auY(d){this.a=d},
arl(d){var w=0,v=A.o(x.h),u,t,s,r
var $async$arl=A.k(function(e,f){if(e===1)return A.l(f,v)
for(;;)switch(w){case 0:s=$.N().b
s===$&&A.a()
t=x.z
r=x.h
w=3
return A.e(s.a2("place_feedback",A.J(["p_place",d],x.N,t),t),$async$arl)
case 3:u=r.a(f)
w=1
break
case 1:return A.m(u,v)}})
return A.n($async$arl,v)},
a0y(d){var w=0,v=A.o(x.h),u,t,s,r
var $async$a0y=A.k(function(e,f){if(e===1)return A.l(f,v)
for(;;)switch(w){case 0:s=$.N().b
s===$&&A.a()
t=x.z
r=x.h
w=3
return A.e(s.a2("place_coach",A.J(["p_place",d],x.N,t),t),$async$a0y)
case 3:u=r.a(f)
w=1
break
case 1:return A.m(u,v)}})
return A.n($async$a0y,v)},
a0B(d,e){var w=0,v=A.o(x.D),u,t,s,r
var $async$a0B=A.k(function(f,g){if(f===1)return A.l(g,v)
for(;;)switch(w){case 0:s=$.N().b
s===$&&A.a()
t=s.bg("guest_requests").eT("*, bookings(guest_name, guest_phone, rooms(name))").bF("place_id",d)
if(e)t=t.NZ("status",["open","working"])
r=A
w=3
return A.e((!e?A.ib(t.f6(t.fb("created_at","gte."+new A.an(Date.now(),0,!1).df(-2592e9).lv().me())),t.$ti.c):t).dN("created_at",!1).qQ(300),$async$a0B)
case 3:u=r.aC(g,!0,x.P)
w=1
break
case 1:return A.m(u,v)}})
return A.n($async$a0B,v)}},D,G,F
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
C.r8.prototype={
at6(d,e){var w,v,u=this,t=null,s={},r=e.toLowerCase()
s.a=null
if(B.p.n(r,"not visible")||B.p.n(r,"approval"))s.a=new E.fX(u.c,5,t)
else if(B.p.n(r,"room(s) have no photo"))s.a=new E.fX(u.c,3,t)
else if(B.p.n(r,"photo"))s.a=new E.fX(u.c,4,t)
else if(B.p.n(r,"description"))s.a=new E.fX(u.c,1,t)
else if(B.p.n(r,"price")||B.p.n(r,"offers"))s.a=new E.fX(u.c,3,t)
else if(B.p.n(r,"share")||B.p.n(r,"few travellers")){A.bSX(d,u.d,y.b+u.c)
return}else{w=B.p.n(r,"request")||B.p.n(r,"problems took")
v=u.c
if(w)s.a=new C.mn(v,!1,t)
else s.a=new C.uN(v,t)}s=A.aM(new C.aBz(s),!1,t,x.z)
A.K(d,!1).ak(s)},
t(d){var w=null
return A.bH(A.bQ(A.b([D.agK],x.p),w,w,w,w,w,w,w,w,D.c5t,w,w),w,new A.bl(new C.aBD(this),new C.aBE(this),B.bQ,w,x.W),w,w)}}
C.tJ.prototype={
t(d){var w=null,v=A.b([I.uQ(A.j(this.c,w,w,w,w,D.cd8,w,w,w),B.h_),A.j(this.d,2,w,w,w,B.dE,w,w,w)],x.p),u=this.e
if(u.length!==0)v.push(A.j(u,1,w,w,w,B.dZ,w,w,w))
return A.aV(new A.I(B.e6,A.P(v,B.Y,B.cD,B.t,0,B.x),w),w,w,w,w)}}
C.uN.prototype={
DT(d,e){var w=null,v=A.cI(A.j(d,w,w,w,w,w,w,w,w),w,130),u=e==null,t=u?w:B.o.aA(A.ah(e))
return new A.I(K.oA,A.ap(A.b([v,new A.td(t,18,w,w),B.bq,A.j(u?"-":A.f(e),w,w,w,w,B.a3,w,w,w)],x.p),B.A,B.r,B.t,0,w),w)},
t(d){var w=null
return A.bH(A.bQ(A.b([D.agG],x.p),w,w,w,w,w,w,w,w,D.c_1,w,w),w,new A.bl(new C.azj(this),new C.azk(this),A.b([new A.ca("notifications","user_id",A.ek())],x.k),w,x.W),w,w)}}
C.mn.prototype={
t(d){return new A.bl(new C.avb(this),new C.avc(this),A.b([new A.ca("guest_requests","place_id",this.c)],x.k),null,x.w)}}
var z=a.updateTypes(["kZ()","ab<@>()"])
C.aBz.prototype={
$1(d){var w=this.a.a
w.toString
return w},
$S:19}
C.aBD.prototype={
$0(){return C.a0y(this.a.c)},
$S:60}
C.aBE.prototype={
$3(a3,a4,a5){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e=null,d="recommended",a0=" in the last 7 days",a1="avg_price",a2="town_avg_price"
if(a4==null)return G.vM
w=a4.h(0,"tips")
if(w==null)w=B.aJ
v=A.aC(w,!0,x.N)
u=a4.h(0,"occupancy_30")
if(u==null)u=0
t=a4.h(0,"town_occupancy_30")
w=J.d(a4.h(0,d),!0)?B.CY:B.aj
s=J.d(a4.h(0,d),!0)?B.m1:D.ac8
s=A.bi(s,J.d(a4.h(0,d),!0)?B.Da:B.V,e,32)
r=A.j(J.d(a4.h(0,d),!0)?"You are on the Recommended list":"Not on the Recommended list yet",e,e,e,e,B.a3,e,e,e)
w=A.aV(A.aJ(!1,e,e,e,!0,e,e,e,!0,e,s,e,e,e,e,e,e,!1,e,e,e,e,e,A.j(J.d(a4.h(0,d),!0)?"Keep rooms clean and answer guests fast to stay there.":"You need "+A.f(a4.h(0,"need_for_recommended"))+" more good rating(s) (4 or 5 stars).",e,e,e,e,e,e,e,e),e,r,e,e,e),e,w,e,e)
s=a4.h(0,"views_30")
s=A.f(s==null?0:s)
r=a4.h(0,"views_7")
r=A.f(r==null?0:r)
q=a4.h(0,"bookings_30")
q=A.f(q==null?0:q)
p=a4.h(0,"bookings_7")
p=A.f(p==null?0:p)
o=A.f(u)
n=t==null?"":"town average "+A.f(t)+"%"
m=a4.h(0,a1)==null?"-":A.aU(a4.h(0,a1))
l=a4.h(0,a2)==null?"":"town average "+A.aU(a4.h(0,a2))
k=a4.h(0,"overall")==null?"-":A.f(a4.h(0,"overall"))+"\u2605"
j=a4.h(0,"ratings")
j=A.f(j==null?0:j)
i=a4.h(0,"service")==null?"-":A.f(a4.h(0,"service"))+"\u2605"
h=x.p
h=A.b([w,D.bWw,H.EQ(1.35,A.b([new C.tJ(s,"travellers looked at your place",r+a0,e),new C.tJ(q,"bookings",p+a0,e),new C.tJ(o+"%","rooms full",n,e),new C.tJ(m,"your average price",l,e),new C.tJ(k,"private guest rating",j+" rating(s)",e),new C.tJ(i,"service rate","only you see this",e)],h),8,8,170,B.ec,!0),D.bWc],h)
for(w=this.a,g=0;g<v.length;g=f){f=g+1
h.push(new A.c3(e,e,e,B.b1,A.aJ(!1,e,e,e,!0,e,e,e,!0,e,A.fR(B.V,A.j(""+f,e,e,e,e,D.cd2,e,e,e),14),e,e,e,e,e,new C.aBA(w,a3,v,g),!1,e,e,e,e,e,e,e,A.j(v[g],e,e,e,e,e,e,e,e),e,B.by,e),e))}h.push(B.S)
h.push(A.c9(B.xb,D.c41,new C.aBB(w,a3),e))
h.push(B.S)
h.push(D.c3h)
return A.mO(A.bg(h,e,B.aM,e,B.Q,!1),new C.aBC(a5))},
$S:151}
C.aBC.prototype={
$0(){var w=0,v=A.o(x.H),u,t=this
var $async$$0=A.k(function(d,e){if(d===1)return A.l(e,v)
for(;;)switch(w){case 0:u=t.a.$0()
w=1
break
case 1:return A.m(u,v)}})
return A.n($async$$0,v)},
$S:1}
C.aBA.prototype={
$0(){var w=this
return w.a.at6(w.b,w.c[w.d])},
$S:0}
C.aBB.prototype={
$0(){var w=this.a
return A.bSX(this.b,w.d,y.b+w.c)},
$S:0}
C.azj.prototype={
$0(){return C.arl(this.a.c)},
$S:60}
C.azk.prototype={
$3(a0,a1,a2){var w,v,u,t,s,r,q,p,o,n,m,l,k=null,j="overall",i="clean",h="service",g="comfort",f="value",e="avg_fix_minutes",d="disliked"
if(a1==null)return G.vM
w=a1.h(0,"items")
if(w==null)w=B.aJ
v=A.aC(w,!0,x.P)
w=a1.h(0,"count")
w=A.f(w==null?0:w)
u=a1.h(0,"happy_pct")
w=A.j(w+" rating(s) \xb7 "+A.f(u==null?"-":u)+"% happy guests",k,k,k,k,B.bL,k,k,k)
u=this.a
t=u.DT("Overall",a1.h(0,j))
s=u.DT("Clean",a1.h(0,i))
r=u.DT("Service rate",a1.h(0,h))
q=u.DT("Comfort",a1.h(0,g))
u=u.DT("Value for money",a1.h(0,f))
p=a1.h(0,"complaints_90")
p=A.f(p==null?0:p)
o=a1.h(0,e)==null?"":" \xb7 fixed in "+A.f(a1.h(0,e))+" min on average"
n=x.p
o=A.aV(new A.I(B.cc,A.P(A.b([w,B.S,t,s,r,q,u,B.jZ,A.j("Complaints (last 90 days): "+p+o,k,k,k,k,k,k,k,k)],n),B.Y,B.r,B.t,0,B.x),k),k,k,k,k)
p=v.length
o=A.b([D.bVY,B.ah,o,new A.c6("What guests said ("+p+")",k,k)],n)
if(p===0)o.push(D.c7p)
for(w=x.s,m=0;m<p;++m){l=v[m]
u=l.h(0,j)
u=J.CW(u==null?5:u,2)?B.b4:k
t=A.hf(l.h(0,j))
s=l.h(0,"guest")
s=A.f(s==null?"Guest":s)
t=A.b([A.ap(A.b([new A.td(t,18,k,k),B.bq,new A.cN(1,B.aU,A.j(s+(l.h(0,"room")==null?"":" \xb7 "+A.f(l.h(0,"room"))),k,k,k,k,B.a3,k,k,k),k),A.j(A.av(l.h(0,"at")),k,k,k,k,B.ay,k,k,k)],n),B.A,B.r,B.t,0,k)],n)
if(l.h(0,"liked")!=null)B.i.G(t,A.b([B.aD,A.ap(A.b([D.ag8,B.cs,new A.cN(1,B.aU,A.j(l.h(0,"liked"),k,k,k,k,k,k,k,k),k)],n),B.Y,B.r,B.t,0,k)],n))
if(l.h(0,d)!=null)B.i.G(t,A.b([B.aD,A.ap(A.b([D.afu,B.cs,new A.cN(1,B.aU,A.j(l.h(0,d),k,k,k,k,L.AB,k,k,k),k)],n),B.Y,B.r,B.t,0,k)],n))
if(l.h(0,i)!=null||l.h(0,h)!=null){s=A.b([],w)
if(l.h(0,i)!=null)s.push("clean "+A.f(l.h(0,i)))
if(l.h(0,h)!=null)s.push("service "+A.f(l.h(0,h)))
if(l.h(0,g)!=null)s.push("comfort "+A.f(l.h(0,g)))
if(l.h(0,f)!=null)s.push("value "+A.f(l.h(0,f)))
t.push(new A.I(B.dM,A.j(B.i.aK(s," \xb7 "),k,k,k,k,B.ay,k,k,k),k))}o.push(new A.c3(u,k,k,B.b1,new A.I(B.aA,A.P(t,B.Y,B.r,B.t,0,B.x),k),k))}return A.bg(o,k,B.aM,k,B.Q,!1)},
$S:101}
C.avb.prototype={
$0(){return C.a0B(this.a.c,!1)},
$S:13}
C.avc.prototype={
$3(a5,a6,a7){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f=null,e="Guest orders",d="Complaints & requests",a0="To attend",a1="Being fixed",a2=this.a,a3=J.d0(a6,new C.auZ(a2)),a4=A.O(a3,a3.$ti.i("A.E"))
a3=A.ad(a4).i("ai<1>")
w=a3.i("A.E")
v=A.O(new A.ai(a4,new C.av_(),a3),w)
B.i.e7(v,new C.av0())
u=A.O(new A.ai(a4,new C.av3(),a3),w)
B.i.e7(u,new C.av4())
t=A.O(new A.ai(a4,new C.av5(),a3),w)
B.i.e7(t,new C.av6())
s=new A.ai(u,A.coK(),A.ad(u).i("ai<1>")).gu(0)
w=Date.now()
r=A.b_("yyyy-MM-dd").O(new A.an(w,0,!1))
w=A.ad(t)
q=new A.ai(t,new C.av7(r),w.i("ai<1>")).gu(0)
p=x.t
o=p.i("ai<A.E>")
n=A.O(new A.ai(new A.du(new A.aw(t,F.coJ(),w.i("aw<1,y?>")),p),new C.av8(),o),o.i("A.E"))
m=n.length===0?f:B.o.aA(B.i.ik(n,new C.av9())/n.length)
l=new C.avd(a7)
w=a2.d
p=A.j(w?e:d,f,f,f,f,f,f,f,f)
o=w?e:d
k=B.yK.h(0,w?"orders":"requests")
k.toString
j=x.p
k=A.b([A.nG(o,k)],j)
o=w?"New":a0
i=v.length
h=w?"Being prepared":a1
h=A.b([new A.bx(o+" "+i,B.aC,B.aS,f),new A.bx(h+" "+u.length,B.U,B.aj,f)],j)
if(w)h.push(new A.bx("Today "+A.aU(new A.ai(a4,new C.ava(r),a3).dF(0,0,new C.av1())),B.U,B.aj,f))
if(s>0)h.push(new A.bx("Late "+s,B.Z,B.b4,f))
h.push(new A.bx("Done today "+q,B.U,B.aj,f))
if(m!=null)h.push(new A.bx("Average fix "+A.bK5(m),B.aH,B.e4,f))
a3=A.bP(B.ab,h,B.ag,4,6)
o=w?"New":a0
o=A.lY(o+" ("+v.length+")")
i=w?"Preparing":a1
i=A.lY(i+" ("+u.length+")")
h=w?"Delivered":"Attended"
p=A.bQ(k,f,f,new A.As(A.P(A.b([new A.I(B.el,a3,f),A.Hm(f,f,!1,f,f,f,f,A.b([o,i,A.lY(h+" ("+t.length+")")],j))],j),B.A,B.r,B.t,0,B.x),D.bZ8,f),f,f,f,f,f,p,f,f)
h=A.b([],j)
if(!w)h.push(A.aV(new A.I(B.aA,A.P(A.b([D.c1e,A.dj(D.m4,D.c_8,new C.av2(a2,a5),f)],j),B.Y,B.r,B.t,0,B.x),f),f,B.aj,D.a9h,f))
if(v.length===0)h.push(new A.cA(B.kk,w?"No new orders.":"Nothing to attend. Well done!",f,f))
for(a2=v.length,g=0;g<v.length;v.length===a2||(0,A.G)(v),++g)h.push(new A.I(B.el,new F.AF(v[g],a7,f),f))
a2=A.bg(h,f,B.a0,f,B.Q,!1)
a3=l.$2(u,w?"No orders being prepared.":"Nothing being fixed right now.")
return A.uC(A.bH(p,f,A.wv(A.b([a2,a3,l.$2(t,w?"No orders delivered in the last 30 days.":"Nothing attended in the last 30 days.")],j)),f,f),0,3)},
$S:975}
C.auZ.prototype={
$1(d){return this.a.d?J.d(d.h(0,"kind"),"order"):!J.d(d.h(0,"kind"),"order")},
$S:3}
C.av_.prototype={
$1(d){return J.d(d.h(0,"status"),"open")},
$S:3}
C.av0.prototype={
$2(d,e){var w="created_at"
return J.h3(d.h(0,w),e.h(0,w))},
$S:48}
C.av3.prototype={
$1(d){return J.d(d.h(0,"status"),"working")},
$S:3}
C.av4.prototype={
$2(d,e){var w=A.xx(e)?1:0
return w-(A.xx(d)?1:0)},
$S:48}
C.av5.prototype={
$1(d){return J.d(d.h(0,"status"),"done")||J.d(d.h(0,"status"),"cancelled")},
$S:3}
C.av6.prototype={
$2(d,e){var w,v="updated_at",u=e.h(0,"done_at")
if(u==null)u=e.h(0,v)
w=d.h(0,"done_at")
return J.h3(u,w==null?d.h(0,v):w)},
$S:48}
C.av7.prototype={
$1(d){var w
if(d.h(0,"done_at")!=null){w=A.bJ(d.h(0,"done_at")).eQ()
w=A.b_("yyyy-MM-dd").O(w)===this.a}else w=!1
return w},
$S:3}
C.av8.prototype={
$1(d){return d>=0},
$S:97}
C.av9.prototype={
$2(d,e){return d+e},
$S:212}
C.avd.prototype={
$2(d,e){var w,v,u,t,s=null
if(d.length===0)w=new A.cA(B.kk,e,s,s)
else{w=A.b([],x.p)
for(v=d.length,u=this.a,t=0;t<d.length;d.length===v||(0,A.G)(d),++t)w.push(new F.AF(d[t],u,s))
w=A.bg(w,s,B.aA,s,B.Q,!1)}return w},
$S:976}
C.ava.prototype={
$1(d){var w=A.bJ(d.h(0,"created_at")).eQ()
return A.b_("yyyy-MM-dd").O(w)===this.a&&!J.d(d.h(0,"status"),"cancelled")},
$S:3}
C.av1.prototype={
$2(d,e){var w=e.h(0,"total_nad")
return d+A.au(w==null?0:w)},
$S:51}
C.av2.prototype={
$0(){return A.Kl(this.b,C.coI(),new C.auY(this.a),x.z)},
$S:0}
C.auY.prototype={
$0(){A.kt("repairs")
return M.ceo(this.a.c)},
$S:z+0};(function installTearOffs(){var w=a._static_0
w(C,"coI","cja",1)})();(function inheritance(){var w=a.inheritMany
w(A.a2,[C.r8,C.tJ,C.uN,C.mn])
w(A.h5,[C.aBz,C.aBE,C.azk,C.avc,C.auZ,C.av_,C.av3,C.av5,C.av7,C.av8,C.ava])
w(A.j9,[C.aBD,C.aBC,C.aBA,C.aBB,C.azj,C.avb,C.av2,C.auY])
w(A.k2,[C.av0,C.av4,C.av6,C.av9,C.avd,C.av1])})()
A.ks(b.typeUniverse,JSON.parse('{"r8":{"a2":[],"i":[]},"uN":{"a2":[],"i":[]},"tJ":{"a2":[],"i":[]},"mn":{"a2":[],"i":[]}}'))
var y={b:"https://osksalote.github.io/roomnow-app/?place="}
var x=(function rtii(){var w=A.a9
return{k:w("F<ca>"),s:w("F<h>"),p:w("F<i>"),D:w("B<u<h,@>>"),w:w("bl<B<u<h,@>>>"),W:w("bl<u<h,@>?>"),P:w("u<h,@>"),N:w("h"),t:w("du<y>"),z:w("@"),h:w("u<h,@>?"),H:w("~")}})();(function constants(){var w=a.makeConstList
D.a9h=new A.aa(12,12,12,0)
D.ac8=new A.a0(57900,"MaterialIcons",!1)
D.m4=new A.a6(N.kh,null,null,null,null)
D.acZ=new A.a0(58969,"MaterialIcons",!1)
D.afu=new A.a6(D.acZ,16,B.Z,null,null)
D.ad_=new A.a0(58972,"MaterialIcons",!1)
D.ag8=new A.a6(D.ad_,16,B.U,null,null)
D.agG=new A.hP("Guest feedback","What guests said after their stay. Only you see it, not other guests.",null)
D.agK=new A.hP("Grow my business","How many people looked at your place and booked, compared with the town. Tips to get more guests.",null)
D.c_s=new A.p("Only you, your manager and the guest see this. Not the public, not other guesthouses.",B.a_1,null,null,null,null)
D.ab0=new A.cN(1,B.aU,D.c_s,null)
D.bjh=w([B.FT,B.cs,D.ab0],x.p)
D.bVY=new A.o3(B.bo,B.r,B.t,B.A,null,B.x,null,0,D.bjh,null)
D.bWc=new A.c6("What to do now",null,null)
D.bWw=new A.c6("Last 30 days",null,null)
D.bZ8=new A.L(1/0,96)
D.c_1=new A.p("Guest feedback (private)",null,null,null,null,null)
D.c_8=new A.p("Open the Repairs list",null,null,null,null,null)
D.c1e=new A.p("What guests report during their stay: things not working and damage. Orders are on their own list. Answer fast and tell the guest how long it will take. Repairs also go on the Repairs list, where you choose who fixes them and record the cost.",B.hq,null,null,null,null)
D.c3h=new A.p("Fair for everyone: NamStay changes the order of guesthouses every day, and places with fewer recent bookings are shown first. Good private ratings put you on the Recommended list. Your numbers are private: only you and your manager see them.",B.ay,null,null,null,null)
D.c41=new A.p("Share my NamStay link",null,null,null,null,null)
D.c5t=new A.p("Grow my business",null,null,null,null,null)
D.c7p=new A.p("No feedback yet. Guests are asked for it when they check out.",B.a8,null,null,null,null)
D.cd2=new A.H(!0,B.L,null,null,null,null,13,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.cd8=new A.H(!0,B.V,null,null,null,null,24,B.al,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)})()};
(a=>{a["8fqAqMJ4Rr1TeqJqDrkrt7kgK5U="]=a.current})($__dart_deferred_initializers__);
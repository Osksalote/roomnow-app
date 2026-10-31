((a,b)=>{a[b]=a[b]||{}})(self,"$__dart_deferred_initializers__")
$__dart_deferred_initializers__.current=function(a,b,c,$){var J,A,F,D={
aon(d){var x=0,w=A.n(y.o),v,u,t,s,r,q,p,o,n,m
var $async$aon=A.j(function(e,f){if(e===1)return A.k(f,w)
for(;;)switch(x){case 0:m=d.h(0,"places")
if(m==null){m=y.b
m=A.D(m,m)}u=A.cX(y.B.a(m),y.w,y.b)
x=3
return A.d(E.a0o(A.bT(u.h(0,"logo_path"))),$async$aon)
case 3:t=f
s=F.m.aL(A.bJ(d.h(0,"check_out")).cA(A.bJ(d.h(0,"check_in"))).a,864e8)
m=d.h(0,"total_nad")
r=A.ar(m==null?0:m)
m=d.h(0,"paid_nad")
q=A.ar(m==null?0:m)
p=s===0?r:r/s
m=u.h(0,"vat_number")
o=F.o.ap(J.aL(m==null?"":m))
n=B.uB("Invoice "+A.e(d.h(0,"ref")))
m=B.aK6(!1,G.oC,null,C.hV,null,null)
n.qg(new B.rC(m,new D.bLB(u,o,t,q,r,d,s,p)))
v=n.fF()
x=1
break
case 1:return A.l(v,w)}})
return A.m($async$aon,w)},
bLB:function bLB(d,e,f,g,h,i,j,k){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h
_.f=i
_.r=j
_.w=k},
bLA:function bLA(){}},E,B,C,G
J=c[1]
A=c[0]
F=c[2]
D=a.updateHolder(c[10],D)
E=c[12]
B=c[11]
C=c[40]
G=c[39]
var z=a.updateTypes(["oU(is)"])
D.bLB.prototype={
$1(d){var x,w,v,u,t,s,r,q,p,o,n=this,m="legal_name",l=null,k="name",j="guest_phone",i="guest_country",h="#,##0.00",g="invoice_note",f=n.a,e=f.h(0,m)
if(e==null)e=f.h(0,k)
x=y.u
e=A.b([B.bB(J.aL(e==null?"":e),B.dv(l,l,l,l,l,l,l,l,l,C.b0,l,l,18,l,C.b9,l,!0,l,l,l,l),l,l)],x)
if(f.h(0,m)!=null){w=f.h(0,k)
e.push(B.bB(J.aL(w==null?"":w),l,l,l))}w=f.h(0,"address")
v=f.h(0,"towns")
w=[w,v==null?l:J.u(v,k),"Namibia"]
e.push(B.bB(new A.ak(w,new D.bLA(),A.ae(w).i("ak<1>")).aK(0,", "),l,l,l))
if(f.h(0,"phone")!=null)e.push(B.bB("Tel "+A.e(f.h(0,"phone")),l,l,l))
w=n.b
v=w.length!==0
if(v)e.push(B.bB("VAT no. "+w,l,l,l))
e=A.b([E.ayC(E.y9(e,C.hD))],x)
w=n.c
if(w!=null)e.push(new B.ND(B.bWv(w),C.C0,90,90))
e=E.aR2(e,C.hD)
w=n.d
u=n.e
if(w>=u)t=v?"TAX INVOICE / RECEIPT":"INVOICE / RECEIPT"
else t=v?"TAX INVOICE":"INVOICE"
t=B.bB(t,B.dv(l,B.FX("#0E6A6C"),l,l,l,l,l,l,l,C.b0,l,l,16,l,C.b9,l,!0,l,l,l,l),l,l)
s=n.f
r=B.bB("Invoice no. "+A.e(s.h(0,"ref")),l,l,l)
q=s.h(0,"confirmed_at")
q=B.bB("Date "+B.m9(q==null?s.h(0,"created_at"):q),l,l,l)
p=s.h(0,"guest_name")
p=A.e(p==null?"":p)
o=s.h(0,j)==null?"":"  \xb7  "+A.e(s.h(0,j))
o=A.b([e,new B.dO(l,24,l),t,new B.dO(l,8,l),r,q,new B.dO(l,12,l),B.bB("Bill to: "+p+o,l,l,l)],x)
if(s.h(0,i)!=null)o.push(B.bB("Country: "+A.e(s.h(0,i)),l,l,l))
o.push(new B.dO(l,18,l))
e=s.h(0,"rooms")
e=e==null?l:J.u(e,k)
e=A.b([[A.e(e==null?"Room":e)+" \xb7 "+B.m9(s.h(0,"check_in"))+" to "+B.m9(s.h(0,"check_out")),""+n.r,"N$ "+A.aX(h).O(n.w),"N$ "+A.aX(h).O(u)]],y.r)
t=B.dv(l,l,l,l,l,l,l,l,l,C.b0,l,l,l,l,C.b9,l,!0,l,l,l,l)
o.push(B.te(C.Zj,A.I([1,C.ew,2,C.ew,3,C.ew],y.e,y.k),l,e,1,t,["Description","Nights","Rate","Amount"]))
o.push(new B.dO(l,12,l))
x=A.b([],x)
if(v)F.h.I(x,E.c0K(u,11))
e=v?"Total incl. VAT "+("N$ "+A.aX(h).O(u)):"Total "+("N$ "+A.aX(h).O(u))
x.push(B.bB(e,B.dv(l,l,l,l,l,l,l,l,l,C.b0,l,l,13,l,C.b9,l,!0,l,l,l,l),l,l))
x.push(B.bB("Paid "+("N$ "+A.aX(h).O(w)),l,l,l))
if(u>w)x.push(B.bB("Still to pay "+("N$ "+A.aX(h).O(u-w)),B.dv(l,l,l,l,l,l,l,l,l,C.b0,l,l,l,l,C.b9,l,!0,l,l,l,l),l,l))
o.push(new B.u4(C.ew,l,l,E.y9(x,C.Dp)))
o.push(E.bPe())
e=f.h(0,g)
if(J.aL(e==null?"":e).length!==0)o.push(B.bB(J.aL(f.h(0,g)),l,l,l))
o.push(new B.dO(l,6,l))
o.push(B.bB("Made with NamStay",G.ZV,l,l))
return E.y9(o,C.hD)},
$S:z+0}
D.bLA.prototype={
$1(d){return d!=null},
$S:58};(function inheritance(){var x=a.inheritMany
x(A.h6,[D.bLB,D.bLA])})()
var y={k:A.aa("u5"),r:A.aa("E<A<@>>"),u:A.aa("E<dn>"),B:A.aa("r<@,@>"),w:A.aa("f"),o:A.aa("ep"),b:A.aa("@"),e:A.aa("x")}};
(a=>{a["CNI5N7ZQZQy27a+QKUxI4HxuEHk="]=a.current})($__dart_deferred_initializers__);
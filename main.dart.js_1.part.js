((a,b)=>{a[b]=a[b]||{}})(self,"$__dart_deferred_initializers__")
$__dart_deferred_initializers__.current=function(a,b,c,$){var J,A,F,D={
aoo(d){var x=0,w=A.n(y.o),v,u,t,s,r,q,p,o,n,m
var $async$aoo=A.j(function(e,f){if(e===1)return A.k(f,w)
for(;;)switch(x){case 0:m=d.h(0,"places")
if(m==null){m=y.b
m=A.E(m,m)}u=A.cX(y.B.a(m),y.w,y.b)
x=3
return A.d(E.a0r(A.bS(u.h(0,"logo_path"))),$async$aoo)
case 3:t=f
s=F.n.aL(A.bI(d.h(0,"check_out")).cA(A.bI(d.h(0,"check_in"))).a,864e8)
m=d.h(0,"total_nad")
r=A.ar(m==null?0:m)
m=d.h(0,"paid_nad")
q=A.ar(m==null?0:m)
p=s===0?r:r/s
m=u.h(0,"vat_number")
o=F.p.ap(J.aN(m==null?"":m))
n=B.uD("Invoice "+A.e(d.h(0,"ref")))
m=B.aK8(!1,G.oB,null,C.hX,null,null)
n.qg(new B.rD(m,new D.bLN(u,o,t,q,r,d,s,p)))
v=n.fF()
x=1
break
case 1:return A.l(v,w)}})
return A.m($async$aoo,w)},
bLN:function bLN(d,e,f,g,h,i,j,k){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h
_.f=i
_.r=j
_.w=k},
bLM:function bLM(){}},E,B,C,G
J=c[1]
A=c[0]
F=c[2]
D=a.updateHolder(c[10],D)
E=c[12]
B=c[11]
C=c[39]
G=c[38]
var z=a.updateTypes(["oT(iq)"])
D.bLN.prototype={
$1(d){var x,w,v,u,t,s,r,q,p,o,n=this,m="legal_name",l=null,k="name",j="guest_phone",i="guest_country",h="#,##0.00",g="invoice_note",f=n.a,e=f.h(0,m)
if(e==null)e=f.h(0,k)
x=y.u
e=A.b([B.bA(J.aN(e==null?"":e),B.du(l,l,l,l,l,l,l,l,l,C.b1,l,l,18,l,C.b9,l,!0,l,l,l,l),l,l)],x)
if(f.h(0,m)!=null){w=f.h(0,k)
e.push(B.bA(J.aN(w==null?"":w),l,l,l))}w=f.h(0,"address")
v=f.h(0,"towns")
w=[w,v==null?l:J.v(v,k),"Namibia"]
e.push(B.bA(new A.aj(w,new D.bLM(),A.ad(w).i("aj<1>")).aK(0,", "),l,l,l))
if(f.h(0,"phone")!=null)e.push(B.bA("Tel "+A.e(f.h(0,"phone")),l,l,l))
w=n.b
v=w.length!==0
if(v)e.push(B.bA("VAT no. "+w,l,l,l))
e=A.b([E.ayD(E.ya(e,C.hF))],x)
w=n.c
if(w!=null)e.push(new B.NE(B.bWH(w),C.BW,90,90))
e=E.aR4(e,C.hF)
w=n.d
u=n.e
if(w>=u)t=v?"TAX INVOICE / RECEIPT":"INVOICE / RECEIPT"
else t=v?"TAX INVOICE":"INVOICE"
t=B.bA(t,B.du(l,B.FX("#0E6A6C"),l,l,l,l,l,l,l,C.b1,l,l,16,l,C.b9,l,!0,l,l,l,l),l,l)
s=n.f
r=B.bA("Invoice no. "+A.e(s.h(0,"ref")),l,l,l)
q=s.h(0,"confirmed_at")
q=B.bA("Date "+B.m9(q==null?s.h(0,"created_at"):q),l,l,l)
p=s.h(0,"guest_name")
p=A.e(p==null?"":p)
o=s.h(0,j)==null?"":"  \xb7  "+A.e(s.h(0,j))
o=A.b([e,new B.dN(l,24,l),t,new B.dN(l,8,l),r,q,new B.dN(l,12,l),B.bA("Bill to: "+p+o,l,l,l)],x)
if(s.h(0,i)!=null)o.push(B.bA("Country: "+A.e(s.h(0,i)),l,l,l))
o.push(new B.dN(l,18,l))
e=s.h(0,"rooms")
e=e==null?l:J.v(e,k)
e=A.b([[A.e(e==null?"Room":e)+" \xb7 "+B.m9(s.h(0,"check_in"))+" to "+B.m9(s.h(0,"check_out")),""+n.r,"N$ "+A.aX(h).O(n.w),"N$ "+A.aX(h).O(u)]],y.r)
t=B.du(l,l,l,l,l,l,l,l,l,C.b1,l,l,l,l,C.b9,l,!0,l,l,l,l)
o.push(B.tf(C.Zx,A.J([1,C.ey,2,C.ey,3,C.ey],y.e,y.k),l,e,1,t,["Description","Nights","Rate","Amount"]))
o.push(new B.dN(l,12,l))
x=A.b([],x)
if(v)F.h.I(x,E.c0W(u,11))
e=v?"Total incl. VAT "+("N$ "+A.aX(h).O(u)):"Total "+("N$ "+A.aX(h).O(u))
x.push(B.bA(e,B.du(l,l,l,l,l,l,l,l,l,C.b1,l,l,13,l,C.b9,l,!0,l,l,l,l),l,l))
x.push(B.bA("Paid "+("N$ "+A.aX(h).O(w)),l,l,l))
if(u>w)x.push(B.bA("Still to pay "+("N$ "+A.aX(h).O(u-w)),B.du(l,l,l,l,l,l,l,l,l,C.b1,l,l,l,l,C.b9,l,!0,l,l,l,l),l,l))
o.push(new B.u6(C.ey,l,l,E.ya(x,C.Dk)))
o.push(E.bPp())
e=f.h(0,g)
if(J.aN(e==null?"":e).length!==0)o.push(B.bA(J.aN(f.h(0,g)),l,l,l))
o.push(new B.dN(l,6,l))
o.push(B.bA("Made with NamStay",G.a_8,l,l))
return E.ya(o,C.hF)},
$S:z+0}
D.bLM.prototype={
$1(d){return d!=null},
$S:58};(function inheritance(){var x=a.inheritMany
x(A.h4,[D.bLN,D.bLM])})()
var y={k:A.a9("u7"),r:A.a9("F<B<@>>"),u:A.a9("F<dm>"),B:A.a9("u<@,@>"),w:A.a9("f"),o:A.a9("eo"),b:A.a9("@"),e:A.a9("y")}};
(a=>{a["AbhWd39x0FmUEynp5C9uwzupCkw="]=a.current})($__dart_deferred_initializers__);
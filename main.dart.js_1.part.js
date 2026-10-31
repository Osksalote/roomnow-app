((a,b)=>{a[b]=a[b]||{}})(self,"$__dart_deferred_initializers__")
$__dart_deferred_initializers__.current=function(a,b,c,$){var J,A,F,D={
aou(d){var x=0,w=A.o(y.o),v,u,t,s,r,q,p,o,n,m
var $async$aou=A.k(function(e,f){if(e===1)return A.l(f,w)
for(;;)switch(x){case 0:m=d.h(0,"places")
if(m==null){m=y.b
m=A.E(m,m)}u=A.cX(y.B.a(m),y.w,y.b)
x=3
return A.e(E.a0x(A.bS(u.h(0,"logo_path"))),$async$aou)
case 3:t=f
s=F.n.aM(A.bJ(d.h(0,"check_out")).cw(A.bJ(d.h(0,"check_in"))).a,864e8)
m=d.h(0,"total_nad")
r=A.au(m==null?0:m)
m=d.h(0,"paid_nad")
q=A.au(m==null?0:m)
p=s===0?r:r/s
m=u.h(0,"vat_number")
o=F.p.al(J.aL(m==null?"":m))
n=B.uF("Invoice "+A.f(d.h(0,"ref")))
m=B.aKf(!1,G.oE,null,C.hX,null,null)
n.qi(new B.rE(m,new D.bN1(u,o,t,q,r,d,s,p)))
v=n.fG()
x=1
break
case 1:return A.m(v,w)}})
return A.n($async$aou,w)},
bN1:function bN1(d,e,f,g,h,i,j,k){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h
_.f=i
_.r=j
_.w=k},
bN0:function bN0(){}},E,B,C,G
J=c[1]
A=c[0]
F=c[2]
D=a.updateHolder(c[10],D)
E=c[12]
B=c[11]
C=c[39]
G=c[38]
var z=a.updateTypes(["oV(ir)"])
D.bN1.prototype={
$1(d){var x,w,v,u,t,s,r,q,p,o,n=this,m="legal_name",l=null,k="name",j="guest_phone",i="guest_country",h="#,##0.00",g="invoice_note",f=n.a,e=f.h(0,m)
if(e==null)e=f.h(0,k)
x=y.u
e=A.b([B.bC(J.aL(e==null?"":e),B.dx(l,l,l,l,l,l,l,l,l,C.b2,l,l,18,l,C.ba,l,!0,l,l,l,l),l,l)],x)
if(f.h(0,m)!=null){w=f.h(0,k)
e.push(B.bC(J.aL(w==null?"":w),l,l,l))}w=f.h(0,"address")
v=f.h(0,"towns")
w=[w,v==null?l:J.v(v,k),"Namibia"]
e.push(B.bC(new A.ai(w,new D.bN0(),A.ad(w).i("ai<1>")).aK(0,", "),l,l,l))
if(f.h(0,"phone")!=null)e.push(B.bC("Tel "+A.f(f.h(0,"phone")),l,l,l))
w=n.b
v=w.length!==0
if(v)e.push(B.bC("VAT no. "+w,l,l,l))
e=A.b([E.ayK(E.yf(e,C.hG))],x)
w=n.c
if(w!=null)e.push(new B.NJ(B.bY2(w),C.C0,90,90))
e=E.aRb(e,C.hG)
w=n.d
u=n.e
if(w>=u)t=v?"TAX INVOICE / RECEIPT":"INVOICE / RECEIPT"
else t=v?"TAX INVOICE":"INVOICE"
t=B.bC(t,B.dx(l,B.G1("#0E6A6C"),l,l,l,l,l,l,l,C.b2,l,l,16,l,C.ba,l,!0,l,l,l,l),l,l)
s=n.f
r=B.bC("Invoice no. "+A.f(s.h(0,"ref")),l,l,l)
q=s.h(0,"confirmed_at")
q=B.bC("Date "+B.ma(q==null?s.h(0,"created_at"):q),l,l,l)
p=s.h(0,"guest_name")
p=A.f(p==null?"":p)
o=s.h(0,j)==null?"":"  \xb7  "+A.f(s.h(0,j))
o=A.b([e,new B.dO(l,24,l),t,new B.dO(l,8,l),r,q,new B.dO(l,12,l),B.bC("Bill to: "+p+o,l,l,l)],x)
if(s.h(0,i)!=null)o.push(B.bC("Country: "+A.f(s.h(0,i)),l,l,l))
o.push(new B.dO(l,18,l))
e=s.h(0,"rooms")
e=e==null?l:J.v(e,k)
e=A.b([[A.f(e==null?"Room":e)+" \xb7 "+B.ma(s.h(0,"check_in"))+" to "+B.ma(s.h(0,"check_out")),""+n.r,"N$ "+A.aW(h).O(n.w),"N$ "+A.aW(h).O(u)]],y.r)
t=B.dx(l,l,l,l,l,l,l,l,l,C.b2,l,l,l,l,C.ba,l,!0,l,l,l,l)
o.push(B.tg(C.ZH,A.J([1,C.ey,2,C.ey,3,C.ey],y.e,y.k),l,e,1,t,["Description","Nights","Rate","Amount"]))
o.push(new B.dO(l,12,l))
x=A.b([],x)
if(v)F.i.G(x,E.c2g(u,11))
e=v?"Total incl. VAT "+("N$ "+A.aW(h).O(u)):"Total "+("N$ "+A.aW(h).O(u))
x.push(B.bC(e,B.dx(l,l,l,l,l,l,l,l,l,C.b2,l,l,13,l,C.ba,l,!0,l,l,l,l),l,l))
x.push(B.bC("Paid "+("N$ "+A.aW(h).O(w)),l,l,l))
if(u>w)x.push(B.bC("Still to pay "+("N$ "+A.aW(h).O(u-w)),B.dx(l,l,l,l,l,l,l,l,l,C.b2,l,l,l,l,C.ba,l,!0,l,l,l,l),l,l))
o.push(new B.u7(C.ey,l,l,E.yf(x,C.Dp)))
o.push(E.bQH())
e=f.h(0,g)
if(J.aL(e==null?"":e).length!==0)o.push(B.bC(J.aL(f.h(0,g)),l,l,l))
o.push(new B.dO(l,6,l))
o.push(B.bC("Made with NamStay",G.a_i,l,l))
return E.yf(o,C.hG)},
$S:z+0}
D.bN0.prototype={
$1(d){return d!=null},
$S:58};(function inheritance(){var x=a.inheritMany
x(A.h5,[D.bN1,D.bN0])})()
var y={k:A.a9("u8"),r:A.a9("F<B<@>>"),u:A.a9("F<dp>"),B:A.a9("u<@,@>"),w:A.a9("h"),o:A.a9("ep"),b:A.a9("@"),e:A.a9("y")}};
(a=>{a["6cHmbSAy5lAEMUk9AFIYRt1drvw="]=a.current})($__dart_deferred_initializers__);
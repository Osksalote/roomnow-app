((a,b)=>{a[b]=a[b]||{}})(self,"$__dart_deferred_initializers__")
$__dart_deferred_initializers__.current=function(a,b,c,$){var J,A,F,D={
bG2(d){var x=0,w=A.m(y.o),v,u,t,s,r,q,p,o,n,m
var $async$bG2=A.i(function(e,f){if(e===1)return A.j(f,w)
for(;;)switch(x){case 0:m=d.h(0,"places")
if(m==null){m=y.b
m=A.D(m,m)}u=A.dn(y.B.a(m),y.w,y.b)
x=3
return A.d(E.a_I(A.bO(u.h(0,"logo_path"))),$async$bG2)
case 3:t=f
s=F.m.aN(A.cx(d.h(0,"check_out")).d5(A.cx(d.h(0,"check_in"))).a,864e8)
m=d.h(0,"total_nad")
r=A.an(m==null?0:m)
m=d.h(0,"paid_nad")
q=A.an(m==null?0:m)
p=s===0?r:r/s
m=u.h(0,"vat_number")
o=F.o.aC(J.b7(m==null?"":m))
n=B.a28("Invoice "+A.e(d.h(0,"ref")))
m=B.bIY(!1,G.uX,null,C.qQ,null,null)
n.E9(new B.vc(m,new D.bG4(u,o,t,q,r,d,s,p)))
v=n.hF()
x=1
break
case 1:return A.k(v,w)}})
return A.l($async$bG2,w)},
bG4:function bG4(d,e,f,g,h,i,j,k){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h
_.f=i
_.r=j
_.w=k},
bG3:function bG3(){}},E,B,C,G
J=c[1]
A=c[0]
F=c[2]
D=a.updateHolder(c[10],D)
E=c[14]
B=c[11]
C=c[46]
G=c[48]
var z=a.updateTypes(["oJ(j4)"])
D.bG4.prototype={
$1(d){var x,w,v,u,t,s,r,q,p,o,n=this,m="legal_name",l=null,k="name",j="guest_phone",i="guest_country",h="#,##0.00",g="invoice_note",f=n.a,e=f.h(0,m)
if(e==null)e=f.h(0,k)
x=y.u
e=A.b([B.df(J.b7(e==null?"":e),B.i8(l,l,l,l,l,l,l,l,l,C.c8,l,l,18,l,C.ca,l,!0,l,l,l,l),l,l)],x)
if(f.h(0,m)!=null){w=f.h(0,k)
e.push(B.df(J.b7(w==null?"":w),l,l,l))}w=f.h(0,"address")
v=f.h(0,"towns")
w=[w,v==null?l:J.r(v,k),"Namibia"]
e.push(B.df(new A.as(w,new D.bG3(),A.aj(w).i("as<1>")).aS(0,", "),l,l,l))
if(f.h(0,"phone")!=null)e.push(B.df("Tel "+A.e(f.h(0,"phone")),l,l,l))
w=n.b
v=w.length!==0
if(v)e.push(B.df("VAT no. "+w,l,l,l))
e=A.b([E.bPc(E.Dv(e,C.hn))],x)
w=n.c
if(w!=null)e.push(new B.N5(B.bQQ(w),C.Bc,90,90))
e=E.bS8(e,C.hn)
w=n.d
u=n.e
if(w>=u)t=v?"TAX INVOICE / RECEIPT":"INVOICE / RECEIPT"
else t=v?"TAX INVOICE":"INVOICE"
t=B.df(t,B.i8(l,B.aIK("#0E6A6C"),l,l,l,l,l,l,l,C.c8,l,l,16,l,C.ca,l,!0,l,l,l,l),l,l)
s=n.f
r=B.df("Invoice no. "+A.e(s.h(0,"ref")),l,l,l)
q=s.h(0,"confirmed_at")
q=B.df("Date "+B.tA(q==null?s.h(0,"created_at"):q),l,l,l)
p=s.h(0,"guest_name")
p=A.e(p==null?"":p)
o=s.h(0,j)==null?"":"  \xb7  "+A.e(s.h(0,j))
o=A.b([e,new B.fF(l,24,l),t,new B.fF(l,8,l),r,q,new B.fF(l,12,l),B.df("Bill to: "+p+o,l,l,l)],x)
if(s.h(0,i)!=null)o.push(B.df("Country: "+A.e(s.h(0,i)),l,l,l))
o.push(new B.fF(l,18,l))
e=s.h(0,"rooms")
e=e==null?l:J.r(e,k)
e=A.b([[A.e(e==null?"Room":e)+" \xb7 "+B.tA(s.h(0,"check_in"))+" to "+B.tA(s.h(0,"check_out")),""+n.r,"N$ "+A.br(h).a3(n.w),"N$ "+A.br(h).a3(u)]],y.r)
t=B.i8(l,l,l,l,l,l,l,l,l,C.c8,l,l,l,l,C.ca,l,!0,l,l,l,l)
o.push(B.Rn(C.Ya,A.H([1,C.fE,2,C.fE,3,C.fE],y.e,y.k),l,e,1,t,["Description","Nights","Rate","Amount"]))
o.push(new B.fF(l,12,l))
x=A.b([B.df("Total "+("N$ "+A.br(h).a3(u)),B.i8(l,l,l,l,l,l,l,l,l,C.c8,l,l,13,l,C.ca,l,!0,l,l,l,l),l,l)],x)
if(v)x.push(B.df("Includes VAT (15%): "+("N$ "+A.br(h).a3(u*15/115)),l,l,l))
x.push(B.df("Paid "+("N$ "+A.br(h).a3(w)),l,l,l))
if(u>w)x.push(B.df("Still to pay "+("N$ "+A.br(h).a3(u-w)),B.i8(l,l,l,l,l,l,l,l,l,C.c8,l,l,l,l,C.ca,l,!0,l,l,l,l),l,l))
o.push(new B.xn(C.fE,E.Dv(x,C.Cz)))
o.push(E.bJN())
e=f.h(0,g)
if(J.b7(e==null?"":e).length!==0)o.push(B.df(J.b7(f.h(0,g)),l,l,l))
o.push(new B.fF(l,6,l))
o.push(B.df("Made with NamStay",G.YL,l,l))
return E.Dv(o,C.hn)},
$S:z+0}
D.bG3.prototype={
$1(d){return d!=null},
$S:76};(function inheritance(){var x=a.inheritMany
x(A.hm,[D.bG4,D.bG3])})()
var y={k:A.ab("tQ"),r:A.ab("E<y<@>>"),u:A.ab("E<dS>"),B:A.ab("t<@,@>"),w:A.ab("f"),o:A.ab("eL"),b:A.ab("@"),e:A.ab("w")}};
(a=>{a["L/BCcAE1IlmKrhPZkLUG1smwKA0="]=a.current})($__dart_deferred_initializers__);
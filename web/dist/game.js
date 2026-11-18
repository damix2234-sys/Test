(()=>{var Yl="160";var Gp=0,gu=1,Vp=2;var Wo=1,Wp=2,ai=3,qn=0,cn=1,Jt=2;var Ci=0,er=1,jr=2,xu=3,_u=4,Xp=5,es=100,qp=101,Yp=102,yu=103,vu=104,Zp=200,jp=201,Kp=202,$p=203,ul=204,dl=205,Jp=206,Qp=207,em=208,tm=209,nm=210,im=211,sm=212,rm=213,am=214,om=0,cm=1,lm=2,lo=3,hm=4,um=5,dm=6,fm=7,Xo=0,pm=1,mm=2,Pi=0,gm=1,xm=2,_m=3,ym=4,vm=5,Mm=6,Mu="attached",bm="detached",tf=300,ir=301,sr=302,fl=303,pl=304,qo=306,as=1e3,bn=1001,Kr=1002,Wt=1003,ho=1004;var Wr=1005;var gn=1006,Zl=1007;var Ii=1008;var Li=1009,wm=1010,Sm=1011,jl=1012,nf=1013,Ai=1014,ci=1015,$r=1016,sf=1017,rf=1018,is=1020,Em=1021,Rn=1023,Tm=1024,Am=1025,ss=1026,rr=1027,Rm=1028,af=1029,Cm=1030,of=1031,cf=1033,Lc=33776,Ic=33777,zc=33778,Dc=33779,bu=35840,wu=35841,Su=35842,Eu=35843,lf=36196,Tu=37492,Au=37496,Ru=37808,Cu=37809,Pu=37810,Lu=37811,Iu=37812,zu=37813,Du=37814,Nu=37815,Uu=37816,Ou=37817,Fu=37818,Bu=37819,ku=37820,Hu=37821,Nc=36492,Gu=36494,Vu=36495,Pm=36283,Wu=36284,Xu=36285,qu=36286,Kl=2200,$l=2201,Lm=2202,ar=2300,os=2301,Uc=2302,Ks=2400,$s=2401,uo=2402,Jl=2500,Im=2501,hf=0,Yo=1,ua=2,uf=3e3,rs=3001,zm=3200,Dm=3201,Zo=0,Nm=1,Cn="",Tt="srgb",qt="srgb-linear",Ql="display-p3",jo="display-p3-linear",fo="linear",Et="srgb",po="rec709",mo="p3";var Cs=7680;var Yu=519,Um=512,Om=513,Fm=514,df=515,Bm=516,km=517,Hm=518,Gm=519,ml=35044;var Zu="300 es",gl=1035,li=2e3,go=2001,hi=class{addEventListener(e,t){this._listeners===void 0&&(this._listeners={});let n=this._listeners;n[e]===void 0&&(n[e]=[]),n[e].indexOf(t)===-1&&n[e].push(t)}hasEventListener(e,t){if(this._listeners===void 0)return!1;let n=this._listeners;return n[e]!==void 0&&n[e].indexOf(t)!==-1}removeEventListener(e,t){if(this._listeners===void 0)return;let s=this._listeners[e];if(s!==void 0){let r=s.indexOf(t);r!==-1&&s.splice(r,1)}}dispatchEvent(e){if(this._listeners===void 0)return;let n=this._listeners[e.type];if(n!==void 0){e.target=this;let s=n.slice(0);for(let r=0,a=s.length;r<a;r++)s[r].call(this,e);e.target=null}}},rn=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"],ju=1234567,Xr=Math.PI/180,or=180/Math.PI;function Fn(){let i=Math.random()*4294967295|0,e=Math.random()*4294967295|0,t=Math.random()*4294967295|0,n=Math.random()*4294967295|0;return(rn[i&255]+rn[i>>8&255]+rn[i>>16&255]+rn[i>>24&255]+"-"+rn[e&255]+rn[e>>8&255]+"-"+rn[e>>16&15|64]+rn[e>>24&255]+"-"+rn[t&63|128]+rn[t>>8&255]+"-"+rn[t>>16&255]+rn[t>>24&255]+rn[n&255]+rn[n>>8&255]+rn[n>>16&255]+rn[n>>24&255]).toLowerCase()}function on(i,e,t){return Math.max(e,Math.min(t,i))}function eh(i,e){return(i%e+e)%e}function Vm(i,e,t,n,s){return n+(i-e)*(s-n)/(t-e)}function Wm(i,e,t){return i!==e?(t-i)/(e-i):0}function qr(i,e,t){return(1-t)*i+t*e}function Xm(i,e,t,n){return qr(i,e,1-Math.exp(-t*n))}function qm(i,e=1){return e-Math.abs(eh(i,e*2)-e)}function Ym(i,e,t){return i<=e?0:i>=t?1:(i=(i-e)/(t-e),i*i*(3-2*i))}function Zm(i,e,t){return i<=e?0:i>=t?1:(i=(i-e)/(t-e),i*i*i*(i*(i*6-15)+10))}function jm(i,e){return i+Math.floor(Math.random()*(e-i+1))}function Km(i,e){return i+Math.random()*(e-i)}function $m(i){return i*(.5-Math.random())}function Jm(i){i!==void 0&&(ju=i);let e=ju+=1831565813;return e=Math.imul(e^e>>>15,e|1),e^=e+Math.imul(e^e>>>7,e|61),((e^e>>>14)>>>0)/4294967296}function Qm(i){return i*Xr}function e0(i){return i*or}function xl(i){return(i&i-1)===0&&i!==0}function t0(i){return Math.pow(2,Math.ceil(Math.log(i)/Math.LN2))}function xo(i){return Math.pow(2,Math.floor(Math.log(i)/Math.LN2))}function n0(i,e,t,n,s){let r=Math.cos,a=Math.sin,o=r(t/2),c=a(t/2),l=r((e+n)/2),h=a((e+n)/2),u=r((e-n)/2),d=a((e-n)/2),f=r((n-e)/2),p=a((n-e)/2);switch(s){case"XYX":i.set(o*h,c*u,c*d,o*l);break;case"YZY":i.set(c*d,o*h,c*u,o*l);break;case"ZXZ":i.set(c*u,c*d,o*h,o*l);break;case"XZX":i.set(o*h,c*p,c*f,o*l);break;case"YXY":i.set(c*f,o*h,c*p,o*l);break;case"ZYZ":i.set(c*p,c*f,o*h,o*l);break;default:console.warn("THREE.MathUtils: .setQuaternionFromProperEuler() encountered an unknown order: "+s)}}function Xn(i,e){switch(e.constructor){case Float32Array:return i;case Uint32Array:return i/4294967295;case Uint16Array:return i/65535;case Uint8Array:return i/255;case Int32Array:return Math.max(i/2147483647,-1);case Int16Array:return Math.max(i/32767,-1);case Int8Array:return Math.max(i/127,-1);default:throw new Error("Invalid component type.")}}function ft(i,e){switch(e.constructor){case Float32Array:return i;case Uint32Array:return Math.round(i*4294967295);case Uint16Array:return Math.round(i*65535);case Uint8Array:return Math.round(i*255);case Int32Array:return Math.round(i*2147483647);case Int16Array:return Math.round(i*32767);case Int8Array:return Math.round(i*127);default:throw new Error("Invalid component type.")}}var _i={DEG2RAD:Xr,RAD2DEG:or,generateUUID:Fn,clamp:on,euclideanModulo:eh,mapLinear:Vm,inverseLerp:Wm,lerp:qr,damp:Xm,pingpong:qm,smoothstep:Ym,smootherstep:Zm,randInt:jm,randFloat:Km,randFloatSpread:$m,seededRandom:Jm,degToRad:Qm,radToDeg:e0,isPowerOfTwo:xl,ceilPowerOfTwo:t0,floorPowerOfTwo:xo,setQuaternionFromProperEuler:n0,normalize:ft,denormalize:Xn},ze=class i{constructor(e=0,t=0){i.prototype.isVector2=!0,this.x=e,this.y=t}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,t){return this.x=e,this.y=t,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){let t=this.x,n=this.y,s=e.elements;return this.x=s[0]*t+s[3]*n+s[6],this.y=s[1]*t+s[4]*n+s[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this}clampLength(e,t){let n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(e,Math.min(t,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){let t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;let n=this.dot(e)/t;return Math.acos(on(n,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){let t=this.x-e.x,n=this.y-e.y;return t*t+n*n}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this}rotateAround(e,t){let n=Math.cos(t),s=Math.sin(t),r=this.x-e.x,a=this.y-e.y;return this.x=r*n-a*s+e.x,this.y=r*s+a*n+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}},st=class i{constructor(e,t,n,s,r,a,o,c,l){i.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,t,n,s,r,a,o,c,l)}set(e,t,n,s,r,a,o,c,l){let h=this.elements;return h[0]=e,h[1]=s,h[2]=o,h[3]=t,h[4]=r,h[5]=c,h[6]=n,h[7]=a,h[8]=l,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){let t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],this}extractBasis(e,t,n){return e.setFromMatrix3Column(this,0),t.setFromMatrix3Column(this,1),n.setFromMatrix3Column(this,2),this}setFromMatrix4(e){let t=e.elements;return this.set(t[0],t[4],t[8],t[1],t[5],t[9],t[2],t[6],t[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){let n=e.elements,s=t.elements,r=this.elements,a=n[0],o=n[3],c=n[6],l=n[1],h=n[4],u=n[7],d=n[2],f=n[5],p=n[8],x=s[0],g=s[3],m=s[6],y=s[1],_=s[4],w=s[7],P=s[2],A=s[5],R=s[8];return r[0]=a*x+o*y+c*P,r[3]=a*g+o*_+c*A,r[6]=a*m+o*w+c*R,r[1]=l*x+h*y+u*P,r[4]=l*g+h*_+u*A,r[7]=l*m+h*w+u*R,r[2]=d*x+f*y+p*P,r[5]=d*g+f*_+p*A,r[8]=d*m+f*w+p*R,this}multiplyScalar(e){let t=this.elements;return t[0]*=e,t[3]*=e,t[6]*=e,t[1]*=e,t[4]*=e,t[7]*=e,t[2]*=e,t[5]*=e,t[8]*=e,this}determinant(){let e=this.elements,t=e[0],n=e[1],s=e[2],r=e[3],a=e[4],o=e[5],c=e[6],l=e[7],h=e[8];return t*a*h-t*o*l-n*r*h+n*o*c+s*r*l-s*a*c}invert(){let e=this.elements,t=e[0],n=e[1],s=e[2],r=e[3],a=e[4],o=e[5],c=e[6],l=e[7],h=e[8],u=h*a-o*l,d=o*c-h*r,f=l*r-a*c,p=t*u+n*d+s*f;if(p===0)return this.set(0,0,0,0,0,0,0,0,0);let x=1/p;return e[0]=u*x,e[1]=(s*l-h*n)*x,e[2]=(o*n-s*a)*x,e[3]=d*x,e[4]=(h*t-s*c)*x,e[5]=(s*r-o*t)*x,e[6]=f*x,e[7]=(n*c-l*t)*x,e[8]=(a*t-n*r)*x,this}transpose(){let e,t=this.elements;return e=t[1],t[1]=t[3],t[3]=e,e=t[2],t[2]=t[6],t[6]=e,e=t[5],t[5]=t[7],t[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){let t=this.elements;return e[0]=t[0],e[1]=t[3],e[2]=t[6],e[3]=t[1],e[4]=t[4],e[5]=t[7],e[6]=t[2],e[7]=t[5],e[8]=t[8],this}setUvTransform(e,t,n,s,r,a,o){let c=Math.cos(r),l=Math.sin(r);return this.set(n*c,n*l,-n*(c*a+l*o)+a+e,-s*l,s*c,-s*(-l*a+c*o)+o+t,0,0,1),this}scale(e,t){return this.premultiply(Oc.makeScale(e,t)),this}rotate(e){return this.premultiply(Oc.makeRotation(-e)),this}translate(e,t){return this.premultiply(Oc.makeTranslation(e,t)),this}makeTranslation(e,t){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,t,0,0,1),this}makeRotation(e){let t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,n,t,0,0,0,1),this}makeScale(e,t){return this.set(e,0,0,0,t,0,0,0,1),this}equals(e){let t=this.elements,n=e.elements;for(let s=0;s<9;s++)if(t[s]!==n[s])return!1;return!0}fromArray(e,t=0){for(let n=0;n<9;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){let n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e}clone(){return new this.constructor().fromArray(this.elements)}},Oc=new st;function ff(i){for(let e=i.length-1;e>=0;--e)if(i[e]>=65535)return!0;return!1}function Jr(i){return document.createElementNS("http://www.w3.org/1999/xhtml",i)}function i0(){let i=Jr("canvas");return i.style.display="block",i}var Ku={};function Yr(i){i in Ku||(Ku[i]=!0,console.warn(i))}var $u=new st().set(.8224621,.177538,0,.0331941,.9668058,0,.0170827,.0723974,.9105199),Ju=new st().set(1.2249401,-.2249404,0,-.0420569,1.0420571,0,-.0196376,-.0786361,1.0982735),Ia={[qt]:{transfer:fo,primaries:po,toReference:i=>i,fromReference:i=>i},[Tt]:{transfer:Et,primaries:po,toReference:i=>i.convertSRGBToLinear(),fromReference:i=>i.convertLinearToSRGB()},[jo]:{transfer:fo,primaries:mo,toReference:i=>i.applyMatrix3(Ju),fromReference:i=>i.applyMatrix3($u)},[Ql]:{transfer:Et,primaries:mo,toReference:i=>i.convertSRGBToLinear().applyMatrix3(Ju),fromReference:i=>i.applyMatrix3($u).convertLinearToSRGB()}},s0=new Set([qt,jo]),ht={enabled:!0,_workingColorSpace:qt,get workingColorSpace(){return this._workingColorSpace},set workingColorSpace(i){if(!s0.has(i))throw new Error(`Unsupported working color space, "${i}".`);this._workingColorSpace=i},convert:function(i,e,t){if(this.enabled===!1||e===t||!e||!t)return i;let n=Ia[e].toReference,s=Ia[t].fromReference;return s(n(i))},fromWorkingColorSpace:function(i,e){return this.convert(i,this._workingColorSpace,e)},toWorkingColorSpace:function(i,e){return this.convert(i,e,this._workingColorSpace)},getPrimaries:function(i){return Ia[i].primaries},getTransfer:function(i){return i===Cn?fo:Ia[i].transfer}};function tr(i){return i<.04045?i*.0773993808:Math.pow(i*.9478672986+.0521327014,2.4)}function Fc(i){return i<.0031308?i*12.92:1.055*Math.pow(i,.41666)-.055}var Ps,_o=class{static getDataURL(e){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement=="undefined")return e.src;let t;if(e instanceof HTMLCanvasElement)t=e;else{Ps===void 0&&(Ps=Jr("canvas")),Ps.width=e.width,Ps.height=e.height;let n=Ps.getContext("2d");e instanceof ImageData?n.putImageData(e,0,0):n.drawImage(e,0,0,e.width,e.height),t=Ps}return t.width>2048||t.height>2048?(console.warn("THREE.ImageUtils.getDataURL: Image converted to jpg for performance reasons",e),t.toDataURL("image/jpeg",.6)):t.toDataURL("image/png")}static sRGBToLinear(e){if(typeof HTMLImageElement!="undefined"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement!="undefined"&&e instanceof HTMLCanvasElement||typeof ImageBitmap!="undefined"&&e instanceof ImageBitmap){let t=Jr("canvas");t.width=e.width,t.height=e.height;let n=t.getContext("2d");n.drawImage(e,0,0,e.width,e.height);let s=n.getImageData(0,0,e.width,e.height),r=s.data;for(let a=0;a<r.length;a++)r[a]=tr(r[a]/255)*255;return n.putImageData(s,0,0),t}else if(e.data){let t=e.data.slice(0);for(let n=0;n<t.length;n++)t instanceof Uint8Array||t instanceof Uint8ClampedArray?t[n]=Math.floor(tr(t[n]/255)*255):t[n]=tr(t[n]);return{data:t,width:e.width,height:e.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}},r0=0,yo=class{constructor(e=null){this.isSource=!0,Object.defineProperty(this,"id",{value:r0++}),this.uuid=Fn(),this.data=e,this.version=0}set needsUpdate(e){e===!0&&this.version++}toJSON(e){let t=e===void 0||typeof e=="string";if(!t&&e.images[this.uuid]!==void 0)return e.images[this.uuid];let n={uuid:this.uuid,url:""},s=this.data;if(s!==null){let r;if(Array.isArray(s)){r=[];for(let a=0,o=s.length;a<o;a++)s[a].isDataTexture?r.push(Bc(s[a].image)):r.push(Bc(s[a]))}else r=Bc(s);n.url=r}return t||(e.images[this.uuid]=n),n}};function Bc(i){return typeof HTMLImageElement!="undefined"&&i instanceof HTMLImageElement||typeof HTMLCanvasElement!="undefined"&&i instanceof HTMLCanvasElement||typeof ImageBitmap!="undefined"&&i instanceof ImageBitmap?_o.getDataURL(i):i.data?{data:Array.from(i.data),width:i.width,height:i.height,type:i.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}var a0=0,en=class i extends hi{constructor(e=i.DEFAULT_IMAGE,t=i.DEFAULT_MAPPING,n=bn,s=bn,r=gn,a=Ii,o=Rn,c=Li,l=i.DEFAULT_ANISOTROPY,h=Cn){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:a0++}),this.uuid=Fn(),this.name="",this.source=new yo(e),this.mipmaps=[],this.mapping=t,this.channel=0,this.wrapS=n,this.wrapT=s,this.magFilter=r,this.minFilter=a,this.anisotropy=l,this.format=o,this.internalFormat=null,this.type=c,this.offset=new ze(0,0),this.repeat=new ze(1,1),this.center=new ze(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new st,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,typeof h=="string"?this.colorSpace=h:(Yr("THREE.Texture: Property .encoding has been replaced by .colorSpace."),this.colorSpace=h===rs?Tt:Cn),this.userData={},this.version=0,this.onUpdate=null,this.isRenderTargetTexture=!1,this.needsPMREMUpdate=!1}get image(){return this.source.data}set image(e=null){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}toJSON(e){let t=e===void 0||typeof e=="string";if(!t&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];let n={metadata:{version:4.6,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(n.userData=this.userData),t||(e.textures[this.uuid]=n),n}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==tf)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case as:e.x=e.x-Math.floor(e.x);break;case bn:e.x=e.x<0?0:1;break;case Kr:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case as:e.y=e.y-Math.floor(e.y);break;case bn:e.y=e.y<0?0:1;break;case Kr:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}get encoding(){return Yr("THREE.Texture: Property .encoding has been replaced by .colorSpace."),this.colorSpace===Tt?rs:uf}set encoding(e){Yr("THREE.Texture: Property .encoding has been replaced by .colorSpace."),this.colorSpace=e===rs?Tt:Cn}};en.DEFAULT_IMAGE=null;en.DEFAULT_MAPPING=tf;en.DEFAULT_ANISOTROPY=1;var _t=class i{constructor(e=0,t=0,n=0,s=1){i.prototype.isVector4=!0,this.x=e,this.y=t,this.z=n,this.w=s}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,t,n,s){return this.x=e,this.y=t,this.z=n,this.w=s,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;case 3:this.w=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this.w=e.w+t.w,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this.w+=e.w*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this.w=e.w-t.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){let t=this.x,n=this.y,s=this.z,r=this.w,a=e.elements;return this.x=a[0]*t+a[4]*n+a[8]*s+a[12]*r,this.y=a[1]*t+a[5]*n+a[9]*s+a[13]*r,this.z=a[2]*t+a[6]*n+a[10]*s+a[14]*r,this.w=a[3]*t+a[7]*n+a[11]*s+a[15]*r,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);let t=Math.sqrt(1-e.w*e.w);return t<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/t,this.y=e.y/t,this.z=e.z/t),this}setAxisAngleFromRotationMatrix(e){let t,n,s,r,c=e.elements,l=c[0],h=c[4],u=c[8],d=c[1],f=c[5],p=c[9],x=c[2],g=c[6],m=c[10];if(Math.abs(h-d)<.01&&Math.abs(u-x)<.01&&Math.abs(p-g)<.01){if(Math.abs(h+d)<.1&&Math.abs(u+x)<.1&&Math.abs(p+g)<.1&&Math.abs(l+f+m-3)<.1)return this.set(1,0,0,0),this;t=Math.PI;let _=(l+1)/2,w=(f+1)/2,P=(m+1)/2,A=(h+d)/4,R=(u+x)/4,F=(p+g)/4;return _>w&&_>P?_<.01?(n=0,s=.707106781,r=.707106781):(n=Math.sqrt(_),s=A/n,r=R/n):w>P?w<.01?(n=.707106781,s=0,r=.707106781):(s=Math.sqrt(w),n=A/s,r=F/s):P<.01?(n=.707106781,s=.707106781,r=0):(r=Math.sqrt(P),n=R/r,s=F/r),this.set(n,s,r,t),this}let y=Math.sqrt((g-p)*(g-p)+(u-x)*(u-x)+(d-h)*(d-h));return Math.abs(y)<.001&&(y=1),this.x=(g-p)/y,this.y=(u-x)/y,this.z=(d-h)/y,this.w=Math.acos((l+f+m-1)/2),this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this.z=Math.max(e.z,Math.min(t.z,this.z)),this.w=Math.max(e.w,Math.min(t.w,this.w)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this.z=Math.max(e,Math.min(t,this.z)),this.w=Math.max(e,Math.min(t,this.w)),this}clampLength(e,t){let n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(e,Math.min(t,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this.w+=(e.w-this.w)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this.w=e.w+(t.w-e.w)*n,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this.w=e[t+3],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e[t+3]=this.w,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this.w=e.getW(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}},_l=class extends hi{constructor(e=1,t=1,n={}){super(),this.isRenderTarget=!0,this.width=e,this.height=t,this.depth=1,this.scissor=new _t(0,0,e,t),this.scissorTest=!1,this.viewport=new _t(0,0,e,t);let s={width:e,height:t,depth:1};n.encoding!==void 0&&(Yr("THREE.WebGLRenderTarget: option.encoding has been replaced by option.colorSpace."),n.colorSpace=n.encoding===rs?Tt:Cn),n=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:gn,depthBuffer:!0,stencilBuffer:!1,depthTexture:null,samples:0},n),this.texture=new en(s,n.mapping,n.wrapS,n.wrapT,n.magFilter,n.minFilter,n.format,n.type,n.anisotropy,n.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.flipY=!1,this.texture.generateMipmaps=n.generateMipmaps,this.texture.internalFormat=n.internalFormat,this.depthBuffer=n.depthBuffer,this.stencilBuffer=n.stencilBuffer,this.depthTexture=n.depthTexture,this.samples=n.samples}setSize(e,t,n=1){(this.width!==e||this.height!==t||this.depth!==n)&&(this.width=e,this.height=t,this.depth=n,this.texture.image.width=e,this.texture.image.height=t,this.texture.image.depth=n,this.dispose()),this.viewport.set(0,0,e,t),this.scissor.set(0,0,e,t)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.texture=e.texture.clone(),this.texture.isRenderTargetTexture=!0;let t=Object.assign({},e.texture.image);return this.texture.source=new yo(t),this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,e.depthTexture!==null&&(this.depthTexture=e.depthTexture.clone()),this.samples=e.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}},ui=class extends _l{constructor(e=1,t=1,n={}){super(e,t,n),this.isWebGLRenderTarget=!0}},vo=class extends en{constructor(e=null,t=1,n=1,s=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:t,height:n,depth:s},this.magFilter=Wt,this.minFilter=Wt,this.wrapR=bn,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}};var yl=class extends en{constructor(e=null,t=1,n=1,s=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:t,height:n,depth:s},this.magFilter=Wt,this.minFilter=Wt,this.wrapR=bn,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}};var Dt=class{constructor(e=0,t=0,n=0,s=1){this.isQuaternion=!0,this._x=e,this._y=t,this._z=n,this._w=s}static slerpFlat(e,t,n,s,r,a,o){let c=n[s+0],l=n[s+1],h=n[s+2],u=n[s+3],d=r[a+0],f=r[a+1],p=r[a+2],x=r[a+3];if(o===0){e[t+0]=c,e[t+1]=l,e[t+2]=h,e[t+3]=u;return}if(o===1){e[t+0]=d,e[t+1]=f,e[t+2]=p,e[t+3]=x;return}if(u!==x||c!==d||l!==f||h!==p){let g=1-o,m=c*d+l*f+h*p+u*x,y=m>=0?1:-1,_=1-m*m;if(_>Number.EPSILON){let P=Math.sqrt(_),A=Math.atan2(P,m*y);g=Math.sin(g*A)/P,o=Math.sin(o*A)/P}let w=o*y;if(c=c*g+d*w,l=l*g+f*w,h=h*g+p*w,u=u*g+x*w,g===1-o){let P=1/Math.sqrt(c*c+l*l+h*h+u*u);c*=P,l*=P,h*=P,u*=P}}e[t]=c,e[t+1]=l,e[t+2]=h,e[t+3]=u}static multiplyQuaternionsFlat(e,t,n,s,r,a){let o=n[s],c=n[s+1],l=n[s+2],h=n[s+3],u=r[a],d=r[a+1],f=r[a+2],p=r[a+3];return e[t]=o*p+h*u+c*f-l*d,e[t+1]=c*p+h*d+l*u-o*f,e[t+2]=l*p+h*f+o*d-c*u,e[t+3]=h*p-o*u-c*d-l*f,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,t,n,s){return this._x=e,this._y=t,this._z=n,this._w=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,t=!0){let n=e._x,s=e._y,r=e._z,a=e._order,o=Math.cos,c=Math.sin,l=o(n/2),h=o(s/2),u=o(r/2),d=c(n/2),f=c(s/2),p=c(r/2);switch(a){case"XYZ":this._x=d*h*u+l*f*p,this._y=l*f*u-d*h*p,this._z=l*h*p+d*f*u,this._w=l*h*u-d*f*p;break;case"YXZ":this._x=d*h*u+l*f*p,this._y=l*f*u-d*h*p,this._z=l*h*p-d*f*u,this._w=l*h*u+d*f*p;break;case"ZXY":this._x=d*h*u-l*f*p,this._y=l*f*u+d*h*p,this._z=l*h*p+d*f*u,this._w=l*h*u-d*f*p;break;case"ZYX":this._x=d*h*u-l*f*p,this._y=l*f*u+d*h*p,this._z=l*h*p-d*f*u,this._w=l*h*u+d*f*p;break;case"YZX":this._x=d*h*u+l*f*p,this._y=l*f*u+d*h*p,this._z=l*h*p-d*f*u,this._w=l*h*u-d*f*p;break;case"XZY":this._x=d*h*u-l*f*p,this._y=l*f*u-d*h*p,this._z=l*h*p+d*f*u,this._w=l*h*u+d*f*p;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+a)}return t===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,t){let n=t/2,s=Math.sin(n);return this._x=e.x*s,this._y=e.y*s,this._z=e.z*s,this._w=Math.cos(n),this._onChangeCallback(),this}setFromRotationMatrix(e){let t=e.elements,n=t[0],s=t[4],r=t[8],a=t[1],o=t[5],c=t[9],l=t[2],h=t[6],u=t[10],d=n+o+u;if(d>0){let f=.5/Math.sqrt(d+1);this._w=.25/f,this._x=(h-c)*f,this._y=(r-l)*f,this._z=(a-s)*f}else if(n>o&&n>u){let f=2*Math.sqrt(1+n-o-u);this._w=(h-c)/f,this._x=.25*f,this._y=(s+a)/f,this._z=(r+l)/f}else if(o>u){let f=2*Math.sqrt(1+o-n-u);this._w=(r-l)/f,this._x=(s+a)/f,this._y=.25*f,this._z=(c+h)/f}else{let f=2*Math.sqrt(1+u-n-o);this._w=(a-s)/f,this._x=(r+l)/f,this._y=(c+h)/f,this._z=.25*f}return this._onChangeCallback(),this}setFromUnitVectors(e,t){let n=e.dot(t)+1;return n<Number.EPSILON?(n=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=n):(this._x=0,this._y=-e.z,this._z=e.y,this._w=n)):(this._x=e.y*t.z-e.z*t.y,this._y=e.z*t.x-e.x*t.z,this._z=e.x*t.y-e.y*t.x,this._w=n),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(on(this.dot(e),-1,1)))}rotateTowards(e,t){let n=this.angleTo(e);if(n===0)return this;let s=Math.min(1,t/n);return this.slerp(e,s),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,t){let n=e._x,s=e._y,r=e._z,a=e._w,o=t._x,c=t._y,l=t._z,h=t._w;return this._x=n*h+a*o+s*l-r*c,this._y=s*h+a*c+r*o-n*l,this._z=r*h+a*l+n*c-s*o,this._w=a*h-n*o-s*c-r*l,this._onChangeCallback(),this}slerp(e,t){if(t===0)return this;if(t===1)return this.copy(e);let n=this._x,s=this._y,r=this._z,a=this._w,o=a*e._w+n*e._x+s*e._y+r*e._z;if(o<0?(this._w=-e._w,this._x=-e._x,this._y=-e._y,this._z=-e._z,o=-o):this.copy(e),o>=1)return this._w=a,this._x=n,this._y=s,this._z=r,this;let c=1-o*o;if(c<=Number.EPSILON){let f=1-t;return this._w=f*a+t*this._w,this._x=f*n+t*this._x,this._y=f*s+t*this._y,this._z=f*r+t*this._z,this.normalize(),this}let l=Math.sqrt(c),h=Math.atan2(l,o),u=Math.sin((1-t)*h)/l,d=Math.sin(t*h)/l;return this._w=a*u+this._w*d,this._x=n*u+this._x*d,this._y=s*u+this._y*d,this._z=r*u+this._z*d,this._onChangeCallback(),this}slerpQuaternions(e,t,n){return this.copy(e).slerp(t,n)}random(){let e=Math.random(),t=Math.sqrt(1-e),n=Math.sqrt(e),s=2*Math.PI*Math.random(),r=2*Math.PI*Math.random();return this.set(t*Math.cos(s),n*Math.sin(r),n*Math.cos(r),t*Math.sin(s))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,t=0){return this._x=e[t],this._y=e[t+1],this._z=e[t+2],this._w=e[t+3],this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._w,e}fromBufferAttribute(e,t){return this._x=e.getX(t),this._y=e.getY(t),this._z=e.getZ(t),this._w=e.getW(t),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}},L=class i{constructor(e=0,t=0,n=0){i.prototype.isVector3=!0,this.x=e,this.y=t,this.z=n}set(e,t,n){return n===void 0&&(n=this.z),this.x=e,this.y=t,this.z=n,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,t){return this.x=e.x*t.x,this.y=e.y*t.y,this.z=e.z*t.z,this}applyEuler(e){return this.applyQuaternion(Qu.setFromEuler(e))}applyAxisAngle(e,t){return this.applyQuaternion(Qu.setFromAxisAngle(e,t))}applyMatrix3(e){let t=this.x,n=this.y,s=this.z,r=e.elements;return this.x=r[0]*t+r[3]*n+r[6]*s,this.y=r[1]*t+r[4]*n+r[7]*s,this.z=r[2]*t+r[5]*n+r[8]*s,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){let t=this.x,n=this.y,s=this.z,r=e.elements,a=1/(r[3]*t+r[7]*n+r[11]*s+r[15]);return this.x=(r[0]*t+r[4]*n+r[8]*s+r[12])*a,this.y=(r[1]*t+r[5]*n+r[9]*s+r[13])*a,this.z=(r[2]*t+r[6]*n+r[10]*s+r[14])*a,this}applyQuaternion(e){let t=this.x,n=this.y,s=this.z,r=e.x,a=e.y,o=e.z,c=e.w,l=2*(a*s-o*n),h=2*(o*t-r*s),u=2*(r*n-a*t);return this.x=t+c*l+a*u-o*h,this.y=n+c*h+o*l-r*u,this.z=s+c*u+r*h-a*l,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){let t=this.x,n=this.y,s=this.z,r=e.elements;return this.x=r[0]*t+r[4]*n+r[8]*s,this.y=r[1]*t+r[5]*n+r[9]*s,this.z=r[2]*t+r[6]*n+r[10]*s,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this.z=Math.max(e.z,Math.min(t.z,this.z)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this.z=Math.max(e,Math.min(t,this.z)),this}clampLength(e,t){let n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(e,Math.min(t,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,t){let n=e.x,s=e.y,r=e.z,a=t.x,o=t.y,c=t.z;return this.x=s*c-r*o,this.y=r*a-n*c,this.z=n*o-s*a,this}projectOnVector(e){let t=e.lengthSq();if(t===0)return this.set(0,0,0);let n=e.dot(this)/t;return this.copy(e).multiplyScalar(n)}projectOnPlane(e){return kc.copy(this).projectOnVector(e),this.sub(kc)}reflect(e){return this.sub(kc.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){let t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;let n=this.dot(e)/t;return Math.acos(on(n,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){let t=this.x-e.x,n=this.y-e.y,s=this.z-e.z;return t*t+n*n+s*s}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,t,n){let s=Math.sin(t)*e;return this.x=s*Math.sin(n),this.y=Math.cos(t)*e,this.z=s*Math.cos(n),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,t,n){return this.x=e*Math.sin(t),this.y=n,this.z=e*Math.cos(t),this}setFromMatrixPosition(e){let t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this}setFromMatrixScale(e){let t=this.setFromMatrixColumn(e,0).length(),n=this.setFromMatrixColumn(e,1).length(),s=this.setFromMatrixColumn(e,2).length();return this.x=t,this.y=n,this.z=s,this}setFromMatrixColumn(e,t){return this.fromArray(e.elements,t*4)}setFromMatrix3Column(e,t){return this.fromArray(e.elements,t*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){let e=(Math.random()-.5)*2,t=Math.random()*Math.PI*2,n=Math.sqrt(1-e**2);return this.x=n*Math.cos(t),this.y=n*Math.sin(t),this.z=e,this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}},kc=new L,Qu=new Dt,_n=class{constructor(e=new L(1/0,1/0,1/0),t=new L(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=t}set(e,t){return this.min.copy(e),this.max.copy(t),this}setFromArray(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t+=3)this.expandByPoint(Nn.fromArray(e,t));return this}setFromBufferAttribute(e){this.makeEmpty();for(let t=0,n=e.count;t<n;t++)this.expandByPoint(Nn.fromBufferAttribute(e,t));return this}setFromPoints(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t++)this.expandByPoint(e[t]);return this}setFromCenterAndSize(e,t){let n=Nn.copy(t).multiplyScalar(.5);return this.min.copy(e).sub(n),this.max.copy(e).add(n),this}setFromObject(e,t=!1){return this.makeEmpty(),this.expandByObject(e,t)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,t=!1){e.updateWorldMatrix(!1,!1);let n=e.geometry;if(n!==void 0){let r=n.getAttribute("position");if(t===!0&&r!==void 0&&e.isInstancedMesh!==!0)for(let a=0,o=r.count;a<o;a++)e.isMesh===!0?e.getVertexPosition(a,Nn):Nn.fromBufferAttribute(r,a),Nn.applyMatrix4(e.matrixWorld),this.expandByPoint(Nn);else e.boundingBox!==void 0?(e.boundingBox===null&&e.computeBoundingBox(),za.copy(e.boundingBox)):(n.boundingBox===null&&n.computeBoundingBox(),za.copy(n.boundingBox)),za.applyMatrix4(e.matrixWorld),this.union(za)}let s=e.children;for(let r=0,a=s.length;r<a;r++)this.expandByObject(s[r],t);return this}containsPoint(e){return!(e.x<this.min.x||e.x>this.max.x||e.y<this.min.y||e.y>this.max.y||e.z<this.min.z||e.z>this.max.z)}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,t){return t.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return!(e.max.x<this.min.x||e.min.x>this.max.x||e.max.y<this.min.y||e.min.y>this.max.y||e.max.z<this.min.z||e.min.z>this.max.z)}intersectsSphere(e){return this.clampPoint(e.center,Nn),Nn.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let t,n;return e.normal.x>0?(t=e.normal.x*this.min.x,n=e.normal.x*this.max.x):(t=e.normal.x*this.max.x,n=e.normal.x*this.min.x),e.normal.y>0?(t+=e.normal.y*this.min.y,n+=e.normal.y*this.max.y):(t+=e.normal.y*this.max.y,n+=e.normal.y*this.min.y),e.normal.z>0?(t+=e.normal.z*this.min.z,n+=e.normal.z*this.max.z):(t+=e.normal.z*this.max.z,n+=e.normal.z*this.min.z),t<=-e.constant&&n>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(Dr),Da.subVectors(this.max,Dr),Ls.subVectors(e.a,Dr),Is.subVectors(e.b,Dr),zs.subVectors(e.c,Dr),bi.subVectors(Is,Ls),wi.subVectors(zs,Is),ji.subVectors(Ls,zs);let t=[0,-bi.z,bi.y,0,-wi.z,wi.y,0,-ji.z,ji.y,bi.z,0,-bi.x,wi.z,0,-wi.x,ji.z,0,-ji.x,-bi.y,bi.x,0,-wi.y,wi.x,0,-ji.y,ji.x,0];return!Hc(t,Ls,Is,zs,Da)||(t=[1,0,0,0,1,0,0,0,1],!Hc(t,Ls,Is,zs,Da))?!1:(Na.crossVectors(bi,wi),t=[Na.x,Na.y,Na.z],Hc(t,Ls,Is,zs,Da))}clampPoint(e,t){return t.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,Nn).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(Nn).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(ei[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),ei[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),ei[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),ei[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),ei[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),ei[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),ei[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),ei[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(ei),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}},ei=[new L,new L,new L,new L,new L,new L,new L,new L],Nn=new L,za=new _n,Ls=new L,Is=new L,zs=new L,bi=new L,wi=new L,ji=new L,Dr=new L,Da=new L,Na=new L,Ki=new L;function Hc(i,e,t,n,s){for(let r=0,a=i.length-3;r<=a;r+=3){Ki.fromArray(i,r);let o=s.x*Math.abs(Ki.x)+s.y*Math.abs(Ki.y)+s.z*Math.abs(Ki.z),c=e.dot(Ki),l=t.dot(Ki),h=n.dot(Ki);if(Math.max(-Math.max(c,l,h),Math.min(c,l,h))>o)return!1}return!0}var o0=new _n,Nr=new L,Gc=new L,wn=class{constructor(e=new L,t=-1){this.isSphere=!0,this.center=e,this.radius=t}set(e,t){return this.center.copy(e),this.radius=t,this}setFromPoints(e,t){let n=this.center;t!==void 0?n.copy(t):o0.setFromPoints(e).getCenter(n);let s=0;for(let r=0,a=e.length;r<a;r++)s=Math.max(s,n.distanceToSquared(e[r]));return this.radius=Math.sqrt(s),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){let t=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=t*t}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,t){let n=this.center.distanceToSquared(e);return t.copy(e),n>this.radius*this.radius&&(t.sub(this.center).normalize(),t.multiplyScalar(this.radius).add(this.center)),t}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;Nr.subVectors(e,this.center);let t=Nr.lengthSq();if(t>this.radius*this.radius){let n=Math.sqrt(t),s=(n-this.radius)*.5;this.center.addScaledVector(Nr,s/n),this.radius+=s}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(Gc.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(Nr.copy(e.center).add(Gc)),this.expandByPoint(Nr.copy(e.center).sub(Gc))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}},ti=new L,Vc=new L,Ua=new L,Si=new L,Wc=new L,Oa=new L,Xc=new L,cr=class{constructor(e=new L,t=new L(0,0,-1)){this.origin=e,this.direction=t}set(e,t){return this.origin.copy(e),this.direction.copy(t),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,t){return t.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,ti)),this}closestPointToPoint(e,t){t.subVectors(e,this.origin);let n=t.dot(this.direction);return n<0?t.copy(this.origin):t.copy(this.origin).addScaledVector(this.direction,n)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){let t=ti.subVectors(e,this.origin).dot(this.direction);return t<0?this.origin.distanceToSquared(e):(ti.copy(this.origin).addScaledVector(this.direction,t),ti.distanceToSquared(e))}distanceSqToSegment(e,t,n,s){Vc.copy(e).add(t).multiplyScalar(.5),Ua.copy(t).sub(e).normalize(),Si.copy(this.origin).sub(Vc);let r=e.distanceTo(t)*.5,a=-this.direction.dot(Ua),o=Si.dot(this.direction),c=-Si.dot(Ua),l=Si.lengthSq(),h=Math.abs(1-a*a),u,d,f,p;if(h>0)if(u=a*c-o,d=a*o-c,p=r*h,u>=0)if(d>=-p)if(d<=p){let x=1/h;u*=x,d*=x,f=u*(u+a*d+2*o)+d*(a*u+d+2*c)+l}else d=r,u=Math.max(0,-(a*d+o)),f=-u*u+d*(d+2*c)+l;else d=-r,u=Math.max(0,-(a*d+o)),f=-u*u+d*(d+2*c)+l;else d<=-p?(u=Math.max(0,-(-a*r+o)),d=u>0?-r:Math.min(Math.max(-r,-c),r),f=-u*u+d*(d+2*c)+l):d<=p?(u=0,d=Math.min(Math.max(-r,-c),r),f=d*(d+2*c)+l):(u=Math.max(0,-(a*r+o)),d=u>0?r:Math.min(Math.max(-r,-c),r),f=-u*u+d*(d+2*c)+l);else d=a>0?-r:r,u=Math.max(0,-(a*d+o)),f=-u*u+d*(d+2*c)+l;return n&&n.copy(this.origin).addScaledVector(this.direction,u),s&&s.copy(Vc).addScaledVector(Ua,d),f}intersectSphere(e,t){ti.subVectors(e.center,this.origin);let n=ti.dot(this.direction),s=ti.dot(ti)-n*n,r=e.radius*e.radius;if(s>r)return null;let a=Math.sqrt(r-s),o=n-a,c=n+a;return c<0?null:o<0?this.at(c,t):this.at(o,t)}intersectsSphere(e){return this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){let t=e.normal.dot(this.direction);if(t===0)return e.distanceToPoint(this.origin)===0?0:null;let n=-(this.origin.dot(e.normal)+e.constant)/t;return n>=0?n:null}intersectPlane(e,t){let n=this.distanceToPlane(e);return n===null?null:this.at(n,t)}intersectsPlane(e){let t=e.distanceToPoint(this.origin);return t===0||e.normal.dot(this.direction)*t<0}intersectBox(e,t){let n,s,r,a,o,c,l=1/this.direction.x,h=1/this.direction.y,u=1/this.direction.z,d=this.origin;return l>=0?(n=(e.min.x-d.x)*l,s=(e.max.x-d.x)*l):(n=(e.max.x-d.x)*l,s=(e.min.x-d.x)*l),h>=0?(r=(e.min.y-d.y)*h,a=(e.max.y-d.y)*h):(r=(e.max.y-d.y)*h,a=(e.min.y-d.y)*h),n>a||r>s||((r>n||isNaN(n))&&(n=r),(a<s||isNaN(s))&&(s=a),u>=0?(o=(e.min.z-d.z)*u,c=(e.max.z-d.z)*u):(o=(e.max.z-d.z)*u,c=(e.min.z-d.z)*u),n>c||o>s)||((o>n||n!==n)&&(n=o),(c<s||s!==s)&&(s=c),s<0)?null:this.at(n>=0?n:s,t)}intersectsBox(e){return this.intersectBox(e,ti)!==null}intersectTriangle(e,t,n,s,r){Wc.subVectors(t,e),Oa.subVectors(n,e),Xc.crossVectors(Wc,Oa);let a=this.direction.dot(Xc),o;if(a>0){if(s)return null;o=1}else if(a<0)o=-1,a=-a;else return null;Si.subVectors(this.origin,e);let c=o*this.direction.dot(Oa.crossVectors(Si,Oa));if(c<0)return null;let l=o*this.direction.dot(Wc.cross(Si));if(l<0||c+l>a)return null;let h=-o*Si.dot(Xc);return h<0?null:this.at(h/a,r)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}},Xe=class i{constructor(e,t,n,s,r,a,o,c,l,h,u,d,f,p,x,g){i.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,t,n,s,r,a,o,c,l,h,u,d,f,p,x,g)}set(e,t,n,s,r,a,o,c,l,h,u,d,f,p,x,g){let m=this.elements;return m[0]=e,m[4]=t,m[8]=n,m[12]=s,m[1]=r,m[5]=a,m[9]=o,m[13]=c,m[2]=l,m[6]=h,m[10]=u,m[14]=d,m[3]=f,m[7]=p,m[11]=x,m[15]=g,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new i().fromArray(this.elements)}copy(e){let t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],t[9]=n[9],t[10]=n[10],t[11]=n[11],t[12]=n[12],t[13]=n[13],t[14]=n[14],t[15]=n[15],this}copyPosition(e){let t=this.elements,n=e.elements;return t[12]=n[12],t[13]=n[13],t[14]=n[14],this}setFromMatrix3(e){let t=e.elements;return this.set(t[0],t[3],t[6],0,t[1],t[4],t[7],0,t[2],t[5],t[8],0,0,0,0,1),this}extractBasis(e,t,n){return e.setFromMatrixColumn(this,0),t.setFromMatrixColumn(this,1),n.setFromMatrixColumn(this,2),this}makeBasis(e,t,n){return this.set(e.x,t.x,n.x,0,e.y,t.y,n.y,0,e.z,t.z,n.z,0,0,0,0,1),this}extractRotation(e){let t=this.elements,n=e.elements,s=1/Ds.setFromMatrixColumn(e,0).length(),r=1/Ds.setFromMatrixColumn(e,1).length(),a=1/Ds.setFromMatrixColumn(e,2).length();return t[0]=n[0]*s,t[1]=n[1]*s,t[2]=n[2]*s,t[3]=0,t[4]=n[4]*r,t[5]=n[5]*r,t[6]=n[6]*r,t[7]=0,t[8]=n[8]*a,t[9]=n[9]*a,t[10]=n[10]*a,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromEuler(e){let t=this.elements,n=e.x,s=e.y,r=e.z,a=Math.cos(n),o=Math.sin(n),c=Math.cos(s),l=Math.sin(s),h=Math.cos(r),u=Math.sin(r);if(e.order==="XYZ"){let d=a*h,f=a*u,p=o*h,x=o*u;t[0]=c*h,t[4]=-c*u,t[8]=l,t[1]=f+p*l,t[5]=d-x*l,t[9]=-o*c,t[2]=x-d*l,t[6]=p+f*l,t[10]=a*c}else if(e.order==="YXZ"){let d=c*h,f=c*u,p=l*h,x=l*u;t[0]=d+x*o,t[4]=p*o-f,t[8]=a*l,t[1]=a*u,t[5]=a*h,t[9]=-o,t[2]=f*o-p,t[6]=x+d*o,t[10]=a*c}else if(e.order==="ZXY"){let d=c*h,f=c*u,p=l*h,x=l*u;t[0]=d-x*o,t[4]=-a*u,t[8]=p+f*o,t[1]=f+p*o,t[5]=a*h,t[9]=x-d*o,t[2]=-a*l,t[6]=o,t[10]=a*c}else if(e.order==="ZYX"){let d=a*h,f=a*u,p=o*h,x=o*u;t[0]=c*h,t[4]=p*l-f,t[8]=d*l+x,t[1]=c*u,t[5]=x*l+d,t[9]=f*l-p,t[2]=-l,t[6]=o*c,t[10]=a*c}else if(e.order==="YZX"){let d=a*c,f=a*l,p=o*c,x=o*l;t[0]=c*h,t[4]=x-d*u,t[8]=p*u+f,t[1]=u,t[5]=a*h,t[9]=-o*h,t[2]=-l*h,t[6]=f*u+p,t[10]=d-x*u}else if(e.order==="XZY"){let d=a*c,f=a*l,p=o*c,x=o*l;t[0]=c*h,t[4]=-u,t[8]=l*h,t[1]=d*u+x,t[5]=a*h,t[9]=f*u-p,t[2]=p*u-f,t[6]=o*h,t[10]=x*u+d}return t[3]=0,t[7]=0,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromQuaternion(e){return this.compose(c0,e,l0)}lookAt(e,t,n){let s=this.elements;return vn.subVectors(e,t),vn.lengthSq()===0&&(vn.z=1),vn.normalize(),Ei.crossVectors(n,vn),Ei.lengthSq()===0&&(Math.abs(n.z)===1?vn.x+=1e-4:vn.z+=1e-4,vn.normalize(),Ei.crossVectors(n,vn)),Ei.normalize(),Fa.crossVectors(vn,Ei),s[0]=Ei.x,s[4]=Fa.x,s[8]=vn.x,s[1]=Ei.y,s[5]=Fa.y,s[9]=vn.y,s[2]=Ei.z,s[6]=Fa.z,s[10]=vn.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){let n=e.elements,s=t.elements,r=this.elements,a=n[0],o=n[4],c=n[8],l=n[12],h=n[1],u=n[5],d=n[9],f=n[13],p=n[2],x=n[6],g=n[10],m=n[14],y=n[3],_=n[7],w=n[11],P=n[15],A=s[0],R=s[4],F=s[8],M=s[12],E=s[1],O=s[5],j=s[9],ae=s[13],z=s[2],B=s[6],J=s[10],q=s[14],K=s[3],$=s[7],se=s[11],le=s[15];return r[0]=a*A+o*E+c*z+l*K,r[4]=a*R+o*O+c*B+l*$,r[8]=a*F+o*j+c*J+l*se,r[12]=a*M+o*ae+c*q+l*le,r[1]=h*A+u*E+d*z+f*K,r[5]=h*R+u*O+d*B+f*$,r[9]=h*F+u*j+d*J+f*se,r[13]=h*M+u*ae+d*q+f*le,r[2]=p*A+x*E+g*z+m*K,r[6]=p*R+x*O+g*B+m*$,r[10]=p*F+x*j+g*J+m*se,r[14]=p*M+x*ae+g*q+m*le,r[3]=y*A+_*E+w*z+P*K,r[7]=y*R+_*O+w*B+P*$,r[11]=y*F+_*j+w*J+P*se,r[15]=y*M+_*ae+w*q+P*le,this}multiplyScalar(e){let t=this.elements;return t[0]*=e,t[4]*=e,t[8]*=e,t[12]*=e,t[1]*=e,t[5]*=e,t[9]*=e,t[13]*=e,t[2]*=e,t[6]*=e,t[10]*=e,t[14]*=e,t[3]*=e,t[7]*=e,t[11]*=e,t[15]*=e,this}determinant(){let e=this.elements,t=e[0],n=e[4],s=e[8],r=e[12],a=e[1],o=e[5],c=e[9],l=e[13],h=e[2],u=e[6],d=e[10],f=e[14],p=e[3],x=e[7],g=e[11],m=e[15];return p*(+r*c*u-s*l*u-r*o*d+n*l*d+s*o*f-n*c*f)+x*(+t*c*f-t*l*d+r*a*d-s*a*f+s*l*h-r*c*h)+g*(+t*l*u-t*o*f-r*a*u+n*a*f+r*o*h-n*l*h)+m*(-s*o*h-t*c*u+t*o*d+s*a*u-n*a*d+n*c*h)}transpose(){let e=this.elements,t;return t=e[1],e[1]=e[4],e[4]=t,t=e[2],e[2]=e[8],e[8]=t,t=e[6],e[6]=e[9],e[9]=t,t=e[3],e[3]=e[12],e[12]=t,t=e[7],e[7]=e[13],e[13]=t,t=e[11],e[11]=e[14],e[14]=t,this}setPosition(e,t,n){let s=this.elements;return e.isVector3?(s[12]=e.x,s[13]=e.y,s[14]=e.z):(s[12]=e,s[13]=t,s[14]=n),this}invert(){let e=this.elements,t=e[0],n=e[1],s=e[2],r=e[3],a=e[4],o=e[5],c=e[6],l=e[7],h=e[8],u=e[9],d=e[10],f=e[11],p=e[12],x=e[13],g=e[14],m=e[15],y=u*g*l-x*d*l+x*c*f-o*g*f-u*c*m+o*d*m,_=p*d*l-h*g*l-p*c*f+a*g*f+h*c*m-a*d*m,w=h*x*l-p*u*l+p*o*f-a*x*f-h*o*m+a*u*m,P=p*u*c-h*x*c-p*o*d+a*x*d+h*o*g-a*u*g,A=t*y+n*_+s*w+r*P;if(A===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);let R=1/A;return e[0]=y*R,e[1]=(x*d*r-u*g*r-x*s*f+n*g*f+u*s*m-n*d*m)*R,e[2]=(o*g*r-x*c*r+x*s*l-n*g*l-o*s*m+n*c*m)*R,e[3]=(u*c*r-o*d*r-u*s*l+n*d*l+o*s*f-n*c*f)*R,e[4]=_*R,e[5]=(h*g*r-p*d*r+p*s*f-t*g*f-h*s*m+t*d*m)*R,e[6]=(p*c*r-a*g*r-p*s*l+t*g*l+a*s*m-t*c*m)*R,e[7]=(a*d*r-h*c*r+h*s*l-t*d*l-a*s*f+t*c*f)*R,e[8]=w*R,e[9]=(p*u*r-h*x*r-p*n*f+t*x*f+h*n*m-t*u*m)*R,e[10]=(a*x*r-p*o*r+p*n*l-t*x*l-a*n*m+t*o*m)*R,e[11]=(h*o*r-a*u*r-h*n*l+t*u*l+a*n*f-t*o*f)*R,e[12]=P*R,e[13]=(h*x*s-p*u*s+p*n*d-t*x*d-h*n*g+t*u*g)*R,e[14]=(p*o*s-a*x*s-p*n*c+t*x*c+a*n*g-t*o*g)*R,e[15]=(a*u*s-h*o*s+h*n*c-t*u*c-a*n*d+t*o*d)*R,this}scale(e){let t=this.elements,n=e.x,s=e.y,r=e.z;return t[0]*=n,t[4]*=s,t[8]*=r,t[1]*=n,t[5]*=s,t[9]*=r,t[2]*=n,t[6]*=s,t[10]*=r,t[3]*=n,t[7]*=s,t[11]*=r,this}getMaxScaleOnAxis(){let e=this.elements,t=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],n=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],s=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(t,n,s))}makeTranslation(e,t,n){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,t,0,0,1,n,0,0,0,1),this}makeRotationX(e){let t=Math.cos(e),n=Math.sin(e);return this.set(1,0,0,0,0,t,-n,0,0,n,t,0,0,0,0,1),this}makeRotationY(e){let t=Math.cos(e),n=Math.sin(e);return this.set(t,0,n,0,0,1,0,0,-n,0,t,0,0,0,0,1),this}makeRotationZ(e){let t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,0,n,t,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,t){let n=Math.cos(t),s=Math.sin(t),r=1-n,a=e.x,o=e.y,c=e.z,l=r*a,h=r*o;return this.set(l*a+n,l*o-s*c,l*c+s*o,0,l*o+s*c,h*o+n,h*c-s*a,0,l*c-s*o,h*c+s*a,r*c*c+n,0,0,0,0,1),this}makeScale(e,t,n){return this.set(e,0,0,0,0,t,0,0,0,0,n,0,0,0,0,1),this}makeShear(e,t,n,s,r,a){return this.set(1,n,r,0,e,1,a,0,t,s,1,0,0,0,0,1),this}compose(e,t,n){let s=this.elements,r=t._x,a=t._y,o=t._z,c=t._w,l=r+r,h=a+a,u=o+o,d=r*l,f=r*h,p=r*u,x=a*h,g=a*u,m=o*u,y=c*l,_=c*h,w=c*u,P=n.x,A=n.y,R=n.z;return s[0]=(1-(x+m))*P,s[1]=(f+w)*P,s[2]=(p-_)*P,s[3]=0,s[4]=(f-w)*A,s[5]=(1-(d+m))*A,s[6]=(g+y)*A,s[7]=0,s[8]=(p+_)*R,s[9]=(g-y)*R,s[10]=(1-(d+x))*R,s[11]=0,s[12]=e.x,s[13]=e.y,s[14]=e.z,s[15]=1,this}decompose(e,t,n){let s=this.elements,r=Ds.set(s[0],s[1],s[2]).length(),a=Ds.set(s[4],s[5],s[6]).length(),o=Ds.set(s[8],s[9],s[10]).length();this.determinant()<0&&(r=-r),e.x=s[12],e.y=s[13],e.z=s[14],Un.copy(this);let l=1/r,h=1/a,u=1/o;return Un.elements[0]*=l,Un.elements[1]*=l,Un.elements[2]*=l,Un.elements[4]*=h,Un.elements[5]*=h,Un.elements[6]*=h,Un.elements[8]*=u,Un.elements[9]*=u,Un.elements[10]*=u,t.setFromRotationMatrix(Un),n.x=r,n.y=a,n.z=o,this}makePerspective(e,t,n,s,r,a,o=li){let c=this.elements,l=2*r/(t-e),h=2*r/(n-s),u=(t+e)/(t-e),d=(n+s)/(n-s),f,p;if(o===li)f=-(a+r)/(a-r),p=-2*a*r/(a-r);else if(o===go)f=-a/(a-r),p=-a*r/(a-r);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+o);return c[0]=l,c[4]=0,c[8]=u,c[12]=0,c[1]=0,c[5]=h,c[9]=d,c[13]=0,c[2]=0,c[6]=0,c[10]=f,c[14]=p,c[3]=0,c[7]=0,c[11]=-1,c[15]=0,this}makeOrthographic(e,t,n,s,r,a,o=li){let c=this.elements,l=1/(t-e),h=1/(n-s),u=1/(a-r),d=(t+e)*l,f=(n+s)*h,p,x;if(o===li)p=(a+r)*u,x=-2*u;else if(o===go)p=r*u,x=-1*u;else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+o);return c[0]=2*l,c[4]=0,c[8]=0,c[12]=-d,c[1]=0,c[5]=2*h,c[9]=0,c[13]=-f,c[2]=0,c[6]=0,c[10]=x,c[14]=-p,c[3]=0,c[7]=0,c[11]=0,c[15]=1,this}equals(e){let t=this.elements,n=e.elements;for(let s=0;s<16;s++)if(t[s]!==n[s])return!1;return!0}fromArray(e,t=0){for(let n=0;n<16;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){let n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e[t+9]=n[9],e[t+10]=n[10],e[t+11]=n[11],e[t+12]=n[12],e[t+13]=n[13],e[t+14]=n[14],e[t+15]=n[15],e}},Ds=new L,Un=new Xe,c0=new L(0,0,0),l0=new L(1,1,1),Ei=new L,Fa=new L,vn=new L,ed=new Xe,td=new Dt,Mo=class i{constructor(e=0,t=0,n=0,s=i.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=t,this._z=n,this._order=s}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,t,n,s=this._order){return this._x=e,this._y=t,this._z=n,this._order=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,t=this._order,n=!0){let s=e.elements,r=s[0],a=s[4],o=s[8],c=s[1],l=s[5],h=s[9],u=s[2],d=s[6],f=s[10];switch(t){case"XYZ":this._y=Math.asin(on(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(-h,f),this._z=Math.atan2(-a,r)):(this._x=Math.atan2(d,l),this._z=0);break;case"YXZ":this._x=Math.asin(-on(h,-1,1)),Math.abs(h)<.9999999?(this._y=Math.atan2(o,f),this._z=Math.atan2(c,l)):(this._y=Math.atan2(-u,r),this._z=0);break;case"ZXY":this._x=Math.asin(on(d,-1,1)),Math.abs(d)<.9999999?(this._y=Math.atan2(-u,f),this._z=Math.atan2(-a,l)):(this._y=0,this._z=Math.atan2(c,r));break;case"ZYX":this._y=Math.asin(-on(u,-1,1)),Math.abs(u)<.9999999?(this._x=Math.atan2(d,f),this._z=Math.atan2(c,r)):(this._x=0,this._z=Math.atan2(-a,l));break;case"YZX":this._z=Math.asin(on(c,-1,1)),Math.abs(c)<.9999999?(this._x=Math.atan2(-h,l),this._y=Math.atan2(-u,r)):(this._x=0,this._y=Math.atan2(o,f));break;case"XZY":this._z=Math.asin(-on(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(d,l),this._y=Math.atan2(o,r)):(this._x=Math.atan2(-h,f),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+t)}return this._order=t,n===!0&&this._onChangeCallback(),this}setFromQuaternion(e,t,n){return ed.makeRotationFromQuaternion(e),this.setFromRotationMatrix(ed,t,n)}setFromVector3(e,t=this._order){return this.set(e.x,e.y,e.z,t)}reorder(e){return td.setFromEuler(this),this.setFromQuaternion(td,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}};Mo.DEFAULT_ORDER="XYZ";var bo=class{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}},h0=0,nd=new L,Ns=new Dt,ni=new Xe,Ba=new L,Ur=new L,u0=new L,d0=new Dt,id=new L(1,0,0),sd=new L(0,1,0),rd=new L(0,0,1),f0={type:"added"},p0={type:"removed"},St=class i extends hi{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:h0++}),this.uuid=Fn(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=i.DEFAULT_UP.clone();let e=new L,t=new Mo,n=new Dt,s=new L(1,1,1);function r(){n.setFromEuler(t,!1)}function a(){t.setFromQuaternion(n,void 0,!1)}t._onChange(r),n._onChange(a),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:t},quaternion:{configurable:!0,enumerable:!0,value:n},scale:{configurable:!0,enumerable:!0,value:s},modelViewMatrix:{value:new Xe},normalMatrix:{value:new st}}),this.matrix=new Xe,this.matrixWorld=new Xe,this.matrixAutoUpdate=i.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=i.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new bo,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,t){this.quaternion.setFromAxisAngle(e,t)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,t){return Ns.setFromAxisAngle(e,t),this.quaternion.multiply(Ns),this}rotateOnWorldAxis(e,t){return Ns.setFromAxisAngle(e,t),this.quaternion.premultiply(Ns),this}rotateX(e){return this.rotateOnAxis(id,e)}rotateY(e){return this.rotateOnAxis(sd,e)}rotateZ(e){return this.rotateOnAxis(rd,e)}translateOnAxis(e,t){return nd.copy(e).applyQuaternion(this.quaternion),this.position.add(nd.multiplyScalar(t)),this}translateX(e){return this.translateOnAxis(id,e)}translateY(e){return this.translateOnAxis(sd,e)}translateZ(e){return this.translateOnAxis(rd,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(ni.copy(this.matrixWorld).invert())}lookAt(e,t,n){e.isVector3?Ba.copy(e):Ba.set(e,t,n);let s=this.parent;this.updateWorldMatrix(!0,!1),Ur.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?ni.lookAt(Ur,Ba,this.up):ni.lookAt(Ba,Ur,this.up),this.quaternion.setFromRotationMatrix(ni),s&&(ni.extractRotation(s.matrixWorld),Ns.setFromRotationMatrix(ni),this.quaternion.premultiply(Ns.invert()))}add(e){if(arguments.length>1){for(let t=0;t<arguments.length;t++)this.add(arguments[t]);return this}return e===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.parent!==null&&e.parent.remove(e),e.parent=this,this.children.push(e),e.dispatchEvent(f0)):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.remove(arguments[n]);return this}let t=this.children.indexOf(e);return t!==-1&&(e.parent=null,this.children.splice(t,1),e.dispatchEvent(p0)),this}removeFromParent(){let e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),ni.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),ni.multiply(e.parent.matrixWorld)),e.applyMatrix4(ni),this.add(e),e.updateWorldMatrix(!1,!0),this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,t){if(this[e]===t)return this;for(let n=0,s=this.children.length;n<s;n++){let a=this.children[n].getObjectByProperty(e,t);if(a!==void 0)return a}}getObjectsByProperty(e,t,n=[]){this[e]===t&&n.push(this);let s=this.children;for(let r=0,a=s.length;r<a;r++)s[r].getObjectsByProperty(e,t,n);return n}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Ur,e,u0),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Ur,d0,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);let t=this.matrixWorld.elements;return e.set(t[8],t[9],t[10]).normalize()}raycast(){}traverse(e){e(this);let t=this.children;for(let n=0,s=t.length;n<s;n++)t[n].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);let t=this.children;for(let n=0,s=t.length;n<s;n++)t[n].traverseVisible(e)}traverseAncestors(e){let t=this.parent;t!==null&&(e(t),t.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix),this.matrixWorldNeedsUpdate=!1,e=!0);let t=this.children;for(let n=0,s=t.length;n<s;n++){let r=t[n];(r.matrixWorldAutoUpdate===!0||e===!0)&&r.updateMatrixWorld(e)}}updateWorldMatrix(e,t){let n=this.parent;if(e===!0&&n!==null&&n.matrixWorldAutoUpdate===!0&&n.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix),t===!0){let s=this.children;for(let r=0,a=s.length;r<a;r++){let o=s[r];o.matrixWorldAutoUpdate===!0&&o.updateWorldMatrix(!1,!0)}}}toJSON(e){let t=e===void 0||typeof e=="string",n={};t&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},n.metadata={version:4.6,type:"Object",generator:"Object3D.toJSON"});let s={};s.uuid=this.uuid,s.type=this.type,this.name!==""&&(s.name=this.name),this.castShadow===!0&&(s.castShadow=!0),this.receiveShadow===!0&&(s.receiveShadow=!0),this.visible===!1&&(s.visible=!1),this.frustumCulled===!1&&(s.frustumCulled=!1),this.renderOrder!==0&&(s.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(s.userData=this.userData),s.layers=this.layers.mask,s.matrix=this.matrix.toArray(),s.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(s.matrixAutoUpdate=!1),this.isInstancedMesh&&(s.type="InstancedMesh",s.count=this.count,s.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(s.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(s.type="BatchedMesh",s.perObjectFrustumCulled=this.perObjectFrustumCulled,s.sortObjects=this.sortObjects,s.drawRanges=this._drawRanges,s.reservedRanges=this._reservedRanges,s.visibility=this._visibility,s.active=this._active,s.bounds=this._bounds.map(o=>({boxInitialized:o.boxInitialized,boxMin:o.box.min.toArray(),boxMax:o.box.max.toArray(),sphereInitialized:o.sphereInitialized,sphereRadius:o.sphere.radius,sphereCenter:o.sphere.center.toArray()})),s.maxGeometryCount=this._maxGeometryCount,s.maxVertexCount=this._maxVertexCount,s.maxIndexCount=this._maxIndexCount,s.geometryInitialized=this._geometryInitialized,s.geometryCount=this._geometryCount,s.matricesTexture=this._matricesTexture.toJSON(e),this.boundingSphere!==null&&(s.boundingSphere={center:s.boundingSphere.center.toArray(),radius:s.boundingSphere.radius}),this.boundingBox!==null&&(s.boundingBox={min:s.boundingBox.min.toArray(),max:s.boundingBox.max.toArray()}));function r(o,c){return o[c.uuid]===void 0&&(o[c.uuid]=c.toJSON(e)),c.uuid}if(this.isScene)this.background&&(this.background.isColor?s.background=this.background.toJSON():this.background.isTexture&&(s.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(s.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){s.geometry=r(e.geometries,this.geometry);let o=this.geometry.parameters;if(o!==void 0&&o.shapes!==void 0){let c=o.shapes;if(Array.isArray(c))for(let l=0,h=c.length;l<h;l++){let u=c[l];r(e.shapes,u)}else r(e.shapes,c)}}if(this.isSkinnedMesh&&(s.bindMode=this.bindMode,s.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(r(e.skeletons,this.skeleton),s.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){let o=[];for(let c=0,l=this.material.length;c<l;c++)o.push(r(e.materials,this.material[c]));s.material=o}else s.material=r(e.materials,this.material);if(this.children.length>0){s.children=[];for(let o=0;o<this.children.length;o++)s.children.push(this.children[o].toJSON(e).object)}if(this.animations.length>0){s.animations=[];for(let o=0;o<this.animations.length;o++){let c=this.animations[o];s.animations.push(r(e.animations,c))}}if(t){let o=a(e.geometries),c=a(e.materials),l=a(e.textures),h=a(e.images),u=a(e.shapes),d=a(e.skeletons),f=a(e.animations),p=a(e.nodes);o.length>0&&(n.geometries=o),c.length>0&&(n.materials=c),l.length>0&&(n.textures=l),h.length>0&&(n.images=h),u.length>0&&(n.shapes=u),d.length>0&&(n.skeletons=d),f.length>0&&(n.animations=f),p.length>0&&(n.nodes=p)}return n.object=s,n;function a(o){let c=[];for(let l in o){let h=o[l];delete h.metadata,c.push(h)}return c}}clone(e){return new this.constructor().copy(this,e)}copy(e,t=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),t===!0)for(let n=0;n<e.children.length;n++){let s=e.children[n];this.add(s.clone())}return this}};St.DEFAULT_UP=new L(0,1,0);St.DEFAULT_MATRIX_AUTO_UPDATE=!0;St.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;var On=new L,ii=new L,qc=new L,si=new L,Us=new L,Os=new L,ad=new L,Yc=new L,Zc=new L,jc=new L,ka=!1,ns=class i{constructor(e=new L,t=new L,n=new L){this.a=e,this.b=t,this.c=n}static getNormal(e,t,n,s){s.subVectors(n,t),On.subVectors(e,t),s.cross(On);let r=s.lengthSq();return r>0?s.multiplyScalar(1/Math.sqrt(r)):s.set(0,0,0)}static getBarycoord(e,t,n,s,r){On.subVectors(s,t),ii.subVectors(n,t),qc.subVectors(e,t);let a=On.dot(On),o=On.dot(ii),c=On.dot(qc),l=ii.dot(ii),h=ii.dot(qc),u=a*l-o*o;if(u===0)return r.set(0,0,0),null;let d=1/u,f=(l*c-o*h)*d,p=(a*h-o*c)*d;return r.set(1-f-p,p,f)}static containsPoint(e,t,n,s){return this.getBarycoord(e,t,n,s,si)===null?!1:si.x>=0&&si.y>=0&&si.x+si.y<=1}static getUV(e,t,n,s,r,a,o,c){return ka===!1&&(console.warn("THREE.Triangle.getUV() has been renamed to THREE.Triangle.getInterpolation()."),ka=!0),this.getInterpolation(e,t,n,s,r,a,o,c)}static getInterpolation(e,t,n,s,r,a,o,c){return this.getBarycoord(e,t,n,s,si)===null?(c.x=0,c.y=0,"z"in c&&(c.z=0),"w"in c&&(c.w=0),null):(c.setScalar(0),c.addScaledVector(r,si.x),c.addScaledVector(a,si.y),c.addScaledVector(o,si.z),c)}static isFrontFacing(e,t,n,s){return On.subVectors(n,t),ii.subVectors(e,t),On.cross(ii).dot(s)<0}set(e,t,n){return this.a.copy(e),this.b.copy(t),this.c.copy(n),this}setFromPointsAndIndices(e,t,n,s){return this.a.copy(e[t]),this.b.copy(e[n]),this.c.copy(e[s]),this}setFromAttributeAndIndices(e,t,n,s){return this.a.fromBufferAttribute(e,t),this.b.fromBufferAttribute(e,n),this.c.fromBufferAttribute(e,s),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return On.subVectors(this.c,this.b),ii.subVectors(this.a,this.b),On.cross(ii).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return i.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,t){return i.getBarycoord(e,this.a,this.b,this.c,t)}getUV(e,t,n,s,r){return ka===!1&&(console.warn("THREE.Triangle.getUV() has been renamed to THREE.Triangle.getInterpolation()."),ka=!0),i.getInterpolation(e,this.a,this.b,this.c,t,n,s,r)}getInterpolation(e,t,n,s,r){return i.getInterpolation(e,this.a,this.b,this.c,t,n,s,r)}containsPoint(e){return i.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return i.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,t){let n=this.a,s=this.b,r=this.c,a,o;Us.subVectors(s,n),Os.subVectors(r,n),Yc.subVectors(e,n);let c=Us.dot(Yc),l=Os.dot(Yc);if(c<=0&&l<=0)return t.copy(n);Zc.subVectors(e,s);let h=Us.dot(Zc),u=Os.dot(Zc);if(h>=0&&u<=h)return t.copy(s);let d=c*u-h*l;if(d<=0&&c>=0&&h<=0)return a=c/(c-h),t.copy(n).addScaledVector(Us,a);jc.subVectors(e,r);let f=Us.dot(jc),p=Os.dot(jc);if(p>=0&&f<=p)return t.copy(r);let x=f*l-c*p;if(x<=0&&l>=0&&p<=0)return o=l/(l-p),t.copy(n).addScaledVector(Os,o);let g=h*p-f*u;if(g<=0&&u-h>=0&&f-p>=0)return ad.subVectors(r,s),o=(u-h)/(u-h+(f-p)),t.copy(s).addScaledVector(ad,o);let m=1/(g+x+d);return a=x*m,o=d*m,t.copy(n).addScaledVector(Us,a).addScaledVector(Os,o)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}},pf={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},Ti={h:0,s:0,l:0},Ha={h:0,s:0,l:0};function Kc(i,e,t){return t<0&&(t+=1),t>1&&(t-=1),t<1/6?i+(e-i)*6*t:t<1/2?e:t<2/3?i+(e-i)*6*(2/3-t):i}var pe=class{constructor(e,t,n){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,t,n)}set(e,t,n){if(t===void 0&&n===void 0){let s=e;s&&s.isColor?this.copy(s):typeof s=="number"?this.setHex(s):typeof s=="string"&&this.setStyle(s)}else this.setRGB(e,t,n);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,t=Tt){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,ht.toWorkingColorSpace(this,t),this}setRGB(e,t,n,s=ht.workingColorSpace){return this.r=e,this.g=t,this.b=n,ht.toWorkingColorSpace(this,s),this}setHSL(e,t,n,s=ht.workingColorSpace){if(e=eh(e,1),t=on(t,0,1),n=on(n,0,1),t===0)this.r=this.g=this.b=n;else{let r=n<=.5?n*(1+t):n+t-n*t,a=2*n-r;this.r=Kc(a,r,e+1/3),this.g=Kc(a,r,e),this.b=Kc(a,r,e-1/3)}return ht.toWorkingColorSpace(this,s),this}setStyle(e,t=Tt){function n(r){r!==void 0&&parseFloat(r)<1&&console.warn("THREE.Color: Alpha component of "+e+" will be ignored.")}let s;if(s=/^(\w+)\(([^\)]*)\)/.exec(e)){let r,a=s[1],o=s[2];switch(a){case"rgb":case"rgba":if(r=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(r[4]),this.setRGB(Math.min(255,parseInt(r[1],10))/255,Math.min(255,parseInt(r[2],10))/255,Math.min(255,parseInt(r[3],10))/255,t);if(r=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(r[4]),this.setRGB(Math.min(100,parseInt(r[1],10))/100,Math.min(100,parseInt(r[2],10))/100,Math.min(100,parseInt(r[3],10))/100,t);break;case"hsl":case"hsla":if(r=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(r[4]),this.setHSL(parseFloat(r[1])/360,parseFloat(r[2])/100,parseFloat(r[3])/100,t);break;default:console.warn("THREE.Color: Unknown color model "+e)}}else if(s=/^\#([A-Fa-f\d]+)$/.exec(e)){let r=s[1],a=r.length;if(a===3)return this.setRGB(parseInt(r.charAt(0),16)/15,parseInt(r.charAt(1),16)/15,parseInt(r.charAt(2),16)/15,t);if(a===6)return this.setHex(parseInt(r,16),t);console.warn("THREE.Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,t);return this}setColorName(e,t=Tt){let n=pf[e.toLowerCase()];return n!==void 0?this.setHex(n,t):console.warn("THREE.Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=tr(e.r),this.g=tr(e.g),this.b=tr(e.b),this}copyLinearToSRGB(e){return this.r=Fc(e.r),this.g=Fc(e.g),this.b=Fc(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=Tt){return ht.fromWorkingColorSpace(an.copy(this),e),Math.round(on(an.r*255,0,255))*65536+Math.round(on(an.g*255,0,255))*256+Math.round(on(an.b*255,0,255))}getHexString(e=Tt){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,t=ht.workingColorSpace){ht.fromWorkingColorSpace(an.copy(this),t);let n=an.r,s=an.g,r=an.b,a=Math.max(n,s,r),o=Math.min(n,s,r),c,l,h=(o+a)/2;if(o===a)c=0,l=0;else{let u=a-o;switch(l=h<=.5?u/(a+o):u/(2-a-o),a){case n:c=(s-r)/u+(s<r?6:0);break;case s:c=(r-n)/u+2;break;case r:c=(n-s)/u+4;break}c/=6}return e.h=c,e.s=l,e.l=h,e}getRGB(e,t=ht.workingColorSpace){return ht.fromWorkingColorSpace(an.copy(this),t),e.r=an.r,e.g=an.g,e.b=an.b,e}getStyle(e=Tt){ht.fromWorkingColorSpace(an.copy(this),e);let t=an.r,n=an.g,s=an.b;return e!==Tt?`color(${e} ${t.toFixed(3)} ${n.toFixed(3)} ${s.toFixed(3)})`:`rgb(${Math.round(t*255)},${Math.round(n*255)},${Math.round(s*255)})`}offsetHSL(e,t,n){return this.getHSL(Ti),this.setHSL(Ti.h+e,Ti.s+t,Ti.l+n)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,t){return this.r=e.r+t.r,this.g=e.g+t.g,this.b=e.b+t.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,t){return this.r+=(e.r-this.r)*t,this.g+=(e.g-this.g)*t,this.b+=(e.b-this.b)*t,this}lerpColors(e,t,n){return this.r=e.r+(t.r-e.r)*n,this.g=e.g+(t.g-e.g)*n,this.b=e.b+(t.b-e.b)*n,this}lerpHSL(e,t){this.getHSL(Ti),e.getHSL(Ha);let n=qr(Ti.h,Ha.h,t),s=qr(Ti.s,Ha.s,t),r=qr(Ti.l,Ha.l,t);return this.setHSL(n,s,r),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){let t=this.r,n=this.g,s=this.b,r=e.elements;return this.r=r[0]*t+r[3]*n+r[6]*s,this.g=r[1]*t+r[4]*n+r[7]*s,this.b=r[2]*t+r[5]*n+r[8]*s,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,t=0){return this.r=e[t],this.g=e[t+1],this.b=e[t+2],this}toArray(e=[],t=0){return e[t]=this.r,e[t+1]=this.g,e[t+2]=this.b,e}fromBufferAttribute(e,t){return this.r=e.getX(t),this.g=e.getY(t),this.b=e.getZ(t),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}},an=new pe;pe.NAMES=pf;var m0=0,ln=class extends hi{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:m0++}),this.uuid=Fn(),this.name="",this.type="Material",this.blending=er,this.side=qn,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=ul,this.blendDst=dl,this.blendEquation=es,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new pe(0,0,0),this.blendAlpha=0,this.depthFunc=lo,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=Yu,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=Cs,this.stencilZFail=Cs,this.stencilZPass=Cs,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBuild(){}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(let t in e){let n=e[t];if(n===void 0){console.warn(`THREE.Material: parameter '${t}' has value of undefined.`);continue}let s=this[t];if(s===void 0){console.warn(`THREE.Material: '${t}' is not a property of THREE.${this.type}.`);continue}s&&s.isColor?s.set(n):s&&s.isVector3&&n&&n.isVector3?s.copy(n):this[t]=n}}toJSON(e){let t=e===void 0||typeof e=="string";t&&(e={textures:{},images:{}});let n={metadata:{version:4.6,type:"Material",generator:"Material.toJSON"}};n.uuid=this.uuid,n.type=this.type,this.name!==""&&(n.name=this.name),this.color&&this.color.isColor&&(n.color=this.color.getHex()),this.roughness!==void 0&&(n.roughness=this.roughness),this.metalness!==void 0&&(n.metalness=this.metalness),this.sheen!==void 0&&(n.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(n.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(n.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(n.emissive=this.emissive.getHex()),this.emissiveIntensity&&this.emissiveIntensity!==1&&(n.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(n.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(n.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(n.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(n.shininess=this.shininess),this.clearcoat!==void 0&&(n.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(n.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(n.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(n.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(n.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,n.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.iridescence!==void 0&&(n.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(n.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(n.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(n.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(n.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(n.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(n.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(n.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(n.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(n.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(n.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(n.lightMap=this.lightMap.toJSON(e).uuid,n.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(n.aoMap=this.aoMap.toJSON(e).uuid,n.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(n.bumpMap=this.bumpMap.toJSON(e).uuid,n.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(n.normalMap=this.normalMap.toJSON(e).uuid,n.normalMapType=this.normalMapType,n.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(n.displacementMap=this.displacementMap.toJSON(e).uuid,n.displacementScale=this.displacementScale,n.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(n.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(n.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(n.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(n.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(n.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(n.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(n.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(n.combine=this.combine)),this.envMapIntensity!==void 0&&(n.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(n.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(n.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(n.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(n.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(n.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(n.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(n.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(n.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(n.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(n.size=this.size),this.shadowSide!==null&&(n.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(n.sizeAttenuation=this.sizeAttenuation),this.blending!==er&&(n.blending=this.blending),this.side!==qn&&(n.side=this.side),this.vertexColors===!0&&(n.vertexColors=!0),this.opacity<1&&(n.opacity=this.opacity),this.transparent===!0&&(n.transparent=!0),this.blendSrc!==ul&&(n.blendSrc=this.blendSrc),this.blendDst!==dl&&(n.blendDst=this.blendDst),this.blendEquation!==es&&(n.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(n.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(n.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(n.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(n.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(n.blendAlpha=this.blendAlpha),this.depthFunc!==lo&&(n.depthFunc=this.depthFunc),this.depthTest===!1&&(n.depthTest=this.depthTest),this.depthWrite===!1&&(n.depthWrite=this.depthWrite),this.colorWrite===!1&&(n.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(n.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==Yu&&(n.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(n.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(n.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==Cs&&(n.stencilFail=this.stencilFail),this.stencilZFail!==Cs&&(n.stencilZFail=this.stencilZFail),this.stencilZPass!==Cs&&(n.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(n.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(n.rotation=this.rotation),this.polygonOffset===!0&&(n.polygonOffset=!0),this.polygonOffsetFactor!==0&&(n.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(n.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(n.linewidth=this.linewidth),this.dashSize!==void 0&&(n.dashSize=this.dashSize),this.gapSize!==void 0&&(n.gapSize=this.gapSize),this.scale!==void 0&&(n.scale=this.scale),this.dithering===!0&&(n.dithering=!0),this.alphaTest>0&&(n.alphaTest=this.alphaTest),this.alphaHash===!0&&(n.alphaHash=!0),this.alphaToCoverage===!0&&(n.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(n.premultipliedAlpha=!0),this.forceSinglePass===!0&&(n.forceSinglePass=!0),this.wireframe===!0&&(n.wireframe=!0),this.wireframeLinewidth>1&&(n.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(n.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(n.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(n.flatShading=!0),this.visible===!1&&(n.visible=!1),this.toneMapped===!1&&(n.toneMapped=!1),this.fog===!1&&(n.fog=!1),Object.keys(this.userData).length>0&&(n.userData=this.userData);function s(r){let a=[];for(let o in r){let c=r[o];delete c.metadata,a.push(c)}return a}if(t){let r=s(e.textures),a=s(e.images);r.length>0&&(n.textures=r),a.length>0&&(n.images=a)}return n}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;let t=e.clippingPlanes,n=null;if(t!==null){let s=t.length;n=new Array(s);for(let r=0;r!==s;++r)n[r]=t[r].clone()}return this.clippingPlanes=n,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}},At=class extends ln{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new pe(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.combine=Xo,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}};var Vt=new L,Ga=new ze,Pt=class{constructor(e,t,n=!1){if(Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,this.name="",this.array=e,this.itemSize=t,this.count=e!==void 0?e.length/t:0,this.normalized=n,this.usage=ml,this._updateRange={offset:0,count:-1},this.updateRanges=[],this.gpuType=ci,this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}get updateRange(){return console.warn("THREE.BufferAttribute: updateRange() is deprecated and will be removed in r169. Use addUpdateRange() instead."),this._updateRange}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this}copyAt(e,t,n){e*=this.itemSize,n*=t.itemSize;for(let s=0,r=this.itemSize;s<r;s++)this.array[e+s]=t.array[n+s];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let t=0,n=this.count;t<n;t++)Ga.fromBufferAttribute(this,t),Ga.applyMatrix3(e),this.setXY(t,Ga.x,Ga.y);else if(this.itemSize===3)for(let t=0,n=this.count;t<n;t++)Vt.fromBufferAttribute(this,t),Vt.applyMatrix3(e),this.setXYZ(t,Vt.x,Vt.y,Vt.z);return this}applyMatrix4(e){for(let t=0,n=this.count;t<n;t++)Vt.fromBufferAttribute(this,t),Vt.applyMatrix4(e),this.setXYZ(t,Vt.x,Vt.y,Vt.z);return this}applyNormalMatrix(e){for(let t=0,n=this.count;t<n;t++)Vt.fromBufferAttribute(this,t),Vt.applyNormalMatrix(e),this.setXYZ(t,Vt.x,Vt.y,Vt.z);return this}transformDirection(e){for(let t=0,n=this.count;t<n;t++)Vt.fromBufferAttribute(this,t),Vt.transformDirection(e),this.setXYZ(t,Vt.x,Vt.y,Vt.z);return this}set(e,t=0){return this.array.set(e,t),this}getComponent(e,t){let n=this.array[e*this.itemSize+t];return this.normalized&&(n=Xn(n,this.array)),n}setComponent(e,t,n){return this.normalized&&(n=ft(n,this.array)),this.array[e*this.itemSize+t]=n,this}getX(e){let t=this.array[e*this.itemSize];return this.normalized&&(t=Xn(t,this.array)),t}setX(e,t){return this.normalized&&(t=ft(t,this.array)),this.array[e*this.itemSize]=t,this}getY(e){let t=this.array[e*this.itemSize+1];return this.normalized&&(t=Xn(t,this.array)),t}setY(e,t){return this.normalized&&(t=ft(t,this.array)),this.array[e*this.itemSize+1]=t,this}getZ(e){let t=this.array[e*this.itemSize+2];return this.normalized&&(t=Xn(t,this.array)),t}setZ(e,t){return this.normalized&&(t=ft(t,this.array)),this.array[e*this.itemSize+2]=t,this}getW(e){let t=this.array[e*this.itemSize+3];return this.normalized&&(t=Xn(t,this.array)),t}setW(e,t){return this.normalized&&(t=ft(t,this.array)),this.array[e*this.itemSize+3]=t,this}setXY(e,t,n){return e*=this.itemSize,this.normalized&&(t=ft(t,this.array),n=ft(n,this.array)),this.array[e+0]=t,this.array[e+1]=n,this}setXYZ(e,t,n,s){return e*=this.itemSize,this.normalized&&(t=ft(t,this.array),n=ft(n,this.array),s=ft(s,this.array)),this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=s,this}setXYZW(e,t,n,s,r){return e*=this.itemSize,this.normalized&&(t=ft(t,this.array),n=ft(n,this.array),s=ft(s,this.array),r=ft(r,this.array)),this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=s,this.array[e+3]=r,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){let e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(e.name=this.name),this.usage!==ml&&(e.usage=this.usage),e}};var wo=class extends Pt{constructor(e,t,n){super(new Uint16Array(e),t,n)}};var So=class extends Pt{constructor(e,t,n){super(new Uint32Array(e),t,n)}};var ut=class extends Pt{constructor(e,t,n){super(new Float32Array(e),t,n)}};var g0=0,An=new Xe,$c=new St,Fs=new L,Mn=new _n,Or=new _n,$t=new L,Nt=class i extends hi{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:g0++}),this.uuid=Fn(),this.name="",this.type="BufferGeometry",this.index=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(ff(e)?So:wo)(e,1):this.index=e,this}getAttribute(e){return this.attributes[e]}setAttribute(e,t){return this.attributes[e]=t,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,t,n=0){this.groups.push({start:e,count:t,materialIndex:n})}clearGroups(){this.groups=[]}setDrawRange(e,t){this.drawRange.start=e,this.drawRange.count=t}applyMatrix4(e){let t=this.attributes.position;t!==void 0&&(t.applyMatrix4(e),t.needsUpdate=!0);let n=this.attributes.normal;if(n!==void 0){let r=new st().getNormalMatrix(e);n.applyNormalMatrix(r),n.needsUpdate=!0}let s=this.attributes.tangent;return s!==void 0&&(s.transformDirection(e),s.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(e){return An.makeRotationFromQuaternion(e),this.applyMatrix4(An),this}rotateX(e){return An.makeRotationX(e),this.applyMatrix4(An),this}rotateY(e){return An.makeRotationY(e),this.applyMatrix4(An),this}rotateZ(e){return An.makeRotationZ(e),this.applyMatrix4(An),this}translate(e,t,n){return An.makeTranslation(e,t,n),this.applyMatrix4(An),this}scale(e,t,n){return An.makeScale(e,t,n),this.applyMatrix4(An),this}lookAt(e){return $c.lookAt(e),$c.updateMatrix(),this.applyMatrix4($c.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(Fs).negate(),this.translate(Fs.x,Fs.y,Fs.z),this}setFromPoints(e){let t=[];for(let n=0,s=e.length;n<s;n++){let r=e[n];t.push(r.x,r.y,r.z||0)}return this.setAttribute("position",new ut(t,3)),this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new _n);let e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error('THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box. Alternatively set "mesh.frustumCulled" to "false".',this),this.boundingBox.set(new L(-1/0,-1/0,-1/0),new L(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),t)for(let n=0,s=t.length;n<s;n++){let r=t[n];Mn.setFromBufferAttribute(r),this.morphTargetsRelative?($t.addVectors(this.boundingBox.min,Mn.min),this.boundingBox.expandByPoint($t),$t.addVectors(this.boundingBox.max,Mn.max),this.boundingBox.expandByPoint($t)):(this.boundingBox.expandByPoint(Mn.min),this.boundingBox.expandByPoint(Mn.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new wn);let e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error('THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere. Alternatively set "mesh.frustumCulled" to "false".',this),this.boundingSphere.set(new L,1/0);return}if(e){let n=this.boundingSphere.center;if(Mn.setFromBufferAttribute(e),t)for(let r=0,a=t.length;r<a;r++){let o=t[r];Or.setFromBufferAttribute(o),this.morphTargetsRelative?($t.addVectors(Mn.min,Or.min),Mn.expandByPoint($t),$t.addVectors(Mn.max,Or.max),Mn.expandByPoint($t)):(Mn.expandByPoint(Or.min),Mn.expandByPoint(Or.max))}Mn.getCenter(n);let s=0;for(let r=0,a=e.count;r<a;r++)$t.fromBufferAttribute(e,r),s=Math.max(s,n.distanceToSquared($t));if(t)for(let r=0,a=t.length;r<a;r++){let o=t[r],c=this.morphTargetsRelative;for(let l=0,h=o.count;l<h;l++)$t.fromBufferAttribute(o,l),c&&(Fs.fromBufferAttribute(e,l),$t.add(Fs)),s=Math.max(s,n.distanceToSquared($t))}this.boundingSphere.radius=Math.sqrt(s),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){let e=this.index,t=this.attributes;if(e===null||t.position===void 0||t.normal===void 0||t.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}let n=e.array,s=t.position.array,r=t.normal.array,a=t.uv.array,o=s.length/3;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new Pt(new Float32Array(4*o),4));let c=this.getAttribute("tangent").array,l=[],h=[];for(let E=0;E<o;E++)l[E]=new L,h[E]=new L;let u=new L,d=new L,f=new L,p=new ze,x=new ze,g=new ze,m=new L,y=new L;function _(E,O,j){u.fromArray(s,E*3),d.fromArray(s,O*3),f.fromArray(s,j*3),p.fromArray(a,E*2),x.fromArray(a,O*2),g.fromArray(a,j*2),d.sub(u),f.sub(u),x.sub(p),g.sub(p);let ae=1/(x.x*g.y-g.x*x.y);isFinite(ae)&&(m.copy(d).multiplyScalar(g.y).addScaledVector(f,-x.y).multiplyScalar(ae),y.copy(f).multiplyScalar(x.x).addScaledVector(d,-g.x).multiplyScalar(ae),l[E].add(m),l[O].add(m),l[j].add(m),h[E].add(y),h[O].add(y),h[j].add(y))}let w=this.groups;w.length===0&&(w=[{start:0,count:n.length}]);for(let E=0,O=w.length;E<O;++E){let j=w[E],ae=j.start,z=j.count;for(let B=ae,J=ae+z;B<J;B+=3)_(n[B+0],n[B+1],n[B+2])}let P=new L,A=new L,R=new L,F=new L;function M(E){R.fromArray(r,E*3),F.copy(R);let O=l[E];P.copy(O),P.sub(R.multiplyScalar(R.dot(O))).normalize(),A.crossVectors(F,O);let ae=A.dot(h[E])<0?-1:1;c[E*4]=P.x,c[E*4+1]=P.y,c[E*4+2]=P.z,c[E*4+3]=ae}for(let E=0,O=w.length;E<O;++E){let j=w[E],ae=j.start,z=j.count;for(let B=ae,J=ae+z;B<J;B+=3)M(n[B+0]),M(n[B+1]),M(n[B+2])}}computeVertexNormals(){let e=this.index,t=this.getAttribute("position");if(t!==void 0){let n=this.getAttribute("normal");if(n===void 0)n=new Pt(new Float32Array(t.count*3),3),this.setAttribute("normal",n);else for(let d=0,f=n.count;d<f;d++)n.setXYZ(d,0,0,0);let s=new L,r=new L,a=new L,o=new L,c=new L,l=new L,h=new L,u=new L;if(e)for(let d=0,f=e.count;d<f;d+=3){let p=e.getX(d+0),x=e.getX(d+1),g=e.getX(d+2);s.fromBufferAttribute(t,p),r.fromBufferAttribute(t,x),a.fromBufferAttribute(t,g),h.subVectors(a,r),u.subVectors(s,r),h.cross(u),o.fromBufferAttribute(n,p),c.fromBufferAttribute(n,x),l.fromBufferAttribute(n,g),o.add(h),c.add(h),l.add(h),n.setXYZ(p,o.x,o.y,o.z),n.setXYZ(x,c.x,c.y,c.z),n.setXYZ(g,l.x,l.y,l.z)}else for(let d=0,f=t.count;d<f;d+=3)s.fromBufferAttribute(t,d+0),r.fromBufferAttribute(t,d+1),a.fromBufferAttribute(t,d+2),h.subVectors(a,r),u.subVectors(s,r),h.cross(u),n.setXYZ(d+0,h.x,h.y,h.z),n.setXYZ(d+1,h.x,h.y,h.z),n.setXYZ(d+2,h.x,h.y,h.z);this.normalizeNormals(),n.needsUpdate=!0}}normalizeNormals(){let e=this.attributes.normal;for(let t=0,n=e.count;t<n;t++)$t.fromBufferAttribute(e,t),$t.normalize(),e.setXYZ(t,$t.x,$t.y,$t.z)}toNonIndexed(){function e(o,c){let l=o.array,h=o.itemSize,u=o.normalized,d=new l.constructor(c.length*h),f=0,p=0;for(let x=0,g=c.length;x<g;x++){o.isInterleavedBufferAttribute?f=c[x]*o.data.stride+o.offset:f=c[x]*h;for(let m=0;m<h;m++)d[p++]=l[f++]}return new Pt(d,h,u)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;let t=new i,n=this.index.array,s=this.attributes;for(let o in s){let c=s[o],l=e(c,n);t.setAttribute(o,l)}let r=this.morphAttributes;for(let o in r){let c=[],l=r[o];for(let h=0,u=l.length;h<u;h++){let d=l[h],f=e(d,n);c.push(f)}t.morphAttributes[o]=c}t.morphTargetsRelative=this.morphTargetsRelative;let a=this.groups;for(let o=0,c=a.length;o<c;o++){let l=a[o];t.addGroup(l.start,l.count,l.materialIndex)}return t}toJSON(){let e={metadata:{version:4.6,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.type,this.name!==""&&(e.name=this.name),Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0){let c=this.parameters;for(let l in c)c[l]!==void 0&&(e[l]=c[l]);return e}e.data={attributes:{}};let t=this.index;t!==null&&(e.data.index={type:t.array.constructor.name,array:Array.prototype.slice.call(t.array)});let n=this.attributes;for(let c in n){let l=n[c];e.data.attributes[c]=l.toJSON(e.data)}let s={},r=!1;for(let c in this.morphAttributes){let l=this.morphAttributes[c],h=[];for(let u=0,d=l.length;u<d;u++){let f=l[u];h.push(f.toJSON(e.data))}h.length>0&&(s[c]=h,r=!0)}r&&(e.data.morphAttributes=s,e.data.morphTargetsRelative=this.morphTargetsRelative);let a=this.groups;a.length>0&&(e.data.groups=JSON.parse(JSON.stringify(a)));let o=this.boundingSphere;return o!==null&&(e.data.boundingSphere={center:o.center.toArray(),radius:o.radius}),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;let t={};this.name=e.name;let n=e.index;n!==null&&this.setIndex(n.clone(t));let s=e.attributes;for(let l in s){let h=s[l];this.setAttribute(l,h.clone(t))}let r=e.morphAttributes;for(let l in r){let h=[],u=r[l];for(let d=0,f=u.length;d<f;d++)h.push(u[d].clone(t));this.morphAttributes[l]=h}this.morphTargetsRelative=e.morphTargetsRelative;let a=e.groups;for(let l=0,h=a.length;l<h;l++){let u=a[l];this.addGroup(u.start,u.count,u.materialIndex)}let o=e.boundingBox;o!==null&&(this.boundingBox=o.clone());let c=e.boundingSphere;return c!==null&&(this.boundingSphere=c.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}},od=new Xe,$i=new cr,Va=new wn,cd=new L,Bs=new L,ks=new L,Hs=new L,Jc=new L,Wa=new L,Xa=new ze,qa=new ze,Ya=new ze,ld=new L,hd=new L,ud=new L,Za=new L,ja=new L,de=class extends St{constructor(e=new Nt,t=new At){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=t,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){let t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){let s=t[n[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,a=s.length;r<a;r++){let o=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=r}}}}getVertexPosition(e,t){let n=this.geometry,s=n.attributes.position,r=n.morphAttributes.position,a=n.morphTargetsRelative;t.fromBufferAttribute(s,e);let o=this.morphTargetInfluences;if(r&&o){Wa.set(0,0,0);for(let c=0,l=r.length;c<l;c++){let h=o[c],u=r[c];h!==0&&(Jc.fromBufferAttribute(u,e),a?Wa.addScaledVector(Jc,h):Wa.addScaledVector(Jc.sub(t),h))}t.add(Wa)}return t}raycast(e,t){let n=this.geometry,s=this.material,r=this.matrixWorld;s!==void 0&&(n.boundingSphere===null&&n.computeBoundingSphere(),Va.copy(n.boundingSphere),Va.applyMatrix4(r),$i.copy(e.ray).recast(e.near),!(Va.containsPoint($i.origin)===!1&&($i.intersectSphere(Va,cd)===null||$i.origin.distanceToSquared(cd)>(e.far-e.near)**2))&&(od.copy(r).invert(),$i.copy(e.ray).applyMatrix4(od),!(n.boundingBox!==null&&$i.intersectsBox(n.boundingBox)===!1)&&this._computeIntersections(e,t,$i)))}_computeIntersections(e,t,n){let s,r=this.geometry,a=this.material,o=r.index,c=r.attributes.position,l=r.attributes.uv,h=r.attributes.uv1,u=r.attributes.normal,d=r.groups,f=r.drawRange;if(o!==null)if(Array.isArray(a))for(let p=0,x=d.length;p<x;p++){let g=d[p],m=a[g.materialIndex],y=Math.max(g.start,f.start),_=Math.min(o.count,Math.min(g.start+g.count,f.start+f.count));for(let w=y,P=_;w<P;w+=3){let A=o.getX(w),R=o.getX(w+1),F=o.getX(w+2);s=Ka(this,m,e,n,l,h,u,A,R,F),s&&(s.faceIndex=Math.floor(w/3),s.face.materialIndex=g.materialIndex,t.push(s))}}else{let p=Math.max(0,f.start),x=Math.min(o.count,f.start+f.count);for(let g=p,m=x;g<m;g+=3){let y=o.getX(g),_=o.getX(g+1),w=o.getX(g+2);s=Ka(this,a,e,n,l,h,u,y,_,w),s&&(s.faceIndex=Math.floor(g/3),t.push(s))}}else if(c!==void 0)if(Array.isArray(a))for(let p=0,x=d.length;p<x;p++){let g=d[p],m=a[g.materialIndex],y=Math.max(g.start,f.start),_=Math.min(c.count,Math.min(g.start+g.count,f.start+f.count));for(let w=y,P=_;w<P;w+=3){let A=w,R=w+1,F=w+2;s=Ka(this,m,e,n,l,h,u,A,R,F),s&&(s.faceIndex=Math.floor(w/3),s.face.materialIndex=g.materialIndex,t.push(s))}}else{let p=Math.max(0,f.start),x=Math.min(c.count,f.start+f.count);for(let g=p,m=x;g<m;g+=3){let y=g,_=g+1,w=g+2;s=Ka(this,a,e,n,l,h,u,y,_,w),s&&(s.faceIndex=Math.floor(g/3),t.push(s))}}}};function x0(i,e,t,n,s,r,a,o){let c;if(e.side===cn?c=n.intersectTriangle(a,r,s,!0,o):c=n.intersectTriangle(s,r,a,e.side===qn,o),c===null)return null;ja.copy(o),ja.applyMatrix4(i.matrixWorld);let l=t.ray.origin.distanceTo(ja);return l<t.near||l>t.far?null:{distance:l,point:ja.clone(),object:i}}function Ka(i,e,t,n,s,r,a,o,c,l){i.getVertexPosition(o,Bs),i.getVertexPosition(c,ks),i.getVertexPosition(l,Hs);let h=x0(i,e,t,n,Bs,ks,Hs,Za);if(h){s&&(Xa.fromBufferAttribute(s,o),qa.fromBufferAttribute(s,c),Ya.fromBufferAttribute(s,l),h.uv=ns.getInterpolation(Za,Bs,ks,Hs,Xa,qa,Ya,new ze)),r&&(Xa.fromBufferAttribute(r,o),qa.fromBufferAttribute(r,c),Ya.fromBufferAttribute(r,l),h.uv1=ns.getInterpolation(Za,Bs,ks,Hs,Xa,qa,Ya,new ze),h.uv2=h.uv1),a&&(ld.fromBufferAttribute(a,o),hd.fromBufferAttribute(a,c),ud.fromBufferAttribute(a,l),h.normal=ns.getInterpolation(Za,Bs,ks,Hs,ld,hd,ud,new L),h.normal.dot(n.direction)>0&&h.normal.multiplyScalar(-1));let u={a:o,b:c,c:l,normal:new L,materialIndex:0};ns.getNormal(Bs,ks,Hs,u.normal),h.face=u}return h}var Fe=class i extends Nt{constructor(e=1,t=1,n=1,s=1,r=1,a=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:t,depth:n,widthSegments:s,heightSegments:r,depthSegments:a};let o=this;s=Math.floor(s),r=Math.floor(r),a=Math.floor(a);let c=[],l=[],h=[],u=[],d=0,f=0;p("z","y","x",-1,-1,n,t,e,a,r,0),p("z","y","x",1,-1,n,t,-e,a,r,1),p("x","z","y",1,1,e,n,t,s,a,2),p("x","z","y",1,-1,e,n,-t,s,a,3),p("x","y","z",1,-1,e,t,n,s,r,4),p("x","y","z",-1,-1,e,t,-n,s,r,5),this.setIndex(c),this.setAttribute("position",new ut(l,3)),this.setAttribute("normal",new ut(h,3)),this.setAttribute("uv",new ut(u,2));function p(x,g,m,y,_,w,P,A,R,F,M){let E=w/R,O=P/F,j=w/2,ae=P/2,z=A/2,B=R+1,J=F+1,q=0,K=0,$=new L;for(let se=0;se<J;se++){let le=se*O-ae;for(let _e=0;_e<B;_e++){let Z=_e*E-j;$[x]=Z*y,$[g]=le*_,$[m]=z,l.push($.x,$.y,$.z),$[x]=0,$[g]=0,$[m]=A>0?1:-1,h.push($.x,$.y,$.z),u.push(_e/R),u.push(1-se/F),q+=1}}for(let se=0;se<F;se++)for(let le=0;le<R;le++){let _e=d+le+B*se,Z=d+le+B*(se+1),te=d+(le+1)+B*(se+1),xe=d+(le+1)+B*se;c.push(_e,Z,xe),c.push(Z,te,xe),K+=6}o.addGroup(f,K,M),f+=K,d+=q}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new i(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}};function lr(i){let e={};for(let t in i){e[t]={};for(let n in i[t]){let s=i[t][n];s&&(s.isColor||s.isMatrix3||s.isMatrix4||s.isVector2||s.isVector3||s.isVector4||s.isTexture||s.isQuaternion)?s.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[t][n]=null):e[t][n]=s.clone():Array.isArray(s)?e[t][n]=s.slice():e[t][n]=s}}return e}function mn(i){let e={};for(let t=0;t<i.length;t++){let n=lr(i[t]);for(let s in n)e[s]=n[s]}return e}function _0(i){let e=[];for(let t=0;t<i.length;t++)e.push(i[t].clone());return e}function mf(i){return i.getRenderTarget()===null?i.outputColorSpace:ht.workingColorSpace}var y0={clone:lr,merge:mn},v0=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,M0=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`,di=class extends ln{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=v0,this.fragmentShader=M0,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={derivatives:!1,fragDepth:!1,drawBuffers:!1,shaderTextureLOD:!1,clipCullDistance:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=lr(e.uniforms),this.uniformsGroups=_0(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this}toJSON(e){let t=super.toJSON(e);t.glslVersion=this.glslVersion,t.uniforms={};for(let s in this.uniforms){let a=this.uniforms[s].value;a&&a.isTexture?t.uniforms[s]={type:"t",value:a.toJSON(e).uuid}:a&&a.isColor?t.uniforms[s]={type:"c",value:a.getHex()}:a&&a.isVector2?t.uniforms[s]={type:"v2",value:a.toArray()}:a&&a.isVector3?t.uniforms[s]={type:"v3",value:a.toArray()}:a&&a.isVector4?t.uniforms[s]={type:"v4",value:a.toArray()}:a&&a.isMatrix3?t.uniforms[s]={type:"m3",value:a.toArray()}:a&&a.isMatrix4?t.uniforms[s]={type:"m4",value:a.toArray()}:t.uniforms[s]={value:a}}Object.keys(this.defines).length>0&&(t.defines=this.defines),t.vertexShader=this.vertexShader,t.fragmentShader=this.fragmentShader,t.lights=this.lights,t.clipping=this.clipping;let n={};for(let s in this.extensions)this.extensions[s]===!0&&(n[s]=!0);return Object.keys(n).length>0&&(t.extensions=n),t}},Eo=class extends St{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new Xe,this.projectionMatrix=new Xe,this.projectionMatrixInverse=new Xe,this.coordinateSystem=li}copy(e,t){return super.copy(e,t),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(e,t){super.updateWorldMatrix(e,t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}},Xt=class extends Eo{constructor(e=50,t=1,n=.1,s=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=n,this.far=s,this.focus=10,this.aspect=t,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){let t=.5*this.getFilmHeight()/e;this.fov=or*2*Math.atan(t),this.updateProjectionMatrix()}getFocalLength(){let e=Math.tan(Xr*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return or*2*Math.atan(Math.tan(Xr*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}setViewOffset(e,t,n,s,r,a){this.aspect=e/t,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=s,this.view.width=r,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let e=this.near,t=e*Math.tan(Xr*.5*this.fov)/this.zoom,n=2*t,s=this.aspect*n,r=-.5*s,a=this.view;if(this.view!==null&&this.view.enabled){let c=a.fullWidth,l=a.fullHeight;r+=a.offsetX*s/c,t-=a.offsetY*n/l,s*=a.width/c,n*=a.height/l}let o=this.filmOffset;o!==0&&(r+=e*o/this.getFilmWidth()),this.projectionMatrix.makePerspective(r,r+s,t,t-n,e,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){let t=super.toJSON(e);return t.object.fov=this.fov,t.object.zoom=this.zoom,t.object.near=this.near,t.object.far=this.far,t.object.focus=this.focus,t.object.aspect=this.aspect,this.view!==null&&(t.object.view=Object.assign({},this.view)),t.object.filmGauge=this.filmGauge,t.object.filmOffset=this.filmOffset,t}},Gs=-90,Vs=1,vl=class extends St{constructor(e,t,n){super(),this.type="CubeCamera",this.renderTarget=n,this.coordinateSystem=null,this.activeMipmapLevel=0;let s=new Xt(Gs,Vs,e,t);s.layers=this.layers,this.add(s);let r=new Xt(Gs,Vs,e,t);r.layers=this.layers,this.add(r);let a=new Xt(Gs,Vs,e,t);a.layers=this.layers,this.add(a);let o=new Xt(Gs,Vs,e,t);o.layers=this.layers,this.add(o);let c=new Xt(Gs,Vs,e,t);c.layers=this.layers,this.add(c);let l=new Xt(Gs,Vs,e,t);l.layers=this.layers,this.add(l)}updateCoordinateSystem(){let e=this.coordinateSystem,t=this.children.concat(),[n,s,r,a,o,c]=t;for(let l of t)this.remove(l);if(e===li)n.up.set(0,1,0),n.lookAt(1,0,0),s.up.set(0,1,0),s.lookAt(-1,0,0),r.up.set(0,0,-1),r.lookAt(0,1,0),a.up.set(0,0,1),a.lookAt(0,-1,0),o.up.set(0,1,0),o.lookAt(0,0,1),c.up.set(0,1,0),c.lookAt(0,0,-1);else if(e===go)n.up.set(0,-1,0),n.lookAt(-1,0,0),s.up.set(0,-1,0),s.lookAt(1,0,0),r.up.set(0,0,1),r.lookAt(0,1,0),a.up.set(0,0,-1),a.lookAt(0,-1,0),o.up.set(0,-1,0),o.lookAt(0,0,1),c.up.set(0,-1,0),c.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(let l of t)this.add(l),l.updateMatrixWorld()}update(e,t){this.parent===null&&this.updateMatrixWorld();let{renderTarget:n,activeMipmapLevel:s}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());let[r,a,o,c,l,h]=this.children,u=e.getRenderTarget(),d=e.getActiveCubeFace(),f=e.getActiveMipmapLevel(),p=e.xr.enabled;e.xr.enabled=!1;let x=n.texture.generateMipmaps;n.texture.generateMipmaps=!1,e.setRenderTarget(n,0,s),e.render(t,r),e.setRenderTarget(n,1,s),e.render(t,a),e.setRenderTarget(n,2,s),e.render(t,o),e.setRenderTarget(n,3,s),e.render(t,c),e.setRenderTarget(n,4,s),e.render(t,l),n.texture.generateMipmaps=x,e.setRenderTarget(n,5,s),e.render(t,h),e.setRenderTarget(u,d,f),e.xr.enabled=p,n.texture.needsPMREMUpdate=!0}},To=class extends en{constructor(e,t,n,s,r,a,o,c,l,h){e=e!==void 0?e:[],t=t!==void 0?t:ir,super(e,t,n,s,r,a,o,c,l,h),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}},Ml=class extends ui{constructor(e=1,t={}){super(e,e,t),this.isWebGLCubeRenderTarget=!0;let n={width:e,height:e,depth:1},s=[n,n,n,n,n,n];t.encoding!==void 0&&(Yr("THREE.WebGLCubeRenderTarget: option.encoding has been replaced by option.colorSpace."),t.colorSpace=t.encoding===rs?Tt:Cn),this.texture=new To(s,t.mapping,t.wrapS,t.wrapT,t.magFilter,t.minFilter,t.format,t.type,t.anisotropy,t.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.generateMipmaps=t.generateMipmaps!==void 0?t.generateMipmaps:!1,this.texture.minFilter=t.minFilter!==void 0?t.minFilter:gn}fromEquirectangularTexture(e,t){this.texture.type=t.type,this.texture.colorSpace=t.colorSpace,this.texture.generateMipmaps=t.generateMipmaps,this.texture.minFilter=t.minFilter,this.texture.magFilter=t.magFilter;let n={uniforms:{tEquirect:{value:null}},vertexShader:`

				varying vec3 vWorldDirection;

				vec3 transformDirection( in vec3 dir, in mat4 matrix ) {

					return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );

				}

				void main() {

					vWorldDirection = transformDirection( position, modelMatrix );

					#include <begin_vertex>
					#include <project_vertex>

				}
			`,fragmentShader:`

				uniform sampler2D tEquirect;

				varying vec3 vWorldDirection;

				#include <common>

				void main() {

					vec3 direction = normalize( vWorldDirection );

					vec2 sampleUV = equirectUv( direction );

					gl_FragColor = texture2D( tEquirect, sampleUV );

				}
			`},s=new Fe(5,5,5),r=new di({name:"CubemapFromEquirect",uniforms:lr(n.uniforms),vertexShader:n.vertexShader,fragmentShader:n.fragmentShader,side:cn,blending:Ci});r.uniforms.tEquirect.value=t;let a=new de(s,r),o=t.minFilter;return t.minFilter===Ii&&(t.minFilter=gn),new vl(1,10,this).update(e,a),t.minFilter=o,a.geometry.dispose(),a.material.dispose(),this}clear(e,t,n,s){let r=e.getRenderTarget();for(let a=0;a<6;a++)e.setRenderTarget(this,a),e.clear(t,n,s);e.setRenderTarget(r)}},Qc=new L,b0=new L,w0=new st,oi=class{constructor(e=new L(1,0,0),t=0){this.isPlane=!0,this.normal=e,this.constant=t}set(e,t){return this.normal.copy(e),this.constant=t,this}setComponents(e,t,n,s){return this.normal.set(e,t,n),this.constant=s,this}setFromNormalAndCoplanarPoint(e,t){return this.normal.copy(e),this.constant=-t.dot(this.normal),this}setFromCoplanarPoints(e,t,n){let s=Qc.subVectors(n,t).cross(b0.subVectors(e,t)).normalize();return this.setFromNormalAndCoplanarPoint(s,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){let e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,t){return t.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,t){let n=e.delta(Qc),s=this.normal.dot(n);if(s===0)return this.distanceToPoint(e.start)===0?t.copy(e.start):null;let r=-(e.start.dot(this.normal)+this.constant)/s;return r<0||r>1?null:t.copy(e.start).addScaledVector(n,r)}intersectsLine(e){let t=this.distanceToPoint(e.start),n=this.distanceToPoint(e.end);return t<0&&n>0||n<0&&t>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,t){let n=t||w0.getNormalMatrix(e),s=this.coplanarPoint(Qc).applyMatrix4(e),r=this.normal.applyMatrix3(n).normalize();return this.constant=-s.dot(r),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}},Ji=new wn,$a=new L,Qr=class{constructor(e=new oi,t=new oi,n=new oi,s=new oi,r=new oi,a=new oi){this.planes=[e,t,n,s,r,a]}set(e,t,n,s,r,a){let o=this.planes;return o[0].copy(e),o[1].copy(t),o[2].copy(n),o[3].copy(s),o[4].copy(r),o[5].copy(a),this}copy(e){let t=this.planes;for(let n=0;n<6;n++)t[n].copy(e.planes[n]);return this}setFromProjectionMatrix(e,t=li){let n=this.planes,s=e.elements,r=s[0],a=s[1],o=s[2],c=s[3],l=s[4],h=s[5],u=s[6],d=s[7],f=s[8],p=s[9],x=s[10],g=s[11],m=s[12],y=s[13],_=s[14],w=s[15];if(n[0].setComponents(c-r,d-l,g-f,w-m).normalize(),n[1].setComponents(c+r,d+l,g+f,w+m).normalize(),n[2].setComponents(c+a,d+h,g+p,w+y).normalize(),n[3].setComponents(c-a,d-h,g-p,w-y).normalize(),n[4].setComponents(c-o,d-u,g-x,w-_).normalize(),t===li)n[5].setComponents(c+o,d+u,g+x,w+_).normalize();else if(t===go)n[5].setComponents(o,u,x,_).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+t);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),Ji.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{let t=e.geometry;t.boundingSphere===null&&t.computeBoundingSphere(),Ji.copy(t.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(Ji)}intersectsSprite(e){return Ji.center.set(0,0,0),Ji.radius=.7071067811865476,Ji.applyMatrix4(e.matrixWorld),this.intersectsSphere(Ji)}intersectsSphere(e){let t=this.planes,n=e.center,s=-e.radius;for(let r=0;r<6;r++)if(t[r].distanceToPoint(n)<s)return!1;return!0}intersectsBox(e){let t=this.planes;for(let n=0;n<6;n++){let s=t[n];if($a.x=s.normal.x>0?e.max.x:e.min.x,$a.y=s.normal.y>0?e.max.y:e.min.y,$a.z=s.normal.z>0?e.max.z:e.min.z,s.distanceToPoint($a)<0)return!1}return!0}containsPoint(e){let t=this.planes;for(let n=0;n<6;n++)if(t[n].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}};function gf(){let i=null,e=!1,t=null,n=null;function s(r,a){t(r,a),n=i.requestAnimationFrame(s)}return{start:function(){e!==!0&&t!==null&&(n=i.requestAnimationFrame(s),e=!0)},stop:function(){i.cancelAnimationFrame(n),e=!1},setAnimationLoop:function(r){t=r},setContext:function(r){i=r}}}function S0(i,e){let t=e.isWebGL2,n=new WeakMap;function s(l,h){let u=l.array,d=l.usage,f=u.byteLength,p=i.createBuffer();i.bindBuffer(h,p),i.bufferData(h,u,d),l.onUploadCallback();let x;if(u instanceof Float32Array)x=i.FLOAT;else if(u instanceof Uint16Array)if(l.isFloat16BufferAttribute)if(t)x=i.HALF_FLOAT;else throw new Error("THREE.WebGLAttributes: Usage of Float16BufferAttribute requires WebGL2.");else x=i.UNSIGNED_SHORT;else if(u instanceof Int16Array)x=i.SHORT;else if(u instanceof Uint32Array)x=i.UNSIGNED_INT;else if(u instanceof Int32Array)x=i.INT;else if(u instanceof Int8Array)x=i.BYTE;else if(u instanceof Uint8Array)x=i.UNSIGNED_BYTE;else if(u instanceof Uint8ClampedArray)x=i.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+u);return{buffer:p,type:x,bytesPerElement:u.BYTES_PER_ELEMENT,version:l.version,size:f}}function r(l,h,u){let d=h.array,f=h._updateRange,p=h.updateRanges;if(i.bindBuffer(u,l),f.count===-1&&p.length===0&&i.bufferSubData(u,0,d),p.length!==0){for(let x=0,g=p.length;x<g;x++){let m=p[x];t?i.bufferSubData(u,m.start*d.BYTES_PER_ELEMENT,d,m.start,m.count):i.bufferSubData(u,m.start*d.BYTES_PER_ELEMENT,d.subarray(m.start,m.start+m.count))}h.clearUpdateRanges()}f.count!==-1&&(t?i.bufferSubData(u,f.offset*d.BYTES_PER_ELEMENT,d,f.offset,f.count):i.bufferSubData(u,f.offset*d.BYTES_PER_ELEMENT,d.subarray(f.offset,f.offset+f.count)),f.count=-1),h.onUploadCallback()}function a(l){return l.isInterleavedBufferAttribute&&(l=l.data),n.get(l)}function o(l){l.isInterleavedBufferAttribute&&(l=l.data);let h=n.get(l);h&&(i.deleteBuffer(h.buffer),n.delete(l))}function c(l,h){if(l.isGLBufferAttribute){let d=n.get(l);(!d||d.version<l.version)&&n.set(l,{buffer:l.buffer,type:l.type,bytesPerElement:l.elementSize,version:l.version});return}l.isInterleavedBufferAttribute&&(l=l.data);let u=n.get(l);if(u===void 0)n.set(l,s(l,h));else if(u.version<l.version){if(u.size!==l.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");r(u.buffer,l,h),u.version=l.version}}return{get:a,remove:o,update:c}}var zi=class i extends Nt{constructor(e=1,t=1,n=1,s=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:t,widthSegments:n,heightSegments:s};let r=e/2,a=t/2,o=Math.floor(n),c=Math.floor(s),l=o+1,h=c+1,u=e/o,d=t/c,f=[],p=[],x=[],g=[];for(let m=0;m<h;m++){let y=m*d-a;for(let _=0;_<l;_++){let w=_*u-r;p.push(w,-y,0),x.push(0,0,1),g.push(_/o),g.push(1-m/c)}}for(let m=0;m<c;m++)for(let y=0;y<o;y++){let _=y+l*m,w=y+l*(m+1),P=y+1+l*(m+1),A=y+1+l*m;f.push(_,w,A),f.push(w,P,A)}this.setIndex(f),this.setAttribute("position",new ut(p,3)),this.setAttribute("normal",new ut(x,3)),this.setAttribute("uv",new ut(g,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new i(e.width,e.height,e.widthSegments,e.heightSegments)}},E0=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,T0=`#ifdef USE_ALPHAHASH
	const float ALPHA_HASH_SCALE = 0.05;
	float hash2D( vec2 value ) {
		return fract( 1.0e4 * sin( 17.0 * value.x + 0.1 * value.y ) * ( 0.1 + abs( sin( 13.0 * value.y + value.x ) ) ) );
	}
	float hash3D( vec3 value ) {
		return hash2D( vec2( hash2D( value.xy ), value.z ) );
	}
	float getAlphaHashThreshold( vec3 position ) {
		float maxDeriv = max(
			length( dFdx( position.xyz ) ),
			length( dFdy( position.xyz ) )
		);
		float pixScale = 1.0 / ( ALPHA_HASH_SCALE * maxDeriv );
		vec2 pixScales = vec2(
			exp2( floor( log2( pixScale ) ) ),
			exp2( ceil( log2( pixScale ) ) )
		);
		vec2 alpha = vec2(
			hash3D( floor( pixScales.x * position.xyz ) ),
			hash3D( floor( pixScales.y * position.xyz ) )
		);
		float lerpFactor = fract( log2( pixScale ) );
		float x = ( 1.0 - lerpFactor ) * alpha.x + lerpFactor * alpha.y;
		float a = min( lerpFactor, 1.0 - lerpFactor );
		vec3 cases = vec3(
			x * x / ( 2.0 * a * ( 1.0 - a ) ),
			( x - 0.5 * a ) / ( 1.0 - a ),
			1.0 - ( ( 1.0 - x ) * ( 1.0 - x ) / ( 2.0 * a * ( 1.0 - a ) ) )
		);
		float threshold = ( x < ( 1.0 - a ) )
			? ( ( x < a ) ? cases.x : cases.y )
			: cases.z;
		return clamp( threshold , 1.0e-6, 1.0 );
	}
#endif`,A0=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,R0=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,C0=`#ifdef USE_ALPHATEST
	if ( diffuseColor.a < alphaTest ) discard;
#endif`,P0=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,L0=`#ifdef USE_AOMAP
	float ambientOcclusion = ( texture2D( aoMap, vAoMapUv ).r - 1.0 ) * aoMapIntensity + 1.0;
	reflectedLight.indirectDiffuse *= ambientOcclusion;
	#if defined( USE_CLEARCOAT ) 
		clearcoatSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_SHEEN ) 
		sheenSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD )
		float dotNV = saturate( dot( geometryNormal, geometryViewDir ) );
		reflectedLight.indirectSpecular *= computeSpecularOcclusion( dotNV, ambientOcclusion, material.roughness );
	#endif
#endif`,I0=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,z0=`#ifdef USE_BATCHING
	attribute float batchId;
	uniform highp sampler2D batchingTexture;
	mat4 getBatchingMatrix( const in float i ) {
		int size = textureSize( batchingTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( batchingTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( batchingTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( batchingTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( batchingTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
#endif`,D0=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( batchId );
#endif`,N0=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,U0=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,O0=`float G_BlinnPhong_Implicit( ) {
	return 0.25;
}
float D_BlinnPhong( const in float shininess, const in float dotNH ) {
	return RECIPROCAL_PI * ( shininess * 0.5 + 1.0 ) * pow( dotNH, shininess );
}
vec3 BRDF_BlinnPhong( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in vec3 specularColor, const in float shininess ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( specularColor, 1.0, dotVH );
	float G = G_BlinnPhong_Implicit( );
	float D = D_BlinnPhong( shininess, dotNH );
	return F * ( G * D );
} // validated`,F0=`#ifdef USE_IRIDESCENCE
	const mat3 XYZ_TO_REC709 = mat3(
		 3.2404542, -0.9692660,  0.0556434,
		-1.5371385,  1.8760108, -0.2040259,
		-0.4985314,  0.0415560,  1.0572252
	);
	vec3 Fresnel0ToIor( vec3 fresnel0 ) {
		vec3 sqrtF0 = sqrt( fresnel0 );
		return ( vec3( 1.0 ) + sqrtF0 ) / ( vec3( 1.0 ) - sqrtF0 );
	}
	vec3 IorToFresnel0( vec3 transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - vec3( incidentIor ) ) / ( transmittedIor + vec3( incidentIor ) ) );
	}
	float IorToFresnel0( float transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - incidentIor ) / ( transmittedIor + incidentIor ));
	}
	vec3 evalSensitivity( float OPD, vec3 shift ) {
		float phase = 2.0 * PI * OPD * 1.0e-9;
		vec3 val = vec3( 5.4856e-13, 4.4201e-13, 5.2481e-13 );
		vec3 pos = vec3( 1.6810e+06, 1.7953e+06, 2.2084e+06 );
		vec3 var = vec3( 4.3278e+09, 9.3046e+09, 6.6121e+09 );
		vec3 xyz = val * sqrt( 2.0 * PI * var ) * cos( pos * phase + shift ) * exp( - pow2( phase ) * var );
		xyz.x += 9.7470e-14 * sqrt( 2.0 * PI * 4.5282e+09 ) * cos( 2.2399e+06 * phase + shift[ 0 ] ) * exp( - 4.5282e+09 * pow2( phase ) );
		xyz /= 1.0685e-7;
		vec3 rgb = XYZ_TO_REC709 * xyz;
		return rgb;
	}
	vec3 evalIridescence( float outsideIOR, float eta2, float cosTheta1, float thinFilmThickness, vec3 baseF0 ) {
		vec3 I;
		float iridescenceIOR = mix( outsideIOR, eta2, smoothstep( 0.0, 0.03, thinFilmThickness ) );
		float sinTheta2Sq = pow2( outsideIOR / iridescenceIOR ) * ( 1.0 - pow2( cosTheta1 ) );
		float cosTheta2Sq = 1.0 - sinTheta2Sq;
		if ( cosTheta2Sq < 0.0 ) {
			return vec3( 1.0 );
		}
		float cosTheta2 = sqrt( cosTheta2Sq );
		float R0 = IorToFresnel0( iridescenceIOR, outsideIOR );
		float R12 = F_Schlick( R0, 1.0, cosTheta1 );
		float T121 = 1.0 - R12;
		float phi12 = 0.0;
		if ( iridescenceIOR < outsideIOR ) phi12 = PI;
		float phi21 = PI - phi12;
		vec3 baseIOR = Fresnel0ToIor( clamp( baseF0, 0.0, 0.9999 ) );		vec3 R1 = IorToFresnel0( baseIOR, iridescenceIOR );
		vec3 R23 = F_Schlick( R1, 1.0, cosTheta2 );
		vec3 phi23 = vec3( 0.0 );
		if ( baseIOR[ 0 ] < iridescenceIOR ) phi23[ 0 ] = PI;
		if ( baseIOR[ 1 ] < iridescenceIOR ) phi23[ 1 ] = PI;
		if ( baseIOR[ 2 ] < iridescenceIOR ) phi23[ 2 ] = PI;
		float OPD = 2.0 * iridescenceIOR * thinFilmThickness * cosTheta2;
		vec3 phi = vec3( phi21 ) + phi23;
		vec3 R123 = clamp( R12 * R23, 1e-5, 0.9999 );
		vec3 r123 = sqrt( R123 );
		vec3 Rs = pow2( T121 ) * R23 / ( vec3( 1.0 ) - R123 );
		vec3 C0 = R12 + Rs;
		I = C0;
		vec3 Cm = Rs - T121;
		for ( int m = 1; m <= 2; ++ m ) {
			Cm *= r123;
			vec3 Sm = 2.0 * evalSensitivity( float( m ) * OPD, float( m ) * phi );
			I += Cm * Sm;
		}
		return max( I, vec3( 0.0 ) );
	}
#endif`,B0=`#ifdef USE_BUMPMAP
	uniform sampler2D bumpMap;
	uniform float bumpScale;
	vec2 dHdxy_fwd() {
		vec2 dSTdx = dFdx( vBumpMapUv );
		vec2 dSTdy = dFdy( vBumpMapUv );
		float Hll = bumpScale * texture2D( bumpMap, vBumpMapUv ).x;
		float dBx = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdx ).x - Hll;
		float dBy = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdy ).x - Hll;
		return vec2( dBx, dBy );
	}
	vec3 perturbNormalArb( vec3 surf_pos, vec3 surf_norm, vec2 dHdxy, float faceDirection ) {
		vec3 vSigmaX = normalize( dFdx( surf_pos.xyz ) );
		vec3 vSigmaY = normalize( dFdy( surf_pos.xyz ) );
		vec3 vN = surf_norm;
		vec3 R1 = cross( vSigmaY, vN );
		vec3 R2 = cross( vN, vSigmaX );
		float fDet = dot( vSigmaX, R1 ) * faceDirection;
		vec3 vGrad = sign( fDet ) * ( dHdxy.x * R1 + dHdxy.y * R2 );
		return normalize( abs( fDet ) * surf_norm - vGrad );
	}
#endif`,k0=`#if NUM_CLIPPING_PLANES > 0
	vec4 plane;
	#pragma unroll_loop_start
	for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
		plane = clippingPlanes[ i ];
		if ( dot( vClipPosition, plane.xyz ) > plane.w ) discard;
	}
	#pragma unroll_loop_end
	#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
		bool clipped = true;
		#pragma unroll_loop_start
		for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			clipped = ( dot( vClipPosition, plane.xyz ) > plane.w ) && clipped;
		}
		#pragma unroll_loop_end
		if ( clipped ) discard;
	#endif
#endif`,H0=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,G0=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,V0=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,W0=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,X0=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,q0=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR )
	varying vec3 vColor;
#endif`,Y0=`#if defined( USE_COLOR_ALPHA )
	vColor = vec4( 1.0 );
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR )
	vColor = vec3( 1.0 );
#endif
#ifdef USE_COLOR
	vColor *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.xyz *= instanceColor.xyz;
#endif`,Z0=`#define PI 3.141592653589793
#define PI2 6.283185307179586
#define PI_HALF 1.5707963267948966
#define RECIPROCAL_PI 0.3183098861837907
#define RECIPROCAL_PI2 0.15915494309189535
#define EPSILON 1e-6
#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
#define whiteComplement( a ) ( 1.0 - saturate( a ) )
float pow2( const in float x ) { return x*x; }
vec3 pow2( const in vec3 x ) { return x*x; }
float pow3( const in float x ) { return x*x*x; }
float pow4( const in float x ) { float x2 = x*x; return x2*x2; }
float max3( const in vec3 v ) { return max( max( v.x, v.y ), v.z ); }
float average( const in vec3 v ) { return dot( v, vec3( 0.3333333 ) ); }
highp float rand( const in vec2 uv ) {
	const highp float a = 12.9898, b = 78.233, c = 43758.5453;
	highp float dt = dot( uv.xy, vec2( a,b ) ), sn = mod( dt, PI );
	return fract( sin( sn ) * c );
}
#ifdef HIGH_PRECISION
	float precisionSafeLength( vec3 v ) { return length( v ); }
#else
	float precisionSafeLength( vec3 v ) {
		float maxComponent = max3( abs( v ) );
		return length( v / maxComponent ) * maxComponent;
	}
#endif
struct IncidentLight {
	vec3 color;
	vec3 direction;
	bool visible;
};
struct ReflectedLight {
	vec3 directDiffuse;
	vec3 directSpecular;
	vec3 indirectDiffuse;
	vec3 indirectSpecular;
};
#ifdef USE_ALPHAHASH
	varying vec3 vPosition;
#endif
vec3 transformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );
}
vec3 inverseTransformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( vec4( dir, 0.0 ) * matrix ).xyz );
}
mat3 transposeMat3( const in mat3 m ) {
	mat3 tmp;
	tmp[ 0 ] = vec3( m[ 0 ].x, m[ 1 ].x, m[ 2 ].x );
	tmp[ 1 ] = vec3( m[ 0 ].y, m[ 1 ].y, m[ 2 ].y );
	tmp[ 2 ] = vec3( m[ 0 ].z, m[ 1 ].z, m[ 2 ].z );
	return tmp;
}
float luminance( const in vec3 rgb ) {
	const vec3 weights = vec3( 0.2126729, 0.7151522, 0.0721750 );
	return dot( weights, rgb );
}
bool isPerspectiveMatrix( mat4 m ) {
	return m[ 2 ][ 3 ] == - 1.0;
}
vec2 equirectUv( in vec3 dir ) {
	float u = atan( dir.z, dir.x ) * RECIPROCAL_PI2 + 0.5;
	float v = asin( clamp( dir.y, - 1.0, 1.0 ) ) * RECIPROCAL_PI + 0.5;
	return vec2( u, v );
}
vec3 BRDF_Lambert( const in vec3 diffuseColor ) {
	return RECIPROCAL_PI * diffuseColor;
}
vec3 F_Schlick( const in vec3 f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
}
float F_Schlick( const in float f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
} // validated`,j0=`#ifdef ENVMAP_TYPE_CUBE_UV
	#define cubeUV_minMipLevel 4.0
	#define cubeUV_minTileSize 16.0
	float getFace( vec3 direction ) {
		vec3 absDirection = abs( direction );
		float face = - 1.0;
		if ( absDirection.x > absDirection.z ) {
			if ( absDirection.x > absDirection.y )
				face = direction.x > 0.0 ? 0.0 : 3.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		} else {
			if ( absDirection.z > absDirection.y )
				face = direction.z > 0.0 ? 2.0 : 5.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		}
		return face;
	}
	vec2 getUV( vec3 direction, float face ) {
		vec2 uv;
		if ( face == 0.0 ) {
			uv = vec2( direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 1.0 ) {
			uv = vec2( - direction.x, - direction.z ) / abs( direction.y );
		} else if ( face == 2.0 ) {
			uv = vec2( - direction.x, direction.y ) / abs( direction.z );
		} else if ( face == 3.0 ) {
			uv = vec2( - direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 4.0 ) {
			uv = vec2( - direction.x, direction.z ) / abs( direction.y );
		} else {
			uv = vec2( direction.x, direction.y ) / abs( direction.z );
		}
		return 0.5 * ( uv + 1.0 );
	}
	vec3 bilinearCubeUV( sampler2D envMap, vec3 direction, float mipInt ) {
		float face = getFace( direction );
		float filterInt = max( cubeUV_minMipLevel - mipInt, 0.0 );
		mipInt = max( mipInt, cubeUV_minMipLevel );
		float faceSize = exp2( mipInt );
		highp vec2 uv = getUV( direction, face ) * ( faceSize - 2.0 ) + 1.0;
		if ( face > 2.0 ) {
			uv.y += faceSize;
			face -= 3.0;
		}
		uv.x += face * faceSize;
		uv.x += filterInt * 3.0 * cubeUV_minTileSize;
		uv.y += 4.0 * ( exp2( CUBEUV_MAX_MIP ) - faceSize );
		uv.x *= CUBEUV_TEXEL_WIDTH;
		uv.y *= CUBEUV_TEXEL_HEIGHT;
		#ifdef texture2DGradEXT
			return texture2DGradEXT( envMap, uv, vec2( 0.0 ), vec2( 0.0 ) ).rgb;
		#else
			return texture2D( envMap, uv ).rgb;
		#endif
	}
	#define cubeUV_r0 1.0
	#define cubeUV_m0 - 2.0
	#define cubeUV_r1 0.8
	#define cubeUV_m1 - 1.0
	#define cubeUV_r4 0.4
	#define cubeUV_m4 2.0
	#define cubeUV_r5 0.305
	#define cubeUV_m5 3.0
	#define cubeUV_r6 0.21
	#define cubeUV_m6 4.0
	float roughnessToMip( float roughness ) {
		float mip = 0.0;
		if ( roughness >= cubeUV_r1 ) {
			mip = ( cubeUV_r0 - roughness ) * ( cubeUV_m1 - cubeUV_m0 ) / ( cubeUV_r0 - cubeUV_r1 ) + cubeUV_m0;
		} else if ( roughness >= cubeUV_r4 ) {
			mip = ( cubeUV_r1 - roughness ) * ( cubeUV_m4 - cubeUV_m1 ) / ( cubeUV_r1 - cubeUV_r4 ) + cubeUV_m1;
		} else if ( roughness >= cubeUV_r5 ) {
			mip = ( cubeUV_r4 - roughness ) * ( cubeUV_m5 - cubeUV_m4 ) / ( cubeUV_r4 - cubeUV_r5 ) + cubeUV_m4;
		} else if ( roughness >= cubeUV_r6 ) {
			mip = ( cubeUV_r5 - roughness ) * ( cubeUV_m6 - cubeUV_m5 ) / ( cubeUV_r5 - cubeUV_r6 ) + cubeUV_m5;
		} else {
			mip = - 2.0 * log2( 1.16 * roughness );		}
		return mip;
	}
	vec4 textureCubeUV( sampler2D envMap, vec3 sampleDir, float roughness ) {
		float mip = clamp( roughnessToMip( roughness ), cubeUV_m0, CUBEUV_MAX_MIP );
		float mipF = fract( mip );
		float mipInt = floor( mip );
		vec3 color0 = bilinearCubeUV( envMap, sampleDir, mipInt );
		if ( mipF == 0.0 ) {
			return vec4( color0, 1.0 );
		} else {
			vec3 color1 = bilinearCubeUV( envMap, sampleDir, mipInt + 1.0 );
			return vec4( mix( color0, color1, mipF ), 1.0 );
		}
	}
#endif`,K0=`vec3 transformedNormal = objectNormal;
#ifdef USE_TANGENT
	vec3 transformedTangent = objectTangent;
#endif
#ifdef USE_BATCHING
	mat3 bm = mat3( batchingMatrix );
	transformedNormal /= vec3( dot( bm[ 0 ], bm[ 0 ] ), dot( bm[ 1 ], bm[ 1 ] ), dot( bm[ 2 ], bm[ 2 ] ) );
	transformedNormal = bm * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = bm * transformedTangent;
	#endif
#endif
#ifdef USE_INSTANCING
	mat3 im = mat3( instanceMatrix );
	transformedNormal /= vec3( dot( im[ 0 ], im[ 0 ] ), dot( im[ 1 ], im[ 1 ] ), dot( im[ 2 ], im[ 2 ] ) );
	transformedNormal = im * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = im * transformedTangent;
	#endif
#endif
transformedNormal = normalMatrix * transformedNormal;
#ifdef FLIP_SIDED
	transformedNormal = - transformedNormal;
#endif
#ifdef USE_TANGENT
	transformedTangent = ( modelViewMatrix * vec4( transformedTangent, 0.0 ) ).xyz;
	#ifdef FLIP_SIDED
		transformedTangent = - transformedTangent;
	#endif
#endif`,$0=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,J0=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,Q0=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,eg=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,tg="gl_FragColor = linearToOutputTexel( gl_FragColor );",ng=`
const mat3 LINEAR_SRGB_TO_LINEAR_DISPLAY_P3 = mat3(
	vec3( 0.8224621, 0.177538, 0.0 ),
	vec3( 0.0331941, 0.9668058, 0.0 ),
	vec3( 0.0170827, 0.0723974, 0.9105199 )
);
const mat3 LINEAR_DISPLAY_P3_TO_LINEAR_SRGB = mat3(
	vec3( 1.2249401, - 0.2249404, 0.0 ),
	vec3( - 0.0420569, 1.0420571, 0.0 ),
	vec3( - 0.0196376, - 0.0786361, 1.0982735 )
);
vec4 LinearSRGBToLinearDisplayP3( in vec4 value ) {
	return vec4( value.rgb * LINEAR_SRGB_TO_LINEAR_DISPLAY_P3, value.a );
}
vec4 LinearDisplayP3ToLinearSRGB( in vec4 value ) {
	return vec4( value.rgb * LINEAR_DISPLAY_P3_TO_LINEAR_SRGB, value.a );
}
vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}
vec4 LinearToLinear( in vec4 value ) {
	return value;
}
vec4 LinearTosRGB( in vec4 value ) {
	return sRGBTransferOETF( value );
}`,ig=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vec3 cameraToFrag;
		if ( isOrthographic ) {
			cameraToFrag = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToFrag = normalize( vWorldPosition - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vec3 reflectVec = reflect( cameraToFrag, worldNormal );
		#else
			vec3 reflectVec = refract( cameraToFrag, worldNormal, refractionRatio );
		#endif
	#else
		vec3 reflectVec = vReflect;
	#endif
	#ifdef ENVMAP_TYPE_CUBE
		vec4 envColor = textureCube( envMap, vec3( flipEnvMap * reflectVec.x, reflectVec.yz ) );
	#else
		vec4 envColor = vec4( 0.0 );
	#endif
	#ifdef ENVMAP_BLENDING_MULTIPLY
		outgoingLight = mix( outgoingLight, outgoingLight * envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_MIX )
		outgoingLight = mix( outgoingLight, envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_ADD )
		outgoingLight += envColor.xyz * specularStrength * reflectivity;
	#endif
#endif`,sg=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,rg=`#ifdef USE_ENVMAP
	uniform float reflectivity;
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		varying vec3 vWorldPosition;
		uniform float refractionRatio;
	#else
		varying vec3 vReflect;
	#endif
#endif`,ag=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,og=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vWorldPosition = worldPosition.xyz;
	#else
		vec3 cameraToVertex;
		if ( isOrthographic ) {
			cameraToVertex = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToVertex = normalize( worldPosition.xyz - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vReflect = reflect( cameraToVertex, worldNormal );
		#else
			vReflect = refract( cameraToVertex, worldNormal, refractionRatio );
		#endif
	#endif
#endif`,cg=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,lg=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,hg=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,ug=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,dg=`#ifdef USE_GRADIENTMAP
	uniform sampler2D gradientMap;
#endif
vec3 getGradientIrradiance( vec3 normal, vec3 lightDirection ) {
	float dotNL = dot( normal, lightDirection );
	vec2 coord = vec2( dotNL * 0.5 + 0.5, 0.0 );
	#ifdef USE_GRADIENTMAP
		return vec3( texture2D( gradientMap, coord ).r );
	#else
		vec2 fw = fwidth( coord ) * 0.5;
		return mix( vec3( 0.7 ), vec3( 1.0 ), smoothstep( 0.7 - fw.x, 0.7 + fw.x, coord.x ) );
	#endif
}`,fg=`#ifdef USE_LIGHTMAP
	vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
	vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
	reflectedLight.indirectDiffuse += lightMapIrradiance;
#endif`,pg=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,mg=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,gg=`varying vec3 vViewPosition;
struct LambertMaterial {
	vec3 diffuseColor;
	float specularStrength;
};
void RE_Direct_Lambert( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Lambert( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Lambert
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,xg=`uniform bool receiveShadow;
uniform vec3 ambientLightColor;
#if defined( USE_LIGHT_PROBES )
	uniform vec3 lightProbe[ 9 ];
#endif
vec3 shGetIrradianceAt( in vec3 normal, in vec3 shCoefficients[ 9 ] ) {
	float x = normal.x, y = normal.y, z = normal.z;
	vec3 result = shCoefficients[ 0 ] * 0.886227;
	result += shCoefficients[ 1 ] * 2.0 * 0.511664 * y;
	result += shCoefficients[ 2 ] * 2.0 * 0.511664 * z;
	result += shCoefficients[ 3 ] * 2.0 * 0.511664 * x;
	result += shCoefficients[ 4 ] * 2.0 * 0.429043 * x * y;
	result += shCoefficients[ 5 ] * 2.0 * 0.429043 * y * z;
	result += shCoefficients[ 6 ] * ( 0.743125 * z * z - 0.247708 );
	result += shCoefficients[ 7 ] * 2.0 * 0.429043 * x * z;
	result += shCoefficients[ 8 ] * 0.429043 * ( x * x - y * y );
	return result;
}
vec3 getLightProbeIrradiance( const in vec3 lightProbe[ 9 ], const in vec3 normal ) {
	vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
	vec3 irradiance = shGetIrradianceAt( worldNormal, lightProbe );
	return irradiance;
}
vec3 getAmbientLightIrradiance( const in vec3 ambientLightColor ) {
	vec3 irradiance = ambientLightColor;
	return irradiance;
}
float getDistanceAttenuation( const in float lightDistance, const in float cutoffDistance, const in float decayExponent ) {
	#if defined ( LEGACY_LIGHTS )
		if ( cutoffDistance > 0.0 && decayExponent > 0.0 ) {
			return pow( saturate( - lightDistance / cutoffDistance + 1.0 ), decayExponent );
		}
		return 1.0;
	#else
		float distanceFalloff = 1.0 / max( pow( lightDistance, decayExponent ), 0.01 );
		if ( cutoffDistance > 0.0 ) {
			distanceFalloff *= pow2( saturate( 1.0 - pow4( lightDistance / cutoffDistance ) ) );
		}
		return distanceFalloff;
	#endif
}
float getSpotAttenuation( const in float coneCosine, const in float penumbraCosine, const in float angleCosine ) {
	return smoothstep( coneCosine, penumbraCosine, angleCosine );
}
#if NUM_DIR_LIGHTS > 0
	struct DirectionalLight {
		vec3 direction;
		vec3 color;
	};
	uniform DirectionalLight directionalLights[ NUM_DIR_LIGHTS ];
	void getDirectionalLightInfo( const in DirectionalLight directionalLight, out IncidentLight light ) {
		light.color = directionalLight.color;
		light.direction = directionalLight.direction;
		light.visible = true;
	}
#endif
#if NUM_POINT_LIGHTS > 0
	struct PointLight {
		vec3 position;
		vec3 color;
		float distance;
		float decay;
	};
	uniform PointLight pointLights[ NUM_POINT_LIGHTS ];
	void getPointLightInfo( const in PointLight pointLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = pointLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float lightDistance = length( lVector );
		light.color = pointLight.color;
		light.color *= getDistanceAttenuation( lightDistance, pointLight.distance, pointLight.decay );
		light.visible = ( light.color != vec3( 0.0 ) );
	}
#endif
#if NUM_SPOT_LIGHTS > 0
	struct SpotLight {
		vec3 position;
		vec3 direction;
		vec3 color;
		float distance;
		float decay;
		float coneCos;
		float penumbraCos;
	};
	uniform SpotLight spotLights[ NUM_SPOT_LIGHTS ];
	void getSpotLightInfo( const in SpotLight spotLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = spotLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float angleCos = dot( light.direction, spotLight.direction );
		float spotAttenuation = getSpotAttenuation( spotLight.coneCos, spotLight.penumbraCos, angleCos );
		if ( spotAttenuation > 0.0 ) {
			float lightDistance = length( lVector );
			light.color = spotLight.color * spotAttenuation;
			light.color *= getDistanceAttenuation( lightDistance, spotLight.distance, spotLight.decay );
			light.visible = ( light.color != vec3( 0.0 ) );
		} else {
			light.color = vec3( 0.0 );
			light.visible = false;
		}
	}
#endif
#if NUM_RECT_AREA_LIGHTS > 0
	struct RectAreaLight {
		vec3 color;
		vec3 position;
		vec3 halfWidth;
		vec3 halfHeight;
	};
	uniform sampler2D ltc_1;	uniform sampler2D ltc_2;
	uniform RectAreaLight rectAreaLights[ NUM_RECT_AREA_LIGHTS ];
#endif
#if NUM_HEMI_LIGHTS > 0
	struct HemisphereLight {
		vec3 direction;
		vec3 skyColor;
		vec3 groundColor;
	};
	uniform HemisphereLight hemisphereLights[ NUM_HEMI_LIGHTS ];
	vec3 getHemisphereLightIrradiance( const in HemisphereLight hemiLight, const in vec3 normal ) {
		float dotNL = dot( normal, hemiLight.direction );
		float hemiDiffuseWeight = 0.5 * dotNL + 0.5;
		vec3 irradiance = mix( hemiLight.groundColor, hemiLight.skyColor, hemiDiffuseWeight );
		return irradiance;
	}
#endif`,_g=`#ifdef USE_ENVMAP
	vec3 getIBLIrradiance( const in vec3 normal ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, worldNormal, 1.0 );
			return PI * envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	vec3 getIBLRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 reflectVec = reflect( - viewDir, normal );
			reflectVec = normalize( mix( reflectVec, normal, roughness * roughness) );
			reflectVec = inverseTransformDirection( reflectVec, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, reflectVec, roughness );
			return envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	#ifdef USE_ANISOTROPY
		vec3 getIBLAnisotropyRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness, const in vec3 bitangent, const in float anisotropy ) {
			#ifdef ENVMAP_TYPE_CUBE_UV
				vec3 bentNormal = cross( bitangent, viewDir );
				bentNormal = normalize( cross( bentNormal, bitangent ) );
				bentNormal = normalize( mix( bentNormal, normal, pow2( pow2( 1.0 - anisotropy * ( 1.0 - roughness ) ) ) ) );
				return getIBLRadiance( viewDir, bentNormal, roughness );
			#else
				return vec3( 0.0 );
			#endif
		}
	#endif
#endif`,yg=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,vg=`varying vec3 vViewPosition;
struct ToonMaterial {
	vec3 diffuseColor;
};
void RE_Direct_Toon( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 irradiance = getGradientIrradiance( geometryNormal, directLight.direction ) * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Toon( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Toon
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,Mg=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,bg=`varying vec3 vViewPosition;
struct BlinnPhongMaterial {
	vec3 diffuseColor;
	vec3 specularColor;
	float specularShininess;
	float specularStrength;
};
void RE_Direct_BlinnPhong( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
	reflectedLight.directSpecular += irradiance * BRDF_BlinnPhong( directLight.direction, geometryViewDir, geometryNormal, material.specularColor, material.specularShininess ) * material.specularStrength;
}
void RE_IndirectDiffuse_BlinnPhong( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_BlinnPhong
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,wg=`PhysicalMaterial material;
material.diffuseColor = diffuseColor.rgb * ( 1.0 - metalnessFactor );
vec3 dxy = max( abs( dFdx( nonPerturbedNormal ) ), abs( dFdy( nonPerturbedNormal ) ) );
float geometryRoughness = max( max( dxy.x, dxy.y ), dxy.z );
material.roughness = max( roughnessFactor, 0.0525 );material.roughness += geometryRoughness;
material.roughness = min( material.roughness, 1.0 );
#ifdef IOR
	material.ior = ior;
	#ifdef USE_SPECULAR
		float specularIntensityFactor = specularIntensity;
		vec3 specularColorFactor = specularColor;
		#ifdef USE_SPECULAR_COLORMAP
			specularColorFactor *= texture2D( specularColorMap, vSpecularColorMapUv ).rgb;
		#endif
		#ifdef USE_SPECULAR_INTENSITYMAP
			specularIntensityFactor *= texture2D( specularIntensityMap, vSpecularIntensityMapUv ).a;
		#endif
		material.specularF90 = mix( specularIntensityFactor, 1.0, metalnessFactor );
	#else
		float specularIntensityFactor = 1.0;
		vec3 specularColorFactor = vec3( 1.0 );
		material.specularF90 = 1.0;
	#endif
	material.specularColor = mix( min( pow2( ( material.ior - 1.0 ) / ( material.ior + 1.0 ) ) * specularColorFactor, vec3( 1.0 ) ) * specularIntensityFactor, diffuseColor.rgb, metalnessFactor );
#else
	material.specularColor = mix( vec3( 0.04 ), diffuseColor.rgb, metalnessFactor );
	material.specularF90 = 1.0;
#endif
#ifdef USE_CLEARCOAT
	material.clearcoat = clearcoat;
	material.clearcoatRoughness = clearcoatRoughness;
	material.clearcoatF0 = vec3( 0.04 );
	material.clearcoatF90 = 1.0;
	#ifdef USE_CLEARCOATMAP
		material.clearcoat *= texture2D( clearcoatMap, vClearcoatMapUv ).x;
	#endif
	#ifdef USE_CLEARCOAT_ROUGHNESSMAP
		material.clearcoatRoughness *= texture2D( clearcoatRoughnessMap, vClearcoatRoughnessMapUv ).y;
	#endif
	material.clearcoat = saturate( material.clearcoat );	material.clearcoatRoughness = max( material.clearcoatRoughness, 0.0525 );
	material.clearcoatRoughness += geometryRoughness;
	material.clearcoatRoughness = min( material.clearcoatRoughness, 1.0 );
#endif
#ifdef USE_IRIDESCENCE
	material.iridescence = iridescence;
	material.iridescenceIOR = iridescenceIOR;
	#ifdef USE_IRIDESCENCEMAP
		material.iridescence *= texture2D( iridescenceMap, vIridescenceMapUv ).r;
	#endif
	#ifdef USE_IRIDESCENCE_THICKNESSMAP
		material.iridescenceThickness = (iridescenceThicknessMaximum - iridescenceThicknessMinimum) * texture2D( iridescenceThicknessMap, vIridescenceThicknessMapUv ).g + iridescenceThicknessMinimum;
	#else
		material.iridescenceThickness = iridescenceThicknessMaximum;
	#endif
#endif
#ifdef USE_SHEEN
	material.sheenColor = sheenColor;
	#ifdef USE_SHEEN_COLORMAP
		material.sheenColor *= texture2D( sheenColorMap, vSheenColorMapUv ).rgb;
	#endif
	material.sheenRoughness = clamp( sheenRoughness, 0.07, 1.0 );
	#ifdef USE_SHEEN_ROUGHNESSMAP
		material.sheenRoughness *= texture2D( sheenRoughnessMap, vSheenRoughnessMapUv ).a;
	#endif
#endif
#ifdef USE_ANISOTROPY
	#ifdef USE_ANISOTROPYMAP
		mat2 anisotropyMat = mat2( anisotropyVector.x, anisotropyVector.y, - anisotropyVector.y, anisotropyVector.x );
		vec3 anisotropyPolar = texture2D( anisotropyMap, vAnisotropyMapUv ).rgb;
		vec2 anisotropyV = anisotropyMat * normalize( 2.0 * anisotropyPolar.rg - vec2( 1.0 ) ) * anisotropyPolar.b;
	#else
		vec2 anisotropyV = anisotropyVector;
	#endif
	material.anisotropy = length( anisotropyV );
	if( material.anisotropy == 0.0 ) {
		anisotropyV = vec2( 1.0, 0.0 );
	} else {
		anisotropyV /= material.anisotropy;
		material.anisotropy = saturate( material.anisotropy );
	}
	material.alphaT = mix( pow2( material.roughness ), 1.0, pow2( material.anisotropy ) );
	material.anisotropyT = tbn[ 0 ] * anisotropyV.x + tbn[ 1 ] * anisotropyV.y;
	material.anisotropyB = tbn[ 1 ] * anisotropyV.x - tbn[ 0 ] * anisotropyV.y;
#endif`,Sg=`struct PhysicalMaterial {
	vec3 diffuseColor;
	float roughness;
	vec3 specularColor;
	float specularF90;
	#ifdef USE_CLEARCOAT
		float clearcoat;
		float clearcoatRoughness;
		vec3 clearcoatF0;
		float clearcoatF90;
	#endif
	#ifdef USE_IRIDESCENCE
		float iridescence;
		float iridescenceIOR;
		float iridescenceThickness;
		vec3 iridescenceFresnel;
		vec3 iridescenceF0;
	#endif
	#ifdef USE_SHEEN
		vec3 sheenColor;
		float sheenRoughness;
	#endif
	#ifdef IOR
		float ior;
	#endif
	#ifdef USE_TRANSMISSION
		float transmission;
		float transmissionAlpha;
		float thickness;
		float attenuationDistance;
		vec3 attenuationColor;
	#endif
	#ifdef USE_ANISOTROPY
		float anisotropy;
		float alphaT;
		vec3 anisotropyT;
		vec3 anisotropyB;
	#endif
};
vec3 clearcoatSpecularDirect = vec3( 0.0 );
vec3 clearcoatSpecularIndirect = vec3( 0.0 );
vec3 sheenSpecularDirect = vec3( 0.0 );
vec3 sheenSpecularIndirect = vec3(0.0 );
vec3 Schlick_to_F0( const in vec3 f, const in float f90, const in float dotVH ) {
    float x = clamp( 1.0 - dotVH, 0.0, 1.0 );
    float x2 = x * x;
    float x5 = clamp( x * x2 * x2, 0.0, 0.9999 );
    return ( f - vec3( f90 ) * x5 ) / ( 1.0 - x5 );
}
float V_GGX_SmithCorrelated( const in float alpha, const in float dotNL, const in float dotNV ) {
	float a2 = pow2( alpha );
	float gv = dotNL * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNV ) );
	float gl = dotNV * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNL ) );
	return 0.5 / max( gv + gl, EPSILON );
}
float D_GGX( const in float alpha, const in float dotNH ) {
	float a2 = pow2( alpha );
	float denom = pow2( dotNH ) * ( a2 - 1.0 ) + 1.0;
	return RECIPROCAL_PI * a2 / pow2( denom );
}
#ifdef USE_ANISOTROPY
	float V_GGX_SmithCorrelated_Anisotropic( const in float alphaT, const in float alphaB, const in float dotTV, const in float dotBV, const in float dotTL, const in float dotBL, const in float dotNV, const in float dotNL ) {
		float gv = dotNL * length( vec3( alphaT * dotTV, alphaB * dotBV, dotNV ) );
		float gl = dotNV * length( vec3( alphaT * dotTL, alphaB * dotBL, dotNL ) );
		float v = 0.5 / ( gv + gl );
		return saturate(v);
	}
	float D_GGX_Anisotropic( const in float alphaT, const in float alphaB, const in float dotNH, const in float dotTH, const in float dotBH ) {
		float a2 = alphaT * alphaB;
		highp vec3 v = vec3( alphaB * dotTH, alphaT * dotBH, a2 * dotNH );
		highp float v2 = dot( v, v );
		float w2 = a2 / v2;
		return RECIPROCAL_PI * a2 * pow2 ( w2 );
	}
#endif
#ifdef USE_CLEARCOAT
	vec3 BRDF_GGX_Clearcoat( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material) {
		vec3 f0 = material.clearcoatF0;
		float f90 = material.clearcoatF90;
		float roughness = material.clearcoatRoughness;
		float alpha = pow2( roughness );
		vec3 halfDir = normalize( lightDir + viewDir );
		float dotNL = saturate( dot( normal, lightDir ) );
		float dotNV = saturate( dot( normal, viewDir ) );
		float dotNH = saturate( dot( normal, halfDir ) );
		float dotVH = saturate( dot( viewDir, halfDir ) );
		vec3 F = F_Schlick( f0, f90, dotVH );
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
		return F * ( V * D );
	}
#endif
vec3 BRDF_GGX( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material ) {
	vec3 f0 = material.specularColor;
	float f90 = material.specularF90;
	float roughness = material.roughness;
	float alpha = pow2( roughness );
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( f0, f90, dotVH );
	#ifdef USE_IRIDESCENCE
		F = mix( F, material.iridescenceFresnel, material.iridescence );
	#endif
	#ifdef USE_ANISOTROPY
		float dotTL = dot( material.anisotropyT, lightDir );
		float dotTV = dot( material.anisotropyT, viewDir );
		float dotTH = dot( material.anisotropyT, halfDir );
		float dotBL = dot( material.anisotropyB, lightDir );
		float dotBV = dot( material.anisotropyB, viewDir );
		float dotBH = dot( material.anisotropyB, halfDir );
		float V = V_GGX_SmithCorrelated_Anisotropic( material.alphaT, alpha, dotTV, dotBV, dotTL, dotBL, dotNV, dotNL );
		float D = D_GGX_Anisotropic( material.alphaT, alpha, dotNH, dotTH, dotBH );
	#else
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
	#endif
	return F * ( V * D );
}
vec2 LTC_Uv( const in vec3 N, const in vec3 V, const in float roughness ) {
	const float LUT_SIZE = 64.0;
	const float LUT_SCALE = ( LUT_SIZE - 1.0 ) / LUT_SIZE;
	const float LUT_BIAS = 0.5 / LUT_SIZE;
	float dotNV = saturate( dot( N, V ) );
	vec2 uv = vec2( roughness, sqrt( 1.0 - dotNV ) );
	uv = uv * LUT_SCALE + LUT_BIAS;
	return uv;
}
float LTC_ClippedSphereFormFactor( const in vec3 f ) {
	float l = length( f );
	return max( ( l * l + f.z ) / ( l + 1.0 ), 0.0 );
}
vec3 LTC_EdgeVectorFormFactor( const in vec3 v1, const in vec3 v2 ) {
	float x = dot( v1, v2 );
	float y = abs( x );
	float a = 0.8543985 + ( 0.4965155 + 0.0145206 * y ) * y;
	float b = 3.4175940 + ( 4.1616724 + y ) * y;
	float v = a / b;
	float theta_sintheta = ( x > 0.0 ) ? v : 0.5 * inversesqrt( max( 1.0 - x * x, 1e-7 ) ) - v;
	return cross( v1, v2 ) * theta_sintheta;
}
vec3 LTC_Evaluate( const in vec3 N, const in vec3 V, const in vec3 P, const in mat3 mInv, const in vec3 rectCoords[ 4 ] ) {
	vec3 v1 = rectCoords[ 1 ] - rectCoords[ 0 ];
	vec3 v2 = rectCoords[ 3 ] - rectCoords[ 0 ];
	vec3 lightNormal = cross( v1, v2 );
	if( dot( lightNormal, P - rectCoords[ 0 ] ) < 0.0 ) return vec3( 0.0 );
	vec3 T1, T2;
	T1 = normalize( V - N * dot( V, N ) );
	T2 = - cross( N, T1 );
	mat3 mat = mInv * transposeMat3( mat3( T1, T2, N ) );
	vec3 coords[ 4 ];
	coords[ 0 ] = mat * ( rectCoords[ 0 ] - P );
	coords[ 1 ] = mat * ( rectCoords[ 1 ] - P );
	coords[ 2 ] = mat * ( rectCoords[ 2 ] - P );
	coords[ 3 ] = mat * ( rectCoords[ 3 ] - P );
	coords[ 0 ] = normalize( coords[ 0 ] );
	coords[ 1 ] = normalize( coords[ 1 ] );
	coords[ 2 ] = normalize( coords[ 2 ] );
	coords[ 3 ] = normalize( coords[ 3 ] );
	vec3 vectorFormFactor = vec3( 0.0 );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 0 ], coords[ 1 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 1 ], coords[ 2 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 2 ], coords[ 3 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 3 ], coords[ 0 ] );
	float result = LTC_ClippedSphereFormFactor( vectorFormFactor );
	return vec3( result );
}
#if defined( USE_SHEEN )
float D_Charlie( float roughness, float dotNH ) {
	float alpha = pow2( roughness );
	float invAlpha = 1.0 / alpha;
	float cos2h = dotNH * dotNH;
	float sin2h = max( 1.0 - cos2h, 0.0078125 );
	return ( 2.0 + invAlpha ) * pow( sin2h, invAlpha * 0.5 ) / ( 2.0 * PI );
}
float V_Neubelt( float dotNV, float dotNL ) {
	return saturate( 1.0 / ( 4.0 * ( dotNL + dotNV - dotNL * dotNV ) ) );
}
vec3 BRDF_Sheen( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, vec3 sheenColor, const in float sheenRoughness ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float D = D_Charlie( sheenRoughness, dotNH );
	float V = V_Neubelt( dotNV, dotNL );
	return sheenColor * ( D * V );
}
#endif
float IBLSheenBRDF( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	float r2 = roughness * roughness;
	float a = roughness < 0.25 ? -339.2 * r2 + 161.4 * roughness - 25.9 : -8.48 * r2 + 14.3 * roughness - 9.95;
	float b = roughness < 0.25 ? 44.0 * r2 - 23.7 * roughness + 3.26 : 1.97 * r2 - 3.27 * roughness + 0.72;
	float DG = exp( a * dotNV + b ) + ( roughness < 0.25 ? 0.0 : 0.1 * ( roughness - 0.25 ) );
	return saturate( DG * RECIPROCAL_PI );
}
vec2 DFGApprox( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	const vec4 c0 = vec4( - 1, - 0.0275, - 0.572, 0.022 );
	const vec4 c1 = vec4( 1, 0.0425, 1.04, - 0.04 );
	vec4 r = roughness * c0 + c1;
	float a004 = min( r.x * r.x, exp2( - 9.28 * dotNV ) ) * r.x + r.y;
	vec2 fab = vec2( - 1.04, 1.04 ) * a004 + r.zw;
	return fab;
}
vec3 EnvironmentBRDF( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness ) {
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	return specularColor * fab.x + specularF90 * fab.y;
}
#ifdef USE_IRIDESCENCE
void computeMultiscatteringIridescence( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float iridescence, const in vec3 iridescenceF0, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#else
void computeMultiscattering( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#endif
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	#ifdef USE_IRIDESCENCE
		vec3 Fr = mix( specularColor, iridescenceF0, iridescence );
	#else
		vec3 Fr = specularColor;
	#endif
	vec3 FssEss = Fr * fab.x + specularF90 * fab.y;
	float Ess = fab.x + fab.y;
	float Ems = 1.0 - Ess;
	vec3 Favg = Fr + ( 1.0 - Fr ) * 0.047619;	vec3 Fms = FssEss * Favg / ( 1.0 - Ems * Favg );
	singleScatter += FssEss;
	multiScatter += Fms * Ems;
}
#if NUM_RECT_AREA_LIGHTS > 0
	void RE_Direct_RectArea_Physical( const in RectAreaLight rectAreaLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
		vec3 normal = geometryNormal;
		vec3 viewDir = geometryViewDir;
		vec3 position = geometryPosition;
		vec3 lightPos = rectAreaLight.position;
		vec3 halfWidth = rectAreaLight.halfWidth;
		vec3 halfHeight = rectAreaLight.halfHeight;
		vec3 lightColor = rectAreaLight.color;
		float roughness = material.roughness;
		vec3 rectCoords[ 4 ];
		rectCoords[ 0 ] = lightPos + halfWidth - halfHeight;		rectCoords[ 1 ] = lightPos - halfWidth - halfHeight;
		rectCoords[ 2 ] = lightPos - halfWidth + halfHeight;
		rectCoords[ 3 ] = lightPos + halfWidth + halfHeight;
		vec2 uv = LTC_Uv( normal, viewDir, roughness );
		vec4 t1 = texture2D( ltc_1, uv );
		vec4 t2 = texture2D( ltc_2, uv );
		mat3 mInv = mat3(
			vec3( t1.x, 0, t1.y ),
			vec3(    0, 1,    0 ),
			vec3( t1.z, 0, t1.w )
		);
		vec3 fresnel = ( material.specularColor * t2.x + ( vec3( 1.0 ) - material.specularColor ) * t2.y );
		reflectedLight.directSpecular += lightColor * fresnel * LTC_Evaluate( normal, viewDir, position, mInv, rectCoords );
		reflectedLight.directDiffuse += lightColor * material.diffuseColor * LTC_Evaluate( normal, viewDir, position, mat3( 1.0 ), rectCoords );
	}
#endif
void RE_Direct_Physical( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	#ifdef USE_CLEARCOAT
		float dotNLcc = saturate( dot( geometryClearcoatNormal, directLight.direction ) );
		vec3 ccIrradiance = dotNLcc * directLight.color;
		clearcoatSpecularDirect += ccIrradiance * BRDF_GGX_Clearcoat( directLight.direction, geometryViewDir, geometryClearcoatNormal, material );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularDirect += irradiance * BRDF_Sheen( directLight.direction, geometryViewDir, geometryNormal, material.sheenColor, material.sheenRoughness );
	#endif
	reflectedLight.directSpecular += irradiance * BRDF_GGX( directLight.direction, geometryViewDir, geometryNormal, material );
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Physical( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectSpecular_Physical( const in vec3 radiance, const in vec3 irradiance, const in vec3 clearcoatRadiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight) {
	#ifdef USE_CLEARCOAT
		clearcoatSpecularIndirect += clearcoatRadiance * EnvironmentBRDF( geometryClearcoatNormal, geometryViewDir, material.clearcoatF0, material.clearcoatF90, material.clearcoatRoughness );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularIndirect += irradiance * material.sheenColor * IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
	#endif
	vec3 singleScattering = vec3( 0.0 );
	vec3 multiScattering = vec3( 0.0 );
	vec3 cosineWeightedIrradiance = irradiance * RECIPROCAL_PI;
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.iridescence, material.iridescenceFresnel, material.roughness, singleScattering, multiScattering );
	#else
		computeMultiscattering( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.roughness, singleScattering, multiScattering );
	#endif
	vec3 totalScattering = singleScattering + multiScattering;
	vec3 diffuse = material.diffuseColor * ( 1.0 - max( max( totalScattering.r, totalScattering.g ), totalScattering.b ) );
	reflectedLight.indirectSpecular += radiance * singleScattering;
	reflectedLight.indirectSpecular += multiScattering * cosineWeightedIrradiance;
	reflectedLight.indirectDiffuse += diffuse * cosineWeightedIrradiance;
}
#define RE_Direct				RE_Direct_Physical
#define RE_Direct_RectArea		RE_Direct_RectArea_Physical
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Physical
#define RE_IndirectSpecular		RE_IndirectSpecular_Physical
float computeSpecularOcclusion( const in float dotNV, const in float ambientOcclusion, const in float roughness ) {
	return saturate( pow( dotNV + ambientOcclusion, exp2( - 16.0 * roughness - 1.0 ) ) - 1.0 + ambientOcclusion );
}`,Eg=`
vec3 geometryPosition = - vViewPosition;
vec3 geometryNormal = normal;
vec3 geometryViewDir = ( isOrthographic ) ? vec3( 0, 0, 1 ) : normalize( vViewPosition );
vec3 geometryClearcoatNormal = vec3( 0.0 );
#ifdef USE_CLEARCOAT
	geometryClearcoatNormal = clearcoatNormal;
#endif
#ifdef USE_IRIDESCENCE
	float dotNVi = saturate( dot( normal, geometryViewDir ) );
	if ( material.iridescenceThickness == 0.0 ) {
		material.iridescence = 0.0;
	} else {
		material.iridescence = saturate( material.iridescence );
	}
	if ( material.iridescence > 0.0 ) {
		material.iridescenceFresnel = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.specularColor );
		material.iridescenceF0 = Schlick_to_F0( material.iridescenceFresnel, 1.0, dotNVi );
	}
#endif
IncidentLight directLight;
#if ( NUM_POINT_LIGHTS > 0 ) && defined( RE_Direct )
	PointLight pointLight;
	#if defined( USE_SHADOWMAP ) && NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHTS; i ++ ) {
		pointLight = pointLights[ i ];
		getPointLightInfo( pointLight, geometryPosition, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_POINT_LIGHT_SHADOWS )
		pointLightShadow = pointLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getPointShadow( pointShadowMap[ i ], pointLightShadow.shadowMapSize, pointLightShadow.shadowBias, pointLightShadow.shadowRadius, vPointShadowCoord[ i ], pointLightShadow.shadowCameraNear, pointLightShadow.shadowCameraFar ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_SPOT_LIGHTS > 0 ) && defined( RE_Direct )
	SpotLight spotLight;
	vec4 spotColor;
	vec3 spotLightCoord;
	bool inSpotLightMap;
	#if defined( USE_SHADOWMAP ) && NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHTS; i ++ ) {
		spotLight = spotLights[ i ];
		getSpotLightInfo( spotLight, geometryPosition, directLight );
		#if ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#define SPOT_LIGHT_MAP_INDEX UNROLLED_LOOP_INDEX
		#elif ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		#define SPOT_LIGHT_MAP_INDEX NUM_SPOT_LIGHT_MAPS
		#else
		#define SPOT_LIGHT_MAP_INDEX ( UNROLLED_LOOP_INDEX - NUM_SPOT_LIGHT_SHADOWS + NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#endif
		#if ( SPOT_LIGHT_MAP_INDEX < NUM_SPOT_LIGHT_MAPS )
			spotLightCoord = vSpotLightCoord[ i ].xyz / vSpotLightCoord[ i ].w;
			inSpotLightMap = all( lessThan( abs( spotLightCoord * 2. - 1. ), vec3( 1.0 ) ) );
			spotColor = texture2D( spotLightMap[ SPOT_LIGHT_MAP_INDEX ], spotLightCoord.xy );
			directLight.color = inSpotLightMap ? directLight.color * spotColor.rgb : directLight.color;
		#endif
		#undef SPOT_LIGHT_MAP_INDEX
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		spotLightShadow = spotLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( spotShadowMap[ i ], spotLightShadow.shadowMapSize, spotLightShadow.shadowBias, spotLightShadow.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_DIR_LIGHTS > 0 ) && defined( RE_Direct )
	DirectionalLight directionalLight;
	#if defined( USE_SHADOWMAP ) && NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHTS; i ++ ) {
		directionalLight = directionalLights[ i ];
		getDirectionalLightInfo( directionalLight, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_DIR_LIGHT_SHADOWS )
		directionalLightShadow = directionalLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( directionalShadowMap[ i ], directionalLightShadow.shadowMapSize, directionalLightShadow.shadowBias, directionalLightShadow.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_RECT_AREA_LIGHTS > 0 ) && defined( RE_Direct_RectArea )
	RectAreaLight rectAreaLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_RECT_AREA_LIGHTS; i ++ ) {
		rectAreaLight = rectAreaLights[ i ];
		RE_Direct_RectArea( rectAreaLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if defined( RE_IndirectDiffuse )
	vec3 iblIrradiance = vec3( 0.0 );
	vec3 irradiance = getAmbientLightIrradiance( ambientLightColor );
	#if defined( USE_LIGHT_PROBES )
		irradiance += getLightProbeIrradiance( lightProbe, geometryNormal );
	#endif
	#if ( NUM_HEMI_LIGHTS > 0 )
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_HEMI_LIGHTS; i ++ ) {
			irradiance += getHemisphereLightIrradiance( hemisphereLights[ i ], geometryNormal );
		}
		#pragma unroll_loop_end
	#endif
#endif
#if defined( RE_IndirectSpecular )
	vec3 radiance = vec3( 0.0 );
	vec3 clearcoatRadiance = vec3( 0.0 );
#endif`,Tg=`#if defined( RE_IndirectDiffuse )
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
		irradiance += lightMapIrradiance;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD ) && defined( ENVMAP_TYPE_CUBE_UV )
		iblIrradiance += getIBLIrradiance( geometryNormal );
	#endif
#endif
#if defined( USE_ENVMAP ) && defined( RE_IndirectSpecular )
	#ifdef USE_ANISOTROPY
		radiance += getIBLAnisotropyRadiance( geometryViewDir, geometryNormal, material.roughness, material.anisotropyB, material.anisotropy );
	#else
		radiance += getIBLRadiance( geometryViewDir, geometryNormal, material.roughness );
	#endif
	#ifdef USE_CLEARCOAT
		clearcoatRadiance += getIBLRadiance( geometryViewDir, geometryClearcoatNormal, material.clearcoatRoughness );
	#endif
#endif`,Ag=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,Rg=`#if defined( USE_LOGDEPTHBUF ) && defined( USE_LOGDEPTHBUF_EXT )
	gl_FragDepthEXT = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,Cg=`#if defined( USE_LOGDEPTHBUF ) && defined( USE_LOGDEPTHBUF_EXT )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,Pg=`#ifdef USE_LOGDEPTHBUF
	#ifdef USE_LOGDEPTHBUF_EXT
		varying float vFragDepth;
		varying float vIsPerspective;
	#else
		uniform float logDepthBufFC;
	#endif
#endif`,Lg=`#ifdef USE_LOGDEPTHBUF
	#ifdef USE_LOGDEPTHBUF_EXT
		vFragDepth = 1.0 + gl_Position.w;
		vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
	#else
		if ( isPerspectiveMatrix( projectionMatrix ) ) {
			gl_Position.z = log2( max( EPSILON, gl_Position.w + 1.0 ) ) * logDepthBufFC - 1.0;
			gl_Position.z *= gl_Position.w;
		}
	#endif
#endif`,Ig=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = vec4( mix( pow( sampledDiffuseColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), sampledDiffuseColor.rgb * 0.0773993808, vec3( lessThanEqual( sampledDiffuseColor.rgb, vec3( 0.04045 ) ) ) ), sampledDiffuseColor.w );
	
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,zg=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,Dg=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
	#if defined( USE_POINTS_UV )
		vec2 uv = vUv;
	#else
		vec2 uv = ( uvTransform * vec3( gl_PointCoord.x, 1.0 - gl_PointCoord.y, 1 ) ).xy;
	#endif
#endif
#ifdef USE_MAP
	diffuseColor *= texture2D( map, uv );
#endif
#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, uv ).g;
#endif`,Ng=`#if defined( USE_POINTS_UV )
	varying vec2 vUv;
#else
	#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
		uniform mat3 uvTransform;
	#endif
#endif
#ifdef USE_MAP
	uniform sampler2D map;
#endif
#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,Ug=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,Og=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,Fg=`#if defined( USE_MORPHCOLORS ) && defined( MORPHTARGETS_TEXTURE )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,Bg=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	#ifdef MORPHTARGETS_TEXTURE
		for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
			if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
		}
	#else
		objectNormal += morphNormal0 * morphTargetInfluences[ 0 ];
		objectNormal += morphNormal1 * morphTargetInfluences[ 1 ];
		objectNormal += morphNormal2 * morphTargetInfluences[ 2 ];
		objectNormal += morphNormal3 * morphTargetInfluences[ 3 ];
	#endif
#endif`,kg=`#ifdef USE_MORPHTARGETS
	uniform float morphTargetBaseInfluence;
	#ifdef MORPHTARGETS_TEXTURE
		uniform float morphTargetInfluences[ MORPHTARGETS_COUNT ];
		uniform sampler2DArray morphTargetsTexture;
		uniform ivec2 morphTargetsTextureSize;
		vec4 getMorph( const in int vertexIndex, const in int morphTargetIndex, const in int offset ) {
			int texelIndex = vertexIndex * MORPHTARGETS_TEXTURE_STRIDE + offset;
			int y = texelIndex / morphTargetsTextureSize.x;
			int x = texelIndex - y * morphTargetsTextureSize.x;
			ivec3 morphUV = ivec3( x, y, morphTargetIndex );
			return texelFetch( morphTargetsTexture, morphUV, 0 );
		}
	#else
		#ifndef USE_MORPHNORMALS
			uniform float morphTargetInfluences[ 8 ];
		#else
			uniform float morphTargetInfluences[ 4 ];
		#endif
	#endif
#endif`,Hg=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	#ifdef MORPHTARGETS_TEXTURE
		for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
			if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
		}
	#else
		transformed += morphTarget0 * morphTargetInfluences[ 0 ];
		transformed += morphTarget1 * morphTargetInfluences[ 1 ];
		transformed += morphTarget2 * morphTargetInfluences[ 2 ];
		transformed += morphTarget3 * morphTargetInfluences[ 3 ];
		#ifndef USE_MORPHNORMALS
			transformed += morphTarget4 * morphTargetInfluences[ 4 ];
			transformed += morphTarget5 * morphTargetInfluences[ 5 ];
			transformed += morphTarget6 * morphTargetInfluences[ 6 ];
			transformed += morphTarget7 * morphTargetInfluences[ 7 ];
		#endif
	#endif
#endif`,Gg=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
#ifdef FLAT_SHADED
	vec3 fdx = dFdx( vViewPosition );
	vec3 fdy = dFdy( vViewPosition );
	vec3 normal = normalize( cross( fdx, fdy ) );
#else
	vec3 normal = normalize( vNormal );
	#ifdef DOUBLE_SIDED
		normal *= faceDirection;
	#endif
#endif
#if defined( USE_NORMALMAP_TANGENTSPACE ) || defined( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY )
	#ifdef USE_TANGENT
		mat3 tbn = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn = getTangentFrame( - vViewPosition, normal,
		#if defined( USE_NORMALMAP )
			vNormalMapUv
		#elif defined( USE_CLEARCOAT_NORMALMAP )
			vClearcoatNormalMapUv
		#else
			vUv
		#endif
		);
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn[0] *= faceDirection;
		tbn[1] *= faceDirection;
	#endif
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	#ifdef USE_TANGENT
		mat3 tbn2 = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn2 = getTangentFrame( - vViewPosition, normal, vClearcoatNormalMapUv );
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn2[0] *= faceDirection;
		tbn2[1] *= faceDirection;
	#endif
#endif
vec3 nonPerturbedNormal = normal;`,Vg=`#ifdef USE_NORMALMAP_OBJECTSPACE
	normal = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	#ifdef FLIP_SIDED
		normal = - normal;
	#endif
	#ifdef DOUBLE_SIDED
		normal = normal * faceDirection;
	#endif
	normal = normalize( normalMatrix * normal );
#elif defined( USE_NORMALMAP_TANGENTSPACE )
	vec3 mapN = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	mapN.xy *= normalScale;
	normal = normalize( tbn * mapN );
#elif defined( USE_BUMPMAP )
	normal = perturbNormalArb( - vViewPosition, normal, dHdxy_fwd(), faceDirection );
#endif`,Wg=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Xg=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,qg=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,Yg=`#ifdef USE_NORMALMAP
	uniform sampler2D normalMap;
	uniform vec2 normalScale;
#endif
#ifdef USE_NORMALMAP_OBJECTSPACE
	uniform mat3 normalMatrix;
#endif
#if ! defined ( USE_TANGENT ) && ( defined ( USE_NORMALMAP_TANGENTSPACE ) || defined ( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY ) )
	mat3 getTangentFrame( vec3 eye_pos, vec3 surf_norm, vec2 uv ) {
		vec3 q0 = dFdx( eye_pos.xyz );
		vec3 q1 = dFdy( eye_pos.xyz );
		vec2 st0 = dFdx( uv.st );
		vec2 st1 = dFdy( uv.st );
		vec3 N = surf_norm;
		vec3 q1perp = cross( q1, N );
		vec3 q0perp = cross( N, q0 );
		vec3 T = q1perp * st0.x + q0perp * st1.x;
		vec3 B = q1perp * st0.y + q0perp * st1.y;
		float det = max( dot( T, T ), dot( B, B ) );
		float scale = ( det == 0.0 ) ? 0.0 : inversesqrt( det );
		return mat3( T * scale, B * scale, N );
	}
#endif`,Zg=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,jg=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,Kg=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,$g=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,Jg=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,Qg=`vec3 packNormalToRGB( const in vec3 normal ) {
	return normalize( normal ) * 0.5 + 0.5;
}
vec3 unpackRGBToNormal( const in vec3 rgb ) {
	return 2.0 * rgb.xyz - 1.0;
}
const float PackUpscale = 256. / 255.;const float UnpackDownscale = 255. / 256.;
const vec3 PackFactors = vec3( 256. * 256. * 256., 256. * 256., 256. );
const vec4 UnpackFactors = UnpackDownscale / vec4( PackFactors, 1. );
const float ShiftRight8 = 1. / 256.;
vec4 packDepthToRGBA( const in float v ) {
	vec4 r = vec4( fract( v * PackFactors ), v );
	r.yzw -= r.xyz * ShiftRight8;	return r * PackUpscale;
}
float unpackRGBAToDepth( const in vec4 v ) {
	return dot( v, UnpackFactors );
}
vec2 packDepthToRG( in highp float v ) {
	return packDepthToRGBA( v ).yx;
}
float unpackRGToDepth( const in highp vec2 v ) {
	return unpackRGBAToDepth( vec4( v.xy, 0.0, 0.0 ) );
}
vec4 pack2HalfToRGBA( vec2 v ) {
	vec4 r = vec4( v.x, fract( v.x * 255.0 ), v.y, fract( v.y * 255.0 ) );
	return vec4( r.x - r.y / 255.0, r.y, r.z - r.w / 255.0, r.w );
}
vec2 unpackRGBATo2Half( vec4 v ) {
	return vec2( v.x + ( v.y / 255.0 ), v.z + ( v.w / 255.0 ) );
}
float viewZToOrthographicDepth( const in float viewZ, const in float near, const in float far ) {
	return ( viewZ + near ) / ( near - far );
}
float orthographicDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return depth * ( near - far ) - near;
}
float viewZToPerspectiveDepth( const in float viewZ, const in float near, const in float far ) {
	return ( ( near + viewZ ) * far ) / ( ( far - near ) * viewZ );
}
float perspectiveDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return ( near * far ) / ( ( far - near ) * depth - far );
}`,ex=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,tx=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,nx=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,ix=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,sx=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,rx=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,ax=`#if NUM_SPOT_LIGHT_COORDS > 0
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#if NUM_SPOT_LIGHT_MAPS > 0
	uniform sampler2D spotLightMap[ NUM_SPOT_LIGHT_MAPS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform sampler2D directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		uniform sampler2D spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		struct SpotLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform sampler2D pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
	float texture2DCompare( sampler2D depths, vec2 uv, float compare ) {
		return step( compare, unpackRGBAToDepth( texture2D( depths, uv ) ) );
	}
	vec2 texture2DDistribution( sampler2D shadow, vec2 uv ) {
		return unpackRGBATo2Half( texture2D( shadow, uv ) );
	}
	float VSMShadow (sampler2D shadow, vec2 uv, float compare ){
		float occlusion = 1.0;
		vec2 distribution = texture2DDistribution( shadow, uv );
		float hard_shadow = step( compare , distribution.x );
		if (hard_shadow != 1.0 ) {
			float distance = compare - distribution.x ;
			float variance = max( 0.00000, distribution.y * distribution.y );
			float softness_probability = variance / (variance + distance * distance );			softness_probability = clamp( ( softness_probability - 0.3 ) / ( 0.95 - 0.3 ), 0.0, 1.0 );			occlusion = clamp( max( hard_shadow, softness_probability ), 0.0, 1.0 );
		}
		return occlusion;
	}
	float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
		float shadow = 1.0;
		shadowCoord.xyz /= shadowCoord.w;
		shadowCoord.z += shadowBias;
		bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
		bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
		if ( frustumTest ) {
		#if defined( SHADOWMAP_TYPE_PCF )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx0 = - texelSize.x * shadowRadius;
			float dy0 = - texelSize.y * shadowRadius;
			float dx1 = + texelSize.x * shadowRadius;
			float dy1 = + texelSize.y * shadowRadius;
			float dx2 = dx0 / 2.0;
			float dy2 = dy0 / 2.0;
			float dx3 = dx1 / 2.0;
			float dy3 = dy1 / 2.0;
			shadow = (
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy1 ), shadowCoord.z )
			) * ( 1.0 / 17.0 );
		#elif defined( SHADOWMAP_TYPE_PCF_SOFT )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx = texelSize.x;
			float dy = texelSize.y;
			vec2 uv = shadowCoord.xy;
			vec2 f = fract( uv * shadowMapSize + 0.5 );
			uv -= f * texelSize;
			shadow = (
				texture2DCompare( shadowMap, uv, shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( dx, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( 0.0, dy ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + texelSize, shadowCoord.z ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, 0.0 ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 0.0 ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, dy ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( 0.0, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 0.0, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( texture2DCompare( shadowMap, uv + vec2( dx, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( dx, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( mix( texture2DCompare( shadowMap, uv + vec2( -dx, -dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, -dy ), shadowCoord.z ),
						  f.x ),
					 mix( texture2DCompare( shadowMap, uv + vec2( -dx, 2.0 * dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 2.0 * dy ), shadowCoord.z ),
						  f.x ),
					 f.y )
			) * ( 1.0 / 9.0 );
		#elif defined( SHADOWMAP_TYPE_VSM )
			shadow = VSMShadow( shadowMap, shadowCoord.xy, shadowCoord.z );
		#else
			shadow = texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z );
		#endif
		}
		return shadow;
	}
	vec2 cubeToUV( vec3 v, float texelSizeY ) {
		vec3 absV = abs( v );
		float scaleToCube = 1.0 / max( absV.x, max( absV.y, absV.z ) );
		absV *= scaleToCube;
		v *= scaleToCube * ( 1.0 - 2.0 * texelSizeY );
		vec2 planar = v.xy;
		float almostATexel = 1.5 * texelSizeY;
		float almostOne = 1.0 - almostATexel;
		if ( absV.z >= almostOne ) {
			if ( v.z > 0.0 )
				planar.x = 4.0 - v.x;
		} else if ( absV.x >= almostOne ) {
			float signX = sign( v.x );
			planar.x = v.z * signX + 2.0 * signX;
		} else if ( absV.y >= almostOne ) {
			float signY = sign( v.y );
			planar.x = v.x + 2.0 * signY + 2.0;
			planar.y = v.z * signY - 2.0;
		}
		return vec2( 0.125, 0.25 ) * planar + vec2( 0.375, 0.75 );
	}
	float getPointShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		vec2 texelSize = vec2( 1.0 ) / ( shadowMapSize * vec2( 4.0, 2.0 ) );
		vec3 lightToPosition = shadowCoord.xyz;
		float dp = ( length( lightToPosition ) - shadowCameraNear ) / ( shadowCameraFar - shadowCameraNear );		dp += shadowBias;
		vec3 bd3D = normalize( lightToPosition );
		#if defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_PCF_SOFT ) || defined( SHADOWMAP_TYPE_VSM )
			vec2 offset = vec2( - 1, 1 ) * shadowRadius * texelSize.y;
			return (
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyy, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyy, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyx, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyx, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxy, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxy, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxx, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxx, texelSize.y ), dp )
			) * ( 1.0 / 9.0 );
		#else
			return texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp );
		#endif
	}
#endif`,ox=`#if NUM_SPOT_LIGHT_COORDS > 0
	uniform mat4 spotLightMatrix[ NUM_SPOT_LIGHT_COORDS ];
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform mat4 directionalShadowMatrix[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		struct SpotLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform mat4 pointShadowMatrix[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
#endif`,cx=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
	vec3 shadowWorldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
	vec4 shadowWorldPosition;
#endif
#if defined( USE_SHADOWMAP )
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * directionalLightShadows[ i ].shadowNormalBias, 0 );
			vDirectionalShadowCoord[ i ] = directionalShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * pointLightShadows[ i ].shadowNormalBias, 0 );
			vPointShadowCoord[ i ] = pointShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
#endif
#if NUM_SPOT_LIGHT_COORDS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_COORDS; i ++ ) {
		shadowWorldPosition = worldPosition;
		#if ( defined( USE_SHADOWMAP ) && UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
			shadowWorldPosition.xyz += shadowWorldNormal * spotLightShadows[ i ].shadowNormalBias;
		#endif
		vSpotLightCoord[ i ] = spotLightMatrix[ i ] * shadowWorldPosition;
	}
	#pragma unroll_loop_end
#endif`,lx=`float getShadowMask() {
	float shadow = 1.0;
	#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
		directionalLight = directionalLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( directionalShadowMap[ i ], directionalLight.shadowMapSize, directionalLight.shadowBias, directionalLight.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_SHADOWS; i ++ ) {
		spotLight = spotLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( spotShadowMap[ i ], spotLight.shadowMapSize, spotLight.shadowBias, spotLight.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
		pointLight = pointLightShadows[ i ];
		shadow *= receiveShadow ? getPointShadow( pointShadowMap[ i ], pointLight.shadowMapSize, pointLight.shadowBias, pointLight.shadowRadius, vPointShadowCoord[ i ], pointLight.shadowCameraNear, pointLight.shadowCameraFar ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#endif
	return shadow;
}`,hx=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,ux=`#ifdef USE_SKINNING
	uniform mat4 bindMatrix;
	uniform mat4 bindMatrixInverse;
	uniform highp sampler2D boneTexture;
	mat4 getBoneMatrix( const in float i ) {
		int size = textureSize( boneTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( boneTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( boneTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( boneTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( boneTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
#endif`,dx=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,fx=`#ifdef USE_SKINNING
	mat4 skinMatrix = mat4( 0.0 );
	skinMatrix += skinWeight.x * boneMatX;
	skinMatrix += skinWeight.y * boneMatY;
	skinMatrix += skinWeight.z * boneMatZ;
	skinMatrix += skinWeight.w * boneMatW;
	skinMatrix = bindMatrixInverse * skinMatrix * bindMatrix;
	objectNormal = vec4( skinMatrix * vec4( objectNormal, 0.0 ) ).xyz;
	#ifdef USE_TANGENT
		objectTangent = vec4( skinMatrix * vec4( objectTangent, 0.0 ) ).xyz;
	#endif
#endif`,px=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,mx=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,gx=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,xx=`#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
uniform float toneMappingExposure;
vec3 LinearToneMapping( vec3 color ) {
	return saturate( toneMappingExposure * color );
}
vec3 ReinhardToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	return saturate( color / ( vec3( 1.0 ) + color ) );
}
vec3 OptimizedCineonToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	color = max( vec3( 0.0 ), color - 0.004 );
	return pow( ( color * ( 6.2 * color + 0.5 ) ) / ( color * ( 6.2 * color + 1.7 ) + 0.06 ), vec3( 2.2 ) );
}
vec3 RRTAndODTFit( vec3 v ) {
	vec3 a = v * ( v + 0.0245786 ) - 0.000090537;
	vec3 b = v * ( 0.983729 * v + 0.4329510 ) + 0.238081;
	return a / b;
}
vec3 ACESFilmicToneMapping( vec3 color ) {
	const mat3 ACESInputMat = mat3(
		vec3( 0.59719, 0.07600, 0.02840 ),		vec3( 0.35458, 0.90834, 0.13383 ),
		vec3( 0.04823, 0.01566, 0.83777 )
	);
	const mat3 ACESOutputMat = mat3(
		vec3(  1.60475, -0.10208, -0.00327 ),		vec3( -0.53108,  1.10813, -0.07276 ),
		vec3( -0.07367, -0.00605,  1.07602 )
	);
	color *= toneMappingExposure / 0.6;
	color = ACESInputMat * color;
	color = RRTAndODTFit( color );
	color = ACESOutputMat * color;
	return saturate( color );
}
const mat3 LINEAR_REC2020_TO_LINEAR_SRGB = mat3(
	vec3( 1.6605, - 0.1246, - 0.0182 ),
	vec3( - 0.5876, 1.1329, - 0.1006 ),
	vec3( - 0.0728, - 0.0083, 1.1187 )
);
const mat3 LINEAR_SRGB_TO_LINEAR_REC2020 = mat3(
	vec3( 0.6274, 0.0691, 0.0164 ),
	vec3( 0.3293, 0.9195, 0.0880 ),
	vec3( 0.0433, 0.0113, 0.8956 )
);
vec3 agxDefaultContrastApprox( vec3 x ) {
	vec3 x2 = x * x;
	vec3 x4 = x2 * x2;
	return + 15.5 * x4 * x2
		- 40.14 * x4 * x
		+ 31.96 * x4
		- 6.868 * x2 * x
		+ 0.4298 * x2
		+ 0.1191 * x
		- 0.00232;
}
vec3 AgXToneMapping( vec3 color ) {
	const mat3 AgXInsetMatrix = mat3(
		vec3( 0.856627153315983, 0.137318972929847, 0.11189821299995 ),
		vec3( 0.0951212405381588, 0.761241990602591, 0.0767994186031903 ),
		vec3( 0.0482516061458583, 0.101439036467562, 0.811302368396859 )
	);
	const mat3 AgXOutsetMatrix = mat3(
		vec3( 1.1271005818144368, - 0.1413297634984383, - 0.14132976349843826 ),
		vec3( - 0.11060664309660323, 1.157823702216272, - 0.11060664309660294 ),
		vec3( - 0.016493938717834573, - 0.016493938717834257, 1.2519364065950405 )
	);
	const float AgxMinEv = - 12.47393;	const float AgxMaxEv = 4.026069;
	color = LINEAR_SRGB_TO_LINEAR_REC2020 * color;
	color *= toneMappingExposure;
	color = AgXInsetMatrix * color;
	color = max( color, 1e-10 );	color = log2( color );
	color = ( color - AgxMinEv ) / ( AgxMaxEv - AgxMinEv );
	color = clamp( color, 0.0, 1.0 );
	color = agxDefaultContrastApprox( color );
	color = AgXOutsetMatrix * color;
	color = pow( max( vec3( 0.0 ), color ), vec3( 2.2 ) );
	color = LINEAR_REC2020_TO_LINEAR_SRGB * color;
	return color;
}
vec3 CustomToneMapping( vec3 color ) { return color; }`,_x=`#ifdef USE_TRANSMISSION
	material.transmission = transmission;
	material.transmissionAlpha = 1.0;
	material.thickness = thickness;
	material.attenuationDistance = attenuationDistance;
	material.attenuationColor = attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		material.transmission *= texture2D( transmissionMap, vTransmissionMapUv ).r;
	#endif
	#ifdef USE_THICKNESSMAP
		material.thickness *= texture2D( thicknessMap, vThicknessMapUv ).g;
	#endif
	vec3 pos = vWorldPosition;
	vec3 v = normalize( cameraPosition - pos );
	vec3 n = inverseTransformDirection( normal, viewMatrix );
	vec4 transmitted = getIBLVolumeRefraction(
		n, v, material.roughness, material.diffuseColor, material.specularColor, material.specularF90,
		pos, modelMatrix, viewMatrix, projectionMatrix, material.ior, material.thickness,
		material.attenuationColor, material.attenuationDistance );
	material.transmissionAlpha = mix( material.transmissionAlpha, transmitted.a, material.transmission );
	totalDiffuse = mix( totalDiffuse, transmitted.rgb, material.transmission );
#endif`,yx=`#ifdef USE_TRANSMISSION
	uniform float transmission;
	uniform float thickness;
	uniform float attenuationDistance;
	uniform vec3 attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		uniform sampler2D transmissionMap;
	#endif
	#ifdef USE_THICKNESSMAP
		uniform sampler2D thicknessMap;
	#endif
	uniform vec2 transmissionSamplerSize;
	uniform sampler2D transmissionSamplerMap;
	uniform mat4 modelMatrix;
	uniform mat4 projectionMatrix;
	varying vec3 vWorldPosition;
	float w0( float a ) {
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - a + 3.0 ) - 3.0 ) + 1.0 );
	}
	float w1( float a ) {
		return ( 1.0 / 6.0 ) * ( a *  a * ( 3.0 * a - 6.0 ) + 4.0 );
	}
	float w2( float a ){
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - 3.0 * a + 3.0 ) + 3.0 ) + 1.0 );
	}
	float w3( float a ) {
		return ( 1.0 / 6.0 ) * ( a * a * a );
	}
	float g0( float a ) {
		return w0( a ) + w1( a );
	}
	float g1( float a ) {
		return w2( a ) + w3( a );
	}
	float h0( float a ) {
		return - 1.0 + w1( a ) / ( w0( a ) + w1( a ) );
	}
	float h1( float a ) {
		return 1.0 + w3( a ) / ( w2( a ) + w3( a ) );
	}
	vec4 bicubic( sampler2D tex, vec2 uv, vec4 texelSize, float lod ) {
		uv = uv * texelSize.zw + 0.5;
		vec2 iuv = floor( uv );
		vec2 fuv = fract( uv );
		float g0x = g0( fuv.x );
		float g1x = g1( fuv.x );
		float h0x = h0( fuv.x );
		float h1x = h1( fuv.x );
		float h0y = h0( fuv.y );
		float h1y = h1( fuv.y );
		vec2 p0 = ( vec2( iuv.x + h0x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p1 = ( vec2( iuv.x + h1x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p2 = ( vec2( iuv.x + h0x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		vec2 p3 = ( vec2( iuv.x + h1x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		return g0( fuv.y ) * ( g0x * textureLod( tex, p0, lod ) + g1x * textureLod( tex, p1, lod ) ) +
			g1( fuv.y ) * ( g0x * textureLod( tex, p2, lod ) + g1x * textureLod( tex, p3, lod ) );
	}
	vec4 textureBicubic( sampler2D sampler, vec2 uv, float lod ) {
		vec2 fLodSize = vec2( textureSize( sampler, int( lod ) ) );
		vec2 cLodSize = vec2( textureSize( sampler, int( lod + 1.0 ) ) );
		vec2 fLodSizeInv = 1.0 / fLodSize;
		vec2 cLodSizeInv = 1.0 / cLodSize;
		vec4 fSample = bicubic( sampler, uv, vec4( fLodSizeInv, fLodSize ), floor( lod ) );
		vec4 cSample = bicubic( sampler, uv, vec4( cLodSizeInv, cLodSize ), ceil( lod ) );
		return mix( fSample, cSample, fract( lod ) );
	}
	vec3 getVolumeTransmissionRay( const in vec3 n, const in vec3 v, const in float thickness, const in float ior, const in mat4 modelMatrix ) {
		vec3 refractionVector = refract( - v, normalize( n ), 1.0 / ior );
		vec3 modelScale;
		modelScale.x = length( vec3( modelMatrix[ 0 ].xyz ) );
		modelScale.y = length( vec3( modelMatrix[ 1 ].xyz ) );
		modelScale.z = length( vec3( modelMatrix[ 2 ].xyz ) );
		return normalize( refractionVector ) * thickness * modelScale;
	}
	float applyIorToRoughness( const in float roughness, const in float ior ) {
		return roughness * clamp( ior * 2.0 - 2.0, 0.0, 1.0 );
	}
	vec4 getTransmissionSample( const in vec2 fragCoord, const in float roughness, const in float ior ) {
		float lod = log2( transmissionSamplerSize.x ) * applyIorToRoughness( roughness, ior );
		return textureBicubic( transmissionSamplerMap, fragCoord.xy, lod );
	}
	vec3 volumeAttenuation( const in float transmissionDistance, const in vec3 attenuationColor, const in float attenuationDistance ) {
		if ( isinf( attenuationDistance ) ) {
			return vec3( 1.0 );
		} else {
			vec3 attenuationCoefficient = -log( attenuationColor ) / attenuationDistance;
			vec3 transmittance = exp( - attenuationCoefficient * transmissionDistance );			return transmittance;
		}
	}
	vec4 getIBLVolumeRefraction( const in vec3 n, const in vec3 v, const in float roughness, const in vec3 diffuseColor,
		const in vec3 specularColor, const in float specularF90, const in vec3 position, const in mat4 modelMatrix,
		const in mat4 viewMatrix, const in mat4 projMatrix, const in float ior, const in float thickness,
		const in vec3 attenuationColor, const in float attenuationDistance ) {
		vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, ior, modelMatrix );
		vec3 refractedRayExit = position + transmissionRay;
		vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
		vec2 refractionCoords = ndcPos.xy / ndcPos.w;
		refractionCoords += 1.0;
		refractionCoords /= 2.0;
		vec4 transmittedLight = getTransmissionSample( refractionCoords, roughness, ior );
		vec3 transmittance = diffuseColor * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance );
		vec3 attenuatedColor = transmittance * transmittedLight.rgb;
		vec3 F = EnvironmentBRDF( n, v, specularColor, specularF90, roughness );
		float transmittanceFactor = ( transmittance.r + transmittance.g + transmittance.b ) / 3.0;
		return vec4( ( 1.0 - F ) * attenuatedColor, 1.0 - ( 1.0 - transmittedLight.a ) * transmittanceFactor );
	}
#endif`,vx=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_SPECULARMAP
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,Mx=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	uniform mat3 mapTransform;
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	uniform mat3 alphaMapTransform;
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	uniform mat3 lightMapTransform;
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	uniform mat3 aoMapTransform;
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	uniform mat3 bumpMapTransform;
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	uniform mat3 normalMapTransform;
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_DISPLACEMENTMAP
	uniform mat3 displacementMapTransform;
	varying vec2 vDisplacementMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	uniform mat3 emissiveMapTransform;
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	uniform mat3 metalnessMapTransform;
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	uniform mat3 roughnessMapTransform;
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	uniform mat3 anisotropyMapTransform;
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	uniform mat3 clearcoatMapTransform;
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform mat3 clearcoatNormalMapTransform;
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform mat3 clearcoatRoughnessMapTransform;
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	uniform mat3 sheenColorMapTransform;
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	uniform mat3 sheenRoughnessMapTransform;
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	uniform mat3 iridescenceMapTransform;
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform mat3 iridescenceThicknessMapTransform;
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SPECULARMAP
	uniform mat3 specularMapTransform;
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	uniform mat3 specularColorMapTransform;
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	uniform mat3 specularIntensityMapTransform;
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,bx=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	vUv = vec3( uv, 1 ).xy;
#endif
#ifdef USE_MAP
	vMapUv = ( mapTransform * vec3( MAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ALPHAMAP
	vAlphaMapUv = ( alphaMapTransform * vec3( ALPHAMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_LIGHTMAP
	vLightMapUv = ( lightMapTransform * vec3( LIGHTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_AOMAP
	vAoMapUv = ( aoMapTransform * vec3( AOMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_BUMPMAP
	vBumpMapUv = ( bumpMapTransform * vec3( BUMPMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_NORMALMAP
	vNormalMapUv = ( normalMapTransform * vec3( NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_DISPLACEMENTMAP
	vDisplacementMapUv = ( displacementMapTransform * vec3( DISPLACEMENTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_EMISSIVEMAP
	vEmissiveMapUv = ( emissiveMapTransform * vec3( EMISSIVEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_METALNESSMAP
	vMetalnessMapUv = ( metalnessMapTransform * vec3( METALNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ROUGHNESSMAP
	vRoughnessMapUv = ( roughnessMapTransform * vec3( ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ANISOTROPYMAP
	vAnisotropyMapUv = ( anisotropyMapTransform * vec3( ANISOTROPYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOATMAP
	vClearcoatMapUv = ( clearcoatMapTransform * vec3( CLEARCOATMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	vClearcoatNormalMapUv = ( clearcoatNormalMapTransform * vec3( CLEARCOAT_NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	vClearcoatRoughnessMapUv = ( clearcoatRoughnessMapTransform * vec3( CLEARCOAT_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCEMAP
	vIridescenceMapUv = ( iridescenceMapTransform * vec3( IRIDESCENCEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	vIridescenceThicknessMapUv = ( iridescenceThicknessMapTransform * vec3( IRIDESCENCE_THICKNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_COLORMAP
	vSheenColorMapUv = ( sheenColorMapTransform * vec3( SHEEN_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	vSheenRoughnessMapUv = ( sheenRoughnessMapTransform * vec3( SHEEN_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULARMAP
	vSpecularMapUv = ( specularMapTransform * vec3( SPECULARMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_COLORMAP
	vSpecularColorMapUv = ( specularColorMapTransform * vec3( SPECULAR_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	vSpecularIntensityMapUv = ( specularIntensityMapTransform * vec3( SPECULAR_INTENSITYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_TRANSMISSIONMAP
	vTransmissionMapUv = ( transmissionMapTransform * vec3( TRANSMISSIONMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_THICKNESSMAP
	vThicknessMapUv = ( thicknessMapTransform * vec3( THICKNESSMAP_UV, 1 ) ).xy;
#endif`,wx=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`,Sx=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,Ex=`uniform sampler2D t2D;
uniform float backgroundIntensity;
varying vec2 vUv;
void main() {
	vec4 texColor = texture2D( t2D, vUv );
	#ifdef DECODE_VIDEO_TEXTURE
		texColor = vec4( mix( pow( texColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), texColor.rgb * 0.0773993808, vec3( lessThanEqual( texColor.rgb, vec3( 0.04045 ) ) ) ), texColor.w );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Tx=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,Ax=`#ifdef ENVMAP_TYPE_CUBE
	uniform samplerCube envMap;
#elif defined( ENVMAP_TYPE_CUBE_UV )
	uniform sampler2D envMap;
#endif
uniform float flipEnvMap;
uniform float backgroundBlurriness;
uniform float backgroundIntensity;
varying vec3 vWorldDirection;
#include <cube_uv_reflection_fragment>
void main() {
	#ifdef ENVMAP_TYPE_CUBE
		vec4 texColor = textureCube( envMap, vec3( flipEnvMap * vWorldDirection.x, vWorldDirection.yz ) );
	#elif defined( ENVMAP_TYPE_CUBE_UV )
		vec4 texColor = textureCubeUV( envMap, vWorldDirection, backgroundBlurriness );
	#else
		vec4 texColor = vec4( 0.0, 0.0, 0.0, 1.0 );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Rx=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,Cx=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Px=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
varying vec2 vHighPrecisionZW;
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vHighPrecisionZW = gl_Position.zw;
}`,Lx=`#if DEPTH_PACKING == 3200
	uniform float opacity;
#endif
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
varying vec2 vHighPrecisionZW;
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( 1.0 );
	#if DEPTH_PACKING == 3200
		diffuseColor.a = opacity;
	#endif
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <logdepthbuf_fragment>
	float fragCoordZ = 0.5 * vHighPrecisionZW[0] / vHighPrecisionZW[1] + 0.5;
	#if DEPTH_PACKING == 3200
		gl_FragColor = vec4( vec3( 1.0 - fragCoordZ ), opacity );
	#elif DEPTH_PACKING == 3201
		gl_FragColor = packDepthToRGBA( fragCoordZ );
	#endif
}`,Ix=`#define DISTANCE
varying vec3 vWorldPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <worldpos_vertex>
	#include <clipping_planes_vertex>
	vWorldPosition = worldPosition.xyz;
}`,zx=`#define DISTANCE
uniform vec3 referencePosition;
uniform float nearDistance;
uniform float farDistance;
varying vec3 vWorldPosition;
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <clipping_planes_pars_fragment>
void main () {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( 1.0 );
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	float dist = length( vWorldPosition - referencePosition );
	dist = ( dist - nearDistance ) / ( farDistance - nearDistance );
	dist = saturate( dist );
	gl_FragColor = packDepthToRGBA( dist );
}`,Dx=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,Nx=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Ux=`uniform float scale;
attribute float lineDistance;
varying float vLineDistance;
#include <common>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	vLineDistance = scale * lineDistance;
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,Ox=`uniform vec3 diffuse;
uniform float opacity;
uniform float dashSize;
uniform float totalSize;
varying float vLineDistance;
#include <common>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	if ( mod( vLineDistance, totalSize ) > dashSize ) {
		discard;
	}
	vec3 outgoingLight = vec3( 0.0 );
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,Fx=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#if defined ( USE_ENVMAP ) || defined ( USE_SKINNING )
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinbase_vertex>
		#include <skinnormal_vertex>
		#include <defaultnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <fog_vertex>
}`,Bx=`uniform vec3 diffuse;
uniform float opacity;
#ifndef FLAT_SHADED
	varying vec3 vNormal;
#endif
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		reflectedLight.indirectDiffuse += lightMapTexel.rgb * lightMapIntensity * RECIPROCAL_PI;
	#else
		reflectedLight.indirectDiffuse += vec3( 1.0 );
	#endif
	#include <aomap_fragment>
	reflectedLight.indirectDiffuse *= diffuseColor.rgb;
	vec3 outgoingLight = reflectedLight.indirectDiffuse;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,kx=`#define LAMBERT
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,Hx=`#define LAMBERT
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_lambert_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_lambert_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Gx=`#define MATCAP
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <displacementmap_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
	vViewPosition = - mvPosition.xyz;
}`,Vx=`#define MATCAP
uniform vec3 diffuse;
uniform float opacity;
uniform sampler2D matcap;
varying vec3 vViewPosition;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	vec3 viewDir = normalize( vViewPosition );
	vec3 x = normalize( vec3( viewDir.z, 0.0, - viewDir.x ) );
	vec3 y = cross( viewDir, x );
	vec2 uv = vec2( dot( x, normal ), dot( y, normal ) ) * 0.495 + 0.5;
	#ifdef USE_MATCAP
		vec4 matcapColor = texture2D( matcap, uv );
	#else
		vec4 matcapColor = vec4( vec3( mix( 0.2, 0.8, uv.y ) ), 1.0 );
	#endif
	vec3 outgoingLight = diffuseColor.rgb * matcapColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Wx=`#define NORMAL
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	vViewPosition = - mvPosition.xyz;
#endif
}`,Xx=`#define NORMAL
uniform float opacity;
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <packing>
#include <uv_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	gl_FragColor = vec4( packNormalToRGB( normal ), opacity );
	#ifdef OPAQUE
		gl_FragColor.a = 1.0;
	#endif
}`,qx=`#define PHONG
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,Yx=`#define PHONG
uniform vec3 diffuse;
uniform vec3 emissive;
uniform vec3 specular;
uniform float shininess;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_phong_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_phong_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + reflectedLight.directSpecular + reflectedLight.indirectSpecular + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Zx=`#define STANDARD
varying vec3 vViewPosition;
#ifdef USE_TRANSMISSION
	varying vec3 vWorldPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
#ifdef USE_TRANSMISSION
	vWorldPosition = worldPosition.xyz;
#endif
}`,jx=`#define STANDARD
#ifdef PHYSICAL
	#define IOR
	#define USE_SPECULAR
#endif
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float roughness;
uniform float metalness;
uniform float opacity;
#ifdef IOR
	uniform float ior;
#endif
#ifdef USE_SPECULAR
	uniform float specularIntensity;
	uniform vec3 specularColor;
	#ifdef USE_SPECULAR_COLORMAP
		uniform sampler2D specularColorMap;
	#endif
	#ifdef USE_SPECULAR_INTENSITYMAP
		uniform sampler2D specularIntensityMap;
	#endif
#endif
#ifdef USE_CLEARCOAT
	uniform float clearcoat;
	uniform float clearcoatRoughness;
#endif
#ifdef USE_IRIDESCENCE
	uniform float iridescence;
	uniform float iridescenceIOR;
	uniform float iridescenceThicknessMinimum;
	uniform float iridescenceThicknessMaximum;
#endif
#ifdef USE_SHEEN
	uniform vec3 sheenColor;
	uniform float sheenRoughness;
	#ifdef USE_SHEEN_COLORMAP
		uniform sampler2D sheenColorMap;
	#endif
	#ifdef USE_SHEEN_ROUGHNESSMAP
		uniform sampler2D sheenRoughnessMap;
	#endif
#endif
#ifdef USE_ANISOTROPY
	uniform vec2 anisotropyVector;
	#ifdef USE_ANISOTROPYMAP
		uniform sampler2D anisotropyMap;
	#endif
#endif
varying vec3 vViewPosition;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <iridescence_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_physical_pars_fragment>
#include <transmission_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <clearcoat_pars_fragment>
#include <iridescence_pars_fragment>
#include <roughnessmap_pars_fragment>
#include <metalnessmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <roughnessmap_fragment>
	#include <metalnessmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <clearcoat_normal_fragment_begin>
	#include <clearcoat_normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_physical_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 totalDiffuse = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse;
	vec3 totalSpecular = reflectedLight.directSpecular + reflectedLight.indirectSpecular;
	#include <transmission_fragment>
	vec3 outgoingLight = totalDiffuse + totalSpecular + totalEmissiveRadiance;
	#ifdef USE_SHEEN
		float sheenEnergyComp = 1.0 - 0.157 * max3( material.sheenColor );
		outgoingLight = outgoingLight * sheenEnergyComp + sheenSpecularDirect + sheenSpecularIndirect;
	#endif
	#ifdef USE_CLEARCOAT
		float dotNVcc = saturate( dot( geometryClearcoatNormal, geometryViewDir ) );
		vec3 Fcc = F_Schlick( material.clearcoatF0, material.clearcoatF90, dotNVcc );
		outgoingLight = outgoingLight * ( 1.0 - material.clearcoat * Fcc ) + ( clearcoatSpecularDirect + clearcoatSpecularIndirect ) * material.clearcoat;
	#endif
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Kx=`#define TOON
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,$x=`#define TOON
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <gradientmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_toon_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_toon_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Jx=`uniform float size;
uniform float scale;
#include <common>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
#ifdef USE_POINTS_UV
	varying vec2 vUv;
	uniform mat3 uvTransform;
#endif
void main() {
	#ifdef USE_POINTS_UV
		vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	#endif
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	gl_PointSize = size;
	#ifdef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) gl_PointSize *= ( scale / - mvPosition.z );
	#endif
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <fog_vertex>
}`,Qx=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <color_pars_fragment>
#include <map_particle_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <logdepthbuf_fragment>
	#include <map_particle_fragment>
	#include <color_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,e_=`#include <common>
#include <batching_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <shadowmap_pars_vertex>
void main() {
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,t_=`uniform vec3 color;
uniform float opacity;
#include <common>
#include <packing>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <logdepthbuf_pars_fragment>
#include <shadowmap_pars_fragment>
#include <shadowmask_pars_fragment>
void main() {
	#include <logdepthbuf_fragment>
	gl_FragColor = vec4( color, opacity * ( 1.0 - getShadowMask() ) );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,n_=`uniform float rotation;
uniform vec2 center;
#include <common>
#include <uv_pars_vertex>
#include <fog_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	vec4 mvPosition = modelViewMatrix * vec4( 0.0, 0.0, 0.0, 1.0 );
	vec2 scale;
	scale.x = length( vec3( modelMatrix[ 0 ].x, modelMatrix[ 0 ].y, modelMatrix[ 0 ].z ) );
	scale.y = length( vec3( modelMatrix[ 1 ].x, modelMatrix[ 1 ].y, modelMatrix[ 1 ].z ) );
	#ifndef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) scale *= - mvPosition.z;
	#endif
	vec2 alignedPosition = ( position.xy - ( center - vec2( 0.5 ) ) ) * scale;
	vec2 rotatedPosition;
	rotatedPosition.x = cos( rotation ) * alignedPosition.x - sin( rotation ) * alignedPosition.y;
	rotatedPosition.y = sin( rotation ) * alignedPosition.x + cos( rotation ) * alignedPosition.y;
	mvPosition.xy += rotatedPosition;
	gl_Position = projectionMatrix * mvPosition;
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,i_=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,Qe={alphahash_fragment:E0,alphahash_pars_fragment:T0,alphamap_fragment:A0,alphamap_pars_fragment:R0,alphatest_fragment:C0,alphatest_pars_fragment:P0,aomap_fragment:L0,aomap_pars_fragment:I0,batching_pars_vertex:z0,batching_vertex:D0,begin_vertex:N0,beginnormal_vertex:U0,bsdfs:O0,iridescence_fragment:F0,bumpmap_pars_fragment:B0,clipping_planes_fragment:k0,clipping_planes_pars_fragment:H0,clipping_planes_pars_vertex:G0,clipping_planes_vertex:V0,color_fragment:W0,color_pars_fragment:X0,color_pars_vertex:q0,color_vertex:Y0,common:Z0,cube_uv_reflection_fragment:j0,defaultnormal_vertex:K0,displacementmap_pars_vertex:$0,displacementmap_vertex:J0,emissivemap_fragment:Q0,emissivemap_pars_fragment:eg,colorspace_fragment:tg,colorspace_pars_fragment:ng,envmap_fragment:ig,envmap_common_pars_fragment:sg,envmap_pars_fragment:rg,envmap_pars_vertex:ag,envmap_physical_pars_fragment:_g,envmap_vertex:og,fog_vertex:cg,fog_pars_vertex:lg,fog_fragment:hg,fog_pars_fragment:ug,gradientmap_pars_fragment:dg,lightmap_fragment:fg,lightmap_pars_fragment:pg,lights_lambert_fragment:mg,lights_lambert_pars_fragment:gg,lights_pars_begin:xg,lights_toon_fragment:yg,lights_toon_pars_fragment:vg,lights_phong_fragment:Mg,lights_phong_pars_fragment:bg,lights_physical_fragment:wg,lights_physical_pars_fragment:Sg,lights_fragment_begin:Eg,lights_fragment_maps:Tg,lights_fragment_end:Ag,logdepthbuf_fragment:Rg,logdepthbuf_pars_fragment:Cg,logdepthbuf_pars_vertex:Pg,logdepthbuf_vertex:Lg,map_fragment:Ig,map_pars_fragment:zg,map_particle_fragment:Dg,map_particle_pars_fragment:Ng,metalnessmap_fragment:Ug,metalnessmap_pars_fragment:Og,morphcolor_vertex:Fg,morphnormal_vertex:Bg,morphtarget_pars_vertex:kg,morphtarget_vertex:Hg,normal_fragment_begin:Gg,normal_fragment_maps:Vg,normal_pars_fragment:Wg,normal_pars_vertex:Xg,normal_vertex:qg,normalmap_pars_fragment:Yg,clearcoat_normal_fragment_begin:Zg,clearcoat_normal_fragment_maps:jg,clearcoat_pars_fragment:Kg,iridescence_pars_fragment:$g,opaque_fragment:Jg,packing:Qg,premultiplied_alpha_fragment:ex,project_vertex:tx,dithering_fragment:nx,dithering_pars_fragment:ix,roughnessmap_fragment:sx,roughnessmap_pars_fragment:rx,shadowmap_pars_fragment:ax,shadowmap_pars_vertex:ox,shadowmap_vertex:cx,shadowmask_pars_fragment:lx,skinbase_vertex:hx,skinning_pars_vertex:ux,skinning_vertex:dx,skinnormal_vertex:fx,specularmap_fragment:px,specularmap_pars_fragment:mx,tonemapping_fragment:gx,tonemapping_pars_fragment:xx,transmission_fragment:_x,transmission_pars_fragment:yx,uv_pars_fragment:vx,uv_pars_vertex:Mx,uv_vertex:bx,worldpos_vertex:wx,background_vert:Sx,background_frag:Ex,backgroundCube_vert:Tx,backgroundCube_frag:Ax,cube_vert:Rx,cube_frag:Cx,depth_vert:Px,depth_frag:Lx,distanceRGBA_vert:Ix,distanceRGBA_frag:zx,equirect_vert:Dx,equirect_frag:Nx,linedashed_vert:Ux,linedashed_frag:Ox,meshbasic_vert:Fx,meshbasic_frag:Bx,meshlambert_vert:kx,meshlambert_frag:Hx,meshmatcap_vert:Gx,meshmatcap_frag:Vx,meshnormal_vert:Wx,meshnormal_frag:Xx,meshphong_vert:qx,meshphong_frag:Yx,meshphysical_vert:Zx,meshphysical_frag:jx,meshtoon_vert:Kx,meshtoon_frag:$x,points_vert:Jx,points_frag:Qx,shadow_vert:e_,shadow_frag:t_,sprite_vert:n_,sprite_frag:i_},fe={common:{diffuse:{value:new pe(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new st},alphaMap:{value:null},alphaMapTransform:{value:new st},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new st}},envmap:{envMap:{value:null},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new st}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new st}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new st},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new st},normalScale:{value:new ze(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new st},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new st}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new st}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new st}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new pe(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new pe(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new st},alphaTest:{value:0},uvTransform:{value:new st}},sprite:{diffuse:{value:new pe(16777215)},opacity:{value:1},center:{value:new ze(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new st},alphaMap:{value:null},alphaMapTransform:{value:new st},alphaTest:{value:0}}},Wn={basic:{uniforms:mn([fe.common,fe.specularmap,fe.envmap,fe.aomap,fe.lightmap,fe.fog]),vertexShader:Qe.meshbasic_vert,fragmentShader:Qe.meshbasic_frag},lambert:{uniforms:mn([fe.common,fe.specularmap,fe.envmap,fe.aomap,fe.lightmap,fe.emissivemap,fe.bumpmap,fe.normalmap,fe.displacementmap,fe.fog,fe.lights,{emissive:{value:new pe(0)}}]),vertexShader:Qe.meshlambert_vert,fragmentShader:Qe.meshlambert_frag},phong:{uniforms:mn([fe.common,fe.specularmap,fe.envmap,fe.aomap,fe.lightmap,fe.emissivemap,fe.bumpmap,fe.normalmap,fe.displacementmap,fe.fog,fe.lights,{emissive:{value:new pe(0)},specular:{value:new pe(1118481)},shininess:{value:30}}]),vertexShader:Qe.meshphong_vert,fragmentShader:Qe.meshphong_frag},standard:{uniforms:mn([fe.common,fe.envmap,fe.aomap,fe.lightmap,fe.emissivemap,fe.bumpmap,fe.normalmap,fe.displacementmap,fe.roughnessmap,fe.metalnessmap,fe.fog,fe.lights,{emissive:{value:new pe(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:Qe.meshphysical_vert,fragmentShader:Qe.meshphysical_frag},toon:{uniforms:mn([fe.common,fe.aomap,fe.lightmap,fe.emissivemap,fe.bumpmap,fe.normalmap,fe.displacementmap,fe.gradientmap,fe.fog,fe.lights,{emissive:{value:new pe(0)}}]),vertexShader:Qe.meshtoon_vert,fragmentShader:Qe.meshtoon_frag},matcap:{uniforms:mn([fe.common,fe.bumpmap,fe.normalmap,fe.displacementmap,fe.fog,{matcap:{value:null}}]),vertexShader:Qe.meshmatcap_vert,fragmentShader:Qe.meshmatcap_frag},points:{uniforms:mn([fe.points,fe.fog]),vertexShader:Qe.points_vert,fragmentShader:Qe.points_frag},dashed:{uniforms:mn([fe.common,fe.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:Qe.linedashed_vert,fragmentShader:Qe.linedashed_frag},depth:{uniforms:mn([fe.common,fe.displacementmap]),vertexShader:Qe.depth_vert,fragmentShader:Qe.depth_frag},normal:{uniforms:mn([fe.common,fe.bumpmap,fe.normalmap,fe.displacementmap,{opacity:{value:1}}]),vertexShader:Qe.meshnormal_vert,fragmentShader:Qe.meshnormal_frag},sprite:{uniforms:mn([fe.sprite,fe.fog]),vertexShader:Qe.sprite_vert,fragmentShader:Qe.sprite_frag},background:{uniforms:{uvTransform:{value:new st},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:Qe.background_vert,fragmentShader:Qe.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1}},vertexShader:Qe.backgroundCube_vert,fragmentShader:Qe.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:Qe.cube_vert,fragmentShader:Qe.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:Qe.equirect_vert,fragmentShader:Qe.equirect_frag},distanceRGBA:{uniforms:mn([fe.common,fe.displacementmap,{referencePosition:{value:new L},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:Qe.distanceRGBA_vert,fragmentShader:Qe.distanceRGBA_frag},shadow:{uniforms:mn([fe.lights,fe.fog,{color:{value:new pe(0)},opacity:{value:1}}]),vertexShader:Qe.shadow_vert,fragmentShader:Qe.shadow_frag}};Wn.physical={uniforms:mn([Wn.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new st},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new st},clearcoatNormalScale:{value:new ze(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new st},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new st},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new st},sheen:{value:0},sheenColor:{value:new pe(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new st},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new st},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new st},transmissionSamplerSize:{value:new ze},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new st},attenuationDistance:{value:0},attenuationColor:{value:new pe(0)},specularColor:{value:new pe(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new st},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new st},anisotropyVector:{value:new ze},anisotropyMap:{value:null},anisotropyMapTransform:{value:new st}}]),vertexShader:Qe.meshphysical_vert,fragmentShader:Qe.meshphysical_frag};var Ja={r:0,b:0,g:0};function s_(i,e,t,n,s,r,a){let o=new pe(0),c=r===!0?0:1,l,h,u=null,d=0,f=null;function p(g,m){let y=!1,_=m.isScene===!0?m.background:null;_&&_.isTexture&&(_=(m.backgroundBlurriness>0?t:e).get(_)),_===null?x(o,c):_&&_.isColor&&(x(_,1),y=!0);let w=i.xr.getEnvironmentBlendMode();w==="additive"?n.buffers.color.setClear(0,0,0,1,a):w==="alpha-blend"&&n.buffers.color.setClear(0,0,0,0,a),(i.autoClear||y)&&i.clear(i.autoClearColor,i.autoClearDepth,i.autoClearStencil),_&&(_.isCubeTexture||_.mapping===qo)?(h===void 0&&(h=new de(new Fe(1,1,1),new di({name:"BackgroundCubeMaterial",uniforms:lr(Wn.backgroundCube.uniforms),vertexShader:Wn.backgroundCube.vertexShader,fragmentShader:Wn.backgroundCube.fragmentShader,side:cn,depthTest:!1,depthWrite:!1,fog:!1})),h.geometry.deleteAttribute("normal"),h.geometry.deleteAttribute("uv"),h.onBeforeRender=function(P,A,R){this.matrixWorld.copyPosition(R.matrixWorld)},Object.defineProperty(h.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),s.update(h)),h.material.uniforms.envMap.value=_,h.material.uniforms.flipEnvMap.value=_.isCubeTexture&&_.isRenderTargetTexture===!1?-1:1,h.material.uniforms.backgroundBlurriness.value=m.backgroundBlurriness,h.material.uniforms.backgroundIntensity.value=m.backgroundIntensity,h.material.toneMapped=ht.getTransfer(_.colorSpace)!==Et,(u!==_||d!==_.version||f!==i.toneMapping)&&(h.material.needsUpdate=!0,u=_,d=_.version,f=i.toneMapping),h.layers.enableAll(),g.unshift(h,h.geometry,h.material,0,0,null)):_&&_.isTexture&&(l===void 0&&(l=new de(new zi(2,2),new di({name:"BackgroundMaterial",uniforms:lr(Wn.background.uniforms),vertexShader:Wn.background.vertexShader,fragmentShader:Wn.background.fragmentShader,side:qn,depthTest:!1,depthWrite:!1,fog:!1})),l.geometry.deleteAttribute("normal"),Object.defineProperty(l.material,"map",{get:function(){return this.uniforms.t2D.value}}),s.update(l)),l.material.uniforms.t2D.value=_,l.material.uniforms.backgroundIntensity.value=m.backgroundIntensity,l.material.toneMapped=ht.getTransfer(_.colorSpace)!==Et,_.matrixAutoUpdate===!0&&_.updateMatrix(),l.material.uniforms.uvTransform.value.copy(_.matrix),(u!==_||d!==_.version||f!==i.toneMapping)&&(l.material.needsUpdate=!0,u=_,d=_.version,f=i.toneMapping),l.layers.enableAll(),g.unshift(l,l.geometry,l.material,0,0,null))}function x(g,m){g.getRGB(Ja,mf(i)),n.buffers.color.setClear(Ja.r,Ja.g,Ja.b,m,a)}return{getClearColor:function(){return o},setClearColor:function(g,m=1){o.set(g),c=m,x(o,c)},getClearAlpha:function(){return c},setClearAlpha:function(g){c=g,x(o,c)},render:p}}function r_(i,e,t,n){let s=i.getParameter(i.MAX_VERTEX_ATTRIBS),r=n.isWebGL2?null:e.get("OES_vertex_array_object"),a=n.isWebGL2||r!==null,o={},c=g(null),l=c,h=!1;function u(z,B,J,q,K){let $=!1;if(a){let se=x(q,J,B);l!==se&&(l=se,f(l.object)),$=m(z,q,J,K),$&&y(z,q,J,K)}else{let se=B.wireframe===!0;(l.geometry!==q.id||l.program!==J.id||l.wireframe!==se)&&(l.geometry=q.id,l.program=J.id,l.wireframe=se,$=!0)}K!==null&&t.update(K,i.ELEMENT_ARRAY_BUFFER),($||h)&&(h=!1,F(z,B,J,q),K!==null&&i.bindBuffer(i.ELEMENT_ARRAY_BUFFER,t.get(K).buffer))}function d(){return n.isWebGL2?i.createVertexArray():r.createVertexArrayOES()}function f(z){return n.isWebGL2?i.bindVertexArray(z):r.bindVertexArrayOES(z)}function p(z){return n.isWebGL2?i.deleteVertexArray(z):r.deleteVertexArrayOES(z)}function x(z,B,J){let q=J.wireframe===!0,K=o[z.id];K===void 0&&(K={},o[z.id]=K);let $=K[B.id];$===void 0&&($={},K[B.id]=$);let se=$[q];return se===void 0&&(se=g(d()),$[q]=se),se}function g(z){let B=[],J=[],q=[];for(let K=0;K<s;K++)B[K]=0,J[K]=0,q[K]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:B,enabledAttributes:J,attributeDivisors:q,object:z,attributes:{},index:null}}function m(z,B,J,q){let K=l.attributes,$=B.attributes,se=0,le=J.getAttributes();for(let _e in le)if(le[_e].location>=0){let te=K[_e],xe=$[_e];if(xe===void 0&&(_e==="instanceMatrix"&&z.instanceMatrix&&(xe=z.instanceMatrix),_e==="instanceColor"&&z.instanceColor&&(xe=z.instanceColor)),te===void 0||te.attribute!==xe||xe&&te.data!==xe.data)return!0;se++}return l.attributesNum!==se||l.index!==q}function y(z,B,J,q){let K={},$=B.attributes,se=0,le=J.getAttributes();for(let _e in le)if(le[_e].location>=0){let te=$[_e];te===void 0&&(_e==="instanceMatrix"&&z.instanceMatrix&&(te=z.instanceMatrix),_e==="instanceColor"&&z.instanceColor&&(te=z.instanceColor));let xe={};xe.attribute=te,te&&te.data&&(xe.data=te.data),K[_e]=xe,se++}l.attributes=K,l.attributesNum=se,l.index=q}function _(){let z=l.newAttributes;for(let B=0,J=z.length;B<J;B++)z[B]=0}function w(z){P(z,0)}function P(z,B){let J=l.newAttributes,q=l.enabledAttributes,K=l.attributeDivisors;J[z]=1,q[z]===0&&(i.enableVertexAttribArray(z),q[z]=1),K[z]!==B&&((n.isWebGL2?i:e.get("ANGLE_instanced_arrays"))[n.isWebGL2?"vertexAttribDivisor":"vertexAttribDivisorANGLE"](z,B),K[z]=B)}function A(){let z=l.newAttributes,B=l.enabledAttributes;for(let J=0,q=B.length;J<q;J++)B[J]!==z[J]&&(i.disableVertexAttribArray(J),B[J]=0)}function R(z,B,J,q,K,$,se){se===!0?i.vertexAttribIPointer(z,B,J,K,$):i.vertexAttribPointer(z,B,J,q,K,$)}function F(z,B,J,q){if(n.isWebGL2===!1&&(z.isInstancedMesh||q.isInstancedBufferGeometry)&&e.get("ANGLE_instanced_arrays")===null)return;_();let K=q.attributes,$=J.getAttributes(),se=B.defaultAttributeValues;for(let le in $){let _e=$[le];if(_e.location>=0){let Z=K[le];if(Z===void 0&&(le==="instanceMatrix"&&z.instanceMatrix&&(Z=z.instanceMatrix),le==="instanceColor"&&z.instanceColor&&(Z=z.instanceColor)),Z!==void 0){let te=Z.normalized,xe=Z.itemSize,Re=t.get(Z);if(Re===void 0)continue;let we=Re.buffer,Be=Re.type,He=Re.bytesPerElement,Pe=n.isWebGL2===!0&&(Be===i.INT||Be===i.UNSIGNED_INT||Z.gpuType===nf);if(Z.isInterleavedBufferAttribute){let qe=Z.data,k=qe.stride,jt=Z.offset;if(qe.isInstancedInterleavedBuffer){for(let Le=0;Le<_e.locationSize;Le++)P(_e.location+Le,qe.meshPerAttribute);z.isInstancedMesh!==!0&&q._maxInstanceCount===void 0&&(q._maxInstanceCount=qe.meshPerAttribute*qe.count)}else for(let Le=0;Le<_e.locationSize;Le++)w(_e.location+Le);i.bindBuffer(i.ARRAY_BUFFER,we);for(let Le=0;Le<_e.locationSize;Le++)R(_e.location+Le,xe/_e.locationSize,Be,te,k*He,(jt+xe/_e.locationSize*Le)*He,Pe)}else{if(Z.isInstancedBufferAttribute){for(let qe=0;qe<_e.locationSize;qe++)P(_e.location+qe,Z.meshPerAttribute);z.isInstancedMesh!==!0&&q._maxInstanceCount===void 0&&(q._maxInstanceCount=Z.meshPerAttribute*Z.count)}else for(let qe=0;qe<_e.locationSize;qe++)w(_e.location+qe);i.bindBuffer(i.ARRAY_BUFFER,we);for(let qe=0;qe<_e.locationSize;qe++)R(_e.location+qe,xe/_e.locationSize,Be,te,xe*He,xe/_e.locationSize*qe*He,Pe)}}else if(se!==void 0){let te=se[le];if(te!==void 0)switch(te.length){case 2:i.vertexAttrib2fv(_e.location,te);break;case 3:i.vertexAttrib3fv(_e.location,te);break;case 4:i.vertexAttrib4fv(_e.location,te);break;default:i.vertexAttrib1fv(_e.location,te)}}}}A()}function M(){j();for(let z in o){let B=o[z];for(let J in B){let q=B[J];for(let K in q)p(q[K].object),delete q[K];delete B[J]}delete o[z]}}function E(z){if(o[z.id]===void 0)return;let B=o[z.id];for(let J in B){let q=B[J];for(let K in q)p(q[K].object),delete q[K];delete B[J]}delete o[z.id]}function O(z){for(let B in o){let J=o[B];if(J[z.id]===void 0)continue;let q=J[z.id];for(let K in q)p(q[K].object),delete q[K];delete J[z.id]}}function j(){ae(),h=!0,l!==c&&(l=c,f(l.object))}function ae(){c.geometry=null,c.program=null,c.wireframe=!1}return{setup:u,reset:j,resetDefaultState:ae,dispose:M,releaseStatesOfGeometry:E,releaseStatesOfProgram:O,initAttributes:_,enableAttribute:w,disableUnusedAttributes:A}}function a_(i,e,t,n){let s=n.isWebGL2,r;function a(h){r=h}function o(h,u){i.drawArrays(r,h,u),t.update(u,r,1)}function c(h,u,d){if(d===0)return;let f,p;if(s)f=i,p="drawArraysInstanced";else if(f=e.get("ANGLE_instanced_arrays"),p="drawArraysInstancedANGLE",f===null){console.error("THREE.WebGLBufferRenderer: using THREE.InstancedBufferGeometry but hardware does not support extension ANGLE_instanced_arrays.");return}f[p](r,h,u,d),t.update(u,r,d)}function l(h,u,d){if(d===0)return;let f=e.get("WEBGL_multi_draw");if(f===null)for(let p=0;p<d;p++)this.render(h[p],u[p]);else{f.multiDrawArraysWEBGL(r,h,0,u,0,d);let p=0;for(let x=0;x<d;x++)p+=u[x];t.update(p,r,1)}}this.setMode=a,this.render=o,this.renderInstances=c,this.renderMultiDraw=l}function o_(i,e,t){let n;function s(){if(n!==void 0)return n;if(e.has("EXT_texture_filter_anisotropic")===!0){let R=e.get("EXT_texture_filter_anisotropic");n=i.getParameter(R.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else n=0;return n}function r(R){if(R==="highp"){if(i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.HIGH_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.HIGH_FLOAT).precision>0)return"highp";R="mediump"}return R==="mediump"&&i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.MEDIUM_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let a=typeof WebGL2RenderingContext!="undefined"&&i.constructor.name==="WebGL2RenderingContext",o=t.precision!==void 0?t.precision:"highp",c=r(o);c!==o&&(console.warn("THREE.WebGLRenderer:",o,"not supported, using",c,"instead."),o=c);let l=a||e.has("WEBGL_draw_buffers"),h=t.logarithmicDepthBuffer===!0,u=i.getParameter(i.MAX_TEXTURE_IMAGE_UNITS),d=i.getParameter(i.MAX_VERTEX_TEXTURE_IMAGE_UNITS),f=i.getParameter(i.MAX_TEXTURE_SIZE),p=i.getParameter(i.MAX_CUBE_MAP_TEXTURE_SIZE),x=i.getParameter(i.MAX_VERTEX_ATTRIBS),g=i.getParameter(i.MAX_VERTEX_UNIFORM_VECTORS),m=i.getParameter(i.MAX_VARYING_VECTORS),y=i.getParameter(i.MAX_FRAGMENT_UNIFORM_VECTORS),_=d>0,w=a||e.has("OES_texture_float"),P=_&&w,A=a?i.getParameter(i.MAX_SAMPLES):0;return{isWebGL2:a,drawBuffers:l,getMaxAnisotropy:s,getMaxPrecision:r,precision:o,logarithmicDepthBuffer:h,maxTextures:u,maxVertexTextures:d,maxTextureSize:f,maxCubemapSize:p,maxAttributes:x,maxVertexUniforms:g,maxVaryings:m,maxFragmentUniforms:y,vertexTextures:_,floatFragmentTextures:w,floatVertexTextures:P,maxSamples:A}}function c_(i){let e=this,t=null,n=0,s=!1,r=!1,a=new oi,o=new st,c={value:null,needsUpdate:!1};this.uniform=c,this.numPlanes=0,this.numIntersection=0,this.init=function(u,d){let f=u.length!==0||d||n!==0||s;return s=d,n=u.length,f},this.beginShadows=function(){r=!0,h(null)},this.endShadows=function(){r=!1},this.setGlobalState=function(u,d){t=h(u,d,0)},this.setState=function(u,d,f){let p=u.clippingPlanes,x=u.clipIntersection,g=u.clipShadows,m=i.get(u);if(!s||p===null||p.length===0||r&&!g)r?h(null):l();else{let y=r?0:n,_=y*4,w=m.clippingState||null;c.value=w,w=h(p,d,_,f);for(let P=0;P!==_;++P)w[P]=t[P];m.clippingState=w,this.numIntersection=x?this.numPlanes:0,this.numPlanes+=y}};function l(){c.value!==t&&(c.value=t,c.needsUpdate=n>0),e.numPlanes=n,e.numIntersection=0}function h(u,d,f,p){let x=u!==null?u.length:0,g=null;if(x!==0){if(g=c.value,p!==!0||g===null){let m=f+x*4,y=d.matrixWorldInverse;o.getNormalMatrix(y),(g===null||g.length<m)&&(g=new Float32Array(m));for(let _=0,w=f;_!==x;++_,w+=4)a.copy(u[_]).applyMatrix4(y,o),a.normal.toArray(g,w),g[w+3]=a.constant}c.value=g,c.needsUpdate=!0}return e.numPlanes=x,e.numIntersection=0,g}}function l_(i){let e=new WeakMap;function t(a,o){return o===fl?a.mapping=ir:o===pl&&(a.mapping=sr),a}function n(a){if(a&&a.isTexture){let o=a.mapping;if(o===fl||o===pl)if(e.has(a)){let c=e.get(a).texture;return t(c,a.mapping)}else{let c=a.image;if(c&&c.height>0){let l=new Ml(c.height/2);return l.fromEquirectangularTexture(i,a),e.set(a,l),a.addEventListener("dispose",s),t(l.texture,a.mapping)}else return null}}return a}function s(a){let o=a.target;o.removeEventListener("dispose",s);let c=e.get(o);c!==void 0&&(e.delete(o),c.dispose())}function r(){e=new WeakMap}return{get:n,dispose:r}}var hr=class extends Eo{constructor(e=-1,t=1,n=1,s=-1,r=.1,a=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=t,this.top=n,this.bottom=s,this.near=r,this.far=a,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,t,n,s,r,a){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=s,this.view.width=r,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let e=(this.right-this.left)/(2*this.zoom),t=(this.top-this.bottom)/(2*this.zoom),n=(this.right+this.left)/2,s=(this.top+this.bottom)/2,r=n-e,a=n+e,o=s+t,c=s-t;if(this.view!==null&&this.view.enabled){let l=(this.right-this.left)/this.view.fullWidth/this.zoom,h=(this.top-this.bottom)/this.view.fullHeight/this.zoom;r+=l*this.view.offsetX,a=r+l*this.view.width,o-=h*this.view.offsetY,c=o-h*this.view.height}this.projectionMatrix.makeOrthographic(r,a,o,c,this.near,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){let t=super.toJSON(e);return t.object.zoom=this.zoom,t.object.left=this.left,t.object.right=this.right,t.object.top=this.top,t.object.bottom=this.bottom,t.object.near=this.near,t.object.far=this.far,this.view!==null&&(t.object.view=Object.assign({},this.view)),t}},Js=4,dd=[.125,.215,.35,.446,.526,.582],ts=20,el=new hr,fd=new pe,tl=null,nl=0,il=0,Qi=(1+Math.sqrt(5))/2,Ws=1/Qi,pd=[new L(1,1,1),new L(-1,1,1),new L(1,1,-1),new L(-1,1,-1),new L(0,Qi,Ws),new L(0,Qi,-Ws),new L(Ws,0,Qi),new L(-Ws,0,Qi),new L(Qi,Ws,0),new L(-Qi,Ws,0)],ur=class{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(e,t=0,n=.1,s=100){tl=this._renderer.getRenderTarget(),nl=this._renderer.getActiveCubeFace(),il=this._renderer.getActiveMipmapLevel(),this._setSize(256);let r=this._allocateTargets();return r.depthBuffer=!0,this._sceneToCubeUV(e,n,s,r),t>0&&this._blur(r,0,0,t),this._applyPMREM(r),this._cleanup(r),r}fromEquirectangular(e,t=null){return this._fromTexture(e,t)}fromCubemap(e,t=null){return this._fromTexture(e,t)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=xd(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=gd(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodPlanes.length;e++)this._lodPlanes[e].dispose()}_cleanup(e){this._renderer.setRenderTarget(tl,nl,il),e.scissorTest=!1,Qa(e,0,0,e.width,e.height)}_fromTexture(e,t){e.mapping===ir||e.mapping===sr?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),tl=this._renderer.getRenderTarget(),nl=this._renderer.getActiveCubeFace(),il=this._renderer.getActiveMipmapLevel();let n=t||this._allocateTargets();return this._textureToCubeUV(e,n),this._applyPMREM(n),this._cleanup(n),n}_allocateTargets(){let e=3*Math.max(this._cubeSize,112),t=4*this._cubeSize,n={magFilter:gn,minFilter:gn,generateMipmaps:!1,type:$r,format:Rn,colorSpace:qt,depthBuffer:!1},s=md(e,t,n);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==t){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=md(e,t,n);let{_lodMax:r}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=h_(r)),this._blurMaterial=u_(r,e,t)}return s}_compileMaterial(e){let t=new de(this._lodPlanes[0],e);this._renderer.compile(t,el)}_sceneToCubeUV(e,t,n,s){let o=new Xt(90,1,t,n),c=[1,-1,1,1,1,1],l=[1,1,1,-1,-1,-1],h=this._renderer,u=h.autoClear,d=h.toneMapping;h.getClearColor(fd),h.toneMapping=Pi,h.autoClear=!1;let f=new At({name:"PMREM.Background",side:cn,depthWrite:!1,depthTest:!1}),p=new de(new Fe,f),x=!1,g=e.background;g?g.isColor&&(f.color.copy(g),e.background=null,x=!0):(f.color.copy(fd),x=!0);for(let m=0;m<6;m++){let y=m%3;y===0?(o.up.set(0,c[m],0),o.lookAt(l[m],0,0)):y===1?(o.up.set(0,0,c[m]),o.lookAt(0,l[m],0)):(o.up.set(0,c[m],0),o.lookAt(0,0,l[m]));let _=this._cubeSize;Qa(s,y*_,m>2?_:0,_,_),h.setRenderTarget(s),x&&h.render(p,o),h.render(e,o)}p.geometry.dispose(),p.material.dispose(),h.toneMapping=d,h.autoClear=u,e.background=g}_textureToCubeUV(e,t){let n=this._renderer,s=e.mapping===ir||e.mapping===sr;s?(this._cubemapMaterial===null&&(this._cubemapMaterial=xd()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=gd());let r=s?this._cubemapMaterial:this._equirectMaterial,a=new de(this._lodPlanes[0],r),o=r.uniforms;o.envMap.value=e;let c=this._cubeSize;Qa(t,0,0,3*c,2*c),n.setRenderTarget(t),n.render(a,el)}_applyPMREM(e){let t=this._renderer,n=t.autoClear;t.autoClear=!1;for(let s=1;s<this._lodPlanes.length;s++){let r=Math.sqrt(this._sigmas[s]*this._sigmas[s]-this._sigmas[s-1]*this._sigmas[s-1]),a=pd[(s-1)%pd.length];this._blur(e,s-1,s,r,a)}t.autoClear=n}_blur(e,t,n,s,r){let a=this._pingPongRenderTarget;this._halfBlur(e,a,t,n,s,"latitudinal",r),this._halfBlur(a,e,n,n,s,"longitudinal",r)}_halfBlur(e,t,n,s,r,a,o){let c=this._renderer,l=this._blurMaterial;a!=="latitudinal"&&a!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");let h=3,u=new de(this._lodPlanes[s],l),d=l.uniforms,f=this._sizeLods[n]-1,p=isFinite(r)?Math.PI/(2*f):2*Math.PI/(2*ts-1),x=r/p,g=isFinite(r)?1+Math.floor(h*x):ts;g>ts&&console.warn(`sigmaRadians, ${r}, is too large and will clip, as it requested ${g} samples when the maximum is set to ${ts}`);let m=[],y=0;for(let R=0;R<ts;++R){let F=R/x,M=Math.exp(-F*F/2);m.push(M),R===0?y+=M:R<g&&(y+=2*M)}for(let R=0;R<m.length;R++)m[R]=m[R]/y;d.envMap.value=e.texture,d.samples.value=g,d.weights.value=m,d.latitudinal.value=a==="latitudinal",o&&(d.poleAxis.value=o);let{_lodMax:_}=this;d.dTheta.value=p,d.mipInt.value=_-n;let w=this._sizeLods[s],P=3*w*(s>_-Js?s-_+Js:0),A=4*(this._cubeSize-w);Qa(t,P,A,3*w,2*w),c.setRenderTarget(t),c.render(u,el)}};function h_(i){let e=[],t=[],n=[],s=i,r=i-Js+1+dd.length;for(let a=0;a<r;a++){let o=Math.pow(2,s);t.push(o);let c=1/o;a>i-Js?c=dd[a-i+Js-1]:a===0&&(c=0),n.push(c);let l=1/(o-2),h=-l,u=1+l,d=[h,h,u,h,u,u,h,h,u,u,h,u],f=6,p=6,x=3,g=2,m=1,y=new Float32Array(x*p*f),_=new Float32Array(g*p*f),w=new Float32Array(m*p*f);for(let A=0;A<f;A++){let R=A%3*2/3-1,F=A>2?0:-1,M=[R,F,0,R+2/3,F,0,R+2/3,F+1,0,R,F,0,R+2/3,F+1,0,R,F+1,0];y.set(M,x*p*A),_.set(d,g*p*A);let E=[A,A,A,A,A,A];w.set(E,m*p*A)}let P=new Nt;P.setAttribute("position",new Pt(y,x)),P.setAttribute("uv",new Pt(_,g)),P.setAttribute("faceIndex",new Pt(w,m)),e.push(P),s>Js&&s--}return{lodPlanes:e,sizeLods:t,sigmas:n}}function md(i,e,t){let n=new ui(i,e,t);return n.texture.mapping=qo,n.texture.name="PMREM.cubeUv",n.scissorTest=!0,n}function Qa(i,e,t,n,s){i.viewport.set(e,t,n,s),i.scissor.set(e,t,n,s)}function u_(i,e,t){let n=new Float32Array(ts),s=new L(0,1,0);return new di({name:"SphericalGaussianBlur",defines:{n:ts,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/t,CUBEUV_MAX_MIP:`${i}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:n},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:s}},vertexShader:th(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform int samples;
			uniform float weights[ n ];
			uniform bool latitudinal;
			uniform float dTheta;
			uniform float mipInt;
			uniform vec3 poleAxis;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			vec3 getSample( float theta, vec3 axis ) {

				float cosTheta = cos( theta );
				// Rodrigues' axis-angle rotation
				vec3 sampleDirection = vOutputDirection * cosTheta
					+ cross( axis, vOutputDirection ) * sin( theta )
					+ axis * dot( axis, vOutputDirection ) * ( 1.0 - cosTheta );

				return bilinearCubeUV( envMap, sampleDirection, mipInt );

			}

			void main() {

				vec3 axis = latitudinal ? poleAxis : cross( poleAxis, vOutputDirection );

				if ( all( equal( axis, vec3( 0.0 ) ) ) ) {

					axis = vec3( vOutputDirection.z, 0.0, - vOutputDirection.x );

				}

				axis = normalize( axis );

				gl_FragColor = vec4( 0.0, 0.0, 0.0, 1.0 );
				gl_FragColor.rgb += weights[ 0 ] * getSample( 0.0, axis );

				for ( int i = 1; i < n; i++ ) {

					if ( i >= samples ) {

						break;

					}

					float theta = dTheta * float( i );
					gl_FragColor.rgb += weights[ i ] * getSample( -1.0 * theta, axis );
					gl_FragColor.rgb += weights[ i ] * getSample( theta, axis );

				}

			}
		`,blending:Ci,depthTest:!1,depthWrite:!1})}function gd(){return new di({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:th(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;

			#include <common>

			void main() {

				vec3 outputDirection = normalize( vOutputDirection );
				vec2 uv = equirectUv( outputDirection );

				gl_FragColor = vec4( texture2D ( envMap, uv ).rgb, 1.0 );

			}
		`,blending:Ci,depthTest:!1,depthWrite:!1})}function xd(){return new di({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:th(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:Ci,depthTest:!1,depthWrite:!1})}function th(){return`

		precision mediump float;
		precision mediump int;

		attribute float faceIndex;

		varying vec3 vOutputDirection;

		// RH coordinate system; PMREM face-indexing convention
		vec3 getDirection( vec2 uv, float face ) {

			uv = 2.0 * uv - 1.0;

			vec3 direction = vec3( uv, 1.0 );

			if ( face == 0.0 ) {

				direction = direction.zyx; // ( 1, v, u ) pos x

			} else if ( face == 1.0 ) {

				direction = direction.xzy;
				direction.xz *= -1.0; // ( -u, 1, -v ) pos y

			} else if ( face == 2.0 ) {

				direction.x *= -1.0; // ( -u, v, 1 ) pos z

			} else if ( face == 3.0 ) {

				direction = direction.zyx;
				direction.xz *= -1.0; // ( -1, v, -u ) neg x

			} else if ( face == 4.0 ) {

				direction = direction.xzy;
				direction.xy *= -1.0; // ( -u, -1, v ) neg y

			} else if ( face == 5.0 ) {

				direction.z *= -1.0; // ( u, v, -1 ) neg z

			}

			return direction;

		}

		void main() {

			vOutputDirection = getDirection( uv, faceIndex );
			gl_Position = vec4( position, 1.0 );

		}
	`}function d_(i){let e=new WeakMap,t=null;function n(o){if(o&&o.isTexture){let c=o.mapping,l=c===fl||c===pl,h=c===ir||c===sr;if(l||h)if(o.isRenderTargetTexture&&o.needsPMREMUpdate===!0){o.needsPMREMUpdate=!1;let u=e.get(o);return t===null&&(t=new ur(i)),u=l?t.fromEquirectangular(o,u):t.fromCubemap(o,u),e.set(o,u),u.texture}else{if(e.has(o))return e.get(o).texture;{let u=o.image;if(l&&u&&u.height>0||h&&u&&s(u)){t===null&&(t=new ur(i));let d=l?t.fromEquirectangular(o):t.fromCubemap(o);return e.set(o,d),o.addEventListener("dispose",r),d.texture}else return null}}}return o}function s(o){let c=0,l=6;for(let h=0;h<l;h++)o[h]!==void 0&&c++;return c===l}function r(o){let c=o.target;c.removeEventListener("dispose",r);let l=e.get(c);l!==void 0&&(e.delete(c),l.dispose())}function a(){e=new WeakMap,t!==null&&(t.dispose(),t=null)}return{get:n,dispose:a}}function f_(i){let e={};function t(n){if(e[n]!==void 0)return e[n];let s;switch(n){case"WEBGL_depth_texture":s=i.getExtension("WEBGL_depth_texture")||i.getExtension("MOZ_WEBGL_depth_texture")||i.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":s=i.getExtension("EXT_texture_filter_anisotropic")||i.getExtension("MOZ_EXT_texture_filter_anisotropic")||i.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":s=i.getExtension("WEBGL_compressed_texture_s3tc")||i.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||i.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":s=i.getExtension("WEBGL_compressed_texture_pvrtc")||i.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:s=i.getExtension(n)}return e[n]=s,s}return{has:function(n){return t(n)!==null},init:function(n){n.isWebGL2?(t("EXT_color_buffer_float"),t("WEBGL_clip_cull_distance")):(t("WEBGL_depth_texture"),t("OES_texture_float"),t("OES_texture_half_float"),t("OES_texture_half_float_linear"),t("OES_standard_derivatives"),t("OES_element_index_uint"),t("OES_vertex_array_object"),t("ANGLE_instanced_arrays")),t("OES_texture_float_linear"),t("EXT_color_buffer_half_float"),t("WEBGL_multisampled_render_to_texture")},get:function(n){let s=t(n);return s===null&&console.warn("THREE.WebGLRenderer: "+n+" extension not supported."),s}}}function p_(i,e,t,n){let s={},r=new WeakMap;function a(u){let d=u.target;d.index!==null&&e.remove(d.index);for(let p in d.attributes)e.remove(d.attributes[p]);for(let p in d.morphAttributes){let x=d.morphAttributes[p];for(let g=0,m=x.length;g<m;g++)e.remove(x[g])}d.removeEventListener("dispose",a),delete s[d.id];let f=r.get(d);f&&(e.remove(f),r.delete(d)),n.releaseStatesOfGeometry(d),d.isInstancedBufferGeometry===!0&&delete d._maxInstanceCount,t.memory.geometries--}function o(u,d){return s[d.id]===!0||(d.addEventListener("dispose",a),s[d.id]=!0,t.memory.geometries++),d}function c(u){let d=u.attributes;for(let p in d)e.update(d[p],i.ARRAY_BUFFER);let f=u.morphAttributes;for(let p in f){let x=f[p];for(let g=0,m=x.length;g<m;g++)e.update(x[g],i.ARRAY_BUFFER)}}function l(u){let d=[],f=u.index,p=u.attributes.position,x=0;if(f!==null){let y=f.array;x=f.version;for(let _=0,w=y.length;_<w;_+=3){let P=y[_+0],A=y[_+1],R=y[_+2];d.push(P,A,A,R,R,P)}}else if(p!==void 0){let y=p.array;x=p.version;for(let _=0,w=y.length/3-1;_<w;_+=3){let P=_+0,A=_+1,R=_+2;d.push(P,A,A,R,R,P)}}else return;let g=new(ff(d)?So:wo)(d,1);g.version=x;let m=r.get(u);m&&e.remove(m),r.set(u,g)}function h(u){let d=r.get(u);if(d){let f=u.index;f!==null&&d.version<f.version&&l(u)}else l(u);return r.get(u)}return{get:o,update:c,getWireframeAttribute:h}}function m_(i,e,t,n){let s=n.isWebGL2,r;function a(f){r=f}let o,c;function l(f){o=f.type,c=f.bytesPerElement}function h(f,p){i.drawElements(r,p,o,f*c),t.update(p,r,1)}function u(f,p,x){if(x===0)return;let g,m;if(s)g=i,m="drawElementsInstanced";else if(g=e.get("ANGLE_instanced_arrays"),m="drawElementsInstancedANGLE",g===null){console.error("THREE.WebGLIndexedBufferRenderer: using THREE.InstancedBufferGeometry but hardware does not support extension ANGLE_instanced_arrays.");return}g[m](r,p,o,f*c,x),t.update(p,r,x)}function d(f,p,x){if(x===0)return;let g=e.get("WEBGL_multi_draw");if(g===null)for(let m=0;m<x;m++)this.render(f[m]/c,p[m]);else{g.multiDrawElementsWEBGL(r,p,0,o,f,0,x);let m=0;for(let y=0;y<x;y++)m+=p[y];t.update(m,r,1)}}this.setMode=a,this.setIndex=l,this.render=h,this.renderInstances=u,this.renderMultiDraw=d}function g_(i){let e={geometries:0,textures:0},t={frame:0,calls:0,triangles:0,points:0,lines:0};function n(r,a,o){switch(t.calls++,a){case i.TRIANGLES:t.triangles+=o*(r/3);break;case i.LINES:t.lines+=o*(r/2);break;case i.LINE_STRIP:t.lines+=o*(r-1);break;case i.LINE_LOOP:t.lines+=o*r;break;case i.POINTS:t.points+=o*r;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",a);break}}function s(){t.calls=0,t.triangles=0,t.points=0,t.lines=0}return{memory:e,render:t,programs:null,autoReset:!0,reset:s,update:n}}function x_(i,e){return i[0]-e[0]}function __(i,e){return Math.abs(e[1])-Math.abs(i[1])}function y_(i,e,t){let n={},s=new Float32Array(8),r=new WeakMap,a=new _t,o=[];for(let l=0;l<8;l++)o[l]=[l,0];function c(l,h,u){let d=l.morphTargetInfluences;if(e.isWebGL2===!0){let f=h.morphAttributes.position||h.morphAttributes.normal||h.morphAttributes.color,p=f!==void 0?f.length:0,x=r.get(h);if(x===void 0||x.count!==p){let z=function(){j.dispose(),r.delete(h),h.removeEventListener("dispose",z)};x!==void 0&&x.texture.dispose();let y=h.morphAttributes.position!==void 0,_=h.morphAttributes.normal!==void 0,w=h.morphAttributes.color!==void 0,P=h.morphAttributes.position||[],A=h.morphAttributes.normal||[],R=h.morphAttributes.color||[],F=0;y===!0&&(F=1),_===!0&&(F=2),w===!0&&(F=3);let M=h.attributes.position.count*F,E=1;M>e.maxTextureSize&&(E=Math.ceil(M/e.maxTextureSize),M=e.maxTextureSize);let O=new Float32Array(M*E*4*p),j=new vo(O,M,E,p);j.type=ci,j.needsUpdate=!0;let ae=F*4;for(let B=0;B<p;B++){let J=P[B],q=A[B],K=R[B],$=M*E*4*B;for(let se=0;se<J.count;se++){let le=se*ae;y===!0&&(a.fromBufferAttribute(J,se),O[$+le+0]=a.x,O[$+le+1]=a.y,O[$+le+2]=a.z,O[$+le+3]=0),_===!0&&(a.fromBufferAttribute(q,se),O[$+le+4]=a.x,O[$+le+5]=a.y,O[$+le+6]=a.z,O[$+le+7]=0),w===!0&&(a.fromBufferAttribute(K,se),O[$+le+8]=a.x,O[$+le+9]=a.y,O[$+le+10]=a.z,O[$+le+11]=K.itemSize===4?a.w:1)}}x={count:p,texture:j,size:new ze(M,E)},r.set(h,x),h.addEventListener("dispose",z)}let g=0;for(let y=0;y<d.length;y++)g+=d[y];let m=h.morphTargetsRelative?1:1-g;u.getUniforms().setValue(i,"morphTargetBaseInfluence",m),u.getUniforms().setValue(i,"morphTargetInfluences",d),u.getUniforms().setValue(i,"morphTargetsTexture",x.texture,t),u.getUniforms().setValue(i,"morphTargetsTextureSize",x.size)}else{let f=d===void 0?0:d.length,p=n[h.id];if(p===void 0||p.length!==f){p=[];for(let _=0;_<f;_++)p[_]=[_,0];n[h.id]=p}for(let _=0;_<f;_++){let w=p[_];w[0]=_,w[1]=d[_]}p.sort(__);for(let _=0;_<8;_++)_<f&&p[_][1]?(o[_][0]=p[_][0],o[_][1]=p[_][1]):(o[_][0]=Number.MAX_SAFE_INTEGER,o[_][1]=0);o.sort(x_);let x=h.morphAttributes.position,g=h.morphAttributes.normal,m=0;for(let _=0;_<8;_++){let w=o[_],P=w[0],A=w[1];P!==Number.MAX_SAFE_INTEGER&&A?(x&&h.getAttribute("morphTarget"+_)!==x[P]&&h.setAttribute("morphTarget"+_,x[P]),g&&h.getAttribute("morphNormal"+_)!==g[P]&&h.setAttribute("morphNormal"+_,g[P]),s[_]=A,m+=A):(x&&h.hasAttribute("morphTarget"+_)===!0&&h.deleteAttribute("morphTarget"+_),g&&h.hasAttribute("morphNormal"+_)===!0&&h.deleteAttribute("morphNormal"+_),s[_]=0)}let y=h.morphTargetsRelative?1:1-m;u.getUniforms().setValue(i,"morphTargetBaseInfluence",y),u.getUniforms().setValue(i,"morphTargetInfluences",s)}}return{update:c}}function v_(i,e,t,n){let s=new WeakMap;function r(c){let l=n.render.frame,h=c.geometry,u=e.get(c,h);if(s.get(u)!==l&&(e.update(u),s.set(u,l)),c.isInstancedMesh&&(c.hasEventListener("dispose",o)===!1&&c.addEventListener("dispose",o),s.get(c)!==l&&(t.update(c.instanceMatrix,i.ARRAY_BUFFER),c.instanceColor!==null&&t.update(c.instanceColor,i.ARRAY_BUFFER),s.set(c,l))),c.isSkinnedMesh){let d=c.skeleton;s.get(d)!==l&&(d.update(),s.set(d,l))}return u}function a(){s=new WeakMap}function o(c){let l=c.target;l.removeEventListener("dispose",o),t.remove(l.instanceMatrix),l.instanceColor!==null&&t.remove(l.instanceColor)}return{update:r,dispose:a}}var Ao=class extends en{constructor(e,t,n,s,r,a,o,c,l,h){if(h=h!==void 0?h:ss,h!==ss&&h!==rr)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");n===void 0&&h===ss&&(n=Ai),n===void 0&&h===rr&&(n=is),super(null,s,r,a,o,c,h,n,l),this.isDepthTexture=!0,this.image={width:e,height:t},this.magFilter=o!==void 0?o:Wt,this.minFilter=c!==void 0?c:Wt,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.compareFunction=e.compareFunction,this}toJSON(e){let t=super.toJSON(e);return this.compareFunction!==null&&(t.compareFunction=this.compareFunction),t}},xf=new en,_f=new Ao(1,1);_f.compareFunction=df;var yf=new vo,vf=new yl,Mf=new To,_d=[],yd=[],vd=new Float32Array(16),Md=new Float32Array(9),bd=new Float32Array(4);function vr(i,e,t){let n=i[0];if(n<=0||n>0)return i;let s=e*t,r=_d[s];if(r===void 0&&(r=new Float32Array(s),_d[s]=r),e!==0){n.toArray(r,0);for(let a=1,o=0;a!==e;++a)o+=t,i[a].toArray(r,o)}return r}function Yt(i,e){if(i.length!==e.length)return!1;for(let t=0,n=i.length;t<n;t++)if(i[t]!==e[t])return!1;return!0}function Zt(i,e){for(let t=0,n=e.length;t<n;t++)i[t]=e[t]}function Ko(i,e){let t=yd[e];t===void 0&&(t=new Int32Array(e),yd[e]=t);for(let n=0;n!==e;++n)t[n]=i.allocateTextureUnit();return t}function M_(i,e){let t=this.cache;t[0]!==e&&(i.uniform1f(this.addr,e),t[0]=e)}function b_(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(i.uniform2f(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Yt(t,e))return;i.uniform2fv(this.addr,e),Zt(t,e)}}function w_(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(i.uniform3f(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else if(e.r!==void 0)(t[0]!==e.r||t[1]!==e.g||t[2]!==e.b)&&(i.uniform3f(this.addr,e.r,e.g,e.b),t[0]=e.r,t[1]=e.g,t[2]=e.b);else{if(Yt(t,e))return;i.uniform3fv(this.addr,e),Zt(t,e)}}function S_(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(i.uniform4f(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Yt(t,e))return;i.uniform4fv(this.addr,e),Zt(t,e)}}function E_(i,e){let t=this.cache,n=e.elements;if(n===void 0){if(Yt(t,e))return;i.uniformMatrix2fv(this.addr,!1,e),Zt(t,e)}else{if(Yt(t,n))return;bd.set(n),i.uniformMatrix2fv(this.addr,!1,bd),Zt(t,n)}}function T_(i,e){let t=this.cache,n=e.elements;if(n===void 0){if(Yt(t,e))return;i.uniformMatrix3fv(this.addr,!1,e),Zt(t,e)}else{if(Yt(t,n))return;Md.set(n),i.uniformMatrix3fv(this.addr,!1,Md),Zt(t,n)}}function A_(i,e){let t=this.cache,n=e.elements;if(n===void 0){if(Yt(t,e))return;i.uniformMatrix4fv(this.addr,!1,e),Zt(t,e)}else{if(Yt(t,n))return;vd.set(n),i.uniformMatrix4fv(this.addr,!1,vd),Zt(t,n)}}function R_(i,e){let t=this.cache;t[0]!==e&&(i.uniform1i(this.addr,e),t[0]=e)}function C_(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(i.uniform2i(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Yt(t,e))return;i.uniform2iv(this.addr,e),Zt(t,e)}}function P_(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(i.uniform3i(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(Yt(t,e))return;i.uniform3iv(this.addr,e),Zt(t,e)}}function L_(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(i.uniform4i(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Yt(t,e))return;i.uniform4iv(this.addr,e),Zt(t,e)}}function I_(i,e){let t=this.cache;t[0]!==e&&(i.uniform1ui(this.addr,e),t[0]=e)}function z_(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(i.uniform2ui(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Yt(t,e))return;i.uniform2uiv(this.addr,e),Zt(t,e)}}function D_(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(i.uniform3ui(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(Yt(t,e))return;i.uniform3uiv(this.addr,e),Zt(t,e)}}function N_(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(i.uniform4ui(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Yt(t,e))return;i.uniform4uiv(this.addr,e),Zt(t,e)}}function U_(i,e,t){let n=this.cache,s=t.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s);let r=this.type===i.SAMPLER_2D_SHADOW?_f:xf;t.setTexture2D(e||r,s)}function O_(i,e,t){let n=this.cache,s=t.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),t.setTexture3D(e||vf,s)}function F_(i,e,t){let n=this.cache,s=t.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),t.setTextureCube(e||Mf,s)}function B_(i,e,t){let n=this.cache,s=t.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),t.setTexture2DArray(e||yf,s)}function k_(i){switch(i){case 5126:return M_;case 35664:return b_;case 35665:return w_;case 35666:return S_;case 35674:return E_;case 35675:return T_;case 35676:return A_;case 5124:case 35670:return R_;case 35667:case 35671:return C_;case 35668:case 35672:return P_;case 35669:case 35673:return L_;case 5125:return I_;case 36294:return z_;case 36295:return D_;case 36296:return N_;case 35678:case 36198:case 36298:case 36306:case 35682:return U_;case 35679:case 36299:case 36307:return O_;case 35680:case 36300:case 36308:case 36293:return F_;case 36289:case 36303:case 36311:case 36292:return B_}}function H_(i,e){i.uniform1fv(this.addr,e)}function G_(i,e){let t=vr(e,this.size,2);i.uniform2fv(this.addr,t)}function V_(i,e){let t=vr(e,this.size,3);i.uniform3fv(this.addr,t)}function W_(i,e){let t=vr(e,this.size,4);i.uniform4fv(this.addr,t)}function X_(i,e){let t=vr(e,this.size,4);i.uniformMatrix2fv(this.addr,!1,t)}function q_(i,e){let t=vr(e,this.size,9);i.uniformMatrix3fv(this.addr,!1,t)}function Y_(i,e){let t=vr(e,this.size,16);i.uniformMatrix4fv(this.addr,!1,t)}function Z_(i,e){i.uniform1iv(this.addr,e)}function j_(i,e){i.uniform2iv(this.addr,e)}function K_(i,e){i.uniform3iv(this.addr,e)}function $_(i,e){i.uniform4iv(this.addr,e)}function J_(i,e){i.uniform1uiv(this.addr,e)}function Q_(i,e){i.uniform2uiv(this.addr,e)}function ey(i,e){i.uniform3uiv(this.addr,e)}function ty(i,e){i.uniform4uiv(this.addr,e)}function ny(i,e,t){let n=this.cache,s=e.length,r=Ko(t,s);Yt(n,r)||(i.uniform1iv(this.addr,r),Zt(n,r));for(let a=0;a!==s;++a)t.setTexture2D(e[a]||xf,r[a])}function iy(i,e,t){let n=this.cache,s=e.length,r=Ko(t,s);Yt(n,r)||(i.uniform1iv(this.addr,r),Zt(n,r));for(let a=0;a!==s;++a)t.setTexture3D(e[a]||vf,r[a])}function sy(i,e,t){let n=this.cache,s=e.length,r=Ko(t,s);Yt(n,r)||(i.uniform1iv(this.addr,r),Zt(n,r));for(let a=0;a!==s;++a)t.setTextureCube(e[a]||Mf,r[a])}function ry(i,e,t){let n=this.cache,s=e.length,r=Ko(t,s);Yt(n,r)||(i.uniform1iv(this.addr,r),Zt(n,r));for(let a=0;a!==s;++a)t.setTexture2DArray(e[a]||yf,r[a])}function ay(i){switch(i){case 5126:return H_;case 35664:return G_;case 35665:return V_;case 35666:return W_;case 35674:return X_;case 35675:return q_;case 35676:return Y_;case 5124:case 35670:return Z_;case 35667:case 35671:return j_;case 35668:case 35672:return K_;case 35669:case 35673:return $_;case 5125:return J_;case 36294:return Q_;case 36295:return ey;case 36296:return ty;case 35678:case 36198:case 36298:case 36306:case 35682:return ny;case 35679:case 36299:case 36307:return iy;case 35680:case 36300:case 36308:case 36293:return sy;case 36289:case 36303:case 36311:case 36292:return ry}}var bl=class{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.type=t.type,this.setValue=k_(t.type)}},wl=class{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.type=t.type,this.size=t.size,this.setValue=ay(t.type)}},Sl=class{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,t,n){let s=this.seq;for(let r=0,a=s.length;r!==a;++r){let o=s[r];o.setValue(e,t[o.id],n)}}},sl=/(\w+)(\])?(\[|\.)?/g;function wd(i,e){i.seq.push(e),i.map[e.id]=e}function oy(i,e,t){let n=i.name,s=n.length;for(sl.lastIndex=0;;){let r=sl.exec(n),a=sl.lastIndex,o=r[1],c=r[2]==="]",l=r[3];if(c&&(o=o|0),l===void 0||l==="["&&a+2===s){wd(t,l===void 0?new bl(o,i,e):new wl(o,i,e));break}else{let u=t.map[o];u===void 0&&(u=new Sl(o),wd(t,u)),t=u}}}var nr=class{constructor(e,t){this.seq=[],this.map={};let n=e.getProgramParameter(t,e.ACTIVE_UNIFORMS);for(let s=0;s<n;++s){let r=e.getActiveUniform(t,s),a=e.getUniformLocation(t,r.name);oy(r,a,this)}}setValue(e,t,n,s){let r=this.map[t];r!==void 0&&r.setValue(e,n,s)}setOptional(e,t,n){let s=t[n];s!==void 0&&this.setValue(e,n,s)}static upload(e,t,n,s){for(let r=0,a=t.length;r!==a;++r){let o=t[r],c=n[o.id];c.needsUpdate!==!1&&o.setValue(e,c.value,s)}}static seqWithValue(e,t){let n=[];for(let s=0,r=e.length;s!==r;++s){let a=e[s];a.id in t&&n.push(a)}return n}};function Sd(i,e,t){let n=i.createShader(e);return i.shaderSource(n,t),i.compileShader(n),n}var cy=37297,ly=0;function hy(i,e){let t=i.split(`
`),n=[],s=Math.max(e-6,0),r=Math.min(e+6,t.length);for(let a=s;a<r;a++){let o=a+1;n.push(`${o===e?">":" "} ${o}: ${t[a]}`)}return n.join(`
`)}function uy(i){let e=ht.getPrimaries(ht.workingColorSpace),t=ht.getPrimaries(i),n;switch(e===t?n="":e===mo&&t===po?n="LinearDisplayP3ToLinearSRGB":e===po&&t===mo&&(n="LinearSRGBToLinearDisplayP3"),i){case qt:case jo:return[n,"LinearTransferOETF"];case Tt:case Ql:return[n,"sRGBTransferOETF"];default:return console.warn("THREE.WebGLProgram: Unsupported color space:",i),[n,"LinearTransferOETF"]}}function Ed(i,e,t){let n=i.getShaderParameter(e,i.COMPILE_STATUS),s=i.getShaderInfoLog(e).trim();if(n&&s==="")return"";let r=/ERROR: 0:(\d+)/.exec(s);if(r){let a=parseInt(r[1]);return t.toUpperCase()+`

`+s+`

`+hy(i.getShaderSource(e),a)}else return s}function dy(i,e){let t=uy(e);return`vec4 ${i}( vec4 value ) { return ${t[0]}( ${t[1]}( value ) ); }`}function fy(i,e){let t;switch(e){case gm:t="Linear";break;case xm:t="Reinhard";break;case _m:t="OptimizedCineon";break;case ym:t="ACESFilmic";break;case Mm:t="AgX";break;case vm:t="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",e),t="Linear"}return"vec3 "+i+"( vec3 color ) { return "+t+"ToneMapping( color ); }"}function py(i){return[i.extensionDerivatives||i.envMapCubeUVHeight||i.bumpMap||i.normalMapTangentSpace||i.clearcoatNormalMap||i.flatShading||i.shaderID==="physical"?"#extension GL_OES_standard_derivatives : enable":"",(i.extensionFragDepth||i.logarithmicDepthBuffer)&&i.rendererExtensionFragDepth?"#extension GL_EXT_frag_depth : enable":"",i.extensionDrawBuffers&&i.rendererExtensionDrawBuffers?"#extension GL_EXT_draw_buffers : require":"",(i.extensionShaderTextureLOD||i.envMap||i.transmission)&&i.rendererExtensionShaderTextureLod?"#extension GL_EXT_shader_texture_lod : enable":""].filter(Qs).join(`
`)}function my(i){return[i.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":""].filter(Qs).join(`
`)}function gy(i){let e=[];for(let t in i){let n=i[t];n!==!1&&e.push("#define "+t+" "+n)}return e.join(`
`)}function xy(i,e){let t={},n=i.getProgramParameter(e,i.ACTIVE_ATTRIBUTES);for(let s=0;s<n;s++){let r=i.getActiveAttrib(e,s),a=r.name,o=1;r.type===i.FLOAT_MAT2&&(o=2),r.type===i.FLOAT_MAT3&&(o=3),r.type===i.FLOAT_MAT4&&(o=4),t[a]={type:r.type,location:i.getAttribLocation(e,a),locationSize:o}}return t}function Qs(i){return i!==""}function Td(i,e){let t=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return i.replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,t).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function Ad(i,e){return i.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}var _y=/^[ \t]*#include +<([\w\d./]+)>/gm;function El(i){return i.replace(_y,vy)}var yy=new Map([["encodings_fragment","colorspace_fragment"],["encodings_pars_fragment","colorspace_pars_fragment"],["output_fragment","opaque_fragment"]]);function vy(i,e){let t=Qe[e];if(t===void 0){let n=yy.get(e);if(n!==void 0)t=Qe[n],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',e,n);else throw new Error("Can not resolve #include <"+e+">")}return El(t)}var My=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function Rd(i){return i.replace(My,by)}function by(i,e,t,n){let s="";for(let r=parseInt(e);r<parseInt(t);r++)s+=n.replace(/\[\s*i\s*\]/g,"[ "+r+" ]").replace(/UNROLLED_LOOP_INDEX/g,r);return s}function Cd(i){let e="precision "+i.precision+` float;
precision `+i.precision+" int;";return i.precision==="highp"?e+=`
#define HIGH_PRECISION`:i.precision==="mediump"?e+=`
#define MEDIUM_PRECISION`:i.precision==="lowp"&&(e+=`
#define LOW_PRECISION`),e}function wy(i){let e="SHADOWMAP_TYPE_BASIC";return i.shadowMapType===Wo?e="SHADOWMAP_TYPE_PCF":i.shadowMapType===Wp?e="SHADOWMAP_TYPE_PCF_SOFT":i.shadowMapType===ai&&(e="SHADOWMAP_TYPE_VSM"),e}function Sy(i){let e="ENVMAP_TYPE_CUBE";if(i.envMap)switch(i.envMapMode){case ir:case sr:e="ENVMAP_TYPE_CUBE";break;case qo:e="ENVMAP_TYPE_CUBE_UV";break}return e}function Ey(i){let e="ENVMAP_MODE_REFLECTION";if(i.envMap)switch(i.envMapMode){case sr:e="ENVMAP_MODE_REFRACTION";break}return e}function Ty(i){let e="ENVMAP_BLENDING_NONE";if(i.envMap)switch(i.combine){case Xo:e="ENVMAP_BLENDING_MULTIPLY";break;case pm:e="ENVMAP_BLENDING_MIX";break;case mm:e="ENVMAP_BLENDING_ADD";break}return e}function Ay(i){let e=i.envMapCubeUVHeight;if(e===null)return null;let t=Math.log2(e)-2,n=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,t),7*16)),texelHeight:n,maxMip:t}}function Ry(i,e,t,n){let s=i.getContext(),r=t.defines,a=t.vertexShader,o=t.fragmentShader,c=wy(t),l=Sy(t),h=Ey(t),u=Ty(t),d=Ay(t),f=t.isWebGL2?"":py(t),p=my(t),x=gy(r),g=s.createProgram(),m,y,_=t.glslVersion?"#version "+t.glslVersion+`
`:"";t.isRawShaderMaterial?(m=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,x].filter(Qs).join(`
`),m.length>0&&(m+=`
`),y=[f,"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,x].filter(Qs).join(`
`),y.length>0&&(y+=`
`)):(m=[Cd(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,x,t.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",t.batching?"#define USE_BATCHING":"",t.instancing?"#define USE_INSTANCING":"",t.instancingColor?"#define USE_INSTANCING_COLOR":"",t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+h:"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.displacementMap?"#define USE_DISPLACEMENTMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.mapUv?"#define MAP_UV "+t.mapUv:"",t.alphaMapUv?"#define ALPHAMAP_UV "+t.alphaMapUv:"",t.lightMapUv?"#define LIGHTMAP_UV "+t.lightMapUv:"",t.aoMapUv?"#define AOMAP_UV "+t.aoMapUv:"",t.emissiveMapUv?"#define EMISSIVEMAP_UV "+t.emissiveMapUv:"",t.bumpMapUv?"#define BUMPMAP_UV "+t.bumpMapUv:"",t.normalMapUv?"#define NORMALMAP_UV "+t.normalMapUv:"",t.displacementMapUv?"#define DISPLACEMENTMAP_UV "+t.displacementMapUv:"",t.metalnessMapUv?"#define METALNESSMAP_UV "+t.metalnessMapUv:"",t.roughnessMapUv?"#define ROUGHNESSMAP_UV "+t.roughnessMapUv:"",t.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+t.anisotropyMapUv:"",t.clearcoatMapUv?"#define CLEARCOATMAP_UV "+t.clearcoatMapUv:"",t.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+t.clearcoatNormalMapUv:"",t.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+t.clearcoatRoughnessMapUv:"",t.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+t.iridescenceMapUv:"",t.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+t.iridescenceThicknessMapUv:"",t.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+t.sheenColorMapUv:"",t.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+t.sheenRoughnessMapUv:"",t.specularMapUv?"#define SPECULARMAP_UV "+t.specularMapUv:"",t.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+t.specularColorMapUv:"",t.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+t.specularIntensityMapUv:"",t.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+t.transmissionMapUv:"",t.thicknessMapUv?"#define THICKNESSMAP_UV "+t.thicknessMapUv:"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.flatShading?"#define FLAT_SHADED":"",t.skinning?"#define USE_SKINNING":"",t.morphTargets?"#define USE_MORPHTARGETS":"",t.morphNormals&&t.flatShading===!1?"#define USE_MORPHNORMALS":"",t.morphColors&&t.isWebGL2?"#define USE_MORPHCOLORS":"",t.morphTargetsCount>0&&t.isWebGL2?"#define MORPHTARGETS_TEXTURE":"",t.morphTargetsCount>0&&t.isWebGL2?"#define MORPHTARGETS_TEXTURE_STRIDE "+t.morphTextureStride:"",t.morphTargetsCount>0&&t.isWebGL2?"#define MORPHTARGETS_COUNT "+t.morphTargetsCount:"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+c:"",t.sizeAttenuation?"#define USE_SIZEATTENUATION":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.useLegacyLights?"#define LEGACY_LIGHTS":"",t.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",t.logarithmicDepthBuffer&&t.rendererExtensionFragDepth?"#define USE_LOGDEPTHBUF_EXT":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#if ( defined( USE_MORPHTARGETS ) && ! defined( MORPHTARGETS_TEXTURE ) )","	attribute vec3 morphTarget0;","	attribute vec3 morphTarget1;","	attribute vec3 morphTarget2;","	attribute vec3 morphTarget3;","	#ifdef USE_MORPHNORMALS","		attribute vec3 morphNormal0;","		attribute vec3 morphNormal1;","		attribute vec3 morphNormal2;","		attribute vec3 morphNormal3;","	#else","		attribute vec3 morphTarget4;","		attribute vec3 morphTarget5;","		attribute vec3 morphTarget6;","		attribute vec3 morphTarget7;","	#endif","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(Qs).join(`
`),y=[f,Cd(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,x,t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.matcap?"#define USE_MATCAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+l:"",t.envMap?"#define "+h:"",t.envMap?"#define "+u:"",d?"#define CUBEUV_TEXEL_WIDTH "+d.texelWidth:"",d?"#define CUBEUV_TEXEL_HEIGHT "+d.texelHeight:"",d?"#define CUBEUV_MAX_MIP "+d.maxMip+".0":"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoat?"#define USE_CLEARCOAT":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.iridescence?"#define USE_IRIDESCENCE":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaTest?"#define USE_ALPHATEST":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.sheen?"#define USE_SHEEN":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors||t.instancingColor?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.gradientMap?"#define USE_GRADIENTMAP":"",t.flatShading?"#define FLAT_SHADED":"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+c:"",t.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.useLegacyLights?"#define LEGACY_LIGHTS":"",t.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",t.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",t.logarithmicDepthBuffer&&t.rendererExtensionFragDepth?"#define USE_LOGDEPTHBUF_EXT":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",t.toneMapping!==Pi?"#define TONE_MAPPING":"",t.toneMapping!==Pi?Qe.tonemapping_pars_fragment:"",t.toneMapping!==Pi?fy("toneMapping",t.toneMapping):"",t.dithering?"#define DITHERING":"",t.opaque?"#define OPAQUE":"",Qe.colorspace_pars_fragment,dy("linearToOutputTexel",t.outputColorSpace),t.useDepthPacking?"#define DEPTH_PACKING "+t.depthPacking:"",`
`].filter(Qs).join(`
`)),a=El(a),a=Td(a,t),a=Ad(a,t),o=El(o),o=Td(o,t),o=Ad(o,t),a=Rd(a),o=Rd(o),t.isWebGL2&&t.isRawShaderMaterial!==!0&&(_=`#version 300 es
`,m=[p,"precision mediump sampler2DArray;","#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+m,y=["precision mediump sampler2DArray;","#define varying in",t.glslVersion===Zu?"":"layout(location = 0) out highp vec4 pc_fragColor;",t.glslVersion===Zu?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+y);let w=_+m+a,P=_+y+o,A=Sd(s,s.VERTEX_SHADER,w),R=Sd(s,s.FRAGMENT_SHADER,P);s.attachShader(g,A),s.attachShader(g,R),t.index0AttributeName!==void 0?s.bindAttribLocation(g,0,t.index0AttributeName):t.morphTargets===!0&&s.bindAttribLocation(g,0,"position"),s.linkProgram(g);function F(j){if(i.debug.checkShaderErrors){let ae=s.getProgramInfoLog(g).trim(),z=s.getShaderInfoLog(A).trim(),B=s.getShaderInfoLog(R).trim(),J=!0,q=!0;if(s.getProgramParameter(g,s.LINK_STATUS)===!1)if(J=!1,typeof i.debug.onShaderError=="function")i.debug.onShaderError(s,g,A,R);else{let K=Ed(s,A,"vertex"),$=Ed(s,R,"fragment");console.error("THREE.WebGLProgram: Shader Error "+s.getError()+" - VALIDATE_STATUS "+s.getProgramParameter(g,s.VALIDATE_STATUS)+`

Program Info Log: `+ae+`
`+K+`
`+$)}else ae!==""?console.warn("THREE.WebGLProgram: Program Info Log:",ae):(z===""||B==="")&&(q=!1);q&&(j.diagnostics={runnable:J,programLog:ae,vertexShader:{log:z,prefix:m},fragmentShader:{log:B,prefix:y}})}s.deleteShader(A),s.deleteShader(R),M=new nr(s,g),E=xy(s,g)}let M;this.getUniforms=function(){return M===void 0&&F(this),M};let E;this.getAttributes=function(){return E===void 0&&F(this),E};let O=t.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return O===!1&&(O=s.getProgramParameter(g,cy)),O},this.destroy=function(){n.releaseStatesOfProgram(this),s.deleteProgram(g),this.program=void 0},this.type=t.shaderType,this.name=t.shaderName,this.id=ly++,this.cacheKey=e,this.usedTimes=1,this.program=g,this.vertexShader=A,this.fragmentShader=R,this}var Cy=0,Tl=class{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e){let t=e.vertexShader,n=e.fragmentShader,s=this._getShaderStage(t),r=this._getShaderStage(n),a=this._getShaderCacheForMaterial(e);return a.has(s)===!1&&(a.add(s),s.usedTimes++),a.has(r)===!1&&(a.add(r),r.usedTimes++),this}remove(e){let t=this.materialCache.get(e);for(let n of t)n.usedTimes--,n.usedTimes===0&&this.shaderCache.delete(n.code);return this.materialCache.delete(e),this}getVertexShaderID(e){return this._getShaderStage(e.vertexShader).id}getFragmentShaderID(e){return this._getShaderStage(e.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){let t=this.materialCache,n=t.get(e);return n===void 0&&(n=new Set,t.set(e,n)),n}_getShaderStage(e){let t=this.shaderCache,n=t.get(e);return n===void 0&&(n=new Al(e),t.set(e,n)),n}},Al=class{constructor(e){this.id=Cy++,this.code=e,this.usedTimes=0}};function Py(i,e,t,n,s,r,a){let o=new bo,c=new Tl,l=[],h=s.isWebGL2,u=s.logarithmicDepthBuffer,d=s.vertexTextures,f=s.precision,p={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function x(M){return M===0?"uv":`uv${M}`}function g(M,E,O,j,ae){let z=j.fog,B=ae.geometry,J=M.isMeshStandardMaterial?j.environment:null,q=(M.isMeshStandardMaterial?t:e).get(M.envMap||J),K=q&&q.mapping===qo?q.image.height:null,$=p[M.type];M.precision!==null&&(f=s.getMaxPrecision(M.precision),f!==M.precision&&console.warn("THREE.WebGLProgram.getParameters:",M.precision,"not supported, using",f,"instead."));let se=B.morphAttributes.position||B.morphAttributes.normal||B.morphAttributes.color,le=se!==void 0?se.length:0,_e=0;B.morphAttributes.position!==void 0&&(_e=1),B.morphAttributes.normal!==void 0&&(_e=2),B.morphAttributes.color!==void 0&&(_e=3);let Z,te,xe,Re;if($){let dn=Wn[$];Z=dn.vertexShader,te=dn.fragmentShader}else Z=M.vertexShader,te=M.fragmentShader,c.update(M),xe=c.getVertexShaderID(M),Re=c.getFragmentShaderID(M);let we=i.getRenderTarget(),Be=ae.isInstancedMesh===!0,He=ae.isBatchedMesh===!0,Pe=!!M.map,qe=!!M.matcap,k=!!q,jt=!!M.aoMap,Le=!!M.lightMap,ke=!!M.bumpMap,Se=!!M.normalMap,bt=!!M.displacementMap,Ge=!!M.emissiveMap,T=!!M.metalnessMap,b=!!M.roughnessMap,H=M.anisotropy>0,ce=M.clearcoat>0,oe=M.iridescence>0,he=M.sheen>0,Te=M.transmission>0,ge=H&&!!M.anisotropyMap,be=ce&&!!M.clearcoatMap,Ie=ce&&!!M.clearcoatNormalMap,Ve=ce&&!!M.clearcoatRoughnessMap,re=oe&&!!M.iridescenceMap,lt=oe&&!!M.iridescenceThicknessMap,Ye=he&&!!M.sheenColorMap,De=he&&!!M.sheenRoughnessMap,D=!!M.specularMap,N=!!M.specularColorMap,W=!!M.specularIntensityMap,ee=Te&&!!M.transmissionMap,ye=Te&&!!M.thicknessMap,ne=!!M.gradientMap,X=!!M.alphaMap,C=M.alphaTest>0,Q=!!M.alphaHash,ie=!!M.extensions,me=!!B.attributes.uv1,ve=!!B.attributes.uv2,$e=!!B.attributes.uv3,rt=Pi;return M.toneMapped&&(we===null||we.isXRRenderTarget===!0)&&(rt=i.toneMapping),{isWebGL2:h,shaderID:$,shaderType:M.type,shaderName:M.name,vertexShader:Z,fragmentShader:te,defines:M.defines,customVertexShaderID:xe,customFragmentShaderID:Re,isRawShaderMaterial:M.isRawShaderMaterial===!0,glslVersion:M.glslVersion,precision:f,batching:He,instancing:Be,instancingColor:Be&&ae.instanceColor!==null,supportsVertexTextures:d,outputColorSpace:we===null?i.outputColorSpace:we.isXRRenderTarget===!0?we.texture.colorSpace:qt,map:Pe,matcap:qe,envMap:k,envMapMode:k&&q.mapping,envMapCubeUVHeight:K,aoMap:jt,lightMap:Le,bumpMap:ke,normalMap:Se,displacementMap:d&&bt,emissiveMap:Ge,normalMapObjectSpace:Se&&M.normalMapType===Nm,normalMapTangentSpace:Se&&M.normalMapType===Zo,metalnessMap:T,roughnessMap:b,anisotropy:H,anisotropyMap:ge,clearcoat:ce,clearcoatMap:be,clearcoatNormalMap:Ie,clearcoatRoughnessMap:Ve,iridescence:oe,iridescenceMap:re,iridescenceThicknessMap:lt,sheen:he,sheenColorMap:Ye,sheenRoughnessMap:De,specularMap:D,specularColorMap:N,specularIntensityMap:W,transmission:Te,transmissionMap:ee,thicknessMap:ye,gradientMap:ne,opaque:M.transparent===!1&&M.blending===er,alphaMap:X,alphaTest:C,alphaHash:Q,combine:M.combine,mapUv:Pe&&x(M.map.channel),aoMapUv:jt&&x(M.aoMap.channel),lightMapUv:Le&&x(M.lightMap.channel),bumpMapUv:ke&&x(M.bumpMap.channel),normalMapUv:Se&&x(M.normalMap.channel),displacementMapUv:bt&&x(M.displacementMap.channel),emissiveMapUv:Ge&&x(M.emissiveMap.channel),metalnessMapUv:T&&x(M.metalnessMap.channel),roughnessMapUv:b&&x(M.roughnessMap.channel),anisotropyMapUv:ge&&x(M.anisotropyMap.channel),clearcoatMapUv:be&&x(M.clearcoatMap.channel),clearcoatNormalMapUv:Ie&&x(M.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:Ve&&x(M.clearcoatRoughnessMap.channel),iridescenceMapUv:re&&x(M.iridescenceMap.channel),iridescenceThicknessMapUv:lt&&x(M.iridescenceThicknessMap.channel),sheenColorMapUv:Ye&&x(M.sheenColorMap.channel),sheenRoughnessMapUv:De&&x(M.sheenRoughnessMap.channel),specularMapUv:D&&x(M.specularMap.channel),specularColorMapUv:N&&x(M.specularColorMap.channel),specularIntensityMapUv:W&&x(M.specularIntensityMap.channel),transmissionMapUv:ee&&x(M.transmissionMap.channel),thicknessMapUv:ye&&x(M.thicknessMap.channel),alphaMapUv:X&&x(M.alphaMap.channel),vertexTangents:!!B.attributes.tangent&&(Se||H),vertexColors:M.vertexColors,vertexAlphas:M.vertexColors===!0&&!!B.attributes.color&&B.attributes.color.itemSize===4,vertexUv1s:me,vertexUv2s:ve,vertexUv3s:$e,pointsUvs:ae.isPoints===!0&&!!B.attributes.uv&&(Pe||X),fog:!!z,useFog:M.fog===!0,fogExp2:z&&z.isFogExp2,flatShading:M.flatShading===!0,sizeAttenuation:M.sizeAttenuation===!0,logarithmicDepthBuffer:u,skinning:ae.isSkinnedMesh===!0,morphTargets:B.morphAttributes.position!==void 0,morphNormals:B.morphAttributes.normal!==void 0,morphColors:B.morphAttributes.color!==void 0,morphTargetsCount:le,morphTextureStride:_e,numDirLights:E.directional.length,numPointLights:E.point.length,numSpotLights:E.spot.length,numSpotLightMaps:E.spotLightMap.length,numRectAreaLights:E.rectArea.length,numHemiLights:E.hemi.length,numDirLightShadows:E.directionalShadowMap.length,numPointLightShadows:E.pointShadowMap.length,numSpotLightShadows:E.spotShadowMap.length,numSpotLightShadowsWithMaps:E.numSpotLightShadowsWithMaps,numLightProbes:E.numLightProbes,numClippingPlanes:a.numPlanes,numClipIntersection:a.numIntersection,dithering:M.dithering,shadowMapEnabled:i.shadowMap.enabled&&O.length>0,shadowMapType:i.shadowMap.type,toneMapping:rt,useLegacyLights:i._useLegacyLights,decodeVideoTexture:Pe&&M.map.isVideoTexture===!0&&ht.getTransfer(M.map.colorSpace)===Et,premultipliedAlpha:M.premultipliedAlpha,doubleSided:M.side===Jt,flipSided:M.side===cn,useDepthPacking:M.depthPacking>=0,depthPacking:M.depthPacking||0,index0AttributeName:M.index0AttributeName,extensionDerivatives:ie&&M.extensions.derivatives===!0,extensionFragDepth:ie&&M.extensions.fragDepth===!0,extensionDrawBuffers:ie&&M.extensions.drawBuffers===!0,extensionShaderTextureLOD:ie&&M.extensions.shaderTextureLOD===!0,extensionClipCullDistance:ie&&M.extensions.clipCullDistance&&n.has("WEBGL_clip_cull_distance"),rendererExtensionFragDepth:h||n.has("EXT_frag_depth"),rendererExtensionDrawBuffers:h||n.has("WEBGL_draw_buffers"),rendererExtensionShaderTextureLod:h||n.has("EXT_shader_texture_lod"),rendererExtensionParallelShaderCompile:n.has("KHR_parallel_shader_compile"),customProgramCacheKey:M.customProgramCacheKey()}}function m(M){let E=[];if(M.shaderID?E.push(M.shaderID):(E.push(M.customVertexShaderID),E.push(M.customFragmentShaderID)),M.defines!==void 0)for(let O in M.defines)E.push(O),E.push(M.defines[O]);return M.isRawShaderMaterial===!1&&(y(E,M),_(E,M),E.push(i.outputColorSpace)),E.push(M.customProgramCacheKey),E.join()}function y(M,E){M.push(E.precision),M.push(E.outputColorSpace),M.push(E.envMapMode),M.push(E.envMapCubeUVHeight),M.push(E.mapUv),M.push(E.alphaMapUv),M.push(E.lightMapUv),M.push(E.aoMapUv),M.push(E.bumpMapUv),M.push(E.normalMapUv),M.push(E.displacementMapUv),M.push(E.emissiveMapUv),M.push(E.metalnessMapUv),M.push(E.roughnessMapUv),M.push(E.anisotropyMapUv),M.push(E.clearcoatMapUv),M.push(E.clearcoatNormalMapUv),M.push(E.clearcoatRoughnessMapUv),M.push(E.iridescenceMapUv),M.push(E.iridescenceThicknessMapUv),M.push(E.sheenColorMapUv),M.push(E.sheenRoughnessMapUv),M.push(E.specularMapUv),M.push(E.specularColorMapUv),M.push(E.specularIntensityMapUv),M.push(E.transmissionMapUv),M.push(E.thicknessMapUv),M.push(E.combine),M.push(E.fogExp2),M.push(E.sizeAttenuation),M.push(E.morphTargetsCount),M.push(E.morphAttributeCount),M.push(E.numDirLights),M.push(E.numPointLights),M.push(E.numSpotLights),M.push(E.numSpotLightMaps),M.push(E.numHemiLights),M.push(E.numRectAreaLights),M.push(E.numDirLightShadows),M.push(E.numPointLightShadows),M.push(E.numSpotLightShadows),M.push(E.numSpotLightShadowsWithMaps),M.push(E.numLightProbes),M.push(E.shadowMapType),M.push(E.toneMapping),M.push(E.numClippingPlanes),M.push(E.numClipIntersection),M.push(E.depthPacking)}function _(M,E){o.disableAll(),E.isWebGL2&&o.enable(0),E.supportsVertexTextures&&o.enable(1),E.instancing&&o.enable(2),E.instancingColor&&o.enable(3),E.matcap&&o.enable(4),E.envMap&&o.enable(5),E.normalMapObjectSpace&&o.enable(6),E.normalMapTangentSpace&&o.enable(7),E.clearcoat&&o.enable(8),E.iridescence&&o.enable(9),E.alphaTest&&o.enable(10),E.vertexColors&&o.enable(11),E.vertexAlphas&&o.enable(12),E.vertexUv1s&&o.enable(13),E.vertexUv2s&&o.enable(14),E.vertexUv3s&&o.enable(15),E.vertexTangents&&o.enable(16),E.anisotropy&&o.enable(17),E.alphaHash&&o.enable(18),E.batching&&o.enable(19),M.push(o.mask),o.disableAll(),E.fog&&o.enable(0),E.useFog&&o.enable(1),E.flatShading&&o.enable(2),E.logarithmicDepthBuffer&&o.enable(3),E.skinning&&o.enable(4),E.morphTargets&&o.enable(5),E.morphNormals&&o.enable(6),E.morphColors&&o.enable(7),E.premultipliedAlpha&&o.enable(8),E.shadowMapEnabled&&o.enable(9),E.useLegacyLights&&o.enable(10),E.doubleSided&&o.enable(11),E.flipSided&&o.enable(12),E.useDepthPacking&&o.enable(13),E.dithering&&o.enable(14),E.transmission&&o.enable(15),E.sheen&&o.enable(16),E.opaque&&o.enable(17),E.pointsUvs&&o.enable(18),E.decodeVideoTexture&&o.enable(19),M.push(o.mask)}function w(M){let E=p[M.type],O;if(E){let j=Wn[E];O=y0.clone(j.uniforms)}else O=M.uniforms;return O}function P(M,E){let O;for(let j=0,ae=l.length;j<ae;j++){let z=l[j];if(z.cacheKey===E){O=z,++O.usedTimes;break}}return O===void 0&&(O=new Ry(i,E,M,r),l.push(O)),O}function A(M){if(--M.usedTimes===0){let E=l.indexOf(M);l[E]=l[l.length-1],l.pop(),M.destroy()}}function R(M){c.remove(M)}function F(){c.dispose()}return{getParameters:g,getProgramCacheKey:m,getUniforms:w,acquireProgram:P,releaseProgram:A,releaseShaderCache:R,programs:l,dispose:F}}function Ly(){let i=new WeakMap;function e(r){let a=i.get(r);return a===void 0&&(a={},i.set(r,a)),a}function t(r){i.delete(r)}function n(r,a,o){i.get(r)[a]=o}function s(){i=new WeakMap}return{get:e,remove:t,update:n,dispose:s}}function Iy(i,e){return i.groupOrder!==e.groupOrder?i.groupOrder-e.groupOrder:i.renderOrder!==e.renderOrder?i.renderOrder-e.renderOrder:i.material.id!==e.material.id?i.material.id-e.material.id:i.z!==e.z?i.z-e.z:i.id-e.id}function Pd(i,e){return i.groupOrder!==e.groupOrder?i.groupOrder-e.groupOrder:i.renderOrder!==e.renderOrder?i.renderOrder-e.renderOrder:i.z!==e.z?e.z-i.z:i.id-e.id}function Ld(){let i=[],e=0,t=[],n=[],s=[];function r(){e=0,t.length=0,n.length=0,s.length=0}function a(u,d,f,p,x,g){let m=i[e];return m===void 0?(m={id:u.id,object:u,geometry:d,material:f,groupOrder:p,renderOrder:u.renderOrder,z:x,group:g},i[e]=m):(m.id=u.id,m.object=u,m.geometry=d,m.material=f,m.groupOrder=p,m.renderOrder=u.renderOrder,m.z=x,m.group=g),e++,m}function o(u,d,f,p,x,g){let m=a(u,d,f,p,x,g);f.transmission>0?n.push(m):f.transparent===!0?s.push(m):t.push(m)}function c(u,d,f,p,x,g){let m=a(u,d,f,p,x,g);f.transmission>0?n.unshift(m):f.transparent===!0?s.unshift(m):t.unshift(m)}function l(u,d){t.length>1&&t.sort(u||Iy),n.length>1&&n.sort(d||Pd),s.length>1&&s.sort(d||Pd)}function h(){for(let u=e,d=i.length;u<d;u++){let f=i[u];if(f.id===null)break;f.id=null,f.object=null,f.geometry=null,f.material=null,f.group=null}}return{opaque:t,transmissive:n,transparent:s,init:r,push:o,unshift:c,finish:h,sort:l}}function zy(){let i=new WeakMap;function e(n,s){let r=i.get(n),a;return r===void 0?(a=new Ld,i.set(n,[a])):s>=r.length?(a=new Ld,r.push(a)):a=r[s],a}function t(){i=new WeakMap}return{get:e,dispose:t}}function Dy(){let i={};return{get:function(e){if(i[e.id]!==void 0)return i[e.id];let t;switch(e.type){case"DirectionalLight":t={direction:new L,color:new pe};break;case"SpotLight":t={position:new L,direction:new L,color:new pe,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":t={position:new L,color:new pe,distance:0,decay:0};break;case"HemisphereLight":t={direction:new L,skyColor:new pe,groundColor:new pe};break;case"RectAreaLight":t={color:new pe,position:new L,halfWidth:new L,halfHeight:new L};break}return i[e.id]=t,t}}}function Ny(){let i={};return{get:function(e){if(i[e.id]!==void 0)return i[e.id];let t;switch(e.type){case"DirectionalLight":t={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new ze};break;case"SpotLight":t={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new ze};break;case"PointLight":t={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new ze,shadowCameraNear:1,shadowCameraFar:1e3};break}return i[e.id]=t,t}}}var Uy=0;function Oy(i,e){return(e.castShadow?2:0)-(i.castShadow?2:0)+(e.map?1:0)-(i.map?1:0)}function Fy(i,e){let t=new Dy,n=Ny(),s={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let h=0;h<9;h++)s.probe.push(new L);let r=new L,a=new Xe,o=new Xe;function c(h,u){let d=0,f=0,p=0;for(let j=0;j<9;j++)s.probe[j].set(0,0,0);let x=0,g=0,m=0,y=0,_=0,w=0,P=0,A=0,R=0,F=0,M=0;h.sort(Oy);let E=u===!0?Math.PI:1;for(let j=0,ae=h.length;j<ae;j++){let z=h[j],B=z.color,J=z.intensity,q=z.distance,K=z.shadow&&z.shadow.map?z.shadow.map.texture:null;if(z.isAmbientLight)d+=B.r*J*E,f+=B.g*J*E,p+=B.b*J*E;else if(z.isLightProbe){for(let $=0;$<9;$++)s.probe[$].addScaledVector(z.sh.coefficients[$],J);M++}else if(z.isDirectionalLight){let $=t.get(z);if($.color.copy(z.color).multiplyScalar(z.intensity*E),z.castShadow){let se=z.shadow,le=n.get(z);le.shadowBias=se.bias,le.shadowNormalBias=se.normalBias,le.shadowRadius=se.radius,le.shadowMapSize=se.mapSize,s.directionalShadow[x]=le,s.directionalShadowMap[x]=K,s.directionalShadowMatrix[x]=z.shadow.matrix,w++}s.directional[x]=$,x++}else if(z.isSpotLight){let $=t.get(z);$.position.setFromMatrixPosition(z.matrixWorld),$.color.copy(B).multiplyScalar(J*E),$.distance=q,$.coneCos=Math.cos(z.angle),$.penumbraCos=Math.cos(z.angle*(1-z.penumbra)),$.decay=z.decay,s.spot[m]=$;let se=z.shadow;if(z.map&&(s.spotLightMap[R]=z.map,R++,se.updateMatrices(z),z.castShadow&&F++),s.spotLightMatrix[m]=se.matrix,z.castShadow){let le=n.get(z);le.shadowBias=se.bias,le.shadowNormalBias=se.normalBias,le.shadowRadius=se.radius,le.shadowMapSize=se.mapSize,s.spotShadow[m]=le,s.spotShadowMap[m]=K,A++}m++}else if(z.isRectAreaLight){let $=t.get(z);$.color.copy(B).multiplyScalar(J),$.halfWidth.set(z.width*.5,0,0),$.halfHeight.set(0,z.height*.5,0),s.rectArea[y]=$,y++}else if(z.isPointLight){let $=t.get(z);if($.color.copy(z.color).multiplyScalar(z.intensity*E),$.distance=z.distance,$.decay=z.decay,z.castShadow){let se=z.shadow,le=n.get(z);le.shadowBias=se.bias,le.shadowNormalBias=se.normalBias,le.shadowRadius=se.radius,le.shadowMapSize=se.mapSize,le.shadowCameraNear=se.camera.near,le.shadowCameraFar=se.camera.far,s.pointShadow[g]=le,s.pointShadowMap[g]=K,s.pointShadowMatrix[g]=z.shadow.matrix,P++}s.point[g]=$,g++}else if(z.isHemisphereLight){let $=t.get(z);$.skyColor.copy(z.color).multiplyScalar(J*E),$.groundColor.copy(z.groundColor).multiplyScalar(J*E),s.hemi[_]=$,_++}}y>0&&(e.isWebGL2?i.has("OES_texture_float_linear")===!0?(s.rectAreaLTC1=fe.LTC_FLOAT_1,s.rectAreaLTC2=fe.LTC_FLOAT_2):(s.rectAreaLTC1=fe.LTC_HALF_1,s.rectAreaLTC2=fe.LTC_HALF_2):i.has("OES_texture_float_linear")===!0?(s.rectAreaLTC1=fe.LTC_FLOAT_1,s.rectAreaLTC2=fe.LTC_FLOAT_2):i.has("OES_texture_half_float_linear")===!0?(s.rectAreaLTC1=fe.LTC_HALF_1,s.rectAreaLTC2=fe.LTC_HALF_2):console.error("THREE.WebGLRenderer: Unable to use RectAreaLight. Missing WebGL extensions.")),s.ambient[0]=d,s.ambient[1]=f,s.ambient[2]=p;let O=s.hash;(O.directionalLength!==x||O.pointLength!==g||O.spotLength!==m||O.rectAreaLength!==y||O.hemiLength!==_||O.numDirectionalShadows!==w||O.numPointShadows!==P||O.numSpotShadows!==A||O.numSpotMaps!==R||O.numLightProbes!==M)&&(s.directional.length=x,s.spot.length=m,s.rectArea.length=y,s.point.length=g,s.hemi.length=_,s.directionalShadow.length=w,s.directionalShadowMap.length=w,s.pointShadow.length=P,s.pointShadowMap.length=P,s.spotShadow.length=A,s.spotShadowMap.length=A,s.directionalShadowMatrix.length=w,s.pointShadowMatrix.length=P,s.spotLightMatrix.length=A+R-F,s.spotLightMap.length=R,s.numSpotLightShadowsWithMaps=F,s.numLightProbes=M,O.directionalLength=x,O.pointLength=g,O.spotLength=m,O.rectAreaLength=y,O.hemiLength=_,O.numDirectionalShadows=w,O.numPointShadows=P,O.numSpotShadows=A,O.numSpotMaps=R,O.numLightProbes=M,s.version=Uy++)}function l(h,u){let d=0,f=0,p=0,x=0,g=0,m=u.matrixWorldInverse;for(let y=0,_=h.length;y<_;y++){let w=h[y];if(w.isDirectionalLight){let P=s.directional[d];P.direction.setFromMatrixPosition(w.matrixWorld),r.setFromMatrixPosition(w.target.matrixWorld),P.direction.sub(r),P.direction.transformDirection(m),d++}else if(w.isSpotLight){let P=s.spot[p];P.position.setFromMatrixPosition(w.matrixWorld),P.position.applyMatrix4(m),P.direction.setFromMatrixPosition(w.matrixWorld),r.setFromMatrixPosition(w.target.matrixWorld),P.direction.sub(r),P.direction.transformDirection(m),p++}else if(w.isRectAreaLight){let P=s.rectArea[x];P.position.setFromMatrixPosition(w.matrixWorld),P.position.applyMatrix4(m),o.identity(),a.copy(w.matrixWorld),a.premultiply(m),o.extractRotation(a),P.halfWidth.set(w.width*.5,0,0),P.halfHeight.set(0,w.height*.5,0),P.halfWidth.applyMatrix4(o),P.halfHeight.applyMatrix4(o),x++}else if(w.isPointLight){let P=s.point[f];P.position.setFromMatrixPosition(w.matrixWorld),P.position.applyMatrix4(m),f++}else if(w.isHemisphereLight){let P=s.hemi[g];P.direction.setFromMatrixPosition(w.matrixWorld),P.direction.transformDirection(m),g++}}}return{setup:c,setupView:l,state:s}}function Id(i,e){let t=new Fy(i,e),n=[],s=[];function r(){n.length=0,s.length=0}function a(u){n.push(u)}function o(u){s.push(u)}function c(u){t.setup(n,u)}function l(u){t.setupView(n,u)}return{init:r,state:{lightsArray:n,shadowsArray:s,lights:t},setupLights:c,setupLightsView:l,pushLight:a,pushShadow:o}}function By(i,e){let t=new WeakMap;function n(r,a=0){let o=t.get(r),c;return o===void 0?(c=new Id(i,e),t.set(r,[c])):a>=o.length?(c=new Id(i,e),o.push(c)):c=o[a],c}function s(){t=new WeakMap}return{get:n,dispose:s}}var Rl=class extends ln{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=zm,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}},Cl=class extends ln{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}},ky=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,Hy=`uniform sampler2D shadow_pass;
uniform vec2 resolution;
uniform float radius;
#include <packing>
void main() {
	const float samples = float( VSM_SAMPLES );
	float mean = 0.0;
	float squared_mean = 0.0;
	float uvStride = samples <= 1.0 ? 0.0 : 2.0 / ( samples - 1.0 );
	float uvStart = samples <= 1.0 ? 0.0 : - 1.0;
	for ( float i = 0.0; i < samples; i ++ ) {
		float uvOffset = uvStart + i * uvStride;
		#ifdef HORIZONTAL_PASS
			vec2 distribution = unpackRGBATo2Half( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( uvOffset, 0.0 ) * radius ) / resolution ) );
			mean += distribution.x;
			squared_mean += distribution.y * distribution.y + distribution.x * distribution.x;
		#else
			float depth = unpackRGBAToDepth( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( 0.0, uvOffset ) * radius ) / resolution ) );
			mean += depth;
			squared_mean += depth * depth;
		#endif
	}
	mean = mean / samples;
	squared_mean = squared_mean / samples;
	float std_dev = sqrt( squared_mean - mean * mean );
	gl_FragColor = pack2HalfToRGBA( vec2( mean, std_dev ) );
}`;function Gy(i,e,t){let n=new Qr,s=new ze,r=new ze,a=new _t,o=new Rl({depthPacking:Dm}),c=new Cl,l={},h=t.maxTextureSize,u={[qn]:cn,[cn]:qn,[Jt]:Jt},d=new di({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new ze},radius:{value:4}},vertexShader:ky,fragmentShader:Hy}),f=d.clone();f.defines.HORIZONTAL_PASS=1;let p=new Nt;p.setAttribute("position",new Pt(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));let x=new de(p,d),g=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=Wo;let m=this.type;this.render=function(A,R,F){if(g.enabled===!1||g.autoUpdate===!1&&g.needsUpdate===!1||A.length===0)return;let M=i.getRenderTarget(),E=i.getActiveCubeFace(),O=i.getActiveMipmapLevel(),j=i.state;j.setBlending(Ci),j.buffers.color.setClear(1,1,1,1),j.buffers.depth.setTest(!0),j.setScissorTest(!1);let ae=m!==ai&&this.type===ai,z=m===ai&&this.type!==ai;for(let B=0,J=A.length;B<J;B++){let q=A[B],K=q.shadow;if(K===void 0){console.warn("THREE.WebGLShadowMap:",q,"has no shadow.");continue}if(K.autoUpdate===!1&&K.needsUpdate===!1)continue;s.copy(K.mapSize);let $=K.getFrameExtents();if(s.multiply($),r.copy(K.mapSize),(s.x>h||s.y>h)&&(s.x>h&&(r.x=Math.floor(h/$.x),s.x=r.x*$.x,K.mapSize.x=r.x),s.y>h&&(r.y=Math.floor(h/$.y),s.y=r.y*$.y,K.mapSize.y=r.y)),K.map===null||ae===!0||z===!0){let le=this.type!==ai?{minFilter:Wt,magFilter:Wt}:{};K.map!==null&&K.map.dispose(),K.map=new ui(s.x,s.y,le),K.map.texture.name=q.name+".shadowMap",K.camera.updateProjectionMatrix()}i.setRenderTarget(K.map),i.clear();let se=K.getViewportCount();for(let le=0;le<se;le++){let _e=K.getViewport(le);a.set(r.x*_e.x,r.y*_e.y,r.x*_e.z,r.y*_e.w),j.viewport(a),K.updateMatrices(q,le),n=K.getFrustum(),w(R,F,K.camera,q,this.type)}K.isPointLightShadow!==!0&&this.type===ai&&y(K,F),K.needsUpdate=!1}m=this.type,g.needsUpdate=!1,i.setRenderTarget(M,E,O)};function y(A,R){let F=e.update(x);d.defines.VSM_SAMPLES!==A.blurSamples&&(d.defines.VSM_SAMPLES=A.blurSamples,f.defines.VSM_SAMPLES=A.blurSamples,d.needsUpdate=!0,f.needsUpdate=!0),A.mapPass===null&&(A.mapPass=new ui(s.x,s.y)),d.uniforms.shadow_pass.value=A.map.texture,d.uniforms.resolution.value=A.mapSize,d.uniforms.radius.value=A.radius,i.setRenderTarget(A.mapPass),i.clear(),i.renderBufferDirect(R,null,F,d,x,null),f.uniforms.shadow_pass.value=A.mapPass.texture,f.uniforms.resolution.value=A.mapSize,f.uniforms.radius.value=A.radius,i.setRenderTarget(A.map),i.clear(),i.renderBufferDirect(R,null,F,f,x,null)}function _(A,R,F,M){let E=null,O=F.isPointLight===!0?A.customDistanceMaterial:A.customDepthMaterial;if(O!==void 0)E=O;else if(E=F.isPointLight===!0?c:o,i.localClippingEnabled&&R.clipShadows===!0&&Array.isArray(R.clippingPlanes)&&R.clippingPlanes.length!==0||R.displacementMap&&R.displacementScale!==0||R.alphaMap&&R.alphaTest>0||R.map&&R.alphaTest>0){let j=E.uuid,ae=R.uuid,z=l[j];z===void 0&&(z={},l[j]=z);let B=z[ae];B===void 0&&(B=E.clone(),z[ae]=B,R.addEventListener("dispose",P)),E=B}if(E.visible=R.visible,E.wireframe=R.wireframe,M===ai?E.side=R.shadowSide!==null?R.shadowSide:R.side:E.side=R.shadowSide!==null?R.shadowSide:u[R.side],E.alphaMap=R.alphaMap,E.alphaTest=R.alphaTest,E.map=R.map,E.clipShadows=R.clipShadows,E.clippingPlanes=R.clippingPlanes,E.clipIntersection=R.clipIntersection,E.displacementMap=R.displacementMap,E.displacementScale=R.displacementScale,E.displacementBias=R.displacementBias,E.wireframeLinewidth=R.wireframeLinewidth,E.linewidth=R.linewidth,F.isPointLight===!0&&E.isMeshDistanceMaterial===!0){let j=i.properties.get(E);j.light=F}return E}function w(A,R,F,M,E){if(A.visible===!1)return;if(A.layers.test(R.layers)&&(A.isMesh||A.isLine||A.isPoints)&&(A.castShadow||A.receiveShadow&&E===ai)&&(!A.frustumCulled||n.intersectsObject(A))){A.modelViewMatrix.multiplyMatrices(F.matrixWorldInverse,A.matrixWorld);let ae=e.update(A),z=A.material;if(Array.isArray(z)){let B=ae.groups;for(let J=0,q=B.length;J<q;J++){let K=B[J],$=z[K.materialIndex];if($&&$.visible){let se=_(A,$,M,E);A.onBeforeShadow(i,A,R,F,ae,se,K),i.renderBufferDirect(F,null,ae,se,A,K),A.onAfterShadow(i,A,R,F,ae,se,K)}}}else if(z.visible){let B=_(A,z,M,E);A.onBeforeShadow(i,A,R,F,ae,B,null),i.renderBufferDirect(F,null,ae,B,A,null),A.onAfterShadow(i,A,R,F,ae,B,null)}}let j=A.children;for(let ae=0,z=j.length;ae<z;ae++)w(j[ae],R,F,M,E)}function P(A){A.target.removeEventListener("dispose",P);for(let F in l){let M=l[F],E=A.target.uuid;E in M&&(M[E].dispose(),delete M[E])}}}function Vy(i,e,t){let n=t.isWebGL2;function s(){let C=!1,Q=new _t,ie=null,me=new _t(0,0,0,0);return{setMask:function(ve){ie!==ve&&!C&&(i.colorMask(ve,ve,ve,ve),ie=ve)},setLocked:function(ve){C=ve},setClear:function(ve,$e,rt,Rt,dn){dn===!0&&(ve*=Rt,$e*=Rt,rt*=Rt),Q.set(ve,$e,rt,Rt),me.equals(Q)===!1&&(i.clearColor(ve,$e,rt,Rt),me.copy(Q))},reset:function(){C=!1,ie=null,me.set(-1,0,0,0)}}}function r(){let C=!1,Q=null,ie=null,me=null;return{setTest:function(ve){ve?He(i.DEPTH_TEST):Pe(i.DEPTH_TEST)},setMask:function(ve){Q!==ve&&!C&&(i.depthMask(ve),Q=ve)},setFunc:function(ve){if(ie!==ve){switch(ve){case om:i.depthFunc(i.NEVER);break;case cm:i.depthFunc(i.ALWAYS);break;case lm:i.depthFunc(i.LESS);break;case lo:i.depthFunc(i.LEQUAL);break;case hm:i.depthFunc(i.EQUAL);break;case um:i.depthFunc(i.GEQUAL);break;case dm:i.depthFunc(i.GREATER);break;case fm:i.depthFunc(i.NOTEQUAL);break;default:i.depthFunc(i.LEQUAL)}ie=ve}},setLocked:function(ve){C=ve},setClear:function(ve){me!==ve&&(i.clearDepth(ve),me=ve)},reset:function(){C=!1,Q=null,ie=null,me=null}}}function a(){let C=!1,Q=null,ie=null,me=null,ve=null,$e=null,rt=null,Rt=null,dn=null;return{setTest:function(wt){C||(wt?He(i.STENCIL_TEST):Pe(i.STENCIL_TEST))},setMask:function(wt){Q!==wt&&!C&&(i.stencilMask(wt),Q=wt)},setFunc:function(wt,fn,Vn){(ie!==wt||me!==fn||ve!==Vn)&&(i.stencilFunc(wt,fn,Vn),ie=wt,me=fn,ve=Vn)},setOp:function(wt,fn,Vn){($e!==wt||rt!==fn||Rt!==Vn)&&(i.stencilOp(wt,fn,Vn),$e=wt,rt=fn,Rt=Vn)},setLocked:function(wt){C=wt},setClear:function(wt){dn!==wt&&(i.clearStencil(wt),dn=wt)},reset:function(){C=!1,Q=null,ie=null,me=null,ve=null,$e=null,rt=null,Rt=null,dn=null}}}let o=new s,c=new r,l=new a,h=new WeakMap,u=new WeakMap,d={},f={},p=new WeakMap,x=[],g=null,m=!1,y=null,_=null,w=null,P=null,A=null,R=null,F=null,M=new pe(0,0,0),E=0,O=!1,j=null,ae=null,z=null,B=null,J=null,q=i.getParameter(i.MAX_COMBINED_TEXTURE_IMAGE_UNITS),K=!1,$=0,se=i.getParameter(i.VERSION);se.indexOf("WebGL")!==-1?($=parseFloat(/^WebGL (\d)/.exec(se)[1]),K=$>=1):se.indexOf("OpenGL ES")!==-1&&($=parseFloat(/^OpenGL ES (\d)/.exec(se)[1]),K=$>=2);let le=null,_e={},Z=i.getParameter(i.SCISSOR_BOX),te=i.getParameter(i.VIEWPORT),xe=new _t().fromArray(Z),Re=new _t().fromArray(te);function we(C,Q,ie,me){let ve=new Uint8Array(4),$e=i.createTexture();i.bindTexture(C,$e),i.texParameteri(C,i.TEXTURE_MIN_FILTER,i.NEAREST),i.texParameteri(C,i.TEXTURE_MAG_FILTER,i.NEAREST);for(let rt=0;rt<ie;rt++)n&&(C===i.TEXTURE_3D||C===i.TEXTURE_2D_ARRAY)?i.texImage3D(Q,0,i.RGBA,1,1,me,0,i.RGBA,i.UNSIGNED_BYTE,ve):i.texImage2D(Q+rt,0,i.RGBA,1,1,0,i.RGBA,i.UNSIGNED_BYTE,ve);return $e}let Be={};Be[i.TEXTURE_2D]=we(i.TEXTURE_2D,i.TEXTURE_2D,1),Be[i.TEXTURE_CUBE_MAP]=we(i.TEXTURE_CUBE_MAP,i.TEXTURE_CUBE_MAP_POSITIVE_X,6),n&&(Be[i.TEXTURE_2D_ARRAY]=we(i.TEXTURE_2D_ARRAY,i.TEXTURE_2D_ARRAY,1,1),Be[i.TEXTURE_3D]=we(i.TEXTURE_3D,i.TEXTURE_3D,1,1)),o.setClear(0,0,0,1),c.setClear(1),l.setClear(0),He(i.DEPTH_TEST),c.setFunc(lo),Ge(!1),T(gu),He(i.CULL_FACE),Se(Ci);function He(C){d[C]!==!0&&(i.enable(C),d[C]=!0)}function Pe(C){d[C]!==!1&&(i.disable(C),d[C]=!1)}function qe(C,Q){return f[C]!==Q?(i.bindFramebuffer(C,Q),f[C]=Q,n&&(C===i.DRAW_FRAMEBUFFER&&(f[i.FRAMEBUFFER]=Q),C===i.FRAMEBUFFER&&(f[i.DRAW_FRAMEBUFFER]=Q)),!0):!1}function k(C,Q){let ie=x,me=!1;if(C)if(ie=p.get(Q),ie===void 0&&(ie=[],p.set(Q,ie)),C.isWebGLMultipleRenderTargets){let ve=C.texture;if(ie.length!==ve.length||ie[0]!==i.COLOR_ATTACHMENT0){for(let $e=0,rt=ve.length;$e<rt;$e++)ie[$e]=i.COLOR_ATTACHMENT0+$e;ie.length=ve.length,me=!0}}else ie[0]!==i.COLOR_ATTACHMENT0&&(ie[0]=i.COLOR_ATTACHMENT0,me=!0);else ie[0]!==i.BACK&&(ie[0]=i.BACK,me=!0);me&&(t.isWebGL2?i.drawBuffers(ie):e.get("WEBGL_draw_buffers").drawBuffersWEBGL(ie))}function jt(C){return g!==C?(i.useProgram(C),g=C,!0):!1}let Le={[es]:i.FUNC_ADD,[qp]:i.FUNC_SUBTRACT,[Yp]:i.FUNC_REVERSE_SUBTRACT};if(n)Le[yu]=i.MIN,Le[vu]=i.MAX;else{let C=e.get("EXT_blend_minmax");C!==null&&(Le[yu]=C.MIN_EXT,Le[vu]=C.MAX_EXT)}let ke={[Zp]:i.ZERO,[jp]:i.ONE,[Kp]:i.SRC_COLOR,[ul]:i.SRC_ALPHA,[nm]:i.SRC_ALPHA_SATURATE,[em]:i.DST_COLOR,[Jp]:i.DST_ALPHA,[$p]:i.ONE_MINUS_SRC_COLOR,[dl]:i.ONE_MINUS_SRC_ALPHA,[tm]:i.ONE_MINUS_DST_COLOR,[Qp]:i.ONE_MINUS_DST_ALPHA,[im]:i.CONSTANT_COLOR,[sm]:i.ONE_MINUS_CONSTANT_COLOR,[rm]:i.CONSTANT_ALPHA,[am]:i.ONE_MINUS_CONSTANT_ALPHA};function Se(C,Q,ie,me,ve,$e,rt,Rt,dn,wt){if(C===Ci){m===!0&&(Pe(i.BLEND),m=!1);return}if(m===!1&&(He(i.BLEND),m=!0),C!==Xp){if(C!==y||wt!==O){if((_!==es||A!==es)&&(i.blendEquation(i.FUNC_ADD),_=es,A=es),wt)switch(C){case er:i.blendFuncSeparate(i.ONE,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case jr:i.blendFunc(i.ONE,i.ONE);break;case xu:i.blendFuncSeparate(i.ZERO,i.ONE_MINUS_SRC_COLOR,i.ZERO,i.ONE);break;case _u:i.blendFuncSeparate(i.ZERO,i.SRC_COLOR,i.ZERO,i.SRC_ALPHA);break;default:console.error("THREE.WebGLState: Invalid blending: ",C);break}else switch(C){case er:i.blendFuncSeparate(i.SRC_ALPHA,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case jr:i.blendFunc(i.SRC_ALPHA,i.ONE);break;case xu:i.blendFuncSeparate(i.ZERO,i.ONE_MINUS_SRC_COLOR,i.ZERO,i.ONE);break;case _u:i.blendFunc(i.ZERO,i.SRC_COLOR);break;default:console.error("THREE.WebGLState: Invalid blending: ",C);break}w=null,P=null,R=null,F=null,M.set(0,0,0),E=0,y=C,O=wt}return}ve=ve||Q,$e=$e||ie,rt=rt||me,(Q!==_||ve!==A)&&(i.blendEquationSeparate(Le[Q],Le[ve]),_=Q,A=ve),(ie!==w||me!==P||$e!==R||rt!==F)&&(i.blendFuncSeparate(ke[ie],ke[me],ke[$e],ke[rt]),w=ie,P=me,R=$e,F=rt),(Rt.equals(M)===!1||dn!==E)&&(i.blendColor(Rt.r,Rt.g,Rt.b,dn),M.copy(Rt),E=dn),y=C,O=!1}function bt(C,Q){C.side===Jt?Pe(i.CULL_FACE):He(i.CULL_FACE);let ie=C.side===cn;Q&&(ie=!ie),Ge(ie),C.blending===er&&C.transparent===!1?Se(Ci):Se(C.blending,C.blendEquation,C.blendSrc,C.blendDst,C.blendEquationAlpha,C.blendSrcAlpha,C.blendDstAlpha,C.blendColor,C.blendAlpha,C.premultipliedAlpha),c.setFunc(C.depthFunc),c.setTest(C.depthTest),c.setMask(C.depthWrite),o.setMask(C.colorWrite);let me=C.stencilWrite;l.setTest(me),me&&(l.setMask(C.stencilWriteMask),l.setFunc(C.stencilFunc,C.stencilRef,C.stencilFuncMask),l.setOp(C.stencilFail,C.stencilZFail,C.stencilZPass)),H(C.polygonOffset,C.polygonOffsetFactor,C.polygonOffsetUnits),C.alphaToCoverage===!0?He(i.SAMPLE_ALPHA_TO_COVERAGE):Pe(i.SAMPLE_ALPHA_TO_COVERAGE)}function Ge(C){j!==C&&(C?i.frontFace(i.CW):i.frontFace(i.CCW),j=C)}function T(C){C!==Gp?(He(i.CULL_FACE),C!==ae&&(C===gu?i.cullFace(i.BACK):C===Vp?i.cullFace(i.FRONT):i.cullFace(i.FRONT_AND_BACK))):Pe(i.CULL_FACE),ae=C}function b(C){C!==z&&(K&&i.lineWidth(C),z=C)}function H(C,Q,ie){C?(He(i.POLYGON_OFFSET_FILL),(B!==Q||J!==ie)&&(i.polygonOffset(Q,ie),B=Q,J=ie)):Pe(i.POLYGON_OFFSET_FILL)}function ce(C){C?He(i.SCISSOR_TEST):Pe(i.SCISSOR_TEST)}function oe(C){C===void 0&&(C=i.TEXTURE0+q-1),le!==C&&(i.activeTexture(C),le=C)}function he(C,Q,ie){ie===void 0&&(le===null?ie=i.TEXTURE0+q-1:ie=le);let me=_e[ie];me===void 0&&(me={type:void 0,texture:void 0},_e[ie]=me),(me.type!==C||me.texture!==Q)&&(le!==ie&&(i.activeTexture(ie),le=ie),i.bindTexture(C,Q||Be[C]),me.type=C,me.texture=Q)}function Te(){let C=_e[le];C!==void 0&&C.type!==void 0&&(i.bindTexture(C.type,null),C.type=void 0,C.texture=void 0)}function ge(){try{i.compressedTexImage2D.apply(i,arguments)}catch(C){console.error("THREE.WebGLState:",C)}}function be(){try{i.compressedTexImage3D.apply(i,arguments)}catch(C){console.error("THREE.WebGLState:",C)}}function Ie(){try{i.texSubImage2D.apply(i,arguments)}catch(C){console.error("THREE.WebGLState:",C)}}function Ve(){try{i.texSubImage3D.apply(i,arguments)}catch(C){console.error("THREE.WebGLState:",C)}}function re(){try{i.compressedTexSubImage2D.apply(i,arguments)}catch(C){console.error("THREE.WebGLState:",C)}}function lt(){try{i.compressedTexSubImage3D.apply(i,arguments)}catch(C){console.error("THREE.WebGLState:",C)}}function Ye(){try{i.texStorage2D.apply(i,arguments)}catch(C){console.error("THREE.WebGLState:",C)}}function De(){try{i.texStorage3D.apply(i,arguments)}catch(C){console.error("THREE.WebGLState:",C)}}function D(){try{i.texImage2D.apply(i,arguments)}catch(C){console.error("THREE.WebGLState:",C)}}function N(){try{i.texImage3D.apply(i,arguments)}catch(C){console.error("THREE.WebGLState:",C)}}function W(C){xe.equals(C)===!1&&(i.scissor(C.x,C.y,C.z,C.w),xe.copy(C))}function ee(C){Re.equals(C)===!1&&(i.viewport(C.x,C.y,C.z,C.w),Re.copy(C))}function ye(C,Q){let ie=u.get(Q);ie===void 0&&(ie=new WeakMap,u.set(Q,ie));let me=ie.get(C);me===void 0&&(me=i.getUniformBlockIndex(Q,C.name),ie.set(C,me))}function ne(C,Q){let me=u.get(Q).get(C);h.get(Q)!==me&&(i.uniformBlockBinding(Q,me,C.__bindingPointIndex),h.set(Q,me))}function X(){i.disable(i.BLEND),i.disable(i.CULL_FACE),i.disable(i.DEPTH_TEST),i.disable(i.POLYGON_OFFSET_FILL),i.disable(i.SCISSOR_TEST),i.disable(i.STENCIL_TEST),i.disable(i.SAMPLE_ALPHA_TO_COVERAGE),i.blendEquation(i.FUNC_ADD),i.blendFunc(i.ONE,i.ZERO),i.blendFuncSeparate(i.ONE,i.ZERO,i.ONE,i.ZERO),i.blendColor(0,0,0,0),i.colorMask(!0,!0,!0,!0),i.clearColor(0,0,0,0),i.depthMask(!0),i.depthFunc(i.LESS),i.clearDepth(1),i.stencilMask(4294967295),i.stencilFunc(i.ALWAYS,0,4294967295),i.stencilOp(i.KEEP,i.KEEP,i.KEEP),i.clearStencil(0),i.cullFace(i.BACK),i.frontFace(i.CCW),i.polygonOffset(0,0),i.activeTexture(i.TEXTURE0),i.bindFramebuffer(i.FRAMEBUFFER,null),n===!0&&(i.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),i.bindFramebuffer(i.READ_FRAMEBUFFER,null)),i.useProgram(null),i.lineWidth(1),i.scissor(0,0,i.canvas.width,i.canvas.height),i.viewport(0,0,i.canvas.width,i.canvas.height),d={},le=null,_e={},f={},p=new WeakMap,x=[],g=null,m=!1,y=null,_=null,w=null,P=null,A=null,R=null,F=null,M=new pe(0,0,0),E=0,O=!1,j=null,ae=null,z=null,B=null,J=null,xe.set(0,0,i.canvas.width,i.canvas.height),Re.set(0,0,i.canvas.width,i.canvas.height),o.reset(),c.reset(),l.reset()}return{buffers:{color:o,depth:c,stencil:l},enable:He,disable:Pe,bindFramebuffer:qe,drawBuffers:k,useProgram:jt,setBlending:Se,setMaterial:bt,setFlipSided:Ge,setCullFace:T,setLineWidth:b,setPolygonOffset:H,setScissorTest:ce,activeTexture:oe,bindTexture:he,unbindTexture:Te,compressedTexImage2D:ge,compressedTexImage3D:be,texImage2D:D,texImage3D:N,updateUBOMapping:ye,uniformBlockBinding:ne,texStorage2D:Ye,texStorage3D:De,texSubImage2D:Ie,texSubImage3D:Ve,compressedTexSubImage2D:re,compressedTexSubImage3D:lt,scissor:W,viewport:ee,reset:X}}function Wy(i,e,t,n,s,r,a){let o=s.isWebGL2,c=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,l=typeof navigator=="undefined"?!1:/OculusBrowser/g.test(navigator.userAgent),h=new WeakMap,u,d=new WeakMap,f=!1;try{f=typeof OffscreenCanvas!="undefined"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function p(T,b){return f?new OffscreenCanvas(T,b):Jr("canvas")}function x(T,b,H,ce){let oe=1;if((T.width>ce||T.height>ce)&&(oe=ce/Math.max(T.width,T.height)),oe<1||b===!0)if(typeof HTMLImageElement!="undefined"&&T instanceof HTMLImageElement||typeof HTMLCanvasElement!="undefined"&&T instanceof HTMLCanvasElement||typeof ImageBitmap!="undefined"&&T instanceof ImageBitmap){let he=b?xo:Math.floor,Te=he(oe*T.width),ge=he(oe*T.height);u===void 0&&(u=p(Te,ge));let be=H?p(Te,ge):u;return be.width=Te,be.height=ge,be.getContext("2d").drawImage(T,0,0,Te,ge),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+T.width+"x"+T.height+") to ("+Te+"x"+ge+")."),be}else return"data"in T&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+T.width+"x"+T.height+")."),T;return T}function g(T){return xl(T.width)&&xl(T.height)}function m(T){return o?!1:T.wrapS!==bn||T.wrapT!==bn||T.minFilter!==Wt&&T.minFilter!==gn}function y(T,b){return T.generateMipmaps&&b&&T.minFilter!==Wt&&T.minFilter!==gn}function _(T){i.generateMipmap(T)}function w(T,b,H,ce,oe=!1){if(o===!1)return b;if(T!==null){if(i[T]!==void 0)return i[T];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+T+"'")}let he=b;if(b===i.RED&&(H===i.FLOAT&&(he=i.R32F),H===i.HALF_FLOAT&&(he=i.R16F),H===i.UNSIGNED_BYTE&&(he=i.R8)),b===i.RED_INTEGER&&(H===i.UNSIGNED_BYTE&&(he=i.R8UI),H===i.UNSIGNED_SHORT&&(he=i.R16UI),H===i.UNSIGNED_INT&&(he=i.R32UI),H===i.BYTE&&(he=i.R8I),H===i.SHORT&&(he=i.R16I),H===i.INT&&(he=i.R32I)),b===i.RG&&(H===i.FLOAT&&(he=i.RG32F),H===i.HALF_FLOAT&&(he=i.RG16F),H===i.UNSIGNED_BYTE&&(he=i.RG8)),b===i.RGBA){let Te=oe?fo:ht.getTransfer(ce);H===i.FLOAT&&(he=i.RGBA32F),H===i.HALF_FLOAT&&(he=i.RGBA16F),H===i.UNSIGNED_BYTE&&(he=Te===Et?i.SRGB8_ALPHA8:i.RGBA8),H===i.UNSIGNED_SHORT_4_4_4_4&&(he=i.RGBA4),H===i.UNSIGNED_SHORT_5_5_5_1&&(he=i.RGB5_A1)}return(he===i.R16F||he===i.R32F||he===i.RG16F||he===i.RG32F||he===i.RGBA16F||he===i.RGBA32F)&&e.get("EXT_color_buffer_float"),he}function P(T,b,H){return y(T,H)===!0||T.isFramebufferTexture&&T.minFilter!==Wt&&T.minFilter!==gn?Math.log2(Math.max(b.width,b.height))+1:T.mipmaps!==void 0&&T.mipmaps.length>0?T.mipmaps.length:T.isCompressedTexture&&Array.isArray(T.image)?b.mipmaps.length:1}function A(T){return T===Wt||T===ho||T===Wr?i.NEAREST:i.LINEAR}function R(T){let b=T.target;b.removeEventListener("dispose",R),M(b),b.isVideoTexture&&h.delete(b)}function F(T){let b=T.target;b.removeEventListener("dispose",F),O(b)}function M(T){let b=n.get(T);if(b.__webglInit===void 0)return;let H=T.source,ce=d.get(H);if(ce){let oe=ce[b.__cacheKey];oe.usedTimes--,oe.usedTimes===0&&E(T),Object.keys(ce).length===0&&d.delete(H)}n.remove(T)}function E(T){let b=n.get(T);i.deleteTexture(b.__webglTexture);let H=T.source,ce=d.get(H);delete ce[b.__cacheKey],a.memory.textures--}function O(T){let b=T.texture,H=n.get(T),ce=n.get(b);if(ce.__webglTexture!==void 0&&(i.deleteTexture(ce.__webglTexture),a.memory.textures--),T.depthTexture&&T.depthTexture.dispose(),T.isWebGLCubeRenderTarget)for(let oe=0;oe<6;oe++){if(Array.isArray(H.__webglFramebuffer[oe]))for(let he=0;he<H.__webglFramebuffer[oe].length;he++)i.deleteFramebuffer(H.__webglFramebuffer[oe][he]);else i.deleteFramebuffer(H.__webglFramebuffer[oe]);H.__webglDepthbuffer&&i.deleteRenderbuffer(H.__webglDepthbuffer[oe])}else{if(Array.isArray(H.__webglFramebuffer))for(let oe=0;oe<H.__webglFramebuffer.length;oe++)i.deleteFramebuffer(H.__webglFramebuffer[oe]);else i.deleteFramebuffer(H.__webglFramebuffer);if(H.__webglDepthbuffer&&i.deleteRenderbuffer(H.__webglDepthbuffer),H.__webglMultisampledFramebuffer&&i.deleteFramebuffer(H.__webglMultisampledFramebuffer),H.__webglColorRenderbuffer)for(let oe=0;oe<H.__webglColorRenderbuffer.length;oe++)H.__webglColorRenderbuffer[oe]&&i.deleteRenderbuffer(H.__webglColorRenderbuffer[oe]);H.__webglDepthRenderbuffer&&i.deleteRenderbuffer(H.__webglDepthRenderbuffer)}if(T.isWebGLMultipleRenderTargets)for(let oe=0,he=b.length;oe<he;oe++){let Te=n.get(b[oe]);Te.__webglTexture&&(i.deleteTexture(Te.__webglTexture),a.memory.textures--),n.remove(b[oe])}n.remove(b),n.remove(T)}let j=0;function ae(){j=0}function z(){let T=j;return T>=s.maxTextures&&console.warn("THREE.WebGLTextures: Trying to use "+T+" texture units while this GPU supports only "+s.maxTextures),j+=1,T}function B(T){let b=[];return b.push(T.wrapS),b.push(T.wrapT),b.push(T.wrapR||0),b.push(T.magFilter),b.push(T.minFilter),b.push(T.anisotropy),b.push(T.internalFormat),b.push(T.format),b.push(T.type),b.push(T.generateMipmaps),b.push(T.premultiplyAlpha),b.push(T.flipY),b.push(T.unpackAlignment),b.push(T.colorSpace),b.join()}function J(T,b){let H=n.get(T);if(T.isVideoTexture&&bt(T),T.isRenderTargetTexture===!1&&T.version>0&&H.__version!==T.version){let ce=T.image;if(ce===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(ce.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{xe(H,T,b);return}}t.bindTexture(i.TEXTURE_2D,H.__webglTexture,i.TEXTURE0+b)}function q(T,b){let H=n.get(T);if(T.version>0&&H.__version!==T.version){xe(H,T,b);return}t.bindTexture(i.TEXTURE_2D_ARRAY,H.__webglTexture,i.TEXTURE0+b)}function K(T,b){let H=n.get(T);if(T.version>0&&H.__version!==T.version){xe(H,T,b);return}t.bindTexture(i.TEXTURE_3D,H.__webglTexture,i.TEXTURE0+b)}function $(T,b){let H=n.get(T);if(T.version>0&&H.__version!==T.version){Re(H,T,b);return}t.bindTexture(i.TEXTURE_CUBE_MAP,H.__webglTexture,i.TEXTURE0+b)}let se={[as]:i.REPEAT,[bn]:i.CLAMP_TO_EDGE,[Kr]:i.MIRRORED_REPEAT},le={[Wt]:i.NEAREST,[ho]:i.NEAREST_MIPMAP_NEAREST,[Wr]:i.NEAREST_MIPMAP_LINEAR,[gn]:i.LINEAR,[Zl]:i.LINEAR_MIPMAP_NEAREST,[Ii]:i.LINEAR_MIPMAP_LINEAR},_e={[Um]:i.NEVER,[Gm]:i.ALWAYS,[Om]:i.LESS,[df]:i.LEQUAL,[Fm]:i.EQUAL,[Hm]:i.GEQUAL,[Bm]:i.GREATER,[km]:i.NOTEQUAL};function Z(T,b,H){if(H?(i.texParameteri(T,i.TEXTURE_WRAP_S,se[b.wrapS]),i.texParameteri(T,i.TEXTURE_WRAP_T,se[b.wrapT]),(T===i.TEXTURE_3D||T===i.TEXTURE_2D_ARRAY)&&i.texParameteri(T,i.TEXTURE_WRAP_R,se[b.wrapR]),i.texParameteri(T,i.TEXTURE_MAG_FILTER,le[b.magFilter]),i.texParameteri(T,i.TEXTURE_MIN_FILTER,le[b.minFilter])):(i.texParameteri(T,i.TEXTURE_WRAP_S,i.CLAMP_TO_EDGE),i.texParameteri(T,i.TEXTURE_WRAP_T,i.CLAMP_TO_EDGE),(T===i.TEXTURE_3D||T===i.TEXTURE_2D_ARRAY)&&i.texParameteri(T,i.TEXTURE_WRAP_R,i.CLAMP_TO_EDGE),(b.wrapS!==bn||b.wrapT!==bn)&&console.warn("THREE.WebGLRenderer: Texture is not power of two. Texture.wrapS and Texture.wrapT should be set to THREE.ClampToEdgeWrapping."),i.texParameteri(T,i.TEXTURE_MAG_FILTER,A(b.magFilter)),i.texParameteri(T,i.TEXTURE_MIN_FILTER,A(b.minFilter)),b.minFilter!==Wt&&b.minFilter!==gn&&console.warn("THREE.WebGLRenderer: Texture is not power of two. Texture.minFilter should be set to THREE.NearestFilter or THREE.LinearFilter.")),b.compareFunction&&(i.texParameteri(T,i.TEXTURE_COMPARE_MODE,i.COMPARE_REF_TO_TEXTURE),i.texParameteri(T,i.TEXTURE_COMPARE_FUNC,_e[b.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){let ce=e.get("EXT_texture_filter_anisotropic");if(b.magFilter===Wt||b.minFilter!==Wr&&b.minFilter!==Ii||b.type===ci&&e.has("OES_texture_float_linear")===!1||o===!1&&b.type===$r&&e.has("OES_texture_half_float_linear")===!1)return;(b.anisotropy>1||n.get(b).__currentAnisotropy)&&(i.texParameterf(T,ce.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(b.anisotropy,s.getMaxAnisotropy())),n.get(b).__currentAnisotropy=b.anisotropy)}}function te(T,b){let H=!1;T.__webglInit===void 0&&(T.__webglInit=!0,b.addEventListener("dispose",R));let ce=b.source,oe=d.get(ce);oe===void 0&&(oe={},d.set(ce,oe));let he=B(b);if(he!==T.__cacheKey){oe[he]===void 0&&(oe[he]={texture:i.createTexture(),usedTimes:0},a.memory.textures++,H=!0),oe[he].usedTimes++;let Te=oe[T.__cacheKey];Te!==void 0&&(oe[T.__cacheKey].usedTimes--,Te.usedTimes===0&&E(b)),T.__cacheKey=he,T.__webglTexture=oe[he].texture}return H}function xe(T,b,H){let ce=i.TEXTURE_2D;(b.isDataArrayTexture||b.isCompressedArrayTexture)&&(ce=i.TEXTURE_2D_ARRAY),b.isData3DTexture&&(ce=i.TEXTURE_3D);let oe=te(T,b),he=b.source;t.bindTexture(ce,T.__webglTexture,i.TEXTURE0+H);let Te=n.get(he);if(he.version!==Te.__version||oe===!0){t.activeTexture(i.TEXTURE0+H);let ge=ht.getPrimaries(ht.workingColorSpace),be=b.colorSpace===Cn?null:ht.getPrimaries(b.colorSpace),Ie=b.colorSpace===Cn||ge===be?i.NONE:i.BROWSER_DEFAULT_WEBGL;i.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,b.flipY),i.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,b.premultiplyAlpha),i.pixelStorei(i.UNPACK_ALIGNMENT,b.unpackAlignment),i.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,Ie);let Ve=m(b)&&g(b.image)===!1,re=x(b.image,Ve,!1,s.maxTextureSize);re=Ge(b,re);let lt=g(re)||o,Ye=r.convert(b.format,b.colorSpace),De=r.convert(b.type),D=w(b.internalFormat,Ye,De,b.colorSpace,b.isVideoTexture);Z(ce,b,lt);let N,W=b.mipmaps,ee=o&&b.isVideoTexture!==!0&&D!==lf,ye=Te.__version===void 0||oe===!0,ne=P(b,re,lt);if(b.isDepthTexture)D=i.DEPTH_COMPONENT,o?b.type===ci?D=i.DEPTH_COMPONENT32F:b.type===Ai?D=i.DEPTH_COMPONENT24:b.type===is?D=i.DEPTH24_STENCIL8:D=i.DEPTH_COMPONENT16:b.type===ci&&console.error("WebGLRenderer: Floating point depth texture requires WebGL2."),b.format===ss&&D===i.DEPTH_COMPONENT&&b.type!==jl&&b.type!==Ai&&(console.warn("THREE.WebGLRenderer: Use UnsignedShortType or UnsignedIntType for DepthFormat DepthTexture."),b.type=Ai,De=r.convert(b.type)),b.format===rr&&D===i.DEPTH_COMPONENT&&(D=i.DEPTH_STENCIL,b.type!==is&&(console.warn("THREE.WebGLRenderer: Use UnsignedInt248Type for DepthStencilFormat DepthTexture."),b.type=is,De=r.convert(b.type))),ye&&(ee?t.texStorage2D(i.TEXTURE_2D,1,D,re.width,re.height):t.texImage2D(i.TEXTURE_2D,0,D,re.width,re.height,0,Ye,De,null));else if(b.isDataTexture)if(W.length>0&&lt){ee&&ye&&t.texStorage2D(i.TEXTURE_2D,ne,D,W[0].width,W[0].height);for(let X=0,C=W.length;X<C;X++)N=W[X],ee?t.texSubImage2D(i.TEXTURE_2D,X,0,0,N.width,N.height,Ye,De,N.data):t.texImage2D(i.TEXTURE_2D,X,D,N.width,N.height,0,Ye,De,N.data);b.generateMipmaps=!1}else ee?(ye&&t.texStorage2D(i.TEXTURE_2D,ne,D,re.width,re.height),t.texSubImage2D(i.TEXTURE_2D,0,0,0,re.width,re.height,Ye,De,re.data)):t.texImage2D(i.TEXTURE_2D,0,D,re.width,re.height,0,Ye,De,re.data);else if(b.isCompressedTexture)if(b.isCompressedArrayTexture){ee&&ye&&t.texStorage3D(i.TEXTURE_2D_ARRAY,ne,D,W[0].width,W[0].height,re.depth);for(let X=0,C=W.length;X<C;X++)N=W[X],b.format!==Rn?Ye!==null?ee?t.compressedTexSubImage3D(i.TEXTURE_2D_ARRAY,X,0,0,0,N.width,N.height,re.depth,Ye,N.data,0,0):t.compressedTexImage3D(i.TEXTURE_2D_ARRAY,X,D,N.width,N.height,re.depth,0,N.data,0,0):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):ee?t.texSubImage3D(i.TEXTURE_2D_ARRAY,X,0,0,0,N.width,N.height,re.depth,Ye,De,N.data):t.texImage3D(i.TEXTURE_2D_ARRAY,X,D,N.width,N.height,re.depth,0,Ye,De,N.data)}else{ee&&ye&&t.texStorage2D(i.TEXTURE_2D,ne,D,W[0].width,W[0].height);for(let X=0,C=W.length;X<C;X++)N=W[X],b.format!==Rn?Ye!==null?ee?t.compressedTexSubImage2D(i.TEXTURE_2D,X,0,0,N.width,N.height,Ye,N.data):t.compressedTexImage2D(i.TEXTURE_2D,X,D,N.width,N.height,0,N.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):ee?t.texSubImage2D(i.TEXTURE_2D,X,0,0,N.width,N.height,Ye,De,N.data):t.texImage2D(i.TEXTURE_2D,X,D,N.width,N.height,0,Ye,De,N.data)}else if(b.isDataArrayTexture)ee?(ye&&t.texStorage3D(i.TEXTURE_2D_ARRAY,ne,D,re.width,re.height,re.depth),t.texSubImage3D(i.TEXTURE_2D_ARRAY,0,0,0,0,re.width,re.height,re.depth,Ye,De,re.data)):t.texImage3D(i.TEXTURE_2D_ARRAY,0,D,re.width,re.height,re.depth,0,Ye,De,re.data);else if(b.isData3DTexture)ee?(ye&&t.texStorage3D(i.TEXTURE_3D,ne,D,re.width,re.height,re.depth),t.texSubImage3D(i.TEXTURE_3D,0,0,0,0,re.width,re.height,re.depth,Ye,De,re.data)):t.texImage3D(i.TEXTURE_3D,0,D,re.width,re.height,re.depth,0,Ye,De,re.data);else if(b.isFramebufferTexture){if(ye)if(ee)t.texStorage2D(i.TEXTURE_2D,ne,D,re.width,re.height);else{let X=re.width,C=re.height;for(let Q=0;Q<ne;Q++)t.texImage2D(i.TEXTURE_2D,Q,D,X,C,0,Ye,De,null),X>>=1,C>>=1}}else if(W.length>0&&lt){ee&&ye&&t.texStorage2D(i.TEXTURE_2D,ne,D,W[0].width,W[0].height);for(let X=0,C=W.length;X<C;X++)N=W[X],ee?t.texSubImage2D(i.TEXTURE_2D,X,0,0,Ye,De,N):t.texImage2D(i.TEXTURE_2D,X,D,Ye,De,N);b.generateMipmaps=!1}else ee?(ye&&t.texStorage2D(i.TEXTURE_2D,ne,D,re.width,re.height),t.texSubImage2D(i.TEXTURE_2D,0,0,0,Ye,De,re)):t.texImage2D(i.TEXTURE_2D,0,D,Ye,De,re);y(b,lt)&&_(ce),Te.__version=he.version,b.onUpdate&&b.onUpdate(b)}T.__version=b.version}function Re(T,b,H){if(b.image.length!==6)return;let ce=te(T,b),oe=b.source;t.bindTexture(i.TEXTURE_CUBE_MAP,T.__webglTexture,i.TEXTURE0+H);let he=n.get(oe);if(oe.version!==he.__version||ce===!0){t.activeTexture(i.TEXTURE0+H);let Te=ht.getPrimaries(ht.workingColorSpace),ge=b.colorSpace===Cn?null:ht.getPrimaries(b.colorSpace),be=b.colorSpace===Cn||Te===ge?i.NONE:i.BROWSER_DEFAULT_WEBGL;i.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,b.flipY),i.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,b.premultiplyAlpha),i.pixelStorei(i.UNPACK_ALIGNMENT,b.unpackAlignment),i.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,be);let Ie=b.isCompressedTexture||b.image[0].isCompressedTexture,Ve=b.image[0]&&b.image[0].isDataTexture,re=[];for(let X=0;X<6;X++)!Ie&&!Ve?re[X]=x(b.image[X],!1,!0,s.maxCubemapSize):re[X]=Ve?b.image[X].image:b.image[X],re[X]=Ge(b,re[X]);let lt=re[0],Ye=g(lt)||o,De=r.convert(b.format,b.colorSpace),D=r.convert(b.type),N=w(b.internalFormat,De,D,b.colorSpace),W=o&&b.isVideoTexture!==!0,ee=he.__version===void 0||ce===!0,ye=P(b,lt,Ye);Z(i.TEXTURE_CUBE_MAP,b,Ye);let ne;if(Ie){W&&ee&&t.texStorage2D(i.TEXTURE_CUBE_MAP,ye,N,lt.width,lt.height);for(let X=0;X<6;X++){ne=re[X].mipmaps;for(let C=0;C<ne.length;C++){let Q=ne[C];b.format!==Rn?De!==null?W?t.compressedTexSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+X,C,0,0,Q.width,Q.height,De,Q.data):t.compressedTexImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+X,C,N,Q.width,Q.height,0,Q.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):W?t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+X,C,0,0,Q.width,Q.height,De,D,Q.data):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+X,C,N,Q.width,Q.height,0,De,D,Q.data)}}}else{ne=b.mipmaps,W&&ee&&(ne.length>0&&ye++,t.texStorage2D(i.TEXTURE_CUBE_MAP,ye,N,re[0].width,re[0].height));for(let X=0;X<6;X++)if(Ve){W?t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+X,0,0,0,re[X].width,re[X].height,De,D,re[X].data):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+X,0,N,re[X].width,re[X].height,0,De,D,re[X].data);for(let C=0;C<ne.length;C++){let ie=ne[C].image[X].image;W?t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+X,C+1,0,0,ie.width,ie.height,De,D,ie.data):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+X,C+1,N,ie.width,ie.height,0,De,D,ie.data)}}else{W?t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+X,0,0,0,De,D,re[X]):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+X,0,N,De,D,re[X]);for(let C=0;C<ne.length;C++){let Q=ne[C];W?t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+X,C+1,0,0,De,D,Q.image[X]):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+X,C+1,N,De,D,Q.image[X])}}}y(b,Ye)&&_(i.TEXTURE_CUBE_MAP),he.__version=oe.version,b.onUpdate&&b.onUpdate(b)}T.__version=b.version}function we(T,b,H,ce,oe,he){let Te=r.convert(H.format,H.colorSpace),ge=r.convert(H.type),be=w(H.internalFormat,Te,ge,H.colorSpace);if(!n.get(b).__hasExternalTextures){let Ve=Math.max(1,b.width>>he),re=Math.max(1,b.height>>he);oe===i.TEXTURE_3D||oe===i.TEXTURE_2D_ARRAY?t.texImage3D(oe,he,be,Ve,re,b.depth,0,Te,ge,null):t.texImage2D(oe,he,be,Ve,re,0,Te,ge,null)}t.bindFramebuffer(i.FRAMEBUFFER,T),Se(b)?c.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,ce,oe,n.get(H).__webglTexture,0,ke(b)):(oe===i.TEXTURE_2D||oe>=i.TEXTURE_CUBE_MAP_POSITIVE_X&&oe<=i.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&i.framebufferTexture2D(i.FRAMEBUFFER,ce,oe,n.get(H).__webglTexture,he),t.bindFramebuffer(i.FRAMEBUFFER,null)}function Be(T,b,H){if(i.bindRenderbuffer(i.RENDERBUFFER,T),b.depthBuffer&&!b.stencilBuffer){let ce=o===!0?i.DEPTH_COMPONENT24:i.DEPTH_COMPONENT16;if(H||Se(b)){let oe=b.depthTexture;oe&&oe.isDepthTexture&&(oe.type===ci?ce=i.DEPTH_COMPONENT32F:oe.type===Ai&&(ce=i.DEPTH_COMPONENT24));let he=ke(b);Se(b)?c.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,he,ce,b.width,b.height):i.renderbufferStorageMultisample(i.RENDERBUFFER,he,ce,b.width,b.height)}else i.renderbufferStorage(i.RENDERBUFFER,ce,b.width,b.height);i.framebufferRenderbuffer(i.FRAMEBUFFER,i.DEPTH_ATTACHMENT,i.RENDERBUFFER,T)}else if(b.depthBuffer&&b.stencilBuffer){let ce=ke(b);H&&Se(b)===!1?i.renderbufferStorageMultisample(i.RENDERBUFFER,ce,i.DEPTH24_STENCIL8,b.width,b.height):Se(b)?c.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,ce,i.DEPTH24_STENCIL8,b.width,b.height):i.renderbufferStorage(i.RENDERBUFFER,i.DEPTH_STENCIL,b.width,b.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.DEPTH_STENCIL_ATTACHMENT,i.RENDERBUFFER,T)}else{let ce=b.isWebGLMultipleRenderTargets===!0?b.texture:[b.texture];for(let oe=0;oe<ce.length;oe++){let he=ce[oe],Te=r.convert(he.format,he.colorSpace),ge=r.convert(he.type),be=w(he.internalFormat,Te,ge,he.colorSpace),Ie=ke(b);H&&Se(b)===!1?i.renderbufferStorageMultisample(i.RENDERBUFFER,Ie,be,b.width,b.height):Se(b)?c.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,Ie,be,b.width,b.height):i.renderbufferStorage(i.RENDERBUFFER,be,b.width,b.height)}}i.bindRenderbuffer(i.RENDERBUFFER,null)}function He(T,b){if(b&&b.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(t.bindFramebuffer(i.FRAMEBUFFER,T),!(b.depthTexture&&b.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");(!n.get(b.depthTexture).__webglTexture||b.depthTexture.image.width!==b.width||b.depthTexture.image.height!==b.height)&&(b.depthTexture.image.width=b.width,b.depthTexture.image.height=b.height,b.depthTexture.needsUpdate=!0),J(b.depthTexture,0);let ce=n.get(b.depthTexture).__webglTexture,oe=ke(b);if(b.depthTexture.format===ss)Se(b)?c.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,i.DEPTH_ATTACHMENT,i.TEXTURE_2D,ce,0,oe):i.framebufferTexture2D(i.FRAMEBUFFER,i.DEPTH_ATTACHMENT,i.TEXTURE_2D,ce,0);else if(b.depthTexture.format===rr)Se(b)?c.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,i.DEPTH_STENCIL_ATTACHMENT,i.TEXTURE_2D,ce,0,oe):i.framebufferTexture2D(i.FRAMEBUFFER,i.DEPTH_STENCIL_ATTACHMENT,i.TEXTURE_2D,ce,0);else throw new Error("Unknown depthTexture format")}function Pe(T){let b=n.get(T),H=T.isWebGLCubeRenderTarget===!0;if(T.depthTexture&&!b.__autoAllocateDepthBuffer){if(H)throw new Error("target.depthTexture not supported in Cube render targets");He(b.__webglFramebuffer,T)}else if(H){b.__webglDepthbuffer=[];for(let ce=0;ce<6;ce++)t.bindFramebuffer(i.FRAMEBUFFER,b.__webglFramebuffer[ce]),b.__webglDepthbuffer[ce]=i.createRenderbuffer(),Be(b.__webglDepthbuffer[ce],T,!1)}else t.bindFramebuffer(i.FRAMEBUFFER,b.__webglFramebuffer),b.__webglDepthbuffer=i.createRenderbuffer(),Be(b.__webglDepthbuffer,T,!1);t.bindFramebuffer(i.FRAMEBUFFER,null)}function qe(T,b,H){let ce=n.get(T);b!==void 0&&we(ce.__webglFramebuffer,T,T.texture,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,0),H!==void 0&&Pe(T)}function k(T){let b=T.texture,H=n.get(T),ce=n.get(b);T.addEventListener("dispose",F),T.isWebGLMultipleRenderTargets!==!0&&(ce.__webglTexture===void 0&&(ce.__webglTexture=i.createTexture()),ce.__version=b.version,a.memory.textures++);let oe=T.isWebGLCubeRenderTarget===!0,he=T.isWebGLMultipleRenderTargets===!0,Te=g(T)||o;if(oe){H.__webglFramebuffer=[];for(let ge=0;ge<6;ge++)if(o&&b.mipmaps&&b.mipmaps.length>0){H.__webglFramebuffer[ge]=[];for(let be=0;be<b.mipmaps.length;be++)H.__webglFramebuffer[ge][be]=i.createFramebuffer()}else H.__webglFramebuffer[ge]=i.createFramebuffer()}else{if(o&&b.mipmaps&&b.mipmaps.length>0){H.__webglFramebuffer=[];for(let ge=0;ge<b.mipmaps.length;ge++)H.__webglFramebuffer[ge]=i.createFramebuffer()}else H.__webglFramebuffer=i.createFramebuffer();if(he)if(s.drawBuffers){let ge=T.texture;for(let be=0,Ie=ge.length;be<Ie;be++){let Ve=n.get(ge[be]);Ve.__webglTexture===void 0&&(Ve.__webglTexture=i.createTexture(),a.memory.textures++)}}else console.warn("THREE.WebGLRenderer: WebGLMultipleRenderTargets can only be used with WebGL2 or WEBGL_draw_buffers extension.");if(o&&T.samples>0&&Se(T)===!1){let ge=he?b:[b];H.__webglMultisampledFramebuffer=i.createFramebuffer(),H.__webglColorRenderbuffer=[],t.bindFramebuffer(i.FRAMEBUFFER,H.__webglMultisampledFramebuffer);for(let be=0;be<ge.length;be++){let Ie=ge[be];H.__webglColorRenderbuffer[be]=i.createRenderbuffer(),i.bindRenderbuffer(i.RENDERBUFFER,H.__webglColorRenderbuffer[be]);let Ve=r.convert(Ie.format,Ie.colorSpace),re=r.convert(Ie.type),lt=w(Ie.internalFormat,Ve,re,Ie.colorSpace,T.isXRRenderTarget===!0),Ye=ke(T);i.renderbufferStorageMultisample(i.RENDERBUFFER,Ye,lt,T.width,T.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+be,i.RENDERBUFFER,H.__webglColorRenderbuffer[be])}i.bindRenderbuffer(i.RENDERBUFFER,null),T.depthBuffer&&(H.__webglDepthRenderbuffer=i.createRenderbuffer(),Be(H.__webglDepthRenderbuffer,T,!0)),t.bindFramebuffer(i.FRAMEBUFFER,null)}}if(oe){t.bindTexture(i.TEXTURE_CUBE_MAP,ce.__webglTexture),Z(i.TEXTURE_CUBE_MAP,b,Te);for(let ge=0;ge<6;ge++)if(o&&b.mipmaps&&b.mipmaps.length>0)for(let be=0;be<b.mipmaps.length;be++)we(H.__webglFramebuffer[ge][be],T,b,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+ge,be);else we(H.__webglFramebuffer[ge],T,b,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+ge,0);y(b,Te)&&_(i.TEXTURE_CUBE_MAP),t.unbindTexture()}else if(he){let ge=T.texture;for(let be=0,Ie=ge.length;be<Ie;be++){let Ve=ge[be],re=n.get(Ve);t.bindTexture(i.TEXTURE_2D,re.__webglTexture),Z(i.TEXTURE_2D,Ve,Te),we(H.__webglFramebuffer,T,Ve,i.COLOR_ATTACHMENT0+be,i.TEXTURE_2D,0),y(Ve,Te)&&_(i.TEXTURE_2D)}t.unbindTexture()}else{let ge=i.TEXTURE_2D;if((T.isWebGL3DRenderTarget||T.isWebGLArrayRenderTarget)&&(o?ge=T.isWebGL3DRenderTarget?i.TEXTURE_3D:i.TEXTURE_2D_ARRAY:console.error("THREE.WebGLTextures: THREE.Data3DTexture and THREE.DataArrayTexture only supported with WebGL2.")),t.bindTexture(ge,ce.__webglTexture),Z(ge,b,Te),o&&b.mipmaps&&b.mipmaps.length>0)for(let be=0;be<b.mipmaps.length;be++)we(H.__webglFramebuffer[be],T,b,i.COLOR_ATTACHMENT0,ge,be);else we(H.__webglFramebuffer,T,b,i.COLOR_ATTACHMENT0,ge,0);y(b,Te)&&_(ge),t.unbindTexture()}T.depthBuffer&&Pe(T)}function jt(T){let b=g(T)||o,H=T.isWebGLMultipleRenderTargets===!0?T.texture:[T.texture];for(let ce=0,oe=H.length;ce<oe;ce++){let he=H[ce];if(y(he,b)){let Te=T.isWebGLCubeRenderTarget?i.TEXTURE_CUBE_MAP:i.TEXTURE_2D,ge=n.get(he).__webglTexture;t.bindTexture(Te,ge),_(Te),t.unbindTexture()}}}function Le(T){if(o&&T.samples>0&&Se(T)===!1){let b=T.isWebGLMultipleRenderTargets?T.texture:[T.texture],H=T.width,ce=T.height,oe=i.COLOR_BUFFER_BIT,he=[],Te=T.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,ge=n.get(T),be=T.isWebGLMultipleRenderTargets===!0;if(be)for(let Ie=0;Ie<b.length;Ie++)t.bindFramebuffer(i.FRAMEBUFFER,ge.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+Ie,i.RENDERBUFFER,null),t.bindFramebuffer(i.FRAMEBUFFER,ge.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+Ie,i.TEXTURE_2D,null,0);t.bindFramebuffer(i.READ_FRAMEBUFFER,ge.__webglMultisampledFramebuffer),t.bindFramebuffer(i.DRAW_FRAMEBUFFER,ge.__webglFramebuffer);for(let Ie=0;Ie<b.length;Ie++){he.push(i.COLOR_ATTACHMENT0+Ie),T.depthBuffer&&he.push(Te);let Ve=ge.__ignoreDepthValues!==void 0?ge.__ignoreDepthValues:!1;if(Ve===!1&&(T.depthBuffer&&(oe|=i.DEPTH_BUFFER_BIT),T.stencilBuffer&&(oe|=i.STENCIL_BUFFER_BIT)),be&&i.framebufferRenderbuffer(i.READ_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.RENDERBUFFER,ge.__webglColorRenderbuffer[Ie]),Ve===!0&&(i.invalidateFramebuffer(i.READ_FRAMEBUFFER,[Te]),i.invalidateFramebuffer(i.DRAW_FRAMEBUFFER,[Te])),be){let re=n.get(b[Ie]).__webglTexture;i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,re,0)}i.blitFramebuffer(0,0,H,ce,0,0,H,ce,oe,i.NEAREST),l&&i.invalidateFramebuffer(i.READ_FRAMEBUFFER,he)}if(t.bindFramebuffer(i.READ_FRAMEBUFFER,null),t.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),be)for(let Ie=0;Ie<b.length;Ie++){t.bindFramebuffer(i.FRAMEBUFFER,ge.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+Ie,i.RENDERBUFFER,ge.__webglColorRenderbuffer[Ie]);let Ve=n.get(b[Ie]).__webglTexture;t.bindFramebuffer(i.FRAMEBUFFER,ge.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+Ie,i.TEXTURE_2D,Ve,0)}t.bindFramebuffer(i.DRAW_FRAMEBUFFER,ge.__webglMultisampledFramebuffer)}}function ke(T){return Math.min(s.maxSamples,T.samples)}function Se(T){let b=n.get(T);return o&&T.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&b.__useRenderToTexture!==!1}function bt(T){let b=a.render.frame;h.get(T)!==b&&(h.set(T,b),T.update())}function Ge(T,b){let H=T.colorSpace,ce=T.format,oe=T.type;return T.isCompressedTexture===!0||T.isVideoTexture===!0||T.format===gl||H!==qt&&H!==Cn&&(ht.getTransfer(H)===Et?o===!1?e.has("EXT_sRGB")===!0&&ce===Rn?(T.format=gl,T.minFilter=gn,T.generateMipmaps=!1):b=_o.sRGBToLinear(b):(ce!==Rn||oe!==Li)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",H)),b}this.allocateTextureUnit=z,this.resetTextureUnits=ae,this.setTexture2D=J,this.setTexture2DArray=q,this.setTexture3D=K,this.setTextureCube=$,this.rebindTextures=qe,this.setupRenderTarget=k,this.updateRenderTargetMipmap=jt,this.updateMultisampleRenderTarget=Le,this.setupDepthRenderbuffer=Pe,this.setupFrameBufferTexture=we,this.useMultisampledRTT=Se}function Xy(i,e,t){let n=t.isWebGL2;function s(r,a=Cn){let o,c=ht.getTransfer(a);if(r===Li)return i.UNSIGNED_BYTE;if(r===sf)return i.UNSIGNED_SHORT_4_4_4_4;if(r===rf)return i.UNSIGNED_SHORT_5_5_5_1;if(r===wm)return i.BYTE;if(r===Sm)return i.SHORT;if(r===jl)return i.UNSIGNED_SHORT;if(r===nf)return i.INT;if(r===Ai)return i.UNSIGNED_INT;if(r===ci)return i.FLOAT;if(r===$r)return n?i.HALF_FLOAT:(o=e.get("OES_texture_half_float"),o!==null?o.HALF_FLOAT_OES:null);if(r===Em)return i.ALPHA;if(r===Rn)return i.RGBA;if(r===Tm)return i.LUMINANCE;if(r===Am)return i.LUMINANCE_ALPHA;if(r===ss)return i.DEPTH_COMPONENT;if(r===rr)return i.DEPTH_STENCIL;if(r===gl)return o=e.get("EXT_sRGB"),o!==null?o.SRGB_ALPHA_EXT:null;if(r===Rm)return i.RED;if(r===af)return i.RED_INTEGER;if(r===Cm)return i.RG;if(r===of)return i.RG_INTEGER;if(r===cf)return i.RGBA_INTEGER;if(r===Lc||r===Ic||r===zc||r===Dc)if(c===Et)if(o=e.get("WEBGL_compressed_texture_s3tc_srgb"),o!==null){if(r===Lc)return o.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(r===Ic)return o.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(r===zc)return o.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(r===Dc)return o.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(o=e.get("WEBGL_compressed_texture_s3tc"),o!==null){if(r===Lc)return o.COMPRESSED_RGB_S3TC_DXT1_EXT;if(r===Ic)return o.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(r===zc)return o.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(r===Dc)return o.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(r===bu||r===wu||r===Su||r===Eu)if(o=e.get("WEBGL_compressed_texture_pvrtc"),o!==null){if(r===bu)return o.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(r===wu)return o.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(r===Su)return o.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(r===Eu)return o.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(r===lf)return o=e.get("WEBGL_compressed_texture_etc1"),o!==null?o.COMPRESSED_RGB_ETC1_WEBGL:null;if(r===Tu||r===Au)if(o=e.get("WEBGL_compressed_texture_etc"),o!==null){if(r===Tu)return c===Et?o.COMPRESSED_SRGB8_ETC2:o.COMPRESSED_RGB8_ETC2;if(r===Au)return c===Et?o.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:o.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(r===Ru||r===Cu||r===Pu||r===Lu||r===Iu||r===zu||r===Du||r===Nu||r===Uu||r===Ou||r===Fu||r===Bu||r===ku||r===Hu)if(o=e.get("WEBGL_compressed_texture_astc"),o!==null){if(r===Ru)return c===Et?o.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:o.COMPRESSED_RGBA_ASTC_4x4_KHR;if(r===Cu)return c===Et?o.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:o.COMPRESSED_RGBA_ASTC_5x4_KHR;if(r===Pu)return c===Et?o.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:o.COMPRESSED_RGBA_ASTC_5x5_KHR;if(r===Lu)return c===Et?o.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:o.COMPRESSED_RGBA_ASTC_6x5_KHR;if(r===Iu)return c===Et?o.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:o.COMPRESSED_RGBA_ASTC_6x6_KHR;if(r===zu)return c===Et?o.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:o.COMPRESSED_RGBA_ASTC_8x5_KHR;if(r===Du)return c===Et?o.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:o.COMPRESSED_RGBA_ASTC_8x6_KHR;if(r===Nu)return c===Et?o.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:o.COMPRESSED_RGBA_ASTC_8x8_KHR;if(r===Uu)return c===Et?o.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:o.COMPRESSED_RGBA_ASTC_10x5_KHR;if(r===Ou)return c===Et?o.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:o.COMPRESSED_RGBA_ASTC_10x6_KHR;if(r===Fu)return c===Et?o.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:o.COMPRESSED_RGBA_ASTC_10x8_KHR;if(r===Bu)return c===Et?o.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:o.COMPRESSED_RGBA_ASTC_10x10_KHR;if(r===ku)return c===Et?o.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:o.COMPRESSED_RGBA_ASTC_12x10_KHR;if(r===Hu)return c===Et?o.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:o.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(r===Nc||r===Gu||r===Vu)if(o=e.get("EXT_texture_compression_bptc"),o!==null){if(r===Nc)return c===Et?o.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:o.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(r===Gu)return o.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(r===Vu)return o.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(r===Pm||r===Wu||r===Xu||r===qu)if(o=e.get("EXT_texture_compression_rgtc"),o!==null){if(r===Nc)return o.COMPRESSED_RED_RGTC1_EXT;if(r===Wu)return o.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(r===Xu)return o.COMPRESSED_RED_GREEN_RGTC2_EXT;if(r===qu)return o.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return r===is?n?i.UNSIGNED_INT_24_8:(o=e.get("WEBGL_depth_texture"),o!==null?o.UNSIGNED_INT_24_8_WEBGL:null):i[r]!==void 0?i[r]:null}return{convert:s}}var Pl=class extends Xt{constructor(e=[]){super(),this.isArrayCamera=!0,this.cameras=e}},We=class extends St{constructor(){super(),this.isGroup=!0,this.type="Group"}},qy={type:"move"},Zr=class{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new We,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new We,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new L,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new L),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new We,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new L,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new L),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){let t=this._hand;if(t)for(let n of e.hand.values())this._getHandJoint(t,n)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,t,n){let s=null,r=null,a=null,o=this._targetRay,c=this._grip,l=this._hand;if(e&&t.session.visibilityState!=="visible-blurred"){if(l&&e.hand){a=!0;for(let x of e.hand.values()){let g=t.getJointPose(x,n),m=this._getHandJoint(l,x);g!==null&&(m.matrix.fromArray(g.transform.matrix),m.matrix.decompose(m.position,m.rotation,m.scale),m.matrixWorldNeedsUpdate=!0,m.jointRadius=g.radius),m.visible=g!==null}let h=l.joints["index-finger-tip"],u=l.joints["thumb-tip"],d=h.position.distanceTo(u.position),f=.02,p=.005;l.inputState.pinching&&d>f+p?(l.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!l.inputState.pinching&&d<=f-p&&(l.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else c!==null&&e.gripSpace&&(r=t.getPose(e.gripSpace,n),r!==null&&(c.matrix.fromArray(r.transform.matrix),c.matrix.decompose(c.position,c.rotation,c.scale),c.matrixWorldNeedsUpdate=!0,r.linearVelocity?(c.hasLinearVelocity=!0,c.linearVelocity.copy(r.linearVelocity)):c.hasLinearVelocity=!1,r.angularVelocity?(c.hasAngularVelocity=!0,c.angularVelocity.copy(r.angularVelocity)):c.hasAngularVelocity=!1));o!==null&&(s=t.getPose(e.targetRaySpace,n),s===null&&r!==null&&(s=r),s!==null&&(o.matrix.fromArray(s.transform.matrix),o.matrix.decompose(o.position,o.rotation,o.scale),o.matrixWorldNeedsUpdate=!0,s.linearVelocity?(o.hasLinearVelocity=!0,o.linearVelocity.copy(s.linearVelocity)):o.hasLinearVelocity=!1,s.angularVelocity?(o.hasAngularVelocity=!0,o.angularVelocity.copy(s.angularVelocity)):o.hasAngularVelocity=!1,this.dispatchEvent(qy)))}return o!==null&&(o.visible=s!==null),c!==null&&(c.visible=r!==null),l!==null&&(l.visible=a!==null),this}_getHandJoint(e,t){if(e.joints[t.jointName]===void 0){let n=new We;n.matrixAutoUpdate=!1,n.visible=!1,e.joints[t.jointName]=n,e.add(n)}return e.joints[t.jointName]}},Ll=class extends hi{constructor(e,t){super();let n=this,s=null,r=1,a=null,o="local-floor",c=1,l=null,h=null,u=null,d=null,f=null,p=null,x=t.getContextAttributes(),g=null,m=null,y=[],_=[],w=new ze,P=null,A=new Xt;A.layers.enable(1),A.viewport=new _t;let R=new Xt;R.layers.enable(2),R.viewport=new _t;let F=[A,R],M=new Pl;M.layers.enable(1),M.layers.enable(2);let E=null,O=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(Z){let te=y[Z];return te===void 0&&(te=new Zr,y[Z]=te),te.getTargetRaySpace()},this.getControllerGrip=function(Z){let te=y[Z];return te===void 0&&(te=new Zr,y[Z]=te),te.getGripSpace()},this.getHand=function(Z){let te=y[Z];return te===void 0&&(te=new Zr,y[Z]=te),te.getHandSpace()};function j(Z){let te=_.indexOf(Z.inputSource);if(te===-1)return;let xe=y[te];xe!==void 0&&(xe.update(Z.inputSource,Z.frame,l||a),xe.dispatchEvent({type:Z.type,data:Z.inputSource}))}function ae(){s.removeEventListener("select",j),s.removeEventListener("selectstart",j),s.removeEventListener("selectend",j),s.removeEventListener("squeeze",j),s.removeEventListener("squeezestart",j),s.removeEventListener("squeezeend",j),s.removeEventListener("end",ae),s.removeEventListener("inputsourceschange",z);for(let Z=0;Z<y.length;Z++){let te=_[Z];te!==null&&(_[Z]=null,y[Z].disconnect(te))}E=null,O=null,e.setRenderTarget(g),f=null,d=null,u=null,s=null,m=null,_e.stop(),n.isPresenting=!1,e.setPixelRatio(P),e.setSize(w.width,w.height,!1),n.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(Z){r=Z,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(Z){o=Z,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return l||a},this.setReferenceSpace=function(Z){l=Z},this.getBaseLayer=function(){return d!==null?d:f},this.getBinding=function(){return u},this.getFrame=function(){return p},this.getSession=function(){return s},this.setSession=async function(Z){if(s=Z,s!==null){if(g=e.getRenderTarget(),s.addEventListener("select",j),s.addEventListener("selectstart",j),s.addEventListener("selectend",j),s.addEventListener("squeeze",j),s.addEventListener("squeezestart",j),s.addEventListener("squeezeend",j),s.addEventListener("end",ae),s.addEventListener("inputsourceschange",z),x.xrCompatible!==!0&&await t.makeXRCompatible(),P=e.getPixelRatio(),e.getSize(w),s.renderState.layers===void 0||e.capabilities.isWebGL2===!1){let te={antialias:s.renderState.layers===void 0?x.antialias:!0,alpha:!0,depth:x.depth,stencil:x.stencil,framebufferScaleFactor:r};f=new XRWebGLLayer(s,t,te),s.updateRenderState({baseLayer:f}),e.setPixelRatio(1),e.setSize(f.framebufferWidth,f.framebufferHeight,!1),m=new ui(f.framebufferWidth,f.framebufferHeight,{format:Rn,type:Li,colorSpace:e.outputColorSpace,stencilBuffer:x.stencil})}else{let te=null,xe=null,Re=null;x.depth&&(Re=x.stencil?t.DEPTH24_STENCIL8:t.DEPTH_COMPONENT24,te=x.stencil?rr:ss,xe=x.stencil?is:Ai);let we={colorFormat:t.RGBA8,depthFormat:Re,scaleFactor:r};u=new XRWebGLBinding(s,t),d=u.createProjectionLayer(we),s.updateRenderState({layers:[d]}),e.setPixelRatio(1),e.setSize(d.textureWidth,d.textureHeight,!1),m=new ui(d.textureWidth,d.textureHeight,{format:Rn,type:Li,depthTexture:new Ao(d.textureWidth,d.textureHeight,xe,void 0,void 0,void 0,void 0,void 0,void 0,te),stencilBuffer:x.stencil,colorSpace:e.outputColorSpace,samples:x.antialias?4:0});let Be=e.properties.get(m);Be.__ignoreDepthValues=d.ignoreDepthValues}m.isXRRenderTarget=!0,this.setFoveation(c),l=null,a=await s.requestReferenceSpace(o),_e.setContext(s),_e.start(),n.isPresenting=!0,n.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(s!==null)return s.environmentBlendMode};function z(Z){for(let te=0;te<Z.removed.length;te++){let xe=Z.removed[te],Re=_.indexOf(xe);Re>=0&&(_[Re]=null,y[Re].disconnect(xe))}for(let te=0;te<Z.added.length;te++){let xe=Z.added[te],Re=_.indexOf(xe);if(Re===-1){for(let Be=0;Be<y.length;Be++)if(Be>=_.length){_.push(xe),Re=Be;break}else if(_[Be]===null){_[Be]=xe,Re=Be;break}if(Re===-1)break}let we=y[Re];we&&we.connect(xe)}}let B=new L,J=new L;function q(Z,te,xe){B.setFromMatrixPosition(te.matrixWorld),J.setFromMatrixPosition(xe.matrixWorld);let Re=B.distanceTo(J),we=te.projectionMatrix.elements,Be=xe.projectionMatrix.elements,He=we[14]/(we[10]-1),Pe=we[14]/(we[10]+1),qe=(we[9]+1)/we[5],k=(we[9]-1)/we[5],jt=(we[8]-1)/we[0],Le=(Be[8]+1)/Be[0],ke=He*jt,Se=He*Le,bt=Re/(-jt+Le),Ge=bt*-jt;te.matrixWorld.decompose(Z.position,Z.quaternion,Z.scale),Z.translateX(Ge),Z.translateZ(bt),Z.matrixWorld.compose(Z.position,Z.quaternion,Z.scale),Z.matrixWorldInverse.copy(Z.matrixWorld).invert();let T=He+bt,b=Pe+bt,H=ke-Ge,ce=Se+(Re-Ge),oe=qe*Pe/b*T,he=k*Pe/b*T;Z.projectionMatrix.makePerspective(H,ce,oe,he,T,b),Z.projectionMatrixInverse.copy(Z.projectionMatrix).invert()}function K(Z,te){te===null?Z.matrixWorld.copy(Z.matrix):Z.matrixWorld.multiplyMatrices(te.matrixWorld,Z.matrix),Z.matrixWorldInverse.copy(Z.matrixWorld).invert()}this.updateCamera=function(Z){if(s===null)return;M.near=R.near=A.near=Z.near,M.far=R.far=A.far=Z.far,(E!==M.near||O!==M.far)&&(s.updateRenderState({depthNear:M.near,depthFar:M.far}),E=M.near,O=M.far);let te=Z.parent,xe=M.cameras;K(M,te);for(let Re=0;Re<xe.length;Re++)K(xe[Re],te);xe.length===2?q(M,A,R):M.projectionMatrix.copy(A.projectionMatrix),$(Z,M,te)};function $(Z,te,xe){xe===null?Z.matrix.copy(te.matrixWorld):(Z.matrix.copy(xe.matrixWorld),Z.matrix.invert(),Z.matrix.multiply(te.matrixWorld)),Z.matrix.decompose(Z.position,Z.quaternion,Z.scale),Z.updateMatrixWorld(!0),Z.projectionMatrix.copy(te.projectionMatrix),Z.projectionMatrixInverse.copy(te.projectionMatrixInverse),Z.isPerspectiveCamera&&(Z.fov=or*2*Math.atan(1/Z.projectionMatrix.elements[5]),Z.zoom=1)}this.getCamera=function(){return M},this.getFoveation=function(){if(!(d===null&&f===null))return c},this.setFoveation=function(Z){c=Z,d!==null&&(d.fixedFoveation=Z),f!==null&&f.fixedFoveation!==void 0&&(f.fixedFoveation=Z)};let se=null;function le(Z,te){if(h=te.getViewerPose(l||a),p=te,h!==null){let xe=h.views;f!==null&&(e.setRenderTargetFramebuffer(m,f.framebuffer),e.setRenderTarget(m));let Re=!1;xe.length!==M.cameras.length&&(M.cameras.length=0,Re=!0);for(let we=0;we<xe.length;we++){let Be=xe[we],He=null;if(f!==null)He=f.getViewport(Be);else{let qe=u.getViewSubImage(d,Be);He=qe.viewport,we===0&&(e.setRenderTargetTextures(m,qe.colorTexture,d.ignoreDepthValues?void 0:qe.depthStencilTexture),e.setRenderTarget(m))}let Pe=F[we];Pe===void 0&&(Pe=new Xt,Pe.layers.enable(we),Pe.viewport=new _t,F[we]=Pe),Pe.matrix.fromArray(Be.transform.matrix),Pe.matrix.decompose(Pe.position,Pe.quaternion,Pe.scale),Pe.projectionMatrix.fromArray(Be.projectionMatrix),Pe.projectionMatrixInverse.copy(Pe.projectionMatrix).invert(),Pe.viewport.set(He.x,He.y,He.width,He.height),we===0&&(M.matrix.copy(Pe.matrix),M.matrix.decompose(M.position,M.quaternion,M.scale)),Re===!0&&M.cameras.push(Pe)}}for(let xe=0;xe<y.length;xe++){let Re=_[xe],we=y[xe];Re!==null&&we!==void 0&&we.update(Re,te,l||a)}se&&se(Z,te),te.detectedPlanes&&n.dispatchEvent({type:"planesdetected",data:te}),p=null}let _e=new gf;_e.setAnimationLoop(le),this.setAnimationLoop=function(Z){se=Z},this.dispose=function(){}}};function Yy(i,e){function t(g,m){g.matrixAutoUpdate===!0&&g.updateMatrix(),m.value.copy(g.matrix)}function n(g,m){m.color.getRGB(g.fogColor.value,mf(i)),m.isFog?(g.fogNear.value=m.near,g.fogFar.value=m.far):m.isFogExp2&&(g.fogDensity.value=m.density)}function s(g,m,y,_,w){m.isMeshBasicMaterial||m.isMeshLambertMaterial?r(g,m):m.isMeshToonMaterial?(r(g,m),u(g,m)):m.isMeshPhongMaterial?(r(g,m),h(g,m)):m.isMeshStandardMaterial?(r(g,m),d(g,m),m.isMeshPhysicalMaterial&&f(g,m,w)):m.isMeshMatcapMaterial?(r(g,m),p(g,m)):m.isMeshDepthMaterial?r(g,m):m.isMeshDistanceMaterial?(r(g,m),x(g,m)):m.isMeshNormalMaterial?r(g,m):m.isLineBasicMaterial?(a(g,m),m.isLineDashedMaterial&&o(g,m)):m.isPointsMaterial?c(g,m,y,_):m.isSpriteMaterial?l(g,m):m.isShadowMaterial?(g.color.value.copy(m.color),g.opacity.value=m.opacity):m.isShaderMaterial&&(m.uniformsNeedUpdate=!1)}function r(g,m){g.opacity.value=m.opacity,m.color&&g.diffuse.value.copy(m.color),m.emissive&&g.emissive.value.copy(m.emissive).multiplyScalar(m.emissiveIntensity),m.map&&(g.map.value=m.map,t(m.map,g.mapTransform)),m.alphaMap&&(g.alphaMap.value=m.alphaMap,t(m.alphaMap,g.alphaMapTransform)),m.bumpMap&&(g.bumpMap.value=m.bumpMap,t(m.bumpMap,g.bumpMapTransform),g.bumpScale.value=m.bumpScale,m.side===cn&&(g.bumpScale.value*=-1)),m.normalMap&&(g.normalMap.value=m.normalMap,t(m.normalMap,g.normalMapTransform),g.normalScale.value.copy(m.normalScale),m.side===cn&&g.normalScale.value.negate()),m.displacementMap&&(g.displacementMap.value=m.displacementMap,t(m.displacementMap,g.displacementMapTransform),g.displacementScale.value=m.displacementScale,g.displacementBias.value=m.displacementBias),m.emissiveMap&&(g.emissiveMap.value=m.emissiveMap,t(m.emissiveMap,g.emissiveMapTransform)),m.specularMap&&(g.specularMap.value=m.specularMap,t(m.specularMap,g.specularMapTransform)),m.alphaTest>0&&(g.alphaTest.value=m.alphaTest);let y=e.get(m).envMap;if(y&&(g.envMap.value=y,g.flipEnvMap.value=y.isCubeTexture&&y.isRenderTargetTexture===!1?-1:1,g.reflectivity.value=m.reflectivity,g.ior.value=m.ior,g.refractionRatio.value=m.refractionRatio),m.lightMap){g.lightMap.value=m.lightMap;let _=i._useLegacyLights===!0?Math.PI:1;g.lightMapIntensity.value=m.lightMapIntensity*_,t(m.lightMap,g.lightMapTransform)}m.aoMap&&(g.aoMap.value=m.aoMap,g.aoMapIntensity.value=m.aoMapIntensity,t(m.aoMap,g.aoMapTransform))}function a(g,m){g.diffuse.value.copy(m.color),g.opacity.value=m.opacity,m.map&&(g.map.value=m.map,t(m.map,g.mapTransform))}function o(g,m){g.dashSize.value=m.dashSize,g.totalSize.value=m.dashSize+m.gapSize,g.scale.value=m.scale}function c(g,m,y,_){g.diffuse.value.copy(m.color),g.opacity.value=m.opacity,g.size.value=m.size*y,g.scale.value=_*.5,m.map&&(g.map.value=m.map,t(m.map,g.uvTransform)),m.alphaMap&&(g.alphaMap.value=m.alphaMap,t(m.alphaMap,g.alphaMapTransform)),m.alphaTest>0&&(g.alphaTest.value=m.alphaTest)}function l(g,m){g.diffuse.value.copy(m.color),g.opacity.value=m.opacity,g.rotation.value=m.rotation,m.map&&(g.map.value=m.map,t(m.map,g.mapTransform)),m.alphaMap&&(g.alphaMap.value=m.alphaMap,t(m.alphaMap,g.alphaMapTransform)),m.alphaTest>0&&(g.alphaTest.value=m.alphaTest)}function h(g,m){g.specular.value.copy(m.specular),g.shininess.value=Math.max(m.shininess,1e-4)}function u(g,m){m.gradientMap&&(g.gradientMap.value=m.gradientMap)}function d(g,m){g.metalness.value=m.metalness,m.metalnessMap&&(g.metalnessMap.value=m.metalnessMap,t(m.metalnessMap,g.metalnessMapTransform)),g.roughness.value=m.roughness,m.roughnessMap&&(g.roughnessMap.value=m.roughnessMap,t(m.roughnessMap,g.roughnessMapTransform)),e.get(m).envMap&&(g.envMapIntensity.value=m.envMapIntensity)}function f(g,m,y){g.ior.value=m.ior,m.sheen>0&&(g.sheenColor.value.copy(m.sheenColor).multiplyScalar(m.sheen),g.sheenRoughness.value=m.sheenRoughness,m.sheenColorMap&&(g.sheenColorMap.value=m.sheenColorMap,t(m.sheenColorMap,g.sheenColorMapTransform)),m.sheenRoughnessMap&&(g.sheenRoughnessMap.value=m.sheenRoughnessMap,t(m.sheenRoughnessMap,g.sheenRoughnessMapTransform))),m.clearcoat>0&&(g.clearcoat.value=m.clearcoat,g.clearcoatRoughness.value=m.clearcoatRoughness,m.clearcoatMap&&(g.clearcoatMap.value=m.clearcoatMap,t(m.clearcoatMap,g.clearcoatMapTransform)),m.clearcoatRoughnessMap&&(g.clearcoatRoughnessMap.value=m.clearcoatRoughnessMap,t(m.clearcoatRoughnessMap,g.clearcoatRoughnessMapTransform)),m.clearcoatNormalMap&&(g.clearcoatNormalMap.value=m.clearcoatNormalMap,t(m.clearcoatNormalMap,g.clearcoatNormalMapTransform),g.clearcoatNormalScale.value.copy(m.clearcoatNormalScale),m.side===cn&&g.clearcoatNormalScale.value.negate())),m.iridescence>0&&(g.iridescence.value=m.iridescence,g.iridescenceIOR.value=m.iridescenceIOR,g.iridescenceThicknessMinimum.value=m.iridescenceThicknessRange[0],g.iridescenceThicknessMaximum.value=m.iridescenceThicknessRange[1],m.iridescenceMap&&(g.iridescenceMap.value=m.iridescenceMap,t(m.iridescenceMap,g.iridescenceMapTransform)),m.iridescenceThicknessMap&&(g.iridescenceThicknessMap.value=m.iridescenceThicknessMap,t(m.iridescenceThicknessMap,g.iridescenceThicknessMapTransform))),m.transmission>0&&(g.transmission.value=m.transmission,g.transmissionSamplerMap.value=y.texture,g.transmissionSamplerSize.value.set(y.width,y.height),m.transmissionMap&&(g.transmissionMap.value=m.transmissionMap,t(m.transmissionMap,g.transmissionMapTransform)),g.thickness.value=m.thickness,m.thicknessMap&&(g.thicknessMap.value=m.thicknessMap,t(m.thicknessMap,g.thicknessMapTransform)),g.attenuationDistance.value=m.attenuationDistance,g.attenuationColor.value.copy(m.attenuationColor)),m.anisotropy>0&&(g.anisotropyVector.value.set(m.anisotropy*Math.cos(m.anisotropyRotation),m.anisotropy*Math.sin(m.anisotropyRotation)),m.anisotropyMap&&(g.anisotropyMap.value=m.anisotropyMap,t(m.anisotropyMap,g.anisotropyMapTransform))),g.specularIntensity.value=m.specularIntensity,g.specularColor.value.copy(m.specularColor),m.specularColorMap&&(g.specularColorMap.value=m.specularColorMap,t(m.specularColorMap,g.specularColorMapTransform)),m.specularIntensityMap&&(g.specularIntensityMap.value=m.specularIntensityMap,t(m.specularIntensityMap,g.specularIntensityMapTransform))}function p(g,m){m.matcap&&(g.matcap.value=m.matcap)}function x(g,m){let y=e.get(m).light;g.referencePosition.value.setFromMatrixPosition(y.matrixWorld),g.nearDistance.value=y.shadow.camera.near,g.farDistance.value=y.shadow.camera.far}return{refreshFogUniforms:n,refreshMaterialUniforms:s}}function Zy(i,e,t,n){let s={},r={},a=[],o=t.isWebGL2?i.getParameter(i.MAX_UNIFORM_BUFFER_BINDINGS):0;function c(y,_){let w=_.program;n.uniformBlockBinding(y,w)}function l(y,_){let w=s[y.id];w===void 0&&(p(y),w=h(y),s[y.id]=w,y.addEventListener("dispose",g));let P=_.program;n.updateUBOMapping(y,P);let A=e.render.frame;r[y.id]!==A&&(d(y),r[y.id]=A)}function h(y){let _=u();y.__bindingPointIndex=_;let w=i.createBuffer(),P=y.__size,A=y.usage;return i.bindBuffer(i.UNIFORM_BUFFER,w),i.bufferData(i.UNIFORM_BUFFER,P,A),i.bindBuffer(i.UNIFORM_BUFFER,null),i.bindBufferBase(i.UNIFORM_BUFFER,_,w),w}function u(){for(let y=0;y<o;y++)if(a.indexOf(y)===-1)return a.push(y),y;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function d(y){let _=s[y.id],w=y.uniforms,P=y.__cache;i.bindBuffer(i.UNIFORM_BUFFER,_);for(let A=0,R=w.length;A<R;A++){let F=Array.isArray(w[A])?w[A]:[w[A]];for(let M=0,E=F.length;M<E;M++){let O=F[M];if(f(O,A,M,P)===!0){let j=O.__offset,ae=Array.isArray(O.value)?O.value:[O.value],z=0;for(let B=0;B<ae.length;B++){let J=ae[B],q=x(J);typeof J=="number"||typeof J=="boolean"?(O.__data[0]=J,i.bufferSubData(i.UNIFORM_BUFFER,j+z,O.__data)):J.isMatrix3?(O.__data[0]=J.elements[0],O.__data[1]=J.elements[1],O.__data[2]=J.elements[2],O.__data[3]=0,O.__data[4]=J.elements[3],O.__data[5]=J.elements[4],O.__data[6]=J.elements[5],O.__data[7]=0,O.__data[8]=J.elements[6],O.__data[9]=J.elements[7],O.__data[10]=J.elements[8],O.__data[11]=0):(J.toArray(O.__data,z),z+=q.storage/Float32Array.BYTES_PER_ELEMENT)}i.bufferSubData(i.UNIFORM_BUFFER,j,O.__data)}}}i.bindBuffer(i.UNIFORM_BUFFER,null)}function f(y,_,w,P){let A=y.value,R=_+"_"+w;if(P[R]===void 0)return typeof A=="number"||typeof A=="boolean"?P[R]=A:P[R]=A.clone(),!0;{let F=P[R];if(typeof A=="number"||typeof A=="boolean"){if(F!==A)return P[R]=A,!0}else if(F.equals(A)===!1)return F.copy(A),!0}return!1}function p(y){let _=y.uniforms,w=0,P=16;for(let R=0,F=_.length;R<F;R++){let M=Array.isArray(_[R])?_[R]:[_[R]];for(let E=0,O=M.length;E<O;E++){let j=M[E],ae=Array.isArray(j.value)?j.value:[j.value];for(let z=0,B=ae.length;z<B;z++){let J=ae[z],q=x(J),K=w%P;K!==0&&P-K<q.boundary&&(w+=P-K),j.__data=new Float32Array(q.storage/Float32Array.BYTES_PER_ELEMENT),j.__offset=w,w+=q.storage}}}let A=w%P;return A>0&&(w+=P-A),y.__size=w,y.__cache={},this}function x(y){let _={boundary:0,storage:0};return typeof y=="number"||typeof y=="boolean"?(_.boundary=4,_.storage=4):y.isVector2?(_.boundary=8,_.storage=8):y.isVector3||y.isColor?(_.boundary=16,_.storage=12):y.isVector4?(_.boundary=16,_.storage=16):y.isMatrix3?(_.boundary=48,_.storage=48):y.isMatrix4?(_.boundary=64,_.storage=64):y.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",y),_}function g(y){let _=y.target;_.removeEventListener("dispose",g);let w=a.indexOf(_.__bindingPointIndex);a.splice(w,1),i.deleteBuffer(s[_.id]),delete s[_.id],delete r[_.id]}function m(){for(let y in s)i.deleteBuffer(s[y]);a=[],s={},r={}}return{bind:c,update:l,dispose:m}}var ea=class{constructor(e={}){let{canvas:t=i0(),context:n=null,depth:s=!0,stencil:r=!0,alpha:a=!1,antialias:o=!1,premultipliedAlpha:c=!0,preserveDrawingBuffer:l=!1,powerPreference:h="default",failIfMajorPerformanceCaveat:u=!1}=e;this.isWebGLRenderer=!0;let d;n!==null?d=n.getContextAttributes().alpha:d=a;let f=new Uint32Array(4),p=new Int32Array(4),x=null,g=null,m=[],y=[];this.domElement=t,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this._outputColorSpace=Tt,this._useLegacyLights=!1,this.toneMapping=Pi,this.toneMappingExposure=1;let _=this,w=!1,P=0,A=0,R=null,F=-1,M=null,E=new _t,O=new _t,j=null,ae=new pe(0),z=0,B=t.width,J=t.height,q=1,K=null,$=null,se=new _t(0,0,B,J),le=new _t(0,0,B,J),_e=!1,Z=new Qr,te=!1,xe=!1,Re=null,we=new Xe,Be=new ze,He=new L,Pe={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};function qe(){return R===null?q:1}let k=n;function jt(S,U){for(let V=0;V<S.length;V++){let Y=S[V],G=t.getContext(Y,U);if(G!==null)return G}return null}try{let S={alpha:!0,depth:s,stencil:r,antialias:o,premultipliedAlpha:c,preserveDrawingBuffer:l,powerPreference:h,failIfMajorPerformanceCaveat:u};if("setAttribute"in t&&t.setAttribute("data-engine",`three.js r${Yl}`),t.addEventListener("webglcontextlost",X,!1),t.addEventListener("webglcontextrestored",C,!1),t.addEventListener("webglcontextcreationerror",Q,!1),k===null){let U=["webgl2","webgl","experimental-webgl"];if(_.isWebGL1Renderer===!0&&U.shift(),k=jt(U,S),k===null)throw jt(U)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}typeof WebGLRenderingContext!="undefined"&&k instanceof WebGLRenderingContext&&console.warn("THREE.WebGLRenderer: WebGL 1 support was deprecated in r153 and will be removed in r163."),k.getShaderPrecisionFormat===void 0&&(k.getShaderPrecisionFormat=function(){return{rangeMin:1,rangeMax:1,precision:1}})}catch(S){throw console.error("THREE.WebGLRenderer: "+S.message),S}let Le,ke,Se,bt,Ge,T,b,H,ce,oe,he,Te,ge,be,Ie,Ve,re,lt,Ye,De,D,N,W,ee;function ye(){Le=new f_(k),ke=new o_(k,Le,e),Le.init(ke),N=new Xy(k,Le,ke),Se=new Vy(k,Le,ke),bt=new g_(k),Ge=new Ly,T=new Wy(k,Le,Se,Ge,ke,N,bt),b=new l_(_),H=new d_(_),ce=new S0(k,ke),W=new r_(k,Le,ce,ke),oe=new p_(k,ce,bt,W),he=new v_(k,oe,ce,bt),Ye=new y_(k,ke,T),Ve=new c_(Ge),Te=new Py(_,b,H,Le,ke,W,Ve),ge=new Yy(_,Ge),be=new zy,Ie=new By(Le,ke),lt=new s_(_,b,H,Se,he,d,c),re=new Gy(_,he,ke),ee=new Zy(k,bt,ke,Se),De=new a_(k,Le,bt,ke),D=new m_(k,Le,bt,ke),bt.programs=Te.programs,_.capabilities=ke,_.extensions=Le,_.properties=Ge,_.renderLists=be,_.shadowMap=re,_.state=Se,_.info=bt}ye();let ne=new Ll(_,k);this.xr=ne,this.getContext=function(){return k},this.getContextAttributes=function(){return k.getContextAttributes()},this.forceContextLoss=function(){let S=Le.get("WEBGL_lose_context");S&&S.loseContext()},this.forceContextRestore=function(){let S=Le.get("WEBGL_lose_context");S&&S.restoreContext()},this.getPixelRatio=function(){return q},this.setPixelRatio=function(S){S!==void 0&&(q=S,this.setSize(B,J,!1))},this.getSize=function(S){return S.set(B,J)},this.setSize=function(S,U,V=!0){if(ne.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}B=S,J=U,t.width=Math.floor(S*q),t.height=Math.floor(U*q),V===!0&&(t.style.width=S+"px",t.style.height=U+"px"),this.setViewport(0,0,S,U)},this.getDrawingBufferSize=function(S){return S.set(B*q,J*q).floor()},this.setDrawingBufferSize=function(S,U,V){B=S,J=U,q=V,t.width=Math.floor(S*V),t.height=Math.floor(U*V),this.setViewport(0,0,S,U)},this.getCurrentViewport=function(S){return S.copy(E)},this.getViewport=function(S){return S.copy(se)},this.setViewport=function(S,U,V,Y){S.isVector4?se.set(S.x,S.y,S.z,S.w):se.set(S,U,V,Y),Se.viewport(E.copy(se).multiplyScalar(q).floor())},this.getScissor=function(S){return S.copy(le)},this.setScissor=function(S,U,V,Y){S.isVector4?le.set(S.x,S.y,S.z,S.w):le.set(S,U,V,Y),Se.scissor(O.copy(le).multiplyScalar(q).floor())},this.getScissorTest=function(){return _e},this.setScissorTest=function(S){Se.setScissorTest(_e=S)},this.setOpaqueSort=function(S){K=S},this.setTransparentSort=function(S){$=S},this.getClearColor=function(S){return S.copy(lt.getClearColor())},this.setClearColor=function(){lt.setClearColor.apply(lt,arguments)},this.getClearAlpha=function(){return lt.getClearAlpha()},this.setClearAlpha=function(){lt.setClearAlpha.apply(lt,arguments)},this.clear=function(S=!0,U=!0,V=!0){let Y=0;if(S){let G=!1;if(R!==null){let Me=R.texture.format;G=Me===cf||Me===of||Me===af}if(G){let Me=R.texture.type,Ce=Me===Li||Me===Ai||Me===jl||Me===is||Me===sf||Me===rf,Ne=lt.getClearColor(),Oe=lt.getClearAlpha(),tt=Ne.r,Ze=Ne.g,Je=Ne.b;Ce?(f[0]=tt,f[1]=Ze,f[2]=Je,f[3]=Oe,k.clearBufferuiv(k.COLOR,0,f)):(p[0]=tt,p[1]=Ze,p[2]=Je,p[3]=Oe,k.clearBufferiv(k.COLOR,0,p))}else Y|=k.COLOR_BUFFER_BIT}U&&(Y|=k.DEPTH_BUFFER_BIT),V&&(Y|=k.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),k.clear(Y)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){t.removeEventListener("webglcontextlost",X,!1),t.removeEventListener("webglcontextrestored",C,!1),t.removeEventListener("webglcontextcreationerror",Q,!1),be.dispose(),Ie.dispose(),Ge.dispose(),b.dispose(),H.dispose(),he.dispose(),W.dispose(),ee.dispose(),Te.dispose(),ne.dispose(),ne.removeEventListener("sessionstart",dn),ne.removeEventListener("sessionend",wt),Re&&(Re.dispose(),Re=null),fn.stop()};function X(S){S.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),w=!0}function C(){console.log("THREE.WebGLRenderer: Context Restored."),w=!1;let S=bt.autoReset,U=re.enabled,V=re.autoUpdate,Y=re.needsUpdate,G=re.type;ye(),bt.autoReset=S,re.enabled=U,re.autoUpdate=V,re.needsUpdate=Y,re.type=G}function Q(S){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",S.statusMessage)}function ie(S){let U=S.target;U.removeEventListener("dispose",ie),me(U)}function me(S){ve(S),Ge.remove(S)}function ve(S){let U=Ge.get(S).programs;U!==void 0&&(U.forEach(function(V){Te.releaseProgram(V)}),S.isShaderMaterial&&Te.releaseShaderCache(S))}this.renderBufferDirect=function(S,U,V,Y,G,Me){U===null&&(U=Pe);let Ce=G.isMesh&&G.matrixWorld.determinant()<0,Ne=Fp(S,U,V,Y,G);Se.setMaterial(Y,Ce);let Oe=V.index,tt=1;if(Y.wireframe===!0){if(Oe=oe.getWireframeAttribute(V),Oe===void 0)return;tt=2}let Ze=V.drawRange,Je=V.attributes.position,Ot=Ze.start*tt,yn=(Ze.start+Ze.count)*tt;Me!==null&&(Ot=Math.max(Ot,Me.start*tt),yn=Math.min(yn,(Me.start+Me.count)*tt)),Oe!==null?(Ot=Math.max(Ot,0),yn=Math.min(yn,Oe.count)):Je!=null&&(Ot=Math.max(Ot,0),yn=Math.min(yn,Je.count));let Kt=yn-Ot;if(Kt<0||Kt===1/0)return;W.setup(G,Y,Ne,V,Oe);let Qn,Ct=De;if(Oe!==null&&(Qn=ce.get(Oe),Ct=D,Ct.setIndex(Qn)),G.isMesh)Y.wireframe===!0?(Se.setLineWidth(Y.wireframeLinewidth*qe()),Ct.setMode(k.LINES)):Ct.setMode(k.TRIANGLES);else if(G.isLine){let it=Y.linewidth;it===void 0&&(it=1),Se.setLineWidth(it*qe()),G.isLineSegments?Ct.setMode(k.LINES):G.isLineLoop?Ct.setMode(k.LINE_LOOP):Ct.setMode(k.LINE_STRIP)}else G.isPoints?Ct.setMode(k.POINTS):G.isSprite&&Ct.setMode(k.TRIANGLES);if(G.isBatchedMesh)Ct.renderMultiDraw(G._multiDrawStarts,G._multiDrawCounts,G._multiDrawCount);else if(G.isInstancedMesh)Ct.renderInstances(Ot,Kt,G.count);else if(V.isInstancedBufferGeometry){let it=V._maxInstanceCount!==void 0?V._maxInstanceCount:1/0,Ac=Math.min(V.instanceCount,it);Ct.renderInstances(Ot,Kt,Ac)}else Ct.render(Ot,Kt)};function $e(S,U,V){S.transparent===!0&&S.side===Jt&&S.forceSinglePass===!1?(S.side=cn,S.needsUpdate=!0,La(S,U,V),S.side=qn,S.needsUpdate=!0,La(S,U,V),S.side=Jt):La(S,U,V)}this.compile=function(S,U,V=null){V===null&&(V=S),g=Ie.get(V),g.init(),y.push(g),V.traverseVisible(function(G){G.isLight&&G.layers.test(U.layers)&&(g.pushLight(G),G.castShadow&&g.pushShadow(G))}),S!==V&&S.traverseVisible(function(G){G.isLight&&G.layers.test(U.layers)&&(g.pushLight(G),G.castShadow&&g.pushShadow(G))}),g.setupLights(_._useLegacyLights);let Y=new Set;return S.traverse(function(G){let Me=G.material;if(Me)if(Array.isArray(Me))for(let Ce=0;Ce<Me.length;Ce++){let Ne=Me[Ce];$e(Ne,V,G),Y.add(Ne)}else $e(Me,V,G),Y.add(Me)}),y.pop(),g=null,Y},this.compileAsync=function(S,U,V=null){let Y=this.compile(S,U,V);return new Promise(G=>{function Me(){if(Y.forEach(function(Ce){Ge.get(Ce).currentProgram.isReady()&&Y.delete(Ce)}),Y.size===0){G(S);return}setTimeout(Me,10)}Le.get("KHR_parallel_shader_compile")!==null?Me():setTimeout(Me,10)})};let rt=null;function Rt(S){rt&&rt(S)}function dn(){fn.stop()}function wt(){fn.start()}let fn=new gf;fn.setAnimationLoop(Rt),typeof self!="undefined"&&fn.setContext(self),this.setAnimationLoop=function(S){rt=S,ne.setAnimationLoop(S),S===null?fn.stop():fn.start()},ne.addEventListener("sessionstart",dn),ne.addEventListener("sessionend",wt),this.render=function(S,U){if(U!==void 0&&U.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(w===!0)return;S.matrixWorldAutoUpdate===!0&&S.updateMatrixWorld(),U.parent===null&&U.matrixWorldAutoUpdate===!0&&U.updateMatrixWorld(),ne.enabled===!0&&ne.isPresenting===!0&&(ne.cameraAutoUpdate===!0&&ne.updateCamera(U),U=ne.getCamera()),S.isScene===!0&&S.onBeforeRender(_,S,U,R),g=Ie.get(S,y.length),g.init(),y.push(g),we.multiplyMatrices(U.projectionMatrix,U.matrixWorldInverse),Z.setFromProjectionMatrix(we),xe=this.localClippingEnabled,te=Ve.init(this.clippingPlanes,xe),x=be.get(S,m.length),x.init(),m.push(x),Vn(S,U,0,_.sortObjects),x.finish(),_.sortObjects===!0&&x.sort(K,$),this.info.render.frame++,te===!0&&Ve.beginShadows();let V=g.state.shadowsArray;if(re.render(V,S,U),te===!0&&Ve.endShadows(),this.info.autoReset===!0&&this.info.reset(),lt.render(x,S),g.setupLights(_._useLegacyLights),U.isArrayCamera){let Y=U.cameras;for(let G=0,Me=Y.length;G<Me;G++){let Ce=Y[G];hu(x,S,Ce,Ce.viewport)}}else hu(x,S,U);R!==null&&(T.updateMultisampleRenderTarget(R),T.updateRenderTargetMipmap(R)),S.isScene===!0&&S.onAfterRender(_,S,U),W.resetDefaultState(),F=-1,M=null,y.pop(),y.length>0?g=y[y.length-1]:g=null,m.pop(),m.length>0?x=m[m.length-1]:x=null};function Vn(S,U,V,Y){if(S.visible===!1)return;if(S.layers.test(U.layers)){if(S.isGroup)V=S.renderOrder;else if(S.isLOD)S.autoUpdate===!0&&S.update(U);else if(S.isLight)g.pushLight(S),S.castShadow&&g.pushShadow(S);else if(S.isSprite){if(!S.frustumCulled||Z.intersectsSprite(S)){Y&&He.setFromMatrixPosition(S.matrixWorld).applyMatrix4(we);let Ce=he.update(S),Ne=S.material;Ne.visible&&x.push(S,Ce,Ne,V,He.z,null)}}else if((S.isMesh||S.isLine||S.isPoints)&&(!S.frustumCulled||Z.intersectsObject(S))){let Ce=he.update(S),Ne=S.material;if(Y&&(S.boundingSphere!==void 0?(S.boundingSphere===null&&S.computeBoundingSphere(),He.copy(S.boundingSphere.center)):(Ce.boundingSphere===null&&Ce.computeBoundingSphere(),He.copy(Ce.boundingSphere.center)),He.applyMatrix4(S.matrixWorld).applyMatrix4(we)),Array.isArray(Ne)){let Oe=Ce.groups;for(let tt=0,Ze=Oe.length;tt<Ze;tt++){let Je=Oe[tt],Ot=Ne[Je.materialIndex];Ot&&Ot.visible&&x.push(S,Ce,Ot,V,He.z,Je)}}else Ne.visible&&x.push(S,Ce,Ne,V,He.z,null)}}let Me=S.children;for(let Ce=0,Ne=Me.length;Ce<Ne;Ce++)Vn(Me[Ce],U,V,Y)}function hu(S,U,V,Y){let G=S.opaque,Me=S.transmissive,Ce=S.transparent;g.setupLightsView(V),te===!0&&Ve.setGlobalState(_.clippingPlanes,V),Me.length>0&&Op(G,Me,U,V),Y&&Se.viewport(E.copy(Y)),G.length>0&&Pa(G,U,V),Me.length>0&&Pa(Me,U,V),Ce.length>0&&Pa(Ce,U,V),Se.buffers.depth.setTest(!0),Se.buffers.depth.setMask(!0),Se.buffers.color.setMask(!0),Se.setPolygonOffset(!1)}function Op(S,U,V,Y){if((V.isScene===!0?V.overrideMaterial:null)!==null)return;let Me=ke.isWebGL2;Re===null&&(Re=new ui(1,1,{generateMipmaps:!0,type:Le.has("EXT_color_buffer_half_float")?$r:Li,minFilter:Ii,samples:Me?4:0})),_.getDrawingBufferSize(Be),Me?Re.setSize(Be.x,Be.y):Re.setSize(xo(Be.x),xo(Be.y));let Ce=_.getRenderTarget();_.setRenderTarget(Re),_.getClearColor(ae),z=_.getClearAlpha(),z<1&&_.setClearColor(16777215,.5),_.clear();let Ne=_.toneMapping;_.toneMapping=Pi,Pa(S,V,Y),T.updateMultisampleRenderTarget(Re),T.updateRenderTargetMipmap(Re);let Oe=!1;for(let tt=0,Ze=U.length;tt<Ze;tt++){let Je=U[tt],Ot=Je.object,yn=Je.geometry,Kt=Je.material,Qn=Je.group;if(Kt.side===Jt&&Ot.layers.test(Y.layers)){let Ct=Kt.side;Kt.side=cn,Kt.needsUpdate=!0,uu(Ot,V,Y,yn,Kt,Qn),Kt.side=Ct,Kt.needsUpdate=!0,Oe=!0}}Oe===!0&&(T.updateMultisampleRenderTarget(Re),T.updateRenderTargetMipmap(Re)),_.setRenderTarget(Ce),_.setClearColor(ae,z),_.toneMapping=Ne}function Pa(S,U,V){let Y=U.isScene===!0?U.overrideMaterial:null;for(let G=0,Me=S.length;G<Me;G++){let Ce=S[G],Ne=Ce.object,Oe=Ce.geometry,tt=Y===null?Ce.material:Y,Ze=Ce.group;Ne.layers.test(V.layers)&&uu(Ne,U,V,Oe,tt,Ze)}}function uu(S,U,V,Y,G,Me){S.onBeforeRender(_,U,V,Y,G,Me),S.modelViewMatrix.multiplyMatrices(V.matrixWorldInverse,S.matrixWorld),S.normalMatrix.getNormalMatrix(S.modelViewMatrix),G.onBeforeRender(_,U,V,Y,S,Me),G.transparent===!0&&G.side===Jt&&G.forceSinglePass===!1?(G.side=cn,G.needsUpdate=!0,_.renderBufferDirect(V,U,Y,G,S,Me),G.side=qn,G.needsUpdate=!0,_.renderBufferDirect(V,U,Y,G,S,Me),G.side=Jt):_.renderBufferDirect(V,U,Y,G,S,Me),S.onAfterRender(_,U,V,Y,G,Me)}function La(S,U,V){U.isScene!==!0&&(U=Pe);let Y=Ge.get(S),G=g.state.lights,Me=g.state.shadowsArray,Ce=G.state.version,Ne=Te.getParameters(S,G.state,Me,U,V),Oe=Te.getProgramCacheKey(Ne),tt=Y.programs;Y.environment=S.isMeshStandardMaterial?U.environment:null,Y.fog=U.fog,Y.envMap=(S.isMeshStandardMaterial?H:b).get(S.envMap||Y.environment),tt===void 0&&(S.addEventListener("dispose",ie),tt=new Map,Y.programs=tt);let Ze=tt.get(Oe);if(Ze!==void 0){if(Y.currentProgram===Ze&&Y.lightsStateVersion===Ce)return fu(S,Ne),Ze}else Ne.uniforms=Te.getUniforms(S),S.onBuild(V,Ne,_),S.onBeforeCompile(Ne,_),Ze=Te.acquireProgram(Ne,Oe),tt.set(Oe,Ze),Y.uniforms=Ne.uniforms;let Je=Y.uniforms;return(!S.isShaderMaterial&&!S.isRawShaderMaterial||S.clipping===!0)&&(Je.clippingPlanes=Ve.uniform),fu(S,Ne),Y.needsLights=kp(S),Y.lightsStateVersion=Ce,Y.needsLights&&(Je.ambientLightColor.value=G.state.ambient,Je.lightProbe.value=G.state.probe,Je.directionalLights.value=G.state.directional,Je.directionalLightShadows.value=G.state.directionalShadow,Je.spotLights.value=G.state.spot,Je.spotLightShadows.value=G.state.spotShadow,Je.rectAreaLights.value=G.state.rectArea,Je.ltc_1.value=G.state.rectAreaLTC1,Je.ltc_2.value=G.state.rectAreaLTC2,Je.pointLights.value=G.state.point,Je.pointLightShadows.value=G.state.pointShadow,Je.hemisphereLights.value=G.state.hemi,Je.directionalShadowMap.value=G.state.directionalShadowMap,Je.directionalShadowMatrix.value=G.state.directionalShadowMatrix,Je.spotShadowMap.value=G.state.spotShadowMap,Je.spotLightMatrix.value=G.state.spotLightMatrix,Je.spotLightMap.value=G.state.spotLightMap,Je.pointShadowMap.value=G.state.pointShadowMap,Je.pointShadowMatrix.value=G.state.pointShadowMatrix),Y.currentProgram=Ze,Y.uniformsList=null,Ze}function du(S){if(S.uniformsList===null){let U=S.currentProgram.getUniforms();S.uniformsList=nr.seqWithValue(U.seq,S.uniforms)}return S.uniformsList}function fu(S,U){let V=Ge.get(S);V.outputColorSpace=U.outputColorSpace,V.batching=U.batching,V.instancing=U.instancing,V.instancingColor=U.instancingColor,V.skinning=U.skinning,V.morphTargets=U.morphTargets,V.morphNormals=U.morphNormals,V.morphColors=U.morphColors,V.morphTargetsCount=U.morphTargetsCount,V.numClippingPlanes=U.numClippingPlanes,V.numIntersection=U.numClipIntersection,V.vertexAlphas=U.vertexAlphas,V.vertexTangents=U.vertexTangents,V.toneMapping=U.toneMapping}function Fp(S,U,V,Y,G){U.isScene!==!0&&(U=Pe),T.resetTextureUnits();let Me=U.fog,Ce=Y.isMeshStandardMaterial?U.environment:null,Ne=R===null?_.outputColorSpace:R.isXRRenderTarget===!0?R.texture.colorSpace:qt,Oe=(Y.isMeshStandardMaterial?H:b).get(Y.envMap||Ce),tt=Y.vertexColors===!0&&!!V.attributes.color&&V.attributes.color.itemSize===4,Ze=!!V.attributes.tangent&&(!!Y.normalMap||Y.anisotropy>0),Je=!!V.morphAttributes.position,Ot=!!V.morphAttributes.normal,yn=!!V.morphAttributes.color,Kt=Pi;Y.toneMapped&&(R===null||R.isXRRenderTarget===!0)&&(Kt=_.toneMapping);let Qn=V.morphAttributes.position||V.morphAttributes.normal||V.morphAttributes.color,Ct=Qn!==void 0?Qn.length:0,it=Ge.get(Y),Ac=g.state.lights;if(te===!0&&(xe===!0||S!==M)){let Tn=S===M&&Y.id===F;Ve.setState(Y,S,Tn)}let zt=!1;Y.version===it.__version?(it.needsLights&&it.lightsStateVersion!==Ac.state.version||it.outputColorSpace!==Ne||G.isBatchedMesh&&it.batching===!1||!G.isBatchedMesh&&it.batching===!0||G.isInstancedMesh&&it.instancing===!1||!G.isInstancedMesh&&it.instancing===!0||G.isSkinnedMesh&&it.skinning===!1||!G.isSkinnedMesh&&it.skinning===!0||G.isInstancedMesh&&it.instancingColor===!0&&G.instanceColor===null||G.isInstancedMesh&&it.instancingColor===!1&&G.instanceColor!==null||it.envMap!==Oe||Y.fog===!0&&it.fog!==Me||it.numClippingPlanes!==void 0&&(it.numClippingPlanes!==Ve.numPlanes||it.numIntersection!==Ve.numIntersection)||it.vertexAlphas!==tt||it.vertexTangents!==Ze||it.morphTargets!==Je||it.morphNormals!==Ot||it.morphColors!==yn||it.toneMapping!==Kt||ke.isWebGL2===!0&&it.morphTargetsCount!==Ct)&&(zt=!0):(zt=!0,it.__version=Y.version);let Yi=it.currentProgram;zt===!0&&(Yi=La(Y,U,G));let pu=!1,zr=!1,Rc=!1,sn=Yi.getUniforms(),Zi=it.uniforms;if(Se.useProgram(Yi.program)&&(pu=!0,zr=!0,Rc=!0),Y.id!==F&&(F=Y.id,zr=!0),pu||M!==S){sn.setValue(k,"projectionMatrix",S.projectionMatrix),sn.setValue(k,"viewMatrix",S.matrixWorldInverse);let Tn=sn.map.cameraPosition;Tn!==void 0&&Tn.setValue(k,He.setFromMatrixPosition(S.matrixWorld)),ke.logarithmicDepthBuffer&&sn.setValue(k,"logDepthBufFC",2/(Math.log(S.far+1)/Math.LN2)),(Y.isMeshPhongMaterial||Y.isMeshToonMaterial||Y.isMeshLambertMaterial||Y.isMeshBasicMaterial||Y.isMeshStandardMaterial||Y.isShaderMaterial)&&sn.setValue(k,"isOrthographic",S.isOrthographicCamera===!0),M!==S&&(M=S,zr=!0,Rc=!0)}if(G.isSkinnedMesh){sn.setOptional(k,G,"bindMatrix"),sn.setOptional(k,G,"bindMatrixInverse");let Tn=G.skeleton;Tn&&(ke.floatVertexTextures?(Tn.boneTexture===null&&Tn.computeBoneTexture(),sn.setValue(k,"boneTexture",Tn.boneTexture,T)):console.warn("THREE.WebGLRenderer: SkinnedMesh can only be used with WebGL 2. With WebGL 1 OES_texture_float and vertex textures support is required."))}G.isBatchedMesh&&(sn.setOptional(k,G,"batchingTexture"),sn.setValue(k,"batchingTexture",G._matricesTexture,T));let Cc=V.morphAttributes;if((Cc.position!==void 0||Cc.normal!==void 0||Cc.color!==void 0&&ke.isWebGL2===!0)&&Ye.update(G,V,Yi),(zr||it.receiveShadow!==G.receiveShadow)&&(it.receiveShadow=G.receiveShadow,sn.setValue(k,"receiveShadow",G.receiveShadow)),Y.isMeshGouraudMaterial&&Y.envMap!==null&&(Zi.envMap.value=Oe,Zi.flipEnvMap.value=Oe.isCubeTexture&&Oe.isRenderTargetTexture===!1?-1:1),zr&&(sn.setValue(k,"toneMappingExposure",_.toneMappingExposure),it.needsLights&&Bp(Zi,Rc),Me&&Y.fog===!0&&ge.refreshFogUniforms(Zi,Me),ge.refreshMaterialUniforms(Zi,Y,q,J,Re),nr.upload(k,du(it),Zi,T)),Y.isShaderMaterial&&Y.uniformsNeedUpdate===!0&&(nr.upload(k,du(it),Zi,T),Y.uniformsNeedUpdate=!1),Y.isSpriteMaterial&&sn.setValue(k,"center",G.center),sn.setValue(k,"modelViewMatrix",G.modelViewMatrix),sn.setValue(k,"normalMatrix",G.normalMatrix),sn.setValue(k,"modelMatrix",G.matrixWorld),Y.isShaderMaterial||Y.isRawShaderMaterial){let Tn=Y.uniformsGroups;for(let Pc=0,Hp=Tn.length;Pc<Hp;Pc++)if(ke.isWebGL2){let mu=Tn[Pc];ee.update(mu,Yi),ee.bind(mu,Yi)}else console.warn("THREE.WebGLRenderer: Uniform Buffer Objects can only be used with WebGL 2.")}return Yi}function Bp(S,U){S.ambientLightColor.needsUpdate=U,S.lightProbe.needsUpdate=U,S.directionalLights.needsUpdate=U,S.directionalLightShadows.needsUpdate=U,S.pointLights.needsUpdate=U,S.pointLightShadows.needsUpdate=U,S.spotLights.needsUpdate=U,S.spotLightShadows.needsUpdate=U,S.rectAreaLights.needsUpdate=U,S.hemisphereLights.needsUpdate=U}function kp(S){return S.isMeshLambertMaterial||S.isMeshToonMaterial||S.isMeshPhongMaterial||S.isMeshStandardMaterial||S.isShadowMaterial||S.isShaderMaterial&&S.lights===!0}this.getActiveCubeFace=function(){return P},this.getActiveMipmapLevel=function(){return A},this.getRenderTarget=function(){return R},this.setRenderTargetTextures=function(S,U,V){Ge.get(S.texture).__webglTexture=U,Ge.get(S.depthTexture).__webglTexture=V;let Y=Ge.get(S);Y.__hasExternalTextures=!0,Y.__hasExternalTextures&&(Y.__autoAllocateDepthBuffer=V===void 0,Y.__autoAllocateDepthBuffer||Le.has("WEBGL_multisampled_render_to_texture")===!0&&(console.warn("THREE.WebGLRenderer: Render-to-texture extension was disabled because an external texture was provided"),Y.__useRenderToTexture=!1))},this.setRenderTargetFramebuffer=function(S,U){let V=Ge.get(S);V.__webglFramebuffer=U,V.__useDefaultFramebuffer=U===void 0},this.setRenderTarget=function(S,U=0,V=0){R=S,P=U,A=V;let Y=!0,G=null,Me=!1,Ce=!1;if(S){let Oe=Ge.get(S);Oe.__useDefaultFramebuffer!==void 0?(Se.bindFramebuffer(k.FRAMEBUFFER,null),Y=!1):Oe.__webglFramebuffer===void 0?T.setupRenderTarget(S):Oe.__hasExternalTextures&&T.rebindTextures(S,Ge.get(S.texture).__webglTexture,Ge.get(S.depthTexture).__webglTexture);let tt=S.texture;(tt.isData3DTexture||tt.isDataArrayTexture||tt.isCompressedArrayTexture)&&(Ce=!0);let Ze=Ge.get(S).__webglFramebuffer;S.isWebGLCubeRenderTarget?(Array.isArray(Ze[U])?G=Ze[U][V]:G=Ze[U],Me=!0):ke.isWebGL2&&S.samples>0&&T.useMultisampledRTT(S)===!1?G=Ge.get(S).__webglMultisampledFramebuffer:Array.isArray(Ze)?G=Ze[V]:G=Ze,E.copy(S.viewport),O.copy(S.scissor),j=S.scissorTest}else E.copy(se).multiplyScalar(q).floor(),O.copy(le).multiplyScalar(q).floor(),j=_e;if(Se.bindFramebuffer(k.FRAMEBUFFER,G)&&ke.drawBuffers&&Y&&Se.drawBuffers(S,G),Se.viewport(E),Se.scissor(O),Se.setScissorTest(j),Me){let Oe=Ge.get(S.texture);k.framebufferTexture2D(k.FRAMEBUFFER,k.COLOR_ATTACHMENT0,k.TEXTURE_CUBE_MAP_POSITIVE_X+U,Oe.__webglTexture,V)}else if(Ce){let Oe=Ge.get(S.texture),tt=U||0;k.framebufferTextureLayer(k.FRAMEBUFFER,k.COLOR_ATTACHMENT0,Oe.__webglTexture,V||0,tt)}F=-1},this.readRenderTargetPixels=function(S,U,V,Y,G,Me,Ce){if(!(S&&S.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let Ne=Ge.get(S).__webglFramebuffer;if(S.isWebGLCubeRenderTarget&&Ce!==void 0&&(Ne=Ne[Ce]),Ne){Se.bindFramebuffer(k.FRAMEBUFFER,Ne);try{let Oe=S.texture,tt=Oe.format,Ze=Oe.type;if(tt!==Rn&&N.convert(tt)!==k.getParameter(k.IMPLEMENTATION_COLOR_READ_FORMAT)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}let Je=Ze===$r&&(Le.has("EXT_color_buffer_half_float")||ke.isWebGL2&&Le.has("EXT_color_buffer_float"));if(Ze!==Li&&N.convert(Ze)!==k.getParameter(k.IMPLEMENTATION_COLOR_READ_TYPE)&&!(Ze===ci&&(ke.isWebGL2||Le.has("OES_texture_float")||Le.has("WEBGL_color_buffer_float")))&&!Je){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}U>=0&&U<=S.width-Y&&V>=0&&V<=S.height-G&&k.readPixels(U,V,Y,G,N.convert(tt),N.convert(Ze),Me)}finally{let Oe=R!==null?Ge.get(R).__webglFramebuffer:null;Se.bindFramebuffer(k.FRAMEBUFFER,Oe)}}},this.copyFramebufferToTexture=function(S,U,V=0){let Y=Math.pow(2,-V),G=Math.floor(U.image.width*Y),Me=Math.floor(U.image.height*Y);T.setTexture2D(U,0),k.copyTexSubImage2D(k.TEXTURE_2D,V,0,0,S.x,S.y,G,Me),Se.unbindTexture()},this.copyTextureToTexture=function(S,U,V,Y=0){let G=U.image.width,Me=U.image.height,Ce=N.convert(V.format),Ne=N.convert(V.type);T.setTexture2D(V,0),k.pixelStorei(k.UNPACK_FLIP_Y_WEBGL,V.flipY),k.pixelStorei(k.UNPACK_PREMULTIPLY_ALPHA_WEBGL,V.premultiplyAlpha),k.pixelStorei(k.UNPACK_ALIGNMENT,V.unpackAlignment),U.isDataTexture?k.texSubImage2D(k.TEXTURE_2D,Y,S.x,S.y,G,Me,Ce,Ne,U.image.data):U.isCompressedTexture?k.compressedTexSubImage2D(k.TEXTURE_2D,Y,S.x,S.y,U.mipmaps[0].width,U.mipmaps[0].height,Ce,U.mipmaps[0].data):k.texSubImage2D(k.TEXTURE_2D,Y,S.x,S.y,Ce,Ne,U.image),Y===0&&V.generateMipmaps&&k.generateMipmap(k.TEXTURE_2D),Se.unbindTexture()},this.copyTextureToTexture3D=function(S,U,V,Y,G=0){if(_.isWebGL1Renderer){console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: can only be used with WebGL2.");return}let Me=S.max.x-S.min.x+1,Ce=S.max.y-S.min.y+1,Ne=S.max.z-S.min.z+1,Oe=N.convert(Y.format),tt=N.convert(Y.type),Ze;if(Y.isData3DTexture)T.setTexture3D(Y,0),Ze=k.TEXTURE_3D;else if(Y.isDataArrayTexture||Y.isCompressedArrayTexture)T.setTexture2DArray(Y,0),Ze=k.TEXTURE_2D_ARRAY;else{console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: only supports THREE.DataTexture3D and THREE.DataTexture2DArray.");return}k.pixelStorei(k.UNPACK_FLIP_Y_WEBGL,Y.flipY),k.pixelStorei(k.UNPACK_PREMULTIPLY_ALPHA_WEBGL,Y.premultiplyAlpha),k.pixelStorei(k.UNPACK_ALIGNMENT,Y.unpackAlignment);let Je=k.getParameter(k.UNPACK_ROW_LENGTH),Ot=k.getParameter(k.UNPACK_IMAGE_HEIGHT),yn=k.getParameter(k.UNPACK_SKIP_PIXELS),Kt=k.getParameter(k.UNPACK_SKIP_ROWS),Qn=k.getParameter(k.UNPACK_SKIP_IMAGES),Ct=V.isCompressedTexture?V.mipmaps[G]:V.image;k.pixelStorei(k.UNPACK_ROW_LENGTH,Ct.width),k.pixelStorei(k.UNPACK_IMAGE_HEIGHT,Ct.height),k.pixelStorei(k.UNPACK_SKIP_PIXELS,S.min.x),k.pixelStorei(k.UNPACK_SKIP_ROWS,S.min.y),k.pixelStorei(k.UNPACK_SKIP_IMAGES,S.min.z),V.isDataTexture||V.isData3DTexture?k.texSubImage3D(Ze,G,U.x,U.y,U.z,Me,Ce,Ne,Oe,tt,Ct.data):V.isCompressedArrayTexture?(console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: untested support for compressed srcTexture."),k.compressedTexSubImage3D(Ze,G,U.x,U.y,U.z,Me,Ce,Ne,Oe,Ct.data)):k.texSubImage3D(Ze,G,U.x,U.y,U.z,Me,Ce,Ne,Oe,tt,Ct),k.pixelStorei(k.UNPACK_ROW_LENGTH,Je),k.pixelStorei(k.UNPACK_IMAGE_HEIGHT,Ot),k.pixelStorei(k.UNPACK_SKIP_PIXELS,yn),k.pixelStorei(k.UNPACK_SKIP_ROWS,Kt),k.pixelStorei(k.UNPACK_SKIP_IMAGES,Qn),G===0&&Y.generateMipmaps&&k.generateMipmap(Ze),Se.unbindTexture()},this.initTexture=function(S){S.isCubeTexture?T.setTextureCube(S,0):S.isData3DTexture?T.setTexture3D(S,0):S.isDataArrayTexture||S.isCompressedArrayTexture?T.setTexture2DArray(S,0):T.setTexture2D(S,0),Se.unbindTexture()},this.resetState=function(){P=0,A=0,R=null,Se.reset(),W.reset()},typeof __THREE_DEVTOOLS__!="undefined"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return li}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;let t=this.getContext();t.drawingBufferColorSpace=e===Ql?"display-p3":"srgb",t.unpackColorSpace=ht.workingColorSpace===jo?"display-p3":"srgb"}get outputEncoding(){return console.warn("THREE.WebGLRenderer: Property .outputEncoding has been removed. Use .outputColorSpace instead."),this.outputColorSpace===Tt?rs:uf}set outputEncoding(e){console.warn("THREE.WebGLRenderer: Property .outputEncoding has been removed. Use .outputColorSpace instead."),this.outputColorSpace=e===rs?Tt:qt}get useLegacyLights(){return console.warn("THREE.WebGLRenderer: The property .useLegacyLights has been deprecated. Migrate your lighting according to the following guide: https://discourse.threejs.org/t/updates-to-lighting-in-three-js-r155/53733."),this._useLegacyLights}set useLegacyLights(e){console.warn("THREE.WebGLRenderer: The property .useLegacyLights has been deprecated. Migrate your lighting according to the following guide: https://discourse.threejs.org/t/updates-to-lighting-in-three-js-r155/53733."),this._useLegacyLights=e}},Il=class extends ea{};Il.prototype.isWebGL1Renderer=!0;var Ro=class i{constructor(e,t=1,n=1e3){this.isFog=!0,this.name="",this.color=new pe(e),this.near=t,this.far=n}clone(){return new i(this.color,this.near,this.far)}toJSON(){return{type:"Fog",name:this.name,color:this.color.getHex(),near:this.near,far:this.far}}},dr=class extends St{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__!="undefined"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,t){return super.copy(e,t),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){let t=super.toJSON(e);return this.fog!==null&&(t.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(t.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(t.object.backgroundIntensity=this.backgroundIntensity),t}},fr=class{constructor(e,t){this.isInterleavedBuffer=!0,this.array=e,this.stride=t,this.count=e!==void 0?e.length/t:0,this.usage=ml,this._updateRange={offset:0,count:-1},this.updateRanges=[],this.version=0,this.uuid=Fn()}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}get updateRange(){return console.warn("THREE.InterleavedBuffer: updateRange() is deprecated and will be removed in r169. Use addUpdateRange() instead."),this._updateRange}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.array=new e.array.constructor(e.array),this.count=e.count,this.stride=e.stride,this.usage=e.usage,this}copyAt(e,t,n){e*=this.stride,n*=t.stride;for(let s=0,r=this.stride;s<r;s++)this.array[e+s]=t.array[n+s];return this}set(e,t=0){return this.array.set(e,t),this}clone(e){e.arrayBuffers===void 0&&(e.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=Fn()),e.arrayBuffers[this.array.buffer._uuid]===void 0&&(e.arrayBuffers[this.array.buffer._uuid]=this.array.slice(0).buffer);let t=new this.array.constructor(e.arrayBuffers[this.array.buffer._uuid]),n=new this.constructor(t,this.stride);return n.setUsage(this.usage),n}onUpload(e){return this.onUploadCallback=e,this}toJSON(e){return e.arrayBuffers===void 0&&(e.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=Fn()),e.arrayBuffers[this.array.buffer._uuid]===void 0&&(e.arrayBuffers[this.array.buffer._uuid]=Array.from(new Uint32Array(this.array.buffer))),{uuid:this.uuid,buffer:this.array.buffer._uuid,type:this.array.constructor.name,stride:this.stride}}},pn=new L,cs=class i{constructor(e,t,n,s=!1){this.isInterleavedBufferAttribute=!0,this.name="",this.data=e,this.itemSize=t,this.offset=n,this.normalized=s}get count(){return this.data.count}get array(){return this.data.array}set needsUpdate(e){this.data.needsUpdate=e}applyMatrix4(e){for(let t=0,n=this.data.count;t<n;t++)pn.fromBufferAttribute(this,t),pn.applyMatrix4(e),this.setXYZ(t,pn.x,pn.y,pn.z);return this}applyNormalMatrix(e){for(let t=0,n=this.count;t<n;t++)pn.fromBufferAttribute(this,t),pn.applyNormalMatrix(e),this.setXYZ(t,pn.x,pn.y,pn.z);return this}transformDirection(e){for(let t=0,n=this.count;t<n;t++)pn.fromBufferAttribute(this,t),pn.transformDirection(e),this.setXYZ(t,pn.x,pn.y,pn.z);return this}setX(e,t){return this.normalized&&(t=ft(t,this.array)),this.data.array[e*this.data.stride+this.offset]=t,this}setY(e,t){return this.normalized&&(t=ft(t,this.array)),this.data.array[e*this.data.stride+this.offset+1]=t,this}setZ(e,t){return this.normalized&&(t=ft(t,this.array)),this.data.array[e*this.data.stride+this.offset+2]=t,this}setW(e,t){return this.normalized&&(t=ft(t,this.array)),this.data.array[e*this.data.stride+this.offset+3]=t,this}getX(e){let t=this.data.array[e*this.data.stride+this.offset];return this.normalized&&(t=Xn(t,this.array)),t}getY(e){let t=this.data.array[e*this.data.stride+this.offset+1];return this.normalized&&(t=Xn(t,this.array)),t}getZ(e){let t=this.data.array[e*this.data.stride+this.offset+2];return this.normalized&&(t=Xn(t,this.array)),t}getW(e){let t=this.data.array[e*this.data.stride+this.offset+3];return this.normalized&&(t=Xn(t,this.array)),t}setXY(e,t,n){return e=e*this.data.stride+this.offset,this.normalized&&(t=ft(t,this.array),n=ft(n,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=n,this}setXYZ(e,t,n,s){return e=e*this.data.stride+this.offset,this.normalized&&(t=ft(t,this.array),n=ft(n,this.array),s=ft(s,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=n,this.data.array[e+2]=s,this}setXYZW(e,t,n,s,r){return e=e*this.data.stride+this.offset,this.normalized&&(t=ft(t,this.array),n=ft(n,this.array),s=ft(s,this.array),r=ft(r,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=n,this.data.array[e+2]=s,this.data.array[e+3]=r,this}clone(e){if(e===void 0){console.log("THREE.InterleavedBufferAttribute.clone(): Cloning an interleaved buffer attribute will de-interleave buffer data.");let t=[];for(let n=0;n<this.count;n++){let s=n*this.data.stride+this.offset;for(let r=0;r<this.itemSize;r++)t.push(this.data.array[s+r])}return new Pt(new this.array.constructor(t),this.itemSize,this.normalized)}else return e.interleavedBuffers===void 0&&(e.interleavedBuffers={}),e.interleavedBuffers[this.data.uuid]===void 0&&(e.interleavedBuffers[this.data.uuid]=this.data.clone(e)),new i(e.interleavedBuffers[this.data.uuid],this.itemSize,this.offset,this.normalized)}toJSON(e){if(e===void 0){console.log("THREE.InterleavedBufferAttribute.toJSON(): Serializing an interleaved buffer attribute will de-interleave buffer data.");let t=[];for(let n=0;n<this.count;n++){let s=n*this.data.stride+this.offset;for(let r=0;r<this.itemSize;r++)t.push(this.data.array[s+r])}return{itemSize:this.itemSize,type:this.array.constructor.name,array:t,normalized:this.normalized}}else return e.interleavedBuffers===void 0&&(e.interleavedBuffers={}),e.interleavedBuffers[this.data.uuid]===void 0&&(e.interleavedBuffers[this.data.uuid]=this.data.toJSON(e)),{isInterleavedBufferAttribute:!0,itemSize:this.itemSize,data:this.data.uuid,offset:this.offset,normalized:this.normalized}}},ta=class extends ln{constructor(e){super(),this.isSpriteMaterial=!0,this.type="SpriteMaterial",this.color=new pe(16777215),this.map=null,this.alphaMap=null,this.rotation=0,this.sizeAttenuation=!0,this.transparent=!0,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.alphaMap=e.alphaMap,this.rotation=e.rotation,this.sizeAttenuation=e.sizeAttenuation,this.fog=e.fog,this}},Xs,Fr=new L,qs=new L,Ys=new L,Zs=new ze,Br=new ze,bf=new Xe,eo=new L,kr=new L,to=new L,zd=new ze,rl=new ze,Dd=new ze,Co=class extends St{constructor(e=new ta){if(super(),this.isSprite=!0,this.type="Sprite",Xs===void 0){Xs=new Nt;let t=new Float32Array([-.5,-.5,0,0,0,.5,-.5,0,1,0,.5,.5,0,1,1,-.5,.5,0,0,1]),n=new fr(t,5);Xs.setIndex([0,1,2,0,2,3]),Xs.setAttribute("position",new cs(n,3,0,!1)),Xs.setAttribute("uv",new cs(n,2,3,!1))}this.geometry=Xs,this.material=e,this.center=new ze(.5,.5)}raycast(e,t){e.camera===null&&console.error('THREE.Sprite: "Raycaster.camera" needs to be set in order to raycast against sprites.'),qs.setFromMatrixScale(this.matrixWorld),bf.copy(e.camera.matrixWorld),this.modelViewMatrix.multiplyMatrices(e.camera.matrixWorldInverse,this.matrixWorld),Ys.setFromMatrixPosition(this.modelViewMatrix),e.camera.isPerspectiveCamera&&this.material.sizeAttenuation===!1&&qs.multiplyScalar(-Ys.z);let n=this.material.rotation,s,r;n!==0&&(r=Math.cos(n),s=Math.sin(n));let a=this.center;no(eo.set(-.5,-.5,0),Ys,a,qs,s,r),no(kr.set(.5,-.5,0),Ys,a,qs,s,r),no(to.set(.5,.5,0),Ys,a,qs,s,r),zd.set(0,0),rl.set(1,0),Dd.set(1,1);let o=e.ray.intersectTriangle(eo,kr,to,!1,Fr);if(o===null&&(no(kr.set(-.5,.5,0),Ys,a,qs,s,r),rl.set(0,1),o=e.ray.intersectTriangle(eo,to,kr,!1,Fr),o===null))return;let c=e.ray.origin.distanceTo(Fr);c<e.near||c>e.far||t.push({distance:c,point:Fr.clone(),uv:ns.getInterpolation(Fr,eo,kr,to,zd,rl,Dd,new ze),face:null,object:this})}copy(e,t){return super.copy(e,t),e.center!==void 0&&this.center.copy(e.center),this.material=e.material,this}};function no(i,e,t,n,s,r){Zs.subVectors(i,t).addScalar(.5).multiply(n),s!==void 0?(Br.x=r*Zs.x-s*Zs.y,Br.y=s*Zs.x+r*Zs.y):Br.copy(Zs),i.copy(e),i.x+=Br.x,i.y+=Br.y,i.applyMatrix4(bf)}var Nd=new L,Ud=new _t,Od=new _t,jy=new L,Fd=new Xe,io=new L,al=new wn,Bd=new Xe,ol=new cr,Po=class extends de{constructor(e,t){super(e,t),this.isSkinnedMesh=!0,this.type="SkinnedMesh",this.bindMode=Mu,this.bindMatrix=new Xe,this.bindMatrixInverse=new Xe,this.boundingBox=null,this.boundingSphere=null}computeBoundingBox(){let e=this.geometry;this.boundingBox===null&&(this.boundingBox=new _n),this.boundingBox.makeEmpty();let t=e.getAttribute("position");for(let n=0;n<t.count;n++)this.getVertexPosition(n,io),this.boundingBox.expandByPoint(io)}computeBoundingSphere(){let e=this.geometry;this.boundingSphere===null&&(this.boundingSphere=new wn),this.boundingSphere.makeEmpty();let t=e.getAttribute("position");for(let n=0;n<t.count;n++)this.getVertexPosition(n,io),this.boundingSphere.expandByPoint(io)}copy(e,t){return super.copy(e,t),this.bindMode=e.bindMode,this.bindMatrix.copy(e.bindMatrix),this.bindMatrixInverse.copy(e.bindMatrixInverse),this.skeleton=e.skeleton,e.boundingBox!==null&&(this.boundingBox=e.boundingBox.clone()),e.boundingSphere!==null&&(this.boundingSphere=e.boundingSphere.clone()),this}raycast(e,t){let n=this.material,s=this.matrixWorld;n!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),al.copy(this.boundingSphere),al.applyMatrix4(s),e.ray.intersectsSphere(al)!==!1&&(Bd.copy(s).invert(),ol.copy(e.ray).applyMatrix4(Bd),!(this.boundingBox!==null&&ol.intersectsBox(this.boundingBox)===!1)&&this._computeIntersections(e,t,ol)))}getVertexPosition(e,t){return super.getVertexPosition(e,t),this.applyBoneTransform(e,t),t}bind(e,t){this.skeleton=e,t===void 0&&(this.updateMatrixWorld(!0),this.skeleton.calculateInverses(),t=this.matrixWorld),this.bindMatrix.copy(t),this.bindMatrixInverse.copy(t).invert()}pose(){this.skeleton.pose()}normalizeSkinWeights(){let e=new _t,t=this.geometry.attributes.skinWeight;for(let n=0,s=t.count;n<s;n++){e.fromBufferAttribute(t,n);let r=1/e.manhattanLength();r!==1/0?e.multiplyScalar(r):e.set(1,0,0,0),t.setXYZW(n,e.x,e.y,e.z,e.w)}}updateMatrixWorld(e){super.updateMatrixWorld(e),this.bindMode===Mu?this.bindMatrixInverse.copy(this.matrixWorld).invert():this.bindMode===bm?this.bindMatrixInverse.copy(this.bindMatrix).invert():console.warn("THREE.SkinnedMesh: Unrecognized bindMode: "+this.bindMode)}applyBoneTransform(e,t){let n=this.skeleton,s=this.geometry;Ud.fromBufferAttribute(s.attributes.skinIndex,e),Od.fromBufferAttribute(s.attributes.skinWeight,e),Nd.copy(t).applyMatrix4(this.bindMatrix),t.set(0,0,0);for(let r=0;r<4;r++){let a=Od.getComponent(r);if(a!==0){let o=Ud.getComponent(r);Fd.multiplyMatrices(n.bones[o].matrixWorld,n.boneInverses[o]),t.addScaledVector(jy.copy(Nd).applyMatrix4(Fd),a)}}return t.applyMatrix4(this.bindMatrixInverse)}boneTransform(e,t){return console.warn("THREE.SkinnedMesh: .boneTransform() was renamed to .applyBoneTransform() in r151."),this.applyBoneTransform(e,t)}},na=class extends St{constructor(){super(),this.isBone=!0,this.type="Bone"}},zl=class extends en{constructor(e=null,t=1,n=1,s,r,a,o,c,l=Wt,h=Wt,u,d){super(null,a,o,c,l,h,s,r,u,d),this.isDataTexture=!0,this.image={data:e,width:t,height:n},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}},kd=new Xe,Ky=new Xe,Lo=class i{constructor(e=[],t=[]){this.uuid=Fn(),this.bones=e.slice(0),this.boneInverses=t,this.boneMatrices=null,this.boneTexture=null,this.init()}init(){let e=this.bones,t=this.boneInverses;if(this.boneMatrices=new Float32Array(e.length*16),t.length===0)this.calculateInverses();else if(e.length!==t.length){console.warn("THREE.Skeleton: Number of inverse bone matrices does not match amount of bones."),this.boneInverses=[];for(let n=0,s=this.bones.length;n<s;n++)this.boneInverses.push(new Xe)}}calculateInverses(){this.boneInverses.length=0;for(let e=0,t=this.bones.length;e<t;e++){let n=new Xe;this.bones[e]&&n.copy(this.bones[e].matrixWorld).invert(),this.boneInverses.push(n)}}pose(){for(let e=0,t=this.bones.length;e<t;e++){let n=this.bones[e];n&&n.matrixWorld.copy(this.boneInverses[e]).invert()}for(let e=0,t=this.bones.length;e<t;e++){let n=this.bones[e];n&&(n.parent&&n.parent.isBone?(n.matrix.copy(n.parent.matrixWorld).invert(),n.matrix.multiply(n.matrixWorld)):n.matrix.copy(n.matrixWorld),n.matrix.decompose(n.position,n.quaternion,n.scale))}}update(){let e=this.bones,t=this.boneInverses,n=this.boneMatrices,s=this.boneTexture;for(let r=0,a=e.length;r<a;r++){let o=e[r]?e[r].matrixWorld:Ky;kd.multiplyMatrices(o,t[r]),kd.toArray(n,r*16)}s!==null&&(s.needsUpdate=!0)}clone(){return new i(this.bones,this.boneInverses)}computeBoneTexture(){let e=Math.sqrt(this.bones.length*4);e=Math.ceil(e/4)*4,e=Math.max(e,4);let t=new Float32Array(e*e*4);t.set(this.boneMatrices);let n=new zl(t,e,e,Rn,ci);return n.needsUpdate=!0,this.boneMatrices=t,this.boneTexture=n,this}getBoneByName(e){for(let t=0,n=this.bones.length;t<n;t++){let s=this.bones[t];if(s.name===e)return s}}dispose(){this.boneTexture!==null&&(this.boneTexture.dispose(),this.boneTexture=null)}fromJSON(e,t){this.uuid=e.uuid;for(let n=0,s=e.bones.length;n<s;n++){let r=e.bones[n],a=t[r];a===void 0&&(console.warn("THREE.Skeleton: No bone found with UUID:",r),a=new na),this.bones.push(a),this.boneInverses.push(new Xe().fromArray(e.boneInverses[n]))}return this.init(),this}toJSON(){let e={metadata:{version:4.6,type:"Skeleton",generator:"Skeleton.toJSON"},bones:[],boneInverses:[]};e.uuid=this.uuid;let t=this.bones,n=this.boneInverses;for(let s=0,r=t.length;s<r;s++){let a=t[s];e.bones.push(a.uuid);let o=n[s];e.boneInverses.push(o.toArray())}return e}},ls=class extends Pt{constructor(e,t,n,s=1){super(e,t,n),this.isInstancedBufferAttribute=!0,this.meshPerAttribute=s}copy(e){return super.copy(e),this.meshPerAttribute=e.meshPerAttribute,this}toJSON(){let e=super.toJSON();return e.meshPerAttribute=this.meshPerAttribute,e.isInstancedBufferAttribute=!0,e}},js=new Xe,Hd=new Xe,so=[],Gd=new _n,$y=new Xe,Hr=new de,Gr=new wn,pr=class extends de{constructor(e,t,n){super(e,t),this.isInstancedMesh=!0,this.instanceMatrix=new ls(new Float32Array(n*16),16),this.instanceColor=null,this.count=n,this.boundingBox=null,this.boundingSphere=null;for(let s=0;s<n;s++)this.setMatrixAt(s,$y)}computeBoundingBox(){let e=this.geometry,t=this.count;this.boundingBox===null&&(this.boundingBox=new _n),e.boundingBox===null&&e.computeBoundingBox(),this.boundingBox.makeEmpty();for(let n=0;n<t;n++)this.getMatrixAt(n,js),Gd.copy(e.boundingBox).applyMatrix4(js),this.boundingBox.union(Gd)}computeBoundingSphere(){let e=this.geometry,t=this.count;this.boundingSphere===null&&(this.boundingSphere=new wn),e.boundingSphere===null&&e.computeBoundingSphere(),this.boundingSphere.makeEmpty();for(let n=0;n<t;n++)this.getMatrixAt(n,js),Gr.copy(e.boundingSphere).applyMatrix4(js),this.boundingSphere.union(Gr)}copy(e,t){return super.copy(e,t),this.instanceMatrix.copy(e.instanceMatrix),e.instanceColor!==null&&(this.instanceColor=e.instanceColor.clone()),this.count=e.count,e.boundingBox!==null&&(this.boundingBox=e.boundingBox.clone()),e.boundingSphere!==null&&(this.boundingSphere=e.boundingSphere.clone()),this}getColorAt(e,t){t.fromArray(this.instanceColor.array,e*3)}getMatrixAt(e,t){t.fromArray(this.instanceMatrix.array,e*16)}raycast(e,t){let n=this.matrixWorld,s=this.count;if(Hr.geometry=this.geometry,Hr.material=this.material,Hr.material!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),Gr.copy(this.boundingSphere),Gr.applyMatrix4(n),e.ray.intersectsSphere(Gr)!==!1))for(let r=0;r<s;r++){this.getMatrixAt(r,js),Hd.multiplyMatrices(n,js),Hr.matrixWorld=Hd,Hr.raycast(e,so);for(let a=0,o=so.length;a<o;a++){let c=so[a];c.instanceId=r,c.object=this,t.push(c)}so.length=0}}setColorAt(e,t){this.instanceColor===null&&(this.instanceColor=new ls(new Float32Array(this.instanceMatrix.count*3),3)),t.toArray(this.instanceColor.array,e*3)}setMatrixAt(e,t){t.toArray(this.instanceMatrix.array,e*16)}updateMorphTargets(){}dispose(){this.dispatchEvent({type:"dispose"})}};var ia=class extends ln{constructor(e){super(),this.isLineBasicMaterial=!0,this.type="LineBasicMaterial",this.color=new pe(16777215),this.map=null,this.linewidth=1,this.linecap="round",this.linejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.linewidth=e.linewidth,this.linecap=e.linecap,this.linejoin=e.linejoin,this.fog=e.fog,this}},Vd=new L,Wd=new L,Xd=new Xe,cl=new cr,ro=new wn,mr=class extends St{constructor(e=new Nt,t=new ia){super(),this.isLine=!0,this.type="Line",this.geometry=e,this.material=t,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}computeLineDistances(){let e=this.geometry;if(e.index===null){let t=e.attributes.position,n=[0];for(let s=1,r=t.count;s<r;s++)Vd.fromBufferAttribute(t,s-1),Wd.fromBufferAttribute(t,s),n[s]=n[s-1],n[s]+=Vd.distanceTo(Wd);e.setAttribute("lineDistance",new ut(n,1))}else console.warn("THREE.Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}raycast(e,t){let n=this.geometry,s=this.matrixWorld,r=e.params.Line.threshold,a=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),ro.copy(n.boundingSphere),ro.applyMatrix4(s),ro.radius+=r,e.ray.intersectsSphere(ro)===!1)return;Xd.copy(s).invert(),cl.copy(e.ray).applyMatrix4(Xd);let o=r/((this.scale.x+this.scale.y+this.scale.z)/3),c=o*o,l=new L,h=new L,u=new L,d=new L,f=this.isLineSegments?2:1,p=n.index,g=n.attributes.position;if(p!==null){let m=Math.max(0,a.start),y=Math.min(p.count,a.start+a.count);for(let _=m,w=y-1;_<w;_+=f){let P=p.getX(_),A=p.getX(_+1);if(l.fromBufferAttribute(g,P),h.fromBufferAttribute(g,A),cl.distanceSqToSegment(l,h,d,u)>c)continue;d.applyMatrix4(this.matrixWorld);let F=e.ray.origin.distanceTo(d);F<e.near||F>e.far||t.push({distance:F,point:u.clone().applyMatrix4(this.matrixWorld),index:_,face:null,faceIndex:null,object:this})}}else{let m=Math.max(0,a.start),y=Math.min(g.count,a.start+a.count);for(let _=m,w=y-1;_<w;_+=f){if(l.fromBufferAttribute(g,_),h.fromBufferAttribute(g,_+1),cl.distanceSqToSegment(l,h,d,u)>c)continue;d.applyMatrix4(this.matrixWorld);let A=e.ray.origin.distanceTo(d);A<e.near||A>e.far||t.push({distance:A,point:u.clone().applyMatrix4(this.matrixWorld),index:_,face:null,faceIndex:null,object:this})}}}updateMorphTargets(){let t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){let s=t[n[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,a=s.length;r<a;r++){let o=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=r}}}}},qd=new L,Yd=new L,Io=class extends mr{constructor(e,t){super(e,t),this.isLineSegments=!0,this.type="LineSegments"}computeLineDistances(){let e=this.geometry;if(e.index===null){let t=e.attributes.position,n=[];for(let s=0,r=t.count;s<r;s+=2)qd.fromBufferAttribute(t,s),Yd.fromBufferAttribute(t,s+1),n[s]=s===0?0:n[s-1],n[s+1]=n[s]+qd.distanceTo(Yd);e.setAttribute("lineDistance",new ut(n,1))}else console.warn("THREE.LineSegments.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}},zo=class extends mr{constructor(e,t){super(e,t),this.isLineLoop=!0,this.type="LineLoop"}},hs=class extends ln{constructor(e){super(),this.isPointsMaterial=!0,this.type="PointsMaterial",this.color=new pe(16777215),this.map=null,this.alphaMap=null,this.size=1,this.sizeAttenuation=!0,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.alphaMap=e.alphaMap,this.size=e.size,this.sizeAttenuation=e.sizeAttenuation,this.fog=e.fog,this}},Zd=new Xe,Dl=new cr,ao=new wn,oo=new L,gr=class extends St{constructor(e=new Nt,t=new hs){super(),this.isPoints=!0,this.type="Points",this.geometry=e,this.material=t,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}raycast(e,t){let n=this.geometry,s=this.matrixWorld,r=e.params.Points.threshold,a=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),ao.copy(n.boundingSphere),ao.applyMatrix4(s),ao.radius+=r,e.ray.intersectsSphere(ao)===!1)return;Zd.copy(s).invert(),Dl.copy(e.ray).applyMatrix4(Zd);let o=r/((this.scale.x+this.scale.y+this.scale.z)/3),c=o*o,l=n.index,u=n.attributes.position;if(l!==null){let d=Math.max(0,a.start),f=Math.min(l.count,a.start+a.count);for(let p=d,x=f;p<x;p++){let g=l.getX(p);oo.fromBufferAttribute(u,g),jd(oo,g,c,s,e,t,this)}}else{let d=Math.max(0,a.start),f=Math.min(u.count,a.start+a.count);for(let p=d,x=f;p<x;p++)oo.fromBufferAttribute(u,p),jd(oo,p,c,s,e,t,this)}}updateMorphTargets(){let t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){let s=t[n[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,a=s.length;r<a;r++){let o=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=r}}}}};function jd(i,e,t,n,s,r,a){let o=Dl.distanceSqToPoint(i);if(o<t){let c=new L;Dl.closestPointToPoint(i,c),c.applyMatrix4(n);let l=s.ray.origin.distanceTo(c);if(l<s.near||l>s.far)return;r.push({distance:l,distanceToRay:Math.sqrt(o),point:c,index:e,face:null,object:a})}}var Do=class extends en{constructor(e,t,n,s,r,a,o,c,l){super(e,t,n,s,r,a,o,c,l),this.isCanvasTexture=!0,this.needsUpdate=!0}};var Ft=class i extends Nt{constructor(e=1,t=1,n=1,s=32,r=1,a=!1,o=0,c=Math.PI*2){super(),this.type="CylinderGeometry",this.parameters={radiusTop:e,radiusBottom:t,height:n,radialSegments:s,heightSegments:r,openEnded:a,thetaStart:o,thetaLength:c};let l=this;s=Math.floor(s),r=Math.floor(r);let h=[],u=[],d=[],f=[],p=0,x=[],g=n/2,m=0;y(),a===!1&&(e>0&&_(!0),t>0&&_(!1)),this.setIndex(h),this.setAttribute("position",new ut(u,3)),this.setAttribute("normal",new ut(d,3)),this.setAttribute("uv",new ut(f,2));function y(){let w=new L,P=new L,A=0,R=(t-e)/n;for(let F=0;F<=r;F++){let M=[],E=F/r,O=E*(t-e)+e;for(let j=0;j<=s;j++){let ae=j/s,z=ae*c+o,B=Math.sin(z),J=Math.cos(z);P.x=O*B,P.y=-E*n+g,P.z=O*J,u.push(P.x,P.y,P.z),w.set(B,R,J).normalize(),d.push(w.x,w.y,w.z),f.push(ae,1-E),M.push(p++)}x.push(M)}for(let F=0;F<s;F++)for(let M=0;M<r;M++){let E=x[M][F],O=x[M+1][F],j=x[M+1][F+1],ae=x[M][F+1];h.push(E,O,ae),h.push(O,j,ae),A+=6}l.addGroup(m,A,0),m+=A}function _(w){let P=p,A=new ze,R=new L,F=0,M=w===!0?e:t,E=w===!0?1:-1;for(let j=1;j<=s;j++)u.push(0,g*E,0),d.push(0,E,0),f.push(.5,.5),p++;let O=p;for(let j=0;j<=s;j++){let z=j/s*c+o,B=Math.cos(z),J=Math.sin(z);R.x=M*J,R.y=g*E,R.z=M*B,u.push(R.x,R.y,R.z),d.push(0,E,0),A.x=B*.5+.5,A.y=J*.5*E+.5,f.push(A.x,A.y),p++}for(let j=0;j<s;j++){let ae=P+j,z=O+j;w===!0?h.push(z,z+1,ae):h.push(z+1,z,ae),F+=3}l.addGroup(m,F,w===!0?1:2),m+=F}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new i(e.radiusTop,e.radiusBottom,e.height,e.radialSegments,e.heightSegments,e.openEnded,e.thetaStart,e.thetaLength)}},tn=class i extends Ft{constructor(e=1,t=1,n=32,s=1,r=!1,a=0,o=Math.PI*2){super(0,e,t,n,s,r,a,o),this.type="ConeGeometry",this.parameters={radius:e,height:t,radialSegments:n,heightSegments:s,openEnded:r,thetaStart:a,thetaLength:o}}static fromJSON(e){return new i(e.radius,e.height,e.radialSegments,e.heightSegments,e.openEnded,e.thetaStart,e.thetaLength)}},sa=class i extends Nt{constructor(e=[],t=[],n=1,s=0){super(),this.type="PolyhedronGeometry",this.parameters={vertices:e,indices:t,radius:n,detail:s};let r=[],a=[];o(s),l(n),h(),this.setAttribute("position",new ut(r,3)),this.setAttribute("normal",new ut(r.slice(),3)),this.setAttribute("uv",new ut(a,2)),s===0?this.computeVertexNormals():this.normalizeNormals();function o(y){let _=new L,w=new L,P=new L;for(let A=0;A<t.length;A+=3)f(t[A+0],_),f(t[A+1],w),f(t[A+2],P),c(_,w,P,y)}function c(y,_,w,P){let A=P+1,R=[];for(let F=0;F<=A;F++){R[F]=[];let M=y.clone().lerp(w,F/A),E=_.clone().lerp(w,F/A),O=A-F;for(let j=0;j<=O;j++)j===0&&F===A?R[F][j]=M:R[F][j]=M.clone().lerp(E,j/O)}for(let F=0;F<A;F++)for(let M=0;M<2*(A-F)-1;M++){let E=Math.floor(M/2);M%2===0?(d(R[F][E+1]),d(R[F+1][E]),d(R[F][E])):(d(R[F][E+1]),d(R[F+1][E+1]),d(R[F+1][E]))}}function l(y){let _=new L;for(let w=0;w<r.length;w+=3)_.x=r[w+0],_.y=r[w+1],_.z=r[w+2],_.normalize().multiplyScalar(y),r[w+0]=_.x,r[w+1]=_.y,r[w+2]=_.z}function h(){let y=new L;for(let _=0;_<r.length;_+=3){y.x=r[_+0],y.y=r[_+1],y.z=r[_+2];let w=g(y)/2/Math.PI+.5,P=m(y)/Math.PI+.5;a.push(w,1-P)}p(),u()}function u(){for(let y=0;y<a.length;y+=6){let _=a[y+0],w=a[y+2],P=a[y+4],A=Math.max(_,w,P),R=Math.min(_,w,P);A>.9&&R<.1&&(_<.2&&(a[y+0]+=1),w<.2&&(a[y+2]+=1),P<.2&&(a[y+4]+=1))}}function d(y){r.push(y.x,y.y,y.z)}function f(y,_){let w=y*3;_.x=e[w+0],_.y=e[w+1],_.z=e[w+2]}function p(){let y=new L,_=new L,w=new L,P=new L,A=new ze,R=new ze,F=new ze;for(let M=0,E=0;M<r.length;M+=9,E+=6){y.set(r[M+0],r[M+1],r[M+2]),_.set(r[M+3],r[M+4],r[M+5]),w.set(r[M+6],r[M+7],r[M+8]),A.set(a[E+0],a[E+1]),R.set(a[E+2],a[E+3]),F.set(a[E+4],a[E+5]),P.copy(y).add(_).add(w).divideScalar(3);let O=g(P);x(A,E+0,y,O),x(R,E+2,_,O),x(F,E+4,w,O)}}function x(y,_,w,P){P<0&&y.x===1&&(a[_]=y.x-1),w.x===0&&w.z===0&&(a[_]=P/2/Math.PI+.5)}function g(y){return Math.atan2(y.z,-y.x)}function m(y){return Math.atan2(-y.y,Math.sqrt(y.x*y.x+y.z*y.z))}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new i(e.vertices,e.indices,e.radius,e.details)}},No=class i extends sa{constructor(e=1,t=0){let n=(1+Math.sqrt(5))/2,s=1/n,r=[-1,-1,-1,-1,-1,1,-1,1,-1,-1,1,1,1,-1,-1,1,-1,1,1,1,-1,1,1,1,0,-s,-n,0,-s,n,0,s,-n,0,s,n,-s,-n,0,-s,n,0,s,-n,0,s,n,0,-n,0,-s,n,0,-s,-n,0,s,n,0,s],a=[3,11,7,3,7,15,3,15,13,7,19,17,7,17,6,7,6,15,17,4,8,17,8,10,17,10,6,8,0,16,8,16,2,8,2,10,0,12,1,0,1,18,0,18,16,6,10,2,6,2,13,6,13,15,2,16,18,2,18,3,2,3,13,18,1,9,18,9,11,18,11,3,4,14,12,4,12,0,4,0,8,11,9,5,11,5,19,11,19,7,19,5,14,19,14,4,19,4,17,1,12,14,1,14,5,1,5,9];super(r,a,e,t),this.type="DodecahedronGeometry",this.parameters={radius:e,detail:t}}static fromJSON(e){return new i(e.radius,e.detail)}};var Yn=class i extends sa{constructor(e=1,t=0){let n=(1+Math.sqrt(5))/2,s=[-1,n,0,1,n,0,-1,-n,0,1,-n,0,0,-1,n,0,1,n,0,-1,-n,0,1,-n,n,0,-1,n,0,1,-n,0,-1,-n,0,1],r=[0,11,5,0,5,1,0,1,7,0,7,10,0,10,11,1,5,9,5,11,4,11,10,2,10,7,6,7,1,8,3,9,4,3,4,2,3,2,6,3,6,8,3,8,9,4,9,5,2,4,11,6,2,10,8,6,7,9,8,1];super(s,r,e,t),this.type="IcosahedronGeometry",this.parameters={radius:e,detail:t}}static fromJSON(e){return new i(e.radius,e.detail)}},xr=class i extends sa{constructor(e=1,t=0){let n=[1,0,0,-1,0,0,0,1,0,0,-1,0,0,0,1,0,0,-1],s=[0,2,4,0,4,3,0,3,5,0,5,2,1,2,5,1,5,3,1,3,4,1,4,2];super(n,s,e,t),this.type="OctahedronGeometry",this.parameters={radius:e,detail:t}}static fromJSON(e){return new i(e.radius,e.detail)}},ra=class i extends Nt{constructor(e=.5,t=1,n=32,s=1,r=0,a=Math.PI*2){super(),this.type="RingGeometry",this.parameters={innerRadius:e,outerRadius:t,thetaSegments:n,phiSegments:s,thetaStart:r,thetaLength:a},n=Math.max(3,n),s=Math.max(1,s);let o=[],c=[],l=[],h=[],u=e,d=(t-e)/s,f=new L,p=new ze;for(let x=0;x<=s;x++){for(let g=0;g<=n;g++){let m=r+g/n*a;f.x=u*Math.cos(m),f.y=u*Math.sin(m),c.push(f.x,f.y,f.z),l.push(0,0,1),p.x=(f.x/t+1)/2,p.y=(f.y/t+1)/2,h.push(p.x,p.y)}u+=d}for(let x=0;x<s;x++){let g=x*(n+1);for(let m=0;m<n;m++){let y=m+g,_=y,w=y+n+1,P=y+n+2,A=y+1;o.push(_,w,A),o.push(w,P,A)}}this.setIndex(o),this.setAttribute("position",new ut(c,3)),this.setAttribute("normal",new ut(l,3)),this.setAttribute("uv",new ut(h,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new i(e.innerRadius,e.outerRadius,e.thetaSegments,e.phiSegments,e.thetaStart,e.thetaLength)}};var aa=class i extends Nt{constructor(e=1,t=32,n=16,s=0,r=Math.PI*2,a=0,o=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:e,widthSegments:t,heightSegments:n,phiStart:s,phiLength:r,thetaStart:a,thetaLength:o},t=Math.max(3,Math.floor(t)),n=Math.max(2,Math.floor(n));let c=Math.min(a+o,Math.PI),l=0,h=[],u=new L,d=new L,f=[],p=[],x=[],g=[];for(let m=0;m<=n;m++){let y=[],_=m/n,w=0;m===0&&a===0?w=.5/t:m===n&&c===Math.PI&&(w=-.5/t);for(let P=0;P<=t;P++){let A=P/t;u.x=-e*Math.cos(s+A*r)*Math.sin(a+_*o),u.y=e*Math.cos(a+_*o),u.z=e*Math.sin(s+A*r)*Math.sin(a+_*o),p.push(u.x,u.y,u.z),d.copy(u).normalize(),x.push(d.x,d.y,d.z),g.push(A+w,1-_),y.push(l++)}h.push(y)}for(let m=0;m<n;m++)for(let y=0;y<t;y++){let _=h[m][y+1],w=h[m][y],P=h[m+1][y],A=h[m+1][y+1];(m!==0||a>0)&&f.push(_,w,A),(m!==n-1||c<Math.PI)&&f.push(w,P,A)}this.setIndex(f),this.setAttribute("position",new ut(p,3)),this.setAttribute("normal",new ut(x,3)),this.setAttribute("uv",new ut(g,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new i(e.radius,e.widthSegments,e.heightSegments,e.phiStart,e.phiLength,e.thetaStart,e.thetaLength)}};var oa=class i extends Nt{constructor(e=1,t=.4,n=12,s=48,r=Math.PI*2){super(),this.type="TorusGeometry",this.parameters={radius:e,tube:t,radialSegments:n,tubularSegments:s,arc:r},n=Math.floor(n),s=Math.floor(s);let a=[],o=[],c=[],l=[],h=new L,u=new L,d=new L;for(let f=0;f<=n;f++)for(let p=0;p<=s;p++){let x=p/s*r,g=f/n*Math.PI*2;u.x=(e+t*Math.cos(g))*Math.cos(x),u.y=(e+t*Math.cos(g))*Math.sin(x),u.z=t*Math.sin(g),o.push(u.x,u.y,u.z),h.x=e*Math.cos(x),h.y=e*Math.sin(x),d.subVectors(u,h).normalize(),c.push(d.x,d.y,d.z),l.push(p/s),l.push(f/n)}for(let f=1;f<=n;f++)for(let p=1;p<=s;p++){let x=(s+1)*f+p-1,g=(s+1)*(f-1)+p-1,m=(s+1)*(f-1)+p,y=(s+1)*f+p;a.push(x,g,y),a.push(g,m,y)}this.setIndex(a),this.setAttribute("position",new ut(o,3)),this.setAttribute("normal",new ut(c,3)),this.setAttribute("uv",new ut(l,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new i(e.radius,e.tube,e.radialSegments,e.tubularSegments,e.arc)}};var fi=class extends ln{constructor(e){super(),this.isMeshStandardMaterial=!0,this.defines={STANDARD:""},this.type="MeshStandardMaterial",this.color=new pe(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new pe(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=Zo,this.normalScale=new ze(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.defines={STANDARD:""},this.color.copy(e.color),this.roughness=e.roughness,this.metalness=e.metalness,this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.roughnessMap=e.roughnessMap,this.metalnessMap=e.metalnessMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapIntensity=e.envMapIntensity,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}},Pn=class extends fi{constructor(e){super(),this.isMeshPhysicalMaterial=!0,this.defines={STANDARD:"",PHYSICAL:""},this.type="MeshPhysicalMaterial",this.anisotropyRotation=0,this.anisotropyMap=null,this.clearcoatMap=null,this.clearcoatRoughness=0,this.clearcoatRoughnessMap=null,this.clearcoatNormalScale=new ze(1,1),this.clearcoatNormalMap=null,this.ior=1.5,Object.defineProperty(this,"reflectivity",{get:function(){return on(2.5*(this.ior-1)/(this.ior+1),0,1)},set:function(t){this.ior=(1+.4*t)/(1-.4*t)}}),this.iridescenceMap=null,this.iridescenceIOR=1.3,this.iridescenceThicknessRange=[100,400],this.iridescenceThicknessMap=null,this.sheenColor=new pe(0),this.sheenColorMap=null,this.sheenRoughness=1,this.sheenRoughnessMap=null,this.transmissionMap=null,this.thickness=0,this.thicknessMap=null,this.attenuationDistance=1/0,this.attenuationColor=new pe(1,1,1),this.specularIntensity=1,this.specularIntensityMap=null,this.specularColor=new pe(1,1,1),this.specularColorMap=null,this._anisotropy=0,this._clearcoat=0,this._iridescence=0,this._sheen=0,this._transmission=0,this.setValues(e)}get anisotropy(){return this._anisotropy}set anisotropy(e){this._anisotropy>0!=e>0&&this.version++,this._anisotropy=e}get clearcoat(){return this._clearcoat}set clearcoat(e){this._clearcoat>0!=e>0&&this.version++,this._clearcoat=e}get iridescence(){return this._iridescence}set iridescence(e){this._iridescence>0!=e>0&&this.version++,this._iridescence=e}get sheen(){return this._sheen}set sheen(e){this._sheen>0!=e>0&&this.version++,this._sheen=e}get transmission(){return this._transmission}set transmission(e){this._transmission>0!=e>0&&this.version++,this._transmission=e}copy(e){return super.copy(e),this.defines={STANDARD:"",PHYSICAL:""},this.anisotropy=e.anisotropy,this.anisotropyRotation=e.anisotropyRotation,this.anisotropyMap=e.anisotropyMap,this.clearcoat=e.clearcoat,this.clearcoatMap=e.clearcoatMap,this.clearcoatRoughness=e.clearcoatRoughness,this.clearcoatRoughnessMap=e.clearcoatRoughnessMap,this.clearcoatNormalMap=e.clearcoatNormalMap,this.clearcoatNormalScale.copy(e.clearcoatNormalScale),this.ior=e.ior,this.iridescence=e.iridescence,this.iridescenceMap=e.iridescenceMap,this.iridescenceIOR=e.iridescenceIOR,this.iridescenceThicknessRange=[...e.iridescenceThicknessRange],this.iridescenceThicknessMap=e.iridescenceThicknessMap,this.sheen=e.sheen,this.sheenColor.copy(e.sheenColor),this.sheenColorMap=e.sheenColorMap,this.sheenRoughness=e.sheenRoughness,this.sheenRoughnessMap=e.sheenRoughnessMap,this.transmission=e.transmission,this.transmissionMap=e.transmissionMap,this.thickness=e.thickness,this.thicknessMap=e.thicknessMap,this.attenuationDistance=e.attenuationDistance,this.attenuationColor.copy(e.attenuationColor),this.specularIntensity=e.specularIntensity,this.specularIntensityMap=e.specularIntensityMap,this.specularColor.copy(e.specularColor),this.specularColorMap=e.specularColorMap,this}},Uo=class extends ln{constructor(e){super(),this.isMeshPhongMaterial=!0,this.type="MeshPhongMaterial",this.color=new pe(16777215),this.specular=new pe(1118481),this.shininess=30,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new pe(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=Zo,this.normalScale=new ze(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.combine=Xo,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.specular.copy(e.specular),this.shininess=e.shininess,this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}};var Bt=class extends ln{constructor(e){super(),this.isMeshLambertMaterial=!0,this.type="MeshLambertMaterial",this.color=new pe(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new pe(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=Zo,this.normalScale=new ze(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.combine=Xo,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}};function co(i,e,t){return!i||!t&&i.constructor===e?i:typeof e.BYTES_PER_ELEMENT=="number"?new e(i):Array.prototype.slice.call(i)}function Jy(i){return ArrayBuffer.isView(i)&&!(i instanceof DataView)}function Qy(i){function e(s,r){return i[s]-i[r]}let t=i.length,n=new Array(t);for(let s=0;s!==t;++s)n[s]=s;return n.sort(e),n}function Kd(i,e,t){let n=i.length,s=new i.constructor(n);for(let r=0,a=0;a!==n;++r){let o=t[r]*e;for(let c=0;c!==e;++c)s[a++]=i[o+c]}return s}function wf(i,e,t,n){let s=1,r=i[0];for(;r!==void 0&&r[n]===void 0;)r=i[s++];if(r===void 0)return;let a=r[n];if(a!==void 0)if(Array.isArray(a))do a=r[n],a!==void 0&&(e.push(r.time),t.push.apply(t,a)),r=i[s++];while(r!==void 0);else if(a.toArray!==void 0)do a=r[n],a!==void 0&&(e.push(r.time),a.toArray(t,t.length)),r=i[s++];while(r!==void 0);else do a=r[n],a!==void 0&&(e.push(r.time),t.push(a)),r=i[s++];while(r!==void 0)}var Di=class{constructor(e,t,n,s){this.parameterPositions=e,this._cachedIndex=0,this.resultBuffer=s!==void 0?s:new t.constructor(n),this.sampleValues=t,this.valueSize=n,this.settings=null,this.DefaultSettings_={}}evaluate(e){let t=this.parameterPositions,n=this._cachedIndex,s=t[n],r=t[n-1];e:{t:{let a;n:{i:if(!(e<s)){for(let o=n+2;;){if(s===void 0){if(e<r)break i;return n=t.length,this._cachedIndex=n,this.copySampleValue_(n-1)}if(n===o)break;if(r=s,s=t[++n],e<s)break t}a=t.length;break n}if(!(e>=r)){let o=t[1];e<o&&(n=2,r=o);for(let c=n-2;;){if(r===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(n===c)break;if(s=r,r=t[--n-1],e>=r)break t}a=n,n=0;break n}break e}for(;n<a;){let o=n+a>>>1;e<t[o]?a=o:n=o+1}if(s=t[n],r=t[n-1],r===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(s===void 0)return n=t.length,this._cachedIndex=n,this.copySampleValue_(n-1)}this._cachedIndex=n,this.intervalChanged_(n,r,s)}return this.interpolate_(n,r,e,s)}getSettings_(){return this.settings||this.DefaultSettings_}copySampleValue_(e){let t=this.resultBuffer,n=this.sampleValues,s=this.valueSize,r=e*s;for(let a=0;a!==s;++a)t[a]=n[r+a];return t}interpolate_(){throw new Error("call to abstract method")}intervalChanged_(){}},Nl=class extends Di{constructor(e,t,n,s){super(e,t,n,s),this._weightPrev=-0,this._offsetPrev=-0,this._weightNext=-0,this._offsetNext=-0,this.DefaultSettings_={endingStart:Ks,endingEnd:Ks}}intervalChanged_(e,t,n){let s=this.parameterPositions,r=e-2,a=e+1,o=s[r],c=s[a];if(o===void 0)switch(this.getSettings_().endingStart){case $s:r=e,o=2*t-n;break;case uo:r=s.length-2,o=t+s[r]-s[r+1];break;default:r=e,o=n}if(c===void 0)switch(this.getSettings_().endingEnd){case $s:a=e,c=2*n-t;break;case uo:a=1,c=n+s[1]-s[0];break;default:a=e-1,c=t}let l=(n-t)*.5,h=this.valueSize;this._weightPrev=l/(t-o),this._weightNext=l/(c-n),this._offsetPrev=r*h,this._offsetNext=a*h}interpolate_(e,t,n,s){let r=this.resultBuffer,a=this.sampleValues,o=this.valueSize,c=e*o,l=c-o,h=this._offsetPrev,u=this._offsetNext,d=this._weightPrev,f=this._weightNext,p=(n-t)/(s-t),x=p*p,g=x*p,m=-d*g+2*d*x-d*p,y=(1+d)*g+(-1.5-2*d)*x+(-.5+d)*p+1,_=(-1-f)*g+(1.5+f)*x+.5*p,w=f*g-f*x;for(let P=0;P!==o;++P)r[P]=m*a[h+P]+y*a[l+P]+_*a[c+P]+w*a[u+P];return r}},Oo=class extends Di{constructor(e,t,n,s){super(e,t,n,s)}interpolate_(e,t,n,s){let r=this.resultBuffer,a=this.sampleValues,o=this.valueSize,c=e*o,l=c-o,h=(n-t)/(s-t),u=1-h;for(let d=0;d!==o;++d)r[d]=a[l+d]*u+a[c+d]*h;return r}},Ul=class extends Di{constructor(e,t,n,s){super(e,t,n,s)}interpolate_(e){return this.copySampleValue_(e-1)}},Ln=class{constructor(e,t,n,s){if(e===void 0)throw new Error("THREE.KeyframeTrack: track name is undefined");if(t===void 0||t.length===0)throw new Error("THREE.KeyframeTrack: no keyframes in track named "+e);this.name=e,this.times=co(t,this.TimeBufferType),this.values=co(n,this.ValueBufferType),this.setInterpolation(s||this.DefaultInterpolation)}static toJSON(e){let t=e.constructor,n;if(t.toJSON!==this.toJSON)n=t.toJSON(e);else{n={name:e.name,times:co(e.times,Array),values:co(e.values,Array)};let s=e.getInterpolation();s!==e.DefaultInterpolation&&(n.interpolation=s)}return n.type=e.ValueTypeName,n}InterpolantFactoryMethodDiscrete(e){return new Ul(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodLinear(e){return new Oo(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodSmooth(e){return new Nl(this.times,this.values,this.getValueSize(),e)}setInterpolation(e){let t;switch(e){case ar:t=this.InterpolantFactoryMethodDiscrete;break;case os:t=this.InterpolantFactoryMethodLinear;break;case Uc:t=this.InterpolantFactoryMethodSmooth;break}if(t===void 0){let n="unsupported interpolation for "+this.ValueTypeName+" keyframe track named "+this.name;if(this.createInterpolant===void 0)if(e!==this.DefaultInterpolation)this.setInterpolation(this.DefaultInterpolation);else throw new Error(n);return console.warn("THREE.KeyframeTrack:",n),this}return this.createInterpolant=t,this}getInterpolation(){switch(this.createInterpolant){case this.InterpolantFactoryMethodDiscrete:return ar;case this.InterpolantFactoryMethodLinear:return os;case this.InterpolantFactoryMethodSmooth:return Uc}}getValueSize(){return this.values.length/this.times.length}shift(e){if(e!==0){let t=this.times;for(let n=0,s=t.length;n!==s;++n)t[n]+=e}return this}scale(e){if(e!==1){let t=this.times;for(let n=0,s=t.length;n!==s;++n)t[n]*=e}return this}trim(e,t){let n=this.times,s=n.length,r=0,a=s-1;for(;r!==s&&n[r]<e;)++r;for(;a!==-1&&n[a]>t;)--a;if(++a,r!==0||a!==s){r>=a&&(a=Math.max(a,1),r=a-1);let o=this.getValueSize();this.times=n.slice(r,a),this.values=this.values.slice(r*o,a*o)}return this}validate(){let e=!0,t=this.getValueSize();t-Math.floor(t)!==0&&(console.error("THREE.KeyframeTrack: Invalid value size in track.",this),e=!1);let n=this.times,s=this.values,r=n.length;r===0&&(console.error("THREE.KeyframeTrack: Track is empty.",this),e=!1);let a=null;for(let o=0;o!==r;o++){let c=n[o];if(typeof c=="number"&&isNaN(c)){console.error("THREE.KeyframeTrack: Time is not a valid number.",this,o,c),e=!1;break}if(a!==null&&a>c){console.error("THREE.KeyframeTrack: Out of order keys.",this,o,c,a),e=!1;break}a=c}if(s!==void 0&&Jy(s))for(let o=0,c=s.length;o!==c;++o){let l=s[o];if(isNaN(l)){console.error("THREE.KeyframeTrack: Value is not a valid number.",this,o,l),e=!1;break}}return e}optimize(){let e=this.times.slice(),t=this.values.slice(),n=this.getValueSize(),s=this.getInterpolation()===Uc,r=e.length-1,a=1;for(let o=1;o<r;++o){let c=!1,l=e[o],h=e[o+1];if(l!==h&&(o!==1||l!==e[0]))if(s)c=!0;else{let u=o*n,d=u-n,f=u+n;for(let p=0;p!==n;++p){let x=t[u+p];if(x!==t[d+p]||x!==t[f+p]){c=!0;break}}}if(c){if(o!==a){e[a]=e[o];let u=o*n,d=a*n;for(let f=0;f!==n;++f)t[d+f]=t[u+f]}++a}}if(r>0){e[a]=e[r];for(let o=r*n,c=a*n,l=0;l!==n;++l)t[c+l]=t[o+l];++a}return a!==e.length?(this.times=e.slice(0,a),this.values=t.slice(0,a*n)):(this.times=e,this.values=t),this}clone(){let e=this.times.slice(),t=this.values.slice(),n=this.constructor,s=new n(this.name,e,t);return s.createInterpolant=this.createInterpolant,s}};Ln.prototype.TimeBufferType=Float32Array;Ln.prototype.ValueBufferType=Float32Array;Ln.prototype.DefaultInterpolation=os;var Ni=class extends Ln{};Ni.prototype.ValueTypeName="bool";Ni.prototype.ValueBufferType=Array;Ni.prototype.DefaultInterpolation=ar;Ni.prototype.InterpolantFactoryMethodLinear=void 0;Ni.prototype.InterpolantFactoryMethodSmooth=void 0;var Fo=class extends Ln{};Fo.prototype.ValueTypeName="color";var pi=class extends Ln{};pi.prototype.ValueTypeName="number";var Ol=class extends Di{constructor(e,t,n,s){super(e,t,n,s)}interpolate_(e,t,n,s){let r=this.resultBuffer,a=this.sampleValues,o=this.valueSize,c=(n-t)/(s-t),l=e*o;for(let h=l+o;l!==h;l+=4)Dt.slerpFlat(r,0,a,l-o,a,l,c);return r}},Zn=class extends Ln{InterpolantFactoryMethodLinear(e){return new Ol(this.times,this.values,this.getValueSize(),e)}};Zn.prototype.ValueTypeName="quaternion";Zn.prototype.DefaultInterpolation=os;Zn.prototype.InterpolantFactoryMethodSmooth=void 0;var Ui=class extends Ln{};Ui.prototype.ValueTypeName="string";Ui.prototype.ValueBufferType=Array;Ui.prototype.DefaultInterpolation=ar;Ui.prototype.InterpolantFactoryMethodLinear=void 0;Ui.prototype.InterpolantFactoryMethodSmooth=void 0;var mi=class extends Ln{};mi.prototype.ValueTypeName="vector";var gi=class{constructor(e,t=-1,n,s=Jl){this.name=e,this.tracks=n,this.duration=t,this.blendMode=s,this.uuid=Fn(),this.duration<0&&this.resetDuration()}static parse(e){let t=[],n=e.tracks,s=1/(e.fps||1);for(let a=0,o=n.length;a!==o;++a)t.push(tv(n[a]).scale(s));let r=new this(e.name,e.duration,t,e.blendMode);return r.uuid=e.uuid,r}static toJSON(e){let t=[],n=e.tracks,s={name:e.name,duration:e.duration,tracks:t,uuid:e.uuid,blendMode:e.blendMode};for(let r=0,a=n.length;r!==a;++r)t.push(Ln.toJSON(n[r]));return s}static CreateFromMorphTargetSequence(e,t,n,s){let r=t.length,a=[];for(let o=0;o<r;o++){let c=[],l=[];c.push((o+r-1)%r,o,(o+1)%r),l.push(0,1,0);let h=Qy(c);c=Kd(c,1,h),l=Kd(l,1,h),!s&&c[0]===0&&(c.push(r),l.push(l[0])),a.push(new pi(".morphTargetInfluences["+t[o].name+"]",c,l).scale(1/n))}return new this(e,-1,a)}static findByName(e,t){let n=e;if(!Array.isArray(e)){let s=e;n=s.geometry&&s.geometry.animations||s.animations}for(let s=0;s<n.length;s++)if(n[s].name===t)return n[s];return null}static CreateClipsFromMorphTargetSequences(e,t,n){let s={},r=/^([\w-]*?)([\d]+)$/;for(let o=0,c=e.length;o<c;o++){let l=e[o],h=l.name.match(r);if(h&&h.length>1){let u=h[1],d=s[u];d||(s[u]=d=[]),d.push(l)}}let a=[];for(let o in s)a.push(this.CreateFromMorphTargetSequence(o,s[o],t,n));return a}static parseAnimation(e,t){if(!e)return console.error("THREE.AnimationClip: No animation in JSONLoader data."),null;let n=function(u,d,f,p,x){if(f.length!==0){let g=[],m=[];wf(f,g,m,p),g.length!==0&&x.push(new u(d,g,m))}},s=[],r=e.name||"default",a=e.fps||30,o=e.blendMode,c=e.length||-1,l=e.hierarchy||[];for(let u=0;u<l.length;u++){let d=l[u].keys;if(!(!d||d.length===0))if(d[0].morphTargets){let f={},p;for(p=0;p<d.length;p++)if(d[p].morphTargets)for(let x=0;x<d[p].morphTargets.length;x++)f[d[p].morphTargets[x]]=-1;for(let x in f){let g=[],m=[];for(let y=0;y!==d[p].morphTargets.length;++y){let _=d[p];g.push(_.time),m.push(_.morphTarget===x?1:0)}s.push(new pi(".morphTargetInfluence["+x+"]",g,m))}c=f.length*a}else{let f=".bones["+t[u].name+"]";n(mi,f+".position",d,"pos",s),n(Zn,f+".quaternion",d,"rot",s),n(mi,f+".scale",d,"scl",s)}}return s.length===0?null:new this(r,c,s,o)}resetDuration(){let e=this.tracks,t=0;for(let n=0,s=e.length;n!==s;++n){let r=this.tracks[n];t=Math.max(t,r.times[r.times.length-1])}return this.duration=t,this}trim(){for(let e=0;e<this.tracks.length;e++)this.tracks[e].trim(0,this.duration);return this}validate(){let e=!0;for(let t=0;t<this.tracks.length;t++)e=e&&this.tracks[t].validate();return e}optimize(){for(let e=0;e<this.tracks.length;e++)this.tracks[e].optimize();return this}clone(){let e=[];for(let t=0;t<this.tracks.length;t++)e.push(this.tracks[t].clone());return new this.constructor(this.name,this.duration,e,this.blendMode)}toJSON(){return this.constructor.toJSON(this)}};function ev(i){switch(i.toLowerCase()){case"scalar":case"double":case"float":case"number":case"integer":return pi;case"vector":case"vector2":case"vector3":case"vector4":return mi;case"color":return Fo;case"quaternion":return Zn;case"bool":case"boolean":return Ni;case"string":return Ui}throw new Error("THREE.KeyframeTrack: Unsupported typeName: "+i)}function tv(i){if(i.type===void 0)throw new Error("THREE.KeyframeTrack: track type undefined, can not parse");let e=ev(i.type);if(i.times===void 0){let t=[],n=[];wf(i.keys,t,n,"value"),i.times=t,i.values=n}return e.parse!==void 0?e.parse(i):new e(i.name,i.times,i.values,i.interpolation)}var Ri={enabled:!1,files:{},add:function(i,e){this.enabled!==!1&&(this.files[i]=e)},get:function(i){if(this.enabled!==!1)return this.files[i]},remove:function(i){delete this.files[i]},clear:function(){this.files={}}},Fl=class{constructor(e,t,n){let s=this,r=!1,a=0,o=0,c,l=[];this.onStart=void 0,this.onLoad=e,this.onProgress=t,this.onError=n,this.itemStart=function(h){o++,r===!1&&s.onStart!==void 0&&s.onStart(h,a,o),r=!0},this.itemEnd=function(h){a++,s.onProgress!==void 0&&s.onProgress(h,a,o),a===o&&(r=!1,s.onLoad!==void 0&&s.onLoad())},this.itemError=function(h){s.onError!==void 0&&s.onError(h)},this.resolveURL=function(h){return c?c(h):h},this.setURLModifier=function(h){return c=h,this},this.addHandler=function(h,u){return l.push(h,u),this},this.removeHandler=function(h){let u=l.indexOf(h);return u!==-1&&l.splice(u,2),this},this.getHandler=function(h){for(let u=0,d=l.length;u<d;u+=2){let f=l[u],p=l[u+1];if(f.global&&(f.lastIndex=0),f.test(h))return p}return null}}},nv=new Fl,xi=class{constructor(e){this.manager=e!==void 0?e:nv,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={}}load(){}loadAsync(e,t){let n=this;return new Promise(function(s,r){n.load(e,s,t,r)})}parse(){}setCrossOrigin(e){return this.crossOrigin=e,this}setWithCredentials(e){return this.withCredentials=e,this}setPath(e){return this.path=e,this}setResourcePath(e){return this.resourcePath=e,this}setRequestHeader(e){return this.requestHeader=e,this}};xi.DEFAULT_MATERIAL_NAME="__DEFAULT";var ri={},Bl=class extends Error{constructor(e,t){super(e),this.response=t}},ca=class extends xi{constructor(e){super(e)}load(e,t,n,s){e===void 0&&(e=""),this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);let r=Ri.get(e);if(r!==void 0)return this.manager.itemStart(e),setTimeout(()=>{t&&t(r),this.manager.itemEnd(e)},0),r;if(ri[e]!==void 0){ri[e].push({onLoad:t,onProgress:n,onError:s});return}ri[e]=[],ri[e].push({onLoad:t,onProgress:n,onError:s});let a=new Request(e,{headers:new Headers(this.requestHeader),credentials:this.withCredentials?"include":"same-origin"}),o=this.mimeType,c=this.responseType;fetch(a).then(l=>{if(l.status===200||l.status===0){if(l.status===0&&console.warn("THREE.FileLoader: HTTP Status 0 received."),typeof ReadableStream=="undefined"||l.body===void 0||l.body.getReader===void 0)return l;let h=ri[e],u=l.body.getReader(),d=l.headers.get("Content-Length")||l.headers.get("X-File-Size"),f=d?parseInt(d):0,p=f!==0,x=0,g=new ReadableStream({start(m){y();function y(){u.read().then(({done:_,value:w})=>{if(_)m.close();else{x+=w.byteLength;let P=new ProgressEvent("progress",{lengthComputable:p,loaded:x,total:f});for(let A=0,R=h.length;A<R;A++){let F=h[A];F.onProgress&&F.onProgress(P)}m.enqueue(w),y()}})}}});return new Response(g)}else throw new Bl(`fetch for "${l.url}" responded with ${l.status}: ${l.statusText}`,l)}).then(l=>{switch(c){case"arraybuffer":return l.arrayBuffer();case"blob":return l.blob();case"document":return l.text().then(h=>new DOMParser().parseFromString(h,o));case"json":return l.json();default:if(o===void 0)return l.text();{let u=/charset="?([^;"\s]*)"?/i.exec(o),d=u&&u[1]?u[1].toLowerCase():void 0,f=new TextDecoder(d);return l.arrayBuffer().then(p=>f.decode(p))}}}).then(l=>{Ri.add(e,l);let h=ri[e];delete ri[e];for(let u=0,d=h.length;u<d;u++){let f=h[u];f.onLoad&&f.onLoad(l)}}).catch(l=>{let h=ri[e];if(h===void 0)throw this.manager.itemError(e),l;delete ri[e];for(let u=0,d=h.length;u<d;u++){let f=h[u];f.onError&&f.onError(l)}this.manager.itemError(e)}).finally(()=>{this.manager.itemEnd(e)}),this.manager.itemStart(e)}setResponseType(e){return this.responseType=e,this}setMimeType(e){return this.mimeType=e,this}};var kl=class extends xi{constructor(e){super(e)}load(e,t,n,s){this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);let r=this,a=Ri.get(e);if(a!==void 0)return r.manager.itemStart(e),setTimeout(function(){t&&t(a),r.manager.itemEnd(e)},0),a;let o=Jr("img");function c(){h(),Ri.add(e,this),t&&t(this),r.manager.itemEnd(e)}function l(u){h(),s&&s(u),r.manager.itemError(e),r.manager.itemEnd(e)}function h(){o.removeEventListener("load",c,!1),o.removeEventListener("error",l,!1)}return o.addEventListener("load",c,!1),o.addEventListener("error",l,!1),e.slice(0,5)!=="data:"&&this.crossOrigin!==void 0&&(o.crossOrigin=this.crossOrigin),r.manager.itemStart(e),o.src=e,o}};var Bo=class extends xi{constructor(e){super(e)}load(e,t,n,s){let r=new en,a=new kl(this.manager);return a.setCrossOrigin(this.crossOrigin),a.setPath(this.path),a.load(e,function(o){r.image=o,r.needsUpdate=!0,t!==void 0&&t(r)},n,s),r}},_r=class extends St{constructor(e,t=1){super(),this.isLight=!0,this.type="Light",this.color=new pe(e),this.intensity=t}dispose(){}copy(e,t){return super.copy(e,t),this.color.copy(e.color),this.intensity=e.intensity,this}toJSON(e){let t=super.toJSON(e);return t.object.color=this.color.getHex(),t.object.intensity=this.intensity,this.groundColor!==void 0&&(t.object.groundColor=this.groundColor.getHex()),this.distance!==void 0&&(t.object.distance=this.distance),this.angle!==void 0&&(t.object.angle=this.angle),this.decay!==void 0&&(t.object.decay=this.decay),this.penumbra!==void 0&&(t.object.penumbra=this.penumbra),this.shadow!==void 0&&(t.object.shadow=this.shadow.toJSON()),t}},ko=class extends _r{constructor(e,t,n){super(e,n),this.isHemisphereLight=!0,this.type="HemisphereLight",this.position.copy(St.DEFAULT_UP),this.updateMatrix(),this.groundColor=new pe(t)}copy(e,t){return super.copy(e,t),this.groundColor.copy(e.groundColor),this}},ll=new Xe,$d=new L,Jd=new L,la=class{constructor(e){this.camera=e,this.bias=0,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new ze(512,512),this.map=null,this.mapPass=null,this.matrix=new Xe,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new Qr,this._frameExtents=new ze(1,1),this._viewportCount=1,this._viewports=[new _t(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(e){let t=this.camera,n=this.matrix;$d.setFromMatrixPosition(e.matrixWorld),t.position.copy($d),Jd.setFromMatrixPosition(e.target.matrixWorld),t.lookAt(Jd),t.updateMatrixWorld(),ll.multiplyMatrices(t.projectionMatrix,t.matrixWorldInverse),this._frustum.setFromProjectionMatrix(ll),n.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),n.multiply(ll)}getViewport(e){return this._viewports[e]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(e){return this.camera=e.camera.clone(),this.bias=e.bias,this.radius=e.radius,this.mapSize.copy(e.mapSize),this}clone(){return new this.constructor().copy(this)}toJSON(){let e={};return this.bias!==0&&(e.bias=this.bias),this.normalBias!==0&&(e.normalBias=this.normalBias),this.radius!==1&&(e.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(e.mapSize=this.mapSize.toArray()),e.camera=this.camera.toJSON(!1).object,delete e.camera.matrix,e}},Hl=class extends la{constructor(){super(new Xt(50,1,.5,500)),this.isSpotLightShadow=!0,this.focus=1}updateMatrices(e){let t=this.camera,n=or*2*e.angle*this.focus,s=this.mapSize.width/this.mapSize.height,r=e.distance||t.far;(n!==t.fov||s!==t.aspect||r!==t.far)&&(t.fov=n,t.aspect=s,t.far=r,t.updateProjectionMatrix()),super.updateMatrices(e)}copy(e){return super.copy(e),this.focus=e.focus,this}},Ho=class extends _r{constructor(e,t,n=0,s=Math.PI/3,r=0,a=2){super(e,t),this.isSpotLight=!0,this.type="SpotLight",this.position.copy(St.DEFAULT_UP),this.updateMatrix(),this.target=new St,this.distance=n,this.angle=s,this.penumbra=r,this.decay=a,this.map=null,this.shadow=new Hl}get power(){return this.intensity*Math.PI}set power(e){this.intensity=e/Math.PI}dispose(){this.shadow.dispose()}copy(e,t){return super.copy(e,t),this.distance=e.distance,this.angle=e.angle,this.penumbra=e.penumbra,this.decay=e.decay,this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}},Qd=new Xe,Vr=new L,hl=new L,Gl=class extends la{constructor(){super(new Xt(90,1,.5,500)),this.isPointLightShadow=!0,this._frameExtents=new ze(4,2),this._viewportCount=6,this._viewports=[new _t(2,1,1,1),new _t(0,1,1,1),new _t(3,1,1,1),new _t(1,1,1,1),new _t(3,0,1,1),new _t(1,0,1,1)],this._cubeDirections=[new L(1,0,0),new L(-1,0,0),new L(0,0,1),new L(0,0,-1),new L(0,1,0),new L(0,-1,0)],this._cubeUps=[new L(0,1,0),new L(0,1,0),new L(0,1,0),new L(0,1,0),new L(0,0,1),new L(0,0,-1)]}updateMatrices(e,t=0){let n=this.camera,s=this.matrix,r=e.distance||n.far;r!==n.far&&(n.far=r,n.updateProjectionMatrix()),Vr.setFromMatrixPosition(e.matrixWorld),n.position.copy(Vr),hl.copy(n.position),hl.add(this._cubeDirections[t]),n.up.copy(this._cubeUps[t]),n.lookAt(hl),n.updateMatrixWorld(),s.makeTranslation(-Vr.x,-Vr.y,-Vr.z),Qd.multiplyMatrices(n.projectionMatrix,n.matrixWorldInverse),this._frustum.setFromProjectionMatrix(Qd)}},Oi=class extends _r{constructor(e,t,n=0,s=2){super(e,t),this.isPointLight=!0,this.type="PointLight",this.distance=n,this.decay=s,this.shadow=new Gl}get power(){return this.intensity*4*Math.PI}set power(e){this.intensity=e/(4*Math.PI)}dispose(){this.shadow.dispose()}copy(e,t){return super.copy(e,t),this.distance=e.distance,this.decay=e.decay,this.shadow=e.shadow.clone(),this}},Vl=class extends la{constructor(){super(new hr(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}},yr=class extends _r{constructor(e,t){super(e,t),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(St.DEFAULT_UP),this.updateMatrix(),this.target=new St,this.shadow=new Vl}dispose(){this.shadow.dispose()}copy(e){return super.copy(e),this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}};var Fi=class{static decodeText(e){if(typeof TextDecoder!="undefined")return new TextDecoder().decode(e);let t="";for(let n=0,s=e.length;n<s;n++)t+=String.fromCharCode(e[n]);try{return decodeURIComponent(escape(t))}catch{return t}}static extractUrlBase(e){let t=e.lastIndexOf("/");return t===-1?"./":e.slice(0,t+1)}static resolveURL(e,t){return typeof e!="string"||e===""?"":(/^https?:\/\//i.test(t)&&/^\//.test(e)&&(t=t.replace(/(^https?:\/\/[^\/]+).*/i,"$1")),/^(https?:)?\/\//i.test(e)||/^data:.*,.*$/i.test(e)||/^blob:.*$/i.test(e)?e:t+e)}};var Go=class extends xi{constructor(e){super(e),this.isImageBitmapLoader=!0,typeof createImageBitmap=="undefined"&&console.warn("THREE.ImageBitmapLoader: createImageBitmap() not supported."),typeof fetch=="undefined"&&console.warn("THREE.ImageBitmapLoader: fetch() not supported."),this.options={premultiplyAlpha:"none"}}setOptions(e){return this.options=e,this}load(e,t,n,s){e===void 0&&(e=""),this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);let r=this,a=Ri.get(e);if(a!==void 0){if(r.manager.itemStart(e),a.then){a.then(l=>{t&&t(l),r.manager.itemEnd(e)}).catch(l=>{s&&s(l)});return}return setTimeout(function(){t&&t(a),r.manager.itemEnd(e)},0),a}let o={};o.credentials=this.crossOrigin==="anonymous"?"same-origin":"include",o.headers=this.requestHeader;let c=fetch(e,o).then(function(l){return l.blob()}).then(function(l){return createImageBitmap(l,Object.assign(r.options,{colorSpaceConversion:"none"}))}).then(function(l){return Ri.add(e,l),t&&t(l),r.manager.itemEnd(e),l}).catch(function(l){s&&s(l),Ri.remove(e),r.manager.itemError(e),r.manager.itemEnd(e)});Ri.add(e,c),r.manager.itemStart(e)}};var Vo=class{constructor(e=!0){this.autoStart=e,this.startTime=0,this.oldTime=0,this.elapsedTime=0,this.running=!1}start(){this.startTime=ef(),this.oldTime=this.startTime,this.elapsedTime=0,this.running=!0}stop(){this.getElapsedTime(),this.running=!1,this.autoStart=!1}getElapsedTime(){return this.getDelta(),this.elapsedTime}getDelta(){let e=0;if(this.autoStart&&!this.running)return this.start(),0;if(this.running){let t=ef();e=(t-this.oldTime)/1e3,this.oldTime=t,this.elapsedTime+=e}return e}};function ef(){return(typeof performance=="undefined"?Date:performance).now()}var Wl=class{constructor(e,t,n){this.binding=e,this.valueSize=n;let s,r,a;switch(t){case"quaternion":s=this._slerp,r=this._slerpAdditive,a=this._setAdditiveIdentityQuaternion,this.buffer=new Float64Array(n*6),this._workIndex=5;break;case"string":case"bool":s=this._select,r=this._select,a=this._setAdditiveIdentityOther,this.buffer=new Array(n*5);break;default:s=this._lerp,r=this._lerpAdditive,a=this._setAdditiveIdentityNumeric,this.buffer=new Float64Array(n*5)}this._mixBufferRegion=s,this._mixBufferRegionAdditive=r,this._setIdentity=a,this._origIndex=3,this._addIndex=4,this.cumulativeWeight=0,this.cumulativeWeightAdditive=0,this.useCount=0,this.referenceCount=0}accumulate(e,t){let n=this.buffer,s=this.valueSize,r=e*s+s,a=this.cumulativeWeight;if(a===0){for(let o=0;o!==s;++o)n[r+o]=n[o];a=t}else{a+=t;let o=t/a;this._mixBufferRegion(n,r,0,o,s)}this.cumulativeWeight=a}accumulateAdditive(e){let t=this.buffer,n=this.valueSize,s=n*this._addIndex;this.cumulativeWeightAdditive===0&&this._setIdentity(),this._mixBufferRegionAdditive(t,s,0,e,n),this.cumulativeWeightAdditive+=e}apply(e){let t=this.valueSize,n=this.buffer,s=e*t+t,r=this.cumulativeWeight,a=this.cumulativeWeightAdditive,o=this.binding;if(this.cumulativeWeight=0,this.cumulativeWeightAdditive=0,r<1){let c=t*this._origIndex;this._mixBufferRegion(n,s,c,1-r,t)}a>0&&this._mixBufferRegionAdditive(n,s,this._addIndex*t,1,t);for(let c=t,l=t+t;c!==l;++c)if(n[c]!==n[c+t]){o.setValue(n,s);break}}saveOriginalState(){let e=this.binding,t=this.buffer,n=this.valueSize,s=n*this._origIndex;e.getValue(t,s);for(let r=n,a=s;r!==a;++r)t[r]=t[s+r%n];this._setIdentity(),this.cumulativeWeight=0,this.cumulativeWeightAdditive=0}restoreOriginalState(){let e=this.valueSize*3;this.binding.setValue(this.buffer,e)}_setAdditiveIdentityNumeric(){let e=this._addIndex*this.valueSize,t=e+this.valueSize;for(let n=e;n<t;n++)this.buffer[n]=0}_setAdditiveIdentityQuaternion(){this._setAdditiveIdentityNumeric(),this.buffer[this._addIndex*this.valueSize+3]=1}_setAdditiveIdentityOther(){let e=this._origIndex*this.valueSize,t=this._addIndex*this.valueSize;for(let n=0;n<this.valueSize;n++)this.buffer[t+n]=this.buffer[e+n]}_select(e,t,n,s,r){if(s>=.5)for(let a=0;a!==r;++a)e[t+a]=e[n+a]}_slerp(e,t,n,s){Dt.slerpFlat(e,t,e,t,e,n,s)}_slerpAdditive(e,t,n,s,r){let a=this._workIndex*r;Dt.multiplyQuaternionsFlat(e,a,e,t,e,n),Dt.slerpFlat(e,t,e,t,e,a,s)}_lerp(e,t,n,s,r){let a=1-s;for(let o=0;o!==r;++o){let c=t+o;e[c]=e[c]*a+e[n+o]*s}}_lerpAdditive(e,t,n,s,r){for(let a=0;a!==r;++a){let o=t+a;e[o]=e[o]+e[n+a]*s}}},nh="\\[\\]\\.:\\/",iv=new RegExp("["+nh+"]","g"),ih="[^"+nh+"]",sv="[^"+nh.replace("\\.","")+"]",rv=/((?:WC+[\/:])*)/.source.replace("WC",ih),av=/(WCOD+)?/.source.replace("WCOD",sv),ov=/(?:\.(WC+)(?:\[(.+)\])?)?/.source.replace("WC",ih),cv=/\.(WC+)(?:\[(.+)\])?/.source.replace("WC",ih),lv=new RegExp("^"+rv+av+ov+cv+"$"),hv=["material","materials","bones","map"],Xl=class{constructor(e,t,n){let s=n||xt.parseTrackName(t);this._targetGroup=e,this._bindings=e.subscribe_(t,s)}getValue(e,t){this.bind();let n=this._targetGroup.nCachedObjects_,s=this._bindings[n];s!==void 0&&s.getValue(e,t)}setValue(e,t){let n=this._bindings;for(let s=this._targetGroup.nCachedObjects_,r=n.length;s!==r;++s)n[s].setValue(e,t)}bind(){let e=this._bindings;for(let t=this._targetGroup.nCachedObjects_,n=e.length;t!==n;++t)e[t].bind()}unbind(){let e=this._bindings;for(let t=this._targetGroup.nCachedObjects_,n=e.length;t!==n;++t)e[t].unbind()}},xt=class i{constructor(e,t,n){this.path=t,this.parsedPath=n||i.parseTrackName(t),this.node=i.findNode(e,this.parsedPath.nodeName),this.rootNode=e,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}static create(e,t,n){return e&&e.isAnimationObjectGroup?new i.Composite(e,t,n):new i(e,t,n)}static sanitizeNodeName(e){return e.replace(/\s/g,"_").replace(iv,"")}static parseTrackName(e){let t=lv.exec(e);if(t===null)throw new Error("PropertyBinding: Cannot parse trackName: "+e);let n={nodeName:t[2],objectName:t[3],objectIndex:t[4],propertyName:t[5],propertyIndex:t[6]},s=n.nodeName&&n.nodeName.lastIndexOf(".");if(s!==void 0&&s!==-1){let r=n.nodeName.substring(s+1);hv.indexOf(r)!==-1&&(n.nodeName=n.nodeName.substring(0,s),n.objectName=r)}if(n.propertyName===null||n.propertyName.length===0)throw new Error("PropertyBinding: can not parse propertyName from trackName: "+e);return n}static findNode(e,t){if(t===void 0||t===""||t==="."||t===-1||t===e.name||t===e.uuid)return e;if(e.skeleton){let n=e.skeleton.getBoneByName(t);if(n!==void 0)return n}if(e.children){let n=function(r){for(let a=0;a<r.length;a++){let o=r[a];if(o.name===t||o.uuid===t)return o;let c=n(o.children);if(c)return c}return null},s=n(e.children);if(s)return s}return null}_getValue_unavailable(){}_setValue_unavailable(){}_getValue_direct(e,t){e[t]=this.targetObject[this.propertyName]}_getValue_array(e,t){let n=this.resolvedProperty;for(let s=0,r=n.length;s!==r;++s)e[t++]=n[s]}_getValue_arrayElement(e,t){e[t]=this.resolvedProperty[this.propertyIndex]}_getValue_toArray(e,t){this.resolvedProperty.toArray(e,t)}_setValue_direct(e,t){this.targetObject[this.propertyName]=e[t]}_setValue_direct_setNeedsUpdate(e,t){this.targetObject[this.propertyName]=e[t],this.targetObject.needsUpdate=!0}_setValue_direct_setMatrixWorldNeedsUpdate(e,t){this.targetObject[this.propertyName]=e[t],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_array(e,t){let n=this.resolvedProperty;for(let s=0,r=n.length;s!==r;++s)n[s]=e[t++]}_setValue_array_setNeedsUpdate(e,t){let n=this.resolvedProperty;for(let s=0,r=n.length;s!==r;++s)n[s]=e[t++];this.targetObject.needsUpdate=!0}_setValue_array_setMatrixWorldNeedsUpdate(e,t){let n=this.resolvedProperty;for(let s=0,r=n.length;s!==r;++s)n[s]=e[t++];this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_arrayElement(e,t){this.resolvedProperty[this.propertyIndex]=e[t]}_setValue_arrayElement_setNeedsUpdate(e,t){this.resolvedProperty[this.propertyIndex]=e[t],this.targetObject.needsUpdate=!0}_setValue_arrayElement_setMatrixWorldNeedsUpdate(e,t){this.resolvedProperty[this.propertyIndex]=e[t],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_fromArray(e,t){this.resolvedProperty.fromArray(e,t)}_setValue_fromArray_setNeedsUpdate(e,t){this.resolvedProperty.fromArray(e,t),this.targetObject.needsUpdate=!0}_setValue_fromArray_setMatrixWorldNeedsUpdate(e,t){this.resolvedProperty.fromArray(e,t),this.targetObject.matrixWorldNeedsUpdate=!0}_getValue_unbound(e,t){this.bind(),this.getValue(e,t)}_setValue_unbound(e,t){this.bind(),this.setValue(e,t)}bind(){let e=this.node,t=this.parsedPath,n=t.objectName,s=t.propertyName,r=t.propertyIndex;if(e||(e=i.findNode(this.rootNode,t.nodeName),this.node=e),this.getValue=this._getValue_unavailable,this.setValue=this._setValue_unavailable,!e){console.warn("THREE.PropertyBinding: No target node found for track: "+this.path+".");return}if(n){let l=t.objectIndex;switch(n){case"materials":if(!e.material){console.error("THREE.PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!e.material.materials){console.error("THREE.PropertyBinding: Can not bind to material.materials as node.material does not have a materials array.",this);return}e=e.material.materials;break;case"bones":if(!e.skeleton){console.error("THREE.PropertyBinding: Can not bind to bones as node does not have a skeleton.",this);return}e=e.skeleton.bones;for(let h=0;h<e.length;h++)if(e[h].name===l){l=h;break}break;case"map":if("map"in e){e=e.map;break}if(!e.material){console.error("THREE.PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!e.material.map){console.error("THREE.PropertyBinding: Can not bind to material.map as node.material does not have a map.",this);return}e=e.material.map;break;default:if(e[n]===void 0){console.error("THREE.PropertyBinding: Can not bind to objectName of node undefined.",this);return}e=e[n]}if(l!==void 0){if(e[l]===void 0){console.error("THREE.PropertyBinding: Trying to bind to objectIndex of objectName, but is undefined.",this,e);return}e=e[l]}}let a=e[s];if(a===void 0){let l=t.nodeName;console.error("THREE.PropertyBinding: Trying to update property for track: "+l+"."+s+" but it wasn't found.",e);return}let o=this.Versioning.None;this.targetObject=e,e.needsUpdate!==void 0?o=this.Versioning.NeedsUpdate:e.matrixWorldNeedsUpdate!==void 0&&(o=this.Versioning.MatrixWorldNeedsUpdate);let c=this.BindingType.Direct;if(r!==void 0){if(s==="morphTargetInfluences"){if(!e.geometry){console.error("THREE.PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.",this);return}if(!e.geometry.morphAttributes){console.error("THREE.PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.morphAttributes.",this);return}e.morphTargetDictionary[r]!==void 0&&(r=e.morphTargetDictionary[r])}c=this.BindingType.ArrayElement,this.resolvedProperty=a,this.propertyIndex=r}else a.fromArray!==void 0&&a.toArray!==void 0?(c=this.BindingType.HasFromToArray,this.resolvedProperty=a):Array.isArray(a)?(c=this.BindingType.EntireArray,this.resolvedProperty=a):this.propertyName=s;this.getValue=this.GetterByBindingType[c],this.setValue=this.SetterByBindingTypeAndVersioning[c][o]}unbind(){this.node=null,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}};xt.Composite=Xl;xt.prototype.BindingType={Direct:0,EntireArray:1,ArrayElement:2,HasFromToArray:3};xt.prototype.Versioning={None:0,NeedsUpdate:1,MatrixWorldNeedsUpdate:2};xt.prototype.GetterByBindingType=[xt.prototype._getValue_direct,xt.prototype._getValue_array,xt.prototype._getValue_arrayElement,xt.prototype._getValue_toArray];xt.prototype.SetterByBindingTypeAndVersioning=[[xt.prototype._setValue_direct,xt.prototype._setValue_direct_setNeedsUpdate,xt.prototype._setValue_direct_setMatrixWorldNeedsUpdate],[xt.prototype._setValue_array,xt.prototype._setValue_array_setNeedsUpdate,xt.prototype._setValue_array_setMatrixWorldNeedsUpdate],[xt.prototype._setValue_arrayElement,xt.prototype._setValue_arrayElement_setNeedsUpdate,xt.prototype._setValue_arrayElement_setMatrixWorldNeedsUpdate],[xt.prototype._setValue_fromArray,xt.prototype._setValue_fromArray_setNeedsUpdate,xt.prototype._setValue_fromArray_setMatrixWorldNeedsUpdate]];var ql=class{constructor(e,t,n=null,s=t.blendMode){this._mixer=e,this._clip=t,this._localRoot=n,this.blendMode=s;let r=t.tracks,a=r.length,o=new Array(a),c={endingStart:Ks,endingEnd:Ks};for(let l=0;l!==a;++l){let h=r[l].createInterpolant(null);o[l]=h,h.settings=c}this._interpolantSettings=c,this._interpolants=o,this._propertyBindings=new Array(a),this._cacheIndex=null,this._byClipCacheIndex=null,this._timeScaleInterpolant=null,this._weightInterpolant=null,this.loop=$l,this._loopCount=-1,this._startTime=null,this.time=0,this.timeScale=1,this._effectiveTimeScale=1,this.weight=1,this._effectiveWeight=1,this.repetitions=1/0,this.paused=!1,this.enabled=!0,this.clampWhenFinished=!1,this.zeroSlopeAtStart=!0,this.zeroSlopeAtEnd=!0}play(){return this._mixer._activateAction(this),this}stop(){return this._mixer._deactivateAction(this),this.reset()}reset(){return this.paused=!1,this.enabled=!0,this.time=0,this._loopCount=-1,this._startTime=null,this.stopFading().stopWarping()}isRunning(){return this.enabled&&!this.paused&&this.timeScale!==0&&this._startTime===null&&this._mixer._isActiveAction(this)}isScheduled(){return this._mixer._isActiveAction(this)}startAt(e){return this._startTime=e,this}setLoop(e,t){return this.loop=e,this.repetitions=t,this}setEffectiveWeight(e){return this.weight=e,this._effectiveWeight=this.enabled?e:0,this.stopFading()}getEffectiveWeight(){return this._effectiveWeight}fadeIn(e){return this._scheduleFading(e,0,1)}fadeOut(e){return this._scheduleFading(e,1,0)}crossFadeFrom(e,t,n){if(e.fadeOut(t),this.fadeIn(t),n){let s=this._clip.duration,r=e._clip.duration,a=r/s,o=s/r;e.warp(1,a,t),this.warp(o,1,t)}return this}crossFadeTo(e,t,n){return e.crossFadeFrom(this,t,n)}stopFading(){let e=this._weightInterpolant;return e!==null&&(this._weightInterpolant=null,this._mixer._takeBackControlInterpolant(e)),this}setEffectiveTimeScale(e){return this.timeScale=e,this._effectiveTimeScale=this.paused?0:e,this.stopWarping()}getEffectiveTimeScale(){return this._effectiveTimeScale}setDuration(e){return this.timeScale=this._clip.duration/e,this.stopWarping()}syncWith(e){return this.time=e.time,this.timeScale=e.timeScale,this.stopWarping()}halt(e){return this.warp(this._effectiveTimeScale,0,e)}warp(e,t,n){let s=this._mixer,r=s.time,a=this.timeScale,o=this._timeScaleInterpolant;o===null&&(o=s._lendControlInterpolant(),this._timeScaleInterpolant=o);let c=o.parameterPositions,l=o.sampleValues;return c[0]=r,c[1]=r+n,l[0]=e/a,l[1]=t/a,this}stopWarping(){let e=this._timeScaleInterpolant;return e!==null&&(this._timeScaleInterpolant=null,this._mixer._takeBackControlInterpolant(e)),this}getMixer(){return this._mixer}getClip(){return this._clip}getRoot(){return this._localRoot||this._mixer._root}_update(e,t,n,s){if(!this.enabled){this._updateWeight(e);return}let r=this._startTime;if(r!==null){let c=(e-r)*n;c<0||n===0?t=0:(this._startTime=null,t=n*c)}t*=this._updateTimeScale(e);let a=this._updateTime(t),o=this._updateWeight(e);if(o>0){let c=this._interpolants,l=this._propertyBindings;switch(this.blendMode){case Im:for(let h=0,u=c.length;h!==u;++h)c[h].evaluate(a),l[h].accumulateAdditive(o);break;case Jl:default:for(let h=0,u=c.length;h!==u;++h)c[h].evaluate(a),l[h].accumulate(s,o)}}}_updateWeight(e){let t=0;if(this.enabled){t=this.weight;let n=this._weightInterpolant;if(n!==null){let s=n.evaluate(e)[0];t*=s,e>n.parameterPositions[1]&&(this.stopFading(),s===0&&(this.enabled=!1))}}return this._effectiveWeight=t,t}_updateTimeScale(e){let t=0;if(!this.paused){t=this.timeScale;let n=this._timeScaleInterpolant;if(n!==null){let s=n.evaluate(e)[0];t*=s,e>n.parameterPositions[1]&&(this.stopWarping(),t===0?this.paused=!0:this.timeScale=t)}}return this._effectiveTimeScale=t,t}_updateTime(e){let t=this._clip.duration,n=this.loop,s=this.time+e,r=this._loopCount,a=n===Lm;if(e===0)return r===-1?s:a&&(r&1)===1?t-s:s;if(n===Kl){r===-1&&(this._loopCount=0,this._setEndings(!0,!0,!1));e:{if(s>=t)s=t;else if(s<0)s=0;else{this.time=s;break e}this.clampWhenFinished?this.paused=!0:this.enabled=!1,this.time=s,this._mixer.dispatchEvent({type:"finished",action:this,direction:e<0?-1:1})}}else{if(r===-1&&(e>=0?(r=0,this._setEndings(!0,this.repetitions===0,a)):this._setEndings(this.repetitions===0,!0,a)),s>=t||s<0){let o=Math.floor(s/t);s-=t*o,r+=Math.abs(o);let c=this.repetitions-r;if(c<=0)this.clampWhenFinished?this.paused=!0:this.enabled=!1,s=e>0?t:0,this.time=s,this._mixer.dispatchEvent({type:"finished",action:this,direction:e>0?1:-1});else{if(c===1){let l=e<0;this._setEndings(l,!l,a)}else this._setEndings(!1,!1,a);this._loopCount=r,this.time=s,this._mixer.dispatchEvent({type:"loop",action:this,loopDelta:o})}}else this.time=s;if(a&&(r&1)===1)return t-s}return s}_setEndings(e,t,n){let s=this._interpolantSettings;n?(s.endingStart=$s,s.endingEnd=$s):(e?s.endingStart=this.zeroSlopeAtStart?$s:Ks:s.endingStart=uo,t?s.endingEnd=this.zeroSlopeAtEnd?$s:Ks:s.endingEnd=uo)}_scheduleFading(e,t,n){let s=this._mixer,r=s.time,a=this._weightInterpolant;a===null&&(a=s._lendControlInterpolant(),this._weightInterpolant=a);let o=a.parameterPositions,c=a.sampleValues;return o[0]=r,c[0]=t,o[1]=r+e,c[1]=n,this}},uv=new Float32Array(1),ha=class extends hi{constructor(e){super(),this._root=e,this._initMemoryManager(),this._accuIndex=0,this.time=0,this.timeScale=1}_bindAction(e,t){let n=e._localRoot||this._root,s=e._clip.tracks,r=s.length,a=e._propertyBindings,o=e._interpolants,c=n.uuid,l=this._bindingsByRootAndName,h=l[c];h===void 0&&(h={},l[c]=h);for(let u=0;u!==r;++u){let d=s[u],f=d.name,p=h[f];if(p!==void 0)++p.referenceCount,a[u]=p;else{if(p=a[u],p!==void 0){p._cacheIndex===null&&(++p.referenceCount,this._addInactiveBinding(p,c,f));continue}let x=t&&t._propertyBindings[u].binding.parsedPath;p=new Wl(xt.create(n,f,x),d.ValueTypeName,d.getValueSize()),++p.referenceCount,this._addInactiveBinding(p,c,f),a[u]=p}o[u].resultBuffer=p.buffer}}_activateAction(e){if(!this._isActiveAction(e)){if(e._cacheIndex===null){let n=(e._localRoot||this._root).uuid,s=e._clip.uuid,r=this._actionsByClip[s];this._bindAction(e,r&&r.knownActions[0]),this._addInactiveAction(e,s,n)}let t=e._propertyBindings;for(let n=0,s=t.length;n!==s;++n){let r=t[n];r.useCount++===0&&(this._lendBinding(r),r.saveOriginalState())}this._lendAction(e)}}_deactivateAction(e){if(this._isActiveAction(e)){let t=e._propertyBindings;for(let n=0,s=t.length;n!==s;++n){let r=t[n];--r.useCount===0&&(r.restoreOriginalState(),this._takeBackBinding(r))}this._takeBackAction(e)}}_initMemoryManager(){this._actions=[],this._nActiveActions=0,this._actionsByClip={},this._bindings=[],this._nActiveBindings=0,this._bindingsByRootAndName={},this._controlInterpolants=[],this._nActiveControlInterpolants=0;let e=this;this.stats={actions:{get total(){return e._actions.length},get inUse(){return e._nActiveActions}},bindings:{get total(){return e._bindings.length},get inUse(){return e._nActiveBindings}},controlInterpolants:{get total(){return e._controlInterpolants.length},get inUse(){return e._nActiveControlInterpolants}}}}_isActiveAction(e){let t=e._cacheIndex;return t!==null&&t<this._nActiveActions}_addInactiveAction(e,t,n){let s=this._actions,r=this._actionsByClip,a=r[t];if(a===void 0)a={knownActions:[e],actionByRoot:{}},e._byClipCacheIndex=0,r[t]=a;else{let o=a.knownActions;e._byClipCacheIndex=o.length,o.push(e)}e._cacheIndex=s.length,s.push(e),a.actionByRoot[n]=e}_removeInactiveAction(e){let t=this._actions,n=t[t.length-1],s=e._cacheIndex;n._cacheIndex=s,t[s]=n,t.pop(),e._cacheIndex=null;let r=e._clip.uuid,a=this._actionsByClip,o=a[r],c=o.knownActions,l=c[c.length-1],h=e._byClipCacheIndex;l._byClipCacheIndex=h,c[h]=l,c.pop(),e._byClipCacheIndex=null;let u=o.actionByRoot,d=(e._localRoot||this._root).uuid;delete u[d],c.length===0&&delete a[r],this._removeInactiveBindingsForAction(e)}_removeInactiveBindingsForAction(e){let t=e._propertyBindings;for(let n=0,s=t.length;n!==s;++n){let r=t[n];--r.referenceCount===0&&this._removeInactiveBinding(r)}}_lendAction(e){let t=this._actions,n=e._cacheIndex,s=this._nActiveActions++,r=t[s];e._cacheIndex=s,t[s]=e,r._cacheIndex=n,t[n]=r}_takeBackAction(e){let t=this._actions,n=e._cacheIndex,s=--this._nActiveActions,r=t[s];e._cacheIndex=s,t[s]=e,r._cacheIndex=n,t[n]=r}_addInactiveBinding(e,t,n){let s=this._bindingsByRootAndName,r=this._bindings,a=s[t];a===void 0&&(a={},s[t]=a),a[n]=e,e._cacheIndex=r.length,r.push(e)}_removeInactiveBinding(e){let t=this._bindings,n=e.binding,s=n.rootNode.uuid,r=n.path,a=this._bindingsByRootAndName,o=a[s],c=t[t.length-1],l=e._cacheIndex;c._cacheIndex=l,t[l]=c,t.pop(),delete o[r],Object.keys(o).length===0&&delete a[s]}_lendBinding(e){let t=this._bindings,n=e._cacheIndex,s=this._nActiveBindings++,r=t[s];e._cacheIndex=s,t[s]=e,r._cacheIndex=n,t[n]=r}_takeBackBinding(e){let t=this._bindings,n=e._cacheIndex,s=--this._nActiveBindings,r=t[s];e._cacheIndex=s,t[s]=e,r._cacheIndex=n,t[n]=r}_lendControlInterpolant(){let e=this._controlInterpolants,t=this._nActiveControlInterpolants++,n=e[t];return n===void 0&&(n=new Oo(new Float32Array(2),new Float32Array(2),1,uv),n.__cacheIndex=t,e[t]=n),n}_takeBackControlInterpolant(e){let t=this._controlInterpolants,n=e.__cacheIndex,s=--this._nActiveControlInterpolants,r=t[s];e.__cacheIndex=s,t[s]=e,r.__cacheIndex=n,t[n]=r}clipAction(e,t,n){let s=t||this._root,r=s.uuid,a=typeof e=="string"?gi.findByName(s,e):e,o=a!==null?a.uuid:e,c=this._actionsByClip[o],l=null;if(n===void 0&&(a!==null?n=a.blendMode:n=Jl),c!==void 0){let u=c.actionByRoot[r];if(u!==void 0&&u.blendMode===n)return u;l=c.knownActions[0],a===null&&(a=l._clip)}if(a===null)return null;let h=new ql(this,a,t,n);return this._bindAction(h,l),this._addInactiveAction(h,o,r),h}existingAction(e,t){let n=t||this._root,s=n.uuid,r=typeof e=="string"?gi.findByName(n,e):e,a=r?r.uuid:e,o=this._actionsByClip[a];return o!==void 0&&o.actionByRoot[s]||null}stopAllAction(){let e=this._actions,t=this._nActiveActions;for(let n=t-1;n>=0;--n)e[n].stop();return this}update(e){e*=this.timeScale;let t=this._actions,n=this._nActiveActions,s=this.time+=e,r=Math.sign(e),a=this._accuIndex^=1;for(let l=0;l!==n;++l)t[l]._update(s,e,r,a);let o=this._bindings,c=this._nActiveBindings;for(let l=0;l!==c;++l)o[l].apply(a);return this}setTime(e){this.time=0;for(let t=0;t<this._actions.length;t++)this._actions[t].time=0;return this.update(e)}getRoot(){return this._root}uncacheClip(e){let t=this._actions,n=e.uuid,s=this._actionsByClip,r=s[n];if(r!==void 0){let a=r.knownActions;for(let o=0,c=a.length;o!==c;++o){let l=a[o];this._deactivateAction(l);let h=l._cacheIndex,u=t[t.length-1];l._cacheIndex=null,l._byClipCacheIndex=null,u._cacheIndex=h,t[h]=u,t.pop(),this._removeInactiveBindingsForAction(l)}delete s[n]}}uncacheRoot(e){let t=e.uuid,n=this._actionsByClip;for(let a in n){let o=n[a].actionByRoot,c=o[t];c!==void 0&&(this._deactivateAction(c),this._removeInactiveAction(c))}let s=this._bindingsByRootAndName,r=s[t];if(r!==void 0)for(let a in r){let o=r[a];o.restoreOriginalState(),this._removeInactiveBinding(o)}}uncacheAction(e,t){let n=this.existingAction(e,t);n!==null&&(this._deactivateAction(n),this._removeInactiveAction(n))}};typeof __THREE_DEVTOOLS__!="undefined"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:Yl}}));typeof window!="undefined"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=Yl);function da(i,e=!1){let t=i[0].index!==null,n=new Set(Object.keys(i[0].attributes)),s=new Set(Object.keys(i[0].morphAttributes)),r={},a={},o=i[0].morphTargetsRelative,c=new Nt,l=0;for(let h=0;h<i.length;++h){let u=i[h],d=0;if(t!==(u.index!==null))return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+". All geometries must have compatible attributes; make sure index attribute exists among all geometries, or in none of them."),null;for(let f in u.attributes){if(!n.has(f))return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+'. All geometries must have compatible attributes; make sure "'+f+'" attribute exists among all geometries, or in none of them.'),null;r[f]===void 0&&(r[f]=[]),r[f].push(u.attributes[f]),d++}if(d!==n.size)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+". Make sure all geometries have the same number of attributes."),null;if(o!==u.morphTargetsRelative)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+". .morphTargetsRelative must be consistent throughout all geometries."),null;for(let f in u.morphAttributes){if(!s.has(f))return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+".  .morphAttributes must be consistent throughout all geometries."),null;a[f]===void 0&&(a[f]=[]),a[f].push(u.morphAttributes[f])}if(e){let f;if(t)f=u.index.count;else if(u.attributes.position!==void 0)f=u.attributes.position.count;else return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+". The geometry must have either an index or a position attribute"),null;c.addGroup(l,f,h),l+=f}}if(t){let h=0,u=[];for(let d=0;d<i.length;++d){let f=i[d].index;for(let p=0;p<f.count;++p)u.push(f.getX(p)+h);h+=i[d].attributes.position.count}c.setIndex(u)}for(let h in r){let u=Sf(r[h]);if(!u)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed while trying to merge the "+h+" attribute."),null;c.setAttribute(h,u)}for(let h in a){let u=a[h][0].length;if(u===0)break;c.morphAttributes=c.morphAttributes||{},c.morphAttributes[h]=[];for(let d=0;d<u;++d){let f=[];for(let x=0;x<a[h].length;++x)f.push(a[h][x][d]);let p=Sf(f);if(!p)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed while trying to merge the "+h+" morphAttribute."),null;c.morphAttributes[h].push(p)}}return c}function Sf(i){let e,t,n,s=-1,r=0;for(let l=0;l<i.length;++l){let h=i[l];if(h.isInterleavedBufferAttribute)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. InterleavedBufferAttributes are not supported."),null;if(e===void 0&&(e=h.array.constructor),e!==h.array.constructor)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.array must be of consistent array types across matching attributes."),null;if(t===void 0&&(t=h.itemSize),t!==h.itemSize)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.itemSize must be consistent across matching attributes."),null;if(n===void 0&&(n=h.normalized),n!==h.normalized)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.normalized must be consistent across matching attributes."),null;if(s===-1&&(s=h.gpuType),s!==h.gpuType)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.gpuType must be consistent across matching attributes."),null;r+=h.array.length}let a=new e(r),o=0;for(let l=0;l<i.length;++l)a.set(i[l].array,o),o+=i[l].array.length;let c=new Pt(a,t,n);return s!==void 0&&(c.gpuType=s),c}function sh(i,e){if(e===hf)return console.warn("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Geometry already defined as triangles."),i;if(e===ua||e===Yo){let t=i.getIndex();if(t===null){let a=[],o=i.getAttribute("position");if(o!==void 0){for(let c=0;c<o.count;c++)a.push(c);i.setIndex(a),t=i.getIndex()}else return console.error("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Undefined position attribute. Processing not possible."),i}let n=t.count-2,s=[];if(e===ua)for(let a=1;a<=n;a++)s.push(t.getX(0)),s.push(t.getX(a)),s.push(t.getX(a+1));else for(let a=0;a<n;a++)a%2===0?(s.push(t.getX(a)),s.push(t.getX(a+1)),s.push(t.getX(a+2))):(s.push(t.getX(a+2)),s.push(t.getX(a+1)),s.push(t.getX(a)));s.length/3!==n&&console.error("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Unable to generate correct amount of triangles.");let r=i.clone();return r.setIndex(s),r.clearGroups(),r}else return console.error("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Unknown draw mode:",e),i}function Jo(i,e,t=0){let n=Math.imul(i|0,374761393)^Math.imul(e|0,668265263)^Math.imul(t|0,1442695041);return n=Math.imul(n^n>>>13,1274126177),n^=n>>>16,(n>>>0)/4294967296}function dv(i,e,t){let n=Math.floor(i),s=Math.floor(e),r=i-n,a=e-s,o=r*r*(3-2*r),c=a*a*(3-2*a),l=Jo(n,s,t),h=Jo(n+1,s,t),u=Jo(n,s+1,t),d=Jo(n+1,s+1,t);return l+(h-l)*o+(u-l)*c+(l-h-u+d)*o*c}function Mr(i,e,t=4,n=0){let s=0,r=.5,a=1,o=0;for(let c=0;c<t;c++)s+=r*dv(i*a,e*a,n+c*17),o+=r,r*=.5,a*=2;return s/o}function Qo(i){return function(){i|=0,i=i+1831565813|0;let e=Math.imul(i^i>>>15,1|i);return e=e+Math.imul(e^e>>>7,61|e)^e,((e^e>>>14)>>>0)/4294967296}}var ki=210,ue={village:{x:0,z:0},herbalist:{x:-48,z:-30},camp:{x:-80,z:-112},ruins:{x:118,z:-100},lake:{x:-95,z:72},house:{x:44,z:62},crossroad:{x:54,z:-50}},Tf=[[[0,0],[-30,-40],[-80,-112]],[[0,0],[52,-52],[118,-100]],[[0,0],[44,62]],[[0,0],[-48,-30]],[[0,0],[-55,45],[-75,52]]],ch=(i,e,t)=>{let n=Math.max(0,Math.min(1,(t-i)/(e-i)));return n*n*(3-2*n)};function fv(i,e,t,n,s,r){let a=s-t,o=r-n,c=((i-t)*a+(e-n)*o)/(a*a+o*o);c=Math.max(0,Math.min(1,c));let l=t+a*c-i,h=n+o*c-e;return Math.sqrt(l*l+h*h)}function Bi(i,e){let t=1e9;for(let n of Tf)for(let s=0;s<n.length-1;s++){let r=fv(i,e,n[s][0],n[s][1],n[s+1][0],n[s+1][1]);r<t&&(t=r)}return t}function br(i,e){let t=(Mr(i*.011+50,e*.011+50,4,1)-.5)*26+(Mr(i*.06,e*.06,2,9)-.5)*2.5+2.5,n=Math.max(Math.abs(i),Math.abs(e));return n>150&&(t+=Math.pow((n-150)/40,2)*45),t+=8*Math.exp(-((i-ue.house.x)**2+(e-ue.house.z)**2)/(2*16*16)),t}function us(i,e,t,n,s,r,a){let o=Math.hypot(e-n.x,t-n.z);return o>=r?i:a+(i-a)*ch(s,r,o)}var yi={};function rh(){return yi.ok||(yi.camp=Math.max(2,br(ue.camp.x,ue.camp.z)),yi.ruins=Math.max(3,br(ue.ruins.x,ue.ruins.z))+1.5,yi.herb=Math.max(2,br(ue.herbalist.x,ue.herbalist.z)),yi.house=br(ue.house.x,ue.house.z),yi.cross=Math.max(1.5,br(ue.crossroad.x,ue.crossroad.z)),yi.ok=!0),yi}function nt(i,e){let t=rh(),n=br(i,e);if(n=us(n,i,e,ue.lake,16,46,-4),n=us(n,i,e,ue.village,30,48,2.5),n=us(n,i,e,ue.camp,14,26,t.camp),n=us(n,i,e,ue.ruins,18,32,t.ruins),n=us(n,i,e,ue.herbalist,6,13,t.herb),n=us(n,i,e,ue.house,7,12,t.house),n=us(n,i,e,ue.crossroad,5,10,t.cross),n<.8){let s=Bi(i,e);s<7&&(n=n+(.8-n)*(1-ch(3,7,s)))}return n}function ds(i,e){let t=Mr(i*.018+11,e*.018-7,3,21);return t+=.28*Math.max(0,Math.min(1,-(i+e)/120)),t}var ah=class{constructor(){this.grid=new Map,this.cell=10}_ins(e,t){let n=this.cell;for(let s=Math.floor((e.x-t)/n);s<=Math.floor((e.x+t)/n);s++)for(let r=Math.floor((e.z-t)/n);r<=Math.floor((e.z+t)/n);r++){let a=s*1e3+r,o=this.grid.get(a);o||(o=[],this.grid.set(a,o)),o.push(e)}}addCircle(e,t,n){this._ins({x:e,z:t,r:n},n)}addBox(e,t,n,s,r=0){this._ins({x:e,z:t,hw:n,hd:s,c:Math.cos(r),s:Math.sin(r),box:!0},Math.hypot(n,s))}blocked(e,t){let n=this.grid.get(Math.floor(e/this.cell)*1e3+Math.floor(t/this.cell));if(!n)return!1;for(let s of n)if(s.box){let r=e-s.x,a=t-s.z,o=r*s.c-a*s.s,c=r*s.s+a*s.c;if(Math.abs(o)<s.hw+.3&&Math.abs(c)<s.hd+.3)return!0}else if(s.r>1.5&&Math.hypot(e-s.x,t-s.z)<s.r)return!0;return!1}resolve(e,t){let n=this.cell,s=Math.floor(e.x/n),r=Math.floor(e.z/n),a=!1;for(let o=-1;o<=1;o++)for(let c=-1;c<=1;c++){let l=this.grid.get((s+o)*1e3+(r+c));if(l)for(let h of l)if(h.box){let u=e.x-h.x,d=e.z-h.z,f=u*h.c-d*h.s,p=u*h.s+d*h.c,x=Math.max(-h.hw,Math.min(f,h.hw)),g=Math.max(-h.hd,Math.min(p,h.hd)),m=f-x,y=p-g,_=m*m+y*y;if(_<t*t){let w,P;if(_>1e-8){let A=Math.sqrt(_);w=x+m/A*t,P=g+y/A*t}else{let A=Math.min(h.hw-f,f+h.hw,h.hd-p,p+h.hd);w=f,P=p,A===h.hw-f?w=h.hw+t:A===f+h.hw?w=-h.hw-t:A===h.hd-p?P=h.hd+t:P=-h.hd-t}e.x=h.x+w*h.c+P*h.s,e.z=h.z-w*h.s+P*h.c,a=!0}}else{let u=e.x-h.x,d=e.z-h.z,f=t+h.r,p=u*u+d*d;if(p<f*f&&p>1e-8){let x=Math.sqrt(p);e.x=h.x+u/x*f,e.z=h.z+d/x*f,a=!0}}}return a}},Ef=new Map;function at(i,e){let t=i+(e?JSON.stringify(e):""),n=Ef.get(t);return n||(n=new Bt({color:i,...e||{}}),Ef.set(t,n)),n}function Sn(i,e){i=i.index?i.toNonIndexed():i;let t=new pe(e),n=i.attributes.position.count,s=new Float32Array(n*3);for(let r=0;r<n;r++)s[r*3]=t.r,s[r*3+1]=t.g,s[r*3+2]=t.b;return i.setAttribute("color",new Pt(s,3)),i.attributes.uv&&i.deleteAttribute("uv"),i}function oh(i,e,t,n=.4){let s=i/2+n,r=e/2+n,a=[-s,0,-r],o=[s,0,-r],c=[s,0,r],l=[-s,0,r],h=[-s,t,0],u=[s,t,0],d=[l,c,u,l,u,h,o,a,h,o,h,u,a,l,h,c,o,u],f=new Nt;return f.setAttribute("position",new ut(d.flat(),3)),f.computeVertexNormals(),f}function Ue(i,e,t=0,n=0,s=0,r){let a=new de(i,e);return a.position.set(t,n,s),a.castShadow=!0,a.receiveShadow=!0,r&&r.add(a),a}var tc=1.12,pv={P_SmallA:{w:4,d:4},P_SmallB:{w:4,d:4},P_Long:{w:4,d:6},P_Medium:{w:6,d:6},P_Tavern:{w:6,d:8},P_Manor:{w:6,d:6},P_Hut:{w:4,d:4}},ec=new Bt({color:3813151,emissive:16757575,emissiveIntensity:0}),wr=[];function mv(i,e){var c,l,h,u,d,f;let t=new We,n=i.w,s=i.d,r=(c=i.h)!=null?c:3;Ue(new Fe(n,.5,s),at(8221800),0,0,0,t),Ue(new Fe(n,r,s),at((l=i.wall)!=null?l:15260864),0,r/2+.25,0,t);let a=at(5913892);for(let p of[-1,1])for(let x of[-1,1])Ue(new Fe(.25,r,.25),a,p*n/2,r/2+.25,x*s/2,t);Ue(new Fe(n+.1,.22,.12),a,0,r*.55+.25,s/2+.02,t);let o=Ue(oh(n,s,(h=i.roofH)!=null?h:2.2),at((u=i.roof)!=null?u:9124394,{flatShading:!0}),0,r+.25,0,t);i.rotRoof&&(o.rotation.y=Math.PI/2),Ue(new Fe(1,1.8,.1),at(4861722),0,1.15,s/2+.05,t);for(let p of[-1,1])Ue(new Fe(.7,.7,.08),ec,p*n*.3,1.9,s/2+.05,t);for(let p of[-1,1]){let x=Ue(new Fe(.08,.7,.7),ec,p*(n/2+.04),1.9,0,t);x.castShadow=!1}return i.chimney&&Ue(new Fe(.6,1.6,.6),at(7168600),n*.25,r+1.6,-s*.15,t),t.position.set(i.x,i.y,i.z),t.rotation.y=(d=i.rot)!=null?d:0,e.addBox(i.x,i.z,n/2+.1,s/2+.1,(f=i.rot)!=null?f:0),t}function Af(i,e){let t=Qo(1337),n=new ah,s={colliders:n,spots:{},herbs:[],chests:[],villageHomes:[],houses:[],props:[]};function r(D,N,W,ee,ye,ne,X={}){let C=pv[D],Q=tc,ie=Object.assign({x:N,y:W,z:ee,rot:ye,w:C.w*Q+.25,d:C.d*Q+.25,h:3,roofH:2.2},X),me=mv(ie,n);return ne.add(me),s.houses.push({kind:D,x:N,y:W,z:ee,rot:ye,group:me,parent:ne}),ie}let a=(D,N,W,ee=1)=>s.props.push({kind:D,group:N,parent:W,s:ee}),o=ki*2,c=e==="low"?120:168,l=new zi(o,o,c,c);l.rotateX(-Math.PI/2);let h=l.attributes.position,u=new Float32Array(h.count*3),d=new pe,f=new pe(6068796),p=new pe(8367686),x=new pe(4091436),g=new pe(13482884),m=new pe(8748400),y=new pe(15922422),_=new pe(10124114),w=new pe(9067146);for(let D=0;D<h.count;D++){let N=h.getX(D),W=h.getZ(D),ee=nt(N,W);h.setY(D,ee);let ye=Mr(N*.08,W*.08,2,5);d.copy(f).lerp(p,ye);let ne=ds(N,W);ne>.55&&d.lerp(x,Math.min(1,(ne-.55)*4));let X=Mr(N*.03+3,W*.03,2,77);X>.66&&ee>3&&d.lerp(w,Math.min(.6,(X-.66)*4));let C=Bi(N,W);C<3.2&&d.lerp(_,1-ch(1.6,3.2,C)),Math.hypot(N,W)<14&&d.lerp(_,.6*(1-Math.hypot(N,W)/14)),Math.hypot(N-ue.ruins.x,W-ue.ruins.z)<22&&d.lerp(m,.45),ee<1.2&&d.lerp(g,Math.min(1,(1.2-ee)/.8)),ee>16&&d.lerp(m,Math.min(1,(ee-16)/8)),ee>34&&d.lerp(y,Math.min(1,(ee-34)/6)),u[D*3]=d.r,u[D*3+1]=d.g,u[D*3+2]=d.b}l.setAttribute("color",new Pt(u,3)),l.computeVertexNormals();let P=new de(l,new Bt({vertexColors:!0}));P.receiveShadow=!0,i.add(P);let A=new de(new zi(o,o),new Uo({color:3110056,transparent:!0,opacity:.78,shininess:90,specular:8956620}));A.rotation.x=-Math.PI/2,A.position.y=0,i.add(A),s.water=A;let R=(D,N,W=0)=>Math.hypot(D,N)<50+W||Math.hypot(D-ue.camp.x,N-ue.camp.z)<20+W||Math.hypot(D-ue.ruins.x,N-ue.ruins.z)<30+W||Math.hypot(D-ue.house.x,N-ue.house.z)<14+W||Math.hypot(D-ue.herbalist.x,N-ue.herbalist.z)<11+W||Math.hypot(D-ue.crossroad.x,N-ue.crossroad.z)<10+W,F=da([Sn(new Ft(.16,.24,1.6,5).translate(0,.8,0),5913892),Sn(new tn(1.5,2.8,7).translate(0,2.6,0),3104308),Sn(new tn(1.1,2.2,7).translate(0,3.9,0),3829308)]),M=da([Sn(new Ft(.2,.3,2.2,5).translate(0,1.1,0),6965804),Sn(new Yn(1.7,0).translate(0,3.2,0),5212725),Sn(new Yn(1.1,0).translate(.9,3.9,.3),6265406)]),E=Sn(new Yn(.8,0).scale(1,.7,1).translate(0,.4,0),4882224),O=new Bt({vertexColors:!0,flatShading:!0}),j=[],ae=[],z=[];for(let D=0;D<9e3&&j.length+ae.length<(e==="low"?650:1e3);D++){let N=(t()*2-1)*175,W=(t()*2-1)*175,ee=ds(N,W),ye=t()<.012;if(!(ee>.56+t()*.12)&&!ye||R(N,W)||Bi(N,W)<4.5)continue;let ne=nt(N,W);if(ne<.9||ne>26)continue;let X=.8+t()*.7;((ee>.68||ne>12?t()<.75:t()<.3)?j:ae).push({x:N,z:W,y:ne-.1,s:X,r:t()*6.28}),n.addCircle(N,W,.45*X)}for(let D=0;D<2500&&z.length<350;D++){let N=(t()*2-1)*170,W=(t()*2-1)*170;if(R(N,W,-10)||Bi(N,W)<3)continue;let ee=nt(N,W);ee<1||ee>24||ds(N,W)<.45&&t()<.6||z.push({x:N,z:W,y:ee,s:.7+t()*.8,r:t()*6.28})}let B=new St,J=new pe;function q(D,N,W,ee=!0){let ye=new pr(D,W,Math.max(1,N.length));return N.forEach((ne,X)=>{var Q,ie,me,ve,$e,rt;B.position.set(ne.x,ne.y,ne.z),B.rotation.set(0,ne.r,0),B.scale.set(ne.s*((Q=ne.sx)!=null?Q:1),ne.s*((ie=ne.sy)!=null?ie:1),ne.s*((me=ne.sz)!=null?me:1)),B.updateMatrix(),ye.setMatrixAt(X,B.matrix);let C=.82+t()*.3;J.setRGB(C*((ve=ne.cr)!=null?ve:1),C*(($e=ne.cg)!=null?$e:1),C*((rt=ne.cb)!=null?rt:1)),ye.setColorAt(X,J)}),ye.count=N.length,ye.castShadow=ee,ye.receiveShadow=!0,i.add(ye),ye}q(F,j,O),q(M,ae,O),q(E,z,O,!1);let K=[];for(let D=0;D<3e3&&K.length<220;D++){let N=(t()*2-1)*185,W=(t()*2-1)*185;if(R(N,W,-15)||Bi(N,W)<3.5)continue;let ee=nt(N,W);if(ee<-1)continue;let ye=.4+t()*t()*2.2;K.push({x:N,z:W,y:ee-.2*ye,s:ye,sy:.6+t()*.4,r:t()*6.28}),ye>.9&&n.addCircle(N,W,ye*.85)}q(Sn(new No(1,0),9407104),K,O);let $=da([Sn(new tn(.07,.55,3).translate(0,.27,0),7315520),Sn(new tn(.07,.45,3).translate(.12,.22,.05),8565834),Sn(new tn(.07,.5,3).translate(-.1,.25,-.06),6262840)]),se=[],le=[],_e=e==="low"?1500:4e3;for(let D=0;D<_e*3&&se.length<_e;D++){let N=(t()*2-1)*160,W=(t()*2-1)*160,ee=nt(N,W);if(!(ee<1.2||ee>15)&&!(Bi(N,W)<2.5||Math.hypot(N,W)<12)&&(se.push({x:N,z:W,y:ee,s:.8+t()*.9,r:t()*6.28}),t()<.18)){let ye=[[1,1,1],[1,.9,.2],[.8,.4,1],[1,.3,.3],[.5,.7,1]][Math.floor(t()*5)];le.push({x:N+.4,z:W+.3,y:ee,s:.8+t()*.6,r:t()*6.28,cr:ye[0],cg:ye[1],cb:ye[2]})}}q($,se,O,!1);let Z=da([Sn(new Ft(.02,.02,.4,3).translate(0,.2,0),4885040),Sn(new Yn(.09,0).translate(0,.42,0),16777215)]);q(Z,le,new Bt({vertexColors:!0}),!1);let te=new We;i.add(te);let xe=Tf.map(D=>Math.atan2(D[1][0],D[1][1])),Re=(D,N)=>{let W=Math.abs(D-N)%(Math.PI*2);return W>Math.PI?Math.PI*2-W:W},we=[];for(let D=0;D<360;D+=26){let N=D*Math.PI/180+.2;if(xe.some(ee=>Re(N,ee)<.36))continue;let W=we.length%2?25:18;we.push({x:Math.sin(N)*W,z:Math.cos(N)*W,ang:N})}let Be=[9124394,7227946,10115632,8007728,5917242],He=["P_Long","P_SmallB","P_Medium","P_SmallA","P_Long","P_Medium","P_SmallB","P_Long"];we.forEach((D,N)=>{let W=N===0,ee=N===2,ye=W?"P_Tavern":ee?"P_SmallA":He[N%He.length],ne=r(ye,D.x,2.5,D.z,D.ang+Math.PI,te,{h:W?4:3,roof:Be[N%Be.length],chimney:N%2===0,roofH:W?2.8:2.2,wall:N%3===1?14207144:15260864}),X={x:D.x-Math.sin(D.ang)*(ne.d/2+1.8),z:D.z-Math.cos(D.ang)*(ne.d/2+1.8)};if(s.villageHomes.push(X),W){s.spots.tavern=X;let C=new We;Ue(new Fe(.15,3,.15),at(5913892),0,1.5,0,C),Ue(new Fe(1.2,.7,.1),at(11567168),.6,2.6,0,C),Ue(new Fe(.4,.4,.12),at(13934624),.6,2.6,0,C),C.position.set(X.x+2.5,2.5,X.z),C.rotation.y=Math.atan2(-X.x-2.5,-X.z),te.add(C),a("P_Sign",C,te)}ee&&(s.spots.widow=X)}),s.spots.lender={x:s.spots.tavern.x*.85+1.5,z:s.spots.tavern.z*.85};let Pe=new We;Ue(new Ft(1.2,1.3,1,10),at(9077624),0,.5,0,Pe),Ue(new Ft(.95,.95,.05,10),at(2046549),0,.95,0,Pe);for(let D of[-1,1])Ue(new Fe(.15,2.2,.15),at(5913892),D*1,1.6,0,Pe);Ue(oh(2.2,1.6,.8,.2),at(8010282,{flatShading:!0}),0,2.6,0,Pe).rotation.y=Math.PI/2,Pe.position.set(0,2.5,0),te.add(Pe),a("P_Well",Pe,te),n.addCircle(0,0,1.4);let qe=new We;Ue(new Fe(3,1,1.4),at(9071168),0,.5,0,qe);for(let D of[-1,1])for(let N of[-1,1])Ue(new Fe(.12,2.6,.12),at(5913892),D*1.4,1.3,N*.65,qe);let k=Ue(new Fe(3.4,.1,1.9),at(12073530),0,2.6,0,qe);k.rotation.x=.15;for(let D=0;D<5;D++)Ue(new Fe(.3,.3,.3),at([13934624,9054858,2787898,12599328,3170496][D]),-1.1+D*.55,1.15,0,qe);qe.position.set(-7,2.5,6),qe.rotation.y=.6,te.add(qe),a("P_Stall",qe,te),n.addBox(-7,6,1.6,.8,.6),s.spots.merchant={x:-7-Math.sin(.6)*1.4,z:6-Math.cos(.6)*1.4},s.spots.elder={x:3,z:3};let jt=new Bt({color:3351057,emissive:16755268,emissiveIntensity:0});wr.push(jt);for(let D=0;D<8;D++){let N=D/8*Math.PI*2+.4,W=11,ee=new We;Ue(new Fe(.15,2.6,.15),at(3811866),0,1.3,0,ee),Ue(new Fe(.35,.45,.35),jt,0,2.7,0,ee),ee.position.set(Math.sin(N)*W,2.5,Math.cos(N)*W),ee.rotation.y=N+Math.PI/2,te.add(ee),a("P_Lantern",ee,te),s.lanterns=s.lanterns||[],s.lanterns.push(ee.position.clone()),n.addCircle(ee.position.x,ee.position.z,.2)}r("P_Hut",ue.herbalist.x,nt(ue.herbalist.x,ue.herbalist.z),ue.herbalist.z,Math.atan2(-ue.herbalist.x,-ue.herbalist.z),i,{h:2.6,roof:4876842,wall:13154448,chimney:!0});let Le=Math.atan2(-ue.herbalist.x,-ue.herbalist.z);s.spots.herbalist={x:ue.herbalist.x+Math.sin(Le)*4.5,z:ue.herbalist.z+Math.cos(Le)*4.5};for(let D=0;D<6;D++){let N=Ue(new Ft(.25,.2,.4,6),at(10510394),0,0,0);N.position.set(ue.herbalist.x+Math.sin(Le+.6+D*.12)*4,nt(ue.herbalist.x,ue.herbalist.z)+.2,ue.herbalist.z+Math.cos(Le+.6+D*.12)*4),i.add(N)}{let D=ue.crossroad.x+4,N=ue.crossroad.z+3,W=nt(D,N),ee=new We;Ue(new Fe(2.2,1.6,3.4),at(4860506),0,1.4,0,ee),Ue(oh(2.2,3.4,.9,.2),at(2759226,{flatShading:!0}),0,2.2,0,ee).rotation.y=Math.PI/2;let ye=new Ft(.55,.55,.15,10);for(let C of[-1,1])for(let Q of[-1,1]){let ie=Ue(ye,at(3811866),C*1.15,.55,Q*1.1,ee);ie.rotation.z=Math.PI/2}let ne=new Bt({color:2245666,emissive:6750088,emissiveIntensity:.6});wr.push(ne),Ue(new Fe(.3,.4,.3),ne,1.2,2,1.5,ee),ee.position.set(D,W,N),ee.rotation.y=.4,i.add(ee),n.addBox(D,N,1.2,1.8,.4),s.spots.alchemist={x:ue.crossroad.x,z:ue.crossroad.z};let X=new We;Ue(new Fe(.15,2.4,.15),at(5913892),0,1.2,0,X);for(let C=0;C<3;C++){let Q=Ue(new Fe(1.2,.25,.06),at(10517066),.4,2-C*.35,0,X);Q.rotation.y=C*1.3}X.position.set(ue.crossroad.x-2.5,nt(ue.crossroad.x-2.5,ue.crossroad.z-2),ue.crossroad.z-2),i.add(X)}{let D=ue.house.x,N=ue.house.z,W=nt(D,N),ee=Math.atan2(-D,-N);r("P_Manor",D,W,N,ee,i,{h:3.6,roof:2771578,wall:15787728,chimney:!0,roofH:2.6});let ye=D+Math.sin(ee)*6.2+Math.cos(ee)*2.5,ne=N+Math.cos(ee)*6.2-Math.sin(ee)*2.5,X=new We;Ue(new Fe(.15,1.6,.15),at(5913892),0,.8,0,X),Ue(new Fe(1.1,.6,.08),at(13148256),0,1.5,0,X),X.position.set(ye,nt(ye,ne),ne),X.rotation.y=ee,i.add(X),a("P_Sign",X,i,.55),s.spots.house={x:D+Math.sin(ee)*5.2,z:N+Math.cos(ee)*5.2}}{let D=ue.camp,N=rh().camp,W=at(9073488,{flatShading:!0});for(let Q=0;Q<5;Q++){let ie=Q/5*Math.PI*2+.3,me=D.x+Math.sin(ie)*9,ve=D.z+Math.cos(ie)*9,$e=Ue(new tn(2.2,2.8,6),W,me,N+1.4,ve);i.add($e),n.addCircle(me,ve,1.9)}let ee=at(5913892);for(let Q=0;Q<4;Q++){let ie=Ue(new Ft(.12,.12,1.2,5),ee,D.x,N+.15,D.z);ie.rotation.set(Math.PI/2,0,Q*Math.PI/4),i.add(ie)}let ye=new At({color:16747050}),ne=new de(new tn(.45,1.2,6),ye);ne.position.set(D.x,N+.7,D.z),i.add(ne);let X=new de(new tn(.25,.8,5),new At({color:16769126}));X.position.set(D.x,N+.6,D.z),i.add(X),n.addCircle(D.x,D.z,.9);let C=new Oi(16747066,0,22,1.6);C.position.set(D.x,N+2,D.z),i.add(C),s.fire={flame:ne,flame2:X,light:C};for(let Q=0;Q<26;Q++){let ie=Q/34*Math.PI*2+2.2,me=D.x+Math.sin(ie)*17,ve=D.z+Math.cos(ie)*17,$e=Ue(new Ft(.22,.25,2.6+Q%3*.3,5),ee,me,nt(me,ve)+1.2,ve);i.add($e),n.addCircle(me,ve,.3);let rt=Ue(new tn(.22,.5,5),ee,me,nt(me,ve)+2.8+Q%3*.3,ve);i.add(rt)}for(let Q=0;Q<4;Q++){let ie=Ue(new Fe(.9,.9,.9),at(8018480),D.x+4+Q*.4,N+.45+(Q===3?.9:0),D.z-3+Q%3*.95);i.add(ie)}}{let D=ue.ruins,N=rh().ruins,W=at(9276036,{flatShading:!0}),ee=at(6257226,{flatShading:!0}),ye=at(5591630,{flatShading:!0});for(let Q=0;Q<12;Q++){let ie=Q/12*Math.PI*2,me=D.x+Math.sin(ie)*15,ve=D.z+Math.cos(ie)*15,$e=Q%3===0?1.2+t()*1.5:4+t()*4,rt=Ue(new Ft(.75,.9,$e,7),Q%4===0?ee:W,me,N+$e/2,ve);if(i.add(rt),n.addCircle(me,ve,.9),Q%2===0&&$e>4){let Rt=Ue(new Fe(2,.5,2),ye,me,N+$e+.25,ve);Rt.rotation.y=t(),i.add(Rt)}}for(let Q=0;Q<5;Q++){let ie=Q/5*Math.PI*2+.5,me=D.x+Math.sin(ie)*22,ve=D.z+Math.cos(ie)*22,$e=6+t()*4,rt=1.5+t()*3,Rt=Ue(new Fe($e,rt,1),W,me,nt(me,ve)+rt/2-.2,ve);Rt.rotation.y=ie+Math.PI/2,i.add(Rt),n.addBox(me,ve,$e/2,.55,ie+Math.PI/2)}let ne=Ue(new Ft(5,5.6,.6,12),ye,D.x,N+.3,D.z);i.add(ne);let X=Ue(new Ft(3,3.6,9,9,1,!0),W,D.x+25,nt(D.x+25,D.z-14)+4.5,D.z-14);X.material=at(9276036,{flatShading:!0,side:Jt}),i.add(X),n.addCircle(D.x+25,D.z-14,3.6);let C=new Bt({color:3349002,emissive:16734746,emissiveIntensity:.4});wr.push(C),s.runeMat=C;for(let Q=0;Q<6;Q++){let ie=Q/6*Math.PI*2,me=Ue(new Fe(.6,.05,1.4),C,D.x+Math.sin(ie)*3.8,N+.62,D.z+Math.cos(ie)*3.8);me.rotation.y=ie,i.add(me)}s.spots.ruins={x:D.x,z:D.z}}let ke=[[-70,98],[92,30],[-118,-40],[140,-132],[-22,118],[128,82],[-140,20],[20,-140]],Se=at(7029794),bt=at(13213744);ke.forEach(([D,N],W)=>{let ee=0;for(;nt(D,N)<.6&&ee++<40;)D*=.96,N*=.96;let ye=nt(D,N),ne=new We;Ue(new Fe(1.1,.6,.7),Se,0,.3,0,ne);let X=new We;X.position.set(0,.6,-.35),ne.add(X),Ue(new Fe(1.12,.3,.72),Se,0,.15,.35,X),Ue(new Fe(1.14,.08,.1),bt,0,.15,.72,X),Ue(new Fe(.16,.2,.06),bt,0,.55,.37,ne),ne.position.set(D,ye,N),ne.rotation.y=t()*6,i.add(ne),n.addCircle(D,N,.6),s.chests.push({x:D,z:N,group:ne,lid:X,i:W})});let Ge=new Bt({color:8978414,emissive:4513228,emissiveIntensity:.6});wr.push(Ge),s.herbMat=Ge;let T=at(2779706),b=Qo(99);for(let D=0;D<4e3&&s.herbs.length<11;D++){let N=(b()*2-1)*150,W=(b()*2-1)*150;if(ds(N,W)<.6||R(N,W,8)||Bi(N,W)<6)continue;let ee=nt(N,W);if(ee<1||ee>18||s.herbs.some(ne=>Math.hypot(ne.x-N,ne.z-W)<18))continue;let ye=new We;for(let ne=0;ne<3;ne++){let X=Ue(new Ft(.03,.03,.6,3),T,Math.cos(ne*2.1)*.15,.3,Math.sin(ne*2.1)*.15,ye);X.castShadow=!1;let C=Ue(new xr(.14,0),Ge,Math.cos(ne*2.1)*.15,.65,Math.sin(ne*2.1)*.15,ye);C.castShadow=!1}ye.position.set(N,ee,W),i.add(ye),s.herbs.push({x:N,z:W,group:ye,i:s.herbs.length})}let H=new Nt,ce=[],oe=Qo(7);for(let D=0;D<900;D++){let N=oe()*Math.PI*2,W=oe()*.9+.08,ee=330;ce.push(Math.cos(N)*Math.cos(W*Math.PI/2)*ee,Math.sin(W*Math.PI/2)*ee,Math.sin(N)*Math.cos(W*Math.PI/2)*ee)}H.setAttribute("position",new ut(ce,3));let he=new hs({color:16777215,size:1.6,sizeAttenuation:!1,transparent:!0,opacity:0,fog:!1,depthWrite:!1}),Te=new gr(H,he);i.add(Te),s.stars=Te,s.starMat=he;let ge=new de(new aa(9,12,8),new At({color:15659775,fog:!1,transparent:!0}));i.add(ge),s.moon=ge;let be=new de(new aa(12,12,8),new At({color:16773824,fog:!1,transparent:!0}));i.add(be),s.sunDisc=be;let Ie=new Bt({color:16777215,flatShading:!0,transparent:!0,opacity:.9});s.cloudMat=Ie;let Ve=new We;for(let D=0;D<18;D++){let N=new We;for(let W=0;W<4;W++){let ee=new de(new Yn(4+t()*4,0),Ie);ee.position.set(W*5-8,t()*2,t()*4),ee.scale.y=.5,N.add(ee)}N.position.set((t()*2-1)*220,55+t()*20,(t()*2-1)*220),Ve.add(N)}i.add(Ve),s.clouds=Ve;let re=210,lt=document.createElement("canvas");lt.width=re,lt.height=re;let Ye=lt.getContext("2d"),De=Ye.createImageData(re,re);for(let D=0;D<re;D++)for(let N=0;N<re;N++){let W=-ki+N*2+1,ee=-ki+D*2+1,ye=nt(W,ee),ne,X,C;if(ye<0)ne=50,X=110,C=160;else if(ye<1.2)ne=205,X=187,C=132;else if(ye>34)ne=235,X=235,C=240;else if(ye>16)ne=133,X=125,C=112;else{let ie=ds(W,ee);ne=92,X=154,C=60,ie>.58&&(ne=52,X=100,C=42);let me=(ye-2)*3;ne+=me,X+=me,C+=me}Bi(W,ee)<2.2&&(ne=160,X=128,C=84);let Q=(D*re+N)*4;De.data[Q]=ne,De.data[Q+1]=X,De.data[Q+2]=C,De.data[Q+3]=255}Ye.putImageData(De,0,0),Ye.fillStyle="#6a3a2a";for(let D of we)Ye.fillRect((D.x+ki)/2-2,(D.z+ki)/2-2,4,4);return s.minimap=lt,s}var Rf=new Map;function pt(i,e,t){let n=i+"_"+e+"_"+t,s=Rf.get(n);return s||(s=new Fe(i,e,t),Rf.set(n,s)),s}function fs(i={}){var E,O,j,ae,z,B,J;let e=[],t=(q,K={})=>{let $=new Bt({color:q,...K});return e.push($),$},n=t((E=i.skin)!=null?E:14725257),s=t((O=i.shirt)!=null?O:3829413),r=t((j=i.pants)!=null?j:4864810),a=t((ae=i.hair)!=null?ae:3875858),o=t((z=i.boots)!=null?z:2759956),c=i.thin?.8:1,l=new We,h=new We;l.add(h);let u=new de(pt(.66*c,.78,.38*c),s);u.position.y=1.28,h.add(u);let d=new de(pt(.68*c,.1,.4*c),o);d.position.y=.92,h.add(d);let f=new We;f.position.y=1.68,h.add(f);let p=new de(pt(.42,.44,.42),n);if(p.position.y=.24,f.add(p),i.helmet){let q=t(i.helmet),K=new de(pt(.5,.36,.5),q);K.position.y=.38,f.add(K);let $=new de(pt(.08,.2,.46),t(7999504));$.position.y=.62,f.add($)}else if(i.hood){let q=t(i.hood),K=new de(pt(.5,.52,.5),q);K.position.set(0,.3,-.04),f.add(K)}else{let q=new de(pt(.46,.14,.46),a);q.position.y=.5,f.add(q);let K=new de(pt(.46,i.longHair?.6:.3,.1),a);K.position.set(0,i.longHair?.2:.34,-.2),f.add(K)}if(i.beard){let q=new de(pt(.38,.22,.1),t(i.beard));q.position.set(0,.08,.2),f.add(q)}let x=i.eyeGlow?t(i.eyeGlow,{emissive:i.eyeGlow}):t(1710618),g=new de(pt(.08,.07,.02),x);g.position.set(-.1,.28,.215),f.add(g);let m=g.clone();m.position.x=.1,f.add(m);function y(q,K,$,se,le,_e){let Z=new We;Z.position.set(q,K,0);let te=new de(pt($,se,$),le);if(te.position.y=-se/2,Z.add(te),_e){let xe=new de(pt($*1.05,.16,$*1.15),_e);xe.position.set(0,-se+.06,.02),Z.add(xe)}return h.add(Z),Z}let _=y(-.45*c,1.62,.2*c,.72,s,n),w=y(.45*c,1.62,.2*c,.72,s,n),P=y(-.17*c,.9,.24*c,.88,r,o),A=y(.17*c,.9,.24*c,.88,r,o);if(i.dress){let q=new de(new Ft(.36,.56,.8,8),t(i.dress));q.position.y=.55,h.add(q)}let R=null;if(i.weapon){R=new We,R.position.set(0,-.68,.05),R.rotation.x=Math.PI/2;let q=t((B=i.blade)!=null?B:13226457,i.bladeGlow?{emissive:i.bladeGlow,emissiveIntensity:.6}:{}),K=new de(pt(.06,.22,.06),t(4861722));R.add(K);let $=new de(pt(.3,.05,.08),t(10254890));$.position.y=.12,R.add($);let se=new de(pt(.08,.85,.03),q);se.position.y=.56,R.add(se),R.userData.metal=q,w.add(R)}if(i.staff){let q=new de(pt(.06,1.7,.06),t(5913119));q.position.set(0,-.6,.05),w.add(q);let K=new de(pt(.16,.16,.16),t(i.staff,{emissive:i.staff}));K.position.set(0,.25,.05),w.add(K)}let F=null;if(i.cape){F=new We,F.position.set(0,1.62,-.21),h.add(F);let q=new de(pt(.62,1.05,.04),t(i.cape));q.position.y=-.52,F.add(q)}let M=(J=i.scale)!=null?J:1;return l.scale.setScalar(M),l.traverse(q=>{q.isMesh&&(q.castShadow=!0)}),{kind:"hum",group:l,body:h,headG:f,armL:_,armR:w,legL:P,legR:A,mats:e,weapon:R,cape:F,phase:Math.random()*6}}function lh(i,e,t,n=-1,s={}){i.phase+=e*(3+t*1.7);let r=Math.min(1,t/4),a=Math.sin(i.phase);if(i.legL.rotation.x=a*.8*r,i.legR.rotation.x=-a*.8*r,i.armL.rotation.x=s.cast?-1.5:-a*.6*r,i.armL.rotation.z=0,i.body.position.y=Math.abs(Math.cos(i.phase))*.08*r,i.body.rotation.y=0,i.body.rotation.x=0,n>=0){let o;n<.35?o=-.3-n/.35*2.4:n<.6?o=-2.7+(n-.35)/.25*2.5:o=-.2-(1-(n-.6)/.4)*0,i.armR.rotation.x=o,i.body.rotation.y=n<.35?-.3*(n/.35):-.3+Math.min(1,(n-.35)/.25)*.6,i.body.rotation.x=n>.35&&n<.7?.15:0}else i.armR.rotation.x=(i.weapon?-.35:0)+a*.6*r;i.cape&&(i.cape.rotation.x=.1+r*.5+Math.sin(i.phase*.5)*.08),s.kneel?(i.legL.rotation.x=-1.4,i.legR.rotation.x=.2,i.body.position.y=-.4,i.armR.rotation.x=-.2,i.armL.rotation.x=-.2,i.headG.rotation.x=.4):i.headG.rotation.x=0}function hh(i={}){var R,F,M,E;let e=[],t=(O,j={})=>{let ae=new Bt({color:O,...j});return e.push(ae),ae},n=t((R=i.color)!=null?R:7829367),s=t((F=i.belly)!=null?F:14540253),r=t((M=i.dark)!=null?M:2236962),a=new We,o=new We;a.add(o);let c=new de(pt(.46,.42,1),n);c.position.y=.62,o.add(c);let l=new de(pt(.4,.2,.5),s);l.position.set(0,.46,.2),o.add(l);let h=new We;h.position.set(0,.82,.55),o.add(h);let u=new de(pt(.36,.32,.36),n);h.add(u);let d=new de(pt(.18,.14,.26),s);d.position.set(0,-.06,.28),h.add(d);let f=new de(pt(.08,.06,.04),r);f.position.set(0,-.02,.42),h.add(f);let p=new tn(.07,.18,4),x=new de(p,n);x.position.set(-.11,.23,-.04),h.add(x);let g=x.clone();g.position.x=.11,h.add(g);let m=i.eye?t(i.eye,{emissive:i.eye}):r,y=new de(pt(.06,.05,.02),m);y.position.set(-.09,.05,.18),h.add(y);let _=y.clone();_.position.x=.09,h.add(_);let w=[];for(let[O,j]of[[-.16,.36],[.16,.36],[-.16,-.36],[.16,-.36]]){let ae=new We;ae.position.set(O,.45,j);let z=new de(pt(.12,.45,.12),n);z.position.y=-.22,ae.add(z);let B=new de(pt(.13,.08,.15),i.paws?t(i.paws):n);B.position.set(0,-.42,.02),ae.add(B),o.add(ae),w.push(ae)}let P=new We;P.position.set(0,.72,-.5),o.add(P);let A=new de(pt(.14,.14,.5),n);if(A.position.z=-.25,P.add(A),i.tailTip){let O=new de(pt(.15,.15,.16),t(i.tailTip));O.position.z=-.52,P.add(O)}return P.rotation.x=.5,a.scale.setScalar((E=i.scale)!=null?E:1),a.traverse(O=>{O.isMesh&&(O.castShadow=!0)}),{kind:"quad",group:a,body:o,headG:h,legs:w,tail:P,mats:e,phase:Math.random()*6}}function uh(i,e,t,n=-1){i.phase+=e*(4+t*2.2);let s=Math.min(1,t/4),r=Math.sin(i.phase);if(i.legs[0].rotation.x=r*.9*s,i.legs[3].rotation.x=r*.9*s,i.legs[1].rotation.x=-r*.9*s,i.legs[2].rotation.x=-r*.9*s,i.body.position.y=Math.abs(Math.cos(i.phase))*.06*s,i.tail.rotation.y=Math.sin(i.phase*(t<.5?.6:1.5))*.5,n>=0){let a=n<.5?n/.5:1-(n-.5)/.5;i.body.rotation.x=-.35*a,i.headG.rotation.x=.4*a,i.body.position.z=.4*a}else i.body.rotation.x=0,i.headG.rotation.x=0,i.body.position.z=0}var kt=null,fa=null,nc=null,Pf=!0,Cf=0,dh=0;function ps(){if(kt){kt.state==="suspended"&&kt.resume();return}try{kt=new(window.AudioContext||window.webkitAudioContext),fa=kt.createGain(),fa.gain.value=.5,fa.connect(kt.destination)}catch{kt=null}}function fh(i){Pf=i}function Lt(i,e,t="sine",n=.3,s=null,r=0){if(!kt)return;let a=kt.currentTime+r,o=kt.createOscillator(),c=kt.createGain();o.type=t,o.frequency.setValueAtTime(i,a),s&&o.frequency.exponentialRampToValueAtTime(s,a+e),c.gain.setValueAtTime(1e-4,a),c.gain.exponentialRampToValueAtTime(n,a+.01),c.gain.exponentialRampToValueAtTime(1e-4,a+e),o.connect(c),c.connect(fa),o.start(a),o.stop(a+e+.05)}function Hi(i,e=.3,t=2e3,n=500,s="bandpass",r=0){if(!kt)return;if(!nc){nc=kt.createBuffer(1,kt.sampleRate,kt.sampleRate);let h=nc.getChannelData(0);for(let u=0;u<h.length;u++)h[u]=Math.random()*2-1}let a=kt.currentTime+r,o=kt.createBufferSource();o.buffer=nc;let c=kt.createBiquadFilter();c.type=s,c.frequency.setValueAtTime(t,a),c.frequency.exponentialRampToValueAtTime(n,a+i);let l=kt.createGain();l.gain.setValueAtTime(e,a),l.gain.exponentialRampToValueAtTime(1e-4,a+i),o.connect(c),c.connect(l),l.connect(fa),o.start(a),o.stop(a+i+.02)}var et={swing:()=>Hi(.18,.22,3500,700),hit:()=>{Hi(.12,.4,1400,200,"lowpass"),Lt(130,.15,"square",.12,60)},crit:()=>{Hi(.15,.5,2400,300,"lowpass"),Lt(880,.2,"triangle",.12,440)},hurt:()=>{Lt(240,.25,"sawtooth",.14,90),Hi(.1,.2,900,200,"lowpass")},coin:()=>{Lt(988,.08,"square",.06),Lt(1319,.15,"square",.06,null,.07)},magic:()=>{Lt(300,.35,"sawtooth",.1,1200),Hi(.3,.12,4e3,8e3,"highpass")},boom:()=>{Hi(.3,.3,2e3,200,"lowpass"),Lt(200,.3,"sine",.2,60)},roll:()=>Hi(.25,.15,800,300,"lowpass"),level:()=>{[523,659,784,1047].forEach((i,e)=>Lt(i,.3,"triangle",.14,null,e*.1))},quest:()=>{[392,523,659,784].forEach((i,e)=>Lt(i,.35,"triangle",.13,null,e*.12))},good:()=>{Lt(660,.5,"sine",.14,990),Lt(990,.5,"sine",.08,1320,.15)},evil:()=>{Lt(220,.6,"sawtooth",.1,70),Lt(233,.6,"sawtooth",.08,75)},slam:()=>{Hi(.6,.6,700,50,"lowpass"),Lt(70,.6,"sine",.4,30)},pickup:()=>Lt(1200+Math.random()*300,.06,"sine",.05,1800),bark:()=>{Lt(520,.07,"square",.07,320),Lt(540,.07,"square",.07,330,.13)},click:()=>Lt(700,.05,"triangle",.08),drink:()=>{for(let i=0;i<3;i++)Lt(400+i*80,.08,"sine",.08,600,i*.09)},death:()=>{Lt(300,1.2,"triangle",.15,80)},victory:()=>{[523,659,784,659,784,1047].forEach((i,e)=>Lt(i,.45,"triangle",.15,null,e*.16))}},gv=[261.6,293.7,329.6,392,440,523.3,587.3,659.3],xv=[220,261.6,293.7,329.6,392,440,523.3],_v=[146.8,174.6,196,220,233.1,261.6];function Lf(i,e){if(!kt||!Pf||kt.state!=="running"||i<Cf)return;let t=e==="combat"?_v:e==="night"?xv:gv,n=e==="combat"?.28:.55;if(Cf=i+n,dh++,e!=="combat"&&Math.random()<.25)return;let s=Math.floor((Math.sin(dh*.7)*.5+.5)*t.length+Math.random()*2)%t.length,r=e==="combat"?.05:.045;Lt(t[s],n*2.2,e==="combat"?"sawtooth":"triangle",r),dh%4===0&&Lt(t[0]/2,n*4,"sine",.05)}var ic=class extends xi{constructor(e){super(e),this.dracoLoader=null,this.ktx2Loader=null,this.meshoptDecoder=null,this.pluginCallbacks=[],this.register(function(t){return new vh(t)}),this.register(function(t){return new Ch(t)}),this.register(function(t){return new Ph(t)}),this.register(function(t){return new Lh(t)}),this.register(function(t){return new bh(t)}),this.register(function(t){return new wh(t)}),this.register(function(t){return new Sh(t)}),this.register(function(t){return new Eh(t)}),this.register(function(t){return new yh(t)}),this.register(function(t){return new Th(t)}),this.register(function(t){return new Mh(t)}),this.register(function(t){return new Rh(t)}),this.register(function(t){return new Ah(t)}),this.register(function(t){return new xh(t)}),this.register(function(t){return new Ih(t)}),this.register(function(t){return new zh(t)})}load(e,t,n,s){let r=this,a;if(this.resourcePath!=="")a=this.resourcePath;else if(this.path!==""){let l=Fi.extractUrlBase(e);a=Fi.resolveURL(l,this.path)}else a=Fi.extractUrlBase(e);this.manager.itemStart(e);let o=function(l){s?s(l):console.error(l),r.manager.itemError(e),r.manager.itemEnd(e)},c=new ca(this.manager);c.setPath(this.path),c.setResponseType("arraybuffer"),c.setRequestHeader(this.requestHeader),c.setWithCredentials(this.withCredentials),c.load(e,function(l){try{r.parse(l,a,function(h){t(h),r.manager.itemEnd(e)},o)}catch(h){o(h)}},n,o)}setDRACOLoader(e){return this.dracoLoader=e,this}setDDSLoader(){throw new Error('THREE.GLTFLoader: "MSFT_texture_dds" no longer supported. Please update to "KHR_texture_basisu".')}setKTX2Loader(e){return this.ktx2Loader=e,this}setMeshoptDecoder(e){return this.meshoptDecoder=e,this}register(e){return this.pluginCallbacks.indexOf(e)===-1&&this.pluginCallbacks.push(e),this}unregister(e){return this.pluginCallbacks.indexOf(e)!==-1&&this.pluginCallbacks.splice(this.pluginCallbacks.indexOf(e),1),this}parse(e,t,n,s){let r,a={},o={},c=new TextDecoder;if(typeof e=="string")r=JSON.parse(e);else if(e instanceof ArrayBuffer)if(c.decode(new Uint8Array(e,0,4))===Uf){try{a[ot.KHR_BINARY_GLTF]=new Dh(e)}catch(u){s&&s(u);return}r=JSON.parse(a[ot.KHR_BINARY_GLTF].content)}else r=JSON.parse(c.decode(e));else r=e;if(r.asset===void 0||r.asset.version[0]<2){s&&s(new Error("THREE.GLTFLoader: Unsupported asset. glTF versions >=2.0 are supported."));return}let l=new Hh(r,{path:t||this.resourcePath||"",crossOrigin:this.crossOrigin,requestHeader:this.requestHeader,manager:this.manager,ktx2Loader:this.ktx2Loader,meshoptDecoder:this.meshoptDecoder});l.fileLoader.setRequestHeader(this.requestHeader);for(let h=0;h<this.pluginCallbacks.length;h++){let u=this.pluginCallbacks[h](l);u.name||console.error("THREE.GLTFLoader: Invalid plugin found: missing name"),o[u.name]=u,a[u.name]=!0}if(r.extensionsUsed)for(let h=0;h<r.extensionsUsed.length;++h){let u=r.extensionsUsed[h],d=r.extensionsRequired||[];switch(u){case ot.KHR_MATERIALS_UNLIT:a[u]=new _h;break;case ot.KHR_DRACO_MESH_COMPRESSION:a[u]=new Nh(r,this.dracoLoader);break;case ot.KHR_TEXTURE_TRANSFORM:a[u]=new Uh;break;case ot.KHR_MESH_QUANTIZATION:a[u]=new Oh;break;default:d.indexOf(u)>=0&&o[u]===void 0&&console.warn('THREE.GLTFLoader: Unknown extension "'+u+'".')}}l.setExtensions(a),l.setPlugins(o),l.parse(n,s)}parseAsync(e,t){let n=this;return new Promise(function(s,r){n.parse(e,t,s,r)})}};function yv(){let i={};return{get:function(e){return i[e]},add:function(e,t){i[e]=t},remove:function(e){delete i[e]},removeAll:function(){i={}}}}var ot={KHR_BINARY_GLTF:"KHR_binary_glTF",KHR_DRACO_MESH_COMPRESSION:"KHR_draco_mesh_compression",KHR_LIGHTS_PUNCTUAL:"KHR_lights_punctual",KHR_MATERIALS_CLEARCOAT:"KHR_materials_clearcoat",KHR_MATERIALS_IOR:"KHR_materials_ior",KHR_MATERIALS_SHEEN:"KHR_materials_sheen",KHR_MATERIALS_SPECULAR:"KHR_materials_specular",KHR_MATERIALS_TRANSMISSION:"KHR_materials_transmission",KHR_MATERIALS_IRIDESCENCE:"KHR_materials_iridescence",KHR_MATERIALS_ANISOTROPY:"KHR_materials_anisotropy",KHR_MATERIALS_UNLIT:"KHR_materials_unlit",KHR_MATERIALS_VOLUME:"KHR_materials_volume",KHR_TEXTURE_BASISU:"KHR_texture_basisu",KHR_TEXTURE_TRANSFORM:"KHR_texture_transform",KHR_MESH_QUANTIZATION:"KHR_mesh_quantization",KHR_MATERIALS_EMISSIVE_STRENGTH:"KHR_materials_emissive_strength",EXT_MATERIALS_BUMP:"EXT_materials_bump",EXT_TEXTURE_WEBP:"EXT_texture_webp",EXT_TEXTURE_AVIF:"EXT_texture_avif",EXT_MESHOPT_COMPRESSION:"EXT_meshopt_compression",EXT_MESH_GPU_INSTANCING:"EXT_mesh_gpu_instancing"},xh=class{constructor(e){this.parser=e,this.name=ot.KHR_LIGHTS_PUNCTUAL,this.cache={refs:{},uses:{}}}_markDefs(){let e=this.parser,t=this.parser.json.nodes||[];for(let n=0,s=t.length;n<s;n++){let r=t[n];r.extensions&&r.extensions[this.name]&&r.extensions[this.name].light!==void 0&&e._addNodeRef(this.cache,r.extensions[this.name].light)}}_loadLight(e){let t=this.parser,n="light:"+e,s=t.cache.get(n);if(s)return s;let r=t.json,c=((r.extensions&&r.extensions[this.name]||{}).lights||[])[e],l,h=new pe(16777215);c.color!==void 0&&h.setRGB(c.color[0],c.color[1],c.color[2],qt);let u=c.range!==void 0?c.range:0;switch(c.type){case"directional":l=new yr(h),l.target.position.set(0,0,-1),l.add(l.target);break;case"point":l=new Oi(h),l.distance=u;break;case"spot":l=new Ho(h),l.distance=u,c.spot=c.spot||{},c.spot.innerConeAngle=c.spot.innerConeAngle!==void 0?c.spot.innerConeAngle:0,c.spot.outerConeAngle=c.spot.outerConeAngle!==void 0?c.spot.outerConeAngle:Math.PI/4,l.angle=c.spot.outerConeAngle,l.penumbra=1-c.spot.innerConeAngle/c.spot.outerConeAngle,l.target.position.set(0,0,-1),l.add(l.target);break;default:throw new Error("THREE.GLTFLoader: Unexpected light type: "+c.type)}return l.position.set(0,0,0),l.decay=2,Vi(l,c),c.intensity!==void 0&&(l.intensity=c.intensity),l.name=t.createUniqueName(c.name||"light_"+e),s=Promise.resolve(l),t.cache.add(n,s),s}getDependency(e,t){if(e==="light")return this._loadLight(t)}createNodeAttachment(e){let t=this,n=this.parser,r=n.json.nodes[e],o=(r.extensions&&r.extensions[this.name]||{}).light;return o===void 0?null:this._loadLight(o).then(function(c){return n._getNodeRef(t.cache,o,c)})}},_h=class{constructor(){this.name=ot.KHR_MATERIALS_UNLIT}getMaterialType(){return At}extendParams(e,t,n){let s=[];e.color=new pe(1,1,1),e.opacity=1;let r=t.pbrMetallicRoughness;if(r){if(Array.isArray(r.baseColorFactor)){let a=r.baseColorFactor;e.color.setRGB(a[0],a[1],a[2],qt),e.opacity=a[3]}r.baseColorTexture!==void 0&&s.push(n.assignTexture(e,"map",r.baseColorTexture,Tt))}return Promise.all(s)}},yh=class{constructor(e){this.parser=e,this.name=ot.KHR_MATERIALS_EMISSIVE_STRENGTH}extendMaterialParams(e,t){let s=this.parser.json.materials[e];if(!s.extensions||!s.extensions[this.name])return Promise.resolve();let r=s.extensions[this.name].emissiveStrength;return r!==void 0&&(t.emissiveIntensity=r),Promise.resolve()}},vh=class{constructor(e){this.parser=e,this.name=ot.KHR_MATERIALS_CLEARCOAT}getMaterialType(e){let n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:Pn}extendMaterialParams(e,t){let n=this.parser,s=n.json.materials[e];if(!s.extensions||!s.extensions[this.name])return Promise.resolve();let r=[],a=s.extensions[this.name];if(a.clearcoatFactor!==void 0&&(t.clearcoat=a.clearcoatFactor),a.clearcoatTexture!==void 0&&r.push(n.assignTexture(t,"clearcoatMap",a.clearcoatTexture)),a.clearcoatRoughnessFactor!==void 0&&(t.clearcoatRoughness=a.clearcoatRoughnessFactor),a.clearcoatRoughnessTexture!==void 0&&r.push(n.assignTexture(t,"clearcoatRoughnessMap",a.clearcoatRoughnessTexture)),a.clearcoatNormalTexture!==void 0&&(r.push(n.assignTexture(t,"clearcoatNormalMap",a.clearcoatNormalTexture)),a.clearcoatNormalTexture.scale!==void 0)){let o=a.clearcoatNormalTexture.scale;t.clearcoatNormalScale=new ze(o,o)}return Promise.all(r)}},Mh=class{constructor(e){this.parser=e,this.name=ot.KHR_MATERIALS_IRIDESCENCE}getMaterialType(e){let n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:Pn}extendMaterialParams(e,t){let n=this.parser,s=n.json.materials[e];if(!s.extensions||!s.extensions[this.name])return Promise.resolve();let r=[],a=s.extensions[this.name];return a.iridescenceFactor!==void 0&&(t.iridescence=a.iridescenceFactor),a.iridescenceTexture!==void 0&&r.push(n.assignTexture(t,"iridescenceMap",a.iridescenceTexture)),a.iridescenceIor!==void 0&&(t.iridescenceIOR=a.iridescenceIor),t.iridescenceThicknessRange===void 0&&(t.iridescenceThicknessRange=[100,400]),a.iridescenceThicknessMinimum!==void 0&&(t.iridescenceThicknessRange[0]=a.iridescenceThicknessMinimum),a.iridescenceThicknessMaximum!==void 0&&(t.iridescenceThicknessRange[1]=a.iridescenceThicknessMaximum),a.iridescenceThicknessTexture!==void 0&&r.push(n.assignTexture(t,"iridescenceThicknessMap",a.iridescenceThicknessTexture)),Promise.all(r)}},bh=class{constructor(e){this.parser=e,this.name=ot.KHR_MATERIALS_SHEEN}getMaterialType(e){let n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:Pn}extendMaterialParams(e,t){let n=this.parser,s=n.json.materials[e];if(!s.extensions||!s.extensions[this.name])return Promise.resolve();let r=[];t.sheenColor=new pe(0,0,0),t.sheenRoughness=0,t.sheen=1;let a=s.extensions[this.name];if(a.sheenColorFactor!==void 0){let o=a.sheenColorFactor;t.sheenColor.setRGB(o[0],o[1],o[2],qt)}return a.sheenRoughnessFactor!==void 0&&(t.sheenRoughness=a.sheenRoughnessFactor),a.sheenColorTexture!==void 0&&r.push(n.assignTexture(t,"sheenColorMap",a.sheenColorTexture,Tt)),a.sheenRoughnessTexture!==void 0&&r.push(n.assignTexture(t,"sheenRoughnessMap",a.sheenRoughnessTexture)),Promise.all(r)}},wh=class{constructor(e){this.parser=e,this.name=ot.KHR_MATERIALS_TRANSMISSION}getMaterialType(e){let n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:Pn}extendMaterialParams(e,t){let n=this.parser,s=n.json.materials[e];if(!s.extensions||!s.extensions[this.name])return Promise.resolve();let r=[],a=s.extensions[this.name];return a.transmissionFactor!==void 0&&(t.transmission=a.transmissionFactor),a.transmissionTexture!==void 0&&r.push(n.assignTexture(t,"transmissionMap",a.transmissionTexture)),Promise.all(r)}},Sh=class{constructor(e){this.parser=e,this.name=ot.KHR_MATERIALS_VOLUME}getMaterialType(e){let n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:Pn}extendMaterialParams(e,t){let n=this.parser,s=n.json.materials[e];if(!s.extensions||!s.extensions[this.name])return Promise.resolve();let r=[],a=s.extensions[this.name];t.thickness=a.thicknessFactor!==void 0?a.thicknessFactor:0,a.thicknessTexture!==void 0&&r.push(n.assignTexture(t,"thicknessMap",a.thicknessTexture)),t.attenuationDistance=a.attenuationDistance||1/0;let o=a.attenuationColor||[1,1,1];return t.attenuationColor=new pe().setRGB(o[0],o[1],o[2],qt),Promise.all(r)}},Eh=class{constructor(e){this.parser=e,this.name=ot.KHR_MATERIALS_IOR}getMaterialType(e){let n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:Pn}extendMaterialParams(e,t){let s=this.parser.json.materials[e];if(!s.extensions||!s.extensions[this.name])return Promise.resolve();let r=s.extensions[this.name];return t.ior=r.ior!==void 0?r.ior:1.5,Promise.resolve()}},Th=class{constructor(e){this.parser=e,this.name=ot.KHR_MATERIALS_SPECULAR}getMaterialType(e){let n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:Pn}extendMaterialParams(e,t){let n=this.parser,s=n.json.materials[e];if(!s.extensions||!s.extensions[this.name])return Promise.resolve();let r=[],a=s.extensions[this.name];t.specularIntensity=a.specularFactor!==void 0?a.specularFactor:1,a.specularTexture!==void 0&&r.push(n.assignTexture(t,"specularIntensityMap",a.specularTexture));let o=a.specularColorFactor||[1,1,1];return t.specularColor=new pe().setRGB(o[0],o[1],o[2],qt),a.specularColorTexture!==void 0&&r.push(n.assignTexture(t,"specularColorMap",a.specularColorTexture,Tt)),Promise.all(r)}},Ah=class{constructor(e){this.parser=e,this.name=ot.EXT_MATERIALS_BUMP}getMaterialType(e){let n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:Pn}extendMaterialParams(e,t){let n=this.parser,s=n.json.materials[e];if(!s.extensions||!s.extensions[this.name])return Promise.resolve();let r=[],a=s.extensions[this.name];return t.bumpScale=a.bumpFactor!==void 0?a.bumpFactor:1,a.bumpTexture!==void 0&&r.push(n.assignTexture(t,"bumpMap",a.bumpTexture)),Promise.all(r)}},Rh=class{constructor(e){this.parser=e,this.name=ot.KHR_MATERIALS_ANISOTROPY}getMaterialType(e){let n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:Pn}extendMaterialParams(e,t){let n=this.parser,s=n.json.materials[e];if(!s.extensions||!s.extensions[this.name])return Promise.resolve();let r=[],a=s.extensions[this.name];return a.anisotropyStrength!==void 0&&(t.anisotropy=a.anisotropyStrength),a.anisotropyRotation!==void 0&&(t.anisotropyRotation=a.anisotropyRotation),a.anisotropyTexture!==void 0&&r.push(n.assignTexture(t,"anisotropyMap",a.anisotropyTexture)),Promise.all(r)}},Ch=class{constructor(e){this.parser=e,this.name=ot.KHR_TEXTURE_BASISU}loadTexture(e){let t=this.parser,n=t.json,s=n.textures[e];if(!s.extensions||!s.extensions[this.name])return null;let r=s.extensions[this.name],a=t.options.ktx2Loader;if(!a){if(n.extensionsRequired&&n.extensionsRequired.indexOf(this.name)>=0)throw new Error("THREE.GLTFLoader: setKTX2Loader must be called before loading KTX2 textures");return null}return t.loadTextureImage(e,r.source,a)}},Ph=class{constructor(e){this.parser=e,this.name=ot.EXT_TEXTURE_WEBP,this.isSupported=null}loadTexture(e){let t=this.name,n=this.parser,s=n.json,r=s.textures[e];if(!r.extensions||!r.extensions[t])return null;let a=r.extensions[t],o=s.images[a.source],c=n.textureLoader;if(o.uri){let l=n.options.manager.getHandler(o.uri);l!==null&&(c=l)}return this.detectSupport().then(function(l){if(l)return n.loadTextureImage(e,a.source,c);if(s.extensionsRequired&&s.extensionsRequired.indexOf(t)>=0)throw new Error("THREE.GLTFLoader: WebP required by asset but unsupported.");return n.loadTexture(e)})}detectSupport(){return this.isSupported||(this.isSupported=new Promise(function(e){let t=new Image;t.src="data:image/webp;base64,UklGRiIAAABXRUJQVlA4IBYAAAAwAQCdASoBAAEADsD+JaQAA3AAAAAA",t.onload=t.onerror=function(){e(t.height===1)}})),this.isSupported}},Lh=class{constructor(e){this.parser=e,this.name=ot.EXT_TEXTURE_AVIF,this.isSupported=null}loadTexture(e){let t=this.name,n=this.parser,s=n.json,r=s.textures[e];if(!r.extensions||!r.extensions[t])return null;let a=r.extensions[t],o=s.images[a.source],c=n.textureLoader;if(o.uri){let l=n.options.manager.getHandler(o.uri);l!==null&&(c=l)}return this.detectSupport().then(function(l){if(l)return n.loadTextureImage(e,a.source,c);if(s.extensionsRequired&&s.extensionsRequired.indexOf(t)>=0)throw new Error("THREE.GLTFLoader: AVIF required by asset but unsupported.");return n.loadTexture(e)})}detectSupport(){return this.isSupported||(this.isSupported=new Promise(function(e){let t=new Image;t.src="data:image/avif;base64,AAAAIGZ0eXBhdmlmAAAAAGF2aWZtaWYxbWlhZk1BMUIAAADybWV0YQAAAAAAAAAoaGRscgAAAAAAAAAAcGljdAAAAAAAAAAAAAAAAGxpYmF2aWYAAAAADnBpdG0AAAAAAAEAAAAeaWxvYwAAAABEAAABAAEAAAABAAABGgAAABcAAAAoaWluZgAAAAAAAQAAABppbmZlAgAAAAABAABhdjAxQ29sb3IAAAAAamlwcnAAAABLaXBjbwAAABRpc3BlAAAAAAAAAAEAAAABAAAAEHBpeGkAAAAAAwgICAAAAAxhdjFDgQAMAAAAABNjb2xybmNseAACAAIABoAAAAAXaXBtYQAAAAAAAAABAAEEAQKDBAAAAB9tZGF0EgAKCBgABogQEDQgMgkQAAAAB8dSLfI=",t.onload=t.onerror=function(){e(t.height===1)}})),this.isSupported}},Ih=class{constructor(e){this.name=ot.EXT_MESHOPT_COMPRESSION,this.parser=e}loadBufferView(e){let t=this.parser.json,n=t.bufferViews[e];if(n.extensions&&n.extensions[this.name]){let s=n.extensions[this.name],r=this.parser.getDependency("buffer",s.buffer),a=this.parser.options.meshoptDecoder;if(!a||!a.supported){if(t.extensionsRequired&&t.extensionsRequired.indexOf(this.name)>=0)throw new Error("THREE.GLTFLoader: setMeshoptDecoder must be called before loading compressed files");return null}return r.then(function(o){let c=s.byteOffset||0,l=s.byteLength||0,h=s.count,u=s.byteStride,d=new Uint8Array(o,c,l);return a.decodeGltfBufferAsync?a.decodeGltfBufferAsync(h,u,d,s.mode,s.filter).then(function(f){return f.buffer}):a.ready.then(function(){let f=new ArrayBuffer(h*u);return a.decodeGltfBuffer(new Uint8Array(f),h,u,d,s.mode,s.filter),f})})}else return null}},zh=class{constructor(e){this.name=ot.EXT_MESH_GPU_INSTANCING,this.parser=e}createNodeMesh(e){let t=this.parser.json,n=t.nodes[e];if(!n.extensions||!n.extensions[this.name]||n.mesh===void 0)return null;let s=t.meshes[n.mesh];for(let l of s.primitives)if(l.mode!==In.TRIANGLES&&l.mode!==In.TRIANGLE_STRIP&&l.mode!==In.TRIANGLE_FAN&&l.mode!==void 0)return null;let a=n.extensions[this.name].attributes,o=[],c={};for(let l in a)o.push(this.parser.getDependency("accessor",a[l]).then(h=>(c[l]=h,c[l])));return o.length<1?null:(o.push(this.parser.createNodeMesh(e)),Promise.all(o).then(l=>{let h=l.pop(),u=h.isGroup?h.children:[h],d=l[0].count,f=[];for(let p of u){let x=new Xe,g=new L,m=new Dt,y=new L(1,1,1),_=new pr(p.geometry,p.material,d);for(let w=0;w<d;w++)c.TRANSLATION&&g.fromBufferAttribute(c.TRANSLATION,w),c.ROTATION&&m.fromBufferAttribute(c.ROTATION,w),c.SCALE&&y.fromBufferAttribute(c.SCALE,w),_.setMatrixAt(w,x.compose(g,m,y));for(let w in c)if(w==="_COLOR_0"){let P=c[w];_.instanceColor=new ls(P.array,P.itemSize,P.normalized)}else w!=="TRANSLATION"&&w!=="ROTATION"&&w!=="SCALE"&&p.geometry.setAttribute(w,c[w]);St.prototype.copy.call(_,p),this.parser.assignFinalMaterial(_),f.push(_)}return h.isGroup?(h.clear(),h.add(...f),h):f[0]}))}},Uf="glTF",pa=12,If={JSON:1313821514,BIN:5130562},Dh=class{constructor(e){this.name=ot.KHR_BINARY_GLTF,this.content=null,this.body=null;let t=new DataView(e,0,pa),n=new TextDecoder;if(this.header={magic:n.decode(new Uint8Array(e.slice(0,4))),version:t.getUint32(4,!0),length:t.getUint32(8,!0)},this.header.magic!==Uf)throw new Error("THREE.GLTFLoader: Unsupported glTF-Binary header.");if(this.header.version<2)throw new Error("THREE.GLTFLoader: Legacy binary file detected.");let s=this.header.length-pa,r=new DataView(e,pa),a=0;for(;a<s;){let o=r.getUint32(a,!0);a+=4;let c=r.getUint32(a,!0);if(a+=4,c===If.JSON){let l=new Uint8Array(e,pa+a,o);this.content=n.decode(l)}else if(c===If.BIN){let l=pa+a;this.body=e.slice(l,l+o)}a+=o}if(this.content===null)throw new Error("THREE.GLTFLoader: JSON content not found.")}},Nh=class{constructor(e,t){if(!t)throw new Error("THREE.GLTFLoader: No DRACOLoader instance provided.");this.name=ot.KHR_DRACO_MESH_COMPRESSION,this.json=e,this.dracoLoader=t,this.dracoLoader.preload()}decodePrimitive(e,t){let n=this.json,s=this.dracoLoader,r=e.extensions[this.name].bufferView,a=e.extensions[this.name].attributes,o={},c={},l={};for(let h in a){let u=Bh[h]||h.toLowerCase();o[u]=a[h]}for(let h in e.attributes){let u=Bh[h]||h.toLowerCase();if(a[h]!==void 0){let d=n.accessors[e.attributes[h]],f=Sr[d.componentType];l[u]=f.name,c[u]=d.normalized===!0}}return t.getDependency("bufferView",r).then(function(h){return new Promise(function(u,d){s.decodeDracoFile(h,function(f){for(let p in f.attributes){let x=f.attributes[p],g=c[p];g!==void 0&&(x.normalized=g)}u(f)},o,l,qt,d)})})}},Uh=class{constructor(){this.name=ot.KHR_TEXTURE_TRANSFORM}extendTexture(e,t){return(t.texCoord===void 0||t.texCoord===e.channel)&&t.offset===void 0&&t.rotation===void 0&&t.scale===void 0||(e=e.clone(),t.texCoord!==void 0&&(e.channel=t.texCoord),t.offset!==void 0&&e.offset.fromArray(t.offset),t.rotation!==void 0&&(e.rotation=t.rotation),t.scale!==void 0&&e.repeat.fromArray(t.scale),e.needsUpdate=!0),e}},Oh=class{constructor(){this.name=ot.KHR_MESH_QUANTIZATION}},sc=class extends Di{constructor(e,t,n,s){super(e,t,n,s)}copySampleValue_(e){let t=this.resultBuffer,n=this.sampleValues,s=this.valueSize,r=e*s*3+s;for(let a=0;a!==s;a++)t[a]=n[r+a];return t}interpolate_(e,t,n,s){let r=this.resultBuffer,a=this.sampleValues,o=this.valueSize,c=o*2,l=o*3,h=s-t,u=(n-t)/h,d=u*u,f=d*u,p=e*l,x=p-l,g=-2*f+3*d,m=f-d,y=1-g,_=m-d+u;for(let w=0;w!==o;w++){let P=a[x+w+o],A=a[x+w+c]*h,R=a[p+w+o],F=a[p+w]*h;r[w]=y*P+_*A+g*R+m*F}return r}},vv=new Dt,Fh=class extends sc{interpolate_(e,t,n,s){let r=super.interpolate_(e,t,n,s);return vv.fromArray(r).normalize().toArray(r),r}},In={FLOAT:5126,FLOAT_MAT3:35675,FLOAT_MAT4:35676,FLOAT_VEC2:35664,FLOAT_VEC3:35665,FLOAT_VEC4:35666,LINEAR:9729,REPEAT:10497,SAMPLER_2D:35678,POINTS:0,LINES:1,LINE_LOOP:2,LINE_STRIP:3,TRIANGLES:4,TRIANGLE_STRIP:5,TRIANGLE_FAN:6,UNSIGNED_BYTE:5121,UNSIGNED_SHORT:5123},Sr={5120:Int8Array,5121:Uint8Array,5122:Int16Array,5123:Uint16Array,5125:Uint32Array,5126:Float32Array},zf={9728:Wt,9729:gn,9984:ho,9985:Zl,9986:Wr,9987:Ii},Df={33071:bn,33648:Kr,10497:as},ph={SCALAR:1,VEC2:2,VEC3:3,VEC4:4,MAT2:4,MAT3:9,MAT4:16},Bh={POSITION:"position",NORMAL:"normal",TANGENT:"tangent",TEXCOORD_0:"uv",TEXCOORD_1:"uv1",TEXCOORD_2:"uv2",TEXCOORD_3:"uv3",COLOR_0:"color",WEIGHTS_0:"skinWeight",JOINTS_0:"skinIndex"},Gi={scale:"scale",translation:"position",rotation:"quaternion",weights:"morphTargetInfluences"},Mv={CUBICSPLINE:void 0,LINEAR:os,STEP:ar},mh={OPAQUE:"OPAQUE",MASK:"MASK",BLEND:"BLEND"};function bv(i){return i.DefaultMaterial===void 0&&(i.DefaultMaterial=new fi({color:16777215,emissive:0,metalness:1,roughness:1,transparent:!1,depthTest:!0,side:qn})),i.DefaultMaterial}function ms(i,e,t){for(let n in t.extensions)i[n]===void 0&&(e.userData.gltfExtensions=e.userData.gltfExtensions||{},e.userData.gltfExtensions[n]=t.extensions[n])}function Vi(i,e){e.extras!==void 0&&(typeof e.extras=="object"?Object.assign(i.userData,e.extras):console.warn("THREE.GLTFLoader: Ignoring primitive type .extras, "+e.extras))}function wv(i,e,t){let n=!1,s=!1,r=!1;for(let l=0,h=e.length;l<h;l++){let u=e[l];if(u.POSITION!==void 0&&(n=!0),u.NORMAL!==void 0&&(s=!0),u.COLOR_0!==void 0&&(r=!0),n&&s&&r)break}if(!n&&!s&&!r)return Promise.resolve(i);let a=[],o=[],c=[];for(let l=0,h=e.length;l<h;l++){let u=e[l];if(n){let d=u.POSITION!==void 0?t.getDependency("accessor",u.POSITION):i.attributes.position;a.push(d)}if(s){let d=u.NORMAL!==void 0?t.getDependency("accessor",u.NORMAL):i.attributes.normal;o.push(d)}if(r){let d=u.COLOR_0!==void 0?t.getDependency("accessor",u.COLOR_0):i.attributes.color;c.push(d)}}return Promise.all([Promise.all(a),Promise.all(o),Promise.all(c)]).then(function(l){let h=l[0],u=l[1],d=l[2];return n&&(i.morphAttributes.position=h),s&&(i.morphAttributes.normal=u),r&&(i.morphAttributes.color=d),i.morphTargetsRelative=!0,i})}function Sv(i,e){if(i.updateMorphTargets(),e.weights!==void 0)for(let t=0,n=e.weights.length;t<n;t++)i.morphTargetInfluences[t]=e.weights[t];if(e.extras&&Array.isArray(e.extras.targetNames)){let t=e.extras.targetNames;if(i.morphTargetInfluences.length===t.length){i.morphTargetDictionary={};for(let n=0,s=t.length;n<s;n++)i.morphTargetDictionary[t[n]]=n}else console.warn("THREE.GLTFLoader: Invalid extras.targetNames length. Ignoring names.")}}function Ev(i){let e,t=i.extensions&&i.extensions[ot.KHR_DRACO_MESH_COMPRESSION];if(t?e="draco:"+t.bufferView+":"+t.indices+":"+gh(t.attributes):e=i.indices+":"+gh(i.attributes)+":"+i.mode,i.targets!==void 0)for(let n=0,s=i.targets.length;n<s;n++)e+=":"+gh(i.targets[n]);return e}function gh(i){let e="",t=Object.keys(i).sort();for(let n=0,s=t.length;n<s;n++)e+=t[n]+":"+i[t[n]]+";";return e}function kh(i){switch(i){case Int8Array:return 1/127;case Uint8Array:return 1/255;case Int16Array:return 1/32767;case Uint16Array:return 1/65535;default:throw new Error("THREE.GLTFLoader: Unsupported normalized accessor component type.")}}function Tv(i){return i.search(/\.jpe?g($|\?)/i)>0||i.search(/^data\:image\/jpeg/)===0?"image/jpeg":i.search(/\.webp($|\?)/i)>0||i.search(/^data\:image\/webp/)===0?"image/webp":"image/png"}var Av=new Xe,Hh=class{constructor(e={},t={}){this.json=e,this.extensions={},this.plugins={},this.options=t,this.cache=new yv,this.associations=new Map,this.primitiveCache={},this.nodeCache={},this.meshCache={refs:{},uses:{}},this.cameraCache={refs:{},uses:{}},this.lightCache={refs:{},uses:{}},this.sourceCache={},this.textureCache={},this.nodeNamesUsed={};let n=!1,s=!1,r=-1;typeof navigator!="undefined"&&(n=/^((?!chrome|android).)*safari/i.test(navigator.userAgent)===!0,s=navigator.userAgent.indexOf("Firefox")>-1,r=s?navigator.userAgent.match(/Firefox\/([0-9]+)\./)[1]:-1),typeof createImageBitmap=="undefined"||n||s&&r<98?this.textureLoader=new Bo(this.options.manager):this.textureLoader=new Go(this.options.manager),this.textureLoader.setCrossOrigin(this.options.crossOrigin),this.textureLoader.setRequestHeader(this.options.requestHeader),this.fileLoader=new ca(this.options.manager),this.fileLoader.setResponseType("arraybuffer"),this.options.crossOrigin==="use-credentials"&&this.fileLoader.setWithCredentials(!0)}setExtensions(e){this.extensions=e}setPlugins(e){this.plugins=e}parse(e,t){let n=this,s=this.json,r=this.extensions;this.cache.removeAll(),this.nodeCache={},this._invokeAll(function(a){return a._markDefs&&a._markDefs()}),Promise.all(this._invokeAll(function(a){return a.beforeRoot&&a.beforeRoot()})).then(function(){return Promise.all([n.getDependencies("scene"),n.getDependencies("animation"),n.getDependencies("camera")])}).then(function(a){let o={scene:a[0][s.scene||0],scenes:a[0],animations:a[1],cameras:a[2],asset:s.asset,parser:n,userData:{}};return ms(r,o,s),Vi(o,s),Promise.all(n._invokeAll(function(c){return c.afterRoot&&c.afterRoot(o)})).then(function(){e(o)})}).catch(t)}_markDefs(){let e=this.json.nodes||[],t=this.json.skins||[],n=this.json.meshes||[];for(let s=0,r=t.length;s<r;s++){let a=t[s].joints;for(let o=0,c=a.length;o<c;o++)e[a[o]].isBone=!0}for(let s=0,r=e.length;s<r;s++){let a=e[s];a.mesh!==void 0&&(this._addNodeRef(this.meshCache,a.mesh),a.skin!==void 0&&(n[a.mesh].isSkinnedMesh=!0)),a.camera!==void 0&&this._addNodeRef(this.cameraCache,a.camera)}}_addNodeRef(e,t){t!==void 0&&(e.refs[t]===void 0&&(e.refs[t]=e.uses[t]=0),e.refs[t]++)}_getNodeRef(e,t,n){if(e.refs[t]<=1)return n;let s=n.clone(),r=(a,o)=>{let c=this.associations.get(a);c!=null&&this.associations.set(o,c);for(let[l,h]of a.children.entries())r(h,o.children[l])};return r(n,s),s.name+="_instance_"+e.uses[t]++,s}_invokeOne(e){let t=Object.values(this.plugins);t.push(this);for(let n=0;n<t.length;n++){let s=e(t[n]);if(s)return s}return null}_invokeAll(e){let t=Object.values(this.plugins);t.unshift(this);let n=[];for(let s=0;s<t.length;s++){let r=e(t[s]);r&&n.push(r)}return n}getDependency(e,t){let n=e+":"+t,s=this.cache.get(n);if(!s){switch(e){case"scene":s=this.loadScene(t);break;case"node":s=this._invokeOne(function(r){return r.loadNode&&r.loadNode(t)});break;case"mesh":s=this._invokeOne(function(r){return r.loadMesh&&r.loadMesh(t)});break;case"accessor":s=this.loadAccessor(t);break;case"bufferView":s=this._invokeOne(function(r){return r.loadBufferView&&r.loadBufferView(t)});break;case"buffer":s=this.loadBuffer(t);break;case"material":s=this._invokeOne(function(r){return r.loadMaterial&&r.loadMaterial(t)});break;case"texture":s=this._invokeOne(function(r){return r.loadTexture&&r.loadTexture(t)});break;case"skin":s=this.loadSkin(t);break;case"animation":s=this._invokeOne(function(r){return r.loadAnimation&&r.loadAnimation(t)});break;case"camera":s=this.loadCamera(t);break;default:if(s=this._invokeOne(function(r){return r!=this&&r.getDependency&&r.getDependency(e,t)}),!s)throw new Error("Unknown type: "+e);break}this.cache.add(n,s)}return s}getDependencies(e){let t=this.cache.get(e);if(!t){let n=this,s=this.json[e+(e==="mesh"?"es":"s")]||[];t=Promise.all(s.map(function(r,a){return n.getDependency(e,a)})),this.cache.add(e,t)}return t}loadBuffer(e){let t=this.json.buffers[e],n=this.fileLoader;if(t.type&&t.type!=="arraybuffer")throw new Error("THREE.GLTFLoader: "+t.type+" buffer type is not supported.");if(t.uri===void 0&&e===0)return Promise.resolve(this.extensions[ot.KHR_BINARY_GLTF].body);let s=this.options;return new Promise(function(r,a){n.load(Fi.resolveURL(t.uri,s.path),r,void 0,function(){a(new Error('THREE.GLTFLoader: Failed to load buffer "'+t.uri+'".'))})})}loadBufferView(e){let t=this.json.bufferViews[e];return this.getDependency("buffer",t.buffer).then(function(n){let s=t.byteLength||0,r=t.byteOffset||0;return n.slice(r,r+s)})}loadAccessor(e){let t=this,n=this.json,s=this.json.accessors[e];if(s.bufferView===void 0&&s.sparse===void 0){let a=ph[s.type],o=Sr[s.componentType],c=s.normalized===!0,l=new o(s.count*a);return Promise.resolve(new Pt(l,a,c))}let r=[];return s.bufferView!==void 0?r.push(this.getDependency("bufferView",s.bufferView)):r.push(null),s.sparse!==void 0&&(r.push(this.getDependency("bufferView",s.sparse.indices.bufferView)),r.push(this.getDependency("bufferView",s.sparse.values.bufferView))),Promise.all(r).then(function(a){let o=a[0],c=ph[s.type],l=Sr[s.componentType],h=l.BYTES_PER_ELEMENT,u=h*c,d=s.byteOffset||0,f=s.bufferView!==void 0?n.bufferViews[s.bufferView].byteStride:void 0,p=s.normalized===!0,x,g;if(f&&f!==u){let m=Math.floor(d/f),y="InterleavedBuffer:"+s.bufferView+":"+s.componentType+":"+m+":"+s.count,_=t.cache.get(y);_||(x=new l(o,m*f,s.count*f/h),_=new fr(x,f/h),t.cache.add(y,_)),g=new cs(_,c,d%f/h,p)}else o===null?x=new l(s.count*c):x=new l(o,d,s.count*c),g=new Pt(x,c,p);if(s.sparse!==void 0){let m=ph.SCALAR,y=Sr[s.sparse.indices.componentType],_=s.sparse.indices.byteOffset||0,w=s.sparse.values.byteOffset||0,P=new y(a[1],_,s.sparse.count*m),A=new l(a[2],w,s.sparse.count*c);o!==null&&(g=new Pt(g.array.slice(),g.itemSize,g.normalized));for(let R=0,F=P.length;R<F;R++){let M=P[R];if(g.setX(M,A[R*c]),c>=2&&g.setY(M,A[R*c+1]),c>=3&&g.setZ(M,A[R*c+2]),c>=4&&g.setW(M,A[R*c+3]),c>=5)throw new Error("THREE.GLTFLoader: Unsupported itemSize in sparse BufferAttribute.")}}return g})}loadTexture(e){let t=this.json,n=this.options,r=t.textures[e].source,a=t.images[r],o=this.textureLoader;if(a.uri){let c=n.manager.getHandler(a.uri);c!==null&&(o=c)}return this.loadTextureImage(e,r,o)}loadTextureImage(e,t,n){let s=this,r=this.json,a=r.textures[e],o=r.images[t],c=(o.uri||o.bufferView)+":"+a.sampler;if(this.textureCache[c])return this.textureCache[c];let l=this.loadImageSource(t,n).then(function(h){h.flipY=!1,h.name=a.name||o.name||"",h.name===""&&typeof o.uri=="string"&&o.uri.startsWith("data:image/")===!1&&(h.name=o.uri);let d=(r.samplers||{})[a.sampler]||{};return h.magFilter=zf[d.magFilter]||gn,h.minFilter=zf[d.minFilter]||Ii,h.wrapS=Df[d.wrapS]||as,h.wrapT=Df[d.wrapT]||as,s.associations.set(h,{textures:e}),h}).catch(function(){return null});return this.textureCache[c]=l,l}loadImageSource(e,t){let n=this,s=this.json,r=this.options;if(this.sourceCache[e]!==void 0)return this.sourceCache[e].then(u=>u.clone());let a=s.images[e],o=self.URL||self.webkitURL,c=a.uri||"",l=!1;if(a.bufferView!==void 0)c=n.getDependency("bufferView",a.bufferView).then(function(u){l=!0;let d=new Blob([u],{type:a.mimeType});return c=o.createObjectURL(d),c});else if(a.uri===void 0)throw new Error("THREE.GLTFLoader: Image "+e+" is missing URI and bufferView");let h=Promise.resolve(c).then(function(u){return new Promise(function(d,f){let p=d;t.isImageBitmapLoader===!0&&(p=function(x){let g=new en(x);g.needsUpdate=!0,d(g)}),t.load(Fi.resolveURL(u,r.path),p,void 0,f)})}).then(function(u){return l===!0&&o.revokeObjectURL(c),u.userData.mimeType=a.mimeType||Tv(a.uri),u}).catch(function(u){throw console.error("THREE.GLTFLoader: Couldn't load texture",c),u});return this.sourceCache[e]=h,h}assignTexture(e,t,n,s){let r=this;return this.getDependency("texture",n.index).then(function(a){if(!a)return null;if(n.texCoord!==void 0&&n.texCoord>0&&(a=a.clone(),a.channel=n.texCoord),r.extensions[ot.KHR_TEXTURE_TRANSFORM]){let o=n.extensions!==void 0?n.extensions[ot.KHR_TEXTURE_TRANSFORM]:void 0;if(o){let c=r.associations.get(a);a=r.extensions[ot.KHR_TEXTURE_TRANSFORM].extendTexture(a,o),r.associations.set(a,c)}}return s!==void 0&&(a.colorSpace=s),e[t]=a,a})}assignFinalMaterial(e){let t=e.geometry,n=e.material,s=t.attributes.tangent===void 0,r=t.attributes.color!==void 0,a=t.attributes.normal===void 0;if(e.isPoints){let o="PointsMaterial:"+n.uuid,c=this.cache.get(o);c||(c=new hs,ln.prototype.copy.call(c,n),c.color.copy(n.color),c.map=n.map,c.sizeAttenuation=!1,this.cache.add(o,c)),n=c}else if(e.isLine){let o="LineBasicMaterial:"+n.uuid,c=this.cache.get(o);c||(c=new ia,ln.prototype.copy.call(c,n),c.color.copy(n.color),c.map=n.map,this.cache.add(o,c)),n=c}if(s||r||a){let o="ClonedMaterial:"+n.uuid+":";s&&(o+="derivative-tangents:"),r&&(o+="vertex-colors:"),a&&(o+="flat-shading:");let c=this.cache.get(o);c||(c=n.clone(),r&&(c.vertexColors=!0),a&&(c.flatShading=!0),s&&(c.normalScale&&(c.normalScale.y*=-1),c.clearcoatNormalScale&&(c.clearcoatNormalScale.y*=-1)),this.cache.add(o,c),this.associations.set(c,this.associations.get(n))),n=c}e.material=n}getMaterialType(){return fi}loadMaterial(e){let t=this,n=this.json,s=this.extensions,r=n.materials[e],a,o={},c=r.extensions||{},l=[];if(c[ot.KHR_MATERIALS_UNLIT]){let u=s[ot.KHR_MATERIALS_UNLIT];a=u.getMaterialType(),l.push(u.extendParams(o,r,t))}else{let u=r.pbrMetallicRoughness||{};if(o.color=new pe(1,1,1),o.opacity=1,Array.isArray(u.baseColorFactor)){let d=u.baseColorFactor;o.color.setRGB(d[0],d[1],d[2],qt),o.opacity=d[3]}u.baseColorTexture!==void 0&&l.push(t.assignTexture(o,"map",u.baseColorTexture,Tt)),o.metalness=u.metallicFactor!==void 0?u.metallicFactor:1,o.roughness=u.roughnessFactor!==void 0?u.roughnessFactor:1,u.metallicRoughnessTexture!==void 0&&(l.push(t.assignTexture(o,"metalnessMap",u.metallicRoughnessTexture)),l.push(t.assignTexture(o,"roughnessMap",u.metallicRoughnessTexture))),a=this._invokeOne(function(d){return d.getMaterialType&&d.getMaterialType(e)}),l.push(Promise.all(this._invokeAll(function(d){return d.extendMaterialParams&&d.extendMaterialParams(e,o)})))}r.doubleSided===!0&&(o.side=Jt);let h=r.alphaMode||mh.OPAQUE;if(h===mh.BLEND?(o.transparent=!0,o.depthWrite=!1):(o.transparent=!1,h===mh.MASK&&(o.alphaTest=r.alphaCutoff!==void 0?r.alphaCutoff:.5)),r.normalTexture!==void 0&&a!==At&&(l.push(t.assignTexture(o,"normalMap",r.normalTexture)),o.normalScale=new ze(1,1),r.normalTexture.scale!==void 0)){let u=r.normalTexture.scale;o.normalScale.set(u,u)}if(r.occlusionTexture!==void 0&&a!==At&&(l.push(t.assignTexture(o,"aoMap",r.occlusionTexture)),r.occlusionTexture.strength!==void 0&&(o.aoMapIntensity=r.occlusionTexture.strength)),r.emissiveFactor!==void 0&&a!==At){let u=r.emissiveFactor;o.emissive=new pe().setRGB(u[0],u[1],u[2],qt)}return r.emissiveTexture!==void 0&&a!==At&&l.push(t.assignTexture(o,"emissiveMap",r.emissiveTexture,Tt)),Promise.all(l).then(function(){let u=new a(o);return r.name&&(u.name=r.name),Vi(u,r),t.associations.set(u,{materials:e}),r.extensions&&ms(s,u,r),u})}createUniqueName(e){let t=xt.sanitizeNodeName(e||"");return t in this.nodeNamesUsed?t+"_"+ ++this.nodeNamesUsed[t]:(this.nodeNamesUsed[t]=0,t)}loadGeometries(e){let t=this,n=this.extensions,s=this.primitiveCache;function r(o){return n[ot.KHR_DRACO_MESH_COMPRESSION].decodePrimitive(o,t).then(function(c){return Nf(c,o,t)})}let a=[];for(let o=0,c=e.length;o<c;o++){let l=e[o],h=Ev(l),u=s[h];if(u)a.push(u.promise);else{let d;l.extensions&&l.extensions[ot.KHR_DRACO_MESH_COMPRESSION]?d=r(l):d=Nf(new Nt,l,t),s[h]={primitive:l,promise:d},a.push(d)}}return Promise.all(a)}loadMesh(e){let t=this,n=this.json,s=this.extensions,r=n.meshes[e],a=r.primitives,o=[];for(let c=0,l=a.length;c<l;c++){let h=a[c].material===void 0?bv(this.cache):this.getDependency("material",a[c].material);o.push(h)}return o.push(t.loadGeometries(a)),Promise.all(o).then(function(c){let l=c.slice(0,c.length-1),h=c[c.length-1],u=[];for(let f=0,p=h.length;f<p;f++){let x=h[f],g=a[f],m,y=l[f];if(g.mode===In.TRIANGLES||g.mode===In.TRIANGLE_STRIP||g.mode===In.TRIANGLE_FAN||g.mode===void 0)m=r.isSkinnedMesh===!0?new Po(x,y):new de(x,y),m.isSkinnedMesh===!0&&m.normalizeSkinWeights(),g.mode===In.TRIANGLE_STRIP?m.geometry=sh(m.geometry,Yo):g.mode===In.TRIANGLE_FAN&&(m.geometry=sh(m.geometry,ua));else if(g.mode===In.LINES)m=new Io(x,y);else if(g.mode===In.LINE_STRIP)m=new mr(x,y);else if(g.mode===In.LINE_LOOP)m=new zo(x,y);else if(g.mode===In.POINTS)m=new gr(x,y);else throw new Error("THREE.GLTFLoader: Primitive mode unsupported: "+g.mode);Object.keys(m.geometry.morphAttributes).length>0&&Sv(m,r),m.name=t.createUniqueName(r.name||"mesh_"+e),Vi(m,r),g.extensions&&ms(s,m,g),t.assignFinalMaterial(m),u.push(m)}for(let f=0,p=u.length;f<p;f++)t.associations.set(u[f],{meshes:e,primitives:f});if(u.length===1)return r.extensions&&ms(s,u[0],r),u[0];let d=new We;r.extensions&&ms(s,d,r),t.associations.set(d,{meshes:e});for(let f=0,p=u.length;f<p;f++)d.add(u[f]);return d})}loadCamera(e){let t,n=this.json.cameras[e],s=n[n.type];if(!s){console.warn("THREE.GLTFLoader: Missing camera parameters.");return}return n.type==="perspective"?t=new Xt(_i.radToDeg(s.yfov),s.aspectRatio||1,s.znear||1,s.zfar||2e6):n.type==="orthographic"&&(t=new hr(-s.xmag,s.xmag,s.ymag,-s.ymag,s.znear,s.zfar)),n.name&&(t.name=this.createUniqueName(n.name)),Vi(t,n),Promise.resolve(t)}loadSkin(e){let t=this.json.skins[e],n=[];for(let s=0,r=t.joints.length;s<r;s++)n.push(this._loadNodeShallow(t.joints[s]));return t.inverseBindMatrices!==void 0?n.push(this.getDependency("accessor",t.inverseBindMatrices)):n.push(null),Promise.all(n).then(function(s){let r=s.pop(),a=s,o=[],c=[];for(let l=0,h=a.length;l<h;l++){let u=a[l];if(u){o.push(u);let d=new Xe;r!==null&&d.fromArray(r.array,l*16),c.push(d)}else console.warn('THREE.GLTFLoader: Joint "%s" could not be found.',t.joints[l])}return new Lo(o,c)})}loadAnimation(e){let t=this.json,n=this,s=t.animations[e],r=s.name?s.name:"animation_"+e,a=[],o=[],c=[],l=[],h=[];for(let u=0,d=s.channels.length;u<d;u++){let f=s.channels[u],p=s.samplers[f.sampler],x=f.target,g=x.node,m=s.parameters!==void 0?s.parameters[p.input]:p.input,y=s.parameters!==void 0?s.parameters[p.output]:p.output;x.node!==void 0&&(a.push(this.getDependency("node",g)),o.push(this.getDependency("accessor",m)),c.push(this.getDependency("accessor",y)),l.push(p),h.push(x))}return Promise.all([Promise.all(a),Promise.all(o),Promise.all(c),Promise.all(l),Promise.all(h)]).then(function(u){let d=u[0],f=u[1],p=u[2],x=u[3],g=u[4],m=[];for(let y=0,_=d.length;y<_;y++){let w=d[y],P=f[y],A=p[y],R=x[y],F=g[y];if(w===void 0)continue;w.updateMatrix&&w.updateMatrix();let M=n._createAnimationTracks(w,P,A,R,F);if(M)for(let E=0;E<M.length;E++)m.push(M[E])}return new gi(r,void 0,m)})}createNodeMesh(e){let t=this.json,n=this,s=t.nodes[e];return s.mesh===void 0?null:n.getDependency("mesh",s.mesh).then(function(r){let a=n._getNodeRef(n.meshCache,s.mesh,r);return s.weights!==void 0&&a.traverse(function(o){if(o.isMesh)for(let c=0,l=s.weights.length;c<l;c++)o.morphTargetInfluences[c]=s.weights[c]}),a})}loadNode(e){let t=this.json,n=this,s=t.nodes[e],r=n._loadNodeShallow(e),a=[],o=s.children||[];for(let l=0,h=o.length;l<h;l++)a.push(n.getDependency("node",o[l]));let c=s.skin===void 0?Promise.resolve(null):n.getDependency("skin",s.skin);return Promise.all([r,Promise.all(a),c]).then(function(l){let h=l[0],u=l[1],d=l[2];d!==null&&h.traverse(function(f){f.isSkinnedMesh&&f.bind(d,Av)});for(let f=0,p=u.length;f<p;f++)h.add(u[f]);return h})}_loadNodeShallow(e){let t=this.json,n=this.extensions,s=this;if(this.nodeCache[e]!==void 0)return this.nodeCache[e];let r=t.nodes[e],a=r.name?s.createUniqueName(r.name):"",o=[],c=s._invokeOne(function(l){return l.createNodeMesh&&l.createNodeMesh(e)});return c&&o.push(c),r.camera!==void 0&&o.push(s.getDependency("camera",r.camera).then(function(l){return s._getNodeRef(s.cameraCache,r.camera,l)})),s._invokeAll(function(l){return l.createNodeAttachment&&l.createNodeAttachment(e)}).forEach(function(l){o.push(l)}),this.nodeCache[e]=Promise.all(o).then(function(l){let h;if(r.isBone===!0?h=new na:l.length>1?h=new We:l.length===1?h=l[0]:h=new St,h!==l[0])for(let u=0,d=l.length;u<d;u++)h.add(l[u]);if(r.name&&(h.userData.name=r.name,h.name=a),Vi(h,r),r.extensions&&ms(n,h,r),r.matrix!==void 0){let u=new Xe;u.fromArray(r.matrix),h.applyMatrix4(u)}else r.translation!==void 0&&h.position.fromArray(r.translation),r.rotation!==void 0&&h.quaternion.fromArray(r.rotation),r.scale!==void 0&&h.scale.fromArray(r.scale);return s.associations.has(h)||s.associations.set(h,{}),s.associations.get(h).nodes=e,h}),this.nodeCache[e]}loadScene(e){let t=this.extensions,n=this.json.scenes[e],s=this,r=new We;n.name&&(r.name=s.createUniqueName(n.name)),Vi(r,n),n.extensions&&ms(t,r,n);let a=n.nodes||[],o=[];for(let c=0,l=a.length;c<l;c++)o.push(s.getDependency("node",a[c]));return Promise.all(o).then(function(c){for(let h=0,u=c.length;h<u;h++)r.add(c[h]);let l=h=>{let u=new Map;for(let[d,f]of s.associations)(d instanceof ln||d instanceof en)&&u.set(d,f);return h.traverse(d=>{let f=s.associations.get(d);f!=null&&u.set(d,f)}),u};return s.associations=l(r),r})}_createAnimationTracks(e,t,n,s,r){let a=[],o=e.name?e.name:e.uuid,c=[];Gi[r.path]===Gi.weights?e.traverse(function(d){d.morphTargetInfluences&&c.push(d.name?d.name:d.uuid)}):c.push(o);let l;switch(Gi[r.path]){case Gi.weights:l=pi;break;case Gi.rotation:l=Zn;break;case Gi.position:case Gi.scale:l=mi;break;default:switch(n.itemSize){case 1:l=pi;break;case 2:case 3:default:l=mi;break}break}let h=s.interpolation!==void 0?Mv[s.interpolation]:os,u=this._getArrayFromAccessor(n);for(let d=0,f=c.length;d<f;d++){let p=new l(c[d]+"."+Gi[r.path],t.array,u,h);s.interpolation==="CUBICSPLINE"&&this._createCubicSplineTrackInterpolant(p),a.push(p)}return a}_getArrayFromAccessor(e){let t=e.array;if(e.normalized){let n=kh(t.constructor),s=new Float32Array(t.length);for(let r=0,a=t.length;r<a;r++)s[r]=t[r]*n;t=s}return t}_createCubicSplineTrackInterpolant(e){e.createInterpolant=function(n){let s=this instanceof Zn?Fh:sc;return new s(this.times,this.values,this.getValueSize()/3,n)},e.createInterpolant.isInterpolantFactoryMethodGLTFCubicSpline=!0}};function Rv(i,e,t){let n=e.attributes,s=new _n;if(n.POSITION!==void 0){let o=t.json.accessors[n.POSITION],c=o.min,l=o.max;if(c!==void 0&&l!==void 0){if(s.set(new L(c[0],c[1],c[2]),new L(l[0],l[1],l[2])),o.normalized){let h=kh(Sr[o.componentType]);s.min.multiplyScalar(h),s.max.multiplyScalar(h)}}else{console.warn("THREE.GLTFLoader: Missing min/max properties for accessor POSITION.");return}}else return;let r=e.targets;if(r!==void 0){let o=new L,c=new L;for(let l=0,h=r.length;l<h;l++){let u=r[l];if(u.POSITION!==void 0){let d=t.json.accessors[u.POSITION],f=d.min,p=d.max;if(f!==void 0&&p!==void 0){if(c.setX(Math.max(Math.abs(f[0]),Math.abs(p[0]))),c.setY(Math.max(Math.abs(f[1]),Math.abs(p[1]))),c.setZ(Math.max(Math.abs(f[2]),Math.abs(p[2]))),d.normalized){let x=kh(Sr[d.componentType]);c.multiplyScalar(x)}o.max(c)}else console.warn("THREE.GLTFLoader: Missing min/max properties for accessor POSITION.")}}s.expandByVector(o)}i.boundingBox=s;let a=new wn;s.getCenter(a.center),a.radius=s.min.distanceTo(s.max)/2,i.boundingSphere=a}function Nf(i,e,t){let n=e.attributes,s=[];function r(a,o){return t.getDependency("accessor",a).then(function(c){i.setAttribute(o,c)})}for(let a in n){let o=Bh[a]||a.toLowerCase();o in i.attributes||s.push(r(n[a],o))}if(e.indices!==void 0&&!i.index){let a=t.getDependency("accessor",e.indices).then(function(o){i.setIndex(o)});s.push(a)}return ht.workingColorSpace!==qt&&"COLOR_0"in n&&console.warn(`THREE.GLTFLoader: Converting vertex colors from "srgb-linear" to "${ht.workingColorSpace}" not supported.`),Vi(i,e),Rv(i,e,t),Promise.all(s).then(function(){return e.targets!==void 0?wv(i,e.targets,t):i})}function Gh(i){let e=new Map,t=new Map,n=i.clone();return Of(i,n,function(s,r){e.set(r,s),t.set(s,r)}),n.traverse(function(s){if(!s.isSkinnedMesh)return;let r=s,a=e.get(s),o=a.skeleton.bones;r.skeleton=a.skeleton.clone(),r.bindMatrix.copy(a.bindMatrix),r.skeleton.bones=o.map(function(c){return t.get(c)}),r.bind(r.skeleton,r.bindMatrix)}),n}function Of(i,e,t){t(i,e);for(let n=0;n<i.children.length;n++)Of(i.children[n],e.children[n],t)}function Cv(i){let e=atob(i),t=new Uint8Array(e.length);for(let n=0;n<e.length;n++)t[n]=e.charCodeAt(n);return t.buffer}var rc={};function Wh(i){return rc[i]||(rc[i]=new Promise((e,t)=>{let n=window.__GLB&&window.__GLB[i];if(!n){t(new Error("missing model "+i));return}new ic().parse(Cv(n),"",e,t)})),rc[i]}var ma={mats:new Set,k:1};function Ff(i){var e;if(!(Math.abs(i-ma.k)<.02)){ma.k=i;for(let t of ma.mats)t.envMapIntensity=i*((e=t.userData.envBase)!=null?e:1)}}function Vh(i,e=1){i.userData.envBase=e,i.envMapIntensity=ma.k*e,ma.mats.add(i)}function ac(i,e={}){return i.traverse(t=>{if(!(t.isMesh||t.isSkinnedMesh))return;t.castShadow=!0,t.receiveShadow=!1,t.frustumCulled=!1;let n=Array.isArray(t.material)?t.material:[t.material];for(let s of n){if(!s)continue;let r=s.name||"";/Steel|Iron|Brass/.test(r)?(s.metalness=Math.min(.95,s.metalness),s.roughness=Math.max(.22,s.roughness),Vh(s,1.2)):(s.metalness<.5&&(s.metalness=0),Vh(s,/Skin|Superhero|Regular/.test(r)?.55:.7)),/Eye/.test(r)&&(s.roughness=.12),/HeroHair$/.test(r)&&(s.alphaTest=.5,s.transparent=!1,s.side=Jt,s.roughness=.6),/Glass/.test(r)&&(s.transparent=!0,s.depthWrite=!1,s.roughness=.05),s.map&&(s.map.anisotropy=4)}}),e.scale&&i.scale.setScalar(e.scale),i}function gs(i,e){let t=null;return i.traverse(n=>{!t&&n.isBone&&n.name===e&&(t=n)}),t}function Bf(i,e){let t=null;return i.traverse(n=>{!t&&n.name===e&&(t=n)}),t}function Xh(i,e,t,n,s=new Dt){let r=gs(i,e);if(!r)return null;i.updateMatrixWorld(!0);let a=i.localToWorld(n.clone()),o=new Dt;i.getWorldQuaternion(o);let c=new Dt;r.getWorldQuaternion(c);let l=new L;return r.getWorldScale(l),r.add(t),t.position.copy(r.worldToLocal(a)),t.quaternion.copy(c.invert().multiply(o).multiply(s)),t.scale.divide(l),r}function kf(i){return i.map(e=>new gi(e.name,e.duration,e.tracks.filter(t=>{let n=t.name.lastIndexOf("."),s=t.name.slice(0,n),r=t.name.slice(n+1);return r==="scale"||s==="weapon_r"||s==="flask_l"?!1:r==="position"?s==="root"||s==="pelvis":!0})))}var ga=class{constructor(e,t,n={}){this.root=e,this.mixer=new ha(e),this.C={},this.RT={};for(let r of t){let a=r.tracks.find(o=>o.name==="root.position");a&&(this.RT[r.name]=a),this.C[r.name]=a?new gi(r.name,r.duration,r.tracks.filter(o=>o!==a)):r}let s=Object.assign({idle:"Hema_Guard",walk:"Guard_Walk",run:"Run_Carry",sprint:"Sprint_Carry"},n.loco||{});this.loco={};for(let r of["idle","walk","run","sprint"]){let a=s[r];if(!a||!this.C[a])continue;let o=this.mixer.clipAction(this.C[a]);o.play(),o.setEffectiveWeight(r==="idle"?1:0),r!=="idle"&&(o.timeScale=0),this.loco[r]=o}this.dist=Object.assign({walk:1.3,run:4.91,sprint:5.5},n.dist||{}),this.off=Object.assign({walk:0,run:.964,sprint:.85},n.off||{}),this.w={idle:1,walk:0,run:0,sprint:0},this.phase=Math.random(),this.one=null,this.prev=[],this.rm=new L,this.timeScale=1}has(e){return!!this.C[e]}duration(e){return this.C[e]?this.C[e].duration:0}play(e,t={}){var l,h,u,d;let n=this.C[e];if(!n)return null;this.one&&(this.one.fadeOutT=(l=t.fadeIn)!=null?l:.1,this.prev.push(this.one));let s=this.mixer.clipAction(n);this.prev.some(f=>f.action===s)&&(s=this.mixer.clipAction(n.clone())),s.reset(),s.setLoop(t.loop?$l:Kl,1/0),s.clampWhenFinished=!0,s.timeScale=t.speed||1,s.play(),t.start&&(s.time=t.start*n.duration);let r=this.RT[e],a=r?r.createInterpolant():null,o=a?Array.from(a.evaluate(s.time)):null,c=((h=t.fadeIn)!=null?h:.1)<=0;return s.setEffectiveWeight(c?1:0),this.one={name:e,action:s,w:c?1:0,fadeIn:(u=t.fadeIn)!=null?u:.1,fadeOut:(d=t.fadeOut)!=null?d:.25,hold:!!t.hold,releasing:!1,auto:t.auto!==!1,interp:a,last:o},this.one}release(e){this.one&&!this.one.hold&&(this.one.releasing=!0,e!==void 0&&(this.one.fadeOut=e))}stopAll(){for(let e of[this.one,...this.prev])e&&e.action.stop();this.one=null,this.prev=[]}current(){return this.one&&!this.one.releasing?this.one.name:null}time(){return this.one?this.one.action.time:0}progress(){if(!this.one)return 1;let e=this.one.action;return e.time/e.getClip().duration}isPlaying(e){return!!(this.one&&this.one.name===e&&!this.one.releasing)}update(e,t){let n=_i.smoothstep,s=t,r=!!this.loco.sprint,a=n(s,.12,.8)*(1-n(s,1.5,3.4)),o=n(s,1.5,3.4)*(r?1-n(s,5.9,7.6):1),c=r?n(s,5.9,7.6):0,l={idle:Math.max(0,1-a-o-c),walk:a,run:o,sprint:c},h=Math.min(1,e*9);for(let p in l)this.w[p]+=(l[p]-this.w[p])*h;let u=this.w.walk+this.w.run+this.w.sprint;if(u>.001&&s>.01){let p=(this.w.walk*this.dist.walk+this.w.run*this.dist.run+this.w.sprint*this.dist.sprint)/u;this.phase=(this.phase+s*e*this.timeScale/p)%1}for(let p of["walk","run","sprint"]){let x=this.loco[p];x&&(x.time=(this.phase+this.off[p])%1*x.getClip().duration)}let d=0;for(let p=this.prev.length-1;p>=0;p--){let x=this.prev[p];if(x.w-=e/Math.max(.01,x.fadeOutT),x.w<=0){x.action.stop(),this.mixer.uncacheAction(x.action.getClip()),this.prev.splice(p,1);continue}x.action.setEffectiveWeight(x.w),d+=x.w}if(this.one){let p=this.one,x=p.action,g=x.getClip();if(p.auto&&!p.hold&&x.time>=g.duration-.001-p.fadeOut*x.timeScale&&(p.releasing=!0),p.releasing?p.w-=e/Math.max(.01,p.fadeOut):p.w+=e/Math.max(.01,p.fadeIn),p.w=_i.clamp(p.w,0,1),p.releasing&&p.w<=0)x.stop(),this.one=null;else{let m=Math.min(p.w,1-Math.min(1,d));x.setEffectiveWeight(m),d+=m}}d=Math.min(1,d);let f=1-d;for(let p in this.loco)this.loco[p].setEffectiveWeight(this.w[p]*f);this.mixer.update(e*this.timeScale),this.rm.set(0,0,0);for(let p of[this.one,...this.prev]){if(!p||!p.interp)continue;let x=p.interp.evaluate(p.action.time),g=p.action.getEffectiveWeight();this.rm.x+=(x[0]-p.last[0])*g,this.rm.z+=(x[2]-p.last[2])*g,p.last[0]=x[0],p.last[1]=x[1],p.last[2]=x[2]}return this.rm}},xa=class{constructor(e,t){this.root=e,this.bone=gs(e,t),this.active=!1}start(){if(!this.bone)return;this.root.updateMatrixWorld(!0),this.m=this.bone.matrixWorld.clone(),this.p=new L,this.q=new Dt,this.s=new L,this.m.decompose(this.p,this.q,this.s);let e=new L(0,1,0).applyQuaternion(this.q);e.y=0,e.lengthSq()<1e-4&&e.set(0,0,1),e.normalize();let t=new L(0,1,0),n=e,s=new L().crossVectors(t,n);this.qEnd=new Dt().setFromRotationMatrix(new Xe().makeBasis(t,n,s)),this.q0=this.q.clone(),this.v=new L((Math.random()-.5)*.6,.6,(Math.random()-.5)*.6),this.t=0,this.active=!0,this.rest=!1}stop(){this.active=!1}update(e,t){if(!this.active||!this.bone)return;if(this.t+=e,!this.rest){this.v.y-=9.8*e,this.p.addScaledVector(this.v,e);let o=t+.035*this.s.y;this.p.y<=o&&(this.p.y=o,this.v.multiplyScalar(.25),this.v.y=Math.abs(this.v.y)*.2,this.t>.35&&(this.rest=!0))}let n=Math.min(1,this.t/.55);this.q.copy(this.q0).slerp(this.qEnd,n*n*(3-2*n));let s=new Xe().compose(this.p,this.q,this.s);this.root.updateMatrixWorld(!0);let r=this.bone.parent;new Xe().copy(r.matrixWorld).invert().multiply(s).decompose(this.bone.position,this.bone.quaternion,this.bone.scale)}};function Pv(i,e){let t=[];for(;i&&i!==e;)t.push(i.name),i=i.parent;return t.join("|")}function Hf(i,e,t={}){let n=Gh(i.scene),s=t.scale||1.12;ac(n,{scale:s});let r=[],a=null,o=null;n.traverse(d=>{var m;if(!d.isMesh)return;let f=Pv(d,n);if(/Hair_/.test(f)){let y=(f.match(/Hair_[A-Za-z]+/)||[""])[0];d.visible=(t.hair||[]).includes(y)}/Sword/.test(f)&&t.hideSword&&(d.visible=!1),/Flask/.test(f)&&(d.visible=!1);let p=d.material.clone();d.material=p,r.push(p),Vh(p,(m=p.userData.envBase)!=null?m:.7);let x=p.name||"",g=t.tint||{};/Hair/.test(x)&&g.hair!==void 0?p.color.set(g.hair):/(Ranger|Peasant)/.test(x)&&g.outfit!==void 0?p.color.set(g.outfit):/(Superhero|Regular)/.test(x)&&g.skin!==void 0&&p.color.set(g.skin),/Eye/.test(x)&&(a=p),/M_Steel$/.test(x)&&(o=p)}),a&&t.eyeGlow&&(a.emissive.set(t.eyeGlow),a.emissiveIntensity=1.5),o&&t.swordGlow&&(o.emissive.set(t.swordGlow),o.color.set(4862e3));let c=t.armed!==void 0?t.armed:!t.hideSword&&!!gs(n,"weapon_r"),l=c?{}:{idle:"Idle",walk:"Walk",run:"Jog",sprint:null},h=new ga(n,e,{loco:l,dist:c?{}:{run:4.91},off:c?{}:{run:.964}});for(let d of r)d.userData.baseE=d.emissive?d.emissive.getHex():0;let u=c?new xa(n,"weapon_r"):null;return{kind:"rig",group:n,anim:h,mats:r,scale:s,armed:c,drop:u}}function qh(i,e={}){let t=new We,n=Gh(i.scene);t.add(n);let s=new _n().setFromObject(n),r=new L;s.getSize(r);let a=(e.length||1.1)/Math.max(r.x,r.z);n.scale.setScalar(a),n.position.y=-s.min.y*a;let o=[];n.traverse(f=>{if(f.isMesh){f.castShadow=!0,f.frustumCulled=!1;let p=f.material.clone();f.material=p,p.metalness=0,o.push(p),e.color!==void 0&&(p.map=null,p.color.set(e.color),p.needsUpdate=!0),e.tint!==void 0&&p.color.multiply(new pe(e.tint))}});for(let f of o)f.userData.baseE=f.emissive.getHex();let c=new ha(n),l=f=>i.animations.find(p=>p.name===f),h={idle:c.clipAction(l("Survey")),walk:c.clipAction(l("Walk")),run:c.clipAction(l("Run"))};for(let f of Object.values(h))f.play(),f.setEffectiveWeight(0);let u={idle:1,walk:0,run:0};return{kind:"qrig",group:t,mats:o,scale:a,update(f,p,x=-1){let g=_i.clamp((p-3)/2.5,0,1),m=_i.clamp(p/1.2,0,1)*(1-g),y={idle:1-m-g,walk:m,run:g},_=Math.min(1,f*8);for(let w in y)u[w]+=(y[w]-u[w])*_,h[w].setEffectiveWeight(u[w]);if(h.walk.timeScale=_i.clamp(p/1.6,.6,2),h.run.timeScale=_i.clamp(p/5,.7,1.6),c.update(f),x>=0){let w=x<.5?x/.5:1-(x-.5)/.5;n.rotation.x=-.3*w,n.position.z=.45*w}else n.rotation.x=0,n.position.z=0}}}var oc=class extends dr{constructor(e=null){super();let t=new Fe;t.deleteAttribute("uv");let n=new fi({side:cn}),s=new fi,r=5;e!==null&&e._useLegacyLights===!1&&(r=900);let a=new Oi(16777215,r,28,2);a.position.set(.418,16.199,.3),this.add(a);let o=new de(t,n);o.position.set(-.757,13.219,.717),o.scale.set(31.713,28.305,28.591),this.add(o);let c=new de(t,s);c.position.set(-10.906,2.009,1.846),c.rotation.set(0,-.195,0),c.scale.set(2.328,7.905,4.651),this.add(c);let l=new de(t,s);l.position.set(-5.607,-.754,-.758),l.rotation.set(0,.994,0),l.scale.set(1.97,1.534,3.955),this.add(l);let h=new de(t,s);h.position.set(6.167,.857,7.803),h.rotation.set(0,.561,0),h.scale.set(3.927,6.285,3.687),this.add(h);let u=new de(t,s);u.position.set(-2.017,.018,6.124),u.rotation.set(0,.333,0),u.scale.set(2.002,4.566,2.064),this.add(u);let d=new de(t,s);d.position.set(2.291,-.756,-2.621),d.rotation.set(0,-.286,0),d.scale.set(1.546,1.552,1.496),this.add(d);let f=new de(t,s);f.position.set(-2.193,-.369,-5.547),f.rotation.set(0,.516,0),f.scale.set(3.875,3.487,2.986),this.add(f);let p=new de(t,Er(50));p.position.set(-16.116,14.37,8.208),p.scale.set(.1,2.428,2.739),this.add(p);let x=new de(t,Er(50));x.position.set(-16.109,18.021,-8.207),x.scale.set(.1,2.425,2.751),this.add(x);let g=new de(t,Er(17));g.position.set(14.904,12.198,-1.832),g.scale.set(.15,4.265,6.331),this.add(g);let m=new de(t,Er(43));m.position.set(-.462,8.89,14.52),m.scale.set(4.38,5.441,.088),this.add(m);let y=new de(t,Er(20));y.position.set(3.235,11.486,-12.541),y.scale.set(2.5,2,.1),this.add(y);let _=new de(t,Er(100));_.position.set(0,20,0),_.scale.set(1,.1,1),this.add(_)}dispose(){let e=new Set;this.traverse(t=>{t.isMesh&&(e.add(t.geometry),e.add(t.material))});for(let t of e)t.dispose()}};function Er(i){let e=new At;return e.color.setScalar(i),e}var Ee=i=>document.getElementById(i),gt=(i,e)=>i+Math.random()*(e-i),Xi=(i,e,t)=>Math.max(e,Math.min(t,i)),yt=(i,e,t)=>i+(e-i)*t;function Lr(i,e){let t=(i-e)%(Math.PI*2);return t>Math.PI&&(t-=Math.PI*2),t<-Math.PI&&(t+=Math.PI*2),t}function xn(i,e,t){let n=Lr(e,i);return i+Xi(n,-t,t)}var hn=(i,e)=>Math.hypot(i.x-e.x,i.z-e.z),Lv=480,vc="kroniki_wrzosu_v1",xc=[{name:"Zardzewia\u0142y miecz",dmg:11},{name:"Stalowy miecz",dmg:19,price:250},{name:"Runiczny miecz",dmg:32,price:900}],_c=[{name:"Sk\xF3rzana kurta",mul:1},{name:"Kolczuga",mul:.72,price:320},{name:"Zbroja p\u0142ytowa",mul:.5,price:1100}],Iv=[100,250,450,750,1100],Gf={sila:{n:"Si\u0142a",d:"Mocniejsze ciosy mieczem (+5) i wi\u0119cej zdrowia (+20)."},magia:{n:"Magia",d:"Silniejsze b\u0142yskawice (+12) i wi\u0119cej many (+25)."},zrecznosc:{n:"Zr\u0119czno\u015B\u0107",d:"Szybszy ruch i unik, wi\u0119ksza szansa na cios krytyczny."}};function ou(){return{gold:40,xp:0,stats:{sila:0,magia:0,zrecznosc:0},morality:0,renown:0,potions:2,sword:0,armor:0,houseOwned:!1,scars:0,quests:{bandits:0,herbs:0,ruins:0,debt:0},flags:{leaderFate:null,debtChoice:null,campCleared:!1,bossDead:!1,widowGift:!1,foxPets:0},campKills:0,herbsHave:0,herbTaken:[],chestOpened:[],time:.3,day:1,pos:{x:0,z:9},hp:100,mana:60,tracked:"bandits",kills:0}}var I=ou(),Gn="medium";try{Gn=localStorage.getItem("kw_quality")||"medium"}catch{}var xs=!0;try{xs=localStorage.getItem("kw_music")!=="0"}catch{}fh(xs);var zv=Ee("c"),qi;try{qi=new ea({canvas:zv,antialias:Gn!=="low",powerPreference:"high-performance"})}catch(i){throw Ee("err").style.display="block",Ee("errMsg").textContent=String(i),i}function rp(){qi.setPixelRatio(Math.min(window.devicePixelRatio||1,Gn==="high"?2:Gn==="medium"?1.4:1)),qi.setSize(window.innerWidth,window.innerHeight,!1)}rp();qi.shadowMap.enabled=Gn!=="low";qi.shadowMap.type=Wo;var dt=new dr;dt.background=new pe(8896488);dt.fog=new Ro(8896488,50,Gn==="low"?150:200);var un=new Xt(60,window.innerWidth/window.innerHeight,.1,420);{let i=new ur(qi);dt.environment=i.fromScene(new oc,.04).texture,i.dispose()}var Qh=new ko(13625087,5925434,1);dt.add(Qh);var kn=new yr(16773336,2);kn.castShadow=Gn!=="low";kn.shadow.mapSize.set(Gn==="high"?2048:1024,Gn==="high"?2048:1024);var Ir=kn.shadow.camera;Ir.left=-32;Ir.right=32;Ir.top=32;Ir.bottom=-32;Ir.near=1;Ir.far=220;kn.shadow.bias=-8e-4;kn.shadow.normalBias=.03;dt.add(kn);dt.add(kn.target);var Ke=Af(dt,Gn),ap=Ke.colliders;window.addEventListener("resize",()=>{un.aspect=window.innerWidth/window.innerHeight,un.updateProjectionMatrix(),rp()});function Yh(i,e){if(Math.abs(i)>188||Math.abs(e)>188)return!1;let t=nt(i,e);return t>-1&&t<24}function Wi(i,e,t,n){let s=i.x+e,r=i.z+t;Yh(s,r)?(i.x=s,i.z=r):Yh(s,i.z)?i.x=s:Yh(i.x,r)&&(i.z=r),ap.resolve(i,n),i.y=nt(i.x,i.z)}var Dv=new Fe(.14,.14,.14),Vf={},Wf=i=>Vf[i]||(Vf[i]=new At({color:i})),lc=[];function Qt(i,e,t,n,s=8,r=4,a=3,o=.6,c=1){for(let l=0;l<s;l++){let h=lc.find(f=>!f.alive);if(!h){if(lc.length>140)return;h={m:new de(Dv,Wf(n))},dt.add(h.m),lc.push(h)}h.m.material=Wf(n),h.alive=!0,h.t=0,h.life=o*gt(.7,1.2),h.size=c,h.m.visible=!0,h.m.position.set(i,e,t);let u=Math.random()*Math.PI*2,d=r*gt(.4,1);h.vx=Math.cos(u)*d,h.vz=Math.sin(u)*d,h.vy=a*gt(.5,1.3)}}function Nv(i){for(let e of lc){if(!e.alive)continue;if(e.t+=i,e.t>=e.life){e.alive=!1,e.m.visible=!1;continue}e.vy-=9*i,e.m.position.x+=e.vx*i,e.m.position.y+=e.vy*i,e.m.position.z+=e.vz*i;let t=(1-e.t/e.life)*e.size;e.m.scale.setScalar(t),e.m.rotation.x+=i*5,e.m.rotation.y+=i*4}}var eu=[],Uv=Ee("floats"),cc=new L;function Ea(i,e,t,n,s="dmg",r=1,a=1.2){let o=eu.find(c=>!c.alive);if(!o){let c=document.createElement("div");Uv.appendChild(c),o={el:c},eu.push(o)}return o.alive=!0,o.el.className="ft "+s,o.el.textContent=i,o.el.style.display="block",o.x=e+gt(-.3,.3),o.y=t,o.z=n,o.t=0,o.life=r,o.rise=a,o}function Ov(i){let e=window.innerWidth,t=window.innerHeight;for(let n of eu){if(!n.alive)continue;if(n.t+=i,n.t>=n.life){n.alive=!1,n.el.style.display="none";continue}if(cc.set(n.x,n.y+n.t*n.rise,n.z).project(un),cc.z>1){n.el.style.display="none";continue}n.el.style.display="block";let s=(cc.x*.5+.5)*e,r=(-cc.y*.5+.5)*t;n.el.style.transform=`translate(${s.toFixed(1)}px,${r.toFixed(1)}px) translate(-50%,-50%)`,n.el.style.opacity=n.t>n.life*.7?(1-(n.t-n.life*.7)/(n.life*.3)).toFixed(2):"1"}}function ct(i,e="",t=3.2){let n=Ee("toast");for(let a of n.children)if(a.textContent===i)return;let s=document.createElement("div");s.textContent=i,e&&(s.className=e);let r=Ee("toast");for(r.appendChild(s);r.children.length>4;)r.removeChild(r.firstChild);setTimeout(()=>s.remove(),t*1e3)}var vt=fs({shirt:3104138,pants:3878948,hair:6964256,weapon:!0,cape:9051935,boots:3810838});dt.add(vt.group);var op=new Bt({color:16770688,emissive:16764992,emissiveIntensity:.9}),Mc=new de(new oa(.24,.035,6,18),op);Mc.rotation.x=Math.PI/2;Mc.position.y=.78;vt.headG.add(Mc);var cp=new Bt({color:3803658}),cu=new We;vt.headG.add(cu);for(let i of[-1,1]){let e=new de(new tn(.06,.32,5),cp);e.position.set(i*.17,.55,.05),e.rotation.z=-i*.5,cu.add(e)}var Fv=new Bt({color:10107434}),hc=new We;vt.headG.add(hc);var ya=new At({color:16769152,transparent:!0,opacity:0,depthWrite:!1}),Ms=new de(new ra(.6,.95,24),ya);Ms.rotation.x=-Math.PI/2;Ms.position.y=.05;vt.group.add(Ms);var v={pos:new L(0,2.5,9),yaw:Math.PI,hp:100,mana:60,attackT:-1,combo:0,comboQ:!1,comboTimer:0,atkHit:!1,rollT:0,rollCd:0,rollDir:{x:0,z:1},invuln:0,castT:0,dead:!1,deadT:0,lastHurt:-99,speed:0,kvx:0,kvz:0},yc=1.12,Ae=null,lp=[{clip:"Hema_Zornhau",rec:"Hema_Zornhau_Rec",hit:16/30,name:"Zornhau",dmg:1},{clip:"Hema_Zwerchhau",rec:"Hema_Zwerchhau_Rec",hit:13/30,name:"Zwerchhau",dmg:1.15},{clip:"Hema_Scheitelhau",rec:"Hema_Scheitelhau_Rec",hit:15/30,name:"Scheitelhau",dmg:1.7}],hp=1.2,Xf=.72,up=.55,_s=null;Wh("village").then(Bv).catch(i=>console.warn("village",i));Promise.all(["hero","npc_bandit","npc_man","npc_woman","fox"].map(Wh)).then(([i,e,t,n,s])=>{let r=kf(i.animations);_s={clips:r,bandit:e,man:t,woman:n,fox:s};{let p=qh(s,{length:1.05});dt.remove(Ut.mesh.group),Ut.mesh=p,dt.add(p.group)}let a=ac(i.scene,{scale:yc});dt.add(a);let o=new ga(a,r,{}),c=new de(new oa(.15,.022,6,20),op);Xh(a,"Head",c,new L(0,1.97,-.01),new Dt().setFromAxisAngle(new L(1,0,0),Math.PI/2));let l=new We;for(let p of[-1,1]){let x=new de(new tn(.03,.16,6),cp);x.position.set(p*.07,.05,0),x.rotation.z=-p*.45,l.add(x)}Xh(a,"Head",l,new L(0,1.83,.03)),a.add(Ms),Ms.scale.setScalar(1/yc);let h=null,u=null;a.traverse(p=>{p.material&&(p.material.name==="M_Steel"&&(h=p.material),p.material.name==="M_HeroSkin"&&(u=p.material))});let d=Bf(a,"Flask");d&&(d.visible=!1);let f=gs(a,"weapon_r");Ae={root:a,anim:o,halo:c,horns:l,steel:h,skin:u,flask:d,drop:new xa(a,"weapon_r"),wbind:f?{p:f.position.clone(),q:f.quaternion.clone(),s:f.scale.clone()}:null,handL:gs(a,"hand_l")},a.position.copy(v.pos),a.rotation.y=v.yaw,o.update(.016,0),vt.group.visible=!1,Jn(),kv()}).catch(i=>console.warn("models",i));var Ar=null,tu=null,uc=null;function Bv(i){ac(i.scene);let e=c=>i.scene.getObjectByName(c);i.scene.traverse(c=>{if(!c.isMesh||!c.material)return;c.frustumCulled=!0,c.castShadow=!0,c.receiveShadow=!0;let l=c.material;/WindowGlass/.test(l.name)&&(Ar=l,l.transparent=!1,l.opacity=1,l.depthWrite=!0,l.color.setRGB(.045,.06,.075),l.roughness=.12,l.metalness=0,l.envMapIntensity=1.8,l.emissive.set(16751164),l.emissiveIntensity=0,l.needsUpdate=!0),/LanternGlass/.test(l.name)&&(tu=l,l.emissive.set(16752704),l.emissiveIntensity=0,c.castShadow=!1),/Vine/.test(l.name)&&(l.alphaTest=.5,l.transparent=!1,l.side=Jt,c.castShadow=!1)});let t=Ar&&Ar.clone();Ke.houses.forEach((c,l)=>{let h=e(c.kind);if(!h)return;let u=h.clone(!0);u.position.set(c.x,c.y,c.z),u.rotation.set(0,c.rot,0),u.scale.setScalar(tc),t&&l%4===2&&u.traverse(d=>{d.isMesh&&d.material===Ar&&(d.material=t)}),c.parent.remove(c.group),c.parent.add(u),c.group=u});for(let c of Ke.props){let l=e(c.kind);if(!l)continue;let h=l.clone(!0);h.position.copy(c.group.position),h.rotation.copy(c.group.rotation),h.scale.setScalar(c.s),c.parent.remove(c.group),c.parent.add(h),c.group=h}if(Ke.lanterns){let c=document.createElement("canvas");c.width=c.height=128;let l=c.getContext("2d"),h=l.createRadialGradient(64,64,0,64,64,64);h.addColorStop(0,"rgba(255,190,110,1)"),h.addColorStop(.35,"rgba(255,150,70,0.45)"),h.addColorStop(1,"rgba(255,120,40,0)"),l.fillStyle=h,l.fillRect(0,0,128,128);let u=new Do(c);u.colorSpace=Tt;let d=new At({map:u,transparent:!0,opacity:0,blending:jr,depthWrite:!1,fog:!0}),f=new ta({map:u,transparent:!0,opacity:0,blending:jr,depthWrite:!1}),p=new zi(6,6);p.rotateX(-Math.PI/2);for(let x of Ke.lanterns){let g=Math.atan2(x.x,x.z),m=x.x-Math.sin(g)*.56,y=x.z-Math.cos(g)*.56,_=new de(p,d);_.position.set(m,nt(m,y)+.06,y),_.renderOrder=2,dt.add(_);let w=new Co(f);w.scale.setScalar(1.6),w.position.set(m,x.y+2.19,y),dt.add(w)}uc={poolM:d,haloM:f}}let n=(c,l,h,u,d)=>{let f=e(c);if(!f)return;let p=f.clone(!0);p.position.set(l,nt(l,h),h),p.rotation.y=u,p.scale.setScalar(tc),dt.add(p),d&&Ke.colliders.addCircle(l,h,d)},s=Ke.spots.tavern;if(s){let c=Math.atan2(s.x,s.z);n("P_Wagon",s.x+Math.cos(c)*4.2,s.z-Math.sin(c)*4.2,c+.4,1.6)}let r=Ke.spots.merchant;r&&(n("P_Crate",r.x-2.2,r.z+1.2,.3,.6),n("P_Crate",r.x-2.5,r.z+2.4,1.1,.6),n("P_Crate",r.x+2.4,r.z-.6,.7,.6));let a=ue.herbalist,o=Math.atan2(-a.x,-a.z);for(let c=0;c<4;c++){let l=o+Math.PI/2,h=3.6+c*2.3;n("P_WoodenFence",a.x+Math.sin(o)*3+Math.sin(l)*h,a.z+Math.cos(o)*3+Math.cos(l)*h,l+Math.PI/2,0)}}function dp(i){if(i.model==="fox")return qh(_s.fox,i);let e={bandit:_s.bandit,man:_s.man,woman:_s.woman}[i.model];return Hf(e,_s.clips,i)}function dc(i,e,t,n=-1,s={}){if(i.kind==="rig"){if(s.kneel&&(i.anim.isPlaying("Sit")||i.anim.play("Sit",{loop:!0,hold:!0,fadeIn:.3}),i.group.position.y-=.42*i.scale),s.talk!==void 0){let r=i.anim.isPlaying("Talk");s.talk&&!r&&!i.anim.one&&i.anim.play("Talk",{loop:!0,hold:!0,fadeIn:.4}),!s.talk&&r&&(i.anim.one.hold=!1,i.anim.release(.4))}i.anim.update(e,t/i.scale*1.12)}else lh(i,e,t,n,s)}var qf=[1708560,3810326,5913122,9071168,11569744,6957592,10132122],Yf=[16777215,14207152,12109992,13152416,11055304,14733504,12626064],zn=i=>i[Math.floor(Math.random()*i.length)];function kv(){for(let i of ws){if(i.mesh.kind==="rig")continue;let e=i.rig;e||(e=i.look.dress?{model:"woman",hair:[zn(["Hair_Long","Hair_Buns"])],tint:{hair:zn(qf),outfit:zn(Yf)}}:{model:"man",hair:[zn(["Hair_SimpleParted","Hair_Buzzed"]),...Math.random()<.4?["Hair_Beard"]:[]],tint:{hair:zn(qf),outfit:zn(Yf)}},i.look.scale&&(e.scale=1.12*(i.look.scale+.15)));let t=dp(e);dt.remove(i.mesh.group),i.mesh=t,dt.add(t.group)}}var En=()=>100+20*I.stats.sila,$n=()=>60+25*I.stats.magia;function Jn(){if(Ae){let n=I.morality;if(Ae.halo.visible=n>=40,Ae.horns.visible=n<=-40,ya.color.set(n>=0?16769152:16724e3),ya.opacity=Math.abs(n)>60?.35:0,Ae.root.scale.setScalar(yc*(1+I.stats.sila*.018)),Ae.skin){let s=I.stats.magia;Ae.skin.emissive.setRGB(.02*s,.04*s,.1*s),n<=-70?Ae.skin.color.setRGB(.85,.78,.78):Ae.skin.color.setRGB(1,1,1)}Ae.steel&&(Ae.steel.color.set([11051152,14739182,11064575][I.sword]),Ae.steel.emissive.set(I.sword===2?1718922:0))}Mc.visible=I.morality>=40,cu.visible=I.morality<=-40;let i=I.morality;ya.color.set(i>=0?16769152:16724e3),ya.opacity=Math.abs(i)>60?.35:0,vt.mats[0].color.set(i<=-70?13150368:14725257);let e=1+I.stats.sila*.035;vt.group.scale.set(e,1+I.stats.sila*.02,e),vt.armL.scale.set(1+I.stats.sila*.08,1,1+I.stats.sila*.08),vt.armR.scale.copy(vt.armL.scale);let t=I.stats.magia;if(vt.mats[1].emissive.setRGB(.05*t,.1*t,.25*t),vt.weapon){let n=vt.weapon.userData.metal;n.color.set([10127994,14213352,10146047][I.sword]),n.emissive.set(I.sword===2?2779903:0)}for(vt.mats[1].color.set([3104138,5923952,10134704][I.armor]);hc.children.length<Math.min(I.scars,3);){let n=hc.children.length,s=new de(new Fe(.03,.16,.02),Fv);s.position.set(n===0?.12:n===1?-.13:.02,.18+n*.03,.216),s.rotation.z=.5-n*.6,hc.add(s)}}var Ut={mesh:hh({color:14182698,belly:16050392,dark:2759184,tailTip:16777215,paws:2759184,scale:.85}),pos:new L(2,2.5,11),yaw:0,atkT:-1,cd:0,target:null,speed:0,barkCd:0};dt.add(Ut.mesh.group);Ut.pos.y=nt(Ut.pos.x,Ut.pos.z);Ut.mesh.group.position.copy(Ut.pos);var Hv={bandit:{name:"Bandyta",hp:45,dmg:9,speed:4,range:1.7,aggro:15,windup:.5,cd:1.5,xp:30,gold:[4,14],radius:.45,renown:1,rig:()=>({model:"bandit",tint:{outfit:zn([16777215,13148288,10522752,11563104,10132106])}}),make:()=>fs({shirt:[7023135,4868650,5913130][Math.floor(Math.random()*3)],pants:3025442,hair:1840140,hood:Math.random()<.5?3811866:null,weapon:!0,blade:9079434})},wolf:{name:"Wilk",rig:()=>({model:"fox",length:1.55,color:zn([7237234,5920336,9079434])}),hp:30,dmg:7,speed:6,range:1.4,aggro:17,windup:.35,cd:1.3,xp:20,gold:[0,0],radius:.5,quad:!0,renown:1,make:()=>hh({color:7237234,belly:11579568,scale:1.15,eye:16763955})},ghoul:{name:"Upi\xF3r",hp:60,dmg:12,speed:3.5,range:1.7,aggro:20,windup:.6,cd:1.6,xp:45,gold:[2,10],radius:.45,renown:2,rig:()=>({model:"bandit",tint:{outfit:9083520,skin:10139808},eyeGlow:6750105}),make:()=>fs({skin:12108976,shirt:4938314,pants:3817528,hair:2764586,eyeGlow:6750105,weapon:!0,blade:6978154,scale:1.05,thin:!0})},leader:{name:"Herszt Wronis\u0142aw",hp:190,dmg:14,speed:4.2,range:1.9,aggro:22,windup:.5,cd:1.2,xp:150,gold:[0,0],radius:.55,renown:5,rig:()=>({model:"bandit",scale:1.3,tint:{outfit:5787728}}),make:()=>fs({shirt:2039583,pants:4001808,hair:1118481,beard:1118481,weapon:!0,blade:11579568,scale:1.2,cape:1118481})},boss:{name:"Rycerz Popio\u0142u",hp:750,dmg:24,speed:3.3,range:3.4,aggro:34,windup:.8,cd:1.6,xp:800,gold:[300,300],radius:1,renown:30,rig:()=>({model:"bandit",scale:2.15,tint:{outfit:4867144,skin:6969936},eyeGlow:16738816,swordGlow:16730624}),make:()=>fs({skin:4866104,shirt:6974068,pants:4868690,boots:2763306,helmet:8026756,eyeGlow:16738816,weapon:!0,blade:3811882,bladeGlow:16730624,scale:2.1,cape:2756624})}},It=[],vs=null,nu=0,iu=class{constructor(e,t,n,s="wild",r=null){this.type=e,this.def=Hv[e],this.tag=s,this.mesh=_s&&this.def.rig?dp(this.def.rig()):this.def.make(),dt.add(this.mesh.group),this.pos=new L(t,nt(t,n),n),this.home=r||{x:t,z:n},this.yaw=Math.random()*6.28,this.hp=this.def.hp,this.maxHp=this.def.hp,this.state="idle",this.t=0,this.atkCd=gt(.3,1),this.flash=0,this.wind=0,this.kx=0,this.kz=0,this.wander=null,this.wanderT=gt(1,4),this.dead=!1,this.deadT=0,this.speed=0,this.slamPhase=!1,this.summoned=!1,this.atkCount=0,this.mesh.group.position.copy(this.pos)}setFlash(){let e=this.flash,t=this.wind;for(let n of this.mesh.mats)n.userData.baseE===void 0&&(n.userData.baseE=n.emissive.getHex()),e>0?n.emissive.setRGB(e,e,e):t>0?n.emissive.setRGB(t*.28,t*.02,0):n.emissive.setHex(n.userData.baseE)}update(e){let t=this.def,n=this.mesh.group;if(this.dead){this.deadT+=e;let p=Math.min(1,this.deadT*2.5);this.mesh.kind==="rig"?(this.mesh.anim.timeScale=1,this.mesh.anim.update(e,0),this.mesh.drop&&this.mesh.drop.update(e,this.pos.y)):this.mesh.kind==="quad"||this.mesh.kind==="qrig"?n.rotation.z=p*Math.PI/2:n.rotation.x=-p*Math.PI/2,this.deadT>1.8&&(n.position.y-=e*.7),this.deadT>3.2&&(this.remove=!0);return}if((this.flash>0||this.wind>0||this._fl)&&(this.setFlash(),this._fl=this.flash>0||this.wind>0),this.flash=Math.max(0,this.flash-e*4),Math.abs(this.kx)+Math.abs(this.kz)>.05){Wi(this.pos,this.kx*e,this.kz*e,t.radius);let p=Math.exp(-7*e);this.kx*=p,this.kz*=p}let s=v.pos.x-this.pos.x,r=v.pos.z-this.pos.z,a=Math.hypot(s,r),o=Math.atan2(s,r),c=0,l=0;if(this.state==="surrender"){this.yaw=xn(this.yaw,o,e*3),n.position.copy(this.pos),n.rotation.y=this.yaw,dc(this.mesh,e,0,-1,{kneel:!0}),this.mesh.drop&&this.mesh.drop.update(e,this.pos.y);return}if(this.state==="leaving"){c=3,l=Math.atan2(this.pos.x-ue.camp.x+30,this.pos.z-ue.camp.z+30),this.t+=e,this.t>6&&(this.remove=!0),this.yaw=xn(this.yaw,l,e*6),Wi(this.pos,Math.sin(l)*c*e,Math.cos(l)*c*e,t.radius),n.position.copy(this.pos),n.rotation.y=this.yaw,this.mesh.kind==="rig"&&this.mesh.anim.one&&this.mesh.anim.stopAll(),dc(this.mesh,e,c);return}let h=Math.hypot(v.pos.x-ue.village.x,v.pos.z-ue.village.z),u=!v.dead&&(h>36||this.type==="boss");this.atkCd-=e;let d=Math.hypot(this.pos.x-this.home.x,this.pos.z-this.home.z),f=-1;switch(this.state){case"idle":if(this.wanderT-=e,this.wanderT<=0&&(this.wanderT=gt(2,6),this.wander=Math.random()<.6?{x:this.home.x+gt(-8,8),z:this.home.z+gt(-8,8)}:null),this.wander){let p=this.wander.x-this.pos.x,x=this.wander.z-this.pos.z;Math.hypot(p,x)>.8?(c=t.speed*.3,l=Math.atan2(p,x)):this.wander=null}u&&a<t.aggro&&(this.state="chase",this.type==="boss"&&Vv(this));break;case"chase":if(!u||a>t.aggro*2.2||d>55){this.state="return";break}a>t.range*.85&&(c=t.speed,l=o),a<t.range+.4&&this.atkCd<=0&&(this.state="windup",this.t=0,this.slamPhase=this.type==="boss"&&this.atkCount%3===2,this.mesh.kind==="rig"&&this.startAttackAnim(),this.slamPhase&&Gv(this)),this.yaw=xn(this.yaw,o,e*8);break;case"windup":{this.t+=e;let p=this.slamPhase?1.1:t.windup;this.wind=Math.min(1,this.t/p)*.6,this.slamPhase||(this.yaw=xn(this.yaw,o,e*3)),f=this.t/p*.35,this.t>=p&&(this.strike(a,o),this.state="recover",this.t=0,this.wind=0,this.atkCount++);break}case"recover":if(this.t+=e,f=.35+Math.min(1,this.t/.45)*.65,this.mesh.kind==="rig"&&this.atk){let p=this.atk;!p.recStarted&&p.t>=p.end-.015&&(p.recStarted=!0,p.rec?(this.mesh.anim.play(p.rec,{speed:1.1,fadeIn:.05,fadeOut:.25}),p.recEnd=p.t+this.mesh.anim.duration(p.rec)/1.1):p.recEnd=p.t),p.recStarted&&p.t>=p.recEnd-.2&&(this.state="chase",this.atkCd=t.cd*gt(.8,1.3),this.atk=null)}else this.t>.45&&(this.state="chase",this.atkCd=t.cd*gt(.8,1.3));break;case"return":{let p=this.home.x-this.pos.x,x=this.home.z-this.pos.z;c=t.speed*.7,l=Math.atan2(p,x),Math.hypot(p,x)<3&&(this.state="idle"),u&&a<t.aggro*.6&&d<40&&(this.state="chase"),this.hp<this.maxHp&&(this.hp=Math.min(this.maxHp,this.hp+e*8));break}}if(c>0){this.state!=="chase"&&(this.yaw=xn(this.yaw,l,e*5));let p=Math.sin(l)*c*e,x=Math.cos(l)*c*e,g=this.pos.x+p,m=this.pos.z+x;this.type!=="boss"&&Math.hypot(g,m)<38&&(p=0,x=0,c=0),Wi(this.pos,p,x,t.radius)}for(let p of It){if(p===this||p.dead)continue;let x=this.pos.x-p.pos.x,g=this.pos.z-p.pos.z,m=Math.hypot(x,g),y=t.radius+p.def.radius+.2;if(m<y&&m>.001){let _=(y-m)*.5;this.pos.x+=x/m*_,this.pos.z+=g/m*_}}if(!v.dead){let p=this.pos.x-v.pos.x,x=this.pos.z-v.pos.z,g=Math.hypot(p,x),m=t.radius+.45;g<m&&g>.001&&(this.pos.x=v.pos.x+p/g*m,this.pos.z=v.pos.z+x/g*m)}if(this.pos.y=nt(this.pos.x,this.pos.z),this.speed=yt(this.speed,c,Math.min(1,e*8)),n.position.copy(this.pos),n.rotation.y=this.yaw,this.mesh.kind==="qrig")this.mesh.update(e,this.speed,f);else if(this.mesh.kind==="quad")uh(this.mesh,e,this.speed,f);else if(this.mesh.kind==="rig"){this.atk&&(this.atk.t+=e),this.hitstop=Math.max(0,(this.hitstop||0)-e);let p=this.mesh.anim;p.timeScale=this.hitstop>0?.08:1;let x=this.state==="windup"||this.state==="recover",g=p.update(e,x?0:this.speed/this.mesh.scale*1.12);if(g.x||g.z){let m=this.mesh.group.scale.x,y=Math.cos(this.yaw),_=Math.sin(this.yaw);Wi(this.pos,(g.x*y+g.z*_)*m,(-g.x*_+g.z*y)*m,t.radius),n.position.copy(this.pos)}}else dc(this.mesh,e,this.state==="windup"||this.state==="recover"?0:this.speed,f);this.type==="ghoul"&&mt>.75&&this.tag==="wild"&&(this.hp-=e*15,Math.random()<e*8&&Qt(this.pos.x,this.pos.y+1.2,this.pos.z,16747050,2,1,2),this.hp<=0&&wc(this,!0))}startAttackAnim(){let e={Hema_Zornhau:{hit:.5333333333333333,rec:"Hema_Zornhau_Rec"},Hema_Zwerchhau_G:{hit:.43333333333333335,rec:"Hema_Zwerchhau_Rec"},Hema_Scheitelhau_G:{hit:.5,rec:"Hema_Scheitelhau_Rec"},Hema_Stich:{hit:.3333333333333333,rec:null}},t;this.type==="boss"?t=this.slamPhase?"Hema_Scheitelhau_G":zn(["Hema_Zwerchhau_G","Hema_Zornhau"]):this.type==="leader"?t=zn(["Hema_Zornhau","Hema_Scheitelhau_G","Hema_Zwerchhau_G","Hema_Stich"]):this.type==="ghoul"?t=zn(["Hema_Zornhau","Hema_Scheitelhau_G"]):t=zn(["Hema_Zornhau","Hema_Zwerchhau_G","Hema_Stich"]);let n=e[t],s=this.slamPhase?1.1:this.def.windup,r=Math.min(1.5,Math.max(.42,n.hit/s));this.mesh.anim.play(t,{speed:r,fadeIn:.12,fadeOut:.3,auto:!n.rec}),this.atk={t:0,end:this.mesh.anim.duration(t)/r,rec:n.rec,recEnd:0,recStarted:!1}}strike(e,t){let n=this.def;if(this.type==="boss"&&this.slamPhase){if(et.slam(),Ta(.6),pp(),Qt(this.pos.x,this.pos.y+.3,this.pos.z,6969930,24,9,4,.8,1.6),Qt(this.pos.x,this.pos.y+.3,this.pos.z,16738842,12,7,5,.6,1.2),e<5.8&&Zf(n.dmg*1.3,this,14),!this.summoned&&this.hp<this.maxHp*.5){this.summoned=!0;for(let r=0;r<3;r++){let a=r*2.1;Rr("ghoul",this.pos.x+Math.sin(a)*6,this.pos.z+Math.cos(a)*6,"boss",{x:ue.ruins.x,z:ue.ruins.z}).state="chase"}ct("Rycerz Popio\u0142u przyzywa upiory!","e")}return}this.mesh.kind==="quad"||this.mesh.kind==="qrig"?et.bark():et.swing();let s=this.type==="boss"?1.4:1;e<n.range+.6&&Math.abs(Lr(t,this.yaw))<s&&Zf(n.dmg,this,this.type==="boss"?9:4)}};function Rr(i,e,t,n,s){let r=new iu(i,e,t,n,s);return It.push(r),r}var fp=new At({color:16726554,transparent:!0,opacity:.5,depthWrite:!1,side:Jt}),bs=new de(new ra(5,5.8,40),fp);bs.rotation.x=-Math.PI/2;bs.visible=!1;dt.add(bs);var bc=null;function Gv(i){bc=i,bs.visible=!0,bs.position.set(i.pos.x,i.pos.y+.15,i.pos.z)}function pp(){bs.visible=!1,bc=null}function Vv(i){i.introDone||(i.introDone=!0,ct("Rycerz Popio\u0142u powstaje z proch\xF3w!","e",4),et.evil(),Ta(.5),Qt(i.pos.x,i.pos.y+2,i.pos.z,16738842,30,6,6,1,1.5))}function lu(i,e,t,n,s,r){if(i.dead||i.state==="surrender"||i.state==="leaving")return;e=Math.round(e),i.hp-=e,i.flash=1;let a=i.type==="boss"?.08:i.type==="leader"?.5:1;if(i.kx+=n*r*a,i.kz+=s*r*a,Ea(""+e,i.pos.x,i.pos.y+2.2*(i.type==="boss"?2:1),i.pos.z,t?"crit":"dmg",.9),Qt(i.pos.x,i.pos.y+1.2,i.pos.z,i.type==="ghoul"?8978346:i.type==="boss"?16738842:11147802,t?10:5,3,2.5,.45),(i.state==="idle"||i.state==="return")&&(i.state="chase"),i.mesh.kind==="rig"&&(i.hitstop=.07),i.mesh.kind==="rig"&&i.state!=="windup"&&i.type!=="boss"&&i.hp>0&&(i.mesh.anim.play(i.mesh.armed?"Hema_Hit":"Hit",{speed:1.3,fadeIn:.04,fadeOut:.18}),i.state==="recover"&&(i.state="chase",i.atk=null,i.atkCd=Math.max(i.atkCd,.5))),vs=i,nu=5,i.type==="leader"&&!I.flags.leaderFate&&i.hp<i.maxHp*.25){i.hp=Math.ceil(i.maxHp*.25),i.state="surrender",i.wind=0,i.flash=0,i.setFlash(),i.mesh.kind==="rig"&&i.mesh.drop&&(i.mesh.anim.stopAll(),i.mesh.drop.start()),ct("Wronis\u0142aw rzuca miecz i b\u0142aga o lito\u015B\u0107! Podejd\u017A, by zdecydowa\u0107 o jego losie.","q",5),et.quest();return}i.hp<=0&&wc(i)}function wc(i,e=!1){if(i.dead)return;if(i.dead=!0,i.deadT=0,i.hp=0,i.flash=0,i.wind=0,i.setFlash(),i.mesh.kind==="rig"&&(i.mesh.anim.play("Death",{hold:!0,fadeIn:.08}),i.mesh.drop&&i.mesh.drop.start()),bc===i&&pp(),e){i.remove=!0;return}I.kills++;let t=i.def,n=Math.min(8,Math.max(2,Math.round(t.xp/12)));for(let r=0;r<n;r++)jf("xp",i.pos.x,i.pos.y+1,i.pos.z,t.xp/n);let s=Math.round(gt(t.gold[0],t.gold[1]));if(s>0){let r=Math.min(8,Math.max(1,Math.round(s/8)));for(let a=0;a<r;a++)jf("gold",i.pos.x,i.pos.y+1,i.pos.z,s/r)}if(Es(t.renown,!0),i.tag==="camp"&&(I.campKills++,I.campKills<4&&ct(`Bandyci w obozie: ${I.campKills}/4`,""),su()),i.type==="boss"){I.flags.bossDead=!0,I.quests.ruins=2,I.tracked="ruins",et.victory(),Ta(.8),Qt(i.pos.x,i.pos.y+2,i.pos.z,16764992,40,8,8,1.4,1.5),Ke.runeMat&&Ke.runeMat.emissive.set(4235519);for(let r of It)r.tag==="boss"&&!r.dead&&wc(r);setTimeout(UM,2500),Ht()}}function su(){!I.flags.campCleared&&I.campKills>=4&&I.flags.leaderFate&&(I.flags.campCleared=!0,I.quests.bandits<1&&(I.quests.bandits=1),I.tracked="bandits",ct("Ob\xF3z bandyt\xF3w rozbity! Wr\xF3\u0107 do So\u0142tysa Bogumi\u0142a.","q",4),et.quest(),Ht())}var ys=0;vt.group.position.copy(v.pos);vt.group.rotation.y=v.yaw;function Ta(i){ys=Math.max(ys,i)}var fc=0;function Zf(i,e,t=4){if(!(v.dead||v.invuln>0||v.rollT>0||Gt)&&!(v.act&&v.act.kind==="dodge"&&v.act.t>v.act.inv0&&v.act.t<v.act.inv1)){if(i=Math.round(i*_c[I.armor].mul*gt(.9,1.1)),v.hp-=i,v.invuln=.3,v.lastHurt=Hn.elapsedTime,fc=1,et.hurt(),Ta(.25),Ea("-"+i,v.pos.x,v.pos.y+2.2,v.pos.z,"hurt",.9),e){let n=v.pos.x-e.pos.x,s=v.pos.z-e.pos.z,r=Math.hypot(n,s)||1;v.kvx=n/r*t,v.kvz=s/r*t}if(v.attackT>=0&&Math.random()<.4&&(v.attackT=-1),Ae&&v.hp>0){let n=v.act?v.act.kind:null;(!n||n==="rec"||n==="hit"||n==="attack"&&!v.act.hitDone&&Math.random()<.35)&&As("hit","Hema_Hit",1.15,{fadeIn:.05,fadeOut:.2})}v.hp<=0&&(v.hp=0,v.dead=!0,v.deadT=0,et.death(),Ae&&(v.act=null,Ae.anim.play("Death",{hold:!0,fadeIn:.12}),Ae.drop.start()))}}function Wv(){Ee("death").style.display="none";let i=Math.floor(I.xp*.25);if(I.xp-=i,I.scars++,v.dead=!1,v.hp=En(),v.mana=$n(),v.pos.set(0,2.5,9),vt.group.rotation.set(0,0,0),Ae){Ae.anim.stopAll(),Ae.drop.stop(),v.act=null;let e=gs(Ae.root,"weapon_r");e&&Ae.wbind&&(e.position.copy(Ae.wbind.p),e.quaternion.copy(Ae.wbind.q),e.scale.copy(Ae.wbind.s))}Ut.pos.set(2,2.5,11);for(let e of It)!e.dead&&e.state!=="surrender"&&(e.state="return",e.hp=e.maxHp);Jn(),i>0&&ct(`Utracono ${i} do\u015Bwiadczenia.`,"e"),Gt=!1,Ht()}var pc=[],Xv=new xr(.16,0),qv=new Ft(.14,.14,.05,8),Yv=new At({color:9367807}),Zv=new Bt({color:16763955,emissive:6702080});function jf(i,e,t,n,s){let r=new de(i==="xp"?Xv:qv,i==="xp"?Yv:Zv);r.position.set(e,t,n),dt.add(r);let a=Math.random()*6.28,o=gt(1.5,3.5);pc.push({m:r,kind:i,amount:s,vx:Math.cos(a)*o,vz:Math.sin(a)*o,vy:gt(3,6),t:0})}function jv(i){for(let e=pc.length-1;e>=0;e--){let t=pc[e];t.t+=i;let n=t.m,s=v.pos.x-n.position.x,r=v.pos.y+1-n.position.y,a=v.pos.z-n.position.z,o=Math.hypot(s,r,a);if(t.t>.7&&o<9&&!v.dead){let l=14/Math.max(.5,o);t.vx=yt(t.vx,s/o*12,Math.min(1,i*l)),t.vy=yt(t.vy,r/o*12,Math.min(1,i*l)),t.vz=yt(t.vz,a/o*12,Math.min(1,i*l))}else t.vy-=12*i,t.vx*=Math.exp(-2*i),t.vz*=Math.exp(-2*i);n.position.x+=t.vx*i,n.position.y+=t.vy*i,n.position.z+=t.vz*i;let c=nt(n.position.x,n.position.z)+.2;n.position.y<c&&(n.position.y=c,t.vy=Math.abs(t.vy)*.4),n.rotation.y+=i*4,(o<1.1&&t.t>.5||t.t>25)&&(t.t<=25&&(t.kind==="xp"?(I.xp+=Math.round(t.amount),et.pickup()):(I.gold+=Math.round(t.amount),et.coin())),dt.remove(n),pc.splice(e,1))}}var mc=[],Kf=new Yn(.28,0),Kv=new At({color:10148095}),$v=new At({color:16777215});function mp(){if(!(v.dead||Gt)){if(v.mana<20){ct("Za ma\u0142o many!","g",1.5);return}if(Ae){if(v.act&&v.act.lock)return;v.mana-=20;let i=Jv();i&&(v.yaw=Math.atan2(i.pos.x-v.pos.x,i.pos.z-v.pos.z)),As("cast","Hema_Cast",1.25,{fadeIn:.08,fadeOut:.25});return}v.mana-=20,v.castT=.4,gp()}}function Jv(){let i=null,e=1e9;for(let t of It){if(t.dead||t.state==="surrender"||t.state==="leaving")continue;let n=hn(t.pos,v.pos);if(n>26)continue;let s=Math.abs(Lr(Math.atan2(t.pos.x-v.pos.x,t.pos.z-v.pos.z),v.yaw)),r=n+s*12;r<e&&(e=r,i=t)}return i}function gp(){let i=null,e=1e9;for(let s of It){if(s.dead||s.state==="surrender"||s.state==="leaving")continue;let r=hn(s.pos,v.pos);if(r>26)continue;let a=Math.abs(Lr(Math.atan2(s.pos.x-v.pos.x,s.pos.z-v.pos.z),v.yaw)),o=r+a*12;o<e&&(e=o,i=s)}i&&!Ae&&(v.yaw=Math.atan2(i.pos.x-v.pos.x,i.pos.z-v.pos.z));let t=new de(Kf,Kv),n=new de(Kf,$v);n.scale.setScalar(.5),t.add(n),t.position.set(v.pos.x+Math.sin(v.yaw)*.8,v.pos.y+1.5,v.pos.z+Math.cos(v.yaw)*.8),Ae&&Ae.handL&&(Ae.root.updateMatrixWorld(!0),Ae.handL.getWorldPosition(t.position),t.position.addScaledVector(new L(Math.sin(v.yaw),0,Math.cos(v.yaw)),.15)),dt.add(t),mc.push({m:t,vx:Math.sin(v.yaw)*18,vy:0,vz:Math.cos(v.yaw)*18,target:i,life:2.2,dmg:18+12*I.stats.magia}),et.magic()}function Qv(i){for(let e=mc.length-1;e>=0;e--){let t=mc[e];t.life-=i;let n=t.m;if(t.target&&!t.target.dead){let r=t.target,a=r.pos.x-n.position.x,o=r.pos.y+1.2*(r.type==="boss"?2:1)-n.position.y,c=r.pos.z-n.position.z,l=Math.hypot(a,o,c)||1,h=Math.min(1,i*6);t.vx=yt(t.vx,a/l*20,h),t.vy=yt(t.vy,o/l*20,h),t.vz=yt(t.vz,c/l*20,h)}n.position.x+=t.vx*i,n.position.y+=t.vy*i,n.position.z+=t.vz*i,n.rotation.x+=i*10,n.rotation.y+=i*8,Math.random()<.6&&Qt(n.position.x,n.position.y,n.position.z,10148095,1,.5,.5,.3,.6);let s=!1;for(let r of It){if(r.dead||r.state==="surrender"||r.state==="leaving")continue;let a=r.type==="boss"?2:1;if(Math.hypot(r.pos.x-n.position.x,r.pos.y+1.1*a-n.position.y,r.pos.z-n.position.z)<r.def.radius+.6){let o=Math.hypot(t.vx,t.vz)||1;lu(r,t.dmg*gt(.9,1.1),!1,t.vx/o,t.vz/o,5),s=!0;break}}n.position.y<nt(n.position.x,n.position.z)&&(s=!0),(s||t.life<=0)&&(Qt(n.position.x,n.position.y,n.position.z,10148095,10,4,3,.5),s&&et.boom(),dt.remove(n),mc.splice(e,1))}}var jn={jx:0,jy:0,keys:{}},Mi={id:null,ox:0,oy:0},Bn={id:null,x:0,y:0},Dn=0,vi=.42,wa=8,va=8,Cr=Ee("joy"),xp=Ee("knob"),Pr=Ee("touch");Pr.addEventListener("pointerdown",i=>{if(ps(),!Gt){i.clientX<window.innerWidth*.42&&Mi.id===null&&i.pointerType!=="mouse"?(Mi.id=i.pointerId,Mi.ox=i.clientX,Mi.oy=i.clientY,Cr.style.left=i.clientX+"px",Cr.style.top=i.clientY+"px",Cr.style.opacity=1):Bn.id===null&&(Bn.id=i.pointerId,Bn.x=i.clientX,Bn.y=i.clientY);try{Pr.setPointerCapture(i.pointerId)}catch{}}});Pr.addEventListener("pointermove",i=>{if(i.pointerId===Mi.id){let e=i.clientX-Mi.ox,t=i.clientY-Mi.oy,n=Math.hypot(e,t),s=55;n>s&&(e=e/n*s,t=t/n*s),xp.style.transform=`translate(${e}px,${t}px)`,jn.jx=e/s,jn.jy=-t/s}else if(i.pointerId===Bn.id){let e=i.clientX-Bn.x,t=i.clientY-Bn.y;Bn.x=i.clientX,Bn.y=i.clientY,Dn-=e*.0065,vi=Xi(vi+t*.0045,.08,1.25)}});function _p(i){i.pointerId===Mi.id&&(Mi.id=null,jn.jx=0,jn.jy=0,xp.style.transform="",Cr.style.left="110px",Cr.style.top="calc(100% - 110px)",Cr.style.opacity=.5),i.pointerId===Bn.id&&(Bn.id=null)}Pr.addEventListener("pointerup",_p);Pr.addEventListener("pointercancel",_p);Pr.addEventListener("wheel",i=>{wa=Xi(wa+i.deltaY*.01,4,14)});function Aa(i,e,t=!1){let n=Ee(i),s=null;n.addEventListener("pointerdown",a=>{a.preventDefault(),a.stopPropagation(),ps(),n.classList.add("on"),e(),t&&(clearInterval(s),s=setInterval(e,200))});let r=()=>{n.classList.remove("on"),clearInterval(s)};n.addEventListener("pointerup",r),n.addEventListener("pointercancel",r),n.addEventListener("pointerleave",r)}Aa("bAtk",()=>yp(),!0);Aa("bMag",()=>mp());Aa("bRoll",()=>wp());Aa("bPot",()=>Sp());Aa("bUse",()=>Tp());window.addEventListener("keydown",i=>{if(jn.keys[i.code]=!0,ps(),!i.repeat){if(i.code==="KeyJ"&&yp(),i.code==="KeyK"&&mp(),i.code==="Space"&&wp(),i.code==="KeyE")if(Ca){let e=Ee("dOpts").querySelector("button");e&&e.click()}else Tp();i.code==="KeyQ"&&Sp(),(i.code==="Escape"||i.code==="KeyM")&&Tc()}});window.addEventListener("keyup",i=>{jn.keys[i.code]=!1});function Ra(i){let e=null,t=i;for(let n of It){if(n.dead||n.state==="surrender"||n.state==="leaving")continue;let s=hn(n.pos,v.pos);s<t&&(t=s,e=n)}return e}function As(i,e,t,n={}){var s,r;return Ae.anim.play(e,{speed:t,fadeIn:(s=n.fadeIn)!=null?s:.1,fadeOut:(r=n.fadeOut)!=null?r:.25,auto:n.auto!==!1}),v.act=Object.assign({kind:i,clip:e,t:0,speed:t,dur:Ae.anim.duration(e)/t,lock:!0},n.extra||{}),v.act}function yp(){if(v.dead||Gt)return;if(!Ae){if(v.rollT>0)return;if(v.attackT>=0){v.comboQ=!0;return}vp();return}let i=v.act;if(i&&i.kind==="attack"){i.i<2&&(i.queued=!0);return}i&&i.lock&&i.kind!=="hit"||Mp(0,!1)}function vp(){v.combo=v.comboTimer>0?(v.combo+1)%3:0,v.attackT=0,v.atkHit=!1,v.comboQ=!1,v.swung=!1;let i=Ra(5.5);i&&(v.yaw=Math.atan2(i.pos.x-v.pos.x,i.pos.z-v.pos.z))}function Mp(i,e){let t=lp[i],n=Ra(6.5);n&&(v.yaw=Math.atan2(n.pos.x-v.pos.x,n.pos.z-v.pos.z)),As("attack",t.clip,hp,{fadeIn:e?.07:.12,auto:!1,extra:{i,hitDone:!1,swung:!1,queued:!1}}),v.combo=i}function bp(i){let e=xc[I.sword].dmg+5*I.stats.sila,t=i?i.dmg:v.combo===2?1.6:1,n=i?i.name==="Scheitelhau":v.combo===2,s=!1;for(let r of It){if(r.dead||r.state==="surrender"||r.state==="leaving")continue;let a=r.pos.x-v.pos.x,o=r.pos.z-v.pos.z,c=Math.hypot(a,o);if(c>2.9+r.def.radius||Math.abs(Lr(Math.atan2(a,o),v.yaw))>1.2&&c>1.2)continue;let l=e*t*gt(.9,1.1),h=Math.random()<.06+.05*I.stats.zrecznosc;h&&(l*=2),lu(r,l,h,a/(c||1),o/(c||1),n?7:3.5),s=!0,h&&et.crit()}s&&(et.hit(),Ta(n?.25:.12),v.hitstop=n?.09:.06)}function wp(){if(v.dead||Gt||v.rollCd>0)return;if(Ae){if(v.act&&(v.act.kind==="drink"||v.act.kind==="interact"||v.act.kind==="dodge"))return;let s=ru(),r=Ra(8),a="Hema_Dodge_Back";if(r){if(v.yaw=Math.atan2(r.pos.x-v.pos.x,r.pos.z-v.pos.z),s.m>.2){let c=Lr(Math.atan2(s.x,s.z),v.yaw);Math.abs(c)>2.3?a="Hema_Dodge_Back":Math.abs(c)<.6?a=Math.random()<.5?"Hema_Dodge_Left":"Hema_Dodge_Right":a=c>0?"Hema_Dodge_Left":"Hema_Dodge_Right"}}else s.m>.2&&(v.yaw=Math.atan2(s.x,s.z)),a="Hema_Dodge_Fwd";let o=As("dodge",a,1.3,{fadeIn:.05,fadeOut:.2,extra:{inv0:.04,inv1:.36}});v.rollCd=o.dur+.08,et.roll(),Qt(v.pos.x,v.pos.y+.2,v.pos.z,10127978,5,2,1,.4);return}let i=0,e=0,t=ru();t.m>.1?(i=t.x,e=t.z):(i=Math.sin(v.yaw),e=Math.cos(v.yaw));let n=Math.hypot(i,e)||1;v.rollDir={x:i/n,z:e/n},v.yaw=Math.atan2(i,e),v.rollT=up,v.rollCd=.85,v.attackT=-1,et.roll(),Qt(v.pos.x,v.pos.y+.2,v.pos.z,10127978,5,2,1,.4)}function Sp(){if(!(v.dead||Gt)){if(I.potions<=0){ct("Nie masz mikstur. Kup je u kupca Mirka.","",2);return}if(v.hp>=En()){ct("Zdrowie jest pe\u0142ne.","",1.5);return}if(Ae){if(v.act&&v.act.lock)return;I.potions--,As("drink","Hema_Drink",1.15,{fadeIn:.12,fadeOut:.25,extra:{healed:!1}});return}I.potions--,Ep()}}function Ep(){let i=60+10*I.stats.sila;v.hp=Math.min(En(),v.hp+i),et.drink(),Ea("+"+i,v.pos.x,v.pos.y+2.2,v.pos.z,"heal"),Qt(v.pos.x,v.pos.y+1,v.pos.z,16732240,10,2,3,.6)}function $f(i){if(!Ae){i();return}v.act&&v.act.lock||As("interact","Hema_Interact",1.2,{fadeIn:.12,fadeOut:.25,extra:{cb:i,done:!1}})}function eM(i,e){let t=v.act;if(t)switch(t.t+=i,t.kind){case"attack":{let n=lp[t.i],s=n.hit/hp;if(!t.swung&&t.t>=s-.12&&(t.swung=!0,et.swing()),t.t<s-.06){let r=Ra(6.5);r&&(v.yaw=xn(v.yaw,Math.atan2(r.pos.x-v.pos.x,r.pos.z-v.pos.z),i*5))}!t.hitDone&&t.t>=s&&(t.hitDone=!0,bp(n)),t.t>=t.dur-.015&&(t.queued&&t.i<2?Mp(t.i+1,!0):As("rec",n.rec,1.1,{fadeIn:.04,fadeOut:.25,extra:{lock:!1}}));break}case"rec":e.m>.3&&t.t>.12?(Ae.anim.release(.3),v.act=null):t.t>=t.dur&&(v.act=null);break;case"dodge":t.t>=t.dur*.78&&(t.lock=!1),(t.t>=t.dur||!t.lock&&e.m>.3)&&(t.t<t.dur&&Ae.anim.release(.25),v.act=null);break;case"cast":!t.fired&&t.t>=9/30/t.speed&&(t.fired=!0,gp()),t.t>=t.dur*.8&&(t.lock=!1),(t.t>=t.dur||!t.lock&&e.m>.3)&&(t.t<t.dur&&Ae.anim.release(.25),v.act=null);break;case"drink":{let n=t.t*t.speed*30;Ae.flask&&(Ae.flask.visible=n>6&&n<44),!t.healed&&n>=26&&(t.healed=!0,Ep()),t.t>=t.dur&&(Ae.flask&&(Ae.flask.visible=!1),v.act=null);break}case"interact":!t.done&&t.t*t.speed*30>=15&&(t.done=!0,t.cb&&t.cb()),t.t>=t.dur&&(v.act=null);break;case"hit":t.t>=t.dur*.7&&(t.lock=!1),t.t>=t.dur&&(v.act=null);break}}function ru(){let i=jn.jx,e=jn.jy,t=jn.keys;(t.KeyW||t.ArrowUp)&&(e+=1),(t.KeyS||t.ArrowDown)&&(e-=1),(t.KeyA||t.ArrowLeft)&&(i-=1),(t.KeyD||t.ArrowRight)&&(i+=1);let n=Math.min(1,Math.hypot(i,e)),s=-Math.sin(Dn),r=-Math.cos(Dn),a=-r,o=s,c=s*e+a*i,l=r*e+o*i,h=Math.hypot(c,l);return h>0&&(c/=h,l/=h),{x:c,z:l,m:n}}function tM(i,e,t){eM(i,e);let n=v.act&&v.act.lock,s=0,r=0;!n&&e.m>.05&&(v.act&&v.act.kind==="rec"&&(Ae.anim.release(.3),v.act=null),s=e.x*t*e.m,r=e.z*t*e.m,v.yaw=xn(v.yaw,Math.atan2(e.x,e.z),i*10)),s+=v.kvx,r+=v.kvz;let a=Math.exp(-8*i);v.kvx*=a,v.kvz*=a,v.speed=yt(v.speed,Math.hypot(s-v.kvx,r-v.kvz),Math.min(1,i*10));let o=Ae.root;o.rotation.y=v.yaw,v.hitstop=Math.max(0,(v.hitstop||0)-i),Ae.anim.timeScale=v.hitstop>0?.08:1;let c=Ae.anim.update(i,n?0:v.speed/yc),l=o.scale.x,h=Math.cos(v.yaw),u=Math.sin(v.yaw);s+=(c.x*h+c.z*u)*l/Math.max(i,1e-4),r+=(-c.x*u+c.z*h)*l/Math.max(i,1e-4),Wi(v.pos,s*i,r*i,.45),o.position.copy(v.pos),v.pos.y<0&&(o.position.y=Math.max(v.pos.y,-.6)),v.mana=Math.min($n(),v.mana+i*(5+I.stats.magia)),Hn.elapsedTime-v.lastHurt>6&&(v.hp=Math.min(En(),v.hp+i*2.5)),o.visible=!(v.invuln>0&&Math.floor(v.invuln*30)%2===0),Ms.rotation.z+=i}function nM(i){if(v.dead){v.deadT+=i,Ae?(Ae.anim.isPlaying("Death")||(Ae.anim.play("Death",{hold:!0,fadeIn:.15}),Ae.drop.active||Ae.drop.start()),Ae.anim.timeScale=1,Ae.anim.update(i,0),Ae.drop.update(i,v.pos.y)):vt.group.rotation.x=-Math.min(1,v.deadT*2)*Math.PI/2,v.deadT>2.2&&Ee("death").style.display!=="flex"&&(Ee("death").style.display="flex",Gt=!0);return}v.rollCd-=i,v.invuln-=i,v.comboTimer-=i,v.castT-=i;let e=ru(),t=6.2+.45*I.stats.zrecznosc,n=0,s=0;if(Ae){tM(i,e,t);return}if(v.rollT>0){v.rollT-=i;let o=12+I.stats.zrecznosc;n=v.rollDir.x*o,s=v.rollDir.z*o}else if(v.attackT>=0){v.attackT+=i/.5,!v.swung&&v.attackT>=.3&&(v.swung=!0,et.swing()),!v.atkHit&&v.attackT>=.45&&(v.atkHit=!0,bp(null)),e.m>.1&&(n=e.x*t*.15,s=e.z*t*.15);let o=v.attackT>.3&&v.attackT<.5?v.combo===2?5:3.5:0;n+=Math.sin(v.yaw)*o,s+=Math.cos(v.yaw)*o,v.comboQ&&v.attackT>=.6?vp():v.attackT>=Xf&&(v.attackT=-1,v.comboTimer=.5)}else e.m>.05&&(n=e.x*t*e.m,s=e.z*t*e.m,v.yaw=xn(v.yaw,Math.atan2(e.x,e.z),i*12));n+=v.kvx,s+=v.kvz;let r=Math.exp(-8*i);v.kvx*=r,v.kvz*=r,Wi(v.pos,n*i,s*i,.45),v.speed=yt(v.speed,Math.hypot(n,s),Math.min(1,i*10)),v.mana=Math.min($n(),v.mana+i*(5+I.stats.magia)),Hn.elapsedTime-v.lastHurt>6&&(v.hp=Math.min(En(),v.hp+i*2.5));let a=vt.group;if(a.position.copy(v.pos),v.pos.y<0&&(a.position.y=Math.max(v.pos.y,-.6)),a.rotation.y=v.yaw,v.rollT>0){let o=1-v.rollT/up;vt.body.rotation.x=o*Math.PI*2,vt.body.position.y=Math.sin(o*Math.PI)*.5-.3,vt.legL.rotation.x=-1.2,vt.legR.rotation.x=-1.2,vt.armL.rotation.x=-1.5,vt.armR.rotation.x=-1.5}else lh(vt,i,v.speed,v.attackT>=0?Math.min(1,v.attackT/Xf):-1,{cast:v.castT>0});a.visible=!(v.invuln>0&&Math.floor(v.invuln*30)%2===0&&v.rollT<=0),Ms.rotation.z+=i}function iM(i){let e=Ut,t=e.mesh.group;if(e.cd-=i,e.barkCd-=i,hn(e.pos,v.pos)>45&&(e.pos.set(v.pos.x-Math.sin(v.yaw)*2,0,v.pos.z-Math.cos(v.yaw)*2),e.pos.y=nt(e.pos.x,e.pos.z)),!e.target||e.target.dead||e.target.state==="surrender"||hn(e.target.pos,v.pos)>14){e.target=null;let u=Ra(11);u&&u.state!=="idle"&&(e.target=u)}let s,r,a=0,o=2.5;e.target&&!v.dead?(s=e.target.pos.x,r=e.target.pos.z,o=e.target.def.radius+.9):(s=v.pos.x-Math.sin(v.yaw+.8)*2.2,r=v.pos.z-Math.cos(v.yaw+.8)*2.2,o=.8);let c=s-e.pos.x,l=r-e.pos.z,h=Math.hypot(c,l);e.atkT>=0?(e.atkT+=i/.4,e.atkT>=.5&&!e.hitDone&&e.target&&(e.hitDone=!0,lu(e.target,5+I.renown*.05,!1,c/(h||1),l/(h||1),1.5),et.bark()),e.atkT>=1&&(e.atkT=-1)):h>o?(a=Math.min(8.5,h*2.5+(e.target?4:0)),e.yaw=xn(e.yaw,Math.atan2(c,l),i*10),Wi(e.pos,Math.sin(e.yaw)*a*i,Math.cos(e.yaw)*a*i,.3)):e.target&&e.cd<=0?(e.atkT=0,e.hitDone=!1,e.cd=1.3,e.yaw=Math.atan2(c,l)):e.target||(e.yaw=xn(e.yaw,Math.atan2(v.pos.x-e.pos.x,v.pos.z-e.pos.z),i*3)),e.speed=yt(e.speed,a,Math.min(1,i*8)),e.pos.y=nt(e.pos.x,e.pos.z),t.position.copy(e.pos),e.pos.y<0&&(t.position.y=Math.max(e.pos.y,-.3)),t.rotation.y=e.yaw,e.mesh.kind==="qrig"?e.mesh.update(i,e.speed,e.atkT):uh(e.mesh,i,e.speed,e.atkT)}var ws=[];function Rs(i,e,t,n,s={}){let r=fs(n);dt.add(r.group);let a={id:i,name:e,mesh:r,look:n,rig:s.rig,pos:new L(t.x,nt(t.x,t.z),t.z),home:{x:t.x,z:t.z},yaw:Math.atan2(-t.x,-t.z),wander:s.wander||0,target:null,wt:gt(1,5),speed:0,bubbleCd:gt(2,8),talk:s.talk,flee:0};return ws.push(a),a}var Zh=Rs("elder","So\u0142tys Bogumi\u0142",Ke.spots.elder,{shirt:6965802,pants:3815994,hair:14540253,beard:15658734,skin:14198912},{talk:gM,rig:{model:"man",hair:["Hair_SimpleParted","Hair_Beard"],tint:{hair:14211288,outfit:13152400}}}),sM=Rs("herb","Zielarka Jagna",Ke.spots.herbalist,{shirt:4876858,pants:3811866,hair:9067050,dress:3824170,longHair:!0},{talk:xM,rig:{model:"woman",hair:["Hair_Long"],tint:{hair:6961690,outfit:11061392}}}),ob=Rs("merch","Kupiec Mirek",Ke.spots.merchant,{shirt:9071146,pants:4864554,hair:2759178,beard:2759178},{talk:gc,rig:{model:"man",hair:["Hair_Buzzed","Hair_Beard"],tint:{hair:2759184,outfit:15255696}}}),rM=Rs("lender","Lichwiarz Grzegorz",Ke.spots.lender,{shirt:5904954,pants:2763306,hair:4868682,skin:15253664},{talk:yM,rig:{model:"man",hair:["Hair_SimpleParted"],tint:{hair:3815994,outfit:11571384}}}),aM=Rs("widow","Wdowa Halina",Ke.spots.widow,{shirt:3816010,pants:2763306,hair:5917242,dress:2763322,longHair:!0},{talk:vM,rig:{model:"woman",hair:["Hair_Buns"],tint:{hair:2760728,outfit:8949928}}}),cb=Rs("alch","Alchemik Kruk",Ke.spots.alchemist,{shirt:2759226,pants:1710634,hood:1706538,staff:6750088},{talk:_M,rig:{model:"bandit",hideSword:!0,tint:{outfit:8018586},eyeGlow:6750088}}),Jf=[{shirt:10508858,pants:4864554,hair:3811866},{shirt:5929626,pants:3815994,hair:13148240,dress:4876938,longHair:!0},{shirt:8026682,pants:4864554,hair:1710618},{shirt:10111594,pants:3811882,hair:6961690,dress:9058906,longHair:!0},{shirt:4876874,pants:5917242,hair:9079434,beard:9079434},{shirt:11569754,pants:3815978,hair:4860442,scale:.7},{shirt:6969994,pants:3815994,hair:10512954,dress:5917306,longHair:!0},{shirt:3824234,pants:2763306,hair:2759178,scale:.75}];Jf.forEach((i,e)=>{let t=e/Jf.length*Math.PI*2;Rs("v"+e,"Mieszkaniec",{x:Math.sin(t)*9,z:Math.cos(t)*9},i,{wander:1})});var _a={hero:["Nasz bohater!","Witaj, dobry rycerzu!","\u2764","Niech ci\u0119 bogowie strzeg\u0105!","Dzieci o tobie m\xF3wi\u0105!"],evil:["Uciekajcie!","To ten okrutnik\u2026","Nie patrz mu w oczy!","Prosz\u0119, nie krzywd\u017A mnie!"],famous:["To ten s\u0142ynny rycerz!","S\u0142ysza\u0142am o tobie!","Opowiesz, jak pokona\u0142e\u015B bandyt\xF3w?"],neutral:["Dzie\u0144 dobry.","Hmm, obcy\u2026","\u0141adna dzi\u015B pogoda.","Uwa\u017Caj na drogach.","S\u0142ysza\u0142e\u015B o upiorach?"],night:["P\xF3\u017Ano ju\u017C\u2026","Nie wychod\u017A noc\u0105 za wie\u015B.","Ziewam\u2026"]};function oM(i){for(let e of ws){let t=e.mesh.group,n=hn(e.pos,v.pos);if(n>75){t.visible=!1;continue}t.visible=!0;let s=0;if(e.bubbleCd-=i,e.wander){if(I.morality<=-40&&n<7&&!v.dead&&(e.flee=2.5),e.flee>0){e.flee-=i;let a=e.pos.x-v.pos.x,o=e.pos.z-v.pos.z;e.yaw=xn(e.yaw,Math.atan2(a,o),i*8),s=4.5}else if(e.wt-=i,e.wt<=0&&(e.wt=gt(3,9),e.target=Math.random()<.7?(()=>{let a=Math.random()*6.28,o=gt(5,22);return{x:Math.sin(a)*o,z:Math.cos(a)*o}})():null),n<4&&(e.target=null,e.yaw=xn(e.yaw,Math.atan2(v.pos.x-e.pos.x,v.pos.z-e.pos.z),i*4)),e.target){let a=e.target.x-e.pos.x,o=e.target.z-e.pos.z;Math.hypot(a,o)>.8?(e.yaw=xn(e.yaw,Math.atan2(a,o),i*4),s=1.5):e.target=null}if(s>0){let a=e.pos.x+Math.sin(e.yaw)*s*i,o=e.pos.z+Math.cos(e.yaw)*s*i;Math.hypot(a,o)<30?Wi(e.pos,a-e.pos.x,o-e.pos.z,.4):(e.target=null,e.wt=0)}if(n<6&&e.bubbleCd<=0&&!v.dead){e.bubbleCd=gt(9,16);let a=_a.neutral;I.morality<=-40?a=_a.evil:I.morality>=35&&I.renown>=15?a=_a.hero:I.renown>=30?a=_a.famous:Ts&&(a=_a.night),Ea(a[Math.floor(Math.random()*a.length)],e.pos.x,e.pos.y+2.5,e.pos.z,"bubble",2.6,.15)}}else n<6?e.yaw=xn(e.yaw,Math.atan2(v.pos.x-e.pos.x,v.pos.z-e.pos.z),i*4):e.yaw=xn(e.yaw,Math.atan2(-e.home.x,-e.home.z),i*2);e.speed=yt(e.speed,s,Math.min(1,i*6)),t.position.copy(e.pos),t.rotation.y=e.yaw,dc(e.mesh,i,e.speed,-1,e.talk?{talk:n<4.5&&!v.dead}:{})}}var au=null;function cM(){let i=[];for(let t of ws)t.talk&&i.push({x:t.pos.x,z:t.pos.z,r:3.2,label:"Rozmawiaj",act:()=>t.talk(t)});if(It.some(t=>!t.dead&&t.state!=="idle"&&t.state!=="surrender"&&hn(t.pos,v.pos)<25)||i.push({x:Ut.pos.x,z:Ut.pos.z,r:1.6,label:"Pog\u0142aszcz Iskr\u0119",act:hM,low:!0}),I.quests.herbs>=0&&I.quests.herbs<2)for(let t of Ke.herbs)I.herbTaken[t.i]||i.push({x:t.x,z:t.z,r:2.4,label:"Zbierz ziele",act:()=>{Qf(t.x,t.z),$f(()=>uM(t))}});for(let t of Ke.chests)I.chestOpened[t.i]||i.push({x:t.x,z:t.z,r:2.4,label:"Otw\xF3rz skrzyni\u0119",act:()=>{Qf(t.x,t.z),$f(()=>dM(t))}});i.push({x:Ke.spots.house.x,z:Ke.spots.house.z,r:3,label:I.houseOwned?"Odpocznij w domu":"Dom na sprzeda\u017C",act:fM});for(let t of It)t.state==="surrender"&&i.push({x:t.pos.x,z:t.pos.z,r:3.2,label:"Zdecyduj o losie",act:()=>mM(t)});return i}function lM(){let i=null,e=1e9;if(!v.dead)for(let n of cM()){let s=Math.hypot(n.x-v.pos.x,n.z-v.pos.z)+(n.low?100:0);s<n.r+(n.low?100:0)&&s<e&&(e=s,i=n)}au=i;let t=Ee("bUse");i&&!Gt?(t.style.display="flex",t.textContent!==i.label&&(t.textContent=i.label)):t.style.display="none"}function Tp(){au&&!Gt&&!v.dead&&au.act()}function Qf(i,e){Ae&&!(v.act&&v.act.lock)&&(v.yaw=Math.atan2(i-v.pos.x,e-v.pos.z))}function hM(){et.bark(),I.flags.foxPets++,Ea("\u2764",Ut.pos.x,Ut.pos.y+1.2,Ut.pos.z,"heal",1.2),Qt(Ut.pos.x,Ut.pos.y+1,Ut.pos.z,16738954,6,1.5,2.5,.7),I.flags.foxPets===1&&ct("Iskra merda ogonem. B\u0119dzie walczy\u0107 u twojego boku.","g")}function uM(i){I.herbTaken[i.i]=!0,I.herbsHave++,i.group.visible=!1,et.pickup(),Qt(i.x,nt(i.x,i.z)+.6,i.z,8978414,10,2,3,.7),ct(`Ksi\u0119\u017Cycowe Ziele: ${Math.min(I.herbsHave,6)}/6`,I.herbsHave>=6?"q":""),I.herbsHave===6&&(ct(I.quests.herbs===1?"Masz do\u015B\u0107 ziela. Wr\xF3\u0107 do Zielarki Jagny.":"Masz do\u015B\u0107 ziela \u2014 kto\u015B mo\u017Ce go potrzebowa\u0107\u2026","q"),I.tracked="herbs")}function dM(i){I.chestOpened[i.i]=!0,i.lid.rotation.x=-1.9;let e=Math.round(gt(40,130));I.gold+=e;let t=`Skrzynia: ${e} z\u0142`;Math.random()<.6&&(I.potions++,t+=" i mikstura zdrowia");let n=40;I.xp+=n,et.coin(),Qt(i.x,nt(i.x,i.z)+.8,i.z,16763955,14,3,4,.8),ct(t+` (+${n} do\u015Bw.)`,"q"),Ht()}function fM(){I.houseOwned?Mt("Tw\xF3j dom","Ciep\u0142e \u0142\xF3\u017Cko czeka. Odpocz\u0105\u0107 do rana? (pe\u0142ne zdrowie i mana, zapis gry)",[{t:"\u015Apij do rana",f:pM},{t:"Nie teraz"}]):Mt("Dom na Wzg\xF3rzu","Przytulny dom z widokiem na Brzezin\u0119. W\u0142a\u015Bciciel wyjecha\u0142 do miasta. Z domu b\u0119dziesz mie\u0107 codzienny doch\xF3d z dzier\u017Cawy pola (40 z\u0142 dziennie) i miejsce na odpoczynek.",[{t:"Kup dom (800 z\u0142)",dis:I.gold<800,f:()=>{I.gold-=800,I.houseOwned=!0,Es(10),et.quest(),ct("Dom na Wzg\xF3rzu jest tw\xF3j!","q"),Ht()}},{t:"Odejd\u017A"}])}function pM(){let i=Ee("fade");i.style.opacity=1,Gt=!0,setTimeout(()=>{I.time>.27&&(I.day++,Ap()),I.time=.27,v.hp=En(),v.mana=$n(),Ht(),i.style.opacity=0,Gt=!1,ct(`Dzie\u0144 ${I.day}. Wypocz\u0119ty ruszasz dalej.`,"g")},1200)}function Ap(){I.houseOwned&&(I.gold+=40,ct("Doch\xF3d z domu: +40 z\u0142","q"))}function mM(i){Mt("Herszt Wronis\u0142aw","\u2014 Lito\u015Bci, rycerzu! Mam dzieci w Kamie\u0144cu\u2026 Przysi\u0119gam na wszystkie \u015Bwi\u0119to\u015Bci, \u017Ce odejd\u0119 i nikt ju\u017C nie us\u0142yszy o moich ludziach. We\u017A moje z\u0142oto, tylko daruj \u017Cycie!",[{t:"Oszcz\u0119d\u017A go (Dobro)",c:"good",f:()=>{I.flags.leaderFate="spared",Ss(25),I.gold+=60,ct("+60 z\u0142","q"),i.state="leaving",i.t=0,Es(5),su(),Ht()}},{t:"Wykonaj wyrok (Z\u0142o)",c:"evil",f:()=>{I.flags.leaderFate="killed",Ss(-25),i.state="chase",i.hp=1,i.def={...i.def,gold:[150,150]},wc(i),Qt(i.pos.x,i.pos.y+1.2,i.pos.z,11147802,18,4,3,.7),et.hit(),su(),Ht()}}])}function Ss(i){I.morality=Xi(I.morality+i,-100,100),i>0?(et.good(),ct(`Dobro +${i}`,"g"),Qt(v.pos.x,v.pos.y+1.5,v.pos.z,16769152,16,2,4,1)):(et.evil(),ct(`Z\u0142o ${i}`,"e"),Qt(v.pos.x,v.pos.y+1.5,v.pos.z,11145232,16,2,4,1)),Jn()}function Es(i,e=!1){I.renown+=i,e||ct(`S\u0142awa +${i}`,"q")}function Sc(){let i=I.morality;return i>=70?"\u015Awietlisty Obro\u0144ca":i>=30?"Prawy Rycerz":i>-30?"W\u0119drowny Rycerz":i>-70?"Okrutny Najemnik":"Mroczny Tyran"}var Ca=!1,Gt=!0;function Mt(i,e,t=[]){Ca=!0,Gt=!0,Ee("dName").textContent=i,Ee("dText").textContent=e;let n=Ee("dOpts");n.innerHTML="",t.length||(t=[{t:"Dalej"}]);for(let s of t){let r=document.createElement("button");r.className="btn"+(s.c?" "+s.c:""),r.textContent=s.t,s.dis&&(r.disabled=!0),r.addEventListener("click",a=>{a.stopPropagation(),!s.dis&&(et.click(),Rp(),s.f&&s.f())}),n.appendChild(r)}Ee("dialog").style.display="block"}function Rp(){Ca=!1,Ee("dialog").style.display="none",Ma||(Gt=!1)}function Ec(i,e){I.quests[i]=1,I.tracked=i,et.quest(),ct("Nowe zadanie: "+e,"q",4),Ht()}function Sa(i,e){et.level(),ct("Zadanie uko\u0144czone: "+i,"q",4),e&&(I.xp+=e,ct(`+${e} do\u015Bwiadczenia`,"g")),Ht()}function gM(){let i=I.quests,e="So\u0142tys Bogumi\u0142";if(i.bandits<3&&I.flags.campCleared){let t=I.flags.leaderFate==="spared"?"Darowa\u0142e\u015B Wronis\u0142awowi \u017Cycie? Masz dobre serce, rycerzu. Oby tego nie \u017Ca\u0142owa\u0142\u2026 Ale drogi zn\xF3w s\u0105 bezpieczne.":"Wronis\u0142aw nie \u017Cyje\u2026 Twarda z ciebie r\u0119ka. Ludzie b\u0119d\u0105 o tym szepta\u0107 \u2014 jedni z ulg\u0105, inni ze strachem.";Mt(e,t+" Przyjmij nagrod\u0119 od ca\u0142ej wioski.",[{t:"Przyjmij (+200 z\u0142)",f:()=>{I.gold+=200,Es(15),i.bandits=3,Sa("Plaga Bandyt\xF3w",150),setTimeout(ep,300)}}]);return}if(i.bandits===0){Mt(e,"Witaj w Brzezinie, w\u0119drowcze. Przychodzisz w z\u0142\u0105 godzin\u0119\u2026 Bandyci Wronis\u0142awa napadaj\u0105 na wozy kupc\xF3w i pal\u0105 nasze stodo\u0142y. Ich ob\xF3z le\u017Cy w Starym Lesie, na po\u0142udniowym zachodzie. Wioska zap\u0142aci 200 z\u0142otych temu, kto ich przegoni.",[{t:"Zajm\u0119 si\u0119 bandytami.",f:()=>Ec("bandits","Plaga Bandyt\xF3w")},{t:"Mo\u017Ce p\xF3\u017Aniej."}]);return}if(i.bandits===1){Mt(e,"Ob\xF3z Wronis\u0142awa jest na po\u0142udniowym zachodzie. Id\u017A \u015Bcie\u017Ck\u0105 od studni, przez Stary Las. Uwa\u017Caj na wilki \u2014 i nie daj si\u0119 otoczy\u0107!");return}if(i.ruins===0){ep();return}if(i.ruins===1){Mt(e,"Ruiny Starej Stra\u017Cnicy le\u017C\u0105 na wschodzie, za rozstajami. Rycerz Popio\u0142u podobno budzi si\u0119, gdy kto\u015B stanie na kamiennym kr\u0119gu. Przygotuj si\u0119 dobrze \u2014 kup mikstury u Mirka.");return}if(i.ruins===2){Mt(e,"Na wszystkie gwiazdy! Rycerz Popio\u0142u pokonany! Brzezina nigdy tego nie zapomni. Od dzi\u015B ka\u017Cdy kufel w karczmie jest dla ciebie za darmo. I przyjmij to \u2014 oszcz\u0119dno\u015Bci ca\u0142ej wioski.",[{t:"Przyjmij (+500 z\u0142)",f:()=>{I.gold+=500,Es(25),i.ruins=3,Sa("Popio\u0142y Stra\u017Cnicy",300)}}]);return}Mt(e,I.morality>=0?"Brzezina zawsze b\u0119dzie twoim domem, bohaterze. Dzieci bawi\u0105 si\u0119 w \u201Erycerza i Popielnego\u201D \u2014 zgadnij, kto wygrywa.":"Jeste\u015B\u2026 zawsze mile widziany. Tak. Oczywi\u015Bcie. Prosz\u0119, nie r\xF3b nikomu krzywdy.")}function ep(){Mt("So\u0142tys Bogumi\u0142","Jest jeszcze jedno\u2026 Nocami z ruin Starej Stra\u017Cnicy na wschodzie wype\u0142zaj\u0105 upiory. Starzy ludzie m\xF3wi\u0105, \u017Ce budzi je Rycerz Popio\u0142u \u2014 dawny stra\u017Cnik tej ziemi, kt\xF3ry zdradzi\u0142 sw\xF3j lud i zosta\u0142 przekl\u0119ty. Je\u015Bli kto\u015B mo\u017Ce po\u0142o\u017Cy\u0107 temu kres, to ty.",[{t:"Udam si\u0119 do ruin.",f:()=>Ec("ruins","Popio\u0142y Stra\u017Cnicy")},{t:"Musz\u0119 si\u0119 przygotowa\u0107."}])}function xM(){let i=I.quests,e="Zielarka Jagna";if(i.herbs===-1){Mt(e,"Sprzeda\u0142e\u015B Ksi\u0119\u017Cycowe Ziele temu s\u0119powi Krukowi\u2026 Wiesz, ile trucizny z tego uwarzy? Odejd\u017A. Nie mam ci nic do powiedzenia.");return}if(i.herbs===2){Mt(e,"Dzi\u0119ki tobie mam leki na ca\u0142\u0105 zim\u0119. Gor\u0105czka w wiosce ju\u017C ust\u0119puje. Niech las ci\u0119 prowadzi, rycerzu.");return}if(i.herbs===0){Mt(e,"Ach, go\u015B\u0107! W wiosce szerzy si\u0119 gor\u0105czka, a sko\u0144czy\u0142o mi si\u0119 Ksi\u0119\u017Cycowe Ziele. Ro\u015Bnie w g\u0142\u0119bi lasu \u2014 \u015Bwieci delikatnie, najlepiej wida\u0107 je noc\u0105. Potrzebuj\u0119 sze\u015Bciu \u0142odyg. Pomo\u017Cesz?",[{t:"Przynios\u0119 zio\u0142a.",f:()=>Ec("herbs","Ziele dla Jagny")},{t:"Nie mam czasu."}]);return}if(I.herbsHave>=6){Mt(e,"Sze\u015B\u0107 \u0142odyg Ksi\u0119\u017Cycowego Ziela! Uratowa\u0142e\u015B wielu ludzi. Przyjmij moje mikstury \u2014 sama je warzy\u0142am.",[{t:"Oddaj zio\u0142a (Dobro)",c:"good",f:()=>{i.herbs=2,I.herbsHave-=6,I.potions+=3,I.gold+=60,Ss(12),Es(8),Sa("Ziele dla Jagny",150),ct("+3 mikstury, +60 z\u0142","q")}},{t:"Jeszcze nie teraz"}]);return}Mt(e,`Masz ju\u017C ${I.herbsHave} z 6 \u0142odyg. Szukaj w g\u0119stym lesie \u2014 \u015Bwiec\u0105ce kwiaty. Noc\u0105 \u0142atwiej je wypatrzy\u0107.`)}function _M(){let i=I.quests,e="Alchemik Kruk";if(i.herbs===1&&I.herbsHave>=6){Mt(e,"Czuj\u0119 to\u2026 Ksi\u0119\u017Cycowe Ziele. Sze\u015B\u0107 \u0142odyg? Zap\u0142ac\u0119 ci 350 z\u0142otych. Ta g\u0142upia zielarka da ci najwy\u017Cej par\u0119 mikstur. Do czego mi ono? Hm\u2026 powiedzmy, \u017Ce niekt\xF3rzy mo\u017Cni p\u0142ac\u0105 krocie za trucizn\u0119 bez smaku.",[{t:"Sprzedaj ziele (350 z\u0142, Z\u0142o)",c:"evil",f:()=>{i.herbs=-1,I.herbsHave-=6,I.gold+=350,Ss(-20),ct("+350 z\u0142","q"),Sa("Ziele dla Jagny (sprzedane)",80)}},{t:"Nie sprzedam."}]);return}Mt(e,"Szukasz czego\u015B\u2026 specjalnego? Moje eliksiry nie s\u0105 dla tch\xF3rzy. Mroczny eliksir daje wiedz\u0119 wojownik\xF3w, kt\xF3rzy ju\u017C nie \u017Cyj\u0105. Cena? Z\u0142oto\u2026 i kawa\u0142ek duszy.",[{t:"Mroczny eliksir (150 z\u0142) \u2014 +250 do\u015Bw., Z\u0142o",c:"evil",dis:I.gold<150,f:()=>{I.gold-=150,I.xp+=250,Ss(-5),et.drink(),ct("+250 do\u015Bwiadczenia","g")}},{t:"Eliksir many (60 z\u0142) \u2014 pe\u0142na mana",dis:I.gold<60,f:()=>{I.gold-=60,v.mana=$n(),et.drink()}},{t:"Odejd\u017A"}])}function gc(){let i="Kupiec Mirek",e=[{t:`Mikstura zdrowia (30 z\u0142) [masz ${I.potions}]`,dis:I.gold<30,f:()=>{I.gold-=30,I.potions++,et.coin(),gc()}}],t=xc[I.sword+1];t&&e.push({t:`${t.name} (${t.price} z\u0142)`,dis:I.gold<t.price,f:()=>{I.gold-=t.price,I.sword++,Jn(),et.level(),ct("Nowa bro\u0144: "+t.name,"q"),Ht(),gc()}});let n=_c[I.armor+1];n&&e.push({t:`${n.name} (${n.price} z\u0142)`,dis:I.gold<n.price,f:()=>{I.gold-=n.price,I.armor++,Jn(),et.level(),ct("Nowy pancerz: "+n.name,"q"),Ht(),gc()}}),e.push({t:"Do widzenia"});let s=I.morality<=-40?"T-tak, panie? Cokolwiek zechcesz\u2026 po uczciwej cenie, oczywi\u015Bcie!":I.renown>30?"Nasz bohater! Dla ciebie najlepszy towar z ca\u0142ego traktu!":"Witaj, podr\xF3\u017Cny! Mikstury, miecze, pancerze \u2014 wszystko, czego potrzebuje rycerz.";Mt(i,s+`  (Twoje z\u0142oto: ${I.gold} z\u0142)`,e)}function yM(){let i=I.quests,e="Lichwiarz Grzegorz";if(i.debt===0){Mt(e,"Rycerz, co? Mam robot\u0119 dla kogo\u015B z mieczem. Wdowa Halina winna mi 100 z\u0142otych od p\xF3\u0142 roku. M\u0105\u017C jej zgin\u0105\u0142, ale d\u0142ug to d\u0142ug. Odbierz go \u2014 dostaniesz 50 z\u0142otych za fatyg\u0119.",[{t:"Odbior\u0119 d\u0142ug.",f:()=>Ec("debt","D\u0142ug Wdowy")},{t:"Nie b\u0119d\u0119 n\u0119ka\u0142 wdowy."}]);return}if(i.debt===1){Mt(e,"Na co czekasz? Dom Haliny jest po drugiej stronie placu. Tylko bez lito\u015Bci \u2014 \u0142zy to jej ulubiona waluta.");return}if(i.debt===2){let t=I.flags.debtChoice==="paid";Mt(e,t?"Sam zap\u0142aci\u0142e\u015B za ni\u0105? Dziwak z ciebie\u2026 Ale z\u0142oto to z\u0142oto. Umowa to umowa \u2014 masz swoje 50.":"Ha! Wiedzia\u0142em, \u017Ce si\u0119 nadasz. P\u0142aka\u0142a? Na pewno p\u0142aka\u0142a. Twoja dzia\u0142ka.",[{t:"We\u017A 50 z\u0142",f:()=>{I.gold+=50,i.debt=3,Sa("D\u0142ug Wdowy",80)}}]);return}Mt(e,"Interesy, interesy\u2026 Je\u015Bli b\u0119dziesz potrzebowa\u0107 po\u017Cyczki \u2014 wiesz, gdzie mnie szuka\u0107. Procent niewielki. Prawie.")}function vM(){let i=I.quests,e="Wdowa Halina";if(i.debt===1){Mt(e,"Przys\u0142a\u0142 ci\u0119 Grzegorz, prawda? Ja\u2026 nie mam tych pieni\u0119dzy. M\u0105\u017C zgin\u0105\u0142 z r\u0105k bandyt\xF3w, a zosta\u0142a mi tylko ta cha\u0142upa i dwoje dzieci. Wszystko, co mam, to te kilka monet na zim\u0119.",[{t:"Oddawaj pieni\u0105dze! (Z\u0142o)",c:"evil",f:()=>{I.flags.debtChoice="force",i.debt=2,Ss(-18),ct("Zabra\u0142e\u015B wdowie ostatnie oszcz\u0119dno\u015Bci. Wr\xF3\u0107 do Grzegorza.","e"),Ht()}},{t:"Sp\u0142ac\u0119 tw\xF3j d\u0142ug (100 z\u0142, Dobro)",c:"good",dis:I.gold<100,f:()=>{I.gold-=100,I.flags.debtChoice="paid",i.debt=2,Ss(20),Es(5),ct("Sp\u0142aci\u0142e\u015B d\u0142ug wdowy. Wr\xF3\u0107 do Grzegorza.","q"),Ht()}},{t:"Wr\xF3c\u0119 p\xF3\u017Aniej."}]);return}if(I.flags.debtChoice==="paid"){I.flags.widowGift?Mt(e,"Dzieci codziennie si\u0119 za ciebie modl\u0105."):Mt(e,"Niech ci\u0119 bogowie b\u0142ogos\u0142awi\u0105, rycerzu! We\u017A chocia\u017C to \u2014 m\u0105\u017C trzyma\u0142 t\u0119 mikstur\u0119 na czarn\u0105 godzin\u0119. Tobie bardziej si\u0119 przyda.",[{t:"Dzi\u0119kuj\u0119",f:()=>{I.flags.widowGift=!0,I.potions+=2,ct("+2 mikstury","q")}}]);return}if(I.flags.debtChoice==="force"){Mt(e,"Odejd\u017A\u2026 Zabra\u0142e\u015B nam wszystko. Mam nadziej\u0119, \u017Ce to z\u0142oto ci\u0105\u017Cy ci w sakwie.");return}Mt(e,"Dzie\u0144 dobry, rycerzu. Wybacz, nie mam czym pocz\u0119stowa\u0107\u2026")}function Cp(){let i=I.quests,e=[];return(i.bandits>0||I.flags.campCleared)&&e.push({id:"bandits",title:"Plaga Bandyt\xF3w",done:i.bandits===3,text:i.bandits===3?I.flags.leaderFate==="spared"?"Oszcz\u0119dzi\u0142e\u015B Wronis\u0142awa. Bandyci odeszli.":"Wronis\u0142aw nie \u017Cyje. Drogi s\u0105 bezpieczne.":I.flags.campCleared?"Wr\xF3\u0107 do So\u0142tysa Bogumi\u0142a po nagrod\u0119.":`Rozbij ob\xF3z bandyt\xF3w w Starym Lesie (SW). Bandyci: ${I.campKills}/4. Rozpraw si\u0119 z hersztem.`,target:i.bandits===3?null:I.flags.campCleared?Zh.pos:ue.camp}),i.herbs!==0&&e.push({id:"herbs",title:"Ziele dla Jagny",done:i.herbs===2||i.herbs===-1,text:i.herbs===2?"Jagna dosta\u0142a zio\u0142a. Wioska zdrowieje.":i.herbs===-1?"Sprzeda\u0142e\u015B ziele Alchemikowi Krukowi.":I.herbsHave>=6?"Zanie\u015B zio\u0142a Zielarce Jagnie (albo\u2026 komu\u015B, kto zap\u0142aci wi\u0119cej).":`Zbierz Ksi\u0119\u017Cycowe Ziele w lesie: ${I.herbsHave}/6.`,target:i.herbs!==1?null:I.herbsHave>=6?sM.pos:MM()}),i.debt!==0&&e.push({id:"debt",title:"D\u0142ug Wdowy",done:i.debt===3,text:i.debt===3?I.flags.debtChoice==="paid"?"Sp\u0142aci\u0142e\u015B d\u0142ug wdowy z w\u0142asnej kieszeni.":"Odebra\u0142e\u015B d\u0142ug od wdowy.":i.debt===2?"Wr\xF3\u0107 do Lichwiarza Grzegorza.":"Odwied\u017A Wdow\u0119 Halin\u0119 i odbierz d\u0142ug.",target:i.debt===1?aM.pos:i.debt===2?rM.pos:null}),i.ruins!==0&&e.push({id:"ruins",title:"Popio\u0142y Stra\u017Cnicy",done:i.ruins===3,text:i.ruins===3?"Rycerz Popio\u0142u zosta\u0142 pokonany. Jeste\u015B legend\u0105 Brzeziny.":i.ruins===2?"Wr\xF3\u0107 do So\u0142tysa Bogumi\u0142a z wie\u015Bciami.":"Pokonaj Rycerza Popio\u0142u w ruinach Starej Stra\u017Cnicy (wsch\xF3d).",target:i.ruins===1?ue.ruins:i.ruins===2?Zh.pos:null}),(!e.length||i.bandits===0)&&e.unshift({id:"start",title:"Witaj w Brzezinie",done:!1,text:"Porozmawiaj z So\u0142tysem Bogumi\u0142em przy studni.",target:Zh.pos}),e}function MM(){let i=null,e=1e9;for(let t of Ke.herbs)if(!I.herbTaken[t.i]){let n=Math.hypot(t.x-v.pos.x,t.z-v.pos.z);n<e&&(e=n,i=t)}return i}function Pp(){let i=Cp().filter(e=>!e.done);return i.find(e=>e.id===I.tracked)||i[0]||null}var jh=0,tp=!1,np=!1;function bM(i){if(!I.flags.campCleared&&!tp&&hn(v.pos,ue.camp)<75){tp=!0;let n=4-I.campKills;for(let s=0;s<n;s++){let r=s/Math.max(1,n)*6.28+.5;Rr("bandit",ue.camp.x+Math.sin(r)*5,ue.camp.z+Math.cos(r)*5,"camp",{x:ue.camp.x+Math.sin(r)*5,z:ue.camp.z+Math.cos(r)*5})}I.flags.leaderFate||Rr("leader",ue.camp.x,ue.camp.z-3,"leader",{x:ue.camp.x,z:ue.camp.z-3})}if(I.quests.ruins===1&&!I.flags.bossDead&&!np&&hn(v.pos,ue.ruins)<60&&(np=!0,Rr("boss",ue.ruins.x,ue.ruins.z,"boss",{x:ue.ruins.x,z:ue.ruins.z})),jh-=i,jh>0)return;jh=2.5;for(let n of It)n.tag==="wild"&&!n.dead&&hn(n.pos,v.pos)>110&&(n.remove=!0);if(!(It.filter(n=>n.tag==="wild"&&!n.dead).length>=(Ts?9:6)||v.dead))for(let n=0;n<8;n++){let s=Math.random()*6.28,r=gt(42,75),a=v.pos.x+Math.sin(s)*r,o=v.pos.z+Math.cos(s)*r;if(Math.abs(a)>165||Math.abs(o)>165||Math.hypot(a,o)<60||hn({x:a,z:o},ue.house)<18||hn({x:a,z:o},ue.herbalist)<18||hn({x:a,z:o},ue.crossroad)<15||!I.flags.campCleared&&hn({x:a,z:o},ue.camp)<30)continue;let c=nt(a,o);if(c<.5||c>20)continue;let l=ds(a,o),h,u=hn({x:a,z:o},ue.ruins)<60;Ts?h=u||Math.random()<.45?"ghoul":Math.random()<.6?"wolf":"bandit":h=l>.55?Math.random()<.75?"wolf":"bandit":Math.random()<.55?"bandit":"wolf";let d=h==="wolf"?Math.random()<.5?2:3:Math.random()<.35?2:1;for(let f=0;f<d;f++)Rr(h,a+gt(-3,3),o+gt(-3,3),"wild",{x:a,z:o});break}}var mt=1,Ts=!1,wM=new pe(8896488),SM=new pe(725800),EM=new pe(15764048),TM=new pe(16773336),AM=new pe(9085183),RM=new pe(16752736),Kh=new pe;function CM(i){let e=(I.time-.25)*Math.PI*2,t=Math.sin(e);mt=Xi((t+.08)/.3,0,1),mt=mt*mt*(3-2*mt),Ts=mt<.25;let n=Xi(1-Math.abs(t)/.25,0,1);Kh.copy(SM).lerp(wM,mt).lerp(EM,n*.45),dt.background.copy(Kh),dt.fog.color.copy(Kh);let s=Math.cos(e),r=Math.sin(e),a=t>-.05,o=a?s:-s,c=a?Math.max(.12,r):Math.max(.25,-r);kn.position.set(v.pos.x+o*80,v.pos.y+c*80,v.pos.z+30),kn.target.position.copy(v.pos),kn.intensity=yt(.55,2.1,mt),kn.color.copy(AM).lerp(TM,mt).lerp(RM,n*.6),Qh.intensity=yt(.55,1.05,mt),Qh.color.setRGB(yt(.35,.81,mt),yt(.42,.9,mt),yt(.75,1,mt)),ec.emissiveIntensity=(1-mt)*1.2,Ar&&(Ar.emissiveIntensity=(1-mt)*1.35),tu&&(tu.emissiveIntensity=(1-mt)*1.6),uc&&(uc.poolM.opacity=(1-mt)*.55,uc.haloM.opacity=(1-mt)*.7),Ff(yt(.22,1,mt));for(let l of wr)l.emissiveIntensity=.4+(1-mt)*1.2;Ke.starMat.opacity=1-mt,Ke.stars.position.copy(un.position),Ke.moon.position.set(un.position.x-s*300,un.position.y-r*300,un.position.z+80),Ke.moon.material.opacity=1-mt*.8,Ke.sunDisc.position.set(un.position.x+s*300,un.position.y+r*300,un.position.z+80),Ke.sunDisc.visible=t>-.1,Ke.cloudMat.color.setRGB(yt(.25,1,mt),yt(.28,1,mt),yt(.4,1,mt));for(let l of Ke.clouds.children)l.position.x+=i*1.5,l.position.x>240&&(l.position.x=-240);if(Ke.fire){let l=1+Math.sin(Hn.elapsedTime*13)*.12+Math.sin(Hn.elapsedTime*7.3)*.1;Ke.fire.flame.scale.set(1,l,1),Ke.fire.flame2.scale.set(1,l*1.1,1),Ke.fire.light.intensity=hn(v.pos,ue.camp)<60?(1-mt*.7)*30*l:0}Ke.water.position.y=Math.sin(Hn.elapsedTime*.8)*.04,Ke.herbMat&&(Ke.herbMat.emissiveIntensity=.5+(1-mt)*1.5+Math.sin(Hn.elapsedTime*3)*.2)}var nn=new L,Kn=!0,$h=0;function PM(i){if(Kn){$h+=i*.05,un.position.set(Math.sin($h)*40,22,Math.cos($h)*40),un.lookAt(0,4,0);return}let e=Math.min(1,i*10);nn.x=yt(nn.x,v.pos.x,e),nn.z=yt(nn.z,v.pos.z,e),nn.y=yt(nn.y,Math.max(v.pos.y,-.5)+1.6,e);let t=wa;vs&&vs.type==="boss"&&!vs.dead&&(t=wa*1.35);for(let a=1;a<=8;a++){let o=a/8*t,c=nn.x+Math.sin(Dn)*Math.cos(vi)*o,l=nn.z+Math.cos(Dn)*Math.cos(vi)*o;if(nn.y+Math.sin(vi)*o<nt(c,l)+6&&ap.blocked(c,l)){t=Math.max(2.2,o-t/8);break}}va=yt(va,t,Math.min(1,i*(t<va?12:3))),t=va;let n=nn.x+Math.sin(Dn)*Math.cos(vi)*t,s=nn.z+Math.cos(Dn)*Math.cos(vi)*t,r=nn.y+Math.sin(vi)*t;for(let a=1;a<=4;a++){let o=a/4,c=yt(nn.x,n,o),l=yt(nn.z,s,o),h=nt(c,l)+.6,u=yt(nn.y,r,o);u<h&&(r+=(h-u)/o)}ys>0&&(n+=gt(-1,1)*ys*.3,r+=gt(-1,1)*ys*.3,ys=Math.max(0,ys-i*2)),un.position.set(n,r,s),un.lookAt(nn)}var ip=Ee("hpBar"),sp=Ee("mpBar"),Lp=Ee("mini"),je=Lp.getContext("2d"),Jh=0;function LM(i){ip.firstChild.style.width=(v.hp/En()*100).toFixed(1)+"%",ip.lastChild.textContent=`${Math.ceil(v.hp)} / ${En()}`,sp.firstChild.style.width=(v.mana/$n()*100).toFixed(1)+"%",sp.lastChild.textContent=`${Math.floor(v.mana)} / ${$n()}`,Ee("mpCost").style.display=v.mana<20?"block":"none",fc=Math.max(0,fc-i*2.5);let e=v.hp/En()<.25&&!v.dead?.35+Math.sin(Hn.elapsedTime*6)*.15:0;if(Ee("hurt").style.opacity=Math.max(fc*.8,e).toFixed(2),Jh-=i,Jh>0)return;Jh=.2,Ee("sGold").textContent=`\u{1F4B0} ${I.gold}`,Ee("sXp").textContent=`\u2728 ${I.xp}`,Ee("sRen").textContent=`\u2B50 ${I.renown}`,Ee("potN").textContent=I.potions,Ee("titleTxt").textContent=Sc(),Ee("morality").firstChild.style.left=`calc(${(I.morality+100)/2}% - 2px)`;let t=Math.floor(I.time*24),n=Math.floor((I.time*24-t)*60);Ee("clock").textContent=`${Ts?"\u{1F319}":"\u2600\uFE0F"} Dzie\u0144 ${I.day}, ${String(t).padStart(2,"0")}:${String(n).padStart(2,"0")}`;let s=Pp(),r=Ee("questTrack");if(s){let l=`<b>${s.title}</b>${s.text}`;r._h!==l&&(r.innerHTML=l,r._h=l),r.style.display="block"}else r.style.display="none";nu-=.2;let a=Ee("target"),o=vs,c=It.find(l=>l.type==="boss"&&!l.dead&&l.state!=="idle");c&&(o=c),o&&(o===c||nu>0)&&!o.dead?(a.style.display="block",a.className="hud"+(o.type==="boss"?" boss":""),a.firstChild.textContent=o.def.name+(o.state==="surrender"?" (poddaje si\u0119)":""),a.lastChild.firstChild.style.width=o.hp/o.maxHp*100+"%"):a.style.display="none",IM(s)}function IM(i){let e=Lp.width,t=55;je.save(),je.clearRect(0,0,e,e),je.beginPath(),je.arc(e/2,e/2,e/2,0,Math.PI*2),je.clip();let n=(v.pos.x-t+ki)/2,s=(v.pos.z-t+ki)/2;je.drawImage(Ke.minimap,n,s,t,t,0,0,e,e),Ts&&(je.fillStyle="rgba(10,20,50,0.35)",je.fillRect(0,0,e,e));let r=(a,o)=>[((a-v.pos.x)/(t*2)+.5)*e,((o-v.pos.z)/(t*2)+.5)*e];for(let a of ws){if(!a.talk)continue;let[o,c]=r(a.pos.x,a.pos.z);je.fillStyle="#ffe9a0",je.beginPath(),je.arc(o,c,4,0,7),je.fill()}for(let a of It){if(a.dead)continue;let[o,c]=r(a.pos.x,a.pos.z);je.fillStyle=a.type==="boss"?"#ff6a00":"#e33",je.beginPath(),je.arc(o,c,a.type==="boss"?7:4,0,7),je.fill()}if(i&&i.target){let[a,o]=r(i.target.x,i.target.z),c=a-e/2,l=o-e/2,h=Math.hypot(c,l),u=e/2-12;h>u&&(a=e/2+c/h*u,o=e/2+l/h*u),je.fillStyle="#ffd030",je.strokeStyle="#000",je.lineWidth=2,je.beginPath();for(let d=0;d<10;d++){let f=d/10*Math.PI*2-Math.PI/2,p=d%2?5:11;je.lineTo(a+Math.cos(f)*p,o+Math.sin(f)*p)}je.closePath(),je.fill(),je.stroke()}je.translate(e/2,e/2),je.rotate(-v.yaw+Math.PI),je.fillStyle="#fff",je.strokeStyle="#000",je.lineWidth=2,je.beginPath(),je.moveTo(0,-11),je.lineTo(8,9),je.lineTo(0,4),je.lineTo(-8,9),je.closePath(),je.fill(),je.stroke(),je.restore(),je.fillStyle="#f3e9d2",je.font="bold 18px Georgia",je.textAlign="center",je.fillText("N",e/2,20)}var Ma=!1,Tr="quests";function Tc(i){Ma=i!==void 0?i:!Ma,Ee("menu").style.display=Ma?"flex":"none",Ma?(Gt=!0,ba()):!Ca&&Ee("death").style.display!=="flex"&&(Gt=!1)}Ee("menuBtn").addEventListener("click",i=>{i.stopPropagation(),ps(),Kn||Tc()});Ee("closeMenu").addEventListener("click",()=>Tc(!1));var zM=[["quests","Zadania"],["skills","Rozw\xF3j"],["hero","Posta\u0107"],["opts","Opcje"]];function ba(){let i=Ee("mTabs");i.innerHTML="";for(let[t,n]of zM){let s=document.createElement("button");s.className="btn"+(Tr===t?" sel":""),s.textContent=n,s.onclick=()=>{Tr=t,et.click(),ba()},i.appendChild(s)}let e=Ee("mBody");if(e.innerHTML="",Tr==="quests"){let t=Cp(),n=Pp();for(let r of t){let a=document.createElement("div");a.className="qitem"+(r.done?" done":"")+(n&&n.id===r.id?" tr":""),a.innerHTML=`<b style="color:#f0d060">${r.done?"\u2714 ":n&&n.id===r.id?"\u2605 ":""}${r.title}</b><br>${r.text}`,r.done||(a.onclick=()=>{I.tracked=r.id,et.click(),ba()}),e.appendChild(a)}let s=document.createElement("p");s.style.opacity=.7,s.style.fontSize="12px",s.textContent="Dotknij zadania, aby je \u015Bledzi\u0107 (gwiazdka na minimapie). Inni mieszka\u0144cy te\u017C mog\u0105 mie\u0107 dla ciebie pro\u015Bby \u2014 rozmawiaj ze wszystkimi.",e.appendChild(s)}else if(Tr==="skills"){e.insertAdjacentHTML("beforeend",`<p>Do\u015Bwiadczenie do wydania: <b style="color:#9ef">\u2728 ${I.xp}</b></p>`);for(let t of["sila","magia","zrecznosc"]){let n=I.stats[t],s=Iv[n],r=document.createElement("div");r.className="stat",r.innerHTML=`<div style="min-width:90px"><b>${Gf[t].n}</b><div class="pips">${"\u25C6".repeat(n)}${"\u25C7".repeat(5-n)}</div></div><div class="d">${Gf[t].d}</div>`;let a=document.createElement("button");a.className="btn",n>=5?(a.textContent="MAX",a.disabled=!0):(a.textContent=`Ulepsz (${s} \u2728)`,a.disabled=I.xp<s,a.onclick=()=>{I.xp<s||(I.xp-=s,I.stats[t]++,et.level(),Jn(),v.hp=En(),Qt(v.pos.x,v.pos.y+1,v.pos.z,9367807,20,3,5,1),Ht(),ba())}),r.appendChild(a),e.appendChild(r)}e.insertAdjacentHTML("beforeend",'<p style="font-size:12px;opacity:.7">Twoje cia\u0142o zmienia si\u0119 wraz z rozwojem: si\u0142a poszerza barki, magia roz\u015Bwietla ubranie b\u0142\u0119kitem.</p>')}else if(Tr==="hero"){let t=I.morality;e.innerHTML=`<h3>${Sc()}</h3>
      <p>Moralno\u015B\u0107: <b>${t>0?"+":""}${t}</b> ${t>=40?"(nad g\u0142ow\u0105 l\u015Bni aureola)":t<=-40?"(wyros\u0142y ci rogi)":""}<br>
      S\u0142awa: <b>${I.renown}</b> \xB7 Pokonani wrogowie: <b>${I.kills}</b> \xB7 Blizny: <b>${I.scars}</b></p>
      <h3>Ekwipunek</h3>
      <p>\u2694 ${xc[I.sword].name} (obra\u017Cenia ${xc[I.sword].dmg+5*I.stats.sila})<br>
      \u{1F6E1} ${_c[I.armor].name} (redukcja ${Math.round((1-_c[I.armor].mul)*100)}%)<br>
      \u{1F9EA} Mikstury zdrowia: ${I.potions}<br>\u{1F33F} Ksi\u0119\u017Cycowe Ziele: ${I.herbsHave}<br>
      \u{1F3E0} ${I.houseOwned?"Dom na Wzg\xF3rzu (tw\xF3j)":"Brak domu \u2014 Dom na Wzg\xF3rzu (NE od wioski) jest na sprzeda\u017C"}<br>
      \u{1F4B0} ${I.gold} z\u0142</p>
      <p style="font-size:12px;opacity:.7">Wybory moralne zmieniaj\u0105 wygl\u0105d postaci i to, jak reaguj\u0105 na ciebie mieszka\u0144cy.</p>`}else if(Tr==="opts"){e.innerHTML=`<h3>Grafika</h3><div id="qBtns" style="display:flex;gap:8px;flex-wrap:wrap"></div>
      <p style="font-size:12px;opacity:.7">Zmiana jako\u015Bci prze\u0142aduje gr\u0119 (post\u0119p jest zapisywany).</p>
      <h3>Autorzy modeli</h3><p style="font-size:12px;opacity:.8">Postacie, stroje i animacje ruchu: Quaternius (CC0). Budynki i rekwizyty wioski: Quaternius Medieval Village MegaKit (CC0). Lis i wilki: model \u201EFox\u201D \u2014 tomkranis, AsoboStudio, scurest (CC BY 4.0). Animacje walki mieczem wed\u0142ug szko\u0142y Liechtenauera, posta\u0107 bohatera i miecz: autorskie.</p><h3>D\u017Awi\u0119k</h3><div id="sBtns"></div><h3>Zapis</h3><div id="saveBtns" style="display:flex;gap:8px;flex-wrap:wrap"></div>`;for(let[r,a]of[["low","Niska (szybka)"],["medium","\u015Arednia"],["high","Wysoka"]]){let o=document.createElement("button");o.className="btn"+(Gn===r?" sel":""),o.textContent=a,o.onclick=()=>{Ht();try{localStorage.setItem("kw_quality",r)}catch{}location.reload()},Ee("qBtns").appendChild(o)}let t=document.createElement("button");t.className="btn",t.textContent=xs?"Muzyka: W\u0141":"Muzyka: WY\u0141",t.onclick=()=>{xs=!xs,fh(xs);try{localStorage.setItem("kw_music",xs?"1":"0")}catch{}ba()},Ee("sBtns").appendChild(t);let n=document.createElement("button");n.className="btn",n.textContent="Zapisz gr\u0119",n.onclick=()=>{Ht(),ct("Gra zapisana.","g")};let s=document.createElement("button");s.className="btn evil",s.textContent="Nowa gra (usu\u0144 zapis)",s.onclick=()=>{if(confirm("Na pewno usun\u0105\u0107 zapis i zacz\u0105\u0107 od nowa?")){try{localStorage.removeItem(vc)}catch{}location.reload()}},Ee("saveBtns").appendChild(n),Ee("saveBtns").appendChild(s)}}window.onAndroidBack=()=>{if(!Kn){if(Ca){Rp();return}Tc()}};function Ht(){if(!Kn){I.pos={x:v.pos.x,z:v.pos.z},I.hp=v.hp,I.mana=v.mana;try{localStorage.setItem(vc,JSON.stringify(I))}catch{}}}window.saveGame=Ht;function DM(){try{let i=localStorage.getItem(vc);if(!i)return!1;let e=JSON.parse(i),t=ou();return I={...t,...e,stats:{...t.stats,...e.stats},quests:{...t.quests,...e.quests},flags:{...t.flags,...e.flags}},!0}catch{return!1}}function NM(){var i;v.pos.set(I.pos.x,nt(I.pos.x,I.pos.z),I.pos.z),v.pos.y<-.9&&v.pos.set(0,2.5,9),v.hp=Xi(I.hp||En(),1,En()),v.mana=Xi((i=I.mana)!=null?i:$n(),0,$n()),Ut.pos.set(v.pos.x+2,0,v.pos.z+2),Ut.pos.y=nt(Ut.pos.x,Ut.pos.z);for(let e of Ke.herbs)I.herbTaken[e.i]&&(e.group.visible=!1);for(let e of Ke.chests)I.chestOpened[e.i]&&(e.lid.rotation.x=-1.9);I.flags.bossDead&&Ke.runeMat&&Ke.runeMat.emissive.set(4235519),Dn=0,v.yaw=Math.PI,Jn()}setInterval(()=>{!Kn&&!v.dead&&Ht()},3e4);document.addEventListener("visibilitychange",()=>{document.hidden&&Ht()});function UM(){let i=I.morality,e=i>=30?"Rycerz Popio\u0142u rozsypa\u0142 si\u0119 w py\u0142, a nad ruinami po raz pierwszy od stu lat wzesz\u0142o czyste s\u0142o\u0144ce. Ludzie Brzeziny wiwatuj\u0105 na twoj\u0105 cze\u015B\u0107, a dzieci przynosz\u0105 ci wianki z wrzosu. Twoja legenda b\u0119dzie opowiadana przy ogniskach jako historia \u015Bwiat\u0142a.":i<=-30?"Rycerz Popio\u0142u pad\u0142\u2026 ale gdy podnosisz jego p\u0142on\u0105cy miecz, czujesz, jak ciemno\u015B\u0107 rozpoznaje w tobie swojego. Ludzie Brzeziny k\u0142aniaj\u0105 si\u0119 nisko \u2014 bardziej ze strachu ni\u017C z wdzi\u0119czno\u015Bci. Nowy w\u0142adca tych ziem w\u0142a\u015Bnie si\u0119 narodzi\u0142.":"Rycerz Popio\u0142u zosta\u0142 pokonany. Ludzie Brzeziny dzi\u0119kuj\u0105 ci \u2014 cho\u0107 nie wiedz\u0105 jeszcze, czy jeste\u015B bohaterem, czy tylko najemnikiem, kt\xF3ry dobrze wykona\u0142 robot\u0119. Twoja historia wci\u0105\u017C si\u0119 pisze.";Ee("vText").innerHTML=`${e}<br><br><b style="color:#f0d060">Tytu\u0142: ${Sc()}</b><br>S\u0142awa: ${I.renown} \xB7 Pokonani wrogowie: ${I.kills} \xB7 Dzie\u0144 ${I.day}<br><br><span style="font-size:13px;opacity:.8">\u015Awiat pozostaje otwarty \u2014 doko\u0144cz zadania, kup dom, zbierz skarby.</span>`,Ee("victory").style.display="flex",Gt=!0}Ee("bVic").addEventListener("click",()=>{Ee("victory").style.display="none",Gt=!1,ct("Wr\xF3\u0107 do So\u0142tysa Bogumi\u0142a po nagrod\u0119.","q")});Ee("bRespawn").addEventListener("click",Wv);var OM=(()=>{try{return!!localStorage.getItem(vc)}catch{return!1}})();OM&&(Ee("bContinue").style.display="inline-block");function Ip(i){for(let e of["bAtk","bMag","bRoll","bPot","joy","menuBtn","hudTL","hudTR"])Ee(e).style.visibility=i?"hidden":"visible"}Ip(!0);function zp(){Kn=!1,Gt=!1,Ip(!1),Dn=v.yaw+Math.PI,nn.copy(v.pos),Dn=0,ct("Zapis automatyczny jest w\u0142\u0105czony.","",2.5)}Ee("bContinue").addEventListener("click",()=>{ps(),DM()&&NM(),Ee("start").style.display="none",zp(),ct(`Witaj z powrotem, ${Sc().toLowerCase()}!`,"g")});Ee("bNew").addEventListener("click",()=>{ps(),I=ou(),v.pos.set(0,2.5,9),v.hp=En(),v.mana=$n(),Jn(),Ee("start").style.display="none",Ee("intro").style.display="flex"});Ee("bBegin").addEventListener("click",()=>{Ee("intro").style.display="none",v.yaw=Math.PI,zp(),Dn=0,v.yaw=Math.PI,Ht(),ct("Porozmawiaj z So\u0142tysem przy studni.","q",4)});Jn();var Hn=new Vo;function Dp(i){if(!Kn&&!Gt){I.time+=i/Lv,I.time>=1&&(I.time-=1,I.day++,Ap()),nM(i);for(let e of It)e.update(i);for(let e=It.length-1;e>=0;e--)It[e].remove&&(dt.remove(It[e].mesh.group),vs===It[e]&&(vs=null),It.splice(e,1));iM(i),Qv(i),jv(i),bM(i),bs.visible&&bc&&(fp.opacity=.35+Math.sin(Hn.elapsedTime*20)*.2)}else Kn&&(I.time=.36+Math.sin(Hn.elapsedTime*.02)*.01);(!Gt||Kn)&&oM(i),Nv(i),CM(i),PM(i),Ov(i)}var Np={freeze:!1};function Up(){requestAnimationFrame(Up);let i=Math.min(Hn.getDelta(),.05);Np.freeze||Dp(i),Kn||(LM(i),lM());let e=It.some(t=>!t.dead&&(t.state==="chase"||t.state==="windup"||t.state==="recover"));Lf(performance.now()/1e3,e?"combat":Ts?"night":"day"),qi.render(dt,un)}Up();window.__dbg={DBG:Np,step:(i,e)=>{for(let t=0;t<i;t++)Dp(e);qi.render(dt,un)},cam:(i,e,t)=>{wa=i,va=i,e!==void 0&&(vi=e),t!==void 0&&(Dn=t)},input:jn,refresh:()=>Jn(),heroM:()=>Ae,P:v,S:()=>I,enemies:It,npcs:ws,W:Ke,LOC:ue,spawnEnemy:Rr,setS:i=>{I=i},talk:i=>ws.find(e=>e.id===i).talk()};})();
/*! Bundled license information:

three/build/three.module.js:
  (**
   * @license
   * Copyright 2010-2023 Three.js Authors
   * SPDX-License-Identifier: MIT
   *)
*/

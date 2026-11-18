(()=>{var bl="160";var op=0,Wh=1,ap=2;var Ma=1,cp=2,ri=3,qn=0,gn=1,dn=2;var Ai=0,Gs=1,Xh=2,qh=3,Yh=4,lp=5,Zi=100,hp=101,up=102,jh=103,Zh=104,dp=200,fp=201,pp=202,mp=203,kc=204,Hc=205,gp=206,xp=207,_p=208,yp=209,vp=210,Mp=211,bp=212,wp=213,Sp=214,Ep=0,Tp=1,Ap=2,Ho=3,Rp=4,Cp=5,Pp=6,Lp=7,ba=0,Ip=1,zp=2,Ri=0,Dp=1,Np=2,Up=3,Op=4,Fp=5,Bp=6,Kh="attached",kp="detached",Rd=300,Xs=301,qs=302,Gc=303,Vc=304,wa=306,es=1e3,Mn=1001,Dr=1002,Vt=1003,Go=1004;var Cr=1005;var un=1006,wl=1007;var Pi=1008;var Ci=1009,Hp=1010,Gp=1011,Sl=1012,Cd=1013,Ei=1014,ai=1015,Nr=1016,Pd=1017,Ld=1018,$i=1020,Vp=1021,An=1023,Wp=1024,Xp=1025,Ji=1026,Ys=1027,qp=1028,Id=1029,Yp=1030,zd=1031,Dd=1033,ac=33776,cc=33777,lc=33778,hc=33779,$h=35840,Jh=35841,Qh=35842,eu=35843,Nd=36196,tu=37492,nu=37496,iu=37808,su=37809,ru=37810,ou=37811,au=37812,cu=37813,lu=37814,hu=37815,uu=37816,du=37817,fu=37818,pu=37819,mu=37820,gu=37821,uc=36492,xu=36494,_u=36495,jp=36283,yu=36284,vu=36285,Mu=36286,Sa=2200,El=2201,Zp=2202,js=2300,ts=2301,dc=2302,Os=2400,Fs=2401,Vo=2402,Tl=2500,Kp=2501,Ud=0,Ea=1,Kr=2,Od=3e3,Qi=3001,$p=3200,Jp=3201,Ta=0,Qp=1,Rn="",Tt="srgb",Xt="srgb-linear",Al="display-p3",Aa="display-p3-linear",Wo="linear",Mt="srgb",Xo="rec709",qo="p3";var vs=7680;var bu=519,em=512,tm=513,nm=514,Fd=515,im=516,sm=517,rm=518,om=519,Wc=35044;var wu="300 es",Xc=1035,ci=2e3,Yo=2001,li=class{addEventListener(e,t){this._listeners===void 0&&(this._listeners={});let n=this._listeners;n[e]===void 0&&(n[e]=[]),n[e].indexOf(t)===-1&&n[e].push(t)}hasEventListener(e,t){if(this._listeners===void 0)return!1;let n=this._listeners;return n[e]!==void 0&&n[e].indexOf(t)!==-1}removeEventListener(e,t){if(this._listeners===void 0)return;let s=this._listeners[e];if(s!==void 0){let r=s.indexOf(t);r!==-1&&s.splice(r,1)}}dispatchEvent(e){if(this._listeners===void 0)return;let n=this._listeners[e.type];if(n!==void 0){e.target=this;let s=n.slice(0);for(let r=0,o=s.length;r<o;r++)s[r].call(this,e);e.target=null}}},nn=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"],Su=1234567,Pr=Math.PI/180,Zs=180/Math.PI;function Fn(){let i=Math.random()*4294967295|0,e=Math.random()*4294967295|0,t=Math.random()*4294967295|0,n=Math.random()*4294967295|0;return(nn[i&255]+nn[i>>8&255]+nn[i>>16&255]+nn[i>>24&255]+"-"+nn[e&255]+nn[e>>8&255]+"-"+nn[e>>16&15|64]+nn[e>>24&255]+"-"+nn[t&63|128]+nn[t>>8&255]+"-"+nn[t>>16&255]+nn[t>>24&255]+nn[n&255]+nn[n>>8&255]+nn[n>>16&255]+nn[n>>24&255]).toLowerCase()}function rn(i,e,t){return Math.max(e,Math.min(t,i))}function Rl(i,e){return(i%e+e)%e}function am(i,e,t,n,s){return n+(i-e)*(s-n)/(t-e)}function cm(i,e,t){return i!==e?(t-i)/(e-i):0}function Lr(i,e,t){return(1-t)*i+t*e}function lm(i,e,t,n){return Lr(i,e,1-Math.exp(-t*n))}function hm(i,e=1){return e-Math.abs(Rl(i,e*2)-e)}function um(i,e,t){return i<=e?0:i>=t?1:(i=(i-e)/(t-e),i*i*(3-2*i))}function dm(i,e,t){return i<=e?0:i>=t?1:(i=(i-e)/(t-e),i*i*i*(i*(i*6-15)+10))}function fm(i,e){return i+Math.floor(Math.random()*(e-i+1))}function pm(i,e){return i+Math.random()*(e-i)}function mm(i){return i*(.5-Math.random())}function gm(i){i!==void 0&&(Su=i);let e=Su+=1831565813;return e=Math.imul(e^e>>>15,e|1),e^=e+Math.imul(e^e>>>7,e|61),((e^e>>>14)>>>0)/4294967296}function xm(i){return i*Pr}function _m(i){return i*Zs}function qc(i){return(i&i-1)===0&&i!==0}function ym(i){return Math.pow(2,Math.ceil(Math.log(i)/Math.LN2))}function jo(i){return Math.pow(2,Math.floor(Math.log(i)/Math.LN2))}function vm(i,e,t,n,s){let r=Math.cos,o=Math.sin,a=r(t/2),c=o(t/2),l=r((e+n)/2),h=o((e+n)/2),u=r((e-n)/2),d=o((e-n)/2),f=r((n-e)/2),g=o((n-e)/2);switch(s){case"XYX":i.set(a*h,c*u,c*d,a*l);break;case"YZY":i.set(c*d,a*h,c*u,a*l);break;case"ZXZ":i.set(c*u,c*d,a*h,a*l);break;case"XZX":i.set(a*h,c*g,c*f,a*l);break;case"YXY":i.set(c*f,a*h,c*g,a*l);break;case"ZYZ":i.set(c*g,c*f,a*h,a*l);break;default:console.warn("THREE.MathUtils: .setQuaternionFromProperEuler() encountered an unknown order: "+s)}}function Xn(i,e){switch(e.constructor){case Float32Array:return i;case Uint32Array:return i/4294967295;case Uint16Array:return i/65535;case Uint8Array:return i/255;case Int32Array:return Math.max(i/2147483647,-1);case Int16Array:return Math.max(i/32767,-1);case Int8Array:return Math.max(i/127,-1);default:throw new Error("Invalid component type.")}}function ut(i,e){switch(e.constructor){case Float32Array:return i;case Uint32Array:return Math.round(i*4294967295);case Uint16Array:return Math.round(i*65535);case Uint8Array:return Math.round(i*255);case Int32Array:return Math.round(i*2147483647);case Int16Array:return Math.round(i*32767);case Int8Array:return Math.round(i*127);default:throw new Error("Invalid component type.")}}var Ln={DEG2RAD:Pr,RAD2DEG:Zs,generateUUID:Fn,clamp:rn,euclideanModulo:Rl,mapLinear:am,inverseLerp:cm,lerp:Lr,damp:lm,pingpong:hm,smoothstep:um,smootherstep:dm,randInt:fm,randFloat:pm,randFloatSpread:mm,seededRandom:gm,degToRad:xm,radToDeg:_m,isPowerOfTwo:qc,ceilPowerOfTwo:ym,floorPowerOfTwo:jo,setQuaternionFromProperEuler:vm,normalize:ut,denormalize:Xn},He=class i{constructor(e=0,t=0){i.prototype.isVector2=!0,this.x=e,this.y=t}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,t){return this.x=e,this.y=t,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){let t=this.x,n=this.y,s=e.elements;return this.x=s[0]*t+s[3]*n+s[6],this.y=s[1]*t+s[4]*n+s[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this}clampLength(e,t){let n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(e,Math.min(t,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){let t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;let n=this.dot(e)/t;return Math.acos(rn(n,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){let t=this.x-e.x,n=this.y-e.y;return t*t+n*n}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this}rotateAround(e,t){let n=Math.cos(t),s=Math.sin(t),r=this.x-e.x,o=this.y-e.y;return this.x=r*n-o*s+e.x,this.y=r*s+o*n+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}},$e=class i{constructor(e,t,n,s,r,o,a,c,l){i.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,t,n,s,r,o,a,c,l)}set(e,t,n,s,r,o,a,c,l){let h=this.elements;return h[0]=e,h[1]=s,h[2]=a,h[3]=t,h[4]=r,h[5]=c,h[6]=n,h[7]=o,h[8]=l,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){let t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],this}extractBasis(e,t,n){return e.setFromMatrix3Column(this,0),t.setFromMatrix3Column(this,1),n.setFromMatrix3Column(this,2),this}setFromMatrix4(e){let t=e.elements;return this.set(t[0],t[4],t[8],t[1],t[5],t[9],t[2],t[6],t[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){let n=e.elements,s=t.elements,r=this.elements,o=n[0],a=n[3],c=n[6],l=n[1],h=n[4],u=n[7],d=n[2],f=n[5],g=n[8],x=s[0],m=s[3],p=s[6],y=s[1],_=s[4],b=s[7],C=s[2],A=s[5],R=s[8];return r[0]=o*x+a*y+c*C,r[3]=o*m+a*_+c*A,r[6]=o*p+a*b+c*R,r[1]=l*x+h*y+u*C,r[4]=l*m+h*_+u*A,r[7]=l*p+h*b+u*R,r[2]=d*x+f*y+g*C,r[5]=d*m+f*_+g*A,r[8]=d*p+f*b+g*R,this}multiplyScalar(e){let t=this.elements;return t[0]*=e,t[3]*=e,t[6]*=e,t[1]*=e,t[4]*=e,t[7]*=e,t[2]*=e,t[5]*=e,t[8]*=e,this}determinant(){let e=this.elements,t=e[0],n=e[1],s=e[2],r=e[3],o=e[4],a=e[5],c=e[6],l=e[7],h=e[8];return t*o*h-t*a*l-n*r*h+n*a*c+s*r*l-s*o*c}invert(){let e=this.elements,t=e[0],n=e[1],s=e[2],r=e[3],o=e[4],a=e[5],c=e[6],l=e[7],h=e[8],u=h*o-a*l,d=a*c-h*r,f=l*r-o*c,g=t*u+n*d+s*f;if(g===0)return this.set(0,0,0,0,0,0,0,0,0);let x=1/g;return e[0]=u*x,e[1]=(s*l-h*n)*x,e[2]=(a*n-s*o)*x,e[3]=d*x,e[4]=(h*t-s*c)*x,e[5]=(s*r-a*t)*x,e[6]=f*x,e[7]=(n*c-l*t)*x,e[8]=(o*t-n*r)*x,this}transpose(){let e,t=this.elements;return e=t[1],t[1]=t[3],t[3]=e,e=t[2],t[2]=t[6],t[6]=e,e=t[5],t[5]=t[7],t[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){let t=this.elements;return e[0]=t[0],e[1]=t[3],e[2]=t[6],e[3]=t[1],e[4]=t[4],e[5]=t[7],e[6]=t[2],e[7]=t[5],e[8]=t[8],this}setUvTransform(e,t,n,s,r,o,a){let c=Math.cos(r),l=Math.sin(r);return this.set(n*c,n*l,-n*(c*o+l*a)+o+e,-s*l,s*c,-s*(-l*o+c*a)+a+t,0,0,1),this}scale(e,t){return this.premultiply(fc.makeScale(e,t)),this}rotate(e){return this.premultiply(fc.makeRotation(-e)),this}translate(e,t){return this.premultiply(fc.makeTranslation(e,t)),this}makeTranslation(e,t){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,t,0,0,1),this}makeRotation(e){let t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,n,t,0,0,0,1),this}makeScale(e,t){return this.set(e,0,0,0,t,0,0,0,1),this}equals(e){let t=this.elements,n=e.elements;for(let s=0;s<9;s++)if(t[s]!==n[s])return!1;return!0}fromArray(e,t=0){for(let n=0;n<9;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){let n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e}clone(){return new this.constructor().fromArray(this.elements)}},fc=new $e;function Bd(i){for(let e=i.length-1;e>=0;--e)if(i[e]>=65535)return!0;return!1}function Ur(i){return document.createElementNS("http://www.w3.org/1999/xhtml",i)}function Mm(){let i=Ur("canvas");return i.style.display="block",i}var Eu={};function Ir(i){i in Eu||(Eu[i]=!0,console.warn(i))}var Tu=new $e().set(.8224621,.177538,0,.0331941,.9668058,0,.0170827,.0723974,.9105199),Au=new $e().set(1.2249401,-.2249404,0,-.0420569,1.0420571,0,-.0196376,-.0786361,1.0982735),fo={[Xt]:{transfer:Wo,primaries:Xo,toReference:i=>i,fromReference:i=>i},[Tt]:{transfer:Mt,primaries:Xo,toReference:i=>i.convertSRGBToLinear(),fromReference:i=>i.convertLinearToSRGB()},[Aa]:{transfer:Wo,primaries:qo,toReference:i=>i.applyMatrix3(Au),fromReference:i=>i.applyMatrix3(Tu)},[Al]:{transfer:Mt,primaries:qo,toReference:i=>i.convertSRGBToLinear().applyMatrix3(Au),fromReference:i=>i.applyMatrix3(Tu).convertLinearToSRGB()}},bm=new Set([Xt,Aa]),lt={enabled:!0,_workingColorSpace:Xt,get workingColorSpace(){return this._workingColorSpace},set workingColorSpace(i){if(!bm.has(i))throw new Error(`Unsupported working color space, "${i}".`);this._workingColorSpace=i},convert:function(i,e,t){if(this.enabled===!1||e===t||!e||!t)return i;let n=fo[e].toReference,s=fo[t].fromReference;return s(n(i))},fromWorkingColorSpace:function(i,e){return this.convert(i,this._workingColorSpace,e)},toWorkingColorSpace:function(i,e){return this.convert(i,e,this._workingColorSpace)},getPrimaries:function(i){return fo[i].primaries},getTransfer:function(i){return i===Rn?Wo:fo[i].transfer}};function Vs(i){return i<.04045?i*.0773993808:Math.pow(i*.9478672986+.0521327014,2.4)}function pc(i){return i<.0031308?i*12.92:1.055*Math.pow(i,.41666)-.055}var Ms,Zo=class{static getDataURL(e){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement=="undefined")return e.src;let t;if(e instanceof HTMLCanvasElement)t=e;else{Ms===void 0&&(Ms=Ur("canvas")),Ms.width=e.width,Ms.height=e.height;let n=Ms.getContext("2d");e instanceof ImageData?n.putImageData(e,0,0):n.drawImage(e,0,0,e.width,e.height),t=Ms}return t.width>2048||t.height>2048?(console.warn("THREE.ImageUtils.getDataURL: Image converted to jpg for performance reasons",e),t.toDataURL("image/jpeg",.6)):t.toDataURL("image/png")}static sRGBToLinear(e){if(typeof HTMLImageElement!="undefined"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement!="undefined"&&e instanceof HTMLCanvasElement||typeof ImageBitmap!="undefined"&&e instanceof ImageBitmap){let t=Ur("canvas");t.width=e.width,t.height=e.height;let n=t.getContext("2d");n.drawImage(e,0,0,e.width,e.height);let s=n.getImageData(0,0,e.width,e.height),r=s.data;for(let o=0;o<r.length;o++)r[o]=Vs(r[o]/255)*255;return n.putImageData(s,0,0),t}else if(e.data){let t=e.data.slice(0);for(let n=0;n<t.length;n++)t instanceof Uint8Array||t instanceof Uint8ClampedArray?t[n]=Math.floor(Vs(t[n]/255)*255):t[n]=Vs(t[n]);return{data:t,width:e.width,height:e.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}},wm=0,Ko=class{constructor(e=null){this.isSource=!0,Object.defineProperty(this,"id",{value:wm++}),this.uuid=Fn(),this.data=e,this.version=0}set needsUpdate(e){e===!0&&this.version++}toJSON(e){let t=e===void 0||typeof e=="string";if(!t&&e.images[this.uuid]!==void 0)return e.images[this.uuid];let n={uuid:this.uuid,url:""},s=this.data;if(s!==null){let r;if(Array.isArray(s)){r=[];for(let o=0,a=s.length;o<a;o++)s[o].isDataTexture?r.push(mc(s[o].image)):r.push(mc(s[o]))}else r=mc(s);n.url=r}return t||(e.images[this.uuid]=n),n}};function mc(i){return typeof HTMLImageElement!="undefined"&&i instanceof HTMLImageElement||typeof HTMLCanvasElement!="undefined"&&i instanceof HTMLCanvasElement||typeof ImageBitmap!="undefined"&&i instanceof ImageBitmap?Zo.getDataURL(i):i.data?{data:Array.from(i.data),width:i.width,height:i.height,type:i.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}var Sm=0,on=class i extends li{constructor(e=i.DEFAULT_IMAGE,t=i.DEFAULT_MAPPING,n=Mn,s=Mn,r=un,o=Pi,a=An,c=Ci,l=i.DEFAULT_ANISOTROPY,h=Rn){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:Sm++}),this.uuid=Fn(),this.name="",this.source=new Ko(e),this.mipmaps=[],this.mapping=t,this.channel=0,this.wrapS=n,this.wrapT=s,this.magFilter=r,this.minFilter=o,this.anisotropy=l,this.format=a,this.internalFormat=null,this.type=c,this.offset=new He(0,0),this.repeat=new He(1,1),this.center=new He(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new $e,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,typeof h=="string"?this.colorSpace=h:(Ir("THREE.Texture: Property .encoding has been replaced by .colorSpace."),this.colorSpace=h===Qi?Tt:Rn),this.userData={},this.version=0,this.onUpdate=null,this.isRenderTargetTexture=!1,this.needsPMREMUpdate=!1}get image(){return this.source.data}set image(e=null){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}toJSON(e){let t=e===void 0||typeof e=="string";if(!t&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];let n={metadata:{version:4.6,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(n.userData=this.userData),t||(e.textures[this.uuid]=n),n}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==Rd)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case es:e.x=e.x-Math.floor(e.x);break;case Mn:e.x=e.x<0?0:1;break;case Dr:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case es:e.y=e.y-Math.floor(e.y);break;case Mn:e.y=e.y<0?0:1;break;case Dr:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}get encoding(){return Ir("THREE.Texture: Property .encoding has been replaced by .colorSpace."),this.colorSpace===Tt?Qi:Od}set encoding(e){Ir("THREE.Texture: Property .encoding has been replaced by .colorSpace."),this.colorSpace=e===Qi?Tt:Rn}};on.DEFAULT_IMAGE=null;on.DEFAULT_MAPPING=Rd;on.DEFAULT_ANISOTROPY=1;var pt=class i{constructor(e=0,t=0,n=0,s=1){i.prototype.isVector4=!0,this.x=e,this.y=t,this.z=n,this.w=s}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,t,n,s){return this.x=e,this.y=t,this.z=n,this.w=s,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;case 3:this.w=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this.w=e.w+t.w,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this.w+=e.w*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this.w=e.w-t.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){let t=this.x,n=this.y,s=this.z,r=this.w,o=e.elements;return this.x=o[0]*t+o[4]*n+o[8]*s+o[12]*r,this.y=o[1]*t+o[5]*n+o[9]*s+o[13]*r,this.z=o[2]*t+o[6]*n+o[10]*s+o[14]*r,this.w=o[3]*t+o[7]*n+o[11]*s+o[15]*r,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);let t=Math.sqrt(1-e.w*e.w);return t<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/t,this.y=e.y/t,this.z=e.z/t),this}setAxisAngleFromRotationMatrix(e){let t,n,s,r,c=e.elements,l=c[0],h=c[4],u=c[8],d=c[1],f=c[5],g=c[9],x=c[2],m=c[6],p=c[10];if(Math.abs(h-d)<.01&&Math.abs(u-x)<.01&&Math.abs(g-m)<.01){if(Math.abs(h+d)<.1&&Math.abs(u+x)<.1&&Math.abs(g+m)<.1&&Math.abs(l+f+p-3)<.1)return this.set(1,0,0,0),this;t=Math.PI;let _=(l+1)/2,b=(f+1)/2,C=(p+1)/2,A=(h+d)/4,R=(u+x)/4,O=(g+m)/4;return _>b&&_>C?_<.01?(n=0,s=.707106781,r=.707106781):(n=Math.sqrt(_),s=A/n,r=R/n):b>C?b<.01?(n=.707106781,s=0,r=.707106781):(s=Math.sqrt(b),n=A/s,r=O/s):C<.01?(n=.707106781,s=.707106781,r=0):(r=Math.sqrt(C),n=R/r,s=O/r),this.set(n,s,r,t),this}let y=Math.sqrt((m-g)*(m-g)+(u-x)*(u-x)+(d-h)*(d-h));return Math.abs(y)<.001&&(y=1),this.x=(m-g)/y,this.y=(u-x)/y,this.z=(d-h)/y,this.w=Math.acos((l+f+p-1)/2),this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this.z=Math.max(e.z,Math.min(t.z,this.z)),this.w=Math.max(e.w,Math.min(t.w,this.w)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this.z=Math.max(e,Math.min(t,this.z)),this.w=Math.max(e,Math.min(t,this.w)),this}clampLength(e,t){let n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(e,Math.min(t,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this.w+=(e.w-this.w)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this.w=e.w+(t.w-e.w)*n,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this.w=e[t+3],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e[t+3]=this.w,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this.w=e.getW(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}},Yc=class extends li{constructor(e=1,t=1,n={}){super(),this.isRenderTarget=!0,this.width=e,this.height=t,this.depth=1,this.scissor=new pt(0,0,e,t),this.scissorTest=!1,this.viewport=new pt(0,0,e,t);let s={width:e,height:t,depth:1};n.encoding!==void 0&&(Ir("THREE.WebGLRenderTarget: option.encoding has been replaced by option.colorSpace."),n.colorSpace=n.encoding===Qi?Tt:Rn),n=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:un,depthBuffer:!0,stencilBuffer:!1,depthTexture:null,samples:0},n),this.texture=new on(s,n.mapping,n.wrapS,n.wrapT,n.magFilter,n.minFilter,n.format,n.type,n.anisotropy,n.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.flipY=!1,this.texture.generateMipmaps=n.generateMipmaps,this.texture.internalFormat=n.internalFormat,this.depthBuffer=n.depthBuffer,this.stencilBuffer=n.stencilBuffer,this.depthTexture=n.depthTexture,this.samples=n.samples}setSize(e,t,n=1){(this.width!==e||this.height!==t||this.depth!==n)&&(this.width=e,this.height=t,this.depth=n,this.texture.image.width=e,this.texture.image.height=t,this.texture.image.depth=n,this.dispose()),this.viewport.set(0,0,e,t),this.scissor.set(0,0,e,t)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.texture=e.texture.clone(),this.texture.isRenderTargetTexture=!0;let t=Object.assign({},e.texture.image);return this.texture.source=new Ko(t),this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,e.depthTexture!==null&&(this.depthTexture=e.depthTexture.clone()),this.samples=e.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}},hi=class extends Yc{constructor(e=1,t=1,n={}){super(e,t,n),this.isWebGLRenderTarget=!0}},$o=class extends on{constructor(e=null,t=1,n=1,s=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:t,height:n,depth:s},this.magFilter=Vt,this.minFilter=Vt,this.wrapR=Mn,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}};var jc=class extends on{constructor(e=null,t=1,n=1,s=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:t,height:n,depth:s},this.magFilter=Vt,this.minFilter=Vt,this.wrapR=Mn,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}};var Gt=class{constructor(e=0,t=0,n=0,s=1){this.isQuaternion=!0,this._x=e,this._y=t,this._z=n,this._w=s}static slerpFlat(e,t,n,s,r,o,a){let c=n[s+0],l=n[s+1],h=n[s+2],u=n[s+3],d=r[o+0],f=r[o+1],g=r[o+2],x=r[o+3];if(a===0){e[t+0]=c,e[t+1]=l,e[t+2]=h,e[t+3]=u;return}if(a===1){e[t+0]=d,e[t+1]=f,e[t+2]=g,e[t+3]=x;return}if(u!==x||c!==d||l!==f||h!==g){let m=1-a,p=c*d+l*f+h*g+u*x,y=p>=0?1:-1,_=1-p*p;if(_>Number.EPSILON){let C=Math.sqrt(_),A=Math.atan2(C,p*y);m=Math.sin(m*A)/C,a=Math.sin(a*A)/C}let b=a*y;if(c=c*m+d*b,l=l*m+f*b,h=h*m+g*b,u=u*m+x*b,m===1-a){let C=1/Math.sqrt(c*c+l*l+h*h+u*u);c*=C,l*=C,h*=C,u*=C}}e[t]=c,e[t+1]=l,e[t+2]=h,e[t+3]=u}static multiplyQuaternionsFlat(e,t,n,s,r,o){let a=n[s],c=n[s+1],l=n[s+2],h=n[s+3],u=r[o],d=r[o+1],f=r[o+2],g=r[o+3];return e[t]=a*g+h*u+c*f-l*d,e[t+1]=c*g+h*d+l*u-a*f,e[t+2]=l*g+h*f+a*d-c*u,e[t+3]=h*g-a*u-c*d-l*f,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,t,n,s){return this._x=e,this._y=t,this._z=n,this._w=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,t=!0){let n=e._x,s=e._y,r=e._z,o=e._order,a=Math.cos,c=Math.sin,l=a(n/2),h=a(s/2),u=a(r/2),d=c(n/2),f=c(s/2),g=c(r/2);switch(o){case"XYZ":this._x=d*h*u+l*f*g,this._y=l*f*u-d*h*g,this._z=l*h*g+d*f*u,this._w=l*h*u-d*f*g;break;case"YXZ":this._x=d*h*u+l*f*g,this._y=l*f*u-d*h*g,this._z=l*h*g-d*f*u,this._w=l*h*u+d*f*g;break;case"ZXY":this._x=d*h*u-l*f*g,this._y=l*f*u+d*h*g,this._z=l*h*g+d*f*u,this._w=l*h*u-d*f*g;break;case"ZYX":this._x=d*h*u-l*f*g,this._y=l*f*u+d*h*g,this._z=l*h*g-d*f*u,this._w=l*h*u+d*f*g;break;case"YZX":this._x=d*h*u+l*f*g,this._y=l*f*u+d*h*g,this._z=l*h*g-d*f*u,this._w=l*h*u-d*f*g;break;case"XZY":this._x=d*h*u-l*f*g,this._y=l*f*u-d*h*g,this._z=l*h*g+d*f*u,this._w=l*h*u+d*f*g;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+o)}return t===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,t){let n=t/2,s=Math.sin(n);return this._x=e.x*s,this._y=e.y*s,this._z=e.z*s,this._w=Math.cos(n),this._onChangeCallback(),this}setFromRotationMatrix(e){let t=e.elements,n=t[0],s=t[4],r=t[8],o=t[1],a=t[5],c=t[9],l=t[2],h=t[6],u=t[10],d=n+a+u;if(d>0){let f=.5/Math.sqrt(d+1);this._w=.25/f,this._x=(h-c)*f,this._y=(r-l)*f,this._z=(o-s)*f}else if(n>a&&n>u){let f=2*Math.sqrt(1+n-a-u);this._w=(h-c)/f,this._x=.25*f,this._y=(s+o)/f,this._z=(r+l)/f}else if(a>u){let f=2*Math.sqrt(1+a-n-u);this._w=(r-l)/f,this._x=(s+o)/f,this._y=.25*f,this._z=(c+h)/f}else{let f=2*Math.sqrt(1+u-n-a);this._w=(o-s)/f,this._x=(r+l)/f,this._y=(c+h)/f,this._z=.25*f}return this._onChangeCallback(),this}setFromUnitVectors(e,t){let n=e.dot(t)+1;return n<Number.EPSILON?(n=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=n):(this._x=0,this._y=-e.z,this._z=e.y,this._w=n)):(this._x=e.y*t.z-e.z*t.y,this._y=e.z*t.x-e.x*t.z,this._z=e.x*t.y-e.y*t.x,this._w=n),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(rn(this.dot(e),-1,1)))}rotateTowards(e,t){let n=this.angleTo(e);if(n===0)return this;let s=Math.min(1,t/n);return this.slerp(e,s),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,t){let n=e._x,s=e._y,r=e._z,o=e._w,a=t._x,c=t._y,l=t._z,h=t._w;return this._x=n*h+o*a+s*l-r*c,this._y=s*h+o*c+r*a-n*l,this._z=r*h+o*l+n*c-s*a,this._w=o*h-n*a-s*c-r*l,this._onChangeCallback(),this}slerp(e,t){if(t===0)return this;if(t===1)return this.copy(e);let n=this._x,s=this._y,r=this._z,o=this._w,a=o*e._w+n*e._x+s*e._y+r*e._z;if(a<0?(this._w=-e._w,this._x=-e._x,this._y=-e._y,this._z=-e._z,a=-a):this.copy(e),a>=1)return this._w=o,this._x=n,this._y=s,this._z=r,this;let c=1-a*a;if(c<=Number.EPSILON){let f=1-t;return this._w=f*o+t*this._w,this._x=f*n+t*this._x,this._y=f*s+t*this._y,this._z=f*r+t*this._z,this.normalize(),this}let l=Math.sqrt(c),h=Math.atan2(l,a),u=Math.sin((1-t)*h)/l,d=Math.sin(t*h)/l;return this._w=o*u+this._w*d,this._x=n*u+this._x*d,this._y=s*u+this._y*d,this._z=r*u+this._z*d,this._onChangeCallback(),this}slerpQuaternions(e,t,n){return this.copy(e).slerp(t,n)}random(){let e=Math.random(),t=Math.sqrt(1-e),n=Math.sqrt(e),s=2*Math.PI*Math.random(),r=2*Math.PI*Math.random();return this.set(t*Math.cos(s),n*Math.sin(r),n*Math.cos(r),t*Math.sin(s))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,t=0){return this._x=e[t],this._y=e[t+1],this._z=e[t+2],this._w=e[t+3],this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._w,e}fromBufferAttribute(e,t){return this._x=e.getX(t),this._y=e.getY(t),this._z=e.getZ(t),this._w=e.getW(t),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}},I=class i{constructor(e=0,t=0,n=0){i.prototype.isVector3=!0,this.x=e,this.y=t,this.z=n}set(e,t,n){return n===void 0&&(n=this.z),this.x=e,this.y=t,this.z=n,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,t){return this.x=e.x*t.x,this.y=e.y*t.y,this.z=e.z*t.z,this}applyEuler(e){return this.applyQuaternion(Ru.setFromEuler(e))}applyAxisAngle(e,t){return this.applyQuaternion(Ru.setFromAxisAngle(e,t))}applyMatrix3(e){let t=this.x,n=this.y,s=this.z,r=e.elements;return this.x=r[0]*t+r[3]*n+r[6]*s,this.y=r[1]*t+r[4]*n+r[7]*s,this.z=r[2]*t+r[5]*n+r[8]*s,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){let t=this.x,n=this.y,s=this.z,r=e.elements,o=1/(r[3]*t+r[7]*n+r[11]*s+r[15]);return this.x=(r[0]*t+r[4]*n+r[8]*s+r[12])*o,this.y=(r[1]*t+r[5]*n+r[9]*s+r[13])*o,this.z=(r[2]*t+r[6]*n+r[10]*s+r[14])*o,this}applyQuaternion(e){let t=this.x,n=this.y,s=this.z,r=e.x,o=e.y,a=e.z,c=e.w,l=2*(o*s-a*n),h=2*(a*t-r*s),u=2*(r*n-o*t);return this.x=t+c*l+o*u-a*h,this.y=n+c*h+a*l-r*u,this.z=s+c*u+r*h-o*l,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){let t=this.x,n=this.y,s=this.z,r=e.elements;return this.x=r[0]*t+r[4]*n+r[8]*s,this.y=r[1]*t+r[5]*n+r[9]*s,this.z=r[2]*t+r[6]*n+r[10]*s,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this.z=Math.max(e.z,Math.min(t.z,this.z)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this.z=Math.max(e,Math.min(t,this.z)),this}clampLength(e,t){let n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(e,Math.min(t,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,t){let n=e.x,s=e.y,r=e.z,o=t.x,a=t.y,c=t.z;return this.x=s*c-r*a,this.y=r*o-n*c,this.z=n*a-s*o,this}projectOnVector(e){let t=e.lengthSq();if(t===0)return this.set(0,0,0);let n=e.dot(this)/t;return this.copy(e).multiplyScalar(n)}projectOnPlane(e){return gc.copy(this).projectOnVector(e),this.sub(gc)}reflect(e){return this.sub(gc.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){let t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;let n=this.dot(e)/t;return Math.acos(rn(n,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){let t=this.x-e.x,n=this.y-e.y,s=this.z-e.z;return t*t+n*n+s*s}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,t,n){let s=Math.sin(t)*e;return this.x=s*Math.sin(n),this.y=Math.cos(t)*e,this.z=s*Math.cos(n),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,t,n){return this.x=e*Math.sin(t),this.y=n,this.z=e*Math.cos(t),this}setFromMatrixPosition(e){let t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this}setFromMatrixScale(e){let t=this.setFromMatrixColumn(e,0).length(),n=this.setFromMatrixColumn(e,1).length(),s=this.setFromMatrixColumn(e,2).length();return this.x=t,this.y=n,this.z=s,this}setFromMatrixColumn(e,t){return this.fromArray(e.elements,t*4)}setFromMatrix3Column(e,t){return this.fromArray(e.elements,t*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){let e=(Math.random()-.5)*2,t=Math.random()*Math.PI*2,n=Math.sqrt(1-e**2);return this.x=n*Math.cos(t),this.y=n*Math.sin(t),this.z=e,this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}},gc=new I,Ru=new Gt,xn=class{constructor(e=new I(1/0,1/0,1/0),t=new I(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=t}set(e,t){return this.min.copy(e),this.max.copy(t),this}setFromArray(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t+=3)this.expandByPoint(Nn.fromArray(e,t));return this}setFromBufferAttribute(e){this.makeEmpty();for(let t=0,n=e.count;t<n;t++)this.expandByPoint(Nn.fromBufferAttribute(e,t));return this}setFromPoints(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t++)this.expandByPoint(e[t]);return this}setFromCenterAndSize(e,t){let n=Nn.copy(t).multiplyScalar(.5);return this.min.copy(e).sub(n),this.max.copy(e).add(n),this}setFromObject(e,t=!1){return this.makeEmpty(),this.expandByObject(e,t)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,t=!1){e.updateWorldMatrix(!1,!1);let n=e.geometry;if(n!==void 0){let r=n.getAttribute("position");if(t===!0&&r!==void 0&&e.isInstancedMesh!==!0)for(let o=0,a=r.count;o<a;o++)e.isMesh===!0?e.getVertexPosition(o,Nn):Nn.fromBufferAttribute(r,o),Nn.applyMatrix4(e.matrixWorld),this.expandByPoint(Nn);else e.boundingBox!==void 0?(e.boundingBox===null&&e.computeBoundingBox(),po.copy(e.boundingBox)):(n.boundingBox===null&&n.computeBoundingBox(),po.copy(n.boundingBox)),po.applyMatrix4(e.matrixWorld),this.union(po)}let s=e.children;for(let r=0,o=s.length;r<o;r++)this.expandByObject(s[r],t);return this}containsPoint(e){return!(e.x<this.min.x||e.x>this.max.x||e.y<this.min.y||e.y>this.max.y||e.z<this.min.z||e.z>this.max.z)}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,t){return t.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return!(e.max.x<this.min.x||e.min.x>this.max.x||e.max.y<this.min.y||e.min.y>this.max.y||e.max.z<this.min.z||e.min.z>this.max.z)}intersectsSphere(e){return this.clampPoint(e.center,Nn),Nn.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let t,n;return e.normal.x>0?(t=e.normal.x*this.min.x,n=e.normal.x*this.max.x):(t=e.normal.x*this.max.x,n=e.normal.x*this.min.x),e.normal.y>0?(t+=e.normal.y*this.min.y,n+=e.normal.y*this.max.y):(t+=e.normal.y*this.max.y,n+=e.normal.y*this.min.y),e.normal.z>0?(t+=e.normal.z*this.min.z,n+=e.normal.z*this.max.z):(t+=e.normal.z*this.max.z,n+=e.normal.z*this.min.z),t<=-e.constant&&n>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(br),mo.subVectors(this.max,br),bs.subVectors(e.a,br),ws.subVectors(e.b,br),Ss.subVectors(e.c,br),vi.subVectors(ws,bs),Mi.subVectors(Ss,ws),Wi.subVectors(bs,Ss);let t=[0,-vi.z,vi.y,0,-Mi.z,Mi.y,0,-Wi.z,Wi.y,vi.z,0,-vi.x,Mi.z,0,-Mi.x,Wi.z,0,-Wi.x,-vi.y,vi.x,0,-Mi.y,Mi.x,0,-Wi.y,Wi.x,0];return!xc(t,bs,ws,Ss,mo)||(t=[1,0,0,0,1,0,0,0,1],!xc(t,bs,ws,Ss,mo))?!1:(go.crossVectors(vi,Mi),t=[go.x,go.y,go.z],xc(t,bs,ws,Ss,mo))}clampPoint(e,t){return t.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,Nn).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(Nn).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(Qn[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),Qn[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),Qn[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),Qn[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),Qn[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),Qn[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),Qn[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),Qn[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(Qn),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}},Qn=[new I,new I,new I,new I,new I,new I,new I,new I],Nn=new I,po=new xn,bs=new I,ws=new I,Ss=new I,vi=new I,Mi=new I,Wi=new I,br=new I,mo=new I,go=new I,Xi=new I;function xc(i,e,t,n,s){for(let r=0,o=i.length-3;r<=o;r+=3){Xi.fromArray(i,r);let a=s.x*Math.abs(Xi.x)+s.y*Math.abs(Xi.y)+s.z*Math.abs(Xi.z),c=e.dot(Xi),l=t.dot(Xi),h=n.dot(Xi);if(Math.max(-Math.max(c,l,h),Math.min(c,l,h))>a)return!1}return!0}var Em=new xn,wr=new I,_c=new I,bn=class{constructor(e=new I,t=-1){this.isSphere=!0,this.center=e,this.radius=t}set(e,t){return this.center.copy(e),this.radius=t,this}setFromPoints(e,t){let n=this.center;t!==void 0?n.copy(t):Em.setFromPoints(e).getCenter(n);let s=0;for(let r=0,o=e.length;r<o;r++)s=Math.max(s,n.distanceToSquared(e[r]));return this.radius=Math.sqrt(s),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){let t=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=t*t}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,t){let n=this.center.distanceToSquared(e);return t.copy(e),n>this.radius*this.radius&&(t.sub(this.center).normalize(),t.multiplyScalar(this.radius).add(this.center)),t}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;wr.subVectors(e,this.center);let t=wr.lengthSq();if(t>this.radius*this.radius){let n=Math.sqrt(t),s=(n-this.radius)*.5;this.center.addScaledVector(wr,s/n),this.radius+=s}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(_c.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(wr.copy(e.center).add(_c)),this.expandByPoint(wr.copy(e.center).sub(_c))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}},ei=new I,yc=new I,xo=new I,bi=new I,vc=new I,_o=new I,Mc=new I,Ks=class{constructor(e=new I,t=new I(0,0,-1)){this.origin=e,this.direction=t}set(e,t){return this.origin.copy(e),this.direction.copy(t),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,t){return t.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,ei)),this}closestPointToPoint(e,t){t.subVectors(e,this.origin);let n=t.dot(this.direction);return n<0?t.copy(this.origin):t.copy(this.origin).addScaledVector(this.direction,n)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){let t=ei.subVectors(e,this.origin).dot(this.direction);return t<0?this.origin.distanceToSquared(e):(ei.copy(this.origin).addScaledVector(this.direction,t),ei.distanceToSquared(e))}distanceSqToSegment(e,t,n,s){yc.copy(e).add(t).multiplyScalar(.5),xo.copy(t).sub(e).normalize(),bi.copy(this.origin).sub(yc);let r=e.distanceTo(t)*.5,o=-this.direction.dot(xo),a=bi.dot(this.direction),c=-bi.dot(xo),l=bi.lengthSq(),h=Math.abs(1-o*o),u,d,f,g;if(h>0)if(u=o*c-a,d=o*a-c,g=r*h,u>=0)if(d>=-g)if(d<=g){let x=1/h;u*=x,d*=x,f=u*(u+o*d+2*a)+d*(o*u+d+2*c)+l}else d=r,u=Math.max(0,-(o*d+a)),f=-u*u+d*(d+2*c)+l;else d=-r,u=Math.max(0,-(o*d+a)),f=-u*u+d*(d+2*c)+l;else d<=-g?(u=Math.max(0,-(-o*r+a)),d=u>0?-r:Math.min(Math.max(-r,-c),r),f=-u*u+d*(d+2*c)+l):d<=g?(u=0,d=Math.min(Math.max(-r,-c),r),f=d*(d+2*c)+l):(u=Math.max(0,-(o*r+a)),d=u>0?r:Math.min(Math.max(-r,-c),r),f=-u*u+d*(d+2*c)+l);else d=o>0?-r:r,u=Math.max(0,-(o*d+a)),f=-u*u+d*(d+2*c)+l;return n&&n.copy(this.origin).addScaledVector(this.direction,u),s&&s.copy(yc).addScaledVector(xo,d),f}intersectSphere(e,t){ei.subVectors(e.center,this.origin);let n=ei.dot(this.direction),s=ei.dot(ei)-n*n,r=e.radius*e.radius;if(s>r)return null;let o=Math.sqrt(r-s),a=n-o,c=n+o;return c<0?null:a<0?this.at(c,t):this.at(a,t)}intersectsSphere(e){return this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){let t=e.normal.dot(this.direction);if(t===0)return e.distanceToPoint(this.origin)===0?0:null;let n=-(this.origin.dot(e.normal)+e.constant)/t;return n>=0?n:null}intersectPlane(e,t){let n=this.distanceToPlane(e);return n===null?null:this.at(n,t)}intersectsPlane(e){let t=e.distanceToPoint(this.origin);return t===0||e.normal.dot(this.direction)*t<0}intersectBox(e,t){let n,s,r,o,a,c,l=1/this.direction.x,h=1/this.direction.y,u=1/this.direction.z,d=this.origin;return l>=0?(n=(e.min.x-d.x)*l,s=(e.max.x-d.x)*l):(n=(e.max.x-d.x)*l,s=(e.min.x-d.x)*l),h>=0?(r=(e.min.y-d.y)*h,o=(e.max.y-d.y)*h):(r=(e.max.y-d.y)*h,o=(e.min.y-d.y)*h),n>o||r>s||((r>n||isNaN(n))&&(n=r),(o<s||isNaN(s))&&(s=o),u>=0?(a=(e.min.z-d.z)*u,c=(e.max.z-d.z)*u):(a=(e.max.z-d.z)*u,c=(e.min.z-d.z)*u),n>c||a>s)||((a>n||n!==n)&&(n=a),(c<s||s!==s)&&(s=c),s<0)?null:this.at(n>=0?n:s,t)}intersectsBox(e){return this.intersectBox(e,ei)!==null}intersectTriangle(e,t,n,s,r){vc.subVectors(t,e),_o.subVectors(n,e),Mc.crossVectors(vc,_o);let o=this.direction.dot(Mc),a;if(o>0){if(s)return null;a=1}else if(o<0)a=-1,o=-o;else return null;bi.subVectors(this.origin,e);let c=a*this.direction.dot(_o.crossVectors(bi,_o));if(c<0)return null;let l=a*this.direction.dot(vc.cross(bi));if(l<0||c+l>o)return null;let h=-a*bi.dot(Mc);return h<0?null:this.at(h/o,r)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}},Je=class i{constructor(e,t,n,s,r,o,a,c,l,h,u,d,f,g,x,m){i.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,t,n,s,r,o,a,c,l,h,u,d,f,g,x,m)}set(e,t,n,s,r,o,a,c,l,h,u,d,f,g,x,m){let p=this.elements;return p[0]=e,p[4]=t,p[8]=n,p[12]=s,p[1]=r,p[5]=o,p[9]=a,p[13]=c,p[2]=l,p[6]=h,p[10]=u,p[14]=d,p[3]=f,p[7]=g,p[11]=x,p[15]=m,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new i().fromArray(this.elements)}copy(e){let t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],t[9]=n[9],t[10]=n[10],t[11]=n[11],t[12]=n[12],t[13]=n[13],t[14]=n[14],t[15]=n[15],this}copyPosition(e){let t=this.elements,n=e.elements;return t[12]=n[12],t[13]=n[13],t[14]=n[14],this}setFromMatrix3(e){let t=e.elements;return this.set(t[0],t[3],t[6],0,t[1],t[4],t[7],0,t[2],t[5],t[8],0,0,0,0,1),this}extractBasis(e,t,n){return e.setFromMatrixColumn(this,0),t.setFromMatrixColumn(this,1),n.setFromMatrixColumn(this,2),this}makeBasis(e,t,n){return this.set(e.x,t.x,n.x,0,e.y,t.y,n.y,0,e.z,t.z,n.z,0,0,0,0,1),this}extractRotation(e){let t=this.elements,n=e.elements,s=1/Es.setFromMatrixColumn(e,0).length(),r=1/Es.setFromMatrixColumn(e,1).length(),o=1/Es.setFromMatrixColumn(e,2).length();return t[0]=n[0]*s,t[1]=n[1]*s,t[2]=n[2]*s,t[3]=0,t[4]=n[4]*r,t[5]=n[5]*r,t[6]=n[6]*r,t[7]=0,t[8]=n[8]*o,t[9]=n[9]*o,t[10]=n[10]*o,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromEuler(e){let t=this.elements,n=e.x,s=e.y,r=e.z,o=Math.cos(n),a=Math.sin(n),c=Math.cos(s),l=Math.sin(s),h=Math.cos(r),u=Math.sin(r);if(e.order==="XYZ"){let d=o*h,f=o*u,g=a*h,x=a*u;t[0]=c*h,t[4]=-c*u,t[8]=l,t[1]=f+g*l,t[5]=d-x*l,t[9]=-a*c,t[2]=x-d*l,t[6]=g+f*l,t[10]=o*c}else if(e.order==="YXZ"){let d=c*h,f=c*u,g=l*h,x=l*u;t[0]=d+x*a,t[4]=g*a-f,t[8]=o*l,t[1]=o*u,t[5]=o*h,t[9]=-a,t[2]=f*a-g,t[6]=x+d*a,t[10]=o*c}else if(e.order==="ZXY"){let d=c*h,f=c*u,g=l*h,x=l*u;t[0]=d-x*a,t[4]=-o*u,t[8]=g+f*a,t[1]=f+g*a,t[5]=o*h,t[9]=x-d*a,t[2]=-o*l,t[6]=a,t[10]=o*c}else if(e.order==="ZYX"){let d=o*h,f=o*u,g=a*h,x=a*u;t[0]=c*h,t[4]=g*l-f,t[8]=d*l+x,t[1]=c*u,t[5]=x*l+d,t[9]=f*l-g,t[2]=-l,t[6]=a*c,t[10]=o*c}else if(e.order==="YZX"){let d=o*c,f=o*l,g=a*c,x=a*l;t[0]=c*h,t[4]=x-d*u,t[8]=g*u+f,t[1]=u,t[5]=o*h,t[9]=-a*h,t[2]=-l*h,t[6]=f*u+g,t[10]=d-x*u}else if(e.order==="XZY"){let d=o*c,f=o*l,g=a*c,x=a*l;t[0]=c*h,t[4]=-u,t[8]=l*h,t[1]=d*u+x,t[5]=o*h,t[9]=f*u-g,t[2]=g*u-f,t[6]=a*h,t[10]=x*u+d}return t[3]=0,t[7]=0,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromQuaternion(e){return this.compose(Tm,e,Am)}lookAt(e,t,n){let s=this.elements;return yn.subVectors(e,t),yn.lengthSq()===0&&(yn.z=1),yn.normalize(),wi.crossVectors(n,yn),wi.lengthSq()===0&&(Math.abs(n.z)===1?yn.x+=1e-4:yn.z+=1e-4,yn.normalize(),wi.crossVectors(n,yn)),wi.normalize(),yo.crossVectors(yn,wi),s[0]=wi.x,s[4]=yo.x,s[8]=yn.x,s[1]=wi.y,s[5]=yo.y,s[9]=yn.y,s[2]=wi.z,s[6]=yo.z,s[10]=yn.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){let n=e.elements,s=t.elements,r=this.elements,o=n[0],a=n[4],c=n[8],l=n[12],h=n[1],u=n[5],d=n[9],f=n[13],g=n[2],x=n[6],m=n[10],p=n[14],y=n[3],_=n[7],b=n[11],C=n[15],A=s[0],R=s[4],O=s[8],v=s[12],S=s[1],F=s[5],j=s[9],ee=s[13],z=s[2],B=s[6],Q=s[10],Z=s[14],K=s[3],$=s[7],te=s[11],he=s[15];return r[0]=o*A+a*S+c*z+l*K,r[4]=o*R+a*F+c*B+l*$,r[8]=o*O+a*j+c*Q+l*te,r[12]=o*v+a*ee+c*Z+l*he,r[1]=h*A+u*S+d*z+f*K,r[5]=h*R+u*F+d*B+f*$,r[9]=h*O+u*j+d*Q+f*te,r[13]=h*v+u*ee+d*Z+f*he,r[2]=g*A+x*S+m*z+p*K,r[6]=g*R+x*F+m*B+p*$,r[10]=g*O+x*j+m*Q+p*te,r[14]=g*v+x*ee+m*Z+p*he,r[3]=y*A+_*S+b*z+C*K,r[7]=y*R+_*F+b*B+C*$,r[11]=y*O+_*j+b*Q+C*te,r[15]=y*v+_*ee+b*Z+C*he,this}multiplyScalar(e){let t=this.elements;return t[0]*=e,t[4]*=e,t[8]*=e,t[12]*=e,t[1]*=e,t[5]*=e,t[9]*=e,t[13]*=e,t[2]*=e,t[6]*=e,t[10]*=e,t[14]*=e,t[3]*=e,t[7]*=e,t[11]*=e,t[15]*=e,this}determinant(){let e=this.elements,t=e[0],n=e[4],s=e[8],r=e[12],o=e[1],a=e[5],c=e[9],l=e[13],h=e[2],u=e[6],d=e[10],f=e[14],g=e[3],x=e[7],m=e[11],p=e[15];return g*(+r*c*u-s*l*u-r*a*d+n*l*d+s*a*f-n*c*f)+x*(+t*c*f-t*l*d+r*o*d-s*o*f+s*l*h-r*c*h)+m*(+t*l*u-t*a*f-r*o*u+n*o*f+r*a*h-n*l*h)+p*(-s*a*h-t*c*u+t*a*d+s*o*u-n*o*d+n*c*h)}transpose(){let e=this.elements,t;return t=e[1],e[1]=e[4],e[4]=t,t=e[2],e[2]=e[8],e[8]=t,t=e[6],e[6]=e[9],e[9]=t,t=e[3],e[3]=e[12],e[12]=t,t=e[7],e[7]=e[13],e[13]=t,t=e[11],e[11]=e[14],e[14]=t,this}setPosition(e,t,n){let s=this.elements;return e.isVector3?(s[12]=e.x,s[13]=e.y,s[14]=e.z):(s[12]=e,s[13]=t,s[14]=n),this}invert(){let e=this.elements,t=e[0],n=e[1],s=e[2],r=e[3],o=e[4],a=e[5],c=e[6],l=e[7],h=e[8],u=e[9],d=e[10],f=e[11],g=e[12],x=e[13],m=e[14],p=e[15],y=u*m*l-x*d*l+x*c*f-a*m*f-u*c*p+a*d*p,_=g*d*l-h*m*l-g*c*f+o*m*f+h*c*p-o*d*p,b=h*x*l-g*u*l+g*a*f-o*x*f-h*a*p+o*u*p,C=g*u*c-h*x*c-g*a*d+o*x*d+h*a*m-o*u*m,A=t*y+n*_+s*b+r*C;if(A===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);let R=1/A;return e[0]=y*R,e[1]=(x*d*r-u*m*r-x*s*f+n*m*f+u*s*p-n*d*p)*R,e[2]=(a*m*r-x*c*r+x*s*l-n*m*l-a*s*p+n*c*p)*R,e[3]=(u*c*r-a*d*r-u*s*l+n*d*l+a*s*f-n*c*f)*R,e[4]=_*R,e[5]=(h*m*r-g*d*r+g*s*f-t*m*f-h*s*p+t*d*p)*R,e[6]=(g*c*r-o*m*r-g*s*l+t*m*l+o*s*p-t*c*p)*R,e[7]=(o*d*r-h*c*r+h*s*l-t*d*l-o*s*f+t*c*f)*R,e[8]=b*R,e[9]=(g*u*r-h*x*r-g*n*f+t*x*f+h*n*p-t*u*p)*R,e[10]=(o*x*r-g*a*r+g*n*l-t*x*l-o*n*p+t*a*p)*R,e[11]=(h*a*r-o*u*r-h*n*l+t*u*l+o*n*f-t*a*f)*R,e[12]=C*R,e[13]=(h*x*s-g*u*s+g*n*d-t*x*d-h*n*m+t*u*m)*R,e[14]=(g*a*s-o*x*s-g*n*c+t*x*c+o*n*m-t*a*m)*R,e[15]=(o*u*s-h*a*s+h*n*c-t*u*c-o*n*d+t*a*d)*R,this}scale(e){let t=this.elements,n=e.x,s=e.y,r=e.z;return t[0]*=n,t[4]*=s,t[8]*=r,t[1]*=n,t[5]*=s,t[9]*=r,t[2]*=n,t[6]*=s,t[10]*=r,t[3]*=n,t[7]*=s,t[11]*=r,this}getMaxScaleOnAxis(){let e=this.elements,t=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],n=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],s=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(t,n,s))}makeTranslation(e,t,n){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,t,0,0,1,n,0,0,0,1),this}makeRotationX(e){let t=Math.cos(e),n=Math.sin(e);return this.set(1,0,0,0,0,t,-n,0,0,n,t,0,0,0,0,1),this}makeRotationY(e){let t=Math.cos(e),n=Math.sin(e);return this.set(t,0,n,0,0,1,0,0,-n,0,t,0,0,0,0,1),this}makeRotationZ(e){let t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,0,n,t,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,t){let n=Math.cos(t),s=Math.sin(t),r=1-n,o=e.x,a=e.y,c=e.z,l=r*o,h=r*a;return this.set(l*o+n,l*a-s*c,l*c+s*a,0,l*a+s*c,h*a+n,h*c-s*o,0,l*c-s*a,h*c+s*o,r*c*c+n,0,0,0,0,1),this}makeScale(e,t,n){return this.set(e,0,0,0,0,t,0,0,0,0,n,0,0,0,0,1),this}makeShear(e,t,n,s,r,o){return this.set(1,n,r,0,e,1,o,0,t,s,1,0,0,0,0,1),this}compose(e,t,n){let s=this.elements,r=t._x,o=t._y,a=t._z,c=t._w,l=r+r,h=o+o,u=a+a,d=r*l,f=r*h,g=r*u,x=o*h,m=o*u,p=a*u,y=c*l,_=c*h,b=c*u,C=n.x,A=n.y,R=n.z;return s[0]=(1-(x+p))*C,s[1]=(f+b)*C,s[2]=(g-_)*C,s[3]=0,s[4]=(f-b)*A,s[5]=(1-(d+p))*A,s[6]=(m+y)*A,s[7]=0,s[8]=(g+_)*R,s[9]=(m-y)*R,s[10]=(1-(d+x))*R,s[11]=0,s[12]=e.x,s[13]=e.y,s[14]=e.z,s[15]=1,this}decompose(e,t,n){let s=this.elements,r=Es.set(s[0],s[1],s[2]).length(),o=Es.set(s[4],s[5],s[6]).length(),a=Es.set(s[8],s[9],s[10]).length();this.determinant()<0&&(r=-r),e.x=s[12],e.y=s[13],e.z=s[14],Un.copy(this);let l=1/r,h=1/o,u=1/a;return Un.elements[0]*=l,Un.elements[1]*=l,Un.elements[2]*=l,Un.elements[4]*=h,Un.elements[5]*=h,Un.elements[6]*=h,Un.elements[8]*=u,Un.elements[9]*=u,Un.elements[10]*=u,t.setFromRotationMatrix(Un),n.x=r,n.y=o,n.z=a,this}makePerspective(e,t,n,s,r,o,a=ci){let c=this.elements,l=2*r/(t-e),h=2*r/(n-s),u=(t+e)/(t-e),d=(n+s)/(n-s),f,g;if(a===ci)f=-(o+r)/(o-r),g=-2*o*r/(o-r);else if(a===Yo)f=-o/(o-r),g=-o*r/(o-r);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+a);return c[0]=l,c[4]=0,c[8]=u,c[12]=0,c[1]=0,c[5]=h,c[9]=d,c[13]=0,c[2]=0,c[6]=0,c[10]=f,c[14]=g,c[3]=0,c[7]=0,c[11]=-1,c[15]=0,this}makeOrthographic(e,t,n,s,r,o,a=ci){let c=this.elements,l=1/(t-e),h=1/(n-s),u=1/(o-r),d=(t+e)*l,f=(n+s)*h,g,x;if(a===ci)g=(o+r)*u,x=-2*u;else if(a===Yo)g=r*u,x=-1*u;else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+a);return c[0]=2*l,c[4]=0,c[8]=0,c[12]=-d,c[1]=0,c[5]=2*h,c[9]=0,c[13]=-f,c[2]=0,c[6]=0,c[10]=x,c[14]=-g,c[3]=0,c[7]=0,c[11]=0,c[15]=1,this}equals(e){let t=this.elements,n=e.elements;for(let s=0;s<16;s++)if(t[s]!==n[s])return!1;return!0}fromArray(e,t=0){for(let n=0;n<16;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){let n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e[t+9]=n[9],e[t+10]=n[10],e[t+11]=n[11],e[t+12]=n[12],e[t+13]=n[13],e[t+14]=n[14],e[t+15]=n[15],e}},Es=new I,Un=new Je,Tm=new I(0,0,0),Am=new I(1,1,1),wi=new I,yo=new I,yn=new I,Cu=new Je,Pu=new Gt,Jo=class i{constructor(e=0,t=0,n=0,s=i.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=t,this._z=n,this._order=s}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,t,n,s=this._order){return this._x=e,this._y=t,this._z=n,this._order=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,t=this._order,n=!0){let s=e.elements,r=s[0],o=s[4],a=s[8],c=s[1],l=s[5],h=s[9],u=s[2],d=s[6],f=s[10];switch(t){case"XYZ":this._y=Math.asin(rn(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(-h,f),this._z=Math.atan2(-o,r)):(this._x=Math.atan2(d,l),this._z=0);break;case"YXZ":this._x=Math.asin(-rn(h,-1,1)),Math.abs(h)<.9999999?(this._y=Math.atan2(a,f),this._z=Math.atan2(c,l)):(this._y=Math.atan2(-u,r),this._z=0);break;case"ZXY":this._x=Math.asin(rn(d,-1,1)),Math.abs(d)<.9999999?(this._y=Math.atan2(-u,f),this._z=Math.atan2(-o,l)):(this._y=0,this._z=Math.atan2(c,r));break;case"ZYX":this._y=Math.asin(-rn(u,-1,1)),Math.abs(u)<.9999999?(this._x=Math.atan2(d,f),this._z=Math.atan2(c,r)):(this._x=0,this._z=Math.atan2(-o,l));break;case"YZX":this._z=Math.asin(rn(c,-1,1)),Math.abs(c)<.9999999?(this._x=Math.atan2(-h,l),this._y=Math.atan2(-u,r)):(this._x=0,this._y=Math.atan2(a,f));break;case"XZY":this._z=Math.asin(-rn(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(d,l),this._y=Math.atan2(a,r)):(this._x=Math.atan2(-h,f),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+t)}return this._order=t,n===!0&&this._onChangeCallback(),this}setFromQuaternion(e,t,n){return Cu.makeRotationFromQuaternion(e),this.setFromRotationMatrix(Cu,t,n)}setFromVector3(e,t=this._order){return this.set(e.x,e.y,e.z,t)}reorder(e){return Pu.setFromEuler(this),this.setFromQuaternion(Pu,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}};Jo.DEFAULT_ORDER="XYZ";var Qo=class{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}},Rm=0,Lu=new I,Ts=new Gt,ti=new Je,vo=new I,Sr=new I,Cm=new I,Pm=new Gt,Iu=new I(1,0,0),zu=new I(0,1,0),Du=new I(0,0,1),Lm={type:"added"},Im={type:"removed"},bt=class i extends li{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:Rm++}),this.uuid=Fn(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=i.DEFAULT_UP.clone();let e=new I,t=new Jo,n=new Gt,s=new I(1,1,1);function r(){n.setFromEuler(t,!1)}function o(){t.setFromQuaternion(n,void 0,!1)}t._onChange(r),n._onChange(o),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:t},quaternion:{configurable:!0,enumerable:!0,value:n},scale:{configurable:!0,enumerable:!0,value:s},modelViewMatrix:{value:new Je},normalMatrix:{value:new $e}}),this.matrix=new Je,this.matrixWorld=new Je,this.matrixAutoUpdate=i.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=i.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new Qo,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,t){this.quaternion.setFromAxisAngle(e,t)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,t){return Ts.setFromAxisAngle(e,t),this.quaternion.multiply(Ts),this}rotateOnWorldAxis(e,t){return Ts.setFromAxisAngle(e,t),this.quaternion.premultiply(Ts),this}rotateX(e){return this.rotateOnAxis(Iu,e)}rotateY(e){return this.rotateOnAxis(zu,e)}rotateZ(e){return this.rotateOnAxis(Du,e)}translateOnAxis(e,t){return Lu.copy(e).applyQuaternion(this.quaternion),this.position.add(Lu.multiplyScalar(t)),this}translateX(e){return this.translateOnAxis(Iu,e)}translateY(e){return this.translateOnAxis(zu,e)}translateZ(e){return this.translateOnAxis(Du,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(ti.copy(this.matrixWorld).invert())}lookAt(e,t,n){e.isVector3?vo.copy(e):vo.set(e,t,n);let s=this.parent;this.updateWorldMatrix(!0,!1),Sr.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?ti.lookAt(Sr,vo,this.up):ti.lookAt(vo,Sr,this.up),this.quaternion.setFromRotationMatrix(ti),s&&(ti.extractRotation(s.matrixWorld),Ts.setFromRotationMatrix(ti),this.quaternion.premultiply(Ts.invert()))}add(e){if(arguments.length>1){for(let t=0;t<arguments.length;t++)this.add(arguments[t]);return this}return e===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.parent!==null&&e.parent.remove(e),e.parent=this,this.children.push(e),e.dispatchEvent(Lm)):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.remove(arguments[n]);return this}let t=this.children.indexOf(e);return t!==-1&&(e.parent=null,this.children.splice(t,1),e.dispatchEvent(Im)),this}removeFromParent(){let e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),ti.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),ti.multiply(e.parent.matrixWorld)),e.applyMatrix4(ti),this.add(e),e.updateWorldMatrix(!1,!0),this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,t){if(this[e]===t)return this;for(let n=0,s=this.children.length;n<s;n++){let o=this.children[n].getObjectByProperty(e,t);if(o!==void 0)return o}}getObjectsByProperty(e,t,n=[]){this[e]===t&&n.push(this);let s=this.children;for(let r=0,o=s.length;r<o;r++)s[r].getObjectsByProperty(e,t,n);return n}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Sr,e,Cm),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Sr,Pm,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);let t=this.matrixWorld.elements;return e.set(t[8],t[9],t[10]).normalize()}raycast(){}traverse(e){e(this);let t=this.children;for(let n=0,s=t.length;n<s;n++)t[n].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);let t=this.children;for(let n=0,s=t.length;n<s;n++)t[n].traverseVisible(e)}traverseAncestors(e){let t=this.parent;t!==null&&(e(t),t.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix),this.matrixWorldNeedsUpdate=!1,e=!0);let t=this.children;for(let n=0,s=t.length;n<s;n++){let r=t[n];(r.matrixWorldAutoUpdate===!0||e===!0)&&r.updateMatrixWorld(e)}}updateWorldMatrix(e,t){let n=this.parent;if(e===!0&&n!==null&&n.matrixWorldAutoUpdate===!0&&n.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix),t===!0){let s=this.children;for(let r=0,o=s.length;r<o;r++){let a=s[r];a.matrixWorldAutoUpdate===!0&&a.updateWorldMatrix(!1,!0)}}}toJSON(e){let t=e===void 0||typeof e=="string",n={};t&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},n.metadata={version:4.6,type:"Object",generator:"Object3D.toJSON"});let s={};s.uuid=this.uuid,s.type=this.type,this.name!==""&&(s.name=this.name),this.castShadow===!0&&(s.castShadow=!0),this.receiveShadow===!0&&(s.receiveShadow=!0),this.visible===!1&&(s.visible=!1),this.frustumCulled===!1&&(s.frustumCulled=!1),this.renderOrder!==0&&(s.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(s.userData=this.userData),s.layers=this.layers.mask,s.matrix=this.matrix.toArray(),s.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(s.matrixAutoUpdate=!1),this.isInstancedMesh&&(s.type="InstancedMesh",s.count=this.count,s.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(s.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(s.type="BatchedMesh",s.perObjectFrustumCulled=this.perObjectFrustumCulled,s.sortObjects=this.sortObjects,s.drawRanges=this._drawRanges,s.reservedRanges=this._reservedRanges,s.visibility=this._visibility,s.active=this._active,s.bounds=this._bounds.map(a=>({boxInitialized:a.boxInitialized,boxMin:a.box.min.toArray(),boxMax:a.box.max.toArray(),sphereInitialized:a.sphereInitialized,sphereRadius:a.sphere.radius,sphereCenter:a.sphere.center.toArray()})),s.maxGeometryCount=this._maxGeometryCount,s.maxVertexCount=this._maxVertexCount,s.maxIndexCount=this._maxIndexCount,s.geometryInitialized=this._geometryInitialized,s.geometryCount=this._geometryCount,s.matricesTexture=this._matricesTexture.toJSON(e),this.boundingSphere!==null&&(s.boundingSphere={center:s.boundingSphere.center.toArray(),radius:s.boundingSphere.radius}),this.boundingBox!==null&&(s.boundingBox={min:s.boundingBox.min.toArray(),max:s.boundingBox.max.toArray()}));function r(a,c){return a[c.uuid]===void 0&&(a[c.uuid]=c.toJSON(e)),c.uuid}if(this.isScene)this.background&&(this.background.isColor?s.background=this.background.toJSON():this.background.isTexture&&(s.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(s.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){s.geometry=r(e.geometries,this.geometry);let a=this.geometry.parameters;if(a!==void 0&&a.shapes!==void 0){let c=a.shapes;if(Array.isArray(c))for(let l=0,h=c.length;l<h;l++){let u=c[l];r(e.shapes,u)}else r(e.shapes,c)}}if(this.isSkinnedMesh&&(s.bindMode=this.bindMode,s.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(r(e.skeletons,this.skeleton),s.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){let a=[];for(let c=0,l=this.material.length;c<l;c++)a.push(r(e.materials,this.material[c]));s.material=a}else s.material=r(e.materials,this.material);if(this.children.length>0){s.children=[];for(let a=0;a<this.children.length;a++)s.children.push(this.children[a].toJSON(e).object)}if(this.animations.length>0){s.animations=[];for(let a=0;a<this.animations.length;a++){let c=this.animations[a];s.animations.push(r(e.animations,c))}}if(t){let a=o(e.geometries),c=o(e.materials),l=o(e.textures),h=o(e.images),u=o(e.shapes),d=o(e.skeletons),f=o(e.animations),g=o(e.nodes);a.length>0&&(n.geometries=a),c.length>0&&(n.materials=c),l.length>0&&(n.textures=l),h.length>0&&(n.images=h),u.length>0&&(n.shapes=u),d.length>0&&(n.skeletons=d),f.length>0&&(n.animations=f),g.length>0&&(n.nodes=g)}return n.object=s,n;function o(a){let c=[];for(let l in a){let h=a[l];delete h.metadata,c.push(h)}return c}}clone(e){return new this.constructor().copy(this,e)}copy(e,t=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),t===!0)for(let n=0;n<e.children.length;n++){let s=e.children[n];this.add(s.clone())}return this}};bt.DEFAULT_UP=new I(0,1,0);bt.DEFAULT_MATRIX_AUTO_UPDATE=!0;bt.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;var On=new I,ni=new I,bc=new I,ii=new I,As=new I,Rs=new I,Nu=new I,wc=new I,Sc=new I,Ec=new I,Mo=!1,Bs=class i{constructor(e=new I,t=new I,n=new I){this.a=e,this.b=t,this.c=n}static getNormal(e,t,n,s){s.subVectors(n,t),On.subVectors(e,t),s.cross(On);let r=s.lengthSq();return r>0?s.multiplyScalar(1/Math.sqrt(r)):s.set(0,0,0)}static getBarycoord(e,t,n,s,r){On.subVectors(s,t),ni.subVectors(n,t),bc.subVectors(e,t);let o=On.dot(On),a=On.dot(ni),c=On.dot(bc),l=ni.dot(ni),h=ni.dot(bc),u=o*l-a*a;if(u===0)return r.set(0,0,0),null;let d=1/u,f=(l*c-a*h)*d,g=(o*h-a*c)*d;return r.set(1-f-g,g,f)}static containsPoint(e,t,n,s){return this.getBarycoord(e,t,n,s,ii)===null?!1:ii.x>=0&&ii.y>=0&&ii.x+ii.y<=1}static getUV(e,t,n,s,r,o,a,c){return Mo===!1&&(console.warn("THREE.Triangle.getUV() has been renamed to THREE.Triangle.getInterpolation()."),Mo=!0),this.getInterpolation(e,t,n,s,r,o,a,c)}static getInterpolation(e,t,n,s,r,o,a,c){return this.getBarycoord(e,t,n,s,ii)===null?(c.x=0,c.y=0,"z"in c&&(c.z=0),"w"in c&&(c.w=0),null):(c.setScalar(0),c.addScaledVector(r,ii.x),c.addScaledVector(o,ii.y),c.addScaledVector(a,ii.z),c)}static isFrontFacing(e,t,n,s){return On.subVectors(n,t),ni.subVectors(e,t),On.cross(ni).dot(s)<0}set(e,t,n){return this.a.copy(e),this.b.copy(t),this.c.copy(n),this}setFromPointsAndIndices(e,t,n,s){return this.a.copy(e[t]),this.b.copy(e[n]),this.c.copy(e[s]),this}setFromAttributeAndIndices(e,t,n,s){return this.a.fromBufferAttribute(e,t),this.b.fromBufferAttribute(e,n),this.c.fromBufferAttribute(e,s),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return On.subVectors(this.c,this.b),ni.subVectors(this.a,this.b),On.cross(ni).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return i.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,t){return i.getBarycoord(e,this.a,this.b,this.c,t)}getUV(e,t,n,s,r){return Mo===!1&&(console.warn("THREE.Triangle.getUV() has been renamed to THREE.Triangle.getInterpolation()."),Mo=!0),i.getInterpolation(e,this.a,this.b,this.c,t,n,s,r)}getInterpolation(e,t,n,s,r){return i.getInterpolation(e,this.a,this.b,this.c,t,n,s,r)}containsPoint(e){return i.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return i.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,t){let n=this.a,s=this.b,r=this.c,o,a;As.subVectors(s,n),Rs.subVectors(r,n),wc.subVectors(e,n);let c=As.dot(wc),l=Rs.dot(wc);if(c<=0&&l<=0)return t.copy(n);Sc.subVectors(e,s);let h=As.dot(Sc),u=Rs.dot(Sc);if(h>=0&&u<=h)return t.copy(s);let d=c*u-h*l;if(d<=0&&c>=0&&h<=0)return o=c/(c-h),t.copy(n).addScaledVector(As,o);Ec.subVectors(e,r);let f=As.dot(Ec),g=Rs.dot(Ec);if(g>=0&&f<=g)return t.copy(r);let x=f*l-c*g;if(x<=0&&l>=0&&g<=0)return a=l/(l-g),t.copy(n).addScaledVector(Rs,a);let m=h*g-f*u;if(m<=0&&u-h>=0&&f-g>=0)return Nu.subVectors(r,s),a=(u-h)/(u-h+(f-g)),t.copy(s).addScaledVector(Nu,a);let p=1/(m+x+d);return o=x*p,a=d*p,t.copy(n).addScaledVector(As,o).addScaledVector(Rs,a)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}},kd={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},Si={h:0,s:0,l:0},bo={h:0,s:0,l:0};function Tc(i,e,t){return t<0&&(t+=1),t>1&&(t-=1),t<1/6?i+(e-i)*6*t:t<1/2?e:t<2/3?i+(e-i)*6*(2/3-t):i}var ge=class{constructor(e,t,n){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,t,n)}set(e,t,n){if(t===void 0&&n===void 0){let s=e;s&&s.isColor?this.copy(s):typeof s=="number"?this.setHex(s):typeof s=="string"&&this.setStyle(s)}else this.setRGB(e,t,n);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,t=Tt){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,lt.toWorkingColorSpace(this,t),this}setRGB(e,t,n,s=lt.workingColorSpace){return this.r=e,this.g=t,this.b=n,lt.toWorkingColorSpace(this,s),this}setHSL(e,t,n,s=lt.workingColorSpace){if(e=Rl(e,1),t=rn(t,0,1),n=rn(n,0,1),t===0)this.r=this.g=this.b=n;else{let r=n<=.5?n*(1+t):n+t-n*t,o=2*n-r;this.r=Tc(o,r,e+1/3),this.g=Tc(o,r,e),this.b=Tc(o,r,e-1/3)}return lt.toWorkingColorSpace(this,s),this}setStyle(e,t=Tt){function n(r){r!==void 0&&parseFloat(r)<1&&console.warn("THREE.Color: Alpha component of "+e+" will be ignored.")}let s;if(s=/^(\w+)\(([^\)]*)\)/.exec(e)){let r,o=s[1],a=s[2];switch(o){case"rgb":case"rgba":if(r=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(r[4]),this.setRGB(Math.min(255,parseInt(r[1],10))/255,Math.min(255,parseInt(r[2],10))/255,Math.min(255,parseInt(r[3],10))/255,t);if(r=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(r[4]),this.setRGB(Math.min(100,parseInt(r[1],10))/100,Math.min(100,parseInt(r[2],10))/100,Math.min(100,parseInt(r[3],10))/100,t);break;case"hsl":case"hsla":if(r=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(r[4]),this.setHSL(parseFloat(r[1])/360,parseFloat(r[2])/100,parseFloat(r[3])/100,t);break;default:console.warn("THREE.Color: Unknown color model "+e)}}else if(s=/^\#([A-Fa-f\d]+)$/.exec(e)){let r=s[1],o=r.length;if(o===3)return this.setRGB(parseInt(r.charAt(0),16)/15,parseInt(r.charAt(1),16)/15,parseInt(r.charAt(2),16)/15,t);if(o===6)return this.setHex(parseInt(r,16),t);console.warn("THREE.Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,t);return this}setColorName(e,t=Tt){let n=kd[e.toLowerCase()];return n!==void 0?this.setHex(n,t):console.warn("THREE.Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=Vs(e.r),this.g=Vs(e.g),this.b=Vs(e.b),this}copyLinearToSRGB(e){return this.r=pc(e.r),this.g=pc(e.g),this.b=pc(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=Tt){return lt.fromWorkingColorSpace(sn.copy(this),e),Math.round(rn(sn.r*255,0,255))*65536+Math.round(rn(sn.g*255,0,255))*256+Math.round(rn(sn.b*255,0,255))}getHexString(e=Tt){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,t=lt.workingColorSpace){lt.fromWorkingColorSpace(sn.copy(this),t);let n=sn.r,s=sn.g,r=sn.b,o=Math.max(n,s,r),a=Math.min(n,s,r),c,l,h=(a+o)/2;if(a===o)c=0,l=0;else{let u=o-a;switch(l=h<=.5?u/(o+a):u/(2-o-a),o){case n:c=(s-r)/u+(s<r?6:0);break;case s:c=(r-n)/u+2;break;case r:c=(n-s)/u+4;break}c/=6}return e.h=c,e.s=l,e.l=h,e}getRGB(e,t=lt.workingColorSpace){return lt.fromWorkingColorSpace(sn.copy(this),t),e.r=sn.r,e.g=sn.g,e.b=sn.b,e}getStyle(e=Tt){lt.fromWorkingColorSpace(sn.copy(this),e);let t=sn.r,n=sn.g,s=sn.b;return e!==Tt?`color(${e} ${t.toFixed(3)} ${n.toFixed(3)} ${s.toFixed(3)})`:`rgb(${Math.round(t*255)},${Math.round(n*255)},${Math.round(s*255)})`}offsetHSL(e,t,n){return this.getHSL(Si),this.setHSL(Si.h+e,Si.s+t,Si.l+n)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,t){return this.r=e.r+t.r,this.g=e.g+t.g,this.b=e.b+t.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,t){return this.r+=(e.r-this.r)*t,this.g+=(e.g-this.g)*t,this.b+=(e.b-this.b)*t,this}lerpColors(e,t,n){return this.r=e.r+(t.r-e.r)*n,this.g=e.g+(t.g-e.g)*n,this.b=e.b+(t.b-e.b)*n,this}lerpHSL(e,t){this.getHSL(Si),e.getHSL(bo);let n=Lr(Si.h,bo.h,t),s=Lr(Si.s,bo.s,t),r=Lr(Si.l,bo.l,t);return this.setHSL(n,s,r),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){let t=this.r,n=this.g,s=this.b,r=e.elements;return this.r=r[0]*t+r[3]*n+r[6]*s,this.g=r[1]*t+r[4]*n+r[7]*s,this.b=r[2]*t+r[5]*n+r[8]*s,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,t=0){return this.r=e[t],this.g=e[t+1],this.b=e[t+2],this}toArray(e=[],t=0){return e[t]=this.r,e[t+1]=this.g,e[t+2]=this.b,e}fromBufferAttribute(e,t){return this.r=e.getX(t),this.g=e.getY(t),this.b=e.getZ(t),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}},sn=new ge;ge.NAMES=kd;var zm=0,fn=class extends li{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:zm++}),this.uuid=Fn(),this.name="",this.type="Material",this.blending=Gs,this.side=qn,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=kc,this.blendDst=Hc,this.blendEquation=Zi,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new ge(0,0,0),this.blendAlpha=0,this.depthFunc=Ho,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=bu,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=vs,this.stencilZFail=vs,this.stencilZPass=vs,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBuild(){}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(let t in e){let n=e[t];if(n===void 0){console.warn(`THREE.Material: parameter '${t}' has value of undefined.`);continue}let s=this[t];if(s===void 0){console.warn(`THREE.Material: '${t}' is not a property of THREE.${this.type}.`);continue}s&&s.isColor?s.set(n):s&&s.isVector3&&n&&n.isVector3?s.copy(n):this[t]=n}}toJSON(e){let t=e===void 0||typeof e=="string";t&&(e={textures:{},images:{}});let n={metadata:{version:4.6,type:"Material",generator:"Material.toJSON"}};n.uuid=this.uuid,n.type=this.type,this.name!==""&&(n.name=this.name),this.color&&this.color.isColor&&(n.color=this.color.getHex()),this.roughness!==void 0&&(n.roughness=this.roughness),this.metalness!==void 0&&(n.metalness=this.metalness),this.sheen!==void 0&&(n.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(n.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(n.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(n.emissive=this.emissive.getHex()),this.emissiveIntensity&&this.emissiveIntensity!==1&&(n.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(n.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(n.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(n.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(n.shininess=this.shininess),this.clearcoat!==void 0&&(n.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(n.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(n.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(n.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(n.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,n.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.iridescence!==void 0&&(n.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(n.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(n.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(n.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(n.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(n.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(n.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(n.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(n.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(n.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(n.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(n.lightMap=this.lightMap.toJSON(e).uuid,n.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(n.aoMap=this.aoMap.toJSON(e).uuid,n.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(n.bumpMap=this.bumpMap.toJSON(e).uuid,n.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(n.normalMap=this.normalMap.toJSON(e).uuid,n.normalMapType=this.normalMapType,n.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(n.displacementMap=this.displacementMap.toJSON(e).uuid,n.displacementScale=this.displacementScale,n.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(n.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(n.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(n.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(n.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(n.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(n.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(n.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(n.combine=this.combine)),this.envMapIntensity!==void 0&&(n.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(n.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(n.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(n.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(n.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(n.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(n.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(n.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(n.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(n.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(n.size=this.size),this.shadowSide!==null&&(n.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(n.sizeAttenuation=this.sizeAttenuation),this.blending!==Gs&&(n.blending=this.blending),this.side!==qn&&(n.side=this.side),this.vertexColors===!0&&(n.vertexColors=!0),this.opacity<1&&(n.opacity=this.opacity),this.transparent===!0&&(n.transparent=!0),this.blendSrc!==kc&&(n.blendSrc=this.blendSrc),this.blendDst!==Hc&&(n.blendDst=this.blendDst),this.blendEquation!==Zi&&(n.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(n.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(n.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(n.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(n.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(n.blendAlpha=this.blendAlpha),this.depthFunc!==Ho&&(n.depthFunc=this.depthFunc),this.depthTest===!1&&(n.depthTest=this.depthTest),this.depthWrite===!1&&(n.depthWrite=this.depthWrite),this.colorWrite===!1&&(n.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(n.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==bu&&(n.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(n.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(n.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==vs&&(n.stencilFail=this.stencilFail),this.stencilZFail!==vs&&(n.stencilZFail=this.stencilZFail),this.stencilZPass!==vs&&(n.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(n.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(n.rotation=this.rotation),this.polygonOffset===!0&&(n.polygonOffset=!0),this.polygonOffsetFactor!==0&&(n.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(n.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(n.linewidth=this.linewidth),this.dashSize!==void 0&&(n.dashSize=this.dashSize),this.gapSize!==void 0&&(n.gapSize=this.gapSize),this.scale!==void 0&&(n.scale=this.scale),this.dithering===!0&&(n.dithering=!0),this.alphaTest>0&&(n.alphaTest=this.alphaTest),this.alphaHash===!0&&(n.alphaHash=!0),this.alphaToCoverage===!0&&(n.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(n.premultipliedAlpha=!0),this.forceSinglePass===!0&&(n.forceSinglePass=!0),this.wireframe===!0&&(n.wireframe=!0),this.wireframeLinewidth>1&&(n.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(n.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(n.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(n.flatShading=!0),this.visible===!1&&(n.visible=!1),this.toneMapped===!1&&(n.toneMapped=!1),this.fog===!1&&(n.fog=!1),Object.keys(this.userData).length>0&&(n.userData=this.userData);function s(r){let o=[];for(let a in r){let c=r[a];delete c.metadata,o.push(c)}return o}if(t){let r=s(e.textures),o=s(e.images);r.length>0&&(n.textures=r),o.length>0&&(n.images=o)}return n}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;let t=e.clippingPlanes,n=null;if(t!==null){let s=t.length;n=new Array(s);for(let r=0;r!==s;++r)n[r]=t[r].clone()}return this.clippingPlanes=n,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}},Lt=class extends fn{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new ge(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.combine=ba,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}};var Ht=new I,wo=new He,At=class{constructor(e,t,n=!1){if(Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,this.name="",this.array=e,this.itemSize=t,this.count=e!==void 0?e.length/t:0,this.normalized=n,this.usage=Wc,this._updateRange={offset:0,count:-1},this.updateRanges=[],this.gpuType=ai,this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}get updateRange(){return console.warn("THREE.BufferAttribute: updateRange() is deprecated and will be removed in r169. Use addUpdateRange() instead."),this._updateRange}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this}copyAt(e,t,n){e*=this.itemSize,n*=t.itemSize;for(let s=0,r=this.itemSize;s<r;s++)this.array[e+s]=t.array[n+s];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let t=0,n=this.count;t<n;t++)wo.fromBufferAttribute(this,t),wo.applyMatrix3(e),this.setXY(t,wo.x,wo.y);else if(this.itemSize===3)for(let t=0,n=this.count;t<n;t++)Ht.fromBufferAttribute(this,t),Ht.applyMatrix3(e),this.setXYZ(t,Ht.x,Ht.y,Ht.z);return this}applyMatrix4(e){for(let t=0,n=this.count;t<n;t++)Ht.fromBufferAttribute(this,t),Ht.applyMatrix4(e),this.setXYZ(t,Ht.x,Ht.y,Ht.z);return this}applyNormalMatrix(e){for(let t=0,n=this.count;t<n;t++)Ht.fromBufferAttribute(this,t),Ht.applyNormalMatrix(e),this.setXYZ(t,Ht.x,Ht.y,Ht.z);return this}transformDirection(e){for(let t=0,n=this.count;t<n;t++)Ht.fromBufferAttribute(this,t),Ht.transformDirection(e),this.setXYZ(t,Ht.x,Ht.y,Ht.z);return this}set(e,t=0){return this.array.set(e,t),this}getComponent(e,t){let n=this.array[e*this.itemSize+t];return this.normalized&&(n=Xn(n,this.array)),n}setComponent(e,t,n){return this.normalized&&(n=ut(n,this.array)),this.array[e*this.itemSize+t]=n,this}getX(e){let t=this.array[e*this.itemSize];return this.normalized&&(t=Xn(t,this.array)),t}setX(e,t){return this.normalized&&(t=ut(t,this.array)),this.array[e*this.itemSize]=t,this}getY(e){let t=this.array[e*this.itemSize+1];return this.normalized&&(t=Xn(t,this.array)),t}setY(e,t){return this.normalized&&(t=ut(t,this.array)),this.array[e*this.itemSize+1]=t,this}getZ(e){let t=this.array[e*this.itemSize+2];return this.normalized&&(t=Xn(t,this.array)),t}setZ(e,t){return this.normalized&&(t=ut(t,this.array)),this.array[e*this.itemSize+2]=t,this}getW(e){let t=this.array[e*this.itemSize+3];return this.normalized&&(t=Xn(t,this.array)),t}setW(e,t){return this.normalized&&(t=ut(t,this.array)),this.array[e*this.itemSize+3]=t,this}setXY(e,t,n){return e*=this.itemSize,this.normalized&&(t=ut(t,this.array),n=ut(n,this.array)),this.array[e+0]=t,this.array[e+1]=n,this}setXYZ(e,t,n,s){return e*=this.itemSize,this.normalized&&(t=ut(t,this.array),n=ut(n,this.array),s=ut(s,this.array)),this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=s,this}setXYZW(e,t,n,s,r){return e*=this.itemSize,this.normalized&&(t=ut(t,this.array),n=ut(n,this.array),s=ut(s,this.array),r=ut(r,this.array)),this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=s,this.array[e+3]=r,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){let e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(e.name=this.name),this.usage!==Wc&&(e.usage=this.usage),e}};var ea=class extends At{constructor(e,t,n){super(new Uint16Array(e),t,n)}};var ta=class extends At{constructor(e,t,n){super(new Uint32Array(e),t,n)}};var ht=class extends At{constructor(e,t,n){super(new Float32Array(e),t,n)}};var Dm=0,Tn=new Je,Ac=new bt,Cs=new I,vn=new xn,Er=new xn,Kt=new I,Nt=class i extends li{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:Dm++}),this.uuid=Fn(),this.name="",this.type="BufferGeometry",this.index=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(Bd(e)?ta:ea)(e,1):this.index=e,this}getAttribute(e){return this.attributes[e]}setAttribute(e,t){return this.attributes[e]=t,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,t,n=0){this.groups.push({start:e,count:t,materialIndex:n})}clearGroups(){this.groups=[]}setDrawRange(e,t){this.drawRange.start=e,this.drawRange.count=t}applyMatrix4(e){let t=this.attributes.position;t!==void 0&&(t.applyMatrix4(e),t.needsUpdate=!0);let n=this.attributes.normal;if(n!==void 0){let r=new $e().getNormalMatrix(e);n.applyNormalMatrix(r),n.needsUpdate=!0}let s=this.attributes.tangent;return s!==void 0&&(s.transformDirection(e),s.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(e){return Tn.makeRotationFromQuaternion(e),this.applyMatrix4(Tn),this}rotateX(e){return Tn.makeRotationX(e),this.applyMatrix4(Tn),this}rotateY(e){return Tn.makeRotationY(e),this.applyMatrix4(Tn),this}rotateZ(e){return Tn.makeRotationZ(e),this.applyMatrix4(Tn),this}translate(e,t,n){return Tn.makeTranslation(e,t,n),this.applyMatrix4(Tn),this}scale(e,t,n){return Tn.makeScale(e,t,n),this.applyMatrix4(Tn),this}lookAt(e){return Ac.lookAt(e),Ac.updateMatrix(),this.applyMatrix4(Ac.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(Cs).negate(),this.translate(Cs.x,Cs.y,Cs.z),this}setFromPoints(e){let t=[];for(let n=0,s=e.length;n<s;n++){let r=e[n];t.push(r.x,r.y,r.z||0)}return this.setAttribute("position",new ht(t,3)),this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new xn);let e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error('THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box. Alternatively set "mesh.frustumCulled" to "false".',this),this.boundingBox.set(new I(-1/0,-1/0,-1/0),new I(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),t)for(let n=0,s=t.length;n<s;n++){let r=t[n];vn.setFromBufferAttribute(r),this.morphTargetsRelative?(Kt.addVectors(this.boundingBox.min,vn.min),this.boundingBox.expandByPoint(Kt),Kt.addVectors(this.boundingBox.max,vn.max),this.boundingBox.expandByPoint(Kt)):(this.boundingBox.expandByPoint(vn.min),this.boundingBox.expandByPoint(vn.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new bn);let e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error('THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere. Alternatively set "mesh.frustumCulled" to "false".',this),this.boundingSphere.set(new I,1/0);return}if(e){let n=this.boundingSphere.center;if(vn.setFromBufferAttribute(e),t)for(let r=0,o=t.length;r<o;r++){let a=t[r];Er.setFromBufferAttribute(a),this.morphTargetsRelative?(Kt.addVectors(vn.min,Er.min),vn.expandByPoint(Kt),Kt.addVectors(vn.max,Er.max),vn.expandByPoint(Kt)):(vn.expandByPoint(Er.min),vn.expandByPoint(Er.max))}vn.getCenter(n);let s=0;for(let r=0,o=e.count;r<o;r++)Kt.fromBufferAttribute(e,r),s=Math.max(s,n.distanceToSquared(Kt));if(t)for(let r=0,o=t.length;r<o;r++){let a=t[r],c=this.morphTargetsRelative;for(let l=0,h=a.count;l<h;l++)Kt.fromBufferAttribute(a,l),c&&(Cs.fromBufferAttribute(e,l),Kt.add(Cs)),s=Math.max(s,n.distanceToSquared(Kt))}this.boundingSphere.radius=Math.sqrt(s),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){let e=this.index,t=this.attributes;if(e===null||t.position===void 0||t.normal===void 0||t.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}let n=e.array,s=t.position.array,r=t.normal.array,o=t.uv.array,a=s.length/3;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new At(new Float32Array(4*a),4));let c=this.getAttribute("tangent").array,l=[],h=[];for(let S=0;S<a;S++)l[S]=new I,h[S]=new I;let u=new I,d=new I,f=new I,g=new He,x=new He,m=new He,p=new I,y=new I;function _(S,F,j){u.fromArray(s,S*3),d.fromArray(s,F*3),f.fromArray(s,j*3),g.fromArray(o,S*2),x.fromArray(o,F*2),m.fromArray(o,j*2),d.sub(u),f.sub(u),x.sub(g),m.sub(g);let ee=1/(x.x*m.y-m.x*x.y);isFinite(ee)&&(p.copy(d).multiplyScalar(m.y).addScaledVector(f,-x.y).multiplyScalar(ee),y.copy(f).multiplyScalar(x.x).addScaledVector(d,-m.x).multiplyScalar(ee),l[S].add(p),l[F].add(p),l[j].add(p),h[S].add(y),h[F].add(y),h[j].add(y))}let b=this.groups;b.length===0&&(b=[{start:0,count:n.length}]);for(let S=0,F=b.length;S<F;++S){let j=b[S],ee=j.start,z=j.count;for(let B=ee,Q=ee+z;B<Q;B+=3)_(n[B+0],n[B+1],n[B+2])}let C=new I,A=new I,R=new I,O=new I;function v(S){R.fromArray(r,S*3),O.copy(R);let F=l[S];C.copy(F),C.sub(R.multiplyScalar(R.dot(F))).normalize(),A.crossVectors(O,F);let ee=A.dot(h[S])<0?-1:1;c[S*4]=C.x,c[S*4+1]=C.y,c[S*4+2]=C.z,c[S*4+3]=ee}for(let S=0,F=b.length;S<F;++S){let j=b[S],ee=j.start,z=j.count;for(let B=ee,Q=ee+z;B<Q;B+=3)v(n[B+0]),v(n[B+1]),v(n[B+2])}}computeVertexNormals(){let e=this.index,t=this.getAttribute("position");if(t!==void 0){let n=this.getAttribute("normal");if(n===void 0)n=new At(new Float32Array(t.count*3),3),this.setAttribute("normal",n);else for(let d=0,f=n.count;d<f;d++)n.setXYZ(d,0,0,0);let s=new I,r=new I,o=new I,a=new I,c=new I,l=new I,h=new I,u=new I;if(e)for(let d=0,f=e.count;d<f;d+=3){let g=e.getX(d+0),x=e.getX(d+1),m=e.getX(d+2);s.fromBufferAttribute(t,g),r.fromBufferAttribute(t,x),o.fromBufferAttribute(t,m),h.subVectors(o,r),u.subVectors(s,r),h.cross(u),a.fromBufferAttribute(n,g),c.fromBufferAttribute(n,x),l.fromBufferAttribute(n,m),a.add(h),c.add(h),l.add(h),n.setXYZ(g,a.x,a.y,a.z),n.setXYZ(x,c.x,c.y,c.z),n.setXYZ(m,l.x,l.y,l.z)}else for(let d=0,f=t.count;d<f;d+=3)s.fromBufferAttribute(t,d+0),r.fromBufferAttribute(t,d+1),o.fromBufferAttribute(t,d+2),h.subVectors(o,r),u.subVectors(s,r),h.cross(u),n.setXYZ(d+0,h.x,h.y,h.z),n.setXYZ(d+1,h.x,h.y,h.z),n.setXYZ(d+2,h.x,h.y,h.z);this.normalizeNormals(),n.needsUpdate=!0}}normalizeNormals(){let e=this.attributes.normal;for(let t=0,n=e.count;t<n;t++)Kt.fromBufferAttribute(e,t),Kt.normalize(),e.setXYZ(t,Kt.x,Kt.y,Kt.z)}toNonIndexed(){function e(a,c){let l=a.array,h=a.itemSize,u=a.normalized,d=new l.constructor(c.length*h),f=0,g=0;for(let x=0,m=c.length;x<m;x++){a.isInterleavedBufferAttribute?f=c[x]*a.data.stride+a.offset:f=c[x]*h;for(let p=0;p<h;p++)d[g++]=l[f++]}return new At(d,h,u)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;let t=new i,n=this.index.array,s=this.attributes;for(let a in s){let c=s[a],l=e(c,n);t.setAttribute(a,l)}let r=this.morphAttributes;for(let a in r){let c=[],l=r[a];for(let h=0,u=l.length;h<u;h++){let d=l[h],f=e(d,n);c.push(f)}t.morphAttributes[a]=c}t.morphTargetsRelative=this.morphTargetsRelative;let o=this.groups;for(let a=0,c=o.length;a<c;a++){let l=o[a];t.addGroup(l.start,l.count,l.materialIndex)}return t}toJSON(){let e={metadata:{version:4.6,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.type,this.name!==""&&(e.name=this.name),Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0){let c=this.parameters;for(let l in c)c[l]!==void 0&&(e[l]=c[l]);return e}e.data={attributes:{}};let t=this.index;t!==null&&(e.data.index={type:t.array.constructor.name,array:Array.prototype.slice.call(t.array)});let n=this.attributes;for(let c in n){let l=n[c];e.data.attributes[c]=l.toJSON(e.data)}let s={},r=!1;for(let c in this.morphAttributes){let l=this.morphAttributes[c],h=[];for(let u=0,d=l.length;u<d;u++){let f=l[u];h.push(f.toJSON(e.data))}h.length>0&&(s[c]=h,r=!0)}r&&(e.data.morphAttributes=s,e.data.morphTargetsRelative=this.morphTargetsRelative);let o=this.groups;o.length>0&&(e.data.groups=JSON.parse(JSON.stringify(o)));let a=this.boundingSphere;return a!==null&&(e.data.boundingSphere={center:a.center.toArray(),radius:a.radius}),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;let t={};this.name=e.name;let n=e.index;n!==null&&this.setIndex(n.clone(t));let s=e.attributes;for(let l in s){let h=s[l];this.setAttribute(l,h.clone(t))}let r=e.morphAttributes;for(let l in r){let h=[],u=r[l];for(let d=0,f=u.length;d<f;d++)h.push(u[d].clone(t));this.morphAttributes[l]=h}this.morphTargetsRelative=e.morphTargetsRelative;let o=e.groups;for(let l=0,h=o.length;l<h;l++){let u=o[l];this.addGroup(u.start,u.count,u.materialIndex)}let a=e.boundingBox;a!==null&&(this.boundingBox=a.clone());let c=e.boundingSphere;return c!==null&&(this.boundingSphere=c.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}},Uu=new Je,qi=new Ks,So=new bn,Ou=new I,Ps=new I,Ls=new I,Is=new I,Rc=new I,Eo=new I,To=new He,Ao=new He,Ro=new He,Fu=new I,Bu=new I,ku=new I,Co=new I,Po=new I,Me=class extends bt{constructor(e=new Nt,t=new Lt){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=t,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){let t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){let s=t[n[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,o=s.length;r<o;r++){let a=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=r}}}}getVertexPosition(e,t){let n=this.geometry,s=n.attributes.position,r=n.morphAttributes.position,o=n.morphTargetsRelative;t.fromBufferAttribute(s,e);let a=this.morphTargetInfluences;if(r&&a){Eo.set(0,0,0);for(let c=0,l=r.length;c<l;c++){let h=a[c],u=r[c];h!==0&&(Rc.fromBufferAttribute(u,e),o?Eo.addScaledVector(Rc,h):Eo.addScaledVector(Rc.sub(t),h))}t.add(Eo)}return t}raycast(e,t){let n=this.geometry,s=this.material,r=this.matrixWorld;s!==void 0&&(n.boundingSphere===null&&n.computeBoundingSphere(),So.copy(n.boundingSphere),So.applyMatrix4(r),qi.copy(e.ray).recast(e.near),!(So.containsPoint(qi.origin)===!1&&(qi.intersectSphere(So,Ou)===null||qi.origin.distanceToSquared(Ou)>(e.far-e.near)**2))&&(Uu.copy(r).invert(),qi.copy(e.ray).applyMatrix4(Uu),!(n.boundingBox!==null&&qi.intersectsBox(n.boundingBox)===!1)&&this._computeIntersections(e,t,qi)))}_computeIntersections(e,t,n){let s,r=this.geometry,o=this.material,a=r.index,c=r.attributes.position,l=r.attributes.uv,h=r.attributes.uv1,u=r.attributes.normal,d=r.groups,f=r.drawRange;if(a!==null)if(Array.isArray(o))for(let g=0,x=d.length;g<x;g++){let m=d[g],p=o[m.materialIndex],y=Math.max(m.start,f.start),_=Math.min(a.count,Math.min(m.start+m.count,f.start+f.count));for(let b=y,C=_;b<C;b+=3){let A=a.getX(b),R=a.getX(b+1),O=a.getX(b+2);s=Lo(this,p,e,n,l,h,u,A,R,O),s&&(s.faceIndex=Math.floor(b/3),s.face.materialIndex=m.materialIndex,t.push(s))}}else{let g=Math.max(0,f.start),x=Math.min(a.count,f.start+f.count);for(let m=g,p=x;m<p;m+=3){let y=a.getX(m),_=a.getX(m+1),b=a.getX(m+2);s=Lo(this,o,e,n,l,h,u,y,_,b),s&&(s.faceIndex=Math.floor(m/3),t.push(s))}}else if(c!==void 0)if(Array.isArray(o))for(let g=0,x=d.length;g<x;g++){let m=d[g],p=o[m.materialIndex],y=Math.max(m.start,f.start),_=Math.min(c.count,Math.min(m.start+m.count,f.start+f.count));for(let b=y,C=_;b<C;b+=3){let A=b,R=b+1,O=b+2;s=Lo(this,p,e,n,l,h,u,A,R,O),s&&(s.faceIndex=Math.floor(b/3),s.face.materialIndex=m.materialIndex,t.push(s))}}else{let g=Math.max(0,f.start),x=Math.min(c.count,f.start+f.count);for(let m=g,p=x;m<p;m+=3){let y=m,_=m+1,b=m+2;s=Lo(this,o,e,n,l,h,u,y,_,b),s&&(s.faceIndex=Math.floor(m/3),t.push(s))}}}};function Nm(i,e,t,n,s,r,o,a){let c;if(e.side===gn?c=n.intersectTriangle(o,r,s,!0,a):c=n.intersectTriangle(s,r,o,e.side===qn,a),c===null)return null;Po.copy(a),Po.applyMatrix4(i.matrixWorld);let l=t.ray.origin.distanceTo(Po);return l<t.near||l>t.far?null:{distance:l,point:Po.clone(),object:i}}function Lo(i,e,t,n,s,r,o,a,c,l){i.getVertexPosition(a,Ps),i.getVertexPosition(c,Ls),i.getVertexPosition(l,Is);let h=Nm(i,e,t,n,Ps,Ls,Is,Co);if(h){s&&(To.fromBufferAttribute(s,a),Ao.fromBufferAttribute(s,c),Ro.fromBufferAttribute(s,l),h.uv=Bs.getInterpolation(Co,Ps,Ls,Is,To,Ao,Ro,new He)),r&&(To.fromBufferAttribute(r,a),Ao.fromBufferAttribute(r,c),Ro.fromBufferAttribute(r,l),h.uv1=Bs.getInterpolation(Co,Ps,Ls,Is,To,Ao,Ro,new He),h.uv2=h.uv1),o&&(Fu.fromBufferAttribute(o,a),Bu.fromBufferAttribute(o,c),ku.fromBufferAttribute(o,l),h.normal=Bs.getInterpolation(Co,Ps,Ls,Is,Fu,Bu,ku,new I),h.normal.dot(n.direction)>0&&h.normal.multiplyScalar(-1));let u={a,b:c,c:l,normal:new I,materialIndex:0};Bs.getNormal(Ps,Ls,Is,u.normal),h.face=u}return h}var Ge=class i extends Nt{constructor(e=1,t=1,n=1,s=1,r=1,o=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:t,depth:n,widthSegments:s,heightSegments:r,depthSegments:o};let a=this;s=Math.floor(s),r=Math.floor(r),o=Math.floor(o);let c=[],l=[],h=[],u=[],d=0,f=0;g("z","y","x",-1,-1,n,t,e,o,r,0),g("z","y","x",1,-1,n,t,-e,o,r,1),g("x","z","y",1,1,e,n,t,s,o,2),g("x","z","y",1,-1,e,n,-t,s,o,3),g("x","y","z",1,-1,e,t,n,s,r,4),g("x","y","z",-1,-1,e,t,-n,s,r,5),this.setIndex(c),this.setAttribute("position",new ht(l,3)),this.setAttribute("normal",new ht(h,3)),this.setAttribute("uv",new ht(u,2));function g(x,m,p,y,_,b,C,A,R,O,v){let S=b/R,F=C/O,j=b/2,ee=C/2,z=A/2,B=R+1,Q=O+1,Z=0,K=0,$=new I;for(let te=0;te<Q;te++){let he=te*F-ee;for(let pe=0;pe<B;pe++){let Y=pe*S-j;$[x]=Y*y,$[m]=he*_,$[p]=z,l.push($.x,$.y,$.z),$[x]=0,$[m]=0,$[p]=A>0?1:-1,h.push($.x,$.y,$.z),u.push(pe/R),u.push(1-te/O),Z+=1}}for(let te=0;te<O;te++)for(let he=0;he<R;he++){let pe=d+he+B*te,Y=d+he+B*(te+1),ne=d+(he+1)+B*(te+1),me=d+(he+1)+B*te;c.push(pe,Y,me),c.push(Y,ne,me),K+=6}a.addGroup(f,K,v),f+=K,d+=Z}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new i(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}};function $s(i){let e={};for(let t in i){e[t]={};for(let n in i[t]){let s=i[t][n];s&&(s.isColor||s.isMatrix3||s.isMatrix4||s.isVector2||s.isVector3||s.isVector4||s.isTexture||s.isQuaternion)?s.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[t][n]=null):e[t][n]=s.clone():Array.isArray(s)?e[t][n]=s.slice():e[t][n]=s}}return e}function hn(i){let e={};for(let t=0;t<i.length;t++){let n=$s(i[t]);for(let s in n)e[s]=n[s]}return e}function Um(i){let e=[];for(let t=0;t<i.length;t++)e.push(i[t].clone());return e}function Hd(i){return i.getRenderTarget()===null?i.outputColorSpace:lt.workingColorSpace}var Om={clone:$s,merge:hn},Fm=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,Bm=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`,ui=class extends fn{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=Fm,this.fragmentShader=Bm,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={derivatives:!1,fragDepth:!1,drawBuffers:!1,shaderTextureLOD:!1,clipCullDistance:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=$s(e.uniforms),this.uniformsGroups=Um(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this}toJSON(e){let t=super.toJSON(e);t.glslVersion=this.glslVersion,t.uniforms={};for(let s in this.uniforms){let o=this.uniforms[s].value;o&&o.isTexture?t.uniforms[s]={type:"t",value:o.toJSON(e).uuid}:o&&o.isColor?t.uniforms[s]={type:"c",value:o.getHex()}:o&&o.isVector2?t.uniforms[s]={type:"v2",value:o.toArray()}:o&&o.isVector3?t.uniforms[s]={type:"v3",value:o.toArray()}:o&&o.isVector4?t.uniforms[s]={type:"v4",value:o.toArray()}:o&&o.isMatrix3?t.uniforms[s]={type:"m3",value:o.toArray()}:o&&o.isMatrix4?t.uniforms[s]={type:"m4",value:o.toArray()}:t.uniforms[s]={value:o}}Object.keys(this.defines).length>0&&(t.defines=this.defines),t.vertexShader=this.vertexShader,t.fragmentShader=this.fragmentShader,t.lights=this.lights,t.clipping=this.clipping;let n={};for(let s in this.extensions)this.extensions[s]===!0&&(n[s]=!0);return Object.keys(n).length>0&&(t.extensions=n),t}},na=class extends bt{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new Je,this.projectionMatrix=new Je,this.projectionMatrixInverse=new Je,this.coordinateSystem=ci}copy(e,t){return super.copy(e,t),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(e,t){super.updateWorldMatrix(e,t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}},Wt=class extends na{constructor(e=50,t=1,n=.1,s=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=n,this.far=s,this.focus=10,this.aspect=t,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){let t=.5*this.getFilmHeight()/e;this.fov=Zs*2*Math.atan(t),this.updateProjectionMatrix()}getFocalLength(){let e=Math.tan(Pr*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return Zs*2*Math.atan(Math.tan(Pr*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}setViewOffset(e,t,n,s,r,o){this.aspect=e/t,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=s,this.view.width=r,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let e=this.near,t=e*Math.tan(Pr*.5*this.fov)/this.zoom,n=2*t,s=this.aspect*n,r=-.5*s,o=this.view;if(this.view!==null&&this.view.enabled){let c=o.fullWidth,l=o.fullHeight;r+=o.offsetX*s/c,t-=o.offsetY*n/l,s*=o.width/c,n*=o.height/l}let a=this.filmOffset;a!==0&&(r+=e*a/this.getFilmWidth()),this.projectionMatrix.makePerspective(r,r+s,t,t-n,e,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){let t=super.toJSON(e);return t.object.fov=this.fov,t.object.zoom=this.zoom,t.object.near=this.near,t.object.far=this.far,t.object.focus=this.focus,t.object.aspect=this.aspect,this.view!==null&&(t.object.view=Object.assign({},this.view)),t.object.filmGauge=this.filmGauge,t.object.filmOffset=this.filmOffset,t}},zs=-90,Ds=1,Zc=class extends bt{constructor(e,t,n){super(),this.type="CubeCamera",this.renderTarget=n,this.coordinateSystem=null,this.activeMipmapLevel=0;let s=new Wt(zs,Ds,e,t);s.layers=this.layers,this.add(s);let r=new Wt(zs,Ds,e,t);r.layers=this.layers,this.add(r);let o=new Wt(zs,Ds,e,t);o.layers=this.layers,this.add(o);let a=new Wt(zs,Ds,e,t);a.layers=this.layers,this.add(a);let c=new Wt(zs,Ds,e,t);c.layers=this.layers,this.add(c);let l=new Wt(zs,Ds,e,t);l.layers=this.layers,this.add(l)}updateCoordinateSystem(){let e=this.coordinateSystem,t=this.children.concat(),[n,s,r,o,a,c]=t;for(let l of t)this.remove(l);if(e===ci)n.up.set(0,1,0),n.lookAt(1,0,0),s.up.set(0,1,0),s.lookAt(-1,0,0),r.up.set(0,0,-1),r.lookAt(0,1,0),o.up.set(0,0,1),o.lookAt(0,-1,0),a.up.set(0,1,0),a.lookAt(0,0,1),c.up.set(0,1,0),c.lookAt(0,0,-1);else if(e===Yo)n.up.set(0,-1,0),n.lookAt(-1,0,0),s.up.set(0,-1,0),s.lookAt(1,0,0),r.up.set(0,0,1),r.lookAt(0,1,0),o.up.set(0,0,-1),o.lookAt(0,-1,0),a.up.set(0,-1,0),a.lookAt(0,0,1),c.up.set(0,-1,0),c.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(let l of t)this.add(l),l.updateMatrixWorld()}update(e,t){this.parent===null&&this.updateMatrixWorld();let{renderTarget:n,activeMipmapLevel:s}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());let[r,o,a,c,l,h]=this.children,u=e.getRenderTarget(),d=e.getActiveCubeFace(),f=e.getActiveMipmapLevel(),g=e.xr.enabled;e.xr.enabled=!1;let x=n.texture.generateMipmaps;n.texture.generateMipmaps=!1,e.setRenderTarget(n,0,s),e.render(t,r),e.setRenderTarget(n,1,s),e.render(t,o),e.setRenderTarget(n,2,s),e.render(t,a),e.setRenderTarget(n,3,s),e.render(t,c),e.setRenderTarget(n,4,s),e.render(t,l),n.texture.generateMipmaps=x,e.setRenderTarget(n,5,s),e.render(t,h),e.setRenderTarget(u,d,f),e.xr.enabled=g,n.texture.needsPMREMUpdate=!0}},ia=class extends on{constructor(e,t,n,s,r,o,a,c,l,h){e=e!==void 0?e:[],t=t!==void 0?t:Xs,super(e,t,n,s,r,o,a,c,l,h),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}},Kc=class extends hi{constructor(e=1,t={}){super(e,e,t),this.isWebGLCubeRenderTarget=!0;let n={width:e,height:e,depth:1},s=[n,n,n,n,n,n];t.encoding!==void 0&&(Ir("THREE.WebGLCubeRenderTarget: option.encoding has been replaced by option.colorSpace."),t.colorSpace=t.encoding===Qi?Tt:Rn),this.texture=new ia(s,t.mapping,t.wrapS,t.wrapT,t.magFilter,t.minFilter,t.format,t.type,t.anisotropy,t.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.generateMipmaps=t.generateMipmaps!==void 0?t.generateMipmaps:!1,this.texture.minFilter=t.minFilter!==void 0?t.minFilter:un}fromEquirectangularTexture(e,t){this.texture.type=t.type,this.texture.colorSpace=t.colorSpace,this.texture.generateMipmaps=t.generateMipmaps,this.texture.minFilter=t.minFilter,this.texture.magFilter=t.magFilter;let n={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},s=new Ge(5,5,5),r=new ui({name:"CubemapFromEquirect",uniforms:$s(n.uniforms),vertexShader:n.vertexShader,fragmentShader:n.fragmentShader,side:gn,blending:Ai});r.uniforms.tEquirect.value=t;let o=new Me(s,r),a=t.minFilter;return t.minFilter===Pi&&(t.minFilter=un),new Zc(1,10,this).update(e,o),t.minFilter=a,o.geometry.dispose(),o.material.dispose(),this}clear(e,t,n,s){let r=e.getRenderTarget();for(let o=0;o<6;o++)e.setRenderTarget(this,o),e.clear(t,n,s);e.setRenderTarget(r)}},Cc=new I,km=new I,Hm=new $e,oi=class{constructor(e=new I(1,0,0),t=0){this.isPlane=!0,this.normal=e,this.constant=t}set(e,t){return this.normal.copy(e),this.constant=t,this}setComponents(e,t,n,s){return this.normal.set(e,t,n),this.constant=s,this}setFromNormalAndCoplanarPoint(e,t){return this.normal.copy(e),this.constant=-t.dot(this.normal),this}setFromCoplanarPoints(e,t,n){let s=Cc.subVectors(n,t).cross(km.subVectors(e,t)).normalize();return this.setFromNormalAndCoplanarPoint(s,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){let e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,t){return t.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,t){let n=e.delta(Cc),s=this.normal.dot(n);if(s===0)return this.distanceToPoint(e.start)===0?t.copy(e.start):null;let r=-(e.start.dot(this.normal)+this.constant)/s;return r<0||r>1?null:t.copy(e.start).addScaledVector(n,r)}intersectsLine(e){let t=this.distanceToPoint(e.start),n=this.distanceToPoint(e.end);return t<0&&n>0||n<0&&t>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,t){let n=t||Hm.getNormalMatrix(e),s=this.coplanarPoint(Cc).applyMatrix4(e),r=this.normal.applyMatrix3(n).normalize();return this.constant=-s.dot(r),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}},Yi=new bn,Io=new I,Or=class{constructor(e=new oi,t=new oi,n=new oi,s=new oi,r=new oi,o=new oi){this.planes=[e,t,n,s,r,o]}set(e,t,n,s,r,o){let a=this.planes;return a[0].copy(e),a[1].copy(t),a[2].copy(n),a[3].copy(s),a[4].copy(r),a[5].copy(o),this}copy(e){let t=this.planes;for(let n=0;n<6;n++)t[n].copy(e.planes[n]);return this}setFromProjectionMatrix(e,t=ci){let n=this.planes,s=e.elements,r=s[0],o=s[1],a=s[2],c=s[3],l=s[4],h=s[5],u=s[6],d=s[7],f=s[8],g=s[9],x=s[10],m=s[11],p=s[12],y=s[13],_=s[14],b=s[15];if(n[0].setComponents(c-r,d-l,m-f,b-p).normalize(),n[1].setComponents(c+r,d+l,m+f,b+p).normalize(),n[2].setComponents(c+o,d+h,m+g,b+y).normalize(),n[3].setComponents(c-o,d-h,m-g,b-y).normalize(),n[4].setComponents(c-a,d-u,m-x,b-_).normalize(),t===ci)n[5].setComponents(c+a,d+u,m+x,b+_).normalize();else if(t===Yo)n[5].setComponents(a,u,x,_).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+t);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),Yi.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{let t=e.geometry;t.boundingSphere===null&&t.computeBoundingSphere(),Yi.copy(t.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(Yi)}intersectsSprite(e){return Yi.center.set(0,0,0),Yi.radius=.7071067811865476,Yi.applyMatrix4(e.matrixWorld),this.intersectsSphere(Yi)}intersectsSphere(e){let t=this.planes,n=e.center,s=-e.radius;for(let r=0;r<6;r++)if(t[r].distanceToPoint(n)<s)return!1;return!0}intersectsBox(e){let t=this.planes;for(let n=0;n<6;n++){let s=t[n];if(Io.x=s.normal.x>0?e.max.x:e.min.x,Io.y=s.normal.y>0?e.max.y:e.min.y,Io.z=s.normal.z>0?e.max.z:e.min.z,s.distanceToPoint(Io)<0)return!1}return!0}containsPoint(e){let t=this.planes;for(let n=0;n<6;n++)if(t[n].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}};function Gd(){let i=null,e=!1,t=null,n=null;function s(r,o){t(r,o),n=i.requestAnimationFrame(s)}return{start:function(){e!==!0&&t!==null&&(n=i.requestAnimationFrame(s),e=!0)},stop:function(){i.cancelAnimationFrame(n),e=!1},setAnimationLoop:function(r){t=r},setContext:function(r){i=r}}}function Gm(i,e){let t=e.isWebGL2,n=new WeakMap;function s(l,h){let u=l.array,d=l.usage,f=u.byteLength,g=i.createBuffer();i.bindBuffer(h,g),i.bufferData(h,u,d),l.onUploadCallback();let x;if(u instanceof Float32Array)x=i.FLOAT;else if(u instanceof Uint16Array)if(l.isFloat16BufferAttribute)if(t)x=i.HALF_FLOAT;else throw new Error("THREE.WebGLAttributes: Usage of Float16BufferAttribute requires WebGL2.");else x=i.UNSIGNED_SHORT;else if(u instanceof Int16Array)x=i.SHORT;else if(u instanceof Uint32Array)x=i.UNSIGNED_INT;else if(u instanceof Int32Array)x=i.INT;else if(u instanceof Int8Array)x=i.BYTE;else if(u instanceof Uint8Array)x=i.UNSIGNED_BYTE;else if(u instanceof Uint8ClampedArray)x=i.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+u);return{buffer:g,type:x,bytesPerElement:u.BYTES_PER_ELEMENT,version:l.version,size:f}}function r(l,h,u){let d=h.array,f=h._updateRange,g=h.updateRanges;if(i.bindBuffer(u,l),f.count===-1&&g.length===0&&i.bufferSubData(u,0,d),g.length!==0){for(let x=0,m=g.length;x<m;x++){let p=g[x];t?i.bufferSubData(u,p.start*d.BYTES_PER_ELEMENT,d,p.start,p.count):i.bufferSubData(u,p.start*d.BYTES_PER_ELEMENT,d.subarray(p.start,p.start+p.count))}h.clearUpdateRanges()}f.count!==-1&&(t?i.bufferSubData(u,f.offset*d.BYTES_PER_ELEMENT,d,f.offset,f.count):i.bufferSubData(u,f.offset*d.BYTES_PER_ELEMENT,d.subarray(f.offset,f.offset+f.count)),f.count=-1),h.onUploadCallback()}function o(l){return l.isInterleavedBufferAttribute&&(l=l.data),n.get(l)}function a(l){l.isInterleavedBufferAttribute&&(l=l.data);let h=n.get(l);h&&(i.deleteBuffer(h.buffer),n.delete(l))}function c(l,h){if(l.isGLBufferAttribute){let d=n.get(l);(!d||d.version<l.version)&&n.set(l,{buffer:l.buffer,type:l.type,bytesPerElement:l.elementSize,version:l.version});return}l.isInterleavedBufferAttribute&&(l=l.data);let u=n.get(l);if(u===void 0)n.set(l,s(l,h));else if(u.version<l.version){if(u.size!==l.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");r(u.buffer,l,h),u.version=l.version}}return{get:o,remove:a,update:c}}var Js=class i extends Nt{constructor(e=1,t=1,n=1,s=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:t,widthSegments:n,heightSegments:s};let r=e/2,o=t/2,a=Math.floor(n),c=Math.floor(s),l=a+1,h=c+1,u=e/a,d=t/c,f=[],g=[],x=[],m=[];for(let p=0;p<h;p++){let y=p*d-o;for(let _=0;_<l;_++){let b=_*u-r;g.push(b,-y,0),x.push(0,0,1),m.push(_/a),m.push(1-p/c)}}for(let p=0;p<c;p++)for(let y=0;y<a;y++){let _=y+l*p,b=y+l*(p+1),C=y+1+l*(p+1),A=y+1+l*p;f.push(_,b,A),f.push(b,C,A)}this.setIndex(f),this.setAttribute("position",new ht(g,3)),this.setAttribute("normal",new ht(x,3)),this.setAttribute("uv",new ht(m,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new i(e.width,e.height,e.widthSegments,e.heightSegments)}},Vm=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,Wm=`#ifdef USE_ALPHAHASH
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
#endif`,Xm=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,qm=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,Ym=`#ifdef USE_ALPHATEST
	if ( diffuseColor.a < alphaTest ) discard;
#endif`,jm=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,Zm=`#ifdef USE_AOMAP
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
#endif`,Km=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,$m=`#ifdef USE_BATCHING
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
#endif`,Jm=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( batchId );
#endif`,Qm=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,e0=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,t0=`float G_BlinnPhong_Implicit( ) {
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
} // validated`,n0=`#ifdef USE_IRIDESCENCE
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
#endif`,i0=`#ifdef USE_BUMPMAP
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
#endif`,s0=`#if NUM_CLIPPING_PLANES > 0
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
#endif`,r0=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,o0=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,a0=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,c0=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,l0=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,h0=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR )
	varying vec3 vColor;
#endif`,u0=`#if defined( USE_COLOR_ALPHA )
	vColor = vec4( 1.0 );
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR )
	vColor = vec3( 1.0 );
#endif
#ifdef USE_COLOR
	vColor *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.xyz *= instanceColor.xyz;
#endif`,d0=`#define PI 3.141592653589793
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
} // validated`,f0=`#ifdef ENVMAP_TYPE_CUBE_UV
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
#endif`,p0=`vec3 transformedNormal = objectNormal;
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
#endif`,m0=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,g0=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,x0=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,_0=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,y0="gl_FragColor = linearToOutputTexel( gl_FragColor );",v0=`
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
}`,M0=`#ifdef USE_ENVMAP
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
#endif`,b0=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,w0=`#ifdef USE_ENVMAP
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
#endif`,S0=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,E0=`#ifdef USE_ENVMAP
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
#endif`,T0=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,A0=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,R0=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,C0=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,P0=`#ifdef USE_GRADIENTMAP
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
}`,L0=`#ifdef USE_LIGHTMAP
	vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
	vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
	reflectedLight.indirectDiffuse += lightMapIrradiance;
#endif`,I0=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,z0=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,D0=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,N0=`uniform bool receiveShadow;
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
#endif`,U0=`#ifdef USE_ENVMAP
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
#endif`,O0=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,F0=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,B0=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,k0=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,H0=`PhysicalMaterial material;
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
#endif`,G0=`struct PhysicalMaterial {
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
}`,V0=`
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
#endif`,W0=`#if defined( RE_IndirectDiffuse )
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
#endif`,X0=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,q0=`#if defined( USE_LOGDEPTHBUF ) && defined( USE_LOGDEPTHBUF_EXT )
	gl_FragDepthEXT = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,Y0=`#if defined( USE_LOGDEPTHBUF ) && defined( USE_LOGDEPTHBUF_EXT )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,j0=`#ifdef USE_LOGDEPTHBUF
	#ifdef USE_LOGDEPTHBUF_EXT
		varying float vFragDepth;
		varying float vIsPerspective;
	#else
		uniform float logDepthBufFC;
	#endif
#endif`,Z0=`#ifdef USE_LOGDEPTHBUF
	#ifdef USE_LOGDEPTHBUF_EXT
		vFragDepth = 1.0 + gl_Position.w;
		vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
	#else
		if ( isPerspectiveMatrix( projectionMatrix ) ) {
			gl_Position.z = log2( max( EPSILON, gl_Position.w + 1.0 ) ) * logDepthBufFC - 1.0;
			gl_Position.z *= gl_Position.w;
		}
	#endif
#endif`,K0=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = vec4( mix( pow( sampledDiffuseColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), sampledDiffuseColor.rgb * 0.0773993808, vec3( lessThanEqual( sampledDiffuseColor.rgb, vec3( 0.04045 ) ) ) ), sampledDiffuseColor.w );
	
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,$0=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,J0=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`,Q0=`#if defined( USE_POINTS_UV )
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
#endif`,eg=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,tg=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,ng=`#if defined( USE_MORPHCOLORS ) && defined( MORPHTARGETS_TEXTURE )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,ig=`#ifdef USE_MORPHNORMALS
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
#endif`,sg=`#ifdef USE_MORPHTARGETS
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
#endif`,rg=`#ifdef USE_MORPHTARGETS
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
#endif`,og=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
vec3 nonPerturbedNormal = normal;`,ag=`#ifdef USE_NORMALMAP_OBJECTSPACE
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
#endif`,cg=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,lg=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,hg=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,ug=`#ifdef USE_NORMALMAP
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
#endif`,dg=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,fg=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,pg=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,mg=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,gg=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,xg=`vec3 packNormalToRGB( const in vec3 normal ) {
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
}`,_g=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,yg=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,vg=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,Mg=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,bg=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,wg=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,Sg=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,Eg=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,Tg=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
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
#endif`,Ag=`float getShadowMask() {
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
}`,Rg=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,Cg=`#ifdef USE_SKINNING
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
#endif`,Pg=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,Lg=`#ifdef USE_SKINNING
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
#endif`,Ig=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,zg=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,Dg=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,Ng=`#ifndef saturate
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
vec3 CustomToneMapping( vec3 color ) { return color; }`,Ug=`#ifdef USE_TRANSMISSION
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
#endif`,Og=`#ifdef USE_TRANSMISSION
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
#endif`,Fg=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,Bg=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,kg=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,Hg=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`,Gg=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,Vg=`uniform sampler2D t2D;
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
}`,Wg=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,Xg=`#ifdef ENVMAP_TYPE_CUBE
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
}`,qg=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,Yg=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,jg=`#include <common>
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
}`,Zg=`#if DEPTH_PACKING == 3200
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
}`,Kg=`#define DISTANCE
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
}`,$g=`#define DISTANCE
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
}`,Jg=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,Qg=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,ex=`uniform float scale;
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
}`,tx=`uniform vec3 diffuse;
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
}`,nx=`#include <common>
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
}`,ix=`uniform vec3 diffuse;
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
}`,sx=`#define LAMBERT
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
}`,rx=`#define LAMBERT
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
}`,ox=`#define MATCAP
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
}`,ax=`#define MATCAP
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
}`,cx=`#define NORMAL
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
}`,lx=`#define NORMAL
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
}`,hx=`#define PHONG
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
}`,ux=`#define PHONG
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
}`,dx=`#define STANDARD
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
}`,fx=`#define STANDARD
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
}`,px=`#define TOON
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
}`,mx=`#define TOON
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
}`,gx=`uniform float size;
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
}`,xx=`uniform vec3 diffuse;
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
}`,_x=`#include <common>
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
}`,yx=`uniform vec3 color;
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
}`,vx=`uniform float rotation;
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
}`,Mx=`uniform vec3 diffuse;
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
}`,je={alphahash_fragment:Vm,alphahash_pars_fragment:Wm,alphamap_fragment:Xm,alphamap_pars_fragment:qm,alphatest_fragment:Ym,alphatest_pars_fragment:jm,aomap_fragment:Zm,aomap_pars_fragment:Km,batching_pars_vertex:$m,batching_vertex:Jm,begin_vertex:Qm,beginnormal_vertex:e0,bsdfs:t0,iridescence_fragment:n0,bumpmap_pars_fragment:i0,clipping_planes_fragment:s0,clipping_planes_pars_fragment:r0,clipping_planes_pars_vertex:o0,clipping_planes_vertex:a0,color_fragment:c0,color_pars_fragment:l0,color_pars_vertex:h0,color_vertex:u0,common:d0,cube_uv_reflection_fragment:f0,defaultnormal_vertex:p0,displacementmap_pars_vertex:m0,displacementmap_vertex:g0,emissivemap_fragment:x0,emissivemap_pars_fragment:_0,colorspace_fragment:y0,colorspace_pars_fragment:v0,envmap_fragment:M0,envmap_common_pars_fragment:b0,envmap_pars_fragment:w0,envmap_pars_vertex:S0,envmap_physical_pars_fragment:U0,envmap_vertex:E0,fog_vertex:T0,fog_pars_vertex:A0,fog_fragment:R0,fog_pars_fragment:C0,gradientmap_pars_fragment:P0,lightmap_fragment:L0,lightmap_pars_fragment:I0,lights_lambert_fragment:z0,lights_lambert_pars_fragment:D0,lights_pars_begin:N0,lights_toon_fragment:O0,lights_toon_pars_fragment:F0,lights_phong_fragment:B0,lights_phong_pars_fragment:k0,lights_physical_fragment:H0,lights_physical_pars_fragment:G0,lights_fragment_begin:V0,lights_fragment_maps:W0,lights_fragment_end:X0,logdepthbuf_fragment:q0,logdepthbuf_pars_fragment:Y0,logdepthbuf_pars_vertex:j0,logdepthbuf_vertex:Z0,map_fragment:K0,map_pars_fragment:$0,map_particle_fragment:J0,map_particle_pars_fragment:Q0,metalnessmap_fragment:eg,metalnessmap_pars_fragment:tg,morphcolor_vertex:ng,morphnormal_vertex:ig,morphtarget_pars_vertex:sg,morphtarget_vertex:rg,normal_fragment_begin:og,normal_fragment_maps:ag,normal_pars_fragment:cg,normal_pars_vertex:lg,normal_vertex:hg,normalmap_pars_fragment:ug,clearcoat_normal_fragment_begin:dg,clearcoat_normal_fragment_maps:fg,clearcoat_pars_fragment:pg,iridescence_pars_fragment:mg,opaque_fragment:gg,packing:xg,premultiplied_alpha_fragment:_g,project_vertex:yg,dithering_fragment:vg,dithering_pars_fragment:Mg,roughnessmap_fragment:bg,roughnessmap_pars_fragment:wg,shadowmap_pars_fragment:Sg,shadowmap_pars_vertex:Eg,shadowmap_vertex:Tg,shadowmask_pars_fragment:Ag,skinbase_vertex:Rg,skinning_pars_vertex:Cg,skinning_vertex:Pg,skinnormal_vertex:Lg,specularmap_fragment:Ig,specularmap_pars_fragment:zg,tonemapping_fragment:Dg,tonemapping_pars_fragment:Ng,transmission_fragment:Ug,transmission_pars_fragment:Og,uv_pars_fragment:Fg,uv_pars_vertex:Bg,uv_vertex:kg,worldpos_vertex:Hg,background_vert:Gg,background_frag:Vg,backgroundCube_vert:Wg,backgroundCube_frag:Xg,cube_vert:qg,cube_frag:Yg,depth_vert:jg,depth_frag:Zg,distanceRGBA_vert:Kg,distanceRGBA_frag:$g,equirect_vert:Jg,equirect_frag:Qg,linedashed_vert:ex,linedashed_frag:tx,meshbasic_vert:nx,meshbasic_frag:ix,meshlambert_vert:sx,meshlambert_frag:rx,meshmatcap_vert:ox,meshmatcap_frag:ax,meshnormal_vert:cx,meshnormal_frag:lx,meshphong_vert:hx,meshphong_frag:ux,meshphysical_vert:dx,meshphysical_frag:fx,meshtoon_vert:px,meshtoon_frag:mx,points_vert:gx,points_frag:xx,shadow_vert:_x,shadow_frag:yx,sprite_vert:vx,sprite_frag:Mx},fe={common:{diffuse:{value:new ge(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new $e},alphaMap:{value:null},alphaMapTransform:{value:new $e},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new $e}},envmap:{envMap:{value:null},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new $e}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new $e}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new $e},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new $e},normalScale:{value:new He(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new $e},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new $e}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new $e}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new $e}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new ge(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new ge(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new $e},alphaTest:{value:0},uvTransform:{value:new $e}},sprite:{diffuse:{value:new ge(16777215)},opacity:{value:1},center:{value:new He(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new $e},alphaMap:{value:null},alphaMapTransform:{value:new $e},alphaTest:{value:0}}},Wn={basic:{uniforms:hn([fe.common,fe.specularmap,fe.envmap,fe.aomap,fe.lightmap,fe.fog]),vertexShader:je.meshbasic_vert,fragmentShader:je.meshbasic_frag},lambert:{uniforms:hn([fe.common,fe.specularmap,fe.envmap,fe.aomap,fe.lightmap,fe.emissivemap,fe.bumpmap,fe.normalmap,fe.displacementmap,fe.fog,fe.lights,{emissive:{value:new ge(0)}}]),vertexShader:je.meshlambert_vert,fragmentShader:je.meshlambert_frag},phong:{uniforms:hn([fe.common,fe.specularmap,fe.envmap,fe.aomap,fe.lightmap,fe.emissivemap,fe.bumpmap,fe.normalmap,fe.displacementmap,fe.fog,fe.lights,{emissive:{value:new ge(0)},specular:{value:new ge(1118481)},shininess:{value:30}}]),vertexShader:je.meshphong_vert,fragmentShader:je.meshphong_frag},standard:{uniforms:hn([fe.common,fe.envmap,fe.aomap,fe.lightmap,fe.emissivemap,fe.bumpmap,fe.normalmap,fe.displacementmap,fe.roughnessmap,fe.metalnessmap,fe.fog,fe.lights,{emissive:{value:new ge(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:je.meshphysical_vert,fragmentShader:je.meshphysical_frag},toon:{uniforms:hn([fe.common,fe.aomap,fe.lightmap,fe.emissivemap,fe.bumpmap,fe.normalmap,fe.displacementmap,fe.gradientmap,fe.fog,fe.lights,{emissive:{value:new ge(0)}}]),vertexShader:je.meshtoon_vert,fragmentShader:je.meshtoon_frag},matcap:{uniforms:hn([fe.common,fe.bumpmap,fe.normalmap,fe.displacementmap,fe.fog,{matcap:{value:null}}]),vertexShader:je.meshmatcap_vert,fragmentShader:je.meshmatcap_frag},points:{uniforms:hn([fe.points,fe.fog]),vertexShader:je.points_vert,fragmentShader:je.points_frag},dashed:{uniforms:hn([fe.common,fe.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:je.linedashed_vert,fragmentShader:je.linedashed_frag},depth:{uniforms:hn([fe.common,fe.displacementmap]),vertexShader:je.depth_vert,fragmentShader:je.depth_frag},normal:{uniforms:hn([fe.common,fe.bumpmap,fe.normalmap,fe.displacementmap,{opacity:{value:1}}]),vertexShader:je.meshnormal_vert,fragmentShader:je.meshnormal_frag},sprite:{uniforms:hn([fe.sprite,fe.fog]),vertexShader:je.sprite_vert,fragmentShader:je.sprite_frag},background:{uniforms:{uvTransform:{value:new $e},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:je.background_vert,fragmentShader:je.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1}},vertexShader:je.backgroundCube_vert,fragmentShader:je.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:je.cube_vert,fragmentShader:je.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:je.equirect_vert,fragmentShader:je.equirect_frag},distanceRGBA:{uniforms:hn([fe.common,fe.displacementmap,{referencePosition:{value:new I},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:je.distanceRGBA_vert,fragmentShader:je.distanceRGBA_frag},shadow:{uniforms:hn([fe.lights,fe.fog,{color:{value:new ge(0)},opacity:{value:1}}]),vertexShader:je.shadow_vert,fragmentShader:je.shadow_frag}};Wn.physical={uniforms:hn([Wn.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new $e},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new $e},clearcoatNormalScale:{value:new He(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new $e},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new $e},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new $e},sheen:{value:0},sheenColor:{value:new ge(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new $e},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new $e},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new $e},transmissionSamplerSize:{value:new He},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new $e},attenuationDistance:{value:0},attenuationColor:{value:new ge(0)},specularColor:{value:new ge(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new $e},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new $e},anisotropyVector:{value:new He},anisotropyMap:{value:null},anisotropyMapTransform:{value:new $e}}]),vertexShader:je.meshphysical_vert,fragmentShader:je.meshphysical_frag};var zo={r:0,b:0,g:0};function bx(i,e,t,n,s,r,o){let a=new ge(0),c=r===!0?0:1,l,h,u=null,d=0,f=null;function g(m,p){let y=!1,_=p.isScene===!0?p.background:null;_&&_.isTexture&&(_=(p.backgroundBlurriness>0?t:e).get(_)),_===null?x(a,c):_&&_.isColor&&(x(_,1),y=!0);let b=i.xr.getEnvironmentBlendMode();b==="additive"?n.buffers.color.setClear(0,0,0,1,o):b==="alpha-blend"&&n.buffers.color.setClear(0,0,0,0,o),(i.autoClear||y)&&i.clear(i.autoClearColor,i.autoClearDepth,i.autoClearStencil),_&&(_.isCubeTexture||_.mapping===wa)?(h===void 0&&(h=new Me(new Ge(1,1,1),new ui({name:"BackgroundCubeMaterial",uniforms:$s(Wn.backgroundCube.uniforms),vertexShader:Wn.backgroundCube.vertexShader,fragmentShader:Wn.backgroundCube.fragmentShader,side:gn,depthTest:!1,depthWrite:!1,fog:!1})),h.geometry.deleteAttribute("normal"),h.geometry.deleteAttribute("uv"),h.onBeforeRender=function(C,A,R){this.matrixWorld.copyPosition(R.matrixWorld)},Object.defineProperty(h.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),s.update(h)),h.material.uniforms.envMap.value=_,h.material.uniforms.flipEnvMap.value=_.isCubeTexture&&_.isRenderTargetTexture===!1?-1:1,h.material.uniforms.backgroundBlurriness.value=p.backgroundBlurriness,h.material.uniforms.backgroundIntensity.value=p.backgroundIntensity,h.material.toneMapped=lt.getTransfer(_.colorSpace)!==Mt,(u!==_||d!==_.version||f!==i.toneMapping)&&(h.material.needsUpdate=!0,u=_,d=_.version,f=i.toneMapping),h.layers.enableAll(),m.unshift(h,h.geometry,h.material,0,0,null)):_&&_.isTexture&&(l===void 0&&(l=new Me(new Js(2,2),new ui({name:"BackgroundMaterial",uniforms:$s(Wn.background.uniforms),vertexShader:Wn.background.vertexShader,fragmentShader:Wn.background.fragmentShader,side:qn,depthTest:!1,depthWrite:!1,fog:!1})),l.geometry.deleteAttribute("normal"),Object.defineProperty(l.material,"map",{get:function(){return this.uniforms.t2D.value}}),s.update(l)),l.material.uniforms.t2D.value=_,l.material.uniforms.backgroundIntensity.value=p.backgroundIntensity,l.material.toneMapped=lt.getTransfer(_.colorSpace)!==Mt,_.matrixAutoUpdate===!0&&_.updateMatrix(),l.material.uniforms.uvTransform.value.copy(_.matrix),(u!==_||d!==_.version||f!==i.toneMapping)&&(l.material.needsUpdate=!0,u=_,d=_.version,f=i.toneMapping),l.layers.enableAll(),m.unshift(l,l.geometry,l.material,0,0,null))}function x(m,p){m.getRGB(zo,Hd(i)),n.buffers.color.setClear(zo.r,zo.g,zo.b,p,o)}return{getClearColor:function(){return a},setClearColor:function(m,p=1){a.set(m),c=p,x(a,c)},getClearAlpha:function(){return c},setClearAlpha:function(m){c=m,x(a,c)},render:g}}function wx(i,e,t,n){let s=i.getParameter(i.MAX_VERTEX_ATTRIBS),r=n.isWebGL2?null:e.get("OES_vertex_array_object"),o=n.isWebGL2||r!==null,a={},c=m(null),l=c,h=!1;function u(z,B,Q,Z,K){let $=!1;if(o){let te=x(Z,Q,B);l!==te&&(l=te,f(l.object)),$=p(z,Z,Q,K),$&&y(z,Z,Q,K)}else{let te=B.wireframe===!0;(l.geometry!==Z.id||l.program!==Q.id||l.wireframe!==te)&&(l.geometry=Z.id,l.program=Q.id,l.wireframe=te,$=!0)}K!==null&&t.update(K,i.ELEMENT_ARRAY_BUFFER),($||h)&&(h=!1,O(z,B,Q,Z),K!==null&&i.bindBuffer(i.ELEMENT_ARRAY_BUFFER,t.get(K).buffer))}function d(){return n.isWebGL2?i.createVertexArray():r.createVertexArrayOES()}function f(z){return n.isWebGL2?i.bindVertexArray(z):r.bindVertexArrayOES(z)}function g(z){return n.isWebGL2?i.deleteVertexArray(z):r.deleteVertexArrayOES(z)}function x(z,B,Q){let Z=Q.wireframe===!0,K=a[z.id];K===void 0&&(K={},a[z.id]=K);let $=K[B.id];$===void 0&&($={},K[B.id]=$);let te=$[Z];return te===void 0&&(te=m(d()),$[Z]=te),te}function m(z){let B=[],Q=[],Z=[];for(let K=0;K<s;K++)B[K]=0,Q[K]=0,Z[K]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:B,enabledAttributes:Q,attributeDivisors:Z,object:z,attributes:{},index:null}}function p(z,B,Q,Z){let K=l.attributes,$=B.attributes,te=0,he=Q.getAttributes();for(let pe in he)if(he[pe].location>=0){let ne=K[pe],me=$[pe];if(me===void 0&&(pe==="instanceMatrix"&&z.instanceMatrix&&(me=z.instanceMatrix),pe==="instanceColor"&&z.instanceColor&&(me=z.instanceColor)),ne===void 0||ne.attribute!==me||me&&ne.data!==me.data)return!0;te++}return l.attributesNum!==te||l.index!==Z}function y(z,B,Q,Z){let K={},$=B.attributes,te=0,he=Q.getAttributes();for(let pe in he)if(he[pe].location>=0){let ne=$[pe];ne===void 0&&(pe==="instanceMatrix"&&z.instanceMatrix&&(ne=z.instanceMatrix),pe==="instanceColor"&&z.instanceColor&&(ne=z.instanceColor));let me={};me.attribute=ne,ne&&ne.data&&(me.data=ne.data),K[pe]=me,te++}l.attributes=K,l.attributesNum=te,l.index=Z}function _(){let z=l.newAttributes;for(let B=0,Q=z.length;B<Q;B++)z[B]=0}function b(z){C(z,0)}function C(z,B){let Q=l.newAttributes,Z=l.enabledAttributes,K=l.attributeDivisors;Q[z]=1,Z[z]===0&&(i.enableVertexAttribArray(z),Z[z]=1),K[z]!==B&&((n.isWebGL2?i:e.get("ANGLE_instanced_arrays"))[n.isWebGL2?"vertexAttribDivisor":"vertexAttribDivisorANGLE"](z,B),K[z]=B)}function A(){let z=l.newAttributes,B=l.enabledAttributes;for(let Q=0,Z=B.length;Q<Z;Q++)B[Q]!==z[Q]&&(i.disableVertexAttribArray(Q),B[Q]=0)}function R(z,B,Q,Z,K,$,te){te===!0?i.vertexAttribIPointer(z,B,Q,K,$):i.vertexAttribPointer(z,B,Q,Z,K,$)}function O(z,B,Q,Z){if(n.isWebGL2===!1&&(z.isInstancedMesh||Z.isInstancedBufferGeometry)&&e.get("ANGLE_instanced_arrays")===null)return;_();let K=Z.attributes,$=Q.getAttributes(),te=B.defaultAttributeValues;for(let he in $){let pe=$[he];if(pe.location>=0){let Y=K[he];if(Y===void 0&&(he==="instanceMatrix"&&z.instanceMatrix&&(Y=z.instanceMatrix),he==="instanceColor"&&z.instanceColor&&(Y=z.instanceColor)),Y!==void 0){let ne=Y.normalized,me=Y.itemSize,Ce=t.get(Y);if(Ce===void 0)continue;let we=Ce.buffer,ze=Ce.type,Ve=Ce.bytesPerElement,De=n.isWebGL2===!0&&(ze===i.INT||ze===i.UNSIGNED_INT||Y.gpuType===Cd);if(Y.isInterleavedBufferAttribute){let rt=Y.data,k=rt.stride,$t=Y.offset;if(rt.isInstancedInterleavedBuffer){for(let Ie=0;Ie<pe.locationSize;Ie++)C(pe.location+Ie,rt.meshPerAttribute);z.isInstancedMesh!==!0&&Z._maxInstanceCount===void 0&&(Z._maxInstanceCount=rt.meshPerAttribute*rt.count)}else for(let Ie=0;Ie<pe.locationSize;Ie++)b(pe.location+Ie);i.bindBuffer(i.ARRAY_BUFFER,we);for(let Ie=0;Ie<pe.locationSize;Ie++)R(pe.location+Ie,me/pe.locationSize,ze,ne,k*Ve,($t+me/pe.locationSize*Ie)*Ve,De)}else{if(Y.isInstancedBufferAttribute){for(let rt=0;rt<pe.locationSize;rt++)C(pe.location+rt,Y.meshPerAttribute);z.isInstancedMesh!==!0&&Z._maxInstanceCount===void 0&&(Z._maxInstanceCount=Y.meshPerAttribute*Y.count)}else for(let rt=0;rt<pe.locationSize;rt++)b(pe.location+rt);i.bindBuffer(i.ARRAY_BUFFER,we);for(let rt=0;rt<pe.locationSize;rt++)R(pe.location+rt,me/pe.locationSize,ze,ne,me*Ve,me/pe.locationSize*rt*Ve,De)}}else if(te!==void 0){let ne=te[he];if(ne!==void 0)switch(ne.length){case 2:i.vertexAttrib2fv(pe.location,ne);break;case 3:i.vertexAttrib3fv(pe.location,ne);break;case 4:i.vertexAttrib4fv(pe.location,ne);break;default:i.vertexAttrib1fv(pe.location,ne)}}}}A()}function v(){j();for(let z in a){let B=a[z];for(let Q in B){let Z=B[Q];for(let K in Z)g(Z[K].object),delete Z[K];delete B[Q]}delete a[z]}}function S(z){if(a[z.id]===void 0)return;let B=a[z.id];for(let Q in B){let Z=B[Q];for(let K in Z)g(Z[K].object),delete Z[K];delete B[Q]}delete a[z.id]}function F(z){for(let B in a){let Q=a[B];if(Q[z.id]===void 0)continue;let Z=Q[z.id];for(let K in Z)g(Z[K].object),delete Z[K];delete Q[z.id]}}function j(){ee(),h=!0,l!==c&&(l=c,f(l.object))}function ee(){c.geometry=null,c.program=null,c.wireframe=!1}return{setup:u,reset:j,resetDefaultState:ee,dispose:v,releaseStatesOfGeometry:S,releaseStatesOfProgram:F,initAttributes:_,enableAttribute:b,disableUnusedAttributes:A}}function Sx(i,e,t,n){let s=n.isWebGL2,r;function o(h){r=h}function a(h,u){i.drawArrays(r,h,u),t.update(u,r,1)}function c(h,u,d){if(d===0)return;let f,g;if(s)f=i,g="drawArraysInstanced";else if(f=e.get("ANGLE_instanced_arrays"),g="drawArraysInstancedANGLE",f===null){console.error("THREE.WebGLBufferRenderer: using THREE.InstancedBufferGeometry but hardware does not support extension ANGLE_instanced_arrays.");return}f[g](r,h,u,d),t.update(u,r,d)}function l(h,u,d){if(d===0)return;let f=e.get("WEBGL_multi_draw");if(f===null)for(let g=0;g<d;g++)this.render(h[g],u[g]);else{f.multiDrawArraysWEBGL(r,h,0,u,0,d);let g=0;for(let x=0;x<d;x++)g+=u[x];t.update(g,r,1)}}this.setMode=o,this.render=a,this.renderInstances=c,this.renderMultiDraw=l}function Ex(i,e,t){let n;function s(){if(n!==void 0)return n;if(e.has("EXT_texture_filter_anisotropic")===!0){let R=e.get("EXT_texture_filter_anisotropic");n=i.getParameter(R.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else n=0;return n}function r(R){if(R==="highp"){if(i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.HIGH_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.HIGH_FLOAT).precision>0)return"highp";R="mediump"}return R==="mediump"&&i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.MEDIUM_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let o=typeof WebGL2RenderingContext!="undefined"&&i.constructor.name==="WebGL2RenderingContext",a=t.precision!==void 0?t.precision:"highp",c=r(a);c!==a&&(console.warn("THREE.WebGLRenderer:",a,"not supported, using",c,"instead."),a=c);let l=o||e.has("WEBGL_draw_buffers"),h=t.logarithmicDepthBuffer===!0,u=i.getParameter(i.MAX_TEXTURE_IMAGE_UNITS),d=i.getParameter(i.MAX_VERTEX_TEXTURE_IMAGE_UNITS),f=i.getParameter(i.MAX_TEXTURE_SIZE),g=i.getParameter(i.MAX_CUBE_MAP_TEXTURE_SIZE),x=i.getParameter(i.MAX_VERTEX_ATTRIBS),m=i.getParameter(i.MAX_VERTEX_UNIFORM_VECTORS),p=i.getParameter(i.MAX_VARYING_VECTORS),y=i.getParameter(i.MAX_FRAGMENT_UNIFORM_VECTORS),_=d>0,b=o||e.has("OES_texture_float"),C=_&&b,A=o?i.getParameter(i.MAX_SAMPLES):0;return{isWebGL2:o,drawBuffers:l,getMaxAnisotropy:s,getMaxPrecision:r,precision:a,logarithmicDepthBuffer:h,maxTextures:u,maxVertexTextures:d,maxTextureSize:f,maxCubemapSize:g,maxAttributes:x,maxVertexUniforms:m,maxVaryings:p,maxFragmentUniforms:y,vertexTextures:_,floatFragmentTextures:b,floatVertexTextures:C,maxSamples:A}}function Tx(i){let e=this,t=null,n=0,s=!1,r=!1,o=new oi,a=new $e,c={value:null,needsUpdate:!1};this.uniform=c,this.numPlanes=0,this.numIntersection=0,this.init=function(u,d){let f=u.length!==0||d||n!==0||s;return s=d,n=u.length,f},this.beginShadows=function(){r=!0,h(null)},this.endShadows=function(){r=!1},this.setGlobalState=function(u,d){t=h(u,d,0)},this.setState=function(u,d,f){let g=u.clippingPlanes,x=u.clipIntersection,m=u.clipShadows,p=i.get(u);if(!s||g===null||g.length===0||r&&!m)r?h(null):l();else{let y=r?0:n,_=y*4,b=p.clippingState||null;c.value=b,b=h(g,d,_,f);for(let C=0;C!==_;++C)b[C]=t[C];p.clippingState=b,this.numIntersection=x?this.numPlanes:0,this.numPlanes+=y}};function l(){c.value!==t&&(c.value=t,c.needsUpdate=n>0),e.numPlanes=n,e.numIntersection=0}function h(u,d,f,g){let x=u!==null?u.length:0,m=null;if(x!==0){if(m=c.value,g!==!0||m===null){let p=f+x*4,y=d.matrixWorldInverse;a.getNormalMatrix(y),(m===null||m.length<p)&&(m=new Float32Array(p));for(let _=0,b=f;_!==x;++_,b+=4)o.copy(u[_]).applyMatrix4(y,a),o.normal.toArray(m,b),m[b+3]=o.constant}c.value=m,c.needsUpdate=!0}return e.numPlanes=x,e.numIntersection=0,m}}function Ax(i){let e=new WeakMap;function t(o,a){return a===Gc?o.mapping=Xs:a===Vc&&(o.mapping=qs),o}function n(o){if(o&&o.isTexture){let a=o.mapping;if(a===Gc||a===Vc)if(e.has(o)){let c=e.get(o).texture;return t(c,o.mapping)}else{let c=o.image;if(c&&c.height>0){let l=new Kc(c.height/2);return l.fromEquirectangularTexture(i,o),e.set(o,l),o.addEventListener("dispose",s),t(l.texture,o.mapping)}else return null}}return o}function s(o){let a=o.target;a.removeEventListener("dispose",s);let c=e.get(a);c!==void 0&&(e.delete(a),c.dispose())}function r(){e=new WeakMap}return{get:n,dispose:r}}var Qs=class extends na{constructor(e=-1,t=1,n=1,s=-1,r=.1,o=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=t,this.top=n,this.bottom=s,this.near=r,this.far=o,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,t,n,s,r,o){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=s,this.view.width=r,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let e=(this.right-this.left)/(2*this.zoom),t=(this.top-this.bottom)/(2*this.zoom),n=(this.right+this.left)/2,s=(this.top+this.bottom)/2,r=n-e,o=n+e,a=s+t,c=s-t;if(this.view!==null&&this.view.enabled){let l=(this.right-this.left)/this.view.fullWidth/this.zoom,h=(this.top-this.bottom)/this.view.fullHeight/this.zoom;r+=l*this.view.offsetX,o=r+l*this.view.width,a-=h*this.view.offsetY,c=a-h*this.view.height}this.projectionMatrix.makeOrthographic(r,o,a,c,this.near,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){let t=super.toJSON(e);return t.object.zoom=this.zoom,t.object.left=this.left,t.object.right=this.right,t.object.top=this.top,t.object.bottom=this.bottom,t.object.near=this.near,t.object.far=this.far,this.view!==null&&(t.object.view=Object.assign({},this.view)),t}},ks=4,Hu=[.125,.215,.35,.446,.526,.582],Ki=20,Pc=new Qs,Gu=new ge,Lc=null,Ic=0,zc=0,ji=(1+Math.sqrt(5))/2,Ns=1/ji,Vu=[new I(1,1,1),new I(-1,1,1),new I(1,1,-1),new I(-1,1,-1),new I(0,ji,Ns),new I(0,ji,-Ns),new I(Ns,0,ji),new I(-Ns,0,ji),new I(ji,Ns,0),new I(-ji,Ns,0)],sa=class{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(e,t=0,n=.1,s=100){Lc=this._renderer.getRenderTarget(),Ic=this._renderer.getActiveCubeFace(),zc=this._renderer.getActiveMipmapLevel(),this._setSize(256);let r=this._allocateTargets();return r.depthBuffer=!0,this._sceneToCubeUV(e,n,s,r),t>0&&this._blur(r,0,0,t),this._applyPMREM(r),this._cleanup(r),r}fromEquirectangular(e,t=null){return this._fromTexture(e,t)}fromCubemap(e,t=null){return this._fromTexture(e,t)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=qu(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=Xu(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodPlanes.length;e++)this._lodPlanes[e].dispose()}_cleanup(e){this._renderer.setRenderTarget(Lc,Ic,zc),e.scissorTest=!1,Do(e,0,0,e.width,e.height)}_fromTexture(e,t){e.mapping===Xs||e.mapping===qs?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),Lc=this._renderer.getRenderTarget(),Ic=this._renderer.getActiveCubeFace(),zc=this._renderer.getActiveMipmapLevel();let n=t||this._allocateTargets();return this._textureToCubeUV(e,n),this._applyPMREM(n),this._cleanup(n),n}_allocateTargets(){let e=3*Math.max(this._cubeSize,112),t=4*this._cubeSize,n={magFilter:un,minFilter:un,generateMipmaps:!1,type:Nr,format:An,colorSpace:Xt,depthBuffer:!1},s=Wu(e,t,n);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==t){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=Wu(e,t,n);let{_lodMax:r}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=Rx(r)),this._blurMaterial=Cx(r,e,t)}return s}_compileMaterial(e){let t=new Me(this._lodPlanes[0],e);this._renderer.compile(t,Pc)}_sceneToCubeUV(e,t,n,s){let a=new Wt(90,1,t,n),c=[1,-1,1,1,1,1],l=[1,1,1,-1,-1,-1],h=this._renderer,u=h.autoClear,d=h.toneMapping;h.getClearColor(Gu),h.toneMapping=Ri,h.autoClear=!1;let f=new Lt({name:"PMREM.Background",side:gn,depthWrite:!1,depthTest:!1}),g=new Me(new Ge,f),x=!1,m=e.background;m?m.isColor&&(f.color.copy(m),e.background=null,x=!0):(f.color.copy(Gu),x=!0);for(let p=0;p<6;p++){let y=p%3;y===0?(a.up.set(0,c[p],0),a.lookAt(l[p],0,0)):y===1?(a.up.set(0,0,c[p]),a.lookAt(0,l[p],0)):(a.up.set(0,c[p],0),a.lookAt(0,0,l[p]));let _=this._cubeSize;Do(s,y*_,p>2?_:0,_,_),h.setRenderTarget(s),x&&h.render(g,a),h.render(e,a)}g.geometry.dispose(),g.material.dispose(),h.toneMapping=d,h.autoClear=u,e.background=m}_textureToCubeUV(e,t){let n=this._renderer,s=e.mapping===Xs||e.mapping===qs;s?(this._cubemapMaterial===null&&(this._cubemapMaterial=qu()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=Xu());let r=s?this._cubemapMaterial:this._equirectMaterial,o=new Me(this._lodPlanes[0],r),a=r.uniforms;a.envMap.value=e;let c=this._cubeSize;Do(t,0,0,3*c,2*c),n.setRenderTarget(t),n.render(o,Pc)}_applyPMREM(e){let t=this._renderer,n=t.autoClear;t.autoClear=!1;for(let s=1;s<this._lodPlanes.length;s++){let r=Math.sqrt(this._sigmas[s]*this._sigmas[s]-this._sigmas[s-1]*this._sigmas[s-1]),o=Vu[(s-1)%Vu.length];this._blur(e,s-1,s,r,o)}t.autoClear=n}_blur(e,t,n,s,r){let o=this._pingPongRenderTarget;this._halfBlur(e,o,t,n,s,"latitudinal",r),this._halfBlur(o,e,n,n,s,"longitudinal",r)}_halfBlur(e,t,n,s,r,o,a){let c=this._renderer,l=this._blurMaterial;o!=="latitudinal"&&o!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");let h=3,u=new Me(this._lodPlanes[s],l),d=l.uniforms,f=this._sizeLods[n]-1,g=isFinite(r)?Math.PI/(2*f):2*Math.PI/(2*Ki-1),x=r/g,m=isFinite(r)?1+Math.floor(h*x):Ki;m>Ki&&console.warn(`sigmaRadians, ${r}, is too large and will clip, as it requested ${m} samples when the maximum is set to ${Ki}`);let p=[],y=0;for(let R=0;R<Ki;++R){let O=R/x,v=Math.exp(-O*O/2);p.push(v),R===0?y+=v:R<m&&(y+=2*v)}for(let R=0;R<p.length;R++)p[R]=p[R]/y;d.envMap.value=e.texture,d.samples.value=m,d.weights.value=p,d.latitudinal.value=o==="latitudinal",a&&(d.poleAxis.value=a);let{_lodMax:_}=this;d.dTheta.value=g,d.mipInt.value=_-n;let b=this._sizeLods[s],C=3*b*(s>_-ks?s-_+ks:0),A=4*(this._cubeSize-b);Do(t,C,A,3*b,2*b),c.setRenderTarget(t),c.render(u,Pc)}};function Rx(i){let e=[],t=[],n=[],s=i,r=i-ks+1+Hu.length;for(let o=0;o<r;o++){let a=Math.pow(2,s);t.push(a);let c=1/a;o>i-ks?c=Hu[o-i+ks-1]:o===0&&(c=0),n.push(c);let l=1/(a-2),h=-l,u=1+l,d=[h,h,u,h,u,u,h,h,u,u,h,u],f=6,g=6,x=3,m=2,p=1,y=new Float32Array(x*g*f),_=new Float32Array(m*g*f),b=new Float32Array(p*g*f);for(let A=0;A<f;A++){let R=A%3*2/3-1,O=A>2?0:-1,v=[R,O,0,R+2/3,O,0,R+2/3,O+1,0,R,O,0,R+2/3,O+1,0,R,O+1,0];y.set(v,x*g*A),_.set(d,m*g*A);let S=[A,A,A,A,A,A];b.set(S,p*g*A)}let C=new Nt;C.setAttribute("position",new At(y,x)),C.setAttribute("uv",new At(_,m)),C.setAttribute("faceIndex",new At(b,p)),e.push(C),s>ks&&s--}return{lodPlanes:e,sizeLods:t,sigmas:n}}function Wu(i,e,t){let n=new hi(i,e,t);return n.texture.mapping=wa,n.texture.name="PMREM.cubeUv",n.scissorTest=!0,n}function Do(i,e,t,n,s){i.viewport.set(e,t,n,s),i.scissor.set(e,t,n,s)}function Cx(i,e,t){let n=new Float32Array(Ki),s=new I(0,1,0);return new ui({name:"SphericalGaussianBlur",defines:{n:Ki,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/t,CUBEUV_MAX_MIP:`${i}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:n},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:s}},vertexShader:Cl(),fragmentShader:`

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
		`,blending:Ai,depthTest:!1,depthWrite:!1})}function Xu(){return new ui({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:Cl(),fragmentShader:`

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
		`,blending:Ai,depthTest:!1,depthWrite:!1})}function qu(){return new ui({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:Cl(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:Ai,depthTest:!1,depthWrite:!1})}function Cl(){return`

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
	`}function Px(i){let e=new WeakMap,t=null;function n(a){if(a&&a.isTexture){let c=a.mapping,l=c===Gc||c===Vc,h=c===Xs||c===qs;if(l||h)if(a.isRenderTargetTexture&&a.needsPMREMUpdate===!0){a.needsPMREMUpdate=!1;let u=e.get(a);return t===null&&(t=new sa(i)),u=l?t.fromEquirectangular(a,u):t.fromCubemap(a,u),e.set(a,u),u.texture}else{if(e.has(a))return e.get(a).texture;{let u=a.image;if(l&&u&&u.height>0||h&&u&&s(u)){t===null&&(t=new sa(i));let d=l?t.fromEquirectangular(a):t.fromCubemap(a);return e.set(a,d),a.addEventListener("dispose",r),d.texture}else return null}}}return a}function s(a){let c=0,l=6;for(let h=0;h<l;h++)a[h]!==void 0&&c++;return c===l}function r(a){let c=a.target;c.removeEventListener("dispose",r);let l=e.get(c);l!==void 0&&(e.delete(c),l.dispose())}function o(){e=new WeakMap,t!==null&&(t.dispose(),t=null)}return{get:n,dispose:o}}function Lx(i){let e={};function t(n){if(e[n]!==void 0)return e[n];let s;switch(n){case"WEBGL_depth_texture":s=i.getExtension("WEBGL_depth_texture")||i.getExtension("MOZ_WEBGL_depth_texture")||i.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":s=i.getExtension("EXT_texture_filter_anisotropic")||i.getExtension("MOZ_EXT_texture_filter_anisotropic")||i.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":s=i.getExtension("WEBGL_compressed_texture_s3tc")||i.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||i.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":s=i.getExtension("WEBGL_compressed_texture_pvrtc")||i.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:s=i.getExtension(n)}return e[n]=s,s}return{has:function(n){return t(n)!==null},init:function(n){n.isWebGL2?(t("EXT_color_buffer_float"),t("WEBGL_clip_cull_distance")):(t("WEBGL_depth_texture"),t("OES_texture_float"),t("OES_texture_half_float"),t("OES_texture_half_float_linear"),t("OES_standard_derivatives"),t("OES_element_index_uint"),t("OES_vertex_array_object"),t("ANGLE_instanced_arrays")),t("OES_texture_float_linear"),t("EXT_color_buffer_half_float"),t("WEBGL_multisampled_render_to_texture")},get:function(n){let s=t(n);return s===null&&console.warn("THREE.WebGLRenderer: "+n+" extension not supported."),s}}}function Ix(i,e,t,n){let s={},r=new WeakMap;function o(u){let d=u.target;d.index!==null&&e.remove(d.index);for(let g in d.attributes)e.remove(d.attributes[g]);for(let g in d.morphAttributes){let x=d.morphAttributes[g];for(let m=0,p=x.length;m<p;m++)e.remove(x[m])}d.removeEventListener("dispose",o),delete s[d.id];let f=r.get(d);f&&(e.remove(f),r.delete(d)),n.releaseStatesOfGeometry(d),d.isInstancedBufferGeometry===!0&&delete d._maxInstanceCount,t.memory.geometries--}function a(u,d){return s[d.id]===!0||(d.addEventListener("dispose",o),s[d.id]=!0,t.memory.geometries++),d}function c(u){let d=u.attributes;for(let g in d)e.update(d[g],i.ARRAY_BUFFER);let f=u.morphAttributes;for(let g in f){let x=f[g];for(let m=0,p=x.length;m<p;m++)e.update(x[m],i.ARRAY_BUFFER)}}function l(u){let d=[],f=u.index,g=u.attributes.position,x=0;if(f!==null){let y=f.array;x=f.version;for(let _=0,b=y.length;_<b;_+=3){let C=y[_+0],A=y[_+1],R=y[_+2];d.push(C,A,A,R,R,C)}}else if(g!==void 0){let y=g.array;x=g.version;for(let _=0,b=y.length/3-1;_<b;_+=3){let C=_+0,A=_+1,R=_+2;d.push(C,A,A,R,R,C)}}else return;let m=new(Bd(d)?ta:ea)(d,1);m.version=x;let p=r.get(u);p&&e.remove(p),r.set(u,m)}function h(u){let d=r.get(u);if(d){let f=u.index;f!==null&&d.version<f.version&&l(u)}else l(u);return r.get(u)}return{get:a,update:c,getWireframeAttribute:h}}function zx(i,e,t,n){let s=n.isWebGL2,r;function o(f){r=f}let a,c;function l(f){a=f.type,c=f.bytesPerElement}function h(f,g){i.drawElements(r,g,a,f*c),t.update(g,r,1)}function u(f,g,x){if(x===0)return;let m,p;if(s)m=i,p="drawElementsInstanced";else if(m=e.get("ANGLE_instanced_arrays"),p="drawElementsInstancedANGLE",m===null){console.error("THREE.WebGLIndexedBufferRenderer: using THREE.InstancedBufferGeometry but hardware does not support extension ANGLE_instanced_arrays.");return}m[p](r,g,a,f*c,x),t.update(g,r,x)}function d(f,g,x){if(x===0)return;let m=e.get("WEBGL_multi_draw");if(m===null)for(let p=0;p<x;p++)this.render(f[p]/c,g[p]);else{m.multiDrawElementsWEBGL(r,g,0,a,f,0,x);let p=0;for(let y=0;y<x;y++)p+=g[y];t.update(p,r,1)}}this.setMode=o,this.setIndex=l,this.render=h,this.renderInstances=u,this.renderMultiDraw=d}function Dx(i){let e={geometries:0,textures:0},t={frame:0,calls:0,triangles:0,points:0,lines:0};function n(r,o,a){switch(t.calls++,o){case i.TRIANGLES:t.triangles+=a*(r/3);break;case i.LINES:t.lines+=a*(r/2);break;case i.LINE_STRIP:t.lines+=a*(r-1);break;case i.LINE_LOOP:t.lines+=a*r;break;case i.POINTS:t.points+=a*r;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",o);break}}function s(){t.calls=0,t.triangles=0,t.points=0,t.lines=0}return{memory:e,render:t,programs:null,autoReset:!0,reset:s,update:n}}function Nx(i,e){return i[0]-e[0]}function Ux(i,e){return Math.abs(e[1])-Math.abs(i[1])}function Ox(i,e,t){let n={},s=new Float32Array(8),r=new WeakMap,o=new pt,a=[];for(let l=0;l<8;l++)a[l]=[l,0];function c(l,h,u){let d=l.morphTargetInfluences;if(e.isWebGL2===!0){let f=h.morphAttributes.position||h.morphAttributes.normal||h.morphAttributes.color,g=f!==void 0?f.length:0,x=r.get(h);if(x===void 0||x.count!==g){let z=function(){j.dispose(),r.delete(h),h.removeEventListener("dispose",z)};x!==void 0&&x.texture.dispose();let y=h.morphAttributes.position!==void 0,_=h.morphAttributes.normal!==void 0,b=h.morphAttributes.color!==void 0,C=h.morphAttributes.position||[],A=h.morphAttributes.normal||[],R=h.morphAttributes.color||[],O=0;y===!0&&(O=1),_===!0&&(O=2),b===!0&&(O=3);let v=h.attributes.position.count*O,S=1;v>e.maxTextureSize&&(S=Math.ceil(v/e.maxTextureSize),v=e.maxTextureSize);let F=new Float32Array(v*S*4*g),j=new $o(F,v,S,g);j.type=ai,j.needsUpdate=!0;let ee=O*4;for(let B=0;B<g;B++){let Q=C[B],Z=A[B],K=R[B],$=v*S*4*B;for(let te=0;te<Q.count;te++){let he=te*ee;y===!0&&(o.fromBufferAttribute(Q,te),F[$+he+0]=o.x,F[$+he+1]=o.y,F[$+he+2]=o.z,F[$+he+3]=0),_===!0&&(o.fromBufferAttribute(Z,te),F[$+he+4]=o.x,F[$+he+5]=o.y,F[$+he+6]=o.z,F[$+he+7]=0),b===!0&&(o.fromBufferAttribute(K,te),F[$+he+8]=o.x,F[$+he+9]=o.y,F[$+he+10]=o.z,F[$+he+11]=K.itemSize===4?o.w:1)}}x={count:g,texture:j,size:new He(v,S)},r.set(h,x),h.addEventListener("dispose",z)}let m=0;for(let y=0;y<d.length;y++)m+=d[y];let p=h.morphTargetsRelative?1:1-m;u.getUniforms().setValue(i,"morphTargetBaseInfluence",p),u.getUniforms().setValue(i,"morphTargetInfluences",d),u.getUniforms().setValue(i,"morphTargetsTexture",x.texture,t),u.getUniforms().setValue(i,"morphTargetsTextureSize",x.size)}else{let f=d===void 0?0:d.length,g=n[h.id];if(g===void 0||g.length!==f){g=[];for(let _=0;_<f;_++)g[_]=[_,0];n[h.id]=g}for(let _=0;_<f;_++){let b=g[_];b[0]=_,b[1]=d[_]}g.sort(Ux);for(let _=0;_<8;_++)_<f&&g[_][1]?(a[_][0]=g[_][0],a[_][1]=g[_][1]):(a[_][0]=Number.MAX_SAFE_INTEGER,a[_][1]=0);a.sort(Nx);let x=h.morphAttributes.position,m=h.morphAttributes.normal,p=0;for(let _=0;_<8;_++){let b=a[_],C=b[0],A=b[1];C!==Number.MAX_SAFE_INTEGER&&A?(x&&h.getAttribute("morphTarget"+_)!==x[C]&&h.setAttribute("morphTarget"+_,x[C]),m&&h.getAttribute("morphNormal"+_)!==m[C]&&h.setAttribute("morphNormal"+_,m[C]),s[_]=A,p+=A):(x&&h.hasAttribute("morphTarget"+_)===!0&&h.deleteAttribute("morphTarget"+_),m&&h.hasAttribute("morphNormal"+_)===!0&&h.deleteAttribute("morphNormal"+_),s[_]=0)}let y=h.morphTargetsRelative?1:1-p;u.getUniforms().setValue(i,"morphTargetBaseInfluence",y),u.getUniforms().setValue(i,"morphTargetInfluences",s)}}return{update:c}}function Fx(i,e,t,n){let s=new WeakMap;function r(c){let l=n.render.frame,h=c.geometry,u=e.get(c,h);if(s.get(u)!==l&&(e.update(u),s.set(u,l)),c.isInstancedMesh&&(c.hasEventListener("dispose",a)===!1&&c.addEventListener("dispose",a),s.get(c)!==l&&(t.update(c.instanceMatrix,i.ARRAY_BUFFER),c.instanceColor!==null&&t.update(c.instanceColor,i.ARRAY_BUFFER),s.set(c,l))),c.isSkinnedMesh){let d=c.skeleton;s.get(d)!==l&&(d.update(),s.set(d,l))}return u}function o(){s=new WeakMap}function a(c){let l=c.target;l.removeEventListener("dispose",a),t.remove(l.instanceMatrix),l.instanceColor!==null&&t.remove(l.instanceColor)}return{update:r,dispose:o}}var ra=class extends on{constructor(e,t,n,s,r,o,a,c,l,h){if(h=h!==void 0?h:Ji,h!==Ji&&h!==Ys)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");n===void 0&&h===Ji&&(n=Ei),n===void 0&&h===Ys&&(n=$i),super(null,s,r,o,a,c,h,n,l),this.isDepthTexture=!0,this.image={width:e,height:t},this.magFilter=a!==void 0?a:Vt,this.minFilter=c!==void 0?c:Vt,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.compareFunction=e.compareFunction,this}toJSON(e){let t=super.toJSON(e);return this.compareFunction!==null&&(t.compareFunction=this.compareFunction),t}},Vd=new on,Wd=new ra(1,1);Wd.compareFunction=Fd;var Xd=new $o,qd=new jc,Yd=new ia,Yu=[],ju=[],Zu=new Float32Array(16),Ku=new Float32Array(9),$u=new Float32Array(4);function cr(i,e,t){let n=i[0];if(n<=0||n>0)return i;let s=e*t,r=Yu[s];if(r===void 0&&(r=new Float32Array(s),Yu[s]=r),e!==0){n.toArray(r,0);for(let o=1,a=0;o!==e;++o)a+=t,i[o].toArray(r,a)}return r}function qt(i,e){if(i.length!==e.length)return!1;for(let t=0,n=i.length;t<n;t++)if(i[t]!==e[t])return!1;return!0}function Yt(i,e){for(let t=0,n=e.length;t<n;t++)i[t]=e[t]}function Ra(i,e){let t=ju[e];t===void 0&&(t=new Int32Array(e),ju[e]=t);for(let n=0;n!==e;++n)t[n]=i.allocateTextureUnit();return t}function Bx(i,e){let t=this.cache;t[0]!==e&&(i.uniform1f(this.addr,e),t[0]=e)}function kx(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(i.uniform2f(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(qt(t,e))return;i.uniform2fv(this.addr,e),Yt(t,e)}}function Hx(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(i.uniform3f(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else if(e.r!==void 0)(t[0]!==e.r||t[1]!==e.g||t[2]!==e.b)&&(i.uniform3f(this.addr,e.r,e.g,e.b),t[0]=e.r,t[1]=e.g,t[2]=e.b);else{if(qt(t,e))return;i.uniform3fv(this.addr,e),Yt(t,e)}}function Gx(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(i.uniform4f(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(qt(t,e))return;i.uniform4fv(this.addr,e),Yt(t,e)}}function Vx(i,e){let t=this.cache,n=e.elements;if(n===void 0){if(qt(t,e))return;i.uniformMatrix2fv(this.addr,!1,e),Yt(t,e)}else{if(qt(t,n))return;$u.set(n),i.uniformMatrix2fv(this.addr,!1,$u),Yt(t,n)}}function Wx(i,e){let t=this.cache,n=e.elements;if(n===void 0){if(qt(t,e))return;i.uniformMatrix3fv(this.addr,!1,e),Yt(t,e)}else{if(qt(t,n))return;Ku.set(n),i.uniformMatrix3fv(this.addr,!1,Ku),Yt(t,n)}}function Xx(i,e){let t=this.cache,n=e.elements;if(n===void 0){if(qt(t,e))return;i.uniformMatrix4fv(this.addr,!1,e),Yt(t,e)}else{if(qt(t,n))return;Zu.set(n),i.uniformMatrix4fv(this.addr,!1,Zu),Yt(t,n)}}function qx(i,e){let t=this.cache;t[0]!==e&&(i.uniform1i(this.addr,e),t[0]=e)}function Yx(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(i.uniform2i(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(qt(t,e))return;i.uniform2iv(this.addr,e),Yt(t,e)}}function jx(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(i.uniform3i(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(qt(t,e))return;i.uniform3iv(this.addr,e),Yt(t,e)}}function Zx(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(i.uniform4i(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(qt(t,e))return;i.uniform4iv(this.addr,e),Yt(t,e)}}function Kx(i,e){let t=this.cache;t[0]!==e&&(i.uniform1ui(this.addr,e),t[0]=e)}function $x(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(i.uniform2ui(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(qt(t,e))return;i.uniform2uiv(this.addr,e),Yt(t,e)}}function Jx(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(i.uniform3ui(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(qt(t,e))return;i.uniform3uiv(this.addr,e),Yt(t,e)}}function Qx(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(i.uniform4ui(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(qt(t,e))return;i.uniform4uiv(this.addr,e),Yt(t,e)}}function e_(i,e,t){let n=this.cache,s=t.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s);let r=this.type===i.SAMPLER_2D_SHADOW?Wd:Vd;t.setTexture2D(e||r,s)}function t_(i,e,t){let n=this.cache,s=t.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),t.setTexture3D(e||qd,s)}function n_(i,e,t){let n=this.cache,s=t.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),t.setTextureCube(e||Yd,s)}function i_(i,e,t){let n=this.cache,s=t.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),t.setTexture2DArray(e||Xd,s)}function s_(i){switch(i){case 5126:return Bx;case 35664:return kx;case 35665:return Hx;case 35666:return Gx;case 35674:return Vx;case 35675:return Wx;case 35676:return Xx;case 5124:case 35670:return qx;case 35667:case 35671:return Yx;case 35668:case 35672:return jx;case 35669:case 35673:return Zx;case 5125:return Kx;case 36294:return $x;case 36295:return Jx;case 36296:return Qx;case 35678:case 36198:case 36298:case 36306:case 35682:return e_;case 35679:case 36299:case 36307:return t_;case 35680:case 36300:case 36308:case 36293:return n_;case 36289:case 36303:case 36311:case 36292:return i_}}function r_(i,e){i.uniform1fv(this.addr,e)}function o_(i,e){let t=cr(e,this.size,2);i.uniform2fv(this.addr,t)}function a_(i,e){let t=cr(e,this.size,3);i.uniform3fv(this.addr,t)}function c_(i,e){let t=cr(e,this.size,4);i.uniform4fv(this.addr,t)}function l_(i,e){let t=cr(e,this.size,4);i.uniformMatrix2fv(this.addr,!1,t)}function h_(i,e){let t=cr(e,this.size,9);i.uniformMatrix3fv(this.addr,!1,t)}function u_(i,e){let t=cr(e,this.size,16);i.uniformMatrix4fv(this.addr,!1,t)}function d_(i,e){i.uniform1iv(this.addr,e)}function f_(i,e){i.uniform2iv(this.addr,e)}function p_(i,e){i.uniform3iv(this.addr,e)}function m_(i,e){i.uniform4iv(this.addr,e)}function g_(i,e){i.uniform1uiv(this.addr,e)}function x_(i,e){i.uniform2uiv(this.addr,e)}function __(i,e){i.uniform3uiv(this.addr,e)}function y_(i,e){i.uniform4uiv(this.addr,e)}function v_(i,e,t){let n=this.cache,s=e.length,r=Ra(t,s);qt(n,r)||(i.uniform1iv(this.addr,r),Yt(n,r));for(let o=0;o!==s;++o)t.setTexture2D(e[o]||Vd,r[o])}function M_(i,e,t){let n=this.cache,s=e.length,r=Ra(t,s);qt(n,r)||(i.uniform1iv(this.addr,r),Yt(n,r));for(let o=0;o!==s;++o)t.setTexture3D(e[o]||qd,r[o])}function b_(i,e,t){let n=this.cache,s=e.length,r=Ra(t,s);qt(n,r)||(i.uniform1iv(this.addr,r),Yt(n,r));for(let o=0;o!==s;++o)t.setTextureCube(e[o]||Yd,r[o])}function w_(i,e,t){let n=this.cache,s=e.length,r=Ra(t,s);qt(n,r)||(i.uniform1iv(this.addr,r),Yt(n,r));for(let o=0;o!==s;++o)t.setTexture2DArray(e[o]||Xd,r[o])}function S_(i){switch(i){case 5126:return r_;case 35664:return o_;case 35665:return a_;case 35666:return c_;case 35674:return l_;case 35675:return h_;case 35676:return u_;case 5124:case 35670:return d_;case 35667:case 35671:return f_;case 35668:case 35672:return p_;case 35669:case 35673:return m_;case 5125:return g_;case 36294:return x_;case 36295:return __;case 36296:return y_;case 35678:case 36198:case 36298:case 36306:case 35682:return v_;case 35679:case 36299:case 36307:return M_;case 35680:case 36300:case 36308:case 36293:return b_;case 36289:case 36303:case 36311:case 36292:return w_}}var $c=class{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.type=t.type,this.setValue=s_(t.type)}},Jc=class{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.type=t.type,this.size=t.size,this.setValue=S_(t.type)}},Qc=class{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,t,n){let s=this.seq;for(let r=0,o=s.length;r!==o;++r){let a=s[r];a.setValue(e,t[a.id],n)}}},Dc=/(\w+)(\])?(\[|\.)?/g;function Ju(i,e){i.seq.push(e),i.map[e.id]=e}function E_(i,e,t){let n=i.name,s=n.length;for(Dc.lastIndex=0;;){let r=Dc.exec(n),o=Dc.lastIndex,a=r[1],c=r[2]==="]",l=r[3];if(c&&(a=a|0),l===void 0||l==="["&&o+2===s){Ju(t,l===void 0?new $c(a,i,e):new Jc(a,i,e));break}else{let u=t.map[a];u===void 0&&(u=new Qc(a),Ju(t,u)),t=u}}}var Ws=class{constructor(e,t){this.seq=[],this.map={};let n=e.getProgramParameter(t,e.ACTIVE_UNIFORMS);for(let s=0;s<n;++s){let r=e.getActiveUniform(t,s),o=e.getUniformLocation(t,r.name);E_(r,o,this)}}setValue(e,t,n,s){let r=this.map[t];r!==void 0&&r.setValue(e,n,s)}setOptional(e,t,n){let s=t[n];s!==void 0&&this.setValue(e,n,s)}static upload(e,t,n,s){for(let r=0,o=t.length;r!==o;++r){let a=t[r],c=n[a.id];c.needsUpdate!==!1&&a.setValue(e,c.value,s)}}static seqWithValue(e,t){let n=[];for(let s=0,r=e.length;s!==r;++s){let o=e[s];o.id in t&&n.push(o)}return n}};function Qu(i,e,t){let n=i.createShader(e);return i.shaderSource(n,t),i.compileShader(n),n}var T_=37297,A_=0;function R_(i,e){let t=i.split(`
`),n=[],s=Math.max(e-6,0),r=Math.min(e+6,t.length);for(let o=s;o<r;o++){let a=o+1;n.push(`${a===e?">":" "} ${a}: ${t[o]}`)}return n.join(`
`)}function C_(i){let e=lt.getPrimaries(lt.workingColorSpace),t=lt.getPrimaries(i),n;switch(e===t?n="":e===qo&&t===Xo?n="LinearDisplayP3ToLinearSRGB":e===Xo&&t===qo&&(n="LinearSRGBToLinearDisplayP3"),i){case Xt:case Aa:return[n,"LinearTransferOETF"];case Tt:case Al:return[n,"sRGBTransferOETF"];default:return console.warn("THREE.WebGLProgram: Unsupported color space:",i),[n,"LinearTransferOETF"]}}function ed(i,e,t){let n=i.getShaderParameter(e,i.COMPILE_STATUS),s=i.getShaderInfoLog(e).trim();if(n&&s==="")return"";let r=/ERROR: 0:(\d+)/.exec(s);if(r){let o=parseInt(r[1]);return t.toUpperCase()+`

`+s+`

`+R_(i.getShaderSource(e),o)}else return s}function P_(i,e){let t=C_(e);return`vec4 ${i}( vec4 value ) { return ${t[0]}( ${t[1]}( value ) ); }`}function L_(i,e){let t;switch(e){case Dp:t="Linear";break;case Np:t="Reinhard";break;case Up:t="OptimizedCineon";break;case Op:t="ACESFilmic";break;case Bp:t="AgX";break;case Fp:t="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",e),t="Linear"}return"vec3 "+i+"( vec3 color ) { return "+t+"ToneMapping( color ); }"}function I_(i){return[i.extensionDerivatives||i.envMapCubeUVHeight||i.bumpMap||i.normalMapTangentSpace||i.clearcoatNormalMap||i.flatShading||i.shaderID==="physical"?"#extension GL_OES_standard_derivatives : enable":"",(i.extensionFragDepth||i.logarithmicDepthBuffer)&&i.rendererExtensionFragDepth?"#extension GL_EXT_frag_depth : enable":"",i.extensionDrawBuffers&&i.rendererExtensionDrawBuffers?"#extension GL_EXT_draw_buffers : require":"",(i.extensionShaderTextureLOD||i.envMap||i.transmission)&&i.rendererExtensionShaderTextureLod?"#extension GL_EXT_shader_texture_lod : enable":""].filter(Hs).join(`
`)}function z_(i){return[i.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":""].filter(Hs).join(`
`)}function D_(i){let e=[];for(let t in i){let n=i[t];n!==!1&&e.push("#define "+t+" "+n)}return e.join(`
`)}function N_(i,e){let t={},n=i.getProgramParameter(e,i.ACTIVE_ATTRIBUTES);for(let s=0;s<n;s++){let r=i.getActiveAttrib(e,s),o=r.name,a=1;r.type===i.FLOAT_MAT2&&(a=2),r.type===i.FLOAT_MAT3&&(a=3),r.type===i.FLOAT_MAT4&&(a=4),t[o]={type:r.type,location:i.getAttribLocation(e,o),locationSize:a}}return t}function Hs(i){return i!==""}function td(i,e){let t=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return i.replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,t).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function nd(i,e){return i.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}var U_=/^[ \t]*#include +<([\w\d./]+)>/gm;function el(i){return i.replace(U_,F_)}var O_=new Map([["encodings_fragment","colorspace_fragment"],["encodings_pars_fragment","colorspace_pars_fragment"],["output_fragment","opaque_fragment"]]);function F_(i,e){let t=je[e];if(t===void 0){let n=O_.get(e);if(n!==void 0)t=je[n],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',e,n);else throw new Error("Can not resolve #include <"+e+">")}return el(t)}var B_=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function id(i){return i.replace(B_,k_)}function k_(i,e,t,n){let s="";for(let r=parseInt(e);r<parseInt(t);r++)s+=n.replace(/\[\s*i\s*\]/g,"[ "+r+" ]").replace(/UNROLLED_LOOP_INDEX/g,r);return s}function sd(i){let e="precision "+i.precision+` float;
precision `+i.precision+" int;";return i.precision==="highp"?e+=`
#define HIGH_PRECISION`:i.precision==="mediump"?e+=`
#define MEDIUM_PRECISION`:i.precision==="lowp"&&(e+=`
#define LOW_PRECISION`),e}function H_(i){let e="SHADOWMAP_TYPE_BASIC";return i.shadowMapType===Ma?e="SHADOWMAP_TYPE_PCF":i.shadowMapType===cp?e="SHADOWMAP_TYPE_PCF_SOFT":i.shadowMapType===ri&&(e="SHADOWMAP_TYPE_VSM"),e}function G_(i){let e="ENVMAP_TYPE_CUBE";if(i.envMap)switch(i.envMapMode){case Xs:case qs:e="ENVMAP_TYPE_CUBE";break;case wa:e="ENVMAP_TYPE_CUBE_UV";break}return e}function V_(i){let e="ENVMAP_MODE_REFLECTION";if(i.envMap)switch(i.envMapMode){case qs:e="ENVMAP_MODE_REFRACTION";break}return e}function W_(i){let e="ENVMAP_BLENDING_NONE";if(i.envMap)switch(i.combine){case ba:e="ENVMAP_BLENDING_MULTIPLY";break;case Ip:e="ENVMAP_BLENDING_MIX";break;case zp:e="ENVMAP_BLENDING_ADD";break}return e}function X_(i){let e=i.envMapCubeUVHeight;if(e===null)return null;let t=Math.log2(e)-2,n=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,t),7*16)),texelHeight:n,maxMip:t}}function q_(i,e,t,n){let s=i.getContext(),r=t.defines,o=t.vertexShader,a=t.fragmentShader,c=H_(t),l=G_(t),h=V_(t),u=W_(t),d=X_(t),f=t.isWebGL2?"":I_(t),g=z_(t),x=D_(r),m=s.createProgram(),p,y,_=t.glslVersion?"#version "+t.glslVersion+`
`:"";t.isRawShaderMaterial?(p=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,x].filter(Hs).join(`
`),p.length>0&&(p+=`
`),y=[f,"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,x].filter(Hs).join(`
`),y.length>0&&(y+=`
`)):(p=[sd(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,x,t.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",t.batching?"#define USE_BATCHING":"",t.instancing?"#define USE_INSTANCING":"",t.instancingColor?"#define USE_INSTANCING_COLOR":"",t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+h:"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.displacementMap?"#define USE_DISPLACEMENTMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.mapUv?"#define MAP_UV "+t.mapUv:"",t.alphaMapUv?"#define ALPHAMAP_UV "+t.alphaMapUv:"",t.lightMapUv?"#define LIGHTMAP_UV "+t.lightMapUv:"",t.aoMapUv?"#define AOMAP_UV "+t.aoMapUv:"",t.emissiveMapUv?"#define EMISSIVEMAP_UV "+t.emissiveMapUv:"",t.bumpMapUv?"#define BUMPMAP_UV "+t.bumpMapUv:"",t.normalMapUv?"#define NORMALMAP_UV "+t.normalMapUv:"",t.displacementMapUv?"#define DISPLACEMENTMAP_UV "+t.displacementMapUv:"",t.metalnessMapUv?"#define METALNESSMAP_UV "+t.metalnessMapUv:"",t.roughnessMapUv?"#define ROUGHNESSMAP_UV "+t.roughnessMapUv:"",t.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+t.anisotropyMapUv:"",t.clearcoatMapUv?"#define CLEARCOATMAP_UV "+t.clearcoatMapUv:"",t.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+t.clearcoatNormalMapUv:"",t.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+t.clearcoatRoughnessMapUv:"",t.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+t.iridescenceMapUv:"",t.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+t.iridescenceThicknessMapUv:"",t.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+t.sheenColorMapUv:"",t.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+t.sheenRoughnessMapUv:"",t.specularMapUv?"#define SPECULARMAP_UV "+t.specularMapUv:"",t.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+t.specularColorMapUv:"",t.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+t.specularIntensityMapUv:"",t.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+t.transmissionMapUv:"",t.thicknessMapUv?"#define THICKNESSMAP_UV "+t.thicknessMapUv:"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.flatShading?"#define FLAT_SHADED":"",t.skinning?"#define USE_SKINNING":"",t.morphTargets?"#define USE_MORPHTARGETS":"",t.morphNormals&&t.flatShading===!1?"#define USE_MORPHNORMALS":"",t.morphColors&&t.isWebGL2?"#define USE_MORPHCOLORS":"",t.morphTargetsCount>0&&t.isWebGL2?"#define MORPHTARGETS_TEXTURE":"",t.morphTargetsCount>0&&t.isWebGL2?"#define MORPHTARGETS_TEXTURE_STRIDE "+t.morphTextureStride:"",t.morphTargetsCount>0&&t.isWebGL2?"#define MORPHTARGETS_COUNT "+t.morphTargetsCount:"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+c:"",t.sizeAttenuation?"#define USE_SIZEATTENUATION":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.useLegacyLights?"#define LEGACY_LIGHTS":"",t.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",t.logarithmicDepthBuffer&&t.rendererExtensionFragDepth?"#define USE_LOGDEPTHBUF_EXT":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#if ( defined( USE_MORPHTARGETS ) && ! defined( MORPHTARGETS_TEXTURE ) )","	attribute vec3 morphTarget0;","	attribute vec3 morphTarget1;","	attribute vec3 morphTarget2;","	attribute vec3 morphTarget3;","	#ifdef USE_MORPHNORMALS","		attribute vec3 morphNormal0;","		attribute vec3 morphNormal1;","		attribute vec3 morphNormal2;","		attribute vec3 morphNormal3;","	#else","		attribute vec3 morphTarget4;","		attribute vec3 morphTarget5;","		attribute vec3 morphTarget6;","		attribute vec3 morphTarget7;","	#endif","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(Hs).join(`
`),y=[f,sd(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,x,t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.matcap?"#define USE_MATCAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+l:"",t.envMap?"#define "+h:"",t.envMap?"#define "+u:"",d?"#define CUBEUV_TEXEL_WIDTH "+d.texelWidth:"",d?"#define CUBEUV_TEXEL_HEIGHT "+d.texelHeight:"",d?"#define CUBEUV_MAX_MIP "+d.maxMip+".0":"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoat?"#define USE_CLEARCOAT":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.iridescence?"#define USE_IRIDESCENCE":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaTest?"#define USE_ALPHATEST":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.sheen?"#define USE_SHEEN":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors||t.instancingColor?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.gradientMap?"#define USE_GRADIENTMAP":"",t.flatShading?"#define FLAT_SHADED":"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+c:"",t.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.useLegacyLights?"#define LEGACY_LIGHTS":"",t.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",t.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",t.logarithmicDepthBuffer&&t.rendererExtensionFragDepth?"#define USE_LOGDEPTHBUF_EXT":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",t.toneMapping!==Ri?"#define TONE_MAPPING":"",t.toneMapping!==Ri?je.tonemapping_pars_fragment:"",t.toneMapping!==Ri?L_("toneMapping",t.toneMapping):"",t.dithering?"#define DITHERING":"",t.opaque?"#define OPAQUE":"",je.colorspace_pars_fragment,P_("linearToOutputTexel",t.outputColorSpace),t.useDepthPacking?"#define DEPTH_PACKING "+t.depthPacking:"",`
`].filter(Hs).join(`
`)),o=el(o),o=td(o,t),o=nd(o,t),a=el(a),a=td(a,t),a=nd(a,t),o=id(o),a=id(a),t.isWebGL2&&t.isRawShaderMaterial!==!0&&(_=`#version 300 es
`,p=[g,"precision mediump sampler2DArray;","#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+p,y=["precision mediump sampler2DArray;","#define varying in",t.glslVersion===wu?"":"layout(location = 0) out highp vec4 pc_fragColor;",t.glslVersion===wu?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+y);let b=_+p+o,C=_+y+a,A=Qu(s,s.VERTEX_SHADER,b),R=Qu(s,s.FRAGMENT_SHADER,C);s.attachShader(m,A),s.attachShader(m,R),t.index0AttributeName!==void 0?s.bindAttribLocation(m,0,t.index0AttributeName):t.morphTargets===!0&&s.bindAttribLocation(m,0,"position"),s.linkProgram(m);function O(j){if(i.debug.checkShaderErrors){let ee=s.getProgramInfoLog(m).trim(),z=s.getShaderInfoLog(A).trim(),B=s.getShaderInfoLog(R).trim(),Q=!0,Z=!0;if(s.getProgramParameter(m,s.LINK_STATUS)===!1)if(Q=!1,typeof i.debug.onShaderError=="function")i.debug.onShaderError(s,m,A,R);else{let K=ed(s,A,"vertex"),$=ed(s,R,"fragment");console.error("THREE.WebGLProgram: Shader Error "+s.getError()+" - VALIDATE_STATUS "+s.getProgramParameter(m,s.VALIDATE_STATUS)+`

Program Info Log: `+ee+`
`+K+`
`+$)}else ee!==""?console.warn("THREE.WebGLProgram: Program Info Log:",ee):(z===""||B==="")&&(Z=!1);Z&&(j.diagnostics={runnable:Q,programLog:ee,vertexShader:{log:z,prefix:p},fragmentShader:{log:B,prefix:y}})}s.deleteShader(A),s.deleteShader(R),v=new Ws(s,m),S=N_(s,m)}let v;this.getUniforms=function(){return v===void 0&&O(this),v};let S;this.getAttributes=function(){return S===void 0&&O(this),S};let F=t.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return F===!1&&(F=s.getProgramParameter(m,T_)),F},this.destroy=function(){n.releaseStatesOfProgram(this),s.deleteProgram(m),this.program=void 0},this.type=t.shaderType,this.name=t.shaderName,this.id=A_++,this.cacheKey=e,this.usedTimes=1,this.program=m,this.vertexShader=A,this.fragmentShader=R,this}var Y_=0,tl=class{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e){let t=e.vertexShader,n=e.fragmentShader,s=this._getShaderStage(t),r=this._getShaderStage(n),o=this._getShaderCacheForMaterial(e);return o.has(s)===!1&&(o.add(s),s.usedTimes++),o.has(r)===!1&&(o.add(r),r.usedTimes++),this}remove(e){let t=this.materialCache.get(e);for(let n of t)n.usedTimes--,n.usedTimes===0&&this.shaderCache.delete(n.code);return this.materialCache.delete(e),this}getVertexShaderID(e){return this._getShaderStage(e.vertexShader).id}getFragmentShaderID(e){return this._getShaderStage(e.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){let t=this.materialCache,n=t.get(e);return n===void 0&&(n=new Set,t.set(e,n)),n}_getShaderStage(e){let t=this.shaderCache,n=t.get(e);return n===void 0&&(n=new nl(e),t.set(e,n)),n}},nl=class{constructor(e){this.id=Y_++,this.code=e,this.usedTimes=0}};function j_(i,e,t,n,s,r,o){let a=new Qo,c=new tl,l=[],h=s.isWebGL2,u=s.logarithmicDepthBuffer,d=s.vertexTextures,f=s.precision,g={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function x(v){return v===0?"uv":`uv${v}`}function m(v,S,F,j,ee){let z=j.fog,B=ee.geometry,Q=v.isMeshStandardMaterial?j.environment:null,Z=(v.isMeshStandardMaterial?t:e).get(v.envMap||Q),K=Z&&Z.mapping===wa?Z.image.height:null,$=g[v.type];v.precision!==null&&(f=s.getMaxPrecision(v.precision),f!==v.precision&&console.warn("THREE.WebGLProgram.getParameters:",v.precision,"not supported, using",f,"instead."));let te=B.morphAttributes.position||B.morphAttributes.normal||B.morphAttributes.color,he=te!==void 0?te.length:0,pe=0;B.morphAttributes.position!==void 0&&(pe=1),B.morphAttributes.normal!==void 0&&(pe=2),B.morphAttributes.color!==void 0&&(pe=3);let Y,ne,me,Ce;if($){let an=Wn[$];Y=an.vertexShader,ne=an.fragmentShader}else Y=v.vertexShader,ne=v.fragmentShader,c.update(v),me=c.getVertexShaderID(v),Ce=c.getFragmentShaderID(v);let we=i.getRenderTarget(),ze=ee.isInstancedMesh===!0,Ve=ee.isBatchedMesh===!0,De=!!v.map,rt=!!v.matcap,k=!!Z,$t=!!v.aoMap,Ie=!!v.lightMap,Oe=!!v.bumpMap,Ee=!!v.normalMap,vt=!!v.displacementMap,We=!!v.emissiveMap,E=!!v.metalnessMap,M=!!v.roughnessMap,H=v.anisotropy>0,ae=v.clearcoat>0,oe=v.iridescence>0,le=v.sheen>0,Re=v.transmission>0,xe=H&&!!v.anisotropyMap,be=ae&&!!v.clearcoatMap,Pe=ae&&!!v.clearcoatNormalMap,Be=ae&&!!v.clearcoatRoughnessMap,se=oe&&!!v.iridescenceMap,at=oe&&!!v.iridescenceThicknessMap,D=le&&!!v.sheenColorMap,U=le&&!!v.sheenRoughnessMap,G=!!v.specularMap,W=!!v.specularColorMap,ue=!!v.specularIntensityMap,re=Re&&!!v.transmissionMap,_e=Re&&!!v.thicknessMap,ye=!!v.gradientMap,J=!!v.alphaMap,P=v.alphaTest>0,ie=!!v.alphaHash,ce=!!v.extensions,Se=!!B.attributes.uv1,Te=!!B.attributes.uv2,ct=!!B.attributes.uv3,_t=Ri;return v.toneMapped&&(we===null||we.isXRRenderTarget===!0)&&(_t=i.toneMapping),{isWebGL2:h,shaderID:$,shaderType:v.type,shaderName:v.name,vertexShader:Y,fragmentShader:ne,defines:v.defines,customVertexShaderID:me,customFragmentShaderID:Ce,isRawShaderMaterial:v.isRawShaderMaterial===!0,glslVersion:v.glslVersion,precision:f,batching:Ve,instancing:ze,instancingColor:ze&&ee.instanceColor!==null,supportsVertexTextures:d,outputColorSpace:we===null?i.outputColorSpace:we.isXRRenderTarget===!0?we.texture.colorSpace:Xt,map:De,matcap:rt,envMap:k,envMapMode:k&&Z.mapping,envMapCubeUVHeight:K,aoMap:$t,lightMap:Ie,bumpMap:Oe,normalMap:Ee,displacementMap:d&&vt,emissiveMap:We,normalMapObjectSpace:Ee&&v.normalMapType===Qp,normalMapTangentSpace:Ee&&v.normalMapType===Ta,metalnessMap:E,roughnessMap:M,anisotropy:H,anisotropyMap:xe,clearcoat:ae,clearcoatMap:be,clearcoatNormalMap:Pe,clearcoatRoughnessMap:Be,iridescence:oe,iridescenceMap:se,iridescenceThicknessMap:at,sheen:le,sheenColorMap:D,sheenRoughnessMap:U,specularMap:G,specularColorMap:W,specularIntensityMap:ue,transmission:Re,transmissionMap:re,thicknessMap:_e,gradientMap:ye,opaque:v.transparent===!1&&v.blending===Gs,alphaMap:J,alphaTest:P,alphaHash:ie,combine:v.combine,mapUv:De&&x(v.map.channel),aoMapUv:$t&&x(v.aoMap.channel),lightMapUv:Ie&&x(v.lightMap.channel),bumpMapUv:Oe&&x(v.bumpMap.channel),normalMapUv:Ee&&x(v.normalMap.channel),displacementMapUv:vt&&x(v.displacementMap.channel),emissiveMapUv:We&&x(v.emissiveMap.channel),metalnessMapUv:E&&x(v.metalnessMap.channel),roughnessMapUv:M&&x(v.roughnessMap.channel),anisotropyMapUv:xe&&x(v.anisotropyMap.channel),clearcoatMapUv:be&&x(v.clearcoatMap.channel),clearcoatNormalMapUv:Pe&&x(v.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:Be&&x(v.clearcoatRoughnessMap.channel),iridescenceMapUv:se&&x(v.iridescenceMap.channel),iridescenceThicknessMapUv:at&&x(v.iridescenceThicknessMap.channel),sheenColorMapUv:D&&x(v.sheenColorMap.channel),sheenRoughnessMapUv:U&&x(v.sheenRoughnessMap.channel),specularMapUv:G&&x(v.specularMap.channel),specularColorMapUv:W&&x(v.specularColorMap.channel),specularIntensityMapUv:ue&&x(v.specularIntensityMap.channel),transmissionMapUv:re&&x(v.transmissionMap.channel),thicknessMapUv:_e&&x(v.thicknessMap.channel),alphaMapUv:J&&x(v.alphaMap.channel),vertexTangents:!!B.attributes.tangent&&(Ee||H),vertexColors:v.vertexColors,vertexAlphas:v.vertexColors===!0&&!!B.attributes.color&&B.attributes.color.itemSize===4,vertexUv1s:Se,vertexUv2s:Te,vertexUv3s:ct,pointsUvs:ee.isPoints===!0&&!!B.attributes.uv&&(De||J),fog:!!z,useFog:v.fog===!0,fogExp2:z&&z.isFogExp2,flatShading:v.flatShading===!0,sizeAttenuation:v.sizeAttenuation===!0,logarithmicDepthBuffer:u,skinning:ee.isSkinnedMesh===!0,morphTargets:B.morphAttributes.position!==void 0,morphNormals:B.morphAttributes.normal!==void 0,morphColors:B.morphAttributes.color!==void 0,morphTargetsCount:he,morphTextureStride:pe,numDirLights:S.directional.length,numPointLights:S.point.length,numSpotLights:S.spot.length,numSpotLightMaps:S.spotLightMap.length,numRectAreaLights:S.rectArea.length,numHemiLights:S.hemi.length,numDirLightShadows:S.directionalShadowMap.length,numPointLightShadows:S.pointShadowMap.length,numSpotLightShadows:S.spotShadowMap.length,numSpotLightShadowsWithMaps:S.numSpotLightShadowsWithMaps,numLightProbes:S.numLightProbes,numClippingPlanes:o.numPlanes,numClipIntersection:o.numIntersection,dithering:v.dithering,shadowMapEnabled:i.shadowMap.enabled&&F.length>0,shadowMapType:i.shadowMap.type,toneMapping:_t,useLegacyLights:i._useLegacyLights,decodeVideoTexture:De&&v.map.isVideoTexture===!0&&lt.getTransfer(v.map.colorSpace)===Mt,premultipliedAlpha:v.premultipliedAlpha,doubleSided:v.side===dn,flipSided:v.side===gn,useDepthPacking:v.depthPacking>=0,depthPacking:v.depthPacking||0,index0AttributeName:v.index0AttributeName,extensionDerivatives:ce&&v.extensions.derivatives===!0,extensionFragDepth:ce&&v.extensions.fragDepth===!0,extensionDrawBuffers:ce&&v.extensions.drawBuffers===!0,extensionShaderTextureLOD:ce&&v.extensions.shaderTextureLOD===!0,extensionClipCullDistance:ce&&v.extensions.clipCullDistance&&n.has("WEBGL_clip_cull_distance"),rendererExtensionFragDepth:h||n.has("EXT_frag_depth"),rendererExtensionDrawBuffers:h||n.has("WEBGL_draw_buffers"),rendererExtensionShaderTextureLod:h||n.has("EXT_shader_texture_lod"),rendererExtensionParallelShaderCompile:n.has("KHR_parallel_shader_compile"),customProgramCacheKey:v.customProgramCacheKey()}}function p(v){let S=[];if(v.shaderID?S.push(v.shaderID):(S.push(v.customVertexShaderID),S.push(v.customFragmentShaderID)),v.defines!==void 0)for(let F in v.defines)S.push(F),S.push(v.defines[F]);return v.isRawShaderMaterial===!1&&(y(S,v),_(S,v),S.push(i.outputColorSpace)),S.push(v.customProgramCacheKey),S.join()}function y(v,S){v.push(S.precision),v.push(S.outputColorSpace),v.push(S.envMapMode),v.push(S.envMapCubeUVHeight),v.push(S.mapUv),v.push(S.alphaMapUv),v.push(S.lightMapUv),v.push(S.aoMapUv),v.push(S.bumpMapUv),v.push(S.normalMapUv),v.push(S.displacementMapUv),v.push(S.emissiveMapUv),v.push(S.metalnessMapUv),v.push(S.roughnessMapUv),v.push(S.anisotropyMapUv),v.push(S.clearcoatMapUv),v.push(S.clearcoatNormalMapUv),v.push(S.clearcoatRoughnessMapUv),v.push(S.iridescenceMapUv),v.push(S.iridescenceThicknessMapUv),v.push(S.sheenColorMapUv),v.push(S.sheenRoughnessMapUv),v.push(S.specularMapUv),v.push(S.specularColorMapUv),v.push(S.specularIntensityMapUv),v.push(S.transmissionMapUv),v.push(S.thicknessMapUv),v.push(S.combine),v.push(S.fogExp2),v.push(S.sizeAttenuation),v.push(S.morphTargetsCount),v.push(S.morphAttributeCount),v.push(S.numDirLights),v.push(S.numPointLights),v.push(S.numSpotLights),v.push(S.numSpotLightMaps),v.push(S.numHemiLights),v.push(S.numRectAreaLights),v.push(S.numDirLightShadows),v.push(S.numPointLightShadows),v.push(S.numSpotLightShadows),v.push(S.numSpotLightShadowsWithMaps),v.push(S.numLightProbes),v.push(S.shadowMapType),v.push(S.toneMapping),v.push(S.numClippingPlanes),v.push(S.numClipIntersection),v.push(S.depthPacking)}function _(v,S){a.disableAll(),S.isWebGL2&&a.enable(0),S.supportsVertexTextures&&a.enable(1),S.instancing&&a.enable(2),S.instancingColor&&a.enable(3),S.matcap&&a.enable(4),S.envMap&&a.enable(5),S.normalMapObjectSpace&&a.enable(6),S.normalMapTangentSpace&&a.enable(7),S.clearcoat&&a.enable(8),S.iridescence&&a.enable(9),S.alphaTest&&a.enable(10),S.vertexColors&&a.enable(11),S.vertexAlphas&&a.enable(12),S.vertexUv1s&&a.enable(13),S.vertexUv2s&&a.enable(14),S.vertexUv3s&&a.enable(15),S.vertexTangents&&a.enable(16),S.anisotropy&&a.enable(17),S.alphaHash&&a.enable(18),S.batching&&a.enable(19),v.push(a.mask),a.disableAll(),S.fog&&a.enable(0),S.useFog&&a.enable(1),S.flatShading&&a.enable(2),S.logarithmicDepthBuffer&&a.enable(3),S.skinning&&a.enable(4),S.morphTargets&&a.enable(5),S.morphNormals&&a.enable(6),S.morphColors&&a.enable(7),S.premultipliedAlpha&&a.enable(8),S.shadowMapEnabled&&a.enable(9),S.useLegacyLights&&a.enable(10),S.doubleSided&&a.enable(11),S.flipSided&&a.enable(12),S.useDepthPacking&&a.enable(13),S.dithering&&a.enable(14),S.transmission&&a.enable(15),S.sheen&&a.enable(16),S.opaque&&a.enable(17),S.pointsUvs&&a.enable(18),S.decodeVideoTexture&&a.enable(19),v.push(a.mask)}function b(v){let S=g[v.type],F;if(S){let j=Wn[S];F=Om.clone(j.uniforms)}else F=v.uniforms;return F}function C(v,S){let F;for(let j=0,ee=l.length;j<ee;j++){let z=l[j];if(z.cacheKey===S){F=z,++F.usedTimes;break}}return F===void 0&&(F=new q_(i,S,v,r),l.push(F)),F}function A(v){if(--v.usedTimes===0){let S=l.indexOf(v);l[S]=l[l.length-1],l.pop(),v.destroy()}}function R(v){c.remove(v)}function O(){c.dispose()}return{getParameters:m,getProgramCacheKey:p,getUniforms:b,acquireProgram:C,releaseProgram:A,releaseShaderCache:R,programs:l,dispose:O}}function Z_(){let i=new WeakMap;function e(r){let o=i.get(r);return o===void 0&&(o={},i.set(r,o)),o}function t(r){i.delete(r)}function n(r,o,a){i.get(r)[o]=a}function s(){i=new WeakMap}return{get:e,remove:t,update:n,dispose:s}}function K_(i,e){return i.groupOrder!==e.groupOrder?i.groupOrder-e.groupOrder:i.renderOrder!==e.renderOrder?i.renderOrder-e.renderOrder:i.material.id!==e.material.id?i.material.id-e.material.id:i.z!==e.z?i.z-e.z:i.id-e.id}function rd(i,e){return i.groupOrder!==e.groupOrder?i.groupOrder-e.groupOrder:i.renderOrder!==e.renderOrder?i.renderOrder-e.renderOrder:i.z!==e.z?e.z-i.z:i.id-e.id}function od(){let i=[],e=0,t=[],n=[],s=[];function r(){e=0,t.length=0,n.length=0,s.length=0}function o(u,d,f,g,x,m){let p=i[e];return p===void 0?(p={id:u.id,object:u,geometry:d,material:f,groupOrder:g,renderOrder:u.renderOrder,z:x,group:m},i[e]=p):(p.id=u.id,p.object=u,p.geometry=d,p.material=f,p.groupOrder=g,p.renderOrder=u.renderOrder,p.z=x,p.group=m),e++,p}function a(u,d,f,g,x,m){let p=o(u,d,f,g,x,m);f.transmission>0?n.push(p):f.transparent===!0?s.push(p):t.push(p)}function c(u,d,f,g,x,m){let p=o(u,d,f,g,x,m);f.transmission>0?n.unshift(p):f.transparent===!0?s.unshift(p):t.unshift(p)}function l(u,d){t.length>1&&t.sort(u||K_),n.length>1&&n.sort(d||rd),s.length>1&&s.sort(d||rd)}function h(){for(let u=e,d=i.length;u<d;u++){let f=i[u];if(f.id===null)break;f.id=null,f.object=null,f.geometry=null,f.material=null,f.group=null}}return{opaque:t,transmissive:n,transparent:s,init:r,push:a,unshift:c,finish:h,sort:l}}function $_(){let i=new WeakMap;function e(n,s){let r=i.get(n),o;return r===void 0?(o=new od,i.set(n,[o])):s>=r.length?(o=new od,r.push(o)):o=r[s],o}function t(){i=new WeakMap}return{get:e,dispose:t}}function J_(){let i={};return{get:function(e){if(i[e.id]!==void 0)return i[e.id];let t;switch(e.type){case"DirectionalLight":t={direction:new I,color:new ge};break;case"SpotLight":t={position:new I,direction:new I,color:new ge,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":t={position:new I,color:new ge,distance:0,decay:0};break;case"HemisphereLight":t={direction:new I,skyColor:new ge,groundColor:new ge};break;case"RectAreaLight":t={color:new ge,position:new I,halfWidth:new I,halfHeight:new I};break}return i[e.id]=t,t}}}function Q_(){let i={};return{get:function(e){if(i[e.id]!==void 0)return i[e.id];let t;switch(e.type){case"DirectionalLight":t={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new He};break;case"SpotLight":t={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new He};break;case"PointLight":t={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new He,shadowCameraNear:1,shadowCameraFar:1e3};break}return i[e.id]=t,t}}}var ey=0;function ty(i,e){return(e.castShadow?2:0)-(i.castShadow?2:0)+(e.map?1:0)-(i.map?1:0)}function ny(i,e){let t=new J_,n=Q_(),s={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let h=0;h<9;h++)s.probe.push(new I);let r=new I,o=new Je,a=new Je;function c(h,u){let d=0,f=0,g=0;for(let j=0;j<9;j++)s.probe[j].set(0,0,0);let x=0,m=0,p=0,y=0,_=0,b=0,C=0,A=0,R=0,O=0,v=0;h.sort(ty);let S=u===!0?Math.PI:1;for(let j=0,ee=h.length;j<ee;j++){let z=h[j],B=z.color,Q=z.intensity,Z=z.distance,K=z.shadow&&z.shadow.map?z.shadow.map.texture:null;if(z.isAmbientLight)d+=B.r*Q*S,f+=B.g*Q*S,g+=B.b*Q*S;else if(z.isLightProbe){for(let $=0;$<9;$++)s.probe[$].addScaledVector(z.sh.coefficients[$],Q);v++}else if(z.isDirectionalLight){let $=t.get(z);if($.color.copy(z.color).multiplyScalar(z.intensity*S),z.castShadow){let te=z.shadow,he=n.get(z);he.shadowBias=te.bias,he.shadowNormalBias=te.normalBias,he.shadowRadius=te.radius,he.shadowMapSize=te.mapSize,s.directionalShadow[x]=he,s.directionalShadowMap[x]=K,s.directionalShadowMatrix[x]=z.shadow.matrix,b++}s.directional[x]=$,x++}else if(z.isSpotLight){let $=t.get(z);$.position.setFromMatrixPosition(z.matrixWorld),$.color.copy(B).multiplyScalar(Q*S),$.distance=Z,$.coneCos=Math.cos(z.angle),$.penumbraCos=Math.cos(z.angle*(1-z.penumbra)),$.decay=z.decay,s.spot[p]=$;let te=z.shadow;if(z.map&&(s.spotLightMap[R]=z.map,R++,te.updateMatrices(z),z.castShadow&&O++),s.spotLightMatrix[p]=te.matrix,z.castShadow){let he=n.get(z);he.shadowBias=te.bias,he.shadowNormalBias=te.normalBias,he.shadowRadius=te.radius,he.shadowMapSize=te.mapSize,s.spotShadow[p]=he,s.spotShadowMap[p]=K,A++}p++}else if(z.isRectAreaLight){let $=t.get(z);$.color.copy(B).multiplyScalar(Q),$.halfWidth.set(z.width*.5,0,0),$.halfHeight.set(0,z.height*.5,0),s.rectArea[y]=$,y++}else if(z.isPointLight){let $=t.get(z);if($.color.copy(z.color).multiplyScalar(z.intensity*S),$.distance=z.distance,$.decay=z.decay,z.castShadow){let te=z.shadow,he=n.get(z);he.shadowBias=te.bias,he.shadowNormalBias=te.normalBias,he.shadowRadius=te.radius,he.shadowMapSize=te.mapSize,he.shadowCameraNear=te.camera.near,he.shadowCameraFar=te.camera.far,s.pointShadow[m]=he,s.pointShadowMap[m]=K,s.pointShadowMatrix[m]=z.shadow.matrix,C++}s.point[m]=$,m++}else if(z.isHemisphereLight){let $=t.get(z);$.skyColor.copy(z.color).multiplyScalar(Q*S),$.groundColor.copy(z.groundColor).multiplyScalar(Q*S),s.hemi[_]=$,_++}}y>0&&(e.isWebGL2?i.has("OES_texture_float_linear")===!0?(s.rectAreaLTC1=fe.LTC_FLOAT_1,s.rectAreaLTC2=fe.LTC_FLOAT_2):(s.rectAreaLTC1=fe.LTC_HALF_1,s.rectAreaLTC2=fe.LTC_HALF_2):i.has("OES_texture_float_linear")===!0?(s.rectAreaLTC1=fe.LTC_FLOAT_1,s.rectAreaLTC2=fe.LTC_FLOAT_2):i.has("OES_texture_half_float_linear")===!0?(s.rectAreaLTC1=fe.LTC_HALF_1,s.rectAreaLTC2=fe.LTC_HALF_2):console.error("THREE.WebGLRenderer: Unable to use RectAreaLight. Missing WebGL extensions.")),s.ambient[0]=d,s.ambient[1]=f,s.ambient[2]=g;let F=s.hash;(F.directionalLength!==x||F.pointLength!==m||F.spotLength!==p||F.rectAreaLength!==y||F.hemiLength!==_||F.numDirectionalShadows!==b||F.numPointShadows!==C||F.numSpotShadows!==A||F.numSpotMaps!==R||F.numLightProbes!==v)&&(s.directional.length=x,s.spot.length=p,s.rectArea.length=y,s.point.length=m,s.hemi.length=_,s.directionalShadow.length=b,s.directionalShadowMap.length=b,s.pointShadow.length=C,s.pointShadowMap.length=C,s.spotShadow.length=A,s.spotShadowMap.length=A,s.directionalShadowMatrix.length=b,s.pointShadowMatrix.length=C,s.spotLightMatrix.length=A+R-O,s.spotLightMap.length=R,s.numSpotLightShadowsWithMaps=O,s.numLightProbes=v,F.directionalLength=x,F.pointLength=m,F.spotLength=p,F.rectAreaLength=y,F.hemiLength=_,F.numDirectionalShadows=b,F.numPointShadows=C,F.numSpotShadows=A,F.numSpotMaps=R,F.numLightProbes=v,s.version=ey++)}function l(h,u){let d=0,f=0,g=0,x=0,m=0,p=u.matrixWorldInverse;for(let y=0,_=h.length;y<_;y++){let b=h[y];if(b.isDirectionalLight){let C=s.directional[d];C.direction.setFromMatrixPosition(b.matrixWorld),r.setFromMatrixPosition(b.target.matrixWorld),C.direction.sub(r),C.direction.transformDirection(p),d++}else if(b.isSpotLight){let C=s.spot[g];C.position.setFromMatrixPosition(b.matrixWorld),C.position.applyMatrix4(p),C.direction.setFromMatrixPosition(b.matrixWorld),r.setFromMatrixPosition(b.target.matrixWorld),C.direction.sub(r),C.direction.transformDirection(p),g++}else if(b.isRectAreaLight){let C=s.rectArea[x];C.position.setFromMatrixPosition(b.matrixWorld),C.position.applyMatrix4(p),a.identity(),o.copy(b.matrixWorld),o.premultiply(p),a.extractRotation(o),C.halfWidth.set(b.width*.5,0,0),C.halfHeight.set(0,b.height*.5,0),C.halfWidth.applyMatrix4(a),C.halfHeight.applyMatrix4(a),x++}else if(b.isPointLight){let C=s.point[f];C.position.setFromMatrixPosition(b.matrixWorld),C.position.applyMatrix4(p),f++}else if(b.isHemisphereLight){let C=s.hemi[m];C.direction.setFromMatrixPosition(b.matrixWorld),C.direction.transformDirection(p),m++}}}return{setup:c,setupView:l,state:s}}function ad(i,e){let t=new ny(i,e),n=[],s=[];function r(){n.length=0,s.length=0}function o(u){n.push(u)}function a(u){s.push(u)}function c(u){t.setup(n,u)}function l(u){t.setupView(n,u)}return{init:r,state:{lightsArray:n,shadowsArray:s,lights:t},setupLights:c,setupLightsView:l,pushLight:o,pushShadow:a}}function iy(i,e){let t=new WeakMap;function n(r,o=0){let a=t.get(r),c;return a===void 0?(c=new ad(i,e),t.set(r,[c])):o>=a.length?(c=new ad(i,e),a.push(c)):c=a[o],c}function s(){t=new WeakMap}return{get:n,dispose:s}}var il=class extends fn{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=$p,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}},sl=class extends fn{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}},sy=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,ry=`uniform sampler2D shadow_pass;
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
}`;function oy(i,e,t){let n=new Or,s=new He,r=new He,o=new pt,a=new il({depthPacking:Jp}),c=new sl,l={},h=t.maxTextureSize,u={[qn]:gn,[gn]:qn,[dn]:dn},d=new ui({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new He},radius:{value:4}},vertexShader:sy,fragmentShader:ry}),f=d.clone();f.defines.HORIZONTAL_PASS=1;let g=new Nt;g.setAttribute("position",new At(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));let x=new Me(g,d),m=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=Ma;let p=this.type;this.render=function(A,R,O){if(m.enabled===!1||m.autoUpdate===!1&&m.needsUpdate===!1||A.length===0)return;let v=i.getRenderTarget(),S=i.getActiveCubeFace(),F=i.getActiveMipmapLevel(),j=i.state;j.setBlending(Ai),j.buffers.color.setClear(1,1,1,1),j.buffers.depth.setTest(!0),j.setScissorTest(!1);let ee=p!==ri&&this.type===ri,z=p===ri&&this.type!==ri;for(let B=0,Q=A.length;B<Q;B++){let Z=A[B],K=Z.shadow;if(K===void 0){console.warn("THREE.WebGLShadowMap:",Z,"has no shadow.");continue}if(K.autoUpdate===!1&&K.needsUpdate===!1)continue;s.copy(K.mapSize);let $=K.getFrameExtents();if(s.multiply($),r.copy(K.mapSize),(s.x>h||s.y>h)&&(s.x>h&&(r.x=Math.floor(h/$.x),s.x=r.x*$.x,K.mapSize.x=r.x),s.y>h&&(r.y=Math.floor(h/$.y),s.y=r.y*$.y,K.mapSize.y=r.y)),K.map===null||ee===!0||z===!0){let he=this.type!==ri?{minFilter:Vt,magFilter:Vt}:{};K.map!==null&&K.map.dispose(),K.map=new hi(s.x,s.y,he),K.map.texture.name=Z.name+".shadowMap",K.camera.updateProjectionMatrix()}i.setRenderTarget(K.map),i.clear();let te=K.getViewportCount();for(let he=0;he<te;he++){let pe=K.getViewport(he);o.set(r.x*pe.x,r.y*pe.y,r.x*pe.z,r.y*pe.w),j.viewport(o),K.updateMatrices(Z,he),n=K.getFrustum(),b(R,O,K.camera,Z,this.type)}K.isPointLightShadow!==!0&&this.type===ri&&y(K,O),K.needsUpdate=!1}p=this.type,m.needsUpdate=!1,i.setRenderTarget(v,S,F)};function y(A,R){let O=e.update(x);d.defines.VSM_SAMPLES!==A.blurSamples&&(d.defines.VSM_SAMPLES=A.blurSamples,f.defines.VSM_SAMPLES=A.blurSamples,d.needsUpdate=!0,f.needsUpdate=!0),A.mapPass===null&&(A.mapPass=new hi(s.x,s.y)),d.uniforms.shadow_pass.value=A.map.texture,d.uniforms.resolution.value=A.mapSize,d.uniforms.radius.value=A.radius,i.setRenderTarget(A.mapPass),i.clear(),i.renderBufferDirect(R,null,O,d,x,null),f.uniforms.shadow_pass.value=A.mapPass.texture,f.uniforms.resolution.value=A.mapSize,f.uniforms.radius.value=A.radius,i.setRenderTarget(A.map),i.clear(),i.renderBufferDirect(R,null,O,f,x,null)}function _(A,R,O,v){let S=null,F=O.isPointLight===!0?A.customDistanceMaterial:A.customDepthMaterial;if(F!==void 0)S=F;else if(S=O.isPointLight===!0?c:a,i.localClippingEnabled&&R.clipShadows===!0&&Array.isArray(R.clippingPlanes)&&R.clippingPlanes.length!==0||R.displacementMap&&R.displacementScale!==0||R.alphaMap&&R.alphaTest>0||R.map&&R.alphaTest>0){let j=S.uuid,ee=R.uuid,z=l[j];z===void 0&&(z={},l[j]=z);let B=z[ee];B===void 0&&(B=S.clone(),z[ee]=B,R.addEventListener("dispose",C)),S=B}if(S.visible=R.visible,S.wireframe=R.wireframe,v===ri?S.side=R.shadowSide!==null?R.shadowSide:R.side:S.side=R.shadowSide!==null?R.shadowSide:u[R.side],S.alphaMap=R.alphaMap,S.alphaTest=R.alphaTest,S.map=R.map,S.clipShadows=R.clipShadows,S.clippingPlanes=R.clippingPlanes,S.clipIntersection=R.clipIntersection,S.displacementMap=R.displacementMap,S.displacementScale=R.displacementScale,S.displacementBias=R.displacementBias,S.wireframeLinewidth=R.wireframeLinewidth,S.linewidth=R.linewidth,O.isPointLight===!0&&S.isMeshDistanceMaterial===!0){let j=i.properties.get(S);j.light=O}return S}function b(A,R,O,v,S){if(A.visible===!1)return;if(A.layers.test(R.layers)&&(A.isMesh||A.isLine||A.isPoints)&&(A.castShadow||A.receiveShadow&&S===ri)&&(!A.frustumCulled||n.intersectsObject(A))){A.modelViewMatrix.multiplyMatrices(O.matrixWorldInverse,A.matrixWorld);let ee=e.update(A),z=A.material;if(Array.isArray(z)){let B=ee.groups;for(let Q=0,Z=B.length;Q<Z;Q++){let K=B[Q],$=z[K.materialIndex];if($&&$.visible){let te=_(A,$,v,S);A.onBeforeShadow(i,A,R,O,ee,te,K),i.renderBufferDirect(O,null,ee,te,A,K),A.onAfterShadow(i,A,R,O,ee,te,K)}}}else if(z.visible){let B=_(A,z,v,S);A.onBeforeShadow(i,A,R,O,ee,B,null),i.renderBufferDirect(O,null,ee,B,A,null),A.onAfterShadow(i,A,R,O,ee,B,null)}}let j=A.children;for(let ee=0,z=j.length;ee<z;ee++)b(j[ee],R,O,v,S)}function C(A){A.target.removeEventListener("dispose",C);for(let O in l){let v=l[O],S=A.target.uuid;S in v&&(v[S].dispose(),delete v[S])}}}function ay(i,e,t){let n=t.isWebGL2;function s(){let P=!1,ie=new pt,ce=null,Se=new pt(0,0,0,0);return{setMask:function(Te){ce!==Te&&!P&&(i.colorMask(Te,Te,Te,Te),ce=Te)},setLocked:function(Te){P=Te},setClear:function(Te,ct,_t,jt,an){an===!0&&(Te*=jt,ct*=jt,_t*=jt),ie.set(Te,ct,_t,jt),Se.equals(ie)===!1&&(i.clearColor(Te,ct,_t,jt),Se.copy(ie))},reset:function(){P=!1,ce=null,Se.set(-1,0,0,0)}}}function r(){let P=!1,ie=null,ce=null,Se=null;return{setTest:function(Te){Te?Ve(i.DEPTH_TEST):De(i.DEPTH_TEST)},setMask:function(Te){ie!==Te&&!P&&(i.depthMask(Te),ie=Te)},setFunc:function(Te){if(ce!==Te){switch(Te){case Ep:i.depthFunc(i.NEVER);break;case Tp:i.depthFunc(i.ALWAYS);break;case Ap:i.depthFunc(i.LESS);break;case Ho:i.depthFunc(i.LEQUAL);break;case Rp:i.depthFunc(i.EQUAL);break;case Cp:i.depthFunc(i.GEQUAL);break;case Pp:i.depthFunc(i.GREATER);break;case Lp:i.depthFunc(i.NOTEQUAL);break;default:i.depthFunc(i.LEQUAL)}ce=Te}},setLocked:function(Te){P=Te},setClear:function(Te){Se!==Te&&(i.clearDepth(Te),Se=Te)},reset:function(){P=!1,ie=null,ce=null,Se=null}}}function o(){let P=!1,ie=null,ce=null,Se=null,Te=null,ct=null,_t=null,jt=null,an=null;return{setTest:function(yt){P||(yt?Ve(i.STENCIL_TEST):De(i.STENCIL_TEST))},setMask:function(yt){ie!==yt&&!P&&(i.stencilMask(yt),ie=yt)},setFunc:function(yt,cn,Vn){(ce!==yt||Se!==cn||Te!==Vn)&&(i.stencilFunc(yt,cn,Vn),ce=yt,Se=cn,Te=Vn)},setOp:function(yt,cn,Vn){(ct!==yt||_t!==cn||jt!==Vn)&&(i.stencilOp(yt,cn,Vn),ct=yt,_t=cn,jt=Vn)},setLocked:function(yt){P=yt},setClear:function(yt){an!==yt&&(i.clearStencil(yt),an=yt)},reset:function(){P=!1,ie=null,ce=null,Se=null,Te=null,ct=null,_t=null,jt=null,an=null}}}let a=new s,c=new r,l=new o,h=new WeakMap,u=new WeakMap,d={},f={},g=new WeakMap,x=[],m=null,p=!1,y=null,_=null,b=null,C=null,A=null,R=null,O=null,v=new ge(0,0,0),S=0,F=!1,j=null,ee=null,z=null,B=null,Q=null,Z=i.getParameter(i.MAX_COMBINED_TEXTURE_IMAGE_UNITS),K=!1,$=0,te=i.getParameter(i.VERSION);te.indexOf("WebGL")!==-1?($=parseFloat(/^WebGL (\d)/.exec(te)[1]),K=$>=1):te.indexOf("OpenGL ES")!==-1&&($=parseFloat(/^OpenGL ES (\d)/.exec(te)[1]),K=$>=2);let he=null,pe={},Y=i.getParameter(i.SCISSOR_BOX),ne=i.getParameter(i.VIEWPORT),me=new pt().fromArray(Y),Ce=new pt().fromArray(ne);function we(P,ie,ce,Se){let Te=new Uint8Array(4),ct=i.createTexture();i.bindTexture(P,ct),i.texParameteri(P,i.TEXTURE_MIN_FILTER,i.NEAREST),i.texParameteri(P,i.TEXTURE_MAG_FILTER,i.NEAREST);for(let _t=0;_t<ce;_t++)n&&(P===i.TEXTURE_3D||P===i.TEXTURE_2D_ARRAY)?i.texImage3D(ie,0,i.RGBA,1,1,Se,0,i.RGBA,i.UNSIGNED_BYTE,Te):i.texImage2D(ie+_t,0,i.RGBA,1,1,0,i.RGBA,i.UNSIGNED_BYTE,Te);return ct}let ze={};ze[i.TEXTURE_2D]=we(i.TEXTURE_2D,i.TEXTURE_2D,1),ze[i.TEXTURE_CUBE_MAP]=we(i.TEXTURE_CUBE_MAP,i.TEXTURE_CUBE_MAP_POSITIVE_X,6),n&&(ze[i.TEXTURE_2D_ARRAY]=we(i.TEXTURE_2D_ARRAY,i.TEXTURE_2D_ARRAY,1,1),ze[i.TEXTURE_3D]=we(i.TEXTURE_3D,i.TEXTURE_3D,1,1)),a.setClear(0,0,0,1),c.setClear(1),l.setClear(0),Ve(i.DEPTH_TEST),c.setFunc(Ho),We(!1),E(Wh),Ve(i.CULL_FACE),Ee(Ai);function Ve(P){d[P]!==!0&&(i.enable(P),d[P]=!0)}function De(P){d[P]!==!1&&(i.disable(P),d[P]=!1)}function rt(P,ie){return f[P]!==ie?(i.bindFramebuffer(P,ie),f[P]=ie,n&&(P===i.DRAW_FRAMEBUFFER&&(f[i.FRAMEBUFFER]=ie),P===i.FRAMEBUFFER&&(f[i.DRAW_FRAMEBUFFER]=ie)),!0):!1}function k(P,ie){let ce=x,Se=!1;if(P)if(ce=g.get(ie),ce===void 0&&(ce=[],g.set(ie,ce)),P.isWebGLMultipleRenderTargets){let Te=P.texture;if(ce.length!==Te.length||ce[0]!==i.COLOR_ATTACHMENT0){for(let ct=0,_t=Te.length;ct<_t;ct++)ce[ct]=i.COLOR_ATTACHMENT0+ct;ce.length=Te.length,Se=!0}}else ce[0]!==i.COLOR_ATTACHMENT0&&(ce[0]=i.COLOR_ATTACHMENT0,Se=!0);else ce[0]!==i.BACK&&(ce[0]=i.BACK,Se=!0);Se&&(t.isWebGL2?i.drawBuffers(ce):e.get("WEBGL_draw_buffers").drawBuffersWEBGL(ce))}function $t(P){return m!==P?(i.useProgram(P),m=P,!0):!1}let Ie={[Zi]:i.FUNC_ADD,[hp]:i.FUNC_SUBTRACT,[up]:i.FUNC_REVERSE_SUBTRACT};if(n)Ie[jh]=i.MIN,Ie[Zh]=i.MAX;else{let P=e.get("EXT_blend_minmax");P!==null&&(Ie[jh]=P.MIN_EXT,Ie[Zh]=P.MAX_EXT)}let Oe={[dp]:i.ZERO,[fp]:i.ONE,[pp]:i.SRC_COLOR,[kc]:i.SRC_ALPHA,[vp]:i.SRC_ALPHA_SATURATE,[_p]:i.DST_COLOR,[gp]:i.DST_ALPHA,[mp]:i.ONE_MINUS_SRC_COLOR,[Hc]:i.ONE_MINUS_SRC_ALPHA,[yp]:i.ONE_MINUS_DST_COLOR,[xp]:i.ONE_MINUS_DST_ALPHA,[Mp]:i.CONSTANT_COLOR,[bp]:i.ONE_MINUS_CONSTANT_COLOR,[wp]:i.CONSTANT_ALPHA,[Sp]:i.ONE_MINUS_CONSTANT_ALPHA};function Ee(P,ie,ce,Se,Te,ct,_t,jt,an,yt){if(P===Ai){p===!0&&(De(i.BLEND),p=!1);return}if(p===!1&&(Ve(i.BLEND),p=!0),P!==lp){if(P!==y||yt!==F){if((_!==Zi||A!==Zi)&&(i.blendEquation(i.FUNC_ADD),_=Zi,A=Zi),yt)switch(P){case Gs:i.blendFuncSeparate(i.ONE,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case Xh:i.blendFunc(i.ONE,i.ONE);break;case qh:i.blendFuncSeparate(i.ZERO,i.ONE_MINUS_SRC_COLOR,i.ZERO,i.ONE);break;case Yh:i.blendFuncSeparate(i.ZERO,i.SRC_COLOR,i.ZERO,i.SRC_ALPHA);break;default:console.error("THREE.WebGLState: Invalid blending: ",P);break}else switch(P){case Gs:i.blendFuncSeparate(i.SRC_ALPHA,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case Xh:i.blendFunc(i.SRC_ALPHA,i.ONE);break;case qh:i.blendFuncSeparate(i.ZERO,i.ONE_MINUS_SRC_COLOR,i.ZERO,i.ONE);break;case Yh:i.blendFunc(i.ZERO,i.SRC_COLOR);break;default:console.error("THREE.WebGLState: Invalid blending: ",P);break}b=null,C=null,R=null,O=null,v.set(0,0,0),S=0,y=P,F=yt}return}Te=Te||ie,ct=ct||ce,_t=_t||Se,(ie!==_||Te!==A)&&(i.blendEquationSeparate(Ie[ie],Ie[Te]),_=ie,A=Te),(ce!==b||Se!==C||ct!==R||_t!==O)&&(i.blendFuncSeparate(Oe[ce],Oe[Se],Oe[ct],Oe[_t]),b=ce,C=Se,R=ct,O=_t),(jt.equals(v)===!1||an!==S)&&(i.blendColor(jt.r,jt.g,jt.b,an),v.copy(jt),S=an),y=P,F=!1}function vt(P,ie){P.side===dn?De(i.CULL_FACE):Ve(i.CULL_FACE);let ce=P.side===gn;ie&&(ce=!ce),We(ce),P.blending===Gs&&P.transparent===!1?Ee(Ai):Ee(P.blending,P.blendEquation,P.blendSrc,P.blendDst,P.blendEquationAlpha,P.blendSrcAlpha,P.blendDstAlpha,P.blendColor,P.blendAlpha,P.premultipliedAlpha),c.setFunc(P.depthFunc),c.setTest(P.depthTest),c.setMask(P.depthWrite),a.setMask(P.colorWrite);let Se=P.stencilWrite;l.setTest(Se),Se&&(l.setMask(P.stencilWriteMask),l.setFunc(P.stencilFunc,P.stencilRef,P.stencilFuncMask),l.setOp(P.stencilFail,P.stencilZFail,P.stencilZPass)),H(P.polygonOffset,P.polygonOffsetFactor,P.polygonOffsetUnits),P.alphaToCoverage===!0?Ve(i.SAMPLE_ALPHA_TO_COVERAGE):De(i.SAMPLE_ALPHA_TO_COVERAGE)}function We(P){j!==P&&(P?i.frontFace(i.CW):i.frontFace(i.CCW),j=P)}function E(P){P!==op?(Ve(i.CULL_FACE),P!==ee&&(P===Wh?i.cullFace(i.BACK):P===ap?i.cullFace(i.FRONT):i.cullFace(i.FRONT_AND_BACK))):De(i.CULL_FACE),ee=P}function M(P){P!==z&&(K&&i.lineWidth(P),z=P)}function H(P,ie,ce){P?(Ve(i.POLYGON_OFFSET_FILL),(B!==ie||Q!==ce)&&(i.polygonOffset(ie,ce),B=ie,Q=ce)):De(i.POLYGON_OFFSET_FILL)}function ae(P){P?Ve(i.SCISSOR_TEST):De(i.SCISSOR_TEST)}function oe(P){P===void 0&&(P=i.TEXTURE0+Z-1),he!==P&&(i.activeTexture(P),he=P)}function le(P,ie,ce){ce===void 0&&(he===null?ce=i.TEXTURE0+Z-1:ce=he);let Se=pe[ce];Se===void 0&&(Se={type:void 0,texture:void 0},pe[ce]=Se),(Se.type!==P||Se.texture!==ie)&&(he!==ce&&(i.activeTexture(ce),he=ce),i.bindTexture(P,ie||ze[P]),Se.type=P,Se.texture=ie)}function Re(){let P=pe[he];P!==void 0&&P.type!==void 0&&(i.bindTexture(P.type,null),P.type=void 0,P.texture=void 0)}function xe(){try{i.compressedTexImage2D.apply(i,arguments)}catch(P){console.error("THREE.WebGLState:",P)}}function be(){try{i.compressedTexImage3D.apply(i,arguments)}catch(P){console.error("THREE.WebGLState:",P)}}function Pe(){try{i.texSubImage2D.apply(i,arguments)}catch(P){console.error("THREE.WebGLState:",P)}}function Be(){try{i.texSubImage3D.apply(i,arguments)}catch(P){console.error("THREE.WebGLState:",P)}}function se(){try{i.compressedTexSubImage2D.apply(i,arguments)}catch(P){console.error("THREE.WebGLState:",P)}}function at(){try{i.compressedTexSubImage3D.apply(i,arguments)}catch(P){console.error("THREE.WebGLState:",P)}}function D(){try{i.texStorage2D.apply(i,arguments)}catch(P){console.error("THREE.WebGLState:",P)}}function U(){try{i.texStorage3D.apply(i,arguments)}catch(P){console.error("THREE.WebGLState:",P)}}function G(){try{i.texImage2D.apply(i,arguments)}catch(P){console.error("THREE.WebGLState:",P)}}function W(){try{i.texImage3D.apply(i,arguments)}catch(P){console.error("THREE.WebGLState:",P)}}function ue(P){me.equals(P)===!1&&(i.scissor(P.x,P.y,P.z,P.w),me.copy(P))}function re(P){Ce.equals(P)===!1&&(i.viewport(P.x,P.y,P.z,P.w),Ce.copy(P))}function _e(P,ie){let ce=u.get(ie);ce===void 0&&(ce=new WeakMap,u.set(ie,ce));let Se=ce.get(P);Se===void 0&&(Se=i.getUniformBlockIndex(ie,P.name),ce.set(P,Se))}function ye(P,ie){let Se=u.get(ie).get(P);h.get(ie)!==Se&&(i.uniformBlockBinding(ie,Se,P.__bindingPointIndex),h.set(ie,Se))}function J(){i.disable(i.BLEND),i.disable(i.CULL_FACE),i.disable(i.DEPTH_TEST),i.disable(i.POLYGON_OFFSET_FILL),i.disable(i.SCISSOR_TEST),i.disable(i.STENCIL_TEST),i.disable(i.SAMPLE_ALPHA_TO_COVERAGE),i.blendEquation(i.FUNC_ADD),i.blendFunc(i.ONE,i.ZERO),i.blendFuncSeparate(i.ONE,i.ZERO,i.ONE,i.ZERO),i.blendColor(0,0,0,0),i.colorMask(!0,!0,!0,!0),i.clearColor(0,0,0,0),i.depthMask(!0),i.depthFunc(i.LESS),i.clearDepth(1),i.stencilMask(4294967295),i.stencilFunc(i.ALWAYS,0,4294967295),i.stencilOp(i.KEEP,i.KEEP,i.KEEP),i.clearStencil(0),i.cullFace(i.BACK),i.frontFace(i.CCW),i.polygonOffset(0,0),i.activeTexture(i.TEXTURE0),i.bindFramebuffer(i.FRAMEBUFFER,null),n===!0&&(i.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),i.bindFramebuffer(i.READ_FRAMEBUFFER,null)),i.useProgram(null),i.lineWidth(1),i.scissor(0,0,i.canvas.width,i.canvas.height),i.viewport(0,0,i.canvas.width,i.canvas.height),d={},he=null,pe={},f={},g=new WeakMap,x=[],m=null,p=!1,y=null,_=null,b=null,C=null,A=null,R=null,O=null,v=new ge(0,0,0),S=0,F=!1,j=null,ee=null,z=null,B=null,Q=null,me.set(0,0,i.canvas.width,i.canvas.height),Ce.set(0,0,i.canvas.width,i.canvas.height),a.reset(),c.reset(),l.reset()}return{buffers:{color:a,depth:c,stencil:l},enable:Ve,disable:De,bindFramebuffer:rt,drawBuffers:k,useProgram:$t,setBlending:Ee,setMaterial:vt,setFlipSided:We,setCullFace:E,setLineWidth:M,setPolygonOffset:H,setScissorTest:ae,activeTexture:oe,bindTexture:le,unbindTexture:Re,compressedTexImage2D:xe,compressedTexImage3D:be,texImage2D:G,texImage3D:W,updateUBOMapping:_e,uniformBlockBinding:ye,texStorage2D:D,texStorage3D:U,texSubImage2D:Pe,texSubImage3D:Be,compressedTexSubImage2D:se,compressedTexSubImage3D:at,scissor:ue,viewport:re,reset:J}}function cy(i,e,t,n,s,r,o){let a=s.isWebGL2,c=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,l=typeof navigator=="undefined"?!1:/OculusBrowser/g.test(navigator.userAgent),h=new WeakMap,u,d=new WeakMap,f=!1;try{f=typeof OffscreenCanvas!="undefined"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function g(E,M){return f?new OffscreenCanvas(E,M):Ur("canvas")}function x(E,M,H,ae){let oe=1;if((E.width>ae||E.height>ae)&&(oe=ae/Math.max(E.width,E.height)),oe<1||M===!0)if(typeof HTMLImageElement!="undefined"&&E instanceof HTMLImageElement||typeof HTMLCanvasElement!="undefined"&&E instanceof HTMLCanvasElement||typeof ImageBitmap!="undefined"&&E instanceof ImageBitmap){let le=M?jo:Math.floor,Re=le(oe*E.width),xe=le(oe*E.height);u===void 0&&(u=g(Re,xe));let be=H?g(Re,xe):u;return be.width=Re,be.height=xe,be.getContext("2d").drawImage(E,0,0,Re,xe),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+E.width+"x"+E.height+") to ("+Re+"x"+xe+")."),be}else return"data"in E&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+E.width+"x"+E.height+")."),E;return E}function m(E){return qc(E.width)&&qc(E.height)}function p(E){return a?!1:E.wrapS!==Mn||E.wrapT!==Mn||E.minFilter!==Vt&&E.minFilter!==un}function y(E,M){return E.generateMipmaps&&M&&E.minFilter!==Vt&&E.minFilter!==un}function _(E){i.generateMipmap(E)}function b(E,M,H,ae,oe=!1){if(a===!1)return M;if(E!==null){if(i[E]!==void 0)return i[E];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+E+"'")}let le=M;if(M===i.RED&&(H===i.FLOAT&&(le=i.R32F),H===i.HALF_FLOAT&&(le=i.R16F),H===i.UNSIGNED_BYTE&&(le=i.R8)),M===i.RED_INTEGER&&(H===i.UNSIGNED_BYTE&&(le=i.R8UI),H===i.UNSIGNED_SHORT&&(le=i.R16UI),H===i.UNSIGNED_INT&&(le=i.R32UI),H===i.BYTE&&(le=i.R8I),H===i.SHORT&&(le=i.R16I),H===i.INT&&(le=i.R32I)),M===i.RG&&(H===i.FLOAT&&(le=i.RG32F),H===i.HALF_FLOAT&&(le=i.RG16F),H===i.UNSIGNED_BYTE&&(le=i.RG8)),M===i.RGBA){let Re=oe?Wo:lt.getTransfer(ae);H===i.FLOAT&&(le=i.RGBA32F),H===i.HALF_FLOAT&&(le=i.RGBA16F),H===i.UNSIGNED_BYTE&&(le=Re===Mt?i.SRGB8_ALPHA8:i.RGBA8),H===i.UNSIGNED_SHORT_4_4_4_4&&(le=i.RGBA4),H===i.UNSIGNED_SHORT_5_5_5_1&&(le=i.RGB5_A1)}return(le===i.R16F||le===i.R32F||le===i.RG16F||le===i.RG32F||le===i.RGBA16F||le===i.RGBA32F)&&e.get("EXT_color_buffer_float"),le}function C(E,M,H){return y(E,H)===!0||E.isFramebufferTexture&&E.minFilter!==Vt&&E.minFilter!==un?Math.log2(Math.max(M.width,M.height))+1:E.mipmaps!==void 0&&E.mipmaps.length>0?E.mipmaps.length:E.isCompressedTexture&&Array.isArray(E.image)?M.mipmaps.length:1}function A(E){return E===Vt||E===Go||E===Cr?i.NEAREST:i.LINEAR}function R(E){let M=E.target;M.removeEventListener("dispose",R),v(M),M.isVideoTexture&&h.delete(M)}function O(E){let M=E.target;M.removeEventListener("dispose",O),F(M)}function v(E){let M=n.get(E);if(M.__webglInit===void 0)return;let H=E.source,ae=d.get(H);if(ae){let oe=ae[M.__cacheKey];oe.usedTimes--,oe.usedTimes===0&&S(E),Object.keys(ae).length===0&&d.delete(H)}n.remove(E)}function S(E){let M=n.get(E);i.deleteTexture(M.__webglTexture);let H=E.source,ae=d.get(H);delete ae[M.__cacheKey],o.memory.textures--}function F(E){let M=E.texture,H=n.get(E),ae=n.get(M);if(ae.__webglTexture!==void 0&&(i.deleteTexture(ae.__webglTexture),o.memory.textures--),E.depthTexture&&E.depthTexture.dispose(),E.isWebGLCubeRenderTarget)for(let oe=0;oe<6;oe++){if(Array.isArray(H.__webglFramebuffer[oe]))for(let le=0;le<H.__webglFramebuffer[oe].length;le++)i.deleteFramebuffer(H.__webglFramebuffer[oe][le]);else i.deleteFramebuffer(H.__webglFramebuffer[oe]);H.__webglDepthbuffer&&i.deleteRenderbuffer(H.__webglDepthbuffer[oe])}else{if(Array.isArray(H.__webglFramebuffer))for(let oe=0;oe<H.__webglFramebuffer.length;oe++)i.deleteFramebuffer(H.__webglFramebuffer[oe]);else i.deleteFramebuffer(H.__webglFramebuffer);if(H.__webglDepthbuffer&&i.deleteRenderbuffer(H.__webglDepthbuffer),H.__webglMultisampledFramebuffer&&i.deleteFramebuffer(H.__webglMultisampledFramebuffer),H.__webglColorRenderbuffer)for(let oe=0;oe<H.__webglColorRenderbuffer.length;oe++)H.__webglColorRenderbuffer[oe]&&i.deleteRenderbuffer(H.__webglColorRenderbuffer[oe]);H.__webglDepthRenderbuffer&&i.deleteRenderbuffer(H.__webglDepthRenderbuffer)}if(E.isWebGLMultipleRenderTargets)for(let oe=0,le=M.length;oe<le;oe++){let Re=n.get(M[oe]);Re.__webglTexture&&(i.deleteTexture(Re.__webglTexture),o.memory.textures--),n.remove(M[oe])}n.remove(M),n.remove(E)}let j=0;function ee(){j=0}function z(){let E=j;return E>=s.maxTextures&&console.warn("THREE.WebGLTextures: Trying to use "+E+" texture units while this GPU supports only "+s.maxTextures),j+=1,E}function B(E){let M=[];return M.push(E.wrapS),M.push(E.wrapT),M.push(E.wrapR||0),M.push(E.magFilter),M.push(E.minFilter),M.push(E.anisotropy),M.push(E.internalFormat),M.push(E.format),M.push(E.type),M.push(E.generateMipmaps),M.push(E.premultiplyAlpha),M.push(E.flipY),M.push(E.unpackAlignment),M.push(E.colorSpace),M.join()}function Q(E,M){let H=n.get(E);if(E.isVideoTexture&&vt(E),E.isRenderTargetTexture===!1&&E.version>0&&H.__version!==E.version){let ae=E.image;if(ae===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(ae.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{me(H,E,M);return}}t.bindTexture(i.TEXTURE_2D,H.__webglTexture,i.TEXTURE0+M)}function Z(E,M){let H=n.get(E);if(E.version>0&&H.__version!==E.version){me(H,E,M);return}t.bindTexture(i.TEXTURE_2D_ARRAY,H.__webglTexture,i.TEXTURE0+M)}function K(E,M){let H=n.get(E);if(E.version>0&&H.__version!==E.version){me(H,E,M);return}t.bindTexture(i.TEXTURE_3D,H.__webglTexture,i.TEXTURE0+M)}function $(E,M){let H=n.get(E);if(E.version>0&&H.__version!==E.version){Ce(H,E,M);return}t.bindTexture(i.TEXTURE_CUBE_MAP,H.__webglTexture,i.TEXTURE0+M)}let te={[es]:i.REPEAT,[Mn]:i.CLAMP_TO_EDGE,[Dr]:i.MIRRORED_REPEAT},he={[Vt]:i.NEAREST,[Go]:i.NEAREST_MIPMAP_NEAREST,[Cr]:i.NEAREST_MIPMAP_LINEAR,[un]:i.LINEAR,[wl]:i.LINEAR_MIPMAP_NEAREST,[Pi]:i.LINEAR_MIPMAP_LINEAR},pe={[em]:i.NEVER,[om]:i.ALWAYS,[tm]:i.LESS,[Fd]:i.LEQUAL,[nm]:i.EQUAL,[rm]:i.GEQUAL,[im]:i.GREATER,[sm]:i.NOTEQUAL};function Y(E,M,H){if(H?(i.texParameteri(E,i.TEXTURE_WRAP_S,te[M.wrapS]),i.texParameteri(E,i.TEXTURE_WRAP_T,te[M.wrapT]),(E===i.TEXTURE_3D||E===i.TEXTURE_2D_ARRAY)&&i.texParameteri(E,i.TEXTURE_WRAP_R,te[M.wrapR]),i.texParameteri(E,i.TEXTURE_MAG_FILTER,he[M.magFilter]),i.texParameteri(E,i.TEXTURE_MIN_FILTER,he[M.minFilter])):(i.texParameteri(E,i.TEXTURE_WRAP_S,i.CLAMP_TO_EDGE),i.texParameteri(E,i.TEXTURE_WRAP_T,i.CLAMP_TO_EDGE),(E===i.TEXTURE_3D||E===i.TEXTURE_2D_ARRAY)&&i.texParameteri(E,i.TEXTURE_WRAP_R,i.CLAMP_TO_EDGE),(M.wrapS!==Mn||M.wrapT!==Mn)&&console.warn("THREE.WebGLRenderer: Texture is not power of two. Texture.wrapS and Texture.wrapT should be set to THREE.ClampToEdgeWrapping."),i.texParameteri(E,i.TEXTURE_MAG_FILTER,A(M.magFilter)),i.texParameteri(E,i.TEXTURE_MIN_FILTER,A(M.minFilter)),M.minFilter!==Vt&&M.minFilter!==un&&console.warn("THREE.WebGLRenderer: Texture is not power of two. Texture.minFilter should be set to THREE.NearestFilter or THREE.LinearFilter.")),M.compareFunction&&(i.texParameteri(E,i.TEXTURE_COMPARE_MODE,i.COMPARE_REF_TO_TEXTURE),i.texParameteri(E,i.TEXTURE_COMPARE_FUNC,pe[M.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){let ae=e.get("EXT_texture_filter_anisotropic");if(M.magFilter===Vt||M.minFilter!==Cr&&M.minFilter!==Pi||M.type===ai&&e.has("OES_texture_float_linear")===!1||a===!1&&M.type===Nr&&e.has("OES_texture_half_float_linear")===!1)return;(M.anisotropy>1||n.get(M).__currentAnisotropy)&&(i.texParameterf(E,ae.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(M.anisotropy,s.getMaxAnisotropy())),n.get(M).__currentAnisotropy=M.anisotropy)}}function ne(E,M){let H=!1;E.__webglInit===void 0&&(E.__webglInit=!0,M.addEventListener("dispose",R));let ae=M.source,oe=d.get(ae);oe===void 0&&(oe={},d.set(ae,oe));let le=B(M);if(le!==E.__cacheKey){oe[le]===void 0&&(oe[le]={texture:i.createTexture(),usedTimes:0},o.memory.textures++,H=!0),oe[le].usedTimes++;let Re=oe[E.__cacheKey];Re!==void 0&&(oe[E.__cacheKey].usedTimes--,Re.usedTimes===0&&S(M)),E.__cacheKey=le,E.__webglTexture=oe[le].texture}return H}function me(E,M,H){let ae=i.TEXTURE_2D;(M.isDataArrayTexture||M.isCompressedArrayTexture)&&(ae=i.TEXTURE_2D_ARRAY),M.isData3DTexture&&(ae=i.TEXTURE_3D);let oe=ne(E,M),le=M.source;t.bindTexture(ae,E.__webglTexture,i.TEXTURE0+H);let Re=n.get(le);if(le.version!==Re.__version||oe===!0){t.activeTexture(i.TEXTURE0+H);let xe=lt.getPrimaries(lt.workingColorSpace),be=M.colorSpace===Rn?null:lt.getPrimaries(M.colorSpace),Pe=M.colorSpace===Rn||xe===be?i.NONE:i.BROWSER_DEFAULT_WEBGL;i.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,M.flipY),i.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,M.premultiplyAlpha),i.pixelStorei(i.UNPACK_ALIGNMENT,M.unpackAlignment),i.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,Pe);let Be=p(M)&&m(M.image)===!1,se=x(M.image,Be,!1,s.maxTextureSize);se=We(M,se);let at=m(se)||a,D=r.convert(M.format,M.colorSpace),U=r.convert(M.type),G=b(M.internalFormat,D,U,M.colorSpace,M.isVideoTexture);Y(ae,M,at);let W,ue=M.mipmaps,re=a&&M.isVideoTexture!==!0&&G!==Nd,_e=Re.__version===void 0||oe===!0,ye=C(M,se,at);if(M.isDepthTexture)G=i.DEPTH_COMPONENT,a?M.type===ai?G=i.DEPTH_COMPONENT32F:M.type===Ei?G=i.DEPTH_COMPONENT24:M.type===$i?G=i.DEPTH24_STENCIL8:G=i.DEPTH_COMPONENT16:M.type===ai&&console.error("WebGLRenderer: Floating point depth texture requires WebGL2."),M.format===Ji&&G===i.DEPTH_COMPONENT&&M.type!==Sl&&M.type!==Ei&&(console.warn("THREE.WebGLRenderer: Use UnsignedShortType or UnsignedIntType for DepthFormat DepthTexture."),M.type=Ei,U=r.convert(M.type)),M.format===Ys&&G===i.DEPTH_COMPONENT&&(G=i.DEPTH_STENCIL,M.type!==$i&&(console.warn("THREE.WebGLRenderer: Use UnsignedInt248Type for DepthStencilFormat DepthTexture."),M.type=$i,U=r.convert(M.type))),_e&&(re?t.texStorage2D(i.TEXTURE_2D,1,G,se.width,se.height):t.texImage2D(i.TEXTURE_2D,0,G,se.width,se.height,0,D,U,null));else if(M.isDataTexture)if(ue.length>0&&at){re&&_e&&t.texStorage2D(i.TEXTURE_2D,ye,G,ue[0].width,ue[0].height);for(let J=0,P=ue.length;J<P;J++)W=ue[J],re?t.texSubImage2D(i.TEXTURE_2D,J,0,0,W.width,W.height,D,U,W.data):t.texImage2D(i.TEXTURE_2D,J,G,W.width,W.height,0,D,U,W.data);M.generateMipmaps=!1}else re?(_e&&t.texStorage2D(i.TEXTURE_2D,ye,G,se.width,se.height),t.texSubImage2D(i.TEXTURE_2D,0,0,0,se.width,se.height,D,U,se.data)):t.texImage2D(i.TEXTURE_2D,0,G,se.width,se.height,0,D,U,se.data);else if(M.isCompressedTexture)if(M.isCompressedArrayTexture){re&&_e&&t.texStorage3D(i.TEXTURE_2D_ARRAY,ye,G,ue[0].width,ue[0].height,se.depth);for(let J=0,P=ue.length;J<P;J++)W=ue[J],M.format!==An?D!==null?re?t.compressedTexSubImage3D(i.TEXTURE_2D_ARRAY,J,0,0,0,W.width,W.height,se.depth,D,W.data,0,0):t.compressedTexImage3D(i.TEXTURE_2D_ARRAY,J,G,W.width,W.height,se.depth,0,W.data,0,0):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):re?t.texSubImage3D(i.TEXTURE_2D_ARRAY,J,0,0,0,W.width,W.height,se.depth,D,U,W.data):t.texImage3D(i.TEXTURE_2D_ARRAY,J,G,W.width,W.height,se.depth,0,D,U,W.data)}else{re&&_e&&t.texStorage2D(i.TEXTURE_2D,ye,G,ue[0].width,ue[0].height);for(let J=0,P=ue.length;J<P;J++)W=ue[J],M.format!==An?D!==null?re?t.compressedTexSubImage2D(i.TEXTURE_2D,J,0,0,W.width,W.height,D,W.data):t.compressedTexImage2D(i.TEXTURE_2D,J,G,W.width,W.height,0,W.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):re?t.texSubImage2D(i.TEXTURE_2D,J,0,0,W.width,W.height,D,U,W.data):t.texImage2D(i.TEXTURE_2D,J,G,W.width,W.height,0,D,U,W.data)}else if(M.isDataArrayTexture)re?(_e&&t.texStorage3D(i.TEXTURE_2D_ARRAY,ye,G,se.width,se.height,se.depth),t.texSubImage3D(i.TEXTURE_2D_ARRAY,0,0,0,0,se.width,se.height,se.depth,D,U,se.data)):t.texImage3D(i.TEXTURE_2D_ARRAY,0,G,se.width,se.height,se.depth,0,D,U,se.data);else if(M.isData3DTexture)re?(_e&&t.texStorage3D(i.TEXTURE_3D,ye,G,se.width,se.height,se.depth),t.texSubImage3D(i.TEXTURE_3D,0,0,0,0,se.width,se.height,se.depth,D,U,se.data)):t.texImage3D(i.TEXTURE_3D,0,G,se.width,se.height,se.depth,0,D,U,se.data);else if(M.isFramebufferTexture){if(_e)if(re)t.texStorage2D(i.TEXTURE_2D,ye,G,se.width,se.height);else{let J=se.width,P=se.height;for(let ie=0;ie<ye;ie++)t.texImage2D(i.TEXTURE_2D,ie,G,J,P,0,D,U,null),J>>=1,P>>=1}}else if(ue.length>0&&at){re&&_e&&t.texStorage2D(i.TEXTURE_2D,ye,G,ue[0].width,ue[0].height);for(let J=0,P=ue.length;J<P;J++)W=ue[J],re?t.texSubImage2D(i.TEXTURE_2D,J,0,0,D,U,W):t.texImage2D(i.TEXTURE_2D,J,G,D,U,W);M.generateMipmaps=!1}else re?(_e&&t.texStorage2D(i.TEXTURE_2D,ye,G,se.width,se.height),t.texSubImage2D(i.TEXTURE_2D,0,0,0,D,U,se)):t.texImage2D(i.TEXTURE_2D,0,G,D,U,se);y(M,at)&&_(ae),Re.__version=le.version,M.onUpdate&&M.onUpdate(M)}E.__version=M.version}function Ce(E,M,H){if(M.image.length!==6)return;let ae=ne(E,M),oe=M.source;t.bindTexture(i.TEXTURE_CUBE_MAP,E.__webglTexture,i.TEXTURE0+H);let le=n.get(oe);if(oe.version!==le.__version||ae===!0){t.activeTexture(i.TEXTURE0+H);let Re=lt.getPrimaries(lt.workingColorSpace),xe=M.colorSpace===Rn?null:lt.getPrimaries(M.colorSpace),be=M.colorSpace===Rn||Re===xe?i.NONE:i.BROWSER_DEFAULT_WEBGL;i.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,M.flipY),i.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,M.premultiplyAlpha),i.pixelStorei(i.UNPACK_ALIGNMENT,M.unpackAlignment),i.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,be);let Pe=M.isCompressedTexture||M.image[0].isCompressedTexture,Be=M.image[0]&&M.image[0].isDataTexture,se=[];for(let J=0;J<6;J++)!Pe&&!Be?se[J]=x(M.image[J],!1,!0,s.maxCubemapSize):se[J]=Be?M.image[J].image:M.image[J],se[J]=We(M,se[J]);let at=se[0],D=m(at)||a,U=r.convert(M.format,M.colorSpace),G=r.convert(M.type),W=b(M.internalFormat,U,G,M.colorSpace),ue=a&&M.isVideoTexture!==!0,re=le.__version===void 0||ae===!0,_e=C(M,at,D);Y(i.TEXTURE_CUBE_MAP,M,D);let ye;if(Pe){ue&&re&&t.texStorage2D(i.TEXTURE_CUBE_MAP,_e,W,at.width,at.height);for(let J=0;J<6;J++){ye=se[J].mipmaps;for(let P=0;P<ye.length;P++){let ie=ye[P];M.format!==An?U!==null?ue?t.compressedTexSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+J,P,0,0,ie.width,ie.height,U,ie.data):t.compressedTexImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+J,P,W,ie.width,ie.height,0,ie.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):ue?t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+J,P,0,0,ie.width,ie.height,U,G,ie.data):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+J,P,W,ie.width,ie.height,0,U,G,ie.data)}}}else{ye=M.mipmaps,ue&&re&&(ye.length>0&&_e++,t.texStorage2D(i.TEXTURE_CUBE_MAP,_e,W,se[0].width,se[0].height));for(let J=0;J<6;J++)if(Be){ue?t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+J,0,0,0,se[J].width,se[J].height,U,G,se[J].data):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+J,0,W,se[J].width,se[J].height,0,U,G,se[J].data);for(let P=0;P<ye.length;P++){let ce=ye[P].image[J].image;ue?t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+J,P+1,0,0,ce.width,ce.height,U,G,ce.data):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+J,P+1,W,ce.width,ce.height,0,U,G,ce.data)}}else{ue?t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+J,0,0,0,U,G,se[J]):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+J,0,W,U,G,se[J]);for(let P=0;P<ye.length;P++){let ie=ye[P];ue?t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+J,P+1,0,0,U,G,ie.image[J]):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+J,P+1,W,U,G,ie.image[J])}}}y(M,D)&&_(i.TEXTURE_CUBE_MAP),le.__version=oe.version,M.onUpdate&&M.onUpdate(M)}E.__version=M.version}function we(E,M,H,ae,oe,le){let Re=r.convert(H.format,H.colorSpace),xe=r.convert(H.type),be=b(H.internalFormat,Re,xe,H.colorSpace);if(!n.get(M).__hasExternalTextures){let Be=Math.max(1,M.width>>le),se=Math.max(1,M.height>>le);oe===i.TEXTURE_3D||oe===i.TEXTURE_2D_ARRAY?t.texImage3D(oe,le,be,Be,se,M.depth,0,Re,xe,null):t.texImage2D(oe,le,be,Be,se,0,Re,xe,null)}t.bindFramebuffer(i.FRAMEBUFFER,E),Ee(M)?c.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,ae,oe,n.get(H).__webglTexture,0,Oe(M)):(oe===i.TEXTURE_2D||oe>=i.TEXTURE_CUBE_MAP_POSITIVE_X&&oe<=i.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&i.framebufferTexture2D(i.FRAMEBUFFER,ae,oe,n.get(H).__webglTexture,le),t.bindFramebuffer(i.FRAMEBUFFER,null)}function ze(E,M,H){if(i.bindRenderbuffer(i.RENDERBUFFER,E),M.depthBuffer&&!M.stencilBuffer){let ae=a===!0?i.DEPTH_COMPONENT24:i.DEPTH_COMPONENT16;if(H||Ee(M)){let oe=M.depthTexture;oe&&oe.isDepthTexture&&(oe.type===ai?ae=i.DEPTH_COMPONENT32F:oe.type===Ei&&(ae=i.DEPTH_COMPONENT24));let le=Oe(M);Ee(M)?c.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,le,ae,M.width,M.height):i.renderbufferStorageMultisample(i.RENDERBUFFER,le,ae,M.width,M.height)}else i.renderbufferStorage(i.RENDERBUFFER,ae,M.width,M.height);i.framebufferRenderbuffer(i.FRAMEBUFFER,i.DEPTH_ATTACHMENT,i.RENDERBUFFER,E)}else if(M.depthBuffer&&M.stencilBuffer){let ae=Oe(M);H&&Ee(M)===!1?i.renderbufferStorageMultisample(i.RENDERBUFFER,ae,i.DEPTH24_STENCIL8,M.width,M.height):Ee(M)?c.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,ae,i.DEPTH24_STENCIL8,M.width,M.height):i.renderbufferStorage(i.RENDERBUFFER,i.DEPTH_STENCIL,M.width,M.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.DEPTH_STENCIL_ATTACHMENT,i.RENDERBUFFER,E)}else{let ae=M.isWebGLMultipleRenderTargets===!0?M.texture:[M.texture];for(let oe=0;oe<ae.length;oe++){let le=ae[oe],Re=r.convert(le.format,le.colorSpace),xe=r.convert(le.type),be=b(le.internalFormat,Re,xe,le.colorSpace),Pe=Oe(M);H&&Ee(M)===!1?i.renderbufferStorageMultisample(i.RENDERBUFFER,Pe,be,M.width,M.height):Ee(M)?c.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,Pe,be,M.width,M.height):i.renderbufferStorage(i.RENDERBUFFER,be,M.width,M.height)}}i.bindRenderbuffer(i.RENDERBUFFER,null)}function Ve(E,M){if(M&&M.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(t.bindFramebuffer(i.FRAMEBUFFER,E),!(M.depthTexture&&M.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");(!n.get(M.depthTexture).__webglTexture||M.depthTexture.image.width!==M.width||M.depthTexture.image.height!==M.height)&&(M.depthTexture.image.width=M.width,M.depthTexture.image.height=M.height,M.depthTexture.needsUpdate=!0),Q(M.depthTexture,0);let ae=n.get(M.depthTexture).__webglTexture,oe=Oe(M);if(M.depthTexture.format===Ji)Ee(M)?c.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,i.DEPTH_ATTACHMENT,i.TEXTURE_2D,ae,0,oe):i.framebufferTexture2D(i.FRAMEBUFFER,i.DEPTH_ATTACHMENT,i.TEXTURE_2D,ae,0);else if(M.depthTexture.format===Ys)Ee(M)?c.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,i.DEPTH_STENCIL_ATTACHMENT,i.TEXTURE_2D,ae,0,oe):i.framebufferTexture2D(i.FRAMEBUFFER,i.DEPTH_STENCIL_ATTACHMENT,i.TEXTURE_2D,ae,0);else throw new Error("Unknown depthTexture format")}function De(E){let M=n.get(E),H=E.isWebGLCubeRenderTarget===!0;if(E.depthTexture&&!M.__autoAllocateDepthBuffer){if(H)throw new Error("target.depthTexture not supported in Cube render targets");Ve(M.__webglFramebuffer,E)}else if(H){M.__webglDepthbuffer=[];for(let ae=0;ae<6;ae++)t.bindFramebuffer(i.FRAMEBUFFER,M.__webglFramebuffer[ae]),M.__webglDepthbuffer[ae]=i.createRenderbuffer(),ze(M.__webglDepthbuffer[ae],E,!1)}else t.bindFramebuffer(i.FRAMEBUFFER,M.__webglFramebuffer),M.__webglDepthbuffer=i.createRenderbuffer(),ze(M.__webglDepthbuffer,E,!1);t.bindFramebuffer(i.FRAMEBUFFER,null)}function rt(E,M,H){let ae=n.get(E);M!==void 0&&we(ae.__webglFramebuffer,E,E.texture,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,0),H!==void 0&&De(E)}function k(E){let M=E.texture,H=n.get(E),ae=n.get(M);E.addEventListener("dispose",O),E.isWebGLMultipleRenderTargets!==!0&&(ae.__webglTexture===void 0&&(ae.__webglTexture=i.createTexture()),ae.__version=M.version,o.memory.textures++);let oe=E.isWebGLCubeRenderTarget===!0,le=E.isWebGLMultipleRenderTargets===!0,Re=m(E)||a;if(oe){H.__webglFramebuffer=[];for(let xe=0;xe<6;xe++)if(a&&M.mipmaps&&M.mipmaps.length>0){H.__webglFramebuffer[xe]=[];for(let be=0;be<M.mipmaps.length;be++)H.__webglFramebuffer[xe][be]=i.createFramebuffer()}else H.__webglFramebuffer[xe]=i.createFramebuffer()}else{if(a&&M.mipmaps&&M.mipmaps.length>0){H.__webglFramebuffer=[];for(let xe=0;xe<M.mipmaps.length;xe++)H.__webglFramebuffer[xe]=i.createFramebuffer()}else H.__webglFramebuffer=i.createFramebuffer();if(le)if(s.drawBuffers){let xe=E.texture;for(let be=0,Pe=xe.length;be<Pe;be++){let Be=n.get(xe[be]);Be.__webglTexture===void 0&&(Be.__webglTexture=i.createTexture(),o.memory.textures++)}}else console.warn("THREE.WebGLRenderer: WebGLMultipleRenderTargets can only be used with WebGL2 or WEBGL_draw_buffers extension.");if(a&&E.samples>0&&Ee(E)===!1){let xe=le?M:[M];H.__webglMultisampledFramebuffer=i.createFramebuffer(),H.__webglColorRenderbuffer=[],t.bindFramebuffer(i.FRAMEBUFFER,H.__webglMultisampledFramebuffer);for(let be=0;be<xe.length;be++){let Pe=xe[be];H.__webglColorRenderbuffer[be]=i.createRenderbuffer(),i.bindRenderbuffer(i.RENDERBUFFER,H.__webglColorRenderbuffer[be]);let Be=r.convert(Pe.format,Pe.colorSpace),se=r.convert(Pe.type),at=b(Pe.internalFormat,Be,se,Pe.colorSpace,E.isXRRenderTarget===!0),D=Oe(E);i.renderbufferStorageMultisample(i.RENDERBUFFER,D,at,E.width,E.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+be,i.RENDERBUFFER,H.__webglColorRenderbuffer[be])}i.bindRenderbuffer(i.RENDERBUFFER,null),E.depthBuffer&&(H.__webglDepthRenderbuffer=i.createRenderbuffer(),ze(H.__webglDepthRenderbuffer,E,!0)),t.bindFramebuffer(i.FRAMEBUFFER,null)}}if(oe){t.bindTexture(i.TEXTURE_CUBE_MAP,ae.__webglTexture),Y(i.TEXTURE_CUBE_MAP,M,Re);for(let xe=0;xe<6;xe++)if(a&&M.mipmaps&&M.mipmaps.length>0)for(let be=0;be<M.mipmaps.length;be++)we(H.__webglFramebuffer[xe][be],E,M,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+xe,be);else we(H.__webglFramebuffer[xe],E,M,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+xe,0);y(M,Re)&&_(i.TEXTURE_CUBE_MAP),t.unbindTexture()}else if(le){let xe=E.texture;for(let be=0,Pe=xe.length;be<Pe;be++){let Be=xe[be],se=n.get(Be);t.bindTexture(i.TEXTURE_2D,se.__webglTexture),Y(i.TEXTURE_2D,Be,Re),we(H.__webglFramebuffer,E,Be,i.COLOR_ATTACHMENT0+be,i.TEXTURE_2D,0),y(Be,Re)&&_(i.TEXTURE_2D)}t.unbindTexture()}else{let xe=i.TEXTURE_2D;if((E.isWebGL3DRenderTarget||E.isWebGLArrayRenderTarget)&&(a?xe=E.isWebGL3DRenderTarget?i.TEXTURE_3D:i.TEXTURE_2D_ARRAY:console.error("THREE.WebGLTextures: THREE.Data3DTexture and THREE.DataArrayTexture only supported with WebGL2.")),t.bindTexture(xe,ae.__webglTexture),Y(xe,M,Re),a&&M.mipmaps&&M.mipmaps.length>0)for(let be=0;be<M.mipmaps.length;be++)we(H.__webglFramebuffer[be],E,M,i.COLOR_ATTACHMENT0,xe,be);else we(H.__webglFramebuffer,E,M,i.COLOR_ATTACHMENT0,xe,0);y(M,Re)&&_(xe),t.unbindTexture()}E.depthBuffer&&De(E)}function $t(E){let M=m(E)||a,H=E.isWebGLMultipleRenderTargets===!0?E.texture:[E.texture];for(let ae=0,oe=H.length;ae<oe;ae++){let le=H[ae];if(y(le,M)){let Re=E.isWebGLCubeRenderTarget?i.TEXTURE_CUBE_MAP:i.TEXTURE_2D,xe=n.get(le).__webglTexture;t.bindTexture(Re,xe),_(Re),t.unbindTexture()}}}function Ie(E){if(a&&E.samples>0&&Ee(E)===!1){let M=E.isWebGLMultipleRenderTargets?E.texture:[E.texture],H=E.width,ae=E.height,oe=i.COLOR_BUFFER_BIT,le=[],Re=E.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,xe=n.get(E),be=E.isWebGLMultipleRenderTargets===!0;if(be)for(let Pe=0;Pe<M.length;Pe++)t.bindFramebuffer(i.FRAMEBUFFER,xe.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+Pe,i.RENDERBUFFER,null),t.bindFramebuffer(i.FRAMEBUFFER,xe.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+Pe,i.TEXTURE_2D,null,0);t.bindFramebuffer(i.READ_FRAMEBUFFER,xe.__webglMultisampledFramebuffer),t.bindFramebuffer(i.DRAW_FRAMEBUFFER,xe.__webglFramebuffer);for(let Pe=0;Pe<M.length;Pe++){le.push(i.COLOR_ATTACHMENT0+Pe),E.depthBuffer&&le.push(Re);let Be=xe.__ignoreDepthValues!==void 0?xe.__ignoreDepthValues:!1;if(Be===!1&&(E.depthBuffer&&(oe|=i.DEPTH_BUFFER_BIT),E.stencilBuffer&&(oe|=i.STENCIL_BUFFER_BIT)),be&&i.framebufferRenderbuffer(i.READ_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.RENDERBUFFER,xe.__webglColorRenderbuffer[Pe]),Be===!0&&(i.invalidateFramebuffer(i.READ_FRAMEBUFFER,[Re]),i.invalidateFramebuffer(i.DRAW_FRAMEBUFFER,[Re])),be){let se=n.get(M[Pe]).__webglTexture;i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,se,0)}i.blitFramebuffer(0,0,H,ae,0,0,H,ae,oe,i.NEAREST),l&&i.invalidateFramebuffer(i.READ_FRAMEBUFFER,le)}if(t.bindFramebuffer(i.READ_FRAMEBUFFER,null),t.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),be)for(let Pe=0;Pe<M.length;Pe++){t.bindFramebuffer(i.FRAMEBUFFER,xe.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+Pe,i.RENDERBUFFER,xe.__webglColorRenderbuffer[Pe]);let Be=n.get(M[Pe]).__webglTexture;t.bindFramebuffer(i.FRAMEBUFFER,xe.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+Pe,i.TEXTURE_2D,Be,0)}t.bindFramebuffer(i.DRAW_FRAMEBUFFER,xe.__webglMultisampledFramebuffer)}}function Oe(E){return Math.min(s.maxSamples,E.samples)}function Ee(E){let M=n.get(E);return a&&E.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&M.__useRenderToTexture!==!1}function vt(E){let M=o.render.frame;h.get(E)!==M&&(h.set(E,M),E.update())}function We(E,M){let H=E.colorSpace,ae=E.format,oe=E.type;return E.isCompressedTexture===!0||E.isVideoTexture===!0||E.format===Xc||H!==Xt&&H!==Rn&&(lt.getTransfer(H)===Mt?a===!1?e.has("EXT_sRGB")===!0&&ae===An?(E.format=Xc,E.minFilter=un,E.generateMipmaps=!1):M=Zo.sRGBToLinear(M):(ae!==An||oe!==Ci)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",H)),M}this.allocateTextureUnit=z,this.resetTextureUnits=ee,this.setTexture2D=Q,this.setTexture2DArray=Z,this.setTexture3D=K,this.setTextureCube=$,this.rebindTextures=rt,this.setupRenderTarget=k,this.updateRenderTargetMipmap=$t,this.updateMultisampleRenderTarget=Ie,this.setupDepthRenderbuffer=De,this.setupFrameBufferTexture=we,this.useMultisampledRTT=Ee}function ly(i,e,t){let n=t.isWebGL2;function s(r,o=Rn){let a,c=lt.getTransfer(o);if(r===Ci)return i.UNSIGNED_BYTE;if(r===Pd)return i.UNSIGNED_SHORT_4_4_4_4;if(r===Ld)return i.UNSIGNED_SHORT_5_5_5_1;if(r===Hp)return i.BYTE;if(r===Gp)return i.SHORT;if(r===Sl)return i.UNSIGNED_SHORT;if(r===Cd)return i.INT;if(r===Ei)return i.UNSIGNED_INT;if(r===ai)return i.FLOAT;if(r===Nr)return n?i.HALF_FLOAT:(a=e.get("OES_texture_half_float"),a!==null?a.HALF_FLOAT_OES:null);if(r===Vp)return i.ALPHA;if(r===An)return i.RGBA;if(r===Wp)return i.LUMINANCE;if(r===Xp)return i.LUMINANCE_ALPHA;if(r===Ji)return i.DEPTH_COMPONENT;if(r===Ys)return i.DEPTH_STENCIL;if(r===Xc)return a=e.get("EXT_sRGB"),a!==null?a.SRGB_ALPHA_EXT:null;if(r===qp)return i.RED;if(r===Id)return i.RED_INTEGER;if(r===Yp)return i.RG;if(r===zd)return i.RG_INTEGER;if(r===Dd)return i.RGBA_INTEGER;if(r===ac||r===cc||r===lc||r===hc)if(c===Mt)if(a=e.get("WEBGL_compressed_texture_s3tc_srgb"),a!==null){if(r===ac)return a.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(r===cc)return a.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(r===lc)return a.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(r===hc)return a.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(a=e.get("WEBGL_compressed_texture_s3tc"),a!==null){if(r===ac)return a.COMPRESSED_RGB_S3TC_DXT1_EXT;if(r===cc)return a.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(r===lc)return a.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(r===hc)return a.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(r===$h||r===Jh||r===Qh||r===eu)if(a=e.get("WEBGL_compressed_texture_pvrtc"),a!==null){if(r===$h)return a.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(r===Jh)return a.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(r===Qh)return a.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(r===eu)return a.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(r===Nd)return a=e.get("WEBGL_compressed_texture_etc1"),a!==null?a.COMPRESSED_RGB_ETC1_WEBGL:null;if(r===tu||r===nu)if(a=e.get("WEBGL_compressed_texture_etc"),a!==null){if(r===tu)return c===Mt?a.COMPRESSED_SRGB8_ETC2:a.COMPRESSED_RGB8_ETC2;if(r===nu)return c===Mt?a.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:a.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(r===iu||r===su||r===ru||r===ou||r===au||r===cu||r===lu||r===hu||r===uu||r===du||r===fu||r===pu||r===mu||r===gu)if(a=e.get("WEBGL_compressed_texture_astc"),a!==null){if(r===iu)return c===Mt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:a.COMPRESSED_RGBA_ASTC_4x4_KHR;if(r===su)return c===Mt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:a.COMPRESSED_RGBA_ASTC_5x4_KHR;if(r===ru)return c===Mt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:a.COMPRESSED_RGBA_ASTC_5x5_KHR;if(r===ou)return c===Mt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:a.COMPRESSED_RGBA_ASTC_6x5_KHR;if(r===au)return c===Mt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:a.COMPRESSED_RGBA_ASTC_6x6_KHR;if(r===cu)return c===Mt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:a.COMPRESSED_RGBA_ASTC_8x5_KHR;if(r===lu)return c===Mt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:a.COMPRESSED_RGBA_ASTC_8x6_KHR;if(r===hu)return c===Mt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:a.COMPRESSED_RGBA_ASTC_8x8_KHR;if(r===uu)return c===Mt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:a.COMPRESSED_RGBA_ASTC_10x5_KHR;if(r===du)return c===Mt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:a.COMPRESSED_RGBA_ASTC_10x6_KHR;if(r===fu)return c===Mt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:a.COMPRESSED_RGBA_ASTC_10x8_KHR;if(r===pu)return c===Mt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:a.COMPRESSED_RGBA_ASTC_10x10_KHR;if(r===mu)return c===Mt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:a.COMPRESSED_RGBA_ASTC_12x10_KHR;if(r===gu)return c===Mt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:a.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(r===uc||r===xu||r===_u)if(a=e.get("EXT_texture_compression_bptc"),a!==null){if(r===uc)return c===Mt?a.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:a.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(r===xu)return a.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(r===_u)return a.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(r===jp||r===yu||r===vu||r===Mu)if(a=e.get("EXT_texture_compression_rgtc"),a!==null){if(r===uc)return a.COMPRESSED_RED_RGTC1_EXT;if(r===yu)return a.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(r===vu)return a.COMPRESSED_RED_GREEN_RGTC2_EXT;if(r===Mu)return a.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return r===$i?n?i.UNSIGNED_INT_24_8:(a=e.get("WEBGL_depth_texture"),a!==null?a.UNSIGNED_INT_24_8_WEBGL:null):i[r]!==void 0?i[r]:null}return{convert:s}}var rl=class extends Wt{constructor(e=[]){super(),this.isArrayCamera=!0,this.cameras=e}},ke=class extends bt{constructor(){super(),this.isGroup=!0,this.type="Group"}},hy={type:"move"},zr=class{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new ke,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new ke,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new I,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new I),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new ke,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new I,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new I),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){let t=this._hand;if(t)for(let n of e.hand.values())this._getHandJoint(t,n)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,t,n){let s=null,r=null,o=null,a=this._targetRay,c=this._grip,l=this._hand;if(e&&t.session.visibilityState!=="visible-blurred"){if(l&&e.hand){o=!0;for(let x of e.hand.values()){let m=t.getJointPose(x,n),p=this._getHandJoint(l,x);m!==null&&(p.matrix.fromArray(m.transform.matrix),p.matrix.decompose(p.position,p.rotation,p.scale),p.matrixWorldNeedsUpdate=!0,p.jointRadius=m.radius),p.visible=m!==null}let h=l.joints["index-finger-tip"],u=l.joints["thumb-tip"],d=h.position.distanceTo(u.position),f=.02,g=.005;l.inputState.pinching&&d>f+g?(l.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!l.inputState.pinching&&d<=f-g&&(l.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else c!==null&&e.gripSpace&&(r=t.getPose(e.gripSpace,n),r!==null&&(c.matrix.fromArray(r.transform.matrix),c.matrix.decompose(c.position,c.rotation,c.scale),c.matrixWorldNeedsUpdate=!0,r.linearVelocity?(c.hasLinearVelocity=!0,c.linearVelocity.copy(r.linearVelocity)):c.hasLinearVelocity=!1,r.angularVelocity?(c.hasAngularVelocity=!0,c.angularVelocity.copy(r.angularVelocity)):c.hasAngularVelocity=!1));a!==null&&(s=t.getPose(e.targetRaySpace,n),s===null&&r!==null&&(s=r),s!==null&&(a.matrix.fromArray(s.transform.matrix),a.matrix.decompose(a.position,a.rotation,a.scale),a.matrixWorldNeedsUpdate=!0,s.linearVelocity?(a.hasLinearVelocity=!0,a.linearVelocity.copy(s.linearVelocity)):a.hasLinearVelocity=!1,s.angularVelocity?(a.hasAngularVelocity=!0,a.angularVelocity.copy(s.angularVelocity)):a.hasAngularVelocity=!1,this.dispatchEvent(hy)))}return a!==null&&(a.visible=s!==null),c!==null&&(c.visible=r!==null),l!==null&&(l.visible=o!==null),this}_getHandJoint(e,t){if(e.joints[t.jointName]===void 0){let n=new ke;n.matrixAutoUpdate=!1,n.visible=!1,e.joints[t.jointName]=n,e.add(n)}return e.joints[t.jointName]}},ol=class extends li{constructor(e,t){super();let n=this,s=null,r=1,o=null,a="local-floor",c=1,l=null,h=null,u=null,d=null,f=null,g=null,x=t.getContextAttributes(),m=null,p=null,y=[],_=[],b=new He,C=null,A=new Wt;A.layers.enable(1),A.viewport=new pt;let R=new Wt;R.layers.enable(2),R.viewport=new pt;let O=[A,R],v=new rl;v.layers.enable(1),v.layers.enable(2);let S=null,F=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(Y){let ne=y[Y];return ne===void 0&&(ne=new zr,y[Y]=ne),ne.getTargetRaySpace()},this.getControllerGrip=function(Y){let ne=y[Y];return ne===void 0&&(ne=new zr,y[Y]=ne),ne.getGripSpace()},this.getHand=function(Y){let ne=y[Y];return ne===void 0&&(ne=new zr,y[Y]=ne),ne.getHandSpace()};function j(Y){let ne=_.indexOf(Y.inputSource);if(ne===-1)return;let me=y[ne];me!==void 0&&(me.update(Y.inputSource,Y.frame,l||o),me.dispatchEvent({type:Y.type,data:Y.inputSource}))}function ee(){s.removeEventListener("select",j),s.removeEventListener("selectstart",j),s.removeEventListener("selectend",j),s.removeEventListener("squeeze",j),s.removeEventListener("squeezestart",j),s.removeEventListener("squeezeend",j),s.removeEventListener("end",ee),s.removeEventListener("inputsourceschange",z);for(let Y=0;Y<y.length;Y++){let ne=_[Y];ne!==null&&(_[Y]=null,y[Y].disconnect(ne))}S=null,F=null,e.setRenderTarget(m),f=null,d=null,u=null,s=null,p=null,pe.stop(),n.isPresenting=!1,e.setPixelRatio(C),e.setSize(b.width,b.height,!1),n.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(Y){r=Y,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(Y){a=Y,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return l||o},this.setReferenceSpace=function(Y){l=Y},this.getBaseLayer=function(){return d!==null?d:f},this.getBinding=function(){return u},this.getFrame=function(){return g},this.getSession=function(){return s},this.setSession=async function(Y){if(s=Y,s!==null){if(m=e.getRenderTarget(),s.addEventListener("select",j),s.addEventListener("selectstart",j),s.addEventListener("selectend",j),s.addEventListener("squeeze",j),s.addEventListener("squeezestart",j),s.addEventListener("squeezeend",j),s.addEventListener("end",ee),s.addEventListener("inputsourceschange",z),x.xrCompatible!==!0&&await t.makeXRCompatible(),C=e.getPixelRatio(),e.getSize(b),s.renderState.layers===void 0||e.capabilities.isWebGL2===!1){let ne={antialias:s.renderState.layers===void 0?x.antialias:!0,alpha:!0,depth:x.depth,stencil:x.stencil,framebufferScaleFactor:r};f=new XRWebGLLayer(s,t,ne),s.updateRenderState({baseLayer:f}),e.setPixelRatio(1),e.setSize(f.framebufferWidth,f.framebufferHeight,!1),p=new hi(f.framebufferWidth,f.framebufferHeight,{format:An,type:Ci,colorSpace:e.outputColorSpace,stencilBuffer:x.stencil})}else{let ne=null,me=null,Ce=null;x.depth&&(Ce=x.stencil?t.DEPTH24_STENCIL8:t.DEPTH_COMPONENT24,ne=x.stencil?Ys:Ji,me=x.stencil?$i:Ei);let we={colorFormat:t.RGBA8,depthFormat:Ce,scaleFactor:r};u=new XRWebGLBinding(s,t),d=u.createProjectionLayer(we),s.updateRenderState({layers:[d]}),e.setPixelRatio(1),e.setSize(d.textureWidth,d.textureHeight,!1),p=new hi(d.textureWidth,d.textureHeight,{format:An,type:Ci,depthTexture:new ra(d.textureWidth,d.textureHeight,me,void 0,void 0,void 0,void 0,void 0,void 0,ne),stencilBuffer:x.stencil,colorSpace:e.outputColorSpace,samples:x.antialias?4:0});let ze=e.properties.get(p);ze.__ignoreDepthValues=d.ignoreDepthValues}p.isXRRenderTarget=!0,this.setFoveation(c),l=null,o=await s.requestReferenceSpace(a),pe.setContext(s),pe.start(),n.isPresenting=!0,n.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(s!==null)return s.environmentBlendMode};function z(Y){for(let ne=0;ne<Y.removed.length;ne++){let me=Y.removed[ne],Ce=_.indexOf(me);Ce>=0&&(_[Ce]=null,y[Ce].disconnect(me))}for(let ne=0;ne<Y.added.length;ne++){let me=Y.added[ne],Ce=_.indexOf(me);if(Ce===-1){for(let ze=0;ze<y.length;ze++)if(ze>=_.length){_.push(me),Ce=ze;break}else if(_[ze]===null){_[ze]=me,Ce=ze;break}if(Ce===-1)break}let we=y[Ce];we&&we.connect(me)}}let B=new I,Q=new I;function Z(Y,ne,me){B.setFromMatrixPosition(ne.matrixWorld),Q.setFromMatrixPosition(me.matrixWorld);let Ce=B.distanceTo(Q),we=ne.projectionMatrix.elements,ze=me.projectionMatrix.elements,Ve=we[14]/(we[10]-1),De=we[14]/(we[10]+1),rt=(we[9]+1)/we[5],k=(we[9]-1)/we[5],$t=(we[8]-1)/we[0],Ie=(ze[8]+1)/ze[0],Oe=Ve*$t,Ee=Ve*Ie,vt=Ce/(-$t+Ie),We=vt*-$t;ne.matrixWorld.decompose(Y.position,Y.quaternion,Y.scale),Y.translateX(We),Y.translateZ(vt),Y.matrixWorld.compose(Y.position,Y.quaternion,Y.scale),Y.matrixWorldInverse.copy(Y.matrixWorld).invert();let E=Ve+vt,M=De+vt,H=Oe-We,ae=Ee+(Ce-We),oe=rt*De/M*E,le=k*De/M*E;Y.projectionMatrix.makePerspective(H,ae,oe,le,E,M),Y.projectionMatrixInverse.copy(Y.projectionMatrix).invert()}function K(Y,ne){ne===null?Y.matrixWorld.copy(Y.matrix):Y.matrixWorld.multiplyMatrices(ne.matrixWorld,Y.matrix),Y.matrixWorldInverse.copy(Y.matrixWorld).invert()}this.updateCamera=function(Y){if(s===null)return;v.near=R.near=A.near=Y.near,v.far=R.far=A.far=Y.far,(S!==v.near||F!==v.far)&&(s.updateRenderState({depthNear:v.near,depthFar:v.far}),S=v.near,F=v.far);let ne=Y.parent,me=v.cameras;K(v,ne);for(let Ce=0;Ce<me.length;Ce++)K(me[Ce],ne);me.length===2?Z(v,A,R):v.projectionMatrix.copy(A.projectionMatrix),$(Y,v,ne)};function $(Y,ne,me){me===null?Y.matrix.copy(ne.matrixWorld):(Y.matrix.copy(me.matrixWorld),Y.matrix.invert(),Y.matrix.multiply(ne.matrixWorld)),Y.matrix.decompose(Y.position,Y.quaternion,Y.scale),Y.updateMatrixWorld(!0),Y.projectionMatrix.copy(ne.projectionMatrix),Y.projectionMatrixInverse.copy(ne.projectionMatrixInverse),Y.isPerspectiveCamera&&(Y.fov=Zs*2*Math.atan(1/Y.projectionMatrix.elements[5]),Y.zoom=1)}this.getCamera=function(){return v},this.getFoveation=function(){if(!(d===null&&f===null))return c},this.setFoveation=function(Y){c=Y,d!==null&&(d.fixedFoveation=Y),f!==null&&f.fixedFoveation!==void 0&&(f.fixedFoveation=Y)};let te=null;function he(Y,ne){if(h=ne.getViewerPose(l||o),g=ne,h!==null){let me=h.views;f!==null&&(e.setRenderTargetFramebuffer(p,f.framebuffer),e.setRenderTarget(p));let Ce=!1;me.length!==v.cameras.length&&(v.cameras.length=0,Ce=!0);for(let we=0;we<me.length;we++){let ze=me[we],Ve=null;if(f!==null)Ve=f.getViewport(ze);else{let rt=u.getViewSubImage(d,ze);Ve=rt.viewport,we===0&&(e.setRenderTargetTextures(p,rt.colorTexture,d.ignoreDepthValues?void 0:rt.depthStencilTexture),e.setRenderTarget(p))}let De=O[we];De===void 0&&(De=new Wt,De.layers.enable(we),De.viewport=new pt,O[we]=De),De.matrix.fromArray(ze.transform.matrix),De.matrix.decompose(De.position,De.quaternion,De.scale),De.projectionMatrix.fromArray(ze.projectionMatrix),De.projectionMatrixInverse.copy(De.projectionMatrix).invert(),De.viewport.set(Ve.x,Ve.y,Ve.width,Ve.height),we===0&&(v.matrix.copy(De.matrix),v.matrix.decompose(v.position,v.quaternion,v.scale)),Ce===!0&&v.cameras.push(De)}}for(let me=0;me<y.length;me++){let Ce=_[me],we=y[me];Ce!==null&&we!==void 0&&we.update(Ce,ne,l||o)}te&&te(Y,ne),ne.detectedPlanes&&n.dispatchEvent({type:"planesdetected",data:ne}),g=null}let pe=new Gd;pe.setAnimationLoop(he),this.setAnimationLoop=function(Y){te=Y},this.dispose=function(){}}};function uy(i,e){function t(m,p){m.matrixAutoUpdate===!0&&m.updateMatrix(),p.value.copy(m.matrix)}function n(m,p){p.color.getRGB(m.fogColor.value,Hd(i)),p.isFog?(m.fogNear.value=p.near,m.fogFar.value=p.far):p.isFogExp2&&(m.fogDensity.value=p.density)}function s(m,p,y,_,b){p.isMeshBasicMaterial||p.isMeshLambertMaterial?r(m,p):p.isMeshToonMaterial?(r(m,p),u(m,p)):p.isMeshPhongMaterial?(r(m,p),h(m,p)):p.isMeshStandardMaterial?(r(m,p),d(m,p),p.isMeshPhysicalMaterial&&f(m,p,b)):p.isMeshMatcapMaterial?(r(m,p),g(m,p)):p.isMeshDepthMaterial?r(m,p):p.isMeshDistanceMaterial?(r(m,p),x(m,p)):p.isMeshNormalMaterial?r(m,p):p.isLineBasicMaterial?(o(m,p),p.isLineDashedMaterial&&a(m,p)):p.isPointsMaterial?c(m,p,y,_):p.isSpriteMaterial?l(m,p):p.isShadowMaterial?(m.color.value.copy(p.color),m.opacity.value=p.opacity):p.isShaderMaterial&&(p.uniformsNeedUpdate=!1)}function r(m,p){m.opacity.value=p.opacity,p.color&&m.diffuse.value.copy(p.color),p.emissive&&m.emissive.value.copy(p.emissive).multiplyScalar(p.emissiveIntensity),p.map&&(m.map.value=p.map,t(p.map,m.mapTransform)),p.alphaMap&&(m.alphaMap.value=p.alphaMap,t(p.alphaMap,m.alphaMapTransform)),p.bumpMap&&(m.bumpMap.value=p.bumpMap,t(p.bumpMap,m.bumpMapTransform),m.bumpScale.value=p.bumpScale,p.side===gn&&(m.bumpScale.value*=-1)),p.normalMap&&(m.normalMap.value=p.normalMap,t(p.normalMap,m.normalMapTransform),m.normalScale.value.copy(p.normalScale),p.side===gn&&m.normalScale.value.negate()),p.displacementMap&&(m.displacementMap.value=p.displacementMap,t(p.displacementMap,m.displacementMapTransform),m.displacementScale.value=p.displacementScale,m.displacementBias.value=p.displacementBias),p.emissiveMap&&(m.emissiveMap.value=p.emissiveMap,t(p.emissiveMap,m.emissiveMapTransform)),p.specularMap&&(m.specularMap.value=p.specularMap,t(p.specularMap,m.specularMapTransform)),p.alphaTest>0&&(m.alphaTest.value=p.alphaTest);let y=e.get(p).envMap;if(y&&(m.envMap.value=y,m.flipEnvMap.value=y.isCubeTexture&&y.isRenderTargetTexture===!1?-1:1,m.reflectivity.value=p.reflectivity,m.ior.value=p.ior,m.refractionRatio.value=p.refractionRatio),p.lightMap){m.lightMap.value=p.lightMap;let _=i._useLegacyLights===!0?Math.PI:1;m.lightMapIntensity.value=p.lightMapIntensity*_,t(p.lightMap,m.lightMapTransform)}p.aoMap&&(m.aoMap.value=p.aoMap,m.aoMapIntensity.value=p.aoMapIntensity,t(p.aoMap,m.aoMapTransform))}function o(m,p){m.diffuse.value.copy(p.color),m.opacity.value=p.opacity,p.map&&(m.map.value=p.map,t(p.map,m.mapTransform))}function a(m,p){m.dashSize.value=p.dashSize,m.totalSize.value=p.dashSize+p.gapSize,m.scale.value=p.scale}function c(m,p,y,_){m.diffuse.value.copy(p.color),m.opacity.value=p.opacity,m.size.value=p.size*y,m.scale.value=_*.5,p.map&&(m.map.value=p.map,t(p.map,m.uvTransform)),p.alphaMap&&(m.alphaMap.value=p.alphaMap,t(p.alphaMap,m.alphaMapTransform)),p.alphaTest>0&&(m.alphaTest.value=p.alphaTest)}function l(m,p){m.diffuse.value.copy(p.color),m.opacity.value=p.opacity,m.rotation.value=p.rotation,p.map&&(m.map.value=p.map,t(p.map,m.mapTransform)),p.alphaMap&&(m.alphaMap.value=p.alphaMap,t(p.alphaMap,m.alphaMapTransform)),p.alphaTest>0&&(m.alphaTest.value=p.alphaTest)}function h(m,p){m.specular.value.copy(p.specular),m.shininess.value=Math.max(p.shininess,1e-4)}function u(m,p){p.gradientMap&&(m.gradientMap.value=p.gradientMap)}function d(m,p){m.metalness.value=p.metalness,p.metalnessMap&&(m.metalnessMap.value=p.metalnessMap,t(p.metalnessMap,m.metalnessMapTransform)),m.roughness.value=p.roughness,p.roughnessMap&&(m.roughnessMap.value=p.roughnessMap,t(p.roughnessMap,m.roughnessMapTransform)),e.get(p).envMap&&(m.envMapIntensity.value=p.envMapIntensity)}function f(m,p,y){m.ior.value=p.ior,p.sheen>0&&(m.sheenColor.value.copy(p.sheenColor).multiplyScalar(p.sheen),m.sheenRoughness.value=p.sheenRoughness,p.sheenColorMap&&(m.sheenColorMap.value=p.sheenColorMap,t(p.sheenColorMap,m.sheenColorMapTransform)),p.sheenRoughnessMap&&(m.sheenRoughnessMap.value=p.sheenRoughnessMap,t(p.sheenRoughnessMap,m.sheenRoughnessMapTransform))),p.clearcoat>0&&(m.clearcoat.value=p.clearcoat,m.clearcoatRoughness.value=p.clearcoatRoughness,p.clearcoatMap&&(m.clearcoatMap.value=p.clearcoatMap,t(p.clearcoatMap,m.clearcoatMapTransform)),p.clearcoatRoughnessMap&&(m.clearcoatRoughnessMap.value=p.clearcoatRoughnessMap,t(p.clearcoatRoughnessMap,m.clearcoatRoughnessMapTransform)),p.clearcoatNormalMap&&(m.clearcoatNormalMap.value=p.clearcoatNormalMap,t(p.clearcoatNormalMap,m.clearcoatNormalMapTransform),m.clearcoatNormalScale.value.copy(p.clearcoatNormalScale),p.side===gn&&m.clearcoatNormalScale.value.negate())),p.iridescence>0&&(m.iridescence.value=p.iridescence,m.iridescenceIOR.value=p.iridescenceIOR,m.iridescenceThicknessMinimum.value=p.iridescenceThicknessRange[0],m.iridescenceThicknessMaximum.value=p.iridescenceThicknessRange[1],p.iridescenceMap&&(m.iridescenceMap.value=p.iridescenceMap,t(p.iridescenceMap,m.iridescenceMapTransform)),p.iridescenceThicknessMap&&(m.iridescenceThicknessMap.value=p.iridescenceThicknessMap,t(p.iridescenceThicknessMap,m.iridescenceThicknessMapTransform))),p.transmission>0&&(m.transmission.value=p.transmission,m.transmissionSamplerMap.value=y.texture,m.transmissionSamplerSize.value.set(y.width,y.height),p.transmissionMap&&(m.transmissionMap.value=p.transmissionMap,t(p.transmissionMap,m.transmissionMapTransform)),m.thickness.value=p.thickness,p.thicknessMap&&(m.thicknessMap.value=p.thicknessMap,t(p.thicknessMap,m.thicknessMapTransform)),m.attenuationDistance.value=p.attenuationDistance,m.attenuationColor.value.copy(p.attenuationColor)),p.anisotropy>0&&(m.anisotropyVector.value.set(p.anisotropy*Math.cos(p.anisotropyRotation),p.anisotropy*Math.sin(p.anisotropyRotation)),p.anisotropyMap&&(m.anisotropyMap.value=p.anisotropyMap,t(p.anisotropyMap,m.anisotropyMapTransform))),m.specularIntensity.value=p.specularIntensity,m.specularColor.value.copy(p.specularColor),p.specularColorMap&&(m.specularColorMap.value=p.specularColorMap,t(p.specularColorMap,m.specularColorMapTransform)),p.specularIntensityMap&&(m.specularIntensityMap.value=p.specularIntensityMap,t(p.specularIntensityMap,m.specularIntensityMapTransform))}function g(m,p){p.matcap&&(m.matcap.value=p.matcap)}function x(m,p){let y=e.get(p).light;m.referencePosition.value.setFromMatrixPosition(y.matrixWorld),m.nearDistance.value=y.shadow.camera.near,m.farDistance.value=y.shadow.camera.far}return{refreshFogUniforms:n,refreshMaterialUniforms:s}}function dy(i,e,t,n){let s={},r={},o=[],a=t.isWebGL2?i.getParameter(i.MAX_UNIFORM_BUFFER_BINDINGS):0;function c(y,_){let b=_.program;n.uniformBlockBinding(y,b)}function l(y,_){let b=s[y.id];b===void 0&&(g(y),b=h(y),s[y.id]=b,y.addEventListener("dispose",m));let C=_.program;n.updateUBOMapping(y,C);let A=e.render.frame;r[y.id]!==A&&(d(y),r[y.id]=A)}function h(y){let _=u();y.__bindingPointIndex=_;let b=i.createBuffer(),C=y.__size,A=y.usage;return i.bindBuffer(i.UNIFORM_BUFFER,b),i.bufferData(i.UNIFORM_BUFFER,C,A),i.bindBuffer(i.UNIFORM_BUFFER,null),i.bindBufferBase(i.UNIFORM_BUFFER,_,b),b}function u(){for(let y=0;y<a;y++)if(o.indexOf(y)===-1)return o.push(y),y;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function d(y){let _=s[y.id],b=y.uniforms,C=y.__cache;i.bindBuffer(i.UNIFORM_BUFFER,_);for(let A=0,R=b.length;A<R;A++){let O=Array.isArray(b[A])?b[A]:[b[A]];for(let v=0,S=O.length;v<S;v++){let F=O[v];if(f(F,A,v,C)===!0){let j=F.__offset,ee=Array.isArray(F.value)?F.value:[F.value],z=0;for(let B=0;B<ee.length;B++){let Q=ee[B],Z=x(Q);typeof Q=="number"||typeof Q=="boolean"?(F.__data[0]=Q,i.bufferSubData(i.UNIFORM_BUFFER,j+z,F.__data)):Q.isMatrix3?(F.__data[0]=Q.elements[0],F.__data[1]=Q.elements[1],F.__data[2]=Q.elements[2],F.__data[3]=0,F.__data[4]=Q.elements[3],F.__data[5]=Q.elements[4],F.__data[6]=Q.elements[5],F.__data[7]=0,F.__data[8]=Q.elements[6],F.__data[9]=Q.elements[7],F.__data[10]=Q.elements[8],F.__data[11]=0):(Q.toArray(F.__data,z),z+=Z.storage/Float32Array.BYTES_PER_ELEMENT)}i.bufferSubData(i.UNIFORM_BUFFER,j,F.__data)}}}i.bindBuffer(i.UNIFORM_BUFFER,null)}function f(y,_,b,C){let A=y.value,R=_+"_"+b;if(C[R]===void 0)return typeof A=="number"||typeof A=="boolean"?C[R]=A:C[R]=A.clone(),!0;{let O=C[R];if(typeof A=="number"||typeof A=="boolean"){if(O!==A)return C[R]=A,!0}else if(O.equals(A)===!1)return O.copy(A),!0}return!1}function g(y){let _=y.uniforms,b=0,C=16;for(let R=0,O=_.length;R<O;R++){let v=Array.isArray(_[R])?_[R]:[_[R]];for(let S=0,F=v.length;S<F;S++){let j=v[S],ee=Array.isArray(j.value)?j.value:[j.value];for(let z=0,B=ee.length;z<B;z++){let Q=ee[z],Z=x(Q),K=b%C;K!==0&&C-K<Z.boundary&&(b+=C-K),j.__data=new Float32Array(Z.storage/Float32Array.BYTES_PER_ELEMENT),j.__offset=b,b+=Z.storage}}}let A=b%C;return A>0&&(b+=C-A),y.__size=b,y.__cache={},this}function x(y){let _={boundary:0,storage:0};return typeof y=="number"||typeof y=="boolean"?(_.boundary=4,_.storage=4):y.isVector2?(_.boundary=8,_.storage=8):y.isVector3||y.isColor?(_.boundary=16,_.storage=12):y.isVector4?(_.boundary=16,_.storage=16):y.isMatrix3?(_.boundary=48,_.storage=48):y.isMatrix4?(_.boundary=64,_.storage=64):y.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",y),_}function m(y){let _=y.target;_.removeEventListener("dispose",m);let b=o.indexOf(_.__bindingPointIndex);o.splice(b,1),i.deleteBuffer(s[_.id]),delete s[_.id],delete r[_.id]}function p(){for(let y in s)i.deleteBuffer(s[y]);o=[],s={},r={}}return{bind:c,update:l,dispose:p}}var Fr=class{constructor(e={}){let{canvas:t=Mm(),context:n=null,depth:s=!0,stencil:r=!0,alpha:o=!1,antialias:a=!1,premultipliedAlpha:c=!0,preserveDrawingBuffer:l=!1,powerPreference:h="default",failIfMajorPerformanceCaveat:u=!1}=e;this.isWebGLRenderer=!0;let d;n!==null?d=n.getContextAttributes().alpha:d=o;let f=new Uint32Array(4),g=new Int32Array(4),x=null,m=null,p=[],y=[];this.domElement=t,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this._outputColorSpace=Tt,this._useLegacyLights=!1,this.toneMapping=Ri,this.toneMappingExposure=1;let _=this,b=!1,C=0,A=0,R=null,O=-1,v=null,S=new pt,F=new pt,j=null,ee=new ge(0),z=0,B=t.width,Q=t.height,Z=1,K=null,$=null,te=new pt(0,0,B,Q),he=new pt(0,0,B,Q),pe=!1,Y=new Or,ne=!1,me=!1,Ce=null,we=new Je,ze=new He,Ve=new I,De={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};function rt(){return R===null?Z:1}let k=n;function $t(w,N){for(let X=0;X<w.length;X++){let q=w[X],V=t.getContext(q,N);if(V!==null)return V}return null}try{let w={alpha:!0,depth:s,stencil:r,antialias:a,premultipliedAlpha:c,preserveDrawingBuffer:l,powerPreference:h,failIfMajorPerformanceCaveat:u};if("setAttribute"in t&&t.setAttribute("data-engine",`three.js r${bl}`),t.addEventListener("webglcontextlost",J,!1),t.addEventListener("webglcontextrestored",P,!1),t.addEventListener("webglcontextcreationerror",ie,!1),k===null){let N=["webgl2","webgl","experimental-webgl"];if(_.isWebGL1Renderer===!0&&N.shift(),k=$t(N,w),k===null)throw $t(N)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}typeof WebGLRenderingContext!="undefined"&&k instanceof WebGLRenderingContext&&console.warn("THREE.WebGLRenderer: WebGL 1 support was deprecated in r153 and will be removed in r163."),k.getShaderPrecisionFormat===void 0&&(k.getShaderPrecisionFormat=function(){return{rangeMin:1,rangeMax:1,precision:1}})}catch(w){throw console.error("THREE.WebGLRenderer: "+w.message),w}let Ie,Oe,Ee,vt,We,E,M,H,ae,oe,le,Re,xe,be,Pe,Be,se,at,D,U,G,W,ue,re;function _e(){Ie=new Lx(k),Oe=new Ex(k,Ie,e),Ie.init(Oe),W=new ly(k,Ie,Oe),Ee=new ay(k,Ie,Oe),vt=new Dx(k),We=new Z_,E=new cy(k,Ie,Ee,We,Oe,W,vt),M=new Ax(_),H=new Px(_),ae=new Gm(k,Oe),ue=new wx(k,Ie,ae,Oe),oe=new Ix(k,ae,vt,ue),le=new Fx(k,oe,ae,vt),D=new Ox(k,Oe,E),Be=new Tx(We),Re=new j_(_,M,H,Ie,Oe,ue,Be),xe=new uy(_,We),be=new $_,Pe=new iy(Ie,Oe),at=new bx(_,M,H,Ee,le,d,c),se=new oy(_,le,Oe),re=new dy(k,vt,Oe,Ee),U=new Sx(k,Ie,vt,Oe),G=new zx(k,Ie,vt,Oe),vt.programs=Re.programs,_.capabilities=Oe,_.extensions=Ie,_.properties=We,_.renderLists=be,_.shadowMap=se,_.state=Ee,_.info=vt}_e();let ye=new ol(_,k);this.xr=ye,this.getContext=function(){return k},this.getContextAttributes=function(){return k.getContextAttributes()},this.forceContextLoss=function(){let w=Ie.get("WEBGL_lose_context");w&&w.loseContext()},this.forceContextRestore=function(){let w=Ie.get("WEBGL_lose_context");w&&w.restoreContext()},this.getPixelRatio=function(){return Z},this.setPixelRatio=function(w){w!==void 0&&(Z=w,this.setSize(B,Q,!1))},this.getSize=function(w){return w.set(B,Q)},this.setSize=function(w,N,X=!0){if(ye.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}B=w,Q=N,t.width=Math.floor(w*Z),t.height=Math.floor(N*Z),X===!0&&(t.style.width=w+"px",t.style.height=N+"px"),this.setViewport(0,0,w,N)},this.getDrawingBufferSize=function(w){return w.set(B*Z,Q*Z).floor()},this.setDrawingBufferSize=function(w,N,X){B=w,Q=N,Z=X,t.width=Math.floor(w*X),t.height=Math.floor(N*X),this.setViewport(0,0,w,N)},this.getCurrentViewport=function(w){return w.copy(S)},this.getViewport=function(w){return w.copy(te)},this.setViewport=function(w,N,X,q){w.isVector4?te.set(w.x,w.y,w.z,w.w):te.set(w,N,X,q),Ee.viewport(S.copy(te).multiplyScalar(Z).floor())},this.getScissor=function(w){return w.copy(he)},this.setScissor=function(w,N,X,q){w.isVector4?he.set(w.x,w.y,w.z,w.w):he.set(w,N,X,q),Ee.scissor(F.copy(he).multiplyScalar(Z).floor())},this.getScissorTest=function(){return pe},this.setScissorTest=function(w){Ee.setScissorTest(pe=w)},this.setOpaqueSort=function(w){K=w},this.setTransparentSort=function(w){$=w},this.getClearColor=function(w){return w.copy(at.getClearColor())},this.setClearColor=function(){at.setClearColor.apply(at,arguments)},this.getClearAlpha=function(){return at.getClearAlpha()},this.setClearAlpha=function(){at.setClearAlpha.apply(at,arguments)},this.clear=function(w=!0,N=!0,X=!0){let q=0;if(w){let V=!1;if(R!==null){let ve=R.texture.format;V=ve===Dd||ve===zd||ve===Id}if(V){let ve=R.texture.type,Le=ve===Ci||ve===Ei||ve===Sl||ve===$i||ve===Pd||ve===Ld,Ne=at.getClearColor(),Fe=at.getClearAlpha(),Ze=Ne.r,Xe=Ne.g,Ye=Ne.b;Le?(f[0]=Ze,f[1]=Xe,f[2]=Ye,f[3]=Fe,k.clearBufferuiv(k.COLOR,0,f)):(g[0]=Ze,g[1]=Xe,g[2]=Ye,g[3]=Fe,k.clearBufferiv(k.COLOR,0,g))}else q|=k.COLOR_BUFFER_BIT}N&&(q|=k.DEPTH_BUFFER_BIT),X&&(q|=k.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),k.clear(q)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){t.removeEventListener("webglcontextlost",J,!1),t.removeEventListener("webglcontextrestored",P,!1),t.removeEventListener("webglcontextcreationerror",ie,!1),be.dispose(),Pe.dispose(),We.dispose(),M.dispose(),H.dispose(),le.dispose(),ue.dispose(),re.dispose(),Re.dispose(),ye.dispose(),ye.removeEventListener("sessionstart",an),ye.removeEventListener("sessionend",yt),Ce&&(Ce.dispose(),Ce=null),cn.stop()};function J(w){w.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),b=!0}function P(){console.log("THREE.WebGLRenderer: Context Restored."),b=!1;let w=vt.autoReset,N=se.enabled,X=se.autoUpdate,q=se.needsUpdate,V=se.type;_e(),vt.autoReset=w,se.enabled=N,se.autoUpdate=X,se.needsUpdate=q,se.type=V}function ie(w){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",w.statusMessage)}function ce(w){let N=w.target;N.removeEventListener("dispose",ce),Se(N)}function Se(w){Te(w),We.remove(w)}function Te(w){let N=We.get(w).programs;N!==void 0&&(N.forEach(function(X){Re.releaseProgram(X)}),w.isShaderMaterial&&Re.releaseShaderCache(w))}this.renderBufferDirect=function(w,N,X,q,V,ve){N===null&&(N=De);let Le=V.isMesh&&V.matrixWorld.determinant()<0,Ne=np(w,N,X,q,V);Ee.setMaterial(q,Le);let Fe=X.index,Ze=1;if(q.wireframe===!0){if(Fe=oe.getWireframeAttribute(X),Fe===void 0)return;Ze=2}let Xe=X.drawRange,Ye=X.attributes.position,Dt=Xe.start*Ze,_n=(Xe.start+Xe.count)*Ze;ve!==null&&(Dt=Math.max(Dt,ve.start*Ze),_n=Math.min(_n,(ve.start+ve.count)*Ze)),Fe!==null?(Dt=Math.max(Dt,0),_n=Math.min(_n,Fe.count)):Ye!=null&&(Dt=Math.max(Dt,0),_n=Math.min(_n,Ye.count));let Zt=_n-Dt;if(Zt<0||Zt===1/0)return;ue.setup(V,q,Ne,X,Fe);let Jn,Et=U;if(Fe!==null&&(Jn=ae.get(Fe),Et=G,Et.setIndex(Jn)),V.isMesh)q.wireframe===!0?(Ee.setLineWidth(q.wireframeLinewidth*rt()),Et.setMode(k.LINES)):Et.setMode(k.TRIANGLES);else if(V.isLine){let Ke=q.linewidth;Ke===void 0&&(Ke=1),Ee.setLineWidth(Ke*rt()),V.isLineSegments?Et.setMode(k.LINES):V.isLineLoop?Et.setMode(k.LINE_LOOP):Et.setMode(k.LINE_STRIP)}else V.isPoints?Et.setMode(k.POINTS):V.isSprite&&Et.setMode(k.TRIANGLES);if(V.isBatchedMesh)Et.renderMultiDraw(V._multiDrawStarts,V._multiDrawCounts,V._multiDrawCount);else if(V.isInstancedMesh)Et.renderInstances(Dt,Zt,V.count);else if(X.isInstancedBufferGeometry){let Ke=X._maxInstanceCount!==void 0?X._maxInstanceCount:1/0,ic=Math.min(X.instanceCount,Ke);Et.renderInstances(Dt,Zt,ic)}else Et.render(Dt,Zt)};function ct(w,N,X){w.transparent===!0&&w.side===dn&&w.forceSinglePass===!1?(w.side=gn,w.needsUpdate=!0,uo(w,N,X),w.side=qn,w.needsUpdate=!0,uo(w,N,X),w.side=dn):uo(w,N,X)}this.compile=function(w,N,X=null){X===null&&(X=w),m=Pe.get(X),m.init(),y.push(m),X.traverseVisible(function(V){V.isLight&&V.layers.test(N.layers)&&(m.pushLight(V),V.castShadow&&m.pushShadow(V))}),w!==X&&w.traverseVisible(function(V){V.isLight&&V.layers.test(N.layers)&&(m.pushLight(V),V.castShadow&&m.pushShadow(V))}),m.setupLights(_._useLegacyLights);let q=new Set;return w.traverse(function(V){let ve=V.material;if(ve)if(Array.isArray(ve))for(let Le=0;Le<ve.length;Le++){let Ne=ve[Le];ct(Ne,X,V),q.add(Ne)}else ct(ve,X,V),q.add(ve)}),y.pop(),m=null,q},this.compileAsync=function(w,N,X=null){let q=this.compile(w,N,X);return new Promise(V=>{function ve(){if(q.forEach(function(Le){We.get(Le).currentProgram.isReady()&&q.delete(Le)}),q.size===0){V(w);return}setTimeout(ve,10)}Ie.get("KHR_parallel_shader_compile")!==null?ve():setTimeout(ve,10)})};let _t=null;function jt(w){_t&&_t(w)}function an(){cn.stop()}function yt(){cn.start()}let cn=new Gd;cn.setAnimationLoop(jt),typeof self!="undefined"&&cn.setContext(self),this.setAnimationLoop=function(w){_t=w,ye.setAnimationLoop(w),w===null?cn.stop():cn.start()},ye.addEventListener("sessionstart",an),ye.addEventListener("sessionend",yt),this.render=function(w,N){if(N!==void 0&&N.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(b===!0)return;w.matrixWorldAutoUpdate===!0&&w.updateMatrixWorld(),N.parent===null&&N.matrixWorldAutoUpdate===!0&&N.updateMatrixWorld(),ye.enabled===!0&&ye.isPresenting===!0&&(ye.cameraAutoUpdate===!0&&ye.updateCamera(N),N=ye.getCamera()),w.isScene===!0&&w.onBeforeRender(_,w,N,R),m=Pe.get(w,y.length),m.init(),y.push(m),we.multiplyMatrices(N.projectionMatrix,N.matrixWorldInverse),Y.setFromProjectionMatrix(we),me=this.localClippingEnabled,ne=Be.init(this.clippingPlanes,me),x=be.get(w,p.length),x.init(),p.push(x),Vn(w,N,0,_.sortObjects),x.finish(),_.sortObjects===!0&&x.sort(K,$),this.info.render.frame++,ne===!0&&Be.beginShadows();let X=m.state.shadowsArray;if(se.render(X,w,N),ne===!0&&Be.endShadows(),this.info.autoReset===!0&&this.info.reset(),at.render(x,w),m.setupLights(_._useLegacyLights),N.isArrayCamera){let q=N.cameras;for(let V=0,ve=q.length;V<ve;V++){let Le=q[V];Fh(x,w,Le,Le.viewport)}}else Fh(x,w,N);R!==null&&(E.updateMultisampleRenderTarget(R),E.updateRenderTargetMipmap(R)),w.isScene===!0&&w.onAfterRender(_,w,N),ue.resetDefaultState(),O=-1,v=null,y.pop(),y.length>0?m=y[y.length-1]:m=null,p.pop(),p.length>0?x=p[p.length-1]:x=null};function Vn(w,N,X,q){if(w.visible===!1)return;if(w.layers.test(N.layers)){if(w.isGroup)X=w.renderOrder;else if(w.isLOD)w.autoUpdate===!0&&w.update(N);else if(w.isLight)m.pushLight(w),w.castShadow&&m.pushShadow(w);else if(w.isSprite){if(!w.frustumCulled||Y.intersectsSprite(w)){q&&Ve.setFromMatrixPosition(w.matrixWorld).applyMatrix4(we);let Le=le.update(w),Ne=w.material;Ne.visible&&x.push(w,Le,Ne,X,Ve.z,null)}}else if((w.isMesh||w.isLine||w.isPoints)&&(!w.frustumCulled||Y.intersectsObject(w))){let Le=le.update(w),Ne=w.material;if(q&&(w.boundingSphere!==void 0?(w.boundingSphere===null&&w.computeBoundingSphere(),Ve.copy(w.boundingSphere.center)):(Le.boundingSphere===null&&Le.computeBoundingSphere(),Ve.copy(Le.boundingSphere.center)),Ve.applyMatrix4(w.matrixWorld).applyMatrix4(we)),Array.isArray(Ne)){let Fe=Le.groups;for(let Ze=0,Xe=Fe.length;Ze<Xe;Ze++){let Ye=Fe[Ze],Dt=Ne[Ye.materialIndex];Dt&&Dt.visible&&x.push(w,Le,Dt,X,Ve.z,Ye)}}else Ne.visible&&x.push(w,Le,Ne,X,Ve.z,null)}}let ve=w.children;for(let Le=0,Ne=ve.length;Le<Ne;Le++)Vn(ve[Le],N,X,q)}function Fh(w,N,X,q){let V=w.opaque,ve=w.transmissive,Le=w.transparent;m.setupLightsView(X),ne===!0&&Be.setGlobalState(_.clippingPlanes,X),ve.length>0&&tp(V,ve,N,X),q&&Ee.viewport(S.copy(q)),V.length>0&&ho(V,N,X),ve.length>0&&ho(ve,N,X),Le.length>0&&ho(Le,N,X),Ee.buffers.depth.setTest(!0),Ee.buffers.depth.setMask(!0),Ee.buffers.color.setMask(!0),Ee.setPolygonOffset(!1)}function tp(w,N,X,q){if((X.isScene===!0?X.overrideMaterial:null)!==null)return;let ve=Oe.isWebGL2;Ce===null&&(Ce=new hi(1,1,{generateMipmaps:!0,type:Ie.has("EXT_color_buffer_half_float")?Nr:Ci,minFilter:Pi,samples:ve?4:0})),_.getDrawingBufferSize(ze),ve?Ce.setSize(ze.x,ze.y):Ce.setSize(jo(ze.x),jo(ze.y));let Le=_.getRenderTarget();_.setRenderTarget(Ce),_.getClearColor(ee),z=_.getClearAlpha(),z<1&&_.setClearColor(16777215,.5),_.clear();let Ne=_.toneMapping;_.toneMapping=Ri,ho(w,X,q),E.updateMultisampleRenderTarget(Ce),E.updateRenderTargetMipmap(Ce);let Fe=!1;for(let Ze=0,Xe=N.length;Ze<Xe;Ze++){let Ye=N[Ze],Dt=Ye.object,_n=Ye.geometry,Zt=Ye.material,Jn=Ye.group;if(Zt.side===dn&&Dt.layers.test(q.layers)){let Et=Zt.side;Zt.side=gn,Zt.needsUpdate=!0,Bh(Dt,X,q,_n,Zt,Jn),Zt.side=Et,Zt.needsUpdate=!0,Fe=!0}}Fe===!0&&(E.updateMultisampleRenderTarget(Ce),E.updateRenderTargetMipmap(Ce)),_.setRenderTarget(Le),_.setClearColor(ee,z),_.toneMapping=Ne}function ho(w,N,X){let q=N.isScene===!0?N.overrideMaterial:null;for(let V=0,ve=w.length;V<ve;V++){let Le=w[V],Ne=Le.object,Fe=Le.geometry,Ze=q===null?Le.material:q,Xe=Le.group;Ne.layers.test(X.layers)&&Bh(Ne,N,X,Fe,Ze,Xe)}}function Bh(w,N,X,q,V,ve){w.onBeforeRender(_,N,X,q,V,ve),w.modelViewMatrix.multiplyMatrices(X.matrixWorldInverse,w.matrixWorld),w.normalMatrix.getNormalMatrix(w.modelViewMatrix),V.onBeforeRender(_,N,X,q,w,ve),V.transparent===!0&&V.side===dn&&V.forceSinglePass===!1?(V.side=gn,V.needsUpdate=!0,_.renderBufferDirect(X,N,q,V,w,ve),V.side=qn,V.needsUpdate=!0,_.renderBufferDirect(X,N,q,V,w,ve),V.side=dn):_.renderBufferDirect(X,N,q,V,w,ve),w.onAfterRender(_,N,X,q,V,ve)}function uo(w,N,X){N.isScene!==!0&&(N=De);let q=We.get(w),V=m.state.lights,ve=m.state.shadowsArray,Le=V.state.version,Ne=Re.getParameters(w,V.state,ve,N,X),Fe=Re.getProgramCacheKey(Ne),Ze=q.programs;q.environment=w.isMeshStandardMaterial?N.environment:null,q.fog=N.fog,q.envMap=(w.isMeshStandardMaterial?H:M).get(w.envMap||q.environment),Ze===void 0&&(w.addEventListener("dispose",ce),Ze=new Map,q.programs=Ze);let Xe=Ze.get(Fe);if(Xe!==void 0){if(q.currentProgram===Xe&&q.lightsStateVersion===Le)return Hh(w,Ne),Xe}else Ne.uniforms=Re.getUniforms(w),w.onBuild(X,Ne,_),w.onBeforeCompile(Ne,_),Xe=Re.acquireProgram(Ne,Fe),Ze.set(Fe,Xe),q.uniforms=Ne.uniforms;let Ye=q.uniforms;return(!w.isShaderMaterial&&!w.isRawShaderMaterial||w.clipping===!0)&&(Ye.clippingPlanes=Be.uniform),Hh(w,Ne),q.needsLights=sp(w),q.lightsStateVersion=Le,q.needsLights&&(Ye.ambientLightColor.value=V.state.ambient,Ye.lightProbe.value=V.state.probe,Ye.directionalLights.value=V.state.directional,Ye.directionalLightShadows.value=V.state.directionalShadow,Ye.spotLights.value=V.state.spot,Ye.spotLightShadows.value=V.state.spotShadow,Ye.rectAreaLights.value=V.state.rectArea,Ye.ltc_1.value=V.state.rectAreaLTC1,Ye.ltc_2.value=V.state.rectAreaLTC2,Ye.pointLights.value=V.state.point,Ye.pointLightShadows.value=V.state.pointShadow,Ye.hemisphereLights.value=V.state.hemi,Ye.directionalShadowMap.value=V.state.directionalShadowMap,Ye.directionalShadowMatrix.value=V.state.directionalShadowMatrix,Ye.spotShadowMap.value=V.state.spotShadowMap,Ye.spotLightMatrix.value=V.state.spotLightMatrix,Ye.spotLightMap.value=V.state.spotLightMap,Ye.pointShadowMap.value=V.state.pointShadowMap,Ye.pointShadowMatrix.value=V.state.pointShadowMatrix),q.currentProgram=Xe,q.uniformsList=null,Xe}function kh(w){if(w.uniformsList===null){let N=w.currentProgram.getUniforms();w.uniformsList=Ws.seqWithValue(N.seq,w.uniforms)}return w.uniformsList}function Hh(w,N){let X=We.get(w);X.outputColorSpace=N.outputColorSpace,X.batching=N.batching,X.instancing=N.instancing,X.instancingColor=N.instancingColor,X.skinning=N.skinning,X.morphTargets=N.morphTargets,X.morphNormals=N.morphNormals,X.morphColors=N.morphColors,X.morphTargetsCount=N.morphTargetsCount,X.numClippingPlanes=N.numClippingPlanes,X.numIntersection=N.numClipIntersection,X.vertexAlphas=N.vertexAlphas,X.vertexTangents=N.vertexTangents,X.toneMapping=N.toneMapping}function np(w,N,X,q,V){N.isScene!==!0&&(N=De),E.resetTextureUnits();let ve=N.fog,Le=q.isMeshStandardMaterial?N.environment:null,Ne=R===null?_.outputColorSpace:R.isXRRenderTarget===!0?R.texture.colorSpace:Xt,Fe=(q.isMeshStandardMaterial?H:M).get(q.envMap||Le),Ze=q.vertexColors===!0&&!!X.attributes.color&&X.attributes.color.itemSize===4,Xe=!!X.attributes.tangent&&(!!q.normalMap||q.anisotropy>0),Ye=!!X.morphAttributes.position,Dt=!!X.morphAttributes.normal,_n=!!X.morphAttributes.color,Zt=Ri;q.toneMapped&&(R===null||R.isXRRenderTarget===!0)&&(Zt=_.toneMapping);let Jn=X.morphAttributes.position||X.morphAttributes.normal||X.morphAttributes.color,Et=Jn!==void 0?Jn.length:0,Ke=We.get(q),ic=m.state.lights;if(ne===!0&&(me===!0||w!==v)){let En=w===v&&q.id===O;Be.setState(q,w,En)}let Pt=!1;q.version===Ke.__version?(Ke.needsLights&&Ke.lightsStateVersion!==ic.state.version||Ke.outputColorSpace!==Ne||V.isBatchedMesh&&Ke.batching===!1||!V.isBatchedMesh&&Ke.batching===!0||V.isInstancedMesh&&Ke.instancing===!1||!V.isInstancedMesh&&Ke.instancing===!0||V.isSkinnedMesh&&Ke.skinning===!1||!V.isSkinnedMesh&&Ke.skinning===!0||V.isInstancedMesh&&Ke.instancingColor===!0&&V.instanceColor===null||V.isInstancedMesh&&Ke.instancingColor===!1&&V.instanceColor!==null||Ke.envMap!==Fe||q.fog===!0&&Ke.fog!==ve||Ke.numClippingPlanes!==void 0&&(Ke.numClippingPlanes!==Be.numPlanes||Ke.numIntersection!==Be.numIntersection)||Ke.vertexAlphas!==Ze||Ke.vertexTangents!==Xe||Ke.morphTargets!==Ye||Ke.morphNormals!==Dt||Ke.morphColors!==_n||Ke.toneMapping!==Zt||Oe.isWebGL2===!0&&Ke.morphTargetsCount!==Et)&&(Pt=!0):(Pt=!0,Ke.__version=q.version);let Gi=Ke.currentProgram;Pt===!0&&(Gi=uo(q,N,V));let Gh=!1,Mr=!1,sc=!1,tn=Gi.getUniforms(),Vi=Ke.uniforms;if(Ee.useProgram(Gi.program)&&(Gh=!0,Mr=!0,sc=!0),q.id!==O&&(O=q.id,Mr=!0),Gh||v!==w){tn.setValue(k,"projectionMatrix",w.projectionMatrix),tn.setValue(k,"viewMatrix",w.matrixWorldInverse);let En=tn.map.cameraPosition;En!==void 0&&En.setValue(k,Ve.setFromMatrixPosition(w.matrixWorld)),Oe.logarithmicDepthBuffer&&tn.setValue(k,"logDepthBufFC",2/(Math.log(w.far+1)/Math.LN2)),(q.isMeshPhongMaterial||q.isMeshToonMaterial||q.isMeshLambertMaterial||q.isMeshBasicMaterial||q.isMeshStandardMaterial||q.isShaderMaterial)&&tn.setValue(k,"isOrthographic",w.isOrthographicCamera===!0),v!==w&&(v=w,Mr=!0,sc=!0)}if(V.isSkinnedMesh){tn.setOptional(k,V,"bindMatrix"),tn.setOptional(k,V,"bindMatrixInverse");let En=V.skeleton;En&&(Oe.floatVertexTextures?(En.boneTexture===null&&En.computeBoneTexture(),tn.setValue(k,"boneTexture",En.boneTexture,E)):console.warn("THREE.WebGLRenderer: SkinnedMesh can only be used with WebGL 2. With WebGL 1 OES_texture_float and vertex textures support is required."))}V.isBatchedMesh&&(tn.setOptional(k,V,"batchingTexture"),tn.setValue(k,"batchingTexture",V._matricesTexture,E));let rc=X.morphAttributes;if((rc.position!==void 0||rc.normal!==void 0||rc.color!==void 0&&Oe.isWebGL2===!0)&&D.update(V,X,Gi),(Mr||Ke.receiveShadow!==V.receiveShadow)&&(Ke.receiveShadow=V.receiveShadow,tn.setValue(k,"receiveShadow",V.receiveShadow)),q.isMeshGouraudMaterial&&q.envMap!==null&&(Vi.envMap.value=Fe,Vi.flipEnvMap.value=Fe.isCubeTexture&&Fe.isRenderTargetTexture===!1?-1:1),Mr&&(tn.setValue(k,"toneMappingExposure",_.toneMappingExposure),Ke.needsLights&&ip(Vi,sc),ve&&q.fog===!0&&xe.refreshFogUniforms(Vi,ve),xe.refreshMaterialUniforms(Vi,q,Z,Q,Ce),Ws.upload(k,kh(Ke),Vi,E)),q.isShaderMaterial&&q.uniformsNeedUpdate===!0&&(Ws.upload(k,kh(Ke),Vi,E),q.uniformsNeedUpdate=!1),q.isSpriteMaterial&&tn.setValue(k,"center",V.center),tn.setValue(k,"modelViewMatrix",V.modelViewMatrix),tn.setValue(k,"normalMatrix",V.normalMatrix),tn.setValue(k,"modelMatrix",V.matrixWorld),q.isShaderMaterial||q.isRawShaderMaterial){let En=q.uniformsGroups;for(let oc=0,rp=En.length;oc<rp;oc++)if(Oe.isWebGL2){let Vh=En[oc];re.update(Vh,Gi),re.bind(Vh,Gi)}else console.warn("THREE.WebGLRenderer: Uniform Buffer Objects can only be used with WebGL 2.")}return Gi}function ip(w,N){w.ambientLightColor.needsUpdate=N,w.lightProbe.needsUpdate=N,w.directionalLights.needsUpdate=N,w.directionalLightShadows.needsUpdate=N,w.pointLights.needsUpdate=N,w.pointLightShadows.needsUpdate=N,w.spotLights.needsUpdate=N,w.spotLightShadows.needsUpdate=N,w.rectAreaLights.needsUpdate=N,w.hemisphereLights.needsUpdate=N}function sp(w){return w.isMeshLambertMaterial||w.isMeshToonMaterial||w.isMeshPhongMaterial||w.isMeshStandardMaterial||w.isShadowMaterial||w.isShaderMaterial&&w.lights===!0}this.getActiveCubeFace=function(){return C},this.getActiveMipmapLevel=function(){return A},this.getRenderTarget=function(){return R},this.setRenderTargetTextures=function(w,N,X){We.get(w.texture).__webglTexture=N,We.get(w.depthTexture).__webglTexture=X;let q=We.get(w);q.__hasExternalTextures=!0,q.__hasExternalTextures&&(q.__autoAllocateDepthBuffer=X===void 0,q.__autoAllocateDepthBuffer||Ie.has("WEBGL_multisampled_render_to_texture")===!0&&(console.warn("THREE.WebGLRenderer: Render-to-texture extension was disabled because an external texture was provided"),q.__useRenderToTexture=!1))},this.setRenderTargetFramebuffer=function(w,N){let X=We.get(w);X.__webglFramebuffer=N,X.__useDefaultFramebuffer=N===void 0},this.setRenderTarget=function(w,N=0,X=0){R=w,C=N,A=X;let q=!0,V=null,ve=!1,Le=!1;if(w){let Fe=We.get(w);Fe.__useDefaultFramebuffer!==void 0?(Ee.bindFramebuffer(k.FRAMEBUFFER,null),q=!1):Fe.__webglFramebuffer===void 0?E.setupRenderTarget(w):Fe.__hasExternalTextures&&E.rebindTextures(w,We.get(w.texture).__webglTexture,We.get(w.depthTexture).__webglTexture);let Ze=w.texture;(Ze.isData3DTexture||Ze.isDataArrayTexture||Ze.isCompressedArrayTexture)&&(Le=!0);let Xe=We.get(w).__webglFramebuffer;w.isWebGLCubeRenderTarget?(Array.isArray(Xe[N])?V=Xe[N][X]:V=Xe[N],ve=!0):Oe.isWebGL2&&w.samples>0&&E.useMultisampledRTT(w)===!1?V=We.get(w).__webglMultisampledFramebuffer:Array.isArray(Xe)?V=Xe[X]:V=Xe,S.copy(w.viewport),F.copy(w.scissor),j=w.scissorTest}else S.copy(te).multiplyScalar(Z).floor(),F.copy(he).multiplyScalar(Z).floor(),j=pe;if(Ee.bindFramebuffer(k.FRAMEBUFFER,V)&&Oe.drawBuffers&&q&&Ee.drawBuffers(w,V),Ee.viewport(S),Ee.scissor(F),Ee.setScissorTest(j),ve){let Fe=We.get(w.texture);k.framebufferTexture2D(k.FRAMEBUFFER,k.COLOR_ATTACHMENT0,k.TEXTURE_CUBE_MAP_POSITIVE_X+N,Fe.__webglTexture,X)}else if(Le){let Fe=We.get(w.texture),Ze=N||0;k.framebufferTextureLayer(k.FRAMEBUFFER,k.COLOR_ATTACHMENT0,Fe.__webglTexture,X||0,Ze)}O=-1},this.readRenderTargetPixels=function(w,N,X,q,V,ve,Le){if(!(w&&w.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let Ne=We.get(w).__webglFramebuffer;if(w.isWebGLCubeRenderTarget&&Le!==void 0&&(Ne=Ne[Le]),Ne){Ee.bindFramebuffer(k.FRAMEBUFFER,Ne);try{let Fe=w.texture,Ze=Fe.format,Xe=Fe.type;if(Ze!==An&&W.convert(Ze)!==k.getParameter(k.IMPLEMENTATION_COLOR_READ_FORMAT)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}let Ye=Xe===Nr&&(Ie.has("EXT_color_buffer_half_float")||Oe.isWebGL2&&Ie.has("EXT_color_buffer_float"));if(Xe!==Ci&&W.convert(Xe)!==k.getParameter(k.IMPLEMENTATION_COLOR_READ_TYPE)&&!(Xe===ai&&(Oe.isWebGL2||Ie.has("OES_texture_float")||Ie.has("WEBGL_color_buffer_float")))&&!Ye){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}N>=0&&N<=w.width-q&&X>=0&&X<=w.height-V&&k.readPixels(N,X,q,V,W.convert(Ze),W.convert(Xe),ve)}finally{let Fe=R!==null?We.get(R).__webglFramebuffer:null;Ee.bindFramebuffer(k.FRAMEBUFFER,Fe)}}},this.copyFramebufferToTexture=function(w,N,X=0){let q=Math.pow(2,-X),V=Math.floor(N.image.width*q),ve=Math.floor(N.image.height*q);E.setTexture2D(N,0),k.copyTexSubImage2D(k.TEXTURE_2D,X,0,0,w.x,w.y,V,ve),Ee.unbindTexture()},this.copyTextureToTexture=function(w,N,X,q=0){let V=N.image.width,ve=N.image.height,Le=W.convert(X.format),Ne=W.convert(X.type);E.setTexture2D(X,0),k.pixelStorei(k.UNPACK_FLIP_Y_WEBGL,X.flipY),k.pixelStorei(k.UNPACK_PREMULTIPLY_ALPHA_WEBGL,X.premultiplyAlpha),k.pixelStorei(k.UNPACK_ALIGNMENT,X.unpackAlignment),N.isDataTexture?k.texSubImage2D(k.TEXTURE_2D,q,w.x,w.y,V,ve,Le,Ne,N.image.data):N.isCompressedTexture?k.compressedTexSubImage2D(k.TEXTURE_2D,q,w.x,w.y,N.mipmaps[0].width,N.mipmaps[0].height,Le,N.mipmaps[0].data):k.texSubImage2D(k.TEXTURE_2D,q,w.x,w.y,Le,Ne,N.image),q===0&&X.generateMipmaps&&k.generateMipmap(k.TEXTURE_2D),Ee.unbindTexture()},this.copyTextureToTexture3D=function(w,N,X,q,V=0){if(_.isWebGL1Renderer){console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: can only be used with WebGL2.");return}let ve=w.max.x-w.min.x+1,Le=w.max.y-w.min.y+1,Ne=w.max.z-w.min.z+1,Fe=W.convert(q.format),Ze=W.convert(q.type),Xe;if(q.isData3DTexture)E.setTexture3D(q,0),Xe=k.TEXTURE_3D;else if(q.isDataArrayTexture||q.isCompressedArrayTexture)E.setTexture2DArray(q,0),Xe=k.TEXTURE_2D_ARRAY;else{console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: only supports THREE.DataTexture3D and THREE.DataTexture2DArray.");return}k.pixelStorei(k.UNPACK_FLIP_Y_WEBGL,q.flipY),k.pixelStorei(k.UNPACK_PREMULTIPLY_ALPHA_WEBGL,q.premultiplyAlpha),k.pixelStorei(k.UNPACK_ALIGNMENT,q.unpackAlignment);let Ye=k.getParameter(k.UNPACK_ROW_LENGTH),Dt=k.getParameter(k.UNPACK_IMAGE_HEIGHT),_n=k.getParameter(k.UNPACK_SKIP_PIXELS),Zt=k.getParameter(k.UNPACK_SKIP_ROWS),Jn=k.getParameter(k.UNPACK_SKIP_IMAGES),Et=X.isCompressedTexture?X.mipmaps[V]:X.image;k.pixelStorei(k.UNPACK_ROW_LENGTH,Et.width),k.pixelStorei(k.UNPACK_IMAGE_HEIGHT,Et.height),k.pixelStorei(k.UNPACK_SKIP_PIXELS,w.min.x),k.pixelStorei(k.UNPACK_SKIP_ROWS,w.min.y),k.pixelStorei(k.UNPACK_SKIP_IMAGES,w.min.z),X.isDataTexture||X.isData3DTexture?k.texSubImage3D(Xe,V,N.x,N.y,N.z,ve,Le,Ne,Fe,Ze,Et.data):X.isCompressedArrayTexture?(console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: untested support for compressed srcTexture."),k.compressedTexSubImage3D(Xe,V,N.x,N.y,N.z,ve,Le,Ne,Fe,Et.data)):k.texSubImage3D(Xe,V,N.x,N.y,N.z,ve,Le,Ne,Fe,Ze,Et),k.pixelStorei(k.UNPACK_ROW_LENGTH,Ye),k.pixelStorei(k.UNPACK_IMAGE_HEIGHT,Dt),k.pixelStorei(k.UNPACK_SKIP_PIXELS,_n),k.pixelStorei(k.UNPACK_SKIP_ROWS,Zt),k.pixelStorei(k.UNPACK_SKIP_IMAGES,Jn),V===0&&q.generateMipmaps&&k.generateMipmap(Xe),Ee.unbindTexture()},this.initTexture=function(w){w.isCubeTexture?E.setTextureCube(w,0):w.isData3DTexture?E.setTexture3D(w,0):w.isDataArrayTexture||w.isCompressedArrayTexture?E.setTexture2DArray(w,0):E.setTexture2D(w,0),Ee.unbindTexture()},this.resetState=function(){C=0,A=0,R=null,Ee.reset(),ue.reset()},typeof __THREE_DEVTOOLS__!="undefined"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return ci}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;let t=this.getContext();t.drawingBufferColorSpace=e===Al?"display-p3":"srgb",t.unpackColorSpace=lt.workingColorSpace===Aa?"display-p3":"srgb"}get outputEncoding(){return console.warn("THREE.WebGLRenderer: Property .outputEncoding has been removed. Use .outputColorSpace instead."),this.outputColorSpace===Tt?Qi:Od}set outputEncoding(e){console.warn("THREE.WebGLRenderer: Property .outputEncoding has been removed. Use .outputColorSpace instead."),this.outputColorSpace=e===Qi?Tt:Xt}get useLegacyLights(){return console.warn("THREE.WebGLRenderer: The property .useLegacyLights has been deprecated. Migrate your lighting according to the following guide: https://discourse.threejs.org/t/updates-to-lighting-in-three-js-r155/53733."),this._useLegacyLights}set useLegacyLights(e){console.warn("THREE.WebGLRenderer: The property .useLegacyLights has been deprecated. Migrate your lighting according to the following guide: https://discourse.threejs.org/t/updates-to-lighting-in-three-js-r155/53733."),this._useLegacyLights=e}},al=class extends Fr{};al.prototype.isWebGL1Renderer=!0;var oa=class i{constructor(e,t=1,n=1e3){this.isFog=!0,this.name="",this.color=new ge(e),this.near=t,this.far=n}clone(){return new i(this.color,this.near,this.far)}toJSON(){return{type:"Fog",name:this.name,color:this.color.getHex(),near:this.near,far:this.far}}},aa=class extends bt{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__!="undefined"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,t){return super.copy(e,t),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){let t=super.toJSON(e);return this.fog!==null&&(t.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(t.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(t.object.backgroundIntensity=this.backgroundIntensity),t}},Br=class{constructor(e,t){this.isInterleavedBuffer=!0,this.array=e,this.stride=t,this.count=e!==void 0?e.length/t:0,this.usage=Wc,this._updateRange={offset:0,count:-1},this.updateRanges=[],this.version=0,this.uuid=Fn()}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}get updateRange(){return console.warn("THREE.InterleavedBuffer: updateRange() is deprecated and will be removed in r169. Use addUpdateRange() instead."),this._updateRange}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.array=new e.array.constructor(e.array),this.count=e.count,this.stride=e.stride,this.usage=e.usage,this}copyAt(e,t,n){e*=this.stride,n*=t.stride;for(let s=0,r=this.stride;s<r;s++)this.array[e+s]=t.array[n+s];return this}set(e,t=0){return this.array.set(e,t),this}clone(e){e.arrayBuffers===void 0&&(e.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=Fn()),e.arrayBuffers[this.array.buffer._uuid]===void 0&&(e.arrayBuffers[this.array.buffer._uuid]=this.array.slice(0).buffer);let t=new this.array.constructor(e.arrayBuffers[this.array.buffer._uuid]),n=new this.constructor(t,this.stride);return n.setUsage(this.usage),n}onUpload(e){return this.onUploadCallback=e,this}toJSON(e){return e.arrayBuffers===void 0&&(e.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=Fn()),e.arrayBuffers[this.array.buffer._uuid]===void 0&&(e.arrayBuffers[this.array.buffer._uuid]=Array.from(new Uint32Array(this.array.buffer))),{uuid:this.uuid,buffer:this.array.buffer._uuid,type:this.array.constructor.name,stride:this.stride}}},ln=new I,kr=class i{constructor(e,t,n,s=!1){this.isInterleavedBufferAttribute=!0,this.name="",this.data=e,this.itemSize=t,this.offset=n,this.normalized=s}get count(){return this.data.count}get array(){return this.data.array}set needsUpdate(e){this.data.needsUpdate=e}applyMatrix4(e){for(let t=0,n=this.data.count;t<n;t++)ln.fromBufferAttribute(this,t),ln.applyMatrix4(e),this.setXYZ(t,ln.x,ln.y,ln.z);return this}applyNormalMatrix(e){for(let t=0,n=this.count;t<n;t++)ln.fromBufferAttribute(this,t),ln.applyNormalMatrix(e),this.setXYZ(t,ln.x,ln.y,ln.z);return this}transformDirection(e){for(let t=0,n=this.count;t<n;t++)ln.fromBufferAttribute(this,t),ln.transformDirection(e),this.setXYZ(t,ln.x,ln.y,ln.z);return this}setX(e,t){return this.normalized&&(t=ut(t,this.array)),this.data.array[e*this.data.stride+this.offset]=t,this}setY(e,t){return this.normalized&&(t=ut(t,this.array)),this.data.array[e*this.data.stride+this.offset+1]=t,this}setZ(e,t){return this.normalized&&(t=ut(t,this.array)),this.data.array[e*this.data.stride+this.offset+2]=t,this}setW(e,t){return this.normalized&&(t=ut(t,this.array)),this.data.array[e*this.data.stride+this.offset+3]=t,this}getX(e){let t=this.data.array[e*this.data.stride+this.offset];return this.normalized&&(t=Xn(t,this.array)),t}getY(e){let t=this.data.array[e*this.data.stride+this.offset+1];return this.normalized&&(t=Xn(t,this.array)),t}getZ(e){let t=this.data.array[e*this.data.stride+this.offset+2];return this.normalized&&(t=Xn(t,this.array)),t}getW(e){let t=this.data.array[e*this.data.stride+this.offset+3];return this.normalized&&(t=Xn(t,this.array)),t}setXY(e,t,n){return e=e*this.data.stride+this.offset,this.normalized&&(t=ut(t,this.array),n=ut(n,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=n,this}setXYZ(e,t,n,s){return e=e*this.data.stride+this.offset,this.normalized&&(t=ut(t,this.array),n=ut(n,this.array),s=ut(s,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=n,this.data.array[e+2]=s,this}setXYZW(e,t,n,s,r){return e=e*this.data.stride+this.offset,this.normalized&&(t=ut(t,this.array),n=ut(n,this.array),s=ut(s,this.array),r=ut(r,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=n,this.data.array[e+2]=s,this.data.array[e+3]=r,this}clone(e){if(e===void 0){console.log("THREE.InterleavedBufferAttribute.clone(): Cloning an interleaved buffer attribute will de-interleave buffer data.");let t=[];for(let n=0;n<this.count;n++){let s=n*this.data.stride+this.offset;for(let r=0;r<this.itemSize;r++)t.push(this.data.array[s+r])}return new At(new this.array.constructor(t),this.itemSize,this.normalized)}else return e.interleavedBuffers===void 0&&(e.interleavedBuffers={}),e.interleavedBuffers[this.data.uuid]===void 0&&(e.interleavedBuffers[this.data.uuid]=this.data.clone(e)),new i(e.interleavedBuffers[this.data.uuid],this.itemSize,this.offset,this.normalized)}toJSON(e){if(e===void 0){console.log("THREE.InterleavedBufferAttribute.toJSON(): Serializing an interleaved buffer attribute will de-interleave buffer data.");let t=[];for(let n=0;n<this.count;n++){let s=n*this.data.stride+this.offset;for(let r=0;r<this.itemSize;r++)t.push(this.data.array[s+r])}return{itemSize:this.itemSize,type:this.array.constructor.name,array:t,normalized:this.normalized}}else return e.interleavedBuffers===void 0&&(e.interleavedBuffers={}),e.interleavedBuffers[this.data.uuid]===void 0&&(e.interleavedBuffers[this.data.uuid]=this.data.toJSON(e)),{isInterleavedBufferAttribute:!0,itemSize:this.itemSize,data:this.data.uuid,offset:this.offset,normalized:this.normalized}}};var cd=new I,ld=new pt,hd=new pt,fy=new I,ud=new Je,No=new I,Nc=new bn,dd=new Je,Uc=new Ks,ca=class extends Me{constructor(e,t){super(e,t),this.isSkinnedMesh=!0,this.type="SkinnedMesh",this.bindMode=Kh,this.bindMatrix=new Je,this.bindMatrixInverse=new Je,this.boundingBox=null,this.boundingSphere=null}computeBoundingBox(){let e=this.geometry;this.boundingBox===null&&(this.boundingBox=new xn),this.boundingBox.makeEmpty();let t=e.getAttribute("position");for(let n=0;n<t.count;n++)this.getVertexPosition(n,No),this.boundingBox.expandByPoint(No)}computeBoundingSphere(){let e=this.geometry;this.boundingSphere===null&&(this.boundingSphere=new bn),this.boundingSphere.makeEmpty();let t=e.getAttribute("position");for(let n=0;n<t.count;n++)this.getVertexPosition(n,No),this.boundingSphere.expandByPoint(No)}copy(e,t){return super.copy(e,t),this.bindMode=e.bindMode,this.bindMatrix.copy(e.bindMatrix),this.bindMatrixInverse.copy(e.bindMatrixInverse),this.skeleton=e.skeleton,e.boundingBox!==null&&(this.boundingBox=e.boundingBox.clone()),e.boundingSphere!==null&&(this.boundingSphere=e.boundingSphere.clone()),this}raycast(e,t){let n=this.material,s=this.matrixWorld;n!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),Nc.copy(this.boundingSphere),Nc.applyMatrix4(s),e.ray.intersectsSphere(Nc)!==!1&&(dd.copy(s).invert(),Uc.copy(e.ray).applyMatrix4(dd),!(this.boundingBox!==null&&Uc.intersectsBox(this.boundingBox)===!1)&&this._computeIntersections(e,t,Uc)))}getVertexPosition(e,t){return super.getVertexPosition(e,t),this.applyBoneTransform(e,t),t}bind(e,t){this.skeleton=e,t===void 0&&(this.updateMatrixWorld(!0),this.skeleton.calculateInverses(),t=this.matrixWorld),this.bindMatrix.copy(t),this.bindMatrixInverse.copy(t).invert()}pose(){this.skeleton.pose()}normalizeSkinWeights(){let e=new pt,t=this.geometry.attributes.skinWeight;for(let n=0,s=t.count;n<s;n++){e.fromBufferAttribute(t,n);let r=1/e.manhattanLength();r!==1/0?e.multiplyScalar(r):e.set(1,0,0,0),t.setXYZW(n,e.x,e.y,e.z,e.w)}}updateMatrixWorld(e){super.updateMatrixWorld(e),this.bindMode===Kh?this.bindMatrixInverse.copy(this.matrixWorld).invert():this.bindMode===kp?this.bindMatrixInverse.copy(this.bindMatrix).invert():console.warn("THREE.SkinnedMesh: Unrecognized bindMode: "+this.bindMode)}applyBoneTransform(e,t){let n=this.skeleton,s=this.geometry;ld.fromBufferAttribute(s.attributes.skinIndex,e),hd.fromBufferAttribute(s.attributes.skinWeight,e),cd.copy(t).applyMatrix4(this.bindMatrix),t.set(0,0,0);for(let r=0;r<4;r++){let o=hd.getComponent(r);if(o!==0){let a=ld.getComponent(r);ud.multiplyMatrices(n.bones[a].matrixWorld,n.boneInverses[a]),t.addScaledVector(fy.copy(cd).applyMatrix4(ud),o)}}return t.applyMatrix4(this.bindMatrixInverse)}boneTransform(e,t){return console.warn("THREE.SkinnedMesh: .boneTransform() was renamed to .applyBoneTransform() in r151."),this.applyBoneTransform(e,t)}},Hr=class extends bt{constructor(){super(),this.isBone=!0,this.type="Bone"}},cl=class extends on{constructor(e=null,t=1,n=1,s,r,o,a,c,l=Vt,h=Vt,u,d){super(null,o,a,c,l,h,s,r,u,d),this.isDataTexture=!0,this.image={data:e,width:t,height:n},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}},fd=new Je,py=new Je,la=class i{constructor(e=[],t=[]){this.uuid=Fn(),this.bones=e.slice(0),this.boneInverses=t,this.boneMatrices=null,this.boneTexture=null,this.init()}init(){let e=this.bones,t=this.boneInverses;if(this.boneMatrices=new Float32Array(e.length*16),t.length===0)this.calculateInverses();else if(e.length!==t.length){console.warn("THREE.Skeleton: Number of inverse bone matrices does not match amount of bones."),this.boneInverses=[];for(let n=0,s=this.bones.length;n<s;n++)this.boneInverses.push(new Je)}}calculateInverses(){this.boneInverses.length=0;for(let e=0,t=this.bones.length;e<t;e++){let n=new Je;this.bones[e]&&n.copy(this.bones[e].matrixWorld).invert(),this.boneInverses.push(n)}}pose(){for(let e=0,t=this.bones.length;e<t;e++){let n=this.bones[e];n&&n.matrixWorld.copy(this.boneInverses[e]).invert()}for(let e=0,t=this.bones.length;e<t;e++){let n=this.bones[e];n&&(n.parent&&n.parent.isBone?(n.matrix.copy(n.parent.matrixWorld).invert(),n.matrix.multiply(n.matrixWorld)):n.matrix.copy(n.matrixWorld),n.matrix.decompose(n.position,n.quaternion,n.scale))}}update(){let e=this.bones,t=this.boneInverses,n=this.boneMatrices,s=this.boneTexture;for(let r=0,o=e.length;r<o;r++){let a=e[r]?e[r].matrixWorld:py;fd.multiplyMatrices(a,t[r]),fd.toArray(n,r*16)}s!==null&&(s.needsUpdate=!0)}clone(){return new i(this.bones,this.boneInverses)}computeBoneTexture(){let e=Math.sqrt(this.bones.length*4);e=Math.ceil(e/4)*4,e=Math.max(e,4);let t=new Float32Array(e*e*4);t.set(this.boneMatrices);let n=new cl(t,e,e,An,ai);return n.needsUpdate=!0,this.boneMatrices=t,this.boneTexture=n,this}getBoneByName(e){for(let t=0,n=this.bones.length;t<n;t++){let s=this.bones[t];if(s.name===e)return s}}dispose(){this.boneTexture!==null&&(this.boneTexture.dispose(),this.boneTexture=null)}fromJSON(e,t){this.uuid=e.uuid;for(let n=0,s=e.bones.length;n<s;n++){let r=e.bones[n],o=t[r];o===void 0&&(console.warn("THREE.Skeleton: No bone found with UUID:",r),o=new Hr),this.bones.push(o),this.boneInverses.push(new Je().fromArray(e.boneInverses[n]))}return this.init(),this}toJSON(){let e={metadata:{version:4.6,type:"Skeleton",generator:"Skeleton.toJSON"},bones:[],boneInverses:[]};e.uuid=this.uuid;let t=this.bones,n=this.boneInverses;for(let s=0,r=t.length;s<r;s++){let o=t[s];e.bones.push(o.uuid);let a=n[s];e.boneInverses.push(a.toArray())}return e}},ns=class extends At{constructor(e,t,n,s=1){super(e,t,n),this.isInstancedBufferAttribute=!0,this.meshPerAttribute=s}copy(e){return super.copy(e),this.meshPerAttribute=e.meshPerAttribute,this}toJSON(){let e=super.toJSON();return e.meshPerAttribute=this.meshPerAttribute,e.isInstancedBufferAttribute=!0,e}},Us=new Je,pd=new Je,Uo=[],md=new xn,my=new Je,Tr=new Me,Ar=new bn,er=class extends Me{constructor(e,t,n){super(e,t),this.isInstancedMesh=!0,this.instanceMatrix=new ns(new Float32Array(n*16),16),this.instanceColor=null,this.count=n,this.boundingBox=null,this.boundingSphere=null;for(let s=0;s<n;s++)this.setMatrixAt(s,my)}computeBoundingBox(){let e=this.geometry,t=this.count;this.boundingBox===null&&(this.boundingBox=new xn),e.boundingBox===null&&e.computeBoundingBox(),this.boundingBox.makeEmpty();for(let n=0;n<t;n++)this.getMatrixAt(n,Us),md.copy(e.boundingBox).applyMatrix4(Us),this.boundingBox.union(md)}computeBoundingSphere(){let e=this.geometry,t=this.count;this.boundingSphere===null&&(this.boundingSphere=new bn),e.boundingSphere===null&&e.computeBoundingSphere(),this.boundingSphere.makeEmpty();for(let n=0;n<t;n++)this.getMatrixAt(n,Us),Ar.copy(e.boundingSphere).applyMatrix4(Us),this.boundingSphere.union(Ar)}copy(e,t){return super.copy(e,t),this.instanceMatrix.copy(e.instanceMatrix),e.instanceColor!==null&&(this.instanceColor=e.instanceColor.clone()),this.count=e.count,e.boundingBox!==null&&(this.boundingBox=e.boundingBox.clone()),e.boundingSphere!==null&&(this.boundingSphere=e.boundingSphere.clone()),this}getColorAt(e,t){t.fromArray(this.instanceColor.array,e*3)}getMatrixAt(e,t){t.fromArray(this.instanceMatrix.array,e*16)}raycast(e,t){let n=this.matrixWorld,s=this.count;if(Tr.geometry=this.geometry,Tr.material=this.material,Tr.material!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),Ar.copy(this.boundingSphere),Ar.applyMatrix4(n),e.ray.intersectsSphere(Ar)!==!1))for(let r=0;r<s;r++){this.getMatrixAt(r,Us),pd.multiplyMatrices(n,Us),Tr.matrixWorld=pd,Tr.raycast(e,Uo);for(let o=0,a=Uo.length;o<a;o++){let c=Uo[o];c.instanceId=r,c.object=this,t.push(c)}Uo.length=0}}setColorAt(e,t){this.instanceColor===null&&(this.instanceColor=new ns(new Float32Array(this.instanceMatrix.count*3),3)),t.toArray(this.instanceColor.array,e*3)}setMatrixAt(e,t){t.toArray(this.instanceMatrix.array,e*16)}updateMorphTargets(){}dispose(){this.dispatchEvent({type:"dispose"})}};var Gr=class extends fn{constructor(e){super(),this.isLineBasicMaterial=!0,this.type="LineBasicMaterial",this.color=new ge(16777215),this.map=null,this.linewidth=1,this.linecap="round",this.linejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.linewidth=e.linewidth,this.linecap=e.linecap,this.linejoin=e.linejoin,this.fog=e.fog,this}},gd=new I,xd=new I,_d=new Je,Oc=new Ks,Oo=new bn,tr=class extends bt{constructor(e=new Nt,t=new Gr){super(),this.isLine=!0,this.type="Line",this.geometry=e,this.material=t,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}computeLineDistances(){let e=this.geometry;if(e.index===null){let t=e.attributes.position,n=[0];for(let s=1,r=t.count;s<r;s++)gd.fromBufferAttribute(t,s-1),xd.fromBufferAttribute(t,s),n[s]=n[s-1],n[s]+=gd.distanceTo(xd);e.setAttribute("lineDistance",new ht(n,1))}else console.warn("THREE.Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}raycast(e,t){let n=this.geometry,s=this.matrixWorld,r=e.params.Line.threshold,o=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),Oo.copy(n.boundingSphere),Oo.applyMatrix4(s),Oo.radius+=r,e.ray.intersectsSphere(Oo)===!1)return;_d.copy(s).invert(),Oc.copy(e.ray).applyMatrix4(_d);let a=r/((this.scale.x+this.scale.y+this.scale.z)/3),c=a*a,l=new I,h=new I,u=new I,d=new I,f=this.isLineSegments?2:1,g=n.index,m=n.attributes.position;if(g!==null){let p=Math.max(0,o.start),y=Math.min(g.count,o.start+o.count);for(let _=p,b=y-1;_<b;_+=f){let C=g.getX(_),A=g.getX(_+1);if(l.fromBufferAttribute(m,C),h.fromBufferAttribute(m,A),Oc.distanceSqToSegment(l,h,d,u)>c)continue;d.applyMatrix4(this.matrixWorld);let O=e.ray.origin.distanceTo(d);O<e.near||O>e.far||t.push({distance:O,point:u.clone().applyMatrix4(this.matrixWorld),index:_,face:null,faceIndex:null,object:this})}}else{let p=Math.max(0,o.start),y=Math.min(m.count,o.start+o.count);for(let _=p,b=y-1;_<b;_+=f){if(l.fromBufferAttribute(m,_),h.fromBufferAttribute(m,_+1),Oc.distanceSqToSegment(l,h,d,u)>c)continue;d.applyMatrix4(this.matrixWorld);let A=e.ray.origin.distanceTo(d);A<e.near||A>e.far||t.push({distance:A,point:u.clone().applyMatrix4(this.matrixWorld),index:_,face:null,faceIndex:null,object:this})}}}updateMorphTargets(){let t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){let s=t[n[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,o=s.length;r<o;r++){let a=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=r}}}}},yd=new I,vd=new I,ha=class extends tr{constructor(e,t){super(e,t),this.isLineSegments=!0,this.type="LineSegments"}computeLineDistances(){let e=this.geometry;if(e.index===null){let t=e.attributes.position,n=[];for(let s=0,r=t.count;s<r;s+=2)yd.fromBufferAttribute(t,s),vd.fromBufferAttribute(t,s+1),n[s]=s===0?0:n[s-1],n[s+1]=n[s]+yd.distanceTo(vd);e.setAttribute("lineDistance",new ht(n,1))}else console.warn("THREE.LineSegments.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}},ua=class extends tr{constructor(e,t){super(e,t),this.isLineLoop=!0,this.type="LineLoop"}},is=class extends fn{constructor(e){super(),this.isPointsMaterial=!0,this.type="PointsMaterial",this.color=new ge(16777215),this.map=null,this.alphaMap=null,this.size=1,this.sizeAttenuation=!0,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.alphaMap=e.alphaMap,this.size=e.size,this.sizeAttenuation=e.sizeAttenuation,this.fog=e.fog,this}},Md=new Je,ll=new Ks,Fo=new bn,Bo=new I,nr=class extends bt{constructor(e=new Nt,t=new is){super(),this.isPoints=!0,this.type="Points",this.geometry=e,this.material=t,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}raycast(e,t){let n=this.geometry,s=this.matrixWorld,r=e.params.Points.threshold,o=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),Fo.copy(n.boundingSphere),Fo.applyMatrix4(s),Fo.radius+=r,e.ray.intersectsSphere(Fo)===!1)return;Md.copy(s).invert(),ll.copy(e.ray).applyMatrix4(Md);let a=r/((this.scale.x+this.scale.y+this.scale.z)/3),c=a*a,l=n.index,u=n.attributes.position;if(l!==null){let d=Math.max(0,o.start),f=Math.min(l.count,o.start+o.count);for(let g=d,x=f;g<x;g++){let m=l.getX(g);Bo.fromBufferAttribute(u,m),bd(Bo,m,c,s,e,t,this)}}else{let d=Math.max(0,o.start),f=Math.min(u.count,o.start+o.count);for(let g=d,x=f;g<x;g++)Bo.fromBufferAttribute(u,g),bd(Bo,g,c,s,e,t,this)}}updateMorphTargets(){let t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){let s=t[n[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,o=s.length;r<o;r++){let a=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=r}}}}};function bd(i,e,t,n,s,r,o){let a=ll.distanceSqToPoint(i);if(a<t){let c=new I;ll.closestPointToPoint(i,c),c.applyMatrix4(n);let l=s.ray.origin.distanceTo(c);if(l<s.near||l>s.far)return;r.push({distance:l,distanceToRay:Math.sqrt(a),point:c,index:e,face:null,object:o})}}var Ut=class i extends Nt{constructor(e=1,t=1,n=1,s=32,r=1,o=!1,a=0,c=Math.PI*2){super(),this.type="CylinderGeometry",this.parameters={radiusTop:e,radiusBottom:t,height:n,radialSegments:s,heightSegments:r,openEnded:o,thetaStart:a,thetaLength:c};let l=this;s=Math.floor(s),r=Math.floor(r);let h=[],u=[],d=[],f=[],g=0,x=[],m=n/2,p=0;y(),o===!1&&(e>0&&_(!0),t>0&&_(!1)),this.setIndex(h),this.setAttribute("position",new ht(u,3)),this.setAttribute("normal",new ht(d,3)),this.setAttribute("uv",new ht(f,2));function y(){let b=new I,C=new I,A=0,R=(t-e)/n;for(let O=0;O<=r;O++){let v=[],S=O/r,F=S*(t-e)+e;for(let j=0;j<=s;j++){let ee=j/s,z=ee*c+a,B=Math.sin(z),Q=Math.cos(z);C.x=F*B,C.y=-S*n+m,C.z=F*Q,u.push(C.x,C.y,C.z),b.set(B,R,Q).normalize(),d.push(b.x,b.y,b.z),f.push(ee,1-S),v.push(g++)}x.push(v)}for(let O=0;O<s;O++)for(let v=0;v<r;v++){let S=x[v][O],F=x[v+1][O],j=x[v+1][O+1],ee=x[v][O+1];h.push(S,F,ee),h.push(F,j,ee),A+=6}l.addGroup(p,A,0),p+=A}function _(b){let C=g,A=new He,R=new I,O=0,v=b===!0?e:t,S=b===!0?1:-1;for(let j=1;j<=s;j++)u.push(0,m*S,0),d.push(0,S,0),f.push(.5,.5),g++;let F=g;for(let j=0;j<=s;j++){let z=j/s*c+a,B=Math.cos(z),Q=Math.sin(z);R.x=v*Q,R.y=m*S,R.z=v*B,u.push(R.x,R.y,R.z),d.push(0,S,0),A.x=B*.5+.5,A.y=Q*.5*S+.5,f.push(A.x,A.y),g++}for(let j=0;j<s;j++){let ee=C+j,z=F+j;b===!0?h.push(z,z+1,ee):h.push(z+1,z,ee),O+=3}l.addGroup(p,O,b===!0?1:2),p+=O}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new i(e.radiusTop,e.radiusBottom,e.height,e.radialSegments,e.heightSegments,e.openEnded,e.thetaStart,e.thetaLength)}},Jt=class i extends Ut{constructor(e=1,t=1,n=32,s=1,r=!1,o=0,a=Math.PI*2){super(0,e,t,n,s,r,o,a),this.type="ConeGeometry",this.parameters={radius:e,height:t,radialSegments:n,heightSegments:s,openEnded:r,thetaStart:o,thetaLength:a}}static fromJSON(e){return new i(e.radius,e.height,e.radialSegments,e.heightSegments,e.openEnded,e.thetaStart,e.thetaLength)}},Vr=class i extends Nt{constructor(e=[],t=[],n=1,s=0){super(),this.type="PolyhedronGeometry",this.parameters={vertices:e,indices:t,radius:n,detail:s};let r=[],o=[];a(s),l(n),h(),this.setAttribute("position",new ht(r,3)),this.setAttribute("normal",new ht(r.slice(),3)),this.setAttribute("uv",new ht(o,2)),s===0?this.computeVertexNormals():this.normalizeNormals();function a(y){let _=new I,b=new I,C=new I;for(let A=0;A<t.length;A+=3)f(t[A+0],_),f(t[A+1],b),f(t[A+2],C),c(_,b,C,y)}function c(y,_,b,C){let A=C+1,R=[];for(let O=0;O<=A;O++){R[O]=[];let v=y.clone().lerp(b,O/A),S=_.clone().lerp(b,O/A),F=A-O;for(let j=0;j<=F;j++)j===0&&O===A?R[O][j]=v:R[O][j]=v.clone().lerp(S,j/F)}for(let O=0;O<A;O++)for(let v=0;v<2*(A-O)-1;v++){let S=Math.floor(v/2);v%2===0?(d(R[O][S+1]),d(R[O+1][S]),d(R[O][S])):(d(R[O][S+1]),d(R[O+1][S+1]),d(R[O+1][S]))}}function l(y){let _=new I;for(let b=0;b<r.length;b+=3)_.x=r[b+0],_.y=r[b+1],_.z=r[b+2],_.normalize().multiplyScalar(y),r[b+0]=_.x,r[b+1]=_.y,r[b+2]=_.z}function h(){let y=new I;for(let _=0;_<r.length;_+=3){y.x=r[_+0],y.y=r[_+1],y.z=r[_+2];let b=m(y)/2/Math.PI+.5,C=p(y)/Math.PI+.5;o.push(b,1-C)}g(),u()}function u(){for(let y=0;y<o.length;y+=6){let _=o[y+0],b=o[y+2],C=o[y+4],A=Math.max(_,b,C),R=Math.min(_,b,C);A>.9&&R<.1&&(_<.2&&(o[y+0]+=1),b<.2&&(o[y+2]+=1),C<.2&&(o[y+4]+=1))}}function d(y){r.push(y.x,y.y,y.z)}function f(y,_){let b=y*3;_.x=e[b+0],_.y=e[b+1],_.z=e[b+2]}function g(){let y=new I,_=new I,b=new I,C=new I,A=new He,R=new He,O=new He;for(let v=0,S=0;v<r.length;v+=9,S+=6){y.set(r[v+0],r[v+1],r[v+2]),_.set(r[v+3],r[v+4],r[v+5]),b.set(r[v+6],r[v+7],r[v+8]),A.set(o[S+0],o[S+1]),R.set(o[S+2],o[S+3]),O.set(o[S+4],o[S+5]),C.copy(y).add(_).add(b).divideScalar(3);let F=m(C);x(A,S+0,y,F),x(R,S+2,_,F),x(O,S+4,b,F)}}function x(y,_,b,C){C<0&&y.x===1&&(o[_]=y.x-1),b.x===0&&b.z===0&&(o[_]=C/2/Math.PI+.5)}function m(y){return Math.atan2(y.z,-y.x)}function p(y){return Math.atan2(-y.y,Math.sqrt(y.x*y.x+y.z*y.z))}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new i(e.vertices,e.indices,e.radius,e.details)}},da=class i extends Vr{constructor(e=1,t=0){let n=(1+Math.sqrt(5))/2,s=1/n,r=[-1,-1,-1,-1,-1,1,-1,1,-1,-1,1,1,1,-1,-1,1,-1,1,1,1,-1,1,1,1,0,-s,-n,0,-s,n,0,s,-n,0,s,n,-s,-n,0,-s,n,0,s,-n,0,s,n,0,-n,0,-s,n,0,-s,-n,0,s,n,0,s],o=[3,11,7,3,7,15,3,15,13,7,19,17,7,17,6,7,6,15,17,4,8,17,8,10,17,10,6,8,0,16,8,16,2,8,2,10,0,12,1,0,1,18,0,18,16,6,10,2,6,2,13,6,13,15,2,16,18,2,18,3,2,3,13,18,1,9,18,9,11,18,11,3,4,14,12,4,12,0,4,0,8,11,9,5,11,5,19,11,19,7,19,5,14,19,14,4,19,4,17,1,12,14,1,14,5,1,5,9];super(r,o,e,t),this.type="DodecahedronGeometry",this.parameters={radius:e,detail:t}}static fromJSON(e){return new i(e.radius,e.detail)}};var Yn=class i extends Vr{constructor(e=1,t=0){let n=(1+Math.sqrt(5))/2,s=[-1,n,0,1,n,0,-1,-n,0,1,-n,0,0,-1,n,0,1,n,0,-1,-n,0,1,-n,n,0,-1,n,0,1,-n,0,-1,-n,0,1],r=[0,11,5,0,5,1,0,1,7,0,7,10,0,10,11,1,5,9,5,11,4,11,10,2,10,7,6,7,1,8,3,9,4,3,4,2,3,2,6,3,6,8,3,8,9,4,9,5,2,4,11,6,2,10,8,6,7,9,8,1];super(s,r,e,t),this.type="IcosahedronGeometry",this.parameters={radius:e,detail:t}}static fromJSON(e){return new i(e.radius,e.detail)}},ir=class i extends Vr{constructor(e=1,t=0){let n=[1,0,0,-1,0,0,0,1,0,0,-1,0,0,0,1,0,0,-1],s=[0,2,4,0,4,3,0,3,5,0,5,2,1,2,5,1,5,3,1,3,4,1,4,2];super(n,s,e,t),this.type="OctahedronGeometry",this.parameters={radius:e,detail:t}}static fromJSON(e){return new i(e.radius,e.detail)}},Wr=class i extends Nt{constructor(e=.5,t=1,n=32,s=1,r=0,o=Math.PI*2){super(),this.type="RingGeometry",this.parameters={innerRadius:e,outerRadius:t,thetaSegments:n,phiSegments:s,thetaStart:r,thetaLength:o},n=Math.max(3,n),s=Math.max(1,s);let a=[],c=[],l=[],h=[],u=e,d=(t-e)/s,f=new I,g=new He;for(let x=0;x<=s;x++){for(let m=0;m<=n;m++){let p=r+m/n*o;f.x=u*Math.cos(p),f.y=u*Math.sin(p),c.push(f.x,f.y,f.z),l.push(0,0,1),g.x=(f.x/t+1)/2,g.y=(f.y/t+1)/2,h.push(g.x,g.y)}u+=d}for(let x=0;x<s;x++){let m=x*(n+1);for(let p=0;p<n;p++){let y=p+m,_=y,b=y+n+1,C=y+n+2,A=y+1;a.push(_,b,A),a.push(b,C,A)}}this.setIndex(a),this.setAttribute("position",new ht(c,3)),this.setAttribute("normal",new ht(l,3)),this.setAttribute("uv",new ht(h,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new i(e.innerRadius,e.outerRadius,e.thetaSegments,e.phiSegments,e.thetaStart,e.thetaLength)}};var Xr=class i extends Nt{constructor(e=1,t=32,n=16,s=0,r=Math.PI*2,o=0,a=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:e,widthSegments:t,heightSegments:n,phiStart:s,phiLength:r,thetaStart:o,thetaLength:a},t=Math.max(3,Math.floor(t)),n=Math.max(2,Math.floor(n));let c=Math.min(o+a,Math.PI),l=0,h=[],u=new I,d=new I,f=[],g=[],x=[],m=[];for(let p=0;p<=n;p++){let y=[],_=p/n,b=0;p===0&&o===0?b=.5/t:p===n&&c===Math.PI&&(b=-.5/t);for(let C=0;C<=t;C++){let A=C/t;u.x=-e*Math.cos(s+A*r)*Math.sin(o+_*a),u.y=e*Math.cos(o+_*a),u.z=e*Math.sin(s+A*r)*Math.sin(o+_*a),g.push(u.x,u.y,u.z),d.copy(u).normalize(),x.push(d.x,d.y,d.z),m.push(A+b,1-_),y.push(l++)}h.push(y)}for(let p=0;p<n;p++)for(let y=0;y<t;y++){let _=h[p][y+1],b=h[p][y],C=h[p+1][y],A=h[p+1][y+1];(p!==0||o>0)&&f.push(_,b,A),(p!==n-1||c<Math.PI)&&f.push(b,C,A)}this.setIndex(f),this.setAttribute("position",new ht(g,3)),this.setAttribute("normal",new ht(x,3)),this.setAttribute("uv",new ht(m,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new i(e.radius,e.widthSegments,e.heightSegments,e.phiStart,e.phiLength,e.thetaStart,e.thetaLength)}};var qr=class i extends Nt{constructor(e=1,t=.4,n=12,s=48,r=Math.PI*2){super(),this.type="TorusGeometry",this.parameters={radius:e,tube:t,radialSegments:n,tubularSegments:s,arc:r},n=Math.floor(n),s=Math.floor(s);let o=[],a=[],c=[],l=[],h=new I,u=new I,d=new I;for(let f=0;f<=n;f++)for(let g=0;g<=s;g++){let x=g/s*r,m=f/n*Math.PI*2;u.x=(e+t*Math.cos(m))*Math.cos(x),u.y=(e+t*Math.cos(m))*Math.sin(x),u.z=t*Math.sin(m),a.push(u.x,u.y,u.z),h.x=e*Math.cos(x),h.y=e*Math.sin(x),d.subVectors(u,h).normalize(),c.push(d.x,d.y,d.z),l.push(g/s),l.push(f/n)}for(let f=1;f<=n;f++)for(let g=1;g<=s;g++){let x=(s+1)*f+g-1,m=(s+1)*(f-1)+g-1,p=(s+1)*(f-1)+g,y=(s+1)*f+g;o.push(x,m,y),o.push(m,p,y)}this.setIndex(o),this.setAttribute("position",new ht(a,3)),this.setAttribute("normal",new ht(c,3)),this.setAttribute("uv",new ht(l,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new i(e.radius,e.tube,e.radialSegments,e.tubularSegments,e.arc)}};var sr=class extends fn{constructor(e){super(),this.isMeshStandardMaterial=!0,this.defines={STANDARD:""},this.type="MeshStandardMaterial",this.color=new ge(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new ge(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=Ta,this.normalScale=new He(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.defines={STANDARD:""},this.color.copy(e.color),this.roughness=e.roughness,this.metalness=e.metalness,this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.roughnessMap=e.roughnessMap,this.metalnessMap=e.metalnessMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapIntensity=e.envMapIntensity,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}},Cn=class extends sr{constructor(e){super(),this.isMeshPhysicalMaterial=!0,this.defines={STANDARD:"",PHYSICAL:""},this.type="MeshPhysicalMaterial",this.anisotropyRotation=0,this.anisotropyMap=null,this.clearcoatMap=null,this.clearcoatRoughness=0,this.clearcoatRoughnessMap=null,this.clearcoatNormalScale=new He(1,1),this.clearcoatNormalMap=null,this.ior=1.5,Object.defineProperty(this,"reflectivity",{get:function(){return rn(2.5*(this.ior-1)/(this.ior+1),0,1)},set:function(t){this.ior=(1+.4*t)/(1-.4*t)}}),this.iridescenceMap=null,this.iridescenceIOR=1.3,this.iridescenceThicknessRange=[100,400],this.iridescenceThicknessMap=null,this.sheenColor=new ge(0),this.sheenColorMap=null,this.sheenRoughness=1,this.sheenRoughnessMap=null,this.transmissionMap=null,this.thickness=0,this.thicknessMap=null,this.attenuationDistance=1/0,this.attenuationColor=new ge(1,1,1),this.specularIntensity=1,this.specularIntensityMap=null,this.specularColor=new ge(1,1,1),this.specularColorMap=null,this._anisotropy=0,this._clearcoat=0,this._iridescence=0,this._sheen=0,this._transmission=0,this.setValues(e)}get anisotropy(){return this._anisotropy}set anisotropy(e){this._anisotropy>0!=e>0&&this.version++,this._anisotropy=e}get clearcoat(){return this._clearcoat}set clearcoat(e){this._clearcoat>0!=e>0&&this.version++,this._clearcoat=e}get iridescence(){return this._iridescence}set iridescence(e){this._iridescence>0!=e>0&&this.version++,this._iridescence=e}get sheen(){return this._sheen}set sheen(e){this._sheen>0!=e>0&&this.version++,this._sheen=e}get transmission(){return this._transmission}set transmission(e){this._transmission>0!=e>0&&this.version++,this._transmission=e}copy(e){return super.copy(e),this.defines={STANDARD:"",PHYSICAL:""},this.anisotropy=e.anisotropy,this.anisotropyRotation=e.anisotropyRotation,this.anisotropyMap=e.anisotropyMap,this.clearcoat=e.clearcoat,this.clearcoatMap=e.clearcoatMap,this.clearcoatRoughness=e.clearcoatRoughness,this.clearcoatRoughnessMap=e.clearcoatRoughnessMap,this.clearcoatNormalMap=e.clearcoatNormalMap,this.clearcoatNormalScale.copy(e.clearcoatNormalScale),this.ior=e.ior,this.iridescence=e.iridescence,this.iridescenceMap=e.iridescenceMap,this.iridescenceIOR=e.iridescenceIOR,this.iridescenceThicknessRange=[...e.iridescenceThicknessRange],this.iridescenceThicknessMap=e.iridescenceThicknessMap,this.sheen=e.sheen,this.sheenColor.copy(e.sheenColor),this.sheenColorMap=e.sheenColorMap,this.sheenRoughness=e.sheenRoughness,this.sheenRoughnessMap=e.sheenRoughnessMap,this.transmission=e.transmission,this.transmissionMap=e.transmissionMap,this.thickness=e.thickness,this.thicknessMap=e.thicknessMap,this.attenuationDistance=e.attenuationDistance,this.attenuationColor.copy(e.attenuationColor),this.specularIntensity=e.specularIntensity,this.specularIntensityMap=e.specularIntensityMap,this.specularColor.copy(e.specularColor),this.specularColorMap=e.specularColorMap,this}},fa=class extends fn{constructor(e){super(),this.isMeshPhongMaterial=!0,this.type="MeshPhongMaterial",this.color=new ge(16777215),this.specular=new ge(1118481),this.shininess=30,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new ge(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=Ta,this.normalScale=new He(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.combine=ba,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.specular.copy(e.specular),this.shininess=e.shininess,this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}};var Ot=class extends fn{constructor(e){super(),this.isMeshLambertMaterial=!0,this.type="MeshLambertMaterial",this.color=new ge(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new ge(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=Ta,this.normalScale=new He(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.combine=ba,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}};function ko(i,e,t){return!i||!t&&i.constructor===e?i:typeof e.BYTES_PER_ELEMENT=="number"?new e(i):Array.prototype.slice.call(i)}function gy(i){return ArrayBuffer.isView(i)&&!(i instanceof DataView)}function xy(i){function e(s,r){return i[s]-i[r]}let t=i.length,n=new Array(t);for(let s=0;s!==t;++s)n[s]=s;return n.sort(e),n}function wd(i,e,t){let n=i.length,s=new i.constructor(n);for(let r=0,o=0;o!==n;++r){let a=t[r]*e;for(let c=0;c!==e;++c)s[o++]=i[a+c]}return s}function jd(i,e,t,n){let s=1,r=i[0];for(;r!==void 0&&r[n]===void 0;)r=i[s++];if(r===void 0)return;let o=r[n];if(o!==void 0)if(Array.isArray(o))do o=r[n],o!==void 0&&(e.push(r.time),t.push.apply(t,o)),r=i[s++];while(r!==void 0);else if(o.toArray!==void 0)do o=r[n],o!==void 0&&(e.push(r.time),o.toArray(t,t.length)),r=i[s++];while(r!==void 0);else do o=r[n],o!==void 0&&(e.push(r.time),t.push(o)),r=i[s++];while(r!==void 0)}var Li=class{constructor(e,t,n,s){this.parameterPositions=e,this._cachedIndex=0,this.resultBuffer=s!==void 0?s:new t.constructor(n),this.sampleValues=t,this.valueSize=n,this.settings=null,this.DefaultSettings_={}}evaluate(e){let t=this.parameterPositions,n=this._cachedIndex,s=t[n],r=t[n-1];e:{t:{let o;n:{i:if(!(e<s)){for(let a=n+2;;){if(s===void 0){if(e<r)break i;return n=t.length,this._cachedIndex=n,this.copySampleValue_(n-1)}if(n===a)break;if(r=s,s=t[++n],e<s)break t}o=t.length;break n}if(!(e>=r)){let a=t[1];e<a&&(n=2,r=a);for(let c=n-2;;){if(r===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(n===c)break;if(s=r,r=t[--n-1],e>=r)break t}o=n,n=0;break n}break e}for(;n<o;){let a=n+o>>>1;e<t[a]?o=a:n=a+1}if(s=t[n],r=t[n-1],r===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(s===void 0)return n=t.length,this._cachedIndex=n,this.copySampleValue_(n-1)}this._cachedIndex=n,this.intervalChanged_(n,r,s)}return this.interpolate_(n,r,e,s)}getSettings_(){return this.settings||this.DefaultSettings_}copySampleValue_(e){let t=this.resultBuffer,n=this.sampleValues,s=this.valueSize,r=e*s;for(let o=0;o!==s;++o)t[o]=n[r+o];return t}interpolate_(){throw new Error("call to abstract method")}intervalChanged_(){}},hl=class extends Li{constructor(e,t,n,s){super(e,t,n,s),this._weightPrev=-0,this._offsetPrev=-0,this._weightNext=-0,this._offsetNext=-0,this.DefaultSettings_={endingStart:Os,endingEnd:Os}}intervalChanged_(e,t,n){let s=this.parameterPositions,r=e-2,o=e+1,a=s[r],c=s[o];if(a===void 0)switch(this.getSettings_().endingStart){case Fs:r=e,a=2*t-n;break;case Vo:r=s.length-2,a=t+s[r]-s[r+1];break;default:r=e,a=n}if(c===void 0)switch(this.getSettings_().endingEnd){case Fs:o=e,c=2*n-t;break;case Vo:o=1,c=n+s[1]-s[0];break;default:o=e-1,c=t}let l=(n-t)*.5,h=this.valueSize;this._weightPrev=l/(t-a),this._weightNext=l/(c-n),this._offsetPrev=r*h,this._offsetNext=o*h}interpolate_(e,t,n,s){let r=this.resultBuffer,o=this.sampleValues,a=this.valueSize,c=e*a,l=c-a,h=this._offsetPrev,u=this._offsetNext,d=this._weightPrev,f=this._weightNext,g=(n-t)/(s-t),x=g*g,m=x*g,p=-d*m+2*d*x-d*g,y=(1+d)*m+(-1.5-2*d)*x+(-.5+d)*g+1,_=(-1-f)*m+(1.5+f)*x+.5*g,b=f*m-f*x;for(let C=0;C!==a;++C)r[C]=p*o[h+C]+y*o[l+C]+_*o[c+C]+b*o[u+C];return r}},pa=class extends Li{constructor(e,t,n,s){super(e,t,n,s)}interpolate_(e,t,n,s){let r=this.resultBuffer,o=this.sampleValues,a=this.valueSize,c=e*a,l=c-a,h=(n-t)/(s-t),u=1-h;for(let d=0;d!==a;++d)r[d]=o[l+d]*u+o[c+d]*h;return r}},ul=class extends Li{constructor(e,t,n,s){super(e,t,n,s)}interpolate_(e){return this.copySampleValue_(e-1)}},Pn=class{constructor(e,t,n,s){if(e===void 0)throw new Error("THREE.KeyframeTrack: track name is undefined");if(t===void 0||t.length===0)throw new Error("THREE.KeyframeTrack: no keyframes in track named "+e);this.name=e,this.times=ko(t,this.TimeBufferType),this.values=ko(n,this.ValueBufferType),this.setInterpolation(s||this.DefaultInterpolation)}static toJSON(e){let t=e.constructor,n;if(t.toJSON!==this.toJSON)n=t.toJSON(e);else{n={name:e.name,times:ko(e.times,Array),values:ko(e.values,Array)};let s=e.getInterpolation();s!==e.DefaultInterpolation&&(n.interpolation=s)}return n.type=e.ValueTypeName,n}InterpolantFactoryMethodDiscrete(e){return new ul(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodLinear(e){return new pa(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodSmooth(e){return new hl(this.times,this.values,this.getValueSize(),e)}setInterpolation(e){let t;switch(e){case js:t=this.InterpolantFactoryMethodDiscrete;break;case ts:t=this.InterpolantFactoryMethodLinear;break;case dc:t=this.InterpolantFactoryMethodSmooth;break}if(t===void 0){let n="unsupported interpolation for "+this.ValueTypeName+" keyframe track named "+this.name;if(this.createInterpolant===void 0)if(e!==this.DefaultInterpolation)this.setInterpolation(this.DefaultInterpolation);else throw new Error(n);return console.warn("THREE.KeyframeTrack:",n),this}return this.createInterpolant=t,this}getInterpolation(){switch(this.createInterpolant){case this.InterpolantFactoryMethodDiscrete:return js;case this.InterpolantFactoryMethodLinear:return ts;case this.InterpolantFactoryMethodSmooth:return dc}}getValueSize(){return this.values.length/this.times.length}shift(e){if(e!==0){let t=this.times;for(let n=0,s=t.length;n!==s;++n)t[n]+=e}return this}scale(e){if(e!==1){let t=this.times;for(let n=0,s=t.length;n!==s;++n)t[n]*=e}return this}trim(e,t){let n=this.times,s=n.length,r=0,o=s-1;for(;r!==s&&n[r]<e;)++r;for(;o!==-1&&n[o]>t;)--o;if(++o,r!==0||o!==s){r>=o&&(o=Math.max(o,1),r=o-1);let a=this.getValueSize();this.times=n.slice(r,o),this.values=this.values.slice(r*a,o*a)}return this}validate(){let e=!0,t=this.getValueSize();t-Math.floor(t)!==0&&(console.error("THREE.KeyframeTrack: Invalid value size in track.",this),e=!1);let n=this.times,s=this.values,r=n.length;r===0&&(console.error("THREE.KeyframeTrack: Track is empty.",this),e=!1);let o=null;for(let a=0;a!==r;a++){let c=n[a];if(typeof c=="number"&&isNaN(c)){console.error("THREE.KeyframeTrack: Time is not a valid number.",this,a,c),e=!1;break}if(o!==null&&o>c){console.error("THREE.KeyframeTrack: Out of order keys.",this,a,c,o),e=!1;break}o=c}if(s!==void 0&&gy(s))for(let a=0,c=s.length;a!==c;++a){let l=s[a];if(isNaN(l)){console.error("THREE.KeyframeTrack: Value is not a valid number.",this,a,l),e=!1;break}}return e}optimize(){let e=this.times.slice(),t=this.values.slice(),n=this.getValueSize(),s=this.getInterpolation()===dc,r=e.length-1,o=1;for(let a=1;a<r;++a){let c=!1,l=e[a],h=e[a+1];if(l!==h&&(a!==1||l!==e[0]))if(s)c=!0;else{let u=a*n,d=u-n,f=u+n;for(let g=0;g!==n;++g){let x=t[u+g];if(x!==t[d+g]||x!==t[f+g]){c=!0;break}}}if(c){if(a!==o){e[o]=e[a];let u=a*n,d=o*n;for(let f=0;f!==n;++f)t[d+f]=t[u+f]}++o}}if(r>0){e[o]=e[r];for(let a=r*n,c=o*n,l=0;l!==n;++l)t[c+l]=t[a+l];++o}return o!==e.length?(this.times=e.slice(0,o),this.values=t.slice(0,o*n)):(this.times=e,this.values=t),this}clone(){let e=this.times.slice(),t=this.values.slice(),n=this.constructor,s=new n(this.name,e,t);return s.createInterpolant=this.createInterpolant,s}};Pn.prototype.TimeBufferType=Float32Array;Pn.prototype.ValueBufferType=Float32Array;Pn.prototype.DefaultInterpolation=ts;var Ii=class extends Pn{};Ii.prototype.ValueTypeName="bool";Ii.prototype.ValueBufferType=Array;Ii.prototype.DefaultInterpolation=js;Ii.prototype.InterpolantFactoryMethodLinear=void 0;Ii.prototype.InterpolantFactoryMethodSmooth=void 0;var ma=class extends Pn{};ma.prototype.ValueTypeName="color";var di=class extends Pn{};di.prototype.ValueTypeName="number";var dl=class extends Li{constructor(e,t,n,s){super(e,t,n,s)}interpolate_(e,t,n,s){let r=this.resultBuffer,o=this.sampleValues,a=this.valueSize,c=(n-t)/(s-t),l=e*a;for(let h=l+a;l!==h;l+=4)Gt.slerpFlat(r,0,o,l-a,o,l,c);return r}},jn=class extends Pn{InterpolantFactoryMethodLinear(e){return new dl(this.times,this.values,this.getValueSize(),e)}};jn.prototype.ValueTypeName="quaternion";jn.prototype.DefaultInterpolation=ts;jn.prototype.InterpolantFactoryMethodSmooth=void 0;var zi=class extends Pn{};zi.prototype.ValueTypeName="string";zi.prototype.ValueBufferType=Array;zi.prototype.DefaultInterpolation=js;zi.prototype.InterpolantFactoryMethodLinear=void 0;zi.prototype.InterpolantFactoryMethodSmooth=void 0;var fi=class extends Pn{};fi.prototype.ValueTypeName="vector";var pi=class{constructor(e,t=-1,n,s=Tl){this.name=e,this.tracks=n,this.duration=t,this.blendMode=s,this.uuid=Fn(),this.duration<0&&this.resetDuration()}static parse(e){let t=[],n=e.tracks,s=1/(e.fps||1);for(let o=0,a=n.length;o!==a;++o)t.push(yy(n[o]).scale(s));let r=new this(e.name,e.duration,t,e.blendMode);return r.uuid=e.uuid,r}static toJSON(e){let t=[],n=e.tracks,s={name:e.name,duration:e.duration,tracks:t,uuid:e.uuid,blendMode:e.blendMode};for(let r=0,o=n.length;r!==o;++r)t.push(Pn.toJSON(n[r]));return s}static CreateFromMorphTargetSequence(e,t,n,s){let r=t.length,o=[];for(let a=0;a<r;a++){let c=[],l=[];c.push((a+r-1)%r,a,(a+1)%r),l.push(0,1,0);let h=xy(c);c=wd(c,1,h),l=wd(l,1,h),!s&&c[0]===0&&(c.push(r),l.push(l[0])),o.push(new di(".morphTargetInfluences["+t[a].name+"]",c,l).scale(1/n))}return new this(e,-1,o)}static findByName(e,t){let n=e;if(!Array.isArray(e)){let s=e;n=s.geometry&&s.geometry.animations||s.animations}for(let s=0;s<n.length;s++)if(n[s].name===t)return n[s];return null}static CreateClipsFromMorphTargetSequences(e,t,n){let s={},r=/^([\w-]*?)([\d]+)$/;for(let a=0,c=e.length;a<c;a++){let l=e[a],h=l.name.match(r);if(h&&h.length>1){let u=h[1],d=s[u];d||(s[u]=d=[]),d.push(l)}}let o=[];for(let a in s)o.push(this.CreateFromMorphTargetSequence(a,s[a],t,n));return o}static parseAnimation(e,t){if(!e)return console.error("THREE.AnimationClip: No animation in JSONLoader data."),null;let n=function(u,d,f,g,x){if(f.length!==0){let m=[],p=[];jd(f,m,p,g),m.length!==0&&x.push(new u(d,m,p))}},s=[],r=e.name||"default",o=e.fps||30,a=e.blendMode,c=e.length||-1,l=e.hierarchy||[];for(let u=0;u<l.length;u++){let d=l[u].keys;if(!(!d||d.length===0))if(d[0].morphTargets){let f={},g;for(g=0;g<d.length;g++)if(d[g].morphTargets)for(let x=0;x<d[g].morphTargets.length;x++)f[d[g].morphTargets[x]]=-1;for(let x in f){let m=[],p=[];for(let y=0;y!==d[g].morphTargets.length;++y){let _=d[g];m.push(_.time),p.push(_.morphTarget===x?1:0)}s.push(new di(".morphTargetInfluence["+x+"]",m,p))}c=f.length*o}else{let f=".bones["+t[u].name+"]";n(fi,f+".position",d,"pos",s),n(jn,f+".quaternion",d,"rot",s),n(fi,f+".scale",d,"scl",s)}}return s.length===0?null:new this(r,c,s,a)}resetDuration(){let e=this.tracks,t=0;for(let n=0,s=e.length;n!==s;++n){let r=this.tracks[n];t=Math.max(t,r.times[r.times.length-1])}return this.duration=t,this}trim(){for(let e=0;e<this.tracks.length;e++)this.tracks[e].trim(0,this.duration);return this}validate(){let e=!0;for(let t=0;t<this.tracks.length;t++)e=e&&this.tracks[t].validate();return e}optimize(){for(let e=0;e<this.tracks.length;e++)this.tracks[e].optimize();return this}clone(){let e=[];for(let t=0;t<this.tracks.length;t++)e.push(this.tracks[t].clone());return new this.constructor(this.name,this.duration,e,this.blendMode)}toJSON(){return this.constructor.toJSON(this)}};function _y(i){switch(i.toLowerCase()){case"scalar":case"double":case"float":case"number":case"integer":return di;case"vector":case"vector2":case"vector3":case"vector4":return fi;case"color":return ma;case"quaternion":return jn;case"bool":case"boolean":return Ii;case"string":return zi}throw new Error("THREE.KeyframeTrack: Unsupported typeName: "+i)}function yy(i){if(i.type===void 0)throw new Error("THREE.KeyframeTrack: track type undefined, can not parse");let e=_y(i.type);if(i.times===void 0){let t=[],n=[];jd(i.keys,t,n,"value"),i.times=t,i.values=n}return e.parse!==void 0?e.parse(i):new e(i.name,i.times,i.values,i.interpolation)}var Ti={enabled:!1,files:{},add:function(i,e){this.enabled!==!1&&(this.files[i]=e)},get:function(i){if(this.enabled!==!1)return this.files[i]},remove:function(i){delete this.files[i]},clear:function(){this.files={}}},fl=class{constructor(e,t,n){let s=this,r=!1,o=0,a=0,c,l=[];this.onStart=void 0,this.onLoad=e,this.onProgress=t,this.onError=n,this.itemStart=function(h){a++,r===!1&&s.onStart!==void 0&&s.onStart(h,o,a),r=!0},this.itemEnd=function(h){o++,s.onProgress!==void 0&&s.onProgress(h,o,a),o===a&&(r=!1,s.onLoad!==void 0&&s.onLoad())},this.itemError=function(h){s.onError!==void 0&&s.onError(h)},this.resolveURL=function(h){return c?c(h):h},this.setURLModifier=function(h){return c=h,this},this.addHandler=function(h,u){return l.push(h,u),this},this.removeHandler=function(h){let u=l.indexOf(h);return u!==-1&&l.splice(u,2),this},this.getHandler=function(h){for(let u=0,d=l.length;u<d;u+=2){let f=l[u],g=l[u+1];if(f.global&&(f.lastIndex=0),f.test(h))return g}return null}}},vy=new fl,mi=class{constructor(e){this.manager=e!==void 0?e:vy,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={}}load(){}loadAsync(e,t){let n=this;return new Promise(function(s,r){n.load(e,s,t,r)})}parse(){}setCrossOrigin(e){return this.crossOrigin=e,this}setWithCredentials(e){return this.withCredentials=e,this}setPath(e){return this.path=e,this}setResourcePath(e){return this.resourcePath=e,this}setRequestHeader(e){return this.requestHeader=e,this}};mi.DEFAULT_MATERIAL_NAME="__DEFAULT";var si={},pl=class extends Error{constructor(e,t){super(e),this.response=t}},Yr=class extends mi{constructor(e){super(e)}load(e,t,n,s){e===void 0&&(e=""),this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);let r=Ti.get(e);if(r!==void 0)return this.manager.itemStart(e),setTimeout(()=>{t&&t(r),this.manager.itemEnd(e)},0),r;if(si[e]!==void 0){si[e].push({onLoad:t,onProgress:n,onError:s});return}si[e]=[],si[e].push({onLoad:t,onProgress:n,onError:s});let o=new Request(e,{headers:new Headers(this.requestHeader),credentials:this.withCredentials?"include":"same-origin"}),a=this.mimeType,c=this.responseType;fetch(o).then(l=>{if(l.status===200||l.status===0){if(l.status===0&&console.warn("THREE.FileLoader: HTTP Status 0 received."),typeof ReadableStream=="undefined"||l.body===void 0||l.body.getReader===void 0)return l;let h=si[e],u=l.body.getReader(),d=l.headers.get("Content-Length")||l.headers.get("X-File-Size"),f=d?parseInt(d):0,g=f!==0,x=0,m=new ReadableStream({start(p){y();function y(){u.read().then(({done:_,value:b})=>{if(_)p.close();else{x+=b.byteLength;let C=new ProgressEvent("progress",{lengthComputable:g,loaded:x,total:f});for(let A=0,R=h.length;A<R;A++){let O=h[A];O.onProgress&&O.onProgress(C)}p.enqueue(b),y()}})}}});return new Response(m)}else throw new pl(`fetch for "${l.url}" responded with ${l.status}: ${l.statusText}`,l)}).then(l=>{switch(c){case"arraybuffer":return l.arrayBuffer();case"blob":return l.blob();case"document":return l.text().then(h=>new DOMParser().parseFromString(h,a));case"json":return l.json();default:if(a===void 0)return l.text();{let u=/charset="?([^;"\s]*)"?/i.exec(a),d=u&&u[1]?u[1].toLowerCase():void 0,f=new TextDecoder(d);return l.arrayBuffer().then(g=>f.decode(g))}}}).then(l=>{Ti.add(e,l);let h=si[e];delete si[e];for(let u=0,d=h.length;u<d;u++){let f=h[u];f.onLoad&&f.onLoad(l)}}).catch(l=>{let h=si[e];if(h===void 0)throw this.manager.itemError(e),l;delete si[e];for(let u=0,d=h.length;u<d;u++){let f=h[u];f.onError&&f.onError(l)}this.manager.itemError(e)}).finally(()=>{this.manager.itemEnd(e)}),this.manager.itemStart(e)}setResponseType(e){return this.responseType=e,this}setMimeType(e){return this.mimeType=e,this}};var ml=class extends mi{constructor(e){super(e)}load(e,t,n,s){this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);let r=this,o=Ti.get(e);if(o!==void 0)return r.manager.itemStart(e),setTimeout(function(){t&&t(o),r.manager.itemEnd(e)},0),o;let a=Ur("img");function c(){h(),Ti.add(e,this),t&&t(this),r.manager.itemEnd(e)}function l(u){h(),s&&s(u),r.manager.itemError(e),r.manager.itemEnd(e)}function h(){a.removeEventListener("load",c,!1),a.removeEventListener("error",l,!1)}return a.addEventListener("load",c,!1),a.addEventListener("error",l,!1),e.slice(0,5)!=="data:"&&this.crossOrigin!==void 0&&(a.crossOrigin=this.crossOrigin),r.manager.itemStart(e),a.src=e,a}};var ga=class extends mi{constructor(e){super(e)}load(e,t,n,s){let r=new on,o=new ml(this.manager);return o.setCrossOrigin(this.crossOrigin),o.setPath(this.path),o.load(e,function(a){r.image=a,r.needsUpdate=!0,t!==void 0&&t(r)},n,s),r}},rr=class extends bt{constructor(e,t=1){super(),this.isLight=!0,this.type="Light",this.color=new ge(e),this.intensity=t}dispose(){}copy(e,t){return super.copy(e,t),this.color.copy(e.color),this.intensity=e.intensity,this}toJSON(e){let t=super.toJSON(e);return t.object.color=this.color.getHex(),t.object.intensity=this.intensity,this.groundColor!==void 0&&(t.object.groundColor=this.groundColor.getHex()),this.distance!==void 0&&(t.object.distance=this.distance),this.angle!==void 0&&(t.object.angle=this.angle),this.decay!==void 0&&(t.object.decay=this.decay),this.penumbra!==void 0&&(t.object.penumbra=this.penumbra),this.shadow!==void 0&&(t.object.shadow=this.shadow.toJSON()),t}},xa=class extends rr{constructor(e,t,n){super(e,n),this.isHemisphereLight=!0,this.type="HemisphereLight",this.position.copy(bt.DEFAULT_UP),this.updateMatrix(),this.groundColor=new ge(t)}copy(e,t){return super.copy(e,t),this.groundColor.copy(e.groundColor),this}},Fc=new Je,Sd=new I,Ed=new I,jr=class{constructor(e){this.camera=e,this.bias=0,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new He(512,512),this.map=null,this.mapPass=null,this.matrix=new Je,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new Or,this._frameExtents=new He(1,1),this._viewportCount=1,this._viewports=[new pt(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(e){let t=this.camera,n=this.matrix;Sd.setFromMatrixPosition(e.matrixWorld),t.position.copy(Sd),Ed.setFromMatrixPosition(e.target.matrixWorld),t.lookAt(Ed),t.updateMatrixWorld(),Fc.multiplyMatrices(t.projectionMatrix,t.matrixWorldInverse),this._frustum.setFromProjectionMatrix(Fc),n.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),n.multiply(Fc)}getViewport(e){return this._viewports[e]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(e){return this.camera=e.camera.clone(),this.bias=e.bias,this.radius=e.radius,this.mapSize.copy(e.mapSize),this}clone(){return new this.constructor().copy(this)}toJSON(){let e={};return this.bias!==0&&(e.bias=this.bias),this.normalBias!==0&&(e.normalBias=this.normalBias),this.radius!==1&&(e.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(e.mapSize=this.mapSize.toArray()),e.camera=this.camera.toJSON(!1).object,delete e.camera.matrix,e}},gl=class extends jr{constructor(){super(new Wt(50,1,.5,500)),this.isSpotLightShadow=!0,this.focus=1}updateMatrices(e){let t=this.camera,n=Zs*2*e.angle*this.focus,s=this.mapSize.width/this.mapSize.height,r=e.distance||t.far;(n!==t.fov||s!==t.aspect||r!==t.far)&&(t.fov=n,t.aspect=s,t.far=r,t.updateProjectionMatrix()),super.updateMatrices(e)}copy(e){return super.copy(e),this.focus=e.focus,this}},_a=class extends rr{constructor(e,t,n=0,s=Math.PI/3,r=0,o=2){super(e,t),this.isSpotLight=!0,this.type="SpotLight",this.position.copy(bt.DEFAULT_UP),this.updateMatrix(),this.target=new bt,this.distance=n,this.angle=s,this.penumbra=r,this.decay=o,this.map=null,this.shadow=new gl}get power(){return this.intensity*Math.PI}set power(e){this.intensity=e/Math.PI}dispose(){this.shadow.dispose()}copy(e,t){return super.copy(e,t),this.distance=e.distance,this.angle=e.angle,this.penumbra=e.penumbra,this.decay=e.decay,this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}},Td=new Je,Rr=new I,Bc=new I,xl=class extends jr{constructor(){super(new Wt(90,1,.5,500)),this.isPointLightShadow=!0,this._frameExtents=new He(4,2),this._viewportCount=6,this._viewports=[new pt(2,1,1,1),new pt(0,1,1,1),new pt(3,1,1,1),new pt(1,1,1,1),new pt(3,0,1,1),new pt(1,0,1,1)],this._cubeDirections=[new I(1,0,0),new I(-1,0,0),new I(0,0,1),new I(0,0,-1),new I(0,1,0),new I(0,-1,0)],this._cubeUps=[new I(0,1,0),new I(0,1,0),new I(0,1,0),new I(0,1,0),new I(0,0,1),new I(0,0,-1)]}updateMatrices(e,t=0){let n=this.camera,s=this.matrix,r=e.distance||n.far;r!==n.far&&(n.far=r,n.updateProjectionMatrix()),Rr.setFromMatrixPosition(e.matrixWorld),n.position.copy(Rr),Bc.copy(n.position),Bc.add(this._cubeDirections[t]),n.up.copy(this._cubeUps[t]),n.lookAt(Bc),n.updateMatrixWorld(),s.makeTranslation(-Rr.x,-Rr.y,-Rr.z),Td.multiplyMatrices(n.projectionMatrix,n.matrixWorldInverse),this._frustum.setFromProjectionMatrix(Td)}},or=class extends rr{constructor(e,t,n=0,s=2){super(e,t),this.isPointLight=!0,this.type="PointLight",this.distance=n,this.decay=s,this.shadow=new xl}get power(){return this.intensity*4*Math.PI}set power(e){this.intensity=e/(4*Math.PI)}dispose(){this.shadow.dispose()}copy(e,t){return super.copy(e,t),this.distance=e.distance,this.decay=e.decay,this.shadow=e.shadow.clone(),this}},_l=class extends jr{constructor(){super(new Qs(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}},ar=class extends rr{constructor(e,t){super(e,t),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(bt.DEFAULT_UP),this.updateMatrix(),this.target=new bt,this.shadow=new _l}dispose(){this.shadow.dispose()}copy(e){return super.copy(e),this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}};var Di=class{static decodeText(e){if(typeof TextDecoder!="undefined")return new TextDecoder().decode(e);let t="";for(let n=0,s=e.length;n<s;n++)t+=String.fromCharCode(e[n]);try{return decodeURIComponent(escape(t))}catch{return t}}static extractUrlBase(e){let t=e.lastIndexOf("/");return t===-1?"./":e.slice(0,t+1)}static resolveURL(e,t){return typeof e!="string"||e===""?"":(/^https?:\/\//i.test(t)&&/^\//.test(e)&&(t=t.replace(/(^https?:\/\/[^\/]+).*/i,"$1")),/^(https?:)?\/\//i.test(e)||/^data:.*,.*$/i.test(e)||/^blob:.*$/i.test(e)?e:t+e)}};var ya=class extends mi{constructor(e){super(e),this.isImageBitmapLoader=!0,typeof createImageBitmap=="undefined"&&console.warn("THREE.ImageBitmapLoader: createImageBitmap() not supported."),typeof fetch=="undefined"&&console.warn("THREE.ImageBitmapLoader: fetch() not supported."),this.options={premultiplyAlpha:"none"}}setOptions(e){return this.options=e,this}load(e,t,n,s){e===void 0&&(e=""),this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);let r=this,o=Ti.get(e);if(o!==void 0){if(r.manager.itemStart(e),o.then){o.then(l=>{t&&t(l),r.manager.itemEnd(e)}).catch(l=>{s&&s(l)});return}return setTimeout(function(){t&&t(o),r.manager.itemEnd(e)},0),o}let a={};a.credentials=this.crossOrigin==="anonymous"?"same-origin":"include",a.headers=this.requestHeader;let c=fetch(e,a).then(function(l){return l.blob()}).then(function(l){return createImageBitmap(l,Object.assign(r.options,{colorSpaceConversion:"none"}))}).then(function(l){return Ti.add(e,l),t&&t(l),r.manager.itemEnd(e),l}).catch(function(l){s&&s(l),Ti.remove(e),r.manager.itemError(e),r.manager.itemEnd(e)});Ti.add(e,c),r.manager.itemStart(e)}};var va=class{constructor(e=!0){this.autoStart=e,this.startTime=0,this.oldTime=0,this.elapsedTime=0,this.running=!1}start(){this.startTime=Ad(),this.oldTime=this.startTime,this.elapsedTime=0,this.running=!0}stop(){this.getElapsedTime(),this.running=!1,this.autoStart=!1}getElapsedTime(){return this.getDelta(),this.elapsedTime}getDelta(){let e=0;if(this.autoStart&&!this.running)return this.start(),0;if(this.running){let t=Ad();e=(t-this.oldTime)/1e3,this.oldTime=t,this.elapsedTime+=e}return e}};function Ad(){return(typeof performance=="undefined"?Date:performance).now()}var yl=class{constructor(e,t,n){this.binding=e,this.valueSize=n;let s,r,o;switch(t){case"quaternion":s=this._slerp,r=this._slerpAdditive,o=this._setAdditiveIdentityQuaternion,this.buffer=new Float64Array(n*6),this._workIndex=5;break;case"string":case"bool":s=this._select,r=this._select,o=this._setAdditiveIdentityOther,this.buffer=new Array(n*5);break;default:s=this._lerp,r=this._lerpAdditive,o=this._setAdditiveIdentityNumeric,this.buffer=new Float64Array(n*5)}this._mixBufferRegion=s,this._mixBufferRegionAdditive=r,this._setIdentity=o,this._origIndex=3,this._addIndex=4,this.cumulativeWeight=0,this.cumulativeWeightAdditive=0,this.useCount=0,this.referenceCount=0}accumulate(e,t){let n=this.buffer,s=this.valueSize,r=e*s+s,o=this.cumulativeWeight;if(o===0){for(let a=0;a!==s;++a)n[r+a]=n[a];o=t}else{o+=t;let a=t/o;this._mixBufferRegion(n,r,0,a,s)}this.cumulativeWeight=o}accumulateAdditive(e){let t=this.buffer,n=this.valueSize,s=n*this._addIndex;this.cumulativeWeightAdditive===0&&this._setIdentity(),this._mixBufferRegionAdditive(t,s,0,e,n),this.cumulativeWeightAdditive+=e}apply(e){let t=this.valueSize,n=this.buffer,s=e*t+t,r=this.cumulativeWeight,o=this.cumulativeWeightAdditive,a=this.binding;if(this.cumulativeWeight=0,this.cumulativeWeightAdditive=0,r<1){let c=t*this._origIndex;this._mixBufferRegion(n,s,c,1-r,t)}o>0&&this._mixBufferRegionAdditive(n,s,this._addIndex*t,1,t);for(let c=t,l=t+t;c!==l;++c)if(n[c]!==n[c+t]){a.setValue(n,s);break}}saveOriginalState(){let e=this.binding,t=this.buffer,n=this.valueSize,s=n*this._origIndex;e.getValue(t,s);for(let r=n,o=s;r!==o;++r)t[r]=t[s+r%n];this._setIdentity(),this.cumulativeWeight=0,this.cumulativeWeightAdditive=0}restoreOriginalState(){let e=this.valueSize*3;this.binding.setValue(this.buffer,e)}_setAdditiveIdentityNumeric(){let e=this._addIndex*this.valueSize,t=e+this.valueSize;for(let n=e;n<t;n++)this.buffer[n]=0}_setAdditiveIdentityQuaternion(){this._setAdditiveIdentityNumeric(),this.buffer[this._addIndex*this.valueSize+3]=1}_setAdditiveIdentityOther(){let e=this._origIndex*this.valueSize,t=this._addIndex*this.valueSize;for(let n=0;n<this.valueSize;n++)this.buffer[t+n]=this.buffer[e+n]}_select(e,t,n,s,r){if(s>=.5)for(let o=0;o!==r;++o)e[t+o]=e[n+o]}_slerp(e,t,n,s){Gt.slerpFlat(e,t,e,t,e,n,s)}_slerpAdditive(e,t,n,s,r){let o=this._workIndex*r;Gt.multiplyQuaternionsFlat(e,o,e,t,e,n),Gt.slerpFlat(e,t,e,t,e,o,s)}_lerp(e,t,n,s,r){let o=1-s;for(let a=0;a!==r;++a){let c=t+a;e[c]=e[c]*o+e[n+a]*s}}_lerpAdditive(e,t,n,s,r){for(let o=0;o!==r;++o){let a=t+o;e[a]=e[a]+e[n+o]*s}}},Pl="\\[\\]\\.:\\/",My=new RegExp("["+Pl+"]","g"),Ll="[^"+Pl+"]",by="[^"+Pl.replace("\\.","")+"]",wy=/((?:WC+[\/:])*)/.source.replace("WC",Ll),Sy=/(WCOD+)?/.source.replace("WCOD",by),Ey=/(?:\.(WC+)(?:\[(.+)\])?)?/.source.replace("WC",Ll),Ty=/\.(WC+)(?:\[(.+)\])?/.source.replace("WC",Ll),Ay=new RegExp("^"+wy+Sy+Ey+Ty+"$"),Ry=["material","materials","bones","map"],vl=class{constructor(e,t,n){let s=n||ft.parseTrackName(t);this._targetGroup=e,this._bindings=e.subscribe_(t,s)}getValue(e,t){this.bind();let n=this._targetGroup.nCachedObjects_,s=this._bindings[n];s!==void 0&&s.getValue(e,t)}setValue(e,t){let n=this._bindings;for(let s=this._targetGroup.nCachedObjects_,r=n.length;s!==r;++s)n[s].setValue(e,t)}bind(){let e=this._bindings;for(let t=this._targetGroup.nCachedObjects_,n=e.length;t!==n;++t)e[t].bind()}unbind(){let e=this._bindings;for(let t=this._targetGroup.nCachedObjects_,n=e.length;t!==n;++t)e[t].unbind()}},ft=class i{constructor(e,t,n){this.path=t,this.parsedPath=n||i.parseTrackName(t),this.node=i.findNode(e,this.parsedPath.nodeName),this.rootNode=e,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}static create(e,t,n){return e&&e.isAnimationObjectGroup?new i.Composite(e,t,n):new i(e,t,n)}static sanitizeNodeName(e){return e.replace(/\s/g,"_").replace(My,"")}static parseTrackName(e){let t=Ay.exec(e);if(t===null)throw new Error("PropertyBinding: Cannot parse trackName: "+e);let n={nodeName:t[2],objectName:t[3],objectIndex:t[4],propertyName:t[5],propertyIndex:t[6]},s=n.nodeName&&n.nodeName.lastIndexOf(".");if(s!==void 0&&s!==-1){let r=n.nodeName.substring(s+1);Ry.indexOf(r)!==-1&&(n.nodeName=n.nodeName.substring(0,s),n.objectName=r)}if(n.propertyName===null||n.propertyName.length===0)throw new Error("PropertyBinding: can not parse propertyName from trackName: "+e);return n}static findNode(e,t){if(t===void 0||t===""||t==="."||t===-1||t===e.name||t===e.uuid)return e;if(e.skeleton){let n=e.skeleton.getBoneByName(t);if(n!==void 0)return n}if(e.children){let n=function(r){for(let o=0;o<r.length;o++){let a=r[o];if(a.name===t||a.uuid===t)return a;let c=n(a.children);if(c)return c}return null},s=n(e.children);if(s)return s}return null}_getValue_unavailable(){}_setValue_unavailable(){}_getValue_direct(e,t){e[t]=this.targetObject[this.propertyName]}_getValue_array(e,t){let n=this.resolvedProperty;for(let s=0,r=n.length;s!==r;++s)e[t++]=n[s]}_getValue_arrayElement(e,t){e[t]=this.resolvedProperty[this.propertyIndex]}_getValue_toArray(e,t){this.resolvedProperty.toArray(e,t)}_setValue_direct(e,t){this.targetObject[this.propertyName]=e[t]}_setValue_direct_setNeedsUpdate(e,t){this.targetObject[this.propertyName]=e[t],this.targetObject.needsUpdate=!0}_setValue_direct_setMatrixWorldNeedsUpdate(e,t){this.targetObject[this.propertyName]=e[t],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_array(e,t){let n=this.resolvedProperty;for(let s=0,r=n.length;s!==r;++s)n[s]=e[t++]}_setValue_array_setNeedsUpdate(e,t){let n=this.resolvedProperty;for(let s=0,r=n.length;s!==r;++s)n[s]=e[t++];this.targetObject.needsUpdate=!0}_setValue_array_setMatrixWorldNeedsUpdate(e,t){let n=this.resolvedProperty;for(let s=0,r=n.length;s!==r;++s)n[s]=e[t++];this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_arrayElement(e,t){this.resolvedProperty[this.propertyIndex]=e[t]}_setValue_arrayElement_setNeedsUpdate(e,t){this.resolvedProperty[this.propertyIndex]=e[t],this.targetObject.needsUpdate=!0}_setValue_arrayElement_setMatrixWorldNeedsUpdate(e,t){this.resolvedProperty[this.propertyIndex]=e[t],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_fromArray(e,t){this.resolvedProperty.fromArray(e,t)}_setValue_fromArray_setNeedsUpdate(e,t){this.resolvedProperty.fromArray(e,t),this.targetObject.needsUpdate=!0}_setValue_fromArray_setMatrixWorldNeedsUpdate(e,t){this.resolvedProperty.fromArray(e,t),this.targetObject.matrixWorldNeedsUpdate=!0}_getValue_unbound(e,t){this.bind(),this.getValue(e,t)}_setValue_unbound(e,t){this.bind(),this.setValue(e,t)}bind(){let e=this.node,t=this.parsedPath,n=t.objectName,s=t.propertyName,r=t.propertyIndex;if(e||(e=i.findNode(this.rootNode,t.nodeName),this.node=e),this.getValue=this._getValue_unavailable,this.setValue=this._setValue_unavailable,!e){console.warn("THREE.PropertyBinding: No target node found for track: "+this.path+".");return}if(n){let l=t.objectIndex;switch(n){case"materials":if(!e.material){console.error("THREE.PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!e.material.materials){console.error("THREE.PropertyBinding: Can not bind to material.materials as node.material does not have a materials array.",this);return}e=e.material.materials;break;case"bones":if(!e.skeleton){console.error("THREE.PropertyBinding: Can not bind to bones as node does not have a skeleton.",this);return}e=e.skeleton.bones;for(let h=0;h<e.length;h++)if(e[h].name===l){l=h;break}break;case"map":if("map"in e){e=e.map;break}if(!e.material){console.error("THREE.PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!e.material.map){console.error("THREE.PropertyBinding: Can not bind to material.map as node.material does not have a map.",this);return}e=e.material.map;break;default:if(e[n]===void 0){console.error("THREE.PropertyBinding: Can not bind to objectName of node undefined.",this);return}e=e[n]}if(l!==void 0){if(e[l]===void 0){console.error("THREE.PropertyBinding: Trying to bind to objectIndex of objectName, but is undefined.",this,e);return}e=e[l]}}let o=e[s];if(o===void 0){let l=t.nodeName;console.error("THREE.PropertyBinding: Trying to update property for track: "+l+"."+s+" but it wasn't found.",e);return}let a=this.Versioning.None;this.targetObject=e,e.needsUpdate!==void 0?a=this.Versioning.NeedsUpdate:e.matrixWorldNeedsUpdate!==void 0&&(a=this.Versioning.MatrixWorldNeedsUpdate);let c=this.BindingType.Direct;if(r!==void 0){if(s==="morphTargetInfluences"){if(!e.geometry){console.error("THREE.PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.",this);return}if(!e.geometry.morphAttributes){console.error("THREE.PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.morphAttributes.",this);return}e.morphTargetDictionary[r]!==void 0&&(r=e.morphTargetDictionary[r])}c=this.BindingType.ArrayElement,this.resolvedProperty=o,this.propertyIndex=r}else o.fromArray!==void 0&&o.toArray!==void 0?(c=this.BindingType.HasFromToArray,this.resolvedProperty=o):Array.isArray(o)?(c=this.BindingType.EntireArray,this.resolvedProperty=o):this.propertyName=s;this.getValue=this.GetterByBindingType[c],this.setValue=this.SetterByBindingTypeAndVersioning[c][a]}unbind(){this.node=null,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}};ft.Composite=vl;ft.prototype.BindingType={Direct:0,EntireArray:1,ArrayElement:2,HasFromToArray:3};ft.prototype.Versioning={None:0,NeedsUpdate:1,MatrixWorldNeedsUpdate:2};ft.prototype.GetterByBindingType=[ft.prototype._getValue_direct,ft.prototype._getValue_array,ft.prototype._getValue_arrayElement,ft.prototype._getValue_toArray];ft.prototype.SetterByBindingTypeAndVersioning=[[ft.prototype._setValue_direct,ft.prototype._setValue_direct_setNeedsUpdate,ft.prototype._setValue_direct_setMatrixWorldNeedsUpdate],[ft.prototype._setValue_array,ft.prototype._setValue_array_setNeedsUpdate,ft.prototype._setValue_array_setMatrixWorldNeedsUpdate],[ft.prototype._setValue_arrayElement,ft.prototype._setValue_arrayElement_setNeedsUpdate,ft.prototype._setValue_arrayElement_setMatrixWorldNeedsUpdate],[ft.prototype._setValue_fromArray,ft.prototype._setValue_fromArray_setNeedsUpdate,ft.prototype._setValue_fromArray_setMatrixWorldNeedsUpdate]];var Ml=class{constructor(e,t,n=null,s=t.blendMode){this._mixer=e,this._clip=t,this._localRoot=n,this.blendMode=s;let r=t.tracks,o=r.length,a=new Array(o),c={endingStart:Os,endingEnd:Os};for(let l=0;l!==o;++l){let h=r[l].createInterpolant(null);a[l]=h,h.settings=c}this._interpolantSettings=c,this._interpolants=a,this._propertyBindings=new Array(o),this._cacheIndex=null,this._byClipCacheIndex=null,this._timeScaleInterpolant=null,this._weightInterpolant=null,this.loop=El,this._loopCount=-1,this._startTime=null,this.time=0,this.timeScale=1,this._effectiveTimeScale=1,this.weight=1,this._effectiveWeight=1,this.repetitions=1/0,this.paused=!1,this.enabled=!0,this.clampWhenFinished=!1,this.zeroSlopeAtStart=!0,this.zeroSlopeAtEnd=!0}play(){return this._mixer._activateAction(this),this}stop(){return this._mixer._deactivateAction(this),this.reset()}reset(){return this.paused=!1,this.enabled=!0,this.time=0,this._loopCount=-1,this._startTime=null,this.stopFading().stopWarping()}isRunning(){return this.enabled&&!this.paused&&this.timeScale!==0&&this._startTime===null&&this._mixer._isActiveAction(this)}isScheduled(){return this._mixer._isActiveAction(this)}startAt(e){return this._startTime=e,this}setLoop(e,t){return this.loop=e,this.repetitions=t,this}setEffectiveWeight(e){return this.weight=e,this._effectiveWeight=this.enabled?e:0,this.stopFading()}getEffectiveWeight(){return this._effectiveWeight}fadeIn(e){return this._scheduleFading(e,0,1)}fadeOut(e){return this._scheduleFading(e,1,0)}crossFadeFrom(e,t,n){if(e.fadeOut(t),this.fadeIn(t),n){let s=this._clip.duration,r=e._clip.duration,o=r/s,a=s/r;e.warp(1,o,t),this.warp(a,1,t)}return this}crossFadeTo(e,t,n){return e.crossFadeFrom(this,t,n)}stopFading(){let e=this._weightInterpolant;return e!==null&&(this._weightInterpolant=null,this._mixer._takeBackControlInterpolant(e)),this}setEffectiveTimeScale(e){return this.timeScale=e,this._effectiveTimeScale=this.paused?0:e,this.stopWarping()}getEffectiveTimeScale(){return this._effectiveTimeScale}setDuration(e){return this.timeScale=this._clip.duration/e,this.stopWarping()}syncWith(e){return this.time=e.time,this.timeScale=e.timeScale,this.stopWarping()}halt(e){return this.warp(this._effectiveTimeScale,0,e)}warp(e,t,n){let s=this._mixer,r=s.time,o=this.timeScale,a=this._timeScaleInterpolant;a===null&&(a=s._lendControlInterpolant(),this._timeScaleInterpolant=a);let c=a.parameterPositions,l=a.sampleValues;return c[0]=r,c[1]=r+n,l[0]=e/o,l[1]=t/o,this}stopWarping(){let e=this._timeScaleInterpolant;return e!==null&&(this._timeScaleInterpolant=null,this._mixer._takeBackControlInterpolant(e)),this}getMixer(){return this._mixer}getClip(){return this._clip}getRoot(){return this._localRoot||this._mixer._root}_update(e,t,n,s){if(!this.enabled){this._updateWeight(e);return}let r=this._startTime;if(r!==null){let c=(e-r)*n;c<0||n===0?t=0:(this._startTime=null,t=n*c)}t*=this._updateTimeScale(e);let o=this._updateTime(t),a=this._updateWeight(e);if(a>0){let c=this._interpolants,l=this._propertyBindings;switch(this.blendMode){case Kp:for(let h=0,u=c.length;h!==u;++h)c[h].evaluate(o),l[h].accumulateAdditive(a);break;case Tl:default:for(let h=0,u=c.length;h!==u;++h)c[h].evaluate(o),l[h].accumulate(s,a)}}}_updateWeight(e){let t=0;if(this.enabled){t=this.weight;let n=this._weightInterpolant;if(n!==null){let s=n.evaluate(e)[0];t*=s,e>n.parameterPositions[1]&&(this.stopFading(),s===0&&(this.enabled=!1))}}return this._effectiveWeight=t,t}_updateTimeScale(e){let t=0;if(!this.paused){t=this.timeScale;let n=this._timeScaleInterpolant;if(n!==null){let s=n.evaluate(e)[0];t*=s,e>n.parameterPositions[1]&&(this.stopWarping(),t===0?this.paused=!0:this.timeScale=t)}}return this._effectiveTimeScale=t,t}_updateTime(e){let t=this._clip.duration,n=this.loop,s=this.time+e,r=this._loopCount,o=n===Zp;if(e===0)return r===-1?s:o&&(r&1)===1?t-s:s;if(n===Sa){r===-1&&(this._loopCount=0,this._setEndings(!0,!0,!1));e:{if(s>=t)s=t;else if(s<0)s=0;else{this.time=s;break e}this.clampWhenFinished?this.paused=!0:this.enabled=!1,this.time=s,this._mixer.dispatchEvent({type:"finished",action:this,direction:e<0?-1:1})}}else{if(r===-1&&(e>=0?(r=0,this._setEndings(!0,this.repetitions===0,o)):this._setEndings(this.repetitions===0,!0,o)),s>=t||s<0){let a=Math.floor(s/t);s-=t*a,r+=Math.abs(a);let c=this.repetitions-r;if(c<=0)this.clampWhenFinished?this.paused=!0:this.enabled=!1,s=e>0?t:0,this.time=s,this._mixer.dispatchEvent({type:"finished",action:this,direction:e>0?1:-1});else{if(c===1){let l=e<0;this._setEndings(l,!l,o)}else this._setEndings(!1,!1,o);this._loopCount=r,this.time=s,this._mixer.dispatchEvent({type:"loop",action:this,loopDelta:a})}}else this.time=s;if(o&&(r&1)===1)return t-s}return s}_setEndings(e,t,n){let s=this._interpolantSettings;n?(s.endingStart=Fs,s.endingEnd=Fs):(e?s.endingStart=this.zeroSlopeAtStart?Fs:Os:s.endingStart=Vo,t?s.endingEnd=this.zeroSlopeAtEnd?Fs:Os:s.endingEnd=Vo)}_scheduleFading(e,t,n){let s=this._mixer,r=s.time,o=this._weightInterpolant;o===null&&(o=s._lendControlInterpolant(),this._weightInterpolant=o);let a=o.parameterPositions,c=o.sampleValues;return a[0]=r,c[0]=t,a[1]=r+e,c[1]=n,this}},Cy=new Float32Array(1),Zr=class extends li{constructor(e){super(),this._root=e,this._initMemoryManager(),this._accuIndex=0,this.time=0,this.timeScale=1}_bindAction(e,t){let n=e._localRoot||this._root,s=e._clip.tracks,r=s.length,o=e._propertyBindings,a=e._interpolants,c=n.uuid,l=this._bindingsByRootAndName,h=l[c];h===void 0&&(h={},l[c]=h);for(let u=0;u!==r;++u){let d=s[u],f=d.name,g=h[f];if(g!==void 0)++g.referenceCount,o[u]=g;else{if(g=o[u],g!==void 0){g._cacheIndex===null&&(++g.referenceCount,this._addInactiveBinding(g,c,f));continue}let x=t&&t._propertyBindings[u].binding.parsedPath;g=new yl(ft.create(n,f,x),d.ValueTypeName,d.getValueSize()),++g.referenceCount,this._addInactiveBinding(g,c,f),o[u]=g}a[u].resultBuffer=g.buffer}}_activateAction(e){if(!this._isActiveAction(e)){if(e._cacheIndex===null){let n=(e._localRoot||this._root).uuid,s=e._clip.uuid,r=this._actionsByClip[s];this._bindAction(e,r&&r.knownActions[0]),this._addInactiveAction(e,s,n)}let t=e._propertyBindings;for(let n=0,s=t.length;n!==s;++n){let r=t[n];r.useCount++===0&&(this._lendBinding(r),r.saveOriginalState())}this._lendAction(e)}}_deactivateAction(e){if(this._isActiveAction(e)){let t=e._propertyBindings;for(let n=0,s=t.length;n!==s;++n){let r=t[n];--r.useCount===0&&(r.restoreOriginalState(),this._takeBackBinding(r))}this._takeBackAction(e)}}_initMemoryManager(){this._actions=[],this._nActiveActions=0,this._actionsByClip={},this._bindings=[],this._nActiveBindings=0,this._bindingsByRootAndName={},this._controlInterpolants=[],this._nActiveControlInterpolants=0;let e=this;this.stats={actions:{get total(){return e._actions.length},get inUse(){return e._nActiveActions}},bindings:{get total(){return e._bindings.length},get inUse(){return e._nActiveBindings}},controlInterpolants:{get total(){return e._controlInterpolants.length},get inUse(){return e._nActiveControlInterpolants}}}}_isActiveAction(e){let t=e._cacheIndex;return t!==null&&t<this._nActiveActions}_addInactiveAction(e,t,n){let s=this._actions,r=this._actionsByClip,o=r[t];if(o===void 0)o={knownActions:[e],actionByRoot:{}},e._byClipCacheIndex=0,r[t]=o;else{let a=o.knownActions;e._byClipCacheIndex=a.length,a.push(e)}e._cacheIndex=s.length,s.push(e),o.actionByRoot[n]=e}_removeInactiveAction(e){let t=this._actions,n=t[t.length-1],s=e._cacheIndex;n._cacheIndex=s,t[s]=n,t.pop(),e._cacheIndex=null;let r=e._clip.uuid,o=this._actionsByClip,a=o[r],c=a.knownActions,l=c[c.length-1],h=e._byClipCacheIndex;l._byClipCacheIndex=h,c[h]=l,c.pop(),e._byClipCacheIndex=null;let u=a.actionByRoot,d=(e._localRoot||this._root).uuid;delete u[d],c.length===0&&delete o[r],this._removeInactiveBindingsForAction(e)}_removeInactiveBindingsForAction(e){let t=e._propertyBindings;for(let n=0,s=t.length;n!==s;++n){let r=t[n];--r.referenceCount===0&&this._removeInactiveBinding(r)}}_lendAction(e){let t=this._actions,n=e._cacheIndex,s=this._nActiveActions++,r=t[s];e._cacheIndex=s,t[s]=e,r._cacheIndex=n,t[n]=r}_takeBackAction(e){let t=this._actions,n=e._cacheIndex,s=--this._nActiveActions,r=t[s];e._cacheIndex=s,t[s]=e,r._cacheIndex=n,t[n]=r}_addInactiveBinding(e,t,n){let s=this._bindingsByRootAndName,r=this._bindings,o=s[t];o===void 0&&(o={},s[t]=o),o[n]=e,e._cacheIndex=r.length,r.push(e)}_removeInactiveBinding(e){let t=this._bindings,n=e.binding,s=n.rootNode.uuid,r=n.path,o=this._bindingsByRootAndName,a=o[s],c=t[t.length-1],l=e._cacheIndex;c._cacheIndex=l,t[l]=c,t.pop(),delete a[r],Object.keys(a).length===0&&delete o[s]}_lendBinding(e){let t=this._bindings,n=e._cacheIndex,s=this._nActiveBindings++,r=t[s];e._cacheIndex=s,t[s]=e,r._cacheIndex=n,t[n]=r}_takeBackBinding(e){let t=this._bindings,n=e._cacheIndex,s=--this._nActiveBindings,r=t[s];e._cacheIndex=s,t[s]=e,r._cacheIndex=n,t[n]=r}_lendControlInterpolant(){let e=this._controlInterpolants,t=this._nActiveControlInterpolants++,n=e[t];return n===void 0&&(n=new pa(new Float32Array(2),new Float32Array(2),1,Cy),n.__cacheIndex=t,e[t]=n),n}_takeBackControlInterpolant(e){let t=this._controlInterpolants,n=e.__cacheIndex,s=--this._nActiveControlInterpolants,r=t[s];e.__cacheIndex=s,t[s]=e,r.__cacheIndex=n,t[n]=r}clipAction(e,t,n){let s=t||this._root,r=s.uuid,o=typeof e=="string"?pi.findByName(s,e):e,a=o!==null?o.uuid:e,c=this._actionsByClip[a],l=null;if(n===void 0&&(o!==null?n=o.blendMode:n=Tl),c!==void 0){let u=c.actionByRoot[r];if(u!==void 0&&u.blendMode===n)return u;l=c.knownActions[0],o===null&&(o=l._clip)}if(o===null)return null;let h=new Ml(this,o,t,n);return this._bindAction(h,l),this._addInactiveAction(h,a,r),h}existingAction(e,t){let n=t||this._root,s=n.uuid,r=typeof e=="string"?pi.findByName(n,e):e,o=r?r.uuid:e,a=this._actionsByClip[o];return a!==void 0&&a.actionByRoot[s]||null}stopAllAction(){let e=this._actions,t=this._nActiveActions;for(let n=t-1;n>=0;--n)e[n].stop();return this}update(e){e*=this.timeScale;let t=this._actions,n=this._nActiveActions,s=this.time+=e,r=Math.sign(e),o=this._accuIndex^=1;for(let l=0;l!==n;++l)t[l]._update(s,e,r,o);let a=this._bindings,c=this._nActiveBindings;for(let l=0;l!==c;++l)a[l].apply(o);return this}setTime(e){this.time=0;for(let t=0;t<this._actions.length;t++)this._actions[t].time=0;return this.update(e)}getRoot(){return this._root}uncacheClip(e){let t=this._actions,n=e.uuid,s=this._actionsByClip,r=s[n];if(r!==void 0){let o=r.knownActions;for(let a=0,c=o.length;a!==c;++a){let l=o[a];this._deactivateAction(l);let h=l._cacheIndex,u=t[t.length-1];l._cacheIndex=null,l._byClipCacheIndex=null,u._cacheIndex=h,t[h]=u,t.pop(),this._removeInactiveBindingsForAction(l)}delete s[n]}}uncacheRoot(e){let t=e.uuid,n=this._actionsByClip;for(let o in n){let a=n[o].actionByRoot,c=a[t];c!==void 0&&(this._deactivateAction(c),this._removeInactiveAction(c))}let s=this._bindingsByRootAndName,r=s[t];if(r!==void 0)for(let o in r){let a=r[o];a.restoreOriginalState(),this._removeInactiveBinding(a)}}uncacheAction(e,t){let n=this.existingAction(e,t);n!==null&&(this._deactivateAction(n),this._removeInactiveAction(n))}};typeof __THREE_DEVTOOLS__!="undefined"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:bl}}));typeof window!="undefined"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=bl);function $r(i,e=!1){let t=i[0].index!==null,n=new Set(Object.keys(i[0].attributes)),s=new Set(Object.keys(i[0].morphAttributes)),r={},o={},a=i[0].morphTargetsRelative,c=new Nt,l=0;for(let h=0;h<i.length;++h){let u=i[h],d=0;if(t!==(u.index!==null))return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+". All geometries must have compatible attributes; make sure index attribute exists among all geometries, or in none of them."),null;for(let f in u.attributes){if(!n.has(f))return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+'. All geometries must have compatible attributes; make sure "'+f+'" attribute exists among all geometries, or in none of them.'),null;r[f]===void 0&&(r[f]=[]),r[f].push(u.attributes[f]),d++}if(d!==n.size)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+". Make sure all geometries have the same number of attributes."),null;if(a!==u.morphTargetsRelative)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+". .morphTargetsRelative must be consistent throughout all geometries."),null;for(let f in u.morphAttributes){if(!s.has(f))return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+".  .morphAttributes must be consistent throughout all geometries."),null;o[f]===void 0&&(o[f]=[]),o[f].push(u.morphAttributes[f])}if(e){let f;if(t)f=u.index.count;else if(u.attributes.position!==void 0)f=u.attributes.position.count;else return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+". The geometry must have either an index or a position attribute"),null;c.addGroup(l,f,h),l+=f}}if(t){let h=0,u=[];for(let d=0;d<i.length;++d){let f=i[d].index;for(let g=0;g<f.count;++g)u.push(f.getX(g)+h);h+=i[d].attributes.position.count}c.setIndex(u)}for(let h in r){let u=Zd(r[h]);if(!u)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed while trying to merge the "+h+" attribute."),null;c.setAttribute(h,u)}for(let h in o){let u=o[h][0].length;if(u===0)break;c.morphAttributes=c.morphAttributes||{},c.morphAttributes[h]=[];for(let d=0;d<u;++d){let f=[];for(let x=0;x<o[h].length;++x)f.push(o[h][x][d]);let g=Zd(f);if(!g)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed while trying to merge the "+h+" morphAttribute."),null;c.morphAttributes[h].push(g)}}return c}function Zd(i){let e,t,n,s=-1,r=0;for(let l=0;l<i.length;++l){let h=i[l];if(h.isInterleavedBufferAttribute)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. InterleavedBufferAttributes are not supported."),null;if(e===void 0&&(e=h.array.constructor),e!==h.array.constructor)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.array must be of consistent array types across matching attributes."),null;if(t===void 0&&(t=h.itemSize),t!==h.itemSize)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.itemSize must be consistent across matching attributes."),null;if(n===void 0&&(n=h.normalized),n!==h.normalized)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.normalized must be consistent across matching attributes."),null;if(s===-1&&(s=h.gpuType),s!==h.gpuType)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.gpuType must be consistent across matching attributes."),null;r+=h.array.length}let o=new e(r),a=0;for(let l=0;l<i.length;++l)o.set(i[l].array,a),a+=i[l].array.length;let c=new At(o,t,n);return s!==void 0&&(c.gpuType=s),c}function Il(i,e){if(e===Ud)return console.warn("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Geometry already defined as triangles."),i;if(e===Kr||e===Ea){let t=i.getIndex();if(t===null){let o=[],a=i.getAttribute("position");if(a!==void 0){for(let c=0;c<a.count;c++)o.push(c);i.setIndex(o),t=i.getIndex()}else return console.error("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Undefined position attribute. Processing not possible."),i}let n=t.count-2,s=[];if(e===Kr)for(let o=1;o<=n;o++)s.push(t.getX(0)),s.push(t.getX(o)),s.push(t.getX(o+1));else for(let o=0;o<n;o++)o%2===0?(s.push(t.getX(o)),s.push(t.getX(o+1)),s.push(t.getX(o+2))):(s.push(t.getX(o+2)),s.push(t.getX(o+1)),s.push(t.getX(o)));s.length/3!==n&&console.error("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Unable to generate correct amount of triangles.");let r=i.clone();return r.setIndex(s),r.clearGroups(),r}else return console.error("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Unknown draw mode:",e),i}function Pa(i,e,t=0){let n=Math.imul(i|0,374761393)^Math.imul(e|0,668265263)^Math.imul(t|0,1442695041);return n=Math.imul(n^n>>>13,1274126177),n^=n>>>16,(n>>>0)/4294967296}function Py(i,e,t){let n=Math.floor(i),s=Math.floor(e),r=i-n,o=e-s,a=r*r*(3-2*r),c=o*o*(3-2*o),l=Pa(n,s,t),h=Pa(n+1,s,t),u=Pa(n,s+1,t),d=Pa(n+1,s+1,t);return l+(h-l)*a+(u-l)*c+(l-h-u+d)*a*c}function lr(i,e,t=4,n=0){let s=0,r=.5,o=1,a=0;for(let c=0;c<t;c++)s+=r*Py(i*o,e*o,n+c*17),a+=r,r*=.5,o*=2;return s/a}function La(i){return function(){i|=0,i=i+1831565813|0;let e=Math.imul(i^i>>>15,1|i);return e=e+Math.imul(e^e>>>7,61|e)^e,((e^e>>>14)>>>0)/4294967296}}var Ui=210,de={village:{x:0,z:0},herbalist:{x:-48,z:-30},camp:{x:-80,z:-112},ruins:{x:118,z:-100},lake:{x:-95,z:72},house:{x:44,z:62},crossroad:{x:54,z:-50}},$d=[[[0,0],[-30,-40],[-80,-112]],[[0,0],[52,-52],[118,-100]],[[0,0],[44,62]],[[0,0],[-48,-30]],[[0,0],[-55,45],[-75,52]]],Ol=(i,e,t)=>{let n=Math.max(0,Math.min(1,(t-i)/(e-i)));return n*n*(3-2*n)};function Ly(i,e,t,n,s,r){let o=s-t,a=r-n,c=((i-t)*o+(e-n)*a)/(o*o+a*a);c=Math.max(0,Math.min(1,c));let l=t+o*c-i,h=n+a*c-e;return Math.sqrt(l*l+h*h)}function Ni(i,e){let t=1e9;for(let n of $d)for(let s=0;s<n.length-1;s++){let r=Ly(i,e,n[s][0],n[s][1],n[s+1][0],n[s+1][1]);r<t&&(t=r)}return t}function hr(i,e){let t=(lr(i*.011+50,e*.011+50,4,1)-.5)*26+(lr(i*.06,e*.06,2,9)-.5)*2.5+2.5,n=Math.max(Math.abs(i),Math.abs(e));return n>150&&(t+=Math.pow((n-150)/40,2)*45),t+=8*Math.exp(-((i-de.house.x)**2+(e-de.house.z)**2)/(2*16*16)),t}function ss(i,e,t,n,s,r,o){let a=Math.hypot(e-n.x,t-n.z);return a>=r?i:o+(i-o)*Ol(s,r,a)}var gi={};function Dl(){return gi.ok||(gi.camp=Math.max(2,hr(de.camp.x,de.camp.z)),gi.ruins=Math.max(3,hr(de.ruins.x,de.ruins.z))+1.5,gi.herb=Math.max(2,hr(de.herbalist.x,de.herbalist.z)),gi.house=hr(de.house.x,de.house.z),gi.cross=Math.max(1.5,hr(de.crossroad.x,de.crossroad.z)),gi.ok=!0),gi}function et(i,e){let t=Dl(),n=hr(i,e);if(n=ss(n,i,e,de.lake,16,46,-4),n=ss(n,i,e,de.village,30,48,2.5),n=ss(n,i,e,de.camp,14,26,t.camp),n=ss(n,i,e,de.ruins,18,32,t.ruins),n=ss(n,i,e,de.herbalist,6,13,t.herb),n=ss(n,i,e,de.house,7,12,t.house),n=ss(n,i,e,de.crossroad,5,10,t.cross),n<.8){let s=Ni(i,e);s<7&&(n=n+(.8-n)*(1-Ol(3,7,s)))}return n}function rs(i,e){let t=lr(i*.018+11,e*.018-7,3,21);return t+=.28*Math.max(0,Math.min(1,-(i+e)/120)),t}var Nl=class{constructor(){this.grid=new Map,this.cell=10}_ins(e,t){let n=this.cell;for(let s=Math.floor((e.x-t)/n);s<=Math.floor((e.x+t)/n);s++)for(let r=Math.floor((e.z-t)/n);r<=Math.floor((e.z+t)/n);r++){let o=s*1e3+r,a=this.grid.get(o);a||(a=[],this.grid.set(o,a)),a.push(e)}}addCircle(e,t,n){this._ins({x:e,z:t,r:n},n)}addBox(e,t,n,s,r=0){this._ins({x:e,z:t,hw:n,hd:s,c:Math.cos(r),s:Math.sin(r),box:!0},Math.hypot(n,s))}blocked(e,t){let n=this.grid.get(Math.floor(e/this.cell)*1e3+Math.floor(t/this.cell));if(!n)return!1;for(let s of n)if(s.box){let r=e-s.x,o=t-s.z,a=r*s.c-o*s.s,c=r*s.s+o*s.c;if(Math.abs(a)<s.hw+.3&&Math.abs(c)<s.hd+.3)return!0}else if(s.r>1.5&&Math.hypot(e-s.x,t-s.z)<s.r)return!0;return!1}resolve(e,t){let n=this.cell,s=Math.floor(e.x/n),r=Math.floor(e.z/n),o=!1;for(let a=-1;a<=1;a++)for(let c=-1;c<=1;c++){let l=this.grid.get((s+a)*1e3+(r+c));if(l)for(let h of l)if(h.box){let u=e.x-h.x,d=e.z-h.z,f=u*h.c-d*h.s,g=u*h.s+d*h.c,x=Math.max(-h.hw,Math.min(f,h.hw)),m=Math.max(-h.hd,Math.min(g,h.hd)),p=f-x,y=g-m,_=p*p+y*y;if(_<t*t){let b,C;if(_>1e-8){let A=Math.sqrt(_);b=x+p/A*t,C=m+y/A*t}else{let A=Math.min(h.hw-f,f+h.hw,h.hd-g,g+h.hd);b=f,C=g,A===h.hw-f?b=h.hw+t:A===f+h.hw?b=-h.hw-t:A===h.hd-g?C=h.hd+t:C=-h.hd-t}e.x=h.x+b*h.c+C*h.s,e.z=h.z-b*h.s+C*h.c,o=!0}}else{let u=e.x-h.x,d=e.z-h.z,f=t+h.r,g=u*u+d*d;if(g<f*f&&g>1e-8){let x=Math.sqrt(g);e.x=h.x+u/x*f,e.z=h.z+d/x*f,o=!0}}}return o}},Kd=new Map;function tt(i,e){let t=i+(e?JSON.stringify(e):""),n=Kd.get(t);return n||(n=new Ot({color:i,...e||{}}),Kd.set(t,n)),n}function wn(i,e){i=i.index?i.toNonIndexed():i;let t=new ge(e),n=i.attributes.position.count,s=new Float32Array(n*3);for(let r=0;r<n;r++)s[r*3]=t.r,s[r*3+1]=t.g,s[r*3+2]=t.b;return i.setAttribute("color",new At(s,3)),i.attributes.uv&&i.deleteAttribute("uv"),i}function Ul(i,e,t,n=.4){let s=i/2+n,r=e/2+n,o=[-s,0,-r],a=[s,0,-r],c=[s,0,r],l=[-s,0,r],h=[-s,t,0],u=[s,t,0],d=[l,c,u,l,u,h,a,o,h,a,h,u,o,l,h,c,a,u],f=new Nt;return f.setAttribute("position",new ht(d.flat(),3)),f.computeVertexNormals(),f}function Ue(i,e,t=0,n=0,s=0,r){let o=new Me(i,e);return o.position.set(t,n,s),o.castShadow=!0,o.receiveShadow=!0,r&&r.add(o),o}var Ia=new Ot({color:3813151,emissive:16757575,emissiveIntensity:0}),ur=[];function zl(i,e){var c,l,h,u,d,f;let t=new ke,n=i.w,s=i.d,r=(c=i.h)!=null?c:3;Ue(new Ge(n,.5,s),tt(8221800),0,0,0,t),Ue(new Ge(n,r,s),tt((l=i.wall)!=null?l:15260864),0,r/2+.25,0,t);let o=tt(5913892);for(let g of[-1,1])for(let x of[-1,1])Ue(new Ge(.25,r,.25),o,g*n/2,r/2+.25,x*s/2,t);Ue(new Ge(n+.1,.22,.12),o,0,r*.55+.25,s/2+.02,t);let a=Ue(Ul(n,s,(h=i.roofH)!=null?h:2.2),tt((u=i.roof)!=null?u:9124394,{flatShading:!0}),0,r+.25,0,t);i.rotRoof&&(a.rotation.y=Math.PI/2),Ue(new Ge(1,1.8,.1),tt(4861722),0,1.15,s/2+.05,t);for(let g of[-1,1])Ue(new Ge(.7,.7,.08),Ia,g*n*.3,1.9,s/2+.05,t);for(let g of[-1,1]){let x=Ue(new Ge(.08,.7,.7),Ia,g*(n/2+.04),1.9,0,t);x.castShadow=!1}return i.chimney&&Ue(new Ge(.6,1.6,.6),tt(7168600),n*.25,r+1.6,-s*.15,t),t.position.set(i.x,i.y,i.z),t.rotation.y=(d=i.rot)!=null?d:0,e.addBox(i.x,i.z,n/2+.1,s/2+.1,(f=i.rot)!=null?f:0),t}function Jd(i,e){let t=La(1337),n=new Nl,s={colliders:n,spots:{},herbs:[],chests:[],villageHomes:[]},r=Ui*2,o=e==="low"?120:168,a=new Js(r,r,o,o);a.rotateX(-Math.PI/2);let c=a.attributes.position,l=new Float32Array(c.count*3),h=new ge,u=new ge(6068796),d=new ge(8367686),f=new ge(4091436),g=new ge(13482884),x=new ge(8748400),m=new ge(15922422),p=new ge(10124114),y=new ge(9067146);for(let D=0;D<c.count;D++){let U=c.getX(D),G=c.getZ(D),W=et(U,G);c.setY(D,W);let ue=lr(U*.08,G*.08,2,5);h.copy(u).lerp(d,ue);let re=rs(U,G);re>.55&&h.lerp(f,Math.min(1,(re-.55)*4));let _e=lr(U*.03+3,G*.03,2,77);_e>.66&&W>3&&h.lerp(y,Math.min(.6,(_e-.66)*4));let ye=Ni(U,G);ye<3.2&&h.lerp(p,1-Ol(1.6,3.2,ye)),Math.hypot(U,G)<14&&h.lerp(p,.6*(1-Math.hypot(U,G)/14)),Math.hypot(U-de.ruins.x,G-de.ruins.z)<22&&h.lerp(x,.45),W<1.2&&h.lerp(g,Math.min(1,(1.2-W)/.8)),W>16&&h.lerp(x,Math.min(1,(W-16)/8)),W>34&&h.lerp(m,Math.min(1,(W-34)/6)),l[D*3]=h.r,l[D*3+1]=h.g,l[D*3+2]=h.b}a.setAttribute("color",new At(l,3)),a.computeVertexNormals();let _=new Me(a,new Ot({vertexColors:!0}));_.receiveShadow=!0,i.add(_);let b=new Me(new Js(r,r),new fa({color:3110056,transparent:!0,opacity:.78,shininess:90,specular:8956620}));b.rotation.x=-Math.PI/2,b.position.y=0,i.add(b),s.water=b;let C=(D,U,G=0)=>Math.hypot(D,U)<50+G||Math.hypot(D-de.camp.x,U-de.camp.z)<20+G||Math.hypot(D-de.ruins.x,U-de.ruins.z)<30+G||Math.hypot(D-de.house.x,U-de.house.z)<14+G||Math.hypot(D-de.herbalist.x,U-de.herbalist.z)<11+G||Math.hypot(D-de.crossroad.x,U-de.crossroad.z)<10+G,A=$r([wn(new Ut(.16,.24,1.6,5).translate(0,.8,0),5913892),wn(new Jt(1.5,2.8,7).translate(0,2.6,0),3104308),wn(new Jt(1.1,2.2,7).translate(0,3.9,0),3829308)]),R=$r([wn(new Ut(.2,.3,2.2,5).translate(0,1.1,0),6965804),wn(new Yn(1.7,0).translate(0,3.2,0),5212725),wn(new Yn(1.1,0).translate(.9,3.9,.3),6265406)]),O=wn(new Yn(.8,0).scale(1,.7,1).translate(0,.4,0),4882224),v=new Ot({vertexColors:!0,flatShading:!0}),S=[],F=[],j=[];for(let D=0;D<9e3&&S.length+F.length<(e==="low"?650:1e3);D++){let U=(t()*2-1)*175,G=(t()*2-1)*175,W=rs(U,G),ue=t()<.012;if(!(W>.56+t()*.12)&&!ue||C(U,G)||Ni(U,G)<4.5)continue;let re=et(U,G);if(re<.9||re>26)continue;let _e=.8+t()*.7;((W>.68||re>12?t()<.75:t()<.3)?S:F).push({x:U,z:G,y:re-.1,s:_e,r:t()*6.28}),n.addCircle(U,G,.45*_e)}for(let D=0;D<2500&&j.length<350;D++){let U=(t()*2-1)*170,G=(t()*2-1)*170;if(C(U,G,-10)||Ni(U,G)<3)continue;let W=et(U,G);W<1||W>24||rs(U,G)<.45&&t()<.6||j.push({x:U,z:G,y:W,s:.7+t()*.8,r:t()*6.28})}let ee=new bt,z=new ge;function B(D,U,G,W=!0){let ue=new er(D,G,Math.max(1,U.length));return U.forEach((re,_e)=>{var J,P,ie,ce,Se,Te;ee.position.set(re.x,re.y,re.z),ee.rotation.set(0,re.r,0),ee.scale.set(re.s*((J=re.sx)!=null?J:1),re.s*((P=re.sy)!=null?P:1),re.s*((ie=re.sz)!=null?ie:1)),ee.updateMatrix(),ue.setMatrixAt(_e,ee.matrix);let ye=.82+t()*.3;z.setRGB(ye*((ce=re.cr)!=null?ce:1),ye*((Se=re.cg)!=null?Se:1),ye*((Te=re.cb)!=null?Te:1)),ue.setColorAt(_e,z)}),ue.count=U.length,ue.castShadow=W,ue.receiveShadow=!0,i.add(ue),ue}B(A,S,v),B(R,F,v),B(O,j,v,!1);let Q=[];for(let D=0;D<3e3&&Q.length<220;D++){let U=(t()*2-1)*185,G=(t()*2-1)*185;if(C(U,G,-15)||Ni(U,G)<3.5)continue;let W=et(U,G);if(W<-1)continue;let ue=.4+t()*t()*2.2;Q.push({x:U,z:G,y:W-.2*ue,s:ue,sy:.6+t()*.4,r:t()*6.28}),ue>.9&&n.addCircle(U,G,ue*.85)}B(wn(new da(1,0),9407104),Q,v);let Z=$r([wn(new Jt(.07,.55,3).translate(0,.27,0),7315520),wn(new Jt(.07,.45,3).translate(.12,.22,.05),8565834),wn(new Jt(.07,.5,3).translate(-.1,.25,-.06),6262840)]),K=[],$=[],te=e==="low"?1500:4e3;for(let D=0;D<te*3&&K.length<te;D++){let U=(t()*2-1)*160,G=(t()*2-1)*160,W=et(U,G);if(!(W<1.2||W>15)&&!(Ni(U,G)<2.5||Math.hypot(U,G)<12)&&(K.push({x:U,z:G,y:W,s:.8+t()*.9,r:t()*6.28}),t()<.18)){let ue=[[1,1,1],[1,.9,.2],[.8,.4,1],[1,.3,.3],[.5,.7,1]][Math.floor(t()*5)];$.push({x:U+.4,z:G+.3,y:W,s:.8+t()*.6,r:t()*6.28,cr:ue[0],cg:ue[1],cb:ue[2]})}}B(Z,K,v,!1);let he=$r([wn(new Ut(.02,.02,.4,3).translate(0,.2,0),4885040),wn(new Yn(.09,0).translate(0,.42,0),16777215)]);B(he,$,new Ot({vertexColors:!0}),!1);let pe=new ke;i.add(pe);let Y=$d.map(D=>Math.atan2(D[1][0],D[1][1])),ne=(D,U)=>{let G=Math.abs(D-U)%(Math.PI*2);return G>Math.PI?Math.PI*2-G:G},me=[];for(let D=0;D<360;D+=26){let U=D*Math.PI/180+.2;if(Y.some(W=>ne(U,W)<.36))continue;let G=me.length%2?25:18;me.push({x:Math.sin(U)*G,z:Math.cos(U)*G,ang:U})}let Ce=[9124394,7227946,10115632,8007728,5917242];me.forEach((D,U)=>{let G=U===0,W=U===2,ue={x:D.x,y:2.5,z:D.z,rot:D.ang+Math.PI,w:G?9:6+U%2,d:G?7:5.5,h:G?4:3,roof:Ce[U%Ce.length],chimney:U%2===0,roofH:G?2.8:2.2,wall:U%3===1?14207144:15260864};pe.add(zl(ue,n));let re={x:D.x-Math.sin(D.ang)*(ue.d/2+1.8),z:D.z-Math.cos(D.ang)*(ue.d/2+1.8)};if(s.villageHomes.push(re),G){s.spots.tavern=re;let _e=new ke;Ue(new Ge(.15,3,.15),tt(5913892),0,1.5,0,_e),Ue(new Ge(1.2,.7,.1),tt(11567168),.6,2.6,0,_e),Ue(new Ge(.4,.4,.12),tt(13934624),.6,2.6,0,_e),_e.position.set(re.x+2.5,2.5,re.z),pe.add(_e)}W&&(s.spots.widow=re)}),s.spots.lender={x:s.spots.tavern.x*.85+1.5,z:s.spots.tavern.z*.85};let we=new ke;Ue(new Ut(1.2,1.3,1,10),tt(9077624),0,.5,0,we),Ue(new Ut(.95,.95,.05,10),tt(2046549),0,.95,0,we);for(let D of[-1,1])Ue(new Ge(.15,2.2,.15),tt(5913892),D*1,1.6,0,we);Ue(Ul(2.2,1.6,.8,.2),tt(8010282,{flatShading:!0}),0,2.6,0,we).rotation.y=Math.PI/2,we.position.set(0,2.5,0),pe.add(we),n.addCircle(0,0,1.4);let ze=new ke;Ue(new Ge(3,1,1.4),tt(9071168),0,.5,0,ze);for(let D of[-1,1])for(let U of[-1,1])Ue(new Ge(.12,2.6,.12),tt(5913892),D*1.4,1.3,U*.65,ze);let Ve=Ue(new Ge(3.4,.1,1.9),tt(12073530),0,2.6,0,ze);Ve.rotation.x=.15;for(let D=0;D<5;D++)Ue(new Ge(.3,.3,.3),tt([13934624,9054858,2787898,12599328,3170496][D]),-1.1+D*.55,1.15,0,ze);ze.position.set(-7,2.5,6),ze.rotation.y=.6,pe.add(ze),n.addBox(-7,6,1.6,.8,.6),s.spots.merchant={x:-7-Math.sin(.6)*1.4,z:6-Math.cos(.6)*1.4},s.spots.elder={x:3,z:3};let De=new Ot({color:3351057,emissive:16755268,emissiveIntensity:0});ur.push(De);for(let D=0;D<8;D++){let U=D/8*Math.PI*2+.4,G=11,W=new ke;Ue(new Ge(.15,2.6,.15),tt(3811866),0,1.3,0,W),Ue(new Ge(.35,.45,.35),De,0,2.7,0,W),W.position.set(Math.sin(U)*G,2.5,Math.cos(U)*G),pe.add(W),n.addCircle(W.position.x,W.position.z,.2)}let rt=zl({x:de.herbalist.x,y:et(de.herbalist.x,de.herbalist.z),z:de.herbalist.z,rot:Math.atan2(-de.herbalist.x,-de.herbalist.z),w:5,d:4.5,h:2.6,roof:4876842,wall:13154448,chimney:!0},n);i.add(rt);let k=Math.atan2(-de.herbalist.x,-de.herbalist.z);s.spots.herbalist={x:de.herbalist.x+Math.sin(k)*4.5,z:de.herbalist.z+Math.cos(k)*4.5};for(let D=0;D<6;D++){let U=Ue(new Ut(.25,.2,.4,6),tt(10510394),0,0,0);U.position.set(de.herbalist.x+Math.sin(k+.6+D*.12)*4,et(de.herbalist.x,de.herbalist.z)+.2,de.herbalist.z+Math.cos(k+.6+D*.12)*4),i.add(U)}{let D=de.crossroad.x+4,U=de.crossroad.z+3,G=et(D,U),W=new ke;Ue(new Ge(2.2,1.6,3.4),tt(4860506),0,1.4,0,W),Ue(Ul(2.2,3.4,.9,.2),tt(2759226,{flatShading:!0}),0,2.2,0,W).rotation.y=Math.PI/2;let ue=new Ut(.55,.55,.15,10);for(let ye of[-1,1])for(let J of[-1,1]){let P=Ue(ue,tt(3811866),ye*1.15,.55,J*1.1,W);P.rotation.z=Math.PI/2}let re=new Ot({color:2245666,emissive:6750088,emissiveIntensity:.6});ur.push(re),Ue(new Ge(.3,.4,.3),re,1.2,2,1.5,W),W.position.set(D,G,U),W.rotation.y=.4,i.add(W),n.addBox(D,U,1.2,1.8,.4),s.spots.alchemist={x:de.crossroad.x,z:de.crossroad.z};let _e=new ke;Ue(new Ge(.15,2.4,.15),tt(5913892),0,1.2,0,_e);for(let ye=0;ye<3;ye++){let J=Ue(new Ge(1.2,.25,.06),tt(10517066),.4,2-ye*.35,0,_e);J.rotation.y=ye*1.3}_e.position.set(de.crossroad.x-2.5,et(de.crossroad.x-2.5,de.crossroad.z-2),de.crossroad.z-2),i.add(_e)}{let D=de.house.x,U=de.house.z,G=et(D,U),W=Math.atan2(-D,-U);i.add(zl({x:D,y:G,z:U,rot:W,w:8,d:6.5,h:3.6,roof:2771578,wall:15787728,chimney:!0,roofH:2.6},n));let ue=D+Math.sin(W)*6.2+Math.cos(W)*2.5,re=U+Math.cos(W)*6.2-Math.sin(W)*2.5,_e=new ke;Ue(new Ge(.15,1.6,.15),tt(5913892),0,.8,0,_e),Ue(new Ge(1.1,.6,.08),tt(13148256),0,1.5,0,_e),_e.position.set(ue,et(ue,re),re),_e.rotation.y=W,i.add(_e),s.spots.house={x:D+Math.sin(W)*5.2,z:U+Math.cos(W)*5.2}}{let D=de.camp,U=Dl().camp,G=tt(9073488,{flatShading:!0});for(let J=0;J<5;J++){let P=J/5*Math.PI*2+.3,ie=D.x+Math.sin(P)*9,ce=D.z+Math.cos(P)*9,Se=Ue(new Jt(2.2,2.8,6),G,ie,U+1.4,ce);i.add(Se),n.addCircle(ie,ce,1.9)}let W=tt(5913892);for(let J=0;J<4;J++){let P=Ue(new Ut(.12,.12,1.2,5),W,D.x,U+.15,D.z);P.rotation.set(Math.PI/2,0,J*Math.PI/4),i.add(P)}let ue=new Lt({color:16747050}),re=new Me(new Jt(.45,1.2,6),ue);re.position.set(D.x,U+.7,D.z),i.add(re);let _e=new Me(new Jt(.25,.8,5),new Lt({color:16769126}));_e.position.set(D.x,U+.6,D.z),i.add(_e),n.addCircle(D.x,D.z,.9);let ye=new or(16747066,0,22,1.6);ye.position.set(D.x,U+2,D.z),i.add(ye),s.fire={flame:re,flame2:_e,light:ye};for(let J=0;J<26;J++){let P=J/34*Math.PI*2+2.2,ie=D.x+Math.sin(P)*17,ce=D.z+Math.cos(P)*17,Se=Ue(new Ut(.22,.25,2.6+J%3*.3,5),W,ie,et(ie,ce)+1.2,ce);i.add(Se),n.addCircle(ie,ce,.3);let Te=Ue(new Jt(.22,.5,5),W,ie,et(ie,ce)+2.8+J%3*.3,ce);i.add(Te)}for(let J=0;J<4;J++){let P=Ue(new Ge(.9,.9,.9),tt(8018480),D.x+4+J*.4,U+.45+(J===3?.9:0),D.z-3+J%3*.95);i.add(P)}}{let D=de.ruins,U=Dl().ruins,G=tt(9276036,{flatShading:!0}),W=tt(6257226,{flatShading:!0}),ue=tt(5591630,{flatShading:!0});for(let J=0;J<12;J++){let P=J/12*Math.PI*2,ie=D.x+Math.sin(P)*15,ce=D.z+Math.cos(P)*15,Se=J%3===0?1.2+t()*1.5:4+t()*4,Te=Ue(new Ut(.75,.9,Se,7),J%4===0?W:G,ie,U+Se/2,ce);if(i.add(Te),n.addCircle(ie,ce,.9),J%2===0&&Se>4){let ct=Ue(new Ge(2,.5,2),ue,ie,U+Se+.25,ce);ct.rotation.y=t(),i.add(ct)}}for(let J=0;J<5;J++){let P=J/5*Math.PI*2+.5,ie=D.x+Math.sin(P)*22,ce=D.z+Math.cos(P)*22,Se=6+t()*4,Te=1.5+t()*3,ct=Ue(new Ge(Se,Te,1),G,ie,et(ie,ce)+Te/2-.2,ce);ct.rotation.y=P+Math.PI/2,i.add(ct),n.addBox(ie,ce,Se/2,.55,P+Math.PI/2)}let re=Ue(new Ut(5,5.6,.6,12),ue,D.x,U+.3,D.z);i.add(re);let _e=Ue(new Ut(3,3.6,9,9,1,!0),G,D.x+25,et(D.x+25,D.z-14)+4.5,D.z-14);_e.material=tt(9276036,{flatShading:!0,side:dn}),i.add(_e),n.addCircle(D.x+25,D.z-14,3.6);let ye=new Ot({color:3349002,emissive:16734746,emissiveIntensity:.4});ur.push(ye),s.runeMat=ye;for(let J=0;J<6;J++){let P=J/6*Math.PI*2,ie=Ue(new Ge(.6,.05,1.4),ye,D.x+Math.sin(P)*3.8,U+.62,D.z+Math.cos(P)*3.8);ie.rotation.y=P,i.add(ie)}s.spots.ruins={x:D.x,z:D.z}}let $t=[[-70,98],[92,30],[-118,-40],[140,-132],[-22,118],[128,82],[-140,20],[20,-140]],Ie=tt(7029794),Oe=tt(13213744);$t.forEach(([D,U],G)=>{let W=0;for(;et(D,U)<.6&&W++<40;)D*=.96,U*=.96;let ue=et(D,U),re=new ke;Ue(new Ge(1.1,.6,.7),Ie,0,.3,0,re);let _e=new ke;_e.position.set(0,.6,-.35),re.add(_e),Ue(new Ge(1.12,.3,.72),Ie,0,.15,.35,_e),Ue(new Ge(1.14,.08,.1),Oe,0,.15,.72,_e),Ue(new Ge(.16,.2,.06),Oe,0,.55,.37,re),re.position.set(D,ue,U),re.rotation.y=t()*6,i.add(re),n.addCircle(D,U,.6),s.chests.push({x:D,z:U,group:re,lid:_e,i:G})});let Ee=new Ot({color:8978414,emissive:4513228,emissiveIntensity:.6});ur.push(Ee),s.herbMat=Ee;let vt=tt(2779706),We=La(99);for(let D=0;D<4e3&&s.herbs.length<11;D++){let U=(We()*2-1)*150,G=(We()*2-1)*150;if(rs(U,G)<.6||C(U,G,8)||Ni(U,G)<6)continue;let W=et(U,G);if(W<1||W>18||s.herbs.some(re=>Math.hypot(re.x-U,re.z-G)<18))continue;let ue=new ke;for(let re=0;re<3;re++){let _e=Ue(new Ut(.03,.03,.6,3),vt,Math.cos(re*2.1)*.15,.3,Math.sin(re*2.1)*.15,ue);_e.castShadow=!1;let ye=Ue(new ir(.14,0),Ee,Math.cos(re*2.1)*.15,.65,Math.sin(re*2.1)*.15,ue);ye.castShadow=!1}ue.position.set(U,W,G),i.add(ue),s.herbs.push({x:U,z:G,group:ue,i:s.herbs.length})}let E=new Nt,M=[],H=La(7);for(let D=0;D<900;D++){let U=H()*Math.PI*2,G=H()*.9+.08,W=330;M.push(Math.cos(U)*Math.cos(G*Math.PI/2)*W,Math.sin(G*Math.PI/2)*W,Math.sin(U)*Math.cos(G*Math.PI/2)*W)}E.setAttribute("position",new ht(M,3));let ae=new is({color:16777215,size:1.6,sizeAttenuation:!1,transparent:!0,opacity:0,fog:!1,depthWrite:!1}),oe=new nr(E,ae);i.add(oe),s.stars=oe,s.starMat=ae;let le=new Me(new Xr(9,12,8),new Lt({color:15659775,fog:!1,transparent:!0}));i.add(le),s.moon=le;let Re=new Me(new Xr(12,12,8),new Lt({color:16773824,fog:!1,transparent:!0}));i.add(Re),s.sunDisc=Re;let xe=new Ot({color:16777215,flatShading:!0,transparent:!0,opacity:.9});s.cloudMat=xe;let be=new ke;for(let D=0;D<18;D++){let U=new ke;for(let G=0;G<4;G++){let W=new Me(new Yn(4+t()*4,0),xe);W.position.set(G*5-8,t()*2,t()*4),W.scale.y=.5,U.add(W)}U.position.set((t()*2-1)*220,55+t()*20,(t()*2-1)*220),be.add(U)}i.add(be),s.clouds=be;let Pe=210,Be=document.createElement("canvas");Be.width=Pe,Be.height=Pe;let se=Be.getContext("2d"),at=se.createImageData(Pe,Pe);for(let D=0;D<Pe;D++)for(let U=0;U<Pe;U++){let G=-Ui+U*2+1,W=-Ui+D*2+1,ue=et(G,W),re,_e,ye;if(ue<0)re=50,_e=110,ye=160;else if(ue<1.2)re=205,_e=187,ye=132;else if(ue>34)re=235,_e=235,ye=240;else if(ue>16)re=133,_e=125,ye=112;else{let P=rs(G,W);re=92,_e=154,ye=60,P>.58&&(re=52,_e=100,ye=42);let ie=(ue-2)*3;re+=ie,_e+=ie,ye+=ie}Ni(G,W)<2.2&&(re=160,_e=128,ye=84);let J=(D*Pe+U)*4;at.data[J]=re,at.data[J+1]=_e,at.data[J+2]=ye,at.data[J+3]=255}se.putImageData(at,0,0),se.fillStyle="#6a3a2a";for(let D of me)se.fillRect((D.x+Ui)/2-2,(D.z+Ui)/2-2,4,4);return s.minimap=Be,s}var Qd=new Map;function dt(i,e,t){let n=i+"_"+e+"_"+t,s=Qd.get(n);return s||(s=new Ge(i,e,t),Qd.set(n,s)),s}function os(i={}){var S,F,j,ee,z,B,Q;let e=[],t=(Z,K={})=>{let $=new Ot({color:Z,...K});return e.push($),$},n=t((S=i.skin)!=null?S:14725257),s=t((F=i.shirt)!=null?F:3829413),r=t((j=i.pants)!=null?j:4864810),o=t((ee=i.hair)!=null?ee:3875858),a=t((z=i.boots)!=null?z:2759956),c=i.thin?.8:1,l=new ke,h=new ke;l.add(h);let u=new Me(dt(.66*c,.78,.38*c),s);u.position.y=1.28,h.add(u);let d=new Me(dt(.68*c,.1,.4*c),a);d.position.y=.92,h.add(d);let f=new ke;f.position.y=1.68,h.add(f);let g=new Me(dt(.42,.44,.42),n);if(g.position.y=.24,f.add(g),i.helmet){let Z=t(i.helmet),K=new Me(dt(.5,.36,.5),Z);K.position.y=.38,f.add(K);let $=new Me(dt(.08,.2,.46),t(7999504));$.position.y=.62,f.add($)}else if(i.hood){let Z=t(i.hood),K=new Me(dt(.5,.52,.5),Z);K.position.set(0,.3,-.04),f.add(K)}else{let Z=new Me(dt(.46,.14,.46),o);Z.position.y=.5,f.add(Z);let K=new Me(dt(.46,i.longHair?.6:.3,.1),o);K.position.set(0,i.longHair?.2:.34,-.2),f.add(K)}if(i.beard){let Z=new Me(dt(.38,.22,.1),t(i.beard));Z.position.set(0,.08,.2),f.add(Z)}let x=i.eyeGlow?t(i.eyeGlow,{emissive:i.eyeGlow}):t(1710618),m=new Me(dt(.08,.07,.02),x);m.position.set(-.1,.28,.215),f.add(m);let p=m.clone();p.position.x=.1,f.add(p);function y(Z,K,$,te,he,pe){let Y=new ke;Y.position.set(Z,K,0);let ne=new Me(dt($,te,$),he);if(ne.position.y=-te/2,Y.add(ne),pe){let me=new Me(dt($*1.05,.16,$*1.15),pe);me.position.set(0,-te+.06,.02),Y.add(me)}return h.add(Y),Y}let _=y(-.45*c,1.62,.2*c,.72,s,n),b=y(.45*c,1.62,.2*c,.72,s,n),C=y(-.17*c,.9,.24*c,.88,r,a),A=y(.17*c,.9,.24*c,.88,r,a);if(i.dress){let Z=new Me(new Ut(.36,.56,.8,8),t(i.dress));Z.position.y=.55,h.add(Z)}let R=null;if(i.weapon){R=new ke,R.position.set(0,-.68,.05),R.rotation.x=Math.PI/2;let Z=t((B=i.blade)!=null?B:13226457,i.bladeGlow?{emissive:i.bladeGlow,emissiveIntensity:.6}:{}),K=new Me(dt(.06,.22,.06),t(4861722));R.add(K);let $=new Me(dt(.3,.05,.08),t(10254890));$.position.y=.12,R.add($);let te=new Me(dt(.08,.85,.03),Z);te.position.y=.56,R.add(te),R.userData.metal=Z,b.add(R)}if(i.staff){let Z=new Me(dt(.06,1.7,.06),t(5913119));Z.position.set(0,-.6,.05),b.add(Z);let K=new Me(dt(.16,.16,.16),t(i.staff,{emissive:i.staff}));K.position.set(0,.25,.05),b.add(K)}let O=null;if(i.cape){O=new ke,O.position.set(0,1.62,-.21),h.add(O);let Z=new Me(dt(.62,1.05,.04),t(i.cape));Z.position.y=-.52,O.add(Z)}let v=(Q=i.scale)!=null?Q:1;return l.scale.setScalar(v),l.traverse(Z=>{Z.isMesh&&(Z.castShadow=!0)}),{kind:"hum",group:l,body:h,headG:f,armL:_,armR:b,legL:C,legR:A,mats:e,weapon:R,cape:O,phase:Math.random()*6}}function Fl(i,e,t,n=-1,s={}){i.phase+=e*(3+t*1.7);let r=Math.min(1,t/4),o=Math.sin(i.phase);if(i.legL.rotation.x=o*.8*r,i.legR.rotation.x=-o*.8*r,i.armL.rotation.x=s.cast?-1.5:-o*.6*r,i.armL.rotation.z=0,i.body.position.y=Math.abs(Math.cos(i.phase))*.08*r,i.body.rotation.y=0,i.body.rotation.x=0,n>=0){let a;n<.35?a=-.3-n/.35*2.4:n<.6?a=-2.7+(n-.35)/.25*2.5:a=-.2-(1-(n-.6)/.4)*0,i.armR.rotation.x=a,i.body.rotation.y=n<.35?-.3*(n/.35):-.3+Math.min(1,(n-.35)/.25)*.6,i.body.rotation.x=n>.35&&n<.7?.15:0}else i.armR.rotation.x=(i.weapon?-.35:0)+o*.6*r;i.cape&&(i.cape.rotation.x=.1+r*.5+Math.sin(i.phase*.5)*.08),s.kneel?(i.legL.rotation.x=-1.4,i.legR.rotation.x=.2,i.body.position.y=-.4,i.armR.rotation.x=-.2,i.armL.rotation.x=-.2,i.headG.rotation.x=.4):i.headG.rotation.x=0}function Bl(i={}){var R,O,v,S;let e=[],t=(F,j={})=>{let ee=new Ot({color:F,...j});return e.push(ee),ee},n=t((R=i.color)!=null?R:7829367),s=t((O=i.belly)!=null?O:14540253),r=t((v=i.dark)!=null?v:2236962),o=new ke,a=new ke;o.add(a);let c=new Me(dt(.46,.42,1),n);c.position.y=.62,a.add(c);let l=new Me(dt(.4,.2,.5),s);l.position.set(0,.46,.2),a.add(l);let h=new ke;h.position.set(0,.82,.55),a.add(h);let u=new Me(dt(.36,.32,.36),n);h.add(u);let d=new Me(dt(.18,.14,.26),s);d.position.set(0,-.06,.28),h.add(d);let f=new Me(dt(.08,.06,.04),r);f.position.set(0,-.02,.42),h.add(f);let g=new Jt(.07,.18,4),x=new Me(g,n);x.position.set(-.11,.23,-.04),h.add(x);let m=x.clone();m.position.x=.11,h.add(m);let p=i.eye?t(i.eye,{emissive:i.eye}):r,y=new Me(dt(.06,.05,.02),p);y.position.set(-.09,.05,.18),h.add(y);let _=y.clone();_.position.x=.09,h.add(_);let b=[];for(let[F,j]of[[-.16,.36],[.16,.36],[-.16,-.36],[.16,-.36]]){let ee=new ke;ee.position.set(F,.45,j);let z=new Me(dt(.12,.45,.12),n);z.position.y=-.22,ee.add(z);let B=new Me(dt(.13,.08,.15),i.paws?t(i.paws):n);B.position.set(0,-.42,.02),ee.add(B),a.add(ee),b.push(ee)}let C=new ke;C.position.set(0,.72,-.5),a.add(C);let A=new Me(dt(.14,.14,.5),n);if(A.position.z=-.25,C.add(A),i.tailTip){let F=new Me(dt(.15,.15,.16),t(i.tailTip));F.position.z=-.52,C.add(F)}return C.rotation.x=.5,o.scale.setScalar((S=i.scale)!=null?S:1),o.traverse(F=>{F.isMesh&&(F.castShadow=!0)}),{kind:"quad",group:o,body:a,headG:h,legs:b,tail:C,mats:e,phase:Math.random()*6}}function kl(i,e,t,n=-1){i.phase+=e*(4+t*2.2);let s=Math.min(1,t/4),r=Math.sin(i.phase);if(i.legs[0].rotation.x=r*.9*s,i.legs[3].rotation.x=r*.9*s,i.legs[1].rotation.x=-r*.9*s,i.legs[2].rotation.x=-r*.9*s,i.body.position.y=Math.abs(Math.cos(i.phase))*.06*s,i.tail.rotation.y=Math.sin(i.phase*(t<.5?.6:1.5))*.5,n>=0){let o=n<.5?n/.5:1-(n-.5)/.5;i.body.rotation.x=-.35*o,i.headG.rotation.x=.4*o,i.body.position.z=.4*o}else i.body.rotation.x=0,i.headG.rotation.x=0,i.body.position.z=0}var Ft=null,Jr=null,za=null,tf=!0,ef=0,Hl=0;function as(){if(Ft){Ft.state==="suspended"&&Ft.resume();return}try{Ft=new(window.AudioContext||window.webkitAudioContext),Jr=Ft.createGain(),Jr.gain.value=.5,Jr.connect(Ft.destination)}catch{Ft=null}}function Gl(i){tf=i}function Rt(i,e,t="sine",n=.3,s=null,r=0){if(!Ft)return;let o=Ft.currentTime+r,a=Ft.createOscillator(),c=Ft.createGain();a.type=t,a.frequency.setValueAtTime(i,o),s&&a.frequency.exponentialRampToValueAtTime(s,o+e),c.gain.setValueAtTime(1e-4,o),c.gain.exponentialRampToValueAtTime(n,o+.01),c.gain.exponentialRampToValueAtTime(1e-4,o+e),a.connect(c),c.connect(Jr),a.start(o),a.stop(o+e+.05)}function Oi(i,e=.3,t=2e3,n=500,s="bandpass",r=0){if(!Ft)return;if(!za){za=Ft.createBuffer(1,Ft.sampleRate,Ft.sampleRate);let h=za.getChannelData(0);for(let u=0;u<h.length;u++)h[u]=Math.random()*2-1}let o=Ft.currentTime+r,a=Ft.createBufferSource();a.buffer=za;let c=Ft.createBiquadFilter();c.type=s,c.frequency.setValueAtTime(t,o),c.frequency.exponentialRampToValueAtTime(n,o+i);let l=Ft.createGain();l.gain.setValueAtTime(e,o),l.gain.exponentialRampToValueAtTime(1e-4,o+i),a.connect(c),c.connect(l),l.connect(Jr),a.start(o),a.stop(o+i+.02)}var Qe={swing:()=>Oi(.18,.22,3500,700),hit:()=>{Oi(.12,.4,1400,200,"lowpass"),Rt(130,.15,"square",.12,60)},crit:()=>{Oi(.15,.5,2400,300,"lowpass"),Rt(880,.2,"triangle",.12,440)},hurt:()=>{Rt(240,.25,"sawtooth",.14,90),Oi(.1,.2,900,200,"lowpass")},coin:()=>{Rt(988,.08,"square",.06),Rt(1319,.15,"square",.06,null,.07)},magic:()=>{Rt(300,.35,"sawtooth",.1,1200),Oi(.3,.12,4e3,8e3,"highpass")},boom:()=>{Oi(.3,.3,2e3,200,"lowpass"),Rt(200,.3,"sine",.2,60)},roll:()=>Oi(.25,.15,800,300,"lowpass"),level:()=>{[523,659,784,1047].forEach((i,e)=>Rt(i,.3,"triangle",.14,null,e*.1))},quest:()=>{[392,523,659,784].forEach((i,e)=>Rt(i,.35,"triangle",.13,null,e*.12))},good:()=>{Rt(660,.5,"sine",.14,990),Rt(990,.5,"sine",.08,1320,.15)},evil:()=>{Rt(220,.6,"sawtooth",.1,70),Rt(233,.6,"sawtooth",.08,75)},slam:()=>{Oi(.6,.6,700,50,"lowpass"),Rt(70,.6,"sine",.4,30)},pickup:()=>Rt(1200+Math.random()*300,.06,"sine",.05,1800),bark:()=>{Rt(520,.07,"square",.07,320),Rt(540,.07,"square",.07,330,.13)},click:()=>Rt(700,.05,"triangle",.08),drink:()=>{for(let i=0;i<3;i++)Rt(400+i*80,.08,"sine",.08,600,i*.09)},death:()=>{Rt(300,1.2,"triangle",.15,80)},victory:()=>{[523,659,784,659,784,1047].forEach((i,e)=>Rt(i,.45,"triangle",.15,null,e*.16))}},Iy=[261.6,293.7,329.6,392,440,523.3,587.3,659.3],zy=[220,261.6,293.7,329.6,392,440,523.3],Dy=[146.8,174.6,196,220,233.1,261.6];function nf(i,e){if(!Ft||!tf||Ft.state!=="running"||i<ef)return;let t=e==="combat"?Dy:e==="night"?zy:Iy,n=e==="combat"?.28:.55;if(ef=i+n,Hl++,e!=="combat"&&Math.random()<.25)return;let s=Math.floor((Math.sin(Hl*.7)*.5+.5)*t.length+Math.random()*2)%t.length,r=e==="combat"?.05:.045;Rt(t[s],n*2.2,e==="combat"?"sawtooth":"triangle",r),Hl%4===0&&Rt(t[0]/2,n*4,"sine",.05)}var Da=class extends mi{constructor(e){super(e),this.dracoLoader=null,this.ktx2Loader=null,this.meshoptDecoder=null,this.pluginCallbacks=[],this.register(function(t){return new Zl(t)}),this.register(function(t){return new sh(t)}),this.register(function(t){return new rh(t)}),this.register(function(t){return new oh(t)}),this.register(function(t){return new $l(t)}),this.register(function(t){return new Jl(t)}),this.register(function(t){return new Ql(t)}),this.register(function(t){return new eh(t)}),this.register(function(t){return new jl(t)}),this.register(function(t){return new th(t)}),this.register(function(t){return new Kl(t)}),this.register(function(t){return new ih(t)}),this.register(function(t){return new nh(t)}),this.register(function(t){return new ql(t)}),this.register(function(t){return new ah(t)}),this.register(function(t){return new ch(t)})}load(e,t,n,s){let r=this,o;if(this.resourcePath!=="")o=this.resourcePath;else if(this.path!==""){let l=Di.extractUrlBase(e);o=Di.resolveURL(l,this.path)}else o=Di.extractUrlBase(e);this.manager.itemStart(e);let a=function(l){s?s(l):console.error(l),r.manager.itemError(e),r.manager.itemEnd(e)},c=new Yr(this.manager);c.setPath(this.path),c.setResponseType("arraybuffer"),c.setRequestHeader(this.requestHeader),c.setWithCredentials(this.withCredentials),c.load(e,function(l){try{r.parse(l,o,function(h){t(h),r.manager.itemEnd(e)},a)}catch(h){a(h)}},n,a)}setDRACOLoader(e){return this.dracoLoader=e,this}setDDSLoader(){throw new Error('THREE.GLTFLoader: "MSFT_texture_dds" no longer supported. Please update to "KHR_texture_basisu".')}setKTX2Loader(e){return this.ktx2Loader=e,this}setMeshoptDecoder(e){return this.meshoptDecoder=e,this}register(e){return this.pluginCallbacks.indexOf(e)===-1&&this.pluginCallbacks.push(e),this}unregister(e){return this.pluginCallbacks.indexOf(e)!==-1&&this.pluginCallbacks.splice(this.pluginCallbacks.indexOf(e),1),this}parse(e,t,n,s){let r,o={},a={},c=new TextDecoder;if(typeof e=="string")r=JSON.parse(e);else if(e instanceof ArrayBuffer)if(c.decode(new Uint8Array(e,0,4))===cf){try{o[nt.KHR_BINARY_GLTF]=new lh(e)}catch(u){s&&s(u);return}r=JSON.parse(o[nt.KHR_BINARY_GLTF].content)}else r=JSON.parse(c.decode(e));else r=e;if(r.asset===void 0||r.asset.version[0]<2){s&&s(new Error("THREE.GLTFLoader: Unsupported asset. glTF versions >=2.0 are supported."));return}let l=new gh(r,{path:t||this.resourcePath||"",crossOrigin:this.crossOrigin,requestHeader:this.requestHeader,manager:this.manager,ktx2Loader:this.ktx2Loader,meshoptDecoder:this.meshoptDecoder});l.fileLoader.setRequestHeader(this.requestHeader);for(let h=0;h<this.pluginCallbacks.length;h++){let u=this.pluginCallbacks[h](l);u.name||console.error("THREE.GLTFLoader: Invalid plugin found: missing name"),a[u.name]=u,o[u.name]=!0}if(r.extensionsUsed)for(let h=0;h<r.extensionsUsed.length;++h){let u=r.extensionsUsed[h],d=r.extensionsRequired||[];switch(u){case nt.KHR_MATERIALS_UNLIT:o[u]=new Yl;break;case nt.KHR_DRACO_MESH_COMPRESSION:o[u]=new hh(r,this.dracoLoader);break;case nt.KHR_TEXTURE_TRANSFORM:o[u]=new uh;break;case nt.KHR_MESH_QUANTIZATION:o[u]=new dh;break;default:d.indexOf(u)>=0&&a[u]===void 0&&console.warn('THREE.GLTFLoader: Unknown extension "'+u+'".')}}l.setExtensions(o),l.setPlugins(a),l.parse(n,s)}parseAsync(e,t){let n=this;return new Promise(function(s,r){n.parse(e,t,s,r)})}};function Ny(){let i={};return{get:function(e){return i[e]},add:function(e,t){i[e]=t},remove:function(e){delete i[e]},removeAll:function(){i={}}}}var nt={KHR_BINARY_GLTF:"KHR_binary_glTF",KHR_DRACO_MESH_COMPRESSION:"KHR_draco_mesh_compression",KHR_LIGHTS_PUNCTUAL:"KHR_lights_punctual",KHR_MATERIALS_CLEARCOAT:"KHR_materials_clearcoat",KHR_MATERIALS_IOR:"KHR_materials_ior",KHR_MATERIALS_SHEEN:"KHR_materials_sheen",KHR_MATERIALS_SPECULAR:"KHR_materials_specular",KHR_MATERIALS_TRANSMISSION:"KHR_materials_transmission",KHR_MATERIALS_IRIDESCENCE:"KHR_materials_iridescence",KHR_MATERIALS_ANISOTROPY:"KHR_materials_anisotropy",KHR_MATERIALS_UNLIT:"KHR_materials_unlit",KHR_MATERIALS_VOLUME:"KHR_materials_volume",KHR_TEXTURE_BASISU:"KHR_texture_basisu",KHR_TEXTURE_TRANSFORM:"KHR_texture_transform",KHR_MESH_QUANTIZATION:"KHR_mesh_quantization",KHR_MATERIALS_EMISSIVE_STRENGTH:"KHR_materials_emissive_strength",EXT_MATERIALS_BUMP:"EXT_materials_bump",EXT_TEXTURE_WEBP:"EXT_texture_webp",EXT_TEXTURE_AVIF:"EXT_texture_avif",EXT_MESHOPT_COMPRESSION:"EXT_meshopt_compression",EXT_MESH_GPU_INSTANCING:"EXT_mesh_gpu_instancing"},ql=class{constructor(e){this.parser=e,this.name=nt.KHR_LIGHTS_PUNCTUAL,this.cache={refs:{},uses:{}}}_markDefs(){let e=this.parser,t=this.parser.json.nodes||[];for(let n=0,s=t.length;n<s;n++){let r=t[n];r.extensions&&r.extensions[this.name]&&r.extensions[this.name].light!==void 0&&e._addNodeRef(this.cache,r.extensions[this.name].light)}}_loadLight(e){let t=this.parser,n="light:"+e,s=t.cache.get(n);if(s)return s;let r=t.json,c=((r.extensions&&r.extensions[this.name]||{}).lights||[])[e],l,h=new ge(16777215);c.color!==void 0&&h.setRGB(c.color[0],c.color[1],c.color[2],Xt);let u=c.range!==void 0?c.range:0;switch(c.type){case"directional":l=new ar(h),l.target.position.set(0,0,-1),l.add(l.target);break;case"point":l=new or(h),l.distance=u;break;case"spot":l=new _a(h),l.distance=u,c.spot=c.spot||{},c.spot.innerConeAngle=c.spot.innerConeAngle!==void 0?c.spot.innerConeAngle:0,c.spot.outerConeAngle=c.spot.outerConeAngle!==void 0?c.spot.outerConeAngle:Math.PI/4,l.angle=c.spot.outerConeAngle,l.penumbra=1-c.spot.innerConeAngle/c.spot.outerConeAngle,l.target.position.set(0,0,-1),l.add(l.target);break;default:throw new Error("THREE.GLTFLoader: Unexpected light type: "+c.type)}return l.position.set(0,0,0),l.decay=2,Bi(l,c),c.intensity!==void 0&&(l.intensity=c.intensity),l.name=t.createUniqueName(c.name||"light_"+e),s=Promise.resolve(l),t.cache.add(n,s),s}getDependency(e,t){if(e==="light")return this._loadLight(t)}createNodeAttachment(e){let t=this,n=this.parser,r=n.json.nodes[e],a=(r.extensions&&r.extensions[this.name]||{}).light;return a===void 0?null:this._loadLight(a).then(function(c){return n._getNodeRef(t.cache,a,c)})}},Yl=class{constructor(){this.name=nt.KHR_MATERIALS_UNLIT}getMaterialType(){return Lt}extendParams(e,t,n){let s=[];e.color=new ge(1,1,1),e.opacity=1;let r=t.pbrMetallicRoughness;if(r){if(Array.isArray(r.baseColorFactor)){let o=r.baseColorFactor;e.color.setRGB(o[0],o[1],o[2],Xt),e.opacity=o[3]}r.baseColorTexture!==void 0&&s.push(n.assignTexture(e,"map",r.baseColorTexture,Tt))}return Promise.all(s)}},jl=class{constructor(e){this.parser=e,this.name=nt.KHR_MATERIALS_EMISSIVE_STRENGTH}extendMaterialParams(e,t){let s=this.parser.json.materials[e];if(!s.extensions||!s.extensions[this.name])return Promise.resolve();let r=s.extensions[this.name].emissiveStrength;return r!==void 0&&(t.emissiveIntensity=r),Promise.resolve()}},Zl=class{constructor(e){this.parser=e,this.name=nt.KHR_MATERIALS_CLEARCOAT}getMaterialType(e){let n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:Cn}extendMaterialParams(e,t){let n=this.parser,s=n.json.materials[e];if(!s.extensions||!s.extensions[this.name])return Promise.resolve();let r=[],o=s.extensions[this.name];if(o.clearcoatFactor!==void 0&&(t.clearcoat=o.clearcoatFactor),o.clearcoatTexture!==void 0&&r.push(n.assignTexture(t,"clearcoatMap",o.clearcoatTexture)),o.clearcoatRoughnessFactor!==void 0&&(t.clearcoatRoughness=o.clearcoatRoughnessFactor),o.clearcoatRoughnessTexture!==void 0&&r.push(n.assignTexture(t,"clearcoatRoughnessMap",o.clearcoatRoughnessTexture)),o.clearcoatNormalTexture!==void 0&&(r.push(n.assignTexture(t,"clearcoatNormalMap",o.clearcoatNormalTexture)),o.clearcoatNormalTexture.scale!==void 0)){let a=o.clearcoatNormalTexture.scale;t.clearcoatNormalScale=new He(a,a)}return Promise.all(r)}},Kl=class{constructor(e){this.parser=e,this.name=nt.KHR_MATERIALS_IRIDESCENCE}getMaterialType(e){let n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:Cn}extendMaterialParams(e,t){let n=this.parser,s=n.json.materials[e];if(!s.extensions||!s.extensions[this.name])return Promise.resolve();let r=[],o=s.extensions[this.name];return o.iridescenceFactor!==void 0&&(t.iridescence=o.iridescenceFactor),o.iridescenceTexture!==void 0&&r.push(n.assignTexture(t,"iridescenceMap",o.iridescenceTexture)),o.iridescenceIor!==void 0&&(t.iridescenceIOR=o.iridescenceIor),t.iridescenceThicknessRange===void 0&&(t.iridescenceThicknessRange=[100,400]),o.iridescenceThicknessMinimum!==void 0&&(t.iridescenceThicknessRange[0]=o.iridescenceThicknessMinimum),o.iridescenceThicknessMaximum!==void 0&&(t.iridescenceThicknessRange[1]=o.iridescenceThicknessMaximum),o.iridescenceThicknessTexture!==void 0&&r.push(n.assignTexture(t,"iridescenceThicknessMap",o.iridescenceThicknessTexture)),Promise.all(r)}},$l=class{constructor(e){this.parser=e,this.name=nt.KHR_MATERIALS_SHEEN}getMaterialType(e){let n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:Cn}extendMaterialParams(e,t){let n=this.parser,s=n.json.materials[e];if(!s.extensions||!s.extensions[this.name])return Promise.resolve();let r=[];t.sheenColor=new ge(0,0,0),t.sheenRoughness=0,t.sheen=1;let o=s.extensions[this.name];if(o.sheenColorFactor!==void 0){let a=o.sheenColorFactor;t.sheenColor.setRGB(a[0],a[1],a[2],Xt)}return o.sheenRoughnessFactor!==void 0&&(t.sheenRoughness=o.sheenRoughnessFactor),o.sheenColorTexture!==void 0&&r.push(n.assignTexture(t,"sheenColorMap",o.sheenColorTexture,Tt)),o.sheenRoughnessTexture!==void 0&&r.push(n.assignTexture(t,"sheenRoughnessMap",o.sheenRoughnessTexture)),Promise.all(r)}},Jl=class{constructor(e){this.parser=e,this.name=nt.KHR_MATERIALS_TRANSMISSION}getMaterialType(e){let n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:Cn}extendMaterialParams(e,t){let n=this.parser,s=n.json.materials[e];if(!s.extensions||!s.extensions[this.name])return Promise.resolve();let r=[],o=s.extensions[this.name];return o.transmissionFactor!==void 0&&(t.transmission=o.transmissionFactor),o.transmissionTexture!==void 0&&r.push(n.assignTexture(t,"transmissionMap",o.transmissionTexture)),Promise.all(r)}},Ql=class{constructor(e){this.parser=e,this.name=nt.KHR_MATERIALS_VOLUME}getMaterialType(e){let n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:Cn}extendMaterialParams(e,t){let n=this.parser,s=n.json.materials[e];if(!s.extensions||!s.extensions[this.name])return Promise.resolve();let r=[],o=s.extensions[this.name];t.thickness=o.thicknessFactor!==void 0?o.thicknessFactor:0,o.thicknessTexture!==void 0&&r.push(n.assignTexture(t,"thicknessMap",o.thicknessTexture)),t.attenuationDistance=o.attenuationDistance||1/0;let a=o.attenuationColor||[1,1,1];return t.attenuationColor=new ge().setRGB(a[0],a[1],a[2],Xt),Promise.all(r)}},eh=class{constructor(e){this.parser=e,this.name=nt.KHR_MATERIALS_IOR}getMaterialType(e){let n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:Cn}extendMaterialParams(e,t){let s=this.parser.json.materials[e];if(!s.extensions||!s.extensions[this.name])return Promise.resolve();let r=s.extensions[this.name];return t.ior=r.ior!==void 0?r.ior:1.5,Promise.resolve()}},th=class{constructor(e){this.parser=e,this.name=nt.KHR_MATERIALS_SPECULAR}getMaterialType(e){let n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:Cn}extendMaterialParams(e,t){let n=this.parser,s=n.json.materials[e];if(!s.extensions||!s.extensions[this.name])return Promise.resolve();let r=[],o=s.extensions[this.name];t.specularIntensity=o.specularFactor!==void 0?o.specularFactor:1,o.specularTexture!==void 0&&r.push(n.assignTexture(t,"specularIntensityMap",o.specularTexture));let a=o.specularColorFactor||[1,1,1];return t.specularColor=new ge().setRGB(a[0],a[1],a[2],Xt),o.specularColorTexture!==void 0&&r.push(n.assignTexture(t,"specularColorMap",o.specularColorTexture,Tt)),Promise.all(r)}},nh=class{constructor(e){this.parser=e,this.name=nt.EXT_MATERIALS_BUMP}getMaterialType(e){let n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:Cn}extendMaterialParams(e,t){let n=this.parser,s=n.json.materials[e];if(!s.extensions||!s.extensions[this.name])return Promise.resolve();let r=[],o=s.extensions[this.name];return t.bumpScale=o.bumpFactor!==void 0?o.bumpFactor:1,o.bumpTexture!==void 0&&r.push(n.assignTexture(t,"bumpMap",o.bumpTexture)),Promise.all(r)}},ih=class{constructor(e){this.parser=e,this.name=nt.KHR_MATERIALS_ANISOTROPY}getMaterialType(e){let n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:Cn}extendMaterialParams(e,t){let n=this.parser,s=n.json.materials[e];if(!s.extensions||!s.extensions[this.name])return Promise.resolve();let r=[],o=s.extensions[this.name];return o.anisotropyStrength!==void 0&&(t.anisotropy=o.anisotropyStrength),o.anisotropyRotation!==void 0&&(t.anisotropyRotation=o.anisotropyRotation),o.anisotropyTexture!==void 0&&r.push(n.assignTexture(t,"anisotropyMap",o.anisotropyTexture)),Promise.all(r)}},sh=class{constructor(e){this.parser=e,this.name=nt.KHR_TEXTURE_BASISU}loadTexture(e){let t=this.parser,n=t.json,s=n.textures[e];if(!s.extensions||!s.extensions[this.name])return null;let r=s.extensions[this.name],o=t.options.ktx2Loader;if(!o){if(n.extensionsRequired&&n.extensionsRequired.indexOf(this.name)>=0)throw new Error("THREE.GLTFLoader: setKTX2Loader must be called before loading KTX2 textures");return null}return t.loadTextureImage(e,r.source,o)}},rh=class{constructor(e){this.parser=e,this.name=nt.EXT_TEXTURE_WEBP,this.isSupported=null}loadTexture(e){let t=this.name,n=this.parser,s=n.json,r=s.textures[e];if(!r.extensions||!r.extensions[t])return null;let o=r.extensions[t],a=s.images[o.source],c=n.textureLoader;if(a.uri){let l=n.options.manager.getHandler(a.uri);l!==null&&(c=l)}return this.detectSupport().then(function(l){if(l)return n.loadTextureImage(e,o.source,c);if(s.extensionsRequired&&s.extensionsRequired.indexOf(t)>=0)throw new Error("THREE.GLTFLoader: WebP required by asset but unsupported.");return n.loadTexture(e)})}detectSupport(){return this.isSupported||(this.isSupported=new Promise(function(e){let t=new Image;t.src="data:image/webp;base64,UklGRiIAAABXRUJQVlA4IBYAAAAwAQCdASoBAAEADsD+JaQAA3AAAAAA",t.onload=t.onerror=function(){e(t.height===1)}})),this.isSupported}},oh=class{constructor(e){this.parser=e,this.name=nt.EXT_TEXTURE_AVIF,this.isSupported=null}loadTexture(e){let t=this.name,n=this.parser,s=n.json,r=s.textures[e];if(!r.extensions||!r.extensions[t])return null;let o=r.extensions[t],a=s.images[o.source],c=n.textureLoader;if(a.uri){let l=n.options.manager.getHandler(a.uri);l!==null&&(c=l)}return this.detectSupport().then(function(l){if(l)return n.loadTextureImage(e,o.source,c);if(s.extensionsRequired&&s.extensionsRequired.indexOf(t)>=0)throw new Error("THREE.GLTFLoader: AVIF required by asset but unsupported.");return n.loadTexture(e)})}detectSupport(){return this.isSupported||(this.isSupported=new Promise(function(e){let t=new Image;t.src="data:image/avif;base64,AAAAIGZ0eXBhdmlmAAAAAGF2aWZtaWYxbWlhZk1BMUIAAADybWV0YQAAAAAAAAAoaGRscgAAAAAAAAAAcGljdAAAAAAAAAAAAAAAAGxpYmF2aWYAAAAADnBpdG0AAAAAAAEAAAAeaWxvYwAAAABEAAABAAEAAAABAAABGgAAABcAAAAoaWluZgAAAAAAAQAAABppbmZlAgAAAAABAABhdjAxQ29sb3IAAAAAamlwcnAAAABLaXBjbwAAABRpc3BlAAAAAAAAAAEAAAABAAAAEHBpeGkAAAAAAwgICAAAAAxhdjFDgQAMAAAAABNjb2xybmNseAACAAIABoAAAAAXaXBtYQAAAAAAAAABAAEEAQKDBAAAAB9tZGF0EgAKCBgABogQEDQgMgkQAAAAB8dSLfI=",t.onload=t.onerror=function(){e(t.height===1)}})),this.isSupported}},ah=class{constructor(e){this.name=nt.EXT_MESHOPT_COMPRESSION,this.parser=e}loadBufferView(e){let t=this.parser.json,n=t.bufferViews[e];if(n.extensions&&n.extensions[this.name]){let s=n.extensions[this.name],r=this.parser.getDependency("buffer",s.buffer),o=this.parser.options.meshoptDecoder;if(!o||!o.supported){if(t.extensionsRequired&&t.extensionsRequired.indexOf(this.name)>=0)throw new Error("THREE.GLTFLoader: setMeshoptDecoder must be called before loading compressed files");return null}return r.then(function(a){let c=s.byteOffset||0,l=s.byteLength||0,h=s.count,u=s.byteStride,d=new Uint8Array(a,c,l);return o.decodeGltfBufferAsync?o.decodeGltfBufferAsync(h,u,d,s.mode,s.filter).then(function(f){return f.buffer}):o.ready.then(function(){let f=new ArrayBuffer(h*u);return o.decodeGltfBuffer(new Uint8Array(f),h,u,d,s.mode,s.filter),f})})}else return null}},ch=class{constructor(e){this.name=nt.EXT_MESH_GPU_INSTANCING,this.parser=e}createNodeMesh(e){let t=this.parser.json,n=t.nodes[e];if(!n.extensions||!n.extensions[this.name]||n.mesh===void 0)return null;let s=t.meshes[n.mesh];for(let l of s.primitives)if(l.mode!==In.TRIANGLES&&l.mode!==In.TRIANGLE_STRIP&&l.mode!==In.TRIANGLE_FAN&&l.mode!==void 0)return null;let o=n.extensions[this.name].attributes,a=[],c={};for(let l in o)a.push(this.parser.getDependency("accessor",o[l]).then(h=>(c[l]=h,c[l])));return a.length<1?null:(a.push(this.parser.createNodeMesh(e)),Promise.all(a).then(l=>{let h=l.pop(),u=h.isGroup?h.children:[h],d=l[0].count,f=[];for(let g of u){let x=new Je,m=new I,p=new Gt,y=new I(1,1,1),_=new er(g.geometry,g.material,d);for(let b=0;b<d;b++)c.TRANSLATION&&m.fromBufferAttribute(c.TRANSLATION,b),c.ROTATION&&p.fromBufferAttribute(c.ROTATION,b),c.SCALE&&y.fromBufferAttribute(c.SCALE,b),_.setMatrixAt(b,x.compose(m,p,y));for(let b in c)if(b==="_COLOR_0"){let C=c[b];_.instanceColor=new ns(C.array,C.itemSize,C.normalized)}else b!=="TRANSLATION"&&b!=="ROTATION"&&b!=="SCALE"&&g.geometry.setAttribute(b,c[b]);bt.prototype.copy.call(_,g),this.parser.assignFinalMaterial(_),f.push(_)}return h.isGroup?(h.clear(),h.add(...f),h):f[0]}))}},cf="glTF",Qr=12,sf={JSON:1313821514,BIN:5130562},lh=class{constructor(e){this.name=nt.KHR_BINARY_GLTF,this.content=null,this.body=null;let t=new DataView(e,0,Qr),n=new TextDecoder;if(this.header={magic:n.decode(new Uint8Array(e.slice(0,4))),version:t.getUint32(4,!0),length:t.getUint32(8,!0)},this.header.magic!==cf)throw new Error("THREE.GLTFLoader: Unsupported glTF-Binary header.");if(this.header.version<2)throw new Error("THREE.GLTFLoader: Legacy binary file detected.");let s=this.header.length-Qr,r=new DataView(e,Qr),o=0;for(;o<s;){let a=r.getUint32(o,!0);o+=4;let c=r.getUint32(o,!0);if(o+=4,c===sf.JSON){let l=new Uint8Array(e,Qr+o,a);this.content=n.decode(l)}else if(c===sf.BIN){let l=Qr+o;this.body=e.slice(l,l+a)}o+=a}if(this.content===null)throw new Error("THREE.GLTFLoader: JSON content not found.")}},hh=class{constructor(e,t){if(!t)throw new Error("THREE.GLTFLoader: No DRACOLoader instance provided.");this.name=nt.KHR_DRACO_MESH_COMPRESSION,this.json=e,this.dracoLoader=t,this.dracoLoader.preload()}decodePrimitive(e,t){let n=this.json,s=this.dracoLoader,r=e.extensions[this.name].bufferView,o=e.extensions[this.name].attributes,a={},c={},l={};for(let h in o){let u=ph[h]||h.toLowerCase();a[u]=o[h]}for(let h in e.attributes){let u=ph[h]||h.toLowerCase();if(o[h]!==void 0){let d=n.accessors[e.attributes[h]],f=dr[d.componentType];l[u]=f.name,c[u]=d.normalized===!0}}return t.getDependency("bufferView",r).then(function(h){return new Promise(function(u,d){s.decodeDracoFile(h,function(f){for(let g in f.attributes){let x=f.attributes[g],m=c[g];m!==void 0&&(x.normalized=m)}u(f)},a,l,Xt,d)})})}},uh=class{constructor(){this.name=nt.KHR_TEXTURE_TRANSFORM}extendTexture(e,t){return(t.texCoord===void 0||t.texCoord===e.channel)&&t.offset===void 0&&t.rotation===void 0&&t.scale===void 0||(e=e.clone(),t.texCoord!==void 0&&(e.channel=t.texCoord),t.offset!==void 0&&e.offset.fromArray(t.offset),t.rotation!==void 0&&(e.rotation=t.rotation),t.scale!==void 0&&e.repeat.fromArray(t.scale),e.needsUpdate=!0),e}},dh=class{constructor(){this.name=nt.KHR_MESH_QUANTIZATION}},Na=class extends Li{constructor(e,t,n,s){super(e,t,n,s)}copySampleValue_(e){let t=this.resultBuffer,n=this.sampleValues,s=this.valueSize,r=e*s*3+s;for(let o=0;o!==s;o++)t[o]=n[r+o];return t}interpolate_(e,t,n,s){let r=this.resultBuffer,o=this.sampleValues,a=this.valueSize,c=a*2,l=a*3,h=s-t,u=(n-t)/h,d=u*u,f=d*u,g=e*l,x=g-l,m=-2*f+3*d,p=f-d,y=1-m,_=p-d+u;for(let b=0;b!==a;b++){let C=o[x+b+a],A=o[x+b+c]*h,R=o[g+b+a],O=o[g+b]*h;r[b]=y*C+_*A+m*R+p*O}return r}},Uy=new Gt,fh=class extends Na{interpolate_(e,t,n,s){let r=super.interpolate_(e,t,n,s);return Uy.fromArray(r).normalize().toArray(r),r}},In={FLOAT:5126,FLOAT_MAT3:35675,FLOAT_MAT4:35676,FLOAT_VEC2:35664,FLOAT_VEC3:35665,FLOAT_VEC4:35666,LINEAR:9729,REPEAT:10497,SAMPLER_2D:35678,POINTS:0,LINES:1,LINE_LOOP:2,LINE_STRIP:3,TRIANGLES:4,TRIANGLE_STRIP:5,TRIANGLE_FAN:6,UNSIGNED_BYTE:5121,UNSIGNED_SHORT:5123},dr={5120:Int8Array,5121:Uint8Array,5122:Int16Array,5123:Uint16Array,5125:Uint32Array,5126:Float32Array},rf={9728:Vt,9729:un,9984:Go,9985:wl,9986:Cr,9987:Pi},of={33071:Mn,33648:Dr,10497:es},Vl={SCALAR:1,VEC2:2,VEC3:3,VEC4:4,MAT2:4,MAT3:9,MAT4:16},ph={POSITION:"position",NORMAL:"normal",TANGENT:"tangent",TEXCOORD_0:"uv",TEXCOORD_1:"uv1",TEXCOORD_2:"uv2",TEXCOORD_3:"uv3",COLOR_0:"color",WEIGHTS_0:"skinWeight",JOINTS_0:"skinIndex"},Fi={scale:"scale",translation:"position",rotation:"quaternion",weights:"morphTargetInfluences"},Oy={CUBICSPLINE:void 0,LINEAR:ts,STEP:js},Wl={OPAQUE:"OPAQUE",MASK:"MASK",BLEND:"BLEND"};function Fy(i){return i.DefaultMaterial===void 0&&(i.DefaultMaterial=new sr({color:16777215,emissive:0,metalness:1,roughness:1,transparent:!1,depthTest:!0,side:qn})),i.DefaultMaterial}function cs(i,e,t){for(let n in t.extensions)i[n]===void 0&&(e.userData.gltfExtensions=e.userData.gltfExtensions||{},e.userData.gltfExtensions[n]=t.extensions[n])}function Bi(i,e){e.extras!==void 0&&(typeof e.extras=="object"?Object.assign(i.userData,e.extras):console.warn("THREE.GLTFLoader: Ignoring primitive type .extras, "+e.extras))}function By(i,e,t){let n=!1,s=!1,r=!1;for(let l=0,h=e.length;l<h;l++){let u=e[l];if(u.POSITION!==void 0&&(n=!0),u.NORMAL!==void 0&&(s=!0),u.COLOR_0!==void 0&&(r=!0),n&&s&&r)break}if(!n&&!s&&!r)return Promise.resolve(i);let o=[],a=[],c=[];for(let l=0,h=e.length;l<h;l++){let u=e[l];if(n){let d=u.POSITION!==void 0?t.getDependency("accessor",u.POSITION):i.attributes.position;o.push(d)}if(s){let d=u.NORMAL!==void 0?t.getDependency("accessor",u.NORMAL):i.attributes.normal;a.push(d)}if(r){let d=u.COLOR_0!==void 0?t.getDependency("accessor",u.COLOR_0):i.attributes.color;c.push(d)}}return Promise.all([Promise.all(o),Promise.all(a),Promise.all(c)]).then(function(l){let h=l[0],u=l[1],d=l[2];return n&&(i.morphAttributes.position=h),s&&(i.morphAttributes.normal=u),r&&(i.morphAttributes.color=d),i.morphTargetsRelative=!0,i})}function ky(i,e){if(i.updateMorphTargets(),e.weights!==void 0)for(let t=0,n=e.weights.length;t<n;t++)i.morphTargetInfluences[t]=e.weights[t];if(e.extras&&Array.isArray(e.extras.targetNames)){let t=e.extras.targetNames;if(i.morphTargetInfluences.length===t.length){i.morphTargetDictionary={};for(let n=0,s=t.length;n<s;n++)i.morphTargetDictionary[t[n]]=n}else console.warn("THREE.GLTFLoader: Invalid extras.targetNames length. Ignoring names.")}}function Hy(i){let e,t=i.extensions&&i.extensions[nt.KHR_DRACO_MESH_COMPRESSION];if(t?e="draco:"+t.bufferView+":"+t.indices+":"+Xl(t.attributes):e=i.indices+":"+Xl(i.attributes)+":"+i.mode,i.targets!==void 0)for(let n=0,s=i.targets.length;n<s;n++)e+=":"+Xl(i.targets[n]);return e}function Xl(i){let e="",t=Object.keys(i).sort();for(let n=0,s=t.length;n<s;n++)e+=t[n]+":"+i[t[n]]+";";return e}function mh(i){switch(i){case Int8Array:return 1/127;case Uint8Array:return 1/255;case Int16Array:return 1/32767;case Uint16Array:return 1/65535;default:throw new Error("THREE.GLTFLoader: Unsupported normalized accessor component type.")}}function Gy(i){return i.search(/\.jpe?g($|\?)/i)>0||i.search(/^data\:image\/jpeg/)===0?"image/jpeg":i.search(/\.webp($|\?)/i)>0||i.search(/^data\:image\/webp/)===0?"image/webp":"image/png"}var Vy=new Je,gh=class{constructor(e={},t={}){this.json=e,this.extensions={},this.plugins={},this.options=t,this.cache=new Ny,this.associations=new Map,this.primitiveCache={},this.nodeCache={},this.meshCache={refs:{},uses:{}},this.cameraCache={refs:{},uses:{}},this.lightCache={refs:{},uses:{}},this.sourceCache={},this.textureCache={},this.nodeNamesUsed={};let n=!1,s=!1,r=-1;typeof navigator!="undefined"&&(n=/^((?!chrome|android).)*safari/i.test(navigator.userAgent)===!0,s=navigator.userAgent.indexOf("Firefox")>-1,r=s?navigator.userAgent.match(/Firefox\/([0-9]+)\./)[1]:-1),typeof createImageBitmap=="undefined"||n||s&&r<98?this.textureLoader=new ga(this.options.manager):this.textureLoader=new ya(this.options.manager),this.textureLoader.setCrossOrigin(this.options.crossOrigin),this.textureLoader.setRequestHeader(this.options.requestHeader),this.fileLoader=new Yr(this.options.manager),this.fileLoader.setResponseType("arraybuffer"),this.options.crossOrigin==="use-credentials"&&this.fileLoader.setWithCredentials(!0)}setExtensions(e){this.extensions=e}setPlugins(e){this.plugins=e}parse(e,t){let n=this,s=this.json,r=this.extensions;this.cache.removeAll(),this.nodeCache={},this._invokeAll(function(o){return o._markDefs&&o._markDefs()}),Promise.all(this._invokeAll(function(o){return o.beforeRoot&&o.beforeRoot()})).then(function(){return Promise.all([n.getDependencies("scene"),n.getDependencies("animation"),n.getDependencies("camera")])}).then(function(o){let a={scene:o[0][s.scene||0],scenes:o[0],animations:o[1],cameras:o[2],asset:s.asset,parser:n,userData:{}};return cs(r,a,s),Bi(a,s),Promise.all(n._invokeAll(function(c){return c.afterRoot&&c.afterRoot(a)})).then(function(){e(a)})}).catch(t)}_markDefs(){let e=this.json.nodes||[],t=this.json.skins||[],n=this.json.meshes||[];for(let s=0,r=t.length;s<r;s++){let o=t[s].joints;for(let a=0,c=o.length;a<c;a++)e[o[a]].isBone=!0}for(let s=0,r=e.length;s<r;s++){let o=e[s];o.mesh!==void 0&&(this._addNodeRef(this.meshCache,o.mesh),o.skin!==void 0&&(n[o.mesh].isSkinnedMesh=!0)),o.camera!==void 0&&this._addNodeRef(this.cameraCache,o.camera)}}_addNodeRef(e,t){t!==void 0&&(e.refs[t]===void 0&&(e.refs[t]=e.uses[t]=0),e.refs[t]++)}_getNodeRef(e,t,n){if(e.refs[t]<=1)return n;let s=n.clone(),r=(o,a)=>{let c=this.associations.get(o);c!=null&&this.associations.set(a,c);for(let[l,h]of o.children.entries())r(h,a.children[l])};return r(n,s),s.name+="_instance_"+e.uses[t]++,s}_invokeOne(e){let t=Object.values(this.plugins);t.push(this);for(let n=0;n<t.length;n++){let s=e(t[n]);if(s)return s}return null}_invokeAll(e){let t=Object.values(this.plugins);t.unshift(this);let n=[];for(let s=0;s<t.length;s++){let r=e(t[s]);r&&n.push(r)}return n}getDependency(e,t){let n=e+":"+t,s=this.cache.get(n);if(!s){switch(e){case"scene":s=this.loadScene(t);break;case"node":s=this._invokeOne(function(r){return r.loadNode&&r.loadNode(t)});break;case"mesh":s=this._invokeOne(function(r){return r.loadMesh&&r.loadMesh(t)});break;case"accessor":s=this.loadAccessor(t);break;case"bufferView":s=this._invokeOne(function(r){return r.loadBufferView&&r.loadBufferView(t)});break;case"buffer":s=this.loadBuffer(t);break;case"material":s=this._invokeOne(function(r){return r.loadMaterial&&r.loadMaterial(t)});break;case"texture":s=this._invokeOne(function(r){return r.loadTexture&&r.loadTexture(t)});break;case"skin":s=this.loadSkin(t);break;case"animation":s=this._invokeOne(function(r){return r.loadAnimation&&r.loadAnimation(t)});break;case"camera":s=this.loadCamera(t);break;default:if(s=this._invokeOne(function(r){return r!=this&&r.getDependency&&r.getDependency(e,t)}),!s)throw new Error("Unknown type: "+e);break}this.cache.add(n,s)}return s}getDependencies(e){let t=this.cache.get(e);if(!t){let n=this,s=this.json[e+(e==="mesh"?"es":"s")]||[];t=Promise.all(s.map(function(r,o){return n.getDependency(e,o)})),this.cache.add(e,t)}return t}loadBuffer(e){let t=this.json.buffers[e],n=this.fileLoader;if(t.type&&t.type!=="arraybuffer")throw new Error("THREE.GLTFLoader: "+t.type+" buffer type is not supported.");if(t.uri===void 0&&e===0)return Promise.resolve(this.extensions[nt.KHR_BINARY_GLTF].body);let s=this.options;return new Promise(function(r,o){n.load(Di.resolveURL(t.uri,s.path),r,void 0,function(){o(new Error('THREE.GLTFLoader: Failed to load buffer "'+t.uri+'".'))})})}loadBufferView(e){let t=this.json.bufferViews[e];return this.getDependency("buffer",t.buffer).then(function(n){let s=t.byteLength||0,r=t.byteOffset||0;return n.slice(r,r+s)})}loadAccessor(e){let t=this,n=this.json,s=this.json.accessors[e];if(s.bufferView===void 0&&s.sparse===void 0){let o=Vl[s.type],a=dr[s.componentType],c=s.normalized===!0,l=new a(s.count*o);return Promise.resolve(new At(l,o,c))}let r=[];return s.bufferView!==void 0?r.push(this.getDependency("bufferView",s.bufferView)):r.push(null),s.sparse!==void 0&&(r.push(this.getDependency("bufferView",s.sparse.indices.bufferView)),r.push(this.getDependency("bufferView",s.sparse.values.bufferView))),Promise.all(r).then(function(o){let a=o[0],c=Vl[s.type],l=dr[s.componentType],h=l.BYTES_PER_ELEMENT,u=h*c,d=s.byteOffset||0,f=s.bufferView!==void 0?n.bufferViews[s.bufferView].byteStride:void 0,g=s.normalized===!0,x,m;if(f&&f!==u){let p=Math.floor(d/f),y="InterleavedBuffer:"+s.bufferView+":"+s.componentType+":"+p+":"+s.count,_=t.cache.get(y);_||(x=new l(a,p*f,s.count*f/h),_=new Br(x,f/h),t.cache.add(y,_)),m=new kr(_,c,d%f/h,g)}else a===null?x=new l(s.count*c):x=new l(a,d,s.count*c),m=new At(x,c,g);if(s.sparse!==void 0){let p=Vl.SCALAR,y=dr[s.sparse.indices.componentType],_=s.sparse.indices.byteOffset||0,b=s.sparse.values.byteOffset||0,C=new y(o[1],_,s.sparse.count*p),A=new l(o[2],b,s.sparse.count*c);a!==null&&(m=new At(m.array.slice(),m.itemSize,m.normalized));for(let R=0,O=C.length;R<O;R++){let v=C[R];if(m.setX(v,A[R*c]),c>=2&&m.setY(v,A[R*c+1]),c>=3&&m.setZ(v,A[R*c+2]),c>=4&&m.setW(v,A[R*c+3]),c>=5)throw new Error("THREE.GLTFLoader: Unsupported itemSize in sparse BufferAttribute.")}}return m})}loadTexture(e){let t=this.json,n=this.options,r=t.textures[e].source,o=t.images[r],a=this.textureLoader;if(o.uri){let c=n.manager.getHandler(o.uri);c!==null&&(a=c)}return this.loadTextureImage(e,r,a)}loadTextureImage(e,t,n){let s=this,r=this.json,o=r.textures[e],a=r.images[t],c=(a.uri||a.bufferView)+":"+o.sampler;if(this.textureCache[c])return this.textureCache[c];let l=this.loadImageSource(t,n).then(function(h){h.flipY=!1,h.name=o.name||a.name||"",h.name===""&&typeof a.uri=="string"&&a.uri.startsWith("data:image/")===!1&&(h.name=a.uri);let d=(r.samplers||{})[o.sampler]||{};return h.magFilter=rf[d.magFilter]||un,h.minFilter=rf[d.minFilter]||Pi,h.wrapS=of[d.wrapS]||es,h.wrapT=of[d.wrapT]||es,s.associations.set(h,{textures:e}),h}).catch(function(){return null});return this.textureCache[c]=l,l}loadImageSource(e,t){let n=this,s=this.json,r=this.options;if(this.sourceCache[e]!==void 0)return this.sourceCache[e].then(u=>u.clone());let o=s.images[e],a=self.URL||self.webkitURL,c=o.uri||"",l=!1;if(o.bufferView!==void 0)c=n.getDependency("bufferView",o.bufferView).then(function(u){l=!0;let d=new Blob([u],{type:o.mimeType});return c=a.createObjectURL(d),c});else if(o.uri===void 0)throw new Error("THREE.GLTFLoader: Image "+e+" is missing URI and bufferView");let h=Promise.resolve(c).then(function(u){return new Promise(function(d,f){let g=d;t.isImageBitmapLoader===!0&&(g=function(x){let m=new on(x);m.needsUpdate=!0,d(m)}),t.load(Di.resolveURL(u,r.path),g,void 0,f)})}).then(function(u){return l===!0&&a.revokeObjectURL(c),u.userData.mimeType=o.mimeType||Gy(o.uri),u}).catch(function(u){throw console.error("THREE.GLTFLoader: Couldn't load texture",c),u});return this.sourceCache[e]=h,h}assignTexture(e,t,n,s){let r=this;return this.getDependency("texture",n.index).then(function(o){if(!o)return null;if(n.texCoord!==void 0&&n.texCoord>0&&(o=o.clone(),o.channel=n.texCoord),r.extensions[nt.KHR_TEXTURE_TRANSFORM]){let a=n.extensions!==void 0?n.extensions[nt.KHR_TEXTURE_TRANSFORM]:void 0;if(a){let c=r.associations.get(o);o=r.extensions[nt.KHR_TEXTURE_TRANSFORM].extendTexture(o,a),r.associations.set(o,c)}}return s!==void 0&&(o.colorSpace=s),e[t]=o,o})}assignFinalMaterial(e){let t=e.geometry,n=e.material,s=t.attributes.tangent===void 0,r=t.attributes.color!==void 0,o=t.attributes.normal===void 0;if(e.isPoints){let a="PointsMaterial:"+n.uuid,c=this.cache.get(a);c||(c=new is,fn.prototype.copy.call(c,n),c.color.copy(n.color),c.map=n.map,c.sizeAttenuation=!1,this.cache.add(a,c)),n=c}else if(e.isLine){let a="LineBasicMaterial:"+n.uuid,c=this.cache.get(a);c||(c=new Gr,fn.prototype.copy.call(c,n),c.color.copy(n.color),c.map=n.map,this.cache.add(a,c)),n=c}if(s||r||o){let a="ClonedMaterial:"+n.uuid+":";s&&(a+="derivative-tangents:"),r&&(a+="vertex-colors:"),o&&(a+="flat-shading:");let c=this.cache.get(a);c||(c=n.clone(),r&&(c.vertexColors=!0),o&&(c.flatShading=!0),s&&(c.normalScale&&(c.normalScale.y*=-1),c.clearcoatNormalScale&&(c.clearcoatNormalScale.y*=-1)),this.cache.add(a,c),this.associations.set(c,this.associations.get(n))),n=c}e.material=n}getMaterialType(){return sr}loadMaterial(e){let t=this,n=this.json,s=this.extensions,r=n.materials[e],o,a={},c=r.extensions||{},l=[];if(c[nt.KHR_MATERIALS_UNLIT]){let u=s[nt.KHR_MATERIALS_UNLIT];o=u.getMaterialType(),l.push(u.extendParams(a,r,t))}else{let u=r.pbrMetallicRoughness||{};if(a.color=new ge(1,1,1),a.opacity=1,Array.isArray(u.baseColorFactor)){let d=u.baseColorFactor;a.color.setRGB(d[0],d[1],d[2],Xt),a.opacity=d[3]}u.baseColorTexture!==void 0&&l.push(t.assignTexture(a,"map",u.baseColorTexture,Tt)),a.metalness=u.metallicFactor!==void 0?u.metallicFactor:1,a.roughness=u.roughnessFactor!==void 0?u.roughnessFactor:1,u.metallicRoughnessTexture!==void 0&&(l.push(t.assignTexture(a,"metalnessMap",u.metallicRoughnessTexture)),l.push(t.assignTexture(a,"roughnessMap",u.metallicRoughnessTexture))),o=this._invokeOne(function(d){return d.getMaterialType&&d.getMaterialType(e)}),l.push(Promise.all(this._invokeAll(function(d){return d.extendMaterialParams&&d.extendMaterialParams(e,a)})))}r.doubleSided===!0&&(a.side=dn);let h=r.alphaMode||Wl.OPAQUE;if(h===Wl.BLEND?(a.transparent=!0,a.depthWrite=!1):(a.transparent=!1,h===Wl.MASK&&(a.alphaTest=r.alphaCutoff!==void 0?r.alphaCutoff:.5)),r.normalTexture!==void 0&&o!==Lt&&(l.push(t.assignTexture(a,"normalMap",r.normalTexture)),a.normalScale=new He(1,1),r.normalTexture.scale!==void 0)){let u=r.normalTexture.scale;a.normalScale.set(u,u)}if(r.occlusionTexture!==void 0&&o!==Lt&&(l.push(t.assignTexture(a,"aoMap",r.occlusionTexture)),r.occlusionTexture.strength!==void 0&&(a.aoMapIntensity=r.occlusionTexture.strength)),r.emissiveFactor!==void 0&&o!==Lt){let u=r.emissiveFactor;a.emissive=new ge().setRGB(u[0],u[1],u[2],Xt)}return r.emissiveTexture!==void 0&&o!==Lt&&l.push(t.assignTexture(a,"emissiveMap",r.emissiveTexture,Tt)),Promise.all(l).then(function(){let u=new o(a);return r.name&&(u.name=r.name),Bi(u,r),t.associations.set(u,{materials:e}),r.extensions&&cs(s,u,r),u})}createUniqueName(e){let t=ft.sanitizeNodeName(e||"");return t in this.nodeNamesUsed?t+"_"+ ++this.nodeNamesUsed[t]:(this.nodeNamesUsed[t]=0,t)}loadGeometries(e){let t=this,n=this.extensions,s=this.primitiveCache;function r(a){return n[nt.KHR_DRACO_MESH_COMPRESSION].decodePrimitive(a,t).then(function(c){return af(c,a,t)})}let o=[];for(let a=0,c=e.length;a<c;a++){let l=e[a],h=Hy(l),u=s[h];if(u)o.push(u.promise);else{let d;l.extensions&&l.extensions[nt.KHR_DRACO_MESH_COMPRESSION]?d=r(l):d=af(new Nt,l,t),s[h]={primitive:l,promise:d},o.push(d)}}return Promise.all(o)}loadMesh(e){let t=this,n=this.json,s=this.extensions,r=n.meshes[e],o=r.primitives,a=[];for(let c=0,l=o.length;c<l;c++){let h=o[c].material===void 0?Fy(this.cache):this.getDependency("material",o[c].material);a.push(h)}return a.push(t.loadGeometries(o)),Promise.all(a).then(function(c){let l=c.slice(0,c.length-1),h=c[c.length-1],u=[];for(let f=0,g=h.length;f<g;f++){let x=h[f],m=o[f],p,y=l[f];if(m.mode===In.TRIANGLES||m.mode===In.TRIANGLE_STRIP||m.mode===In.TRIANGLE_FAN||m.mode===void 0)p=r.isSkinnedMesh===!0?new ca(x,y):new Me(x,y),p.isSkinnedMesh===!0&&p.normalizeSkinWeights(),m.mode===In.TRIANGLE_STRIP?p.geometry=Il(p.geometry,Ea):m.mode===In.TRIANGLE_FAN&&(p.geometry=Il(p.geometry,Kr));else if(m.mode===In.LINES)p=new ha(x,y);else if(m.mode===In.LINE_STRIP)p=new tr(x,y);else if(m.mode===In.LINE_LOOP)p=new ua(x,y);else if(m.mode===In.POINTS)p=new nr(x,y);else throw new Error("THREE.GLTFLoader: Primitive mode unsupported: "+m.mode);Object.keys(p.geometry.morphAttributes).length>0&&ky(p,r),p.name=t.createUniqueName(r.name||"mesh_"+e),Bi(p,r),m.extensions&&cs(s,p,m),t.assignFinalMaterial(p),u.push(p)}for(let f=0,g=u.length;f<g;f++)t.associations.set(u[f],{meshes:e,primitives:f});if(u.length===1)return r.extensions&&cs(s,u[0],r),u[0];let d=new ke;r.extensions&&cs(s,d,r),t.associations.set(d,{meshes:e});for(let f=0,g=u.length;f<g;f++)d.add(u[f]);return d})}loadCamera(e){let t,n=this.json.cameras[e],s=n[n.type];if(!s){console.warn("THREE.GLTFLoader: Missing camera parameters.");return}return n.type==="perspective"?t=new Wt(Ln.radToDeg(s.yfov),s.aspectRatio||1,s.znear||1,s.zfar||2e6):n.type==="orthographic"&&(t=new Qs(-s.xmag,s.xmag,s.ymag,-s.ymag,s.znear,s.zfar)),n.name&&(t.name=this.createUniqueName(n.name)),Bi(t,n),Promise.resolve(t)}loadSkin(e){let t=this.json.skins[e],n=[];for(let s=0,r=t.joints.length;s<r;s++)n.push(this._loadNodeShallow(t.joints[s]));return t.inverseBindMatrices!==void 0?n.push(this.getDependency("accessor",t.inverseBindMatrices)):n.push(null),Promise.all(n).then(function(s){let r=s.pop(),o=s,a=[],c=[];for(let l=0,h=o.length;l<h;l++){let u=o[l];if(u){a.push(u);let d=new Je;r!==null&&d.fromArray(r.array,l*16),c.push(d)}else console.warn('THREE.GLTFLoader: Joint "%s" could not be found.',t.joints[l])}return new la(a,c)})}loadAnimation(e){let t=this.json,n=this,s=t.animations[e],r=s.name?s.name:"animation_"+e,o=[],a=[],c=[],l=[],h=[];for(let u=0,d=s.channels.length;u<d;u++){let f=s.channels[u],g=s.samplers[f.sampler],x=f.target,m=x.node,p=s.parameters!==void 0?s.parameters[g.input]:g.input,y=s.parameters!==void 0?s.parameters[g.output]:g.output;x.node!==void 0&&(o.push(this.getDependency("node",m)),a.push(this.getDependency("accessor",p)),c.push(this.getDependency("accessor",y)),l.push(g),h.push(x))}return Promise.all([Promise.all(o),Promise.all(a),Promise.all(c),Promise.all(l),Promise.all(h)]).then(function(u){let d=u[0],f=u[1],g=u[2],x=u[3],m=u[4],p=[];for(let y=0,_=d.length;y<_;y++){let b=d[y],C=f[y],A=g[y],R=x[y],O=m[y];if(b===void 0)continue;b.updateMatrix&&b.updateMatrix();let v=n._createAnimationTracks(b,C,A,R,O);if(v)for(let S=0;S<v.length;S++)p.push(v[S])}return new pi(r,void 0,p)})}createNodeMesh(e){let t=this.json,n=this,s=t.nodes[e];return s.mesh===void 0?null:n.getDependency("mesh",s.mesh).then(function(r){let o=n._getNodeRef(n.meshCache,s.mesh,r);return s.weights!==void 0&&o.traverse(function(a){if(a.isMesh)for(let c=0,l=s.weights.length;c<l;c++)a.morphTargetInfluences[c]=s.weights[c]}),o})}loadNode(e){let t=this.json,n=this,s=t.nodes[e],r=n._loadNodeShallow(e),o=[],a=s.children||[];for(let l=0,h=a.length;l<h;l++)o.push(n.getDependency("node",a[l]));let c=s.skin===void 0?Promise.resolve(null):n.getDependency("skin",s.skin);return Promise.all([r,Promise.all(o),c]).then(function(l){let h=l[0],u=l[1],d=l[2];d!==null&&h.traverse(function(f){f.isSkinnedMesh&&f.bind(d,Vy)});for(let f=0,g=u.length;f<g;f++)h.add(u[f]);return h})}_loadNodeShallow(e){let t=this.json,n=this.extensions,s=this;if(this.nodeCache[e]!==void 0)return this.nodeCache[e];let r=t.nodes[e],o=r.name?s.createUniqueName(r.name):"",a=[],c=s._invokeOne(function(l){return l.createNodeMesh&&l.createNodeMesh(e)});return c&&a.push(c),r.camera!==void 0&&a.push(s.getDependency("camera",r.camera).then(function(l){return s._getNodeRef(s.cameraCache,r.camera,l)})),s._invokeAll(function(l){return l.createNodeAttachment&&l.createNodeAttachment(e)}).forEach(function(l){a.push(l)}),this.nodeCache[e]=Promise.all(a).then(function(l){let h;if(r.isBone===!0?h=new Hr:l.length>1?h=new ke:l.length===1?h=l[0]:h=new bt,h!==l[0])for(let u=0,d=l.length;u<d;u++)h.add(l[u]);if(r.name&&(h.userData.name=r.name,h.name=o),Bi(h,r),r.extensions&&cs(n,h,r),r.matrix!==void 0){let u=new Je;u.fromArray(r.matrix),h.applyMatrix4(u)}else r.translation!==void 0&&h.position.fromArray(r.translation),r.rotation!==void 0&&h.quaternion.fromArray(r.rotation),r.scale!==void 0&&h.scale.fromArray(r.scale);return s.associations.has(h)||s.associations.set(h,{}),s.associations.get(h).nodes=e,h}),this.nodeCache[e]}loadScene(e){let t=this.extensions,n=this.json.scenes[e],s=this,r=new ke;n.name&&(r.name=s.createUniqueName(n.name)),Bi(r,n),n.extensions&&cs(t,r,n);let o=n.nodes||[],a=[];for(let c=0,l=o.length;c<l;c++)a.push(s.getDependency("node",o[c]));return Promise.all(a).then(function(c){for(let h=0,u=c.length;h<u;h++)r.add(c[h]);let l=h=>{let u=new Map;for(let[d,f]of s.associations)(d instanceof fn||d instanceof on)&&u.set(d,f);return h.traverse(d=>{let f=s.associations.get(d);f!=null&&u.set(d,f)}),u};return s.associations=l(r),r})}_createAnimationTracks(e,t,n,s,r){let o=[],a=e.name?e.name:e.uuid,c=[];Fi[r.path]===Fi.weights?e.traverse(function(d){d.morphTargetInfluences&&c.push(d.name?d.name:d.uuid)}):c.push(a);let l;switch(Fi[r.path]){case Fi.weights:l=di;break;case Fi.rotation:l=jn;break;case Fi.position:case Fi.scale:l=fi;break;default:switch(n.itemSize){case 1:l=di;break;case 2:case 3:default:l=fi;break}break}let h=s.interpolation!==void 0?Oy[s.interpolation]:ts,u=this._getArrayFromAccessor(n);for(let d=0,f=c.length;d<f;d++){let g=new l(c[d]+"."+Fi[r.path],t.array,u,h);s.interpolation==="CUBICSPLINE"&&this._createCubicSplineTrackInterpolant(g),o.push(g)}return o}_getArrayFromAccessor(e){let t=e.array;if(e.normalized){let n=mh(t.constructor),s=new Float32Array(t.length);for(let r=0,o=t.length;r<o;r++)s[r]=t[r]*n;t=s}return t}_createCubicSplineTrackInterpolant(e){e.createInterpolant=function(n){let s=this instanceof jn?fh:Na;return new s(this.times,this.values,this.getValueSize()/3,n)},e.createInterpolant.isInterpolantFactoryMethodGLTFCubicSpline=!0}};function Wy(i,e,t){let n=e.attributes,s=new xn;if(n.POSITION!==void 0){let a=t.json.accessors[n.POSITION],c=a.min,l=a.max;if(c!==void 0&&l!==void 0){if(s.set(new I(c[0],c[1],c[2]),new I(l[0],l[1],l[2])),a.normalized){let h=mh(dr[a.componentType]);s.min.multiplyScalar(h),s.max.multiplyScalar(h)}}else{console.warn("THREE.GLTFLoader: Missing min/max properties for accessor POSITION.");return}}else return;let r=e.targets;if(r!==void 0){let a=new I,c=new I;for(let l=0,h=r.length;l<h;l++){let u=r[l];if(u.POSITION!==void 0){let d=t.json.accessors[u.POSITION],f=d.min,g=d.max;if(f!==void 0&&g!==void 0){if(c.setX(Math.max(Math.abs(f[0]),Math.abs(g[0]))),c.setY(Math.max(Math.abs(f[1]),Math.abs(g[1]))),c.setZ(Math.max(Math.abs(f[2]),Math.abs(g[2]))),d.normalized){let x=mh(dr[d.componentType]);c.multiplyScalar(x)}a.max(c)}else console.warn("THREE.GLTFLoader: Missing min/max properties for accessor POSITION.")}}s.expandByVector(a)}i.boundingBox=s;let o=new bn;s.getCenter(o.center),o.radius=s.min.distanceTo(s.max)/2,i.boundingSphere=o}function af(i,e,t){let n=e.attributes,s=[];function r(o,a){return t.getDependency("accessor",o).then(function(c){i.setAttribute(a,c)})}for(let o in n){let a=ph[o]||o.toLowerCase();a in i.attributes||s.push(r(n[o],a))}if(e.indices!==void 0&&!i.index){let o=t.getDependency("accessor",e.indices).then(function(a){i.setIndex(a)});s.push(o)}return lt.workingColorSpace!==Xt&&"COLOR_0"in n&&console.warn(`THREE.GLTFLoader: Converting vertex colors from "srgb-linear" to "${lt.workingColorSpace}" not supported.`),Bi(i,e),Wy(i,e,t),Promise.all(s).then(function(){return e.targets!==void 0?By(i,e.targets,t):i})}function xh(i){let e=new Map,t=new Map,n=i.clone();return lf(i,n,function(s,r){e.set(r,s),t.set(s,r)}),n.traverse(function(s){if(!s.isSkinnedMesh)return;let r=s,o=e.get(s),a=o.skeleton.bones;r.skeleton=o.skeleton.clone(),r.bindMatrix.copy(o.bindMatrix),r.skeleton.bones=a.map(function(c){return t.get(c)}),r.bind(r.skeleton,r.bindMatrix)}),n}function lf(i,e,t){t(i,e);for(let n=0;n<i.children.length;n++)lf(i.children[n],e.children[n],t)}function Xy(i){let e=atob(i),t=new Uint8Array(e.length);for(let n=0;n<e.length;n++)t[n]=e.charCodeAt(n);return t.buffer}var Ua={};function uf(i){return Ua[i]||(Ua[i]=new Promise((e,t)=>{let n=window.__GLB&&window.__GLB[i];if(!n){t(new Error("missing model "+i));return}new Da().parse(Xy(n),"",e,t)})),Ua[i]}function _h(i,e={}){return i.traverse(t=>{if(t.isMesh||t.isSkinnedMesh){t.castShadow=!0,t.receiveShadow=!1,t.frustumCulled=!1;let n=Array.isArray(t.material)?t.material:[t.material];for(let s of n)s&&(s.metalness>.5?(s.metalness=.55,s.roughness=Math.max(.3,s.roughness)):s.metalness=0,s.map&&(s.map.anisotropy=4))}}),e.scale&&i.scale.setScalar(e.scale),i}function qy(i,e){let t=null;return i.traverse(n=>{!t&&n.isBone&&n.name===e&&(t=n)}),t}function yh(i,e,t,n,s=new Gt){let r=qy(i,e);if(!r)return null;i.updateMatrixWorld(!0);let o=i.localToWorld(n.clone()),a=new Gt;i.getWorldQuaternion(a);let c=new Gt;r.getWorldQuaternion(c);let l=new I;return r.getWorldScale(l),r.add(t),t.position.copy(r.worldToLocal(o)),t.quaternion.copy(c.invert().multiply(a).multiply(s)),t.scale.divide(l),r}var Yy=/^(root|pelvis|thigh_|calf_|foot_|ball_)/;function hf(i,e,t){return new pi(t,i.duration,i.tracks.filter(n=>Yy.test(n.name.split(".")[0])===e))}var eo=class{constructor(e,t,n={}){this.mixer=new Zr(e),this.C={};for(let o of t)this.C[o.name]=o;let s=this.C,r=n.idle||"Hema_Guard";s._walkLegs=hf(s.Walk,!0,"_walkLegs"),s._idleUpper=hf(s[r],!1,"_idleUpper"),this.L={idle:this.mixer.clipAction(s[r]),walkL:this.mixer.clipAction(s._walkLegs),walkU:this.mixer.clipAction(s._idleUpper),jog:this.mixer.clipAction(s[n.run||"Jog"])};for(let o of Object.values(this.L))o.play(),o.setEffectiveWeight(0);this.w={idle:1,walk:0,jog:0},this.walkSpeed=n.walkSpeed||1.6,this.jogSpeed=n.jogSpeed||4.2,this.one=null,this.prev=[]}has(e){return!!this.C[e]}play(e,t={}){var o,a,c;let n=this.C[e];if(!n)return null;this.one&&(this.one.fadeOutT=(o=t.fadeIn)!=null?o:.1,this.prev.push(this.one));let s=this.mixer.clipAction(n),r=s;return this.prev.some(l=>l.action===s)&&(r=this.mixer.clipAction(n.clone())),r.reset(),r.setLoop(t.loop?El:Sa,1/0),r.clampWhenFinished=!0,r.timeScale=t.speed||1,r.setEffectiveWeight(0),r.play(),t.start&&(r.time=t.start*n.duration),this.one={action:r,w:0,fadeIn:(a=t.fadeIn)!=null?a:.1,fadeOut:(c=t.fadeOut)!=null?c:.25,hold:!!t.hold,releasing:!1,auto:t.auto!==!1},r}release(e){this.one&&!this.one.hold&&(this.one.releasing=!0,e&&(this.one.fadeOut=e))}stopAll(){for(let e of[this.one,...this.prev])e&&e.action.stop();this.one=null,this.prev=[]}isPlaying(e){return this.one&&this.one.action.getClip().name.startsWith(e)&&!this.one.releasing}update(e,t){let n=Ln.clamp((t-3.2)/1.8,0,1),s=Ln.clamp(t/1.2,0,1)*(1-n),r={idle:1-s-n,walk:s,jog:n},o=Math.min(1,e*10);for(let l in r)this.w[l]+=(r[l]-this.w[l])*o;this.L.walkL.timeScale=Ln.clamp(t/this.walkSpeed,.6,2.2),this.L.jog.timeScale=Ln.clamp(t/this.jogSpeed,.7,1.8);let a=0;for(let l=this.prev.length-1;l>=0;l--){let h=this.prev[l];if(h.w-=e/Math.max(.01,h.fadeOutT),h.w<=0){h.action.stop(),this.prev.splice(l,1);continue}h.action.setEffectiveWeight(h.w),a+=h.w}if(this.one){let l=this.one,h=l.action,u=h.getClip();if(l.auto&&!l.hold&&h.loop===Sa&&h.time>=u.duration-.001-l.fadeOut*h.timeScale&&(l.releasing=!0),l.releasing?l.w-=e/Math.max(.01,l.fadeOut):l.w+=e/Math.max(.01,l.fadeIn),l.w=Ln.clamp(l.w,0,1),l.releasing&&l.w<=0)h.stop(),this.one=null;else{let d=Math.min(l.w,1-Math.min(1,a));h.setEffectiveWeight(d),a+=d}}a=Math.min(1,a);let c=1-a;this.L.idle.setEffectiveWeight(this.w.idle*c),this.L.walkL.setEffectiveWeight(this.w.walk*c),this.L.walkU.setEffectiveWeight(this.w.walk*c),this.L.jog.setEffectiveWeight(this.w.jog*c),this.mixer.update(e)}};function df(i){return i.map(e=>new pi(e.name,e.duration,e.tracks.filter(t=>{let n=t.name.lastIndexOf("."),s=t.name.slice(0,n),r=t.name.slice(n+1);return r==="scale"||s==="weapon_r"?!1:r==="position"?s==="root"||s==="pelvis":!0})))}function jy(i,e){let t=[];for(;i&&i!==e;)t.push(i.name),i=i.parent;return t.join("|")}function ff(i,e,t={}){let n=xh(i.scene),s=t.scale||1.12;_h(n,{scale:s});let r=[],o=null,a=null;n.traverse(l=>{if(!l.isMesh)return;let h=jy(l,n);if(/Hair_/.test(h)){let g=(h.match(/Hair_[A-Za-z]+/)||[""])[0];l.visible=(t.hair||[]).includes(g)}/Sword/.test(h)&&t.hideSword&&(l.visible=!1);let u=l.material.clone();l.material=u,r.push(u);let d=u.name||"",f=t.tint||{};/Hair/.test(d)&&f.hair!==void 0?u.color.set(f.hair):/(Ranger|Peasant)/.test(d)&&f.outfit!==void 0?u.color.set(f.outfit):/(Superhero|Regular)/.test(d)&&f.skin!==void 0&&u.color.set(f.skin),/Eye/.test(d)&&(o=u),/M_Steel$/.test(d)&&(a=u)}),o&&t.eyeGlow&&(o.emissive.set(t.eyeGlow),o.emissiveIntensity=1.5),a&&t.swordGlow&&(a.emissive.set(t.swordGlow),a.color.set(4862e3));let c=new eo(n,e,{idle:t.idle||"Idle",walkSpeed:1.5*s,jogSpeed:4*s});for(let l of r)l.userData.baseE=l.emissive?l.emissive.getHex():0;return{kind:"rig",group:n,anim:c,mats:r,scale:s}}function vh(i,e={}){let t=new ke,n=xh(i.scene);t.add(n);let s=new xn().setFromObject(n),r=new I;s.getSize(r);let o=(e.length||1.1)/Math.max(r.x,r.z);n.scale.setScalar(o),n.position.y=-s.min.y*o;let a=[];n.traverse(f=>{if(f.isMesh){f.castShadow=!0,f.frustumCulled=!1;let g=f.material.clone();f.material=g,g.metalness=0,a.push(g),e.color!==void 0&&(g.map=null,g.color.set(e.color),g.needsUpdate=!0),e.tint!==void 0&&g.color.multiply(new ge(e.tint))}});for(let f of a)f.userData.baseE=f.emissive.getHex();let c=new Zr(n),l=f=>i.animations.find(g=>g.name===f),h={idle:c.clipAction(l("Survey")),walk:c.clipAction(l("Walk")),run:c.clipAction(l("Run"))};for(let f of Object.values(h))f.play(),f.setEffectiveWeight(0);let u={idle:1,walk:0,run:0};return{kind:"qrig",group:t,mats:a,scale:o,update(f,g,x=-1){let m=Ln.clamp((g-3)/2.5,0,1),p=Ln.clamp(g/1.2,0,1)*(1-m),y={idle:1-p-m,walk:p,run:m},_=Math.min(1,f*8);for(let b in y)u[b]+=(y[b]-u[b])*_,h[b].setEffectiveWeight(u[b]);if(h.walk.timeScale=Ln.clamp(g/1.6,.6,2),h.run.timeScale=Ln.clamp(g/5,.7,1.6),c.update(f),x>=0){let b=x<.5?x/.5:1-(x-.5)/.5;n.rotation.x=-.3*b,n.position.z=.45*b}else n.rotation.x=0,n.position.z=0}}}var Ae=i=>document.getElementById(i),gt=(i,e)=>i+Math.random()*(e-i),Hi=(i,e,t)=>Math.max(e,Math.min(t,i)),wt=(i,e,t)=>i+(e-i)*t;function Za(i,e){let t=(i-e)%(Math.PI*2);return t>Math.PI&&(t-=Math.PI*2),t<-Math.PI&&(t+=Math.PI*2),t}function Sn(i,e,t){let n=Za(e,i);return i+Hi(n,-t,t)}var pn=(i,e)=>Math.hypot(i.x-e.x,i.z-e.z),Zy=480,Ka="kroniki_wrzosu_v1",qa=[{name:"Zardzewia\u0142y miecz",dmg:11},{name:"Stalowy miecz",dmg:19,price:250},{name:"Runiczny miecz",dmg:32,price:900}],Ya=[{name:"Sk\xF3rzana kurta",mul:1},{name:"Kolczuga",mul:.72,price:320},{name:"Zbroja p\u0142ytowa",mul:.5,price:1100}],Ky=[100,250,450,750,1100],pf={sila:{n:"Si\u0142a",d:"Mocniejsze ciosy mieczem (+5) i wi\u0119cej zdrowia (+20)."},magia:{n:"Magia",d:"Silniejsze b\u0142yskawice (+12) i wi\u0119cej many (+25)."},zrecznosc:{n:"Zr\u0119czno\u015B\u0107",d:"Szybszy ruch i unik, wi\u0119ksza szansa na cios krytyczny."}};function Dh(){return{gold:40,xp:0,stats:{sila:0,magia:0,zrecznosc:0},morality:0,renown:0,potions:2,sword:0,armor:0,houseOwned:!1,scars:0,quests:{bandits:0,herbs:0,ruins:0,debt:0},flags:{leaderFate:null,debtChoice:null,campCleared:!1,bossDead:!1,widowGift:!1,foxPets:0},campKills:0,herbsHave:0,herbTaken:[],chestOpened:[],time:.3,day:1,pos:{x:0,z:9},hp:100,mana:60,tracked:"bandits",kills:0}}var L=Dh(),Gn="medium";try{Gn=localStorage.getItem("kw_quality")||"medium"}catch{}var ls=!0;try{ls=localStorage.getItem("kw_music")!=="0"}catch{}Gl(ls);var $y=Ae("c"),_r;try{_r=new Fr({canvas:$y,antialias:Gn!=="low",powerPreference:"high-performance"})}catch(i){throw Ae("err").style.display="block",Ae("errMsg").textContent=String(i),i}function Cf(){_r.setPixelRatio(Math.min(window.devicePixelRatio||1,Gn==="high"?2:Gn==="medium"?1.4:1)),_r.setSize(window.innerWidth,window.innerHeight,!1)}Cf();_r.shadowMap.enabled=Gn!=="low";_r.shadowMap.type=Ma;var St=new aa;St.background=new ge(8896488);St.fog=new oa(8896488,50,Gn==="low"?150:200);var mn=new Wt(60,window.innerWidth/window.innerHeight,.1,420),Ah=new xa(13625087,5925434,1);St.add(Ah);var kn=new ar(16773336,2);kn.castShadow=Gn!=="low";kn.shadow.mapSize.set(Gn==="high"?2048:1024,Gn==="high"?2048:1024);var vr=kn.shadow.camera;vr.left=-32;vr.right=32;vr.top=32;vr.bottom=-32;vr.near=1;vr.far=220;kn.shadow.bias=-8e-4;kn.shadow.normalBias=.03;St.add(kn);St.add(kn.target);var ot=Jd(St,Gn),Pf=ot.colliders;window.addEventListener("resize",()=>{mn.aspect=window.innerWidth/window.innerHeight,mn.updateProjectionMatrix(),Cf()});function Mh(i,e){if(Math.abs(i)>188||Math.abs(e)>188)return!1;let t=et(i,e);return t>-1&&t<24}function gr(i,e,t,n){let s=i.x+e,r=i.z+t;Mh(s,r)?(i.x=s,i.z=r):Mh(s,i.z)?i.x=s:Mh(i.x,r)&&(i.z=r),Pf.resolve(i,n),i.y=et(i.x,i.z)}var Jy=new Ge(.14,.14,.14),mf={},gf=i=>mf[i]||(mf[i]=new Lt({color:i})),Ba=[];function en(i,e,t,n,s=8,r=4,o=3,a=.6,c=1){for(let l=0;l<s;l++){let h=Ba.find(f=>!f.alive);if(!h){if(Ba.length>140)return;h={m:new Me(Jy,gf(n))},St.add(h.m),Ba.push(h)}h.m.material=gf(n),h.alive=!0,h.t=0,h.life=a*gt(.7,1.2),h.size=c,h.m.visible=!0,h.m.position.set(i,e,t);let u=Math.random()*Math.PI*2,d=r*gt(.4,1);h.vx=Math.cos(u)*d,h.vz=Math.sin(u)*d,h.vy=o*gt(.5,1.3)}}function Qy(i){for(let e of Ba){if(!e.alive)continue;if(e.t+=i,e.t>=e.life){e.alive=!1,e.m.visible=!1;continue}e.vy-=9*i,e.m.position.x+=e.vx*i,e.m.position.y+=e.vy*i,e.m.position.z+=e.vz*i;let t=(1-e.t/e.life)*e.size;e.m.scale.setScalar(t),e.m.rotation.x+=i*5,e.m.rotation.y+=i*4}}var Rh=[],ev=Ae("floats"),Oa=new I;function oo(i,e,t,n,s="dmg",r=1,o=1.2){let a=Rh.find(c=>!c.alive);if(!a){let c=document.createElement("div");ev.appendChild(c),a={el:c},Rh.push(a)}return a.alive=!0,a.el.className="ft "+s,a.el.textContent=i,a.el.style.display="block",a.x=e+gt(-.3,.3),a.y=t,a.z=n,a.t=0,a.life=r,a.rise=o,a}function tv(i){let e=window.innerWidth,t=window.innerHeight;for(let n of Rh){if(!n.alive)continue;if(n.t+=i,n.t>=n.life){n.alive=!1,n.el.style.display="none";continue}if(Oa.set(n.x,n.y+n.t*n.rise,n.z).project(mn),Oa.z>1){n.el.style.display="none";continue}n.el.style.display="block";let s=(Oa.x*.5+.5)*e,r=(-Oa.y*.5+.5)*t;n.el.style.transform=`translate(${s.toFixed(1)}px,${r.toFixed(1)}px) translate(-50%,-50%)`,n.el.style.opacity=n.t>n.life*.7?(1-(n.t-n.life*.7)/(n.life*.3)).toFixed(2):"1"}}function st(i,e="",t=3.2){let n=Ae("toast");for(let o of n.children)if(o.textContent===i)return;let s=document.createElement("div");s.textContent=i,e&&(s.className=e);let r=Ae("toast");for(r.appendChild(s);r.children.length>4;)r.removeChild(r.firstChild);setTimeout(()=>s.remove(),t*1e3)}var mt=os({shirt:3104138,pants:3878948,hair:6964256,weapon:!0,cape:9051935,boots:3810838});St.add(mt.group);var Lf=new Ot({color:16770688,emissive:16764992,emissiveIntensity:.9}),$a=new Me(new qr(.24,.035,6,18),Lf);$a.rotation.x=Math.PI/2;$a.position.y=.78;mt.headG.add($a);var If=new Ot({color:3803658}),Nh=new ke;mt.headG.add(Nh);for(let i of[-1,1]){let e=new Me(new Jt(.06,.32,5),If);e.position.set(i*.17,.55,.05),e.rotation.z=-i*.5,Nh.add(e)}var nv=new Ot({color:10107434}),ka=new ke;mt.headG.add(ka);var no=new Lt({color:16769152,transparent:!0,opacity:0,depthWrite:!1}),fs=new Me(new Wr(.6,.95,24),no);fs.rotation.x=-Math.PI/2;fs.position.y=.05;mt.group.add(fs);var T={pos:new I(0,2.5,9),yaw:Math.PI,hp:100,mana:60,attackT:-1,combo:0,comboQ:!1,comboTimer:0,atkHit:!1,rollT:0,rollCd:0,rollDir:{x:0,z:1},invuln:0,castT:0,dead:!1,deadT:0,lastHurt:-99,speed:0,kvx:0,kvz:0},pr=1.12,it=null,Uh=[{clip:"Hema_Zornhau",hit:.33,len:1.2,name:"Zornhau"},{clip:"Hema_Zwerchhau",hit:.36,len:1.2,name:"Zwerchhau"},{clip:"Hema_Scheitelhau",hit:.38,len:1.4,name:"Scheitelhau"}],zf=1.6,xf=.72,Ch=.55,hs=null;Promise.all(["hero","npc_bandit","npc_man","npc_woman","fox"].map(uf)).then(([i,e,t,n,s])=>{let r=df(i.animations);hs={clips:r,bandit:e,man:t,woman:n,fox:s};{let d=vh(s,{length:1.05});St.remove(zt.mesh.group),zt.mesh=d,St.add(d.group)}let o=_h(i.scene,{scale:pr});St.add(o);let a=new eo(o,r,{idle:"Hema_Guard",walkSpeed:1.5*pr,jogSpeed:4*pr}),c=new Me(new qr(.15,.022,6,20),Lf);yh(o,"Head",c,new I(0,1.97,-.01),new Gt().setFromAxisAngle(new I(1,0,0),Math.PI/2));let l=new ke;for(let d of[-1,1]){let f=new Me(new Jt(.03,.16,6),If);f.position.set(d*.07,.05,0),f.rotation.z=-d*.45,l.add(f)}yh(o,"Head",l,new I(0,1.83,.03)),o.add(fs),fs.scale.setScalar(1/pr);let h=null,u=null;o.traverse(d=>{d.material&&(d.material.name==="M_Steel"&&(h=d.material),d.material.name==="M_HeroSkin"&&(u=d.material))}),it={root:o,anim:a,halo:c,horns:l,steel:h,skin:u},o.position.copy(T.pos),o.rotation.y=T.yaw,a.update(.016,0),mt.group.visible=!1,$n(),iv()}).catch(i=>console.warn("models",i));function Df(i){if(i.model==="fox")return vh(hs.fox,i);let e={bandit:hs.bandit,man:hs.man,woman:hs.woman}[i.model];return ff(e,hs.clips,i)}function Ha(i,e,t,n=-1,s={}){if(i.kind==="rig"){if(s.kneel&&(i.anim.isPlaying("Sit")||i.anim.play("Sit",{loop:!0,hold:!0,fadeIn:.3}),i.group.position.y-=.42*i.scale),s.talk!==void 0){let r=i.anim.isPlaying("Talk");s.talk&&!r&&!i.anim.one&&i.anim.play("Talk",{loop:!0,hold:!0,fadeIn:.4}),!s.talk&&r&&(i.anim.one.hold=!1,i.anim.release(.4))}i.anim.update(e,t/i.scale*1.12)}else Fl(i,e,t,n,s)}var _f=[1708560,3810326,5913122,9071168,11569744,6957592,10132122],yf=[16777215,14207152,12109992,13152416,11055304,14733504,12626064],zn=i=>i[Math.floor(Math.random()*i.length)];function iv(){for(let i of ms){if(i.mesh.kind==="rig")continue;let e=i.rig;e||(e=i.look.dress?{model:"woman",hair:[zn(["Hair_Long","Hair_Buns"])],tint:{hair:zn(_f),outfit:zn(yf)}}:{model:"man",hair:[zn(["Hair_SimpleParted","Hair_Buzzed"]),...Math.random()<.4?["Hair_Beard"]:[]],tint:{hair:zn(_f),outfit:zn(yf)}},i.look.scale&&(e.scale=1.12*(i.look.scale+.15)));let t=Df(e);St.remove(i.mesh.group),i.mesh=t,St.add(t.group)}}var Dn=()=>100+20*L.stats.sila,yi=()=>60+25*L.stats.magia;function $n(){if(it){let n=L.morality;if(it.halo.visible=n>=40,it.horns.visible=n<=-40,no.color.set(n>=0?16769152:16724e3),no.opacity=Math.abs(n)>60?.35:0,it.root.scale.setScalar(pr*(1+L.stats.sila*.018)),it.skin){let s=L.stats.magia;it.skin.emissive.setRGB(.02*s,.04*s,.1*s),n<=-70?it.skin.color.setRGB(.85,.78,.78):it.skin.color.setRGB(1,1,1)}it.steel&&(it.steel.color.set([11051152,14739182,11064575][L.sword]),it.steel.emissive.set(L.sword===2?1718922:0))}$a.visible=L.morality>=40,Nh.visible=L.morality<=-40;let i=L.morality;no.color.set(i>=0?16769152:16724e3),no.opacity=Math.abs(i)>60?.35:0,mt.mats[0].color.set(i<=-70?13150368:14725257);let e=1+L.stats.sila*.035;mt.group.scale.set(e,1+L.stats.sila*.02,e),mt.armL.scale.set(1+L.stats.sila*.08,1,1+L.stats.sila*.08),mt.armR.scale.copy(mt.armL.scale);let t=L.stats.magia;if(mt.mats[1].emissive.setRGB(.05*t,.1*t,.25*t),mt.weapon){let n=mt.weapon.userData.metal;n.color.set([10127994,14213352,10146047][L.sword]),n.emissive.set(L.sword===2?2779903:0)}for(mt.mats[1].color.set([3104138,5923952,10134704][L.armor]);ka.children.length<Math.min(L.scars,3);){let n=ka.children.length,s=new Me(new Ge(.03,.16,.02),nv);s.position.set(n===0?.12:n===1?-.13:.02,.18+n*.03,.216),s.rotation.z=.5-n*.6,ka.add(s)}}var zt={mesh:Bl({color:14182698,belly:16050392,dark:2759184,tailTip:16777215,paws:2759184,scale:.85}),pos:new I(2,2.5,11),yaw:0,atkT:-1,cd:0,target:null,speed:0,barkCd:0};St.add(zt.mesh.group);zt.pos.y=et(zt.pos.x,zt.pos.z);zt.mesh.group.position.copy(zt.pos);var sv={bandit:{name:"Bandyta",hp:45,dmg:9,speed:4,range:1.7,aggro:15,windup:.5,cd:1.5,xp:30,gold:[4,14],radius:.45,renown:1,rig:()=>({model:"bandit",tint:{outfit:zn([16777215,13148288,10522752,11563104,10132106])}}),make:()=>os({shirt:[7023135,4868650,5913130][Math.floor(Math.random()*3)],pants:3025442,hair:1840140,hood:Math.random()<.5?3811866:null,weapon:!0,blade:9079434})},wolf:{name:"Wilk",rig:()=>({model:"fox",length:1.55,color:zn([7237234,5920336,9079434])}),hp:30,dmg:7,speed:6,range:1.4,aggro:17,windup:.35,cd:1.3,xp:20,gold:[0,0],radius:.5,quad:!0,renown:1,make:()=>Bl({color:7237234,belly:11579568,scale:1.15,eye:16763955})},ghoul:{name:"Upi\xF3r",hp:60,dmg:12,speed:3.5,range:1.7,aggro:20,windup:.6,cd:1.6,xp:45,gold:[2,10],radius:.45,renown:2,rig:()=>({model:"bandit",tint:{outfit:9083520,skin:10139808},eyeGlow:6750105}),make:()=>os({skin:12108976,shirt:4938314,pants:3817528,hair:2764586,eyeGlow:6750105,weapon:!0,blade:6978154,scale:1.05,thin:!0})},leader:{name:"Herszt Wronis\u0142aw",hp:190,dmg:14,speed:4.2,range:1.9,aggro:22,windup:.5,cd:1.2,xp:150,gold:[0,0],radius:.55,renown:5,rig:()=>({model:"bandit",scale:1.3,tint:{outfit:5787728}}),make:()=>os({shirt:2039583,pants:4001808,hair:1118481,beard:1118481,weapon:!0,blade:11579568,scale:1.2,cape:1118481})},boss:{name:"Rycerz Popio\u0142u",hp:750,dmg:24,speed:3.3,range:3.4,aggro:34,windup:.8,cd:1.6,xp:800,gold:[300,300],radius:1,renown:30,rig:()=>({model:"bandit",scale:2.15,tint:{outfit:4867144,skin:6969936},eyeGlow:16738816,swordGlow:16730624}),make:()=>os({skin:4866104,shirt:6974068,pants:4868690,boots:2763306,helmet:8026756,eyeGlow:16738816,weapon:!0,blade:3811882,bladeGlow:16730624,scale:2.1,cape:2756624})}},It=[],ds=null,Ph=0,Lh=class{constructor(e,t,n,s="wild",r=null){this.type=e,this.def=sv[e],this.tag=s,this.mesh=hs&&this.def.rig?Df(this.def.rig()):this.def.make(),St.add(this.mesh.group),this.pos=new I(t,et(t,n),n),this.home=r||{x:t,z:n},this.yaw=Math.random()*6.28,this.hp=this.def.hp,this.maxHp=this.def.hp,this.state="idle",this.t=0,this.atkCd=gt(.3,1),this.flash=0,this.wind=0,this.kx=0,this.kz=0,this.wander=null,this.wanderT=gt(1,4),this.dead=!1,this.deadT=0,this.speed=0,this.slamPhase=!1,this.summoned=!1,this.atkCount=0,this.mesh.group.position.copy(this.pos)}setFlash(){let e=this.flash,t=this.wind;for(let n of this.mesh.mats)n.userData.baseE===void 0&&(n.userData.baseE=n.emissive.getHex()),e>0?n.emissive.setRGB(e,e,e):t>0?n.emissive.setRGB(t*.6,0,0):n.emissive.setHex(n.userData.baseE)}update(e){let t=this.def,n=this.mesh.group;if(this.dead){this.deadT+=e;let g=Math.min(1,this.deadT*2.5);this.mesh.kind==="rig"?this.mesh.anim.update(e,0):this.mesh.kind==="quad"||this.mesh.kind==="qrig"?n.rotation.z=g*Math.PI/2:n.rotation.x=-g*Math.PI/2,this.deadT>1.8&&(n.position.y-=e*.7),this.deadT>3.2&&(this.remove=!0);return}if((this.flash>0||this.wind>0||this._fl)&&(this.setFlash(),this._fl=this.flash>0||this.wind>0),this.flash=Math.max(0,this.flash-e*4),Math.abs(this.kx)+Math.abs(this.kz)>.05){gr(this.pos,this.kx*e,this.kz*e,t.radius);let g=Math.exp(-7*e);this.kx*=g,this.kz*=g}let s=T.pos.x-this.pos.x,r=T.pos.z-this.pos.z,o=Math.hypot(s,r),a=Math.atan2(s,r),c=0,l=0;if(this.state==="surrender"){this.yaw=Sn(this.yaw,a,e*3),n.position.copy(this.pos),n.rotation.y=this.yaw,Ha(this.mesh,e,0,-1,{kneel:!0});return}if(this.state==="leaving"){c=3,l=Math.atan2(this.pos.x-de.camp.x+30,this.pos.z-de.camp.z+30),this.t+=e,this.t>6&&(this.remove=!0),this.yaw=Sn(this.yaw,l,e*6),gr(this.pos,Math.sin(l)*c*e,Math.cos(l)*c*e,t.radius),n.position.copy(this.pos),n.rotation.y=this.yaw,this.mesh.kind==="rig"&&this.mesh.anim.one&&this.mesh.anim.stopAll(),Ha(this.mesh,e,c);return}let h=Math.hypot(T.pos.x-de.village.x,T.pos.z-de.village.z),u=!T.dead&&(h>36||this.type==="boss");this.atkCd-=e;let d=Math.hypot(this.pos.x-this.home.x,this.pos.z-this.home.z),f=-1;switch(this.state){case"idle":if(this.wanderT-=e,this.wanderT<=0&&(this.wanderT=gt(2,6),this.wander=Math.random()<.6?{x:this.home.x+gt(-8,8),z:this.home.z+gt(-8,8)}:null),this.wander){let g=this.wander.x-this.pos.x,x=this.wander.z-this.pos.z;Math.hypot(g,x)>.8?(c=t.speed*.3,l=Math.atan2(g,x)):this.wander=null}u&&o<t.aggro&&(this.state="chase",this.type==="boss"&&ov(this));break;case"chase":if(!u||o>t.aggro*2.2||d>55){this.state="return";break}o>t.range*.85&&(c=t.speed,l=a),o<t.range+.4&&this.atkCd<=0&&(this.state="windup",this.t=0,this.slamPhase=this.type==="boss"&&this.atkCount%3===2,this.mesh.kind==="rig"&&this.startAttackAnim(),this.slamPhase&&rv(this)),this.yaw=Sn(this.yaw,a,e*8);break;case"windup":{this.t+=e;let g=this.slamPhase?1.1:t.windup;this.wind=Math.min(1,this.t/g)*.6,this.slamPhase||(this.yaw=Sn(this.yaw,a,e*3)),f=this.t/g*.35,this.t>=g&&(this.strike(o,a),this.state="recover",this.t=0,this.wind=0,this.atkCount++);break}case"recover":this.t+=e,f=.35+Math.min(1,this.t/.45)*.65,this.t>.45&&(this.state="chase",this.atkCd=t.cd*gt(.8,1.3));break;case"return":{let g=this.home.x-this.pos.x,x=this.home.z-this.pos.z;c=t.speed*.7,l=Math.atan2(g,x),Math.hypot(g,x)<3&&(this.state="idle"),u&&o<t.aggro*.6&&d<40&&(this.state="chase"),this.hp<this.maxHp&&(this.hp=Math.min(this.maxHp,this.hp+e*8));break}}if(c>0){this.state!=="chase"&&(this.yaw=Sn(this.yaw,l,e*5));let g=Math.sin(l)*c*e,x=Math.cos(l)*c*e,m=this.pos.x+g,p=this.pos.z+x;this.type!=="boss"&&Math.hypot(m,p)<38&&(g=0,x=0,c=0),gr(this.pos,g,x,t.radius)}for(let g of It){if(g===this||g.dead)continue;let x=this.pos.x-g.pos.x,m=this.pos.z-g.pos.z,p=Math.hypot(x,m),y=t.radius+g.def.radius+.2;if(p<y&&p>.001){let _=(y-p)*.5;this.pos.x+=x/p*_,this.pos.z+=m/p*_}}if(!T.dead){let g=this.pos.x-T.pos.x,x=this.pos.z-T.pos.z,m=Math.hypot(g,x),p=t.radius+.45;m<p&&m>.001&&(this.pos.x=T.pos.x+g/m*p,this.pos.z=T.pos.z+x/m*p)}this.pos.y=et(this.pos.x,this.pos.z),this.speed=wt(this.speed,c,Math.min(1,e*8)),n.position.copy(this.pos),n.rotation.y=this.yaw,this.mesh.kind==="qrig"?this.mesh.update(e,this.speed,f):this.mesh.kind==="quad"?kl(this.mesh,e,this.speed,f):Ha(this.mesh,e,this.state==="windup"||this.state==="recover"?0:this.speed,f),this.type==="ghoul"&&Ct>.75&&this.tag==="wild"&&(this.hp-=e*15,Math.random()<e*8&&en(this.pos.x,this.pos.y+1.2,this.pos.z,16747050,2,1,2),this.hp<=0&&Qa(this,!0))}startAttackAnim(){let e={Hema_Zornhau:.4,Hema_Zwerchhau:.433,Hema_Scheitelhau:.533,Hema_Stich:.367},t;this.type==="boss"?t=this.slamPhase?"Hema_Scheitelhau":zn(["Hema_Zwerchhau","Hema_Zornhau"]):this.type==="leader"?t=zn(["Hema_Zornhau","Hema_Scheitelhau","Hema_Zwerchhau"]):this.type==="ghoul"?t=zn(["Hema_Zornhau","Hema_Scheitelhau"]):t=zn(["Hema_Zornhau","Hema_Zwerchhau","Hema_Stich"]);let n=this.slamPhase?1.1:this.def.windup;this.mesh.anim.play(t,{speed:e[t]/n,fadeIn:.12,fadeOut:.35})}strike(e,t){let n=this.def;if(this.type==="boss"&&this.slamPhase){if(Qe.slam(),ao(.6),Uf(),en(this.pos.x,this.pos.y+.3,this.pos.z,6969930,24,9,4,.8,1.6),en(this.pos.x,this.pos.y+.3,this.pos.z,16738842,12,7,5,.6,1.2),e<5.8&&vf(n.dmg*1.3,this,14),!this.summoned&&this.hp<this.maxHp*.5){this.summoned=!0;for(let r=0;r<3;r++){let o=r*2.1;mr("ghoul",this.pos.x+Math.sin(o)*6,this.pos.z+Math.cos(o)*6,"boss",{x:de.ruins.x,z:de.ruins.z}).state="chase"}st("Rycerz Popio\u0142u przyzywa upiory!","e")}return}this.mesh.kind==="quad"||this.mesh.kind==="qrig"?Qe.bark():Qe.swing();let s=this.type==="boss"?1.4:1;e<n.range+.6&&Math.abs(Za(t,this.yaw))<s&&vf(n.dmg,this,this.type==="boss"?9:4)}};function mr(i,e,t,n,s){let r=new Lh(i,e,t,n,s);return It.push(r),r}var Nf=new Lt({color:16726554,transparent:!0,opacity:.5,depthWrite:!1,side:dn}),ps=new Me(new Wr(5,5.8,40),Nf);ps.rotation.x=-Math.PI/2;ps.visible=!1;St.add(ps);var Ja=null;function rv(i){Ja=i,ps.visible=!0,ps.position.set(i.pos.x,i.pos.y+.15,i.pos.z)}function Uf(){ps.visible=!1,Ja=null}function ov(i){i.introDone||(i.introDone=!0,st("Rycerz Popio\u0142u powstaje z proch\xF3w!","e",4),Qe.evil(),ao(.5),en(i.pos.x,i.pos.y+2,i.pos.z,16738842,30,6,6,1,1.5))}function Oh(i,e,t,n,s,r){if(i.dead||i.state==="surrender"||i.state==="leaving")return;e=Math.round(e),i.hp-=e,i.flash=1;let o=i.type==="boss"?.08:i.type==="leader"?.5:1;if(i.kx+=n*r*o,i.kz+=s*r*o,oo(""+e,i.pos.x,i.pos.y+2.2*(i.type==="boss"?2:1),i.pos.z,t?"crit":"dmg",.9),en(i.pos.x,i.pos.y+1.2,i.pos.z,i.type==="ghoul"?8978346:i.type==="boss"?16738842:11147802,t?10:5,3,2.5,.45),(i.state==="idle"||i.state==="return")&&(i.state="chase"),i.mesh.kind==="rig"&&i.state!=="windup"&&i.type!=="boss"&&i.hp>0&&i.mesh.anim.play("Hit",{speed:1.6,fadeIn:.04,fadeOut:.15}),ds=i,Ph=5,i.type==="leader"&&!L.flags.leaderFate&&i.hp<i.maxHp*.25){i.hp=Math.ceil(i.maxHp*.25),i.state="surrender",i.wind=0,i.flash=0,i.setFlash(),st("Wronis\u0142aw rzuca miecz i b\u0142aga o lito\u015B\u0107! Podejd\u017A, by zdecydowa\u0107 o jego losie.","q",5),Qe.quest();return}i.hp<=0&&Qa(i)}function Qa(i,e=!1){if(i.dead)return;if(i.dead=!0,i.deadT=0,i.hp=0,i.flash=0,i.wind=0,i.setFlash(),i.mesh.kind==="rig"&&i.mesh.anim.play("Death",{hold:!0,fadeIn:.08}),Ja===i&&Uf(),e){i.remove=!0;return}L.kills++;let t=i.def,n=Math.min(8,Math.max(2,Math.round(t.xp/12)));for(let r=0;r<n;r++)Mf("xp",i.pos.x,i.pos.y+1,i.pos.z,t.xp/n);let s=Math.round(gt(t.gold[0],t.gold[1]));if(s>0){let r=Math.min(8,Math.max(1,Math.round(s/8)));for(let o=0;o<r;o++)Mf("gold",i.pos.x,i.pos.y+1,i.pos.z,s/r)}if(xs(t.renown,!0),i.tag==="camp"&&(L.campKills++,L.campKills<4&&st(`Bandyci w obozie: ${L.campKills}/4`,""),Ih()),i.type==="boss"){L.flags.bossDead=!0,L.quests.ruins=2,L.tracked="ruins",Qe.victory(),ao(.8),en(i.pos.x,i.pos.y+2,i.pos.z,16764992,40,8,8,1.4,1.5),ot.runeMat&&ot.runeMat.emissive.set(4235519);for(let r of It)r.tag==="boss"&&!r.dead&&Qa(r);setTimeout($v,2500),Bt()}}function Ih(){!L.flags.campCleared&&L.campKills>=4&&L.flags.leaderFate&&(L.flags.campCleared=!0,L.quests.bandits<1&&(L.quests.bandits=1),L.tracked="bandits",st("Ob\xF3z bandyt\xF3w rozbity! Wr\xF3\u0107 do So\u0142tysa Bogumi\u0142a.","q",4),Qe.quest(),Bt())}var us=0;mt.group.position.copy(T.pos);mt.group.rotation.y=T.yaw;function ao(i){us=Math.max(us,i)}var Ga=0;function vf(i,e,t=4){if(!(T.dead||T.invuln>0||T.rollT>0||kt)){if(i=Math.round(i*Ya[L.armor].mul*gt(.9,1.1)),T.hp-=i,T.invuln=.3,T.lastHurt=Kn.elapsedTime,Ga=1,Qe.hurt(),ao(.25),oo("-"+i,T.pos.x,T.pos.y+2.2,T.pos.z,"hurt",.9),e){let n=T.pos.x-e.pos.x,s=T.pos.z-e.pos.z,r=Math.hypot(n,s)||1;T.kvx=n/r*t,T.kvz=s/r*t}T.attackT>=0&&Math.random()<.4&&(T.attackT=-1),it&&T.attackT<0&&T.hp>0&&it.anim.play("Hit",{speed:1.4,fadeIn:.05,fadeOut:.15}),T.hp<=0&&(T.hp=0,T.dead=!0,T.deadT=0,Qe.death())}}function av(){Ae("death").style.display="none";let i=Math.floor(L.xp*.25);L.xp-=i,L.scars++,T.dead=!1,T.hp=Dn(),T.mana=yi(),T.pos.set(0,2.5,9),mt.group.rotation.set(0,0,0),it&&it.anim.stopAll(),zt.pos.set(2,2.5,11);for(let e of It)!e.dead&&e.state!=="surrender"&&(e.state="return",e.hp=e.maxHp);$n(),i>0&&st(`Utracono ${i} do\u015Bwiadczenia.`,"e"),kt=!1,Bt()}var Va=[],cv=new ir(.16,0),lv=new Ut(.14,.14,.05,8),hv=new Lt({color:9367807}),uv=new Ot({color:16763955,emissive:6702080});function Mf(i,e,t,n,s){let r=new Me(i==="xp"?cv:lv,i==="xp"?hv:uv);r.position.set(e,t,n),St.add(r);let o=Math.random()*6.28,a=gt(1.5,3.5);Va.push({m:r,kind:i,amount:s,vx:Math.cos(o)*a,vz:Math.sin(o)*a,vy:gt(3,6),t:0})}function dv(i){for(let e=Va.length-1;e>=0;e--){let t=Va[e];t.t+=i;let n=t.m,s=T.pos.x-n.position.x,r=T.pos.y+1-n.position.y,o=T.pos.z-n.position.z,a=Math.hypot(s,r,o);if(t.t>.7&&a<9&&!T.dead){let l=14/Math.max(.5,a);t.vx=wt(t.vx,s/a*12,Math.min(1,i*l)),t.vy=wt(t.vy,r/a*12,Math.min(1,i*l)),t.vz=wt(t.vz,o/a*12,Math.min(1,i*l))}else t.vy-=12*i,t.vx*=Math.exp(-2*i),t.vz*=Math.exp(-2*i);n.position.x+=t.vx*i,n.position.y+=t.vy*i,n.position.z+=t.vz*i;let c=et(n.position.x,n.position.z)+.2;n.position.y<c&&(n.position.y=c,t.vy=Math.abs(t.vy)*.4),n.rotation.y+=i*4,(a<1.1&&t.t>.5||t.t>25)&&(t.t<=25&&(t.kind==="xp"?(L.xp+=Math.round(t.amount),Qe.pickup()):(L.gold+=Math.round(t.amount),Qe.coin())),St.remove(n),Va.splice(e,1))}}var Wa=[],bf=new Yn(.28,0),fv=new Lt({color:10148095}),pv=new Lt({color:16777215});function Of(){if(T.dead||kt)return;if(T.mana<20){st("Za ma\u0142o many!","g",1.5);return}T.mana-=20,T.castT=.4,it&&T.attackT<0&&it.anim.play("Cast",{speed:1.2,fadeIn:.06});let i=null,e=1e9;for(let s of It){if(s.dead||s.state==="surrender"||s.state==="leaving")continue;let r=pn(s.pos,T.pos);if(r>26)continue;let o=Math.abs(Za(Math.atan2(s.pos.x-T.pos.x,s.pos.z-T.pos.z),T.yaw)),a=r+o*12;a<e&&(e=a,i=s)}i&&(T.yaw=Math.atan2(i.pos.x-T.pos.x,i.pos.z-T.pos.z));let t=new Me(bf,fv),n=new Me(bf,pv);n.scale.setScalar(.5),t.add(n),t.position.set(T.pos.x+Math.sin(T.yaw)*.8,T.pos.y+1.5,T.pos.z+Math.cos(T.yaw)*.8),St.add(t),Wa.push({m:t,vx:Math.sin(T.yaw)*18,vy:0,vz:Math.cos(T.yaw)*18,target:i,life:2.2,dmg:18+12*L.stats.magia}),Qe.magic()}function mv(i){for(let e=Wa.length-1;e>=0;e--){let t=Wa[e];t.life-=i;let n=t.m;if(t.target&&!t.target.dead){let r=t.target,o=r.pos.x-n.position.x,a=r.pos.y+1.2*(r.type==="boss"?2:1)-n.position.y,c=r.pos.z-n.position.z,l=Math.hypot(o,a,c)||1,h=Math.min(1,i*6);t.vx=wt(t.vx,o/l*20,h),t.vy=wt(t.vy,a/l*20,h),t.vz=wt(t.vz,c/l*20,h)}n.position.x+=t.vx*i,n.position.y+=t.vy*i,n.position.z+=t.vz*i,n.rotation.x+=i*10,n.rotation.y+=i*8,Math.random()<.6&&en(n.position.x,n.position.y,n.position.z,10148095,1,.5,.5,.3,.6);let s=!1;for(let r of It){if(r.dead||r.state==="surrender"||r.state==="leaving")continue;let o=r.type==="boss"?2:1;if(Math.hypot(r.pos.x-n.position.x,r.pos.y+1.1*o-n.position.y,r.pos.z-n.position.z)<r.def.radius+.6){let a=Math.hypot(t.vx,t.vz)||1;Oh(r,t.dmg*gt(.9,1.1),!1,t.vx/a,t.vz/a,5),s=!0;break}}n.position.y<et(n.position.x,n.position.z)&&(s=!0),(s||t.life<=0)&&(en(n.position.x,n.position.y,n.position.z,10148095,10,4,3,.5),s&&Qe.boom(),St.remove(n),Wa.splice(e,1))}}var _i={jx:0,jy:0,keys:{}},xi={id:null,ox:0,oy:0},Bn={id:null,x:0,y:0},Hn=0,ki=.42,ja=8,Fa=8,xr=Ae("joy"),Ff=Ae("knob"),yr=Ae("touch");yr.addEventListener("pointerdown",i=>{if(as(),!kt){i.clientX<window.innerWidth*.42&&xi.id===null&&i.pointerType!=="mouse"?(xi.id=i.pointerId,xi.ox=i.clientX,xi.oy=i.clientY,xr.style.left=i.clientX+"px",xr.style.top=i.clientY+"px",xr.style.opacity=1):Bn.id===null&&(Bn.id=i.pointerId,Bn.x=i.clientX,Bn.y=i.clientY);try{yr.setPointerCapture(i.pointerId)}catch{}}});yr.addEventListener("pointermove",i=>{if(i.pointerId===xi.id){let e=i.clientX-xi.ox,t=i.clientY-xi.oy,n=Math.hypot(e,t),s=55;n>s&&(e=e/n*s,t=t/n*s),Ff.style.transform=`translate(${e}px,${t}px)`,_i.jx=e/s,_i.jy=-t/s}else if(i.pointerId===Bn.id){let e=i.clientX-Bn.x,t=i.clientY-Bn.y;Bn.x=i.clientX,Bn.y=i.clientY,Hn-=e*.0065,ki=Hi(ki+t*.0045,.08,1.25)}});function Bf(i){i.pointerId===xi.id&&(xi.id=null,_i.jx=0,_i.jy=0,Ff.style.transform="",xr.style.left="110px",xr.style.top="calc(100% - 110px)",xr.style.opacity=.5),i.pointerId===Bn.id&&(Bn.id=null)}yr.addEventListener("pointerup",Bf);yr.addEventListener("pointercancel",Bf);yr.addEventListener("wheel",i=>{ja=Hi(ja+i.deltaY*.01,4,14)});function co(i,e,t=!1){let n=Ae(i),s=null;n.addEventListener("pointerdown",o=>{o.preventDefault(),o.stopPropagation(),as(),n.classList.add("on"),e(),t&&(clearInterval(s),s=setInterval(e,200))});let r=()=>{n.classList.remove("on"),clearInterval(s)};n.addEventListener("pointerup",r),n.addEventListener("pointercancel",r),n.addEventListener("pointerleave",r)}co("bAtk",()=>Hf(),!0);co("bMag",()=>Of());co("bRoll",()=>Vf());co("bPot",()=>Wf());co("bUse",()=>qf());window.addEventListener("keydown",i=>{if(_i.keys[i.code]=!0,as(),!i.repeat){if(i.code==="KeyJ"&&Hf(),i.code==="KeyK"&&Of(),i.code==="Space"&&Vf(),i.code==="KeyE")if(lo){let e=Ae("dOpts").querySelector("button");e&&e.click()}else qf();i.code==="KeyQ"&&Wf(),(i.code==="Escape"||i.code==="KeyM")&&nc()}});window.addEventListener("keyup",i=>{_i.keys[i.code]=!1});function kf(i){let e=null,t=i;for(let n of It){if(n.dead||n.state==="surrender"||n.state==="leaving")continue;let s=pn(n.pos,T.pos);s<t&&(t=s,e=n)}return e}function Hf(){if(!(T.dead||kt||T.rollT>0)){if(T.attackT>=0){T.attackT>Uh[T.combo].hit-.2&&(T.comboQ=!0);return}Gf()}}function Gf(){T.combo=T.comboTimer>0||T.attackT>=0?(T.combo+1)%3:0,T.attackT=0,T.atkHit=!1,T.comboQ=!1,T.swung=!1;let i=kf(5.5);i&&(T.yaw=Math.atan2(i.pos.x-T.pos.x,i.pos.z-T.pos.z)),it&&it.anim.play(Uh[T.combo].clip,{speed:zf,fadeIn:.09,fadeOut:.3})}function gv(){let i=qa[L.sword].dmg+5*L.stats.sila,e=!1;for(let t of It){if(t.dead||t.state==="surrender"||t.state==="leaving")continue;let n=t.pos.x-T.pos.x,s=t.pos.z-T.pos.z,r=Math.hypot(n,s);if(r>2.75+t.def.radius||Math.abs(Za(Math.atan2(n,s),T.yaw))>1.25&&r>1.2)continue;let o=i*(T.combo===2?1.6:1)*gt(.9,1.1),a=Math.random()<.06+.05*L.stats.zrecznosc;a&&(o*=2),Oh(t,o,a,n/(r||1),s/(r||1),T.combo===2?8:4),e=!0,a&&Qe.crit()}e&&(Qe.hit(),ao(T.combo===2?.25:.12))}function Vf(){if(T.dead||kt||T.rollCd>0)return;let i=0,e=0,t=Xf();t.m>.1?(i=t.x,e=t.z):(i=Math.sin(T.yaw),e=Math.cos(T.yaw));let n=Math.hypot(i,e)||1;T.rollDir={x:i/n,z:e/n},T.yaw=Math.atan2(i,e),T.rollT=Ch,T.rollCd=.85,T.attackT=-1,it&&it.anim.play("Roll",{speed:1.47/Ch,fadeIn:.05,fadeOut:.15}),Qe.roll(),en(T.pos.x,T.pos.y+.2,T.pos.z,10127978,5,2,1,.4)}function Wf(){if(T.dead||kt)return;if(L.potions<=0){st("Nie masz mikstur. Kup je u kupca Mirka.","",2);return}if(T.hp>=Dn()){st("Zdrowie jest pe\u0142ne.","",1.5);return}L.potions--;let i=60+10*L.stats.sila;T.hp=Math.min(Dn(),T.hp+i),it&&it.anim.play("Drink",{speed:1.7,fadeIn:.15}),Qe.drink(),oo("+"+i,T.pos.x,T.pos.y+2.2,T.pos.z,"heal"),en(T.pos.x,T.pos.y+1,T.pos.z,16732240,10,2,3,.6)}function Xf(){let i=_i.jx,e=_i.jy,t=_i.keys;(t.KeyW||t.ArrowUp)&&(e+=1),(t.KeyS||t.ArrowDown)&&(e-=1),(t.KeyA||t.ArrowLeft)&&(i-=1),(t.KeyD||t.ArrowRight)&&(i+=1);let n=Math.min(1,Math.hypot(i,e)),s=-Math.sin(Hn),r=-Math.cos(Hn),o=-r,a=s,c=s*e+o*i,l=r*e+a*i,h=Math.hypot(c,l);return h>0&&(c/=h,l/=h),{x:c,z:l,m:n}}function xv(i){if(T.dead){T.deadT+=i,it?(it.anim.update(i,0),it.anim.isPlaying("Death")||it.anim.play("Death",{hold:!0,fadeIn:.15})):mt.group.rotation.x=-Math.min(1,T.deadT*2)*Math.PI/2,T.deadT>2.2&&Ae("death").style.display!=="flex"&&(Ae("death").style.display="flex",kt=!0);return}T.rollCd-=i,T.invuln-=i,T.comboTimer-=i,T.castT-=i;let e=Xf(),t=6.2+.45*L.stats.zrecznosc,n=0,s=0;if(T.rollT>0){T.rollT-=i;let a=12+L.stats.zrecznosc;n=T.rollDir.x*a,s=T.rollDir.z*a}else if(T.attackT>=0){let a=Uh[T.combo];T.attackT+=i/(a.len/zf),!T.swung&&T.attackT>=a.hit-.1&&(T.swung=!0,Qe.swing()),!T.atkHit&&T.attackT>=a.hit&&(T.atkHit=!0,gv()),e.m>.1&&(n=e.x*t*.15,s=e.z*t*.15);let c=T.attackT>a.hit-.16&&T.attackT<a.hit+.04?T.combo===2?5:3.5:0;n+=Math.sin(T.yaw)*c,s+=Math.cos(T.yaw)*c,T.comboQ&&T.attackT>=a.hit+.12?Gf():T.attackT>=xf&&(T.attackT=-1,T.comboTimer=.5,it&&it.anim.release(.3))}else e.m>.05&&(n=e.x*t*e.m,s=e.z*t*e.m,T.yaw=Sn(T.yaw,Math.atan2(e.x,e.z),i*12));n+=T.kvx,s+=T.kvz;let r=Math.exp(-8*i);if(T.kvx*=r,T.kvz*=r,gr(T.pos,n*i,s*i,.45),T.speed=wt(T.speed,Math.hypot(n,s),Math.min(1,i*10)),T.mana=Math.min(yi(),T.mana+i*(5+L.stats.magia)),Kn.elapsedTime-T.lastHurt>6&&(T.hp=Math.min(Dn(),T.hp+i*2.5)),it){let a=it.root;a.position.copy(T.pos),T.pos.y<0&&(a.position.y=Math.max(T.pos.y,-.6)),a.rotation.y=T.yaw,it.anim.update(i,T.rollT>0||T.attackT>=0?0:T.speed/pr),a.visible=!(T.invuln>0&&Math.floor(T.invuln*30)%2===0&&T.rollT<=0),fs.rotation.z+=i;return}let o=mt.group;if(o.position.copy(T.pos),T.pos.y<0&&(o.position.y=Math.max(T.pos.y,-.6)),o.rotation.y=T.yaw,T.rollT>0){let a=1-T.rollT/Ch;mt.body.rotation.x=a*Math.PI*2,mt.body.position.y=Math.sin(a*Math.PI)*.5-.3,mt.legL.rotation.x=-1.2,mt.legR.rotation.x=-1.2,mt.armL.rotation.x=-1.5,mt.armR.rotation.x=-1.5}else Fl(mt,i,T.speed,T.attackT>=0?Math.min(1,T.attackT/xf):-1,{cast:T.castT>0});o.visible=!(T.invuln>0&&Math.floor(T.invuln*30)%2===0&&T.rollT<=0),fs.rotation.z+=i}function _v(i){let e=zt,t=e.mesh.group;if(e.cd-=i,e.barkCd-=i,pn(e.pos,T.pos)>45&&(e.pos.set(T.pos.x-Math.sin(T.yaw)*2,0,T.pos.z-Math.cos(T.yaw)*2),e.pos.y=et(e.pos.x,e.pos.z)),!e.target||e.target.dead||e.target.state==="surrender"||pn(e.target.pos,T.pos)>14){e.target=null;let u=kf(11);u&&u.state!=="idle"&&(e.target=u)}let s,r,o=0,a=2.5;e.target&&!T.dead?(s=e.target.pos.x,r=e.target.pos.z,a=e.target.def.radius+.9):(s=T.pos.x-Math.sin(T.yaw+.8)*2.2,r=T.pos.z-Math.cos(T.yaw+.8)*2.2,a=.8);let c=s-e.pos.x,l=r-e.pos.z,h=Math.hypot(c,l);e.atkT>=0?(e.atkT+=i/.4,e.atkT>=.5&&!e.hitDone&&e.target&&(e.hitDone=!0,Oh(e.target,5+L.renown*.05,!1,c/(h||1),l/(h||1),1.5),Qe.bark()),e.atkT>=1&&(e.atkT=-1)):h>a?(o=Math.min(8.5,h*2.5+(e.target?4:0)),e.yaw=Sn(e.yaw,Math.atan2(c,l),i*10),gr(e.pos,Math.sin(e.yaw)*o*i,Math.cos(e.yaw)*o*i,.3)):e.target&&e.cd<=0?(e.atkT=0,e.hitDone=!1,e.cd=1.3,e.yaw=Math.atan2(c,l)):e.target||(e.yaw=Sn(e.yaw,Math.atan2(T.pos.x-e.pos.x,T.pos.z-e.pos.z),i*3)),e.speed=wt(e.speed,o,Math.min(1,i*8)),e.pos.y=et(e.pos.x,e.pos.z),t.position.copy(e.pos),e.pos.y<0&&(t.position.y=Math.max(e.pos.y,-.3)),t.rotation.y=e.yaw,e.mesh.kind==="qrig"?e.mesh.update(i,e.speed,e.atkT):kl(e.mesh,i,e.speed,e.atkT)}var ms=[];function ys(i,e,t,n,s={}){let r=os(n);St.add(r.group);let o={id:i,name:e,mesh:r,look:n,rig:s.rig,pos:new I(t.x,et(t.x,t.z),t.z),home:{x:t.x,z:t.z},yaw:Math.atan2(-t.x,-t.z),wander:s.wander||0,target:null,wt:gt(1,5),speed:0,bubbleCd:gt(2,8),talk:s.talk,flee:0};return ms.push(o),o}var bh=ys("elder","So\u0142tys Bogumi\u0142",ot.spots.elder,{shirt:6965802,pants:3815994,hair:14540253,beard:15658734,skin:14198912},{talk:Lv,rig:{model:"man",hair:["Hair_SimpleParted","Hair_Beard"],tint:{hair:14211288,outfit:13152400}}}),yv=ys("herb","Zielarka Jagna",ot.spots.herbalist,{shirt:4876858,pants:3811866,hair:9067050,dress:3824170,longHair:!0},{talk:Iv,rig:{model:"woman",hair:["Hair_Long"],tint:{hair:6961690,outfit:11061392}}}),yM=ys("merch","Kupiec Mirek",ot.spots.merchant,{shirt:9071146,pants:4864554,hair:2759178,beard:2759178},{talk:Xa,rig:{model:"man",hair:["Hair_Buzzed","Hair_Beard"],tint:{hair:2759184,outfit:15255696}}}),vv=ys("lender","Lichwiarz Grzegorz",ot.spots.lender,{shirt:5904954,pants:2763306,hair:4868682,skin:15253664},{talk:Dv,rig:{model:"man",hair:["Hair_SimpleParted"],tint:{hair:3815994,outfit:11571384}}}),Mv=ys("widow","Wdowa Halina",ot.spots.widow,{shirt:3816010,pants:2763306,hair:5917242,dress:2763322,longHair:!0},{talk:Nv,rig:{model:"woman",hair:["Hair_Buns"],tint:{hair:2760728,outfit:8949928}}}),vM=ys("alch","Alchemik Kruk",ot.spots.alchemist,{shirt:2759226,pants:1710634,hood:1706538,staff:6750088},{talk:zv,rig:{model:"bandit",hideSword:!0,tint:{outfit:8018586},eyeGlow:6750088}}),wf=[{shirt:10508858,pants:4864554,hair:3811866},{shirt:5929626,pants:3815994,hair:13148240,dress:4876938,longHair:!0},{shirt:8026682,pants:4864554,hair:1710618},{shirt:10111594,pants:3811882,hair:6961690,dress:9058906,longHair:!0},{shirt:4876874,pants:5917242,hair:9079434,beard:9079434},{shirt:11569754,pants:3815978,hair:4860442,scale:.7},{shirt:6969994,pants:3815994,hair:10512954,dress:5917306,longHair:!0},{shirt:3824234,pants:2763306,hair:2759178,scale:.75}];wf.forEach((i,e)=>{let t=e/wf.length*Math.PI*2;ys("v"+e,"Mieszkaniec",{x:Math.sin(t)*9,z:Math.cos(t)*9},i,{wander:1})});var to={hero:["Nasz bohater!","Witaj, dobry rycerzu!","\u2764","Niech ci\u0119 bogowie strzeg\u0105!","Dzieci o tobie m\xF3wi\u0105!"],evil:["Uciekajcie!","To ten okrutnik\u2026","Nie patrz mu w oczy!","Prosz\u0119, nie krzywd\u017A mnie!"],famous:["To ten s\u0142ynny rycerz!","S\u0142ysza\u0142am o tobie!","Opowiesz, jak pokona\u0142e\u015B bandyt\xF3w?"],neutral:["Dzie\u0144 dobry.","Hmm, obcy\u2026","\u0141adna dzi\u015B pogoda.","Uwa\u017Caj na drogach.","S\u0142ysza\u0142e\u015B o upiorach?"],night:["P\xF3\u017Ano ju\u017C\u2026","Nie wychod\u017A noc\u0105 za wie\u015B.","Ziewam\u2026"]};function bv(i){for(let e of ms){let t=e.mesh.group,n=pn(e.pos,T.pos);if(n>75){t.visible=!1;continue}t.visible=!0;let s=0;if(e.bubbleCd-=i,e.wander){if(L.morality<=-40&&n<7&&!T.dead&&(e.flee=2.5),e.flee>0){e.flee-=i;let o=e.pos.x-T.pos.x,a=e.pos.z-T.pos.z;e.yaw=Sn(e.yaw,Math.atan2(o,a),i*8),s=4.5}else if(e.wt-=i,e.wt<=0&&(e.wt=gt(3,9),e.target=Math.random()<.7?(()=>{let o=Math.random()*6.28,a=gt(5,22);return{x:Math.sin(o)*a,z:Math.cos(o)*a}})():null),n<4&&(e.target=null,e.yaw=Sn(e.yaw,Math.atan2(T.pos.x-e.pos.x,T.pos.z-e.pos.z),i*4)),e.target){let o=e.target.x-e.pos.x,a=e.target.z-e.pos.z;Math.hypot(o,a)>.8?(e.yaw=Sn(e.yaw,Math.atan2(o,a),i*4),s=1.5):e.target=null}if(s>0){let o=e.pos.x+Math.sin(e.yaw)*s*i,a=e.pos.z+Math.cos(e.yaw)*s*i;Math.hypot(o,a)<30?gr(e.pos,o-e.pos.x,a-e.pos.z,.4):(e.target=null,e.wt=0)}if(n<6&&e.bubbleCd<=0&&!T.dead){e.bubbleCd=gt(9,16);let o=to.neutral;L.morality<=-40?o=to.evil:L.morality>=35&&L.renown>=15?o=to.hero:L.renown>=30?o=to.famous:_s&&(o=to.night),oo(o[Math.floor(Math.random()*o.length)],e.pos.x,e.pos.y+2.5,e.pos.z,"bubble",2.6,.15)}}else n<6?e.yaw=Sn(e.yaw,Math.atan2(T.pos.x-e.pos.x,T.pos.z-e.pos.z),i*4):e.yaw=Sn(e.yaw,Math.atan2(-e.home.x,-e.home.z),i*2);e.speed=wt(e.speed,s,Math.min(1,i*6)),t.position.copy(e.pos),t.rotation.y=e.yaw,Ha(e.mesh,i,e.speed,-1,e.talk?{talk:n<4.5&&!T.dead}:{})}}var zh=null;function wv(){let i=[];for(let t of ms)t.talk&&i.push({x:t.pos.x,z:t.pos.z,r:3.2,label:"Rozmawiaj",act:()=>t.talk(t)});if(It.some(t=>!t.dead&&t.state!=="idle"&&t.state!=="surrender"&&pn(t.pos,T.pos)<25)||i.push({x:zt.pos.x,z:zt.pos.z,r:1.6,label:"Pog\u0142aszcz Iskr\u0119",act:Ev,low:!0}),L.quests.herbs>=0&&L.quests.herbs<2)for(let t of ot.herbs)L.herbTaken[t.i]||i.push({x:t.x,z:t.z,r:2.4,label:"Zbierz ziele",act:()=>Tv(t)});for(let t of ot.chests)L.chestOpened[t.i]||i.push({x:t.x,z:t.z,r:2.4,label:"Otw\xF3rz skrzyni\u0119",act:()=>Av(t)});i.push({x:ot.spots.house.x,z:ot.spots.house.z,r:3,label:L.houseOwned?"Odpocznij w domu":"Dom na sprzeda\u017C",act:Rv});for(let t of It)t.state==="surrender"&&i.push({x:t.pos.x,z:t.pos.z,r:3.2,label:"Zdecyduj o losie",act:()=>Pv(t)});return i}function Sv(){let i=null,e=1e9;if(!T.dead)for(let n of wv()){let s=Math.hypot(n.x-T.pos.x,n.z-T.pos.z)+(n.low?100:0);s<n.r+(n.low?100:0)&&s<e&&(e=s,i=n)}zh=i;let t=Ae("bUse");i&&!kt?(t.style.display="flex",t.textContent!==i.label&&(t.textContent=i.label)):t.style.display="none"}function qf(){zh&&!kt&&!T.dead&&zh.act()}function Ev(){Qe.bark(),L.flags.foxPets++,oo("\u2764",zt.pos.x,zt.pos.y+1.2,zt.pos.z,"heal",1.2),en(zt.pos.x,zt.pos.y+1,zt.pos.z,16738954,6,1.5,2.5,.7),L.flags.foxPets===1&&st("Iskra merda ogonem. B\u0119dzie walczy\u0107 u twojego boku.","g")}function Tv(i){L.herbTaken[i.i]=!0,L.herbsHave++,i.group.visible=!1,Qe.pickup(),en(i.x,et(i.x,i.z)+.6,i.z,8978414,10,2,3,.7),st(`Ksi\u0119\u017Cycowe Ziele: ${Math.min(L.herbsHave,6)}/6`,L.herbsHave>=6?"q":""),L.herbsHave===6&&(st(L.quests.herbs===1?"Masz do\u015B\u0107 ziela. Wr\xF3\u0107 do Zielarki Jagny.":"Masz do\u015B\u0107 ziela \u2014 kto\u015B mo\u017Ce go potrzebowa\u0107\u2026","q"),L.tracked="herbs")}function Av(i){it&&it.anim.play("Interact",{speed:1.6,fadeIn:.1}),L.chestOpened[i.i]=!0,i.lid.rotation.x=-1.9;let e=Math.round(gt(40,130));L.gold+=e;let t=`Skrzynia: ${e} z\u0142`;Math.random()<.6&&(L.potions++,t+=" i mikstura zdrowia");let n=40;L.xp+=n,Qe.coin(),en(i.x,et(i.x,i.z)+.8,i.z,16763955,14,3,4,.8),st(t+` (+${n} do\u015Bw.)`,"q"),Bt()}function Rv(){L.houseOwned?xt("Tw\xF3j dom","Ciep\u0142e \u0142\xF3\u017Cko czeka. Odpocz\u0105\u0107 do rana? (pe\u0142ne zdrowie i mana, zapis gry)",[{t:"\u015Apij do rana",f:Cv},{t:"Nie teraz"}]):xt("Dom na Wzg\xF3rzu","Przytulny dom z widokiem na Brzezin\u0119. W\u0142a\u015Bciciel wyjecha\u0142 do miasta. Z domu b\u0119dziesz mie\u0107 codzienny doch\xF3d z dzier\u017Cawy pola (40 z\u0142 dziennie) i miejsce na odpoczynek.",[{t:"Kup dom (800 z\u0142)",dis:L.gold<800,f:()=>{L.gold-=800,L.houseOwned=!0,xs(10),Qe.quest(),st("Dom na Wzg\xF3rzu jest tw\xF3j!","q"),Bt()}},{t:"Odejd\u017A"}])}function Cv(){let i=Ae("fade");i.style.opacity=1,kt=!0,setTimeout(()=>{L.time>.27&&(L.day++,Yf()),L.time=.27,T.hp=Dn(),T.mana=yi(),Bt(),i.style.opacity=0,kt=!1,st(`Dzie\u0144 ${L.day}. Wypocz\u0119ty ruszasz dalej.`,"g")},1200)}function Yf(){L.houseOwned&&(L.gold+=40,st("Doch\xF3d z domu: +40 z\u0142","q"))}function Pv(i){xt("Herszt Wronis\u0142aw","\u2014 Lito\u015Bci, rycerzu! Mam dzieci w Kamie\u0144cu\u2026 Przysi\u0119gam na wszystkie \u015Bwi\u0119to\u015Bci, \u017Ce odejd\u0119 i nikt ju\u017C nie us\u0142yszy o moich ludziach. We\u017A moje z\u0142oto, tylko daruj \u017Cycie!",[{t:"Oszcz\u0119d\u017A go (Dobro)",c:"good",f:()=>{L.flags.leaderFate="spared",gs(25),L.gold+=60,st("+60 z\u0142","q"),i.state="leaving",i.t=0,xs(5),Ih(),Bt()}},{t:"Wykonaj wyrok (Z\u0142o)",c:"evil",f:()=>{L.flags.leaderFate="killed",gs(-25),i.state="chase",i.hp=1,i.def={...i.def,gold:[150,150]},Qa(i),en(i.pos.x,i.pos.y+1.2,i.pos.z,11147802,18,4,3,.7),Qe.hit(),Ih(),Bt()}}])}function gs(i){L.morality=Hi(L.morality+i,-100,100),i>0?(Qe.good(),st(`Dobro +${i}`,"g"),en(T.pos.x,T.pos.y+1.5,T.pos.z,16769152,16,2,4,1)):(Qe.evil(),st(`Z\u0142o ${i}`,"e"),en(T.pos.x,T.pos.y+1.5,T.pos.z,11145232,16,2,4,1)),$n()}function xs(i,e=!1){L.renown+=i,e||st(`S\u0142awa +${i}`,"q")}function ec(){let i=L.morality;return i>=70?"\u015Awietlisty Obro\u0144ca":i>=30?"Prawy Rycerz":i>-30?"W\u0119drowny Rycerz":i>-70?"Okrutny Najemnik":"Mroczny Tyran"}var lo=!1,kt=!0;function xt(i,e,t=[]){lo=!0,kt=!0,Ae("dName").textContent=i,Ae("dText").textContent=e;let n=Ae("dOpts");n.innerHTML="",t.length||(t=[{t:"Dalej"}]);for(let s of t){let r=document.createElement("button");r.className="btn"+(s.c?" "+s.c:""),r.textContent=s.t,s.dis&&(r.disabled=!0),r.addEventListener("click",o=>{o.stopPropagation(),!s.dis&&(Qe.click(),jf(),s.f&&s.f())}),n.appendChild(r)}Ae("dialog").style.display="block"}function jf(){lo=!1,Ae("dialog").style.display="none",io||(kt=!1)}function tc(i,e){L.quests[i]=1,L.tracked=i,Qe.quest(),st("Nowe zadanie: "+e,"q",4),Bt()}function ro(i,e){Qe.level(),st("Zadanie uko\u0144czone: "+i,"q",4),e&&(L.xp+=e,st(`+${e} do\u015Bwiadczenia`,"g")),Bt()}function Lv(){let i=L.quests,e="So\u0142tys Bogumi\u0142";if(i.bandits<3&&L.flags.campCleared){let t=L.flags.leaderFate==="spared"?"Darowa\u0142e\u015B Wronis\u0142awowi \u017Cycie? Masz dobre serce, rycerzu. Oby tego nie \u017Ca\u0142owa\u0142\u2026 Ale drogi zn\xF3w s\u0105 bezpieczne.":"Wronis\u0142aw nie \u017Cyje\u2026 Twarda z ciebie r\u0119ka. Ludzie b\u0119d\u0105 o tym szepta\u0107 \u2014 jedni z ulg\u0105, inni ze strachem.";xt(e,t+" Przyjmij nagrod\u0119 od ca\u0142ej wioski.",[{t:"Przyjmij (+200 z\u0142)",f:()=>{L.gold+=200,xs(15),i.bandits=3,ro("Plaga Bandyt\xF3w",150),setTimeout(Sf,300)}}]);return}if(i.bandits===0){xt(e,"Witaj w Brzezinie, w\u0119drowcze. Przychodzisz w z\u0142\u0105 godzin\u0119\u2026 Bandyci Wronis\u0142awa napadaj\u0105 na wozy kupc\xF3w i pal\u0105 nasze stodo\u0142y. Ich ob\xF3z le\u017Cy w Starym Lesie, na po\u0142udniowym zachodzie. Wioska zap\u0142aci 200 z\u0142otych temu, kto ich przegoni.",[{t:"Zajm\u0119 si\u0119 bandytami.",f:()=>tc("bandits","Plaga Bandyt\xF3w")},{t:"Mo\u017Ce p\xF3\u017Aniej."}]);return}if(i.bandits===1){xt(e,"Ob\xF3z Wronis\u0142awa jest na po\u0142udniowym zachodzie. Id\u017A \u015Bcie\u017Ck\u0105 od studni, przez Stary Las. Uwa\u017Caj na wilki \u2014 i nie daj si\u0119 otoczy\u0107!");return}if(i.ruins===0){Sf();return}if(i.ruins===1){xt(e,"Ruiny Starej Stra\u017Cnicy le\u017C\u0105 na wschodzie, za rozstajami. Rycerz Popio\u0142u podobno budzi si\u0119, gdy kto\u015B stanie na kamiennym kr\u0119gu. Przygotuj si\u0119 dobrze \u2014 kup mikstury u Mirka.");return}if(i.ruins===2){xt(e,"Na wszystkie gwiazdy! Rycerz Popio\u0142u pokonany! Brzezina nigdy tego nie zapomni. Od dzi\u015B ka\u017Cdy kufel w karczmie jest dla ciebie za darmo. I przyjmij to \u2014 oszcz\u0119dno\u015Bci ca\u0142ej wioski.",[{t:"Przyjmij (+500 z\u0142)",f:()=>{L.gold+=500,xs(25),i.ruins=3,ro("Popio\u0142y Stra\u017Cnicy",300)}}]);return}xt(e,L.morality>=0?"Brzezina zawsze b\u0119dzie twoim domem, bohaterze. Dzieci bawi\u0105 si\u0119 w \u201Erycerza i Popielnego\u201D \u2014 zgadnij, kto wygrywa.":"Jeste\u015B\u2026 zawsze mile widziany. Tak. Oczywi\u015Bcie. Prosz\u0119, nie r\xF3b nikomu krzywdy.")}function Sf(){xt("So\u0142tys Bogumi\u0142","Jest jeszcze jedno\u2026 Nocami z ruin Starej Stra\u017Cnicy na wschodzie wype\u0142zaj\u0105 upiory. Starzy ludzie m\xF3wi\u0105, \u017Ce budzi je Rycerz Popio\u0142u \u2014 dawny stra\u017Cnik tej ziemi, kt\xF3ry zdradzi\u0142 sw\xF3j lud i zosta\u0142 przekl\u0119ty. Je\u015Bli kto\u015B mo\u017Ce po\u0142o\u017Cy\u0107 temu kres, to ty.",[{t:"Udam si\u0119 do ruin.",f:()=>tc("ruins","Popio\u0142y Stra\u017Cnicy")},{t:"Musz\u0119 si\u0119 przygotowa\u0107."}])}function Iv(){let i=L.quests,e="Zielarka Jagna";if(i.herbs===-1){xt(e,"Sprzeda\u0142e\u015B Ksi\u0119\u017Cycowe Ziele temu s\u0119powi Krukowi\u2026 Wiesz, ile trucizny z tego uwarzy? Odejd\u017A. Nie mam ci nic do powiedzenia.");return}if(i.herbs===2){xt(e,"Dzi\u0119ki tobie mam leki na ca\u0142\u0105 zim\u0119. Gor\u0105czka w wiosce ju\u017C ust\u0119puje. Niech las ci\u0119 prowadzi, rycerzu.");return}if(i.herbs===0){xt(e,"Ach, go\u015B\u0107! W wiosce szerzy si\u0119 gor\u0105czka, a sko\u0144czy\u0142o mi si\u0119 Ksi\u0119\u017Cycowe Ziele. Ro\u015Bnie w g\u0142\u0119bi lasu \u2014 \u015Bwieci delikatnie, najlepiej wida\u0107 je noc\u0105. Potrzebuj\u0119 sze\u015Bciu \u0142odyg. Pomo\u017Cesz?",[{t:"Przynios\u0119 zio\u0142a.",f:()=>tc("herbs","Ziele dla Jagny")},{t:"Nie mam czasu."}]);return}if(L.herbsHave>=6){xt(e,"Sze\u015B\u0107 \u0142odyg Ksi\u0119\u017Cycowego Ziela! Uratowa\u0142e\u015B wielu ludzi. Przyjmij moje mikstury \u2014 sama je warzy\u0142am.",[{t:"Oddaj zio\u0142a (Dobro)",c:"good",f:()=>{i.herbs=2,L.herbsHave-=6,L.potions+=3,L.gold+=60,gs(12),xs(8),ro("Ziele dla Jagny",150),st("+3 mikstury, +60 z\u0142","q")}},{t:"Jeszcze nie teraz"}]);return}xt(e,`Masz ju\u017C ${L.herbsHave} z 6 \u0142odyg. Szukaj w g\u0119stym lesie \u2014 \u015Bwiec\u0105ce kwiaty. Noc\u0105 \u0142atwiej je wypatrzy\u0107.`)}function zv(){let i=L.quests,e="Alchemik Kruk";if(i.herbs===1&&L.herbsHave>=6){xt(e,"Czuj\u0119 to\u2026 Ksi\u0119\u017Cycowe Ziele. Sze\u015B\u0107 \u0142odyg? Zap\u0142ac\u0119 ci 350 z\u0142otych. Ta g\u0142upia zielarka da ci najwy\u017Cej par\u0119 mikstur. Do czego mi ono? Hm\u2026 powiedzmy, \u017Ce niekt\xF3rzy mo\u017Cni p\u0142ac\u0105 krocie za trucizn\u0119 bez smaku.",[{t:"Sprzedaj ziele (350 z\u0142, Z\u0142o)",c:"evil",f:()=>{i.herbs=-1,L.herbsHave-=6,L.gold+=350,gs(-20),st("+350 z\u0142","q"),ro("Ziele dla Jagny (sprzedane)",80)}},{t:"Nie sprzedam."}]);return}xt(e,"Szukasz czego\u015B\u2026 specjalnego? Moje eliksiry nie s\u0105 dla tch\xF3rzy. Mroczny eliksir daje wiedz\u0119 wojownik\xF3w, kt\xF3rzy ju\u017C nie \u017Cyj\u0105. Cena? Z\u0142oto\u2026 i kawa\u0142ek duszy.",[{t:"Mroczny eliksir (150 z\u0142) \u2014 +250 do\u015Bw., Z\u0142o",c:"evil",dis:L.gold<150,f:()=>{L.gold-=150,L.xp+=250,gs(-5),Qe.drink(),st("+250 do\u015Bwiadczenia","g")}},{t:"Eliksir many (60 z\u0142) \u2014 pe\u0142na mana",dis:L.gold<60,f:()=>{L.gold-=60,T.mana=yi(),Qe.drink()}},{t:"Odejd\u017A"}])}function Xa(){let i="Kupiec Mirek",e=[{t:`Mikstura zdrowia (30 z\u0142) [masz ${L.potions}]`,dis:L.gold<30,f:()=>{L.gold-=30,L.potions++,Qe.coin(),Xa()}}],t=qa[L.sword+1];t&&e.push({t:`${t.name} (${t.price} z\u0142)`,dis:L.gold<t.price,f:()=>{L.gold-=t.price,L.sword++,$n(),Qe.level(),st("Nowa bro\u0144: "+t.name,"q"),Bt(),Xa()}});let n=Ya[L.armor+1];n&&e.push({t:`${n.name} (${n.price} z\u0142)`,dis:L.gold<n.price,f:()=>{L.gold-=n.price,L.armor++,$n(),Qe.level(),st("Nowy pancerz: "+n.name,"q"),Bt(),Xa()}}),e.push({t:"Do widzenia"});let s=L.morality<=-40?"T-tak, panie? Cokolwiek zechcesz\u2026 po uczciwej cenie, oczywi\u015Bcie!":L.renown>30?"Nasz bohater! Dla ciebie najlepszy towar z ca\u0142ego traktu!":"Witaj, podr\xF3\u017Cny! Mikstury, miecze, pancerze \u2014 wszystko, czego potrzebuje rycerz.";xt(i,s+`  (Twoje z\u0142oto: ${L.gold} z\u0142)`,e)}function Dv(){let i=L.quests,e="Lichwiarz Grzegorz";if(i.debt===0){xt(e,"Rycerz, co? Mam robot\u0119 dla kogo\u015B z mieczem. Wdowa Halina winna mi 100 z\u0142otych od p\xF3\u0142 roku. M\u0105\u017C jej zgin\u0105\u0142, ale d\u0142ug to d\u0142ug. Odbierz go \u2014 dostaniesz 50 z\u0142otych za fatyg\u0119.",[{t:"Odbior\u0119 d\u0142ug.",f:()=>tc("debt","D\u0142ug Wdowy")},{t:"Nie b\u0119d\u0119 n\u0119ka\u0142 wdowy."}]);return}if(i.debt===1){xt(e,"Na co czekasz? Dom Haliny jest po drugiej stronie placu. Tylko bez lito\u015Bci \u2014 \u0142zy to jej ulubiona waluta.");return}if(i.debt===2){let t=L.flags.debtChoice==="paid";xt(e,t?"Sam zap\u0142aci\u0142e\u015B za ni\u0105? Dziwak z ciebie\u2026 Ale z\u0142oto to z\u0142oto. Umowa to umowa \u2014 masz swoje 50.":"Ha! Wiedzia\u0142em, \u017Ce si\u0119 nadasz. P\u0142aka\u0142a? Na pewno p\u0142aka\u0142a. Twoja dzia\u0142ka.",[{t:"We\u017A 50 z\u0142",f:()=>{L.gold+=50,i.debt=3,ro("D\u0142ug Wdowy",80)}}]);return}xt(e,"Interesy, interesy\u2026 Je\u015Bli b\u0119dziesz potrzebowa\u0107 po\u017Cyczki \u2014 wiesz, gdzie mnie szuka\u0107. Procent niewielki. Prawie.")}function Nv(){let i=L.quests,e="Wdowa Halina";if(i.debt===1){xt(e,"Przys\u0142a\u0142 ci\u0119 Grzegorz, prawda? Ja\u2026 nie mam tych pieni\u0119dzy. M\u0105\u017C zgin\u0105\u0142 z r\u0105k bandyt\xF3w, a zosta\u0142a mi tylko ta cha\u0142upa i dwoje dzieci. Wszystko, co mam, to te kilka monet na zim\u0119.",[{t:"Oddawaj pieni\u0105dze! (Z\u0142o)",c:"evil",f:()=>{L.flags.debtChoice="force",i.debt=2,gs(-18),st("Zabra\u0142e\u015B wdowie ostatnie oszcz\u0119dno\u015Bci. Wr\xF3\u0107 do Grzegorza.","e"),Bt()}},{t:"Sp\u0142ac\u0119 tw\xF3j d\u0142ug (100 z\u0142, Dobro)",c:"good",dis:L.gold<100,f:()=>{L.gold-=100,L.flags.debtChoice="paid",i.debt=2,gs(20),xs(5),st("Sp\u0142aci\u0142e\u015B d\u0142ug wdowy. Wr\xF3\u0107 do Grzegorza.","q"),Bt()}},{t:"Wr\xF3c\u0119 p\xF3\u017Aniej."}]);return}if(L.flags.debtChoice==="paid"){L.flags.widowGift?xt(e,"Dzieci codziennie si\u0119 za ciebie modl\u0105."):xt(e,"Niech ci\u0119 bogowie b\u0142ogos\u0142awi\u0105, rycerzu! We\u017A chocia\u017C to \u2014 m\u0105\u017C trzyma\u0142 t\u0119 mikstur\u0119 na czarn\u0105 godzin\u0119. Tobie bardziej si\u0119 przyda.",[{t:"Dzi\u0119kuj\u0119",f:()=>{L.flags.widowGift=!0,L.potions+=2,st("+2 mikstury","q")}}]);return}if(L.flags.debtChoice==="force"){xt(e,"Odejd\u017A\u2026 Zabra\u0142e\u015B nam wszystko. Mam nadziej\u0119, \u017Ce to z\u0142oto ci\u0105\u017Cy ci w sakwie.");return}xt(e,"Dzie\u0144 dobry, rycerzu. Wybacz, nie mam czym pocz\u0119stowa\u0107\u2026")}function Zf(){let i=L.quests,e=[];return(i.bandits>0||L.flags.campCleared)&&e.push({id:"bandits",title:"Plaga Bandyt\xF3w",done:i.bandits===3,text:i.bandits===3?L.flags.leaderFate==="spared"?"Oszcz\u0119dzi\u0142e\u015B Wronis\u0142awa. Bandyci odeszli.":"Wronis\u0142aw nie \u017Cyje. Drogi s\u0105 bezpieczne.":L.flags.campCleared?"Wr\xF3\u0107 do So\u0142tysa Bogumi\u0142a po nagrod\u0119.":`Rozbij ob\xF3z bandyt\xF3w w Starym Lesie (SW). Bandyci: ${L.campKills}/4. Rozpraw si\u0119 z hersztem.`,target:i.bandits===3?null:L.flags.campCleared?bh.pos:de.camp}),i.herbs!==0&&e.push({id:"herbs",title:"Ziele dla Jagny",done:i.herbs===2||i.herbs===-1,text:i.herbs===2?"Jagna dosta\u0142a zio\u0142a. Wioska zdrowieje.":i.herbs===-1?"Sprzeda\u0142e\u015B ziele Alchemikowi Krukowi.":L.herbsHave>=6?"Zanie\u015B zio\u0142a Zielarce Jagnie (albo\u2026 komu\u015B, kto zap\u0142aci wi\u0119cej).":`Zbierz Ksi\u0119\u017Cycowe Ziele w lesie: ${L.herbsHave}/6.`,target:i.herbs!==1?null:L.herbsHave>=6?yv.pos:Uv()}),i.debt!==0&&e.push({id:"debt",title:"D\u0142ug Wdowy",done:i.debt===3,text:i.debt===3?L.flags.debtChoice==="paid"?"Sp\u0142aci\u0142e\u015B d\u0142ug wdowy z w\u0142asnej kieszeni.":"Odebra\u0142e\u015B d\u0142ug od wdowy.":i.debt===2?"Wr\xF3\u0107 do Lichwiarza Grzegorza.":"Odwied\u017A Wdow\u0119 Halin\u0119 i odbierz d\u0142ug.",target:i.debt===1?Mv.pos:i.debt===2?vv.pos:null}),i.ruins!==0&&e.push({id:"ruins",title:"Popio\u0142y Stra\u017Cnicy",done:i.ruins===3,text:i.ruins===3?"Rycerz Popio\u0142u zosta\u0142 pokonany. Jeste\u015B legend\u0105 Brzeziny.":i.ruins===2?"Wr\xF3\u0107 do So\u0142tysa Bogumi\u0142a z wie\u015Bciami.":"Pokonaj Rycerza Popio\u0142u w ruinach Starej Stra\u017Cnicy (wsch\xF3d).",target:i.ruins===1?de.ruins:i.ruins===2?bh.pos:null}),(!e.length||i.bandits===0)&&e.unshift({id:"start",title:"Witaj w Brzezinie",done:!1,text:"Porozmawiaj z So\u0142tysem Bogumi\u0142em przy studni.",target:bh.pos}),e}function Uv(){let i=null,e=1e9;for(let t of ot.herbs)if(!L.herbTaken[t.i]){let n=Math.hypot(t.x-T.pos.x,t.z-T.pos.z);n<e&&(e=n,i=t)}return i}function Kf(){let i=Zf().filter(e=>!e.done);return i.find(e=>e.id===L.tracked)||i[0]||null}var wh=0,Ef=!1,Tf=!1;function Ov(i){if(!L.flags.campCleared&&!Ef&&pn(T.pos,de.camp)<75){Ef=!0;let n=4-L.campKills;for(let s=0;s<n;s++){let r=s/Math.max(1,n)*6.28+.5;mr("bandit",de.camp.x+Math.sin(r)*5,de.camp.z+Math.cos(r)*5,"camp",{x:de.camp.x+Math.sin(r)*5,z:de.camp.z+Math.cos(r)*5})}L.flags.leaderFate||mr("leader",de.camp.x,de.camp.z-3,"leader",{x:de.camp.x,z:de.camp.z-3})}if(L.quests.ruins===1&&!L.flags.bossDead&&!Tf&&pn(T.pos,de.ruins)<60&&(Tf=!0,mr("boss",de.ruins.x,de.ruins.z,"boss",{x:de.ruins.x,z:de.ruins.z})),wh-=i,wh>0)return;wh=2.5;for(let n of It)n.tag==="wild"&&!n.dead&&pn(n.pos,T.pos)>110&&(n.remove=!0);if(!(It.filter(n=>n.tag==="wild"&&!n.dead).length>=(_s?9:6)||T.dead))for(let n=0;n<8;n++){let s=Math.random()*6.28,r=gt(42,75),o=T.pos.x+Math.sin(s)*r,a=T.pos.z+Math.cos(s)*r;if(Math.abs(o)>165||Math.abs(a)>165||Math.hypot(o,a)<60||pn({x:o,z:a},de.house)<18||pn({x:o,z:a},de.herbalist)<18||pn({x:o,z:a},de.crossroad)<15||!L.flags.campCleared&&pn({x:o,z:a},de.camp)<30)continue;let c=et(o,a);if(c<.5||c>20)continue;let l=rs(o,a),h,u=pn({x:o,z:a},de.ruins)<60;_s?h=u||Math.random()<.45?"ghoul":Math.random()<.6?"wolf":"bandit":h=l>.55?Math.random()<.75?"wolf":"bandit":Math.random()<.55?"bandit":"wolf";let d=h==="wolf"?Math.random()<.5?2:3:Math.random()<.35?2:1;for(let f=0;f<d;f++)mr(h,o+gt(-3,3),a+gt(-3,3),"wild",{x:o,z:a});break}}var Ct=1,_s=!1,Fv=new ge(8896488),Bv=new ge(725800),kv=new ge(15764048),Hv=new ge(16773336),Gv=new ge(9085183),Vv=new ge(16752736),Sh=new ge;function Wv(i){let e=(L.time-.25)*Math.PI*2,t=Math.sin(e);Ct=Hi((t+.08)/.3,0,1),Ct=Ct*Ct*(3-2*Ct),_s=Ct<.25;let n=Hi(1-Math.abs(t)/.25,0,1);Sh.copy(Bv).lerp(Fv,Ct).lerp(kv,n*.45),St.background.copy(Sh),St.fog.color.copy(Sh);let s=Math.cos(e),r=Math.sin(e),o=t>-.05,a=o?s:-s,c=o?Math.max(.12,r):Math.max(.25,-r);kn.position.set(T.pos.x+a*80,T.pos.y+c*80,T.pos.z+30),kn.target.position.copy(T.pos),kn.intensity=wt(.55,2.1,Ct),kn.color.copy(Gv).lerp(Hv,Ct).lerp(Vv,n*.6),Ah.intensity=wt(.55,1.05,Ct),Ah.color.setRGB(wt(.35,.81,Ct),wt(.42,.9,Ct),wt(.75,1,Ct)),Ia.emissiveIntensity=(1-Ct)*1.2;for(let l of ur)l.emissiveIntensity=.4+(1-Ct)*1.2;ot.starMat.opacity=1-Ct,ot.stars.position.copy(mn.position),ot.moon.position.set(mn.position.x-s*300,mn.position.y-r*300,mn.position.z+80),ot.moon.material.opacity=1-Ct*.8,ot.sunDisc.position.set(mn.position.x+s*300,mn.position.y+r*300,mn.position.z+80),ot.sunDisc.visible=t>-.1,ot.cloudMat.color.setRGB(wt(.25,1,Ct),wt(.28,1,Ct),wt(.4,1,Ct));for(let l of ot.clouds.children)l.position.x+=i*1.5,l.position.x>240&&(l.position.x=-240);if(ot.fire){let l=1+Math.sin(Kn.elapsedTime*13)*.12+Math.sin(Kn.elapsedTime*7.3)*.1;ot.fire.flame.scale.set(1,l,1),ot.fire.flame2.scale.set(1,l*1.1,1),ot.fire.light.intensity=pn(T.pos,de.camp)<60?(1-Ct*.7)*30*l:0}ot.water.position.y=Math.sin(Kn.elapsedTime*.8)*.04,ot.herbMat&&(ot.herbMat.emissiveIntensity=.5+(1-Ct)*1.5+Math.sin(Kn.elapsedTime*3)*.2)}var Qt=new I,Zn=!0,Eh=0;function Xv(i){if(Zn){Eh+=i*.05,mn.position.set(Math.sin(Eh)*40,22,Math.cos(Eh)*40),mn.lookAt(0,4,0);return}let e=Math.min(1,i*10);Qt.x=wt(Qt.x,T.pos.x,e),Qt.z=wt(Qt.z,T.pos.z,e),Qt.y=wt(Qt.y,Math.max(T.pos.y,-.5)+1.6,e);let t=ja;ds&&ds.type==="boss"&&!ds.dead&&(t=ja*1.35);for(let o=1;o<=8;o++){let a=o/8*t,c=Qt.x+Math.sin(Hn)*Math.cos(ki)*a,l=Qt.z+Math.cos(Hn)*Math.cos(ki)*a;if(Qt.y+Math.sin(ki)*a<et(c,l)+6&&Pf.blocked(c,l)){t=Math.max(2.2,a-t/8);break}}Fa=wt(Fa,t,Math.min(1,i*(t<Fa?12:3))),t=Fa;let n=Qt.x+Math.sin(Hn)*Math.cos(ki)*t,s=Qt.z+Math.cos(Hn)*Math.cos(ki)*t,r=Qt.y+Math.sin(ki)*t;for(let o=1;o<=4;o++){let a=o/4,c=wt(Qt.x,n,a),l=wt(Qt.z,s,a),h=et(c,l)+.6,u=wt(Qt.y,r,a);u<h&&(r+=(h-u)/a)}us>0&&(n+=gt(-1,1)*us*.3,r+=gt(-1,1)*us*.3,us=Math.max(0,us-i*2)),mn.position.set(n,r,s),mn.lookAt(Qt)}var Af=Ae("hpBar"),Rf=Ae("mpBar"),$f=Ae("mini"),qe=$f.getContext("2d"),Th=0;function qv(i){Af.firstChild.style.width=(T.hp/Dn()*100).toFixed(1)+"%",Af.lastChild.textContent=`${Math.ceil(T.hp)} / ${Dn()}`,Rf.firstChild.style.width=(T.mana/yi()*100).toFixed(1)+"%",Rf.lastChild.textContent=`${Math.floor(T.mana)} / ${yi()}`,Ae("mpCost").style.display=T.mana<20?"block":"none",Ga=Math.max(0,Ga-i*2.5);let e=T.hp/Dn()<.25&&!T.dead?.35+Math.sin(Kn.elapsedTime*6)*.15:0;if(Ae("hurt").style.opacity=Math.max(Ga*.8,e).toFixed(2),Th-=i,Th>0)return;Th=.2,Ae("sGold").textContent=`\u{1F4B0} ${L.gold}`,Ae("sXp").textContent=`\u2728 ${L.xp}`,Ae("sRen").textContent=`\u2B50 ${L.renown}`,Ae("potN").textContent=L.potions,Ae("titleTxt").textContent=ec(),Ae("morality").firstChild.style.left=`calc(${(L.morality+100)/2}% - 2px)`;let t=Math.floor(L.time*24),n=Math.floor((L.time*24-t)*60);Ae("clock").textContent=`${_s?"\u{1F319}":"\u2600\uFE0F"} Dzie\u0144 ${L.day}, ${String(t).padStart(2,"0")}:${String(n).padStart(2,"0")}`;let s=Kf(),r=Ae("questTrack");if(s){let l=`<b>${s.title}</b>${s.text}`;r._h!==l&&(r.innerHTML=l,r._h=l),r.style.display="block"}else r.style.display="none";Ph-=.2;let o=Ae("target"),a=ds,c=It.find(l=>l.type==="boss"&&!l.dead&&l.state!=="idle");c&&(a=c),a&&(a===c||Ph>0)&&!a.dead?(o.style.display="block",o.className="hud"+(a.type==="boss"?" boss":""),o.firstChild.textContent=a.def.name+(a.state==="surrender"?" (poddaje si\u0119)":""),o.lastChild.firstChild.style.width=a.hp/a.maxHp*100+"%"):o.style.display="none",Yv(s)}function Yv(i){let e=$f.width,t=55;qe.save(),qe.clearRect(0,0,e,e),qe.beginPath(),qe.arc(e/2,e/2,e/2,0,Math.PI*2),qe.clip();let n=(T.pos.x-t+Ui)/2,s=(T.pos.z-t+Ui)/2;qe.drawImage(ot.minimap,n,s,t,t,0,0,e,e),_s&&(qe.fillStyle="rgba(10,20,50,0.35)",qe.fillRect(0,0,e,e));let r=(o,a)=>[((o-T.pos.x)/(t*2)+.5)*e,((a-T.pos.z)/(t*2)+.5)*e];for(let o of ms){if(!o.talk)continue;let[a,c]=r(o.pos.x,o.pos.z);qe.fillStyle="#ffe9a0",qe.beginPath(),qe.arc(a,c,4,0,7),qe.fill()}for(let o of It){if(o.dead)continue;let[a,c]=r(o.pos.x,o.pos.z);qe.fillStyle=o.type==="boss"?"#ff6a00":"#e33",qe.beginPath(),qe.arc(a,c,o.type==="boss"?7:4,0,7),qe.fill()}if(i&&i.target){let[o,a]=r(i.target.x,i.target.z),c=o-e/2,l=a-e/2,h=Math.hypot(c,l),u=e/2-12;h>u&&(o=e/2+c/h*u,a=e/2+l/h*u),qe.fillStyle="#ffd030",qe.strokeStyle="#000",qe.lineWidth=2,qe.beginPath();for(let d=0;d<10;d++){let f=d/10*Math.PI*2-Math.PI/2,g=d%2?5:11;qe.lineTo(o+Math.cos(f)*g,a+Math.sin(f)*g)}qe.closePath(),qe.fill(),qe.stroke()}qe.translate(e/2,e/2),qe.rotate(-T.yaw+Math.PI),qe.fillStyle="#fff",qe.strokeStyle="#000",qe.lineWidth=2,qe.beginPath(),qe.moveTo(0,-11),qe.lineTo(8,9),qe.lineTo(0,4),qe.lineTo(-8,9),qe.closePath(),qe.fill(),qe.stroke(),qe.restore(),qe.fillStyle="#f3e9d2",qe.font="bold 18px Georgia",qe.textAlign="center",qe.fillText("N",e/2,20)}var io=!1,fr="quests";function nc(i){io=i!==void 0?i:!io,Ae("menu").style.display=io?"flex":"none",io?(kt=!0,so()):!lo&&Ae("death").style.display!=="flex"&&(kt=!1)}Ae("menuBtn").addEventListener("click",i=>{i.stopPropagation(),as(),Zn||nc()});Ae("closeMenu").addEventListener("click",()=>nc(!1));var jv=[["quests","Zadania"],["skills","Rozw\xF3j"],["hero","Posta\u0107"],["opts","Opcje"]];function so(){let i=Ae("mTabs");i.innerHTML="";for(let[t,n]of jv){let s=document.createElement("button");s.className="btn"+(fr===t?" sel":""),s.textContent=n,s.onclick=()=>{fr=t,Qe.click(),so()},i.appendChild(s)}let e=Ae("mBody");if(e.innerHTML="",fr==="quests"){let t=Zf(),n=Kf();for(let r of t){let o=document.createElement("div");o.className="qitem"+(r.done?" done":"")+(n&&n.id===r.id?" tr":""),o.innerHTML=`<b style="color:#f0d060">${r.done?"\u2714 ":n&&n.id===r.id?"\u2605 ":""}${r.title}</b><br>${r.text}`,r.done||(o.onclick=()=>{L.tracked=r.id,Qe.click(),so()}),e.appendChild(o)}let s=document.createElement("p");s.style.opacity=.7,s.style.fontSize="12px",s.textContent="Dotknij zadania, aby je \u015Bledzi\u0107 (gwiazdka na minimapie). Inni mieszka\u0144cy te\u017C mog\u0105 mie\u0107 dla ciebie pro\u015Bby \u2014 rozmawiaj ze wszystkimi.",e.appendChild(s)}else if(fr==="skills"){e.insertAdjacentHTML("beforeend",`<p>Do\u015Bwiadczenie do wydania: <b style="color:#9ef">\u2728 ${L.xp}</b></p>`);for(let t of["sila","magia","zrecznosc"]){let n=L.stats[t],s=Ky[n],r=document.createElement("div");r.className="stat",r.innerHTML=`<div style="min-width:90px"><b>${pf[t].n}</b><div class="pips">${"\u25C6".repeat(n)}${"\u25C7".repeat(5-n)}</div></div><div class="d">${pf[t].d}</div>`;let o=document.createElement("button");o.className="btn",n>=5?(o.textContent="MAX",o.disabled=!0):(o.textContent=`Ulepsz (${s} \u2728)`,o.disabled=L.xp<s,o.onclick=()=>{L.xp<s||(L.xp-=s,L.stats[t]++,Qe.level(),$n(),T.hp=Dn(),en(T.pos.x,T.pos.y+1,T.pos.z,9367807,20,3,5,1),Bt(),so())}),r.appendChild(o),e.appendChild(r)}e.insertAdjacentHTML("beforeend",'<p style="font-size:12px;opacity:.7">Twoje cia\u0142o zmienia si\u0119 wraz z rozwojem: si\u0142a poszerza barki, magia roz\u015Bwietla ubranie b\u0142\u0119kitem.</p>')}else if(fr==="hero"){let t=L.morality;e.innerHTML=`<h3>${ec()}</h3>
      <p>Moralno\u015B\u0107: <b>${t>0?"+":""}${t}</b> ${t>=40?"(nad g\u0142ow\u0105 l\u015Bni aureola)":t<=-40?"(wyros\u0142y ci rogi)":""}<br>
      S\u0142awa: <b>${L.renown}</b> \xB7 Pokonani wrogowie: <b>${L.kills}</b> \xB7 Blizny: <b>${L.scars}</b></p>
      <h3>Ekwipunek</h3>
      <p>\u2694 ${qa[L.sword].name} (obra\u017Cenia ${qa[L.sword].dmg+5*L.stats.sila})<br>
      \u{1F6E1} ${Ya[L.armor].name} (redukcja ${Math.round((1-Ya[L.armor].mul)*100)}%)<br>
      \u{1F9EA} Mikstury zdrowia: ${L.potions}<br>\u{1F33F} Ksi\u0119\u017Cycowe Ziele: ${L.herbsHave}<br>
      \u{1F3E0} ${L.houseOwned?"Dom na Wzg\xF3rzu (tw\xF3j)":"Brak domu \u2014 Dom na Wzg\xF3rzu (NE od wioski) jest na sprzeda\u017C"}<br>
      \u{1F4B0} ${L.gold} z\u0142</p>
      <p style="font-size:12px;opacity:.7">Wybory moralne zmieniaj\u0105 wygl\u0105d postaci i to, jak reaguj\u0105 na ciebie mieszka\u0144cy.</p>`}else if(fr==="opts"){e.innerHTML=`<h3>Grafika</h3><div id="qBtns" style="display:flex;gap:8px;flex-wrap:wrap"></div>
      <p style="font-size:12px;opacity:.7">Zmiana jako\u015Bci prze\u0142aduje gr\u0119 (post\u0119p jest zapisywany).</p>
      <h3>Autorzy modeli</h3><p style="font-size:12px;opacity:.8">Postacie, stroje i animacje ruchu: Quaternius (CC0). Lis i wilki: model \u201EFox\u201D \u2014 tomkranis, AsoboStudio, scurest (CC BY 4.0). Animacje walki mieczem wed\u0142ug szko\u0142y Liechtenauera, posta\u0107 bohatera i miecz: autorskie.</p><h3>D\u017Awi\u0119k</h3><div id="sBtns"></div><h3>Zapis</h3><div id="saveBtns" style="display:flex;gap:8px;flex-wrap:wrap"></div>`;for(let[r,o]of[["low","Niska (szybka)"],["medium","\u015Arednia"],["high","Wysoka"]]){let a=document.createElement("button");a.className="btn"+(Gn===r?" sel":""),a.textContent=o,a.onclick=()=>{Bt();try{localStorage.setItem("kw_quality",r)}catch{}location.reload()},Ae("qBtns").appendChild(a)}let t=document.createElement("button");t.className="btn",t.textContent=ls?"Muzyka: W\u0141":"Muzyka: WY\u0141",t.onclick=()=>{ls=!ls,Gl(ls);try{localStorage.setItem("kw_music",ls?"1":"0")}catch{}so()},Ae("sBtns").appendChild(t);let n=document.createElement("button");n.className="btn",n.textContent="Zapisz gr\u0119",n.onclick=()=>{Bt(),st("Gra zapisana.","g")};let s=document.createElement("button");s.className="btn evil",s.textContent="Nowa gra (usu\u0144 zapis)",s.onclick=()=>{if(confirm("Na pewno usun\u0105\u0107 zapis i zacz\u0105\u0107 od nowa?")){try{localStorage.removeItem(Ka)}catch{}location.reload()}},Ae("saveBtns").appendChild(n),Ae("saveBtns").appendChild(s)}}window.onAndroidBack=()=>{if(!Zn){if(lo){jf();return}nc()}};function Bt(){if(!Zn){L.pos={x:T.pos.x,z:T.pos.z},L.hp=T.hp,L.mana=T.mana;try{localStorage.setItem(Ka,JSON.stringify(L))}catch{}}}window.saveGame=Bt;function Zv(){try{let i=localStorage.getItem(Ka);if(!i)return!1;let e=JSON.parse(i),t=Dh();return L={...t,...e,stats:{...t.stats,...e.stats},quests:{...t.quests,...e.quests},flags:{...t.flags,...e.flags}},!0}catch{return!1}}function Kv(){var i;T.pos.set(L.pos.x,et(L.pos.x,L.pos.z),L.pos.z),T.pos.y<-.9&&T.pos.set(0,2.5,9),T.hp=Hi(L.hp||Dn(),1,Dn()),T.mana=Hi((i=L.mana)!=null?i:yi(),0,yi()),zt.pos.set(T.pos.x+2,0,T.pos.z+2),zt.pos.y=et(zt.pos.x,zt.pos.z);for(let e of ot.herbs)L.herbTaken[e.i]&&(e.group.visible=!1);for(let e of ot.chests)L.chestOpened[e.i]&&(e.lid.rotation.x=-1.9);L.flags.bossDead&&ot.runeMat&&ot.runeMat.emissive.set(4235519),Hn=0,T.yaw=Math.PI,$n()}setInterval(()=>{!Zn&&!T.dead&&Bt()},3e4);document.addEventListener("visibilitychange",()=>{document.hidden&&Bt()});function $v(){let i=L.morality,e=i>=30?"Rycerz Popio\u0142u rozsypa\u0142 si\u0119 w py\u0142, a nad ruinami po raz pierwszy od stu lat wzesz\u0142o czyste s\u0142o\u0144ce. Ludzie Brzeziny wiwatuj\u0105 na twoj\u0105 cze\u015B\u0107, a dzieci przynosz\u0105 ci wianki z wrzosu. Twoja legenda b\u0119dzie opowiadana przy ogniskach jako historia \u015Bwiat\u0142a.":i<=-30?"Rycerz Popio\u0142u pad\u0142\u2026 ale gdy podnosisz jego p\u0142on\u0105cy miecz, czujesz, jak ciemno\u015B\u0107 rozpoznaje w tobie swojego. Ludzie Brzeziny k\u0142aniaj\u0105 si\u0119 nisko \u2014 bardziej ze strachu ni\u017C z wdzi\u0119czno\u015Bci. Nowy w\u0142adca tych ziem w\u0142a\u015Bnie si\u0119 narodzi\u0142.":"Rycerz Popio\u0142u zosta\u0142 pokonany. Ludzie Brzeziny dzi\u0119kuj\u0105 ci \u2014 cho\u0107 nie wiedz\u0105 jeszcze, czy jeste\u015B bohaterem, czy tylko najemnikiem, kt\xF3ry dobrze wykona\u0142 robot\u0119. Twoja historia wci\u0105\u017C si\u0119 pisze.";Ae("vText").innerHTML=`${e}<br><br><b style="color:#f0d060">Tytu\u0142: ${ec()}</b><br>S\u0142awa: ${L.renown} \xB7 Pokonani wrogowie: ${L.kills} \xB7 Dzie\u0144 ${L.day}<br><br><span style="font-size:13px;opacity:.8">\u015Awiat pozostaje otwarty \u2014 doko\u0144cz zadania, kup dom, zbierz skarby.</span>`,Ae("victory").style.display="flex",kt=!0}Ae("bVic").addEventListener("click",()=>{Ae("victory").style.display="none",kt=!1,st("Wr\xF3\u0107 do So\u0142tysa Bogumi\u0142a po nagrod\u0119.","q")});Ae("bRespawn").addEventListener("click",av);var Jv=(()=>{try{return!!localStorage.getItem(Ka)}catch{return!1}})();Jv&&(Ae("bContinue").style.display="inline-block");function Jf(i){for(let e of["bAtk","bMag","bRoll","bPot","joy","menuBtn","hudTL","hudTR"])Ae(e).style.visibility=i?"hidden":"visible"}Jf(!0);function Qf(){Zn=!1,kt=!1,Jf(!1),Hn=T.yaw+Math.PI,Qt.copy(T.pos),Hn=0,st("Zapis automatyczny jest w\u0142\u0105czony.","",2.5)}Ae("bContinue").addEventListener("click",()=>{as(),Zv()&&Kv(),Ae("start").style.display="none",Qf(),st(`Witaj z powrotem, ${ec().toLowerCase()}!`,"g")});Ae("bNew").addEventListener("click",()=>{as(),L=Dh(),T.pos.set(0,2.5,9),T.hp=Dn(),T.mana=yi(),$n(),Ae("start").style.display="none",Ae("intro").style.display="flex"});Ae("bBegin").addEventListener("click",()=>{Ae("intro").style.display="none",T.yaw=Math.PI,Qf(),Hn=0,T.yaw=Math.PI,Bt(),st("Porozmawiaj z So\u0142tysem przy studni.","q",4)});$n();var Kn=new va;function ep(){requestAnimationFrame(ep);let i=Math.min(Kn.getDelta(),.05);if(!Zn&&!kt){let t=L.time;L.time+=i/Zy,L.time>=1&&(L.time-=1,L.day++,Yf()),xv(i);for(let n of It)n.update(i);for(let n=It.length-1;n>=0;n--)It[n].remove&&(St.remove(It[n].mesh.group),ds===It[n]&&(ds=null),It.splice(n,1));_v(i),mv(i),dv(i),Ov(i),ps.visible&&Ja&&(Nf.opacity=.35+Math.sin(Kn.elapsedTime*20)*.2)}else Zn&&(L.time=.36+Math.sin(Kn.elapsedTime*.02)*.01);(!kt||Zn)&&bv(i),Qy(i),Wv(i),Xv(i),tv(i),Zn||(qv(i),Sv());let e=It.some(t=>!t.dead&&(t.state==="chase"||t.state==="windup"||t.state==="recover"));nf(performance.now()/1e3,e?"combat":_s?"night":"day"),_r.render(St,mn)}ep();window.__dbg={refresh:()=>$n(),heroM:()=>it,P:T,S:()=>L,enemies:It,npcs:ms,W:ot,LOC:de,spawnEnemy:mr,setS:i=>{L=i},talk:i=>ms.find(e=>e.id===i).talk()};})();
/*! Bundled license information:

three/build/three.module.js:
  (**
   * @license
   * Copyright 2010-2023 Three.js Authors
   * SPDX-License-Identifier: MIT
   *)
*/

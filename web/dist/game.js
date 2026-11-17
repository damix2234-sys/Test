(()=>{var gc="160";var Vu=0,el=1,Wu=2;var va=1,Xu=2,Hn=3,li=0,on=1,un=2;var ai=0,us=1,nl=2,il=3,sl=4,qu=5,Ti=100,Yu=101,Zu=102,rl=103,al=104,$u=200,Ju=201,ju=202,Ku=203,zo=204,Do=205,Qu=206,td=207,ed=208,nd=209,id=210,sd=211,rd=212,ad=213,od=214,cd=0,ld=1,hd=2,Hr=3,ud=4,dd=5,fd=6,pd=7,Ma=0,md=1,gd=2,oi=0,xd=1,yd=2,_d=3,vd=4,Md=5,bd=6;var Ih=300,ps=301,ms=302,Uo=303,No=304,ba=306,Oo=1e3,bn=1001,Fo=1002,en=1003,ol=1004;var Qa=1005;var gn=1006,wd=1007;var Xs=1008;var ci=1009,Sd=1010,Ed=1011,xc=1012,Lh=1013,si=1014,ri=1015,qs=1016,zh=1017,Dh=1018,Ri=1020,Td=1021,wn=1023,Ad=1024,Rd=1025,Ci=1026,gs=1027,Cd=1028,Uh=1029,Pd=1030,Nh=1031,Oh=1033,to=33776,eo=33777,no=33778,io=33779,cl=35840,ll=35841,hl=35842,ul=35843,Fh=36196,dl=37492,fl=37496,pl=37808,ml=37809,gl=37810,xl=37811,yl=37812,_l=37813,vl=37814,Ml=37815,bl=37816,wl=37817,Sl=37818,El=37819,Tl=37820,Al=37821,so=36492,Rl=36494,Cl=36495,Id=36283,Pl=36284,Il=36285,Ll=36286;var Gr=2300,Vr=2301,ro=2302,zl=2400,Dl=2401,Ul=2402;var Bh=3e3,Pi=3001,Ld=3200,zd=3201,yc=0,Dd=1,xn="",Ve="srgb",Wn="srgb-linear",_c="display-p3",wa="display-p3-linear",Wr="linear",me="srgb",Xr="rec709",qr="p3";var Xi=7680;var Nl=519,Ud=512,Nd=513,Od=514,kh=515,Fd=516,Bd=517,kd=518,Hd=519,Ol=35044;var Fl="300 es",Bo=1035,Vn=2e3,Yr=2001,hi=class{addEventListener(t,e){this._listeners===void 0&&(this._listeners={});let i=this._listeners;i[t]===void 0&&(i[t]=[]),i[t].indexOf(e)===-1&&i[t].push(e)}hasEventListener(t,e){if(this._listeners===void 0)return!1;let i=this._listeners;return i[t]!==void 0&&i[t].indexOf(e)!==-1}removeEventListener(t,e){if(this._listeners===void 0)return;let s=this._listeners[t];if(s!==void 0){let r=s.indexOf(e);r!==-1&&s.splice(r,1)}}dispatchEvent(t){if(this._listeners===void 0)return;let i=this._listeners[t.type];if(i!==void 0){t.target=this;let s=i.slice(0);for(let r=0,o=s.length;r<o;r++)s[r].call(this,t);t.target=null}}},Ye=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"];var ao=Math.PI/180,ko=180/Math.PI;function nr(){let n=Math.random()*4294967295|0,t=Math.random()*4294967295|0,e=Math.random()*4294967295|0,i=Math.random()*4294967295|0;return(Ye[n&255]+Ye[n>>8&255]+Ye[n>>16&255]+Ye[n>>24&255]+"-"+Ye[t&255]+Ye[t>>8&255]+"-"+Ye[t>>16&15|64]+Ye[t>>24&255]+"-"+Ye[e&63|128]+Ye[e>>8&255]+"-"+Ye[e>>16&255]+Ye[e>>24&255]+Ye[i&255]+Ye[i>>8&255]+Ye[i>>16&255]+Ye[i>>24&255]).toLowerCase()}function an(n,t,e){return Math.max(t,Math.min(e,n))}function Gd(n,t){return(n%t+t)%t}function oo(n,t,e){return(1-e)*n+e*t}function Bl(n){return(n&n-1)===0&&n!==0}function Ho(n){return Math.pow(2,Math.floor(Math.log(n)/Math.LN2))}function Us(n,t){switch(t.constructor){case Float32Array:return n;case Uint32Array:return n/4294967295;case Uint16Array:return n/65535;case Uint8Array:return n/255;case Int32Array:return Math.max(n/2147483647,-1);case Int16Array:return Math.max(n/32767,-1);case Int8Array:return Math.max(n/127,-1);default:throw new Error("Invalid component type.")}}function rn(n,t){switch(t.constructor){case Float32Array:return n;case Uint32Array:return Math.round(n*4294967295);case Uint16Array:return Math.round(n*65535);case Uint8Array:return Math.round(n*255);case Int32Array:return Math.round(n*2147483647);case Int16Array:return Math.round(n*32767);case Int8Array:return Math.round(n*127);default:throw new Error("Invalid component type.")}}var Jt=class n{constructor(t=0,e=0){n.prototype.isVector2=!0,this.x=t,this.y=e}get width(){return this.x}set width(t){this.x=t}get height(){return this.y}set height(t){this.y=t}set(t,e){return this.x=t,this.y=e,this}setScalar(t){return this.x=t,this.y=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y)}copy(t){return this.x=t.x,this.y=t.y,this}add(t){return this.x+=t.x,this.y+=t.y,this}addScalar(t){return this.x+=t,this.y+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this}subScalar(t){return this.x-=t,this.y-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this}multiply(t){return this.x*=t.x,this.y*=t.y,this}multiplyScalar(t){return this.x*=t,this.y*=t,this}divide(t){return this.x/=t.x,this.y/=t.y,this}divideScalar(t){return this.multiplyScalar(1/t)}applyMatrix3(t){let e=this.x,i=this.y,s=t.elements;return this.x=s[0]*e+s[3]*i+s[6],this.y=s[1]*e+s[4]*i+s[7],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this}clamp(t,e){return this.x=Math.max(t.x,Math.min(e.x,this.x)),this.y=Math.max(t.y,Math.min(e.y,this.y)),this}clampScalar(t,e){return this.x=Math.max(t,Math.min(e,this.x)),this.y=Math.max(t,Math.min(e,this.y)),this}clampLength(t,e){let i=this.length();return this.divideScalar(i||1).multiplyScalar(Math.max(t,Math.min(e,i)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(t){return this.x*t.x+this.y*t.y}cross(t){return this.x*t.y-this.y*t.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(t){let e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;let i=this.dot(t)/e;return Math.acos(an(i,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){let e=this.x-t.x,i=this.y-t.y;return e*e+i*i}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this}lerpVectors(t,e,i){return this.x=t.x+(e.x-t.x)*i,this.y=t.y+(e.y-t.y)*i,this}equals(t){return t.x===this.x&&t.y===this.y}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this}rotateAround(t,e){let i=Math.cos(e),s=Math.sin(e),r=this.x-t.x,o=this.y-t.y;return this.x=r*i-o*s+t.x,this.y=r*s+o*i+t.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}},$t=class n{constructor(t,e,i,s,r,o,a,c,h){n.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],t!==void 0&&this.set(t,e,i,s,r,o,a,c,h)}set(t,e,i,s,r,o,a,c,h){let l=this.elements;return l[0]=t,l[1]=s,l[2]=a,l[3]=e,l[4]=r,l[5]=c,l[6]=i,l[7]=o,l[8]=h,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(t){let e=this.elements,i=t.elements;return e[0]=i[0],e[1]=i[1],e[2]=i[2],e[3]=i[3],e[4]=i[4],e[5]=i[5],e[6]=i[6],e[7]=i[7],e[8]=i[8],this}extractBasis(t,e,i){return t.setFromMatrix3Column(this,0),e.setFromMatrix3Column(this,1),i.setFromMatrix3Column(this,2),this}setFromMatrix4(t){let e=t.elements;return this.set(e[0],e[4],e[8],e[1],e[5],e[9],e[2],e[6],e[10]),this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){let i=t.elements,s=e.elements,r=this.elements,o=i[0],a=i[3],c=i[6],h=i[1],l=i[4],u=i[7],f=i[2],p=i[5],g=i[8],x=s[0],m=s[3],d=s[6],M=s[1],y=s[4],E=s[7],I=s[2],A=s[5],R=s[8];return r[0]=o*x+a*M+c*I,r[3]=o*m+a*y+c*A,r[6]=o*d+a*E+c*R,r[1]=h*x+l*M+u*I,r[4]=h*m+l*y+u*A,r[7]=h*d+l*E+u*R,r[2]=f*x+p*M+g*I,r[5]=f*m+p*y+g*A,r[8]=f*d+p*E+g*R,this}multiplyScalar(t){let e=this.elements;return e[0]*=t,e[3]*=t,e[6]*=t,e[1]*=t,e[4]*=t,e[7]*=t,e[2]*=t,e[5]*=t,e[8]*=t,this}determinant(){let t=this.elements,e=t[0],i=t[1],s=t[2],r=t[3],o=t[4],a=t[5],c=t[6],h=t[7],l=t[8];return e*o*l-e*a*h-i*r*l+i*a*c+s*r*h-s*o*c}invert(){let t=this.elements,e=t[0],i=t[1],s=t[2],r=t[3],o=t[4],a=t[5],c=t[6],h=t[7],l=t[8],u=l*o-a*h,f=a*c-l*r,p=h*r-o*c,g=e*u+i*f+s*p;if(g===0)return this.set(0,0,0,0,0,0,0,0,0);let x=1/g;return t[0]=u*x,t[1]=(s*h-l*i)*x,t[2]=(a*i-s*o)*x,t[3]=f*x,t[4]=(l*e-s*c)*x,t[5]=(s*r-a*e)*x,t[6]=p*x,t[7]=(i*c-h*e)*x,t[8]=(o*e-i*r)*x,this}transpose(){let t,e=this.elements;return t=e[1],e[1]=e[3],e[3]=t,t=e[2],e[2]=e[6],e[6]=t,t=e[5],e[5]=e[7],e[7]=t,this}getNormalMatrix(t){return this.setFromMatrix4(t).invert().transpose()}transposeIntoArray(t){let e=this.elements;return t[0]=e[0],t[1]=e[3],t[2]=e[6],t[3]=e[1],t[4]=e[4],t[5]=e[7],t[6]=e[2],t[7]=e[5],t[8]=e[8],this}setUvTransform(t,e,i,s,r,o,a){let c=Math.cos(r),h=Math.sin(r);return this.set(i*c,i*h,-i*(c*o+h*a)+o+t,-s*h,s*c,-s*(-h*o+c*a)+a+e,0,0,1),this}scale(t,e){return this.premultiply(co.makeScale(t,e)),this}rotate(t){return this.premultiply(co.makeRotation(-t)),this}translate(t,e){return this.premultiply(co.makeTranslation(t,e)),this}makeTranslation(t,e){return t.isVector2?this.set(1,0,t.x,0,1,t.y,0,0,1):this.set(1,0,t,0,1,e,0,0,1),this}makeRotation(t){let e=Math.cos(t),i=Math.sin(t);return this.set(e,-i,0,i,e,0,0,0,1),this}makeScale(t,e){return this.set(t,0,0,0,e,0,0,0,1),this}equals(t){let e=this.elements,i=t.elements;for(let s=0;s<9;s++)if(e[s]!==i[s])return!1;return!0}fromArray(t,e=0){for(let i=0;i<9;i++)this.elements[i]=t[i+e];return this}toArray(t=[],e=0){let i=this.elements;return t[e]=i[0],t[e+1]=i[1],t[e+2]=i[2],t[e+3]=i[3],t[e+4]=i[4],t[e+5]=i[5],t[e+6]=i[6],t[e+7]=i[7],t[e+8]=i[8],t}clone(){return new this.constructor().fromArray(this.elements)}},co=new $t;function Hh(n){for(let t=n.length-1;t>=0;--t)if(n[t]>=65535)return!0;return!1}function Zr(n){return document.createElementNS("http://www.w3.org/1999/xhtml",n)}function Vd(){let n=Zr("canvas");return n.style.display="block",n}var kl={};function Vs(n){n in kl||(kl[n]=!0,console.warn(n))}var Hl=new $t().set(.8224621,.177538,0,.0331941,.9668058,0,.0170827,.0723974,.9105199),Gl=new $t().set(1.2249401,-.2249404,0,-.0420569,1.0420571,0,-.0196376,-.0786361,1.0982735),mr={[Wn]:{transfer:Wr,primaries:Xr,toReference:n=>n,fromReference:n=>n},[Ve]:{transfer:me,primaries:Xr,toReference:n=>n.convertSRGBToLinear(),fromReference:n=>n.convertLinearToSRGB()},[wa]:{transfer:Wr,primaries:qr,toReference:n=>n.applyMatrix3(Gl),fromReference:n=>n.applyMatrix3(Hl)},[_c]:{transfer:me,primaries:qr,toReference:n=>n.convertSRGBToLinear().applyMatrix3(Gl),fromReference:n=>n.applyMatrix3(Hl).convertLinearToSRGB()}},Wd=new Set([Wn,wa]),ae={enabled:!0,_workingColorSpace:Wn,get workingColorSpace(){return this._workingColorSpace},set workingColorSpace(n){if(!Wd.has(n))throw new Error(`Unsupported working color space, "${n}".`);this._workingColorSpace=n},convert:function(n,t,e){if(this.enabled===!1||t===e||!t||!e)return n;let i=mr[t].toReference,s=mr[e].fromReference;return s(i(n))},fromWorkingColorSpace:function(n,t){return this.convert(n,this._workingColorSpace,t)},toWorkingColorSpace:function(n,t){return this.convert(n,t,this._workingColorSpace)},getPrimaries:function(n){return mr[n].primaries},getTransfer:function(n){return n===xn?Wr:mr[n].transfer}};function ds(n){return n<.04045?n*.0773993808:Math.pow(n*.9478672986+.0521327014,2.4)}function lo(n){return n<.0031308?n*12.92:1.055*Math.pow(n,.41666)-.055}var qi,$r=class{static getDataURL(t){if(/^data:/i.test(t.src)||typeof HTMLCanvasElement=="undefined")return t.src;let e;if(t instanceof HTMLCanvasElement)e=t;else{qi===void 0&&(qi=Zr("canvas")),qi.width=t.width,qi.height=t.height;let i=qi.getContext("2d");t instanceof ImageData?i.putImageData(t,0,0):i.drawImage(t,0,0,t.width,t.height),e=qi}return e.width>2048||e.height>2048?(console.warn("THREE.ImageUtils.getDataURL: Image converted to jpg for performance reasons",t),e.toDataURL("image/jpeg",.6)):e.toDataURL("image/png")}static sRGBToLinear(t){if(typeof HTMLImageElement!="undefined"&&t instanceof HTMLImageElement||typeof HTMLCanvasElement!="undefined"&&t instanceof HTMLCanvasElement||typeof ImageBitmap!="undefined"&&t instanceof ImageBitmap){let e=Zr("canvas");e.width=t.width,e.height=t.height;let i=e.getContext("2d");i.drawImage(t,0,0,t.width,t.height);let s=i.getImageData(0,0,t.width,t.height),r=s.data;for(let o=0;o<r.length;o++)r[o]=ds(r[o]/255)*255;return i.putImageData(s,0,0),e}else if(t.data){let e=t.data.slice(0);for(let i=0;i<e.length;i++)e instanceof Uint8Array||e instanceof Uint8ClampedArray?e[i]=Math.floor(ds(e[i]/255)*255):e[i]=ds(e[i]);return{data:e,width:t.width,height:t.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),t}},Xd=0,Jr=class{constructor(t=null){this.isSource=!0,Object.defineProperty(this,"id",{value:Xd++}),this.uuid=nr(),this.data=t,this.version=0}set needsUpdate(t){t===!0&&this.version++}toJSON(t){let e=t===void 0||typeof t=="string";if(!e&&t.images[this.uuid]!==void 0)return t.images[this.uuid];let i={uuid:this.uuid,url:""},s=this.data;if(s!==null){let r;if(Array.isArray(s)){r=[];for(let o=0,a=s.length;o<a;o++)s[o].isDataTexture?r.push(ho(s[o].image)):r.push(ho(s[o]))}else r=ho(s);i.url=r}return e||(t.images[this.uuid]=i),i}};function ho(n){return typeof HTMLImageElement!="undefined"&&n instanceof HTMLImageElement||typeof HTMLCanvasElement!="undefined"&&n instanceof HTMLCanvasElement||typeof ImageBitmap!="undefined"&&n instanceof ImageBitmap?$r.getDataURL(n):n.data?{data:Array.from(n.data),width:n.width,height:n.height,type:n.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}var qd=0,Sn=class n extends hi{constructor(t=n.DEFAULT_IMAGE,e=n.DEFAULT_MAPPING,i=bn,s=bn,r=gn,o=Xs,a=wn,c=ci,h=n.DEFAULT_ANISOTROPY,l=xn){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:qd++}),this.uuid=nr(),this.name="",this.source=new Jr(t),this.mipmaps=[],this.mapping=e,this.channel=0,this.wrapS=i,this.wrapT=s,this.magFilter=r,this.minFilter=o,this.anisotropy=h,this.format=a,this.internalFormat=null,this.type=c,this.offset=new Jt(0,0),this.repeat=new Jt(1,1),this.center=new Jt(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new $t,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,typeof l=="string"?this.colorSpace=l:(Vs("THREE.Texture: Property .encoding has been replaced by .colorSpace."),this.colorSpace=l===Pi?Ve:xn),this.userData={},this.version=0,this.onUpdate=null,this.isRenderTargetTexture=!1,this.needsPMREMUpdate=!1}get image(){return this.source.data}set image(t=null){this.source.data=t}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}clone(){return new this.constructor().copy(this)}copy(t){return this.name=t.name,this.source=t.source,this.mipmaps=t.mipmaps.slice(0),this.mapping=t.mapping,this.channel=t.channel,this.wrapS=t.wrapS,this.wrapT=t.wrapT,this.magFilter=t.magFilter,this.minFilter=t.minFilter,this.anisotropy=t.anisotropy,this.format=t.format,this.internalFormat=t.internalFormat,this.type=t.type,this.offset.copy(t.offset),this.repeat.copy(t.repeat),this.center.copy(t.center),this.rotation=t.rotation,this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrix.copy(t.matrix),this.generateMipmaps=t.generateMipmaps,this.premultiplyAlpha=t.premultiplyAlpha,this.flipY=t.flipY,this.unpackAlignment=t.unpackAlignment,this.colorSpace=t.colorSpace,this.userData=JSON.parse(JSON.stringify(t.userData)),this.needsUpdate=!0,this}toJSON(t){let e=t===void 0||typeof t=="string";if(!e&&t.textures[this.uuid]!==void 0)return t.textures[this.uuid];let i={metadata:{version:4.6,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(t).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(i.userData=this.userData),e||(t.textures[this.uuid]=i),i}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(t){if(this.mapping!==Ih)return t;if(t.applyMatrix3(this.matrix),t.x<0||t.x>1)switch(this.wrapS){case Oo:t.x=t.x-Math.floor(t.x);break;case bn:t.x=t.x<0?0:1;break;case Fo:Math.abs(Math.floor(t.x)%2)===1?t.x=Math.ceil(t.x)-t.x:t.x=t.x-Math.floor(t.x);break}if(t.y<0||t.y>1)switch(this.wrapT){case Oo:t.y=t.y-Math.floor(t.y);break;case bn:t.y=t.y<0?0:1;break;case Fo:Math.abs(Math.floor(t.y)%2)===1?t.y=Math.ceil(t.y)-t.y:t.y=t.y-Math.floor(t.y);break}return this.flipY&&(t.y=1-t.y),t}set needsUpdate(t){t===!0&&(this.version++,this.source.needsUpdate=!0)}get encoding(){return Vs("THREE.Texture: Property .encoding has been replaced by .colorSpace."),this.colorSpace===Ve?Pi:Bh}set encoding(t){Vs("THREE.Texture: Property .encoding has been replaced by .colorSpace."),this.colorSpace=t===Pi?Ve:xn}};Sn.DEFAULT_IMAGE=null;Sn.DEFAULT_MAPPING=Ih;Sn.DEFAULT_ANISOTROPY=1;var ye=class n{constructor(t=0,e=0,i=0,s=1){n.prototype.isVector4=!0,this.x=t,this.y=e,this.z=i,this.w=s}get width(){return this.z}set width(t){this.z=t}get height(){return this.w}set height(t){this.w=t}set(t,e,i,s){return this.x=t,this.y=e,this.z=i,this.w=s,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this.w=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setW(t){return this.w=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;case 3:this.w=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this.w=t.w!==void 0?t.w:1,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this.w+=t.w,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this.w+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this.w=t.w+e.w,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this.w+=t.w*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this.w-=t.w,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this.w-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this.w=t.w-e.w,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this.w*=t.w,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this.w*=t,this}applyMatrix4(t){let e=this.x,i=this.y,s=this.z,r=this.w,o=t.elements;return this.x=o[0]*e+o[4]*i+o[8]*s+o[12]*r,this.y=o[1]*e+o[5]*i+o[9]*s+o[13]*r,this.z=o[2]*e+o[6]*i+o[10]*s+o[14]*r,this.w=o[3]*e+o[7]*i+o[11]*s+o[15]*r,this}divideScalar(t){return this.multiplyScalar(1/t)}setAxisAngleFromQuaternion(t){this.w=2*Math.acos(t.w);let e=Math.sqrt(1-t.w*t.w);return e<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=t.x/e,this.y=t.y/e,this.z=t.z/e),this}setAxisAngleFromRotationMatrix(t){let e,i,s,r,c=t.elements,h=c[0],l=c[4],u=c[8],f=c[1],p=c[5],g=c[9],x=c[2],m=c[6],d=c[10];if(Math.abs(l-f)<.01&&Math.abs(u-x)<.01&&Math.abs(g-m)<.01){if(Math.abs(l+f)<.1&&Math.abs(u+x)<.1&&Math.abs(g+m)<.1&&Math.abs(h+p+d-3)<.1)return this.set(1,0,0,0),this;e=Math.PI;let y=(h+1)/2,E=(p+1)/2,I=(d+1)/2,A=(l+f)/4,R=(u+x)/4,k=(g+m)/4;return y>E&&y>I?y<.01?(i=0,s=.707106781,r=.707106781):(i=Math.sqrt(y),s=A/i,r=R/i):E>I?E<.01?(i=.707106781,s=0,r=.707106781):(s=Math.sqrt(E),i=A/s,r=k/s):I<.01?(i=.707106781,s=.707106781,r=0):(r=Math.sqrt(I),i=R/r,s=k/r),this.set(i,s,r,e),this}let M=Math.sqrt((m-g)*(m-g)+(u-x)*(u-x)+(f-l)*(f-l));return Math.abs(M)<.001&&(M=1),this.x=(m-g)/M,this.y=(u-x)/M,this.z=(f-l)/M,this.w=Math.acos((h+p+d-1)/2),this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this.w=Math.min(this.w,t.w),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this.w=Math.max(this.w,t.w),this}clamp(t,e){return this.x=Math.max(t.x,Math.min(e.x,this.x)),this.y=Math.max(t.y,Math.min(e.y,this.y)),this.z=Math.max(t.z,Math.min(e.z,this.z)),this.w=Math.max(t.w,Math.min(e.w,this.w)),this}clampScalar(t,e){return this.x=Math.max(t,Math.min(e,this.x)),this.y=Math.max(t,Math.min(e,this.y)),this.z=Math.max(t,Math.min(e,this.z)),this.w=Math.max(t,Math.min(e,this.w)),this}clampLength(t,e){let i=this.length();return this.divideScalar(i||1).multiplyScalar(Math.max(t,Math.min(e,i)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z+this.w*t.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this.w+=(t.w-this.w)*e,this}lerpVectors(t,e,i){return this.x=t.x+(e.x-t.x)*i,this.y=t.y+(e.y-t.y)*i,this.z=t.z+(e.z-t.z)*i,this.w=t.w+(e.w-t.w)*i,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z&&t.w===this.w}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this.w=t[e+3],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t[e+3]=this.w,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this.w=t.getW(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}},Go=class extends hi{constructor(t=1,e=1,i={}){super(),this.isRenderTarget=!0,this.width=t,this.height=e,this.depth=1,this.scissor=new ye(0,0,t,e),this.scissorTest=!1,this.viewport=new ye(0,0,t,e);let s={width:t,height:e,depth:1};i.encoding!==void 0&&(Vs("THREE.WebGLRenderTarget: option.encoding has been replaced by option.colorSpace."),i.colorSpace=i.encoding===Pi?Ve:xn),i=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:gn,depthBuffer:!0,stencilBuffer:!1,depthTexture:null,samples:0},i),this.texture=new Sn(s,i.mapping,i.wrapS,i.wrapT,i.magFilter,i.minFilter,i.format,i.type,i.anisotropy,i.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.flipY=!1,this.texture.generateMipmaps=i.generateMipmaps,this.texture.internalFormat=i.internalFormat,this.depthBuffer=i.depthBuffer,this.stencilBuffer=i.stencilBuffer,this.depthTexture=i.depthTexture,this.samples=i.samples}setSize(t,e,i=1){(this.width!==t||this.height!==e||this.depth!==i)&&(this.width=t,this.height=e,this.depth=i,this.texture.image.width=t,this.texture.image.height=e,this.texture.image.depth=i,this.dispose()),this.viewport.set(0,0,t,e),this.scissor.set(0,0,t,e)}clone(){return new this.constructor().copy(this)}copy(t){this.width=t.width,this.height=t.height,this.depth=t.depth,this.scissor.copy(t.scissor),this.scissorTest=t.scissorTest,this.viewport.copy(t.viewport),this.texture=t.texture.clone(),this.texture.isRenderTargetTexture=!0;let e=Object.assign({},t.texture.image);return this.texture.source=new Jr(e),this.depthBuffer=t.depthBuffer,this.stencilBuffer=t.stencilBuffer,t.depthTexture!==null&&(this.depthTexture=t.depthTexture.clone()),this.samples=t.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}},Xn=class extends Go{constructor(t=1,e=1,i={}){super(t,e,i),this.isWebGLRenderTarget=!0}},jr=class extends Sn{constructor(t=null,e=1,i=1,s=1){super(null),this.isDataArrayTexture=!0,this.image={data:t,width:e,height:i,depth:s},this.magFilter=en,this.minFilter=en,this.wrapR=bn,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}};var Vo=class extends Sn{constructor(t=null,e=1,i=1,s=1){super(null),this.isData3DTexture=!0,this.image={data:t,width:e,height:i,depth:s},this.magFilter=en,this.minFilter=en,this.wrapR=bn,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}};var ui=class{constructor(t=0,e=0,i=0,s=1){this.isQuaternion=!0,this._x=t,this._y=e,this._z=i,this._w=s}static slerpFlat(t,e,i,s,r,o,a){let c=i[s+0],h=i[s+1],l=i[s+2],u=i[s+3],f=r[o+0],p=r[o+1],g=r[o+2],x=r[o+3];if(a===0){t[e+0]=c,t[e+1]=h,t[e+2]=l,t[e+3]=u;return}if(a===1){t[e+0]=f,t[e+1]=p,t[e+2]=g,t[e+3]=x;return}if(u!==x||c!==f||h!==p||l!==g){let m=1-a,d=c*f+h*p+l*g+u*x,M=d>=0?1:-1,y=1-d*d;if(y>Number.EPSILON){let I=Math.sqrt(y),A=Math.atan2(I,d*M);m=Math.sin(m*A)/I,a=Math.sin(a*A)/I}let E=a*M;if(c=c*m+f*E,h=h*m+p*E,l=l*m+g*E,u=u*m+x*E,m===1-a){let I=1/Math.sqrt(c*c+h*h+l*l+u*u);c*=I,h*=I,l*=I,u*=I}}t[e]=c,t[e+1]=h,t[e+2]=l,t[e+3]=u}static multiplyQuaternionsFlat(t,e,i,s,r,o){let a=i[s],c=i[s+1],h=i[s+2],l=i[s+3],u=r[o],f=r[o+1],p=r[o+2],g=r[o+3];return t[e]=a*g+l*u+c*p-h*f,t[e+1]=c*g+l*f+h*u-a*p,t[e+2]=h*g+l*p+a*f-c*u,t[e+3]=l*g-a*u-c*f-h*p,t}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get w(){return this._w}set w(t){this._w=t,this._onChangeCallback()}set(t,e,i,s){return this._x=t,this._y=e,this._z=i,this._w=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(t){return this._x=t.x,this._y=t.y,this._z=t.z,this._w=t.w,this._onChangeCallback(),this}setFromEuler(t,e=!0){let i=t._x,s=t._y,r=t._z,o=t._order,a=Math.cos,c=Math.sin,h=a(i/2),l=a(s/2),u=a(r/2),f=c(i/2),p=c(s/2),g=c(r/2);switch(o){case"XYZ":this._x=f*l*u+h*p*g,this._y=h*p*u-f*l*g,this._z=h*l*g+f*p*u,this._w=h*l*u-f*p*g;break;case"YXZ":this._x=f*l*u+h*p*g,this._y=h*p*u-f*l*g,this._z=h*l*g-f*p*u,this._w=h*l*u+f*p*g;break;case"ZXY":this._x=f*l*u-h*p*g,this._y=h*p*u+f*l*g,this._z=h*l*g+f*p*u,this._w=h*l*u-f*p*g;break;case"ZYX":this._x=f*l*u-h*p*g,this._y=h*p*u+f*l*g,this._z=h*l*g-f*p*u,this._w=h*l*u+f*p*g;break;case"YZX":this._x=f*l*u+h*p*g,this._y=h*p*u+f*l*g,this._z=h*l*g-f*p*u,this._w=h*l*u-f*p*g;break;case"XZY":this._x=f*l*u-h*p*g,this._y=h*p*u-f*l*g,this._z=h*l*g+f*p*u,this._w=h*l*u+f*p*g;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+o)}return e===!0&&this._onChangeCallback(),this}setFromAxisAngle(t,e){let i=e/2,s=Math.sin(i);return this._x=t.x*s,this._y=t.y*s,this._z=t.z*s,this._w=Math.cos(i),this._onChangeCallback(),this}setFromRotationMatrix(t){let e=t.elements,i=e[0],s=e[4],r=e[8],o=e[1],a=e[5],c=e[9],h=e[2],l=e[6],u=e[10],f=i+a+u;if(f>0){let p=.5/Math.sqrt(f+1);this._w=.25/p,this._x=(l-c)*p,this._y=(r-h)*p,this._z=(o-s)*p}else if(i>a&&i>u){let p=2*Math.sqrt(1+i-a-u);this._w=(l-c)/p,this._x=.25*p,this._y=(s+o)/p,this._z=(r+h)/p}else if(a>u){let p=2*Math.sqrt(1+a-i-u);this._w=(r-h)/p,this._x=(s+o)/p,this._y=.25*p,this._z=(c+l)/p}else{let p=2*Math.sqrt(1+u-i-a);this._w=(o-s)/p,this._x=(r+h)/p,this._y=(c+l)/p,this._z=.25*p}return this._onChangeCallback(),this}setFromUnitVectors(t,e){let i=t.dot(e)+1;return i<Number.EPSILON?(i=0,Math.abs(t.x)>Math.abs(t.z)?(this._x=-t.y,this._y=t.x,this._z=0,this._w=i):(this._x=0,this._y=-t.z,this._z=t.y,this._w=i)):(this._x=t.y*e.z-t.z*e.y,this._y=t.z*e.x-t.x*e.z,this._z=t.x*e.y-t.y*e.x,this._w=i),this.normalize()}angleTo(t){return 2*Math.acos(Math.abs(an(this.dot(t),-1,1)))}rotateTowards(t,e){let i=this.angleTo(t);if(i===0)return this;let s=Math.min(1,e/i);return this.slerp(t,s),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(t){return this._x*t._x+this._y*t._y+this._z*t._z+this._w*t._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let t=this.length();return t===0?(this._x=0,this._y=0,this._z=0,this._w=1):(t=1/t,this._x=this._x*t,this._y=this._y*t,this._z=this._z*t,this._w=this._w*t),this._onChangeCallback(),this}multiply(t){return this.multiplyQuaternions(this,t)}premultiply(t){return this.multiplyQuaternions(t,this)}multiplyQuaternions(t,e){let i=t._x,s=t._y,r=t._z,o=t._w,a=e._x,c=e._y,h=e._z,l=e._w;return this._x=i*l+o*a+s*h-r*c,this._y=s*l+o*c+r*a-i*h,this._z=r*l+o*h+i*c-s*a,this._w=o*l-i*a-s*c-r*h,this._onChangeCallback(),this}slerp(t,e){if(e===0)return this;if(e===1)return this.copy(t);let i=this._x,s=this._y,r=this._z,o=this._w,a=o*t._w+i*t._x+s*t._y+r*t._z;if(a<0?(this._w=-t._w,this._x=-t._x,this._y=-t._y,this._z=-t._z,a=-a):this.copy(t),a>=1)return this._w=o,this._x=i,this._y=s,this._z=r,this;let c=1-a*a;if(c<=Number.EPSILON){let p=1-e;return this._w=p*o+e*this._w,this._x=p*i+e*this._x,this._y=p*s+e*this._y,this._z=p*r+e*this._z,this.normalize(),this}let h=Math.sqrt(c),l=Math.atan2(h,a),u=Math.sin((1-e)*l)/h,f=Math.sin(e*l)/h;return this._w=o*u+this._w*f,this._x=i*u+this._x*f,this._y=s*u+this._y*f,this._z=r*u+this._z*f,this._onChangeCallback(),this}slerpQuaternions(t,e,i){return this.copy(t).slerp(e,i)}random(){let t=Math.random(),e=Math.sqrt(1-t),i=Math.sqrt(t),s=2*Math.PI*Math.random(),r=2*Math.PI*Math.random();return this.set(e*Math.cos(s),i*Math.sin(r),i*Math.cos(r),e*Math.sin(s))}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._w===this._w}fromArray(t,e=0){return this._x=t[e],this._y=t[e+1],this._z=t[e+2],this._w=t[e+3],this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._w,t}fromBufferAttribute(t,e){return this._x=t.getX(e),this._y=t.getY(e),this._z=t.getZ(e),this._w=t.getW(e),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}},z=class n{constructor(t=0,e=0,i=0){n.prototype.isVector3=!0,this.x=t,this.y=e,this.z=i}set(t,e,i){return i===void 0&&(i=this.z),this.x=t,this.y=e,this.z=i,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this}multiplyVectors(t,e){return this.x=t.x*e.x,this.y=t.y*e.y,this.z=t.z*e.z,this}applyEuler(t){return this.applyQuaternion(Vl.setFromEuler(t))}applyAxisAngle(t,e){return this.applyQuaternion(Vl.setFromAxisAngle(t,e))}applyMatrix3(t){let e=this.x,i=this.y,s=this.z,r=t.elements;return this.x=r[0]*e+r[3]*i+r[6]*s,this.y=r[1]*e+r[4]*i+r[7]*s,this.z=r[2]*e+r[5]*i+r[8]*s,this}applyNormalMatrix(t){return this.applyMatrix3(t).normalize()}applyMatrix4(t){let e=this.x,i=this.y,s=this.z,r=t.elements,o=1/(r[3]*e+r[7]*i+r[11]*s+r[15]);return this.x=(r[0]*e+r[4]*i+r[8]*s+r[12])*o,this.y=(r[1]*e+r[5]*i+r[9]*s+r[13])*o,this.z=(r[2]*e+r[6]*i+r[10]*s+r[14])*o,this}applyQuaternion(t){let e=this.x,i=this.y,s=this.z,r=t.x,o=t.y,a=t.z,c=t.w,h=2*(o*s-a*i),l=2*(a*e-r*s),u=2*(r*i-o*e);return this.x=e+c*h+o*u-a*l,this.y=i+c*l+a*h-r*u,this.z=s+c*u+r*l-o*h,this}project(t){return this.applyMatrix4(t.matrixWorldInverse).applyMatrix4(t.projectionMatrix)}unproject(t){return this.applyMatrix4(t.projectionMatrixInverse).applyMatrix4(t.matrixWorld)}transformDirection(t){let e=this.x,i=this.y,s=this.z,r=t.elements;return this.x=r[0]*e+r[4]*i+r[8]*s,this.y=r[1]*e+r[5]*i+r[9]*s,this.z=r[2]*e+r[6]*i+r[10]*s,this.normalize()}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this}divideScalar(t){return this.multiplyScalar(1/t)}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this}clamp(t,e){return this.x=Math.max(t.x,Math.min(e.x,this.x)),this.y=Math.max(t.y,Math.min(e.y,this.y)),this.z=Math.max(t.z,Math.min(e.z,this.z)),this}clampScalar(t,e){return this.x=Math.max(t,Math.min(e,this.x)),this.y=Math.max(t,Math.min(e,this.y)),this.z=Math.max(t,Math.min(e,this.z)),this}clampLength(t,e){let i=this.length();return this.divideScalar(i||1).multiplyScalar(Math.max(t,Math.min(e,i)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this}lerpVectors(t,e,i){return this.x=t.x+(e.x-t.x)*i,this.y=t.y+(e.y-t.y)*i,this.z=t.z+(e.z-t.z)*i,this}cross(t){return this.crossVectors(this,t)}crossVectors(t,e){let i=t.x,s=t.y,r=t.z,o=e.x,a=e.y,c=e.z;return this.x=s*c-r*a,this.y=r*o-i*c,this.z=i*a-s*o,this}projectOnVector(t){let e=t.lengthSq();if(e===0)return this.set(0,0,0);let i=t.dot(this)/e;return this.copy(t).multiplyScalar(i)}projectOnPlane(t){return uo.copy(this).projectOnVector(t),this.sub(uo)}reflect(t){return this.sub(uo.copy(t).multiplyScalar(2*this.dot(t)))}angleTo(t){let e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;let i=this.dot(t)/e;return Math.acos(an(i,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){let e=this.x-t.x,i=this.y-t.y,s=this.z-t.z;return e*e+i*i+s*s}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)+Math.abs(this.z-t.z)}setFromSpherical(t){return this.setFromSphericalCoords(t.radius,t.phi,t.theta)}setFromSphericalCoords(t,e,i){let s=Math.sin(e)*t;return this.x=s*Math.sin(i),this.y=Math.cos(e)*t,this.z=s*Math.cos(i),this}setFromCylindrical(t){return this.setFromCylindricalCoords(t.radius,t.theta,t.y)}setFromCylindricalCoords(t,e,i){return this.x=t*Math.sin(e),this.y=i,this.z=t*Math.cos(e),this}setFromMatrixPosition(t){let e=t.elements;return this.x=e[12],this.y=e[13],this.z=e[14],this}setFromMatrixScale(t){let e=this.setFromMatrixColumn(t,0).length(),i=this.setFromMatrixColumn(t,1).length(),s=this.setFromMatrixColumn(t,2).length();return this.x=e,this.y=i,this.z=s,this}setFromMatrixColumn(t,e){return this.fromArray(t.elements,e*4)}setFromMatrix3Column(t,e){return this.fromArray(t.elements,e*3)}setFromEuler(t){return this.x=t._x,this.y=t._y,this.z=t._z,this}setFromColor(t){return this.x=t.r,this.y=t.g,this.z=t.b,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){let t=(Math.random()-.5)*2,e=Math.random()*Math.PI*2,i=Math.sqrt(1-t**2);return this.x=i*Math.cos(e),this.y=i*Math.sin(e),this.z=t,this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}},uo=new z,Vl=new ui,qn=class{constructor(t=new z(1/0,1/0,1/0),e=new z(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=t,this.max=e}set(t,e){return this.min.copy(t),this.max.copy(e),this}setFromArray(t){this.makeEmpty();for(let e=0,i=t.length;e<i;e+=3)this.expandByPoint(_n.fromArray(t,e));return this}setFromBufferAttribute(t){this.makeEmpty();for(let e=0,i=t.count;e<i;e++)this.expandByPoint(_n.fromBufferAttribute(t,e));return this}setFromPoints(t){this.makeEmpty();for(let e=0,i=t.length;e<i;e++)this.expandByPoint(t[e]);return this}setFromCenterAndSize(t,e){let i=_n.copy(e).multiplyScalar(.5);return this.min.copy(t).sub(i),this.max.copy(t).add(i),this}setFromObject(t,e=!1){return this.makeEmpty(),this.expandByObject(t,e)}clone(){return new this.constructor().copy(this)}copy(t){return this.min.copy(t.min),this.max.copy(t.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(t){return this.isEmpty()?t.set(0,0,0):t.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(t){return this.isEmpty()?t.set(0,0,0):t.subVectors(this.max,this.min)}expandByPoint(t){return this.min.min(t),this.max.max(t),this}expandByVector(t){return this.min.sub(t),this.max.add(t),this}expandByScalar(t){return this.min.addScalar(-t),this.max.addScalar(t),this}expandByObject(t,e=!1){t.updateWorldMatrix(!1,!1);let i=t.geometry;if(i!==void 0){let r=i.getAttribute("position");if(e===!0&&r!==void 0&&t.isInstancedMesh!==!0)for(let o=0,a=r.count;o<a;o++)t.isMesh===!0?t.getVertexPosition(o,_n):_n.fromBufferAttribute(r,o),_n.applyMatrix4(t.matrixWorld),this.expandByPoint(_n);else t.boundingBox!==void 0?(t.boundingBox===null&&t.computeBoundingBox(),gr.copy(t.boundingBox)):(i.boundingBox===null&&i.computeBoundingBox(),gr.copy(i.boundingBox)),gr.applyMatrix4(t.matrixWorld),this.union(gr)}let s=t.children;for(let r=0,o=s.length;r<o;r++)this.expandByObject(s[r],e);return this}containsPoint(t){return!(t.x<this.min.x||t.x>this.max.x||t.y<this.min.y||t.y>this.max.y||t.z<this.min.z||t.z>this.max.z)}containsBox(t){return this.min.x<=t.min.x&&t.max.x<=this.max.x&&this.min.y<=t.min.y&&t.max.y<=this.max.y&&this.min.z<=t.min.z&&t.max.z<=this.max.z}getParameter(t,e){return e.set((t.x-this.min.x)/(this.max.x-this.min.x),(t.y-this.min.y)/(this.max.y-this.min.y),(t.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(t){return!(t.max.x<this.min.x||t.min.x>this.max.x||t.max.y<this.min.y||t.min.y>this.max.y||t.max.z<this.min.z||t.min.z>this.max.z)}intersectsSphere(t){return this.clampPoint(t.center,_n),_n.distanceToSquared(t.center)<=t.radius*t.radius}intersectsPlane(t){let e,i;return t.normal.x>0?(e=t.normal.x*this.min.x,i=t.normal.x*this.max.x):(e=t.normal.x*this.max.x,i=t.normal.x*this.min.x),t.normal.y>0?(e+=t.normal.y*this.min.y,i+=t.normal.y*this.max.y):(e+=t.normal.y*this.max.y,i+=t.normal.y*this.min.y),t.normal.z>0?(e+=t.normal.z*this.min.z,i+=t.normal.z*this.max.z):(e+=t.normal.z*this.max.z,i+=t.normal.z*this.min.z),e<=-t.constant&&i>=-t.constant}intersectsTriangle(t){if(this.isEmpty())return!1;this.getCenter(Ns),xr.subVectors(this.max,Ns),Yi.subVectors(t.a,Ns),Zi.subVectors(t.b,Ns),$i.subVectors(t.c,Ns),Qn.subVectors(Zi,Yi),ti.subVectors($i,Zi),Mi.subVectors(Yi,$i);let e=[0,-Qn.z,Qn.y,0,-ti.z,ti.y,0,-Mi.z,Mi.y,Qn.z,0,-Qn.x,ti.z,0,-ti.x,Mi.z,0,-Mi.x,-Qn.y,Qn.x,0,-ti.y,ti.x,0,-Mi.y,Mi.x,0];return!fo(e,Yi,Zi,$i,xr)||(e=[1,0,0,0,1,0,0,0,1],!fo(e,Yi,Zi,$i,xr))?!1:(yr.crossVectors(Qn,ti),e=[yr.x,yr.y,yr.z],fo(e,Yi,Zi,$i,xr))}clampPoint(t,e){return e.copy(t).clamp(this.min,this.max)}distanceToPoint(t){return this.clampPoint(t,_n).distanceTo(t)}getBoundingSphere(t){return this.isEmpty()?t.makeEmpty():(this.getCenter(t.center),t.radius=this.getSize(_n).length()*.5),t}intersect(t){return this.min.max(t.min),this.max.min(t.max),this.isEmpty()&&this.makeEmpty(),this}union(t){return this.min.min(t.min),this.max.max(t.max),this}applyMatrix4(t){return this.isEmpty()?this:(Nn[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(t),Nn[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(t),Nn[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(t),Nn[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(t),Nn[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(t),Nn[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(t),Nn[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(t),Nn[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(t),this.setFromPoints(Nn),this)}translate(t){return this.min.add(t),this.max.add(t),this}equals(t){return t.min.equals(this.min)&&t.max.equals(this.max)}},Nn=[new z,new z,new z,new z,new z,new z,new z,new z],_n=new z,gr=new qn,Yi=new z,Zi=new z,$i=new z,Qn=new z,ti=new z,Mi=new z,Ns=new z,xr=new z,yr=new z,bi=new z;function fo(n,t,e,i,s){for(let r=0,o=n.length-3;r<=o;r+=3){bi.fromArray(n,r);let a=s.x*Math.abs(bi.x)+s.y*Math.abs(bi.y)+s.z*Math.abs(bi.z),c=t.dot(bi),h=e.dot(bi),l=i.dot(bi);if(Math.max(-Math.max(c,h,l),Math.min(c,h,l))>a)return!1}return!0}var Yd=new qn,Os=new z,po=new z,di=class{constructor(t=new z,e=-1){this.isSphere=!0,this.center=t,this.radius=e}set(t,e){return this.center.copy(t),this.radius=e,this}setFromPoints(t,e){let i=this.center;e!==void 0?i.copy(e):Yd.setFromPoints(t).getCenter(i);let s=0;for(let r=0,o=t.length;r<o;r++)s=Math.max(s,i.distanceToSquared(t[r]));return this.radius=Math.sqrt(s),this}copy(t){return this.center.copy(t.center),this.radius=t.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(t){return t.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(t){return t.distanceTo(this.center)-this.radius}intersectsSphere(t){let e=this.radius+t.radius;return t.center.distanceToSquared(this.center)<=e*e}intersectsBox(t){return t.intersectsSphere(this)}intersectsPlane(t){return Math.abs(t.distanceToPoint(this.center))<=this.radius}clampPoint(t,e){let i=this.center.distanceToSquared(t);return e.copy(t),i>this.radius*this.radius&&(e.sub(this.center).normalize(),e.multiplyScalar(this.radius).add(this.center)),e}getBoundingBox(t){return this.isEmpty()?(t.makeEmpty(),t):(t.set(this.center,this.center),t.expandByScalar(this.radius),t)}applyMatrix4(t){return this.center.applyMatrix4(t),this.radius=this.radius*t.getMaxScaleOnAxis(),this}translate(t){return this.center.add(t),this}expandByPoint(t){if(this.isEmpty())return this.center.copy(t),this.radius=0,this;Os.subVectors(t,this.center);let e=Os.lengthSq();if(e>this.radius*this.radius){let i=Math.sqrt(e),s=(i-this.radius)*.5;this.center.addScaledVector(Os,s/i),this.radius+=s}return this}union(t){return t.isEmpty()?this:this.isEmpty()?(this.copy(t),this):(this.center.equals(t.center)===!0?this.radius=Math.max(this.radius,t.radius):(po.subVectors(t.center,this.center).setLength(t.radius),this.expandByPoint(Os.copy(t.center).add(po)),this.expandByPoint(Os.copy(t.center).sub(po))),this)}equals(t){return t.center.equals(this.center)&&t.radius===this.radius}clone(){return new this.constructor().copy(this)}},On=new z,mo=new z,_r=new z,ei=new z,go=new z,vr=new z,xo=new z,Kr=class{constructor(t=new z,e=new z(0,0,-1)){this.origin=t,this.direction=e}set(t,e){return this.origin.copy(t),this.direction.copy(e),this}copy(t){return this.origin.copy(t.origin),this.direction.copy(t.direction),this}at(t,e){return e.copy(this.origin).addScaledVector(this.direction,t)}lookAt(t){return this.direction.copy(t).sub(this.origin).normalize(),this}recast(t){return this.origin.copy(this.at(t,On)),this}closestPointToPoint(t,e){e.subVectors(t,this.origin);let i=e.dot(this.direction);return i<0?e.copy(this.origin):e.copy(this.origin).addScaledVector(this.direction,i)}distanceToPoint(t){return Math.sqrt(this.distanceSqToPoint(t))}distanceSqToPoint(t){let e=On.subVectors(t,this.origin).dot(this.direction);return e<0?this.origin.distanceToSquared(t):(On.copy(this.origin).addScaledVector(this.direction,e),On.distanceToSquared(t))}distanceSqToSegment(t,e,i,s){mo.copy(t).add(e).multiplyScalar(.5),_r.copy(e).sub(t).normalize(),ei.copy(this.origin).sub(mo);let r=t.distanceTo(e)*.5,o=-this.direction.dot(_r),a=ei.dot(this.direction),c=-ei.dot(_r),h=ei.lengthSq(),l=Math.abs(1-o*o),u,f,p,g;if(l>0)if(u=o*c-a,f=o*a-c,g=r*l,u>=0)if(f>=-g)if(f<=g){let x=1/l;u*=x,f*=x,p=u*(u+o*f+2*a)+f*(o*u+f+2*c)+h}else f=r,u=Math.max(0,-(o*f+a)),p=-u*u+f*(f+2*c)+h;else f=-r,u=Math.max(0,-(o*f+a)),p=-u*u+f*(f+2*c)+h;else f<=-g?(u=Math.max(0,-(-o*r+a)),f=u>0?-r:Math.min(Math.max(-r,-c),r),p=-u*u+f*(f+2*c)+h):f<=g?(u=0,f=Math.min(Math.max(-r,-c),r),p=f*(f+2*c)+h):(u=Math.max(0,-(o*r+a)),f=u>0?r:Math.min(Math.max(-r,-c),r),p=-u*u+f*(f+2*c)+h);else f=o>0?-r:r,u=Math.max(0,-(o*f+a)),p=-u*u+f*(f+2*c)+h;return i&&i.copy(this.origin).addScaledVector(this.direction,u),s&&s.copy(mo).addScaledVector(_r,f),p}intersectSphere(t,e){On.subVectors(t.center,this.origin);let i=On.dot(this.direction),s=On.dot(On)-i*i,r=t.radius*t.radius;if(s>r)return null;let o=Math.sqrt(r-s),a=i-o,c=i+o;return c<0?null:a<0?this.at(c,e):this.at(a,e)}intersectsSphere(t){return this.distanceSqToPoint(t.center)<=t.radius*t.radius}distanceToPlane(t){let e=t.normal.dot(this.direction);if(e===0)return t.distanceToPoint(this.origin)===0?0:null;let i=-(this.origin.dot(t.normal)+t.constant)/e;return i>=0?i:null}intersectPlane(t,e){let i=this.distanceToPlane(t);return i===null?null:this.at(i,e)}intersectsPlane(t){let e=t.distanceToPoint(this.origin);return e===0||t.normal.dot(this.direction)*e<0}intersectBox(t,e){let i,s,r,o,a,c,h=1/this.direction.x,l=1/this.direction.y,u=1/this.direction.z,f=this.origin;return h>=0?(i=(t.min.x-f.x)*h,s=(t.max.x-f.x)*h):(i=(t.max.x-f.x)*h,s=(t.min.x-f.x)*h),l>=0?(r=(t.min.y-f.y)*l,o=(t.max.y-f.y)*l):(r=(t.max.y-f.y)*l,o=(t.min.y-f.y)*l),i>o||r>s||((r>i||isNaN(i))&&(i=r),(o<s||isNaN(s))&&(s=o),u>=0?(a=(t.min.z-f.z)*u,c=(t.max.z-f.z)*u):(a=(t.max.z-f.z)*u,c=(t.min.z-f.z)*u),i>c||a>s)||((a>i||i!==i)&&(i=a),(c<s||s!==s)&&(s=c),s<0)?null:this.at(i>=0?i:s,e)}intersectsBox(t){return this.intersectBox(t,On)!==null}intersectTriangle(t,e,i,s,r){go.subVectors(e,t),vr.subVectors(i,t),xo.crossVectors(go,vr);let o=this.direction.dot(xo),a;if(o>0){if(s)return null;a=1}else if(o<0)a=-1,o=-o;else return null;ei.subVectors(this.origin,t);let c=a*this.direction.dot(vr.crossVectors(ei,vr));if(c<0)return null;let h=a*this.direction.dot(go.cross(ei));if(h<0||c+h>o)return null;let l=-a*ei.dot(xo);return l<0?null:this.at(l/o,r)}applyMatrix4(t){return this.origin.applyMatrix4(t),this.direction.transformDirection(t),this}equals(t){return t.origin.equals(this.origin)&&t.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}},ve=class n{constructor(t,e,i,s,r,o,a,c,h,l,u,f,p,g,x,m){n.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],t!==void 0&&this.set(t,e,i,s,r,o,a,c,h,l,u,f,p,g,x,m)}set(t,e,i,s,r,o,a,c,h,l,u,f,p,g,x,m){let d=this.elements;return d[0]=t,d[4]=e,d[8]=i,d[12]=s,d[1]=r,d[5]=o,d[9]=a,d[13]=c,d[2]=h,d[6]=l,d[10]=u,d[14]=f,d[3]=p,d[7]=g,d[11]=x,d[15]=m,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new n().fromArray(this.elements)}copy(t){let e=this.elements,i=t.elements;return e[0]=i[0],e[1]=i[1],e[2]=i[2],e[3]=i[3],e[4]=i[4],e[5]=i[5],e[6]=i[6],e[7]=i[7],e[8]=i[8],e[9]=i[9],e[10]=i[10],e[11]=i[11],e[12]=i[12],e[13]=i[13],e[14]=i[14],e[15]=i[15],this}copyPosition(t){let e=this.elements,i=t.elements;return e[12]=i[12],e[13]=i[13],e[14]=i[14],this}setFromMatrix3(t){let e=t.elements;return this.set(e[0],e[3],e[6],0,e[1],e[4],e[7],0,e[2],e[5],e[8],0,0,0,0,1),this}extractBasis(t,e,i){return t.setFromMatrixColumn(this,0),e.setFromMatrixColumn(this,1),i.setFromMatrixColumn(this,2),this}makeBasis(t,e,i){return this.set(t.x,e.x,i.x,0,t.y,e.y,i.y,0,t.z,e.z,i.z,0,0,0,0,1),this}extractRotation(t){let e=this.elements,i=t.elements,s=1/Ji.setFromMatrixColumn(t,0).length(),r=1/Ji.setFromMatrixColumn(t,1).length(),o=1/Ji.setFromMatrixColumn(t,2).length();return e[0]=i[0]*s,e[1]=i[1]*s,e[2]=i[2]*s,e[3]=0,e[4]=i[4]*r,e[5]=i[5]*r,e[6]=i[6]*r,e[7]=0,e[8]=i[8]*o,e[9]=i[9]*o,e[10]=i[10]*o,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromEuler(t){let e=this.elements,i=t.x,s=t.y,r=t.z,o=Math.cos(i),a=Math.sin(i),c=Math.cos(s),h=Math.sin(s),l=Math.cos(r),u=Math.sin(r);if(t.order==="XYZ"){let f=o*l,p=o*u,g=a*l,x=a*u;e[0]=c*l,e[4]=-c*u,e[8]=h,e[1]=p+g*h,e[5]=f-x*h,e[9]=-a*c,e[2]=x-f*h,e[6]=g+p*h,e[10]=o*c}else if(t.order==="YXZ"){let f=c*l,p=c*u,g=h*l,x=h*u;e[0]=f+x*a,e[4]=g*a-p,e[8]=o*h,e[1]=o*u,e[5]=o*l,e[9]=-a,e[2]=p*a-g,e[6]=x+f*a,e[10]=o*c}else if(t.order==="ZXY"){let f=c*l,p=c*u,g=h*l,x=h*u;e[0]=f-x*a,e[4]=-o*u,e[8]=g+p*a,e[1]=p+g*a,e[5]=o*l,e[9]=x-f*a,e[2]=-o*h,e[6]=a,e[10]=o*c}else if(t.order==="ZYX"){let f=o*l,p=o*u,g=a*l,x=a*u;e[0]=c*l,e[4]=g*h-p,e[8]=f*h+x,e[1]=c*u,e[5]=x*h+f,e[9]=p*h-g,e[2]=-h,e[6]=a*c,e[10]=o*c}else if(t.order==="YZX"){let f=o*c,p=o*h,g=a*c,x=a*h;e[0]=c*l,e[4]=x-f*u,e[8]=g*u+p,e[1]=u,e[5]=o*l,e[9]=-a*l,e[2]=-h*l,e[6]=p*u+g,e[10]=f-x*u}else if(t.order==="XZY"){let f=o*c,p=o*h,g=a*c,x=a*h;e[0]=c*l,e[4]=-u,e[8]=h*l,e[1]=f*u+x,e[5]=o*l,e[9]=p*u-g,e[2]=g*u-p,e[6]=a*l,e[10]=x*u+f}return e[3]=0,e[7]=0,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromQuaternion(t){return this.compose(Zd,t,$d)}lookAt(t,e,i){let s=this.elements;return ln.subVectors(t,e),ln.lengthSq()===0&&(ln.z=1),ln.normalize(),ni.crossVectors(i,ln),ni.lengthSq()===0&&(Math.abs(i.z)===1?ln.x+=1e-4:ln.z+=1e-4,ln.normalize(),ni.crossVectors(i,ln)),ni.normalize(),Mr.crossVectors(ln,ni),s[0]=ni.x,s[4]=Mr.x,s[8]=ln.x,s[1]=ni.y,s[5]=Mr.y,s[9]=ln.y,s[2]=ni.z,s[6]=Mr.z,s[10]=ln.z,this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){let i=t.elements,s=e.elements,r=this.elements,o=i[0],a=i[4],c=i[8],h=i[12],l=i[1],u=i[5],f=i[9],p=i[13],g=i[2],x=i[6],m=i[10],d=i[14],M=i[3],y=i[7],E=i[11],I=i[15],A=s[0],R=s[4],k=s[8],v=s[12],w=s[1],O=s[5],Z=s[9],tt=s[13],L=s[2],F=s[6],Q=s[10],$=s[14],J=s[3],j=s[7],et=s[11],ht=s[15];return r[0]=o*A+a*w+c*L+h*J,r[4]=o*R+a*O+c*F+h*j,r[8]=o*k+a*Z+c*Q+h*et,r[12]=o*v+a*tt+c*$+h*ht,r[1]=l*A+u*w+f*L+p*J,r[5]=l*R+u*O+f*F+p*j,r[9]=l*k+u*Z+f*Q+p*et,r[13]=l*v+u*tt+f*$+p*ht,r[2]=g*A+x*w+m*L+d*J,r[6]=g*R+x*O+m*F+d*j,r[10]=g*k+x*Z+m*Q+d*et,r[14]=g*v+x*tt+m*$+d*ht,r[3]=M*A+y*w+E*L+I*J,r[7]=M*R+y*O+E*F+I*j,r[11]=M*k+y*Z+E*Q+I*et,r[15]=M*v+y*tt+E*$+I*ht,this}multiplyScalar(t){let e=this.elements;return e[0]*=t,e[4]*=t,e[8]*=t,e[12]*=t,e[1]*=t,e[5]*=t,e[9]*=t,e[13]*=t,e[2]*=t,e[6]*=t,e[10]*=t,e[14]*=t,e[3]*=t,e[7]*=t,e[11]*=t,e[15]*=t,this}determinant(){let t=this.elements,e=t[0],i=t[4],s=t[8],r=t[12],o=t[1],a=t[5],c=t[9],h=t[13],l=t[2],u=t[6],f=t[10],p=t[14],g=t[3],x=t[7],m=t[11],d=t[15];return g*(+r*c*u-s*h*u-r*a*f+i*h*f+s*a*p-i*c*p)+x*(+e*c*p-e*h*f+r*o*f-s*o*p+s*h*l-r*c*l)+m*(+e*h*u-e*a*p-r*o*u+i*o*p+r*a*l-i*h*l)+d*(-s*a*l-e*c*u+e*a*f+s*o*u-i*o*f+i*c*l)}transpose(){let t=this.elements,e;return e=t[1],t[1]=t[4],t[4]=e,e=t[2],t[2]=t[8],t[8]=e,e=t[6],t[6]=t[9],t[9]=e,e=t[3],t[3]=t[12],t[12]=e,e=t[7],t[7]=t[13],t[13]=e,e=t[11],t[11]=t[14],t[14]=e,this}setPosition(t,e,i){let s=this.elements;return t.isVector3?(s[12]=t.x,s[13]=t.y,s[14]=t.z):(s[12]=t,s[13]=e,s[14]=i),this}invert(){let t=this.elements,e=t[0],i=t[1],s=t[2],r=t[3],o=t[4],a=t[5],c=t[6],h=t[7],l=t[8],u=t[9],f=t[10],p=t[11],g=t[12],x=t[13],m=t[14],d=t[15],M=u*m*h-x*f*h+x*c*p-a*m*p-u*c*d+a*f*d,y=g*f*h-l*m*h-g*c*p+o*m*p+l*c*d-o*f*d,E=l*x*h-g*u*h+g*a*p-o*x*p-l*a*d+o*u*d,I=g*u*c-l*x*c-g*a*f+o*x*f+l*a*m-o*u*m,A=e*M+i*y+s*E+r*I;if(A===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);let R=1/A;return t[0]=M*R,t[1]=(x*f*r-u*m*r-x*s*p+i*m*p+u*s*d-i*f*d)*R,t[2]=(a*m*r-x*c*r+x*s*h-i*m*h-a*s*d+i*c*d)*R,t[3]=(u*c*r-a*f*r-u*s*h+i*f*h+a*s*p-i*c*p)*R,t[4]=y*R,t[5]=(l*m*r-g*f*r+g*s*p-e*m*p-l*s*d+e*f*d)*R,t[6]=(g*c*r-o*m*r-g*s*h+e*m*h+o*s*d-e*c*d)*R,t[7]=(o*f*r-l*c*r+l*s*h-e*f*h-o*s*p+e*c*p)*R,t[8]=E*R,t[9]=(g*u*r-l*x*r-g*i*p+e*x*p+l*i*d-e*u*d)*R,t[10]=(o*x*r-g*a*r+g*i*h-e*x*h-o*i*d+e*a*d)*R,t[11]=(l*a*r-o*u*r-l*i*h+e*u*h+o*i*p-e*a*p)*R,t[12]=I*R,t[13]=(l*x*s-g*u*s+g*i*f-e*x*f-l*i*m+e*u*m)*R,t[14]=(g*a*s-o*x*s-g*i*c+e*x*c+o*i*m-e*a*m)*R,t[15]=(o*u*s-l*a*s+l*i*c-e*u*c-o*i*f+e*a*f)*R,this}scale(t){let e=this.elements,i=t.x,s=t.y,r=t.z;return e[0]*=i,e[4]*=s,e[8]*=r,e[1]*=i,e[5]*=s,e[9]*=r,e[2]*=i,e[6]*=s,e[10]*=r,e[3]*=i,e[7]*=s,e[11]*=r,this}getMaxScaleOnAxis(){let t=this.elements,e=t[0]*t[0]+t[1]*t[1]+t[2]*t[2],i=t[4]*t[4]+t[5]*t[5]+t[6]*t[6],s=t[8]*t[8]+t[9]*t[9]+t[10]*t[10];return Math.sqrt(Math.max(e,i,s))}makeTranslation(t,e,i){return t.isVector3?this.set(1,0,0,t.x,0,1,0,t.y,0,0,1,t.z,0,0,0,1):this.set(1,0,0,t,0,1,0,e,0,0,1,i,0,0,0,1),this}makeRotationX(t){let e=Math.cos(t),i=Math.sin(t);return this.set(1,0,0,0,0,e,-i,0,0,i,e,0,0,0,0,1),this}makeRotationY(t){let e=Math.cos(t),i=Math.sin(t);return this.set(e,0,i,0,0,1,0,0,-i,0,e,0,0,0,0,1),this}makeRotationZ(t){let e=Math.cos(t),i=Math.sin(t);return this.set(e,-i,0,0,i,e,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(t,e){let i=Math.cos(e),s=Math.sin(e),r=1-i,o=t.x,a=t.y,c=t.z,h=r*o,l=r*a;return this.set(h*o+i,h*a-s*c,h*c+s*a,0,h*a+s*c,l*a+i,l*c-s*o,0,h*c-s*a,l*c+s*o,r*c*c+i,0,0,0,0,1),this}makeScale(t,e,i){return this.set(t,0,0,0,0,e,0,0,0,0,i,0,0,0,0,1),this}makeShear(t,e,i,s,r,o){return this.set(1,i,r,0,t,1,o,0,e,s,1,0,0,0,0,1),this}compose(t,e,i){let s=this.elements,r=e._x,o=e._y,a=e._z,c=e._w,h=r+r,l=o+o,u=a+a,f=r*h,p=r*l,g=r*u,x=o*l,m=o*u,d=a*u,M=c*h,y=c*l,E=c*u,I=i.x,A=i.y,R=i.z;return s[0]=(1-(x+d))*I,s[1]=(p+E)*I,s[2]=(g-y)*I,s[3]=0,s[4]=(p-E)*A,s[5]=(1-(f+d))*A,s[6]=(m+M)*A,s[7]=0,s[8]=(g+y)*R,s[9]=(m-M)*R,s[10]=(1-(f+x))*R,s[11]=0,s[12]=t.x,s[13]=t.y,s[14]=t.z,s[15]=1,this}decompose(t,e,i){let s=this.elements,r=Ji.set(s[0],s[1],s[2]).length(),o=Ji.set(s[4],s[5],s[6]).length(),a=Ji.set(s[8],s[9],s[10]).length();this.determinant()<0&&(r=-r),t.x=s[12],t.y=s[13],t.z=s[14],vn.copy(this);let h=1/r,l=1/o,u=1/a;return vn.elements[0]*=h,vn.elements[1]*=h,vn.elements[2]*=h,vn.elements[4]*=l,vn.elements[5]*=l,vn.elements[6]*=l,vn.elements[8]*=u,vn.elements[9]*=u,vn.elements[10]*=u,e.setFromRotationMatrix(vn),i.x=r,i.y=o,i.z=a,this}makePerspective(t,e,i,s,r,o,a=Vn){let c=this.elements,h=2*r/(e-t),l=2*r/(i-s),u=(e+t)/(e-t),f=(i+s)/(i-s),p,g;if(a===Vn)p=-(o+r)/(o-r),g=-2*o*r/(o-r);else if(a===Yr)p=-o/(o-r),g=-o*r/(o-r);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+a);return c[0]=h,c[4]=0,c[8]=u,c[12]=0,c[1]=0,c[5]=l,c[9]=f,c[13]=0,c[2]=0,c[6]=0,c[10]=p,c[14]=g,c[3]=0,c[7]=0,c[11]=-1,c[15]=0,this}makeOrthographic(t,e,i,s,r,o,a=Vn){let c=this.elements,h=1/(e-t),l=1/(i-s),u=1/(o-r),f=(e+t)*h,p=(i+s)*l,g,x;if(a===Vn)g=(o+r)*u,x=-2*u;else if(a===Yr)g=r*u,x=-1*u;else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+a);return c[0]=2*h,c[4]=0,c[8]=0,c[12]=-f,c[1]=0,c[5]=2*l,c[9]=0,c[13]=-p,c[2]=0,c[6]=0,c[10]=x,c[14]=-g,c[3]=0,c[7]=0,c[11]=0,c[15]=1,this}equals(t){let e=this.elements,i=t.elements;for(let s=0;s<16;s++)if(e[s]!==i[s])return!1;return!0}fromArray(t,e=0){for(let i=0;i<16;i++)this.elements[i]=t[i+e];return this}toArray(t=[],e=0){let i=this.elements;return t[e]=i[0],t[e+1]=i[1],t[e+2]=i[2],t[e+3]=i[3],t[e+4]=i[4],t[e+5]=i[5],t[e+6]=i[6],t[e+7]=i[7],t[e+8]=i[8],t[e+9]=i[9],t[e+10]=i[10],t[e+11]=i[11],t[e+12]=i[12],t[e+13]=i[13],t[e+14]=i[14],t[e+15]=i[15],t}},Ji=new z,vn=new ve,Zd=new z(0,0,0),$d=new z(1,1,1),ni=new z,Mr=new z,ln=new z,Wl=new ve,Xl=new ui,Qr=class n{constructor(t=0,e=0,i=0,s=n.DEFAULT_ORDER){this.isEuler=!0,this._x=t,this._y=e,this._z=i,this._order=s}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get order(){return this._order}set order(t){this._order=t,this._onChangeCallback()}set(t,e,i,s=this._order){return this._x=t,this._y=e,this._z=i,this._order=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(t){return this._x=t._x,this._y=t._y,this._z=t._z,this._order=t._order,this._onChangeCallback(),this}setFromRotationMatrix(t,e=this._order,i=!0){let s=t.elements,r=s[0],o=s[4],a=s[8],c=s[1],h=s[5],l=s[9],u=s[2],f=s[6],p=s[10];switch(e){case"XYZ":this._y=Math.asin(an(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(-l,p),this._z=Math.atan2(-o,r)):(this._x=Math.atan2(f,h),this._z=0);break;case"YXZ":this._x=Math.asin(-an(l,-1,1)),Math.abs(l)<.9999999?(this._y=Math.atan2(a,p),this._z=Math.atan2(c,h)):(this._y=Math.atan2(-u,r),this._z=0);break;case"ZXY":this._x=Math.asin(an(f,-1,1)),Math.abs(f)<.9999999?(this._y=Math.atan2(-u,p),this._z=Math.atan2(-o,h)):(this._y=0,this._z=Math.atan2(c,r));break;case"ZYX":this._y=Math.asin(-an(u,-1,1)),Math.abs(u)<.9999999?(this._x=Math.atan2(f,p),this._z=Math.atan2(c,r)):(this._x=0,this._z=Math.atan2(-o,h));break;case"YZX":this._z=Math.asin(an(c,-1,1)),Math.abs(c)<.9999999?(this._x=Math.atan2(-l,h),this._y=Math.atan2(-u,r)):(this._x=0,this._y=Math.atan2(a,p));break;case"XZY":this._z=Math.asin(-an(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(f,h),this._y=Math.atan2(a,r)):(this._x=Math.atan2(-l,p),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+e)}return this._order=e,i===!0&&this._onChangeCallback(),this}setFromQuaternion(t,e,i){return Wl.makeRotationFromQuaternion(t),this.setFromRotationMatrix(Wl,e,i)}setFromVector3(t,e=this._order){return this.set(t.x,t.y,t.z,e)}reorder(t){return Xl.setFromEuler(this),this.setFromQuaternion(Xl,t)}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._order===this._order}fromArray(t){return this._x=t[0],this._y=t[1],this._z=t[2],t[3]!==void 0&&(this._order=t[3]),this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._order,t}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}};Qr.DEFAULT_ORDER="XYZ";var ta=class{constructor(){this.mask=1}set(t){this.mask=(1<<t|0)>>>0}enable(t){this.mask|=1<<t|0}enableAll(){this.mask=-1}toggle(t){this.mask^=1<<t|0}disable(t){this.mask&=~(1<<t|0)}disableAll(){this.mask=0}test(t){return(this.mask&t.mask)!==0}isEnabled(t){return(this.mask&(1<<t|0))!==0}},Jd=0,ql=new z,ji=new ui,Fn=new ve,br=new z,Fs=new z,jd=new z,Kd=new ui,Yl=new z(1,0,0),Zl=new z(0,1,0),$l=new z(0,0,1),Qd={type:"added"},tf={type:"removed"},ke=class n extends hi{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:Jd++}),this.uuid=nr(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=n.DEFAULT_UP.clone();let t=new z,e=new Qr,i=new ui,s=new z(1,1,1);function r(){i.setFromEuler(e,!1)}function o(){e.setFromQuaternion(i,void 0,!1)}e._onChange(r),i._onChange(o),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:t},rotation:{configurable:!0,enumerable:!0,value:e},quaternion:{configurable:!0,enumerable:!0,value:i},scale:{configurable:!0,enumerable:!0,value:s},modelViewMatrix:{value:new ve},normalMatrix:{value:new $t}}),this.matrix=new ve,this.matrixWorld=new ve,this.matrixAutoUpdate=n.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=n.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new ta,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(t){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(t),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(t){return this.quaternion.premultiply(t),this}setRotationFromAxisAngle(t,e){this.quaternion.setFromAxisAngle(t,e)}setRotationFromEuler(t){this.quaternion.setFromEuler(t,!0)}setRotationFromMatrix(t){this.quaternion.setFromRotationMatrix(t)}setRotationFromQuaternion(t){this.quaternion.copy(t)}rotateOnAxis(t,e){return ji.setFromAxisAngle(t,e),this.quaternion.multiply(ji),this}rotateOnWorldAxis(t,e){return ji.setFromAxisAngle(t,e),this.quaternion.premultiply(ji),this}rotateX(t){return this.rotateOnAxis(Yl,t)}rotateY(t){return this.rotateOnAxis(Zl,t)}rotateZ(t){return this.rotateOnAxis($l,t)}translateOnAxis(t,e){return ql.copy(t).applyQuaternion(this.quaternion),this.position.add(ql.multiplyScalar(e)),this}translateX(t){return this.translateOnAxis(Yl,t)}translateY(t){return this.translateOnAxis(Zl,t)}translateZ(t){return this.translateOnAxis($l,t)}localToWorld(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(this.matrixWorld)}worldToLocal(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(Fn.copy(this.matrixWorld).invert())}lookAt(t,e,i){t.isVector3?br.copy(t):br.set(t,e,i);let s=this.parent;this.updateWorldMatrix(!0,!1),Fs.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?Fn.lookAt(Fs,br,this.up):Fn.lookAt(br,Fs,this.up),this.quaternion.setFromRotationMatrix(Fn),s&&(Fn.extractRotation(s.matrixWorld),ji.setFromRotationMatrix(Fn),this.quaternion.premultiply(ji.invert()))}add(t){if(arguments.length>1){for(let e=0;e<arguments.length;e++)this.add(arguments[e]);return this}return t===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",t),this):(t&&t.isObject3D?(t.parent!==null&&t.parent.remove(t),t.parent=this,this.children.push(t),t.dispatchEvent(Qd)):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",t),this)}remove(t){if(arguments.length>1){for(let i=0;i<arguments.length;i++)this.remove(arguments[i]);return this}let e=this.children.indexOf(t);return e!==-1&&(t.parent=null,this.children.splice(e,1),t.dispatchEvent(tf)),this}removeFromParent(){let t=this.parent;return t!==null&&t.remove(this),this}clear(){return this.remove(...this.children)}attach(t){return this.updateWorldMatrix(!0,!1),Fn.copy(this.matrixWorld).invert(),t.parent!==null&&(t.parent.updateWorldMatrix(!0,!1),Fn.multiply(t.parent.matrixWorld)),t.applyMatrix4(Fn),this.add(t),t.updateWorldMatrix(!1,!0),this}getObjectById(t){return this.getObjectByProperty("id",t)}getObjectByName(t){return this.getObjectByProperty("name",t)}getObjectByProperty(t,e){if(this[t]===e)return this;for(let i=0,s=this.children.length;i<s;i++){let o=this.children[i].getObjectByProperty(t,e);if(o!==void 0)return o}}getObjectsByProperty(t,e,i=[]){this[t]===e&&i.push(this);let s=this.children;for(let r=0,o=s.length;r<o;r++)s[r].getObjectsByProperty(t,e,i);return i}getWorldPosition(t){return this.updateWorldMatrix(!0,!1),t.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Fs,t,jd),t}getWorldScale(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Fs,Kd,t),t}getWorldDirection(t){this.updateWorldMatrix(!0,!1);let e=this.matrixWorld.elements;return t.set(e[8],e[9],e[10]).normalize()}raycast(){}traverse(t){t(this);let e=this.children;for(let i=0,s=e.length;i<s;i++)e[i].traverse(t)}traverseVisible(t){if(this.visible===!1)return;t(this);let e=this.children;for(let i=0,s=e.length;i<s;i++)e[i].traverseVisible(t)}traverseAncestors(t){let e=this.parent;e!==null&&(t(e),e.traverseAncestors(t))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(t){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||t)&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix),this.matrixWorldNeedsUpdate=!1,t=!0);let e=this.children;for(let i=0,s=e.length;i<s;i++){let r=e[i];(r.matrixWorldAutoUpdate===!0||t===!0)&&r.updateMatrixWorld(t)}}updateWorldMatrix(t,e){let i=this.parent;if(t===!0&&i!==null&&i.matrixWorldAutoUpdate===!0&&i.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix),e===!0){let s=this.children;for(let r=0,o=s.length;r<o;r++){let a=s[r];a.matrixWorldAutoUpdate===!0&&a.updateWorldMatrix(!1,!0)}}}toJSON(t){let e=t===void 0||typeof t=="string",i={};e&&(t={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},i.metadata={version:4.6,type:"Object",generator:"Object3D.toJSON"});let s={};s.uuid=this.uuid,s.type=this.type,this.name!==""&&(s.name=this.name),this.castShadow===!0&&(s.castShadow=!0),this.receiveShadow===!0&&(s.receiveShadow=!0),this.visible===!1&&(s.visible=!1),this.frustumCulled===!1&&(s.frustumCulled=!1),this.renderOrder!==0&&(s.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(s.userData=this.userData),s.layers=this.layers.mask,s.matrix=this.matrix.toArray(),s.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(s.matrixAutoUpdate=!1),this.isInstancedMesh&&(s.type="InstancedMesh",s.count=this.count,s.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(s.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(s.type="BatchedMesh",s.perObjectFrustumCulled=this.perObjectFrustumCulled,s.sortObjects=this.sortObjects,s.drawRanges=this._drawRanges,s.reservedRanges=this._reservedRanges,s.visibility=this._visibility,s.active=this._active,s.bounds=this._bounds.map(a=>({boxInitialized:a.boxInitialized,boxMin:a.box.min.toArray(),boxMax:a.box.max.toArray(),sphereInitialized:a.sphereInitialized,sphereRadius:a.sphere.radius,sphereCenter:a.sphere.center.toArray()})),s.maxGeometryCount=this._maxGeometryCount,s.maxVertexCount=this._maxVertexCount,s.maxIndexCount=this._maxIndexCount,s.geometryInitialized=this._geometryInitialized,s.geometryCount=this._geometryCount,s.matricesTexture=this._matricesTexture.toJSON(t),this.boundingSphere!==null&&(s.boundingSphere={center:s.boundingSphere.center.toArray(),radius:s.boundingSphere.radius}),this.boundingBox!==null&&(s.boundingBox={min:s.boundingBox.min.toArray(),max:s.boundingBox.max.toArray()}));function r(a,c){return a[c.uuid]===void 0&&(a[c.uuid]=c.toJSON(t)),c.uuid}if(this.isScene)this.background&&(this.background.isColor?s.background=this.background.toJSON():this.background.isTexture&&(s.background=this.background.toJSON(t).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(s.environment=this.environment.toJSON(t).uuid);else if(this.isMesh||this.isLine||this.isPoints){s.geometry=r(t.geometries,this.geometry);let a=this.geometry.parameters;if(a!==void 0&&a.shapes!==void 0){let c=a.shapes;if(Array.isArray(c))for(let h=0,l=c.length;h<l;h++){let u=c[h];r(t.shapes,u)}else r(t.shapes,c)}}if(this.isSkinnedMesh&&(s.bindMode=this.bindMode,s.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(r(t.skeletons,this.skeleton),s.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){let a=[];for(let c=0,h=this.material.length;c<h;c++)a.push(r(t.materials,this.material[c]));s.material=a}else s.material=r(t.materials,this.material);if(this.children.length>0){s.children=[];for(let a=0;a<this.children.length;a++)s.children.push(this.children[a].toJSON(t).object)}if(this.animations.length>0){s.animations=[];for(let a=0;a<this.animations.length;a++){let c=this.animations[a];s.animations.push(r(t.animations,c))}}if(e){let a=o(t.geometries),c=o(t.materials),h=o(t.textures),l=o(t.images),u=o(t.shapes),f=o(t.skeletons),p=o(t.animations),g=o(t.nodes);a.length>0&&(i.geometries=a),c.length>0&&(i.materials=c),h.length>0&&(i.textures=h),l.length>0&&(i.images=l),u.length>0&&(i.shapes=u),f.length>0&&(i.skeletons=f),p.length>0&&(i.animations=p),g.length>0&&(i.nodes=g)}return i.object=s,i;function o(a){let c=[];for(let h in a){let l=a[h];delete l.metadata,c.push(l)}return c}}clone(t){return new this.constructor().copy(this,t)}copy(t,e=!0){if(this.name=t.name,this.up.copy(t.up),this.position.copy(t.position),this.rotation.order=t.rotation.order,this.quaternion.copy(t.quaternion),this.scale.copy(t.scale),this.matrix.copy(t.matrix),this.matrixWorld.copy(t.matrixWorld),this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrixWorldAutoUpdate=t.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=t.matrixWorldNeedsUpdate,this.layers.mask=t.layers.mask,this.visible=t.visible,this.castShadow=t.castShadow,this.receiveShadow=t.receiveShadow,this.frustumCulled=t.frustumCulled,this.renderOrder=t.renderOrder,this.animations=t.animations.slice(),this.userData=JSON.parse(JSON.stringify(t.userData)),e===!0)for(let i=0;i<t.children.length;i++){let s=t.children[i];this.add(s.clone())}return this}};ke.DEFAULT_UP=new z(0,1,0);ke.DEFAULT_MATRIX_AUTO_UPDATE=!0;ke.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;var Mn=new z,Bn=new z,yo=new z,kn=new z,Ki=new z,Qi=new z,Jl=new z,_o=new z,vo=new z,Mo=new z,wr=!1,cs=class n{constructor(t=new z,e=new z,i=new z){this.a=t,this.b=e,this.c=i}static getNormal(t,e,i,s){s.subVectors(i,e),Mn.subVectors(t,e),s.cross(Mn);let r=s.lengthSq();return r>0?s.multiplyScalar(1/Math.sqrt(r)):s.set(0,0,0)}static getBarycoord(t,e,i,s,r){Mn.subVectors(s,e),Bn.subVectors(i,e),yo.subVectors(t,e);let o=Mn.dot(Mn),a=Mn.dot(Bn),c=Mn.dot(yo),h=Bn.dot(Bn),l=Bn.dot(yo),u=o*h-a*a;if(u===0)return r.set(0,0,0),null;let f=1/u,p=(h*c-a*l)*f,g=(o*l-a*c)*f;return r.set(1-p-g,g,p)}static containsPoint(t,e,i,s){return this.getBarycoord(t,e,i,s,kn)===null?!1:kn.x>=0&&kn.y>=0&&kn.x+kn.y<=1}static getUV(t,e,i,s,r,o,a,c){return wr===!1&&(console.warn("THREE.Triangle.getUV() has been renamed to THREE.Triangle.getInterpolation()."),wr=!0),this.getInterpolation(t,e,i,s,r,o,a,c)}static getInterpolation(t,e,i,s,r,o,a,c){return this.getBarycoord(t,e,i,s,kn)===null?(c.x=0,c.y=0,"z"in c&&(c.z=0),"w"in c&&(c.w=0),null):(c.setScalar(0),c.addScaledVector(r,kn.x),c.addScaledVector(o,kn.y),c.addScaledVector(a,kn.z),c)}static isFrontFacing(t,e,i,s){return Mn.subVectors(i,e),Bn.subVectors(t,e),Mn.cross(Bn).dot(s)<0}set(t,e,i){return this.a.copy(t),this.b.copy(e),this.c.copy(i),this}setFromPointsAndIndices(t,e,i,s){return this.a.copy(t[e]),this.b.copy(t[i]),this.c.copy(t[s]),this}setFromAttributeAndIndices(t,e,i,s){return this.a.fromBufferAttribute(t,e),this.b.fromBufferAttribute(t,i),this.c.fromBufferAttribute(t,s),this}clone(){return new this.constructor().copy(this)}copy(t){return this.a.copy(t.a),this.b.copy(t.b),this.c.copy(t.c),this}getArea(){return Mn.subVectors(this.c,this.b),Bn.subVectors(this.a,this.b),Mn.cross(Bn).length()*.5}getMidpoint(t){return t.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(t){return n.getNormal(this.a,this.b,this.c,t)}getPlane(t){return t.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(t,e){return n.getBarycoord(t,this.a,this.b,this.c,e)}getUV(t,e,i,s,r){return wr===!1&&(console.warn("THREE.Triangle.getUV() has been renamed to THREE.Triangle.getInterpolation()."),wr=!0),n.getInterpolation(t,this.a,this.b,this.c,e,i,s,r)}getInterpolation(t,e,i,s,r){return n.getInterpolation(t,this.a,this.b,this.c,e,i,s,r)}containsPoint(t){return n.containsPoint(t,this.a,this.b,this.c)}isFrontFacing(t){return n.isFrontFacing(this.a,this.b,this.c,t)}intersectsBox(t){return t.intersectsTriangle(this)}closestPointToPoint(t,e){let i=this.a,s=this.b,r=this.c,o,a;Ki.subVectors(s,i),Qi.subVectors(r,i),_o.subVectors(t,i);let c=Ki.dot(_o),h=Qi.dot(_o);if(c<=0&&h<=0)return e.copy(i);vo.subVectors(t,s);let l=Ki.dot(vo),u=Qi.dot(vo);if(l>=0&&u<=l)return e.copy(s);let f=c*u-l*h;if(f<=0&&c>=0&&l<=0)return o=c/(c-l),e.copy(i).addScaledVector(Ki,o);Mo.subVectors(t,r);let p=Ki.dot(Mo),g=Qi.dot(Mo);if(g>=0&&p<=g)return e.copy(r);let x=p*h-c*g;if(x<=0&&h>=0&&g<=0)return a=h/(h-g),e.copy(i).addScaledVector(Qi,a);let m=l*g-p*u;if(m<=0&&u-l>=0&&p-g>=0)return Jl.subVectors(r,s),a=(u-l)/(u-l+(p-g)),e.copy(s).addScaledVector(Jl,a);let d=1/(m+x+f);return o=x*d,a=f*d,e.copy(i).addScaledVector(Ki,o).addScaledVector(Qi,a)}equals(t){return t.a.equals(this.a)&&t.b.equals(this.b)&&t.c.equals(this.c)}},Gh={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},ii={h:0,s:0,l:0},Sr={h:0,s:0,l:0};function bo(n,t,e){return e<0&&(e+=1),e>1&&(e-=1),e<1/6?n+(t-n)*6*e:e<1/2?t:e<2/3?n+(t-n)*6*(2/3-e):n}var Et=class{constructor(t,e,i){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(t,e,i)}set(t,e,i){if(e===void 0&&i===void 0){let s=t;s&&s.isColor?this.copy(s):typeof s=="number"?this.setHex(s):typeof s=="string"&&this.setStyle(s)}else this.setRGB(t,e,i);return this}setScalar(t){return this.r=t,this.g=t,this.b=t,this}setHex(t,e=Ve){return t=Math.floor(t),this.r=(t>>16&255)/255,this.g=(t>>8&255)/255,this.b=(t&255)/255,ae.toWorkingColorSpace(this,e),this}setRGB(t,e,i,s=ae.workingColorSpace){return this.r=t,this.g=e,this.b=i,ae.toWorkingColorSpace(this,s),this}setHSL(t,e,i,s=ae.workingColorSpace){if(t=Gd(t,1),e=an(e,0,1),i=an(i,0,1),e===0)this.r=this.g=this.b=i;else{let r=i<=.5?i*(1+e):i+e-i*e,o=2*i-r;this.r=bo(o,r,t+1/3),this.g=bo(o,r,t),this.b=bo(o,r,t-1/3)}return ae.toWorkingColorSpace(this,s),this}setStyle(t,e=Ve){function i(r){r!==void 0&&parseFloat(r)<1&&console.warn("THREE.Color: Alpha component of "+t+" will be ignored.")}let s;if(s=/^(\w+)\(([^\)]*)\)/.exec(t)){let r,o=s[1],a=s[2];switch(o){case"rgb":case"rgba":if(r=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return i(r[4]),this.setRGB(Math.min(255,parseInt(r[1],10))/255,Math.min(255,parseInt(r[2],10))/255,Math.min(255,parseInt(r[3],10))/255,e);if(r=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return i(r[4]),this.setRGB(Math.min(100,parseInt(r[1],10))/100,Math.min(100,parseInt(r[2],10))/100,Math.min(100,parseInt(r[3],10))/100,e);break;case"hsl":case"hsla":if(r=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return i(r[4]),this.setHSL(parseFloat(r[1])/360,parseFloat(r[2])/100,parseFloat(r[3])/100,e);break;default:console.warn("THREE.Color: Unknown color model "+t)}}else if(s=/^\#([A-Fa-f\d]+)$/.exec(t)){let r=s[1],o=r.length;if(o===3)return this.setRGB(parseInt(r.charAt(0),16)/15,parseInt(r.charAt(1),16)/15,parseInt(r.charAt(2),16)/15,e);if(o===6)return this.setHex(parseInt(r,16),e);console.warn("THREE.Color: Invalid hex color "+t)}else if(t&&t.length>0)return this.setColorName(t,e);return this}setColorName(t,e=Ve){let i=Gh[t.toLowerCase()];return i!==void 0?this.setHex(i,e):console.warn("THREE.Color: Unknown color "+t),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(t){return this.r=t.r,this.g=t.g,this.b=t.b,this}copySRGBToLinear(t){return this.r=ds(t.r),this.g=ds(t.g),this.b=ds(t.b),this}copyLinearToSRGB(t){return this.r=lo(t.r),this.g=lo(t.g),this.b=lo(t.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(t=Ve){return ae.fromWorkingColorSpace(Ze.copy(this),t),Math.round(an(Ze.r*255,0,255))*65536+Math.round(an(Ze.g*255,0,255))*256+Math.round(an(Ze.b*255,0,255))}getHexString(t=Ve){return("000000"+this.getHex(t).toString(16)).slice(-6)}getHSL(t,e=ae.workingColorSpace){ae.fromWorkingColorSpace(Ze.copy(this),e);let i=Ze.r,s=Ze.g,r=Ze.b,o=Math.max(i,s,r),a=Math.min(i,s,r),c,h,l=(a+o)/2;if(a===o)c=0,h=0;else{let u=o-a;switch(h=l<=.5?u/(o+a):u/(2-o-a),o){case i:c=(s-r)/u+(s<r?6:0);break;case s:c=(r-i)/u+2;break;case r:c=(i-s)/u+4;break}c/=6}return t.h=c,t.s=h,t.l=l,t}getRGB(t,e=ae.workingColorSpace){return ae.fromWorkingColorSpace(Ze.copy(this),e),t.r=Ze.r,t.g=Ze.g,t.b=Ze.b,t}getStyle(t=Ve){ae.fromWorkingColorSpace(Ze.copy(this),t);let e=Ze.r,i=Ze.g,s=Ze.b;return t!==Ve?`color(${t} ${e.toFixed(3)} ${i.toFixed(3)} ${s.toFixed(3)})`:`rgb(${Math.round(e*255)},${Math.round(i*255)},${Math.round(s*255)})`}offsetHSL(t,e,i){return this.getHSL(ii),this.setHSL(ii.h+t,ii.s+e,ii.l+i)}add(t){return this.r+=t.r,this.g+=t.g,this.b+=t.b,this}addColors(t,e){return this.r=t.r+e.r,this.g=t.g+e.g,this.b=t.b+e.b,this}addScalar(t){return this.r+=t,this.g+=t,this.b+=t,this}sub(t){return this.r=Math.max(0,this.r-t.r),this.g=Math.max(0,this.g-t.g),this.b=Math.max(0,this.b-t.b),this}multiply(t){return this.r*=t.r,this.g*=t.g,this.b*=t.b,this}multiplyScalar(t){return this.r*=t,this.g*=t,this.b*=t,this}lerp(t,e){return this.r+=(t.r-this.r)*e,this.g+=(t.g-this.g)*e,this.b+=(t.b-this.b)*e,this}lerpColors(t,e,i){return this.r=t.r+(e.r-t.r)*i,this.g=t.g+(e.g-t.g)*i,this.b=t.b+(e.b-t.b)*i,this}lerpHSL(t,e){this.getHSL(ii),t.getHSL(Sr);let i=oo(ii.h,Sr.h,e),s=oo(ii.s,Sr.s,e),r=oo(ii.l,Sr.l,e);return this.setHSL(i,s,r),this}setFromVector3(t){return this.r=t.x,this.g=t.y,this.b=t.z,this}applyMatrix3(t){let e=this.r,i=this.g,s=this.b,r=t.elements;return this.r=r[0]*e+r[3]*i+r[6]*s,this.g=r[1]*e+r[4]*i+r[7]*s,this.b=r[2]*e+r[5]*i+r[8]*s,this}equals(t){return t.r===this.r&&t.g===this.g&&t.b===this.b}fromArray(t,e=0){return this.r=t[e],this.g=t[e+1],this.b=t[e+2],this}toArray(t=[],e=0){return t[e]=this.r,t[e+1]=this.g,t[e+2]=this.b,t}fromBufferAttribute(t,e){return this.r=t.getX(e),this.g=t.getY(e),this.b=t.getZ(e),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}},Ze=new Et;Et.NAMES=Gh;var ef=0,Yn=class extends hi{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:ef++}),this.uuid=nr(),this.name="",this.type="Material",this.blending=us,this.side=li,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=zo,this.blendDst=Do,this.blendEquation=Ti,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new Et(0,0,0),this.blendAlpha=0,this.depthFunc=Hr,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=Nl,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=Xi,this.stencilZFail=Xi,this.stencilZPass=Xi,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(t){this._alphaTest>0!=t>0&&this.version++,this._alphaTest=t}onBuild(){}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(t){if(t!==void 0)for(let e in t){let i=t[e];if(i===void 0){console.warn(`THREE.Material: parameter '${e}' has value of undefined.`);continue}let s=this[e];if(s===void 0){console.warn(`THREE.Material: '${e}' is not a property of THREE.${this.type}.`);continue}s&&s.isColor?s.set(i):s&&s.isVector3&&i&&i.isVector3?s.copy(i):this[e]=i}}toJSON(t){let e=t===void 0||typeof t=="string";e&&(t={textures:{},images:{}});let i={metadata:{version:4.6,type:"Material",generator:"Material.toJSON"}};i.uuid=this.uuid,i.type=this.type,this.name!==""&&(i.name=this.name),this.color&&this.color.isColor&&(i.color=this.color.getHex()),this.roughness!==void 0&&(i.roughness=this.roughness),this.metalness!==void 0&&(i.metalness=this.metalness),this.sheen!==void 0&&(i.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(i.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(i.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(i.emissive=this.emissive.getHex()),this.emissiveIntensity&&this.emissiveIntensity!==1&&(i.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(i.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(i.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(i.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(i.shininess=this.shininess),this.clearcoat!==void 0&&(i.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(i.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(i.clearcoatMap=this.clearcoatMap.toJSON(t).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(i.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(t).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(i.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(t).uuid,i.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.iridescence!==void 0&&(i.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(i.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(i.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(i.iridescenceMap=this.iridescenceMap.toJSON(t).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(i.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(t).uuid),this.anisotropy!==void 0&&(i.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(i.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(i.anisotropyMap=this.anisotropyMap.toJSON(t).uuid),this.map&&this.map.isTexture&&(i.map=this.map.toJSON(t).uuid),this.matcap&&this.matcap.isTexture&&(i.matcap=this.matcap.toJSON(t).uuid),this.alphaMap&&this.alphaMap.isTexture&&(i.alphaMap=this.alphaMap.toJSON(t).uuid),this.lightMap&&this.lightMap.isTexture&&(i.lightMap=this.lightMap.toJSON(t).uuid,i.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(i.aoMap=this.aoMap.toJSON(t).uuid,i.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(i.bumpMap=this.bumpMap.toJSON(t).uuid,i.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(i.normalMap=this.normalMap.toJSON(t).uuid,i.normalMapType=this.normalMapType,i.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(i.displacementMap=this.displacementMap.toJSON(t).uuid,i.displacementScale=this.displacementScale,i.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(i.roughnessMap=this.roughnessMap.toJSON(t).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(i.metalnessMap=this.metalnessMap.toJSON(t).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(i.emissiveMap=this.emissiveMap.toJSON(t).uuid),this.specularMap&&this.specularMap.isTexture&&(i.specularMap=this.specularMap.toJSON(t).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(i.specularIntensityMap=this.specularIntensityMap.toJSON(t).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(i.specularColorMap=this.specularColorMap.toJSON(t).uuid),this.envMap&&this.envMap.isTexture&&(i.envMap=this.envMap.toJSON(t).uuid,this.combine!==void 0&&(i.combine=this.combine)),this.envMapIntensity!==void 0&&(i.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(i.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(i.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(i.gradientMap=this.gradientMap.toJSON(t).uuid),this.transmission!==void 0&&(i.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(i.transmissionMap=this.transmissionMap.toJSON(t).uuid),this.thickness!==void 0&&(i.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(i.thicknessMap=this.thicknessMap.toJSON(t).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(i.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(i.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(i.size=this.size),this.shadowSide!==null&&(i.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(i.sizeAttenuation=this.sizeAttenuation),this.blending!==us&&(i.blending=this.blending),this.side!==li&&(i.side=this.side),this.vertexColors===!0&&(i.vertexColors=!0),this.opacity<1&&(i.opacity=this.opacity),this.transparent===!0&&(i.transparent=!0),this.blendSrc!==zo&&(i.blendSrc=this.blendSrc),this.blendDst!==Do&&(i.blendDst=this.blendDst),this.blendEquation!==Ti&&(i.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(i.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(i.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(i.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(i.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(i.blendAlpha=this.blendAlpha),this.depthFunc!==Hr&&(i.depthFunc=this.depthFunc),this.depthTest===!1&&(i.depthTest=this.depthTest),this.depthWrite===!1&&(i.depthWrite=this.depthWrite),this.colorWrite===!1&&(i.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(i.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==Nl&&(i.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(i.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(i.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==Xi&&(i.stencilFail=this.stencilFail),this.stencilZFail!==Xi&&(i.stencilZFail=this.stencilZFail),this.stencilZPass!==Xi&&(i.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(i.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(i.rotation=this.rotation),this.polygonOffset===!0&&(i.polygonOffset=!0),this.polygonOffsetFactor!==0&&(i.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(i.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(i.linewidth=this.linewidth),this.dashSize!==void 0&&(i.dashSize=this.dashSize),this.gapSize!==void 0&&(i.gapSize=this.gapSize),this.scale!==void 0&&(i.scale=this.scale),this.dithering===!0&&(i.dithering=!0),this.alphaTest>0&&(i.alphaTest=this.alphaTest),this.alphaHash===!0&&(i.alphaHash=!0),this.alphaToCoverage===!0&&(i.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(i.premultipliedAlpha=!0),this.forceSinglePass===!0&&(i.forceSinglePass=!0),this.wireframe===!0&&(i.wireframe=!0),this.wireframeLinewidth>1&&(i.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(i.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(i.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(i.flatShading=!0),this.visible===!1&&(i.visible=!1),this.toneMapped===!1&&(i.toneMapped=!1),this.fog===!1&&(i.fog=!1),Object.keys(this.userData).length>0&&(i.userData=this.userData);function s(r){let o=[];for(let a in r){let c=r[a];delete c.metadata,o.push(c)}return o}if(e){let r=s(t.textures),o=s(t.images);r.length>0&&(i.textures=r),o.length>0&&(i.images=o)}return i}clone(){return new this.constructor().copy(this)}copy(t){this.name=t.name,this.blending=t.blending,this.side=t.side,this.vertexColors=t.vertexColors,this.opacity=t.opacity,this.transparent=t.transparent,this.blendSrc=t.blendSrc,this.blendDst=t.blendDst,this.blendEquation=t.blendEquation,this.blendSrcAlpha=t.blendSrcAlpha,this.blendDstAlpha=t.blendDstAlpha,this.blendEquationAlpha=t.blendEquationAlpha,this.blendColor.copy(t.blendColor),this.blendAlpha=t.blendAlpha,this.depthFunc=t.depthFunc,this.depthTest=t.depthTest,this.depthWrite=t.depthWrite,this.stencilWriteMask=t.stencilWriteMask,this.stencilFunc=t.stencilFunc,this.stencilRef=t.stencilRef,this.stencilFuncMask=t.stencilFuncMask,this.stencilFail=t.stencilFail,this.stencilZFail=t.stencilZFail,this.stencilZPass=t.stencilZPass,this.stencilWrite=t.stencilWrite;let e=t.clippingPlanes,i=null;if(e!==null){let s=e.length;i=new Array(s);for(let r=0;r!==s;++r)i[r]=e[r].clone()}return this.clippingPlanes=i,this.clipIntersection=t.clipIntersection,this.clipShadows=t.clipShadows,this.shadowSide=t.shadowSide,this.colorWrite=t.colorWrite,this.precision=t.precision,this.polygonOffset=t.polygonOffset,this.polygonOffsetFactor=t.polygonOffsetFactor,this.polygonOffsetUnits=t.polygonOffsetUnits,this.dithering=t.dithering,this.alphaTest=t.alphaTest,this.alphaHash=t.alphaHash,this.alphaToCoverage=t.alphaToCoverage,this.premultipliedAlpha=t.premultipliedAlpha,this.forceSinglePass=t.forceSinglePass,this.visible=t.visible,this.toneMapped=t.toneMapped,this.userData=JSON.parse(JSON.stringify(t.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(t){t===!0&&this.version++}},Je=class extends Yn{constructor(t){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new Et(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.combine=Ma,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.specularMap=t.specularMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.combine=t.combine,this.reflectivity=t.reflectivity,this.refractionRatio=t.refractionRatio,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.fog=t.fog,this}};var Ie=new z,Er=new Jt,Be=class{constructor(t,e,i=!1){if(Array.isArray(t))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,this.name="",this.array=t,this.itemSize=e,this.count=t!==void 0?t.length/e:0,this.normalized=i,this.usage=Ol,this._updateRange={offset:0,count:-1},this.updateRanges=[],this.gpuType=ri,this.version=0}onUploadCallback(){}set needsUpdate(t){t===!0&&this.version++}get updateRange(){return console.warn("THREE.BufferAttribute: updateRange() is deprecated and will be removed in r169. Use addUpdateRange() instead."),this._updateRange}setUsage(t){return this.usage=t,this}addUpdateRange(t,e){this.updateRanges.push({start:t,count:e})}clearUpdateRanges(){this.updateRanges.length=0}copy(t){return this.name=t.name,this.array=new t.array.constructor(t.array),this.itemSize=t.itemSize,this.count=t.count,this.normalized=t.normalized,this.usage=t.usage,this.gpuType=t.gpuType,this}copyAt(t,e,i){t*=this.itemSize,i*=e.itemSize;for(let s=0,r=this.itemSize;s<r;s++)this.array[t+s]=e.array[i+s];return this}copyArray(t){return this.array.set(t),this}applyMatrix3(t){if(this.itemSize===2)for(let e=0,i=this.count;e<i;e++)Er.fromBufferAttribute(this,e),Er.applyMatrix3(t),this.setXY(e,Er.x,Er.y);else if(this.itemSize===3)for(let e=0,i=this.count;e<i;e++)Ie.fromBufferAttribute(this,e),Ie.applyMatrix3(t),this.setXYZ(e,Ie.x,Ie.y,Ie.z);return this}applyMatrix4(t){for(let e=0,i=this.count;e<i;e++)Ie.fromBufferAttribute(this,e),Ie.applyMatrix4(t),this.setXYZ(e,Ie.x,Ie.y,Ie.z);return this}applyNormalMatrix(t){for(let e=0,i=this.count;e<i;e++)Ie.fromBufferAttribute(this,e),Ie.applyNormalMatrix(t),this.setXYZ(e,Ie.x,Ie.y,Ie.z);return this}transformDirection(t){for(let e=0,i=this.count;e<i;e++)Ie.fromBufferAttribute(this,e),Ie.transformDirection(t),this.setXYZ(e,Ie.x,Ie.y,Ie.z);return this}set(t,e=0){return this.array.set(t,e),this}getComponent(t,e){let i=this.array[t*this.itemSize+e];return this.normalized&&(i=Us(i,this.array)),i}setComponent(t,e,i){return this.normalized&&(i=rn(i,this.array)),this.array[t*this.itemSize+e]=i,this}getX(t){let e=this.array[t*this.itemSize];return this.normalized&&(e=Us(e,this.array)),e}setX(t,e){return this.normalized&&(e=rn(e,this.array)),this.array[t*this.itemSize]=e,this}getY(t){let e=this.array[t*this.itemSize+1];return this.normalized&&(e=Us(e,this.array)),e}setY(t,e){return this.normalized&&(e=rn(e,this.array)),this.array[t*this.itemSize+1]=e,this}getZ(t){let e=this.array[t*this.itemSize+2];return this.normalized&&(e=Us(e,this.array)),e}setZ(t,e){return this.normalized&&(e=rn(e,this.array)),this.array[t*this.itemSize+2]=e,this}getW(t){let e=this.array[t*this.itemSize+3];return this.normalized&&(e=Us(e,this.array)),e}setW(t,e){return this.normalized&&(e=rn(e,this.array)),this.array[t*this.itemSize+3]=e,this}setXY(t,e,i){return t*=this.itemSize,this.normalized&&(e=rn(e,this.array),i=rn(i,this.array)),this.array[t+0]=e,this.array[t+1]=i,this}setXYZ(t,e,i,s){return t*=this.itemSize,this.normalized&&(e=rn(e,this.array),i=rn(i,this.array),s=rn(s,this.array)),this.array[t+0]=e,this.array[t+1]=i,this.array[t+2]=s,this}setXYZW(t,e,i,s,r){return t*=this.itemSize,this.normalized&&(e=rn(e,this.array),i=rn(i,this.array),s=rn(s,this.array),r=rn(r,this.array)),this.array[t+0]=e,this.array[t+1]=i,this.array[t+2]=s,this.array[t+3]=r,this}onUpload(t){return this.onUploadCallback=t,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){let t={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(t.name=this.name),this.usage!==Ol&&(t.usage=this.usage),t}};var ea=class extends Be{constructor(t,e,i){super(new Uint16Array(t),e,i)}};var na=class extends Be{constructor(t,e,i){super(new Uint32Array(t),e,i)}};var oe=class extends Be{constructor(t,e,i){super(new Float32Array(t),e,i)}};var nf=0,mn=new ve,wo=new ke,ts=new z,hn=new qn,Bs=new qn,Fe=new z,He=class n extends hi{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:nf++}),this.uuid=nr(),this.name="",this.type="BufferGeometry",this.index=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(t){return Array.isArray(t)?this.index=new(Hh(t)?na:ea)(t,1):this.index=t,this}getAttribute(t){return this.attributes[t]}setAttribute(t,e){return this.attributes[t]=e,this}deleteAttribute(t){return delete this.attributes[t],this}hasAttribute(t){return this.attributes[t]!==void 0}addGroup(t,e,i=0){this.groups.push({start:t,count:e,materialIndex:i})}clearGroups(){this.groups=[]}setDrawRange(t,e){this.drawRange.start=t,this.drawRange.count=e}applyMatrix4(t){let e=this.attributes.position;e!==void 0&&(e.applyMatrix4(t),e.needsUpdate=!0);let i=this.attributes.normal;if(i!==void 0){let r=new $t().getNormalMatrix(t);i.applyNormalMatrix(r),i.needsUpdate=!0}let s=this.attributes.tangent;return s!==void 0&&(s.transformDirection(t),s.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(t){return mn.makeRotationFromQuaternion(t),this.applyMatrix4(mn),this}rotateX(t){return mn.makeRotationX(t),this.applyMatrix4(mn),this}rotateY(t){return mn.makeRotationY(t),this.applyMatrix4(mn),this}rotateZ(t){return mn.makeRotationZ(t),this.applyMatrix4(mn),this}translate(t,e,i){return mn.makeTranslation(t,e,i),this.applyMatrix4(mn),this}scale(t,e,i){return mn.makeScale(t,e,i),this.applyMatrix4(mn),this}lookAt(t){return wo.lookAt(t),wo.updateMatrix(),this.applyMatrix4(wo.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(ts).negate(),this.translate(ts.x,ts.y,ts.z),this}setFromPoints(t){let e=[];for(let i=0,s=t.length;i<s;i++){let r=t[i];e.push(r.x,r.y,r.z||0)}return this.setAttribute("position",new oe(e,3)),this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new qn);let t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){console.error('THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box. Alternatively set "mesh.frustumCulled" to "false".',this),this.boundingBox.set(new z(-1/0,-1/0,-1/0),new z(1/0,1/0,1/0));return}if(t!==void 0){if(this.boundingBox.setFromBufferAttribute(t),e)for(let i=0,s=e.length;i<s;i++){let r=e[i];hn.setFromBufferAttribute(r),this.morphTargetsRelative?(Fe.addVectors(this.boundingBox.min,hn.min),this.boundingBox.expandByPoint(Fe),Fe.addVectors(this.boundingBox.max,hn.max),this.boundingBox.expandByPoint(Fe)):(this.boundingBox.expandByPoint(hn.min),this.boundingBox.expandByPoint(hn.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new di);let t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){console.error('THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere. Alternatively set "mesh.frustumCulled" to "false".',this),this.boundingSphere.set(new z,1/0);return}if(t){let i=this.boundingSphere.center;if(hn.setFromBufferAttribute(t),e)for(let r=0,o=e.length;r<o;r++){let a=e[r];Bs.setFromBufferAttribute(a),this.morphTargetsRelative?(Fe.addVectors(hn.min,Bs.min),hn.expandByPoint(Fe),Fe.addVectors(hn.max,Bs.max),hn.expandByPoint(Fe)):(hn.expandByPoint(Bs.min),hn.expandByPoint(Bs.max))}hn.getCenter(i);let s=0;for(let r=0,o=t.count;r<o;r++)Fe.fromBufferAttribute(t,r),s=Math.max(s,i.distanceToSquared(Fe));if(e)for(let r=0,o=e.length;r<o;r++){let a=e[r],c=this.morphTargetsRelative;for(let h=0,l=a.count;h<l;h++)Fe.fromBufferAttribute(a,h),c&&(ts.fromBufferAttribute(t,h),Fe.add(ts)),s=Math.max(s,i.distanceToSquared(Fe))}this.boundingSphere.radius=Math.sqrt(s),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){let t=this.index,e=this.attributes;if(t===null||e.position===void 0||e.normal===void 0||e.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}let i=t.array,s=e.position.array,r=e.normal.array,o=e.uv.array,a=s.length/3;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new Be(new Float32Array(4*a),4));let c=this.getAttribute("tangent").array,h=[],l=[];for(let w=0;w<a;w++)h[w]=new z,l[w]=new z;let u=new z,f=new z,p=new z,g=new Jt,x=new Jt,m=new Jt,d=new z,M=new z;function y(w,O,Z){u.fromArray(s,w*3),f.fromArray(s,O*3),p.fromArray(s,Z*3),g.fromArray(o,w*2),x.fromArray(o,O*2),m.fromArray(o,Z*2),f.sub(u),p.sub(u),x.sub(g),m.sub(g);let tt=1/(x.x*m.y-m.x*x.y);isFinite(tt)&&(d.copy(f).multiplyScalar(m.y).addScaledVector(p,-x.y).multiplyScalar(tt),M.copy(p).multiplyScalar(x.x).addScaledVector(f,-m.x).multiplyScalar(tt),h[w].add(d),h[O].add(d),h[Z].add(d),l[w].add(M),l[O].add(M),l[Z].add(M))}let E=this.groups;E.length===0&&(E=[{start:0,count:i.length}]);for(let w=0,O=E.length;w<O;++w){let Z=E[w],tt=Z.start,L=Z.count;for(let F=tt,Q=tt+L;F<Q;F+=3)y(i[F+0],i[F+1],i[F+2])}let I=new z,A=new z,R=new z,k=new z;function v(w){R.fromArray(r,w*3),k.copy(R);let O=h[w];I.copy(O),I.sub(R.multiplyScalar(R.dot(O))).normalize(),A.crossVectors(k,O);let tt=A.dot(l[w])<0?-1:1;c[w*4]=I.x,c[w*4+1]=I.y,c[w*4+2]=I.z,c[w*4+3]=tt}for(let w=0,O=E.length;w<O;++w){let Z=E[w],tt=Z.start,L=Z.count;for(let F=tt,Q=tt+L;F<Q;F+=3)v(i[F+0]),v(i[F+1]),v(i[F+2])}}computeVertexNormals(){let t=this.index,e=this.getAttribute("position");if(e!==void 0){let i=this.getAttribute("normal");if(i===void 0)i=new Be(new Float32Array(e.count*3),3),this.setAttribute("normal",i);else for(let f=0,p=i.count;f<p;f++)i.setXYZ(f,0,0,0);let s=new z,r=new z,o=new z,a=new z,c=new z,h=new z,l=new z,u=new z;if(t)for(let f=0,p=t.count;f<p;f+=3){let g=t.getX(f+0),x=t.getX(f+1),m=t.getX(f+2);s.fromBufferAttribute(e,g),r.fromBufferAttribute(e,x),o.fromBufferAttribute(e,m),l.subVectors(o,r),u.subVectors(s,r),l.cross(u),a.fromBufferAttribute(i,g),c.fromBufferAttribute(i,x),h.fromBufferAttribute(i,m),a.add(l),c.add(l),h.add(l),i.setXYZ(g,a.x,a.y,a.z),i.setXYZ(x,c.x,c.y,c.z),i.setXYZ(m,h.x,h.y,h.z)}else for(let f=0,p=e.count;f<p;f+=3)s.fromBufferAttribute(e,f+0),r.fromBufferAttribute(e,f+1),o.fromBufferAttribute(e,f+2),l.subVectors(o,r),u.subVectors(s,r),l.cross(u),i.setXYZ(f+0,l.x,l.y,l.z),i.setXYZ(f+1,l.x,l.y,l.z),i.setXYZ(f+2,l.x,l.y,l.z);this.normalizeNormals(),i.needsUpdate=!0}}normalizeNormals(){let t=this.attributes.normal;for(let e=0,i=t.count;e<i;e++)Fe.fromBufferAttribute(t,e),Fe.normalize(),t.setXYZ(e,Fe.x,Fe.y,Fe.z)}toNonIndexed(){function t(a,c){let h=a.array,l=a.itemSize,u=a.normalized,f=new h.constructor(c.length*l),p=0,g=0;for(let x=0,m=c.length;x<m;x++){a.isInterleavedBufferAttribute?p=c[x]*a.data.stride+a.offset:p=c[x]*l;for(let d=0;d<l;d++)f[g++]=h[p++]}return new Be(f,l,u)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;let e=new n,i=this.index.array,s=this.attributes;for(let a in s){let c=s[a],h=t(c,i);e.setAttribute(a,h)}let r=this.morphAttributes;for(let a in r){let c=[],h=r[a];for(let l=0,u=h.length;l<u;l++){let f=h[l],p=t(f,i);c.push(p)}e.morphAttributes[a]=c}e.morphTargetsRelative=this.morphTargetsRelative;let o=this.groups;for(let a=0,c=o.length;a<c;a++){let h=o[a];e.addGroup(h.start,h.count,h.materialIndex)}return e}toJSON(){let t={metadata:{version:4.6,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(t.uuid=this.uuid,t.type=this.type,this.name!==""&&(t.name=this.name),Object.keys(this.userData).length>0&&(t.userData=this.userData),this.parameters!==void 0){let c=this.parameters;for(let h in c)c[h]!==void 0&&(t[h]=c[h]);return t}t.data={attributes:{}};let e=this.index;e!==null&&(t.data.index={type:e.array.constructor.name,array:Array.prototype.slice.call(e.array)});let i=this.attributes;for(let c in i){let h=i[c];t.data.attributes[c]=h.toJSON(t.data)}let s={},r=!1;for(let c in this.morphAttributes){let h=this.morphAttributes[c],l=[];for(let u=0,f=h.length;u<f;u++){let p=h[u];l.push(p.toJSON(t.data))}l.length>0&&(s[c]=l,r=!0)}r&&(t.data.morphAttributes=s,t.data.morphTargetsRelative=this.morphTargetsRelative);let o=this.groups;o.length>0&&(t.data.groups=JSON.parse(JSON.stringify(o)));let a=this.boundingSphere;return a!==null&&(t.data.boundingSphere={center:a.center.toArray(),radius:a.radius}),t}clone(){return new this.constructor().copy(this)}copy(t){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;let e={};this.name=t.name;let i=t.index;i!==null&&this.setIndex(i.clone(e));let s=t.attributes;for(let h in s){let l=s[h];this.setAttribute(h,l.clone(e))}let r=t.morphAttributes;for(let h in r){let l=[],u=r[h];for(let f=0,p=u.length;f<p;f++)l.push(u[f].clone(e));this.morphAttributes[h]=l}this.morphTargetsRelative=t.morphTargetsRelative;let o=t.groups;for(let h=0,l=o.length;h<l;h++){let u=o[h];this.addGroup(u.start,u.count,u.materialIndex)}let a=t.boundingBox;a!==null&&(this.boundingBox=a.clone());let c=t.boundingSphere;return c!==null&&(this.boundingSphere=c.clone()),this.drawRange.start=t.drawRange.start,this.drawRange.count=t.drawRange.count,this.userData=t.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}},jl=new ve,wi=new Kr,Tr=new di,Kl=new z,es=new z,ns=new z,is=new z,So=new z,Ar=new z,Rr=new Jt,Cr=new Jt,Pr=new Jt,Ql=new z,th=new z,eh=new z,Ir=new z,Lr=new z,Mt=class extends ke{constructor(t=new He,e=new Je){super(),this.isMesh=!0,this.type="Mesh",this.geometry=t,this.material=e,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),t.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=t.morphTargetInfluences.slice()),t.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},t.morphTargetDictionary)),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}updateMorphTargets(){let e=this.geometry.morphAttributes,i=Object.keys(e);if(i.length>0){let s=e[i[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,o=s.length;r<o;r++){let a=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=r}}}}getVertexPosition(t,e){let i=this.geometry,s=i.attributes.position,r=i.morphAttributes.position,o=i.morphTargetsRelative;e.fromBufferAttribute(s,t);let a=this.morphTargetInfluences;if(r&&a){Ar.set(0,0,0);for(let c=0,h=r.length;c<h;c++){let l=a[c],u=r[c];l!==0&&(So.fromBufferAttribute(u,t),o?Ar.addScaledVector(So,l):Ar.addScaledVector(So.sub(e),l))}e.add(Ar)}return e}raycast(t,e){let i=this.geometry,s=this.material,r=this.matrixWorld;s!==void 0&&(i.boundingSphere===null&&i.computeBoundingSphere(),Tr.copy(i.boundingSphere),Tr.applyMatrix4(r),wi.copy(t.ray).recast(t.near),!(Tr.containsPoint(wi.origin)===!1&&(wi.intersectSphere(Tr,Kl)===null||wi.origin.distanceToSquared(Kl)>(t.far-t.near)**2))&&(jl.copy(r).invert(),wi.copy(t.ray).applyMatrix4(jl),!(i.boundingBox!==null&&wi.intersectsBox(i.boundingBox)===!1)&&this._computeIntersections(t,e,wi)))}_computeIntersections(t,e,i){let s,r=this.geometry,o=this.material,a=r.index,c=r.attributes.position,h=r.attributes.uv,l=r.attributes.uv1,u=r.attributes.normal,f=r.groups,p=r.drawRange;if(a!==null)if(Array.isArray(o))for(let g=0,x=f.length;g<x;g++){let m=f[g],d=o[m.materialIndex],M=Math.max(m.start,p.start),y=Math.min(a.count,Math.min(m.start+m.count,p.start+p.count));for(let E=M,I=y;E<I;E+=3){let A=a.getX(E),R=a.getX(E+1),k=a.getX(E+2);s=zr(this,d,t,i,h,l,u,A,R,k),s&&(s.faceIndex=Math.floor(E/3),s.face.materialIndex=m.materialIndex,e.push(s))}}else{let g=Math.max(0,p.start),x=Math.min(a.count,p.start+p.count);for(let m=g,d=x;m<d;m+=3){let M=a.getX(m),y=a.getX(m+1),E=a.getX(m+2);s=zr(this,o,t,i,h,l,u,M,y,E),s&&(s.faceIndex=Math.floor(m/3),e.push(s))}}else if(c!==void 0)if(Array.isArray(o))for(let g=0,x=f.length;g<x;g++){let m=f[g],d=o[m.materialIndex],M=Math.max(m.start,p.start),y=Math.min(c.count,Math.min(m.start+m.count,p.start+p.count));for(let E=M,I=y;E<I;E+=3){let A=E,R=E+1,k=E+2;s=zr(this,d,t,i,h,l,u,A,R,k),s&&(s.faceIndex=Math.floor(E/3),s.face.materialIndex=m.materialIndex,e.push(s))}}else{let g=Math.max(0,p.start),x=Math.min(c.count,p.start+p.count);for(let m=g,d=x;m<d;m+=3){let M=m,y=m+1,E=m+2;s=zr(this,o,t,i,h,l,u,M,y,E),s&&(s.faceIndex=Math.floor(m/3),e.push(s))}}}};function sf(n,t,e,i,s,r,o,a){let c;if(t.side===on?c=i.intersectTriangle(o,r,s,!0,a):c=i.intersectTriangle(s,r,o,t.side===li,a),c===null)return null;Lr.copy(a),Lr.applyMatrix4(n.matrixWorld);let h=e.ray.origin.distanceTo(Lr);return h<e.near||h>e.far?null:{distance:h,point:Lr.clone(),object:n}}function zr(n,t,e,i,s,r,o,a,c,h){n.getVertexPosition(a,es),n.getVertexPosition(c,ns),n.getVertexPosition(h,is);let l=sf(n,t,e,i,es,ns,is,Ir);if(l){s&&(Rr.fromBufferAttribute(s,a),Cr.fromBufferAttribute(s,c),Pr.fromBufferAttribute(s,h),l.uv=cs.getInterpolation(Ir,es,ns,is,Rr,Cr,Pr,new Jt)),r&&(Rr.fromBufferAttribute(r,a),Cr.fromBufferAttribute(r,c),Pr.fromBufferAttribute(r,h),l.uv1=cs.getInterpolation(Ir,es,ns,is,Rr,Cr,Pr,new Jt),l.uv2=l.uv1),o&&(Ql.fromBufferAttribute(o,a),th.fromBufferAttribute(o,c),eh.fromBufferAttribute(o,h),l.normal=cs.getInterpolation(Ir,es,ns,is,Ql,th,eh,new z),l.normal.dot(i.direction)>0&&l.normal.multiplyScalar(-1));let u={a,b:c,c:h,normal:new z,materialIndex:0};cs.getNormal(es,ns,is,u.normal),l.face=u}return l}var kt=class n extends He{constructor(t=1,e=1,i=1,s=1,r=1,o=1){super(),this.type="BoxGeometry",this.parameters={width:t,height:e,depth:i,widthSegments:s,heightSegments:r,depthSegments:o};let a=this;s=Math.floor(s),r=Math.floor(r),o=Math.floor(o);let c=[],h=[],l=[],u=[],f=0,p=0;g("z","y","x",-1,-1,i,e,t,o,r,0),g("z","y","x",1,-1,i,e,-t,o,r,1),g("x","z","y",1,1,t,i,e,s,o,2),g("x","z","y",1,-1,t,i,-e,s,o,3),g("x","y","z",1,-1,t,e,i,s,r,4),g("x","y","z",-1,-1,t,e,-i,s,r,5),this.setIndex(c),this.setAttribute("position",new oe(h,3)),this.setAttribute("normal",new oe(l,3)),this.setAttribute("uv",new oe(u,2));function g(x,m,d,M,y,E,I,A,R,k,v){let w=E/R,O=I/k,Z=E/2,tt=I/2,L=A/2,F=R+1,Q=k+1,$=0,J=0,j=new z;for(let et=0;et<Q;et++){let ht=et*O-tt;for(let pt=0;pt<F;pt++){let Y=pt*w-Z;j[x]=Y*M,j[m]=ht*y,j[d]=L,h.push(j.x,j.y,j.z),j[x]=0,j[m]=0,j[d]=A>0?1:-1,l.push(j.x,j.y,j.z),u.push(pt/R),u.push(1-et/k),$+=1}}for(let et=0;et<k;et++)for(let ht=0;ht<R;ht++){let pt=f+ht+F*et,Y=f+ht+F*(et+1),nt=f+(ht+1)+F*(et+1),mt=f+(ht+1)+F*et;c.push(pt,Y,mt),c.push(Y,nt,mt),J+=6}a.addGroup(p,J,v),p+=J,f+=$}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new n(t.width,t.height,t.depth,t.widthSegments,t.heightSegments,t.depthSegments)}};function xs(n){let t={};for(let e in n){t[e]={};for(let i in n[e]){let s=n[e][i];s&&(s.isColor||s.isMatrix3||s.isMatrix4||s.isVector2||s.isVector3||s.isVector4||s.isTexture||s.isQuaternion)?s.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),t[e][i]=null):t[e][i]=s.clone():Array.isArray(s)?t[e][i]=s.slice():t[e][i]=s}}return t}function tn(n){let t={};for(let e=0;e<n.length;e++){let i=xs(n[e]);for(let s in i)t[s]=i[s]}return t}function rf(n){let t=[];for(let e=0;e<n.length;e++)t.push(n[e].clone());return t}function Vh(n){return n.getRenderTarget()===null?n.outputColorSpace:ae.workingColorSpace}var af={clone:xs,merge:tn},of=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,cf=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`,Zn=class extends Yn{constructor(t){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=of,this.fragmentShader=cf,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={derivatives:!1,fragDepth:!1,drawBuffers:!1,shaderTextureLOD:!1,clipCullDistance:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,t!==void 0&&this.setValues(t)}copy(t){return super.copy(t),this.fragmentShader=t.fragmentShader,this.vertexShader=t.vertexShader,this.uniforms=xs(t.uniforms),this.uniformsGroups=rf(t.uniformsGroups),this.defines=Object.assign({},t.defines),this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.fog=t.fog,this.lights=t.lights,this.clipping=t.clipping,this.extensions=Object.assign({},t.extensions),this.glslVersion=t.glslVersion,this}toJSON(t){let e=super.toJSON(t);e.glslVersion=this.glslVersion,e.uniforms={};for(let s in this.uniforms){let o=this.uniforms[s].value;o&&o.isTexture?e.uniforms[s]={type:"t",value:o.toJSON(t).uuid}:o&&o.isColor?e.uniforms[s]={type:"c",value:o.getHex()}:o&&o.isVector2?e.uniforms[s]={type:"v2",value:o.toArray()}:o&&o.isVector3?e.uniforms[s]={type:"v3",value:o.toArray()}:o&&o.isVector4?e.uniforms[s]={type:"v4",value:o.toArray()}:o&&o.isMatrix3?e.uniforms[s]={type:"m3",value:o.toArray()}:o&&o.isMatrix4?e.uniforms[s]={type:"m4",value:o.toArray()}:e.uniforms[s]={value:o}}Object.keys(this.defines).length>0&&(e.defines=this.defines),e.vertexShader=this.vertexShader,e.fragmentShader=this.fragmentShader,e.lights=this.lights,e.clipping=this.clipping;let i={};for(let s in this.extensions)this.extensions[s]===!0&&(i[s]=!0);return Object.keys(i).length>0&&(e.extensions=i),e}},ia=class extends ke{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new ve,this.projectionMatrix=new ve,this.projectionMatrixInverse=new ve,this.coordinateSystem=Vn}copy(t,e){return super.copy(t,e),this.matrixWorldInverse.copy(t.matrixWorldInverse),this.projectionMatrix.copy(t.projectionMatrix),this.projectionMatrixInverse.copy(t.projectionMatrixInverse),this.coordinateSystem=t.coordinateSystem,this}getWorldDirection(t){return super.getWorldDirection(t).negate()}updateMatrixWorld(t){super.updateMatrixWorld(t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(t,e){super.updateWorldMatrix(t,e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}},$e=class extends ia{constructor(t=50,e=1,i=.1,s=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=t,this.zoom=1,this.near=i,this.far=s,this.focus=10,this.aspect=e,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.fov=t.fov,this.zoom=t.zoom,this.near=t.near,this.far=t.far,this.focus=t.focus,this.aspect=t.aspect,this.view=t.view===null?null:Object.assign({},t.view),this.filmGauge=t.filmGauge,this.filmOffset=t.filmOffset,this}setFocalLength(t){let e=.5*this.getFilmHeight()/t;this.fov=ko*2*Math.atan(e),this.updateProjectionMatrix()}getFocalLength(){let t=Math.tan(ao*.5*this.fov);return .5*this.getFilmHeight()/t}getEffectiveFOV(){return ko*2*Math.atan(Math.tan(ao*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}setViewOffset(t,e,i,s,r,o){this.aspect=t/e,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=i,this.view.offsetY=s,this.view.width=r,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let t=this.near,e=t*Math.tan(ao*.5*this.fov)/this.zoom,i=2*e,s=this.aspect*i,r=-.5*s,o=this.view;if(this.view!==null&&this.view.enabled){let c=o.fullWidth,h=o.fullHeight;r+=o.offsetX*s/c,e-=o.offsetY*i/h,s*=o.width/c,i*=o.height/h}let a=this.filmOffset;a!==0&&(r+=t*a/this.getFilmWidth()),this.projectionMatrix.makePerspective(r,r+s,e,e-i,t,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){let e=super.toJSON(t);return e.object.fov=this.fov,e.object.zoom=this.zoom,e.object.near=this.near,e.object.far=this.far,e.object.focus=this.focus,e.object.aspect=this.aspect,this.view!==null&&(e.object.view=Object.assign({},this.view)),e.object.filmGauge=this.filmGauge,e.object.filmOffset=this.filmOffset,e}},ss=-90,rs=1,Wo=class extends ke{constructor(t,e,i){super(),this.type="CubeCamera",this.renderTarget=i,this.coordinateSystem=null,this.activeMipmapLevel=0;let s=new $e(ss,rs,t,e);s.layers=this.layers,this.add(s);let r=new $e(ss,rs,t,e);r.layers=this.layers,this.add(r);let o=new $e(ss,rs,t,e);o.layers=this.layers,this.add(o);let a=new $e(ss,rs,t,e);a.layers=this.layers,this.add(a);let c=new $e(ss,rs,t,e);c.layers=this.layers,this.add(c);let h=new $e(ss,rs,t,e);h.layers=this.layers,this.add(h)}updateCoordinateSystem(){let t=this.coordinateSystem,e=this.children.concat(),[i,s,r,o,a,c]=e;for(let h of e)this.remove(h);if(t===Vn)i.up.set(0,1,0),i.lookAt(1,0,0),s.up.set(0,1,0),s.lookAt(-1,0,0),r.up.set(0,0,-1),r.lookAt(0,1,0),o.up.set(0,0,1),o.lookAt(0,-1,0),a.up.set(0,1,0),a.lookAt(0,0,1),c.up.set(0,1,0),c.lookAt(0,0,-1);else if(t===Yr)i.up.set(0,-1,0),i.lookAt(-1,0,0),s.up.set(0,-1,0),s.lookAt(1,0,0),r.up.set(0,0,1),r.lookAt(0,1,0),o.up.set(0,0,-1),o.lookAt(0,-1,0),a.up.set(0,-1,0),a.lookAt(0,0,1),c.up.set(0,-1,0),c.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+t);for(let h of e)this.add(h),h.updateMatrixWorld()}update(t,e){this.parent===null&&this.updateMatrixWorld();let{renderTarget:i,activeMipmapLevel:s}=this;this.coordinateSystem!==t.coordinateSystem&&(this.coordinateSystem=t.coordinateSystem,this.updateCoordinateSystem());let[r,o,a,c,h,l]=this.children,u=t.getRenderTarget(),f=t.getActiveCubeFace(),p=t.getActiveMipmapLevel(),g=t.xr.enabled;t.xr.enabled=!1;let x=i.texture.generateMipmaps;i.texture.generateMipmaps=!1,t.setRenderTarget(i,0,s),t.render(e,r),t.setRenderTarget(i,1,s),t.render(e,o),t.setRenderTarget(i,2,s),t.render(e,a),t.setRenderTarget(i,3,s),t.render(e,c),t.setRenderTarget(i,4,s),t.render(e,h),i.texture.generateMipmaps=x,t.setRenderTarget(i,5,s),t.render(e,l),t.setRenderTarget(u,f,p),t.xr.enabled=g,i.texture.needsPMREMUpdate=!0}},sa=class extends Sn{constructor(t,e,i,s,r,o,a,c,h,l){t=t!==void 0?t:[],e=e!==void 0?e:ps,super(t,e,i,s,r,o,a,c,h,l),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(t){this.image=t}},Xo=class extends Xn{constructor(t=1,e={}){super(t,t,e),this.isWebGLCubeRenderTarget=!0;let i={width:t,height:t,depth:1},s=[i,i,i,i,i,i];e.encoding!==void 0&&(Vs("THREE.WebGLCubeRenderTarget: option.encoding has been replaced by option.colorSpace."),e.colorSpace=e.encoding===Pi?Ve:xn),this.texture=new sa(s,e.mapping,e.wrapS,e.wrapT,e.magFilter,e.minFilter,e.format,e.type,e.anisotropy,e.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.generateMipmaps=e.generateMipmaps!==void 0?e.generateMipmaps:!1,this.texture.minFilter=e.minFilter!==void 0?e.minFilter:gn}fromEquirectangularTexture(t,e){this.texture.type=e.type,this.texture.colorSpace=e.colorSpace,this.texture.generateMipmaps=e.generateMipmaps,this.texture.minFilter=e.minFilter,this.texture.magFilter=e.magFilter;let i={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},s=new kt(5,5,5),r=new Zn({name:"CubemapFromEquirect",uniforms:xs(i.uniforms),vertexShader:i.vertexShader,fragmentShader:i.fragmentShader,side:on,blending:ai});r.uniforms.tEquirect.value=e;let o=new Mt(s,r),a=e.minFilter;return e.minFilter===Xs&&(e.minFilter=gn),new Wo(1,10,this).update(t,o),e.minFilter=a,o.geometry.dispose(),o.material.dispose(),this}clear(t,e,i,s){let r=t.getRenderTarget();for(let o=0;o<6;o++)t.setRenderTarget(this,o),t.clear(e,i,s);t.setRenderTarget(r)}},Eo=new z,lf=new z,hf=new $t,Gn=class{constructor(t=new z(1,0,0),e=0){this.isPlane=!0,this.normal=t,this.constant=e}set(t,e){return this.normal.copy(t),this.constant=e,this}setComponents(t,e,i,s){return this.normal.set(t,e,i),this.constant=s,this}setFromNormalAndCoplanarPoint(t,e){return this.normal.copy(t),this.constant=-e.dot(this.normal),this}setFromCoplanarPoints(t,e,i){let s=Eo.subVectors(i,e).cross(lf.subVectors(t,e)).normalize();return this.setFromNormalAndCoplanarPoint(s,t),this}copy(t){return this.normal.copy(t.normal),this.constant=t.constant,this}normalize(){let t=1/this.normal.length();return this.normal.multiplyScalar(t),this.constant*=t,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(t){return this.normal.dot(t)+this.constant}distanceToSphere(t){return this.distanceToPoint(t.center)-t.radius}projectPoint(t,e){return e.copy(t).addScaledVector(this.normal,-this.distanceToPoint(t))}intersectLine(t,e){let i=t.delta(Eo),s=this.normal.dot(i);if(s===0)return this.distanceToPoint(t.start)===0?e.copy(t.start):null;let r=-(t.start.dot(this.normal)+this.constant)/s;return r<0||r>1?null:e.copy(t.start).addScaledVector(i,r)}intersectsLine(t){let e=this.distanceToPoint(t.start),i=this.distanceToPoint(t.end);return e<0&&i>0||i<0&&e>0}intersectsBox(t){return t.intersectsPlane(this)}intersectsSphere(t){return t.intersectsPlane(this)}coplanarPoint(t){return t.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(t,e){let i=e||hf.getNormalMatrix(t),s=this.coplanarPoint(Eo).applyMatrix4(t),r=this.normal.applyMatrix3(i).normalize();return this.constant=-s.dot(r),this}translate(t){return this.constant-=t.dot(this.normal),this}equals(t){return t.normal.equals(this.normal)&&t.constant===this.constant}clone(){return new this.constructor().copy(this)}},Si=new di,Dr=new z,Ys=class{constructor(t=new Gn,e=new Gn,i=new Gn,s=new Gn,r=new Gn,o=new Gn){this.planes=[t,e,i,s,r,o]}set(t,e,i,s,r,o){let a=this.planes;return a[0].copy(t),a[1].copy(e),a[2].copy(i),a[3].copy(s),a[4].copy(r),a[5].copy(o),this}copy(t){let e=this.planes;for(let i=0;i<6;i++)e[i].copy(t.planes[i]);return this}setFromProjectionMatrix(t,e=Vn){let i=this.planes,s=t.elements,r=s[0],o=s[1],a=s[2],c=s[3],h=s[4],l=s[5],u=s[6],f=s[7],p=s[8],g=s[9],x=s[10],m=s[11],d=s[12],M=s[13],y=s[14],E=s[15];if(i[0].setComponents(c-r,f-h,m-p,E-d).normalize(),i[1].setComponents(c+r,f+h,m+p,E+d).normalize(),i[2].setComponents(c+o,f+l,m+g,E+M).normalize(),i[3].setComponents(c-o,f-l,m-g,E-M).normalize(),i[4].setComponents(c-a,f-u,m-x,E-y).normalize(),e===Vn)i[5].setComponents(c+a,f+u,m+x,E+y).normalize();else if(e===Yr)i[5].setComponents(a,u,x,y).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+e);return this}intersectsObject(t){if(t.boundingSphere!==void 0)t.boundingSphere===null&&t.computeBoundingSphere(),Si.copy(t.boundingSphere).applyMatrix4(t.matrixWorld);else{let e=t.geometry;e.boundingSphere===null&&e.computeBoundingSphere(),Si.copy(e.boundingSphere).applyMatrix4(t.matrixWorld)}return this.intersectsSphere(Si)}intersectsSprite(t){return Si.center.set(0,0,0),Si.radius=.7071067811865476,Si.applyMatrix4(t.matrixWorld),this.intersectsSphere(Si)}intersectsSphere(t){let e=this.planes,i=t.center,s=-t.radius;for(let r=0;r<6;r++)if(e[r].distanceToPoint(i)<s)return!1;return!0}intersectsBox(t){let e=this.planes;for(let i=0;i<6;i++){let s=e[i];if(Dr.x=s.normal.x>0?t.max.x:t.min.x,Dr.y=s.normal.y>0?t.max.y:t.min.y,Dr.z=s.normal.z>0?t.max.z:t.min.z,s.distanceToPoint(Dr)<0)return!1}return!0}containsPoint(t){let e=this.planes;for(let i=0;i<6;i++)if(e[i].distanceToPoint(t)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}};function Wh(){let n=null,t=!1,e=null,i=null;function s(r,o){e(r,o),i=n.requestAnimationFrame(s)}return{start:function(){t!==!0&&e!==null&&(i=n.requestAnimationFrame(s),t=!0)},stop:function(){n.cancelAnimationFrame(i),t=!1},setAnimationLoop:function(r){e=r},setContext:function(r){n=r}}}function uf(n,t){let e=t.isWebGL2,i=new WeakMap;function s(h,l){let u=h.array,f=h.usage,p=u.byteLength,g=n.createBuffer();n.bindBuffer(l,g),n.bufferData(l,u,f),h.onUploadCallback();let x;if(u instanceof Float32Array)x=n.FLOAT;else if(u instanceof Uint16Array)if(h.isFloat16BufferAttribute)if(e)x=n.HALF_FLOAT;else throw new Error("THREE.WebGLAttributes: Usage of Float16BufferAttribute requires WebGL2.");else x=n.UNSIGNED_SHORT;else if(u instanceof Int16Array)x=n.SHORT;else if(u instanceof Uint32Array)x=n.UNSIGNED_INT;else if(u instanceof Int32Array)x=n.INT;else if(u instanceof Int8Array)x=n.BYTE;else if(u instanceof Uint8Array)x=n.UNSIGNED_BYTE;else if(u instanceof Uint8ClampedArray)x=n.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+u);return{buffer:g,type:x,bytesPerElement:u.BYTES_PER_ELEMENT,version:h.version,size:p}}function r(h,l,u){let f=l.array,p=l._updateRange,g=l.updateRanges;if(n.bindBuffer(u,h),p.count===-1&&g.length===0&&n.bufferSubData(u,0,f),g.length!==0){for(let x=0,m=g.length;x<m;x++){let d=g[x];e?n.bufferSubData(u,d.start*f.BYTES_PER_ELEMENT,f,d.start,d.count):n.bufferSubData(u,d.start*f.BYTES_PER_ELEMENT,f.subarray(d.start,d.start+d.count))}l.clearUpdateRanges()}p.count!==-1&&(e?n.bufferSubData(u,p.offset*f.BYTES_PER_ELEMENT,f,p.offset,p.count):n.bufferSubData(u,p.offset*f.BYTES_PER_ELEMENT,f.subarray(p.offset,p.offset+p.count)),p.count=-1),l.onUploadCallback()}function o(h){return h.isInterleavedBufferAttribute&&(h=h.data),i.get(h)}function a(h){h.isInterleavedBufferAttribute&&(h=h.data);let l=i.get(h);l&&(n.deleteBuffer(l.buffer),i.delete(h))}function c(h,l){if(h.isGLBufferAttribute){let f=i.get(h);(!f||f.version<h.version)&&i.set(h,{buffer:h.buffer,type:h.type,bytesPerElement:h.elementSize,version:h.version});return}h.isInterleavedBufferAttribute&&(h=h.data);let u=i.get(h);if(u===void 0)i.set(h,s(h,l));else if(u.version<h.version){if(u.size!==h.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");r(u.buffer,h,l),u.version=h.version}}return{get:o,remove:a,update:c}}var ys=class n extends He{constructor(t=1,e=1,i=1,s=1){super(),this.type="PlaneGeometry",this.parameters={width:t,height:e,widthSegments:i,heightSegments:s};let r=t/2,o=e/2,a=Math.floor(i),c=Math.floor(s),h=a+1,l=c+1,u=t/a,f=e/c,p=[],g=[],x=[],m=[];for(let d=0;d<l;d++){let M=d*f-o;for(let y=0;y<h;y++){let E=y*u-r;g.push(E,-M,0),x.push(0,0,1),m.push(y/a),m.push(1-d/c)}}for(let d=0;d<c;d++)for(let M=0;M<a;M++){let y=M+h*d,E=M+h*(d+1),I=M+1+h*(d+1),A=M+1+h*d;p.push(y,E,A),p.push(E,I,A)}this.setIndex(p),this.setAttribute("position",new oe(g,3)),this.setAttribute("normal",new oe(x,3)),this.setAttribute("uv",new oe(m,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new n(t.width,t.height,t.widthSegments,t.heightSegments)}},df=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,ff=`#ifdef USE_ALPHAHASH
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
#endif`,pf=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,mf=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,gf=`#ifdef USE_ALPHATEST
	if ( diffuseColor.a < alphaTest ) discard;
#endif`,xf=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,yf=`#ifdef USE_AOMAP
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
#endif`,_f=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,vf=`#ifdef USE_BATCHING
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
#endif`,Mf=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( batchId );
#endif`,bf=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,wf=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,Sf=`float G_BlinnPhong_Implicit( ) {
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
} // validated`,Ef=`#ifdef USE_IRIDESCENCE
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
#endif`,Tf=`#ifdef USE_BUMPMAP
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
#endif`,Af=`#if NUM_CLIPPING_PLANES > 0
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
#endif`,Rf=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,Cf=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,Pf=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,If=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,Lf=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,zf=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR )
	varying vec3 vColor;
#endif`,Df=`#if defined( USE_COLOR_ALPHA )
	vColor = vec4( 1.0 );
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR )
	vColor = vec3( 1.0 );
#endif
#ifdef USE_COLOR
	vColor *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.xyz *= instanceColor.xyz;
#endif`,Uf=`#define PI 3.141592653589793
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
} // validated`,Nf=`#ifdef ENVMAP_TYPE_CUBE_UV
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
#endif`,Of=`vec3 transformedNormal = objectNormal;
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
#endif`,Ff=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,Bf=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,kf=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,Hf=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,Gf="gl_FragColor = linearToOutputTexel( gl_FragColor );",Vf=`
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
}`,Wf=`#ifdef USE_ENVMAP
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
#endif`,Xf=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,qf=`#ifdef USE_ENVMAP
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
#endif`,Yf=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,Zf=`#ifdef USE_ENVMAP
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
#endif`,$f=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,Jf=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,jf=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,Kf=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,Qf=`#ifdef USE_GRADIENTMAP
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
}`,tp=`#ifdef USE_LIGHTMAP
	vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
	vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
	reflectedLight.indirectDiffuse += lightMapIrradiance;
#endif`,ep=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,np=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,ip=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,sp=`uniform bool receiveShadow;
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
#endif`,rp=`#ifdef USE_ENVMAP
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
#endif`,ap=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,op=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,cp=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,lp=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,hp=`PhysicalMaterial material;
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
#endif`,up=`struct PhysicalMaterial {
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
}`,dp=`
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
#endif`,fp=`#if defined( RE_IndirectDiffuse )
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
#endif`,pp=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,mp=`#if defined( USE_LOGDEPTHBUF ) && defined( USE_LOGDEPTHBUF_EXT )
	gl_FragDepthEXT = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,gp=`#if defined( USE_LOGDEPTHBUF ) && defined( USE_LOGDEPTHBUF_EXT )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,xp=`#ifdef USE_LOGDEPTHBUF
	#ifdef USE_LOGDEPTHBUF_EXT
		varying float vFragDepth;
		varying float vIsPerspective;
	#else
		uniform float logDepthBufFC;
	#endif
#endif`,yp=`#ifdef USE_LOGDEPTHBUF
	#ifdef USE_LOGDEPTHBUF_EXT
		vFragDepth = 1.0 + gl_Position.w;
		vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
	#else
		if ( isPerspectiveMatrix( projectionMatrix ) ) {
			gl_Position.z = log2( max( EPSILON, gl_Position.w + 1.0 ) ) * logDepthBufFC - 1.0;
			gl_Position.z *= gl_Position.w;
		}
	#endif
#endif`,_p=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = vec4( mix( pow( sampledDiffuseColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), sampledDiffuseColor.rgb * 0.0773993808, vec3( lessThanEqual( sampledDiffuseColor.rgb, vec3( 0.04045 ) ) ) ), sampledDiffuseColor.w );
	
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,vp=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,Mp=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`,bp=`#if defined( USE_POINTS_UV )
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
#endif`,wp=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,Sp=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,Ep=`#if defined( USE_MORPHCOLORS ) && defined( MORPHTARGETS_TEXTURE )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,Tp=`#ifdef USE_MORPHNORMALS
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
#endif`,Ap=`#ifdef USE_MORPHTARGETS
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
#endif`,Rp=`#ifdef USE_MORPHTARGETS
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
#endif`,Cp=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
vec3 nonPerturbedNormal = normal;`,Pp=`#ifdef USE_NORMALMAP_OBJECTSPACE
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
#endif`,Ip=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Lp=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,zp=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,Dp=`#ifdef USE_NORMALMAP
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
#endif`,Up=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,Np=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,Op=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,Fp=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,Bp=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,kp=`vec3 packNormalToRGB( const in vec3 normal ) {
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
}`,Hp=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,Gp=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,Vp=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,Wp=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,Xp=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,qp=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,Yp=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,Zp=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,$p=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
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
#endif`,Jp=`float getShadowMask() {
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
}`,jp=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,Kp=`#ifdef USE_SKINNING
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
#endif`,Qp=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,tm=`#ifdef USE_SKINNING
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
#endif`,em=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,nm=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,im=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,sm=`#ifndef saturate
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
vec3 CustomToneMapping( vec3 color ) { return color; }`,rm=`#ifdef USE_TRANSMISSION
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
#endif`,am=`#ifdef USE_TRANSMISSION
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
#endif`,om=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,cm=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,lm=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,hm=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`,um=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,dm=`uniform sampler2D t2D;
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
}`,fm=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,pm=`#ifdef ENVMAP_TYPE_CUBE
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
}`,mm=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,gm=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,xm=`#include <common>
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
}`,ym=`#if DEPTH_PACKING == 3200
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
}`,_m=`#define DISTANCE
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
}`,vm=`#define DISTANCE
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
}`,Mm=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,bm=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,wm=`uniform float scale;
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
}`,Sm=`uniform vec3 diffuse;
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
}`,Em=`#include <common>
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
}`,Tm=`uniform vec3 diffuse;
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
}`,Am=`#define LAMBERT
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
}`,Rm=`#define LAMBERT
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
}`,Cm=`#define MATCAP
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
}`,Pm=`#define MATCAP
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
}`,Im=`#define NORMAL
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
}`,Lm=`#define NORMAL
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
}`,zm=`#define PHONG
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
}`,Dm=`#define PHONG
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
}`,Um=`#define STANDARD
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
}`,Nm=`#define STANDARD
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
}`,Om=`#define TOON
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
}`,Fm=`#define TOON
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
}`,Bm=`uniform float size;
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
}`,km=`uniform vec3 diffuse;
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
}`,Hm=`#include <common>
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
}`,Gm=`uniform vec3 color;
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
}`,Vm=`uniform float rotation;
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
}`,Wm=`uniform vec3 diffuse;
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
}`,qt={alphahash_fragment:df,alphahash_pars_fragment:ff,alphamap_fragment:pf,alphamap_pars_fragment:mf,alphatest_fragment:gf,alphatest_pars_fragment:xf,aomap_fragment:yf,aomap_pars_fragment:_f,batching_pars_vertex:vf,batching_vertex:Mf,begin_vertex:bf,beginnormal_vertex:wf,bsdfs:Sf,iridescence_fragment:Ef,bumpmap_pars_fragment:Tf,clipping_planes_fragment:Af,clipping_planes_pars_fragment:Rf,clipping_planes_pars_vertex:Cf,clipping_planes_vertex:Pf,color_fragment:If,color_pars_fragment:Lf,color_pars_vertex:zf,color_vertex:Df,common:Uf,cube_uv_reflection_fragment:Nf,defaultnormal_vertex:Of,displacementmap_pars_vertex:Ff,displacementmap_vertex:Bf,emissivemap_fragment:kf,emissivemap_pars_fragment:Hf,colorspace_fragment:Gf,colorspace_pars_fragment:Vf,envmap_fragment:Wf,envmap_common_pars_fragment:Xf,envmap_pars_fragment:qf,envmap_pars_vertex:Yf,envmap_physical_pars_fragment:rp,envmap_vertex:Zf,fog_vertex:$f,fog_pars_vertex:Jf,fog_fragment:jf,fog_pars_fragment:Kf,gradientmap_pars_fragment:Qf,lightmap_fragment:tp,lightmap_pars_fragment:ep,lights_lambert_fragment:np,lights_lambert_pars_fragment:ip,lights_pars_begin:sp,lights_toon_fragment:ap,lights_toon_pars_fragment:op,lights_phong_fragment:cp,lights_phong_pars_fragment:lp,lights_physical_fragment:hp,lights_physical_pars_fragment:up,lights_fragment_begin:dp,lights_fragment_maps:fp,lights_fragment_end:pp,logdepthbuf_fragment:mp,logdepthbuf_pars_fragment:gp,logdepthbuf_pars_vertex:xp,logdepthbuf_vertex:yp,map_fragment:_p,map_pars_fragment:vp,map_particle_fragment:Mp,map_particle_pars_fragment:bp,metalnessmap_fragment:wp,metalnessmap_pars_fragment:Sp,morphcolor_vertex:Ep,morphnormal_vertex:Tp,morphtarget_pars_vertex:Ap,morphtarget_vertex:Rp,normal_fragment_begin:Cp,normal_fragment_maps:Pp,normal_pars_fragment:Ip,normal_pars_vertex:Lp,normal_vertex:zp,normalmap_pars_fragment:Dp,clearcoat_normal_fragment_begin:Up,clearcoat_normal_fragment_maps:Np,clearcoat_pars_fragment:Op,iridescence_pars_fragment:Fp,opaque_fragment:Bp,packing:kp,premultiplied_alpha_fragment:Hp,project_vertex:Gp,dithering_fragment:Vp,dithering_pars_fragment:Wp,roughnessmap_fragment:Xp,roughnessmap_pars_fragment:qp,shadowmap_pars_fragment:Yp,shadowmap_pars_vertex:Zp,shadowmap_vertex:$p,shadowmask_pars_fragment:Jp,skinbase_vertex:jp,skinning_pars_vertex:Kp,skinning_vertex:Qp,skinnormal_vertex:tm,specularmap_fragment:em,specularmap_pars_fragment:nm,tonemapping_fragment:im,tonemapping_pars_fragment:sm,transmission_fragment:rm,transmission_pars_fragment:am,uv_pars_fragment:om,uv_pars_vertex:cm,uv_vertex:lm,worldpos_vertex:hm,background_vert:um,background_frag:dm,backgroundCube_vert:fm,backgroundCube_frag:pm,cube_vert:mm,cube_frag:gm,depth_vert:xm,depth_frag:ym,distanceRGBA_vert:_m,distanceRGBA_frag:vm,equirect_vert:Mm,equirect_frag:bm,linedashed_vert:wm,linedashed_frag:Sm,meshbasic_vert:Em,meshbasic_frag:Tm,meshlambert_vert:Am,meshlambert_frag:Rm,meshmatcap_vert:Cm,meshmatcap_frag:Pm,meshnormal_vert:Im,meshnormal_frag:Lm,meshphong_vert:zm,meshphong_frag:Dm,meshphysical_vert:Um,meshphysical_frag:Nm,meshtoon_vert:Om,meshtoon_frag:Fm,points_vert:Bm,points_frag:km,shadow_vert:Hm,shadow_frag:Gm,sprite_vert:Vm,sprite_frag:Wm},ft={common:{diffuse:{value:new Et(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new $t},alphaMap:{value:null},alphaMapTransform:{value:new $t},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new $t}},envmap:{envMap:{value:null},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new $t}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new $t}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new $t},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new $t},normalScale:{value:new Jt(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new $t},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new $t}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new $t}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new $t}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new Et(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new Et(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new $t},alphaTest:{value:0},uvTransform:{value:new $t}},sprite:{diffuse:{value:new Et(16777215)},opacity:{value:1},center:{value:new Jt(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new $t},alphaMap:{value:null},alphaMapTransform:{value:new $t},alphaTest:{value:0}}},In={basic:{uniforms:tn([ft.common,ft.specularmap,ft.envmap,ft.aomap,ft.lightmap,ft.fog]),vertexShader:qt.meshbasic_vert,fragmentShader:qt.meshbasic_frag},lambert:{uniforms:tn([ft.common,ft.specularmap,ft.envmap,ft.aomap,ft.lightmap,ft.emissivemap,ft.bumpmap,ft.normalmap,ft.displacementmap,ft.fog,ft.lights,{emissive:{value:new Et(0)}}]),vertexShader:qt.meshlambert_vert,fragmentShader:qt.meshlambert_frag},phong:{uniforms:tn([ft.common,ft.specularmap,ft.envmap,ft.aomap,ft.lightmap,ft.emissivemap,ft.bumpmap,ft.normalmap,ft.displacementmap,ft.fog,ft.lights,{emissive:{value:new Et(0)},specular:{value:new Et(1118481)},shininess:{value:30}}]),vertexShader:qt.meshphong_vert,fragmentShader:qt.meshphong_frag},standard:{uniforms:tn([ft.common,ft.envmap,ft.aomap,ft.lightmap,ft.emissivemap,ft.bumpmap,ft.normalmap,ft.displacementmap,ft.roughnessmap,ft.metalnessmap,ft.fog,ft.lights,{emissive:{value:new Et(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:qt.meshphysical_vert,fragmentShader:qt.meshphysical_frag},toon:{uniforms:tn([ft.common,ft.aomap,ft.lightmap,ft.emissivemap,ft.bumpmap,ft.normalmap,ft.displacementmap,ft.gradientmap,ft.fog,ft.lights,{emissive:{value:new Et(0)}}]),vertexShader:qt.meshtoon_vert,fragmentShader:qt.meshtoon_frag},matcap:{uniforms:tn([ft.common,ft.bumpmap,ft.normalmap,ft.displacementmap,ft.fog,{matcap:{value:null}}]),vertexShader:qt.meshmatcap_vert,fragmentShader:qt.meshmatcap_frag},points:{uniforms:tn([ft.points,ft.fog]),vertexShader:qt.points_vert,fragmentShader:qt.points_frag},dashed:{uniforms:tn([ft.common,ft.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:qt.linedashed_vert,fragmentShader:qt.linedashed_frag},depth:{uniforms:tn([ft.common,ft.displacementmap]),vertexShader:qt.depth_vert,fragmentShader:qt.depth_frag},normal:{uniforms:tn([ft.common,ft.bumpmap,ft.normalmap,ft.displacementmap,{opacity:{value:1}}]),vertexShader:qt.meshnormal_vert,fragmentShader:qt.meshnormal_frag},sprite:{uniforms:tn([ft.sprite,ft.fog]),vertexShader:qt.sprite_vert,fragmentShader:qt.sprite_frag},background:{uniforms:{uvTransform:{value:new $t},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:qt.background_vert,fragmentShader:qt.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1}},vertexShader:qt.backgroundCube_vert,fragmentShader:qt.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:qt.cube_vert,fragmentShader:qt.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:qt.equirect_vert,fragmentShader:qt.equirect_frag},distanceRGBA:{uniforms:tn([ft.common,ft.displacementmap,{referencePosition:{value:new z},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:qt.distanceRGBA_vert,fragmentShader:qt.distanceRGBA_frag},shadow:{uniforms:tn([ft.lights,ft.fog,{color:{value:new Et(0)},opacity:{value:1}}]),vertexShader:qt.shadow_vert,fragmentShader:qt.shadow_frag}};In.physical={uniforms:tn([In.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new $t},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new $t},clearcoatNormalScale:{value:new Jt(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new $t},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new $t},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new $t},sheen:{value:0},sheenColor:{value:new Et(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new $t},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new $t},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new $t},transmissionSamplerSize:{value:new Jt},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new $t},attenuationDistance:{value:0},attenuationColor:{value:new Et(0)},specularColor:{value:new Et(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new $t},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new $t},anisotropyVector:{value:new Jt},anisotropyMap:{value:null},anisotropyMapTransform:{value:new $t}}]),vertexShader:qt.meshphysical_vert,fragmentShader:qt.meshphysical_frag};var Ur={r:0,b:0,g:0};function Xm(n,t,e,i,s,r,o){let a=new Et(0),c=r===!0?0:1,h,l,u=null,f=0,p=null;function g(m,d){let M=!1,y=d.isScene===!0?d.background:null;y&&y.isTexture&&(y=(d.backgroundBlurriness>0?e:t).get(y)),y===null?x(a,c):y&&y.isColor&&(x(y,1),M=!0);let E=n.xr.getEnvironmentBlendMode();E==="additive"?i.buffers.color.setClear(0,0,0,1,o):E==="alpha-blend"&&i.buffers.color.setClear(0,0,0,0,o),(n.autoClear||M)&&n.clear(n.autoClearColor,n.autoClearDepth,n.autoClearStencil),y&&(y.isCubeTexture||y.mapping===ba)?(l===void 0&&(l=new Mt(new kt(1,1,1),new Zn({name:"BackgroundCubeMaterial",uniforms:xs(In.backgroundCube.uniforms),vertexShader:In.backgroundCube.vertexShader,fragmentShader:In.backgroundCube.fragmentShader,side:on,depthTest:!1,depthWrite:!1,fog:!1})),l.geometry.deleteAttribute("normal"),l.geometry.deleteAttribute("uv"),l.onBeforeRender=function(I,A,R){this.matrixWorld.copyPosition(R.matrixWorld)},Object.defineProperty(l.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),s.update(l)),l.material.uniforms.envMap.value=y,l.material.uniforms.flipEnvMap.value=y.isCubeTexture&&y.isRenderTargetTexture===!1?-1:1,l.material.uniforms.backgroundBlurriness.value=d.backgroundBlurriness,l.material.uniforms.backgroundIntensity.value=d.backgroundIntensity,l.material.toneMapped=ae.getTransfer(y.colorSpace)!==me,(u!==y||f!==y.version||p!==n.toneMapping)&&(l.material.needsUpdate=!0,u=y,f=y.version,p=n.toneMapping),l.layers.enableAll(),m.unshift(l,l.geometry,l.material,0,0,null)):y&&y.isTexture&&(h===void 0&&(h=new Mt(new ys(2,2),new Zn({name:"BackgroundMaterial",uniforms:xs(In.background.uniforms),vertexShader:In.background.vertexShader,fragmentShader:In.background.fragmentShader,side:li,depthTest:!1,depthWrite:!1,fog:!1})),h.geometry.deleteAttribute("normal"),Object.defineProperty(h.material,"map",{get:function(){return this.uniforms.t2D.value}}),s.update(h)),h.material.uniforms.t2D.value=y,h.material.uniforms.backgroundIntensity.value=d.backgroundIntensity,h.material.toneMapped=ae.getTransfer(y.colorSpace)!==me,y.matrixAutoUpdate===!0&&y.updateMatrix(),h.material.uniforms.uvTransform.value.copy(y.matrix),(u!==y||f!==y.version||p!==n.toneMapping)&&(h.material.needsUpdate=!0,u=y,f=y.version,p=n.toneMapping),h.layers.enableAll(),m.unshift(h,h.geometry,h.material,0,0,null))}function x(m,d){m.getRGB(Ur,Vh(n)),i.buffers.color.setClear(Ur.r,Ur.g,Ur.b,d,o)}return{getClearColor:function(){return a},setClearColor:function(m,d=1){a.set(m),c=d,x(a,c)},getClearAlpha:function(){return c},setClearAlpha:function(m){c=m,x(a,c)},render:g}}function qm(n,t,e,i){let s=n.getParameter(n.MAX_VERTEX_ATTRIBS),r=i.isWebGL2?null:t.get("OES_vertex_array_object"),o=i.isWebGL2||r!==null,a={},c=m(null),h=c,l=!1;function u(L,F,Q,$,J){let j=!1;if(o){let et=x($,Q,F);h!==et&&(h=et,p(h.object)),j=d(L,$,Q,J),j&&M(L,$,Q,J)}else{let et=F.wireframe===!0;(h.geometry!==$.id||h.program!==Q.id||h.wireframe!==et)&&(h.geometry=$.id,h.program=Q.id,h.wireframe=et,j=!0)}J!==null&&e.update(J,n.ELEMENT_ARRAY_BUFFER),(j||l)&&(l=!1,k(L,F,Q,$),J!==null&&n.bindBuffer(n.ELEMENT_ARRAY_BUFFER,e.get(J).buffer))}function f(){return i.isWebGL2?n.createVertexArray():r.createVertexArrayOES()}function p(L){return i.isWebGL2?n.bindVertexArray(L):r.bindVertexArrayOES(L)}function g(L){return i.isWebGL2?n.deleteVertexArray(L):r.deleteVertexArrayOES(L)}function x(L,F,Q){let $=Q.wireframe===!0,J=a[L.id];J===void 0&&(J={},a[L.id]=J);let j=J[F.id];j===void 0&&(j={},J[F.id]=j);let et=j[$];return et===void 0&&(et=m(f()),j[$]=et),et}function m(L){let F=[],Q=[],$=[];for(let J=0;J<s;J++)F[J]=0,Q[J]=0,$[J]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:F,enabledAttributes:Q,attributeDivisors:$,object:L,attributes:{},index:null}}function d(L,F,Q,$){let J=h.attributes,j=F.attributes,et=0,ht=Q.getAttributes();for(let pt in ht)if(ht[pt].location>=0){let nt=J[pt],mt=j[pt];if(mt===void 0&&(pt==="instanceMatrix"&&L.instanceMatrix&&(mt=L.instanceMatrix),pt==="instanceColor"&&L.instanceColor&&(mt=L.instanceColor)),nt===void 0||nt.attribute!==mt||mt&&nt.data!==mt.data)return!0;et++}return h.attributesNum!==et||h.index!==$}function M(L,F,Q,$){let J={},j=F.attributes,et=0,ht=Q.getAttributes();for(let pt in ht)if(ht[pt].location>=0){let nt=j[pt];nt===void 0&&(pt==="instanceMatrix"&&L.instanceMatrix&&(nt=L.instanceMatrix),pt==="instanceColor"&&L.instanceColor&&(nt=L.instanceColor));let mt={};mt.attribute=nt,nt&&nt.data&&(mt.data=nt.data),J[pt]=mt,et++}h.attributes=J,h.attributesNum=et,h.index=$}function y(){let L=h.newAttributes;for(let F=0,Q=L.length;F<Q;F++)L[F]=0}function E(L){I(L,0)}function I(L,F){let Q=h.newAttributes,$=h.enabledAttributes,J=h.attributeDivisors;Q[L]=1,$[L]===0&&(n.enableVertexAttribArray(L),$[L]=1),J[L]!==F&&((i.isWebGL2?n:t.get("ANGLE_instanced_arrays"))[i.isWebGL2?"vertexAttribDivisor":"vertexAttribDivisorANGLE"](L,F),J[L]=F)}function A(){let L=h.newAttributes,F=h.enabledAttributes;for(let Q=0,$=F.length;Q<$;Q++)F[Q]!==L[Q]&&(n.disableVertexAttribArray(Q),F[Q]=0)}function R(L,F,Q,$,J,j,et){et===!0?n.vertexAttribIPointer(L,F,Q,J,j):n.vertexAttribPointer(L,F,Q,$,J,j)}function k(L,F,Q,$){if(i.isWebGL2===!1&&(L.isInstancedMesh||$.isInstancedBufferGeometry)&&t.get("ANGLE_instanced_arrays")===null)return;y();let J=$.attributes,j=Q.getAttributes(),et=F.defaultAttributeValues;for(let ht in j){let pt=j[ht];if(pt.location>=0){let Y=J[ht];if(Y===void 0&&(ht==="instanceMatrix"&&L.instanceMatrix&&(Y=L.instanceMatrix),ht==="instanceColor"&&L.instanceColor&&(Y=L.instanceColor)),Y!==void 0){let nt=Y.normalized,mt=Y.itemSize,Ct=e.get(Y);if(Ct===void 0)continue;let bt=Ct.buffer,zt=Ct.type,Ht=Ct.bytesPerElement,Dt=i.isWebGL2===!0&&(zt===n.INT||zt===n.UNSIGNED_INT||Y.gpuType===Lh);if(Y.isInterleavedBufferAttribute){let ne=Y.data,B=ne.stride,Ge=Y.offset;if(ne.isInstancedInterleavedBuffer){for(let Lt=0;Lt<pt.locationSize;Lt++)I(pt.location+Lt,ne.meshPerAttribute);L.isInstancedMesh!==!0&&$._maxInstanceCount===void 0&&($._maxInstanceCount=ne.meshPerAttribute*ne.count)}else for(let Lt=0;Lt<pt.locationSize;Lt++)E(pt.location+Lt);n.bindBuffer(n.ARRAY_BUFFER,bt);for(let Lt=0;Lt<pt.locationSize;Lt++)R(pt.location+Lt,mt/pt.locationSize,zt,nt,B*Ht,(Ge+mt/pt.locationSize*Lt)*Ht,Dt)}else{if(Y.isInstancedBufferAttribute){for(let ne=0;ne<pt.locationSize;ne++)I(pt.location+ne,Y.meshPerAttribute);L.isInstancedMesh!==!0&&$._maxInstanceCount===void 0&&($._maxInstanceCount=Y.meshPerAttribute*Y.count)}else for(let ne=0;ne<pt.locationSize;ne++)E(pt.location+ne);n.bindBuffer(n.ARRAY_BUFFER,bt);for(let ne=0;ne<pt.locationSize;ne++)R(pt.location+ne,mt/pt.locationSize,zt,nt,mt*Ht,mt/pt.locationSize*ne*Ht,Dt)}}else if(et!==void 0){let nt=et[ht];if(nt!==void 0)switch(nt.length){case 2:n.vertexAttrib2fv(pt.location,nt);break;case 3:n.vertexAttrib3fv(pt.location,nt);break;case 4:n.vertexAttrib4fv(pt.location,nt);break;default:n.vertexAttrib1fv(pt.location,nt)}}}}A()}function v(){Z();for(let L in a){let F=a[L];for(let Q in F){let $=F[Q];for(let J in $)g($[J].object),delete $[J];delete F[Q]}delete a[L]}}function w(L){if(a[L.id]===void 0)return;let F=a[L.id];for(let Q in F){let $=F[Q];for(let J in $)g($[J].object),delete $[J];delete F[Q]}delete a[L.id]}function O(L){for(let F in a){let Q=a[F];if(Q[L.id]===void 0)continue;let $=Q[L.id];for(let J in $)g($[J].object),delete $[J];delete Q[L.id]}}function Z(){tt(),l=!0,h!==c&&(h=c,p(h.object))}function tt(){c.geometry=null,c.program=null,c.wireframe=!1}return{setup:u,reset:Z,resetDefaultState:tt,dispose:v,releaseStatesOfGeometry:w,releaseStatesOfProgram:O,initAttributes:y,enableAttribute:E,disableUnusedAttributes:A}}function Ym(n,t,e,i){let s=i.isWebGL2,r;function o(l){r=l}function a(l,u){n.drawArrays(r,l,u),e.update(u,r,1)}function c(l,u,f){if(f===0)return;let p,g;if(s)p=n,g="drawArraysInstanced";else if(p=t.get("ANGLE_instanced_arrays"),g="drawArraysInstancedANGLE",p===null){console.error("THREE.WebGLBufferRenderer: using THREE.InstancedBufferGeometry but hardware does not support extension ANGLE_instanced_arrays.");return}p[g](r,l,u,f),e.update(u,r,f)}function h(l,u,f){if(f===0)return;let p=t.get("WEBGL_multi_draw");if(p===null)for(let g=0;g<f;g++)this.render(l[g],u[g]);else{p.multiDrawArraysWEBGL(r,l,0,u,0,f);let g=0;for(let x=0;x<f;x++)g+=u[x];e.update(g,r,1)}}this.setMode=o,this.render=a,this.renderInstances=c,this.renderMultiDraw=h}function Zm(n,t,e){let i;function s(){if(i!==void 0)return i;if(t.has("EXT_texture_filter_anisotropic")===!0){let R=t.get("EXT_texture_filter_anisotropic");i=n.getParameter(R.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else i=0;return i}function r(R){if(R==="highp"){if(n.getShaderPrecisionFormat(n.VERTEX_SHADER,n.HIGH_FLOAT).precision>0&&n.getShaderPrecisionFormat(n.FRAGMENT_SHADER,n.HIGH_FLOAT).precision>0)return"highp";R="mediump"}return R==="mediump"&&n.getShaderPrecisionFormat(n.VERTEX_SHADER,n.MEDIUM_FLOAT).precision>0&&n.getShaderPrecisionFormat(n.FRAGMENT_SHADER,n.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let o=typeof WebGL2RenderingContext!="undefined"&&n.constructor.name==="WebGL2RenderingContext",a=e.precision!==void 0?e.precision:"highp",c=r(a);c!==a&&(console.warn("THREE.WebGLRenderer:",a,"not supported, using",c,"instead."),a=c);let h=o||t.has("WEBGL_draw_buffers"),l=e.logarithmicDepthBuffer===!0,u=n.getParameter(n.MAX_TEXTURE_IMAGE_UNITS),f=n.getParameter(n.MAX_VERTEX_TEXTURE_IMAGE_UNITS),p=n.getParameter(n.MAX_TEXTURE_SIZE),g=n.getParameter(n.MAX_CUBE_MAP_TEXTURE_SIZE),x=n.getParameter(n.MAX_VERTEX_ATTRIBS),m=n.getParameter(n.MAX_VERTEX_UNIFORM_VECTORS),d=n.getParameter(n.MAX_VARYING_VECTORS),M=n.getParameter(n.MAX_FRAGMENT_UNIFORM_VECTORS),y=f>0,E=o||t.has("OES_texture_float"),I=y&&E,A=o?n.getParameter(n.MAX_SAMPLES):0;return{isWebGL2:o,drawBuffers:h,getMaxAnisotropy:s,getMaxPrecision:r,precision:a,logarithmicDepthBuffer:l,maxTextures:u,maxVertexTextures:f,maxTextureSize:p,maxCubemapSize:g,maxAttributes:x,maxVertexUniforms:m,maxVaryings:d,maxFragmentUniforms:M,vertexTextures:y,floatFragmentTextures:E,floatVertexTextures:I,maxSamples:A}}function $m(n){let t=this,e=null,i=0,s=!1,r=!1,o=new Gn,a=new $t,c={value:null,needsUpdate:!1};this.uniform=c,this.numPlanes=0,this.numIntersection=0,this.init=function(u,f){let p=u.length!==0||f||i!==0||s;return s=f,i=u.length,p},this.beginShadows=function(){r=!0,l(null)},this.endShadows=function(){r=!1},this.setGlobalState=function(u,f){e=l(u,f,0)},this.setState=function(u,f,p){let g=u.clippingPlanes,x=u.clipIntersection,m=u.clipShadows,d=n.get(u);if(!s||g===null||g.length===0||r&&!m)r?l(null):h();else{let M=r?0:i,y=M*4,E=d.clippingState||null;c.value=E,E=l(g,f,y,p);for(let I=0;I!==y;++I)E[I]=e[I];d.clippingState=E,this.numIntersection=x?this.numPlanes:0,this.numPlanes+=M}};function h(){c.value!==e&&(c.value=e,c.needsUpdate=i>0),t.numPlanes=i,t.numIntersection=0}function l(u,f,p,g){let x=u!==null?u.length:0,m=null;if(x!==0){if(m=c.value,g!==!0||m===null){let d=p+x*4,M=f.matrixWorldInverse;a.getNormalMatrix(M),(m===null||m.length<d)&&(m=new Float32Array(d));for(let y=0,E=p;y!==x;++y,E+=4)o.copy(u[y]).applyMatrix4(M,a),o.normal.toArray(m,E),m[E+3]=o.constant}c.value=m,c.needsUpdate=!0}return t.numPlanes=x,t.numIntersection=0,m}}function Jm(n){let t=new WeakMap;function e(o,a){return a===Uo?o.mapping=ps:a===No&&(o.mapping=ms),o}function i(o){if(o&&o.isTexture){let a=o.mapping;if(a===Uo||a===No)if(t.has(o)){let c=t.get(o).texture;return e(c,o.mapping)}else{let c=o.image;if(c&&c.height>0){let h=new Xo(c.height/2);return h.fromEquirectangularTexture(n,o),t.set(o,h),o.addEventListener("dispose",s),e(h.texture,o.mapping)}else return null}}return o}function s(o){let a=o.target;a.removeEventListener("dispose",s);let c=t.get(a);c!==void 0&&(t.delete(a),c.dispose())}function r(){t=new WeakMap}return{get:i,dispose:r}}var ra=class extends ia{constructor(t=-1,e=1,i=1,s=-1,r=.1,o=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=t,this.right=e,this.top=i,this.bottom=s,this.near=r,this.far=o,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.left=t.left,this.right=t.right,this.top=t.top,this.bottom=t.bottom,this.near=t.near,this.far=t.far,this.zoom=t.zoom,this.view=t.view===null?null:Object.assign({},t.view),this}setViewOffset(t,e,i,s,r,o){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=i,this.view.offsetY=s,this.view.width=r,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let t=(this.right-this.left)/(2*this.zoom),e=(this.top-this.bottom)/(2*this.zoom),i=(this.right+this.left)/2,s=(this.top+this.bottom)/2,r=i-t,o=i+t,a=s+e,c=s-e;if(this.view!==null&&this.view.enabled){let h=(this.right-this.left)/this.view.fullWidth/this.zoom,l=(this.top-this.bottom)/this.view.fullHeight/this.zoom;r+=h*this.view.offsetX,o=r+h*this.view.width,a-=l*this.view.offsetY,c=a-l*this.view.height}this.projectionMatrix.makeOrthographic(r,o,a,c,this.near,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){let e=super.toJSON(t);return e.object.zoom=this.zoom,e.object.left=this.left,e.object.right=this.right,e.object.top=this.top,e.object.bottom=this.bottom,e.object.near=this.near,e.object.far=this.far,this.view!==null&&(e.object.view=Object.assign({},this.view)),e}},ls=4,nh=[.125,.215,.35,.446,.526,.582],Ai=20,To=new ra,ih=new Et,Ao=null,Ro=0,Co=0,Ei=(1+Math.sqrt(5))/2,as=1/Ei,sh=[new z(1,1,1),new z(-1,1,1),new z(1,1,-1),new z(-1,1,-1),new z(0,Ei,as),new z(0,Ei,-as),new z(as,0,Ei),new z(-as,0,Ei),new z(Ei,as,0),new z(-Ei,as,0)],aa=class{constructor(t){this._renderer=t,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(t,e=0,i=.1,s=100){Ao=this._renderer.getRenderTarget(),Ro=this._renderer.getActiveCubeFace(),Co=this._renderer.getActiveMipmapLevel(),this._setSize(256);let r=this._allocateTargets();return r.depthBuffer=!0,this._sceneToCubeUV(t,i,s,r),e>0&&this._blur(r,0,0,e),this._applyPMREM(r),this._cleanup(r),r}fromEquirectangular(t,e=null){return this._fromTexture(t,e)}fromCubemap(t,e=null){return this._fromTexture(t,e)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=oh(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=ah(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(t){this._lodMax=Math.floor(Math.log2(t)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let t=0;t<this._lodPlanes.length;t++)this._lodPlanes[t].dispose()}_cleanup(t){this._renderer.setRenderTarget(Ao,Ro,Co),t.scissorTest=!1,Nr(t,0,0,t.width,t.height)}_fromTexture(t,e){t.mapping===ps||t.mapping===ms?this._setSize(t.image.length===0?16:t.image[0].width||t.image[0].image.width):this._setSize(t.image.width/4),Ao=this._renderer.getRenderTarget(),Ro=this._renderer.getActiveCubeFace(),Co=this._renderer.getActiveMipmapLevel();let i=e||this._allocateTargets();return this._textureToCubeUV(t,i),this._applyPMREM(i),this._cleanup(i),i}_allocateTargets(){let t=3*Math.max(this._cubeSize,112),e=4*this._cubeSize,i={magFilter:gn,minFilter:gn,generateMipmaps:!1,type:qs,format:wn,colorSpace:Wn,depthBuffer:!1},s=rh(t,e,i);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==t||this._pingPongRenderTarget.height!==e){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=rh(t,e,i);let{_lodMax:r}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=jm(r)),this._blurMaterial=Km(r,t,e)}return s}_compileMaterial(t){let e=new Mt(this._lodPlanes[0],t);this._renderer.compile(e,To)}_sceneToCubeUV(t,e,i,s){let a=new $e(90,1,e,i),c=[1,-1,1,1,1,1],h=[1,1,1,-1,-1,-1],l=this._renderer,u=l.autoClear,f=l.toneMapping;l.getClearColor(ih),l.toneMapping=oi,l.autoClear=!1;let p=new Je({name:"PMREM.Background",side:on,depthWrite:!1,depthTest:!1}),g=new Mt(new kt,p),x=!1,m=t.background;m?m.isColor&&(p.color.copy(m),t.background=null,x=!0):(p.color.copy(ih),x=!0);for(let d=0;d<6;d++){let M=d%3;M===0?(a.up.set(0,c[d],0),a.lookAt(h[d],0,0)):M===1?(a.up.set(0,0,c[d]),a.lookAt(0,h[d],0)):(a.up.set(0,c[d],0),a.lookAt(0,0,h[d]));let y=this._cubeSize;Nr(s,M*y,d>2?y:0,y,y),l.setRenderTarget(s),x&&l.render(g,a),l.render(t,a)}g.geometry.dispose(),g.material.dispose(),l.toneMapping=f,l.autoClear=u,t.background=m}_textureToCubeUV(t,e){let i=this._renderer,s=t.mapping===ps||t.mapping===ms;s?(this._cubemapMaterial===null&&(this._cubemapMaterial=oh()),this._cubemapMaterial.uniforms.flipEnvMap.value=t.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=ah());let r=s?this._cubemapMaterial:this._equirectMaterial,o=new Mt(this._lodPlanes[0],r),a=r.uniforms;a.envMap.value=t;let c=this._cubeSize;Nr(e,0,0,3*c,2*c),i.setRenderTarget(e),i.render(o,To)}_applyPMREM(t){let e=this._renderer,i=e.autoClear;e.autoClear=!1;for(let s=1;s<this._lodPlanes.length;s++){let r=Math.sqrt(this._sigmas[s]*this._sigmas[s]-this._sigmas[s-1]*this._sigmas[s-1]),o=sh[(s-1)%sh.length];this._blur(t,s-1,s,r,o)}e.autoClear=i}_blur(t,e,i,s,r){let o=this._pingPongRenderTarget;this._halfBlur(t,o,e,i,s,"latitudinal",r),this._halfBlur(o,t,i,i,s,"longitudinal",r)}_halfBlur(t,e,i,s,r,o,a){let c=this._renderer,h=this._blurMaterial;o!=="latitudinal"&&o!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");let l=3,u=new Mt(this._lodPlanes[s],h),f=h.uniforms,p=this._sizeLods[i]-1,g=isFinite(r)?Math.PI/(2*p):2*Math.PI/(2*Ai-1),x=r/g,m=isFinite(r)?1+Math.floor(l*x):Ai;m>Ai&&console.warn(`sigmaRadians, ${r}, is too large and will clip, as it requested ${m} samples when the maximum is set to ${Ai}`);let d=[],M=0;for(let R=0;R<Ai;++R){let k=R/x,v=Math.exp(-k*k/2);d.push(v),R===0?M+=v:R<m&&(M+=2*v)}for(let R=0;R<d.length;R++)d[R]=d[R]/M;f.envMap.value=t.texture,f.samples.value=m,f.weights.value=d,f.latitudinal.value=o==="latitudinal",a&&(f.poleAxis.value=a);let{_lodMax:y}=this;f.dTheta.value=g,f.mipInt.value=y-i;let E=this._sizeLods[s],I=3*E*(s>y-ls?s-y+ls:0),A=4*(this._cubeSize-E);Nr(e,I,A,3*E,2*E),c.setRenderTarget(e),c.render(u,To)}};function jm(n){let t=[],e=[],i=[],s=n,r=n-ls+1+nh.length;for(let o=0;o<r;o++){let a=Math.pow(2,s);e.push(a);let c=1/a;o>n-ls?c=nh[o-n+ls-1]:o===0&&(c=0),i.push(c);let h=1/(a-2),l=-h,u=1+h,f=[l,l,u,l,u,u,l,l,u,u,l,u],p=6,g=6,x=3,m=2,d=1,M=new Float32Array(x*g*p),y=new Float32Array(m*g*p),E=new Float32Array(d*g*p);for(let A=0;A<p;A++){let R=A%3*2/3-1,k=A>2?0:-1,v=[R,k,0,R+2/3,k,0,R+2/3,k+1,0,R,k,0,R+2/3,k+1,0,R,k+1,0];M.set(v,x*g*A),y.set(f,m*g*A);let w=[A,A,A,A,A,A];E.set(w,d*g*A)}let I=new He;I.setAttribute("position",new Be(M,x)),I.setAttribute("uv",new Be(y,m)),I.setAttribute("faceIndex",new Be(E,d)),t.push(I),s>ls&&s--}return{lodPlanes:t,sizeLods:e,sigmas:i}}function rh(n,t,e){let i=new Xn(n,t,e);return i.texture.mapping=ba,i.texture.name="PMREM.cubeUv",i.scissorTest=!0,i}function Nr(n,t,e,i,s){n.viewport.set(t,e,i,s),n.scissor.set(t,e,i,s)}function Km(n,t,e){let i=new Float32Array(Ai),s=new z(0,1,0);return new Zn({name:"SphericalGaussianBlur",defines:{n:Ai,CUBEUV_TEXEL_WIDTH:1/t,CUBEUV_TEXEL_HEIGHT:1/e,CUBEUV_MAX_MIP:`${n}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:i},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:s}},vertexShader:vc(),fragmentShader:`

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
		`,blending:ai,depthTest:!1,depthWrite:!1})}function ah(){return new Zn({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:vc(),fragmentShader:`

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
		`,blending:ai,depthTest:!1,depthWrite:!1})}function oh(){return new Zn({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:vc(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:ai,depthTest:!1,depthWrite:!1})}function vc(){return`

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
	`}function Qm(n){let t=new WeakMap,e=null;function i(a){if(a&&a.isTexture){let c=a.mapping,h=c===Uo||c===No,l=c===ps||c===ms;if(h||l)if(a.isRenderTargetTexture&&a.needsPMREMUpdate===!0){a.needsPMREMUpdate=!1;let u=t.get(a);return e===null&&(e=new aa(n)),u=h?e.fromEquirectangular(a,u):e.fromCubemap(a,u),t.set(a,u),u.texture}else{if(t.has(a))return t.get(a).texture;{let u=a.image;if(h&&u&&u.height>0||l&&u&&s(u)){e===null&&(e=new aa(n));let f=h?e.fromEquirectangular(a):e.fromCubemap(a);return t.set(a,f),a.addEventListener("dispose",r),f.texture}else return null}}}return a}function s(a){let c=0,h=6;for(let l=0;l<h;l++)a[l]!==void 0&&c++;return c===h}function r(a){let c=a.target;c.removeEventListener("dispose",r);let h=t.get(c);h!==void 0&&(t.delete(c),h.dispose())}function o(){t=new WeakMap,e!==null&&(e.dispose(),e=null)}return{get:i,dispose:o}}function t0(n){let t={};function e(i){if(t[i]!==void 0)return t[i];let s;switch(i){case"WEBGL_depth_texture":s=n.getExtension("WEBGL_depth_texture")||n.getExtension("MOZ_WEBGL_depth_texture")||n.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":s=n.getExtension("EXT_texture_filter_anisotropic")||n.getExtension("MOZ_EXT_texture_filter_anisotropic")||n.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":s=n.getExtension("WEBGL_compressed_texture_s3tc")||n.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||n.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":s=n.getExtension("WEBGL_compressed_texture_pvrtc")||n.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:s=n.getExtension(i)}return t[i]=s,s}return{has:function(i){return e(i)!==null},init:function(i){i.isWebGL2?(e("EXT_color_buffer_float"),e("WEBGL_clip_cull_distance")):(e("WEBGL_depth_texture"),e("OES_texture_float"),e("OES_texture_half_float"),e("OES_texture_half_float_linear"),e("OES_standard_derivatives"),e("OES_element_index_uint"),e("OES_vertex_array_object"),e("ANGLE_instanced_arrays")),e("OES_texture_float_linear"),e("EXT_color_buffer_half_float"),e("WEBGL_multisampled_render_to_texture")},get:function(i){let s=e(i);return s===null&&console.warn("THREE.WebGLRenderer: "+i+" extension not supported."),s}}}function e0(n,t,e,i){let s={},r=new WeakMap;function o(u){let f=u.target;f.index!==null&&t.remove(f.index);for(let g in f.attributes)t.remove(f.attributes[g]);for(let g in f.morphAttributes){let x=f.morphAttributes[g];for(let m=0,d=x.length;m<d;m++)t.remove(x[m])}f.removeEventListener("dispose",o),delete s[f.id];let p=r.get(f);p&&(t.remove(p),r.delete(f)),i.releaseStatesOfGeometry(f),f.isInstancedBufferGeometry===!0&&delete f._maxInstanceCount,e.memory.geometries--}function a(u,f){return s[f.id]===!0||(f.addEventListener("dispose",o),s[f.id]=!0,e.memory.geometries++),f}function c(u){let f=u.attributes;for(let g in f)t.update(f[g],n.ARRAY_BUFFER);let p=u.morphAttributes;for(let g in p){let x=p[g];for(let m=0,d=x.length;m<d;m++)t.update(x[m],n.ARRAY_BUFFER)}}function h(u){let f=[],p=u.index,g=u.attributes.position,x=0;if(p!==null){let M=p.array;x=p.version;for(let y=0,E=M.length;y<E;y+=3){let I=M[y+0],A=M[y+1],R=M[y+2];f.push(I,A,A,R,R,I)}}else if(g!==void 0){let M=g.array;x=g.version;for(let y=0,E=M.length/3-1;y<E;y+=3){let I=y+0,A=y+1,R=y+2;f.push(I,A,A,R,R,I)}}else return;let m=new(Hh(f)?na:ea)(f,1);m.version=x;let d=r.get(u);d&&t.remove(d),r.set(u,m)}function l(u){let f=r.get(u);if(f){let p=u.index;p!==null&&f.version<p.version&&h(u)}else h(u);return r.get(u)}return{get:a,update:c,getWireframeAttribute:l}}function n0(n,t,e,i){let s=i.isWebGL2,r;function o(p){r=p}let a,c;function h(p){a=p.type,c=p.bytesPerElement}function l(p,g){n.drawElements(r,g,a,p*c),e.update(g,r,1)}function u(p,g,x){if(x===0)return;let m,d;if(s)m=n,d="drawElementsInstanced";else if(m=t.get("ANGLE_instanced_arrays"),d="drawElementsInstancedANGLE",m===null){console.error("THREE.WebGLIndexedBufferRenderer: using THREE.InstancedBufferGeometry but hardware does not support extension ANGLE_instanced_arrays.");return}m[d](r,g,a,p*c,x),e.update(g,r,x)}function f(p,g,x){if(x===0)return;let m=t.get("WEBGL_multi_draw");if(m===null)for(let d=0;d<x;d++)this.render(p[d]/c,g[d]);else{m.multiDrawElementsWEBGL(r,g,0,a,p,0,x);let d=0;for(let M=0;M<x;M++)d+=g[M];e.update(d,r,1)}}this.setMode=o,this.setIndex=h,this.render=l,this.renderInstances=u,this.renderMultiDraw=f}function i0(n){let t={geometries:0,textures:0},e={frame:0,calls:0,triangles:0,points:0,lines:0};function i(r,o,a){switch(e.calls++,o){case n.TRIANGLES:e.triangles+=a*(r/3);break;case n.LINES:e.lines+=a*(r/2);break;case n.LINE_STRIP:e.lines+=a*(r-1);break;case n.LINE_LOOP:e.lines+=a*r;break;case n.POINTS:e.points+=a*r;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",o);break}}function s(){e.calls=0,e.triangles=0,e.points=0,e.lines=0}return{memory:t,render:e,programs:null,autoReset:!0,reset:s,update:i}}function s0(n,t){return n[0]-t[0]}function r0(n,t){return Math.abs(t[1])-Math.abs(n[1])}function a0(n,t,e){let i={},s=new Float32Array(8),r=new WeakMap,o=new ye,a=[];for(let h=0;h<8;h++)a[h]=[h,0];function c(h,l,u){let f=h.morphTargetInfluences;if(t.isWebGL2===!0){let p=l.morphAttributes.position||l.morphAttributes.normal||l.morphAttributes.color,g=p!==void 0?p.length:0,x=r.get(l);if(x===void 0||x.count!==g){let L=function(){Z.dispose(),r.delete(l),l.removeEventListener("dispose",L)};x!==void 0&&x.texture.dispose();let M=l.morphAttributes.position!==void 0,y=l.morphAttributes.normal!==void 0,E=l.morphAttributes.color!==void 0,I=l.morphAttributes.position||[],A=l.morphAttributes.normal||[],R=l.morphAttributes.color||[],k=0;M===!0&&(k=1),y===!0&&(k=2),E===!0&&(k=3);let v=l.attributes.position.count*k,w=1;v>t.maxTextureSize&&(w=Math.ceil(v/t.maxTextureSize),v=t.maxTextureSize);let O=new Float32Array(v*w*4*g),Z=new jr(O,v,w,g);Z.type=ri,Z.needsUpdate=!0;let tt=k*4;for(let F=0;F<g;F++){let Q=I[F],$=A[F],J=R[F],j=v*w*4*F;for(let et=0;et<Q.count;et++){let ht=et*tt;M===!0&&(o.fromBufferAttribute(Q,et),O[j+ht+0]=o.x,O[j+ht+1]=o.y,O[j+ht+2]=o.z,O[j+ht+3]=0),y===!0&&(o.fromBufferAttribute($,et),O[j+ht+4]=o.x,O[j+ht+5]=o.y,O[j+ht+6]=o.z,O[j+ht+7]=0),E===!0&&(o.fromBufferAttribute(J,et),O[j+ht+8]=o.x,O[j+ht+9]=o.y,O[j+ht+10]=o.z,O[j+ht+11]=J.itemSize===4?o.w:1)}}x={count:g,texture:Z,size:new Jt(v,w)},r.set(l,x),l.addEventListener("dispose",L)}let m=0;for(let M=0;M<f.length;M++)m+=f[M];let d=l.morphTargetsRelative?1:1-m;u.getUniforms().setValue(n,"morphTargetBaseInfluence",d),u.getUniforms().setValue(n,"morphTargetInfluences",f),u.getUniforms().setValue(n,"morphTargetsTexture",x.texture,e),u.getUniforms().setValue(n,"morphTargetsTextureSize",x.size)}else{let p=f===void 0?0:f.length,g=i[l.id];if(g===void 0||g.length!==p){g=[];for(let y=0;y<p;y++)g[y]=[y,0];i[l.id]=g}for(let y=0;y<p;y++){let E=g[y];E[0]=y,E[1]=f[y]}g.sort(r0);for(let y=0;y<8;y++)y<p&&g[y][1]?(a[y][0]=g[y][0],a[y][1]=g[y][1]):(a[y][0]=Number.MAX_SAFE_INTEGER,a[y][1]=0);a.sort(s0);let x=l.morphAttributes.position,m=l.morphAttributes.normal,d=0;for(let y=0;y<8;y++){let E=a[y],I=E[0],A=E[1];I!==Number.MAX_SAFE_INTEGER&&A?(x&&l.getAttribute("morphTarget"+y)!==x[I]&&l.setAttribute("morphTarget"+y,x[I]),m&&l.getAttribute("morphNormal"+y)!==m[I]&&l.setAttribute("morphNormal"+y,m[I]),s[y]=A,d+=A):(x&&l.hasAttribute("morphTarget"+y)===!0&&l.deleteAttribute("morphTarget"+y),m&&l.hasAttribute("morphNormal"+y)===!0&&l.deleteAttribute("morphNormal"+y),s[y]=0)}let M=l.morphTargetsRelative?1:1-d;u.getUniforms().setValue(n,"morphTargetBaseInfluence",M),u.getUniforms().setValue(n,"morphTargetInfluences",s)}}return{update:c}}function o0(n,t,e,i){let s=new WeakMap;function r(c){let h=i.render.frame,l=c.geometry,u=t.get(c,l);if(s.get(u)!==h&&(t.update(u),s.set(u,h)),c.isInstancedMesh&&(c.hasEventListener("dispose",a)===!1&&c.addEventListener("dispose",a),s.get(c)!==h&&(e.update(c.instanceMatrix,n.ARRAY_BUFFER),c.instanceColor!==null&&e.update(c.instanceColor,n.ARRAY_BUFFER),s.set(c,h))),c.isSkinnedMesh){let f=c.skeleton;s.get(f)!==h&&(f.update(),s.set(f,h))}return u}function o(){s=new WeakMap}function a(c){let h=c.target;h.removeEventListener("dispose",a),e.remove(h.instanceMatrix),h.instanceColor!==null&&e.remove(h.instanceColor)}return{update:r,dispose:o}}var oa=class extends Sn{constructor(t,e,i,s,r,o,a,c,h,l){if(l=l!==void 0?l:Ci,l!==Ci&&l!==gs)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");i===void 0&&l===Ci&&(i=si),i===void 0&&l===gs&&(i=Ri),super(null,s,r,o,a,c,l,i,h),this.isDepthTexture=!0,this.image={width:t,height:e},this.magFilter=a!==void 0?a:en,this.minFilter=c!==void 0?c:en,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(t){return super.copy(t),this.compareFunction=t.compareFunction,this}toJSON(t){let e=super.toJSON(t);return this.compareFunction!==null&&(e.compareFunction=this.compareFunction),e}},Xh=new Sn,qh=new oa(1,1);qh.compareFunction=kh;var Yh=new jr,Zh=new Vo,$h=new sa,ch=[],lh=[],hh=new Float32Array(16),uh=new Float32Array(9),dh=new Float32Array(4);function Ms(n,t,e){let i=n[0];if(i<=0||i>0)return n;let s=t*e,r=ch[s];if(r===void 0&&(r=new Float32Array(s),ch[s]=r),t!==0){i.toArray(r,0);for(let o=1,a=0;o!==t;++o)a+=e,n[o].toArray(r,a)}return r}function De(n,t){if(n.length!==t.length)return!1;for(let e=0,i=n.length;e<i;e++)if(n[e]!==t[e])return!1;return!0}function Ue(n,t){for(let e=0,i=t.length;e<i;e++)n[e]=t[e]}function Sa(n,t){let e=lh[t];e===void 0&&(e=new Int32Array(t),lh[t]=e);for(let i=0;i!==t;++i)e[i]=n.allocateTextureUnit();return e}function c0(n,t){let e=this.cache;e[0]!==t&&(n.uniform1f(this.addr,t),e[0]=t)}function l0(n,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(n.uniform2f(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(De(e,t))return;n.uniform2fv(this.addr,t),Ue(e,t)}}function h0(n,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(n.uniform3f(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else if(t.r!==void 0)(e[0]!==t.r||e[1]!==t.g||e[2]!==t.b)&&(n.uniform3f(this.addr,t.r,t.g,t.b),e[0]=t.r,e[1]=t.g,e[2]=t.b);else{if(De(e,t))return;n.uniform3fv(this.addr,t),Ue(e,t)}}function u0(n,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(n.uniform4f(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(De(e,t))return;n.uniform4fv(this.addr,t),Ue(e,t)}}function d0(n,t){let e=this.cache,i=t.elements;if(i===void 0){if(De(e,t))return;n.uniformMatrix2fv(this.addr,!1,t),Ue(e,t)}else{if(De(e,i))return;dh.set(i),n.uniformMatrix2fv(this.addr,!1,dh),Ue(e,i)}}function f0(n,t){let e=this.cache,i=t.elements;if(i===void 0){if(De(e,t))return;n.uniformMatrix3fv(this.addr,!1,t),Ue(e,t)}else{if(De(e,i))return;uh.set(i),n.uniformMatrix3fv(this.addr,!1,uh),Ue(e,i)}}function p0(n,t){let e=this.cache,i=t.elements;if(i===void 0){if(De(e,t))return;n.uniformMatrix4fv(this.addr,!1,t),Ue(e,t)}else{if(De(e,i))return;hh.set(i),n.uniformMatrix4fv(this.addr,!1,hh),Ue(e,i)}}function m0(n,t){let e=this.cache;e[0]!==t&&(n.uniform1i(this.addr,t),e[0]=t)}function g0(n,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(n.uniform2i(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(De(e,t))return;n.uniform2iv(this.addr,t),Ue(e,t)}}function x0(n,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(n.uniform3i(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if(De(e,t))return;n.uniform3iv(this.addr,t),Ue(e,t)}}function y0(n,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(n.uniform4i(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(De(e,t))return;n.uniform4iv(this.addr,t),Ue(e,t)}}function _0(n,t){let e=this.cache;e[0]!==t&&(n.uniform1ui(this.addr,t),e[0]=t)}function v0(n,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(n.uniform2ui(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(De(e,t))return;n.uniform2uiv(this.addr,t),Ue(e,t)}}function M0(n,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(n.uniform3ui(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if(De(e,t))return;n.uniform3uiv(this.addr,t),Ue(e,t)}}function b0(n,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(n.uniform4ui(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(De(e,t))return;n.uniform4uiv(this.addr,t),Ue(e,t)}}function w0(n,t,e){let i=this.cache,s=e.allocateTextureUnit();i[0]!==s&&(n.uniform1i(this.addr,s),i[0]=s);let r=this.type===n.SAMPLER_2D_SHADOW?qh:Xh;e.setTexture2D(t||r,s)}function S0(n,t,e){let i=this.cache,s=e.allocateTextureUnit();i[0]!==s&&(n.uniform1i(this.addr,s),i[0]=s),e.setTexture3D(t||Zh,s)}function E0(n,t,e){let i=this.cache,s=e.allocateTextureUnit();i[0]!==s&&(n.uniform1i(this.addr,s),i[0]=s),e.setTextureCube(t||$h,s)}function T0(n,t,e){let i=this.cache,s=e.allocateTextureUnit();i[0]!==s&&(n.uniform1i(this.addr,s),i[0]=s),e.setTexture2DArray(t||Yh,s)}function A0(n){switch(n){case 5126:return c0;case 35664:return l0;case 35665:return h0;case 35666:return u0;case 35674:return d0;case 35675:return f0;case 35676:return p0;case 5124:case 35670:return m0;case 35667:case 35671:return g0;case 35668:case 35672:return x0;case 35669:case 35673:return y0;case 5125:return _0;case 36294:return v0;case 36295:return M0;case 36296:return b0;case 35678:case 36198:case 36298:case 36306:case 35682:return w0;case 35679:case 36299:case 36307:return S0;case 35680:case 36300:case 36308:case 36293:return E0;case 36289:case 36303:case 36311:case 36292:return T0}}function R0(n,t){n.uniform1fv(this.addr,t)}function C0(n,t){let e=Ms(t,this.size,2);n.uniform2fv(this.addr,e)}function P0(n,t){let e=Ms(t,this.size,3);n.uniform3fv(this.addr,e)}function I0(n,t){let e=Ms(t,this.size,4);n.uniform4fv(this.addr,e)}function L0(n,t){let e=Ms(t,this.size,4);n.uniformMatrix2fv(this.addr,!1,e)}function z0(n,t){let e=Ms(t,this.size,9);n.uniformMatrix3fv(this.addr,!1,e)}function D0(n,t){let e=Ms(t,this.size,16);n.uniformMatrix4fv(this.addr,!1,e)}function U0(n,t){n.uniform1iv(this.addr,t)}function N0(n,t){n.uniform2iv(this.addr,t)}function O0(n,t){n.uniform3iv(this.addr,t)}function F0(n,t){n.uniform4iv(this.addr,t)}function B0(n,t){n.uniform1uiv(this.addr,t)}function k0(n,t){n.uniform2uiv(this.addr,t)}function H0(n,t){n.uniform3uiv(this.addr,t)}function G0(n,t){n.uniform4uiv(this.addr,t)}function V0(n,t,e){let i=this.cache,s=t.length,r=Sa(e,s);De(i,r)||(n.uniform1iv(this.addr,r),Ue(i,r));for(let o=0;o!==s;++o)e.setTexture2D(t[o]||Xh,r[o])}function W0(n,t,e){let i=this.cache,s=t.length,r=Sa(e,s);De(i,r)||(n.uniform1iv(this.addr,r),Ue(i,r));for(let o=0;o!==s;++o)e.setTexture3D(t[o]||Zh,r[o])}function X0(n,t,e){let i=this.cache,s=t.length,r=Sa(e,s);De(i,r)||(n.uniform1iv(this.addr,r),Ue(i,r));for(let o=0;o!==s;++o)e.setTextureCube(t[o]||$h,r[o])}function q0(n,t,e){let i=this.cache,s=t.length,r=Sa(e,s);De(i,r)||(n.uniform1iv(this.addr,r),Ue(i,r));for(let o=0;o!==s;++o)e.setTexture2DArray(t[o]||Yh,r[o])}function Y0(n){switch(n){case 5126:return R0;case 35664:return C0;case 35665:return P0;case 35666:return I0;case 35674:return L0;case 35675:return z0;case 35676:return D0;case 5124:case 35670:return U0;case 35667:case 35671:return N0;case 35668:case 35672:return O0;case 35669:case 35673:return F0;case 5125:return B0;case 36294:return k0;case 36295:return H0;case 36296:return G0;case 35678:case 36198:case 36298:case 36306:case 35682:return V0;case 35679:case 36299:case 36307:return W0;case 35680:case 36300:case 36308:case 36293:return X0;case 36289:case 36303:case 36311:case 36292:return q0}}var qo=class{constructor(t,e,i){this.id=t,this.addr=i,this.cache=[],this.type=e.type,this.setValue=A0(e.type)}},Yo=class{constructor(t,e,i){this.id=t,this.addr=i,this.cache=[],this.type=e.type,this.size=e.size,this.setValue=Y0(e.type)}},Zo=class{constructor(t){this.id=t,this.seq=[],this.map={}}setValue(t,e,i){let s=this.seq;for(let r=0,o=s.length;r!==o;++r){let a=s[r];a.setValue(t,e[a.id],i)}}},Po=/(\w+)(\])?(\[|\.)?/g;function fh(n,t){n.seq.push(t),n.map[t.id]=t}function Z0(n,t,e){let i=n.name,s=i.length;for(Po.lastIndex=0;;){let r=Po.exec(i),o=Po.lastIndex,a=r[1],c=r[2]==="]",h=r[3];if(c&&(a=a|0),h===void 0||h==="["&&o+2===s){fh(e,h===void 0?new qo(a,n,t):new Yo(a,n,t));break}else{let u=e.map[a];u===void 0&&(u=new Zo(a),fh(e,u)),e=u}}}var fs=class{constructor(t,e){this.seq=[],this.map={};let i=t.getProgramParameter(e,t.ACTIVE_UNIFORMS);for(let s=0;s<i;++s){let r=t.getActiveUniform(e,s),o=t.getUniformLocation(e,r.name);Z0(r,o,this)}}setValue(t,e,i,s){let r=this.map[e];r!==void 0&&r.setValue(t,i,s)}setOptional(t,e,i){let s=e[i];s!==void 0&&this.setValue(t,i,s)}static upload(t,e,i,s){for(let r=0,o=e.length;r!==o;++r){let a=e[r],c=i[a.id];c.needsUpdate!==!1&&a.setValue(t,c.value,s)}}static seqWithValue(t,e){let i=[];for(let s=0,r=t.length;s!==r;++s){let o=t[s];o.id in e&&i.push(o)}return i}};function ph(n,t,e){let i=n.createShader(t);return n.shaderSource(i,e),n.compileShader(i),i}var $0=37297,J0=0;function j0(n,t){let e=n.split(`
`),i=[],s=Math.max(t-6,0),r=Math.min(t+6,e.length);for(let o=s;o<r;o++){let a=o+1;i.push(`${a===t?">":" "} ${a}: ${e[o]}`)}return i.join(`
`)}function K0(n){let t=ae.getPrimaries(ae.workingColorSpace),e=ae.getPrimaries(n),i;switch(t===e?i="":t===qr&&e===Xr?i="LinearDisplayP3ToLinearSRGB":t===Xr&&e===qr&&(i="LinearSRGBToLinearDisplayP3"),n){case Wn:case wa:return[i,"LinearTransferOETF"];case Ve:case _c:return[i,"sRGBTransferOETF"];default:return console.warn("THREE.WebGLProgram: Unsupported color space:",n),[i,"LinearTransferOETF"]}}function mh(n,t,e){let i=n.getShaderParameter(t,n.COMPILE_STATUS),s=n.getShaderInfoLog(t).trim();if(i&&s==="")return"";let r=/ERROR: 0:(\d+)/.exec(s);if(r){let o=parseInt(r[1]);return e.toUpperCase()+`

`+s+`

`+j0(n.getShaderSource(t),o)}else return s}function Q0(n,t){let e=K0(t);return`vec4 ${n}( vec4 value ) { return ${e[0]}( ${e[1]}( value ) ); }`}function tg(n,t){let e;switch(t){case xd:e="Linear";break;case yd:e="Reinhard";break;case _d:e="OptimizedCineon";break;case vd:e="ACESFilmic";break;case bd:e="AgX";break;case Md:e="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",t),e="Linear"}return"vec3 "+n+"( vec3 color ) { return "+e+"ToneMapping( color ); }"}function eg(n){return[n.extensionDerivatives||n.envMapCubeUVHeight||n.bumpMap||n.normalMapTangentSpace||n.clearcoatNormalMap||n.flatShading||n.shaderID==="physical"?"#extension GL_OES_standard_derivatives : enable":"",(n.extensionFragDepth||n.logarithmicDepthBuffer)&&n.rendererExtensionFragDepth?"#extension GL_EXT_frag_depth : enable":"",n.extensionDrawBuffers&&n.rendererExtensionDrawBuffers?"#extension GL_EXT_draw_buffers : require":"",(n.extensionShaderTextureLOD||n.envMap||n.transmission)&&n.rendererExtensionShaderTextureLod?"#extension GL_EXT_shader_texture_lod : enable":""].filter(hs).join(`
`)}function ng(n){return[n.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":""].filter(hs).join(`
`)}function ig(n){let t=[];for(let e in n){let i=n[e];i!==!1&&t.push("#define "+e+" "+i)}return t.join(`
`)}function sg(n,t){let e={},i=n.getProgramParameter(t,n.ACTIVE_ATTRIBUTES);for(let s=0;s<i;s++){let r=n.getActiveAttrib(t,s),o=r.name,a=1;r.type===n.FLOAT_MAT2&&(a=2),r.type===n.FLOAT_MAT3&&(a=3),r.type===n.FLOAT_MAT4&&(a=4),e[o]={type:r.type,location:n.getAttribLocation(t,o),locationSize:a}}return e}function hs(n){return n!==""}function gh(n,t){let e=t.numSpotLightShadows+t.numSpotLightMaps-t.numSpotLightShadowsWithMaps;return n.replace(/NUM_DIR_LIGHTS/g,t.numDirLights).replace(/NUM_SPOT_LIGHTS/g,t.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,t.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,e).replace(/NUM_RECT_AREA_LIGHTS/g,t.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,t.numPointLights).replace(/NUM_HEMI_LIGHTS/g,t.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,t.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,t.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,t.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,t.numPointLightShadows)}function xh(n,t){return n.replace(/NUM_CLIPPING_PLANES/g,t.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,t.numClippingPlanes-t.numClipIntersection)}var rg=/^[ \t]*#include +<([\w\d./]+)>/gm;function $o(n){return n.replace(rg,og)}var ag=new Map([["encodings_fragment","colorspace_fragment"],["encodings_pars_fragment","colorspace_pars_fragment"],["output_fragment","opaque_fragment"]]);function og(n,t){let e=qt[t];if(e===void 0){let i=ag.get(t);if(i!==void 0)e=qt[i],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',t,i);else throw new Error("Can not resolve #include <"+t+">")}return $o(e)}var cg=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function yh(n){return n.replace(cg,lg)}function lg(n,t,e,i){let s="";for(let r=parseInt(t);r<parseInt(e);r++)s+=i.replace(/\[\s*i\s*\]/g,"[ "+r+" ]").replace(/UNROLLED_LOOP_INDEX/g,r);return s}function _h(n){let t="precision "+n.precision+` float;
precision `+n.precision+" int;";return n.precision==="highp"?t+=`
#define HIGH_PRECISION`:n.precision==="mediump"?t+=`
#define MEDIUM_PRECISION`:n.precision==="lowp"&&(t+=`
#define LOW_PRECISION`),t}function hg(n){let t="SHADOWMAP_TYPE_BASIC";return n.shadowMapType===va?t="SHADOWMAP_TYPE_PCF":n.shadowMapType===Xu?t="SHADOWMAP_TYPE_PCF_SOFT":n.shadowMapType===Hn&&(t="SHADOWMAP_TYPE_VSM"),t}function ug(n){let t="ENVMAP_TYPE_CUBE";if(n.envMap)switch(n.envMapMode){case ps:case ms:t="ENVMAP_TYPE_CUBE";break;case ba:t="ENVMAP_TYPE_CUBE_UV";break}return t}function dg(n){let t="ENVMAP_MODE_REFLECTION";if(n.envMap)switch(n.envMapMode){case ms:t="ENVMAP_MODE_REFRACTION";break}return t}function fg(n){let t="ENVMAP_BLENDING_NONE";if(n.envMap)switch(n.combine){case Ma:t="ENVMAP_BLENDING_MULTIPLY";break;case md:t="ENVMAP_BLENDING_MIX";break;case gd:t="ENVMAP_BLENDING_ADD";break}return t}function pg(n){let t=n.envMapCubeUVHeight;if(t===null)return null;let e=Math.log2(t)-2,i=1/t;return{texelWidth:1/(3*Math.max(Math.pow(2,e),7*16)),texelHeight:i,maxMip:e}}function mg(n,t,e,i){let s=n.getContext(),r=e.defines,o=e.vertexShader,a=e.fragmentShader,c=hg(e),h=ug(e),l=dg(e),u=fg(e),f=pg(e),p=e.isWebGL2?"":eg(e),g=ng(e),x=ig(r),m=s.createProgram(),d,M,y=e.glslVersion?"#version "+e.glslVersion+`
`:"";e.isRawShaderMaterial?(d=["#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,x].filter(hs).join(`
`),d.length>0&&(d+=`
`),M=[p,"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,x].filter(hs).join(`
`),M.length>0&&(M+=`
`)):(d=[_h(e),"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,x,e.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",e.batching?"#define USE_BATCHING":"",e.instancing?"#define USE_INSTANCING":"",e.instancingColor?"#define USE_INSTANCING_COLOR":"",e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.map?"#define USE_MAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+l:"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",e.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",e.displacementMap?"#define USE_DISPLACEMENTMAP":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.anisotropy?"#define USE_ANISOTROPY":"",e.anisotropyMap?"#define USE_ANISOTROPYMAP":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",e.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.alphaHash?"#define USE_ALPHAHASH":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",e.mapUv?"#define MAP_UV "+e.mapUv:"",e.alphaMapUv?"#define ALPHAMAP_UV "+e.alphaMapUv:"",e.lightMapUv?"#define LIGHTMAP_UV "+e.lightMapUv:"",e.aoMapUv?"#define AOMAP_UV "+e.aoMapUv:"",e.emissiveMapUv?"#define EMISSIVEMAP_UV "+e.emissiveMapUv:"",e.bumpMapUv?"#define BUMPMAP_UV "+e.bumpMapUv:"",e.normalMapUv?"#define NORMALMAP_UV "+e.normalMapUv:"",e.displacementMapUv?"#define DISPLACEMENTMAP_UV "+e.displacementMapUv:"",e.metalnessMapUv?"#define METALNESSMAP_UV "+e.metalnessMapUv:"",e.roughnessMapUv?"#define ROUGHNESSMAP_UV "+e.roughnessMapUv:"",e.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+e.anisotropyMapUv:"",e.clearcoatMapUv?"#define CLEARCOATMAP_UV "+e.clearcoatMapUv:"",e.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+e.clearcoatNormalMapUv:"",e.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+e.clearcoatRoughnessMapUv:"",e.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+e.iridescenceMapUv:"",e.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+e.iridescenceThicknessMapUv:"",e.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+e.sheenColorMapUv:"",e.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+e.sheenRoughnessMapUv:"",e.specularMapUv?"#define SPECULARMAP_UV "+e.specularMapUv:"",e.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+e.specularColorMapUv:"",e.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+e.specularIntensityMapUv:"",e.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+e.transmissionMapUv:"",e.thicknessMapUv?"#define THICKNESSMAP_UV "+e.thicknessMapUv:"",e.vertexTangents&&e.flatShading===!1?"#define USE_TANGENT":"",e.vertexColors?"#define USE_COLOR":"",e.vertexAlphas?"#define USE_COLOR_ALPHA":"",e.vertexUv1s?"#define USE_UV1":"",e.vertexUv2s?"#define USE_UV2":"",e.vertexUv3s?"#define USE_UV3":"",e.pointsUvs?"#define USE_POINTS_UV":"",e.flatShading?"#define FLAT_SHADED":"",e.skinning?"#define USE_SKINNING":"",e.morphTargets?"#define USE_MORPHTARGETS":"",e.morphNormals&&e.flatShading===!1?"#define USE_MORPHNORMALS":"",e.morphColors&&e.isWebGL2?"#define USE_MORPHCOLORS":"",e.morphTargetsCount>0&&e.isWebGL2?"#define MORPHTARGETS_TEXTURE":"",e.morphTargetsCount>0&&e.isWebGL2?"#define MORPHTARGETS_TEXTURE_STRIDE "+e.morphTextureStride:"",e.morphTargetsCount>0&&e.isWebGL2?"#define MORPHTARGETS_COUNT "+e.morphTargetsCount:"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+c:"",e.sizeAttenuation?"#define USE_SIZEATTENUATION":"",e.numLightProbes>0?"#define USE_LIGHT_PROBES":"",e.useLegacyLights?"#define LEGACY_LIGHTS":"",e.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",e.logarithmicDepthBuffer&&e.rendererExtensionFragDepth?"#define USE_LOGDEPTHBUF_EXT":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#if ( defined( USE_MORPHTARGETS ) && ! defined( MORPHTARGETS_TEXTURE ) )","	attribute vec3 morphTarget0;","	attribute vec3 morphTarget1;","	attribute vec3 morphTarget2;","	attribute vec3 morphTarget3;","	#ifdef USE_MORPHNORMALS","		attribute vec3 morphNormal0;","		attribute vec3 morphNormal1;","		attribute vec3 morphNormal2;","		attribute vec3 morphNormal3;","	#else","		attribute vec3 morphTarget4;","		attribute vec3 morphTarget5;","		attribute vec3 morphTarget6;","		attribute vec3 morphTarget7;","	#endif","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(hs).join(`
`),M=[p,_h(e),"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,x,e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.map?"#define USE_MAP":"",e.matcap?"#define USE_MATCAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+h:"",e.envMap?"#define "+l:"",e.envMap?"#define "+u:"",f?"#define CUBEUV_TEXEL_WIDTH "+f.texelWidth:"",f?"#define CUBEUV_TEXEL_HEIGHT "+f.texelHeight:"",f?"#define CUBEUV_MAX_MIP "+f.maxMip+".0":"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",e.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.anisotropy?"#define USE_ANISOTROPY":"",e.anisotropyMap?"#define USE_ANISOTROPYMAP":"",e.clearcoat?"#define USE_CLEARCOAT":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.iridescence?"#define USE_IRIDESCENCE":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",e.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.alphaTest?"#define USE_ALPHATEST":"",e.alphaHash?"#define USE_ALPHAHASH":"",e.sheen?"#define USE_SHEEN":"",e.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.vertexTangents&&e.flatShading===!1?"#define USE_TANGENT":"",e.vertexColors||e.instancingColor?"#define USE_COLOR":"",e.vertexAlphas?"#define USE_COLOR_ALPHA":"",e.vertexUv1s?"#define USE_UV1":"",e.vertexUv2s?"#define USE_UV2":"",e.vertexUv3s?"#define USE_UV3":"",e.pointsUvs?"#define USE_POINTS_UV":"",e.gradientMap?"#define USE_GRADIENTMAP":"",e.flatShading?"#define FLAT_SHADED":"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+c:"",e.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",e.numLightProbes>0?"#define USE_LIGHT_PROBES":"",e.useLegacyLights?"#define LEGACY_LIGHTS":"",e.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",e.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",e.logarithmicDepthBuffer&&e.rendererExtensionFragDepth?"#define USE_LOGDEPTHBUF_EXT":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",e.toneMapping!==oi?"#define TONE_MAPPING":"",e.toneMapping!==oi?qt.tonemapping_pars_fragment:"",e.toneMapping!==oi?tg("toneMapping",e.toneMapping):"",e.dithering?"#define DITHERING":"",e.opaque?"#define OPAQUE":"",qt.colorspace_pars_fragment,Q0("linearToOutputTexel",e.outputColorSpace),e.useDepthPacking?"#define DEPTH_PACKING "+e.depthPacking:"",`
`].filter(hs).join(`
`)),o=$o(o),o=gh(o,e),o=xh(o,e),a=$o(a),a=gh(a,e),a=xh(a,e),o=yh(o),a=yh(a),e.isWebGL2&&e.isRawShaderMaterial!==!0&&(y=`#version 300 es
`,d=[g,"precision mediump sampler2DArray;","#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+d,M=["precision mediump sampler2DArray;","#define varying in",e.glslVersion===Fl?"":"layout(location = 0) out highp vec4 pc_fragColor;",e.glslVersion===Fl?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+M);let E=y+d+o,I=y+M+a,A=ph(s,s.VERTEX_SHADER,E),R=ph(s,s.FRAGMENT_SHADER,I);s.attachShader(m,A),s.attachShader(m,R),e.index0AttributeName!==void 0?s.bindAttribLocation(m,0,e.index0AttributeName):e.morphTargets===!0&&s.bindAttribLocation(m,0,"position"),s.linkProgram(m);function k(Z){if(n.debug.checkShaderErrors){let tt=s.getProgramInfoLog(m).trim(),L=s.getShaderInfoLog(A).trim(),F=s.getShaderInfoLog(R).trim(),Q=!0,$=!0;if(s.getProgramParameter(m,s.LINK_STATUS)===!1)if(Q=!1,typeof n.debug.onShaderError=="function")n.debug.onShaderError(s,m,A,R);else{let J=mh(s,A,"vertex"),j=mh(s,R,"fragment");console.error("THREE.WebGLProgram: Shader Error "+s.getError()+" - VALIDATE_STATUS "+s.getProgramParameter(m,s.VALIDATE_STATUS)+`

Program Info Log: `+tt+`
`+J+`
`+j)}else tt!==""?console.warn("THREE.WebGLProgram: Program Info Log:",tt):(L===""||F==="")&&($=!1);$&&(Z.diagnostics={runnable:Q,programLog:tt,vertexShader:{log:L,prefix:d},fragmentShader:{log:F,prefix:M}})}s.deleteShader(A),s.deleteShader(R),v=new fs(s,m),w=sg(s,m)}let v;this.getUniforms=function(){return v===void 0&&k(this),v};let w;this.getAttributes=function(){return w===void 0&&k(this),w};let O=e.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return O===!1&&(O=s.getProgramParameter(m,$0)),O},this.destroy=function(){i.releaseStatesOfProgram(this),s.deleteProgram(m),this.program=void 0},this.type=e.shaderType,this.name=e.shaderName,this.id=J0++,this.cacheKey=t,this.usedTimes=1,this.program=m,this.vertexShader=A,this.fragmentShader=R,this}var gg=0,Jo=class{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(t){let e=t.vertexShader,i=t.fragmentShader,s=this._getShaderStage(e),r=this._getShaderStage(i),o=this._getShaderCacheForMaterial(t);return o.has(s)===!1&&(o.add(s),s.usedTimes++),o.has(r)===!1&&(o.add(r),r.usedTimes++),this}remove(t){let e=this.materialCache.get(t);for(let i of e)i.usedTimes--,i.usedTimes===0&&this.shaderCache.delete(i.code);return this.materialCache.delete(t),this}getVertexShaderID(t){return this._getShaderStage(t.vertexShader).id}getFragmentShaderID(t){return this._getShaderStage(t.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(t){let e=this.materialCache,i=e.get(t);return i===void 0&&(i=new Set,e.set(t,i)),i}_getShaderStage(t){let e=this.shaderCache,i=e.get(t);return i===void 0&&(i=new jo(t),e.set(t,i)),i}},jo=class{constructor(t){this.id=gg++,this.code=t,this.usedTimes=0}};function xg(n,t,e,i,s,r,o){let a=new ta,c=new Jo,h=[],l=s.isWebGL2,u=s.logarithmicDepthBuffer,f=s.vertexTextures,p=s.precision,g={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function x(v){return v===0?"uv":`uv${v}`}function m(v,w,O,Z,tt){let L=Z.fog,F=tt.geometry,Q=v.isMeshStandardMaterial?Z.environment:null,$=(v.isMeshStandardMaterial?e:t).get(v.envMap||Q),J=$&&$.mapping===ba?$.image.height:null,j=g[v.type];v.precision!==null&&(p=s.getMaxPrecision(v.precision),p!==v.precision&&console.warn("THREE.WebGLProgram.getParameters:",v.precision,"not supported, using",p,"instead."));let et=F.morphAttributes.position||F.morphAttributes.normal||F.morphAttributes.color,ht=et!==void 0?et.length:0,pt=0;F.morphAttributes.position!==void 0&&(pt=1),F.morphAttributes.normal!==void 0&&(pt=2),F.morphAttributes.color!==void 0&&(pt=3);let Y,nt,mt,Ct;if(j){let Ke=In[j];Y=Ke.vertexShader,nt=Ke.fragmentShader}else Y=v.vertexShader,nt=v.fragmentShader,c.update(v),mt=c.getVertexShaderID(v),Ct=c.getFragmentShaderID(v);let bt=n.getRenderTarget(),zt=tt.isInstancedMesh===!0,Ht=tt.isBatchedMesh===!0,Dt=!!v.map,ne=!!v.matcap,B=!!$,Ge=!!v.aoMap,Lt=!!v.lightMap,Ot=!!v.bumpMap,St=!!v.normalMap,pe=!!v.displacementMap,Gt=!!v.emissiveMap,S=!!v.metalnessMap,_=!!v.roughnessMap,H=v.anisotropy>0,ot=v.clearcoat>0,at=v.iridescence>0,lt=v.sheen>0,Rt=v.transmission>0,gt=H&&!!v.anisotropyMap,vt=ot&&!!v.clearcoatMap,Pt=ot&&!!v.clearcoatNormalMap,Bt=ot&&!!v.clearcoatRoughnessMap,st=at&&!!v.iridescenceMap,se=at&&!!v.iridescenceThicknessMap,D=lt&&!!v.sheenColorMap,N=lt&&!!v.sheenRoughnessMap,G=!!v.specularMap,W=!!v.specularColorMap,ut=!!v.specularIntensityMap,rt=Rt&&!!v.transmissionMap,xt=Rt&&!!v.thicknessMap,yt=!!v.gradientMap,K=!!v.alphaMap,C=v.alphaTest>0,it=!!v.alphaHash,ct=!!v.extensions,wt=!!F.attributes.uv1,Tt=!!F.attributes.uv2,re=!!F.attributes.uv3,ue=oi;return v.toneMapped&&(bt===null||bt.isXRRenderTarget===!0)&&(ue=n.toneMapping),{isWebGL2:l,shaderID:j,shaderType:v.type,shaderName:v.name,vertexShader:Y,fragmentShader:nt,defines:v.defines,customVertexShaderID:mt,customFragmentShaderID:Ct,isRawShaderMaterial:v.isRawShaderMaterial===!0,glslVersion:v.glslVersion,precision:p,batching:Ht,instancing:zt,instancingColor:zt&&tt.instanceColor!==null,supportsVertexTextures:f,outputColorSpace:bt===null?n.outputColorSpace:bt.isXRRenderTarget===!0?bt.texture.colorSpace:Wn,map:Dt,matcap:ne,envMap:B,envMapMode:B&&$.mapping,envMapCubeUVHeight:J,aoMap:Ge,lightMap:Lt,bumpMap:Ot,normalMap:St,displacementMap:f&&pe,emissiveMap:Gt,normalMapObjectSpace:St&&v.normalMapType===Dd,normalMapTangentSpace:St&&v.normalMapType===yc,metalnessMap:S,roughnessMap:_,anisotropy:H,anisotropyMap:gt,clearcoat:ot,clearcoatMap:vt,clearcoatNormalMap:Pt,clearcoatRoughnessMap:Bt,iridescence:at,iridescenceMap:st,iridescenceThicknessMap:se,sheen:lt,sheenColorMap:D,sheenRoughnessMap:N,specularMap:G,specularColorMap:W,specularIntensityMap:ut,transmission:Rt,transmissionMap:rt,thicknessMap:xt,gradientMap:yt,opaque:v.transparent===!1&&v.blending===us,alphaMap:K,alphaTest:C,alphaHash:it,combine:v.combine,mapUv:Dt&&x(v.map.channel),aoMapUv:Ge&&x(v.aoMap.channel),lightMapUv:Lt&&x(v.lightMap.channel),bumpMapUv:Ot&&x(v.bumpMap.channel),normalMapUv:St&&x(v.normalMap.channel),displacementMapUv:pe&&x(v.displacementMap.channel),emissiveMapUv:Gt&&x(v.emissiveMap.channel),metalnessMapUv:S&&x(v.metalnessMap.channel),roughnessMapUv:_&&x(v.roughnessMap.channel),anisotropyMapUv:gt&&x(v.anisotropyMap.channel),clearcoatMapUv:vt&&x(v.clearcoatMap.channel),clearcoatNormalMapUv:Pt&&x(v.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:Bt&&x(v.clearcoatRoughnessMap.channel),iridescenceMapUv:st&&x(v.iridescenceMap.channel),iridescenceThicknessMapUv:se&&x(v.iridescenceThicknessMap.channel),sheenColorMapUv:D&&x(v.sheenColorMap.channel),sheenRoughnessMapUv:N&&x(v.sheenRoughnessMap.channel),specularMapUv:G&&x(v.specularMap.channel),specularColorMapUv:W&&x(v.specularColorMap.channel),specularIntensityMapUv:ut&&x(v.specularIntensityMap.channel),transmissionMapUv:rt&&x(v.transmissionMap.channel),thicknessMapUv:xt&&x(v.thicknessMap.channel),alphaMapUv:K&&x(v.alphaMap.channel),vertexTangents:!!F.attributes.tangent&&(St||H),vertexColors:v.vertexColors,vertexAlphas:v.vertexColors===!0&&!!F.attributes.color&&F.attributes.color.itemSize===4,vertexUv1s:wt,vertexUv2s:Tt,vertexUv3s:re,pointsUvs:tt.isPoints===!0&&!!F.attributes.uv&&(Dt||K),fog:!!L,useFog:v.fog===!0,fogExp2:L&&L.isFogExp2,flatShading:v.flatShading===!0,sizeAttenuation:v.sizeAttenuation===!0,logarithmicDepthBuffer:u,skinning:tt.isSkinnedMesh===!0,morphTargets:F.morphAttributes.position!==void 0,morphNormals:F.morphAttributes.normal!==void 0,morphColors:F.morphAttributes.color!==void 0,morphTargetsCount:ht,morphTextureStride:pt,numDirLights:w.directional.length,numPointLights:w.point.length,numSpotLights:w.spot.length,numSpotLightMaps:w.spotLightMap.length,numRectAreaLights:w.rectArea.length,numHemiLights:w.hemi.length,numDirLightShadows:w.directionalShadowMap.length,numPointLightShadows:w.pointShadowMap.length,numSpotLightShadows:w.spotShadowMap.length,numSpotLightShadowsWithMaps:w.numSpotLightShadowsWithMaps,numLightProbes:w.numLightProbes,numClippingPlanes:o.numPlanes,numClipIntersection:o.numIntersection,dithering:v.dithering,shadowMapEnabled:n.shadowMap.enabled&&O.length>0,shadowMapType:n.shadowMap.type,toneMapping:ue,useLegacyLights:n._useLegacyLights,decodeVideoTexture:Dt&&v.map.isVideoTexture===!0&&ae.getTransfer(v.map.colorSpace)===me,premultipliedAlpha:v.premultipliedAlpha,doubleSided:v.side===un,flipSided:v.side===on,useDepthPacking:v.depthPacking>=0,depthPacking:v.depthPacking||0,index0AttributeName:v.index0AttributeName,extensionDerivatives:ct&&v.extensions.derivatives===!0,extensionFragDepth:ct&&v.extensions.fragDepth===!0,extensionDrawBuffers:ct&&v.extensions.drawBuffers===!0,extensionShaderTextureLOD:ct&&v.extensions.shaderTextureLOD===!0,extensionClipCullDistance:ct&&v.extensions.clipCullDistance&&i.has("WEBGL_clip_cull_distance"),rendererExtensionFragDepth:l||i.has("EXT_frag_depth"),rendererExtensionDrawBuffers:l||i.has("WEBGL_draw_buffers"),rendererExtensionShaderTextureLod:l||i.has("EXT_shader_texture_lod"),rendererExtensionParallelShaderCompile:i.has("KHR_parallel_shader_compile"),customProgramCacheKey:v.customProgramCacheKey()}}function d(v){let w=[];if(v.shaderID?w.push(v.shaderID):(w.push(v.customVertexShaderID),w.push(v.customFragmentShaderID)),v.defines!==void 0)for(let O in v.defines)w.push(O),w.push(v.defines[O]);return v.isRawShaderMaterial===!1&&(M(w,v),y(w,v),w.push(n.outputColorSpace)),w.push(v.customProgramCacheKey),w.join()}function M(v,w){v.push(w.precision),v.push(w.outputColorSpace),v.push(w.envMapMode),v.push(w.envMapCubeUVHeight),v.push(w.mapUv),v.push(w.alphaMapUv),v.push(w.lightMapUv),v.push(w.aoMapUv),v.push(w.bumpMapUv),v.push(w.normalMapUv),v.push(w.displacementMapUv),v.push(w.emissiveMapUv),v.push(w.metalnessMapUv),v.push(w.roughnessMapUv),v.push(w.anisotropyMapUv),v.push(w.clearcoatMapUv),v.push(w.clearcoatNormalMapUv),v.push(w.clearcoatRoughnessMapUv),v.push(w.iridescenceMapUv),v.push(w.iridescenceThicknessMapUv),v.push(w.sheenColorMapUv),v.push(w.sheenRoughnessMapUv),v.push(w.specularMapUv),v.push(w.specularColorMapUv),v.push(w.specularIntensityMapUv),v.push(w.transmissionMapUv),v.push(w.thicknessMapUv),v.push(w.combine),v.push(w.fogExp2),v.push(w.sizeAttenuation),v.push(w.morphTargetsCount),v.push(w.morphAttributeCount),v.push(w.numDirLights),v.push(w.numPointLights),v.push(w.numSpotLights),v.push(w.numSpotLightMaps),v.push(w.numHemiLights),v.push(w.numRectAreaLights),v.push(w.numDirLightShadows),v.push(w.numPointLightShadows),v.push(w.numSpotLightShadows),v.push(w.numSpotLightShadowsWithMaps),v.push(w.numLightProbes),v.push(w.shadowMapType),v.push(w.toneMapping),v.push(w.numClippingPlanes),v.push(w.numClipIntersection),v.push(w.depthPacking)}function y(v,w){a.disableAll(),w.isWebGL2&&a.enable(0),w.supportsVertexTextures&&a.enable(1),w.instancing&&a.enable(2),w.instancingColor&&a.enable(3),w.matcap&&a.enable(4),w.envMap&&a.enable(5),w.normalMapObjectSpace&&a.enable(6),w.normalMapTangentSpace&&a.enable(7),w.clearcoat&&a.enable(8),w.iridescence&&a.enable(9),w.alphaTest&&a.enable(10),w.vertexColors&&a.enable(11),w.vertexAlphas&&a.enable(12),w.vertexUv1s&&a.enable(13),w.vertexUv2s&&a.enable(14),w.vertexUv3s&&a.enable(15),w.vertexTangents&&a.enable(16),w.anisotropy&&a.enable(17),w.alphaHash&&a.enable(18),w.batching&&a.enable(19),v.push(a.mask),a.disableAll(),w.fog&&a.enable(0),w.useFog&&a.enable(1),w.flatShading&&a.enable(2),w.logarithmicDepthBuffer&&a.enable(3),w.skinning&&a.enable(4),w.morphTargets&&a.enable(5),w.morphNormals&&a.enable(6),w.morphColors&&a.enable(7),w.premultipliedAlpha&&a.enable(8),w.shadowMapEnabled&&a.enable(9),w.useLegacyLights&&a.enable(10),w.doubleSided&&a.enable(11),w.flipSided&&a.enable(12),w.useDepthPacking&&a.enable(13),w.dithering&&a.enable(14),w.transmission&&a.enable(15),w.sheen&&a.enable(16),w.opaque&&a.enable(17),w.pointsUvs&&a.enable(18),w.decodeVideoTexture&&a.enable(19),v.push(a.mask)}function E(v){let w=g[v.type],O;if(w){let Z=In[w];O=af.clone(Z.uniforms)}else O=v.uniforms;return O}function I(v,w){let O;for(let Z=0,tt=h.length;Z<tt;Z++){let L=h[Z];if(L.cacheKey===w){O=L,++O.usedTimes;break}}return O===void 0&&(O=new mg(n,w,v,r),h.push(O)),O}function A(v){if(--v.usedTimes===0){let w=h.indexOf(v);h[w]=h[h.length-1],h.pop(),v.destroy()}}function R(v){c.remove(v)}function k(){c.dispose()}return{getParameters:m,getProgramCacheKey:d,getUniforms:E,acquireProgram:I,releaseProgram:A,releaseShaderCache:R,programs:h,dispose:k}}function yg(){let n=new WeakMap;function t(r){let o=n.get(r);return o===void 0&&(o={},n.set(r,o)),o}function e(r){n.delete(r)}function i(r,o,a){n.get(r)[o]=a}function s(){n=new WeakMap}return{get:t,remove:e,update:i,dispose:s}}function _g(n,t){return n.groupOrder!==t.groupOrder?n.groupOrder-t.groupOrder:n.renderOrder!==t.renderOrder?n.renderOrder-t.renderOrder:n.material.id!==t.material.id?n.material.id-t.material.id:n.z!==t.z?n.z-t.z:n.id-t.id}function vh(n,t){return n.groupOrder!==t.groupOrder?n.groupOrder-t.groupOrder:n.renderOrder!==t.renderOrder?n.renderOrder-t.renderOrder:n.z!==t.z?t.z-n.z:n.id-t.id}function Mh(){let n=[],t=0,e=[],i=[],s=[];function r(){t=0,e.length=0,i.length=0,s.length=0}function o(u,f,p,g,x,m){let d=n[t];return d===void 0?(d={id:u.id,object:u,geometry:f,material:p,groupOrder:g,renderOrder:u.renderOrder,z:x,group:m},n[t]=d):(d.id=u.id,d.object=u,d.geometry=f,d.material=p,d.groupOrder=g,d.renderOrder=u.renderOrder,d.z=x,d.group=m),t++,d}function a(u,f,p,g,x,m){let d=o(u,f,p,g,x,m);p.transmission>0?i.push(d):p.transparent===!0?s.push(d):e.push(d)}function c(u,f,p,g,x,m){let d=o(u,f,p,g,x,m);p.transmission>0?i.unshift(d):p.transparent===!0?s.unshift(d):e.unshift(d)}function h(u,f){e.length>1&&e.sort(u||_g),i.length>1&&i.sort(f||vh),s.length>1&&s.sort(f||vh)}function l(){for(let u=t,f=n.length;u<f;u++){let p=n[u];if(p.id===null)break;p.id=null,p.object=null,p.geometry=null,p.material=null,p.group=null}}return{opaque:e,transmissive:i,transparent:s,init:r,push:a,unshift:c,finish:l,sort:h}}function vg(){let n=new WeakMap;function t(i,s){let r=n.get(i),o;return r===void 0?(o=new Mh,n.set(i,[o])):s>=r.length?(o=new Mh,r.push(o)):o=r[s],o}function e(){n=new WeakMap}return{get:t,dispose:e}}function Mg(){let n={};return{get:function(t){if(n[t.id]!==void 0)return n[t.id];let e;switch(t.type){case"DirectionalLight":e={direction:new z,color:new Et};break;case"SpotLight":e={position:new z,direction:new z,color:new Et,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":e={position:new z,color:new Et,distance:0,decay:0};break;case"HemisphereLight":e={direction:new z,skyColor:new Et,groundColor:new Et};break;case"RectAreaLight":e={color:new Et,position:new z,halfWidth:new z,halfHeight:new z};break}return n[t.id]=e,e}}}function bg(){let n={};return{get:function(t){if(n[t.id]!==void 0)return n[t.id];let e;switch(t.type){case"DirectionalLight":e={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Jt};break;case"SpotLight":e={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Jt};break;case"PointLight":e={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Jt,shadowCameraNear:1,shadowCameraFar:1e3};break}return n[t.id]=e,e}}}var wg=0;function Sg(n,t){return(t.castShadow?2:0)-(n.castShadow?2:0)+(t.map?1:0)-(n.map?1:0)}function Eg(n,t){let e=new Mg,i=bg(),s={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let l=0;l<9;l++)s.probe.push(new z);let r=new z,o=new ve,a=new ve;function c(l,u){let f=0,p=0,g=0;for(let Z=0;Z<9;Z++)s.probe[Z].set(0,0,0);let x=0,m=0,d=0,M=0,y=0,E=0,I=0,A=0,R=0,k=0,v=0;l.sort(Sg);let w=u===!0?Math.PI:1;for(let Z=0,tt=l.length;Z<tt;Z++){let L=l[Z],F=L.color,Q=L.intensity,$=L.distance,J=L.shadow&&L.shadow.map?L.shadow.map.texture:null;if(L.isAmbientLight)f+=F.r*Q*w,p+=F.g*Q*w,g+=F.b*Q*w;else if(L.isLightProbe){for(let j=0;j<9;j++)s.probe[j].addScaledVector(L.sh.coefficients[j],Q);v++}else if(L.isDirectionalLight){let j=e.get(L);if(j.color.copy(L.color).multiplyScalar(L.intensity*w),L.castShadow){let et=L.shadow,ht=i.get(L);ht.shadowBias=et.bias,ht.shadowNormalBias=et.normalBias,ht.shadowRadius=et.radius,ht.shadowMapSize=et.mapSize,s.directionalShadow[x]=ht,s.directionalShadowMap[x]=J,s.directionalShadowMatrix[x]=L.shadow.matrix,E++}s.directional[x]=j,x++}else if(L.isSpotLight){let j=e.get(L);j.position.setFromMatrixPosition(L.matrixWorld),j.color.copy(F).multiplyScalar(Q*w),j.distance=$,j.coneCos=Math.cos(L.angle),j.penumbraCos=Math.cos(L.angle*(1-L.penumbra)),j.decay=L.decay,s.spot[d]=j;let et=L.shadow;if(L.map&&(s.spotLightMap[R]=L.map,R++,et.updateMatrices(L),L.castShadow&&k++),s.spotLightMatrix[d]=et.matrix,L.castShadow){let ht=i.get(L);ht.shadowBias=et.bias,ht.shadowNormalBias=et.normalBias,ht.shadowRadius=et.radius,ht.shadowMapSize=et.mapSize,s.spotShadow[d]=ht,s.spotShadowMap[d]=J,A++}d++}else if(L.isRectAreaLight){let j=e.get(L);j.color.copy(F).multiplyScalar(Q),j.halfWidth.set(L.width*.5,0,0),j.halfHeight.set(0,L.height*.5,0),s.rectArea[M]=j,M++}else if(L.isPointLight){let j=e.get(L);if(j.color.copy(L.color).multiplyScalar(L.intensity*w),j.distance=L.distance,j.decay=L.decay,L.castShadow){let et=L.shadow,ht=i.get(L);ht.shadowBias=et.bias,ht.shadowNormalBias=et.normalBias,ht.shadowRadius=et.radius,ht.shadowMapSize=et.mapSize,ht.shadowCameraNear=et.camera.near,ht.shadowCameraFar=et.camera.far,s.pointShadow[m]=ht,s.pointShadowMap[m]=J,s.pointShadowMatrix[m]=L.shadow.matrix,I++}s.point[m]=j,m++}else if(L.isHemisphereLight){let j=e.get(L);j.skyColor.copy(L.color).multiplyScalar(Q*w),j.groundColor.copy(L.groundColor).multiplyScalar(Q*w),s.hemi[y]=j,y++}}M>0&&(t.isWebGL2?n.has("OES_texture_float_linear")===!0?(s.rectAreaLTC1=ft.LTC_FLOAT_1,s.rectAreaLTC2=ft.LTC_FLOAT_2):(s.rectAreaLTC1=ft.LTC_HALF_1,s.rectAreaLTC2=ft.LTC_HALF_2):n.has("OES_texture_float_linear")===!0?(s.rectAreaLTC1=ft.LTC_FLOAT_1,s.rectAreaLTC2=ft.LTC_FLOAT_2):n.has("OES_texture_half_float_linear")===!0?(s.rectAreaLTC1=ft.LTC_HALF_1,s.rectAreaLTC2=ft.LTC_HALF_2):console.error("THREE.WebGLRenderer: Unable to use RectAreaLight. Missing WebGL extensions.")),s.ambient[0]=f,s.ambient[1]=p,s.ambient[2]=g;let O=s.hash;(O.directionalLength!==x||O.pointLength!==m||O.spotLength!==d||O.rectAreaLength!==M||O.hemiLength!==y||O.numDirectionalShadows!==E||O.numPointShadows!==I||O.numSpotShadows!==A||O.numSpotMaps!==R||O.numLightProbes!==v)&&(s.directional.length=x,s.spot.length=d,s.rectArea.length=M,s.point.length=m,s.hemi.length=y,s.directionalShadow.length=E,s.directionalShadowMap.length=E,s.pointShadow.length=I,s.pointShadowMap.length=I,s.spotShadow.length=A,s.spotShadowMap.length=A,s.directionalShadowMatrix.length=E,s.pointShadowMatrix.length=I,s.spotLightMatrix.length=A+R-k,s.spotLightMap.length=R,s.numSpotLightShadowsWithMaps=k,s.numLightProbes=v,O.directionalLength=x,O.pointLength=m,O.spotLength=d,O.rectAreaLength=M,O.hemiLength=y,O.numDirectionalShadows=E,O.numPointShadows=I,O.numSpotShadows=A,O.numSpotMaps=R,O.numLightProbes=v,s.version=wg++)}function h(l,u){let f=0,p=0,g=0,x=0,m=0,d=u.matrixWorldInverse;for(let M=0,y=l.length;M<y;M++){let E=l[M];if(E.isDirectionalLight){let I=s.directional[f];I.direction.setFromMatrixPosition(E.matrixWorld),r.setFromMatrixPosition(E.target.matrixWorld),I.direction.sub(r),I.direction.transformDirection(d),f++}else if(E.isSpotLight){let I=s.spot[g];I.position.setFromMatrixPosition(E.matrixWorld),I.position.applyMatrix4(d),I.direction.setFromMatrixPosition(E.matrixWorld),r.setFromMatrixPosition(E.target.matrixWorld),I.direction.sub(r),I.direction.transformDirection(d),g++}else if(E.isRectAreaLight){let I=s.rectArea[x];I.position.setFromMatrixPosition(E.matrixWorld),I.position.applyMatrix4(d),a.identity(),o.copy(E.matrixWorld),o.premultiply(d),a.extractRotation(o),I.halfWidth.set(E.width*.5,0,0),I.halfHeight.set(0,E.height*.5,0),I.halfWidth.applyMatrix4(a),I.halfHeight.applyMatrix4(a),x++}else if(E.isPointLight){let I=s.point[p];I.position.setFromMatrixPosition(E.matrixWorld),I.position.applyMatrix4(d),p++}else if(E.isHemisphereLight){let I=s.hemi[m];I.direction.setFromMatrixPosition(E.matrixWorld),I.direction.transformDirection(d),m++}}}return{setup:c,setupView:h,state:s}}function bh(n,t){let e=new Eg(n,t),i=[],s=[];function r(){i.length=0,s.length=0}function o(u){i.push(u)}function a(u){s.push(u)}function c(u){e.setup(i,u)}function h(u){e.setupView(i,u)}return{init:r,state:{lightsArray:i,shadowsArray:s,lights:e},setupLights:c,setupLightsView:h,pushLight:o,pushShadow:a}}function Tg(n,t){let e=new WeakMap;function i(r,o=0){let a=e.get(r),c;return a===void 0?(c=new bh(n,t),e.set(r,[c])):o>=a.length?(c=new bh(n,t),a.push(c)):c=a[o],c}function s(){e=new WeakMap}return{get:i,dispose:s}}var Ko=class extends Yn{constructor(t){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=Ld,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(t)}copy(t){return super.copy(t),this.depthPacking=t.depthPacking,this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this}},Qo=class extends Yn{constructor(t){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(t)}copy(t){return super.copy(t),this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this}},Ag=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,Rg=`uniform sampler2D shadow_pass;
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
}`;function Cg(n,t,e){let i=new Ys,s=new Jt,r=new Jt,o=new ye,a=new Ko({depthPacking:zd}),c=new Qo,h={},l=e.maxTextureSize,u={[li]:on,[on]:li,[un]:un},f=new Zn({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new Jt},radius:{value:4}},vertexShader:Ag,fragmentShader:Rg}),p=f.clone();p.defines.HORIZONTAL_PASS=1;let g=new He;g.setAttribute("position",new Be(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));let x=new Mt(g,f),m=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=va;let d=this.type;this.render=function(A,R,k){if(m.enabled===!1||m.autoUpdate===!1&&m.needsUpdate===!1||A.length===0)return;let v=n.getRenderTarget(),w=n.getActiveCubeFace(),O=n.getActiveMipmapLevel(),Z=n.state;Z.setBlending(ai),Z.buffers.color.setClear(1,1,1,1),Z.buffers.depth.setTest(!0),Z.setScissorTest(!1);let tt=d!==Hn&&this.type===Hn,L=d===Hn&&this.type!==Hn;for(let F=0,Q=A.length;F<Q;F++){let $=A[F],J=$.shadow;if(J===void 0){console.warn("THREE.WebGLShadowMap:",$,"has no shadow.");continue}if(J.autoUpdate===!1&&J.needsUpdate===!1)continue;s.copy(J.mapSize);let j=J.getFrameExtents();if(s.multiply(j),r.copy(J.mapSize),(s.x>l||s.y>l)&&(s.x>l&&(r.x=Math.floor(l/j.x),s.x=r.x*j.x,J.mapSize.x=r.x),s.y>l&&(r.y=Math.floor(l/j.y),s.y=r.y*j.y,J.mapSize.y=r.y)),J.map===null||tt===!0||L===!0){let ht=this.type!==Hn?{minFilter:en,magFilter:en}:{};J.map!==null&&J.map.dispose(),J.map=new Xn(s.x,s.y,ht),J.map.texture.name=$.name+".shadowMap",J.camera.updateProjectionMatrix()}n.setRenderTarget(J.map),n.clear();let et=J.getViewportCount();for(let ht=0;ht<et;ht++){let pt=J.getViewport(ht);o.set(r.x*pt.x,r.y*pt.y,r.x*pt.z,r.y*pt.w),Z.viewport(o),J.updateMatrices($,ht),i=J.getFrustum(),E(R,k,J.camera,$,this.type)}J.isPointLightShadow!==!0&&this.type===Hn&&M(J,k),J.needsUpdate=!1}d=this.type,m.needsUpdate=!1,n.setRenderTarget(v,w,O)};function M(A,R){let k=t.update(x);f.defines.VSM_SAMPLES!==A.blurSamples&&(f.defines.VSM_SAMPLES=A.blurSamples,p.defines.VSM_SAMPLES=A.blurSamples,f.needsUpdate=!0,p.needsUpdate=!0),A.mapPass===null&&(A.mapPass=new Xn(s.x,s.y)),f.uniforms.shadow_pass.value=A.map.texture,f.uniforms.resolution.value=A.mapSize,f.uniforms.radius.value=A.radius,n.setRenderTarget(A.mapPass),n.clear(),n.renderBufferDirect(R,null,k,f,x,null),p.uniforms.shadow_pass.value=A.mapPass.texture,p.uniforms.resolution.value=A.mapSize,p.uniforms.radius.value=A.radius,n.setRenderTarget(A.map),n.clear(),n.renderBufferDirect(R,null,k,p,x,null)}function y(A,R,k,v){let w=null,O=k.isPointLight===!0?A.customDistanceMaterial:A.customDepthMaterial;if(O!==void 0)w=O;else if(w=k.isPointLight===!0?c:a,n.localClippingEnabled&&R.clipShadows===!0&&Array.isArray(R.clippingPlanes)&&R.clippingPlanes.length!==0||R.displacementMap&&R.displacementScale!==0||R.alphaMap&&R.alphaTest>0||R.map&&R.alphaTest>0){let Z=w.uuid,tt=R.uuid,L=h[Z];L===void 0&&(L={},h[Z]=L);let F=L[tt];F===void 0&&(F=w.clone(),L[tt]=F,R.addEventListener("dispose",I)),w=F}if(w.visible=R.visible,w.wireframe=R.wireframe,v===Hn?w.side=R.shadowSide!==null?R.shadowSide:R.side:w.side=R.shadowSide!==null?R.shadowSide:u[R.side],w.alphaMap=R.alphaMap,w.alphaTest=R.alphaTest,w.map=R.map,w.clipShadows=R.clipShadows,w.clippingPlanes=R.clippingPlanes,w.clipIntersection=R.clipIntersection,w.displacementMap=R.displacementMap,w.displacementScale=R.displacementScale,w.displacementBias=R.displacementBias,w.wireframeLinewidth=R.wireframeLinewidth,w.linewidth=R.linewidth,k.isPointLight===!0&&w.isMeshDistanceMaterial===!0){let Z=n.properties.get(w);Z.light=k}return w}function E(A,R,k,v,w){if(A.visible===!1)return;if(A.layers.test(R.layers)&&(A.isMesh||A.isLine||A.isPoints)&&(A.castShadow||A.receiveShadow&&w===Hn)&&(!A.frustumCulled||i.intersectsObject(A))){A.modelViewMatrix.multiplyMatrices(k.matrixWorldInverse,A.matrixWorld);let tt=t.update(A),L=A.material;if(Array.isArray(L)){let F=tt.groups;for(let Q=0,$=F.length;Q<$;Q++){let J=F[Q],j=L[J.materialIndex];if(j&&j.visible){let et=y(A,j,v,w);A.onBeforeShadow(n,A,R,k,tt,et,J),n.renderBufferDirect(k,null,tt,et,A,J),A.onAfterShadow(n,A,R,k,tt,et,J)}}}else if(L.visible){let F=y(A,L,v,w);A.onBeforeShadow(n,A,R,k,tt,F,null),n.renderBufferDirect(k,null,tt,F,A,null),A.onAfterShadow(n,A,R,k,tt,F,null)}}let Z=A.children;for(let tt=0,L=Z.length;tt<L;tt++)E(Z[tt],R,k,v,w)}function I(A){A.target.removeEventListener("dispose",I);for(let k in h){let v=h[k],w=A.target.uuid;w in v&&(v[w].dispose(),delete v[w])}}}function Pg(n,t,e){let i=e.isWebGL2;function s(){let C=!1,it=new ye,ct=null,wt=new ye(0,0,0,0);return{setMask:function(Tt){ct!==Tt&&!C&&(n.colorMask(Tt,Tt,Tt,Tt),ct=Tt)},setLocked:function(Tt){C=Tt},setClear:function(Tt,re,ue,Ne,Ke){Ke===!0&&(Tt*=Ne,re*=Ne,ue*=Ne),it.set(Tt,re,ue,Ne),wt.equals(it)===!1&&(n.clearColor(Tt,re,ue,Ne),wt.copy(it))},reset:function(){C=!1,ct=null,wt.set(-1,0,0,0)}}}function r(){let C=!1,it=null,ct=null,wt=null;return{setTest:function(Tt){Tt?Ht(n.DEPTH_TEST):Dt(n.DEPTH_TEST)},setMask:function(Tt){it!==Tt&&!C&&(n.depthMask(Tt),it=Tt)},setFunc:function(Tt){if(ct!==Tt){switch(Tt){case cd:n.depthFunc(n.NEVER);break;case ld:n.depthFunc(n.ALWAYS);break;case hd:n.depthFunc(n.LESS);break;case Hr:n.depthFunc(n.LEQUAL);break;case ud:n.depthFunc(n.EQUAL);break;case dd:n.depthFunc(n.GEQUAL);break;case fd:n.depthFunc(n.GREATER);break;case pd:n.depthFunc(n.NOTEQUAL);break;default:n.depthFunc(n.LEQUAL)}ct=Tt}},setLocked:function(Tt){C=Tt},setClear:function(Tt){wt!==Tt&&(n.clearDepth(Tt),wt=Tt)},reset:function(){C=!1,it=null,ct=null,wt=null}}}function o(){let C=!1,it=null,ct=null,wt=null,Tt=null,re=null,ue=null,Ne=null,Ke=null;return{setTest:function(de){C||(de?Ht(n.STENCIL_TEST):Dt(n.STENCIL_TEST))},setMask:function(de){it!==de&&!C&&(n.stencilMask(de),it=de)},setFunc:function(de,Qe,Pn){(ct!==de||wt!==Qe||Tt!==Pn)&&(n.stencilFunc(de,Qe,Pn),ct=de,wt=Qe,Tt=Pn)},setOp:function(de,Qe,Pn){(re!==de||ue!==Qe||Ne!==Pn)&&(n.stencilOp(de,Qe,Pn),re=de,ue=Qe,Ne=Pn)},setLocked:function(de){C=de},setClear:function(de){Ke!==de&&(n.clearStencil(de),Ke=de)},reset:function(){C=!1,it=null,ct=null,wt=null,Tt=null,re=null,ue=null,Ne=null,Ke=null}}}let a=new s,c=new r,h=new o,l=new WeakMap,u=new WeakMap,f={},p={},g=new WeakMap,x=[],m=null,d=!1,M=null,y=null,E=null,I=null,A=null,R=null,k=null,v=new Et(0,0,0),w=0,O=!1,Z=null,tt=null,L=null,F=null,Q=null,$=n.getParameter(n.MAX_COMBINED_TEXTURE_IMAGE_UNITS),J=!1,j=0,et=n.getParameter(n.VERSION);et.indexOf("WebGL")!==-1?(j=parseFloat(/^WebGL (\d)/.exec(et)[1]),J=j>=1):et.indexOf("OpenGL ES")!==-1&&(j=parseFloat(/^OpenGL ES (\d)/.exec(et)[1]),J=j>=2);let ht=null,pt={},Y=n.getParameter(n.SCISSOR_BOX),nt=n.getParameter(n.VIEWPORT),mt=new ye().fromArray(Y),Ct=new ye().fromArray(nt);function bt(C,it,ct,wt){let Tt=new Uint8Array(4),re=n.createTexture();n.bindTexture(C,re),n.texParameteri(C,n.TEXTURE_MIN_FILTER,n.NEAREST),n.texParameteri(C,n.TEXTURE_MAG_FILTER,n.NEAREST);for(let ue=0;ue<ct;ue++)i&&(C===n.TEXTURE_3D||C===n.TEXTURE_2D_ARRAY)?n.texImage3D(it,0,n.RGBA,1,1,wt,0,n.RGBA,n.UNSIGNED_BYTE,Tt):n.texImage2D(it+ue,0,n.RGBA,1,1,0,n.RGBA,n.UNSIGNED_BYTE,Tt);return re}let zt={};zt[n.TEXTURE_2D]=bt(n.TEXTURE_2D,n.TEXTURE_2D,1),zt[n.TEXTURE_CUBE_MAP]=bt(n.TEXTURE_CUBE_MAP,n.TEXTURE_CUBE_MAP_POSITIVE_X,6),i&&(zt[n.TEXTURE_2D_ARRAY]=bt(n.TEXTURE_2D_ARRAY,n.TEXTURE_2D_ARRAY,1,1),zt[n.TEXTURE_3D]=bt(n.TEXTURE_3D,n.TEXTURE_3D,1,1)),a.setClear(0,0,0,1),c.setClear(1),h.setClear(0),Ht(n.DEPTH_TEST),c.setFunc(Hr),Gt(!1),S(el),Ht(n.CULL_FACE),St(ai);function Ht(C){f[C]!==!0&&(n.enable(C),f[C]=!0)}function Dt(C){f[C]!==!1&&(n.disable(C),f[C]=!1)}function ne(C,it){return p[C]!==it?(n.bindFramebuffer(C,it),p[C]=it,i&&(C===n.DRAW_FRAMEBUFFER&&(p[n.FRAMEBUFFER]=it),C===n.FRAMEBUFFER&&(p[n.DRAW_FRAMEBUFFER]=it)),!0):!1}function B(C,it){let ct=x,wt=!1;if(C)if(ct=g.get(it),ct===void 0&&(ct=[],g.set(it,ct)),C.isWebGLMultipleRenderTargets){let Tt=C.texture;if(ct.length!==Tt.length||ct[0]!==n.COLOR_ATTACHMENT0){for(let re=0,ue=Tt.length;re<ue;re++)ct[re]=n.COLOR_ATTACHMENT0+re;ct.length=Tt.length,wt=!0}}else ct[0]!==n.COLOR_ATTACHMENT0&&(ct[0]=n.COLOR_ATTACHMENT0,wt=!0);else ct[0]!==n.BACK&&(ct[0]=n.BACK,wt=!0);wt&&(e.isWebGL2?n.drawBuffers(ct):t.get("WEBGL_draw_buffers").drawBuffersWEBGL(ct))}function Ge(C){return m!==C?(n.useProgram(C),m=C,!0):!1}let Lt={[Ti]:n.FUNC_ADD,[Yu]:n.FUNC_SUBTRACT,[Zu]:n.FUNC_REVERSE_SUBTRACT};if(i)Lt[rl]=n.MIN,Lt[al]=n.MAX;else{let C=t.get("EXT_blend_minmax");C!==null&&(Lt[rl]=C.MIN_EXT,Lt[al]=C.MAX_EXT)}let Ot={[$u]:n.ZERO,[Ju]:n.ONE,[ju]:n.SRC_COLOR,[zo]:n.SRC_ALPHA,[id]:n.SRC_ALPHA_SATURATE,[ed]:n.DST_COLOR,[Qu]:n.DST_ALPHA,[Ku]:n.ONE_MINUS_SRC_COLOR,[Do]:n.ONE_MINUS_SRC_ALPHA,[nd]:n.ONE_MINUS_DST_COLOR,[td]:n.ONE_MINUS_DST_ALPHA,[sd]:n.CONSTANT_COLOR,[rd]:n.ONE_MINUS_CONSTANT_COLOR,[ad]:n.CONSTANT_ALPHA,[od]:n.ONE_MINUS_CONSTANT_ALPHA};function St(C,it,ct,wt,Tt,re,ue,Ne,Ke,de){if(C===ai){d===!0&&(Dt(n.BLEND),d=!1);return}if(d===!1&&(Ht(n.BLEND),d=!0),C!==qu){if(C!==M||de!==O){if((y!==Ti||A!==Ti)&&(n.blendEquation(n.FUNC_ADD),y=Ti,A=Ti),de)switch(C){case us:n.blendFuncSeparate(n.ONE,n.ONE_MINUS_SRC_ALPHA,n.ONE,n.ONE_MINUS_SRC_ALPHA);break;case nl:n.blendFunc(n.ONE,n.ONE);break;case il:n.blendFuncSeparate(n.ZERO,n.ONE_MINUS_SRC_COLOR,n.ZERO,n.ONE);break;case sl:n.blendFuncSeparate(n.ZERO,n.SRC_COLOR,n.ZERO,n.SRC_ALPHA);break;default:console.error("THREE.WebGLState: Invalid blending: ",C);break}else switch(C){case us:n.blendFuncSeparate(n.SRC_ALPHA,n.ONE_MINUS_SRC_ALPHA,n.ONE,n.ONE_MINUS_SRC_ALPHA);break;case nl:n.blendFunc(n.SRC_ALPHA,n.ONE);break;case il:n.blendFuncSeparate(n.ZERO,n.ONE_MINUS_SRC_COLOR,n.ZERO,n.ONE);break;case sl:n.blendFunc(n.ZERO,n.SRC_COLOR);break;default:console.error("THREE.WebGLState: Invalid blending: ",C);break}E=null,I=null,R=null,k=null,v.set(0,0,0),w=0,M=C,O=de}return}Tt=Tt||it,re=re||ct,ue=ue||wt,(it!==y||Tt!==A)&&(n.blendEquationSeparate(Lt[it],Lt[Tt]),y=it,A=Tt),(ct!==E||wt!==I||re!==R||ue!==k)&&(n.blendFuncSeparate(Ot[ct],Ot[wt],Ot[re],Ot[ue]),E=ct,I=wt,R=re,k=ue),(Ne.equals(v)===!1||Ke!==w)&&(n.blendColor(Ne.r,Ne.g,Ne.b,Ke),v.copy(Ne),w=Ke),M=C,O=!1}function pe(C,it){C.side===un?Dt(n.CULL_FACE):Ht(n.CULL_FACE);let ct=C.side===on;it&&(ct=!ct),Gt(ct),C.blending===us&&C.transparent===!1?St(ai):St(C.blending,C.blendEquation,C.blendSrc,C.blendDst,C.blendEquationAlpha,C.blendSrcAlpha,C.blendDstAlpha,C.blendColor,C.blendAlpha,C.premultipliedAlpha),c.setFunc(C.depthFunc),c.setTest(C.depthTest),c.setMask(C.depthWrite),a.setMask(C.colorWrite);let wt=C.stencilWrite;h.setTest(wt),wt&&(h.setMask(C.stencilWriteMask),h.setFunc(C.stencilFunc,C.stencilRef,C.stencilFuncMask),h.setOp(C.stencilFail,C.stencilZFail,C.stencilZPass)),H(C.polygonOffset,C.polygonOffsetFactor,C.polygonOffsetUnits),C.alphaToCoverage===!0?Ht(n.SAMPLE_ALPHA_TO_COVERAGE):Dt(n.SAMPLE_ALPHA_TO_COVERAGE)}function Gt(C){Z!==C&&(C?n.frontFace(n.CW):n.frontFace(n.CCW),Z=C)}function S(C){C!==Vu?(Ht(n.CULL_FACE),C!==tt&&(C===el?n.cullFace(n.BACK):C===Wu?n.cullFace(n.FRONT):n.cullFace(n.FRONT_AND_BACK))):Dt(n.CULL_FACE),tt=C}function _(C){C!==L&&(J&&n.lineWidth(C),L=C)}function H(C,it,ct){C?(Ht(n.POLYGON_OFFSET_FILL),(F!==it||Q!==ct)&&(n.polygonOffset(it,ct),F=it,Q=ct)):Dt(n.POLYGON_OFFSET_FILL)}function ot(C){C?Ht(n.SCISSOR_TEST):Dt(n.SCISSOR_TEST)}function at(C){C===void 0&&(C=n.TEXTURE0+$-1),ht!==C&&(n.activeTexture(C),ht=C)}function lt(C,it,ct){ct===void 0&&(ht===null?ct=n.TEXTURE0+$-1:ct=ht);let wt=pt[ct];wt===void 0&&(wt={type:void 0,texture:void 0},pt[ct]=wt),(wt.type!==C||wt.texture!==it)&&(ht!==ct&&(n.activeTexture(ct),ht=ct),n.bindTexture(C,it||zt[C]),wt.type=C,wt.texture=it)}function Rt(){let C=pt[ht];C!==void 0&&C.type!==void 0&&(n.bindTexture(C.type,null),C.type=void 0,C.texture=void 0)}function gt(){try{n.compressedTexImage2D.apply(n,arguments)}catch(C){console.error("THREE.WebGLState:",C)}}function vt(){try{n.compressedTexImage3D.apply(n,arguments)}catch(C){console.error("THREE.WebGLState:",C)}}function Pt(){try{n.texSubImage2D.apply(n,arguments)}catch(C){console.error("THREE.WebGLState:",C)}}function Bt(){try{n.texSubImage3D.apply(n,arguments)}catch(C){console.error("THREE.WebGLState:",C)}}function st(){try{n.compressedTexSubImage2D.apply(n,arguments)}catch(C){console.error("THREE.WebGLState:",C)}}function se(){try{n.compressedTexSubImage3D.apply(n,arguments)}catch(C){console.error("THREE.WebGLState:",C)}}function D(){try{n.texStorage2D.apply(n,arguments)}catch(C){console.error("THREE.WebGLState:",C)}}function N(){try{n.texStorage3D.apply(n,arguments)}catch(C){console.error("THREE.WebGLState:",C)}}function G(){try{n.texImage2D.apply(n,arguments)}catch(C){console.error("THREE.WebGLState:",C)}}function W(){try{n.texImage3D.apply(n,arguments)}catch(C){console.error("THREE.WebGLState:",C)}}function ut(C){mt.equals(C)===!1&&(n.scissor(C.x,C.y,C.z,C.w),mt.copy(C))}function rt(C){Ct.equals(C)===!1&&(n.viewport(C.x,C.y,C.z,C.w),Ct.copy(C))}function xt(C,it){let ct=u.get(it);ct===void 0&&(ct=new WeakMap,u.set(it,ct));let wt=ct.get(C);wt===void 0&&(wt=n.getUniformBlockIndex(it,C.name),ct.set(C,wt))}function yt(C,it){let wt=u.get(it).get(C);l.get(it)!==wt&&(n.uniformBlockBinding(it,wt,C.__bindingPointIndex),l.set(it,wt))}function K(){n.disable(n.BLEND),n.disable(n.CULL_FACE),n.disable(n.DEPTH_TEST),n.disable(n.POLYGON_OFFSET_FILL),n.disable(n.SCISSOR_TEST),n.disable(n.STENCIL_TEST),n.disable(n.SAMPLE_ALPHA_TO_COVERAGE),n.blendEquation(n.FUNC_ADD),n.blendFunc(n.ONE,n.ZERO),n.blendFuncSeparate(n.ONE,n.ZERO,n.ONE,n.ZERO),n.blendColor(0,0,0,0),n.colorMask(!0,!0,!0,!0),n.clearColor(0,0,0,0),n.depthMask(!0),n.depthFunc(n.LESS),n.clearDepth(1),n.stencilMask(4294967295),n.stencilFunc(n.ALWAYS,0,4294967295),n.stencilOp(n.KEEP,n.KEEP,n.KEEP),n.clearStencil(0),n.cullFace(n.BACK),n.frontFace(n.CCW),n.polygonOffset(0,0),n.activeTexture(n.TEXTURE0),n.bindFramebuffer(n.FRAMEBUFFER,null),i===!0&&(n.bindFramebuffer(n.DRAW_FRAMEBUFFER,null),n.bindFramebuffer(n.READ_FRAMEBUFFER,null)),n.useProgram(null),n.lineWidth(1),n.scissor(0,0,n.canvas.width,n.canvas.height),n.viewport(0,0,n.canvas.width,n.canvas.height),f={},ht=null,pt={},p={},g=new WeakMap,x=[],m=null,d=!1,M=null,y=null,E=null,I=null,A=null,R=null,k=null,v=new Et(0,0,0),w=0,O=!1,Z=null,tt=null,L=null,F=null,Q=null,mt.set(0,0,n.canvas.width,n.canvas.height),Ct.set(0,0,n.canvas.width,n.canvas.height),a.reset(),c.reset(),h.reset()}return{buffers:{color:a,depth:c,stencil:h},enable:Ht,disable:Dt,bindFramebuffer:ne,drawBuffers:B,useProgram:Ge,setBlending:St,setMaterial:pe,setFlipSided:Gt,setCullFace:S,setLineWidth:_,setPolygonOffset:H,setScissorTest:ot,activeTexture:at,bindTexture:lt,unbindTexture:Rt,compressedTexImage2D:gt,compressedTexImage3D:vt,texImage2D:G,texImage3D:W,updateUBOMapping:xt,uniformBlockBinding:yt,texStorage2D:D,texStorage3D:N,texSubImage2D:Pt,texSubImage3D:Bt,compressedTexSubImage2D:st,compressedTexSubImage3D:se,scissor:ut,viewport:rt,reset:K}}function Ig(n,t,e,i,s,r,o){let a=s.isWebGL2,c=t.has("WEBGL_multisampled_render_to_texture")?t.get("WEBGL_multisampled_render_to_texture"):null,h=typeof navigator=="undefined"?!1:/OculusBrowser/g.test(navigator.userAgent),l=new WeakMap,u,f=new WeakMap,p=!1;try{p=typeof OffscreenCanvas!="undefined"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function g(S,_){return p?new OffscreenCanvas(S,_):Zr("canvas")}function x(S,_,H,ot){let at=1;if((S.width>ot||S.height>ot)&&(at=ot/Math.max(S.width,S.height)),at<1||_===!0)if(typeof HTMLImageElement!="undefined"&&S instanceof HTMLImageElement||typeof HTMLCanvasElement!="undefined"&&S instanceof HTMLCanvasElement||typeof ImageBitmap!="undefined"&&S instanceof ImageBitmap){let lt=_?Ho:Math.floor,Rt=lt(at*S.width),gt=lt(at*S.height);u===void 0&&(u=g(Rt,gt));let vt=H?g(Rt,gt):u;return vt.width=Rt,vt.height=gt,vt.getContext("2d").drawImage(S,0,0,Rt,gt),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+S.width+"x"+S.height+") to ("+Rt+"x"+gt+")."),vt}else return"data"in S&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+S.width+"x"+S.height+")."),S;return S}function m(S){return Bl(S.width)&&Bl(S.height)}function d(S){return a?!1:S.wrapS!==bn||S.wrapT!==bn||S.minFilter!==en&&S.minFilter!==gn}function M(S,_){return S.generateMipmaps&&_&&S.minFilter!==en&&S.minFilter!==gn}function y(S){n.generateMipmap(S)}function E(S,_,H,ot,at=!1){if(a===!1)return _;if(S!==null){if(n[S]!==void 0)return n[S];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+S+"'")}let lt=_;if(_===n.RED&&(H===n.FLOAT&&(lt=n.R32F),H===n.HALF_FLOAT&&(lt=n.R16F),H===n.UNSIGNED_BYTE&&(lt=n.R8)),_===n.RED_INTEGER&&(H===n.UNSIGNED_BYTE&&(lt=n.R8UI),H===n.UNSIGNED_SHORT&&(lt=n.R16UI),H===n.UNSIGNED_INT&&(lt=n.R32UI),H===n.BYTE&&(lt=n.R8I),H===n.SHORT&&(lt=n.R16I),H===n.INT&&(lt=n.R32I)),_===n.RG&&(H===n.FLOAT&&(lt=n.RG32F),H===n.HALF_FLOAT&&(lt=n.RG16F),H===n.UNSIGNED_BYTE&&(lt=n.RG8)),_===n.RGBA){let Rt=at?Wr:ae.getTransfer(ot);H===n.FLOAT&&(lt=n.RGBA32F),H===n.HALF_FLOAT&&(lt=n.RGBA16F),H===n.UNSIGNED_BYTE&&(lt=Rt===me?n.SRGB8_ALPHA8:n.RGBA8),H===n.UNSIGNED_SHORT_4_4_4_4&&(lt=n.RGBA4),H===n.UNSIGNED_SHORT_5_5_5_1&&(lt=n.RGB5_A1)}return(lt===n.R16F||lt===n.R32F||lt===n.RG16F||lt===n.RG32F||lt===n.RGBA16F||lt===n.RGBA32F)&&t.get("EXT_color_buffer_float"),lt}function I(S,_,H){return M(S,H)===!0||S.isFramebufferTexture&&S.minFilter!==en&&S.minFilter!==gn?Math.log2(Math.max(_.width,_.height))+1:S.mipmaps!==void 0&&S.mipmaps.length>0?S.mipmaps.length:S.isCompressedTexture&&Array.isArray(S.image)?_.mipmaps.length:1}function A(S){return S===en||S===ol||S===Qa?n.NEAREST:n.LINEAR}function R(S){let _=S.target;_.removeEventListener("dispose",R),v(_),_.isVideoTexture&&l.delete(_)}function k(S){let _=S.target;_.removeEventListener("dispose",k),O(_)}function v(S){let _=i.get(S);if(_.__webglInit===void 0)return;let H=S.source,ot=f.get(H);if(ot){let at=ot[_.__cacheKey];at.usedTimes--,at.usedTimes===0&&w(S),Object.keys(ot).length===0&&f.delete(H)}i.remove(S)}function w(S){let _=i.get(S);n.deleteTexture(_.__webglTexture);let H=S.source,ot=f.get(H);delete ot[_.__cacheKey],o.memory.textures--}function O(S){let _=S.texture,H=i.get(S),ot=i.get(_);if(ot.__webglTexture!==void 0&&(n.deleteTexture(ot.__webglTexture),o.memory.textures--),S.depthTexture&&S.depthTexture.dispose(),S.isWebGLCubeRenderTarget)for(let at=0;at<6;at++){if(Array.isArray(H.__webglFramebuffer[at]))for(let lt=0;lt<H.__webglFramebuffer[at].length;lt++)n.deleteFramebuffer(H.__webglFramebuffer[at][lt]);else n.deleteFramebuffer(H.__webglFramebuffer[at]);H.__webglDepthbuffer&&n.deleteRenderbuffer(H.__webglDepthbuffer[at])}else{if(Array.isArray(H.__webglFramebuffer))for(let at=0;at<H.__webglFramebuffer.length;at++)n.deleteFramebuffer(H.__webglFramebuffer[at]);else n.deleteFramebuffer(H.__webglFramebuffer);if(H.__webglDepthbuffer&&n.deleteRenderbuffer(H.__webglDepthbuffer),H.__webglMultisampledFramebuffer&&n.deleteFramebuffer(H.__webglMultisampledFramebuffer),H.__webglColorRenderbuffer)for(let at=0;at<H.__webglColorRenderbuffer.length;at++)H.__webglColorRenderbuffer[at]&&n.deleteRenderbuffer(H.__webglColorRenderbuffer[at]);H.__webglDepthRenderbuffer&&n.deleteRenderbuffer(H.__webglDepthRenderbuffer)}if(S.isWebGLMultipleRenderTargets)for(let at=0,lt=_.length;at<lt;at++){let Rt=i.get(_[at]);Rt.__webglTexture&&(n.deleteTexture(Rt.__webglTexture),o.memory.textures--),i.remove(_[at])}i.remove(_),i.remove(S)}let Z=0;function tt(){Z=0}function L(){let S=Z;return S>=s.maxTextures&&console.warn("THREE.WebGLTextures: Trying to use "+S+" texture units while this GPU supports only "+s.maxTextures),Z+=1,S}function F(S){let _=[];return _.push(S.wrapS),_.push(S.wrapT),_.push(S.wrapR||0),_.push(S.magFilter),_.push(S.minFilter),_.push(S.anisotropy),_.push(S.internalFormat),_.push(S.format),_.push(S.type),_.push(S.generateMipmaps),_.push(S.premultiplyAlpha),_.push(S.flipY),_.push(S.unpackAlignment),_.push(S.colorSpace),_.join()}function Q(S,_){let H=i.get(S);if(S.isVideoTexture&&pe(S),S.isRenderTargetTexture===!1&&S.version>0&&H.__version!==S.version){let ot=S.image;if(ot===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(ot.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{mt(H,S,_);return}}e.bindTexture(n.TEXTURE_2D,H.__webglTexture,n.TEXTURE0+_)}function $(S,_){let H=i.get(S);if(S.version>0&&H.__version!==S.version){mt(H,S,_);return}e.bindTexture(n.TEXTURE_2D_ARRAY,H.__webglTexture,n.TEXTURE0+_)}function J(S,_){let H=i.get(S);if(S.version>0&&H.__version!==S.version){mt(H,S,_);return}e.bindTexture(n.TEXTURE_3D,H.__webglTexture,n.TEXTURE0+_)}function j(S,_){let H=i.get(S);if(S.version>0&&H.__version!==S.version){Ct(H,S,_);return}e.bindTexture(n.TEXTURE_CUBE_MAP,H.__webglTexture,n.TEXTURE0+_)}let et={[Oo]:n.REPEAT,[bn]:n.CLAMP_TO_EDGE,[Fo]:n.MIRRORED_REPEAT},ht={[en]:n.NEAREST,[ol]:n.NEAREST_MIPMAP_NEAREST,[Qa]:n.NEAREST_MIPMAP_LINEAR,[gn]:n.LINEAR,[wd]:n.LINEAR_MIPMAP_NEAREST,[Xs]:n.LINEAR_MIPMAP_LINEAR},pt={[Ud]:n.NEVER,[Hd]:n.ALWAYS,[Nd]:n.LESS,[kh]:n.LEQUAL,[Od]:n.EQUAL,[kd]:n.GEQUAL,[Fd]:n.GREATER,[Bd]:n.NOTEQUAL};function Y(S,_,H){if(H?(n.texParameteri(S,n.TEXTURE_WRAP_S,et[_.wrapS]),n.texParameteri(S,n.TEXTURE_WRAP_T,et[_.wrapT]),(S===n.TEXTURE_3D||S===n.TEXTURE_2D_ARRAY)&&n.texParameteri(S,n.TEXTURE_WRAP_R,et[_.wrapR]),n.texParameteri(S,n.TEXTURE_MAG_FILTER,ht[_.magFilter]),n.texParameteri(S,n.TEXTURE_MIN_FILTER,ht[_.minFilter])):(n.texParameteri(S,n.TEXTURE_WRAP_S,n.CLAMP_TO_EDGE),n.texParameteri(S,n.TEXTURE_WRAP_T,n.CLAMP_TO_EDGE),(S===n.TEXTURE_3D||S===n.TEXTURE_2D_ARRAY)&&n.texParameteri(S,n.TEXTURE_WRAP_R,n.CLAMP_TO_EDGE),(_.wrapS!==bn||_.wrapT!==bn)&&console.warn("THREE.WebGLRenderer: Texture is not power of two. Texture.wrapS and Texture.wrapT should be set to THREE.ClampToEdgeWrapping."),n.texParameteri(S,n.TEXTURE_MAG_FILTER,A(_.magFilter)),n.texParameteri(S,n.TEXTURE_MIN_FILTER,A(_.minFilter)),_.minFilter!==en&&_.minFilter!==gn&&console.warn("THREE.WebGLRenderer: Texture is not power of two. Texture.minFilter should be set to THREE.NearestFilter or THREE.LinearFilter.")),_.compareFunction&&(n.texParameteri(S,n.TEXTURE_COMPARE_MODE,n.COMPARE_REF_TO_TEXTURE),n.texParameteri(S,n.TEXTURE_COMPARE_FUNC,pt[_.compareFunction])),t.has("EXT_texture_filter_anisotropic")===!0){let ot=t.get("EXT_texture_filter_anisotropic");if(_.magFilter===en||_.minFilter!==Qa&&_.minFilter!==Xs||_.type===ri&&t.has("OES_texture_float_linear")===!1||a===!1&&_.type===qs&&t.has("OES_texture_half_float_linear")===!1)return;(_.anisotropy>1||i.get(_).__currentAnisotropy)&&(n.texParameterf(S,ot.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(_.anisotropy,s.getMaxAnisotropy())),i.get(_).__currentAnisotropy=_.anisotropy)}}function nt(S,_){let H=!1;S.__webglInit===void 0&&(S.__webglInit=!0,_.addEventListener("dispose",R));let ot=_.source,at=f.get(ot);at===void 0&&(at={},f.set(ot,at));let lt=F(_);if(lt!==S.__cacheKey){at[lt]===void 0&&(at[lt]={texture:n.createTexture(),usedTimes:0},o.memory.textures++,H=!0),at[lt].usedTimes++;let Rt=at[S.__cacheKey];Rt!==void 0&&(at[S.__cacheKey].usedTimes--,Rt.usedTimes===0&&w(_)),S.__cacheKey=lt,S.__webglTexture=at[lt].texture}return H}function mt(S,_,H){let ot=n.TEXTURE_2D;(_.isDataArrayTexture||_.isCompressedArrayTexture)&&(ot=n.TEXTURE_2D_ARRAY),_.isData3DTexture&&(ot=n.TEXTURE_3D);let at=nt(S,_),lt=_.source;e.bindTexture(ot,S.__webglTexture,n.TEXTURE0+H);let Rt=i.get(lt);if(lt.version!==Rt.__version||at===!0){e.activeTexture(n.TEXTURE0+H);let gt=ae.getPrimaries(ae.workingColorSpace),vt=_.colorSpace===xn?null:ae.getPrimaries(_.colorSpace),Pt=_.colorSpace===xn||gt===vt?n.NONE:n.BROWSER_DEFAULT_WEBGL;n.pixelStorei(n.UNPACK_FLIP_Y_WEBGL,_.flipY),n.pixelStorei(n.UNPACK_PREMULTIPLY_ALPHA_WEBGL,_.premultiplyAlpha),n.pixelStorei(n.UNPACK_ALIGNMENT,_.unpackAlignment),n.pixelStorei(n.UNPACK_COLORSPACE_CONVERSION_WEBGL,Pt);let Bt=d(_)&&m(_.image)===!1,st=x(_.image,Bt,!1,s.maxTextureSize);st=Gt(_,st);let se=m(st)||a,D=r.convert(_.format,_.colorSpace),N=r.convert(_.type),G=E(_.internalFormat,D,N,_.colorSpace,_.isVideoTexture);Y(ot,_,se);let W,ut=_.mipmaps,rt=a&&_.isVideoTexture!==!0&&G!==Fh,xt=Rt.__version===void 0||at===!0,yt=I(_,st,se);if(_.isDepthTexture)G=n.DEPTH_COMPONENT,a?_.type===ri?G=n.DEPTH_COMPONENT32F:_.type===si?G=n.DEPTH_COMPONENT24:_.type===Ri?G=n.DEPTH24_STENCIL8:G=n.DEPTH_COMPONENT16:_.type===ri&&console.error("WebGLRenderer: Floating point depth texture requires WebGL2."),_.format===Ci&&G===n.DEPTH_COMPONENT&&_.type!==xc&&_.type!==si&&(console.warn("THREE.WebGLRenderer: Use UnsignedShortType or UnsignedIntType for DepthFormat DepthTexture."),_.type=si,N=r.convert(_.type)),_.format===gs&&G===n.DEPTH_COMPONENT&&(G=n.DEPTH_STENCIL,_.type!==Ri&&(console.warn("THREE.WebGLRenderer: Use UnsignedInt248Type for DepthStencilFormat DepthTexture."),_.type=Ri,N=r.convert(_.type))),xt&&(rt?e.texStorage2D(n.TEXTURE_2D,1,G,st.width,st.height):e.texImage2D(n.TEXTURE_2D,0,G,st.width,st.height,0,D,N,null));else if(_.isDataTexture)if(ut.length>0&&se){rt&&xt&&e.texStorage2D(n.TEXTURE_2D,yt,G,ut[0].width,ut[0].height);for(let K=0,C=ut.length;K<C;K++)W=ut[K],rt?e.texSubImage2D(n.TEXTURE_2D,K,0,0,W.width,W.height,D,N,W.data):e.texImage2D(n.TEXTURE_2D,K,G,W.width,W.height,0,D,N,W.data);_.generateMipmaps=!1}else rt?(xt&&e.texStorage2D(n.TEXTURE_2D,yt,G,st.width,st.height),e.texSubImage2D(n.TEXTURE_2D,0,0,0,st.width,st.height,D,N,st.data)):e.texImage2D(n.TEXTURE_2D,0,G,st.width,st.height,0,D,N,st.data);else if(_.isCompressedTexture)if(_.isCompressedArrayTexture){rt&&xt&&e.texStorage3D(n.TEXTURE_2D_ARRAY,yt,G,ut[0].width,ut[0].height,st.depth);for(let K=0,C=ut.length;K<C;K++)W=ut[K],_.format!==wn?D!==null?rt?e.compressedTexSubImage3D(n.TEXTURE_2D_ARRAY,K,0,0,0,W.width,W.height,st.depth,D,W.data,0,0):e.compressedTexImage3D(n.TEXTURE_2D_ARRAY,K,G,W.width,W.height,st.depth,0,W.data,0,0):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):rt?e.texSubImage3D(n.TEXTURE_2D_ARRAY,K,0,0,0,W.width,W.height,st.depth,D,N,W.data):e.texImage3D(n.TEXTURE_2D_ARRAY,K,G,W.width,W.height,st.depth,0,D,N,W.data)}else{rt&&xt&&e.texStorage2D(n.TEXTURE_2D,yt,G,ut[0].width,ut[0].height);for(let K=0,C=ut.length;K<C;K++)W=ut[K],_.format!==wn?D!==null?rt?e.compressedTexSubImage2D(n.TEXTURE_2D,K,0,0,W.width,W.height,D,W.data):e.compressedTexImage2D(n.TEXTURE_2D,K,G,W.width,W.height,0,W.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):rt?e.texSubImage2D(n.TEXTURE_2D,K,0,0,W.width,W.height,D,N,W.data):e.texImage2D(n.TEXTURE_2D,K,G,W.width,W.height,0,D,N,W.data)}else if(_.isDataArrayTexture)rt?(xt&&e.texStorage3D(n.TEXTURE_2D_ARRAY,yt,G,st.width,st.height,st.depth),e.texSubImage3D(n.TEXTURE_2D_ARRAY,0,0,0,0,st.width,st.height,st.depth,D,N,st.data)):e.texImage3D(n.TEXTURE_2D_ARRAY,0,G,st.width,st.height,st.depth,0,D,N,st.data);else if(_.isData3DTexture)rt?(xt&&e.texStorage3D(n.TEXTURE_3D,yt,G,st.width,st.height,st.depth),e.texSubImage3D(n.TEXTURE_3D,0,0,0,0,st.width,st.height,st.depth,D,N,st.data)):e.texImage3D(n.TEXTURE_3D,0,G,st.width,st.height,st.depth,0,D,N,st.data);else if(_.isFramebufferTexture){if(xt)if(rt)e.texStorage2D(n.TEXTURE_2D,yt,G,st.width,st.height);else{let K=st.width,C=st.height;for(let it=0;it<yt;it++)e.texImage2D(n.TEXTURE_2D,it,G,K,C,0,D,N,null),K>>=1,C>>=1}}else if(ut.length>0&&se){rt&&xt&&e.texStorage2D(n.TEXTURE_2D,yt,G,ut[0].width,ut[0].height);for(let K=0,C=ut.length;K<C;K++)W=ut[K],rt?e.texSubImage2D(n.TEXTURE_2D,K,0,0,D,N,W):e.texImage2D(n.TEXTURE_2D,K,G,D,N,W);_.generateMipmaps=!1}else rt?(xt&&e.texStorage2D(n.TEXTURE_2D,yt,G,st.width,st.height),e.texSubImage2D(n.TEXTURE_2D,0,0,0,D,N,st)):e.texImage2D(n.TEXTURE_2D,0,G,D,N,st);M(_,se)&&y(ot),Rt.__version=lt.version,_.onUpdate&&_.onUpdate(_)}S.__version=_.version}function Ct(S,_,H){if(_.image.length!==6)return;let ot=nt(S,_),at=_.source;e.bindTexture(n.TEXTURE_CUBE_MAP,S.__webglTexture,n.TEXTURE0+H);let lt=i.get(at);if(at.version!==lt.__version||ot===!0){e.activeTexture(n.TEXTURE0+H);let Rt=ae.getPrimaries(ae.workingColorSpace),gt=_.colorSpace===xn?null:ae.getPrimaries(_.colorSpace),vt=_.colorSpace===xn||Rt===gt?n.NONE:n.BROWSER_DEFAULT_WEBGL;n.pixelStorei(n.UNPACK_FLIP_Y_WEBGL,_.flipY),n.pixelStorei(n.UNPACK_PREMULTIPLY_ALPHA_WEBGL,_.premultiplyAlpha),n.pixelStorei(n.UNPACK_ALIGNMENT,_.unpackAlignment),n.pixelStorei(n.UNPACK_COLORSPACE_CONVERSION_WEBGL,vt);let Pt=_.isCompressedTexture||_.image[0].isCompressedTexture,Bt=_.image[0]&&_.image[0].isDataTexture,st=[];for(let K=0;K<6;K++)!Pt&&!Bt?st[K]=x(_.image[K],!1,!0,s.maxCubemapSize):st[K]=Bt?_.image[K].image:_.image[K],st[K]=Gt(_,st[K]);let se=st[0],D=m(se)||a,N=r.convert(_.format,_.colorSpace),G=r.convert(_.type),W=E(_.internalFormat,N,G,_.colorSpace),ut=a&&_.isVideoTexture!==!0,rt=lt.__version===void 0||ot===!0,xt=I(_,se,D);Y(n.TEXTURE_CUBE_MAP,_,D);let yt;if(Pt){ut&&rt&&e.texStorage2D(n.TEXTURE_CUBE_MAP,xt,W,se.width,se.height);for(let K=0;K<6;K++){yt=st[K].mipmaps;for(let C=0;C<yt.length;C++){let it=yt[C];_.format!==wn?N!==null?ut?e.compressedTexSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+K,C,0,0,it.width,it.height,N,it.data):e.compressedTexImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+K,C,W,it.width,it.height,0,it.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):ut?e.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+K,C,0,0,it.width,it.height,N,G,it.data):e.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+K,C,W,it.width,it.height,0,N,G,it.data)}}}else{yt=_.mipmaps,ut&&rt&&(yt.length>0&&xt++,e.texStorage2D(n.TEXTURE_CUBE_MAP,xt,W,st[0].width,st[0].height));for(let K=0;K<6;K++)if(Bt){ut?e.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+K,0,0,0,st[K].width,st[K].height,N,G,st[K].data):e.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+K,0,W,st[K].width,st[K].height,0,N,G,st[K].data);for(let C=0;C<yt.length;C++){let ct=yt[C].image[K].image;ut?e.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+K,C+1,0,0,ct.width,ct.height,N,G,ct.data):e.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+K,C+1,W,ct.width,ct.height,0,N,G,ct.data)}}else{ut?e.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+K,0,0,0,N,G,st[K]):e.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+K,0,W,N,G,st[K]);for(let C=0;C<yt.length;C++){let it=yt[C];ut?e.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+K,C+1,0,0,N,G,it.image[K]):e.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+K,C+1,W,N,G,it.image[K])}}}M(_,D)&&y(n.TEXTURE_CUBE_MAP),lt.__version=at.version,_.onUpdate&&_.onUpdate(_)}S.__version=_.version}function bt(S,_,H,ot,at,lt){let Rt=r.convert(H.format,H.colorSpace),gt=r.convert(H.type),vt=E(H.internalFormat,Rt,gt,H.colorSpace);if(!i.get(_).__hasExternalTextures){let Bt=Math.max(1,_.width>>lt),st=Math.max(1,_.height>>lt);at===n.TEXTURE_3D||at===n.TEXTURE_2D_ARRAY?e.texImage3D(at,lt,vt,Bt,st,_.depth,0,Rt,gt,null):e.texImage2D(at,lt,vt,Bt,st,0,Rt,gt,null)}e.bindFramebuffer(n.FRAMEBUFFER,S),St(_)?c.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,ot,at,i.get(H).__webglTexture,0,Ot(_)):(at===n.TEXTURE_2D||at>=n.TEXTURE_CUBE_MAP_POSITIVE_X&&at<=n.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&n.framebufferTexture2D(n.FRAMEBUFFER,ot,at,i.get(H).__webglTexture,lt),e.bindFramebuffer(n.FRAMEBUFFER,null)}function zt(S,_,H){if(n.bindRenderbuffer(n.RENDERBUFFER,S),_.depthBuffer&&!_.stencilBuffer){let ot=a===!0?n.DEPTH_COMPONENT24:n.DEPTH_COMPONENT16;if(H||St(_)){let at=_.depthTexture;at&&at.isDepthTexture&&(at.type===ri?ot=n.DEPTH_COMPONENT32F:at.type===si&&(ot=n.DEPTH_COMPONENT24));let lt=Ot(_);St(_)?c.renderbufferStorageMultisampleEXT(n.RENDERBUFFER,lt,ot,_.width,_.height):n.renderbufferStorageMultisample(n.RENDERBUFFER,lt,ot,_.width,_.height)}else n.renderbufferStorage(n.RENDERBUFFER,ot,_.width,_.height);n.framebufferRenderbuffer(n.FRAMEBUFFER,n.DEPTH_ATTACHMENT,n.RENDERBUFFER,S)}else if(_.depthBuffer&&_.stencilBuffer){let ot=Ot(_);H&&St(_)===!1?n.renderbufferStorageMultisample(n.RENDERBUFFER,ot,n.DEPTH24_STENCIL8,_.width,_.height):St(_)?c.renderbufferStorageMultisampleEXT(n.RENDERBUFFER,ot,n.DEPTH24_STENCIL8,_.width,_.height):n.renderbufferStorage(n.RENDERBUFFER,n.DEPTH_STENCIL,_.width,_.height),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.DEPTH_STENCIL_ATTACHMENT,n.RENDERBUFFER,S)}else{let ot=_.isWebGLMultipleRenderTargets===!0?_.texture:[_.texture];for(let at=0;at<ot.length;at++){let lt=ot[at],Rt=r.convert(lt.format,lt.colorSpace),gt=r.convert(lt.type),vt=E(lt.internalFormat,Rt,gt,lt.colorSpace),Pt=Ot(_);H&&St(_)===!1?n.renderbufferStorageMultisample(n.RENDERBUFFER,Pt,vt,_.width,_.height):St(_)?c.renderbufferStorageMultisampleEXT(n.RENDERBUFFER,Pt,vt,_.width,_.height):n.renderbufferStorage(n.RENDERBUFFER,vt,_.width,_.height)}}n.bindRenderbuffer(n.RENDERBUFFER,null)}function Ht(S,_){if(_&&_.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(e.bindFramebuffer(n.FRAMEBUFFER,S),!(_.depthTexture&&_.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");(!i.get(_.depthTexture).__webglTexture||_.depthTexture.image.width!==_.width||_.depthTexture.image.height!==_.height)&&(_.depthTexture.image.width=_.width,_.depthTexture.image.height=_.height,_.depthTexture.needsUpdate=!0),Q(_.depthTexture,0);let ot=i.get(_.depthTexture).__webglTexture,at=Ot(_);if(_.depthTexture.format===Ci)St(_)?c.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,n.DEPTH_ATTACHMENT,n.TEXTURE_2D,ot,0,at):n.framebufferTexture2D(n.FRAMEBUFFER,n.DEPTH_ATTACHMENT,n.TEXTURE_2D,ot,0);else if(_.depthTexture.format===gs)St(_)?c.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,n.DEPTH_STENCIL_ATTACHMENT,n.TEXTURE_2D,ot,0,at):n.framebufferTexture2D(n.FRAMEBUFFER,n.DEPTH_STENCIL_ATTACHMENT,n.TEXTURE_2D,ot,0);else throw new Error("Unknown depthTexture format")}function Dt(S){let _=i.get(S),H=S.isWebGLCubeRenderTarget===!0;if(S.depthTexture&&!_.__autoAllocateDepthBuffer){if(H)throw new Error("target.depthTexture not supported in Cube render targets");Ht(_.__webglFramebuffer,S)}else if(H){_.__webglDepthbuffer=[];for(let ot=0;ot<6;ot++)e.bindFramebuffer(n.FRAMEBUFFER,_.__webglFramebuffer[ot]),_.__webglDepthbuffer[ot]=n.createRenderbuffer(),zt(_.__webglDepthbuffer[ot],S,!1)}else e.bindFramebuffer(n.FRAMEBUFFER,_.__webglFramebuffer),_.__webglDepthbuffer=n.createRenderbuffer(),zt(_.__webglDepthbuffer,S,!1);e.bindFramebuffer(n.FRAMEBUFFER,null)}function ne(S,_,H){let ot=i.get(S);_!==void 0&&bt(ot.__webglFramebuffer,S,S.texture,n.COLOR_ATTACHMENT0,n.TEXTURE_2D,0),H!==void 0&&Dt(S)}function B(S){let _=S.texture,H=i.get(S),ot=i.get(_);S.addEventListener("dispose",k),S.isWebGLMultipleRenderTargets!==!0&&(ot.__webglTexture===void 0&&(ot.__webglTexture=n.createTexture()),ot.__version=_.version,o.memory.textures++);let at=S.isWebGLCubeRenderTarget===!0,lt=S.isWebGLMultipleRenderTargets===!0,Rt=m(S)||a;if(at){H.__webglFramebuffer=[];for(let gt=0;gt<6;gt++)if(a&&_.mipmaps&&_.mipmaps.length>0){H.__webglFramebuffer[gt]=[];for(let vt=0;vt<_.mipmaps.length;vt++)H.__webglFramebuffer[gt][vt]=n.createFramebuffer()}else H.__webglFramebuffer[gt]=n.createFramebuffer()}else{if(a&&_.mipmaps&&_.mipmaps.length>0){H.__webglFramebuffer=[];for(let gt=0;gt<_.mipmaps.length;gt++)H.__webglFramebuffer[gt]=n.createFramebuffer()}else H.__webglFramebuffer=n.createFramebuffer();if(lt)if(s.drawBuffers){let gt=S.texture;for(let vt=0,Pt=gt.length;vt<Pt;vt++){let Bt=i.get(gt[vt]);Bt.__webglTexture===void 0&&(Bt.__webglTexture=n.createTexture(),o.memory.textures++)}}else console.warn("THREE.WebGLRenderer: WebGLMultipleRenderTargets can only be used with WebGL2 or WEBGL_draw_buffers extension.");if(a&&S.samples>0&&St(S)===!1){let gt=lt?_:[_];H.__webglMultisampledFramebuffer=n.createFramebuffer(),H.__webglColorRenderbuffer=[],e.bindFramebuffer(n.FRAMEBUFFER,H.__webglMultisampledFramebuffer);for(let vt=0;vt<gt.length;vt++){let Pt=gt[vt];H.__webglColorRenderbuffer[vt]=n.createRenderbuffer(),n.bindRenderbuffer(n.RENDERBUFFER,H.__webglColorRenderbuffer[vt]);let Bt=r.convert(Pt.format,Pt.colorSpace),st=r.convert(Pt.type),se=E(Pt.internalFormat,Bt,st,Pt.colorSpace,S.isXRRenderTarget===!0),D=Ot(S);n.renderbufferStorageMultisample(n.RENDERBUFFER,D,se,S.width,S.height),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+vt,n.RENDERBUFFER,H.__webglColorRenderbuffer[vt])}n.bindRenderbuffer(n.RENDERBUFFER,null),S.depthBuffer&&(H.__webglDepthRenderbuffer=n.createRenderbuffer(),zt(H.__webglDepthRenderbuffer,S,!0)),e.bindFramebuffer(n.FRAMEBUFFER,null)}}if(at){e.bindTexture(n.TEXTURE_CUBE_MAP,ot.__webglTexture),Y(n.TEXTURE_CUBE_MAP,_,Rt);for(let gt=0;gt<6;gt++)if(a&&_.mipmaps&&_.mipmaps.length>0)for(let vt=0;vt<_.mipmaps.length;vt++)bt(H.__webglFramebuffer[gt][vt],S,_,n.COLOR_ATTACHMENT0,n.TEXTURE_CUBE_MAP_POSITIVE_X+gt,vt);else bt(H.__webglFramebuffer[gt],S,_,n.COLOR_ATTACHMENT0,n.TEXTURE_CUBE_MAP_POSITIVE_X+gt,0);M(_,Rt)&&y(n.TEXTURE_CUBE_MAP),e.unbindTexture()}else if(lt){let gt=S.texture;for(let vt=0,Pt=gt.length;vt<Pt;vt++){let Bt=gt[vt],st=i.get(Bt);e.bindTexture(n.TEXTURE_2D,st.__webglTexture),Y(n.TEXTURE_2D,Bt,Rt),bt(H.__webglFramebuffer,S,Bt,n.COLOR_ATTACHMENT0+vt,n.TEXTURE_2D,0),M(Bt,Rt)&&y(n.TEXTURE_2D)}e.unbindTexture()}else{let gt=n.TEXTURE_2D;if((S.isWebGL3DRenderTarget||S.isWebGLArrayRenderTarget)&&(a?gt=S.isWebGL3DRenderTarget?n.TEXTURE_3D:n.TEXTURE_2D_ARRAY:console.error("THREE.WebGLTextures: THREE.Data3DTexture and THREE.DataArrayTexture only supported with WebGL2.")),e.bindTexture(gt,ot.__webglTexture),Y(gt,_,Rt),a&&_.mipmaps&&_.mipmaps.length>0)for(let vt=0;vt<_.mipmaps.length;vt++)bt(H.__webglFramebuffer[vt],S,_,n.COLOR_ATTACHMENT0,gt,vt);else bt(H.__webglFramebuffer,S,_,n.COLOR_ATTACHMENT0,gt,0);M(_,Rt)&&y(gt),e.unbindTexture()}S.depthBuffer&&Dt(S)}function Ge(S){let _=m(S)||a,H=S.isWebGLMultipleRenderTargets===!0?S.texture:[S.texture];for(let ot=0,at=H.length;ot<at;ot++){let lt=H[ot];if(M(lt,_)){let Rt=S.isWebGLCubeRenderTarget?n.TEXTURE_CUBE_MAP:n.TEXTURE_2D,gt=i.get(lt).__webglTexture;e.bindTexture(Rt,gt),y(Rt),e.unbindTexture()}}}function Lt(S){if(a&&S.samples>0&&St(S)===!1){let _=S.isWebGLMultipleRenderTargets?S.texture:[S.texture],H=S.width,ot=S.height,at=n.COLOR_BUFFER_BIT,lt=[],Rt=S.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,gt=i.get(S),vt=S.isWebGLMultipleRenderTargets===!0;if(vt)for(let Pt=0;Pt<_.length;Pt++)e.bindFramebuffer(n.FRAMEBUFFER,gt.__webglMultisampledFramebuffer),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+Pt,n.RENDERBUFFER,null),e.bindFramebuffer(n.FRAMEBUFFER,gt.__webglFramebuffer),n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0+Pt,n.TEXTURE_2D,null,0);e.bindFramebuffer(n.READ_FRAMEBUFFER,gt.__webglMultisampledFramebuffer),e.bindFramebuffer(n.DRAW_FRAMEBUFFER,gt.__webglFramebuffer);for(let Pt=0;Pt<_.length;Pt++){lt.push(n.COLOR_ATTACHMENT0+Pt),S.depthBuffer&&lt.push(Rt);let Bt=gt.__ignoreDepthValues!==void 0?gt.__ignoreDepthValues:!1;if(Bt===!1&&(S.depthBuffer&&(at|=n.DEPTH_BUFFER_BIT),S.stencilBuffer&&(at|=n.STENCIL_BUFFER_BIT)),vt&&n.framebufferRenderbuffer(n.READ_FRAMEBUFFER,n.COLOR_ATTACHMENT0,n.RENDERBUFFER,gt.__webglColorRenderbuffer[Pt]),Bt===!0&&(n.invalidateFramebuffer(n.READ_FRAMEBUFFER,[Rt]),n.invalidateFramebuffer(n.DRAW_FRAMEBUFFER,[Rt])),vt){let st=i.get(_[Pt]).__webglTexture;n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0,n.TEXTURE_2D,st,0)}n.blitFramebuffer(0,0,H,ot,0,0,H,ot,at,n.NEAREST),h&&n.invalidateFramebuffer(n.READ_FRAMEBUFFER,lt)}if(e.bindFramebuffer(n.READ_FRAMEBUFFER,null),e.bindFramebuffer(n.DRAW_FRAMEBUFFER,null),vt)for(let Pt=0;Pt<_.length;Pt++){e.bindFramebuffer(n.FRAMEBUFFER,gt.__webglMultisampledFramebuffer),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+Pt,n.RENDERBUFFER,gt.__webglColorRenderbuffer[Pt]);let Bt=i.get(_[Pt]).__webglTexture;e.bindFramebuffer(n.FRAMEBUFFER,gt.__webglFramebuffer),n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0+Pt,n.TEXTURE_2D,Bt,0)}e.bindFramebuffer(n.DRAW_FRAMEBUFFER,gt.__webglMultisampledFramebuffer)}}function Ot(S){return Math.min(s.maxSamples,S.samples)}function St(S){let _=i.get(S);return a&&S.samples>0&&t.has("WEBGL_multisampled_render_to_texture")===!0&&_.__useRenderToTexture!==!1}function pe(S){let _=o.render.frame;l.get(S)!==_&&(l.set(S,_),S.update())}function Gt(S,_){let H=S.colorSpace,ot=S.format,at=S.type;return S.isCompressedTexture===!0||S.isVideoTexture===!0||S.format===Bo||H!==Wn&&H!==xn&&(ae.getTransfer(H)===me?a===!1?t.has("EXT_sRGB")===!0&&ot===wn?(S.format=Bo,S.minFilter=gn,S.generateMipmaps=!1):_=$r.sRGBToLinear(_):(ot!==wn||at!==ci)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",H)),_}this.allocateTextureUnit=L,this.resetTextureUnits=tt,this.setTexture2D=Q,this.setTexture2DArray=$,this.setTexture3D=J,this.setTextureCube=j,this.rebindTextures=ne,this.setupRenderTarget=B,this.updateRenderTargetMipmap=Ge,this.updateMultisampleRenderTarget=Lt,this.setupDepthRenderbuffer=Dt,this.setupFrameBufferTexture=bt,this.useMultisampledRTT=St}function Lg(n,t,e){let i=e.isWebGL2;function s(r,o=xn){let a,c=ae.getTransfer(o);if(r===ci)return n.UNSIGNED_BYTE;if(r===zh)return n.UNSIGNED_SHORT_4_4_4_4;if(r===Dh)return n.UNSIGNED_SHORT_5_5_5_1;if(r===Sd)return n.BYTE;if(r===Ed)return n.SHORT;if(r===xc)return n.UNSIGNED_SHORT;if(r===Lh)return n.INT;if(r===si)return n.UNSIGNED_INT;if(r===ri)return n.FLOAT;if(r===qs)return i?n.HALF_FLOAT:(a=t.get("OES_texture_half_float"),a!==null?a.HALF_FLOAT_OES:null);if(r===Td)return n.ALPHA;if(r===wn)return n.RGBA;if(r===Ad)return n.LUMINANCE;if(r===Rd)return n.LUMINANCE_ALPHA;if(r===Ci)return n.DEPTH_COMPONENT;if(r===gs)return n.DEPTH_STENCIL;if(r===Bo)return a=t.get("EXT_sRGB"),a!==null?a.SRGB_ALPHA_EXT:null;if(r===Cd)return n.RED;if(r===Uh)return n.RED_INTEGER;if(r===Pd)return n.RG;if(r===Nh)return n.RG_INTEGER;if(r===Oh)return n.RGBA_INTEGER;if(r===to||r===eo||r===no||r===io)if(c===me)if(a=t.get("WEBGL_compressed_texture_s3tc_srgb"),a!==null){if(r===to)return a.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(r===eo)return a.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(r===no)return a.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(r===io)return a.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(a=t.get("WEBGL_compressed_texture_s3tc"),a!==null){if(r===to)return a.COMPRESSED_RGB_S3TC_DXT1_EXT;if(r===eo)return a.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(r===no)return a.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(r===io)return a.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(r===cl||r===ll||r===hl||r===ul)if(a=t.get("WEBGL_compressed_texture_pvrtc"),a!==null){if(r===cl)return a.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(r===ll)return a.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(r===hl)return a.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(r===ul)return a.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(r===Fh)return a=t.get("WEBGL_compressed_texture_etc1"),a!==null?a.COMPRESSED_RGB_ETC1_WEBGL:null;if(r===dl||r===fl)if(a=t.get("WEBGL_compressed_texture_etc"),a!==null){if(r===dl)return c===me?a.COMPRESSED_SRGB8_ETC2:a.COMPRESSED_RGB8_ETC2;if(r===fl)return c===me?a.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:a.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(r===pl||r===ml||r===gl||r===xl||r===yl||r===_l||r===vl||r===Ml||r===bl||r===wl||r===Sl||r===El||r===Tl||r===Al)if(a=t.get("WEBGL_compressed_texture_astc"),a!==null){if(r===pl)return c===me?a.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:a.COMPRESSED_RGBA_ASTC_4x4_KHR;if(r===ml)return c===me?a.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:a.COMPRESSED_RGBA_ASTC_5x4_KHR;if(r===gl)return c===me?a.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:a.COMPRESSED_RGBA_ASTC_5x5_KHR;if(r===xl)return c===me?a.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:a.COMPRESSED_RGBA_ASTC_6x5_KHR;if(r===yl)return c===me?a.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:a.COMPRESSED_RGBA_ASTC_6x6_KHR;if(r===_l)return c===me?a.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:a.COMPRESSED_RGBA_ASTC_8x5_KHR;if(r===vl)return c===me?a.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:a.COMPRESSED_RGBA_ASTC_8x6_KHR;if(r===Ml)return c===me?a.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:a.COMPRESSED_RGBA_ASTC_8x8_KHR;if(r===bl)return c===me?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:a.COMPRESSED_RGBA_ASTC_10x5_KHR;if(r===wl)return c===me?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:a.COMPRESSED_RGBA_ASTC_10x6_KHR;if(r===Sl)return c===me?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:a.COMPRESSED_RGBA_ASTC_10x8_KHR;if(r===El)return c===me?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:a.COMPRESSED_RGBA_ASTC_10x10_KHR;if(r===Tl)return c===me?a.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:a.COMPRESSED_RGBA_ASTC_12x10_KHR;if(r===Al)return c===me?a.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:a.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(r===so||r===Rl||r===Cl)if(a=t.get("EXT_texture_compression_bptc"),a!==null){if(r===so)return c===me?a.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:a.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(r===Rl)return a.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(r===Cl)return a.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(r===Id||r===Pl||r===Il||r===Ll)if(a=t.get("EXT_texture_compression_rgtc"),a!==null){if(r===so)return a.COMPRESSED_RED_RGTC1_EXT;if(r===Pl)return a.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(r===Il)return a.COMPRESSED_RED_GREEN_RGTC2_EXT;if(r===Ll)return a.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return r===Ri?i?n.UNSIGNED_INT_24_8:(a=t.get("WEBGL_depth_texture"),a!==null?a.UNSIGNED_INT_24_8_WEBGL:null):n[r]!==void 0?n[r]:null}return{convert:s}}var tc=class extends $e{constructor(t=[]){super(),this.isArrayCamera=!0,this.cameras=t}},Qt=class extends ke{constructor(){super(),this.isGroup=!0,this.type="Group"}},zg={type:"move"},Ws=class{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new Qt,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new Qt,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new z,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new z),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new Qt,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new z,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new z),this._grip}dispatchEvent(t){return this._targetRay!==null&&this._targetRay.dispatchEvent(t),this._grip!==null&&this._grip.dispatchEvent(t),this._hand!==null&&this._hand.dispatchEvent(t),this}connect(t){if(t&&t.hand){let e=this._hand;if(e)for(let i of t.hand.values())this._getHandJoint(e,i)}return this.dispatchEvent({type:"connected",data:t}),this}disconnect(t){return this.dispatchEvent({type:"disconnected",data:t}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(t,e,i){let s=null,r=null,o=null,a=this._targetRay,c=this._grip,h=this._hand;if(t&&e.session.visibilityState!=="visible-blurred"){if(h&&t.hand){o=!0;for(let x of t.hand.values()){let m=e.getJointPose(x,i),d=this._getHandJoint(h,x);m!==null&&(d.matrix.fromArray(m.transform.matrix),d.matrix.decompose(d.position,d.rotation,d.scale),d.matrixWorldNeedsUpdate=!0,d.jointRadius=m.radius),d.visible=m!==null}let l=h.joints["index-finger-tip"],u=h.joints["thumb-tip"],f=l.position.distanceTo(u.position),p=.02,g=.005;h.inputState.pinching&&f>p+g?(h.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:t.handedness,target:this})):!h.inputState.pinching&&f<=p-g&&(h.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:t.handedness,target:this}))}else c!==null&&t.gripSpace&&(r=e.getPose(t.gripSpace,i),r!==null&&(c.matrix.fromArray(r.transform.matrix),c.matrix.decompose(c.position,c.rotation,c.scale),c.matrixWorldNeedsUpdate=!0,r.linearVelocity?(c.hasLinearVelocity=!0,c.linearVelocity.copy(r.linearVelocity)):c.hasLinearVelocity=!1,r.angularVelocity?(c.hasAngularVelocity=!0,c.angularVelocity.copy(r.angularVelocity)):c.hasAngularVelocity=!1));a!==null&&(s=e.getPose(t.targetRaySpace,i),s===null&&r!==null&&(s=r),s!==null&&(a.matrix.fromArray(s.transform.matrix),a.matrix.decompose(a.position,a.rotation,a.scale),a.matrixWorldNeedsUpdate=!0,s.linearVelocity?(a.hasLinearVelocity=!0,a.linearVelocity.copy(s.linearVelocity)):a.hasLinearVelocity=!1,s.angularVelocity?(a.hasAngularVelocity=!0,a.angularVelocity.copy(s.angularVelocity)):a.hasAngularVelocity=!1,this.dispatchEvent(zg)))}return a!==null&&(a.visible=s!==null),c!==null&&(c.visible=r!==null),h!==null&&(h.visible=o!==null),this}_getHandJoint(t,e){if(t.joints[e.jointName]===void 0){let i=new Qt;i.matrixAutoUpdate=!1,i.visible=!1,t.joints[e.jointName]=i,t.add(i)}return t.joints[e.jointName]}},ec=class extends hi{constructor(t,e){super();let i=this,s=null,r=1,o=null,a="local-floor",c=1,h=null,l=null,u=null,f=null,p=null,g=null,x=e.getContextAttributes(),m=null,d=null,M=[],y=[],E=new Jt,I=null,A=new $e;A.layers.enable(1),A.viewport=new ye;let R=new $e;R.layers.enable(2),R.viewport=new ye;let k=[A,R],v=new tc;v.layers.enable(1),v.layers.enable(2);let w=null,O=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(Y){let nt=M[Y];return nt===void 0&&(nt=new Ws,M[Y]=nt),nt.getTargetRaySpace()},this.getControllerGrip=function(Y){let nt=M[Y];return nt===void 0&&(nt=new Ws,M[Y]=nt),nt.getGripSpace()},this.getHand=function(Y){let nt=M[Y];return nt===void 0&&(nt=new Ws,M[Y]=nt),nt.getHandSpace()};function Z(Y){let nt=y.indexOf(Y.inputSource);if(nt===-1)return;let mt=M[nt];mt!==void 0&&(mt.update(Y.inputSource,Y.frame,h||o),mt.dispatchEvent({type:Y.type,data:Y.inputSource}))}function tt(){s.removeEventListener("select",Z),s.removeEventListener("selectstart",Z),s.removeEventListener("selectend",Z),s.removeEventListener("squeeze",Z),s.removeEventListener("squeezestart",Z),s.removeEventListener("squeezeend",Z),s.removeEventListener("end",tt),s.removeEventListener("inputsourceschange",L);for(let Y=0;Y<M.length;Y++){let nt=y[Y];nt!==null&&(y[Y]=null,M[Y].disconnect(nt))}w=null,O=null,t.setRenderTarget(m),p=null,f=null,u=null,s=null,d=null,pt.stop(),i.isPresenting=!1,t.setPixelRatio(I),t.setSize(E.width,E.height,!1),i.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(Y){r=Y,i.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(Y){a=Y,i.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return h||o},this.setReferenceSpace=function(Y){h=Y},this.getBaseLayer=function(){return f!==null?f:p},this.getBinding=function(){return u},this.getFrame=function(){return g},this.getSession=function(){return s},this.setSession=async function(Y){if(s=Y,s!==null){if(m=t.getRenderTarget(),s.addEventListener("select",Z),s.addEventListener("selectstart",Z),s.addEventListener("selectend",Z),s.addEventListener("squeeze",Z),s.addEventListener("squeezestart",Z),s.addEventListener("squeezeend",Z),s.addEventListener("end",tt),s.addEventListener("inputsourceschange",L),x.xrCompatible!==!0&&await e.makeXRCompatible(),I=t.getPixelRatio(),t.getSize(E),s.renderState.layers===void 0||t.capabilities.isWebGL2===!1){let nt={antialias:s.renderState.layers===void 0?x.antialias:!0,alpha:!0,depth:x.depth,stencil:x.stencil,framebufferScaleFactor:r};p=new XRWebGLLayer(s,e,nt),s.updateRenderState({baseLayer:p}),t.setPixelRatio(1),t.setSize(p.framebufferWidth,p.framebufferHeight,!1),d=new Xn(p.framebufferWidth,p.framebufferHeight,{format:wn,type:ci,colorSpace:t.outputColorSpace,stencilBuffer:x.stencil})}else{let nt=null,mt=null,Ct=null;x.depth&&(Ct=x.stencil?e.DEPTH24_STENCIL8:e.DEPTH_COMPONENT24,nt=x.stencil?gs:Ci,mt=x.stencil?Ri:si);let bt={colorFormat:e.RGBA8,depthFormat:Ct,scaleFactor:r};u=new XRWebGLBinding(s,e),f=u.createProjectionLayer(bt),s.updateRenderState({layers:[f]}),t.setPixelRatio(1),t.setSize(f.textureWidth,f.textureHeight,!1),d=new Xn(f.textureWidth,f.textureHeight,{format:wn,type:ci,depthTexture:new oa(f.textureWidth,f.textureHeight,mt,void 0,void 0,void 0,void 0,void 0,void 0,nt),stencilBuffer:x.stencil,colorSpace:t.outputColorSpace,samples:x.antialias?4:0});let zt=t.properties.get(d);zt.__ignoreDepthValues=f.ignoreDepthValues}d.isXRRenderTarget=!0,this.setFoveation(c),h=null,o=await s.requestReferenceSpace(a),pt.setContext(s),pt.start(),i.isPresenting=!0,i.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(s!==null)return s.environmentBlendMode};function L(Y){for(let nt=0;nt<Y.removed.length;nt++){let mt=Y.removed[nt],Ct=y.indexOf(mt);Ct>=0&&(y[Ct]=null,M[Ct].disconnect(mt))}for(let nt=0;nt<Y.added.length;nt++){let mt=Y.added[nt],Ct=y.indexOf(mt);if(Ct===-1){for(let zt=0;zt<M.length;zt++)if(zt>=y.length){y.push(mt),Ct=zt;break}else if(y[zt]===null){y[zt]=mt,Ct=zt;break}if(Ct===-1)break}let bt=M[Ct];bt&&bt.connect(mt)}}let F=new z,Q=new z;function $(Y,nt,mt){F.setFromMatrixPosition(nt.matrixWorld),Q.setFromMatrixPosition(mt.matrixWorld);let Ct=F.distanceTo(Q),bt=nt.projectionMatrix.elements,zt=mt.projectionMatrix.elements,Ht=bt[14]/(bt[10]-1),Dt=bt[14]/(bt[10]+1),ne=(bt[9]+1)/bt[5],B=(bt[9]-1)/bt[5],Ge=(bt[8]-1)/bt[0],Lt=(zt[8]+1)/zt[0],Ot=Ht*Ge,St=Ht*Lt,pe=Ct/(-Ge+Lt),Gt=pe*-Ge;nt.matrixWorld.decompose(Y.position,Y.quaternion,Y.scale),Y.translateX(Gt),Y.translateZ(pe),Y.matrixWorld.compose(Y.position,Y.quaternion,Y.scale),Y.matrixWorldInverse.copy(Y.matrixWorld).invert();let S=Ht+pe,_=Dt+pe,H=Ot-Gt,ot=St+(Ct-Gt),at=ne*Dt/_*S,lt=B*Dt/_*S;Y.projectionMatrix.makePerspective(H,ot,at,lt,S,_),Y.projectionMatrixInverse.copy(Y.projectionMatrix).invert()}function J(Y,nt){nt===null?Y.matrixWorld.copy(Y.matrix):Y.matrixWorld.multiplyMatrices(nt.matrixWorld,Y.matrix),Y.matrixWorldInverse.copy(Y.matrixWorld).invert()}this.updateCamera=function(Y){if(s===null)return;v.near=R.near=A.near=Y.near,v.far=R.far=A.far=Y.far,(w!==v.near||O!==v.far)&&(s.updateRenderState({depthNear:v.near,depthFar:v.far}),w=v.near,O=v.far);let nt=Y.parent,mt=v.cameras;J(v,nt);for(let Ct=0;Ct<mt.length;Ct++)J(mt[Ct],nt);mt.length===2?$(v,A,R):v.projectionMatrix.copy(A.projectionMatrix),j(Y,v,nt)};function j(Y,nt,mt){mt===null?Y.matrix.copy(nt.matrixWorld):(Y.matrix.copy(mt.matrixWorld),Y.matrix.invert(),Y.matrix.multiply(nt.matrixWorld)),Y.matrix.decompose(Y.position,Y.quaternion,Y.scale),Y.updateMatrixWorld(!0),Y.projectionMatrix.copy(nt.projectionMatrix),Y.projectionMatrixInverse.copy(nt.projectionMatrixInverse),Y.isPerspectiveCamera&&(Y.fov=ko*2*Math.atan(1/Y.projectionMatrix.elements[5]),Y.zoom=1)}this.getCamera=function(){return v},this.getFoveation=function(){if(!(f===null&&p===null))return c},this.setFoveation=function(Y){c=Y,f!==null&&(f.fixedFoveation=Y),p!==null&&p.fixedFoveation!==void 0&&(p.fixedFoveation=Y)};let et=null;function ht(Y,nt){if(l=nt.getViewerPose(h||o),g=nt,l!==null){let mt=l.views;p!==null&&(t.setRenderTargetFramebuffer(d,p.framebuffer),t.setRenderTarget(d));let Ct=!1;mt.length!==v.cameras.length&&(v.cameras.length=0,Ct=!0);for(let bt=0;bt<mt.length;bt++){let zt=mt[bt],Ht=null;if(p!==null)Ht=p.getViewport(zt);else{let ne=u.getViewSubImage(f,zt);Ht=ne.viewport,bt===0&&(t.setRenderTargetTextures(d,ne.colorTexture,f.ignoreDepthValues?void 0:ne.depthStencilTexture),t.setRenderTarget(d))}let Dt=k[bt];Dt===void 0&&(Dt=new $e,Dt.layers.enable(bt),Dt.viewport=new ye,k[bt]=Dt),Dt.matrix.fromArray(zt.transform.matrix),Dt.matrix.decompose(Dt.position,Dt.quaternion,Dt.scale),Dt.projectionMatrix.fromArray(zt.projectionMatrix),Dt.projectionMatrixInverse.copy(Dt.projectionMatrix).invert(),Dt.viewport.set(Ht.x,Ht.y,Ht.width,Ht.height),bt===0&&(v.matrix.copy(Dt.matrix),v.matrix.decompose(v.position,v.quaternion,v.scale)),Ct===!0&&v.cameras.push(Dt)}}for(let mt=0;mt<M.length;mt++){let Ct=y[mt],bt=M[mt];Ct!==null&&bt!==void 0&&bt.update(Ct,nt,h||o)}et&&et(Y,nt),nt.detectedPlanes&&i.dispatchEvent({type:"planesdetected",data:nt}),g=null}let pt=new Wh;pt.setAnimationLoop(ht),this.setAnimationLoop=function(Y){et=Y},this.dispose=function(){}}};function Dg(n,t){function e(m,d){m.matrixAutoUpdate===!0&&m.updateMatrix(),d.value.copy(m.matrix)}function i(m,d){d.color.getRGB(m.fogColor.value,Vh(n)),d.isFog?(m.fogNear.value=d.near,m.fogFar.value=d.far):d.isFogExp2&&(m.fogDensity.value=d.density)}function s(m,d,M,y,E){d.isMeshBasicMaterial||d.isMeshLambertMaterial?r(m,d):d.isMeshToonMaterial?(r(m,d),u(m,d)):d.isMeshPhongMaterial?(r(m,d),l(m,d)):d.isMeshStandardMaterial?(r(m,d),f(m,d),d.isMeshPhysicalMaterial&&p(m,d,E)):d.isMeshMatcapMaterial?(r(m,d),g(m,d)):d.isMeshDepthMaterial?r(m,d):d.isMeshDistanceMaterial?(r(m,d),x(m,d)):d.isMeshNormalMaterial?r(m,d):d.isLineBasicMaterial?(o(m,d),d.isLineDashedMaterial&&a(m,d)):d.isPointsMaterial?c(m,d,M,y):d.isSpriteMaterial?h(m,d):d.isShadowMaterial?(m.color.value.copy(d.color),m.opacity.value=d.opacity):d.isShaderMaterial&&(d.uniformsNeedUpdate=!1)}function r(m,d){m.opacity.value=d.opacity,d.color&&m.diffuse.value.copy(d.color),d.emissive&&m.emissive.value.copy(d.emissive).multiplyScalar(d.emissiveIntensity),d.map&&(m.map.value=d.map,e(d.map,m.mapTransform)),d.alphaMap&&(m.alphaMap.value=d.alphaMap,e(d.alphaMap,m.alphaMapTransform)),d.bumpMap&&(m.bumpMap.value=d.bumpMap,e(d.bumpMap,m.bumpMapTransform),m.bumpScale.value=d.bumpScale,d.side===on&&(m.bumpScale.value*=-1)),d.normalMap&&(m.normalMap.value=d.normalMap,e(d.normalMap,m.normalMapTransform),m.normalScale.value.copy(d.normalScale),d.side===on&&m.normalScale.value.negate()),d.displacementMap&&(m.displacementMap.value=d.displacementMap,e(d.displacementMap,m.displacementMapTransform),m.displacementScale.value=d.displacementScale,m.displacementBias.value=d.displacementBias),d.emissiveMap&&(m.emissiveMap.value=d.emissiveMap,e(d.emissiveMap,m.emissiveMapTransform)),d.specularMap&&(m.specularMap.value=d.specularMap,e(d.specularMap,m.specularMapTransform)),d.alphaTest>0&&(m.alphaTest.value=d.alphaTest);let M=t.get(d).envMap;if(M&&(m.envMap.value=M,m.flipEnvMap.value=M.isCubeTexture&&M.isRenderTargetTexture===!1?-1:1,m.reflectivity.value=d.reflectivity,m.ior.value=d.ior,m.refractionRatio.value=d.refractionRatio),d.lightMap){m.lightMap.value=d.lightMap;let y=n._useLegacyLights===!0?Math.PI:1;m.lightMapIntensity.value=d.lightMapIntensity*y,e(d.lightMap,m.lightMapTransform)}d.aoMap&&(m.aoMap.value=d.aoMap,m.aoMapIntensity.value=d.aoMapIntensity,e(d.aoMap,m.aoMapTransform))}function o(m,d){m.diffuse.value.copy(d.color),m.opacity.value=d.opacity,d.map&&(m.map.value=d.map,e(d.map,m.mapTransform))}function a(m,d){m.dashSize.value=d.dashSize,m.totalSize.value=d.dashSize+d.gapSize,m.scale.value=d.scale}function c(m,d,M,y){m.diffuse.value.copy(d.color),m.opacity.value=d.opacity,m.size.value=d.size*M,m.scale.value=y*.5,d.map&&(m.map.value=d.map,e(d.map,m.uvTransform)),d.alphaMap&&(m.alphaMap.value=d.alphaMap,e(d.alphaMap,m.alphaMapTransform)),d.alphaTest>0&&(m.alphaTest.value=d.alphaTest)}function h(m,d){m.diffuse.value.copy(d.color),m.opacity.value=d.opacity,m.rotation.value=d.rotation,d.map&&(m.map.value=d.map,e(d.map,m.mapTransform)),d.alphaMap&&(m.alphaMap.value=d.alphaMap,e(d.alphaMap,m.alphaMapTransform)),d.alphaTest>0&&(m.alphaTest.value=d.alphaTest)}function l(m,d){m.specular.value.copy(d.specular),m.shininess.value=Math.max(d.shininess,1e-4)}function u(m,d){d.gradientMap&&(m.gradientMap.value=d.gradientMap)}function f(m,d){m.metalness.value=d.metalness,d.metalnessMap&&(m.metalnessMap.value=d.metalnessMap,e(d.metalnessMap,m.metalnessMapTransform)),m.roughness.value=d.roughness,d.roughnessMap&&(m.roughnessMap.value=d.roughnessMap,e(d.roughnessMap,m.roughnessMapTransform)),t.get(d).envMap&&(m.envMapIntensity.value=d.envMapIntensity)}function p(m,d,M){m.ior.value=d.ior,d.sheen>0&&(m.sheenColor.value.copy(d.sheenColor).multiplyScalar(d.sheen),m.sheenRoughness.value=d.sheenRoughness,d.sheenColorMap&&(m.sheenColorMap.value=d.sheenColorMap,e(d.sheenColorMap,m.sheenColorMapTransform)),d.sheenRoughnessMap&&(m.sheenRoughnessMap.value=d.sheenRoughnessMap,e(d.sheenRoughnessMap,m.sheenRoughnessMapTransform))),d.clearcoat>0&&(m.clearcoat.value=d.clearcoat,m.clearcoatRoughness.value=d.clearcoatRoughness,d.clearcoatMap&&(m.clearcoatMap.value=d.clearcoatMap,e(d.clearcoatMap,m.clearcoatMapTransform)),d.clearcoatRoughnessMap&&(m.clearcoatRoughnessMap.value=d.clearcoatRoughnessMap,e(d.clearcoatRoughnessMap,m.clearcoatRoughnessMapTransform)),d.clearcoatNormalMap&&(m.clearcoatNormalMap.value=d.clearcoatNormalMap,e(d.clearcoatNormalMap,m.clearcoatNormalMapTransform),m.clearcoatNormalScale.value.copy(d.clearcoatNormalScale),d.side===on&&m.clearcoatNormalScale.value.negate())),d.iridescence>0&&(m.iridescence.value=d.iridescence,m.iridescenceIOR.value=d.iridescenceIOR,m.iridescenceThicknessMinimum.value=d.iridescenceThicknessRange[0],m.iridescenceThicknessMaximum.value=d.iridescenceThicknessRange[1],d.iridescenceMap&&(m.iridescenceMap.value=d.iridescenceMap,e(d.iridescenceMap,m.iridescenceMapTransform)),d.iridescenceThicknessMap&&(m.iridescenceThicknessMap.value=d.iridescenceThicknessMap,e(d.iridescenceThicknessMap,m.iridescenceThicknessMapTransform))),d.transmission>0&&(m.transmission.value=d.transmission,m.transmissionSamplerMap.value=M.texture,m.transmissionSamplerSize.value.set(M.width,M.height),d.transmissionMap&&(m.transmissionMap.value=d.transmissionMap,e(d.transmissionMap,m.transmissionMapTransform)),m.thickness.value=d.thickness,d.thicknessMap&&(m.thicknessMap.value=d.thicknessMap,e(d.thicknessMap,m.thicknessMapTransform)),m.attenuationDistance.value=d.attenuationDistance,m.attenuationColor.value.copy(d.attenuationColor)),d.anisotropy>0&&(m.anisotropyVector.value.set(d.anisotropy*Math.cos(d.anisotropyRotation),d.anisotropy*Math.sin(d.anisotropyRotation)),d.anisotropyMap&&(m.anisotropyMap.value=d.anisotropyMap,e(d.anisotropyMap,m.anisotropyMapTransform))),m.specularIntensity.value=d.specularIntensity,m.specularColor.value.copy(d.specularColor),d.specularColorMap&&(m.specularColorMap.value=d.specularColorMap,e(d.specularColorMap,m.specularColorMapTransform)),d.specularIntensityMap&&(m.specularIntensityMap.value=d.specularIntensityMap,e(d.specularIntensityMap,m.specularIntensityMapTransform))}function g(m,d){d.matcap&&(m.matcap.value=d.matcap)}function x(m,d){let M=t.get(d).light;m.referencePosition.value.setFromMatrixPosition(M.matrixWorld),m.nearDistance.value=M.shadow.camera.near,m.farDistance.value=M.shadow.camera.far}return{refreshFogUniforms:i,refreshMaterialUniforms:s}}function Ug(n,t,e,i){let s={},r={},o=[],a=e.isWebGL2?n.getParameter(n.MAX_UNIFORM_BUFFER_BINDINGS):0;function c(M,y){let E=y.program;i.uniformBlockBinding(M,E)}function h(M,y){let E=s[M.id];E===void 0&&(g(M),E=l(M),s[M.id]=E,M.addEventListener("dispose",m));let I=y.program;i.updateUBOMapping(M,I);let A=t.render.frame;r[M.id]!==A&&(f(M),r[M.id]=A)}function l(M){let y=u();M.__bindingPointIndex=y;let E=n.createBuffer(),I=M.__size,A=M.usage;return n.bindBuffer(n.UNIFORM_BUFFER,E),n.bufferData(n.UNIFORM_BUFFER,I,A),n.bindBuffer(n.UNIFORM_BUFFER,null),n.bindBufferBase(n.UNIFORM_BUFFER,y,E),E}function u(){for(let M=0;M<a;M++)if(o.indexOf(M)===-1)return o.push(M),M;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function f(M){let y=s[M.id],E=M.uniforms,I=M.__cache;n.bindBuffer(n.UNIFORM_BUFFER,y);for(let A=0,R=E.length;A<R;A++){let k=Array.isArray(E[A])?E[A]:[E[A]];for(let v=0,w=k.length;v<w;v++){let O=k[v];if(p(O,A,v,I)===!0){let Z=O.__offset,tt=Array.isArray(O.value)?O.value:[O.value],L=0;for(let F=0;F<tt.length;F++){let Q=tt[F],$=x(Q);typeof Q=="number"||typeof Q=="boolean"?(O.__data[0]=Q,n.bufferSubData(n.UNIFORM_BUFFER,Z+L,O.__data)):Q.isMatrix3?(O.__data[0]=Q.elements[0],O.__data[1]=Q.elements[1],O.__data[2]=Q.elements[2],O.__data[3]=0,O.__data[4]=Q.elements[3],O.__data[5]=Q.elements[4],O.__data[6]=Q.elements[5],O.__data[7]=0,O.__data[8]=Q.elements[6],O.__data[9]=Q.elements[7],O.__data[10]=Q.elements[8],O.__data[11]=0):(Q.toArray(O.__data,L),L+=$.storage/Float32Array.BYTES_PER_ELEMENT)}n.bufferSubData(n.UNIFORM_BUFFER,Z,O.__data)}}}n.bindBuffer(n.UNIFORM_BUFFER,null)}function p(M,y,E,I){let A=M.value,R=y+"_"+E;if(I[R]===void 0)return typeof A=="number"||typeof A=="boolean"?I[R]=A:I[R]=A.clone(),!0;{let k=I[R];if(typeof A=="number"||typeof A=="boolean"){if(k!==A)return I[R]=A,!0}else if(k.equals(A)===!1)return k.copy(A),!0}return!1}function g(M){let y=M.uniforms,E=0,I=16;for(let R=0,k=y.length;R<k;R++){let v=Array.isArray(y[R])?y[R]:[y[R]];for(let w=0,O=v.length;w<O;w++){let Z=v[w],tt=Array.isArray(Z.value)?Z.value:[Z.value];for(let L=0,F=tt.length;L<F;L++){let Q=tt[L],$=x(Q),J=E%I;J!==0&&I-J<$.boundary&&(E+=I-J),Z.__data=new Float32Array($.storage/Float32Array.BYTES_PER_ELEMENT),Z.__offset=E,E+=$.storage}}}let A=E%I;return A>0&&(E+=I-A),M.__size=E,M.__cache={},this}function x(M){let y={boundary:0,storage:0};return typeof M=="number"||typeof M=="boolean"?(y.boundary=4,y.storage=4):M.isVector2?(y.boundary=8,y.storage=8):M.isVector3||M.isColor?(y.boundary=16,y.storage=12):M.isVector4?(y.boundary=16,y.storage=16):M.isMatrix3?(y.boundary=48,y.storage=48):M.isMatrix4?(y.boundary=64,y.storage=64):M.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",M),y}function m(M){let y=M.target;y.removeEventListener("dispose",m);let E=o.indexOf(y.__bindingPointIndex);o.splice(E,1),n.deleteBuffer(s[y.id]),delete s[y.id],delete r[y.id]}function d(){for(let M in s)n.deleteBuffer(s[M]);o=[],s={},r={}}return{bind:c,update:h,dispose:d}}var Zs=class{constructor(t={}){let{canvas:e=Vd(),context:i=null,depth:s=!0,stencil:r=!0,alpha:o=!1,antialias:a=!1,premultipliedAlpha:c=!0,preserveDrawingBuffer:h=!1,powerPreference:l="default",failIfMajorPerformanceCaveat:u=!1}=t;this.isWebGLRenderer=!0;let f;i!==null?f=i.getContextAttributes().alpha:f=o;let p=new Uint32Array(4),g=new Int32Array(4),x=null,m=null,d=[],M=[];this.domElement=e,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this._outputColorSpace=Ve,this._useLegacyLights=!1,this.toneMapping=oi,this.toneMappingExposure=1;let y=this,E=!1,I=0,A=0,R=null,k=-1,v=null,w=new ye,O=new ye,Z=null,tt=new Et(0),L=0,F=e.width,Q=e.height,$=1,J=null,j=null,et=new ye(0,0,F,Q),ht=new ye(0,0,F,Q),pt=!1,Y=new Ys,nt=!1,mt=!1,Ct=null,bt=new ve,zt=new Jt,Ht=new z,Dt={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};function ne(){return R===null?$:1}let B=i;function Ge(b,U){for(let X=0;X<b.length;X++){let q=b[X],V=e.getContext(q,U);if(V!==null)return V}return null}try{let b={alpha:!0,depth:s,stencil:r,antialias:a,premultipliedAlpha:c,preserveDrawingBuffer:h,powerPreference:l,failIfMajorPerformanceCaveat:u};if("setAttribute"in e&&e.setAttribute("data-engine",`three.js r${gc}`),e.addEventListener("webglcontextlost",K,!1),e.addEventListener("webglcontextrestored",C,!1),e.addEventListener("webglcontextcreationerror",it,!1),B===null){let U=["webgl2","webgl","experimental-webgl"];if(y.isWebGL1Renderer===!0&&U.shift(),B=Ge(U,b),B===null)throw Ge(U)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}typeof WebGLRenderingContext!="undefined"&&B instanceof WebGLRenderingContext&&console.warn("THREE.WebGLRenderer: WebGL 1 support was deprecated in r153 and will be removed in r163."),B.getShaderPrecisionFormat===void 0&&(B.getShaderPrecisionFormat=function(){return{rangeMin:1,rangeMax:1,precision:1}})}catch(b){throw console.error("THREE.WebGLRenderer: "+b.message),b}let Lt,Ot,St,pe,Gt,S,_,H,ot,at,lt,Rt,gt,vt,Pt,Bt,st,se,D,N,G,W,ut,rt;function xt(){Lt=new t0(B),Ot=new Zm(B,Lt,t),Lt.init(Ot),W=new Lg(B,Lt,Ot),St=new Pg(B,Lt,Ot),pe=new i0(B),Gt=new yg,S=new Ig(B,Lt,St,Gt,Ot,W,pe),_=new Jm(y),H=new Qm(y),ot=new uf(B,Ot),ut=new qm(B,Lt,ot,Ot),at=new e0(B,ot,pe,ut),lt=new o0(B,at,ot,pe),D=new a0(B,Ot,S),Bt=new $m(Gt),Rt=new xg(y,_,H,Lt,Ot,ut,Bt),gt=new Dg(y,Gt),vt=new vg,Pt=new Tg(Lt,Ot),se=new Xm(y,_,H,St,lt,f,c),st=new Cg(y,lt,Ot),rt=new Ug(B,pe,Ot,St),N=new Ym(B,Lt,pe,Ot),G=new n0(B,Lt,pe,Ot),pe.programs=Rt.programs,y.capabilities=Ot,y.extensions=Lt,y.properties=Gt,y.renderLists=vt,y.shadowMap=st,y.state=St,y.info=pe}xt();let yt=new ec(y,B);this.xr=yt,this.getContext=function(){return B},this.getContextAttributes=function(){return B.getContextAttributes()},this.forceContextLoss=function(){let b=Lt.get("WEBGL_lose_context");b&&b.loseContext()},this.forceContextRestore=function(){let b=Lt.get("WEBGL_lose_context");b&&b.restoreContext()},this.getPixelRatio=function(){return $},this.setPixelRatio=function(b){b!==void 0&&($=b,this.setSize(F,Q,!1))},this.getSize=function(b){return b.set(F,Q)},this.setSize=function(b,U,X=!0){if(yt.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}F=b,Q=U,e.width=Math.floor(b*$),e.height=Math.floor(U*$),X===!0&&(e.style.width=b+"px",e.style.height=U+"px"),this.setViewport(0,0,b,U)},this.getDrawingBufferSize=function(b){return b.set(F*$,Q*$).floor()},this.setDrawingBufferSize=function(b,U,X){F=b,Q=U,$=X,e.width=Math.floor(b*X),e.height=Math.floor(U*X),this.setViewport(0,0,b,U)},this.getCurrentViewport=function(b){return b.copy(w)},this.getViewport=function(b){return b.copy(et)},this.setViewport=function(b,U,X,q){b.isVector4?et.set(b.x,b.y,b.z,b.w):et.set(b,U,X,q),St.viewport(w.copy(et).multiplyScalar($).floor())},this.getScissor=function(b){return b.copy(ht)},this.setScissor=function(b,U,X,q){b.isVector4?ht.set(b.x,b.y,b.z,b.w):ht.set(b,U,X,q),St.scissor(O.copy(ht).multiplyScalar($).floor())},this.getScissorTest=function(){return pt},this.setScissorTest=function(b){St.setScissorTest(pt=b)},this.setOpaqueSort=function(b){J=b},this.setTransparentSort=function(b){j=b},this.getClearColor=function(b){return b.copy(se.getClearColor())},this.setClearColor=function(){se.setClearColor.apply(se,arguments)},this.getClearAlpha=function(){return se.getClearAlpha()},this.setClearAlpha=function(){se.setClearAlpha.apply(se,arguments)},this.clear=function(b=!0,U=!0,X=!0){let q=0;if(b){let V=!1;if(R!==null){let _t=R.texture.format;V=_t===Oh||_t===Nh||_t===Uh}if(V){let _t=R.texture.type,It=_t===ci||_t===si||_t===xc||_t===Ri||_t===zh||_t===Dh,Ut=se.getClearColor(),Ft=se.getClearAlpha(),Yt=Ut.r,Vt=Ut.g,Xt=Ut.b;It?(p[0]=Yt,p[1]=Vt,p[2]=Xt,p[3]=Ft,B.clearBufferuiv(B.COLOR,0,p)):(g[0]=Yt,g[1]=Vt,g[2]=Xt,g[3]=Ft,B.clearBufferiv(B.COLOR,0,g))}else q|=B.COLOR_BUFFER_BIT}U&&(q|=B.DEPTH_BUFFER_BIT),X&&(q|=B.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),B.clear(q)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){e.removeEventListener("webglcontextlost",K,!1),e.removeEventListener("webglcontextrestored",C,!1),e.removeEventListener("webglcontextcreationerror",it,!1),vt.dispose(),Pt.dispose(),Gt.dispose(),_.dispose(),H.dispose(),lt.dispose(),ut.dispose(),rt.dispose(),Rt.dispose(),yt.dispose(),yt.removeEventListener("sessionstart",Ke),yt.removeEventListener("sessionend",de),Ct&&(Ct.dispose(),Ct=null),Qe.stop()};function K(b){b.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),E=!0}function C(){console.log("THREE.WebGLRenderer: Context Restored."),E=!1;let b=pe.autoReset,U=st.enabled,X=st.autoUpdate,q=st.needsUpdate,V=st.type;xt(),pe.autoReset=b,st.enabled=U,st.autoUpdate=X,st.needsUpdate=q,st.type=V}function it(b){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",b.statusMessage)}function ct(b){let U=b.target;U.removeEventListener("dispose",ct),wt(U)}function wt(b){Tt(b),Gt.remove(b)}function Tt(b){let U=Gt.get(b).programs;U!==void 0&&(U.forEach(function(X){Rt.releaseProgram(X)}),b.isShaderMaterial&&Rt.releaseShaderCache(b))}this.renderBufferDirect=function(b,U,X,q,V,_t){U===null&&(U=Dt);let It=V.isMesh&&V.matrixWorld.determinant()<0,Ut=Bu(b,U,X,q,V);St.setMaterial(q,It);let Ft=X.index,Yt=1;if(q.wireframe===!0){if(Ft=at.getWireframeAttribute(X),Ft===void 0)return;Yt=2}let Vt=X.drawRange,Xt=X.attributes.position,Ee=Vt.start*Yt,cn=(Vt.start+Vt.count)*Yt;_t!==null&&(Ee=Math.max(Ee,_t.start*Yt),cn=Math.min(cn,(_t.start+_t.count)*Yt)),Ft!==null?(Ee=Math.max(Ee,0),cn=Math.min(cn,Ft.count)):Xt!=null&&(Ee=Math.max(Ee,0),cn=Math.min(cn,Xt.count));let Oe=cn-Ee;if(Oe<0||Oe===1/0)return;ut.setup(V,q,Ut,X,Ft);let Un,_e=N;if(Ft!==null&&(Un=ot.get(Ft),_e=G,_e.setIndex(Un)),V.isMesh)q.wireframe===!0?(St.setLineWidth(q.wireframeLinewidth*ne()),_e.setMode(B.LINES)):_e.setMode(B.TRIANGLES);else if(V.isLine){let Zt=q.linewidth;Zt===void 0&&(Zt=1),St.setLineWidth(Zt*ne()),V.isLineSegments?_e.setMode(B.LINES):V.isLineLoop?_e.setMode(B.LINE_LOOP):_e.setMode(B.LINE_STRIP)}else V.isPoints?_e.setMode(B.POINTS):V.isSprite&&_e.setMode(B.TRIANGLES);if(V.isBatchedMesh)_e.renderMultiDraw(V._multiDrawStarts,V._multiDrawCounts,V._multiDrawCount);else if(V.isInstancedMesh)_e.renderInstances(Ee,Oe,V.count);else if(X.isInstancedBufferGeometry){let Zt=X._maxInstanceCount!==void 0?X._maxInstanceCount:1/0,$a=Math.min(X.instanceCount,Zt);_e.renderInstances(Ee,Oe,$a)}else _e.render(Ee,Oe)};function re(b,U,X){b.transparent===!0&&b.side===un&&b.forceSinglePass===!1?(b.side=on,b.needsUpdate=!0,pr(b,U,X),b.side=li,b.needsUpdate=!0,pr(b,U,X),b.side=un):pr(b,U,X)}this.compile=function(b,U,X=null){X===null&&(X=b),m=Pt.get(X),m.init(),M.push(m),X.traverseVisible(function(V){V.isLight&&V.layers.test(U.layers)&&(m.pushLight(V),V.castShadow&&m.pushShadow(V))}),b!==X&&b.traverseVisible(function(V){V.isLight&&V.layers.test(U.layers)&&(m.pushLight(V),V.castShadow&&m.pushShadow(V))}),m.setupLights(y._useLegacyLights);let q=new Set;return b.traverse(function(V){let _t=V.material;if(_t)if(Array.isArray(_t))for(let It=0;It<_t.length;It++){let Ut=_t[It];re(Ut,X,V),q.add(Ut)}else re(_t,X,V),q.add(_t)}),M.pop(),m=null,q},this.compileAsync=function(b,U,X=null){let q=this.compile(b,U,X);return new Promise(V=>{function _t(){if(q.forEach(function(It){Gt.get(It).currentProgram.isReady()&&q.delete(It)}),q.size===0){V(b);return}setTimeout(_t,10)}Lt.get("KHR_parallel_shader_compile")!==null?_t():setTimeout(_t,10)})};let ue=null;function Ne(b){ue&&ue(b)}function Ke(){Qe.stop()}function de(){Qe.start()}let Qe=new Wh;Qe.setAnimationLoop(Ne),typeof self!="undefined"&&Qe.setContext(self),this.setAnimationLoop=function(b){ue=b,yt.setAnimationLoop(b),b===null?Qe.stop():Qe.start()},yt.addEventListener("sessionstart",Ke),yt.addEventListener("sessionend",de),this.render=function(b,U){if(U!==void 0&&U.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(E===!0)return;b.matrixWorldAutoUpdate===!0&&b.updateMatrixWorld(),U.parent===null&&U.matrixWorldAutoUpdate===!0&&U.updateMatrixWorld(),yt.enabled===!0&&yt.isPresenting===!0&&(yt.cameraAutoUpdate===!0&&yt.updateCamera(U),U=yt.getCamera()),b.isScene===!0&&b.onBeforeRender(y,b,U,R),m=Pt.get(b,M.length),m.init(),M.push(m),bt.multiplyMatrices(U.projectionMatrix,U.matrixWorldInverse),Y.setFromProjectionMatrix(bt),mt=this.localClippingEnabled,nt=Bt.init(this.clippingPlanes,mt),x=vt.get(b,d.length),x.init(),d.push(x),Pn(b,U,0,y.sortObjects),x.finish(),y.sortObjects===!0&&x.sort(J,j),this.info.render.frame++,nt===!0&&Bt.beginShadows();let X=m.state.shadowsArray;if(st.render(X,b,U),nt===!0&&Bt.endShadows(),this.info.autoReset===!0&&this.info.reset(),se.render(x,b),m.setupLights(y._useLegacyLights),U.isArrayCamera){let q=U.cameras;for(let V=0,_t=q.length;V<_t;V++){let It=q[V];$c(x,b,It,It.viewport)}}else $c(x,b,U);R!==null&&(S.updateMultisampleRenderTarget(R),S.updateRenderTargetMipmap(R)),b.isScene===!0&&b.onAfterRender(y,b,U),ut.resetDefaultState(),k=-1,v=null,M.pop(),M.length>0?m=M[M.length-1]:m=null,d.pop(),d.length>0?x=d[d.length-1]:x=null};function Pn(b,U,X,q){if(b.visible===!1)return;if(b.layers.test(U.layers)){if(b.isGroup)X=b.renderOrder;else if(b.isLOD)b.autoUpdate===!0&&b.update(U);else if(b.isLight)m.pushLight(b),b.castShadow&&m.pushShadow(b);else if(b.isSprite){if(!b.frustumCulled||Y.intersectsSprite(b)){q&&Ht.setFromMatrixPosition(b.matrixWorld).applyMatrix4(bt);let It=lt.update(b),Ut=b.material;Ut.visible&&x.push(b,It,Ut,X,Ht.z,null)}}else if((b.isMesh||b.isLine||b.isPoints)&&(!b.frustumCulled||Y.intersectsObject(b))){let It=lt.update(b),Ut=b.material;if(q&&(b.boundingSphere!==void 0?(b.boundingSphere===null&&b.computeBoundingSphere(),Ht.copy(b.boundingSphere.center)):(It.boundingSphere===null&&It.computeBoundingSphere(),Ht.copy(It.boundingSphere.center)),Ht.applyMatrix4(b.matrixWorld).applyMatrix4(bt)),Array.isArray(Ut)){let Ft=It.groups;for(let Yt=0,Vt=Ft.length;Yt<Vt;Yt++){let Xt=Ft[Yt],Ee=Ut[Xt.materialIndex];Ee&&Ee.visible&&x.push(b,It,Ee,X,Ht.z,Xt)}}else Ut.visible&&x.push(b,It,Ut,X,Ht.z,null)}}let _t=b.children;for(let It=0,Ut=_t.length;It<Ut;It++)Pn(_t[It],U,X,q)}function $c(b,U,X,q){let V=b.opaque,_t=b.transmissive,It=b.transparent;m.setupLightsView(X),nt===!0&&Bt.setGlobalState(y.clippingPlanes,X),_t.length>0&&Fu(V,_t,U,X),q&&St.viewport(w.copy(q)),V.length>0&&fr(V,U,X),_t.length>0&&fr(_t,U,X),It.length>0&&fr(It,U,X),St.buffers.depth.setTest(!0),St.buffers.depth.setMask(!0),St.buffers.color.setMask(!0),St.setPolygonOffset(!1)}function Fu(b,U,X,q){if((X.isScene===!0?X.overrideMaterial:null)!==null)return;let _t=Ot.isWebGL2;Ct===null&&(Ct=new Xn(1,1,{generateMipmaps:!0,type:Lt.has("EXT_color_buffer_half_float")?qs:ci,minFilter:Xs,samples:_t?4:0})),y.getDrawingBufferSize(zt),_t?Ct.setSize(zt.x,zt.y):Ct.setSize(Ho(zt.x),Ho(zt.y));let It=y.getRenderTarget();y.setRenderTarget(Ct),y.getClearColor(tt),L=y.getClearAlpha(),L<1&&y.setClearColor(16777215,.5),y.clear();let Ut=y.toneMapping;y.toneMapping=oi,fr(b,X,q),S.updateMultisampleRenderTarget(Ct),S.updateRenderTargetMipmap(Ct);let Ft=!1;for(let Yt=0,Vt=U.length;Yt<Vt;Yt++){let Xt=U[Yt],Ee=Xt.object,cn=Xt.geometry,Oe=Xt.material,Un=Xt.group;if(Oe.side===un&&Ee.layers.test(q.layers)){let _e=Oe.side;Oe.side=on,Oe.needsUpdate=!0,Jc(Ee,X,q,cn,Oe,Un),Oe.side=_e,Oe.needsUpdate=!0,Ft=!0}}Ft===!0&&(S.updateMultisampleRenderTarget(Ct),S.updateRenderTargetMipmap(Ct)),y.setRenderTarget(It),y.setClearColor(tt,L),y.toneMapping=Ut}function fr(b,U,X){let q=U.isScene===!0?U.overrideMaterial:null;for(let V=0,_t=b.length;V<_t;V++){let It=b[V],Ut=It.object,Ft=It.geometry,Yt=q===null?It.material:q,Vt=It.group;Ut.layers.test(X.layers)&&Jc(Ut,U,X,Ft,Yt,Vt)}}function Jc(b,U,X,q,V,_t){b.onBeforeRender(y,U,X,q,V,_t),b.modelViewMatrix.multiplyMatrices(X.matrixWorldInverse,b.matrixWorld),b.normalMatrix.getNormalMatrix(b.modelViewMatrix),V.onBeforeRender(y,U,X,q,b,_t),V.transparent===!0&&V.side===un&&V.forceSinglePass===!1?(V.side=on,V.needsUpdate=!0,y.renderBufferDirect(X,U,q,V,b,_t),V.side=li,V.needsUpdate=!0,y.renderBufferDirect(X,U,q,V,b,_t),V.side=un):y.renderBufferDirect(X,U,q,V,b,_t),b.onAfterRender(y,U,X,q,V,_t)}function pr(b,U,X){U.isScene!==!0&&(U=Dt);let q=Gt.get(b),V=m.state.lights,_t=m.state.shadowsArray,It=V.state.version,Ut=Rt.getParameters(b,V.state,_t,U,X),Ft=Rt.getProgramCacheKey(Ut),Yt=q.programs;q.environment=b.isMeshStandardMaterial?U.environment:null,q.fog=U.fog,q.envMap=(b.isMeshStandardMaterial?H:_).get(b.envMap||q.environment),Yt===void 0&&(b.addEventListener("dispose",ct),Yt=new Map,q.programs=Yt);let Vt=Yt.get(Ft);if(Vt!==void 0){if(q.currentProgram===Vt&&q.lightsStateVersion===It)return Kc(b,Ut),Vt}else Ut.uniforms=Rt.getUniforms(b),b.onBuild(X,Ut,y),b.onBeforeCompile(Ut,y),Vt=Rt.acquireProgram(Ut,Ft),Yt.set(Ft,Vt),q.uniforms=Ut.uniforms;let Xt=q.uniforms;return(!b.isShaderMaterial&&!b.isRawShaderMaterial||b.clipping===!0)&&(Xt.clippingPlanes=Bt.uniform),Kc(b,Ut),q.needsLights=Hu(b),q.lightsStateVersion=It,q.needsLights&&(Xt.ambientLightColor.value=V.state.ambient,Xt.lightProbe.value=V.state.probe,Xt.directionalLights.value=V.state.directional,Xt.directionalLightShadows.value=V.state.directionalShadow,Xt.spotLights.value=V.state.spot,Xt.spotLightShadows.value=V.state.spotShadow,Xt.rectAreaLights.value=V.state.rectArea,Xt.ltc_1.value=V.state.rectAreaLTC1,Xt.ltc_2.value=V.state.rectAreaLTC2,Xt.pointLights.value=V.state.point,Xt.pointLightShadows.value=V.state.pointShadow,Xt.hemisphereLights.value=V.state.hemi,Xt.directionalShadowMap.value=V.state.directionalShadowMap,Xt.directionalShadowMatrix.value=V.state.directionalShadowMatrix,Xt.spotShadowMap.value=V.state.spotShadowMap,Xt.spotLightMatrix.value=V.state.spotLightMatrix,Xt.spotLightMap.value=V.state.spotLightMap,Xt.pointShadowMap.value=V.state.pointShadowMap,Xt.pointShadowMatrix.value=V.state.pointShadowMatrix),q.currentProgram=Vt,q.uniformsList=null,Vt}function jc(b){if(b.uniformsList===null){let U=b.currentProgram.getUniforms();b.uniformsList=fs.seqWithValue(U.seq,b.uniforms)}return b.uniformsList}function Kc(b,U){let X=Gt.get(b);X.outputColorSpace=U.outputColorSpace,X.batching=U.batching,X.instancing=U.instancing,X.instancingColor=U.instancingColor,X.skinning=U.skinning,X.morphTargets=U.morphTargets,X.morphNormals=U.morphNormals,X.morphColors=U.morphColors,X.morphTargetsCount=U.morphTargetsCount,X.numClippingPlanes=U.numClippingPlanes,X.numIntersection=U.numClipIntersection,X.vertexAlphas=U.vertexAlphas,X.vertexTangents=U.vertexTangents,X.toneMapping=U.toneMapping}function Bu(b,U,X,q,V){U.isScene!==!0&&(U=Dt),S.resetTextureUnits();let _t=U.fog,It=q.isMeshStandardMaterial?U.environment:null,Ut=R===null?y.outputColorSpace:R.isXRRenderTarget===!0?R.texture.colorSpace:Wn,Ft=(q.isMeshStandardMaterial?H:_).get(q.envMap||It),Yt=q.vertexColors===!0&&!!X.attributes.color&&X.attributes.color.itemSize===4,Vt=!!X.attributes.tangent&&(!!q.normalMap||q.anisotropy>0),Xt=!!X.morphAttributes.position,Ee=!!X.morphAttributes.normal,cn=!!X.morphAttributes.color,Oe=oi;q.toneMapped&&(R===null||R.isXRRenderTarget===!0)&&(Oe=y.toneMapping);let Un=X.morphAttributes.position||X.morphAttributes.normal||X.morphAttributes.color,_e=Un!==void 0?Un.length:0,Zt=Gt.get(q),$a=m.state.lights;if(nt===!0&&(mt===!0||b!==v)){let pn=b===v&&q.id===k;Bt.setState(q,b,pn)}let we=!1;q.version===Zt.__version?(Zt.needsLights&&Zt.lightsStateVersion!==$a.state.version||Zt.outputColorSpace!==Ut||V.isBatchedMesh&&Zt.batching===!1||!V.isBatchedMesh&&Zt.batching===!0||V.isInstancedMesh&&Zt.instancing===!1||!V.isInstancedMesh&&Zt.instancing===!0||V.isSkinnedMesh&&Zt.skinning===!1||!V.isSkinnedMesh&&Zt.skinning===!0||V.isInstancedMesh&&Zt.instancingColor===!0&&V.instanceColor===null||V.isInstancedMesh&&Zt.instancingColor===!1&&V.instanceColor!==null||Zt.envMap!==Ft||q.fog===!0&&Zt.fog!==_t||Zt.numClippingPlanes!==void 0&&(Zt.numClippingPlanes!==Bt.numPlanes||Zt.numIntersection!==Bt.numIntersection)||Zt.vertexAlphas!==Yt||Zt.vertexTangents!==Vt||Zt.morphTargets!==Xt||Zt.morphNormals!==Ee||Zt.morphColors!==cn||Zt.toneMapping!==Oe||Ot.isWebGL2===!0&&Zt.morphTargetsCount!==_e)&&(we=!0):(we=!0,Zt.__version=q.version);let _i=Zt.currentProgram;we===!0&&(_i=pr(q,U,V));let Qc=!1,Ds=!1,Ja=!1,qe=_i.getUniforms(),vi=Zt.uniforms;if(St.useProgram(_i.program)&&(Qc=!0,Ds=!0,Ja=!0),q.id!==k&&(k=q.id,Ds=!0),Qc||v!==b){qe.setValue(B,"projectionMatrix",b.projectionMatrix),qe.setValue(B,"viewMatrix",b.matrixWorldInverse);let pn=qe.map.cameraPosition;pn!==void 0&&pn.setValue(B,Ht.setFromMatrixPosition(b.matrixWorld)),Ot.logarithmicDepthBuffer&&qe.setValue(B,"logDepthBufFC",2/(Math.log(b.far+1)/Math.LN2)),(q.isMeshPhongMaterial||q.isMeshToonMaterial||q.isMeshLambertMaterial||q.isMeshBasicMaterial||q.isMeshStandardMaterial||q.isShaderMaterial)&&qe.setValue(B,"isOrthographic",b.isOrthographicCamera===!0),v!==b&&(v=b,Ds=!0,Ja=!0)}if(V.isSkinnedMesh){qe.setOptional(B,V,"bindMatrix"),qe.setOptional(B,V,"bindMatrixInverse");let pn=V.skeleton;pn&&(Ot.floatVertexTextures?(pn.boneTexture===null&&pn.computeBoneTexture(),qe.setValue(B,"boneTexture",pn.boneTexture,S)):console.warn("THREE.WebGLRenderer: SkinnedMesh can only be used with WebGL 2. With WebGL 1 OES_texture_float and vertex textures support is required."))}V.isBatchedMesh&&(qe.setOptional(B,V,"batchingTexture"),qe.setValue(B,"batchingTexture",V._matricesTexture,S));let ja=X.morphAttributes;if((ja.position!==void 0||ja.normal!==void 0||ja.color!==void 0&&Ot.isWebGL2===!0)&&D.update(V,X,_i),(Ds||Zt.receiveShadow!==V.receiveShadow)&&(Zt.receiveShadow=V.receiveShadow,qe.setValue(B,"receiveShadow",V.receiveShadow)),q.isMeshGouraudMaterial&&q.envMap!==null&&(vi.envMap.value=Ft,vi.flipEnvMap.value=Ft.isCubeTexture&&Ft.isRenderTargetTexture===!1?-1:1),Ds&&(qe.setValue(B,"toneMappingExposure",y.toneMappingExposure),Zt.needsLights&&ku(vi,Ja),_t&&q.fog===!0&&gt.refreshFogUniforms(vi,_t),gt.refreshMaterialUniforms(vi,q,$,Q,Ct),fs.upload(B,jc(Zt),vi,S)),q.isShaderMaterial&&q.uniformsNeedUpdate===!0&&(fs.upload(B,jc(Zt),vi,S),q.uniformsNeedUpdate=!1),q.isSpriteMaterial&&qe.setValue(B,"center",V.center),qe.setValue(B,"modelViewMatrix",V.modelViewMatrix),qe.setValue(B,"normalMatrix",V.normalMatrix),qe.setValue(B,"modelMatrix",V.matrixWorld),q.isShaderMaterial||q.isRawShaderMaterial){let pn=q.uniformsGroups;for(let Ka=0,Gu=pn.length;Ka<Gu;Ka++)if(Ot.isWebGL2){let tl=pn[Ka];rt.update(tl,_i),rt.bind(tl,_i)}else console.warn("THREE.WebGLRenderer: Uniform Buffer Objects can only be used with WebGL 2.")}return _i}function ku(b,U){b.ambientLightColor.needsUpdate=U,b.lightProbe.needsUpdate=U,b.directionalLights.needsUpdate=U,b.directionalLightShadows.needsUpdate=U,b.pointLights.needsUpdate=U,b.pointLightShadows.needsUpdate=U,b.spotLights.needsUpdate=U,b.spotLightShadows.needsUpdate=U,b.rectAreaLights.needsUpdate=U,b.hemisphereLights.needsUpdate=U}function Hu(b){return b.isMeshLambertMaterial||b.isMeshToonMaterial||b.isMeshPhongMaterial||b.isMeshStandardMaterial||b.isShadowMaterial||b.isShaderMaterial&&b.lights===!0}this.getActiveCubeFace=function(){return I},this.getActiveMipmapLevel=function(){return A},this.getRenderTarget=function(){return R},this.setRenderTargetTextures=function(b,U,X){Gt.get(b.texture).__webglTexture=U,Gt.get(b.depthTexture).__webglTexture=X;let q=Gt.get(b);q.__hasExternalTextures=!0,q.__hasExternalTextures&&(q.__autoAllocateDepthBuffer=X===void 0,q.__autoAllocateDepthBuffer||Lt.has("WEBGL_multisampled_render_to_texture")===!0&&(console.warn("THREE.WebGLRenderer: Render-to-texture extension was disabled because an external texture was provided"),q.__useRenderToTexture=!1))},this.setRenderTargetFramebuffer=function(b,U){let X=Gt.get(b);X.__webglFramebuffer=U,X.__useDefaultFramebuffer=U===void 0},this.setRenderTarget=function(b,U=0,X=0){R=b,I=U,A=X;let q=!0,V=null,_t=!1,It=!1;if(b){let Ft=Gt.get(b);Ft.__useDefaultFramebuffer!==void 0?(St.bindFramebuffer(B.FRAMEBUFFER,null),q=!1):Ft.__webglFramebuffer===void 0?S.setupRenderTarget(b):Ft.__hasExternalTextures&&S.rebindTextures(b,Gt.get(b.texture).__webglTexture,Gt.get(b.depthTexture).__webglTexture);let Yt=b.texture;(Yt.isData3DTexture||Yt.isDataArrayTexture||Yt.isCompressedArrayTexture)&&(It=!0);let Vt=Gt.get(b).__webglFramebuffer;b.isWebGLCubeRenderTarget?(Array.isArray(Vt[U])?V=Vt[U][X]:V=Vt[U],_t=!0):Ot.isWebGL2&&b.samples>0&&S.useMultisampledRTT(b)===!1?V=Gt.get(b).__webglMultisampledFramebuffer:Array.isArray(Vt)?V=Vt[X]:V=Vt,w.copy(b.viewport),O.copy(b.scissor),Z=b.scissorTest}else w.copy(et).multiplyScalar($).floor(),O.copy(ht).multiplyScalar($).floor(),Z=pt;if(St.bindFramebuffer(B.FRAMEBUFFER,V)&&Ot.drawBuffers&&q&&St.drawBuffers(b,V),St.viewport(w),St.scissor(O),St.setScissorTest(Z),_t){let Ft=Gt.get(b.texture);B.framebufferTexture2D(B.FRAMEBUFFER,B.COLOR_ATTACHMENT0,B.TEXTURE_CUBE_MAP_POSITIVE_X+U,Ft.__webglTexture,X)}else if(It){let Ft=Gt.get(b.texture),Yt=U||0;B.framebufferTextureLayer(B.FRAMEBUFFER,B.COLOR_ATTACHMENT0,Ft.__webglTexture,X||0,Yt)}k=-1},this.readRenderTargetPixels=function(b,U,X,q,V,_t,It){if(!(b&&b.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let Ut=Gt.get(b).__webglFramebuffer;if(b.isWebGLCubeRenderTarget&&It!==void 0&&(Ut=Ut[It]),Ut){St.bindFramebuffer(B.FRAMEBUFFER,Ut);try{let Ft=b.texture,Yt=Ft.format,Vt=Ft.type;if(Yt!==wn&&W.convert(Yt)!==B.getParameter(B.IMPLEMENTATION_COLOR_READ_FORMAT)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}let Xt=Vt===qs&&(Lt.has("EXT_color_buffer_half_float")||Ot.isWebGL2&&Lt.has("EXT_color_buffer_float"));if(Vt!==ci&&W.convert(Vt)!==B.getParameter(B.IMPLEMENTATION_COLOR_READ_TYPE)&&!(Vt===ri&&(Ot.isWebGL2||Lt.has("OES_texture_float")||Lt.has("WEBGL_color_buffer_float")))&&!Xt){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}U>=0&&U<=b.width-q&&X>=0&&X<=b.height-V&&B.readPixels(U,X,q,V,W.convert(Yt),W.convert(Vt),_t)}finally{let Ft=R!==null?Gt.get(R).__webglFramebuffer:null;St.bindFramebuffer(B.FRAMEBUFFER,Ft)}}},this.copyFramebufferToTexture=function(b,U,X=0){let q=Math.pow(2,-X),V=Math.floor(U.image.width*q),_t=Math.floor(U.image.height*q);S.setTexture2D(U,0),B.copyTexSubImage2D(B.TEXTURE_2D,X,0,0,b.x,b.y,V,_t),St.unbindTexture()},this.copyTextureToTexture=function(b,U,X,q=0){let V=U.image.width,_t=U.image.height,It=W.convert(X.format),Ut=W.convert(X.type);S.setTexture2D(X,0),B.pixelStorei(B.UNPACK_FLIP_Y_WEBGL,X.flipY),B.pixelStorei(B.UNPACK_PREMULTIPLY_ALPHA_WEBGL,X.premultiplyAlpha),B.pixelStorei(B.UNPACK_ALIGNMENT,X.unpackAlignment),U.isDataTexture?B.texSubImage2D(B.TEXTURE_2D,q,b.x,b.y,V,_t,It,Ut,U.image.data):U.isCompressedTexture?B.compressedTexSubImage2D(B.TEXTURE_2D,q,b.x,b.y,U.mipmaps[0].width,U.mipmaps[0].height,It,U.mipmaps[0].data):B.texSubImage2D(B.TEXTURE_2D,q,b.x,b.y,It,Ut,U.image),q===0&&X.generateMipmaps&&B.generateMipmap(B.TEXTURE_2D),St.unbindTexture()},this.copyTextureToTexture3D=function(b,U,X,q,V=0){if(y.isWebGL1Renderer){console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: can only be used with WebGL2.");return}let _t=b.max.x-b.min.x+1,It=b.max.y-b.min.y+1,Ut=b.max.z-b.min.z+1,Ft=W.convert(q.format),Yt=W.convert(q.type),Vt;if(q.isData3DTexture)S.setTexture3D(q,0),Vt=B.TEXTURE_3D;else if(q.isDataArrayTexture||q.isCompressedArrayTexture)S.setTexture2DArray(q,0),Vt=B.TEXTURE_2D_ARRAY;else{console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: only supports THREE.DataTexture3D and THREE.DataTexture2DArray.");return}B.pixelStorei(B.UNPACK_FLIP_Y_WEBGL,q.flipY),B.pixelStorei(B.UNPACK_PREMULTIPLY_ALPHA_WEBGL,q.premultiplyAlpha),B.pixelStorei(B.UNPACK_ALIGNMENT,q.unpackAlignment);let Xt=B.getParameter(B.UNPACK_ROW_LENGTH),Ee=B.getParameter(B.UNPACK_IMAGE_HEIGHT),cn=B.getParameter(B.UNPACK_SKIP_PIXELS),Oe=B.getParameter(B.UNPACK_SKIP_ROWS),Un=B.getParameter(B.UNPACK_SKIP_IMAGES),_e=X.isCompressedTexture?X.mipmaps[V]:X.image;B.pixelStorei(B.UNPACK_ROW_LENGTH,_e.width),B.pixelStorei(B.UNPACK_IMAGE_HEIGHT,_e.height),B.pixelStorei(B.UNPACK_SKIP_PIXELS,b.min.x),B.pixelStorei(B.UNPACK_SKIP_ROWS,b.min.y),B.pixelStorei(B.UNPACK_SKIP_IMAGES,b.min.z),X.isDataTexture||X.isData3DTexture?B.texSubImage3D(Vt,V,U.x,U.y,U.z,_t,It,Ut,Ft,Yt,_e.data):X.isCompressedArrayTexture?(console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: untested support for compressed srcTexture."),B.compressedTexSubImage3D(Vt,V,U.x,U.y,U.z,_t,It,Ut,Ft,_e.data)):B.texSubImage3D(Vt,V,U.x,U.y,U.z,_t,It,Ut,Ft,Yt,_e),B.pixelStorei(B.UNPACK_ROW_LENGTH,Xt),B.pixelStorei(B.UNPACK_IMAGE_HEIGHT,Ee),B.pixelStorei(B.UNPACK_SKIP_PIXELS,cn),B.pixelStorei(B.UNPACK_SKIP_ROWS,Oe),B.pixelStorei(B.UNPACK_SKIP_IMAGES,Un),V===0&&q.generateMipmaps&&B.generateMipmap(Vt),St.unbindTexture()},this.initTexture=function(b){b.isCubeTexture?S.setTextureCube(b,0):b.isData3DTexture?S.setTexture3D(b,0):b.isDataArrayTexture||b.isCompressedArrayTexture?S.setTexture2DArray(b,0):S.setTexture2D(b,0),St.unbindTexture()},this.resetState=function(){I=0,A=0,R=null,St.reset(),ut.reset()},typeof __THREE_DEVTOOLS__!="undefined"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return Vn}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(t){this._outputColorSpace=t;let e=this.getContext();e.drawingBufferColorSpace=t===_c?"display-p3":"srgb",e.unpackColorSpace=ae.workingColorSpace===wa?"display-p3":"srgb"}get outputEncoding(){return console.warn("THREE.WebGLRenderer: Property .outputEncoding has been removed. Use .outputColorSpace instead."),this.outputColorSpace===Ve?Pi:Bh}set outputEncoding(t){console.warn("THREE.WebGLRenderer: Property .outputEncoding has been removed. Use .outputColorSpace instead."),this.outputColorSpace=t===Pi?Ve:Wn}get useLegacyLights(){return console.warn("THREE.WebGLRenderer: The property .useLegacyLights has been deprecated. Migrate your lighting according to the following guide: https://discourse.threejs.org/t/updates-to-lighting-in-three-js-r155/53733."),this._useLegacyLights}set useLegacyLights(t){console.warn("THREE.WebGLRenderer: The property .useLegacyLights has been deprecated. Migrate your lighting according to the following guide: https://discourse.threejs.org/t/updates-to-lighting-in-three-js-r155/53733."),this._useLegacyLights=t}},nc=class extends Zs{};nc.prototype.isWebGL1Renderer=!0;var ca=class n{constructor(t,e=1,i=1e3){this.isFog=!0,this.name="",this.color=new Et(t),this.near=e,this.far=i}clone(){return new n(this.color,this.near,this.far)}toJSON(){return{type:"Fog",name:this.name,color:this.color.getHex(),near:this.near,far:this.far}}},la=class extends ke{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__!="undefined"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(t,e){return super.copy(t,e),t.background!==null&&(this.background=t.background.clone()),t.environment!==null&&(this.environment=t.environment.clone()),t.fog!==null&&(this.fog=t.fog.clone()),this.backgroundBlurriness=t.backgroundBlurriness,this.backgroundIntensity=t.backgroundIntensity,t.overrideMaterial!==null&&(this.overrideMaterial=t.overrideMaterial.clone()),this.matrixAutoUpdate=t.matrixAutoUpdate,this}toJSON(t){let e=super.toJSON(t);return this.fog!==null&&(e.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(e.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(e.object.backgroundIntensity=this.backgroundIntensity),e}};var $s=class extends Be{constructor(t,e,i,s=1){super(t,e,i),this.isInstancedBufferAttribute=!0,this.meshPerAttribute=s}copy(t){return super.copy(t),this.meshPerAttribute=t.meshPerAttribute,this}toJSON(){let t=super.toJSON();return t.meshPerAttribute=this.meshPerAttribute,t.isInstancedBufferAttribute=!0,t}},os=new ve,wh=new ve,Or=[],Sh=new qn,Ng=new ve,ks=new Mt,Hs=new di,ha=class extends Mt{constructor(t,e,i){super(t,e),this.isInstancedMesh=!0,this.instanceMatrix=new $s(new Float32Array(i*16),16),this.instanceColor=null,this.count=i,this.boundingBox=null,this.boundingSphere=null;for(let s=0;s<i;s++)this.setMatrixAt(s,Ng)}computeBoundingBox(){let t=this.geometry,e=this.count;this.boundingBox===null&&(this.boundingBox=new qn),t.boundingBox===null&&t.computeBoundingBox(),this.boundingBox.makeEmpty();for(let i=0;i<e;i++)this.getMatrixAt(i,os),Sh.copy(t.boundingBox).applyMatrix4(os),this.boundingBox.union(Sh)}computeBoundingSphere(){let t=this.geometry,e=this.count;this.boundingSphere===null&&(this.boundingSphere=new di),t.boundingSphere===null&&t.computeBoundingSphere(),this.boundingSphere.makeEmpty();for(let i=0;i<e;i++)this.getMatrixAt(i,os),Hs.copy(t.boundingSphere).applyMatrix4(os),this.boundingSphere.union(Hs)}copy(t,e){return super.copy(t,e),this.instanceMatrix.copy(t.instanceMatrix),t.instanceColor!==null&&(this.instanceColor=t.instanceColor.clone()),this.count=t.count,t.boundingBox!==null&&(this.boundingBox=t.boundingBox.clone()),t.boundingSphere!==null&&(this.boundingSphere=t.boundingSphere.clone()),this}getColorAt(t,e){e.fromArray(this.instanceColor.array,t*3)}getMatrixAt(t,e){e.fromArray(this.instanceMatrix.array,t*16)}raycast(t,e){let i=this.matrixWorld,s=this.count;if(ks.geometry=this.geometry,ks.material=this.material,ks.material!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),Hs.copy(this.boundingSphere),Hs.applyMatrix4(i),t.ray.intersectsSphere(Hs)!==!1))for(let r=0;r<s;r++){this.getMatrixAt(r,os),wh.multiplyMatrices(i,os),ks.matrixWorld=wh,ks.raycast(t,Or);for(let o=0,a=Or.length;o<a;o++){let c=Or[o];c.instanceId=r,c.object=this,e.push(c)}Or.length=0}}setColorAt(t,e){this.instanceColor===null&&(this.instanceColor=new $s(new Float32Array(this.instanceMatrix.count*3),3)),e.toArray(this.instanceColor.array,t*3)}setMatrixAt(t,e){e.toArray(this.instanceMatrix.array,t*16)}updateMorphTargets(){}dispose(){this.dispatchEvent({type:"dispose"})}};var Js=class extends Yn{constructor(t){super(),this.isPointsMaterial=!0,this.type="PointsMaterial",this.color=new Et(16777215),this.map=null,this.alphaMap=null,this.size=1,this.sizeAttenuation=!0,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.alphaMap=t.alphaMap,this.size=t.size,this.sizeAttenuation=t.sizeAttenuation,this.fog=t.fog,this}},Eh=new ve,ic=new Kr,Fr=new di,Br=new z,ua=class extends ke{constructor(t=new He,e=new Js){super(),this.isPoints=!0,this.type="Points",this.geometry=t,this.material=e,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}raycast(t,e){let i=this.geometry,s=this.matrixWorld,r=t.params.Points.threshold,o=i.drawRange;if(i.boundingSphere===null&&i.computeBoundingSphere(),Fr.copy(i.boundingSphere),Fr.applyMatrix4(s),Fr.radius+=r,t.ray.intersectsSphere(Fr)===!1)return;Eh.copy(s).invert(),ic.copy(t.ray).applyMatrix4(Eh);let a=r/((this.scale.x+this.scale.y+this.scale.z)/3),c=a*a,h=i.index,u=i.attributes.position;if(h!==null){let f=Math.max(0,o.start),p=Math.min(h.count,o.start+o.count);for(let g=f,x=p;g<x;g++){let m=h.getX(g);Br.fromBufferAttribute(u,m),Th(Br,m,c,s,t,e,this)}}else{let f=Math.max(0,o.start),p=Math.min(u.count,o.start+o.count);for(let g=f,x=p;g<x;g++)Br.fromBufferAttribute(u,g),Th(Br,g,c,s,t,e,this)}}updateMorphTargets(){let e=this.geometry.morphAttributes,i=Object.keys(e);if(i.length>0){let s=e[i[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,o=s.length;r<o;r++){let a=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=r}}}}};function Th(n,t,e,i,s,r,o){let a=ic.distanceSqToPoint(n);if(a<e){let c=new z;ic.closestPointToPoint(n,c),c.applyMatrix4(i);let h=s.ray.origin.distanceTo(c);if(h<s.near||h>s.far)return;r.push({distance:h,distanceToRay:Math.sqrt(a),point:c,index:t,face:null,object:o})}}var Te=class n extends He{constructor(t=1,e=1,i=1,s=32,r=1,o=!1,a=0,c=Math.PI*2){super(),this.type="CylinderGeometry",this.parameters={radiusTop:t,radiusBottom:e,height:i,radialSegments:s,heightSegments:r,openEnded:o,thetaStart:a,thetaLength:c};let h=this;s=Math.floor(s),r=Math.floor(r);let l=[],u=[],f=[],p=[],g=0,x=[],m=i/2,d=0;M(),o===!1&&(t>0&&y(!0),e>0&&y(!1)),this.setIndex(l),this.setAttribute("position",new oe(u,3)),this.setAttribute("normal",new oe(f,3)),this.setAttribute("uv",new oe(p,2));function M(){let E=new z,I=new z,A=0,R=(e-t)/i;for(let k=0;k<=r;k++){let v=[],w=k/r,O=w*(e-t)+t;for(let Z=0;Z<=s;Z++){let tt=Z/s,L=tt*c+a,F=Math.sin(L),Q=Math.cos(L);I.x=O*F,I.y=-w*i+m,I.z=O*Q,u.push(I.x,I.y,I.z),E.set(F,R,Q).normalize(),f.push(E.x,E.y,E.z),p.push(tt,1-w),v.push(g++)}x.push(v)}for(let k=0;k<s;k++)for(let v=0;v<r;v++){let w=x[v][k],O=x[v+1][k],Z=x[v+1][k+1],tt=x[v][k+1];l.push(w,O,tt),l.push(O,Z,tt),A+=6}h.addGroup(d,A,0),d+=A}function y(E){let I=g,A=new Jt,R=new z,k=0,v=E===!0?t:e,w=E===!0?1:-1;for(let Z=1;Z<=s;Z++)u.push(0,m*w,0),f.push(0,w,0),p.push(.5,.5),g++;let O=g;for(let Z=0;Z<=s;Z++){let L=Z/s*c+a,F=Math.cos(L),Q=Math.sin(L);R.x=v*Q,R.y=m*w,R.z=v*F,u.push(R.x,R.y,R.z),f.push(0,w,0),A.x=F*.5+.5,A.y=Q*.5*w+.5,p.push(A.x,A.y),g++}for(let Z=0;Z<s;Z++){let tt=I+Z,L=O+Z;E===!0?l.push(L,L+1,tt):l.push(L+1,L,tt),k+=3}h.addGroup(d,k,E===!0?1:2),d+=k}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new n(t.radiusTop,t.radiusBottom,t.height,t.radialSegments,t.heightSegments,t.openEnded,t.thetaStart,t.thetaLength)}},je=class n extends Te{constructor(t=1,e=1,i=32,s=1,r=!1,o=0,a=Math.PI*2){super(0,t,e,i,s,r,o,a),this.type="ConeGeometry",this.parameters={radius:t,height:e,radialSegments:i,heightSegments:s,openEnded:r,thetaStart:o,thetaLength:a}}static fromJSON(t){return new n(t.radius,t.height,t.radialSegments,t.heightSegments,t.openEnded,t.thetaStart,t.thetaLength)}},js=class n extends He{constructor(t=[],e=[],i=1,s=0){super(),this.type="PolyhedronGeometry",this.parameters={vertices:t,indices:e,radius:i,detail:s};let r=[],o=[];a(s),h(i),l(),this.setAttribute("position",new oe(r,3)),this.setAttribute("normal",new oe(r.slice(),3)),this.setAttribute("uv",new oe(o,2)),s===0?this.computeVertexNormals():this.normalizeNormals();function a(M){let y=new z,E=new z,I=new z;for(let A=0;A<e.length;A+=3)p(e[A+0],y),p(e[A+1],E),p(e[A+2],I),c(y,E,I,M)}function c(M,y,E,I){let A=I+1,R=[];for(let k=0;k<=A;k++){R[k]=[];let v=M.clone().lerp(E,k/A),w=y.clone().lerp(E,k/A),O=A-k;for(let Z=0;Z<=O;Z++)Z===0&&k===A?R[k][Z]=v:R[k][Z]=v.clone().lerp(w,Z/O)}for(let k=0;k<A;k++)for(let v=0;v<2*(A-k)-1;v++){let w=Math.floor(v/2);v%2===0?(f(R[k][w+1]),f(R[k+1][w]),f(R[k][w])):(f(R[k][w+1]),f(R[k+1][w+1]),f(R[k+1][w]))}}function h(M){let y=new z;for(let E=0;E<r.length;E+=3)y.x=r[E+0],y.y=r[E+1],y.z=r[E+2],y.normalize().multiplyScalar(M),r[E+0]=y.x,r[E+1]=y.y,r[E+2]=y.z}function l(){let M=new z;for(let y=0;y<r.length;y+=3){M.x=r[y+0],M.y=r[y+1],M.z=r[y+2];let E=m(M)/2/Math.PI+.5,I=d(M)/Math.PI+.5;o.push(E,1-I)}g(),u()}function u(){for(let M=0;M<o.length;M+=6){let y=o[M+0],E=o[M+2],I=o[M+4],A=Math.max(y,E,I),R=Math.min(y,E,I);A>.9&&R<.1&&(y<.2&&(o[M+0]+=1),E<.2&&(o[M+2]+=1),I<.2&&(o[M+4]+=1))}}function f(M){r.push(M.x,M.y,M.z)}function p(M,y){let E=M*3;y.x=t[E+0],y.y=t[E+1],y.z=t[E+2]}function g(){let M=new z,y=new z,E=new z,I=new z,A=new Jt,R=new Jt,k=new Jt;for(let v=0,w=0;v<r.length;v+=9,w+=6){M.set(r[v+0],r[v+1],r[v+2]),y.set(r[v+3],r[v+4],r[v+5]),E.set(r[v+6],r[v+7],r[v+8]),A.set(o[w+0],o[w+1]),R.set(o[w+2],o[w+3]),k.set(o[w+4],o[w+5]),I.copy(M).add(y).add(E).divideScalar(3);let O=m(I);x(A,w+0,M,O),x(R,w+2,y,O),x(k,w+4,E,O)}}function x(M,y,E,I){I<0&&M.x===1&&(o[y]=M.x-1),E.x===0&&E.z===0&&(o[y]=I/2/Math.PI+.5)}function m(M){return Math.atan2(M.z,-M.x)}function d(M){return Math.atan2(-M.y,Math.sqrt(M.x*M.x+M.z*M.z))}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new n(t.vertices,t.indices,t.radius,t.details)}},da=class n extends js{constructor(t=1,e=0){let i=(1+Math.sqrt(5))/2,s=1/i,r=[-1,-1,-1,-1,-1,1,-1,1,-1,-1,1,1,1,-1,-1,1,-1,1,1,1,-1,1,1,1,0,-s,-i,0,-s,i,0,s,-i,0,s,i,-s,-i,0,-s,i,0,s,-i,0,s,i,0,-i,0,-s,i,0,-s,-i,0,s,i,0,s],o=[3,11,7,3,7,15,3,15,13,7,19,17,7,17,6,7,6,15,17,4,8,17,8,10,17,10,6,8,0,16,8,16,2,8,2,10,0,12,1,0,1,18,0,18,16,6,10,2,6,2,13,6,13,15,2,16,18,2,18,3,2,3,13,18,1,9,18,9,11,18,11,3,4,14,12,4,12,0,4,0,8,11,9,5,11,5,19,11,19,7,19,5,14,19,14,4,19,4,17,1,12,14,1,14,5,1,5,9];super(r,o,t,e),this.type="DodecahedronGeometry",this.parameters={radius:t,detail:e}}static fromJSON(t){return new n(t.radius,t.detail)}};var Ln=class n extends js{constructor(t=1,e=0){let i=(1+Math.sqrt(5))/2,s=[-1,i,0,1,i,0,-1,-i,0,1,-i,0,0,-1,i,0,1,i,0,-1,-i,0,1,-i,i,0,-1,i,0,1,-i,0,-1,-i,0,1],r=[0,11,5,0,5,1,0,1,7,0,7,10,0,10,11,1,5,9,5,11,4,11,10,2,10,7,6,7,1,8,3,9,4,3,4,2,3,2,6,3,6,8,3,8,9,4,9,5,2,4,11,6,2,10,8,6,7,9,8,1];super(s,r,t,e),this.type="IcosahedronGeometry",this.parameters={radius:t,detail:e}}static fromJSON(t){return new n(t.radius,t.detail)}},_s=class n extends js{constructor(t=1,e=0){let i=[1,0,0,-1,0,0,0,1,0,0,-1,0,0,0,1,0,0,-1],s=[0,2,4,0,4,3,0,3,5,0,5,2,1,2,5,1,5,3,1,3,4,1,4,2];super(i,s,t,e),this.type="OctahedronGeometry",this.parameters={radius:t,detail:e}}static fromJSON(t){return new n(t.radius,t.detail)}},Ks=class n extends He{constructor(t=.5,e=1,i=32,s=1,r=0,o=Math.PI*2){super(),this.type="RingGeometry",this.parameters={innerRadius:t,outerRadius:e,thetaSegments:i,phiSegments:s,thetaStart:r,thetaLength:o},i=Math.max(3,i),s=Math.max(1,s);let a=[],c=[],h=[],l=[],u=t,f=(e-t)/s,p=new z,g=new Jt;for(let x=0;x<=s;x++){for(let m=0;m<=i;m++){let d=r+m/i*o;p.x=u*Math.cos(d),p.y=u*Math.sin(d),c.push(p.x,p.y,p.z),h.push(0,0,1),g.x=(p.x/e+1)/2,g.y=(p.y/e+1)/2,l.push(g.x,g.y)}u+=f}for(let x=0;x<s;x++){let m=x*(i+1);for(let d=0;d<i;d++){let M=d+m,y=M,E=M+i+1,I=M+i+2,A=M+1;a.push(y,E,A),a.push(E,I,A)}}this.setIndex(a),this.setAttribute("position",new oe(c,3)),this.setAttribute("normal",new oe(h,3)),this.setAttribute("uv",new oe(l,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new n(t.innerRadius,t.outerRadius,t.thetaSegments,t.phiSegments,t.thetaStart,t.thetaLength)}};var Qs=class n extends He{constructor(t=1,e=32,i=16,s=0,r=Math.PI*2,o=0,a=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:t,widthSegments:e,heightSegments:i,phiStart:s,phiLength:r,thetaStart:o,thetaLength:a},e=Math.max(3,Math.floor(e)),i=Math.max(2,Math.floor(i));let c=Math.min(o+a,Math.PI),h=0,l=[],u=new z,f=new z,p=[],g=[],x=[],m=[];for(let d=0;d<=i;d++){let M=[],y=d/i,E=0;d===0&&o===0?E=.5/e:d===i&&c===Math.PI&&(E=-.5/e);for(let I=0;I<=e;I++){let A=I/e;u.x=-t*Math.cos(s+A*r)*Math.sin(o+y*a),u.y=t*Math.cos(o+y*a),u.z=t*Math.sin(s+A*r)*Math.sin(o+y*a),g.push(u.x,u.y,u.z),f.copy(u).normalize(),x.push(f.x,f.y,f.z),m.push(A+E,1-y),M.push(h++)}l.push(M)}for(let d=0;d<i;d++)for(let M=0;M<e;M++){let y=l[d][M+1],E=l[d][M],I=l[d+1][M],A=l[d+1][M+1];(d!==0||o>0)&&p.push(y,E,A),(d!==i-1||c<Math.PI)&&p.push(E,I,A)}this.setIndex(p),this.setAttribute("position",new oe(g,3)),this.setAttribute("normal",new oe(x,3)),this.setAttribute("uv",new oe(m,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new n(t.radius,t.widthSegments,t.heightSegments,t.phiStart,t.phiLength,t.thetaStart,t.thetaLength)}};var fa=class n extends He{constructor(t=1,e=.4,i=12,s=48,r=Math.PI*2){super(),this.type="TorusGeometry",this.parameters={radius:t,tube:e,radialSegments:i,tubularSegments:s,arc:r},i=Math.floor(i),s=Math.floor(s);let o=[],a=[],c=[],h=[],l=new z,u=new z,f=new z;for(let p=0;p<=i;p++)for(let g=0;g<=s;g++){let x=g/s*r,m=p/i*Math.PI*2;u.x=(t+e*Math.cos(m))*Math.cos(x),u.y=(t+e*Math.cos(m))*Math.sin(x),u.z=e*Math.sin(m),a.push(u.x,u.y,u.z),l.x=t*Math.cos(x),l.y=t*Math.sin(x),f.subVectors(u,l).normalize(),c.push(f.x,f.y,f.z),h.push(g/s),h.push(p/i)}for(let p=1;p<=i;p++)for(let g=1;g<=s;g++){let x=(s+1)*p+g-1,m=(s+1)*(p-1)+g-1,d=(s+1)*(p-1)+g,M=(s+1)*p+g;o.push(x,m,M),o.push(m,d,M)}this.setIndex(o),this.setAttribute("position",new oe(a,3)),this.setAttribute("normal",new oe(c,3)),this.setAttribute("uv",new oe(h,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new n(t.radius,t.tube,t.radialSegments,t.tubularSegments,t.arc)}};var pa=class extends Yn{constructor(t){super(),this.isMeshPhongMaterial=!0,this.type="MeshPhongMaterial",this.color=new Et(16777215),this.specular=new Et(1118481),this.shininess=30,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new Et(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=yc,this.normalScale=new Jt(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.combine=Ma,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.specular.copy(t.specular),this.shininess=t.shininess,this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.emissive.copy(t.emissive),this.emissiveMap=t.emissiveMap,this.emissiveIntensity=t.emissiveIntensity,this.bumpMap=t.bumpMap,this.bumpScale=t.bumpScale,this.normalMap=t.normalMap,this.normalMapType=t.normalMapType,this.normalScale.copy(t.normalScale),this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.specularMap=t.specularMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.combine=t.combine,this.reflectivity=t.reflectivity,this.refractionRatio=t.refractionRatio,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.flatShading=t.flatShading,this.fog=t.fog,this}};var Ae=class extends Yn{constructor(t){super(),this.isMeshLambertMaterial=!0,this.type="MeshLambertMaterial",this.color=new Et(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new Et(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=yc,this.normalScale=new Jt(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.combine=Ma,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.emissive.copy(t.emissive),this.emissiveMap=t.emissiveMap,this.emissiveIntensity=t.emissiveIntensity,this.bumpMap=t.bumpMap,this.bumpScale=t.bumpScale,this.normalMap=t.normalMap,this.normalMapType=t.normalMapType,this.normalScale.copy(t.normalScale),this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.specularMap=t.specularMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.combine=t.combine,this.reflectivity=t.reflectivity,this.refractionRatio=t.refractionRatio,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.flatShading=t.flatShading,this.fog=t.fog,this}};function kr(n,t,e){return!n||!e&&n.constructor===t?n:typeof t.BYTES_PER_ELEMENT=="number"?new t(n):Array.prototype.slice.call(n)}function Og(n){return ArrayBuffer.isView(n)&&!(n instanceof DataView)}var vs=class{constructor(t,e,i,s){this.parameterPositions=t,this._cachedIndex=0,this.resultBuffer=s!==void 0?s:new e.constructor(i),this.sampleValues=e,this.valueSize=i,this.settings=null,this.DefaultSettings_={}}evaluate(t){let e=this.parameterPositions,i=this._cachedIndex,s=e[i],r=e[i-1];n:{t:{let o;e:{i:if(!(t<s)){for(let a=i+2;;){if(s===void 0){if(t<r)break i;return i=e.length,this._cachedIndex=i,this.copySampleValue_(i-1)}if(i===a)break;if(r=s,s=e[++i],t<s)break t}o=e.length;break e}if(!(t>=r)){let a=e[1];t<a&&(i=2,r=a);for(let c=i-2;;){if(r===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(i===c)break;if(s=r,r=e[--i-1],t>=r)break t}o=i,i=0;break e}break n}for(;i<o;){let a=i+o>>>1;t<e[a]?o=a:i=a+1}if(s=e[i],r=e[i-1],r===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(s===void 0)return i=e.length,this._cachedIndex=i,this.copySampleValue_(i-1)}this._cachedIndex=i,this.intervalChanged_(i,r,s)}return this.interpolate_(i,r,t,s)}getSettings_(){return this.settings||this.DefaultSettings_}copySampleValue_(t){let e=this.resultBuffer,i=this.sampleValues,s=this.valueSize,r=t*s;for(let o=0;o!==s;++o)e[o]=i[r+o];return e}interpolate_(){throw new Error("call to abstract method")}intervalChanged_(){}},sc=class extends vs{constructor(t,e,i,s){super(t,e,i,s),this._weightPrev=-0,this._offsetPrev=-0,this._weightNext=-0,this._offsetNext=-0,this.DefaultSettings_={endingStart:zl,endingEnd:zl}}intervalChanged_(t,e,i){let s=this.parameterPositions,r=t-2,o=t+1,a=s[r],c=s[o];if(a===void 0)switch(this.getSettings_().endingStart){case Dl:r=t,a=2*e-i;break;case Ul:r=s.length-2,a=e+s[r]-s[r+1];break;default:r=t,a=i}if(c===void 0)switch(this.getSettings_().endingEnd){case Dl:o=t,c=2*i-e;break;case Ul:o=1,c=i+s[1]-s[0];break;default:o=t-1,c=e}let h=(i-e)*.5,l=this.valueSize;this._weightPrev=h/(e-a),this._weightNext=h/(c-i),this._offsetPrev=r*l,this._offsetNext=o*l}interpolate_(t,e,i,s){let r=this.resultBuffer,o=this.sampleValues,a=this.valueSize,c=t*a,h=c-a,l=this._offsetPrev,u=this._offsetNext,f=this._weightPrev,p=this._weightNext,g=(i-e)/(s-e),x=g*g,m=x*g,d=-f*m+2*f*x-f*g,M=(1+f)*m+(-1.5-2*f)*x+(-.5+f)*g+1,y=(-1-p)*m+(1.5+p)*x+.5*g,E=p*m-p*x;for(let I=0;I!==a;++I)r[I]=d*o[l+I]+M*o[h+I]+y*o[c+I]+E*o[u+I];return r}},rc=class extends vs{constructor(t,e,i,s){super(t,e,i,s)}interpolate_(t,e,i,s){let r=this.resultBuffer,o=this.sampleValues,a=this.valueSize,c=t*a,h=c-a,l=(i-e)/(s-e),u=1-l;for(let f=0;f!==a;++f)r[f]=o[h+f]*u+o[c+f]*l;return r}},ac=class extends vs{constructor(t,e,i,s){super(t,e,i,s)}interpolate_(t){return this.copySampleValue_(t-1)}},En=class{constructor(t,e,i,s){if(t===void 0)throw new Error("THREE.KeyframeTrack: track name is undefined");if(e===void 0||e.length===0)throw new Error("THREE.KeyframeTrack: no keyframes in track named "+t);this.name=t,this.times=kr(e,this.TimeBufferType),this.values=kr(i,this.ValueBufferType),this.setInterpolation(s||this.DefaultInterpolation)}static toJSON(t){let e=t.constructor,i;if(e.toJSON!==this.toJSON)i=e.toJSON(t);else{i={name:t.name,times:kr(t.times,Array),values:kr(t.values,Array)};let s=t.getInterpolation();s!==t.DefaultInterpolation&&(i.interpolation=s)}return i.type=t.ValueTypeName,i}InterpolantFactoryMethodDiscrete(t){return new ac(this.times,this.values,this.getValueSize(),t)}InterpolantFactoryMethodLinear(t){return new rc(this.times,this.values,this.getValueSize(),t)}InterpolantFactoryMethodSmooth(t){return new sc(this.times,this.values,this.getValueSize(),t)}setInterpolation(t){let e;switch(t){case Gr:e=this.InterpolantFactoryMethodDiscrete;break;case Vr:e=this.InterpolantFactoryMethodLinear;break;case ro:e=this.InterpolantFactoryMethodSmooth;break}if(e===void 0){let i="unsupported interpolation for "+this.ValueTypeName+" keyframe track named "+this.name;if(this.createInterpolant===void 0)if(t!==this.DefaultInterpolation)this.setInterpolation(this.DefaultInterpolation);else throw new Error(i);return console.warn("THREE.KeyframeTrack:",i),this}return this.createInterpolant=e,this}getInterpolation(){switch(this.createInterpolant){case this.InterpolantFactoryMethodDiscrete:return Gr;case this.InterpolantFactoryMethodLinear:return Vr;case this.InterpolantFactoryMethodSmooth:return ro}}getValueSize(){return this.values.length/this.times.length}shift(t){if(t!==0){let e=this.times;for(let i=0,s=e.length;i!==s;++i)e[i]+=t}return this}scale(t){if(t!==1){let e=this.times;for(let i=0,s=e.length;i!==s;++i)e[i]*=t}return this}trim(t,e){let i=this.times,s=i.length,r=0,o=s-1;for(;r!==s&&i[r]<t;)++r;for(;o!==-1&&i[o]>e;)--o;if(++o,r!==0||o!==s){r>=o&&(o=Math.max(o,1),r=o-1);let a=this.getValueSize();this.times=i.slice(r,o),this.values=this.values.slice(r*a,o*a)}return this}validate(){let t=!0,e=this.getValueSize();e-Math.floor(e)!==0&&(console.error("THREE.KeyframeTrack: Invalid value size in track.",this),t=!1);let i=this.times,s=this.values,r=i.length;r===0&&(console.error("THREE.KeyframeTrack: Track is empty.",this),t=!1);let o=null;for(let a=0;a!==r;a++){let c=i[a];if(typeof c=="number"&&isNaN(c)){console.error("THREE.KeyframeTrack: Time is not a valid number.",this,a,c),t=!1;break}if(o!==null&&o>c){console.error("THREE.KeyframeTrack: Out of order keys.",this,a,c,o),t=!1;break}o=c}if(s!==void 0&&Og(s))for(let a=0,c=s.length;a!==c;++a){let h=s[a];if(isNaN(h)){console.error("THREE.KeyframeTrack: Value is not a valid number.",this,a,h),t=!1;break}}return t}optimize(){let t=this.times.slice(),e=this.values.slice(),i=this.getValueSize(),s=this.getInterpolation()===ro,r=t.length-1,o=1;for(let a=1;a<r;++a){let c=!1,h=t[a],l=t[a+1];if(h!==l&&(a!==1||h!==t[0]))if(s)c=!0;else{let u=a*i,f=u-i,p=u+i;for(let g=0;g!==i;++g){let x=e[u+g];if(x!==e[f+g]||x!==e[p+g]){c=!0;break}}}if(c){if(a!==o){t[o]=t[a];let u=a*i,f=o*i;for(let p=0;p!==i;++p)e[f+p]=e[u+p]}++o}}if(r>0){t[o]=t[r];for(let a=r*i,c=o*i,h=0;h!==i;++h)e[c+h]=e[a+h];++o}return o!==t.length?(this.times=t.slice(0,o),this.values=e.slice(0,o*i)):(this.times=t,this.values=e),this}clone(){let t=this.times.slice(),e=this.values.slice(),i=this.constructor,s=new i(this.name,t,e);return s.createInterpolant=this.createInterpolant,s}};En.prototype.TimeBufferType=Float32Array;En.prototype.ValueBufferType=Float32Array;En.prototype.DefaultInterpolation=Vr;var Ii=class extends En{};Ii.prototype.ValueTypeName="bool";Ii.prototype.ValueBufferType=Array;Ii.prototype.DefaultInterpolation=Gr;Ii.prototype.InterpolantFactoryMethodLinear=void 0;Ii.prototype.InterpolantFactoryMethodSmooth=void 0;var oc=class extends En{};oc.prototype.ValueTypeName="color";var cc=class extends En{};cc.prototype.ValueTypeName="number";var lc=class extends vs{constructor(t,e,i,s){super(t,e,i,s)}interpolate_(t,e,i,s){let r=this.resultBuffer,o=this.sampleValues,a=this.valueSize,c=(i-e)/(s-e),h=t*a;for(let l=h+a;h!==l;h+=4)ui.slerpFlat(r,0,o,h-a,o,h,c);return r}},tr=class extends En{InterpolantFactoryMethodLinear(t){return new lc(this.times,this.values,this.getValueSize(),t)}};tr.prototype.ValueTypeName="quaternion";tr.prototype.DefaultInterpolation=Vr;tr.prototype.InterpolantFactoryMethodSmooth=void 0;var Li=class extends En{};Li.prototype.ValueTypeName="string";Li.prototype.ValueBufferType=Array;Li.prototype.DefaultInterpolation=Gr;Li.prototype.InterpolantFactoryMethodLinear=void 0;Li.prototype.InterpolantFactoryMethodSmooth=void 0;var hc=class extends En{};hc.prototype.ValueTypeName="vector";var uc=class{constructor(t,e,i){let s=this,r=!1,o=0,a=0,c,h=[];this.onStart=void 0,this.onLoad=t,this.onProgress=e,this.onError=i,this.itemStart=function(l){a++,r===!1&&s.onStart!==void 0&&s.onStart(l,o,a),r=!0},this.itemEnd=function(l){o++,s.onProgress!==void 0&&s.onProgress(l,o,a),o===a&&(r=!1,s.onLoad!==void 0&&s.onLoad())},this.itemError=function(l){s.onError!==void 0&&s.onError(l)},this.resolveURL=function(l){return c?c(l):l},this.setURLModifier=function(l){return c=l,this},this.addHandler=function(l,u){return h.push(l,u),this},this.removeHandler=function(l){let u=h.indexOf(l);return u!==-1&&h.splice(u,2),this},this.getHandler=function(l){for(let u=0,f=h.length;u<f;u+=2){let p=h[u],g=h[u+1];if(p.global&&(p.lastIndex=0),p.test(l))return g}return null}}},Fg=new uc,dc=class{constructor(t){this.manager=t!==void 0?t:Fg,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={}}load(){}loadAsync(t,e){let i=this;return new Promise(function(s,r){i.load(t,s,e,r)})}parse(){}setCrossOrigin(t){return this.crossOrigin=t,this}setWithCredentials(t){return this.withCredentials=t,this}setPath(t){return this.path=t,this}setResourcePath(t){return this.resourcePath=t,this}setRequestHeader(t){return this.requestHeader=t,this}};dc.DEFAULT_MATERIAL_NAME="__DEFAULT";var er=class extends ke{constructor(t,e=1){super(),this.isLight=!0,this.type="Light",this.color=new Et(t),this.intensity=e}dispose(){}copy(t,e){return super.copy(t,e),this.color.copy(t.color),this.intensity=t.intensity,this}toJSON(t){let e=super.toJSON(t);return e.object.color=this.color.getHex(),e.object.intensity=this.intensity,this.groundColor!==void 0&&(e.object.groundColor=this.groundColor.getHex()),this.distance!==void 0&&(e.object.distance=this.distance),this.angle!==void 0&&(e.object.angle=this.angle),this.decay!==void 0&&(e.object.decay=this.decay),this.penumbra!==void 0&&(e.object.penumbra=this.penumbra),this.shadow!==void 0&&(e.object.shadow=this.shadow.toJSON()),e}},ma=class extends er{constructor(t,e,i){super(t,i),this.isHemisphereLight=!0,this.type="HemisphereLight",this.position.copy(ke.DEFAULT_UP),this.updateMatrix(),this.groundColor=new Et(e)}copy(t,e){return super.copy(t,e),this.groundColor.copy(t.groundColor),this}},Io=new ve,Ah=new z,Rh=new z,ga=class{constructor(t){this.camera=t,this.bias=0,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new Jt(512,512),this.map=null,this.mapPass=null,this.matrix=new ve,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new Ys,this._frameExtents=new Jt(1,1),this._viewportCount=1,this._viewports=[new ye(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(t){let e=this.camera,i=this.matrix;Ah.setFromMatrixPosition(t.matrixWorld),e.position.copy(Ah),Rh.setFromMatrixPosition(t.target.matrixWorld),e.lookAt(Rh),e.updateMatrixWorld(),Io.multiplyMatrices(e.projectionMatrix,e.matrixWorldInverse),this._frustum.setFromProjectionMatrix(Io),i.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),i.multiply(Io)}getViewport(t){return this._viewports[t]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(t){return this.camera=t.camera.clone(),this.bias=t.bias,this.radius=t.radius,this.mapSize.copy(t.mapSize),this}clone(){return new this.constructor().copy(this)}toJSON(){let t={};return this.bias!==0&&(t.bias=this.bias),this.normalBias!==0&&(t.normalBias=this.normalBias),this.radius!==1&&(t.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(t.mapSize=this.mapSize.toArray()),t.camera=this.camera.toJSON(!1).object,delete t.camera.matrix,t}};var Ch=new ve,Gs=new z,Lo=new z,fc=class extends ga{constructor(){super(new $e(90,1,.5,500)),this.isPointLightShadow=!0,this._frameExtents=new Jt(4,2),this._viewportCount=6,this._viewports=[new ye(2,1,1,1),new ye(0,1,1,1),new ye(3,1,1,1),new ye(1,1,1,1),new ye(3,0,1,1),new ye(1,0,1,1)],this._cubeDirections=[new z(1,0,0),new z(-1,0,0),new z(0,0,1),new z(0,0,-1),new z(0,1,0),new z(0,-1,0)],this._cubeUps=[new z(0,1,0),new z(0,1,0),new z(0,1,0),new z(0,1,0),new z(0,0,1),new z(0,0,-1)]}updateMatrices(t,e=0){let i=this.camera,s=this.matrix,r=t.distance||i.far;r!==i.far&&(i.far=r,i.updateProjectionMatrix()),Gs.setFromMatrixPosition(t.matrixWorld),i.position.copy(Gs),Lo.copy(i.position),Lo.add(this._cubeDirections[e]),i.up.copy(this._cubeUps[e]),i.lookAt(Lo),i.updateMatrixWorld(),s.makeTranslation(-Gs.x,-Gs.y,-Gs.z),Ch.multiplyMatrices(i.projectionMatrix,i.matrixWorldInverse),this._frustum.setFromProjectionMatrix(Ch)}},xa=class extends er{constructor(t,e,i=0,s=2){super(t,e),this.isPointLight=!0,this.type="PointLight",this.distance=i,this.decay=s,this.shadow=new fc}get power(){return this.intensity*4*Math.PI}set power(t){this.intensity=t/(4*Math.PI)}dispose(){this.shadow.dispose()}copy(t,e){return super.copy(t,e),this.distance=t.distance,this.decay=t.decay,this.shadow=t.shadow.clone(),this}},pc=class extends ga{constructor(){super(new ra(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}},ya=class extends er{constructor(t,e){super(t,e),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(ke.DEFAULT_UP),this.updateMatrix(),this.target=new ke,this.shadow=new pc}dispose(){this.shadow.dispose()}copy(t){return super.copy(t),this.target=t.target.clone(),this.shadow=t.shadow.clone(),this}};var _a=class{constructor(t=!0){this.autoStart=t,this.startTime=0,this.oldTime=0,this.elapsedTime=0,this.running=!1}start(){this.startTime=Ph(),this.oldTime=this.startTime,this.elapsedTime=0,this.running=!0}stop(){this.getElapsedTime(),this.running=!1,this.autoStart=!1}getElapsedTime(){return this.getDelta(),this.elapsedTime}getDelta(){let t=0;if(this.autoStart&&!this.running)return this.start(),0;if(this.running){let e=Ph();t=(e-this.oldTime)/1e3,this.oldTime=e,this.elapsedTime+=t}return t}};function Ph(){return(typeof performance=="undefined"?Date:performance).now()}var Mc="\\[\\]\\.:\\/",Bg=new RegExp("["+Mc+"]","g"),bc="[^"+Mc+"]",kg="[^"+Mc.replace("\\.","")+"]",Hg=/((?:WC+[\/:])*)/.source.replace("WC",bc),Gg=/(WCOD+)?/.source.replace("WCOD",kg),Vg=/(?:\.(WC+)(?:\[(.+)\])?)?/.source.replace("WC",bc),Wg=/\.(WC+)(?:\[(.+)\])?/.source.replace("WC",bc),Xg=new RegExp("^"+Hg+Gg+Vg+Wg+"$"),qg=["material","materials","bones","map"],mc=class{constructor(t,e,i){let s=i||xe.parseTrackName(e);this._targetGroup=t,this._bindings=t.subscribe_(e,s)}getValue(t,e){this.bind();let i=this._targetGroup.nCachedObjects_,s=this._bindings[i];s!==void 0&&s.getValue(t,e)}setValue(t,e){let i=this._bindings;for(let s=this._targetGroup.nCachedObjects_,r=i.length;s!==r;++s)i[s].setValue(t,e)}bind(){let t=this._bindings;for(let e=this._targetGroup.nCachedObjects_,i=t.length;e!==i;++e)t[e].bind()}unbind(){let t=this._bindings;for(let e=this._targetGroup.nCachedObjects_,i=t.length;e!==i;++e)t[e].unbind()}},xe=class n{constructor(t,e,i){this.path=e,this.parsedPath=i||n.parseTrackName(e),this.node=n.findNode(t,this.parsedPath.nodeName),this.rootNode=t,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}static create(t,e,i){return t&&t.isAnimationObjectGroup?new n.Composite(t,e,i):new n(t,e,i)}static sanitizeNodeName(t){return t.replace(/\s/g,"_").replace(Bg,"")}static parseTrackName(t){let e=Xg.exec(t);if(e===null)throw new Error("PropertyBinding: Cannot parse trackName: "+t);let i={nodeName:e[2],objectName:e[3],objectIndex:e[4],propertyName:e[5],propertyIndex:e[6]},s=i.nodeName&&i.nodeName.lastIndexOf(".");if(s!==void 0&&s!==-1){let r=i.nodeName.substring(s+1);qg.indexOf(r)!==-1&&(i.nodeName=i.nodeName.substring(0,s),i.objectName=r)}if(i.propertyName===null||i.propertyName.length===0)throw new Error("PropertyBinding: can not parse propertyName from trackName: "+t);return i}static findNode(t,e){if(e===void 0||e===""||e==="."||e===-1||e===t.name||e===t.uuid)return t;if(t.skeleton){let i=t.skeleton.getBoneByName(e);if(i!==void 0)return i}if(t.children){let i=function(r){for(let o=0;o<r.length;o++){let a=r[o];if(a.name===e||a.uuid===e)return a;let c=i(a.children);if(c)return c}return null},s=i(t.children);if(s)return s}return null}_getValue_unavailable(){}_setValue_unavailable(){}_getValue_direct(t,e){t[e]=this.targetObject[this.propertyName]}_getValue_array(t,e){let i=this.resolvedProperty;for(let s=0,r=i.length;s!==r;++s)t[e++]=i[s]}_getValue_arrayElement(t,e){t[e]=this.resolvedProperty[this.propertyIndex]}_getValue_toArray(t,e){this.resolvedProperty.toArray(t,e)}_setValue_direct(t,e){this.targetObject[this.propertyName]=t[e]}_setValue_direct_setNeedsUpdate(t,e){this.targetObject[this.propertyName]=t[e],this.targetObject.needsUpdate=!0}_setValue_direct_setMatrixWorldNeedsUpdate(t,e){this.targetObject[this.propertyName]=t[e],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_array(t,e){let i=this.resolvedProperty;for(let s=0,r=i.length;s!==r;++s)i[s]=t[e++]}_setValue_array_setNeedsUpdate(t,e){let i=this.resolvedProperty;for(let s=0,r=i.length;s!==r;++s)i[s]=t[e++];this.targetObject.needsUpdate=!0}_setValue_array_setMatrixWorldNeedsUpdate(t,e){let i=this.resolvedProperty;for(let s=0,r=i.length;s!==r;++s)i[s]=t[e++];this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_arrayElement(t,e){this.resolvedProperty[this.propertyIndex]=t[e]}_setValue_arrayElement_setNeedsUpdate(t,e){this.resolvedProperty[this.propertyIndex]=t[e],this.targetObject.needsUpdate=!0}_setValue_arrayElement_setMatrixWorldNeedsUpdate(t,e){this.resolvedProperty[this.propertyIndex]=t[e],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_fromArray(t,e){this.resolvedProperty.fromArray(t,e)}_setValue_fromArray_setNeedsUpdate(t,e){this.resolvedProperty.fromArray(t,e),this.targetObject.needsUpdate=!0}_setValue_fromArray_setMatrixWorldNeedsUpdate(t,e){this.resolvedProperty.fromArray(t,e),this.targetObject.matrixWorldNeedsUpdate=!0}_getValue_unbound(t,e){this.bind(),this.getValue(t,e)}_setValue_unbound(t,e){this.bind(),this.setValue(t,e)}bind(){let t=this.node,e=this.parsedPath,i=e.objectName,s=e.propertyName,r=e.propertyIndex;if(t||(t=n.findNode(this.rootNode,e.nodeName),this.node=t),this.getValue=this._getValue_unavailable,this.setValue=this._setValue_unavailable,!t){console.warn("THREE.PropertyBinding: No target node found for track: "+this.path+".");return}if(i){let h=e.objectIndex;switch(i){case"materials":if(!t.material){console.error("THREE.PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!t.material.materials){console.error("THREE.PropertyBinding: Can not bind to material.materials as node.material does not have a materials array.",this);return}t=t.material.materials;break;case"bones":if(!t.skeleton){console.error("THREE.PropertyBinding: Can not bind to bones as node does not have a skeleton.",this);return}t=t.skeleton.bones;for(let l=0;l<t.length;l++)if(t[l].name===h){h=l;break}break;case"map":if("map"in t){t=t.map;break}if(!t.material){console.error("THREE.PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!t.material.map){console.error("THREE.PropertyBinding: Can not bind to material.map as node.material does not have a map.",this);return}t=t.material.map;break;default:if(t[i]===void 0){console.error("THREE.PropertyBinding: Can not bind to objectName of node undefined.",this);return}t=t[i]}if(h!==void 0){if(t[h]===void 0){console.error("THREE.PropertyBinding: Trying to bind to objectIndex of objectName, but is undefined.",this,t);return}t=t[h]}}let o=t[s];if(o===void 0){let h=e.nodeName;console.error("THREE.PropertyBinding: Trying to update property for track: "+h+"."+s+" but it wasn't found.",t);return}let a=this.Versioning.None;this.targetObject=t,t.needsUpdate!==void 0?a=this.Versioning.NeedsUpdate:t.matrixWorldNeedsUpdate!==void 0&&(a=this.Versioning.MatrixWorldNeedsUpdate);let c=this.BindingType.Direct;if(r!==void 0){if(s==="morphTargetInfluences"){if(!t.geometry){console.error("THREE.PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.",this);return}if(!t.geometry.morphAttributes){console.error("THREE.PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.morphAttributes.",this);return}t.morphTargetDictionary[r]!==void 0&&(r=t.morphTargetDictionary[r])}c=this.BindingType.ArrayElement,this.resolvedProperty=o,this.propertyIndex=r}else o.fromArray!==void 0&&o.toArray!==void 0?(c=this.BindingType.HasFromToArray,this.resolvedProperty=o):Array.isArray(o)?(c=this.BindingType.EntireArray,this.resolvedProperty=o):this.propertyName=s;this.getValue=this.GetterByBindingType[c],this.setValue=this.SetterByBindingTypeAndVersioning[c][a]}unbind(){this.node=null,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}};xe.Composite=mc;xe.prototype.BindingType={Direct:0,EntireArray:1,ArrayElement:2,HasFromToArray:3};xe.prototype.Versioning={None:0,NeedsUpdate:1,MatrixWorldNeedsUpdate:2};xe.prototype.GetterByBindingType=[xe.prototype._getValue_direct,xe.prototype._getValue_array,xe.prototype._getValue_arrayElement,xe.prototype._getValue_toArray];xe.prototype.SetterByBindingTypeAndVersioning=[[xe.prototype._setValue_direct,xe.prototype._setValue_direct_setNeedsUpdate,xe.prototype._setValue_direct_setMatrixWorldNeedsUpdate],[xe.prototype._setValue_array,xe.prototype._setValue_array_setNeedsUpdate,xe.prototype._setValue_array_setMatrixWorldNeedsUpdate],[xe.prototype._setValue_arrayElement,xe.prototype._setValue_arrayElement_setNeedsUpdate,xe.prototype._setValue_arrayElement_setMatrixWorldNeedsUpdate],[xe.prototype._setValue_fromArray,xe.prototype._setValue_fromArray_setNeedsUpdate,xe.prototype._setValue_fromArray_setMatrixWorldNeedsUpdate]];var iy=new Float32Array(1);typeof __THREE_DEVTOOLS__!="undefined"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:gc}}));typeof window!="undefined"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=gc);function ir(n,t=!1){let e=n[0].index!==null,i=new Set(Object.keys(n[0].attributes)),s=new Set(Object.keys(n[0].morphAttributes)),r={},o={},a=n[0].morphTargetsRelative,c=new He,h=0;for(let l=0;l<n.length;++l){let u=n[l],f=0;if(e!==(u.index!==null))return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+l+". All geometries must have compatible attributes; make sure index attribute exists among all geometries, or in none of them."),null;for(let p in u.attributes){if(!i.has(p))return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+l+'. All geometries must have compatible attributes; make sure "'+p+'" attribute exists among all geometries, or in none of them.'),null;r[p]===void 0&&(r[p]=[]),r[p].push(u.attributes[p]),f++}if(f!==i.size)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+l+". Make sure all geometries have the same number of attributes."),null;if(a!==u.morphTargetsRelative)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+l+". .morphTargetsRelative must be consistent throughout all geometries."),null;for(let p in u.morphAttributes){if(!s.has(p))return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+l+".  .morphAttributes must be consistent throughout all geometries."),null;o[p]===void 0&&(o[p]=[]),o[p].push(u.morphAttributes[p])}if(t){let p;if(e)p=u.index.count;else if(u.attributes.position!==void 0)p=u.attributes.position.count;else return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+l+". The geometry must have either an index or a position attribute"),null;c.addGroup(h,p,l),h+=p}}if(e){let l=0,u=[];for(let f=0;f<n.length;++f){let p=n[f].index;for(let g=0;g<p.count;++g)u.push(p.getX(g)+l);l+=n[f].attributes.position.count}c.setIndex(u)}for(let l in r){let u=Jh(r[l]);if(!u)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed while trying to merge the "+l+" attribute."),null;c.setAttribute(l,u)}for(let l in o){let u=o[l][0].length;if(u===0)break;c.morphAttributes=c.morphAttributes||{},c.morphAttributes[l]=[];for(let f=0;f<u;++f){let p=[];for(let x=0;x<o[l].length;++x)p.push(o[l][x][f]);let g=Jh(p);if(!g)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed while trying to merge the "+l+" morphAttribute."),null;c.morphAttributes[l].push(g)}}return c}function Jh(n){let t,e,i,s=-1,r=0;for(let h=0;h<n.length;++h){let l=n[h];if(l.isInterleavedBufferAttribute)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. InterleavedBufferAttributes are not supported."),null;if(t===void 0&&(t=l.array.constructor),t!==l.array.constructor)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.array must be of consistent array types across matching attributes."),null;if(e===void 0&&(e=l.itemSize),e!==l.itemSize)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.itemSize must be consistent across matching attributes."),null;if(i===void 0&&(i=l.normalized),i!==l.normalized)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.normalized must be consistent across matching attributes."),null;if(s===-1&&(s=l.gpuType),s!==l.gpuType)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.gpuType must be consistent across matching attributes."),null;r+=l.array.length}let o=new t(r),a=0;for(let h=0;h<n.length;++h)o.set(n[h].array,a),a+=n[h].array.length;let c=new Be(o,e,i);return s!==void 0&&(c.gpuType=s),c}function Ea(n,t,e=0){let i=Math.imul(n|0,374761393)^Math.imul(t|0,668265263)^Math.imul(e|0,1442695041);return i=Math.imul(i^i>>>13,1274126177),i^=i>>>16,(i>>>0)/4294967296}function Yg(n,t,e){let i=Math.floor(n),s=Math.floor(t),r=n-i,o=t-s,a=r*r*(3-2*r),c=o*o*(3-2*o),h=Ea(i,s,e),l=Ea(i+1,s,e),u=Ea(i,s+1,e),f=Ea(i+1,s+1,e);return h+(l-h)*a+(u-h)*c+(h-l-u+f)*a*c}function bs(n,t,e=4,i=0){let s=0,r=.5,o=1,a=0;for(let c=0;c<e;c++)s+=r*Yg(n*o,t*o,i+c*17),a+=r,r*=.5,o*=2;return s/a}function Ta(n){return function(){n|=0,n=n+1831565813|0;let t=Math.imul(n^n>>>15,1|n);return t=t+Math.imul(t^t>>>7,61|t)^t,((t^t>>>14)>>>0)/4294967296}}var pi=210,dt={village:{x:0,z:0},herbalist:{x:-48,z:-30},camp:{x:-80,z:-112},ruins:{x:118,z:-100},lake:{x:-95,z:72},house:{x:44,z:62},crossroad:{x:54,z:-50}},Kh=[[[0,0],[-30,-40],[-80,-112]],[[0,0],[52,-52],[118,-100]],[[0,0],[44,62]],[[0,0],[-48,-30]],[[0,0],[-55,45],[-75,52]]],Rc=(n,t,e)=>{let i=Math.max(0,Math.min(1,(e-n)/(t-n)));return i*i*(3-2*i)};function Zg(n,t,e,i,s,r){let o=s-e,a=r-i,c=((n-e)*o+(t-i)*a)/(o*o+a*a);c=Math.max(0,Math.min(1,c));let h=e+o*c-n,l=i+a*c-t;return Math.sqrt(h*h+l*l)}function fi(n,t){let e=1e9;for(let i of Kh)for(let s=0;s<i.length-1;s++){let r=Zg(n,t,i[s][0],i[s][1],i[s+1][0],i[s+1][1]);r<e&&(e=r)}return e}function ws(n,t){let e=(bs(n*.011+50,t*.011+50,4,1)-.5)*26+(bs(n*.06,t*.06,2,9)-.5)*2.5+2.5,i=Math.max(Math.abs(n),Math.abs(t));return i>150&&(e+=Math.pow((i-150)/40,2)*45),e+=8*Math.exp(-((n-dt.house.x)**2+(t-dt.house.z)**2)/(2*16*16)),e}function zi(n,t,e,i,s,r,o){let a=Math.hypot(t-i.x,e-i.z);return a>=r?n:o+(n-o)*Rc(s,r,a)}var $n={};function Ec(){return $n.ok||($n.camp=Math.max(2,ws(dt.camp.x,dt.camp.z)),$n.ruins=Math.max(3,ws(dt.ruins.x,dt.ruins.z))+1.5,$n.herb=Math.max(2,ws(dt.herbalist.x,dt.herbalist.z)),$n.house=ws(dt.house.x,dt.house.z),$n.cross=Math.max(1.5,ws(dt.crossroad.x,dt.crossroad.z)),$n.ok=!0),$n}function Kt(n,t){let e=Ec(),i=ws(n,t);if(i=zi(i,n,t,dt.lake,16,46,-4),i=zi(i,n,t,dt.village,30,48,2.5),i=zi(i,n,t,dt.camp,14,26,e.camp),i=zi(i,n,t,dt.ruins,18,32,e.ruins),i=zi(i,n,t,dt.herbalist,6,13,e.herb),i=zi(i,n,t,dt.house,7,12,e.house),i=zi(i,n,t,dt.crossroad,5,10,e.cross),i<.8){let s=fi(n,t);s<7&&(i=i+(.8-i)*(1-Rc(3,7,s)))}return i}function Di(n,t){let e=bs(n*.018+11,t*.018-7,3,21);return e+=.28*Math.max(0,Math.min(1,-(n+t)/120)),e}var Tc=class{constructor(){this.grid=new Map,this.cell=10}_ins(t,e){let i=this.cell;for(let s=Math.floor((t.x-e)/i);s<=Math.floor((t.x+e)/i);s++)for(let r=Math.floor((t.z-e)/i);r<=Math.floor((t.z+e)/i);r++){let o=s*1e3+r,a=this.grid.get(o);a||(a=[],this.grid.set(o,a)),a.push(t)}}addCircle(t,e,i){this._ins({x:t,z:e,r:i},i)}addBox(t,e,i,s,r=0){this._ins({x:t,z:e,hw:i,hd:s,c:Math.cos(r),s:Math.sin(r),box:!0},Math.hypot(i,s))}blocked(t,e){let i=this.grid.get(Math.floor(t/this.cell)*1e3+Math.floor(e/this.cell));if(!i)return!1;for(let s of i)if(s.box){let r=t-s.x,o=e-s.z,a=r*s.c-o*s.s,c=r*s.s+o*s.c;if(Math.abs(a)<s.hw+.3&&Math.abs(c)<s.hd+.3)return!0}else if(s.r>1.5&&Math.hypot(t-s.x,e-s.z)<s.r)return!0;return!1}resolve(t,e){let i=this.cell,s=Math.floor(t.x/i),r=Math.floor(t.z/i),o=!1;for(let a=-1;a<=1;a++)for(let c=-1;c<=1;c++){let h=this.grid.get((s+a)*1e3+(r+c));if(h)for(let l of h)if(l.box){let u=t.x-l.x,f=t.z-l.z,p=u*l.c-f*l.s,g=u*l.s+f*l.c,x=Math.max(-l.hw,Math.min(p,l.hw)),m=Math.max(-l.hd,Math.min(g,l.hd)),d=p-x,M=g-m,y=d*d+M*M;if(y<e*e){let E,I;if(y>1e-8){let A=Math.sqrt(y);E=x+d/A*e,I=m+M/A*e}else{let A=Math.min(l.hw-p,p+l.hw,l.hd-g,g+l.hd);E=p,I=g,A===l.hw-p?E=l.hw+e:A===p+l.hw?E=-l.hw-e:A===l.hd-g?I=l.hd+e:I=-l.hd-e}t.x=l.x+E*l.c+I*l.s,t.z=l.z-E*l.s+I*l.c,o=!0}}else{let u=t.x-l.x,f=t.z-l.z,p=e+l.r,g=u*u+f*f;if(g<p*p&&g>1e-8){let x=Math.sqrt(g);t.x=l.x+u/x*p,t.z=l.z+f/x*p,o=!0}}}return o}},jh=new Map;function te(n,t){let e=n+(t?JSON.stringify(t):""),i=jh.get(e);return i||(i=new Ae({color:n,...t||{}}),jh.set(e,i)),i}function dn(n,t){n=n.index?n.toNonIndexed():n;let e=new Et(t),i=n.attributes.position.count,s=new Float32Array(i*3);for(let r=0;r<i;r++)s[r*3]=e.r,s[r*3+1]=e.g,s[r*3+2]=e.b;return n.setAttribute("color",new Be(s,3)),n.attributes.uv&&n.deleteAttribute("uv"),n}function Ac(n,t,e,i=.4){let s=n/2+i,r=t/2+i,o=[-s,0,-r],a=[s,0,-r],c=[s,0,r],h=[-s,0,r],l=[-s,e,0],u=[s,e,0],f=[h,c,u,h,u,l,a,o,l,a,l,u,o,h,l,c,a,u],p=new He;return p.setAttribute("position",new oe(f.flat(),3)),p.computeVertexNormals(),p}function Nt(n,t,e=0,i=0,s=0,r){let o=new Mt(n,t);return o.position.set(e,i,s),o.castShadow=!0,o.receiveShadow=!0,r&&r.add(o),o}var Aa=new Ae({color:3813151,emissive:16757575,emissiveIntensity:0}),Ss=[];function Sc(n,t){var c,h,l,u,f,p;let e=new Qt,i=n.w,s=n.d,r=(c=n.h)!=null?c:3;Nt(new kt(i,.5,s),te(8221800),0,0,0,e),Nt(new kt(i,r,s),te((h=n.wall)!=null?h:15260864),0,r/2+.25,0,e);let o=te(5913892);for(let g of[-1,1])for(let x of[-1,1])Nt(new kt(.25,r,.25),o,g*i/2,r/2+.25,x*s/2,e);Nt(new kt(i+.1,.22,.12),o,0,r*.55+.25,s/2+.02,e);let a=Nt(Ac(i,s,(l=n.roofH)!=null?l:2.2),te((u=n.roof)!=null?u:9124394,{flatShading:!0}),0,r+.25,0,e);n.rotRoof&&(a.rotation.y=Math.PI/2),Nt(new kt(1,1.8,.1),te(4861722),0,1.15,s/2+.05,e);for(let g of[-1,1])Nt(new kt(.7,.7,.08),Aa,g*i*.3,1.9,s/2+.05,e);for(let g of[-1,1]){let x=Nt(new kt(.08,.7,.7),Aa,g*(i/2+.04),1.9,0,e);x.castShadow=!1}return n.chimney&&Nt(new kt(.6,1.6,.6),te(7168600),i*.25,r+1.6,-s*.15,e),e.position.set(n.x,n.y,n.z),e.rotation.y=(f=n.rot)!=null?f:0,t.addBox(n.x,n.z,i/2+.1,s/2+.1,(p=n.rot)!=null?p:0),e}function Qh(n,t){let e=Ta(1337),i=new Tc,s={colliders:i,spots:{},herbs:[],chests:[],villageHomes:[]},r=pi*2,o=t==="low"?120:168,a=new ys(r,r,o,o);a.rotateX(-Math.PI/2);let c=a.attributes.position,h=new Float32Array(c.count*3),l=new Et,u=new Et(6068796),f=new Et(8367686),p=new Et(4091436),g=new Et(13482884),x=new Et(8748400),m=new Et(15922422),d=new Et(10124114),M=new Et(9067146);for(let D=0;D<c.count;D++){let N=c.getX(D),G=c.getZ(D),W=Kt(N,G);c.setY(D,W);let ut=bs(N*.08,G*.08,2,5);l.copy(u).lerp(f,ut);let rt=Di(N,G);rt>.55&&l.lerp(p,Math.min(1,(rt-.55)*4));let xt=bs(N*.03+3,G*.03,2,77);xt>.66&&W>3&&l.lerp(M,Math.min(.6,(xt-.66)*4));let yt=fi(N,G);yt<3.2&&l.lerp(d,1-Rc(1.6,3.2,yt)),Math.hypot(N,G)<14&&l.lerp(d,.6*(1-Math.hypot(N,G)/14)),Math.hypot(N-dt.ruins.x,G-dt.ruins.z)<22&&l.lerp(x,.45),W<1.2&&l.lerp(g,Math.min(1,(1.2-W)/.8)),W>16&&l.lerp(x,Math.min(1,(W-16)/8)),W>34&&l.lerp(m,Math.min(1,(W-34)/6)),h[D*3]=l.r,h[D*3+1]=l.g,h[D*3+2]=l.b}a.setAttribute("color",new Be(h,3)),a.computeVertexNormals();let y=new Mt(a,new Ae({vertexColors:!0}));y.receiveShadow=!0,n.add(y);let E=new Mt(new ys(r,r),new pa({color:3110056,transparent:!0,opacity:.78,shininess:90,specular:8956620}));E.rotation.x=-Math.PI/2,E.position.y=0,n.add(E),s.water=E;let I=(D,N,G=0)=>Math.hypot(D,N)<50+G||Math.hypot(D-dt.camp.x,N-dt.camp.z)<20+G||Math.hypot(D-dt.ruins.x,N-dt.ruins.z)<30+G||Math.hypot(D-dt.house.x,N-dt.house.z)<14+G||Math.hypot(D-dt.herbalist.x,N-dt.herbalist.z)<11+G||Math.hypot(D-dt.crossroad.x,N-dt.crossroad.z)<10+G,A=ir([dn(new Te(.16,.24,1.6,5).translate(0,.8,0),5913892),dn(new je(1.5,2.8,7).translate(0,2.6,0),3104308),dn(new je(1.1,2.2,7).translate(0,3.9,0),3829308)]),R=ir([dn(new Te(.2,.3,2.2,5).translate(0,1.1,0),6965804),dn(new Ln(1.7,0).translate(0,3.2,0),5212725),dn(new Ln(1.1,0).translate(.9,3.9,.3),6265406)]),k=dn(new Ln(.8,0).scale(1,.7,1).translate(0,.4,0),4882224),v=new Ae({vertexColors:!0,flatShading:!0}),w=[],O=[],Z=[];for(let D=0;D<9e3&&w.length+O.length<(t==="low"?650:1e3);D++){let N=(e()*2-1)*175,G=(e()*2-1)*175,W=Di(N,G),ut=e()<.012;if(!(W>.56+e()*.12)&&!ut||I(N,G)||fi(N,G)<4.5)continue;let rt=Kt(N,G);if(rt<.9||rt>26)continue;let xt=.8+e()*.7;((W>.68||rt>12?e()<.75:e()<.3)?w:O).push({x:N,z:G,y:rt-.1,s:xt,r:e()*6.28}),i.addCircle(N,G,.45*xt)}for(let D=0;D<2500&&Z.length<350;D++){let N=(e()*2-1)*170,G=(e()*2-1)*170;if(I(N,G,-10)||fi(N,G)<3)continue;let W=Kt(N,G);W<1||W>24||Di(N,G)<.45&&e()<.6||Z.push({x:N,z:G,y:W,s:.7+e()*.8,r:e()*6.28})}let tt=new ke,L=new Et;function F(D,N,G,W=!0){let ut=new ha(D,G,Math.max(1,N.length));return N.forEach((rt,xt)=>{var K,C,it,ct,wt,Tt;tt.position.set(rt.x,rt.y,rt.z),tt.rotation.set(0,rt.r,0),tt.scale.set(rt.s*((K=rt.sx)!=null?K:1),rt.s*((C=rt.sy)!=null?C:1),rt.s*((it=rt.sz)!=null?it:1)),tt.updateMatrix(),ut.setMatrixAt(xt,tt.matrix);let yt=.82+e()*.3;L.setRGB(yt*((ct=rt.cr)!=null?ct:1),yt*((wt=rt.cg)!=null?wt:1),yt*((Tt=rt.cb)!=null?Tt:1)),ut.setColorAt(xt,L)}),ut.count=N.length,ut.castShadow=W,ut.receiveShadow=!0,n.add(ut),ut}F(A,w,v),F(R,O,v),F(k,Z,v,!1);let Q=[];for(let D=0;D<3e3&&Q.length<220;D++){let N=(e()*2-1)*185,G=(e()*2-1)*185;if(I(N,G,-15)||fi(N,G)<3.5)continue;let W=Kt(N,G);if(W<-1)continue;let ut=.4+e()*e()*2.2;Q.push({x:N,z:G,y:W-.2*ut,s:ut,sy:.6+e()*.4,r:e()*6.28}),ut>.9&&i.addCircle(N,G,ut*.85)}F(dn(new da(1,0),9407104),Q,v);let $=ir([dn(new je(.07,.55,3).translate(0,.27,0),7315520),dn(new je(.07,.45,3).translate(.12,.22,.05),8565834),dn(new je(.07,.5,3).translate(-.1,.25,-.06),6262840)]),J=[],j=[],et=t==="low"?1500:4e3;for(let D=0;D<et*3&&J.length<et;D++){let N=(e()*2-1)*160,G=(e()*2-1)*160,W=Kt(N,G);if(!(W<1.2||W>15)&&!(fi(N,G)<2.5||Math.hypot(N,G)<12)&&(J.push({x:N,z:G,y:W,s:.8+e()*.9,r:e()*6.28}),e()<.18)){let ut=[[1,1,1],[1,.9,.2],[.8,.4,1],[1,.3,.3],[.5,.7,1]][Math.floor(e()*5)];j.push({x:N+.4,z:G+.3,y:W,s:.8+e()*.6,r:e()*6.28,cr:ut[0],cg:ut[1],cb:ut[2]})}}F($,J,v,!1);let ht=ir([dn(new Te(.02,.02,.4,3).translate(0,.2,0),4885040),dn(new Ln(.09,0).translate(0,.42,0),16777215)]);F(ht,j,new Ae({vertexColors:!0}),!1);let pt=new Qt;n.add(pt);let Y=Kh.map(D=>Math.atan2(D[1][0],D[1][1])),nt=(D,N)=>{let G=Math.abs(D-N)%(Math.PI*2);return G>Math.PI?Math.PI*2-G:G},mt=[];for(let D=0;D<360;D+=26){let N=D*Math.PI/180+.2;if(Y.some(W=>nt(N,W)<.36))continue;let G=mt.length%2?25:18;mt.push({x:Math.sin(N)*G,z:Math.cos(N)*G,ang:N})}let Ct=[9124394,7227946,10115632,8007728,5917242];mt.forEach((D,N)=>{let G=N===0,W=N===2,ut={x:D.x,y:2.5,z:D.z,rot:D.ang+Math.PI,w:G?9:6+N%2,d:G?7:5.5,h:G?4:3,roof:Ct[N%Ct.length],chimney:N%2===0,roofH:G?2.8:2.2,wall:N%3===1?14207144:15260864};pt.add(Sc(ut,i));let rt={x:D.x-Math.sin(D.ang)*(ut.d/2+1.8),z:D.z-Math.cos(D.ang)*(ut.d/2+1.8)};if(s.villageHomes.push(rt),G){s.spots.tavern=rt;let xt=new Qt;Nt(new kt(.15,3,.15),te(5913892),0,1.5,0,xt),Nt(new kt(1.2,.7,.1),te(11567168),.6,2.6,0,xt),Nt(new kt(.4,.4,.12),te(13934624),.6,2.6,0,xt),xt.position.set(rt.x+2.5,2.5,rt.z),pt.add(xt)}W&&(s.spots.widow=rt)}),s.spots.lender={x:s.spots.tavern.x*.85+1.5,z:s.spots.tavern.z*.85};let bt=new Qt;Nt(new Te(1.2,1.3,1,10),te(9077624),0,.5,0,bt),Nt(new Te(.95,.95,.05,10),te(2046549),0,.95,0,bt);for(let D of[-1,1])Nt(new kt(.15,2.2,.15),te(5913892),D*1,1.6,0,bt);Nt(Ac(2.2,1.6,.8,.2),te(8010282,{flatShading:!0}),0,2.6,0,bt).rotation.y=Math.PI/2,bt.position.set(0,2.5,0),pt.add(bt),i.addCircle(0,0,1.4);let zt=new Qt;Nt(new kt(3,1,1.4),te(9071168),0,.5,0,zt);for(let D of[-1,1])for(let N of[-1,1])Nt(new kt(.12,2.6,.12),te(5913892),D*1.4,1.3,N*.65,zt);let Ht=Nt(new kt(3.4,.1,1.9),te(12073530),0,2.6,0,zt);Ht.rotation.x=.15;for(let D=0;D<5;D++)Nt(new kt(.3,.3,.3),te([13934624,9054858,2787898,12599328,3170496][D]),-1.1+D*.55,1.15,0,zt);zt.position.set(-7,2.5,6),zt.rotation.y=.6,pt.add(zt),i.addBox(-7,6,1.6,.8,.6),s.spots.merchant={x:-7-Math.sin(.6)*1.4,z:6-Math.cos(.6)*1.4},s.spots.elder={x:3,z:3};let Dt=new Ae({color:3351057,emissive:16755268,emissiveIntensity:0});Ss.push(Dt);for(let D=0;D<8;D++){let N=D/8*Math.PI*2+.4,G=11,W=new Qt;Nt(new kt(.15,2.6,.15),te(3811866),0,1.3,0,W),Nt(new kt(.35,.45,.35),Dt,0,2.7,0,W),W.position.set(Math.sin(N)*G,2.5,Math.cos(N)*G),pt.add(W),i.addCircle(W.position.x,W.position.z,.2)}let ne=Sc({x:dt.herbalist.x,y:Kt(dt.herbalist.x,dt.herbalist.z),z:dt.herbalist.z,rot:Math.atan2(-dt.herbalist.x,-dt.herbalist.z),w:5,d:4.5,h:2.6,roof:4876842,wall:13154448,chimney:!0},i);n.add(ne);let B=Math.atan2(-dt.herbalist.x,-dt.herbalist.z);s.spots.herbalist={x:dt.herbalist.x+Math.sin(B)*4.5,z:dt.herbalist.z+Math.cos(B)*4.5};for(let D=0;D<6;D++){let N=Nt(new Te(.25,.2,.4,6),te(10510394),0,0,0);N.position.set(dt.herbalist.x+Math.sin(B+.6+D*.12)*4,Kt(dt.herbalist.x,dt.herbalist.z)+.2,dt.herbalist.z+Math.cos(B+.6+D*.12)*4),n.add(N)}{let D=dt.crossroad.x+4,N=dt.crossroad.z+3,G=Kt(D,N),W=new Qt;Nt(new kt(2.2,1.6,3.4),te(4860506),0,1.4,0,W),Nt(Ac(2.2,3.4,.9,.2),te(2759226,{flatShading:!0}),0,2.2,0,W).rotation.y=Math.PI/2;let ut=new Te(.55,.55,.15,10);for(let yt of[-1,1])for(let K of[-1,1]){let C=Nt(ut,te(3811866),yt*1.15,.55,K*1.1,W);C.rotation.z=Math.PI/2}let rt=new Ae({color:2245666,emissive:6750088,emissiveIntensity:.6});Ss.push(rt),Nt(new kt(.3,.4,.3),rt,1.2,2,1.5,W),W.position.set(D,G,N),W.rotation.y=.4,n.add(W),i.addBox(D,N,1.2,1.8,.4),s.spots.alchemist={x:dt.crossroad.x,z:dt.crossroad.z};let xt=new Qt;Nt(new kt(.15,2.4,.15),te(5913892),0,1.2,0,xt);for(let yt=0;yt<3;yt++){let K=Nt(new kt(1.2,.25,.06),te(10517066),.4,2-yt*.35,0,xt);K.rotation.y=yt*1.3}xt.position.set(dt.crossroad.x-2.5,Kt(dt.crossroad.x-2.5,dt.crossroad.z-2),dt.crossroad.z-2),n.add(xt)}{let D=dt.house.x,N=dt.house.z,G=Kt(D,N),W=Math.atan2(-D,-N);n.add(Sc({x:D,y:G,z:N,rot:W,w:8,d:6.5,h:3.6,roof:2771578,wall:15787728,chimney:!0,roofH:2.6},i));let ut=D+Math.sin(W)*6.2+Math.cos(W)*2.5,rt=N+Math.cos(W)*6.2-Math.sin(W)*2.5,xt=new Qt;Nt(new kt(.15,1.6,.15),te(5913892),0,.8,0,xt),Nt(new kt(1.1,.6,.08),te(13148256),0,1.5,0,xt),xt.position.set(ut,Kt(ut,rt),rt),xt.rotation.y=W,n.add(xt),s.spots.house={x:D+Math.sin(W)*5.2,z:N+Math.cos(W)*5.2}}{let D=dt.camp,N=Ec().camp,G=te(9073488,{flatShading:!0});for(let K=0;K<5;K++){let C=K/5*Math.PI*2+.3,it=D.x+Math.sin(C)*9,ct=D.z+Math.cos(C)*9,wt=Nt(new je(2.2,2.8,6),G,it,N+1.4,ct);n.add(wt),i.addCircle(it,ct,1.9)}let W=te(5913892);for(let K=0;K<4;K++){let C=Nt(new Te(.12,.12,1.2,5),W,D.x,N+.15,D.z);C.rotation.set(Math.PI/2,0,K*Math.PI/4),n.add(C)}let ut=new Je({color:16747050}),rt=new Mt(new je(.45,1.2,6),ut);rt.position.set(D.x,N+.7,D.z),n.add(rt);let xt=new Mt(new je(.25,.8,5),new Je({color:16769126}));xt.position.set(D.x,N+.6,D.z),n.add(xt),i.addCircle(D.x,D.z,.9);let yt=new xa(16747066,0,22,1.6);yt.position.set(D.x,N+2,D.z),n.add(yt),s.fire={flame:rt,flame2:xt,light:yt};for(let K=0;K<26;K++){let C=K/34*Math.PI*2+2.2,it=D.x+Math.sin(C)*17,ct=D.z+Math.cos(C)*17,wt=Nt(new Te(.22,.25,2.6+K%3*.3,5),W,it,Kt(it,ct)+1.2,ct);n.add(wt),i.addCircle(it,ct,.3);let Tt=Nt(new je(.22,.5,5),W,it,Kt(it,ct)+2.8+K%3*.3,ct);n.add(Tt)}for(let K=0;K<4;K++){let C=Nt(new kt(.9,.9,.9),te(8018480),D.x+4+K*.4,N+.45+(K===3?.9:0),D.z-3+K%3*.95);n.add(C)}}{let D=dt.ruins,N=Ec().ruins,G=te(9276036,{flatShading:!0}),W=te(6257226,{flatShading:!0}),ut=te(5591630,{flatShading:!0});for(let K=0;K<12;K++){let C=K/12*Math.PI*2,it=D.x+Math.sin(C)*15,ct=D.z+Math.cos(C)*15,wt=K%3===0?1.2+e()*1.5:4+e()*4,Tt=Nt(new Te(.75,.9,wt,7),K%4===0?W:G,it,N+wt/2,ct);if(n.add(Tt),i.addCircle(it,ct,.9),K%2===0&&wt>4){let re=Nt(new kt(2,.5,2),ut,it,N+wt+.25,ct);re.rotation.y=e(),n.add(re)}}for(let K=0;K<5;K++){let C=K/5*Math.PI*2+.5,it=D.x+Math.sin(C)*22,ct=D.z+Math.cos(C)*22,wt=6+e()*4,Tt=1.5+e()*3,re=Nt(new kt(wt,Tt,1),G,it,Kt(it,ct)+Tt/2-.2,ct);re.rotation.y=C+Math.PI/2,n.add(re),i.addBox(it,ct,wt/2,.55,C+Math.PI/2)}let rt=Nt(new Te(5,5.6,.6,12),ut,D.x,N+.3,D.z);n.add(rt);let xt=Nt(new Te(3,3.6,9,9,1,!0),G,D.x+25,Kt(D.x+25,D.z-14)+4.5,D.z-14);xt.material=te(9276036,{flatShading:!0,side:un}),n.add(xt),i.addCircle(D.x+25,D.z-14,3.6);let yt=new Ae({color:3349002,emissive:16734746,emissiveIntensity:.4});Ss.push(yt),s.runeMat=yt;for(let K=0;K<6;K++){let C=K/6*Math.PI*2,it=Nt(new kt(.6,.05,1.4),yt,D.x+Math.sin(C)*3.8,N+.62,D.z+Math.cos(C)*3.8);it.rotation.y=C,n.add(it)}s.spots.ruins={x:D.x,z:D.z}}let Ge=[[-70,98],[92,30],[-118,-40],[140,-132],[-22,118],[128,82],[-140,20],[20,-140]],Lt=te(7029794),Ot=te(13213744);Ge.forEach(([D,N],G)=>{let W=0;for(;Kt(D,N)<.6&&W++<40;)D*=.96,N*=.96;let ut=Kt(D,N),rt=new Qt;Nt(new kt(1.1,.6,.7),Lt,0,.3,0,rt);let xt=new Qt;xt.position.set(0,.6,-.35),rt.add(xt),Nt(new kt(1.12,.3,.72),Lt,0,.15,.35,xt),Nt(new kt(1.14,.08,.1),Ot,0,.15,.72,xt),Nt(new kt(.16,.2,.06),Ot,0,.55,.37,rt),rt.position.set(D,ut,N),rt.rotation.y=e()*6,n.add(rt),i.addCircle(D,N,.6),s.chests.push({x:D,z:N,group:rt,lid:xt,i:G})});let St=new Ae({color:8978414,emissive:4513228,emissiveIntensity:.6});Ss.push(St),s.herbMat=St;let pe=te(2779706),Gt=Ta(99);for(let D=0;D<4e3&&s.herbs.length<11;D++){let N=(Gt()*2-1)*150,G=(Gt()*2-1)*150;if(Di(N,G)<.6||I(N,G,8)||fi(N,G)<6)continue;let W=Kt(N,G);if(W<1||W>18||s.herbs.some(rt=>Math.hypot(rt.x-N,rt.z-G)<18))continue;let ut=new Qt;for(let rt=0;rt<3;rt++){let xt=Nt(new Te(.03,.03,.6,3),pe,Math.cos(rt*2.1)*.15,.3,Math.sin(rt*2.1)*.15,ut);xt.castShadow=!1;let yt=Nt(new _s(.14,0),St,Math.cos(rt*2.1)*.15,.65,Math.sin(rt*2.1)*.15,ut);yt.castShadow=!1}ut.position.set(N,W,G),n.add(ut),s.herbs.push({x:N,z:G,group:ut,i:s.herbs.length})}let S=new He,_=[],H=Ta(7);for(let D=0;D<900;D++){let N=H()*Math.PI*2,G=H()*.9+.08,W=330;_.push(Math.cos(N)*Math.cos(G*Math.PI/2)*W,Math.sin(G*Math.PI/2)*W,Math.sin(N)*Math.cos(G*Math.PI/2)*W)}S.setAttribute("position",new oe(_,3));let ot=new Js({color:16777215,size:1.6,sizeAttenuation:!1,transparent:!0,opacity:0,fog:!1,depthWrite:!1}),at=new ua(S,ot);n.add(at),s.stars=at,s.starMat=ot;let lt=new Mt(new Qs(9,12,8),new Je({color:15659775,fog:!1,transparent:!0}));n.add(lt),s.moon=lt;let Rt=new Mt(new Qs(12,12,8),new Je({color:16773824,fog:!1,transparent:!0}));n.add(Rt),s.sunDisc=Rt;let gt=new Ae({color:16777215,flatShading:!0,transparent:!0,opacity:.9});s.cloudMat=gt;let vt=new Qt;for(let D=0;D<18;D++){let N=new Qt;for(let G=0;G<4;G++){let W=new Mt(new Ln(4+e()*4,0),gt);W.position.set(G*5-8,e()*2,e()*4),W.scale.y=.5,N.add(W)}N.position.set((e()*2-1)*220,55+e()*20,(e()*2-1)*220),vt.add(N)}n.add(vt),s.clouds=vt;let Pt=210,Bt=document.createElement("canvas");Bt.width=Pt,Bt.height=Pt;let st=Bt.getContext("2d"),se=st.createImageData(Pt,Pt);for(let D=0;D<Pt;D++)for(let N=0;N<Pt;N++){let G=-pi+N*2+1,W=-pi+D*2+1,ut=Kt(G,W),rt,xt,yt;if(ut<0)rt=50,xt=110,yt=160;else if(ut<1.2)rt=205,xt=187,yt=132;else if(ut>34)rt=235,xt=235,yt=240;else if(ut>16)rt=133,xt=125,yt=112;else{let C=Di(G,W);rt=92,xt=154,yt=60,C>.58&&(rt=52,xt=100,yt=42);let it=(ut-2)*3;rt+=it,xt+=it,yt+=it}fi(G,W)<2.2&&(rt=160,xt=128,yt=84);let K=(D*Pt+N)*4;se.data[K]=rt,se.data[K+1]=xt,se.data[K+2]=yt,se.data[K+3]=255}st.putImageData(se,0,0),st.fillStyle="#6a3a2a";for(let D of mt)st.fillRect((D.x+pi)/2-2,(D.z+pi)/2-2,4,4);return s.minimap=Bt,s}var tu=new Map;function ce(n,t,e){let i=n+"_"+t+"_"+e,s=tu.get(i);return s||(s=new kt(n,t,e),tu.set(i,s)),s}function Ui(n={}){var w,O,Z,tt,L,F,Q;let t=[],e=($,J={})=>{let j=new Ae({color:$,...J});return t.push(j),j},i=e((w=n.skin)!=null?w:14725257),s=e((O=n.shirt)!=null?O:3829413),r=e((Z=n.pants)!=null?Z:4864810),o=e((tt=n.hair)!=null?tt:3875858),a=e((L=n.boots)!=null?L:2759956),c=n.thin?.8:1,h=new Qt,l=new Qt;h.add(l);let u=new Mt(ce(.66*c,.78,.38*c),s);u.position.y=1.28,l.add(u);let f=new Mt(ce(.68*c,.1,.4*c),a);f.position.y=.92,l.add(f);let p=new Qt;p.position.y=1.68,l.add(p);let g=new Mt(ce(.42,.44,.42),i);if(g.position.y=.24,p.add(g),n.helmet){let $=e(n.helmet),J=new Mt(ce(.5,.36,.5),$);J.position.y=.38,p.add(J);let j=new Mt(ce(.08,.2,.46),e(7999504));j.position.y=.62,p.add(j)}else if(n.hood){let $=e(n.hood),J=new Mt(ce(.5,.52,.5),$);J.position.set(0,.3,-.04),p.add(J)}else{let $=new Mt(ce(.46,.14,.46),o);$.position.y=.5,p.add($);let J=new Mt(ce(.46,n.longHair?.6:.3,.1),o);J.position.set(0,n.longHair?.2:.34,-.2),p.add(J)}if(n.beard){let $=new Mt(ce(.38,.22,.1),e(n.beard));$.position.set(0,.08,.2),p.add($)}let x=n.eyeGlow?e(n.eyeGlow,{emissive:n.eyeGlow}):e(1710618),m=new Mt(ce(.08,.07,.02),x);m.position.set(-.1,.28,.215),p.add(m);let d=m.clone();d.position.x=.1,p.add(d);function M($,J,j,et,ht,pt){let Y=new Qt;Y.position.set($,J,0);let nt=new Mt(ce(j,et,j),ht);if(nt.position.y=-et/2,Y.add(nt),pt){let mt=new Mt(ce(j*1.05,.16,j*1.15),pt);mt.position.set(0,-et+.06,.02),Y.add(mt)}return l.add(Y),Y}let y=M(-.45*c,1.62,.2*c,.72,s,i),E=M(.45*c,1.62,.2*c,.72,s,i),I=M(-.17*c,.9,.24*c,.88,r,a),A=M(.17*c,.9,.24*c,.88,r,a);if(n.dress){let $=new Mt(new Te(.36,.56,.8,8),e(n.dress));$.position.y=.55,l.add($)}let R=null;if(n.weapon){R=new Qt,R.position.set(0,-.68,.05),R.rotation.x=Math.PI/2;let $=e((F=n.blade)!=null?F:13226457,n.bladeGlow?{emissive:n.bladeGlow,emissiveIntensity:.6}:{}),J=new Mt(ce(.06,.22,.06),e(4861722));R.add(J);let j=new Mt(ce(.3,.05,.08),e(10254890));j.position.y=.12,R.add(j);let et=new Mt(ce(.08,.85,.03),$);et.position.y=.56,R.add(et),R.userData.metal=$,E.add(R)}if(n.staff){let $=new Mt(ce(.06,1.7,.06),e(5913119));$.position.set(0,-.6,.05),E.add($);let J=new Mt(ce(.16,.16,.16),e(n.staff,{emissive:n.staff}));J.position.set(0,.25,.05),E.add(J)}let k=null;if(n.cape){k=new Qt,k.position.set(0,1.62,-.21),l.add(k);let $=new Mt(ce(.62,1.05,.04),e(n.cape));$.position.y=-.52,k.add($)}let v=(Q=n.scale)!=null?Q:1;return h.scale.setScalar(v),h.traverse($=>{$.isMesh&&($.castShadow=!0)}),{kind:"hum",group:h,body:l,headG:p,armL:y,armR:E,legL:I,legR:A,mats:t,weapon:R,cape:k,phase:Math.random()*6}}function Es(n,t,e,i=-1,s={}){n.phase+=t*(3+e*1.7);let r=Math.min(1,e/4),o=Math.sin(n.phase);if(n.legL.rotation.x=o*.8*r,n.legR.rotation.x=-o*.8*r,n.armL.rotation.x=s.cast?-1.5:-o*.6*r,n.armL.rotation.z=0,n.body.position.y=Math.abs(Math.cos(n.phase))*.08*r,n.body.rotation.y=0,n.body.rotation.x=0,i>=0){let a;i<.35?a=-.3-i/.35*2.4:i<.6?a=-2.7+(i-.35)/.25*2.5:a=-.2-(1-(i-.6)/.4)*0,n.armR.rotation.x=a,n.body.rotation.y=i<.35?-.3*(i/.35):-.3+Math.min(1,(i-.35)/.25)*.6,n.body.rotation.x=i>.35&&i<.7?.15:0}else n.armR.rotation.x=(n.weapon?-.35:0)+o*.6*r;n.cape&&(n.cape.rotation.x=.1+r*.5+Math.sin(n.phase*.5)*.08),s.kneel?(n.legL.rotation.x=-1.4,n.legR.rotation.x=.2,n.body.position.y=-.4,n.armR.rotation.x=-.2,n.armL.rotation.x=-.2,n.headG.rotation.x=.4):n.headG.rotation.x=0}function Cc(n={}){var R,k,v,w;let t=[],e=(O,Z={})=>{let tt=new Ae({color:O,...Z});return t.push(tt),tt},i=e((R=n.color)!=null?R:7829367),s=e((k=n.belly)!=null?k:14540253),r=e((v=n.dark)!=null?v:2236962),o=new Qt,a=new Qt;o.add(a);let c=new Mt(ce(.46,.42,1),i);c.position.y=.62,a.add(c);let h=new Mt(ce(.4,.2,.5),s);h.position.set(0,.46,.2),a.add(h);let l=new Qt;l.position.set(0,.82,.55),a.add(l);let u=new Mt(ce(.36,.32,.36),i);l.add(u);let f=new Mt(ce(.18,.14,.26),s);f.position.set(0,-.06,.28),l.add(f);let p=new Mt(ce(.08,.06,.04),r);p.position.set(0,-.02,.42),l.add(p);let g=new je(.07,.18,4),x=new Mt(g,i);x.position.set(-.11,.23,-.04),l.add(x);let m=x.clone();m.position.x=.11,l.add(m);let d=n.eye?e(n.eye,{emissive:n.eye}):r,M=new Mt(ce(.06,.05,.02),d);M.position.set(-.09,.05,.18),l.add(M);let y=M.clone();y.position.x=.09,l.add(y);let E=[];for(let[O,Z]of[[-.16,.36],[.16,.36],[-.16,-.36],[.16,-.36]]){let tt=new Qt;tt.position.set(O,.45,Z);let L=new Mt(ce(.12,.45,.12),i);L.position.y=-.22,tt.add(L);let F=new Mt(ce(.13,.08,.15),n.paws?e(n.paws):i);F.position.set(0,-.42,.02),tt.add(F),a.add(tt),E.push(tt)}let I=new Qt;I.position.set(0,.72,-.5),a.add(I);let A=new Mt(ce(.14,.14,.5),i);if(A.position.z=-.25,I.add(A),n.tailTip){let O=new Mt(ce(.15,.15,.16),e(n.tailTip));O.position.z=-.52,I.add(O)}return I.rotation.x=.5,o.scale.setScalar((w=n.scale)!=null?w:1),o.traverse(O=>{O.isMesh&&(O.castShadow=!0)}),{kind:"quad",group:o,body:a,headG:l,legs:E,tail:I,mats:t,phase:Math.random()*6}}function Pc(n,t,e,i=-1){n.phase+=t*(4+e*2.2);let s=Math.min(1,e/4),r=Math.sin(n.phase);if(n.legs[0].rotation.x=r*.9*s,n.legs[3].rotation.x=r*.9*s,n.legs[1].rotation.x=-r*.9*s,n.legs[2].rotation.x=-r*.9*s,n.body.position.y=Math.abs(Math.cos(n.phase))*.06*s,n.tail.rotation.y=Math.sin(n.phase*(e<.5?.6:1.5))*.5,i>=0){let o=i<.5?i/.5:1-(i-.5)/.5;n.body.rotation.x=-.35*o,n.headG.rotation.x=.4*o,n.body.position.z=.4*o}else n.body.rotation.x=0,n.headG.rotation.x=0,n.body.position.z=0}var Re=null,sr=null,Ra=null,nu=!0,eu=0,Ic=0;function Ni(){if(Re){Re.state==="suspended"&&Re.resume();return}try{Re=new(window.AudioContext||window.webkitAudioContext),sr=Re.createGain(),sr.gain.value=.5,sr.connect(Re.destination)}catch{Re=null}}function Lc(n){nu=n}function Me(n,t,e="sine",i=.3,s=null,r=0){if(!Re)return;let o=Re.currentTime+r,a=Re.createOscillator(),c=Re.createGain();a.type=e,a.frequency.setValueAtTime(n,o),s&&a.frequency.exponentialRampToValueAtTime(s,o+t),c.gain.setValueAtTime(1e-4,o),c.gain.exponentialRampToValueAtTime(i,o+.01),c.gain.exponentialRampToValueAtTime(1e-4,o+t),a.connect(c),c.connect(sr),a.start(o),a.stop(o+t+.05)}function mi(n,t=.3,e=2e3,i=500,s="bandpass",r=0){if(!Re)return;if(!Ra){Ra=Re.createBuffer(1,Re.sampleRate,Re.sampleRate);let l=Ra.getChannelData(0);for(let u=0;u<l.length;u++)l[u]=Math.random()*2-1}let o=Re.currentTime+r,a=Re.createBufferSource();a.buffer=Ra;let c=Re.createBiquadFilter();c.type=s,c.frequency.setValueAtTime(e,o),c.frequency.exponentialRampToValueAtTime(i,o+n);let h=Re.createGain();h.gain.setValueAtTime(t,o),h.gain.exponentialRampToValueAtTime(1e-4,o+n),a.connect(c),c.connect(h),h.connect(sr),a.start(o),a.stop(o+n+.02)}var jt={swing:()=>mi(.18,.22,3500,700),hit:()=>{mi(.12,.4,1400,200,"lowpass"),Me(130,.15,"square",.12,60)},crit:()=>{mi(.15,.5,2400,300,"lowpass"),Me(880,.2,"triangle",.12,440)},hurt:()=>{Me(240,.25,"sawtooth",.14,90),mi(.1,.2,900,200,"lowpass")},coin:()=>{Me(988,.08,"square",.06),Me(1319,.15,"square",.06,null,.07)},magic:()=>{Me(300,.35,"sawtooth",.1,1200),mi(.3,.12,4e3,8e3,"highpass")},boom:()=>{mi(.3,.3,2e3,200,"lowpass"),Me(200,.3,"sine",.2,60)},roll:()=>mi(.25,.15,800,300,"lowpass"),level:()=>{[523,659,784,1047].forEach((n,t)=>Me(n,.3,"triangle",.14,null,t*.1))},quest:()=>{[392,523,659,784].forEach((n,t)=>Me(n,.35,"triangle",.13,null,t*.12))},good:()=>{Me(660,.5,"sine",.14,990),Me(990,.5,"sine",.08,1320,.15)},evil:()=>{Me(220,.6,"sawtooth",.1,70),Me(233,.6,"sawtooth",.08,75)},slam:()=>{mi(.6,.6,700,50,"lowpass"),Me(70,.6,"sine",.4,30)},pickup:()=>Me(1200+Math.random()*300,.06,"sine",.05,1800),bark:()=>{Me(520,.07,"square",.07,320),Me(540,.07,"square",.07,330,.13)},click:()=>Me(700,.05,"triangle",.08),drink:()=>{for(let n=0;n<3;n++)Me(400+n*80,.08,"sine",.08,600,n*.09)},death:()=>{Me(300,1.2,"triangle",.15,80)},victory:()=>{[523,659,784,659,784,1047].forEach((n,t)=>Me(n,.45,"triangle",.15,null,t*.16))}},$g=[261.6,293.7,329.6,392,440,523.3,587.3,659.3],Jg=[220,261.6,293.7,329.6,392,440,523.3],jg=[146.8,174.6,196,220,233.1,261.6];function iu(n,t){if(!Re||!nu||Re.state!=="running"||n<eu)return;let e=t==="combat"?jg:t==="night"?Jg:$g,i=t==="combat"?.28:.55;if(eu=n+i,Ic++,t!=="combat"&&Math.random()<.25)return;let s=Math.floor((Math.sin(Ic*.7)*.5+.5)*e.length+Math.random()*2)%e.length,r=t==="combat"?.05:.045;Me(e[s],i*2.2,t==="combat"?"sawtooth":"triangle",r),Ic%4===0&&Me(e[0]/2,i*4,"sine",.05)}var At=n=>document.getElementById(n),le=(n,t)=>n+Math.random()*(t-n),xi=(n,t,e)=>Math.max(t,Math.min(e,n)),ge=(n,t,e)=>n+(t-n)*e;function ka(n,t){let e=(n-t)%(Math.PI*2);return e>Math.PI&&(e-=Math.PI*2),e<-Math.PI&&(e+=Math.PI*2),e}function fn(n,t,e){let i=ka(t,n);return n+xi(i,-e,e)}var nn=(n,t)=>Math.hypot(n.x-t.x,n.z-t.z),Kg=480,Ha="kroniki_wrzosu_v1",Oa=[{name:"Zardzewia\u0142y miecz",dmg:11},{name:"Stalowy miecz",dmg:19,price:250},{name:"Runiczny miecz",dmg:32,price:900}],Fa=[{name:"Sk\xF3rzana kurta",mul:1},{name:"Kolczuga",mul:.72,price:320},{name:"Zbroja p\u0142ytowa",mul:.5,price:1100}],Qg=[100,250,450,750,1100],su={sila:{n:"Si\u0142a",d:"Mocniejsze ciosy mieczem (+5) i wi\u0119cej zdrowia (+20)."},magia:{n:"Magia",d:"Silniejsze b\u0142yskawice (+12) i wi\u0119cej many (+25)."},zrecznosc:{n:"Zr\u0119czno\u015B\u0107",d:"Szybszy ruch i unik, wi\u0119ksza szansa na cios krytyczny."}};function qc(){return{gold:40,xp:0,stats:{sila:0,magia:0,zrecznosc:0},morality:0,renown:0,potions:2,sword:0,armor:0,houseOwned:!1,scars:0,quests:{bandits:0,herbs:0,ruins:0,debt:0},flags:{leaderFate:null,debtChoice:null,campCleared:!1,bossDead:!1,widowGift:!1,foxPets:0},campKills:0,herbsHave:0,herbTaken:[],chestOpened:[],time:.3,day:1,pos:{x:0,z:9},hp:100,mana:60,tracked:"bandits",kills:0}}var P=qc(),Cn="medium";try{Cn=localStorage.getItem("kw_quality")||"medium"}catch{}var Oi=!0;try{Oi=localStorage.getItem("kw_music")!=="0"}catch{}Lc(Oi);var tx=At("c"),Ps;try{Ps=new Zs({canvas:tx,antialias:Cn!=="low",powerPreference:"high-performance"})}catch(n){throw At("err").style.display="block",At("errMsg").textContent=String(n),n}function gu(){Ps.setPixelRatio(Math.min(window.devicePixelRatio||1,Cn==="high"?2:Cn==="medium"?1.4:1)),Ps.setSize(window.innerWidth,window.innerHeight,!1)}gu();Ps.shadowMap.enabled=Cn!=="low";Ps.shadowMap.type=va;var ze=new la;ze.background=new Et(8896488);ze.fog=new ca(8896488,50,Cn==="low"?150:200);var sn=new $e(60,window.innerWidth/window.innerHeight,.1,420),Bc=new ma(13625087,5925434,1);ze.add(Bc);var An=new ya(16773336,2);An.castShadow=Cn!=="low";An.shadow.mapSize.set(Cn==="high"?2048:1024,Cn==="high"?2048:1024);var zs=An.shadow.camera;zs.left=-32;zs.right=32;zs.top=32;zs.bottom=-32;zs.near=1;zs.far=220;An.shadow.bias=-8e-4;An.shadow.normalBias=.03;ze.add(An);ze.add(An.target);var ie=Qh(ze,Cn),xu=ie.colliders;window.addEventListener("resize",()=>{sn.aspect=window.innerWidth/window.innerHeight,sn.updateProjectionMatrix(),gu()});function zc(n,t){if(Math.abs(n)>188||Math.abs(t)>188)return!1;let e=Kt(n,t);return e>-1&&e<24}function Rs(n,t,e,i){let s=n.x+t,r=n.z+e;zc(s,r)?(n.x=s,n.z=r):zc(s,n.z)?n.x=s:zc(n.x,r)&&(n.z=r),xu.resolve(n,i),n.y=Kt(n.x,n.z)}var ex=new kt(.14,.14,.14),ru={},au=n=>ru[n]||(ru[n]=new Je({color:n})),Ia=[];function Xe(n,t,e,i,s=8,r=4,o=3,a=.6,c=1){for(let h=0;h<s;h++){let l=Ia.find(p=>!p.alive);if(!l){if(Ia.length>140)return;l={m:new Mt(ex,au(i))},ze.add(l.m),Ia.push(l)}l.m.material=au(i),l.alive=!0,l.t=0,l.life=a*le(.7,1.2),l.size=c,l.m.visible=!0,l.m.position.set(n,t,e);let u=Math.random()*Math.PI*2,f=r*le(.4,1);l.vx=Math.cos(u)*f,l.vz=Math.sin(u)*f,l.vy=o*le(.5,1.3)}}function nx(n){for(let t of Ia){if(!t.alive)continue;if(t.t+=n,t.t>=t.life){t.alive=!1,t.m.visible=!1;continue}t.vy-=9*n,t.m.position.x+=t.vx*n,t.m.position.y+=t.vy*n,t.m.position.z+=t.vz*n;let e=(1-t.t/t.life)*t.size;t.m.scale.setScalar(e),t.m.rotation.x+=n*5,t.m.rotation.y+=n*4}}var kc=[],ix=At("floats"),Ca=new z;function lr(n,t,e,i,s="dmg",r=1,o=1.2){let a=kc.find(c=>!c.alive);if(!a){let c=document.createElement("div");ix.appendChild(c),a={el:c},kc.push(a)}return a.alive=!0,a.el.className="ft "+s,a.el.textContent=n,a.el.style.display="block",a.x=t+le(-.3,.3),a.y=e,a.z=i,a.t=0,a.life=r,a.rise=o,a}function sx(n){let t=window.innerWidth,e=window.innerHeight;for(let i of kc){if(!i.alive)continue;if(i.t+=n,i.t>=i.life){i.alive=!1,i.el.style.display="none";continue}if(Ca.set(i.x,i.y+i.t*i.rise,i.z).project(sn),Ca.z>1){i.el.style.display="none";continue}i.el.style.display="block";let s=(Ca.x*.5+.5)*t,r=(-Ca.y*.5+.5)*e;i.el.style.transform=`translate(${s.toFixed(1)}px,${r.toFixed(1)}px) translate(-50%,-50%)`,i.el.style.opacity=i.t>i.life*.7?(1-(i.t-i.life*.7)/(i.life*.3)).toFixed(2):"1"}}function ee(n,t="",e=3.2){let i=At("toast");for(let o of i.children)if(o.textContent===n)return;let s=document.createElement("div");s.textContent=n,t&&(s.className=t);let r=At("toast");for(r.appendChild(s);r.children.length>4;)r.removeChild(r.firstChild);setTimeout(()=>s.remove(),e*1e3)}var fe=Ui({shirt:3104138,pants:3878948,hair:6964256,weapon:!0,cape:9051935,boots:3810838});ze.add(fe.group);var rx=new Ae({color:16770688,emissive:16764992,emissiveIntensity:.9}),Ga=new Mt(new fa(.24,.035,6,18),rx);Ga.rotation.x=Math.PI/2;Ga.position.y=.78;fe.headG.add(Ga);var ax=new Ae({color:3803658}),Yc=new Qt;fe.headG.add(Yc);for(let n of[-1,1]){let t=new Mt(new je(.06,.32,5),ax);t.position.set(n*.17,.55,.05),t.rotation.z=-n*.5,Yc.add(t)}var ox=new Ae({color:10107434}),La=new Qt;fe.headG.add(La);var Hc=new Je({color:16769152,transparent:!0,opacity:0,depthWrite:!1}),Va=new Mt(new Ks(.6,.95,24),Hc);Va.rotation.x=-Math.PI/2;Va.position.y=.05;fe.group.add(Va);var T={pos:new z(0,2.5,9),yaw:Math.PI,hp:100,mana:60,attackT:-1,combo:0,comboQ:!1,comboTimer:0,atkHit:!1,rollT:0,rollCd:0,rollDir:{x:0,z:1},invuln:0,castT:0,dead:!1,deadT:0,lastHurt:-99,speed:0,kvx:0,kvz:0},yn=()=>100+20*P.stats.sila,Kn=()=>60+25*P.stats.magia;function yi(){Ga.visible=P.morality>=40,Yc.visible=P.morality<=-40;let n=P.morality;Hc.color.set(n>=0?16769152:16724e3),Hc.opacity=Math.abs(n)>60?.35:0,fe.mats[0].color.set(n<=-70?13150368:14725257);let t=1+P.stats.sila*.035;fe.group.scale.set(t,1+P.stats.sila*.02,t),fe.armL.scale.set(1+P.stats.sila*.08,1,1+P.stats.sila*.08),fe.armR.scale.copy(fe.armL.scale);let e=P.stats.magia;if(fe.mats[1].emissive.setRGB(.05*e,.1*e,.25*e),fe.weapon){let i=fe.weapon.userData.metal;i.color.set([10127994,14213352,10146047][P.sword]),i.emissive.set(P.sword===2?2779903:0)}for(fe.mats[1].color.set([3104138,5923952,10134704][P.armor]);La.children.length<Math.min(P.scars,3);){let i=La.children.length,s=new Mt(new kt(.03,.16,.02),ox);s.position.set(i===0?.12:i===1?-.13:.02,.18+i*.03,.216),s.rotation.z=.5-i*.6,La.add(s)}}var Le={mesh:Cc({color:14182698,belly:16050392,dark:2759184,tailTip:16777215,paws:2759184,scale:.85}),pos:new z(2,2.5,11),yaw:0,atkT:-1,cd:0,target:null,speed:0,barkCd:0};ze.add(Le.mesh.group);Le.pos.y=Kt(Le.pos.x,Le.pos.z);Le.mesh.group.position.copy(Le.pos);var cx={bandit:{name:"Bandyta",hp:45,dmg:9,speed:4,range:1.7,aggro:15,windup:.5,cd:1.5,xp:30,gold:[4,14],radius:.45,renown:1,make:()=>Ui({shirt:[7023135,4868650,5913130][Math.floor(Math.random()*3)],pants:3025442,hair:1840140,hood:Math.random()<.5?3811866:null,weapon:!0,blade:9079434})},wolf:{name:"Wilk",hp:30,dmg:7,speed:6,range:1.4,aggro:17,windup:.35,cd:1.3,xp:20,gold:[0,0],radius:.5,quad:!0,renown:1,make:()=>Cc({color:7237234,belly:11579568,scale:1.15,eye:16763955})},ghoul:{name:"Upi\xF3r",hp:60,dmg:12,speed:3.5,range:1.7,aggro:20,windup:.6,cd:1.6,xp:45,gold:[2,10],radius:.45,renown:2,make:()=>Ui({skin:12108976,shirt:4938314,pants:3817528,hair:2764586,eyeGlow:6750105,weapon:!0,blade:6978154,scale:1.05,thin:!0})},leader:{name:"Herszt Wronis\u0142aw",hp:190,dmg:14,speed:4.2,range:1.9,aggro:22,windup:.5,cd:1.2,xp:150,gold:[0,0],radius:.55,renown:5,make:()=>Ui({shirt:2039583,pants:4001808,hair:1118481,beard:1118481,weapon:!0,blade:11579568,scale:1.2,cape:1118481})},boss:{name:"Rycerz Popio\u0142u",hp:750,dmg:24,speed:3.3,range:3.4,aggro:34,windup:.8,cd:1.6,xp:800,gold:[300,300],radius:1,renown:30,make:()=>Ui({skin:4866104,shirt:6974068,pants:4868690,boots:2763306,helmet:8026756,eyeGlow:16738816,weapon:!0,blade:3811882,bladeGlow:16730624,scale:2.1,cape:2756624})}},Se=[],Bi=null,Gc=0,Vc=class{constructor(t,e,i,s="wild",r=null){this.type=t,this.def=cx[t],this.tag=s,this.mesh=this.def.make(),ze.add(this.mesh.group),this.pos=new z(e,Kt(e,i),i),this.home=r||{x:e,z:i},this.yaw=Math.random()*6.28,this.hp=this.def.hp,this.maxHp=this.def.hp,this.state="idle",this.t=0,this.atkCd=le(.3,1),this.flash=0,this.wind=0,this.kx=0,this.kz=0,this.wander=null,this.wanderT=le(1,4),this.dead=!1,this.deadT=0,this.speed=0,this.slamPhase=!1,this.summoned=!1,this.atkCount=0,this.mesh.group.position.copy(this.pos)}setFlash(){let t=this.flash,e=this.wind;for(let i of this.mesh.mats)i.userData.baseE===void 0&&(i.userData.baseE=i.emissive.getHex()),t>0?i.emissive.setRGB(t,t,t):e>0?i.emissive.setRGB(e*.6,0,0):i.emissive.setHex(i.userData.baseE)}update(t){let e=this.def,i=this.mesh.group;if(this.dead){this.deadT+=t;let g=Math.min(1,this.deadT*2.5);this.mesh.kind==="quad"?i.rotation.z=g*Math.PI/2:i.rotation.x=-g*Math.PI/2,this.deadT>1.8&&(i.position.y-=t*.7),this.deadT>3.2&&(this.remove=!0);return}if((this.flash>0||this.wind>0||this._fl)&&(this.setFlash(),this._fl=this.flash>0||this.wind>0),this.flash=Math.max(0,this.flash-t*4),Math.abs(this.kx)+Math.abs(this.kz)>.05){Rs(this.pos,this.kx*t,this.kz*t,e.radius);let g=Math.exp(-7*t);this.kx*=g,this.kz*=g}let s=T.pos.x-this.pos.x,r=T.pos.z-this.pos.z,o=Math.hypot(s,r),a=Math.atan2(s,r),c=0,h=0;if(this.state==="surrender"){this.yaw=fn(this.yaw,a,t*3),i.position.copy(this.pos),i.rotation.y=this.yaw,Es(this.mesh,t,0,-1,{kneel:!0});return}if(this.state==="leaving"){c=3,h=Math.atan2(this.pos.x-dt.camp.x+30,this.pos.z-dt.camp.z+30),this.t+=t,this.t>6&&(this.remove=!0),this.yaw=fn(this.yaw,h,t*6),Rs(this.pos,Math.sin(h)*c*t,Math.cos(h)*c*t,e.radius),i.position.copy(this.pos),i.rotation.y=this.yaw,Es(this.mesh,t,c);return}let l=Math.hypot(T.pos.x-dt.village.x,T.pos.z-dt.village.z),u=!T.dead&&(l>36||this.type==="boss");this.atkCd-=t;let f=Math.hypot(this.pos.x-this.home.x,this.pos.z-this.home.z),p=-1;switch(this.state){case"idle":if(this.wanderT-=t,this.wanderT<=0&&(this.wanderT=le(2,6),this.wander=Math.random()<.6?{x:this.home.x+le(-8,8),z:this.home.z+le(-8,8)}:null),this.wander){let g=this.wander.x-this.pos.x,x=this.wander.z-this.pos.z;Math.hypot(g,x)>.8?(c=e.speed*.3,h=Math.atan2(g,x)):this.wander=null}u&&o<e.aggro&&(this.state="chase",this.type==="boss"&&hx(this));break;case"chase":if(!u||o>e.aggro*2.2||f>55){this.state="return";break}o>e.range*.85&&(c=e.speed,h=a),o<e.range+.4&&this.atkCd<=0&&(this.state="windup",this.t=0,this.slamPhase=this.type==="boss"&&this.atkCount%3===2,this.slamPhase&&lx(this)),this.yaw=fn(this.yaw,a,t*8);break;case"windup":{this.t+=t;let g=this.slamPhase?1.1:e.windup;this.wind=Math.min(1,this.t/g)*.6,this.slamPhase||(this.yaw=fn(this.yaw,a,t*3)),p=this.t/g*.35,this.t>=g&&(this.strike(o,a),this.state="recover",this.t=0,this.wind=0,this.atkCount++);break}case"recover":this.t+=t,p=.35+Math.min(1,this.t/.45)*.65,this.t>.45&&(this.state="chase",this.atkCd=e.cd*le(.8,1.3));break;case"return":{let g=this.home.x-this.pos.x,x=this.home.z-this.pos.z;c=e.speed*.7,h=Math.atan2(g,x),Math.hypot(g,x)<3&&(this.state="idle"),u&&o<e.aggro*.6&&f<40&&(this.state="chase"),this.hp<this.maxHp&&(this.hp=Math.min(this.maxHp,this.hp+t*8));break}}if(c>0){this.state!=="chase"&&(this.yaw=fn(this.yaw,h,t*5));let g=Math.sin(h)*c*t,x=Math.cos(h)*c*t,m=this.pos.x+g,d=this.pos.z+x;this.type!=="boss"&&Math.hypot(m,d)<38&&(g=0,x=0,c=0),Rs(this.pos,g,x,e.radius)}for(let g of Se){if(g===this||g.dead)continue;let x=this.pos.x-g.pos.x,m=this.pos.z-g.pos.z,d=Math.hypot(x,m),M=e.radius+g.def.radius+.2;if(d<M&&d>.001){let y=(M-d)*.5;this.pos.x+=x/d*y,this.pos.z+=m/d*y}}if(!T.dead){let g=this.pos.x-T.pos.x,x=this.pos.z-T.pos.z,m=Math.hypot(g,x),d=e.radius+.45;m<d&&m>.001&&(this.pos.x=T.pos.x+g/m*d,this.pos.z=T.pos.z+x/m*d)}this.pos.y=Kt(this.pos.x,this.pos.z),this.speed=ge(this.speed,c,Math.min(1,t*8)),i.position.copy(this.pos),i.rotation.y=this.yaw,this.mesh.kind==="quad"?Pc(this.mesh,t,this.speed,p):Es(this.mesh,t,this.speed,p),this.type==="ghoul"&&be>.75&&this.tag==="wild"&&(this.hp-=t*15,Math.random()<t*8&&Xe(this.pos.x,this.pos.y+1.2,this.pos.z,16747050,2,1,2),this.hp<=0&&Xa(this,!0))}strike(t,e){let i=this.def;if(this.type==="boss"&&this.slamPhase){if(jt.slam(),hr(.6),_u(),Xe(this.pos.x,this.pos.y+.3,this.pos.z,6969930,24,9,4,.8,1.6),Xe(this.pos.x,this.pos.y+.3,this.pos.z,16738842,12,7,5,.6,1.2),t<5.8&&ou(i.dmg*1.3,this,14),!this.summoned&&this.hp<this.maxHp*.5){this.summoned=!0;for(let r=0;r<3;r++){let o=r*2.1;As("ghoul",this.pos.x+Math.sin(o)*6,this.pos.z+Math.cos(o)*6,"boss",{x:dt.ruins.x,z:dt.ruins.z}).state="chase"}ee("Rycerz Popio\u0142u przyzywa upiory!","e")}return}this.mesh.kind==="quad"?jt.bark():jt.swing();let s=this.type==="boss"?1.4:1;t<i.range+.6&&Math.abs(ka(e,this.yaw))<s&&ou(i.dmg,this,this.type==="boss"?9:4)}};function As(n,t,e,i,s){let r=new Vc(n,t,e,i,s);return Se.push(r),r}var yu=new Je({color:16726554,transparent:!0,opacity:.5,depthWrite:!1,side:un}),ki=new Mt(new Ks(5,5.8,40),yu);ki.rotation.x=-Math.PI/2;ki.visible=!1;ze.add(ki);var Wa=null;function lx(n){Wa=n,ki.visible=!0,ki.position.set(n.pos.x,n.pos.y+.15,n.pos.z)}function _u(){ki.visible=!1,Wa=null}function hx(n){n.introDone||(n.introDone=!0,ee("Rycerz Popio\u0142u powstaje z proch\xF3w!","e",4),jt.evil(),hr(.5),Xe(n.pos.x,n.pos.y+2,n.pos.z,16738842,30,6,6,1,1.5))}function Zc(n,t,e,i,s,r){if(n.dead||n.state==="surrender"||n.state==="leaving")return;t=Math.round(t),n.hp-=t,n.flash=1;let o=n.type==="boss"?.08:n.type==="leader"?.5:1;if(n.kx+=i*r*o,n.kz+=s*r*o,lr(""+t,n.pos.x,n.pos.y+2.2*(n.type==="boss"?2:1),n.pos.z,e?"crit":"dmg",.9),Xe(n.pos.x,n.pos.y+1.2,n.pos.z,n.type==="ghoul"?8978346:n.type==="boss"?16738842:11147802,e?10:5,3,2.5,.45),(n.state==="idle"||n.state==="return")&&(n.state="chase"),Bi=n,Gc=5,n.type==="leader"&&!P.flags.leaderFate&&n.hp<n.maxHp*.25){n.hp=Math.ceil(n.maxHp*.25),n.state="surrender",n.wind=0,n.flash=0,n.setFlash(),ee("Wronis\u0142aw rzuca miecz i b\u0142aga o lito\u015B\u0107! Podejd\u017A, by zdecydowa\u0107 o jego losie.","q",5),jt.quest();return}n.hp<=0&&Xa(n)}function Xa(n,t=!1){if(n.dead)return;if(n.dead=!0,n.deadT=0,n.hp=0,n.flash=0,n.wind=0,n.setFlash(),Wa===n&&_u(),t){n.remove=!0;return}P.kills++;let e=n.def,i=Math.min(8,Math.max(2,Math.round(e.xp/12)));for(let r=0;r<i;r++)cu("xp",n.pos.x,n.pos.y+1,n.pos.z,e.xp/i);let s=Math.round(le(e.gold[0],e.gold[1]));if(s>0){let r=Math.min(8,Math.max(1,Math.round(s/8)));for(let o=0;o<r;o++)cu("gold",n.pos.x,n.pos.y+1,n.pos.z,s/r)}if(Gi(e.renown,!0),n.tag==="camp"&&(P.campKills++,P.campKills<4&&ee(`Bandyci w obozie: ${P.campKills}/4`,""),Wc()),n.type==="boss"){P.flags.bossDead=!0,P.quests.ruins=2,P.tracked="ruins",jt.victory(),hr(.8),Xe(n.pos.x,n.pos.y+2,n.pos.z,16764992,40,8,8,1.4,1.5),ie.runeMat&&ie.runeMat.emissive.set(4235519);for(let r of Se)r.tag==="boss"&&!r.dead&&Xa(r);setTimeout(ey,2500),Ce()}}function Wc(){!P.flags.campCleared&&P.campKills>=4&&P.flags.leaderFate&&(P.flags.campCleared=!0,P.quests.bandits<1&&(P.quests.bandits=1),P.tracked="bandits",ee("Ob\xF3z bandyt\xF3w rozbity! Wr\xF3\u0107 do So\u0142tysa Bogumi\u0142a.","q",4),jt.quest(),Ce())}var Fi=0;fe.group.position.copy(T.pos);fe.group.rotation.y=T.yaw;function hr(n){Fi=Math.max(Fi,n)}var za=0;function ou(n,t,e=4){if(!(T.dead||T.invuln>0||T.rollT>0||Pe)){if(n=Math.round(n*Fa[P.armor].mul*le(.9,1.1)),T.hp-=n,T.invuln=.3,T.lastHurt=Dn.elapsedTime,za=1,jt.hurt(),hr(.25),lr("-"+n,T.pos.x,T.pos.y+2.2,T.pos.z,"hurt",.9),t){let i=T.pos.x-t.pos.x,s=T.pos.z-t.pos.z,r=Math.hypot(i,s)||1;T.kvx=i/r*e,T.kvz=s/r*e}T.attackT>=0&&Math.random()<.5&&(T.attackT=-1),T.hp<=0&&(T.hp=0,T.dead=!0,T.deadT=0,jt.death())}}function ux(){At("death").style.display="none";let n=Math.floor(P.xp*.25);P.xp-=n,P.scars++,T.dead=!1,T.hp=yn(),T.mana=Kn(),T.pos.set(0,2.5,9),fe.group.rotation.set(0,0,0),Le.pos.set(2,2.5,11);for(let t of Se)!t.dead&&t.state!=="surrender"&&(t.state="return",t.hp=t.maxHp);yi(),n>0&&ee(`Utracono ${n} do\u015Bwiadczenia.`,"e"),Pe=!1,Ce()}var Da=[],dx=new _s(.16,0),fx=new Te(.14,.14,.05,8),px=new Je({color:9367807}),mx=new Ae({color:16763955,emissive:6702080});function cu(n,t,e,i,s){let r=new Mt(n==="xp"?dx:fx,n==="xp"?px:mx);r.position.set(t,e,i),ze.add(r);let o=Math.random()*6.28,a=le(1.5,3.5);Da.push({m:r,kind:n,amount:s,vx:Math.cos(o)*a,vz:Math.sin(o)*a,vy:le(3,6),t:0})}function gx(n){for(let t=Da.length-1;t>=0;t--){let e=Da[t];e.t+=n;let i=e.m,s=T.pos.x-i.position.x,r=T.pos.y+1-i.position.y,o=T.pos.z-i.position.z,a=Math.hypot(s,r,o);if(e.t>.7&&a<9&&!T.dead){let h=14/Math.max(.5,a);e.vx=ge(e.vx,s/a*12,Math.min(1,n*h)),e.vy=ge(e.vy,r/a*12,Math.min(1,n*h)),e.vz=ge(e.vz,o/a*12,Math.min(1,n*h))}else e.vy-=12*n,e.vx*=Math.exp(-2*n),e.vz*=Math.exp(-2*n);i.position.x+=e.vx*n,i.position.y+=e.vy*n,i.position.z+=e.vz*n;let c=Kt(i.position.x,i.position.z)+.2;i.position.y<c&&(i.position.y=c,e.vy=Math.abs(e.vy)*.4),i.rotation.y+=n*4,(a<1.1&&e.t>.5||e.t>25)&&(e.t<=25&&(e.kind==="xp"?(P.xp+=Math.round(e.amount),jt.pickup()):(P.gold+=Math.round(e.amount),jt.coin())),ze.remove(i),Da.splice(t,1))}}var Ua=[],lu=new Ln(.28,0),xx=new Je({color:10148095}),yx=new Je({color:16777215});function vu(){if(T.dead||Pe)return;if(T.mana<20){ee("Za ma\u0142o many!","g",1.5);return}T.mana-=20,T.castT=.4;let n=null,t=1e9;for(let s of Se){if(s.dead||s.state==="surrender"||s.state==="leaving")continue;let r=nn(s.pos,T.pos);if(r>26)continue;let o=Math.abs(ka(Math.atan2(s.pos.x-T.pos.x,s.pos.z-T.pos.z),T.yaw)),a=r+o*12;a<t&&(t=a,n=s)}n&&(T.yaw=Math.atan2(n.pos.x-T.pos.x,n.pos.z-T.pos.z));let e=new Mt(lu,xx),i=new Mt(lu,yx);i.scale.setScalar(.5),e.add(i),e.position.set(T.pos.x+Math.sin(T.yaw)*.8,T.pos.y+1.5,T.pos.z+Math.cos(T.yaw)*.8),ze.add(e),Ua.push({m:e,vx:Math.sin(T.yaw)*18,vy:0,vz:Math.cos(T.yaw)*18,target:n,life:2.2,dmg:18+12*P.stats.magia}),jt.magic()}function _x(n){for(let t=Ua.length-1;t>=0;t--){let e=Ua[t];e.life-=n;let i=e.m;if(e.target&&!e.target.dead){let r=e.target,o=r.pos.x-i.position.x,a=r.pos.y+1.2*(r.type==="boss"?2:1)-i.position.y,c=r.pos.z-i.position.z,h=Math.hypot(o,a,c)||1,l=Math.min(1,n*6);e.vx=ge(e.vx,o/h*20,l),e.vy=ge(e.vy,a/h*20,l),e.vz=ge(e.vz,c/h*20,l)}i.position.x+=e.vx*n,i.position.y+=e.vy*n,i.position.z+=e.vz*n,i.rotation.x+=n*10,i.rotation.y+=n*8,Math.random()<.6&&Xe(i.position.x,i.position.y,i.position.z,10148095,1,.5,.5,.3,.6);let s=!1;for(let r of Se){if(r.dead||r.state==="surrender"||r.state==="leaving")continue;let o=r.type==="boss"?2:1;if(Math.hypot(r.pos.x-i.position.x,r.pos.y+1.1*o-i.position.y,r.pos.z-i.position.z)<r.def.radius+.6){let a=Math.hypot(e.vx,e.vz)||1;Zc(r,e.dmg*le(.9,1.1),!1,e.vx/a,e.vz/a,5),s=!0;break}}i.position.y<Kt(i.position.x,i.position.z)&&(s=!0),(s||e.life<=0)&&(Xe(i.position.x,i.position.y,i.position.z,10148095,10,4,3,.5),s&&jt.boom(),ze.remove(i),Ua.splice(t,1))}}var jn={jx:0,jy:0,keys:{}},Jn={id:null,ox:0,oy:0},Tn={id:null,x:0,y:0},Rn=0,gi=.42,Ba=8,Pa=8,Cs=At("joy"),Mu=At("knob"),Is=At("touch");Is.addEventListener("pointerdown",n=>{if(Ni(),!Pe){n.clientX<window.innerWidth*.42&&Jn.id===null&&n.pointerType!=="mouse"?(Jn.id=n.pointerId,Jn.ox=n.clientX,Jn.oy=n.clientY,Cs.style.left=n.clientX+"px",Cs.style.top=n.clientY+"px",Cs.style.opacity=1):Tn.id===null&&(Tn.id=n.pointerId,Tn.x=n.clientX,Tn.y=n.clientY);try{Is.setPointerCapture(n.pointerId)}catch{}}});Is.addEventListener("pointermove",n=>{if(n.pointerId===Jn.id){let t=n.clientX-Jn.ox,e=n.clientY-Jn.oy,i=Math.hypot(t,e),s=55;i>s&&(t=t/i*s,e=e/i*s),Mu.style.transform=`translate(${t}px,${e}px)`,jn.jx=t/s,jn.jy=-e/s}else if(n.pointerId===Tn.id){let t=n.clientX-Tn.x,e=n.clientY-Tn.y;Tn.x=n.clientX,Tn.y=n.clientY,Rn-=t*.0065,gi=xi(gi+e*.0045,.08,1.25)}});function bu(n){n.pointerId===Jn.id&&(Jn.id=null,jn.jx=0,jn.jy=0,Mu.style.transform="",Cs.style.left="110px",Cs.style.top="calc(100% - 110px)",Cs.style.opacity=.5),n.pointerId===Tn.id&&(Tn.id=null)}Is.addEventListener("pointerup",bu);Is.addEventListener("pointercancel",bu);Is.addEventListener("wheel",n=>{Ba=xi(Ba+n.deltaY*.01,4,14)});function ur(n,t,e=!1){let i=At(n),s=null;i.addEventListener("pointerdown",o=>{o.preventDefault(),o.stopPropagation(),Ni(),i.classList.add("on"),t(),e&&(clearInterval(s),s=setInterval(t,200))});let r=()=>{i.classList.remove("on"),clearInterval(s)};i.addEventListener("pointerup",r),i.addEventListener("pointercancel",r),i.addEventListener("pointerleave",r)}ur("bAtk",()=>Su(),!0);ur("bMag",()=>vu());ur("bRoll",()=>Tu());ur("bPot",()=>Au());ur("bUse",()=>Cu());window.addEventListener("keydown",n=>{if(jn.keys[n.code]=!0,Ni(),!n.repeat){if(n.code==="KeyJ"&&Su(),n.code==="KeyK"&&vu(),n.code==="Space"&&Tu(),n.code==="KeyE")if(dr){let t=At("dOpts").querySelector("button");t&&t.click()}else Cu();n.code==="KeyQ"&&Au(),(n.code==="Escape"||n.code==="KeyM")&&Za()}});window.addEventListener("keyup",n=>{jn.keys[n.code]=!1});function wu(n){let t=null,e=n;for(let i of Se){if(i.dead||i.state==="surrender"||i.state==="leaving")continue;let s=nn(i.pos,T.pos);s<e&&(e=s,t=i)}return t}function Su(){if(!(T.dead||Pe||T.rollT>0)){if(T.attackT>=0){T.attackT>.35&&(T.comboQ=!0);return}Eu()}}function Eu(){T.combo=T.comboTimer>0?(T.combo+1)%3:0,T.attackT=0,T.atkHit=!1,T.comboQ=!1;let n=wu(5.5);n&&(T.yaw=Math.atan2(n.pos.x-T.pos.x,n.pos.z-T.pos.z)),jt.swing()}function vx(){let n=Oa[P.sword].dmg+5*P.stats.sila,t=!1;for(let e of Se){if(e.dead||e.state==="surrender"||e.state==="leaving")continue;let i=e.pos.x-T.pos.x,s=e.pos.z-T.pos.z,r=Math.hypot(i,s);if(r>2.4+e.def.radius||Math.abs(ka(Math.atan2(i,s),T.yaw))>1.25&&r>1.2)continue;let o=n*(T.combo===2?1.6:1)*le(.9,1.1),a=Math.random()<.06+.05*P.stats.zrecznosc;a&&(o*=2),Zc(e,o,a,i/(r||1),s/(r||1),T.combo===2?8:4),t=!0,a&&jt.crit()}t&&(jt.hit(),hr(T.combo===2?.25:.12))}function Tu(){if(T.dead||Pe||T.rollCd>0)return;let n=0,t=0,e=Ru();e.m>.1?(n=e.x,t=e.z):(n=Math.sin(T.yaw),t=Math.cos(T.yaw));let i=Math.hypot(n,t)||1;T.rollDir={x:n/i,z:t/i},T.yaw=Math.atan2(n,t),T.rollT=.42,T.rollCd=.75,T.attackT=-1,jt.roll(),Xe(T.pos.x,T.pos.y+.2,T.pos.z,10127978,5,2,1,.4)}function Au(){if(T.dead||Pe)return;if(P.potions<=0){ee("Nie masz mikstur. Kup je u kupca Mirka.","",2);return}if(T.hp>=yn()){ee("Zdrowie jest pe\u0142ne.","",1.5);return}P.potions--;let n=60+10*P.stats.sila;T.hp=Math.min(yn(),T.hp+n),jt.drink(),lr("+"+n,T.pos.x,T.pos.y+2.2,T.pos.z,"heal"),Xe(T.pos.x,T.pos.y+1,T.pos.z,16732240,10,2,3,.6)}function Ru(){let n=jn.jx,t=jn.jy,e=jn.keys;(e.KeyW||e.ArrowUp)&&(t+=1),(e.KeyS||e.ArrowDown)&&(t-=1),(e.KeyA||e.ArrowLeft)&&(n-=1),(e.KeyD||e.ArrowRight)&&(n+=1);let i=Math.min(1,Math.hypot(n,t)),s=-Math.sin(Rn),r=-Math.cos(Rn),o=-r,a=s,c=s*t+o*n,h=r*t+a*n,l=Math.hypot(c,h);return l>0&&(c/=l,h/=l),{x:c,z:h,m:i}}function Mx(n){if(T.dead){T.deadT+=n,fe.group.rotation.x=-Math.min(1,T.deadT*2)*Math.PI/2,T.deadT>2.2&&At("death").style.display!=="flex"&&(At("death").style.display="flex",Pe=!0);return}T.rollCd-=n,T.invuln-=n,T.comboTimer-=n,T.castT-=n;let t=Ru(),e=6.2+.45*P.stats.zrecznosc,i=0,s=0;if(T.rollT>0){T.rollT-=n;let a=12+P.stats.zrecznosc;i=T.rollDir.x*a,s=T.rollDir.z*a}else if(T.attackT>=0){T.attackT+=n/.42,!T.atkHit&&T.attackT>=.45&&(T.atkHit=!0,vx()),t.m>.1&&(i=t.x*e*.2,s=t.z*e*.2);let a=T.attackT>.3&&T.attackT<.55?3:0;i+=Math.sin(T.yaw)*a,s+=Math.cos(T.yaw)*a,T.attackT>=1&&(T.attackT=-1,T.comboTimer=.45,T.comboQ&&Eu())}else t.m>.05&&(i=t.x*e*t.m,s=t.z*e*t.m,T.yaw=fn(T.yaw,Math.atan2(t.x,t.z),n*12));i+=T.kvx,s+=T.kvz;let r=Math.exp(-8*n);T.kvx*=r,T.kvz*=r,Rs(T.pos,i*n,s*n,.45),T.speed=ge(T.speed,Math.hypot(i,s),Math.min(1,n*10)),T.mana=Math.min(Kn(),T.mana+n*(5+P.stats.magia)),Dn.elapsedTime-T.lastHurt>6&&(T.hp=Math.min(yn(),T.hp+n*2.5));let o=fe.group;if(o.position.copy(T.pos),T.pos.y<0&&(o.position.y=Math.max(T.pos.y,-.6)),o.rotation.y=T.yaw,T.rollT>0){let a=1-T.rollT/.42;fe.body.rotation.x=a*Math.PI*2,fe.body.position.y=Math.sin(a*Math.PI)*.5-.3,fe.legL.rotation.x=-1.2,fe.legR.rotation.x=-1.2,fe.armL.rotation.x=-1.5,fe.armR.rotation.x=-1.5}else Es(fe,n,T.speed,T.attackT,{cast:T.castT>0});o.visible=!(T.invuln>0&&Math.floor(T.invuln*30)%2===0&&T.rollT<=0),Va.rotation.z+=n}function bx(n){let t=Le,e=t.mesh.group;if(t.cd-=n,t.barkCd-=n,nn(t.pos,T.pos)>45&&(t.pos.set(T.pos.x-Math.sin(T.yaw)*2,0,T.pos.z-Math.cos(T.yaw)*2),t.pos.y=Kt(t.pos.x,t.pos.z)),!t.target||t.target.dead||t.target.state==="surrender"||nn(t.target.pos,T.pos)>14){t.target=null;let u=wu(11);u&&u.state!=="idle"&&(t.target=u)}let s,r,o=0,a=2.5;t.target&&!T.dead?(s=t.target.pos.x,r=t.target.pos.z,a=t.target.def.radius+.9):(s=T.pos.x-Math.sin(T.yaw+.8)*2.2,r=T.pos.z-Math.cos(T.yaw+.8)*2.2,a=.8);let c=s-t.pos.x,h=r-t.pos.z,l=Math.hypot(c,h);t.atkT>=0?(t.atkT+=n/.4,t.atkT>=.5&&!t.hitDone&&t.target&&(t.hitDone=!0,Zc(t.target,5+P.renown*.05,!1,c/(l||1),h/(l||1),1.5),jt.bark()),t.atkT>=1&&(t.atkT=-1)):l>a?(o=Math.min(8.5,l*2.5+(t.target?4:0)),t.yaw=fn(t.yaw,Math.atan2(c,h),n*10),Rs(t.pos,Math.sin(t.yaw)*o*n,Math.cos(t.yaw)*o*n,.3)):t.target&&t.cd<=0?(t.atkT=0,t.hitDone=!1,t.cd=1.3,t.yaw=Math.atan2(c,h)):t.target||(t.yaw=fn(t.yaw,Math.atan2(T.pos.x-t.pos.x,T.pos.z-t.pos.z),n*3)),t.speed=ge(t.speed,o,Math.min(1,n*8)),t.pos.y=Kt(t.pos.x,t.pos.z),e.position.copy(t.pos),t.pos.y<0&&(e.position.y=Math.max(t.pos.y,-.3)),e.rotation.y=t.yaw,Pc(t.mesh,n,t.speed,t.atkT)}var Ls=[];function Wi(n,t,e,i,s={}){let r=Ui(i);ze.add(r.group);let o={id:n,name:t,mesh:r,pos:new z(e.x,Kt(e.x,e.z),e.z),home:{x:e.x,z:e.z},yaw:Math.atan2(-e.x,-e.z),wander:s.wander||0,target:null,wt:le(1,5),speed:0,bubbleCd:le(2,8),talk:s.talk,flee:0};return Ls.push(o),o}var Dc=Wi("elder","So\u0142tys Bogumi\u0142",ie.spots.elder,{shirt:6965802,pants:3815994,hair:14540253,beard:15658734,skin:14198912},{talk:Ux}),wx=Wi("herb","Zielarka Jagna",ie.spots.herbalist,{shirt:4876858,pants:3811866,hair:9067050,dress:3824170,longHair:!0},{talk:Nx}),vy=Wi("merch","Kupiec Mirek",ie.spots.merchant,{shirt:9071146,pants:4864554,hair:2759178,beard:2759178},{talk:Na}),Sx=Wi("lender","Lichwiarz Grzegorz",ie.spots.lender,{shirt:5904954,pants:2763306,hair:4868682,skin:15253664},{talk:Fx}),Ex=Wi("widow","Wdowa Halina",ie.spots.widow,{shirt:3816010,pants:2763306,hair:5917242,dress:2763322,longHair:!0},{talk:Bx}),My=Wi("alch","Alchemik Kruk",ie.spots.alchemist,{shirt:2759226,pants:1710634,hood:1706538,staff:6750088},{talk:Ox}),hu=[{shirt:10508858,pants:4864554,hair:3811866},{shirt:5929626,pants:3815994,hair:13148240,dress:4876938,longHair:!0},{shirt:8026682,pants:4864554,hair:1710618},{shirt:10111594,pants:3811882,hair:6961690,dress:9058906,longHair:!0},{shirt:4876874,pants:5917242,hair:9079434,beard:9079434},{shirt:11569754,pants:3815978,hair:4860442,scale:.7},{shirt:6969994,pants:3815994,hair:10512954,dress:5917306,longHair:!0},{shirt:3824234,pants:2763306,hair:2759178,scale:.75}];hu.forEach((n,t)=>{let e=t/hu.length*Math.PI*2;Wi("v"+t,"Mieszkaniec",{x:Math.sin(e)*9,z:Math.cos(e)*9},n,{wander:1})});var rr={hero:["Nasz bohater!","Witaj, dobry rycerzu!","\u2764","Niech ci\u0119 bogowie strzeg\u0105!","Dzieci o tobie m\xF3wi\u0105!"],evil:["Uciekajcie!","To ten okrutnik\u2026","Nie patrz mu w oczy!","Prosz\u0119, nie krzywd\u017A mnie!"],famous:["To ten s\u0142ynny rycerz!","S\u0142ysza\u0142am o tobie!","Opowiesz, jak pokona\u0142e\u015B bandyt\xF3w?"],neutral:["Dzie\u0144 dobry.","Hmm, obcy\u2026","\u0141adna dzi\u015B pogoda.","Uwa\u017Caj na drogach.","S\u0142ysza\u0142e\u015B o upiorach?"],night:["P\xF3\u017Ano ju\u017C\u2026","Nie wychod\u017A noc\u0105 za wie\u015B.","Ziewam\u2026"]};function Tx(n){for(let t of Ls){let e=t.mesh.group,i=nn(t.pos,T.pos);if(i>110){e.visible=!1;continue}e.visible=!0;let s=0;if(t.bubbleCd-=n,t.wander){if(P.morality<=-40&&i<7&&!T.dead&&(t.flee=2.5),t.flee>0){t.flee-=n;let o=t.pos.x-T.pos.x,a=t.pos.z-T.pos.z;t.yaw=fn(t.yaw,Math.atan2(o,a),n*8),s=4.5}else if(t.wt-=n,t.wt<=0&&(t.wt=le(3,9),t.target=Math.random()<.7?(()=>{let o=Math.random()*6.28,a=le(5,22);return{x:Math.sin(o)*a,z:Math.cos(o)*a}})():null),i<4&&(t.target=null,t.yaw=fn(t.yaw,Math.atan2(T.pos.x-t.pos.x,T.pos.z-t.pos.z),n*4)),t.target){let o=t.target.x-t.pos.x,a=t.target.z-t.pos.z;Math.hypot(o,a)>.8?(t.yaw=fn(t.yaw,Math.atan2(o,a),n*4),s=1.5):t.target=null}if(s>0){let o=t.pos.x+Math.sin(t.yaw)*s*n,a=t.pos.z+Math.cos(t.yaw)*s*n;Math.hypot(o,a)<30?Rs(t.pos,o-t.pos.x,a-t.pos.z,.4):(t.target=null,t.wt=0)}if(i<6&&t.bubbleCd<=0&&!T.dead){t.bubbleCd=le(9,16);let o=rr.neutral;P.morality<=-40?o=rr.evil:P.morality>=35&&P.renown>=15?o=rr.hero:P.renown>=30?o=rr.famous:Vi&&(o=rr.night),lr(o[Math.floor(Math.random()*o.length)],t.pos.x,t.pos.y+2.5,t.pos.z,"bubble",2.6,.15)}}else i<6?t.yaw=fn(t.yaw,Math.atan2(T.pos.x-t.pos.x,T.pos.z-t.pos.z),n*4):t.yaw=fn(t.yaw,Math.atan2(-t.home.x,-t.home.z),n*2);t.speed=ge(t.speed,s,Math.min(1,n*6)),e.position.copy(t.pos),e.rotation.y=t.yaw,Es(t.mesh,n,t.speed)}}var Xc=null;function Ax(){let n=[];for(let e of Ls)e.talk&&n.push({x:e.pos.x,z:e.pos.z,r:3.2,label:"Rozmawiaj",act:()=>e.talk(e)});if(Se.some(e=>!e.dead&&e.state!=="idle"&&e.state!=="surrender"&&nn(e.pos,T.pos)<25)||n.push({x:Le.pos.x,z:Le.pos.z,r:1.6,label:"Pog\u0142aszcz Iskr\u0119",act:Cx,low:!0}),P.quests.herbs>=0&&P.quests.herbs<2)for(let e of ie.herbs)P.herbTaken[e.i]||n.push({x:e.x,z:e.z,r:2.4,label:"Zbierz ziele",act:()=>Px(e)});for(let e of ie.chests)P.chestOpened[e.i]||n.push({x:e.x,z:e.z,r:2.4,label:"Otw\xF3rz skrzyni\u0119",act:()=>Ix(e)});n.push({x:ie.spots.house.x,z:ie.spots.house.z,r:3,label:P.houseOwned?"Odpocznij w domu":"Dom na sprzeda\u017C",act:Lx});for(let e of Se)e.state==="surrender"&&n.push({x:e.pos.x,z:e.pos.z,r:3.2,label:"Zdecyduj o losie",act:()=>Dx(e)});return n}function Rx(){let n=null,t=1e9;if(!T.dead)for(let i of Ax()){let s=Math.hypot(i.x-T.pos.x,i.z-T.pos.z)+(i.low?100:0);s<i.r+(i.low?100:0)&&s<t&&(t=s,n=i)}Xc=n;let e=At("bUse");n&&!Pe?(e.style.display="flex",e.textContent!==n.label&&(e.textContent=n.label)):e.style.display="none"}function Cu(){Xc&&!Pe&&!T.dead&&Xc.act()}function Cx(){jt.bark(),P.flags.foxPets++,lr("\u2764",Le.pos.x,Le.pos.y+1.2,Le.pos.z,"heal",1.2),Xe(Le.pos.x,Le.pos.y+1,Le.pos.z,16738954,6,1.5,2.5,.7),P.flags.foxPets===1&&ee("Iskra merda ogonem. B\u0119dzie walczy\u0107 u twojego boku.","g")}function Px(n){P.herbTaken[n.i]=!0,P.herbsHave++,n.group.visible=!1,jt.pickup(),Xe(n.x,Kt(n.x,n.z)+.6,n.z,8978414,10,2,3,.7),ee(`Ksi\u0119\u017Cycowe Ziele: ${Math.min(P.herbsHave,6)}/6`,P.herbsHave>=6?"q":""),P.herbsHave===6&&(ee(P.quests.herbs===1?"Masz do\u015B\u0107 ziela. Wr\xF3\u0107 do Zielarki Jagny.":"Masz do\u015B\u0107 ziela \u2014 kto\u015B mo\u017Ce go potrzebowa\u0107\u2026","q"),P.tracked="herbs")}function Ix(n){P.chestOpened[n.i]=!0,n.lid.rotation.x=-1.9;let t=Math.round(le(40,130));P.gold+=t;let e=`Skrzynia: ${t} z\u0142`;Math.random()<.6&&(P.potions++,e+=" i mikstura zdrowia");let i=40;P.xp+=i,jt.coin(),Xe(n.x,Kt(n.x,n.z)+.8,n.z,16763955,14,3,4,.8),ee(e+` (+${i} do\u015Bw.)`,"q"),Ce()}function Lx(){P.houseOwned?he("Tw\xF3j dom","Ciep\u0142e \u0142\xF3\u017Cko czeka. Odpocz\u0105\u0107 do rana? (pe\u0142ne zdrowie i mana, zapis gry)",[{t:"\u015Apij do rana",f:zx},{t:"Nie teraz"}]):he("Dom na Wzg\xF3rzu","Przytulny dom z widokiem na Brzezin\u0119. W\u0142a\u015Bciciel wyjecha\u0142 do miasta. Z domu b\u0119dziesz mie\u0107 codzienny doch\xF3d z dzier\u017Cawy pola (40 z\u0142 dziennie) i miejsce na odpoczynek.",[{t:"Kup dom (800 z\u0142)",dis:P.gold<800,f:()=>{P.gold-=800,P.houseOwned=!0,Gi(10),jt.quest(),ee("Dom na Wzg\xF3rzu jest tw\xF3j!","q"),Ce()}},{t:"Odejd\u017A"}])}function zx(){let n=At("fade");n.style.opacity=1,Pe=!0,setTimeout(()=>{P.time>.27&&(P.day++,Pu()),P.time=.27,T.hp=yn(),T.mana=Kn(),Ce(),n.style.opacity=0,Pe=!1,ee(`Dzie\u0144 ${P.day}. Wypocz\u0119ty ruszasz dalej.`,"g")},1200)}function Pu(){P.houseOwned&&(P.gold+=40,ee("Doch\xF3d z domu: +40 z\u0142","q"))}function Dx(n){he("Herszt Wronis\u0142aw","\u2014 Lito\u015Bci, rycerzu! Mam dzieci w Kamie\u0144cu\u2026 Przysi\u0119gam na wszystkie \u015Bwi\u0119to\u015Bci, \u017Ce odejd\u0119 i nikt ju\u017C nie us\u0142yszy o moich ludziach. We\u017A moje z\u0142oto, tylko daruj \u017Cycie!",[{t:"Oszcz\u0119d\u017A go (Dobro)",c:"good",f:()=>{P.flags.leaderFate="spared",Hi(25),P.gold+=60,ee("+60 z\u0142","q"),n.state="leaving",n.t=0,Gi(5),Wc(),Ce()}},{t:"Wykonaj wyrok (Z\u0142o)",c:"evil",f:()=>{P.flags.leaderFate="killed",Hi(-25),n.state="chase",n.hp=1,n.def={...n.def,gold:[150,150]},Xa(n),Xe(n.pos.x,n.pos.y+1.2,n.pos.z,11147802,18,4,3,.7),jt.hit(),Wc(),Ce()}}])}function Hi(n){P.morality=xi(P.morality+n,-100,100),n>0?(jt.good(),ee(`Dobro +${n}`,"g"),Xe(T.pos.x,T.pos.y+1.5,T.pos.z,16769152,16,2,4,1)):(jt.evil(),ee(`Z\u0142o ${n}`,"e"),Xe(T.pos.x,T.pos.y+1.5,T.pos.z,11145232,16,2,4,1)),yi()}function Gi(n,t=!1){P.renown+=n,t||ee(`S\u0142awa +${n}`,"q")}function qa(){let n=P.morality;return n>=70?"\u015Awietlisty Obro\u0144ca":n>=30?"Prawy Rycerz":n>-30?"W\u0119drowny Rycerz":n>-70?"Okrutny Najemnik":"Mroczny Tyran"}var dr=!1,Pe=!0;function he(n,t,e=[]){dr=!0,Pe=!0,At("dName").textContent=n,At("dText").textContent=t;let i=At("dOpts");i.innerHTML="",e.length||(e=[{t:"Dalej"}]);for(let s of e){let r=document.createElement("button");r.className="btn"+(s.c?" "+s.c:""),r.textContent=s.t,s.dis&&(r.disabled=!0),r.addEventListener("click",o=>{o.stopPropagation(),!s.dis&&(jt.click(),Iu(),s.f&&s.f())}),i.appendChild(r)}At("dialog").style.display="block"}function Iu(){dr=!1,At("dialog").style.display="none",ar||(Pe=!1)}function Ya(n,t){P.quests[n]=1,P.tracked=n,jt.quest(),ee("Nowe zadanie: "+t,"q",4),Ce()}function cr(n,t){jt.level(),ee("Zadanie uko\u0144czone: "+n,"q",4),t&&(P.xp+=t,ee(`+${t} do\u015Bwiadczenia`,"g")),Ce()}function Ux(){let n=P.quests,t="So\u0142tys Bogumi\u0142";if(n.bandits<3&&P.flags.campCleared){let e=P.flags.leaderFate==="spared"?"Darowa\u0142e\u015B Wronis\u0142awowi \u017Cycie? Masz dobre serce, rycerzu. Oby tego nie \u017Ca\u0142owa\u0142\u2026 Ale drogi zn\xF3w s\u0105 bezpieczne.":"Wronis\u0142aw nie \u017Cyje\u2026 Twarda z ciebie r\u0119ka. Ludzie b\u0119d\u0105 o tym szepta\u0107 \u2014 jedni z ulg\u0105, inni ze strachem.";he(t,e+" Przyjmij nagrod\u0119 od ca\u0142ej wioski.",[{t:"Przyjmij (+200 z\u0142)",f:()=>{P.gold+=200,Gi(15),n.bandits=3,cr("Plaga Bandyt\xF3w",150),setTimeout(uu,300)}}]);return}if(n.bandits===0){he(t,"Witaj w Brzezinie, w\u0119drowcze. Przychodzisz w z\u0142\u0105 godzin\u0119\u2026 Bandyci Wronis\u0142awa napadaj\u0105 na wozy kupc\xF3w i pal\u0105 nasze stodo\u0142y. Ich ob\xF3z le\u017Cy w Starym Lesie, na po\u0142udniowym zachodzie. Wioska zap\u0142aci 200 z\u0142otych temu, kto ich przegoni.",[{t:"Zajm\u0119 si\u0119 bandytami.",f:()=>Ya("bandits","Plaga Bandyt\xF3w")},{t:"Mo\u017Ce p\xF3\u017Aniej."}]);return}if(n.bandits===1){he(t,"Ob\xF3z Wronis\u0142awa jest na po\u0142udniowym zachodzie. Id\u017A \u015Bcie\u017Ck\u0105 od studni, przez Stary Las. Uwa\u017Caj na wilki \u2014 i nie daj si\u0119 otoczy\u0107!");return}if(n.ruins===0){uu();return}if(n.ruins===1){he(t,"Ruiny Starej Stra\u017Cnicy le\u017C\u0105 na wschodzie, za rozstajami. Rycerz Popio\u0142u podobno budzi si\u0119, gdy kto\u015B stanie na kamiennym kr\u0119gu. Przygotuj si\u0119 dobrze \u2014 kup mikstury u Mirka.");return}if(n.ruins===2){he(t,"Na wszystkie gwiazdy! Rycerz Popio\u0142u pokonany! Brzezina nigdy tego nie zapomni. Od dzi\u015B ka\u017Cdy kufel w karczmie jest dla ciebie za darmo. I przyjmij to \u2014 oszcz\u0119dno\u015Bci ca\u0142ej wioski.",[{t:"Przyjmij (+500 z\u0142)",f:()=>{P.gold+=500,Gi(25),n.ruins=3,cr("Popio\u0142y Stra\u017Cnicy",300)}}]);return}he(t,P.morality>=0?"Brzezina zawsze b\u0119dzie twoim domem, bohaterze. Dzieci bawi\u0105 si\u0119 w \u201Erycerza i Popielnego\u201D \u2014 zgadnij, kto wygrywa.":"Jeste\u015B\u2026 zawsze mile widziany. Tak. Oczywi\u015Bcie. Prosz\u0119, nie r\xF3b nikomu krzywdy.")}function uu(){he("So\u0142tys Bogumi\u0142","Jest jeszcze jedno\u2026 Nocami z ruin Starej Stra\u017Cnicy na wschodzie wype\u0142zaj\u0105 upiory. Starzy ludzie m\xF3wi\u0105, \u017Ce budzi je Rycerz Popio\u0142u \u2014 dawny stra\u017Cnik tej ziemi, kt\xF3ry zdradzi\u0142 sw\xF3j lud i zosta\u0142 przekl\u0119ty. Je\u015Bli kto\u015B mo\u017Ce po\u0142o\u017Cy\u0107 temu kres, to ty.",[{t:"Udam si\u0119 do ruin.",f:()=>Ya("ruins","Popio\u0142y Stra\u017Cnicy")},{t:"Musz\u0119 si\u0119 przygotowa\u0107."}])}function Nx(){let n=P.quests,t="Zielarka Jagna";if(n.herbs===-1){he(t,"Sprzeda\u0142e\u015B Ksi\u0119\u017Cycowe Ziele temu s\u0119powi Krukowi\u2026 Wiesz, ile trucizny z tego uwarzy? Odejd\u017A. Nie mam ci nic do powiedzenia.");return}if(n.herbs===2){he(t,"Dzi\u0119ki tobie mam leki na ca\u0142\u0105 zim\u0119. Gor\u0105czka w wiosce ju\u017C ust\u0119puje. Niech las ci\u0119 prowadzi, rycerzu.");return}if(n.herbs===0){he(t,"Ach, go\u015B\u0107! W wiosce szerzy si\u0119 gor\u0105czka, a sko\u0144czy\u0142o mi si\u0119 Ksi\u0119\u017Cycowe Ziele. Ro\u015Bnie w g\u0142\u0119bi lasu \u2014 \u015Bwieci delikatnie, najlepiej wida\u0107 je noc\u0105. Potrzebuj\u0119 sze\u015Bciu \u0142odyg. Pomo\u017Cesz?",[{t:"Przynios\u0119 zio\u0142a.",f:()=>Ya("herbs","Ziele dla Jagny")},{t:"Nie mam czasu."}]);return}if(P.herbsHave>=6){he(t,"Sze\u015B\u0107 \u0142odyg Ksi\u0119\u017Cycowego Ziela! Uratowa\u0142e\u015B wielu ludzi. Przyjmij moje mikstury \u2014 sama je warzy\u0142am.",[{t:"Oddaj zio\u0142a (Dobro)",c:"good",f:()=>{n.herbs=2,P.herbsHave-=6,P.potions+=3,P.gold+=60,Hi(12),Gi(8),cr("Ziele dla Jagny",150),ee("+3 mikstury, +60 z\u0142","q")}},{t:"Jeszcze nie teraz"}]);return}he(t,`Masz ju\u017C ${P.herbsHave} z 6 \u0142odyg. Szukaj w g\u0119stym lesie \u2014 \u015Bwiec\u0105ce kwiaty. Noc\u0105 \u0142atwiej je wypatrzy\u0107.`)}function Ox(){let n=P.quests,t="Alchemik Kruk";if(n.herbs===1&&P.herbsHave>=6){he(t,"Czuj\u0119 to\u2026 Ksi\u0119\u017Cycowe Ziele. Sze\u015B\u0107 \u0142odyg? Zap\u0142ac\u0119 ci 350 z\u0142otych. Ta g\u0142upia zielarka da ci najwy\u017Cej par\u0119 mikstur. Do czego mi ono? Hm\u2026 powiedzmy, \u017Ce niekt\xF3rzy mo\u017Cni p\u0142ac\u0105 krocie za trucizn\u0119 bez smaku.",[{t:"Sprzedaj ziele (350 z\u0142, Z\u0142o)",c:"evil",f:()=>{n.herbs=-1,P.herbsHave-=6,P.gold+=350,Hi(-20),ee("+350 z\u0142","q"),cr("Ziele dla Jagny (sprzedane)",80)}},{t:"Nie sprzedam."}]);return}he(t,"Szukasz czego\u015B\u2026 specjalnego? Moje eliksiry nie s\u0105 dla tch\xF3rzy. Mroczny eliksir daje wiedz\u0119 wojownik\xF3w, kt\xF3rzy ju\u017C nie \u017Cyj\u0105. Cena? Z\u0142oto\u2026 i kawa\u0142ek duszy.",[{t:"Mroczny eliksir (150 z\u0142) \u2014 +250 do\u015Bw., Z\u0142o",c:"evil",dis:P.gold<150,f:()=>{P.gold-=150,P.xp+=250,Hi(-5),jt.drink(),ee("+250 do\u015Bwiadczenia","g")}},{t:"Eliksir many (60 z\u0142) \u2014 pe\u0142na mana",dis:P.gold<60,f:()=>{P.gold-=60,T.mana=Kn(),jt.drink()}},{t:"Odejd\u017A"}])}function Na(){let n="Kupiec Mirek",t=[{t:`Mikstura zdrowia (30 z\u0142) [masz ${P.potions}]`,dis:P.gold<30,f:()=>{P.gold-=30,P.potions++,jt.coin(),Na()}}],e=Oa[P.sword+1];e&&t.push({t:`${e.name} (${e.price} z\u0142)`,dis:P.gold<e.price,f:()=>{P.gold-=e.price,P.sword++,yi(),jt.level(),ee("Nowa bro\u0144: "+e.name,"q"),Ce(),Na()}});let i=Fa[P.armor+1];i&&t.push({t:`${i.name} (${i.price} z\u0142)`,dis:P.gold<i.price,f:()=>{P.gold-=i.price,P.armor++,yi(),jt.level(),ee("Nowy pancerz: "+i.name,"q"),Ce(),Na()}}),t.push({t:"Do widzenia"});let s=P.morality<=-40?"T-tak, panie? Cokolwiek zechcesz\u2026 po uczciwej cenie, oczywi\u015Bcie!":P.renown>30?"Nasz bohater! Dla ciebie najlepszy towar z ca\u0142ego traktu!":"Witaj, podr\xF3\u017Cny! Mikstury, miecze, pancerze \u2014 wszystko, czego potrzebuje rycerz.";he(n,s+`  (Twoje z\u0142oto: ${P.gold} z\u0142)`,t)}function Fx(){let n=P.quests,t="Lichwiarz Grzegorz";if(n.debt===0){he(t,"Rycerz, co? Mam robot\u0119 dla kogo\u015B z mieczem. Wdowa Halina winna mi 100 z\u0142otych od p\xF3\u0142 roku. M\u0105\u017C jej zgin\u0105\u0142, ale d\u0142ug to d\u0142ug. Odbierz go \u2014 dostaniesz 50 z\u0142otych za fatyg\u0119.",[{t:"Odbior\u0119 d\u0142ug.",f:()=>Ya("debt","D\u0142ug Wdowy")},{t:"Nie b\u0119d\u0119 n\u0119ka\u0142 wdowy."}]);return}if(n.debt===1){he(t,"Na co czekasz? Dom Haliny jest po drugiej stronie placu. Tylko bez lito\u015Bci \u2014 \u0142zy to jej ulubiona waluta.");return}if(n.debt===2){let e=P.flags.debtChoice==="paid";he(t,e?"Sam zap\u0142aci\u0142e\u015B za ni\u0105? Dziwak z ciebie\u2026 Ale z\u0142oto to z\u0142oto. Umowa to umowa \u2014 masz swoje 50.":"Ha! Wiedzia\u0142em, \u017Ce si\u0119 nadasz. P\u0142aka\u0142a? Na pewno p\u0142aka\u0142a. Twoja dzia\u0142ka.",[{t:"We\u017A 50 z\u0142",f:()=>{P.gold+=50,n.debt=3,cr("D\u0142ug Wdowy",80)}}]);return}he(t,"Interesy, interesy\u2026 Je\u015Bli b\u0119dziesz potrzebowa\u0107 po\u017Cyczki \u2014 wiesz, gdzie mnie szuka\u0107. Procent niewielki. Prawie.")}function Bx(){let n=P.quests,t="Wdowa Halina";if(n.debt===1){he(t,"Przys\u0142a\u0142 ci\u0119 Grzegorz, prawda? Ja\u2026 nie mam tych pieni\u0119dzy. M\u0105\u017C zgin\u0105\u0142 z r\u0105k bandyt\xF3w, a zosta\u0142a mi tylko ta cha\u0142upa i dwoje dzieci. Wszystko, co mam, to te kilka monet na zim\u0119.",[{t:"Oddawaj pieni\u0105dze! (Z\u0142o)",c:"evil",f:()=>{P.flags.debtChoice="force",n.debt=2,Hi(-18),ee("Zabra\u0142e\u015B wdowie ostatnie oszcz\u0119dno\u015Bci. Wr\xF3\u0107 do Grzegorza.","e"),Ce()}},{t:"Sp\u0142ac\u0119 tw\xF3j d\u0142ug (100 z\u0142, Dobro)",c:"good",dis:P.gold<100,f:()=>{P.gold-=100,P.flags.debtChoice="paid",n.debt=2,Hi(20),Gi(5),ee("Sp\u0142aci\u0142e\u015B d\u0142ug wdowy. Wr\xF3\u0107 do Grzegorza.","q"),Ce()}},{t:"Wr\xF3c\u0119 p\xF3\u017Aniej."}]);return}if(P.flags.debtChoice==="paid"){P.flags.widowGift?he(t,"Dzieci codziennie si\u0119 za ciebie modl\u0105."):he(t,"Niech ci\u0119 bogowie b\u0142ogos\u0142awi\u0105, rycerzu! We\u017A chocia\u017C to \u2014 m\u0105\u017C trzyma\u0142 t\u0119 mikstur\u0119 na czarn\u0105 godzin\u0119. Tobie bardziej si\u0119 przyda.",[{t:"Dzi\u0119kuj\u0119",f:()=>{P.flags.widowGift=!0,P.potions+=2,ee("+2 mikstury","q")}}]);return}if(P.flags.debtChoice==="force"){he(t,"Odejd\u017A\u2026 Zabra\u0142e\u015B nam wszystko. Mam nadziej\u0119, \u017Ce to z\u0142oto ci\u0105\u017Cy ci w sakwie.");return}he(t,"Dzie\u0144 dobry, rycerzu. Wybacz, nie mam czym pocz\u0119stowa\u0107\u2026")}function Lu(){let n=P.quests,t=[];return(n.bandits>0||P.flags.campCleared)&&t.push({id:"bandits",title:"Plaga Bandyt\xF3w",done:n.bandits===3,text:n.bandits===3?P.flags.leaderFate==="spared"?"Oszcz\u0119dzi\u0142e\u015B Wronis\u0142awa. Bandyci odeszli.":"Wronis\u0142aw nie \u017Cyje. Drogi s\u0105 bezpieczne.":P.flags.campCleared?"Wr\xF3\u0107 do So\u0142tysa Bogumi\u0142a po nagrod\u0119.":`Rozbij ob\xF3z bandyt\xF3w w Starym Lesie (SW). Bandyci: ${P.campKills}/4. Rozpraw si\u0119 z hersztem.`,target:n.bandits===3?null:P.flags.campCleared?Dc.pos:dt.camp}),n.herbs!==0&&t.push({id:"herbs",title:"Ziele dla Jagny",done:n.herbs===2||n.herbs===-1,text:n.herbs===2?"Jagna dosta\u0142a zio\u0142a. Wioska zdrowieje.":n.herbs===-1?"Sprzeda\u0142e\u015B ziele Alchemikowi Krukowi.":P.herbsHave>=6?"Zanie\u015B zio\u0142a Zielarce Jagnie (albo\u2026 komu\u015B, kto zap\u0142aci wi\u0119cej).":`Zbierz Ksi\u0119\u017Cycowe Ziele w lesie: ${P.herbsHave}/6.`,target:n.herbs!==1?null:P.herbsHave>=6?wx.pos:kx()}),n.debt!==0&&t.push({id:"debt",title:"D\u0142ug Wdowy",done:n.debt===3,text:n.debt===3?P.flags.debtChoice==="paid"?"Sp\u0142aci\u0142e\u015B d\u0142ug wdowy z w\u0142asnej kieszeni.":"Odebra\u0142e\u015B d\u0142ug od wdowy.":n.debt===2?"Wr\xF3\u0107 do Lichwiarza Grzegorza.":"Odwied\u017A Wdow\u0119 Halin\u0119 i odbierz d\u0142ug.",target:n.debt===1?Ex.pos:n.debt===2?Sx.pos:null}),n.ruins!==0&&t.push({id:"ruins",title:"Popio\u0142y Stra\u017Cnicy",done:n.ruins===3,text:n.ruins===3?"Rycerz Popio\u0142u zosta\u0142 pokonany. Jeste\u015B legend\u0105 Brzeziny.":n.ruins===2?"Wr\xF3\u0107 do So\u0142tysa Bogumi\u0142a z wie\u015Bciami.":"Pokonaj Rycerza Popio\u0142u w ruinach Starej Stra\u017Cnicy (wsch\xF3d).",target:n.ruins===1?dt.ruins:n.ruins===2?Dc.pos:null}),(!t.length||n.bandits===0)&&t.unshift({id:"start",title:"Witaj w Brzezinie",done:!1,text:"Porozmawiaj z So\u0142tysem Bogumi\u0142em przy studni.",target:Dc.pos}),t}function kx(){let n=null,t=1e9;for(let e of ie.herbs)if(!P.herbTaken[e.i]){let i=Math.hypot(e.x-T.pos.x,e.z-T.pos.z);i<t&&(t=i,n=e)}return n}function zu(){let n=Lu().filter(t=>!t.done);return n.find(t=>t.id===P.tracked)||n[0]||null}var Uc=0,du=!1,fu=!1;function Hx(n){if(!P.flags.campCleared&&!du&&nn(T.pos,dt.camp)<75){du=!0;let i=4-P.campKills;for(let s=0;s<i;s++){let r=s/Math.max(1,i)*6.28+.5;As("bandit",dt.camp.x+Math.sin(r)*5,dt.camp.z+Math.cos(r)*5,"camp",{x:dt.camp.x+Math.sin(r)*5,z:dt.camp.z+Math.cos(r)*5})}P.flags.leaderFate||As("leader",dt.camp.x,dt.camp.z-3,"leader",{x:dt.camp.x,z:dt.camp.z-3})}if(P.quests.ruins===1&&!P.flags.bossDead&&!fu&&nn(T.pos,dt.ruins)<60&&(fu=!0,As("boss",dt.ruins.x,dt.ruins.z,"boss",{x:dt.ruins.x,z:dt.ruins.z})),Uc-=n,Uc>0)return;Uc=2.5;for(let i of Se)i.tag==="wild"&&!i.dead&&nn(i.pos,T.pos)>110&&(i.remove=!0);if(!(Se.filter(i=>i.tag==="wild"&&!i.dead).length>=(Vi?9:6)||T.dead))for(let i=0;i<8;i++){let s=Math.random()*6.28,r=le(42,75),o=T.pos.x+Math.sin(s)*r,a=T.pos.z+Math.cos(s)*r;if(Math.abs(o)>165||Math.abs(a)>165||Math.hypot(o,a)<60||nn({x:o,z:a},dt.house)<18||nn({x:o,z:a},dt.herbalist)<18||nn({x:o,z:a},dt.crossroad)<15||!P.flags.campCleared&&nn({x:o,z:a},dt.camp)<30)continue;let c=Kt(o,a);if(c<.5||c>20)continue;let h=Di(o,a),l,u=nn({x:o,z:a},dt.ruins)<60;Vi?l=u||Math.random()<.45?"ghoul":Math.random()<.6?"wolf":"bandit":l=h>.55?Math.random()<.75?"wolf":"bandit":Math.random()<.55?"bandit":"wolf";let f=l==="wolf"?Math.random()<.5?2:3:Math.random()<.35?2:1;for(let p=0;p<f;p++)As(l,o+le(-3,3),a+le(-3,3),"wild",{x:o,z:a});break}}var be=1,Vi=!1,Gx=new Et(8896488),Vx=new Et(725800),Wx=new Et(15764048),Xx=new Et(16773336),qx=new Et(9085183),Yx=new Et(16752736),Nc=new Et;function Zx(n){let t=(P.time-.25)*Math.PI*2,e=Math.sin(t);be=xi((e+.08)/.3,0,1),be=be*be*(3-2*be),Vi=be<.25;let i=xi(1-Math.abs(e)/.25,0,1);Nc.copy(Vx).lerp(Gx,be).lerp(Wx,i*.45),ze.background.copy(Nc),ze.fog.color.copy(Nc);let s=Math.cos(t),r=Math.sin(t),o=e>-.05,a=o?s:-s,c=o?Math.max(.12,r):Math.max(.25,-r);An.position.set(T.pos.x+a*80,T.pos.y+c*80,T.pos.z+30),An.target.position.copy(T.pos),An.intensity=ge(.55,2.1,be),An.color.copy(qx).lerp(Xx,be).lerp(Yx,i*.6),Bc.intensity=ge(.55,1.05,be),Bc.color.setRGB(ge(.35,.81,be),ge(.42,.9,be),ge(.75,1,be)),Aa.emissiveIntensity=(1-be)*1.2;for(let h of Ss)h.emissiveIntensity=.4+(1-be)*1.2;ie.starMat.opacity=1-be,ie.stars.position.copy(sn.position),ie.moon.position.set(sn.position.x-s*300,sn.position.y-r*300,sn.position.z+80),ie.moon.material.opacity=1-be*.8,ie.sunDisc.position.set(sn.position.x+s*300,sn.position.y+r*300,sn.position.z+80),ie.sunDisc.visible=e>-.1,ie.cloudMat.color.setRGB(ge(.25,1,be),ge(.28,1,be),ge(.4,1,be));for(let h of ie.clouds.children)h.position.x+=n*1.5,h.position.x>240&&(h.position.x=-240);if(ie.fire){let h=1+Math.sin(Dn.elapsedTime*13)*.12+Math.sin(Dn.elapsedTime*7.3)*.1;ie.fire.flame.scale.set(1,h,1),ie.fire.flame2.scale.set(1,h*1.1,1),ie.fire.light.intensity=nn(T.pos,dt.camp)<60?(1-be*.7)*30*h:0}ie.water.position.y=Math.sin(Dn.elapsedTime*.8)*.04,ie.herbMat&&(ie.herbMat.emissiveIntensity=.5+(1-be)*1.5+Math.sin(Dn.elapsedTime*3)*.2)}var We=new z,zn=!0,Oc=0;function $x(n){if(zn){Oc+=n*.05,sn.position.set(Math.sin(Oc)*40,22,Math.cos(Oc)*40),sn.lookAt(0,4,0);return}let t=Math.min(1,n*10);We.x=ge(We.x,T.pos.x,t),We.z=ge(We.z,T.pos.z,t),We.y=ge(We.y,Math.max(T.pos.y,-.5)+1.6,t);let e=Ba;Bi&&Bi.type==="boss"&&!Bi.dead&&(e=Ba*1.35);for(let o=1;o<=8;o++){let a=o/8*e,c=We.x+Math.sin(Rn)*Math.cos(gi)*a,h=We.z+Math.cos(Rn)*Math.cos(gi)*a;if(We.y+Math.sin(gi)*a<Kt(c,h)+6&&xu.blocked(c,h)){e=Math.max(2.2,a-e/8);break}}Pa=ge(Pa,e,Math.min(1,n*(e<Pa?12:3))),e=Pa;let i=We.x+Math.sin(Rn)*Math.cos(gi)*e,s=We.z+Math.cos(Rn)*Math.cos(gi)*e,r=We.y+Math.sin(gi)*e;for(let o=1;o<=4;o++){let a=o/4,c=ge(We.x,i,a),h=ge(We.z,s,a),l=Kt(c,h)+.6,u=ge(We.y,r,a);u<l&&(r+=(l-u)/a)}Fi>0&&(i+=le(-1,1)*Fi*.3,r+=le(-1,1)*Fi*.3,Fi=Math.max(0,Fi-n*2)),sn.position.set(i,r,s),sn.lookAt(We)}var pu=At("hpBar"),mu=At("mpBar"),Du=At("mini"),Wt=Du.getContext("2d"),Fc=0;function Jx(n){pu.firstChild.style.width=(T.hp/yn()*100).toFixed(1)+"%",pu.lastChild.textContent=`${Math.ceil(T.hp)} / ${yn()}`,mu.firstChild.style.width=(T.mana/Kn()*100).toFixed(1)+"%",mu.lastChild.textContent=`${Math.floor(T.mana)} / ${Kn()}`,At("mpCost").style.display=T.mana<20?"block":"none",za=Math.max(0,za-n*2.5);let t=T.hp/yn()<.25&&!T.dead?.35+Math.sin(Dn.elapsedTime*6)*.15:0;if(At("hurt").style.opacity=Math.max(za*.8,t).toFixed(2),Fc-=n,Fc>0)return;Fc=.2,At("sGold").textContent=`\u{1F4B0} ${P.gold}`,At("sXp").textContent=`\u2728 ${P.xp}`,At("sRen").textContent=`\u2B50 ${P.renown}`,At("potN").textContent=P.potions,At("titleTxt").textContent=qa(),At("morality").firstChild.style.left=`calc(${(P.morality+100)/2}% - 2px)`;let e=Math.floor(P.time*24),i=Math.floor((P.time*24-e)*60);At("clock").textContent=`${Vi?"\u{1F319}":"\u2600\uFE0F"} Dzie\u0144 ${P.day}, ${String(e).padStart(2,"0")}:${String(i).padStart(2,"0")}`;let s=zu(),r=At("questTrack");if(s){let h=`<b>${s.title}</b>${s.text}`;r._h!==h&&(r.innerHTML=h,r._h=h),r.style.display="block"}else r.style.display="none";Gc-=.2;let o=At("target"),a=Bi,c=Se.find(h=>h.type==="boss"&&!h.dead&&h.state!=="idle");c&&(a=c),a&&(a===c||Gc>0)&&!a.dead?(o.style.display="block",o.className="hud"+(a.type==="boss"?" boss":""),o.firstChild.textContent=a.def.name+(a.state==="surrender"?" (poddaje si\u0119)":""),o.lastChild.firstChild.style.width=a.hp/a.maxHp*100+"%"):o.style.display="none",jx(s)}function jx(n){let t=Du.width,e=55;Wt.save(),Wt.clearRect(0,0,t,t),Wt.beginPath(),Wt.arc(t/2,t/2,t/2,0,Math.PI*2),Wt.clip();let i=(T.pos.x-e+pi)/2,s=(T.pos.z-e+pi)/2;Wt.drawImage(ie.minimap,i,s,e,e,0,0,t,t),Vi&&(Wt.fillStyle="rgba(10,20,50,0.35)",Wt.fillRect(0,0,t,t));let r=(o,a)=>[((o-T.pos.x)/(e*2)+.5)*t,((a-T.pos.z)/(e*2)+.5)*t];for(let o of Ls){if(!o.talk)continue;let[a,c]=r(o.pos.x,o.pos.z);Wt.fillStyle="#ffe9a0",Wt.beginPath(),Wt.arc(a,c,4,0,7),Wt.fill()}for(let o of Se){if(o.dead)continue;let[a,c]=r(o.pos.x,o.pos.z);Wt.fillStyle=o.type==="boss"?"#ff6a00":"#e33",Wt.beginPath(),Wt.arc(a,c,o.type==="boss"?7:4,0,7),Wt.fill()}if(n&&n.target){let[o,a]=r(n.target.x,n.target.z),c=o-t/2,h=a-t/2,l=Math.hypot(c,h),u=t/2-12;l>u&&(o=t/2+c/l*u,a=t/2+h/l*u),Wt.fillStyle="#ffd030",Wt.strokeStyle="#000",Wt.lineWidth=2,Wt.beginPath();for(let f=0;f<10;f++){let p=f/10*Math.PI*2-Math.PI/2,g=f%2?5:11;Wt.lineTo(o+Math.cos(p)*g,a+Math.sin(p)*g)}Wt.closePath(),Wt.fill(),Wt.stroke()}Wt.translate(t/2,t/2),Wt.rotate(-T.yaw+Math.PI),Wt.fillStyle="#fff",Wt.strokeStyle="#000",Wt.lineWidth=2,Wt.beginPath(),Wt.moveTo(0,-11),Wt.lineTo(8,9),Wt.lineTo(0,4),Wt.lineTo(-8,9),Wt.closePath(),Wt.fill(),Wt.stroke(),Wt.restore(),Wt.fillStyle="#f3e9d2",Wt.font="bold 18px Georgia",Wt.textAlign="center",Wt.fillText("N",t/2,20)}var ar=!1,Ts="quests";function Za(n){ar=n!==void 0?n:!ar,At("menu").style.display=ar?"flex":"none",ar?(Pe=!0,or()):!dr&&At("death").style.display!=="flex"&&(Pe=!1)}At("menuBtn").addEventListener("click",n=>{n.stopPropagation(),Ni(),zn||Za()});At("closeMenu").addEventListener("click",()=>Za(!1));var Kx=[["quests","Zadania"],["skills","Rozw\xF3j"],["hero","Posta\u0107"],["opts","Opcje"]];function or(){let n=At("mTabs");n.innerHTML="";for(let[e,i]of Kx){let s=document.createElement("button");s.className="btn"+(Ts===e?" sel":""),s.textContent=i,s.onclick=()=>{Ts=e,jt.click(),or()},n.appendChild(s)}let t=At("mBody");if(t.innerHTML="",Ts==="quests"){let e=Lu(),i=zu();for(let r of e){let o=document.createElement("div");o.className="qitem"+(r.done?" done":"")+(i&&i.id===r.id?" tr":""),o.innerHTML=`<b style="color:#f0d060">${r.done?"\u2714 ":i&&i.id===r.id?"\u2605 ":""}${r.title}</b><br>${r.text}`,r.done||(o.onclick=()=>{P.tracked=r.id,jt.click(),or()}),t.appendChild(o)}let s=document.createElement("p");s.style.opacity=.7,s.style.fontSize="12px",s.textContent="Dotknij zadania, aby je \u015Bledzi\u0107 (gwiazdka na minimapie). Inni mieszka\u0144cy te\u017C mog\u0105 mie\u0107 dla ciebie pro\u015Bby \u2014 rozmawiaj ze wszystkimi.",t.appendChild(s)}else if(Ts==="skills"){t.insertAdjacentHTML("beforeend",`<p>Do\u015Bwiadczenie do wydania: <b style="color:#9ef">\u2728 ${P.xp}</b></p>`);for(let e of["sila","magia","zrecznosc"]){let i=P.stats[e],s=Qg[i],r=document.createElement("div");r.className="stat",r.innerHTML=`<div style="min-width:90px"><b>${su[e].n}</b><div class="pips">${"\u25C6".repeat(i)}${"\u25C7".repeat(5-i)}</div></div><div class="d">${su[e].d}</div>`;let o=document.createElement("button");o.className="btn",i>=5?(o.textContent="MAX",o.disabled=!0):(o.textContent=`Ulepsz (${s} \u2728)`,o.disabled=P.xp<s,o.onclick=()=>{P.xp<s||(P.xp-=s,P.stats[e]++,jt.level(),yi(),T.hp=yn(),Xe(T.pos.x,T.pos.y+1,T.pos.z,9367807,20,3,5,1),Ce(),or())}),r.appendChild(o),t.appendChild(r)}t.insertAdjacentHTML("beforeend",'<p style="font-size:12px;opacity:.7">Twoje cia\u0142o zmienia si\u0119 wraz z rozwojem: si\u0142a poszerza barki, magia roz\u015Bwietla ubranie b\u0142\u0119kitem.</p>')}else if(Ts==="hero"){let e=P.morality;t.innerHTML=`<h3>${qa()}</h3>
      <p>Moralno\u015B\u0107: <b>${e>0?"+":""}${e}</b> ${e>=40?"(nad g\u0142ow\u0105 l\u015Bni aureola)":e<=-40?"(wyros\u0142y ci rogi)":""}<br>
      S\u0142awa: <b>${P.renown}</b> \xB7 Pokonani wrogowie: <b>${P.kills}</b> \xB7 Blizny: <b>${P.scars}</b></p>
      <h3>Ekwipunek</h3>
      <p>\u2694 ${Oa[P.sword].name} (obra\u017Cenia ${Oa[P.sword].dmg+5*P.stats.sila})<br>
      \u{1F6E1} ${Fa[P.armor].name} (redukcja ${Math.round((1-Fa[P.armor].mul)*100)}%)<br>
      \u{1F9EA} Mikstury zdrowia: ${P.potions}<br>\u{1F33F} Ksi\u0119\u017Cycowe Ziele: ${P.herbsHave}<br>
      \u{1F3E0} ${P.houseOwned?"Dom na Wzg\xF3rzu (tw\xF3j)":"Brak domu \u2014 Dom na Wzg\xF3rzu (NE od wioski) jest na sprzeda\u017C"}<br>
      \u{1F4B0} ${P.gold} z\u0142</p>
      <p style="font-size:12px;opacity:.7">Wybory moralne zmieniaj\u0105 wygl\u0105d postaci i to, jak reaguj\u0105 na ciebie mieszka\u0144cy.</p>`}else if(Ts==="opts"){t.innerHTML=`<h3>Grafika</h3><div id="qBtns" style="display:flex;gap:8px;flex-wrap:wrap"></div>
      <p style="font-size:12px;opacity:.7">Zmiana jako\u015Bci prze\u0142aduje gr\u0119 (post\u0119p jest zapisywany).</p>
      <h3>D\u017Awi\u0119k</h3><div id="sBtns"></div><h3>Zapis</h3><div id="saveBtns" style="display:flex;gap:8px;flex-wrap:wrap"></div>`;for(let[r,o]of[["low","Niska (szybka)"],["medium","\u015Arednia"],["high","Wysoka"]]){let a=document.createElement("button");a.className="btn"+(Cn===r?" sel":""),a.textContent=o,a.onclick=()=>{Ce();try{localStorage.setItem("kw_quality",r)}catch{}location.reload()},At("qBtns").appendChild(a)}let e=document.createElement("button");e.className="btn",e.textContent=Oi?"Muzyka: W\u0141":"Muzyka: WY\u0141",e.onclick=()=>{Oi=!Oi,Lc(Oi);try{localStorage.setItem("kw_music",Oi?"1":"0")}catch{}or()},At("sBtns").appendChild(e);let i=document.createElement("button");i.className="btn",i.textContent="Zapisz gr\u0119",i.onclick=()=>{Ce(),ee("Gra zapisana.","g")};let s=document.createElement("button");s.className="btn evil",s.textContent="Nowa gra (usu\u0144 zapis)",s.onclick=()=>{if(confirm("Na pewno usun\u0105\u0107 zapis i zacz\u0105\u0107 od nowa?")){try{localStorage.removeItem(Ha)}catch{}location.reload()}},At("saveBtns").appendChild(i),At("saveBtns").appendChild(s)}}window.onAndroidBack=()=>{if(!zn){if(dr){Iu();return}Za()}};function Ce(){if(!zn){P.pos={x:T.pos.x,z:T.pos.z},P.hp=T.hp,P.mana=T.mana;try{localStorage.setItem(Ha,JSON.stringify(P))}catch{}}}window.saveGame=Ce;function Qx(){try{let n=localStorage.getItem(Ha);if(!n)return!1;let t=JSON.parse(n),e=qc();return P={...e,...t,stats:{...e.stats,...t.stats},quests:{...e.quests,...t.quests},flags:{...e.flags,...t.flags}},!0}catch{return!1}}function ty(){var n;T.pos.set(P.pos.x,Kt(P.pos.x,P.pos.z),P.pos.z),T.pos.y<-.9&&T.pos.set(0,2.5,9),T.hp=xi(P.hp||yn(),1,yn()),T.mana=xi((n=P.mana)!=null?n:Kn(),0,Kn()),Le.pos.set(T.pos.x+2,0,T.pos.z+2),Le.pos.y=Kt(Le.pos.x,Le.pos.z);for(let t of ie.herbs)P.herbTaken[t.i]&&(t.group.visible=!1);for(let t of ie.chests)P.chestOpened[t.i]&&(t.lid.rotation.x=-1.9);P.flags.bossDead&&ie.runeMat&&ie.runeMat.emissive.set(4235519),Rn=0,T.yaw=Math.PI,yi()}setInterval(()=>{!zn&&!T.dead&&Ce()},3e4);document.addEventListener("visibilitychange",()=>{document.hidden&&Ce()});function ey(){let n=P.morality,t=n>=30?"Rycerz Popio\u0142u rozsypa\u0142 si\u0119 w py\u0142, a nad ruinami po raz pierwszy od stu lat wzesz\u0142o czyste s\u0142o\u0144ce. Ludzie Brzeziny wiwatuj\u0105 na twoj\u0105 cze\u015B\u0107, a dzieci przynosz\u0105 ci wianki z wrzosu. Twoja legenda b\u0119dzie opowiadana przy ogniskach jako historia \u015Bwiat\u0142a.":n<=-30?"Rycerz Popio\u0142u pad\u0142\u2026 ale gdy podnosisz jego p\u0142on\u0105cy miecz, czujesz, jak ciemno\u015B\u0107 rozpoznaje w tobie swojego. Ludzie Brzeziny k\u0142aniaj\u0105 si\u0119 nisko \u2014 bardziej ze strachu ni\u017C z wdzi\u0119czno\u015Bci. Nowy w\u0142adca tych ziem w\u0142a\u015Bnie si\u0119 narodzi\u0142.":"Rycerz Popio\u0142u zosta\u0142 pokonany. Ludzie Brzeziny dzi\u0119kuj\u0105 ci \u2014 cho\u0107 nie wiedz\u0105 jeszcze, czy jeste\u015B bohaterem, czy tylko najemnikiem, kt\xF3ry dobrze wykona\u0142 robot\u0119. Twoja historia wci\u0105\u017C si\u0119 pisze.";At("vText").innerHTML=`${t}<br><br><b style="color:#f0d060">Tytu\u0142: ${qa()}</b><br>S\u0142awa: ${P.renown} \xB7 Pokonani wrogowie: ${P.kills} \xB7 Dzie\u0144 ${P.day}<br><br><span style="font-size:13px;opacity:.8">\u015Awiat pozostaje otwarty \u2014 doko\u0144cz zadania, kup dom, zbierz skarby.</span>`,At("victory").style.display="flex",Pe=!0}At("bVic").addEventListener("click",()=>{At("victory").style.display="none",Pe=!1,ee("Wr\xF3\u0107 do So\u0142tysa Bogumi\u0142a po nagrod\u0119.","q")});At("bRespawn").addEventListener("click",ux);var ny=(()=>{try{return!!localStorage.getItem(Ha)}catch{return!1}})();ny&&(At("bContinue").style.display="inline-block");function Uu(n){for(let t of["bAtk","bMag","bRoll","bPot","joy","menuBtn","hudTL","hudTR"])At(t).style.visibility=n?"hidden":"visible"}Uu(!0);function Nu(){zn=!1,Pe=!1,Uu(!1),Rn=T.yaw+Math.PI,We.copy(T.pos),Rn=0,ee("Zapis automatyczny jest w\u0142\u0105czony.","",2.5)}At("bContinue").addEventListener("click",()=>{Ni(),Qx()&&ty(),At("start").style.display="none",Nu(),ee(`Witaj z powrotem, ${qa().toLowerCase()}!`,"g")});At("bNew").addEventListener("click",()=>{Ni(),P=qc(),T.pos.set(0,2.5,9),T.hp=yn(),T.mana=Kn(),yi(),At("start").style.display="none",At("intro").style.display="flex"});At("bBegin").addEventListener("click",()=>{At("intro").style.display="none",T.yaw=Math.PI,Nu(),Rn=0,T.yaw=Math.PI,Ce(),ee("Porozmawiaj z So\u0142tysem przy studni.","q",4)});yi();var Dn=new _a;function Ou(){requestAnimationFrame(Ou);let n=Math.min(Dn.getDelta(),.05);if(!zn&&!Pe){let e=P.time;P.time+=n/Kg,P.time>=1&&(P.time-=1,P.day++,Pu()),Mx(n);for(let i of Se)i.update(n);for(let i=Se.length-1;i>=0;i--)Se[i].remove&&(ze.remove(Se[i].mesh.group),Bi===Se[i]&&(Bi=null),Se.splice(i,1));bx(n),_x(n),gx(n),Hx(n),ki.visible&&Wa&&(yu.opacity=.35+Math.sin(Dn.elapsedTime*20)*.2)}else zn&&(P.time=.36+Math.sin(Dn.elapsedTime*.02)*.01);(!Pe||zn)&&Tx(n),nx(n),Zx(n),$x(n),sx(n),zn||(Jx(n),Rx());let t=Se.some(e=>!e.dead&&(e.state==="chase"||e.state==="windup"||e.state==="recover"));iu(performance.now()/1e3,t?"combat":Vi?"night":"day"),Ps.render(ze,sn)}Ou();window.__dbg={P:T,S:()=>P,enemies:Se,npcs:Ls,W:ie,LOC:dt,spawnEnemy:As,setS:n=>{P=n},talk:n=>Ls.find(t=>t.id===n).talk()};})();
/*! Bundled license information:

three/build/three.module.js:
  (**
   * @license
   * Copyright 2010-2023 Three.js Authors
   * SPDX-License-Identifier: MIT
   *)
*/

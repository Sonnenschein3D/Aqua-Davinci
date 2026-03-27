var Sl=Object.defineProperty;var Ml=(s,e,t)=>e in s?Sl(s,e,{enumerable:!0,configurable:!0,writable:!0,value:t}):s[e]=t;var W=(s,e,t)=>Ml(s,typeof e!="symbol"?e+"":e,t);(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const i of document.querySelectorAll('link[rel="modulepreload"]'))n(i);new MutationObserver(i=>{for(const r of i)if(r.type==="childList")for(const a of r.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&n(a)}).observe(document,{childList:!0,subtree:!0});function t(i){const r={};return i.integrity&&(r.integrity=i.integrity),i.referrerPolicy&&(r.referrerPolicy=i.referrerPolicy),i.crossOrigin==="use-credentials"?r.credentials="include":i.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function n(i){if(i.ep)return;i.ep=!0;const r=t(i);fetch(i.href,r)}})();/**
 * @license
 * Copyright 2010-2023 Three.js Authors
 * SPDX-License-Identifier: MIT
 */const da="160",nn={ROTATE:0,DOLLY:1,PAN:2},ni={ROTATE:0,PAN:1,DOLLY_PAN:2,DOLLY_ROTATE:3},bl=0,Oa=1,El=2,Ec=1,wc=2,xn=3,In=0,kt=1,jt=2,Dn=0,Ci=1,Na=2,Ua=3,Ia=4,wl=5,Xn=100,Tl=101,Al=102,Fa=103,za=104,Cl=200,Rl=201,Pl=202,Ll=203,Jr=204,Qr=205,Dl=206,Ol=207,Nl=208,Ul=209,Il=210,Fl=211,zl=212,Bl=213,Gl=214,kl=0,Hl=1,Vl=2,Bs=3,Wl=4,Xl=5,jl=6,ql=7,Tc=0,Yl=1,Zl=2,On=0,$l=1,Kl=2,Jl=3,Ql=4,eh=5,th=6,Ac=300,Li=301,Di=302,ea=303,ta=304,Ys=306,na=1e3,rn=1001,ia=1002,Ft=1003,Ba=1004,or=1005,Gt=1006,nh=1007,Zi=1008,Nn=1009,ih=1010,sh=1011,fa=1012,Cc=1013,Rn=1014,Pn=1015,$i=1016,Rc=1017,Pc=1018,qn=1020,rh=1021,an=1023,ah=1024,oh=1025,Yn=1026,Oi=1027,ch=1028,Lc=1029,lh=1030,Dc=1031,Oc=1033,cr=33776,lr=33777,hr=33778,ur=33779,Ga=35840,ka=35841,Ha=35842,Va=35843,Nc=36196,Wa=37492,Xa=37496,ja=37808,qa=37809,Ya=37810,Za=37811,$a=37812,Ka=37813,Ja=37814,Qa=37815,eo=37816,to=37817,no=37818,io=37819,so=37820,ro=37821,dr=36492,ao=36494,oo=36495,hh=36283,co=36284,lo=36285,ho=36286,Uc=3e3,Zn=3001,uh=3200,dh=3201,Ic=0,fh=1,Kt="",Et="srgb",bn="srgb-linear",pa="display-p3",Zs="display-p3-linear",Gs="linear",nt="srgb",ks="rec709",Hs="p3",ii=7680,uo=519,ph=512,mh=513,gh=514,Fc=515,vh=516,_h=517,xh=518,yh=519,sa=35044,fo="300 es",ra=1035,Sn=2e3,Vs=2001;class Qn{addEventListener(e,t){this._listeners===void 0&&(this._listeners={});const n=this._listeners;n[e]===void 0&&(n[e]=[]),n[e].indexOf(t)===-1&&n[e].push(t)}hasEventListener(e,t){if(this._listeners===void 0)return!1;const n=this._listeners;return n[e]!==void 0&&n[e].indexOf(t)!==-1}removeEventListener(e,t){if(this._listeners===void 0)return;const i=this._listeners[e];if(i!==void 0){const r=i.indexOf(t);r!==-1&&i.splice(r,1)}}dispatchEvent(e){if(this._listeners===void 0)return;const n=this._listeners[e.type];if(n!==void 0){e.target=this;const i=n.slice(0);for(let r=0,a=i.length;r<a;r++)i[r].call(this,e);e.target=null}}}const Ct=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"],Xi=Math.PI/180,aa=180/Math.PI;function Mn(){const s=Math.random()*4294967295|0,e=Math.random()*4294967295|0,t=Math.random()*4294967295|0,n=Math.random()*4294967295|0;return(Ct[s&255]+Ct[s>>8&255]+Ct[s>>16&255]+Ct[s>>24&255]+"-"+Ct[e&255]+Ct[e>>8&255]+"-"+Ct[e>>16&15|64]+Ct[e>>24&255]+"-"+Ct[t&63|128]+Ct[t>>8&255]+"-"+Ct[t>>16&255]+Ct[t>>24&255]+Ct[n&255]+Ct[n>>8&255]+Ct[n>>16&255]+Ct[n>>24&255]).toLowerCase()}function wt(s,e,t){return Math.max(e,Math.min(t,s))}function Sh(s,e){return(s%e+e)%e}function fr(s,e,t){return(1-t)*s+t*e}function po(s){return(s&s-1)===0&&s!==0}function oa(s){return Math.pow(2,Math.floor(Math.log(s)/Math.LN2))}function yn(s,e){switch(e.constructor){case Float32Array:return s;case Uint32Array:return s/4294967295;case Uint16Array:return s/65535;case Uint8Array:return s/255;case Int32Array:return Math.max(s/2147483647,-1);case Int16Array:return Math.max(s/32767,-1);case Int8Array:return Math.max(s/127,-1);default:throw new Error("Invalid component type.")}}function Qe(s,e){switch(e.constructor){case Float32Array:return s;case Uint32Array:return Math.round(s*4294967295);case Uint16Array:return Math.round(s*65535);case Uint8Array:return Math.round(s*255);case Int32Array:return Math.round(s*2147483647);case Int16Array:return Math.round(s*32767);case Int8Array:return Math.round(s*127);default:throw new Error("Invalid component type.")}}const Mh={DEG2RAD:Xi};class ${constructor(e=0,t=0){$.prototype.isVector2=!0,this.x=e,this.y=t}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,t){return this.x=e,this.y=t,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){const t=this.x,n=this.y,i=e.elements;return this.x=i[0]*t+i[3]*n+i[6],this.y=i[1]*t+i[4]*n+i[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this}clampLength(e,t){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(e,Math.min(t,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const n=this.dot(e)/t;return Math.acos(wt(n,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,n=this.y-e.y;return t*t+n*n}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this}rotateAround(e,t){const n=Math.cos(t),i=Math.sin(t),r=this.x-e.x,a=this.y-e.y;return this.x=r*n-a*i+e.x,this.y=r*i+a*n+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class We{constructor(e,t,n,i,r,a,o,c,l){We.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,t,n,i,r,a,o,c,l)}set(e,t,n,i,r,a,o,c,l){const h=this.elements;return h[0]=e,h[1]=i,h[2]=o,h[3]=t,h[4]=r,h[5]=c,h[6]=n,h[7]=a,h[8]=l,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){const t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],this}extractBasis(e,t,n){return e.setFromMatrix3Column(this,0),t.setFromMatrix3Column(this,1),n.setFromMatrix3Column(this,2),this}setFromMatrix4(e){const t=e.elements;return this.set(t[0],t[4],t[8],t[1],t[5],t[9],t[2],t[6],t[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const n=e.elements,i=t.elements,r=this.elements,a=n[0],o=n[3],c=n[6],l=n[1],h=n[4],u=n[7],f=n[2],d=n[5],g=n[8],v=i[0],m=i[3],p=i[6],y=i[1],_=i[4],S=i[7],R=i[2],T=i[5],w=i[8];return r[0]=a*v+o*y+c*R,r[3]=a*m+o*_+c*T,r[6]=a*p+o*S+c*w,r[1]=l*v+h*y+u*R,r[4]=l*m+h*_+u*T,r[7]=l*p+h*S+u*w,r[2]=f*v+d*y+g*R,r[5]=f*m+d*_+g*T,r[8]=f*p+d*S+g*w,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[3]*=e,t[6]*=e,t[1]*=e,t[4]*=e,t[7]*=e,t[2]*=e,t[5]*=e,t[8]*=e,this}determinant(){const e=this.elements,t=e[0],n=e[1],i=e[2],r=e[3],a=e[4],o=e[5],c=e[6],l=e[7],h=e[8];return t*a*h-t*o*l-n*r*h+n*o*c+i*r*l-i*a*c}invert(){const e=this.elements,t=e[0],n=e[1],i=e[2],r=e[3],a=e[4],o=e[5],c=e[6],l=e[7],h=e[8],u=h*a-o*l,f=o*c-h*r,d=l*r-a*c,g=t*u+n*f+i*d;if(g===0)return this.set(0,0,0,0,0,0,0,0,0);const v=1/g;return e[0]=u*v,e[1]=(i*l-h*n)*v,e[2]=(o*n-i*a)*v,e[3]=f*v,e[4]=(h*t-i*c)*v,e[5]=(i*r-o*t)*v,e[6]=d*v,e[7]=(n*c-l*t)*v,e[8]=(a*t-n*r)*v,this}transpose(){let e;const t=this.elements;return e=t[1],t[1]=t[3],t[3]=e,e=t[2],t[2]=t[6],t[6]=e,e=t[5],t[5]=t[7],t[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){const t=this.elements;return e[0]=t[0],e[1]=t[3],e[2]=t[6],e[3]=t[1],e[4]=t[4],e[5]=t[7],e[6]=t[2],e[7]=t[5],e[8]=t[8],this}setUvTransform(e,t,n,i,r,a,o){const c=Math.cos(r),l=Math.sin(r);return this.set(n*c,n*l,-n*(c*a+l*o)+a+e,-i*l,i*c,-i*(-l*a+c*o)+o+t,0,0,1),this}scale(e,t){return this.premultiply(pr.makeScale(e,t)),this}rotate(e){return this.premultiply(pr.makeRotation(-e)),this}translate(e,t){return this.premultiply(pr.makeTranslation(e,t)),this}makeTranslation(e,t){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,t,0,0,1),this}makeRotation(e){const t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,n,t,0,0,0,1),this}makeScale(e,t){return this.set(e,0,0,0,t,0,0,0,1),this}equals(e){const t=this.elements,n=e.elements;for(let i=0;i<9;i++)if(t[i]!==n[i])return!1;return!0}fromArray(e,t=0){for(let n=0;n<9;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){const n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e}clone(){return new this.constructor().fromArray(this.elements)}}const pr=new We;function zc(s){for(let e=s.length-1;e>=0;--e)if(s[e]>=65535)return!0;return!1}function Ws(s){return document.createElementNS("http://www.w3.org/1999/xhtml",s)}function bh(){const s=Ws("canvas");return s.style.display="block",s}const mo={};function ji(s){s in mo||(mo[s]=!0,console.warn(s))}const go=new We().set(.8224621,.177538,0,.0331941,.9668058,0,.0170827,.0723974,.9105199),vo=new We().set(1.2249401,-.2249404,0,-.0420569,1.0420571,0,-.0196376,-.0786361,1.0982735),ss={[bn]:{transfer:Gs,primaries:ks,toReference:s=>s,fromReference:s=>s},[Et]:{transfer:nt,primaries:ks,toReference:s=>s.convertSRGBToLinear(),fromReference:s=>s.convertLinearToSRGB()},[Zs]:{transfer:Gs,primaries:Hs,toReference:s=>s.applyMatrix3(vo),fromReference:s=>s.applyMatrix3(go)},[pa]:{transfer:nt,primaries:Hs,toReference:s=>s.convertSRGBToLinear().applyMatrix3(vo),fromReference:s=>s.applyMatrix3(go).convertLinearToSRGB()}},Eh=new Set([bn,Zs]),Je={enabled:!0,_workingColorSpace:bn,get workingColorSpace(){return this._workingColorSpace},set workingColorSpace(s){if(!Eh.has(s))throw new Error(`Unsupported working color space, "${s}".`);this._workingColorSpace=s},convert:function(s,e,t){if(this.enabled===!1||e===t||!e||!t)return s;const n=ss[e].toReference,i=ss[t].fromReference;return i(n(s))},fromWorkingColorSpace:function(s,e){return this.convert(s,this._workingColorSpace,e)},toWorkingColorSpace:function(s,e){return this.convert(s,e,this._workingColorSpace)},getPrimaries:function(s){return ss[s].primaries},getTransfer:function(s){return s===Kt?Gs:ss[s].transfer}};function Ri(s){return s<.04045?s*.0773993808:Math.pow(s*.9478672986+.0521327014,2.4)}function mr(s){return s<.0031308?s*12.92:1.055*Math.pow(s,.41666)-.055}let si;class Bc{static getDataURL(e){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let t;if(e instanceof HTMLCanvasElement)t=e;else{si===void 0&&(si=Ws("canvas")),si.width=e.width,si.height=e.height;const n=si.getContext("2d");e instanceof ImageData?n.putImageData(e,0,0):n.drawImage(e,0,0,e.width,e.height),t=si}return t.width>2048||t.height>2048?(console.warn("THREE.ImageUtils.getDataURL: Image converted to jpg for performance reasons",e),t.toDataURL("image/jpeg",.6)):t.toDataURL("image/png")}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){const t=Ws("canvas");t.width=e.width,t.height=e.height;const n=t.getContext("2d");n.drawImage(e,0,0,e.width,e.height);const i=n.getImageData(0,0,e.width,e.height),r=i.data;for(let a=0;a<r.length;a++)r[a]=Ri(r[a]/255)*255;return n.putImageData(i,0,0),t}else if(e.data){const t=e.data.slice(0);for(let n=0;n<t.length;n++)t instanceof Uint8Array||t instanceof Uint8ClampedArray?t[n]=Math.floor(Ri(t[n]/255)*255):t[n]=Ri(t[n]);return{data:t,width:e.width,height:e.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}}let wh=0;class Gc{constructor(e=null){this.isSource=!0,Object.defineProperty(this,"id",{value:wh++}),this.uuid=Mn(),this.data=e,this.version=0}set needsUpdate(e){e===!0&&this.version++}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.images[this.uuid]!==void 0)return e.images[this.uuid];const n={uuid:this.uuid,url:""},i=this.data;if(i!==null){let r;if(Array.isArray(i)){r=[];for(let a=0,o=i.length;a<o;a++)i[a].isDataTexture?r.push(gr(i[a].image)):r.push(gr(i[a]))}else r=gr(i);n.url=r}return t||(e.images[this.uuid]=n),n}}function gr(s){return typeof HTMLImageElement<"u"&&s instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&s instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&s instanceof ImageBitmap?Bc.getDataURL(s):s.data?{data:Array.from(s.data),width:s.width,height:s.height,type:s.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}let Th=0;class Nt extends Qn{constructor(e=Nt.DEFAULT_IMAGE,t=Nt.DEFAULT_MAPPING,n=rn,i=rn,r=Gt,a=Zi,o=an,c=Nn,l=Nt.DEFAULT_ANISOTROPY,h=Kt){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:Th++}),this.uuid=Mn(),this.name="",this.source=new Gc(e),this.mipmaps=[],this.mapping=t,this.channel=0,this.wrapS=n,this.wrapT=i,this.magFilter=r,this.minFilter=a,this.anisotropy=l,this.format=o,this.internalFormat=null,this.type=c,this.offset=new $(0,0),this.repeat=new $(1,1),this.center=new $(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new We,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,typeof h=="string"?this.colorSpace=h:(ji("THREE.Texture: Property .encoding has been replaced by .colorSpace."),this.colorSpace=h===Zn?Et:Kt),this.userData={},this.version=0,this.onUpdate=null,this.isRenderTargetTexture=!1,this.needsPMREMUpdate=!1}get image(){return this.source.data}set image(e=null){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];const n={metadata:{version:4.6,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(n.userData=this.userData),t||(e.textures[this.uuid]=n),n}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==Ac)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case na:e.x=e.x-Math.floor(e.x);break;case rn:e.x=e.x<0?0:1;break;case ia:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case na:e.y=e.y-Math.floor(e.y);break;case rn:e.y=e.y<0?0:1;break;case ia:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}get encoding(){return ji("THREE.Texture: Property .encoding has been replaced by .colorSpace."),this.colorSpace===Et?Zn:Uc}set encoding(e){ji("THREE.Texture: Property .encoding has been replaced by .colorSpace."),this.colorSpace=e===Zn?Et:Kt}}Nt.DEFAULT_IMAGE=null;Nt.DEFAULT_MAPPING=Ac;Nt.DEFAULT_ANISOTROPY=1;class Mt{constructor(e=0,t=0,n=0,i=1){Mt.prototype.isVector4=!0,this.x=e,this.y=t,this.z=n,this.w=i}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,t,n,i){return this.x=e,this.y=t,this.z=n,this.w=i,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;case 3:this.w=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this.w=e.w+t.w,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this.w+=e.w*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this.w=e.w-t.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){const t=this.x,n=this.y,i=this.z,r=this.w,a=e.elements;return this.x=a[0]*t+a[4]*n+a[8]*i+a[12]*r,this.y=a[1]*t+a[5]*n+a[9]*i+a[13]*r,this.z=a[2]*t+a[6]*n+a[10]*i+a[14]*r,this.w=a[3]*t+a[7]*n+a[11]*i+a[15]*r,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);const t=Math.sqrt(1-e.w*e.w);return t<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/t,this.y=e.y/t,this.z=e.z/t),this}setAxisAngleFromRotationMatrix(e){let t,n,i,r;const c=e.elements,l=c[0],h=c[4],u=c[8],f=c[1],d=c[5],g=c[9],v=c[2],m=c[6],p=c[10];if(Math.abs(h-f)<.01&&Math.abs(u-v)<.01&&Math.abs(g-m)<.01){if(Math.abs(h+f)<.1&&Math.abs(u+v)<.1&&Math.abs(g+m)<.1&&Math.abs(l+d+p-3)<.1)return this.set(1,0,0,0),this;t=Math.PI;const _=(l+1)/2,S=(d+1)/2,R=(p+1)/2,T=(h+f)/4,w=(u+v)/4,O=(g+m)/4;return _>S&&_>R?_<.01?(n=0,i=.707106781,r=.707106781):(n=Math.sqrt(_),i=T/n,r=w/n):S>R?S<.01?(n=.707106781,i=0,r=.707106781):(i=Math.sqrt(S),n=T/i,r=O/i):R<.01?(n=.707106781,i=.707106781,r=0):(r=Math.sqrt(R),n=w/r,i=O/r),this.set(n,i,r,t),this}let y=Math.sqrt((m-g)*(m-g)+(u-v)*(u-v)+(f-h)*(f-h));return Math.abs(y)<.001&&(y=1),this.x=(m-g)/y,this.y=(u-v)/y,this.z=(f-h)/y,this.w=Math.acos((l+d+p-1)/2),this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this.z=Math.max(e.z,Math.min(t.z,this.z)),this.w=Math.max(e.w,Math.min(t.w,this.w)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this.z=Math.max(e,Math.min(t,this.z)),this.w=Math.max(e,Math.min(t,this.w)),this}clampLength(e,t){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(e,Math.min(t,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this.w+=(e.w-this.w)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this.w=e.w+(t.w-e.w)*n,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this.w=e[t+3],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e[t+3]=this.w,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this.w=e.getW(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class Ah extends Qn{constructor(e=1,t=1,n={}){super(),this.isRenderTarget=!0,this.width=e,this.height=t,this.depth=1,this.scissor=new Mt(0,0,e,t),this.scissorTest=!1,this.viewport=new Mt(0,0,e,t);const i={width:e,height:t,depth:1};n.encoding!==void 0&&(ji("THREE.WebGLRenderTarget: option.encoding has been replaced by option.colorSpace."),n.colorSpace=n.encoding===Zn?Et:Kt),n=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:Gt,depthBuffer:!0,stencilBuffer:!1,depthTexture:null,samples:0},n),this.texture=new Nt(i,n.mapping,n.wrapS,n.wrapT,n.magFilter,n.minFilter,n.format,n.type,n.anisotropy,n.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.flipY=!1,this.texture.generateMipmaps=n.generateMipmaps,this.texture.internalFormat=n.internalFormat,this.depthBuffer=n.depthBuffer,this.stencilBuffer=n.stencilBuffer,this.depthTexture=n.depthTexture,this.samples=n.samples}setSize(e,t,n=1){(this.width!==e||this.height!==t||this.depth!==n)&&(this.width=e,this.height=t,this.depth=n,this.texture.image.width=e,this.texture.image.height=t,this.texture.image.depth=n,this.dispose()),this.viewport.set(0,0,e,t),this.scissor.set(0,0,e,t)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.texture=e.texture.clone(),this.texture.isRenderTargetTexture=!0;const t=Object.assign({},e.texture.image);return this.texture.source=new Gc(t),this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,e.depthTexture!==null&&(this.depthTexture=e.depthTexture.clone()),this.samples=e.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class $n extends Ah{constructor(e=1,t=1,n={}){super(e,t,n),this.isWebGLRenderTarget=!0}}class kc extends Nt{constructor(e=null,t=1,n=1,i=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:t,height:n,depth:i},this.magFilter=Ft,this.minFilter=Ft,this.wrapR=rn,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class Ch extends Nt{constructor(e=null,t=1,n=1,i=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:t,height:n,depth:i},this.magFilter=Ft,this.minFilter=Ft,this.wrapR=rn,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class Kn{constructor(e=0,t=0,n=0,i=1){this.isQuaternion=!0,this._x=e,this._y=t,this._z=n,this._w=i}static slerpFlat(e,t,n,i,r,a,o){let c=n[i+0],l=n[i+1],h=n[i+2],u=n[i+3];const f=r[a+0],d=r[a+1],g=r[a+2],v=r[a+3];if(o===0){e[t+0]=c,e[t+1]=l,e[t+2]=h,e[t+3]=u;return}if(o===1){e[t+0]=f,e[t+1]=d,e[t+2]=g,e[t+3]=v;return}if(u!==v||c!==f||l!==d||h!==g){let m=1-o;const p=c*f+l*d+h*g+u*v,y=p>=0?1:-1,_=1-p*p;if(_>Number.EPSILON){const R=Math.sqrt(_),T=Math.atan2(R,p*y);m=Math.sin(m*T)/R,o=Math.sin(o*T)/R}const S=o*y;if(c=c*m+f*S,l=l*m+d*S,h=h*m+g*S,u=u*m+v*S,m===1-o){const R=1/Math.sqrt(c*c+l*l+h*h+u*u);c*=R,l*=R,h*=R,u*=R}}e[t]=c,e[t+1]=l,e[t+2]=h,e[t+3]=u}static multiplyQuaternionsFlat(e,t,n,i,r,a){const o=n[i],c=n[i+1],l=n[i+2],h=n[i+3],u=r[a],f=r[a+1],d=r[a+2],g=r[a+3];return e[t]=o*g+h*u+c*d-l*f,e[t+1]=c*g+h*f+l*u-o*d,e[t+2]=l*g+h*d+o*f-c*u,e[t+3]=h*g-o*u-c*f-l*d,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,t,n,i){return this._x=e,this._y=t,this._z=n,this._w=i,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,t=!0){const n=e._x,i=e._y,r=e._z,a=e._order,o=Math.cos,c=Math.sin,l=o(n/2),h=o(i/2),u=o(r/2),f=c(n/2),d=c(i/2),g=c(r/2);switch(a){case"XYZ":this._x=f*h*u+l*d*g,this._y=l*d*u-f*h*g,this._z=l*h*g+f*d*u,this._w=l*h*u-f*d*g;break;case"YXZ":this._x=f*h*u+l*d*g,this._y=l*d*u-f*h*g,this._z=l*h*g-f*d*u,this._w=l*h*u+f*d*g;break;case"ZXY":this._x=f*h*u-l*d*g,this._y=l*d*u+f*h*g,this._z=l*h*g+f*d*u,this._w=l*h*u-f*d*g;break;case"ZYX":this._x=f*h*u-l*d*g,this._y=l*d*u+f*h*g,this._z=l*h*g-f*d*u,this._w=l*h*u+f*d*g;break;case"YZX":this._x=f*h*u+l*d*g,this._y=l*d*u+f*h*g,this._z=l*h*g-f*d*u,this._w=l*h*u-f*d*g;break;case"XZY":this._x=f*h*u-l*d*g,this._y=l*d*u-f*h*g,this._z=l*h*g+f*d*u,this._w=l*h*u+f*d*g;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+a)}return t===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,t){const n=t/2,i=Math.sin(n);return this._x=e.x*i,this._y=e.y*i,this._z=e.z*i,this._w=Math.cos(n),this._onChangeCallback(),this}setFromRotationMatrix(e){const t=e.elements,n=t[0],i=t[4],r=t[8],a=t[1],o=t[5],c=t[9],l=t[2],h=t[6],u=t[10],f=n+o+u;if(f>0){const d=.5/Math.sqrt(f+1);this._w=.25/d,this._x=(h-c)*d,this._y=(r-l)*d,this._z=(a-i)*d}else if(n>o&&n>u){const d=2*Math.sqrt(1+n-o-u);this._w=(h-c)/d,this._x=.25*d,this._y=(i+a)/d,this._z=(r+l)/d}else if(o>u){const d=2*Math.sqrt(1+o-n-u);this._w=(r-l)/d,this._x=(i+a)/d,this._y=.25*d,this._z=(c+h)/d}else{const d=2*Math.sqrt(1+u-n-o);this._w=(a-i)/d,this._x=(r+l)/d,this._y=(c+h)/d,this._z=.25*d}return this._onChangeCallback(),this}setFromUnitVectors(e,t){let n=e.dot(t)+1;return n<Number.EPSILON?(n=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=n):(this._x=0,this._y=-e.z,this._z=e.y,this._w=n)):(this._x=e.y*t.z-e.z*t.y,this._y=e.z*t.x-e.x*t.z,this._z=e.x*t.y-e.y*t.x,this._w=n),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(wt(this.dot(e),-1,1)))}rotateTowards(e,t){const n=this.angleTo(e);if(n===0)return this;const i=Math.min(1,t/n);return this.slerp(e,i),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,t){const n=e._x,i=e._y,r=e._z,a=e._w,o=t._x,c=t._y,l=t._z,h=t._w;return this._x=n*h+a*o+i*l-r*c,this._y=i*h+a*c+r*o-n*l,this._z=r*h+a*l+n*c-i*o,this._w=a*h-n*o-i*c-r*l,this._onChangeCallback(),this}slerp(e,t){if(t===0)return this;if(t===1)return this.copy(e);const n=this._x,i=this._y,r=this._z,a=this._w;let o=a*e._w+n*e._x+i*e._y+r*e._z;if(o<0?(this._w=-e._w,this._x=-e._x,this._y=-e._y,this._z=-e._z,o=-o):this.copy(e),o>=1)return this._w=a,this._x=n,this._y=i,this._z=r,this;const c=1-o*o;if(c<=Number.EPSILON){const d=1-t;return this._w=d*a+t*this._w,this._x=d*n+t*this._x,this._y=d*i+t*this._y,this._z=d*r+t*this._z,this.normalize(),this}const l=Math.sqrt(c),h=Math.atan2(l,o),u=Math.sin((1-t)*h)/l,f=Math.sin(t*h)/l;return this._w=a*u+this._w*f,this._x=n*u+this._x*f,this._y=i*u+this._y*f,this._z=r*u+this._z*f,this._onChangeCallback(),this}slerpQuaternions(e,t,n){return this.copy(e).slerp(t,n)}random(){const e=Math.random(),t=Math.sqrt(1-e),n=Math.sqrt(e),i=2*Math.PI*Math.random(),r=2*Math.PI*Math.random();return this.set(t*Math.cos(i),n*Math.sin(r),n*Math.cos(r),t*Math.sin(i))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,t=0){return this._x=e[t],this._y=e[t+1],this._z=e[t+2],this._w=e[t+3],this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._w,e}fromBufferAttribute(e,t){return this._x=e.getX(t),this._y=e.getY(t),this._z=e.getZ(t),this._w=e.getW(t),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class x{constructor(e=0,t=0,n=0){x.prototype.isVector3=!0,this.x=e,this.y=t,this.z=n}set(e,t,n){return n===void 0&&(n=this.z),this.x=e,this.y=t,this.z=n,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,t){return this.x=e.x*t.x,this.y=e.y*t.y,this.z=e.z*t.z,this}applyEuler(e){return this.applyQuaternion(_o.setFromEuler(e))}applyAxisAngle(e,t){return this.applyQuaternion(_o.setFromAxisAngle(e,t))}applyMatrix3(e){const t=this.x,n=this.y,i=this.z,r=e.elements;return this.x=r[0]*t+r[3]*n+r[6]*i,this.y=r[1]*t+r[4]*n+r[7]*i,this.z=r[2]*t+r[5]*n+r[8]*i,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){const t=this.x,n=this.y,i=this.z,r=e.elements,a=1/(r[3]*t+r[7]*n+r[11]*i+r[15]);return this.x=(r[0]*t+r[4]*n+r[8]*i+r[12])*a,this.y=(r[1]*t+r[5]*n+r[9]*i+r[13])*a,this.z=(r[2]*t+r[6]*n+r[10]*i+r[14])*a,this}applyQuaternion(e){const t=this.x,n=this.y,i=this.z,r=e.x,a=e.y,o=e.z,c=e.w,l=2*(a*i-o*n),h=2*(o*t-r*i),u=2*(r*n-a*t);return this.x=t+c*l+a*u-o*h,this.y=n+c*h+o*l-r*u,this.z=i+c*u+r*h-a*l,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){const t=this.x,n=this.y,i=this.z,r=e.elements;return this.x=r[0]*t+r[4]*n+r[8]*i,this.y=r[1]*t+r[5]*n+r[9]*i,this.z=r[2]*t+r[6]*n+r[10]*i,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this.z=Math.max(e.z,Math.min(t.z,this.z)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this.z=Math.max(e,Math.min(t,this.z)),this}clampLength(e,t){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(e,Math.min(t,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,t){const n=e.x,i=e.y,r=e.z,a=t.x,o=t.y,c=t.z;return this.x=i*c-r*o,this.y=r*a-n*c,this.z=n*o-i*a,this}projectOnVector(e){const t=e.lengthSq();if(t===0)return this.set(0,0,0);const n=e.dot(this)/t;return this.copy(e).multiplyScalar(n)}projectOnPlane(e){return vr.copy(this).projectOnVector(e),this.sub(vr)}reflect(e){return this.sub(vr.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const n=this.dot(e)/t;return Math.acos(wt(n,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,n=this.y-e.y,i=this.z-e.z;return t*t+n*n+i*i}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,t,n){const i=Math.sin(t)*e;return this.x=i*Math.sin(n),this.y=Math.cos(t)*e,this.z=i*Math.cos(n),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,t,n){return this.x=e*Math.sin(t),this.y=n,this.z=e*Math.cos(t),this}setFromMatrixPosition(e){const t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this}setFromMatrixScale(e){const t=this.setFromMatrixColumn(e,0).length(),n=this.setFromMatrixColumn(e,1).length(),i=this.setFromMatrixColumn(e,2).length();return this.x=t,this.y=n,this.z=i,this}setFromMatrixColumn(e,t){return this.fromArray(e.elements,t*4)}setFromMatrix3Column(e,t){return this.fromArray(e.elements,t*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const e=(Math.random()-.5)*2,t=Math.random()*Math.PI*2,n=Math.sqrt(1-e**2);return this.x=n*Math.cos(t),this.y=n*Math.sin(t),this.z=e,this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const vr=new x,_o=new Kn;class ei{constructor(e=new x(1/0,1/0,1/0),t=new x(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=t}set(e,t){return this.min.copy(e),this.max.copy(t),this}setFromArray(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t+=3)this.expandByPoint(Jt.fromArray(e,t));return this}setFromBufferAttribute(e){this.makeEmpty();for(let t=0,n=e.count;t<n;t++)this.expandByPoint(Jt.fromBufferAttribute(e,t));return this}setFromPoints(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t++)this.expandByPoint(e[t]);return this}setFromCenterAndSize(e,t){const n=Jt.copy(t).multiplyScalar(.5);return this.min.copy(e).sub(n),this.max.copy(e).add(n),this}setFromObject(e,t=!1){return this.makeEmpty(),this.expandByObject(e,t)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,t=!1){e.updateWorldMatrix(!1,!1);const n=e.geometry;if(n!==void 0){const r=n.getAttribute("position");if(t===!0&&r!==void 0&&e.isInstancedMesh!==!0)for(let a=0,o=r.count;a<o;a++)e.isMesh===!0?e.getVertexPosition(a,Jt):Jt.fromBufferAttribute(r,a),Jt.applyMatrix4(e.matrixWorld),this.expandByPoint(Jt);else e.boundingBox!==void 0?(e.boundingBox===null&&e.computeBoundingBox(),rs.copy(e.boundingBox)):(n.boundingBox===null&&n.computeBoundingBox(),rs.copy(n.boundingBox)),rs.applyMatrix4(e.matrixWorld),this.union(rs)}const i=e.children;for(let r=0,a=i.length;r<a;r++)this.expandByObject(i[r],t);return this}containsPoint(e){return!(e.x<this.min.x||e.x>this.max.x||e.y<this.min.y||e.y>this.max.y||e.z<this.min.z||e.z>this.max.z)}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,t){return t.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return!(e.max.x<this.min.x||e.min.x>this.max.x||e.max.y<this.min.y||e.min.y>this.max.y||e.max.z<this.min.z||e.min.z>this.max.z)}intersectsSphere(e){return this.clampPoint(e.center,Jt),Jt.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let t,n;return e.normal.x>0?(t=e.normal.x*this.min.x,n=e.normal.x*this.max.x):(t=e.normal.x*this.max.x,n=e.normal.x*this.min.x),e.normal.y>0?(t+=e.normal.y*this.min.y,n+=e.normal.y*this.max.y):(t+=e.normal.y*this.max.y,n+=e.normal.y*this.min.y),e.normal.z>0?(t+=e.normal.z*this.min.z,n+=e.normal.z*this.max.z):(t+=e.normal.z*this.max.z,n+=e.normal.z*this.min.z),t<=-e.constant&&n>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(zi),as.subVectors(this.max,zi),ri.subVectors(e.a,zi),ai.subVectors(e.b,zi),oi.subVectors(e.c,zi),En.subVectors(ai,ri),wn.subVectors(oi,ai),Gn.subVectors(ri,oi);let t=[0,-En.z,En.y,0,-wn.z,wn.y,0,-Gn.z,Gn.y,En.z,0,-En.x,wn.z,0,-wn.x,Gn.z,0,-Gn.x,-En.y,En.x,0,-wn.y,wn.x,0,-Gn.y,Gn.x,0];return!_r(t,ri,ai,oi,as)||(t=[1,0,0,0,1,0,0,0,1],!_r(t,ri,ai,oi,as))?!1:(os.crossVectors(En,wn),t=[os.x,os.y,os.z],_r(t,ri,ai,oi,as))}clampPoint(e,t){return t.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,Jt).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(Jt).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(fn[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),fn[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),fn[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),fn[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),fn[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),fn[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),fn[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),fn[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(fn),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}}const fn=[new x,new x,new x,new x,new x,new x,new x,new x],Jt=new x,rs=new ei,ri=new x,ai=new x,oi=new x,En=new x,wn=new x,Gn=new x,zi=new x,as=new x,os=new x,kn=new x;function _r(s,e,t,n,i){for(let r=0,a=s.length-3;r<=a;r+=3){kn.fromArray(s,r);const o=i.x*Math.abs(kn.x)+i.y*Math.abs(kn.y)+i.z*Math.abs(kn.z),c=e.dot(kn),l=t.dot(kn),h=n.dot(kn);if(Math.max(-Math.max(c,l,h),Math.min(c,l,h))>o)return!1}return!0}const Rh=new ei,Bi=new x,xr=new x;class $s{constructor(e=new x,t=-1){this.isSphere=!0,this.center=e,this.radius=t}set(e,t){return this.center.copy(e),this.radius=t,this}setFromPoints(e,t){const n=this.center;t!==void 0?n.copy(t):Rh.setFromPoints(e).getCenter(n);let i=0;for(let r=0,a=e.length;r<a;r++)i=Math.max(i,n.distanceToSquared(e[r]));return this.radius=Math.sqrt(i),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){const t=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=t*t}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,t){const n=this.center.distanceToSquared(e);return t.copy(e),n>this.radius*this.radius&&(t.sub(this.center).normalize(),t.multiplyScalar(this.radius).add(this.center)),t}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;Bi.subVectors(e,this.center);const t=Bi.lengthSq();if(t>this.radius*this.radius){const n=Math.sqrt(t),i=(n-this.radius)*.5;this.center.addScaledVector(Bi,i/n),this.radius+=i}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(xr.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(Bi.copy(e.center).add(xr)),this.expandByPoint(Bi.copy(e.center).sub(xr))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}}const pn=new x,yr=new x,cs=new x,Tn=new x,Sr=new x,ls=new x,Mr=new x;class Ks{constructor(e=new x,t=new x(0,0,-1)){this.origin=e,this.direction=t}set(e,t){return this.origin.copy(e),this.direction.copy(t),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,t){return t.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,pn)),this}closestPointToPoint(e,t){t.subVectors(e,this.origin);const n=t.dot(this.direction);return n<0?t.copy(this.origin):t.copy(this.origin).addScaledVector(this.direction,n)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){const t=pn.subVectors(e,this.origin).dot(this.direction);return t<0?this.origin.distanceToSquared(e):(pn.copy(this.origin).addScaledVector(this.direction,t),pn.distanceToSquared(e))}distanceSqToSegment(e,t,n,i){yr.copy(e).add(t).multiplyScalar(.5),cs.copy(t).sub(e).normalize(),Tn.copy(this.origin).sub(yr);const r=e.distanceTo(t)*.5,a=-this.direction.dot(cs),o=Tn.dot(this.direction),c=-Tn.dot(cs),l=Tn.lengthSq(),h=Math.abs(1-a*a);let u,f,d,g;if(h>0)if(u=a*c-o,f=a*o-c,g=r*h,u>=0)if(f>=-g)if(f<=g){const v=1/h;u*=v,f*=v,d=u*(u+a*f+2*o)+f*(a*u+f+2*c)+l}else f=r,u=Math.max(0,-(a*f+o)),d=-u*u+f*(f+2*c)+l;else f=-r,u=Math.max(0,-(a*f+o)),d=-u*u+f*(f+2*c)+l;else f<=-g?(u=Math.max(0,-(-a*r+o)),f=u>0?-r:Math.min(Math.max(-r,-c),r),d=-u*u+f*(f+2*c)+l):f<=g?(u=0,f=Math.min(Math.max(-r,-c),r),d=f*(f+2*c)+l):(u=Math.max(0,-(a*r+o)),f=u>0?r:Math.min(Math.max(-r,-c),r),d=-u*u+f*(f+2*c)+l);else f=a>0?-r:r,u=Math.max(0,-(a*f+o)),d=-u*u+f*(f+2*c)+l;return n&&n.copy(this.origin).addScaledVector(this.direction,u),i&&i.copy(yr).addScaledVector(cs,f),d}intersectSphere(e,t){pn.subVectors(e.center,this.origin);const n=pn.dot(this.direction),i=pn.dot(pn)-n*n,r=e.radius*e.radius;if(i>r)return null;const a=Math.sqrt(r-i),o=n-a,c=n+a;return c<0?null:o<0?this.at(c,t):this.at(o,t)}intersectsSphere(e){return this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){const t=e.normal.dot(this.direction);if(t===0)return e.distanceToPoint(this.origin)===0?0:null;const n=-(this.origin.dot(e.normal)+e.constant)/t;return n>=0?n:null}intersectPlane(e,t){const n=this.distanceToPlane(e);return n===null?null:this.at(n,t)}intersectsPlane(e){const t=e.distanceToPoint(this.origin);return t===0||e.normal.dot(this.direction)*t<0}intersectBox(e,t){let n,i,r,a,o,c;const l=1/this.direction.x,h=1/this.direction.y,u=1/this.direction.z,f=this.origin;return l>=0?(n=(e.min.x-f.x)*l,i=(e.max.x-f.x)*l):(n=(e.max.x-f.x)*l,i=(e.min.x-f.x)*l),h>=0?(r=(e.min.y-f.y)*h,a=(e.max.y-f.y)*h):(r=(e.max.y-f.y)*h,a=(e.min.y-f.y)*h),n>a||r>i||((r>n||isNaN(n))&&(n=r),(a<i||isNaN(i))&&(i=a),u>=0?(o=(e.min.z-f.z)*u,c=(e.max.z-f.z)*u):(o=(e.max.z-f.z)*u,c=(e.min.z-f.z)*u),n>c||o>i)||((o>n||n!==n)&&(n=o),(c<i||i!==i)&&(i=c),i<0)?null:this.at(n>=0?n:i,t)}intersectsBox(e){return this.intersectBox(e,pn)!==null}intersectTriangle(e,t,n,i,r){Sr.subVectors(t,e),ls.subVectors(n,e),Mr.crossVectors(Sr,ls);let a=this.direction.dot(Mr),o;if(a>0){if(i)return null;o=1}else if(a<0)o=-1,a=-a;else return null;Tn.subVectors(this.origin,e);const c=o*this.direction.dot(ls.crossVectors(Tn,ls));if(c<0)return null;const l=o*this.direction.dot(Sr.cross(Tn));if(l<0||c+l>a)return null;const h=-o*Tn.dot(Mr);return h<0?null:this.at(h/a,r)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class ht{constructor(e,t,n,i,r,a,o,c,l,h,u,f,d,g,v,m){ht.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,t,n,i,r,a,o,c,l,h,u,f,d,g,v,m)}set(e,t,n,i,r,a,o,c,l,h,u,f,d,g,v,m){const p=this.elements;return p[0]=e,p[4]=t,p[8]=n,p[12]=i,p[1]=r,p[5]=a,p[9]=o,p[13]=c,p[2]=l,p[6]=h,p[10]=u,p[14]=f,p[3]=d,p[7]=g,p[11]=v,p[15]=m,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new ht().fromArray(this.elements)}copy(e){const t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],t[9]=n[9],t[10]=n[10],t[11]=n[11],t[12]=n[12],t[13]=n[13],t[14]=n[14],t[15]=n[15],this}copyPosition(e){const t=this.elements,n=e.elements;return t[12]=n[12],t[13]=n[13],t[14]=n[14],this}setFromMatrix3(e){const t=e.elements;return this.set(t[0],t[3],t[6],0,t[1],t[4],t[7],0,t[2],t[5],t[8],0,0,0,0,1),this}extractBasis(e,t,n){return e.setFromMatrixColumn(this,0),t.setFromMatrixColumn(this,1),n.setFromMatrixColumn(this,2),this}makeBasis(e,t,n){return this.set(e.x,t.x,n.x,0,e.y,t.y,n.y,0,e.z,t.z,n.z,0,0,0,0,1),this}extractRotation(e){const t=this.elements,n=e.elements,i=1/ci.setFromMatrixColumn(e,0).length(),r=1/ci.setFromMatrixColumn(e,1).length(),a=1/ci.setFromMatrixColumn(e,2).length();return t[0]=n[0]*i,t[1]=n[1]*i,t[2]=n[2]*i,t[3]=0,t[4]=n[4]*r,t[5]=n[5]*r,t[6]=n[6]*r,t[7]=0,t[8]=n[8]*a,t[9]=n[9]*a,t[10]=n[10]*a,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromEuler(e){const t=this.elements,n=e.x,i=e.y,r=e.z,a=Math.cos(n),o=Math.sin(n),c=Math.cos(i),l=Math.sin(i),h=Math.cos(r),u=Math.sin(r);if(e.order==="XYZ"){const f=a*h,d=a*u,g=o*h,v=o*u;t[0]=c*h,t[4]=-c*u,t[8]=l,t[1]=d+g*l,t[5]=f-v*l,t[9]=-o*c,t[2]=v-f*l,t[6]=g+d*l,t[10]=a*c}else if(e.order==="YXZ"){const f=c*h,d=c*u,g=l*h,v=l*u;t[0]=f+v*o,t[4]=g*o-d,t[8]=a*l,t[1]=a*u,t[5]=a*h,t[9]=-o,t[2]=d*o-g,t[6]=v+f*o,t[10]=a*c}else if(e.order==="ZXY"){const f=c*h,d=c*u,g=l*h,v=l*u;t[0]=f-v*o,t[4]=-a*u,t[8]=g+d*o,t[1]=d+g*o,t[5]=a*h,t[9]=v-f*o,t[2]=-a*l,t[6]=o,t[10]=a*c}else if(e.order==="ZYX"){const f=a*h,d=a*u,g=o*h,v=o*u;t[0]=c*h,t[4]=g*l-d,t[8]=f*l+v,t[1]=c*u,t[5]=v*l+f,t[9]=d*l-g,t[2]=-l,t[6]=o*c,t[10]=a*c}else if(e.order==="YZX"){const f=a*c,d=a*l,g=o*c,v=o*l;t[0]=c*h,t[4]=v-f*u,t[8]=g*u+d,t[1]=u,t[5]=a*h,t[9]=-o*h,t[2]=-l*h,t[6]=d*u+g,t[10]=f-v*u}else if(e.order==="XZY"){const f=a*c,d=a*l,g=o*c,v=o*l;t[0]=c*h,t[4]=-u,t[8]=l*h,t[1]=f*u+v,t[5]=a*h,t[9]=d*u-g,t[2]=g*u-d,t[6]=o*h,t[10]=v*u+f}return t[3]=0,t[7]=0,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromQuaternion(e){return this.compose(Ph,e,Lh)}lookAt(e,t,n){const i=this.elements;return Vt.subVectors(e,t),Vt.lengthSq()===0&&(Vt.z=1),Vt.normalize(),An.crossVectors(n,Vt),An.lengthSq()===0&&(Math.abs(n.z)===1?Vt.x+=1e-4:Vt.z+=1e-4,Vt.normalize(),An.crossVectors(n,Vt)),An.normalize(),hs.crossVectors(Vt,An),i[0]=An.x,i[4]=hs.x,i[8]=Vt.x,i[1]=An.y,i[5]=hs.y,i[9]=Vt.y,i[2]=An.z,i[6]=hs.z,i[10]=Vt.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const n=e.elements,i=t.elements,r=this.elements,a=n[0],o=n[4],c=n[8],l=n[12],h=n[1],u=n[5],f=n[9],d=n[13],g=n[2],v=n[6],m=n[10],p=n[14],y=n[3],_=n[7],S=n[11],R=n[15],T=i[0],w=i[4],O=i[8],M=i[12],A=i[1],U=i[5],G=i[9],j=i[13],D=i[2],I=i[6],H=i[10],q=i[14],Y=i[3],Z=i[7],K=i[11],se=i[15];return r[0]=a*T+o*A+c*D+l*Y,r[4]=a*w+o*U+c*I+l*Z,r[8]=a*O+o*G+c*H+l*K,r[12]=a*M+o*j+c*q+l*se,r[1]=h*T+u*A+f*D+d*Y,r[5]=h*w+u*U+f*I+d*Z,r[9]=h*O+u*G+f*H+d*K,r[13]=h*M+u*j+f*q+d*se,r[2]=g*T+v*A+m*D+p*Y,r[6]=g*w+v*U+m*I+p*Z,r[10]=g*O+v*G+m*H+p*K,r[14]=g*M+v*j+m*q+p*se,r[3]=y*T+_*A+S*D+R*Y,r[7]=y*w+_*U+S*I+R*Z,r[11]=y*O+_*G+S*H+R*K,r[15]=y*M+_*j+S*q+R*se,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[4]*=e,t[8]*=e,t[12]*=e,t[1]*=e,t[5]*=e,t[9]*=e,t[13]*=e,t[2]*=e,t[6]*=e,t[10]*=e,t[14]*=e,t[3]*=e,t[7]*=e,t[11]*=e,t[15]*=e,this}determinant(){const e=this.elements,t=e[0],n=e[4],i=e[8],r=e[12],a=e[1],o=e[5],c=e[9],l=e[13],h=e[2],u=e[6],f=e[10],d=e[14],g=e[3],v=e[7],m=e[11],p=e[15];return g*(+r*c*u-i*l*u-r*o*f+n*l*f+i*o*d-n*c*d)+v*(+t*c*d-t*l*f+r*a*f-i*a*d+i*l*h-r*c*h)+m*(+t*l*u-t*o*d-r*a*u+n*a*d+r*o*h-n*l*h)+p*(-i*o*h-t*c*u+t*o*f+i*a*u-n*a*f+n*c*h)}transpose(){const e=this.elements;let t;return t=e[1],e[1]=e[4],e[4]=t,t=e[2],e[2]=e[8],e[8]=t,t=e[6],e[6]=e[9],e[9]=t,t=e[3],e[3]=e[12],e[12]=t,t=e[7],e[7]=e[13],e[13]=t,t=e[11],e[11]=e[14],e[14]=t,this}setPosition(e,t,n){const i=this.elements;return e.isVector3?(i[12]=e.x,i[13]=e.y,i[14]=e.z):(i[12]=e,i[13]=t,i[14]=n),this}invert(){const e=this.elements,t=e[0],n=e[1],i=e[2],r=e[3],a=e[4],o=e[5],c=e[6],l=e[7],h=e[8],u=e[9],f=e[10],d=e[11],g=e[12],v=e[13],m=e[14],p=e[15],y=u*m*l-v*f*l+v*c*d-o*m*d-u*c*p+o*f*p,_=g*f*l-h*m*l-g*c*d+a*m*d+h*c*p-a*f*p,S=h*v*l-g*u*l+g*o*d-a*v*d-h*o*p+a*u*p,R=g*u*c-h*v*c-g*o*f+a*v*f+h*o*m-a*u*m,T=t*y+n*_+i*S+r*R;if(T===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const w=1/T;return e[0]=y*w,e[1]=(v*f*r-u*m*r-v*i*d+n*m*d+u*i*p-n*f*p)*w,e[2]=(o*m*r-v*c*r+v*i*l-n*m*l-o*i*p+n*c*p)*w,e[3]=(u*c*r-o*f*r-u*i*l+n*f*l+o*i*d-n*c*d)*w,e[4]=_*w,e[5]=(h*m*r-g*f*r+g*i*d-t*m*d-h*i*p+t*f*p)*w,e[6]=(g*c*r-a*m*r-g*i*l+t*m*l+a*i*p-t*c*p)*w,e[7]=(a*f*r-h*c*r+h*i*l-t*f*l-a*i*d+t*c*d)*w,e[8]=S*w,e[9]=(g*u*r-h*v*r-g*n*d+t*v*d+h*n*p-t*u*p)*w,e[10]=(a*v*r-g*o*r+g*n*l-t*v*l-a*n*p+t*o*p)*w,e[11]=(h*o*r-a*u*r-h*n*l+t*u*l+a*n*d-t*o*d)*w,e[12]=R*w,e[13]=(h*v*i-g*u*i+g*n*f-t*v*f-h*n*m+t*u*m)*w,e[14]=(g*o*i-a*v*i-g*n*c+t*v*c+a*n*m-t*o*m)*w,e[15]=(a*u*i-h*o*i+h*n*c-t*u*c-a*n*f+t*o*f)*w,this}scale(e){const t=this.elements,n=e.x,i=e.y,r=e.z;return t[0]*=n,t[4]*=i,t[8]*=r,t[1]*=n,t[5]*=i,t[9]*=r,t[2]*=n,t[6]*=i,t[10]*=r,t[3]*=n,t[7]*=i,t[11]*=r,this}getMaxScaleOnAxis(){const e=this.elements,t=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],n=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],i=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(t,n,i))}makeTranslation(e,t,n){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,t,0,0,1,n,0,0,0,1),this}makeRotationX(e){const t=Math.cos(e),n=Math.sin(e);return this.set(1,0,0,0,0,t,-n,0,0,n,t,0,0,0,0,1),this}makeRotationY(e){const t=Math.cos(e),n=Math.sin(e);return this.set(t,0,n,0,0,1,0,0,-n,0,t,0,0,0,0,1),this}makeRotationZ(e){const t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,0,n,t,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,t){const n=Math.cos(t),i=Math.sin(t),r=1-n,a=e.x,o=e.y,c=e.z,l=r*a,h=r*o;return this.set(l*a+n,l*o-i*c,l*c+i*o,0,l*o+i*c,h*o+n,h*c-i*a,0,l*c-i*o,h*c+i*a,r*c*c+n,0,0,0,0,1),this}makeScale(e,t,n){return this.set(e,0,0,0,0,t,0,0,0,0,n,0,0,0,0,1),this}makeShear(e,t,n,i,r,a){return this.set(1,n,r,0,e,1,a,0,t,i,1,0,0,0,0,1),this}compose(e,t,n){const i=this.elements,r=t._x,a=t._y,o=t._z,c=t._w,l=r+r,h=a+a,u=o+o,f=r*l,d=r*h,g=r*u,v=a*h,m=a*u,p=o*u,y=c*l,_=c*h,S=c*u,R=n.x,T=n.y,w=n.z;return i[0]=(1-(v+p))*R,i[1]=(d+S)*R,i[2]=(g-_)*R,i[3]=0,i[4]=(d-S)*T,i[5]=(1-(f+p))*T,i[6]=(m+y)*T,i[7]=0,i[8]=(g+_)*w,i[9]=(m-y)*w,i[10]=(1-(f+v))*w,i[11]=0,i[12]=e.x,i[13]=e.y,i[14]=e.z,i[15]=1,this}decompose(e,t,n){const i=this.elements;let r=ci.set(i[0],i[1],i[2]).length();const a=ci.set(i[4],i[5],i[6]).length(),o=ci.set(i[8],i[9],i[10]).length();this.determinant()<0&&(r=-r),e.x=i[12],e.y=i[13],e.z=i[14],Qt.copy(this);const l=1/r,h=1/a,u=1/o;return Qt.elements[0]*=l,Qt.elements[1]*=l,Qt.elements[2]*=l,Qt.elements[4]*=h,Qt.elements[5]*=h,Qt.elements[6]*=h,Qt.elements[8]*=u,Qt.elements[9]*=u,Qt.elements[10]*=u,t.setFromRotationMatrix(Qt),n.x=r,n.y=a,n.z=o,this}makePerspective(e,t,n,i,r,a,o=Sn){const c=this.elements,l=2*r/(t-e),h=2*r/(n-i),u=(t+e)/(t-e),f=(n+i)/(n-i);let d,g;if(o===Sn)d=-(a+r)/(a-r),g=-2*a*r/(a-r);else if(o===Vs)d=-a/(a-r),g=-a*r/(a-r);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+o);return c[0]=l,c[4]=0,c[8]=u,c[12]=0,c[1]=0,c[5]=h,c[9]=f,c[13]=0,c[2]=0,c[6]=0,c[10]=d,c[14]=g,c[3]=0,c[7]=0,c[11]=-1,c[15]=0,this}makeOrthographic(e,t,n,i,r,a,o=Sn){const c=this.elements,l=1/(t-e),h=1/(n-i),u=1/(a-r),f=(t+e)*l,d=(n+i)*h;let g,v;if(o===Sn)g=(a+r)*u,v=-2*u;else if(o===Vs)g=r*u,v=-1*u;else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+o);return c[0]=2*l,c[4]=0,c[8]=0,c[12]=-f,c[1]=0,c[5]=2*h,c[9]=0,c[13]=-d,c[2]=0,c[6]=0,c[10]=v,c[14]=-g,c[3]=0,c[7]=0,c[11]=0,c[15]=1,this}equals(e){const t=this.elements,n=e.elements;for(let i=0;i<16;i++)if(t[i]!==n[i])return!1;return!0}fromArray(e,t=0){for(let n=0;n<16;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){const n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e[t+9]=n[9],e[t+10]=n[10],e[t+11]=n[11],e[t+12]=n[12],e[t+13]=n[13],e[t+14]=n[14],e[t+15]=n[15],e}}const ci=new x,Qt=new ht,Ph=new x(0,0,0),Lh=new x(1,1,1),An=new x,hs=new x,Vt=new x,xo=new ht,yo=new Kn;class Js{constructor(e=0,t=0,n=0,i=Js.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=t,this._z=n,this._order=i}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,t,n,i=this._order){return this._x=e,this._y=t,this._z=n,this._order=i,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,t=this._order,n=!0){const i=e.elements,r=i[0],a=i[4],o=i[8],c=i[1],l=i[5],h=i[9],u=i[2],f=i[6],d=i[10];switch(t){case"XYZ":this._y=Math.asin(wt(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(-h,d),this._z=Math.atan2(-a,r)):(this._x=Math.atan2(f,l),this._z=0);break;case"YXZ":this._x=Math.asin(-wt(h,-1,1)),Math.abs(h)<.9999999?(this._y=Math.atan2(o,d),this._z=Math.atan2(c,l)):(this._y=Math.atan2(-u,r),this._z=0);break;case"ZXY":this._x=Math.asin(wt(f,-1,1)),Math.abs(f)<.9999999?(this._y=Math.atan2(-u,d),this._z=Math.atan2(-a,l)):(this._y=0,this._z=Math.atan2(c,r));break;case"ZYX":this._y=Math.asin(-wt(u,-1,1)),Math.abs(u)<.9999999?(this._x=Math.atan2(f,d),this._z=Math.atan2(c,r)):(this._x=0,this._z=Math.atan2(-a,l));break;case"YZX":this._z=Math.asin(wt(c,-1,1)),Math.abs(c)<.9999999?(this._x=Math.atan2(-h,l),this._y=Math.atan2(-u,r)):(this._x=0,this._y=Math.atan2(o,d));break;case"XZY":this._z=Math.asin(-wt(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(f,l),this._y=Math.atan2(o,r)):(this._x=Math.atan2(-h,d),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+t)}return this._order=t,n===!0&&this._onChangeCallback(),this}setFromQuaternion(e,t,n){return xo.makeRotationFromQuaternion(e),this.setFromRotationMatrix(xo,t,n)}setFromVector3(e,t=this._order){return this.set(e.x,e.y,e.z,t)}reorder(e){return yo.setFromEuler(this),this.setFromQuaternion(yo,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}Js.DEFAULT_ORDER="XYZ";class ma{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}}let Dh=0;const So=new x,li=new Kn,mn=new ht,us=new x,Gi=new x,Oh=new x,Nh=new Kn,Mo=new x(1,0,0),bo=new x(0,1,0),Eo=new x(0,0,1),Uh={type:"added"},Ih={type:"removed"};class gt extends Qn{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:Dh++}),this.uuid=Mn(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=gt.DEFAULT_UP.clone();const e=new x,t=new Js,n=new Kn,i=new x(1,1,1);function r(){n.setFromEuler(t,!1)}function a(){t.setFromQuaternion(n,void 0,!1)}t._onChange(r),n._onChange(a),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:t},quaternion:{configurable:!0,enumerable:!0,value:n},scale:{configurable:!0,enumerable:!0,value:i},modelViewMatrix:{value:new ht},normalMatrix:{value:new We}}),this.matrix=new ht,this.matrixWorld=new ht,this.matrixAutoUpdate=gt.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=gt.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new ma,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,t){this.quaternion.setFromAxisAngle(e,t)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,t){return li.setFromAxisAngle(e,t),this.quaternion.multiply(li),this}rotateOnWorldAxis(e,t){return li.setFromAxisAngle(e,t),this.quaternion.premultiply(li),this}rotateX(e){return this.rotateOnAxis(Mo,e)}rotateY(e){return this.rotateOnAxis(bo,e)}rotateZ(e){return this.rotateOnAxis(Eo,e)}translateOnAxis(e,t){return So.copy(e).applyQuaternion(this.quaternion),this.position.add(So.multiplyScalar(t)),this}translateX(e){return this.translateOnAxis(Mo,e)}translateY(e){return this.translateOnAxis(bo,e)}translateZ(e){return this.translateOnAxis(Eo,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(mn.copy(this.matrixWorld).invert())}lookAt(e,t,n){e.isVector3?us.copy(e):us.set(e,t,n);const i=this.parent;this.updateWorldMatrix(!0,!1),Gi.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?mn.lookAt(Gi,us,this.up):mn.lookAt(us,Gi,this.up),this.quaternion.setFromRotationMatrix(mn),i&&(mn.extractRotation(i.matrixWorld),li.setFromRotationMatrix(mn),this.quaternion.premultiply(li.invert()))}add(e){if(arguments.length>1){for(let t=0;t<arguments.length;t++)this.add(arguments[t]);return this}return e===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.parent!==null&&e.parent.remove(e),e.parent=this,this.children.push(e),e.dispatchEvent(Uh)):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.remove(arguments[n]);return this}const t=this.children.indexOf(e);return t!==-1&&(e.parent=null,this.children.splice(t,1),e.dispatchEvent(Ih)),this}removeFromParent(){const e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),mn.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),mn.multiply(e.parent.matrixWorld)),e.applyMatrix4(mn),this.add(e),e.updateWorldMatrix(!1,!0),this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,t){if(this[e]===t)return this;for(let n=0,i=this.children.length;n<i;n++){const a=this.children[n].getObjectByProperty(e,t);if(a!==void 0)return a}}getObjectsByProperty(e,t,n=[]){this[e]===t&&n.push(this);const i=this.children;for(let r=0,a=i.length;r<a;r++)i[r].getObjectsByProperty(e,t,n);return n}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Gi,e,Oh),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Gi,Nh,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);const t=this.matrixWorld.elements;return e.set(t[8],t[9],t[10]).normalize()}raycast(){}traverse(e){e(this);const t=this.children;for(let n=0,i=t.length;n<i;n++)t[n].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);const t=this.children;for(let n=0,i=t.length;n<i;n++)t[n].traverseVisible(e)}traverseAncestors(e){const t=this.parent;t!==null&&(e(t),t.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix),this.matrixWorldNeedsUpdate=!1,e=!0);const t=this.children;for(let n=0,i=t.length;n<i;n++){const r=t[n];(r.matrixWorldAutoUpdate===!0||e===!0)&&r.updateMatrixWorld(e)}}updateWorldMatrix(e,t){const n=this.parent;if(e===!0&&n!==null&&n.matrixWorldAutoUpdate===!0&&n.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix),t===!0){const i=this.children;for(let r=0,a=i.length;r<a;r++){const o=i[r];o.matrixWorldAutoUpdate===!0&&o.updateWorldMatrix(!1,!0)}}}toJSON(e){const t=e===void 0||typeof e=="string",n={};t&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},n.metadata={version:4.6,type:"Object",generator:"Object3D.toJSON"});const i={};i.uuid=this.uuid,i.type=this.type,this.name!==""&&(i.name=this.name),this.castShadow===!0&&(i.castShadow=!0),this.receiveShadow===!0&&(i.receiveShadow=!0),this.visible===!1&&(i.visible=!1),this.frustumCulled===!1&&(i.frustumCulled=!1),this.renderOrder!==0&&(i.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(i.userData=this.userData),i.layers=this.layers.mask,i.matrix=this.matrix.toArray(),i.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(i.matrixAutoUpdate=!1),this.isInstancedMesh&&(i.type="InstancedMesh",i.count=this.count,i.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(i.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(i.type="BatchedMesh",i.perObjectFrustumCulled=this.perObjectFrustumCulled,i.sortObjects=this.sortObjects,i.drawRanges=this._drawRanges,i.reservedRanges=this._reservedRanges,i.visibility=this._visibility,i.active=this._active,i.bounds=this._bounds.map(o=>({boxInitialized:o.boxInitialized,boxMin:o.box.min.toArray(),boxMax:o.box.max.toArray(),sphereInitialized:o.sphereInitialized,sphereRadius:o.sphere.radius,sphereCenter:o.sphere.center.toArray()})),i.maxGeometryCount=this._maxGeometryCount,i.maxVertexCount=this._maxVertexCount,i.maxIndexCount=this._maxIndexCount,i.geometryInitialized=this._geometryInitialized,i.geometryCount=this._geometryCount,i.matricesTexture=this._matricesTexture.toJSON(e),this.boundingSphere!==null&&(i.boundingSphere={center:i.boundingSphere.center.toArray(),radius:i.boundingSphere.radius}),this.boundingBox!==null&&(i.boundingBox={min:i.boundingBox.min.toArray(),max:i.boundingBox.max.toArray()}));function r(o,c){return o[c.uuid]===void 0&&(o[c.uuid]=c.toJSON(e)),c.uuid}if(this.isScene)this.background&&(this.background.isColor?i.background=this.background.toJSON():this.background.isTexture&&(i.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(i.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){i.geometry=r(e.geometries,this.geometry);const o=this.geometry.parameters;if(o!==void 0&&o.shapes!==void 0){const c=o.shapes;if(Array.isArray(c))for(let l=0,h=c.length;l<h;l++){const u=c[l];r(e.shapes,u)}else r(e.shapes,c)}}if(this.isSkinnedMesh&&(i.bindMode=this.bindMode,i.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(r(e.skeletons,this.skeleton),i.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const o=[];for(let c=0,l=this.material.length;c<l;c++)o.push(r(e.materials,this.material[c]));i.material=o}else i.material=r(e.materials,this.material);if(this.children.length>0){i.children=[];for(let o=0;o<this.children.length;o++)i.children.push(this.children[o].toJSON(e).object)}if(this.animations.length>0){i.animations=[];for(let o=0;o<this.animations.length;o++){const c=this.animations[o];i.animations.push(r(e.animations,c))}}if(t){const o=a(e.geometries),c=a(e.materials),l=a(e.textures),h=a(e.images),u=a(e.shapes),f=a(e.skeletons),d=a(e.animations),g=a(e.nodes);o.length>0&&(n.geometries=o),c.length>0&&(n.materials=c),l.length>0&&(n.textures=l),h.length>0&&(n.images=h),u.length>0&&(n.shapes=u),f.length>0&&(n.skeletons=f),d.length>0&&(n.animations=d),g.length>0&&(n.nodes=g)}return n.object=i,n;function a(o){const c=[];for(const l in o){const h=o[l];delete h.metadata,c.push(h)}return c}}clone(e){return new this.constructor().copy(this,e)}copy(e,t=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),t===!0)for(let n=0;n<e.children.length;n++){const i=e.children[n];this.add(i.clone())}return this}}gt.DEFAULT_UP=new x(0,1,0);gt.DEFAULT_MATRIX_AUTO_UPDATE=!0;gt.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;const en=new x,gn=new x,br=new x,vn=new x,hi=new x,ui=new x,wo=new x,Er=new x,wr=new x,Tr=new x;let ds=!1;class Xt{constructor(e=new x,t=new x,n=new x){this.a=e,this.b=t,this.c=n}static getNormal(e,t,n,i){i.subVectors(n,t),en.subVectors(e,t),i.cross(en);const r=i.lengthSq();return r>0?i.multiplyScalar(1/Math.sqrt(r)):i.set(0,0,0)}static getBarycoord(e,t,n,i,r){en.subVectors(i,t),gn.subVectors(n,t),br.subVectors(e,t);const a=en.dot(en),o=en.dot(gn),c=en.dot(br),l=gn.dot(gn),h=gn.dot(br),u=a*l-o*o;if(u===0)return r.set(0,0,0),null;const f=1/u,d=(l*c-o*h)*f,g=(a*h-o*c)*f;return r.set(1-d-g,g,d)}static containsPoint(e,t,n,i){return this.getBarycoord(e,t,n,i,vn)===null?!1:vn.x>=0&&vn.y>=0&&vn.x+vn.y<=1}static getUV(e,t,n,i,r,a,o,c){return ds===!1&&(console.warn("THREE.Triangle.getUV() has been renamed to THREE.Triangle.getInterpolation()."),ds=!0),this.getInterpolation(e,t,n,i,r,a,o,c)}static getInterpolation(e,t,n,i,r,a,o,c){return this.getBarycoord(e,t,n,i,vn)===null?(c.x=0,c.y=0,"z"in c&&(c.z=0),"w"in c&&(c.w=0),null):(c.setScalar(0),c.addScaledVector(r,vn.x),c.addScaledVector(a,vn.y),c.addScaledVector(o,vn.z),c)}static isFrontFacing(e,t,n,i){return en.subVectors(n,t),gn.subVectors(e,t),en.cross(gn).dot(i)<0}set(e,t,n){return this.a.copy(e),this.b.copy(t),this.c.copy(n),this}setFromPointsAndIndices(e,t,n,i){return this.a.copy(e[t]),this.b.copy(e[n]),this.c.copy(e[i]),this}setFromAttributeAndIndices(e,t,n,i){return this.a.fromBufferAttribute(e,t),this.b.fromBufferAttribute(e,n),this.c.fromBufferAttribute(e,i),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return en.subVectors(this.c,this.b),gn.subVectors(this.a,this.b),en.cross(gn).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return Xt.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,t){return Xt.getBarycoord(e,this.a,this.b,this.c,t)}getUV(e,t,n,i,r){return ds===!1&&(console.warn("THREE.Triangle.getUV() has been renamed to THREE.Triangle.getInterpolation()."),ds=!0),Xt.getInterpolation(e,this.a,this.b,this.c,t,n,i,r)}getInterpolation(e,t,n,i,r){return Xt.getInterpolation(e,this.a,this.b,this.c,t,n,i,r)}containsPoint(e){return Xt.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return Xt.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,t){const n=this.a,i=this.b,r=this.c;let a,o;hi.subVectors(i,n),ui.subVectors(r,n),Er.subVectors(e,n);const c=hi.dot(Er),l=ui.dot(Er);if(c<=0&&l<=0)return t.copy(n);wr.subVectors(e,i);const h=hi.dot(wr),u=ui.dot(wr);if(h>=0&&u<=h)return t.copy(i);const f=c*u-h*l;if(f<=0&&c>=0&&h<=0)return a=c/(c-h),t.copy(n).addScaledVector(hi,a);Tr.subVectors(e,r);const d=hi.dot(Tr),g=ui.dot(Tr);if(g>=0&&d<=g)return t.copy(r);const v=d*l-c*g;if(v<=0&&l>=0&&g<=0)return o=l/(l-g),t.copy(n).addScaledVector(ui,o);const m=h*g-d*u;if(m<=0&&u-h>=0&&d-g>=0)return wo.subVectors(r,i),o=(u-h)/(u-h+(d-g)),t.copy(i).addScaledVector(wo,o);const p=1/(m+v+f);return a=v*p,o=f*p,t.copy(n).addScaledVector(hi,a).addScaledVector(ui,o)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}}const Hc={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},Cn={h:0,s:0,l:0},fs={h:0,s:0,l:0};function Ar(s,e,t){return t<0&&(t+=1),t>1&&(t-=1),t<1/6?s+(e-s)*6*t:t<1/2?e:t<2/3?s+(e-s)*6*(2/3-t):s}class Ue{constructor(e,t,n){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,t,n)}set(e,t,n){if(t===void 0&&n===void 0){const i=e;i&&i.isColor?this.copy(i):typeof i=="number"?this.setHex(i):typeof i=="string"&&this.setStyle(i)}else this.setRGB(e,t,n);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,t=Et){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,Je.toWorkingColorSpace(this,t),this}setRGB(e,t,n,i=Je.workingColorSpace){return this.r=e,this.g=t,this.b=n,Je.toWorkingColorSpace(this,i),this}setHSL(e,t,n,i=Je.workingColorSpace){if(e=Sh(e,1),t=wt(t,0,1),n=wt(n,0,1),t===0)this.r=this.g=this.b=n;else{const r=n<=.5?n*(1+t):n+t-n*t,a=2*n-r;this.r=Ar(a,r,e+1/3),this.g=Ar(a,r,e),this.b=Ar(a,r,e-1/3)}return Je.toWorkingColorSpace(this,i),this}setStyle(e,t=Et){function n(r){r!==void 0&&parseFloat(r)<1&&console.warn("THREE.Color: Alpha component of "+e+" will be ignored.")}let i;if(i=/^(\w+)\(([^\)]*)\)/.exec(e)){let r;const a=i[1],o=i[2];switch(a){case"rgb":case"rgba":if(r=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(r[4]),this.setRGB(Math.min(255,parseInt(r[1],10))/255,Math.min(255,parseInt(r[2],10))/255,Math.min(255,parseInt(r[3],10))/255,t);if(r=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(r[4]),this.setRGB(Math.min(100,parseInt(r[1],10))/100,Math.min(100,parseInt(r[2],10))/100,Math.min(100,parseInt(r[3],10))/100,t);break;case"hsl":case"hsla":if(r=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(r[4]),this.setHSL(parseFloat(r[1])/360,parseFloat(r[2])/100,parseFloat(r[3])/100,t);break;default:console.warn("THREE.Color: Unknown color model "+e)}}else if(i=/^\#([A-Fa-f\d]+)$/.exec(e)){const r=i[1],a=r.length;if(a===3)return this.setRGB(parseInt(r.charAt(0),16)/15,parseInt(r.charAt(1),16)/15,parseInt(r.charAt(2),16)/15,t);if(a===6)return this.setHex(parseInt(r,16),t);console.warn("THREE.Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,t);return this}setColorName(e,t=Et){const n=Hc[e.toLowerCase()];return n!==void 0?this.setHex(n,t):console.warn("THREE.Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=Ri(e.r),this.g=Ri(e.g),this.b=Ri(e.b),this}copyLinearToSRGB(e){return this.r=mr(e.r),this.g=mr(e.g),this.b=mr(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=Et){return Je.fromWorkingColorSpace(Rt.copy(this),e),Math.round(wt(Rt.r*255,0,255))*65536+Math.round(wt(Rt.g*255,0,255))*256+Math.round(wt(Rt.b*255,0,255))}getHexString(e=Et){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,t=Je.workingColorSpace){Je.fromWorkingColorSpace(Rt.copy(this),t);const n=Rt.r,i=Rt.g,r=Rt.b,a=Math.max(n,i,r),o=Math.min(n,i,r);let c,l;const h=(o+a)/2;if(o===a)c=0,l=0;else{const u=a-o;switch(l=h<=.5?u/(a+o):u/(2-a-o),a){case n:c=(i-r)/u+(i<r?6:0);break;case i:c=(r-n)/u+2;break;case r:c=(n-i)/u+4;break}c/=6}return e.h=c,e.s=l,e.l=h,e}getRGB(e,t=Je.workingColorSpace){return Je.fromWorkingColorSpace(Rt.copy(this),t),e.r=Rt.r,e.g=Rt.g,e.b=Rt.b,e}getStyle(e=Et){Je.fromWorkingColorSpace(Rt.copy(this),e);const t=Rt.r,n=Rt.g,i=Rt.b;return e!==Et?`color(${e} ${t.toFixed(3)} ${n.toFixed(3)} ${i.toFixed(3)})`:`rgb(${Math.round(t*255)},${Math.round(n*255)},${Math.round(i*255)})`}offsetHSL(e,t,n){return this.getHSL(Cn),this.setHSL(Cn.h+e,Cn.s+t,Cn.l+n)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,t){return this.r=e.r+t.r,this.g=e.g+t.g,this.b=e.b+t.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,t){return this.r+=(e.r-this.r)*t,this.g+=(e.g-this.g)*t,this.b+=(e.b-this.b)*t,this}lerpColors(e,t,n){return this.r=e.r+(t.r-e.r)*n,this.g=e.g+(t.g-e.g)*n,this.b=e.b+(t.b-e.b)*n,this}lerpHSL(e,t){this.getHSL(Cn),e.getHSL(fs);const n=fr(Cn.h,fs.h,t),i=fr(Cn.s,fs.s,t),r=fr(Cn.l,fs.l,t);return this.setHSL(n,i,r),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){const t=this.r,n=this.g,i=this.b,r=e.elements;return this.r=r[0]*t+r[3]*n+r[6]*i,this.g=r[1]*t+r[4]*n+r[7]*i,this.b=r[2]*t+r[5]*n+r[8]*i,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,t=0){return this.r=e[t],this.g=e[t+1],this.b=e[t+2],this}toArray(e=[],t=0){return e[t]=this.r,e[t+1]=this.g,e[t+2]=this.b,e}fromBufferAttribute(e,t){return this.r=e.getX(t),this.g=e.getY(t),this.b=e.getZ(t),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const Rt=new Ue;Ue.NAMES=Hc;let Fh=0;class ti extends Qn{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:Fh++}),this.uuid=Mn(),this.name="",this.type="Material",this.blending=Ci,this.side=In,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=Jr,this.blendDst=Qr,this.blendEquation=Xn,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new Ue(0,0,0),this.blendAlpha=0,this.depthFunc=Bs,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=uo,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=ii,this.stencilZFail=ii,this.stencilZPass=ii,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBuild(){}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(const t in e){const n=e[t];if(n===void 0){console.warn(`THREE.Material: parameter '${t}' has value of undefined.`);continue}const i=this[t];if(i===void 0){console.warn(`THREE.Material: '${t}' is not a property of THREE.${this.type}.`);continue}i&&i.isColor?i.set(n):i&&i.isVector3&&n&&n.isVector3?i.copy(n):this[t]=n}}toJSON(e){const t=e===void 0||typeof e=="string";t&&(e={textures:{},images:{}});const n={metadata:{version:4.6,type:"Material",generator:"Material.toJSON"}};n.uuid=this.uuid,n.type=this.type,this.name!==""&&(n.name=this.name),this.color&&this.color.isColor&&(n.color=this.color.getHex()),this.roughness!==void 0&&(n.roughness=this.roughness),this.metalness!==void 0&&(n.metalness=this.metalness),this.sheen!==void 0&&(n.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(n.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(n.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(n.emissive=this.emissive.getHex()),this.emissiveIntensity&&this.emissiveIntensity!==1&&(n.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(n.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(n.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(n.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(n.shininess=this.shininess),this.clearcoat!==void 0&&(n.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(n.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(n.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(n.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(n.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,n.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.iridescence!==void 0&&(n.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(n.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(n.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(n.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(n.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(n.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(n.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(n.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(n.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(n.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(n.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(n.lightMap=this.lightMap.toJSON(e).uuid,n.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(n.aoMap=this.aoMap.toJSON(e).uuid,n.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(n.bumpMap=this.bumpMap.toJSON(e).uuid,n.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(n.normalMap=this.normalMap.toJSON(e).uuid,n.normalMapType=this.normalMapType,n.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(n.displacementMap=this.displacementMap.toJSON(e).uuid,n.displacementScale=this.displacementScale,n.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(n.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(n.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(n.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(n.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(n.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(n.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(n.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(n.combine=this.combine)),this.envMapIntensity!==void 0&&(n.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(n.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(n.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(n.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(n.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(n.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(n.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(n.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(n.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(n.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(n.size=this.size),this.shadowSide!==null&&(n.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(n.sizeAttenuation=this.sizeAttenuation),this.blending!==Ci&&(n.blending=this.blending),this.side!==In&&(n.side=this.side),this.vertexColors===!0&&(n.vertexColors=!0),this.opacity<1&&(n.opacity=this.opacity),this.transparent===!0&&(n.transparent=!0),this.blendSrc!==Jr&&(n.blendSrc=this.blendSrc),this.blendDst!==Qr&&(n.blendDst=this.blendDst),this.blendEquation!==Xn&&(n.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(n.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(n.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(n.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(n.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(n.blendAlpha=this.blendAlpha),this.depthFunc!==Bs&&(n.depthFunc=this.depthFunc),this.depthTest===!1&&(n.depthTest=this.depthTest),this.depthWrite===!1&&(n.depthWrite=this.depthWrite),this.colorWrite===!1&&(n.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(n.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==uo&&(n.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(n.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(n.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==ii&&(n.stencilFail=this.stencilFail),this.stencilZFail!==ii&&(n.stencilZFail=this.stencilZFail),this.stencilZPass!==ii&&(n.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(n.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(n.rotation=this.rotation),this.polygonOffset===!0&&(n.polygonOffset=!0),this.polygonOffsetFactor!==0&&(n.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(n.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(n.linewidth=this.linewidth),this.dashSize!==void 0&&(n.dashSize=this.dashSize),this.gapSize!==void 0&&(n.gapSize=this.gapSize),this.scale!==void 0&&(n.scale=this.scale),this.dithering===!0&&(n.dithering=!0),this.alphaTest>0&&(n.alphaTest=this.alphaTest),this.alphaHash===!0&&(n.alphaHash=!0),this.alphaToCoverage===!0&&(n.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(n.premultipliedAlpha=!0),this.forceSinglePass===!0&&(n.forceSinglePass=!0),this.wireframe===!0&&(n.wireframe=!0),this.wireframeLinewidth>1&&(n.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(n.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(n.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(n.flatShading=!0),this.visible===!1&&(n.visible=!1),this.toneMapped===!1&&(n.toneMapped=!1),this.fog===!1&&(n.fog=!1),Object.keys(this.userData).length>0&&(n.userData=this.userData);function i(r){const a=[];for(const o in r){const c=r[o];delete c.metadata,a.push(c)}return a}if(t){const r=i(e.textures),a=i(e.images);r.length>0&&(n.textures=r),a.length>0&&(n.images=a)}return n}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;const t=e.clippingPlanes;let n=null;if(t!==null){const i=t.length;n=new Array(i);for(let r=0;r!==i;++r)n[r]=t[r].clone()}return this.clippingPlanes=n,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}}class zt extends ti{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new Ue(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.combine=Tc,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}}const mt=new x,ps=new $;class Lt{constructor(e,t,n=!1){if(Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,this.name="",this.array=e,this.itemSize=t,this.count=e!==void 0?e.length/t:0,this.normalized=n,this.usage=sa,this._updateRange={offset:0,count:-1},this.updateRanges=[],this.gpuType=Pn,this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}get updateRange(){return console.warn("THREE.BufferAttribute: updateRange() is deprecated and will be removed in r169. Use addUpdateRange() instead."),this._updateRange}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this}copyAt(e,t,n){e*=this.itemSize,n*=t.itemSize;for(let i=0,r=this.itemSize;i<r;i++)this.array[e+i]=t.array[n+i];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let t=0,n=this.count;t<n;t++)ps.fromBufferAttribute(this,t),ps.applyMatrix3(e),this.setXY(t,ps.x,ps.y);else if(this.itemSize===3)for(let t=0,n=this.count;t<n;t++)mt.fromBufferAttribute(this,t),mt.applyMatrix3(e),this.setXYZ(t,mt.x,mt.y,mt.z);return this}applyMatrix4(e){for(let t=0,n=this.count;t<n;t++)mt.fromBufferAttribute(this,t),mt.applyMatrix4(e),this.setXYZ(t,mt.x,mt.y,mt.z);return this}applyNormalMatrix(e){for(let t=0,n=this.count;t<n;t++)mt.fromBufferAttribute(this,t),mt.applyNormalMatrix(e),this.setXYZ(t,mt.x,mt.y,mt.z);return this}transformDirection(e){for(let t=0,n=this.count;t<n;t++)mt.fromBufferAttribute(this,t),mt.transformDirection(e),this.setXYZ(t,mt.x,mt.y,mt.z);return this}set(e,t=0){return this.array.set(e,t),this}getComponent(e,t){let n=this.array[e*this.itemSize+t];return this.normalized&&(n=yn(n,this.array)),n}setComponent(e,t,n){return this.normalized&&(n=Qe(n,this.array)),this.array[e*this.itemSize+t]=n,this}getX(e){let t=this.array[e*this.itemSize];return this.normalized&&(t=yn(t,this.array)),t}setX(e,t){return this.normalized&&(t=Qe(t,this.array)),this.array[e*this.itemSize]=t,this}getY(e){let t=this.array[e*this.itemSize+1];return this.normalized&&(t=yn(t,this.array)),t}setY(e,t){return this.normalized&&(t=Qe(t,this.array)),this.array[e*this.itemSize+1]=t,this}getZ(e){let t=this.array[e*this.itemSize+2];return this.normalized&&(t=yn(t,this.array)),t}setZ(e,t){return this.normalized&&(t=Qe(t,this.array)),this.array[e*this.itemSize+2]=t,this}getW(e){let t=this.array[e*this.itemSize+3];return this.normalized&&(t=yn(t,this.array)),t}setW(e,t){return this.normalized&&(t=Qe(t,this.array)),this.array[e*this.itemSize+3]=t,this}setXY(e,t,n){return e*=this.itemSize,this.normalized&&(t=Qe(t,this.array),n=Qe(n,this.array)),this.array[e+0]=t,this.array[e+1]=n,this}setXYZ(e,t,n,i){return e*=this.itemSize,this.normalized&&(t=Qe(t,this.array),n=Qe(n,this.array),i=Qe(i,this.array)),this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=i,this}setXYZW(e,t,n,i,r){return e*=this.itemSize,this.normalized&&(t=Qe(t,this.array),n=Qe(n,this.array),i=Qe(i,this.array),r=Qe(r,this.array)),this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=i,this.array[e+3]=r,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(e.name=this.name),this.usage!==sa&&(e.usage=this.usage),e}}class Vc extends Lt{constructor(e,t,n){super(new Uint16Array(e),t,n)}}class Wc extends Lt{constructor(e,t,n){super(new Uint32Array(e),t,n)}}class ft extends Lt{constructor(e,t,n){super(new Float32Array(e),t,n)}}let zh=0;const $t=new ht,Cr=new gt,di=new x,Wt=new ei,ki=new ei,St=new x;class lt extends Qn{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:zh++}),this.uuid=Mn(),this.name="",this.type="BufferGeometry",this.index=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(zc(e)?Wc:Vc)(e,1):this.index=e,this}getAttribute(e){return this.attributes[e]}setAttribute(e,t){return this.attributes[e]=t,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,t,n=0){this.groups.push({start:e,count:t,materialIndex:n})}clearGroups(){this.groups=[]}setDrawRange(e,t){this.drawRange.start=e,this.drawRange.count=t}applyMatrix4(e){const t=this.attributes.position;t!==void 0&&(t.applyMatrix4(e),t.needsUpdate=!0);const n=this.attributes.normal;if(n!==void 0){const r=new We().getNormalMatrix(e);n.applyNormalMatrix(r),n.needsUpdate=!0}const i=this.attributes.tangent;return i!==void 0&&(i.transformDirection(e),i.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(e){return $t.makeRotationFromQuaternion(e),this.applyMatrix4($t),this}rotateX(e){return $t.makeRotationX(e),this.applyMatrix4($t),this}rotateY(e){return $t.makeRotationY(e),this.applyMatrix4($t),this}rotateZ(e){return $t.makeRotationZ(e),this.applyMatrix4($t),this}translate(e,t,n){return $t.makeTranslation(e,t,n),this.applyMatrix4($t),this}scale(e,t,n){return $t.makeScale(e,t,n),this.applyMatrix4($t),this}lookAt(e){return Cr.lookAt(e),Cr.updateMatrix(),this.applyMatrix4(Cr.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(di).negate(),this.translate(di.x,di.y,di.z),this}setFromPoints(e){const t=[];for(let n=0,i=e.length;n<i;n++){const r=e[n];t.push(r.x,r.y,r.z||0)}return this.setAttribute("position",new ft(t,3)),this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new ei);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error('THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box. Alternatively set "mesh.frustumCulled" to "false".',this),this.boundingBox.set(new x(-1/0,-1/0,-1/0),new x(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),t)for(let n=0,i=t.length;n<i;n++){const r=t[n];Wt.setFromBufferAttribute(r),this.morphTargetsRelative?(St.addVectors(this.boundingBox.min,Wt.min),this.boundingBox.expandByPoint(St),St.addVectors(this.boundingBox.max,Wt.max),this.boundingBox.expandByPoint(St)):(this.boundingBox.expandByPoint(Wt.min),this.boundingBox.expandByPoint(Wt.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new $s);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error('THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere. Alternatively set "mesh.frustumCulled" to "false".',this),this.boundingSphere.set(new x,1/0);return}if(e){const n=this.boundingSphere.center;if(Wt.setFromBufferAttribute(e),t)for(let r=0,a=t.length;r<a;r++){const o=t[r];ki.setFromBufferAttribute(o),this.morphTargetsRelative?(St.addVectors(Wt.min,ki.min),Wt.expandByPoint(St),St.addVectors(Wt.max,ki.max),Wt.expandByPoint(St)):(Wt.expandByPoint(ki.min),Wt.expandByPoint(ki.max))}Wt.getCenter(n);let i=0;for(let r=0,a=e.count;r<a;r++)St.fromBufferAttribute(e,r),i=Math.max(i,n.distanceToSquared(St));if(t)for(let r=0,a=t.length;r<a;r++){const o=t[r],c=this.morphTargetsRelative;for(let l=0,h=o.count;l<h;l++)St.fromBufferAttribute(o,l),c&&(di.fromBufferAttribute(e,l),St.add(di)),i=Math.max(i,n.distanceToSquared(St))}this.boundingSphere.radius=Math.sqrt(i),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const e=this.index,t=this.attributes;if(e===null||t.position===void 0||t.normal===void 0||t.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const n=e.array,i=t.position.array,r=t.normal.array,a=t.uv.array,o=i.length/3;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new Lt(new Float32Array(4*o),4));const c=this.getAttribute("tangent").array,l=[],h=[];for(let A=0;A<o;A++)l[A]=new x,h[A]=new x;const u=new x,f=new x,d=new x,g=new $,v=new $,m=new $,p=new x,y=new x;function _(A,U,G){u.fromArray(i,A*3),f.fromArray(i,U*3),d.fromArray(i,G*3),g.fromArray(a,A*2),v.fromArray(a,U*2),m.fromArray(a,G*2),f.sub(u),d.sub(u),v.sub(g),m.sub(g);const j=1/(v.x*m.y-m.x*v.y);isFinite(j)&&(p.copy(f).multiplyScalar(m.y).addScaledVector(d,-v.y).multiplyScalar(j),y.copy(d).multiplyScalar(v.x).addScaledVector(f,-m.x).multiplyScalar(j),l[A].add(p),l[U].add(p),l[G].add(p),h[A].add(y),h[U].add(y),h[G].add(y))}let S=this.groups;S.length===0&&(S=[{start:0,count:n.length}]);for(let A=0,U=S.length;A<U;++A){const G=S[A],j=G.start,D=G.count;for(let I=j,H=j+D;I<H;I+=3)_(n[I+0],n[I+1],n[I+2])}const R=new x,T=new x,w=new x,O=new x;function M(A){w.fromArray(r,A*3),O.copy(w);const U=l[A];R.copy(U),R.sub(w.multiplyScalar(w.dot(U))).normalize(),T.crossVectors(O,U);const j=T.dot(h[A])<0?-1:1;c[A*4]=R.x,c[A*4+1]=R.y,c[A*4+2]=R.z,c[A*4+3]=j}for(let A=0,U=S.length;A<U;++A){const G=S[A],j=G.start,D=G.count;for(let I=j,H=j+D;I<H;I+=3)M(n[I+0]),M(n[I+1]),M(n[I+2])}}computeVertexNormals(){const e=this.index,t=this.getAttribute("position");if(t!==void 0){let n=this.getAttribute("normal");if(n===void 0)n=new Lt(new Float32Array(t.count*3),3),this.setAttribute("normal",n);else for(let f=0,d=n.count;f<d;f++)n.setXYZ(f,0,0,0);const i=new x,r=new x,a=new x,o=new x,c=new x,l=new x,h=new x,u=new x;if(e)for(let f=0,d=e.count;f<d;f+=3){const g=e.getX(f+0),v=e.getX(f+1),m=e.getX(f+2);i.fromBufferAttribute(t,g),r.fromBufferAttribute(t,v),a.fromBufferAttribute(t,m),h.subVectors(a,r),u.subVectors(i,r),h.cross(u),o.fromBufferAttribute(n,g),c.fromBufferAttribute(n,v),l.fromBufferAttribute(n,m),o.add(h),c.add(h),l.add(h),n.setXYZ(g,o.x,o.y,o.z),n.setXYZ(v,c.x,c.y,c.z),n.setXYZ(m,l.x,l.y,l.z)}else for(let f=0,d=t.count;f<d;f+=3)i.fromBufferAttribute(t,f+0),r.fromBufferAttribute(t,f+1),a.fromBufferAttribute(t,f+2),h.subVectors(a,r),u.subVectors(i,r),h.cross(u),n.setXYZ(f+0,h.x,h.y,h.z),n.setXYZ(f+1,h.x,h.y,h.z),n.setXYZ(f+2,h.x,h.y,h.z);this.normalizeNormals(),n.needsUpdate=!0}}normalizeNormals(){const e=this.attributes.normal;for(let t=0,n=e.count;t<n;t++)St.fromBufferAttribute(e,t),St.normalize(),e.setXYZ(t,St.x,St.y,St.z)}toNonIndexed(){function e(o,c){const l=o.array,h=o.itemSize,u=o.normalized,f=new l.constructor(c.length*h);let d=0,g=0;for(let v=0,m=c.length;v<m;v++){o.isInterleavedBufferAttribute?d=c[v]*o.data.stride+o.offset:d=c[v]*h;for(let p=0;p<h;p++)f[g++]=l[d++]}return new Lt(f,h,u)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const t=new lt,n=this.index.array,i=this.attributes;for(const o in i){const c=i[o],l=e(c,n);t.setAttribute(o,l)}const r=this.morphAttributes;for(const o in r){const c=[],l=r[o];for(let h=0,u=l.length;h<u;h++){const f=l[h],d=e(f,n);c.push(d)}t.morphAttributes[o]=c}t.morphTargetsRelative=this.morphTargetsRelative;const a=this.groups;for(let o=0,c=a.length;o<c;o++){const l=a[o];t.addGroup(l.start,l.count,l.materialIndex)}return t}toJSON(){const e={metadata:{version:4.6,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.type,this.name!==""&&(e.name=this.name),Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0){const c=this.parameters;for(const l in c)c[l]!==void 0&&(e[l]=c[l]);return e}e.data={attributes:{}};const t=this.index;t!==null&&(e.data.index={type:t.array.constructor.name,array:Array.prototype.slice.call(t.array)});const n=this.attributes;for(const c in n){const l=n[c];e.data.attributes[c]=l.toJSON(e.data)}const i={};let r=!1;for(const c in this.morphAttributes){const l=this.morphAttributes[c],h=[];for(let u=0,f=l.length;u<f;u++){const d=l[u];h.push(d.toJSON(e.data))}h.length>0&&(i[c]=h,r=!0)}r&&(e.data.morphAttributes=i,e.data.morphTargetsRelative=this.morphTargetsRelative);const a=this.groups;a.length>0&&(e.data.groups=JSON.parse(JSON.stringify(a)));const o=this.boundingSphere;return o!==null&&(e.data.boundingSphere={center:o.center.toArray(),radius:o.radius}),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const t={};this.name=e.name;const n=e.index;n!==null&&this.setIndex(n.clone(t));const i=e.attributes;for(const l in i){const h=i[l];this.setAttribute(l,h.clone(t))}const r=e.morphAttributes;for(const l in r){const h=[],u=r[l];for(let f=0,d=u.length;f<d;f++)h.push(u[f].clone(t));this.morphAttributes[l]=h}this.morphTargetsRelative=e.morphTargetsRelative;const a=e.groups;for(let l=0,h=a.length;l<h;l++){const u=a[l];this.addGroup(u.start,u.count,u.materialIndex)}const o=e.boundingBox;o!==null&&(this.boundingBox=o.clone());const c=e.boundingSphere;return c!==null&&(this.boundingSphere=c.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}const To=new ht,Hn=new Ks,ms=new $s,Ao=new x,fi=new x,pi=new x,mi=new x,Rr=new x,gs=new x,vs=new $,_s=new $,xs=new $,Co=new x,Ro=new x,Po=new x,ys=new x,Ss=new x;class Xe extends gt{constructor(e=new lt,t=new zt){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=t,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){const t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){const i=t[n[0]];if(i!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,a=i.length;r<a;r++){const o=i[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=r}}}}getVertexPosition(e,t){const n=this.geometry,i=n.attributes.position,r=n.morphAttributes.position,a=n.morphTargetsRelative;t.fromBufferAttribute(i,e);const o=this.morphTargetInfluences;if(r&&o){gs.set(0,0,0);for(let c=0,l=r.length;c<l;c++){const h=o[c],u=r[c];h!==0&&(Rr.fromBufferAttribute(u,e),a?gs.addScaledVector(Rr,h):gs.addScaledVector(Rr.sub(t),h))}t.add(gs)}return t}raycast(e,t){const n=this.geometry,i=this.material,r=this.matrixWorld;i!==void 0&&(n.boundingSphere===null&&n.computeBoundingSphere(),ms.copy(n.boundingSphere),ms.applyMatrix4(r),Hn.copy(e.ray).recast(e.near),!(ms.containsPoint(Hn.origin)===!1&&(Hn.intersectSphere(ms,Ao)===null||Hn.origin.distanceToSquared(Ao)>(e.far-e.near)**2))&&(To.copy(r).invert(),Hn.copy(e.ray).applyMatrix4(To),!(n.boundingBox!==null&&Hn.intersectsBox(n.boundingBox)===!1)&&this._computeIntersections(e,t,Hn)))}_computeIntersections(e,t,n){let i;const r=this.geometry,a=this.material,o=r.index,c=r.attributes.position,l=r.attributes.uv,h=r.attributes.uv1,u=r.attributes.normal,f=r.groups,d=r.drawRange;if(o!==null)if(Array.isArray(a))for(let g=0,v=f.length;g<v;g++){const m=f[g],p=a[m.materialIndex],y=Math.max(m.start,d.start),_=Math.min(o.count,Math.min(m.start+m.count,d.start+d.count));for(let S=y,R=_;S<R;S+=3){const T=o.getX(S),w=o.getX(S+1),O=o.getX(S+2);i=Ms(this,p,e,n,l,h,u,T,w,O),i&&(i.faceIndex=Math.floor(S/3),i.face.materialIndex=m.materialIndex,t.push(i))}}else{const g=Math.max(0,d.start),v=Math.min(o.count,d.start+d.count);for(let m=g,p=v;m<p;m+=3){const y=o.getX(m),_=o.getX(m+1),S=o.getX(m+2);i=Ms(this,a,e,n,l,h,u,y,_,S),i&&(i.faceIndex=Math.floor(m/3),t.push(i))}}else if(c!==void 0)if(Array.isArray(a))for(let g=0,v=f.length;g<v;g++){const m=f[g],p=a[m.materialIndex],y=Math.max(m.start,d.start),_=Math.min(c.count,Math.min(m.start+m.count,d.start+d.count));for(let S=y,R=_;S<R;S+=3){const T=S,w=S+1,O=S+2;i=Ms(this,p,e,n,l,h,u,T,w,O),i&&(i.faceIndex=Math.floor(S/3),i.face.materialIndex=m.materialIndex,t.push(i))}}else{const g=Math.max(0,d.start),v=Math.min(c.count,d.start+d.count);for(let m=g,p=v;m<p;m+=3){const y=m,_=m+1,S=m+2;i=Ms(this,a,e,n,l,h,u,y,_,S),i&&(i.faceIndex=Math.floor(m/3),t.push(i))}}}}function Bh(s,e,t,n,i,r,a,o){let c;if(e.side===kt?c=n.intersectTriangle(a,r,i,!0,o):c=n.intersectTriangle(i,r,a,e.side===In,o),c===null)return null;Ss.copy(o),Ss.applyMatrix4(s.matrixWorld);const l=t.ray.origin.distanceTo(Ss);return l<t.near||l>t.far?null:{distance:l,point:Ss.clone(),object:s}}function Ms(s,e,t,n,i,r,a,o,c,l){s.getVertexPosition(o,fi),s.getVertexPosition(c,pi),s.getVertexPosition(l,mi);const h=Bh(s,e,t,n,fi,pi,mi,ys);if(h){i&&(vs.fromBufferAttribute(i,o),_s.fromBufferAttribute(i,c),xs.fromBufferAttribute(i,l),h.uv=Xt.getInterpolation(ys,fi,pi,mi,vs,_s,xs,new $)),r&&(vs.fromBufferAttribute(r,o),_s.fromBufferAttribute(r,c),xs.fromBufferAttribute(r,l),h.uv1=Xt.getInterpolation(ys,fi,pi,mi,vs,_s,xs,new $),h.uv2=h.uv1),a&&(Co.fromBufferAttribute(a,o),Ro.fromBufferAttribute(a,c),Po.fromBufferAttribute(a,l),h.normal=Xt.getInterpolation(ys,fi,pi,mi,Co,Ro,Po,new x),h.normal.dot(n.direction)>0&&h.normal.multiplyScalar(-1));const u={a:o,b:c,c:l,normal:new x,materialIndex:0};Xt.getNormal(fi,pi,mi,u.normal),h.face=u}return h}class ts extends lt{constructor(e=1,t=1,n=1,i=1,r=1,a=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:t,depth:n,widthSegments:i,heightSegments:r,depthSegments:a};const o=this;i=Math.floor(i),r=Math.floor(r),a=Math.floor(a);const c=[],l=[],h=[],u=[];let f=0,d=0;g("z","y","x",-1,-1,n,t,e,a,r,0),g("z","y","x",1,-1,n,t,-e,a,r,1),g("x","z","y",1,1,e,n,t,i,a,2),g("x","z","y",1,-1,e,n,-t,i,a,3),g("x","y","z",1,-1,e,t,n,i,r,4),g("x","y","z",-1,-1,e,t,-n,i,r,5),this.setIndex(c),this.setAttribute("position",new ft(l,3)),this.setAttribute("normal",new ft(h,3)),this.setAttribute("uv",new ft(u,2));function g(v,m,p,y,_,S,R,T,w,O,M){const A=S/w,U=R/O,G=S/2,j=R/2,D=T/2,I=w+1,H=O+1;let q=0,Y=0;const Z=new x;for(let K=0;K<H;K++){const se=K*U-j;for(let oe=0;oe<I;oe++){const X=oe*A-G;Z[v]=X*y,Z[m]=se*_,Z[p]=D,l.push(Z.x,Z.y,Z.z),Z[v]=0,Z[m]=0,Z[p]=T>0?1:-1,h.push(Z.x,Z.y,Z.z),u.push(oe/w),u.push(1-K/O),q+=1}}for(let K=0;K<O;K++)for(let se=0;se<w;se++){const oe=f+se+I*K,X=f+se+I*(K+1),J=f+(se+1)+I*(K+1),he=f+(se+1)+I*K;c.push(oe,X,he),c.push(X,J,he),Y+=6}o.addGroup(d,Y,M),d+=Y,f+=q}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new ts(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}}function Ni(s){const e={};for(const t in s){e[t]={};for(const n in s[t]){const i=s[t][n];i&&(i.isColor||i.isMatrix3||i.isMatrix4||i.isVector2||i.isVector3||i.isVector4||i.isTexture||i.isQuaternion)?i.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[t][n]=null):e[t][n]=i.clone():Array.isArray(i)?e[t][n]=i.slice():e[t][n]=i}}return e}function It(s){const e={};for(let t=0;t<s.length;t++){const n=Ni(s[t]);for(const i in n)e[i]=n[i]}return e}function Gh(s){const e=[];for(let t=0;t<s.length;t++)e.push(s[t].clone());return e}function Xc(s){return s.getRenderTarget()===null?s.outputColorSpace:Je.workingColorSpace}const kh={clone:Ni,merge:It};var Hh=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,Vh=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class Fn extends ti{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=Hh,this.fragmentShader=Vh,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={derivatives:!1,fragDepth:!1,drawBuffers:!1,shaderTextureLOD:!1,clipCullDistance:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=Ni(e.uniforms),this.uniformsGroups=Gh(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this}toJSON(e){const t=super.toJSON(e);t.glslVersion=this.glslVersion,t.uniforms={};for(const i in this.uniforms){const a=this.uniforms[i].value;a&&a.isTexture?t.uniforms[i]={type:"t",value:a.toJSON(e).uuid}:a&&a.isColor?t.uniforms[i]={type:"c",value:a.getHex()}:a&&a.isVector2?t.uniforms[i]={type:"v2",value:a.toArray()}:a&&a.isVector3?t.uniforms[i]={type:"v3",value:a.toArray()}:a&&a.isVector4?t.uniforms[i]={type:"v4",value:a.toArray()}:a&&a.isMatrix3?t.uniforms[i]={type:"m3",value:a.toArray()}:a&&a.isMatrix4?t.uniforms[i]={type:"m4",value:a.toArray()}:t.uniforms[i]={value:a}}Object.keys(this.defines).length>0&&(t.defines=this.defines),t.vertexShader=this.vertexShader,t.fragmentShader=this.fragmentShader,t.lights=this.lights,t.clipping=this.clipping;const n={};for(const i in this.extensions)this.extensions[i]===!0&&(n[i]=!0);return Object.keys(n).length>0&&(t.extensions=n),t}}class jc extends gt{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new ht,this.projectionMatrix=new ht,this.projectionMatrixInverse=new ht,this.coordinateSystem=Sn}copy(e,t){return super.copy(e,t),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(e,t){super.updateWorldMatrix(e,t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}}class Tt extends jc{constructor(e=50,t=1,n=.1,i=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=n,this.far=i,this.focus=10,this.aspect=t,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){const t=.5*this.getFilmHeight()/e;this.fov=aa*2*Math.atan(t),this.updateProjectionMatrix()}getFocalLength(){const e=Math.tan(Xi*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return aa*2*Math.atan(Math.tan(Xi*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}setViewOffset(e,t,n,i,r,a){this.aspect=e/t,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=i,this.view.width=r,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=this.near;let t=e*Math.tan(Xi*.5*this.fov)/this.zoom,n=2*t,i=this.aspect*n,r=-.5*i;const a=this.view;if(this.view!==null&&this.view.enabled){const c=a.fullWidth,l=a.fullHeight;r+=a.offsetX*i/c,t-=a.offsetY*n/l,i*=a.width/c,n*=a.height/l}const o=this.filmOffset;o!==0&&(r+=e*o/this.getFilmWidth()),this.projectionMatrix.makePerspective(r,r+i,t,t-n,e,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.fov=this.fov,t.object.zoom=this.zoom,t.object.near=this.near,t.object.far=this.far,t.object.focus=this.focus,t.object.aspect=this.aspect,this.view!==null&&(t.object.view=Object.assign({},this.view)),t.object.filmGauge=this.filmGauge,t.object.filmOffset=this.filmOffset,t}}const gi=-90,vi=1;class Wh extends gt{constructor(e,t,n){super(),this.type="CubeCamera",this.renderTarget=n,this.coordinateSystem=null,this.activeMipmapLevel=0;const i=new Tt(gi,vi,e,t);i.layers=this.layers,this.add(i);const r=new Tt(gi,vi,e,t);r.layers=this.layers,this.add(r);const a=new Tt(gi,vi,e,t);a.layers=this.layers,this.add(a);const o=new Tt(gi,vi,e,t);o.layers=this.layers,this.add(o);const c=new Tt(gi,vi,e,t);c.layers=this.layers,this.add(c);const l=new Tt(gi,vi,e,t);l.layers=this.layers,this.add(l)}updateCoordinateSystem(){const e=this.coordinateSystem,t=this.children.concat(),[n,i,r,a,o,c]=t;for(const l of t)this.remove(l);if(e===Sn)n.up.set(0,1,0),n.lookAt(1,0,0),i.up.set(0,1,0),i.lookAt(-1,0,0),r.up.set(0,0,-1),r.lookAt(0,1,0),a.up.set(0,0,1),a.lookAt(0,-1,0),o.up.set(0,1,0),o.lookAt(0,0,1),c.up.set(0,1,0),c.lookAt(0,0,-1);else if(e===Vs)n.up.set(0,-1,0),n.lookAt(-1,0,0),i.up.set(0,-1,0),i.lookAt(1,0,0),r.up.set(0,0,1),r.lookAt(0,1,0),a.up.set(0,0,-1),a.lookAt(0,-1,0),o.up.set(0,-1,0),o.lookAt(0,0,1),c.up.set(0,-1,0),c.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(const l of t)this.add(l),l.updateMatrixWorld()}update(e,t){this.parent===null&&this.updateMatrixWorld();const{renderTarget:n,activeMipmapLevel:i}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());const[r,a,o,c,l,h]=this.children,u=e.getRenderTarget(),f=e.getActiveCubeFace(),d=e.getActiveMipmapLevel(),g=e.xr.enabled;e.xr.enabled=!1;const v=n.texture.generateMipmaps;n.texture.generateMipmaps=!1,e.setRenderTarget(n,0,i),e.render(t,r),e.setRenderTarget(n,1,i),e.render(t,a),e.setRenderTarget(n,2,i),e.render(t,o),e.setRenderTarget(n,3,i),e.render(t,c),e.setRenderTarget(n,4,i),e.render(t,l),n.texture.generateMipmaps=v,e.setRenderTarget(n,5,i),e.render(t,h),e.setRenderTarget(u,f,d),e.xr.enabled=g,n.texture.needsPMREMUpdate=!0}}class qc extends Nt{constructor(e,t,n,i,r,a,o,c,l,h){e=e!==void 0?e:[],t=t!==void 0?t:Li,super(e,t,n,i,r,a,o,c,l,h),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}}class Xh extends $n{constructor(e=1,t={}){super(e,e,t),this.isWebGLCubeRenderTarget=!0;const n={width:e,height:e,depth:1},i=[n,n,n,n,n,n];t.encoding!==void 0&&(ji("THREE.WebGLCubeRenderTarget: option.encoding has been replaced by option.colorSpace."),t.colorSpace=t.encoding===Zn?Et:Kt),this.texture=new qc(i,t.mapping,t.wrapS,t.wrapT,t.magFilter,t.minFilter,t.format,t.type,t.anisotropy,t.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.generateMipmaps=t.generateMipmaps!==void 0?t.generateMipmaps:!1,this.texture.minFilter=t.minFilter!==void 0?t.minFilter:Gt}fromEquirectangularTexture(e,t){this.texture.type=t.type,this.texture.colorSpace=t.colorSpace,this.texture.generateMipmaps=t.generateMipmaps,this.texture.minFilter=t.minFilter,this.texture.magFilter=t.magFilter;const n={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},i=new ts(5,5,5),r=new Fn({name:"CubemapFromEquirect",uniforms:Ni(n.uniforms),vertexShader:n.vertexShader,fragmentShader:n.fragmentShader,side:kt,blending:Dn});r.uniforms.tEquirect.value=t;const a=new Xe(i,r),o=t.minFilter;return t.minFilter===Zi&&(t.minFilter=Gt),new Wh(1,10,this).update(e,a),t.minFilter=o,a.geometry.dispose(),a.material.dispose(),this}clear(e,t,n,i){const r=e.getRenderTarget();for(let a=0;a<6;a++)e.setRenderTarget(this,a),e.clear(t,n,i);e.setRenderTarget(r)}}const Pr=new x,jh=new x,qh=new We;class sn{constructor(e=new x(1,0,0),t=0){this.isPlane=!0,this.normal=e,this.constant=t}set(e,t){return this.normal.copy(e),this.constant=t,this}setComponents(e,t,n,i){return this.normal.set(e,t,n),this.constant=i,this}setFromNormalAndCoplanarPoint(e,t){return this.normal.copy(e),this.constant=-t.dot(this.normal),this}setFromCoplanarPoints(e,t,n){const i=Pr.subVectors(n,t).cross(jh.subVectors(e,t)).normalize();return this.setFromNormalAndCoplanarPoint(i,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){const e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,t){return t.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,t){const n=e.delta(Pr),i=this.normal.dot(n);if(i===0)return this.distanceToPoint(e.start)===0?t.copy(e.start):null;const r=-(e.start.dot(this.normal)+this.constant)/i;return r<0||r>1?null:t.copy(e.start).addScaledVector(n,r)}intersectsLine(e){const t=this.distanceToPoint(e.start),n=this.distanceToPoint(e.end);return t<0&&n>0||n<0&&t>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,t){const n=t||qh.getNormalMatrix(e),i=this.coplanarPoint(Pr).applyMatrix4(e),r=this.normal.applyMatrix3(n).normalize();return this.constant=-i.dot(r),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}}const Vn=new $s,bs=new x;class ga{constructor(e=new sn,t=new sn,n=new sn,i=new sn,r=new sn,a=new sn){this.planes=[e,t,n,i,r,a]}set(e,t,n,i,r,a){const o=this.planes;return o[0].copy(e),o[1].copy(t),o[2].copy(n),o[3].copy(i),o[4].copy(r),o[5].copy(a),this}copy(e){const t=this.planes;for(let n=0;n<6;n++)t[n].copy(e.planes[n]);return this}setFromProjectionMatrix(e,t=Sn){const n=this.planes,i=e.elements,r=i[0],a=i[1],o=i[2],c=i[3],l=i[4],h=i[5],u=i[6],f=i[7],d=i[8],g=i[9],v=i[10],m=i[11],p=i[12],y=i[13],_=i[14],S=i[15];if(n[0].setComponents(c-r,f-l,m-d,S-p).normalize(),n[1].setComponents(c+r,f+l,m+d,S+p).normalize(),n[2].setComponents(c+a,f+h,m+g,S+y).normalize(),n[3].setComponents(c-a,f-h,m-g,S-y).normalize(),n[4].setComponents(c-o,f-u,m-v,S-_).normalize(),t===Sn)n[5].setComponents(c+o,f+u,m+v,S+_).normalize();else if(t===Vs)n[5].setComponents(o,u,v,_).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+t);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),Vn.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{const t=e.geometry;t.boundingSphere===null&&t.computeBoundingSphere(),Vn.copy(t.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(Vn)}intersectsSprite(e){return Vn.center.set(0,0,0),Vn.radius=.7071067811865476,Vn.applyMatrix4(e.matrixWorld),this.intersectsSphere(Vn)}intersectsSphere(e){const t=this.planes,n=e.center,i=-e.radius;for(let r=0;r<6;r++)if(t[r].distanceToPoint(n)<i)return!1;return!0}intersectsBox(e){const t=this.planes;for(let n=0;n<6;n++){const i=t[n];if(bs.x=i.normal.x>0?e.max.x:e.min.x,bs.y=i.normal.y>0?e.max.y:e.min.y,bs.z=i.normal.z>0?e.max.z:e.min.z,i.distanceToPoint(bs)<0)return!1}return!0}containsPoint(e){const t=this.planes;for(let n=0;n<6;n++)if(t[n].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}function Yc(){let s=null,e=!1,t=null,n=null;function i(r,a){t(r,a),n=s.requestAnimationFrame(i)}return{start:function(){e!==!0&&t!==null&&(n=s.requestAnimationFrame(i),e=!0)},stop:function(){s.cancelAnimationFrame(n),e=!1},setAnimationLoop:function(r){t=r},setContext:function(r){s=r}}}function Yh(s,e){const t=e.isWebGL2,n=new WeakMap;function i(l,h){const u=l.array,f=l.usage,d=u.byteLength,g=s.createBuffer();s.bindBuffer(h,g),s.bufferData(h,u,f),l.onUploadCallback();let v;if(u instanceof Float32Array)v=s.FLOAT;else if(u instanceof Uint16Array)if(l.isFloat16BufferAttribute)if(t)v=s.HALF_FLOAT;else throw new Error("THREE.WebGLAttributes: Usage of Float16BufferAttribute requires WebGL2.");else v=s.UNSIGNED_SHORT;else if(u instanceof Int16Array)v=s.SHORT;else if(u instanceof Uint32Array)v=s.UNSIGNED_INT;else if(u instanceof Int32Array)v=s.INT;else if(u instanceof Int8Array)v=s.BYTE;else if(u instanceof Uint8Array)v=s.UNSIGNED_BYTE;else if(u instanceof Uint8ClampedArray)v=s.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+u);return{buffer:g,type:v,bytesPerElement:u.BYTES_PER_ELEMENT,version:l.version,size:d}}function r(l,h,u){const f=h.array,d=h._updateRange,g=h.updateRanges;if(s.bindBuffer(u,l),d.count===-1&&g.length===0&&s.bufferSubData(u,0,f),g.length!==0){for(let v=0,m=g.length;v<m;v++){const p=g[v];t?s.bufferSubData(u,p.start*f.BYTES_PER_ELEMENT,f,p.start,p.count):s.bufferSubData(u,p.start*f.BYTES_PER_ELEMENT,f.subarray(p.start,p.start+p.count))}h.clearUpdateRanges()}d.count!==-1&&(t?s.bufferSubData(u,d.offset*f.BYTES_PER_ELEMENT,f,d.offset,d.count):s.bufferSubData(u,d.offset*f.BYTES_PER_ELEMENT,f.subarray(d.offset,d.offset+d.count)),d.count=-1),h.onUploadCallback()}function a(l){return l.isInterleavedBufferAttribute&&(l=l.data),n.get(l)}function o(l){l.isInterleavedBufferAttribute&&(l=l.data);const h=n.get(l);h&&(s.deleteBuffer(h.buffer),n.delete(l))}function c(l,h){if(l.isGLBufferAttribute){const f=n.get(l);(!f||f.version<l.version)&&n.set(l,{buffer:l.buffer,type:l.type,bytesPerElement:l.elementSize,version:l.version});return}l.isInterleavedBufferAttribute&&(l=l.data);const u=n.get(l);if(u===void 0)n.set(l,i(l,h));else if(u.version<l.version){if(u.size!==l.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");r(u.buffer,l,h),u.version=l.version}}return{get:a,remove:o,update:c}}class Un extends lt{constructor(e=1,t=1,n=1,i=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:t,widthSegments:n,heightSegments:i};const r=e/2,a=t/2,o=Math.floor(n),c=Math.floor(i),l=o+1,h=c+1,u=e/o,f=t/c,d=[],g=[],v=[],m=[];for(let p=0;p<h;p++){const y=p*f-a;for(let _=0;_<l;_++){const S=_*u-r;g.push(S,-y,0),v.push(0,0,1),m.push(_/o),m.push(1-p/c)}}for(let p=0;p<c;p++)for(let y=0;y<o;y++){const _=y+l*p,S=y+l*(p+1),R=y+1+l*(p+1),T=y+1+l*p;d.push(_,S,T),d.push(S,R,T)}this.setIndex(d),this.setAttribute("position",new ft(g,3)),this.setAttribute("normal",new ft(v,3)),this.setAttribute("uv",new ft(m,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Un(e.width,e.height,e.widthSegments,e.heightSegments)}}var Zh=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,$h=`#ifdef USE_ALPHAHASH
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
#endif`,Kh=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,Jh=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,Qh=`#ifdef USE_ALPHATEST
	if ( diffuseColor.a < alphaTest ) discard;
#endif`,eu=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,tu=`#ifdef USE_AOMAP
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
#endif`,nu=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,iu=`#ifdef USE_BATCHING
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
#endif`,su=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( batchId );
#endif`,ru=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,au=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,ou=`float G_BlinnPhong_Implicit( ) {
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
} // validated`,cu=`#ifdef USE_IRIDESCENCE
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
#endif`,lu=`#ifdef USE_BUMPMAP
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
#endif`,hu=`#if NUM_CLIPPING_PLANES > 0
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
#endif`,uu=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,du=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,fu=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,pu=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,mu=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,gu=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR )
	varying vec3 vColor;
#endif`,vu=`#if defined( USE_COLOR_ALPHA )
	vColor = vec4( 1.0 );
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR )
	vColor = vec3( 1.0 );
#endif
#ifdef USE_COLOR
	vColor *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.xyz *= instanceColor.xyz;
#endif`,_u=`#define PI 3.141592653589793
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
} // validated`,xu=`#ifdef ENVMAP_TYPE_CUBE_UV
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
#endif`,yu=`vec3 transformedNormal = objectNormal;
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
#endif`,Su=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,Mu=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,bu=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,Eu=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,wu="gl_FragColor = linearToOutputTexel( gl_FragColor );",Tu=`
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
}`,Au=`#ifdef USE_ENVMAP
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
#endif`,Cu=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,Ru=`#ifdef USE_ENVMAP
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
#endif`,Pu=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,Lu=`#ifdef USE_ENVMAP
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
#endif`,Du=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,Ou=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,Nu=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,Uu=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,Iu=`#ifdef USE_GRADIENTMAP
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
}`,Fu=`#ifdef USE_LIGHTMAP
	vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
	vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
	reflectedLight.indirectDiffuse += lightMapIrradiance;
#endif`,zu=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,Bu=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,Gu=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,ku=`uniform bool receiveShadow;
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
#endif`,Hu=`#ifdef USE_ENVMAP
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
#endif`,Vu=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,Wu=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,Xu=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,ju=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,qu=`PhysicalMaterial material;
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
#endif`,Yu=`struct PhysicalMaterial {
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
}`,Zu=`
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
#endif`,$u=`#if defined( RE_IndirectDiffuse )
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
#endif`,Ku=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,Ju=`#if defined( USE_LOGDEPTHBUF ) && defined( USE_LOGDEPTHBUF_EXT )
	gl_FragDepthEXT = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,Qu=`#if defined( USE_LOGDEPTHBUF ) && defined( USE_LOGDEPTHBUF_EXT )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,ed=`#ifdef USE_LOGDEPTHBUF
	#ifdef USE_LOGDEPTHBUF_EXT
		varying float vFragDepth;
		varying float vIsPerspective;
	#else
		uniform float logDepthBufFC;
	#endif
#endif`,td=`#ifdef USE_LOGDEPTHBUF
	#ifdef USE_LOGDEPTHBUF_EXT
		vFragDepth = 1.0 + gl_Position.w;
		vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
	#else
		if ( isPerspectiveMatrix( projectionMatrix ) ) {
			gl_Position.z = log2( max( EPSILON, gl_Position.w + 1.0 ) ) * logDepthBufFC - 1.0;
			gl_Position.z *= gl_Position.w;
		}
	#endif
#endif`,nd=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = vec4( mix( pow( sampledDiffuseColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), sampledDiffuseColor.rgb * 0.0773993808, vec3( lessThanEqual( sampledDiffuseColor.rgb, vec3( 0.04045 ) ) ) ), sampledDiffuseColor.w );
	
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,id=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,sd=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`,rd=`#if defined( USE_POINTS_UV )
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
#endif`,ad=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,od=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,cd=`#if defined( USE_MORPHCOLORS ) && defined( MORPHTARGETS_TEXTURE )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,ld=`#ifdef USE_MORPHNORMALS
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
#endif`,hd=`#ifdef USE_MORPHTARGETS
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
#endif`,ud=`#ifdef USE_MORPHTARGETS
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
#endif`,dd=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
vec3 nonPerturbedNormal = normal;`,fd=`#ifdef USE_NORMALMAP_OBJECTSPACE
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
#endif`,pd=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,md=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,gd=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,vd=`#ifdef USE_NORMALMAP
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
#endif`,_d=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,xd=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,yd=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,Sd=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,Md=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,bd=`vec3 packNormalToRGB( const in vec3 normal ) {
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
}`,Ed=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,wd=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,Td=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,Ad=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,Cd=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,Rd=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,Pd=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,Ld=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,Dd=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
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
#endif`,Od=`float getShadowMask() {
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
}`,Nd=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,Ud=`#ifdef USE_SKINNING
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
#endif`,Id=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,Fd=`#ifdef USE_SKINNING
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
#endif`,zd=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,Bd=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,Gd=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,kd=`#ifndef saturate
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
vec3 CustomToneMapping( vec3 color ) { return color; }`,Hd=`#ifdef USE_TRANSMISSION
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
#endif`,Vd=`#ifdef USE_TRANSMISSION
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
#endif`,Wd=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,Xd=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,jd=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,qd=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const Yd=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,Zd=`uniform sampler2D t2D;
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
}`,$d=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,Kd=`#ifdef ENVMAP_TYPE_CUBE
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
}`,Jd=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,Qd=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,ef=`#include <common>
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
}`,tf=`#if DEPTH_PACKING == 3200
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
}`,nf=`#define DISTANCE
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
}`,sf=`#define DISTANCE
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
}`,rf=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,af=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,of=`uniform float scale;
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
}`,cf=`uniform vec3 diffuse;
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
}`,lf=`#include <common>
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
}`,hf=`uniform vec3 diffuse;
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
}`,uf=`#define LAMBERT
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
}`,df=`#define LAMBERT
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
}`,ff=`#define MATCAP
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
}`,pf=`#define MATCAP
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
}`,mf=`#define NORMAL
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
}`,gf=`#define NORMAL
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
}`,vf=`#define PHONG
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
}`,_f=`#define PHONG
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
}`,xf=`#define STANDARD
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
}`,yf=`#define STANDARD
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
}`,Sf=`#define TOON
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
}`,Mf=`#define TOON
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
}`,bf=`uniform float size;
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
}`,Ef=`uniform vec3 diffuse;
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
}`,wf=`#include <common>
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
}`,Tf=`uniform vec3 color;
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
}`,Af=`uniform float rotation;
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
}`,Cf=`uniform vec3 diffuse;
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
}`,Ge={alphahash_fragment:Zh,alphahash_pars_fragment:$h,alphamap_fragment:Kh,alphamap_pars_fragment:Jh,alphatest_fragment:Qh,alphatest_pars_fragment:eu,aomap_fragment:tu,aomap_pars_fragment:nu,batching_pars_vertex:iu,batching_vertex:su,begin_vertex:ru,beginnormal_vertex:au,bsdfs:ou,iridescence_fragment:cu,bumpmap_pars_fragment:lu,clipping_planes_fragment:hu,clipping_planes_pars_fragment:uu,clipping_planes_pars_vertex:du,clipping_planes_vertex:fu,color_fragment:pu,color_pars_fragment:mu,color_pars_vertex:gu,color_vertex:vu,common:_u,cube_uv_reflection_fragment:xu,defaultnormal_vertex:yu,displacementmap_pars_vertex:Su,displacementmap_vertex:Mu,emissivemap_fragment:bu,emissivemap_pars_fragment:Eu,colorspace_fragment:wu,colorspace_pars_fragment:Tu,envmap_fragment:Au,envmap_common_pars_fragment:Cu,envmap_pars_fragment:Ru,envmap_pars_vertex:Pu,envmap_physical_pars_fragment:Hu,envmap_vertex:Lu,fog_vertex:Du,fog_pars_vertex:Ou,fog_fragment:Nu,fog_pars_fragment:Uu,gradientmap_pars_fragment:Iu,lightmap_fragment:Fu,lightmap_pars_fragment:zu,lights_lambert_fragment:Bu,lights_lambert_pars_fragment:Gu,lights_pars_begin:ku,lights_toon_fragment:Vu,lights_toon_pars_fragment:Wu,lights_phong_fragment:Xu,lights_phong_pars_fragment:ju,lights_physical_fragment:qu,lights_physical_pars_fragment:Yu,lights_fragment_begin:Zu,lights_fragment_maps:$u,lights_fragment_end:Ku,logdepthbuf_fragment:Ju,logdepthbuf_pars_fragment:Qu,logdepthbuf_pars_vertex:ed,logdepthbuf_vertex:td,map_fragment:nd,map_pars_fragment:id,map_particle_fragment:sd,map_particle_pars_fragment:rd,metalnessmap_fragment:ad,metalnessmap_pars_fragment:od,morphcolor_vertex:cd,morphnormal_vertex:ld,morphtarget_pars_vertex:hd,morphtarget_vertex:ud,normal_fragment_begin:dd,normal_fragment_maps:fd,normal_pars_fragment:pd,normal_pars_vertex:md,normal_vertex:gd,normalmap_pars_fragment:vd,clearcoat_normal_fragment_begin:_d,clearcoat_normal_fragment_maps:xd,clearcoat_pars_fragment:yd,iridescence_pars_fragment:Sd,opaque_fragment:Md,packing:bd,premultiplied_alpha_fragment:Ed,project_vertex:wd,dithering_fragment:Td,dithering_pars_fragment:Ad,roughnessmap_fragment:Cd,roughnessmap_pars_fragment:Rd,shadowmap_pars_fragment:Pd,shadowmap_pars_vertex:Ld,shadowmap_vertex:Dd,shadowmask_pars_fragment:Od,skinbase_vertex:Nd,skinning_pars_vertex:Ud,skinning_vertex:Id,skinnormal_vertex:Fd,specularmap_fragment:zd,specularmap_pars_fragment:Bd,tonemapping_fragment:Gd,tonemapping_pars_fragment:kd,transmission_fragment:Hd,transmission_pars_fragment:Vd,uv_pars_fragment:Wd,uv_pars_vertex:Xd,uv_vertex:jd,worldpos_vertex:qd,background_vert:Yd,background_frag:Zd,backgroundCube_vert:$d,backgroundCube_frag:Kd,cube_vert:Jd,cube_frag:Qd,depth_vert:ef,depth_frag:tf,distanceRGBA_vert:nf,distanceRGBA_frag:sf,equirect_vert:rf,equirect_frag:af,linedashed_vert:of,linedashed_frag:cf,meshbasic_vert:lf,meshbasic_frag:hf,meshlambert_vert:uf,meshlambert_frag:df,meshmatcap_vert:ff,meshmatcap_frag:pf,meshnormal_vert:mf,meshnormal_frag:gf,meshphong_vert:vf,meshphong_frag:_f,meshphysical_vert:xf,meshphysical_frag:yf,meshtoon_vert:Sf,meshtoon_frag:Mf,points_vert:bf,points_frag:Ef,shadow_vert:wf,shadow_frag:Tf,sprite_vert:Af,sprite_frag:Cf},ce={common:{diffuse:{value:new Ue(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new We},alphaMap:{value:null},alphaMapTransform:{value:new We},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new We}},envmap:{envMap:{value:null},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new We}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new We}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new We},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new We},normalScale:{value:new $(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new We},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new We}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new We}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new We}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new Ue(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new Ue(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new We},alphaTest:{value:0},uvTransform:{value:new We}},sprite:{diffuse:{value:new Ue(16777215)},opacity:{value:1},center:{value:new $(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new We},alphaMap:{value:null},alphaMapTransform:{value:new We},alphaTest:{value:0}}},cn={basic:{uniforms:It([ce.common,ce.specularmap,ce.envmap,ce.aomap,ce.lightmap,ce.fog]),vertexShader:Ge.meshbasic_vert,fragmentShader:Ge.meshbasic_frag},lambert:{uniforms:It([ce.common,ce.specularmap,ce.envmap,ce.aomap,ce.lightmap,ce.emissivemap,ce.bumpmap,ce.normalmap,ce.displacementmap,ce.fog,ce.lights,{emissive:{value:new Ue(0)}}]),vertexShader:Ge.meshlambert_vert,fragmentShader:Ge.meshlambert_frag},phong:{uniforms:It([ce.common,ce.specularmap,ce.envmap,ce.aomap,ce.lightmap,ce.emissivemap,ce.bumpmap,ce.normalmap,ce.displacementmap,ce.fog,ce.lights,{emissive:{value:new Ue(0)},specular:{value:new Ue(1118481)},shininess:{value:30}}]),vertexShader:Ge.meshphong_vert,fragmentShader:Ge.meshphong_frag},standard:{uniforms:It([ce.common,ce.envmap,ce.aomap,ce.lightmap,ce.emissivemap,ce.bumpmap,ce.normalmap,ce.displacementmap,ce.roughnessmap,ce.metalnessmap,ce.fog,ce.lights,{emissive:{value:new Ue(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:Ge.meshphysical_vert,fragmentShader:Ge.meshphysical_frag},toon:{uniforms:It([ce.common,ce.aomap,ce.lightmap,ce.emissivemap,ce.bumpmap,ce.normalmap,ce.displacementmap,ce.gradientmap,ce.fog,ce.lights,{emissive:{value:new Ue(0)}}]),vertexShader:Ge.meshtoon_vert,fragmentShader:Ge.meshtoon_frag},matcap:{uniforms:It([ce.common,ce.bumpmap,ce.normalmap,ce.displacementmap,ce.fog,{matcap:{value:null}}]),vertexShader:Ge.meshmatcap_vert,fragmentShader:Ge.meshmatcap_frag},points:{uniforms:It([ce.points,ce.fog]),vertexShader:Ge.points_vert,fragmentShader:Ge.points_frag},dashed:{uniforms:It([ce.common,ce.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:Ge.linedashed_vert,fragmentShader:Ge.linedashed_frag},depth:{uniforms:It([ce.common,ce.displacementmap]),vertexShader:Ge.depth_vert,fragmentShader:Ge.depth_frag},normal:{uniforms:It([ce.common,ce.bumpmap,ce.normalmap,ce.displacementmap,{opacity:{value:1}}]),vertexShader:Ge.meshnormal_vert,fragmentShader:Ge.meshnormal_frag},sprite:{uniforms:It([ce.sprite,ce.fog]),vertexShader:Ge.sprite_vert,fragmentShader:Ge.sprite_frag},background:{uniforms:{uvTransform:{value:new We},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:Ge.background_vert,fragmentShader:Ge.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1}},vertexShader:Ge.backgroundCube_vert,fragmentShader:Ge.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:Ge.cube_vert,fragmentShader:Ge.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:Ge.equirect_vert,fragmentShader:Ge.equirect_frag},distanceRGBA:{uniforms:It([ce.common,ce.displacementmap,{referencePosition:{value:new x},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:Ge.distanceRGBA_vert,fragmentShader:Ge.distanceRGBA_frag},shadow:{uniforms:It([ce.lights,ce.fog,{color:{value:new Ue(0)},opacity:{value:1}}]),vertexShader:Ge.shadow_vert,fragmentShader:Ge.shadow_frag}};cn.physical={uniforms:It([cn.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new We},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new We},clearcoatNormalScale:{value:new $(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new We},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new We},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new We},sheen:{value:0},sheenColor:{value:new Ue(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new We},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new We},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new We},transmissionSamplerSize:{value:new $},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new We},attenuationDistance:{value:0},attenuationColor:{value:new Ue(0)},specularColor:{value:new Ue(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new We},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new We},anisotropyVector:{value:new $},anisotropyMap:{value:null},anisotropyMapTransform:{value:new We}}]),vertexShader:Ge.meshphysical_vert,fragmentShader:Ge.meshphysical_frag};const Es={r:0,b:0,g:0};function Rf(s,e,t,n,i,r,a){const o=new Ue(0);let c=r===!0?0:1,l,h,u=null,f=0,d=null;function g(m,p){let y=!1,_=p.isScene===!0?p.background:null;_&&_.isTexture&&(_=(p.backgroundBlurriness>0?t:e).get(_)),_===null?v(o,c):_&&_.isColor&&(v(_,1),y=!0);const S=s.xr.getEnvironmentBlendMode();S==="additive"?n.buffers.color.setClear(0,0,0,1,a):S==="alpha-blend"&&n.buffers.color.setClear(0,0,0,0,a),(s.autoClear||y)&&s.clear(s.autoClearColor,s.autoClearDepth,s.autoClearStencil),_&&(_.isCubeTexture||_.mapping===Ys)?(h===void 0&&(h=new Xe(new ts(1,1,1),new Fn({name:"BackgroundCubeMaterial",uniforms:Ni(cn.backgroundCube.uniforms),vertexShader:cn.backgroundCube.vertexShader,fragmentShader:cn.backgroundCube.fragmentShader,side:kt,depthTest:!1,depthWrite:!1,fog:!1})),h.geometry.deleteAttribute("normal"),h.geometry.deleteAttribute("uv"),h.onBeforeRender=function(R,T,w){this.matrixWorld.copyPosition(w.matrixWorld)},Object.defineProperty(h.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),i.update(h)),h.material.uniforms.envMap.value=_,h.material.uniforms.flipEnvMap.value=_.isCubeTexture&&_.isRenderTargetTexture===!1?-1:1,h.material.uniforms.backgroundBlurriness.value=p.backgroundBlurriness,h.material.uniforms.backgroundIntensity.value=p.backgroundIntensity,h.material.toneMapped=Je.getTransfer(_.colorSpace)!==nt,(u!==_||f!==_.version||d!==s.toneMapping)&&(h.material.needsUpdate=!0,u=_,f=_.version,d=s.toneMapping),h.layers.enableAll(),m.unshift(h,h.geometry,h.material,0,0,null)):_&&_.isTexture&&(l===void 0&&(l=new Xe(new Un(2,2),new Fn({name:"BackgroundMaterial",uniforms:Ni(cn.background.uniforms),vertexShader:cn.background.vertexShader,fragmentShader:cn.background.fragmentShader,side:In,depthTest:!1,depthWrite:!1,fog:!1})),l.geometry.deleteAttribute("normal"),Object.defineProperty(l.material,"map",{get:function(){return this.uniforms.t2D.value}}),i.update(l)),l.material.uniforms.t2D.value=_,l.material.uniforms.backgroundIntensity.value=p.backgroundIntensity,l.material.toneMapped=Je.getTransfer(_.colorSpace)!==nt,_.matrixAutoUpdate===!0&&_.updateMatrix(),l.material.uniforms.uvTransform.value.copy(_.matrix),(u!==_||f!==_.version||d!==s.toneMapping)&&(l.material.needsUpdate=!0,u=_,f=_.version,d=s.toneMapping),l.layers.enableAll(),m.unshift(l,l.geometry,l.material,0,0,null))}function v(m,p){m.getRGB(Es,Xc(s)),n.buffers.color.setClear(Es.r,Es.g,Es.b,p,a)}return{getClearColor:function(){return o},setClearColor:function(m,p=1){o.set(m),c=p,v(o,c)},getClearAlpha:function(){return c},setClearAlpha:function(m){c=m,v(o,c)},render:g}}function Pf(s,e,t,n){const i=s.getParameter(s.MAX_VERTEX_ATTRIBS),r=n.isWebGL2?null:e.get("OES_vertex_array_object"),a=n.isWebGL2||r!==null,o={},c=m(null);let l=c,h=!1;function u(D,I,H,q,Y){let Z=!1;if(a){const K=v(q,H,I);l!==K&&(l=K,d(l.object)),Z=p(D,q,H,Y),Z&&y(D,q,H,Y)}else{const K=I.wireframe===!0;(l.geometry!==q.id||l.program!==H.id||l.wireframe!==K)&&(l.geometry=q.id,l.program=H.id,l.wireframe=K,Z=!0)}Y!==null&&t.update(Y,s.ELEMENT_ARRAY_BUFFER),(Z||h)&&(h=!1,O(D,I,H,q),Y!==null&&s.bindBuffer(s.ELEMENT_ARRAY_BUFFER,t.get(Y).buffer))}function f(){return n.isWebGL2?s.createVertexArray():r.createVertexArrayOES()}function d(D){return n.isWebGL2?s.bindVertexArray(D):r.bindVertexArrayOES(D)}function g(D){return n.isWebGL2?s.deleteVertexArray(D):r.deleteVertexArrayOES(D)}function v(D,I,H){const q=H.wireframe===!0;let Y=o[D.id];Y===void 0&&(Y={},o[D.id]=Y);let Z=Y[I.id];Z===void 0&&(Z={},Y[I.id]=Z);let K=Z[q];return K===void 0&&(K=m(f()),Z[q]=K),K}function m(D){const I=[],H=[],q=[];for(let Y=0;Y<i;Y++)I[Y]=0,H[Y]=0,q[Y]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:I,enabledAttributes:H,attributeDivisors:q,object:D,attributes:{},index:null}}function p(D,I,H,q){const Y=l.attributes,Z=I.attributes;let K=0;const se=H.getAttributes();for(const oe in se)if(se[oe].location>=0){const J=Y[oe];let he=Z[oe];if(he===void 0&&(oe==="instanceMatrix"&&D.instanceMatrix&&(he=D.instanceMatrix),oe==="instanceColor"&&D.instanceColor&&(he=D.instanceColor)),J===void 0||J.attribute!==he||he&&J.data!==he.data)return!0;K++}return l.attributesNum!==K||l.index!==q}function y(D,I,H,q){const Y={},Z=I.attributes;let K=0;const se=H.getAttributes();for(const oe in se)if(se[oe].location>=0){let J=Z[oe];J===void 0&&(oe==="instanceMatrix"&&D.instanceMatrix&&(J=D.instanceMatrix),oe==="instanceColor"&&D.instanceColor&&(J=D.instanceColor));const he={};he.attribute=J,J&&J.data&&(he.data=J.data),Y[oe]=he,K++}l.attributes=Y,l.attributesNum=K,l.index=q}function _(){const D=l.newAttributes;for(let I=0,H=D.length;I<H;I++)D[I]=0}function S(D){R(D,0)}function R(D,I){const H=l.newAttributes,q=l.enabledAttributes,Y=l.attributeDivisors;H[D]=1,q[D]===0&&(s.enableVertexAttribArray(D),q[D]=1),Y[D]!==I&&((n.isWebGL2?s:e.get("ANGLE_instanced_arrays"))[n.isWebGL2?"vertexAttribDivisor":"vertexAttribDivisorANGLE"](D,I),Y[D]=I)}function T(){const D=l.newAttributes,I=l.enabledAttributes;for(let H=0,q=I.length;H<q;H++)I[H]!==D[H]&&(s.disableVertexAttribArray(H),I[H]=0)}function w(D,I,H,q,Y,Z,K){K===!0?s.vertexAttribIPointer(D,I,H,Y,Z):s.vertexAttribPointer(D,I,H,q,Y,Z)}function O(D,I,H,q){if(n.isWebGL2===!1&&(D.isInstancedMesh||q.isInstancedBufferGeometry)&&e.get("ANGLE_instanced_arrays")===null)return;_();const Y=q.attributes,Z=H.getAttributes(),K=I.defaultAttributeValues;for(const se in Z){const oe=Z[se];if(oe.location>=0){let X=Y[se];if(X===void 0&&(se==="instanceMatrix"&&D.instanceMatrix&&(X=D.instanceMatrix),se==="instanceColor"&&D.instanceColor&&(X=D.instanceColor)),X!==void 0){const J=X.normalized,he=X.itemSize,xe=t.get(X);if(xe===void 0)continue;const ve=xe.buffer,Le=xe.type,Pe=xe.bytesPerElement,Ae=n.isWebGL2===!0&&(Le===s.INT||Le===s.UNSIGNED_INT||X.gpuType===Cc);if(X.isInterleavedBufferAttribute){const je=X.data,z=je.stride,bt=X.offset;if(je.isInstancedInterleavedBuffer){for(let Ee=0;Ee<oe.locationSize;Ee++)R(oe.location+Ee,je.meshPerAttribute);D.isInstancedMesh!==!0&&q._maxInstanceCount===void 0&&(q._maxInstanceCount=je.meshPerAttribute*je.count)}else for(let Ee=0;Ee<oe.locationSize;Ee++)S(oe.location+Ee);s.bindBuffer(s.ARRAY_BUFFER,ve);for(let Ee=0;Ee<oe.locationSize;Ee++)w(oe.location+Ee,he/oe.locationSize,Le,J,z*Pe,(bt+he/oe.locationSize*Ee)*Pe,Ae)}else{if(X.isInstancedBufferAttribute){for(let je=0;je<oe.locationSize;je++)R(oe.location+je,X.meshPerAttribute);D.isInstancedMesh!==!0&&q._maxInstanceCount===void 0&&(q._maxInstanceCount=X.meshPerAttribute*X.count)}else for(let je=0;je<oe.locationSize;je++)S(oe.location+je);s.bindBuffer(s.ARRAY_BUFFER,ve);for(let je=0;je<oe.locationSize;je++)w(oe.location+je,he/oe.locationSize,Le,J,he*Pe,he/oe.locationSize*je*Pe,Ae)}}else if(K!==void 0){const J=K[se];if(J!==void 0)switch(J.length){case 2:s.vertexAttrib2fv(oe.location,J);break;case 3:s.vertexAttrib3fv(oe.location,J);break;case 4:s.vertexAttrib4fv(oe.location,J);break;default:s.vertexAttrib1fv(oe.location,J)}}}}T()}function M(){G();for(const D in o){const I=o[D];for(const H in I){const q=I[H];for(const Y in q)g(q[Y].object),delete q[Y];delete I[H]}delete o[D]}}function A(D){if(o[D.id]===void 0)return;const I=o[D.id];for(const H in I){const q=I[H];for(const Y in q)g(q[Y].object),delete q[Y];delete I[H]}delete o[D.id]}function U(D){for(const I in o){const H=o[I];if(H[D.id]===void 0)continue;const q=H[D.id];for(const Y in q)g(q[Y].object),delete q[Y];delete H[D.id]}}function G(){j(),h=!0,l!==c&&(l=c,d(l.object))}function j(){c.geometry=null,c.program=null,c.wireframe=!1}return{setup:u,reset:G,resetDefaultState:j,dispose:M,releaseStatesOfGeometry:A,releaseStatesOfProgram:U,initAttributes:_,enableAttribute:S,disableUnusedAttributes:T}}function Lf(s,e,t,n){const i=n.isWebGL2;let r;function a(h){r=h}function o(h,u){s.drawArrays(r,h,u),t.update(u,r,1)}function c(h,u,f){if(f===0)return;let d,g;if(i)d=s,g="drawArraysInstanced";else if(d=e.get("ANGLE_instanced_arrays"),g="drawArraysInstancedANGLE",d===null){console.error("THREE.WebGLBufferRenderer: using THREE.InstancedBufferGeometry but hardware does not support extension ANGLE_instanced_arrays.");return}d[g](r,h,u,f),t.update(u,r,f)}function l(h,u,f){if(f===0)return;const d=e.get("WEBGL_multi_draw");if(d===null)for(let g=0;g<f;g++)this.render(h[g],u[g]);else{d.multiDrawArraysWEBGL(r,h,0,u,0,f);let g=0;for(let v=0;v<f;v++)g+=u[v];t.update(g,r,1)}}this.setMode=a,this.render=o,this.renderInstances=c,this.renderMultiDraw=l}function Df(s,e,t){let n;function i(){if(n!==void 0)return n;if(e.has("EXT_texture_filter_anisotropic")===!0){const w=e.get("EXT_texture_filter_anisotropic");n=s.getParameter(w.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else n=0;return n}function r(w){if(w==="highp"){if(s.getShaderPrecisionFormat(s.VERTEX_SHADER,s.HIGH_FLOAT).precision>0&&s.getShaderPrecisionFormat(s.FRAGMENT_SHADER,s.HIGH_FLOAT).precision>0)return"highp";w="mediump"}return w==="mediump"&&s.getShaderPrecisionFormat(s.VERTEX_SHADER,s.MEDIUM_FLOAT).precision>0&&s.getShaderPrecisionFormat(s.FRAGMENT_SHADER,s.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}const a=typeof WebGL2RenderingContext<"u"&&s.constructor.name==="WebGL2RenderingContext";let o=t.precision!==void 0?t.precision:"highp";const c=r(o);c!==o&&(console.warn("THREE.WebGLRenderer:",o,"not supported, using",c,"instead."),o=c);const l=a||e.has("WEBGL_draw_buffers"),h=t.logarithmicDepthBuffer===!0,u=s.getParameter(s.MAX_TEXTURE_IMAGE_UNITS),f=s.getParameter(s.MAX_VERTEX_TEXTURE_IMAGE_UNITS),d=s.getParameter(s.MAX_TEXTURE_SIZE),g=s.getParameter(s.MAX_CUBE_MAP_TEXTURE_SIZE),v=s.getParameter(s.MAX_VERTEX_ATTRIBS),m=s.getParameter(s.MAX_VERTEX_UNIFORM_VECTORS),p=s.getParameter(s.MAX_VARYING_VECTORS),y=s.getParameter(s.MAX_FRAGMENT_UNIFORM_VECTORS),_=f>0,S=a||e.has("OES_texture_float"),R=_&&S,T=a?s.getParameter(s.MAX_SAMPLES):0;return{isWebGL2:a,drawBuffers:l,getMaxAnisotropy:i,getMaxPrecision:r,precision:o,logarithmicDepthBuffer:h,maxTextures:u,maxVertexTextures:f,maxTextureSize:d,maxCubemapSize:g,maxAttributes:v,maxVertexUniforms:m,maxVaryings:p,maxFragmentUniforms:y,vertexTextures:_,floatFragmentTextures:S,floatVertexTextures:R,maxSamples:T}}function Of(s){const e=this;let t=null,n=0,i=!1,r=!1;const a=new sn,o=new We,c={value:null,needsUpdate:!1};this.uniform=c,this.numPlanes=0,this.numIntersection=0,this.init=function(u,f){const d=u.length!==0||f||n!==0||i;return i=f,n=u.length,d},this.beginShadows=function(){r=!0,h(null)},this.endShadows=function(){r=!1},this.setGlobalState=function(u,f){t=h(u,f,0)},this.setState=function(u,f,d){const g=u.clippingPlanes,v=u.clipIntersection,m=u.clipShadows,p=s.get(u);if(!i||g===null||g.length===0||r&&!m)r?h(null):l();else{const y=r?0:n,_=y*4;let S=p.clippingState||null;c.value=S,S=h(g,f,_,d);for(let R=0;R!==_;++R)S[R]=t[R];p.clippingState=S,this.numIntersection=v?this.numPlanes:0,this.numPlanes+=y}};function l(){c.value!==t&&(c.value=t,c.needsUpdate=n>0),e.numPlanes=n,e.numIntersection=0}function h(u,f,d,g){const v=u!==null?u.length:0;let m=null;if(v!==0){if(m=c.value,g!==!0||m===null){const p=d+v*4,y=f.matrixWorldInverse;o.getNormalMatrix(y),(m===null||m.length<p)&&(m=new Float32Array(p));for(let _=0,S=d;_!==v;++_,S+=4)a.copy(u[_]).applyMatrix4(y,o),a.normal.toArray(m,S),m[S+3]=a.constant}c.value=m,c.needsUpdate=!0}return e.numPlanes=v,e.numIntersection=0,m}}function Nf(s){let e=new WeakMap;function t(a,o){return o===ea?a.mapping=Li:o===ta&&(a.mapping=Di),a}function n(a){if(a&&a.isTexture){const o=a.mapping;if(o===ea||o===ta)if(e.has(a)){const c=e.get(a).texture;return t(c,a.mapping)}else{const c=a.image;if(c&&c.height>0){const l=new Xh(c.height/2);return l.fromEquirectangularTexture(s,a),e.set(a,l),a.addEventListener("dispose",i),t(l.texture,a.mapping)}else return null}}return a}function i(a){const o=a.target;o.removeEventListener("dispose",i);const c=e.get(o);c!==void 0&&(e.delete(o),c.dispose())}function r(){e=new WeakMap}return{get:n,dispose:r}}class Pt extends jc{constructor(e=-1,t=1,n=1,i=-1,r=.1,a=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=t,this.top=n,this.bottom=i,this.near=r,this.far=a,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,t,n,i,r,a){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=i,this.view.width=r,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=(this.right-this.left)/(2*this.zoom),t=(this.top-this.bottom)/(2*this.zoom),n=(this.right+this.left)/2,i=(this.top+this.bottom)/2;let r=n-e,a=n+e,o=i+t,c=i-t;if(this.view!==null&&this.view.enabled){const l=(this.right-this.left)/this.view.fullWidth/this.zoom,h=(this.top-this.bottom)/this.view.fullHeight/this.zoom;r+=l*this.view.offsetX,a=r+l*this.view.width,o-=h*this.view.offsetY,c=o-h*this.view.height}this.projectionMatrix.makeOrthographic(r,a,o,c,this.near,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.zoom=this.zoom,t.object.left=this.left,t.object.right=this.right,t.object.top=this.top,t.object.bottom=this.bottom,t.object.near=this.near,t.object.far=this.far,this.view!==null&&(t.object.view=Object.assign({},this.view)),t}}const Ei=4,Lo=[.125,.215,.35,.446,.526,.582],jn=20,Lr=new Pt,Do=new Ue;let Dr=null,Or=0,Nr=0;const Wn=(1+Math.sqrt(5))/2,_i=1/Wn,Oo=[new x(1,1,1),new x(-1,1,1),new x(1,1,-1),new x(-1,1,-1),new x(0,Wn,_i),new x(0,Wn,-_i),new x(_i,0,Wn),new x(-_i,0,Wn),new x(Wn,_i,0),new x(-Wn,_i,0)];class No{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(e,t=0,n=.1,i=100){Dr=this._renderer.getRenderTarget(),Or=this._renderer.getActiveCubeFace(),Nr=this._renderer.getActiveMipmapLevel(),this._setSize(256);const r=this._allocateTargets();return r.depthBuffer=!0,this._sceneToCubeUV(e,n,i,r),t>0&&this._blur(r,0,0,t),this._applyPMREM(r),this._cleanup(r),r}fromEquirectangular(e,t=null){return this._fromTexture(e,t)}fromCubemap(e,t=null){return this._fromTexture(e,t)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=Fo(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=Io(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodPlanes.length;e++)this._lodPlanes[e].dispose()}_cleanup(e){this._renderer.setRenderTarget(Dr,Or,Nr),e.scissorTest=!1,ws(e,0,0,e.width,e.height)}_fromTexture(e,t){e.mapping===Li||e.mapping===Di?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),Dr=this._renderer.getRenderTarget(),Or=this._renderer.getActiveCubeFace(),Nr=this._renderer.getActiveMipmapLevel();const n=t||this._allocateTargets();return this._textureToCubeUV(e,n),this._applyPMREM(n),this._cleanup(n),n}_allocateTargets(){const e=3*Math.max(this._cubeSize,112),t=4*this._cubeSize,n={magFilter:Gt,minFilter:Gt,generateMipmaps:!1,type:$i,format:an,colorSpace:bn,depthBuffer:!1},i=Uo(e,t,n);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==t){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=Uo(e,t,n);const{_lodMax:r}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=Uf(r)),this._blurMaterial=If(r,e,t)}return i}_compileMaterial(e){const t=new Xe(this._lodPlanes[0],e);this._renderer.compile(t,Lr)}_sceneToCubeUV(e,t,n,i){const o=new Tt(90,1,t,n),c=[1,-1,1,1,1,1],l=[1,1,1,-1,-1,-1],h=this._renderer,u=h.autoClear,f=h.toneMapping;h.getClearColor(Do),h.toneMapping=On,h.autoClear=!1;const d=new zt({name:"PMREM.Background",side:kt,depthWrite:!1,depthTest:!1}),g=new Xe(new ts,d);let v=!1;const m=e.background;m?m.isColor&&(d.color.copy(m),e.background=null,v=!0):(d.color.copy(Do),v=!0);for(let p=0;p<6;p++){const y=p%3;y===0?(o.up.set(0,c[p],0),o.lookAt(l[p],0,0)):y===1?(o.up.set(0,0,c[p]),o.lookAt(0,l[p],0)):(o.up.set(0,c[p],0),o.lookAt(0,0,l[p]));const _=this._cubeSize;ws(i,y*_,p>2?_:0,_,_),h.setRenderTarget(i),v&&h.render(g,o),h.render(e,o)}g.geometry.dispose(),g.material.dispose(),h.toneMapping=f,h.autoClear=u,e.background=m}_textureToCubeUV(e,t){const n=this._renderer,i=e.mapping===Li||e.mapping===Di;i?(this._cubemapMaterial===null&&(this._cubemapMaterial=Fo()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=Io());const r=i?this._cubemapMaterial:this._equirectMaterial,a=new Xe(this._lodPlanes[0],r),o=r.uniforms;o.envMap.value=e;const c=this._cubeSize;ws(t,0,0,3*c,2*c),n.setRenderTarget(t),n.render(a,Lr)}_applyPMREM(e){const t=this._renderer,n=t.autoClear;t.autoClear=!1;for(let i=1;i<this._lodPlanes.length;i++){const r=Math.sqrt(this._sigmas[i]*this._sigmas[i]-this._sigmas[i-1]*this._sigmas[i-1]),a=Oo[(i-1)%Oo.length];this._blur(e,i-1,i,r,a)}t.autoClear=n}_blur(e,t,n,i,r){const a=this._pingPongRenderTarget;this._halfBlur(e,a,t,n,i,"latitudinal",r),this._halfBlur(a,e,n,n,i,"longitudinal",r)}_halfBlur(e,t,n,i,r,a,o){const c=this._renderer,l=this._blurMaterial;a!=="latitudinal"&&a!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");const h=3,u=new Xe(this._lodPlanes[i],l),f=l.uniforms,d=this._sizeLods[n]-1,g=isFinite(r)?Math.PI/(2*d):2*Math.PI/(2*jn-1),v=r/g,m=isFinite(r)?1+Math.floor(h*v):jn;m>jn&&console.warn(`sigmaRadians, ${r}, is too large and will clip, as it requested ${m} samples when the maximum is set to ${jn}`);const p=[];let y=0;for(let w=0;w<jn;++w){const O=w/v,M=Math.exp(-O*O/2);p.push(M),w===0?y+=M:w<m&&(y+=2*M)}for(let w=0;w<p.length;w++)p[w]=p[w]/y;f.envMap.value=e.texture,f.samples.value=m,f.weights.value=p,f.latitudinal.value=a==="latitudinal",o&&(f.poleAxis.value=o);const{_lodMax:_}=this;f.dTheta.value=g,f.mipInt.value=_-n;const S=this._sizeLods[i],R=3*S*(i>_-Ei?i-_+Ei:0),T=4*(this._cubeSize-S);ws(t,R,T,3*S,2*S),c.setRenderTarget(t),c.render(u,Lr)}}function Uf(s){const e=[],t=[],n=[];let i=s;const r=s-Ei+1+Lo.length;for(let a=0;a<r;a++){const o=Math.pow(2,i);t.push(o);let c=1/o;a>s-Ei?c=Lo[a-s+Ei-1]:a===0&&(c=0),n.push(c);const l=1/(o-2),h=-l,u=1+l,f=[h,h,u,h,u,u,h,h,u,u,h,u],d=6,g=6,v=3,m=2,p=1,y=new Float32Array(v*g*d),_=new Float32Array(m*g*d),S=new Float32Array(p*g*d);for(let T=0;T<d;T++){const w=T%3*2/3-1,O=T>2?0:-1,M=[w,O,0,w+2/3,O,0,w+2/3,O+1,0,w,O,0,w+2/3,O+1,0,w,O+1,0];y.set(M,v*g*T),_.set(f,m*g*T);const A=[T,T,T,T,T,T];S.set(A,p*g*T)}const R=new lt;R.setAttribute("position",new Lt(y,v)),R.setAttribute("uv",new Lt(_,m)),R.setAttribute("faceIndex",new Lt(S,p)),e.push(R),i>Ei&&i--}return{lodPlanes:e,sizeLods:t,sigmas:n}}function Uo(s,e,t){const n=new $n(s,e,t);return n.texture.mapping=Ys,n.texture.name="PMREM.cubeUv",n.scissorTest=!0,n}function ws(s,e,t,n,i){s.viewport.set(e,t,n,i),s.scissor.set(e,t,n,i)}function If(s,e,t){const n=new Float32Array(jn),i=new x(0,1,0);return new Fn({name:"SphericalGaussianBlur",defines:{n:jn,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/t,CUBEUV_MAX_MIP:`${s}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:n},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:i}},vertexShader:va(),fragmentShader:`

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
		`,blending:Dn,depthTest:!1,depthWrite:!1})}function Io(){return new Fn({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:va(),fragmentShader:`

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
		`,blending:Dn,depthTest:!1,depthWrite:!1})}function Fo(){return new Fn({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:va(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:Dn,depthTest:!1,depthWrite:!1})}function va(){return`

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
	`}function Ff(s){let e=new WeakMap,t=null;function n(o){if(o&&o.isTexture){const c=o.mapping,l=c===ea||c===ta,h=c===Li||c===Di;if(l||h)if(o.isRenderTargetTexture&&o.needsPMREMUpdate===!0){o.needsPMREMUpdate=!1;let u=e.get(o);return t===null&&(t=new No(s)),u=l?t.fromEquirectangular(o,u):t.fromCubemap(o,u),e.set(o,u),u.texture}else{if(e.has(o))return e.get(o).texture;{const u=o.image;if(l&&u&&u.height>0||h&&u&&i(u)){t===null&&(t=new No(s));const f=l?t.fromEquirectangular(o):t.fromCubemap(o);return e.set(o,f),o.addEventListener("dispose",r),f.texture}else return null}}}return o}function i(o){let c=0;const l=6;for(let h=0;h<l;h++)o[h]!==void 0&&c++;return c===l}function r(o){const c=o.target;c.removeEventListener("dispose",r);const l=e.get(c);l!==void 0&&(e.delete(c),l.dispose())}function a(){e=new WeakMap,t!==null&&(t.dispose(),t=null)}return{get:n,dispose:a}}function zf(s){const e={};function t(n){if(e[n]!==void 0)return e[n];let i;switch(n){case"WEBGL_depth_texture":i=s.getExtension("WEBGL_depth_texture")||s.getExtension("MOZ_WEBGL_depth_texture")||s.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":i=s.getExtension("EXT_texture_filter_anisotropic")||s.getExtension("MOZ_EXT_texture_filter_anisotropic")||s.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":i=s.getExtension("WEBGL_compressed_texture_s3tc")||s.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||s.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":i=s.getExtension("WEBGL_compressed_texture_pvrtc")||s.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:i=s.getExtension(n)}return e[n]=i,i}return{has:function(n){return t(n)!==null},init:function(n){n.isWebGL2?(t("EXT_color_buffer_float"),t("WEBGL_clip_cull_distance")):(t("WEBGL_depth_texture"),t("OES_texture_float"),t("OES_texture_half_float"),t("OES_texture_half_float_linear"),t("OES_standard_derivatives"),t("OES_element_index_uint"),t("OES_vertex_array_object"),t("ANGLE_instanced_arrays")),t("OES_texture_float_linear"),t("EXT_color_buffer_half_float"),t("WEBGL_multisampled_render_to_texture")},get:function(n){const i=t(n);return i===null&&console.warn("THREE.WebGLRenderer: "+n+" extension not supported."),i}}}function Bf(s,e,t,n){const i={},r=new WeakMap;function a(u){const f=u.target;f.index!==null&&e.remove(f.index);for(const g in f.attributes)e.remove(f.attributes[g]);for(const g in f.morphAttributes){const v=f.morphAttributes[g];for(let m=0,p=v.length;m<p;m++)e.remove(v[m])}f.removeEventListener("dispose",a),delete i[f.id];const d=r.get(f);d&&(e.remove(d),r.delete(f)),n.releaseStatesOfGeometry(f),f.isInstancedBufferGeometry===!0&&delete f._maxInstanceCount,t.memory.geometries--}function o(u,f){return i[f.id]===!0||(f.addEventListener("dispose",a),i[f.id]=!0,t.memory.geometries++),f}function c(u){const f=u.attributes;for(const g in f)e.update(f[g],s.ARRAY_BUFFER);const d=u.morphAttributes;for(const g in d){const v=d[g];for(let m=0,p=v.length;m<p;m++)e.update(v[m],s.ARRAY_BUFFER)}}function l(u){const f=[],d=u.index,g=u.attributes.position;let v=0;if(d!==null){const y=d.array;v=d.version;for(let _=0,S=y.length;_<S;_+=3){const R=y[_+0],T=y[_+1],w=y[_+2];f.push(R,T,T,w,w,R)}}else if(g!==void 0){const y=g.array;v=g.version;for(let _=0,S=y.length/3-1;_<S;_+=3){const R=_+0,T=_+1,w=_+2;f.push(R,T,T,w,w,R)}}else return;const m=new(zc(f)?Wc:Vc)(f,1);m.version=v;const p=r.get(u);p&&e.remove(p),r.set(u,m)}function h(u){const f=r.get(u);if(f){const d=u.index;d!==null&&f.version<d.version&&l(u)}else l(u);return r.get(u)}return{get:o,update:c,getWireframeAttribute:h}}function Gf(s,e,t,n){const i=n.isWebGL2;let r;function a(d){r=d}let o,c;function l(d){o=d.type,c=d.bytesPerElement}function h(d,g){s.drawElements(r,g,o,d*c),t.update(g,r,1)}function u(d,g,v){if(v===0)return;let m,p;if(i)m=s,p="drawElementsInstanced";else if(m=e.get("ANGLE_instanced_arrays"),p="drawElementsInstancedANGLE",m===null){console.error("THREE.WebGLIndexedBufferRenderer: using THREE.InstancedBufferGeometry but hardware does not support extension ANGLE_instanced_arrays.");return}m[p](r,g,o,d*c,v),t.update(g,r,v)}function f(d,g,v){if(v===0)return;const m=e.get("WEBGL_multi_draw");if(m===null)for(let p=0;p<v;p++)this.render(d[p]/c,g[p]);else{m.multiDrawElementsWEBGL(r,g,0,o,d,0,v);let p=0;for(let y=0;y<v;y++)p+=g[y];t.update(p,r,1)}}this.setMode=a,this.setIndex=l,this.render=h,this.renderInstances=u,this.renderMultiDraw=f}function kf(s){const e={geometries:0,textures:0},t={frame:0,calls:0,triangles:0,points:0,lines:0};function n(r,a,o){switch(t.calls++,a){case s.TRIANGLES:t.triangles+=o*(r/3);break;case s.LINES:t.lines+=o*(r/2);break;case s.LINE_STRIP:t.lines+=o*(r-1);break;case s.LINE_LOOP:t.lines+=o*r;break;case s.POINTS:t.points+=o*r;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",a);break}}function i(){t.calls=0,t.triangles=0,t.points=0,t.lines=0}return{memory:e,render:t,programs:null,autoReset:!0,reset:i,update:n}}function Hf(s,e){return s[0]-e[0]}function Vf(s,e){return Math.abs(e[1])-Math.abs(s[1])}function Wf(s,e,t){const n={},i=new Float32Array(8),r=new WeakMap,a=new Mt,o=[];for(let l=0;l<8;l++)o[l]=[l,0];function c(l,h,u){const f=l.morphTargetInfluences;if(e.isWebGL2===!0){const g=h.morphAttributes.position||h.morphAttributes.normal||h.morphAttributes.color,v=g!==void 0?g.length:0;let m=r.get(h);if(m===void 0||m.count!==v){let I=function(){j.dispose(),r.delete(h),h.removeEventListener("dispose",I)};var d=I;m!==void 0&&m.texture.dispose();const _=h.morphAttributes.position!==void 0,S=h.morphAttributes.normal!==void 0,R=h.morphAttributes.color!==void 0,T=h.morphAttributes.position||[],w=h.morphAttributes.normal||[],O=h.morphAttributes.color||[];let M=0;_===!0&&(M=1),S===!0&&(M=2),R===!0&&(M=3);let A=h.attributes.position.count*M,U=1;A>e.maxTextureSize&&(U=Math.ceil(A/e.maxTextureSize),A=e.maxTextureSize);const G=new Float32Array(A*U*4*v),j=new kc(G,A,U,v);j.type=Pn,j.needsUpdate=!0;const D=M*4;for(let H=0;H<v;H++){const q=T[H],Y=w[H],Z=O[H],K=A*U*4*H;for(let se=0;se<q.count;se++){const oe=se*D;_===!0&&(a.fromBufferAttribute(q,se),G[K+oe+0]=a.x,G[K+oe+1]=a.y,G[K+oe+2]=a.z,G[K+oe+3]=0),S===!0&&(a.fromBufferAttribute(Y,se),G[K+oe+4]=a.x,G[K+oe+5]=a.y,G[K+oe+6]=a.z,G[K+oe+7]=0),R===!0&&(a.fromBufferAttribute(Z,se),G[K+oe+8]=a.x,G[K+oe+9]=a.y,G[K+oe+10]=a.z,G[K+oe+11]=Z.itemSize===4?a.w:1)}}m={count:v,texture:j,size:new $(A,U)},r.set(h,m),h.addEventListener("dispose",I)}let p=0;for(let _=0;_<f.length;_++)p+=f[_];const y=h.morphTargetsRelative?1:1-p;u.getUniforms().setValue(s,"morphTargetBaseInfluence",y),u.getUniforms().setValue(s,"morphTargetInfluences",f),u.getUniforms().setValue(s,"morphTargetsTexture",m.texture,t),u.getUniforms().setValue(s,"morphTargetsTextureSize",m.size)}else{const g=f===void 0?0:f.length;let v=n[h.id];if(v===void 0||v.length!==g){v=[];for(let S=0;S<g;S++)v[S]=[S,0];n[h.id]=v}for(let S=0;S<g;S++){const R=v[S];R[0]=S,R[1]=f[S]}v.sort(Vf);for(let S=0;S<8;S++)S<g&&v[S][1]?(o[S][0]=v[S][0],o[S][1]=v[S][1]):(o[S][0]=Number.MAX_SAFE_INTEGER,o[S][1]=0);o.sort(Hf);const m=h.morphAttributes.position,p=h.morphAttributes.normal;let y=0;for(let S=0;S<8;S++){const R=o[S],T=R[0],w=R[1];T!==Number.MAX_SAFE_INTEGER&&w?(m&&h.getAttribute("morphTarget"+S)!==m[T]&&h.setAttribute("morphTarget"+S,m[T]),p&&h.getAttribute("morphNormal"+S)!==p[T]&&h.setAttribute("morphNormal"+S,p[T]),i[S]=w,y+=w):(m&&h.hasAttribute("morphTarget"+S)===!0&&h.deleteAttribute("morphTarget"+S),p&&h.hasAttribute("morphNormal"+S)===!0&&h.deleteAttribute("morphNormal"+S),i[S]=0)}const _=h.morphTargetsRelative?1:1-y;u.getUniforms().setValue(s,"morphTargetBaseInfluence",_),u.getUniforms().setValue(s,"morphTargetInfluences",i)}}return{update:c}}function Xf(s,e,t,n){let i=new WeakMap;function r(c){const l=n.render.frame,h=c.geometry,u=e.get(c,h);if(i.get(u)!==l&&(e.update(u),i.set(u,l)),c.isInstancedMesh&&(c.hasEventListener("dispose",o)===!1&&c.addEventListener("dispose",o),i.get(c)!==l&&(t.update(c.instanceMatrix,s.ARRAY_BUFFER),c.instanceColor!==null&&t.update(c.instanceColor,s.ARRAY_BUFFER),i.set(c,l))),c.isSkinnedMesh){const f=c.skeleton;i.get(f)!==l&&(f.update(),i.set(f,l))}return u}function a(){i=new WeakMap}function o(c){const l=c.target;l.removeEventListener("dispose",o),t.remove(l.instanceMatrix),l.instanceColor!==null&&t.remove(l.instanceColor)}return{update:r,dispose:a}}class Zc extends Nt{constructor(e,t,n,i,r,a,o,c,l,h){if(h=h!==void 0?h:Yn,h!==Yn&&h!==Oi)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");n===void 0&&h===Yn&&(n=Rn),n===void 0&&h===Oi&&(n=qn),super(null,i,r,a,o,c,h,n,l),this.isDepthTexture=!0,this.image={width:e,height:t},this.magFilter=o!==void 0?o:Ft,this.minFilter=c!==void 0?c:Ft,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.compareFunction=e.compareFunction,this}toJSON(e){const t=super.toJSON(e);return this.compareFunction!==null&&(t.compareFunction=this.compareFunction),t}}const $c=new Nt,Kc=new Zc(1,1);Kc.compareFunction=Fc;const Jc=new kc,Qc=new Ch,el=new qc,zo=[],Bo=[],Go=new Float32Array(16),ko=new Float32Array(9),Ho=new Float32Array(4);function Ii(s,e,t){const n=s[0];if(n<=0||n>0)return s;const i=e*t;let r=zo[i];if(r===void 0&&(r=new Float32Array(i),zo[i]=r),e!==0){n.toArray(r,0);for(let a=1,o=0;a!==e;++a)o+=t,s[a].toArray(r,o)}return r}function _t(s,e){if(s.length!==e.length)return!1;for(let t=0,n=s.length;t<n;t++)if(s[t]!==e[t])return!1;return!0}function xt(s,e){for(let t=0,n=e.length;t<n;t++)s[t]=e[t]}function Qs(s,e){let t=Bo[e];t===void 0&&(t=new Int32Array(e),Bo[e]=t);for(let n=0;n!==e;++n)t[n]=s.allocateTextureUnit();return t}function jf(s,e){const t=this.cache;t[0]!==e&&(s.uniform1f(this.addr,e),t[0]=e)}function qf(s,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(s.uniform2f(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(_t(t,e))return;s.uniform2fv(this.addr,e),xt(t,e)}}function Yf(s,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(s.uniform3f(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else if(e.r!==void 0)(t[0]!==e.r||t[1]!==e.g||t[2]!==e.b)&&(s.uniform3f(this.addr,e.r,e.g,e.b),t[0]=e.r,t[1]=e.g,t[2]=e.b);else{if(_t(t,e))return;s.uniform3fv(this.addr,e),xt(t,e)}}function Zf(s,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(s.uniform4f(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(_t(t,e))return;s.uniform4fv(this.addr,e),xt(t,e)}}function $f(s,e){const t=this.cache,n=e.elements;if(n===void 0){if(_t(t,e))return;s.uniformMatrix2fv(this.addr,!1,e),xt(t,e)}else{if(_t(t,n))return;Ho.set(n),s.uniformMatrix2fv(this.addr,!1,Ho),xt(t,n)}}function Kf(s,e){const t=this.cache,n=e.elements;if(n===void 0){if(_t(t,e))return;s.uniformMatrix3fv(this.addr,!1,e),xt(t,e)}else{if(_t(t,n))return;ko.set(n),s.uniformMatrix3fv(this.addr,!1,ko),xt(t,n)}}function Jf(s,e){const t=this.cache,n=e.elements;if(n===void 0){if(_t(t,e))return;s.uniformMatrix4fv(this.addr,!1,e),xt(t,e)}else{if(_t(t,n))return;Go.set(n),s.uniformMatrix4fv(this.addr,!1,Go),xt(t,n)}}function Qf(s,e){const t=this.cache;t[0]!==e&&(s.uniform1i(this.addr,e),t[0]=e)}function ep(s,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(s.uniform2i(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(_t(t,e))return;s.uniform2iv(this.addr,e),xt(t,e)}}function tp(s,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(s.uniform3i(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(_t(t,e))return;s.uniform3iv(this.addr,e),xt(t,e)}}function np(s,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(s.uniform4i(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(_t(t,e))return;s.uniform4iv(this.addr,e),xt(t,e)}}function ip(s,e){const t=this.cache;t[0]!==e&&(s.uniform1ui(this.addr,e),t[0]=e)}function sp(s,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(s.uniform2ui(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(_t(t,e))return;s.uniform2uiv(this.addr,e),xt(t,e)}}function rp(s,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(s.uniform3ui(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(_t(t,e))return;s.uniform3uiv(this.addr,e),xt(t,e)}}function ap(s,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(s.uniform4ui(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(_t(t,e))return;s.uniform4uiv(this.addr,e),xt(t,e)}}function op(s,e,t){const n=this.cache,i=t.allocateTextureUnit();n[0]!==i&&(s.uniform1i(this.addr,i),n[0]=i);const r=this.type===s.SAMPLER_2D_SHADOW?Kc:$c;t.setTexture2D(e||r,i)}function cp(s,e,t){const n=this.cache,i=t.allocateTextureUnit();n[0]!==i&&(s.uniform1i(this.addr,i),n[0]=i),t.setTexture3D(e||Qc,i)}function lp(s,e,t){const n=this.cache,i=t.allocateTextureUnit();n[0]!==i&&(s.uniform1i(this.addr,i),n[0]=i),t.setTextureCube(e||el,i)}function hp(s,e,t){const n=this.cache,i=t.allocateTextureUnit();n[0]!==i&&(s.uniform1i(this.addr,i),n[0]=i),t.setTexture2DArray(e||Jc,i)}function up(s){switch(s){case 5126:return jf;case 35664:return qf;case 35665:return Yf;case 35666:return Zf;case 35674:return $f;case 35675:return Kf;case 35676:return Jf;case 5124:case 35670:return Qf;case 35667:case 35671:return ep;case 35668:case 35672:return tp;case 35669:case 35673:return np;case 5125:return ip;case 36294:return sp;case 36295:return rp;case 36296:return ap;case 35678:case 36198:case 36298:case 36306:case 35682:return op;case 35679:case 36299:case 36307:return cp;case 35680:case 36300:case 36308:case 36293:return lp;case 36289:case 36303:case 36311:case 36292:return hp}}function dp(s,e){s.uniform1fv(this.addr,e)}function fp(s,e){const t=Ii(e,this.size,2);s.uniform2fv(this.addr,t)}function pp(s,e){const t=Ii(e,this.size,3);s.uniform3fv(this.addr,t)}function mp(s,e){const t=Ii(e,this.size,4);s.uniform4fv(this.addr,t)}function gp(s,e){const t=Ii(e,this.size,4);s.uniformMatrix2fv(this.addr,!1,t)}function vp(s,e){const t=Ii(e,this.size,9);s.uniformMatrix3fv(this.addr,!1,t)}function _p(s,e){const t=Ii(e,this.size,16);s.uniformMatrix4fv(this.addr,!1,t)}function xp(s,e){s.uniform1iv(this.addr,e)}function yp(s,e){s.uniform2iv(this.addr,e)}function Sp(s,e){s.uniform3iv(this.addr,e)}function Mp(s,e){s.uniform4iv(this.addr,e)}function bp(s,e){s.uniform1uiv(this.addr,e)}function Ep(s,e){s.uniform2uiv(this.addr,e)}function wp(s,e){s.uniform3uiv(this.addr,e)}function Tp(s,e){s.uniform4uiv(this.addr,e)}function Ap(s,e,t){const n=this.cache,i=e.length,r=Qs(t,i);_t(n,r)||(s.uniform1iv(this.addr,r),xt(n,r));for(let a=0;a!==i;++a)t.setTexture2D(e[a]||$c,r[a])}function Cp(s,e,t){const n=this.cache,i=e.length,r=Qs(t,i);_t(n,r)||(s.uniform1iv(this.addr,r),xt(n,r));for(let a=0;a!==i;++a)t.setTexture3D(e[a]||Qc,r[a])}function Rp(s,e,t){const n=this.cache,i=e.length,r=Qs(t,i);_t(n,r)||(s.uniform1iv(this.addr,r),xt(n,r));for(let a=0;a!==i;++a)t.setTextureCube(e[a]||el,r[a])}function Pp(s,e,t){const n=this.cache,i=e.length,r=Qs(t,i);_t(n,r)||(s.uniform1iv(this.addr,r),xt(n,r));for(let a=0;a!==i;++a)t.setTexture2DArray(e[a]||Jc,r[a])}function Lp(s){switch(s){case 5126:return dp;case 35664:return fp;case 35665:return pp;case 35666:return mp;case 35674:return gp;case 35675:return vp;case 35676:return _p;case 5124:case 35670:return xp;case 35667:case 35671:return yp;case 35668:case 35672:return Sp;case 35669:case 35673:return Mp;case 5125:return bp;case 36294:return Ep;case 36295:return wp;case 36296:return Tp;case 35678:case 36198:case 36298:case 36306:case 35682:return Ap;case 35679:case 36299:case 36307:return Cp;case 35680:case 36300:case 36308:case 36293:return Rp;case 36289:case 36303:case 36311:case 36292:return Pp}}class Dp{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.type=t.type,this.setValue=up(t.type)}}class Op{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.type=t.type,this.size=t.size,this.setValue=Lp(t.type)}}class Np{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,t,n){const i=this.seq;for(let r=0,a=i.length;r!==a;++r){const o=i[r];o.setValue(e,t[o.id],n)}}}const Ur=/(\w+)(\])?(\[|\.)?/g;function Vo(s,e){s.seq.push(e),s.map[e.id]=e}function Up(s,e,t){const n=s.name,i=n.length;for(Ur.lastIndex=0;;){const r=Ur.exec(n),a=Ur.lastIndex;let o=r[1];const c=r[2]==="]",l=r[3];if(c&&(o=o|0),l===void 0||l==="["&&a+2===i){Vo(t,l===void 0?new Dp(o,s,e):new Op(o,s,e));break}else{let u=t.map[o];u===void 0&&(u=new Np(o),Vo(t,u)),t=u}}}class zs{constructor(e,t){this.seq=[],this.map={};const n=e.getProgramParameter(t,e.ACTIVE_UNIFORMS);for(let i=0;i<n;++i){const r=e.getActiveUniform(t,i),a=e.getUniformLocation(t,r.name);Up(r,a,this)}}setValue(e,t,n,i){const r=this.map[t];r!==void 0&&r.setValue(e,n,i)}setOptional(e,t,n){const i=t[n];i!==void 0&&this.setValue(e,n,i)}static upload(e,t,n,i){for(let r=0,a=t.length;r!==a;++r){const o=t[r],c=n[o.id];c.needsUpdate!==!1&&o.setValue(e,c.value,i)}}static seqWithValue(e,t){const n=[];for(let i=0,r=e.length;i!==r;++i){const a=e[i];a.id in t&&n.push(a)}return n}}function Wo(s,e,t){const n=s.createShader(e);return s.shaderSource(n,t),s.compileShader(n),n}const Ip=37297;let Fp=0;function zp(s,e){const t=s.split(`
`),n=[],i=Math.max(e-6,0),r=Math.min(e+6,t.length);for(let a=i;a<r;a++){const o=a+1;n.push(`${o===e?">":" "} ${o}: ${t[a]}`)}return n.join(`
`)}function Bp(s){const e=Je.getPrimaries(Je.workingColorSpace),t=Je.getPrimaries(s);let n;switch(e===t?n="":e===Hs&&t===ks?n="LinearDisplayP3ToLinearSRGB":e===ks&&t===Hs&&(n="LinearSRGBToLinearDisplayP3"),s){case bn:case Zs:return[n,"LinearTransferOETF"];case Et:case pa:return[n,"sRGBTransferOETF"];default:return console.warn("THREE.WebGLProgram: Unsupported color space:",s),[n,"LinearTransferOETF"]}}function Xo(s,e,t){const n=s.getShaderParameter(e,s.COMPILE_STATUS),i=s.getShaderInfoLog(e).trim();if(n&&i==="")return"";const r=/ERROR: 0:(\d+)/.exec(i);if(r){const a=parseInt(r[1]);return t.toUpperCase()+`

`+i+`

`+zp(s.getShaderSource(e),a)}else return i}function Gp(s,e){const t=Bp(e);return`vec4 ${s}( vec4 value ) { return ${t[0]}( ${t[1]}( value ) ); }`}function kp(s,e){let t;switch(e){case $l:t="Linear";break;case Kl:t="Reinhard";break;case Jl:t="OptimizedCineon";break;case Ql:t="ACESFilmic";break;case th:t="AgX";break;case eh:t="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",e),t="Linear"}return"vec3 "+s+"( vec3 color ) { return "+t+"ToneMapping( color ); }"}function Hp(s){return[s.extensionDerivatives||s.envMapCubeUVHeight||s.bumpMap||s.normalMapTangentSpace||s.clearcoatNormalMap||s.flatShading||s.shaderID==="physical"?"#extension GL_OES_standard_derivatives : enable":"",(s.extensionFragDepth||s.logarithmicDepthBuffer)&&s.rendererExtensionFragDepth?"#extension GL_EXT_frag_depth : enable":"",s.extensionDrawBuffers&&s.rendererExtensionDrawBuffers?"#extension GL_EXT_draw_buffers : require":"",(s.extensionShaderTextureLOD||s.envMap||s.transmission)&&s.rendererExtensionShaderTextureLod?"#extension GL_EXT_shader_texture_lod : enable":""].filter(wi).join(`
`)}function Vp(s){return[s.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":""].filter(wi).join(`
`)}function Wp(s){const e=[];for(const t in s){const n=s[t];n!==!1&&e.push("#define "+t+" "+n)}return e.join(`
`)}function Xp(s,e){const t={},n=s.getProgramParameter(e,s.ACTIVE_ATTRIBUTES);for(let i=0;i<n;i++){const r=s.getActiveAttrib(e,i),a=r.name;let o=1;r.type===s.FLOAT_MAT2&&(o=2),r.type===s.FLOAT_MAT3&&(o=3),r.type===s.FLOAT_MAT4&&(o=4),t[a]={type:r.type,location:s.getAttribLocation(e,a),locationSize:o}}return t}function wi(s){return s!==""}function jo(s,e){const t=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return s.replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,t).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function qo(s,e){return s.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}const jp=/^[ \t]*#include +<([\w\d./]+)>/gm;function ca(s){return s.replace(jp,Yp)}const qp=new Map([["encodings_fragment","colorspace_fragment"],["encodings_pars_fragment","colorspace_pars_fragment"],["output_fragment","opaque_fragment"]]);function Yp(s,e){let t=Ge[e];if(t===void 0){const n=qp.get(e);if(n!==void 0)t=Ge[n],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',e,n);else throw new Error("Can not resolve #include <"+e+">")}return ca(t)}const Zp=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function Yo(s){return s.replace(Zp,$p)}function $p(s,e,t,n){let i="";for(let r=parseInt(e);r<parseInt(t);r++)i+=n.replace(/\[\s*i\s*\]/g,"[ "+r+" ]").replace(/UNROLLED_LOOP_INDEX/g,r);return i}function Zo(s){let e="precision "+s.precision+` float;
precision `+s.precision+" int;";return s.precision==="highp"?e+=`
#define HIGH_PRECISION`:s.precision==="mediump"?e+=`
#define MEDIUM_PRECISION`:s.precision==="lowp"&&(e+=`
#define LOW_PRECISION`),e}function Kp(s){let e="SHADOWMAP_TYPE_BASIC";return s.shadowMapType===Ec?e="SHADOWMAP_TYPE_PCF":s.shadowMapType===wc?e="SHADOWMAP_TYPE_PCF_SOFT":s.shadowMapType===xn&&(e="SHADOWMAP_TYPE_VSM"),e}function Jp(s){let e="ENVMAP_TYPE_CUBE";if(s.envMap)switch(s.envMapMode){case Li:case Di:e="ENVMAP_TYPE_CUBE";break;case Ys:e="ENVMAP_TYPE_CUBE_UV";break}return e}function Qp(s){let e="ENVMAP_MODE_REFLECTION";if(s.envMap)switch(s.envMapMode){case Di:e="ENVMAP_MODE_REFRACTION";break}return e}function em(s){let e="ENVMAP_BLENDING_NONE";if(s.envMap)switch(s.combine){case Tc:e="ENVMAP_BLENDING_MULTIPLY";break;case Yl:e="ENVMAP_BLENDING_MIX";break;case Zl:e="ENVMAP_BLENDING_ADD";break}return e}function tm(s){const e=s.envMapCubeUVHeight;if(e===null)return null;const t=Math.log2(e)-2,n=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,t),7*16)),texelHeight:n,maxMip:t}}function nm(s,e,t,n){const i=s.getContext(),r=t.defines;let a=t.vertexShader,o=t.fragmentShader;const c=Kp(t),l=Jp(t),h=Qp(t),u=em(t),f=tm(t),d=t.isWebGL2?"":Hp(t),g=Vp(t),v=Wp(r),m=i.createProgram();let p,y,_=t.glslVersion?"#version "+t.glslVersion+`
`:"";t.isRawShaderMaterial?(p=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,v].filter(wi).join(`
`),p.length>0&&(p+=`
`),y=[d,"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,v].filter(wi).join(`
`),y.length>0&&(y+=`
`)):(p=[Zo(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,v,t.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",t.batching?"#define USE_BATCHING":"",t.instancing?"#define USE_INSTANCING":"",t.instancingColor?"#define USE_INSTANCING_COLOR":"",t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+h:"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.displacementMap?"#define USE_DISPLACEMENTMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.mapUv?"#define MAP_UV "+t.mapUv:"",t.alphaMapUv?"#define ALPHAMAP_UV "+t.alphaMapUv:"",t.lightMapUv?"#define LIGHTMAP_UV "+t.lightMapUv:"",t.aoMapUv?"#define AOMAP_UV "+t.aoMapUv:"",t.emissiveMapUv?"#define EMISSIVEMAP_UV "+t.emissiveMapUv:"",t.bumpMapUv?"#define BUMPMAP_UV "+t.bumpMapUv:"",t.normalMapUv?"#define NORMALMAP_UV "+t.normalMapUv:"",t.displacementMapUv?"#define DISPLACEMENTMAP_UV "+t.displacementMapUv:"",t.metalnessMapUv?"#define METALNESSMAP_UV "+t.metalnessMapUv:"",t.roughnessMapUv?"#define ROUGHNESSMAP_UV "+t.roughnessMapUv:"",t.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+t.anisotropyMapUv:"",t.clearcoatMapUv?"#define CLEARCOATMAP_UV "+t.clearcoatMapUv:"",t.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+t.clearcoatNormalMapUv:"",t.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+t.clearcoatRoughnessMapUv:"",t.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+t.iridescenceMapUv:"",t.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+t.iridescenceThicknessMapUv:"",t.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+t.sheenColorMapUv:"",t.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+t.sheenRoughnessMapUv:"",t.specularMapUv?"#define SPECULARMAP_UV "+t.specularMapUv:"",t.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+t.specularColorMapUv:"",t.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+t.specularIntensityMapUv:"",t.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+t.transmissionMapUv:"",t.thicknessMapUv?"#define THICKNESSMAP_UV "+t.thicknessMapUv:"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.flatShading?"#define FLAT_SHADED":"",t.skinning?"#define USE_SKINNING":"",t.morphTargets?"#define USE_MORPHTARGETS":"",t.morphNormals&&t.flatShading===!1?"#define USE_MORPHNORMALS":"",t.morphColors&&t.isWebGL2?"#define USE_MORPHCOLORS":"",t.morphTargetsCount>0&&t.isWebGL2?"#define MORPHTARGETS_TEXTURE":"",t.morphTargetsCount>0&&t.isWebGL2?"#define MORPHTARGETS_TEXTURE_STRIDE "+t.morphTextureStride:"",t.morphTargetsCount>0&&t.isWebGL2?"#define MORPHTARGETS_COUNT "+t.morphTargetsCount:"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+c:"",t.sizeAttenuation?"#define USE_SIZEATTENUATION":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.useLegacyLights?"#define LEGACY_LIGHTS":"",t.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",t.logarithmicDepthBuffer&&t.rendererExtensionFragDepth?"#define USE_LOGDEPTHBUF_EXT":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#if ( defined( USE_MORPHTARGETS ) && ! defined( MORPHTARGETS_TEXTURE ) )","	attribute vec3 morphTarget0;","	attribute vec3 morphTarget1;","	attribute vec3 morphTarget2;","	attribute vec3 morphTarget3;","	#ifdef USE_MORPHNORMALS","		attribute vec3 morphNormal0;","		attribute vec3 morphNormal1;","		attribute vec3 morphNormal2;","		attribute vec3 morphNormal3;","	#else","		attribute vec3 morphTarget4;","		attribute vec3 morphTarget5;","		attribute vec3 morphTarget6;","		attribute vec3 morphTarget7;","	#endif","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(wi).join(`
`),y=[d,Zo(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,v,t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.matcap?"#define USE_MATCAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+l:"",t.envMap?"#define "+h:"",t.envMap?"#define "+u:"",f?"#define CUBEUV_TEXEL_WIDTH "+f.texelWidth:"",f?"#define CUBEUV_TEXEL_HEIGHT "+f.texelHeight:"",f?"#define CUBEUV_MAX_MIP "+f.maxMip+".0":"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoat?"#define USE_CLEARCOAT":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.iridescence?"#define USE_IRIDESCENCE":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaTest?"#define USE_ALPHATEST":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.sheen?"#define USE_SHEEN":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors||t.instancingColor?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.gradientMap?"#define USE_GRADIENTMAP":"",t.flatShading?"#define FLAT_SHADED":"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+c:"",t.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.useLegacyLights?"#define LEGACY_LIGHTS":"",t.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",t.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",t.logarithmicDepthBuffer&&t.rendererExtensionFragDepth?"#define USE_LOGDEPTHBUF_EXT":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",t.toneMapping!==On?"#define TONE_MAPPING":"",t.toneMapping!==On?Ge.tonemapping_pars_fragment:"",t.toneMapping!==On?kp("toneMapping",t.toneMapping):"",t.dithering?"#define DITHERING":"",t.opaque?"#define OPAQUE":"",Ge.colorspace_pars_fragment,Gp("linearToOutputTexel",t.outputColorSpace),t.useDepthPacking?"#define DEPTH_PACKING "+t.depthPacking:"",`
`].filter(wi).join(`
`)),a=ca(a),a=jo(a,t),a=qo(a,t),o=ca(o),o=jo(o,t),o=qo(o,t),a=Yo(a),o=Yo(o),t.isWebGL2&&t.isRawShaderMaterial!==!0&&(_=`#version 300 es
`,p=[g,"precision mediump sampler2DArray;","#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+p,y=["precision mediump sampler2DArray;","#define varying in",t.glslVersion===fo?"":"layout(location = 0) out highp vec4 pc_fragColor;",t.glslVersion===fo?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+y);const S=_+p+a,R=_+y+o,T=Wo(i,i.VERTEX_SHADER,S),w=Wo(i,i.FRAGMENT_SHADER,R);i.attachShader(m,T),i.attachShader(m,w),t.index0AttributeName!==void 0?i.bindAttribLocation(m,0,t.index0AttributeName):t.morphTargets===!0&&i.bindAttribLocation(m,0,"position"),i.linkProgram(m);function O(G){if(s.debug.checkShaderErrors){const j=i.getProgramInfoLog(m).trim(),D=i.getShaderInfoLog(T).trim(),I=i.getShaderInfoLog(w).trim();let H=!0,q=!0;if(i.getProgramParameter(m,i.LINK_STATUS)===!1)if(H=!1,typeof s.debug.onShaderError=="function")s.debug.onShaderError(i,m,T,w);else{const Y=Xo(i,T,"vertex"),Z=Xo(i,w,"fragment");console.error("THREE.WebGLProgram: Shader Error "+i.getError()+" - VALIDATE_STATUS "+i.getProgramParameter(m,i.VALIDATE_STATUS)+`

Program Info Log: `+j+`
`+Y+`
`+Z)}else j!==""?console.warn("THREE.WebGLProgram: Program Info Log:",j):(D===""||I==="")&&(q=!1);q&&(G.diagnostics={runnable:H,programLog:j,vertexShader:{log:D,prefix:p},fragmentShader:{log:I,prefix:y}})}i.deleteShader(T),i.deleteShader(w),M=new zs(i,m),A=Xp(i,m)}let M;this.getUniforms=function(){return M===void 0&&O(this),M};let A;this.getAttributes=function(){return A===void 0&&O(this),A};let U=t.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return U===!1&&(U=i.getProgramParameter(m,Ip)),U},this.destroy=function(){n.releaseStatesOfProgram(this),i.deleteProgram(m),this.program=void 0},this.type=t.shaderType,this.name=t.shaderName,this.id=Fp++,this.cacheKey=e,this.usedTimes=1,this.program=m,this.vertexShader=T,this.fragmentShader=w,this}let im=0;class sm{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e){const t=e.vertexShader,n=e.fragmentShader,i=this._getShaderStage(t),r=this._getShaderStage(n),a=this._getShaderCacheForMaterial(e);return a.has(i)===!1&&(a.add(i),i.usedTimes++),a.has(r)===!1&&(a.add(r),r.usedTimes++),this}remove(e){const t=this.materialCache.get(e);for(const n of t)n.usedTimes--,n.usedTimes===0&&this.shaderCache.delete(n.code);return this.materialCache.delete(e),this}getVertexShaderID(e){return this._getShaderStage(e.vertexShader).id}getFragmentShaderID(e){return this._getShaderStage(e.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){const t=this.materialCache;let n=t.get(e);return n===void 0&&(n=new Set,t.set(e,n)),n}_getShaderStage(e){const t=this.shaderCache;let n=t.get(e);return n===void 0&&(n=new rm(e),t.set(e,n)),n}}class rm{constructor(e){this.id=im++,this.code=e,this.usedTimes=0}}function am(s,e,t,n,i,r,a){const o=new ma,c=new sm,l=[],h=i.isWebGL2,u=i.logarithmicDepthBuffer,f=i.vertexTextures;let d=i.precision;const g={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function v(M){return M===0?"uv":`uv${M}`}function m(M,A,U,G,j){const D=G.fog,I=j.geometry,H=M.isMeshStandardMaterial?G.environment:null,q=(M.isMeshStandardMaterial?t:e).get(M.envMap||H),Y=q&&q.mapping===Ys?q.image.height:null,Z=g[M.type];M.precision!==null&&(d=i.getMaxPrecision(M.precision),d!==M.precision&&console.warn("THREE.WebGLProgram.getParameters:",M.precision,"not supported, using",d,"instead."));const K=I.morphAttributes.position||I.morphAttributes.normal||I.morphAttributes.color,se=K!==void 0?K.length:0;let oe=0;I.morphAttributes.position!==void 0&&(oe=1),I.morphAttributes.normal!==void 0&&(oe=2),I.morphAttributes.color!==void 0&&(oe=3);let X,J,he,xe;if(Z){const ut=cn[Z];X=ut.vertexShader,J=ut.fragmentShader}else X=M.vertexShader,J=M.fragmentShader,c.update(M),he=c.getVertexShaderID(M),xe=c.getFragmentShaderID(M);const ve=s.getRenderTarget(),Le=j.isInstancedMesh===!0,Pe=j.isBatchedMesh===!0,Ae=!!M.map,je=!!M.matcap,z=!!q,bt=!!M.aoMap,Ee=!!M.lightMap,De=!!M.bumpMap,_e=!!M.normalMap,tt=!!M.displacementMap,Fe=!!M.emissiveMap,C=!!M.metalnessMap,b=!!M.roughnessMap,F=M.anisotropy>0,ne=M.clearcoat>0,ee=M.iridescence>0,ie=M.sheen>0,ye=M.transmission>0,ue=F&&!!M.anisotropyMap,ge=ne&&!!M.clearcoatMap,Te=ne&&!!M.clearcoatNormalMap,ze=ne&&!!M.clearcoatRoughnessMap,Q=ee&&!!M.iridescenceMap,$e=ee&&!!M.iridescenceThicknessMap,ke=ie&&!!M.sheenColorMap,Oe=ie&&!!M.sheenRoughnessMap,be=!!M.specularMap,de=!!M.specularColorMap,P=!!M.specularIntensityMap,re=ye&&!!M.transmissionMap,Se=ye&&!!M.thicknessMap,me=!!M.gradientMap,te=!!M.alphaMap,L=M.alphaTest>0,ae=!!M.alphaHash,le=!!M.extensions,Ce=!!I.attributes.uv1,we=!!I.attributes.uv2,qe=!!I.attributes.uv3;let Ye=On;return M.toneMapped&&(ve===null||ve.isXRRenderTarget===!0)&&(Ye=s.toneMapping),{isWebGL2:h,shaderID:Z,shaderType:M.type,shaderName:M.name,vertexShader:X,fragmentShader:J,defines:M.defines,customVertexShaderID:he,customFragmentShaderID:xe,isRawShaderMaterial:M.isRawShaderMaterial===!0,glslVersion:M.glslVersion,precision:d,batching:Pe,instancing:Le,instancingColor:Le&&j.instanceColor!==null,supportsVertexTextures:f,outputColorSpace:ve===null?s.outputColorSpace:ve.isXRRenderTarget===!0?ve.texture.colorSpace:bn,map:Ae,matcap:je,envMap:z,envMapMode:z&&q.mapping,envMapCubeUVHeight:Y,aoMap:bt,lightMap:Ee,bumpMap:De,normalMap:_e,displacementMap:f&&tt,emissiveMap:Fe,normalMapObjectSpace:_e&&M.normalMapType===fh,normalMapTangentSpace:_e&&M.normalMapType===Ic,metalnessMap:C,roughnessMap:b,anisotropy:F,anisotropyMap:ue,clearcoat:ne,clearcoatMap:ge,clearcoatNormalMap:Te,clearcoatRoughnessMap:ze,iridescence:ee,iridescenceMap:Q,iridescenceThicknessMap:$e,sheen:ie,sheenColorMap:ke,sheenRoughnessMap:Oe,specularMap:be,specularColorMap:de,specularIntensityMap:P,transmission:ye,transmissionMap:re,thicknessMap:Se,gradientMap:me,opaque:M.transparent===!1&&M.blending===Ci,alphaMap:te,alphaTest:L,alphaHash:ae,combine:M.combine,mapUv:Ae&&v(M.map.channel),aoMapUv:bt&&v(M.aoMap.channel),lightMapUv:Ee&&v(M.lightMap.channel),bumpMapUv:De&&v(M.bumpMap.channel),normalMapUv:_e&&v(M.normalMap.channel),displacementMapUv:tt&&v(M.displacementMap.channel),emissiveMapUv:Fe&&v(M.emissiveMap.channel),metalnessMapUv:C&&v(M.metalnessMap.channel),roughnessMapUv:b&&v(M.roughnessMap.channel),anisotropyMapUv:ue&&v(M.anisotropyMap.channel),clearcoatMapUv:ge&&v(M.clearcoatMap.channel),clearcoatNormalMapUv:Te&&v(M.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:ze&&v(M.clearcoatRoughnessMap.channel),iridescenceMapUv:Q&&v(M.iridescenceMap.channel),iridescenceThicknessMapUv:$e&&v(M.iridescenceThicknessMap.channel),sheenColorMapUv:ke&&v(M.sheenColorMap.channel),sheenRoughnessMapUv:Oe&&v(M.sheenRoughnessMap.channel),specularMapUv:be&&v(M.specularMap.channel),specularColorMapUv:de&&v(M.specularColorMap.channel),specularIntensityMapUv:P&&v(M.specularIntensityMap.channel),transmissionMapUv:re&&v(M.transmissionMap.channel),thicknessMapUv:Se&&v(M.thicknessMap.channel),alphaMapUv:te&&v(M.alphaMap.channel),vertexTangents:!!I.attributes.tangent&&(_e||F),vertexColors:M.vertexColors,vertexAlphas:M.vertexColors===!0&&!!I.attributes.color&&I.attributes.color.itemSize===4,vertexUv1s:Ce,vertexUv2s:we,vertexUv3s:qe,pointsUvs:j.isPoints===!0&&!!I.attributes.uv&&(Ae||te),fog:!!D,useFog:M.fog===!0,fogExp2:D&&D.isFogExp2,flatShading:M.flatShading===!0,sizeAttenuation:M.sizeAttenuation===!0,logarithmicDepthBuffer:u,skinning:j.isSkinnedMesh===!0,morphTargets:I.morphAttributes.position!==void 0,morphNormals:I.morphAttributes.normal!==void 0,morphColors:I.morphAttributes.color!==void 0,morphTargetsCount:se,morphTextureStride:oe,numDirLights:A.directional.length,numPointLights:A.point.length,numSpotLights:A.spot.length,numSpotLightMaps:A.spotLightMap.length,numRectAreaLights:A.rectArea.length,numHemiLights:A.hemi.length,numDirLightShadows:A.directionalShadowMap.length,numPointLightShadows:A.pointShadowMap.length,numSpotLightShadows:A.spotShadowMap.length,numSpotLightShadowsWithMaps:A.numSpotLightShadowsWithMaps,numLightProbes:A.numLightProbes,numClippingPlanes:a.numPlanes,numClipIntersection:a.numIntersection,dithering:M.dithering,shadowMapEnabled:s.shadowMap.enabled&&U.length>0,shadowMapType:s.shadowMap.type,toneMapping:Ye,useLegacyLights:s._useLegacyLights,decodeVideoTexture:Ae&&M.map.isVideoTexture===!0&&Je.getTransfer(M.map.colorSpace)===nt,premultipliedAlpha:M.premultipliedAlpha,doubleSided:M.side===jt,flipSided:M.side===kt,useDepthPacking:M.depthPacking>=0,depthPacking:M.depthPacking||0,index0AttributeName:M.index0AttributeName,extensionDerivatives:le&&M.extensions.derivatives===!0,extensionFragDepth:le&&M.extensions.fragDepth===!0,extensionDrawBuffers:le&&M.extensions.drawBuffers===!0,extensionShaderTextureLOD:le&&M.extensions.shaderTextureLOD===!0,extensionClipCullDistance:le&&M.extensions.clipCullDistance&&n.has("WEBGL_clip_cull_distance"),rendererExtensionFragDepth:h||n.has("EXT_frag_depth"),rendererExtensionDrawBuffers:h||n.has("WEBGL_draw_buffers"),rendererExtensionShaderTextureLod:h||n.has("EXT_shader_texture_lod"),rendererExtensionParallelShaderCompile:n.has("KHR_parallel_shader_compile"),customProgramCacheKey:M.customProgramCacheKey()}}function p(M){const A=[];if(M.shaderID?A.push(M.shaderID):(A.push(M.customVertexShaderID),A.push(M.customFragmentShaderID)),M.defines!==void 0)for(const U in M.defines)A.push(U),A.push(M.defines[U]);return M.isRawShaderMaterial===!1&&(y(A,M),_(A,M),A.push(s.outputColorSpace)),A.push(M.customProgramCacheKey),A.join()}function y(M,A){M.push(A.precision),M.push(A.outputColorSpace),M.push(A.envMapMode),M.push(A.envMapCubeUVHeight),M.push(A.mapUv),M.push(A.alphaMapUv),M.push(A.lightMapUv),M.push(A.aoMapUv),M.push(A.bumpMapUv),M.push(A.normalMapUv),M.push(A.displacementMapUv),M.push(A.emissiveMapUv),M.push(A.metalnessMapUv),M.push(A.roughnessMapUv),M.push(A.anisotropyMapUv),M.push(A.clearcoatMapUv),M.push(A.clearcoatNormalMapUv),M.push(A.clearcoatRoughnessMapUv),M.push(A.iridescenceMapUv),M.push(A.iridescenceThicknessMapUv),M.push(A.sheenColorMapUv),M.push(A.sheenRoughnessMapUv),M.push(A.specularMapUv),M.push(A.specularColorMapUv),M.push(A.specularIntensityMapUv),M.push(A.transmissionMapUv),M.push(A.thicknessMapUv),M.push(A.combine),M.push(A.fogExp2),M.push(A.sizeAttenuation),M.push(A.morphTargetsCount),M.push(A.morphAttributeCount),M.push(A.numDirLights),M.push(A.numPointLights),M.push(A.numSpotLights),M.push(A.numSpotLightMaps),M.push(A.numHemiLights),M.push(A.numRectAreaLights),M.push(A.numDirLightShadows),M.push(A.numPointLightShadows),M.push(A.numSpotLightShadows),M.push(A.numSpotLightShadowsWithMaps),M.push(A.numLightProbes),M.push(A.shadowMapType),M.push(A.toneMapping),M.push(A.numClippingPlanes),M.push(A.numClipIntersection),M.push(A.depthPacking)}function _(M,A){o.disableAll(),A.isWebGL2&&o.enable(0),A.supportsVertexTextures&&o.enable(1),A.instancing&&o.enable(2),A.instancingColor&&o.enable(3),A.matcap&&o.enable(4),A.envMap&&o.enable(5),A.normalMapObjectSpace&&o.enable(6),A.normalMapTangentSpace&&o.enable(7),A.clearcoat&&o.enable(8),A.iridescence&&o.enable(9),A.alphaTest&&o.enable(10),A.vertexColors&&o.enable(11),A.vertexAlphas&&o.enable(12),A.vertexUv1s&&o.enable(13),A.vertexUv2s&&o.enable(14),A.vertexUv3s&&o.enable(15),A.vertexTangents&&o.enable(16),A.anisotropy&&o.enable(17),A.alphaHash&&o.enable(18),A.batching&&o.enable(19),M.push(o.mask),o.disableAll(),A.fog&&o.enable(0),A.useFog&&o.enable(1),A.flatShading&&o.enable(2),A.logarithmicDepthBuffer&&o.enable(3),A.skinning&&o.enable(4),A.morphTargets&&o.enable(5),A.morphNormals&&o.enable(6),A.morphColors&&o.enable(7),A.premultipliedAlpha&&o.enable(8),A.shadowMapEnabled&&o.enable(9),A.useLegacyLights&&o.enable(10),A.doubleSided&&o.enable(11),A.flipSided&&o.enable(12),A.useDepthPacking&&o.enable(13),A.dithering&&o.enable(14),A.transmission&&o.enable(15),A.sheen&&o.enable(16),A.opaque&&o.enable(17),A.pointsUvs&&o.enable(18),A.decodeVideoTexture&&o.enable(19),M.push(o.mask)}function S(M){const A=g[M.type];let U;if(A){const G=cn[A];U=kh.clone(G.uniforms)}else U=M.uniforms;return U}function R(M,A){let U;for(let G=0,j=l.length;G<j;G++){const D=l[G];if(D.cacheKey===A){U=D,++U.usedTimes;break}}return U===void 0&&(U=new nm(s,A,M,r),l.push(U)),U}function T(M){if(--M.usedTimes===0){const A=l.indexOf(M);l[A]=l[l.length-1],l.pop(),M.destroy()}}function w(M){c.remove(M)}function O(){c.dispose()}return{getParameters:m,getProgramCacheKey:p,getUniforms:S,acquireProgram:R,releaseProgram:T,releaseShaderCache:w,programs:l,dispose:O}}function om(){let s=new WeakMap;function e(r){let a=s.get(r);return a===void 0&&(a={},s.set(r,a)),a}function t(r){s.delete(r)}function n(r,a,o){s.get(r)[a]=o}function i(){s=new WeakMap}return{get:e,remove:t,update:n,dispose:i}}function cm(s,e){return s.groupOrder!==e.groupOrder?s.groupOrder-e.groupOrder:s.renderOrder!==e.renderOrder?s.renderOrder-e.renderOrder:s.material.id!==e.material.id?s.material.id-e.material.id:s.z!==e.z?s.z-e.z:s.id-e.id}function $o(s,e){return s.groupOrder!==e.groupOrder?s.groupOrder-e.groupOrder:s.renderOrder!==e.renderOrder?s.renderOrder-e.renderOrder:s.z!==e.z?e.z-s.z:s.id-e.id}function Ko(){const s=[];let e=0;const t=[],n=[],i=[];function r(){e=0,t.length=0,n.length=0,i.length=0}function a(u,f,d,g,v,m){let p=s[e];return p===void 0?(p={id:u.id,object:u,geometry:f,material:d,groupOrder:g,renderOrder:u.renderOrder,z:v,group:m},s[e]=p):(p.id=u.id,p.object=u,p.geometry=f,p.material=d,p.groupOrder=g,p.renderOrder=u.renderOrder,p.z=v,p.group=m),e++,p}function o(u,f,d,g,v,m){const p=a(u,f,d,g,v,m);d.transmission>0?n.push(p):d.transparent===!0?i.push(p):t.push(p)}function c(u,f,d,g,v,m){const p=a(u,f,d,g,v,m);d.transmission>0?n.unshift(p):d.transparent===!0?i.unshift(p):t.unshift(p)}function l(u,f){t.length>1&&t.sort(u||cm),n.length>1&&n.sort(f||$o),i.length>1&&i.sort(f||$o)}function h(){for(let u=e,f=s.length;u<f;u++){const d=s[u];if(d.id===null)break;d.id=null,d.object=null,d.geometry=null,d.material=null,d.group=null}}return{opaque:t,transmissive:n,transparent:i,init:r,push:o,unshift:c,finish:h,sort:l}}function lm(){let s=new WeakMap;function e(n,i){const r=s.get(n);let a;return r===void 0?(a=new Ko,s.set(n,[a])):i>=r.length?(a=new Ko,r.push(a)):a=r[i],a}function t(){s=new WeakMap}return{get:e,dispose:t}}function hm(){const s={};return{get:function(e){if(s[e.id]!==void 0)return s[e.id];let t;switch(e.type){case"DirectionalLight":t={direction:new x,color:new Ue};break;case"SpotLight":t={position:new x,direction:new x,color:new Ue,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":t={position:new x,color:new Ue,distance:0,decay:0};break;case"HemisphereLight":t={direction:new x,skyColor:new Ue,groundColor:new Ue};break;case"RectAreaLight":t={color:new Ue,position:new x,halfWidth:new x,halfHeight:new x};break}return s[e.id]=t,t}}}function um(){const s={};return{get:function(e){if(s[e.id]!==void 0)return s[e.id];let t;switch(e.type){case"DirectionalLight":t={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new $};break;case"SpotLight":t={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new $};break;case"PointLight":t={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new $,shadowCameraNear:1,shadowCameraFar:1e3};break}return s[e.id]=t,t}}}let dm=0;function fm(s,e){return(e.castShadow?2:0)-(s.castShadow?2:0)+(e.map?1:0)-(s.map?1:0)}function pm(s,e){const t=new hm,n=um(),i={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let h=0;h<9;h++)i.probe.push(new x);const r=new x,a=new ht,o=new ht;function c(h,u){let f=0,d=0,g=0;for(let G=0;G<9;G++)i.probe[G].set(0,0,0);let v=0,m=0,p=0,y=0,_=0,S=0,R=0,T=0,w=0,O=0,M=0;h.sort(fm);const A=u===!0?Math.PI:1;for(let G=0,j=h.length;G<j;G++){const D=h[G],I=D.color,H=D.intensity,q=D.distance,Y=D.shadow&&D.shadow.map?D.shadow.map.texture:null;if(D.isAmbientLight)f+=I.r*H*A,d+=I.g*H*A,g+=I.b*H*A;else if(D.isLightProbe){for(let Z=0;Z<9;Z++)i.probe[Z].addScaledVector(D.sh.coefficients[Z],H);M++}else if(D.isDirectionalLight){const Z=t.get(D);if(Z.color.copy(D.color).multiplyScalar(D.intensity*A),D.castShadow){const K=D.shadow,se=n.get(D);se.shadowBias=K.bias,se.shadowNormalBias=K.normalBias,se.shadowRadius=K.radius,se.shadowMapSize=K.mapSize,i.directionalShadow[v]=se,i.directionalShadowMap[v]=Y,i.directionalShadowMatrix[v]=D.shadow.matrix,S++}i.directional[v]=Z,v++}else if(D.isSpotLight){const Z=t.get(D);Z.position.setFromMatrixPosition(D.matrixWorld),Z.color.copy(I).multiplyScalar(H*A),Z.distance=q,Z.coneCos=Math.cos(D.angle),Z.penumbraCos=Math.cos(D.angle*(1-D.penumbra)),Z.decay=D.decay,i.spot[p]=Z;const K=D.shadow;if(D.map&&(i.spotLightMap[w]=D.map,w++,K.updateMatrices(D),D.castShadow&&O++),i.spotLightMatrix[p]=K.matrix,D.castShadow){const se=n.get(D);se.shadowBias=K.bias,se.shadowNormalBias=K.normalBias,se.shadowRadius=K.radius,se.shadowMapSize=K.mapSize,i.spotShadow[p]=se,i.spotShadowMap[p]=Y,T++}p++}else if(D.isRectAreaLight){const Z=t.get(D);Z.color.copy(I).multiplyScalar(H),Z.halfWidth.set(D.width*.5,0,0),Z.halfHeight.set(0,D.height*.5,0),i.rectArea[y]=Z,y++}else if(D.isPointLight){const Z=t.get(D);if(Z.color.copy(D.color).multiplyScalar(D.intensity*A),Z.distance=D.distance,Z.decay=D.decay,D.castShadow){const K=D.shadow,se=n.get(D);se.shadowBias=K.bias,se.shadowNormalBias=K.normalBias,se.shadowRadius=K.radius,se.shadowMapSize=K.mapSize,se.shadowCameraNear=K.camera.near,se.shadowCameraFar=K.camera.far,i.pointShadow[m]=se,i.pointShadowMap[m]=Y,i.pointShadowMatrix[m]=D.shadow.matrix,R++}i.point[m]=Z,m++}else if(D.isHemisphereLight){const Z=t.get(D);Z.skyColor.copy(D.color).multiplyScalar(H*A),Z.groundColor.copy(D.groundColor).multiplyScalar(H*A),i.hemi[_]=Z,_++}}y>0&&(e.isWebGL2?s.has("OES_texture_float_linear")===!0?(i.rectAreaLTC1=ce.LTC_FLOAT_1,i.rectAreaLTC2=ce.LTC_FLOAT_2):(i.rectAreaLTC1=ce.LTC_HALF_1,i.rectAreaLTC2=ce.LTC_HALF_2):s.has("OES_texture_float_linear")===!0?(i.rectAreaLTC1=ce.LTC_FLOAT_1,i.rectAreaLTC2=ce.LTC_FLOAT_2):s.has("OES_texture_half_float_linear")===!0?(i.rectAreaLTC1=ce.LTC_HALF_1,i.rectAreaLTC2=ce.LTC_HALF_2):console.error("THREE.WebGLRenderer: Unable to use RectAreaLight. Missing WebGL extensions.")),i.ambient[0]=f,i.ambient[1]=d,i.ambient[2]=g;const U=i.hash;(U.directionalLength!==v||U.pointLength!==m||U.spotLength!==p||U.rectAreaLength!==y||U.hemiLength!==_||U.numDirectionalShadows!==S||U.numPointShadows!==R||U.numSpotShadows!==T||U.numSpotMaps!==w||U.numLightProbes!==M)&&(i.directional.length=v,i.spot.length=p,i.rectArea.length=y,i.point.length=m,i.hemi.length=_,i.directionalShadow.length=S,i.directionalShadowMap.length=S,i.pointShadow.length=R,i.pointShadowMap.length=R,i.spotShadow.length=T,i.spotShadowMap.length=T,i.directionalShadowMatrix.length=S,i.pointShadowMatrix.length=R,i.spotLightMatrix.length=T+w-O,i.spotLightMap.length=w,i.numSpotLightShadowsWithMaps=O,i.numLightProbes=M,U.directionalLength=v,U.pointLength=m,U.spotLength=p,U.rectAreaLength=y,U.hemiLength=_,U.numDirectionalShadows=S,U.numPointShadows=R,U.numSpotShadows=T,U.numSpotMaps=w,U.numLightProbes=M,i.version=dm++)}function l(h,u){let f=0,d=0,g=0,v=0,m=0;const p=u.matrixWorldInverse;for(let y=0,_=h.length;y<_;y++){const S=h[y];if(S.isDirectionalLight){const R=i.directional[f];R.direction.setFromMatrixPosition(S.matrixWorld),r.setFromMatrixPosition(S.target.matrixWorld),R.direction.sub(r),R.direction.transformDirection(p),f++}else if(S.isSpotLight){const R=i.spot[g];R.position.setFromMatrixPosition(S.matrixWorld),R.position.applyMatrix4(p),R.direction.setFromMatrixPosition(S.matrixWorld),r.setFromMatrixPosition(S.target.matrixWorld),R.direction.sub(r),R.direction.transformDirection(p),g++}else if(S.isRectAreaLight){const R=i.rectArea[v];R.position.setFromMatrixPosition(S.matrixWorld),R.position.applyMatrix4(p),o.identity(),a.copy(S.matrixWorld),a.premultiply(p),o.extractRotation(a),R.halfWidth.set(S.width*.5,0,0),R.halfHeight.set(0,S.height*.5,0),R.halfWidth.applyMatrix4(o),R.halfHeight.applyMatrix4(o),v++}else if(S.isPointLight){const R=i.point[d];R.position.setFromMatrixPosition(S.matrixWorld),R.position.applyMatrix4(p),d++}else if(S.isHemisphereLight){const R=i.hemi[m];R.direction.setFromMatrixPosition(S.matrixWorld),R.direction.transformDirection(p),m++}}}return{setup:c,setupView:l,state:i}}function Jo(s,e){const t=new pm(s,e),n=[],i=[];function r(){n.length=0,i.length=0}function a(u){n.push(u)}function o(u){i.push(u)}function c(u){t.setup(n,u)}function l(u){t.setupView(n,u)}return{init:r,state:{lightsArray:n,shadowsArray:i,lights:t},setupLights:c,setupLightsView:l,pushLight:a,pushShadow:o}}function mm(s,e){let t=new WeakMap;function n(r,a=0){const o=t.get(r);let c;return o===void 0?(c=new Jo(s,e),t.set(r,[c])):a>=o.length?(c=new Jo(s,e),o.push(c)):c=o[a],c}function i(){t=new WeakMap}return{get:n,dispose:i}}class gm extends ti{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=uh,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}}class vm extends ti{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}}const _m=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,xm=`uniform sampler2D shadow_pass;
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
}`;function ym(s,e,t){let n=new ga;const i=new $,r=new $,a=new Mt,o=new gm({depthPacking:dh}),c=new vm,l={},h=t.maxTextureSize,u={[In]:kt,[kt]:In,[jt]:jt},f=new Fn({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new $},radius:{value:4}},vertexShader:_m,fragmentShader:xm}),d=f.clone();d.defines.HORIZONTAL_PASS=1;const g=new lt;g.setAttribute("position",new Lt(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const v=new Xe(g,f),m=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=Ec;let p=this.type;this.render=function(T,w,O){if(m.enabled===!1||m.autoUpdate===!1&&m.needsUpdate===!1||T.length===0)return;const M=s.getRenderTarget(),A=s.getActiveCubeFace(),U=s.getActiveMipmapLevel(),G=s.state;G.setBlending(Dn),G.buffers.color.setClear(1,1,1,1),G.buffers.depth.setTest(!0),G.setScissorTest(!1);const j=p!==xn&&this.type===xn,D=p===xn&&this.type!==xn;for(let I=0,H=T.length;I<H;I++){const q=T[I],Y=q.shadow;if(Y===void 0){console.warn("THREE.WebGLShadowMap:",q,"has no shadow.");continue}if(Y.autoUpdate===!1&&Y.needsUpdate===!1)continue;i.copy(Y.mapSize);const Z=Y.getFrameExtents();if(i.multiply(Z),r.copy(Y.mapSize),(i.x>h||i.y>h)&&(i.x>h&&(r.x=Math.floor(h/Z.x),i.x=r.x*Z.x,Y.mapSize.x=r.x),i.y>h&&(r.y=Math.floor(h/Z.y),i.y=r.y*Z.y,Y.mapSize.y=r.y)),Y.map===null||j===!0||D===!0){const se=this.type!==xn?{minFilter:Ft,magFilter:Ft}:{};Y.map!==null&&Y.map.dispose(),Y.map=new $n(i.x,i.y,se),Y.map.texture.name=q.name+".shadowMap",Y.camera.updateProjectionMatrix()}s.setRenderTarget(Y.map),s.clear();const K=Y.getViewportCount();for(let se=0;se<K;se++){const oe=Y.getViewport(se);a.set(r.x*oe.x,r.y*oe.y,r.x*oe.z,r.y*oe.w),G.viewport(a),Y.updateMatrices(q,se),n=Y.getFrustum(),S(w,O,Y.camera,q,this.type)}Y.isPointLightShadow!==!0&&this.type===xn&&y(Y,O),Y.needsUpdate=!1}p=this.type,m.needsUpdate=!1,s.setRenderTarget(M,A,U)};function y(T,w){const O=e.update(v);f.defines.VSM_SAMPLES!==T.blurSamples&&(f.defines.VSM_SAMPLES=T.blurSamples,d.defines.VSM_SAMPLES=T.blurSamples,f.needsUpdate=!0,d.needsUpdate=!0),T.mapPass===null&&(T.mapPass=new $n(i.x,i.y)),f.uniforms.shadow_pass.value=T.map.texture,f.uniforms.resolution.value=T.mapSize,f.uniforms.radius.value=T.radius,s.setRenderTarget(T.mapPass),s.clear(),s.renderBufferDirect(w,null,O,f,v,null),d.uniforms.shadow_pass.value=T.mapPass.texture,d.uniforms.resolution.value=T.mapSize,d.uniforms.radius.value=T.radius,s.setRenderTarget(T.map),s.clear(),s.renderBufferDirect(w,null,O,d,v,null)}function _(T,w,O,M){let A=null;const U=O.isPointLight===!0?T.customDistanceMaterial:T.customDepthMaterial;if(U!==void 0)A=U;else if(A=O.isPointLight===!0?c:o,s.localClippingEnabled&&w.clipShadows===!0&&Array.isArray(w.clippingPlanes)&&w.clippingPlanes.length!==0||w.displacementMap&&w.displacementScale!==0||w.alphaMap&&w.alphaTest>0||w.map&&w.alphaTest>0){const G=A.uuid,j=w.uuid;let D=l[G];D===void 0&&(D={},l[G]=D);let I=D[j];I===void 0&&(I=A.clone(),D[j]=I,w.addEventListener("dispose",R)),A=I}if(A.visible=w.visible,A.wireframe=w.wireframe,M===xn?A.side=w.shadowSide!==null?w.shadowSide:w.side:A.side=w.shadowSide!==null?w.shadowSide:u[w.side],A.alphaMap=w.alphaMap,A.alphaTest=w.alphaTest,A.map=w.map,A.clipShadows=w.clipShadows,A.clippingPlanes=w.clippingPlanes,A.clipIntersection=w.clipIntersection,A.displacementMap=w.displacementMap,A.displacementScale=w.displacementScale,A.displacementBias=w.displacementBias,A.wireframeLinewidth=w.wireframeLinewidth,A.linewidth=w.linewidth,O.isPointLight===!0&&A.isMeshDistanceMaterial===!0){const G=s.properties.get(A);G.light=O}return A}function S(T,w,O,M,A){if(T.visible===!1)return;if(T.layers.test(w.layers)&&(T.isMesh||T.isLine||T.isPoints)&&(T.castShadow||T.receiveShadow&&A===xn)&&(!T.frustumCulled||n.intersectsObject(T))){T.modelViewMatrix.multiplyMatrices(O.matrixWorldInverse,T.matrixWorld);const j=e.update(T),D=T.material;if(Array.isArray(D)){const I=j.groups;for(let H=0,q=I.length;H<q;H++){const Y=I[H],Z=D[Y.materialIndex];if(Z&&Z.visible){const K=_(T,Z,M,A);T.onBeforeShadow(s,T,w,O,j,K,Y),s.renderBufferDirect(O,null,j,K,T,Y),T.onAfterShadow(s,T,w,O,j,K,Y)}}}else if(D.visible){const I=_(T,D,M,A);T.onBeforeShadow(s,T,w,O,j,I,null),s.renderBufferDirect(O,null,j,I,T,null),T.onAfterShadow(s,T,w,O,j,I,null)}}const G=T.children;for(let j=0,D=G.length;j<D;j++)S(G[j],w,O,M,A)}function R(T){T.target.removeEventListener("dispose",R);for(const O in l){const M=l[O],A=T.target.uuid;A in M&&(M[A].dispose(),delete M[A])}}}function Sm(s,e,t){const n=t.isWebGL2;function i(){let L=!1;const ae=new Mt;let le=null;const Ce=new Mt(0,0,0,0);return{setMask:function(we){le!==we&&!L&&(s.colorMask(we,we,we,we),le=we)},setLocked:function(we){L=we},setClear:function(we,qe,Ye,at,ut){ut===!0&&(we*=at,qe*=at,Ye*=at),ae.set(we,qe,Ye,at),Ce.equals(ae)===!1&&(s.clearColor(we,qe,Ye,at),Ce.copy(ae))},reset:function(){L=!1,le=null,Ce.set(-1,0,0,0)}}}function r(){let L=!1,ae=null,le=null,Ce=null;return{setTest:function(we){we?Pe(s.DEPTH_TEST):Ae(s.DEPTH_TEST)},setMask:function(we){ae!==we&&!L&&(s.depthMask(we),ae=we)},setFunc:function(we){if(le!==we){switch(we){case kl:s.depthFunc(s.NEVER);break;case Hl:s.depthFunc(s.ALWAYS);break;case Vl:s.depthFunc(s.LESS);break;case Bs:s.depthFunc(s.LEQUAL);break;case Wl:s.depthFunc(s.EQUAL);break;case Xl:s.depthFunc(s.GEQUAL);break;case jl:s.depthFunc(s.GREATER);break;case ql:s.depthFunc(s.NOTEQUAL);break;default:s.depthFunc(s.LEQUAL)}le=we}},setLocked:function(we){L=we},setClear:function(we){Ce!==we&&(s.clearDepth(we),Ce=we)},reset:function(){L=!1,ae=null,le=null,Ce=null}}}function a(){let L=!1,ae=null,le=null,Ce=null,we=null,qe=null,Ye=null,at=null,ut=null;return{setTest:function(Ze){L||(Ze?Pe(s.STENCIL_TEST):Ae(s.STENCIL_TEST))},setMask:function(Ze){ae!==Ze&&!L&&(s.stencilMask(Ze),ae=Ze)},setFunc:function(Ze,pt,on){(le!==Ze||Ce!==pt||we!==on)&&(s.stencilFunc(Ze,pt,on),le=Ze,Ce=pt,we=on)},setOp:function(Ze,pt,on){(qe!==Ze||Ye!==pt||at!==on)&&(s.stencilOp(Ze,pt,on),qe=Ze,Ye=pt,at=on)},setLocked:function(Ze){L=Ze},setClear:function(Ze){ut!==Ze&&(s.clearStencil(Ze),ut=Ze)},reset:function(){L=!1,ae=null,le=null,Ce=null,we=null,qe=null,Ye=null,at=null,ut=null}}}const o=new i,c=new r,l=new a,h=new WeakMap,u=new WeakMap;let f={},d={},g=new WeakMap,v=[],m=null,p=!1,y=null,_=null,S=null,R=null,T=null,w=null,O=null,M=new Ue(0,0,0),A=0,U=!1,G=null,j=null,D=null,I=null,H=null;const q=s.getParameter(s.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let Y=!1,Z=0;const K=s.getParameter(s.VERSION);K.indexOf("WebGL")!==-1?(Z=parseFloat(/^WebGL (\d)/.exec(K)[1]),Y=Z>=1):K.indexOf("OpenGL ES")!==-1&&(Z=parseFloat(/^OpenGL ES (\d)/.exec(K)[1]),Y=Z>=2);let se=null,oe={};const X=s.getParameter(s.SCISSOR_BOX),J=s.getParameter(s.VIEWPORT),he=new Mt().fromArray(X),xe=new Mt().fromArray(J);function ve(L,ae,le,Ce){const we=new Uint8Array(4),qe=s.createTexture();s.bindTexture(L,qe),s.texParameteri(L,s.TEXTURE_MIN_FILTER,s.NEAREST),s.texParameteri(L,s.TEXTURE_MAG_FILTER,s.NEAREST);for(let Ye=0;Ye<le;Ye++)n&&(L===s.TEXTURE_3D||L===s.TEXTURE_2D_ARRAY)?s.texImage3D(ae,0,s.RGBA,1,1,Ce,0,s.RGBA,s.UNSIGNED_BYTE,we):s.texImage2D(ae+Ye,0,s.RGBA,1,1,0,s.RGBA,s.UNSIGNED_BYTE,we);return qe}const Le={};Le[s.TEXTURE_2D]=ve(s.TEXTURE_2D,s.TEXTURE_2D,1),Le[s.TEXTURE_CUBE_MAP]=ve(s.TEXTURE_CUBE_MAP,s.TEXTURE_CUBE_MAP_POSITIVE_X,6),n&&(Le[s.TEXTURE_2D_ARRAY]=ve(s.TEXTURE_2D_ARRAY,s.TEXTURE_2D_ARRAY,1,1),Le[s.TEXTURE_3D]=ve(s.TEXTURE_3D,s.TEXTURE_3D,1,1)),o.setClear(0,0,0,1),c.setClear(1),l.setClear(0),Pe(s.DEPTH_TEST),c.setFunc(Bs),Fe(!1),C(Oa),Pe(s.CULL_FACE),_e(Dn);function Pe(L){f[L]!==!0&&(s.enable(L),f[L]=!0)}function Ae(L){f[L]!==!1&&(s.disable(L),f[L]=!1)}function je(L,ae){return d[L]!==ae?(s.bindFramebuffer(L,ae),d[L]=ae,n&&(L===s.DRAW_FRAMEBUFFER&&(d[s.FRAMEBUFFER]=ae),L===s.FRAMEBUFFER&&(d[s.DRAW_FRAMEBUFFER]=ae)),!0):!1}function z(L,ae){let le=v,Ce=!1;if(L)if(le=g.get(ae),le===void 0&&(le=[],g.set(ae,le)),L.isWebGLMultipleRenderTargets){const we=L.texture;if(le.length!==we.length||le[0]!==s.COLOR_ATTACHMENT0){for(let qe=0,Ye=we.length;qe<Ye;qe++)le[qe]=s.COLOR_ATTACHMENT0+qe;le.length=we.length,Ce=!0}}else le[0]!==s.COLOR_ATTACHMENT0&&(le[0]=s.COLOR_ATTACHMENT0,Ce=!0);else le[0]!==s.BACK&&(le[0]=s.BACK,Ce=!0);Ce&&(t.isWebGL2?s.drawBuffers(le):e.get("WEBGL_draw_buffers").drawBuffersWEBGL(le))}function bt(L){return m!==L?(s.useProgram(L),m=L,!0):!1}const Ee={[Xn]:s.FUNC_ADD,[Tl]:s.FUNC_SUBTRACT,[Al]:s.FUNC_REVERSE_SUBTRACT};if(n)Ee[Fa]=s.MIN,Ee[za]=s.MAX;else{const L=e.get("EXT_blend_minmax");L!==null&&(Ee[Fa]=L.MIN_EXT,Ee[za]=L.MAX_EXT)}const De={[Cl]:s.ZERO,[Rl]:s.ONE,[Pl]:s.SRC_COLOR,[Jr]:s.SRC_ALPHA,[Il]:s.SRC_ALPHA_SATURATE,[Nl]:s.DST_COLOR,[Dl]:s.DST_ALPHA,[Ll]:s.ONE_MINUS_SRC_COLOR,[Qr]:s.ONE_MINUS_SRC_ALPHA,[Ul]:s.ONE_MINUS_DST_COLOR,[Ol]:s.ONE_MINUS_DST_ALPHA,[Fl]:s.CONSTANT_COLOR,[zl]:s.ONE_MINUS_CONSTANT_COLOR,[Bl]:s.CONSTANT_ALPHA,[Gl]:s.ONE_MINUS_CONSTANT_ALPHA};function _e(L,ae,le,Ce,we,qe,Ye,at,ut,Ze){if(L===Dn){p===!0&&(Ae(s.BLEND),p=!1);return}if(p===!1&&(Pe(s.BLEND),p=!0),L!==wl){if(L!==y||Ze!==U){if((_!==Xn||T!==Xn)&&(s.blendEquation(s.FUNC_ADD),_=Xn,T=Xn),Ze)switch(L){case Ci:s.blendFuncSeparate(s.ONE,s.ONE_MINUS_SRC_ALPHA,s.ONE,s.ONE_MINUS_SRC_ALPHA);break;case Na:s.blendFunc(s.ONE,s.ONE);break;case Ua:s.blendFuncSeparate(s.ZERO,s.ONE_MINUS_SRC_COLOR,s.ZERO,s.ONE);break;case Ia:s.blendFuncSeparate(s.ZERO,s.SRC_COLOR,s.ZERO,s.SRC_ALPHA);break;default:console.error("THREE.WebGLState: Invalid blending: ",L);break}else switch(L){case Ci:s.blendFuncSeparate(s.SRC_ALPHA,s.ONE_MINUS_SRC_ALPHA,s.ONE,s.ONE_MINUS_SRC_ALPHA);break;case Na:s.blendFunc(s.SRC_ALPHA,s.ONE);break;case Ua:s.blendFuncSeparate(s.ZERO,s.ONE_MINUS_SRC_COLOR,s.ZERO,s.ONE);break;case Ia:s.blendFunc(s.ZERO,s.SRC_COLOR);break;default:console.error("THREE.WebGLState: Invalid blending: ",L);break}S=null,R=null,w=null,O=null,M.set(0,0,0),A=0,y=L,U=Ze}return}we=we||ae,qe=qe||le,Ye=Ye||Ce,(ae!==_||we!==T)&&(s.blendEquationSeparate(Ee[ae],Ee[we]),_=ae,T=we),(le!==S||Ce!==R||qe!==w||Ye!==O)&&(s.blendFuncSeparate(De[le],De[Ce],De[qe],De[Ye]),S=le,R=Ce,w=qe,O=Ye),(at.equals(M)===!1||ut!==A)&&(s.blendColor(at.r,at.g,at.b,ut),M.copy(at),A=ut),y=L,U=!1}function tt(L,ae){L.side===jt?Ae(s.CULL_FACE):Pe(s.CULL_FACE);let le=L.side===kt;ae&&(le=!le),Fe(le),L.blending===Ci&&L.transparent===!1?_e(Dn):_e(L.blending,L.blendEquation,L.blendSrc,L.blendDst,L.blendEquationAlpha,L.blendSrcAlpha,L.blendDstAlpha,L.blendColor,L.blendAlpha,L.premultipliedAlpha),c.setFunc(L.depthFunc),c.setTest(L.depthTest),c.setMask(L.depthWrite),o.setMask(L.colorWrite);const Ce=L.stencilWrite;l.setTest(Ce),Ce&&(l.setMask(L.stencilWriteMask),l.setFunc(L.stencilFunc,L.stencilRef,L.stencilFuncMask),l.setOp(L.stencilFail,L.stencilZFail,L.stencilZPass)),F(L.polygonOffset,L.polygonOffsetFactor,L.polygonOffsetUnits),L.alphaToCoverage===!0?Pe(s.SAMPLE_ALPHA_TO_COVERAGE):Ae(s.SAMPLE_ALPHA_TO_COVERAGE)}function Fe(L){G!==L&&(L?s.frontFace(s.CW):s.frontFace(s.CCW),G=L)}function C(L){L!==bl?(Pe(s.CULL_FACE),L!==j&&(L===Oa?s.cullFace(s.BACK):L===El?s.cullFace(s.FRONT):s.cullFace(s.FRONT_AND_BACK))):Ae(s.CULL_FACE),j=L}function b(L){L!==D&&(Y&&s.lineWidth(L),D=L)}function F(L,ae,le){L?(Pe(s.POLYGON_OFFSET_FILL),(I!==ae||H!==le)&&(s.polygonOffset(ae,le),I=ae,H=le)):Ae(s.POLYGON_OFFSET_FILL)}function ne(L){L?Pe(s.SCISSOR_TEST):Ae(s.SCISSOR_TEST)}function ee(L){L===void 0&&(L=s.TEXTURE0+q-1),se!==L&&(s.activeTexture(L),se=L)}function ie(L,ae,le){le===void 0&&(se===null?le=s.TEXTURE0+q-1:le=se);let Ce=oe[le];Ce===void 0&&(Ce={type:void 0,texture:void 0},oe[le]=Ce),(Ce.type!==L||Ce.texture!==ae)&&(se!==le&&(s.activeTexture(le),se=le),s.bindTexture(L,ae||Le[L]),Ce.type=L,Ce.texture=ae)}function ye(){const L=oe[se];L!==void 0&&L.type!==void 0&&(s.bindTexture(L.type,null),L.type=void 0,L.texture=void 0)}function ue(){try{s.compressedTexImage2D.apply(s,arguments)}catch(L){console.error("THREE.WebGLState:",L)}}function ge(){try{s.compressedTexImage3D.apply(s,arguments)}catch(L){console.error("THREE.WebGLState:",L)}}function Te(){try{s.texSubImage2D.apply(s,arguments)}catch(L){console.error("THREE.WebGLState:",L)}}function ze(){try{s.texSubImage3D.apply(s,arguments)}catch(L){console.error("THREE.WebGLState:",L)}}function Q(){try{s.compressedTexSubImage2D.apply(s,arguments)}catch(L){console.error("THREE.WebGLState:",L)}}function $e(){try{s.compressedTexSubImage3D.apply(s,arguments)}catch(L){console.error("THREE.WebGLState:",L)}}function ke(){try{s.texStorage2D.apply(s,arguments)}catch(L){console.error("THREE.WebGLState:",L)}}function Oe(){try{s.texStorage3D.apply(s,arguments)}catch(L){console.error("THREE.WebGLState:",L)}}function be(){try{s.texImage2D.apply(s,arguments)}catch(L){console.error("THREE.WebGLState:",L)}}function de(){try{s.texImage3D.apply(s,arguments)}catch(L){console.error("THREE.WebGLState:",L)}}function P(L){he.equals(L)===!1&&(s.scissor(L.x,L.y,L.z,L.w),he.copy(L))}function re(L){xe.equals(L)===!1&&(s.viewport(L.x,L.y,L.z,L.w),xe.copy(L))}function Se(L,ae){let le=u.get(ae);le===void 0&&(le=new WeakMap,u.set(ae,le));let Ce=le.get(L);Ce===void 0&&(Ce=s.getUniformBlockIndex(ae,L.name),le.set(L,Ce))}function me(L,ae){const Ce=u.get(ae).get(L);h.get(ae)!==Ce&&(s.uniformBlockBinding(ae,Ce,L.__bindingPointIndex),h.set(ae,Ce))}function te(){s.disable(s.BLEND),s.disable(s.CULL_FACE),s.disable(s.DEPTH_TEST),s.disable(s.POLYGON_OFFSET_FILL),s.disable(s.SCISSOR_TEST),s.disable(s.STENCIL_TEST),s.disable(s.SAMPLE_ALPHA_TO_COVERAGE),s.blendEquation(s.FUNC_ADD),s.blendFunc(s.ONE,s.ZERO),s.blendFuncSeparate(s.ONE,s.ZERO,s.ONE,s.ZERO),s.blendColor(0,0,0,0),s.colorMask(!0,!0,!0,!0),s.clearColor(0,0,0,0),s.depthMask(!0),s.depthFunc(s.LESS),s.clearDepth(1),s.stencilMask(4294967295),s.stencilFunc(s.ALWAYS,0,4294967295),s.stencilOp(s.KEEP,s.KEEP,s.KEEP),s.clearStencil(0),s.cullFace(s.BACK),s.frontFace(s.CCW),s.polygonOffset(0,0),s.activeTexture(s.TEXTURE0),s.bindFramebuffer(s.FRAMEBUFFER,null),n===!0&&(s.bindFramebuffer(s.DRAW_FRAMEBUFFER,null),s.bindFramebuffer(s.READ_FRAMEBUFFER,null)),s.useProgram(null),s.lineWidth(1),s.scissor(0,0,s.canvas.width,s.canvas.height),s.viewport(0,0,s.canvas.width,s.canvas.height),f={},se=null,oe={},d={},g=new WeakMap,v=[],m=null,p=!1,y=null,_=null,S=null,R=null,T=null,w=null,O=null,M=new Ue(0,0,0),A=0,U=!1,G=null,j=null,D=null,I=null,H=null,he.set(0,0,s.canvas.width,s.canvas.height),xe.set(0,0,s.canvas.width,s.canvas.height),o.reset(),c.reset(),l.reset()}return{buffers:{color:o,depth:c,stencil:l},enable:Pe,disable:Ae,bindFramebuffer:je,drawBuffers:z,useProgram:bt,setBlending:_e,setMaterial:tt,setFlipSided:Fe,setCullFace:C,setLineWidth:b,setPolygonOffset:F,setScissorTest:ne,activeTexture:ee,bindTexture:ie,unbindTexture:ye,compressedTexImage2D:ue,compressedTexImage3D:ge,texImage2D:be,texImage3D:de,updateUBOMapping:Se,uniformBlockBinding:me,texStorage2D:ke,texStorage3D:Oe,texSubImage2D:Te,texSubImage3D:ze,compressedTexSubImage2D:Q,compressedTexSubImage3D:$e,scissor:P,viewport:re,reset:te}}function Mm(s,e,t,n,i,r,a){const o=i.isWebGL2,c=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,l=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),h=new WeakMap;let u;const f=new WeakMap;let d=!1;try{d=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function g(C,b){return d?new OffscreenCanvas(C,b):Ws("canvas")}function v(C,b,F,ne){let ee=1;if((C.width>ne||C.height>ne)&&(ee=ne/Math.max(C.width,C.height)),ee<1||b===!0)if(typeof HTMLImageElement<"u"&&C instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&C instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&C instanceof ImageBitmap){const ie=b?oa:Math.floor,ye=ie(ee*C.width),ue=ie(ee*C.height);u===void 0&&(u=g(ye,ue));const ge=F?g(ye,ue):u;return ge.width=ye,ge.height=ue,ge.getContext("2d").drawImage(C,0,0,ye,ue),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+C.width+"x"+C.height+") to ("+ye+"x"+ue+")."),ge}else return"data"in C&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+C.width+"x"+C.height+")."),C;return C}function m(C){return po(C.width)&&po(C.height)}function p(C){return o?!1:C.wrapS!==rn||C.wrapT!==rn||C.minFilter!==Ft&&C.minFilter!==Gt}function y(C,b){return C.generateMipmaps&&b&&C.minFilter!==Ft&&C.minFilter!==Gt}function _(C){s.generateMipmap(C)}function S(C,b,F,ne,ee=!1){if(o===!1)return b;if(C!==null){if(s[C]!==void 0)return s[C];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+C+"'")}let ie=b;if(b===s.RED&&(F===s.FLOAT&&(ie=s.R32F),F===s.HALF_FLOAT&&(ie=s.R16F),F===s.UNSIGNED_BYTE&&(ie=s.R8)),b===s.RED_INTEGER&&(F===s.UNSIGNED_BYTE&&(ie=s.R8UI),F===s.UNSIGNED_SHORT&&(ie=s.R16UI),F===s.UNSIGNED_INT&&(ie=s.R32UI),F===s.BYTE&&(ie=s.R8I),F===s.SHORT&&(ie=s.R16I),F===s.INT&&(ie=s.R32I)),b===s.RG&&(F===s.FLOAT&&(ie=s.RG32F),F===s.HALF_FLOAT&&(ie=s.RG16F),F===s.UNSIGNED_BYTE&&(ie=s.RG8)),b===s.RGBA){const ye=ee?Gs:Je.getTransfer(ne);F===s.FLOAT&&(ie=s.RGBA32F),F===s.HALF_FLOAT&&(ie=s.RGBA16F),F===s.UNSIGNED_BYTE&&(ie=ye===nt?s.SRGB8_ALPHA8:s.RGBA8),F===s.UNSIGNED_SHORT_4_4_4_4&&(ie=s.RGBA4),F===s.UNSIGNED_SHORT_5_5_5_1&&(ie=s.RGB5_A1)}return(ie===s.R16F||ie===s.R32F||ie===s.RG16F||ie===s.RG32F||ie===s.RGBA16F||ie===s.RGBA32F)&&e.get("EXT_color_buffer_float"),ie}function R(C,b,F){return y(C,F)===!0||C.isFramebufferTexture&&C.minFilter!==Ft&&C.minFilter!==Gt?Math.log2(Math.max(b.width,b.height))+1:C.mipmaps!==void 0&&C.mipmaps.length>0?C.mipmaps.length:C.isCompressedTexture&&Array.isArray(C.image)?b.mipmaps.length:1}function T(C){return C===Ft||C===Ba||C===or?s.NEAREST:s.LINEAR}function w(C){const b=C.target;b.removeEventListener("dispose",w),M(b),b.isVideoTexture&&h.delete(b)}function O(C){const b=C.target;b.removeEventListener("dispose",O),U(b)}function M(C){const b=n.get(C);if(b.__webglInit===void 0)return;const F=C.source,ne=f.get(F);if(ne){const ee=ne[b.__cacheKey];ee.usedTimes--,ee.usedTimes===0&&A(C),Object.keys(ne).length===0&&f.delete(F)}n.remove(C)}function A(C){const b=n.get(C);s.deleteTexture(b.__webglTexture);const F=C.source,ne=f.get(F);delete ne[b.__cacheKey],a.memory.textures--}function U(C){const b=C.texture,F=n.get(C),ne=n.get(b);if(ne.__webglTexture!==void 0&&(s.deleteTexture(ne.__webglTexture),a.memory.textures--),C.depthTexture&&C.depthTexture.dispose(),C.isWebGLCubeRenderTarget)for(let ee=0;ee<6;ee++){if(Array.isArray(F.__webglFramebuffer[ee]))for(let ie=0;ie<F.__webglFramebuffer[ee].length;ie++)s.deleteFramebuffer(F.__webglFramebuffer[ee][ie]);else s.deleteFramebuffer(F.__webglFramebuffer[ee]);F.__webglDepthbuffer&&s.deleteRenderbuffer(F.__webglDepthbuffer[ee])}else{if(Array.isArray(F.__webglFramebuffer))for(let ee=0;ee<F.__webglFramebuffer.length;ee++)s.deleteFramebuffer(F.__webglFramebuffer[ee]);else s.deleteFramebuffer(F.__webglFramebuffer);if(F.__webglDepthbuffer&&s.deleteRenderbuffer(F.__webglDepthbuffer),F.__webglMultisampledFramebuffer&&s.deleteFramebuffer(F.__webglMultisampledFramebuffer),F.__webglColorRenderbuffer)for(let ee=0;ee<F.__webglColorRenderbuffer.length;ee++)F.__webglColorRenderbuffer[ee]&&s.deleteRenderbuffer(F.__webglColorRenderbuffer[ee]);F.__webglDepthRenderbuffer&&s.deleteRenderbuffer(F.__webglDepthRenderbuffer)}if(C.isWebGLMultipleRenderTargets)for(let ee=0,ie=b.length;ee<ie;ee++){const ye=n.get(b[ee]);ye.__webglTexture&&(s.deleteTexture(ye.__webglTexture),a.memory.textures--),n.remove(b[ee])}n.remove(b),n.remove(C)}let G=0;function j(){G=0}function D(){const C=G;return C>=i.maxTextures&&console.warn("THREE.WebGLTextures: Trying to use "+C+" texture units while this GPU supports only "+i.maxTextures),G+=1,C}function I(C){const b=[];return b.push(C.wrapS),b.push(C.wrapT),b.push(C.wrapR||0),b.push(C.magFilter),b.push(C.minFilter),b.push(C.anisotropy),b.push(C.internalFormat),b.push(C.format),b.push(C.type),b.push(C.generateMipmaps),b.push(C.premultiplyAlpha),b.push(C.flipY),b.push(C.unpackAlignment),b.push(C.colorSpace),b.join()}function H(C,b){const F=n.get(C);if(C.isVideoTexture&&tt(C),C.isRenderTargetTexture===!1&&C.version>0&&F.__version!==C.version){const ne=C.image;if(ne===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(ne.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{he(F,C,b);return}}t.bindTexture(s.TEXTURE_2D,F.__webglTexture,s.TEXTURE0+b)}function q(C,b){const F=n.get(C);if(C.version>0&&F.__version!==C.version){he(F,C,b);return}t.bindTexture(s.TEXTURE_2D_ARRAY,F.__webglTexture,s.TEXTURE0+b)}function Y(C,b){const F=n.get(C);if(C.version>0&&F.__version!==C.version){he(F,C,b);return}t.bindTexture(s.TEXTURE_3D,F.__webglTexture,s.TEXTURE0+b)}function Z(C,b){const F=n.get(C);if(C.version>0&&F.__version!==C.version){xe(F,C,b);return}t.bindTexture(s.TEXTURE_CUBE_MAP,F.__webglTexture,s.TEXTURE0+b)}const K={[na]:s.REPEAT,[rn]:s.CLAMP_TO_EDGE,[ia]:s.MIRRORED_REPEAT},se={[Ft]:s.NEAREST,[Ba]:s.NEAREST_MIPMAP_NEAREST,[or]:s.NEAREST_MIPMAP_LINEAR,[Gt]:s.LINEAR,[nh]:s.LINEAR_MIPMAP_NEAREST,[Zi]:s.LINEAR_MIPMAP_LINEAR},oe={[ph]:s.NEVER,[yh]:s.ALWAYS,[mh]:s.LESS,[Fc]:s.LEQUAL,[gh]:s.EQUAL,[xh]:s.GEQUAL,[vh]:s.GREATER,[_h]:s.NOTEQUAL};function X(C,b,F){if(F?(s.texParameteri(C,s.TEXTURE_WRAP_S,K[b.wrapS]),s.texParameteri(C,s.TEXTURE_WRAP_T,K[b.wrapT]),(C===s.TEXTURE_3D||C===s.TEXTURE_2D_ARRAY)&&s.texParameteri(C,s.TEXTURE_WRAP_R,K[b.wrapR]),s.texParameteri(C,s.TEXTURE_MAG_FILTER,se[b.magFilter]),s.texParameteri(C,s.TEXTURE_MIN_FILTER,se[b.minFilter])):(s.texParameteri(C,s.TEXTURE_WRAP_S,s.CLAMP_TO_EDGE),s.texParameteri(C,s.TEXTURE_WRAP_T,s.CLAMP_TO_EDGE),(C===s.TEXTURE_3D||C===s.TEXTURE_2D_ARRAY)&&s.texParameteri(C,s.TEXTURE_WRAP_R,s.CLAMP_TO_EDGE),(b.wrapS!==rn||b.wrapT!==rn)&&console.warn("THREE.WebGLRenderer: Texture is not power of two. Texture.wrapS and Texture.wrapT should be set to THREE.ClampToEdgeWrapping."),s.texParameteri(C,s.TEXTURE_MAG_FILTER,T(b.magFilter)),s.texParameteri(C,s.TEXTURE_MIN_FILTER,T(b.minFilter)),b.minFilter!==Ft&&b.minFilter!==Gt&&console.warn("THREE.WebGLRenderer: Texture is not power of two. Texture.minFilter should be set to THREE.NearestFilter or THREE.LinearFilter.")),b.compareFunction&&(s.texParameteri(C,s.TEXTURE_COMPARE_MODE,s.COMPARE_REF_TO_TEXTURE),s.texParameteri(C,s.TEXTURE_COMPARE_FUNC,oe[b.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){const ne=e.get("EXT_texture_filter_anisotropic");if(b.magFilter===Ft||b.minFilter!==or&&b.minFilter!==Zi||b.type===Pn&&e.has("OES_texture_float_linear")===!1||o===!1&&b.type===$i&&e.has("OES_texture_half_float_linear")===!1)return;(b.anisotropy>1||n.get(b).__currentAnisotropy)&&(s.texParameterf(C,ne.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(b.anisotropy,i.getMaxAnisotropy())),n.get(b).__currentAnisotropy=b.anisotropy)}}function J(C,b){let F=!1;C.__webglInit===void 0&&(C.__webglInit=!0,b.addEventListener("dispose",w));const ne=b.source;let ee=f.get(ne);ee===void 0&&(ee={},f.set(ne,ee));const ie=I(b);if(ie!==C.__cacheKey){ee[ie]===void 0&&(ee[ie]={texture:s.createTexture(),usedTimes:0},a.memory.textures++,F=!0),ee[ie].usedTimes++;const ye=ee[C.__cacheKey];ye!==void 0&&(ee[C.__cacheKey].usedTimes--,ye.usedTimes===0&&A(b)),C.__cacheKey=ie,C.__webglTexture=ee[ie].texture}return F}function he(C,b,F){let ne=s.TEXTURE_2D;(b.isDataArrayTexture||b.isCompressedArrayTexture)&&(ne=s.TEXTURE_2D_ARRAY),b.isData3DTexture&&(ne=s.TEXTURE_3D);const ee=J(C,b),ie=b.source;t.bindTexture(ne,C.__webglTexture,s.TEXTURE0+F);const ye=n.get(ie);if(ie.version!==ye.__version||ee===!0){t.activeTexture(s.TEXTURE0+F);const ue=Je.getPrimaries(Je.workingColorSpace),ge=b.colorSpace===Kt?null:Je.getPrimaries(b.colorSpace),Te=b.colorSpace===Kt||ue===ge?s.NONE:s.BROWSER_DEFAULT_WEBGL;s.pixelStorei(s.UNPACK_FLIP_Y_WEBGL,b.flipY),s.pixelStorei(s.UNPACK_PREMULTIPLY_ALPHA_WEBGL,b.premultiplyAlpha),s.pixelStorei(s.UNPACK_ALIGNMENT,b.unpackAlignment),s.pixelStorei(s.UNPACK_COLORSPACE_CONVERSION_WEBGL,Te);const ze=p(b)&&m(b.image)===!1;let Q=v(b.image,ze,!1,i.maxTextureSize);Q=Fe(b,Q);const $e=m(Q)||o,ke=r.convert(b.format,b.colorSpace);let Oe=r.convert(b.type),be=S(b.internalFormat,ke,Oe,b.colorSpace,b.isVideoTexture);X(ne,b,$e);let de;const P=b.mipmaps,re=o&&b.isVideoTexture!==!0&&be!==Nc,Se=ye.__version===void 0||ee===!0,me=R(b,Q,$e);if(b.isDepthTexture)be=s.DEPTH_COMPONENT,o?b.type===Pn?be=s.DEPTH_COMPONENT32F:b.type===Rn?be=s.DEPTH_COMPONENT24:b.type===qn?be=s.DEPTH24_STENCIL8:be=s.DEPTH_COMPONENT16:b.type===Pn&&console.error("WebGLRenderer: Floating point depth texture requires WebGL2."),b.format===Yn&&be===s.DEPTH_COMPONENT&&b.type!==fa&&b.type!==Rn&&(console.warn("THREE.WebGLRenderer: Use UnsignedShortType or UnsignedIntType for DepthFormat DepthTexture."),b.type=Rn,Oe=r.convert(b.type)),b.format===Oi&&be===s.DEPTH_COMPONENT&&(be=s.DEPTH_STENCIL,b.type!==qn&&(console.warn("THREE.WebGLRenderer: Use UnsignedInt248Type for DepthStencilFormat DepthTexture."),b.type=qn,Oe=r.convert(b.type))),Se&&(re?t.texStorage2D(s.TEXTURE_2D,1,be,Q.width,Q.height):t.texImage2D(s.TEXTURE_2D,0,be,Q.width,Q.height,0,ke,Oe,null));else if(b.isDataTexture)if(P.length>0&&$e){re&&Se&&t.texStorage2D(s.TEXTURE_2D,me,be,P[0].width,P[0].height);for(let te=0,L=P.length;te<L;te++)de=P[te],re?t.texSubImage2D(s.TEXTURE_2D,te,0,0,de.width,de.height,ke,Oe,de.data):t.texImage2D(s.TEXTURE_2D,te,be,de.width,de.height,0,ke,Oe,de.data);b.generateMipmaps=!1}else re?(Se&&t.texStorage2D(s.TEXTURE_2D,me,be,Q.width,Q.height),t.texSubImage2D(s.TEXTURE_2D,0,0,0,Q.width,Q.height,ke,Oe,Q.data)):t.texImage2D(s.TEXTURE_2D,0,be,Q.width,Q.height,0,ke,Oe,Q.data);else if(b.isCompressedTexture)if(b.isCompressedArrayTexture){re&&Se&&t.texStorage3D(s.TEXTURE_2D_ARRAY,me,be,P[0].width,P[0].height,Q.depth);for(let te=0,L=P.length;te<L;te++)de=P[te],b.format!==an?ke!==null?re?t.compressedTexSubImage3D(s.TEXTURE_2D_ARRAY,te,0,0,0,de.width,de.height,Q.depth,ke,de.data,0,0):t.compressedTexImage3D(s.TEXTURE_2D_ARRAY,te,be,de.width,de.height,Q.depth,0,de.data,0,0):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):re?t.texSubImage3D(s.TEXTURE_2D_ARRAY,te,0,0,0,de.width,de.height,Q.depth,ke,Oe,de.data):t.texImage3D(s.TEXTURE_2D_ARRAY,te,be,de.width,de.height,Q.depth,0,ke,Oe,de.data)}else{re&&Se&&t.texStorage2D(s.TEXTURE_2D,me,be,P[0].width,P[0].height);for(let te=0,L=P.length;te<L;te++)de=P[te],b.format!==an?ke!==null?re?t.compressedTexSubImage2D(s.TEXTURE_2D,te,0,0,de.width,de.height,ke,de.data):t.compressedTexImage2D(s.TEXTURE_2D,te,be,de.width,de.height,0,de.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):re?t.texSubImage2D(s.TEXTURE_2D,te,0,0,de.width,de.height,ke,Oe,de.data):t.texImage2D(s.TEXTURE_2D,te,be,de.width,de.height,0,ke,Oe,de.data)}else if(b.isDataArrayTexture)re?(Se&&t.texStorage3D(s.TEXTURE_2D_ARRAY,me,be,Q.width,Q.height,Q.depth),t.texSubImage3D(s.TEXTURE_2D_ARRAY,0,0,0,0,Q.width,Q.height,Q.depth,ke,Oe,Q.data)):t.texImage3D(s.TEXTURE_2D_ARRAY,0,be,Q.width,Q.height,Q.depth,0,ke,Oe,Q.data);else if(b.isData3DTexture)re?(Se&&t.texStorage3D(s.TEXTURE_3D,me,be,Q.width,Q.height,Q.depth),t.texSubImage3D(s.TEXTURE_3D,0,0,0,0,Q.width,Q.height,Q.depth,ke,Oe,Q.data)):t.texImage3D(s.TEXTURE_3D,0,be,Q.width,Q.height,Q.depth,0,ke,Oe,Q.data);else if(b.isFramebufferTexture){if(Se)if(re)t.texStorage2D(s.TEXTURE_2D,me,be,Q.width,Q.height);else{let te=Q.width,L=Q.height;for(let ae=0;ae<me;ae++)t.texImage2D(s.TEXTURE_2D,ae,be,te,L,0,ke,Oe,null),te>>=1,L>>=1}}else if(P.length>0&&$e){re&&Se&&t.texStorage2D(s.TEXTURE_2D,me,be,P[0].width,P[0].height);for(let te=0,L=P.length;te<L;te++)de=P[te],re?t.texSubImage2D(s.TEXTURE_2D,te,0,0,ke,Oe,de):t.texImage2D(s.TEXTURE_2D,te,be,ke,Oe,de);b.generateMipmaps=!1}else re?(Se&&t.texStorage2D(s.TEXTURE_2D,me,be,Q.width,Q.height),t.texSubImage2D(s.TEXTURE_2D,0,0,0,ke,Oe,Q)):t.texImage2D(s.TEXTURE_2D,0,be,ke,Oe,Q);y(b,$e)&&_(ne),ye.__version=ie.version,b.onUpdate&&b.onUpdate(b)}C.__version=b.version}function xe(C,b,F){if(b.image.length!==6)return;const ne=J(C,b),ee=b.source;t.bindTexture(s.TEXTURE_CUBE_MAP,C.__webglTexture,s.TEXTURE0+F);const ie=n.get(ee);if(ee.version!==ie.__version||ne===!0){t.activeTexture(s.TEXTURE0+F);const ye=Je.getPrimaries(Je.workingColorSpace),ue=b.colorSpace===Kt?null:Je.getPrimaries(b.colorSpace),ge=b.colorSpace===Kt||ye===ue?s.NONE:s.BROWSER_DEFAULT_WEBGL;s.pixelStorei(s.UNPACK_FLIP_Y_WEBGL,b.flipY),s.pixelStorei(s.UNPACK_PREMULTIPLY_ALPHA_WEBGL,b.premultiplyAlpha),s.pixelStorei(s.UNPACK_ALIGNMENT,b.unpackAlignment),s.pixelStorei(s.UNPACK_COLORSPACE_CONVERSION_WEBGL,ge);const Te=b.isCompressedTexture||b.image[0].isCompressedTexture,ze=b.image[0]&&b.image[0].isDataTexture,Q=[];for(let te=0;te<6;te++)!Te&&!ze?Q[te]=v(b.image[te],!1,!0,i.maxCubemapSize):Q[te]=ze?b.image[te].image:b.image[te],Q[te]=Fe(b,Q[te]);const $e=Q[0],ke=m($e)||o,Oe=r.convert(b.format,b.colorSpace),be=r.convert(b.type),de=S(b.internalFormat,Oe,be,b.colorSpace),P=o&&b.isVideoTexture!==!0,re=ie.__version===void 0||ne===!0;let Se=R(b,$e,ke);X(s.TEXTURE_CUBE_MAP,b,ke);let me;if(Te){P&&re&&t.texStorage2D(s.TEXTURE_CUBE_MAP,Se,de,$e.width,$e.height);for(let te=0;te<6;te++){me=Q[te].mipmaps;for(let L=0;L<me.length;L++){const ae=me[L];b.format!==an?Oe!==null?P?t.compressedTexSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+te,L,0,0,ae.width,ae.height,Oe,ae.data):t.compressedTexImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+te,L,de,ae.width,ae.height,0,ae.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):P?t.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+te,L,0,0,ae.width,ae.height,Oe,be,ae.data):t.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+te,L,de,ae.width,ae.height,0,Oe,be,ae.data)}}}else{me=b.mipmaps,P&&re&&(me.length>0&&Se++,t.texStorage2D(s.TEXTURE_CUBE_MAP,Se,de,Q[0].width,Q[0].height));for(let te=0;te<6;te++)if(ze){P?t.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+te,0,0,0,Q[te].width,Q[te].height,Oe,be,Q[te].data):t.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+te,0,de,Q[te].width,Q[te].height,0,Oe,be,Q[te].data);for(let L=0;L<me.length;L++){const le=me[L].image[te].image;P?t.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+te,L+1,0,0,le.width,le.height,Oe,be,le.data):t.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+te,L+1,de,le.width,le.height,0,Oe,be,le.data)}}else{P?t.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+te,0,0,0,Oe,be,Q[te]):t.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+te,0,de,Oe,be,Q[te]);for(let L=0;L<me.length;L++){const ae=me[L];P?t.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+te,L+1,0,0,Oe,be,ae.image[te]):t.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+te,L+1,de,Oe,be,ae.image[te])}}}y(b,ke)&&_(s.TEXTURE_CUBE_MAP),ie.__version=ee.version,b.onUpdate&&b.onUpdate(b)}C.__version=b.version}function ve(C,b,F,ne,ee,ie){const ye=r.convert(F.format,F.colorSpace),ue=r.convert(F.type),ge=S(F.internalFormat,ye,ue,F.colorSpace);if(!n.get(b).__hasExternalTextures){const ze=Math.max(1,b.width>>ie),Q=Math.max(1,b.height>>ie);ee===s.TEXTURE_3D||ee===s.TEXTURE_2D_ARRAY?t.texImage3D(ee,ie,ge,ze,Q,b.depth,0,ye,ue,null):t.texImage2D(ee,ie,ge,ze,Q,0,ye,ue,null)}t.bindFramebuffer(s.FRAMEBUFFER,C),_e(b)?c.framebufferTexture2DMultisampleEXT(s.FRAMEBUFFER,ne,ee,n.get(F).__webglTexture,0,De(b)):(ee===s.TEXTURE_2D||ee>=s.TEXTURE_CUBE_MAP_POSITIVE_X&&ee<=s.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&s.framebufferTexture2D(s.FRAMEBUFFER,ne,ee,n.get(F).__webglTexture,ie),t.bindFramebuffer(s.FRAMEBUFFER,null)}function Le(C,b,F){if(s.bindRenderbuffer(s.RENDERBUFFER,C),b.depthBuffer&&!b.stencilBuffer){let ne=o===!0?s.DEPTH_COMPONENT24:s.DEPTH_COMPONENT16;if(F||_e(b)){const ee=b.depthTexture;ee&&ee.isDepthTexture&&(ee.type===Pn?ne=s.DEPTH_COMPONENT32F:ee.type===Rn&&(ne=s.DEPTH_COMPONENT24));const ie=De(b);_e(b)?c.renderbufferStorageMultisampleEXT(s.RENDERBUFFER,ie,ne,b.width,b.height):s.renderbufferStorageMultisample(s.RENDERBUFFER,ie,ne,b.width,b.height)}else s.renderbufferStorage(s.RENDERBUFFER,ne,b.width,b.height);s.framebufferRenderbuffer(s.FRAMEBUFFER,s.DEPTH_ATTACHMENT,s.RENDERBUFFER,C)}else if(b.depthBuffer&&b.stencilBuffer){const ne=De(b);F&&_e(b)===!1?s.renderbufferStorageMultisample(s.RENDERBUFFER,ne,s.DEPTH24_STENCIL8,b.width,b.height):_e(b)?c.renderbufferStorageMultisampleEXT(s.RENDERBUFFER,ne,s.DEPTH24_STENCIL8,b.width,b.height):s.renderbufferStorage(s.RENDERBUFFER,s.DEPTH_STENCIL,b.width,b.height),s.framebufferRenderbuffer(s.FRAMEBUFFER,s.DEPTH_STENCIL_ATTACHMENT,s.RENDERBUFFER,C)}else{const ne=b.isWebGLMultipleRenderTargets===!0?b.texture:[b.texture];for(let ee=0;ee<ne.length;ee++){const ie=ne[ee],ye=r.convert(ie.format,ie.colorSpace),ue=r.convert(ie.type),ge=S(ie.internalFormat,ye,ue,ie.colorSpace),Te=De(b);F&&_e(b)===!1?s.renderbufferStorageMultisample(s.RENDERBUFFER,Te,ge,b.width,b.height):_e(b)?c.renderbufferStorageMultisampleEXT(s.RENDERBUFFER,Te,ge,b.width,b.height):s.renderbufferStorage(s.RENDERBUFFER,ge,b.width,b.height)}}s.bindRenderbuffer(s.RENDERBUFFER,null)}function Pe(C,b){if(b&&b.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(t.bindFramebuffer(s.FRAMEBUFFER,C),!(b.depthTexture&&b.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");(!n.get(b.depthTexture).__webglTexture||b.depthTexture.image.width!==b.width||b.depthTexture.image.height!==b.height)&&(b.depthTexture.image.width=b.width,b.depthTexture.image.height=b.height,b.depthTexture.needsUpdate=!0),H(b.depthTexture,0);const ne=n.get(b.depthTexture).__webglTexture,ee=De(b);if(b.depthTexture.format===Yn)_e(b)?c.framebufferTexture2DMultisampleEXT(s.FRAMEBUFFER,s.DEPTH_ATTACHMENT,s.TEXTURE_2D,ne,0,ee):s.framebufferTexture2D(s.FRAMEBUFFER,s.DEPTH_ATTACHMENT,s.TEXTURE_2D,ne,0);else if(b.depthTexture.format===Oi)_e(b)?c.framebufferTexture2DMultisampleEXT(s.FRAMEBUFFER,s.DEPTH_STENCIL_ATTACHMENT,s.TEXTURE_2D,ne,0,ee):s.framebufferTexture2D(s.FRAMEBUFFER,s.DEPTH_STENCIL_ATTACHMENT,s.TEXTURE_2D,ne,0);else throw new Error("Unknown depthTexture format")}function Ae(C){const b=n.get(C),F=C.isWebGLCubeRenderTarget===!0;if(C.depthTexture&&!b.__autoAllocateDepthBuffer){if(F)throw new Error("target.depthTexture not supported in Cube render targets");Pe(b.__webglFramebuffer,C)}else if(F){b.__webglDepthbuffer=[];for(let ne=0;ne<6;ne++)t.bindFramebuffer(s.FRAMEBUFFER,b.__webglFramebuffer[ne]),b.__webglDepthbuffer[ne]=s.createRenderbuffer(),Le(b.__webglDepthbuffer[ne],C,!1)}else t.bindFramebuffer(s.FRAMEBUFFER,b.__webglFramebuffer),b.__webglDepthbuffer=s.createRenderbuffer(),Le(b.__webglDepthbuffer,C,!1);t.bindFramebuffer(s.FRAMEBUFFER,null)}function je(C,b,F){const ne=n.get(C);b!==void 0&&ve(ne.__webglFramebuffer,C,C.texture,s.COLOR_ATTACHMENT0,s.TEXTURE_2D,0),F!==void 0&&Ae(C)}function z(C){const b=C.texture,F=n.get(C),ne=n.get(b);C.addEventListener("dispose",O),C.isWebGLMultipleRenderTargets!==!0&&(ne.__webglTexture===void 0&&(ne.__webglTexture=s.createTexture()),ne.__version=b.version,a.memory.textures++);const ee=C.isWebGLCubeRenderTarget===!0,ie=C.isWebGLMultipleRenderTargets===!0,ye=m(C)||o;if(ee){F.__webglFramebuffer=[];for(let ue=0;ue<6;ue++)if(o&&b.mipmaps&&b.mipmaps.length>0){F.__webglFramebuffer[ue]=[];for(let ge=0;ge<b.mipmaps.length;ge++)F.__webglFramebuffer[ue][ge]=s.createFramebuffer()}else F.__webglFramebuffer[ue]=s.createFramebuffer()}else{if(o&&b.mipmaps&&b.mipmaps.length>0){F.__webglFramebuffer=[];for(let ue=0;ue<b.mipmaps.length;ue++)F.__webglFramebuffer[ue]=s.createFramebuffer()}else F.__webglFramebuffer=s.createFramebuffer();if(ie)if(i.drawBuffers){const ue=C.texture;for(let ge=0,Te=ue.length;ge<Te;ge++){const ze=n.get(ue[ge]);ze.__webglTexture===void 0&&(ze.__webglTexture=s.createTexture(),a.memory.textures++)}}else console.warn("THREE.WebGLRenderer: WebGLMultipleRenderTargets can only be used with WebGL2 or WEBGL_draw_buffers extension.");if(o&&C.samples>0&&_e(C)===!1){const ue=ie?b:[b];F.__webglMultisampledFramebuffer=s.createFramebuffer(),F.__webglColorRenderbuffer=[],t.bindFramebuffer(s.FRAMEBUFFER,F.__webglMultisampledFramebuffer);for(let ge=0;ge<ue.length;ge++){const Te=ue[ge];F.__webglColorRenderbuffer[ge]=s.createRenderbuffer(),s.bindRenderbuffer(s.RENDERBUFFER,F.__webglColorRenderbuffer[ge]);const ze=r.convert(Te.format,Te.colorSpace),Q=r.convert(Te.type),$e=S(Te.internalFormat,ze,Q,Te.colorSpace,C.isXRRenderTarget===!0),ke=De(C);s.renderbufferStorageMultisample(s.RENDERBUFFER,ke,$e,C.width,C.height),s.framebufferRenderbuffer(s.FRAMEBUFFER,s.COLOR_ATTACHMENT0+ge,s.RENDERBUFFER,F.__webglColorRenderbuffer[ge])}s.bindRenderbuffer(s.RENDERBUFFER,null),C.depthBuffer&&(F.__webglDepthRenderbuffer=s.createRenderbuffer(),Le(F.__webglDepthRenderbuffer,C,!0)),t.bindFramebuffer(s.FRAMEBUFFER,null)}}if(ee){t.bindTexture(s.TEXTURE_CUBE_MAP,ne.__webglTexture),X(s.TEXTURE_CUBE_MAP,b,ye);for(let ue=0;ue<6;ue++)if(o&&b.mipmaps&&b.mipmaps.length>0)for(let ge=0;ge<b.mipmaps.length;ge++)ve(F.__webglFramebuffer[ue][ge],C,b,s.COLOR_ATTACHMENT0,s.TEXTURE_CUBE_MAP_POSITIVE_X+ue,ge);else ve(F.__webglFramebuffer[ue],C,b,s.COLOR_ATTACHMENT0,s.TEXTURE_CUBE_MAP_POSITIVE_X+ue,0);y(b,ye)&&_(s.TEXTURE_CUBE_MAP),t.unbindTexture()}else if(ie){const ue=C.texture;for(let ge=0,Te=ue.length;ge<Te;ge++){const ze=ue[ge],Q=n.get(ze);t.bindTexture(s.TEXTURE_2D,Q.__webglTexture),X(s.TEXTURE_2D,ze,ye),ve(F.__webglFramebuffer,C,ze,s.COLOR_ATTACHMENT0+ge,s.TEXTURE_2D,0),y(ze,ye)&&_(s.TEXTURE_2D)}t.unbindTexture()}else{let ue=s.TEXTURE_2D;if((C.isWebGL3DRenderTarget||C.isWebGLArrayRenderTarget)&&(o?ue=C.isWebGL3DRenderTarget?s.TEXTURE_3D:s.TEXTURE_2D_ARRAY:console.error("THREE.WebGLTextures: THREE.Data3DTexture and THREE.DataArrayTexture only supported with WebGL2.")),t.bindTexture(ue,ne.__webglTexture),X(ue,b,ye),o&&b.mipmaps&&b.mipmaps.length>0)for(let ge=0;ge<b.mipmaps.length;ge++)ve(F.__webglFramebuffer[ge],C,b,s.COLOR_ATTACHMENT0,ue,ge);else ve(F.__webglFramebuffer,C,b,s.COLOR_ATTACHMENT0,ue,0);y(b,ye)&&_(ue),t.unbindTexture()}C.depthBuffer&&Ae(C)}function bt(C){const b=m(C)||o,F=C.isWebGLMultipleRenderTargets===!0?C.texture:[C.texture];for(let ne=0,ee=F.length;ne<ee;ne++){const ie=F[ne];if(y(ie,b)){const ye=C.isWebGLCubeRenderTarget?s.TEXTURE_CUBE_MAP:s.TEXTURE_2D,ue=n.get(ie).__webglTexture;t.bindTexture(ye,ue),_(ye),t.unbindTexture()}}}function Ee(C){if(o&&C.samples>0&&_e(C)===!1){const b=C.isWebGLMultipleRenderTargets?C.texture:[C.texture],F=C.width,ne=C.height;let ee=s.COLOR_BUFFER_BIT;const ie=[],ye=C.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT,ue=n.get(C),ge=C.isWebGLMultipleRenderTargets===!0;if(ge)for(let Te=0;Te<b.length;Te++)t.bindFramebuffer(s.FRAMEBUFFER,ue.__webglMultisampledFramebuffer),s.framebufferRenderbuffer(s.FRAMEBUFFER,s.COLOR_ATTACHMENT0+Te,s.RENDERBUFFER,null),t.bindFramebuffer(s.FRAMEBUFFER,ue.__webglFramebuffer),s.framebufferTexture2D(s.DRAW_FRAMEBUFFER,s.COLOR_ATTACHMENT0+Te,s.TEXTURE_2D,null,0);t.bindFramebuffer(s.READ_FRAMEBUFFER,ue.__webglMultisampledFramebuffer),t.bindFramebuffer(s.DRAW_FRAMEBUFFER,ue.__webglFramebuffer);for(let Te=0;Te<b.length;Te++){ie.push(s.COLOR_ATTACHMENT0+Te),C.depthBuffer&&ie.push(ye);const ze=ue.__ignoreDepthValues!==void 0?ue.__ignoreDepthValues:!1;if(ze===!1&&(C.depthBuffer&&(ee|=s.DEPTH_BUFFER_BIT),C.stencilBuffer&&(ee|=s.STENCIL_BUFFER_BIT)),ge&&s.framebufferRenderbuffer(s.READ_FRAMEBUFFER,s.COLOR_ATTACHMENT0,s.RENDERBUFFER,ue.__webglColorRenderbuffer[Te]),ze===!0&&(s.invalidateFramebuffer(s.READ_FRAMEBUFFER,[ye]),s.invalidateFramebuffer(s.DRAW_FRAMEBUFFER,[ye])),ge){const Q=n.get(b[Te]).__webglTexture;s.framebufferTexture2D(s.DRAW_FRAMEBUFFER,s.COLOR_ATTACHMENT0,s.TEXTURE_2D,Q,0)}s.blitFramebuffer(0,0,F,ne,0,0,F,ne,ee,s.NEAREST),l&&s.invalidateFramebuffer(s.READ_FRAMEBUFFER,ie)}if(t.bindFramebuffer(s.READ_FRAMEBUFFER,null),t.bindFramebuffer(s.DRAW_FRAMEBUFFER,null),ge)for(let Te=0;Te<b.length;Te++){t.bindFramebuffer(s.FRAMEBUFFER,ue.__webglMultisampledFramebuffer),s.framebufferRenderbuffer(s.FRAMEBUFFER,s.COLOR_ATTACHMENT0+Te,s.RENDERBUFFER,ue.__webglColorRenderbuffer[Te]);const ze=n.get(b[Te]).__webglTexture;t.bindFramebuffer(s.FRAMEBUFFER,ue.__webglFramebuffer),s.framebufferTexture2D(s.DRAW_FRAMEBUFFER,s.COLOR_ATTACHMENT0+Te,s.TEXTURE_2D,ze,0)}t.bindFramebuffer(s.DRAW_FRAMEBUFFER,ue.__webglMultisampledFramebuffer)}}function De(C){return Math.min(i.maxSamples,C.samples)}function _e(C){const b=n.get(C);return o&&C.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&b.__useRenderToTexture!==!1}function tt(C){const b=a.render.frame;h.get(C)!==b&&(h.set(C,b),C.update())}function Fe(C,b){const F=C.colorSpace,ne=C.format,ee=C.type;return C.isCompressedTexture===!0||C.isVideoTexture===!0||C.format===ra||F!==bn&&F!==Kt&&(Je.getTransfer(F)===nt?o===!1?e.has("EXT_sRGB")===!0&&ne===an?(C.format=ra,C.minFilter=Gt,C.generateMipmaps=!1):b=Bc.sRGBToLinear(b):(ne!==an||ee!==Nn)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",F)),b}this.allocateTextureUnit=D,this.resetTextureUnits=j,this.setTexture2D=H,this.setTexture2DArray=q,this.setTexture3D=Y,this.setTextureCube=Z,this.rebindTextures=je,this.setupRenderTarget=z,this.updateRenderTargetMipmap=bt,this.updateMultisampleRenderTarget=Ee,this.setupDepthRenderbuffer=Ae,this.setupFrameBufferTexture=ve,this.useMultisampledRTT=_e}function bm(s,e,t){const n=t.isWebGL2;function i(r,a=Kt){let o;const c=Je.getTransfer(a);if(r===Nn)return s.UNSIGNED_BYTE;if(r===Rc)return s.UNSIGNED_SHORT_4_4_4_4;if(r===Pc)return s.UNSIGNED_SHORT_5_5_5_1;if(r===ih)return s.BYTE;if(r===sh)return s.SHORT;if(r===fa)return s.UNSIGNED_SHORT;if(r===Cc)return s.INT;if(r===Rn)return s.UNSIGNED_INT;if(r===Pn)return s.FLOAT;if(r===$i)return n?s.HALF_FLOAT:(o=e.get("OES_texture_half_float"),o!==null?o.HALF_FLOAT_OES:null);if(r===rh)return s.ALPHA;if(r===an)return s.RGBA;if(r===ah)return s.LUMINANCE;if(r===oh)return s.LUMINANCE_ALPHA;if(r===Yn)return s.DEPTH_COMPONENT;if(r===Oi)return s.DEPTH_STENCIL;if(r===ra)return o=e.get("EXT_sRGB"),o!==null?o.SRGB_ALPHA_EXT:null;if(r===ch)return s.RED;if(r===Lc)return s.RED_INTEGER;if(r===lh)return s.RG;if(r===Dc)return s.RG_INTEGER;if(r===Oc)return s.RGBA_INTEGER;if(r===cr||r===lr||r===hr||r===ur)if(c===nt)if(o=e.get("WEBGL_compressed_texture_s3tc_srgb"),o!==null){if(r===cr)return o.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(r===lr)return o.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(r===hr)return o.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(r===ur)return o.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(o=e.get("WEBGL_compressed_texture_s3tc"),o!==null){if(r===cr)return o.COMPRESSED_RGB_S3TC_DXT1_EXT;if(r===lr)return o.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(r===hr)return o.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(r===ur)return o.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(r===Ga||r===ka||r===Ha||r===Va)if(o=e.get("WEBGL_compressed_texture_pvrtc"),o!==null){if(r===Ga)return o.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(r===ka)return o.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(r===Ha)return o.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(r===Va)return o.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(r===Nc)return o=e.get("WEBGL_compressed_texture_etc1"),o!==null?o.COMPRESSED_RGB_ETC1_WEBGL:null;if(r===Wa||r===Xa)if(o=e.get("WEBGL_compressed_texture_etc"),o!==null){if(r===Wa)return c===nt?o.COMPRESSED_SRGB8_ETC2:o.COMPRESSED_RGB8_ETC2;if(r===Xa)return c===nt?o.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:o.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(r===ja||r===qa||r===Ya||r===Za||r===$a||r===Ka||r===Ja||r===Qa||r===eo||r===to||r===no||r===io||r===so||r===ro)if(o=e.get("WEBGL_compressed_texture_astc"),o!==null){if(r===ja)return c===nt?o.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:o.COMPRESSED_RGBA_ASTC_4x4_KHR;if(r===qa)return c===nt?o.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:o.COMPRESSED_RGBA_ASTC_5x4_KHR;if(r===Ya)return c===nt?o.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:o.COMPRESSED_RGBA_ASTC_5x5_KHR;if(r===Za)return c===nt?o.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:o.COMPRESSED_RGBA_ASTC_6x5_KHR;if(r===$a)return c===nt?o.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:o.COMPRESSED_RGBA_ASTC_6x6_KHR;if(r===Ka)return c===nt?o.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:o.COMPRESSED_RGBA_ASTC_8x5_KHR;if(r===Ja)return c===nt?o.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:o.COMPRESSED_RGBA_ASTC_8x6_KHR;if(r===Qa)return c===nt?o.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:o.COMPRESSED_RGBA_ASTC_8x8_KHR;if(r===eo)return c===nt?o.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:o.COMPRESSED_RGBA_ASTC_10x5_KHR;if(r===to)return c===nt?o.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:o.COMPRESSED_RGBA_ASTC_10x6_KHR;if(r===no)return c===nt?o.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:o.COMPRESSED_RGBA_ASTC_10x8_KHR;if(r===io)return c===nt?o.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:o.COMPRESSED_RGBA_ASTC_10x10_KHR;if(r===so)return c===nt?o.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:o.COMPRESSED_RGBA_ASTC_12x10_KHR;if(r===ro)return c===nt?o.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:o.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(r===dr||r===ao||r===oo)if(o=e.get("EXT_texture_compression_bptc"),o!==null){if(r===dr)return c===nt?o.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:o.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(r===ao)return o.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(r===oo)return o.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(r===hh||r===co||r===lo||r===ho)if(o=e.get("EXT_texture_compression_rgtc"),o!==null){if(r===dr)return o.COMPRESSED_RED_RGTC1_EXT;if(r===co)return o.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(r===lo)return o.COMPRESSED_RED_GREEN_RGTC2_EXT;if(r===ho)return o.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return r===qn?n?s.UNSIGNED_INT_24_8:(o=e.get("WEBGL_depth_texture"),o!==null?o.UNSIGNED_INT_24_8_WEBGL:null):s[r]!==void 0?s[r]:null}return{convert:i}}class Em extends Tt{constructor(e=[]){super(),this.isArrayCamera=!0,this.cameras=e}}class st extends gt{constructor(){super(),this.isGroup=!0,this.type="Group"}}const wm={type:"move"};class Ir{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new st,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new st,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new x,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new x),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new st,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new x,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new x),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){const t=this._hand;if(t)for(const n of e.hand.values())this._getHandJoint(t,n)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,t,n){let i=null,r=null,a=null;const o=this._targetRay,c=this._grip,l=this._hand;if(e&&t.session.visibilityState!=="visible-blurred"){if(l&&e.hand){a=!0;for(const v of e.hand.values()){const m=t.getJointPose(v,n),p=this._getHandJoint(l,v);m!==null&&(p.matrix.fromArray(m.transform.matrix),p.matrix.decompose(p.position,p.rotation,p.scale),p.matrixWorldNeedsUpdate=!0,p.jointRadius=m.radius),p.visible=m!==null}const h=l.joints["index-finger-tip"],u=l.joints["thumb-tip"],f=h.position.distanceTo(u.position),d=.02,g=.005;l.inputState.pinching&&f>d+g?(l.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!l.inputState.pinching&&f<=d-g&&(l.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else c!==null&&e.gripSpace&&(r=t.getPose(e.gripSpace,n),r!==null&&(c.matrix.fromArray(r.transform.matrix),c.matrix.decompose(c.position,c.rotation,c.scale),c.matrixWorldNeedsUpdate=!0,r.linearVelocity?(c.hasLinearVelocity=!0,c.linearVelocity.copy(r.linearVelocity)):c.hasLinearVelocity=!1,r.angularVelocity?(c.hasAngularVelocity=!0,c.angularVelocity.copy(r.angularVelocity)):c.hasAngularVelocity=!1));o!==null&&(i=t.getPose(e.targetRaySpace,n),i===null&&r!==null&&(i=r),i!==null&&(o.matrix.fromArray(i.transform.matrix),o.matrix.decompose(o.position,o.rotation,o.scale),o.matrixWorldNeedsUpdate=!0,i.linearVelocity?(o.hasLinearVelocity=!0,o.linearVelocity.copy(i.linearVelocity)):o.hasLinearVelocity=!1,i.angularVelocity?(o.hasAngularVelocity=!0,o.angularVelocity.copy(i.angularVelocity)):o.hasAngularVelocity=!1,this.dispatchEvent(wm)))}return o!==null&&(o.visible=i!==null),c!==null&&(c.visible=r!==null),l!==null&&(l.visible=a!==null),this}_getHandJoint(e,t){if(e.joints[t.jointName]===void 0){const n=new st;n.matrixAutoUpdate=!1,n.visible=!1,e.joints[t.jointName]=n,e.add(n)}return e.joints[t.jointName]}}class Tm extends Qn{constructor(e,t){super();const n=this;let i=null,r=1,a=null,o="local-floor",c=1,l=null,h=null,u=null,f=null,d=null,g=null;const v=t.getContextAttributes();let m=null,p=null;const y=[],_=[],S=new $;let R=null;const T=new Tt;T.layers.enable(1),T.viewport=new Mt;const w=new Tt;w.layers.enable(2),w.viewport=new Mt;const O=[T,w],M=new Em;M.layers.enable(1),M.layers.enable(2);let A=null,U=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(X){let J=y[X];return J===void 0&&(J=new Ir,y[X]=J),J.getTargetRaySpace()},this.getControllerGrip=function(X){let J=y[X];return J===void 0&&(J=new Ir,y[X]=J),J.getGripSpace()},this.getHand=function(X){let J=y[X];return J===void 0&&(J=new Ir,y[X]=J),J.getHandSpace()};function G(X){const J=_.indexOf(X.inputSource);if(J===-1)return;const he=y[J];he!==void 0&&(he.update(X.inputSource,X.frame,l||a),he.dispatchEvent({type:X.type,data:X.inputSource}))}function j(){i.removeEventListener("select",G),i.removeEventListener("selectstart",G),i.removeEventListener("selectend",G),i.removeEventListener("squeeze",G),i.removeEventListener("squeezestart",G),i.removeEventListener("squeezeend",G),i.removeEventListener("end",j),i.removeEventListener("inputsourceschange",D);for(let X=0;X<y.length;X++){const J=_[X];J!==null&&(_[X]=null,y[X].disconnect(J))}A=null,U=null,e.setRenderTarget(m),d=null,f=null,u=null,i=null,p=null,oe.stop(),n.isPresenting=!1,e.setPixelRatio(R),e.setSize(S.width,S.height,!1),n.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(X){r=X,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(X){o=X,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return l||a},this.setReferenceSpace=function(X){l=X},this.getBaseLayer=function(){return f!==null?f:d},this.getBinding=function(){return u},this.getFrame=function(){return g},this.getSession=function(){return i},this.setSession=async function(X){if(i=X,i!==null){if(m=e.getRenderTarget(),i.addEventListener("select",G),i.addEventListener("selectstart",G),i.addEventListener("selectend",G),i.addEventListener("squeeze",G),i.addEventListener("squeezestart",G),i.addEventListener("squeezeend",G),i.addEventListener("end",j),i.addEventListener("inputsourceschange",D),v.xrCompatible!==!0&&await t.makeXRCompatible(),R=e.getPixelRatio(),e.getSize(S),i.renderState.layers===void 0||e.capabilities.isWebGL2===!1){const J={antialias:i.renderState.layers===void 0?v.antialias:!0,alpha:!0,depth:v.depth,stencil:v.stencil,framebufferScaleFactor:r};d=new XRWebGLLayer(i,t,J),i.updateRenderState({baseLayer:d}),e.setPixelRatio(1),e.setSize(d.framebufferWidth,d.framebufferHeight,!1),p=new $n(d.framebufferWidth,d.framebufferHeight,{format:an,type:Nn,colorSpace:e.outputColorSpace,stencilBuffer:v.stencil})}else{let J=null,he=null,xe=null;v.depth&&(xe=v.stencil?t.DEPTH24_STENCIL8:t.DEPTH_COMPONENT24,J=v.stencil?Oi:Yn,he=v.stencil?qn:Rn);const ve={colorFormat:t.RGBA8,depthFormat:xe,scaleFactor:r};u=new XRWebGLBinding(i,t),f=u.createProjectionLayer(ve),i.updateRenderState({layers:[f]}),e.setPixelRatio(1),e.setSize(f.textureWidth,f.textureHeight,!1),p=new $n(f.textureWidth,f.textureHeight,{format:an,type:Nn,depthTexture:new Zc(f.textureWidth,f.textureHeight,he,void 0,void 0,void 0,void 0,void 0,void 0,J),stencilBuffer:v.stencil,colorSpace:e.outputColorSpace,samples:v.antialias?4:0});const Le=e.properties.get(p);Le.__ignoreDepthValues=f.ignoreDepthValues}p.isXRRenderTarget=!0,this.setFoveation(c),l=null,a=await i.requestReferenceSpace(o),oe.setContext(i),oe.start(),n.isPresenting=!0,n.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(i!==null)return i.environmentBlendMode};function D(X){for(let J=0;J<X.removed.length;J++){const he=X.removed[J],xe=_.indexOf(he);xe>=0&&(_[xe]=null,y[xe].disconnect(he))}for(let J=0;J<X.added.length;J++){const he=X.added[J];let xe=_.indexOf(he);if(xe===-1){for(let Le=0;Le<y.length;Le++)if(Le>=_.length){_.push(he),xe=Le;break}else if(_[Le]===null){_[Le]=he,xe=Le;break}if(xe===-1)break}const ve=y[xe];ve&&ve.connect(he)}}const I=new x,H=new x;function q(X,J,he){I.setFromMatrixPosition(J.matrixWorld),H.setFromMatrixPosition(he.matrixWorld);const xe=I.distanceTo(H),ve=J.projectionMatrix.elements,Le=he.projectionMatrix.elements,Pe=ve[14]/(ve[10]-1),Ae=ve[14]/(ve[10]+1),je=(ve[9]+1)/ve[5],z=(ve[9]-1)/ve[5],bt=(ve[8]-1)/ve[0],Ee=(Le[8]+1)/Le[0],De=Pe*bt,_e=Pe*Ee,tt=xe/(-bt+Ee),Fe=tt*-bt;J.matrixWorld.decompose(X.position,X.quaternion,X.scale),X.translateX(Fe),X.translateZ(tt),X.matrixWorld.compose(X.position,X.quaternion,X.scale),X.matrixWorldInverse.copy(X.matrixWorld).invert();const C=Pe+tt,b=Ae+tt,F=De-Fe,ne=_e+(xe-Fe),ee=je*Ae/b*C,ie=z*Ae/b*C;X.projectionMatrix.makePerspective(F,ne,ee,ie,C,b),X.projectionMatrixInverse.copy(X.projectionMatrix).invert()}function Y(X,J){J===null?X.matrixWorld.copy(X.matrix):X.matrixWorld.multiplyMatrices(J.matrixWorld,X.matrix),X.matrixWorldInverse.copy(X.matrixWorld).invert()}this.updateCamera=function(X){if(i===null)return;M.near=w.near=T.near=X.near,M.far=w.far=T.far=X.far,(A!==M.near||U!==M.far)&&(i.updateRenderState({depthNear:M.near,depthFar:M.far}),A=M.near,U=M.far);const J=X.parent,he=M.cameras;Y(M,J);for(let xe=0;xe<he.length;xe++)Y(he[xe],J);he.length===2?q(M,T,w):M.projectionMatrix.copy(T.projectionMatrix),Z(X,M,J)};function Z(X,J,he){he===null?X.matrix.copy(J.matrixWorld):(X.matrix.copy(he.matrixWorld),X.matrix.invert(),X.matrix.multiply(J.matrixWorld)),X.matrix.decompose(X.position,X.quaternion,X.scale),X.updateMatrixWorld(!0),X.projectionMatrix.copy(J.projectionMatrix),X.projectionMatrixInverse.copy(J.projectionMatrixInverse),X.isPerspectiveCamera&&(X.fov=aa*2*Math.atan(1/X.projectionMatrix.elements[5]),X.zoom=1)}this.getCamera=function(){return M},this.getFoveation=function(){if(!(f===null&&d===null))return c},this.setFoveation=function(X){c=X,f!==null&&(f.fixedFoveation=X),d!==null&&d.fixedFoveation!==void 0&&(d.fixedFoveation=X)};let K=null;function se(X,J){if(h=J.getViewerPose(l||a),g=J,h!==null){const he=h.views;d!==null&&(e.setRenderTargetFramebuffer(p,d.framebuffer),e.setRenderTarget(p));let xe=!1;he.length!==M.cameras.length&&(M.cameras.length=0,xe=!0);for(let ve=0;ve<he.length;ve++){const Le=he[ve];let Pe=null;if(d!==null)Pe=d.getViewport(Le);else{const je=u.getViewSubImage(f,Le);Pe=je.viewport,ve===0&&(e.setRenderTargetTextures(p,je.colorTexture,f.ignoreDepthValues?void 0:je.depthStencilTexture),e.setRenderTarget(p))}let Ae=O[ve];Ae===void 0&&(Ae=new Tt,Ae.layers.enable(ve),Ae.viewport=new Mt,O[ve]=Ae),Ae.matrix.fromArray(Le.transform.matrix),Ae.matrix.decompose(Ae.position,Ae.quaternion,Ae.scale),Ae.projectionMatrix.fromArray(Le.projectionMatrix),Ae.projectionMatrixInverse.copy(Ae.projectionMatrix).invert(),Ae.viewport.set(Pe.x,Pe.y,Pe.width,Pe.height),ve===0&&(M.matrix.copy(Ae.matrix),M.matrix.decompose(M.position,M.quaternion,M.scale)),xe===!0&&M.cameras.push(Ae)}}for(let he=0;he<y.length;he++){const xe=_[he],ve=y[he];xe!==null&&ve!==void 0&&ve.update(xe,J,l||a)}K&&K(X,J),J.detectedPlanes&&n.dispatchEvent({type:"planesdetected",data:J}),g=null}const oe=new Yc;oe.setAnimationLoop(se),this.setAnimationLoop=function(X){K=X},this.dispose=function(){}}}function Am(s,e){function t(m,p){m.matrixAutoUpdate===!0&&m.updateMatrix(),p.value.copy(m.matrix)}function n(m,p){p.color.getRGB(m.fogColor.value,Xc(s)),p.isFog?(m.fogNear.value=p.near,m.fogFar.value=p.far):p.isFogExp2&&(m.fogDensity.value=p.density)}function i(m,p,y,_,S){p.isMeshBasicMaterial||p.isMeshLambertMaterial?r(m,p):p.isMeshToonMaterial?(r(m,p),u(m,p)):p.isMeshPhongMaterial?(r(m,p),h(m,p)):p.isMeshStandardMaterial?(r(m,p),f(m,p),p.isMeshPhysicalMaterial&&d(m,p,S)):p.isMeshMatcapMaterial?(r(m,p),g(m,p)):p.isMeshDepthMaterial?r(m,p):p.isMeshDistanceMaterial?(r(m,p),v(m,p)):p.isMeshNormalMaterial?r(m,p):p.isLineBasicMaterial?(a(m,p),p.isLineDashedMaterial&&o(m,p)):p.isPointsMaterial?c(m,p,y,_):p.isSpriteMaterial?l(m,p):p.isShadowMaterial?(m.color.value.copy(p.color),m.opacity.value=p.opacity):p.isShaderMaterial&&(p.uniformsNeedUpdate=!1)}function r(m,p){m.opacity.value=p.opacity,p.color&&m.diffuse.value.copy(p.color),p.emissive&&m.emissive.value.copy(p.emissive).multiplyScalar(p.emissiveIntensity),p.map&&(m.map.value=p.map,t(p.map,m.mapTransform)),p.alphaMap&&(m.alphaMap.value=p.alphaMap,t(p.alphaMap,m.alphaMapTransform)),p.bumpMap&&(m.bumpMap.value=p.bumpMap,t(p.bumpMap,m.bumpMapTransform),m.bumpScale.value=p.bumpScale,p.side===kt&&(m.bumpScale.value*=-1)),p.normalMap&&(m.normalMap.value=p.normalMap,t(p.normalMap,m.normalMapTransform),m.normalScale.value.copy(p.normalScale),p.side===kt&&m.normalScale.value.negate()),p.displacementMap&&(m.displacementMap.value=p.displacementMap,t(p.displacementMap,m.displacementMapTransform),m.displacementScale.value=p.displacementScale,m.displacementBias.value=p.displacementBias),p.emissiveMap&&(m.emissiveMap.value=p.emissiveMap,t(p.emissiveMap,m.emissiveMapTransform)),p.specularMap&&(m.specularMap.value=p.specularMap,t(p.specularMap,m.specularMapTransform)),p.alphaTest>0&&(m.alphaTest.value=p.alphaTest);const y=e.get(p).envMap;if(y&&(m.envMap.value=y,m.flipEnvMap.value=y.isCubeTexture&&y.isRenderTargetTexture===!1?-1:1,m.reflectivity.value=p.reflectivity,m.ior.value=p.ior,m.refractionRatio.value=p.refractionRatio),p.lightMap){m.lightMap.value=p.lightMap;const _=s._useLegacyLights===!0?Math.PI:1;m.lightMapIntensity.value=p.lightMapIntensity*_,t(p.lightMap,m.lightMapTransform)}p.aoMap&&(m.aoMap.value=p.aoMap,m.aoMapIntensity.value=p.aoMapIntensity,t(p.aoMap,m.aoMapTransform))}function a(m,p){m.diffuse.value.copy(p.color),m.opacity.value=p.opacity,p.map&&(m.map.value=p.map,t(p.map,m.mapTransform))}function o(m,p){m.dashSize.value=p.dashSize,m.totalSize.value=p.dashSize+p.gapSize,m.scale.value=p.scale}function c(m,p,y,_){m.diffuse.value.copy(p.color),m.opacity.value=p.opacity,m.size.value=p.size*y,m.scale.value=_*.5,p.map&&(m.map.value=p.map,t(p.map,m.uvTransform)),p.alphaMap&&(m.alphaMap.value=p.alphaMap,t(p.alphaMap,m.alphaMapTransform)),p.alphaTest>0&&(m.alphaTest.value=p.alphaTest)}function l(m,p){m.diffuse.value.copy(p.color),m.opacity.value=p.opacity,m.rotation.value=p.rotation,p.map&&(m.map.value=p.map,t(p.map,m.mapTransform)),p.alphaMap&&(m.alphaMap.value=p.alphaMap,t(p.alphaMap,m.alphaMapTransform)),p.alphaTest>0&&(m.alphaTest.value=p.alphaTest)}function h(m,p){m.specular.value.copy(p.specular),m.shininess.value=Math.max(p.shininess,1e-4)}function u(m,p){p.gradientMap&&(m.gradientMap.value=p.gradientMap)}function f(m,p){m.metalness.value=p.metalness,p.metalnessMap&&(m.metalnessMap.value=p.metalnessMap,t(p.metalnessMap,m.metalnessMapTransform)),m.roughness.value=p.roughness,p.roughnessMap&&(m.roughnessMap.value=p.roughnessMap,t(p.roughnessMap,m.roughnessMapTransform)),e.get(p).envMap&&(m.envMapIntensity.value=p.envMapIntensity)}function d(m,p,y){m.ior.value=p.ior,p.sheen>0&&(m.sheenColor.value.copy(p.sheenColor).multiplyScalar(p.sheen),m.sheenRoughness.value=p.sheenRoughness,p.sheenColorMap&&(m.sheenColorMap.value=p.sheenColorMap,t(p.sheenColorMap,m.sheenColorMapTransform)),p.sheenRoughnessMap&&(m.sheenRoughnessMap.value=p.sheenRoughnessMap,t(p.sheenRoughnessMap,m.sheenRoughnessMapTransform))),p.clearcoat>0&&(m.clearcoat.value=p.clearcoat,m.clearcoatRoughness.value=p.clearcoatRoughness,p.clearcoatMap&&(m.clearcoatMap.value=p.clearcoatMap,t(p.clearcoatMap,m.clearcoatMapTransform)),p.clearcoatRoughnessMap&&(m.clearcoatRoughnessMap.value=p.clearcoatRoughnessMap,t(p.clearcoatRoughnessMap,m.clearcoatRoughnessMapTransform)),p.clearcoatNormalMap&&(m.clearcoatNormalMap.value=p.clearcoatNormalMap,t(p.clearcoatNormalMap,m.clearcoatNormalMapTransform),m.clearcoatNormalScale.value.copy(p.clearcoatNormalScale),p.side===kt&&m.clearcoatNormalScale.value.negate())),p.iridescence>0&&(m.iridescence.value=p.iridescence,m.iridescenceIOR.value=p.iridescenceIOR,m.iridescenceThicknessMinimum.value=p.iridescenceThicknessRange[0],m.iridescenceThicknessMaximum.value=p.iridescenceThicknessRange[1],p.iridescenceMap&&(m.iridescenceMap.value=p.iridescenceMap,t(p.iridescenceMap,m.iridescenceMapTransform)),p.iridescenceThicknessMap&&(m.iridescenceThicknessMap.value=p.iridescenceThicknessMap,t(p.iridescenceThicknessMap,m.iridescenceThicknessMapTransform))),p.transmission>0&&(m.transmission.value=p.transmission,m.transmissionSamplerMap.value=y.texture,m.transmissionSamplerSize.value.set(y.width,y.height),p.transmissionMap&&(m.transmissionMap.value=p.transmissionMap,t(p.transmissionMap,m.transmissionMapTransform)),m.thickness.value=p.thickness,p.thicknessMap&&(m.thicknessMap.value=p.thicknessMap,t(p.thicknessMap,m.thicknessMapTransform)),m.attenuationDistance.value=p.attenuationDistance,m.attenuationColor.value.copy(p.attenuationColor)),p.anisotropy>0&&(m.anisotropyVector.value.set(p.anisotropy*Math.cos(p.anisotropyRotation),p.anisotropy*Math.sin(p.anisotropyRotation)),p.anisotropyMap&&(m.anisotropyMap.value=p.anisotropyMap,t(p.anisotropyMap,m.anisotropyMapTransform))),m.specularIntensity.value=p.specularIntensity,m.specularColor.value.copy(p.specularColor),p.specularColorMap&&(m.specularColorMap.value=p.specularColorMap,t(p.specularColorMap,m.specularColorMapTransform)),p.specularIntensityMap&&(m.specularIntensityMap.value=p.specularIntensityMap,t(p.specularIntensityMap,m.specularIntensityMapTransform))}function g(m,p){p.matcap&&(m.matcap.value=p.matcap)}function v(m,p){const y=e.get(p).light;m.referencePosition.value.setFromMatrixPosition(y.matrixWorld),m.nearDistance.value=y.shadow.camera.near,m.farDistance.value=y.shadow.camera.far}return{refreshFogUniforms:n,refreshMaterialUniforms:i}}function Cm(s,e,t,n){let i={},r={},a=[];const o=t.isWebGL2?s.getParameter(s.MAX_UNIFORM_BUFFER_BINDINGS):0;function c(y,_){const S=_.program;n.uniformBlockBinding(y,S)}function l(y,_){let S=i[y.id];S===void 0&&(g(y),S=h(y),i[y.id]=S,y.addEventListener("dispose",m));const R=_.program;n.updateUBOMapping(y,R);const T=e.render.frame;r[y.id]!==T&&(f(y),r[y.id]=T)}function h(y){const _=u();y.__bindingPointIndex=_;const S=s.createBuffer(),R=y.__size,T=y.usage;return s.bindBuffer(s.UNIFORM_BUFFER,S),s.bufferData(s.UNIFORM_BUFFER,R,T),s.bindBuffer(s.UNIFORM_BUFFER,null),s.bindBufferBase(s.UNIFORM_BUFFER,_,S),S}function u(){for(let y=0;y<o;y++)if(a.indexOf(y)===-1)return a.push(y),y;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function f(y){const _=i[y.id],S=y.uniforms,R=y.__cache;s.bindBuffer(s.UNIFORM_BUFFER,_);for(let T=0,w=S.length;T<w;T++){const O=Array.isArray(S[T])?S[T]:[S[T]];for(let M=0,A=O.length;M<A;M++){const U=O[M];if(d(U,T,M,R)===!0){const G=U.__offset,j=Array.isArray(U.value)?U.value:[U.value];let D=0;for(let I=0;I<j.length;I++){const H=j[I],q=v(H);typeof H=="number"||typeof H=="boolean"?(U.__data[0]=H,s.bufferSubData(s.UNIFORM_BUFFER,G+D,U.__data)):H.isMatrix3?(U.__data[0]=H.elements[0],U.__data[1]=H.elements[1],U.__data[2]=H.elements[2],U.__data[3]=0,U.__data[4]=H.elements[3],U.__data[5]=H.elements[4],U.__data[6]=H.elements[5],U.__data[7]=0,U.__data[8]=H.elements[6],U.__data[9]=H.elements[7],U.__data[10]=H.elements[8],U.__data[11]=0):(H.toArray(U.__data,D),D+=q.storage/Float32Array.BYTES_PER_ELEMENT)}s.bufferSubData(s.UNIFORM_BUFFER,G,U.__data)}}}s.bindBuffer(s.UNIFORM_BUFFER,null)}function d(y,_,S,R){const T=y.value,w=_+"_"+S;if(R[w]===void 0)return typeof T=="number"||typeof T=="boolean"?R[w]=T:R[w]=T.clone(),!0;{const O=R[w];if(typeof T=="number"||typeof T=="boolean"){if(O!==T)return R[w]=T,!0}else if(O.equals(T)===!1)return O.copy(T),!0}return!1}function g(y){const _=y.uniforms;let S=0;const R=16;for(let w=0,O=_.length;w<O;w++){const M=Array.isArray(_[w])?_[w]:[_[w]];for(let A=0,U=M.length;A<U;A++){const G=M[A],j=Array.isArray(G.value)?G.value:[G.value];for(let D=0,I=j.length;D<I;D++){const H=j[D],q=v(H),Y=S%R;Y!==0&&R-Y<q.boundary&&(S+=R-Y),G.__data=new Float32Array(q.storage/Float32Array.BYTES_PER_ELEMENT),G.__offset=S,S+=q.storage}}}const T=S%R;return T>0&&(S+=R-T),y.__size=S,y.__cache={},this}function v(y){const _={boundary:0,storage:0};return typeof y=="number"||typeof y=="boolean"?(_.boundary=4,_.storage=4):y.isVector2?(_.boundary=8,_.storage=8):y.isVector3||y.isColor?(_.boundary=16,_.storage=12):y.isVector4?(_.boundary=16,_.storage=16):y.isMatrix3?(_.boundary=48,_.storage=48):y.isMatrix4?(_.boundary=64,_.storage=64):y.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",y),_}function m(y){const _=y.target;_.removeEventListener("dispose",m);const S=a.indexOf(_.__bindingPointIndex);a.splice(S,1),s.deleteBuffer(i[_.id]),delete i[_.id],delete r[_.id]}function p(){for(const y in i)s.deleteBuffer(i[y]);a=[],i={},r={}}return{bind:c,update:l,dispose:p}}class tl{constructor(e={}){const{canvas:t=bh(),context:n=null,depth:i=!0,stencil:r=!0,alpha:a=!1,antialias:o=!1,premultipliedAlpha:c=!0,preserveDrawingBuffer:l=!1,powerPreference:h="default",failIfMajorPerformanceCaveat:u=!1}=e;this.isWebGLRenderer=!0;let f;n!==null?f=n.getContextAttributes().alpha:f=a;const d=new Uint32Array(4),g=new Int32Array(4);let v=null,m=null;const p=[],y=[];this.domElement=t,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this._outputColorSpace=Et,this._useLegacyLights=!1,this.toneMapping=On,this.toneMappingExposure=1;const _=this;let S=!1,R=0,T=0,w=null,O=-1,M=null;const A=new Mt,U=new Mt;let G=null;const j=new Ue(0);let D=0,I=t.width,H=t.height,q=1,Y=null,Z=null;const K=new Mt(0,0,I,H),se=new Mt(0,0,I,H);let oe=!1;const X=new ga;let J=!1,he=!1,xe=null;const ve=new ht,Le=new $,Pe=new x,Ae={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};function je(){return w===null?q:1}let z=n;function bt(E,N){for(let k=0;k<E.length;k++){const V=E[k],B=t.getContext(V,N);if(B!==null)return B}return null}try{const E={alpha:!0,depth:i,stencil:r,antialias:o,premultipliedAlpha:c,preserveDrawingBuffer:l,powerPreference:h,failIfMajorPerformanceCaveat:u};if("setAttribute"in t&&t.setAttribute("data-engine",`three.js r${da}`),t.addEventListener("webglcontextlost",te,!1),t.addEventListener("webglcontextrestored",L,!1),t.addEventListener("webglcontextcreationerror",ae,!1),z===null){const N=["webgl2","webgl","experimental-webgl"];if(_.isWebGL1Renderer===!0&&N.shift(),z=bt(N,E),z===null)throw bt(N)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}typeof WebGLRenderingContext<"u"&&z instanceof WebGLRenderingContext&&console.warn("THREE.WebGLRenderer: WebGL 1 support was deprecated in r153 and will be removed in r163."),z.getShaderPrecisionFormat===void 0&&(z.getShaderPrecisionFormat=function(){return{rangeMin:1,rangeMax:1,precision:1}})}catch(E){throw console.error("THREE.WebGLRenderer: "+E.message),E}let Ee,De,_e,tt,Fe,C,b,F,ne,ee,ie,ye,ue,ge,Te,ze,Q,$e,ke,Oe,be,de,P,re;function Se(){Ee=new zf(z),De=new Df(z,Ee,e),Ee.init(De),de=new bm(z,Ee,De),_e=new Sm(z,Ee,De),tt=new kf(z),Fe=new om,C=new Mm(z,Ee,_e,Fe,De,de,tt),b=new Nf(_),F=new Ff(_),ne=new Yh(z,De),P=new Pf(z,Ee,ne,De),ee=new Bf(z,ne,tt,P),ie=new Xf(z,ee,ne,tt),ke=new Wf(z,De,C),ze=new Of(Fe),ye=new am(_,b,F,Ee,De,P,ze),ue=new Am(_,Fe),ge=new lm,Te=new mm(Ee,De),$e=new Rf(_,b,F,_e,ie,f,c),Q=new ym(_,ie,De),re=new Cm(z,tt,De,_e),Oe=new Lf(z,Ee,tt,De),be=new Gf(z,Ee,tt,De),tt.programs=ye.programs,_.capabilities=De,_.extensions=Ee,_.properties=Fe,_.renderLists=ge,_.shadowMap=Q,_.state=_e,_.info=tt}Se();const me=new Tm(_,z);this.xr=me,this.getContext=function(){return z},this.getContextAttributes=function(){return z.getContextAttributes()},this.forceContextLoss=function(){const E=Ee.get("WEBGL_lose_context");E&&E.loseContext()},this.forceContextRestore=function(){const E=Ee.get("WEBGL_lose_context");E&&E.restoreContext()},this.getPixelRatio=function(){return q},this.setPixelRatio=function(E){E!==void 0&&(q=E,this.setSize(I,H,!1))},this.getSize=function(E){return E.set(I,H)},this.setSize=function(E,N,k=!0){if(me.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}I=E,H=N,t.width=Math.floor(E*q),t.height=Math.floor(N*q),k===!0&&(t.style.width=E+"px",t.style.height=N+"px"),this.setViewport(0,0,E,N)},this.getDrawingBufferSize=function(E){return E.set(I*q,H*q).floor()},this.setDrawingBufferSize=function(E,N,k){I=E,H=N,q=k,t.width=Math.floor(E*k),t.height=Math.floor(N*k),this.setViewport(0,0,E,N)},this.getCurrentViewport=function(E){return E.copy(A)},this.getViewport=function(E){return E.copy(K)},this.setViewport=function(E,N,k,V){E.isVector4?K.set(E.x,E.y,E.z,E.w):K.set(E,N,k,V),_e.viewport(A.copy(K).multiplyScalar(q).floor())},this.getScissor=function(E){return E.copy(se)},this.setScissor=function(E,N,k,V){E.isVector4?se.set(E.x,E.y,E.z,E.w):se.set(E,N,k,V),_e.scissor(U.copy(se).multiplyScalar(q).floor())},this.getScissorTest=function(){return oe},this.setScissorTest=function(E){_e.setScissorTest(oe=E)},this.setOpaqueSort=function(E){Y=E},this.setTransparentSort=function(E){Z=E},this.getClearColor=function(E){return E.copy($e.getClearColor())},this.setClearColor=function(){$e.setClearColor.apply($e,arguments)},this.getClearAlpha=function(){return $e.getClearAlpha()},this.setClearAlpha=function(){$e.setClearAlpha.apply($e,arguments)},this.clear=function(E=!0,N=!0,k=!0){let V=0;if(E){let B=!1;if(w!==null){const pe=w.texture.format;B=pe===Oc||pe===Dc||pe===Lc}if(B){const pe=w.texture.type,Me=pe===Nn||pe===Rn||pe===fa||pe===qn||pe===Rc||pe===Pc,Re=$e.getClearColor(),Ne=$e.getClearAlpha(),He=Re.r,Ie=Re.g,Be=Re.b;Me?(d[0]=He,d[1]=Ie,d[2]=Be,d[3]=Ne,z.clearBufferuiv(z.COLOR,0,d)):(g[0]=He,g[1]=Ie,g[2]=Be,g[3]=Ne,z.clearBufferiv(z.COLOR,0,g))}else V|=z.COLOR_BUFFER_BIT}N&&(V|=z.DEPTH_BUFFER_BIT),k&&(V|=z.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),z.clear(V)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){t.removeEventListener("webglcontextlost",te,!1),t.removeEventListener("webglcontextrestored",L,!1),t.removeEventListener("webglcontextcreationerror",ae,!1),ge.dispose(),Te.dispose(),Fe.dispose(),b.dispose(),F.dispose(),ie.dispose(),P.dispose(),re.dispose(),ye.dispose(),me.dispose(),me.removeEventListener("sessionstart",ut),me.removeEventListener("sessionend",Ze),xe&&(xe.dispose(),xe=null),pt.stop()};function te(E){E.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),S=!0}function L(){console.log("THREE.WebGLRenderer: Context Restored."),S=!1;const E=tt.autoReset,N=Q.enabled,k=Q.autoUpdate,V=Q.needsUpdate,B=Q.type;Se(),tt.autoReset=E,Q.enabled=N,Q.autoUpdate=k,Q.needsUpdate=V,Q.type=B}function ae(E){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",E.statusMessage)}function le(E){const N=E.target;N.removeEventListener("dispose",le),Ce(N)}function Ce(E){we(E),Fe.remove(E)}function we(E){const N=Fe.get(E).programs;N!==void 0&&(N.forEach(function(k){ye.releaseProgram(k)}),E.isShaderMaterial&&ye.releaseShaderCache(E))}this.renderBufferDirect=function(E,N,k,V,B,pe){N===null&&(N=Ae);const Me=B.isMesh&&B.matrixWorld.determinant()<0,Re=vl(E,N,k,V,B);_e.setMaterial(V,Me);let Ne=k.index,He=1;if(V.wireframe===!0){if(Ne=ee.getWireframeAttribute(k),Ne===void 0)return;He=2}const Ie=k.drawRange,Be=k.attributes.position;let dt=Ie.start*He,Ht=(Ie.start+Ie.count)*He;pe!==null&&(dt=Math.max(dt,pe.start*He),Ht=Math.min(Ht,(pe.start+pe.count)*He)),Ne!==null?(dt=Math.max(dt,0),Ht=Math.min(Ht,Ne.count)):Be!=null&&(dt=Math.max(dt,0),Ht=Math.min(Ht,Be.count));const yt=Ht-dt;if(yt<0||yt===1/0)return;P.setup(B,V,Re,k,Ne);let dn,it=Oe;if(Ne!==null&&(dn=ne.get(Ne),it=be,it.setIndex(dn)),B.isMesh)V.wireframe===!0?(_e.setLineWidth(V.wireframeLinewidth*je()),it.setMode(z.LINES)):it.setMode(z.TRIANGLES);else if(B.isLine){let Ve=V.linewidth;Ve===void 0&&(Ve=1),_e.setLineWidth(Ve*je()),B.isLineSegments?it.setMode(z.LINES):B.isLineLoop?it.setMode(z.LINE_LOOP):it.setMode(z.LINE_STRIP)}else B.isPoints?it.setMode(z.POINTS):B.isSprite&&it.setMode(z.TRIANGLES);if(B.isBatchedMesh)it.renderMultiDraw(B._multiDrawStarts,B._multiDrawCounts,B._multiDrawCount);else if(B.isInstancedMesh)it.renderInstances(dt,yt,B.count);else if(k.isInstancedBufferGeometry){const Ve=k._maxInstanceCount!==void 0?k._maxInstanceCount:1/0,ir=Math.min(k.instanceCount,Ve);it.renderInstances(dt,yt,ir)}else it.render(dt,yt)};function qe(E,N,k){E.transparent===!0&&E.side===jt&&E.forceSinglePass===!1?(E.side=kt,E.needsUpdate=!0,is(E,N,k),E.side=In,E.needsUpdate=!0,is(E,N,k),E.side=jt):is(E,N,k)}this.compile=function(E,N,k=null){k===null&&(k=E),m=Te.get(k),m.init(),y.push(m),k.traverseVisible(function(B){B.isLight&&B.layers.test(N.layers)&&(m.pushLight(B),B.castShadow&&m.pushShadow(B))}),E!==k&&E.traverseVisible(function(B){B.isLight&&B.layers.test(N.layers)&&(m.pushLight(B),B.castShadow&&m.pushShadow(B))}),m.setupLights(_._useLegacyLights);const V=new Set;return E.traverse(function(B){const pe=B.material;if(pe)if(Array.isArray(pe))for(let Me=0;Me<pe.length;Me++){const Re=pe[Me];qe(Re,k,B),V.add(Re)}else qe(pe,k,B),V.add(pe)}),y.pop(),m=null,V},this.compileAsync=function(E,N,k=null){const V=this.compile(E,N,k);return new Promise(B=>{function pe(){if(V.forEach(function(Me){Fe.get(Me).currentProgram.isReady()&&V.delete(Me)}),V.size===0){B(E);return}setTimeout(pe,10)}Ee.get("KHR_parallel_shader_compile")!==null?pe():setTimeout(pe,10)})};let Ye=null;function at(E){Ye&&Ye(E)}function ut(){pt.stop()}function Ze(){pt.start()}const pt=new Yc;pt.setAnimationLoop(at),typeof self<"u"&&pt.setContext(self),this.setAnimationLoop=function(E){Ye=E,me.setAnimationLoop(E),E===null?pt.stop():pt.start()},me.addEventListener("sessionstart",ut),me.addEventListener("sessionend",Ze),this.render=function(E,N){if(N!==void 0&&N.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(S===!0)return;E.matrixWorldAutoUpdate===!0&&E.updateMatrixWorld(),N.parent===null&&N.matrixWorldAutoUpdate===!0&&N.updateMatrixWorld(),me.enabled===!0&&me.isPresenting===!0&&(me.cameraAutoUpdate===!0&&me.updateCamera(N),N=me.getCamera()),E.isScene===!0&&E.onBeforeRender(_,E,N,w),m=Te.get(E,y.length),m.init(),y.push(m),ve.multiplyMatrices(N.projectionMatrix,N.matrixWorldInverse),X.setFromProjectionMatrix(ve),he=this.localClippingEnabled,J=ze.init(this.clippingPlanes,he),v=ge.get(E,p.length),v.init(),p.push(v),on(E,N,0,_.sortObjects),v.finish(),_.sortObjects===!0&&v.sort(Y,Z),this.info.render.frame++,J===!0&&ze.beginShadows();const k=m.state.shadowsArray;if(Q.render(k,E,N),J===!0&&ze.endShadows(),this.info.autoReset===!0&&this.info.reset(),$e.render(v,E),m.setupLights(_._useLegacyLights),N.isArrayCamera){const V=N.cameras;for(let B=0,pe=V.length;B<pe;B++){const Me=V[B];Aa(v,E,Me,Me.viewport)}}else Aa(v,E,N);w!==null&&(C.updateMultisampleRenderTarget(w),C.updateRenderTargetMipmap(w)),E.isScene===!0&&E.onAfterRender(_,E,N),P.resetDefaultState(),O=-1,M=null,y.pop(),y.length>0?m=y[y.length-1]:m=null,p.pop(),p.length>0?v=p[p.length-1]:v=null};function on(E,N,k,V){if(E.visible===!1)return;if(E.layers.test(N.layers)){if(E.isGroup)k=E.renderOrder;else if(E.isLOD)E.autoUpdate===!0&&E.update(N);else if(E.isLight)m.pushLight(E),E.castShadow&&m.pushShadow(E);else if(E.isSprite){if(!E.frustumCulled||X.intersectsSprite(E)){V&&Pe.setFromMatrixPosition(E.matrixWorld).applyMatrix4(ve);const Me=ie.update(E),Re=E.material;Re.visible&&v.push(E,Me,Re,k,Pe.z,null)}}else if((E.isMesh||E.isLine||E.isPoints)&&(!E.frustumCulled||X.intersectsObject(E))){const Me=ie.update(E),Re=E.material;if(V&&(E.boundingSphere!==void 0?(E.boundingSphere===null&&E.computeBoundingSphere(),Pe.copy(E.boundingSphere.center)):(Me.boundingSphere===null&&Me.computeBoundingSphere(),Pe.copy(Me.boundingSphere.center)),Pe.applyMatrix4(E.matrixWorld).applyMatrix4(ve)),Array.isArray(Re)){const Ne=Me.groups;for(let He=0,Ie=Ne.length;He<Ie;He++){const Be=Ne[He],dt=Re[Be.materialIndex];dt&&dt.visible&&v.push(E,Me,dt,k,Pe.z,Be)}}else Re.visible&&v.push(E,Me,Re,k,Pe.z,null)}}const pe=E.children;for(let Me=0,Re=pe.length;Me<Re;Me++)on(pe[Me],N,k,V)}function Aa(E,N,k,V){const B=E.opaque,pe=E.transmissive,Me=E.transparent;m.setupLightsView(k),J===!0&&ze.setGlobalState(_.clippingPlanes,k),pe.length>0&&gl(B,pe,N,k),V&&_e.viewport(A.copy(V)),B.length>0&&ns(B,N,k),pe.length>0&&ns(pe,N,k),Me.length>0&&ns(Me,N,k),_e.buffers.depth.setTest(!0),_e.buffers.depth.setMask(!0),_e.buffers.color.setMask(!0),_e.setPolygonOffset(!1)}function gl(E,N,k,V){if((k.isScene===!0?k.overrideMaterial:null)!==null)return;const pe=De.isWebGL2;xe===null&&(xe=new $n(1,1,{generateMipmaps:!0,type:Ee.has("EXT_color_buffer_half_float")?$i:Nn,minFilter:Zi,samples:pe?4:0})),_.getDrawingBufferSize(Le),pe?xe.setSize(Le.x,Le.y):xe.setSize(oa(Le.x),oa(Le.y));const Me=_.getRenderTarget();_.setRenderTarget(xe),_.getClearColor(j),D=_.getClearAlpha(),D<1&&_.setClearColor(16777215,.5),_.clear();const Re=_.toneMapping;_.toneMapping=On,ns(E,k,V),C.updateMultisampleRenderTarget(xe),C.updateRenderTargetMipmap(xe);let Ne=!1;for(let He=0,Ie=N.length;He<Ie;He++){const Be=N[He],dt=Be.object,Ht=Be.geometry,yt=Be.material,dn=Be.group;if(yt.side===jt&&dt.layers.test(V.layers)){const it=yt.side;yt.side=kt,yt.needsUpdate=!0,Ca(dt,k,V,Ht,yt,dn),yt.side=it,yt.needsUpdate=!0,Ne=!0}}Ne===!0&&(C.updateMultisampleRenderTarget(xe),C.updateRenderTargetMipmap(xe)),_.setRenderTarget(Me),_.setClearColor(j,D),_.toneMapping=Re}function ns(E,N,k){const V=N.isScene===!0?N.overrideMaterial:null;for(let B=0,pe=E.length;B<pe;B++){const Me=E[B],Re=Me.object,Ne=Me.geometry,He=V===null?Me.material:V,Ie=Me.group;Re.layers.test(k.layers)&&Ca(Re,N,k,Ne,He,Ie)}}function Ca(E,N,k,V,B,pe){E.onBeforeRender(_,N,k,V,B,pe),E.modelViewMatrix.multiplyMatrices(k.matrixWorldInverse,E.matrixWorld),E.normalMatrix.getNormalMatrix(E.modelViewMatrix),B.onBeforeRender(_,N,k,V,E,pe),B.transparent===!0&&B.side===jt&&B.forceSinglePass===!1?(B.side=kt,B.needsUpdate=!0,_.renderBufferDirect(k,N,V,B,E,pe),B.side=In,B.needsUpdate=!0,_.renderBufferDirect(k,N,V,B,E,pe),B.side=jt):_.renderBufferDirect(k,N,V,B,E,pe),E.onAfterRender(_,N,k,V,B,pe)}function is(E,N,k){N.isScene!==!0&&(N=Ae);const V=Fe.get(E),B=m.state.lights,pe=m.state.shadowsArray,Me=B.state.version,Re=ye.getParameters(E,B.state,pe,N,k),Ne=ye.getProgramCacheKey(Re);let He=V.programs;V.environment=E.isMeshStandardMaterial?N.environment:null,V.fog=N.fog,V.envMap=(E.isMeshStandardMaterial?F:b).get(E.envMap||V.environment),He===void 0&&(E.addEventListener("dispose",le),He=new Map,V.programs=He);let Ie=He.get(Ne);if(Ie!==void 0){if(V.currentProgram===Ie&&V.lightsStateVersion===Me)return Pa(E,Re),Ie}else Re.uniforms=ye.getUniforms(E),E.onBuild(k,Re,_),E.onBeforeCompile(Re,_),Ie=ye.acquireProgram(Re,Ne),He.set(Ne,Ie),V.uniforms=Re.uniforms;const Be=V.uniforms;return(!E.isShaderMaterial&&!E.isRawShaderMaterial||E.clipping===!0)&&(Be.clippingPlanes=ze.uniform),Pa(E,Re),V.needsLights=xl(E),V.lightsStateVersion=Me,V.needsLights&&(Be.ambientLightColor.value=B.state.ambient,Be.lightProbe.value=B.state.probe,Be.directionalLights.value=B.state.directional,Be.directionalLightShadows.value=B.state.directionalShadow,Be.spotLights.value=B.state.spot,Be.spotLightShadows.value=B.state.spotShadow,Be.rectAreaLights.value=B.state.rectArea,Be.ltc_1.value=B.state.rectAreaLTC1,Be.ltc_2.value=B.state.rectAreaLTC2,Be.pointLights.value=B.state.point,Be.pointLightShadows.value=B.state.pointShadow,Be.hemisphereLights.value=B.state.hemi,Be.directionalShadowMap.value=B.state.directionalShadowMap,Be.directionalShadowMatrix.value=B.state.directionalShadowMatrix,Be.spotShadowMap.value=B.state.spotShadowMap,Be.spotLightMatrix.value=B.state.spotLightMatrix,Be.spotLightMap.value=B.state.spotLightMap,Be.pointShadowMap.value=B.state.pointShadowMap,Be.pointShadowMatrix.value=B.state.pointShadowMatrix),V.currentProgram=Ie,V.uniformsList=null,Ie}function Ra(E){if(E.uniformsList===null){const N=E.currentProgram.getUniforms();E.uniformsList=zs.seqWithValue(N.seq,E.uniforms)}return E.uniformsList}function Pa(E,N){const k=Fe.get(E);k.outputColorSpace=N.outputColorSpace,k.batching=N.batching,k.instancing=N.instancing,k.instancingColor=N.instancingColor,k.skinning=N.skinning,k.morphTargets=N.morphTargets,k.morphNormals=N.morphNormals,k.morphColors=N.morphColors,k.morphTargetsCount=N.morphTargetsCount,k.numClippingPlanes=N.numClippingPlanes,k.numIntersection=N.numClipIntersection,k.vertexAlphas=N.vertexAlphas,k.vertexTangents=N.vertexTangents,k.toneMapping=N.toneMapping}function vl(E,N,k,V,B){N.isScene!==!0&&(N=Ae),C.resetTextureUnits();const pe=N.fog,Me=V.isMeshStandardMaterial?N.environment:null,Re=w===null?_.outputColorSpace:w.isXRRenderTarget===!0?w.texture.colorSpace:bn,Ne=(V.isMeshStandardMaterial?F:b).get(V.envMap||Me),He=V.vertexColors===!0&&!!k.attributes.color&&k.attributes.color.itemSize===4,Ie=!!k.attributes.tangent&&(!!V.normalMap||V.anisotropy>0),Be=!!k.morphAttributes.position,dt=!!k.morphAttributes.normal,Ht=!!k.morphAttributes.color;let yt=On;V.toneMapped&&(w===null||w.isXRRenderTarget===!0)&&(yt=_.toneMapping);const dn=k.morphAttributes.position||k.morphAttributes.normal||k.morphAttributes.color,it=dn!==void 0?dn.length:0,Ve=Fe.get(V),ir=m.state.lights;if(J===!0&&(he===!0||E!==M)){const Zt=E===M&&V.id===O;ze.setState(V,E,Zt)}let ot=!1;V.version===Ve.__version?(Ve.needsLights&&Ve.lightsStateVersion!==ir.state.version||Ve.outputColorSpace!==Re||B.isBatchedMesh&&Ve.batching===!1||!B.isBatchedMesh&&Ve.batching===!0||B.isInstancedMesh&&Ve.instancing===!1||!B.isInstancedMesh&&Ve.instancing===!0||B.isSkinnedMesh&&Ve.skinning===!1||!B.isSkinnedMesh&&Ve.skinning===!0||B.isInstancedMesh&&Ve.instancingColor===!0&&B.instanceColor===null||B.isInstancedMesh&&Ve.instancingColor===!1&&B.instanceColor!==null||Ve.envMap!==Ne||V.fog===!0&&Ve.fog!==pe||Ve.numClippingPlanes!==void 0&&(Ve.numClippingPlanes!==ze.numPlanes||Ve.numIntersection!==ze.numIntersection)||Ve.vertexAlphas!==He||Ve.vertexTangents!==Ie||Ve.morphTargets!==Be||Ve.morphNormals!==dt||Ve.morphColors!==Ht||Ve.toneMapping!==yt||De.isWebGL2===!0&&Ve.morphTargetsCount!==it)&&(ot=!0):(ot=!0,Ve.__version=V.version);let zn=Ve.currentProgram;ot===!0&&(zn=is(V,N,B));let La=!1,Fi=!1,sr=!1;const At=zn.getUniforms(),Bn=Ve.uniforms;if(_e.useProgram(zn.program)&&(La=!0,Fi=!0,sr=!0),V.id!==O&&(O=V.id,Fi=!0),La||M!==E){At.setValue(z,"projectionMatrix",E.projectionMatrix),At.setValue(z,"viewMatrix",E.matrixWorldInverse);const Zt=At.map.cameraPosition;Zt!==void 0&&Zt.setValue(z,Pe.setFromMatrixPosition(E.matrixWorld)),De.logarithmicDepthBuffer&&At.setValue(z,"logDepthBufFC",2/(Math.log(E.far+1)/Math.LN2)),(V.isMeshPhongMaterial||V.isMeshToonMaterial||V.isMeshLambertMaterial||V.isMeshBasicMaterial||V.isMeshStandardMaterial||V.isShaderMaterial)&&At.setValue(z,"isOrthographic",E.isOrthographicCamera===!0),M!==E&&(M=E,Fi=!0,sr=!0)}if(B.isSkinnedMesh){At.setOptional(z,B,"bindMatrix"),At.setOptional(z,B,"bindMatrixInverse");const Zt=B.skeleton;Zt&&(De.floatVertexTextures?(Zt.boneTexture===null&&Zt.computeBoneTexture(),At.setValue(z,"boneTexture",Zt.boneTexture,C)):console.warn("THREE.WebGLRenderer: SkinnedMesh can only be used with WebGL 2. With WebGL 1 OES_texture_float and vertex textures support is required."))}B.isBatchedMesh&&(At.setOptional(z,B,"batchingTexture"),At.setValue(z,"batchingTexture",B._matricesTexture,C));const rr=k.morphAttributes;if((rr.position!==void 0||rr.normal!==void 0||rr.color!==void 0&&De.isWebGL2===!0)&&ke.update(B,k,zn),(Fi||Ve.receiveShadow!==B.receiveShadow)&&(Ve.receiveShadow=B.receiveShadow,At.setValue(z,"receiveShadow",B.receiveShadow)),V.isMeshGouraudMaterial&&V.envMap!==null&&(Bn.envMap.value=Ne,Bn.flipEnvMap.value=Ne.isCubeTexture&&Ne.isRenderTargetTexture===!1?-1:1),Fi&&(At.setValue(z,"toneMappingExposure",_.toneMappingExposure),Ve.needsLights&&_l(Bn,sr),pe&&V.fog===!0&&ue.refreshFogUniforms(Bn,pe),ue.refreshMaterialUniforms(Bn,V,q,H,xe),zs.upload(z,Ra(Ve),Bn,C)),V.isShaderMaterial&&V.uniformsNeedUpdate===!0&&(zs.upload(z,Ra(Ve),Bn,C),V.uniformsNeedUpdate=!1),V.isSpriteMaterial&&At.setValue(z,"center",B.center),At.setValue(z,"modelViewMatrix",B.modelViewMatrix),At.setValue(z,"normalMatrix",B.normalMatrix),At.setValue(z,"modelMatrix",B.matrixWorld),V.isShaderMaterial||V.isRawShaderMaterial){const Zt=V.uniformsGroups;for(let ar=0,yl=Zt.length;ar<yl;ar++)if(De.isWebGL2){const Da=Zt[ar];re.update(Da,zn),re.bind(Da,zn)}else console.warn("THREE.WebGLRenderer: Uniform Buffer Objects can only be used with WebGL 2.")}return zn}function _l(E,N){E.ambientLightColor.needsUpdate=N,E.lightProbe.needsUpdate=N,E.directionalLights.needsUpdate=N,E.directionalLightShadows.needsUpdate=N,E.pointLights.needsUpdate=N,E.pointLightShadows.needsUpdate=N,E.spotLights.needsUpdate=N,E.spotLightShadows.needsUpdate=N,E.rectAreaLights.needsUpdate=N,E.hemisphereLights.needsUpdate=N}function xl(E){return E.isMeshLambertMaterial||E.isMeshToonMaterial||E.isMeshPhongMaterial||E.isMeshStandardMaterial||E.isShadowMaterial||E.isShaderMaterial&&E.lights===!0}this.getActiveCubeFace=function(){return R},this.getActiveMipmapLevel=function(){return T},this.getRenderTarget=function(){return w},this.setRenderTargetTextures=function(E,N,k){Fe.get(E.texture).__webglTexture=N,Fe.get(E.depthTexture).__webglTexture=k;const V=Fe.get(E);V.__hasExternalTextures=!0,V.__hasExternalTextures&&(V.__autoAllocateDepthBuffer=k===void 0,V.__autoAllocateDepthBuffer||Ee.has("WEBGL_multisampled_render_to_texture")===!0&&(console.warn("THREE.WebGLRenderer: Render-to-texture extension was disabled because an external texture was provided"),V.__useRenderToTexture=!1))},this.setRenderTargetFramebuffer=function(E,N){const k=Fe.get(E);k.__webglFramebuffer=N,k.__useDefaultFramebuffer=N===void 0},this.setRenderTarget=function(E,N=0,k=0){w=E,R=N,T=k;let V=!0,B=null,pe=!1,Me=!1;if(E){const Ne=Fe.get(E);Ne.__useDefaultFramebuffer!==void 0?(_e.bindFramebuffer(z.FRAMEBUFFER,null),V=!1):Ne.__webglFramebuffer===void 0?C.setupRenderTarget(E):Ne.__hasExternalTextures&&C.rebindTextures(E,Fe.get(E.texture).__webglTexture,Fe.get(E.depthTexture).__webglTexture);const He=E.texture;(He.isData3DTexture||He.isDataArrayTexture||He.isCompressedArrayTexture)&&(Me=!0);const Ie=Fe.get(E).__webglFramebuffer;E.isWebGLCubeRenderTarget?(Array.isArray(Ie[N])?B=Ie[N][k]:B=Ie[N],pe=!0):De.isWebGL2&&E.samples>0&&C.useMultisampledRTT(E)===!1?B=Fe.get(E).__webglMultisampledFramebuffer:Array.isArray(Ie)?B=Ie[k]:B=Ie,A.copy(E.viewport),U.copy(E.scissor),G=E.scissorTest}else A.copy(K).multiplyScalar(q).floor(),U.copy(se).multiplyScalar(q).floor(),G=oe;if(_e.bindFramebuffer(z.FRAMEBUFFER,B)&&De.drawBuffers&&V&&_e.drawBuffers(E,B),_e.viewport(A),_e.scissor(U),_e.setScissorTest(G),pe){const Ne=Fe.get(E.texture);z.framebufferTexture2D(z.FRAMEBUFFER,z.COLOR_ATTACHMENT0,z.TEXTURE_CUBE_MAP_POSITIVE_X+N,Ne.__webglTexture,k)}else if(Me){const Ne=Fe.get(E.texture),He=N||0;z.framebufferTextureLayer(z.FRAMEBUFFER,z.COLOR_ATTACHMENT0,Ne.__webglTexture,k||0,He)}O=-1},this.readRenderTargetPixels=function(E,N,k,V,B,pe,Me){if(!(E&&E.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let Re=Fe.get(E).__webglFramebuffer;if(E.isWebGLCubeRenderTarget&&Me!==void 0&&(Re=Re[Me]),Re){_e.bindFramebuffer(z.FRAMEBUFFER,Re);try{const Ne=E.texture,He=Ne.format,Ie=Ne.type;if(He!==an&&de.convert(He)!==z.getParameter(z.IMPLEMENTATION_COLOR_READ_FORMAT)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}const Be=Ie===$i&&(Ee.has("EXT_color_buffer_half_float")||De.isWebGL2&&Ee.has("EXT_color_buffer_float"));if(Ie!==Nn&&de.convert(Ie)!==z.getParameter(z.IMPLEMENTATION_COLOR_READ_TYPE)&&!(Ie===Pn&&(De.isWebGL2||Ee.has("OES_texture_float")||Ee.has("WEBGL_color_buffer_float")))&&!Be){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}N>=0&&N<=E.width-V&&k>=0&&k<=E.height-B&&z.readPixels(N,k,V,B,de.convert(He),de.convert(Ie),pe)}finally{const Ne=w!==null?Fe.get(w).__webglFramebuffer:null;_e.bindFramebuffer(z.FRAMEBUFFER,Ne)}}},this.copyFramebufferToTexture=function(E,N,k=0){const V=Math.pow(2,-k),B=Math.floor(N.image.width*V),pe=Math.floor(N.image.height*V);C.setTexture2D(N,0),z.copyTexSubImage2D(z.TEXTURE_2D,k,0,0,E.x,E.y,B,pe),_e.unbindTexture()},this.copyTextureToTexture=function(E,N,k,V=0){const B=N.image.width,pe=N.image.height,Me=de.convert(k.format),Re=de.convert(k.type);C.setTexture2D(k,0),z.pixelStorei(z.UNPACK_FLIP_Y_WEBGL,k.flipY),z.pixelStorei(z.UNPACK_PREMULTIPLY_ALPHA_WEBGL,k.premultiplyAlpha),z.pixelStorei(z.UNPACK_ALIGNMENT,k.unpackAlignment),N.isDataTexture?z.texSubImage2D(z.TEXTURE_2D,V,E.x,E.y,B,pe,Me,Re,N.image.data):N.isCompressedTexture?z.compressedTexSubImage2D(z.TEXTURE_2D,V,E.x,E.y,N.mipmaps[0].width,N.mipmaps[0].height,Me,N.mipmaps[0].data):z.texSubImage2D(z.TEXTURE_2D,V,E.x,E.y,Me,Re,N.image),V===0&&k.generateMipmaps&&z.generateMipmap(z.TEXTURE_2D),_e.unbindTexture()},this.copyTextureToTexture3D=function(E,N,k,V,B=0){if(_.isWebGL1Renderer){console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: can only be used with WebGL2.");return}const pe=E.max.x-E.min.x+1,Me=E.max.y-E.min.y+1,Re=E.max.z-E.min.z+1,Ne=de.convert(V.format),He=de.convert(V.type);let Ie;if(V.isData3DTexture)C.setTexture3D(V,0),Ie=z.TEXTURE_3D;else if(V.isDataArrayTexture||V.isCompressedArrayTexture)C.setTexture2DArray(V,0),Ie=z.TEXTURE_2D_ARRAY;else{console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: only supports THREE.DataTexture3D and THREE.DataTexture2DArray.");return}z.pixelStorei(z.UNPACK_FLIP_Y_WEBGL,V.flipY),z.pixelStorei(z.UNPACK_PREMULTIPLY_ALPHA_WEBGL,V.premultiplyAlpha),z.pixelStorei(z.UNPACK_ALIGNMENT,V.unpackAlignment);const Be=z.getParameter(z.UNPACK_ROW_LENGTH),dt=z.getParameter(z.UNPACK_IMAGE_HEIGHT),Ht=z.getParameter(z.UNPACK_SKIP_PIXELS),yt=z.getParameter(z.UNPACK_SKIP_ROWS),dn=z.getParameter(z.UNPACK_SKIP_IMAGES),it=k.isCompressedTexture?k.mipmaps[B]:k.image;z.pixelStorei(z.UNPACK_ROW_LENGTH,it.width),z.pixelStorei(z.UNPACK_IMAGE_HEIGHT,it.height),z.pixelStorei(z.UNPACK_SKIP_PIXELS,E.min.x),z.pixelStorei(z.UNPACK_SKIP_ROWS,E.min.y),z.pixelStorei(z.UNPACK_SKIP_IMAGES,E.min.z),k.isDataTexture||k.isData3DTexture?z.texSubImage3D(Ie,B,N.x,N.y,N.z,pe,Me,Re,Ne,He,it.data):k.isCompressedArrayTexture?(console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: untested support for compressed srcTexture."),z.compressedTexSubImage3D(Ie,B,N.x,N.y,N.z,pe,Me,Re,Ne,it.data)):z.texSubImage3D(Ie,B,N.x,N.y,N.z,pe,Me,Re,Ne,He,it),z.pixelStorei(z.UNPACK_ROW_LENGTH,Be),z.pixelStorei(z.UNPACK_IMAGE_HEIGHT,dt),z.pixelStorei(z.UNPACK_SKIP_PIXELS,Ht),z.pixelStorei(z.UNPACK_SKIP_ROWS,yt),z.pixelStorei(z.UNPACK_SKIP_IMAGES,dn),B===0&&V.generateMipmaps&&z.generateMipmap(Ie),_e.unbindTexture()},this.initTexture=function(E){E.isCubeTexture?C.setTextureCube(E,0):E.isData3DTexture?C.setTexture3D(E,0):E.isDataArrayTexture||E.isCompressedArrayTexture?C.setTexture2DArray(E,0):C.setTexture2D(E,0),_e.unbindTexture()},this.resetState=function(){R=0,T=0,w=null,_e.reset(),P.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return Sn}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;const t=this.getContext();t.drawingBufferColorSpace=e===pa?"display-p3":"srgb",t.unpackColorSpace=Je.workingColorSpace===Zs?"display-p3":"srgb"}get outputEncoding(){return console.warn("THREE.WebGLRenderer: Property .outputEncoding has been removed. Use .outputColorSpace instead."),this.outputColorSpace===Et?Zn:Uc}set outputEncoding(e){console.warn("THREE.WebGLRenderer: Property .outputEncoding has been removed. Use .outputColorSpace instead."),this.outputColorSpace=e===Zn?Et:bn}get useLegacyLights(){return console.warn("THREE.WebGLRenderer: The property .useLegacyLights has been deprecated. Migrate your lighting according to the following guide: https://discourse.threejs.org/t/updates-to-lighting-in-three-js-r155/53733."),this._useLegacyLights}set useLegacyLights(e){console.warn("THREE.WebGLRenderer: The property .useLegacyLights has been deprecated. Migrate your lighting according to the following guide: https://discourse.threejs.org/t/updates-to-lighting-in-three-js-r155/53733."),this._useLegacyLights=e}}class Rm extends tl{}Rm.prototype.isWebGL1Renderer=!0;class Pm extends gt{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,t){return super.copy(e,t),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){const t=super.toJSON(e);return this.fog!==null&&(t.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(t.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(t.object.backgroundIntensity=this.backgroundIntensity),t}}class Lm{constructor(e,t){this.isInterleavedBuffer=!0,this.array=e,this.stride=t,this.count=e!==void 0?e.length/t:0,this.usage=sa,this._updateRange={offset:0,count:-1},this.updateRanges=[],this.version=0,this.uuid=Mn()}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}get updateRange(){return console.warn("THREE.InterleavedBuffer: updateRange() is deprecated and will be removed in r169. Use addUpdateRange() instead."),this._updateRange}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.array=new e.array.constructor(e.array),this.count=e.count,this.stride=e.stride,this.usage=e.usage,this}copyAt(e,t,n){e*=this.stride,n*=t.stride;for(let i=0,r=this.stride;i<r;i++)this.array[e+i]=t.array[n+i];return this}set(e,t=0){return this.array.set(e,t),this}clone(e){e.arrayBuffers===void 0&&(e.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=Mn()),e.arrayBuffers[this.array.buffer._uuid]===void 0&&(e.arrayBuffers[this.array.buffer._uuid]=this.array.slice(0).buffer);const t=new this.array.constructor(e.arrayBuffers[this.array.buffer._uuid]),n=new this.constructor(t,this.stride);return n.setUsage(this.usage),n}onUpload(e){return this.onUploadCallback=e,this}toJSON(e){return e.arrayBuffers===void 0&&(e.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=Mn()),e.arrayBuffers[this.array.buffer._uuid]===void 0&&(e.arrayBuffers[this.array.buffer._uuid]=Array.from(new Uint32Array(this.array.buffer))),{uuid:this.uuid,buffer:this.array.buffer._uuid,type:this.array.constructor.name,stride:this.stride}}}const Ut=new x;class Xs{constructor(e,t,n,i=!1){this.isInterleavedBufferAttribute=!0,this.name="",this.data=e,this.itemSize=t,this.offset=n,this.normalized=i}get count(){return this.data.count}get array(){return this.data.array}set needsUpdate(e){this.data.needsUpdate=e}applyMatrix4(e){for(let t=0,n=this.data.count;t<n;t++)Ut.fromBufferAttribute(this,t),Ut.applyMatrix4(e),this.setXYZ(t,Ut.x,Ut.y,Ut.z);return this}applyNormalMatrix(e){for(let t=0,n=this.count;t<n;t++)Ut.fromBufferAttribute(this,t),Ut.applyNormalMatrix(e),this.setXYZ(t,Ut.x,Ut.y,Ut.z);return this}transformDirection(e){for(let t=0,n=this.count;t<n;t++)Ut.fromBufferAttribute(this,t),Ut.transformDirection(e),this.setXYZ(t,Ut.x,Ut.y,Ut.z);return this}setX(e,t){return this.normalized&&(t=Qe(t,this.array)),this.data.array[e*this.data.stride+this.offset]=t,this}setY(e,t){return this.normalized&&(t=Qe(t,this.array)),this.data.array[e*this.data.stride+this.offset+1]=t,this}setZ(e,t){return this.normalized&&(t=Qe(t,this.array)),this.data.array[e*this.data.stride+this.offset+2]=t,this}setW(e,t){return this.normalized&&(t=Qe(t,this.array)),this.data.array[e*this.data.stride+this.offset+3]=t,this}getX(e){let t=this.data.array[e*this.data.stride+this.offset];return this.normalized&&(t=yn(t,this.array)),t}getY(e){let t=this.data.array[e*this.data.stride+this.offset+1];return this.normalized&&(t=yn(t,this.array)),t}getZ(e){let t=this.data.array[e*this.data.stride+this.offset+2];return this.normalized&&(t=yn(t,this.array)),t}getW(e){let t=this.data.array[e*this.data.stride+this.offset+3];return this.normalized&&(t=yn(t,this.array)),t}setXY(e,t,n){return e=e*this.data.stride+this.offset,this.normalized&&(t=Qe(t,this.array),n=Qe(n,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=n,this}setXYZ(e,t,n,i){return e=e*this.data.stride+this.offset,this.normalized&&(t=Qe(t,this.array),n=Qe(n,this.array),i=Qe(i,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=n,this.data.array[e+2]=i,this}setXYZW(e,t,n,i,r){return e=e*this.data.stride+this.offset,this.normalized&&(t=Qe(t,this.array),n=Qe(n,this.array),i=Qe(i,this.array),r=Qe(r,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=n,this.data.array[e+2]=i,this.data.array[e+3]=r,this}clone(e){if(e===void 0){console.log("THREE.InterleavedBufferAttribute.clone(): Cloning an interleaved buffer attribute will de-interleave buffer data.");const t=[];for(let n=0;n<this.count;n++){const i=n*this.data.stride+this.offset;for(let r=0;r<this.itemSize;r++)t.push(this.data.array[i+r])}return new Lt(new this.array.constructor(t),this.itemSize,this.normalized)}else return e.interleavedBuffers===void 0&&(e.interleavedBuffers={}),e.interleavedBuffers[this.data.uuid]===void 0&&(e.interleavedBuffers[this.data.uuid]=this.data.clone(e)),new Xs(e.interleavedBuffers[this.data.uuid],this.itemSize,this.offset,this.normalized)}toJSON(e){if(e===void 0){console.log("THREE.InterleavedBufferAttribute.toJSON(): Serializing an interleaved buffer attribute will de-interleave buffer data.");const t=[];for(let n=0;n<this.count;n++){const i=n*this.data.stride+this.offset;for(let r=0;r<this.itemSize;r++)t.push(this.data.array[i+r])}return{itemSize:this.itemSize,type:this.array.constructor.name,array:t,normalized:this.normalized}}else return e.interleavedBuffers===void 0&&(e.interleavedBuffers={}),e.interleavedBuffers[this.data.uuid]===void 0&&(e.interleavedBuffers[this.data.uuid]=this.data.toJSON(e)),{isInterleavedBufferAttribute:!0,itemSize:this.itemSize,data:this.data.uuid,offset:this.offset,normalized:this.normalized}}}class tn extends ti{constructor(e){super(),this.isSpriteMaterial=!0,this.type="SpriteMaterial",this.color=new Ue(16777215),this.map=null,this.alphaMap=null,this.rotation=0,this.sizeAttenuation=!0,this.transparent=!0,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.alphaMap=e.alphaMap,this.rotation=e.rotation,this.sizeAttenuation=e.sizeAttenuation,this.fog=e.fog,this}}let xi;const Hi=new x,yi=new x,Si=new x,Mi=new $,Vi=new $,nl=new ht,Ts=new x,Wi=new x,As=new x,Qo=new $,Fr=new $,ec=new $;class Ki extends gt{constructor(e=new tn){if(super(),this.isSprite=!0,this.type="Sprite",xi===void 0){xi=new lt;const t=new Float32Array([-.5,-.5,0,0,0,.5,-.5,0,1,0,.5,.5,0,1,1,-.5,.5,0,0,1]),n=new Lm(t,5);xi.setIndex([0,1,2,0,2,3]),xi.setAttribute("position",new Xs(n,3,0,!1)),xi.setAttribute("uv",new Xs(n,2,3,!1))}this.geometry=xi,this.material=e,this.center=new $(.5,.5)}raycast(e,t){e.camera===null&&console.error('THREE.Sprite: "Raycaster.camera" needs to be set in order to raycast against sprites.'),yi.setFromMatrixScale(this.matrixWorld),nl.copy(e.camera.matrixWorld),this.modelViewMatrix.multiplyMatrices(e.camera.matrixWorldInverse,this.matrixWorld),Si.setFromMatrixPosition(this.modelViewMatrix),e.camera.isPerspectiveCamera&&this.material.sizeAttenuation===!1&&yi.multiplyScalar(-Si.z);const n=this.material.rotation;let i,r;n!==0&&(r=Math.cos(n),i=Math.sin(n));const a=this.center;Cs(Ts.set(-.5,-.5,0),Si,a,yi,i,r),Cs(Wi.set(.5,-.5,0),Si,a,yi,i,r),Cs(As.set(.5,.5,0),Si,a,yi,i,r),Qo.set(0,0),Fr.set(1,0),ec.set(1,1);let o=e.ray.intersectTriangle(Ts,Wi,As,!1,Hi);if(o===null&&(Cs(Wi.set(-.5,.5,0),Si,a,yi,i,r),Fr.set(0,1),o=e.ray.intersectTriangle(Ts,As,Wi,!1,Hi),o===null))return;const c=e.ray.origin.distanceTo(Hi);c<e.near||c>e.far||t.push({distance:c,point:Hi.clone(),uv:Xt.getInterpolation(Hi,Ts,Wi,As,Qo,Fr,ec,new $),face:null,object:this})}copy(e,t){return super.copy(e,t),e.center!==void 0&&this.center.copy(e.center),this.material=e.material,this}}function Cs(s,e,t,n,i,r){Mi.subVectors(s,t).addScalar(.5).multiply(n),i!==void 0?(Vi.x=r*Mi.x-i*Mi.y,Vi.y=i*Mi.x+r*Mi.y):Vi.copy(Mi),s.copy(e),s.x+=Vi.x,s.y+=Vi.y,s.applyMatrix4(nl)}class ln extends ti{constructor(e){super(),this.isLineBasicMaterial=!0,this.type="LineBasicMaterial",this.color=new Ue(16777215),this.map=null,this.linewidth=1,this.linecap="round",this.linejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.linewidth=e.linewidth,this.linecap=e.linecap,this.linejoin=e.linejoin,this.fog=e.fog,this}}const tc=new x,nc=new x,ic=new ht,zr=new Ks,Rs=new $s;class Pi extends gt{constructor(e=new lt,t=new ln){super(),this.isLine=!0,this.type="Line",this.geometry=e,this.material=t,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}computeLineDistances(){const e=this.geometry;if(e.index===null){const t=e.attributes.position,n=[0];for(let i=1,r=t.count;i<r;i++)tc.fromBufferAttribute(t,i-1),nc.fromBufferAttribute(t,i),n[i]=n[i-1],n[i]+=tc.distanceTo(nc);e.setAttribute("lineDistance",new ft(n,1))}else console.warn("THREE.Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}raycast(e,t){const n=this.geometry,i=this.matrixWorld,r=e.params.Line.threshold,a=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),Rs.copy(n.boundingSphere),Rs.applyMatrix4(i),Rs.radius+=r,e.ray.intersectsSphere(Rs)===!1)return;ic.copy(i).invert(),zr.copy(e.ray).applyMatrix4(ic);const o=r/((this.scale.x+this.scale.y+this.scale.z)/3),c=o*o,l=new x,h=new x,u=new x,f=new x,d=this.isLineSegments?2:1,g=n.index,m=n.attributes.position;if(g!==null){const p=Math.max(0,a.start),y=Math.min(g.count,a.start+a.count);for(let _=p,S=y-1;_<S;_+=d){const R=g.getX(_),T=g.getX(_+1);if(l.fromBufferAttribute(m,R),h.fromBufferAttribute(m,T),zr.distanceSqToSegment(l,h,f,u)>c)continue;f.applyMatrix4(this.matrixWorld);const O=e.ray.origin.distanceTo(f);O<e.near||O>e.far||t.push({distance:O,point:u.clone().applyMatrix4(this.matrixWorld),index:_,face:null,faceIndex:null,object:this})}}else{const p=Math.max(0,a.start),y=Math.min(m.count,a.start+a.count);for(let _=p,S=y-1;_<S;_+=d){if(l.fromBufferAttribute(m,_),h.fromBufferAttribute(m,_+1),zr.distanceSqToSegment(l,h,f,u)>c)continue;f.applyMatrix4(this.matrixWorld);const T=e.ray.origin.distanceTo(f);T<e.near||T>e.far||t.push({distance:T,point:u.clone().applyMatrix4(this.matrixWorld),index:_,face:null,faceIndex:null,object:this})}}}updateMorphTargets(){const t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){const i=t[n[0]];if(i!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,a=i.length;r<a;r++){const o=i[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=r}}}}}const sc=new x,rc=new x;class _a extends Pi{constructor(e,t){super(e,t),this.isLineSegments=!0,this.type="LineSegments"}computeLineDistances(){const e=this.geometry;if(e.index===null){const t=e.attributes.position,n=[];for(let i=0,r=t.count;i<r;i+=2)sc.fromBufferAttribute(t,i),rc.fromBufferAttribute(t,i+1),n[i]=i===0?0:n[i-1],n[i+1]=n[i]+sc.distanceTo(rc);e.setAttribute("lineDistance",new ft(n,1))}else console.warn("THREE.LineSegments.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}}class er extends Nt{constructor(e,t,n,i,r,a,o,c,l){super(e,t,n,i,r,a,o,c,l),this.isCanvasTexture=!0,this.needsUpdate=!0}}class hn{constructor(){this.type="Curve",this.arcLengthDivisions=200}getPoint(){return console.warn("THREE.Curve: .getPoint() not implemented."),null}getPointAt(e,t){const n=this.getUtoTmapping(e);return this.getPoint(n,t)}getPoints(e=5){const t=[];for(let n=0;n<=e;n++)t.push(this.getPoint(n/e));return t}getSpacedPoints(e=5){const t=[];for(let n=0;n<=e;n++)t.push(this.getPointAt(n/e));return t}getLength(){const e=this.getLengths();return e[e.length-1]}getLengths(e=this.arcLengthDivisions){if(this.cacheArcLengths&&this.cacheArcLengths.length===e+1&&!this.needsUpdate)return this.cacheArcLengths;this.needsUpdate=!1;const t=[];let n,i=this.getPoint(0),r=0;t.push(0);for(let a=1;a<=e;a++)n=this.getPoint(a/e),r+=n.distanceTo(i),t.push(r),i=n;return this.cacheArcLengths=t,t}updateArcLengths(){this.needsUpdate=!0,this.getLengths()}getUtoTmapping(e,t){const n=this.getLengths();let i=0;const r=n.length;let a;t?a=t:a=e*n[r-1];let o=0,c=r-1,l;for(;o<=c;)if(i=Math.floor(o+(c-o)/2),l=n[i]-a,l<0)o=i+1;else if(l>0)c=i-1;else{c=i;break}if(i=c,n[i]===a)return i/(r-1);const h=n[i],f=n[i+1]-h,d=(a-h)/f;return(i+d)/(r-1)}getTangent(e,t){let i=e-1e-4,r=e+1e-4;i<0&&(i=0),r>1&&(r=1);const a=this.getPoint(i),o=this.getPoint(r),c=t||(a.isVector2?new $:new x);return c.copy(o).sub(a).normalize(),c}getTangentAt(e,t){const n=this.getUtoTmapping(e);return this.getTangent(n,t)}computeFrenetFrames(e,t){const n=new x,i=[],r=[],a=[],o=new x,c=new ht;for(let d=0;d<=e;d++){const g=d/e;i[d]=this.getTangentAt(g,new x)}r[0]=new x,a[0]=new x;let l=Number.MAX_VALUE;const h=Math.abs(i[0].x),u=Math.abs(i[0].y),f=Math.abs(i[0].z);h<=l&&(l=h,n.set(1,0,0)),u<=l&&(l=u,n.set(0,1,0)),f<=l&&n.set(0,0,1),o.crossVectors(i[0],n).normalize(),r[0].crossVectors(i[0],o),a[0].crossVectors(i[0],r[0]);for(let d=1;d<=e;d++){if(r[d]=r[d-1].clone(),a[d]=a[d-1].clone(),o.crossVectors(i[d-1],i[d]),o.length()>Number.EPSILON){o.normalize();const g=Math.acos(wt(i[d-1].dot(i[d]),-1,1));r[d].applyMatrix4(c.makeRotationAxis(o,g))}a[d].crossVectors(i[d],r[d])}if(t===!0){let d=Math.acos(wt(r[0].dot(r[e]),-1,1));d/=e,i[0].dot(o.crossVectors(r[0],r[e]))>0&&(d=-d);for(let g=1;g<=e;g++)r[g].applyMatrix4(c.makeRotationAxis(i[g],d*g)),a[g].crossVectors(i[g],r[g])}return{tangents:i,normals:r,binormals:a}}clone(){return new this.constructor().copy(this)}copy(e){return this.arcLengthDivisions=e.arcLengthDivisions,this}toJSON(){const e={metadata:{version:4.6,type:"Curve",generator:"Curve.toJSON"}};return e.arcLengthDivisions=this.arcLengthDivisions,e.type=this.type,e}fromJSON(e){return this.arcLengthDivisions=e.arcLengthDivisions,this}}class xa extends hn{constructor(e=0,t=0,n=1,i=1,r=0,a=Math.PI*2,o=!1,c=0){super(),this.isEllipseCurve=!0,this.type="EllipseCurve",this.aX=e,this.aY=t,this.xRadius=n,this.yRadius=i,this.aStartAngle=r,this.aEndAngle=a,this.aClockwise=o,this.aRotation=c}getPoint(e,t){const n=t||new $,i=Math.PI*2;let r=this.aEndAngle-this.aStartAngle;const a=Math.abs(r)<Number.EPSILON;for(;r<0;)r+=i;for(;r>i;)r-=i;r<Number.EPSILON&&(a?r=0:r=i),this.aClockwise===!0&&!a&&(r===i?r=-i:r=r-i);const o=this.aStartAngle+e*r;let c=this.aX+this.xRadius*Math.cos(o),l=this.aY+this.yRadius*Math.sin(o);if(this.aRotation!==0){const h=Math.cos(this.aRotation),u=Math.sin(this.aRotation),f=c-this.aX,d=l-this.aY;c=f*h-d*u+this.aX,l=f*u+d*h+this.aY}return n.set(c,l)}copy(e){return super.copy(e),this.aX=e.aX,this.aY=e.aY,this.xRadius=e.xRadius,this.yRadius=e.yRadius,this.aStartAngle=e.aStartAngle,this.aEndAngle=e.aEndAngle,this.aClockwise=e.aClockwise,this.aRotation=e.aRotation,this}toJSON(){const e=super.toJSON();return e.aX=this.aX,e.aY=this.aY,e.xRadius=this.xRadius,e.yRadius=this.yRadius,e.aStartAngle=this.aStartAngle,e.aEndAngle=this.aEndAngle,e.aClockwise=this.aClockwise,e.aRotation=this.aRotation,e}fromJSON(e){return super.fromJSON(e),this.aX=e.aX,this.aY=e.aY,this.xRadius=e.xRadius,this.yRadius=e.yRadius,this.aStartAngle=e.aStartAngle,this.aEndAngle=e.aEndAngle,this.aClockwise=e.aClockwise,this.aRotation=e.aRotation,this}}class Dm extends xa{constructor(e,t,n,i,r,a){super(e,t,n,n,i,r,a),this.isArcCurve=!0,this.type="ArcCurve"}}function ya(){let s=0,e=0,t=0,n=0;function i(r,a,o,c){s=r,e=o,t=-3*r+3*a-2*o-c,n=2*r-2*a+o+c}return{initCatmullRom:function(r,a,o,c,l){i(a,o,l*(o-r),l*(c-a))},initNonuniformCatmullRom:function(r,a,o,c,l,h,u){let f=(a-r)/l-(o-r)/(l+h)+(o-a)/h,d=(o-a)/h-(c-a)/(h+u)+(c-o)/u;f*=h,d*=h,i(a,o,f,d)},calc:function(r){const a=r*r,o=a*r;return s+e*r+t*a+n*o}}}const Ps=new x,Br=new ya,Gr=new ya,kr=new ya;class Om extends hn{constructor(e=[],t=!1,n="centripetal",i=.5){super(),this.isCatmullRomCurve3=!0,this.type="CatmullRomCurve3",this.points=e,this.closed=t,this.curveType=n,this.tension=i}getPoint(e,t=new x){const n=t,i=this.points,r=i.length,a=(r-(this.closed?0:1))*e;let o=Math.floor(a),c=a-o;this.closed?o+=o>0?0:(Math.floor(Math.abs(o)/r)+1)*r:c===0&&o===r-1&&(o=r-2,c=1);let l,h;this.closed||o>0?l=i[(o-1)%r]:(Ps.subVectors(i[0],i[1]).add(i[0]),l=Ps);const u=i[o%r],f=i[(o+1)%r];if(this.closed||o+2<r?h=i[(o+2)%r]:(Ps.subVectors(i[r-1],i[r-2]).add(i[r-1]),h=Ps),this.curveType==="centripetal"||this.curveType==="chordal"){const d=this.curveType==="chordal"?.5:.25;let g=Math.pow(l.distanceToSquared(u),d),v=Math.pow(u.distanceToSquared(f),d),m=Math.pow(f.distanceToSquared(h),d);v<1e-4&&(v=1),g<1e-4&&(g=v),m<1e-4&&(m=v),Br.initNonuniformCatmullRom(l.x,u.x,f.x,h.x,g,v,m),Gr.initNonuniformCatmullRom(l.y,u.y,f.y,h.y,g,v,m),kr.initNonuniformCatmullRom(l.z,u.z,f.z,h.z,g,v,m)}else this.curveType==="catmullrom"&&(Br.initCatmullRom(l.x,u.x,f.x,h.x,this.tension),Gr.initCatmullRom(l.y,u.y,f.y,h.y,this.tension),kr.initCatmullRom(l.z,u.z,f.z,h.z,this.tension));return n.set(Br.calc(c),Gr.calc(c),kr.calc(c)),n}copy(e){super.copy(e),this.points=[];for(let t=0,n=e.points.length;t<n;t++){const i=e.points[t];this.points.push(i.clone())}return this.closed=e.closed,this.curveType=e.curveType,this.tension=e.tension,this}toJSON(){const e=super.toJSON();e.points=[];for(let t=0,n=this.points.length;t<n;t++){const i=this.points[t];e.points.push(i.toArray())}return e.closed=this.closed,e.curveType=this.curveType,e.tension=this.tension,e}fromJSON(e){super.fromJSON(e),this.points=[];for(let t=0,n=e.points.length;t<n;t++){const i=e.points[t];this.points.push(new x().fromArray(i))}return this.closed=e.closed,this.curveType=e.curveType,this.tension=e.tension,this}}function ac(s,e,t,n,i){const r=(n-e)*.5,a=(i-t)*.5,o=s*s,c=s*o;return(2*t-2*n+r+a)*c+(-3*t+3*n-2*r-a)*o+r*s+t}function Nm(s,e){const t=1-s;return t*t*e}function Um(s,e){return 2*(1-s)*s*e}function Im(s,e){return s*s*e}function qi(s,e,t,n){return Nm(s,e)+Um(s,t)+Im(s,n)}function Fm(s,e){const t=1-s;return t*t*t*e}function zm(s,e){const t=1-s;return 3*t*t*s*e}function Bm(s,e){return 3*(1-s)*s*s*e}function Gm(s,e){return s*s*s*e}function Yi(s,e,t,n,i){return Fm(s,e)+zm(s,t)+Bm(s,n)+Gm(s,i)}class Sa extends hn{constructor(e=new $,t=new $,n=new $,i=new $){super(),this.isCubicBezierCurve=!0,this.type="CubicBezierCurve",this.v0=e,this.v1=t,this.v2=n,this.v3=i}getPoint(e,t=new $){const n=t,i=this.v0,r=this.v1,a=this.v2,o=this.v3;return n.set(Yi(e,i.x,r.x,a.x,o.x),Yi(e,i.y,r.y,a.y,o.y)),n}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this.v3.copy(e.v3),this}toJSON(){const e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e.v3=this.v3.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this.v3.fromArray(e.v3),this}}class Ti extends hn{constructor(e=new x,t=new x,n=new x,i=new x){super(),this.isCubicBezierCurve3=!0,this.type="CubicBezierCurve3",this.v0=e,this.v1=t,this.v2=n,this.v3=i}getPoint(e,t=new x){const n=t,i=this.v0,r=this.v1,a=this.v2,o=this.v3;return n.set(Yi(e,i.x,r.x,a.x,o.x),Yi(e,i.y,r.y,a.y,o.y),Yi(e,i.z,r.z,a.z,o.z)),n}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this.v3.copy(e.v3),this}toJSON(){const e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e.v3=this.v3.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this.v3.fromArray(e.v3),this}}class il extends hn{constructor(e=new $,t=new $){super(),this.isLineCurve=!0,this.type="LineCurve",this.v1=e,this.v2=t}getPoint(e,t=new $){const n=t;return e===1?n.copy(this.v2):(n.copy(this.v2).sub(this.v1),n.multiplyScalar(e).add(this.v1)),n}getPointAt(e,t){return this.getPoint(e,t)}getTangent(e,t=new $){return t.subVectors(this.v2,this.v1).normalize()}getTangentAt(e,t){return this.getTangent(e,t)}copy(e){return super.copy(e),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){const e=super.toJSON();return e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}}class sl extends hn{constructor(e=new x,t=new x){super(),this.isLineCurve3=!0,this.type="LineCurve3",this.v1=e,this.v2=t}getPoint(e,t=new x){const n=t;return e===1?n.copy(this.v2):(n.copy(this.v2).sub(this.v1),n.multiplyScalar(e).add(this.v1)),n}getPointAt(e,t){return this.getPoint(e,t)}getTangent(e,t=new x){return t.subVectors(this.v2,this.v1).normalize()}getTangentAt(e,t){return this.getTangent(e,t)}copy(e){return super.copy(e),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){const e=super.toJSON();return e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}}class rl extends hn{constructor(e=new $,t=new $,n=new $){super(),this.isQuadraticBezierCurve=!0,this.type="QuadraticBezierCurve",this.v0=e,this.v1=t,this.v2=n}getPoint(e,t=new $){const n=t,i=this.v0,r=this.v1,a=this.v2;return n.set(qi(e,i.x,r.x,a.x),qi(e,i.y,r.y,a.y)),n}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){const e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}}class km extends hn{constructor(e=new x,t=new x,n=new x){super(),this.isQuadraticBezierCurve3=!0,this.type="QuadraticBezierCurve3",this.v0=e,this.v1=t,this.v2=n}getPoint(e,t=new x){const n=t,i=this.v0,r=this.v1,a=this.v2;return n.set(qi(e,i.x,r.x,a.x),qi(e,i.y,r.y,a.y),qi(e,i.z,r.z,a.z)),n}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){const e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}}class al extends hn{constructor(e=[]){super(),this.isSplineCurve=!0,this.type="SplineCurve",this.points=e}getPoint(e,t=new $){const n=t,i=this.points,r=(i.length-1)*e,a=Math.floor(r),o=r-a,c=i[a===0?a:a-1],l=i[a],h=i[a>i.length-2?i.length-1:a+1],u=i[a>i.length-3?i.length-1:a+2];return n.set(ac(o,c.x,l.x,h.x,u.x),ac(o,c.y,l.y,h.y,u.y)),n}copy(e){super.copy(e),this.points=[];for(let t=0,n=e.points.length;t<n;t++){const i=e.points[t];this.points.push(i.clone())}return this}toJSON(){const e=super.toJSON();e.points=[];for(let t=0,n=this.points.length;t<n;t++){const i=this.points[t];e.points.push(i.toArray())}return e}fromJSON(e){super.fromJSON(e),this.points=[];for(let t=0,n=e.points.length;t<n;t++){const i=e.points[t];this.points.push(new $().fromArray(i))}return this}}var oc=Object.freeze({__proto__:null,ArcCurve:Dm,CatmullRomCurve3:Om,CubicBezierCurve:Sa,CubicBezierCurve3:Ti,EllipseCurve:xa,LineCurve:il,LineCurve3:sl,QuadraticBezierCurve:rl,QuadraticBezierCurve3:km,SplineCurve:al});class Hm extends hn{constructor(){super(),this.type="CurvePath",this.curves=[],this.autoClose=!1}add(e){this.curves.push(e)}closePath(){const e=this.curves[0].getPoint(0),t=this.curves[this.curves.length-1].getPoint(1);if(!e.equals(t)){const n=e.isVector2===!0?"LineCurve":"LineCurve3";this.curves.push(new oc[n](t,e))}return this}getPoint(e,t){const n=e*this.getLength(),i=this.getCurveLengths();let r=0;for(;r<i.length;){if(i[r]>=n){const a=i[r]-n,o=this.curves[r],c=o.getLength(),l=c===0?0:1-a/c;return o.getPointAt(l,t)}r++}return null}getLength(){const e=this.getCurveLengths();return e[e.length-1]}updateArcLengths(){this.needsUpdate=!0,this.cacheLengths=null,this.getCurveLengths()}getCurveLengths(){if(this.cacheLengths&&this.cacheLengths.length===this.curves.length)return this.cacheLengths;const e=[];let t=0;for(let n=0,i=this.curves.length;n<i;n++)t+=this.curves[n].getLength(),e.push(t);return this.cacheLengths=e,e}getSpacedPoints(e=40){const t=[];for(let n=0;n<=e;n++)t.push(this.getPoint(n/e));return this.autoClose&&t.push(t[0]),t}getPoints(e=12){const t=[];let n;for(let i=0,r=this.curves;i<r.length;i++){const a=r[i],o=a.isEllipseCurve?e*2:a.isLineCurve||a.isLineCurve3?1:a.isSplineCurve?e*a.points.length:e,c=a.getPoints(o);for(let l=0;l<c.length;l++){const h=c[l];n&&n.equals(h)||(t.push(h),n=h)}}return this.autoClose&&t.length>1&&!t[t.length-1].equals(t[0])&&t.push(t[0]),t}copy(e){super.copy(e),this.curves=[];for(let t=0,n=e.curves.length;t<n;t++){const i=e.curves[t];this.curves.push(i.clone())}return this.autoClose=e.autoClose,this}toJSON(){const e=super.toJSON();e.autoClose=this.autoClose,e.curves=[];for(let t=0,n=this.curves.length;t<n;t++){const i=this.curves[t];e.curves.push(i.toJSON())}return e}fromJSON(e){super.fromJSON(e),this.autoClose=e.autoClose,this.curves=[];for(let t=0,n=e.curves.length;t<n;t++){const i=e.curves[t];this.curves.push(new oc[i.type]().fromJSON(i))}return this}}class cc extends Hm{constructor(e){super(),this.type="Path",this.currentPoint=new $,e&&this.setFromPoints(e)}setFromPoints(e){this.moveTo(e[0].x,e[0].y);for(let t=1,n=e.length;t<n;t++)this.lineTo(e[t].x,e[t].y);return this}moveTo(e,t){return this.currentPoint.set(e,t),this}lineTo(e,t){const n=new il(this.currentPoint.clone(),new $(e,t));return this.curves.push(n),this.currentPoint.set(e,t),this}quadraticCurveTo(e,t,n,i){const r=new rl(this.currentPoint.clone(),new $(e,t),new $(n,i));return this.curves.push(r),this.currentPoint.set(n,i),this}bezierCurveTo(e,t,n,i,r,a){const o=new Sa(this.currentPoint.clone(),new $(e,t),new $(n,i),new $(r,a));return this.curves.push(o),this.currentPoint.set(r,a),this}splineThru(e){const t=[this.currentPoint.clone()].concat(e),n=new al(t);return this.curves.push(n),this.currentPoint.copy(e[e.length-1]),this}arc(e,t,n,i,r,a){const o=this.currentPoint.x,c=this.currentPoint.y;return this.absarc(e+o,t+c,n,i,r,a),this}absarc(e,t,n,i,r,a){return this.absellipse(e,t,n,n,i,r,a),this}ellipse(e,t,n,i,r,a,o,c){const l=this.currentPoint.x,h=this.currentPoint.y;return this.absellipse(e+l,t+h,n,i,r,a,o,c),this}absellipse(e,t,n,i,r,a,o,c){const l=new xa(e,t,n,i,r,a,o,c);if(this.curves.length>0){const u=l.getPoint(0);u.equals(this.currentPoint)||this.lineTo(u.x,u.y)}this.curves.push(l);const h=l.getPoint(1);return this.currentPoint.copy(h),this}copy(e){return super.copy(e),this.currentPoint.copy(e.currentPoint),this}toJSON(){const e=super.toJSON();return e.currentPoint=this.currentPoint.toArray(),e}fromJSON(e){return super.fromJSON(e),this.currentPoint.fromArray(e.currentPoint),this}}class Ui extends lt{constructor(e=1,t=1,n=1,i=32,r=1,a=!1,o=0,c=Math.PI*2){super(),this.type="CylinderGeometry",this.parameters={radiusTop:e,radiusBottom:t,height:n,radialSegments:i,heightSegments:r,openEnded:a,thetaStart:o,thetaLength:c};const l=this;i=Math.floor(i),r=Math.floor(r);const h=[],u=[],f=[],d=[];let g=0;const v=[],m=n/2;let p=0;y(),a===!1&&(e>0&&_(!0),t>0&&_(!1)),this.setIndex(h),this.setAttribute("position",new ft(u,3)),this.setAttribute("normal",new ft(f,3)),this.setAttribute("uv",new ft(d,2));function y(){const S=new x,R=new x;let T=0;const w=(t-e)/n;for(let O=0;O<=r;O++){const M=[],A=O/r,U=A*(t-e)+e;for(let G=0;G<=i;G++){const j=G/i,D=j*c+o,I=Math.sin(D),H=Math.cos(D);R.x=U*I,R.y=-A*n+m,R.z=U*H,u.push(R.x,R.y,R.z),S.set(I,w,H).normalize(),f.push(S.x,S.y,S.z),d.push(j,1-A),M.push(g++)}v.push(M)}for(let O=0;O<i;O++)for(let M=0;M<r;M++){const A=v[M][O],U=v[M+1][O],G=v[M+1][O+1],j=v[M][O+1];h.push(A,U,j),h.push(U,G,j),T+=6}l.addGroup(p,T,0),p+=T}function _(S){const R=g,T=new $,w=new x;let O=0;const M=S===!0?e:t,A=S===!0?1:-1;for(let G=1;G<=i;G++)u.push(0,m*A,0),f.push(0,A,0),d.push(.5,.5),g++;const U=g;for(let G=0;G<=i;G++){const D=G/i*c+o,I=Math.cos(D),H=Math.sin(D);w.x=M*H,w.y=m*A,w.z=M*I,u.push(w.x,w.y,w.z),f.push(0,A,0),T.x=I*.5+.5,T.y=H*.5*A+.5,d.push(T.x,T.y),g++}for(let G=0;G<i;G++){const j=R+G,D=U+G;S===!0?h.push(D,D+1,j):h.push(D+1,D,j),O+=3}l.addGroup(p,O,S===!0?1:2),p+=O}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Ui(e.radiusTop,e.radiusBottom,e.height,e.radialSegments,e.heightSegments,e.openEnded,e.thetaStart,e.thetaLength)}}class Ma extends Ui{constructor(e=1,t=1,n=32,i=1,r=!1,a=0,o=Math.PI*2){super(0,e,t,n,i,r,a,o),this.type="ConeGeometry",this.parameters={radius:e,height:t,radialSegments:n,heightSegments:i,openEnded:r,thetaStart:a,thetaLength:o}}static fromJSON(e){return new Ma(e.radius,e.height,e.radialSegments,e.heightSegments,e.openEnded,e.thetaStart,e.thetaLength)}}const Ls=new x,Ds=new x,Hr=new x,Os=new Xt;class ol extends lt{constructor(e=null,t=1){if(super(),this.type="EdgesGeometry",this.parameters={geometry:e,thresholdAngle:t},e!==null){const i=Math.pow(10,4),r=Math.cos(Xi*t),a=e.getIndex(),o=e.getAttribute("position"),c=a?a.count:o.count,l=[0,0,0],h=["a","b","c"],u=new Array(3),f={},d=[];for(let g=0;g<c;g+=3){a?(l[0]=a.getX(g),l[1]=a.getX(g+1),l[2]=a.getX(g+2)):(l[0]=g,l[1]=g+1,l[2]=g+2);const{a:v,b:m,c:p}=Os;if(v.fromBufferAttribute(o,l[0]),m.fromBufferAttribute(o,l[1]),p.fromBufferAttribute(o,l[2]),Os.getNormal(Hr),u[0]=`${Math.round(v.x*i)},${Math.round(v.y*i)},${Math.round(v.z*i)}`,u[1]=`${Math.round(m.x*i)},${Math.round(m.y*i)},${Math.round(m.z*i)}`,u[2]=`${Math.round(p.x*i)},${Math.round(p.y*i)},${Math.round(p.z*i)}`,!(u[0]===u[1]||u[1]===u[2]||u[2]===u[0]))for(let y=0;y<3;y++){const _=(y+1)%3,S=u[y],R=u[_],T=Os[h[y]],w=Os[h[_]],O=`${S}_${R}`,M=`${R}_${S}`;M in f&&f[M]?(Hr.dot(f[M].normal)<=r&&(d.push(T.x,T.y,T.z),d.push(w.x,w.y,w.z)),f[M]=null):O in f||(f[O]={index0:l[y],index1:l[_],normal:Hr.clone()})}}for(const g in f)if(f[g]){const{index0:v,index1:m}=f[g];Ls.fromBufferAttribute(o,v),Ds.fromBufferAttribute(o,m),d.push(Ls.x,Ls.y,Ls.z),d.push(Ds.x,Ds.y,Ds.z)}this.setAttribute("position",new ft(d,3))}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}}class cl extends cc{constructor(e){super(e),this.uuid=Mn(),this.type="Shape",this.holes=[]}getPointsHoles(e){const t=[];for(let n=0,i=this.holes.length;n<i;n++)t[n]=this.holes[n].getPoints(e);return t}extractPoints(e){return{shape:this.getPoints(e),holes:this.getPointsHoles(e)}}copy(e){super.copy(e),this.holes=[];for(let t=0,n=e.holes.length;t<n;t++){const i=e.holes[t];this.holes.push(i.clone())}return this}toJSON(){const e=super.toJSON();e.uuid=this.uuid,e.holes=[];for(let t=0,n=this.holes.length;t<n;t++){const i=this.holes[t];e.holes.push(i.toJSON())}return e}fromJSON(e){super.fromJSON(e),this.uuid=e.uuid,this.holes=[];for(let t=0,n=e.holes.length;t<n;t++){const i=e.holes[t];this.holes.push(new cc().fromJSON(i))}return this}}const Vm={triangulate:function(s,e,t=2){const n=e&&e.length,i=n?e[0]*t:s.length;let r=ll(s,0,i,t,!0);const a=[];if(!r||r.next===r.prev)return a;let o,c,l,h,u,f,d;if(n&&(r=Ym(s,e,r,t)),s.length>80*t){o=l=s[0],c=h=s[1];for(let g=t;g<i;g+=t)u=s[g],f=s[g+1],u<o&&(o=u),f<c&&(c=f),u>l&&(l=u),f>h&&(h=f);d=Math.max(l-o,h-c),d=d!==0?32767/d:0}return Ji(r,a,t,o,c,d,0),a}};function ll(s,e,t,n,i){let r,a;if(i===rg(s,e,t,n)>0)for(r=e;r<t;r+=n)a=lc(r,s[r],s[r+1],a);else for(r=t-n;r>=e;r-=n)a=lc(r,s[r],s[r+1],a);return a&&tr(a,a.next)&&(es(a),a=a.next),a}function Jn(s,e){if(!s)return s;e||(e=s);let t=s,n;do if(n=!1,!t.steiner&&(tr(t,t.next)||rt(t.prev,t,t.next)===0)){if(es(t),t=e=t.prev,t===t.next)break;n=!0}else t=t.next;while(n||t!==e);return e}function Ji(s,e,t,n,i,r,a){if(!s)return;!a&&r&&Qm(s,n,i,r);let o=s,c,l;for(;s.prev!==s.next;){if(c=s.prev,l=s.next,r?Xm(s,n,i,r):Wm(s)){e.push(c.i/t|0),e.push(s.i/t|0),e.push(l.i/t|0),es(s),s=l.next,o=l.next;continue}if(s=l,s===o){a?a===1?(s=jm(Jn(s),e,t),Ji(s,e,t,n,i,r,2)):a===2&&qm(s,e,t,n,i,r):Ji(Jn(s),e,t,n,i,r,1);break}}}function Wm(s){const e=s.prev,t=s,n=s.next;if(rt(e,t,n)>=0)return!1;const i=e.x,r=t.x,a=n.x,o=e.y,c=t.y,l=n.y,h=i<r?i<a?i:a:r<a?r:a,u=o<c?o<l?o:l:c<l?c:l,f=i>r?i>a?i:a:r>a?r:a,d=o>c?o>l?o:l:c>l?c:l;let g=n.next;for(;g!==e;){if(g.x>=h&&g.x<=f&&g.y>=u&&g.y<=d&&Ai(i,o,r,c,a,l,g.x,g.y)&&rt(g.prev,g,g.next)>=0)return!1;g=g.next}return!0}function Xm(s,e,t,n){const i=s.prev,r=s,a=s.next;if(rt(i,r,a)>=0)return!1;const o=i.x,c=r.x,l=a.x,h=i.y,u=r.y,f=a.y,d=o<c?o<l?o:l:c<l?c:l,g=h<u?h<f?h:f:u<f?u:f,v=o>c?o>l?o:l:c>l?c:l,m=h>u?h>f?h:f:u>f?u:f,p=la(d,g,e,t,n),y=la(v,m,e,t,n);let _=s.prevZ,S=s.nextZ;for(;_&&_.z>=p&&S&&S.z<=y;){if(_.x>=d&&_.x<=v&&_.y>=g&&_.y<=m&&_!==i&&_!==a&&Ai(o,h,c,u,l,f,_.x,_.y)&&rt(_.prev,_,_.next)>=0||(_=_.prevZ,S.x>=d&&S.x<=v&&S.y>=g&&S.y<=m&&S!==i&&S!==a&&Ai(o,h,c,u,l,f,S.x,S.y)&&rt(S.prev,S,S.next)>=0))return!1;S=S.nextZ}for(;_&&_.z>=p;){if(_.x>=d&&_.x<=v&&_.y>=g&&_.y<=m&&_!==i&&_!==a&&Ai(o,h,c,u,l,f,_.x,_.y)&&rt(_.prev,_,_.next)>=0)return!1;_=_.prevZ}for(;S&&S.z<=y;){if(S.x>=d&&S.x<=v&&S.y>=g&&S.y<=m&&S!==i&&S!==a&&Ai(o,h,c,u,l,f,S.x,S.y)&&rt(S.prev,S,S.next)>=0)return!1;S=S.nextZ}return!0}function jm(s,e,t){let n=s;do{const i=n.prev,r=n.next.next;!tr(i,r)&&hl(i,n,n.next,r)&&Qi(i,r)&&Qi(r,i)&&(e.push(i.i/t|0),e.push(n.i/t|0),e.push(r.i/t|0),es(n),es(n.next),n=s=r),n=n.next}while(n!==s);return Jn(n)}function qm(s,e,t,n,i,r){let a=s;do{let o=a.next.next;for(;o!==a.prev;){if(a.i!==o.i&&ng(a,o)){let c=ul(a,o);a=Jn(a,a.next),c=Jn(c,c.next),Ji(a,e,t,n,i,r,0),Ji(c,e,t,n,i,r,0);return}o=o.next}a=a.next}while(a!==s)}function Ym(s,e,t,n){const i=[];let r,a,o,c,l;for(r=0,a=e.length;r<a;r++)o=e[r]*n,c=r<a-1?e[r+1]*n:s.length,l=ll(s,o,c,n,!1),l===l.next&&(l.steiner=!0),i.push(tg(l));for(i.sort(Zm),r=0;r<i.length;r++)t=$m(i[r],t);return t}function Zm(s,e){return s.x-e.x}function $m(s,e){const t=Km(s,e);if(!t)return e;const n=ul(t,s);return Jn(n,n.next),Jn(t,t.next)}function Km(s,e){let t=e,n=-1/0,i;const r=s.x,a=s.y;do{if(a<=t.y&&a>=t.next.y&&t.next.y!==t.y){const f=t.x+(a-t.y)*(t.next.x-t.x)/(t.next.y-t.y);if(f<=r&&f>n&&(n=f,i=t.x<t.next.x?t:t.next,f===r))return i}t=t.next}while(t!==e);if(!i)return null;const o=i,c=i.x,l=i.y;let h=1/0,u;t=i;do r>=t.x&&t.x>=c&&r!==t.x&&Ai(a<l?r:n,a,c,l,a<l?n:r,a,t.x,t.y)&&(u=Math.abs(a-t.y)/(r-t.x),Qi(t,s)&&(u<h||u===h&&(t.x>i.x||t.x===i.x&&Jm(i,t)))&&(i=t,h=u)),t=t.next;while(t!==o);return i}function Jm(s,e){return rt(s.prev,s,e.prev)<0&&rt(e.next,s,s.next)<0}function Qm(s,e,t,n){let i=s;do i.z===0&&(i.z=la(i.x,i.y,e,t,n)),i.prevZ=i.prev,i.nextZ=i.next,i=i.next;while(i!==s);i.prevZ.nextZ=null,i.prevZ=null,eg(i)}function eg(s){let e,t,n,i,r,a,o,c,l=1;do{for(t=s,s=null,r=null,a=0;t;){for(a++,n=t,o=0,e=0;e<l&&(o++,n=n.nextZ,!!n);e++);for(c=l;o>0||c>0&&n;)o!==0&&(c===0||!n||t.z<=n.z)?(i=t,t=t.nextZ,o--):(i=n,n=n.nextZ,c--),r?r.nextZ=i:s=i,i.prevZ=r,r=i;t=n}r.nextZ=null,l*=2}while(a>1);return s}function la(s,e,t,n,i){return s=(s-t)*i|0,e=(e-n)*i|0,s=(s|s<<8)&16711935,s=(s|s<<4)&252645135,s=(s|s<<2)&858993459,s=(s|s<<1)&1431655765,e=(e|e<<8)&16711935,e=(e|e<<4)&252645135,e=(e|e<<2)&858993459,e=(e|e<<1)&1431655765,s|e<<1}function tg(s){let e=s,t=s;do(e.x<t.x||e.x===t.x&&e.y<t.y)&&(t=e),e=e.next;while(e!==s);return t}function Ai(s,e,t,n,i,r,a,o){return(i-a)*(e-o)>=(s-a)*(r-o)&&(s-a)*(n-o)>=(t-a)*(e-o)&&(t-a)*(r-o)>=(i-a)*(n-o)}function ng(s,e){return s.next.i!==e.i&&s.prev.i!==e.i&&!ig(s,e)&&(Qi(s,e)&&Qi(e,s)&&sg(s,e)&&(rt(s.prev,s,e.prev)||rt(s,e.prev,e))||tr(s,e)&&rt(s.prev,s,s.next)>0&&rt(e.prev,e,e.next)>0)}function rt(s,e,t){return(e.y-s.y)*(t.x-e.x)-(e.x-s.x)*(t.y-e.y)}function tr(s,e){return s.x===e.x&&s.y===e.y}function hl(s,e,t,n){const i=Us(rt(s,e,t)),r=Us(rt(s,e,n)),a=Us(rt(t,n,s)),o=Us(rt(t,n,e));return!!(i!==r&&a!==o||i===0&&Ns(s,t,e)||r===0&&Ns(s,n,e)||a===0&&Ns(t,s,n)||o===0&&Ns(t,e,n))}function Ns(s,e,t){return e.x<=Math.max(s.x,t.x)&&e.x>=Math.min(s.x,t.x)&&e.y<=Math.max(s.y,t.y)&&e.y>=Math.min(s.y,t.y)}function Us(s){return s>0?1:s<0?-1:0}function ig(s,e){let t=s;do{if(t.i!==s.i&&t.next.i!==s.i&&t.i!==e.i&&t.next.i!==e.i&&hl(t,t.next,s,e))return!0;t=t.next}while(t!==s);return!1}function Qi(s,e){return rt(s.prev,s,s.next)<0?rt(s,e,s.next)>=0&&rt(s,s.prev,e)>=0:rt(s,e,s.prev)<0||rt(s,s.next,e)<0}function sg(s,e){let t=s,n=!1;const i=(s.x+e.x)/2,r=(s.y+e.y)/2;do t.y>r!=t.next.y>r&&t.next.y!==t.y&&i<(t.next.x-t.x)*(r-t.y)/(t.next.y-t.y)+t.x&&(n=!n),t=t.next;while(t!==s);return n}function ul(s,e){const t=new ha(s.i,s.x,s.y),n=new ha(e.i,e.x,e.y),i=s.next,r=e.prev;return s.next=e,e.prev=s,t.next=i,i.prev=t,n.next=t,t.prev=n,r.next=n,n.prev=r,n}function lc(s,e,t,n){const i=new ha(s,e,t);return n?(i.next=n.next,i.prev=n,n.next.prev=i,n.next=i):(i.prev=i,i.next=i),i}function es(s){s.next.prev=s.prev,s.prev.next=s.next,s.prevZ&&(s.prevZ.nextZ=s.nextZ),s.nextZ&&(s.nextZ.prevZ=s.prevZ)}function ha(s,e,t){this.i=s,this.x=e,this.y=t,this.prev=null,this.next=null,this.z=0,this.prevZ=null,this.nextZ=null,this.steiner=!1}function rg(s,e,t,n){let i=0;for(let r=e,a=t-n;r<t;r+=n)i+=(s[a]-s[r])*(s[r+1]+s[a+1]),a=r;return i}let Vr=class dl{static area(e){const t=e.length;let n=0;for(let i=t-1,r=0;r<t;i=r++)n+=e[i].x*e[r].y-e[r].x*e[i].y;return n*.5}static isClockWise(e){return dl.area(e)<0}static triangulateShape(e,t){const n=[],i=[],r=[];hc(e),uc(n,e);let a=e.length;t.forEach(hc);for(let c=0;c<t.length;c++)i.push(a),a+=t[c].length,uc(n,t[c]);const o=Vm.triangulate(n,i);for(let c=0;c<o.length;c+=3)r.push(o.slice(c,c+3));return r}};function hc(s){const e=s.length;e>2&&s[e-1].equals(s[0])&&s.pop()}function uc(s,e){for(let t=0;t<e.length;t++)s.push(e[t].x),s.push(e[t].y)}class ba extends lt{constructor(e=new cl([new $(0,.5),new $(-.5,-.5),new $(.5,-.5)]),t=12){super(),this.type="ShapeGeometry",this.parameters={shapes:e,curveSegments:t};const n=[],i=[],r=[],a=[];let o=0,c=0;if(Array.isArray(e)===!1)l(e);else for(let h=0;h<e.length;h++)l(e[h]),this.addGroup(o,c,h),o+=c,c=0;this.setIndex(n),this.setAttribute("position",new ft(i,3)),this.setAttribute("normal",new ft(r,3)),this.setAttribute("uv",new ft(a,2));function l(h){const u=i.length/3,f=h.extractPoints(t);let d=f.shape;const g=f.holes;Vr.isClockWise(d)===!1&&(d=d.reverse());for(let m=0,p=g.length;m<p;m++){const y=g[m];Vr.isClockWise(y)===!0&&(g[m]=y.reverse())}const v=Vr.triangulateShape(d,g);for(let m=0,p=g.length;m<p;m++){const y=g[m];d=d.concat(y)}for(let m=0,p=d.length;m<p;m++){const y=d[m];i.push(y.x,y.y,0),r.push(0,0,1),a.push(y.x,y.y)}for(let m=0,p=v.length;m<p;m++){const y=v[m],_=y[0]+u,S=y[1]+u,R=y[2]+u;n.push(_,S,R),c+=3}}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}toJSON(){const e=super.toJSON(),t=this.parameters.shapes;return ag(t,e)}static fromJSON(e,t){const n=[];for(let i=0,r=e.shapes.length;i<r;i++){const a=t[e.shapes[i]];n.push(a)}return new ba(n,e.curveSegments)}}function ag(s,e){if(e.shapes=[],Array.isArray(s))for(let t=0,n=s.length;t<n;t++){const i=s[t];e.shapes.push(i.uuid)}else e.shapes.push(s.uuid);return e}class js extends lt{constructor(e=1,t=.4,n=12,i=48,r=Math.PI*2){super(),this.type="TorusGeometry",this.parameters={radius:e,tube:t,radialSegments:n,tubularSegments:i,arc:r},n=Math.floor(n),i=Math.floor(i);const a=[],o=[],c=[],l=[],h=new x,u=new x,f=new x;for(let d=0;d<=n;d++)for(let g=0;g<=i;g++){const v=g/i*r,m=d/n*Math.PI*2;u.x=(e+t*Math.cos(m))*Math.cos(v),u.y=(e+t*Math.cos(m))*Math.sin(v),u.z=t*Math.sin(m),o.push(u.x,u.y,u.z),h.x=e*Math.cos(v),h.y=e*Math.sin(v),f.subVectors(u,h).normalize(),c.push(f.x,f.y,f.z),l.push(g/i),l.push(d/n)}for(let d=1;d<=n;d++)for(let g=1;g<=i;g++){const v=(i+1)*d+g-1,m=(i+1)*(d-1)+g-1,p=(i+1)*(d-1)+g,y=(i+1)*d+g;a.push(v,m,y),a.push(m,p,y)}this.setIndex(a),this.setAttribute("position",new ft(o,3)),this.setAttribute("normal",new ft(c,3)),this.setAttribute("uv",new ft(l,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new js(e.radius,e.tube,e.radialSegments,e.tubularSegments,e.arc)}}class og extends ti{constructor(e){super(),this.isMeshStandardMaterial=!0,this.defines={STANDARD:""},this.type="MeshStandardMaterial",this.color=new Ue(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new Ue(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=Ic,this.normalScale=new $(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.defines={STANDARD:""},this.color.copy(e.color),this.roughness=e.roughness,this.metalness=e.metalness,this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.roughnessMap=e.roughnessMap,this.metalnessMap=e.metalnessMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapIntensity=e.envMapIntensity,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}}class cg extends ln{constructor(e){super(),this.isLineDashedMaterial=!0,this.type="LineDashedMaterial",this.scale=1,this.dashSize=3,this.gapSize=1,this.setValues(e)}copy(e){return super.copy(e),this.scale=e.scale,this.dashSize=e.dashSize,this.gapSize=e.gapSize,this}}class fl extends gt{constructor(e,t=1){super(),this.isLight=!0,this.type="Light",this.color=new Ue(e),this.intensity=t}dispose(){}copy(e,t){return super.copy(e,t),this.color.copy(e.color),this.intensity=e.intensity,this}toJSON(e){const t=super.toJSON(e);return t.object.color=this.color.getHex(),t.object.intensity=this.intensity,this.groundColor!==void 0&&(t.object.groundColor=this.groundColor.getHex()),this.distance!==void 0&&(t.object.distance=this.distance),this.angle!==void 0&&(t.object.angle=this.angle),this.decay!==void 0&&(t.object.decay=this.decay),this.penumbra!==void 0&&(t.object.penumbra=this.penumbra),this.shadow!==void 0&&(t.object.shadow=this.shadow.toJSON()),t}}const Wr=new ht,dc=new x,fc=new x;class lg{constructor(e){this.camera=e,this.bias=0,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new $(512,512),this.map=null,this.mapPass=null,this.matrix=new ht,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new ga,this._frameExtents=new $(1,1),this._viewportCount=1,this._viewports=[new Mt(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(e){const t=this.camera,n=this.matrix;dc.setFromMatrixPosition(e.matrixWorld),t.position.copy(dc),fc.setFromMatrixPosition(e.target.matrixWorld),t.lookAt(fc),t.updateMatrixWorld(),Wr.multiplyMatrices(t.projectionMatrix,t.matrixWorldInverse),this._frustum.setFromProjectionMatrix(Wr),n.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),n.multiply(Wr)}getViewport(e){return this._viewports[e]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(e){return this.camera=e.camera.clone(),this.bias=e.bias,this.radius=e.radius,this.mapSize.copy(e.mapSize),this}clone(){return new this.constructor().copy(this)}toJSON(){const e={};return this.bias!==0&&(e.bias=this.bias),this.normalBias!==0&&(e.normalBias=this.normalBias),this.radius!==1&&(e.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(e.mapSize=this.mapSize.toArray()),e.camera=this.camera.toJSON(!1).object,delete e.camera.matrix,e}}class hg extends lg{constructor(){super(new Pt(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}}class ug extends fl{constructor(e,t){super(e,t),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(gt.DEFAULT_UP),this.updateMatrix(),this.target=new gt,this.shadow=new hg}dispose(){this.shadow.dispose()}copy(e){return super.copy(e),this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}}class dg extends fl{constructor(e,t){super(e,t),this.isAmbientLight=!0,this.type="AmbientLight"}}class Ea{constructor(e,t,n=0,i=1/0){this.ray=new Ks(e,t),this.near=n,this.far=i,this.camera=null,this.layers=new ma,this.params={Mesh:{},Line:{threshold:1},LOD:{},Points:{threshold:1},Sprite:{}}}set(e,t){this.ray.set(e,t)}setFromCamera(e,t){t.isPerspectiveCamera?(this.ray.origin.setFromMatrixPosition(t.matrixWorld),this.ray.direction.set(e.x,e.y,.5).unproject(t).sub(this.ray.origin).normalize(),this.camera=t):t.isOrthographicCamera?(this.ray.origin.set(e.x,e.y,(t.near+t.far)/(t.near-t.far)).unproject(t),this.ray.direction.set(0,0,-1).transformDirection(t.matrixWorld),this.camera=t):console.error("THREE.Raycaster: Unsupported camera type: "+t.type)}intersectObject(e,t=!0,n=[]){return ua(e,this,n,t),n.sort(pc),n}intersectObjects(e,t=!0,n=[]){for(let i=0,r=e.length;i<r;i++)ua(e[i],this,n,t);return n.sort(pc),n}}function pc(s,e){return s.distance-e.distance}function ua(s,e,t,n){if(s.layers.test(e.layers)&&s.raycast(e,t),n===!0){const i=s.children;for(let r=0,a=i.length;r<a;r++)ua(i[r],e,t,!0)}}class mc{constructor(e=1,t=0,n=0){return this.radius=e,this.phi=t,this.theta=n,this}set(e,t,n){return this.radius=e,this.phi=t,this.theta=n,this}copy(e){return this.radius=e.radius,this.phi=e.phi,this.theta=e.theta,this}makeSafe(){return this.phi=Math.max(1e-6,Math.min(Math.PI-1e-6,this.phi)),this}setFromVector3(e){return this.setFromCartesianCoords(e.x,e.y,e.z)}setFromCartesianCoords(e,t,n){return this.radius=Math.sqrt(e*e+t*t+n*n),this.radius===0?(this.theta=0,this.phi=0):(this.theta=Math.atan2(e,n),this.phi=Math.acos(wt(t/this.radius,-1,1))),this}clone(){return new this.constructor().copy(this)}}const gc=new x;let Is,Xr;class jr extends gt{constructor(e=new x(0,0,1),t=new x(0,0,0),n=1,i=16776960,r=n*.2,a=r*.2){super(),this.type="ArrowHelper",Is===void 0&&(Is=new lt,Is.setAttribute("position",new ft([0,0,0,0,1,0],3)),Xr=new Ui(0,.5,1,5,1),Xr.translate(0,-.5,0)),this.position.copy(t),this.line=new Pi(Is,new ln({color:i,toneMapped:!1})),this.line.matrixAutoUpdate=!1,this.add(this.line),this.cone=new Xe(Xr,new zt({color:i,toneMapped:!1})),this.cone.matrixAutoUpdate=!1,this.add(this.cone),this.setDirection(e),this.setLength(n,r,a)}setDirection(e){if(e.y>.99999)this.quaternion.set(0,0,0,1);else if(e.y<-.99999)this.quaternion.set(1,0,0,0);else{gc.set(e.z,0,-e.x).normalize();const t=Math.acos(e.y);this.quaternion.setFromAxisAngle(gc,t)}}setLength(e,t=e*.2,n=t*.2){this.line.scale.set(1,Math.max(1e-4,e-t),1),this.line.updateMatrix(),this.cone.scale.set(n,t,n),this.cone.position.y=e,this.cone.updateMatrix()}setColor(e){this.line.material.color.set(e),this.cone.material.color.set(e)}copy(e){return super.copy(e,!1),this.line.copy(e.line),this.cone.copy(e.cone),this}dispose(){this.line.geometry.dispose(),this.line.material.dispose(),this.cone.geometry.dispose(),this.cone.material.dispose()}}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:da}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=da);class fg{constructor(){W(this,"listeners",{})}on(e,t){this.listeners[e]||(this.listeners[e]=[]),this.listeners[e].push(t)}off(e,t){this.listeners[e]&&(this.listeners[e]=this.listeners[e].filter(n=>n!==t))}emit(e,t){this.listeners[e]&&this.listeners[e].forEach(n=>n(t))}}const vc={type:"change"},qr={type:"start"},_c={type:"end"},Fs=new Ks,xc=new sn,pg=Math.cos(70*Mh.DEG2RAD);class mg extends Qn{constructor(e,t){super(),this.object=e,this.domElement=t,this.domElement.style.touchAction="none",this.enabled=!0,this.target=new x,this.cursor=new x,this.minDistance=0,this.maxDistance=1/0,this.minZoom=0,this.maxZoom=1/0,this.minTargetRadius=0,this.maxTargetRadius=1/0,this.minPolarAngle=0,this.maxPolarAngle=Math.PI,this.minAzimuthAngle=-1/0,this.maxAzimuthAngle=1/0,this.enableDamping=!1,this.dampingFactor=.05,this.enableZoom=!0,this.zoomSpeed=1,this.enableRotate=!0,this.rotateSpeed=1,this.enablePan=!0,this.panSpeed=1,this.screenSpacePanning=!0,this.keyPanSpeed=7,this.zoomToCursor=!1,this.autoRotate=!1,this.autoRotateSpeed=2,this.keys={LEFT:"ArrowLeft",UP:"ArrowUp",RIGHT:"ArrowRight",BOTTOM:"ArrowDown"},this.mouseButtons={LEFT:nn.ROTATE,MIDDLE:nn.DOLLY,RIGHT:nn.PAN},this.touches={ONE:ni.ROTATE,TWO:ni.DOLLY_PAN},this.target0=this.target.clone(),this.position0=this.object.position.clone(),this.zoom0=this.object.zoom,this._domElementKeyEvents=null,this.getPolarAngle=function(){return o.phi},this.getAzimuthalAngle=function(){return o.theta},this.getDistance=function(){return this.object.position.distanceTo(this.target)},this.listenToKeyEvents=function(P){P.addEventListener("keydown",Te),this._domElementKeyEvents=P},this.stopListenToKeyEvents=function(){this._domElementKeyEvents.removeEventListener("keydown",Te),this._domElementKeyEvents=null},this.saveState=function(){n.target0.copy(n.target),n.position0.copy(n.object.position),n.zoom0=n.object.zoom},this.reset=function(){n.target.copy(n.target0),n.object.position.copy(n.position0),n.object.zoom=n.zoom0,n.object.updateProjectionMatrix(),n.dispatchEvent(vc),n.update(),r=i.NONE},this.update=function(){const P=new x,re=new Kn().setFromUnitVectors(e.up,new x(0,1,0)),Se=re.clone().invert(),me=new x,te=new Kn,L=new x,ae=2*Math.PI;return function(Ce=null){const we=n.object.position;P.copy(we).sub(n.target),P.applyQuaternion(re),o.setFromVector3(P),n.autoRotate&&r===i.NONE&&G(A(Ce)),n.enableDamping?(o.theta+=c.theta*n.dampingFactor,o.phi+=c.phi*n.dampingFactor):(o.theta+=c.theta,o.phi+=c.phi);let qe=n.minAzimuthAngle,Ye=n.maxAzimuthAngle;isFinite(qe)&&isFinite(Ye)&&(qe<-Math.PI?qe+=ae:qe>Math.PI&&(qe-=ae),Ye<-Math.PI?Ye+=ae:Ye>Math.PI&&(Ye-=ae),qe<=Ye?o.theta=Math.max(qe,Math.min(Ye,o.theta)):o.theta=o.theta>(qe+Ye)/2?Math.max(qe,o.theta):Math.min(Ye,o.theta)),o.phi=Math.max(n.minPolarAngle,Math.min(n.maxPolarAngle,o.phi)),o.makeSafe(),n.enableDamping===!0?n.target.addScaledVector(h,n.dampingFactor):n.target.add(h),n.target.sub(n.cursor),n.target.clampLength(n.minTargetRadius,n.maxTargetRadius),n.target.add(n.cursor),n.zoomToCursor&&T||n.object.isOrthographicCamera?o.radius=K(o.radius):o.radius=K(o.radius*l),P.setFromSpherical(o),P.applyQuaternion(Se),we.copy(n.target).add(P),n.object.lookAt(n.target),n.enableDamping===!0?(c.theta*=1-n.dampingFactor,c.phi*=1-n.dampingFactor,h.multiplyScalar(1-n.dampingFactor)):(c.set(0,0,0),h.set(0,0,0));let at=!1;if(n.zoomToCursor&&T){let ut=null;if(n.object.isPerspectiveCamera){const Ze=P.length();ut=K(Ze*l);const pt=Ze-ut;n.object.position.addScaledVector(S,pt),n.object.updateMatrixWorld()}else if(n.object.isOrthographicCamera){const Ze=new x(R.x,R.y,0);Ze.unproject(n.object),n.object.zoom=Math.max(n.minZoom,Math.min(n.maxZoom,n.object.zoom/l)),n.object.updateProjectionMatrix(),at=!0;const pt=new x(R.x,R.y,0);pt.unproject(n.object),n.object.position.sub(pt).add(Ze),n.object.updateMatrixWorld(),ut=P.length()}else console.warn("WARNING: OrbitControls.js encountered an unknown camera type - zoom to cursor disabled."),n.zoomToCursor=!1;ut!==null&&(this.screenSpacePanning?n.target.set(0,0,-1).transformDirection(n.object.matrix).multiplyScalar(ut).add(n.object.position):(Fs.origin.copy(n.object.position),Fs.direction.set(0,0,-1).transformDirection(n.object.matrix),Math.abs(n.object.up.dot(Fs.direction))<pg?e.lookAt(n.target):(xc.setFromNormalAndCoplanarPoint(n.object.up,n.target),Fs.intersectPlane(xc,n.target))))}else n.object.isOrthographicCamera&&(n.object.zoom=Math.max(n.minZoom,Math.min(n.maxZoom,n.object.zoom/l)),n.object.updateProjectionMatrix(),at=!0);return l=1,T=!1,at||me.distanceToSquared(n.object.position)>a||8*(1-te.dot(n.object.quaternion))>a||L.distanceToSquared(n.target)>0?(n.dispatchEvent(vc),me.copy(n.object.position),te.copy(n.object.quaternion),L.copy(n.target),!0):!1}}(),this.dispose=function(){n.domElement.removeEventListener("contextmenu",$e),n.domElement.removeEventListener("pointerdown",C),n.domElement.removeEventListener("pointercancel",F),n.domElement.removeEventListener("wheel",ie),n.domElement.removeEventListener("pointermove",b),n.domElement.removeEventListener("pointerup",F),n._domElementKeyEvents!==null&&(n._domElementKeyEvents.removeEventListener("keydown",Te),n._domElementKeyEvents=null)};const n=this,i={NONE:-1,ROTATE:0,DOLLY:1,PAN:2,TOUCH_ROTATE:3,TOUCH_PAN:4,TOUCH_DOLLY_PAN:5,TOUCH_DOLLY_ROTATE:6};let r=i.NONE;const a=1e-6,o=new mc,c=new mc;let l=1;const h=new x,u=new $,f=new $,d=new $,g=new $,v=new $,m=new $,p=new $,y=new $,_=new $,S=new x,R=new $;let T=!1;const w=[],O={};let M=!1;function A(P){return P!==null?2*Math.PI/60*n.autoRotateSpeed*P:2*Math.PI/60/60*n.autoRotateSpeed}function U(P){const re=Math.abs(P*.01);return Math.pow(.95,n.zoomSpeed*re)}function G(P){c.theta-=P}function j(P){c.phi-=P}const D=function(){const P=new x;return function(Se,me){P.setFromMatrixColumn(me,0),P.multiplyScalar(-Se),h.add(P)}}(),I=function(){const P=new x;return function(Se,me){n.screenSpacePanning===!0?P.setFromMatrixColumn(me,1):(P.setFromMatrixColumn(me,0),P.crossVectors(n.object.up,P)),P.multiplyScalar(Se),h.add(P)}}(),H=function(){const P=new x;return function(Se,me){const te=n.domElement;if(n.object.isPerspectiveCamera){const L=n.object.position;P.copy(L).sub(n.target);let ae=P.length();ae*=Math.tan(n.object.fov/2*Math.PI/180),D(2*Se*ae/te.clientHeight,n.object.matrix),I(2*me*ae/te.clientHeight,n.object.matrix)}else n.object.isOrthographicCamera?(D(Se*(n.object.right-n.object.left)/n.object.zoom/te.clientWidth,n.object.matrix),I(me*(n.object.top-n.object.bottom)/n.object.zoom/te.clientHeight,n.object.matrix)):(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - pan disabled."),n.enablePan=!1)}}();function q(P){n.object.isPerspectiveCamera||n.object.isOrthographicCamera?l/=P:(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),n.enableZoom=!1)}function Y(P){n.object.isPerspectiveCamera||n.object.isOrthographicCamera?l*=P:(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),n.enableZoom=!1)}function Z(P,re){if(!n.zoomToCursor)return;T=!0;const Se=n.domElement.getBoundingClientRect(),me=P-Se.left,te=re-Se.top,L=Se.width,ae=Se.height;R.x=me/L*2-1,R.y=-(te/ae)*2+1,S.set(R.x,R.y,1).unproject(n.object).sub(n.object.position).normalize()}function K(P){return Math.max(n.minDistance,Math.min(n.maxDistance,P))}function se(P){u.set(P.clientX,P.clientY)}function oe(P){Z(P.clientX,P.clientX),p.set(P.clientX,P.clientY)}function X(P){g.set(P.clientX,P.clientY)}function J(P){f.set(P.clientX,P.clientY),d.subVectors(f,u).multiplyScalar(n.rotateSpeed);const re=n.domElement;G(2*Math.PI*d.x/re.clientHeight),j(2*Math.PI*d.y/re.clientHeight),u.copy(f),n.update()}function he(P){y.set(P.clientX,P.clientY),_.subVectors(y,p),_.y>0?q(U(_.y)):_.y<0&&Y(U(_.y)),p.copy(y),n.update()}function xe(P){v.set(P.clientX,P.clientY),m.subVectors(v,g).multiplyScalar(n.panSpeed),H(m.x,m.y),g.copy(v),n.update()}function ve(P){Z(P.clientX,P.clientY),P.deltaY<0?Y(U(P.deltaY)):P.deltaY>0&&q(U(P.deltaY)),n.update()}function Le(P){let re=!1;switch(P.code){case n.keys.UP:P.ctrlKey||P.metaKey||P.shiftKey?j(2*Math.PI*n.rotateSpeed/n.domElement.clientHeight):H(0,n.keyPanSpeed),re=!0;break;case n.keys.BOTTOM:P.ctrlKey||P.metaKey||P.shiftKey?j(-2*Math.PI*n.rotateSpeed/n.domElement.clientHeight):H(0,-n.keyPanSpeed),re=!0;break;case n.keys.LEFT:P.ctrlKey||P.metaKey||P.shiftKey?G(2*Math.PI*n.rotateSpeed/n.domElement.clientHeight):H(n.keyPanSpeed,0),re=!0;break;case n.keys.RIGHT:P.ctrlKey||P.metaKey||P.shiftKey?G(-2*Math.PI*n.rotateSpeed/n.domElement.clientHeight):H(-n.keyPanSpeed,0),re=!0;break}re&&(P.preventDefault(),n.update())}function Pe(P){if(w.length===1)u.set(P.pageX,P.pageY);else{const re=de(P),Se=.5*(P.pageX+re.x),me=.5*(P.pageY+re.y);u.set(Se,me)}}function Ae(P){if(w.length===1)g.set(P.pageX,P.pageY);else{const re=de(P),Se=.5*(P.pageX+re.x),me=.5*(P.pageY+re.y);g.set(Se,me)}}function je(P){const re=de(P),Se=P.pageX-re.x,me=P.pageY-re.y,te=Math.sqrt(Se*Se+me*me);p.set(0,te)}function z(P){n.enableZoom&&je(P),n.enablePan&&Ae(P)}function bt(P){n.enableZoom&&je(P),n.enableRotate&&Pe(P)}function Ee(P){if(w.length==1)f.set(P.pageX,P.pageY);else{const Se=de(P),me=.5*(P.pageX+Se.x),te=.5*(P.pageY+Se.y);f.set(me,te)}d.subVectors(f,u).multiplyScalar(n.rotateSpeed);const re=n.domElement;G(2*Math.PI*d.x/re.clientHeight),j(2*Math.PI*d.y/re.clientHeight),u.copy(f)}function De(P){if(w.length===1)v.set(P.pageX,P.pageY);else{const re=de(P),Se=.5*(P.pageX+re.x),me=.5*(P.pageY+re.y);v.set(Se,me)}m.subVectors(v,g).multiplyScalar(n.panSpeed),H(m.x,m.y),g.copy(v)}function _e(P){const re=de(P),Se=P.pageX-re.x,me=P.pageY-re.y,te=Math.sqrt(Se*Se+me*me);y.set(0,te),_.set(0,Math.pow(y.y/p.y,n.zoomSpeed)),q(_.y),p.copy(y);const L=(P.pageX+re.x)*.5,ae=(P.pageY+re.y)*.5;Z(L,ae)}function tt(P){n.enableZoom&&_e(P),n.enablePan&&De(P)}function Fe(P){n.enableZoom&&_e(P),n.enableRotate&&Ee(P)}function C(P){n.enabled!==!1&&(w.length===0&&(n.domElement.setPointerCapture(P.pointerId),n.domElement.addEventListener("pointermove",b),n.domElement.addEventListener("pointerup",F)),ke(P),P.pointerType==="touch"?ze(P):ne(P))}function b(P){n.enabled!==!1&&(P.pointerType==="touch"?Q(P):ee(P))}function F(P){Oe(P),w.length===0&&(n.domElement.releasePointerCapture(P.pointerId),n.domElement.removeEventListener("pointermove",b),n.domElement.removeEventListener("pointerup",F)),n.dispatchEvent(_c),r=i.NONE}function ne(P){let re;switch(P.button){case 0:re=n.mouseButtons.LEFT;break;case 1:re=n.mouseButtons.MIDDLE;break;case 2:re=n.mouseButtons.RIGHT;break;default:re=-1}switch(re){case nn.DOLLY:if(n.enableZoom===!1)return;oe(P),r=i.DOLLY;break;case nn.ROTATE:if(P.ctrlKey||P.metaKey||P.shiftKey){if(n.enablePan===!1)return;X(P),r=i.PAN}else{if(n.enableRotate===!1)return;se(P),r=i.ROTATE}break;case nn.PAN:if(P.ctrlKey||P.metaKey||P.shiftKey){if(n.enableRotate===!1)return;se(P),r=i.ROTATE}else{if(n.enablePan===!1)return;X(P),r=i.PAN}break;default:r=i.NONE}r!==i.NONE&&n.dispatchEvent(qr)}function ee(P){switch(r){case i.ROTATE:if(n.enableRotate===!1)return;J(P);break;case i.DOLLY:if(n.enableZoom===!1)return;he(P);break;case i.PAN:if(n.enablePan===!1)return;xe(P);break}}function ie(P){n.enabled===!1||n.enableZoom===!1||r!==i.NONE||(P.preventDefault(),n.dispatchEvent(qr),ve(ye(P)),n.dispatchEvent(_c))}function ye(P){const re=P.deltaMode,Se={clientX:P.clientX,clientY:P.clientY,deltaY:P.deltaY};switch(re){case 1:Se.deltaY*=16;break;case 2:Se.deltaY*=100;break}return P.ctrlKey&&!M&&(Se.deltaY*=10),Se}function ue(P){P.key==="Control"&&(M=!0,document.addEventListener("keyup",ge,{passive:!0,capture:!0}))}function ge(P){P.key==="Control"&&(M=!1,document.removeEventListener("keyup",ge,{passive:!0,capture:!0}))}function Te(P){n.enabled===!1||n.enablePan===!1||Le(P)}function ze(P){switch(be(P),w.length){case 1:switch(n.touches.ONE){case ni.ROTATE:if(n.enableRotate===!1)return;Pe(P),r=i.TOUCH_ROTATE;break;case ni.PAN:if(n.enablePan===!1)return;Ae(P),r=i.TOUCH_PAN;break;default:r=i.NONE}break;case 2:switch(n.touches.TWO){case ni.DOLLY_PAN:if(n.enableZoom===!1&&n.enablePan===!1)return;z(P),r=i.TOUCH_DOLLY_PAN;break;case ni.DOLLY_ROTATE:if(n.enableZoom===!1&&n.enableRotate===!1)return;bt(P),r=i.TOUCH_DOLLY_ROTATE;break;default:r=i.NONE}break;default:r=i.NONE}r!==i.NONE&&n.dispatchEvent(qr)}function Q(P){switch(be(P),r){case i.TOUCH_ROTATE:if(n.enableRotate===!1)return;Ee(P),n.update();break;case i.TOUCH_PAN:if(n.enablePan===!1)return;De(P),n.update();break;case i.TOUCH_DOLLY_PAN:if(n.enableZoom===!1&&n.enablePan===!1)return;tt(P),n.update();break;case i.TOUCH_DOLLY_ROTATE:if(n.enableZoom===!1&&n.enableRotate===!1)return;Fe(P),n.update();break;default:r=i.NONE}}function $e(P){n.enabled!==!1&&P.preventDefault()}function ke(P){w.push(P.pointerId)}function Oe(P){delete O[P.pointerId];for(let re=0;re<w.length;re++)if(w[re]==P.pointerId){w.splice(re,1);return}}function be(P){let re=O[P.pointerId];re===void 0&&(re=new $,O[P.pointerId]=re),re.set(P.pageX,P.pageY)}function de(P){const re=P.pointerId===w[0]?w[1]:w[0];return O[re]}n.domElement.addEventListener("contextmenu",$e),n.domElement.addEventListener("pointerdown",C),n.domElement.addEventListener("pointercancel",F),n.domElement.addEventListener("wheel",ie,{passive:!1}),document.addEventListener("keydown",ue,{passive:!0,capture:!0}),this.update()}}var ct=(s=>(s.TOP="TOP",s.PERSPECTIVE="PERSPECTIVE",s.FRONT="FRONT",s.LEFT="LEFT",s))(ct||{});class gg{constructor(e,t,n){W(this,"_eventBus");W(this,"container");W(this,"renderer");W(this,"scene");W(this,"views",{});W(this,"activeView","PERSPECTIVE");W(this,"viewLabel");W(this,"viewMenu",null);W(this,"viewMenuCloseHandler",null);W(this,"resetButton");W(this,"controls",null);W(this,"currentToolId",null);this._eventBus=e,this.scene=n,console.log("ViewManager initialized");const i=document.getElementById(t);if(!i)throw new Error(`Container ${t} not found`);this.container=i;const r=document.createElement("div");r.style.position="absolute",r.style.top="65px",r.style.left="75px",r.style.display="flex",r.style.gap="15px",r.style.alignItems="center",r.style.zIndex="2000",r.style.pointerEvents="none",this.container.appendChild(r),this.viewLabel=document.createElement("div"),this.viewLabel.style.color="white",this.viewLabel.style.fontSize="14px",this.viewLabel.style.fontWeight="bold",this.viewLabel.style.fontFamily="Arial, sans-serif",this.viewLabel.style.textShadow="1px 1px 2px black",this.viewLabel.style.cursor="pointer",this.viewLabel.style.pointerEvents="auto",this.viewLabel.style.userSelect="none",this.viewLabel.style.textDecoration="underline",this.viewLabel.style.textDecorationColor="rgba(255,255,255,0.4)",this.viewLabel.onmouseenter=()=>{this.viewLabel.style.color="#aaddff"},this.viewLabel.onmouseleave=()=>{this.viewLabel.style.color="white"},this.viewLabel.onclick=a=>{a.stopPropagation(),this.toggleViewMenu()},r.appendChild(this.viewLabel),this.resetButton=document.createElement("div"),this.resetButton.innerText="Reset",this.resetButton.style.color="#AAAAAA",this.resetButton.style.fontSize="12px",this.resetButton.style.fontFamily="Arial, sans-serif",this.resetButton.style.cursor="pointer",this.resetButton.style.pointerEvents="auto",this.resetButton.style.textShadow="1px 1px 2px black",this.resetButton.style.textDecoration="underline",this.resetButton.onmouseenter=()=>this.resetButton.style.color="#FFFFFF",this.resetButton.onmouseleave=()=>this.resetButton.style.color="#AAAAAA",this.resetButton.onclick=()=>this.resetCurrentView(),r.appendChild(this.resetButton),this.renderer=new tl({antialias:!0}),this.renderer.setSize(this.container.clientWidth,this.container.clientHeight),this.renderer.setPixelRatio(window.devicePixelRatio),this.renderer.shadowMap.enabled=!0,this.renderer.shadowMap.type=wc,this.container.appendChild(this.renderer.domElement),this.initListeners(),this.initViews(),this.loadState(),this.updateViewLabel(),this.setupControls(),this.animate=this.animate.bind(this),requestAnimationFrame(this.animate),window.addEventListener("resize",()=>this.onWindowResize()),window.addEventListener("beforeunload",()=>this.saveState())}initListeners(){this._eventBus.on("tool-selected",e=>{if(e&&e!=="select"){if(e==="brush_create"&&this.activeView==="TOP"){this.showToast("Pinsel-Erstellung nur in Front- oder Perspektivansicht sinnvoll!",3e3),setTimeout(()=>this._eventBus.emit("tool-selected","select"),0);return}if(e!=="brush_create"&&(this.activeView==="FRONT"||this.activeView==="LEFT")){this.showToast("Erstellen nur in Oben- oder Perspektivansicht möglich!",3e3),setTimeout(()=>this._eventBus.emit("tool-selected","select"),0);return}}this.currentToolId=e,this.updateControlsMode()}),this._eventBus.on("camera-controls-lock",e=>{this.setControlsEnabled(!e)})}showToast(e,t=3e3){const n=document.createElement("div");n.innerText=e,Object.assign(n.style,{position:"absolute",top:"50%",left:"50%",transform:"translate(-50%, -50%)",background:"rgba(0, 0, 0, 0.8)",color:"white",padding:"15px 25px",borderRadius:"5px",fontFamily:"Arial, sans-serif",fontSize:"14px",zIndex:"5000",pointerEvents:"none",opacity:"0",transition:"opacity 0.3s"}),this.container.appendChild(n),requestAnimationFrame(()=>n.style.opacity="1"),setTimeout(()=>{n.style.opacity="0",setTimeout(()=>{n.parentElement&&this.container.removeChild(n)},300)},t)}saveState(){this.controls&&this.views[this.activeView]&&this.views[this.activeView].target.copy(this.controls.target);const e={activeView:this.activeView,views:{}};Object.values(this.views).forEach(t=>{t&&(e.views[t.type]={position:t.camera.position.toArray(),target:t.target.toArray(),zoom:t.camera.zoom})}),localStorage.setItem("viewState",JSON.stringify(e))}loadState(){const e=localStorage.getItem("viewState");if(e)try{const t=JSON.parse(e);t.views&&Object.keys(t.views).forEach(n=>{const i=t.views[n],r=this.views[n];r&&i&&(r.camera.position.fromArray(i.position),r.target.fromArray(i.target),i.zoom&&(r.camera.zoom=i.zoom,r.camera.updateProjectionMatrix()))}),t.activeView&&this.views[t.activeView]&&(this.activeView=t.activeView),this._eventBus.emit("camera-change",null)}catch(t){console.warn("Failed to load view state",t)}}setActiveView(e){this.views[e]&&this.activeView!==e&&(this.controls&&this.views[this.activeView]&&this.views[this.activeView].target.copy(this.controls.target),this.activeView=e,this.updateViewLabel(),this.updateControlsMode(),this.onWindowResize(),this.setupControls(),this.saveState(),this._eventBus.emit("camera-view-changed",e))}getActiveView(){return this.activeView}getActiveCamera(){var e;return(e=this.views[this.activeView])==null?void 0:e.camera}getCanvas(){return this.renderer.domElement}setControlsEnabled(e){this.controls&&(this.controls.enabled=e)}focusOnObject(e){if(!this.controls)return;const t=new ei().setFromObject(e),n=t.getCenter(new x),i=t.getSize(new x);this.controls.target.copy(n);const r=Math.max(i.x,i.y,i.z),a=this.views[this.activeView];if(a&&a.camera instanceof Tt){let c=Math.abs(r/2/Math.tan(Math.PI*45/360))*1.2;const l=new x().subVectors(a.camera.position,n).normalize().multiplyScalar(c);a.camera.position.copy(n).add(l)}else if(a&&a.camera instanceof Pt){let c=1e3/(r*1.2);a.camera.zoom=Math.min(Math.max(c,.01),100),a.camera.updateProjectionMatrix()}this.controls.update(),this._eventBus.emit("camera-change",null)}getScene(){return this.scene}getControls(){return this.controls}resetCurrentView(){const e=this.views[this.activeView];if(!e)return;const t=5e4;switch(e.target.set(0,0,0),this.controls&&this.controls.target.set(0,0,0),this.activeView){case"TOP":e.camera.position.set(0,t,0),e.camera.lookAt(0,0,0),e.camera.up.set(0,0,-1);break;case"FRONT":e.camera.position.set(0,0,t),e.camera.lookAt(0,0,0);break;case"LEFT":e.camera.position.set(-t,0,0),e.camera.lookAt(0,0,0);break;case"PERSPECTIVE":e.camera.position.set(500,500,500),e.camera.lookAt(0,0,0);break}(e.camera instanceof Tt||e.camera instanceof Pt)&&(e.camera instanceof Pt&&(e.camera.zoom=1),e.camera.updateProjectionMatrix()),this.controls&&this.controls.update(),this.saveState(),this._eventBus.emit("camera-change",null)}updateViewLabel(){const e={TOP:"Oben",FRONT:"Vorne",LEFT:"Links",PERSPECTIVE:"Perspektive"};this.viewLabel.innerText=e[this.activeView]}toggleViewMenu(){if(this.viewMenu){this.closeViewMenu();return}const e={TOP:"Oben",FRONT:"Vorne",LEFT:"Links",PERSPECTIVE:"Perspektive"},t=document.createElement("div");this.viewMenu=t,Object.assign(t.style,{position:"absolute",top:"85px",left:"75px",background:"rgba(30, 30, 30, 0.95)",border:"1px solid #555",borderRadius:"4px",zIndex:"3000",overflow:"hidden",boxShadow:"0 4px 12px rgba(0,0,0,0.6)",fontFamily:"Arial, sans-serif",fontSize:"13px",minWidth:"130px"}),["PERSPECTIVE","TOP","FRONT","LEFT"].forEach(i=>{const r=document.createElement("div"),a=i===this.activeView;Object.assign(r.style,{padding:"8px 14px",color:a?"#aaddff":"#dddddd",cursor:"pointer",fontWeight:a?"bold":"normal",background:a?"rgba(0, 122, 204, 0.25)":"transparent",transition:"background 0.15s"}),r.innerText=e[i],r.onmouseenter=()=>{i!==this.activeView&&(r.style.background="rgba(255,255,255,0.08)")},r.onmouseleave=()=>{i!==this.activeView&&(r.style.background="transparent")},r.onclick=o=>{o.stopPropagation(),this.closeViewMenu(),this.setActiveView(i)},t.appendChild(r)}),this.container.appendChild(t);const n=i=>{!t.contains(i.target)&&!this.viewLabel.contains(i.target)&&this.closeViewMenu()};this.viewMenuCloseHandler=n,document.addEventListener("mousedown",n),document.addEventListener("touchstart",n)}closeViewMenu(){this.viewMenu&&(this.viewMenu.parentElement&&this.viewMenu.parentElement.removeChild(this.viewMenu),this.viewMenu=null),this.viewMenuCloseHandler&&(document.removeEventListener("mousedown",this.viewMenuCloseHandler),document.removeEventListener("touchstart",this.viewMenuCloseHandler),this.viewMenuCloseHandler=null)}setupControls(){this.controls&&this.controls.dispose();const e=this.views[this.activeView];e&&(this.controls=new mg(e.camera,this.renderer.domElement),this.controls.enableDamping=!0,this.controls.dampingFactor=.05,this.controls.addEventListener("end",()=>this.saveState()),this.controls.addEventListener("change",()=>this._eventBus.emit("camera-change",null)),this.controls.target.copy(e.target),this.updateControlsMode(),this.controls.enableRotate=this.activeView==="PERSPECTIVE",this.controls.update())}updateControlsMode(){if(!this.controls)return;this.currentToolId===null||this.currentToolId==="select"||this.activeView==="PERSPECTIVE"?this.controls.mouseButtons={LEFT:nn.ROTATE,MIDDLE:nn.DOLLY,RIGHT:nn.PAN}:this.controls.mouseButtons={LEFT:null,MIDDLE:nn.DOLLY,RIGHT:nn.PAN}}initViews(){const e=this.container.clientWidth/this.container.clientHeight,t=500,n=5e4,i=new Pt(-t*e,t*e,t,-t,-1e6,1e6);i.position.set(0,n,0),i.lookAt(0,0,0),i.up.set(0,0,-1);const r=new Tt(45,e,.1,1e6);r.position.set(500,500,500),r.lookAt(0,0,0);const a=new Pt(-t*e,t*e,t,-t,-1e6,1e6);a.position.set(0,0,n),a.lookAt(0,0,0);const o=new Pt(-t*e,t*e,t,-t,-1e6,1e6);o.position.set(-n,0,0),o.lookAt(0,0,0),this.views.TOP={type:"TOP",container:this.container,camera:i,scene:this.scene,target:new x(0,0,0)},this.views.PERSPECTIVE={type:"PERSPECTIVE",container:this.container,camera:r,scene:this.scene,target:new x(0,0,0)},this.views.FRONT={type:"FRONT",container:this.container,camera:a,scene:this.scene,target:new x(0,0,0)},this.views.LEFT={type:"LEFT",container:this.container,camera:o,scene:this.scene,target:new x(0,0,0)}}onWindowResize(){const e=this.container.clientWidth,t=this.container.clientHeight;this.renderer.setSize(e,t);const n=e/t,i=500;Object.values(this.views).forEach(r=>{r&&r.camera instanceof Pt?(r.camera.left=-i*n,r.camera.right=i*n,r.camera.top=i,r.camera.bottom=-i,r.camera.near=-1e6,r.camera.far=1e6,r.camera.updateProjectionMatrix()):r&&r.camera instanceof Tt&&(r.camera.aspect=n,r.camera.updateProjectionMatrix())}),this._eventBus.emit("camera-change",null)}animate(){requestAnimationFrame(this.animate),this.controls&&this.controls.update();const e=this.views[this.activeView];e&&(this.renderer.clear(),this.renderer.render(e.scene,e.camera))}}class vg{constructor(e,t){W(this,"eventBus");W(this,"scene");W(this,"objects",[]);W(this,"selectedObjects",new Set);this.eventBus=e,this.scene=t,console.log("ObjectManager initialized"),setInterval(()=>this.sanitizeObjects(),500),this.eventBus.on("object-added",n=>{this.updateObjectVisuals(n)}),this.eventBus.on("delete-selected-object",()=>{this.getSelectedObjects().forEach(i=>this.removeObject(i)),this.selectObject(null),this.eventBus.emit("selection-changed",[])}),this.eventBus.on("update-object-geometry",n=>{this.updateObjectVisuals(n)})}updateObjectVisuals(e){const t=e.userData.materialParams;if(!t)return;const n="Visual_Wireframe_Overlay",i=r=>{if(r.userData.isHelper||r.name===n||r.userData.isControlPoint||r.userData.isAnchor)return;const a=r.material;a&&(a.isMeshStandardMaterial||a.isMeshPhongMaterial)&&(t.color&&a.color.set(t.color),t.roughness!==void 0&&a.roughness!==void 0&&(a.roughness=t.roughness),t.metalness!==void 0&&a.metalness!==void 0&&(a.metalness=t.metalness),t.opacity!==void 0&&(a.opacity=t.opacity,a.transparent=t.opacity<1,a.depthWrite=t.opacity>=1,a.needsUpdate=!0),t.flatShading!==void 0&&(a.flatShading=t.flatShading,a.needsUpdate=!0));let o=r.children.find(c=>c.name===n);if(t.wireframe){if(!o){const c=r.geometry;if(!c||!c.attributes||!c.attributes.position||c.attributes.position.count===0)return;const l=new ol(c,1),h=new ln({color:16777215,transparent:!0,opacity:.5});o=new _a(l,h),o.name=n,o.userData.isGeneratedVisual=!0,o.renderOrder=1,r.add(o)}o.visible=!0}else o&&(r.remove(o),o.geometry&&o.geometry.dispose(),o.material&&o.material.dispose())};e.traverse(r=>{r instanceof Xe&&i(r)})}sanitizeObjects(){this.objects.forEach(t=>{(t.scale.x!==1||t.scale.y!==1||t.scale.z!==1)&&(t.scale.set(1,1,1),t.updateMatrixWorld());let n=!1;(!Number.isFinite(t.position.x)||Math.abs(t.position.x)>5e4)&&(t.position.x=0,n=!0),(!Number.isFinite(t.position.y)||Math.abs(t.position.y)>5e4)&&(t.position.y=0,n=!0),(!Number.isFinite(t.position.z)||Math.abs(t.position.z)>5e4)&&(t.position.z=0,n=!0),n&&(console.warn(`ObjectManager: Rescued corrupted object "${t.name}" from extreme coordinates.`),t.updateMatrixWorld())})}selectObject(e,t=!1){t||(this.selectedObjects.forEach(n=>{this.setObjectHelperVisibility(n,!1),this.setAnchorColor(n,13421772)}),this.selectedObjects.clear()),e&&(t&&this.selectedObjects.has(e)?(this.selectedObjects.delete(e),this.setObjectHelperVisibility(e,!1),this.setAnchorColor(e,13421772)):(this.selectedObjects.add(e),this.setObjectHelperVisibility(e,!0),this.setAnchorColor(e,16711680))),this.eventBus.emit("selection-changed",Array.from(this.selectedObjects))}deselectAll(){this.objects.forEach(e=>{this.setObjectHelperVisibility(e,!1),this.setAnchorColor(e,13421772)}),this.selectedObjects.clear(),this.eventBus.emit("selection-changed",[])}setObjectHelperVisibility(e,t){e.traverse(n=>{n.userData.isControlPoint||n.userData.isHelperLine?n.visible=t:n.userData.isAnchor&&(n.userData.isMainAnchor?n.visible=!0:n.visible=t)})}setAnchorColor(e,t){const n=e.children.find(i=>i.userData.isAnchor&&i.userData.isMainAnchor);if(n){const i=n.material;i&&i.color&&i.color.setHex(t)}}getSelectedObjects(){return Array.from(this.selectedObjects)}getObjects(){return this.objects}addObject(e,t=!0){if(!e.name||e.name.startsWith("Object")||e.name.startsWith("Circle")||e.name.startsWith("Square")||e.name.startsWith("Line")){const n=e.userData.type;let i="Objekt";n==="line"?i="Linie":n==="square"?i="Rechteck":n==="circle"?i="Kreis":n==="background_image"?i="Bild":n==="bezier_path"&&(i=e.userData.isClosed?"Form":"Pfad");const r=this.objects.filter(a=>a.userData.type===n).length+1;e.name=`${i} ${r}`}this.scene.add(e),this.objects.push(e),t&&this.selectObject(e),this.eventBus.emit("object-added",e)}removeObject(e){if(!e)return;e.traverse(n=>{n.geometry&&n.geometry.dispose(),n.material&&(Array.isArray(n.material)?n.material.forEach(i=>i.dispose()):n.material.dispose())}),this.scene.remove(e);const t=this.objects.indexOf(e);t>-1&&this.objects.splice(t,1),this.selectedObjects.delete(e),console.log(`ObjectManager: Object "${e.name}" and its visuals permanently removed.`),this.eventBus.emit("object-removed",e)}clearAll(){this.objects.forEach(e=>{this.scene.remove(e),e.traverse(t=>{t.geometry&&t.geometry.dispose(),t.material&&(Array.isArray(t.material)?t.material.forEach(n=>n.dispose()):t.material.dispose())})}),this.objects=[],this.selectedObjects.clear(),this.eventBus.emit("selection-changed",[]),this.eventBus.emit("objects-cleared",null)}}class _g{constructor(){W(this,"panel");W(this,"logContainer");W(this,"visible",!1);W(this,"originalConsole",{log:console.log.bind(console),warn:console.warn.bind(console),error:console.error.bind(console),info:console.info.bind(console)});this.panel=this.createPanel(),this.logContainer=this.panel.querySelector(".debug-log"),this.interceptConsoleMethods(),document.body.appendChild(this.panel)}toggle(){this.visible=!this.visible,this.panel.style.display=this.visible?"flex":"none"}destroy(){console.log=this.originalConsole.log,console.warn=this.originalConsole.warn,console.error=this.originalConsole.error,console.info=this.originalConsole.info,this.panel.remove()}createPanel(){const e=document.createElement("div");Object.assign(e.style,{position:"fixed",bottom:"30px",left:"50%",transform:"translateX(-50%)",width:"780px",maxWidth:"95vw",height:"280px",background:"#1a1a1a",border:"1px solid #555",borderRadius:"6px",display:"none",flexDirection:"column",zIndex:"9999",fontFamily:"monospace",fontSize:"12px",boxShadow:"0 4px 24px rgba(0,0,0,0.7)"});const t=document.createElement("div");Object.assign(t.style,{display:"flex",alignItems:"center",justifyContent:"space-between",padding:"4px 10px",background:"#2a2a2a",borderBottom:"1px solid #444",borderRadius:"6px 6px 0 0",cursor:"move",userSelect:"none"});const n=document.createElement("span");n.textContent="Debug Console",n.style.cssText="color: #ccc; font-size: 12px; font-weight: bold;";const i=document.createElement("div");i.style.display="flex",i.style.gap="6px";const r=document.createElement("button");r.textContent="Clear",r.style.cssText="background:#333; color:#aaa; border:1px solid #555; padding:1px 8px; font-size:11px; cursor:pointer; border-radius:3px;";const a=document.createElement("button");a.textContent="✕",a.style.cssText="background:#333; color:#aaa; border:1px solid #555; padding:1px 6px; font-size:11px; cursor:pointer; border-radius:3px;",i.appendChild(r),i.appendChild(a),t.appendChild(n),t.appendChild(i);const o=document.createElement("div");return o.className="debug-log",Object.assign(o.style,{flex:"1",overflowY:"auto",padding:"6px 10px",color:"#ddd",lineHeight:"1.5"}),e.appendChild(t),e.appendChild(o),r.onclick=()=>{o.innerHTML=""},a.onclick=()=>{this.visible=!1,e.style.display="none"},this.makeDraggable(e,t),e}appendEntry(e,t){const n=document.createElement("div"),i={log:"#ddd",info:"#7cf",warn:"#fc7",error:"#f77"};n.style.cssText=`color:${i[e]}; border-bottom:1px solid #2a2a2a; padding:1px 0; white-space:pre-wrap; word-break:break-all;`;const r=e!=="log"?`[${e.toUpperCase()}] `:"";n.textContent=r+t.map(a=>{if(typeof a=="object")try{return JSON.stringify(a,null,2)}catch{return String(a)}return String(a)}).join(" "),this.logContainer.appendChild(n),this.logContainer.scrollTop=this.logContainer.scrollHeight}interceptConsoleMethods(){["log","warn","error","info"].forEach(t=>{const n=this.originalConsole[t];console[t]=(...i)=>{n(...i),this.appendEntry(t,i)}})}makeDraggable(e,t){let n=!1,i=0,r=0,a=0,o=0;const c=h=>{n&&(e.style.left=a+h.clientX-i+"px",e.style.top=o+h.clientY-r+"px")},l=()=>{n=!1};t.addEventListener("mousedown",h=>{n=!0;const u=e.getBoundingClientRect();i=h.clientX,r=h.clientY,a=u.left,o=u.top,e.style.transform="none",e.style.left=a+"px",e.style.top=o+"px",e.style.bottom="auto",h.preventDefault()}),document.addEventListener("mousemove",c),document.addEventListener("mouseup",l)}}class xg{constructor(e){W(this,"eventBus");W(this,"leftToolbar");W(this,"topToolbar");W(this,"bottomToolbar");W(this,"imageFileInput");W(this,"projectFileInput");W(this,"projectNameDisplay");W(this,"debugConsole");this.eventBus=e,this.debugConsole=new _g,this.createToolbars(),this.initListeners(),setTimeout(()=>this.eventBus.emit("request-project-name",null),100)}createToolbars(){this.topToolbar=document.createElement("div"),Object.assign(this.topToolbar.style,{position:"absolute",top:"0",left:"0",width:"100%",height:"40px",display:"flex",alignItems:"center",gap:"10px",background:"#222",padding:"0 10px",borderBottom:"1px solid #444",zIndex:"4000",boxSizing:"border-box"}),document.body.appendChild(this.topToolbar),this.leftToolbar=document.createElement("div"),Object.assign(this.leftToolbar.style,{position:"absolute",top:"40px",left:"0",width:"35px",height:"calc(100% - 70px)",display:"flex",flexDirection:"column",alignItems:"center",gap:"10px",background:"#222",padding:"10px 0",borderRight:"1px solid #444",zIndex:"3000",boxSizing:"border-box"}),document.body.appendChild(this.leftToolbar),this.bottomToolbar=document.createElement("div"),Object.assign(this.bottomToolbar.style,{position:"fixed",bottom:"0",left:"0",width:"100%",height:"30px",display:"flex",alignItems:"center",gap:"15px",background:"#222",padding:"0 10px",borderTop:"1px solid #444",zIndex:"3000",boxSizing:"border-box"}),document.body.appendChild(this.bottomToolbar),this.createMenuButton("...",[{label:"Neues Projekt",action:()=>this.eventBus.emit("new-project",null)},{label:"Projekt laden",action:()=>this.triggerProjectLoad()},{label:"Projekt speichern",action:()=>this.eventBus.emit("save-project",null)},{label:"Speichern unter...",action:()=>this.eventBus.emit("save-project-as",null)},{label:"Exportieren (STL)",action:()=>this.eventBus.emit("export-stl",null)},{label:"Hintergrundbild laden",action:()=>this.triggerImageUpload()},{label:"Einstellungen",action:()=>this.eventBus.emit("open-settings",null)}],this.topToolbar);const e=document.createElement("button");e.title="Ausgewählte Objekte löschen (Entf)",e.innerHTML="🗑️",Object.assign(e.style,{width:"25px",height:"25px",cursor:"pointer",border:"1px solid #555",background:"#333",color:"white",borderRadius:"4px",transition:"all 0.2s",fontSize:"14px",marginLeft:"5px",display:"flex",alignItems:"center",justifyContent:"center",lineHeight:"1"}),e.onclick=()=>{this.eventBus.emit("delete-selected-object",null)},this.topToolbar.appendChild(e);const t=document.createElement("div");t.style.cssText="width: 1px; height: 20px; background: #555; margin: 0 5px;",this.topToolbar.appendChild(t),this.addButton("select","➤","Selektieren (V)",this.topToolbar);const n=document.createElement("button");n.title="Rasterfang (Snap)",n.innerHTML=`
        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" style="display:block; margin:auto;">
            <path d="M6 9 V 15 A 6 6 0 0 0 18 15 V 9" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" />
            <rect x="3" y="4" width="6" height="5" fill="currentColor" />
            <rect x="15" y="4" width="6" height="5" fill="currentColor" />
        </svg>`,Object.assign(n.style,{width:"25px",height:"25px",cursor:"pointer",border:"1px solid #555",background:"#333",color:"#888",borderRadius:"4px",transition:"all 0.2s",padding:"0"});let i=!1;const r=()=>{i?(n.style.background="#007acc",n.style.borderColor="#00aaff",n.style.color="white"):(n.style.background="#333",n.style.borderColor="#555",n.style.color="#888")};n.onclick=()=>{i=!i,this.eventBus.emit("toggle-snap",i),r()},r(),this.topToolbar.appendChild(n);const a=document.createElement("div");Object.assign(a.style,{position:"absolute",left:"50%",transform:"translateX(-50%)",display:"flex",alignItems:"center",gap:"15px"}),this.projectNameDisplay=document.createElement("div"),Object.assign(this.projectNameDisplay.style,{color:"#ffffff",fontSize:"13px",fontWeight:"bold",fontFamily:"Arial, sans-serif",pointerEvents:"none"}),this.projectNameDisplay.innerText="Lade...",a.appendChild(this.projectNameDisplay);const o=document.createElement("button");o.innerHTML="🖌️ 1",o.title="Pinsel-Einstellungen des 1. Pinsels der Davinci Maschine",Object.assign(o.style,{height:"25px",cursor:"pointer",border:"1px solid #555",background:"#333",color:"white",borderRadius:"4px",fontSize:"13px",padding:"0 10px",display:"flex",alignItems:"center",justifyContent:"center"}),o.onclick=()=>{console.log("Toolbar: Brush settings button clicked"),this.eventBus.emit("open-brush-properties",null)},a.appendChild(o),this.topToolbar.appendChild(a);const c=document.createElement("div");c.style.cssText="margin-left: auto; display: flex; align-items: center; gap: 10px;",this.topToolbar.appendChild(c);const l=document.createElement("div");l.style.cssText="display: flex; align-items: center; gap: 5px; border-left: 1px solid #555; padding-left: 10px;",c.appendChild(l);const h=document.createElement("div");h.style.cssText="margin-left: 10px; display: flex; align-items: center; gap: 5px; border-left: 1px solid #555; padding-left: 10px;",c.appendChild(h);const u=document.createElement("button");u.innerHTML="📝",u.title="G-Code generieren",Object.assign(u.style,{width:"30px",height:"25px",cursor:"pointer",border:"1px solid #555",background:"#333",color:"white",borderRadius:"4px",fontSize:"16px",display:"flex",alignItems:"center",justifyContent:"center"}),u.onclick=()=>{this.eventBus.emit("cnc-generate-gcode",null)},h.appendChild(u);const f=document.createElement("button");f.innerHTML="▶️",f.title="Malprozess starten",Object.assign(f.style,{width:"30px",height:"25px",cursor:"pointer",border:"1px solid #555",background:"#333",color:"white",borderRadius:"4px",fontSize:"16px",display:"flex",alignItems:"center",justifyContent:"center"}),f.onclick=()=>{this.eventBus.emit("cnc-start-painting",null)},h.appendChild(f),this.addButton("line","─","Linie (L)",this.leftToolbar),this.addButton("square","■","Quadrat (S)",this.leftToolbar),this.addButton("circle","●","Kreis (C)",this.leftToolbar),this.addButton("brush_create","🖌️","3D Pinsel erstellen",this.leftToolbar);const d=document.createElement("div");d.style.cssText="width: 80%; height: 1px; background: #444; margin: 5px 0;",this.leftToolbar.appendChild(d);const g=document.createElement("div");g.style.flexGrow="1",this.bottomToolbar.appendChild(g);const v=document.createElement("button");v.innerHTML="⌖",v.title="Ansicht zentrieren",v.style.cssText="width: 25px; height: 25px; background: #444; color: white; border: 1px solid #555; padding: 0; font-size: 16px; cursor: pointer; border-radius: 3px; display: flex; align-items: center; justify-content: center;",v.onclick=()=>this.eventBus.emit("ui-focus-clicked",null),this.bottomToolbar.appendChild(v),this.imageFileInput=document.createElement("input"),this.imageFileInput.type="file",this.imageFileInput.accept="image/*",this.imageFileInput.style.display="none",this.imageFileInput.onchange=m=>this.handleImageUpload(m),document.body.appendChild(this.imageFileInput),this.projectFileInput=document.createElement("input"),this.projectFileInput.type="file",this.projectFileInput.accept="application/json",this.projectFileInput.style.display="none",this.projectFileInput.onchange=m=>this.handleProjectUpload(m),document.body.appendChild(this.projectFileInput)}createMenuButton(e,t,n){const i=document.createElement("div");i.style.position="relative",i.style.display="inline-block";const r=document.createElement("button");r.innerText=e,r.style.cssText="background: #333; color: white; border: 1px solid #555; padding: 5px 10px; font-size: 12px; cursor: pointer; border-radius: 4px;";const a=document.createElement("div");Object.assign(a.style,{position:"absolute",top:"100%",left:"0",background:"#333",border:"1px solid #555",minWidth:"150px",display:"none",zIndex:"10000",flexDirection:"column",marginTop:"2px",boxShadow:"2px 2px 5px rgba(0,0,0,0.5)"}),t.forEach(o=>{const c=document.createElement("div");c.innerText=o.label,Object.assign(c.style,{padding:"8px 10px",cursor:"pointer",color:"#eee",fontSize:"12px",borderBottom:"1px solid #444"}),c.onmouseenter=()=>c.style.background="#444",c.onmouseleave=()=>c.style.background="#333",c.onclick=()=>{a.style.display="none",o.action()},a.appendChild(c)}),r.onclick=o=>{o.stopPropagation();const c=a.style.display==="flex";document.querySelectorAll(".toolbar-menu").forEach(l=>l.style.display="none"),a.style.display=c?"none":"flex"},window.addEventListener("click",()=>{a.style.display="none"}),a.classList.add("toolbar-menu"),i.appendChild(r),i.appendChild(a),n.appendChild(i)}triggerImageUpload(){this.imageFileInput.click()}async triggerProjectLoad(){if(window.showOpenFilePicker)try{const[e]=await window.showOpenFilePicker({types:[{description:"JSON-Projektdateien",accept:{"application/json":[".json"]}}],multiple:!1});this.eventBus.emit("load-project-from-handle",e)}catch(e){if(e.name==="AbortError")return;console.error("Error loading file via API:",e),this.projectFileInput.click()}else this.projectFileInput.click()}handleProjectUpload(e){const t=e.target;if(t.files&&t.files[0]){const n=t.files[0];this.eventBus.emit("load-project",n)}t.value=""}handleImageUpload(e){const t=e.target;if(t.files&&t.files[0]){const n=t.files[0],i=new FileReader;i.onload=r=>{var o;const a=new Image;a.onload=()=>{const c=new Nt(a);c.needsUpdate=!0;const l=a.width/a.height,h=200,u=200/l;this.eventBus.emit("create-background-image",{texture:c,width:h,height:u})},a.onerror=()=>{console.error("Toolbar: Image failed to load. The data URL might be corrupt or invalid.")},a.src=(o=r.target)==null?void 0:o.result},i.onerror=()=>{console.error("Toolbar: FileReader failed to read the file.")},i.readAsDataURL(n)}t.value=""}addButton(e,t,n,i){const r=document.createElement("button");r.innerHTML=t,r.title=n,r.dataset.id=e,Object.assign(r.style,{width:"25px",height:"25px",fontSize:"14px",cursor:"pointer",border:"1px solid #555",background:"#333",color:"white",borderRadius:"4px",transition:"all 0.2s"}),r.onclick=a=>{a.stopPropagation(),this.eventBus.emit("tool-selected",e)},i.appendChild(r)}initListeners(){this.eventBus.on("tool-active-changed",e=>{this.updateActiveState(e)}),this.eventBus.on("project-name-changed",e=>{this.projectNameDisplay&&(this.projectNameDisplay.innerText=e)})}updateActiveState(e){document.querySelectorAll("button[data-id]").forEach(n=>{const i=n;i.dataset.id===e?(i.style.background="#007acc",i.style.borderColor="#00aaff"):(i.style.background="#333",i.style.borderColor="#555")})}}class Bt{constructor(e,t,n,i=1,r,a=-1/0,o=1/0,c=2){W(this,"container");W(this,"valueInput");W(this,"onChange");W(this,"step");W(this,"min");W(this,"max");W(this,"timer",null);W(this,"delayTimer",null);W(this,"startTime",0);W(this,"precision");this.step=i,this.onChange=r,this.min=a,this.max=o,this.precision=c,this.container=document.createElement("div"),this.container.style.cssText="display: flex; align-items: center; justify-content: space-between; margin-bottom: 5px; font-size: 11px;";const l=document.createElement("span");l.innerText=t,l.style.marginRight="5px",l.style.width="40px",this.container.appendChild(l);const h=document.createElement("div");h.style.cssText="display: flex; align-items: center; flex: 1;";const u=this.createButton("-");this.setupAutoRepeat(u,-1),this.valueInput=document.createElement("input"),this.valueInput.type="text";const f=Math.pow(10,this.precision);this.valueInput.value=(Math.round(n*f)/f).toString(),this.valueInput.style.cssText="width: 100%; text-align: center; background: #111; color: white; border: 1px solid #444; margin: 0 0px; height: 18px; font-size: 10px; outline: none; selection-background-color: #007acc;";const d=()=>{let v=this.valueInput.value.replace(",",".");const m=parseFloat(v);isNaN(m)||this.updateValue(m)};this.valueInput.onkeydown=v=>{v.key==="Enter"&&(d(),this.valueInput.blur())},this.valueInput.onblur=()=>{d()},this.valueInput.onfocus=()=>{this.valueInput.select()};const g=this.createButton("+");this.setupAutoRepeat(g,1),h.appendChild(u),h.appendChild(this.valueInput),h.appendChild(g),this.container.appendChild(h),e.appendChild(this.container)}createButton(e){const t=document.createElement("button");return t.innerText=e,t.style.cssText="width: 18px; height: 18px; background: #333; color: white; border: 1px solid #555; cursor: pointer; display: flex; align-items: center; justify-content: center; padding: 0; font-size: 10px;",t}setupAutoRepeat(e,t){const n=()=>{this.timer&&(clearInterval(this.timer),this.timer=null),this.delayTimer&&(clearTimeout(this.delayTimer),this.delayTimer=null),e.style.background="#333",window.removeEventListener("mouseup",n,{capture:!0})},i=a=>{this.updateValue(parseFloat(this.valueInput.value)+a*t)},r=()=>{if(!document.body.contains(this.container)){n();return}const a=Date.now()-this.startTime;let o=this.step;a>2e3?o=this.step*100:a>1e3&&(o=this.step*10),i(o)};e.onmousedown=a=>{a.button===0&&(e.style.background="#555",i(this.step),this.startTime=Date.now(),this.delayTimer=setTimeout(()=>{this.timer=setInterval(r,100)},500),window.addEventListener("mouseup",n,{capture:!0}),a.preventDefault())},e.onmouseleave=n}updateValue(e){if(isNaN(e))return;e=Math.min(Math.max(e,this.min),this.max);const t=Math.pow(10,this.precision);e=Math.round(e*t)/t,parseFloat(this.valueInput.value)!==e&&(this.valueInput.value=e.toString()),this.onChange(e)}setValue(e){this.valueInput.value=e.toString()}}class fe{static getCircleTexture(){const e="white_circle";if(this.textureCache[e])return this.textureCache[e];const t=256,n=document.createElement("canvas");n.width=t,n.height=t;const i=n.getContext("2d");if(!i)throw new Error("Could not create canvas context");const r=t/2,a=t/2-2;i.beginPath(),i.arc(r,r,a,0,2*Math.PI),i.fillStyle="#FFFFFF",i.fill();const o=new er(n);return o.minFilter=Gt,o.magFilter=Gt,this.textureCache[e]=o,o}static createSprite(e,t){const n=this.getCircleTexture(),i=new tn({map:n,color:new Ue(e),depthTest:!1,sizeAttenuation:!0}),r=new Ki(i);return r.scale.set(t,t,1),r.frustumCulled=!1,r.renderOrder=9999,r}static createAnchor(e,t){const n=this.createSprite("#FF3333",2);return n.position.copy(e),n.userData.isAnchor=!0,n.userData.pointType=t,n.visible=!1,n}static addAnchor(e){for(let n=e.children.length-1;n>=0;n--)e.children[n].userData.isMainAnchor&&e.remove(e.children[n]);const t=this.createSprite("#FF3333",2.5);t.name=`Anchor_${e.userData.type||"Unknown"}`,t.userData.isAnchor=!0,t.userData.isMainAnchor=!0,t.renderOrder=9999,e.add(t)}static createControlPoint(e,t){const n=this.createSprite("#00FF00",1.5);return n.position.copy(e),n.userData.isControlPoint=!0,n.userData.pointType=t,n.visible=!1,n}static createHelperLine(e,t){const n=new lt().setFromPoints([e,t]),i=new cg({color:8947848,dashSize:2,gapSize:1,depthTest:!1}),r=new Pi(n,i);return r.computeLineDistances(),r.userData.isHelperLine=!0,r.visible=!1,r.frustumCulled=!1,r}static createBezierPathNode(e){const t=this.createSprite("#FF3333",2);return t.position.copy(e),t.userData.isAnchor=!0,t.userData.isNode=!0,t.userData.pointType="node",t.visible=!1,t}static createBezierSegment(e,t,n,i){const r=new st;r.userData.type="bezier_line";const a=new x().subVectors(t,e),o=a.length(),c=n||new x().copy(e).add(a.clone().normalize().multiplyScalar(o*.333)),l=i||new x().copy(e).add(a.clone().normalize().multiplyScalar(o*.666)),u=new Ti(e,c,l,t).getPoints(50),f=new lt().setFromPoints(u),d=new ln({color:16777215,depthTest:!1,depthWrite:!1,transparent:!0}),g=new Pi(f,d);g.userData.isCurve=!0,g.frustumCulled=!1,g.renderOrder=999,r.add(g);const v=new x().addVectors(e,t).multiplyScalar(.5);r.position.copy(v);const m=new x().subVectors(e,v),p=new x().subVectors(t,v),y=new x().subVectors(c,v),_=new x().subVectors(l,v),S=new Ti(m,y,_,p);g.geometry.setFromPoints(S.getPoints(50)),g.userData.curve=S;const R=this.createAnchor(m,"start"),T=this.createAnchor(p,"end"),w=this.createControlPoint(y,"cp1"),O=this.createControlPoint(_,"cp2"),M=this.createHelperLine(m,y),A=this.createHelperLine(p,_);return r.add(R,T,w,O,M,A),r.userData.helpers={start:R,end:T,cp1:w,cp2:O,line1:M,line2:A},this.addAnchor(r),r}static createLinkedBezierSegment(e,t,n,i){const r=new st;r.userData.type="bezier_line",r.userData.isLinked=!0,r.userData.nodes={start:e,end:t};const a=e.position,o=t.position,c=new x().subVectors(o,a),l=c.length(),h=n||new x().copy(a).add(c.clone().normalize().multiplyScalar(l*.333)),u=i||new x().copy(a).add(c.clone().normalize().multiplyScalar(l*.666)),f=new Ti(a,h,u,o),d=f.getPoints(50),g=new lt().setFromPoints(d),v=new ln({color:16777215,depthTest:!1,depthWrite:!1,transparent:!0}),m=new Pi(g,v);m.userData.isCurve=!0,m.userData.curve=f,m.frustumCulled=!1,m.renderOrder=999,r.add(m);const p=this.createControlPoint(h,"cp1"),y=this.createControlPoint(u,"cp2"),_=this.createHelperLine(a,h),S=this.createHelperLine(o,u);return r.add(p,y,_,S),r.userData.helpers={cp1:p,cp2:y,line1:_,line2:S},r}static linearizeBezierSegment(e){if(e.userData.type!=="bezier_line"||!e.userData.isLinked||!e.userData.nodes)return;const t=e.userData.nodes,n=e.userData.helpers;if(!t.start||!t.end||!n.cp1||!n.cp2)return;const i=t.start.position,r=t.end.position,a=new x().subVectors(r,i),o=a.length();n.cp1.position.copy(i).add(a.clone().normalize().multiplyScalar(o*.333)),n.cp2.position.copy(i).add(a.clone().normalize().multiplyScalar(o*.666)),this.updateBezierSegmentGeometry(e)}static updateBezierSegmentGeometry(e){if(e.userData.type!=="bezier_line")return;let t,n,i,r;const a=e.userData.helpers;if(e.userData.isLinked&&e.userData.nodes){const l=e.userData.nodes;t=l.start.position,n=l.end.position,i=a.cp1.position,r=a.cp2.position}else if(a)t=a.start.position,n=a.end.position,i=a.cp1.position,r=a.cp2.position;else return;const o=(l,h,u)=>{l&&(l.geometry.setFromPoints([h,u]),l.computeLineDistances(),l.geometry.attributes.position.needsUpdate=!0,l.geometry.computeBoundingSphere())};o(a.line1,t,i),o(a.line2,n,r);const c=e.children.find(l=>l.userData.isCurve);if(c){let l,h;const u=new x().subVectors(n,t),f=u.length();let d=!1;if(f>1e-4){const g=u.clone().normalize(),v=new x().subVectors(i,t),m=new x().subVectors(r,t),p=new x().crossVectors(v,g).length(),y=new x().crossVectors(m,g).length();p<.01&&y<.01&&(d=!0)}else d=!0;d?(l=new sl(t,n),h=[t,n]):(l=new Ti(t,i,r,n),h=l.getPoints(50)),c.geometry.attributes.position&&c.geometry.attributes.position.count!==h.length&&(c.geometry.dispose(),c.geometry=new lt),c.geometry.setFromPoints(h),c.userData.curve=l,c.geometry.attributes.position&&(c.geometry.attributes.position.needsUpdate=!0),c.geometry.computeBoundingSphere()}}static createPath(e,t=!1){if(e.length<2)return null;const n=new st;n.userData.type="bezier_path",n.userData.isClosed=t;const i=new x;e.forEach(a=>i.add(a)),i.divideScalar(e.length),n.position.copy(i);const r=[];e.forEach((a,o)=>{const c=new x().subVectors(a,i),l=this.createBezierPathNode(c);l.name=`Node_${o}`,n.add(l),r.push(l)});for(let a=0;a<r.length&&!(!t&&a===r.length-1);a++){const o=(a+1)%r.length,c=r[a],l=r[o],h=this.createLinkedBezierSegment(c,l);h.name=`Segment_${a}`,n.add(h)}return this.addAnchor(n),n}static imageToDataURL(e){try{const t=document.createElement("canvas");t.width=e.width,t.height=e.height;const n=t.getContext("2d");return n?(n.drawImage(e,0,0),t.toDataURL("image/png")):""}catch(t){return console.warn("Could not serialize image",t),""}}static serializeBezierGroup(e){if(!e)return null;const t=e.children.filter(i=>i.userData.isNode).map(i=>i.position.toArray()),n=e.children.filter(i=>i.userData.type==="bezier_line").map(i=>{const r=i.userData.helpers;return{cp1:r.cp1.position.toArray(),cp2:r.cp2.position.toArray()}});return{nodes:t,segments:n}}static applyBezierData(e,t){if(!e||!t)return;const n=e.children.filter(r=>r.userData.isNode);t.nodes&&n.length===t.nodes.length&&n.forEach((r,a)=>r.position.fromArray(t.nodes[a]));const i=e.children.filter(r=>r.userData.type==="bezier_line");t.segments&&i.length===t.segments.length&&i.forEach((r,a)=>{const o=t.segments[a],c=r.userData.helpers;c&&(c.cp1.position.fromArray(o.cp1),c.cp2.position.fromArray(o.cp2),this.updateBezierSegmentGeometry(r))})}}W(fe,"textureCache",{});class _n{static createLineFromPoints(e,t){const n=new st;n.userData.type="line";const i=fe.createBezierPathNode(e),r=fe.createBezierPathNode(t);return n.add(i,r),n.add(fe.createLinkedBezierSegment(i,r)),fe.addAnchor(n),n}static createRectangle(e,t){const n=new st;n.userData.type="square",n.userData.isClosed=!0;const i=e.y,r=Math.min(e.x,t.x),a=Math.max(e.x,t.x),o=Math.min(e.z,t.z),c=Math.max(e.z,t.z),l=(r+a)/2,h=(o+c)/2;n.position.set(l,i,h);const u=parseFloat((a-r).toFixed(2)),f=parseFloat((c-o).toFixed(2));n.userData.baseSize={width:u,length:f};const d=u/2,g=f/2,v=new x(-d,0,-g),m=new x(d,0,-g),p=new x(d,0,g),y=new x(-d,0,g),_=fe.createBezierPathNode(v),S=fe.createBezierPathNode(m),R=fe.createBezierPathNode(p),T=fe.createBezierPathNode(y);return n.add(_,S,R,T),n.add(fe.createLinkedBezierSegment(_,S),fe.createLinkedBezierSegment(S,R),fe.createLinkedBezierSegment(R,T),fe.createLinkedBezierSegment(T,_)),fe.addAnchor(n),n}static createSquare(e=50){const t=new st;t.userData.type="square",t.userData.isClosed=!0,t.userData.baseSize={width:e,length:e};const n=e/2,i=new x(-n,0,-n),r=new x(n,0,-n),a=new x(n,0,n),o=new x(-n,0,n),c=fe.createBezierPathNode(i),l=fe.createBezierPathNode(r),h=fe.createBezierPathNode(a),u=fe.createBezierPathNode(o);return t.add(c,l,h,u),t.add(fe.createLinkedBezierSegment(c,l),fe.createLinkedBezierSegment(l,h),fe.createLinkedBezierSegment(h,u),fe.createLinkedBezierSegment(u,c)),fe.addAnchor(t),t}static updateRectangle(e){var f,d;const t=((f=e.userData.baseSize)==null?void 0:f.width)||50,n=((d=e.userData.baseSize)==null?void 0:d.length)||t,i=t/2,r=n/2,a=e.userData.borderRadius,o=a&&a.enabled&&a.radius>0,c=o?Math.min(a.radius,Math.min(i,r)):0,l=.5522847*c,h=g=>{const v=O=>O.userData.isNode&&(g?O.userData.isOffsetNode:!O.userData.isOffsetNode),m=O=>O.userData.type==="bezier_line"&&(g?O.userData.isOffset:!O.userData.isOffset);let p=e.children.filter(v),y=e.children.filter(m);const _=o?8:4;if(p.length!==_||y.length!==_){for(let O=e.children.length-1;O>=0;O--){const M=e.children[O];(v(M)||m(M))&&e.remove(M)}p=[],y=[];for(let O=0;O<_;O++){const M=fe.createBezierPathNode(new x);g&&(M.userData.isOffsetNode=!0,M.visible=!1),e.add(M),p.push(M)}for(let O=0;O<_;O++){const M=p[O],A=p[(O+1)%_],U=fe.createLinkedBezierSegment(M,A);if(g){U.userData.isOffset=!0;const G=U.children.find(j=>j.userData.isCurve);G&&G.material&&(G.material.color.setHex(16755200),G.material.opacity=.5)}e.add(U),y.push(U)}}let S=i,R=r,T=c,w=l;if(g){const O=e.userData.offset,M=O?O.x:0,A=O?O.z:0,U=(M+A)/2;S+=M,R+=A,o&&(T+=U,T<0&&(T=0),w=.5522847*T)}if(!o)p[0].position.set(-S,0,-R),p[1].position.set(S,0,-R),p[2].position.set(S,0,R),p[3].position.set(-S,0,R),y.forEach(O=>fe.linearizeBezierSegment(O));else{p[0].position.set(-S+T,0,-R),p[1].position.set(S-T,0,-R),p[2].position.set(S,0,-R+T),p[3].position.set(S,0,R-T),p[4].position.set(S-T,0,R),p[5].position.set(-S+T,0,R),p[6].position.set(-S,0,R-T),p[7].position.set(-S,0,-R+T),fe.linearizeBezierSegment(y[0]),fe.linearizeBezierSegment(y[2]),fe.linearizeBezierSegment(y[4]),fe.linearizeBezierSegment(y[6]);const O=(M,A,U,G,j)=>{const D=y[M],I=D.userData.helpers;I&&(I.cp1.position.copy(p[M].position).add(new x(A,0,U)),I.cp2.position.copy(p[(M+1)%8].position).add(new x(G,0,j)),fe.updateBezierSegmentGeometry(D))};O(1,w,0,0,-w),O(3,0,w,w,0),O(5,-w,0,0,w),O(7,0,-w,-w,0)}};h(!1);const u=e.userData.offset;if(u&&u.enabled)h(!0);else for(let g=e.children.length-1;g>=0;g--){const v=e.children[g];(v.userData.isOffsetNode||v.userData.isOffset)&&e.remove(v)}}static createCircle(e=25){const t=new st;t.name="Circle",t.userData.type="circle",t.userData.isClosed=!0,t.userData.baseSize={radius:e};const n=e,i=.5522847*n,r=new x(0,0,-n),a=new x(n,0,0),o=new x(0,0,n),c=new x(-n,0,0),l=fe.createBezierPathNode(r),h=fe.createBezierPathNode(a),u=fe.createBezierPathNode(o),f=fe.createBezierPathNode(c);t.add(l,h,u,f);const d=(g,v,m,p)=>{const y=fe.createLinkedBezierSegment(g,v,m,p);fe.updateBezierSegmentGeometry(y),t.add(y)};return d(l,h,new x(i,0,-n),new x(n,0,-i)),d(h,u,new x(n,0,i),new x(i,0,n)),d(u,f,new x(-i,0,n),new x(-n,0,i)),d(f,l,new x(-n,0,-i),new x(-i,0,-n)),fe.addAnchor(t),t}static updateCircleRadius(e,t){if(!e||e.userData.type!=="circle")return;e.userData.baseSize||(e.userData.baseSize={}),e.userData.baseSize.radius=t;const n=t,i=.5522847*n;e.scale.set(1,1,1);const r=e.children.filter(l=>l.userData.isNode&&!l.userData.isOffsetNode);if(r.length===4){r[0].position.set(0,0,-n),r[1].position.set(n,0,0),r[2].position.set(0,0,n),r[3].position.set(-n,0,0);const l=e.children.filter(h=>h.userData.type==="bezier_line"&&!h.userData.isOffset);if(l.length===4){const h=(u,f,d)=>{const g=u.userData.helpers;g&&(g.cp1.position.copy(f),g.cp2.position.copy(d),fe.updateBezierSegmentGeometry(u))};h(l[0],new x(i,0,-n),new x(n,0,-i)),h(l[1],new x(n,0,i),new x(i,0,n)),h(l[2],new x(-i,0,n),new x(-n,0,i)),h(l[3],new x(-n,0,-i),new x(-i,0,-n))}}const a=e.userData.offset,o=a&&a.enabled,c=()=>{for(let l=e.children.length-1;l>=0;l--){const h=e.children[l];(h.userData.isOffsetNode||h.userData.isOffset)&&e.remove(h)}};if(o){const l=n+(a.radius||0),h=.5522847*l;let u=e.children.filter(g=>g.userData.isNode&&g.userData.isOffsetNode),f=e.children.filter(g=>g.userData.type==="bezier_line"&&g.userData.isOffset);if(u.length!==4||f.length!==4){c();const g=new x(0,0,-l),v=new x(l,0,0),m=new x(0,0,l),p=new x(-l,0,0),y=fe.createBezierPathNode(g),_=fe.createBezierPathNode(v),S=fe.createBezierPathNode(m),R=fe.createBezierPathNode(p);[y,_,S,R].forEach(U=>{U.userData.isOffsetNode=!0,U.visible=!1,e.add(U)}),u=[y,_,S,R];const T=(U,G)=>{const j=fe.createLinkedBezierSegment(U,G);j.userData.isOffset=!0;const D=j.children.find(I=>I.userData.isCurve);return D&&D.material&&(D.material.color.setHex(16755200),D.material.opacity=.5),e.add(j),j},w=T(y,_),O=T(_,S),M=T(S,R),A=T(R,y);f=[w,O,M,A]}u[0].position.set(0,0,-l),u[1].position.set(l,0,0),u[2].position.set(0,0,l),u[3].position.set(-l,0,0);const d=(g,v,m)=>{const p=g.userData.helpers;p&&(p.cp1.position.copy(v),p.cp2.position.copy(m),fe.updateBezierSegmentGeometry(g))};f.length===4&&(d(f[0],new x(h,0,-l),new x(l,0,-h)),d(f[1],new x(l,0,h),new x(h,0,l)),d(f[2],new x(-h,0,l),new x(-l,0,h)),d(f[3],new x(-l,0,-h),new x(-h,0,-l)))}else c()}}class Yr{static create(e,t,n){const i=new st;i.name="BackgroundImage",i.userData.type="background_image",i.userData.baseSize={width:t,height:n};const r=new Un(t,n);r.rotateX(-Math.PI/2);const a=new zt({map:e,side:jt,transparent:!1,opacity:1,depthWrite:!0}),o=new Xe(r,a);o.userData.isMesh=!0,o.userData.generated=!0,i.add(o);const c=t/2,l=n/2,h=(v,m,p)=>{const y=fe.createSprite("#FFFF00",1.5);return y.position.set(v,0,m),y.userData.isControlPoint=!0,y.userData.pointType=p,y},u=h(-c,-l,"tl"),f=h(c,-l,"tr"),d=h(-c,l,"bl"),g=h(c,l,"br");return i.add(u,f,d,g),i.userData.handles={tl:u,tr:f,bl:d,br:g},fe.addAnchor(i),i}static update(e){if(e.userData.type!=="background_image")return;const t=e.children.find(u=>u.userData.isMesh);if(!t)return;const n=e.userData.handles;if(!n)return;const i=new ei;i.expandByPoint(n.tl.position),i.expandByPoint(n.tr.position),i.expandByPoint(n.bl.position),i.expandByPoint(n.br.position);const r=i.min,a=i.max,o=a.x-r.x,c=a.z-r.z,l=new x;i.getCenter(l),t.geometry.dispose();const h=new Un(o,c);h.rotateX(-Math.PI/2),h.translate(l.x,0,l.z),t.geometry=h}}class et{static createShape(e,t,n){let i=null;switch(e){case"line":i=_n.createLineFromPoints((n==null?void 0:n.start)||new x(0,0,0),(n==null?void 0:n.end)||new x(50,0,0));break;case"square":i=_n.createSquare((n==null?void 0:n.size)||50);break;case"circle":i=_n.createCircle((n==null?void 0:n.radius)||25);break;case"background_image":n!=null&&n.texture&&(i=Yr.create(n.texture,n.width,n.height));break}return i&&(i.userData.type=e,t&&i.position.copy(t),n!=null&&n.position&&i.position.set(n.position[0],n.position[1],n.position[2]),n!=null&&n.rotation&&i.rotation.set(n.rotation[0],n.rotation[1],n.rotation[2]),n!=null&&n.scale&&i.scale.set(n.scale[0],n.scale[1],n.scale[2]),e==="line"&&!i.userData.baseSize?i.userData.baseSize={width:50}:e==="square"&&!i.userData.baseSize?i.userData.baseSize={width:50,length:50}:e==="circle"&&!i.userData.baseSize&&(i.userData.baseSize={radius:25}),!i.userData.isMainAnchor&&e!=="background_image"&&fe.addAnchor(i),e!=="background_image"&&!i.userData.materialParams&&(i.userData.materialParams={color:"#cccccc",wireframe:!1,roughness:.5,metalness:.1,flatShading:!1,opacity:1})),i}static createBrush(e=5,t=60){const n=new st;n.name="Neuer Pinsel",n.userData.type="bezier_path";const i=new x(e,0,0),r=new x(0,-t,0),a=fe.createBezierPathNode(i),o=fe.createBezierPathNode(r);n.add(a,o);const c=fe.createLinkedBezierSegment(a,o);return c.userData.helpers.cp1.position.set(e*1.05,-t*.2,0),c.userData.helpers.cp2.position.set(e*.8,-t*.4,0),fe.updateBezierSegmentGeometry(c),n.add(c),n.traverse(l=>{(l.userData.isNode||l.userData.isControlPoint||l.userData.isHelperLine)&&(l.visible=!0)}),fe.addAnchor(n),n}static updateRectangle(e){_n.updateRectangle(e)}static describeObject(e){var n,i;if(!e.userData.type)return null;const t={type:e.userData.type,name:e.name,position:e.position.toArray(),rotation:e.rotation.toArray(),scale:e.scale.toArray(),userData:{...e.userData}};if(e.userData.baseSize&&(t.userData.baseSize={...e.userData.baseSize}),e.userData.type==="line"){const r=e.children.filter(a=>a.userData.isNode);r.length>=2&&(t.start=r[0].position.toArray(),t.end=r[1].position.toArray())}else if(e.userData.type==="background_image"){const r=e.children.find(a=>a.userData.isMesh);if(r&&r.material){const a=r.material;a.map&&a.map.image&&(t.imageData=fe.imageToDataURL(a.map.image),t.width=(n=e.userData.baseSize)==null?void 0:n.width,t.height=(i=e.userData.baseSize)==null?void 0:i.height)}}return t}static recreateShape(e){var a,o,c,l;const t=e.type,n=new x().fromArray(e.position),i={position:e.position,rotation:e.rotation,scale:e.scale,...e.userData};if(t==="line")e.start&&(i.start=new x().fromArray(e.start)),e.end&&(i.end=new x().fromArray(e.end));else if(t==="square")(o=(a=e.userData)==null?void 0:a.baseSize)!=null&&o.width&&(i.size=e.userData.baseSize.width);else if(t==="circle")(l=(c=e.userData)==null?void 0:c.baseSize)!=null&&l.radius&&(i.radius=e.userData.baseSize.radius);else if(t==="background_image"&&e.imageData){const h=new Image;h.src=e.imageData;const u=new Nt(h);h.onload=()=>{u.needsUpdate=!0},i.texture=u,i.width=e.width,i.height=e.height}const r=this.createShape(t,n,i);return r&&(e.name&&(r.name=e.name),e.userData&&(e.userData.baseSize&&(r.userData.baseSize={...e.userData.baseSize}),Object.assign(r.userData,e.userData)),t==="square"&&this.updateRectangle(r)),r}static createModulationPath(e=-20,t=35){const n=new st;n.name="Modulation_Path",n.userData.type="bezier_path",n.userData.isHelper=!0;const i=fe.createBezierPathNode(new x(0,15,e)),r=fe.createBezierPathNode(new x(0,15,t));n.add(i,r);const a=fe.createLinkedBezierSegment(i,r);a.userData.helpers.cp1.position.set(0,15,e+(t-e)*.33),a.userData.helpers.cp2.position.set(0,15,e+(t-e)*.66),fe.updateBezierSegmentGeometry(a);const o=a.children.find(c=>c.userData.isCurve);return o&&o.material.color.setHex(16711935),n.add(a),n}static createBackgroundImage(e,t,n){return Yr.create(e,t,n)}static updateBackgroundImage(e){Yr.update(e)}static createPath(e,t=!1){return fe.createPath(e,t)}static createLineFromPoints(e,t){return _n.createLineFromPoints(e,t)}static createBezierSegment(e,t,n,i){return fe.createBezierSegment(e,t,n,i)}static linearizeBezierSegment(e){fe.linearizeBezierSegment(e)}static updateBezierSegmentGeometry(e){fe.updateBezierSegmentGeometry(e)}static addAnchor(e){fe.addAnchor(e)}static createControlPoint(e,t){return fe.createControlPoint(e,t)}static createHelperLine(e,t){return fe.createHelperLine(e,t)}static createRectangle(e,t){return _n.createRectangle(e,t)}static createSquare(e=50){return _n.createSquare(e)}static createCircle(e=25){return _n.createCircle(e)}static updateCircleRadius(e,t){_n.updateCircleRadius(e,t)}}class yg{constructor(e,t,n){W(this,"eventBus");W(this,"objectManager");W(this,"container");W(this,"currentObject",null);W(this,"openSections",new Set(["Geometrie","Aktionen","Pinsel 1"]));W(this,"brushState",{type:"Rundpinsel",diameter:5,length:20,color:"#ff0000",grayscale:!1,grayValue:128,transparency:1,showMachineBrush:!1});this.eventBus=e,this.objectManager=t,this.container=document.createElement("div"),this.setupContainer(),this.initListeners()}setupContainer(){Object.assign(this.container.style,{position:"absolute",top:"40px",right:"0",width:"150px",height:"calc(100% - 70px)",background:"#222",color:"white",padding:"10px",borderLeft:"1px solid #444",fontFamily:"Arial, sans-serif",fontSize:"12px",zIndex:"1000",boxSizing:"border-box",overflowY:"auto"}),this.container.id="properties-panel",this.container.style.display="none",["mousedown","mouseup","mousemove","wheel","keydown","keyup"].forEach(e=>this.container.addEventListener(e,t=>t.stopPropagation())),document.body.appendChild(this.container)}initListeners(){this.eventBus.on("open-brush-properties",()=>{this.showBrushProperties()}),this.eventBus.on("brush-state-changed",e=>{Object.assign(this.brushState,e),this.container.dataset.objUuid==="brush-settings"&&this.showBrushProperties()}),this.eventBus.on("selection-changed",e=>{e.length===1?this.showProperties(e[0]):this.showEmpty()}),this.eventBus.on("object-added",()=>{this.currentObject?this.renderPanel(this.currentObject):this.showEmpty()}),this.eventBus.on("object-removed",()=>{this.currentObject?this.renderPanel(this.currentObject):this.showEmpty()}),this.eventBus.on("object-modified",e=>{this.currentObject&&this.currentObject.uuid===e.uuid&&this.refreshContent(e)}),this.eventBus.on("preview-object-updated",e=>{e?this.showProperties(e):this.currentObject&&this.currentObject===e&&this.showEmpty()})}showBrushProperties(){try{this.currentObject=null,this.container.style.display="block",this.eventBus.emit("properties-panel-visible"),this.container.innerHTML="",this.container.dataset.objUuid="brush-settings";const e=()=>{this.eventBus.emit("brush-state-changed",this.brushState)},t=document.createElement("div");t.style.cssText="display: flex; justify-content: space-between; align-items: center; margin-bottom: 10px;";const n=document.createElement("h3");n.innerText="Pinsel Einstellungen",n.style.cssText="margin: 0; font-size: 12px; font-weight: normal; color: #ccc;",t.appendChild(n),this.container.appendChild(t);const i=document.createElement("div");this.container.appendChild(i);const r=document.createElement("div");r.innerText="Geometrie",r.style.cssText="font-size: 11px; font-weight: bold; color: #888; margin-bottom: 8px; border-bottom: 1px solid #333; padding-bottom: 2px;",i.appendChild(r);const a=document.createElement("div");a.style.cssText="display: flex; align-items: center; justify-content: space-between; margin-bottom: 10px; font-size: 11px;";const o=document.createElement("span");o.innerText="Pinsel anzeigen",a.appendChild(o);const c=document.createElement("input");c.type="checkbox",c.checked=this.brushState.showMachineBrush,c.onchange=()=>{this.brushState.showMachineBrush=c.checked,e()},a.appendChild(c),i.appendChild(a);const l=document.createElement("div"),h=document.createElement("span");h.innerText="Profil",h.style.fontSize="11px";const u=document.createElement("select");u.style.cssText="width: 100%; margin: 2px 0 5px 0; background: #111; color: white; border: 1px solid #444;",l.appendChild(h),l.appendChild(u);const f=R=>{u.innerHTML="";const T=document.createElement("option");T.value="__default_round__",T.innerText="Standard Rundpinsel",u.appendChild(T),Object.keys(R).forEach(w=>{const O=document.createElement("option");O.value=w,O.innerText=w,u.appendChild(O)})};u.onchange=()=>{const R=u.value;if(R==="__default_round__"){this.eventBus.emit("load-brush-state",{type:"Rundpinsel",bezierProfile:null});return}this.eventBus.emit("request-brush-profiles",T=>{const w=T[R];w&&this.eventBus.emit("load-brush-state",{...this.brushState,...w})})},this.eventBus.on("brush-profiles-updated",f),this.eventBus.emit("request-brush-profiles",f),i.appendChild(l);const d=document.createElement("button");d.innerText="Aktuelles Profil speichern",d.style.cssText="width: 100%; padding: 5px; background: #007acc; color: white; border: none; border-radius: 3px; cursor: pointer; font-size: 10px; margin-bottom: 10px;",d.onclick=()=>{const R=prompt("Bitte geben Sie einen Namen für das aktuelle Pinselprofil ein:");R&&this.eventBus.emit("request-brush-state-sync",T=>{const w={...this.brushState,bezierProfile:T.bezierProfile};this.eventBus.emit("save-brush-profile-current-state",{name:R,profile:w}),alert(`Profil "${R}" wurde gespeichert.`)})},i.appendChild(d),new Bt(i,"Durchm.",this.brushState.diameter,.5,R=>{this.brushState.diameter=R,e()},.1,50),new Bt(i,"Länge",this.brushState.length,1,R=>{this.brushState.length=R,e()},1,200);const g=document.createElement("div");g.style.height="15px",i.appendChild(g);const v=document.createElement("div");v.innerText="Farbe",v.style.cssText="font-size: 11px; font-weight: bold; color: #888; margin-bottom: 8px; border-bottom: 1px solid #333; padding-bottom: 2px;",i.appendChild(v);const m=document.createElement("div");m.style.cssText="display: flex; align-items: center; justify-content: space-between; margin-bottom: 10px; font-size: 11px;";const p=document.createElement("span");p.innerText="Graustufen",m.appendChild(p);const y=document.createElement("input");y.type="checkbox",y.checked=this.brushState.grayscale,m.appendChild(y),i.appendChild(m);const _=document.createElement("div");i.appendChild(_),new Bt(i,"Deckkraft",this.brushState.transparency,.1,R=>{this.brushState.transparency=R,e()},0,1,2);const S=()=>{if(_.innerHTML="",this.brushState.grayscale)new Bt(_,"Grauwert",this.brushState.grayValue,1,R=>{this.brushState.grayValue=Math.round(R);const T=Math.round(this.brushState.grayValue).toString(16).padStart(2,"0");this.brushState.color=`#${T}${T}${T}`,e()},0,255,0);else{const R=document.createElement("div");R.style.cssText="display: flex; align-items: center; justify-content: space-between; font-size: 11px; margin-bottom: 5px;";const T=document.createElement("span");T.innerText="Pinsel-Farbe",R.appendChild(T);const w=document.createElement("input");w.type="color",w.value=this.brushState.color,w.style.cssText="background: none; border: none; width: 30px; height: 20px; cursor: pointer;",w.onchange=()=>{this.brushState.color=w.value,e()},R.appendChild(w),_.appendChild(R)}};S(),y.onchange=()=>{this.brushState.grayscale=y.checked,S(),e()}}catch(e){console.error("PropertiesPanel: Error in showBrushProperties",e)}}showEmpty(){this.currentObject=null,this.container.style.display="none",this.eventBus.emit("properties-panel-hidden")}showProperties(e){if(this.container.style.display="block",this.eventBus.emit("properties-panel-visible"),this.currentObject===e){this.refreshContent(e);return}this.currentObject=e,this.renderPanel(e)}refreshContent(e){this.renderPanel(e)}renderPanel(e){this.container.innerHTML="",this.container.dataset.objUuid=e.uuid;const t=document.createElement("div");t.style.cssText="display: flex; justify-content: space-between; align-items: center; margin-bottom: 5px;";const n=document.createElement("h3");n.innerText="Eigenschaften",n.style.cssText="margin: 0; font-size: 13px;",t.appendChild(n);const i=this.objectManager.getObjects(),r=i.filter(d=>d.visible).length,a=document.createElement("div");a.style.cssText="font-size: 10px; color: #888; margin-bottom: 10px; border-bottom: 1px solid #333; padding-bottom: 5px;",a.innerText=`Objekte: ${i.length} (${r} sichtbar)`,this.container.appendChild(t),this.container.appendChild(a);const o=document.createElement("div");o.style.cssText="display: flex; align-items: center; margin-bottom: 10px;";const c=document.createElement("div");c.innerText="Name:",c.style.cssText="width: 35px; margin-right: 2px; font-size: 11px; font-weight: bold;";const l=document.createElement("input");l.type="text",l.value=e.name,l.style.cssText="flex: 1; min-width: 0; background: #333; color: white; border: 1px solid #444; padding: 2px 5px; font-size: 11px;",l.onchange=()=>{e.name=l.value},o.appendChild(c),o.appendChild(l),this.container.appendChild(o);const h=this.createMaterialEditor(e);this.container.appendChild(this.createAccordionSection("Material",h));const u=document.createElement("div");if(this.renderGeometryControls(e,u),this.container.appendChild(this.createAccordionSection("Geometrie",u)),e.userData.type==="boolean_result"){const d=document.createElement("div"),g=document.createElement("div");g.style.cssText="color: #888; font-style: italic; font-size: 10px; padding: 5px;",g.innerText="Boolesches Objekt",d.appendChild(g);const v=document.createElement("div");v.id=`status-manifold-${e.uuid}`,v.style.cssText="padding: 5px; margin-top: 10px; background: #333; border-radius: 3px; font-size: 10px; border: 1px solid #444; border-left: 3px solid #888;";const m=e.userData.openEdgeCount||0;m===0?(v.style.borderLeftColor="#88ff88",v.innerHTML='<span style="color:#88ff88;">✔ Modell ist wasserdicht</span>'):(v.style.borderLeftColor="#ff4444",v.innerHTML=`<span style="color:#ff4444;">⚠ Warnung: ${m} Löcher gefunden!</span><br><span style="color:#aaa;">Modell ist nicht geschlossen.</span>`),d.appendChild(v),this.container.appendChild(this.createAccordionSection("Aktionen",d))}if(e.userData.type==="background_image"){const d=document.createElement("div");let g=4,v=1;new Bt(d,"Anzahl Schichten",g,1,p=>{g=Math.max(2,Math.floor(p))},2,16),new Bt(d,"Spalten",v,1,p=>{v=Math.max(1,Math.floor(p))},1,16);const m=document.createElement("button");m.innerText="Analyse starten",m.style.cssText="background:#007acc; border:1px solid #00aaff; color:white; cursor:pointer; padding: 5px; font-size: 11px; margin-top: 10px; width: 100%;",m.onclick=()=>{this.eventBus.emit("image-analysis-start",{layers:g,columns:v})},d.appendChild(m),this.container.appendChild(this.createAccordionSection("Bildanalyse",d))}}createAccordionSection(e,t){const n=document.createElement("div");n.style.cssText="margin-bottom: 5px; border: 1px solid #444; border-radius: 3px; overflow: hidden;";const i=document.createElement("div");i.style.cssText="background: #333; color: #ddd; padding: 5px 8px; font-size: 11px; font-weight: bold; cursor: pointer; display: flex; justify-content: space-between; align-items: center;";const r=document.createElement("span");r.innerText=e;const a=this.openSections.has(e),o=document.createElement("span");o.innerText=a?"▼":"▶",o.style.fontSize="10px",i.appendChild(r),i.appendChild(o);const c=document.createElement("div");return c.style.cssText=`padding: 5px; background: #222; display: ${a?"block":"none"};`,c.appendChild(t),i.onclick=()=>{c.style.display==="block"?(c.style.display="none",o.innerText="▶",this.openSections.delete(e)):(c.style.display="block",o.innerText="▼",this.openSections.add(e))},n.appendChild(i),n.appendChild(c),n}createMaterialEditor(e){const t=document.createElement("div");if(!e.userData.materialParams){let h="#cccccc";e.traverse(u=>{u instanceof Xe&&u.material.color&&(h="#"+u.material.color.getHexString())}),e.userData.materialParams={color:h,wireframe:!1,roughness:.5,metalness:.1,flatShading:!1,opacity:1}}const n=e.userData.materialParams,i=document.createElement("div");i.style.cssText="display: flex; align-items: center; justify-content: space-between; margin-bottom: 5px; font-size: 11px;";const r=document.createElement("span");r.innerText="Farbe";const a=document.createElement("input");a.type="color",a.value=n.color,a.style.cssText="border: none; width: 40px; height: 20px; cursor: pointer; background: none;",a.oninput=()=>{n.color=a.value,this.eventBus.emit("update-object-geometry",e)},i.appendChild(r),i.appendChild(a),t.appendChild(i);const o=document.createElement("div");o.style.cssText="display: flex; align-items: center; margin-bottom: 5px; font-size: 11px;";const c=document.createElement("input");c.type="checkbox",c.checked=!n.wireframe,c.onchange=()=>{n.wireframe=!c.checked,this.eventBus.emit("update-object-geometry",e)};const l=document.createElement("span");return l.innerText="Solid (Gefüllt)",l.style.marginLeft="5px",o.appendChild(c),o.appendChild(l),t.appendChild(o),n.opacity===void 0&&(n.opacity=1),new Bt(t,"Deckkraft",n.opacity,.1,h=>{n.opacity=Math.max(0,Math.min(1,h)),this.eventBus.emit("update-object-geometry",e)},0,1),this.eventBus.emit("update-object-geometry",e),t}renderGeometryControls(e,t){const n=e.userData.type;if(e instanceof Xe||e instanceof st&&e.children[0]instanceof Xe){const i=e instanceof Xe?e:e.children[0];if(i.geometry){const r=i.geometry.attributes.position.count,a=i.geometry.index?i.geometry.index.count/3:r/3,o=document.createElement("div");o.style.cssText="font-size: 10px; color: #888; margin-bottom: 10px; border-bottom: 1px solid #333; padding-bottom: 5px;",o.innerText=`Vertices: ${r} | Faces: ${a}`,t.appendChild(o)}}if(n==="square"||n==="bezier_path"&&e.userData.isClosed&&!e.name.includes("Circle")){if(e.userData.offset||(e.userData.offset={enabled:!1,x:5,z:5}),e.userData.baseSize){new Bt(t,"Breite",e.userData.baseSize.width||50,1,l=>{e.userData.baseSize.width=l,et.updateRectangle(e),this.eventBus.emit("update-object-geometry",e)}),new Bt(t,"Länge",e.userData.baseSize.length||50,1,l=>{e.userData.baseSize.length=l,et.updateRectangle(e),this.eventBus.emit("update-object-geometry",e)}),e.userData.borderRadius||(e.userData.borderRadius={enabled:!1,radius:10});const i=document.createElement("div");i.style.cssText="margin-top: 10px; border-top: 1px dashed #444; padding-top: 5px;";const r=document.createElement("div");r.innerText="Ecken / Radius",r.style.cssText="font-size: 11px; font-weight: bold; color: #aaa; margin-bottom: 5px;",i.appendChild(r);const a=document.createElement("div");a.style.cssText="display: flex; align-items: center; margin-bottom: 5px; font-size: 11px;";const o=document.createElement("input");o.type="checkbox",o.checked=e.userData.borderRadius.enabled,o.onchange=()=>{e.userData.borderRadius.enabled=o.checked,et.updateRectangle(e),this.eventBus.emit("update-object-geometry",e)};const c=document.createElement("span");c.innerText="Abgerundet",c.style.marginLeft="5px",a.appendChild(o),a.appendChild(c),i.appendChild(a),new Bt(i,"Radius",e.userData.borderRadius.radius,1,l=>{e.userData.borderRadius.radius=l,e.userData.borderRadius.enabled&&(et.updateRectangle(e),this.eventBus.emit("update-object-geometry",e))}),t.appendChild(i);{const l=document.createElement("div");l.style.cssText="margin-top: 10px; border-top: 1px dashed #444; padding-top: 5px;";const h=document.createElement("div");h.innerText="Offset Kontur",h.style.cssText="font-size: 11px; font-weight: bold; color: #aaa; margin-bottom: 5px;",l.appendChild(h);const u=document.createElement("div");u.style.cssText="display: flex; align-items: center; margin-bottom: 5px; font-size: 11px;";const f=document.createElement("input");f.type="checkbox",f.checked=e.userData.offset.enabled,f.onchange=()=>{e.userData.offset.enabled=f.checked,et.updateRectangle(e),this.eventBus.emit("update-object-geometry",e)};const d=document.createElement("span");d.innerText="Aktivieren",d.style.marginLeft="5px",u.appendChild(f),u.appendChild(d),l.appendChild(u),new Bt(l,"Abstand X",e.userData.offset.x,1,g=>{e.userData.offset.x=g,e.userData.offset.enabled&&(et.updateRectangle(e),this.eventBus.emit("update-object-geometry",e))}),new Bt(l,"Abstand Z",e.userData.offset.z,1,g=>{e.userData.offset.z=g,e.userData.offset.enabled&&(et.updateRectangle(e),this.eventBus.emit("update-object-geometry",e))}),t.appendChild(l)}}}else if((n==="circle"||n==="bezier_path"&&e.name.includes("Circle"))&&(e.userData.offset||(e.userData.offset={enabled:!1,radius:5}),e.userData.baseSize)){new Bt(t,"Radius",e.userData.baseSize.radius||25,1,l=>{e.userData.baseSize.radius=l,this.updateCircle(e)});const i=document.createElement("div");i.style.cssText="margin-top: 10px; border-top: 1px dashed #444; padding-top: 5px;";const r=document.createElement("div");r.innerText="Offset Kontur",r.style.cssText="font-size: 11px; font-weight: bold; color: #aaa; margin-bottom: 5px;",i.appendChild(r);const a=document.createElement("div");a.style.cssText="display: flex; align-items: center; margin-bottom: 5px; font-size: 11px;";const o=document.createElement("input");o.type="checkbox",o.checked=e.userData.offset.enabled,o.onchange=()=>{e.userData.offset.enabled=o.checked,this.updateCircle(e)};const c=document.createElement("span");c.innerText="Aktivieren",c.style.marginLeft="5px",a.appendChild(o),a.appendChild(c),i.appendChild(a),new Bt(i,"Abstand",e.userData.offset.radius,1,l=>{e.userData.offset.radius=l,e.userData.offset.enabled&&this.updateCircle(e)}),t.appendChild(i)}}updateCircle(e){const t=e.userData.baseSize.radius;et.updateCircleRadius(e,t)}}class Sg{constructor(e,t,n,i){W(this,"eventBus");W(this,"viewManager");W(this,"toolbar");this.eventBus=e,this.viewManager=n,this.toolbar=new xg(e),new yg(e,t,i),this.initUIListeners(),this.initKeyboardShortcuts()}initUIListeners(){this.eventBus.on("ui-focus-clicked",()=>{const e=window.app.objectManager.getSelectedObjects();e.length===1&&this.viewManager.focusOnObject(e[0])}),this.eventBus.on("toggle-debug-console",()=>{this.toolbar.debugConsole.toggle()})}initKeyboardShortcuts(){window.addEventListener("keydown",e=>{if(e.key==="F12"){e.preventDefault(),this.toolbar.debugConsole.toggle();return}const t=e.target;if(t.tagName==="INPUT"||t.tagName==="TEXTAREA")return;const n=e.key.toLowerCase();switch(n){case"p":this.viewManager.setActiveView(ct.PERSPECTIVE);return;case"t":this.viewManager.setActiveView(ct.TOP);return;case"f":this.viewManager.setActiveView(ct.FRONT);return;case"l":this.viewManager.setActiveView(ct.LEFT);return}switch(n){case"v":this.eventBus.emit("tool-selected","select");break;case"s":this.eventBus.emit("tool-selected","square");break;case"c":this.eventBus.emit("tool-selected","circle");break;case"escape":this.eventBus.emit("tool-selected","select");break;case"d":window.debugScene();break}})}}const Mg=`
  varying vec3 worldPosition;
  void main() {
    worldPosition = position; // Use object-local position
    gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
  }
`,bg=`
  varying vec3 worldPosition;
  uniform float size1;
  uniform float size2;
  uniform vec3 color1;
  uniform vec3 color2;
  uniform int axis; // 0 for XZ-plane (Top), 1 for XY-plane (Front), 2 for YZ-plane (Left)

  float getGrid(float size) {
    vec2 coord;
    if (axis == 0) { // TOP
        coord = worldPosition.xz;
    } else if (axis == 1) { // FRONT
        coord = worldPosition.xy;
    } else { // LEFT
        coord = worldPosition.yz;
    }
    
    vec2 grid = abs(fract(coord / size - 0.5) - 0.5) / fwidth(coord / size);
    float line = min(grid.x, grid.y);
    
    return 1.0 - min(line, 1.0);
  }

  void main() {
    float grid1 = getGrid(size1); // Finer grid
    float grid2 = getGrid(size2); // Coarser grid

    vec3 finalColor = mix(color2, color1, grid2); // coarse lines are color1
    float finalGrid = max(grid1, grid2);

    gl_FragColor = vec4(finalColor, finalGrid);
    
    #include <tonemapping_fragment>
    #include <colorspace_fragment>
  }
`,bi=16e3;function Zr(s,e,t){return new Fn({vertexShader:Mg,fragmentShader:bg,transparent:!0,side:jt,depthWrite:!1,depthTest:!1,uniforms:{size1:{value:e},size2:{value:t},color1:{value:new Ue(11184810)},color2:{value:new Ue(6710886)},axis:{value:s}}})}class Eg{constructor(e,t,n){W(this,"eventBus");W(this,"viewManager");W(this,"scene");W(this,"gridTop",null);W(this,"gridFront",null);W(this,"gridLeft",null);W(this,"stepSize",10);W(this,"majorStep",100);this.eventBus=e,this.viewManager=t,this.scene=n,this.createGrids(),this.initListeners()}createGrids(){this.clearGrids();const e=new Un(bi,bi,1,1).rotateX(Math.PI/2),t=Zr(0,this.stepSize,this.majorStep);this.gridTop=new Xe(e,t),this.gridTop.position.y=-.05,this.gridTop.renderOrder=-100,this.scene.add(this.gridTop);const n=new Un(bi,bi,1,1),i=Zr(1,this.stepSize,this.majorStep);this.gridFront=new Xe(n,i),this.gridFront.position.z=-.05,this.gridFront.renderOrder=-100,this.scene.add(this.gridFront);const r=new Un(bi,bi,1,1).rotateY(-Math.PI/2),a=Zr(2,this.stepSize,this.majorStep);this.gridLeft=new Xe(r,a),this.gridLeft.position.x=-.05,this.gridLeft.renderOrder=-100,this.scene.add(this.gridLeft),this.updateGridVisibility()}clearGrids(){this.gridTop&&(this.scene.remove(this.gridTop),this.gridTop.geometry.dispose(),this.gridTop.material.dispose()),this.gridFront&&(this.scene.remove(this.gridFront),this.gridFront.geometry.dispose(),this.gridFront.material.dispose()),this.gridLeft&&(this.scene.remove(this.gridLeft),this.gridLeft.geometry.dispose(),this.gridLeft.material.dispose())}initListeners(){this.eventBus.on("camera-view-changed",this.updateGridVisibility.bind(this)),this.eventBus.on("settings-grid-changed",e=>{this.stepSize=e.step,this.majorStep=e.step*10,this.createGrids()}),this.eventBus.on("settings-grid-color-changed",e=>{const t=new Ue(e.color);this.gridTop&&(this.gridTop.material.uniforms.color2.value=t),this.gridFront&&(this.gridFront.material.uniforms.color2.value=t),this.gridLeft&&(this.gridLeft.material.uniforms.color2.value=t)})}updateGridVisibility(){if(!this.gridTop||!this.gridFront||!this.gridLeft)return;const e=this.viewManager.getActiveView?this.viewManager.getActiveView():ct.PERSPECTIVE;this.gridTop.visible=e===ct.TOP||e===ct.PERSPECTIVE,this.gridFront.visible=e===ct.FRONT,this.gridLeft.visible=e===ct.LEFT}}class wg{constructor(e,t){W(this,"eventBus");W(this,"viewManager");W(this,"topRulerCanvas");W(this,"leftRulerCanvas");W(this,"topCtx");W(this,"leftCtx");W(this,"rulerThickness",20);W(this,"toolbarWidth",35);W(this,"headerHeight",40);W(this,"propertiesWidth",0);W(this,"footerHeight",30);this.eventBus=e,this.viewManager=t,this.topRulerCanvas=document.createElement("canvas"),this.leftRulerCanvas=document.createElement("canvas"),this.topCtx=this.topRulerCanvas.getContext("2d"),this.leftCtx=this.leftRulerCanvas.getContext("2d"),this.setupRulers(),this.initListeners(),setTimeout(()=>this.updateRulers(),100)}setupRulers(){const e=document.getElementById("app");if(!e)return;const t=(i,r)=>{i.style.position="absolute",i.style.backgroundColor="#222",i.style.zIndex="100",i.style.pointerEvents="none",r?(i.style.top=this.headerHeight+"px",i.style.left=this.toolbarWidth+this.rulerThickness+"px",i.style.height=this.rulerThickness+"px",i.style.right=this.propertiesWidth+"px"):(i.style.top=this.headerHeight+this.rulerThickness+"px",i.style.left=this.toolbarWidth+"px",i.style.width=this.rulerThickness+"px",i.style.bottom=this.footerHeight+"px"),e.appendChild(i)};t(this.topRulerCanvas,!0),t(this.leftRulerCanvas,!1);const n=document.createElement("div");Object.assign(n.style,{position:"absolute",top:this.headerHeight+"px",left:this.toolbarWidth+"px",width:this.rulerThickness+"px",height:this.rulerThickness+"px",background:"#333",zIndex:"101",borderRight:"1px solid #555",borderBottom:"1px solid #555",color:"#aaa",fontSize:"9px",display:"flex",alignItems:"center",justifyContent:"center"}),n.innerText="mm",e.appendChild(n)}initListeners(){this.eventBus.on("camera-change",()=>requestAnimationFrame(()=>this.updateRulers())),this.eventBus.on("properties-panel-visible",()=>{this.propertiesWidth=150,this.topRulerCanvas.style.right=this.propertiesWidth+"px",requestAnimationFrame(()=>this.updateRulers())}),this.eventBus.on("properties-panel-hidden",()=>{this.propertiesWidth=0,this.topRulerCanvas.style.right=this.propertiesWidth+"px",requestAnimationFrame(()=>this.updateRulers())})}getScreenPos(e,t,n){const i=e.clone();i.project(t);const r=(i.x*.5+.5)*n.width,a=(-(i.y*.5)+.5)*n.height;return new $(r+n.left,a+n.top)}updateRulers(){const e=this.viewManager.getActiveView?this.viewManager.getActiveView():ct.PERSPECTIVE;this.topRulerCanvas.style.display="block",this.leftRulerCanvas.style.display="block";const t=this.viewManager.getActiveCamera();if(!t)return;const n=document.getElementById("app");if(!n)return;t.updateMatrixWorld();const i=this.toolbarWidth+this.rulerThickness,r=n.clientWidth-i-this.propertiesWidth;this.topRulerCanvas.width=r,this.topRulerCanvas.height=this.rulerThickness;const a=this.headerHeight+this.rulerThickness,o=n.clientHeight-a-this.footerHeight;this.leftRulerCanvas.width=this.rulerThickness,this.leftRulerCanvas.height=o;const l=this.viewManager.getCanvas().getBoundingClientRect(),h=this.topRulerCanvas.getBoundingClientRect(),u=this.leftRulerCanvas.getBoundingClientRect(),f=this.getScreenPos(new x(0,0,0),t,l);let d=new x(100,0,0);e===ct.TOP||e===ct.PERSPECTIVE||e===ct.FRONT?d.set(100,0,0):e===ct.LEFT&&d.set(0,0,100);const g=this.getScreenPos(d,t,l),v=Math.abs(g.x-f.x)/100,m=f.x-h.left;this.drawRulerAnchor(this.topCtx,!0,m,v);let p=new x(0,0,0);e===ct.TOP||e===ct.PERSPECTIVE?p.set(0,0,100):p.set(0,100,0);const y=this.getScreenPos(p,t,l),_=Math.abs(y.y-f.y)/100,S=y.y<f.y,R=f.y-u.top;this.drawRulerAnchor(this.leftCtx,!1,R,_,S)}drawRulerAnchor(e,t,n,i,r=!1){const a=e.canvas.width,o=e.canvas.height;e.clearRect(0,0,a,o),e.fillStyle="#222",e.fillRect(0,0,a,o),e.strokeStyle="#666",e.fillStyle="#aaa",e.font="10px sans-serif",e.lineWidth=1,e.beginPath(),t?(e.moveTo(0,o-.5),e.lineTo(a,o-.5)):(e.moveTo(a-.5,0),e.lineTo(a-.5,o)),e.stroke();let c=1;for(;c*i<50;)c.toString().startsWith("1")?c*=2:c.toString().startsWith("2")?c*=2.5:c*=2;const l=v=>r?(n-v)/i:(v-n)/i,h=l(0),u=l(t?a:o),f=Math.min(h,u),d=Math.max(h,u),g=Math.ceil(f/c)*c;for(let v=g;v<=d;v+=c){let m=0;if(r?m=n-v*i:m=n+v*i,m=Math.floor(m)+.5,e.beginPath(),Math.abs(v)<1e-4?(e.strokeStyle="#ff4444",e.lineWidth=2):(e.strokeStyle="#666",e.lineWidth=1),t){if(m>=-5&&m<=a+5){e.moveTo(m,o),e.lineTo(m,o-5),e.stroke();const p=Math.round(v*100)/100;e.fillStyle=Math.abs(v)<1e-4?"#ff4444":"#aaa",e.fillText(p.toString(),m+2,o-8)}}else if(m>=-5&&m<=o+5){e.moveTo(a,m),e.lineTo(a-5,m),e.stroke();const p=Math.round(v*100)/100;e.save(),e.translate(a-8,m+2),e.rotate(-Math.PI/2),e.fillStyle=Math.abs(v)<1e-4?"#ff4444":"#aaa",e.fillText(p.toString(),0,0),e.restore()}}}}class Tg extends gt{constructor(e=1){super(),this.initAxes(e)}initAxes(e){const t=new x(0,0,0),n=new x(1,0,0),i=new jr(n,t,e,16711680,.2*e,.1*e);this.makeOnTop(i),this.add(i),this.addLabel(e+.1*e,0,0,"X","red");const r=new x(0,1,0),a=new jr(r,t,e,65280,.2*e,.1*e);this.makeOnTop(a),this.add(a),this.addLabel(0,e+.1*e,0,"Y","green");const o=new x(0,0,1),c=new jr(o,t,e,6711039,.2*e,.1*e);this.makeOnTop(c),this.add(c),this.addLabel(0,0,e+.1*e,"Z","#6666ff")}makeOnTop(e){if(e.line){e.line.renderOrder=999;const t=e.line.material;e.line.material=new ln({color:t.color,depthTest:!1,depthWrite:!1,transparent:!0,opacity:1,toneMapped:!1}),t.dispose()}if(e.cone){e.cone.renderOrder=999;const t=e.cone.material;e.cone.material=new zt({color:t.color,depthTest:!1,depthWrite:!1,transparent:!0,opacity:1,toneMapped:!1}),t.dispose()}}addLabel(e,t,n,i,r){const a=document.createElement("canvas");a.width=64,a.height=64;const o=a.getContext("2d");o&&(o.font="Bold 48px Arial",o.textAlign="center",o.textBaseline="middle",o.fillStyle=r,o.fillText(i,32,32));const c=new er(a),l=new tn({map:c,depthTest:!1,depthWrite:!1}),h=new Ki(l);h.position.set(e,t,n),h.scale.set(.5,.5,1),this.add(h)}update(e){let t=1;e instanceof Tt?t=this.position.distanceTo(e.position)*.04:e instanceof Pt&&(t=1/e.zoom*50),t=Math.max(.1,t),this.scale.set(t,t,t)}}class Ag{constructor(e,t){W(this,"eventBus");W(this,"viewManager");W(this,"raycaster");W(this,"pointer");this.eventBus=e,this.viewManager=t,this.raycaster=new Ea,this.pointer=new $,this.initListeners()}initListeners(){this.viewManager.getCanvas().addEventListener("pointerdown",t=>this.onPointerDown(t)),window.addEventListener("pointermove",t=>this.onPointerMove(t)),window.addEventListener("pointerup",t=>this.onPointerUp(t))}updatePointer(e){const n=this.viewManager.getCanvas().getBoundingClientRect();this.pointer.x=(e.clientX-n.left)/n.width*2-1,this.pointer.y=-((e.clientY-n.top)/n.height)*2+1;const i=this.viewManager.getActiveCamera();i&&this.raycaster.setFromCamera(this.pointer,i)}getIntersection(){const e=new x,t=this.viewManager.getActiveCamera();if(!t)return null;const n=new x;t.getWorldDirection(n);let i=new x;Math.abs(n.z)>.9?i.set(0,0,1):Math.abs(n.x)>.9?i.set(1,0,0):(Math.abs(n.y)>.9,i.set(0,1,0));const r=new sn(i,0);return Math.abs(this.raycaster.ray.direction.dot(i))<1e-4?null:this.raycaster.ray.intersectPlane(r,e)}onPointerDown(e){this.updatePointer(e);const t={originalEvent:e,pointer:this.pointer.clone(),intersection:this.getIntersection(),type:"down"};this.eventBus.emit("interaction-pointer-down",t)}onPointerMove(e){this.updatePointer(e);const t={originalEvent:e,pointer:this.pointer.clone(),intersection:this.getIntersection(),type:"move"};this.eventBus.emit("interaction-pointer-move",t)}onPointerUp(e){this.updatePointer(e);const t={originalEvent:e,pointer:this.pointer.clone(),intersection:this.getIntersection(),type:"up"};this.eventBus.emit("interaction-pointer-up",t)}}class Cg{constructor(e){W(this,"tools",new Map);W(this,"activeTool",null);W(this,"eventBus");this.eventBus=e,this.initListeners()}registerTool(e){this.tools.set(e.id,e)}selectTool(e){this.activeTool&&this.activeTool.deactivate(),e&&this.tools.has(e)?(this.activeTool=this.tools.get(e),this.activeTool.activate(),console.log(`Tool activated: ${e}`)):this.activeTool=null,this.eventBus.emit("tool-active-changed",e)}getActiveToolId(){return this.activeTool?this.activeTool.id:null}initListeners(){this.eventBus.on("interaction-pointer-down",e=>{this.activeTool&&this.activeTool.onPointerDown(e)}),this.eventBus.on("interaction-pointer-move",e=>{this.activeTool&&this.activeTool.onPointerMove(e)}),this.eventBus.on("interaction-pointer-up",e=>{this.activeTool&&this.activeTool.onPointerUp(e)}),this.eventBus.on("tool-selected",e=>{this.selectTool(e)})}}class nr{constructor(e,t){W(this,"eventBus");W(this,"objectManager");W(this,"gridStep",10);W(this,"isSnapEnabled",!1);this.eventBus=e,this.objectManager=t,this.eventBus.on("toggle-snap",n=>{this.isSnapEnabled=n}),this.eventBus.on("settings-grid-changed",n=>{this.gridStep=n.step})}applySnap(e){const t=this.isSnapEnabled?Math.max(.1,this.gridStep):0;t>0&&(e.x=Math.round(e.x/t)*t,e.z=Math.round(e.z/t)*t,e.y=Math.round(e.y/t)*t)}getNextName(e){return`${e} ${Date.now()}`}setCameraLock(e){this.eventBus.emit("camera-controls-lock",e)}}class Rg extends nr{constructor(t,n,i){super(t,i);W(this,"id","line");W(this,"points",[]);W(this,"draftGroup",null);W(this,"draftMovingNode",null);W(this,"lastFixedNode",null)}activate(){this.resetState()}deactivate(){this.finishPath(),this.setCameraLock(!1)}onPointerDown(t){if(t.originalEvent.button!==0){this.finishPath();return}if(!t.intersection)return;const n=t.intersection.clone();this.applySnap(n),this.points.push(n),this.updateDraft(n),this.points.length===1&&this.setCameraLock(!0)}onPointerMove(t){if(this.points.length===0||!t.intersection)return;const n=t.intersection.clone();if(this.applySnap(n),this.draftMovingNode&&this.draftGroup){this.draftMovingNode.position.copy(n);const i=this.draftGroup.children[this.draftGroup.children.length-1];i&&i.userData.type==="bezier_line"&&et.updateBezierSegmentGeometry(i)}}onPointerUp(t){}updateDraft(t){if(this.draftGroup)this.draftMovingNode&&(this.draftMovingNode.position.copy(t),this.lastFixedNode=this.draftMovingNode,this.draftMovingNode=null);else{this.draftGroup=new st,this.draftGroup.userData.type="draft_path",this.objectManager.addObject(this.draftGroup);const n=fe.createBezierPathNode(t);this.draftGroup.add(n),this.lastFixedNode=n}if(this.draftMovingNode=fe.createBezierPathNode(t.clone()),this.draftGroup.add(this.draftMovingNode),this.lastFixedNode){const n=fe.createLinkedBezierSegment(this.lastFixedNode,this.draftMovingNode);this.draftGroup.add(n)}}finishPath(){if(this.draftGroup&&(this.objectManager.removeObject(this.draftGroup),this.draftGroup=null,this.draftMovingNode=null),this.points.length>=2){const t=et.createPath(this.points,!1);if(t){t.userData.type="line",this.objectManager.addObject(t),this.setCameraLock(!1),this.resetState(),this.eventBus.emit("tool-selected","select"),setTimeout(()=>{this.objectManager.selectObject(t),this.eventBus.emit("selection-changed",[t])},50);return}}this.setCameraLock(!1),this.resetState()}resetState(){this.points=[],this.draftGroup=null,this.draftMovingNode=null,this.lastFixedNode=null}}class yc{static createTranslateGizmo(){const e=new st;e.userData.isGizmo=!0,e.userData.mode="translate";const t=.4,n=5,i=20,r=2,a=6,o=6,c=(u,f,d)=>{const g=new st,v=new Ui(t,t,i,8);v.translate(0,i/2,0);const m=new Ma(r,a,16);m.translate(0,i+a/2,0);const p=o,y=i+a,_=y-p,S=new Ui(n,n,_,8);S.translate(0,p+_/2,0);const R=new Xe(S,new zt({visible:!1}));R.userData={axis:u,mode:"translate"};const T=this.makeMat(f),w=new Xe(v,T),O=new Xe(m,T);w.userData={axis:u,mode:"translate"},O.userData={axis:u,mode:"translate"},w.renderOrder=100,O.renderOrder=100,g.add(w),g.add(O),g.add(R);const M=this.createLabel(d,"#"+new Ue(f).getHexString());return M.position.set(0,y+4,0),M.userData={axis:u,mode:"translate"},M.renderOrder=100,g.add(M),u==="x"&&g.rotateZ(-Math.PI/2),u==="z"&&g.rotateX(Math.PI/2),g};e.add(c("x",16729156,"X")),e.add(c("y",4521796,"Y")),e.add(c("z",6711039,"Z"));const l=new cl;l.moveTo(0,0),l.lineTo(o,0),l.lineTo(0,o),l.lineTo(0,0);const h=(u,f,d)=>{const g=new st,v=new ba(l);d!=null&&d.x&&v.rotateX(d.x),d!=null&&d.y&&v.rotateY(d.y);const m=this.makeMat(f,.2,jt),p=new Xe(v,m);p.renderOrder=99,p.userData={axis:u,mode:"translate"};const y=[new $(o,0),new $(0,o)],_=new lt().setFromPoints(y);d!=null&&d.x&&_.rotateX(d.x),d!=null&&d.y&&_.rotateY(d.y);const S=new ln({color:f,depthTest:!1,transparent:!0,opacity:.4}),R=new Pi(_,S);return R.renderOrder=99,R.userData={axis:u,noPick:!0},g.add(p),g.add(R),g};return e.add(h("xz",16776960,{x:Math.PI/2})),e.add(h("xy",16776960)),e.add(h("zy",16776960,{y:Math.PI/2})),e}static createRotateGizmo(){const e=new st;e.userData.isGizmo=!0,e.userData.mode="rotate";const t=30,n=.5,i=4,r=(a,o)=>{const c=new st,l=new js(t,n,8,64),h=this.makeMat(o),u=new Xe(l,h);u.renderOrder=100,u.userData={axis:a,mode:"rotate"};const f=new js(t,i,8,32),d=new zt({visible:!1}),g=new Xe(f,d);return g.userData={axis:a,mode:"rotate"},c.add(u),c.add(g),a==="x"&&c.rotateY(Math.PI/2),a==="y"&&c.rotateX(Math.PI/2),c};return e.add(r("x",16729156)),e.add(r("y",4521796)),e.add(r("z",6711039)),e}static makeMat(e,t=1,n){return new zt({color:e,depthTest:!1,depthWrite:!1,transparent:!0,opacity:t,side:n})}static createLabel(e,t){const n=document.createElement("canvas");n.width=64,n.height=64;const i=n.getContext("2d");i.fillStyle="white",i.font="Bold 48px Arial",i.textAlign="center",i.textBaseline="middle",i.fillText(e,32,32);const r=new er(n),a=new tn({map:r,transparent:!0,color:new Ue(t)}),o=new Ki(a);return o.scale.set(6,6,1),o}}class wa{static updateScales(e,t){e.traverse(r=>{const a=r.userData.isGizmo,o=r.userData.isAnchor,c=r.userData.isControlPoint;if(a||o||c){let l=1;if(t instanceof Tt){const h=new x;r.getWorldPosition(h),l=h.distanceTo(t.position)*.015}else t instanceof Pt&&(l=1/t.zoom*15);if(l=Math.max(.001,l),a?l*=.15:r.userData.isMainAnchor?l*=1:c?l*=.7:l*=.8,r.parent){const h=new x;r.parent.getWorldScale(h),h.x!==0&&h.y!==0&&h.z!==0?r.scale.set(l/h.x,l/h.y,l/h.z):r.scale.set(l,l,l)}else r.scale.set(l,l,l)}})}}class Pg extends nr{constructor(t,n,i,r){super(t,i);W(this,"id","select");W(this,"viewManager");W(this,"raycaster",new Ea);W(this,"machineBrush");W(this,"activeGizmoMode","translate");W(this,"translateGizmo");W(this,"rotateGizmo");W(this,"selectedObject",null);W(this,"selectedSubObject",null);W(this,"isDragging",!1);W(this,"dragMode","none");W(this,"dragAxis",null);W(this,"dragStartPoint",new x);W(this,"objectStartPos",new x);W(this,"subObjectStartPos",new x);W(this,"dragPlane",new sn);W(this,"dragOffset",new x);W(this,"lastPointer",new $);W(this,"activeAnchor",null);W(this,"hoveredSubObject",null);W(this,"hoveredOriginalColor",null);W(this,"activeSubObjectOriginalColor",null);this.viewManager=n,this.machineBrush=r,window.debugScene=()=>{console.log("--- SCENE DEBUG ---"),this.objectManager.getObjects().forEach(c=>{const l=new x;c.getWorldPosition(l),console.log(`Object: ${c.name} [${c.uuid}]`),console.log(`  Type: ${c.userData.type}, Visible: ${c.visible}`),console.log(`  WorldPos: x=${l.x.toFixed(2)}, y=${l.y.toFixed(2)}, z=${l.z.toFixed(2)}`),console.log(`  LocalScale: x=${c.scale.x.toFixed(2)}, y=${c.scale.y.toFixed(2)}, z=${c.scale.z.toFixed(2)}`),c.children.forEach(h=>{if(h.userData.isAnchor){const u=new x;if(h.getWorldPosition(u),console.log(`    Anchor [${h.uuid}]: x=${u.x.toFixed(2)}, y=${u.y.toFixed(2)}, z=${u.z.toFixed(2)}`),h instanceof Ki||h instanceof Xe){const f=h.material;console.log(`      Color: #${f.color.getHexString()}`)}}})}),console.log("Selection:",this.objectManager.getSelectedObjects().map(c=>c.name))},this.raycaster.params.Line.threshold=3,this.translateGizmo=yc.createTranslateGizmo(),this.rotateGizmo=yc.createRotateGizmo(),this.translateGizmo.visible=!1,this.rotateGizmo.visible=!1;const a=this.viewManager.getScene();a.add(this.translateGizmo),a.add(this.rotateGizmo),this.eventBus.on("selection-changed",o=>{o.length===1?this.selectedObject=o[0]:this.selectedObject=null,this.updateGizmo()}),window.addEventListener("keydown",o=>{const c=o.target;c.tagName==="INPUT"||c.tagName==="TEXTAREA"||this.selectedObject&&(o.key.toLowerCase()==="t"?(this.activeGizmoMode="translate",this.updateGizmo()):o.key.toLowerCase()==="r"&&(this.activeGizmoMode="rotate",this.updateGizmo()))})}activate(){this.updateGizmo()}deactivate(){this.translateGizmo.visible=!1,this.rotateGizmo.visible=!1,this.selectedObject=null}updateGizmo(){if(this.translateGizmo.visible=!1,this.rotateGizmo.visible=!1,this.viewManager.getScene().traverse(n=>{(n.userData.isAnchor||n.userData.isControlPoint||n.userData.isHelperLine||n.userData.isNode)&&(n.userData.isMainAnchor||(n.visible=!1))}),this.selectedObject){const n=this.activeGizmoMode==="translate"?this.translateGizmo:this.rotateGizmo;n.visible=!0,n.position.copy(this.selectedObject.position),n.quaternion.copy(this.selectedObject.quaternion),this.activeGizmoMode==="translate"&&n.rotation.set(0,0,0);let i=0,r=0;this.selectedObject.traverse(o=>{(o.userData.isMainAnchor||o.userData.isControlPoint||o.userData.isNode||o.userData.isHelperLine)&&(o.visible=!0,o.userData.isNode&&i++,o.userData.isControlPoint&&r++)}),console.log(`SelectTool: Updated visibility for object "${this.selectedObject.name}". Found ${i} nodes and ${r} control points.`);const a=this.viewManager.getActiveCamera();a&&wa.updateScales(this.viewManager.getScene(),a)}}updateRaycasterThresholds(){const t=this.viewManager.getActiveCamera();if(t instanceof Pt){const n=t.zoom;this.raycaster.params.Line.threshold=5/n,this.raycaster.params.Points.threshold=5/n}else this.raycaster.params.Line.threshold=.5,this.raycaster.params.Points.threshold=2}constrainToViewPlane(t,n){const i=this.viewManager.getActiveCamera();if(i instanceof Pt){const r=new x;i.getWorldDirection(r),Math.abs(r.z)>Math.abs(r.x)&&Math.abs(r.z)>Math.abs(r.y)?t.z=n.z:Math.abs(r.x)>Math.abs(r.z)&&Math.abs(r.x)>Math.abs(r.y)?t.x=n.x:t.y=n.y}}onPointerDown(t){if(t.originalEvent.button!==0)return;this.lastPointer.copy(t.pointer),this.updateRaycasterThresholds();const n=this.objectManager.getObjects(),i=this.viewManager.getActiveCamera();if(!i)return;if(this.raycaster.setFromCamera(t.pointer,i),this.raycaster.intersectObject(this.machineBrush.group,!0).length>0){this.eventBus.emit("open-brush-properties",null);return}let a,o=1/0;const c=1e-4,l=new x(t.pointer.x,t.pointer.y,.5);if(n.forEach(f=>{f.visible&&f.traverse(d=>{if((d.userData.isAnchor||d.userData.isControlPoint||d.userData.isNode)&&d.visible){const g=new x;if(d.getWorldPosition(g),g.project(i),g.z>-1&&g.z<1){const v=(g.x-l.x)**2+(g.y-l.y)**2;if(v<c&&v<o){o=v;const m=new x;d.getWorldPosition(m),new x(t.pointer.x,t.pointer.y,0).unproject(i),a={object:d,point:m}}}}})}),a){const f=new x;a.object.getWorldPosition(f)}if(a){const f=a.object;if(f.userData.isAnchor||f.userData.isControlPoint||f.userData.isNode){if(f.userData.isMainAnchor){let d=f.parent;for(;d&&d.parent&&d.parent.type!=="Scene";)d=d.parent;d&&(this.objectManager.selectObject(d),this.startObjectDrag(d),this.activeAnchor=f,this.activeAnchor.material instanceof tn&&this.activeAnchor.material.color.setHex(16776960))}else{this.startSubObjectDrag(f,a.point);let d=f.parent;for(;d&&d.parent&&d.parent.type!=="Scene";)d=d.parent;d&&d!==this.selectedObject&&this.objectManager.selectObject(d)}return}}const h=this.activeGizmoMode==="translate"?this.translateGizmo:this.rotateGizmo;if(h.visible){const f=this.raycastObject(t,h);if(f&&f.object.userData.axis){this.startGizmoDrag(f.object.userData.axis,f.point);return}}const u=this.raycaster.intersectObjects(n,!0);if(u.length>0){let d=u[0].object;for(;d.parent&&d.parent.type!=="Scene";)d=d.parent;this.objectManager.selectObject(d),this.startObjectDrag(d);const g=d.children.find(v=>v.userData.isMainAnchor);g&&(this.activeAnchor=g,this.activeAnchor.material instanceof tn&&this.activeAnchor.material.color.setHex(16776960))}else this.objectManager.deselectAll()}onPointerMove(t){this.updateRaycasterThresholds(),this.isDragging?this.dragMode==="gizmo"?this.handleGizmoDrag(t):this.dragMode==="sub-object"?this.handleSubObjectDrag(t):this.dragMode==="object"&&this.handleObjectDrag(t):this.handleHover(t)}handleHover(t){const n=this.objectManager.getObjects(),i=this.viewManager.getActiveCamera();if(!i)return;let r,a=1/0;const o=1e-4,c=new x(t.pointer.x,t.pointer.y,.5);if(n.forEach(u=>{u.visible&&u.traverse(f=>{if((f.userData.isAnchor||f.userData.isControlPoint||f.userData.isNode)&&f.visible){const d=new x;if(f.getWorldPosition(d),d.project(i),d.z>-1&&d.z<1){const g=(d.x-c.x)**2+(d.y-c.y)**2;g<o&&g<a&&(a=g,r={object:f})}}})}),r){const u=r.object;u.userData.isMainAnchor?this.setGizmoHighlight("all"):this.setGizmoHighlight(null),this.hoveredSubObject!==u&&(this.resetHover(),this.hoveredSubObject=u,(u.material instanceof tn||u.material instanceof zt)&&(u.userData.uniqueMat||(u.material=u.material.clone(),u.userData.uniqueMat=!0),this.hoveredOriginalColor=u.material.color.getHex(),u.material.color.setHex(16776960),u.material.needsUpdate=!0));return}const l=this.activeGizmoMode==="translate"?this.translateGizmo:this.rotateGizmo;let h=null;if(l.visible){const u=this.raycastObject(t,l);u&&u.object.userData.axis&&(h=u.object.userData.axis)}h?(this.setGizmoHighlight(h),this.resetHover()):(this.setGizmoHighlight(null),this.resetHover())}resetHover(){if(this.hoveredSubObject&&this.hoveredOriginalColor!==null){const t=this.hoveredSubObject.material;if(t instanceof tn||t instanceof zt){let n=!1;if(this.selectedObject){let i=this.hoveredSubObject.parent;for(;i&&i.parent&&i.parent.type!=="Scene";)i=i.parent;i===this.selectedObject&&(n=!0)}n?this.hoveredSubObject.userData.isControlPoint?t.color.setHex(65280):t.color.setHex(16711680):t.color.setHex(this.hoveredOriginalColor)}}this.hoveredSubObject=null,this.hoveredOriginalColor=null}onPointerUp(t){if(this.isDragging=!1,this.dragMode="none",this.setCameraLock(!1),this.activeAnchor&&(this.activeAnchor.material instanceof tn&&this.activeAnchor.material.color.setHex(16711680),this.activeAnchor=null),this.selectedSubObject&&this.activeSubObjectOriginalColor!==null){const n=this.selectedSubObject;(n.material instanceof tn||n.material instanceof zt)&&n.material.color.setHex(this.activeSubObjectOriginalColor),this.activeSubObjectOriginalColor=null}this.selectedSubObject=null,this.setGizmoHighlight(null)}setGizmoHighlight(t){this.translateGizmo.traverse(i=>{if(i instanceof Xe||i instanceof Ki){const r=i.userData.axis;if(!r)return;const a=i.material;if(!a)return;let o=16777215;r==="x"&&(o=16729156),r==="y"&&(o=4521796),r==="z"&&(o=6711039),t==="all"||t===r?(a.color.setHex(16776960),i instanceof Xe&&(a.opacity=1)):(a.color.setHex(o),i instanceof Xe&&(a.opacity=r.length>1?.2:1))}})}raycastObject(t,n){const i=this.viewManager.getActiveCamera();if(!i)return null;this.raycaster.setFromCamera(t.pointer,i);const r=this.raycaster.intersectObject(n,!0);return r.length>0?r[0]:null}startGizmoDrag(t,n){this.isDragging=!0,this.dragMode="gizmo",this.dragAxis=t,this.dragStartPoint.copy(n),this.selectedObject&&this.objectStartPos.copy(this.selectedObject.position),this.setCameraLock(!0),this.setGizmoHighlight(t);const i=new x,r=new x,a=this.viewManager.getActiveCamera();a&&a.getWorldDirection(r);const o=new x;t.includes("x")?o.set(1,0,0):t.includes("y")?o.set(0,1,0):t.includes("z")&&o.set(0,0,1),Math.abs(o.dot(r))>.9?Math.abs(r.y)>.9?i.set(0,0,1):i.set(0,1,0):t==="x"?i.crossVectors(new x(1,0,0),r).cross(new x(1,0,0)):t==="y"?i.crossVectors(new x(0,1,0),r).cross(new x(0,1,0)):t==="z"?i.crossVectors(new x(0,0,1),r).cross(new x(0,0,1)):t==="xz"?i.set(0,1,0):t==="xy"?i.set(0,0,1):t==="zy"&&i.set(1,0,0),i.normalize(),this.dragPlane.setFromNormalAndCoplanarPoint(i,n)}startObjectDrag(t){this.isDragging=!0,this.dragMode="object",this.objectStartPos.copy(t.position),this.setCameraLock(!0);const n=this.viewManager.getActiveCamera();let i=new x(0,1,0);if(n){const a=new x;n.getWorldDirection(a),i.copy(a).negate()}this.dragPlane.setFromNormalAndCoplanarPoint(i,t.position);const r=new x;if(this.raycaster.ray.intersectPlane(this.dragPlane,r)){const a=new x().subVectors(t.position,r);a.length()>5e4,this.dragOffset.copy(a)}else{this.isDragging=!1,this.dragMode="none",this.setCameraLock(!1);return}this.setGizmoHighlight("all")}startSubObjectDrag(t,n){this.isDragging=!0,this.dragMode="sub-object",this.selectedSubObject=t,this.setCameraLock(!0);const i=t;(i.material instanceof tn||i.material instanceof zt)&&(this.activeSubObjectOriginalColor=i.material.color.getHex(),i.material.color.setHex(16776960));const r=new x;t.getWorldPosition(r),this.subObjectStartPos.copy(r);const a=this.viewManager.getActiveCamera();let o=new x(0,1,0);if(a){const l=new x;a.getWorldDirection(l),o.copy(l).negate()}this.dragPlane.setFromNormalAndCoplanarPoint(o,n),this.dragStartPoint.copy(n);const c=new x;this.raycaster.ray.intersectPlane(this.dragPlane,c)?this.dragOffset.subVectors(r,c):this.dragOffset.set(0,0,0)}handleGizmoDrag(t){if(!this.selectedObject||!this.dragAxis)return;const n=this.viewManager.getActiveCamera();if(!n)return;this.raycaster.setFromCamera(t.pointer,n);const i=new x;if(this.raycaster.ray.intersectPlane(this.dragPlane,i)&&this.activeGizmoMode==="translate"){const r=i.clone().sub(this.dragStartPoint),a=this.objectStartPos.clone();this.dragAxis.includes("x")&&(a.x+=r.x),this.dragAxis.includes("y")&&(a.y+=r.y),this.dragAxis.includes("z")&&(a.z+=r.z),this.constrainToViewPlane(a,this.objectStartPos),this.viewManager.getActiveView()===ct.TOP&&(a.y=this.objectStartPos.y),this.applySnap(a),Number.isFinite(a.x)&&Number.isFinite(a.y)&&Number.isFinite(a.z)&&Math.abs(a.x)<2e4&&Math.abs(a.y)<2e4&&Math.abs(a.z)<2e4&&this.selectedObject.position.copy(a),this.updateGizmo()}}handleObjectDrag(t){if(!this.selectedObject)return;const n=this.viewManager.getActiveCamera();if(!n)return;const i=new $().copy(t.pointer).sub(this.lastPointer);this.lastPointer.copy(t.pointer);let r=null;if(n instanceof Pt){const a={width:n.right-n.left,height:n.top-n.bottom},o=new x(i.x*a.width/n.zoom,i.y*a.height/n.zoom,0);o.applyQuaternion(n.quaternion),r=this.selectedObject.position.clone().add(o)}else{this.raycaster.setFromCamera(t.pointer,n);const a=new x;this.raycaster.ray.intersectPlane(this.dragPlane,a)&&(r=a.add(this.dragOffset))}if(r){if(isNaN(r.x)||isNaN(r.y)||isNaN(r.z)||r.length()>1e6)return;if(this.constrainToViewPlane(r,this.objectStartPos),this.viewManager.getActiveView()===ct.TOP&&(r.y=this.objectStartPos.y),this.applySnap(r),this.constrainToViewPlane(r,this.objectStartPos),this.viewManager.getActiveView()===ct.TOP&&(r.y=this.objectStartPos.y),!Number.isFinite(r.x)||!Number.isFinite(r.y)||!Number.isFinite(r.z)){console.error(`DEBUG: Invalid position detected for object ${this.selectedObject.name}:`,r);return}if(Math.abs(r.x)>1e4||Math.abs(r.y)>1e4||Math.abs(r.z)>1e4){console.warn(`DEBUG: Object ${this.selectedObject.name} move blocked - out of bounds:`,r);return}this.selectedObject.position.copy(r),this.updateGizmo()}}handleSubObjectDrag(t){if(!this.selectedSubObject)return;const n=this.viewManager.getActiveCamera();if(!n)return;let i=null;if(n instanceof Pt){const r=new $().copy(t.pointer).sub(this.lastPointer);this.lastPointer.copy(t.pointer);const a={width:n.right-n.left,height:n.top-n.bottom},o=new x(r.x*a.width/n.zoom,r.y*a.height/n.zoom,0);o.applyQuaternion(n.quaternion);const c=new x;this.selectedSubObject.getWorldPosition(c),i=c.add(o)}else{this.raycaster.setFromCamera(t.pointer,n);const r=new x;this.raycaster.ray.intersectPlane(this.dragPlane,r)&&(i=r.add(this.dragOffset))}if(i){if(this.constrainToViewPlane(i,this.subObjectStartPos),this.viewManager.getActiveView()===ct.TOP&&(i.y=this.subObjectStartPos.y),this.applySnap(i),t.originalEvent.altKey){if(n instanceof Pt){const a=new $().copy(t.pointer).sub(this.lastPointer),o={width:n.right-n.left,height:n.top-n.bottom},c=new x(a.x*o.width/n.zoom,a.y*o.height/n.zoom,0).applyQuaternion(n.quaternion),l=new x;this.selectedSubObject.getWorldPosition(l),i=l.add(c)}else{const a=new x;this.raycaster.ray.intersectPlane(this.dragPlane,a)&&i.copy(a.add(this.dragOffset))}this.constrainToViewPlane(i,this.subObjectStartPos),this.viewManager.getActiveView()===ct.TOP&&(i.y=this.subObjectStartPos.y)}if(!Number.isFinite(i.x)||!Number.isFinite(i.y)||!Number.isFinite(i.z)){console.error("DEBUG: Invalid sub-object position detected:",i);return}if(Math.abs(i.x)>1e4||Math.abs(i.y)>1e4||Math.abs(i.z)>1e4){console.warn("DEBUG: Sub-object move blocked - out of bounds:",i);return}const r=this.selectedSubObject.parent;if(r){const a=i.clone();r.worldToLocal(a);const o=this.selectedSubObject.position.clone(),c=a.clone().sub(o);this.selectedSubObject.position.copy(a),r.userData.type==="bezier_line"&&et.updateBezierSegmentGeometry(r);const l=r.userData.type==="bezier_path"||r.userData.type==="circle"||r.userData.type==="square"||r.userData.type==="line";this.selectedSubObject.userData.isNode&&l?r.children.forEach(u=>{if(u.userData.type==="bezier_line"&&u.userData.isLinked&&u.userData.nodes){const f=u.userData.nodes,d=u.userData.helpers,g=f.start===this.selectedSubObject,v=f.end===this.selectedSubObject;if(g||v){const m=f.start===this.selectedSubObject?a:f.start.position,p=f.end===this.selectedSubObject?a:f.end.position,y=f.start===this.selectedSubObject?o:f.start.position,_=f.end===this.selectedSubObject?o:f.end.position,S=new x().subVectors(_,y),R=S.length();let T=!1;if(R>.001){S.normalize();const w=d.cp1?new x().subVectors(d.cp1.position,y).cross(S).length():0,O=d.cp2?new x().subVectors(d.cp2.position,y).cross(S).length():0;T=w<.1&&O<.1}if(T){const w=new x().subVectors(p,m),O=w.length();d.cp1&&d.cp1.position.copy(m).add(w.clone().normalize().multiplyScalar(O*.333)),d.cp2&&d.cp2.position.copy(m).add(w.clone().normalize().multiplyScalar(O*.666))}else g&&d.cp1&&d.cp1.position.add(c),v&&d.cp2&&d.cp2.position.add(c);et.updateBezierSegmentGeometry(u)}}}):et.updateBezierSegmentGeometry(r),r.userData.type==="background_image"&&et.updateBackgroundImage(r),r.userData.type==="bezier_path"&&!this.selectedSubObject.userData.isNode&&r.children.forEach(u=>{u.userData.type==="bezier_line"&&u.userData.isLinked&&et.updateBezierSegmentGeometry(u)});let h=r;for(;h.parent&&h.parent.type!=="Scene";)h=h.parent;this.eventBus.emit("update-object-geometry",h)}}}}class Lg extends nr{constructor(t,n,i){super(t,i);W(this,"id","square");W(this,"viewManager");W(this,"drawing",!1);W(this,"startPoint",new x);W(this,"previewObject",null);this.viewManager=n}activate(){this.drawing=!1,this.removePreview()}deactivate(){this.drawing=!1,this.setCameraLock(!1),this.removePreview()}onPointerDown(t){if(t.originalEvent.button!==0||!this.viewManager.getActiveCamera())return;const i=this.getIntersectionPoint(t);if(i)if(!this.drawing)this.drawing=!0,this.setCameraLock(!0),this.startPoint.copy(i),this.createPreview(i);else if(this.drawing=!1,this.setCameraLock(!1),this.previewObject){this.previewObject.userData.type="square",this.updateBaseSize(this.previewObject,this.startPoint,i);const r=this.previewObject;this.previewObject=null,this.eventBus.emit("preview-object-updated",null),this.eventBus.emit("tool-selected","select"),setTimeout(()=>{this.objectManager.selectObject(r),this.eventBus.emit("selection-changed",[r])},50)}else this.removePreview()}onPointerMove(t){if(!this.drawing||!this.previewObject)return;const n=this.getIntersectionPoint(t);n&&this.updatePreview(n)}onPointerUp(t){}getIntersectionPoint(t){const n=this.viewManager.getActiveCamera();if(!n)return null;const i=new Ea;i.setFromCamera(t.pointer,n);const r=this.drawing?this.startPoint.y:0,a=new sn(new x(0,1,0),-r),o=new x;return i.ray.intersectPlane(a,o)?(this.applySnap(o),o):null}createPreview(t){this.previewObject=et.createRectangle(this.startPoint,t),this.previewObject&&(this.previewObject.userData.type="square",this.updateBaseSize(this.previewObject,this.startPoint,t),this.objectManager.addObject(this.previewObject,!1),this.eventBus.emit("preview-object-updated",this.previewObject))}updatePreview(t){if(!this.previewObject)return;const n=this.startPoint,i=t,r=n.y,a=Math.min(n.x,i.x),o=Math.max(n.x,i.x),c=Math.min(n.z,i.z),l=Math.max(n.z,i.z),h=(a+o)/2,u=(c+l)/2;this.previewObject.position.set(h,r,u);const f=o-a,d=l-c,g=f/2,v=d/2,m=this.previewObject.children.filter(p=>p.userData.isNode);m.length===4&&(m[0].position.set(-g,0,-v),m[1].position.set(g,0,-v),m[2].position.set(g,0,v),m[3].position.set(-g,0,v),this.previewObject.children.filter(y=>y.userData.type==="bezier_line").forEach(y=>et.linearizeBezierSegment(y))),this.previewObject.traverse(p=>{p.userData.isMainAnchor?p.visible=!0:(p.userData.isNode||p.userData.isControlPoint||p.userData.isHelperLine)&&(p.visible=!1)}),this.updateBaseSize(this.previewObject,n,i),this.eventBus.emit("preview-object-updated",this.previewObject)}updateBaseSize(t,n,i){const r=Math.abs(n.x-i.x),a=Math.abs(n.z-i.z);t.userData.baseSize||(t.userData.baseSize={}),t.userData.baseSize.width=r,t.userData.baseSize.length=a}removePreview(){this.previewObject&&(this.objectManager.removeObject(this.previewObject),this.previewObject=null,this.eventBus.emit("preview-object-updated",null))}}class Dg extends nr{constructor(t,n,i){super(t,i);W(this,"id","circle");W(this,"startPoint",null);W(this,"previewObject",null)}activate(){this.resetState()}deactivate(){this.cancel(),this.setCameraLock(!1)}onPointerDown(t){if(t.originalEvent.button!==0){this.cancel(),this.setCameraLock(!1);return}if(!t.intersection)return;const n=t.intersection.clone();if(this.applySnap(n),!this.previewObject)this.startPoint=n,this.createPreviewObject(n),this.setCameraLock(!0);else{const i=n.distanceTo(this.startPoint),r=this.previewObject.position.clone();this.objectManager.removeObject(this.previewObject),this.previewObject=null,this.startPoint=null,this.setCameraLock(!1);const a=et.createShape("circle",r);a&&(et.updateCircleRadius(a,Math.max(.1,i)),a.userData.type="circle",this.objectManager.addObject(a),this.eventBus.emit("tool-selected","select"),setTimeout(()=>{this.objectManager.selectObject(a),this.eventBus.emit("selection-changed",[a])},50))}}onPointerMove(t){if(!this.previewObject||!this.startPoint||!t.intersection)return;const n=t.intersection.clone();this.applySnap(n),this.updatePreview(n)}onPointerUp(t){}cancel(){this.previewObject&&(this.objectManager.removeObject(this.previewObject),this.previewObject=null),this.startPoint=null,this.eventBus.emit("preview-object-updated",null)}resetState(){this.startPoint=null,this.previewObject=null}createPreviewObject(t){this.previewObject=et.createShape("circle",t),this.previewObject&&(this.previewObject.userData.type="circle",this.objectManager.addObject(this.previewObject,!1),this.eventBus.emit("preview-object-updated",this.previewObject))}updatePreview(t){if(!this.previewObject||!this.startPoint)return;const n=t.distanceTo(this.startPoint),i=Math.max(.1,n);et.updateCircleRadius(this.previewObject,i),this.eventBus.emit("preview-object-updated",this.previewObject)}}class Og{parse(e,t={}){t=Object.assign({binary:!1},t);const n=t.binary,i=[];let r=0;e.traverse(function(p){if(p.isMesh){const y=p.geometry,_=y.index,S=y.getAttribute("position");r+=_!==null?_.count/3:S.count/3,i.push({object3d:p,geometry:y})}});let a,o=80;if(n===!0){const p=r*2+r*3*4*4+80+4,y=new ArrayBuffer(p);a=new DataView(y),a.setUint32(o,r,!0),o+=4}else a="",a+=`solid exported
`;const c=new x,l=new x,h=new x,u=new x,f=new x,d=new x;for(let p=0,y=i.length;p<y;p++){const _=i[p].object3d,S=i[p].geometry,R=S.index,T=S.getAttribute("position");if(R!==null)for(let w=0;w<R.count;w+=3){const O=R.getX(w+0),M=R.getX(w+1),A=R.getX(w+2);g(O,M,A,T,_)}else for(let w=0;w<T.count;w+=3){const O=w+0,M=w+1,A=w+2;g(O,M,A,T,_)}}return n===!1&&(a+=`endsolid exported
`),a;function g(p,y,_,S,R){c.fromBufferAttribute(S,p),l.fromBufferAttribute(S,y),h.fromBufferAttribute(S,_),R.isSkinnedMesh===!0&&(R.applyBoneTransform(p,c),R.applyBoneTransform(y,l),R.applyBoneTransform(_,h)),c.applyMatrix4(R.matrixWorld),l.applyMatrix4(R.matrixWorld),h.applyMatrix4(R.matrixWorld),v(c,l,h),m(c),m(l),m(h),n===!0?(a.setUint16(o,0,!0),o+=2):(a+=`		endloop
`,a+=`	endfacet
`)}function v(p,y,_){u.subVectors(_,y),f.subVectors(p,y),u.cross(f).normalize(),d.copy(u).normalize(),n===!0?(a.setFloat32(o,d.x,!0),o+=4,a.setFloat32(o,d.y,!0),o+=4,a.setFloat32(o,d.z,!0),o+=4):(a+="	facet normal "+d.x+" "+d.y+" "+d.z+`
`,a+=`		outer loop
`)}function m(p){n===!0?(a.setFloat32(o,p.x,!0),o+=4,a.setFloat32(o,p.y,!0),o+=4,a.setFloat32(o,p.z,!0),o+=4):a+="			vertex "+p.x+" "+p.y+" "+p.z+`
`}}}function Ng(s,e=!1){const t=s[0].index!==null,n=new Set(Object.keys(s[0].attributes)),i=new Set(Object.keys(s[0].morphAttributes)),r={},a={},o=s[0].morphTargetsRelative,c=new lt;let l=0;for(let h=0;h<s.length;++h){const u=s[h];let f=0;if(t!==(u.index!==null))return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+". All geometries must have compatible attributes; make sure index attribute exists among all geometries, or in none of them."),null;for(const d in u.attributes){if(!n.has(d))return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+'. All geometries must have compatible attributes; make sure "'+d+'" attribute exists among all geometries, or in none of them.'),null;r[d]===void 0&&(r[d]=[]),r[d].push(u.attributes[d]),f++}if(f!==n.size)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+". Make sure all geometries have the same number of attributes."),null;if(o!==u.morphTargetsRelative)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+". .morphTargetsRelative must be consistent throughout all geometries."),null;for(const d in u.morphAttributes){if(!i.has(d))return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+".  .morphAttributes must be consistent throughout all geometries."),null;a[d]===void 0&&(a[d]=[]),a[d].push(u.morphAttributes[d])}if(e){let d;if(t)d=u.index.count;else if(u.attributes.position!==void 0)d=u.attributes.position.count;else return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+". The geometry must have either an index or a position attribute"),null;c.addGroup(l,d,h),l+=d}}if(t){let h=0;const u=[];for(let f=0;f<s.length;++f){const d=s[f].index;for(let g=0;g<d.count;++g)u.push(d.getX(g)+h);h+=s[f].attributes.position.count}c.setIndex(u)}for(const h in r){const u=Sc(r[h]);if(!u)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed while trying to merge the "+h+" attribute."),null;c.setAttribute(h,u)}for(const h in a){const u=a[h][0].length;if(u===0)break;c.morphAttributes=c.morphAttributes||{},c.morphAttributes[h]=[];for(let f=0;f<u;++f){const d=[];for(let v=0;v<a[h].length;++v)d.push(a[h][v][f]);const g=Sc(d);if(!g)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed while trying to merge the "+h+" morphAttribute."),null;c.morphAttributes[h].push(g)}}return c}function Sc(s){let e,t,n,i=-1,r=0;for(let l=0;l<s.length;++l){const h=s[l];if(h.isInterleavedBufferAttribute)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. InterleavedBufferAttributes are not supported."),null;if(e===void 0&&(e=h.array.constructor),e!==h.array.constructor)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.array must be of consistent array types across matching attributes."),null;if(t===void 0&&(t=h.itemSize),t!==h.itemSize)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.itemSize must be consistent across matching attributes."),null;if(n===void 0&&(n=h.normalized),n!==h.normalized)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.normalized must be consistent across matching attributes."),null;if(i===-1&&(i=h.gpuType),i!==h.gpuType)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.gpuType must be consistent across matching attributes."),null;r+=h.array.length}const a=new e(r);let o=0;for(let l=0;l<s.length;++l)a.set(s[l].array,o),o+=s[l].array.length;const c=new Lt(a,t,n);return i!==void 0&&(c.gpuType=i),c}function $r(s,e=1e-4){e=Math.max(e,Number.EPSILON);const t={},n=s.getIndex(),i=s.getAttribute("position"),r=n?n.count:i.count;let a=0;const o=Object.keys(s.attributes),c={},l={},h=[],u=["getX","getY","getZ","getW"],f=["setX","setY","setZ","setW"];for(let y=0,_=o.length;y<_;y++){const S=o[y],R=s.attributes[S];c[S]=new Lt(new R.array.constructor(R.count*R.itemSize),R.itemSize,R.normalized);const T=s.morphAttributes[S];T&&(l[S]=new Lt(new T.array.constructor(T.count*T.itemSize),T.itemSize,T.normalized))}const d=e*.5,g=Math.log10(1/e),v=Math.pow(10,g),m=d*v;for(let y=0;y<r;y++){const _=n?n.getX(y):y;let S="";for(let R=0,T=o.length;R<T;R++){const w=o[R],O=s.getAttribute(w),M=O.itemSize;for(let A=0;A<M;A++)S+=`${~~(O[u[A]](_)*v+m)},`}if(S in t)h.push(t[S]);else{for(let R=0,T=o.length;R<T;R++){const w=o[R],O=s.getAttribute(w),M=s.morphAttributes[w],A=O.itemSize,U=c[w],G=l[w];for(let j=0;j<A;j++){const D=u[j],I=f[j];if(U[I](a,O[D](_)),M)for(let H=0,q=M.length;H<q;H++)G[H][I](a,M[H][D](_))}}t[S]=a,h.push(a),a++}}const p=s.clone();for(const y in s.attributes){const _=c[y];if(p.setAttribute(y,new Lt(_.array.slice(0,a*_.itemSize),_.itemSize,_.normalized)),y in l)for(let S=0;S<l[y].length;S++){const R=l[y][S];p.morphAttributes[y][S]=new Lt(R.array.slice(0,a*R.itemSize),R.itemSize,R.normalized)}}return p.setIndex(h),p}class Ug{constructor(e,t){W(this,"eventBus");W(this,"objectManager");W(this,"fileHandle",null);W(this,"currentProjectName","Unbenanntes Projekt");W(this,"dbName","KonstruktionDB");W(this,"storeName","AutoSave");W(this,"brushProfiles",{});this.eventBus=e,this.objectManager=t,this.eventBus.on("new-project",()=>this.newProject()),this.eventBus.on("save-project",()=>this.saveProject()),this.eventBus.on("save-project-as",()=>this.saveProjectAs()),this.eventBus.on("load-project",n=>this.loadProject(n)),this.eventBus.on("load-project-from-handle",n=>this.loadProjectFromHandle(n)),this.eventBus.on("export-stl",()=>this.exportSTL()),this.eventBus.on("save-brush-profile",({name:n,profile:i})=>{n&&i&&(this.brushProfiles[n]=i,console.log(`Brush profile "${n}" saved.`),this.eventBus.emit("brush-profiles-updated",this.brushProfiles))}),this.eventBus.on("request-brush-profiles",n=>{n&&n(this.brushProfiles)}),this.eventBus.on("save-brush-profile-current-state",({name:n,profile:i})=>{if(n&&i){const r={...i};r.bezierProfile&&(r.bezierProfile={p1:{x:r.bezierProfile.p1.x,y:r.bezierProfile.p1.y},cp1:{x:r.bezierProfile.cp1.x,y:r.bezierProfile.cp1.y},cp2:{x:r.bezierProfile.cp2.x,y:r.bezierProfile.cp2.y},p0:{x:r.bezierProfile.p0.x,y:r.bezierProfile.p0.y}}),this.brushProfiles[n]=r,console.log(`Current brush state saved as profile "${n}".`),this.eventBus.emit("brush-profiles-updated",this.brushProfiles)}}),this.eventBus.on("request-project-name",()=>{this.eventBus.emit("project-name-changed",this.currentProjectName)}),window.addEventListener("beforeunload",()=>this.saveAutoSave()),this.loadAutoSave(),console.log("ProjectManager initialized")}updateProjectName(e){this.currentProjectName=e,this.eventBus.emit("project-name-changed",e)}newProject(){confirm("Möchten Sie wirklich ein neues Projekt starten? Alle ungespeicherten Änderungen gehen verloren.")&&(this.objectManager.clearAll(),this.fileHandle=null,this.updateProjectName("Unbenanntes Projekt"),this.clearAutoSave(),this.eventBus.emit("ui-focus-clicked",null))}async saveAutoSave(){const e=this.getProjectDataAsString(),t=indexedDB.open(this.dbName,1);t.onupgradeneeded=n=>{const i=n.target.result;i.objectStoreNames.contains(this.storeName)||i.createObjectStore(this.storeName)},t.onsuccess=n=>{const a=n.target.result.transaction(this.storeName,"readwrite").objectStore(this.storeName);a.put(e,"lastProject"),a.put(this.currentProjectName,"lastProjectName")}}clearAutoSave(){const e=indexedDB.open(this.dbName,1);e.onsuccess=t=>{const r=t.target.result.transaction(this.storeName,"readwrite").objectStore(this.storeName);r.delete("lastProject"),r.delete("lastProjectName")}}loadAutoSave(){const e=indexedDB.open(this.dbName,1);e.onupgradeneeded=t=>{const n=t.target.result;n.objectStoreNames.contains(this.storeName)||n.createObjectStore(this.storeName)},e.onsuccess=t=>{const r=t.target.result.transaction(this.storeName,"readonly").objectStore(this.storeName),a=r.get("lastProjectName");a.onsuccess=()=>{a.result&&this.updateProjectName(a.result)};const o=r.get("lastProject");o.onsuccess=()=>{if(o.result)try{const c=JSON.parse(o.result);this.loadProjectData(c),console.log("AutoSave loaded.")}catch(c){console.error("Failed to parse AutoSave",c)}}}}async saveProject(){this.fileHandle?(await this.writeDataToFile(this.fileHandle),this.saveAutoSave()):await this.saveProjectAs()}async saveProjectAs(){const e=this.getProjectDataAsString();if(window.showSaveFilePicker)try{const t=await window.showSaveFilePicker({suggestedName:`${this.currentProjectName}.json`,types:[{description:"JSON-Projektdateien",accept:{"application/json":[".json"]}}]});this.fileHandle=t,this.updateProjectName(t.name.replace(".json","")),await this.writeDataToFile(this.fileHandle),this.saveAutoSave()}catch(t){if(t.name==="AbortError")return;console.error("Error saving file:",t)}else{const t=prompt("Bitte geben Sie einen Dateinamen ein:",this.currentProjectName);if(t){this.updateProjectName(t);const n=new Blob([e],{type:"application/json"}),i=URL.createObjectURL(n),r=document.createElement("a");r.href=i,r.download=`${t}.json`,document.body.appendChild(r),r.click(),document.body.removeChild(r),URL.revokeObjectURL(i),this.saveAutoSave()}}}async exportSTL(){const e=this.objectManager.getSelectedObjects();if(e.length===0){alert("Bitte wähle ein Objekt aus, das exportiert werden soll.");return}const t=e[0];let n=null,i=!1;if(t.traverse(g=>{g instanceof Xe&&g.visible&&!g.userData.isHelper&&!g.userData.isGuide&&(i=!0)}),i&&(n=t),!n){alert("Das ausgewählte Objekt enthält kein exportierbares 3D-Mesh. Hast du 'In Mesh umwandeln' oder 'Extrudieren' verwendet?");return}const r=[];n.updateMatrixWorld(!0),n.traverse(g=>{if(g instanceof Xe&&g.geometry&&g.visible&&!g.userData.isHelper){const v=g.geometry.clone();v.applyMatrix4(g.matrixWorld),r.push(v)}});let a=null;if(r.length>0)try{let g=Ng(r,!1);g&&(g.deleteAttribute("normal"),g.deleteAttribute("uv"),g=$r(g,.1),a=new Xe(g))}catch(g){console.warn("Geometry merge failed during check preparation",g)}const o=a?this.getOpenEdges(a):null;if(o){const g=t.matrixWorld.clone().invert();if(o.applyMatrix4(g),t.add(o),setTimeout(()=>{o.parent&&o.parent.remove(o)},1e4),confirm(`Warnung: Das Modell ist nicht wasserdicht! Die offenen Kanten wurden ROT markiert.

Möchtest du versuchen, die Löcher automatisch zu schließen (z.B. durch Vertex-Merge)?`)){let m=a.geometry.clone();m.attributes.normal&&m.deleteAttribute("normal"),m.attributes.uv&&m.deleteAttribute("uv"),m=$r(m,.6),m.computeVertexNormals(),n=new Xe(m,new zt)}else if(!confirm("Möchtest du das Modell trotzdem (defekt) exportieren?")){o.parent&&o.parent.remove(o);return}}const c=new st;c.rotation.x=-Math.PI/2;let l;n.parent===null&&n.uuid!==t.uuid?l=n:l=n.clone(),c.add(l),l.scale.y=-1,l.traverse(g=>{if(g instanceof Xe&&g.geometry&&g.geometry.index){const v=g.geometry.index;for(let m=0;m<v.count;m+=3){const p=v.getX(m),y=v.getX(m+1);v.setX(m,y),v.setX(m+1,p)}g.geometry.index.needsUpdate=!0,g.geometry.computeVertexNormals()}}),c.updateMatrixWorld(!0);const h=new Og,u={binary:!0},f=h.parse(c,u),d=new Blob([f],{type:"application/octet-stream"});if(window.showSaveFilePicker)try{const v=await(await window.showSaveFilePicker({suggestedName:`${t.name||"Model"}.stl`,types:[{description:"STL 3D Modell",accept:{"model/stl":[".stl"]}}]})).createWritable();await v.write(d),await v.close()}catch(g){g.name!=="AbortError"&&console.error(g)}else{const g=URL.createObjectURL(d),v=document.createElement("a");v.href=g,v.download=`${t.name||"Model"}.stl`,document.body.appendChild(v),v.click(),document.body.removeChild(v),URL.revokeObjectURL(g)}}getOpenEdges(e){if(!e.geometry)return null;let t=e.geometry.clone();if(!t.index)try{t=$r(t)}catch(h){console.warn("Merge vertices failed during check",h)}if(!t.index)return null;const n=t.index,i={};for(let h=0;h<n.count;h+=3){const u=n.getX(h),f=n.getY(h),d=n.getZ(h),g=(v,m)=>{const p=v<m?`${v}_${m}`:`${m}_${v}`;i[p]=(i[p]||0)+1};g(u,f),g(f,d),g(d,u)}const r=t.attributes.position,a=[];for(const h in i)if(i[h]===1){const u=h.split("_"),f=parseInt(u[0]),d=parseInt(u[1]);a.push(r.getX(f),r.getY(f),r.getZ(f)),a.push(r.getX(d),r.getY(d),r.getZ(d))}if(a.length===0)return null;const o=new lt;o.setAttribute("position",new ft(a,3));const c=new ln({color:16711680,linewidth:2,depthTest:!1}),l=new _a(o,c);return l.renderOrder=9999,l}getProjectDataAsString(){const t=this.objectManager.getObjects().map(r=>et.describeObject(r)).filter(r=>r!==null);let n=null;this.eventBus.emit("request-brush-state-sync",r=>{n=r});const i={version:"1.0",objects:t,brushState:n,brushProfiles:this.brushProfiles};return JSON.stringify(i,null,2)}async writeDataToFile(e){try{const t=this.getProjectDataAsString(),n=await e.createWritable();await n.write(t),await n.close(),console.log("Project saved successfully.")}catch(t){console.error("Failed to write to file:",t)}}async loadProjectFromHandle(e){if(confirm("Möchten Sie das Projekt laden? Alle ungespeicherten Änderungen gehen verloren."))try{const t=await e.getFile();this.fileHandle=e,this.updateProjectName(e.name.replace(".json","")),this.processProjectFile(t)}catch(t){console.error("Failed to load project from handle:",t)}}loadProject(e){confirm("Möchten Sie das Projekt laden? Alle ungespeicherten Änderungen gehen verloren.")&&(this.updateProjectName(e.name.replace(".json","")),this.fileHandle=null,this.processProjectFile(e))}processProjectFile(e){const t=new FileReader;t.onload=n=>{var i;try{const r=(i=n.target)==null?void 0:i.result,a=JSON.parse(r);this.loadProjectData(a)}catch(r){alert("Fehler beim Laden der Projektdatei. Ist die Datei korrekt?"),console.error(r)}},t.readAsText(e)}loadProjectData(e){if(!e.objects||e.version!=="1.0")throw new Error("Incompatible or invalid project file.");this.objectManager.clearAll(),this.brushProfiles=e.brushProfiles||{},this.eventBus.emit("brush-profiles-updated",this.brushProfiles),setTimeout(()=>{e.brushState&&this.eventBus.emit("load-brush-state",e.brushState),e.objects.forEach(t=>{const n=et.recreateShape(t);n&&this.objectManager.addObject(n,!1)}),this.objectManager.deselectAll(),this.eventBus.emit("tool-selected","select"),this.eventBus.emit("camera-change",null),this.saveAutoSave()},100)}}class Ig{constructor(e){W(this,"baseUrl");this.baseUrl=`http://${e}`}async sendGcode(e){try{return(await fetch(`${this.baseUrl}/rr_gcode?gcode=${encodeURIComponent(e)}`)).ok}catch(t){return console.error("Failed to send G-Code:",t),!1}}async getMachineStatus(){try{return await(await fetch(`${this.baseUrl}/rr_status?type=3`)).json()}catch(e){return console.error("Failed to get machine status:",e),null}}}class Fg{constructor(e){W(this,"duetClient");console.log(`Robot instance created for IP: ${e}`),this.duetClient=new Ig(e)}async calibrateZAxis(){console.log("Starting Z-Axis calibration..."),await this.duetClient.sendGcode('M98 P"0:/macros/calibrate_z.g"')}async paint(e){return console.log("Sending G-Code to the machine..."),await this.duetClient.sendGcode(e)?console.log("G-Code sent successfully."):console.error("Failed to send G-Code."),Promise.resolve()}}class zg{static zHubToServoAngle(e){const i=e/20*90;return Math.max(0,Math.min(90,i))}}class Bg{static generate(){let e="";return e+=`G90 ; Absolute positioning
`,e+=`G21 ; Set units to millimeters
`,e+=`M82 ; Set extruder to absolute mode
`,e+=`
`,e+=`; --- Start Painting ---
`,e+=this.moveTo(10,10),e+=this.setBrushHeight(5),e+=this.setBrushHeight(0),e+=this.moveTo(100,10),e+=this.setBrushHeight(5),e+=`
`,e+=`; --- End Painting ---
`,e+=`G1 X0 Y0 F3000 ; Return to home
`,e}static moveTo(e,t,n=3e3){return`G1 X${e.toFixed(3)} Y${t.toFixed(3)} F${n}
`}static setBrushHeight(e){return`M280 P0 S${zg.zHubToServoAngle(e).toFixed(1)}
`}}class Gg{static async process(e,t){const n=document.createElement("canvas");n.width=e.width,n.height=e.height;const i=n.getContext("2d",{willReadFrequently:!0});if(!i)return[];i.drawImage(e,0,0);const a=i.getImageData(0,0,n.width,n.height).data,o=[],c=255/t;for(let l=0;l<t;l++){const h=l*c,u=(l+1)*c,f=document.createElement("canvas");f.width=n.width,f.height=n.height;const d=f.getContext("2d");if(!d)continue;const g=d.createImageData(n.width,n.height),v=g.data;for(let p=0;p<a.length;p+=4){const y=a[p],_=a[p+1],S=a[p+2],R=a[p+3],T=.299*y+.587*_+.114*S;R>10&&T<250&&T>=h&&T<u&&(v[p]=0,v[p+1]=0,v[p+2]=0,v[p+3]=255)}d.putImageData(g,0,0);const m=new er(f);o.push(m)}return console.log(`Image processed into ${o.length} layers using thresholding.`),o}}class kg{constructor(e){W(this,"scene");W(this,"brushMesh",null);W(this,"wireframe",null);W(this,"group");W(this,"profile",{p1:new $(0,0),cp1:new $(10,-15),cp2:new $(15,-45),p0:new $(0,-60)});this.scene=e,this.group=new st,this.group.name="DavinciPinsel1_Group",this.scene.add(this.group)}update(e,t,n){this.clear(),e.bezierProfile&&(this.profile=e.bezierProfile),this.createBezierLatheBrush(e,t,n)}createBezierLatheBrush(e,t,n){const i=e.color||"#cccccc",r=e.transparency!==void 0?e.transparency:1,a=Math.abs(this.profile.p0.y-this.profile.p1.y);let o=0,c=a;t&&t.y<a&&(c=Math.max(2,t.y),o=(a-c)/a);let l=new x;n&&n.length()>.001&&l.copy(n).multiplyScalar(-20),o>0||l.set(0,0,0);const u=a,f=new x(0,0,0),d=Math.sqrt(Math.max(0,Math.pow(u,2)-Math.pow(c,2)));l.length()>d&&l.setLength(d);const g=new x(l.x*.005,-u*.4,l.z*.005),v=new x(l.x*.4,-u*.8,l.z*.4),m=new x(l.x,-c,l.z),p=new Ti(f,g,v,m),y=p.getPoints(24),_=this.profile.p0.y-this.profile.p1.y,S=U=>_===0?0:(U-this.profile.p1.y)/_,R=new Sa(new $(this.profile.p1.x,S(this.profile.p1.y)),new $(this.profile.cp1.x,S(this.profile.cp1.y)),new $(this.profile.cp2.x,S(this.profile.cp2.y)),new $(this.profile.p0.x,S(this.profile.p0.y))),T=16,w=[],O=[];for(let U=0;U<y.length;U++){const G=U/(y.length-1),j=R.getPoint(G),D=j.x,I=j.y,H=p.getPoint(I),q=p.getTangent(I).normalize(),Y=Math.abs(q.y)<.9?new x(0,1,0):new x(1,0,0),Z=new x().crossVectors(q,Y).normalize(),K=new x().crossVectors(Z,q).normalize();for(let se=0;se<T;se++){const oe=se/T*Math.PI*2,X=H.clone().add(K.clone().multiplyScalar(Math.cos(oe)*D)).add(Z.clone().multiplyScalar(Math.sin(oe)*D));if(w.push(X),U<y.length-1){const J=U+1,he=(se+1)%T,xe=U*T+se,ve=J*T+se,Le=J*T+he,Pe=U*T+he;O.push(xe,ve,Pe,ve,Le,Pe)}}}const M=new lt().setFromPoints(w);M.setIndex(O),M.computeVertexNormals(),this.brushMesh=new Xe(M,new og({color:new Ue(i),transparent:r<1,opacity:r,roughness:.6,metalness:.1,side:jt})),this.brushMesh.position.set(0,0,0);const A=new ol(M);this.wireframe=new _a(A,new ln({color:16777215,transparent:!0,opacity:.2})),this.brushMesh.add(this.wireframe),this.group.add(this.brushMesh)}clear(){for(;this.group.children.length>0;){const e=this.group.children[0];e.geometry&&e.geometry.dispose(),e.material&&(Array.isArray(e.material)?e.material.forEach(t=>t.dispose()):e.material.dispose()),this.group.remove(e)}this.brushMesh=null,this.wireframe=null}setVisible(e){this.group.visible=e}}const Dt=new Pm;Dt.background=new Ue(3355443);const pl=new Fg("192.168.1.123");let qs=null;const qt=new kg(Dt);qt.setVisible(!1);let vt={type:"Rundpinsel",diameter:10,length:30,color:"#cccccc",transparency:.8,isProfileActive:!1,showMachineBrush:!1,bezierProfile:null};const Ln=new x(0,30,0),Mc=new x(0,30,0),bc=new x(0,0,0),Hg=new dg(16777215,.6);Dt.add(Hg);const ml=new ug(16777215,.8);ml.position.set(50,100,70);Dt.add(ml);const Ta=new Tg(1);Dt.add(Ta);const Ke=new fg,Ot=new vg(Ke,Dt),Yt=new gg(Ke,"app",Dt),Vg=new Ag(Ke,Yt),un=new Cg(Ke),Wg=new Ug(Ke,Ot),Xg=new Eg(Ke,Yt,Dt),jg=new wg(Ke,Yt);Ke.on("request-brush-state-sync",s=>{s(vt)});const qg=()=>({p1:new $(0,0),cp1:new $(10,-15),cp2:new $(15,-45),p0:new $(0,-60)});Ke.on("load-brush-state",s=>{s&&(Object.assign(vt,s),s.bezierProfile===null?vt.bezierProfile=qg():s.bezierProfile&&(vt.bezierProfile={p1:new $(s.bezierProfile.p1.x,s.bezierProfile.p1.y),cp1:new $(s.bezierProfile.cp1.x,s.bezierProfile.cp1.y),cp2:new $(s.bezierProfile.cp2.x,s.bezierProfile.cp2.y),p0:new $(s.bezierProfile.p0.x,s.bezierProfile.p0.y)}),qt.update(vt,Ln),Ke.emit("brush-state-changed",vt))});Ke.on("brush-state-changed",s=>{Object.assign(vt,s);const e=un.getActiveToolId();e&&e!=="select"||!vt.showMachineBrush?qt.setVisible(!1):(qt.setVisible(!0),qt.update(vt,Ln))});Ke.on("save-brush-profile",s=>{var t;const e=s.children.filter(n=>n.userData.type==="bezier_line");if(e.length>0){const n=e[0],i=n.userData.nodes,r=n.userData.helpers;if(i&&r){const a=new $(i.start.position.x,i.start.position.y),o=new $(r.cp1.position.x,r.cp1.position.y),c=new $(r.cp2.position.x,r.cp2.position.y),l=new $(i.end.position.x,i.end.position.y);vt.bezierProfile={p1:a,cp1:o,cp2:c,p0:l},vt.color="#"+(((t=s.userData.materialParams)==null?void 0:t.color)||"cccccc").replace("#",""),vt.isProfileActive=!0,qt.update(vt,Ln),vt.showMachineBrush&&qt.setVisible(!0)}}});Ke.on("interaction-pointer-move",s=>{const e=un.getActiveToolId();if(e&&e!=="select"||!vt.showMachineBrush){qt.setVisible(!1);return}if(qt.setVisible(!0),s.intersection){const n=s.intersection.x,i=s.intersection.y,r=s.intersection.z;let a=30;const o=Yt.getActiveView();o==="PERSPECTIVE"||o==="TOP"?a=(s.pointer.y+1)*30:a=i,Mc.copy(Ln),Ln.set(n,a,r);const c=new x().subVectors(Ln,Mc);c.y=0,c.length()<.01&&c.set(0,0,0),bc.lerp(c,.15);const l=bc.clone();l.multiplyScalar(2),l.clampLength(0,20),qt.group.position.set(n,a,r),qt.update(vt,Ln,l)}});qt.update(vt,Ln);Ke.on("cnc-generate-gcode",()=>{console.log("Generating G-Code..."),qs=Bg.generate(),console.log("--- Generated G-Code ---"),console.log(qs),alert("G-Code wurde in der Konsole ausgegeben.")});Ke.on("cnc-start-painting",()=>{qs?(console.log("Starting painting process..."),pl.paint(qs),alert("Malprozess wurde gestartet (siehe Konsole für Details).")):(alert("Bitte zuerst G-Code generieren!"),console.warn("Paint process aborted: No G-Code generated yet."))});Ke.on("image-analysis-start",async s=>{console.log("Image analysis event triggered with layers:",s.layers);const e=Ot.getObjects().find(i=>i.name==="Background Image");if(!e){console.error("DEBUG: Could not find the original 'Background Image' to analyze."),alert("Fehler: Originales Hintergrundbild nicht gefunden!");return}console.log(`DEBUG: Found original background image: '${e.name}'. Starting analysis.`);const t=e.children.find(i=>i instanceof Xe);if(!t||!(t.material instanceof zt)||!t.material.map){console.error("Invalid background image object for analysis.");return}const n=t.material.map.image;if(!n){console.error("No image data found in texture.");return}try{const i=await Gg.process(n,s.layers);Ot.getObjects().filter(d=>d.name.startsWith("Analyse-Schicht")).forEach(d=>Ot.removeObject(d));const a=e.userData.baseSize.width,o=e.userData.baseSize.height,c=10,l=s.columns||1,h=l*a+(l-1)*c,u=e.position.x-h/2+a/2,f=e.position.z+o/2+c+o/2;i.forEach((d,g)=>{const v=et.createBackgroundImage(d,a,o);if(v){v.name=`Analyse-Schicht ${g+1}`;const m=g%l,p=Math.floor(g/l),y=u+m*(a+c),_=f+p*(o+c);v.position.set(y,e.position.y,_),v.position.y+=(g+1)*.1;const S=v.children.find(R=>R instanceof Xe);S&&S.material instanceof zt&&(S.material.color.set(0),S.material.transparent=!0),Ot.addObject(v)}})}catch(i){console.error("Image analysis failed:",i)}});Ke.on("create-background-image",s=>{const e=et.createBackgroundImage(s.texture,s.width,s.height);e&&(e.name="Background Image",Ot.addObject(e),Yt.focusOnObject(e))});Ke.on("add-mesh-to-scene",s=>{Ot.addObject(s),un.selectTool("select"),Ot.selectObject(s)});Ke.on("camera-change",()=>{const s=Yt.getActiveCamera();s&&(Ta.update(s),wa.updateScales(Dt,s))});const Kr=Yt.getActiveCamera();Kr&&(Ta.update(Kr),wa.updateScales(Dt,Kr));Ke.on("open-settings",()=>{const s=document.createElement("div");Object.assign(s.style,{position:"fixed",top:"0",left:"0",width:"100vw",height:"100vh",backgroundColor:"rgba(0, 0, 0, 0.5)",zIndex:"9999",display:"flex",justifyContent:"center",alignItems:"center"});const e=document.createElement("div");Object.assign(e.style,{background:"#222",border:"1px solid #444",borderRadius:"8px",padding:"20px",width:"300px",color:"white",fontFamily:"sans-serif"});const t=document.createElement("h3");t.innerText="Einstellungen",t.style.marginTop="0",e.appendChild(t);const n=document.createElement("div");n.style.display="flex",n.style.justifyContent="space-between",n.style.marginBottom="10px";const i=document.createElement("span");i.innerText="Hintergrundfarbe:";const r=document.createElement("input");r.type="color";let a="#333333";Dt.background&&Dt.background instanceof Ue&&(a="#"+Dt.background.getHexString()),r.value=a,r.onchange=d=>{Dt.background=new Ue(d.target.value)},n.appendChild(i),n.appendChild(r),e.appendChild(n);const o=document.createElement("div");o.style.display="flex",o.style.justifyContent="space-between",o.style.marginBottom="20px";const c=document.createElement("span");c.innerText="Gitterfarbe:";const l=document.createElement("input");l.type="color",l.value="#444444",l.onchange=d=>{Ke.emit("settings-grid-color-changed",{color:d.target.value})},o.appendChild(c),o.appendChild(l),e.appendChild(o);const h=document.createElement("div");h.style.marginBottom="10px";const u=document.createElement("button");u.innerText="Debug-Konsole öffnen/schließen",Object.assign(u.style,{width:"100%",padding:"8px",background:"#333",color:"#aaa",border:"1px solid #555",borderRadius:"4px",cursor:"pointer",fontSize:"13px"}),u.onclick=()=>{Ke.emit("toggle-debug-console",null),document.body.removeChild(s)},h.appendChild(u),e.appendChild(h);const f=document.createElement("button");f.innerText="Schließen",Object.assign(f.style,{width:"100%",padding:"8px",background:"#444",color:"white",border:"none",borderRadius:"4px",cursor:"pointer"}),f.onclick=()=>document.body.removeChild(s),e.appendChild(f),s.appendChild(e),document.body.appendChild(s)});const Yg=new Pg(Ke,Yt,Ot,qt),Zg=new Rg(Ke,Yt,Ot),$g=new Lg(Ke,Yt,Ot),Kg=new Dg(Ke,Yt,Ot);un.registerTool(Yg);un.registerTool(Zg);un.registerTool($g);un.registerTool(Kg);Ke.on("tool-selected",s=>{if(s==="brush_create"){const e=(vt.diameter||10)/2,t=vt.length||60,n=et.createBrush(e,t);n.position.set(0,t,0),Ot.addObject(n),un.selectTool("select"),Ot.selectObject(n)}});un.selectTool("select");const Jg=new Sg(Ke,Ot,Yt,Dt);window.app={scene:Dt,eventBus:Ke,objectManager:Ot,viewManager:Yt,toolManager:un,uiManager:Jg,interactionManager:Vg,gridManager:Xg,rulerManager:jg,projectManager:Wg,robot:pl};window.dumpScene=()=>{const s=window.app.viewManager.getActiveCamera(),e=window.app.viewManager;console.log("--- SCENE DUMP ---"),console.log("Active View:",e.getActiveView()),s&&(console.log("Camera Pos:",s.position.x,s.position.y,s.position.z),console.log("Camera Near/Far:",s.near,s.far),s.zoom&&console.log("Camera Zoom:",s.zoom));const t=window.app.gridManager;t&&t.gridFine&&(console.log("Grid Fine Pos:",t.gridFine.position.x,t.gridFine.position.y,t.gridFine.position.z),console.log("Grid Fine Rot:",t.gridFine.rotation.x,t.gridFine.rotation.y,t.gridFine.rotation.z),console.log("Grid Fine RenderOrder:",t.gridFine.renderOrder)),console.log("--- END DUMP ---")};console.log("Konstruktion app started (Modular Rebuild Fixed)");

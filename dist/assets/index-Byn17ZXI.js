var xl=Object.defineProperty;var yl=(s,e,t)=>e in s?xl(s,e,{enumerable:!0,configurable:!0,writable:!0,value:t}):s[e]=t;var k=(s,e,t)=>yl(s,typeof e!="symbol"?e+"":e,t);(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const i of document.querySelectorAll('link[rel="modulepreload"]'))n(i);new MutationObserver(i=>{for(const r of i)if(r.type==="childList")for(const a of r.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&n(a)}).observe(document,{childList:!0,subtree:!0});function t(i){const r={};return i.integrity&&(r.integrity=i.integrity),i.referrerPolicy&&(r.referrerPolicy=i.referrerPolicy),i.crossOrigin==="use-credentials"?r.credentials="include":i.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function n(i){if(i.ep)return;i.ep=!0;const r=t(i);fetch(i.href,r)}})();/**
 * @license
 * Copyright 2010-2023 Three.js Authors
 * SPDX-License-Identifier: MIT
 */const ma="160",Vt={ROTATE:0,DOLLY:1,PAN:2},Ut={ROTATE:0,PAN:1,DOLLY_PAN:2,DOLLY_ROTATE:3},Ml=0,Ua=1,bl=2,Sc=1,Ec=2,dn=3,Rn=0,zt=1,wt=2,wn=0,yi=1,Fa=2,Ba=3,za=4,Sl=5,zn=100,El=101,wl=102,Ga=103,ka=104,Tl=200,Al=201,Cl=202,Rl=203,Qr=204,ea=205,Pl=206,Ll=207,Dl=208,Ol=209,Nl=210,Il=211,Ul=212,Fl=213,Bl=214,zl=0,Gl=1,kl=2,Bs=3,Hl=4,Vl=5,Wl=6,Xl=7,wc=0,jl=1,ql=2,Tn=0,Yl=1,Zl=2,$l=3,Kl=4,Jl=5,Ql=6,Tc=300,Ti=301,Ai=302,ta=303,na=304,$s=306,ia=1e3,Qt=1001,sa=1002,Ot=1003,Ha=1004,hr=1005,Bt=1006,eh=1007,Xi=1008,An=1009,th=1010,nh=1011,ga=1012,Ac=1013,Sn=1014,En=1015,ji=1016,Cc=1017,Rc=1018,kn=1020,ih=1021,en=1023,sh=1024,rh=1025,Hn=1026,Ci=1027,ah=1028,Pc=1029,oh=1030,Lc=1031,Dc=1033,ur=33776,dr=33777,fr=33778,pr=33779,Va=35840,Wa=35841,Xa=35842,ja=35843,Oc=36196,qa=37492,Ya=37496,Za=37808,$a=37809,Ka=37810,Ja=37811,Qa=37812,eo=37813,to=37814,no=37815,io=37816,so=37817,ro=37818,ao=37819,oo=37820,co=37821,mr=36492,lo=36494,ho=36495,ch=36283,uo=36284,fo=36285,po=36286,Nc=3e3,Vn=3001,lh=3200,hh=3201,Ic=0,uh=1,Yt="",Et="srgb",vn="srgb-linear",va="display-p3",Ks="display-p3-linear",zs="linear",it="srgb",Gs="rec709",ks="p3",Zn=7680,mo=519,dh=512,fh=513,ph=514,Uc=515,mh=516,gh=517,vh=518,_h=519,ra=35044,go="300 es",aa=1035,mn=2e3,Hs=2001;class qn{addEventListener(e,t){this._listeners===void 0&&(this._listeners={});const n=this._listeners;n[e]===void 0&&(n[e]=[]),n[e].indexOf(t)===-1&&n[e].push(t)}hasEventListener(e,t){if(this._listeners===void 0)return!1;const n=this._listeners;return n[e]!==void 0&&n[e].indexOf(t)!==-1}removeEventListener(e,t){if(this._listeners===void 0)return;const i=this._listeners[e];if(i!==void 0){const r=i.indexOf(t);r!==-1&&i.splice(r,1)}}dispatchEvent(e){if(this._listeners===void 0)return;const n=this._listeners[e.type];if(n!==void 0){e.target=this;const i=n.slice(0);for(let r=0,a=i.length;r<a;r++)i[r].call(this,e);e.target=null}}}const At=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"],Gi=Math.PI/180,oa=180/Math.PI;function gn(){const s=Math.random()*4294967295|0,e=Math.random()*4294967295|0,t=Math.random()*4294967295|0,n=Math.random()*4294967295|0;return(At[s&255]+At[s>>8&255]+At[s>>16&255]+At[s>>24&255]+"-"+At[e&255]+At[e>>8&255]+"-"+At[e>>16&15|64]+At[e>>24&255]+"-"+At[t&63|128]+At[t>>8&255]+"-"+At[t>>16&255]+At[t>>24&255]+At[n&255]+At[n>>8&255]+At[n>>16&255]+At[n>>24&255]).toLowerCase()}function Mt(s,e,t){return Math.max(e,Math.min(t,s))}function xh(s,e){return(s%e+e)%e}function gr(s,e,t){return(1-t)*s+t*e}function vo(s){return(s&s-1)===0&&s!==0}function ca(s){return Math.pow(2,Math.floor(Math.log(s)/Math.LN2))}function fn(s,e){switch(e.constructor){case Float32Array:return s;case Uint32Array:return s/4294967295;case Uint16Array:return s/65535;case Uint8Array:return s/255;case Int32Array:return Math.max(s/2147483647,-1);case Int16Array:return Math.max(s/32767,-1);case Int8Array:return Math.max(s/127,-1);default:throw new Error("Invalid component type.")}}function et(s,e){switch(e.constructor){case Float32Array:return s;case Uint32Array:return Math.round(s*4294967295);case Uint16Array:return Math.round(s*65535);case Uint8Array:return Math.round(s*255);case Int32Array:return Math.round(s*2147483647);case Int16Array:return Math.round(s*32767);case Int8Array:return Math.round(s*127);default:throw new Error("Invalid component type.")}}const yh={DEG2RAD:Gi};class j{constructor(e=0,t=0){j.prototype.isVector2=!0,this.x=e,this.y=t}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,t){return this.x=e,this.y=t,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){const t=this.x,n=this.y,i=e.elements;return this.x=i[0]*t+i[3]*n+i[6],this.y=i[1]*t+i[4]*n+i[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this}clampLength(e,t){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(e,Math.min(t,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const n=this.dot(e)/t;return Math.acos(Mt(n,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,n=this.y-e.y;return t*t+n*n}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this}rotateAround(e,t){const n=Math.cos(t),i=Math.sin(t),r=this.x-e.x,a=this.y-e.y;return this.x=r*n-a*i+e.x,this.y=r*i+a*n+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class Ye{constructor(e,t,n,i,r,a,o,c,l){Ye.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,t,n,i,r,a,o,c,l)}set(e,t,n,i,r,a,o,c,l){const h=this.elements;return h[0]=e,h[1]=i,h[2]=o,h[3]=t,h[4]=r,h[5]=c,h[6]=n,h[7]=a,h[8]=l,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){const t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],this}extractBasis(e,t,n){return e.setFromMatrix3Column(this,0),t.setFromMatrix3Column(this,1),n.setFromMatrix3Column(this,2),this}setFromMatrix4(e){const t=e.elements;return this.set(t[0],t[4],t[8],t[1],t[5],t[9],t[2],t[6],t[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const n=e.elements,i=t.elements,r=this.elements,a=n[0],o=n[3],c=n[6],l=n[1],h=n[4],u=n[7],f=n[2],p=n[5],g=n[8],v=i[0],m=i[3],d=i[6],_=i[1],x=i[4],y=i[7],R=i[2],E=i[5],C=i[8];return r[0]=a*v+o*_+c*R,r[3]=a*m+o*x+c*E,r[6]=a*d+o*y+c*C,r[1]=l*v+h*_+u*R,r[4]=l*m+h*x+u*E,r[7]=l*d+h*y+u*C,r[2]=f*v+p*_+g*R,r[5]=f*m+p*x+g*E,r[8]=f*d+p*y+g*C,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[3]*=e,t[6]*=e,t[1]*=e,t[4]*=e,t[7]*=e,t[2]*=e,t[5]*=e,t[8]*=e,this}determinant(){const e=this.elements,t=e[0],n=e[1],i=e[2],r=e[3],a=e[4],o=e[5],c=e[6],l=e[7],h=e[8];return t*a*h-t*o*l-n*r*h+n*o*c+i*r*l-i*a*c}invert(){const e=this.elements,t=e[0],n=e[1],i=e[2],r=e[3],a=e[4],o=e[5],c=e[6],l=e[7],h=e[8],u=h*a-o*l,f=o*c-h*r,p=l*r-a*c,g=t*u+n*f+i*p;if(g===0)return this.set(0,0,0,0,0,0,0,0,0);const v=1/g;return e[0]=u*v,e[1]=(i*l-h*n)*v,e[2]=(o*n-i*a)*v,e[3]=f*v,e[4]=(h*t-i*c)*v,e[5]=(i*r-o*t)*v,e[6]=p*v,e[7]=(n*c-l*t)*v,e[8]=(a*t-n*r)*v,this}transpose(){let e;const t=this.elements;return e=t[1],t[1]=t[3],t[3]=e,e=t[2],t[2]=t[6],t[6]=e,e=t[5],t[5]=t[7],t[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){const t=this.elements;return e[0]=t[0],e[1]=t[3],e[2]=t[6],e[3]=t[1],e[4]=t[4],e[5]=t[7],e[6]=t[2],e[7]=t[5],e[8]=t[8],this}setUvTransform(e,t,n,i,r,a,o){const c=Math.cos(r),l=Math.sin(r);return this.set(n*c,n*l,-n*(c*a+l*o)+a+e,-i*l,i*c,-i*(-l*a+c*o)+o+t,0,0,1),this}scale(e,t){return this.premultiply(vr.makeScale(e,t)),this}rotate(e){return this.premultiply(vr.makeRotation(-e)),this}translate(e,t){return this.premultiply(vr.makeTranslation(e,t)),this}makeTranslation(e,t){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,t,0,0,1),this}makeRotation(e){const t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,n,t,0,0,0,1),this}makeScale(e,t){return this.set(e,0,0,0,t,0,0,0,1),this}equals(e){const t=this.elements,n=e.elements;for(let i=0;i<9;i++)if(t[i]!==n[i])return!1;return!0}fromArray(e,t=0){for(let n=0;n<9;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){const n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e}clone(){return new this.constructor().fromArray(this.elements)}}const vr=new Ye;function Fc(s){for(let e=s.length-1;e>=0;--e)if(s[e]>=65535)return!0;return!1}function Vs(s){return document.createElementNS("http://www.w3.org/1999/xhtml",s)}function Mh(){const s=Vs("canvas");return s.style.display="block",s}const _o={};function ki(s){s in _o||(_o[s]=!0,console.warn(s))}const xo=new Ye().set(.8224621,.177538,0,.0331941,.9668058,0,.0170827,.0723974,.9105199),yo=new Ye().set(1.2249401,-.2249404,0,-.0420569,1.0420571,0,-.0196376,-.0786361,1.0982735),is={[vn]:{transfer:zs,primaries:Gs,toReference:s=>s,fromReference:s=>s},[Et]:{transfer:it,primaries:Gs,toReference:s=>s.convertSRGBToLinear(),fromReference:s=>s.convertLinearToSRGB()},[Ks]:{transfer:zs,primaries:ks,toReference:s=>s.applyMatrix3(yo),fromReference:s=>s.applyMatrix3(xo)},[va]:{transfer:it,primaries:ks,toReference:s=>s.convertSRGBToLinear().applyMatrix3(yo),fromReference:s=>s.applyMatrix3(xo).convertLinearToSRGB()}},bh=new Set([vn,Ks]),Qe={enabled:!0,_workingColorSpace:vn,get workingColorSpace(){return this._workingColorSpace},set workingColorSpace(s){if(!bh.has(s))throw new Error(`Unsupported working color space, "${s}".`);this._workingColorSpace=s},convert:function(s,e,t){if(this.enabled===!1||e===t||!e||!t)return s;const n=is[e].toReference,i=is[t].fromReference;return i(n(s))},fromWorkingColorSpace:function(s,e){return this.convert(s,this._workingColorSpace,e)},toWorkingColorSpace:function(s,e){return this.convert(s,e,this._workingColorSpace)},getPrimaries:function(s){return is[s].primaries},getTransfer:function(s){return s===Yt?zs:is[s].transfer}};function Mi(s){return s<.04045?s*.0773993808:Math.pow(s*.9478672986+.0521327014,2.4)}function _r(s){return s<.0031308?s*12.92:1.055*Math.pow(s,.41666)-.055}let $n;class Bc{static getDataURL(e){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let t;if(e instanceof HTMLCanvasElement)t=e;else{$n===void 0&&($n=Vs("canvas")),$n.width=e.width,$n.height=e.height;const n=$n.getContext("2d");e instanceof ImageData?n.putImageData(e,0,0):n.drawImage(e,0,0,e.width,e.height),t=$n}return t.width>2048||t.height>2048?(console.warn("THREE.ImageUtils.getDataURL: Image converted to jpg for performance reasons",e),t.toDataURL("image/jpeg",.6)):t.toDataURL("image/png")}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){const t=Vs("canvas");t.width=e.width,t.height=e.height;const n=t.getContext("2d");n.drawImage(e,0,0,e.width,e.height);const i=n.getImageData(0,0,e.width,e.height),r=i.data;for(let a=0;a<r.length;a++)r[a]=Mi(r[a]/255)*255;return n.putImageData(i,0,0),t}else if(e.data){const t=e.data.slice(0);for(let n=0;n<t.length;n++)t instanceof Uint8Array||t instanceof Uint8ClampedArray?t[n]=Math.floor(Mi(t[n]/255)*255):t[n]=Mi(t[n]);return{data:t,width:e.width,height:e.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}}let Sh=0;class zc{constructor(e=null){this.isSource=!0,Object.defineProperty(this,"id",{value:Sh++}),this.uuid=gn(),this.data=e,this.version=0}set needsUpdate(e){e===!0&&this.version++}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.images[this.uuid]!==void 0)return e.images[this.uuid];const n={uuid:this.uuid,url:""},i=this.data;if(i!==null){let r;if(Array.isArray(i)){r=[];for(let a=0,o=i.length;a<o;a++)i[a].isDataTexture?r.push(xr(i[a].image)):r.push(xr(i[a]))}else r=xr(i);n.url=r}return t||(e.images[this.uuid]=n),n}}function xr(s){return typeof HTMLImageElement<"u"&&s instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&s instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&s instanceof ImageBitmap?Bc.getDataURL(s):s.data?{data:Array.from(s.data),width:s.width,height:s.height,type:s.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}let Eh=0;class Pt extends qn{constructor(e=Pt.DEFAULT_IMAGE,t=Pt.DEFAULT_MAPPING,n=Qt,i=Qt,r=Bt,a=Xi,o=en,c=An,l=Pt.DEFAULT_ANISOTROPY,h=Yt){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:Eh++}),this.uuid=gn(),this.name="",this.source=new zc(e),this.mipmaps=[],this.mapping=t,this.channel=0,this.wrapS=n,this.wrapT=i,this.magFilter=r,this.minFilter=a,this.anisotropy=l,this.format=o,this.internalFormat=null,this.type=c,this.offset=new j(0,0),this.repeat=new j(1,1),this.center=new j(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new Ye,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,typeof h=="string"?this.colorSpace=h:(ki("THREE.Texture: Property .encoding has been replaced by .colorSpace."),this.colorSpace=h===Vn?Et:Yt),this.userData={},this.version=0,this.onUpdate=null,this.isRenderTargetTexture=!1,this.needsPMREMUpdate=!1}get image(){return this.source.data}set image(e=null){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];const n={metadata:{version:4.6,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(n.userData=this.userData),t||(e.textures[this.uuid]=n),n}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==Tc)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case ia:e.x=e.x-Math.floor(e.x);break;case Qt:e.x=e.x<0?0:1;break;case sa:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case ia:e.y=e.y-Math.floor(e.y);break;case Qt:e.y=e.y<0?0:1;break;case sa:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}get encoding(){return ki("THREE.Texture: Property .encoding has been replaced by .colorSpace."),this.colorSpace===Et?Vn:Nc}set encoding(e){ki("THREE.Texture: Property .encoding has been replaced by .colorSpace."),this.colorSpace=e===Vn?Et:Yt}}Pt.DEFAULT_IMAGE=null;Pt.DEFAULT_MAPPING=Tc;Pt.DEFAULT_ANISOTROPY=1;class St{constructor(e=0,t=0,n=0,i=1){St.prototype.isVector4=!0,this.x=e,this.y=t,this.z=n,this.w=i}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,t,n,i){return this.x=e,this.y=t,this.z=n,this.w=i,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;case 3:this.w=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this.w=e.w+t.w,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this.w+=e.w*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this.w=e.w-t.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){const t=this.x,n=this.y,i=this.z,r=this.w,a=e.elements;return this.x=a[0]*t+a[4]*n+a[8]*i+a[12]*r,this.y=a[1]*t+a[5]*n+a[9]*i+a[13]*r,this.z=a[2]*t+a[6]*n+a[10]*i+a[14]*r,this.w=a[3]*t+a[7]*n+a[11]*i+a[15]*r,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);const t=Math.sqrt(1-e.w*e.w);return t<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/t,this.y=e.y/t,this.z=e.z/t),this}setAxisAngleFromRotationMatrix(e){let t,n,i,r;const c=e.elements,l=c[0],h=c[4],u=c[8],f=c[1],p=c[5],g=c[9],v=c[2],m=c[6],d=c[10];if(Math.abs(h-f)<.01&&Math.abs(u-v)<.01&&Math.abs(g-m)<.01){if(Math.abs(h+f)<.1&&Math.abs(u+v)<.1&&Math.abs(g+m)<.1&&Math.abs(l+p+d-3)<.1)return this.set(1,0,0,0),this;t=Math.PI;const x=(l+1)/2,y=(p+1)/2,R=(d+1)/2,E=(h+f)/4,C=(u+v)/4,N=(g+m)/4;return x>y&&x>R?x<.01?(n=0,i=.707106781,r=.707106781):(n=Math.sqrt(x),i=E/n,r=C/n):y>R?y<.01?(n=.707106781,i=0,r=.707106781):(i=Math.sqrt(y),n=E/i,r=N/i):R<.01?(n=.707106781,i=.707106781,r=0):(r=Math.sqrt(R),n=C/r,i=N/r),this.set(n,i,r,t),this}let _=Math.sqrt((m-g)*(m-g)+(u-v)*(u-v)+(f-h)*(f-h));return Math.abs(_)<.001&&(_=1),this.x=(m-g)/_,this.y=(u-v)/_,this.z=(f-h)/_,this.w=Math.acos((l+p+d-1)/2),this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this.z=Math.max(e.z,Math.min(t.z,this.z)),this.w=Math.max(e.w,Math.min(t.w,this.w)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this.z=Math.max(e,Math.min(t,this.z)),this.w=Math.max(e,Math.min(t,this.w)),this}clampLength(e,t){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(e,Math.min(t,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this.w+=(e.w-this.w)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this.w=e.w+(t.w-e.w)*n,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this.w=e[t+3],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e[t+3]=this.w,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this.w=e.getW(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class wh extends qn{constructor(e=1,t=1,n={}){super(),this.isRenderTarget=!0,this.width=e,this.height=t,this.depth=1,this.scissor=new St(0,0,e,t),this.scissorTest=!1,this.viewport=new St(0,0,e,t);const i={width:e,height:t,depth:1};n.encoding!==void 0&&(ki("THREE.WebGLRenderTarget: option.encoding has been replaced by option.colorSpace."),n.colorSpace=n.encoding===Vn?Et:Yt),n=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:Bt,depthBuffer:!0,stencilBuffer:!1,depthTexture:null,samples:0},n),this.texture=new Pt(i,n.mapping,n.wrapS,n.wrapT,n.magFilter,n.minFilter,n.format,n.type,n.anisotropy,n.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.flipY=!1,this.texture.generateMipmaps=n.generateMipmaps,this.texture.internalFormat=n.internalFormat,this.depthBuffer=n.depthBuffer,this.stencilBuffer=n.stencilBuffer,this.depthTexture=n.depthTexture,this.samples=n.samples}setSize(e,t,n=1){(this.width!==e||this.height!==t||this.depth!==n)&&(this.width=e,this.height=t,this.depth=n,this.texture.image.width=e,this.texture.image.height=t,this.texture.image.depth=n,this.dispose()),this.viewport.set(0,0,e,t),this.scissor.set(0,0,e,t)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.texture=e.texture.clone(),this.texture.isRenderTargetTexture=!0;const t=Object.assign({},e.texture.image);return this.texture.source=new zc(t),this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,e.depthTexture!==null&&(this.depthTexture=e.depthTexture.clone()),this.samples=e.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class Wn extends wh{constructor(e=1,t=1,n={}){super(e,t,n),this.isWebGLRenderTarget=!0}}class Gc extends Pt{constructor(e=null,t=1,n=1,i=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:t,height:n,depth:i},this.magFilter=Ot,this.minFilter=Ot,this.wrapR=Qt,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class Th extends Pt{constructor(e=null,t=1,n=1,i=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:t,height:n,depth:i},this.magFilter=Ot,this.minFilter=Ot,this.wrapR=Qt,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class Xn{constructor(e=0,t=0,n=0,i=1){this.isQuaternion=!0,this._x=e,this._y=t,this._z=n,this._w=i}static slerpFlat(e,t,n,i,r,a,o){let c=n[i+0],l=n[i+1],h=n[i+2],u=n[i+3];const f=r[a+0],p=r[a+1],g=r[a+2],v=r[a+3];if(o===0){e[t+0]=c,e[t+1]=l,e[t+2]=h,e[t+3]=u;return}if(o===1){e[t+0]=f,e[t+1]=p,e[t+2]=g,e[t+3]=v;return}if(u!==v||c!==f||l!==p||h!==g){let m=1-o;const d=c*f+l*p+h*g+u*v,_=d>=0?1:-1,x=1-d*d;if(x>Number.EPSILON){const R=Math.sqrt(x),E=Math.atan2(R,d*_);m=Math.sin(m*E)/R,o=Math.sin(o*E)/R}const y=o*_;if(c=c*m+f*y,l=l*m+p*y,h=h*m+g*y,u=u*m+v*y,m===1-o){const R=1/Math.sqrt(c*c+l*l+h*h+u*u);c*=R,l*=R,h*=R,u*=R}}e[t]=c,e[t+1]=l,e[t+2]=h,e[t+3]=u}static multiplyQuaternionsFlat(e,t,n,i,r,a){const o=n[i],c=n[i+1],l=n[i+2],h=n[i+3],u=r[a],f=r[a+1],p=r[a+2],g=r[a+3];return e[t]=o*g+h*u+c*p-l*f,e[t+1]=c*g+h*f+l*u-o*p,e[t+2]=l*g+h*p+o*f-c*u,e[t+3]=h*g-o*u-c*f-l*p,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,t,n,i){return this._x=e,this._y=t,this._z=n,this._w=i,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,t=!0){const n=e._x,i=e._y,r=e._z,a=e._order,o=Math.cos,c=Math.sin,l=o(n/2),h=o(i/2),u=o(r/2),f=c(n/2),p=c(i/2),g=c(r/2);switch(a){case"XYZ":this._x=f*h*u+l*p*g,this._y=l*p*u-f*h*g,this._z=l*h*g+f*p*u,this._w=l*h*u-f*p*g;break;case"YXZ":this._x=f*h*u+l*p*g,this._y=l*p*u-f*h*g,this._z=l*h*g-f*p*u,this._w=l*h*u+f*p*g;break;case"ZXY":this._x=f*h*u-l*p*g,this._y=l*p*u+f*h*g,this._z=l*h*g+f*p*u,this._w=l*h*u-f*p*g;break;case"ZYX":this._x=f*h*u-l*p*g,this._y=l*p*u+f*h*g,this._z=l*h*g-f*p*u,this._w=l*h*u+f*p*g;break;case"YZX":this._x=f*h*u+l*p*g,this._y=l*p*u+f*h*g,this._z=l*h*g-f*p*u,this._w=l*h*u-f*p*g;break;case"XZY":this._x=f*h*u-l*p*g,this._y=l*p*u-f*h*g,this._z=l*h*g+f*p*u,this._w=l*h*u+f*p*g;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+a)}return t===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,t){const n=t/2,i=Math.sin(n);return this._x=e.x*i,this._y=e.y*i,this._z=e.z*i,this._w=Math.cos(n),this._onChangeCallback(),this}setFromRotationMatrix(e){const t=e.elements,n=t[0],i=t[4],r=t[8],a=t[1],o=t[5],c=t[9],l=t[2],h=t[6],u=t[10],f=n+o+u;if(f>0){const p=.5/Math.sqrt(f+1);this._w=.25/p,this._x=(h-c)*p,this._y=(r-l)*p,this._z=(a-i)*p}else if(n>o&&n>u){const p=2*Math.sqrt(1+n-o-u);this._w=(h-c)/p,this._x=.25*p,this._y=(i+a)/p,this._z=(r+l)/p}else if(o>u){const p=2*Math.sqrt(1+o-n-u);this._w=(r-l)/p,this._x=(i+a)/p,this._y=.25*p,this._z=(c+h)/p}else{const p=2*Math.sqrt(1+u-n-o);this._w=(a-i)/p,this._x=(r+l)/p,this._y=(c+h)/p,this._z=.25*p}return this._onChangeCallback(),this}setFromUnitVectors(e,t){let n=e.dot(t)+1;return n<Number.EPSILON?(n=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=n):(this._x=0,this._y=-e.z,this._z=e.y,this._w=n)):(this._x=e.y*t.z-e.z*t.y,this._y=e.z*t.x-e.x*t.z,this._z=e.x*t.y-e.y*t.x,this._w=n),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(Mt(this.dot(e),-1,1)))}rotateTowards(e,t){const n=this.angleTo(e);if(n===0)return this;const i=Math.min(1,t/n);return this.slerp(e,i),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,t){const n=e._x,i=e._y,r=e._z,a=e._w,o=t._x,c=t._y,l=t._z,h=t._w;return this._x=n*h+a*o+i*l-r*c,this._y=i*h+a*c+r*o-n*l,this._z=r*h+a*l+n*c-i*o,this._w=a*h-n*o-i*c-r*l,this._onChangeCallback(),this}slerp(e,t){if(t===0)return this;if(t===1)return this.copy(e);const n=this._x,i=this._y,r=this._z,a=this._w;let o=a*e._w+n*e._x+i*e._y+r*e._z;if(o<0?(this._w=-e._w,this._x=-e._x,this._y=-e._y,this._z=-e._z,o=-o):this.copy(e),o>=1)return this._w=a,this._x=n,this._y=i,this._z=r,this;const c=1-o*o;if(c<=Number.EPSILON){const p=1-t;return this._w=p*a+t*this._w,this._x=p*n+t*this._x,this._y=p*i+t*this._y,this._z=p*r+t*this._z,this.normalize(),this}const l=Math.sqrt(c),h=Math.atan2(l,o),u=Math.sin((1-t)*h)/l,f=Math.sin(t*h)/l;return this._w=a*u+this._w*f,this._x=n*u+this._x*f,this._y=i*u+this._y*f,this._z=r*u+this._z*f,this._onChangeCallback(),this}slerpQuaternions(e,t,n){return this.copy(e).slerp(t,n)}random(){const e=Math.random(),t=Math.sqrt(1-e),n=Math.sqrt(e),i=2*Math.PI*Math.random(),r=2*Math.PI*Math.random();return this.set(t*Math.cos(i),n*Math.sin(r),n*Math.cos(r),t*Math.sin(i))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,t=0){return this._x=e[t],this._y=e[t+1],this._z=e[t+2],this._w=e[t+3],this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._w,e}fromBufferAttribute(e,t){return this._x=e.getX(t),this._y=e.getY(t),this._z=e.getZ(t),this._w=e.getW(t),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class M{constructor(e=0,t=0,n=0){M.prototype.isVector3=!0,this.x=e,this.y=t,this.z=n}set(e,t,n){return n===void 0&&(n=this.z),this.x=e,this.y=t,this.z=n,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,t){return this.x=e.x*t.x,this.y=e.y*t.y,this.z=e.z*t.z,this}applyEuler(e){return this.applyQuaternion(Mo.setFromEuler(e))}applyAxisAngle(e,t){return this.applyQuaternion(Mo.setFromAxisAngle(e,t))}applyMatrix3(e){const t=this.x,n=this.y,i=this.z,r=e.elements;return this.x=r[0]*t+r[3]*n+r[6]*i,this.y=r[1]*t+r[4]*n+r[7]*i,this.z=r[2]*t+r[5]*n+r[8]*i,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){const t=this.x,n=this.y,i=this.z,r=e.elements,a=1/(r[3]*t+r[7]*n+r[11]*i+r[15]);return this.x=(r[0]*t+r[4]*n+r[8]*i+r[12])*a,this.y=(r[1]*t+r[5]*n+r[9]*i+r[13])*a,this.z=(r[2]*t+r[6]*n+r[10]*i+r[14])*a,this}applyQuaternion(e){const t=this.x,n=this.y,i=this.z,r=e.x,a=e.y,o=e.z,c=e.w,l=2*(a*i-o*n),h=2*(o*t-r*i),u=2*(r*n-a*t);return this.x=t+c*l+a*u-o*h,this.y=n+c*h+o*l-r*u,this.z=i+c*u+r*h-a*l,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){const t=this.x,n=this.y,i=this.z,r=e.elements;return this.x=r[0]*t+r[4]*n+r[8]*i,this.y=r[1]*t+r[5]*n+r[9]*i,this.z=r[2]*t+r[6]*n+r[10]*i,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this.z=Math.max(e.z,Math.min(t.z,this.z)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this.z=Math.max(e,Math.min(t,this.z)),this}clampLength(e,t){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(e,Math.min(t,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,t){const n=e.x,i=e.y,r=e.z,a=t.x,o=t.y,c=t.z;return this.x=i*c-r*o,this.y=r*a-n*c,this.z=n*o-i*a,this}projectOnVector(e){const t=e.lengthSq();if(t===0)return this.set(0,0,0);const n=e.dot(this)/t;return this.copy(e).multiplyScalar(n)}projectOnPlane(e){return yr.copy(this).projectOnVector(e),this.sub(yr)}reflect(e){return this.sub(yr.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const n=this.dot(e)/t;return Math.acos(Mt(n,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,n=this.y-e.y,i=this.z-e.z;return t*t+n*n+i*i}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,t,n){const i=Math.sin(t)*e;return this.x=i*Math.sin(n),this.y=Math.cos(t)*e,this.z=i*Math.cos(n),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,t,n){return this.x=e*Math.sin(t),this.y=n,this.z=e*Math.cos(t),this}setFromMatrixPosition(e){const t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this}setFromMatrixScale(e){const t=this.setFromMatrixColumn(e,0).length(),n=this.setFromMatrixColumn(e,1).length(),i=this.setFromMatrixColumn(e,2).length();return this.x=t,this.y=n,this.z=i,this}setFromMatrixColumn(e,t){return this.fromArray(e.elements,t*4)}setFromMatrix3Column(e,t){return this.fromArray(e.elements,t*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const e=(Math.random()-.5)*2,t=Math.random()*Math.PI*2,n=Math.sqrt(1-e**2);return this.x=n*Math.cos(t),this.y=n*Math.sin(t),this.z=e,this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const yr=new M,Mo=new Xn;class Ln{constructor(e=new M(1/0,1/0,1/0),t=new M(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=t}set(e,t){return this.min.copy(e),this.max.copy(t),this}setFromArray(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t+=3)this.expandByPoint(Zt.fromArray(e,t));return this}setFromBufferAttribute(e){this.makeEmpty();for(let t=0,n=e.count;t<n;t++)this.expandByPoint(Zt.fromBufferAttribute(e,t));return this}setFromPoints(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t++)this.expandByPoint(e[t]);return this}setFromCenterAndSize(e,t){const n=Zt.copy(t).multiplyScalar(.5);return this.min.copy(e).sub(n),this.max.copy(e).add(n),this}setFromObject(e,t=!1){return this.makeEmpty(),this.expandByObject(e,t)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,t=!1){e.updateWorldMatrix(!1,!1);const n=e.geometry;if(n!==void 0){const r=n.getAttribute("position");if(t===!0&&r!==void 0&&e.isInstancedMesh!==!0)for(let a=0,o=r.count;a<o;a++)e.isMesh===!0?e.getVertexPosition(a,Zt):Zt.fromBufferAttribute(r,a),Zt.applyMatrix4(e.matrixWorld),this.expandByPoint(Zt);else e.boundingBox!==void 0?(e.boundingBox===null&&e.computeBoundingBox(),ss.copy(e.boundingBox)):(n.boundingBox===null&&n.computeBoundingBox(),ss.copy(n.boundingBox)),ss.applyMatrix4(e.matrixWorld),this.union(ss)}const i=e.children;for(let r=0,a=i.length;r<a;r++)this.expandByObject(i[r],t);return this}containsPoint(e){return!(e.x<this.min.x||e.x>this.max.x||e.y<this.min.y||e.y>this.max.y||e.z<this.min.z||e.z>this.max.z)}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,t){return t.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return!(e.max.x<this.min.x||e.min.x>this.max.x||e.max.y<this.min.y||e.min.y>this.max.y||e.max.z<this.min.z||e.min.z>this.max.z)}intersectsSphere(e){return this.clampPoint(e.center,Zt),Zt.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let t,n;return e.normal.x>0?(t=e.normal.x*this.min.x,n=e.normal.x*this.max.x):(t=e.normal.x*this.max.x,n=e.normal.x*this.min.x),e.normal.y>0?(t+=e.normal.y*this.min.y,n+=e.normal.y*this.max.y):(t+=e.normal.y*this.max.y,n+=e.normal.y*this.min.y),e.normal.z>0?(t+=e.normal.z*this.min.z,n+=e.normal.z*this.max.z):(t+=e.normal.z*this.max.z,n+=e.normal.z*this.min.z),t<=-e.constant&&n>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(Oi),rs.subVectors(this.max,Oi),Kn.subVectors(e.a,Oi),Jn.subVectors(e.b,Oi),Qn.subVectors(e.c,Oi),_n.subVectors(Jn,Kn),xn.subVectors(Qn,Jn),Nn.subVectors(Kn,Qn);let t=[0,-_n.z,_n.y,0,-xn.z,xn.y,0,-Nn.z,Nn.y,_n.z,0,-_n.x,xn.z,0,-xn.x,Nn.z,0,-Nn.x,-_n.y,_n.x,0,-xn.y,xn.x,0,-Nn.y,Nn.x,0];return!Mr(t,Kn,Jn,Qn,rs)||(t=[1,0,0,0,1,0,0,0,1],!Mr(t,Kn,Jn,Qn,rs))?!1:(as.crossVectors(_n,xn),t=[as.x,as.y,as.z],Mr(t,Kn,Jn,Qn,rs))}clampPoint(e,t){return t.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,Zt).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(Zt).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(an[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),an[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),an[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),an[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),an[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),an[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),an[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),an[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(an),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}}const an=[new M,new M,new M,new M,new M,new M,new M,new M],Zt=new M,ss=new Ln,Kn=new M,Jn=new M,Qn=new M,_n=new M,xn=new M,Nn=new M,Oi=new M,rs=new M,as=new M,In=new M;function Mr(s,e,t,n,i){for(let r=0,a=s.length-3;r<=a;r+=3){In.fromArray(s,r);const o=i.x*Math.abs(In.x)+i.y*Math.abs(In.y)+i.z*Math.abs(In.z),c=e.dot(In),l=t.dot(In),h=n.dot(In);if(Math.max(-Math.max(c,l,h),Math.min(c,l,h))>o)return!1}return!0}const Ah=new Ln,Ni=new M,br=new M;class Js{constructor(e=new M,t=-1){this.isSphere=!0,this.center=e,this.radius=t}set(e,t){return this.center.copy(e),this.radius=t,this}setFromPoints(e,t){const n=this.center;t!==void 0?n.copy(t):Ah.setFromPoints(e).getCenter(n);let i=0;for(let r=0,a=e.length;r<a;r++)i=Math.max(i,n.distanceToSquared(e[r]));return this.radius=Math.sqrt(i),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){const t=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=t*t}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,t){const n=this.center.distanceToSquared(e);return t.copy(e),n>this.radius*this.radius&&(t.sub(this.center).normalize(),t.multiplyScalar(this.radius).add(this.center)),t}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;Ni.subVectors(e,this.center);const t=Ni.lengthSq();if(t>this.radius*this.radius){const n=Math.sqrt(t),i=(n-this.radius)*.5;this.center.addScaledVector(Ni,i/n),this.radius+=i}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(br.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(Ni.copy(e.center).add(br)),this.expandByPoint(Ni.copy(e.center).sub(br))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}}const on=new M,Sr=new M,os=new M,yn=new M,Er=new M,cs=new M,wr=new M;class Qs{constructor(e=new M,t=new M(0,0,-1)){this.origin=e,this.direction=t}set(e,t){return this.origin.copy(e),this.direction.copy(t),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,t){return t.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,on)),this}closestPointToPoint(e,t){t.subVectors(e,this.origin);const n=t.dot(this.direction);return n<0?t.copy(this.origin):t.copy(this.origin).addScaledVector(this.direction,n)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){const t=on.subVectors(e,this.origin).dot(this.direction);return t<0?this.origin.distanceToSquared(e):(on.copy(this.origin).addScaledVector(this.direction,t),on.distanceToSquared(e))}distanceSqToSegment(e,t,n,i){Sr.copy(e).add(t).multiplyScalar(.5),os.copy(t).sub(e).normalize(),yn.copy(this.origin).sub(Sr);const r=e.distanceTo(t)*.5,a=-this.direction.dot(os),o=yn.dot(this.direction),c=-yn.dot(os),l=yn.lengthSq(),h=Math.abs(1-a*a);let u,f,p,g;if(h>0)if(u=a*c-o,f=a*o-c,g=r*h,u>=0)if(f>=-g)if(f<=g){const v=1/h;u*=v,f*=v,p=u*(u+a*f+2*o)+f*(a*u+f+2*c)+l}else f=r,u=Math.max(0,-(a*f+o)),p=-u*u+f*(f+2*c)+l;else f=-r,u=Math.max(0,-(a*f+o)),p=-u*u+f*(f+2*c)+l;else f<=-g?(u=Math.max(0,-(-a*r+o)),f=u>0?-r:Math.min(Math.max(-r,-c),r),p=-u*u+f*(f+2*c)+l):f<=g?(u=0,f=Math.min(Math.max(-r,-c),r),p=f*(f+2*c)+l):(u=Math.max(0,-(a*r+o)),f=u>0?r:Math.min(Math.max(-r,-c),r),p=-u*u+f*(f+2*c)+l);else f=a>0?-r:r,u=Math.max(0,-(a*f+o)),p=-u*u+f*(f+2*c)+l;return n&&n.copy(this.origin).addScaledVector(this.direction,u),i&&i.copy(Sr).addScaledVector(os,f),p}intersectSphere(e,t){on.subVectors(e.center,this.origin);const n=on.dot(this.direction),i=on.dot(on)-n*n,r=e.radius*e.radius;if(i>r)return null;const a=Math.sqrt(r-i),o=n-a,c=n+a;return c<0?null:o<0?this.at(c,t):this.at(o,t)}intersectsSphere(e){return this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){const t=e.normal.dot(this.direction);if(t===0)return e.distanceToPoint(this.origin)===0?0:null;const n=-(this.origin.dot(e.normal)+e.constant)/t;return n>=0?n:null}intersectPlane(e,t){const n=this.distanceToPlane(e);return n===null?null:this.at(n,t)}intersectsPlane(e){const t=e.distanceToPoint(this.origin);return t===0||e.normal.dot(this.direction)*t<0}intersectBox(e,t){let n,i,r,a,o,c;const l=1/this.direction.x,h=1/this.direction.y,u=1/this.direction.z,f=this.origin;return l>=0?(n=(e.min.x-f.x)*l,i=(e.max.x-f.x)*l):(n=(e.max.x-f.x)*l,i=(e.min.x-f.x)*l),h>=0?(r=(e.min.y-f.y)*h,a=(e.max.y-f.y)*h):(r=(e.max.y-f.y)*h,a=(e.min.y-f.y)*h),n>a||r>i||((r>n||isNaN(n))&&(n=r),(a<i||isNaN(i))&&(i=a),u>=0?(o=(e.min.z-f.z)*u,c=(e.max.z-f.z)*u):(o=(e.max.z-f.z)*u,c=(e.min.z-f.z)*u),n>c||o>i)||((o>n||n!==n)&&(n=o),(c<i||i!==i)&&(i=c),i<0)?null:this.at(n>=0?n:i,t)}intersectsBox(e){return this.intersectBox(e,on)!==null}intersectTriangle(e,t,n,i,r){Er.subVectors(t,e),cs.subVectors(n,e),wr.crossVectors(Er,cs);let a=this.direction.dot(wr),o;if(a>0){if(i)return null;o=1}else if(a<0)o=-1,a=-a;else return null;yn.subVectors(this.origin,e);const c=o*this.direction.dot(cs.crossVectors(yn,cs));if(c<0)return null;const l=o*this.direction.dot(Er.cross(yn));if(l<0||c+l>a)return null;const h=-o*yn.dot(wr);return h<0?null:this.at(h/a,r)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class at{constructor(e,t,n,i,r,a,o,c,l,h,u,f,p,g,v,m){at.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,t,n,i,r,a,o,c,l,h,u,f,p,g,v,m)}set(e,t,n,i,r,a,o,c,l,h,u,f,p,g,v,m){const d=this.elements;return d[0]=e,d[4]=t,d[8]=n,d[12]=i,d[1]=r,d[5]=a,d[9]=o,d[13]=c,d[2]=l,d[6]=h,d[10]=u,d[14]=f,d[3]=p,d[7]=g,d[11]=v,d[15]=m,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new at().fromArray(this.elements)}copy(e){const t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],t[9]=n[9],t[10]=n[10],t[11]=n[11],t[12]=n[12],t[13]=n[13],t[14]=n[14],t[15]=n[15],this}copyPosition(e){const t=this.elements,n=e.elements;return t[12]=n[12],t[13]=n[13],t[14]=n[14],this}setFromMatrix3(e){const t=e.elements;return this.set(t[0],t[3],t[6],0,t[1],t[4],t[7],0,t[2],t[5],t[8],0,0,0,0,1),this}extractBasis(e,t,n){return e.setFromMatrixColumn(this,0),t.setFromMatrixColumn(this,1),n.setFromMatrixColumn(this,2),this}makeBasis(e,t,n){return this.set(e.x,t.x,n.x,0,e.y,t.y,n.y,0,e.z,t.z,n.z,0,0,0,0,1),this}extractRotation(e){const t=this.elements,n=e.elements,i=1/ei.setFromMatrixColumn(e,0).length(),r=1/ei.setFromMatrixColumn(e,1).length(),a=1/ei.setFromMatrixColumn(e,2).length();return t[0]=n[0]*i,t[1]=n[1]*i,t[2]=n[2]*i,t[3]=0,t[4]=n[4]*r,t[5]=n[5]*r,t[6]=n[6]*r,t[7]=0,t[8]=n[8]*a,t[9]=n[9]*a,t[10]=n[10]*a,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromEuler(e){const t=this.elements,n=e.x,i=e.y,r=e.z,a=Math.cos(n),o=Math.sin(n),c=Math.cos(i),l=Math.sin(i),h=Math.cos(r),u=Math.sin(r);if(e.order==="XYZ"){const f=a*h,p=a*u,g=o*h,v=o*u;t[0]=c*h,t[4]=-c*u,t[8]=l,t[1]=p+g*l,t[5]=f-v*l,t[9]=-o*c,t[2]=v-f*l,t[6]=g+p*l,t[10]=a*c}else if(e.order==="YXZ"){const f=c*h,p=c*u,g=l*h,v=l*u;t[0]=f+v*o,t[4]=g*o-p,t[8]=a*l,t[1]=a*u,t[5]=a*h,t[9]=-o,t[2]=p*o-g,t[6]=v+f*o,t[10]=a*c}else if(e.order==="ZXY"){const f=c*h,p=c*u,g=l*h,v=l*u;t[0]=f-v*o,t[4]=-a*u,t[8]=g+p*o,t[1]=p+g*o,t[5]=a*h,t[9]=v-f*o,t[2]=-a*l,t[6]=o,t[10]=a*c}else if(e.order==="ZYX"){const f=a*h,p=a*u,g=o*h,v=o*u;t[0]=c*h,t[4]=g*l-p,t[8]=f*l+v,t[1]=c*u,t[5]=v*l+f,t[9]=p*l-g,t[2]=-l,t[6]=o*c,t[10]=a*c}else if(e.order==="YZX"){const f=a*c,p=a*l,g=o*c,v=o*l;t[0]=c*h,t[4]=v-f*u,t[8]=g*u+p,t[1]=u,t[5]=a*h,t[9]=-o*h,t[2]=-l*h,t[6]=p*u+g,t[10]=f-v*u}else if(e.order==="XZY"){const f=a*c,p=a*l,g=o*c,v=o*l;t[0]=c*h,t[4]=-u,t[8]=l*h,t[1]=f*u+v,t[5]=a*h,t[9]=p*u-g,t[2]=g*u-p,t[6]=o*h,t[10]=v*u+f}return t[3]=0,t[7]=0,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromQuaternion(e){return this.compose(Ch,e,Rh)}lookAt(e,t,n){const i=this.elements;return kt.subVectors(e,t),kt.lengthSq()===0&&(kt.z=1),kt.normalize(),Mn.crossVectors(n,kt),Mn.lengthSq()===0&&(Math.abs(n.z)===1?kt.x+=1e-4:kt.z+=1e-4,kt.normalize(),Mn.crossVectors(n,kt)),Mn.normalize(),ls.crossVectors(kt,Mn),i[0]=Mn.x,i[4]=ls.x,i[8]=kt.x,i[1]=Mn.y,i[5]=ls.y,i[9]=kt.y,i[2]=Mn.z,i[6]=ls.z,i[10]=kt.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const n=e.elements,i=t.elements,r=this.elements,a=n[0],o=n[4],c=n[8],l=n[12],h=n[1],u=n[5],f=n[9],p=n[13],g=n[2],v=n[6],m=n[10],d=n[14],_=n[3],x=n[7],y=n[11],R=n[15],E=i[0],C=i[4],N=i[8],b=i[12],T=i[1],I=i[5],G=i[9],Z=i[13],D=i[2],B=i[6],z=i[10],$=i[14],K=i[3],J=i[7],Q=i[11],ne=i[15];return r[0]=a*E+o*T+c*D+l*K,r[4]=a*C+o*I+c*B+l*J,r[8]=a*N+o*G+c*z+l*Q,r[12]=a*b+o*Z+c*$+l*ne,r[1]=h*E+u*T+f*D+p*K,r[5]=h*C+u*I+f*B+p*J,r[9]=h*N+u*G+f*z+p*Q,r[13]=h*b+u*Z+f*$+p*ne,r[2]=g*E+v*T+m*D+d*K,r[6]=g*C+v*I+m*B+d*J,r[10]=g*N+v*G+m*z+d*Q,r[14]=g*b+v*Z+m*$+d*ne,r[3]=_*E+x*T+y*D+R*K,r[7]=_*C+x*I+y*B+R*J,r[11]=_*N+x*G+y*z+R*Q,r[15]=_*b+x*Z+y*$+R*ne,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[4]*=e,t[8]*=e,t[12]*=e,t[1]*=e,t[5]*=e,t[9]*=e,t[13]*=e,t[2]*=e,t[6]*=e,t[10]*=e,t[14]*=e,t[3]*=e,t[7]*=e,t[11]*=e,t[15]*=e,this}determinant(){const e=this.elements,t=e[0],n=e[4],i=e[8],r=e[12],a=e[1],o=e[5],c=e[9],l=e[13],h=e[2],u=e[6],f=e[10],p=e[14],g=e[3],v=e[7],m=e[11],d=e[15];return g*(+r*c*u-i*l*u-r*o*f+n*l*f+i*o*p-n*c*p)+v*(+t*c*p-t*l*f+r*a*f-i*a*p+i*l*h-r*c*h)+m*(+t*l*u-t*o*p-r*a*u+n*a*p+r*o*h-n*l*h)+d*(-i*o*h-t*c*u+t*o*f+i*a*u-n*a*f+n*c*h)}transpose(){const e=this.elements;let t;return t=e[1],e[1]=e[4],e[4]=t,t=e[2],e[2]=e[8],e[8]=t,t=e[6],e[6]=e[9],e[9]=t,t=e[3],e[3]=e[12],e[12]=t,t=e[7],e[7]=e[13],e[13]=t,t=e[11],e[11]=e[14],e[14]=t,this}setPosition(e,t,n){const i=this.elements;return e.isVector3?(i[12]=e.x,i[13]=e.y,i[14]=e.z):(i[12]=e,i[13]=t,i[14]=n),this}invert(){const e=this.elements,t=e[0],n=e[1],i=e[2],r=e[3],a=e[4],o=e[5],c=e[6],l=e[7],h=e[8],u=e[9],f=e[10],p=e[11],g=e[12],v=e[13],m=e[14],d=e[15],_=u*m*l-v*f*l+v*c*p-o*m*p-u*c*d+o*f*d,x=g*f*l-h*m*l-g*c*p+a*m*p+h*c*d-a*f*d,y=h*v*l-g*u*l+g*o*p-a*v*p-h*o*d+a*u*d,R=g*u*c-h*v*c-g*o*f+a*v*f+h*o*m-a*u*m,E=t*_+n*x+i*y+r*R;if(E===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const C=1/E;return e[0]=_*C,e[1]=(v*f*r-u*m*r-v*i*p+n*m*p+u*i*d-n*f*d)*C,e[2]=(o*m*r-v*c*r+v*i*l-n*m*l-o*i*d+n*c*d)*C,e[3]=(u*c*r-o*f*r-u*i*l+n*f*l+o*i*p-n*c*p)*C,e[4]=x*C,e[5]=(h*m*r-g*f*r+g*i*p-t*m*p-h*i*d+t*f*d)*C,e[6]=(g*c*r-a*m*r-g*i*l+t*m*l+a*i*d-t*c*d)*C,e[7]=(a*f*r-h*c*r+h*i*l-t*f*l-a*i*p+t*c*p)*C,e[8]=y*C,e[9]=(g*u*r-h*v*r-g*n*p+t*v*p+h*n*d-t*u*d)*C,e[10]=(a*v*r-g*o*r+g*n*l-t*v*l-a*n*d+t*o*d)*C,e[11]=(h*o*r-a*u*r-h*n*l+t*u*l+a*n*p-t*o*p)*C,e[12]=R*C,e[13]=(h*v*i-g*u*i+g*n*f-t*v*f-h*n*m+t*u*m)*C,e[14]=(g*o*i-a*v*i-g*n*c+t*v*c+a*n*m-t*o*m)*C,e[15]=(a*u*i-h*o*i+h*n*c-t*u*c-a*n*f+t*o*f)*C,this}scale(e){const t=this.elements,n=e.x,i=e.y,r=e.z;return t[0]*=n,t[4]*=i,t[8]*=r,t[1]*=n,t[5]*=i,t[9]*=r,t[2]*=n,t[6]*=i,t[10]*=r,t[3]*=n,t[7]*=i,t[11]*=r,this}getMaxScaleOnAxis(){const e=this.elements,t=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],n=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],i=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(t,n,i))}makeTranslation(e,t,n){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,t,0,0,1,n,0,0,0,1),this}makeRotationX(e){const t=Math.cos(e),n=Math.sin(e);return this.set(1,0,0,0,0,t,-n,0,0,n,t,0,0,0,0,1),this}makeRotationY(e){const t=Math.cos(e),n=Math.sin(e);return this.set(t,0,n,0,0,1,0,0,-n,0,t,0,0,0,0,1),this}makeRotationZ(e){const t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,0,n,t,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,t){const n=Math.cos(t),i=Math.sin(t),r=1-n,a=e.x,o=e.y,c=e.z,l=r*a,h=r*o;return this.set(l*a+n,l*o-i*c,l*c+i*o,0,l*o+i*c,h*o+n,h*c-i*a,0,l*c-i*o,h*c+i*a,r*c*c+n,0,0,0,0,1),this}makeScale(e,t,n){return this.set(e,0,0,0,0,t,0,0,0,0,n,0,0,0,0,1),this}makeShear(e,t,n,i,r,a){return this.set(1,n,r,0,e,1,a,0,t,i,1,0,0,0,0,1),this}compose(e,t,n){const i=this.elements,r=t._x,a=t._y,o=t._z,c=t._w,l=r+r,h=a+a,u=o+o,f=r*l,p=r*h,g=r*u,v=a*h,m=a*u,d=o*u,_=c*l,x=c*h,y=c*u,R=n.x,E=n.y,C=n.z;return i[0]=(1-(v+d))*R,i[1]=(p+y)*R,i[2]=(g-x)*R,i[3]=0,i[4]=(p-y)*E,i[5]=(1-(f+d))*E,i[6]=(m+_)*E,i[7]=0,i[8]=(g+x)*C,i[9]=(m-_)*C,i[10]=(1-(f+v))*C,i[11]=0,i[12]=e.x,i[13]=e.y,i[14]=e.z,i[15]=1,this}decompose(e,t,n){const i=this.elements;let r=ei.set(i[0],i[1],i[2]).length();const a=ei.set(i[4],i[5],i[6]).length(),o=ei.set(i[8],i[9],i[10]).length();this.determinant()<0&&(r=-r),e.x=i[12],e.y=i[13],e.z=i[14],$t.copy(this);const l=1/r,h=1/a,u=1/o;return $t.elements[0]*=l,$t.elements[1]*=l,$t.elements[2]*=l,$t.elements[4]*=h,$t.elements[5]*=h,$t.elements[6]*=h,$t.elements[8]*=u,$t.elements[9]*=u,$t.elements[10]*=u,t.setFromRotationMatrix($t),n.x=r,n.y=a,n.z=o,this}makePerspective(e,t,n,i,r,a,o=mn){const c=this.elements,l=2*r/(t-e),h=2*r/(n-i),u=(t+e)/(t-e),f=(n+i)/(n-i);let p,g;if(o===mn)p=-(a+r)/(a-r),g=-2*a*r/(a-r);else if(o===Hs)p=-a/(a-r),g=-a*r/(a-r);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+o);return c[0]=l,c[4]=0,c[8]=u,c[12]=0,c[1]=0,c[5]=h,c[9]=f,c[13]=0,c[2]=0,c[6]=0,c[10]=p,c[14]=g,c[3]=0,c[7]=0,c[11]=-1,c[15]=0,this}makeOrthographic(e,t,n,i,r,a,o=mn){const c=this.elements,l=1/(t-e),h=1/(n-i),u=1/(a-r),f=(t+e)*l,p=(n+i)*h;let g,v;if(o===mn)g=(a+r)*u,v=-2*u;else if(o===Hs)g=r*u,v=-1*u;else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+o);return c[0]=2*l,c[4]=0,c[8]=0,c[12]=-f,c[1]=0,c[5]=2*h,c[9]=0,c[13]=-p,c[2]=0,c[6]=0,c[10]=v,c[14]=-g,c[3]=0,c[7]=0,c[11]=0,c[15]=1,this}equals(e){const t=this.elements,n=e.elements;for(let i=0;i<16;i++)if(t[i]!==n[i])return!1;return!0}fromArray(e,t=0){for(let n=0;n<16;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){const n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e[t+9]=n[9],e[t+10]=n[10],e[t+11]=n[11],e[t+12]=n[12],e[t+13]=n[13],e[t+14]=n[14],e[t+15]=n[15],e}}const ei=new M,$t=new at,Ch=new M(0,0,0),Rh=new M(1,1,1),Mn=new M,ls=new M,kt=new M,bo=new at,So=new Xn;class er{constructor(e=0,t=0,n=0,i=er.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=t,this._z=n,this._order=i}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,t,n,i=this._order){return this._x=e,this._y=t,this._z=n,this._order=i,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,t=this._order,n=!0){const i=e.elements,r=i[0],a=i[4],o=i[8],c=i[1],l=i[5],h=i[9],u=i[2],f=i[6],p=i[10];switch(t){case"XYZ":this._y=Math.asin(Mt(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(-h,p),this._z=Math.atan2(-a,r)):(this._x=Math.atan2(f,l),this._z=0);break;case"YXZ":this._x=Math.asin(-Mt(h,-1,1)),Math.abs(h)<.9999999?(this._y=Math.atan2(o,p),this._z=Math.atan2(c,l)):(this._y=Math.atan2(-u,r),this._z=0);break;case"ZXY":this._x=Math.asin(Mt(f,-1,1)),Math.abs(f)<.9999999?(this._y=Math.atan2(-u,p),this._z=Math.atan2(-a,l)):(this._y=0,this._z=Math.atan2(c,r));break;case"ZYX":this._y=Math.asin(-Mt(u,-1,1)),Math.abs(u)<.9999999?(this._x=Math.atan2(f,p),this._z=Math.atan2(c,r)):(this._x=0,this._z=Math.atan2(-a,l));break;case"YZX":this._z=Math.asin(Mt(c,-1,1)),Math.abs(c)<.9999999?(this._x=Math.atan2(-h,l),this._y=Math.atan2(-u,r)):(this._x=0,this._y=Math.atan2(o,p));break;case"XZY":this._z=Math.asin(-Mt(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(f,l),this._y=Math.atan2(o,r)):(this._x=Math.atan2(-h,p),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+t)}return this._order=t,n===!0&&this._onChangeCallback(),this}setFromQuaternion(e,t,n){return bo.makeRotationFromQuaternion(e),this.setFromRotationMatrix(bo,t,n)}setFromVector3(e,t=this._order){return this.set(e.x,e.y,e.z,t)}reorder(e){return So.setFromEuler(this),this.setFromQuaternion(So,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}er.DEFAULT_ORDER="XYZ";class _a{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}}let Ph=0;const Eo=new M,ti=new Xn,cn=new at,hs=new M,Ii=new M,Lh=new M,Dh=new Xn,wo=new M(1,0,0),To=new M(0,1,0),Ao=new M(0,0,1),Oh={type:"added"},Nh={type:"removed"};class gt extends qn{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:Ph++}),this.uuid=gn(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=gt.DEFAULT_UP.clone();const e=new M,t=new er,n=new Xn,i=new M(1,1,1);function r(){n.setFromEuler(t,!1)}function a(){t.setFromQuaternion(n,void 0,!1)}t._onChange(r),n._onChange(a),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:t},quaternion:{configurable:!0,enumerable:!0,value:n},scale:{configurable:!0,enumerable:!0,value:i},modelViewMatrix:{value:new at},normalMatrix:{value:new Ye}}),this.matrix=new at,this.matrixWorld=new at,this.matrixAutoUpdate=gt.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=gt.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new _a,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,t){this.quaternion.setFromAxisAngle(e,t)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,t){return ti.setFromAxisAngle(e,t),this.quaternion.multiply(ti),this}rotateOnWorldAxis(e,t){return ti.setFromAxisAngle(e,t),this.quaternion.premultiply(ti),this}rotateX(e){return this.rotateOnAxis(wo,e)}rotateY(e){return this.rotateOnAxis(To,e)}rotateZ(e){return this.rotateOnAxis(Ao,e)}translateOnAxis(e,t){return Eo.copy(e).applyQuaternion(this.quaternion),this.position.add(Eo.multiplyScalar(t)),this}translateX(e){return this.translateOnAxis(wo,e)}translateY(e){return this.translateOnAxis(To,e)}translateZ(e){return this.translateOnAxis(Ao,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(cn.copy(this.matrixWorld).invert())}lookAt(e,t,n){e.isVector3?hs.copy(e):hs.set(e,t,n);const i=this.parent;this.updateWorldMatrix(!0,!1),Ii.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?cn.lookAt(Ii,hs,this.up):cn.lookAt(hs,Ii,this.up),this.quaternion.setFromRotationMatrix(cn),i&&(cn.extractRotation(i.matrixWorld),ti.setFromRotationMatrix(cn),this.quaternion.premultiply(ti.invert()))}add(e){if(arguments.length>1){for(let t=0;t<arguments.length;t++)this.add(arguments[t]);return this}return e===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.parent!==null&&e.parent.remove(e),e.parent=this,this.children.push(e),e.dispatchEvent(Oh)):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.remove(arguments[n]);return this}const t=this.children.indexOf(e);return t!==-1&&(e.parent=null,this.children.splice(t,1),e.dispatchEvent(Nh)),this}removeFromParent(){const e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),cn.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),cn.multiply(e.parent.matrixWorld)),e.applyMatrix4(cn),this.add(e),e.updateWorldMatrix(!1,!0),this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,t){if(this[e]===t)return this;for(let n=0,i=this.children.length;n<i;n++){const a=this.children[n].getObjectByProperty(e,t);if(a!==void 0)return a}}getObjectsByProperty(e,t,n=[]){this[e]===t&&n.push(this);const i=this.children;for(let r=0,a=i.length;r<a;r++)i[r].getObjectsByProperty(e,t,n);return n}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Ii,e,Lh),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Ii,Dh,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);const t=this.matrixWorld.elements;return e.set(t[8],t[9],t[10]).normalize()}raycast(){}traverse(e){e(this);const t=this.children;for(let n=0,i=t.length;n<i;n++)t[n].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);const t=this.children;for(let n=0,i=t.length;n<i;n++)t[n].traverseVisible(e)}traverseAncestors(e){const t=this.parent;t!==null&&(e(t),t.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix),this.matrixWorldNeedsUpdate=!1,e=!0);const t=this.children;for(let n=0,i=t.length;n<i;n++){const r=t[n];(r.matrixWorldAutoUpdate===!0||e===!0)&&r.updateMatrixWorld(e)}}updateWorldMatrix(e,t){const n=this.parent;if(e===!0&&n!==null&&n.matrixWorldAutoUpdate===!0&&n.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix),t===!0){const i=this.children;for(let r=0,a=i.length;r<a;r++){const o=i[r];o.matrixWorldAutoUpdate===!0&&o.updateWorldMatrix(!1,!0)}}}toJSON(e){const t=e===void 0||typeof e=="string",n={};t&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},n.metadata={version:4.6,type:"Object",generator:"Object3D.toJSON"});const i={};i.uuid=this.uuid,i.type=this.type,this.name!==""&&(i.name=this.name),this.castShadow===!0&&(i.castShadow=!0),this.receiveShadow===!0&&(i.receiveShadow=!0),this.visible===!1&&(i.visible=!1),this.frustumCulled===!1&&(i.frustumCulled=!1),this.renderOrder!==0&&(i.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(i.userData=this.userData),i.layers=this.layers.mask,i.matrix=this.matrix.toArray(),i.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(i.matrixAutoUpdate=!1),this.isInstancedMesh&&(i.type="InstancedMesh",i.count=this.count,i.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(i.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(i.type="BatchedMesh",i.perObjectFrustumCulled=this.perObjectFrustumCulled,i.sortObjects=this.sortObjects,i.drawRanges=this._drawRanges,i.reservedRanges=this._reservedRanges,i.visibility=this._visibility,i.active=this._active,i.bounds=this._bounds.map(o=>({boxInitialized:o.boxInitialized,boxMin:o.box.min.toArray(),boxMax:o.box.max.toArray(),sphereInitialized:o.sphereInitialized,sphereRadius:o.sphere.radius,sphereCenter:o.sphere.center.toArray()})),i.maxGeometryCount=this._maxGeometryCount,i.maxVertexCount=this._maxVertexCount,i.maxIndexCount=this._maxIndexCount,i.geometryInitialized=this._geometryInitialized,i.geometryCount=this._geometryCount,i.matricesTexture=this._matricesTexture.toJSON(e),this.boundingSphere!==null&&(i.boundingSphere={center:i.boundingSphere.center.toArray(),radius:i.boundingSphere.radius}),this.boundingBox!==null&&(i.boundingBox={min:i.boundingBox.min.toArray(),max:i.boundingBox.max.toArray()}));function r(o,c){return o[c.uuid]===void 0&&(o[c.uuid]=c.toJSON(e)),c.uuid}if(this.isScene)this.background&&(this.background.isColor?i.background=this.background.toJSON():this.background.isTexture&&(i.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(i.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){i.geometry=r(e.geometries,this.geometry);const o=this.geometry.parameters;if(o!==void 0&&o.shapes!==void 0){const c=o.shapes;if(Array.isArray(c))for(let l=0,h=c.length;l<h;l++){const u=c[l];r(e.shapes,u)}else r(e.shapes,c)}}if(this.isSkinnedMesh&&(i.bindMode=this.bindMode,i.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(r(e.skeletons,this.skeleton),i.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const o=[];for(let c=0,l=this.material.length;c<l;c++)o.push(r(e.materials,this.material[c]));i.material=o}else i.material=r(e.materials,this.material);if(this.children.length>0){i.children=[];for(let o=0;o<this.children.length;o++)i.children.push(this.children[o].toJSON(e).object)}if(this.animations.length>0){i.animations=[];for(let o=0;o<this.animations.length;o++){const c=this.animations[o];i.animations.push(r(e.animations,c))}}if(t){const o=a(e.geometries),c=a(e.materials),l=a(e.textures),h=a(e.images),u=a(e.shapes),f=a(e.skeletons),p=a(e.animations),g=a(e.nodes);o.length>0&&(n.geometries=o),c.length>0&&(n.materials=c),l.length>0&&(n.textures=l),h.length>0&&(n.images=h),u.length>0&&(n.shapes=u),f.length>0&&(n.skeletons=f),p.length>0&&(n.animations=p),g.length>0&&(n.nodes=g)}return n.object=i,n;function a(o){const c=[];for(const l in o){const h=o[l];delete h.metadata,c.push(h)}return c}}clone(e){return new this.constructor().copy(this,e)}copy(e,t=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),t===!0)for(let n=0;n<e.children.length;n++){const i=e.children[n];this.add(i.clone())}return this}}gt.DEFAULT_UP=new M(0,1,0);gt.DEFAULT_MATRIX_AUTO_UPDATE=!0;gt.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;const Kt=new M,ln=new M,Tr=new M,hn=new M,ni=new M,ii=new M,Co=new M,Ar=new M,Cr=new M,Rr=new M;let us=!1;class Wt{constructor(e=new M,t=new M,n=new M){this.a=e,this.b=t,this.c=n}static getNormal(e,t,n,i){i.subVectors(n,t),Kt.subVectors(e,t),i.cross(Kt);const r=i.lengthSq();return r>0?i.multiplyScalar(1/Math.sqrt(r)):i.set(0,0,0)}static getBarycoord(e,t,n,i,r){Kt.subVectors(i,t),ln.subVectors(n,t),Tr.subVectors(e,t);const a=Kt.dot(Kt),o=Kt.dot(ln),c=Kt.dot(Tr),l=ln.dot(ln),h=ln.dot(Tr),u=a*l-o*o;if(u===0)return r.set(0,0,0),null;const f=1/u,p=(l*c-o*h)*f,g=(a*h-o*c)*f;return r.set(1-p-g,g,p)}static containsPoint(e,t,n,i){return this.getBarycoord(e,t,n,i,hn)===null?!1:hn.x>=0&&hn.y>=0&&hn.x+hn.y<=1}static getUV(e,t,n,i,r,a,o,c){return us===!1&&(console.warn("THREE.Triangle.getUV() has been renamed to THREE.Triangle.getInterpolation()."),us=!0),this.getInterpolation(e,t,n,i,r,a,o,c)}static getInterpolation(e,t,n,i,r,a,o,c){return this.getBarycoord(e,t,n,i,hn)===null?(c.x=0,c.y=0,"z"in c&&(c.z=0),"w"in c&&(c.w=0),null):(c.setScalar(0),c.addScaledVector(r,hn.x),c.addScaledVector(a,hn.y),c.addScaledVector(o,hn.z),c)}static isFrontFacing(e,t,n,i){return Kt.subVectors(n,t),ln.subVectors(e,t),Kt.cross(ln).dot(i)<0}set(e,t,n){return this.a.copy(e),this.b.copy(t),this.c.copy(n),this}setFromPointsAndIndices(e,t,n,i){return this.a.copy(e[t]),this.b.copy(e[n]),this.c.copy(e[i]),this}setFromAttributeAndIndices(e,t,n,i){return this.a.fromBufferAttribute(e,t),this.b.fromBufferAttribute(e,n),this.c.fromBufferAttribute(e,i),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return Kt.subVectors(this.c,this.b),ln.subVectors(this.a,this.b),Kt.cross(ln).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return Wt.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,t){return Wt.getBarycoord(e,this.a,this.b,this.c,t)}getUV(e,t,n,i,r){return us===!1&&(console.warn("THREE.Triangle.getUV() has been renamed to THREE.Triangle.getInterpolation()."),us=!0),Wt.getInterpolation(e,this.a,this.b,this.c,t,n,i,r)}getInterpolation(e,t,n,i,r){return Wt.getInterpolation(e,this.a,this.b,this.c,t,n,i,r)}containsPoint(e){return Wt.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return Wt.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,t){const n=this.a,i=this.b,r=this.c;let a,o;ni.subVectors(i,n),ii.subVectors(r,n),Ar.subVectors(e,n);const c=ni.dot(Ar),l=ii.dot(Ar);if(c<=0&&l<=0)return t.copy(n);Cr.subVectors(e,i);const h=ni.dot(Cr),u=ii.dot(Cr);if(h>=0&&u<=h)return t.copy(i);const f=c*u-h*l;if(f<=0&&c>=0&&h<=0)return a=c/(c-h),t.copy(n).addScaledVector(ni,a);Rr.subVectors(e,r);const p=ni.dot(Rr),g=ii.dot(Rr);if(g>=0&&p<=g)return t.copy(r);const v=p*l-c*g;if(v<=0&&l>=0&&g<=0)return o=l/(l-g),t.copy(n).addScaledVector(ii,o);const m=h*g-p*u;if(m<=0&&u-h>=0&&p-g>=0)return Co.subVectors(r,i),o=(u-h)/(u-h+(p-g)),t.copy(i).addScaledVector(Co,o);const d=1/(m+v+f);return a=v*d,o=f*d,t.copy(n).addScaledVector(ni,a).addScaledVector(ii,o)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}}const kc={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},bn={h:0,s:0,l:0},ds={h:0,s:0,l:0};function Pr(s,e,t){return t<0&&(t+=1),t>1&&(t-=1),t<1/6?s+(e-s)*6*t:t<1/2?e:t<2/3?s+(e-s)*6*(2/3-t):s}class Ue{constructor(e,t,n){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,t,n)}set(e,t,n){if(t===void 0&&n===void 0){const i=e;i&&i.isColor?this.copy(i):typeof i=="number"?this.setHex(i):typeof i=="string"&&this.setStyle(i)}else this.setRGB(e,t,n);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,t=Et){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,Qe.toWorkingColorSpace(this,t),this}setRGB(e,t,n,i=Qe.workingColorSpace){return this.r=e,this.g=t,this.b=n,Qe.toWorkingColorSpace(this,i),this}setHSL(e,t,n,i=Qe.workingColorSpace){if(e=xh(e,1),t=Mt(t,0,1),n=Mt(n,0,1),t===0)this.r=this.g=this.b=n;else{const r=n<=.5?n*(1+t):n+t-n*t,a=2*n-r;this.r=Pr(a,r,e+1/3),this.g=Pr(a,r,e),this.b=Pr(a,r,e-1/3)}return Qe.toWorkingColorSpace(this,i),this}setStyle(e,t=Et){function n(r){r!==void 0&&parseFloat(r)<1&&console.warn("THREE.Color: Alpha component of "+e+" will be ignored.")}let i;if(i=/^(\w+)\(([^\)]*)\)/.exec(e)){let r;const a=i[1],o=i[2];switch(a){case"rgb":case"rgba":if(r=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(r[4]),this.setRGB(Math.min(255,parseInt(r[1],10))/255,Math.min(255,parseInt(r[2],10))/255,Math.min(255,parseInt(r[3],10))/255,t);if(r=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(r[4]),this.setRGB(Math.min(100,parseInt(r[1],10))/100,Math.min(100,parseInt(r[2],10))/100,Math.min(100,parseInt(r[3],10))/100,t);break;case"hsl":case"hsla":if(r=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(r[4]),this.setHSL(parseFloat(r[1])/360,parseFloat(r[2])/100,parseFloat(r[3])/100,t);break;default:console.warn("THREE.Color: Unknown color model "+e)}}else if(i=/^\#([A-Fa-f\d]+)$/.exec(e)){const r=i[1],a=r.length;if(a===3)return this.setRGB(parseInt(r.charAt(0),16)/15,parseInt(r.charAt(1),16)/15,parseInt(r.charAt(2),16)/15,t);if(a===6)return this.setHex(parseInt(r,16),t);console.warn("THREE.Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,t);return this}setColorName(e,t=Et){const n=kc[e.toLowerCase()];return n!==void 0?this.setHex(n,t):console.warn("THREE.Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=Mi(e.r),this.g=Mi(e.g),this.b=Mi(e.b),this}copyLinearToSRGB(e){return this.r=_r(e.r),this.g=_r(e.g),this.b=_r(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=Et){return Qe.fromWorkingColorSpace(Ct.copy(this),e),Math.round(Mt(Ct.r*255,0,255))*65536+Math.round(Mt(Ct.g*255,0,255))*256+Math.round(Mt(Ct.b*255,0,255))}getHexString(e=Et){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,t=Qe.workingColorSpace){Qe.fromWorkingColorSpace(Ct.copy(this),t);const n=Ct.r,i=Ct.g,r=Ct.b,a=Math.max(n,i,r),o=Math.min(n,i,r);let c,l;const h=(o+a)/2;if(o===a)c=0,l=0;else{const u=a-o;switch(l=h<=.5?u/(a+o):u/(2-a-o),a){case n:c=(i-r)/u+(i<r?6:0);break;case i:c=(r-n)/u+2;break;case r:c=(n-i)/u+4;break}c/=6}return e.h=c,e.s=l,e.l=h,e}getRGB(e,t=Qe.workingColorSpace){return Qe.fromWorkingColorSpace(Ct.copy(this),t),e.r=Ct.r,e.g=Ct.g,e.b=Ct.b,e}getStyle(e=Et){Qe.fromWorkingColorSpace(Ct.copy(this),e);const t=Ct.r,n=Ct.g,i=Ct.b;return e!==Et?`color(${e} ${t.toFixed(3)} ${n.toFixed(3)} ${i.toFixed(3)})`:`rgb(${Math.round(t*255)},${Math.round(n*255)},${Math.round(i*255)})`}offsetHSL(e,t,n){return this.getHSL(bn),this.setHSL(bn.h+e,bn.s+t,bn.l+n)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,t){return this.r=e.r+t.r,this.g=e.g+t.g,this.b=e.b+t.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,t){return this.r+=(e.r-this.r)*t,this.g+=(e.g-this.g)*t,this.b+=(e.b-this.b)*t,this}lerpColors(e,t,n){return this.r=e.r+(t.r-e.r)*n,this.g=e.g+(t.g-e.g)*n,this.b=e.b+(t.b-e.b)*n,this}lerpHSL(e,t){this.getHSL(bn),e.getHSL(ds);const n=gr(bn.h,ds.h,t),i=gr(bn.s,ds.s,t),r=gr(bn.l,ds.l,t);return this.setHSL(n,i,r),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){const t=this.r,n=this.g,i=this.b,r=e.elements;return this.r=r[0]*t+r[3]*n+r[6]*i,this.g=r[1]*t+r[4]*n+r[7]*i,this.b=r[2]*t+r[5]*n+r[8]*i,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,t=0){return this.r=e[t],this.g=e[t+1],this.b=e[t+2],this}toArray(e=[],t=0){return e[t]=this.r,e[t+1]=this.g,e[t+2]=this.b,e}fromBufferAttribute(e,t){return this.r=e.getX(t),this.g=e.getY(t),this.b=e.getZ(t),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const Ct=new Ue;Ue.NAMES=kc;let Ih=0;class Yn extends qn{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:Ih++}),this.uuid=gn(),this.name="",this.type="Material",this.blending=yi,this.side=Rn,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=Qr,this.blendDst=ea,this.blendEquation=zn,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new Ue(0,0,0),this.blendAlpha=0,this.depthFunc=Bs,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=mo,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=Zn,this.stencilZFail=Zn,this.stencilZPass=Zn,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBuild(){}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(const t in e){const n=e[t];if(n===void 0){console.warn(`THREE.Material: parameter '${t}' has value of undefined.`);continue}const i=this[t];if(i===void 0){console.warn(`THREE.Material: '${t}' is not a property of THREE.${this.type}.`);continue}i&&i.isColor?i.set(n):i&&i.isVector3&&n&&n.isVector3?i.copy(n):this[t]=n}}toJSON(e){const t=e===void 0||typeof e=="string";t&&(e={textures:{},images:{}});const n={metadata:{version:4.6,type:"Material",generator:"Material.toJSON"}};n.uuid=this.uuid,n.type=this.type,this.name!==""&&(n.name=this.name),this.color&&this.color.isColor&&(n.color=this.color.getHex()),this.roughness!==void 0&&(n.roughness=this.roughness),this.metalness!==void 0&&(n.metalness=this.metalness),this.sheen!==void 0&&(n.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(n.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(n.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(n.emissive=this.emissive.getHex()),this.emissiveIntensity&&this.emissiveIntensity!==1&&(n.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(n.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(n.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(n.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(n.shininess=this.shininess),this.clearcoat!==void 0&&(n.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(n.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(n.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(n.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(n.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,n.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.iridescence!==void 0&&(n.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(n.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(n.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(n.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(n.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(n.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(n.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(n.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(n.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(n.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(n.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(n.lightMap=this.lightMap.toJSON(e).uuid,n.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(n.aoMap=this.aoMap.toJSON(e).uuid,n.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(n.bumpMap=this.bumpMap.toJSON(e).uuid,n.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(n.normalMap=this.normalMap.toJSON(e).uuid,n.normalMapType=this.normalMapType,n.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(n.displacementMap=this.displacementMap.toJSON(e).uuid,n.displacementScale=this.displacementScale,n.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(n.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(n.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(n.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(n.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(n.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(n.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(n.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(n.combine=this.combine)),this.envMapIntensity!==void 0&&(n.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(n.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(n.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(n.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(n.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(n.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(n.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(n.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(n.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(n.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(n.size=this.size),this.shadowSide!==null&&(n.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(n.sizeAttenuation=this.sizeAttenuation),this.blending!==yi&&(n.blending=this.blending),this.side!==Rn&&(n.side=this.side),this.vertexColors===!0&&(n.vertexColors=!0),this.opacity<1&&(n.opacity=this.opacity),this.transparent===!0&&(n.transparent=!0),this.blendSrc!==Qr&&(n.blendSrc=this.blendSrc),this.blendDst!==ea&&(n.blendDst=this.blendDst),this.blendEquation!==zn&&(n.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(n.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(n.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(n.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(n.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(n.blendAlpha=this.blendAlpha),this.depthFunc!==Bs&&(n.depthFunc=this.depthFunc),this.depthTest===!1&&(n.depthTest=this.depthTest),this.depthWrite===!1&&(n.depthWrite=this.depthWrite),this.colorWrite===!1&&(n.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(n.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==mo&&(n.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(n.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(n.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==Zn&&(n.stencilFail=this.stencilFail),this.stencilZFail!==Zn&&(n.stencilZFail=this.stencilZFail),this.stencilZPass!==Zn&&(n.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(n.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(n.rotation=this.rotation),this.polygonOffset===!0&&(n.polygonOffset=!0),this.polygonOffsetFactor!==0&&(n.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(n.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(n.linewidth=this.linewidth),this.dashSize!==void 0&&(n.dashSize=this.dashSize),this.gapSize!==void 0&&(n.gapSize=this.gapSize),this.scale!==void 0&&(n.scale=this.scale),this.dithering===!0&&(n.dithering=!0),this.alphaTest>0&&(n.alphaTest=this.alphaTest),this.alphaHash===!0&&(n.alphaHash=!0),this.alphaToCoverage===!0&&(n.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(n.premultipliedAlpha=!0),this.forceSinglePass===!0&&(n.forceSinglePass=!0),this.wireframe===!0&&(n.wireframe=!0),this.wireframeLinewidth>1&&(n.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(n.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(n.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(n.flatShading=!0),this.visible===!1&&(n.visible=!1),this.toneMapped===!1&&(n.toneMapped=!1),this.fog===!1&&(n.fog=!1),Object.keys(this.userData).length>0&&(n.userData=this.userData);function i(r){const a=[];for(const o in r){const c=r[o];delete c.metadata,a.push(c)}return a}if(t){const r=i(e.textures),a=i(e.images);r.length>0&&(n.textures=r),a.length>0&&(n.images=a)}return n}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;const t=e.clippingPlanes;let n=null;if(t!==null){const i=t.length;n=new Array(i);for(let r=0;r!==i;++r)n[r]=t[r].clone()}return this.clippingPlanes=n,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}}class Nt extends Yn{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new Ue(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.combine=wc,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}}const mt=new M,fs=new j;class Rt{constructor(e,t,n=!1){if(Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,this.name="",this.array=e,this.itemSize=t,this.count=e!==void 0?e.length/t:0,this.normalized=n,this.usage=ra,this._updateRange={offset:0,count:-1},this.updateRanges=[],this.gpuType=En,this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}get updateRange(){return console.warn("THREE.BufferAttribute: updateRange() is deprecated and will be removed in r169. Use addUpdateRange() instead."),this._updateRange}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this}copyAt(e,t,n){e*=this.itemSize,n*=t.itemSize;for(let i=0,r=this.itemSize;i<r;i++)this.array[e+i]=t.array[n+i];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let t=0,n=this.count;t<n;t++)fs.fromBufferAttribute(this,t),fs.applyMatrix3(e),this.setXY(t,fs.x,fs.y);else if(this.itemSize===3)for(let t=0,n=this.count;t<n;t++)mt.fromBufferAttribute(this,t),mt.applyMatrix3(e),this.setXYZ(t,mt.x,mt.y,mt.z);return this}applyMatrix4(e){for(let t=0,n=this.count;t<n;t++)mt.fromBufferAttribute(this,t),mt.applyMatrix4(e),this.setXYZ(t,mt.x,mt.y,mt.z);return this}applyNormalMatrix(e){for(let t=0,n=this.count;t<n;t++)mt.fromBufferAttribute(this,t),mt.applyNormalMatrix(e),this.setXYZ(t,mt.x,mt.y,mt.z);return this}transformDirection(e){for(let t=0,n=this.count;t<n;t++)mt.fromBufferAttribute(this,t),mt.transformDirection(e),this.setXYZ(t,mt.x,mt.y,mt.z);return this}set(e,t=0){return this.array.set(e,t),this}getComponent(e,t){let n=this.array[e*this.itemSize+t];return this.normalized&&(n=fn(n,this.array)),n}setComponent(e,t,n){return this.normalized&&(n=et(n,this.array)),this.array[e*this.itemSize+t]=n,this}getX(e){let t=this.array[e*this.itemSize];return this.normalized&&(t=fn(t,this.array)),t}setX(e,t){return this.normalized&&(t=et(t,this.array)),this.array[e*this.itemSize]=t,this}getY(e){let t=this.array[e*this.itemSize+1];return this.normalized&&(t=fn(t,this.array)),t}setY(e,t){return this.normalized&&(t=et(t,this.array)),this.array[e*this.itemSize+1]=t,this}getZ(e){let t=this.array[e*this.itemSize+2];return this.normalized&&(t=fn(t,this.array)),t}setZ(e,t){return this.normalized&&(t=et(t,this.array)),this.array[e*this.itemSize+2]=t,this}getW(e){let t=this.array[e*this.itemSize+3];return this.normalized&&(t=fn(t,this.array)),t}setW(e,t){return this.normalized&&(t=et(t,this.array)),this.array[e*this.itemSize+3]=t,this}setXY(e,t,n){return e*=this.itemSize,this.normalized&&(t=et(t,this.array),n=et(n,this.array)),this.array[e+0]=t,this.array[e+1]=n,this}setXYZ(e,t,n,i){return e*=this.itemSize,this.normalized&&(t=et(t,this.array),n=et(n,this.array),i=et(i,this.array)),this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=i,this}setXYZW(e,t,n,i,r){return e*=this.itemSize,this.normalized&&(t=et(t,this.array),n=et(n,this.array),i=et(i,this.array),r=et(r,this.array)),this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=i,this.array[e+3]=r,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(e.name=this.name),this.usage!==ra&&(e.usage=this.usage),e}}class Hc extends Rt{constructor(e,t,n){super(new Uint16Array(e),t,n)}}class Vc extends Rt{constructor(e,t,n){super(new Uint32Array(e),t,n)}}class nt extends Rt{constructor(e,t,n){super(new Float32Array(e),t,n)}}let Uh=0;const qt=new at,Lr=new gt,si=new M,Ht=new Ln,Ui=new Ln,yt=new M;class tt extends qn{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:Uh++}),this.uuid=gn(),this.name="",this.type="BufferGeometry",this.index=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(Fc(e)?Vc:Hc)(e,1):this.index=e,this}getAttribute(e){return this.attributes[e]}setAttribute(e,t){return this.attributes[e]=t,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,t,n=0){this.groups.push({start:e,count:t,materialIndex:n})}clearGroups(){this.groups=[]}setDrawRange(e,t){this.drawRange.start=e,this.drawRange.count=t}applyMatrix4(e){const t=this.attributes.position;t!==void 0&&(t.applyMatrix4(e),t.needsUpdate=!0);const n=this.attributes.normal;if(n!==void 0){const r=new Ye().getNormalMatrix(e);n.applyNormalMatrix(r),n.needsUpdate=!0}const i=this.attributes.tangent;return i!==void 0&&(i.transformDirection(e),i.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(e){return qt.makeRotationFromQuaternion(e),this.applyMatrix4(qt),this}rotateX(e){return qt.makeRotationX(e),this.applyMatrix4(qt),this}rotateY(e){return qt.makeRotationY(e),this.applyMatrix4(qt),this}rotateZ(e){return qt.makeRotationZ(e),this.applyMatrix4(qt),this}translate(e,t,n){return qt.makeTranslation(e,t,n),this.applyMatrix4(qt),this}scale(e,t,n){return qt.makeScale(e,t,n),this.applyMatrix4(qt),this}lookAt(e){return Lr.lookAt(e),Lr.updateMatrix(),this.applyMatrix4(Lr.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(si).negate(),this.translate(si.x,si.y,si.z),this}setFromPoints(e){const t=[];for(let n=0,i=e.length;n<i;n++){const r=e[n];t.push(r.x,r.y,r.z||0)}return this.setAttribute("position",new nt(t,3)),this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new Ln);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error('THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box. Alternatively set "mesh.frustumCulled" to "false".',this),this.boundingBox.set(new M(-1/0,-1/0,-1/0),new M(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),t)for(let n=0,i=t.length;n<i;n++){const r=t[n];Ht.setFromBufferAttribute(r),this.morphTargetsRelative?(yt.addVectors(this.boundingBox.min,Ht.min),this.boundingBox.expandByPoint(yt),yt.addVectors(this.boundingBox.max,Ht.max),this.boundingBox.expandByPoint(yt)):(this.boundingBox.expandByPoint(Ht.min),this.boundingBox.expandByPoint(Ht.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new Js);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error('THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere. Alternatively set "mesh.frustumCulled" to "false".',this),this.boundingSphere.set(new M,1/0);return}if(e){const n=this.boundingSphere.center;if(Ht.setFromBufferAttribute(e),t)for(let r=0,a=t.length;r<a;r++){const o=t[r];Ui.setFromBufferAttribute(o),this.morphTargetsRelative?(yt.addVectors(Ht.min,Ui.min),Ht.expandByPoint(yt),yt.addVectors(Ht.max,Ui.max),Ht.expandByPoint(yt)):(Ht.expandByPoint(Ui.min),Ht.expandByPoint(Ui.max))}Ht.getCenter(n);let i=0;for(let r=0,a=e.count;r<a;r++)yt.fromBufferAttribute(e,r),i=Math.max(i,n.distanceToSquared(yt));if(t)for(let r=0,a=t.length;r<a;r++){const o=t[r],c=this.morphTargetsRelative;for(let l=0,h=o.count;l<h;l++)yt.fromBufferAttribute(o,l),c&&(si.fromBufferAttribute(e,l),yt.add(si)),i=Math.max(i,n.distanceToSquared(yt))}this.boundingSphere.radius=Math.sqrt(i),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const e=this.index,t=this.attributes;if(e===null||t.position===void 0||t.normal===void 0||t.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const n=e.array,i=t.position.array,r=t.normal.array,a=t.uv.array,o=i.length/3;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new Rt(new Float32Array(4*o),4));const c=this.getAttribute("tangent").array,l=[],h=[];for(let T=0;T<o;T++)l[T]=new M,h[T]=new M;const u=new M,f=new M,p=new M,g=new j,v=new j,m=new j,d=new M,_=new M;function x(T,I,G){u.fromArray(i,T*3),f.fromArray(i,I*3),p.fromArray(i,G*3),g.fromArray(a,T*2),v.fromArray(a,I*2),m.fromArray(a,G*2),f.sub(u),p.sub(u),v.sub(g),m.sub(g);const Z=1/(v.x*m.y-m.x*v.y);isFinite(Z)&&(d.copy(f).multiplyScalar(m.y).addScaledVector(p,-v.y).multiplyScalar(Z),_.copy(p).multiplyScalar(v.x).addScaledVector(f,-m.x).multiplyScalar(Z),l[T].add(d),l[I].add(d),l[G].add(d),h[T].add(_),h[I].add(_),h[G].add(_))}let y=this.groups;y.length===0&&(y=[{start:0,count:n.length}]);for(let T=0,I=y.length;T<I;++T){const G=y[T],Z=G.start,D=G.count;for(let B=Z,z=Z+D;B<z;B+=3)x(n[B+0],n[B+1],n[B+2])}const R=new M,E=new M,C=new M,N=new M;function b(T){C.fromArray(r,T*3),N.copy(C);const I=l[T];R.copy(I),R.sub(C.multiplyScalar(C.dot(I))).normalize(),E.crossVectors(N,I);const Z=E.dot(h[T])<0?-1:1;c[T*4]=R.x,c[T*4+1]=R.y,c[T*4+2]=R.z,c[T*4+3]=Z}for(let T=0,I=y.length;T<I;++T){const G=y[T],Z=G.start,D=G.count;for(let B=Z,z=Z+D;B<z;B+=3)b(n[B+0]),b(n[B+1]),b(n[B+2])}}computeVertexNormals(){const e=this.index,t=this.getAttribute("position");if(t!==void 0){let n=this.getAttribute("normal");if(n===void 0)n=new Rt(new Float32Array(t.count*3),3),this.setAttribute("normal",n);else for(let f=0,p=n.count;f<p;f++)n.setXYZ(f,0,0,0);const i=new M,r=new M,a=new M,o=new M,c=new M,l=new M,h=new M,u=new M;if(e)for(let f=0,p=e.count;f<p;f+=3){const g=e.getX(f+0),v=e.getX(f+1),m=e.getX(f+2);i.fromBufferAttribute(t,g),r.fromBufferAttribute(t,v),a.fromBufferAttribute(t,m),h.subVectors(a,r),u.subVectors(i,r),h.cross(u),o.fromBufferAttribute(n,g),c.fromBufferAttribute(n,v),l.fromBufferAttribute(n,m),o.add(h),c.add(h),l.add(h),n.setXYZ(g,o.x,o.y,o.z),n.setXYZ(v,c.x,c.y,c.z),n.setXYZ(m,l.x,l.y,l.z)}else for(let f=0,p=t.count;f<p;f+=3)i.fromBufferAttribute(t,f+0),r.fromBufferAttribute(t,f+1),a.fromBufferAttribute(t,f+2),h.subVectors(a,r),u.subVectors(i,r),h.cross(u),n.setXYZ(f+0,h.x,h.y,h.z),n.setXYZ(f+1,h.x,h.y,h.z),n.setXYZ(f+2,h.x,h.y,h.z);this.normalizeNormals(),n.needsUpdate=!0}}normalizeNormals(){const e=this.attributes.normal;for(let t=0,n=e.count;t<n;t++)yt.fromBufferAttribute(e,t),yt.normalize(),e.setXYZ(t,yt.x,yt.y,yt.z)}toNonIndexed(){function e(o,c){const l=o.array,h=o.itemSize,u=o.normalized,f=new l.constructor(c.length*h);let p=0,g=0;for(let v=0,m=c.length;v<m;v++){o.isInterleavedBufferAttribute?p=c[v]*o.data.stride+o.offset:p=c[v]*h;for(let d=0;d<h;d++)f[g++]=l[p++]}return new Rt(f,h,u)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const t=new tt,n=this.index.array,i=this.attributes;for(const o in i){const c=i[o],l=e(c,n);t.setAttribute(o,l)}const r=this.morphAttributes;for(const o in r){const c=[],l=r[o];for(let h=0,u=l.length;h<u;h++){const f=l[h],p=e(f,n);c.push(p)}t.morphAttributes[o]=c}t.morphTargetsRelative=this.morphTargetsRelative;const a=this.groups;for(let o=0,c=a.length;o<c;o++){const l=a[o];t.addGroup(l.start,l.count,l.materialIndex)}return t}toJSON(){const e={metadata:{version:4.6,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.type,this.name!==""&&(e.name=this.name),Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0){const c=this.parameters;for(const l in c)c[l]!==void 0&&(e[l]=c[l]);return e}e.data={attributes:{}};const t=this.index;t!==null&&(e.data.index={type:t.array.constructor.name,array:Array.prototype.slice.call(t.array)});const n=this.attributes;for(const c in n){const l=n[c];e.data.attributes[c]=l.toJSON(e.data)}const i={};let r=!1;for(const c in this.morphAttributes){const l=this.morphAttributes[c],h=[];for(let u=0,f=l.length;u<f;u++){const p=l[u];h.push(p.toJSON(e.data))}h.length>0&&(i[c]=h,r=!0)}r&&(e.data.morphAttributes=i,e.data.morphTargetsRelative=this.morphTargetsRelative);const a=this.groups;a.length>0&&(e.data.groups=JSON.parse(JSON.stringify(a)));const o=this.boundingSphere;return o!==null&&(e.data.boundingSphere={center:o.center.toArray(),radius:o.radius}),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const t={};this.name=e.name;const n=e.index;n!==null&&this.setIndex(n.clone(t));const i=e.attributes;for(const l in i){const h=i[l];this.setAttribute(l,h.clone(t))}const r=e.morphAttributes;for(const l in r){const h=[],u=r[l];for(let f=0,p=u.length;f<p;f++)h.push(u[f].clone(t));this.morphAttributes[l]=h}this.morphTargetsRelative=e.morphTargetsRelative;const a=e.groups;for(let l=0,h=a.length;l<h;l++){const u=a[l];this.addGroup(u.start,u.count,u.materialIndex)}const o=e.boundingBox;o!==null&&(this.boundingBox=o.clone());const c=e.boundingSphere;return c!==null&&(this.boundingSphere=c.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}const Ro=new at,Un=new Qs,ps=new Js,Po=new M,ri=new M,ai=new M,oi=new M,Dr=new M,ms=new M,gs=new j,vs=new j,_s=new j,Lo=new M,Do=new M,Oo=new M,xs=new M,ys=new M;class Ge extends gt{constructor(e=new tt,t=new Nt){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=t,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){const t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){const i=t[n[0]];if(i!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,a=i.length;r<a;r++){const o=i[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=r}}}}getVertexPosition(e,t){const n=this.geometry,i=n.attributes.position,r=n.morphAttributes.position,a=n.morphTargetsRelative;t.fromBufferAttribute(i,e);const o=this.morphTargetInfluences;if(r&&o){ms.set(0,0,0);for(let c=0,l=r.length;c<l;c++){const h=o[c],u=r[c];h!==0&&(Dr.fromBufferAttribute(u,e),a?ms.addScaledVector(Dr,h):ms.addScaledVector(Dr.sub(t),h))}t.add(ms)}return t}raycast(e,t){const n=this.geometry,i=this.material,r=this.matrixWorld;i!==void 0&&(n.boundingSphere===null&&n.computeBoundingSphere(),ps.copy(n.boundingSphere),ps.applyMatrix4(r),Un.copy(e.ray).recast(e.near),!(ps.containsPoint(Un.origin)===!1&&(Un.intersectSphere(ps,Po)===null||Un.origin.distanceToSquared(Po)>(e.far-e.near)**2))&&(Ro.copy(r).invert(),Un.copy(e.ray).applyMatrix4(Ro),!(n.boundingBox!==null&&Un.intersectsBox(n.boundingBox)===!1)&&this._computeIntersections(e,t,Un)))}_computeIntersections(e,t,n){let i;const r=this.geometry,a=this.material,o=r.index,c=r.attributes.position,l=r.attributes.uv,h=r.attributes.uv1,u=r.attributes.normal,f=r.groups,p=r.drawRange;if(o!==null)if(Array.isArray(a))for(let g=0,v=f.length;g<v;g++){const m=f[g],d=a[m.materialIndex],_=Math.max(m.start,p.start),x=Math.min(o.count,Math.min(m.start+m.count,p.start+p.count));for(let y=_,R=x;y<R;y+=3){const E=o.getX(y),C=o.getX(y+1),N=o.getX(y+2);i=Ms(this,d,e,n,l,h,u,E,C,N),i&&(i.faceIndex=Math.floor(y/3),i.face.materialIndex=m.materialIndex,t.push(i))}}else{const g=Math.max(0,p.start),v=Math.min(o.count,p.start+p.count);for(let m=g,d=v;m<d;m+=3){const _=o.getX(m),x=o.getX(m+1),y=o.getX(m+2);i=Ms(this,a,e,n,l,h,u,_,x,y),i&&(i.faceIndex=Math.floor(m/3),t.push(i))}}else if(c!==void 0)if(Array.isArray(a))for(let g=0,v=f.length;g<v;g++){const m=f[g],d=a[m.materialIndex],_=Math.max(m.start,p.start),x=Math.min(c.count,Math.min(m.start+m.count,p.start+p.count));for(let y=_,R=x;y<R;y+=3){const E=y,C=y+1,N=y+2;i=Ms(this,d,e,n,l,h,u,E,C,N),i&&(i.faceIndex=Math.floor(y/3),i.face.materialIndex=m.materialIndex,t.push(i))}}else{const g=Math.max(0,p.start),v=Math.min(c.count,p.start+p.count);for(let m=g,d=v;m<d;m+=3){const _=m,x=m+1,y=m+2;i=Ms(this,a,e,n,l,h,u,_,x,y),i&&(i.faceIndex=Math.floor(m/3),t.push(i))}}}}function Fh(s,e,t,n,i,r,a,o){let c;if(e.side===zt?c=n.intersectTriangle(a,r,i,!0,o):c=n.intersectTriangle(i,r,a,e.side===Rn,o),c===null)return null;ys.copy(o),ys.applyMatrix4(s.matrixWorld);const l=t.ray.origin.distanceTo(ys);return l<t.near||l>t.far?null:{distance:l,point:ys.clone(),object:s}}function Ms(s,e,t,n,i,r,a,o,c,l){s.getVertexPosition(o,ri),s.getVertexPosition(c,ai),s.getVertexPosition(l,oi);const h=Fh(s,e,t,n,ri,ai,oi,xs);if(h){i&&(gs.fromBufferAttribute(i,o),vs.fromBufferAttribute(i,c),_s.fromBufferAttribute(i,l),h.uv=Wt.getInterpolation(xs,ri,ai,oi,gs,vs,_s,new j)),r&&(gs.fromBufferAttribute(r,o),vs.fromBufferAttribute(r,c),_s.fromBufferAttribute(r,l),h.uv1=Wt.getInterpolation(xs,ri,ai,oi,gs,vs,_s,new j),h.uv2=h.uv1),a&&(Lo.fromBufferAttribute(a,o),Do.fromBufferAttribute(a,c),Oo.fromBufferAttribute(a,l),h.normal=Wt.getInterpolation(xs,ri,ai,oi,Lo,Do,Oo,new M),h.normal.dot(n.direction)>0&&h.normal.multiplyScalar(-1));const u={a:o,b:c,c:l,normal:new M,materialIndex:0};Wt.getNormal(ri,ai,oi,u.normal),h.face=u}return h}class Ki extends tt{constructor(e=1,t=1,n=1,i=1,r=1,a=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:t,depth:n,widthSegments:i,heightSegments:r,depthSegments:a};const o=this;i=Math.floor(i),r=Math.floor(r),a=Math.floor(a);const c=[],l=[],h=[],u=[];let f=0,p=0;g("z","y","x",-1,-1,n,t,e,a,r,0),g("z","y","x",1,-1,n,t,-e,a,r,1),g("x","z","y",1,1,e,n,t,i,a,2),g("x","z","y",1,-1,e,n,-t,i,a,3),g("x","y","z",1,-1,e,t,n,i,r,4),g("x","y","z",-1,-1,e,t,-n,i,r,5),this.setIndex(c),this.setAttribute("position",new nt(l,3)),this.setAttribute("normal",new nt(h,3)),this.setAttribute("uv",new nt(u,2));function g(v,m,d,_,x,y,R,E,C,N,b){const T=y/C,I=R/N,G=y/2,Z=R/2,D=E/2,B=C+1,z=N+1;let $=0,K=0;const J=new M;for(let Q=0;Q<z;Q++){const ne=Q*I-Z;for(let ce=0;ce<B;ce++){const X=ce*T-G;J[v]=X*_,J[m]=ne*x,J[d]=D,l.push(J.x,J.y,J.z),J[v]=0,J[m]=0,J[d]=E>0?1:-1,h.push(J.x,J.y,J.z),u.push(ce/C),u.push(1-Q/N),$+=1}}for(let Q=0;Q<N;Q++)for(let ne=0;ne<C;ne++){const ce=f+ne+B*Q,X=f+ne+B*(Q+1),ee=f+(ne+1)+B*(Q+1),pe=f+(ne+1)+B*Q;c.push(ce,X,pe),c.push(X,ee,pe),K+=6}o.addGroup(p,K,b),p+=K,f+=$}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Ki(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}}function Ri(s){const e={};for(const t in s){e[t]={};for(const n in s[t]){const i=s[t][n];i&&(i.isColor||i.isMatrix3||i.isMatrix4||i.isVector2||i.isVector3||i.isVector4||i.isTexture||i.isQuaternion)?i.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[t][n]=null):e[t][n]=i.clone():Array.isArray(i)?e[t][n]=i.slice():e[t][n]=i}}return e}function Dt(s){const e={};for(let t=0;t<s.length;t++){const n=Ri(s[t]);for(const i in n)e[i]=n[i]}return e}function Bh(s){const e=[];for(let t=0;t<s.length;t++)e.push(s[t].clone());return e}function Wc(s){return s.getRenderTarget()===null?s.outputColorSpace:Qe.workingColorSpace}const zh={clone:Ri,merge:Dt};var Gh=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,kh=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class Pn extends Yn{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=Gh,this.fragmentShader=kh,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={derivatives:!1,fragDepth:!1,drawBuffers:!1,shaderTextureLOD:!1,clipCullDistance:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=Ri(e.uniforms),this.uniformsGroups=Bh(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this}toJSON(e){const t=super.toJSON(e);t.glslVersion=this.glslVersion,t.uniforms={};for(const i in this.uniforms){const a=this.uniforms[i].value;a&&a.isTexture?t.uniforms[i]={type:"t",value:a.toJSON(e).uuid}:a&&a.isColor?t.uniforms[i]={type:"c",value:a.getHex()}:a&&a.isVector2?t.uniforms[i]={type:"v2",value:a.toArray()}:a&&a.isVector3?t.uniforms[i]={type:"v3",value:a.toArray()}:a&&a.isVector4?t.uniforms[i]={type:"v4",value:a.toArray()}:a&&a.isMatrix3?t.uniforms[i]={type:"m3",value:a.toArray()}:a&&a.isMatrix4?t.uniforms[i]={type:"m4",value:a.toArray()}:t.uniforms[i]={value:a}}Object.keys(this.defines).length>0&&(t.defines=this.defines),t.vertexShader=this.vertexShader,t.fragmentShader=this.fragmentShader,t.lights=this.lights,t.clipping=this.clipping;const n={};for(const i in this.extensions)this.extensions[i]===!0&&(n[i]=!0);return Object.keys(n).length>0&&(t.extensions=n),t}}class Xc extends gt{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new at,this.projectionMatrix=new at,this.projectionMatrixInverse=new at,this.coordinateSystem=mn}copy(e,t){return super.copy(e,t),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(e,t){super.updateWorldMatrix(e,t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}}class bt extends Xc{constructor(e=50,t=1,n=.1,i=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=n,this.far=i,this.focus=10,this.aspect=t,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){const t=.5*this.getFilmHeight()/e;this.fov=oa*2*Math.atan(t),this.updateProjectionMatrix()}getFocalLength(){const e=Math.tan(Gi*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return oa*2*Math.atan(Math.tan(Gi*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}setViewOffset(e,t,n,i,r,a){this.aspect=e/t,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=i,this.view.width=r,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=this.near;let t=e*Math.tan(Gi*.5*this.fov)/this.zoom,n=2*t,i=this.aspect*n,r=-.5*i;const a=this.view;if(this.view!==null&&this.view.enabled){const c=a.fullWidth,l=a.fullHeight;r+=a.offsetX*i/c,t-=a.offsetY*n/l,i*=a.width/c,n*=a.height/l}const o=this.filmOffset;o!==0&&(r+=e*o/this.getFilmWidth()),this.projectionMatrix.makePerspective(r,r+i,t,t-n,e,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.fov=this.fov,t.object.zoom=this.zoom,t.object.near=this.near,t.object.far=this.far,t.object.focus=this.focus,t.object.aspect=this.aspect,this.view!==null&&(t.object.view=Object.assign({},this.view)),t.object.filmGauge=this.filmGauge,t.object.filmOffset=this.filmOffset,t}}const ci=-90,li=1;class Hh extends gt{constructor(e,t,n){super(),this.type="CubeCamera",this.renderTarget=n,this.coordinateSystem=null,this.activeMipmapLevel=0;const i=new bt(ci,li,e,t);i.layers=this.layers,this.add(i);const r=new bt(ci,li,e,t);r.layers=this.layers,this.add(r);const a=new bt(ci,li,e,t);a.layers=this.layers,this.add(a);const o=new bt(ci,li,e,t);o.layers=this.layers,this.add(o);const c=new bt(ci,li,e,t);c.layers=this.layers,this.add(c);const l=new bt(ci,li,e,t);l.layers=this.layers,this.add(l)}updateCoordinateSystem(){const e=this.coordinateSystem,t=this.children.concat(),[n,i,r,a,o,c]=t;for(const l of t)this.remove(l);if(e===mn)n.up.set(0,1,0),n.lookAt(1,0,0),i.up.set(0,1,0),i.lookAt(-1,0,0),r.up.set(0,0,-1),r.lookAt(0,1,0),a.up.set(0,0,1),a.lookAt(0,-1,0),o.up.set(0,1,0),o.lookAt(0,0,1),c.up.set(0,1,0),c.lookAt(0,0,-1);else if(e===Hs)n.up.set(0,-1,0),n.lookAt(-1,0,0),i.up.set(0,-1,0),i.lookAt(1,0,0),r.up.set(0,0,1),r.lookAt(0,1,0),a.up.set(0,0,-1),a.lookAt(0,-1,0),o.up.set(0,-1,0),o.lookAt(0,0,1),c.up.set(0,-1,0),c.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(const l of t)this.add(l),l.updateMatrixWorld()}update(e,t){this.parent===null&&this.updateMatrixWorld();const{renderTarget:n,activeMipmapLevel:i}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());const[r,a,o,c,l,h]=this.children,u=e.getRenderTarget(),f=e.getActiveCubeFace(),p=e.getActiveMipmapLevel(),g=e.xr.enabled;e.xr.enabled=!1;const v=n.texture.generateMipmaps;n.texture.generateMipmaps=!1,e.setRenderTarget(n,0,i),e.render(t,r),e.setRenderTarget(n,1,i),e.render(t,a),e.setRenderTarget(n,2,i),e.render(t,o),e.setRenderTarget(n,3,i),e.render(t,c),e.setRenderTarget(n,4,i),e.render(t,l),n.texture.generateMipmaps=v,e.setRenderTarget(n,5,i),e.render(t,h),e.setRenderTarget(u,f,p),e.xr.enabled=g,n.texture.needsPMREMUpdate=!0}}class jc extends Pt{constructor(e,t,n,i,r,a,o,c,l,h){e=e!==void 0?e:[],t=t!==void 0?t:Ti,super(e,t,n,i,r,a,o,c,l,h),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}}class Vh extends Wn{constructor(e=1,t={}){super(e,e,t),this.isWebGLCubeRenderTarget=!0;const n={width:e,height:e,depth:1},i=[n,n,n,n,n,n];t.encoding!==void 0&&(ki("THREE.WebGLCubeRenderTarget: option.encoding has been replaced by option.colorSpace."),t.colorSpace=t.encoding===Vn?Et:Yt),this.texture=new jc(i,t.mapping,t.wrapS,t.wrapT,t.magFilter,t.minFilter,t.format,t.type,t.anisotropy,t.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.generateMipmaps=t.generateMipmaps!==void 0?t.generateMipmaps:!1,this.texture.minFilter=t.minFilter!==void 0?t.minFilter:Bt}fromEquirectangularTexture(e,t){this.texture.type=t.type,this.texture.colorSpace=t.colorSpace,this.texture.generateMipmaps=t.generateMipmaps,this.texture.minFilter=t.minFilter,this.texture.magFilter=t.magFilter;const n={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},i=new Ki(5,5,5),r=new Pn({name:"CubemapFromEquirect",uniforms:Ri(n.uniforms),vertexShader:n.vertexShader,fragmentShader:n.fragmentShader,side:zt,blending:wn});r.uniforms.tEquirect.value=t;const a=new Ge(i,r),o=t.minFilter;return t.minFilter===Xi&&(t.minFilter=Bt),new Hh(1,10,this).update(e,a),t.minFilter=o,a.geometry.dispose(),a.material.dispose(),this}clear(e,t,n,i){const r=e.getRenderTarget();for(let a=0;a<6;a++)e.setRenderTarget(this,a),e.clear(t,n,i);e.setRenderTarget(r)}}const Or=new M,Wh=new M,Xh=new Ye;class Jt{constructor(e=new M(1,0,0),t=0){this.isPlane=!0,this.normal=e,this.constant=t}set(e,t){return this.normal.copy(e),this.constant=t,this}setComponents(e,t,n,i){return this.normal.set(e,t,n),this.constant=i,this}setFromNormalAndCoplanarPoint(e,t){return this.normal.copy(e),this.constant=-t.dot(this.normal),this}setFromCoplanarPoints(e,t,n){const i=Or.subVectors(n,t).cross(Wh.subVectors(e,t)).normalize();return this.setFromNormalAndCoplanarPoint(i,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){const e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,t){return t.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,t){const n=e.delta(Or),i=this.normal.dot(n);if(i===0)return this.distanceToPoint(e.start)===0?t.copy(e.start):null;const r=-(e.start.dot(this.normal)+this.constant)/i;return r<0||r>1?null:t.copy(e.start).addScaledVector(n,r)}intersectsLine(e){const t=this.distanceToPoint(e.start),n=this.distanceToPoint(e.end);return t<0&&n>0||n<0&&t>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,t){const n=t||Xh.getNormalMatrix(e),i=this.coplanarPoint(Or).applyMatrix4(e),r=this.normal.applyMatrix3(n).normalize();return this.constant=-i.dot(r),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}}const Fn=new Js,bs=new M;class xa{constructor(e=new Jt,t=new Jt,n=new Jt,i=new Jt,r=new Jt,a=new Jt){this.planes=[e,t,n,i,r,a]}set(e,t,n,i,r,a){const o=this.planes;return o[0].copy(e),o[1].copy(t),o[2].copy(n),o[3].copy(i),o[4].copy(r),o[5].copy(a),this}copy(e){const t=this.planes;for(let n=0;n<6;n++)t[n].copy(e.planes[n]);return this}setFromProjectionMatrix(e,t=mn){const n=this.planes,i=e.elements,r=i[0],a=i[1],o=i[2],c=i[3],l=i[4],h=i[5],u=i[6],f=i[7],p=i[8],g=i[9],v=i[10],m=i[11],d=i[12],_=i[13],x=i[14],y=i[15];if(n[0].setComponents(c-r,f-l,m-p,y-d).normalize(),n[1].setComponents(c+r,f+l,m+p,y+d).normalize(),n[2].setComponents(c+a,f+h,m+g,y+_).normalize(),n[3].setComponents(c-a,f-h,m-g,y-_).normalize(),n[4].setComponents(c-o,f-u,m-v,y-x).normalize(),t===mn)n[5].setComponents(c+o,f+u,m+v,y+x).normalize();else if(t===Hs)n[5].setComponents(o,u,v,x).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+t);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),Fn.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{const t=e.geometry;t.boundingSphere===null&&t.computeBoundingSphere(),Fn.copy(t.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(Fn)}intersectsSprite(e){return Fn.center.set(0,0,0),Fn.radius=.7071067811865476,Fn.applyMatrix4(e.matrixWorld),this.intersectsSphere(Fn)}intersectsSphere(e){const t=this.planes,n=e.center,i=-e.radius;for(let r=0;r<6;r++)if(t[r].distanceToPoint(n)<i)return!1;return!0}intersectsBox(e){const t=this.planes;for(let n=0;n<6;n++){const i=t[n];if(bs.x=i.normal.x>0?e.max.x:e.min.x,bs.y=i.normal.y>0?e.max.y:e.min.y,bs.z=i.normal.z>0?e.max.z:e.min.z,i.distanceToPoint(bs)<0)return!1}return!0}containsPoint(e){const t=this.planes;for(let n=0;n<6;n++)if(t[n].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}function qc(){let s=null,e=!1,t=null,n=null;function i(r,a){t(r,a),n=s.requestAnimationFrame(i)}return{start:function(){e!==!0&&t!==null&&(n=s.requestAnimationFrame(i),e=!0)},stop:function(){s.cancelAnimationFrame(n),e=!1},setAnimationLoop:function(r){t=r},setContext:function(r){s=r}}}function jh(s,e){const t=e.isWebGL2,n=new WeakMap;function i(l,h){const u=l.array,f=l.usage,p=u.byteLength,g=s.createBuffer();s.bindBuffer(h,g),s.bufferData(h,u,f),l.onUploadCallback();let v;if(u instanceof Float32Array)v=s.FLOAT;else if(u instanceof Uint16Array)if(l.isFloat16BufferAttribute)if(t)v=s.HALF_FLOAT;else throw new Error("THREE.WebGLAttributes: Usage of Float16BufferAttribute requires WebGL2.");else v=s.UNSIGNED_SHORT;else if(u instanceof Int16Array)v=s.SHORT;else if(u instanceof Uint32Array)v=s.UNSIGNED_INT;else if(u instanceof Int32Array)v=s.INT;else if(u instanceof Int8Array)v=s.BYTE;else if(u instanceof Uint8Array)v=s.UNSIGNED_BYTE;else if(u instanceof Uint8ClampedArray)v=s.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+u);return{buffer:g,type:v,bytesPerElement:u.BYTES_PER_ELEMENT,version:l.version,size:p}}function r(l,h,u){const f=h.array,p=h._updateRange,g=h.updateRanges;if(s.bindBuffer(u,l),p.count===-1&&g.length===0&&s.bufferSubData(u,0,f),g.length!==0){for(let v=0,m=g.length;v<m;v++){const d=g[v];t?s.bufferSubData(u,d.start*f.BYTES_PER_ELEMENT,f,d.start,d.count):s.bufferSubData(u,d.start*f.BYTES_PER_ELEMENT,f.subarray(d.start,d.start+d.count))}h.clearUpdateRanges()}p.count!==-1&&(t?s.bufferSubData(u,p.offset*f.BYTES_PER_ELEMENT,f,p.offset,p.count):s.bufferSubData(u,p.offset*f.BYTES_PER_ELEMENT,f.subarray(p.offset,p.offset+p.count)),p.count=-1),h.onUploadCallback()}function a(l){return l.isInterleavedBufferAttribute&&(l=l.data),n.get(l)}function o(l){l.isInterleavedBufferAttribute&&(l=l.data);const h=n.get(l);h&&(s.deleteBuffer(h.buffer),n.delete(l))}function c(l,h){if(l.isGLBufferAttribute){const f=n.get(l);(!f||f.version<l.version)&&n.set(l,{buffer:l.buffer,type:l.type,bytesPerElement:l.elementSize,version:l.version});return}l.isInterleavedBufferAttribute&&(l=l.data);const u=n.get(l);if(u===void 0)n.set(l,i(l,h));else if(u.version<l.version){if(u.size!==l.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");r(u.buffer,l,h),u.version=l.version}}return{get:a,remove:o,update:c}}class Cn extends tt{constructor(e=1,t=1,n=1,i=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:t,widthSegments:n,heightSegments:i};const r=e/2,a=t/2,o=Math.floor(n),c=Math.floor(i),l=o+1,h=c+1,u=e/o,f=t/c,p=[],g=[],v=[],m=[];for(let d=0;d<h;d++){const _=d*f-a;for(let x=0;x<l;x++){const y=x*u-r;g.push(y,-_,0),v.push(0,0,1),m.push(x/o),m.push(1-d/c)}}for(let d=0;d<c;d++)for(let _=0;_<o;_++){const x=_+l*d,y=_+l*(d+1),R=_+1+l*(d+1),E=_+1+l*d;p.push(x,y,E),p.push(y,R,E)}this.setIndex(p),this.setAttribute("position",new nt(g,3)),this.setAttribute("normal",new nt(v,3)),this.setAttribute("uv",new nt(m,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Cn(e.width,e.height,e.widthSegments,e.heightSegments)}}var qh=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,Yh=`#ifdef USE_ALPHAHASH
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
#endif`,Zh=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,$h=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,Kh=`#ifdef USE_ALPHATEST
	if ( diffuseColor.a < alphaTest ) discard;
#endif`,Jh=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,Qh=`#ifdef USE_AOMAP
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
#endif`,eu=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,tu=`#ifdef USE_BATCHING
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
#endif`,nu=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( batchId );
#endif`,iu=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,su=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,ru=`float G_BlinnPhong_Implicit( ) {
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
} // validated`,au=`#ifdef USE_IRIDESCENCE
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
#endif`,ou=`#ifdef USE_BUMPMAP
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
#endif`,cu=`#if NUM_CLIPPING_PLANES > 0
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
#endif`,lu=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,hu=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,uu=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,du=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,fu=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,pu=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR )
	varying vec3 vColor;
#endif`,mu=`#if defined( USE_COLOR_ALPHA )
	vColor = vec4( 1.0 );
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR )
	vColor = vec3( 1.0 );
#endif
#ifdef USE_COLOR
	vColor *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.xyz *= instanceColor.xyz;
#endif`,gu=`#define PI 3.141592653589793
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
} // validated`,vu=`#ifdef ENVMAP_TYPE_CUBE_UV
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
#endif`,_u=`vec3 transformedNormal = objectNormal;
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
#endif`,xu=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,yu=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,Mu=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,bu=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,Su="gl_FragColor = linearToOutputTexel( gl_FragColor );",Eu=`
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
}`,wu=`#ifdef USE_ENVMAP
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
#endif`,Tu=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,Au=`#ifdef USE_ENVMAP
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
#endif`,Cu=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,Ru=`#ifdef USE_ENVMAP
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
#endif`,Pu=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,Lu=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,Du=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,Ou=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,Nu=`#ifdef USE_GRADIENTMAP
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
}`,Iu=`#ifdef USE_LIGHTMAP
	vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
	vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
	reflectedLight.indirectDiffuse += lightMapIrradiance;
#endif`,Uu=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,Fu=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,Bu=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,zu=`uniform bool receiveShadow;
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
#endif`,Gu=`#ifdef USE_ENVMAP
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
#endif`,ku=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,Hu=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,Vu=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,Wu=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,Xu=`PhysicalMaterial material;
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
#endif`,ju=`struct PhysicalMaterial {
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
}`,qu=`
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
#endif`,Yu=`#if defined( RE_IndirectDiffuse )
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
#endif`,Zu=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,$u=`#if defined( USE_LOGDEPTHBUF ) && defined( USE_LOGDEPTHBUF_EXT )
	gl_FragDepthEXT = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,Ku=`#if defined( USE_LOGDEPTHBUF ) && defined( USE_LOGDEPTHBUF_EXT )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,Ju=`#ifdef USE_LOGDEPTHBUF
	#ifdef USE_LOGDEPTHBUF_EXT
		varying float vFragDepth;
		varying float vIsPerspective;
	#else
		uniform float logDepthBufFC;
	#endif
#endif`,Qu=`#ifdef USE_LOGDEPTHBUF
	#ifdef USE_LOGDEPTHBUF_EXT
		vFragDepth = 1.0 + gl_Position.w;
		vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
	#else
		if ( isPerspectiveMatrix( projectionMatrix ) ) {
			gl_Position.z = log2( max( EPSILON, gl_Position.w + 1.0 ) ) * logDepthBufFC - 1.0;
			gl_Position.z *= gl_Position.w;
		}
	#endif
#endif`,ed=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = vec4( mix( pow( sampledDiffuseColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), sampledDiffuseColor.rgb * 0.0773993808, vec3( lessThanEqual( sampledDiffuseColor.rgb, vec3( 0.04045 ) ) ) ), sampledDiffuseColor.w );
	
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,td=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,nd=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`,id=`#if defined( USE_POINTS_UV )
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
#endif`,sd=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,rd=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,ad=`#if defined( USE_MORPHCOLORS ) && defined( MORPHTARGETS_TEXTURE )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,od=`#ifdef USE_MORPHNORMALS
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
#endif`,cd=`#ifdef USE_MORPHTARGETS
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
#endif`,ld=`#ifdef USE_MORPHTARGETS
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
#endif`,hd=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
vec3 nonPerturbedNormal = normal;`,ud=`#ifdef USE_NORMALMAP_OBJECTSPACE
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
#endif`,dd=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,fd=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,pd=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,md=`#ifdef USE_NORMALMAP
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
#endif`,gd=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,vd=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,_d=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,xd=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,yd=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,Md=`vec3 packNormalToRGB( const in vec3 normal ) {
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
}`,bd=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,Sd=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,Ed=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,wd=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,Td=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,Ad=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,Cd=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,Rd=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,Pd=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
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
#endif`,Ld=`float getShadowMask() {
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
}`,Dd=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,Od=`#ifdef USE_SKINNING
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
#endif`,Nd=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,Id=`#ifdef USE_SKINNING
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
#endif`,Ud=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,Fd=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,Bd=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,zd=`#ifndef saturate
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
vec3 CustomToneMapping( vec3 color ) { return color; }`,Gd=`#ifdef USE_TRANSMISSION
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
#endif`,kd=`#ifdef USE_TRANSMISSION
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
#endif`,Hd=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,Vd=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,Wd=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,Xd=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const jd=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,qd=`uniform sampler2D t2D;
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
}`,Yd=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,Zd=`#ifdef ENVMAP_TYPE_CUBE
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
}`,$d=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,Kd=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Jd=`#include <common>
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
}`,Qd=`#if DEPTH_PACKING == 3200
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
}`,ef=`#define DISTANCE
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
}`,tf=`#define DISTANCE
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
}`,nf=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,sf=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,rf=`uniform float scale;
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
}`,af=`uniform vec3 diffuse;
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
}`,of=`#include <common>
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
}`,cf=`uniform vec3 diffuse;
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
}`,lf=`#define LAMBERT
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
}`,hf=`#define LAMBERT
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
}`,uf=`#define MATCAP
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
}`,df=`#define MATCAP
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
}`,ff=`#define NORMAL
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
}`,pf=`#define NORMAL
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
}`,mf=`#define PHONG
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
}`,gf=`#define PHONG
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
}`,vf=`#define STANDARD
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
}`,_f=`#define STANDARD
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
}`,xf=`#define TOON
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
}`,yf=`#define TOON
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
}`,Mf=`uniform float size;
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
}`,bf=`uniform vec3 diffuse;
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
}`,Sf=`#include <common>
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
}`,Ef=`uniform vec3 color;
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
}`,wf=`uniform float rotation;
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
}`,Tf=`uniform vec3 diffuse;
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
}`,We={alphahash_fragment:qh,alphahash_pars_fragment:Yh,alphamap_fragment:Zh,alphamap_pars_fragment:$h,alphatest_fragment:Kh,alphatest_pars_fragment:Jh,aomap_fragment:Qh,aomap_pars_fragment:eu,batching_pars_vertex:tu,batching_vertex:nu,begin_vertex:iu,beginnormal_vertex:su,bsdfs:ru,iridescence_fragment:au,bumpmap_pars_fragment:ou,clipping_planes_fragment:cu,clipping_planes_pars_fragment:lu,clipping_planes_pars_vertex:hu,clipping_planes_vertex:uu,color_fragment:du,color_pars_fragment:fu,color_pars_vertex:pu,color_vertex:mu,common:gu,cube_uv_reflection_fragment:vu,defaultnormal_vertex:_u,displacementmap_pars_vertex:xu,displacementmap_vertex:yu,emissivemap_fragment:Mu,emissivemap_pars_fragment:bu,colorspace_fragment:Su,colorspace_pars_fragment:Eu,envmap_fragment:wu,envmap_common_pars_fragment:Tu,envmap_pars_fragment:Au,envmap_pars_vertex:Cu,envmap_physical_pars_fragment:Gu,envmap_vertex:Ru,fog_vertex:Pu,fog_pars_vertex:Lu,fog_fragment:Du,fog_pars_fragment:Ou,gradientmap_pars_fragment:Nu,lightmap_fragment:Iu,lightmap_pars_fragment:Uu,lights_lambert_fragment:Fu,lights_lambert_pars_fragment:Bu,lights_pars_begin:zu,lights_toon_fragment:ku,lights_toon_pars_fragment:Hu,lights_phong_fragment:Vu,lights_phong_pars_fragment:Wu,lights_physical_fragment:Xu,lights_physical_pars_fragment:ju,lights_fragment_begin:qu,lights_fragment_maps:Yu,lights_fragment_end:Zu,logdepthbuf_fragment:$u,logdepthbuf_pars_fragment:Ku,logdepthbuf_pars_vertex:Ju,logdepthbuf_vertex:Qu,map_fragment:ed,map_pars_fragment:td,map_particle_fragment:nd,map_particle_pars_fragment:id,metalnessmap_fragment:sd,metalnessmap_pars_fragment:rd,morphcolor_vertex:ad,morphnormal_vertex:od,morphtarget_pars_vertex:cd,morphtarget_vertex:ld,normal_fragment_begin:hd,normal_fragment_maps:ud,normal_pars_fragment:dd,normal_pars_vertex:fd,normal_vertex:pd,normalmap_pars_fragment:md,clearcoat_normal_fragment_begin:gd,clearcoat_normal_fragment_maps:vd,clearcoat_pars_fragment:_d,iridescence_pars_fragment:xd,opaque_fragment:yd,packing:Md,premultiplied_alpha_fragment:bd,project_vertex:Sd,dithering_fragment:Ed,dithering_pars_fragment:wd,roughnessmap_fragment:Td,roughnessmap_pars_fragment:Ad,shadowmap_pars_fragment:Cd,shadowmap_pars_vertex:Rd,shadowmap_vertex:Pd,shadowmask_pars_fragment:Ld,skinbase_vertex:Dd,skinning_pars_vertex:Od,skinning_vertex:Nd,skinnormal_vertex:Id,specularmap_fragment:Ud,specularmap_pars_fragment:Fd,tonemapping_fragment:Bd,tonemapping_pars_fragment:zd,transmission_fragment:Gd,transmission_pars_fragment:kd,uv_pars_fragment:Hd,uv_pars_vertex:Vd,uv_vertex:Wd,worldpos_vertex:Xd,background_vert:jd,background_frag:qd,backgroundCube_vert:Yd,backgroundCube_frag:Zd,cube_vert:$d,cube_frag:Kd,depth_vert:Jd,depth_frag:Qd,distanceRGBA_vert:ef,distanceRGBA_frag:tf,equirect_vert:nf,equirect_frag:sf,linedashed_vert:rf,linedashed_frag:af,meshbasic_vert:of,meshbasic_frag:cf,meshlambert_vert:lf,meshlambert_frag:hf,meshmatcap_vert:uf,meshmatcap_frag:df,meshnormal_vert:ff,meshnormal_frag:pf,meshphong_vert:mf,meshphong_frag:gf,meshphysical_vert:vf,meshphysical_frag:_f,meshtoon_vert:xf,meshtoon_frag:yf,points_vert:Mf,points_frag:bf,shadow_vert:Sf,shadow_frag:Ef,sprite_vert:wf,sprite_frag:Tf},de={common:{diffuse:{value:new Ue(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new Ye},alphaMap:{value:null},alphaMapTransform:{value:new Ye},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new Ye}},envmap:{envMap:{value:null},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new Ye}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new Ye}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new Ye},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new Ye},normalScale:{value:new j(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new Ye},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new Ye}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new Ye}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new Ye}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new Ue(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new Ue(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new Ye},alphaTest:{value:0},uvTransform:{value:new Ye}},sprite:{diffuse:{value:new Ue(16777215)},opacity:{value:1},center:{value:new j(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new Ye},alphaMap:{value:null},alphaMapTransform:{value:new Ye},alphaTest:{value:0}}},nn={basic:{uniforms:Dt([de.common,de.specularmap,de.envmap,de.aomap,de.lightmap,de.fog]),vertexShader:We.meshbasic_vert,fragmentShader:We.meshbasic_frag},lambert:{uniforms:Dt([de.common,de.specularmap,de.envmap,de.aomap,de.lightmap,de.emissivemap,de.bumpmap,de.normalmap,de.displacementmap,de.fog,de.lights,{emissive:{value:new Ue(0)}}]),vertexShader:We.meshlambert_vert,fragmentShader:We.meshlambert_frag},phong:{uniforms:Dt([de.common,de.specularmap,de.envmap,de.aomap,de.lightmap,de.emissivemap,de.bumpmap,de.normalmap,de.displacementmap,de.fog,de.lights,{emissive:{value:new Ue(0)},specular:{value:new Ue(1118481)},shininess:{value:30}}]),vertexShader:We.meshphong_vert,fragmentShader:We.meshphong_frag},standard:{uniforms:Dt([de.common,de.envmap,de.aomap,de.lightmap,de.emissivemap,de.bumpmap,de.normalmap,de.displacementmap,de.roughnessmap,de.metalnessmap,de.fog,de.lights,{emissive:{value:new Ue(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:We.meshphysical_vert,fragmentShader:We.meshphysical_frag},toon:{uniforms:Dt([de.common,de.aomap,de.lightmap,de.emissivemap,de.bumpmap,de.normalmap,de.displacementmap,de.gradientmap,de.fog,de.lights,{emissive:{value:new Ue(0)}}]),vertexShader:We.meshtoon_vert,fragmentShader:We.meshtoon_frag},matcap:{uniforms:Dt([de.common,de.bumpmap,de.normalmap,de.displacementmap,de.fog,{matcap:{value:null}}]),vertexShader:We.meshmatcap_vert,fragmentShader:We.meshmatcap_frag},points:{uniforms:Dt([de.points,de.fog]),vertexShader:We.points_vert,fragmentShader:We.points_frag},dashed:{uniforms:Dt([de.common,de.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:We.linedashed_vert,fragmentShader:We.linedashed_frag},depth:{uniforms:Dt([de.common,de.displacementmap]),vertexShader:We.depth_vert,fragmentShader:We.depth_frag},normal:{uniforms:Dt([de.common,de.bumpmap,de.normalmap,de.displacementmap,{opacity:{value:1}}]),vertexShader:We.meshnormal_vert,fragmentShader:We.meshnormal_frag},sprite:{uniforms:Dt([de.sprite,de.fog]),vertexShader:We.sprite_vert,fragmentShader:We.sprite_frag},background:{uniforms:{uvTransform:{value:new Ye},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:We.background_vert,fragmentShader:We.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1}},vertexShader:We.backgroundCube_vert,fragmentShader:We.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:We.cube_vert,fragmentShader:We.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:We.equirect_vert,fragmentShader:We.equirect_frag},distanceRGBA:{uniforms:Dt([de.common,de.displacementmap,{referencePosition:{value:new M},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:We.distanceRGBA_vert,fragmentShader:We.distanceRGBA_frag},shadow:{uniforms:Dt([de.lights,de.fog,{color:{value:new Ue(0)},opacity:{value:1}}]),vertexShader:We.shadow_vert,fragmentShader:We.shadow_frag}};nn.physical={uniforms:Dt([nn.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new Ye},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new Ye},clearcoatNormalScale:{value:new j(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new Ye},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new Ye},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new Ye},sheen:{value:0},sheenColor:{value:new Ue(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new Ye},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new Ye},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new Ye},transmissionSamplerSize:{value:new j},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new Ye},attenuationDistance:{value:0},attenuationColor:{value:new Ue(0)},specularColor:{value:new Ue(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new Ye},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new Ye},anisotropyVector:{value:new j},anisotropyMap:{value:null},anisotropyMapTransform:{value:new Ye}}]),vertexShader:We.meshphysical_vert,fragmentShader:We.meshphysical_frag};const Ss={r:0,b:0,g:0};function Af(s,e,t,n,i,r,a){const o=new Ue(0);let c=r===!0?0:1,l,h,u=null,f=0,p=null;function g(m,d){let _=!1,x=d.isScene===!0?d.background:null;x&&x.isTexture&&(x=(d.backgroundBlurriness>0?t:e).get(x)),x===null?v(o,c):x&&x.isColor&&(v(x,1),_=!0);const y=s.xr.getEnvironmentBlendMode();y==="additive"?n.buffers.color.setClear(0,0,0,1,a):y==="alpha-blend"&&n.buffers.color.setClear(0,0,0,0,a),(s.autoClear||_)&&s.clear(s.autoClearColor,s.autoClearDepth,s.autoClearStencil),x&&(x.isCubeTexture||x.mapping===$s)?(h===void 0&&(h=new Ge(new Ki(1,1,1),new Pn({name:"BackgroundCubeMaterial",uniforms:Ri(nn.backgroundCube.uniforms),vertexShader:nn.backgroundCube.vertexShader,fragmentShader:nn.backgroundCube.fragmentShader,side:zt,depthTest:!1,depthWrite:!1,fog:!1})),h.geometry.deleteAttribute("normal"),h.geometry.deleteAttribute("uv"),h.onBeforeRender=function(R,E,C){this.matrixWorld.copyPosition(C.matrixWorld)},Object.defineProperty(h.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),i.update(h)),h.material.uniforms.envMap.value=x,h.material.uniforms.flipEnvMap.value=x.isCubeTexture&&x.isRenderTargetTexture===!1?-1:1,h.material.uniforms.backgroundBlurriness.value=d.backgroundBlurriness,h.material.uniforms.backgroundIntensity.value=d.backgroundIntensity,h.material.toneMapped=Qe.getTransfer(x.colorSpace)!==it,(u!==x||f!==x.version||p!==s.toneMapping)&&(h.material.needsUpdate=!0,u=x,f=x.version,p=s.toneMapping),h.layers.enableAll(),m.unshift(h,h.geometry,h.material,0,0,null)):x&&x.isTexture&&(l===void 0&&(l=new Ge(new Cn(2,2),new Pn({name:"BackgroundMaterial",uniforms:Ri(nn.background.uniforms),vertexShader:nn.background.vertexShader,fragmentShader:nn.background.fragmentShader,side:Rn,depthTest:!1,depthWrite:!1,fog:!1})),l.geometry.deleteAttribute("normal"),Object.defineProperty(l.material,"map",{get:function(){return this.uniforms.t2D.value}}),i.update(l)),l.material.uniforms.t2D.value=x,l.material.uniforms.backgroundIntensity.value=d.backgroundIntensity,l.material.toneMapped=Qe.getTransfer(x.colorSpace)!==it,x.matrixAutoUpdate===!0&&x.updateMatrix(),l.material.uniforms.uvTransform.value.copy(x.matrix),(u!==x||f!==x.version||p!==s.toneMapping)&&(l.material.needsUpdate=!0,u=x,f=x.version,p=s.toneMapping),l.layers.enableAll(),m.unshift(l,l.geometry,l.material,0,0,null))}function v(m,d){m.getRGB(Ss,Wc(s)),n.buffers.color.setClear(Ss.r,Ss.g,Ss.b,d,a)}return{getClearColor:function(){return o},setClearColor:function(m,d=1){o.set(m),c=d,v(o,c)},getClearAlpha:function(){return c},setClearAlpha:function(m){c=m,v(o,c)},render:g}}function Cf(s,e,t,n){const i=s.getParameter(s.MAX_VERTEX_ATTRIBS),r=n.isWebGL2?null:e.get("OES_vertex_array_object"),a=n.isWebGL2||r!==null,o={},c=m(null);let l=c,h=!1;function u(D,B,z,$,K){let J=!1;if(a){const Q=v($,z,B);l!==Q&&(l=Q,p(l.object)),J=d(D,$,z,K),J&&_(D,$,z,K)}else{const Q=B.wireframe===!0;(l.geometry!==$.id||l.program!==z.id||l.wireframe!==Q)&&(l.geometry=$.id,l.program=z.id,l.wireframe=Q,J=!0)}K!==null&&t.update(K,s.ELEMENT_ARRAY_BUFFER),(J||h)&&(h=!1,N(D,B,z,$),K!==null&&s.bindBuffer(s.ELEMENT_ARRAY_BUFFER,t.get(K).buffer))}function f(){return n.isWebGL2?s.createVertexArray():r.createVertexArrayOES()}function p(D){return n.isWebGL2?s.bindVertexArray(D):r.bindVertexArrayOES(D)}function g(D){return n.isWebGL2?s.deleteVertexArray(D):r.deleteVertexArrayOES(D)}function v(D,B,z){const $=z.wireframe===!0;let K=o[D.id];K===void 0&&(K={},o[D.id]=K);let J=K[B.id];J===void 0&&(J={},K[B.id]=J);let Q=J[$];return Q===void 0&&(Q=m(f()),J[$]=Q),Q}function m(D){const B=[],z=[],$=[];for(let K=0;K<i;K++)B[K]=0,z[K]=0,$[K]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:B,enabledAttributes:z,attributeDivisors:$,object:D,attributes:{},index:null}}function d(D,B,z,$){const K=l.attributes,J=B.attributes;let Q=0;const ne=z.getAttributes();for(const ce in ne)if(ne[ce].location>=0){const ee=K[ce];let pe=J[ce];if(pe===void 0&&(ce==="instanceMatrix"&&D.instanceMatrix&&(pe=D.instanceMatrix),ce==="instanceColor"&&D.instanceColor&&(pe=D.instanceColor)),ee===void 0||ee.attribute!==pe||pe&&ee.data!==pe.data)return!0;Q++}return l.attributesNum!==Q||l.index!==$}function _(D,B,z,$){const K={},J=B.attributes;let Q=0;const ne=z.getAttributes();for(const ce in ne)if(ne[ce].location>=0){let ee=J[ce];ee===void 0&&(ce==="instanceMatrix"&&D.instanceMatrix&&(ee=D.instanceMatrix),ce==="instanceColor"&&D.instanceColor&&(ee=D.instanceColor));const pe={};pe.attribute=ee,ee&&ee.data&&(pe.data=ee.data),K[ce]=pe,Q++}l.attributes=K,l.attributesNum=Q,l.index=$}function x(){const D=l.newAttributes;for(let B=0,z=D.length;B<z;B++)D[B]=0}function y(D){R(D,0)}function R(D,B){const z=l.newAttributes,$=l.enabledAttributes,K=l.attributeDivisors;z[D]=1,$[D]===0&&(s.enableVertexAttribArray(D),$[D]=1),K[D]!==B&&((n.isWebGL2?s:e.get("ANGLE_instanced_arrays"))[n.isWebGL2?"vertexAttribDivisor":"vertexAttribDivisorANGLE"](D,B),K[D]=B)}function E(){const D=l.newAttributes,B=l.enabledAttributes;for(let z=0,$=B.length;z<$;z++)B[z]!==D[z]&&(s.disableVertexAttribArray(z),B[z]=0)}function C(D,B,z,$,K,J,Q){Q===!0?s.vertexAttribIPointer(D,B,z,K,J):s.vertexAttribPointer(D,B,z,$,K,J)}function N(D,B,z,$){if(n.isWebGL2===!1&&(D.isInstancedMesh||$.isInstancedBufferGeometry)&&e.get("ANGLE_instanced_arrays")===null)return;x();const K=$.attributes,J=z.getAttributes(),Q=B.defaultAttributeValues;for(const ne in J){const ce=J[ne];if(ce.location>=0){let X=K[ne];if(X===void 0&&(ne==="instanceMatrix"&&D.instanceMatrix&&(X=D.instanceMatrix),ne==="instanceColor"&&D.instanceColor&&(X=D.instanceColor)),X!==void 0){const ee=X.normalized,pe=X.itemSize,Se=t.get(X);if(Se===void 0)continue;const ve=Se.buffer,De=Se.type,Oe=Se.bytesPerElement,we=n.isWebGL2===!0&&(De===s.INT||De===s.UNSIGNED_INT||X.gpuType===Ac);if(X.isInterleavedBufferAttribute){const Fe=X.data,L=Fe.stride,ue=X.offset;if(Fe.isInstancedInterleavedBuffer){for(let Y=0;Y<ce.locationSize;Y++)R(ce.location+Y,Fe.meshPerAttribute);D.isInstancedMesh!==!0&&$._maxInstanceCount===void 0&&($._maxInstanceCount=Fe.meshPerAttribute*Fe.count)}else for(let Y=0;Y<ce.locationSize;Y++)y(ce.location+Y);s.bindBuffer(s.ARRAY_BUFFER,ve);for(let Y=0;Y<ce.locationSize;Y++)C(ce.location+Y,pe/ce.locationSize,De,ee,L*Oe,(ue+pe/ce.locationSize*Y)*Oe,we)}else{if(X.isInstancedBufferAttribute){for(let Fe=0;Fe<ce.locationSize;Fe++)R(ce.location+Fe,X.meshPerAttribute);D.isInstancedMesh!==!0&&$._maxInstanceCount===void 0&&($._maxInstanceCount=X.meshPerAttribute*X.count)}else for(let Fe=0;Fe<ce.locationSize;Fe++)y(ce.location+Fe);s.bindBuffer(s.ARRAY_BUFFER,ve);for(let Fe=0;Fe<ce.locationSize;Fe++)C(ce.location+Fe,pe/ce.locationSize,De,ee,pe*Oe,pe/ce.locationSize*Fe*Oe,we)}}else if(Q!==void 0){const ee=Q[ne];if(ee!==void 0)switch(ee.length){case 2:s.vertexAttrib2fv(ce.location,ee);break;case 3:s.vertexAttrib3fv(ce.location,ee);break;case 4:s.vertexAttrib4fv(ce.location,ee);break;default:s.vertexAttrib1fv(ce.location,ee)}}}}E()}function b(){G();for(const D in o){const B=o[D];for(const z in B){const $=B[z];for(const K in $)g($[K].object),delete $[K];delete B[z]}delete o[D]}}function T(D){if(o[D.id]===void 0)return;const B=o[D.id];for(const z in B){const $=B[z];for(const K in $)g($[K].object),delete $[K];delete B[z]}delete o[D.id]}function I(D){for(const B in o){const z=o[B];if(z[D.id]===void 0)continue;const $=z[D.id];for(const K in $)g($[K].object),delete $[K];delete z[D.id]}}function G(){Z(),h=!0,l!==c&&(l=c,p(l.object))}function Z(){c.geometry=null,c.program=null,c.wireframe=!1}return{setup:u,reset:G,resetDefaultState:Z,dispose:b,releaseStatesOfGeometry:T,releaseStatesOfProgram:I,initAttributes:x,enableAttribute:y,disableUnusedAttributes:E}}function Rf(s,e,t,n){const i=n.isWebGL2;let r;function a(h){r=h}function o(h,u){s.drawArrays(r,h,u),t.update(u,r,1)}function c(h,u,f){if(f===0)return;let p,g;if(i)p=s,g="drawArraysInstanced";else if(p=e.get("ANGLE_instanced_arrays"),g="drawArraysInstancedANGLE",p===null){console.error("THREE.WebGLBufferRenderer: using THREE.InstancedBufferGeometry but hardware does not support extension ANGLE_instanced_arrays.");return}p[g](r,h,u,f),t.update(u,r,f)}function l(h,u,f){if(f===0)return;const p=e.get("WEBGL_multi_draw");if(p===null)for(let g=0;g<f;g++)this.render(h[g],u[g]);else{p.multiDrawArraysWEBGL(r,h,0,u,0,f);let g=0;for(let v=0;v<f;v++)g+=u[v];t.update(g,r,1)}}this.setMode=a,this.render=o,this.renderInstances=c,this.renderMultiDraw=l}function Pf(s,e,t){let n;function i(){if(n!==void 0)return n;if(e.has("EXT_texture_filter_anisotropic")===!0){const C=e.get("EXT_texture_filter_anisotropic");n=s.getParameter(C.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else n=0;return n}function r(C){if(C==="highp"){if(s.getShaderPrecisionFormat(s.VERTEX_SHADER,s.HIGH_FLOAT).precision>0&&s.getShaderPrecisionFormat(s.FRAGMENT_SHADER,s.HIGH_FLOAT).precision>0)return"highp";C="mediump"}return C==="mediump"&&s.getShaderPrecisionFormat(s.VERTEX_SHADER,s.MEDIUM_FLOAT).precision>0&&s.getShaderPrecisionFormat(s.FRAGMENT_SHADER,s.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}const a=typeof WebGL2RenderingContext<"u"&&s.constructor.name==="WebGL2RenderingContext";let o=t.precision!==void 0?t.precision:"highp";const c=r(o);c!==o&&(console.warn("THREE.WebGLRenderer:",o,"not supported, using",c,"instead."),o=c);const l=a||e.has("WEBGL_draw_buffers"),h=t.logarithmicDepthBuffer===!0,u=s.getParameter(s.MAX_TEXTURE_IMAGE_UNITS),f=s.getParameter(s.MAX_VERTEX_TEXTURE_IMAGE_UNITS),p=s.getParameter(s.MAX_TEXTURE_SIZE),g=s.getParameter(s.MAX_CUBE_MAP_TEXTURE_SIZE),v=s.getParameter(s.MAX_VERTEX_ATTRIBS),m=s.getParameter(s.MAX_VERTEX_UNIFORM_VECTORS),d=s.getParameter(s.MAX_VARYING_VECTORS),_=s.getParameter(s.MAX_FRAGMENT_UNIFORM_VECTORS),x=f>0,y=a||e.has("OES_texture_float"),R=x&&y,E=a?s.getParameter(s.MAX_SAMPLES):0;return{isWebGL2:a,drawBuffers:l,getMaxAnisotropy:i,getMaxPrecision:r,precision:o,logarithmicDepthBuffer:h,maxTextures:u,maxVertexTextures:f,maxTextureSize:p,maxCubemapSize:g,maxAttributes:v,maxVertexUniforms:m,maxVaryings:d,maxFragmentUniforms:_,vertexTextures:x,floatFragmentTextures:y,floatVertexTextures:R,maxSamples:E}}function Lf(s){const e=this;let t=null,n=0,i=!1,r=!1;const a=new Jt,o=new Ye,c={value:null,needsUpdate:!1};this.uniform=c,this.numPlanes=0,this.numIntersection=0,this.init=function(u,f){const p=u.length!==0||f||n!==0||i;return i=f,n=u.length,p},this.beginShadows=function(){r=!0,h(null)},this.endShadows=function(){r=!1},this.setGlobalState=function(u,f){t=h(u,f,0)},this.setState=function(u,f,p){const g=u.clippingPlanes,v=u.clipIntersection,m=u.clipShadows,d=s.get(u);if(!i||g===null||g.length===0||r&&!m)r?h(null):l();else{const _=r?0:n,x=_*4;let y=d.clippingState||null;c.value=y,y=h(g,f,x,p);for(let R=0;R!==x;++R)y[R]=t[R];d.clippingState=y,this.numIntersection=v?this.numPlanes:0,this.numPlanes+=_}};function l(){c.value!==t&&(c.value=t,c.needsUpdate=n>0),e.numPlanes=n,e.numIntersection=0}function h(u,f,p,g){const v=u!==null?u.length:0;let m=null;if(v!==0){if(m=c.value,g!==!0||m===null){const d=p+v*4,_=f.matrixWorldInverse;o.getNormalMatrix(_),(m===null||m.length<d)&&(m=new Float32Array(d));for(let x=0,y=p;x!==v;++x,y+=4)a.copy(u[x]).applyMatrix4(_,o),a.normal.toArray(m,y),m[y+3]=a.constant}c.value=m,c.needsUpdate=!0}return e.numPlanes=v,e.numIntersection=0,m}}function Df(s){let e=new WeakMap;function t(a,o){return o===ta?a.mapping=Ti:o===na&&(a.mapping=Ai),a}function n(a){if(a&&a.isTexture){const o=a.mapping;if(o===ta||o===na)if(e.has(a)){const c=e.get(a).texture;return t(c,a.mapping)}else{const c=a.image;if(c&&c.height>0){const l=new Vh(c.height/2);return l.fromEquirectangularTexture(s,a),e.set(a,l),a.addEventListener("dispose",i),t(l.texture,a.mapping)}else return null}}return a}function i(a){const o=a.target;o.removeEventListener("dispose",i);const c=e.get(o);c!==void 0&&(e.delete(o),c.dispose())}function r(){e=new WeakMap}return{get:n,dispose:r}}class Ft extends Xc{constructor(e=-1,t=1,n=1,i=-1,r=.1,a=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=t,this.top=n,this.bottom=i,this.near=r,this.far=a,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,t,n,i,r,a){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=i,this.view.width=r,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=(this.right-this.left)/(2*this.zoom),t=(this.top-this.bottom)/(2*this.zoom),n=(this.right+this.left)/2,i=(this.top+this.bottom)/2;let r=n-e,a=n+e,o=i+t,c=i-t;if(this.view!==null&&this.view.enabled){const l=(this.right-this.left)/this.view.fullWidth/this.zoom,h=(this.top-this.bottom)/this.view.fullHeight/this.zoom;r+=l*this.view.offsetX,a=r+l*this.view.width,o-=h*this.view.offsetY,c=o-h*this.view.height}this.projectionMatrix.makeOrthographic(r,a,o,c,this.near,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.zoom=this.zoom,t.object.left=this.left,t.object.right=this.right,t.object.top=this.top,t.object.bottom=this.bottom,t.object.near=this.near,t.object.far=this.far,this.view!==null&&(t.object.view=Object.assign({},this.view)),t}}const gi=4,No=[.125,.215,.35,.446,.526,.582],Gn=20,Nr=new Ft,Io=new Ue;let Ir=null,Ur=0,Fr=0;const Bn=(1+Math.sqrt(5))/2,hi=1/Bn,Uo=[new M(1,1,1),new M(-1,1,1),new M(1,1,-1),new M(-1,1,-1),new M(0,Bn,hi),new M(0,Bn,-hi),new M(hi,0,Bn),new M(-hi,0,Bn),new M(Bn,hi,0),new M(-Bn,hi,0)];class Fo{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(e,t=0,n=.1,i=100){Ir=this._renderer.getRenderTarget(),Ur=this._renderer.getActiveCubeFace(),Fr=this._renderer.getActiveMipmapLevel(),this._setSize(256);const r=this._allocateTargets();return r.depthBuffer=!0,this._sceneToCubeUV(e,n,i,r),t>0&&this._blur(r,0,0,t),this._applyPMREM(r),this._cleanup(r),r}fromEquirectangular(e,t=null){return this._fromTexture(e,t)}fromCubemap(e,t=null){return this._fromTexture(e,t)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=Go(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=zo(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodPlanes.length;e++)this._lodPlanes[e].dispose()}_cleanup(e){this._renderer.setRenderTarget(Ir,Ur,Fr),e.scissorTest=!1,Es(e,0,0,e.width,e.height)}_fromTexture(e,t){e.mapping===Ti||e.mapping===Ai?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),Ir=this._renderer.getRenderTarget(),Ur=this._renderer.getActiveCubeFace(),Fr=this._renderer.getActiveMipmapLevel();const n=t||this._allocateTargets();return this._textureToCubeUV(e,n),this._applyPMREM(n),this._cleanup(n),n}_allocateTargets(){const e=3*Math.max(this._cubeSize,112),t=4*this._cubeSize,n={magFilter:Bt,minFilter:Bt,generateMipmaps:!1,type:ji,format:en,colorSpace:vn,depthBuffer:!1},i=Bo(e,t,n);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==t){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=Bo(e,t,n);const{_lodMax:r}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=Of(r)),this._blurMaterial=Nf(r,e,t)}return i}_compileMaterial(e){const t=new Ge(this._lodPlanes[0],e);this._renderer.compile(t,Nr)}_sceneToCubeUV(e,t,n,i){const o=new bt(90,1,t,n),c=[1,-1,1,1,1,1],l=[1,1,1,-1,-1,-1],h=this._renderer,u=h.autoClear,f=h.toneMapping;h.getClearColor(Io),h.toneMapping=Tn,h.autoClear=!1;const p=new Nt({name:"PMREM.Background",side:zt,depthWrite:!1,depthTest:!1}),g=new Ge(new Ki,p);let v=!1;const m=e.background;m?m.isColor&&(p.color.copy(m),e.background=null,v=!0):(p.color.copy(Io),v=!0);for(let d=0;d<6;d++){const _=d%3;_===0?(o.up.set(0,c[d],0),o.lookAt(l[d],0,0)):_===1?(o.up.set(0,0,c[d]),o.lookAt(0,l[d],0)):(o.up.set(0,c[d],0),o.lookAt(0,0,l[d]));const x=this._cubeSize;Es(i,_*x,d>2?x:0,x,x),h.setRenderTarget(i),v&&h.render(g,o),h.render(e,o)}g.geometry.dispose(),g.material.dispose(),h.toneMapping=f,h.autoClear=u,e.background=m}_textureToCubeUV(e,t){const n=this._renderer,i=e.mapping===Ti||e.mapping===Ai;i?(this._cubemapMaterial===null&&(this._cubemapMaterial=Go()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=zo());const r=i?this._cubemapMaterial:this._equirectMaterial,a=new Ge(this._lodPlanes[0],r),o=r.uniforms;o.envMap.value=e;const c=this._cubeSize;Es(t,0,0,3*c,2*c),n.setRenderTarget(t),n.render(a,Nr)}_applyPMREM(e){const t=this._renderer,n=t.autoClear;t.autoClear=!1;for(let i=1;i<this._lodPlanes.length;i++){const r=Math.sqrt(this._sigmas[i]*this._sigmas[i]-this._sigmas[i-1]*this._sigmas[i-1]),a=Uo[(i-1)%Uo.length];this._blur(e,i-1,i,r,a)}t.autoClear=n}_blur(e,t,n,i,r){const a=this._pingPongRenderTarget;this._halfBlur(e,a,t,n,i,"latitudinal",r),this._halfBlur(a,e,n,n,i,"longitudinal",r)}_halfBlur(e,t,n,i,r,a,o){const c=this._renderer,l=this._blurMaterial;a!=="latitudinal"&&a!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");const h=3,u=new Ge(this._lodPlanes[i],l),f=l.uniforms,p=this._sizeLods[n]-1,g=isFinite(r)?Math.PI/(2*p):2*Math.PI/(2*Gn-1),v=r/g,m=isFinite(r)?1+Math.floor(h*v):Gn;m>Gn&&console.warn(`sigmaRadians, ${r}, is too large and will clip, as it requested ${m} samples when the maximum is set to ${Gn}`);const d=[];let _=0;for(let C=0;C<Gn;++C){const N=C/v,b=Math.exp(-N*N/2);d.push(b),C===0?_+=b:C<m&&(_+=2*b)}for(let C=0;C<d.length;C++)d[C]=d[C]/_;f.envMap.value=e.texture,f.samples.value=m,f.weights.value=d,f.latitudinal.value=a==="latitudinal",o&&(f.poleAxis.value=o);const{_lodMax:x}=this;f.dTheta.value=g,f.mipInt.value=x-n;const y=this._sizeLods[i],R=3*y*(i>x-gi?i-x+gi:0),E=4*(this._cubeSize-y);Es(t,R,E,3*y,2*y),c.setRenderTarget(t),c.render(u,Nr)}}function Of(s){const e=[],t=[],n=[];let i=s;const r=s-gi+1+No.length;for(let a=0;a<r;a++){const o=Math.pow(2,i);t.push(o);let c=1/o;a>s-gi?c=No[a-s+gi-1]:a===0&&(c=0),n.push(c);const l=1/(o-2),h=-l,u=1+l,f=[h,h,u,h,u,u,h,h,u,u,h,u],p=6,g=6,v=3,m=2,d=1,_=new Float32Array(v*g*p),x=new Float32Array(m*g*p),y=new Float32Array(d*g*p);for(let E=0;E<p;E++){const C=E%3*2/3-1,N=E>2?0:-1,b=[C,N,0,C+2/3,N,0,C+2/3,N+1,0,C,N,0,C+2/3,N+1,0,C,N+1,0];_.set(b,v*g*E),x.set(f,m*g*E);const T=[E,E,E,E,E,E];y.set(T,d*g*E)}const R=new tt;R.setAttribute("position",new Rt(_,v)),R.setAttribute("uv",new Rt(x,m)),R.setAttribute("faceIndex",new Rt(y,d)),e.push(R),i>gi&&i--}return{lodPlanes:e,sizeLods:t,sigmas:n}}function Bo(s,e,t){const n=new Wn(s,e,t);return n.texture.mapping=$s,n.texture.name="PMREM.cubeUv",n.scissorTest=!0,n}function Es(s,e,t,n,i){s.viewport.set(e,t,n,i),s.scissor.set(e,t,n,i)}function Nf(s,e,t){const n=new Float32Array(Gn),i=new M(0,1,0);return new Pn({name:"SphericalGaussianBlur",defines:{n:Gn,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/t,CUBEUV_MAX_MIP:`${s}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:n},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:i}},vertexShader:ya(),fragmentShader:`

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
		`,blending:wn,depthTest:!1,depthWrite:!1})}function zo(){return new Pn({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:ya(),fragmentShader:`

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
		`,blending:wn,depthTest:!1,depthWrite:!1})}function Go(){return new Pn({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:ya(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:wn,depthTest:!1,depthWrite:!1})}function ya(){return`

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
	`}function If(s){let e=new WeakMap,t=null;function n(o){if(o&&o.isTexture){const c=o.mapping,l=c===ta||c===na,h=c===Ti||c===Ai;if(l||h)if(o.isRenderTargetTexture&&o.needsPMREMUpdate===!0){o.needsPMREMUpdate=!1;let u=e.get(o);return t===null&&(t=new Fo(s)),u=l?t.fromEquirectangular(o,u):t.fromCubemap(o,u),e.set(o,u),u.texture}else{if(e.has(o))return e.get(o).texture;{const u=o.image;if(l&&u&&u.height>0||h&&u&&i(u)){t===null&&(t=new Fo(s));const f=l?t.fromEquirectangular(o):t.fromCubemap(o);return e.set(o,f),o.addEventListener("dispose",r),f.texture}else return null}}}return o}function i(o){let c=0;const l=6;for(let h=0;h<l;h++)o[h]!==void 0&&c++;return c===l}function r(o){const c=o.target;c.removeEventListener("dispose",r);const l=e.get(c);l!==void 0&&(e.delete(c),l.dispose())}function a(){e=new WeakMap,t!==null&&(t.dispose(),t=null)}return{get:n,dispose:a}}function Uf(s){const e={};function t(n){if(e[n]!==void 0)return e[n];let i;switch(n){case"WEBGL_depth_texture":i=s.getExtension("WEBGL_depth_texture")||s.getExtension("MOZ_WEBGL_depth_texture")||s.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":i=s.getExtension("EXT_texture_filter_anisotropic")||s.getExtension("MOZ_EXT_texture_filter_anisotropic")||s.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":i=s.getExtension("WEBGL_compressed_texture_s3tc")||s.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||s.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":i=s.getExtension("WEBGL_compressed_texture_pvrtc")||s.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:i=s.getExtension(n)}return e[n]=i,i}return{has:function(n){return t(n)!==null},init:function(n){n.isWebGL2?(t("EXT_color_buffer_float"),t("WEBGL_clip_cull_distance")):(t("WEBGL_depth_texture"),t("OES_texture_float"),t("OES_texture_half_float"),t("OES_texture_half_float_linear"),t("OES_standard_derivatives"),t("OES_element_index_uint"),t("OES_vertex_array_object"),t("ANGLE_instanced_arrays")),t("OES_texture_float_linear"),t("EXT_color_buffer_half_float"),t("WEBGL_multisampled_render_to_texture")},get:function(n){const i=t(n);return i===null&&console.warn("THREE.WebGLRenderer: "+n+" extension not supported."),i}}}function Ff(s,e,t,n){const i={},r=new WeakMap;function a(u){const f=u.target;f.index!==null&&e.remove(f.index);for(const g in f.attributes)e.remove(f.attributes[g]);for(const g in f.morphAttributes){const v=f.morphAttributes[g];for(let m=0,d=v.length;m<d;m++)e.remove(v[m])}f.removeEventListener("dispose",a),delete i[f.id];const p=r.get(f);p&&(e.remove(p),r.delete(f)),n.releaseStatesOfGeometry(f),f.isInstancedBufferGeometry===!0&&delete f._maxInstanceCount,t.memory.geometries--}function o(u,f){return i[f.id]===!0||(f.addEventListener("dispose",a),i[f.id]=!0,t.memory.geometries++),f}function c(u){const f=u.attributes;for(const g in f)e.update(f[g],s.ARRAY_BUFFER);const p=u.morphAttributes;for(const g in p){const v=p[g];for(let m=0,d=v.length;m<d;m++)e.update(v[m],s.ARRAY_BUFFER)}}function l(u){const f=[],p=u.index,g=u.attributes.position;let v=0;if(p!==null){const _=p.array;v=p.version;for(let x=0,y=_.length;x<y;x+=3){const R=_[x+0],E=_[x+1],C=_[x+2];f.push(R,E,E,C,C,R)}}else if(g!==void 0){const _=g.array;v=g.version;for(let x=0,y=_.length/3-1;x<y;x+=3){const R=x+0,E=x+1,C=x+2;f.push(R,E,E,C,C,R)}}else return;const m=new(Fc(f)?Vc:Hc)(f,1);m.version=v;const d=r.get(u);d&&e.remove(d),r.set(u,m)}function h(u){const f=r.get(u);if(f){const p=u.index;p!==null&&f.version<p.version&&l(u)}else l(u);return r.get(u)}return{get:o,update:c,getWireframeAttribute:h}}function Bf(s,e,t,n){const i=n.isWebGL2;let r;function a(p){r=p}let o,c;function l(p){o=p.type,c=p.bytesPerElement}function h(p,g){s.drawElements(r,g,o,p*c),t.update(g,r,1)}function u(p,g,v){if(v===0)return;let m,d;if(i)m=s,d="drawElementsInstanced";else if(m=e.get("ANGLE_instanced_arrays"),d="drawElementsInstancedANGLE",m===null){console.error("THREE.WebGLIndexedBufferRenderer: using THREE.InstancedBufferGeometry but hardware does not support extension ANGLE_instanced_arrays.");return}m[d](r,g,o,p*c,v),t.update(g,r,v)}function f(p,g,v){if(v===0)return;const m=e.get("WEBGL_multi_draw");if(m===null)for(let d=0;d<v;d++)this.render(p[d]/c,g[d]);else{m.multiDrawElementsWEBGL(r,g,0,o,p,0,v);let d=0;for(let _=0;_<v;_++)d+=g[_];t.update(d,r,1)}}this.setMode=a,this.setIndex=l,this.render=h,this.renderInstances=u,this.renderMultiDraw=f}function zf(s){const e={geometries:0,textures:0},t={frame:0,calls:0,triangles:0,points:0,lines:0};function n(r,a,o){switch(t.calls++,a){case s.TRIANGLES:t.triangles+=o*(r/3);break;case s.LINES:t.lines+=o*(r/2);break;case s.LINE_STRIP:t.lines+=o*(r-1);break;case s.LINE_LOOP:t.lines+=o*r;break;case s.POINTS:t.points+=o*r;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",a);break}}function i(){t.calls=0,t.triangles=0,t.points=0,t.lines=0}return{memory:e,render:t,programs:null,autoReset:!0,reset:i,update:n}}function Gf(s,e){return s[0]-e[0]}function kf(s,e){return Math.abs(e[1])-Math.abs(s[1])}function Hf(s,e,t){const n={},i=new Float32Array(8),r=new WeakMap,a=new St,o=[];for(let l=0;l<8;l++)o[l]=[l,0];function c(l,h,u){const f=l.morphTargetInfluences;if(e.isWebGL2===!0){const g=h.morphAttributes.position||h.morphAttributes.normal||h.morphAttributes.color,v=g!==void 0?g.length:0;let m=r.get(h);if(m===void 0||m.count!==v){let B=function(){Z.dispose(),r.delete(h),h.removeEventListener("dispose",B)};var p=B;m!==void 0&&m.texture.dispose();const x=h.morphAttributes.position!==void 0,y=h.morphAttributes.normal!==void 0,R=h.morphAttributes.color!==void 0,E=h.morphAttributes.position||[],C=h.morphAttributes.normal||[],N=h.morphAttributes.color||[];let b=0;x===!0&&(b=1),y===!0&&(b=2),R===!0&&(b=3);let T=h.attributes.position.count*b,I=1;T>e.maxTextureSize&&(I=Math.ceil(T/e.maxTextureSize),T=e.maxTextureSize);const G=new Float32Array(T*I*4*v),Z=new Gc(G,T,I,v);Z.type=En,Z.needsUpdate=!0;const D=b*4;for(let z=0;z<v;z++){const $=E[z],K=C[z],J=N[z],Q=T*I*4*z;for(let ne=0;ne<$.count;ne++){const ce=ne*D;x===!0&&(a.fromBufferAttribute($,ne),G[Q+ce+0]=a.x,G[Q+ce+1]=a.y,G[Q+ce+2]=a.z,G[Q+ce+3]=0),y===!0&&(a.fromBufferAttribute(K,ne),G[Q+ce+4]=a.x,G[Q+ce+5]=a.y,G[Q+ce+6]=a.z,G[Q+ce+7]=0),R===!0&&(a.fromBufferAttribute(J,ne),G[Q+ce+8]=a.x,G[Q+ce+9]=a.y,G[Q+ce+10]=a.z,G[Q+ce+11]=J.itemSize===4?a.w:1)}}m={count:v,texture:Z,size:new j(T,I)},r.set(h,m),h.addEventListener("dispose",B)}let d=0;for(let x=0;x<f.length;x++)d+=f[x];const _=h.morphTargetsRelative?1:1-d;u.getUniforms().setValue(s,"morphTargetBaseInfluence",_),u.getUniforms().setValue(s,"morphTargetInfluences",f),u.getUniforms().setValue(s,"morphTargetsTexture",m.texture,t),u.getUniforms().setValue(s,"morphTargetsTextureSize",m.size)}else{const g=f===void 0?0:f.length;let v=n[h.id];if(v===void 0||v.length!==g){v=[];for(let y=0;y<g;y++)v[y]=[y,0];n[h.id]=v}for(let y=0;y<g;y++){const R=v[y];R[0]=y,R[1]=f[y]}v.sort(kf);for(let y=0;y<8;y++)y<g&&v[y][1]?(o[y][0]=v[y][0],o[y][1]=v[y][1]):(o[y][0]=Number.MAX_SAFE_INTEGER,o[y][1]=0);o.sort(Gf);const m=h.morphAttributes.position,d=h.morphAttributes.normal;let _=0;for(let y=0;y<8;y++){const R=o[y],E=R[0],C=R[1];E!==Number.MAX_SAFE_INTEGER&&C?(m&&h.getAttribute("morphTarget"+y)!==m[E]&&h.setAttribute("morphTarget"+y,m[E]),d&&h.getAttribute("morphNormal"+y)!==d[E]&&h.setAttribute("morphNormal"+y,d[E]),i[y]=C,_+=C):(m&&h.hasAttribute("morphTarget"+y)===!0&&h.deleteAttribute("morphTarget"+y),d&&h.hasAttribute("morphNormal"+y)===!0&&h.deleteAttribute("morphNormal"+y),i[y]=0)}const x=h.morphTargetsRelative?1:1-_;u.getUniforms().setValue(s,"morphTargetBaseInfluence",x),u.getUniforms().setValue(s,"morphTargetInfluences",i)}}return{update:c}}function Vf(s,e,t,n){let i=new WeakMap;function r(c){const l=n.render.frame,h=c.geometry,u=e.get(c,h);if(i.get(u)!==l&&(e.update(u),i.set(u,l)),c.isInstancedMesh&&(c.hasEventListener("dispose",o)===!1&&c.addEventListener("dispose",o),i.get(c)!==l&&(t.update(c.instanceMatrix,s.ARRAY_BUFFER),c.instanceColor!==null&&t.update(c.instanceColor,s.ARRAY_BUFFER),i.set(c,l))),c.isSkinnedMesh){const f=c.skeleton;i.get(f)!==l&&(f.update(),i.set(f,l))}return u}function a(){i=new WeakMap}function o(c){const l=c.target;l.removeEventListener("dispose",o),t.remove(l.instanceMatrix),l.instanceColor!==null&&t.remove(l.instanceColor)}return{update:r,dispose:a}}class Yc extends Pt{constructor(e,t,n,i,r,a,o,c,l,h){if(h=h!==void 0?h:Hn,h!==Hn&&h!==Ci)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");n===void 0&&h===Hn&&(n=Sn),n===void 0&&h===Ci&&(n=kn),super(null,i,r,a,o,c,h,n,l),this.isDepthTexture=!0,this.image={width:e,height:t},this.magFilter=o!==void 0?o:Ot,this.minFilter=c!==void 0?c:Ot,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.compareFunction=e.compareFunction,this}toJSON(e){const t=super.toJSON(e);return this.compareFunction!==null&&(t.compareFunction=this.compareFunction),t}}const Zc=new Pt,$c=new Yc(1,1);$c.compareFunction=Uc;const Kc=new Gc,Jc=new Th,Qc=new jc,ko=[],Ho=[],Vo=new Float32Array(16),Wo=new Float32Array(9),Xo=new Float32Array(4);function Li(s,e,t){const n=s[0];if(n<=0||n>0)return s;const i=e*t;let r=ko[i];if(r===void 0&&(r=new Float32Array(i),ko[i]=r),e!==0){n.toArray(r,0);for(let a=1,o=0;a!==e;++a)o+=t,s[a].toArray(r,o)}return r}function vt(s,e){if(s.length!==e.length)return!1;for(let t=0,n=s.length;t<n;t++)if(s[t]!==e[t])return!1;return!0}function _t(s,e){for(let t=0,n=e.length;t<n;t++)s[t]=e[t]}function tr(s,e){let t=Ho[e];t===void 0&&(t=new Int32Array(e),Ho[e]=t);for(let n=0;n!==e;++n)t[n]=s.allocateTextureUnit();return t}function Wf(s,e){const t=this.cache;t[0]!==e&&(s.uniform1f(this.addr,e),t[0]=e)}function Xf(s,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(s.uniform2f(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(vt(t,e))return;s.uniform2fv(this.addr,e),_t(t,e)}}function jf(s,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(s.uniform3f(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else if(e.r!==void 0)(t[0]!==e.r||t[1]!==e.g||t[2]!==e.b)&&(s.uniform3f(this.addr,e.r,e.g,e.b),t[0]=e.r,t[1]=e.g,t[2]=e.b);else{if(vt(t,e))return;s.uniform3fv(this.addr,e),_t(t,e)}}function qf(s,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(s.uniform4f(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(vt(t,e))return;s.uniform4fv(this.addr,e),_t(t,e)}}function Yf(s,e){const t=this.cache,n=e.elements;if(n===void 0){if(vt(t,e))return;s.uniformMatrix2fv(this.addr,!1,e),_t(t,e)}else{if(vt(t,n))return;Xo.set(n),s.uniformMatrix2fv(this.addr,!1,Xo),_t(t,n)}}function Zf(s,e){const t=this.cache,n=e.elements;if(n===void 0){if(vt(t,e))return;s.uniformMatrix3fv(this.addr,!1,e),_t(t,e)}else{if(vt(t,n))return;Wo.set(n),s.uniformMatrix3fv(this.addr,!1,Wo),_t(t,n)}}function $f(s,e){const t=this.cache,n=e.elements;if(n===void 0){if(vt(t,e))return;s.uniformMatrix4fv(this.addr,!1,e),_t(t,e)}else{if(vt(t,n))return;Vo.set(n),s.uniformMatrix4fv(this.addr,!1,Vo),_t(t,n)}}function Kf(s,e){const t=this.cache;t[0]!==e&&(s.uniform1i(this.addr,e),t[0]=e)}function Jf(s,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(s.uniform2i(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(vt(t,e))return;s.uniform2iv(this.addr,e),_t(t,e)}}function Qf(s,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(s.uniform3i(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(vt(t,e))return;s.uniform3iv(this.addr,e),_t(t,e)}}function ep(s,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(s.uniform4i(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(vt(t,e))return;s.uniform4iv(this.addr,e),_t(t,e)}}function tp(s,e){const t=this.cache;t[0]!==e&&(s.uniform1ui(this.addr,e),t[0]=e)}function np(s,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(s.uniform2ui(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(vt(t,e))return;s.uniform2uiv(this.addr,e),_t(t,e)}}function ip(s,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(s.uniform3ui(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(vt(t,e))return;s.uniform3uiv(this.addr,e),_t(t,e)}}function sp(s,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(s.uniform4ui(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(vt(t,e))return;s.uniform4uiv(this.addr,e),_t(t,e)}}function rp(s,e,t){const n=this.cache,i=t.allocateTextureUnit();n[0]!==i&&(s.uniform1i(this.addr,i),n[0]=i);const r=this.type===s.SAMPLER_2D_SHADOW?$c:Zc;t.setTexture2D(e||r,i)}function ap(s,e,t){const n=this.cache,i=t.allocateTextureUnit();n[0]!==i&&(s.uniform1i(this.addr,i),n[0]=i),t.setTexture3D(e||Jc,i)}function op(s,e,t){const n=this.cache,i=t.allocateTextureUnit();n[0]!==i&&(s.uniform1i(this.addr,i),n[0]=i),t.setTextureCube(e||Qc,i)}function cp(s,e,t){const n=this.cache,i=t.allocateTextureUnit();n[0]!==i&&(s.uniform1i(this.addr,i),n[0]=i),t.setTexture2DArray(e||Kc,i)}function lp(s){switch(s){case 5126:return Wf;case 35664:return Xf;case 35665:return jf;case 35666:return qf;case 35674:return Yf;case 35675:return Zf;case 35676:return $f;case 5124:case 35670:return Kf;case 35667:case 35671:return Jf;case 35668:case 35672:return Qf;case 35669:case 35673:return ep;case 5125:return tp;case 36294:return np;case 36295:return ip;case 36296:return sp;case 35678:case 36198:case 36298:case 36306:case 35682:return rp;case 35679:case 36299:case 36307:return ap;case 35680:case 36300:case 36308:case 36293:return op;case 36289:case 36303:case 36311:case 36292:return cp}}function hp(s,e){s.uniform1fv(this.addr,e)}function up(s,e){const t=Li(e,this.size,2);s.uniform2fv(this.addr,t)}function dp(s,e){const t=Li(e,this.size,3);s.uniform3fv(this.addr,t)}function fp(s,e){const t=Li(e,this.size,4);s.uniform4fv(this.addr,t)}function pp(s,e){const t=Li(e,this.size,4);s.uniformMatrix2fv(this.addr,!1,t)}function mp(s,e){const t=Li(e,this.size,9);s.uniformMatrix3fv(this.addr,!1,t)}function gp(s,e){const t=Li(e,this.size,16);s.uniformMatrix4fv(this.addr,!1,t)}function vp(s,e){s.uniform1iv(this.addr,e)}function _p(s,e){s.uniform2iv(this.addr,e)}function xp(s,e){s.uniform3iv(this.addr,e)}function yp(s,e){s.uniform4iv(this.addr,e)}function Mp(s,e){s.uniform1uiv(this.addr,e)}function bp(s,e){s.uniform2uiv(this.addr,e)}function Sp(s,e){s.uniform3uiv(this.addr,e)}function Ep(s,e){s.uniform4uiv(this.addr,e)}function wp(s,e,t){const n=this.cache,i=e.length,r=tr(t,i);vt(n,r)||(s.uniform1iv(this.addr,r),_t(n,r));for(let a=0;a!==i;++a)t.setTexture2D(e[a]||Zc,r[a])}function Tp(s,e,t){const n=this.cache,i=e.length,r=tr(t,i);vt(n,r)||(s.uniform1iv(this.addr,r),_t(n,r));for(let a=0;a!==i;++a)t.setTexture3D(e[a]||Jc,r[a])}function Ap(s,e,t){const n=this.cache,i=e.length,r=tr(t,i);vt(n,r)||(s.uniform1iv(this.addr,r),_t(n,r));for(let a=0;a!==i;++a)t.setTextureCube(e[a]||Qc,r[a])}function Cp(s,e,t){const n=this.cache,i=e.length,r=tr(t,i);vt(n,r)||(s.uniform1iv(this.addr,r),_t(n,r));for(let a=0;a!==i;++a)t.setTexture2DArray(e[a]||Kc,r[a])}function Rp(s){switch(s){case 5126:return hp;case 35664:return up;case 35665:return dp;case 35666:return fp;case 35674:return pp;case 35675:return mp;case 35676:return gp;case 5124:case 35670:return vp;case 35667:case 35671:return _p;case 35668:case 35672:return xp;case 35669:case 35673:return yp;case 5125:return Mp;case 36294:return bp;case 36295:return Sp;case 36296:return Ep;case 35678:case 36198:case 36298:case 36306:case 35682:return wp;case 35679:case 36299:case 36307:return Tp;case 35680:case 36300:case 36308:case 36293:return Ap;case 36289:case 36303:case 36311:case 36292:return Cp}}class Pp{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.type=t.type,this.setValue=lp(t.type)}}class Lp{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.type=t.type,this.size=t.size,this.setValue=Rp(t.type)}}class Dp{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,t,n){const i=this.seq;for(let r=0,a=i.length;r!==a;++r){const o=i[r];o.setValue(e,t[o.id],n)}}}const Br=/(\w+)(\])?(\[|\.)?/g;function jo(s,e){s.seq.push(e),s.map[e.id]=e}function Op(s,e,t){const n=s.name,i=n.length;for(Br.lastIndex=0;;){const r=Br.exec(n),a=Br.lastIndex;let o=r[1];const c=r[2]==="]",l=r[3];if(c&&(o=o|0),l===void 0||l==="["&&a+2===i){jo(t,l===void 0?new Pp(o,s,e):new Lp(o,s,e));break}else{let u=t.map[o];u===void 0&&(u=new Dp(o),jo(t,u)),t=u}}}class Fs{constructor(e,t){this.seq=[],this.map={};const n=e.getProgramParameter(t,e.ACTIVE_UNIFORMS);for(let i=0;i<n;++i){const r=e.getActiveUniform(t,i),a=e.getUniformLocation(t,r.name);Op(r,a,this)}}setValue(e,t,n,i){const r=this.map[t];r!==void 0&&r.setValue(e,n,i)}setOptional(e,t,n){const i=t[n];i!==void 0&&this.setValue(e,n,i)}static upload(e,t,n,i){for(let r=0,a=t.length;r!==a;++r){const o=t[r],c=n[o.id];c.needsUpdate!==!1&&o.setValue(e,c.value,i)}}static seqWithValue(e,t){const n=[];for(let i=0,r=e.length;i!==r;++i){const a=e[i];a.id in t&&n.push(a)}return n}}function qo(s,e,t){const n=s.createShader(e);return s.shaderSource(n,t),s.compileShader(n),n}const Np=37297;let Ip=0;function Up(s,e){const t=s.split(`
`),n=[],i=Math.max(e-6,0),r=Math.min(e+6,t.length);for(let a=i;a<r;a++){const o=a+1;n.push(`${o===e?">":" "} ${o}: ${t[a]}`)}return n.join(`
`)}function Fp(s){const e=Qe.getPrimaries(Qe.workingColorSpace),t=Qe.getPrimaries(s);let n;switch(e===t?n="":e===ks&&t===Gs?n="LinearDisplayP3ToLinearSRGB":e===Gs&&t===ks&&(n="LinearSRGBToLinearDisplayP3"),s){case vn:case Ks:return[n,"LinearTransferOETF"];case Et:case va:return[n,"sRGBTransferOETF"];default:return console.warn("THREE.WebGLProgram: Unsupported color space:",s),[n,"LinearTransferOETF"]}}function Yo(s,e,t){const n=s.getShaderParameter(e,s.COMPILE_STATUS),i=s.getShaderInfoLog(e).trim();if(n&&i==="")return"";const r=/ERROR: 0:(\d+)/.exec(i);if(r){const a=parseInt(r[1]);return t.toUpperCase()+`

`+i+`

`+Up(s.getShaderSource(e),a)}else return i}function Bp(s,e){const t=Fp(e);return`vec4 ${s}( vec4 value ) { return ${t[0]}( ${t[1]}( value ) ); }`}function zp(s,e){let t;switch(e){case Yl:t="Linear";break;case Zl:t="Reinhard";break;case $l:t="OptimizedCineon";break;case Kl:t="ACESFilmic";break;case Ql:t="AgX";break;case Jl:t="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",e),t="Linear"}return"vec3 "+s+"( vec3 color ) { return "+t+"ToneMapping( color ); }"}function Gp(s){return[s.extensionDerivatives||s.envMapCubeUVHeight||s.bumpMap||s.normalMapTangentSpace||s.clearcoatNormalMap||s.flatShading||s.shaderID==="physical"?"#extension GL_OES_standard_derivatives : enable":"",(s.extensionFragDepth||s.logarithmicDepthBuffer)&&s.rendererExtensionFragDepth?"#extension GL_EXT_frag_depth : enable":"",s.extensionDrawBuffers&&s.rendererExtensionDrawBuffers?"#extension GL_EXT_draw_buffers : require":"",(s.extensionShaderTextureLOD||s.envMap||s.transmission)&&s.rendererExtensionShaderTextureLod?"#extension GL_EXT_shader_texture_lod : enable":""].filter(vi).join(`
`)}function kp(s){return[s.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":""].filter(vi).join(`
`)}function Hp(s){const e=[];for(const t in s){const n=s[t];n!==!1&&e.push("#define "+t+" "+n)}return e.join(`
`)}function Vp(s,e){const t={},n=s.getProgramParameter(e,s.ACTIVE_ATTRIBUTES);for(let i=0;i<n;i++){const r=s.getActiveAttrib(e,i),a=r.name;let o=1;r.type===s.FLOAT_MAT2&&(o=2),r.type===s.FLOAT_MAT3&&(o=3),r.type===s.FLOAT_MAT4&&(o=4),t[a]={type:r.type,location:s.getAttribLocation(e,a),locationSize:o}}return t}function vi(s){return s!==""}function Zo(s,e){const t=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return s.replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,t).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function $o(s,e){return s.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}const Wp=/^[ \t]*#include +<([\w\d./]+)>/gm;function la(s){return s.replace(Wp,jp)}const Xp=new Map([["encodings_fragment","colorspace_fragment"],["encodings_pars_fragment","colorspace_pars_fragment"],["output_fragment","opaque_fragment"]]);function jp(s,e){let t=We[e];if(t===void 0){const n=Xp.get(e);if(n!==void 0)t=We[n],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',e,n);else throw new Error("Can not resolve #include <"+e+">")}return la(t)}const qp=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function Ko(s){return s.replace(qp,Yp)}function Yp(s,e,t,n){let i="";for(let r=parseInt(e);r<parseInt(t);r++)i+=n.replace(/\[\s*i\s*\]/g,"[ "+r+" ]").replace(/UNROLLED_LOOP_INDEX/g,r);return i}function Jo(s){let e="precision "+s.precision+` float;
precision `+s.precision+" int;";return s.precision==="highp"?e+=`
#define HIGH_PRECISION`:s.precision==="mediump"?e+=`
#define MEDIUM_PRECISION`:s.precision==="lowp"&&(e+=`
#define LOW_PRECISION`),e}function Zp(s){let e="SHADOWMAP_TYPE_BASIC";return s.shadowMapType===Sc?e="SHADOWMAP_TYPE_PCF":s.shadowMapType===Ec?e="SHADOWMAP_TYPE_PCF_SOFT":s.shadowMapType===dn&&(e="SHADOWMAP_TYPE_VSM"),e}function $p(s){let e="ENVMAP_TYPE_CUBE";if(s.envMap)switch(s.envMapMode){case Ti:case Ai:e="ENVMAP_TYPE_CUBE";break;case $s:e="ENVMAP_TYPE_CUBE_UV";break}return e}function Kp(s){let e="ENVMAP_MODE_REFLECTION";if(s.envMap)switch(s.envMapMode){case Ai:e="ENVMAP_MODE_REFRACTION";break}return e}function Jp(s){let e="ENVMAP_BLENDING_NONE";if(s.envMap)switch(s.combine){case wc:e="ENVMAP_BLENDING_MULTIPLY";break;case jl:e="ENVMAP_BLENDING_MIX";break;case ql:e="ENVMAP_BLENDING_ADD";break}return e}function Qp(s){const e=s.envMapCubeUVHeight;if(e===null)return null;const t=Math.log2(e)-2,n=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,t),7*16)),texelHeight:n,maxMip:t}}function em(s,e,t,n){const i=s.getContext(),r=t.defines;let a=t.vertexShader,o=t.fragmentShader;const c=Zp(t),l=$p(t),h=Kp(t),u=Jp(t),f=Qp(t),p=t.isWebGL2?"":Gp(t),g=kp(t),v=Hp(r),m=i.createProgram();let d,_,x=t.glslVersion?"#version "+t.glslVersion+`
`:"";t.isRawShaderMaterial?(d=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,v].filter(vi).join(`
`),d.length>0&&(d+=`
`),_=[p,"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,v].filter(vi).join(`
`),_.length>0&&(_+=`
`)):(d=[Jo(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,v,t.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",t.batching?"#define USE_BATCHING":"",t.instancing?"#define USE_INSTANCING":"",t.instancingColor?"#define USE_INSTANCING_COLOR":"",t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+h:"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.displacementMap?"#define USE_DISPLACEMENTMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.mapUv?"#define MAP_UV "+t.mapUv:"",t.alphaMapUv?"#define ALPHAMAP_UV "+t.alphaMapUv:"",t.lightMapUv?"#define LIGHTMAP_UV "+t.lightMapUv:"",t.aoMapUv?"#define AOMAP_UV "+t.aoMapUv:"",t.emissiveMapUv?"#define EMISSIVEMAP_UV "+t.emissiveMapUv:"",t.bumpMapUv?"#define BUMPMAP_UV "+t.bumpMapUv:"",t.normalMapUv?"#define NORMALMAP_UV "+t.normalMapUv:"",t.displacementMapUv?"#define DISPLACEMENTMAP_UV "+t.displacementMapUv:"",t.metalnessMapUv?"#define METALNESSMAP_UV "+t.metalnessMapUv:"",t.roughnessMapUv?"#define ROUGHNESSMAP_UV "+t.roughnessMapUv:"",t.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+t.anisotropyMapUv:"",t.clearcoatMapUv?"#define CLEARCOATMAP_UV "+t.clearcoatMapUv:"",t.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+t.clearcoatNormalMapUv:"",t.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+t.clearcoatRoughnessMapUv:"",t.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+t.iridescenceMapUv:"",t.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+t.iridescenceThicknessMapUv:"",t.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+t.sheenColorMapUv:"",t.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+t.sheenRoughnessMapUv:"",t.specularMapUv?"#define SPECULARMAP_UV "+t.specularMapUv:"",t.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+t.specularColorMapUv:"",t.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+t.specularIntensityMapUv:"",t.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+t.transmissionMapUv:"",t.thicknessMapUv?"#define THICKNESSMAP_UV "+t.thicknessMapUv:"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.flatShading?"#define FLAT_SHADED":"",t.skinning?"#define USE_SKINNING":"",t.morphTargets?"#define USE_MORPHTARGETS":"",t.morphNormals&&t.flatShading===!1?"#define USE_MORPHNORMALS":"",t.morphColors&&t.isWebGL2?"#define USE_MORPHCOLORS":"",t.morphTargetsCount>0&&t.isWebGL2?"#define MORPHTARGETS_TEXTURE":"",t.morphTargetsCount>0&&t.isWebGL2?"#define MORPHTARGETS_TEXTURE_STRIDE "+t.morphTextureStride:"",t.morphTargetsCount>0&&t.isWebGL2?"#define MORPHTARGETS_COUNT "+t.morphTargetsCount:"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+c:"",t.sizeAttenuation?"#define USE_SIZEATTENUATION":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.useLegacyLights?"#define LEGACY_LIGHTS":"",t.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",t.logarithmicDepthBuffer&&t.rendererExtensionFragDepth?"#define USE_LOGDEPTHBUF_EXT":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#if ( defined( USE_MORPHTARGETS ) && ! defined( MORPHTARGETS_TEXTURE ) )","	attribute vec3 morphTarget0;","	attribute vec3 morphTarget1;","	attribute vec3 morphTarget2;","	attribute vec3 morphTarget3;","	#ifdef USE_MORPHNORMALS","		attribute vec3 morphNormal0;","		attribute vec3 morphNormal1;","		attribute vec3 morphNormal2;","		attribute vec3 morphNormal3;","	#else","		attribute vec3 morphTarget4;","		attribute vec3 morphTarget5;","		attribute vec3 morphTarget6;","		attribute vec3 morphTarget7;","	#endif","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(vi).join(`
`),_=[p,Jo(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,v,t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.matcap?"#define USE_MATCAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+l:"",t.envMap?"#define "+h:"",t.envMap?"#define "+u:"",f?"#define CUBEUV_TEXEL_WIDTH "+f.texelWidth:"",f?"#define CUBEUV_TEXEL_HEIGHT "+f.texelHeight:"",f?"#define CUBEUV_MAX_MIP "+f.maxMip+".0":"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoat?"#define USE_CLEARCOAT":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.iridescence?"#define USE_IRIDESCENCE":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaTest?"#define USE_ALPHATEST":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.sheen?"#define USE_SHEEN":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors||t.instancingColor?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.gradientMap?"#define USE_GRADIENTMAP":"",t.flatShading?"#define FLAT_SHADED":"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+c:"",t.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.useLegacyLights?"#define LEGACY_LIGHTS":"",t.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",t.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",t.logarithmicDepthBuffer&&t.rendererExtensionFragDepth?"#define USE_LOGDEPTHBUF_EXT":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",t.toneMapping!==Tn?"#define TONE_MAPPING":"",t.toneMapping!==Tn?We.tonemapping_pars_fragment:"",t.toneMapping!==Tn?zp("toneMapping",t.toneMapping):"",t.dithering?"#define DITHERING":"",t.opaque?"#define OPAQUE":"",We.colorspace_pars_fragment,Bp("linearToOutputTexel",t.outputColorSpace),t.useDepthPacking?"#define DEPTH_PACKING "+t.depthPacking:"",`
`].filter(vi).join(`
`)),a=la(a),a=Zo(a,t),a=$o(a,t),o=la(o),o=Zo(o,t),o=$o(o,t),a=Ko(a),o=Ko(o),t.isWebGL2&&t.isRawShaderMaterial!==!0&&(x=`#version 300 es
`,d=[g,"precision mediump sampler2DArray;","#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+d,_=["precision mediump sampler2DArray;","#define varying in",t.glslVersion===go?"":"layout(location = 0) out highp vec4 pc_fragColor;",t.glslVersion===go?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+_);const y=x+d+a,R=x+_+o,E=qo(i,i.VERTEX_SHADER,y),C=qo(i,i.FRAGMENT_SHADER,R);i.attachShader(m,E),i.attachShader(m,C),t.index0AttributeName!==void 0?i.bindAttribLocation(m,0,t.index0AttributeName):t.morphTargets===!0&&i.bindAttribLocation(m,0,"position"),i.linkProgram(m);function N(G){if(s.debug.checkShaderErrors){const Z=i.getProgramInfoLog(m).trim(),D=i.getShaderInfoLog(E).trim(),B=i.getShaderInfoLog(C).trim();let z=!0,$=!0;if(i.getProgramParameter(m,i.LINK_STATUS)===!1)if(z=!1,typeof s.debug.onShaderError=="function")s.debug.onShaderError(i,m,E,C);else{const K=Yo(i,E,"vertex"),J=Yo(i,C,"fragment");console.error("THREE.WebGLProgram: Shader Error "+i.getError()+" - VALIDATE_STATUS "+i.getProgramParameter(m,i.VALIDATE_STATUS)+`

Program Info Log: `+Z+`
`+K+`
`+J)}else Z!==""?console.warn("THREE.WebGLProgram: Program Info Log:",Z):(D===""||B==="")&&($=!1);$&&(G.diagnostics={runnable:z,programLog:Z,vertexShader:{log:D,prefix:d},fragmentShader:{log:B,prefix:_}})}i.deleteShader(E),i.deleteShader(C),b=new Fs(i,m),T=Vp(i,m)}let b;this.getUniforms=function(){return b===void 0&&N(this),b};let T;this.getAttributes=function(){return T===void 0&&N(this),T};let I=t.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return I===!1&&(I=i.getProgramParameter(m,Np)),I},this.destroy=function(){n.releaseStatesOfProgram(this),i.deleteProgram(m),this.program=void 0},this.type=t.shaderType,this.name=t.shaderName,this.id=Ip++,this.cacheKey=e,this.usedTimes=1,this.program=m,this.vertexShader=E,this.fragmentShader=C,this}let tm=0;class nm{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e){const t=e.vertexShader,n=e.fragmentShader,i=this._getShaderStage(t),r=this._getShaderStage(n),a=this._getShaderCacheForMaterial(e);return a.has(i)===!1&&(a.add(i),i.usedTimes++),a.has(r)===!1&&(a.add(r),r.usedTimes++),this}remove(e){const t=this.materialCache.get(e);for(const n of t)n.usedTimes--,n.usedTimes===0&&this.shaderCache.delete(n.code);return this.materialCache.delete(e),this}getVertexShaderID(e){return this._getShaderStage(e.vertexShader).id}getFragmentShaderID(e){return this._getShaderStage(e.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){const t=this.materialCache;let n=t.get(e);return n===void 0&&(n=new Set,t.set(e,n)),n}_getShaderStage(e){const t=this.shaderCache;let n=t.get(e);return n===void 0&&(n=new im(e),t.set(e,n)),n}}class im{constructor(e){this.id=tm++,this.code=e,this.usedTimes=0}}function sm(s,e,t,n,i,r,a){const o=new _a,c=new nm,l=[],h=i.isWebGL2,u=i.logarithmicDepthBuffer,f=i.vertexTextures;let p=i.precision;const g={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function v(b){return b===0?"uv":`uv${b}`}function m(b,T,I,G,Z){const D=G.fog,B=Z.geometry,z=b.isMeshStandardMaterial?G.environment:null,$=(b.isMeshStandardMaterial?t:e).get(b.envMap||z),K=$&&$.mapping===$s?$.image.height:null,J=g[b.type];b.precision!==null&&(p=i.getMaxPrecision(b.precision),p!==b.precision&&console.warn("THREE.WebGLProgram.getParameters:",b.precision,"not supported, using",p,"instead."));const Q=B.morphAttributes.position||B.morphAttributes.normal||B.morphAttributes.color,ne=Q!==void 0?Q.length:0;let ce=0;B.morphAttributes.position!==void 0&&(ce=1),B.morphAttributes.normal!==void 0&&(ce=2),B.morphAttributes.color!==void 0&&(ce=3);let X,ee,pe,Se;if(J){const dt=nn[J];X=dt.vertexShader,ee=dt.fragmentShader}else X=b.vertexShader,ee=b.fragmentShader,c.update(b),pe=c.getVertexShaderID(b),Se=c.getFragmentShaderID(b);const ve=s.getRenderTarget(),De=Z.isInstancedMesh===!0,Oe=Z.isBatchedMesh===!0,we=!!b.map,Fe=!!b.matcap,L=!!$,ue=!!b.aoMap,Y=!!b.lightMap,oe=!!b.bumpMap,q=!!b.normalMap,Te=!!b.displacementMap,ge=!!b.emissiveMap,w=!!b.metalnessMap,S=!!b.roughnessMap,U=b.anisotropy>0,re=b.clearcoat>0,ie=b.iridescence>0,te=b.sheen>0,Ee=b.transmission>0,fe=U&&!!b.anisotropyMap,ye=re&&!!b.clearcoatMap,Pe=re&&!!b.clearcoatNormalMap,ke=re&&!!b.clearcoatRoughnessMap,se=ie&&!!b.iridescenceMap,Ke=ie&&!!b.iridescenceThicknessMap,Xe=te&&!!b.sheenColorMap,Be=te&&!!b.sheenRoughnessMap,Re=!!b.specularMap,_e=!!b.specularColorMap,P=!!b.specularIntensityMap,le=Ee&&!!b.transmissionMap,Ae=Ee&&!!b.thicknessMap,be=!!b.gradientMap,ae=!!b.alphaMap,O=b.alphaTest>0,he=!!b.alphaHash,me=!!b.extensions,Ne=!!B.attributes.uv1,Le=!!B.attributes.uv2,Ze=!!B.attributes.uv3;let $e=Tn;return b.toneMapped&&(ve===null||ve.isXRRenderTarget===!0)&&($e=s.toneMapping),{isWebGL2:h,shaderID:J,shaderType:b.type,shaderName:b.name,vertexShader:X,fragmentShader:ee,defines:b.defines,customVertexShaderID:pe,customFragmentShaderID:Se,isRawShaderMaterial:b.isRawShaderMaterial===!0,glslVersion:b.glslVersion,precision:p,batching:Oe,instancing:De,instancingColor:De&&Z.instanceColor!==null,supportsVertexTextures:f,outputColorSpace:ve===null?s.outputColorSpace:ve.isXRRenderTarget===!0?ve.texture.colorSpace:vn,map:we,matcap:Fe,envMap:L,envMapMode:L&&$.mapping,envMapCubeUVHeight:K,aoMap:ue,lightMap:Y,bumpMap:oe,normalMap:q,displacementMap:f&&Te,emissiveMap:ge,normalMapObjectSpace:q&&b.normalMapType===uh,normalMapTangentSpace:q&&b.normalMapType===Ic,metalnessMap:w,roughnessMap:S,anisotropy:U,anisotropyMap:fe,clearcoat:re,clearcoatMap:ye,clearcoatNormalMap:Pe,clearcoatRoughnessMap:ke,iridescence:ie,iridescenceMap:se,iridescenceThicknessMap:Ke,sheen:te,sheenColorMap:Xe,sheenRoughnessMap:Be,specularMap:Re,specularColorMap:_e,specularIntensityMap:P,transmission:Ee,transmissionMap:le,thicknessMap:Ae,gradientMap:be,opaque:b.transparent===!1&&b.blending===yi,alphaMap:ae,alphaTest:O,alphaHash:he,combine:b.combine,mapUv:we&&v(b.map.channel),aoMapUv:ue&&v(b.aoMap.channel),lightMapUv:Y&&v(b.lightMap.channel),bumpMapUv:oe&&v(b.bumpMap.channel),normalMapUv:q&&v(b.normalMap.channel),displacementMapUv:Te&&v(b.displacementMap.channel),emissiveMapUv:ge&&v(b.emissiveMap.channel),metalnessMapUv:w&&v(b.metalnessMap.channel),roughnessMapUv:S&&v(b.roughnessMap.channel),anisotropyMapUv:fe&&v(b.anisotropyMap.channel),clearcoatMapUv:ye&&v(b.clearcoatMap.channel),clearcoatNormalMapUv:Pe&&v(b.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:ke&&v(b.clearcoatRoughnessMap.channel),iridescenceMapUv:se&&v(b.iridescenceMap.channel),iridescenceThicknessMapUv:Ke&&v(b.iridescenceThicknessMap.channel),sheenColorMapUv:Xe&&v(b.sheenColorMap.channel),sheenRoughnessMapUv:Be&&v(b.sheenRoughnessMap.channel),specularMapUv:Re&&v(b.specularMap.channel),specularColorMapUv:_e&&v(b.specularColorMap.channel),specularIntensityMapUv:P&&v(b.specularIntensityMap.channel),transmissionMapUv:le&&v(b.transmissionMap.channel),thicknessMapUv:Ae&&v(b.thicknessMap.channel),alphaMapUv:ae&&v(b.alphaMap.channel),vertexTangents:!!B.attributes.tangent&&(q||U),vertexColors:b.vertexColors,vertexAlphas:b.vertexColors===!0&&!!B.attributes.color&&B.attributes.color.itemSize===4,vertexUv1s:Ne,vertexUv2s:Le,vertexUv3s:Ze,pointsUvs:Z.isPoints===!0&&!!B.attributes.uv&&(we||ae),fog:!!D,useFog:b.fog===!0,fogExp2:D&&D.isFogExp2,flatShading:b.flatShading===!0,sizeAttenuation:b.sizeAttenuation===!0,logarithmicDepthBuffer:u,skinning:Z.isSkinnedMesh===!0,morphTargets:B.morphAttributes.position!==void 0,morphNormals:B.morphAttributes.normal!==void 0,morphColors:B.morphAttributes.color!==void 0,morphTargetsCount:ne,morphTextureStride:ce,numDirLights:T.directional.length,numPointLights:T.point.length,numSpotLights:T.spot.length,numSpotLightMaps:T.spotLightMap.length,numRectAreaLights:T.rectArea.length,numHemiLights:T.hemi.length,numDirLightShadows:T.directionalShadowMap.length,numPointLightShadows:T.pointShadowMap.length,numSpotLightShadows:T.spotShadowMap.length,numSpotLightShadowsWithMaps:T.numSpotLightShadowsWithMaps,numLightProbes:T.numLightProbes,numClippingPlanes:a.numPlanes,numClipIntersection:a.numIntersection,dithering:b.dithering,shadowMapEnabled:s.shadowMap.enabled&&I.length>0,shadowMapType:s.shadowMap.type,toneMapping:$e,useLegacyLights:s._useLegacyLights,decodeVideoTexture:we&&b.map.isVideoTexture===!0&&Qe.getTransfer(b.map.colorSpace)===it,premultipliedAlpha:b.premultipliedAlpha,doubleSided:b.side===wt,flipSided:b.side===zt,useDepthPacking:b.depthPacking>=0,depthPacking:b.depthPacking||0,index0AttributeName:b.index0AttributeName,extensionDerivatives:me&&b.extensions.derivatives===!0,extensionFragDepth:me&&b.extensions.fragDepth===!0,extensionDrawBuffers:me&&b.extensions.drawBuffers===!0,extensionShaderTextureLOD:me&&b.extensions.shaderTextureLOD===!0,extensionClipCullDistance:me&&b.extensions.clipCullDistance&&n.has("WEBGL_clip_cull_distance"),rendererExtensionFragDepth:h||n.has("EXT_frag_depth"),rendererExtensionDrawBuffers:h||n.has("WEBGL_draw_buffers"),rendererExtensionShaderTextureLod:h||n.has("EXT_shader_texture_lod"),rendererExtensionParallelShaderCompile:n.has("KHR_parallel_shader_compile"),customProgramCacheKey:b.customProgramCacheKey()}}function d(b){const T=[];if(b.shaderID?T.push(b.shaderID):(T.push(b.customVertexShaderID),T.push(b.customFragmentShaderID)),b.defines!==void 0)for(const I in b.defines)T.push(I),T.push(b.defines[I]);return b.isRawShaderMaterial===!1&&(_(T,b),x(T,b),T.push(s.outputColorSpace)),T.push(b.customProgramCacheKey),T.join()}function _(b,T){b.push(T.precision),b.push(T.outputColorSpace),b.push(T.envMapMode),b.push(T.envMapCubeUVHeight),b.push(T.mapUv),b.push(T.alphaMapUv),b.push(T.lightMapUv),b.push(T.aoMapUv),b.push(T.bumpMapUv),b.push(T.normalMapUv),b.push(T.displacementMapUv),b.push(T.emissiveMapUv),b.push(T.metalnessMapUv),b.push(T.roughnessMapUv),b.push(T.anisotropyMapUv),b.push(T.clearcoatMapUv),b.push(T.clearcoatNormalMapUv),b.push(T.clearcoatRoughnessMapUv),b.push(T.iridescenceMapUv),b.push(T.iridescenceThicknessMapUv),b.push(T.sheenColorMapUv),b.push(T.sheenRoughnessMapUv),b.push(T.specularMapUv),b.push(T.specularColorMapUv),b.push(T.specularIntensityMapUv),b.push(T.transmissionMapUv),b.push(T.thicknessMapUv),b.push(T.combine),b.push(T.fogExp2),b.push(T.sizeAttenuation),b.push(T.morphTargetsCount),b.push(T.morphAttributeCount),b.push(T.numDirLights),b.push(T.numPointLights),b.push(T.numSpotLights),b.push(T.numSpotLightMaps),b.push(T.numHemiLights),b.push(T.numRectAreaLights),b.push(T.numDirLightShadows),b.push(T.numPointLightShadows),b.push(T.numSpotLightShadows),b.push(T.numSpotLightShadowsWithMaps),b.push(T.numLightProbes),b.push(T.shadowMapType),b.push(T.toneMapping),b.push(T.numClippingPlanes),b.push(T.numClipIntersection),b.push(T.depthPacking)}function x(b,T){o.disableAll(),T.isWebGL2&&o.enable(0),T.supportsVertexTextures&&o.enable(1),T.instancing&&o.enable(2),T.instancingColor&&o.enable(3),T.matcap&&o.enable(4),T.envMap&&o.enable(5),T.normalMapObjectSpace&&o.enable(6),T.normalMapTangentSpace&&o.enable(7),T.clearcoat&&o.enable(8),T.iridescence&&o.enable(9),T.alphaTest&&o.enable(10),T.vertexColors&&o.enable(11),T.vertexAlphas&&o.enable(12),T.vertexUv1s&&o.enable(13),T.vertexUv2s&&o.enable(14),T.vertexUv3s&&o.enable(15),T.vertexTangents&&o.enable(16),T.anisotropy&&o.enable(17),T.alphaHash&&o.enable(18),T.batching&&o.enable(19),b.push(o.mask),o.disableAll(),T.fog&&o.enable(0),T.useFog&&o.enable(1),T.flatShading&&o.enable(2),T.logarithmicDepthBuffer&&o.enable(3),T.skinning&&o.enable(4),T.morphTargets&&o.enable(5),T.morphNormals&&o.enable(6),T.morphColors&&o.enable(7),T.premultipliedAlpha&&o.enable(8),T.shadowMapEnabled&&o.enable(9),T.useLegacyLights&&o.enable(10),T.doubleSided&&o.enable(11),T.flipSided&&o.enable(12),T.useDepthPacking&&o.enable(13),T.dithering&&o.enable(14),T.transmission&&o.enable(15),T.sheen&&o.enable(16),T.opaque&&o.enable(17),T.pointsUvs&&o.enable(18),T.decodeVideoTexture&&o.enable(19),b.push(o.mask)}function y(b){const T=g[b.type];let I;if(T){const G=nn[T];I=zh.clone(G.uniforms)}else I=b.uniforms;return I}function R(b,T){let I;for(let G=0,Z=l.length;G<Z;G++){const D=l[G];if(D.cacheKey===T){I=D,++I.usedTimes;break}}return I===void 0&&(I=new em(s,T,b,r),l.push(I)),I}function E(b){if(--b.usedTimes===0){const T=l.indexOf(b);l[T]=l[l.length-1],l.pop(),b.destroy()}}function C(b){c.remove(b)}function N(){c.dispose()}return{getParameters:m,getProgramCacheKey:d,getUniforms:y,acquireProgram:R,releaseProgram:E,releaseShaderCache:C,programs:l,dispose:N}}function rm(){let s=new WeakMap;function e(r){let a=s.get(r);return a===void 0&&(a={},s.set(r,a)),a}function t(r){s.delete(r)}function n(r,a,o){s.get(r)[a]=o}function i(){s=new WeakMap}return{get:e,remove:t,update:n,dispose:i}}function am(s,e){return s.groupOrder!==e.groupOrder?s.groupOrder-e.groupOrder:s.renderOrder!==e.renderOrder?s.renderOrder-e.renderOrder:s.material.id!==e.material.id?s.material.id-e.material.id:s.z!==e.z?s.z-e.z:s.id-e.id}function Qo(s,e){return s.groupOrder!==e.groupOrder?s.groupOrder-e.groupOrder:s.renderOrder!==e.renderOrder?s.renderOrder-e.renderOrder:s.z!==e.z?e.z-s.z:s.id-e.id}function ec(){const s=[];let e=0;const t=[],n=[],i=[];function r(){e=0,t.length=0,n.length=0,i.length=0}function a(u,f,p,g,v,m){let d=s[e];return d===void 0?(d={id:u.id,object:u,geometry:f,material:p,groupOrder:g,renderOrder:u.renderOrder,z:v,group:m},s[e]=d):(d.id=u.id,d.object=u,d.geometry=f,d.material=p,d.groupOrder=g,d.renderOrder=u.renderOrder,d.z=v,d.group=m),e++,d}function o(u,f,p,g,v,m){const d=a(u,f,p,g,v,m);p.transmission>0?n.push(d):p.transparent===!0?i.push(d):t.push(d)}function c(u,f,p,g,v,m){const d=a(u,f,p,g,v,m);p.transmission>0?n.unshift(d):p.transparent===!0?i.unshift(d):t.unshift(d)}function l(u,f){t.length>1&&t.sort(u||am),n.length>1&&n.sort(f||Qo),i.length>1&&i.sort(f||Qo)}function h(){for(let u=e,f=s.length;u<f;u++){const p=s[u];if(p.id===null)break;p.id=null,p.object=null,p.geometry=null,p.material=null,p.group=null}}return{opaque:t,transmissive:n,transparent:i,init:r,push:o,unshift:c,finish:h,sort:l}}function om(){let s=new WeakMap;function e(n,i){const r=s.get(n);let a;return r===void 0?(a=new ec,s.set(n,[a])):i>=r.length?(a=new ec,r.push(a)):a=r[i],a}function t(){s=new WeakMap}return{get:e,dispose:t}}function cm(){const s={};return{get:function(e){if(s[e.id]!==void 0)return s[e.id];let t;switch(e.type){case"DirectionalLight":t={direction:new M,color:new Ue};break;case"SpotLight":t={position:new M,direction:new M,color:new Ue,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":t={position:new M,color:new Ue,distance:0,decay:0};break;case"HemisphereLight":t={direction:new M,skyColor:new Ue,groundColor:new Ue};break;case"RectAreaLight":t={color:new Ue,position:new M,halfWidth:new M,halfHeight:new M};break}return s[e.id]=t,t}}}function lm(){const s={};return{get:function(e){if(s[e.id]!==void 0)return s[e.id];let t;switch(e.type){case"DirectionalLight":t={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new j};break;case"SpotLight":t={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new j};break;case"PointLight":t={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new j,shadowCameraNear:1,shadowCameraFar:1e3};break}return s[e.id]=t,t}}}let hm=0;function um(s,e){return(e.castShadow?2:0)-(s.castShadow?2:0)+(e.map?1:0)-(s.map?1:0)}function dm(s,e){const t=new cm,n=lm(),i={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let h=0;h<9;h++)i.probe.push(new M);const r=new M,a=new at,o=new at;function c(h,u){let f=0,p=0,g=0;for(let G=0;G<9;G++)i.probe[G].set(0,0,0);let v=0,m=0,d=0,_=0,x=0,y=0,R=0,E=0,C=0,N=0,b=0;h.sort(um);const T=u===!0?Math.PI:1;for(let G=0,Z=h.length;G<Z;G++){const D=h[G],B=D.color,z=D.intensity,$=D.distance,K=D.shadow&&D.shadow.map?D.shadow.map.texture:null;if(D.isAmbientLight)f+=B.r*z*T,p+=B.g*z*T,g+=B.b*z*T;else if(D.isLightProbe){for(let J=0;J<9;J++)i.probe[J].addScaledVector(D.sh.coefficients[J],z);b++}else if(D.isDirectionalLight){const J=t.get(D);if(J.color.copy(D.color).multiplyScalar(D.intensity*T),D.castShadow){const Q=D.shadow,ne=n.get(D);ne.shadowBias=Q.bias,ne.shadowNormalBias=Q.normalBias,ne.shadowRadius=Q.radius,ne.shadowMapSize=Q.mapSize,i.directionalShadow[v]=ne,i.directionalShadowMap[v]=K,i.directionalShadowMatrix[v]=D.shadow.matrix,y++}i.directional[v]=J,v++}else if(D.isSpotLight){const J=t.get(D);J.position.setFromMatrixPosition(D.matrixWorld),J.color.copy(B).multiplyScalar(z*T),J.distance=$,J.coneCos=Math.cos(D.angle),J.penumbraCos=Math.cos(D.angle*(1-D.penumbra)),J.decay=D.decay,i.spot[d]=J;const Q=D.shadow;if(D.map&&(i.spotLightMap[C]=D.map,C++,Q.updateMatrices(D),D.castShadow&&N++),i.spotLightMatrix[d]=Q.matrix,D.castShadow){const ne=n.get(D);ne.shadowBias=Q.bias,ne.shadowNormalBias=Q.normalBias,ne.shadowRadius=Q.radius,ne.shadowMapSize=Q.mapSize,i.spotShadow[d]=ne,i.spotShadowMap[d]=K,E++}d++}else if(D.isRectAreaLight){const J=t.get(D);J.color.copy(B).multiplyScalar(z),J.halfWidth.set(D.width*.5,0,0),J.halfHeight.set(0,D.height*.5,0),i.rectArea[_]=J,_++}else if(D.isPointLight){const J=t.get(D);if(J.color.copy(D.color).multiplyScalar(D.intensity*T),J.distance=D.distance,J.decay=D.decay,D.castShadow){const Q=D.shadow,ne=n.get(D);ne.shadowBias=Q.bias,ne.shadowNormalBias=Q.normalBias,ne.shadowRadius=Q.radius,ne.shadowMapSize=Q.mapSize,ne.shadowCameraNear=Q.camera.near,ne.shadowCameraFar=Q.camera.far,i.pointShadow[m]=ne,i.pointShadowMap[m]=K,i.pointShadowMatrix[m]=D.shadow.matrix,R++}i.point[m]=J,m++}else if(D.isHemisphereLight){const J=t.get(D);J.skyColor.copy(D.color).multiplyScalar(z*T),J.groundColor.copy(D.groundColor).multiplyScalar(z*T),i.hemi[x]=J,x++}}_>0&&(e.isWebGL2?s.has("OES_texture_float_linear")===!0?(i.rectAreaLTC1=de.LTC_FLOAT_1,i.rectAreaLTC2=de.LTC_FLOAT_2):(i.rectAreaLTC1=de.LTC_HALF_1,i.rectAreaLTC2=de.LTC_HALF_2):s.has("OES_texture_float_linear")===!0?(i.rectAreaLTC1=de.LTC_FLOAT_1,i.rectAreaLTC2=de.LTC_FLOAT_2):s.has("OES_texture_half_float_linear")===!0?(i.rectAreaLTC1=de.LTC_HALF_1,i.rectAreaLTC2=de.LTC_HALF_2):console.error("THREE.WebGLRenderer: Unable to use RectAreaLight. Missing WebGL extensions.")),i.ambient[0]=f,i.ambient[1]=p,i.ambient[2]=g;const I=i.hash;(I.directionalLength!==v||I.pointLength!==m||I.spotLength!==d||I.rectAreaLength!==_||I.hemiLength!==x||I.numDirectionalShadows!==y||I.numPointShadows!==R||I.numSpotShadows!==E||I.numSpotMaps!==C||I.numLightProbes!==b)&&(i.directional.length=v,i.spot.length=d,i.rectArea.length=_,i.point.length=m,i.hemi.length=x,i.directionalShadow.length=y,i.directionalShadowMap.length=y,i.pointShadow.length=R,i.pointShadowMap.length=R,i.spotShadow.length=E,i.spotShadowMap.length=E,i.directionalShadowMatrix.length=y,i.pointShadowMatrix.length=R,i.spotLightMatrix.length=E+C-N,i.spotLightMap.length=C,i.numSpotLightShadowsWithMaps=N,i.numLightProbes=b,I.directionalLength=v,I.pointLength=m,I.spotLength=d,I.rectAreaLength=_,I.hemiLength=x,I.numDirectionalShadows=y,I.numPointShadows=R,I.numSpotShadows=E,I.numSpotMaps=C,I.numLightProbes=b,i.version=hm++)}function l(h,u){let f=0,p=0,g=0,v=0,m=0;const d=u.matrixWorldInverse;for(let _=0,x=h.length;_<x;_++){const y=h[_];if(y.isDirectionalLight){const R=i.directional[f];R.direction.setFromMatrixPosition(y.matrixWorld),r.setFromMatrixPosition(y.target.matrixWorld),R.direction.sub(r),R.direction.transformDirection(d),f++}else if(y.isSpotLight){const R=i.spot[g];R.position.setFromMatrixPosition(y.matrixWorld),R.position.applyMatrix4(d),R.direction.setFromMatrixPosition(y.matrixWorld),r.setFromMatrixPosition(y.target.matrixWorld),R.direction.sub(r),R.direction.transformDirection(d),g++}else if(y.isRectAreaLight){const R=i.rectArea[v];R.position.setFromMatrixPosition(y.matrixWorld),R.position.applyMatrix4(d),o.identity(),a.copy(y.matrixWorld),a.premultiply(d),o.extractRotation(a),R.halfWidth.set(y.width*.5,0,0),R.halfHeight.set(0,y.height*.5,0),R.halfWidth.applyMatrix4(o),R.halfHeight.applyMatrix4(o),v++}else if(y.isPointLight){const R=i.point[p];R.position.setFromMatrixPosition(y.matrixWorld),R.position.applyMatrix4(d),p++}else if(y.isHemisphereLight){const R=i.hemi[m];R.direction.setFromMatrixPosition(y.matrixWorld),R.direction.transformDirection(d),m++}}}return{setup:c,setupView:l,state:i}}function tc(s,e){const t=new dm(s,e),n=[],i=[];function r(){n.length=0,i.length=0}function a(u){n.push(u)}function o(u){i.push(u)}function c(u){t.setup(n,u)}function l(u){t.setupView(n,u)}return{init:r,state:{lightsArray:n,shadowsArray:i,lights:t},setupLights:c,setupLightsView:l,pushLight:a,pushShadow:o}}function fm(s,e){let t=new WeakMap;function n(r,a=0){const o=t.get(r);let c;return o===void 0?(c=new tc(s,e),t.set(r,[c])):a>=o.length?(c=new tc(s,e),o.push(c)):c=o[a],c}function i(){t=new WeakMap}return{get:n,dispose:i}}class pm extends Yn{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=lh,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}}class mm extends Yn{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}}const gm=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,vm=`uniform sampler2D shadow_pass;
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
}`;function _m(s,e,t){let n=new xa;const i=new j,r=new j,a=new St,o=new pm({depthPacking:hh}),c=new mm,l={},h=t.maxTextureSize,u={[Rn]:zt,[zt]:Rn,[wt]:wt},f=new Pn({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new j},radius:{value:4}},vertexShader:gm,fragmentShader:vm}),p=f.clone();p.defines.HORIZONTAL_PASS=1;const g=new tt;g.setAttribute("position",new Rt(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const v=new Ge(g,f),m=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=Sc;let d=this.type;this.render=function(E,C,N){if(m.enabled===!1||m.autoUpdate===!1&&m.needsUpdate===!1||E.length===0)return;const b=s.getRenderTarget(),T=s.getActiveCubeFace(),I=s.getActiveMipmapLevel(),G=s.state;G.setBlending(wn),G.buffers.color.setClear(1,1,1,1),G.buffers.depth.setTest(!0),G.setScissorTest(!1);const Z=d!==dn&&this.type===dn,D=d===dn&&this.type!==dn;for(let B=0,z=E.length;B<z;B++){const $=E[B],K=$.shadow;if(K===void 0){console.warn("THREE.WebGLShadowMap:",$,"has no shadow.");continue}if(K.autoUpdate===!1&&K.needsUpdate===!1)continue;i.copy(K.mapSize);const J=K.getFrameExtents();if(i.multiply(J),r.copy(K.mapSize),(i.x>h||i.y>h)&&(i.x>h&&(r.x=Math.floor(h/J.x),i.x=r.x*J.x,K.mapSize.x=r.x),i.y>h&&(r.y=Math.floor(h/J.y),i.y=r.y*J.y,K.mapSize.y=r.y)),K.map===null||Z===!0||D===!0){const ne=this.type!==dn?{minFilter:Ot,magFilter:Ot}:{};K.map!==null&&K.map.dispose(),K.map=new Wn(i.x,i.y,ne),K.map.texture.name=$.name+".shadowMap",K.camera.updateProjectionMatrix()}s.setRenderTarget(K.map),s.clear();const Q=K.getViewportCount();for(let ne=0;ne<Q;ne++){const ce=K.getViewport(ne);a.set(r.x*ce.x,r.y*ce.y,r.x*ce.z,r.y*ce.w),G.viewport(a),K.updateMatrices($,ne),n=K.getFrustum(),y(C,N,K.camera,$,this.type)}K.isPointLightShadow!==!0&&this.type===dn&&_(K,N),K.needsUpdate=!1}d=this.type,m.needsUpdate=!1,s.setRenderTarget(b,T,I)};function _(E,C){const N=e.update(v);f.defines.VSM_SAMPLES!==E.blurSamples&&(f.defines.VSM_SAMPLES=E.blurSamples,p.defines.VSM_SAMPLES=E.blurSamples,f.needsUpdate=!0,p.needsUpdate=!0),E.mapPass===null&&(E.mapPass=new Wn(i.x,i.y)),f.uniforms.shadow_pass.value=E.map.texture,f.uniforms.resolution.value=E.mapSize,f.uniforms.radius.value=E.radius,s.setRenderTarget(E.mapPass),s.clear(),s.renderBufferDirect(C,null,N,f,v,null),p.uniforms.shadow_pass.value=E.mapPass.texture,p.uniforms.resolution.value=E.mapSize,p.uniforms.radius.value=E.radius,s.setRenderTarget(E.map),s.clear(),s.renderBufferDirect(C,null,N,p,v,null)}function x(E,C,N,b){let T=null;const I=N.isPointLight===!0?E.customDistanceMaterial:E.customDepthMaterial;if(I!==void 0)T=I;else if(T=N.isPointLight===!0?c:o,s.localClippingEnabled&&C.clipShadows===!0&&Array.isArray(C.clippingPlanes)&&C.clippingPlanes.length!==0||C.displacementMap&&C.displacementScale!==0||C.alphaMap&&C.alphaTest>0||C.map&&C.alphaTest>0){const G=T.uuid,Z=C.uuid;let D=l[G];D===void 0&&(D={},l[G]=D);let B=D[Z];B===void 0&&(B=T.clone(),D[Z]=B,C.addEventListener("dispose",R)),T=B}if(T.visible=C.visible,T.wireframe=C.wireframe,b===dn?T.side=C.shadowSide!==null?C.shadowSide:C.side:T.side=C.shadowSide!==null?C.shadowSide:u[C.side],T.alphaMap=C.alphaMap,T.alphaTest=C.alphaTest,T.map=C.map,T.clipShadows=C.clipShadows,T.clippingPlanes=C.clippingPlanes,T.clipIntersection=C.clipIntersection,T.displacementMap=C.displacementMap,T.displacementScale=C.displacementScale,T.displacementBias=C.displacementBias,T.wireframeLinewidth=C.wireframeLinewidth,T.linewidth=C.linewidth,N.isPointLight===!0&&T.isMeshDistanceMaterial===!0){const G=s.properties.get(T);G.light=N}return T}function y(E,C,N,b,T){if(E.visible===!1)return;if(E.layers.test(C.layers)&&(E.isMesh||E.isLine||E.isPoints)&&(E.castShadow||E.receiveShadow&&T===dn)&&(!E.frustumCulled||n.intersectsObject(E))){E.modelViewMatrix.multiplyMatrices(N.matrixWorldInverse,E.matrixWorld);const Z=e.update(E),D=E.material;if(Array.isArray(D)){const B=Z.groups;for(let z=0,$=B.length;z<$;z++){const K=B[z],J=D[K.materialIndex];if(J&&J.visible){const Q=x(E,J,b,T);E.onBeforeShadow(s,E,C,N,Z,Q,K),s.renderBufferDirect(N,null,Z,Q,E,K),E.onAfterShadow(s,E,C,N,Z,Q,K)}}}else if(D.visible){const B=x(E,D,b,T);E.onBeforeShadow(s,E,C,N,Z,B,null),s.renderBufferDirect(N,null,Z,B,E,null),E.onAfterShadow(s,E,C,N,Z,B,null)}}const G=E.children;for(let Z=0,D=G.length;Z<D;Z++)y(G[Z],C,N,b,T)}function R(E){E.target.removeEventListener("dispose",R);for(const N in l){const b=l[N],T=E.target.uuid;T in b&&(b[T].dispose(),delete b[T])}}}function xm(s,e,t){const n=t.isWebGL2;function i(){let O=!1;const he=new St;let me=null;const Ne=new St(0,0,0,0);return{setMask:function(Le){me!==Le&&!O&&(s.colorMask(Le,Le,Le,Le),me=Le)},setLocked:function(Le){O=Le},setClear:function(Le,Ze,$e,lt,dt){dt===!0&&(Le*=lt,Ze*=lt,$e*=lt),he.set(Le,Ze,$e,lt),Ne.equals(he)===!1&&(s.clearColor(Le,Ze,$e,lt),Ne.copy(he))},reset:function(){O=!1,me=null,Ne.set(-1,0,0,0)}}}function r(){let O=!1,he=null,me=null,Ne=null;return{setTest:function(Le){Le?Oe(s.DEPTH_TEST):we(s.DEPTH_TEST)},setMask:function(Le){he!==Le&&!O&&(s.depthMask(Le),he=Le)},setFunc:function(Le){if(me!==Le){switch(Le){case zl:s.depthFunc(s.NEVER);break;case Gl:s.depthFunc(s.ALWAYS);break;case kl:s.depthFunc(s.LESS);break;case Bs:s.depthFunc(s.LEQUAL);break;case Hl:s.depthFunc(s.EQUAL);break;case Vl:s.depthFunc(s.GEQUAL);break;case Wl:s.depthFunc(s.GREATER);break;case Xl:s.depthFunc(s.NOTEQUAL);break;default:s.depthFunc(s.LEQUAL)}me=Le}},setLocked:function(Le){O=Le},setClear:function(Le){Ne!==Le&&(s.clearDepth(Le),Ne=Le)},reset:function(){O=!1,he=null,me=null,Ne=null}}}function a(){let O=!1,he=null,me=null,Ne=null,Le=null,Ze=null,$e=null,lt=null,dt=null;return{setTest:function(Je){O||(Je?Oe(s.STENCIL_TEST):we(s.STENCIL_TEST))},setMask:function(Je){he!==Je&&!O&&(s.stencilMask(Je),he=Je)},setFunc:function(Je,pt,tn){(me!==Je||Ne!==pt||Le!==tn)&&(s.stencilFunc(Je,pt,tn),me=Je,Ne=pt,Le=tn)},setOp:function(Je,pt,tn){(Ze!==Je||$e!==pt||lt!==tn)&&(s.stencilOp(Je,pt,tn),Ze=Je,$e=pt,lt=tn)},setLocked:function(Je){O=Je},setClear:function(Je){dt!==Je&&(s.clearStencil(Je),dt=Je)},reset:function(){O=!1,he=null,me=null,Ne=null,Le=null,Ze=null,$e=null,lt=null,dt=null}}}const o=new i,c=new r,l=new a,h=new WeakMap,u=new WeakMap;let f={},p={},g=new WeakMap,v=[],m=null,d=!1,_=null,x=null,y=null,R=null,E=null,C=null,N=null,b=new Ue(0,0,0),T=0,I=!1,G=null,Z=null,D=null,B=null,z=null;const $=s.getParameter(s.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let K=!1,J=0;const Q=s.getParameter(s.VERSION);Q.indexOf("WebGL")!==-1?(J=parseFloat(/^WebGL (\d)/.exec(Q)[1]),K=J>=1):Q.indexOf("OpenGL ES")!==-1&&(J=parseFloat(/^OpenGL ES (\d)/.exec(Q)[1]),K=J>=2);let ne=null,ce={};const X=s.getParameter(s.SCISSOR_BOX),ee=s.getParameter(s.VIEWPORT),pe=new St().fromArray(X),Se=new St().fromArray(ee);function ve(O,he,me,Ne){const Le=new Uint8Array(4),Ze=s.createTexture();s.bindTexture(O,Ze),s.texParameteri(O,s.TEXTURE_MIN_FILTER,s.NEAREST),s.texParameteri(O,s.TEXTURE_MAG_FILTER,s.NEAREST);for(let $e=0;$e<me;$e++)n&&(O===s.TEXTURE_3D||O===s.TEXTURE_2D_ARRAY)?s.texImage3D(he,0,s.RGBA,1,1,Ne,0,s.RGBA,s.UNSIGNED_BYTE,Le):s.texImage2D(he+$e,0,s.RGBA,1,1,0,s.RGBA,s.UNSIGNED_BYTE,Le);return Ze}const De={};De[s.TEXTURE_2D]=ve(s.TEXTURE_2D,s.TEXTURE_2D,1),De[s.TEXTURE_CUBE_MAP]=ve(s.TEXTURE_CUBE_MAP,s.TEXTURE_CUBE_MAP_POSITIVE_X,6),n&&(De[s.TEXTURE_2D_ARRAY]=ve(s.TEXTURE_2D_ARRAY,s.TEXTURE_2D_ARRAY,1,1),De[s.TEXTURE_3D]=ve(s.TEXTURE_3D,s.TEXTURE_3D,1,1)),o.setClear(0,0,0,1),c.setClear(1),l.setClear(0),Oe(s.DEPTH_TEST),c.setFunc(Bs),ge(!1),w(Ua),Oe(s.CULL_FACE),q(wn);function Oe(O){f[O]!==!0&&(s.enable(O),f[O]=!0)}function we(O){f[O]!==!1&&(s.disable(O),f[O]=!1)}function Fe(O,he){return p[O]!==he?(s.bindFramebuffer(O,he),p[O]=he,n&&(O===s.DRAW_FRAMEBUFFER&&(p[s.FRAMEBUFFER]=he),O===s.FRAMEBUFFER&&(p[s.DRAW_FRAMEBUFFER]=he)),!0):!1}function L(O,he){let me=v,Ne=!1;if(O)if(me=g.get(he),me===void 0&&(me=[],g.set(he,me)),O.isWebGLMultipleRenderTargets){const Le=O.texture;if(me.length!==Le.length||me[0]!==s.COLOR_ATTACHMENT0){for(let Ze=0,$e=Le.length;Ze<$e;Ze++)me[Ze]=s.COLOR_ATTACHMENT0+Ze;me.length=Le.length,Ne=!0}}else me[0]!==s.COLOR_ATTACHMENT0&&(me[0]=s.COLOR_ATTACHMENT0,Ne=!0);else me[0]!==s.BACK&&(me[0]=s.BACK,Ne=!0);Ne&&(t.isWebGL2?s.drawBuffers(me):e.get("WEBGL_draw_buffers").drawBuffersWEBGL(me))}function ue(O){return m!==O?(s.useProgram(O),m=O,!0):!1}const Y={[zn]:s.FUNC_ADD,[El]:s.FUNC_SUBTRACT,[wl]:s.FUNC_REVERSE_SUBTRACT};if(n)Y[Ga]=s.MIN,Y[ka]=s.MAX;else{const O=e.get("EXT_blend_minmax");O!==null&&(Y[Ga]=O.MIN_EXT,Y[ka]=O.MAX_EXT)}const oe={[Tl]:s.ZERO,[Al]:s.ONE,[Cl]:s.SRC_COLOR,[Qr]:s.SRC_ALPHA,[Nl]:s.SRC_ALPHA_SATURATE,[Dl]:s.DST_COLOR,[Pl]:s.DST_ALPHA,[Rl]:s.ONE_MINUS_SRC_COLOR,[ea]:s.ONE_MINUS_SRC_ALPHA,[Ol]:s.ONE_MINUS_DST_COLOR,[Ll]:s.ONE_MINUS_DST_ALPHA,[Il]:s.CONSTANT_COLOR,[Ul]:s.ONE_MINUS_CONSTANT_COLOR,[Fl]:s.CONSTANT_ALPHA,[Bl]:s.ONE_MINUS_CONSTANT_ALPHA};function q(O,he,me,Ne,Le,Ze,$e,lt,dt,Je){if(O===wn){d===!0&&(we(s.BLEND),d=!1);return}if(d===!1&&(Oe(s.BLEND),d=!0),O!==Sl){if(O!==_||Je!==I){if((x!==zn||E!==zn)&&(s.blendEquation(s.FUNC_ADD),x=zn,E=zn),Je)switch(O){case yi:s.blendFuncSeparate(s.ONE,s.ONE_MINUS_SRC_ALPHA,s.ONE,s.ONE_MINUS_SRC_ALPHA);break;case Fa:s.blendFunc(s.ONE,s.ONE);break;case Ba:s.blendFuncSeparate(s.ZERO,s.ONE_MINUS_SRC_COLOR,s.ZERO,s.ONE);break;case za:s.blendFuncSeparate(s.ZERO,s.SRC_COLOR,s.ZERO,s.SRC_ALPHA);break;default:console.error("THREE.WebGLState: Invalid blending: ",O);break}else switch(O){case yi:s.blendFuncSeparate(s.SRC_ALPHA,s.ONE_MINUS_SRC_ALPHA,s.ONE,s.ONE_MINUS_SRC_ALPHA);break;case Fa:s.blendFunc(s.SRC_ALPHA,s.ONE);break;case Ba:s.blendFuncSeparate(s.ZERO,s.ONE_MINUS_SRC_COLOR,s.ZERO,s.ONE);break;case za:s.blendFunc(s.ZERO,s.SRC_COLOR);break;default:console.error("THREE.WebGLState: Invalid blending: ",O);break}y=null,R=null,C=null,N=null,b.set(0,0,0),T=0,_=O,I=Je}return}Le=Le||he,Ze=Ze||me,$e=$e||Ne,(he!==x||Le!==E)&&(s.blendEquationSeparate(Y[he],Y[Le]),x=he,E=Le),(me!==y||Ne!==R||Ze!==C||$e!==N)&&(s.blendFuncSeparate(oe[me],oe[Ne],oe[Ze],oe[$e]),y=me,R=Ne,C=Ze,N=$e),(lt.equals(b)===!1||dt!==T)&&(s.blendColor(lt.r,lt.g,lt.b,dt),b.copy(lt),T=dt),_=O,I=!1}function Te(O,he){O.side===wt?we(s.CULL_FACE):Oe(s.CULL_FACE);let me=O.side===zt;he&&(me=!me),ge(me),O.blending===yi&&O.transparent===!1?q(wn):q(O.blending,O.blendEquation,O.blendSrc,O.blendDst,O.blendEquationAlpha,O.blendSrcAlpha,O.blendDstAlpha,O.blendColor,O.blendAlpha,O.premultipliedAlpha),c.setFunc(O.depthFunc),c.setTest(O.depthTest),c.setMask(O.depthWrite),o.setMask(O.colorWrite);const Ne=O.stencilWrite;l.setTest(Ne),Ne&&(l.setMask(O.stencilWriteMask),l.setFunc(O.stencilFunc,O.stencilRef,O.stencilFuncMask),l.setOp(O.stencilFail,O.stencilZFail,O.stencilZPass)),U(O.polygonOffset,O.polygonOffsetFactor,O.polygonOffsetUnits),O.alphaToCoverage===!0?Oe(s.SAMPLE_ALPHA_TO_COVERAGE):we(s.SAMPLE_ALPHA_TO_COVERAGE)}function ge(O){G!==O&&(O?s.frontFace(s.CW):s.frontFace(s.CCW),G=O)}function w(O){O!==Ml?(Oe(s.CULL_FACE),O!==Z&&(O===Ua?s.cullFace(s.BACK):O===bl?s.cullFace(s.FRONT):s.cullFace(s.FRONT_AND_BACK))):we(s.CULL_FACE),Z=O}function S(O){O!==D&&(K&&s.lineWidth(O),D=O)}function U(O,he,me){O?(Oe(s.POLYGON_OFFSET_FILL),(B!==he||z!==me)&&(s.polygonOffset(he,me),B=he,z=me)):we(s.POLYGON_OFFSET_FILL)}function re(O){O?Oe(s.SCISSOR_TEST):we(s.SCISSOR_TEST)}function ie(O){O===void 0&&(O=s.TEXTURE0+$-1),ne!==O&&(s.activeTexture(O),ne=O)}function te(O,he,me){me===void 0&&(ne===null?me=s.TEXTURE0+$-1:me=ne);let Ne=ce[me];Ne===void 0&&(Ne={type:void 0,texture:void 0},ce[me]=Ne),(Ne.type!==O||Ne.texture!==he)&&(ne!==me&&(s.activeTexture(me),ne=me),s.bindTexture(O,he||De[O]),Ne.type=O,Ne.texture=he)}function Ee(){const O=ce[ne];O!==void 0&&O.type!==void 0&&(s.bindTexture(O.type,null),O.type=void 0,O.texture=void 0)}function fe(){try{s.compressedTexImage2D.apply(s,arguments)}catch(O){console.error("THREE.WebGLState:",O)}}function ye(){try{s.compressedTexImage3D.apply(s,arguments)}catch(O){console.error("THREE.WebGLState:",O)}}function Pe(){try{s.texSubImage2D.apply(s,arguments)}catch(O){console.error("THREE.WebGLState:",O)}}function ke(){try{s.texSubImage3D.apply(s,arguments)}catch(O){console.error("THREE.WebGLState:",O)}}function se(){try{s.compressedTexSubImage2D.apply(s,arguments)}catch(O){console.error("THREE.WebGLState:",O)}}function Ke(){try{s.compressedTexSubImage3D.apply(s,arguments)}catch(O){console.error("THREE.WebGLState:",O)}}function Xe(){try{s.texStorage2D.apply(s,arguments)}catch(O){console.error("THREE.WebGLState:",O)}}function Be(){try{s.texStorage3D.apply(s,arguments)}catch(O){console.error("THREE.WebGLState:",O)}}function Re(){try{s.texImage2D.apply(s,arguments)}catch(O){console.error("THREE.WebGLState:",O)}}function _e(){try{s.texImage3D.apply(s,arguments)}catch(O){console.error("THREE.WebGLState:",O)}}function P(O){pe.equals(O)===!1&&(s.scissor(O.x,O.y,O.z,O.w),pe.copy(O))}function le(O){Se.equals(O)===!1&&(s.viewport(O.x,O.y,O.z,O.w),Se.copy(O))}function Ae(O,he){let me=u.get(he);me===void 0&&(me=new WeakMap,u.set(he,me));let Ne=me.get(O);Ne===void 0&&(Ne=s.getUniformBlockIndex(he,O.name),me.set(O,Ne))}function be(O,he){const Ne=u.get(he).get(O);h.get(he)!==Ne&&(s.uniformBlockBinding(he,Ne,O.__bindingPointIndex),h.set(he,Ne))}function ae(){s.disable(s.BLEND),s.disable(s.CULL_FACE),s.disable(s.DEPTH_TEST),s.disable(s.POLYGON_OFFSET_FILL),s.disable(s.SCISSOR_TEST),s.disable(s.STENCIL_TEST),s.disable(s.SAMPLE_ALPHA_TO_COVERAGE),s.blendEquation(s.FUNC_ADD),s.blendFunc(s.ONE,s.ZERO),s.blendFuncSeparate(s.ONE,s.ZERO,s.ONE,s.ZERO),s.blendColor(0,0,0,0),s.colorMask(!0,!0,!0,!0),s.clearColor(0,0,0,0),s.depthMask(!0),s.depthFunc(s.LESS),s.clearDepth(1),s.stencilMask(4294967295),s.stencilFunc(s.ALWAYS,0,4294967295),s.stencilOp(s.KEEP,s.KEEP,s.KEEP),s.clearStencil(0),s.cullFace(s.BACK),s.frontFace(s.CCW),s.polygonOffset(0,0),s.activeTexture(s.TEXTURE0),s.bindFramebuffer(s.FRAMEBUFFER,null),n===!0&&(s.bindFramebuffer(s.DRAW_FRAMEBUFFER,null),s.bindFramebuffer(s.READ_FRAMEBUFFER,null)),s.useProgram(null),s.lineWidth(1),s.scissor(0,0,s.canvas.width,s.canvas.height),s.viewport(0,0,s.canvas.width,s.canvas.height),f={},ne=null,ce={},p={},g=new WeakMap,v=[],m=null,d=!1,_=null,x=null,y=null,R=null,E=null,C=null,N=null,b=new Ue(0,0,0),T=0,I=!1,G=null,Z=null,D=null,B=null,z=null,pe.set(0,0,s.canvas.width,s.canvas.height),Se.set(0,0,s.canvas.width,s.canvas.height),o.reset(),c.reset(),l.reset()}return{buffers:{color:o,depth:c,stencil:l},enable:Oe,disable:we,bindFramebuffer:Fe,drawBuffers:L,useProgram:ue,setBlending:q,setMaterial:Te,setFlipSided:ge,setCullFace:w,setLineWidth:S,setPolygonOffset:U,setScissorTest:re,activeTexture:ie,bindTexture:te,unbindTexture:Ee,compressedTexImage2D:fe,compressedTexImage3D:ye,texImage2D:Re,texImage3D:_e,updateUBOMapping:Ae,uniformBlockBinding:be,texStorage2D:Xe,texStorage3D:Be,texSubImage2D:Pe,texSubImage3D:ke,compressedTexSubImage2D:se,compressedTexSubImage3D:Ke,scissor:P,viewport:le,reset:ae}}function ym(s,e,t,n,i,r,a){const o=i.isWebGL2,c=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,l=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),h=new WeakMap;let u;const f=new WeakMap;let p=!1;try{p=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function g(w,S){return p?new OffscreenCanvas(w,S):Vs("canvas")}function v(w,S,U,re){let ie=1;if((w.width>re||w.height>re)&&(ie=re/Math.max(w.width,w.height)),ie<1||S===!0)if(typeof HTMLImageElement<"u"&&w instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&w instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&w instanceof ImageBitmap){const te=S?ca:Math.floor,Ee=te(ie*w.width),fe=te(ie*w.height);u===void 0&&(u=g(Ee,fe));const ye=U?g(Ee,fe):u;return ye.width=Ee,ye.height=fe,ye.getContext("2d").drawImage(w,0,0,Ee,fe),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+w.width+"x"+w.height+") to ("+Ee+"x"+fe+")."),ye}else return"data"in w&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+w.width+"x"+w.height+")."),w;return w}function m(w){return vo(w.width)&&vo(w.height)}function d(w){return o?!1:w.wrapS!==Qt||w.wrapT!==Qt||w.minFilter!==Ot&&w.minFilter!==Bt}function _(w,S){return w.generateMipmaps&&S&&w.minFilter!==Ot&&w.minFilter!==Bt}function x(w){s.generateMipmap(w)}function y(w,S,U,re,ie=!1){if(o===!1)return S;if(w!==null){if(s[w]!==void 0)return s[w];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+w+"'")}let te=S;if(S===s.RED&&(U===s.FLOAT&&(te=s.R32F),U===s.HALF_FLOAT&&(te=s.R16F),U===s.UNSIGNED_BYTE&&(te=s.R8)),S===s.RED_INTEGER&&(U===s.UNSIGNED_BYTE&&(te=s.R8UI),U===s.UNSIGNED_SHORT&&(te=s.R16UI),U===s.UNSIGNED_INT&&(te=s.R32UI),U===s.BYTE&&(te=s.R8I),U===s.SHORT&&(te=s.R16I),U===s.INT&&(te=s.R32I)),S===s.RG&&(U===s.FLOAT&&(te=s.RG32F),U===s.HALF_FLOAT&&(te=s.RG16F),U===s.UNSIGNED_BYTE&&(te=s.RG8)),S===s.RGBA){const Ee=ie?zs:Qe.getTransfer(re);U===s.FLOAT&&(te=s.RGBA32F),U===s.HALF_FLOAT&&(te=s.RGBA16F),U===s.UNSIGNED_BYTE&&(te=Ee===it?s.SRGB8_ALPHA8:s.RGBA8),U===s.UNSIGNED_SHORT_4_4_4_4&&(te=s.RGBA4),U===s.UNSIGNED_SHORT_5_5_5_1&&(te=s.RGB5_A1)}return(te===s.R16F||te===s.R32F||te===s.RG16F||te===s.RG32F||te===s.RGBA16F||te===s.RGBA32F)&&e.get("EXT_color_buffer_float"),te}function R(w,S,U){return _(w,U)===!0||w.isFramebufferTexture&&w.minFilter!==Ot&&w.minFilter!==Bt?Math.log2(Math.max(S.width,S.height))+1:w.mipmaps!==void 0&&w.mipmaps.length>0?w.mipmaps.length:w.isCompressedTexture&&Array.isArray(w.image)?S.mipmaps.length:1}function E(w){return w===Ot||w===Ha||w===hr?s.NEAREST:s.LINEAR}function C(w){const S=w.target;S.removeEventListener("dispose",C),b(S),S.isVideoTexture&&h.delete(S)}function N(w){const S=w.target;S.removeEventListener("dispose",N),I(S)}function b(w){const S=n.get(w);if(S.__webglInit===void 0)return;const U=w.source,re=f.get(U);if(re){const ie=re[S.__cacheKey];ie.usedTimes--,ie.usedTimes===0&&T(w),Object.keys(re).length===0&&f.delete(U)}n.remove(w)}function T(w){const S=n.get(w);s.deleteTexture(S.__webglTexture);const U=w.source,re=f.get(U);delete re[S.__cacheKey],a.memory.textures--}function I(w){const S=w.texture,U=n.get(w),re=n.get(S);if(re.__webglTexture!==void 0&&(s.deleteTexture(re.__webglTexture),a.memory.textures--),w.depthTexture&&w.depthTexture.dispose(),w.isWebGLCubeRenderTarget)for(let ie=0;ie<6;ie++){if(Array.isArray(U.__webglFramebuffer[ie]))for(let te=0;te<U.__webglFramebuffer[ie].length;te++)s.deleteFramebuffer(U.__webglFramebuffer[ie][te]);else s.deleteFramebuffer(U.__webglFramebuffer[ie]);U.__webglDepthbuffer&&s.deleteRenderbuffer(U.__webglDepthbuffer[ie])}else{if(Array.isArray(U.__webglFramebuffer))for(let ie=0;ie<U.__webglFramebuffer.length;ie++)s.deleteFramebuffer(U.__webglFramebuffer[ie]);else s.deleteFramebuffer(U.__webglFramebuffer);if(U.__webglDepthbuffer&&s.deleteRenderbuffer(U.__webglDepthbuffer),U.__webglMultisampledFramebuffer&&s.deleteFramebuffer(U.__webglMultisampledFramebuffer),U.__webglColorRenderbuffer)for(let ie=0;ie<U.__webglColorRenderbuffer.length;ie++)U.__webglColorRenderbuffer[ie]&&s.deleteRenderbuffer(U.__webglColorRenderbuffer[ie]);U.__webglDepthRenderbuffer&&s.deleteRenderbuffer(U.__webglDepthRenderbuffer)}if(w.isWebGLMultipleRenderTargets)for(let ie=0,te=S.length;ie<te;ie++){const Ee=n.get(S[ie]);Ee.__webglTexture&&(s.deleteTexture(Ee.__webglTexture),a.memory.textures--),n.remove(S[ie])}n.remove(S),n.remove(w)}let G=0;function Z(){G=0}function D(){const w=G;return w>=i.maxTextures&&console.warn("THREE.WebGLTextures: Trying to use "+w+" texture units while this GPU supports only "+i.maxTextures),G+=1,w}function B(w){const S=[];return S.push(w.wrapS),S.push(w.wrapT),S.push(w.wrapR||0),S.push(w.magFilter),S.push(w.minFilter),S.push(w.anisotropy),S.push(w.internalFormat),S.push(w.format),S.push(w.type),S.push(w.generateMipmaps),S.push(w.premultiplyAlpha),S.push(w.flipY),S.push(w.unpackAlignment),S.push(w.colorSpace),S.join()}function z(w,S){const U=n.get(w);if(w.isVideoTexture&&Te(w),w.isRenderTargetTexture===!1&&w.version>0&&U.__version!==w.version){const re=w.image;if(re===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(re.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{pe(U,w,S);return}}t.bindTexture(s.TEXTURE_2D,U.__webglTexture,s.TEXTURE0+S)}function $(w,S){const U=n.get(w);if(w.version>0&&U.__version!==w.version){pe(U,w,S);return}t.bindTexture(s.TEXTURE_2D_ARRAY,U.__webglTexture,s.TEXTURE0+S)}function K(w,S){const U=n.get(w);if(w.version>0&&U.__version!==w.version){pe(U,w,S);return}t.bindTexture(s.TEXTURE_3D,U.__webglTexture,s.TEXTURE0+S)}function J(w,S){const U=n.get(w);if(w.version>0&&U.__version!==w.version){Se(U,w,S);return}t.bindTexture(s.TEXTURE_CUBE_MAP,U.__webglTexture,s.TEXTURE0+S)}const Q={[ia]:s.REPEAT,[Qt]:s.CLAMP_TO_EDGE,[sa]:s.MIRRORED_REPEAT},ne={[Ot]:s.NEAREST,[Ha]:s.NEAREST_MIPMAP_NEAREST,[hr]:s.NEAREST_MIPMAP_LINEAR,[Bt]:s.LINEAR,[eh]:s.LINEAR_MIPMAP_NEAREST,[Xi]:s.LINEAR_MIPMAP_LINEAR},ce={[dh]:s.NEVER,[_h]:s.ALWAYS,[fh]:s.LESS,[Uc]:s.LEQUAL,[ph]:s.EQUAL,[vh]:s.GEQUAL,[mh]:s.GREATER,[gh]:s.NOTEQUAL};function X(w,S,U){if(U?(s.texParameteri(w,s.TEXTURE_WRAP_S,Q[S.wrapS]),s.texParameteri(w,s.TEXTURE_WRAP_T,Q[S.wrapT]),(w===s.TEXTURE_3D||w===s.TEXTURE_2D_ARRAY)&&s.texParameteri(w,s.TEXTURE_WRAP_R,Q[S.wrapR]),s.texParameteri(w,s.TEXTURE_MAG_FILTER,ne[S.magFilter]),s.texParameteri(w,s.TEXTURE_MIN_FILTER,ne[S.minFilter])):(s.texParameteri(w,s.TEXTURE_WRAP_S,s.CLAMP_TO_EDGE),s.texParameteri(w,s.TEXTURE_WRAP_T,s.CLAMP_TO_EDGE),(w===s.TEXTURE_3D||w===s.TEXTURE_2D_ARRAY)&&s.texParameteri(w,s.TEXTURE_WRAP_R,s.CLAMP_TO_EDGE),(S.wrapS!==Qt||S.wrapT!==Qt)&&console.warn("THREE.WebGLRenderer: Texture is not power of two. Texture.wrapS and Texture.wrapT should be set to THREE.ClampToEdgeWrapping."),s.texParameteri(w,s.TEXTURE_MAG_FILTER,E(S.magFilter)),s.texParameteri(w,s.TEXTURE_MIN_FILTER,E(S.minFilter)),S.minFilter!==Ot&&S.minFilter!==Bt&&console.warn("THREE.WebGLRenderer: Texture is not power of two. Texture.minFilter should be set to THREE.NearestFilter or THREE.LinearFilter.")),S.compareFunction&&(s.texParameteri(w,s.TEXTURE_COMPARE_MODE,s.COMPARE_REF_TO_TEXTURE),s.texParameteri(w,s.TEXTURE_COMPARE_FUNC,ce[S.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){const re=e.get("EXT_texture_filter_anisotropic");if(S.magFilter===Ot||S.minFilter!==hr&&S.minFilter!==Xi||S.type===En&&e.has("OES_texture_float_linear")===!1||o===!1&&S.type===ji&&e.has("OES_texture_half_float_linear")===!1)return;(S.anisotropy>1||n.get(S).__currentAnisotropy)&&(s.texParameterf(w,re.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(S.anisotropy,i.getMaxAnisotropy())),n.get(S).__currentAnisotropy=S.anisotropy)}}function ee(w,S){let U=!1;w.__webglInit===void 0&&(w.__webglInit=!0,S.addEventListener("dispose",C));const re=S.source;let ie=f.get(re);ie===void 0&&(ie={},f.set(re,ie));const te=B(S);if(te!==w.__cacheKey){ie[te]===void 0&&(ie[te]={texture:s.createTexture(),usedTimes:0},a.memory.textures++,U=!0),ie[te].usedTimes++;const Ee=ie[w.__cacheKey];Ee!==void 0&&(ie[w.__cacheKey].usedTimes--,Ee.usedTimes===0&&T(S)),w.__cacheKey=te,w.__webglTexture=ie[te].texture}return U}function pe(w,S,U){let re=s.TEXTURE_2D;(S.isDataArrayTexture||S.isCompressedArrayTexture)&&(re=s.TEXTURE_2D_ARRAY),S.isData3DTexture&&(re=s.TEXTURE_3D);const ie=ee(w,S),te=S.source;t.bindTexture(re,w.__webglTexture,s.TEXTURE0+U);const Ee=n.get(te);if(te.version!==Ee.__version||ie===!0){t.activeTexture(s.TEXTURE0+U);const fe=Qe.getPrimaries(Qe.workingColorSpace),ye=S.colorSpace===Yt?null:Qe.getPrimaries(S.colorSpace),Pe=S.colorSpace===Yt||fe===ye?s.NONE:s.BROWSER_DEFAULT_WEBGL;s.pixelStorei(s.UNPACK_FLIP_Y_WEBGL,S.flipY),s.pixelStorei(s.UNPACK_PREMULTIPLY_ALPHA_WEBGL,S.premultiplyAlpha),s.pixelStorei(s.UNPACK_ALIGNMENT,S.unpackAlignment),s.pixelStorei(s.UNPACK_COLORSPACE_CONVERSION_WEBGL,Pe);const ke=d(S)&&m(S.image)===!1;let se=v(S.image,ke,!1,i.maxTextureSize);se=ge(S,se);const Ke=m(se)||o,Xe=r.convert(S.format,S.colorSpace);let Be=r.convert(S.type),Re=y(S.internalFormat,Xe,Be,S.colorSpace,S.isVideoTexture);X(re,S,Ke);let _e;const P=S.mipmaps,le=o&&S.isVideoTexture!==!0&&Re!==Oc,Ae=Ee.__version===void 0||ie===!0,be=R(S,se,Ke);if(S.isDepthTexture)Re=s.DEPTH_COMPONENT,o?S.type===En?Re=s.DEPTH_COMPONENT32F:S.type===Sn?Re=s.DEPTH_COMPONENT24:S.type===kn?Re=s.DEPTH24_STENCIL8:Re=s.DEPTH_COMPONENT16:S.type===En&&console.error("WebGLRenderer: Floating point depth texture requires WebGL2."),S.format===Hn&&Re===s.DEPTH_COMPONENT&&S.type!==ga&&S.type!==Sn&&(console.warn("THREE.WebGLRenderer: Use UnsignedShortType or UnsignedIntType for DepthFormat DepthTexture."),S.type=Sn,Be=r.convert(S.type)),S.format===Ci&&Re===s.DEPTH_COMPONENT&&(Re=s.DEPTH_STENCIL,S.type!==kn&&(console.warn("THREE.WebGLRenderer: Use UnsignedInt248Type for DepthStencilFormat DepthTexture."),S.type=kn,Be=r.convert(S.type))),Ae&&(le?t.texStorage2D(s.TEXTURE_2D,1,Re,se.width,se.height):t.texImage2D(s.TEXTURE_2D,0,Re,se.width,se.height,0,Xe,Be,null));else if(S.isDataTexture)if(P.length>0&&Ke){le&&Ae&&t.texStorage2D(s.TEXTURE_2D,be,Re,P[0].width,P[0].height);for(let ae=0,O=P.length;ae<O;ae++)_e=P[ae],le?t.texSubImage2D(s.TEXTURE_2D,ae,0,0,_e.width,_e.height,Xe,Be,_e.data):t.texImage2D(s.TEXTURE_2D,ae,Re,_e.width,_e.height,0,Xe,Be,_e.data);S.generateMipmaps=!1}else le?(Ae&&t.texStorage2D(s.TEXTURE_2D,be,Re,se.width,se.height),t.texSubImage2D(s.TEXTURE_2D,0,0,0,se.width,se.height,Xe,Be,se.data)):t.texImage2D(s.TEXTURE_2D,0,Re,se.width,se.height,0,Xe,Be,se.data);else if(S.isCompressedTexture)if(S.isCompressedArrayTexture){le&&Ae&&t.texStorage3D(s.TEXTURE_2D_ARRAY,be,Re,P[0].width,P[0].height,se.depth);for(let ae=0,O=P.length;ae<O;ae++)_e=P[ae],S.format!==en?Xe!==null?le?t.compressedTexSubImage3D(s.TEXTURE_2D_ARRAY,ae,0,0,0,_e.width,_e.height,se.depth,Xe,_e.data,0,0):t.compressedTexImage3D(s.TEXTURE_2D_ARRAY,ae,Re,_e.width,_e.height,se.depth,0,_e.data,0,0):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):le?t.texSubImage3D(s.TEXTURE_2D_ARRAY,ae,0,0,0,_e.width,_e.height,se.depth,Xe,Be,_e.data):t.texImage3D(s.TEXTURE_2D_ARRAY,ae,Re,_e.width,_e.height,se.depth,0,Xe,Be,_e.data)}else{le&&Ae&&t.texStorage2D(s.TEXTURE_2D,be,Re,P[0].width,P[0].height);for(let ae=0,O=P.length;ae<O;ae++)_e=P[ae],S.format!==en?Xe!==null?le?t.compressedTexSubImage2D(s.TEXTURE_2D,ae,0,0,_e.width,_e.height,Xe,_e.data):t.compressedTexImage2D(s.TEXTURE_2D,ae,Re,_e.width,_e.height,0,_e.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):le?t.texSubImage2D(s.TEXTURE_2D,ae,0,0,_e.width,_e.height,Xe,Be,_e.data):t.texImage2D(s.TEXTURE_2D,ae,Re,_e.width,_e.height,0,Xe,Be,_e.data)}else if(S.isDataArrayTexture)le?(Ae&&t.texStorage3D(s.TEXTURE_2D_ARRAY,be,Re,se.width,se.height,se.depth),t.texSubImage3D(s.TEXTURE_2D_ARRAY,0,0,0,0,se.width,se.height,se.depth,Xe,Be,se.data)):t.texImage3D(s.TEXTURE_2D_ARRAY,0,Re,se.width,se.height,se.depth,0,Xe,Be,se.data);else if(S.isData3DTexture)le?(Ae&&t.texStorage3D(s.TEXTURE_3D,be,Re,se.width,se.height,se.depth),t.texSubImage3D(s.TEXTURE_3D,0,0,0,0,se.width,se.height,se.depth,Xe,Be,se.data)):t.texImage3D(s.TEXTURE_3D,0,Re,se.width,se.height,se.depth,0,Xe,Be,se.data);else if(S.isFramebufferTexture){if(Ae)if(le)t.texStorage2D(s.TEXTURE_2D,be,Re,se.width,se.height);else{let ae=se.width,O=se.height;for(let he=0;he<be;he++)t.texImage2D(s.TEXTURE_2D,he,Re,ae,O,0,Xe,Be,null),ae>>=1,O>>=1}}else if(P.length>0&&Ke){le&&Ae&&t.texStorage2D(s.TEXTURE_2D,be,Re,P[0].width,P[0].height);for(let ae=0,O=P.length;ae<O;ae++)_e=P[ae],le?t.texSubImage2D(s.TEXTURE_2D,ae,0,0,Xe,Be,_e):t.texImage2D(s.TEXTURE_2D,ae,Re,Xe,Be,_e);S.generateMipmaps=!1}else le?(Ae&&t.texStorage2D(s.TEXTURE_2D,be,Re,se.width,se.height),t.texSubImage2D(s.TEXTURE_2D,0,0,0,Xe,Be,se)):t.texImage2D(s.TEXTURE_2D,0,Re,Xe,Be,se);_(S,Ke)&&x(re),Ee.__version=te.version,S.onUpdate&&S.onUpdate(S)}w.__version=S.version}function Se(w,S,U){if(S.image.length!==6)return;const re=ee(w,S),ie=S.source;t.bindTexture(s.TEXTURE_CUBE_MAP,w.__webglTexture,s.TEXTURE0+U);const te=n.get(ie);if(ie.version!==te.__version||re===!0){t.activeTexture(s.TEXTURE0+U);const Ee=Qe.getPrimaries(Qe.workingColorSpace),fe=S.colorSpace===Yt?null:Qe.getPrimaries(S.colorSpace),ye=S.colorSpace===Yt||Ee===fe?s.NONE:s.BROWSER_DEFAULT_WEBGL;s.pixelStorei(s.UNPACK_FLIP_Y_WEBGL,S.flipY),s.pixelStorei(s.UNPACK_PREMULTIPLY_ALPHA_WEBGL,S.premultiplyAlpha),s.pixelStorei(s.UNPACK_ALIGNMENT,S.unpackAlignment),s.pixelStorei(s.UNPACK_COLORSPACE_CONVERSION_WEBGL,ye);const Pe=S.isCompressedTexture||S.image[0].isCompressedTexture,ke=S.image[0]&&S.image[0].isDataTexture,se=[];for(let ae=0;ae<6;ae++)!Pe&&!ke?se[ae]=v(S.image[ae],!1,!0,i.maxCubemapSize):se[ae]=ke?S.image[ae].image:S.image[ae],se[ae]=ge(S,se[ae]);const Ke=se[0],Xe=m(Ke)||o,Be=r.convert(S.format,S.colorSpace),Re=r.convert(S.type),_e=y(S.internalFormat,Be,Re,S.colorSpace),P=o&&S.isVideoTexture!==!0,le=te.__version===void 0||re===!0;let Ae=R(S,Ke,Xe);X(s.TEXTURE_CUBE_MAP,S,Xe);let be;if(Pe){P&&le&&t.texStorage2D(s.TEXTURE_CUBE_MAP,Ae,_e,Ke.width,Ke.height);for(let ae=0;ae<6;ae++){be=se[ae].mipmaps;for(let O=0;O<be.length;O++){const he=be[O];S.format!==en?Be!==null?P?t.compressedTexSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+ae,O,0,0,he.width,he.height,Be,he.data):t.compressedTexImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+ae,O,_e,he.width,he.height,0,he.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):P?t.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+ae,O,0,0,he.width,he.height,Be,Re,he.data):t.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+ae,O,_e,he.width,he.height,0,Be,Re,he.data)}}}else{be=S.mipmaps,P&&le&&(be.length>0&&Ae++,t.texStorage2D(s.TEXTURE_CUBE_MAP,Ae,_e,se[0].width,se[0].height));for(let ae=0;ae<6;ae++)if(ke){P?t.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+ae,0,0,0,se[ae].width,se[ae].height,Be,Re,se[ae].data):t.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+ae,0,_e,se[ae].width,se[ae].height,0,Be,Re,se[ae].data);for(let O=0;O<be.length;O++){const me=be[O].image[ae].image;P?t.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+ae,O+1,0,0,me.width,me.height,Be,Re,me.data):t.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+ae,O+1,_e,me.width,me.height,0,Be,Re,me.data)}}else{P?t.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+ae,0,0,0,Be,Re,se[ae]):t.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+ae,0,_e,Be,Re,se[ae]);for(let O=0;O<be.length;O++){const he=be[O];P?t.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+ae,O+1,0,0,Be,Re,he.image[ae]):t.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+ae,O+1,_e,Be,Re,he.image[ae])}}}_(S,Xe)&&x(s.TEXTURE_CUBE_MAP),te.__version=ie.version,S.onUpdate&&S.onUpdate(S)}w.__version=S.version}function ve(w,S,U,re,ie,te){const Ee=r.convert(U.format,U.colorSpace),fe=r.convert(U.type),ye=y(U.internalFormat,Ee,fe,U.colorSpace);if(!n.get(S).__hasExternalTextures){const ke=Math.max(1,S.width>>te),se=Math.max(1,S.height>>te);ie===s.TEXTURE_3D||ie===s.TEXTURE_2D_ARRAY?t.texImage3D(ie,te,ye,ke,se,S.depth,0,Ee,fe,null):t.texImage2D(ie,te,ye,ke,se,0,Ee,fe,null)}t.bindFramebuffer(s.FRAMEBUFFER,w),q(S)?c.framebufferTexture2DMultisampleEXT(s.FRAMEBUFFER,re,ie,n.get(U).__webglTexture,0,oe(S)):(ie===s.TEXTURE_2D||ie>=s.TEXTURE_CUBE_MAP_POSITIVE_X&&ie<=s.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&s.framebufferTexture2D(s.FRAMEBUFFER,re,ie,n.get(U).__webglTexture,te),t.bindFramebuffer(s.FRAMEBUFFER,null)}function De(w,S,U){if(s.bindRenderbuffer(s.RENDERBUFFER,w),S.depthBuffer&&!S.stencilBuffer){let re=o===!0?s.DEPTH_COMPONENT24:s.DEPTH_COMPONENT16;if(U||q(S)){const ie=S.depthTexture;ie&&ie.isDepthTexture&&(ie.type===En?re=s.DEPTH_COMPONENT32F:ie.type===Sn&&(re=s.DEPTH_COMPONENT24));const te=oe(S);q(S)?c.renderbufferStorageMultisampleEXT(s.RENDERBUFFER,te,re,S.width,S.height):s.renderbufferStorageMultisample(s.RENDERBUFFER,te,re,S.width,S.height)}else s.renderbufferStorage(s.RENDERBUFFER,re,S.width,S.height);s.framebufferRenderbuffer(s.FRAMEBUFFER,s.DEPTH_ATTACHMENT,s.RENDERBUFFER,w)}else if(S.depthBuffer&&S.stencilBuffer){const re=oe(S);U&&q(S)===!1?s.renderbufferStorageMultisample(s.RENDERBUFFER,re,s.DEPTH24_STENCIL8,S.width,S.height):q(S)?c.renderbufferStorageMultisampleEXT(s.RENDERBUFFER,re,s.DEPTH24_STENCIL8,S.width,S.height):s.renderbufferStorage(s.RENDERBUFFER,s.DEPTH_STENCIL,S.width,S.height),s.framebufferRenderbuffer(s.FRAMEBUFFER,s.DEPTH_STENCIL_ATTACHMENT,s.RENDERBUFFER,w)}else{const re=S.isWebGLMultipleRenderTargets===!0?S.texture:[S.texture];for(let ie=0;ie<re.length;ie++){const te=re[ie],Ee=r.convert(te.format,te.colorSpace),fe=r.convert(te.type),ye=y(te.internalFormat,Ee,fe,te.colorSpace),Pe=oe(S);U&&q(S)===!1?s.renderbufferStorageMultisample(s.RENDERBUFFER,Pe,ye,S.width,S.height):q(S)?c.renderbufferStorageMultisampleEXT(s.RENDERBUFFER,Pe,ye,S.width,S.height):s.renderbufferStorage(s.RENDERBUFFER,ye,S.width,S.height)}}s.bindRenderbuffer(s.RENDERBUFFER,null)}function Oe(w,S){if(S&&S.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(t.bindFramebuffer(s.FRAMEBUFFER,w),!(S.depthTexture&&S.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");(!n.get(S.depthTexture).__webglTexture||S.depthTexture.image.width!==S.width||S.depthTexture.image.height!==S.height)&&(S.depthTexture.image.width=S.width,S.depthTexture.image.height=S.height,S.depthTexture.needsUpdate=!0),z(S.depthTexture,0);const re=n.get(S.depthTexture).__webglTexture,ie=oe(S);if(S.depthTexture.format===Hn)q(S)?c.framebufferTexture2DMultisampleEXT(s.FRAMEBUFFER,s.DEPTH_ATTACHMENT,s.TEXTURE_2D,re,0,ie):s.framebufferTexture2D(s.FRAMEBUFFER,s.DEPTH_ATTACHMENT,s.TEXTURE_2D,re,0);else if(S.depthTexture.format===Ci)q(S)?c.framebufferTexture2DMultisampleEXT(s.FRAMEBUFFER,s.DEPTH_STENCIL_ATTACHMENT,s.TEXTURE_2D,re,0,ie):s.framebufferTexture2D(s.FRAMEBUFFER,s.DEPTH_STENCIL_ATTACHMENT,s.TEXTURE_2D,re,0);else throw new Error("Unknown depthTexture format")}function we(w){const S=n.get(w),U=w.isWebGLCubeRenderTarget===!0;if(w.depthTexture&&!S.__autoAllocateDepthBuffer){if(U)throw new Error("target.depthTexture not supported in Cube render targets");Oe(S.__webglFramebuffer,w)}else if(U){S.__webglDepthbuffer=[];for(let re=0;re<6;re++)t.bindFramebuffer(s.FRAMEBUFFER,S.__webglFramebuffer[re]),S.__webglDepthbuffer[re]=s.createRenderbuffer(),De(S.__webglDepthbuffer[re],w,!1)}else t.bindFramebuffer(s.FRAMEBUFFER,S.__webglFramebuffer),S.__webglDepthbuffer=s.createRenderbuffer(),De(S.__webglDepthbuffer,w,!1);t.bindFramebuffer(s.FRAMEBUFFER,null)}function Fe(w,S,U){const re=n.get(w);S!==void 0&&ve(re.__webglFramebuffer,w,w.texture,s.COLOR_ATTACHMENT0,s.TEXTURE_2D,0),U!==void 0&&we(w)}function L(w){const S=w.texture,U=n.get(w),re=n.get(S);w.addEventListener("dispose",N),w.isWebGLMultipleRenderTargets!==!0&&(re.__webglTexture===void 0&&(re.__webglTexture=s.createTexture()),re.__version=S.version,a.memory.textures++);const ie=w.isWebGLCubeRenderTarget===!0,te=w.isWebGLMultipleRenderTargets===!0,Ee=m(w)||o;if(ie){U.__webglFramebuffer=[];for(let fe=0;fe<6;fe++)if(o&&S.mipmaps&&S.mipmaps.length>0){U.__webglFramebuffer[fe]=[];for(let ye=0;ye<S.mipmaps.length;ye++)U.__webglFramebuffer[fe][ye]=s.createFramebuffer()}else U.__webglFramebuffer[fe]=s.createFramebuffer()}else{if(o&&S.mipmaps&&S.mipmaps.length>0){U.__webglFramebuffer=[];for(let fe=0;fe<S.mipmaps.length;fe++)U.__webglFramebuffer[fe]=s.createFramebuffer()}else U.__webglFramebuffer=s.createFramebuffer();if(te)if(i.drawBuffers){const fe=w.texture;for(let ye=0,Pe=fe.length;ye<Pe;ye++){const ke=n.get(fe[ye]);ke.__webglTexture===void 0&&(ke.__webglTexture=s.createTexture(),a.memory.textures++)}}else console.warn("THREE.WebGLRenderer: WebGLMultipleRenderTargets can only be used with WebGL2 or WEBGL_draw_buffers extension.");if(o&&w.samples>0&&q(w)===!1){const fe=te?S:[S];U.__webglMultisampledFramebuffer=s.createFramebuffer(),U.__webglColorRenderbuffer=[],t.bindFramebuffer(s.FRAMEBUFFER,U.__webglMultisampledFramebuffer);for(let ye=0;ye<fe.length;ye++){const Pe=fe[ye];U.__webglColorRenderbuffer[ye]=s.createRenderbuffer(),s.bindRenderbuffer(s.RENDERBUFFER,U.__webglColorRenderbuffer[ye]);const ke=r.convert(Pe.format,Pe.colorSpace),se=r.convert(Pe.type),Ke=y(Pe.internalFormat,ke,se,Pe.colorSpace,w.isXRRenderTarget===!0),Xe=oe(w);s.renderbufferStorageMultisample(s.RENDERBUFFER,Xe,Ke,w.width,w.height),s.framebufferRenderbuffer(s.FRAMEBUFFER,s.COLOR_ATTACHMENT0+ye,s.RENDERBUFFER,U.__webglColorRenderbuffer[ye])}s.bindRenderbuffer(s.RENDERBUFFER,null),w.depthBuffer&&(U.__webglDepthRenderbuffer=s.createRenderbuffer(),De(U.__webglDepthRenderbuffer,w,!0)),t.bindFramebuffer(s.FRAMEBUFFER,null)}}if(ie){t.bindTexture(s.TEXTURE_CUBE_MAP,re.__webglTexture),X(s.TEXTURE_CUBE_MAP,S,Ee);for(let fe=0;fe<6;fe++)if(o&&S.mipmaps&&S.mipmaps.length>0)for(let ye=0;ye<S.mipmaps.length;ye++)ve(U.__webglFramebuffer[fe][ye],w,S,s.COLOR_ATTACHMENT0,s.TEXTURE_CUBE_MAP_POSITIVE_X+fe,ye);else ve(U.__webglFramebuffer[fe],w,S,s.COLOR_ATTACHMENT0,s.TEXTURE_CUBE_MAP_POSITIVE_X+fe,0);_(S,Ee)&&x(s.TEXTURE_CUBE_MAP),t.unbindTexture()}else if(te){const fe=w.texture;for(let ye=0,Pe=fe.length;ye<Pe;ye++){const ke=fe[ye],se=n.get(ke);t.bindTexture(s.TEXTURE_2D,se.__webglTexture),X(s.TEXTURE_2D,ke,Ee),ve(U.__webglFramebuffer,w,ke,s.COLOR_ATTACHMENT0+ye,s.TEXTURE_2D,0),_(ke,Ee)&&x(s.TEXTURE_2D)}t.unbindTexture()}else{let fe=s.TEXTURE_2D;if((w.isWebGL3DRenderTarget||w.isWebGLArrayRenderTarget)&&(o?fe=w.isWebGL3DRenderTarget?s.TEXTURE_3D:s.TEXTURE_2D_ARRAY:console.error("THREE.WebGLTextures: THREE.Data3DTexture and THREE.DataArrayTexture only supported with WebGL2.")),t.bindTexture(fe,re.__webglTexture),X(fe,S,Ee),o&&S.mipmaps&&S.mipmaps.length>0)for(let ye=0;ye<S.mipmaps.length;ye++)ve(U.__webglFramebuffer[ye],w,S,s.COLOR_ATTACHMENT0,fe,ye);else ve(U.__webglFramebuffer,w,S,s.COLOR_ATTACHMENT0,fe,0);_(S,Ee)&&x(fe),t.unbindTexture()}w.depthBuffer&&we(w)}function ue(w){const S=m(w)||o,U=w.isWebGLMultipleRenderTargets===!0?w.texture:[w.texture];for(let re=0,ie=U.length;re<ie;re++){const te=U[re];if(_(te,S)){const Ee=w.isWebGLCubeRenderTarget?s.TEXTURE_CUBE_MAP:s.TEXTURE_2D,fe=n.get(te).__webglTexture;t.bindTexture(Ee,fe),x(Ee),t.unbindTexture()}}}function Y(w){if(o&&w.samples>0&&q(w)===!1){const S=w.isWebGLMultipleRenderTargets?w.texture:[w.texture],U=w.width,re=w.height;let ie=s.COLOR_BUFFER_BIT;const te=[],Ee=w.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT,fe=n.get(w),ye=w.isWebGLMultipleRenderTargets===!0;if(ye)for(let Pe=0;Pe<S.length;Pe++)t.bindFramebuffer(s.FRAMEBUFFER,fe.__webglMultisampledFramebuffer),s.framebufferRenderbuffer(s.FRAMEBUFFER,s.COLOR_ATTACHMENT0+Pe,s.RENDERBUFFER,null),t.bindFramebuffer(s.FRAMEBUFFER,fe.__webglFramebuffer),s.framebufferTexture2D(s.DRAW_FRAMEBUFFER,s.COLOR_ATTACHMENT0+Pe,s.TEXTURE_2D,null,0);t.bindFramebuffer(s.READ_FRAMEBUFFER,fe.__webglMultisampledFramebuffer),t.bindFramebuffer(s.DRAW_FRAMEBUFFER,fe.__webglFramebuffer);for(let Pe=0;Pe<S.length;Pe++){te.push(s.COLOR_ATTACHMENT0+Pe),w.depthBuffer&&te.push(Ee);const ke=fe.__ignoreDepthValues!==void 0?fe.__ignoreDepthValues:!1;if(ke===!1&&(w.depthBuffer&&(ie|=s.DEPTH_BUFFER_BIT),w.stencilBuffer&&(ie|=s.STENCIL_BUFFER_BIT)),ye&&s.framebufferRenderbuffer(s.READ_FRAMEBUFFER,s.COLOR_ATTACHMENT0,s.RENDERBUFFER,fe.__webglColorRenderbuffer[Pe]),ke===!0&&(s.invalidateFramebuffer(s.READ_FRAMEBUFFER,[Ee]),s.invalidateFramebuffer(s.DRAW_FRAMEBUFFER,[Ee])),ye){const se=n.get(S[Pe]).__webglTexture;s.framebufferTexture2D(s.DRAW_FRAMEBUFFER,s.COLOR_ATTACHMENT0,s.TEXTURE_2D,se,0)}s.blitFramebuffer(0,0,U,re,0,0,U,re,ie,s.NEAREST),l&&s.invalidateFramebuffer(s.READ_FRAMEBUFFER,te)}if(t.bindFramebuffer(s.READ_FRAMEBUFFER,null),t.bindFramebuffer(s.DRAW_FRAMEBUFFER,null),ye)for(let Pe=0;Pe<S.length;Pe++){t.bindFramebuffer(s.FRAMEBUFFER,fe.__webglMultisampledFramebuffer),s.framebufferRenderbuffer(s.FRAMEBUFFER,s.COLOR_ATTACHMENT0+Pe,s.RENDERBUFFER,fe.__webglColorRenderbuffer[Pe]);const ke=n.get(S[Pe]).__webglTexture;t.bindFramebuffer(s.FRAMEBUFFER,fe.__webglFramebuffer),s.framebufferTexture2D(s.DRAW_FRAMEBUFFER,s.COLOR_ATTACHMENT0+Pe,s.TEXTURE_2D,ke,0)}t.bindFramebuffer(s.DRAW_FRAMEBUFFER,fe.__webglMultisampledFramebuffer)}}function oe(w){return Math.min(i.maxSamples,w.samples)}function q(w){const S=n.get(w);return o&&w.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&S.__useRenderToTexture!==!1}function Te(w){const S=a.render.frame;h.get(w)!==S&&(h.set(w,S),w.update())}function ge(w,S){const U=w.colorSpace,re=w.format,ie=w.type;return w.isCompressedTexture===!0||w.isVideoTexture===!0||w.format===aa||U!==vn&&U!==Yt&&(Qe.getTransfer(U)===it?o===!1?e.has("EXT_sRGB")===!0&&re===en?(w.format=aa,w.minFilter=Bt,w.generateMipmaps=!1):S=Bc.sRGBToLinear(S):(re!==en||ie!==An)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",U)),S}this.allocateTextureUnit=D,this.resetTextureUnits=Z,this.setTexture2D=z,this.setTexture2DArray=$,this.setTexture3D=K,this.setTextureCube=J,this.rebindTextures=Fe,this.setupRenderTarget=L,this.updateRenderTargetMipmap=ue,this.updateMultisampleRenderTarget=Y,this.setupDepthRenderbuffer=we,this.setupFrameBufferTexture=ve,this.useMultisampledRTT=q}function Mm(s,e,t){const n=t.isWebGL2;function i(r,a=Yt){let o;const c=Qe.getTransfer(a);if(r===An)return s.UNSIGNED_BYTE;if(r===Cc)return s.UNSIGNED_SHORT_4_4_4_4;if(r===Rc)return s.UNSIGNED_SHORT_5_5_5_1;if(r===th)return s.BYTE;if(r===nh)return s.SHORT;if(r===ga)return s.UNSIGNED_SHORT;if(r===Ac)return s.INT;if(r===Sn)return s.UNSIGNED_INT;if(r===En)return s.FLOAT;if(r===ji)return n?s.HALF_FLOAT:(o=e.get("OES_texture_half_float"),o!==null?o.HALF_FLOAT_OES:null);if(r===ih)return s.ALPHA;if(r===en)return s.RGBA;if(r===sh)return s.LUMINANCE;if(r===rh)return s.LUMINANCE_ALPHA;if(r===Hn)return s.DEPTH_COMPONENT;if(r===Ci)return s.DEPTH_STENCIL;if(r===aa)return o=e.get("EXT_sRGB"),o!==null?o.SRGB_ALPHA_EXT:null;if(r===ah)return s.RED;if(r===Pc)return s.RED_INTEGER;if(r===oh)return s.RG;if(r===Lc)return s.RG_INTEGER;if(r===Dc)return s.RGBA_INTEGER;if(r===ur||r===dr||r===fr||r===pr)if(c===it)if(o=e.get("WEBGL_compressed_texture_s3tc_srgb"),o!==null){if(r===ur)return o.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(r===dr)return o.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(r===fr)return o.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(r===pr)return o.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(o=e.get("WEBGL_compressed_texture_s3tc"),o!==null){if(r===ur)return o.COMPRESSED_RGB_S3TC_DXT1_EXT;if(r===dr)return o.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(r===fr)return o.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(r===pr)return o.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(r===Va||r===Wa||r===Xa||r===ja)if(o=e.get("WEBGL_compressed_texture_pvrtc"),o!==null){if(r===Va)return o.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(r===Wa)return o.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(r===Xa)return o.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(r===ja)return o.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(r===Oc)return o=e.get("WEBGL_compressed_texture_etc1"),o!==null?o.COMPRESSED_RGB_ETC1_WEBGL:null;if(r===qa||r===Ya)if(o=e.get("WEBGL_compressed_texture_etc"),o!==null){if(r===qa)return c===it?o.COMPRESSED_SRGB8_ETC2:o.COMPRESSED_RGB8_ETC2;if(r===Ya)return c===it?o.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:o.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(r===Za||r===$a||r===Ka||r===Ja||r===Qa||r===eo||r===to||r===no||r===io||r===so||r===ro||r===ao||r===oo||r===co)if(o=e.get("WEBGL_compressed_texture_astc"),o!==null){if(r===Za)return c===it?o.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:o.COMPRESSED_RGBA_ASTC_4x4_KHR;if(r===$a)return c===it?o.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:o.COMPRESSED_RGBA_ASTC_5x4_KHR;if(r===Ka)return c===it?o.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:o.COMPRESSED_RGBA_ASTC_5x5_KHR;if(r===Ja)return c===it?o.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:o.COMPRESSED_RGBA_ASTC_6x5_KHR;if(r===Qa)return c===it?o.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:o.COMPRESSED_RGBA_ASTC_6x6_KHR;if(r===eo)return c===it?o.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:o.COMPRESSED_RGBA_ASTC_8x5_KHR;if(r===to)return c===it?o.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:o.COMPRESSED_RGBA_ASTC_8x6_KHR;if(r===no)return c===it?o.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:o.COMPRESSED_RGBA_ASTC_8x8_KHR;if(r===io)return c===it?o.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:o.COMPRESSED_RGBA_ASTC_10x5_KHR;if(r===so)return c===it?o.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:o.COMPRESSED_RGBA_ASTC_10x6_KHR;if(r===ro)return c===it?o.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:o.COMPRESSED_RGBA_ASTC_10x8_KHR;if(r===ao)return c===it?o.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:o.COMPRESSED_RGBA_ASTC_10x10_KHR;if(r===oo)return c===it?o.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:o.COMPRESSED_RGBA_ASTC_12x10_KHR;if(r===co)return c===it?o.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:o.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(r===mr||r===lo||r===ho)if(o=e.get("EXT_texture_compression_bptc"),o!==null){if(r===mr)return c===it?o.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:o.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(r===lo)return o.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(r===ho)return o.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(r===ch||r===uo||r===fo||r===po)if(o=e.get("EXT_texture_compression_rgtc"),o!==null){if(r===mr)return o.COMPRESSED_RED_RGTC1_EXT;if(r===uo)return o.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(r===fo)return o.COMPRESSED_RED_GREEN_RGTC2_EXT;if(r===po)return o.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return r===kn?n?s.UNSIGNED_INT_24_8:(o=e.get("WEBGL_depth_texture"),o!==null?o.UNSIGNED_INT_24_8_WEBGL:null):s[r]!==void 0?s[r]:null}return{convert:i}}class bm extends bt{constructor(e=[]){super(),this.isArrayCamera=!0,this.cameras=e}}class rt extends gt{constructor(){super(),this.isGroup=!0,this.type="Group"}}const Sm={type:"move"};class zr{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new rt,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new rt,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new M,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new M),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new rt,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new M,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new M),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){const t=this._hand;if(t)for(const n of e.hand.values())this._getHandJoint(t,n)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,t,n){let i=null,r=null,a=null;const o=this._targetRay,c=this._grip,l=this._hand;if(e&&t.session.visibilityState!=="visible-blurred"){if(l&&e.hand){a=!0;for(const v of e.hand.values()){const m=t.getJointPose(v,n),d=this._getHandJoint(l,v);m!==null&&(d.matrix.fromArray(m.transform.matrix),d.matrix.decompose(d.position,d.rotation,d.scale),d.matrixWorldNeedsUpdate=!0,d.jointRadius=m.radius),d.visible=m!==null}const h=l.joints["index-finger-tip"],u=l.joints["thumb-tip"],f=h.position.distanceTo(u.position),p=.02,g=.005;l.inputState.pinching&&f>p+g?(l.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!l.inputState.pinching&&f<=p-g&&(l.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else c!==null&&e.gripSpace&&(r=t.getPose(e.gripSpace,n),r!==null&&(c.matrix.fromArray(r.transform.matrix),c.matrix.decompose(c.position,c.rotation,c.scale),c.matrixWorldNeedsUpdate=!0,r.linearVelocity?(c.hasLinearVelocity=!0,c.linearVelocity.copy(r.linearVelocity)):c.hasLinearVelocity=!1,r.angularVelocity?(c.hasAngularVelocity=!0,c.angularVelocity.copy(r.angularVelocity)):c.hasAngularVelocity=!1));o!==null&&(i=t.getPose(e.targetRaySpace,n),i===null&&r!==null&&(i=r),i!==null&&(o.matrix.fromArray(i.transform.matrix),o.matrix.decompose(o.position,o.rotation,o.scale),o.matrixWorldNeedsUpdate=!0,i.linearVelocity?(o.hasLinearVelocity=!0,o.linearVelocity.copy(i.linearVelocity)):o.hasLinearVelocity=!1,i.angularVelocity?(o.hasAngularVelocity=!0,o.angularVelocity.copy(i.angularVelocity)):o.hasAngularVelocity=!1,this.dispatchEvent(Sm)))}return o!==null&&(o.visible=i!==null),c!==null&&(c.visible=r!==null),l!==null&&(l.visible=a!==null),this}_getHandJoint(e,t){if(e.joints[t.jointName]===void 0){const n=new rt;n.matrixAutoUpdate=!1,n.visible=!1,e.joints[t.jointName]=n,e.add(n)}return e.joints[t.jointName]}}class Em extends qn{constructor(e,t){super();const n=this;let i=null,r=1,a=null,o="local-floor",c=1,l=null,h=null,u=null,f=null,p=null,g=null;const v=t.getContextAttributes();let m=null,d=null;const _=[],x=[],y=new j;let R=null;const E=new bt;E.layers.enable(1),E.viewport=new St;const C=new bt;C.layers.enable(2),C.viewport=new St;const N=[E,C],b=new bm;b.layers.enable(1),b.layers.enable(2);let T=null,I=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(X){let ee=_[X];return ee===void 0&&(ee=new zr,_[X]=ee),ee.getTargetRaySpace()},this.getControllerGrip=function(X){let ee=_[X];return ee===void 0&&(ee=new zr,_[X]=ee),ee.getGripSpace()},this.getHand=function(X){let ee=_[X];return ee===void 0&&(ee=new zr,_[X]=ee),ee.getHandSpace()};function G(X){const ee=x.indexOf(X.inputSource);if(ee===-1)return;const pe=_[ee];pe!==void 0&&(pe.update(X.inputSource,X.frame,l||a),pe.dispatchEvent({type:X.type,data:X.inputSource}))}function Z(){i.removeEventListener("select",G),i.removeEventListener("selectstart",G),i.removeEventListener("selectend",G),i.removeEventListener("squeeze",G),i.removeEventListener("squeezestart",G),i.removeEventListener("squeezeend",G),i.removeEventListener("end",Z),i.removeEventListener("inputsourceschange",D);for(let X=0;X<_.length;X++){const ee=x[X];ee!==null&&(x[X]=null,_[X].disconnect(ee))}T=null,I=null,e.setRenderTarget(m),p=null,f=null,u=null,i=null,d=null,ce.stop(),n.isPresenting=!1,e.setPixelRatio(R),e.setSize(y.width,y.height,!1),n.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(X){r=X,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(X){o=X,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return l||a},this.setReferenceSpace=function(X){l=X},this.getBaseLayer=function(){return f!==null?f:p},this.getBinding=function(){return u},this.getFrame=function(){return g},this.getSession=function(){return i},this.setSession=async function(X){if(i=X,i!==null){if(m=e.getRenderTarget(),i.addEventListener("select",G),i.addEventListener("selectstart",G),i.addEventListener("selectend",G),i.addEventListener("squeeze",G),i.addEventListener("squeezestart",G),i.addEventListener("squeezeend",G),i.addEventListener("end",Z),i.addEventListener("inputsourceschange",D),v.xrCompatible!==!0&&await t.makeXRCompatible(),R=e.getPixelRatio(),e.getSize(y),i.renderState.layers===void 0||e.capabilities.isWebGL2===!1){const ee={antialias:i.renderState.layers===void 0?v.antialias:!0,alpha:!0,depth:v.depth,stencil:v.stencil,framebufferScaleFactor:r};p=new XRWebGLLayer(i,t,ee),i.updateRenderState({baseLayer:p}),e.setPixelRatio(1),e.setSize(p.framebufferWidth,p.framebufferHeight,!1),d=new Wn(p.framebufferWidth,p.framebufferHeight,{format:en,type:An,colorSpace:e.outputColorSpace,stencilBuffer:v.stencil})}else{let ee=null,pe=null,Se=null;v.depth&&(Se=v.stencil?t.DEPTH24_STENCIL8:t.DEPTH_COMPONENT24,ee=v.stencil?Ci:Hn,pe=v.stencil?kn:Sn);const ve={colorFormat:t.RGBA8,depthFormat:Se,scaleFactor:r};u=new XRWebGLBinding(i,t),f=u.createProjectionLayer(ve),i.updateRenderState({layers:[f]}),e.setPixelRatio(1),e.setSize(f.textureWidth,f.textureHeight,!1),d=new Wn(f.textureWidth,f.textureHeight,{format:en,type:An,depthTexture:new Yc(f.textureWidth,f.textureHeight,pe,void 0,void 0,void 0,void 0,void 0,void 0,ee),stencilBuffer:v.stencil,colorSpace:e.outputColorSpace,samples:v.antialias?4:0});const De=e.properties.get(d);De.__ignoreDepthValues=f.ignoreDepthValues}d.isXRRenderTarget=!0,this.setFoveation(c),l=null,a=await i.requestReferenceSpace(o),ce.setContext(i),ce.start(),n.isPresenting=!0,n.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(i!==null)return i.environmentBlendMode};function D(X){for(let ee=0;ee<X.removed.length;ee++){const pe=X.removed[ee],Se=x.indexOf(pe);Se>=0&&(x[Se]=null,_[Se].disconnect(pe))}for(let ee=0;ee<X.added.length;ee++){const pe=X.added[ee];let Se=x.indexOf(pe);if(Se===-1){for(let De=0;De<_.length;De++)if(De>=x.length){x.push(pe),Se=De;break}else if(x[De]===null){x[De]=pe,Se=De;break}if(Se===-1)break}const ve=_[Se];ve&&ve.connect(pe)}}const B=new M,z=new M;function $(X,ee,pe){B.setFromMatrixPosition(ee.matrixWorld),z.setFromMatrixPosition(pe.matrixWorld);const Se=B.distanceTo(z),ve=ee.projectionMatrix.elements,De=pe.projectionMatrix.elements,Oe=ve[14]/(ve[10]-1),we=ve[14]/(ve[10]+1),Fe=(ve[9]+1)/ve[5],L=(ve[9]-1)/ve[5],ue=(ve[8]-1)/ve[0],Y=(De[8]+1)/De[0],oe=Oe*ue,q=Oe*Y,Te=Se/(-ue+Y),ge=Te*-ue;ee.matrixWorld.decompose(X.position,X.quaternion,X.scale),X.translateX(ge),X.translateZ(Te),X.matrixWorld.compose(X.position,X.quaternion,X.scale),X.matrixWorldInverse.copy(X.matrixWorld).invert();const w=Oe+Te,S=we+Te,U=oe-ge,re=q+(Se-ge),ie=Fe*we/S*w,te=L*we/S*w;X.projectionMatrix.makePerspective(U,re,ie,te,w,S),X.projectionMatrixInverse.copy(X.projectionMatrix).invert()}function K(X,ee){ee===null?X.matrixWorld.copy(X.matrix):X.matrixWorld.multiplyMatrices(ee.matrixWorld,X.matrix),X.matrixWorldInverse.copy(X.matrixWorld).invert()}this.updateCamera=function(X){if(i===null)return;b.near=C.near=E.near=X.near,b.far=C.far=E.far=X.far,(T!==b.near||I!==b.far)&&(i.updateRenderState({depthNear:b.near,depthFar:b.far}),T=b.near,I=b.far);const ee=X.parent,pe=b.cameras;K(b,ee);for(let Se=0;Se<pe.length;Se++)K(pe[Se],ee);pe.length===2?$(b,E,C):b.projectionMatrix.copy(E.projectionMatrix),J(X,b,ee)};function J(X,ee,pe){pe===null?X.matrix.copy(ee.matrixWorld):(X.matrix.copy(pe.matrixWorld),X.matrix.invert(),X.matrix.multiply(ee.matrixWorld)),X.matrix.decompose(X.position,X.quaternion,X.scale),X.updateMatrixWorld(!0),X.projectionMatrix.copy(ee.projectionMatrix),X.projectionMatrixInverse.copy(ee.projectionMatrixInverse),X.isPerspectiveCamera&&(X.fov=oa*2*Math.atan(1/X.projectionMatrix.elements[5]),X.zoom=1)}this.getCamera=function(){return b},this.getFoveation=function(){if(!(f===null&&p===null))return c},this.setFoveation=function(X){c=X,f!==null&&(f.fixedFoveation=X),p!==null&&p.fixedFoveation!==void 0&&(p.fixedFoveation=X)};let Q=null;function ne(X,ee){if(h=ee.getViewerPose(l||a),g=ee,h!==null){const pe=h.views;p!==null&&(e.setRenderTargetFramebuffer(d,p.framebuffer),e.setRenderTarget(d));let Se=!1;pe.length!==b.cameras.length&&(b.cameras.length=0,Se=!0);for(let ve=0;ve<pe.length;ve++){const De=pe[ve];let Oe=null;if(p!==null)Oe=p.getViewport(De);else{const Fe=u.getViewSubImage(f,De);Oe=Fe.viewport,ve===0&&(e.setRenderTargetTextures(d,Fe.colorTexture,f.ignoreDepthValues?void 0:Fe.depthStencilTexture),e.setRenderTarget(d))}let we=N[ve];we===void 0&&(we=new bt,we.layers.enable(ve),we.viewport=new St,N[ve]=we),we.matrix.fromArray(De.transform.matrix),we.matrix.decompose(we.position,we.quaternion,we.scale),we.projectionMatrix.fromArray(De.projectionMatrix),we.projectionMatrixInverse.copy(we.projectionMatrix).invert(),we.viewport.set(Oe.x,Oe.y,Oe.width,Oe.height),ve===0&&(b.matrix.copy(we.matrix),b.matrix.decompose(b.position,b.quaternion,b.scale)),Se===!0&&b.cameras.push(we)}}for(let pe=0;pe<_.length;pe++){const Se=x[pe],ve=_[pe];Se!==null&&ve!==void 0&&ve.update(Se,ee,l||a)}Q&&Q(X,ee),ee.detectedPlanes&&n.dispatchEvent({type:"planesdetected",data:ee}),g=null}const ce=new qc;ce.setAnimationLoop(ne),this.setAnimationLoop=function(X){Q=X},this.dispose=function(){}}}function wm(s,e){function t(m,d){m.matrixAutoUpdate===!0&&m.updateMatrix(),d.value.copy(m.matrix)}function n(m,d){d.color.getRGB(m.fogColor.value,Wc(s)),d.isFog?(m.fogNear.value=d.near,m.fogFar.value=d.far):d.isFogExp2&&(m.fogDensity.value=d.density)}function i(m,d,_,x,y){d.isMeshBasicMaterial||d.isMeshLambertMaterial?r(m,d):d.isMeshToonMaterial?(r(m,d),u(m,d)):d.isMeshPhongMaterial?(r(m,d),h(m,d)):d.isMeshStandardMaterial?(r(m,d),f(m,d),d.isMeshPhysicalMaterial&&p(m,d,y)):d.isMeshMatcapMaterial?(r(m,d),g(m,d)):d.isMeshDepthMaterial?r(m,d):d.isMeshDistanceMaterial?(r(m,d),v(m,d)):d.isMeshNormalMaterial?r(m,d):d.isLineBasicMaterial?(a(m,d),d.isLineDashedMaterial&&o(m,d)):d.isPointsMaterial?c(m,d,_,x):d.isSpriteMaterial?l(m,d):d.isShadowMaterial?(m.color.value.copy(d.color),m.opacity.value=d.opacity):d.isShaderMaterial&&(d.uniformsNeedUpdate=!1)}function r(m,d){m.opacity.value=d.opacity,d.color&&m.diffuse.value.copy(d.color),d.emissive&&m.emissive.value.copy(d.emissive).multiplyScalar(d.emissiveIntensity),d.map&&(m.map.value=d.map,t(d.map,m.mapTransform)),d.alphaMap&&(m.alphaMap.value=d.alphaMap,t(d.alphaMap,m.alphaMapTransform)),d.bumpMap&&(m.bumpMap.value=d.bumpMap,t(d.bumpMap,m.bumpMapTransform),m.bumpScale.value=d.bumpScale,d.side===zt&&(m.bumpScale.value*=-1)),d.normalMap&&(m.normalMap.value=d.normalMap,t(d.normalMap,m.normalMapTransform),m.normalScale.value.copy(d.normalScale),d.side===zt&&m.normalScale.value.negate()),d.displacementMap&&(m.displacementMap.value=d.displacementMap,t(d.displacementMap,m.displacementMapTransform),m.displacementScale.value=d.displacementScale,m.displacementBias.value=d.displacementBias),d.emissiveMap&&(m.emissiveMap.value=d.emissiveMap,t(d.emissiveMap,m.emissiveMapTransform)),d.specularMap&&(m.specularMap.value=d.specularMap,t(d.specularMap,m.specularMapTransform)),d.alphaTest>0&&(m.alphaTest.value=d.alphaTest);const _=e.get(d).envMap;if(_&&(m.envMap.value=_,m.flipEnvMap.value=_.isCubeTexture&&_.isRenderTargetTexture===!1?-1:1,m.reflectivity.value=d.reflectivity,m.ior.value=d.ior,m.refractionRatio.value=d.refractionRatio),d.lightMap){m.lightMap.value=d.lightMap;const x=s._useLegacyLights===!0?Math.PI:1;m.lightMapIntensity.value=d.lightMapIntensity*x,t(d.lightMap,m.lightMapTransform)}d.aoMap&&(m.aoMap.value=d.aoMap,m.aoMapIntensity.value=d.aoMapIntensity,t(d.aoMap,m.aoMapTransform))}function a(m,d){m.diffuse.value.copy(d.color),m.opacity.value=d.opacity,d.map&&(m.map.value=d.map,t(d.map,m.mapTransform))}function o(m,d){m.dashSize.value=d.dashSize,m.totalSize.value=d.dashSize+d.gapSize,m.scale.value=d.scale}function c(m,d,_,x){m.diffuse.value.copy(d.color),m.opacity.value=d.opacity,m.size.value=d.size*_,m.scale.value=x*.5,d.map&&(m.map.value=d.map,t(d.map,m.uvTransform)),d.alphaMap&&(m.alphaMap.value=d.alphaMap,t(d.alphaMap,m.alphaMapTransform)),d.alphaTest>0&&(m.alphaTest.value=d.alphaTest)}function l(m,d){m.diffuse.value.copy(d.color),m.opacity.value=d.opacity,m.rotation.value=d.rotation,d.map&&(m.map.value=d.map,t(d.map,m.mapTransform)),d.alphaMap&&(m.alphaMap.value=d.alphaMap,t(d.alphaMap,m.alphaMapTransform)),d.alphaTest>0&&(m.alphaTest.value=d.alphaTest)}function h(m,d){m.specular.value.copy(d.specular),m.shininess.value=Math.max(d.shininess,1e-4)}function u(m,d){d.gradientMap&&(m.gradientMap.value=d.gradientMap)}function f(m,d){m.metalness.value=d.metalness,d.metalnessMap&&(m.metalnessMap.value=d.metalnessMap,t(d.metalnessMap,m.metalnessMapTransform)),m.roughness.value=d.roughness,d.roughnessMap&&(m.roughnessMap.value=d.roughnessMap,t(d.roughnessMap,m.roughnessMapTransform)),e.get(d).envMap&&(m.envMapIntensity.value=d.envMapIntensity)}function p(m,d,_){m.ior.value=d.ior,d.sheen>0&&(m.sheenColor.value.copy(d.sheenColor).multiplyScalar(d.sheen),m.sheenRoughness.value=d.sheenRoughness,d.sheenColorMap&&(m.sheenColorMap.value=d.sheenColorMap,t(d.sheenColorMap,m.sheenColorMapTransform)),d.sheenRoughnessMap&&(m.sheenRoughnessMap.value=d.sheenRoughnessMap,t(d.sheenRoughnessMap,m.sheenRoughnessMapTransform))),d.clearcoat>0&&(m.clearcoat.value=d.clearcoat,m.clearcoatRoughness.value=d.clearcoatRoughness,d.clearcoatMap&&(m.clearcoatMap.value=d.clearcoatMap,t(d.clearcoatMap,m.clearcoatMapTransform)),d.clearcoatRoughnessMap&&(m.clearcoatRoughnessMap.value=d.clearcoatRoughnessMap,t(d.clearcoatRoughnessMap,m.clearcoatRoughnessMapTransform)),d.clearcoatNormalMap&&(m.clearcoatNormalMap.value=d.clearcoatNormalMap,t(d.clearcoatNormalMap,m.clearcoatNormalMapTransform),m.clearcoatNormalScale.value.copy(d.clearcoatNormalScale),d.side===zt&&m.clearcoatNormalScale.value.negate())),d.iridescence>0&&(m.iridescence.value=d.iridescence,m.iridescenceIOR.value=d.iridescenceIOR,m.iridescenceThicknessMinimum.value=d.iridescenceThicknessRange[0],m.iridescenceThicknessMaximum.value=d.iridescenceThicknessRange[1],d.iridescenceMap&&(m.iridescenceMap.value=d.iridescenceMap,t(d.iridescenceMap,m.iridescenceMapTransform)),d.iridescenceThicknessMap&&(m.iridescenceThicknessMap.value=d.iridescenceThicknessMap,t(d.iridescenceThicknessMap,m.iridescenceThicknessMapTransform))),d.transmission>0&&(m.transmission.value=d.transmission,m.transmissionSamplerMap.value=_.texture,m.transmissionSamplerSize.value.set(_.width,_.height),d.transmissionMap&&(m.transmissionMap.value=d.transmissionMap,t(d.transmissionMap,m.transmissionMapTransform)),m.thickness.value=d.thickness,d.thicknessMap&&(m.thicknessMap.value=d.thicknessMap,t(d.thicknessMap,m.thicknessMapTransform)),m.attenuationDistance.value=d.attenuationDistance,m.attenuationColor.value.copy(d.attenuationColor)),d.anisotropy>0&&(m.anisotropyVector.value.set(d.anisotropy*Math.cos(d.anisotropyRotation),d.anisotropy*Math.sin(d.anisotropyRotation)),d.anisotropyMap&&(m.anisotropyMap.value=d.anisotropyMap,t(d.anisotropyMap,m.anisotropyMapTransform))),m.specularIntensity.value=d.specularIntensity,m.specularColor.value.copy(d.specularColor),d.specularColorMap&&(m.specularColorMap.value=d.specularColorMap,t(d.specularColorMap,m.specularColorMapTransform)),d.specularIntensityMap&&(m.specularIntensityMap.value=d.specularIntensityMap,t(d.specularIntensityMap,m.specularIntensityMapTransform))}function g(m,d){d.matcap&&(m.matcap.value=d.matcap)}function v(m,d){const _=e.get(d).light;m.referencePosition.value.setFromMatrixPosition(_.matrixWorld),m.nearDistance.value=_.shadow.camera.near,m.farDistance.value=_.shadow.camera.far}return{refreshFogUniforms:n,refreshMaterialUniforms:i}}function Tm(s,e,t,n){let i={},r={},a=[];const o=t.isWebGL2?s.getParameter(s.MAX_UNIFORM_BUFFER_BINDINGS):0;function c(_,x){const y=x.program;n.uniformBlockBinding(_,y)}function l(_,x){let y=i[_.id];y===void 0&&(g(_),y=h(_),i[_.id]=y,_.addEventListener("dispose",m));const R=x.program;n.updateUBOMapping(_,R);const E=e.render.frame;r[_.id]!==E&&(f(_),r[_.id]=E)}function h(_){const x=u();_.__bindingPointIndex=x;const y=s.createBuffer(),R=_.__size,E=_.usage;return s.bindBuffer(s.UNIFORM_BUFFER,y),s.bufferData(s.UNIFORM_BUFFER,R,E),s.bindBuffer(s.UNIFORM_BUFFER,null),s.bindBufferBase(s.UNIFORM_BUFFER,x,y),y}function u(){for(let _=0;_<o;_++)if(a.indexOf(_)===-1)return a.push(_),_;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function f(_){const x=i[_.id],y=_.uniforms,R=_.__cache;s.bindBuffer(s.UNIFORM_BUFFER,x);for(let E=0,C=y.length;E<C;E++){const N=Array.isArray(y[E])?y[E]:[y[E]];for(let b=0,T=N.length;b<T;b++){const I=N[b];if(p(I,E,b,R)===!0){const G=I.__offset,Z=Array.isArray(I.value)?I.value:[I.value];let D=0;for(let B=0;B<Z.length;B++){const z=Z[B],$=v(z);typeof z=="number"||typeof z=="boolean"?(I.__data[0]=z,s.bufferSubData(s.UNIFORM_BUFFER,G+D,I.__data)):z.isMatrix3?(I.__data[0]=z.elements[0],I.__data[1]=z.elements[1],I.__data[2]=z.elements[2],I.__data[3]=0,I.__data[4]=z.elements[3],I.__data[5]=z.elements[4],I.__data[6]=z.elements[5],I.__data[7]=0,I.__data[8]=z.elements[6],I.__data[9]=z.elements[7],I.__data[10]=z.elements[8],I.__data[11]=0):(z.toArray(I.__data,D),D+=$.storage/Float32Array.BYTES_PER_ELEMENT)}s.bufferSubData(s.UNIFORM_BUFFER,G,I.__data)}}}s.bindBuffer(s.UNIFORM_BUFFER,null)}function p(_,x,y,R){const E=_.value,C=x+"_"+y;if(R[C]===void 0)return typeof E=="number"||typeof E=="boolean"?R[C]=E:R[C]=E.clone(),!0;{const N=R[C];if(typeof E=="number"||typeof E=="boolean"){if(N!==E)return R[C]=E,!0}else if(N.equals(E)===!1)return N.copy(E),!0}return!1}function g(_){const x=_.uniforms;let y=0;const R=16;for(let C=0,N=x.length;C<N;C++){const b=Array.isArray(x[C])?x[C]:[x[C]];for(let T=0,I=b.length;T<I;T++){const G=b[T],Z=Array.isArray(G.value)?G.value:[G.value];for(let D=0,B=Z.length;D<B;D++){const z=Z[D],$=v(z),K=y%R;K!==0&&R-K<$.boundary&&(y+=R-K),G.__data=new Float32Array($.storage/Float32Array.BYTES_PER_ELEMENT),G.__offset=y,y+=$.storage}}}const E=y%R;return E>0&&(y+=R-E),_.__size=y,_.__cache={},this}function v(_){const x={boundary:0,storage:0};return typeof _=="number"||typeof _=="boolean"?(x.boundary=4,x.storage=4):_.isVector2?(x.boundary=8,x.storage=8):_.isVector3||_.isColor?(x.boundary=16,x.storage=12):_.isVector4?(x.boundary=16,x.storage=16):_.isMatrix3?(x.boundary=48,x.storage=48):_.isMatrix4?(x.boundary=64,x.storage=64):_.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",_),x}function m(_){const x=_.target;x.removeEventListener("dispose",m);const y=a.indexOf(x.__bindingPointIndex);a.splice(y,1),s.deleteBuffer(i[x.id]),delete i[x.id],delete r[x.id]}function d(){for(const _ in i)s.deleteBuffer(i[_]);a=[],i={},r={}}return{bind:c,update:l,dispose:d}}class el{constructor(e={}){const{canvas:t=Mh(),context:n=null,depth:i=!0,stencil:r=!0,alpha:a=!1,antialias:o=!1,premultipliedAlpha:c=!0,preserveDrawingBuffer:l=!1,powerPreference:h="default",failIfMajorPerformanceCaveat:u=!1}=e;this.isWebGLRenderer=!0;let f;n!==null?f=n.getContextAttributes().alpha:f=a;const p=new Uint32Array(4),g=new Int32Array(4);let v=null,m=null;const d=[],_=[];this.domElement=t,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this._outputColorSpace=Et,this._useLegacyLights=!1,this.toneMapping=Tn,this.toneMappingExposure=1;const x=this;let y=!1,R=0,E=0,C=null,N=-1,b=null;const T=new St,I=new St;let G=null;const Z=new Ue(0);let D=0,B=t.width,z=t.height,$=1,K=null,J=null;const Q=new St(0,0,B,z),ne=new St(0,0,B,z);let ce=!1;const X=new xa;let ee=!1,pe=!1,Se=null;const ve=new at,De=new j,Oe=new M,we={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};function Fe(){return C===null?$:1}let L=n;function ue(A,F){for(let V=0;V<A.length;V++){const W=A[V],H=t.getContext(W,F);if(H!==null)return H}return null}try{const A={alpha:!0,depth:i,stencil:r,antialias:o,premultipliedAlpha:c,preserveDrawingBuffer:l,powerPreference:h,failIfMajorPerformanceCaveat:u};if("setAttribute"in t&&t.setAttribute("data-engine",`three.js r${ma}`),t.addEventListener("webglcontextlost",ae,!1),t.addEventListener("webglcontextrestored",O,!1),t.addEventListener("webglcontextcreationerror",he,!1),L===null){const F=["webgl2","webgl","experimental-webgl"];if(x.isWebGL1Renderer===!0&&F.shift(),L=ue(F,A),L===null)throw ue(F)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}typeof WebGLRenderingContext<"u"&&L instanceof WebGLRenderingContext&&console.warn("THREE.WebGLRenderer: WebGL 1 support was deprecated in r153 and will be removed in r163."),L.getShaderPrecisionFormat===void 0&&(L.getShaderPrecisionFormat=function(){return{rangeMin:1,rangeMax:1,precision:1}})}catch(A){throw console.error("THREE.WebGLRenderer: "+A.message),A}let Y,oe,q,Te,ge,w,S,U,re,ie,te,Ee,fe,ye,Pe,ke,se,Ke,Xe,Be,Re,_e,P,le;function Ae(){Y=new Uf(L),oe=new Pf(L,Y,e),Y.init(oe),_e=new Mm(L,Y,oe),q=new xm(L,Y,oe),Te=new zf(L),ge=new rm,w=new ym(L,Y,q,ge,oe,_e,Te),S=new Df(x),U=new If(x),re=new jh(L,oe),P=new Cf(L,Y,re,oe),ie=new Ff(L,re,Te,P),te=new Vf(L,ie,re,Te),Xe=new Hf(L,oe,w),ke=new Lf(ge),Ee=new sm(x,S,U,Y,oe,P,ke),fe=new wm(x,ge),ye=new om,Pe=new fm(Y,oe),Ke=new Af(x,S,U,q,te,f,c),se=new _m(x,te,oe),le=new Tm(L,Te,oe,q),Be=new Rf(L,Y,Te,oe),Re=new Bf(L,Y,Te,oe),Te.programs=Ee.programs,x.capabilities=oe,x.extensions=Y,x.properties=ge,x.renderLists=ye,x.shadowMap=se,x.state=q,x.info=Te}Ae();const be=new Em(x,L);this.xr=be,this.getContext=function(){return L},this.getContextAttributes=function(){return L.getContextAttributes()},this.forceContextLoss=function(){const A=Y.get("WEBGL_lose_context");A&&A.loseContext()},this.forceContextRestore=function(){const A=Y.get("WEBGL_lose_context");A&&A.restoreContext()},this.getPixelRatio=function(){return $},this.setPixelRatio=function(A){A!==void 0&&($=A,this.setSize(B,z,!1))},this.getSize=function(A){return A.set(B,z)},this.setSize=function(A,F,V=!0){if(be.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}B=A,z=F,t.width=Math.floor(A*$),t.height=Math.floor(F*$),V===!0&&(t.style.width=A+"px",t.style.height=F+"px"),this.setViewport(0,0,A,F)},this.getDrawingBufferSize=function(A){return A.set(B*$,z*$).floor()},this.setDrawingBufferSize=function(A,F,V){B=A,z=F,$=V,t.width=Math.floor(A*V),t.height=Math.floor(F*V),this.setViewport(0,0,A,F)},this.getCurrentViewport=function(A){return A.copy(T)},this.getViewport=function(A){return A.copy(Q)},this.setViewport=function(A,F,V,W){A.isVector4?Q.set(A.x,A.y,A.z,A.w):Q.set(A,F,V,W),q.viewport(T.copy(Q).multiplyScalar($).floor())},this.getScissor=function(A){return A.copy(ne)},this.setScissor=function(A,F,V,W){A.isVector4?ne.set(A.x,A.y,A.z,A.w):ne.set(A,F,V,W),q.scissor(I.copy(ne).multiplyScalar($).floor())},this.getScissorTest=function(){return ce},this.setScissorTest=function(A){q.setScissorTest(ce=A)},this.setOpaqueSort=function(A){K=A},this.setTransparentSort=function(A){J=A},this.getClearColor=function(A){return A.copy(Ke.getClearColor())},this.setClearColor=function(){Ke.setClearColor.apply(Ke,arguments)},this.getClearAlpha=function(){return Ke.getClearAlpha()},this.setClearAlpha=function(){Ke.setClearAlpha.apply(Ke,arguments)},this.clear=function(A=!0,F=!0,V=!0){let W=0;if(A){let H=!1;if(C!==null){const Me=C.texture.format;H=Me===Dc||Me===Lc||Me===Pc}if(H){const Me=C.texture.type,Ce=Me===An||Me===Sn||Me===ga||Me===kn||Me===Cc||Me===Rc,Ie=Ke.getClearColor(),ze=Ke.getClearAlpha(),je=Ie.r,He=Ie.g,Ve=Ie.b;Ce?(p[0]=je,p[1]=He,p[2]=Ve,p[3]=ze,L.clearBufferuiv(L.COLOR,0,p)):(g[0]=je,g[1]=He,g[2]=Ve,g[3]=ze,L.clearBufferiv(L.COLOR,0,g))}else W|=L.COLOR_BUFFER_BIT}F&&(W|=L.DEPTH_BUFFER_BIT),V&&(W|=L.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),L.clear(W)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){t.removeEventListener("webglcontextlost",ae,!1),t.removeEventListener("webglcontextrestored",O,!1),t.removeEventListener("webglcontextcreationerror",he,!1),ye.dispose(),Pe.dispose(),ge.dispose(),S.dispose(),U.dispose(),te.dispose(),P.dispose(),le.dispose(),Ee.dispose(),be.dispose(),be.removeEventListener("sessionstart",dt),be.removeEventListener("sessionend",Je),Se&&(Se.dispose(),Se=null),pt.stop()};function ae(A){A.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),y=!0}function O(){console.log("THREE.WebGLRenderer: Context Restored."),y=!1;const A=Te.autoReset,F=se.enabled,V=se.autoUpdate,W=se.needsUpdate,H=se.type;Ae(),Te.autoReset=A,se.enabled=F,se.autoUpdate=V,se.needsUpdate=W,se.type=H}function he(A){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",A.statusMessage)}function me(A){const F=A.target;F.removeEventListener("dispose",me),Ne(F)}function Ne(A){Le(A),ge.remove(A)}function Le(A){const F=ge.get(A).programs;F!==void 0&&(F.forEach(function(V){Ee.releaseProgram(V)}),A.isShaderMaterial&&Ee.releaseShaderCache(A))}this.renderBufferDirect=function(A,F,V,W,H,Me){F===null&&(F=we);const Ce=H.isMesh&&H.matrixWorld.determinant()<0,Ie=ml(A,F,V,W,H);q.setMaterial(W,Ce);let ze=V.index,je=1;if(W.wireframe===!0){if(ze=ie.getWireframeAttribute(V),ze===void 0)return;je=2}const He=V.drawRange,Ve=V.attributes.position;let ft=He.start*je,Gt=(He.start+He.count)*je;Me!==null&&(ft=Math.max(ft,Me.start*je),Gt=Math.min(Gt,(Me.start+Me.count)*je)),ze!==null?(ft=Math.max(ft,0),Gt=Math.min(Gt,ze.count)):Ve!=null&&(ft=Math.max(ft,0),Gt=Math.min(Gt,Ve.count));const xt=Gt-ft;if(xt<0||xt===1/0)return;P.setup(H,W,Ie,V,ze);let rn,ot=Be;if(ze!==null&&(rn=re.get(ze),ot=Re,ot.setIndex(rn)),H.isMesh)W.wireframe===!0?(q.setLineWidth(W.wireframeLinewidth*Fe()),ot.setMode(L.LINES)):ot.setMode(L.TRIANGLES);else if(H.isLine){let qe=W.linewidth;qe===void 0&&(qe=1),q.setLineWidth(qe*Fe()),H.isLineSegments?ot.setMode(L.LINES):H.isLineLoop?ot.setMode(L.LINE_LOOP):ot.setMode(L.LINE_STRIP)}else H.isPoints?ot.setMode(L.POINTS):H.isSprite&&ot.setMode(L.TRIANGLES);if(H.isBatchedMesh)ot.renderMultiDraw(H._multiDrawStarts,H._multiDrawCounts,H._multiDrawCount);else if(H.isInstancedMesh)ot.renderInstances(ft,xt,H.count);else if(V.isInstancedBufferGeometry){const qe=V._maxInstanceCount!==void 0?V._maxInstanceCount:1/0,ar=Math.min(V.instanceCount,qe);ot.renderInstances(ft,xt,ar)}else ot.render(ft,xt)};function Ze(A,F,V){A.transparent===!0&&A.side===wt&&A.forceSinglePass===!1?(A.side=zt,A.needsUpdate=!0,ns(A,F,V),A.side=Rn,A.needsUpdate=!0,ns(A,F,V),A.side=wt):ns(A,F,V)}this.compile=function(A,F,V=null){V===null&&(V=A),m=Pe.get(V),m.init(),_.push(m),V.traverseVisible(function(H){H.isLight&&H.layers.test(F.layers)&&(m.pushLight(H),H.castShadow&&m.pushShadow(H))}),A!==V&&A.traverseVisible(function(H){H.isLight&&H.layers.test(F.layers)&&(m.pushLight(H),H.castShadow&&m.pushShadow(H))}),m.setupLights(x._useLegacyLights);const W=new Set;return A.traverse(function(H){const Me=H.material;if(Me)if(Array.isArray(Me))for(let Ce=0;Ce<Me.length;Ce++){const Ie=Me[Ce];Ze(Ie,V,H),W.add(Ie)}else Ze(Me,V,H),W.add(Me)}),_.pop(),m=null,W},this.compileAsync=function(A,F,V=null){const W=this.compile(A,F,V);return new Promise(H=>{function Me(){if(W.forEach(function(Ce){ge.get(Ce).currentProgram.isReady()&&W.delete(Ce)}),W.size===0){H(A);return}setTimeout(Me,10)}Y.get("KHR_parallel_shader_compile")!==null?Me():setTimeout(Me,10)})};let $e=null;function lt(A){$e&&$e(A)}function dt(){pt.stop()}function Je(){pt.start()}const pt=new qc;pt.setAnimationLoop(lt),typeof self<"u"&&pt.setContext(self),this.setAnimationLoop=function(A){$e=A,be.setAnimationLoop(A),A===null?pt.stop():pt.start()},be.addEventListener("sessionstart",dt),be.addEventListener("sessionend",Je),this.render=function(A,F){if(F!==void 0&&F.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(y===!0)return;A.matrixWorldAutoUpdate===!0&&A.updateMatrixWorld(),F.parent===null&&F.matrixWorldAutoUpdate===!0&&F.updateMatrixWorld(),be.enabled===!0&&be.isPresenting===!0&&(be.cameraAutoUpdate===!0&&be.updateCamera(F),F=be.getCamera()),A.isScene===!0&&A.onBeforeRender(x,A,F,C),m=Pe.get(A,_.length),m.init(),_.push(m),ve.multiplyMatrices(F.projectionMatrix,F.matrixWorldInverse),X.setFromProjectionMatrix(ve),pe=this.localClippingEnabled,ee=ke.init(this.clippingPlanes,pe),v=ye.get(A,d.length),v.init(),d.push(v),tn(A,F,0,x.sortObjects),v.finish(),x.sortObjects===!0&&v.sort(K,J),this.info.render.frame++,ee===!0&&ke.beginShadows();const V=m.state.shadowsArray;if(se.render(V,A,F),ee===!0&&ke.endShadows(),this.info.autoReset===!0&&this.info.reset(),Ke.render(v,A),m.setupLights(x._useLegacyLights),F.isArrayCamera){const W=F.cameras;for(let H=0,Me=W.length;H<Me;H++){const Ce=W[H];Pa(v,A,Ce,Ce.viewport)}}else Pa(v,A,F);C!==null&&(w.updateMultisampleRenderTarget(C),w.updateRenderTargetMipmap(C)),A.isScene===!0&&A.onAfterRender(x,A,F),P.resetDefaultState(),N=-1,b=null,_.pop(),_.length>0?m=_[_.length-1]:m=null,d.pop(),d.length>0?v=d[d.length-1]:v=null};function tn(A,F,V,W){if(A.visible===!1)return;if(A.layers.test(F.layers)){if(A.isGroup)V=A.renderOrder;else if(A.isLOD)A.autoUpdate===!0&&A.update(F);else if(A.isLight)m.pushLight(A),A.castShadow&&m.pushShadow(A);else if(A.isSprite){if(!A.frustumCulled||X.intersectsSprite(A)){W&&Oe.setFromMatrixPosition(A.matrixWorld).applyMatrix4(ve);const Ce=te.update(A),Ie=A.material;Ie.visible&&v.push(A,Ce,Ie,V,Oe.z,null)}}else if((A.isMesh||A.isLine||A.isPoints)&&(!A.frustumCulled||X.intersectsObject(A))){const Ce=te.update(A),Ie=A.material;if(W&&(A.boundingSphere!==void 0?(A.boundingSphere===null&&A.computeBoundingSphere(),Oe.copy(A.boundingSphere.center)):(Ce.boundingSphere===null&&Ce.computeBoundingSphere(),Oe.copy(Ce.boundingSphere.center)),Oe.applyMatrix4(A.matrixWorld).applyMatrix4(ve)),Array.isArray(Ie)){const ze=Ce.groups;for(let je=0,He=ze.length;je<He;je++){const Ve=ze[je],ft=Ie[Ve.materialIndex];ft&&ft.visible&&v.push(A,Ce,ft,V,Oe.z,Ve)}}else Ie.visible&&v.push(A,Ce,Ie,V,Oe.z,null)}}const Me=A.children;for(let Ce=0,Ie=Me.length;Ce<Ie;Ce++)tn(Me[Ce],F,V,W)}function Pa(A,F,V,W){const H=A.opaque,Me=A.transmissive,Ce=A.transparent;m.setupLightsView(V),ee===!0&&ke.setGlobalState(x.clippingPlanes,V),Me.length>0&&pl(H,Me,F,V),W&&q.viewport(T.copy(W)),H.length>0&&ts(H,F,V),Me.length>0&&ts(Me,F,V),Ce.length>0&&ts(Ce,F,V),q.buffers.depth.setTest(!0),q.buffers.depth.setMask(!0),q.buffers.color.setMask(!0),q.setPolygonOffset(!1)}function pl(A,F,V,W){if((V.isScene===!0?V.overrideMaterial:null)!==null)return;const Me=oe.isWebGL2;Se===null&&(Se=new Wn(1,1,{generateMipmaps:!0,type:Y.has("EXT_color_buffer_half_float")?ji:An,minFilter:Xi,samples:Me?4:0})),x.getDrawingBufferSize(De),Me?Se.setSize(De.x,De.y):Se.setSize(ca(De.x),ca(De.y));const Ce=x.getRenderTarget();x.setRenderTarget(Se),x.getClearColor(Z),D=x.getClearAlpha(),D<1&&x.setClearColor(16777215,.5),x.clear();const Ie=x.toneMapping;x.toneMapping=Tn,ts(A,V,W),w.updateMultisampleRenderTarget(Se),w.updateRenderTargetMipmap(Se);let ze=!1;for(let je=0,He=F.length;je<He;je++){const Ve=F[je],ft=Ve.object,Gt=Ve.geometry,xt=Ve.material,rn=Ve.group;if(xt.side===wt&&ft.layers.test(W.layers)){const ot=xt.side;xt.side=zt,xt.needsUpdate=!0,La(ft,V,W,Gt,xt,rn),xt.side=ot,xt.needsUpdate=!0,ze=!0}}ze===!0&&(w.updateMultisampleRenderTarget(Se),w.updateRenderTargetMipmap(Se)),x.setRenderTarget(Ce),x.setClearColor(Z,D),x.toneMapping=Ie}function ts(A,F,V){const W=F.isScene===!0?F.overrideMaterial:null;for(let H=0,Me=A.length;H<Me;H++){const Ce=A[H],Ie=Ce.object,ze=Ce.geometry,je=W===null?Ce.material:W,He=Ce.group;Ie.layers.test(V.layers)&&La(Ie,F,V,ze,je,He)}}function La(A,F,V,W,H,Me){A.onBeforeRender(x,F,V,W,H,Me),A.modelViewMatrix.multiplyMatrices(V.matrixWorldInverse,A.matrixWorld),A.normalMatrix.getNormalMatrix(A.modelViewMatrix),H.onBeforeRender(x,F,V,W,A,Me),H.transparent===!0&&H.side===wt&&H.forceSinglePass===!1?(H.side=zt,H.needsUpdate=!0,x.renderBufferDirect(V,F,W,H,A,Me),H.side=Rn,H.needsUpdate=!0,x.renderBufferDirect(V,F,W,H,A,Me),H.side=wt):x.renderBufferDirect(V,F,W,H,A,Me),A.onAfterRender(x,F,V,W,H,Me)}function ns(A,F,V){F.isScene!==!0&&(F=we);const W=ge.get(A),H=m.state.lights,Me=m.state.shadowsArray,Ce=H.state.version,Ie=Ee.getParameters(A,H.state,Me,F,V),ze=Ee.getProgramCacheKey(Ie);let je=W.programs;W.environment=A.isMeshStandardMaterial?F.environment:null,W.fog=F.fog,W.envMap=(A.isMeshStandardMaterial?U:S).get(A.envMap||W.environment),je===void 0&&(A.addEventListener("dispose",me),je=new Map,W.programs=je);let He=je.get(ze);if(He!==void 0){if(W.currentProgram===He&&W.lightsStateVersion===Ce)return Oa(A,Ie),He}else Ie.uniforms=Ee.getUniforms(A),A.onBuild(V,Ie,x),A.onBeforeCompile(Ie,x),He=Ee.acquireProgram(Ie,ze),je.set(ze,He),W.uniforms=Ie.uniforms;const Ve=W.uniforms;return(!A.isShaderMaterial&&!A.isRawShaderMaterial||A.clipping===!0)&&(Ve.clippingPlanes=ke.uniform),Oa(A,Ie),W.needsLights=vl(A),W.lightsStateVersion=Ce,W.needsLights&&(Ve.ambientLightColor.value=H.state.ambient,Ve.lightProbe.value=H.state.probe,Ve.directionalLights.value=H.state.directional,Ve.directionalLightShadows.value=H.state.directionalShadow,Ve.spotLights.value=H.state.spot,Ve.spotLightShadows.value=H.state.spotShadow,Ve.rectAreaLights.value=H.state.rectArea,Ve.ltc_1.value=H.state.rectAreaLTC1,Ve.ltc_2.value=H.state.rectAreaLTC2,Ve.pointLights.value=H.state.point,Ve.pointLightShadows.value=H.state.pointShadow,Ve.hemisphereLights.value=H.state.hemi,Ve.directionalShadowMap.value=H.state.directionalShadowMap,Ve.directionalShadowMatrix.value=H.state.directionalShadowMatrix,Ve.spotShadowMap.value=H.state.spotShadowMap,Ve.spotLightMatrix.value=H.state.spotLightMatrix,Ve.spotLightMap.value=H.state.spotLightMap,Ve.pointShadowMap.value=H.state.pointShadowMap,Ve.pointShadowMatrix.value=H.state.pointShadowMatrix),W.currentProgram=He,W.uniformsList=null,He}function Da(A){if(A.uniformsList===null){const F=A.currentProgram.getUniforms();A.uniformsList=Fs.seqWithValue(F.seq,A.uniforms)}return A.uniformsList}function Oa(A,F){const V=ge.get(A);V.outputColorSpace=F.outputColorSpace,V.batching=F.batching,V.instancing=F.instancing,V.instancingColor=F.instancingColor,V.skinning=F.skinning,V.morphTargets=F.morphTargets,V.morphNormals=F.morphNormals,V.morphColors=F.morphColors,V.morphTargetsCount=F.morphTargetsCount,V.numClippingPlanes=F.numClippingPlanes,V.numIntersection=F.numClipIntersection,V.vertexAlphas=F.vertexAlphas,V.vertexTangents=F.vertexTangents,V.toneMapping=F.toneMapping}function ml(A,F,V,W,H){F.isScene!==!0&&(F=we),w.resetTextureUnits();const Me=F.fog,Ce=W.isMeshStandardMaterial?F.environment:null,Ie=C===null?x.outputColorSpace:C.isXRRenderTarget===!0?C.texture.colorSpace:vn,ze=(W.isMeshStandardMaterial?U:S).get(W.envMap||Ce),je=W.vertexColors===!0&&!!V.attributes.color&&V.attributes.color.itemSize===4,He=!!V.attributes.tangent&&(!!W.normalMap||W.anisotropy>0),Ve=!!V.morphAttributes.position,ft=!!V.morphAttributes.normal,Gt=!!V.morphAttributes.color;let xt=Tn;W.toneMapped&&(C===null||C.isXRRenderTarget===!0)&&(xt=x.toneMapping);const rn=V.morphAttributes.position||V.morphAttributes.normal||V.morphAttributes.color,ot=rn!==void 0?rn.length:0,qe=ge.get(W),ar=m.state.lights;if(ee===!0&&(pe===!0||A!==b)){const jt=A===b&&W.id===N;ke.setState(W,A,jt)}let ht=!1;W.version===qe.__version?(qe.needsLights&&qe.lightsStateVersion!==ar.state.version||qe.outputColorSpace!==Ie||H.isBatchedMesh&&qe.batching===!1||!H.isBatchedMesh&&qe.batching===!0||H.isInstancedMesh&&qe.instancing===!1||!H.isInstancedMesh&&qe.instancing===!0||H.isSkinnedMesh&&qe.skinning===!1||!H.isSkinnedMesh&&qe.skinning===!0||H.isInstancedMesh&&qe.instancingColor===!0&&H.instanceColor===null||H.isInstancedMesh&&qe.instancingColor===!1&&H.instanceColor!==null||qe.envMap!==ze||W.fog===!0&&qe.fog!==Me||qe.numClippingPlanes!==void 0&&(qe.numClippingPlanes!==ke.numPlanes||qe.numIntersection!==ke.numIntersection)||qe.vertexAlphas!==je||qe.vertexTangents!==He||qe.morphTargets!==Ve||qe.morphNormals!==ft||qe.morphColors!==Gt||qe.toneMapping!==xt||oe.isWebGL2===!0&&qe.morphTargetsCount!==ot)&&(ht=!0):(ht=!0,qe.__version=W.version);let Dn=qe.currentProgram;ht===!0&&(Dn=ns(W,F,H));let Na=!1,Di=!1,or=!1;const Tt=Dn.getUniforms(),On=qe.uniforms;if(q.useProgram(Dn.program)&&(Na=!0,Di=!0,or=!0),W.id!==N&&(N=W.id,Di=!0),Na||b!==A){Tt.setValue(L,"projectionMatrix",A.projectionMatrix),Tt.setValue(L,"viewMatrix",A.matrixWorldInverse);const jt=Tt.map.cameraPosition;jt!==void 0&&jt.setValue(L,Oe.setFromMatrixPosition(A.matrixWorld)),oe.logarithmicDepthBuffer&&Tt.setValue(L,"logDepthBufFC",2/(Math.log(A.far+1)/Math.LN2)),(W.isMeshPhongMaterial||W.isMeshToonMaterial||W.isMeshLambertMaterial||W.isMeshBasicMaterial||W.isMeshStandardMaterial||W.isShaderMaterial)&&Tt.setValue(L,"isOrthographic",A.isOrthographicCamera===!0),b!==A&&(b=A,Di=!0,or=!0)}if(H.isSkinnedMesh){Tt.setOptional(L,H,"bindMatrix"),Tt.setOptional(L,H,"bindMatrixInverse");const jt=H.skeleton;jt&&(oe.floatVertexTextures?(jt.boneTexture===null&&jt.computeBoneTexture(),Tt.setValue(L,"boneTexture",jt.boneTexture,w)):console.warn("THREE.WebGLRenderer: SkinnedMesh can only be used with WebGL 2. With WebGL 1 OES_texture_float and vertex textures support is required."))}H.isBatchedMesh&&(Tt.setOptional(L,H,"batchingTexture"),Tt.setValue(L,"batchingTexture",H._matricesTexture,w));const cr=V.morphAttributes;if((cr.position!==void 0||cr.normal!==void 0||cr.color!==void 0&&oe.isWebGL2===!0)&&Xe.update(H,V,Dn),(Di||qe.receiveShadow!==H.receiveShadow)&&(qe.receiveShadow=H.receiveShadow,Tt.setValue(L,"receiveShadow",H.receiveShadow)),W.isMeshGouraudMaterial&&W.envMap!==null&&(On.envMap.value=ze,On.flipEnvMap.value=ze.isCubeTexture&&ze.isRenderTargetTexture===!1?-1:1),Di&&(Tt.setValue(L,"toneMappingExposure",x.toneMappingExposure),qe.needsLights&&gl(On,or),Me&&W.fog===!0&&fe.refreshFogUniforms(On,Me),fe.refreshMaterialUniforms(On,W,$,z,Se),Fs.upload(L,Da(qe),On,w)),W.isShaderMaterial&&W.uniformsNeedUpdate===!0&&(Fs.upload(L,Da(qe),On,w),W.uniformsNeedUpdate=!1),W.isSpriteMaterial&&Tt.setValue(L,"center",H.center),Tt.setValue(L,"modelViewMatrix",H.modelViewMatrix),Tt.setValue(L,"normalMatrix",H.normalMatrix),Tt.setValue(L,"modelMatrix",H.matrixWorld),W.isShaderMaterial||W.isRawShaderMaterial){const jt=W.uniformsGroups;for(let lr=0,_l=jt.length;lr<_l;lr++)if(oe.isWebGL2){const Ia=jt[lr];le.update(Ia,Dn),le.bind(Ia,Dn)}else console.warn("THREE.WebGLRenderer: Uniform Buffer Objects can only be used with WebGL 2.")}return Dn}function gl(A,F){A.ambientLightColor.needsUpdate=F,A.lightProbe.needsUpdate=F,A.directionalLights.needsUpdate=F,A.directionalLightShadows.needsUpdate=F,A.pointLights.needsUpdate=F,A.pointLightShadows.needsUpdate=F,A.spotLights.needsUpdate=F,A.spotLightShadows.needsUpdate=F,A.rectAreaLights.needsUpdate=F,A.hemisphereLights.needsUpdate=F}function vl(A){return A.isMeshLambertMaterial||A.isMeshToonMaterial||A.isMeshPhongMaterial||A.isMeshStandardMaterial||A.isShadowMaterial||A.isShaderMaterial&&A.lights===!0}this.getActiveCubeFace=function(){return R},this.getActiveMipmapLevel=function(){return E},this.getRenderTarget=function(){return C},this.setRenderTargetTextures=function(A,F,V){ge.get(A.texture).__webglTexture=F,ge.get(A.depthTexture).__webglTexture=V;const W=ge.get(A);W.__hasExternalTextures=!0,W.__hasExternalTextures&&(W.__autoAllocateDepthBuffer=V===void 0,W.__autoAllocateDepthBuffer||Y.has("WEBGL_multisampled_render_to_texture")===!0&&(console.warn("THREE.WebGLRenderer: Render-to-texture extension was disabled because an external texture was provided"),W.__useRenderToTexture=!1))},this.setRenderTargetFramebuffer=function(A,F){const V=ge.get(A);V.__webglFramebuffer=F,V.__useDefaultFramebuffer=F===void 0},this.setRenderTarget=function(A,F=0,V=0){C=A,R=F,E=V;let W=!0,H=null,Me=!1,Ce=!1;if(A){const ze=ge.get(A);ze.__useDefaultFramebuffer!==void 0?(q.bindFramebuffer(L.FRAMEBUFFER,null),W=!1):ze.__webglFramebuffer===void 0?w.setupRenderTarget(A):ze.__hasExternalTextures&&w.rebindTextures(A,ge.get(A.texture).__webglTexture,ge.get(A.depthTexture).__webglTexture);const je=A.texture;(je.isData3DTexture||je.isDataArrayTexture||je.isCompressedArrayTexture)&&(Ce=!0);const He=ge.get(A).__webglFramebuffer;A.isWebGLCubeRenderTarget?(Array.isArray(He[F])?H=He[F][V]:H=He[F],Me=!0):oe.isWebGL2&&A.samples>0&&w.useMultisampledRTT(A)===!1?H=ge.get(A).__webglMultisampledFramebuffer:Array.isArray(He)?H=He[V]:H=He,T.copy(A.viewport),I.copy(A.scissor),G=A.scissorTest}else T.copy(Q).multiplyScalar($).floor(),I.copy(ne).multiplyScalar($).floor(),G=ce;if(q.bindFramebuffer(L.FRAMEBUFFER,H)&&oe.drawBuffers&&W&&q.drawBuffers(A,H),q.viewport(T),q.scissor(I),q.setScissorTest(G),Me){const ze=ge.get(A.texture);L.framebufferTexture2D(L.FRAMEBUFFER,L.COLOR_ATTACHMENT0,L.TEXTURE_CUBE_MAP_POSITIVE_X+F,ze.__webglTexture,V)}else if(Ce){const ze=ge.get(A.texture),je=F||0;L.framebufferTextureLayer(L.FRAMEBUFFER,L.COLOR_ATTACHMENT0,ze.__webglTexture,V||0,je)}N=-1},this.readRenderTargetPixels=function(A,F,V,W,H,Me,Ce){if(!(A&&A.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let Ie=ge.get(A).__webglFramebuffer;if(A.isWebGLCubeRenderTarget&&Ce!==void 0&&(Ie=Ie[Ce]),Ie){q.bindFramebuffer(L.FRAMEBUFFER,Ie);try{const ze=A.texture,je=ze.format,He=ze.type;if(je!==en&&_e.convert(je)!==L.getParameter(L.IMPLEMENTATION_COLOR_READ_FORMAT)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}const Ve=He===ji&&(Y.has("EXT_color_buffer_half_float")||oe.isWebGL2&&Y.has("EXT_color_buffer_float"));if(He!==An&&_e.convert(He)!==L.getParameter(L.IMPLEMENTATION_COLOR_READ_TYPE)&&!(He===En&&(oe.isWebGL2||Y.has("OES_texture_float")||Y.has("WEBGL_color_buffer_float")))&&!Ve){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}F>=0&&F<=A.width-W&&V>=0&&V<=A.height-H&&L.readPixels(F,V,W,H,_e.convert(je),_e.convert(He),Me)}finally{const ze=C!==null?ge.get(C).__webglFramebuffer:null;q.bindFramebuffer(L.FRAMEBUFFER,ze)}}},this.copyFramebufferToTexture=function(A,F,V=0){const W=Math.pow(2,-V),H=Math.floor(F.image.width*W),Me=Math.floor(F.image.height*W);w.setTexture2D(F,0),L.copyTexSubImage2D(L.TEXTURE_2D,V,0,0,A.x,A.y,H,Me),q.unbindTexture()},this.copyTextureToTexture=function(A,F,V,W=0){const H=F.image.width,Me=F.image.height,Ce=_e.convert(V.format),Ie=_e.convert(V.type);w.setTexture2D(V,0),L.pixelStorei(L.UNPACK_FLIP_Y_WEBGL,V.flipY),L.pixelStorei(L.UNPACK_PREMULTIPLY_ALPHA_WEBGL,V.premultiplyAlpha),L.pixelStorei(L.UNPACK_ALIGNMENT,V.unpackAlignment),F.isDataTexture?L.texSubImage2D(L.TEXTURE_2D,W,A.x,A.y,H,Me,Ce,Ie,F.image.data):F.isCompressedTexture?L.compressedTexSubImage2D(L.TEXTURE_2D,W,A.x,A.y,F.mipmaps[0].width,F.mipmaps[0].height,Ce,F.mipmaps[0].data):L.texSubImage2D(L.TEXTURE_2D,W,A.x,A.y,Ce,Ie,F.image),W===0&&V.generateMipmaps&&L.generateMipmap(L.TEXTURE_2D),q.unbindTexture()},this.copyTextureToTexture3D=function(A,F,V,W,H=0){if(x.isWebGL1Renderer){console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: can only be used with WebGL2.");return}const Me=A.max.x-A.min.x+1,Ce=A.max.y-A.min.y+1,Ie=A.max.z-A.min.z+1,ze=_e.convert(W.format),je=_e.convert(W.type);let He;if(W.isData3DTexture)w.setTexture3D(W,0),He=L.TEXTURE_3D;else if(W.isDataArrayTexture||W.isCompressedArrayTexture)w.setTexture2DArray(W,0),He=L.TEXTURE_2D_ARRAY;else{console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: only supports THREE.DataTexture3D and THREE.DataTexture2DArray.");return}L.pixelStorei(L.UNPACK_FLIP_Y_WEBGL,W.flipY),L.pixelStorei(L.UNPACK_PREMULTIPLY_ALPHA_WEBGL,W.premultiplyAlpha),L.pixelStorei(L.UNPACK_ALIGNMENT,W.unpackAlignment);const Ve=L.getParameter(L.UNPACK_ROW_LENGTH),ft=L.getParameter(L.UNPACK_IMAGE_HEIGHT),Gt=L.getParameter(L.UNPACK_SKIP_PIXELS),xt=L.getParameter(L.UNPACK_SKIP_ROWS),rn=L.getParameter(L.UNPACK_SKIP_IMAGES),ot=V.isCompressedTexture?V.mipmaps[H]:V.image;L.pixelStorei(L.UNPACK_ROW_LENGTH,ot.width),L.pixelStorei(L.UNPACK_IMAGE_HEIGHT,ot.height),L.pixelStorei(L.UNPACK_SKIP_PIXELS,A.min.x),L.pixelStorei(L.UNPACK_SKIP_ROWS,A.min.y),L.pixelStorei(L.UNPACK_SKIP_IMAGES,A.min.z),V.isDataTexture||V.isData3DTexture?L.texSubImage3D(He,H,F.x,F.y,F.z,Me,Ce,Ie,ze,je,ot.data):V.isCompressedArrayTexture?(console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: untested support for compressed srcTexture."),L.compressedTexSubImage3D(He,H,F.x,F.y,F.z,Me,Ce,Ie,ze,ot.data)):L.texSubImage3D(He,H,F.x,F.y,F.z,Me,Ce,Ie,ze,je,ot),L.pixelStorei(L.UNPACK_ROW_LENGTH,Ve),L.pixelStorei(L.UNPACK_IMAGE_HEIGHT,ft),L.pixelStorei(L.UNPACK_SKIP_PIXELS,Gt),L.pixelStorei(L.UNPACK_SKIP_ROWS,xt),L.pixelStorei(L.UNPACK_SKIP_IMAGES,rn),H===0&&W.generateMipmaps&&L.generateMipmap(He),q.unbindTexture()},this.initTexture=function(A){A.isCubeTexture?w.setTextureCube(A,0):A.isData3DTexture?w.setTexture3D(A,0):A.isDataArrayTexture||A.isCompressedArrayTexture?w.setTexture2DArray(A,0):w.setTexture2D(A,0),q.unbindTexture()},this.resetState=function(){R=0,E=0,C=null,q.reset(),P.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return mn}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;const t=this.getContext();t.drawingBufferColorSpace=e===va?"display-p3":"srgb",t.unpackColorSpace=Qe.workingColorSpace===Ks?"display-p3":"srgb"}get outputEncoding(){return console.warn("THREE.WebGLRenderer: Property .outputEncoding has been removed. Use .outputColorSpace instead."),this.outputColorSpace===Et?Vn:Nc}set outputEncoding(e){console.warn("THREE.WebGLRenderer: Property .outputEncoding has been removed. Use .outputColorSpace instead."),this.outputColorSpace=e===Vn?Et:vn}get useLegacyLights(){return console.warn("THREE.WebGLRenderer: The property .useLegacyLights has been deprecated. Migrate your lighting according to the following guide: https://discourse.threejs.org/t/updates-to-lighting-in-three-js-r155/53733."),this._useLegacyLights}set useLegacyLights(e){console.warn("THREE.WebGLRenderer: The property .useLegacyLights has been deprecated. Migrate your lighting according to the following guide: https://discourse.threejs.org/t/updates-to-lighting-in-three-js-r155/53733."),this._useLegacyLights=e}}class Am extends el{}Am.prototype.isWebGL1Renderer=!0;class Cm extends gt{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,t){return super.copy(e,t),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){const t=super.toJSON(e);return this.fog!==null&&(t.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(t.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(t.object.backgroundIntensity=this.backgroundIntensity),t}}class Rm{constructor(e,t){this.isInterleavedBuffer=!0,this.array=e,this.stride=t,this.count=e!==void 0?e.length/t:0,this.usage=ra,this._updateRange={offset:0,count:-1},this.updateRanges=[],this.version=0,this.uuid=gn()}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}get updateRange(){return console.warn("THREE.InterleavedBuffer: updateRange() is deprecated and will be removed in r169. Use addUpdateRange() instead."),this._updateRange}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.array=new e.array.constructor(e.array),this.count=e.count,this.stride=e.stride,this.usage=e.usage,this}copyAt(e,t,n){e*=this.stride,n*=t.stride;for(let i=0,r=this.stride;i<r;i++)this.array[e+i]=t.array[n+i];return this}set(e,t=0){return this.array.set(e,t),this}clone(e){e.arrayBuffers===void 0&&(e.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=gn()),e.arrayBuffers[this.array.buffer._uuid]===void 0&&(e.arrayBuffers[this.array.buffer._uuid]=this.array.slice(0).buffer);const t=new this.array.constructor(e.arrayBuffers[this.array.buffer._uuid]),n=new this.constructor(t,this.stride);return n.setUsage(this.usage),n}onUpload(e){return this.onUploadCallback=e,this}toJSON(e){return e.arrayBuffers===void 0&&(e.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=gn()),e.arrayBuffers[this.array.buffer._uuid]===void 0&&(e.arrayBuffers[this.array.buffer._uuid]=Array.from(new Uint32Array(this.array.buffer))),{uuid:this.uuid,buffer:this.array.buffer._uuid,type:this.array.constructor.name,stride:this.stride}}}const Lt=new M;class Ws{constructor(e,t,n,i=!1){this.isInterleavedBufferAttribute=!0,this.name="",this.data=e,this.itemSize=t,this.offset=n,this.normalized=i}get count(){return this.data.count}get array(){return this.data.array}set needsUpdate(e){this.data.needsUpdate=e}applyMatrix4(e){for(let t=0,n=this.data.count;t<n;t++)Lt.fromBufferAttribute(this,t),Lt.applyMatrix4(e),this.setXYZ(t,Lt.x,Lt.y,Lt.z);return this}applyNormalMatrix(e){for(let t=0,n=this.count;t<n;t++)Lt.fromBufferAttribute(this,t),Lt.applyNormalMatrix(e),this.setXYZ(t,Lt.x,Lt.y,Lt.z);return this}transformDirection(e){for(let t=0,n=this.count;t<n;t++)Lt.fromBufferAttribute(this,t),Lt.transformDirection(e),this.setXYZ(t,Lt.x,Lt.y,Lt.z);return this}setX(e,t){return this.normalized&&(t=et(t,this.array)),this.data.array[e*this.data.stride+this.offset]=t,this}setY(e,t){return this.normalized&&(t=et(t,this.array)),this.data.array[e*this.data.stride+this.offset+1]=t,this}setZ(e,t){return this.normalized&&(t=et(t,this.array)),this.data.array[e*this.data.stride+this.offset+2]=t,this}setW(e,t){return this.normalized&&(t=et(t,this.array)),this.data.array[e*this.data.stride+this.offset+3]=t,this}getX(e){let t=this.data.array[e*this.data.stride+this.offset];return this.normalized&&(t=fn(t,this.array)),t}getY(e){let t=this.data.array[e*this.data.stride+this.offset+1];return this.normalized&&(t=fn(t,this.array)),t}getZ(e){let t=this.data.array[e*this.data.stride+this.offset+2];return this.normalized&&(t=fn(t,this.array)),t}getW(e){let t=this.data.array[e*this.data.stride+this.offset+3];return this.normalized&&(t=fn(t,this.array)),t}setXY(e,t,n){return e=e*this.data.stride+this.offset,this.normalized&&(t=et(t,this.array),n=et(n,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=n,this}setXYZ(e,t,n,i){return e=e*this.data.stride+this.offset,this.normalized&&(t=et(t,this.array),n=et(n,this.array),i=et(i,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=n,this.data.array[e+2]=i,this}setXYZW(e,t,n,i,r){return e=e*this.data.stride+this.offset,this.normalized&&(t=et(t,this.array),n=et(n,this.array),i=et(i,this.array),r=et(r,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=n,this.data.array[e+2]=i,this.data.array[e+3]=r,this}clone(e){if(e===void 0){console.log("THREE.InterleavedBufferAttribute.clone(): Cloning an interleaved buffer attribute will de-interleave buffer data.");const t=[];for(let n=0;n<this.count;n++){const i=n*this.data.stride+this.offset;for(let r=0;r<this.itemSize;r++)t.push(this.data.array[i+r])}return new Rt(new this.array.constructor(t),this.itemSize,this.normalized)}else return e.interleavedBuffers===void 0&&(e.interleavedBuffers={}),e.interleavedBuffers[this.data.uuid]===void 0&&(e.interleavedBuffers[this.data.uuid]=this.data.clone(e)),new Ws(e.interleavedBuffers[this.data.uuid],this.itemSize,this.offset,this.normalized)}toJSON(e){if(e===void 0){console.log("THREE.InterleavedBufferAttribute.toJSON(): Serializing an interleaved buffer attribute will de-interleave buffer data.");const t=[];for(let n=0;n<this.count;n++){const i=n*this.data.stride+this.offset;for(let r=0;r<this.itemSize;r++)t.push(this.data.array[i+r])}return{itemSize:this.itemSize,type:this.array.constructor.name,array:t,normalized:this.normalized}}else return e.interleavedBuffers===void 0&&(e.interleavedBuffers={}),e.interleavedBuffers[this.data.uuid]===void 0&&(e.interleavedBuffers[this.data.uuid]=this.data.toJSON(e)),{isInterleavedBufferAttribute:!0,itemSize:this.itemSize,data:this.data.uuid,offset:this.offset,normalized:this.normalized}}}class pn extends Yn{constructor(e){super(),this.isSpriteMaterial=!0,this.type="SpriteMaterial",this.color=new Ue(16777215),this.map=null,this.alphaMap=null,this.rotation=0,this.sizeAttenuation=!0,this.transparent=!0,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.alphaMap=e.alphaMap,this.rotation=e.rotation,this.sizeAttenuation=e.sizeAttenuation,this.fog=e.fog,this}}let ui;const Fi=new M,di=new M,fi=new M,pi=new j,Bi=new j,tl=new at,ws=new M,zi=new M,Ts=new M,nc=new j,Gr=new j,ic=new j;class qi extends gt{constructor(e=new pn){if(super(),this.isSprite=!0,this.type="Sprite",ui===void 0){ui=new tt;const t=new Float32Array([-.5,-.5,0,0,0,.5,-.5,0,1,0,.5,.5,0,1,1,-.5,.5,0,0,1]),n=new Rm(t,5);ui.setIndex([0,1,2,0,2,3]),ui.setAttribute("position",new Ws(n,3,0,!1)),ui.setAttribute("uv",new Ws(n,2,3,!1))}this.geometry=ui,this.material=e,this.center=new j(.5,.5)}raycast(e,t){e.camera===null&&console.error('THREE.Sprite: "Raycaster.camera" needs to be set in order to raycast against sprites.'),di.setFromMatrixScale(this.matrixWorld),tl.copy(e.camera.matrixWorld),this.modelViewMatrix.multiplyMatrices(e.camera.matrixWorldInverse,this.matrixWorld),fi.setFromMatrixPosition(this.modelViewMatrix),e.camera.isPerspectiveCamera&&this.material.sizeAttenuation===!1&&di.multiplyScalar(-fi.z);const n=this.material.rotation;let i,r;n!==0&&(r=Math.cos(n),i=Math.sin(n));const a=this.center;As(ws.set(-.5,-.5,0),fi,a,di,i,r),As(zi.set(.5,-.5,0),fi,a,di,i,r),As(Ts.set(.5,.5,0),fi,a,di,i,r),nc.set(0,0),Gr.set(1,0),ic.set(1,1);let o=e.ray.intersectTriangle(ws,zi,Ts,!1,Fi);if(o===null&&(As(zi.set(-.5,.5,0),fi,a,di,i,r),Gr.set(0,1),o=e.ray.intersectTriangle(ws,Ts,zi,!1,Fi),o===null))return;const c=e.ray.origin.distanceTo(Fi);c<e.near||c>e.far||t.push({distance:c,point:Fi.clone(),uv:Wt.getInterpolation(Fi,ws,zi,Ts,nc,Gr,ic,new j),face:null,object:this})}copy(e,t){return super.copy(e,t),e.center!==void 0&&this.center.copy(e.center),this.material=e.material,this}}function As(s,e,t,n,i,r){pi.subVectors(s,t).addScalar(.5).multiply(n),i!==void 0?(Bi.x=r*pi.x-i*pi.y,Bi.y=i*pi.x+r*pi.y):Bi.copy(pi),s.copy(e),s.x+=Bi.x,s.y+=Bi.y,s.applyMatrix4(tl)}class Xt extends Yn{constructor(e){super(),this.isLineBasicMaterial=!0,this.type="LineBasicMaterial",this.color=new Ue(16777215),this.map=null,this.linewidth=1,this.linecap="round",this.linejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.linewidth=e.linewidth,this.linecap=e.linecap,this.linejoin=e.linejoin,this.fog=e.fog,this}}const sc=new M,rc=new M,ac=new at,kr=new Qs,Cs=new Js;class bi extends gt{constructor(e=new tt,t=new Xt){super(),this.isLine=!0,this.type="Line",this.geometry=e,this.material=t,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}computeLineDistances(){const e=this.geometry;if(e.index===null){const t=e.attributes.position,n=[0];for(let i=1,r=t.count;i<r;i++)sc.fromBufferAttribute(t,i-1),rc.fromBufferAttribute(t,i),n[i]=n[i-1],n[i]+=sc.distanceTo(rc);e.setAttribute("lineDistance",new nt(n,1))}else console.warn("THREE.Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}raycast(e,t){const n=this.geometry,i=this.matrixWorld,r=e.params.Line.threshold,a=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),Cs.copy(n.boundingSphere),Cs.applyMatrix4(i),Cs.radius+=r,e.ray.intersectsSphere(Cs)===!1)return;ac.copy(i).invert(),kr.copy(e.ray).applyMatrix4(ac);const o=r/((this.scale.x+this.scale.y+this.scale.z)/3),c=o*o,l=new M,h=new M,u=new M,f=new M,p=this.isLineSegments?2:1,g=n.index,m=n.attributes.position;if(g!==null){const d=Math.max(0,a.start),_=Math.min(g.count,a.start+a.count);for(let x=d,y=_-1;x<y;x+=p){const R=g.getX(x),E=g.getX(x+1);if(l.fromBufferAttribute(m,R),h.fromBufferAttribute(m,E),kr.distanceSqToSegment(l,h,f,u)>c)continue;f.applyMatrix4(this.matrixWorld);const N=e.ray.origin.distanceTo(f);N<e.near||N>e.far||t.push({distance:N,point:u.clone().applyMatrix4(this.matrixWorld),index:x,face:null,faceIndex:null,object:this})}}else{const d=Math.max(0,a.start),_=Math.min(m.count,a.start+a.count);for(let x=d,y=_-1;x<y;x+=p){if(l.fromBufferAttribute(m,x),h.fromBufferAttribute(m,x+1),kr.distanceSqToSegment(l,h,f,u)>c)continue;f.applyMatrix4(this.matrixWorld);const E=e.ray.origin.distanceTo(f);E<e.near||E>e.far||t.push({distance:E,point:u.clone().applyMatrix4(this.matrixWorld),index:x,face:null,faceIndex:null,object:this})}}}updateMorphTargets(){const t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){const i=t[n[0]];if(i!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,a=i.length;r<a;r++){const o=i[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=r}}}}}const oc=new M,cc=new M;class Si extends bi{constructor(e,t){super(e,t),this.isLineSegments=!0,this.type="LineSegments"}computeLineDistances(){const e=this.geometry;if(e.index===null){const t=e.attributes.position,n=[];for(let i=0,r=t.count;i<r;i+=2)oc.fromBufferAttribute(t,i),cc.fromBufferAttribute(t,i+1),n[i]=i===0?0:n[i-1],n[i+1]=n[i]+oc.distanceTo(cc);e.setAttribute("lineDistance",new nt(n,1))}else console.warn("THREE.LineSegments.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}}class nr extends Pt{constructor(e,t,n,i,r,a,o,c,l){super(e,t,n,i,r,a,o,c,l),this.isCanvasTexture=!0,this.needsUpdate=!0}}class sn{constructor(){this.type="Curve",this.arcLengthDivisions=200}getPoint(){return console.warn("THREE.Curve: .getPoint() not implemented."),null}getPointAt(e,t){const n=this.getUtoTmapping(e);return this.getPoint(n,t)}getPoints(e=5){const t=[];for(let n=0;n<=e;n++)t.push(this.getPoint(n/e));return t}getSpacedPoints(e=5){const t=[];for(let n=0;n<=e;n++)t.push(this.getPointAt(n/e));return t}getLength(){const e=this.getLengths();return e[e.length-1]}getLengths(e=this.arcLengthDivisions){if(this.cacheArcLengths&&this.cacheArcLengths.length===e+1&&!this.needsUpdate)return this.cacheArcLengths;this.needsUpdate=!1;const t=[];let n,i=this.getPoint(0),r=0;t.push(0);for(let a=1;a<=e;a++)n=this.getPoint(a/e),r+=n.distanceTo(i),t.push(r),i=n;return this.cacheArcLengths=t,t}updateArcLengths(){this.needsUpdate=!0,this.getLengths()}getUtoTmapping(e,t){const n=this.getLengths();let i=0;const r=n.length;let a;t?a=t:a=e*n[r-1];let o=0,c=r-1,l;for(;o<=c;)if(i=Math.floor(o+(c-o)/2),l=n[i]-a,l<0)o=i+1;else if(l>0)c=i-1;else{c=i;break}if(i=c,n[i]===a)return i/(r-1);const h=n[i],f=n[i+1]-h,p=(a-h)/f;return(i+p)/(r-1)}getTangent(e,t){let i=e-1e-4,r=e+1e-4;i<0&&(i=0),r>1&&(r=1);const a=this.getPoint(i),o=this.getPoint(r),c=t||(a.isVector2?new j:new M);return c.copy(o).sub(a).normalize(),c}getTangentAt(e,t){const n=this.getUtoTmapping(e);return this.getTangent(n,t)}computeFrenetFrames(e,t){const n=new M,i=[],r=[],a=[],o=new M,c=new at;for(let p=0;p<=e;p++){const g=p/e;i[p]=this.getTangentAt(g,new M)}r[0]=new M,a[0]=new M;let l=Number.MAX_VALUE;const h=Math.abs(i[0].x),u=Math.abs(i[0].y),f=Math.abs(i[0].z);h<=l&&(l=h,n.set(1,0,0)),u<=l&&(l=u,n.set(0,1,0)),f<=l&&n.set(0,0,1),o.crossVectors(i[0],n).normalize(),r[0].crossVectors(i[0],o),a[0].crossVectors(i[0],r[0]);for(let p=1;p<=e;p++){if(r[p]=r[p-1].clone(),a[p]=a[p-1].clone(),o.crossVectors(i[p-1],i[p]),o.length()>Number.EPSILON){o.normalize();const g=Math.acos(Mt(i[p-1].dot(i[p]),-1,1));r[p].applyMatrix4(c.makeRotationAxis(o,g))}a[p].crossVectors(i[p],r[p])}if(t===!0){let p=Math.acos(Mt(r[0].dot(r[e]),-1,1));p/=e,i[0].dot(o.crossVectors(r[0],r[e]))>0&&(p=-p);for(let g=1;g<=e;g++)r[g].applyMatrix4(c.makeRotationAxis(i[g],p*g)),a[g].crossVectors(i[g],r[g])}return{tangents:i,normals:r,binormals:a}}clone(){return new this.constructor().copy(this)}copy(e){return this.arcLengthDivisions=e.arcLengthDivisions,this}toJSON(){const e={metadata:{version:4.6,type:"Curve",generator:"Curve.toJSON"}};return e.arcLengthDivisions=this.arcLengthDivisions,e.type=this.type,e}fromJSON(e){return this.arcLengthDivisions=e.arcLengthDivisions,this}}class Ma extends sn{constructor(e=0,t=0,n=1,i=1,r=0,a=Math.PI*2,o=!1,c=0){super(),this.isEllipseCurve=!0,this.type="EllipseCurve",this.aX=e,this.aY=t,this.xRadius=n,this.yRadius=i,this.aStartAngle=r,this.aEndAngle=a,this.aClockwise=o,this.aRotation=c}getPoint(e,t){const n=t||new j,i=Math.PI*2;let r=this.aEndAngle-this.aStartAngle;const a=Math.abs(r)<Number.EPSILON;for(;r<0;)r+=i;for(;r>i;)r-=i;r<Number.EPSILON&&(a?r=0:r=i),this.aClockwise===!0&&!a&&(r===i?r=-i:r=r-i);const o=this.aStartAngle+e*r;let c=this.aX+this.xRadius*Math.cos(o),l=this.aY+this.yRadius*Math.sin(o);if(this.aRotation!==0){const h=Math.cos(this.aRotation),u=Math.sin(this.aRotation),f=c-this.aX,p=l-this.aY;c=f*h-p*u+this.aX,l=f*u+p*h+this.aY}return n.set(c,l)}copy(e){return super.copy(e),this.aX=e.aX,this.aY=e.aY,this.xRadius=e.xRadius,this.yRadius=e.yRadius,this.aStartAngle=e.aStartAngle,this.aEndAngle=e.aEndAngle,this.aClockwise=e.aClockwise,this.aRotation=e.aRotation,this}toJSON(){const e=super.toJSON();return e.aX=this.aX,e.aY=this.aY,e.xRadius=this.xRadius,e.yRadius=this.yRadius,e.aStartAngle=this.aStartAngle,e.aEndAngle=this.aEndAngle,e.aClockwise=this.aClockwise,e.aRotation=this.aRotation,e}fromJSON(e){return super.fromJSON(e),this.aX=e.aX,this.aY=e.aY,this.xRadius=e.xRadius,this.yRadius=e.yRadius,this.aStartAngle=e.aStartAngle,this.aEndAngle=e.aEndAngle,this.aClockwise=e.aClockwise,this.aRotation=e.aRotation,this}}class Pm extends Ma{constructor(e,t,n,i,r,a){super(e,t,n,n,i,r,a),this.isArcCurve=!0,this.type="ArcCurve"}}function ba(){let s=0,e=0,t=0,n=0;function i(r,a,o,c){s=r,e=o,t=-3*r+3*a-2*o-c,n=2*r-2*a+o+c}return{initCatmullRom:function(r,a,o,c,l){i(a,o,l*(o-r),l*(c-a))},initNonuniformCatmullRom:function(r,a,o,c,l,h,u){let f=(a-r)/l-(o-r)/(l+h)+(o-a)/h,p=(o-a)/h-(c-a)/(h+u)+(c-o)/u;f*=h,p*=h,i(a,o,f,p)},calc:function(r){const a=r*r,o=a*r;return s+e*r+t*a+n*o}}}const Rs=new M,Hr=new ba,Vr=new ba,Wr=new ba;class Lm extends sn{constructor(e=[],t=!1,n="centripetal",i=.5){super(),this.isCatmullRomCurve3=!0,this.type="CatmullRomCurve3",this.points=e,this.closed=t,this.curveType=n,this.tension=i}getPoint(e,t=new M){const n=t,i=this.points,r=i.length,a=(r-(this.closed?0:1))*e;let o=Math.floor(a),c=a-o;this.closed?o+=o>0?0:(Math.floor(Math.abs(o)/r)+1)*r:c===0&&o===r-1&&(o=r-2,c=1);let l,h;this.closed||o>0?l=i[(o-1)%r]:(Rs.subVectors(i[0],i[1]).add(i[0]),l=Rs);const u=i[o%r],f=i[(o+1)%r];if(this.closed||o+2<r?h=i[(o+2)%r]:(Rs.subVectors(i[r-1],i[r-2]).add(i[r-1]),h=Rs),this.curveType==="centripetal"||this.curveType==="chordal"){const p=this.curveType==="chordal"?.5:.25;let g=Math.pow(l.distanceToSquared(u),p),v=Math.pow(u.distanceToSquared(f),p),m=Math.pow(f.distanceToSquared(h),p);v<1e-4&&(v=1),g<1e-4&&(g=v),m<1e-4&&(m=v),Hr.initNonuniformCatmullRom(l.x,u.x,f.x,h.x,g,v,m),Vr.initNonuniformCatmullRom(l.y,u.y,f.y,h.y,g,v,m),Wr.initNonuniformCatmullRom(l.z,u.z,f.z,h.z,g,v,m)}else this.curveType==="catmullrom"&&(Hr.initCatmullRom(l.x,u.x,f.x,h.x,this.tension),Vr.initCatmullRom(l.y,u.y,f.y,h.y,this.tension),Wr.initCatmullRom(l.z,u.z,f.z,h.z,this.tension));return n.set(Hr.calc(c),Vr.calc(c),Wr.calc(c)),n}copy(e){super.copy(e),this.points=[];for(let t=0,n=e.points.length;t<n;t++){const i=e.points[t];this.points.push(i.clone())}return this.closed=e.closed,this.curveType=e.curveType,this.tension=e.tension,this}toJSON(){const e=super.toJSON();e.points=[];for(let t=0,n=this.points.length;t<n;t++){const i=this.points[t];e.points.push(i.toArray())}return e.closed=this.closed,e.curveType=this.curveType,e.tension=this.tension,e}fromJSON(e){super.fromJSON(e),this.points=[];for(let t=0,n=e.points.length;t<n;t++){const i=e.points[t];this.points.push(new M().fromArray(i))}return this.closed=e.closed,this.curveType=e.curveType,this.tension=e.tension,this}}function lc(s,e,t,n,i){const r=(n-e)*.5,a=(i-t)*.5,o=s*s,c=s*o;return(2*t-2*n+r+a)*c+(-3*t+3*n-2*r-a)*o+r*s+t}function Dm(s,e){const t=1-s;return t*t*e}function Om(s,e){return 2*(1-s)*s*e}function Nm(s,e){return s*s*e}function Hi(s,e,t,n){return Dm(s,e)+Om(s,t)+Nm(s,n)}function Im(s,e){const t=1-s;return t*t*t*e}function Um(s,e){const t=1-s;return 3*t*t*s*e}function Fm(s,e){return 3*(1-s)*s*s*e}function Bm(s,e){return s*s*s*e}function Vi(s,e,t,n,i){return Im(s,e)+Um(s,t)+Fm(s,n)+Bm(s,i)}class Sa extends sn{constructor(e=new j,t=new j,n=new j,i=new j){super(),this.isCubicBezierCurve=!0,this.type="CubicBezierCurve",this.v0=e,this.v1=t,this.v2=n,this.v3=i}getPoint(e,t=new j){const n=t,i=this.v0,r=this.v1,a=this.v2,o=this.v3;return n.set(Vi(e,i.x,r.x,a.x,o.x),Vi(e,i.y,r.y,a.y,o.y)),n}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this.v3.copy(e.v3),this}toJSON(){const e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e.v3=this.v3.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this.v3.fromArray(e.v3),this}}class _i extends sn{constructor(e=new M,t=new M,n=new M,i=new M){super(),this.isCubicBezierCurve3=!0,this.type="CubicBezierCurve3",this.v0=e,this.v1=t,this.v2=n,this.v3=i}getPoint(e,t=new M){const n=t,i=this.v0,r=this.v1,a=this.v2,o=this.v3;return n.set(Vi(e,i.x,r.x,a.x,o.x),Vi(e,i.y,r.y,a.y,o.y),Vi(e,i.z,r.z,a.z,o.z)),n}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this.v3.copy(e.v3),this}toJSON(){const e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e.v3=this.v3.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this.v3.fromArray(e.v3),this}}class nl extends sn{constructor(e=new j,t=new j){super(),this.isLineCurve=!0,this.type="LineCurve",this.v1=e,this.v2=t}getPoint(e,t=new j){const n=t;return e===1?n.copy(this.v2):(n.copy(this.v2).sub(this.v1),n.multiplyScalar(e).add(this.v1)),n}getPointAt(e,t){return this.getPoint(e,t)}getTangent(e,t=new j){return t.subVectors(this.v2,this.v1).normalize()}getTangentAt(e,t){return this.getTangent(e,t)}copy(e){return super.copy(e),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){const e=super.toJSON();return e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}}class il extends sn{constructor(e=new M,t=new M){super(),this.isLineCurve3=!0,this.type="LineCurve3",this.v1=e,this.v2=t}getPoint(e,t=new M){const n=t;return e===1?n.copy(this.v2):(n.copy(this.v2).sub(this.v1),n.multiplyScalar(e).add(this.v1)),n}getPointAt(e,t){return this.getPoint(e,t)}getTangent(e,t=new M){return t.subVectors(this.v2,this.v1).normalize()}getTangentAt(e,t){return this.getTangent(e,t)}copy(e){return super.copy(e),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){const e=super.toJSON();return e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}}class sl extends sn{constructor(e=new j,t=new j,n=new j){super(),this.isQuadraticBezierCurve=!0,this.type="QuadraticBezierCurve",this.v0=e,this.v1=t,this.v2=n}getPoint(e,t=new j){const n=t,i=this.v0,r=this.v1,a=this.v2;return n.set(Hi(e,i.x,r.x,a.x),Hi(e,i.y,r.y,a.y)),n}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){const e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}}class zm extends sn{constructor(e=new M,t=new M,n=new M){super(),this.isQuadraticBezierCurve3=!0,this.type="QuadraticBezierCurve3",this.v0=e,this.v1=t,this.v2=n}getPoint(e,t=new M){const n=t,i=this.v0,r=this.v1,a=this.v2;return n.set(Hi(e,i.x,r.x,a.x),Hi(e,i.y,r.y,a.y),Hi(e,i.z,r.z,a.z)),n}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){const e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}}class rl extends sn{constructor(e=[]){super(),this.isSplineCurve=!0,this.type="SplineCurve",this.points=e}getPoint(e,t=new j){const n=t,i=this.points,r=(i.length-1)*e,a=Math.floor(r),o=r-a,c=i[a===0?a:a-1],l=i[a],h=i[a>i.length-2?i.length-1:a+1],u=i[a>i.length-3?i.length-1:a+2];return n.set(lc(o,c.x,l.x,h.x,u.x),lc(o,c.y,l.y,h.y,u.y)),n}copy(e){super.copy(e),this.points=[];for(let t=0,n=e.points.length;t<n;t++){const i=e.points[t];this.points.push(i.clone())}return this}toJSON(){const e=super.toJSON();e.points=[];for(let t=0,n=this.points.length;t<n;t++){const i=this.points[t];e.points.push(i.toArray())}return e}fromJSON(e){super.fromJSON(e),this.points=[];for(let t=0,n=e.points.length;t<n;t++){const i=e.points[t];this.points.push(new j().fromArray(i))}return this}}var ha=Object.freeze({__proto__:null,ArcCurve:Pm,CatmullRomCurve3:Lm,CubicBezierCurve:Sa,CubicBezierCurve3:_i,EllipseCurve:Ma,LineCurve:nl,LineCurve3:il,QuadraticBezierCurve:sl,QuadraticBezierCurve3:zm,SplineCurve:rl});class Gm extends sn{constructor(){super(),this.type="CurvePath",this.curves=[],this.autoClose=!1}add(e){this.curves.push(e)}closePath(){const e=this.curves[0].getPoint(0),t=this.curves[this.curves.length-1].getPoint(1);if(!e.equals(t)){const n=e.isVector2===!0?"LineCurve":"LineCurve3";this.curves.push(new ha[n](t,e))}return this}getPoint(e,t){const n=e*this.getLength(),i=this.getCurveLengths();let r=0;for(;r<i.length;){if(i[r]>=n){const a=i[r]-n,o=this.curves[r],c=o.getLength(),l=c===0?0:1-a/c;return o.getPointAt(l,t)}r++}return null}getLength(){const e=this.getCurveLengths();return e[e.length-1]}updateArcLengths(){this.needsUpdate=!0,this.cacheLengths=null,this.getCurveLengths()}getCurveLengths(){if(this.cacheLengths&&this.cacheLengths.length===this.curves.length)return this.cacheLengths;const e=[];let t=0;for(let n=0,i=this.curves.length;n<i;n++)t+=this.curves[n].getLength(),e.push(t);return this.cacheLengths=e,e}getSpacedPoints(e=40){const t=[];for(let n=0;n<=e;n++)t.push(this.getPoint(n/e));return this.autoClose&&t.push(t[0]),t}getPoints(e=12){const t=[];let n;for(let i=0,r=this.curves;i<r.length;i++){const a=r[i],o=a.isEllipseCurve?e*2:a.isLineCurve||a.isLineCurve3?1:a.isSplineCurve?e*a.points.length:e,c=a.getPoints(o);for(let l=0;l<c.length;l++){const h=c[l];n&&n.equals(h)||(t.push(h),n=h)}}return this.autoClose&&t.length>1&&!t[t.length-1].equals(t[0])&&t.push(t[0]),t}copy(e){super.copy(e),this.curves=[];for(let t=0,n=e.curves.length;t<n;t++){const i=e.curves[t];this.curves.push(i.clone())}return this.autoClose=e.autoClose,this}toJSON(){const e=super.toJSON();e.autoClose=this.autoClose,e.curves=[];for(let t=0,n=this.curves.length;t<n;t++){const i=this.curves[t];e.curves.push(i.toJSON())}return e}fromJSON(e){super.fromJSON(e),this.autoClose=e.autoClose,this.curves=[];for(let t=0,n=e.curves.length;t<n;t++){const i=e.curves[t];this.curves.push(new ha[i.type]().fromJSON(i))}return this}}class Xs extends Gm{constructor(e){super(),this.type="Path",this.currentPoint=new j,e&&this.setFromPoints(e)}setFromPoints(e){this.moveTo(e[0].x,e[0].y);for(let t=1,n=e.length;t<n;t++)this.lineTo(e[t].x,e[t].y);return this}moveTo(e,t){return this.currentPoint.set(e,t),this}lineTo(e,t){const n=new nl(this.currentPoint.clone(),new j(e,t));return this.curves.push(n),this.currentPoint.set(e,t),this}quadraticCurveTo(e,t,n,i){const r=new sl(this.currentPoint.clone(),new j(e,t),new j(n,i));return this.curves.push(r),this.currentPoint.set(n,i),this}bezierCurveTo(e,t,n,i,r,a){const o=new Sa(this.currentPoint.clone(),new j(e,t),new j(n,i),new j(r,a));return this.curves.push(o),this.currentPoint.set(r,a),this}splineThru(e){const t=[this.currentPoint.clone()].concat(e),n=new rl(t);return this.curves.push(n),this.currentPoint.copy(e[e.length-1]),this}arc(e,t,n,i,r,a){const o=this.currentPoint.x,c=this.currentPoint.y;return this.absarc(e+o,t+c,n,i,r,a),this}absarc(e,t,n,i,r,a){return this.absellipse(e,t,n,n,i,r,a),this}ellipse(e,t,n,i,r,a,o,c){const l=this.currentPoint.x,h=this.currentPoint.y;return this.absellipse(e+l,t+h,n,i,r,a,o,c),this}absellipse(e,t,n,i,r,a,o,c){const l=new Ma(e,t,n,i,r,a,o,c);if(this.curves.length>0){const u=l.getPoint(0);u.equals(this.currentPoint)||this.lineTo(u.x,u.y)}this.curves.push(l);const h=l.getPoint(1);return this.currentPoint.copy(h),this}copy(e){return super.copy(e),this.currentPoint.copy(e.currentPoint),this}toJSON(){const e=super.toJSON();return e.currentPoint=this.currentPoint.toArray(),e}fromJSON(e){return super.fromJSON(e),this.currentPoint.fromArray(e.currentPoint),this}}class Ea extends tt{constructor(e=[new j(0,-.5),new j(.5,0),new j(0,.5)],t=12,n=0,i=Math.PI*2){super(),this.type="LatheGeometry",this.parameters={points:e,segments:t,phiStart:n,phiLength:i},t=Math.floor(t),i=Mt(i,0,Math.PI*2);const r=[],a=[],o=[],c=[],l=[],h=1/t,u=new M,f=new j,p=new M,g=new M,v=new M;let m=0,d=0;for(let _=0;_<=e.length-1;_++)switch(_){case 0:m=e[_+1].x-e[_].x,d=e[_+1].y-e[_].y,p.x=d*1,p.y=-m,p.z=d*0,v.copy(p),p.normalize(),c.push(p.x,p.y,p.z);break;case e.length-1:c.push(v.x,v.y,v.z);break;default:m=e[_+1].x-e[_].x,d=e[_+1].y-e[_].y,p.x=d*1,p.y=-m,p.z=d*0,g.copy(p),p.x+=v.x,p.y+=v.y,p.z+=v.z,p.normalize(),c.push(p.x,p.y,p.z),v.copy(g)}for(let _=0;_<=t;_++){const x=n+_*h*i,y=Math.sin(x),R=Math.cos(x);for(let E=0;E<=e.length-1;E++){u.x=e[E].x*y,u.y=e[E].y,u.z=e[E].x*R,a.push(u.x,u.y,u.z),f.x=_/t,f.y=E/(e.length-1),o.push(f.x,f.y);const C=c[3*E+0]*y,N=c[3*E+1],b=c[3*E+0]*R;l.push(C,N,b)}}for(let _=0;_<t;_++)for(let x=0;x<e.length-1;x++){const y=x+_*e.length,R=y,E=y+e.length,C=y+e.length+1,N=y+1;r.push(R,E,N),r.push(C,N,E)}this.setIndex(r),this.setAttribute("position",new nt(a,3)),this.setAttribute("uv",new nt(o,2)),this.setAttribute("normal",new nt(l,3))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Ea(e.points,e.segments,e.phiStart,e.phiLength)}}class Pi extends tt{constructor(e=1,t=1,n=1,i=32,r=1,a=!1,o=0,c=Math.PI*2){super(),this.type="CylinderGeometry",this.parameters={radiusTop:e,radiusBottom:t,height:n,radialSegments:i,heightSegments:r,openEnded:a,thetaStart:o,thetaLength:c};const l=this;i=Math.floor(i),r=Math.floor(r);const h=[],u=[],f=[],p=[];let g=0;const v=[],m=n/2;let d=0;_(),a===!1&&(e>0&&x(!0),t>0&&x(!1)),this.setIndex(h),this.setAttribute("position",new nt(u,3)),this.setAttribute("normal",new nt(f,3)),this.setAttribute("uv",new nt(p,2));function _(){const y=new M,R=new M;let E=0;const C=(t-e)/n;for(let N=0;N<=r;N++){const b=[],T=N/r,I=T*(t-e)+e;for(let G=0;G<=i;G++){const Z=G/i,D=Z*c+o,B=Math.sin(D),z=Math.cos(D);R.x=I*B,R.y=-T*n+m,R.z=I*z,u.push(R.x,R.y,R.z),y.set(B,C,z).normalize(),f.push(y.x,y.y,y.z),p.push(Z,1-T),b.push(g++)}v.push(b)}for(let N=0;N<i;N++)for(let b=0;b<r;b++){const T=v[b][N],I=v[b+1][N],G=v[b+1][N+1],Z=v[b][N+1];h.push(T,I,Z),h.push(I,G,Z),E+=6}l.addGroup(d,E,0),d+=E}function x(y){const R=g,E=new j,C=new M;let N=0;const b=y===!0?e:t,T=y===!0?1:-1;for(let G=1;G<=i;G++)u.push(0,m*T,0),f.push(0,T,0),p.push(.5,.5),g++;const I=g;for(let G=0;G<=i;G++){const D=G/i*c+o,B=Math.cos(D),z=Math.sin(D);C.x=b*z,C.y=m*T,C.z=b*B,u.push(C.x,C.y,C.z),f.push(0,T,0),E.x=B*.5+.5,E.y=z*.5*T+.5,p.push(E.x,E.y),g++}for(let G=0;G<i;G++){const Z=R+G,D=I+G;y===!0?h.push(D,D+1,Z):h.push(D+1,D,Z),N+=3}l.addGroup(d,N,y===!0?1:2),d+=N}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Pi(e.radiusTop,e.radiusBottom,e.height,e.radialSegments,e.heightSegments,e.openEnded,e.thetaStart,e.thetaLength)}}class wa extends Pi{constructor(e=1,t=1,n=32,i=1,r=!1,a=0,o=Math.PI*2){super(0,e,t,n,i,r,a,o),this.type="ConeGeometry",this.parameters={radius:e,height:t,radialSegments:n,heightSegments:i,openEnded:r,thetaStart:a,thetaLength:o}}static fromJSON(e){return new wa(e.radius,e.height,e.radialSegments,e.heightSegments,e.openEnded,e.thetaStart,e.thetaLength)}}const Ps=new M,Ls=new M,Xr=new M,Ds=new Wt;class Wi extends tt{constructor(e=null,t=1){if(super(),this.type="EdgesGeometry",this.parameters={geometry:e,thresholdAngle:t},e!==null){const i=Math.pow(10,4),r=Math.cos(Gi*t),a=e.getIndex(),o=e.getAttribute("position"),c=a?a.count:o.count,l=[0,0,0],h=["a","b","c"],u=new Array(3),f={},p=[];for(let g=0;g<c;g+=3){a?(l[0]=a.getX(g),l[1]=a.getX(g+1),l[2]=a.getX(g+2)):(l[0]=g,l[1]=g+1,l[2]=g+2);const{a:v,b:m,c:d}=Ds;if(v.fromBufferAttribute(o,l[0]),m.fromBufferAttribute(o,l[1]),d.fromBufferAttribute(o,l[2]),Ds.getNormal(Xr),u[0]=`${Math.round(v.x*i)},${Math.round(v.y*i)},${Math.round(v.z*i)}`,u[1]=`${Math.round(m.x*i)},${Math.round(m.y*i)},${Math.round(m.z*i)}`,u[2]=`${Math.round(d.x*i)},${Math.round(d.y*i)},${Math.round(d.z*i)}`,!(u[0]===u[1]||u[1]===u[2]||u[2]===u[0]))for(let _=0;_<3;_++){const x=(_+1)%3,y=u[_],R=u[x],E=Ds[h[_]],C=Ds[h[x]],N=`${y}_${R}`,b=`${R}_${y}`;b in f&&f[b]?(Xr.dot(f[b].normal)<=r&&(p.push(E.x,E.y,E.z),p.push(C.x,C.y,C.z)),f[b]=null):N in f||(f[N]={index0:l[_],index1:l[x],normal:Xr.clone()})}}for(const g in f)if(f[g]){const{index0:v,index1:m}=f[g];Ps.fromBufferAttribute(o,v),Ls.fromBufferAttribute(o,m),p.push(Ps.x,Ps.y,Ps.z),p.push(Ls.x,Ls.y,Ls.z)}this.setAttribute("position",new nt(p,3))}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}}class Ji extends Xs{constructor(e){super(e),this.uuid=gn(),this.type="Shape",this.holes=[]}getPointsHoles(e){const t=[];for(let n=0,i=this.holes.length;n<i;n++)t[n]=this.holes[n].getPoints(e);return t}extractPoints(e){return{shape:this.getPoints(e),holes:this.getPointsHoles(e)}}copy(e){super.copy(e),this.holes=[];for(let t=0,n=e.holes.length;t<n;t++){const i=e.holes[t];this.holes.push(i.clone())}return this}toJSON(){const e=super.toJSON();e.uuid=this.uuid,e.holes=[];for(let t=0,n=this.holes.length;t<n;t++){const i=this.holes[t];e.holes.push(i.toJSON())}return e}fromJSON(e){super.fromJSON(e),this.uuid=e.uuid,this.holes=[];for(let t=0,n=e.holes.length;t<n;t++){const i=e.holes[t];this.holes.push(new Xs().fromJSON(i))}return this}}const km={triangulate:function(s,e,t=2){const n=e&&e.length,i=n?e[0]*t:s.length;let r=al(s,0,i,t,!0);const a=[];if(!r||r.next===r.prev)return a;let o,c,l,h,u,f,p;if(n&&(r=jm(s,e,r,t)),s.length>80*t){o=l=s[0],c=h=s[1];for(let g=t;g<i;g+=t)u=s[g],f=s[g+1],u<o&&(o=u),f<c&&(c=f),u>l&&(l=u),f>h&&(h=f);p=Math.max(l-o,h-c),p=p!==0?32767/p:0}return Yi(r,a,t,o,c,p,0),a}};function al(s,e,t,n,i){let r,a;if(i===ig(s,e,t,n)>0)for(r=e;r<t;r+=n)a=hc(r,s[r],s[r+1],a);else for(r=t-n;r>=e;r-=n)a=hc(r,s[r],s[r+1],a);return a&&ir(a,a.next)&&($i(a),a=a.next),a}function jn(s,e){if(!s)return s;e||(e=s);let t=s,n;do if(n=!1,!t.steiner&&(ir(t,t.next)||ct(t.prev,t,t.next)===0)){if($i(t),t=e=t.prev,t===t.next)break;n=!0}else t=t.next;while(n||t!==e);return e}function Yi(s,e,t,n,i,r,a){if(!s)return;!a&&r&&Km(s,n,i,r);let o=s,c,l;for(;s.prev!==s.next;){if(c=s.prev,l=s.next,r?Vm(s,n,i,r):Hm(s)){e.push(c.i/t|0),e.push(s.i/t|0),e.push(l.i/t|0),$i(s),s=l.next,o=l.next;continue}if(s=l,s===o){a?a===1?(s=Wm(jn(s),e,t),Yi(s,e,t,n,i,r,2)):a===2&&Xm(s,e,t,n,i,r):Yi(jn(s),e,t,n,i,r,1);break}}}function Hm(s){const e=s.prev,t=s,n=s.next;if(ct(e,t,n)>=0)return!1;const i=e.x,r=t.x,a=n.x,o=e.y,c=t.y,l=n.y,h=i<r?i<a?i:a:r<a?r:a,u=o<c?o<l?o:l:c<l?c:l,f=i>r?i>a?i:a:r>a?r:a,p=o>c?o>l?o:l:c>l?c:l;let g=n.next;for(;g!==e;){if(g.x>=h&&g.x<=f&&g.y>=u&&g.y<=p&&xi(i,o,r,c,a,l,g.x,g.y)&&ct(g.prev,g,g.next)>=0)return!1;g=g.next}return!0}function Vm(s,e,t,n){const i=s.prev,r=s,a=s.next;if(ct(i,r,a)>=0)return!1;const o=i.x,c=r.x,l=a.x,h=i.y,u=r.y,f=a.y,p=o<c?o<l?o:l:c<l?c:l,g=h<u?h<f?h:f:u<f?u:f,v=o>c?o>l?o:l:c>l?c:l,m=h>u?h>f?h:f:u>f?u:f,d=ua(p,g,e,t,n),_=ua(v,m,e,t,n);let x=s.prevZ,y=s.nextZ;for(;x&&x.z>=d&&y&&y.z<=_;){if(x.x>=p&&x.x<=v&&x.y>=g&&x.y<=m&&x!==i&&x!==a&&xi(o,h,c,u,l,f,x.x,x.y)&&ct(x.prev,x,x.next)>=0||(x=x.prevZ,y.x>=p&&y.x<=v&&y.y>=g&&y.y<=m&&y!==i&&y!==a&&xi(o,h,c,u,l,f,y.x,y.y)&&ct(y.prev,y,y.next)>=0))return!1;y=y.nextZ}for(;x&&x.z>=d;){if(x.x>=p&&x.x<=v&&x.y>=g&&x.y<=m&&x!==i&&x!==a&&xi(o,h,c,u,l,f,x.x,x.y)&&ct(x.prev,x,x.next)>=0)return!1;x=x.prevZ}for(;y&&y.z<=_;){if(y.x>=p&&y.x<=v&&y.y>=g&&y.y<=m&&y!==i&&y!==a&&xi(o,h,c,u,l,f,y.x,y.y)&&ct(y.prev,y,y.next)>=0)return!1;y=y.nextZ}return!0}function Wm(s,e,t){let n=s;do{const i=n.prev,r=n.next.next;!ir(i,r)&&ol(i,n,n.next,r)&&Zi(i,r)&&Zi(r,i)&&(e.push(i.i/t|0),e.push(n.i/t|0),e.push(r.i/t|0),$i(n),$i(n.next),n=s=r),n=n.next}while(n!==s);return jn(n)}function Xm(s,e,t,n,i,r){let a=s;do{let o=a.next.next;for(;o!==a.prev;){if(a.i!==o.i&&eg(a,o)){let c=cl(a,o);a=jn(a,a.next),c=jn(c,c.next),Yi(a,e,t,n,i,r,0),Yi(c,e,t,n,i,r,0);return}o=o.next}a=a.next}while(a!==s)}function jm(s,e,t,n){const i=[];let r,a,o,c,l;for(r=0,a=e.length;r<a;r++)o=e[r]*n,c=r<a-1?e[r+1]*n:s.length,l=al(s,o,c,n,!1),l===l.next&&(l.steiner=!0),i.push(Qm(l));for(i.sort(qm),r=0;r<i.length;r++)t=Ym(i[r],t);return t}function qm(s,e){return s.x-e.x}function Ym(s,e){const t=Zm(s,e);if(!t)return e;const n=cl(t,s);return jn(n,n.next),jn(t,t.next)}function Zm(s,e){let t=e,n=-1/0,i;const r=s.x,a=s.y;do{if(a<=t.y&&a>=t.next.y&&t.next.y!==t.y){const f=t.x+(a-t.y)*(t.next.x-t.x)/(t.next.y-t.y);if(f<=r&&f>n&&(n=f,i=t.x<t.next.x?t:t.next,f===r))return i}t=t.next}while(t!==e);if(!i)return null;const o=i,c=i.x,l=i.y;let h=1/0,u;t=i;do r>=t.x&&t.x>=c&&r!==t.x&&xi(a<l?r:n,a,c,l,a<l?n:r,a,t.x,t.y)&&(u=Math.abs(a-t.y)/(r-t.x),Zi(t,s)&&(u<h||u===h&&(t.x>i.x||t.x===i.x&&$m(i,t)))&&(i=t,h=u)),t=t.next;while(t!==o);return i}function $m(s,e){return ct(s.prev,s,e.prev)<0&&ct(e.next,s,s.next)<0}function Km(s,e,t,n){let i=s;do i.z===0&&(i.z=ua(i.x,i.y,e,t,n)),i.prevZ=i.prev,i.nextZ=i.next,i=i.next;while(i!==s);i.prevZ.nextZ=null,i.prevZ=null,Jm(i)}function Jm(s){let e,t,n,i,r,a,o,c,l=1;do{for(t=s,s=null,r=null,a=0;t;){for(a++,n=t,o=0,e=0;e<l&&(o++,n=n.nextZ,!!n);e++);for(c=l;o>0||c>0&&n;)o!==0&&(c===0||!n||t.z<=n.z)?(i=t,t=t.nextZ,o--):(i=n,n=n.nextZ,c--),r?r.nextZ=i:s=i,i.prevZ=r,r=i;t=n}r.nextZ=null,l*=2}while(a>1);return s}function ua(s,e,t,n,i){return s=(s-t)*i|0,e=(e-n)*i|0,s=(s|s<<8)&16711935,s=(s|s<<4)&252645135,s=(s|s<<2)&858993459,s=(s|s<<1)&1431655765,e=(e|e<<8)&16711935,e=(e|e<<4)&252645135,e=(e|e<<2)&858993459,e=(e|e<<1)&1431655765,s|e<<1}function Qm(s){let e=s,t=s;do(e.x<t.x||e.x===t.x&&e.y<t.y)&&(t=e),e=e.next;while(e!==s);return t}function xi(s,e,t,n,i,r,a,o){return(i-a)*(e-o)>=(s-a)*(r-o)&&(s-a)*(n-o)>=(t-a)*(e-o)&&(t-a)*(r-o)>=(i-a)*(n-o)}function eg(s,e){return s.next.i!==e.i&&s.prev.i!==e.i&&!tg(s,e)&&(Zi(s,e)&&Zi(e,s)&&ng(s,e)&&(ct(s.prev,s,e.prev)||ct(s,e.prev,e))||ir(s,e)&&ct(s.prev,s,s.next)>0&&ct(e.prev,e,e.next)>0)}function ct(s,e,t){return(e.y-s.y)*(t.x-e.x)-(e.x-s.x)*(t.y-e.y)}function ir(s,e){return s.x===e.x&&s.y===e.y}function ol(s,e,t,n){const i=Ns(ct(s,e,t)),r=Ns(ct(s,e,n)),a=Ns(ct(t,n,s)),o=Ns(ct(t,n,e));return!!(i!==r&&a!==o||i===0&&Os(s,t,e)||r===0&&Os(s,n,e)||a===0&&Os(t,s,n)||o===0&&Os(t,e,n))}function Os(s,e,t){return e.x<=Math.max(s.x,t.x)&&e.x>=Math.min(s.x,t.x)&&e.y<=Math.max(s.y,t.y)&&e.y>=Math.min(s.y,t.y)}function Ns(s){return s>0?1:s<0?-1:0}function tg(s,e){let t=s;do{if(t.i!==s.i&&t.next.i!==s.i&&t.i!==e.i&&t.next.i!==e.i&&ol(t,t.next,s,e))return!0;t=t.next}while(t!==s);return!1}function Zi(s,e){return ct(s.prev,s,s.next)<0?ct(s,e,s.next)>=0&&ct(s,s.prev,e)>=0:ct(s,e,s.prev)<0||ct(s,s.next,e)<0}function ng(s,e){let t=s,n=!1;const i=(s.x+e.x)/2,r=(s.y+e.y)/2;do t.y>r!=t.next.y>r&&t.next.y!==t.y&&i<(t.next.x-t.x)*(r-t.y)/(t.next.y-t.y)+t.x&&(n=!n),t=t.next;while(t!==s);return n}function cl(s,e){const t=new da(s.i,s.x,s.y),n=new da(e.i,e.x,e.y),i=s.next,r=e.prev;return s.next=e,e.prev=s,t.next=i,i.prev=t,n.next=t,t.prev=n,r.next=n,n.prev=r,n}function hc(s,e,t,n){const i=new da(s,e,t);return n?(i.next=n.next,i.prev=n,n.next.prev=i,n.next=i):(i.prev=i,i.next=i),i}function $i(s){s.next.prev=s.prev,s.prev.next=s.next,s.prevZ&&(s.prevZ.nextZ=s.nextZ),s.nextZ&&(s.nextZ.prevZ=s.prevZ)}function da(s,e,t){this.i=s,this.x=e,this.y=t,this.prev=null,this.next=null,this.z=0,this.prevZ=null,this.nextZ=null,this.steiner=!1}function ig(s,e,t,n){let i=0;for(let r=e,a=t-n;r<t;r+=n)i+=(s[a]-s[r])*(s[r+1]+s[a+1]),a=r;return i}let Ei=class ll{static area(e){const t=e.length;let n=0;for(let i=t-1,r=0;r<t;i=r++)n+=e[i].x*e[r].y-e[r].x*e[i].y;return n*.5}static isClockWise(e){return ll.area(e)<0}static triangulateShape(e,t){const n=[],i=[],r=[];uc(e),dc(n,e);let a=e.length;t.forEach(uc);for(let c=0;c<t.length;c++)i.push(a),a+=t[c].length,dc(n,t[c]);const o=km.triangulate(n,i);for(let c=0;c<o.length;c+=3)r.push(o.slice(c,c+3));return r}};function uc(s){const e=s.length;e>2&&s[e-1].equals(s[0])&&s.pop()}function dc(s,e){for(let t=0;t<e.length;t++)s.push(e[t].x),s.push(e[t].y)}class Ta extends tt{constructor(e=new Ji([new j(.5,.5),new j(-.5,.5),new j(-.5,-.5),new j(.5,-.5)]),t={}){super(),this.type="ExtrudeGeometry",this.parameters={shapes:e,options:t},e=Array.isArray(e)?e:[e];const n=this,i=[],r=[];for(let o=0,c=e.length;o<c;o++){const l=e[o];a(l)}this.setAttribute("position",new nt(i,3)),this.setAttribute("uv",new nt(r,2)),this.computeVertexNormals();function a(o){const c=[],l=t.curveSegments!==void 0?t.curveSegments:12,h=t.steps!==void 0?t.steps:1,u=t.depth!==void 0?t.depth:1;let f=t.bevelEnabled!==void 0?t.bevelEnabled:!0,p=t.bevelThickness!==void 0?t.bevelThickness:.2,g=t.bevelSize!==void 0?t.bevelSize:p-.1,v=t.bevelOffset!==void 0?t.bevelOffset:0,m=t.bevelSegments!==void 0?t.bevelSegments:3;const d=t.extrudePath,_=t.UVGenerator!==void 0?t.UVGenerator:sg;let x,y=!1,R,E,C,N;d&&(x=d.getSpacedPoints(h),y=!0,f=!1,R=d.computeFrenetFrames(h,!1),E=new M,C=new M,N=new M),f||(m=0,p=0,g=0,v=0);const b=o.extractPoints(l);let T=b.shape;const I=b.holes;if(!Ei.isClockWise(T)){T=T.reverse();for(let L=0,ue=I.length;L<ue;L++){const Y=I[L];Ei.isClockWise(Y)&&(I[L]=Y.reverse())}}const Z=Ei.triangulateShape(T,I),D=T;for(let L=0,ue=I.length;L<ue;L++){const Y=I[L];T=T.concat(Y)}function B(L,ue,Y){return ue||console.error("THREE.ExtrudeGeometry: vec does not exist"),L.clone().addScaledVector(ue,Y)}const z=T.length,$=Z.length;function K(L,ue,Y){let oe,q,Te;const ge=L.x-ue.x,w=L.y-ue.y,S=Y.x-L.x,U=Y.y-L.y,re=ge*ge+w*w,ie=ge*U-w*S;if(Math.abs(ie)>Number.EPSILON){const te=Math.sqrt(re),Ee=Math.sqrt(S*S+U*U),fe=ue.x-w/te,ye=ue.y+ge/te,Pe=Y.x-U/Ee,ke=Y.y+S/Ee,se=((Pe-fe)*U-(ke-ye)*S)/(ge*U-w*S);oe=fe+ge*se-L.x,q=ye+w*se-L.y;const Ke=oe*oe+q*q;if(Ke<=2)return new j(oe,q);Te=Math.sqrt(Ke/2)}else{let te=!1;ge>Number.EPSILON?S>Number.EPSILON&&(te=!0):ge<-Number.EPSILON?S<-Number.EPSILON&&(te=!0):Math.sign(w)===Math.sign(U)&&(te=!0),te?(oe=-w,q=ge,Te=Math.sqrt(re)):(oe=ge,q=w,Te=Math.sqrt(re/2))}return new j(oe/Te,q/Te)}const J=[];for(let L=0,ue=D.length,Y=ue-1,oe=L+1;L<ue;L++,Y++,oe++)Y===ue&&(Y=0),oe===ue&&(oe=0),J[L]=K(D[L],D[Y],D[oe]);const Q=[];let ne,ce=J.concat();for(let L=0,ue=I.length;L<ue;L++){const Y=I[L];ne=[];for(let oe=0,q=Y.length,Te=q-1,ge=oe+1;oe<q;oe++,Te++,ge++)Te===q&&(Te=0),ge===q&&(ge=0),ne[oe]=K(Y[oe],Y[Te],Y[ge]);Q.push(ne),ce=ce.concat(ne)}for(let L=0;L<m;L++){const ue=L/m,Y=p*Math.cos(ue*Math.PI/2),oe=g*Math.sin(ue*Math.PI/2)+v;for(let q=0,Te=D.length;q<Te;q++){const ge=B(D[q],J[q],oe);ve(ge.x,ge.y,-Y)}for(let q=0,Te=I.length;q<Te;q++){const ge=I[q];ne=Q[q];for(let w=0,S=ge.length;w<S;w++){const U=B(ge[w],ne[w],oe);ve(U.x,U.y,-Y)}}}const X=g+v;for(let L=0;L<z;L++){const ue=f?B(T[L],ce[L],X):T[L];y?(C.copy(R.normals[0]).multiplyScalar(ue.x),E.copy(R.binormals[0]).multiplyScalar(ue.y),N.copy(x[0]).add(C).add(E),ve(N.x,N.y,N.z)):ve(ue.x,ue.y,0)}for(let L=1;L<=h;L++)for(let ue=0;ue<z;ue++){const Y=f?B(T[ue],ce[ue],X):T[ue];y?(C.copy(R.normals[L]).multiplyScalar(Y.x),E.copy(R.binormals[L]).multiplyScalar(Y.y),N.copy(x[L]).add(C).add(E),ve(N.x,N.y,N.z)):ve(Y.x,Y.y,u/h*L)}for(let L=m-1;L>=0;L--){const ue=L/m,Y=p*Math.cos(ue*Math.PI/2),oe=g*Math.sin(ue*Math.PI/2)+v;for(let q=0,Te=D.length;q<Te;q++){const ge=B(D[q],J[q],oe);ve(ge.x,ge.y,u+Y)}for(let q=0,Te=I.length;q<Te;q++){const ge=I[q];ne=Q[q];for(let w=0,S=ge.length;w<S;w++){const U=B(ge[w],ne[w],oe);y?ve(U.x,U.y+x[h-1].y,x[h-1].x+Y):ve(U.x,U.y,u+Y)}}}ee(),pe();function ee(){const L=i.length/3;if(f){let ue=0,Y=z*ue;for(let oe=0;oe<$;oe++){const q=Z[oe];De(q[2]+Y,q[1]+Y,q[0]+Y)}ue=h+m*2,Y=z*ue;for(let oe=0;oe<$;oe++){const q=Z[oe];De(q[0]+Y,q[1]+Y,q[2]+Y)}}else{for(let ue=0;ue<$;ue++){const Y=Z[ue];De(Y[2],Y[1],Y[0])}for(let ue=0;ue<$;ue++){const Y=Z[ue];De(Y[0]+z*h,Y[1]+z*h,Y[2]+z*h)}}n.addGroup(L,i.length/3-L,0)}function pe(){const L=i.length/3;let ue=0;Se(D,ue),ue+=D.length;for(let Y=0,oe=I.length;Y<oe;Y++){const q=I[Y];Se(q,ue),ue+=q.length}n.addGroup(L,i.length/3-L,1)}function Se(L,ue){let Y=L.length;for(;--Y>=0;){const oe=Y;let q=Y-1;q<0&&(q=L.length-1);for(let Te=0,ge=h+m*2;Te<ge;Te++){const w=z*Te,S=z*(Te+1),U=ue+oe+w,re=ue+q+w,ie=ue+q+S,te=ue+oe+S;Oe(U,re,ie,te)}}}function ve(L,ue,Y){c.push(L),c.push(ue),c.push(Y)}function De(L,ue,Y){we(L),we(ue),we(Y);const oe=i.length/3,q=_.generateTopUV(n,i,oe-3,oe-2,oe-1);Fe(q[0]),Fe(q[1]),Fe(q[2])}function Oe(L,ue,Y,oe){we(L),we(ue),we(oe),we(ue),we(Y),we(oe);const q=i.length/3,Te=_.generateSideWallUV(n,i,q-6,q-3,q-2,q-1);Fe(Te[0]),Fe(Te[1]),Fe(Te[3]),Fe(Te[1]),Fe(Te[2]),Fe(Te[3])}function we(L){i.push(c[L*3+0]),i.push(c[L*3+1]),i.push(c[L*3+2])}function Fe(L){r.push(L.x),r.push(L.y)}}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}toJSON(){const e=super.toJSON(),t=this.parameters.shapes,n=this.parameters.options;return rg(t,n,e)}static fromJSON(e,t){const n=[];for(let r=0,a=e.shapes.length;r<a;r++){const o=t[e.shapes[r]];n.push(o)}const i=e.options.extrudePath;return i!==void 0&&(e.options.extrudePath=new ha[i.type]().fromJSON(i)),new Ta(n,e.options)}}const sg={generateTopUV:function(s,e,t,n,i){const r=e[t*3],a=e[t*3+1],o=e[n*3],c=e[n*3+1],l=e[i*3],h=e[i*3+1];return[new j(r,a),new j(o,c),new j(l,h)]},generateSideWallUV:function(s,e,t,n,i,r){const a=e[t*3],o=e[t*3+1],c=e[t*3+2],l=e[n*3],h=e[n*3+1],u=e[n*3+2],f=e[i*3],p=e[i*3+1],g=e[i*3+2],v=e[r*3],m=e[r*3+1],d=e[r*3+2];return Math.abs(o-h)<Math.abs(a-l)?[new j(a,1-c),new j(l,1-u),new j(f,1-g),new j(v,1-d)]:[new j(o,1-c),new j(h,1-u),new j(p,1-g),new j(m,1-d)]}};function rg(s,e,t){if(t.shapes=[],Array.isArray(s))for(let n=0,i=s.length;n<i;n++){const r=s[n];t.shapes.push(r.uuid)}else t.shapes.push(s.uuid);return t.options=Object.assign({},e),e.extrudePath!==void 0&&(t.options.extrudePath=e.extrudePath.toJSON()),t}class Qi extends tt{constructor(e=new Ji([new j(0,.5),new j(-.5,-.5),new j(.5,-.5)]),t=12){super(),this.type="ShapeGeometry",this.parameters={shapes:e,curveSegments:t};const n=[],i=[],r=[],a=[];let o=0,c=0;if(Array.isArray(e)===!1)l(e);else for(let h=0;h<e.length;h++)l(e[h]),this.addGroup(o,c,h),o+=c,c=0;this.setIndex(n),this.setAttribute("position",new nt(i,3)),this.setAttribute("normal",new nt(r,3)),this.setAttribute("uv",new nt(a,2));function l(h){const u=i.length/3,f=h.extractPoints(t);let p=f.shape;const g=f.holes;Ei.isClockWise(p)===!1&&(p=p.reverse());for(let m=0,d=g.length;m<d;m++){const _=g[m];Ei.isClockWise(_)===!0&&(g[m]=_.reverse())}const v=Ei.triangulateShape(p,g);for(let m=0,d=g.length;m<d;m++){const _=g[m];p=p.concat(_)}for(let m=0,d=p.length;m<d;m++){const _=p[m];i.push(_.x,_.y,0),r.push(0,0,1),a.push(_.x,_.y)}for(let m=0,d=v.length;m<d;m++){const _=v[m],x=_[0]+u,y=_[1]+u,R=_[2]+u;n.push(x,y,R),c+=3}}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}toJSON(){const e=super.toJSON(),t=this.parameters.shapes;return ag(t,e)}static fromJSON(e,t){const n=[];for(let i=0,r=e.shapes.length;i<r;i++){const a=t[e.shapes[i]];n.push(a)}return new Qi(n,e.curveSegments)}}function ag(s,e){if(e.shapes=[],Array.isArray(s))for(let t=0,n=s.length;t<n;t++){const i=s[t];e.shapes.push(i.uuid)}else e.shapes.push(s.uuid);return e}class js extends tt{constructor(e=1,t=.4,n=12,i=48,r=Math.PI*2){super(),this.type="TorusGeometry",this.parameters={radius:e,tube:t,radialSegments:n,tubularSegments:i,arc:r},n=Math.floor(n),i=Math.floor(i);const a=[],o=[],c=[],l=[],h=new M,u=new M,f=new M;for(let p=0;p<=n;p++)for(let g=0;g<=i;g++){const v=g/i*r,m=p/n*Math.PI*2;u.x=(e+t*Math.cos(m))*Math.cos(v),u.y=(e+t*Math.cos(m))*Math.sin(v),u.z=t*Math.sin(m),o.push(u.x,u.y,u.z),h.x=e*Math.cos(v),h.y=e*Math.sin(v),f.subVectors(u,h).normalize(),c.push(f.x,f.y,f.z),l.push(g/i),l.push(p/n)}for(let p=1;p<=n;p++)for(let g=1;g<=i;g++){const v=(i+1)*p+g-1,m=(i+1)*(p-1)+g-1,d=(i+1)*(p-1)+g,_=(i+1)*p+g;a.push(v,m,_),a.push(m,d,_)}this.setIndex(a),this.setAttribute("position",new nt(o,3)),this.setAttribute("normal",new nt(c,3)),this.setAttribute("uv",new nt(l,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new js(e.radius,e.tube,e.radialSegments,e.tubularSegments,e.arc)}}class qs extends Yn{constructor(e){super(),this.isMeshStandardMaterial=!0,this.defines={STANDARD:""},this.type="MeshStandardMaterial",this.color=new Ue(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new Ue(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=Ic,this.normalScale=new j(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.defines={STANDARD:""},this.color.copy(e.color),this.roughness=e.roughness,this.metalness=e.metalness,this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.roughnessMap=e.roughnessMap,this.metalnessMap=e.metalnessMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapIntensity=e.envMapIntensity,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}}class og extends Xt{constructor(e){super(),this.isLineDashedMaterial=!0,this.type="LineDashedMaterial",this.scale=1,this.dashSize=3,this.gapSize=1,this.setValues(e)}copy(e){return super.copy(e),this.scale=e.scale,this.dashSize=e.dashSize,this.gapSize=e.gapSize,this}}class hl extends gt{constructor(e,t=1){super(),this.isLight=!0,this.type="Light",this.color=new Ue(e),this.intensity=t}dispose(){}copy(e,t){return super.copy(e,t),this.color.copy(e.color),this.intensity=e.intensity,this}toJSON(e){const t=super.toJSON(e);return t.object.color=this.color.getHex(),t.object.intensity=this.intensity,this.groundColor!==void 0&&(t.object.groundColor=this.groundColor.getHex()),this.distance!==void 0&&(t.object.distance=this.distance),this.angle!==void 0&&(t.object.angle=this.angle),this.decay!==void 0&&(t.object.decay=this.decay),this.penumbra!==void 0&&(t.object.penumbra=this.penumbra),this.shadow!==void 0&&(t.object.shadow=this.shadow.toJSON()),t}}const jr=new at,fc=new M,pc=new M;class cg{constructor(e){this.camera=e,this.bias=0,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new j(512,512),this.map=null,this.mapPass=null,this.matrix=new at,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new xa,this._frameExtents=new j(1,1),this._viewportCount=1,this._viewports=[new St(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(e){const t=this.camera,n=this.matrix;fc.setFromMatrixPosition(e.matrixWorld),t.position.copy(fc),pc.setFromMatrixPosition(e.target.matrixWorld),t.lookAt(pc),t.updateMatrixWorld(),jr.multiplyMatrices(t.projectionMatrix,t.matrixWorldInverse),this._frustum.setFromProjectionMatrix(jr),n.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),n.multiply(jr)}getViewport(e){return this._viewports[e]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(e){return this.camera=e.camera.clone(),this.bias=e.bias,this.radius=e.radius,this.mapSize.copy(e.mapSize),this}clone(){return new this.constructor().copy(this)}toJSON(){const e={};return this.bias!==0&&(e.bias=this.bias),this.normalBias!==0&&(e.normalBias=this.normalBias),this.radius!==1&&(e.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(e.mapSize=this.mapSize.toArray()),e.camera=this.camera.toJSON(!1).object,delete e.camera.matrix,e}}class lg extends cg{constructor(){super(new Ft(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}}class hg extends hl{constructor(e,t){super(e,t),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(gt.DEFAULT_UP),this.updateMatrix(),this.target=new gt,this.shadow=new lg}dispose(){this.shadow.dispose()}copy(e){return super.copy(e),this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}}class ug extends hl{constructor(e,t){super(e,t),this.isAmbientLight=!0,this.type="AmbientLight"}}class Aa{constructor(e,t,n=0,i=1/0){this.ray=new Qs(e,t),this.near=n,this.far=i,this.camera=null,this.layers=new _a,this.params={Mesh:{},Line:{threshold:1},LOD:{},Points:{threshold:1},Sprite:{}}}set(e,t){this.ray.set(e,t)}setFromCamera(e,t){t.isPerspectiveCamera?(this.ray.origin.setFromMatrixPosition(t.matrixWorld),this.ray.direction.set(e.x,e.y,.5).unproject(t).sub(this.ray.origin).normalize(),this.camera=t):t.isOrthographicCamera?(this.ray.origin.set(e.x,e.y,(t.near+t.far)/(t.near-t.far)).unproject(t),this.ray.direction.set(0,0,-1).transformDirection(t.matrixWorld),this.camera=t):console.error("THREE.Raycaster: Unsupported camera type: "+t.type)}intersectObject(e,t=!0,n=[]){return fa(e,this,n,t),n.sort(mc),n}intersectObjects(e,t=!0,n=[]){for(let i=0,r=e.length;i<r;i++)fa(e[i],this,n,t);return n.sort(mc),n}}function mc(s,e){return s.distance-e.distance}function fa(s,e,t,n){if(s.layers.test(e.layers)&&s.raycast(e,t),n===!0){const i=s.children;for(let r=0,a=i.length;r<a;r++)fa(i[r],e,t,!0)}}class gc{constructor(e=1,t=0,n=0){return this.radius=e,this.phi=t,this.theta=n,this}set(e,t,n){return this.radius=e,this.phi=t,this.theta=n,this}copy(e){return this.radius=e.radius,this.phi=e.phi,this.theta=e.theta,this}makeSafe(){return this.phi=Math.max(1e-6,Math.min(Math.PI-1e-6,this.phi)),this}setFromVector3(e){return this.setFromCartesianCoords(e.x,e.y,e.z)}setFromCartesianCoords(e,t,n){return this.radius=Math.sqrt(e*e+t*t+n*n),this.radius===0?(this.theta=0,this.phi=0):(this.theta=Math.atan2(e,n),this.phi=Math.acos(Mt(t/this.radius,-1,1))),this}clone(){return new this.constructor().copy(this)}}const vc=new M;let Is,qr;class Yr extends gt{constructor(e=new M(0,0,1),t=new M(0,0,0),n=1,i=16776960,r=n*.2,a=r*.2){super(),this.type="ArrowHelper",Is===void 0&&(Is=new tt,Is.setAttribute("position",new nt([0,0,0,0,1,0],3)),qr=new Pi(0,.5,1,5,1),qr.translate(0,-.5,0)),this.position.copy(t),this.line=new bi(Is,new Xt({color:i,toneMapped:!1})),this.line.matrixAutoUpdate=!1,this.add(this.line),this.cone=new Ge(qr,new Nt({color:i,toneMapped:!1})),this.cone.matrixAutoUpdate=!1,this.add(this.cone),this.setDirection(e),this.setLength(n,r,a)}setDirection(e){if(e.y>.99999)this.quaternion.set(0,0,0,1);else if(e.y<-.99999)this.quaternion.set(1,0,0,0);else{vc.set(e.z,0,-e.x).normalize();const t=Math.acos(e.y);this.quaternion.setFromAxisAngle(vc,t)}}setLength(e,t=e*.2,n=t*.2){this.line.scale.set(1,Math.max(1e-4,e-t),1),this.line.updateMatrix(),this.cone.scale.set(n,t,n),this.cone.position.y=e,this.cone.updateMatrix()}setColor(e){this.line.material.color.set(e),this.cone.material.color.set(e)}copy(e){return super.copy(e,!1),this.line.copy(e.line),this.cone.copy(e.cone),this}dispose(){this.line.geometry.dispose(),this.line.material.dispose(),this.cone.geometry.dispose(),this.cone.material.dispose()}}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:ma}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=ma);class dg{constructor(){k(this,"listeners",{})}on(e,t){this.listeners[e]||(this.listeners[e]=[]),this.listeners[e].push(t)}off(e,t){this.listeners[e]&&(this.listeners[e]=this.listeners[e].filter(n=>n!==t))}emit(e,t){this.listeners[e]&&this.listeners[e].forEach(n=>n(t))}}const _c={type:"change"},Zr={type:"start"},xc={type:"end"},Us=new Qs,yc=new Jt,fg=Math.cos(70*yh.DEG2RAD);class pg extends qn{constructor(e,t){super(),this.object=e,this.domElement=t,this.domElement.style.touchAction="none",this.enabled=!0,this.target=new M,this.cursor=new M,this.minDistance=0,this.maxDistance=1/0,this.minZoom=0,this.maxZoom=1/0,this.minTargetRadius=0,this.maxTargetRadius=1/0,this.minPolarAngle=0,this.maxPolarAngle=Math.PI,this.minAzimuthAngle=-1/0,this.maxAzimuthAngle=1/0,this.enableDamping=!1,this.dampingFactor=.05,this.enableZoom=!0,this.zoomSpeed=1,this.enableRotate=!0,this.rotateSpeed=1,this.enablePan=!0,this.panSpeed=1,this.screenSpacePanning=!0,this.keyPanSpeed=7,this.zoomToCursor=!1,this.autoRotate=!1,this.autoRotateSpeed=2,this.keys={LEFT:"ArrowLeft",UP:"ArrowUp",RIGHT:"ArrowRight",BOTTOM:"ArrowDown"},this.mouseButtons={LEFT:Vt.ROTATE,MIDDLE:Vt.DOLLY,RIGHT:Vt.PAN},this.touches={ONE:Ut.ROTATE,TWO:Ut.DOLLY_PAN},this.target0=this.target.clone(),this.position0=this.object.position.clone(),this.zoom0=this.object.zoom,this._domElementKeyEvents=null,this.getPolarAngle=function(){return o.phi},this.getAzimuthalAngle=function(){return o.theta},this.getDistance=function(){return this.object.position.distanceTo(this.target)},this.listenToKeyEvents=function(P){P.addEventListener("keydown",Pe),this._domElementKeyEvents=P},this.stopListenToKeyEvents=function(){this._domElementKeyEvents.removeEventListener("keydown",Pe),this._domElementKeyEvents=null},this.saveState=function(){n.target0.copy(n.target),n.position0.copy(n.object.position),n.zoom0=n.object.zoom},this.reset=function(){n.target.copy(n.target0),n.object.position.copy(n.position0),n.object.zoom=n.zoom0,n.object.updateProjectionMatrix(),n.dispatchEvent(_c),n.update(),r=i.NONE},this.update=function(){const P=new M,le=new Xn().setFromUnitVectors(e.up,new M(0,1,0)),Ae=le.clone().invert(),be=new M,ae=new Xn,O=new M,he=2*Math.PI;return function(Ne=null){const Le=n.object.position;P.copy(Le).sub(n.target),P.applyQuaternion(le),o.setFromVector3(P),n.autoRotate&&r===i.NONE&&G(T(Ne)),n.enableDamping?(o.theta+=c.theta*n.dampingFactor,o.phi+=c.phi*n.dampingFactor):(o.theta+=c.theta,o.phi+=c.phi);let Ze=n.minAzimuthAngle,$e=n.maxAzimuthAngle;isFinite(Ze)&&isFinite($e)&&(Ze<-Math.PI?Ze+=he:Ze>Math.PI&&(Ze-=he),$e<-Math.PI?$e+=he:$e>Math.PI&&($e-=he),Ze<=$e?o.theta=Math.max(Ze,Math.min($e,o.theta)):o.theta=o.theta>(Ze+$e)/2?Math.max(Ze,o.theta):Math.min($e,o.theta)),o.phi=Math.max(n.minPolarAngle,Math.min(n.maxPolarAngle,o.phi)),o.makeSafe(),n.enableDamping===!0?n.target.addScaledVector(h,n.dampingFactor):n.target.add(h),n.target.sub(n.cursor),n.target.clampLength(n.minTargetRadius,n.maxTargetRadius),n.target.add(n.cursor),n.zoomToCursor&&E||n.object.isOrthographicCamera?o.radius=Q(o.radius):o.radius=Q(o.radius*l),P.setFromSpherical(o),P.applyQuaternion(Ae),Le.copy(n.target).add(P),n.object.lookAt(n.target),n.enableDamping===!0?(c.theta*=1-n.dampingFactor,c.phi*=1-n.dampingFactor,h.multiplyScalar(1-n.dampingFactor)):(c.set(0,0,0),h.set(0,0,0));let lt=!1;if(n.zoomToCursor&&E){let dt=null;if(n.object.isPerspectiveCamera){const Je=P.length();dt=Q(Je*l);const pt=Je-dt;n.object.position.addScaledVector(y,pt),n.object.updateMatrixWorld()}else if(n.object.isOrthographicCamera){const Je=new M(R.x,R.y,0);Je.unproject(n.object),n.object.zoom=Math.max(n.minZoom,Math.min(n.maxZoom,n.object.zoom/l)),n.object.updateProjectionMatrix(),lt=!0;const pt=new M(R.x,R.y,0);pt.unproject(n.object),n.object.position.sub(pt).add(Je),n.object.updateMatrixWorld(),dt=P.length()}else console.warn("WARNING: OrbitControls.js encountered an unknown camera type - zoom to cursor disabled."),n.zoomToCursor=!1;dt!==null&&(this.screenSpacePanning?n.target.set(0,0,-1).transformDirection(n.object.matrix).multiplyScalar(dt).add(n.object.position):(Us.origin.copy(n.object.position),Us.direction.set(0,0,-1).transformDirection(n.object.matrix),Math.abs(n.object.up.dot(Us.direction))<fg?e.lookAt(n.target):(yc.setFromNormalAndCoplanarPoint(n.object.up,n.target),Us.intersectPlane(yc,n.target))))}else n.object.isOrthographicCamera&&(n.object.zoom=Math.max(n.minZoom,Math.min(n.maxZoom,n.object.zoom/l)),n.object.updateProjectionMatrix(),lt=!0);return l=1,E=!1,lt||be.distanceToSquared(n.object.position)>a||8*(1-ae.dot(n.object.quaternion))>a||O.distanceToSquared(n.target)>0?(n.dispatchEvent(_c),be.copy(n.object.position),ae.copy(n.object.quaternion),O.copy(n.target),!0):!1}}(),this.dispose=function(){n.domElement.removeEventListener("contextmenu",Ke),n.domElement.removeEventListener("pointerdown",w),n.domElement.removeEventListener("pointercancel",U),n.domElement.removeEventListener("wheel",te),n.domElement.removeEventListener("pointermove",S),n.domElement.removeEventListener("pointerup",U),n._domElementKeyEvents!==null&&(n._domElementKeyEvents.removeEventListener("keydown",Pe),n._domElementKeyEvents=null)};const n=this,i={NONE:-1,ROTATE:0,DOLLY:1,PAN:2,TOUCH_ROTATE:3,TOUCH_PAN:4,TOUCH_DOLLY_PAN:5,TOUCH_DOLLY_ROTATE:6};let r=i.NONE;const a=1e-6,o=new gc,c=new gc;let l=1;const h=new M,u=new j,f=new j,p=new j,g=new j,v=new j,m=new j,d=new j,_=new j,x=new j,y=new M,R=new j;let E=!1;const C=[],N={};let b=!1;function T(P){return P!==null?2*Math.PI/60*n.autoRotateSpeed*P:2*Math.PI/60/60*n.autoRotateSpeed}function I(P){const le=Math.abs(P*.01);return Math.pow(.95,n.zoomSpeed*le)}function G(P){c.theta-=P}function Z(P){c.phi-=P}const D=function(){const P=new M;return function(Ae,be){P.setFromMatrixColumn(be,0),P.multiplyScalar(-Ae),h.add(P)}}(),B=function(){const P=new M;return function(Ae,be){n.screenSpacePanning===!0?P.setFromMatrixColumn(be,1):(P.setFromMatrixColumn(be,0),P.crossVectors(n.object.up,P)),P.multiplyScalar(Ae),h.add(P)}}(),z=function(){const P=new M;return function(Ae,be){const ae=n.domElement;if(n.object.isPerspectiveCamera){const O=n.object.position;P.copy(O).sub(n.target);let he=P.length();he*=Math.tan(n.object.fov/2*Math.PI/180),D(2*Ae*he/ae.clientHeight,n.object.matrix),B(2*be*he/ae.clientHeight,n.object.matrix)}else n.object.isOrthographicCamera?(D(Ae*(n.object.right-n.object.left)/n.object.zoom/ae.clientWidth,n.object.matrix),B(be*(n.object.top-n.object.bottom)/n.object.zoom/ae.clientHeight,n.object.matrix)):(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - pan disabled."),n.enablePan=!1)}}();function $(P){n.object.isPerspectiveCamera||n.object.isOrthographicCamera?l/=P:(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),n.enableZoom=!1)}function K(P){n.object.isPerspectiveCamera||n.object.isOrthographicCamera?l*=P:(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),n.enableZoom=!1)}function J(P,le){if(!n.zoomToCursor)return;E=!0;const Ae=n.domElement.getBoundingClientRect(),be=P-Ae.left,ae=le-Ae.top,O=Ae.width,he=Ae.height;R.x=be/O*2-1,R.y=-(ae/he)*2+1,y.set(R.x,R.y,1).unproject(n.object).sub(n.object.position).normalize()}function Q(P){return Math.max(n.minDistance,Math.min(n.maxDistance,P))}function ne(P){u.set(P.clientX,P.clientY)}function ce(P){J(P.clientX,P.clientX),d.set(P.clientX,P.clientY)}function X(P){g.set(P.clientX,P.clientY)}function ee(P){f.set(P.clientX,P.clientY),p.subVectors(f,u).multiplyScalar(n.rotateSpeed);const le=n.domElement;G(2*Math.PI*p.x/le.clientHeight),Z(2*Math.PI*p.y/le.clientHeight),u.copy(f),n.update()}function pe(P){_.set(P.clientX,P.clientY),x.subVectors(_,d),x.y>0?$(I(x.y)):x.y<0&&K(I(x.y)),d.copy(_),n.update()}function Se(P){v.set(P.clientX,P.clientY),m.subVectors(v,g).multiplyScalar(n.panSpeed),z(m.x,m.y),g.copy(v),n.update()}function ve(P){J(P.clientX,P.clientY),P.deltaY<0?K(I(P.deltaY)):P.deltaY>0&&$(I(P.deltaY)),n.update()}function De(P){let le=!1;switch(P.code){case n.keys.UP:P.ctrlKey||P.metaKey||P.shiftKey?Z(2*Math.PI*n.rotateSpeed/n.domElement.clientHeight):z(0,n.keyPanSpeed),le=!0;break;case n.keys.BOTTOM:P.ctrlKey||P.metaKey||P.shiftKey?Z(-2*Math.PI*n.rotateSpeed/n.domElement.clientHeight):z(0,-n.keyPanSpeed),le=!0;break;case n.keys.LEFT:P.ctrlKey||P.metaKey||P.shiftKey?G(2*Math.PI*n.rotateSpeed/n.domElement.clientHeight):z(n.keyPanSpeed,0),le=!0;break;case n.keys.RIGHT:P.ctrlKey||P.metaKey||P.shiftKey?G(-2*Math.PI*n.rotateSpeed/n.domElement.clientHeight):z(-n.keyPanSpeed,0),le=!0;break}le&&(P.preventDefault(),n.update())}function Oe(P){if(C.length===1)u.set(P.pageX,P.pageY);else{const le=_e(P),Ae=.5*(P.pageX+le.x),be=.5*(P.pageY+le.y);u.set(Ae,be)}}function we(P){if(C.length===1)g.set(P.pageX,P.pageY);else{const le=_e(P),Ae=.5*(P.pageX+le.x),be=.5*(P.pageY+le.y);g.set(Ae,be)}}function Fe(P){const le=_e(P),Ae=P.pageX-le.x,be=P.pageY-le.y,ae=Math.sqrt(Ae*Ae+be*be);d.set(0,ae)}function L(P){n.enableZoom&&Fe(P),n.enablePan&&we(P)}function ue(P){n.enableZoom&&Fe(P),n.enableRotate&&Oe(P)}function Y(P){if(C.length==1)f.set(P.pageX,P.pageY);else{const Ae=_e(P),be=.5*(P.pageX+Ae.x),ae=.5*(P.pageY+Ae.y);f.set(be,ae)}p.subVectors(f,u).multiplyScalar(n.rotateSpeed);const le=n.domElement;G(2*Math.PI*p.x/le.clientHeight),Z(2*Math.PI*p.y/le.clientHeight),u.copy(f)}function oe(P){if(C.length===1)v.set(P.pageX,P.pageY);else{const le=_e(P),Ae=.5*(P.pageX+le.x),be=.5*(P.pageY+le.y);v.set(Ae,be)}m.subVectors(v,g).multiplyScalar(n.panSpeed),z(m.x,m.y),g.copy(v)}function q(P){const le=_e(P),Ae=P.pageX-le.x,be=P.pageY-le.y,ae=Math.sqrt(Ae*Ae+be*be);_.set(0,ae),x.set(0,Math.pow(_.y/d.y,n.zoomSpeed)),$(x.y),d.copy(_);const O=(P.pageX+le.x)*.5,he=(P.pageY+le.y)*.5;J(O,he)}function Te(P){n.enableZoom&&q(P),n.enablePan&&oe(P)}function ge(P){n.enableZoom&&q(P),n.enableRotate&&Y(P)}function w(P){n.enabled!==!1&&(C.length===0&&(n.domElement.setPointerCapture(P.pointerId),n.domElement.addEventListener("pointermove",S),n.domElement.addEventListener("pointerup",U)),Xe(P),P.pointerType==="touch"?ke(P):re(P))}function S(P){n.enabled!==!1&&(P.pointerType==="touch"?se(P):ie(P))}function U(P){Be(P),C.length===0&&(n.domElement.releasePointerCapture(P.pointerId),n.domElement.removeEventListener("pointermove",S),n.domElement.removeEventListener("pointerup",U)),n.dispatchEvent(xc),r=i.NONE}function re(P){let le;switch(P.button){case 0:le=n.mouseButtons.LEFT;break;case 1:le=n.mouseButtons.MIDDLE;break;case 2:le=n.mouseButtons.RIGHT;break;default:le=-1}switch(le){case Vt.DOLLY:if(n.enableZoom===!1)return;ce(P),r=i.DOLLY;break;case Vt.ROTATE:if(P.ctrlKey||P.metaKey||P.shiftKey){if(n.enablePan===!1)return;X(P),r=i.PAN}else{if(n.enableRotate===!1)return;ne(P),r=i.ROTATE}break;case Vt.PAN:if(P.ctrlKey||P.metaKey||P.shiftKey){if(n.enableRotate===!1)return;ne(P),r=i.ROTATE}else{if(n.enablePan===!1)return;X(P),r=i.PAN}break;default:r=i.NONE}r!==i.NONE&&n.dispatchEvent(Zr)}function ie(P){switch(r){case i.ROTATE:if(n.enableRotate===!1)return;ee(P);break;case i.DOLLY:if(n.enableZoom===!1)return;pe(P);break;case i.PAN:if(n.enablePan===!1)return;Se(P);break}}function te(P){n.enabled===!1||n.enableZoom===!1||r!==i.NONE||(P.preventDefault(),n.dispatchEvent(Zr),ve(Ee(P)),n.dispatchEvent(xc))}function Ee(P){const le=P.deltaMode,Ae={clientX:P.clientX,clientY:P.clientY,deltaY:P.deltaY};switch(le){case 1:Ae.deltaY*=16;break;case 2:Ae.deltaY*=100;break}return P.ctrlKey&&!b&&(Ae.deltaY*=10),Ae}function fe(P){P.key==="Control"&&(b=!0,document.addEventListener("keyup",ye,{passive:!0,capture:!0}))}function ye(P){P.key==="Control"&&(b=!1,document.removeEventListener("keyup",ye,{passive:!0,capture:!0}))}function Pe(P){n.enabled===!1||n.enablePan===!1||De(P)}function ke(P){switch(Re(P),C.length){case 1:switch(n.touches.ONE){case Ut.ROTATE:if(n.enableRotate===!1)return;Oe(P),r=i.TOUCH_ROTATE;break;case Ut.PAN:if(n.enablePan===!1)return;we(P),r=i.TOUCH_PAN;break;default:r=i.NONE}break;case 2:switch(n.touches.TWO){case Ut.DOLLY_PAN:if(n.enableZoom===!1&&n.enablePan===!1)return;L(P),r=i.TOUCH_DOLLY_PAN;break;case Ut.DOLLY_ROTATE:if(n.enableZoom===!1&&n.enableRotate===!1)return;ue(P),r=i.TOUCH_DOLLY_ROTATE;break;default:r=i.NONE}break;default:r=i.NONE}r!==i.NONE&&n.dispatchEvent(Zr)}function se(P){switch(Re(P),r){case i.TOUCH_ROTATE:if(n.enableRotate===!1)return;Y(P),n.update();break;case i.TOUCH_PAN:if(n.enablePan===!1)return;oe(P),n.update();break;case i.TOUCH_DOLLY_PAN:if(n.enableZoom===!1&&n.enablePan===!1)return;Te(P),n.update();break;case i.TOUCH_DOLLY_ROTATE:if(n.enableZoom===!1&&n.enableRotate===!1)return;ge(P),n.update();break;default:r=i.NONE}}function Ke(P){n.enabled!==!1&&P.preventDefault()}function Xe(P){C.push(P.pointerId)}function Be(P){delete N[P.pointerId];for(let le=0;le<C.length;le++)if(C[le]==P.pointerId){C.splice(le,1);return}}function Re(P){let le=N[P.pointerId];le===void 0&&(le=new j,N[P.pointerId]=le),le.set(P.pageX,P.pageY)}function _e(P){const le=P.pointerId===C[0]?C[1]:C[0];return N[le]}n.domElement.addEventListener("contextmenu",Ke),n.domElement.addEventListener("pointerdown",w),n.domElement.addEventListener("pointercancel",U),n.domElement.addEventListener("wheel",te,{passive:!1}),document.addEventListener("keydown",fe,{passive:!0,capture:!0}),this.update()}}var ut=(s=>(s.TOP="TOP",s.PERSPECTIVE="PERSPECTIVE",s.FRONT="FRONT",s.LEFT="LEFT",s))(ut||{});class mg{constructor(e,t,n){k(this,"_eventBus");k(this,"container");k(this,"renderer");k(this,"scene");k(this,"views",{});k(this,"activeView","PERSPECTIVE");k(this,"viewLabel");k(this,"viewMenu",null);k(this,"viewMenuCloseHandler",null);k(this,"resetButton");k(this,"controls",null);k(this,"currentToolId",null);k(this,"perspectiveSelectMode",!1);this._eventBus=e,this.scene=n,console.log("ViewManager initialized");const i=document.getElementById(t);if(!i)throw new Error(`Container ${t} not found`);this.container=i;const r=document.createElement("div");r.style.position="absolute",r.style.top="65px",r.style.left="75px",r.style.display="flex",r.style.gap="15px",r.style.alignItems="center",r.style.zIndex="2000",r.style.pointerEvents="none",this.container.appendChild(r),this.viewLabel=document.createElement("div"),this.viewLabel.style.color="white",this.viewLabel.style.fontSize="14px",this.viewLabel.style.fontWeight="bold",this.viewLabel.style.fontFamily="Arial, sans-serif",this.viewLabel.style.textShadow="1px 1px 2px black",this.viewLabel.style.cursor="pointer",this.viewLabel.style.pointerEvents="auto",this.viewLabel.style.userSelect="none",this.viewLabel.style.textDecoration="underline",this.viewLabel.style.textDecorationColor="rgba(255,255,255,0.4)",this.viewLabel.onmouseenter=()=>{this.viewLabel.style.color="#aaddff"},this.viewLabel.onmouseleave=()=>{this.viewLabel.style.color="white"},this.viewLabel.onclick=a=>{a.stopPropagation(),this.toggleViewMenu()},r.appendChild(this.viewLabel),this.resetButton=document.createElement("div"),this.resetButton.innerText="Reset",this.resetButton.style.color="#AAAAAA",this.resetButton.style.fontSize="12px",this.resetButton.style.fontFamily="Arial, sans-serif",this.resetButton.style.cursor="pointer",this.resetButton.style.pointerEvents="auto",this.resetButton.style.textShadow="1px 1px 2px black",this.resetButton.style.textDecoration="underline",this.resetButton.onmouseenter=()=>this.resetButton.style.color="#FFFFFF",this.resetButton.onmouseleave=()=>this.resetButton.style.color="#AAAAAA",this.resetButton.onclick=()=>this.resetCurrentView(),r.appendChild(this.resetButton),this.renderer=new el({antialias:!0}),this.renderer.setSize(this.container.clientWidth,this.container.clientHeight),this.renderer.setPixelRatio(window.devicePixelRatio),this.renderer.shadowMap.enabled=!0,this.renderer.shadowMap.type=Ec,this.container.appendChild(this.renderer.domElement),this.initListeners(),this.initViews(),this.loadState(),this.updateViewLabel(),this.setupControls(),this.animate=this.animate.bind(this),requestAnimationFrame(this.animate),window.addEventListener("resize",()=>this.onWindowResize()),window.addEventListener("beforeunload",()=>this.saveState())}initListeners(){this._eventBus.on("tool-selected",e=>{if(e&&e!=="select"){if(e==="brush_create"&&this.activeView==="TOP"){this.showToast("Pinsel-Erstellung nur in Front- oder Perspektivansicht sinnvoll!",3e3),setTimeout(()=>this._eventBus.emit("tool-selected","select"),0);return}if(e!=="brush_create"&&(this.activeView==="FRONT"||this.activeView==="LEFT")){this.showToast("Erstellen nur in Oben- oder Perspektivansicht möglich!",3e3),setTimeout(()=>this._eventBus.emit("tool-selected","select"),0);return}}e!=="select"&&this.perspectiveSelectMode&&(this.perspectiveSelectMode=!1,this._eventBus.emit("perspective-mode-changed","orbit")),this.currentToolId=e,this.updateControlsMode()}),this._eventBus.on("perspective-mode-changed",e=>{this.perspectiveSelectMode=e==="select",this.updateControlsMode()})}showToast(e,t=3e3){const n=document.createElement("div");n.innerText=e,Object.assign(n.style,{position:"absolute",top:"50%",left:"50%",transform:"translate(-50%, -50%)",background:"rgba(0, 0, 0, 0.8)",color:"white",padding:"15px 25px",borderRadius:"5px",fontFamily:"Arial, sans-serif",fontSize:"14px",zIndex:"5000",pointerEvents:"none",opacity:"0",transition:"opacity 0.3s"}),this.container.appendChild(n),requestAnimationFrame(()=>n.style.opacity="1"),setTimeout(()=>{n.style.opacity="0",setTimeout(()=>{n.parentElement&&this.container.removeChild(n)},300)},t)}saveState(){this.controls&&this.views[this.activeView]&&this.views[this.activeView].target.copy(this.controls.target);const e={activeView:this.activeView,views:{}};Object.values(this.views).forEach(t=>{t&&(e.views[t.type]={position:t.camera.position.toArray(),target:t.target.toArray(),zoom:t.camera.zoom})}),localStorage.setItem("viewState",JSON.stringify(e))}loadState(){const e=localStorage.getItem("viewState");if(e)try{const t=JSON.parse(e);t.views&&Object.keys(t.views).forEach(n=>{const i=t.views[n],r=this.views[n];r&&i&&(r.camera.position.fromArray(i.position),r.target.fromArray(i.target),i.zoom&&(r.camera.zoom=i.zoom,r.camera.updateProjectionMatrix()))}),t.activeView&&this.views[t.activeView]&&(this.activeView=t.activeView),this._eventBus.emit("camera-change",null)}catch(t){console.warn("Failed to load view state",t)}}setActiveView(e){this.views[e]&&this.activeView!==e&&(this.controls&&this.views[this.activeView]&&this.views[this.activeView].target.copy(this.controls.target),this.activeView=e,this.updateViewLabel(),this.updateControlsMode(),this.onWindowResize(),this.setupControls(),this.saveState(),this._eventBus.emit("camera-view-changed",e))}getActiveView(){return this.activeView}getActiveCamera(){var e;return(e=this.views[this.activeView])==null?void 0:e.camera}getCanvas(){return this.renderer.domElement}setControlsEnabled(e){this.controls&&(this.controls.enabled=e)}focusOnObject(e){if(!this.controls)return;const t=new Ln().setFromObject(e),n=t.getCenter(new M),i=t.getSize(new M);this.controls.target.copy(n);const r=Math.max(i.x,i.y,i.z),a=this.views[this.activeView];if(a&&a.camera instanceof bt){let c=Math.abs(r/2/Math.tan(Math.PI*45/360))*1.2;const l=new M().subVectors(a.camera.position,n).normalize().multiplyScalar(c);a.camera.position.copy(n).add(l)}else if(a&&a.camera instanceof Ft){let c=1e3/(r*1.2);a.camera.zoom=Math.min(Math.max(c,.01),100),a.camera.updateProjectionMatrix()}this.controls.update(),this._eventBus.emit("camera-change",null)}getScene(){return this.scene}getControls(){return this.controls}resetCurrentView(){const e=this.views[this.activeView];if(!e)return;const t=5e4;switch(e.target.set(0,0,0),this.controls&&this.controls.target.set(0,0,0),this.activeView){case"TOP":e.camera.position.set(0,t,0),e.camera.lookAt(0,0,0),e.camera.up.set(0,0,-1);break;case"FRONT":e.camera.position.set(0,0,t),e.camera.lookAt(0,0,0);break;case"LEFT":e.camera.position.set(-t,0,0),e.camera.lookAt(0,0,0);break;case"PERSPECTIVE":e.camera.position.set(500,500,500),e.camera.lookAt(0,0,0);break}(e.camera instanceof bt||e.camera instanceof Ft)&&(e.camera instanceof Ft&&(e.camera.zoom=1),e.camera.updateProjectionMatrix()),this.controls&&this.controls.update(),this.saveState(),this._eventBus.emit("camera-change",null)}updateViewLabel(){const e={TOP:"Oben",FRONT:"Vorne",LEFT:"Links",PERSPECTIVE:"Perspektive"};this.viewLabel.innerText=e[this.activeView]}toggleViewMenu(){if(this.viewMenu){this.closeViewMenu();return}const e={TOP:"Oben",FRONT:"Vorne",LEFT:"Links",PERSPECTIVE:"Perspektive"},t=document.createElement("div");this.viewMenu=t,Object.assign(t.style,{position:"absolute",top:"85px",left:"75px",background:"rgba(30, 30, 30, 0.95)",border:"1px solid #555",borderRadius:"4px",zIndex:"3000",overflow:"hidden",boxShadow:"0 4px 12px rgba(0,0,0,0.6)",fontFamily:"Arial, sans-serif",fontSize:"13px",minWidth:"130px"}),["PERSPECTIVE","TOP","FRONT","LEFT"].forEach(i=>{const r=document.createElement("div"),a=i===this.activeView;Object.assign(r.style,{padding:"8px 14px",color:a?"#aaddff":"#dddddd",cursor:"pointer",fontWeight:a?"bold":"normal",background:a?"rgba(0, 122, 204, 0.25)":"transparent",transition:"background 0.15s"}),r.innerText=e[i],r.onmouseenter=()=>{i!==this.activeView&&(r.style.background="rgba(255,255,255,0.08)")},r.onmouseleave=()=>{i!==this.activeView&&(r.style.background="transparent")},r.onclick=o=>{o.stopPropagation(),this.closeViewMenu(),this.setActiveView(i)},t.appendChild(r)}),this.container.appendChild(t);const n=i=>{!t.contains(i.target)&&!this.viewLabel.contains(i.target)&&this.closeViewMenu()};this.viewMenuCloseHandler=n,document.addEventListener("mousedown",n),document.addEventListener("touchstart",n)}closeViewMenu(){this.viewMenu&&(this.viewMenu.parentElement&&this.viewMenu.parentElement.removeChild(this.viewMenu),this.viewMenu=null),this.viewMenuCloseHandler&&(document.removeEventListener("mousedown",this.viewMenuCloseHandler),document.removeEventListener("touchstart",this.viewMenuCloseHandler),this.viewMenuCloseHandler=null)}setupControls(){this.controls&&this.controls.dispose();const e=this.views[this.activeView];e&&(this.controls=new pg(e.camera,this.renderer.domElement),this.controls.enableDamping=!0,this.controls.dampingFactor=.05,this.controls.addEventListener("end",()=>this.saveState()),this.controls.addEventListener("change",()=>this._eventBus.emit("camera-change",null)),this.controls.target.copy(e.target),this.updateControlsMode(),this.controls.enableRotate=this.activeView==="PERSPECTIVE",this.controls.update())}updateControlsMode(){if(!this.controls)return;const e=this.currentToolId===null||this.currentToolId==="select",t=this.activeView==="PERSPECTIVE";t&&this.perspectiveSelectMode?(this.controls.mouseButtons={LEFT:null,MIDDLE:Vt.DOLLY,RIGHT:Vt.PAN},this.controls.touches={ONE:Ut.PAN,TWO:Ut.DOLLY_PAN}):e||t?(this.controls.mouseButtons={LEFT:Vt.ROTATE,MIDDLE:Vt.DOLLY,RIGHT:Vt.PAN},this.controls.touches=t?{ONE:Ut.ROTATE,TWO:Ut.DOLLY_PAN}:{ONE:Ut.PAN,TWO:Ut.DOLLY_PAN}):(this.controls.mouseButtons={LEFT:null,MIDDLE:Vt.DOLLY,RIGHT:Vt.PAN},this.controls.touches={ONE:Ut.PAN,TWO:Ut.DOLLY_PAN})}initViews(){const e=this.container.clientWidth/this.container.clientHeight,t=500,n=5e4,i=new Ft(-t*e,t*e,t,-t,-1e6,1e6);i.position.set(0,n,0),i.lookAt(0,0,0),i.up.set(0,0,-1);const r=new bt(45,e,.1,1e6);r.position.set(500,500,500),r.lookAt(0,0,0);const a=new Ft(-t*e,t*e,t,-t,-1e6,1e6);a.position.set(0,0,n),a.lookAt(0,0,0);const o=new Ft(-t*e,t*e,t,-t,-1e6,1e6);o.position.set(-n,0,0),o.lookAt(0,0,0),this.views.TOP={type:"TOP",container:this.container,camera:i,scene:this.scene,target:new M(0,0,0)},this.views.PERSPECTIVE={type:"PERSPECTIVE",container:this.container,camera:r,scene:this.scene,target:new M(0,0,0)},this.views.FRONT={type:"FRONT",container:this.container,camera:a,scene:this.scene,target:new M(0,0,0)},this.views.LEFT={type:"LEFT",container:this.container,camera:o,scene:this.scene,target:new M(0,0,0)}}onWindowResize(){const e=this.container.clientWidth,t=this.container.clientHeight;this.renderer.setSize(e,t);const n=e/t,i=500;Object.values(this.views).forEach(r=>{r&&r.camera instanceof Ft?(r.camera.left=-i*n,r.camera.right=i*n,r.camera.top=i,r.camera.bottom=-i,r.camera.near=-1e6,r.camera.far=1e6,r.camera.updateProjectionMatrix()):r&&r.camera instanceof bt&&(r.camera.aspect=n,r.camera.updateProjectionMatrix())}),this._eventBus.emit("camera-change",null)}animate(){requestAnimationFrame(this.animate),this.controls&&this.controls.update();const e=this.views[this.activeView];e&&(this.renderer.clear(),this.renderer.render(e.scene,e.camera))}}class gg{constructor(e,t){k(this,"eventBus");k(this,"scene");k(this,"objects",[]);k(this,"selectedObjects",new Set);this.eventBus=e,this.scene=t,console.log("ObjectManager initialized"),setInterval(()=>this.sanitizeObjects(),500),this.eventBus.on("object-added",n=>{this.updateObjectVisuals(n)}),this.eventBus.on("delete-selected-object",()=>{this.getSelectedObjects().forEach(i=>this.removeObject(i)),this.selectObject(null),this.eventBus.emit("selection-changed",[])}),this.eventBus.on("update-object-geometry",n=>{this.updateObjectVisuals(n)})}updateObjectVisuals(e){const t=e.userData.materialParams;if(!t)return;const n="Visual_Wireframe_Overlay",i="Visual_Fill",r=o=>{if(o.userData.isHelper||o.name===n||o.userData.isControlPoint||o.userData.isAnchor)return;const c=o.material;if(c&&(c.isMeshStandardMaterial||c.isMeshPhongMaterial||c.isMeshBasicMaterial)){if(t.color&&c.color.set(t.color),t.roughness!==void 0&&c.roughness!==void 0&&(c.roughness=t.roughness),t.metalness!==void 0&&c.metalness!==void 0&&(c.metalness=t.metalness),t.opacity!==void 0){const h=Math.round(t.opacity*100)/100;c.opacity=h,c.transparent=h<1,c.depthWrite=h>=1,c.needsUpdate=!0}t.flatShading!==void 0&&c.flatShading!==void 0&&(c.flatShading=t.flatShading,c.needsUpdate=!0)}if(o.userData.isGeneratedVisual)return;let l=o.children.find(h=>h.name===n);if(t.wireframe){if(!l){const h=o.geometry;if(!h||!h.attributes||!h.attributes.position||h.attributes.position.count===0)return;const u=new Wi(h,1),f=new Xt({color:16777215,transparent:!0,opacity:.5});l=new Si(u,f),l.name=n,l.userData.isGeneratedVisual=!0,l.renderOrder=1,o.add(l)}l.visible=!0}else l&&(o.remove(l),l.geometry&&l.geometry.dispose(),l.material&&l.material.dispose())};e.traverse(o=>{o instanceof Ge&&r(o)});const a=e.children.find(o=>o.name===i);if(a&&(e.remove(a),a instanceof Ge&&(a.geometry.dispose(),Array.isArray(a.material)?a.material.forEach(o=>o.dispose()):a.material.dispose())),!t.wireframe){const o=this.generateFillMesh(e,t);o&&e.add(o)}}generateFillMesh(e,t){var h,u;if(!e.userData.isClosed)return null;const n=e.children.filter(f=>f.userData.type==="bezier_line"&&!f.userData.isOffset);if(n.length<3)return null;const i=[];for(const f of n){const p=f.children.find(v=>v.userData.isCurve);if(!((u=(h=p==null?void 0:p.geometry)==null?void 0:h.attributes)!=null&&u.position))continue;const g=p.geometry.attributes.position;for(let v=0;v<g.count-1;v++)i.push(new j(g.getX(v),g.getZ(v)))}if(i.length<3)return null;const r=new Ji(i),a=new Qi(r);a.rotateX(Math.PI/2);const o=Math.round((t.opacity!==void 0?t.opacity:1)*100)/100,c=new Nt({color:new Ue(t.color||"#cccccc"),side:wt,opacity:o,transparent:o<1,depthWrite:o>=1}),l=new Ge(a,c);return l.name="Visual_Fill",l.userData.isGeneratedVisual=!0,l.frustumCulled=!1,l}sanitizeObjects(){this.objects.forEach(t=>{(t.scale.x!==1||t.scale.y!==1||t.scale.z!==1)&&(t.scale.set(1,1,1),t.updateMatrixWorld());let n=!1;(!Number.isFinite(t.position.x)||Math.abs(t.position.x)>5e4)&&(t.position.x=0,n=!0),(!Number.isFinite(t.position.y)||Math.abs(t.position.y)>5e4)&&(t.position.y=0,n=!0),(!Number.isFinite(t.position.z)||Math.abs(t.position.z)>5e4)&&(t.position.z=0,n=!0),n&&(console.warn(`ObjectManager: Rescued corrupted object "${t.name}" from extreme coordinates.`),t.updateMatrixWorld())})}selectObject(e,t=!1){t||(this.selectedObjects.forEach(n=>{this.setObjectHelperVisibility(n,!1),this.setAnchorColor(n,13421772)}),this.selectedObjects.clear()),e&&(t&&this.selectedObjects.has(e)?(this.selectedObjects.delete(e),this.setObjectHelperVisibility(e,!1),this.setAnchorColor(e,13421772)):(this.selectedObjects.add(e),this.setObjectHelperVisibility(e,!0),this.setAnchorColor(e,16711680))),this.eventBus.emit("selection-changed",Array.from(this.selectedObjects))}deselectAll(){this.objects.forEach(e=>{this.setObjectHelperVisibility(e,!1),this.setAnchorColor(e,13421772)}),this.selectedObjects.clear(),this.eventBus.emit("selection-changed",[])}setObjectHelperVisibility(e,t){e.traverse(n=>{n.userData.isControlPoint||n.userData.isHelperLine?n.visible=t:n.userData.isAnchor&&(n.userData.isMainAnchor?n.visible=!0:n.visible=t)})}setAnchorColor(e,t){const n=e.children.find(i=>i.userData.isAnchor&&i.userData.isMainAnchor);if(n){const i=n.material;i&&i.color&&i.color.setHex(t)}}getSelectedObjects(){return Array.from(this.selectedObjects)}getObjects(){return this.objects}addObject(e,t=!0){if(!e.name||e.name.startsWith("Object")||e.name.startsWith("Circle")||e.name.startsWith("Square")||e.name.startsWith("Line")){const n=e.userData.type;let i="Objekt";n==="line"?i="Linie":n==="square"?i="Rechteck":n==="circle"?i="Kreis":n==="background_image"?i="Bild":n==="bezier_path"&&(i=e.userData.isClosed?"Form":"Pfad");const r=this.objects.filter(a=>a.userData.type===n).length+1;e.name=`${i} ${r}`}!e.userData.materialParams&&e.userData.type!=="background_image"&&(e.userData.materialParams={color:"#cccccc",wireframe:!1,roughness:.5,metalness:.1,flatShading:!1,opacity:1}),e.userData.isSelectableRoot=!0,this.scene.add(e),this.objects.push(e),t&&this.selectObject(e),this.eventBus.emit("object-added",e)}removeObject(e){if(!e)return;e.traverse(n=>{n.geometry&&n.geometry.dispose(),n.material&&(Array.isArray(n.material)?n.material.forEach(i=>i.dispose()):n.material.dispose())}),this.scene.remove(e);const t=this.objects.indexOf(e);t>-1&&this.objects.splice(t,1),this.selectedObjects.delete(e),console.log(`ObjectManager: Object "${e.name}" and its visuals permanently removed.`),this.eventBus.emit("object-removed",e)}clearAll(){this.objects.forEach(e=>{this.scene.remove(e),e.traverse(t=>{t.geometry&&t.geometry.dispose(),t.material&&(Array.isArray(t.material)?t.material.forEach(n=>n.dispose()):t.material.dispose())})}),this.objects=[],this.selectedObjects.clear(),this.eventBus.emit("selection-changed",[]),this.eventBus.emit("objects-cleared",null)}}function ul(s,e=!1){const t=s[0].index!==null,n=new Set(Object.keys(s[0].attributes)),i=new Set(Object.keys(s[0].morphAttributes)),r={},a={},o=s[0].morphTargetsRelative,c=new tt;let l=0;for(let h=0;h<s.length;++h){const u=s[h];let f=0;if(t!==(u.index!==null))return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+". All geometries must have compatible attributes; make sure index attribute exists among all geometries, or in none of them."),null;for(const p in u.attributes){if(!n.has(p))return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+'. All geometries must have compatible attributes; make sure "'+p+'" attribute exists among all geometries, or in none of them.'),null;r[p]===void 0&&(r[p]=[]),r[p].push(u.attributes[p]),f++}if(f!==n.size)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+". Make sure all geometries have the same number of attributes."),null;if(o!==u.morphTargetsRelative)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+". .morphTargetsRelative must be consistent throughout all geometries."),null;for(const p in u.morphAttributes){if(!i.has(p))return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+".  .morphAttributes must be consistent throughout all geometries."),null;a[p]===void 0&&(a[p]=[]),a[p].push(u.morphAttributes[p])}if(e){let p;if(t)p=u.index.count;else if(u.attributes.position!==void 0)p=u.attributes.position.count;else return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+". The geometry must have either an index or a position attribute"),null;c.addGroup(l,p,h),l+=p}}if(t){let h=0;const u=[];for(let f=0;f<s.length;++f){const p=s[f].index;for(let g=0;g<p.count;++g)u.push(p.getX(g)+h);h+=s[f].attributes.position.count}c.setIndex(u)}for(const h in r){const u=Mc(r[h]);if(!u)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed while trying to merge the "+h+" attribute."),null;c.setAttribute(h,u)}for(const h in a){const u=a[h][0].length;if(u===0)break;c.morphAttributes=c.morphAttributes||{},c.morphAttributes[h]=[];for(let f=0;f<u;++f){const p=[];for(let v=0;v<a[h].length;++v)p.push(a[h][v][f]);const g=Mc(p);if(!g)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed while trying to merge the "+h+" morphAttribute."),null;c.morphAttributes[h].push(g)}}return c}function Mc(s){let e,t,n,i=-1,r=0;for(let l=0;l<s.length;++l){const h=s[l];if(h.isInterleavedBufferAttribute)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. InterleavedBufferAttributes are not supported."),null;if(e===void 0&&(e=h.array.constructor),e!==h.array.constructor)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.array must be of consistent array types across matching attributes."),null;if(t===void 0&&(t=h.itemSize),t!==h.itemSize)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.itemSize must be consistent across matching attributes."),null;if(n===void 0&&(n=h.normalized),n!==h.normalized)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.normalized must be consistent across matching attributes."),null;if(i===-1&&(i=h.gpuType),i!==h.gpuType)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.gpuType must be consistent across matching attributes."),null;r+=h.array.length}const a=new e(r);let o=0;for(let l=0;l<s.length;++l)a.set(s[l].array,o),o+=s[l].array.length;const c=new Rt(a,t,n);return i!==void 0&&(c.gpuType=i),c}function wi(s,e=1e-4){e=Math.max(e,Number.EPSILON);const t={},n=s.getIndex(),i=s.getAttribute("position"),r=n?n.count:i.count;let a=0;const o=Object.keys(s.attributes),c={},l={},h=[],u=["getX","getY","getZ","getW"],f=["setX","setY","setZ","setW"];for(let _=0,x=o.length;_<x;_++){const y=o[_],R=s.attributes[y];c[y]=new Rt(new R.array.constructor(R.count*R.itemSize),R.itemSize,R.normalized);const E=s.morphAttributes[y];E&&(l[y]=new Rt(new E.array.constructor(E.count*E.itemSize),E.itemSize,E.normalized))}const p=e*.5,g=Math.log10(1/e),v=Math.pow(10,g),m=p*v;for(let _=0;_<r;_++){const x=n?n.getX(_):_;let y="";for(let R=0,E=o.length;R<E;R++){const C=o[R],N=s.getAttribute(C),b=N.itemSize;for(let T=0;T<b;T++)y+=`${~~(N[u[T]](x)*v+m)},`}if(y in t)h.push(t[y]);else{for(let R=0,E=o.length;R<E;R++){const C=o[R],N=s.getAttribute(C),b=s.morphAttributes[C],T=N.itemSize,I=c[C],G=l[C];for(let Z=0;Z<T;Z++){const D=u[Z],B=f[Z];if(I[B](a,N[D](x)),b)for(let z=0,$=b.length;z<$;z++)G[z][B](a,b[z][D](x))}}t[y]=a,h.push(a),a++}}const d=s.clone();for(const _ in s.attributes){const x=c[_];if(d.setAttribute(_,new Rt(x.array.slice(0,a*x.itemSize),x.itemSize,x.normalized)),_ in l)for(let y=0;y<l[_].length;y++){const R=l[_][y];d.morphAttributes[_][y]=new Rt(R.array.slice(0,a*R.itemSize),R.itemSize,R.normalized)}}return d.setIndex(h),d}class $r{static convert(e){var u;const t=[];console.log(`MeshConverter: Starte Umwandlung für "${e.name}"...`),e.updateMatrixWorld(!0);const n=new at().copy(e.matrixWorld).invert();if(e.traverse(f=>{if(f instanceof Ge&&!f.userData.isGeneratedVisual&&!f.name.includes("Helper")&&f.name!=="Viz_Boundary"&&!f.userData.isHighlight&&f.geometry&&f.geometry.attributes.position&&f.geometry.attributes.position.count>0){const p=f.geometry.clone(),g=new at().multiplyMatrices(n,f.matrixWorld);p.applyMatrix4(g);const v=g.determinant();if(v<0&&p.index){const d=p.index;for(let _=0;_<d.count;_+=3){const x=d.getX(_),y=d.getX(_+1);d.setX(_,y),d.setX(_+1,x)}}this.snapGeometryToGrid(p);const m=new tt;m.setAttribute("position",p.getAttribute("position")),p.index&&m.setIndex(p.index),p.attributes.normal&&m.setAttribute("normal",p.getAttribute("normal")),p.attributes.uv&&m.setAttribute("uv",p.getAttribute("uv")),t.push(wi(m,.001)),console.log(`  -> Teil gefunden: ${f.name||"Hauptmesh"} (${p.attributes.position.count} Vertices, Mirrored: ${v<0})`)}}),t.length===0)return console.warn("MeshConverter: Keine gültigen Geometrien gefunden!"),null;let i=t.length===1?t[0]:ul(t,!1);i.deleteAttribute("normal"),i.deleteAttribute("uv"),i=wi(i,.1),i.computeVertexNormals();const r=this.countHoles(i);console.log("MeshConverter: Umwandlung abgeschlossen."),console.log(`- Teile verschmolzen: ${t.length}`),console.log(`- Finale Vertices: ${i.attributes.position.count}`),console.log(`- Löcher gefunden: ${r} ${r===0?"(Wasserdicht ✔)":"(WARNUNG ⚠)"}`);let a="#ff0000";(u=e.userData.materialParams)!=null&&u.color&&(a=e.userData.materialParams.color);const o=e.userData.materialParams||{},c=Math.round((o.opacity!==void 0?o.opacity:1)*100)/100,l=new qs({color:new Ue(o.color||a),side:wt,wireframe:o.wireframe!==void 0?o.wireframe:!1,roughness:o.roughness!==void 0?o.roughness:.5,metalness:o.metalness!==void 0?o.metalness:.1,flatShading:o.flatShading!==void 0?o.flatShading:!1,opacity:c,transparent:c<1,depthWrite:c>=1}),h=new Ge(i,l);return h.name=e.name+"_Mesh",h.position.set(0,0,0),h.rotation.set(0,0,0),h.scale.set(1,1,1),h.userData.type="converted_mesh",h.userData.isMesh=!0,h.userData.openEdgeCount=r,h.userData.materialParams={color:o.color||a,wireframe:o.wireframe!==void 0?o.wireframe:!1,roughness:o.roughness!==void 0?o.roughness:.5,metalness:o.metalness!==void 0?o.metalness:.1,flatShading:o.flatShading!==void 0?o.flatShading:!1,opacity:c},h}static snapGeometryToGrid(e){if(!e||!e.attributes||!e.attributes.position)return;const t=e.attributes.position,n=100;for(let i=0;i<t.count;i++)t.setXYZ(i,Math.round(t.getX(i)*n)/n,Math.round(t.getY(i)*n)/n,Math.round(t.getZ(i)*n)/n);t.needsUpdate=!0}static mergeAndCountHoles(e){const t=e.clone();t.deleteAttribute("normal"),t.deleteAttribute("uv");const n=wi(t,.1);return this.countHoles(n)}static countHoles(e){if(!e.index)return 0;const t=new Map,n=e.index;for(let r=0;r<n.count;r+=3){const a=n.getX(r),o=n.getX(r+1),c=n.getX(r+2);[[a,o],[o,c],[c,a]].forEach(([l,h])=>{const u=l<h?`${l}_${h}`:`${h}_${l}`;t.set(u,(t.get(u)||0)+1)})}let i=0;return t.forEach(r=>{r===1&&i++}),i}}class Ys{constructor(e){k(this,"eventBus");this.eventBus=e,this.eventBus.on("update-object-geometry",t=>this.applyModifiers(t)),this.eventBus.on("object-added",t=>{setTimeout(()=>this.applyModifiers(t),10)}),this.eventBus.on("convert-to-mesh",t=>{this.addModifier(t,"mesh_convert")})}addModifier(e,t){if(e.userData.modifiers||(e.userData.modifiers=[]),e.userData.modifiers.find(i=>i.type===t))return;let n={};t==="extrude"?n={height:50}:t==="lathe"?n={segments:32,phiStart:0,phiLength:Math.PI*2}:t==="face_delete"&&(n={faces:[]}),e.userData.modifiers.push({type:t,name:this.getModifierName(t),params:n,active:!0}),this.applyModifiers(e),this.eventBus.emit("modifier-changed",e)}getModifierName(e){switch(e){case"extrude":return"Extrudieren";case"lathe":return"Rotation";case"mesh_convert":return"In Mesh umwandeln";case"face_delete":return"Flächen entfernen";default:return"Unbekannter Modifikator"}}updateModifierParam(e,t,n,i){var r;(r=e.userData.modifiers)!=null&&r[t]&&(e.userData.modifiers[t].params[n]=i,this.applyModifiers(e),this.eventBus.emit("modifier-param-changed",e))}removeModifier(e,t){e.userData.modifiers&&e.userData.modifiers[t]&&(e.userData.modifiers.splice(t,1),this.applyModifiers(e),this.eventBus.emit("modifier-changed",e))}applyModifiers(e){this.cleanup(e);const t=e.userData.modifiers||[],n=t.find(c=>c.type==="extrude"&&c.active),i=t.find(c=>c.type==="lathe"&&c.active);let r=t.find(c=>c.type==="mesh_convert"&&c.active);const a=e.userData.materialParams;if(a&&a.color){const c=new Ue(a.color);e.children.forEach(l=>{if(l.userData.type==="bezier_line"){const h=l.children.find(u=>u.userData.isCurve);h&&h.material&&h.material.color.copy(c)}})}if(e.userData.type==="boolean_result"&&t.length===0)return;const o=c=>{const l=$r.convert(c);if(l){const h=t.find(u=>u.type==="face_delete"&&u.active);if(h&&h.params.faces.length>0){const u=l.geometry,f=new Set,p=h.params.faces;if(u.index){for(let m=0;m<u.index.count/3;m++){const d=Ys._getFaceCentroid(u,m);if(d){for(const _ of p)if(_.distanceTo(d)<.01){f.add(m);break}}}const g=[];for(let m=0;m<u.index.count;m+=3){const d=m/3;f.has(d)||g.push(u.index.getX(m),u.index.getY(m),u.index.getZ(m))}const v=new tt;v.setAttribute("position",u.attributes.position),u.attributes.normal&&v.setAttribute("normal",u.attributes.normal),u.attributes.uv&&v.setAttribute("uv",u.attributes.uv),v.setIndex(g),l.geometry.dispose(),l.geometry=v,l.geometry.attributes.position.needsUpdate=!0,l.geometry.attributes.normal&&(l.geometry.attributes.normal.needsUpdate=!0),l.geometry.attributes.uv&&(l.geometry.attributes.uv.needsUpdate=!0),l.geometry.index&&(l.geometry.index.needsUpdate=!0),l.material.needsUpdate=!0}}}return l};if(n){const c=this.getShape(e);if(c){const l=new Ta(c,{depth:n.params.height,bevelEnabled:!1});l.rotateX(-Math.PI/2);const h=new rt;h.userData.materialParams=e.userData.materialParams;const u=new Ge(l);h.add(u);const f=o(h);if(f){if(this.setOriginalVisibility(e,!1),f.userData.isGeneratedVisual=!0,e.add(f),a&&!a.wireframe){const p=new Wi(f.geometry),g=new Si(p,new Xt({color:0,transparent:!0,opacity:.3}));g.userData.isGeneratedVisual=!0,e.add(g)}e.userData.openEdgeCount=f.userData.openEdgeCount}}}else if(i){const c=this.getPointsForLathe(e);if(c.length>1){const l=new Ea(c,i.params.segments,i.params.phiStart,i.params.phiLength),h=(a==null?void 0:a.wireframe)===!0,u=new qs({color:new Ue((a==null?void 0:a.color)||13421772),side:wt,roughness:(a==null?void 0:a.roughness)||.5,metalness:(a==null?void 0:a.metalness)||.1,wireframe:h,transparent:!1,opacity:1}),f=new Ge(l,u);if(f.userData.isGeneratedVisual=!0,this.setOriginalVisibility(e,!1),e.add(f),a&&!a.wireframe){const p=new Wi(f.geometry),g=new Si(p,new Xt({color:0,transparent:!0,opacity:.3}));g.userData.isGeneratedVisual=!0,e.add(g)}e.userData.openEdgeCount=$r.countHoles(l)}}else if(r){const c=o(e);if(c){if(this.setOriginalVisibility(e,!1),c.userData.isGeneratedVisual=!0,e.add(c),a&&!a.wireframe){const l=new Wi(c.geometry),h=new Si(l,new Xt({color:0,transparent:!0,opacity:.3}));h.userData.isGeneratedVisual=!0,e.add(h)}e.userData.openEdgeCount=c.userData.openEdgeCount}}else{const c=t.find(l=>l.type==="face_delete"&&l.active);if(c){const l=e.children.find(h=>h.userData.isMesh&&!h.userData.isGeneratedVisual);if(l){const h=l.geometry.clone(),u=new Set,f=c.params.faces;if(h.index){for(let v=0;v<h.index.count/3;v++){const m=Ys._getFaceCentroid(h,v);if(m){for(const d of f)if(d.distanceTo(m)<.01){u.add(v);break}}}const p=[];for(let v=0;v<h.index.count;v+=3){const m=v/3;u.has(m)||p.push(h.index.getX(v),h.index.getY(v),h.index.getZ(v))}h.setIndex(p),h.computeVertexNormals(),h.attributes.position.needsUpdate=!0,h.attributes.normal&&(h.attributes.normal.needsUpdate=!0),h.attributes.uv&&(h.attributes.uv.needsUpdate=!0),h.index&&(h.index.needsUpdate=!0),l.material.needsUpdate=!0;const g=new Ge(h,l.material);g.userData.isGeneratedVisual=!0,this.setOriginalVisibility(e,!1),e.add(g),e.userData.openEdgeCount=$r.countHoles(h)}}else this.setOriginalVisibility(e,!0),e.userData.openEdgeCount=0}else if(this.setOriginalVisibility(e,!0),e.userData.openEdgeCount=0,a&&!a.wireframe){const l=this.getShape(e);if(l){const h=new Qi(l);h.rotateX(-Math.PI/2);const u=new qs({color:new Ue(a.color||13421772),side:wt,roughness:a.roughness||.5,metalness:a.metalness||.1,polygonOffset:!0,polygonOffsetFactor:1,polygonOffsetUnits:1}),f=new Ge(h,u);f.userData.isGeneratedVisual=!0,e.add(f)}}}e.updateMatrixWorld(!0)}getPointsForLathe(e){const t=e.children.filter(i=>i.userData.type==="bezier_line");if(t.length===0)return[];const n=[];return t.forEach(i=>{const r=i.children.find(o=>o.userData.isCurve);if(!r)return;const a=r.userData.curve;if(a){const o=a.type==="LineCurve3";a.getPoints(o?1:20).forEach(l=>{n.push(new j(l.x,l.y))})}}),n}getShape(e){var a,o,c;const t=e.children.filter(l=>l.userData.type==="bezier_line");if(t.length===0)return null;const n=[...t],i=[];for(;n.length>0;){const l=[];let h=n.shift();if(!h)break;for(l.push(h);;){const g=(a=l[l.length-1].userData.nodes)==null?void 0:a.end;if(l.length>1&&g===((o=l[0].userData.nodes)==null?void 0:o.start)||l.length===1&&g===((c=l[0].userData.nodes)==null?void 0:c.start)||!g)break;const v=n.findIndex(m=>{var d;return((d=m.userData.nodes)==null?void 0:d.start)===g});if(v!==-1)l.push(n[v]),n.splice(v,1);else break}const u=new Xs;let f=!0;l.forEach(p=>{const g=p.children.find(m=>m.userData.isCurve);if(!g)return;const v=g.userData.curve;if(v){const m=v.type==="LineCurve3",d=v.getPoints(m?1:20);f&&(u.moveTo(d[0].x,-d[0].z),f=!1);for(let _=1;_<d.length;_++)u.lineTo(d[_].x,-d[_].z)}}),u.closePath(),i.push(u)}if(i.length===0)return null;i.sort((l,h)=>{const u=f=>{const p=f.getPoints();if(p.length===0)return 0;let g=1/0,v=-1/0,m=1/0,d=-1/0;return p.forEach(_=>{_.x<g&&(g=_.x),_.x>v&&(v=_.x),_.y<m&&(m=_.y),_.y>d&&(d=_.y)}),(v-g)*(d-m)};return u(h)-u(l)});const r=new Ji(i[0].getPoints());for(let l=1;l<i.length;l++)r.holes.push(new Xs(i[l].getPoints()));return r}cleanup(e){for(let t=e.children.length-1;t>=0;t--)if(e.children[t].userData.isGeneratedVisual){const n=e.children[t];n.geometry&&n.geometry.dispose(),n.material&&(Array.isArray(n.material)?n.material.forEach(i=>i.dispose()):n.material.dispose()),e.remove(e.children[t])}}setOriginalVisibility(e,t){e.traverse(n=>{if(n!==e&&!n.userData.isGeneratedVisual){if(n.userData.isNode||n.userData.isControlPoint||n.userData.isHelperLine||n.userData.isAnchor)return;(n.userData.generated||n.userData.isCurve||n.userData.isOffset)&&(n.visible=t),n.userData.type==="bezier_line"&&(n.visible=!0)}})}static _getFaceCentroid(e,t){const n=e.attributes.position,i=e.index?e.index.array:null;if(!i)return null;const r=i[t*3],a=i[t*3+1],o=i[t*3+2],c=new M(n.getX(r),n.getY(r),n.getZ(r)),l=new M(n.getX(a),n.getY(a),n.getZ(a)),h=new M(n.getX(o),n.getY(o),n.getZ(o));return c.add(l).add(h).divideScalar(3)}}function vg(){const s=new Cm;s.background=new Ue(3355443);const e=new dg,t=new gg(e,s),n=new mg(e,"app",s),i=new Ys(e);return{scene:s,eventBus:e,objectManager:t,viewManager:n,modifierManager:i}}class _g{constructor(e){k(this,"baseUrl");this.baseUrl=`http://${e}`}async sendGcode(e){try{return(await fetch(`${this.baseUrl}/rr_gcode?gcode=${encodeURIComponent(e)}`)).ok}catch(t){return console.error("Failed to send G-Code:",t),!1}}async getMachineStatus(){try{return await(await fetch(`${this.baseUrl}/rr_status?type=3`)).json()}catch(e){return console.error("Failed to get machine status:",e),null}}}class xg{constructor(e){k(this,"duetClient");console.log(`Robot instance created for IP: ${e}`),this.duetClient=new _g(e)}async calibrateZAxis(){console.log("Starting Z-Axis calibration..."),await this.duetClient.sendGcode('M98 P"0:/macros/calibrate_z.g"')}async paint(e){return console.log("Sending G-Code to the machine..."),await this.duetClient.sendGcode(e)?console.log("G-Code sent successfully."):console.error("Failed to send G-Code."),Promise.resolve()}}class yg{constructor(e){k(this,"scene");k(this,"brushMesh",null);k(this,"wireframe",null);k(this,"group");k(this,"profile",{p1:new j(0,0),cp1:new j(10,-15),cp2:new j(15,-45),p0:new j(0,-60)});this.scene=e,this.group=new rt,this.group.name="DavinciPinsel1_Group",this.scene.add(this.group)}update(e,t,n){this.clear(),e.bezierProfile&&(this.profile=e.bezierProfile),this.createBezierLatheBrush(e,t,n)}createBezierLatheBrush(e,t,n){const i=e.color||"#cccccc",r=e.transparency!==void 0?e.transparency:1,a=Math.abs(this.profile.p0.y-this.profile.p1.y);let o=0,c=a;t&&t.y<a&&(c=Math.max(2,t.y),o=(a-c)/a);let l=new M;n&&n.length()>.001&&l.copy(n).multiplyScalar(-20),o>0||l.set(0,0,0);const u=a,f=new M(0,0,0),p=Math.sqrt(Math.max(0,Math.pow(u,2)-Math.pow(c,2)));l.length()>p&&l.setLength(p);const g=new M(l.x*.005,-u*.4,l.z*.005),v=new M(l.x*.4,-u*.8,l.z*.4),m=new M(l.x,-c,l.z),d=new _i(f,g,v,m),_=d.getPoints(24),x=this.profile.p0.y-this.profile.p1.y,y=I=>x===0?0:(I-this.profile.p1.y)/x,R=new Sa(new j(this.profile.p1.x,y(this.profile.p1.y)),new j(this.profile.cp1.x,y(this.profile.cp1.y)),new j(this.profile.cp2.x,y(this.profile.cp2.y)),new j(this.profile.p0.x,y(this.profile.p0.y))),E=16,C=[],N=[];for(let I=0;I<_.length;I++){const G=I/(_.length-1),Z=R.getPoint(G),D=Z.x,B=Z.y,z=d.getPoint(B),$=d.getTangent(B).normalize(),K=Math.abs($.y)<.9?new M(0,1,0):new M(1,0,0),J=new M().crossVectors($,K).normalize(),Q=new M().crossVectors(J,$).normalize();for(let ne=0;ne<E;ne++){const ce=ne/E*Math.PI*2,X=z.clone().add(Q.clone().multiplyScalar(Math.cos(ce)*D)).add(J.clone().multiplyScalar(Math.sin(ce)*D));if(C.push(X),I<_.length-1){const ee=I+1,pe=(ne+1)%E,Se=I*E+ne,ve=ee*E+ne,De=ee*E+pe,Oe=I*E+pe;N.push(Se,ve,Oe,ve,De,Oe)}}}const b=new tt().setFromPoints(C);b.setIndex(N),b.computeVertexNormals(),this.brushMesh=new Ge(b,new qs({color:new Ue(i),transparent:r<1,opacity:r,roughness:.6,metalness:.1,side:wt})),this.brushMesh.position.set(0,0,0);const T=new Wi(b);this.wireframe=new Si(T,new Xt({color:16777215,transparent:!0,opacity:.2})),this.brushMesh.add(this.wireframe),this.group.add(this.brushMesh)}clear(){for(;this.group.children.length>0;){const e=this.group.children[0];e.geometry&&e.geometry.dispose(),e.material&&(Array.isArray(e.material)?e.material.forEach(t=>t.dispose()):e.material.dispose()),this.group.remove(e)}this.brushMesh=null,this.wireframe=null}setVisible(e){this.group.visible=e}}class Mg extends gt{constructor(e=1){super(),this.initAxes(e)}initAxes(e){const t=new M(0,0,0),n=new M(1,0,0),i=new Yr(n,t,e,16711680,.2*e,.1*e);this.makeOnTop(i),this.add(i),this.addLabel(e+.1*e,0,0,"X","red");const r=new M(0,1,0),a=new Yr(r,t,e,65280,.2*e,.1*e);this.makeOnTop(a),this.add(a),this.addLabel(0,e+.1*e,0,"Y","green");const o=new M(0,0,1),c=new Yr(o,t,e,6711039,.2*e,.1*e);this.makeOnTop(c),this.add(c),this.addLabel(0,0,e+.1*e,"Z","#6666ff")}makeOnTop(e){if(e.line){e.line.renderOrder=999;const t=e.line.material;e.line.material=new Xt({color:t.color,depthTest:!1,depthWrite:!1,transparent:!0,opacity:1,toneMapped:!1}),t.dispose()}if(e.cone){e.cone.renderOrder=999;const t=e.cone.material;e.cone.material=new Nt({color:t.color,depthTest:!1,depthWrite:!1,transparent:!0,opacity:1,toneMapped:!1}),t.dispose()}}addLabel(e,t,n,i,r){const a=document.createElement("canvas");a.width=64,a.height=64;const o=a.getContext("2d");o&&(o.font="Bold 48px Arial",o.textAlign="center",o.textBaseline="middle",o.fillStyle=r,o.fillText(i,32,32));const c=new nr(a),l=new pn({map:c,depthTest:!1,depthWrite:!1}),h=new qi(l);h.position.set(e,t,n),h.scale.set(.5,.5,1),this.add(h)}update(e){let t=1;e instanceof bt?t=this.position.distanceTo(e.position)*.04:e instanceof Ft&&(t=1/e.zoom*50),t=Math.max(.1,t),this.scale.set(t,t,t)}}const bg=`
  varying vec3 worldPosition;
  void main() {
    worldPosition = position; // Use object-local position
    gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
  }
`,Sg=`
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
        coord = worldPosition.zy;
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
`,mi=16e3;function Kr(s,e,t){return new Pn({vertexShader:bg,fragmentShader:Sg,transparent:!1,alphaTest:.1,side:wt,depthWrite:!1,uniforms:{size1:{value:e},size2:{value:t},color1:{value:new Ue(11184810)},color2:{value:new Ue(6710886)},axis:{value:s}}})}class Eg{constructor(e,t,n){k(this,"eventBus");k(this,"viewManager");k(this,"scene");k(this,"gridTop",null);k(this,"gridFront",null);k(this,"gridLeft",null);k(this,"stepSize",10);k(this,"majorStep",100);this.eventBus=e,this.viewManager=t,this.scene=n,this.createGrids(),this.initListeners()}createGrids(){this.clearGrids();const e=new Cn(mi,mi,1,1).rotateX(Math.PI/2),t=Kr(0,this.stepSize,this.majorStep);this.gridTop=new Ge(e,t),this.gridTop.position.y=-.05,this.gridTop.renderOrder=-100,this.scene.add(this.gridTop);const n=new Cn(mi,mi,1,1),i=Kr(1,this.stepSize,this.majorStep);this.gridFront=new Ge(n,i),this.gridFront.position.z=-.05,this.gridFront.renderOrder=-100,this.scene.add(this.gridFront);const r=new Cn(mi,mi,1,1).rotateY(Math.PI/2),a=Kr(2,this.stepSize,this.majorStep);this.gridLeft=new Ge(r,a),this.gridLeft.position.x=-.05,this.gridLeft.renderOrder=-100,this.scene.add(this.gridLeft),this.updateGridVisibility()}clearGrids(){this.gridTop&&(this.scene.remove(this.gridTop),this.gridTop.geometry.dispose(),this.gridTop.material.dispose()),this.gridFront&&(this.scene.remove(this.gridFront),this.gridFront.geometry.dispose(),this.gridFront.material.dispose()),this.gridLeft&&(this.scene.remove(this.gridLeft),this.gridLeft.geometry.dispose(),this.gridLeft.material.dispose())}initListeners(){this.eventBus.on("camera-view-changed",this.updateGridVisibility.bind(this)),this.eventBus.on("settings-grid-changed",e=>{this.stepSize=e.step,this.majorStep=e.step*10,this.createGrids()}),this.eventBus.on("settings-grid-color-changed",e=>{const t=new Ue(e.color);this.gridTop&&(this.gridTop.material.uniforms.color2.value=t),this.gridFront&&(this.gridFront.material.uniforms.color2.value=t),this.gridLeft&&(this.gridLeft.material.uniforms.color2.value=t)})}updateGridVisibility(){if(!this.gridTop||!this.gridFront||!this.gridLeft)return;const e=this.viewManager.getActiveView?this.viewManager.getActiveView():ut.PERSPECTIVE;this.gridTop.visible=e===ut.TOP||e===ut.PERSPECTIVE,this.gridFront.visible=e===ut.FRONT,this.gridLeft.visible=e===ut.LEFT}}function wg(s,e,t){const n=new xg("192.168.1.123"),i=new yg(s);e.on("request-3d-brush-update",g=>{i.update(g)}),i.setVisible(!1);let r={type:"Rundpinsel",diameter:10,length:30,color:"#cccccc",transparency:.8,isProfileActive:!1,showMachineBrush:!1,bezierProfile:null};const a=new M(0,30,0),o=new M(0,30,0),c=new M(0,0,0),l=new ug(16777215,.6);s.add(l);const h=new hg(16777215,.8);h.position.set(50,100,70),s.add(h);const u=new Mg(1);s.add(u),new Eg(e,t,s);const f=()=>({p1:new j(0,0),cp1:new j(10,-15),cp2:new j(15,-45),p0:new j(0,-60)});e.on("request-brush-state-sync",g=>{g(r)}),e.on("load-brush-state",g=>{g&&(Object.assign(r,g),g.bezierProfile===null?r.bezierProfile=f():g.bezierProfile&&(r.bezierProfile={p1:new j(g.bezierProfile.p1.x,g.bezierProfile.p1.y),cp1:new j(g.bezierProfile.cp1.x,g.bezierProfile.cp1.y),cp2:new j(g.bezierProfile.cp2.x,g.bezierProfile.cp2.y),p0:new j(g.bezierProfile.p0.x,g.bezierProfile.p0.y)}),i.update(r,a),e.emit("brush-state-changed",r))}),e.on("brush-state-changed",g=>{Object.assign(r,g),e.emit("request-active-tool-id",v=>{v&&v!=="select"||!r.showMachineBrush?i.setVisible(!1):(i.setVisible(!0),i.update(r,a))})}),e.on("save-brush-profile",g=>{var m;const v=g.children.filter(d=>d.userData.type==="bezier_line");if(v.length>0){const d=v[0],_=d.userData.nodes,x=d.userData.helpers;if(_&&x){const y=new j(_.start.position.x,_.start.position.y),R=new j(x.cp1.position.x,x.cp1.position.y),E=new j(x.cp2.position.x,x.cp2.position.y),C=new j(_.end.position.x,_.end.position.y);r.bezierProfile={p1:y,cp1:R,cp2:E,p0:C},r.color="#"+(((m=g.userData.materialParams)==null?void 0:m.color)||"cccccc").replace("#",""),r.isProfileActive=!0,i.update(r,a),r.showMachineBrush&&i.setVisible(!0)}}}),e.on("interaction-pointer-move",g=>{e.emit("request-active-tool-id",v=>{if(v&&v!=="select"||!r.showMachineBrush){i.setVisible(!1);return}if(i.setVisible(!0),g.intersection){const{x:d,y:_,z:x}=g.intersection;let y=30;const R=t.getActiveView();R==="PERSPECTIVE"||R==="TOP"?y=(g.pointer.y+1)*30:y=_,o.copy(a),a.set(d,y,x);const E=new M().subVectors(a,o);E.y=0,E.length()<.01&&E.set(0,0,0),c.lerp(E,.15);const C=c.clone().multiplyScalar(2).clampLength(0,20);i.group.position.set(d,y,x),i.update(r,a,C)}})}),e.on("camera-change",()=>{const g=t.getActiveCamera();g&&u.update(g)});const p=t.getActiveCamera();return p&&u.update(p),i.update(r,a),console.log("Machine and Simulation module initialized."),{robot:n,machineBrush:i}}class Tg{constructor(){k(this,"panel");k(this,"logContainer");k(this,"visible",!1);k(this,"originalConsole",{log:console.log.bind(console),warn:console.warn.bind(console),error:console.error.bind(console),info:console.info.bind(console)});this.panel=this.createPanel(),this.logContainer=this.panel.querySelector(".debug-log"),this.interceptConsoleMethods(),document.body.appendChild(this.panel)}toggle(){this.visible=!this.visible,this.panel.style.display=this.visible?"flex":"none"}destroy(){console.log=this.originalConsole.log,console.warn=this.originalConsole.warn,console.error=this.originalConsole.error,console.info=this.originalConsole.info,this.panel.remove()}createPanel(){const e=document.createElement("div");Object.assign(e.style,{position:"fixed",bottom:"30px",left:"50%",transform:"translateX(-50%)",width:"780px",maxWidth:"95vw",height:"280px",background:"#1a1a1a",border:"1px solid #555",borderRadius:"6px",display:"none",flexDirection:"column",zIndex:"9999",fontFamily:"monospace",fontSize:"12px",boxShadow:"0 4px 24px rgba(0,0,0,0.7)"});const t=document.createElement("div");Object.assign(t.style,{display:"flex",alignItems:"center",justifyContent:"space-between",padding:"4px 10px",background:"#2a2a2a",borderBottom:"1px solid #444",borderRadius:"6px 6px 0 0",cursor:"move",userSelect:"none"});const n=document.createElement("span");n.textContent="Debug Console",n.style.cssText="color: #ccc; font-size: 12px; font-weight: bold;";const i=document.createElement("div");i.style.display="flex",i.style.gap="6px";const r=document.createElement("button");r.textContent="Clear",r.style.cssText="background:#333; color:#aaa; border:1px solid #555; padding:1px 8px; font-size:11px; cursor:pointer; border-radius:3px;";const a=document.createElement("button");a.textContent="✕",a.style.cssText="background:#333; color:#aaa; border:1px solid #555; padding:1px 6px; font-size:11px; cursor:pointer; border-radius:3px;",i.appendChild(r),i.appendChild(a),t.appendChild(n),t.appendChild(i);const o=document.createElement("div");return o.className="debug-log",Object.assign(o.style,{flex:"1",overflowY:"auto",padding:"6px 10px",color:"#ddd",lineHeight:"1.5"}),e.appendChild(t),e.appendChild(o),r.onclick=()=>{o.innerHTML=""},a.onclick=()=>{this.visible=!1,e.style.display="none"},this.makeDraggable(e,t),e}appendEntry(e,t){const n=document.createElement("div"),i={log:"#ddd",info:"#7cf",warn:"#fc7",error:"#f77"};n.style.cssText=`color:${i[e]}; border-bottom:1px solid #2a2a2a; padding:1px 0; white-space:pre-wrap; word-break:break-all;`;const r=e!=="log"?`[${e.toUpperCase()}] `:"";n.textContent=r+t.map(a=>{if(typeof a=="object")try{return JSON.stringify(a,null,2)}catch{return String(a)}return String(a)}).join(" "),this.logContainer.appendChild(n),this.logContainer.scrollTop=this.logContainer.scrollHeight}interceptConsoleMethods(){["log","warn","error","info"].forEach(t=>{const n=this.originalConsole[t];console[t]=(...i)=>{n(...i),this.appendEntry(t,i)}})}makeDraggable(e,t){let n=!1,i=0,r=0,a=0,o=0;const c=h=>{n&&(e.style.left=a+h.clientX-i+"px",e.style.top=o+h.clientY-r+"px")},l=()=>{n=!1};t.addEventListener("mousedown",h=>{n=!0;const u=e.getBoundingClientRect();i=h.clientX,r=h.clientY,a=u.left,o=u.top,e.style.transform="none",e.style.left=a+"px",e.style.top=o+"px",e.style.bottom="auto",h.preventDefault()}),document.addEventListener("mousemove",c),document.addEventListener("mouseup",l)}}class Ag{constructor(e){k(this,"eventBus");k(this,"leftToolbar");k(this,"topToolbar");k(this,"bottomToolbar");k(this,"imageFileInput");k(this,"projectFileInput");k(this,"projectNameDisplay");k(this,"debugConsole");k(this,"selectButton");k(this,"orbitButton");k(this,"isSelectToolActive",!1);k(this,"perspectiveSelectMode",!1);this.eventBus=e,this.debugConsole=new Tg,this.createToolbars(),this.initListeners(),setTimeout(()=>this.eventBus.emit("request-project-name",null),100)}createToolbars(){this.topToolbar=document.createElement("div"),Object.assign(this.topToolbar.style,{position:"absolute",top:"0",left:"0",width:"100%",height:"40px",display:"flex",alignItems:"center",gap:"10px",background:"#222",padding:"0 10px",borderBottom:"1px solid #444",zIndex:"4000",boxSizing:"border-box"}),document.body.appendChild(this.topToolbar),this.leftToolbar=document.createElement("div"),Object.assign(this.leftToolbar.style,{position:"absolute",top:"40px",left:"0",width:"35px",height:"calc(100% - 70px)",display:"flex",flexDirection:"column",alignItems:"center",gap:"10px",background:"#222",padding:"10px 0",borderRight:"1px solid #444",zIndex:"3000",boxSizing:"border-box"}),document.body.appendChild(this.leftToolbar),this.bottomToolbar=document.createElement("div"),Object.assign(this.bottomToolbar.style,{position:"fixed",bottom:"0",left:"0",width:"100%",height:"30px",display:"flex",alignItems:"center",gap:"15px",background:"#222",padding:"0 10px",borderTop:"1px solid #444",zIndex:"3000",boxSizing:"border-box"}),document.body.appendChild(this.bottomToolbar),this.createMenuButton("...",[{label:"Neues Projekt",action:()=>this.eventBus.emit("new-project",null)},{label:"Projekt laden",action:()=>this.triggerProjectLoad()},{label:"Projekt speichern",action:()=>this.eventBus.emit("save-project",null)},{label:"Speichern unter...",action:()=>this.eventBus.emit("save-project-as",null)},{label:"Exportieren (STL)",action:()=>this.eventBus.emit("export-stl",null)},{label:"Hintergrundbild laden",action:()=>this.triggerImageUpload()},{label:"Einstellungen",action:()=>this.eventBus.emit("open-settings",null)}],this.topToolbar);const e=document.createElement("button");e.title="Ausgewählte Objekte löschen (Entf)",e.innerHTML="🗑️",Object.assign(e.style,{width:"25px",height:"25px",cursor:"pointer",border:"1px solid #555",background:"#333",color:"white",borderRadius:"4px",transition:"all 0.2s",fontSize:"14px",marginLeft:"5px",display:"flex",alignItems:"center",justifyContent:"center",lineHeight:"1"}),e.onclick=()=>{this.eventBus.emit("delete-selected-object",null)},this.topToolbar.appendChild(e);const t=document.createElement("div");t.style.cssText="width: 1px; height: 20px; background: #555; margin: 0 5px;",this.topToolbar.appendChild(t),this.selectButton=document.createElement("button"),this.selectButton.innerHTML="➤",this.selectButton.title="Selektieren (V)",this.selectButton.dataset.id="select",Object.assign(this.selectButton.style,{width:"25px",height:"25px",fontSize:"14px",cursor:"pointer",border:"1px solid #555",background:"#333",color:"#888",borderRadius:"4px",transition:"all 0.2s"}),this.selectButton.onclick=x=>{if(x.stopPropagation(),!this.isSelectToolActive)this.eventBus.emit("tool-selected","select");else{const y=this.perspectiveSelectMode?"orbit":"select";this.eventBus.emit("perspective-mode-changed",y)}},this.topToolbar.appendChild(this.selectButton);const n=document.createElement("button");n.title="Rasterfang (Snap)",n.innerHTML=`
        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" style="display:block; margin:auto;">
            <path d="M6 9 V 15 A 6 6 0 0 0 18 15 V 9" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" />
            <rect x="3" y="4" width="6" height="5" fill="currentColor" />
            <rect x="15" y="4" width="6" height="5" fill="currentColor" />
        </svg>`,Object.assign(n.style,{width:"25px",height:"25px",cursor:"pointer",border:"1px solid #555",background:"#333",color:"#888",borderRadius:"4px",transition:"all 0.2s",padding:"0"});let i=!1;const r=()=>{i?(n.style.background="#007acc",n.style.borderColor="#00aaff",n.style.color="white"):(n.style.background="#333",n.style.borderColor="#555",n.style.color="#888")};n.onclick=()=>{i=!i,this.eventBus.emit("toggle-snap",i),r()},r(),this.topToolbar.appendChild(n);const a=document.createElement("div");Object.assign(a.style,{position:"absolute",left:"50%",transform:"translateX(-50%)",display:"flex",alignItems:"center",gap:"15px"}),this.projectNameDisplay=document.createElement("div"),Object.assign(this.projectNameDisplay.style,{color:"#ffffff",fontSize:"13px",fontWeight:"bold",fontFamily:"Arial, sans-serif",pointerEvents:"none"}),this.projectNameDisplay.innerText="Lade...",a.appendChild(this.projectNameDisplay);const o=document.createElement("button");o.innerHTML="🖌️ 1",o.title="Maschinenpinsel",Object.assign(o.style,{height:"25px",cursor:"pointer",border:"1px solid #555",background:"#333",color:"white",borderRadius:"4px",fontSize:"13px",padding:"0 10px",display:"flex",alignItems:"center",justifyContent:"center"}),o.onclick=()=>{this.eventBus.emit("tool-selected","machine_brush_view"),this.eventBus.emit("open-brush-properties",null)},a.appendChild(o),this.topToolbar.appendChild(a);const c=document.createElement("div");c.style.cssText="margin-left: auto; display: flex; align-items: center; gap: 10px;",this.topToolbar.appendChild(c);const l=document.createElement("button"),h=()=>{l.innerHTML=document.fullscreenElement?'<svg width="14" height="14" viewBox="0 0 24 24" fill="none" style="display:block;margin:auto;"><path d="M8 3H5a2 2 0 0 0-2 2v3M21 8V5a2 2 0 0 0-2-2h-3M3 16v3a2 2 0 0 0 2 2h3M16 21h3a2 2 0 0 0 2-2v-3" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"/></svg>':'<svg width="14" height="14" viewBox="0 0 24 24" fill="none" style="display:block;margin:auto;"><path d="M3 8V5a2 2 0 0 1 2-2h3M16 3h3a2 2 0 0 1 2 2v3M21 16v3a2 2 0 0 1-2 2h-3M8 21H5a2 2 0 0 1-2-2v-3" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"/></svg>',l.title=document.fullscreenElement?"Vollbild beenden (F11)":"Vollbild (F11)"};Object.assign(l.style,{width:"25px",height:"25px",cursor:"pointer",border:"1px solid #555",background:"#333",color:"white",borderRadius:"4px",transition:"all 0.2s",padding:"0"}),l.onclick=()=>{document.fullscreenElement?document.exitFullscreen().catch(()=>{}):document.documentElement.requestFullscreen().catch(()=>{})},document.addEventListener("fullscreenchange",h),h(),c.appendChild(l);const u=document.createElement("div");u.style.cssText="display: flex; align-items: center; gap: 5px; border-left: 1px solid #555; padding-left: 10px;",c.appendChild(u);const f=document.createElement("div");f.style.cssText="margin-left: 10px; display: flex; align-items: center; gap: 5px; border-left: 1px solid #555; padding-left: 10px;",c.appendChild(f);const p=document.createElement("button");p.innerHTML="📝",p.title="G-Code generieren",Object.assign(p.style,{width:"30px",height:"25px",cursor:"pointer",border:"1px solid #555",background:"#333",color:"white",borderRadius:"4px",fontSize:"16px",display:"flex",alignItems:"center",justifyContent:"center"}),p.onclick=()=>{this.eventBus.emit("cnc-generate-gcode",null)},f.appendChild(p);const g=document.createElement("button");g.innerHTML="▶️",g.title="Malprozess starten",Object.assign(g.style,{width:"30px",height:"25px",cursor:"pointer",border:"1px solid #555",background:"#333",color:"white",borderRadius:"4px",fontSize:"16px",display:"flex",alignItems:"center",justifyContent:"center"}),g.onclick=()=>{this.eventBus.emit("cnc-start-painting",null)},f.appendChild(g),this.addButton("line","─","Linie (L)",this.leftToolbar),this.addButton("square","■","Quadrat (S)",this.leftToolbar),this.addButton("circle","●","Kreis (C)",this.leftToolbar),this.addButton("brush_create","🖌️","Pinsel-Kreator",this.leftToolbar,()=>{setTimeout(()=>{this.eventBus.emit("open-brush-properties",null)},0)});const v=document.createElement("div");v.style.cssText="width: 80%; height: 1px; background: #444; margin: 5px 0;",this.leftToolbar.appendChild(v);const m=document.createElement("div");Object.assign(m.style,{position:"absolute",left:"50%",transform:"translateX(-50%)",display:"flex",alignItems:"center"}),this.bottomToolbar.appendChild(m),this.orbitButton=document.createElement("button"),this.orbitButton.title="Kamera-Orbit (Perspektivansicht) – Selektion deaktiviert",this.orbitButton.innerHTML=`<svg width="16" height="16" viewBox="0 0 24 24" fill="none" style="display:block;margin:auto;">
            <path d="M20 12 A 8 8 0 1 1 12 4" stroke="currentColor" stroke-width="2.5" stroke-linecap="round"/>
            <polyline points="12,1 12,5 16,5" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"/>
        </svg>`,Object.assign(this.orbitButton.style,{width:"25px",height:"25px",cursor:"pointer",border:"1px solid #555",background:"#007acc",color:"white",borderRadius:"4px",transition:"all 0.2s",padding:"0"}),this.orbitButton.onclick=()=>{this.eventBus.emit("perspective-mode-changed","orbit")},m.appendChild(this.orbitButton);const d=document.createElement("div");d.style.flexGrow="1",this.bottomToolbar.appendChild(d);const _=document.createElement("button");_.innerHTML="⌖",_.title="Ansicht zentrieren",_.style.cssText="width: 25px; height: 25px; background: #444; color: white; border: 1px solid #555; padding: 0; font-size: 16px; cursor: pointer; border-radius: 3px; display: flex; align-items: center; justify-content: center;",_.onclick=()=>this.eventBus.emit("ui-focus-clicked",null),this.bottomToolbar.appendChild(_),this.imageFileInput=document.createElement("input"),this.imageFileInput.type="file",this.imageFileInput.accept="image/*",this.imageFileInput.style.display="none",this.imageFileInput.onchange=x=>this.handleImageUpload(x),document.body.appendChild(this.imageFileInput),this.projectFileInput=document.createElement("input"),this.projectFileInput.type="file",this.projectFileInput.accept="application/json",this.projectFileInput.style.display="none",this.projectFileInput.onchange=x=>this.handleProjectUpload(x),document.body.appendChild(this.projectFileInput)}createMenuButton(e,t,n){const i=document.createElement("div");i.style.position="relative",i.style.display="inline-block";const r=document.createElement("button");r.innerText=e,r.style.cssText="background: #333; color: white; border: 1px solid #555; padding: 5px 10px; font-size: 12px; cursor: pointer; border-radius: 4px;";const a=document.createElement("div");Object.assign(a.style,{position:"absolute",top:"100%",left:"0",background:"#333",border:"1px solid #555",minWidth:"150px",display:"none",zIndex:"10000",flexDirection:"column",marginTop:"2px",boxShadow:"2px 2px 5px rgba(0,0,0,0.5)"}),t.forEach(o=>{const c=document.createElement("div");c.innerText=o.label,Object.assign(c.style,{padding:"8px 10px",cursor:"pointer",color:"#eee",fontSize:"12px",borderBottom:"1px solid #444"}),c.onmouseenter=()=>c.style.background="#444",c.onmouseleave=()=>c.style.background="#333",c.onclick=()=>{a.style.display="none",o.action()},a.appendChild(c)}),r.onclick=o=>{o.stopPropagation();const c=a.style.display==="flex";document.querySelectorAll(".toolbar-menu").forEach(l=>l.style.display="none"),a.style.display=c?"none":"flex"},window.addEventListener("click",()=>{a.style.display="none"}),a.classList.add("toolbar-menu"),i.appendChild(r),i.appendChild(a),n.appendChild(i)}triggerImageUpload(){this.imageFileInput.click()}async triggerProjectLoad(){if(window.showOpenFilePicker)try{const[e]=await window.showOpenFilePicker({types:[{description:"JSON-Projektdateien",accept:{"application/json":[".json"]}}],multiple:!1});this.eventBus.emit("load-project-from-handle",e)}catch(e){if(e.name==="AbortError")return;console.error("Error loading file via API:",e),this.projectFileInput.click()}else this.projectFileInput.click()}handleProjectUpload(e){const t=e.target;if(t.files&&t.files[0]){const n=t.files[0];this.eventBus.emit("load-project",n)}t.value=""}handleImageUpload(e){const t=e.target;if(t.files&&t.files[0]){const n=t.files[0],i=new FileReader;i.onload=r=>{var o;const a=new Image;a.onload=()=>{const c=new Pt(a);c.needsUpdate=!0;const l=a.width/a.height,h=200,u=200/l;this.eventBus.emit("create-background-image",{texture:c,width:h,height:u})},a.onerror=()=>{console.error("Toolbar: Image failed to load. The data URL might be corrupt or invalid.")},a.src=(o=r.target)==null?void 0:o.result},i.onerror=()=>{console.error("Toolbar: FileReader failed to read the file.")},i.readAsDataURL(n)}t.value=""}addButton(e,t,n,i,r){const a=document.createElement("button");a.innerHTML=t,a.title=n,a.dataset.id=e,Object.assign(a.style,{width:"25px",height:"25px",fontSize:"14px",cursor:"pointer",border:"1px solid #555",background:"#333",color:"white",borderRadius:"4px",transition:"all 0.2s"}),a.onclick=o=>{o.stopPropagation(),this.eventBus.emit("tool-selected",e),r&&r()},i.appendChild(a)}updateSelectBtnState(){this.selectButton&&(this.isSelectToolActive&&this.perspectiveSelectMode?(this.selectButton.style.background="#007acc",this.selectButton.style.borderColor="#00aaff",this.selectButton.style.color="white",this.selectButton.title="Selektieren (V) – Auswahlmodus aktiv"):(this.selectButton.style.background="#333",this.selectButton.style.borderColor="#555",this.selectButton.style.color="#888",this.selectButton.title="Selektieren (V)"))}updateOrbitBtnState(){if(!this.orbitButton)return;!this.perspectiveSelectMode?(this.orbitButton.style.background="#007acc",this.orbitButton.style.borderColor="#00aaff",this.orbitButton.style.color="white"):(this.orbitButton.style.background="#333",this.orbitButton.style.borderColor="#555",this.orbitButton.style.color="#888")}initListeners(){this.eventBus.on("tool-active-changed",e=>{this.isSelectToolActive=e==="select",this.isSelectToolActive||(this.perspectiveSelectMode=!1),this.updateActiveState(e),this.updateSelectBtnState(),this.updateOrbitBtnState()}),this.eventBus.on("perspective-mode-changed",e=>{this.perspectiveSelectMode=e==="select",this.updateSelectBtnState(),this.updateOrbitBtnState()}),this.eventBus.on("project-name-changed",e=>{this.projectNameDisplay&&(this.projectNameDisplay.innerText=e)})}updateActiveState(e){document.querySelectorAll("button[data-id]").forEach(n=>{const i=n;i.dataset.id===e?(i.style.background="#007acc",i.style.borderColor="#00aaff"):(i.style.background="#333",i.style.borderColor="#555")})}}class It{constructor(e,t,n,i=1,r,a=-1/0,o=1/0,c=2){k(this,"container");k(this,"valueInput");k(this,"onChange");k(this,"step");k(this,"min");k(this,"max");k(this,"timer",null);k(this,"delayTimer",null);k(this,"startTime",0);k(this,"precision");this.step=i,this.onChange=r,this.min=a,this.max=o,this.precision=c,this.container=document.createElement("div"),this.container.style.cssText="display: flex; align-items: center; justify-content: space-between; margin-bottom: 5px; font-size: 11px;";const l=document.createElement("span");l.innerText=t,l.style.marginRight="5px",l.style.width="40px",this.container.appendChild(l);const h=document.createElement("div");h.style.cssText="display: flex; align-items: center; flex: 1;";const u=this.createButton("-");this.setupAutoRepeat(u,-1),this.valueInput=document.createElement("input"),this.valueInput.type="text";const f=Math.pow(10,this.precision);this.valueInput.value=(Math.round(n*f)/f).toString(),this.valueInput.style.cssText="width: 100%; text-align: center; background: #111; color: white; border: 1px solid #444; margin: 0 0px; height: 18px; font-size: 10px; outline: none; selection-background-color: #007acc;";const p=()=>{let v=this.valueInput.value.replace(",",".");const m=parseFloat(v);isNaN(m)||this.updateValue(m)};this.valueInput.onkeydown=v=>{v.key==="Enter"&&(p(),this.valueInput.blur())},this.valueInput.onblur=()=>{p()},this.valueInput.onfocus=()=>{this.valueInput.select()};const g=this.createButton("+");this.setupAutoRepeat(g,1),h.appendChild(u),h.appendChild(this.valueInput),h.appendChild(g),this.container.appendChild(h),e.appendChild(this.container)}createButton(e){const t=document.createElement("button");return t.innerText=e,t.style.cssText="width: 18px; height: 18px; background: #333; color: white; border: 1px solid #555; cursor: pointer; display: flex; align-items: center; justify-content: center; padding: 0; font-size: 10px;",t}setupAutoRepeat(e,t){const n=()=>{this.timer&&(clearInterval(this.timer),this.timer=null),this.delayTimer&&(clearTimeout(this.delayTimer),this.delayTimer=null),e.style.background="#333",window.removeEventListener("mouseup",n,{capture:!0})},i=a=>{this.updateValue(parseFloat(this.valueInput.value)+a*t)},r=()=>{if(!document.body.contains(this.container)){n();return}const a=Date.now()-this.startTime;let o=this.step;a>2e3?o=this.step*100:a>1e3&&(o=this.step*10),i(o)};e.onmousedown=a=>{a.button===0&&(e.style.background="#555",i(this.step),this.startTime=Date.now(),this.delayTimer=setTimeout(()=>{this.timer=setInterval(r,100)},500),window.addEventListener("mouseup",n,{capture:!0}),a.preventDefault())},e.onmouseleave=n}updateValue(e){if(isNaN(e))return;e=Math.min(Math.max(e,this.min),this.max);const t=Math.pow(10,this.precision);e=Math.round(e*t)/t,parseFloat(this.valueInput.value)!==e&&(this.valueInput.value=e.toString()),this.onChange(e)}setValue(e){this.valueInput.value=e.toString()}}class xe{static getCircleTexture(){const e="white_circle";if(this.textureCache[e])return this.textureCache[e];const t=256,n=document.createElement("canvas");n.width=t,n.height=t;const i=n.getContext("2d");if(!i)throw new Error("Could not create canvas context");const r=t/2,a=t/2-2;i.beginPath(),i.arc(r,r,a,0,2*Math.PI),i.fillStyle="#FFFFFF",i.fill();const o=new nr(n);return o.minFilter=Bt,o.magFilter=Bt,this.textureCache[e]=o,o}static createSprite(e,t){const n=this.getCircleTexture(),i=new pn({map:n,color:new Ue(e),depthTest:!1,sizeAttenuation:!0}),r=new qi(i);return r.scale.set(t,t,1),r.frustumCulled=!1,r.renderOrder=9999,r}static createAnchor(e,t){const n=this.createSprite("#FF3333",2);return n.position.copy(e),n.userData.isAnchor=!0,n.userData.pointType=t,n.visible=!1,n}static addAnchor(e){for(let n=e.children.length-1;n>=0;n--)e.children[n].userData.isMainAnchor&&e.remove(e.children[n]);const t=this.createSprite("#FF3333",2.5);t.name=`Anchor_${e.userData.type||"Unknown"}`,t.userData.isAnchor=!0,t.userData.isMainAnchor=!0,t.renderOrder=9999,e.add(t)}static createControlPoint(e,t){const n=this.createSprite("#00FF00",1.5);return n.position.copy(e),n.userData.isControlPoint=!0,n.userData.pointType=t,n.visible=!1,n}static createHelperLine(e,t){const n=new tt().setFromPoints([e,t]),i=new og({color:8947848,dashSize:2,gapSize:1,depthTest:!1}),r=new bi(n,i);return r.computeLineDistances(),r.userData.isHelperLine=!0,r.visible=!1,r.frustumCulled=!1,r}static createBezierPathNode(e){const t=this.createSprite("#FF3333",2);return t.position.copy(e),t.userData.isAnchor=!0,t.userData.isNode=!0,t.userData.pointType="node",t.visible=!1,t}static createBezierSegment(e,t,n,i){const r=new rt;r.userData.type="bezier_line";const a=new M().subVectors(t,e),o=a.length(),c=n||new M().copy(e).add(a.clone().normalize().multiplyScalar(o*.333)),l=i||new M().copy(e).add(a.clone().normalize().multiplyScalar(o*.666)),u=new _i(e,c,l,t).getPoints(50),f=new tt().setFromPoints(u),p=new Xt({color:16777215,depthTest:!1,depthWrite:!1,transparent:!0}),g=new bi(f,p);g.userData.isCurve=!0,g.frustumCulled=!1,g.renderOrder=999,r.add(g);const v=new M().addVectors(e,t).multiplyScalar(.5);r.position.copy(v);const m=new M().subVectors(e,v),d=new M().subVectors(t,v),_=new M().subVectors(c,v),x=new M().subVectors(l,v),y=new _i(m,_,x,d);g.geometry.setFromPoints(y.getPoints(50)),g.userData.curve=y;const R=this.createAnchor(m,"start"),E=this.createAnchor(d,"end"),C=this.createControlPoint(_,"cp1"),N=this.createControlPoint(x,"cp2"),b=this.createHelperLine(m,_),T=this.createHelperLine(d,x);return r.add(R,E,C,N,b,T),r.userData.helpers={start:R,end:E,cp1:C,cp2:N,line1:b,line2:T},this.addAnchor(r),r}static createLinkedBezierSegment(e,t,n,i){const r=new rt;r.userData.type="bezier_line",r.userData.isLinked=!0,r.userData.nodes={start:e,end:t};const a=e.position,o=t.position,c=new M().subVectors(o,a),l=c.length(),h=n||new M().copy(a).add(c.clone().normalize().multiplyScalar(l*.333)),u=i||new M().copy(a).add(c.clone().normalize().multiplyScalar(l*.666)),f=new _i(a,h,u,o),p=f.getPoints(50),g=new tt().setFromPoints(p),v=new Xt({color:16777215,depthTest:!1,depthWrite:!1,transparent:!0}),m=new bi(g,v);m.userData.isCurve=!0,m.userData.curve=f,m.frustumCulled=!1,m.renderOrder=999,r.add(m);const d=this.createControlPoint(h,"cp1"),_=this.createControlPoint(u,"cp2"),x=this.createHelperLine(a,h),y=this.createHelperLine(o,u);return r.add(d,_,x,y),r.userData.helpers={cp1:d,cp2:_,line1:x,line2:y},r}static linearizeBezierSegment(e){if(e.userData.type!=="bezier_line"||!e.userData.isLinked||!e.userData.nodes)return;const t=e.userData.nodes,n=e.userData.helpers;if(!t.start||!t.end||!n.cp1||!n.cp2)return;const i=t.start.position,r=t.end.position,a=new M().subVectors(r,i),o=a.length();n.cp1.position.copy(i).add(a.clone().normalize().multiplyScalar(o*.333)),n.cp2.position.copy(i).add(a.clone().normalize().multiplyScalar(o*.666)),this.updateBezierSegmentGeometry(e)}static updateBezierSegmentGeometry(e){if(e.userData.type!=="bezier_line")return;let t,n,i,r;const a=e.userData.helpers;if(e.userData.isLinked&&e.userData.nodes){const l=e.userData.nodes;t=l.start.position,n=l.end.position,i=a.cp1.position,r=a.cp2.position}else if(a)t=a.start.position,n=a.end.position,i=a.cp1.position,r=a.cp2.position;else return;const o=(l,h,u)=>{l&&(l.geometry.setFromPoints([h,u]),l.computeLineDistances(),l.geometry.attributes.position.needsUpdate=!0,l.geometry.computeBoundingSphere())};o(a.line1,t,i),o(a.line2,n,r);const c=e.children.find(l=>l.userData.isCurve);if(c){let l,h;const u=new M().subVectors(n,t),f=u.length();let p=!1;if(f>1e-4){const g=u.clone().normalize(),v=new M().subVectors(i,t),m=new M().subVectors(r,t),d=new M().crossVectors(v,g).length(),_=new M().crossVectors(m,g).length();d<.01&&_<.01&&(p=!0)}else p=!0;p?(l=new il(t,n),h=[t,n]):(l=new _i(t,i,r,n),h=l.getPoints(50)),c.geometry.attributes.position&&c.geometry.attributes.position.count!==h.length&&(c.geometry.dispose(),c.geometry=new tt),c.geometry.setFromPoints(h),c.userData.curve=l,c.geometry.attributes.position&&(c.geometry.attributes.position.needsUpdate=!0),c.geometry.computeBoundingSphere()}}static createPath(e,t=!1){if(e.length<2)return null;const n=new rt;n.userData.type="bezier_path",n.userData.isClosed=t;const i=new M;e.forEach(a=>i.add(a)),i.divideScalar(e.length),n.position.copy(i);const r=[];e.forEach((a,o)=>{const c=new M().subVectors(a,i),l=this.createBezierPathNode(c);l.name=`Node_${o}`,n.add(l),r.push(l)});for(let a=0;a<r.length&&!(!t&&a===r.length-1);a++){const o=(a+1)%r.length,c=r[a],l=r[o],h=this.createLinkedBezierSegment(c,l);h.name=`Segment_${a}`,n.add(h)}return this.addAnchor(n),n}static imageToDataURL(e){try{const t=document.createElement("canvas");t.width=e.width,t.height=e.height;const n=t.getContext("2d");return n?(n.drawImage(e,0,0),t.toDataURL("image/png")):""}catch(t){return console.warn("Could not serialize image",t),""}}static serializeBezierGroup(e){if(!e)return null;const t=e.children.filter(i=>i.userData.isNode).map(i=>i.position.toArray()),n=e.children.filter(i=>i.userData.type==="bezier_line").map(i=>{const r=i.userData.helpers;return{cp1:r.cp1.position.toArray(),cp2:r.cp2.position.toArray()}});return{nodes:t,segments:n}}static applyBezierData(e,t){if(!e||!t)return;const n=e.children.filter(r=>r.userData.isNode);t.nodes&&n.length===t.nodes.length&&n.forEach((r,a)=>r.position.fromArray(t.nodes[a]));const i=e.children.filter(r=>r.userData.type==="bezier_line");t.segments&&i.length===t.segments.length&&i.forEach((r,a)=>{const o=t.segments[a],c=r.userData.helpers;c&&(c.cp1.position.fromArray(o.cp1),c.cp2.position.fromArray(o.cp2),this.updateBezierSegmentGeometry(r))})}}k(xe,"textureCache",{});class un{static createLineFromPoints(e,t){const n=new rt;n.userData.type="line";const i=xe.createBezierPathNode(e),r=xe.createBezierPathNode(t);return n.add(i,r),n.add(xe.createLinkedBezierSegment(i,r)),xe.addAnchor(n),n}static createRectangle(e,t){const n=new rt;n.userData.type="square",n.userData.isClosed=!0;const i=e.y,r=Math.min(e.x,t.x),a=Math.max(e.x,t.x),o=Math.min(e.z,t.z),c=Math.max(e.z,t.z),l=(r+a)/2,h=(o+c)/2;n.position.set(l,i,h);const u=parseFloat((a-r).toFixed(2)),f=parseFloat((c-o).toFixed(2));n.userData.baseSize={width:u,length:f};const p=u/2,g=f/2,v=new M(-p,0,-g),m=new M(p,0,-g),d=new M(p,0,g),_=new M(-p,0,g),x=xe.createBezierPathNode(v),y=xe.createBezierPathNode(m),R=xe.createBezierPathNode(d),E=xe.createBezierPathNode(_);return n.add(x,y,R,E),n.add(xe.createLinkedBezierSegment(x,y),xe.createLinkedBezierSegment(y,R),xe.createLinkedBezierSegment(R,E),xe.createLinkedBezierSegment(E,x)),xe.addAnchor(n),n}static createSquare(e=50){const t=new rt;t.userData.type="square",t.userData.isClosed=!0,t.userData.baseSize={width:e,length:e};const n=e/2,i=new M(-n,0,-n),r=new M(n,0,-n),a=new M(n,0,n),o=new M(-n,0,n),c=xe.createBezierPathNode(i),l=xe.createBezierPathNode(r),h=xe.createBezierPathNode(a),u=xe.createBezierPathNode(o);return t.add(c,l,h,u),t.add(xe.createLinkedBezierSegment(c,l),xe.createLinkedBezierSegment(l,h),xe.createLinkedBezierSegment(h,u),xe.createLinkedBezierSegment(u,c)),xe.addAnchor(t),t}static updateRectangle(e){var f,p;const t=((f=e.userData.baseSize)==null?void 0:f.width)||50,n=((p=e.userData.baseSize)==null?void 0:p.length)||t,i=t/2,r=n/2,a=e.userData.borderRadius,o=a&&a.enabled&&a.radius>0,c=o?Math.min(a.radius,Math.min(i,r)):0,l=.5522847*c,h=g=>{const v=N=>N.userData.isNode&&(g?N.userData.isOffsetNode:!N.userData.isOffsetNode),m=N=>N.userData.type==="bezier_line"&&(g?N.userData.isOffset:!N.userData.isOffset);let d=e.children.filter(v),_=e.children.filter(m);const x=o?8:4;if(d.length!==x||_.length!==x){for(let N=e.children.length-1;N>=0;N--){const b=e.children[N];(v(b)||m(b))&&e.remove(b)}d=[],_=[];for(let N=0;N<x;N++){const b=xe.createBezierPathNode(new M);g&&(b.userData.isOffsetNode=!0,b.visible=!1),e.add(b),d.push(b)}for(let N=0;N<x;N++){const b=d[N],T=d[(N+1)%x],I=xe.createLinkedBezierSegment(b,T);if(g){I.userData.isOffset=!0;const G=I.children.find(Z=>Z.userData.isCurve);G&&G.material&&(G.material.color.setHex(16755200),G.material.opacity=.5)}e.add(I),_.push(I)}}let y=i,R=r,E=c,C=l;if(g){const N=e.userData.offset,b=N?N.x:0,T=N?N.z:0,I=(b+T)/2;y+=b,R+=T,o&&(E+=I,E<0&&(E=0),C=.5522847*E)}if(!o)d[0].position.set(-y,0,-R),d[1].position.set(y,0,-R),d[2].position.set(y,0,R),d[3].position.set(-y,0,R),_.forEach(N=>xe.linearizeBezierSegment(N));else{d[0].position.set(-y+E,0,-R),d[1].position.set(y-E,0,-R),d[2].position.set(y,0,-R+E),d[3].position.set(y,0,R-E),d[4].position.set(y-E,0,R),d[5].position.set(-y+E,0,R),d[6].position.set(-y,0,R-E),d[7].position.set(-y,0,-R+E),xe.linearizeBezierSegment(_[0]),xe.linearizeBezierSegment(_[2]),xe.linearizeBezierSegment(_[4]),xe.linearizeBezierSegment(_[6]);const N=(b,T,I,G,Z)=>{const D=_[b],B=D.userData.helpers;B&&(B.cp1.position.copy(d[b].position).add(new M(T,0,I)),B.cp2.position.copy(d[(b+1)%8].position).add(new M(G,0,Z)),xe.updateBezierSegmentGeometry(D))};N(1,C,0,0,-C),N(3,0,C,C,0),N(5,-C,0,0,C),N(7,0,-C,-C,0)}};h(!1);const u=e.userData.offset;if(u&&u.enabled)h(!0);else for(let g=e.children.length-1;g>=0;g--){const v=e.children[g];(v.userData.isOffsetNode||v.userData.isOffset)&&e.remove(v)}}static createCircle(e=25){const t=new rt;t.name="Circle",t.userData.type="circle",t.userData.isClosed=!0,t.userData.baseSize={radius:e};const n=e,i=.5522847*n,r=new M(0,0,-n),a=new M(n,0,0),o=new M(0,0,n),c=new M(-n,0,0),l=xe.createBezierPathNode(r),h=xe.createBezierPathNode(a),u=xe.createBezierPathNode(o),f=xe.createBezierPathNode(c);t.add(l,h,u,f);const p=(g,v,m,d)=>{const _=xe.createLinkedBezierSegment(g,v,m,d);xe.updateBezierSegmentGeometry(_),t.add(_)};return p(l,h,new M(i,0,-n),new M(n,0,-i)),p(h,u,new M(n,0,i),new M(i,0,n)),p(u,f,new M(-i,0,n),new M(-n,0,i)),p(f,l,new M(-n,0,-i),new M(-i,0,-n)),xe.addAnchor(t),t}static updateCircleRadius(e,t){if(!e||e.userData.type!=="circle")return;e.userData.baseSize||(e.userData.baseSize={}),e.userData.baseSize.radius=t;const n=t,i=.5522847*n;e.scale.set(1,1,1);const r=e.children.filter(l=>l.userData.isNode&&!l.userData.isOffsetNode);if(r.length===4){r[0].position.set(0,0,-n),r[1].position.set(n,0,0),r[2].position.set(0,0,n),r[3].position.set(-n,0,0);const l=e.children.filter(h=>h.userData.type==="bezier_line"&&!h.userData.isOffset);if(l.length===4){const h=(u,f,p)=>{const g=u.userData.helpers;g&&(g.cp1.position.copy(f),g.cp2.position.copy(p),xe.updateBezierSegmentGeometry(u))};h(l[0],new M(i,0,-n),new M(n,0,-i)),h(l[1],new M(n,0,i),new M(i,0,n)),h(l[2],new M(-i,0,n),new M(-n,0,i)),h(l[3],new M(-n,0,-i),new M(-i,0,-n))}}const a=e.userData.offset,o=a&&a.enabled,c=()=>{for(let l=e.children.length-1;l>=0;l--){const h=e.children[l];(h.userData.isOffsetNode||h.userData.isOffset)&&e.remove(h)}};if(o){const l=n+(a.radius||0),h=.5522847*l;let u=e.children.filter(g=>g.userData.isNode&&g.userData.isOffsetNode),f=e.children.filter(g=>g.userData.type==="bezier_line"&&g.userData.isOffset);if(u.length!==4||f.length!==4){c();const g=new M(0,0,-l),v=new M(l,0,0),m=new M(0,0,l),d=new M(-l,0,0),_=xe.createBezierPathNode(g),x=xe.createBezierPathNode(v),y=xe.createBezierPathNode(m),R=xe.createBezierPathNode(d);[_,x,y,R].forEach(I=>{I.userData.isOffsetNode=!0,I.visible=!1,e.add(I)}),u=[_,x,y,R];const E=(I,G)=>{const Z=xe.createLinkedBezierSegment(I,G);Z.userData.isOffset=!0;const D=Z.children.find(B=>B.userData.isCurve);return D&&D.material&&(D.material.color.setHex(16755200),D.material.opacity=.5),e.add(Z),Z},C=E(_,x),N=E(x,y),b=E(y,R),T=E(R,_);f=[C,N,b,T]}u[0].position.set(0,0,-l),u[1].position.set(l,0,0),u[2].position.set(0,0,l),u[3].position.set(-l,0,0);const p=(g,v,m)=>{const d=g.userData.helpers;d&&(d.cp1.position.copy(v),d.cp2.position.copy(m),xe.updateBezierSegmentGeometry(g))};f.length===4&&(p(f[0],new M(h,0,-l),new M(l,0,-h)),p(f[1],new M(l,0,h),new M(h,0,l)),p(f[2],new M(-h,0,l),new M(-l,0,h)),p(f[3],new M(-l,0,-h),new M(-h,0,-l)))}else c()}}class Jr{static create(e,t,n){const i=new rt;i.name="BackgroundImage",i.userData.type="background_image",i.userData.baseSize={width:t,height:n};const r=new Cn(t,n);r.rotateX(-Math.PI/2);const a=new Nt({map:e,side:wt,transparent:!1,opacity:1,depthWrite:!0}),o=new Ge(r,a);o.userData.isMesh=!0,o.userData.generated=!0,i.add(o);const c=t/2,l=n/2,h=(v,m,d)=>{const _=xe.createSprite("#FFFF00",1.5);return _.position.set(v,0,m),_.userData.isControlPoint=!0,_.userData.pointType=d,_},u=h(-c,-l,"tl"),f=h(c,-l,"tr"),p=h(-c,l,"bl"),g=h(c,l,"br");return i.add(u,f,p,g),i.userData.handles={tl:u,tr:f,bl:p,br:g},xe.addAnchor(i),i}static update(e){if(e.userData.type!=="background_image")return;const t=e.children.find(u=>u.userData.isMesh);if(!t)return;const n=e.userData.handles;if(!n)return;const i=new Ln;i.expandByPoint(n.tl.position),i.expandByPoint(n.tr.position),i.expandByPoint(n.bl.position),i.expandByPoint(n.br.position);const r=i.min,a=i.max,o=a.x-r.x,c=a.z-r.z,l=new M;i.getCenter(l),t.geometry.dispose();const h=new Cn(o,c);h.rotateX(-Math.PI/2),h.translate(l.x,0,l.z),t.geometry=h}}class st{static createShape(e,t,n){let i=null;switch(e){case"line":i=un.createLineFromPoints((n==null?void 0:n.start)||new M(0,0,0),(n==null?void 0:n.end)||new M(50,0,0));break;case"square":i=un.createSquare((n==null?void 0:n.size)||50);break;case"circle":i=un.createCircle((n==null?void 0:n.radius)||25);break;case"background_image":n!=null&&n.texture&&(i=Jr.create(n.texture,n.width,n.height));break}return i&&(i.userData.type=e,t&&i.position.copy(t),n!=null&&n.position&&i.position.set(n.position[0],n.position[1],n.position[2]),n!=null&&n.rotation&&i.rotation.set(n.rotation[0],n.rotation[1],n.rotation[2]),n!=null&&n.scale&&i.scale.set(n.scale[0],n.scale[1],n.scale[2]),e==="line"&&!i.userData.baseSize?i.userData.baseSize={width:50}:e==="square"&&!i.userData.baseSize?i.userData.baseSize={width:50,length:50}:e==="circle"&&!i.userData.baseSize&&(i.userData.baseSize={radius:25}),!i.userData.isMainAnchor&&e!=="background_image"&&xe.addAnchor(i),e!=="background_image"&&!i.userData.materialParams&&(i.userData.materialParams={color:"#cccccc",wireframe:!1,roughness:.5,metalness:.1,flatShading:!1,opacity:1})),i}static createBrush(e=5,t=60){const n=new rt;n.name="Neuer Pinsel",n.userData.type="bezier_path";const i=new M(e,0,0),r=new M(0,-t,0),a=xe.createBezierPathNode(i),o=xe.createBezierPathNode(r);n.add(a,o);const c=xe.createLinkedBezierSegment(a,o);return c.userData.helpers.cp1.position.set(e*1.05,-t*.2,0),c.userData.helpers.cp2.position.set(e*.8,-t*.4,0),xe.updateBezierSegmentGeometry(c),n.add(c),n.traverse(l=>{(l.userData.isNode||l.userData.isControlPoint||l.userData.isHelperLine)&&(l.visible=!0)}),n.userData.modifiers=[{type:"lathe",name:"Rotation",params:{segments:32,phiStart:0,phiLength:Math.PI*2},active:!0}],xe.addAnchor(n),n}static updateRectangle(e){un.updateRectangle(e)}static describeObject(e){var n,i;if(!e.userData.type)return null;const t={type:e.userData.type,name:e.name,position:e.position.toArray(),rotation:e.rotation.toArray(),scale:e.scale.toArray(),userData:{...e.userData}};if(e.userData.baseSize&&(t.userData.baseSize={...e.userData.baseSize}),e.userData.type==="line"){const r=e.children.filter(a=>a.userData.isNode);r.length>=2&&(t.start=r[0].position.toArray(),t.end=r[1].position.toArray())}else if(e.userData.type==="background_image"){const r=e.children.find(a=>a.userData.isMesh);if(r&&r.material){const a=r.material;a.map&&a.map.image&&(t.imageData=xe.imageToDataURL(a.map.image),t.width=(n=e.userData.baseSize)==null?void 0:n.width,t.height=(i=e.userData.baseSize)==null?void 0:i.height)}}return t}static recreateShape(e){var a,o,c,l;const t=e.type,n=new M().fromArray(e.position),i={position:e.position,rotation:e.rotation,scale:e.scale,...e.userData};if(t==="line")e.start&&(i.start=new M().fromArray(e.start)),e.end&&(i.end=new M().fromArray(e.end));else if(t==="square")(o=(a=e.userData)==null?void 0:a.baseSize)!=null&&o.width&&(i.size=e.userData.baseSize.width);else if(t==="circle")(l=(c=e.userData)==null?void 0:c.baseSize)!=null&&l.radius&&(i.radius=e.userData.baseSize.radius);else if(t==="background_image"&&e.imageData){const h=new Image;h.src=e.imageData;const u=new Pt(h);h.onload=()=>{u.needsUpdate=!0},i.texture=u,i.width=e.width,i.height=e.height}const r=this.createShape(t,n,i);return r&&(e.name&&(r.name=e.name),e.userData&&(e.userData.baseSize&&(r.userData.baseSize={...e.userData.baseSize}),Object.assign(r.userData,e.userData)),t==="square"&&this.updateRectangle(r)),r}static createModulationPath(e=-20,t=35){const n=new rt;n.name="Modulation_Path",n.userData.type="bezier_path",n.userData.isHelper=!0;const i=xe.createBezierPathNode(new M(0,15,e)),r=xe.createBezierPathNode(new M(0,15,t));n.add(i,r);const a=xe.createLinkedBezierSegment(i,r);a.userData.helpers.cp1.position.set(0,15,e+(t-e)*.33),a.userData.helpers.cp2.position.set(0,15,e+(t-e)*.66),xe.updateBezierSegmentGeometry(a);const o=a.children.find(c=>c.userData.isCurve);return o&&o.material.color.setHex(16711935),n.add(a),n}static createBackgroundImage(e,t,n){return Jr.create(e,t,n)}static updateBackgroundImage(e){Jr.update(e)}static createPath(e,t=!1){return xe.createPath(e,t)}static createLineFromPoints(e,t){return un.createLineFromPoints(e,t)}static createBezierSegment(e,t,n,i){return xe.createBezierSegment(e,t,n,i)}static linearizeBezierSegment(e){xe.linearizeBezierSegment(e)}static updateBezierSegmentGeometry(e){xe.updateBezierSegmentGeometry(e)}static addAnchor(e){xe.addAnchor(e)}static createControlPoint(e,t){return xe.createControlPoint(e,t)}static createHelperLine(e,t){return xe.createHelperLine(e,t)}static createRectangle(e,t){return un.createRectangle(e,t)}static createSquare(e=50){return un.createSquare(e)}static createCircle(e=25){return un.createCircle(e)}static updateCircleRadius(e,t){un.updateCircleRadius(e,t)}}class Cg{constructor(e,t,n){k(this,"eventBus");k(this,"objectManager");k(this,"container");k(this,"currentObject",null);k(this,"openSections",new Set(["Geometrie","Aktionen","Pinsel 1"]));k(this,"brushState",{type:"Rundpinsel",diameter:5,length:20,color:"#ff0000",grayscale:!1,grayValue:128,transparency:1,showMachineBrush:!1,currentProfileName:"Standard Rundpinsel"});k(this,"activeToolId",null);this.eventBus=e,this.objectManager=t,this.container=document.createElement("div"),this.setupContainer(),this.initListeners()}setupContainer(){Object.assign(this.container.style,{position:"absolute",top:"40px",right:"0",width:"150px",height:"calc(100% - 70px)",background:"#222",color:"white",padding:"10px",borderLeft:"1px solid #444",fontFamily:"Arial, sans-serif",fontSize:"12px",zIndex:"1000",boxSizing:"border-box",overflowY:"auto"}),this.container.id="properties-panel",this.container.style.display="none",["mousedown","mouseup","mousemove","wheel","keydown","keyup"].forEach(e=>this.container.addEventListener(e,t=>t.stopPropagation())),document.body.appendChild(this.container)}initListeners(){this.eventBus.on("open-brush-properties",()=>{this.showBrushProperties()}),this.eventBus.on("brush-state-changed",e=>{Object.assign(this.brushState,e),this.container.dataset.objUuid==="brush-settings"&&this.showBrushProperties()}),this.eventBus.on("selection-changed",e=>{e.length===1?this.showProperties(e[0]):this.showEmpty()}),this.eventBus.on("object-added",()=>{this.currentObject?this.renderPanel(this.currentObject):this.showEmpty()}),this.eventBus.on("object-removed",()=>{this.currentObject?this.renderPanel(this.currentObject):this.showEmpty()}),this.eventBus.on("object-modified",e=>{this.currentObject&&this.currentObject.uuid===e.uuid&&this.refreshContent(e)}),this.eventBus.on("preview-object-updated",e=>{e?this.showProperties(e):this.currentObject&&this.currentObject===e&&this.showEmpty()}),this.eventBus.on("tool-selected",e=>{this.activeToolId=e,this.container.dataset.objUuid==="brush-settings"&&this.showBrushProperties()})}showBrushProperties(){try{this.currentObject=null,this.container.style.display="block",this.eventBus.emit("properties-panel-visible"),this.container.innerHTML="",this.container.dataset.objUuid="brush-settings";const e=()=>{this.eventBus.emit("brush-state-changed",this.brushState),this.eventBus.emit("request-3d-brush-update",this.brushState)},t=document.createElement("div");t.style.cssText="display: flex; justify-content: space-between; align-items: center; margin-bottom: 10px;";const n=document.createElement("h3");n.innerText="Maschinenpinsel-Profil",n.style.cssText="margin: 0; font-size: 12px; font-weight: normal; color: #ccc;",t.appendChild(n),this.container.appendChild(t);const i=document.createElement("div");this.container.appendChild(i);const r=document.createElement("div");r.innerText="Geometrie",r.style.cssText="font-size: 11px; font-weight: bold; color: #888; margin-bottom: 8px; border-bottom: 1px solid #333; padding-bottom: 2px;",i.appendChild(r);const a=document.createElement("div");a.style.cssText="display: flex; align-items: center; justify-content: space-between; margin-bottom: 10px; font-size: 11px;";const o=document.createElement("span");o.innerText="Pinsel-Visualisierung anzeigen",a.appendChild(o);const c=document.createElement("input");c.type="checkbox",c.checked=this.brushState.showMachineBrush,c.onchange=()=>{this.brushState.showMachineBrush=c.checked,e()},a.appendChild(c),i.appendChild(a);const l=document.createElement("div"),h=document.createElement("span");h.innerText="Profil auswählen",h.style.fontSize="11px";const u=document.createElement("select");u.style.cssText="width: 100%; margin: 2px 0 5px 0; background: #111; color: white; border: 1px solid #444;",l.appendChild(h),l.appendChild(u);const f=y=>{u.innerHTML="";const R=this.brushState.currentProfileName,E=document.createElement("option");E.value="__default_round__",E.innerText="Standard Rundpinsel",R==="Standard Rundpinsel"&&(E.selected=!0),u.appendChild(E),Object.keys(y).forEach(C=>{const N=document.createElement("option");N.value=C,N.innerText=C,R===C&&(N.selected=!0),u.appendChild(N)})};if(u.onchange=()=>{const y=u.value;if(y==="__default_round__"){this.brushState.currentProfileName="Standard Rundpinsel",this.eventBus.emit("brush-state-changed",{type:"Rundpinsel",bezierProfile:null,currentProfileName:this.brushState.currentProfileName});return}this.eventBus.emit("request-brush-profiles",R=>{const E=R[y];E&&(this.brushState.currentProfileName=y,this.eventBus.emit("brush-state-changed",{...this.brushState,...E,currentProfileName:this.brushState.currentProfileName}))})},this.eventBus.on("brush-profiles-updated",f),this.eventBus.emit("request-brush-profiles",f),i.appendChild(l),this.activeToolId==="brush_create"){const y=document.createElement("div");y.style.cssText="margin-top: 10px; text-align: center;";const R=document.createElement("button");R.innerText="Profil speichern",R.style.cssText="background:#007acc; border:1px solid #00aaff; color:white; cursor:pointer; padding: 5px; font-size: 11px; width: 100%;",R.onclick=()=>{const E=prompt("Geben Sie einen Namen für das Pinselprofil ein:");E&&(this.brushState.currentProfileName=E,this.eventBus.emit("save-brush-profile-current-state",{name:E,profile:{...this.brushState}}),this.showBrushProperties())},y.appendChild(R),i.appendChild(y)}new It(i,"Durchm.",this.brushState.diameter,.5,y=>{this.brushState.diameter=y,e()},.1,50),new It(i,"Länge",this.brushState.length,1,y=>{this.brushState.length=y,e()},1,200);const p=document.createElement("div");p.style.height="15px",i.appendChild(p);const g=document.createElement("div");g.innerText="Farbe",g.style.cssText="font-size: 11px; font-weight: bold; color: #888; margin-bottom: 8px; border-bottom: 1px solid #333; padding-bottom: 2px;",i.appendChild(g);const v=document.createElement("div");v.style.cssText="display: flex; align-items: center; justify-content: space-between; margin-bottom: 10px; font-size: 11px;";const m=document.createElement("span");m.innerText="Graustufen",v.appendChild(m);const d=document.createElement("input");d.type="checkbox",d.checked=this.brushState.grayscale,d.onchange=()=>{this.brushState.grayscale=d.checked,x(),e()},v.appendChild(d),i.appendChild(v);const _=document.createElement("div");i.appendChild(_),new It(i,"Deckkraft",this.brushState.transparency,.1,y=>{this.brushState.transparency=y,e()},0,1,2);const x=()=>{if(_.innerHTML="",this.brushState.grayscale)new It(_,"Grauwert",this.brushState.grayValue,1,y=>{this.brushState.grayValue=Math.round(y);const R=Math.round(this.brushState.grayValue).toString(16).padStart(2,"0");this.brushState.color=`#${R}${R}${R}`,e()},0,255,0);else{const y=document.createElement("div");y.style.cssText="display: flex; align-items: center; justify-content: space-between; font-size: 11px; margin-bottom: 5px;";const R=document.createElement("span");R.innerText="Pinsel-Farbe",y.appendChild(R);const E=document.createElement("input");E.type="color",E.value=this.brushState.color,E.style.cssText="background: none; border: none; width: 30px; height: 20px; cursor: pointer;",E.onchange=()=>{this.brushState.color=E.value,e()},y.appendChild(E),_.appendChild(y)}};x()}catch(e){console.error("PropertiesPanel: Error in showBrushProperties",e)}}showEmpty(){this.currentObject=null,this.container.style.display="none",this.eventBus.emit("properties-panel-hidden")}showProperties(e){if(this.container.style.display="block",this.eventBus.emit("properties-panel-visible"),this.currentObject===e){this.refreshContent(e);return}this.currentObject=e,this.renderPanel(e)}refreshContent(e){this.renderPanel(e)}renderPanel(e){this.container.innerHTML="",this.container.dataset.objUuid=e.uuid;const t=document.createElement("div");t.style.cssText="display: flex; justify-content: space-between; align-items: center; margin-bottom: 5px;";const n=document.createElement("h3");n.innerText="Eigenschaften",n.style.cssText="margin: 0; font-size: 13px;",t.appendChild(n);const i=this.objectManager.getObjects(),r=i.filter(p=>p.visible).length,a=document.createElement("div");a.style.cssText="font-size: 10px; color: #888; margin-bottom: 10px; border-bottom: 1px solid #333; padding-bottom: 5px;",a.innerText=`Objekte: ${i.length} (${r} sichtbar)`,this.container.appendChild(t),this.container.appendChild(a);const o=document.createElement("div");o.style.cssText="display: flex; align-items: center; margin-bottom: 10px;";const c=document.createElement("div");c.innerText="Name:",c.style.cssText="width: 35px; margin-right: 2px; font-size: 11px; font-weight: bold;";const l=document.createElement("input");l.type="text",l.value=e.name,l.style.cssText="flex: 1; min-width: 0; background: #333; color: white; border: 1px solid #444; padding: 2px 5px; font-size: 11px;",l.onchange=()=>{e.name=l.value},o.appendChild(c),o.appendChild(l),this.container.appendChild(o);const h=this.createMaterialEditor(e);this.container.appendChild(this.createAccordionSection("Material",h));const u=document.createElement("div");if(this.renderGeometryControls(e,u),this.container.appendChild(this.createAccordionSection("Geometrie",u)),e.userData.type==="boolean_result"){const p=document.createElement("div"),g=document.createElement("div");g.style.cssText="color: #888; font-style: italic; font-size: 10px; padding: 5px;",g.innerText="Boolesches Objekt",p.appendChild(g);const v=document.createElement("div");v.id=`status-manifold-${e.uuid}`,v.style.cssText="padding: 5px; margin-top: 10px; background: #333; border-radius: 3px; font-size: 10px; border: 1px solid #444; border-left: 3px solid #888;";const m=e.userData.openEdgeCount||0;m===0?(v.style.borderLeftColor="#88ff88",v.innerHTML='<span style="color:#88ff88;">✔ Modell ist wasserdicht</span>'):(v.style.borderLeftColor="#ff4444",v.innerHTML=`<span style="color:#ff4444;">⚠ Warnung: ${m} Löcher gefunden!</span><br><span style="color:#aaa;">Modell ist nicht geschlossen.</span>`),p.appendChild(v),this.container.appendChild(this.createAccordionSection("Aktionen",p))}if(e.userData.type==="background_image"){const p=document.createElement("div");let g=4,v=1;new It(p,"Anzahl Schichten",g,1,d=>{g=Math.max(2,Math.floor(d))},2,16),new It(p,"Spalten",v,1,d=>{v=Math.max(1,Math.floor(d))},1,16);const m=document.createElement("button");m.innerText="Analyse starten",m.style.cssText="background:#007acc; border:1px solid #00aaff; color:white; cursor:pointer; padding: 5px; font-size: 11px; margin-top: 10px; width: 100%;",m.onclick=()=>{this.eventBus.emit("image-analysis-start",{layers:g,columns:v})},p.appendChild(m),this.container.appendChild(this.createAccordionSection("Bildanalyse",p))}}createAccordionSection(e,t){const n=document.createElement("div");n.style.cssText="margin-bottom: 5px; border: 1px solid #444; border-radius: 3px; overflow: hidden;";const i=document.createElement("div");i.style.cssText="background: #333; color: #ddd; padding: 5px 8px; font-size: 11px; font-weight: bold; cursor: pointer; display: flex; justify-content: space-between; align-items: center;";const r=document.createElement("span");r.innerText=e;const a=this.openSections.has(e),o=document.createElement("span");o.innerText=a?"▼":"▶",o.style.fontSize="10px",i.appendChild(r),i.appendChild(o);const c=document.createElement("div");return c.style.cssText=`padding: 5px; background: #222; display: ${a?"block":"none"};`,c.appendChild(t),i.onclick=()=>{c.style.display==="block"?(c.style.display="none",o.innerText="▶",this.openSections.delete(e)):(c.style.display="block",o.innerText="▼",this.openSections.add(e))},n.appendChild(i),n.appendChild(c),n}createMaterialEditor(e){const t=document.createElement("div");if(!e.userData.materialParams){let h="#cccccc";e.traverse(u=>{u instanceof Ge&&u.material.color&&(h="#"+u.material.color.getHexString())}),e.userData.materialParams={color:h,wireframe:!1,roughness:.5,metalness:.1,flatShading:!1,opacity:1}}const n=e.userData.materialParams,i=document.createElement("div");i.style.cssText="display: flex; align-items: center; justify-content: space-between; margin-bottom: 5px; font-size: 11px;";const r=document.createElement("span");r.innerText="Farbe";const a=document.createElement("input");a.type="color",a.value=n.color,a.style.cssText="border: none; width: 40px; height: 20px; cursor: pointer; background: none;",a.oninput=()=>{n.color=a.value,this.eventBus.emit("update-object-geometry",e)},i.appendChild(r),i.appendChild(a),t.appendChild(i);const o=document.createElement("div");o.style.cssText="display: flex; align-items: center; margin-bottom: 5px; font-size: 11px;";const c=document.createElement("input");c.type="checkbox",c.checked=!n.wireframe,c.onchange=()=>{n.wireframe=!c.checked,this.eventBus.emit("update-object-geometry",e)};const l=document.createElement("span");return l.innerText="Solid (Gefüllt)",l.style.marginLeft="5px",o.appendChild(c),o.appendChild(l),t.appendChild(o),n.opacity===void 0&&(n.opacity=1),new It(t,"Deckkraft",n.opacity,.1,h=>{n.opacity=Math.max(0,Math.min(1,h)),this.eventBus.emit("update-object-geometry",e)},0,1),this.eventBus.emit("update-object-geometry",e),t}renderGeometryControls(e,t){const n=e.userData.type;if(e instanceof Ge||e instanceof rt&&e.children[0]instanceof Ge){const i=e instanceof Ge?e:e.children[0];if(i.geometry){const r=i.geometry.attributes.position.count,a=i.geometry.index?i.geometry.index.count/3:r/3,o=document.createElement("div");o.style.cssText="font-size: 10px; color: #888; margin-bottom: 10px; border-bottom: 1px solid #333; padding-bottom: 5px;",o.innerText=`Vertices: ${r} | Faces: ${a}`,t.appendChild(o)}}if(n==="square"||n==="bezier_path"&&e.userData.isClosed&&!e.name.includes("Circle")){if(e.userData.offset||(e.userData.offset={enabled:!1,x:5,z:5}),e.userData.baseSize){new It(t,"Breite",e.userData.baseSize.width||50,1,l=>{e.userData.baseSize.width=l,st.updateRectangle(e),this.eventBus.emit("update-object-geometry",e)}),new It(t,"Länge",e.userData.baseSize.length||50,1,l=>{e.userData.baseSize.length=l,st.updateRectangle(e),this.eventBus.emit("update-object-geometry",e)}),e.userData.borderRadius||(e.userData.borderRadius={enabled:!1,radius:10});const i=document.createElement("div");i.style.cssText="margin-top: 10px; border-top: 1px dashed #444; padding-top: 5px;";const r=document.createElement("div");r.innerText="Ecken / Radius",r.style.cssText="font-size: 11px; font-weight: bold; color: #aaa; margin-bottom: 5px;",i.appendChild(r);const a=document.createElement("div");a.style.cssText="display: flex; align-items: center; margin-bottom: 5px; font-size: 11px;";const o=document.createElement("input");o.type="checkbox",o.checked=e.userData.borderRadius.enabled,o.onchange=()=>{e.userData.borderRadius.enabled=o.checked,st.updateRectangle(e),this.eventBus.emit("update-object-geometry",e)};const c=document.createElement("span");c.innerText="Abgerundet",c.style.marginLeft="5px",a.appendChild(o),a.appendChild(c),i.appendChild(a),new It(i,"Radius",e.userData.borderRadius.radius,1,l=>{e.userData.borderRadius.radius=l,e.userData.borderRadius.enabled&&(st.updateRectangle(e),this.eventBus.emit("update-object-geometry",e))}),t.appendChild(i);{const l=document.createElement("div");l.style.cssText="margin-top: 10px; border-top: 1px dashed #444; padding-top: 5px;";const h=document.createElement("div");h.innerText="Offset Kontur",h.style.cssText="font-size: 11px; font-weight: bold; color: #aaa; margin-bottom: 5px;",l.appendChild(h);const u=document.createElement("div");u.style.cssText="display: flex; align-items: center; margin-bottom: 5px; font-size: 11px;";const f=document.createElement("input");f.type="checkbox",f.checked=e.userData.offset.enabled,f.onchange=()=>{e.userData.offset.enabled=f.checked,st.updateRectangle(e),this.eventBus.emit("update-object-geometry",e)};const p=document.createElement("span");p.innerText="Aktivieren",p.style.marginLeft="5px",u.appendChild(f),u.appendChild(p),l.appendChild(u),new It(l,"Abstand X",e.userData.offset.x,1,g=>{e.userData.offset.x=g,e.userData.offset.enabled&&(st.updateRectangle(e),this.eventBus.emit("update-object-geometry",e))}),new It(l,"Abstand Z",e.userData.offset.z,1,g=>{e.userData.offset.z=g,e.userData.offset.enabled&&(st.updateRectangle(e),this.eventBus.emit("update-object-geometry",e))}),t.appendChild(l)}}}else if((n==="circle"||n==="bezier_path"&&e.name.includes("Circle"))&&(e.userData.offset||(e.userData.offset={enabled:!1,radius:5}),e.userData.baseSize)){new It(t,"Radius",e.userData.baseSize.radius||25,1,l=>{e.userData.baseSize.radius=l,this.updateCircle(e)});const i=document.createElement("div");i.style.cssText="margin-top: 10px; border-top: 1px dashed #444; padding-top: 5px;";const r=document.createElement("div");r.innerText="Offset Kontur",r.style.cssText="font-size: 11px; font-weight: bold; color: #aaa; margin-bottom: 5px;",i.appendChild(r);const a=document.createElement("div");a.style.cssText="display: flex; align-items: center; margin-bottom: 5px; font-size: 11px;";const o=document.createElement("input");o.type="checkbox",o.checked=e.userData.offset.enabled,o.onchange=()=>{e.userData.offset.enabled=o.checked,this.updateCircle(e)};const c=document.createElement("span");c.innerText="Aktivieren",c.style.marginLeft="5px",a.appendChild(o),a.appendChild(c),i.appendChild(a),new It(i,"Abstand",e.userData.offset.radius,1,l=>{e.userData.offset.radius=l,e.userData.offset.enabled&&this.updateCircle(e)}),t.appendChild(i)}}updateCircle(e){const t=e.userData.baseSize.radius;st.updateCircleRadius(e,t)}}class Rg{constructor(e,t,n,i){k(this,"eventBus");k(this,"viewManager");k(this,"toolbar");this.eventBus=e,this.viewManager=n,this.toolbar=new Ag(e),new Cg(e,t,i),this.initUIListeners(),this.initKeyboardShortcuts()}initUIListeners(){this.eventBus.on("ui-focus-clicked",()=>{const e=window.app.objectManager.getSelectedObjects();e.length===1&&this.viewManager.focusOnObject(e[0])}),this.eventBus.on("toggle-debug-console",()=>{this.toolbar.debugConsole.toggle()})}initKeyboardShortcuts(){window.addEventListener("keydown",e=>{if(e.key==="F12"){e.preventDefault(),this.toolbar.debugConsole.toggle();return}if(e.key==="F11"){e.preventDefault(),document.fullscreenElement?document.exitFullscreen().catch(()=>{}):document.documentElement.requestFullscreen().catch(()=>{});return}const t=e.target;if(t.tagName==="INPUT"||t.tagName==="TEXTAREA")return;const n=e.key.toLowerCase();switch(n){case"p":this.viewManager.setActiveView(ut.PERSPECTIVE);return;case"t":this.viewManager.setActiveView(ut.TOP);return;case"f":this.viewManager.setActiveView(ut.FRONT);return;case"l":this.viewManager.setActiveView(ut.LEFT);return}switch(n){case"v":this.eventBus.emit("tool-selected","select");break;case"s":this.eventBus.emit("tool-selected","square");break;case"c":this.eventBus.emit("tool-selected","circle");break;case"escape":this.eventBus.emit("tool-selected","select");break;case"d":window.debugScene();break}})}}class Pg{constructor(e,t){k(this,"eventBus");k(this,"viewManager");k(this,"topRulerCanvas");k(this,"leftRulerCanvas");k(this,"topCtx");k(this,"leftCtx");k(this,"rulerThickness",20);k(this,"toolbarWidth",35);k(this,"headerHeight",40);k(this,"propertiesWidth",0);k(this,"footerHeight",30);this.eventBus=e,this.viewManager=t,this.topRulerCanvas=document.createElement("canvas"),this.leftRulerCanvas=document.createElement("canvas"),this.topCtx=this.topRulerCanvas.getContext("2d"),this.leftCtx=this.leftRulerCanvas.getContext("2d"),this.setupRulers(),this.initListeners(),setTimeout(()=>this.updateRulers(),100)}setupRulers(){const e=document.getElementById("app");if(!e)return;const t=(i,r)=>{i.style.position="absolute",i.style.backgroundColor="#222",i.style.zIndex="100",i.style.pointerEvents="none",r?(i.style.top=this.headerHeight+"px",i.style.left=this.toolbarWidth+this.rulerThickness+"px",i.style.height=this.rulerThickness+"px",i.style.right=this.propertiesWidth+"px"):(i.style.top=this.headerHeight+this.rulerThickness+"px",i.style.left=this.toolbarWidth+"px",i.style.width=this.rulerThickness+"px",i.style.bottom=this.footerHeight+"px"),e.appendChild(i)};t(this.topRulerCanvas,!0),t(this.leftRulerCanvas,!1);const n=document.createElement("div");Object.assign(n.style,{position:"absolute",top:this.headerHeight+"px",left:this.toolbarWidth+"px",width:this.rulerThickness+"px",height:this.rulerThickness+"px",background:"#333",zIndex:"101",borderRight:"1px solid #555",borderBottom:"1px solid #555",color:"#aaa",fontSize:"9px",display:"flex",alignItems:"center",justifyContent:"center"}),n.innerText="mm",e.appendChild(n)}initListeners(){this.eventBus.on("camera-change",()=>requestAnimationFrame(()=>this.updateRulers())),this.eventBus.on("properties-panel-visible",()=>{this.propertiesWidth=150,this.topRulerCanvas.style.right=this.propertiesWidth+"px",requestAnimationFrame(()=>this.updateRulers())}),this.eventBus.on("properties-panel-hidden",()=>{this.propertiesWidth=0,this.topRulerCanvas.style.right=this.propertiesWidth+"px",requestAnimationFrame(()=>this.updateRulers())})}getScreenPos(e,t,n){const i=e.clone();i.project(t);const r=(i.x*.5+.5)*n.width,a=(-(i.y*.5)+.5)*n.height;return new j(r+n.left,a+n.top)}updateRulers(){const e=this.viewManager.getActiveView?this.viewManager.getActiveView():ut.PERSPECTIVE;this.topRulerCanvas.style.display="block",this.leftRulerCanvas.style.display="block";const t=this.viewManager.getActiveCamera();if(!t)return;const n=document.getElementById("app");if(!n)return;t.updateMatrixWorld();const i=this.toolbarWidth+this.rulerThickness,r=n.clientWidth-i-this.propertiesWidth;this.topRulerCanvas.width=r,this.topRulerCanvas.height=this.rulerThickness;const a=this.headerHeight+this.rulerThickness,o=n.clientHeight-a-this.footerHeight;this.leftRulerCanvas.width=this.rulerThickness,this.leftRulerCanvas.height=o;const l=this.viewManager.getCanvas().getBoundingClientRect(),h=this.topRulerCanvas.getBoundingClientRect(),u=this.leftRulerCanvas.getBoundingClientRect(),f=this.getScreenPos(new M(0,0,0),t,l);let p=new M(100,0,0);e===ut.TOP||e===ut.PERSPECTIVE||e===ut.FRONT?p.set(100,0,0):e===ut.LEFT&&p.set(0,0,100);const g=this.getScreenPos(p,t,l),v=Math.abs(g.x-f.x)/100,m=f.x-h.left;this.drawRulerAnchor(this.topCtx,!0,m,v);let d=new M(0,0,0);e===ut.TOP||e===ut.PERSPECTIVE?d.set(0,0,100):d.set(0,100,0);const _=this.getScreenPos(d,t,l),x=Math.abs(_.y-f.y)/100,y=_.y<f.y,R=f.y-u.top;this.drawRulerAnchor(this.leftCtx,!1,R,x,y)}drawRulerAnchor(e,t,n,i,r=!1){const a=e.canvas.width,o=e.canvas.height;e.clearRect(0,0,a,o),e.fillStyle="#222",e.fillRect(0,0,a,o),e.strokeStyle="#666",e.fillStyle="#aaa",e.font="10px sans-serif",e.lineWidth=1,e.beginPath(),t?(e.moveTo(0,o-.5),e.lineTo(a,o-.5)):(e.moveTo(a-.5,0),e.lineTo(a-.5,o)),e.stroke();let c=1;for(;c*i<50;)c.toString().startsWith("1")?c*=2:c.toString().startsWith("2")?c*=2.5:c*=2;const l=v=>r?(n-v)/i:(v-n)/i,h=l(0),u=l(t?a:o),f=Math.min(h,u),p=Math.max(h,u),g=Math.ceil(f/c)*c;for(let v=g;v<=p;v+=c){let m=0;if(r?m=n-v*i:m=n+v*i,m=Math.floor(m)+.5,e.beginPath(),Math.abs(v)<1e-4?(e.strokeStyle="#ff4444",e.lineWidth=2):(e.strokeStyle="#666",e.lineWidth=1),t){if(m>=-5&&m<=a+5){e.moveTo(m,o),e.lineTo(m,o-5),e.stroke();const d=Math.round(v*100)/100;e.fillStyle=Math.abs(v)<1e-4?"#ff4444":"#aaa",e.fillText(d.toString(),m+2,o-8)}}else if(m>=-5&&m<=o+5){e.moveTo(a,m),e.lineTo(a-5,m),e.stroke();const d=Math.round(v*100)/100;e.save(),e.translate(a-8,m+2),e.rotate(-Math.PI/2),e.fillStyle=Math.abs(v)<1e-4?"#ff4444":"#aaa",e.fillText(d.toString(),0,0),e.restore()}}}}class Lg{constructor(e,t){k(this,"eventBus");k(this,"viewManager");k(this,"raycaster");k(this,"pointer");this.eventBus=e,this.viewManager=t,this.raycaster=new Aa,this.pointer=new j,this.initListeners()}initListeners(){this.viewManager.getCanvas().addEventListener("pointerdown",t=>this.onPointerDown(t)),window.addEventListener("pointermove",t=>this.onPointerMove(t)),window.addEventListener("pointerup",t=>this.onPointerUp(t))}updatePointer(e){const n=this.viewManager.getCanvas().getBoundingClientRect();this.pointer.x=(e.clientX-n.left)/n.width*2-1,this.pointer.y=-((e.clientY-n.top)/n.height)*2+1;const i=this.viewManager.getActiveCamera();i&&this.raycaster.setFromCamera(this.pointer,i)}getIntersection(){const e=new M,t=this.viewManager.getActiveCamera();if(!t)return null;const n=new M;t.getWorldDirection(n);let i=new M;Math.abs(n.z)>.9?i.set(0,0,1):Math.abs(n.x)>.9?i.set(1,0,0):(Math.abs(n.y)>.9,i.set(0,1,0));const r=new Jt(i,0);return Math.abs(this.raycaster.ray.direction.dot(i))<1e-4?null:this.raycaster.ray.intersectPlane(r,e)}onPointerDown(e){this.updatePointer(e);const t={originalEvent:e,pointer:this.pointer.clone(),intersection:this.getIntersection(),type:"down"};this.eventBus.emit("interaction-pointer-down",t)}onPointerMove(e){this.updatePointer(e);const t={originalEvent:e,pointer:this.pointer.clone(),intersection:this.getIntersection(),type:"move"};this.eventBus.emit("interaction-pointer-move",t)}onPointerUp(e){this.updatePointer(e);const t={originalEvent:e,pointer:this.pointer.clone(),intersection:this.getIntersection(),type:"up"};this.eventBus.emit("interaction-pointer-up",t)}}class Dg{constructor(e){k(this,"tools",new Map);k(this,"activeTool",null);k(this,"eventBus");this.eventBus=e,this.initListeners()}registerTool(e){this.tools.set(e.id,e)}selectTool(e){this.activeTool&&this.activeTool.deactivate(),e&&this.tools.has(e)?(this.activeTool=this.tools.get(e),this.activeTool.activate(),console.log(`Tool activated: ${e}`)):this.activeTool=null,this.eventBus.emit("tool-active-changed",e)}getActiveToolId(){return this.activeTool?this.activeTool.id:null}initListeners(){this.eventBus.on("interaction-pointer-down",e=>{this.activeTool&&this.activeTool.onPointerDown(e)}),this.eventBus.on("interaction-pointer-move",e=>{this.activeTool&&this.activeTool.onPointerMove(e)}),this.eventBus.on("interaction-pointer-up",e=>{this.activeTool&&this.activeTool.onPointerUp(e)}),this.eventBus.on("tool-selected",e=>{this.selectTool(e)})}}class Og{parse(e,t={}){t=Object.assign({binary:!1},t);const n=t.binary,i=[];let r=0;e.traverse(function(d){if(d.isMesh){const _=d.geometry,x=_.index,y=_.getAttribute("position");r+=x!==null?x.count/3:y.count/3,i.push({object3d:d,geometry:_})}});let a,o=80;if(n===!0){const d=r*2+r*3*4*4+80+4,_=new ArrayBuffer(d);a=new DataView(_),a.setUint32(o,r,!0),o+=4}else a="",a+=`solid exported
`;const c=new M,l=new M,h=new M,u=new M,f=new M,p=new M;for(let d=0,_=i.length;d<_;d++){const x=i[d].object3d,y=i[d].geometry,R=y.index,E=y.getAttribute("position");if(R!==null)for(let C=0;C<R.count;C+=3){const N=R.getX(C+0),b=R.getX(C+1),T=R.getX(C+2);g(N,b,T,E,x)}else for(let C=0;C<E.count;C+=3){const N=C+0,b=C+1,T=C+2;g(N,b,T,E,x)}}return n===!1&&(a+=`endsolid exported
`),a;function g(d,_,x,y,R){c.fromBufferAttribute(y,d),l.fromBufferAttribute(y,_),h.fromBufferAttribute(y,x),R.isSkinnedMesh===!0&&(R.applyBoneTransform(d,c),R.applyBoneTransform(_,l),R.applyBoneTransform(x,h)),c.applyMatrix4(R.matrixWorld),l.applyMatrix4(R.matrixWorld),h.applyMatrix4(R.matrixWorld),v(c,l,h),m(c),m(l),m(h),n===!0?(a.setUint16(o,0,!0),o+=2):(a+=`		endloop
`,a+=`	endfacet
`)}function v(d,_,x){u.subVectors(x,_),f.subVectors(d,_),u.cross(f).normalize(),p.copy(u).normalize(),n===!0?(a.setFloat32(o,p.x,!0),o+=4,a.setFloat32(o,p.y,!0),o+=4,a.setFloat32(o,p.z,!0),o+=4):(a+="	facet normal "+p.x+" "+p.y+" "+p.z+`
`,a+=`		outer loop
`)}function m(d){n===!0?(a.setFloat32(o,d.x,!0),o+=4,a.setFloat32(o,d.y,!0),o+=4,a.setFloat32(o,d.z,!0),o+=4):a+="			vertex "+d.x+" "+d.y+" "+d.z+`
`}}}class Ng{constructor(e,t){k(this,"eventBus");k(this,"objectManager");k(this,"fileHandle",null);k(this,"currentProjectName","Unbenanntes Projekt");k(this,"dbName","KonstruktionDB");k(this,"storeName","AutoSave");k(this,"brushProfiles",{});this.eventBus=e,this.objectManager=t,this.eventBus.on("new-project",()=>this.newProject()),this.eventBus.on("save-project",()=>this.saveProject()),this.eventBus.on("save-project-as",()=>this.saveProjectAs()),this.eventBus.on("load-project",n=>this.loadProject(n)),this.eventBus.on("load-project-from-handle",n=>this.loadProjectFromHandle(n)),this.eventBus.on("export-stl",()=>this.exportSTL()),this.eventBus.on("save-brush-profile",({name:n,profile:i})=>{n&&i&&(this.brushProfiles[n]=i,console.log(`Brush profile "${n}" saved.`),this.eventBus.emit("brush-profiles-updated",this.brushProfiles))}),this.eventBus.on("request-brush-profiles",n=>{n&&n(this.brushProfiles)}),this.eventBus.on("save-brush-profile-current-state",({name:n,profile:i})=>{if(n&&i){const r={...i};r.bezierProfile&&(r.bezierProfile={p1:{x:r.bezierProfile.p1.x,y:r.bezierProfile.p1.y},cp1:{x:r.bezierProfile.cp1.x,y:r.bezierProfile.cp1.y},cp2:{x:r.bezierProfile.cp2.x,y:r.bezierProfile.cp2.y},p0:{x:r.bezierProfile.p0.x,y:r.bezierProfile.p0.y}}),this.brushProfiles[n]=r,console.log(`Current brush state saved as profile "${n}".`),this.eventBus.emit("brush-profiles-updated",this.brushProfiles)}}),this.eventBus.on("request-project-name",()=>{this.eventBus.emit("project-name-changed",this.currentProjectName)}),window.addEventListener("beforeunload",()=>this.saveAutoSave()),this.loadAutoSave(),console.log("ProjectManager initialized")}updateProjectName(e){this.currentProjectName=e,this.eventBus.emit("project-name-changed",e)}newProject(){confirm("Möchten Sie wirklich ein neues Projekt starten? Alle ungespeicherten Änderungen gehen verloren.")&&(this.objectManager.clearAll(),this.fileHandle=null,this.updateProjectName("Unbenanntes Projekt"),this.clearAutoSave(),this.eventBus.emit("ui-focus-clicked",null))}async saveAutoSave(){const e=this.getProjectDataAsString(),t=indexedDB.open(this.dbName,1);t.onupgradeneeded=n=>{const i=n.target.result;i.objectStoreNames.contains(this.storeName)||i.createObjectStore(this.storeName)},t.onsuccess=n=>{const a=n.target.result.transaction(this.storeName,"readwrite").objectStore(this.storeName);a.put(e,"lastProject"),a.put(this.currentProjectName,"lastProjectName")}}clearAutoSave(){const e=indexedDB.open(this.dbName,1);e.onsuccess=t=>{const r=t.target.result.transaction(this.storeName,"readwrite").objectStore(this.storeName);r.delete("lastProject"),r.delete("lastProjectName")}}loadAutoSave(){const e=indexedDB.open(this.dbName,1);e.onupgradeneeded=t=>{const n=t.target.result;n.objectStoreNames.contains(this.storeName)||n.createObjectStore(this.storeName)},e.onsuccess=t=>{const r=t.target.result.transaction(this.storeName,"readonly").objectStore(this.storeName),a=r.get("lastProjectName");a.onsuccess=()=>{a.result&&this.updateProjectName(a.result)};const o=r.get("lastProject");o.onsuccess=()=>{if(o.result)try{const c=JSON.parse(o.result);this.loadProjectData(c),console.log("AutoSave loaded.")}catch(c){console.error("Failed to parse AutoSave",c)}}}}async saveProject(){this.fileHandle?(await this.writeDataToFile(this.fileHandle),this.saveAutoSave()):await this.saveProjectAs()}async saveProjectAs(){const e=this.getProjectDataAsString();if(window.showSaveFilePicker)try{const t=await window.showSaveFilePicker({suggestedName:`${this.currentProjectName}.json`,types:[{description:"JSON-Projektdateien",accept:{"application/json":[".json"]}}]});this.fileHandle=t,this.updateProjectName(t.name.replace(".json","")),await this.writeDataToFile(this.fileHandle),this.saveAutoSave()}catch(t){if(t.name==="AbortError")return;console.error("Error saving file:",t)}else{const t=prompt("Bitte geben Sie einen Dateinamen ein:",this.currentProjectName);if(t){this.updateProjectName(t);const n=new Blob([e],{type:"application/json"}),i=URL.createObjectURL(n),r=document.createElement("a");r.href=i,r.download=`${t}.json`,document.body.appendChild(r),r.click(),document.body.removeChild(r),URL.revokeObjectURL(i),this.saveAutoSave()}}}async exportSTL(){const e=this.objectManager.getSelectedObjects();if(e.length===0){alert("Bitte wähle ein Objekt aus, das exportiert werden soll.");return}const t=e[0];let n=null,i=!1;if(t.traverse(g=>{g instanceof Ge&&g.visible&&!g.userData.isHelper&&!g.userData.isGuide&&(i=!0)}),i&&(n=t),!n){alert("Das ausgewählte Objekt enthält kein exportierbares 3D-Mesh. Hast du 'In Mesh umwandeln' oder 'Extrudieren' verwendet?");return}const r=[];n.updateMatrixWorld(!0),n.traverse(g=>{if(g instanceof Ge&&g.geometry&&g.visible&&!g.userData.isHelper){const v=g.geometry.clone();v.applyMatrix4(g.matrixWorld),r.push(v)}});let a=null;if(r.length>0)try{let g=ul(r,!1);g&&(g.deleteAttribute("normal"),g.deleteAttribute("uv"),g=wi(g,.1),a=new Ge(g))}catch(g){console.warn("Geometry merge failed during check preparation",g)}const o=a?this.getOpenEdges(a):null;if(o){const g=t.matrixWorld.clone().invert();if(o.applyMatrix4(g),t.add(o),setTimeout(()=>{o.parent&&o.parent.remove(o)},1e4),confirm(`Warnung: Das Modell ist nicht wasserdicht! Die offenen Kanten wurden ROT markiert.

Möchtest du versuchen, die Löcher automatisch zu schließen (z.B. durch Vertex-Merge)?`)){let m=a.geometry.clone();m.attributes.normal&&m.deleteAttribute("normal"),m.attributes.uv&&m.deleteAttribute("uv"),m=wi(m,.6),m.computeVertexNormals(),n=new Ge(m,new Nt)}else if(!confirm("Möchtest du das Modell trotzdem (defekt) exportieren?")){o.parent&&o.parent.remove(o);return}}const c=new rt;c.rotation.x=-Math.PI/2;let l;n.parent===null&&n.uuid!==t.uuid?l=n:l=n.clone(),c.add(l),l.scale.y=-1,l.traverse(g=>{if(g instanceof Ge&&g.geometry&&g.geometry.index){const v=g.geometry.index;for(let m=0;m<v.count;m+=3){const d=v.getX(m),_=v.getX(m+1);v.setX(m,_),v.setX(m+1,d)}g.geometry.index.needsUpdate=!0,g.geometry.computeVertexNormals()}}),c.updateMatrixWorld(!0);const h=new Og,u={binary:!0},f=h.parse(c,u),p=new Blob([f],{type:"application/octet-stream"});if(window.showSaveFilePicker)try{const v=await(await window.showSaveFilePicker({suggestedName:`${t.name||"Model"}.stl`,types:[{description:"STL 3D Modell",accept:{"model/stl":[".stl"]}}]})).createWritable();await v.write(p),await v.close()}catch(g){g.name!=="AbortError"&&console.error(g)}else{const g=URL.createObjectURL(p),v=document.createElement("a");v.href=g,v.download=`${t.name||"Model"}.stl`,document.body.appendChild(v),v.click(),document.body.removeChild(v),URL.revokeObjectURL(g)}}getOpenEdges(e){if(!e.geometry)return null;let t=e.geometry.clone();if(!t.index)try{t=wi(t)}catch(h){console.warn("Merge vertices failed during check",h)}if(!t.index)return null;const n=t.index,i={};for(let h=0;h<n.count;h+=3){const u=n.getX(h),f=n.getY(h),p=n.getZ(h),g=(v,m)=>{const d=v<m?`${v}_${m}`:`${m}_${v}`;i[d]=(i[d]||0)+1};g(u,f),g(f,p),g(p,u)}const r=t.attributes.position,a=[];for(const h in i)if(i[h]===1){const u=h.split("_"),f=parseInt(u[0]),p=parseInt(u[1]);a.push(r.getX(f),r.getY(f),r.getZ(f)),a.push(r.getX(p),r.getY(p),r.getZ(p))}if(a.length===0)return null;const o=new tt;o.setAttribute("position",new nt(a,3));const c=new Xt({color:16711680,linewidth:2,depthTest:!1}),l=new Si(o,c);return l.renderOrder=9999,l}getProjectDataAsString(){const t=this.objectManager.getObjects().map(r=>st.describeObject(r)).filter(r=>r!==null);let n=null;this.eventBus.emit("request-brush-state-sync",r=>{n=r});const i={version:"1.0",objects:t,brushState:n,brushProfiles:this.brushProfiles};return JSON.stringify(i,null,2)}async writeDataToFile(e){try{const t=this.getProjectDataAsString(),n=await e.createWritable();await n.write(t),await n.close(),console.log("Project saved successfully.")}catch(t){console.error("Failed to write to file:",t)}}async loadProjectFromHandle(e){if(confirm("Möchten Sie das Projekt laden? Alle ungespeicherten Änderungen gehen verloren."))try{const t=await e.getFile();this.fileHandle=e,this.updateProjectName(e.name.replace(".json","")),this.processProjectFile(t)}catch(t){console.error("Failed to load project from handle:",t)}}loadProject(e){confirm("Möchten Sie das Projekt laden? Alle ungespeicherten Änderungen gehen verloren.")&&(this.updateProjectName(e.name.replace(".json","")),this.fileHandle=null,this.processProjectFile(e))}processProjectFile(e){const t=new FileReader;t.onload=n=>{var i;try{const r=(i=n.target)==null?void 0:i.result,a=JSON.parse(r);this.loadProjectData(a)}catch(r){alert("Fehler beim Laden der Projektdatei. Ist die Datei korrekt?"),console.error(r)}},t.readAsText(e)}loadProjectData(e){if(!e.objects||e.version!=="1.0")throw new Error("Incompatible or invalid project file.");this.objectManager.clearAll(),this.brushProfiles=e.brushProfiles||{},this.eventBus.emit("brush-profiles-updated",this.brushProfiles),setTimeout(()=>{e.brushState&&this.eventBus.emit("load-brush-state",e.brushState),e.objects.forEach(t=>{const n=st.recreateShape(t);n&&this.objectManager.addObject(n,!1)}),this.objectManager.deselectAll(),this.eventBus.emit("tool-selected","select"),this.eventBus.emit("camera-change",null),this.saveAutoSave()},100)}}class sr{constructor(e,t){k(this,"eventBus");k(this,"objectManager");k(this,"gridStep",10);k(this,"isSnapEnabled",!1);this.eventBus=e,this.objectManager=t,this.eventBus.on("toggle-snap",n=>{this.isSnapEnabled=n}),this.eventBus.on("settings-grid-changed",n=>{this.gridStep=n.step})}applySnap(e){const t=this.isSnapEnabled?Math.max(.1,this.gridStep):0;t>0&&(e.x=Math.round(e.x/t)*t,e.z=Math.round(e.z/t)*t,e.y=Math.round(e.y/t)*t)}getNextName(e){return`${e} ${Date.now()}`}setCameraLock(e){this.eventBus.emit("camera-controls-lock",e)}}class bc{static createTranslateGizmo(){const e=new rt;e.userData.isGizmo=!0,e.userData.mode="translate";const t=.4,n=5,i=20,r=2,a=6,o=6,c=(u,f,p)=>{const g=new rt,v=new Pi(t,t,i,8);v.translate(0,i/2,0);const m=new wa(r,a,16);m.translate(0,i+a/2,0);const d=o,_=i+a,x=_-d,y=new Pi(n,n,x,8);y.translate(0,d+x/2,0);const R=new Ge(y,new Nt({visible:!1}));R.userData={axis:u,mode:"translate"};const E=this.makeMat(f),C=new Ge(v,E),N=new Ge(m,E);C.userData={axis:u,mode:"translate"},N.userData={axis:u,mode:"translate"},C.renderOrder=100,N.renderOrder=100,g.add(C),g.add(N),g.add(R);const b=this.createLabel(p,"#"+new Ue(f).getHexString());return b.position.set(0,_+4,0),b.userData={axis:u,mode:"translate"},b.renderOrder=100,g.add(b),u==="x"&&g.rotateZ(-Math.PI/2),u==="z"&&g.rotateX(Math.PI/2),g};e.add(c("x",16729156,"X")),e.add(c("y",4521796,"Y")),e.add(c("z",6711039,"Z"));const l=new Ji;l.moveTo(0,0),l.lineTo(o,0),l.lineTo(0,o),l.lineTo(0,0);const h=(u,f,p)=>{const g=new rt,v=new Qi(l);p!=null&&p.x&&v.rotateX(p.x),p!=null&&p.y&&v.rotateY(p.y);const m=this.makeMat(f,.2,wt),d=new Ge(v,m);d.renderOrder=99,d.userData={axis:u,mode:"translate"};const _=[new j(o,0),new j(0,o)],x=new tt().setFromPoints(_);p!=null&&p.x&&x.rotateX(p.x),p!=null&&p.y&&x.rotateY(p.y);const y=new Xt({color:f,depthTest:!1,transparent:!0,opacity:.4}),R=new bi(x,y);return R.renderOrder=99,R.userData={axis:u,noPick:!0},g.add(d),g.add(R),g};return e.add(h("xz",16776960,{x:Math.PI/2})),e.add(h("xy",16776960)),e.add(h("zy",16776960,{y:Math.PI/2})),e}static createRotateGizmo(){const e=new rt;e.userData.isGizmo=!0,e.userData.mode="rotate";const t=30,n=.5,i=4,r=(a,o)=>{const c=new rt,l=new js(t,n,8,64),h=this.makeMat(o),u=new Ge(l,h);u.renderOrder=100,u.userData={axis:a,mode:"rotate"};const f=new js(t,i,8,32),p=new Nt({visible:!1}),g=new Ge(f,p);return g.userData={axis:a,mode:"rotate"},c.add(u),c.add(g),a==="x"&&c.rotateY(Math.PI/2),a==="y"&&c.rotateX(Math.PI/2),c};return e.add(r("x",16729156)),e.add(r("y",4521796)),e.add(r("z",6711039)),e}static makeMat(e,t=1,n){return new Nt({color:e,depthTest:!1,depthWrite:!1,transparent:!0,opacity:t,side:n})}static createLabel(e,t){const n=document.createElement("canvas");n.width=64,n.height=64;const i=n.getContext("2d");i.fillStyle="white",i.font="Bold 48px Arial",i.textAlign="center",i.textBaseline="middle",i.fillText(e,32,32);const r=new nr(n),a=new pn({map:r,transparent:!0,color:new Ue(t)}),o=new qi(a);return o.scale.set(6,6,1),o}}class pa{static updateScales(e,t){e.traverse(r=>{const a=r.userData.isGizmo,o=r.userData.isAnchor,c=r.userData.isControlPoint;if(a||o||c){let l=1;if(t instanceof bt){const h=new M;r.getWorldPosition(h),l=h.distanceTo(t.position)*.015}else t instanceof Ft&&(l=1/t.zoom*15);if(l=Math.max(.001,l),a?l*=.15:r.userData.isMainAnchor?l*=1:c?l*=.7:l*=.8,r.parent){const h=new M;r.parent.getWorldScale(h),h.x!==0&&h.y!==0&&h.z!==0?r.scale.set(l/h.x,l/h.y,l/h.z):r.scale.set(l,l,l)}else r.scale.set(l,l,l)}})}}class Ig extends sr{constructor(t,n,i,r){super(t,i);k(this,"id","select");k(this,"viewManager");k(this,"raycaster",new Aa);k(this,"machineBrush");k(this,"activeGizmoMode","translate");k(this,"translateGizmo");k(this,"rotateGizmo");k(this,"selectedObject",null);k(this,"selectedSubObject",null);k(this,"isDragging",!1);k(this,"dragMode","none");k(this,"dragAxis",null);k(this,"dragStartPoint",new M);k(this,"objectStartPos",new M);k(this,"subObjectStartPos",new M);k(this,"dragPlane",new Jt);k(this,"dragOffset",new M);k(this,"lastPointer",new j);k(this,"activeAnchor",null);k(this,"hoveredSubObject",null);k(this,"hoveredOriginalColor",null);k(this,"activeSubObjectOriginalColor",null);k(this,"selectionMarqueeDiv");k(this,"dragStartPosition",new j);k(this,"dragStartScreen",{x:0,y:0});k(this,"perspectiveSelectMode",!1);this.viewManager=n,this.machineBrush=r,window.debugScene=()=>{console.log("--- SCENE DEBUG ---"),this.objectManager.getObjects().forEach(c=>{const l=new M;c.getWorldPosition(l),console.log(`Object: ${c.name} [${c.uuid}]`),console.log(`  Type: ${c.userData.type}, Visible: ${c.visible}`),console.log(`  WorldPos: x=${l.x.toFixed(2)}, y=${l.y.toFixed(2)}, z=${l.z.toFixed(2)}`),console.log(`  LocalScale: x=${c.scale.x.toFixed(2)}, y=${c.scale.y.toFixed(2)}, z=${c.scale.z.toFixed(2)}`),c.children.forEach(h=>{if(h.userData.isAnchor){const u=new M;if(h.getWorldPosition(u),console.log(`    Anchor [${h.uuid}]: x=${u.x.toFixed(2)}, y=${u.y.toFixed(2)}, z=${u.z.toFixed(2)}`),h instanceof qi||h instanceof Ge){const f=h.material;console.log(`      Color: #${f.color.getHexString()}`)}}})}),console.log("Selection:",this.objectManager.getSelectedObjects().map(c=>c.name))},this.raycaster.params.Line.threshold=3,this.translateGizmo=bc.createTranslateGizmo(),this.rotateGizmo=bc.createRotateGizmo(),this.translateGizmo.visible=!1,this.rotateGizmo.visible=!1;const a=this.viewManager.getScene();a.add(this.translateGizmo),a.add(this.rotateGizmo),this.selectionMarqueeDiv=document.createElement("div"),this.selectionMarqueeDiv.style.cssText="position:fixed;border:1px solid #00aaff;pointer-events:none;display:none;box-sizing:border-box;",document.body.appendChild(this.selectionMarqueeDiv),this.eventBus.on("perspective-mode-changed",o=>{this.perspectiveSelectMode=o==="select"}),this.eventBus.on("selection-changed",o=>{o.length===1?this.selectedObject=o[0]:this.selectedObject=null,this.updateGizmo()}),window.addEventListener("keydown",o=>{const c=o.target;c.tagName==="INPUT"||c.tagName==="TEXTAREA"||this.selectedObject&&(o.key.toLowerCase()==="t"?(this.activeGizmoMode="translate",this.updateGizmo()):o.key.toLowerCase()==="r"&&(this.activeGizmoMode="rotate",this.updateGizmo()))})}activate(){this.updateGizmo()}deactivate(){this.translateGizmo.visible=!1,this.rotateGizmo.visible=!1,this.selectedObject=null,this.selectionMarqueeDiv.style.display="none"}updateGizmo(){if(this.translateGizmo.visible=!1,this.rotateGizmo.visible=!1,this.viewManager.getScene().traverse(n=>{(n.userData.isAnchor||n.userData.isControlPoint||n.userData.isHelperLine||n.userData.isNode)&&(n.userData.isMainAnchor||(n.visible=!1))}),this.selectedObject){const n=this.activeGizmoMode==="translate"?this.translateGizmo:this.rotateGizmo;n.visible=!0,n.position.copy(this.selectedObject.position),n.quaternion.copy(this.selectedObject.quaternion),this.activeGizmoMode==="translate"&&n.rotation.set(0,0,0);let i=0,r=0;this.selectedObject.traverse(o=>{(o.userData.isMainAnchor||o.userData.isControlPoint||o.userData.isNode||o.userData.isHelperLine)&&(o.visible=!0,o.userData.isNode&&i++,o.userData.isControlPoint&&r++)}),console.log(`SelectTool: Updated visibility for object "${this.selectedObject.name}". Found ${i} nodes and ${r} control points.`);const a=this.viewManager.getActiveCamera();a&&pa.updateScales(this.viewManager.getScene(),a)}}updateRaycasterThresholds(){const t=this.viewManager.getActiveCamera();if(t instanceof Ft){const n=t.zoom;this.raycaster.params.Line.threshold=5/n,this.raycaster.params.Points.threshold=5/n}else this.raycaster.params.Line.threshold=.5,this.raycaster.params.Points.threshold=2}constrainToViewPlane(t,n){const i=this.viewManager.getActiveCamera();if(i instanceof Ft){const r=new M;i.getWorldDirection(r),Math.abs(r.z)>Math.abs(r.x)&&Math.abs(r.z)>Math.abs(r.y)?t.z=n.z:Math.abs(r.x)>Math.abs(r.z)&&Math.abs(r.x)>Math.abs(r.y)?t.x=n.x:t.y=n.y}}cancelMarqueeSelection(){this.dragMode==="marquee_select"&&(this.isDragging=!1,this.dragMode="none",this.selectionMarqueeDiv.style.display="none")}onPointerDown(t){if(t.originalEvent.pointerType==="touch"&&!t.originalEvent.isPrimary){this.cancelMarqueeSelection(),this.viewManager.setControlsEnabled(!0);return}if(t.originalEvent.button!==0)return;this.updateRaycasterThresholds();const n=this.viewManager.getActiveCamera();if(!n)return;if(this.raycaster.setFromCamera(t.pointer,n),this.raycaster.intersectObject(this.machineBrush.group,!0).length>0){this.eventBus.emit("open-brush-properties",null);return}const r=this.activeGizmoMode==="translate"?this.translateGizmo:this.rotateGizmo;if(r.visible){const c=this.raycaster.intersectObject(r,!0);if(c.length>0&&c[0].object.userData.axis){this.startGizmoDrag(c[0].object.userData.axis,c[0].point);return}}const a=[];if(this.objectManager.getObjects().forEach(c=>{c.visible&&c.traverse(l=>{(l.userData.isAnchor||l.userData.isControlPoint||l.userData.isNode)&&l.visible&&a.push(l)})}),a.length>0){const c=this.raycaster.intersectObjects(a,!0);if(c.length>0){const l=c[0],h=l.object;let u=h.parent;for(;u&&u.parent&&u.parent.type!=="Scene"&&!u.userData.isSelectableRoot;)u=u.parent;h.userData.isMainAnchor&&u?(this.objectManager.selectObject(u),this.startObjectDrag(u)):(this.startSubObjectDrag(h,l.point),u&&u!==this.selectedObject&&this.objectManager.selectObject(u));return}}const o=this.raycaster.intersectObjects(this.objectManager.getObjects(),!0);if(o.length>0){let l=o[0].object;for(;l.parent&&l.parent.type!=="Scene"&&!l.userData.isSelectableRoot;)l=l.parent;this.objectManager.selectObject(l)}else!(t.originalEvent.pointerType==="touch")&&(this.viewManager.getActiveView()!==ut.PERSPECTIVE||this.perspectiveSelectMode)?this.startMarqueeSelection(t):this.objectManager.deselectAll()}startMarqueeSelection(t){this.isDragging=!0,this.dragMode="marquee_select",this.dragStartPosition.copy(t.pointer),this.dragStartScreen.x=t.originalEvent.clientX,this.dragStartScreen.y=t.originalEvent.clientY;const n=this.selectionMarqueeDiv;n.style.left=this.dragStartScreen.x+"px",n.style.top=this.dragStartScreen.y+"px",n.style.width="0px",n.style.height="0px",n.style.display="block",this.objectManager.deselectAll(),this.viewManager.setControlsEnabled(!1)}onPointerMove(t){this.updateRaycasterThresholds(),this.isDragging?this.dragMode==="gizmo"?this.handleGizmoDrag(t):this.dragMode==="sub-object"?this.handleSubObjectDrag(t):this.dragMode==="object"?this.handleObjectDrag(t):this.dragMode==="marquee_select"&&this.handleMarqueeSelectionDrag(t):this.handleHover(t)}handleMarqueeSelectionDrag(t){const n=this.dragStartScreen.x,i=this.dragStartScreen.y,r=t.originalEvent.clientX,a=t.originalEvent.clientY;this.selectionMarqueeDiv.style.left=Math.min(n,r)+"px",this.selectionMarqueeDiv.style.top=Math.min(i,a)+"px",this.selectionMarqueeDiv.style.width=Math.abs(r-n)+"px",this.selectionMarqueeDiv.style.height=Math.abs(a-i)+"px"}handleHover(t){this.updateRaycasterThresholds();const n=this.viewManager.getActiveCamera();if(!n)return;this.raycaster.setFromCamera(t.pointer,n);const i=this.activeGizmoMode==="translate"?this.translateGizmo:this.rotateGizmo;if(i.visible){const a=this.raycaster.intersectObject(i,!0);if(a.length>0&&a[0].object.userData.axis){this.setGizmoHighlight(a[0].object.userData.axis),this.resetHover();return}}this.setGizmoHighlight(null);const r=[];if(this.objectManager.getObjects().forEach(a=>{a.visible&&a.traverse(o=>{(o.userData.isAnchor||o.userData.isControlPoint||o.userData.isNode)&&o.visible&&r.push(o)})}),r.length>0){const a=this.raycaster.intersectObjects(r,!0);if(a.length>0){const o=a[0].object;this.hoveredSubObject!==o&&(this.resetHover(),this.hoveredSubObject=o,(o.material instanceof pn||o.material instanceof Nt)&&(o.userData.uniqueMat||(o.material=o.material.clone(),o.userData.uniqueMat=!0),this.hoveredOriginalColor=o.material.color.getHex(),o.material.color.setHex(16776960),o.material.needsUpdate=!0));return}}this.resetHover()}resetHover(){if(this.hoveredSubObject&&this.hoveredOriginalColor!==null){const t=this.hoveredSubObject.material;if(t instanceof pn||t instanceof Nt){let n=!1;if(this.selectedObject){let i=this.hoveredSubObject.parent;for(;i&&i.parent&&i.parent.type!=="Scene";)i=i.parent;i===this.selectedObject&&(n=!0)}n?this.hoveredSubObject.userData.isControlPoint?t.color.setHex(65280):t.color.setHex(16711680):t.color.setHex(this.hoveredOriginalColor)}}this.hoveredSubObject=null,this.hoveredOriginalColor=null}onPointerUp(t){if(this.isDragging=!1,this.dragMode==="marquee_select"&&(this.handleMarqueeSelectionEnd(t),this.selectionMarqueeDiv.style.display="none"),this.dragMode="none",this.viewManager.setControlsEnabled(!0),this.activeAnchor&&(this.activeAnchor.material instanceof pn&&this.activeAnchor.material.color.setHex(16711680),this.activeAnchor=null),this.selectedSubObject&&this.activeSubObjectOriginalColor!==null){const n=this.selectedSubObject;(n.material instanceof pn||n.material instanceof Nt)&&n.material.color.setHex(this.activeSubObjectOriginalColor),this.activeSubObjectOriginalColor=null}this.selectedSubObject=null,this.setGizmoHighlight(null)}handleMarqueeSelectionEnd(t){const n=this.viewManager.getActiveCamera();if(!n)return;const i=Math.min(this.dragStartPosition.x,t.pointer.x),r=Math.max(this.dragStartPosition.x,t.pointer.x),a=Math.min(this.dragStartPosition.y,t.pointer.y),o=Math.max(this.dragStartPosition.y,t.pointer.y);if(i===r||a===o){this.objectManager.deselectAll();return}const c=[],l=this.objectManager.getObjects(),h=new M;for(const u of l){if(!u.visible||!u.userData.isSelectableRoot)continue;const f=new Ln().setFromObject(u);if(f.isEmpty())continue;const p=[new M(f.min.x,f.min.y,f.min.z),new M(f.min.x,f.min.y,f.max.z),new M(f.min.x,f.max.y,f.min.z),new M(f.min.x,f.max.y,f.max.z),new M(f.max.x,f.min.y,f.min.z),new M(f.max.x,f.min.y,f.max.z),new M(f.max.x,f.max.y,f.min.z),new M(f.max.x,f.max.y,f.max.z)];let g=1/0,v=-1/0,m=1/0,d=-1/0;for(const _ of p)h.copy(_).project(n),!(isNaN(h.x)||isNaN(h.y))&&(g=Math.min(g,h.x),v=Math.max(v,h.x),m=Math.min(m,h.y),d=Math.max(d,h.y));g<=r&&v>=i&&m<=o&&d>=a&&c.push(u)}this.objectManager.deselectAll(),c.forEach(u=>this.objectManager.selectObject(u,!0))}setGizmoHighlight(t){this.translateGizmo.traverse(i=>{if(i instanceof Ge||i instanceof qi){const r=i.userData.axis;if(!r)return;const a=i.material;if(!a)return;let o=16777215;r==="x"&&(o=16729156),r==="y"&&(o=4521796),r==="z"&&(o=6711039),t==="all"||t===r?(a.color.setHex(16776960),i instanceof Ge&&(a.opacity=1)):(a.color.setHex(o),i instanceof Ge&&(a.opacity=r.length>1?.2:1))}})}startGizmoDrag(t,n){this.isDragging=!0,this.dragMode="gizmo",this.dragAxis=t,this.dragStartPoint.copy(n),this.selectedObject&&this.objectStartPos.copy(this.selectedObject.position),this.viewManager.setControlsEnabled(!1),this.setGizmoHighlight(t);const i=new M,r=new M,a=this.viewManager.getActiveCamera();a&&a.getWorldDirection(r);const o=new M;t.includes("x")?o.set(1,0,0):t.includes("y")?o.set(0,1,0):t.includes("z")&&o.set(0,0,1),Math.abs(o.dot(r))>.9?Math.abs(r.y)>.9?i.set(0,0,1):i.set(0,1,0):t==="x"?i.crossVectors(new M(1,0,0),r).cross(new M(1,0,0)):t==="y"?i.crossVectors(new M(0,1,0),r).cross(new M(0,1,0)):t==="z"?i.crossVectors(new M(0,0,1),r).cross(new M(0,0,1)):t==="xz"?i.set(0,1,0):t==="xy"?i.set(0,0,1):t==="zy"&&i.set(1,0,0),i.normalize(),this.dragPlane.setFromNormalAndCoplanarPoint(i,n)}startObjectDrag(t){this.isDragging=!0,this.dragMode="object",this.objectStartPos.copy(t.position),this.viewManager.setControlsEnabled(!1);const n=this.viewManager.getActiveCamera();let i=new M(0,1,0);if(n){const a=new M;n.getWorldDirection(a),i.copy(a).negate()}this.dragPlane.setFromNormalAndCoplanarPoint(i,t.position);const r=new M;if(this.raycaster.ray.intersectPlane(this.dragPlane,r)){const a=new M().subVectors(t.position,r);a.length()>5e4,this.dragOffset.copy(a)}else{this.isDragging=!1,this.dragMode="none",this.setCameraLock(!1);return}this.setGizmoHighlight("all")}startSubObjectDrag(t,n){this.isDragging=!0,this.dragMode="sub-object",this.selectedSubObject=t,this.viewManager.setControlsEnabled(!1);const i=t;(i.material instanceof pn||i.material instanceof Nt)&&(this.activeSubObjectOriginalColor=i.material.color.getHex(),i.material.color.setHex(16776960));const r=new M;t.getWorldPosition(r),this.subObjectStartPos.copy(r);const a=this.viewManager.getActiveCamera();let o=new M(0,1,0);if(a){const l=new M;a.getWorldDirection(l),o.copy(l).negate()}this.dragPlane.setFromNormalAndCoplanarPoint(o,n),this.dragStartPoint.copy(n);const c=new M;this.raycaster.ray.intersectPlane(this.dragPlane,c)?this.dragOffset.subVectors(r,c):this.dragOffset.set(0,0,0)}handleGizmoDrag(t){if(!this.selectedObject||!this.dragAxis)return;const n=this.viewManager.getActiveCamera();if(!n)return;this.raycaster.setFromCamera(t.pointer,n);const i=new M;if(this.raycaster.ray.intersectPlane(this.dragPlane,i)&&this.activeGizmoMode==="translate"){const r=i.clone().sub(this.dragStartPoint),a=this.objectStartPos.clone();this.dragAxis.includes("x")&&(a.x+=r.x),this.dragAxis.includes("y")&&(a.y+=r.y),this.dragAxis.includes("z")&&(a.z+=r.z),this.constrainToViewPlane(a,this.objectStartPos),this.viewManager.getActiveView()===ut.TOP&&(a.y=this.objectStartPos.y),this.applySnap(a),Number.isFinite(a.x)&&Number.isFinite(a.y)&&Number.isFinite(a.z)&&Math.abs(a.x)<2e4&&Math.abs(a.y)<2e4&&Math.abs(a.z)<2e4&&this.selectedObject.position.copy(a),this.updateGizmo()}}handleObjectDrag(t){if(!this.selectedObject)return;const n=this.viewManager.getActiveCamera();if(!n)return;const i=new j().copy(t.pointer).sub(this.lastPointer);this.lastPointer.copy(t.pointer);let r=null;if(n instanceof Ft){const a={width:n.right-n.left,height:n.top-n.bottom},o=new M(i.x*a.width/n.zoom,i.y*a.height/n.zoom,0);o.applyQuaternion(n.quaternion),r=this.selectedObject.position.clone().add(o)}else{this.raycaster.setFromCamera(t.pointer,n);const a=new M;this.raycaster.ray.intersectPlane(this.dragPlane,a)&&(r=a.add(this.dragOffset))}if(r){if(isNaN(r.x)||isNaN(r.y)||isNaN(r.z)||r.length()>1e6)return;if(this.constrainToViewPlane(r,this.objectStartPos),this.viewManager.getActiveView()===ut.TOP&&(r.y=this.objectStartPos.y),this.applySnap(r),this.constrainToViewPlane(r,this.objectStartPos),this.viewManager.getActiveView()===ut.TOP&&(r.y=this.objectStartPos.y),!Number.isFinite(r.x)||!Number.isFinite(r.y)||!Number.isFinite(r.z)){console.error(`DEBUG: Invalid position detected for object ${this.selectedObject.name}:`,r);return}if(Math.abs(r.x)>1e4||Math.abs(r.y)>1e4||Math.abs(r.z)>1e4){console.warn(`DEBUG: Object ${this.selectedObject.name} move blocked - out of bounds:`,r);return}this.selectedObject.position.copy(r),this.updateGizmo()}}handleSubObjectDrag(t){if(!this.selectedSubObject)return;const n=this.viewManager.getActiveCamera();if(!n)return;this.raycaster.setFromCamera(t.pointer,n);const i=new M;let r=null;if(this.raycaster.ray.intersectPlane(this.dragPlane,i)&&(r=i.add(this.dragOffset)),r){if(n instanceof bt&&(r.y=this.subObjectStartPos.y),this.constrainToViewPlane(r,this.subObjectStartPos),this.applySnap(r),t.originalEvent.altKey){const o=new M;this.raycaster.ray.intersectPlane(this.dragPlane,o)&&r.copy(o.add(this.dragOffset)),this.constrainToViewPlane(r,this.subObjectStartPos),this.viewManager.getActiveView()===ut.TOP&&(r.y=this.subObjectStartPos.y)}if(!Number.isFinite(r.x)||!Number.isFinite(r.y)||!Number.isFinite(r.z)){console.error("DEBUG: Invalid sub-object position detected:",r);return}if(Math.abs(r.x)>1e4||Math.abs(r.y)>1e4||Math.abs(r.z)>1e4){console.warn("DEBUG: Sub-object move blocked - out of bounds:",r);return}const a=this.selectedSubObject.parent;if(a){const o=r.clone();a.worldToLocal(o),this.selectedSubObject.position.copy(o),a.userData.type==="bezier_line"&&st.updateBezierSegmentGeometry(a);const c=a.userData.type==="bezier_path"||a.userData.type==="circle"||a.userData.type==="square"||a.userData.type==="line";this.selectedSubObject.userData.isNode&&c&&a.children.forEach(h=>{if(h.userData.type==="bezier_line"&&h.userData.isLinked&&h.userData.nodes){const u=h.userData.nodes,f=u.start===this.selectedSubObject,p=u.end===this.selectedSubObject;(f||p)&&st.updateBezierSegmentGeometry(h)}}),a.userData.type==="background_image"&&st.updateBackgroundImage(a);let l=a;for(;l.parent&&l.parent.type!=="Scene";)l=l.parent;this.eventBus.emit("update-object-geometry",l)}}}}class Ug extends sr{constructor(t,n,i){super(t,i);k(this,"id","line");k(this,"points",[]);k(this,"draftGroup",null);k(this,"draftMovingNode",null);k(this,"lastFixedNode",null);k(this,"viewManager");this.viewManager=n}activate(){this.resetState()}deactivate(){this.finishPath(),this.viewManager.setControlsEnabled(!0)}onPointerDown(t){if(t.originalEvent.button!==0){this.finishPath();return}if(!t.intersection)return;const n=t.intersection.clone();this.applySnap(n),this.points.push(n),this.updateDraft(n),this.points.length===1&&this.viewManager.setControlsEnabled(!1)}onPointerMove(t){if(this.points.length===0||!t.intersection)return;const n=t.intersection.clone();if(this.applySnap(n),this.draftMovingNode&&this.draftGroup){this.draftMovingNode.position.copy(n);const i=this.draftGroup.children[this.draftGroup.children.length-1];i&&i.userData.type==="bezier_line"&&st.updateBezierSegmentGeometry(i)}}onPointerUp(t){}updateDraft(t){if(this.draftGroup)this.draftMovingNode&&(this.draftMovingNode.position.copy(t),this.lastFixedNode=this.draftMovingNode,this.draftMovingNode=null);else{this.draftGroup=new rt,this.draftGroup.userData.type="draft_path",this.objectManager.addObject(this.draftGroup);const n=xe.createBezierPathNode(t);this.draftGroup.add(n),this.lastFixedNode=n}if(this.draftMovingNode=xe.createBezierPathNode(t.clone()),this.draftGroup.add(this.draftMovingNode),this.lastFixedNode){const n=xe.createLinkedBezierSegment(this.lastFixedNode,this.draftMovingNode);this.draftGroup.add(n)}}finishPath(){if(this.draftGroup&&(this.objectManager.removeObject(this.draftGroup),this.draftGroup=null,this.draftMovingNode=null),this.points.length>=2){const t=st.createPath(this.points,!1);if(t){t.userData.type="line",this.objectManager.addObject(t),this.viewManager.setControlsEnabled(!0),this.resetState(),this.eventBus.emit("tool-selected","select"),setTimeout(()=>{this.objectManager.selectObject(t),this.eventBus.emit("selection-changed",[t])},50);return}}this.viewManager.setControlsEnabled(!0),this.resetState()}resetState(){this.points=[],this.draftGroup=null,this.draftMovingNode=null,this.lastFixedNode=null}}class Fg extends sr{constructor(t,n,i){super(t,i);k(this,"id","square");k(this,"viewManager");k(this,"drawing",!1);k(this,"startPoint",new M);k(this,"previewObject",null);this.viewManager=n}activate(){this.drawing=!1,this.removePreview()}deactivate(){this.drawing=!1,this.viewManager.setControlsEnabled(!0),this.removePreview()}onPointerDown(t){if(t.originalEvent.button!==0||!this.viewManager.getActiveCamera())return;const i=this.getIntersectionPoint(t);if(i)if(!this.drawing)this.drawing=!0,this.viewManager.setControlsEnabled(!1),this.startPoint.copy(i),this.createPreview(i);else if(this.drawing=!1,this.viewManager.setControlsEnabled(!0),this.previewObject){this.previewObject.userData.type="square",this.updateBaseSize(this.previewObject,this.startPoint,i);const r=this.previewObject;this.previewObject=null,this.eventBus.emit("preview-object-updated",null),this.eventBus.emit("tool-selected","select"),setTimeout(()=>{this.objectManager.selectObject(r),this.eventBus.emit("selection-changed",[r])},50)}else this.removePreview()}onPointerMove(t){if(!this.drawing||!this.previewObject)return;const n=this.getIntersectionPoint(t);n&&this.updatePreview(n)}onPointerUp(t){}getIntersectionPoint(t){const n=this.viewManager.getActiveCamera();if(!n)return null;const i=new Aa;i.setFromCamera(t.pointer,n);const r=this.drawing?this.startPoint.y:0,a=new Jt(new M(0,1,0),-r),o=new M;return i.ray.intersectPlane(a,o)?(this.applySnap(o),o):null}createPreview(t){this.previewObject=st.createRectangle(this.startPoint,t),this.previewObject&&(this.previewObject.userData.type="square",this.updateBaseSize(this.previewObject,this.startPoint,t),this.objectManager.addObject(this.previewObject,!1),this.eventBus.emit("preview-object-updated",this.previewObject))}updatePreview(t){if(!this.previewObject)return;const n=this.startPoint,i=t,r=n.y,a=Math.min(n.x,i.x),o=Math.max(n.x,i.x),c=Math.min(n.z,i.z),l=Math.max(n.z,i.z),h=(a+o)/2,u=(c+l)/2;this.previewObject.position.set(h,r,u);const f=o-a,p=l-c,g=f/2,v=p/2,m=this.previewObject.children.filter(d=>d.userData.isNode);m.length===4&&(m[0].position.set(-g,0,-v),m[1].position.set(g,0,-v),m[2].position.set(g,0,v),m[3].position.set(-g,0,v),this.previewObject.children.filter(_=>_.userData.type==="bezier_line").forEach(_=>st.linearizeBezierSegment(_))),this.previewObject.traverse(d=>{d.userData.isMainAnchor?d.visible=!0:(d.userData.isNode||d.userData.isControlPoint||d.userData.isHelperLine)&&(d.visible=!1)}),this.updateBaseSize(this.previewObject,n,i),this.eventBus.emit("preview-object-updated",this.previewObject)}updateBaseSize(t,n,i){const r=Math.abs(n.x-i.x),a=Math.abs(n.z-i.z);t.userData.baseSize||(t.userData.baseSize={}),t.userData.baseSize.width=r,t.userData.baseSize.length=a}removePreview(){this.previewObject&&(this.objectManager.removeObject(this.previewObject),this.previewObject=null,this.eventBus.emit("preview-object-updated",null))}}class Bg extends sr{constructor(t,n,i){super(t,i);k(this,"id","circle");k(this,"startPoint",null);k(this,"previewObject",null);k(this,"viewManager");this.viewManager=n}activate(){this.resetState()}deactivate(){this.cancel(),this.viewManager.setControlsEnabled(!0)}onPointerDown(t){if(t.originalEvent.button!==0){this.cancel(),this.viewManager.setControlsEnabled(!0);return}if(!t.intersection)return;const n=t.intersection.clone();if(this.applySnap(n),!this.previewObject)this.startPoint=n,this.createPreviewObject(n),this.viewManager.setControlsEnabled(!1);else{const i=n.distanceTo(this.startPoint),r=this.previewObject.position.clone();this.objectManager.removeObject(this.previewObject),this.previewObject=null,this.startPoint=null,this.viewManager.setControlsEnabled(!0);const a=st.createShape("circle",r);a&&(st.updateCircleRadius(a,Math.max(.1,i)),a.userData.type="circle",this.objectManager.addObject(a),this.eventBus.emit("tool-selected","select"),setTimeout(()=>{this.objectManager.selectObject(a),this.eventBus.emit("selection-changed",[a])},50))}}onPointerMove(t){if(!this.previewObject||!this.startPoint||!t.intersection)return;const n=t.intersection.clone();this.applySnap(n),this.updatePreview(n)}onPointerUp(t){}cancel(){this.previewObject&&(this.objectManager.removeObject(this.previewObject),this.previewObject=null),this.startPoint=null,this.eventBus.emit("preview-object-updated",null)}resetState(){this.startPoint=null,this.previewObject=null}createPreviewObject(t){this.previewObject=st.createShape("circle",t),this.previewObject&&(this.previewObject.userData.type="circle",this.objectManager.addObject(this.previewObject,!1),this.eventBus.emit("preview-object-updated",this.previewObject))}updatePreview(t){if(!this.previewObject||!this.startPoint)return;const n=t.distanceTo(this.startPoint),i=Math.max(.1,n);st.updateCircleRadius(this.previewObject,i),this.eventBus.emit("preview-object-updated",this.previewObject)}}function zg(s,e,t,n,i){const r=new Lg(e,n),a=new Dg(e),o=new Ng(e,t),c=new Pg(e,n),l=new Rg(e,t,n,s),h=new Ig(e,n,t,i),u=new Ug(e,n,t),f=new Fg(e,n,t),p=new Bg(e,n,t);a.registerTool(h),a.registerTool(u),a.registerTool(f),a.registerTool(p),a.selectTool("select"),e.on("request-active-tool-id",v=>{v(a.getActiveToolId())}),e.on("tool-selected",v=>{v==="brush_create"&&e.emit("request-brush-state-sync",m=>{if(m){const d=(m.diameter||10)/2,_=m.length||60,x=st.createBrush(d,_);x.position.set(0,_,0),t.addObject(x),a.selectTool("select"),t.selectObject(x),e.emit("update-object-geometry",x)}})}),e.on("camera-change",()=>{const v=n.getActiveCamera();v&&pa.updateScales(s,v)});const g=n.getActiveCamera();return g&&pa.updateScales(s,g),e.on("open-settings",()=>{const v=document.createElement("div");Object.assign(v.style,{position:"fixed",top:"0",left:"0",width:"100vw",height:"100vh",backgroundColor:"rgba(0, 0, 0, 0.5)",zIndex:"9999",display:"flex",justifyContent:"center",alignItems:"center"});const m=document.createElement("div");Object.assign(m.style,{background:"#222",border:"1px solid #444",borderRadius:"8px",padding:"20px",width:"300px",color:"white",fontFamily:"sans-serif"});const d=document.createElement("h3");d.innerText="Einstellungen",d.style.marginTop="0",m.appendChild(d);const _=document.createElement("div");_.style.display="flex",_.style.justifyContent="space-between",_.style.marginBottom="10px";const x=document.createElement("span");x.innerText="Hintergrundfarbe:";const y=document.createElement("input");y.type="color";let R="#333333";s.background&&s.background instanceof Ue&&(R="#"+s.background.getHexString()),y.value=R,y.onchange=G=>{s.background=new Ue(G.target.value)},_.appendChild(x),_.appendChild(y),m.appendChild(_);const E=document.createElement("div");E.style.display="flex",E.style.justifyContent="space-between",E.style.marginBottom="20px";const C=document.createElement("span");C.innerText="Gitterfarbe:";const N=document.createElement("input");N.type="color",N.value="#444444",N.onchange=G=>{e.emit("settings-grid-color-changed",{color:G.target.value})},E.appendChild(C),E.appendChild(N),m.appendChild(E);const b=document.createElement("div");b.style.marginBottom="10px";const T=document.createElement("button");T.innerText="Debug-Konsole öffnen/schließen",Object.assign(T.style,{width:"100%",padding:"8px",background:"#333",color:"#aaa",border:"1px solid #555",borderRadius:"4px",cursor:"pointer",fontSize:"13px"}),T.onclick=()=>{e.emit("toggle-debug-console",null),document.body.removeChild(v)},b.appendChild(T),m.appendChild(b);const I=document.createElement("button");I.innerText="Schließen",Object.assign(I.style,{width:"100%",padding:"8px",background:"#444",color:"white",border:"none",borderRadius:"4px",cursor:"pointer"}),I.onclick=()=>document.body.removeChild(v),m.appendChild(I),v.appendChild(m),document.body.appendChild(v)}),console.log("UI module initialized."),{interactionManager:r,toolManager:a,projectManager:o,rulerManager:c,uiManager:l}}class Gg{static zHubToServoAngle(e){const i=e/20*90;return Math.max(0,Math.min(90,i))}}class kg{static generate(){let e="";return e+=`G90 ; Absolute positioning
`,e+=`G21 ; Set units to millimeters
`,e+=`M82 ; Set extruder to absolute mode
`,e+=`
`,e+=`; --- Start Painting ---
`,e+=this.moveTo(10,10),e+=this.setBrushHeight(5),e+=this.setBrushHeight(0),e+=this.moveTo(100,10),e+=this.setBrushHeight(5),e+=`
`,e+=`; --- End Painting ---
`,e+=`G1 X0 Y0 F3000 ; Return to home
`,e}static moveTo(e,t,n=3e3){return`G1 X${e.toFixed(3)} Y${t.toFixed(3)} F${n}
`}static setBrushHeight(e){return`M280 P0 S${Gg.zHubToServoAngle(e).toFixed(1)}
`}}function Hg(s,e){let t=null;s.on("cnc-generate-gcode",()=>{console.log("Generating G-Code..."),t=kg.generate(),console.log("--- Generated G-Code ---"),console.log(t),alert("G-Code wurde in der Konsole ausgegeben.")}),s.on("cnc-start-painting",()=>{t?(console.log("Starting painting process..."),e.paint(t),alert("Malprozess wurde gestartet (siehe Konsole für Details).")):(alert("Bitte zuerst G-Code generieren!"),console.warn("Paint process aborted: No G-Code generated yet."))}),console.log("CAM module initialized.")}class Vg{static async process(e,t){const n=document.createElement("canvas");n.width=e.width,n.height=e.height;const i=n.getContext("2d",{willReadFrequently:!0});if(!i)return[];i.drawImage(e,0,0);const a=i.getImageData(0,0,n.width,n.height).data,o=[],c=255/t;for(let l=0;l<t;l++){const h=l*c,u=(l+1)*c,f=document.createElement("canvas");f.width=n.width,f.height=n.height;const p=f.getContext("2d");if(!p)continue;const g=p.createImageData(n.width,n.height),v=g.data;for(let d=0;d<a.length;d+=4){const _=a[d],x=a[d+1],y=a[d+2],R=a[d+3],E=.299*_+.587*x+.114*y;R>10&&E<250&&E>=h&&E<u&&(v[d]=0,v[d+1]=0,v[d+2]=0,v[d+3]=255)}p.putImageData(g,0,0);const m=new nr(f);o.push(m)}return console.log(`Image processed into ${o.length} layers using thresholding.`),o}}function Wg(s,e,t,n){s.on("image-analysis-start",async i=>{console.log("Image analysis event triggered with layers:",i.layers);const r=e.getObjects().find(c=>c.name==="Background Image");if(!r){alert("Fehler: Originales Hintergrundbild nicht gefunden!");return}const a=r.children.find(c=>c instanceof Ge);if(!a||!(a.material instanceof Nt)||!a.material.map){console.error("Invalid background image object for analysis.");return}const o=a.material.map.image;if(o)try{const c=await Vg.process(o,i.layers);e.getObjects().filter(d=>d.name.startsWith("Analyse-Schicht")).forEach(d=>e.removeObject(d));const h=r.userData.baseSize.width,u=r.userData.baseSize.height,f=10,p=i.columns||1,g=p*h+(p-1)*f,v=r.position.x-g/2+h/2,m=r.position.z+u/2+f+u/2;c.forEach((d,_)=>{const x=st.createBackgroundImage(d,h,u);if(x){x.name=`Analyse-Schicht ${_+1}`;const y=_%p,R=Math.floor(_/p),E=v+y*(h+f),C=m+R*(u+f);x.position.set(E,r.position.y,C),x.position.y+=(_+1)*.1,e.addObject(x)}})}catch(c){console.error("Image analysis failed:",c)}}),s.on("create-background-image",i=>{const r=st.createBackgroundImage(i.texture,i.width,i.height);r&&(r.name="Background Image",e.addObject(r),t.focusOnObject(r))}),s.on("add-mesh-to-scene",i=>{e.addObject(i),n.selectTool("select"),e.selectObject(i)}),console.log("Image Processing module initialized.")}const{scene:Ca,eventBus:es,objectManager:Ra,viewManager:rr}=vg(),{robot:dl,machineBrush:Xg}=wg(Ca,es,rr),{uiManager:jg,interactionManager:qg,toolManager:fl,rulerManager:Yg,projectManager:Zg}=zg(Ca,es,Ra,rr,Xg);Hg(es,dl);Wg(es,Ra,rr,fl);window.app={scene:Ca,eventBus:es,objectManager:Ra,viewManager:rr,toolManager:fl,uiManager:jg,interactionManager:qg,rulerManager:Yg,projectManager:Zg,robot:dl};window.dumpScene=()=>{const s=window.app.viewManager.getActiveCamera(),e=window.app.viewManager;console.log("--- SCENE DUMP ---"),console.log("Active View:",e.getActiveView()),s&&(console.log("Camera Pos:",s.position.x,s.position.y,s.position.z),console.log("Camera Near/Far:",s.near,s.far),s.zoom&&console.log("Camera Zoom:",s.zoom))};const Zs=()=>{document.fullscreenElement||document.documentElement.requestFullscreen().catch(()=>{}),document.removeEventListener("click",Zs),document.removeEventListener("keydown",Zs)};document.addEventListener("click",Zs);document.addEventListener("keydown",Zs);console.log("Aqua-Davinci App started (Modular Build)");

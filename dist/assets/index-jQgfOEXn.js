var Rl=Object.defineProperty;var Pl=(s,e,t)=>e in s?Rl(s,e,{enumerable:!0,configurable:!0,writable:!0,value:t}):s[e]=t;var V=(s,e,t)=>Pl(s,typeof e!="symbol"?e+"":e,t);(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const i of document.querySelectorAll('link[rel="modulepreload"]'))n(i);new MutationObserver(i=>{for(const r of i)if(r.type==="childList")for(const o of r.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&n(o)}).observe(document,{childList:!0,subtree:!0});function t(i){const r={};return i.integrity&&(r.integrity=i.integrity),i.referrerPolicy&&(r.referrerPolicy=i.referrerPolicy),i.crossOrigin==="use-credentials"?r.credentials="include":i.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function n(i){if(i.ep)return;i.ep=!0;const r=t(i);fetch(i.href,r)}})();/**
 * @license
 * Copyright 2010-2023 Three.js Authors
 * SPDX-License-Identifier: MIT
 */const Eo="160",rn={ROTATE:0,DOLLY:1,PAN:2},ii={ROTATE:0,PAN:1,DOLLY_PAN:2,DOLLY_ROTATE:3},Ll=0,Wo=1,Dl=2,Dc=1,Oc=2,yn=3,un=0,kt=1,At=2,In=0,Ri=1,Xo=2,jo=3,qo=4,Ol=5,jn=100,Il=101,Nl=102,Yo=103,$o=104,Ul=200,Fl=201,zl=202,Bl=203,co=204,lo=205,Gl=206,kl=207,Hl=208,Vl=209,Wl=210,Xl=211,jl=212,ql=213,Yl=214,$l=0,Zl=1,Kl=2,js=3,Jl=4,Ql=5,eh=6,th=7,Ic=0,nh=1,ih=2,Nn=0,sh=1,rh=2,oh=3,ah=4,ch=5,lh=6,Nc=300,Ni=301,Ui=302,ho=303,uo=304,sr=306,fo=1e3,an=1001,po=1002,Gt=1003,Zo=1004,xr=1005,Ht=1006,hh=1007,es=1008,Un=1009,uh=1010,dh=1011,wo=1012,Uc=1013,Ln=1014,Dn=1015,ts=1016,Fc=1017,zc=1018,Yn=1020,fh=1021,cn=1023,ph=1024,mh=1025,$n=1026,Fi=1027,gh=1028,Bc=1029,vh=1030,Gc=1031,kc=1033,yr=33776,br=33777,Mr=33778,Sr=33779,Ko=35840,Jo=35841,Qo=35842,ea=35843,Hc=36196,ta=37492,na=37496,ia=37808,sa=37809,ra=37810,oa=37811,aa=37812,ca=37813,la=37814,ha=37815,ua=37816,da=37817,fa=37818,pa=37819,ma=37820,ga=37821,Er=36492,va=36494,_a=36495,_h=36283,xa=36284,ya=36285,ba=36286,Vc=3e3,Zn=3001,xh=3200,yh=3201,Wc=0,bh=1,Jt="",wt="srgb",En="srgb-linear",To="display-p3",rr="display-p3-linear",qs="linear",rt="srgb",Ys="rec709",$s="p3",si=7680,Ma=519,Mh=512,Sh=513,Eh=514,Xc=515,wh=516,Th=517,Ah=518,Ch=519,mo=35044,Sa="300 es",go=1035,Mn=2e3,Zs=2001;class ti{addEventListener(e,t){this._listeners===void 0&&(this._listeners={});const n=this._listeners;n[e]===void 0&&(n[e]=[]),n[e].indexOf(t)===-1&&n[e].push(t)}hasEventListener(e,t){if(this._listeners===void 0)return!1;const n=this._listeners;return n[e]!==void 0&&n[e].indexOf(t)!==-1}removeEventListener(e,t){if(this._listeners===void 0)return;const i=this._listeners[e];if(i!==void 0){const r=i.indexOf(t);r!==-1&&i.splice(r,1)}}dispatchEvent(e){if(this._listeners===void 0)return;const n=this._listeners[e.type];if(n!==void 0){e.target=this;const i=n.slice(0);for(let r=0,o=i.length;r<o;r++)i[r].call(this,e);e.target=null}}}const Lt=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"],$i=Math.PI/180,vo=180/Math.PI;function Sn(){const s=Math.random()*4294967295|0,e=Math.random()*4294967295|0,t=Math.random()*4294967295|0,n=Math.random()*4294967295|0;return(Lt[s&255]+Lt[s>>8&255]+Lt[s>>16&255]+Lt[s>>24&255]+"-"+Lt[e&255]+Lt[e>>8&255]+"-"+Lt[e>>16&15|64]+Lt[e>>24&255]+"-"+Lt[t&63|128]+Lt[t>>8&255]+"-"+Lt[t>>16&255]+Lt[t>>24&255]+Lt[n&255]+Lt[n>>8&255]+Lt[n>>16&255]+Lt[n>>24&255]).toLowerCase()}function St(s,e,t){return Math.max(e,Math.min(t,s))}function Rh(s,e){return(s%e+e)%e}function wr(s,e,t){return(1-t)*s+t*e}function Ea(s){return(s&s-1)===0&&s!==0}function _o(s){return Math.pow(2,Math.floor(Math.log(s)/Math.LN2))}function bn(s,e){switch(e.constructor){case Float32Array:return s;case Uint32Array:return s/4294967295;case Uint16Array:return s/65535;case Uint8Array:return s/255;case Int32Array:return Math.max(s/2147483647,-1);case Int16Array:return Math.max(s/32767,-1);case Int8Array:return Math.max(s/127,-1);default:throw new Error("Invalid component type.")}}function nt(s,e){switch(e.constructor){case Float32Array:return s;case Uint32Array:return Math.round(s*4294967295);case Uint16Array:return Math.round(s*65535);case Uint8Array:return Math.round(s*255);case Int32Array:return Math.round(s*2147483647);case Int16Array:return Math.round(s*32767);case Int8Array:return Math.round(s*127);default:throw new Error("Invalid component type.")}}const Ph={DEG2RAD:$i};class j{constructor(e=0,t=0){j.prototype.isVector2=!0,this.x=e,this.y=t}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,t){return this.x=e,this.y=t,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){const t=this.x,n=this.y,i=e.elements;return this.x=i[0]*t+i[3]*n+i[6],this.y=i[1]*t+i[4]*n+i[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this}clampLength(e,t){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(e,Math.min(t,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const n=this.dot(e)/t;return Math.acos(St(n,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,n=this.y-e.y;return t*t+n*n}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this}rotateAround(e,t){const n=Math.cos(t),i=Math.sin(t),r=this.x-e.x,o=this.y-e.y;return this.x=r*n-o*i+e.x,this.y=r*i+o*n+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class Ye{constructor(e,t,n,i,r,o,a,c,l){Ye.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,t,n,i,r,o,a,c,l)}set(e,t,n,i,r,o,a,c,l){const h=this.elements;return h[0]=e,h[1]=i,h[2]=a,h[3]=t,h[4]=r,h[5]=c,h[6]=n,h[7]=o,h[8]=l,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){const t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],this}extractBasis(e,t,n){return e.setFromMatrix3Column(this,0),t.setFromMatrix3Column(this,1),n.setFromMatrix3Column(this,2),this}setFromMatrix4(e){const t=e.elements;return this.set(t[0],t[4],t[8],t[1],t[5],t[9],t[2],t[6],t[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const n=e.elements,i=t.elements,r=this.elements,o=n[0],a=n[3],c=n[6],l=n[1],h=n[4],u=n[7],f=n[2],d=n[5],g=n[8],v=i[0],m=i[3],p=i[6],_=i[1],x=i[4],b=i[7],R=i[2],T=i[5],E=i[8];return r[0]=o*v+a*_+c*R,r[3]=o*m+a*x+c*T,r[6]=o*p+a*b+c*E,r[1]=l*v+h*_+u*R,r[4]=l*m+h*x+u*T,r[7]=l*p+h*b+u*E,r[2]=f*v+d*_+g*R,r[5]=f*m+d*x+g*T,r[8]=f*p+d*b+g*E,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[3]*=e,t[6]*=e,t[1]*=e,t[4]*=e,t[7]*=e,t[2]*=e,t[5]*=e,t[8]*=e,this}determinant(){const e=this.elements,t=e[0],n=e[1],i=e[2],r=e[3],o=e[4],a=e[5],c=e[6],l=e[7],h=e[8];return t*o*h-t*a*l-n*r*h+n*a*c+i*r*l-i*o*c}invert(){const e=this.elements,t=e[0],n=e[1],i=e[2],r=e[3],o=e[4],a=e[5],c=e[6],l=e[7],h=e[8],u=h*o-a*l,f=a*c-h*r,d=l*r-o*c,g=t*u+n*f+i*d;if(g===0)return this.set(0,0,0,0,0,0,0,0,0);const v=1/g;return e[0]=u*v,e[1]=(i*l-h*n)*v,e[2]=(a*n-i*o)*v,e[3]=f*v,e[4]=(h*t-i*c)*v,e[5]=(i*r-a*t)*v,e[6]=d*v,e[7]=(n*c-l*t)*v,e[8]=(o*t-n*r)*v,this}transpose(){let e;const t=this.elements;return e=t[1],t[1]=t[3],t[3]=e,e=t[2],t[2]=t[6],t[6]=e,e=t[5],t[5]=t[7],t[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){const t=this.elements;return e[0]=t[0],e[1]=t[3],e[2]=t[6],e[3]=t[1],e[4]=t[4],e[5]=t[7],e[6]=t[2],e[7]=t[5],e[8]=t[8],this}setUvTransform(e,t,n,i,r,o,a){const c=Math.cos(r),l=Math.sin(r);return this.set(n*c,n*l,-n*(c*o+l*a)+o+e,-i*l,i*c,-i*(-l*o+c*a)+a+t,0,0,1),this}scale(e,t){return this.premultiply(Tr.makeScale(e,t)),this}rotate(e){return this.premultiply(Tr.makeRotation(-e)),this}translate(e,t){return this.premultiply(Tr.makeTranslation(e,t)),this}makeTranslation(e,t){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,t,0,0,1),this}makeRotation(e){const t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,n,t,0,0,0,1),this}makeScale(e,t){return this.set(e,0,0,0,t,0,0,0,1),this}equals(e){const t=this.elements,n=e.elements;for(let i=0;i<9;i++)if(t[i]!==n[i])return!1;return!0}fromArray(e,t=0){for(let n=0;n<9;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){const n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e}clone(){return new this.constructor().fromArray(this.elements)}}const Tr=new Ye;function jc(s){for(let e=s.length-1;e>=0;--e)if(s[e]>=65535)return!0;return!1}function Ks(s){return document.createElementNS("http://www.w3.org/1999/xhtml",s)}function Lh(){const s=Ks("canvas");return s.style.display="block",s}const wa={};function Zi(s){s in wa||(wa[s]=!0,console.warn(s))}const Ta=new Ye().set(.8224621,.177538,0,.0331941,.9668058,0,.0170827,.0723974,.9105199),Aa=new Ye().set(1.2249401,-.2249404,0,-.0420569,1.0420571,0,-.0196376,-.0786361,1.0982735),hs={[En]:{transfer:qs,primaries:Ys,toReference:s=>s,fromReference:s=>s},[wt]:{transfer:rt,primaries:Ys,toReference:s=>s.convertSRGBToLinear(),fromReference:s=>s.convertLinearToSRGB()},[rr]:{transfer:qs,primaries:$s,toReference:s=>s.applyMatrix3(Aa),fromReference:s=>s.applyMatrix3(Ta)},[To]:{transfer:rt,primaries:$s,toReference:s=>s.convertSRGBToLinear().applyMatrix3(Aa),fromReference:s=>s.applyMatrix3(Ta).convertLinearToSRGB()}},Dh=new Set([En,rr]),tt={enabled:!0,_workingColorSpace:En,get workingColorSpace(){return this._workingColorSpace},set workingColorSpace(s){if(!Dh.has(s))throw new Error(`Unsupported working color space, "${s}".`);this._workingColorSpace=s},convert:function(s,e,t){if(this.enabled===!1||e===t||!e||!t)return s;const n=hs[e].toReference,i=hs[t].fromReference;return i(n(s))},fromWorkingColorSpace:function(s,e){return this.convert(s,this._workingColorSpace,e)},toWorkingColorSpace:function(s,e){return this.convert(s,e,this._workingColorSpace)},getPrimaries:function(s){return hs[s].primaries},getTransfer:function(s){return s===Jt?qs:hs[s].transfer}};function Pi(s){return s<.04045?s*.0773993808:Math.pow(s*.9478672986+.0521327014,2.4)}function Ar(s){return s<.0031308?s*12.92:1.055*Math.pow(s,.41666)-.055}let ri;class qc{static getDataURL(e){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let t;if(e instanceof HTMLCanvasElement)t=e;else{ri===void 0&&(ri=Ks("canvas")),ri.width=e.width,ri.height=e.height;const n=ri.getContext("2d");e instanceof ImageData?n.putImageData(e,0,0):n.drawImage(e,0,0,e.width,e.height),t=ri}return t.width>2048||t.height>2048?(console.warn("THREE.ImageUtils.getDataURL: Image converted to jpg for performance reasons",e),t.toDataURL("image/jpeg",.6)):t.toDataURL("image/png")}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){const t=Ks("canvas");t.width=e.width,t.height=e.height;const n=t.getContext("2d");n.drawImage(e,0,0,e.width,e.height);const i=n.getImageData(0,0,e.width,e.height),r=i.data;for(let o=0;o<r.length;o++)r[o]=Pi(r[o]/255)*255;return n.putImageData(i,0,0),t}else if(e.data){const t=e.data.slice(0);for(let n=0;n<t.length;n++)t instanceof Uint8Array||t instanceof Uint8ClampedArray?t[n]=Math.floor(Pi(t[n]/255)*255):t[n]=Pi(t[n]);return{data:t,width:e.width,height:e.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}}let Oh=0;class Yc{constructor(e=null){this.isSource=!0,Object.defineProperty(this,"id",{value:Oh++}),this.uuid=Sn(),this.data=e,this.version=0}set needsUpdate(e){e===!0&&this.version++}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.images[this.uuid]!==void 0)return e.images[this.uuid];const n={uuid:this.uuid,url:""},i=this.data;if(i!==null){let r;if(Array.isArray(i)){r=[];for(let o=0,a=i.length;o<a;o++)i[o].isDataTexture?r.push(Cr(i[o].image)):r.push(Cr(i[o]))}else r=Cr(i);n.url=r}return t||(e.images[this.uuid]=n),n}}function Cr(s){return typeof HTMLImageElement<"u"&&s instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&s instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&s instanceof ImageBitmap?qc.getDataURL(s):s.data?{data:Array.from(s.data),width:s.width,height:s.height,type:s.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}let Ih=0;class Ft extends ti{constructor(e=Ft.DEFAULT_IMAGE,t=Ft.DEFAULT_MAPPING,n=an,i=an,r=Ht,o=es,a=cn,c=Un,l=Ft.DEFAULT_ANISOTROPY,h=Jt){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:Ih++}),this.uuid=Sn(),this.name="",this.source=new Yc(e),this.mipmaps=[],this.mapping=t,this.channel=0,this.wrapS=n,this.wrapT=i,this.magFilter=r,this.minFilter=o,this.anisotropy=l,this.format=a,this.internalFormat=null,this.type=c,this.offset=new j(0,0),this.repeat=new j(1,1),this.center=new j(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new Ye,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,typeof h=="string"?this.colorSpace=h:(Zi("THREE.Texture: Property .encoding has been replaced by .colorSpace."),this.colorSpace=h===Zn?wt:Jt),this.userData={},this.version=0,this.onUpdate=null,this.isRenderTargetTexture=!1,this.needsPMREMUpdate=!1}get image(){return this.source.data}set image(e=null){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];const n={metadata:{version:4.6,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(n.userData=this.userData),t||(e.textures[this.uuid]=n),n}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==Nc)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case fo:e.x=e.x-Math.floor(e.x);break;case an:e.x=e.x<0?0:1;break;case po:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case fo:e.y=e.y-Math.floor(e.y);break;case an:e.y=e.y<0?0:1;break;case po:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}get encoding(){return Zi("THREE.Texture: Property .encoding has been replaced by .colorSpace."),this.colorSpace===wt?Zn:Vc}set encoding(e){Zi("THREE.Texture: Property .encoding has been replaced by .colorSpace."),this.colorSpace=e===Zn?wt:Jt}}Ft.DEFAULT_IMAGE=null;Ft.DEFAULT_MAPPING=Nc;Ft.DEFAULT_ANISOTROPY=1;class Et{constructor(e=0,t=0,n=0,i=1){Et.prototype.isVector4=!0,this.x=e,this.y=t,this.z=n,this.w=i}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,t,n,i){return this.x=e,this.y=t,this.z=n,this.w=i,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;case 3:this.w=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this.w=e.w+t.w,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this.w+=e.w*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this.w=e.w-t.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){const t=this.x,n=this.y,i=this.z,r=this.w,o=e.elements;return this.x=o[0]*t+o[4]*n+o[8]*i+o[12]*r,this.y=o[1]*t+o[5]*n+o[9]*i+o[13]*r,this.z=o[2]*t+o[6]*n+o[10]*i+o[14]*r,this.w=o[3]*t+o[7]*n+o[11]*i+o[15]*r,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);const t=Math.sqrt(1-e.w*e.w);return t<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/t,this.y=e.y/t,this.z=e.z/t),this}setAxisAngleFromRotationMatrix(e){let t,n,i,r;const c=e.elements,l=c[0],h=c[4],u=c[8],f=c[1],d=c[5],g=c[9],v=c[2],m=c[6],p=c[10];if(Math.abs(h-f)<.01&&Math.abs(u-v)<.01&&Math.abs(g-m)<.01){if(Math.abs(h+f)<.1&&Math.abs(u+v)<.1&&Math.abs(g+m)<.1&&Math.abs(l+d+p-3)<.1)return this.set(1,0,0,0),this;t=Math.PI;const x=(l+1)/2,b=(d+1)/2,R=(p+1)/2,T=(h+f)/4,E=(u+v)/4,O=(g+m)/4;return x>b&&x>R?x<.01?(n=0,i=.707106781,r=.707106781):(n=Math.sqrt(x),i=T/n,r=E/n):b>R?b<.01?(n=.707106781,i=0,r=.707106781):(i=Math.sqrt(b),n=T/i,r=O/i):R<.01?(n=.707106781,i=.707106781,r=0):(r=Math.sqrt(R),n=E/r,i=O/r),this.set(n,i,r,t),this}let _=Math.sqrt((m-g)*(m-g)+(u-v)*(u-v)+(f-h)*(f-h));return Math.abs(_)<.001&&(_=1),this.x=(m-g)/_,this.y=(u-v)/_,this.z=(f-h)/_,this.w=Math.acos((l+d+p-1)/2),this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this.z=Math.max(e.z,Math.min(t.z,this.z)),this.w=Math.max(e.w,Math.min(t.w,this.w)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this.z=Math.max(e,Math.min(t,this.z)),this.w=Math.max(e,Math.min(t,this.w)),this}clampLength(e,t){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(e,Math.min(t,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this.w+=(e.w-this.w)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this.w=e.w+(t.w-e.w)*n,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this.w=e[t+3],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e[t+3]=this.w,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this.w=e.getW(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class Nh extends ti{constructor(e=1,t=1,n={}){super(),this.isRenderTarget=!0,this.width=e,this.height=t,this.depth=1,this.scissor=new Et(0,0,e,t),this.scissorTest=!1,this.viewport=new Et(0,0,e,t);const i={width:e,height:t,depth:1};n.encoding!==void 0&&(Zi("THREE.WebGLRenderTarget: option.encoding has been replaced by option.colorSpace."),n.colorSpace=n.encoding===Zn?wt:Jt),n=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:Ht,depthBuffer:!0,stencilBuffer:!1,depthTexture:null,samples:0},n),this.texture=new Ft(i,n.mapping,n.wrapS,n.wrapT,n.magFilter,n.minFilter,n.format,n.type,n.anisotropy,n.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.flipY=!1,this.texture.generateMipmaps=n.generateMipmaps,this.texture.internalFormat=n.internalFormat,this.depthBuffer=n.depthBuffer,this.stencilBuffer=n.stencilBuffer,this.depthTexture=n.depthTexture,this.samples=n.samples}setSize(e,t,n=1){(this.width!==e||this.height!==t||this.depth!==n)&&(this.width=e,this.height=t,this.depth=n,this.texture.image.width=e,this.texture.image.height=t,this.texture.image.depth=n,this.dispose()),this.viewport.set(0,0,e,t),this.scissor.set(0,0,e,t)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.texture=e.texture.clone(),this.texture.isRenderTargetTexture=!0;const t=Object.assign({},e.texture.image);return this.texture.source=new Yc(t),this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,e.depthTexture!==null&&(this.depthTexture=e.depthTexture.clone()),this.samples=e.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class Jn extends Nh{constructor(e=1,t=1,n={}){super(e,t,n),this.isWebGLRenderTarget=!0}}class $c extends Ft{constructor(e=null,t=1,n=1,i=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:t,height:n,depth:i},this.magFilter=Gt,this.minFilter=Gt,this.wrapR=an,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class Uh extends Ft{constructor(e=null,t=1,n=1,i=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:t,height:n,depth:i},this.magFilter=Gt,this.minFilter=Gt,this.wrapR=an,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class Qn{constructor(e=0,t=0,n=0,i=1){this.isQuaternion=!0,this._x=e,this._y=t,this._z=n,this._w=i}static slerpFlat(e,t,n,i,r,o,a){let c=n[i+0],l=n[i+1],h=n[i+2],u=n[i+3];const f=r[o+0],d=r[o+1],g=r[o+2],v=r[o+3];if(a===0){e[t+0]=c,e[t+1]=l,e[t+2]=h,e[t+3]=u;return}if(a===1){e[t+0]=f,e[t+1]=d,e[t+2]=g,e[t+3]=v;return}if(u!==v||c!==f||l!==d||h!==g){let m=1-a;const p=c*f+l*d+h*g+u*v,_=p>=0?1:-1,x=1-p*p;if(x>Number.EPSILON){const R=Math.sqrt(x),T=Math.atan2(R,p*_);m=Math.sin(m*T)/R,a=Math.sin(a*T)/R}const b=a*_;if(c=c*m+f*b,l=l*m+d*b,h=h*m+g*b,u=u*m+v*b,m===1-a){const R=1/Math.sqrt(c*c+l*l+h*h+u*u);c*=R,l*=R,h*=R,u*=R}}e[t]=c,e[t+1]=l,e[t+2]=h,e[t+3]=u}static multiplyQuaternionsFlat(e,t,n,i,r,o){const a=n[i],c=n[i+1],l=n[i+2],h=n[i+3],u=r[o],f=r[o+1],d=r[o+2],g=r[o+3];return e[t]=a*g+h*u+c*d-l*f,e[t+1]=c*g+h*f+l*u-a*d,e[t+2]=l*g+h*d+a*f-c*u,e[t+3]=h*g-a*u-c*f-l*d,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,t,n,i){return this._x=e,this._y=t,this._z=n,this._w=i,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,t=!0){const n=e._x,i=e._y,r=e._z,o=e._order,a=Math.cos,c=Math.sin,l=a(n/2),h=a(i/2),u=a(r/2),f=c(n/2),d=c(i/2),g=c(r/2);switch(o){case"XYZ":this._x=f*h*u+l*d*g,this._y=l*d*u-f*h*g,this._z=l*h*g+f*d*u,this._w=l*h*u-f*d*g;break;case"YXZ":this._x=f*h*u+l*d*g,this._y=l*d*u-f*h*g,this._z=l*h*g-f*d*u,this._w=l*h*u+f*d*g;break;case"ZXY":this._x=f*h*u-l*d*g,this._y=l*d*u+f*h*g,this._z=l*h*g+f*d*u,this._w=l*h*u-f*d*g;break;case"ZYX":this._x=f*h*u-l*d*g,this._y=l*d*u+f*h*g,this._z=l*h*g-f*d*u,this._w=l*h*u+f*d*g;break;case"YZX":this._x=f*h*u+l*d*g,this._y=l*d*u+f*h*g,this._z=l*h*g-f*d*u,this._w=l*h*u-f*d*g;break;case"XZY":this._x=f*h*u-l*d*g,this._y=l*d*u-f*h*g,this._z=l*h*g+f*d*u,this._w=l*h*u+f*d*g;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+o)}return t===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,t){const n=t/2,i=Math.sin(n);return this._x=e.x*i,this._y=e.y*i,this._z=e.z*i,this._w=Math.cos(n),this._onChangeCallback(),this}setFromRotationMatrix(e){const t=e.elements,n=t[0],i=t[4],r=t[8],o=t[1],a=t[5],c=t[9],l=t[2],h=t[6],u=t[10],f=n+a+u;if(f>0){const d=.5/Math.sqrt(f+1);this._w=.25/d,this._x=(h-c)*d,this._y=(r-l)*d,this._z=(o-i)*d}else if(n>a&&n>u){const d=2*Math.sqrt(1+n-a-u);this._w=(h-c)/d,this._x=.25*d,this._y=(i+o)/d,this._z=(r+l)/d}else if(a>u){const d=2*Math.sqrt(1+a-n-u);this._w=(r-l)/d,this._x=(i+o)/d,this._y=.25*d,this._z=(c+h)/d}else{const d=2*Math.sqrt(1+u-n-a);this._w=(o-i)/d,this._x=(r+l)/d,this._y=(c+h)/d,this._z=.25*d}return this._onChangeCallback(),this}setFromUnitVectors(e,t){let n=e.dot(t)+1;return n<Number.EPSILON?(n=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=n):(this._x=0,this._y=-e.z,this._z=e.y,this._w=n)):(this._x=e.y*t.z-e.z*t.y,this._y=e.z*t.x-e.x*t.z,this._z=e.x*t.y-e.y*t.x,this._w=n),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(St(this.dot(e),-1,1)))}rotateTowards(e,t){const n=this.angleTo(e);if(n===0)return this;const i=Math.min(1,t/n);return this.slerp(e,i),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,t){const n=e._x,i=e._y,r=e._z,o=e._w,a=t._x,c=t._y,l=t._z,h=t._w;return this._x=n*h+o*a+i*l-r*c,this._y=i*h+o*c+r*a-n*l,this._z=r*h+o*l+n*c-i*a,this._w=o*h-n*a-i*c-r*l,this._onChangeCallback(),this}slerp(e,t){if(t===0)return this;if(t===1)return this.copy(e);const n=this._x,i=this._y,r=this._z,o=this._w;let a=o*e._w+n*e._x+i*e._y+r*e._z;if(a<0?(this._w=-e._w,this._x=-e._x,this._y=-e._y,this._z=-e._z,a=-a):this.copy(e),a>=1)return this._w=o,this._x=n,this._y=i,this._z=r,this;const c=1-a*a;if(c<=Number.EPSILON){const d=1-t;return this._w=d*o+t*this._w,this._x=d*n+t*this._x,this._y=d*i+t*this._y,this._z=d*r+t*this._z,this.normalize(),this}const l=Math.sqrt(c),h=Math.atan2(l,a),u=Math.sin((1-t)*h)/l,f=Math.sin(t*h)/l;return this._w=o*u+this._w*f,this._x=n*u+this._x*f,this._y=i*u+this._y*f,this._z=r*u+this._z*f,this._onChangeCallback(),this}slerpQuaternions(e,t,n){return this.copy(e).slerp(t,n)}random(){const e=Math.random(),t=Math.sqrt(1-e),n=Math.sqrt(e),i=2*Math.PI*Math.random(),r=2*Math.PI*Math.random();return this.set(t*Math.cos(i),n*Math.sin(r),n*Math.cos(r),t*Math.sin(i))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,t=0){return this._x=e[t],this._y=e[t+1],this._z=e[t+2],this._w=e[t+3],this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._w,e}fromBufferAttribute(e,t){return this._x=e.getX(t),this._y=e.getY(t),this._z=e.getZ(t),this._w=e.getW(t),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class y{constructor(e=0,t=0,n=0){y.prototype.isVector3=!0,this.x=e,this.y=t,this.z=n}set(e,t,n){return n===void 0&&(n=this.z),this.x=e,this.y=t,this.z=n,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,t){return this.x=e.x*t.x,this.y=e.y*t.y,this.z=e.z*t.z,this}applyEuler(e){return this.applyQuaternion(Ca.setFromEuler(e))}applyAxisAngle(e,t){return this.applyQuaternion(Ca.setFromAxisAngle(e,t))}applyMatrix3(e){const t=this.x,n=this.y,i=this.z,r=e.elements;return this.x=r[0]*t+r[3]*n+r[6]*i,this.y=r[1]*t+r[4]*n+r[7]*i,this.z=r[2]*t+r[5]*n+r[8]*i,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){const t=this.x,n=this.y,i=this.z,r=e.elements,o=1/(r[3]*t+r[7]*n+r[11]*i+r[15]);return this.x=(r[0]*t+r[4]*n+r[8]*i+r[12])*o,this.y=(r[1]*t+r[5]*n+r[9]*i+r[13])*o,this.z=(r[2]*t+r[6]*n+r[10]*i+r[14])*o,this}applyQuaternion(e){const t=this.x,n=this.y,i=this.z,r=e.x,o=e.y,a=e.z,c=e.w,l=2*(o*i-a*n),h=2*(a*t-r*i),u=2*(r*n-o*t);return this.x=t+c*l+o*u-a*h,this.y=n+c*h+a*l-r*u,this.z=i+c*u+r*h-o*l,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){const t=this.x,n=this.y,i=this.z,r=e.elements;return this.x=r[0]*t+r[4]*n+r[8]*i,this.y=r[1]*t+r[5]*n+r[9]*i,this.z=r[2]*t+r[6]*n+r[10]*i,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this.z=Math.max(e.z,Math.min(t.z,this.z)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this.z=Math.max(e,Math.min(t,this.z)),this}clampLength(e,t){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(e,Math.min(t,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,t){const n=e.x,i=e.y,r=e.z,o=t.x,a=t.y,c=t.z;return this.x=i*c-r*a,this.y=r*o-n*c,this.z=n*a-i*o,this}projectOnVector(e){const t=e.lengthSq();if(t===0)return this.set(0,0,0);const n=e.dot(this)/t;return this.copy(e).multiplyScalar(n)}projectOnPlane(e){return Rr.copy(this).projectOnVector(e),this.sub(Rr)}reflect(e){return this.sub(Rr.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const n=this.dot(e)/t;return Math.acos(St(n,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,n=this.y-e.y,i=this.z-e.z;return t*t+n*n+i*i}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,t,n){const i=Math.sin(t)*e;return this.x=i*Math.sin(n),this.y=Math.cos(t)*e,this.z=i*Math.cos(n),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,t,n){return this.x=e*Math.sin(t),this.y=n,this.z=e*Math.cos(t),this}setFromMatrixPosition(e){const t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this}setFromMatrixScale(e){const t=this.setFromMatrixColumn(e,0).length(),n=this.setFromMatrixColumn(e,1).length(),i=this.setFromMatrixColumn(e,2).length();return this.x=t,this.y=n,this.z=i,this}setFromMatrixColumn(e,t){return this.fromArray(e.elements,t*4)}setFromMatrix3Column(e,t){return this.fromArray(e.elements,t*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const e=(Math.random()-.5)*2,t=Math.random()*Math.PI*2,n=Math.sqrt(1-e**2);return this.x=n*Math.cos(t),this.y=n*Math.sin(t),this.z=e,this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const Rr=new y,Ca=new Qn;class ni{constructor(e=new y(1/0,1/0,1/0),t=new y(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=t}set(e,t){return this.min.copy(e),this.max.copy(t),this}setFromArray(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t+=3)this.expandByPoint(en.fromArray(e,t));return this}setFromBufferAttribute(e){this.makeEmpty();for(let t=0,n=e.count;t<n;t++)this.expandByPoint(en.fromBufferAttribute(e,t));return this}setFromPoints(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t++)this.expandByPoint(e[t]);return this}setFromCenterAndSize(e,t){const n=en.copy(t).multiplyScalar(.5);return this.min.copy(e).sub(n),this.max.copy(e).add(n),this}setFromObject(e,t=!1){return this.makeEmpty(),this.expandByObject(e,t)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,t=!1){e.updateWorldMatrix(!1,!1);const n=e.geometry;if(n!==void 0){const r=n.getAttribute("position");if(t===!0&&r!==void 0&&e.isInstancedMesh!==!0)for(let o=0,a=r.count;o<a;o++)e.isMesh===!0?e.getVertexPosition(o,en):en.fromBufferAttribute(r,o),en.applyMatrix4(e.matrixWorld),this.expandByPoint(en);else e.boundingBox!==void 0?(e.boundingBox===null&&e.computeBoundingBox(),us.copy(e.boundingBox)):(n.boundingBox===null&&n.computeBoundingBox(),us.copy(n.boundingBox)),us.applyMatrix4(e.matrixWorld),this.union(us)}const i=e.children;for(let r=0,o=i.length;r<o;r++)this.expandByObject(i[r],t);return this}containsPoint(e){return!(e.x<this.min.x||e.x>this.max.x||e.y<this.min.y||e.y>this.max.y||e.z<this.min.z||e.z>this.max.z)}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,t){return t.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return!(e.max.x<this.min.x||e.min.x>this.max.x||e.max.y<this.min.y||e.min.y>this.max.y||e.max.z<this.min.z||e.min.z>this.max.z)}intersectsSphere(e){return this.clampPoint(e.center,en),en.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let t,n;return e.normal.x>0?(t=e.normal.x*this.min.x,n=e.normal.x*this.max.x):(t=e.normal.x*this.max.x,n=e.normal.x*this.min.x),e.normal.y>0?(t+=e.normal.y*this.min.y,n+=e.normal.y*this.max.y):(t+=e.normal.y*this.max.y,n+=e.normal.y*this.min.y),e.normal.z>0?(t+=e.normal.z*this.min.z,n+=e.normal.z*this.max.z):(t+=e.normal.z*this.max.z,n+=e.normal.z*this.min.z),t<=-e.constant&&n>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(Hi),ds.subVectors(this.max,Hi),oi.subVectors(e.a,Hi),ai.subVectors(e.b,Hi),ci.subVectors(e.c,Hi),Tn.subVectors(ai,oi),An.subVectors(ci,ai),kn.subVectors(oi,ci);let t=[0,-Tn.z,Tn.y,0,-An.z,An.y,0,-kn.z,kn.y,Tn.z,0,-Tn.x,An.z,0,-An.x,kn.z,0,-kn.x,-Tn.y,Tn.x,0,-An.y,An.x,0,-kn.y,kn.x,0];return!Pr(t,oi,ai,ci,ds)||(t=[1,0,0,0,1,0,0,0,1],!Pr(t,oi,ai,ci,ds))?!1:(fs.crossVectors(Tn,An),t=[fs.x,fs.y,fs.z],Pr(t,oi,ai,ci,ds))}clampPoint(e,t){return t.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,en).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(en).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(pn[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),pn[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),pn[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),pn[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),pn[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),pn[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),pn[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),pn[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(pn),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}}const pn=[new y,new y,new y,new y,new y,new y,new y,new y],en=new y,us=new ni,oi=new y,ai=new y,ci=new y,Tn=new y,An=new y,kn=new y,Hi=new y,ds=new y,fs=new y,Hn=new y;function Pr(s,e,t,n,i){for(let r=0,o=s.length-3;r<=o;r+=3){Hn.fromArray(s,r);const a=i.x*Math.abs(Hn.x)+i.y*Math.abs(Hn.y)+i.z*Math.abs(Hn.z),c=e.dot(Hn),l=t.dot(Hn),h=n.dot(Hn);if(Math.max(-Math.max(c,l,h),Math.min(c,l,h))>a)return!1}return!0}const Fh=new ni,Vi=new y,Lr=new y;class or{constructor(e=new y,t=-1){this.isSphere=!0,this.center=e,this.radius=t}set(e,t){return this.center.copy(e),this.radius=t,this}setFromPoints(e,t){const n=this.center;t!==void 0?n.copy(t):Fh.setFromPoints(e).getCenter(n);let i=0;for(let r=0,o=e.length;r<o;r++)i=Math.max(i,n.distanceToSquared(e[r]));return this.radius=Math.sqrt(i),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){const t=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=t*t}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,t){const n=this.center.distanceToSquared(e);return t.copy(e),n>this.radius*this.radius&&(t.sub(this.center).normalize(),t.multiplyScalar(this.radius).add(this.center)),t}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;Vi.subVectors(e,this.center);const t=Vi.lengthSq();if(t>this.radius*this.radius){const n=Math.sqrt(t),i=(n-this.radius)*.5;this.center.addScaledVector(Vi,i/n),this.radius+=i}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(Lr.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(Vi.copy(e.center).add(Lr)),this.expandByPoint(Vi.copy(e.center).sub(Lr))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}}const mn=new y,Dr=new y,ps=new y,Cn=new y,Or=new y,ms=new y,Ir=new y;class ar{constructor(e=new y,t=new y(0,0,-1)){this.origin=e,this.direction=t}set(e,t){return this.origin.copy(e),this.direction.copy(t),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,t){return t.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,mn)),this}closestPointToPoint(e,t){t.subVectors(e,this.origin);const n=t.dot(this.direction);return n<0?t.copy(this.origin):t.copy(this.origin).addScaledVector(this.direction,n)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){const t=mn.subVectors(e,this.origin).dot(this.direction);return t<0?this.origin.distanceToSquared(e):(mn.copy(this.origin).addScaledVector(this.direction,t),mn.distanceToSquared(e))}distanceSqToSegment(e,t,n,i){Dr.copy(e).add(t).multiplyScalar(.5),ps.copy(t).sub(e).normalize(),Cn.copy(this.origin).sub(Dr);const r=e.distanceTo(t)*.5,o=-this.direction.dot(ps),a=Cn.dot(this.direction),c=-Cn.dot(ps),l=Cn.lengthSq(),h=Math.abs(1-o*o);let u,f,d,g;if(h>0)if(u=o*c-a,f=o*a-c,g=r*h,u>=0)if(f>=-g)if(f<=g){const v=1/h;u*=v,f*=v,d=u*(u+o*f+2*a)+f*(o*u+f+2*c)+l}else f=r,u=Math.max(0,-(o*f+a)),d=-u*u+f*(f+2*c)+l;else f=-r,u=Math.max(0,-(o*f+a)),d=-u*u+f*(f+2*c)+l;else f<=-g?(u=Math.max(0,-(-o*r+a)),f=u>0?-r:Math.min(Math.max(-r,-c),r),d=-u*u+f*(f+2*c)+l):f<=g?(u=0,f=Math.min(Math.max(-r,-c),r),d=f*(f+2*c)+l):(u=Math.max(0,-(o*r+a)),f=u>0?r:Math.min(Math.max(-r,-c),r),d=-u*u+f*(f+2*c)+l);else f=o>0?-r:r,u=Math.max(0,-(o*f+a)),d=-u*u+f*(f+2*c)+l;return n&&n.copy(this.origin).addScaledVector(this.direction,u),i&&i.copy(Dr).addScaledVector(ps,f),d}intersectSphere(e,t){mn.subVectors(e.center,this.origin);const n=mn.dot(this.direction),i=mn.dot(mn)-n*n,r=e.radius*e.radius;if(i>r)return null;const o=Math.sqrt(r-i),a=n-o,c=n+o;return c<0?null:a<0?this.at(c,t):this.at(a,t)}intersectsSphere(e){return this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){const t=e.normal.dot(this.direction);if(t===0)return e.distanceToPoint(this.origin)===0?0:null;const n=-(this.origin.dot(e.normal)+e.constant)/t;return n>=0?n:null}intersectPlane(e,t){const n=this.distanceToPlane(e);return n===null?null:this.at(n,t)}intersectsPlane(e){const t=e.distanceToPoint(this.origin);return t===0||e.normal.dot(this.direction)*t<0}intersectBox(e,t){let n,i,r,o,a,c;const l=1/this.direction.x,h=1/this.direction.y,u=1/this.direction.z,f=this.origin;return l>=0?(n=(e.min.x-f.x)*l,i=(e.max.x-f.x)*l):(n=(e.max.x-f.x)*l,i=(e.min.x-f.x)*l),h>=0?(r=(e.min.y-f.y)*h,o=(e.max.y-f.y)*h):(r=(e.max.y-f.y)*h,o=(e.min.y-f.y)*h),n>o||r>i||((r>n||isNaN(n))&&(n=r),(o<i||isNaN(i))&&(i=o),u>=0?(a=(e.min.z-f.z)*u,c=(e.max.z-f.z)*u):(a=(e.max.z-f.z)*u,c=(e.min.z-f.z)*u),n>c||a>i)||((a>n||n!==n)&&(n=a),(c<i||i!==i)&&(i=c),i<0)?null:this.at(n>=0?n:i,t)}intersectsBox(e){return this.intersectBox(e,mn)!==null}intersectTriangle(e,t,n,i,r){Or.subVectors(t,e),ms.subVectors(n,e),Ir.crossVectors(Or,ms);let o=this.direction.dot(Ir),a;if(o>0){if(i)return null;a=1}else if(o<0)a=-1,o=-o;else return null;Cn.subVectors(this.origin,e);const c=a*this.direction.dot(ms.crossVectors(Cn,ms));if(c<0)return null;const l=a*this.direction.dot(Or.cross(Cn));if(l<0||c+l>o)return null;const h=-a*Cn.dot(Ir);return h<0?null:this.at(h/o,r)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class ot{constructor(e,t,n,i,r,o,a,c,l,h,u,f,d,g,v,m){ot.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,t,n,i,r,o,a,c,l,h,u,f,d,g,v,m)}set(e,t,n,i,r,o,a,c,l,h,u,f,d,g,v,m){const p=this.elements;return p[0]=e,p[4]=t,p[8]=n,p[12]=i,p[1]=r,p[5]=o,p[9]=a,p[13]=c,p[2]=l,p[6]=h,p[10]=u,p[14]=f,p[3]=d,p[7]=g,p[11]=v,p[15]=m,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new ot().fromArray(this.elements)}copy(e){const t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],t[9]=n[9],t[10]=n[10],t[11]=n[11],t[12]=n[12],t[13]=n[13],t[14]=n[14],t[15]=n[15],this}copyPosition(e){const t=this.elements,n=e.elements;return t[12]=n[12],t[13]=n[13],t[14]=n[14],this}setFromMatrix3(e){const t=e.elements;return this.set(t[0],t[3],t[6],0,t[1],t[4],t[7],0,t[2],t[5],t[8],0,0,0,0,1),this}extractBasis(e,t,n){return e.setFromMatrixColumn(this,0),t.setFromMatrixColumn(this,1),n.setFromMatrixColumn(this,2),this}makeBasis(e,t,n){return this.set(e.x,t.x,n.x,0,e.y,t.y,n.y,0,e.z,t.z,n.z,0,0,0,0,1),this}extractRotation(e){const t=this.elements,n=e.elements,i=1/li.setFromMatrixColumn(e,0).length(),r=1/li.setFromMatrixColumn(e,1).length(),o=1/li.setFromMatrixColumn(e,2).length();return t[0]=n[0]*i,t[1]=n[1]*i,t[2]=n[2]*i,t[3]=0,t[4]=n[4]*r,t[5]=n[5]*r,t[6]=n[6]*r,t[7]=0,t[8]=n[8]*o,t[9]=n[9]*o,t[10]=n[10]*o,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromEuler(e){const t=this.elements,n=e.x,i=e.y,r=e.z,o=Math.cos(n),a=Math.sin(n),c=Math.cos(i),l=Math.sin(i),h=Math.cos(r),u=Math.sin(r);if(e.order==="XYZ"){const f=o*h,d=o*u,g=a*h,v=a*u;t[0]=c*h,t[4]=-c*u,t[8]=l,t[1]=d+g*l,t[5]=f-v*l,t[9]=-a*c,t[2]=v-f*l,t[6]=g+d*l,t[10]=o*c}else if(e.order==="YXZ"){const f=c*h,d=c*u,g=l*h,v=l*u;t[0]=f+v*a,t[4]=g*a-d,t[8]=o*l,t[1]=o*u,t[5]=o*h,t[9]=-a,t[2]=d*a-g,t[6]=v+f*a,t[10]=o*c}else if(e.order==="ZXY"){const f=c*h,d=c*u,g=l*h,v=l*u;t[0]=f-v*a,t[4]=-o*u,t[8]=g+d*a,t[1]=d+g*a,t[5]=o*h,t[9]=v-f*a,t[2]=-o*l,t[6]=a,t[10]=o*c}else if(e.order==="ZYX"){const f=o*h,d=o*u,g=a*h,v=a*u;t[0]=c*h,t[4]=g*l-d,t[8]=f*l+v,t[1]=c*u,t[5]=v*l+f,t[9]=d*l-g,t[2]=-l,t[6]=a*c,t[10]=o*c}else if(e.order==="YZX"){const f=o*c,d=o*l,g=a*c,v=a*l;t[0]=c*h,t[4]=v-f*u,t[8]=g*u+d,t[1]=u,t[5]=o*h,t[9]=-a*h,t[2]=-l*h,t[6]=d*u+g,t[10]=f-v*u}else if(e.order==="XZY"){const f=o*c,d=o*l,g=a*c,v=a*l;t[0]=c*h,t[4]=-u,t[8]=l*h,t[1]=f*u+v,t[5]=o*h,t[9]=d*u-g,t[2]=g*u-d,t[6]=a*h,t[10]=v*u+f}return t[3]=0,t[7]=0,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromQuaternion(e){return this.compose(zh,e,Bh)}lookAt(e,t,n){const i=this.elements;return jt.subVectors(e,t),jt.lengthSq()===0&&(jt.z=1),jt.normalize(),Rn.crossVectors(n,jt),Rn.lengthSq()===0&&(Math.abs(n.z)===1?jt.x+=1e-4:jt.z+=1e-4,jt.normalize(),Rn.crossVectors(n,jt)),Rn.normalize(),gs.crossVectors(jt,Rn),i[0]=Rn.x,i[4]=gs.x,i[8]=jt.x,i[1]=Rn.y,i[5]=gs.y,i[9]=jt.y,i[2]=Rn.z,i[6]=gs.z,i[10]=jt.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const n=e.elements,i=t.elements,r=this.elements,o=n[0],a=n[4],c=n[8],l=n[12],h=n[1],u=n[5],f=n[9],d=n[13],g=n[2],v=n[6],m=n[10],p=n[14],_=n[3],x=n[7],b=n[11],R=n[15],T=i[0],E=i[4],O=i[8],M=i[12],w=i[1],N=i[5],B=i[9],q=i[13],L=i[2],F=i[6],G=i[10],Z=i[14],K=i[3],J=i[7],Q=i[11],ne=i[15];return r[0]=o*T+a*w+c*L+l*K,r[4]=o*E+a*N+c*F+l*J,r[8]=o*O+a*B+c*G+l*Q,r[12]=o*M+a*q+c*Z+l*ne,r[1]=h*T+u*w+f*L+d*K,r[5]=h*E+u*N+f*F+d*J,r[9]=h*O+u*B+f*G+d*Q,r[13]=h*M+u*q+f*Z+d*ne,r[2]=g*T+v*w+m*L+p*K,r[6]=g*E+v*N+m*F+p*J,r[10]=g*O+v*B+m*G+p*Q,r[14]=g*M+v*q+m*Z+p*ne,r[3]=_*T+x*w+b*L+R*K,r[7]=_*E+x*N+b*F+R*J,r[11]=_*O+x*B+b*G+R*Q,r[15]=_*M+x*q+b*Z+R*ne,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[4]*=e,t[8]*=e,t[12]*=e,t[1]*=e,t[5]*=e,t[9]*=e,t[13]*=e,t[2]*=e,t[6]*=e,t[10]*=e,t[14]*=e,t[3]*=e,t[7]*=e,t[11]*=e,t[15]*=e,this}determinant(){const e=this.elements,t=e[0],n=e[4],i=e[8],r=e[12],o=e[1],a=e[5],c=e[9],l=e[13],h=e[2],u=e[6],f=e[10],d=e[14],g=e[3],v=e[7],m=e[11],p=e[15];return g*(+r*c*u-i*l*u-r*a*f+n*l*f+i*a*d-n*c*d)+v*(+t*c*d-t*l*f+r*o*f-i*o*d+i*l*h-r*c*h)+m*(+t*l*u-t*a*d-r*o*u+n*o*d+r*a*h-n*l*h)+p*(-i*a*h-t*c*u+t*a*f+i*o*u-n*o*f+n*c*h)}transpose(){const e=this.elements;let t;return t=e[1],e[1]=e[4],e[4]=t,t=e[2],e[2]=e[8],e[8]=t,t=e[6],e[6]=e[9],e[9]=t,t=e[3],e[3]=e[12],e[12]=t,t=e[7],e[7]=e[13],e[13]=t,t=e[11],e[11]=e[14],e[14]=t,this}setPosition(e,t,n){const i=this.elements;return e.isVector3?(i[12]=e.x,i[13]=e.y,i[14]=e.z):(i[12]=e,i[13]=t,i[14]=n),this}invert(){const e=this.elements,t=e[0],n=e[1],i=e[2],r=e[3],o=e[4],a=e[5],c=e[6],l=e[7],h=e[8],u=e[9],f=e[10],d=e[11],g=e[12],v=e[13],m=e[14],p=e[15],_=u*m*l-v*f*l+v*c*d-a*m*d-u*c*p+a*f*p,x=g*f*l-h*m*l-g*c*d+o*m*d+h*c*p-o*f*p,b=h*v*l-g*u*l+g*a*d-o*v*d-h*a*p+o*u*p,R=g*u*c-h*v*c-g*a*f+o*v*f+h*a*m-o*u*m,T=t*_+n*x+i*b+r*R;if(T===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const E=1/T;return e[0]=_*E,e[1]=(v*f*r-u*m*r-v*i*d+n*m*d+u*i*p-n*f*p)*E,e[2]=(a*m*r-v*c*r+v*i*l-n*m*l-a*i*p+n*c*p)*E,e[3]=(u*c*r-a*f*r-u*i*l+n*f*l+a*i*d-n*c*d)*E,e[4]=x*E,e[5]=(h*m*r-g*f*r+g*i*d-t*m*d-h*i*p+t*f*p)*E,e[6]=(g*c*r-o*m*r-g*i*l+t*m*l+o*i*p-t*c*p)*E,e[7]=(o*f*r-h*c*r+h*i*l-t*f*l-o*i*d+t*c*d)*E,e[8]=b*E,e[9]=(g*u*r-h*v*r-g*n*d+t*v*d+h*n*p-t*u*p)*E,e[10]=(o*v*r-g*a*r+g*n*l-t*v*l-o*n*p+t*a*p)*E,e[11]=(h*a*r-o*u*r-h*n*l+t*u*l+o*n*d-t*a*d)*E,e[12]=R*E,e[13]=(h*v*i-g*u*i+g*n*f-t*v*f-h*n*m+t*u*m)*E,e[14]=(g*a*i-o*v*i-g*n*c+t*v*c+o*n*m-t*a*m)*E,e[15]=(o*u*i-h*a*i+h*n*c-t*u*c-o*n*f+t*a*f)*E,this}scale(e){const t=this.elements,n=e.x,i=e.y,r=e.z;return t[0]*=n,t[4]*=i,t[8]*=r,t[1]*=n,t[5]*=i,t[9]*=r,t[2]*=n,t[6]*=i,t[10]*=r,t[3]*=n,t[7]*=i,t[11]*=r,this}getMaxScaleOnAxis(){const e=this.elements,t=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],n=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],i=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(t,n,i))}makeTranslation(e,t,n){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,t,0,0,1,n,0,0,0,1),this}makeRotationX(e){const t=Math.cos(e),n=Math.sin(e);return this.set(1,0,0,0,0,t,-n,0,0,n,t,0,0,0,0,1),this}makeRotationY(e){const t=Math.cos(e),n=Math.sin(e);return this.set(t,0,n,0,0,1,0,0,-n,0,t,0,0,0,0,1),this}makeRotationZ(e){const t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,0,n,t,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,t){const n=Math.cos(t),i=Math.sin(t),r=1-n,o=e.x,a=e.y,c=e.z,l=r*o,h=r*a;return this.set(l*o+n,l*a-i*c,l*c+i*a,0,l*a+i*c,h*a+n,h*c-i*o,0,l*c-i*a,h*c+i*o,r*c*c+n,0,0,0,0,1),this}makeScale(e,t,n){return this.set(e,0,0,0,0,t,0,0,0,0,n,0,0,0,0,1),this}makeShear(e,t,n,i,r,o){return this.set(1,n,r,0,e,1,o,0,t,i,1,0,0,0,0,1),this}compose(e,t,n){const i=this.elements,r=t._x,o=t._y,a=t._z,c=t._w,l=r+r,h=o+o,u=a+a,f=r*l,d=r*h,g=r*u,v=o*h,m=o*u,p=a*u,_=c*l,x=c*h,b=c*u,R=n.x,T=n.y,E=n.z;return i[0]=(1-(v+p))*R,i[1]=(d+b)*R,i[2]=(g-x)*R,i[3]=0,i[4]=(d-b)*T,i[5]=(1-(f+p))*T,i[6]=(m+_)*T,i[7]=0,i[8]=(g+x)*E,i[9]=(m-_)*E,i[10]=(1-(f+v))*E,i[11]=0,i[12]=e.x,i[13]=e.y,i[14]=e.z,i[15]=1,this}decompose(e,t,n){const i=this.elements;let r=li.set(i[0],i[1],i[2]).length();const o=li.set(i[4],i[5],i[6]).length(),a=li.set(i[8],i[9],i[10]).length();this.determinant()<0&&(r=-r),e.x=i[12],e.y=i[13],e.z=i[14],tn.copy(this);const l=1/r,h=1/o,u=1/a;return tn.elements[0]*=l,tn.elements[1]*=l,tn.elements[2]*=l,tn.elements[4]*=h,tn.elements[5]*=h,tn.elements[6]*=h,tn.elements[8]*=u,tn.elements[9]*=u,tn.elements[10]*=u,t.setFromRotationMatrix(tn),n.x=r,n.y=o,n.z=a,this}makePerspective(e,t,n,i,r,o,a=Mn){const c=this.elements,l=2*r/(t-e),h=2*r/(n-i),u=(t+e)/(t-e),f=(n+i)/(n-i);let d,g;if(a===Mn)d=-(o+r)/(o-r),g=-2*o*r/(o-r);else if(a===Zs)d=-o/(o-r),g=-o*r/(o-r);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+a);return c[0]=l,c[4]=0,c[8]=u,c[12]=0,c[1]=0,c[5]=h,c[9]=f,c[13]=0,c[2]=0,c[6]=0,c[10]=d,c[14]=g,c[3]=0,c[7]=0,c[11]=-1,c[15]=0,this}makeOrthographic(e,t,n,i,r,o,a=Mn){const c=this.elements,l=1/(t-e),h=1/(n-i),u=1/(o-r),f=(t+e)*l,d=(n+i)*h;let g,v;if(a===Mn)g=(o+r)*u,v=-2*u;else if(a===Zs)g=r*u,v=-1*u;else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+a);return c[0]=2*l,c[4]=0,c[8]=0,c[12]=-f,c[1]=0,c[5]=2*h,c[9]=0,c[13]=-d,c[2]=0,c[6]=0,c[10]=v,c[14]=-g,c[3]=0,c[7]=0,c[11]=0,c[15]=1,this}equals(e){const t=this.elements,n=e.elements;for(let i=0;i<16;i++)if(t[i]!==n[i])return!1;return!0}fromArray(e,t=0){for(let n=0;n<16;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){const n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e[t+9]=n[9],e[t+10]=n[10],e[t+11]=n[11],e[t+12]=n[12],e[t+13]=n[13],e[t+14]=n[14],e[t+15]=n[15],e}}const li=new y,tn=new ot,zh=new y(0,0,0),Bh=new y(1,1,1),Rn=new y,gs=new y,jt=new y,Ra=new ot,Pa=new Qn;class cr{constructor(e=0,t=0,n=0,i=cr.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=t,this._z=n,this._order=i}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,t,n,i=this._order){return this._x=e,this._y=t,this._z=n,this._order=i,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,t=this._order,n=!0){const i=e.elements,r=i[0],o=i[4],a=i[8],c=i[1],l=i[5],h=i[9],u=i[2],f=i[6],d=i[10];switch(t){case"XYZ":this._y=Math.asin(St(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(-h,d),this._z=Math.atan2(-o,r)):(this._x=Math.atan2(f,l),this._z=0);break;case"YXZ":this._x=Math.asin(-St(h,-1,1)),Math.abs(h)<.9999999?(this._y=Math.atan2(a,d),this._z=Math.atan2(c,l)):(this._y=Math.atan2(-u,r),this._z=0);break;case"ZXY":this._x=Math.asin(St(f,-1,1)),Math.abs(f)<.9999999?(this._y=Math.atan2(-u,d),this._z=Math.atan2(-o,l)):(this._y=0,this._z=Math.atan2(c,r));break;case"ZYX":this._y=Math.asin(-St(u,-1,1)),Math.abs(u)<.9999999?(this._x=Math.atan2(f,d),this._z=Math.atan2(c,r)):(this._x=0,this._z=Math.atan2(-o,l));break;case"YZX":this._z=Math.asin(St(c,-1,1)),Math.abs(c)<.9999999?(this._x=Math.atan2(-h,l),this._y=Math.atan2(-u,r)):(this._x=0,this._y=Math.atan2(a,d));break;case"XZY":this._z=Math.asin(-St(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(f,l),this._y=Math.atan2(a,r)):(this._x=Math.atan2(-h,d),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+t)}return this._order=t,n===!0&&this._onChangeCallback(),this}setFromQuaternion(e,t,n){return Ra.makeRotationFromQuaternion(e),this.setFromRotationMatrix(Ra,t,n)}setFromVector3(e,t=this._order){return this.set(e.x,e.y,e.z,t)}reorder(e){return Pa.setFromEuler(this),this.setFromQuaternion(Pa,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}cr.DEFAULT_ORDER="XYZ";class Ao{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}}let Gh=0;const La=new y,hi=new Qn,gn=new ot,vs=new y,Wi=new y,kh=new y,Hh=new Qn,Da=new y(1,0,0),Oa=new y(0,1,0),Ia=new y(0,0,1),Vh={type:"added"},Wh={type:"removed"};class vt extends ti{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:Gh++}),this.uuid=Sn(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=vt.DEFAULT_UP.clone();const e=new y,t=new cr,n=new Qn,i=new y(1,1,1);function r(){n.setFromEuler(t,!1)}function o(){t.setFromQuaternion(n,void 0,!1)}t._onChange(r),n._onChange(o),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:t},quaternion:{configurable:!0,enumerable:!0,value:n},scale:{configurable:!0,enumerable:!0,value:i},modelViewMatrix:{value:new ot},normalMatrix:{value:new Ye}}),this.matrix=new ot,this.matrixWorld=new ot,this.matrixAutoUpdate=vt.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=vt.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new Ao,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,t){this.quaternion.setFromAxisAngle(e,t)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,t){return hi.setFromAxisAngle(e,t),this.quaternion.multiply(hi),this}rotateOnWorldAxis(e,t){return hi.setFromAxisAngle(e,t),this.quaternion.premultiply(hi),this}rotateX(e){return this.rotateOnAxis(Da,e)}rotateY(e){return this.rotateOnAxis(Oa,e)}rotateZ(e){return this.rotateOnAxis(Ia,e)}translateOnAxis(e,t){return La.copy(e).applyQuaternion(this.quaternion),this.position.add(La.multiplyScalar(t)),this}translateX(e){return this.translateOnAxis(Da,e)}translateY(e){return this.translateOnAxis(Oa,e)}translateZ(e){return this.translateOnAxis(Ia,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(gn.copy(this.matrixWorld).invert())}lookAt(e,t,n){e.isVector3?vs.copy(e):vs.set(e,t,n);const i=this.parent;this.updateWorldMatrix(!0,!1),Wi.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?gn.lookAt(Wi,vs,this.up):gn.lookAt(vs,Wi,this.up),this.quaternion.setFromRotationMatrix(gn),i&&(gn.extractRotation(i.matrixWorld),hi.setFromRotationMatrix(gn),this.quaternion.premultiply(hi.invert()))}add(e){if(arguments.length>1){for(let t=0;t<arguments.length;t++)this.add(arguments[t]);return this}return e===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.parent!==null&&e.parent.remove(e),e.parent=this,this.children.push(e),e.dispatchEvent(Vh)):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.remove(arguments[n]);return this}const t=this.children.indexOf(e);return t!==-1&&(e.parent=null,this.children.splice(t,1),e.dispatchEvent(Wh)),this}removeFromParent(){const e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),gn.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),gn.multiply(e.parent.matrixWorld)),e.applyMatrix4(gn),this.add(e),e.updateWorldMatrix(!1,!0),this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,t){if(this[e]===t)return this;for(let n=0,i=this.children.length;n<i;n++){const o=this.children[n].getObjectByProperty(e,t);if(o!==void 0)return o}}getObjectsByProperty(e,t,n=[]){this[e]===t&&n.push(this);const i=this.children;for(let r=0,o=i.length;r<o;r++)i[r].getObjectsByProperty(e,t,n);return n}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Wi,e,kh),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Wi,Hh,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);const t=this.matrixWorld.elements;return e.set(t[8],t[9],t[10]).normalize()}raycast(){}traverse(e){e(this);const t=this.children;for(let n=0,i=t.length;n<i;n++)t[n].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);const t=this.children;for(let n=0,i=t.length;n<i;n++)t[n].traverseVisible(e)}traverseAncestors(e){const t=this.parent;t!==null&&(e(t),t.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix),this.matrixWorldNeedsUpdate=!1,e=!0);const t=this.children;for(let n=0,i=t.length;n<i;n++){const r=t[n];(r.matrixWorldAutoUpdate===!0||e===!0)&&r.updateMatrixWorld(e)}}updateWorldMatrix(e,t){const n=this.parent;if(e===!0&&n!==null&&n.matrixWorldAutoUpdate===!0&&n.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix),t===!0){const i=this.children;for(let r=0,o=i.length;r<o;r++){const a=i[r];a.matrixWorldAutoUpdate===!0&&a.updateWorldMatrix(!1,!0)}}}toJSON(e){const t=e===void 0||typeof e=="string",n={};t&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},n.metadata={version:4.6,type:"Object",generator:"Object3D.toJSON"});const i={};i.uuid=this.uuid,i.type=this.type,this.name!==""&&(i.name=this.name),this.castShadow===!0&&(i.castShadow=!0),this.receiveShadow===!0&&(i.receiveShadow=!0),this.visible===!1&&(i.visible=!1),this.frustumCulled===!1&&(i.frustumCulled=!1),this.renderOrder!==0&&(i.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(i.userData=this.userData),i.layers=this.layers.mask,i.matrix=this.matrix.toArray(),i.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(i.matrixAutoUpdate=!1),this.isInstancedMesh&&(i.type="InstancedMesh",i.count=this.count,i.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(i.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(i.type="BatchedMesh",i.perObjectFrustumCulled=this.perObjectFrustumCulled,i.sortObjects=this.sortObjects,i.drawRanges=this._drawRanges,i.reservedRanges=this._reservedRanges,i.visibility=this._visibility,i.active=this._active,i.bounds=this._bounds.map(a=>({boxInitialized:a.boxInitialized,boxMin:a.box.min.toArray(),boxMax:a.box.max.toArray(),sphereInitialized:a.sphereInitialized,sphereRadius:a.sphere.radius,sphereCenter:a.sphere.center.toArray()})),i.maxGeometryCount=this._maxGeometryCount,i.maxVertexCount=this._maxVertexCount,i.maxIndexCount=this._maxIndexCount,i.geometryInitialized=this._geometryInitialized,i.geometryCount=this._geometryCount,i.matricesTexture=this._matricesTexture.toJSON(e),this.boundingSphere!==null&&(i.boundingSphere={center:i.boundingSphere.center.toArray(),radius:i.boundingSphere.radius}),this.boundingBox!==null&&(i.boundingBox={min:i.boundingBox.min.toArray(),max:i.boundingBox.max.toArray()}));function r(a,c){return a[c.uuid]===void 0&&(a[c.uuid]=c.toJSON(e)),c.uuid}if(this.isScene)this.background&&(this.background.isColor?i.background=this.background.toJSON():this.background.isTexture&&(i.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(i.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){i.geometry=r(e.geometries,this.geometry);const a=this.geometry.parameters;if(a!==void 0&&a.shapes!==void 0){const c=a.shapes;if(Array.isArray(c))for(let l=0,h=c.length;l<h;l++){const u=c[l];r(e.shapes,u)}else r(e.shapes,c)}}if(this.isSkinnedMesh&&(i.bindMode=this.bindMode,i.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(r(e.skeletons,this.skeleton),i.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const a=[];for(let c=0,l=this.material.length;c<l;c++)a.push(r(e.materials,this.material[c]));i.material=a}else i.material=r(e.materials,this.material);if(this.children.length>0){i.children=[];for(let a=0;a<this.children.length;a++)i.children.push(this.children[a].toJSON(e).object)}if(this.animations.length>0){i.animations=[];for(let a=0;a<this.animations.length;a++){const c=this.animations[a];i.animations.push(r(e.animations,c))}}if(t){const a=o(e.geometries),c=o(e.materials),l=o(e.textures),h=o(e.images),u=o(e.shapes),f=o(e.skeletons),d=o(e.animations),g=o(e.nodes);a.length>0&&(n.geometries=a),c.length>0&&(n.materials=c),l.length>0&&(n.textures=l),h.length>0&&(n.images=h),u.length>0&&(n.shapes=u),f.length>0&&(n.skeletons=f),d.length>0&&(n.animations=d),g.length>0&&(n.nodes=g)}return n.object=i,n;function o(a){const c=[];for(const l in a){const h=a[l];delete h.metadata,c.push(h)}return c}}clone(e){return new this.constructor().copy(this,e)}copy(e,t=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),t===!0)for(let n=0;n<e.children.length;n++){const i=e.children[n];this.add(i.clone())}return this}}vt.DEFAULT_UP=new y(0,1,0);vt.DEFAULT_MATRIX_AUTO_UPDATE=!0;vt.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;const nn=new y,vn=new y,Nr=new y,_n=new y,ui=new y,di=new y,Na=new y,Ur=new y,Fr=new y,zr=new y;let _s=!1;class Yt{constructor(e=new y,t=new y,n=new y){this.a=e,this.b=t,this.c=n}static getNormal(e,t,n,i){i.subVectors(n,t),nn.subVectors(e,t),i.cross(nn);const r=i.lengthSq();return r>0?i.multiplyScalar(1/Math.sqrt(r)):i.set(0,0,0)}static getBarycoord(e,t,n,i,r){nn.subVectors(i,t),vn.subVectors(n,t),Nr.subVectors(e,t);const o=nn.dot(nn),a=nn.dot(vn),c=nn.dot(Nr),l=vn.dot(vn),h=vn.dot(Nr),u=o*l-a*a;if(u===0)return r.set(0,0,0),null;const f=1/u,d=(l*c-a*h)*f,g=(o*h-a*c)*f;return r.set(1-d-g,g,d)}static containsPoint(e,t,n,i){return this.getBarycoord(e,t,n,i,_n)===null?!1:_n.x>=0&&_n.y>=0&&_n.x+_n.y<=1}static getUV(e,t,n,i,r,o,a,c){return _s===!1&&(console.warn("THREE.Triangle.getUV() has been renamed to THREE.Triangle.getInterpolation()."),_s=!0),this.getInterpolation(e,t,n,i,r,o,a,c)}static getInterpolation(e,t,n,i,r,o,a,c){return this.getBarycoord(e,t,n,i,_n)===null?(c.x=0,c.y=0,"z"in c&&(c.z=0),"w"in c&&(c.w=0),null):(c.setScalar(0),c.addScaledVector(r,_n.x),c.addScaledVector(o,_n.y),c.addScaledVector(a,_n.z),c)}static isFrontFacing(e,t,n,i){return nn.subVectors(n,t),vn.subVectors(e,t),nn.cross(vn).dot(i)<0}set(e,t,n){return this.a.copy(e),this.b.copy(t),this.c.copy(n),this}setFromPointsAndIndices(e,t,n,i){return this.a.copy(e[t]),this.b.copy(e[n]),this.c.copy(e[i]),this}setFromAttributeAndIndices(e,t,n,i){return this.a.fromBufferAttribute(e,t),this.b.fromBufferAttribute(e,n),this.c.fromBufferAttribute(e,i),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return nn.subVectors(this.c,this.b),vn.subVectors(this.a,this.b),nn.cross(vn).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return Yt.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,t){return Yt.getBarycoord(e,this.a,this.b,this.c,t)}getUV(e,t,n,i,r){return _s===!1&&(console.warn("THREE.Triangle.getUV() has been renamed to THREE.Triangle.getInterpolation()."),_s=!0),Yt.getInterpolation(e,this.a,this.b,this.c,t,n,i,r)}getInterpolation(e,t,n,i,r){return Yt.getInterpolation(e,this.a,this.b,this.c,t,n,i,r)}containsPoint(e){return Yt.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return Yt.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,t){const n=this.a,i=this.b,r=this.c;let o,a;ui.subVectors(i,n),di.subVectors(r,n),Ur.subVectors(e,n);const c=ui.dot(Ur),l=di.dot(Ur);if(c<=0&&l<=0)return t.copy(n);Fr.subVectors(e,i);const h=ui.dot(Fr),u=di.dot(Fr);if(h>=0&&u<=h)return t.copy(i);const f=c*u-h*l;if(f<=0&&c>=0&&h<=0)return o=c/(c-h),t.copy(n).addScaledVector(ui,o);zr.subVectors(e,r);const d=ui.dot(zr),g=di.dot(zr);if(g>=0&&d<=g)return t.copy(r);const v=d*l-c*g;if(v<=0&&l>=0&&g<=0)return a=l/(l-g),t.copy(n).addScaledVector(di,a);const m=h*g-d*u;if(m<=0&&u-h>=0&&d-g>=0)return Na.subVectors(r,i),a=(u-h)/(u-h+(d-g)),t.copy(i).addScaledVector(Na,a);const p=1/(m+v+f);return o=v*p,a=f*p,t.copy(n).addScaledVector(ui,o).addScaledVector(di,a)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}}const Zc={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},Pn={h:0,s:0,l:0},xs={h:0,s:0,l:0};function Br(s,e,t){return t<0&&(t+=1),t>1&&(t-=1),t<1/6?s+(e-s)*6*t:t<1/2?e:t<2/3?s+(e-s)*6*(2/3-t):s}class Fe{constructor(e,t,n){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,t,n)}set(e,t,n){if(t===void 0&&n===void 0){const i=e;i&&i.isColor?this.copy(i):typeof i=="number"?this.setHex(i):typeof i=="string"&&this.setStyle(i)}else this.setRGB(e,t,n);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,t=wt){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,tt.toWorkingColorSpace(this,t),this}setRGB(e,t,n,i=tt.workingColorSpace){return this.r=e,this.g=t,this.b=n,tt.toWorkingColorSpace(this,i),this}setHSL(e,t,n,i=tt.workingColorSpace){if(e=Rh(e,1),t=St(t,0,1),n=St(n,0,1),t===0)this.r=this.g=this.b=n;else{const r=n<=.5?n*(1+t):n+t-n*t,o=2*n-r;this.r=Br(o,r,e+1/3),this.g=Br(o,r,e),this.b=Br(o,r,e-1/3)}return tt.toWorkingColorSpace(this,i),this}setStyle(e,t=wt){function n(r){r!==void 0&&parseFloat(r)<1&&console.warn("THREE.Color: Alpha component of "+e+" will be ignored.")}let i;if(i=/^(\w+)\(([^\)]*)\)/.exec(e)){let r;const o=i[1],a=i[2];switch(o){case"rgb":case"rgba":if(r=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(r[4]),this.setRGB(Math.min(255,parseInt(r[1],10))/255,Math.min(255,parseInt(r[2],10))/255,Math.min(255,parseInt(r[3],10))/255,t);if(r=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(r[4]),this.setRGB(Math.min(100,parseInt(r[1],10))/100,Math.min(100,parseInt(r[2],10))/100,Math.min(100,parseInt(r[3],10))/100,t);break;case"hsl":case"hsla":if(r=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(r[4]),this.setHSL(parseFloat(r[1])/360,parseFloat(r[2])/100,parseFloat(r[3])/100,t);break;default:console.warn("THREE.Color: Unknown color model "+e)}}else if(i=/^\#([A-Fa-f\d]+)$/.exec(e)){const r=i[1],o=r.length;if(o===3)return this.setRGB(parseInt(r.charAt(0),16)/15,parseInt(r.charAt(1),16)/15,parseInt(r.charAt(2),16)/15,t);if(o===6)return this.setHex(parseInt(r,16),t);console.warn("THREE.Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,t);return this}setColorName(e,t=wt){const n=Zc[e.toLowerCase()];return n!==void 0?this.setHex(n,t):console.warn("THREE.Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=Pi(e.r),this.g=Pi(e.g),this.b=Pi(e.b),this}copyLinearToSRGB(e){return this.r=Ar(e.r),this.g=Ar(e.g),this.b=Ar(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=wt){return tt.fromWorkingColorSpace(Dt.copy(this),e),Math.round(St(Dt.r*255,0,255))*65536+Math.round(St(Dt.g*255,0,255))*256+Math.round(St(Dt.b*255,0,255))}getHexString(e=wt){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,t=tt.workingColorSpace){tt.fromWorkingColorSpace(Dt.copy(this),t);const n=Dt.r,i=Dt.g,r=Dt.b,o=Math.max(n,i,r),a=Math.min(n,i,r);let c,l;const h=(a+o)/2;if(a===o)c=0,l=0;else{const u=o-a;switch(l=h<=.5?u/(o+a):u/(2-o-a),o){case n:c=(i-r)/u+(i<r?6:0);break;case i:c=(r-n)/u+2;break;case r:c=(n-i)/u+4;break}c/=6}return e.h=c,e.s=l,e.l=h,e}getRGB(e,t=tt.workingColorSpace){return tt.fromWorkingColorSpace(Dt.copy(this),t),e.r=Dt.r,e.g=Dt.g,e.b=Dt.b,e}getStyle(e=wt){tt.fromWorkingColorSpace(Dt.copy(this),e);const t=Dt.r,n=Dt.g,i=Dt.b;return e!==wt?`color(${e} ${t.toFixed(3)} ${n.toFixed(3)} ${i.toFixed(3)})`:`rgb(${Math.round(t*255)},${Math.round(n*255)},${Math.round(i*255)})`}offsetHSL(e,t,n){return this.getHSL(Pn),this.setHSL(Pn.h+e,Pn.s+t,Pn.l+n)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,t){return this.r=e.r+t.r,this.g=e.g+t.g,this.b=e.b+t.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,t){return this.r+=(e.r-this.r)*t,this.g+=(e.g-this.g)*t,this.b+=(e.b-this.b)*t,this}lerpColors(e,t,n){return this.r=e.r+(t.r-e.r)*n,this.g=e.g+(t.g-e.g)*n,this.b=e.b+(t.b-e.b)*n,this}lerpHSL(e,t){this.getHSL(Pn),e.getHSL(xs);const n=wr(Pn.h,xs.h,t),i=wr(Pn.s,xs.s,t),r=wr(Pn.l,xs.l,t);return this.setHSL(n,i,r),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){const t=this.r,n=this.g,i=this.b,r=e.elements;return this.r=r[0]*t+r[3]*n+r[6]*i,this.g=r[1]*t+r[4]*n+r[7]*i,this.b=r[2]*t+r[5]*n+r[8]*i,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,t=0){return this.r=e[t],this.g=e[t+1],this.b=e[t+2],this}toArray(e=[],t=0){return e[t]=this.r,e[t+1]=this.g,e[t+2]=this.b,e}fromBufferAttribute(e,t){return this.r=e.getX(t),this.g=e.getY(t),this.b=e.getZ(t),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const Dt=new Fe;Fe.NAMES=Zc;let Xh=0;class wn extends ti{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:Xh++}),this.uuid=Sn(),this.name="",this.type="Material",this.blending=Ri,this.side=un,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=co,this.blendDst=lo,this.blendEquation=jn,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new Fe(0,0,0),this.blendAlpha=0,this.depthFunc=js,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=Ma,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=si,this.stencilZFail=si,this.stencilZPass=si,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBuild(){}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(const t in e){const n=e[t];if(n===void 0){console.warn(`THREE.Material: parameter '${t}' has value of undefined.`);continue}const i=this[t];if(i===void 0){console.warn(`THREE.Material: '${t}' is not a property of THREE.${this.type}.`);continue}i&&i.isColor?i.set(n):i&&i.isVector3&&n&&n.isVector3?i.copy(n):this[t]=n}}toJSON(e){const t=e===void 0||typeof e=="string";t&&(e={textures:{},images:{}});const n={metadata:{version:4.6,type:"Material",generator:"Material.toJSON"}};n.uuid=this.uuid,n.type=this.type,this.name!==""&&(n.name=this.name),this.color&&this.color.isColor&&(n.color=this.color.getHex()),this.roughness!==void 0&&(n.roughness=this.roughness),this.metalness!==void 0&&(n.metalness=this.metalness),this.sheen!==void 0&&(n.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(n.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(n.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(n.emissive=this.emissive.getHex()),this.emissiveIntensity&&this.emissiveIntensity!==1&&(n.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(n.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(n.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(n.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(n.shininess=this.shininess),this.clearcoat!==void 0&&(n.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(n.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(n.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(n.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(n.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,n.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.iridescence!==void 0&&(n.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(n.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(n.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(n.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(n.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(n.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(n.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(n.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(n.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(n.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(n.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(n.lightMap=this.lightMap.toJSON(e).uuid,n.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(n.aoMap=this.aoMap.toJSON(e).uuid,n.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(n.bumpMap=this.bumpMap.toJSON(e).uuid,n.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(n.normalMap=this.normalMap.toJSON(e).uuid,n.normalMapType=this.normalMapType,n.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(n.displacementMap=this.displacementMap.toJSON(e).uuid,n.displacementScale=this.displacementScale,n.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(n.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(n.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(n.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(n.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(n.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(n.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(n.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(n.combine=this.combine)),this.envMapIntensity!==void 0&&(n.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(n.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(n.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(n.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(n.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(n.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(n.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(n.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(n.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(n.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(n.size=this.size),this.shadowSide!==null&&(n.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(n.sizeAttenuation=this.sizeAttenuation),this.blending!==Ri&&(n.blending=this.blending),this.side!==un&&(n.side=this.side),this.vertexColors===!0&&(n.vertexColors=!0),this.opacity<1&&(n.opacity=this.opacity),this.transparent===!0&&(n.transparent=!0),this.blendSrc!==co&&(n.blendSrc=this.blendSrc),this.blendDst!==lo&&(n.blendDst=this.blendDst),this.blendEquation!==jn&&(n.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(n.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(n.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(n.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(n.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(n.blendAlpha=this.blendAlpha),this.depthFunc!==js&&(n.depthFunc=this.depthFunc),this.depthTest===!1&&(n.depthTest=this.depthTest),this.depthWrite===!1&&(n.depthWrite=this.depthWrite),this.colorWrite===!1&&(n.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(n.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==Ma&&(n.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(n.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(n.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==si&&(n.stencilFail=this.stencilFail),this.stencilZFail!==si&&(n.stencilZFail=this.stencilZFail),this.stencilZPass!==si&&(n.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(n.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(n.rotation=this.rotation),this.polygonOffset===!0&&(n.polygonOffset=!0),this.polygonOffsetFactor!==0&&(n.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(n.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(n.linewidth=this.linewidth),this.dashSize!==void 0&&(n.dashSize=this.dashSize),this.gapSize!==void 0&&(n.gapSize=this.gapSize),this.scale!==void 0&&(n.scale=this.scale),this.dithering===!0&&(n.dithering=!0),this.alphaTest>0&&(n.alphaTest=this.alphaTest),this.alphaHash===!0&&(n.alphaHash=!0),this.alphaToCoverage===!0&&(n.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(n.premultipliedAlpha=!0),this.forceSinglePass===!0&&(n.forceSinglePass=!0),this.wireframe===!0&&(n.wireframe=!0),this.wireframeLinewidth>1&&(n.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(n.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(n.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(n.flatShading=!0),this.visible===!1&&(n.visible=!1),this.toneMapped===!1&&(n.toneMapped=!1),this.fog===!1&&(n.fog=!1),Object.keys(this.userData).length>0&&(n.userData=this.userData);function i(r){const o=[];for(const a in r){const c=r[a];delete c.metadata,o.push(c)}return o}if(t){const r=i(e.textures),o=i(e.images);r.length>0&&(n.textures=r),o.length>0&&(n.images=o)}return n}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;const t=e.clippingPlanes;let n=null;if(t!==null){const i=t.length;n=new Array(i);for(let r=0;r!==i;++r)n[r]=t[r].clone()}return this.clippingPlanes=n,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}}class Ct extends wn{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new Fe(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.combine=Ic,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}}const gt=new y,ys=new j;class Nt{constructor(e,t,n=!1){if(Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,this.name="",this.array=e,this.itemSize=t,this.count=e!==void 0?e.length/t:0,this.normalized=n,this.usage=mo,this._updateRange={offset:0,count:-1},this.updateRanges=[],this.gpuType=Dn,this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}get updateRange(){return console.warn("THREE.BufferAttribute: updateRange() is deprecated and will be removed in r169. Use addUpdateRange() instead."),this._updateRange}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this}copyAt(e,t,n){e*=this.itemSize,n*=t.itemSize;for(let i=0,r=this.itemSize;i<r;i++)this.array[e+i]=t.array[n+i];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let t=0,n=this.count;t<n;t++)ys.fromBufferAttribute(this,t),ys.applyMatrix3(e),this.setXY(t,ys.x,ys.y);else if(this.itemSize===3)for(let t=0,n=this.count;t<n;t++)gt.fromBufferAttribute(this,t),gt.applyMatrix3(e),this.setXYZ(t,gt.x,gt.y,gt.z);return this}applyMatrix4(e){for(let t=0,n=this.count;t<n;t++)gt.fromBufferAttribute(this,t),gt.applyMatrix4(e),this.setXYZ(t,gt.x,gt.y,gt.z);return this}applyNormalMatrix(e){for(let t=0,n=this.count;t<n;t++)gt.fromBufferAttribute(this,t),gt.applyNormalMatrix(e),this.setXYZ(t,gt.x,gt.y,gt.z);return this}transformDirection(e){for(let t=0,n=this.count;t<n;t++)gt.fromBufferAttribute(this,t),gt.transformDirection(e),this.setXYZ(t,gt.x,gt.y,gt.z);return this}set(e,t=0){return this.array.set(e,t),this}getComponent(e,t){let n=this.array[e*this.itemSize+t];return this.normalized&&(n=bn(n,this.array)),n}setComponent(e,t,n){return this.normalized&&(n=nt(n,this.array)),this.array[e*this.itemSize+t]=n,this}getX(e){let t=this.array[e*this.itemSize];return this.normalized&&(t=bn(t,this.array)),t}setX(e,t){return this.normalized&&(t=nt(t,this.array)),this.array[e*this.itemSize]=t,this}getY(e){let t=this.array[e*this.itemSize+1];return this.normalized&&(t=bn(t,this.array)),t}setY(e,t){return this.normalized&&(t=nt(t,this.array)),this.array[e*this.itemSize+1]=t,this}getZ(e){let t=this.array[e*this.itemSize+2];return this.normalized&&(t=bn(t,this.array)),t}setZ(e,t){return this.normalized&&(t=nt(t,this.array)),this.array[e*this.itemSize+2]=t,this}getW(e){let t=this.array[e*this.itemSize+3];return this.normalized&&(t=bn(t,this.array)),t}setW(e,t){return this.normalized&&(t=nt(t,this.array)),this.array[e*this.itemSize+3]=t,this}setXY(e,t,n){return e*=this.itemSize,this.normalized&&(t=nt(t,this.array),n=nt(n,this.array)),this.array[e+0]=t,this.array[e+1]=n,this}setXYZ(e,t,n,i){return e*=this.itemSize,this.normalized&&(t=nt(t,this.array),n=nt(n,this.array),i=nt(i,this.array)),this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=i,this}setXYZW(e,t,n,i,r){return e*=this.itemSize,this.normalized&&(t=nt(t,this.array),n=nt(n,this.array),i=nt(i,this.array),r=nt(r,this.array)),this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=i,this.array[e+3]=r,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(e.name=this.name),this.usage!==mo&&(e.usage=this.usage),e}}class Kc extends Nt{constructor(e,t,n){super(new Uint16Array(e),t,n)}}class Jc extends Nt{constructor(e,t,n){super(new Uint32Array(e),t,n)}}class et extends Nt{constructor(e,t,n){super(new Float32Array(e),t,n)}}let jh=0;const Kt=new ot,Gr=new vt,fi=new y,qt=new ni,Xi=new ni,Mt=new y;class it extends ti{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:jh++}),this.uuid=Sn(),this.name="",this.type="BufferGeometry",this.index=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(jc(e)?Jc:Kc)(e,1):this.index=e,this}getAttribute(e){return this.attributes[e]}setAttribute(e,t){return this.attributes[e]=t,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,t,n=0){this.groups.push({start:e,count:t,materialIndex:n})}clearGroups(){this.groups=[]}setDrawRange(e,t){this.drawRange.start=e,this.drawRange.count=t}applyMatrix4(e){const t=this.attributes.position;t!==void 0&&(t.applyMatrix4(e),t.needsUpdate=!0);const n=this.attributes.normal;if(n!==void 0){const r=new Ye().getNormalMatrix(e);n.applyNormalMatrix(r),n.needsUpdate=!0}const i=this.attributes.tangent;return i!==void 0&&(i.transformDirection(e),i.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(e){return Kt.makeRotationFromQuaternion(e),this.applyMatrix4(Kt),this}rotateX(e){return Kt.makeRotationX(e),this.applyMatrix4(Kt),this}rotateY(e){return Kt.makeRotationY(e),this.applyMatrix4(Kt),this}rotateZ(e){return Kt.makeRotationZ(e),this.applyMatrix4(Kt),this}translate(e,t,n){return Kt.makeTranslation(e,t,n),this.applyMatrix4(Kt),this}scale(e,t,n){return Kt.makeScale(e,t,n),this.applyMatrix4(Kt),this}lookAt(e){return Gr.lookAt(e),Gr.updateMatrix(),this.applyMatrix4(Gr.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(fi).negate(),this.translate(fi.x,fi.y,fi.z),this}setFromPoints(e){const t=[];for(let n=0,i=e.length;n<i;n++){const r=e[n];t.push(r.x,r.y,r.z||0)}return this.setAttribute("position",new et(t,3)),this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new ni);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error('THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box. Alternatively set "mesh.frustumCulled" to "false".',this),this.boundingBox.set(new y(-1/0,-1/0,-1/0),new y(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),t)for(let n=0,i=t.length;n<i;n++){const r=t[n];qt.setFromBufferAttribute(r),this.morphTargetsRelative?(Mt.addVectors(this.boundingBox.min,qt.min),this.boundingBox.expandByPoint(Mt),Mt.addVectors(this.boundingBox.max,qt.max),this.boundingBox.expandByPoint(Mt)):(this.boundingBox.expandByPoint(qt.min),this.boundingBox.expandByPoint(qt.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new or);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error('THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere. Alternatively set "mesh.frustumCulled" to "false".',this),this.boundingSphere.set(new y,1/0);return}if(e){const n=this.boundingSphere.center;if(qt.setFromBufferAttribute(e),t)for(let r=0,o=t.length;r<o;r++){const a=t[r];Xi.setFromBufferAttribute(a),this.morphTargetsRelative?(Mt.addVectors(qt.min,Xi.min),qt.expandByPoint(Mt),Mt.addVectors(qt.max,Xi.max),qt.expandByPoint(Mt)):(qt.expandByPoint(Xi.min),qt.expandByPoint(Xi.max))}qt.getCenter(n);let i=0;for(let r=0,o=e.count;r<o;r++)Mt.fromBufferAttribute(e,r),i=Math.max(i,n.distanceToSquared(Mt));if(t)for(let r=0,o=t.length;r<o;r++){const a=t[r],c=this.morphTargetsRelative;for(let l=0,h=a.count;l<h;l++)Mt.fromBufferAttribute(a,l),c&&(fi.fromBufferAttribute(e,l),Mt.add(fi)),i=Math.max(i,n.distanceToSquared(Mt))}this.boundingSphere.radius=Math.sqrt(i),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const e=this.index,t=this.attributes;if(e===null||t.position===void 0||t.normal===void 0||t.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const n=e.array,i=t.position.array,r=t.normal.array,o=t.uv.array,a=i.length/3;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new Nt(new Float32Array(4*a),4));const c=this.getAttribute("tangent").array,l=[],h=[];for(let w=0;w<a;w++)l[w]=new y,h[w]=new y;const u=new y,f=new y,d=new y,g=new j,v=new j,m=new j,p=new y,_=new y;function x(w,N,B){u.fromArray(i,w*3),f.fromArray(i,N*3),d.fromArray(i,B*3),g.fromArray(o,w*2),v.fromArray(o,N*2),m.fromArray(o,B*2),f.sub(u),d.sub(u),v.sub(g),m.sub(g);const q=1/(v.x*m.y-m.x*v.y);isFinite(q)&&(p.copy(f).multiplyScalar(m.y).addScaledVector(d,-v.y).multiplyScalar(q),_.copy(d).multiplyScalar(v.x).addScaledVector(f,-m.x).multiplyScalar(q),l[w].add(p),l[N].add(p),l[B].add(p),h[w].add(_),h[N].add(_),h[B].add(_))}let b=this.groups;b.length===0&&(b=[{start:0,count:n.length}]);for(let w=0,N=b.length;w<N;++w){const B=b[w],q=B.start,L=B.count;for(let F=q,G=q+L;F<G;F+=3)x(n[F+0],n[F+1],n[F+2])}const R=new y,T=new y,E=new y,O=new y;function M(w){E.fromArray(r,w*3),O.copy(E);const N=l[w];R.copy(N),R.sub(E.multiplyScalar(E.dot(N))).normalize(),T.crossVectors(O,N);const q=T.dot(h[w])<0?-1:1;c[w*4]=R.x,c[w*4+1]=R.y,c[w*4+2]=R.z,c[w*4+3]=q}for(let w=0,N=b.length;w<N;++w){const B=b[w],q=B.start,L=B.count;for(let F=q,G=q+L;F<G;F+=3)M(n[F+0]),M(n[F+1]),M(n[F+2])}}computeVertexNormals(){const e=this.index,t=this.getAttribute("position");if(t!==void 0){let n=this.getAttribute("normal");if(n===void 0)n=new Nt(new Float32Array(t.count*3),3),this.setAttribute("normal",n);else for(let f=0,d=n.count;f<d;f++)n.setXYZ(f,0,0,0);const i=new y,r=new y,o=new y,a=new y,c=new y,l=new y,h=new y,u=new y;if(e)for(let f=0,d=e.count;f<d;f+=3){const g=e.getX(f+0),v=e.getX(f+1),m=e.getX(f+2);i.fromBufferAttribute(t,g),r.fromBufferAttribute(t,v),o.fromBufferAttribute(t,m),h.subVectors(o,r),u.subVectors(i,r),h.cross(u),a.fromBufferAttribute(n,g),c.fromBufferAttribute(n,v),l.fromBufferAttribute(n,m),a.add(h),c.add(h),l.add(h),n.setXYZ(g,a.x,a.y,a.z),n.setXYZ(v,c.x,c.y,c.z),n.setXYZ(m,l.x,l.y,l.z)}else for(let f=0,d=t.count;f<d;f+=3)i.fromBufferAttribute(t,f+0),r.fromBufferAttribute(t,f+1),o.fromBufferAttribute(t,f+2),h.subVectors(o,r),u.subVectors(i,r),h.cross(u),n.setXYZ(f+0,h.x,h.y,h.z),n.setXYZ(f+1,h.x,h.y,h.z),n.setXYZ(f+2,h.x,h.y,h.z);this.normalizeNormals(),n.needsUpdate=!0}}normalizeNormals(){const e=this.attributes.normal;for(let t=0,n=e.count;t<n;t++)Mt.fromBufferAttribute(e,t),Mt.normalize(),e.setXYZ(t,Mt.x,Mt.y,Mt.z)}toNonIndexed(){function e(a,c){const l=a.array,h=a.itemSize,u=a.normalized,f=new l.constructor(c.length*h);let d=0,g=0;for(let v=0,m=c.length;v<m;v++){a.isInterleavedBufferAttribute?d=c[v]*a.data.stride+a.offset:d=c[v]*h;for(let p=0;p<h;p++)f[g++]=l[d++]}return new Nt(f,h,u)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const t=new it,n=this.index.array,i=this.attributes;for(const a in i){const c=i[a],l=e(c,n);t.setAttribute(a,l)}const r=this.morphAttributes;for(const a in r){const c=[],l=r[a];for(let h=0,u=l.length;h<u;h++){const f=l[h],d=e(f,n);c.push(d)}t.morphAttributes[a]=c}t.morphTargetsRelative=this.morphTargetsRelative;const o=this.groups;for(let a=0,c=o.length;a<c;a++){const l=o[a];t.addGroup(l.start,l.count,l.materialIndex)}return t}toJSON(){const e={metadata:{version:4.6,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.type,this.name!==""&&(e.name=this.name),Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0){const c=this.parameters;for(const l in c)c[l]!==void 0&&(e[l]=c[l]);return e}e.data={attributes:{}};const t=this.index;t!==null&&(e.data.index={type:t.array.constructor.name,array:Array.prototype.slice.call(t.array)});const n=this.attributes;for(const c in n){const l=n[c];e.data.attributes[c]=l.toJSON(e.data)}const i={};let r=!1;for(const c in this.morphAttributes){const l=this.morphAttributes[c],h=[];for(let u=0,f=l.length;u<f;u++){const d=l[u];h.push(d.toJSON(e.data))}h.length>0&&(i[c]=h,r=!0)}r&&(e.data.morphAttributes=i,e.data.morphTargetsRelative=this.morphTargetsRelative);const o=this.groups;o.length>0&&(e.data.groups=JSON.parse(JSON.stringify(o)));const a=this.boundingSphere;return a!==null&&(e.data.boundingSphere={center:a.center.toArray(),radius:a.radius}),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const t={};this.name=e.name;const n=e.index;n!==null&&this.setIndex(n.clone(t));const i=e.attributes;for(const l in i){const h=i[l];this.setAttribute(l,h.clone(t))}const r=e.morphAttributes;for(const l in r){const h=[],u=r[l];for(let f=0,d=u.length;f<d;f++)h.push(u[f].clone(t));this.morphAttributes[l]=h}this.morphTargetsRelative=e.morphTargetsRelative;const o=e.groups;for(let l=0,h=o.length;l<h;l++){const u=o[l];this.addGroup(u.start,u.count,u.materialIndex)}const a=e.boundingBox;a!==null&&(this.boundingBox=a.clone());const c=e.boundingSphere;return c!==null&&(this.boundingSphere=c.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}const Ua=new ot,Vn=new ar,bs=new or,Fa=new y,pi=new y,mi=new y,gi=new y,kr=new y,Ms=new y,Ss=new j,Es=new j,ws=new j,za=new y,Ba=new y,Ga=new y,Ts=new y,As=new y;class Oe extends vt{constructor(e=new it,t=new Ct){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=t,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){const t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){const i=t[n[0]];if(i!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,o=i.length;r<o;r++){const a=i[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=r}}}}getVertexPosition(e,t){const n=this.geometry,i=n.attributes.position,r=n.morphAttributes.position,o=n.morphTargetsRelative;t.fromBufferAttribute(i,e);const a=this.morphTargetInfluences;if(r&&a){Ms.set(0,0,0);for(let c=0,l=r.length;c<l;c++){const h=a[c],u=r[c];h!==0&&(kr.fromBufferAttribute(u,e),o?Ms.addScaledVector(kr,h):Ms.addScaledVector(kr.sub(t),h))}t.add(Ms)}return t}raycast(e,t){const n=this.geometry,i=this.material,r=this.matrixWorld;i!==void 0&&(n.boundingSphere===null&&n.computeBoundingSphere(),bs.copy(n.boundingSphere),bs.applyMatrix4(r),Vn.copy(e.ray).recast(e.near),!(bs.containsPoint(Vn.origin)===!1&&(Vn.intersectSphere(bs,Fa)===null||Vn.origin.distanceToSquared(Fa)>(e.far-e.near)**2))&&(Ua.copy(r).invert(),Vn.copy(e.ray).applyMatrix4(Ua),!(n.boundingBox!==null&&Vn.intersectsBox(n.boundingBox)===!1)&&this._computeIntersections(e,t,Vn)))}_computeIntersections(e,t,n){let i;const r=this.geometry,o=this.material,a=r.index,c=r.attributes.position,l=r.attributes.uv,h=r.attributes.uv1,u=r.attributes.normal,f=r.groups,d=r.drawRange;if(a!==null)if(Array.isArray(o))for(let g=0,v=f.length;g<v;g++){const m=f[g],p=o[m.materialIndex],_=Math.max(m.start,d.start),x=Math.min(a.count,Math.min(m.start+m.count,d.start+d.count));for(let b=_,R=x;b<R;b+=3){const T=a.getX(b),E=a.getX(b+1),O=a.getX(b+2);i=Cs(this,p,e,n,l,h,u,T,E,O),i&&(i.faceIndex=Math.floor(b/3),i.face.materialIndex=m.materialIndex,t.push(i))}}else{const g=Math.max(0,d.start),v=Math.min(a.count,d.start+d.count);for(let m=g,p=v;m<p;m+=3){const _=a.getX(m),x=a.getX(m+1),b=a.getX(m+2);i=Cs(this,o,e,n,l,h,u,_,x,b),i&&(i.faceIndex=Math.floor(m/3),t.push(i))}}else if(c!==void 0)if(Array.isArray(o))for(let g=0,v=f.length;g<v;g++){const m=f[g],p=o[m.materialIndex],_=Math.max(m.start,d.start),x=Math.min(c.count,Math.min(m.start+m.count,d.start+d.count));for(let b=_,R=x;b<R;b+=3){const T=b,E=b+1,O=b+2;i=Cs(this,p,e,n,l,h,u,T,E,O),i&&(i.faceIndex=Math.floor(b/3),i.face.materialIndex=m.materialIndex,t.push(i))}}else{const g=Math.max(0,d.start),v=Math.min(c.count,d.start+d.count);for(let m=g,p=v;m<p;m+=3){const _=m,x=m+1,b=m+2;i=Cs(this,o,e,n,l,h,u,_,x,b),i&&(i.faceIndex=Math.floor(m/3),t.push(i))}}}}function qh(s,e,t,n,i,r,o,a){let c;if(e.side===kt?c=n.intersectTriangle(o,r,i,!0,a):c=n.intersectTriangle(i,r,o,e.side===un,a),c===null)return null;As.copy(a),As.applyMatrix4(s.matrixWorld);const l=t.ray.origin.distanceTo(As);return l<t.near||l>t.far?null:{distance:l,point:As.clone(),object:s}}function Cs(s,e,t,n,i,r,o,a,c,l){s.getVertexPosition(a,pi),s.getVertexPosition(c,mi),s.getVertexPosition(l,gi);const h=qh(s,e,t,n,pi,mi,gi,Ts);if(h){i&&(Ss.fromBufferAttribute(i,a),Es.fromBufferAttribute(i,c),ws.fromBufferAttribute(i,l),h.uv=Yt.getInterpolation(Ts,pi,mi,gi,Ss,Es,ws,new j)),r&&(Ss.fromBufferAttribute(r,a),Es.fromBufferAttribute(r,c),ws.fromBufferAttribute(r,l),h.uv1=Yt.getInterpolation(Ts,pi,mi,gi,Ss,Es,ws,new j),h.uv2=h.uv1),o&&(za.fromBufferAttribute(o,a),Ba.fromBufferAttribute(o,c),Ga.fromBufferAttribute(o,l),h.normal=Yt.getInterpolation(Ts,pi,mi,gi,za,Ba,Ga,new y),h.normal.dot(n.direction)>0&&h.normal.multiplyScalar(-1));const u={a,b:c,c:l,normal:new y,materialIndex:0};Yt.getNormal(pi,mi,gi,u.normal),h.face=u}return h}class os extends it{constructor(e=1,t=1,n=1,i=1,r=1,o=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:t,depth:n,widthSegments:i,heightSegments:r,depthSegments:o};const a=this;i=Math.floor(i),r=Math.floor(r),o=Math.floor(o);const c=[],l=[],h=[],u=[];let f=0,d=0;g("z","y","x",-1,-1,n,t,e,o,r,0),g("z","y","x",1,-1,n,t,-e,o,r,1),g("x","z","y",1,1,e,n,t,i,o,2),g("x","z","y",1,-1,e,n,-t,i,o,3),g("x","y","z",1,-1,e,t,n,i,r,4),g("x","y","z",-1,-1,e,t,-n,i,r,5),this.setIndex(c),this.setAttribute("position",new et(l,3)),this.setAttribute("normal",new et(h,3)),this.setAttribute("uv",new et(u,2));function g(v,m,p,_,x,b,R,T,E,O,M){const w=b/E,N=R/O,B=b/2,q=R/2,L=T/2,F=E+1,G=O+1;let Z=0,K=0;const J=new y;for(let Q=0;Q<G;Q++){const ne=Q*N-q;for(let ce=0;ce<F;ce++){const X=ce*w-B;J[v]=X*_,J[m]=ne*x,J[p]=L,l.push(J.x,J.y,J.z),J[v]=0,J[m]=0,J[p]=T>0?1:-1,h.push(J.x,J.y,J.z),u.push(ce/E),u.push(1-Q/O),Z+=1}}for(let Q=0;Q<O;Q++)for(let ne=0;ne<E;ne++){const ce=f+ne+F*Q,X=f+ne+F*(Q+1),ee=f+(ne+1)+F*(Q+1),pe=f+(ne+1)+F*Q;c.push(ce,X,pe),c.push(X,ee,pe),K+=6}a.addGroup(d,K,M),d+=K,f+=Z}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new os(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}}function zi(s){const e={};for(const t in s){e[t]={};for(const n in s[t]){const i=s[t][n];i&&(i.isColor||i.isMatrix3||i.isMatrix4||i.isVector2||i.isVector3||i.isVector4||i.isTexture||i.isQuaternion)?i.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[t][n]=null):e[t][n]=i.clone():Array.isArray(i)?e[t][n]=i.slice():e[t][n]=i}}return e}function Bt(s){const e={};for(let t=0;t<s.length;t++){const n=zi(s[t]);for(const i in n)e[i]=n[i]}return e}function Yh(s){const e=[];for(let t=0;t<s.length;t++)e.push(s[t].clone());return e}function Qc(s){return s.getRenderTarget()===null?s.outputColorSpace:tt.workingColorSpace}const $h={clone:zi,merge:Bt};var Zh=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,Kh=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class zn extends wn{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=Zh,this.fragmentShader=Kh,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={derivatives:!1,fragDepth:!1,drawBuffers:!1,shaderTextureLOD:!1,clipCullDistance:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=zi(e.uniforms),this.uniformsGroups=Yh(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this}toJSON(e){const t=super.toJSON(e);t.glslVersion=this.glslVersion,t.uniforms={};for(const i in this.uniforms){const o=this.uniforms[i].value;o&&o.isTexture?t.uniforms[i]={type:"t",value:o.toJSON(e).uuid}:o&&o.isColor?t.uniforms[i]={type:"c",value:o.getHex()}:o&&o.isVector2?t.uniforms[i]={type:"v2",value:o.toArray()}:o&&o.isVector3?t.uniforms[i]={type:"v3",value:o.toArray()}:o&&o.isVector4?t.uniforms[i]={type:"v4",value:o.toArray()}:o&&o.isMatrix3?t.uniforms[i]={type:"m3",value:o.toArray()}:o&&o.isMatrix4?t.uniforms[i]={type:"m4",value:o.toArray()}:t.uniforms[i]={value:o}}Object.keys(this.defines).length>0&&(t.defines=this.defines),t.vertexShader=this.vertexShader,t.fragmentShader=this.fragmentShader,t.lights=this.lights,t.clipping=this.clipping;const n={};for(const i in this.extensions)this.extensions[i]===!0&&(n[i]=!0);return Object.keys(n).length>0&&(t.extensions=n),t}}class el extends vt{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new ot,this.projectionMatrix=new ot,this.projectionMatrixInverse=new ot,this.coordinateSystem=Mn}copy(e,t){return super.copy(e,t),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(e,t){super.updateWorldMatrix(e,t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}}class Tt extends el{constructor(e=50,t=1,n=.1,i=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=n,this.far=i,this.focus=10,this.aspect=t,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){const t=.5*this.getFilmHeight()/e;this.fov=vo*2*Math.atan(t),this.updateProjectionMatrix()}getFocalLength(){const e=Math.tan($i*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return vo*2*Math.atan(Math.tan($i*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}setViewOffset(e,t,n,i,r,o){this.aspect=e/t,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=i,this.view.width=r,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=this.near;let t=e*Math.tan($i*.5*this.fov)/this.zoom,n=2*t,i=this.aspect*n,r=-.5*i;const o=this.view;if(this.view!==null&&this.view.enabled){const c=o.fullWidth,l=o.fullHeight;r+=o.offsetX*i/c,t-=o.offsetY*n/l,i*=o.width/c,n*=o.height/l}const a=this.filmOffset;a!==0&&(r+=e*a/this.getFilmWidth()),this.projectionMatrix.makePerspective(r,r+i,t,t-n,e,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.fov=this.fov,t.object.zoom=this.zoom,t.object.near=this.near,t.object.far=this.far,t.object.focus=this.focus,t.object.aspect=this.aspect,this.view!==null&&(t.object.view=Object.assign({},this.view)),t.object.filmGauge=this.filmGauge,t.object.filmOffset=this.filmOffset,t}}const vi=-90,_i=1;class Jh extends vt{constructor(e,t,n){super(),this.type="CubeCamera",this.renderTarget=n,this.coordinateSystem=null,this.activeMipmapLevel=0;const i=new Tt(vi,_i,e,t);i.layers=this.layers,this.add(i);const r=new Tt(vi,_i,e,t);r.layers=this.layers,this.add(r);const o=new Tt(vi,_i,e,t);o.layers=this.layers,this.add(o);const a=new Tt(vi,_i,e,t);a.layers=this.layers,this.add(a);const c=new Tt(vi,_i,e,t);c.layers=this.layers,this.add(c);const l=new Tt(vi,_i,e,t);l.layers=this.layers,this.add(l)}updateCoordinateSystem(){const e=this.coordinateSystem,t=this.children.concat(),[n,i,r,o,a,c]=t;for(const l of t)this.remove(l);if(e===Mn)n.up.set(0,1,0),n.lookAt(1,0,0),i.up.set(0,1,0),i.lookAt(-1,0,0),r.up.set(0,0,-1),r.lookAt(0,1,0),o.up.set(0,0,1),o.lookAt(0,-1,0),a.up.set(0,1,0),a.lookAt(0,0,1),c.up.set(0,1,0),c.lookAt(0,0,-1);else if(e===Zs)n.up.set(0,-1,0),n.lookAt(-1,0,0),i.up.set(0,-1,0),i.lookAt(1,0,0),r.up.set(0,0,1),r.lookAt(0,1,0),o.up.set(0,0,-1),o.lookAt(0,-1,0),a.up.set(0,-1,0),a.lookAt(0,0,1),c.up.set(0,-1,0),c.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(const l of t)this.add(l),l.updateMatrixWorld()}update(e,t){this.parent===null&&this.updateMatrixWorld();const{renderTarget:n,activeMipmapLevel:i}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());const[r,o,a,c,l,h]=this.children,u=e.getRenderTarget(),f=e.getActiveCubeFace(),d=e.getActiveMipmapLevel(),g=e.xr.enabled;e.xr.enabled=!1;const v=n.texture.generateMipmaps;n.texture.generateMipmaps=!1,e.setRenderTarget(n,0,i),e.render(t,r),e.setRenderTarget(n,1,i),e.render(t,o),e.setRenderTarget(n,2,i),e.render(t,a),e.setRenderTarget(n,3,i),e.render(t,c),e.setRenderTarget(n,4,i),e.render(t,l),n.texture.generateMipmaps=v,e.setRenderTarget(n,5,i),e.render(t,h),e.setRenderTarget(u,f,d),e.xr.enabled=g,n.texture.needsPMREMUpdate=!0}}class tl extends Ft{constructor(e,t,n,i,r,o,a,c,l,h){e=e!==void 0?e:[],t=t!==void 0?t:Ni,super(e,t,n,i,r,o,a,c,l,h),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}}class Qh extends Jn{constructor(e=1,t={}){super(e,e,t),this.isWebGLCubeRenderTarget=!0;const n={width:e,height:e,depth:1},i=[n,n,n,n,n,n];t.encoding!==void 0&&(Zi("THREE.WebGLCubeRenderTarget: option.encoding has been replaced by option.colorSpace."),t.colorSpace=t.encoding===Zn?wt:Jt),this.texture=new tl(i,t.mapping,t.wrapS,t.wrapT,t.magFilter,t.minFilter,t.format,t.type,t.anisotropy,t.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.generateMipmaps=t.generateMipmaps!==void 0?t.generateMipmaps:!1,this.texture.minFilter=t.minFilter!==void 0?t.minFilter:Ht}fromEquirectangularTexture(e,t){this.texture.type=t.type,this.texture.colorSpace=t.colorSpace,this.texture.generateMipmaps=t.generateMipmaps,this.texture.minFilter=t.minFilter,this.texture.magFilter=t.magFilter;const n={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},i=new os(5,5,5),r=new zn({name:"CubemapFromEquirect",uniforms:zi(n.uniforms),vertexShader:n.vertexShader,fragmentShader:n.fragmentShader,side:kt,blending:In});r.uniforms.tEquirect.value=t;const o=new Oe(i,r),a=t.minFilter;return t.minFilter===es&&(t.minFilter=Ht),new Jh(1,10,this).update(e,o),t.minFilter=a,o.geometry.dispose(),o.material.dispose(),this}clear(e,t,n,i){const r=e.getRenderTarget();for(let o=0;o<6;o++)e.setRenderTarget(this,o),e.clear(t,n,i);e.setRenderTarget(r)}}const Hr=new y,eu=new y,tu=new Ye;class on{constructor(e=new y(1,0,0),t=0){this.isPlane=!0,this.normal=e,this.constant=t}set(e,t){return this.normal.copy(e),this.constant=t,this}setComponents(e,t,n,i){return this.normal.set(e,t,n),this.constant=i,this}setFromNormalAndCoplanarPoint(e,t){return this.normal.copy(e),this.constant=-t.dot(this.normal),this}setFromCoplanarPoints(e,t,n){const i=Hr.subVectors(n,t).cross(eu.subVectors(e,t)).normalize();return this.setFromNormalAndCoplanarPoint(i,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){const e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,t){return t.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,t){const n=e.delta(Hr),i=this.normal.dot(n);if(i===0)return this.distanceToPoint(e.start)===0?t.copy(e.start):null;const r=-(e.start.dot(this.normal)+this.constant)/i;return r<0||r>1?null:t.copy(e.start).addScaledVector(n,r)}intersectsLine(e){const t=this.distanceToPoint(e.start),n=this.distanceToPoint(e.end);return t<0&&n>0||n<0&&t>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,t){const n=t||tu.getNormalMatrix(e),i=this.coplanarPoint(Hr).applyMatrix4(e),r=this.normal.applyMatrix3(n).normalize();return this.constant=-i.dot(r),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}}const Wn=new or,Rs=new y;class Co{constructor(e=new on,t=new on,n=new on,i=new on,r=new on,o=new on){this.planes=[e,t,n,i,r,o]}set(e,t,n,i,r,o){const a=this.planes;return a[0].copy(e),a[1].copy(t),a[2].copy(n),a[3].copy(i),a[4].copy(r),a[5].copy(o),this}copy(e){const t=this.planes;for(let n=0;n<6;n++)t[n].copy(e.planes[n]);return this}setFromProjectionMatrix(e,t=Mn){const n=this.planes,i=e.elements,r=i[0],o=i[1],a=i[2],c=i[3],l=i[4],h=i[5],u=i[6],f=i[7],d=i[8],g=i[9],v=i[10],m=i[11],p=i[12],_=i[13],x=i[14],b=i[15];if(n[0].setComponents(c-r,f-l,m-d,b-p).normalize(),n[1].setComponents(c+r,f+l,m+d,b+p).normalize(),n[2].setComponents(c+o,f+h,m+g,b+_).normalize(),n[3].setComponents(c-o,f-h,m-g,b-_).normalize(),n[4].setComponents(c-a,f-u,m-v,b-x).normalize(),t===Mn)n[5].setComponents(c+a,f+u,m+v,b+x).normalize();else if(t===Zs)n[5].setComponents(a,u,v,x).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+t);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),Wn.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{const t=e.geometry;t.boundingSphere===null&&t.computeBoundingSphere(),Wn.copy(t.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(Wn)}intersectsSprite(e){return Wn.center.set(0,0,0),Wn.radius=.7071067811865476,Wn.applyMatrix4(e.matrixWorld),this.intersectsSphere(Wn)}intersectsSphere(e){const t=this.planes,n=e.center,i=-e.radius;for(let r=0;r<6;r++)if(t[r].distanceToPoint(n)<i)return!1;return!0}intersectsBox(e){const t=this.planes;for(let n=0;n<6;n++){const i=t[n];if(Rs.x=i.normal.x>0?e.max.x:e.min.x,Rs.y=i.normal.y>0?e.max.y:e.min.y,Rs.z=i.normal.z>0?e.max.z:e.min.z,i.distanceToPoint(Rs)<0)return!1}return!0}containsPoint(e){const t=this.planes;for(let n=0;n<6;n++)if(t[n].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}function nl(){let s=null,e=!1,t=null,n=null;function i(r,o){t(r,o),n=s.requestAnimationFrame(i)}return{start:function(){e!==!0&&t!==null&&(n=s.requestAnimationFrame(i),e=!0)},stop:function(){s.cancelAnimationFrame(n),e=!1},setAnimationLoop:function(r){t=r},setContext:function(r){s=r}}}function nu(s,e){const t=e.isWebGL2,n=new WeakMap;function i(l,h){const u=l.array,f=l.usage,d=u.byteLength,g=s.createBuffer();s.bindBuffer(h,g),s.bufferData(h,u,f),l.onUploadCallback();let v;if(u instanceof Float32Array)v=s.FLOAT;else if(u instanceof Uint16Array)if(l.isFloat16BufferAttribute)if(t)v=s.HALF_FLOAT;else throw new Error("THREE.WebGLAttributes: Usage of Float16BufferAttribute requires WebGL2.");else v=s.UNSIGNED_SHORT;else if(u instanceof Int16Array)v=s.SHORT;else if(u instanceof Uint32Array)v=s.UNSIGNED_INT;else if(u instanceof Int32Array)v=s.INT;else if(u instanceof Int8Array)v=s.BYTE;else if(u instanceof Uint8Array)v=s.UNSIGNED_BYTE;else if(u instanceof Uint8ClampedArray)v=s.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+u);return{buffer:g,type:v,bytesPerElement:u.BYTES_PER_ELEMENT,version:l.version,size:d}}function r(l,h,u){const f=h.array,d=h._updateRange,g=h.updateRanges;if(s.bindBuffer(u,l),d.count===-1&&g.length===0&&s.bufferSubData(u,0,f),g.length!==0){for(let v=0,m=g.length;v<m;v++){const p=g[v];t?s.bufferSubData(u,p.start*f.BYTES_PER_ELEMENT,f,p.start,p.count):s.bufferSubData(u,p.start*f.BYTES_PER_ELEMENT,f.subarray(p.start,p.start+p.count))}h.clearUpdateRanges()}d.count!==-1&&(t?s.bufferSubData(u,d.offset*f.BYTES_PER_ELEMENT,f,d.offset,d.count):s.bufferSubData(u,d.offset*f.BYTES_PER_ELEMENT,f.subarray(d.offset,d.offset+d.count)),d.count=-1),h.onUploadCallback()}function o(l){return l.isInterleavedBufferAttribute&&(l=l.data),n.get(l)}function a(l){l.isInterleavedBufferAttribute&&(l=l.data);const h=n.get(l);h&&(s.deleteBuffer(h.buffer),n.delete(l))}function c(l,h){if(l.isGLBufferAttribute){const f=n.get(l);(!f||f.version<l.version)&&n.set(l,{buffer:l.buffer,type:l.type,bytesPerElement:l.elementSize,version:l.version});return}l.isInterleavedBufferAttribute&&(l=l.data);const u=n.get(l);if(u===void 0)n.set(l,i(l,h));else if(u.version<l.version){if(u.size!==l.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");r(u.buffer,l,h),u.version=l.version}}return{get:o,remove:a,update:c}}class Fn extends it{constructor(e=1,t=1,n=1,i=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:t,widthSegments:n,heightSegments:i};const r=e/2,o=t/2,a=Math.floor(n),c=Math.floor(i),l=a+1,h=c+1,u=e/a,f=t/c,d=[],g=[],v=[],m=[];for(let p=0;p<h;p++){const _=p*f-o;for(let x=0;x<l;x++){const b=x*u-r;g.push(b,-_,0),v.push(0,0,1),m.push(x/a),m.push(1-p/c)}}for(let p=0;p<c;p++)for(let _=0;_<a;_++){const x=_+l*p,b=_+l*(p+1),R=_+1+l*(p+1),T=_+1+l*p;d.push(x,b,T),d.push(b,R,T)}this.setIndex(d),this.setAttribute("position",new et(g,3)),this.setAttribute("normal",new et(v,3)),this.setAttribute("uv",new et(m,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Fn(e.width,e.height,e.widthSegments,e.heightSegments)}}var iu=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,su=`#ifdef USE_ALPHAHASH
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
#endif`,ru=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,ou=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,au=`#ifdef USE_ALPHATEST
	if ( diffuseColor.a < alphaTest ) discard;
#endif`,cu=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,lu=`#ifdef USE_AOMAP
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
#endif`,hu=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,uu=`#ifdef USE_BATCHING
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
#endif`,du=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( batchId );
#endif`,fu=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,pu=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,mu=`float G_BlinnPhong_Implicit( ) {
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
} // validated`,gu=`#ifdef USE_IRIDESCENCE
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
#endif`,vu=`#ifdef USE_BUMPMAP
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
#endif`,_u=`#if NUM_CLIPPING_PLANES > 0
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
#endif`,xu=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,yu=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,bu=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,Mu=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,Su=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,Eu=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR )
	varying vec3 vColor;
#endif`,wu=`#if defined( USE_COLOR_ALPHA )
	vColor = vec4( 1.0 );
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR )
	vColor = vec3( 1.0 );
#endif
#ifdef USE_COLOR
	vColor *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.xyz *= instanceColor.xyz;
#endif`,Tu=`#define PI 3.141592653589793
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
} // validated`,Au=`#ifdef ENVMAP_TYPE_CUBE_UV
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
#endif`,Cu=`vec3 transformedNormal = objectNormal;
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
#endif`,Ru=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,Pu=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,Lu=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,Du=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,Ou="gl_FragColor = linearToOutputTexel( gl_FragColor );",Iu=`
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
}`,Nu=`#ifdef USE_ENVMAP
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
#endif`,Uu=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,Fu=`#ifdef USE_ENVMAP
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
#endif`,zu=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,Bu=`#ifdef USE_ENVMAP
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
#endif`,Gu=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,ku=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,Hu=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,Vu=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,Wu=`#ifdef USE_GRADIENTMAP
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
}`,Xu=`#ifdef USE_LIGHTMAP
	vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
	vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
	reflectedLight.indirectDiffuse += lightMapIrradiance;
#endif`,ju=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,qu=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,Yu=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,$u=`uniform bool receiveShadow;
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
#endif`,Zu=`#ifdef USE_ENVMAP
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
#endif`,Ku=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,Ju=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,Qu=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,ed=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,td=`PhysicalMaterial material;
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
#endif`,nd=`struct PhysicalMaterial {
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
}`,id=`
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
#endif`,sd=`#if defined( RE_IndirectDiffuse )
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
#endif`,rd=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,od=`#if defined( USE_LOGDEPTHBUF ) && defined( USE_LOGDEPTHBUF_EXT )
	gl_FragDepthEXT = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,ad=`#if defined( USE_LOGDEPTHBUF ) && defined( USE_LOGDEPTHBUF_EXT )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,cd=`#ifdef USE_LOGDEPTHBUF
	#ifdef USE_LOGDEPTHBUF_EXT
		varying float vFragDepth;
		varying float vIsPerspective;
	#else
		uniform float logDepthBufFC;
	#endif
#endif`,ld=`#ifdef USE_LOGDEPTHBUF
	#ifdef USE_LOGDEPTHBUF_EXT
		vFragDepth = 1.0 + gl_Position.w;
		vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
	#else
		if ( isPerspectiveMatrix( projectionMatrix ) ) {
			gl_Position.z = log2( max( EPSILON, gl_Position.w + 1.0 ) ) * logDepthBufFC - 1.0;
			gl_Position.z *= gl_Position.w;
		}
	#endif
#endif`,hd=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = vec4( mix( pow( sampledDiffuseColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), sampledDiffuseColor.rgb * 0.0773993808, vec3( lessThanEqual( sampledDiffuseColor.rgb, vec3( 0.04045 ) ) ) ), sampledDiffuseColor.w );
	
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,ud=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,dd=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`,fd=`#if defined( USE_POINTS_UV )
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
#endif`,pd=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,md=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,gd=`#if defined( USE_MORPHCOLORS ) && defined( MORPHTARGETS_TEXTURE )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,vd=`#ifdef USE_MORPHNORMALS
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
#endif`,_d=`#ifdef USE_MORPHTARGETS
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
#endif`,xd=`#ifdef USE_MORPHTARGETS
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
#endif`,yd=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
vec3 nonPerturbedNormal = normal;`,bd=`#ifdef USE_NORMALMAP_OBJECTSPACE
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
#endif`,Md=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Sd=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Ed=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,wd=`#ifdef USE_NORMALMAP
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
#endif`,Td=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,Ad=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,Cd=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,Rd=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,Pd=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,Ld=`vec3 packNormalToRGB( const in vec3 normal ) {
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
}`,Dd=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,Od=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,Id=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,Nd=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,Ud=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,Fd=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,zd=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,Bd=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,Gd=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
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
#endif`,kd=`float getShadowMask() {
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
}`,Hd=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,Vd=`#ifdef USE_SKINNING
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
#endif`,Wd=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,Xd=`#ifdef USE_SKINNING
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
#endif`,jd=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,qd=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,Yd=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,$d=`#ifndef saturate
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
vec3 CustomToneMapping( vec3 color ) { return color; }`,Zd=`#ifdef USE_TRANSMISSION
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
#endif`,Kd=`#ifdef USE_TRANSMISSION
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
#endif`,Jd=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,Qd=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,ef=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,tf=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const nf=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,sf=`uniform sampler2D t2D;
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
}`,rf=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,of=`#ifdef ENVMAP_TYPE_CUBE
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
}`,af=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,cf=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,lf=`#include <common>
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
}`,hf=`#if DEPTH_PACKING == 3200
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
}`,uf=`#define DISTANCE
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
}`,df=`#define DISTANCE
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
}`,ff=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,pf=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,mf=`uniform float scale;
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
}`,gf=`uniform vec3 diffuse;
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
}`,vf=`#include <common>
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
}`,_f=`uniform vec3 diffuse;
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
}`,xf=`#define LAMBERT
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
}`,yf=`#define LAMBERT
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
}`,bf=`#define MATCAP
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
}`,Mf=`#define MATCAP
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
}`,Sf=`#define NORMAL
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
}`,Ef=`#define NORMAL
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
}`,wf=`#define PHONG
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
}`,Tf=`#define PHONG
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
}`,Af=`#define STANDARD
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
}`,Cf=`#define STANDARD
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
}`,Rf=`#define TOON
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
}`,Pf=`#define TOON
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
}`,Lf=`uniform float size;
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
}`,Df=`uniform vec3 diffuse;
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
}`,Of=`#include <common>
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
}`,If=`uniform vec3 color;
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
}`,Nf=`uniform float rotation;
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
}`,Uf=`uniform vec3 diffuse;
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
}`,We={alphahash_fragment:iu,alphahash_pars_fragment:su,alphamap_fragment:ru,alphamap_pars_fragment:ou,alphatest_fragment:au,alphatest_pars_fragment:cu,aomap_fragment:lu,aomap_pars_fragment:hu,batching_pars_vertex:uu,batching_vertex:du,begin_vertex:fu,beginnormal_vertex:pu,bsdfs:mu,iridescence_fragment:gu,bumpmap_pars_fragment:vu,clipping_planes_fragment:_u,clipping_planes_pars_fragment:xu,clipping_planes_pars_vertex:yu,clipping_planes_vertex:bu,color_fragment:Mu,color_pars_fragment:Su,color_pars_vertex:Eu,color_vertex:wu,common:Tu,cube_uv_reflection_fragment:Au,defaultnormal_vertex:Cu,displacementmap_pars_vertex:Ru,displacementmap_vertex:Pu,emissivemap_fragment:Lu,emissivemap_pars_fragment:Du,colorspace_fragment:Ou,colorspace_pars_fragment:Iu,envmap_fragment:Nu,envmap_common_pars_fragment:Uu,envmap_pars_fragment:Fu,envmap_pars_vertex:zu,envmap_physical_pars_fragment:Zu,envmap_vertex:Bu,fog_vertex:Gu,fog_pars_vertex:ku,fog_fragment:Hu,fog_pars_fragment:Vu,gradientmap_pars_fragment:Wu,lightmap_fragment:Xu,lightmap_pars_fragment:ju,lights_lambert_fragment:qu,lights_lambert_pars_fragment:Yu,lights_pars_begin:$u,lights_toon_fragment:Ku,lights_toon_pars_fragment:Ju,lights_phong_fragment:Qu,lights_phong_pars_fragment:ed,lights_physical_fragment:td,lights_physical_pars_fragment:nd,lights_fragment_begin:id,lights_fragment_maps:sd,lights_fragment_end:rd,logdepthbuf_fragment:od,logdepthbuf_pars_fragment:ad,logdepthbuf_pars_vertex:cd,logdepthbuf_vertex:ld,map_fragment:hd,map_pars_fragment:ud,map_particle_fragment:dd,map_particle_pars_fragment:fd,metalnessmap_fragment:pd,metalnessmap_pars_fragment:md,morphcolor_vertex:gd,morphnormal_vertex:vd,morphtarget_pars_vertex:_d,morphtarget_vertex:xd,normal_fragment_begin:yd,normal_fragment_maps:bd,normal_pars_fragment:Md,normal_pars_vertex:Sd,normal_vertex:Ed,normalmap_pars_fragment:wd,clearcoat_normal_fragment_begin:Td,clearcoat_normal_fragment_maps:Ad,clearcoat_pars_fragment:Cd,iridescence_pars_fragment:Rd,opaque_fragment:Pd,packing:Ld,premultiplied_alpha_fragment:Dd,project_vertex:Od,dithering_fragment:Id,dithering_pars_fragment:Nd,roughnessmap_fragment:Ud,roughnessmap_pars_fragment:Fd,shadowmap_pars_fragment:zd,shadowmap_pars_vertex:Bd,shadowmap_vertex:Gd,shadowmask_pars_fragment:kd,skinbase_vertex:Hd,skinning_pars_vertex:Vd,skinning_vertex:Wd,skinnormal_vertex:Xd,specularmap_fragment:jd,specularmap_pars_fragment:qd,tonemapping_fragment:Yd,tonemapping_pars_fragment:$d,transmission_fragment:Zd,transmission_pars_fragment:Kd,uv_pars_fragment:Jd,uv_pars_vertex:Qd,uv_vertex:ef,worldpos_vertex:tf,background_vert:nf,background_frag:sf,backgroundCube_vert:rf,backgroundCube_frag:of,cube_vert:af,cube_frag:cf,depth_vert:lf,depth_frag:hf,distanceRGBA_vert:uf,distanceRGBA_frag:df,equirect_vert:ff,equirect_frag:pf,linedashed_vert:mf,linedashed_frag:gf,meshbasic_vert:vf,meshbasic_frag:_f,meshlambert_vert:xf,meshlambert_frag:yf,meshmatcap_vert:bf,meshmatcap_frag:Mf,meshnormal_vert:Sf,meshnormal_frag:Ef,meshphong_vert:wf,meshphong_frag:Tf,meshphysical_vert:Af,meshphysical_frag:Cf,meshtoon_vert:Rf,meshtoon_frag:Pf,points_vert:Lf,points_frag:Df,shadow_vert:Of,shadow_frag:If,sprite_vert:Nf,sprite_frag:Uf},de={common:{diffuse:{value:new Fe(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new Ye},alphaMap:{value:null},alphaMapTransform:{value:new Ye},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new Ye}},envmap:{envMap:{value:null},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new Ye}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new Ye}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new Ye},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new Ye},normalScale:{value:new j(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new Ye},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new Ye}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new Ye}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new Ye}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new Fe(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new Fe(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new Ye},alphaTest:{value:0},uvTransform:{value:new Ye}},sprite:{diffuse:{value:new Fe(16777215)},opacity:{value:1},center:{value:new j(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new Ye},alphaMap:{value:null},alphaMapTransform:{value:new Ye},alphaTest:{value:0}}},hn={basic:{uniforms:Bt([de.common,de.specularmap,de.envmap,de.aomap,de.lightmap,de.fog]),vertexShader:We.meshbasic_vert,fragmentShader:We.meshbasic_frag},lambert:{uniforms:Bt([de.common,de.specularmap,de.envmap,de.aomap,de.lightmap,de.emissivemap,de.bumpmap,de.normalmap,de.displacementmap,de.fog,de.lights,{emissive:{value:new Fe(0)}}]),vertexShader:We.meshlambert_vert,fragmentShader:We.meshlambert_frag},phong:{uniforms:Bt([de.common,de.specularmap,de.envmap,de.aomap,de.lightmap,de.emissivemap,de.bumpmap,de.normalmap,de.displacementmap,de.fog,de.lights,{emissive:{value:new Fe(0)},specular:{value:new Fe(1118481)},shininess:{value:30}}]),vertexShader:We.meshphong_vert,fragmentShader:We.meshphong_frag},standard:{uniforms:Bt([de.common,de.envmap,de.aomap,de.lightmap,de.emissivemap,de.bumpmap,de.normalmap,de.displacementmap,de.roughnessmap,de.metalnessmap,de.fog,de.lights,{emissive:{value:new Fe(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:We.meshphysical_vert,fragmentShader:We.meshphysical_frag},toon:{uniforms:Bt([de.common,de.aomap,de.lightmap,de.emissivemap,de.bumpmap,de.normalmap,de.displacementmap,de.gradientmap,de.fog,de.lights,{emissive:{value:new Fe(0)}}]),vertexShader:We.meshtoon_vert,fragmentShader:We.meshtoon_frag},matcap:{uniforms:Bt([de.common,de.bumpmap,de.normalmap,de.displacementmap,de.fog,{matcap:{value:null}}]),vertexShader:We.meshmatcap_vert,fragmentShader:We.meshmatcap_frag},points:{uniforms:Bt([de.points,de.fog]),vertexShader:We.points_vert,fragmentShader:We.points_frag},dashed:{uniforms:Bt([de.common,de.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:We.linedashed_vert,fragmentShader:We.linedashed_frag},depth:{uniforms:Bt([de.common,de.displacementmap]),vertexShader:We.depth_vert,fragmentShader:We.depth_frag},normal:{uniforms:Bt([de.common,de.bumpmap,de.normalmap,de.displacementmap,{opacity:{value:1}}]),vertexShader:We.meshnormal_vert,fragmentShader:We.meshnormal_frag},sprite:{uniforms:Bt([de.sprite,de.fog]),vertexShader:We.sprite_vert,fragmentShader:We.sprite_frag},background:{uniforms:{uvTransform:{value:new Ye},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:We.background_vert,fragmentShader:We.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1}},vertexShader:We.backgroundCube_vert,fragmentShader:We.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:We.cube_vert,fragmentShader:We.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:We.equirect_vert,fragmentShader:We.equirect_frag},distanceRGBA:{uniforms:Bt([de.common,de.displacementmap,{referencePosition:{value:new y},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:We.distanceRGBA_vert,fragmentShader:We.distanceRGBA_frag},shadow:{uniforms:Bt([de.lights,de.fog,{color:{value:new Fe(0)},opacity:{value:1}}]),vertexShader:We.shadow_vert,fragmentShader:We.shadow_frag}};hn.physical={uniforms:Bt([hn.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new Ye},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new Ye},clearcoatNormalScale:{value:new j(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new Ye},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new Ye},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new Ye},sheen:{value:0},sheenColor:{value:new Fe(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new Ye},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new Ye},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new Ye},transmissionSamplerSize:{value:new j},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new Ye},attenuationDistance:{value:0},attenuationColor:{value:new Fe(0)},specularColor:{value:new Fe(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new Ye},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new Ye},anisotropyVector:{value:new j},anisotropyMap:{value:null},anisotropyMapTransform:{value:new Ye}}]),vertexShader:We.meshphysical_vert,fragmentShader:We.meshphysical_frag};const Ps={r:0,b:0,g:0};function Ff(s,e,t,n,i,r,o){const a=new Fe(0);let c=r===!0?0:1,l,h,u=null,f=0,d=null;function g(m,p){let _=!1,x=p.isScene===!0?p.background:null;x&&x.isTexture&&(x=(p.backgroundBlurriness>0?t:e).get(x)),x===null?v(a,c):x&&x.isColor&&(v(x,1),_=!0);const b=s.xr.getEnvironmentBlendMode();b==="additive"?n.buffers.color.setClear(0,0,0,1,o):b==="alpha-blend"&&n.buffers.color.setClear(0,0,0,0,o),(s.autoClear||_)&&s.clear(s.autoClearColor,s.autoClearDepth,s.autoClearStencil),x&&(x.isCubeTexture||x.mapping===sr)?(h===void 0&&(h=new Oe(new os(1,1,1),new zn({name:"BackgroundCubeMaterial",uniforms:zi(hn.backgroundCube.uniforms),vertexShader:hn.backgroundCube.vertexShader,fragmentShader:hn.backgroundCube.fragmentShader,side:kt,depthTest:!1,depthWrite:!1,fog:!1})),h.geometry.deleteAttribute("normal"),h.geometry.deleteAttribute("uv"),h.onBeforeRender=function(R,T,E){this.matrixWorld.copyPosition(E.matrixWorld)},Object.defineProperty(h.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),i.update(h)),h.material.uniforms.envMap.value=x,h.material.uniforms.flipEnvMap.value=x.isCubeTexture&&x.isRenderTargetTexture===!1?-1:1,h.material.uniforms.backgroundBlurriness.value=p.backgroundBlurriness,h.material.uniforms.backgroundIntensity.value=p.backgroundIntensity,h.material.toneMapped=tt.getTransfer(x.colorSpace)!==rt,(u!==x||f!==x.version||d!==s.toneMapping)&&(h.material.needsUpdate=!0,u=x,f=x.version,d=s.toneMapping),h.layers.enableAll(),m.unshift(h,h.geometry,h.material,0,0,null)):x&&x.isTexture&&(l===void 0&&(l=new Oe(new Fn(2,2),new zn({name:"BackgroundMaterial",uniforms:zi(hn.background.uniforms),vertexShader:hn.background.vertexShader,fragmentShader:hn.background.fragmentShader,side:un,depthTest:!1,depthWrite:!1,fog:!1})),l.geometry.deleteAttribute("normal"),Object.defineProperty(l.material,"map",{get:function(){return this.uniforms.t2D.value}}),i.update(l)),l.material.uniforms.t2D.value=x,l.material.uniforms.backgroundIntensity.value=p.backgroundIntensity,l.material.toneMapped=tt.getTransfer(x.colorSpace)!==rt,x.matrixAutoUpdate===!0&&x.updateMatrix(),l.material.uniforms.uvTransform.value.copy(x.matrix),(u!==x||f!==x.version||d!==s.toneMapping)&&(l.material.needsUpdate=!0,u=x,f=x.version,d=s.toneMapping),l.layers.enableAll(),m.unshift(l,l.geometry,l.material,0,0,null))}function v(m,p){m.getRGB(Ps,Qc(s)),n.buffers.color.setClear(Ps.r,Ps.g,Ps.b,p,o)}return{getClearColor:function(){return a},setClearColor:function(m,p=1){a.set(m),c=p,v(a,c)},getClearAlpha:function(){return c},setClearAlpha:function(m){c=m,v(a,c)},render:g}}function zf(s,e,t,n){const i=s.getParameter(s.MAX_VERTEX_ATTRIBS),r=n.isWebGL2?null:e.get("OES_vertex_array_object"),o=n.isWebGL2||r!==null,a={},c=m(null);let l=c,h=!1;function u(L,F,G,Z,K){let J=!1;if(o){const Q=v(Z,G,F);l!==Q&&(l=Q,d(l.object)),J=p(L,Z,G,K),J&&_(L,Z,G,K)}else{const Q=F.wireframe===!0;(l.geometry!==Z.id||l.program!==G.id||l.wireframe!==Q)&&(l.geometry=Z.id,l.program=G.id,l.wireframe=Q,J=!0)}K!==null&&t.update(K,s.ELEMENT_ARRAY_BUFFER),(J||h)&&(h=!1,O(L,F,G,Z),K!==null&&s.bindBuffer(s.ELEMENT_ARRAY_BUFFER,t.get(K).buffer))}function f(){return n.isWebGL2?s.createVertexArray():r.createVertexArrayOES()}function d(L){return n.isWebGL2?s.bindVertexArray(L):r.bindVertexArrayOES(L)}function g(L){return n.isWebGL2?s.deleteVertexArray(L):r.deleteVertexArrayOES(L)}function v(L,F,G){const Z=G.wireframe===!0;let K=a[L.id];K===void 0&&(K={},a[L.id]=K);let J=K[F.id];J===void 0&&(J={},K[F.id]=J);let Q=J[Z];return Q===void 0&&(Q=m(f()),J[Z]=Q),Q}function m(L){const F=[],G=[],Z=[];for(let K=0;K<i;K++)F[K]=0,G[K]=0,Z[K]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:F,enabledAttributes:G,attributeDivisors:Z,object:L,attributes:{},index:null}}function p(L,F,G,Z){const K=l.attributes,J=F.attributes;let Q=0;const ne=G.getAttributes();for(const ce in ne)if(ne[ce].location>=0){const ee=K[ce];let pe=J[ce];if(pe===void 0&&(ce==="instanceMatrix"&&L.instanceMatrix&&(pe=L.instanceMatrix),ce==="instanceColor"&&L.instanceColor&&(pe=L.instanceColor)),ee===void 0||ee.attribute!==pe||pe&&ee.data!==pe.data)return!0;Q++}return l.attributesNum!==Q||l.index!==Z}function _(L,F,G,Z){const K={},J=F.attributes;let Q=0;const ne=G.getAttributes();for(const ce in ne)if(ne[ce].location>=0){let ee=J[ce];ee===void 0&&(ce==="instanceMatrix"&&L.instanceMatrix&&(ee=L.instanceMatrix),ce==="instanceColor"&&L.instanceColor&&(ee=L.instanceColor));const pe={};pe.attribute=ee,ee&&ee.data&&(pe.data=ee.data),K[ce]=pe,Q++}l.attributes=K,l.attributesNum=Q,l.index=Z}function x(){const L=l.newAttributes;for(let F=0,G=L.length;F<G;F++)L[F]=0}function b(L){R(L,0)}function R(L,F){const G=l.newAttributes,Z=l.enabledAttributes,K=l.attributeDivisors;G[L]=1,Z[L]===0&&(s.enableVertexAttribArray(L),Z[L]=1),K[L]!==F&&((n.isWebGL2?s:e.get("ANGLE_instanced_arrays"))[n.isWebGL2?"vertexAttribDivisor":"vertexAttribDivisorANGLE"](L,F),K[L]=F)}function T(){const L=l.newAttributes,F=l.enabledAttributes;for(let G=0,Z=F.length;G<Z;G++)F[G]!==L[G]&&(s.disableVertexAttribArray(G),F[G]=0)}function E(L,F,G,Z,K,J,Q){Q===!0?s.vertexAttribIPointer(L,F,G,K,J):s.vertexAttribPointer(L,F,G,Z,K,J)}function O(L,F,G,Z){if(n.isWebGL2===!1&&(L.isInstancedMesh||Z.isInstancedBufferGeometry)&&e.get("ANGLE_instanced_arrays")===null)return;x();const K=Z.attributes,J=G.getAttributes(),Q=F.defaultAttributeValues;for(const ne in J){const ce=J[ne];if(ce.location>=0){let X=K[ne];if(X===void 0&&(ne==="instanceMatrix"&&L.instanceMatrix&&(X=L.instanceMatrix),ne==="instanceColor"&&L.instanceColor&&(X=L.instanceColor)),X!==void 0){const ee=X.normalized,pe=X.itemSize,Se=t.get(X);if(Se===void 0)continue;const ve=Se.buffer,De=Se.type,Ie=Se.bytesPerElement,we=n.isWebGL2===!0&&(De===s.INT||De===s.UNSIGNED_INT||X.gpuType===Uc);if(X.isInterleavedBufferAttribute){const ze=X.data,D=ze.stride,ue=X.offset;if(ze.isInstancedInterleavedBuffer){for(let $=0;$<ce.locationSize;$++)R(ce.location+$,ze.meshPerAttribute);L.isInstancedMesh!==!0&&Z._maxInstanceCount===void 0&&(Z._maxInstanceCount=ze.meshPerAttribute*ze.count)}else for(let $=0;$<ce.locationSize;$++)b(ce.location+$);s.bindBuffer(s.ARRAY_BUFFER,ve);for(let $=0;$<ce.locationSize;$++)E(ce.location+$,pe/ce.locationSize,De,ee,D*Ie,(ue+pe/ce.locationSize*$)*Ie,we)}else{if(X.isInstancedBufferAttribute){for(let ze=0;ze<ce.locationSize;ze++)R(ce.location+ze,X.meshPerAttribute);L.isInstancedMesh!==!0&&Z._maxInstanceCount===void 0&&(Z._maxInstanceCount=X.meshPerAttribute*X.count)}else for(let ze=0;ze<ce.locationSize;ze++)b(ce.location+ze);s.bindBuffer(s.ARRAY_BUFFER,ve);for(let ze=0;ze<ce.locationSize;ze++)E(ce.location+ze,pe/ce.locationSize,De,ee,pe*Ie,pe/ce.locationSize*ze*Ie,we)}}else if(Q!==void 0){const ee=Q[ne];if(ee!==void 0)switch(ee.length){case 2:s.vertexAttrib2fv(ce.location,ee);break;case 3:s.vertexAttrib3fv(ce.location,ee);break;case 4:s.vertexAttrib4fv(ce.location,ee);break;default:s.vertexAttrib1fv(ce.location,ee)}}}}T()}function M(){B();for(const L in a){const F=a[L];for(const G in F){const Z=F[G];for(const K in Z)g(Z[K].object),delete Z[K];delete F[G]}delete a[L]}}function w(L){if(a[L.id]===void 0)return;const F=a[L.id];for(const G in F){const Z=F[G];for(const K in Z)g(Z[K].object),delete Z[K];delete F[G]}delete a[L.id]}function N(L){for(const F in a){const G=a[F];if(G[L.id]===void 0)continue;const Z=G[L.id];for(const K in Z)g(Z[K].object),delete Z[K];delete G[L.id]}}function B(){q(),h=!0,l!==c&&(l=c,d(l.object))}function q(){c.geometry=null,c.program=null,c.wireframe=!1}return{setup:u,reset:B,resetDefaultState:q,dispose:M,releaseStatesOfGeometry:w,releaseStatesOfProgram:N,initAttributes:x,enableAttribute:b,disableUnusedAttributes:T}}function Bf(s,e,t,n){const i=n.isWebGL2;let r;function o(h){r=h}function a(h,u){s.drawArrays(r,h,u),t.update(u,r,1)}function c(h,u,f){if(f===0)return;let d,g;if(i)d=s,g="drawArraysInstanced";else if(d=e.get("ANGLE_instanced_arrays"),g="drawArraysInstancedANGLE",d===null){console.error("THREE.WebGLBufferRenderer: using THREE.InstancedBufferGeometry but hardware does not support extension ANGLE_instanced_arrays.");return}d[g](r,h,u,f),t.update(u,r,f)}function l(h,u,f){if(f===0)return;const d=e.get("WEBGL_multi_draw");if(d===null)for(let g=0;g<f;g++)this.render(h[g],u[g]);else{d.multiDrawArraysWEBGL(r,h,0,u,0,f);let g=0;for(let v=0;v<f;v++)g+=u[v];t.update(g,r,1)}}this.setMode=o,this.render=a,this.renderInstances=c,this.renderMultiDraw=l}function Gf(s,e,t){let n;function i(){if(n!==void 0)return n;if(e.has("EXT_texture_filter_anisotropic")===!0){const E=e.get("EXT_texture_filter_anisotropic");n=s.getParameter(E.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else n=0;return n}function r(E){if(E==="highp"){if(s.getShaderPrecisionFormat(s.VERTEX_SHADER,s.HIGH_FLOAT).precision>0&&s.getShaderPrecisionFormat(s.FRAGMENT_SHADER,s.HIGH_FLOAT).precision>0)return"highp";E="mediump"}return E==="mediump"&&s.getShaderPrecisionFormat(s.VERTEX_SHADER,s.MEDIUM_FLOAT).precision>0&&s.getShaderPrecisionFormat(s.FRAGMENT_SHADER,s.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}const o=typeof WebGL2RenderingContext<"u"&&s.constructor.name==="WebGL2RenderingContext";let a=t.precision!==void 0?t.precision:"highp";const c=r(a);c!==a&&(console.warn("THREE.WebGLRenderer:",a,"not supported, using",c,"instead."),a=c);const l=o||e.has("WEBGL_draw_buffers"),h=t.logarithmicDepthBuffer===!0,u=s.getParameter(s.MAX_TEXTURE_IMAGE_UNITS),f=s.getParameter(s.MAX_VERTEX_TEXTURE_IMAGE_UNITS),d=s.getParameter(s.MAX_TEXTURE_SIZE),g=s.getParameter(s.MAX_CUBE_MAP_TEXTURE_SIZE),v=s.getParameter(s.MAX_VERTEX_ATTRIBS),m=s.getParameter(s.MAX_VERTEX_UNIFORM_VECTORS),p=s.getParameter(s.MAX_VARYING_VECTORS),_=s.getParameter(s.MAX_FRAGMENT_UNIFORM_VECTORS),x=f>0,b=o||e.has("OES_texture_float"),R=x&&b,T=o?s.getParameter(s.MAX_SAMPLES):0;return{isWebGL2:o,drawBuffers:l,getMaxAnisotropy:i,getMaxPrecision:r,precision:a,logarithmicDepthBuffer:h,maxTextures:u,maxVertexTextures:f,maxTextureSize:d,maxCubemapSize:g,maxAttributes:v,maxVertexUniforms:m,maxVaryings:p,maxFragmentUniforms:_,vertexTextures:x,floatFragmentTextures:b,floatVertexTextures:R,maxSamples:T}}function kf(s){const e=this;let t=null,n=0,i=!1,r=!1;const o=new on,a=new Ye,c={value:null,needsUpdate:!1};this.uniform=c,this.numPlanes=0,this.numIntersection=0,this.init=function(u,f){const d=u.length!==0||f||n!==0||i;return i=f,n=u.length,d},this.beginShadows=function(){r=!0,h(null)},this.endShadows=function(){r=!1},this.setGlobalState=function(u,f){t=h(u,f,0)},this.setState=function(u,f,d){const g=u.clippingPlanes,v=u.clipIntersection,m=u.clipShadows,p=s.get(u);if(!i||g===null||g.length===0||r&&!m)r?h(null):l();else{const _=r?0:n,x=_*4;let b=p.clippingState||null;c.value=b,b=h(g,f,x,d);for(let R=0;R!==x;++R)b[R]=t[R];p.clippingState=b,this.numIntersection=v?this.numPlanes:0,this.numPlanes+=_}};function l(){c.value!==t&&(c.value=t,c.needsUpdate=n>0),e.numPlanes=n,e.numIntersection=0}function h(u,f,d,g){const v=u!==null?u.length:0;let m=null;if(v!==0){if(m=c.value,g!==!0||m===null){const p=d+v*4,_=f.matrixWorldInverse;a.getNormalMatrix(_),(m===null||m.length<p)&&(m=new Float32Array(p));for(let x=0,b=d;x!==v;++x,b+=4)o.copy(u[x]).applyMatrix4(_,a),o.normal.toArray(m,b),m[b+3]=o.constant}c.value=m,c.needsUpdate=!0}return e.numPlanes=v,e.numIntersection=0,m}}function Hf(s){let e=new WeakMap;function t(o,a){return a===ho?o.mapping=Ni:a===uo&&(o.mapping=Ui),o}function n(o){if(o&&o.isTexture){const a=o.mapping;if(a===ho||a===uo)if(e.has(o)){const c=e.get(o).texture;return t(c,o.mapping)}else{const c=o.image;if(c&&c.height>0){const l=new Qh(c.height/2);return l.fromEquirectangularTexture(s,o),e.set(o,l),o.addEventListener("dispose",i),t(l.texture,o.mapping)}else return null}}return o}function i(o){const a=o.target;a.removeEventListener("dispose",i);const c=e.get(a);c!==void 0&&(e.delete(a),c.dispose())}function r(){e=new WeakMap}return{get:n,dispose:r}}class It extends el{constructor(e=-1,t=1,n=1,i=-1,r=.1,o=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=t,this.top=n,this.bottom=i,this.near=r,this.far=o,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,t,n,i,r,o){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=i,this.view.width=r,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=(this.right-this.left)/(2*this.zoom),t=(this.top-this.bottom)/(2*this.zoom),n=(this.right+this.left)/2,i=(this.top+this.bottom)/2;let r=n-e,o=n+e,a=i+t,c=i-t;if(this.view!==null&&this.view.enabled){const l=(this.right-this.left)/this.view.fullWidth/this.zoom,h=(this.top-this.bottom)/this.view.fullHeight/this.zoom;r+=l*this.view.offsetX,o=r+l*this.view.width,a-=h*this.view.offsetY,c=a-h*this.view.height}this.projectionMatrix.makeOrthographic(r,o,a,c,this.near,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.zoom=this.zoom,t.object.left=this.left,t.object.right=this.right,t.object.top=this.top,t.object.bottom=this.bottom,t.object.near=this.near,t.object.far=this.far,this.view!==null&&(t.object.view=Object.assign({},this.view)),t}}const wi=4,ka=[.125,.215,.35,.446,.526,.582],qn=20,Vr=new It,Ha=new Fe;let Wr=null,Xr=0,jr=0;const Xn=(1+Math.sqrt(5))/2,xi=1/Xn,Va=[new y(1,1,1),new y(-1,1,1),new y(1,1,-1),new y(-1,1,-1),new y(0,Xn,xi),new y(0,Xn,-xi),new y(xi,0,Xn),new y(-xi,0,Xn),new y(Xn,xi,0),new y(-Xn,xi,0)];class Wa{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(e,t=0,n=.1,i=100){Wr=this._renderer.getRenderTarget(),Xr=this._renderer.getActiveCubeFace(),jr=this._renderer.getActiveMipmapLevel(),this._setSize(256);const r=this._allocateTargets();return r.depthBuffer=!0,this._sceneToCubeUV(e,n,i,r),t>0&&this._blur(r,0,0,t),this._applyPMREM(r),this._cleanup(r),r}fromEquirectangular(e,t=null){return this._fromTexture(e,t)}fromCubemap(e,t=null){return this._fromTexture(e,t)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=qa(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=ja(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodPlanes.length;e++)this._lodPlanes[e].dispose()}_cleanup(e){this._renderer.setRenderTarget(Wr,Xr,jr),e.scissorTest=!1,Ls(e,0,0,e.width,e.height)}_fromTexture(e,t){e.mapping===Ni||e.mapping===Ui?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),Wr=this._renderer.getRenderTarget(),Xr=this._renderer.getActiveCubeFace(),jr=this._renderer.getActiveMipmapLevel();const n=t||this._allocateTargets();return this._textureToCubeUV(e,n),this._applyPMREM(n),this._cleanup(n),n}_allocateTargets(){const e=3*Math.max(this._cubeSize,112),t=4*this._cubeSize,n={magFilter:Ht,minFilter:Ht,generateMipmaps:!1,type:ts,format:cn,colorSpace:En,depthBuffer:!1},i=Xa(e,t,n);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==t){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=Xa(e,t,n);const{_lodMax:r}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=Vf(r)),this._blurMaterial=Wf(r,e,t)}return i}_compileMaterial(e){const t=new Oe(this._lodPlanes[0],e);this._renderer.compile(t,Vr)}_sceneToCubeUV(e,t,n,i){const a=new Tt(90,1,t,n),c=[1,-1,1,1,1,1],l=[1,1,1,-1,-1,-1],h=this._renderer,u=h.autoClear,f=h.toneMapping;h.getClearColor(Ha),h.toneMapping=Nn,h.autoClear=!1;const d=new Ct({name:"PMREM.Background",side:kt,depthWrite:!1,depthTest:!1}),g=new Oe(new os,d);let v=!1;const m=e.background;m?m.isColor&&(d.color.copy(m),e.background=null,v=!0):(d.color.copy(Ha),v=!0);for(let p=0;p<6;p++){const _=p%3;_===0?(a.up.set(0,c[p],0),a.lookAt(l[p],0,0)):_===1?(a.up.set(0,0,c[p]),a.lookAt(0,l[p],0)):(a.up.set(0,c[p],0),a.lookAt(0,0,l[p]));const x=this._cubeSize;Ls(i,_*x,p>2?x:0,x,x),h.setRenderTarget(i),v&&h.render(g,a),h.render(e,a)}g.geometry.dispose(),g.material.dispose(),h.toneMapping=f,h.autoClear=u,e.background=m}_textureToCubeUV(e,t){const n=this._renderer,i=e.mapping===Ni||e.mapping===Ui;i?(this._cubemapMaterial===null&&(this._cubemapMaterial=qa()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=ja());const r=i?this._cubemapMaterial:this._equirectMaterial,o=new Oe(this._lodPlanes[0],r),a=r.uniforms;a.envMap.value=e;const c=this._cubeSize;Ls(t,0,0,3*c,2*c),n.setRenderTarget(t),n.render(o,Vr)}_applyPMREM(e){const t=this._renderer,n=t.autoClear;t.autoClear=!1;for(let i=1;i<this._lodPlanes.length;i++){const r=Math.sqrt(this._sigmas[i]*this._sigmas[i]-this._sigmas[i-1]*this._sigmas[i-1]),o=Va[(i-1)%Va.length];this._blur(e,i-1,i,r,o)}t.autoClear=n}_blur(e,t,n,i,r){const o=this._pingPongRenderTarget;this._halfBlur(e,o,t,n,i,"latitudinal",r),this._halfBlur(o,e,n,n,i,"longitudinal",r)}_halfBlur(e,t,n,i,r,o,a){const c=this._renderer,l=this._blurMaterial;o!=="latitudinal"&&o!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");const h=3,u=new Oe(this._lodPlanes[i],l),f=l.uniforms,d=this._sizeLods[n]-1,g=isFinite(r)?Math.PI/(2*d):2*Math.PI/(2*qn-1),v=r/g,m=isFinite(r)?1+Math.floor(h*v):qn;m>qn&&console.warn(`sigmaRadians, ${r}, is too large and will clip, as it requested ${m} samples when the maximum is set to ${qn}`);const p=[];let _=0;for(let E=0;E<qn;++E){const O=E/v,M=Math.exp(-O*O/2);p.push(M),E===0?_+=M:E<m&&(_+=2*M)}for(let E=0;E<p.length;E++)p[E]=p[E]/_;f.envMap.value=e.texture,f.samples.value=m,f.weights.value=p,f.latitudinal.value=o==="latitudinal",a&&(f.poleAxis.value=a);const{_lodMax:x}=this;f.dTheta.value=g,f.mipInt.value=x-n;const b=this._sizeLods[i],R=3*b*(i>x-wi?i-x+wi:0),T=4*(this._cubeSize-b);Ls(t,R,T,3*b,2*b),c.setRenderTarget(t),c.render(u,Vr)}}function Vf(s){const e=[],t=[],n=[];let i=s;const r=s-wi+1+ka.length;for(let o=0;o<r;o++){const a=Math.pow(2,i);t.push(a);let c=1/a;o>s-wi?c=ka[o-s+wi-1]:o===0&&(c=0),n.push(c);const l=1/(a-2),h=-l,u=1+l,f=[h,h,u,h,u,u,h,h,u,u,h,u],d=6,g=6,v=3,m=2,p=1,_=new Float32Array(v*g*d),x=new Float32Array(m*g*d),b=new Float32Array(p*g*d);for(let T=0;T<d;T++){const E=T%3*2/3-1,O=T>2?0:-1,M=[E,O,0,E+2/3,O,0,E+2/3,O+1,0,E,O,0,E+2/3,O+1,0,E,O+1,0];_.set(M,v*g*T),x.set(f,m*g*T);const w=[T,T,T,T,T,T];b.set(w,p*g*T)}const R=new it;R.setAttribute("position",new Nt(_,v)),R.setAttribute("uv",new Nt(x,m)),R.setAttribute("faceIndex",new Nt(b,p)),e.push(R),i>wi&&i--}return{lodPlanes:e,sizeLods:t,sigmas:n}}function Xa(s,e,t){const n=new Jn(s,e,t);return n.texture.mapping=sr,n.texture.name="PMREM.cubeUv",n.scissorTest=!0,n}function Ls(s,e,t,n,i){s.viewport.set(e,t,n,i),s.scissor.set(e,t,n,i)}function Wf(s,e,t){const n=new Float32Array(qn),i=new y(0,1,0);return new zn({name:"SphericalGaussianBlur",defines:{n:qn,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/t,CUBEUV_MAX_MIP:`${s}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:n},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:i}},vertexShader:Ro(),fragmentShader:`

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
		`,blending:In,depthTest:!1,depthWrite:!1})}function ja(){return new zn({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:Ro(),fragmentShader:`

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
		`,blending:In,depthTest:!1,depthWrite:!1})}function qa(){return new zn({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:Ro(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:In,depthTest:!1,depthWrite:!1})}function Ro(){return`

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
	`}function Xf(s){let e=new WeakMap,t=null;function n(a){if(a&&a.isTexture){const c=a.mapping,l=c===ho||c===uo,h=c===Ni||c===Ui;if(l||h)if(a.isRenderTargetTexture&&a.needsPMREMUpdate===!0){a.needsPMREMUpdate=!1;let u=e.get(a);return t===null&&(t=new Wa(s)),u=l?t.fromEquirectangular(a,u):t.fromCubemap(a,u),e.set(a,u),u.texture}else{if(e.has(a))return e.get(a).texture;{const u=a.image;if(l&&u&&u.height>0||h&&u&&i(u)){t===null&&(t=new Wa(s));const f=l?t.fromEquirectangular(a):t.fromCubemap(a);return e.set(a,f),a.addEventListener("dispose",r),f.texture}else return null}}}return a}function i(a){let c=0;const l=6;for(let h=0;h<l;h++)a[h]!==void 0&&c++;return c===l}function r(a){const c=a.target;c.removeEventListener("dispose",r);const l=e.get(c);l!==void 0&&(e.delete(c),l.dispose())}function o(){e=new WeakMap,t!==null&&(t.dispose(),t=null)}return{get:n,dispose:o}}function jf(s){const e={};function t(n){if(e[n]!==void 0)return e[n];let i;switch(n){case"WEBGL_depth_texture":i=s.getExtension("WEBGL_depth_texture")||s.getExtension("MOZ_WEBGL_depth_texture")||s.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":i=s.getExtension("EXT_texture_filter_anisotropic")||s.getExtension("MOZ_EXT_texture_filter_anisotropic")||s.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":i=s.getExtension("WEBGL_compressed_texture_s3tc")||s.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||s.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":i=s.getExtension("WEBGL_compressed_texture_pvrtc")||s.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:i=s.getExtension(n)}return e[n]=i,i}return{has:function(n){return t(n)!==null},init:function(n){n.isWebGL2?(t("EXT_color_buffer_float"),t("WEBGL_clip_cull_distance")):(t("WEBGL_depth_texture"),t("OES_texture_float"),t("OES_texture_half_float"),t("OES_texture_half_float_linear"),t("OES_standard_derivatives"),t("OES_element_index_uint"),t("OES_vertex_array_object"),t("ANGLE_instanced_arrays")),t("OES_texture_float_linear"),t("EXT_color_buffer_half_float"),t("WEBGL_multisampled_render_to_texture")},get:function(n){const i=t(n);return i===null&&console.warn("THREE.WebGLRenderer: "+n+" extension not supported."),i}}}function qf(s,e,t,n){const i={},r=new WeakMap;function o(u){const f=u.target;f.index!==null&&e.remove(f.index);for(const g in f.attributes)e.remove(f.attributes[g]);for(const g in f.morphAttributes){const v=f.morphAttributes[g];for(let m=0,p=v.length;m<p;m++)e.remove(v[m])}f.removeEventListener("dispose",o),delete i[f.id];const d=r.get(f);d&&(e.remove(d),r.delete(f)),n.releaseStatesOfGeometry(f),f.isInstancedBufferGeometry===!0&&delete f._maxInstanceCount,t.memory.geometries--}function a(u,f){return i[f.id]===!0||(f.addEventListener("dispose",o),i[f.id]=!0,t.memory.geometries++),f}function c(u){const f=u.attributes;for(const g in f)e.update(f[g],s.ARRAY_BUFFER);const d=u.morphAttributes;for(const g in d){const v=d[g];for(let m=0,p=v.length;m<p;m++)e.update(v[m],s.ARRAY_BUFFER)}}function l(u){const f=[],d=u.index,g=u.attributes.position;let v=0;if(d!==null){const _=d.array;v=d.version;for(let x=0,b=_.length;x<b;x+=3){const R=_[x+0],T=_[x+1],E=_[x+2];f.push(R,T,T,E,E,R)}}else if(g!==void 0){const _=g.array;v=g.version;for(let x=0,b=_.length/3-1;x<b;x+=3){const R=x+0,T=x+1,E=x+2;f.push(R,T,T,E,E,R)}}else return;const m=new(jc(f)?Jc:Kc)(f,1);m.version=v;const p=r.get(u);p&&e.remove(p),r.set(u,m)}function h(u){const f=r.get(u);if(f){const d=u.index;d!==null&&f.version<d.version&&l(u)}else l(u);return r.get(u)}return{get:a,update:c,getWireframeAttribute:h}}function Yf(s,e,t,n){const i=n.isWebGL2;let r;function o(d){r=d}let a,c;function l(d){a=d.type,c=d.bytesPerElement}function h(d,g){s.drawElements(r,g,a,d*c),t.update(g,r,1)}function u(d,g,v){if(v===0)return;let m,p;if(i)m=s,p="drawElementsInstanced";else if(m=e.get("ANGLE_instanced_arrays"),p="drawElementsInstancedANGLE",m===null){console.error("THREE.WebGLIndexedBufferRenderer: using THREE.InstancedBufferGeometry but hardware does not support extension ANGLE_instanced_arrays.");return}m[p](r,g,a,d*c,v),t.update(g,r,v)}function f(d,g,v){if(v===0)return;const m=e.get("WEBGL_multi_draw");if(m===null)for(let p=0;p<v;p++)this.render(d[p]/c,g[p]);else{m.multiDrawElementsWEBGL(r,g,0,a,d,0,v);let p=0;for(let _=0;_<v;_++)p+=g[_];t.update(p,r,1)}}this.setMode=o,this.setIndex=l,this.render=h,this.renderInstances=u,this.renderMultiDraw=f}function $f(s){const e={geometries:0,textures:0},t={frame:0,calls:0,triangles:0,points:0,lines:0};function n(r,o,a){switch(t.calls++,o){case s.TRIANGLES:t.triangles+=a*(r/3);break;case s.LINES:t.lines+=a*(r/2);break;case s.LINE_STRIP:t.lines+=a*(r-1);break;case s.LINE_LOOP:t.lines+=a*r;break;case s.POINTS:t.points+=a*r;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",o);break}}function i(){t.calls=0,t.triangles=0,t.points=0,t.lines=0}return{memory:e,render:t,programs:null,autoReset:!0,reset:i,update:n}}function Zf(s,e){return s[0]-e[0]}function Kf(s,e){return Math.abs(e[1])-Math.abs(s[1])}function Jf(s,e,t){const n={},i=new Float32Array(8),r=new WeakMap,o=new Et,a=[];for(let l=0;l<8;l++)a[l]=[l,0];function c(l,h,u){const f=l.morphTargetInfluences;if(e.isWebGL2===!0){const g=h.morphAttributes.position||h.morphAttributes.normal||h.morphAttributes.color,v=g!==void 0?g.length:0;let m=r.get(h);if(m===void 0||m.count!==v){let F=function(){q.dispose(),r.delete(h),h.removeEventListener("dispose",F)};var d=F;m!==void 0&&m.texture.dispose();const x=h.morphAttributes.position!==void 0,b=h.morphAttributes.normal!==void 0,R=h.morphAttributes.color!==void 0,T=h.morphAttributes.position||[],E=h.morphAttributes.normal||[],O=h.morphAttributes.color||[];let M=0;x===!0&&(M=1),b===!0&&(M=2),R===!0&&(M=3);let w=h.attributes.position.count*M,N=1;w>e.maxTextureSize&&(N=Math.ceil(w/e.maxTextureSize),w=e.maxTextureSize);const B=new Float32Array(w*N*4*v),q=new $c(B,w,N,v);q.type=Dn,q.needsUpdate=!0;const L=M*4;for(let G=0;G<v;G++){const Z=T[G],K=E[G],J=O[G],Q=w*N*4*G;for(let ne=0;ne<Z.count;ne++){const ce=ne*L;x===!0&&(o.fromBufferAttribute(Z,ne),B[Q+ce+0]=o.x,B[Q+ce+1]=o.y,B[Q+ce+2]=o.z,B[Q+ce+3]=0),b===!0&&(o.fromBufferAttribute(K,ne),B[Q+ce+4]=o.x,B[Q+ce+5]=o.y,B[Q+ce+6]=o.z,B[Q+ce+7]=0),R===!0&&(o.fromBufferAttribute(J,ne),B[Q+ce+8]=o.x,B[Q+ce+9]=o.y,B[Q+ce+10]=o.z,B[Q+ce+11]=J.itemSize===4?o.w:1)}}m={count:v,texture:q,size:new j(w,N)},r.set(h,m),h.addEventListener("dispose",F)}let p=0;for(let x=0;x<f.length;x++)p+=f[x];const _=h.morphTargetsRelative?1:1-p;u.getUniforms().setValue(s,"morphTargetBaseInfluence",_),u.getUniforms().setValue(s,"morphTargetInfluences",f),u.getUniforms().setValue(s,"morphTargetsTexture",m.texture,t),u.getUniforms().setValue(s,"morphTargetsTextureSize",m.size)}else{const g=f===void 0?0:f.length;let v=n[h.id];if(v===void 0||v.length!==g){v=[];for(let b=0;b<g;b++)v[b]=[b,0];n[h.id]=v}for(let b=0;b<g;b++){const R=v[b];R[0]=b,R[1]=f[b]}v.sort(Kf);for(let b=0;b<8;b++)b<g&&v[b][1]?(a[b][0]=v[b][0],a[b][1]=v[b][1]):(a[b][0]=Number.MAX_SAFE_INTEGER,a[b][1]=0);a.sort(Zf);const m=h.morphAttributes.position,p=h.morphAttributes.normal;let _=0;for(let b=0;b<8;b++){const R=a[b],T=R[0],E=R[1];T!==Number.MAX_SAFE_INTEGER&&E?(m&&h.getAttribute("morphTarget"+b)!==m[T]&&h.setAttribute("morphTarget"+b,m[T]),p&&h.getAttribute("morphNormal"+b)!==p[T]&&h.setAttribute("morphNormal"+b,p[T]),i[b]=E,_+=E):(m&&h.hasAttribute("morphTarget"+b)===!0&&h.deleteAttribute("morphTarget"+b),p&&h.hasAttribute("morphNormal"+b)===!0&&h.deleteAttribute("morphNormal"+b),i[b]=0)}const x=h.morphTargetsRelative?1:1-_;u.getUniforms().setValue(s,"morphTargetBaseInfluence",x),u.getUniforms().setValue(s,"morphTargetInfluences",i)}}return{update:c}}function Qf(s,e,t,n){let i=new WeakMap;function r(c){const l=n.render.frame,h=c.geometry,u=e.get(c,h);if(i.get(u)!==l&&(e.update(u),i.set(u,l)),c.isInstancedMesh&&(c.hasEventListener("dispose",a)===!1&&c.addEventListener("dispose",a),i.get(c)!==l&&(t.update(c.instanceMatrix,s.ARRAY_BUFFER),c.instanceColor!==null&&t.update(c.instanceColor,s.ARRAY_BUFFER),i.set(c,l))),c.isSkinnedMesh){const f=c.skeleton;i.get(f)!==l&&(f.update(),i.set(f,l))}return u}function o(){i=new WeakMap}function a(c){const l=c.target;l.removeEventListener("dispose",a),t.remove(l.instanceMatrix),l.instanceColor!==null&&t.remove(l.instanceColor)}return{update:r,dispose:o}}class il extends Ft{constructor(e,t,n,i,r,o,a,c,l,h){if(h=h!==void 0?h:$n,h!==$n&&h!==Fi)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");n===void 0&&h===$n&&(n=Ln),n===void 0&&h===Fi&&(n=Yn),super(null,i,r,o,a,c,h,n,l),this.isDepthTexture=!0,this.image={width:e,height:t},this.magFilter=a!==void 0?a:Gt,this.minFilter=c!==void 0?c:Gt,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.compareFunction=e.compareFunction,this}toJSON(e){const t=super.toJSON(e);return this.compareFunction!==null&&(t.compareFunction=this.compareFunction),t}}const sl=new Ft,rl=new il(1,1);rl.compareFunction=Xc;const ol=new $c,al=new Uh,cl=new tl,Ya=[],$a=[],Za=new Float32Array(16),Ka=new Float32Array(9),Ja=new Float32Array(4);function Gi(s,e,t){const n=s[0];if(n<=0||n>0)return s;const i=e*t;let r=Ya[i];if(r===void 0&&(r=new Float32Array(i),Ya[i]=r),e!==0){n.toArray(r,0);for(let o=1,a=0;o!==e;++o)a+=t,s[o].toArray(r,a)}return r}function xt(s,e){if(s.length!==e.length)return!1;for(let t=0,n=s.length;t<n;t++)if(s[t]!==e[t])return!1;return!0}function yt(s,e){for(let t=0,n=e.length;t<n;t++)s[t]=e[t]}function lr(s,e){let t=$a[e];t===void 0&&(t=new Int32Array(e),$a[e]=t);for(let n=0;n!==e;++n)t[n]=s.allocateTextureUnit();return t}function ep(s,e){const t=this.cache;t[0]!==e&&(s.uniform1f(this.addr,e),t[0]=e)}function tp(s,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(s.uniform2f(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(xt(t,e))return;s.uniform2fv(this.addr,e),yt(t,e)}}function np(s,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(s.uniform3f(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else if(e.r!==void 0)(t[0]!==e.r||t[1]!==e.g||t[2]!==e.b)&&(s.uniform3f(this.addr,e.r,e.g,e.b),t[0]=e.r,t[1]=e.g,t[2]=e.b);else{if(xt(t,e))return;s.uniform3fv(this.addr,e),yt(t,e)}}function ip(s,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(s.uniform4f(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(xt(t,e))return;s.uniform4fv(this.addr,e),yt(t,e)}}function sp(s,e){const t=this.cache,n=e.elements;if(n===void 0){if(xt(t,e))return;s.uniformMatrix2fv(this.addr,!1,e),yt(t,e)}else{if(xt(t,n))return;Ja.set(n),s.uniformMatrix2fv(this.addr,!1,Ja),yt(t,n)}}function rp(s,e){const t=this.cache,n=e.elements;if(n===void 0){if(xt(t,e))return;s.uniformMatrix3fv(this.addr,!1,e),yt(t,e)}else{if(xt(t,n))return;Ka.set(n),s.uniformMatrix3fv(this.addr,!1,Ka),yt(t,n)}}function op(s,e){const t=this.cache,n=e.elements;if(n===void 0){if(xt(t,e))return;s.uniformMatrix4fv(this.addr,!1,e),yt(t,e)}else{if(xt(t,n))return;Za.set(n),s.uniformMatrix4fv(this.addr,!1,Za),yt(t,n)}}function ap(s,e){const t=this.cache;t[0]!==e&&(s.uniform1i(this.addr,e),t[0]=e)}function cp(s,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(s.uniform2i(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(xt(t,e))return;s.uniform2iv(this.addr,e),yt(t,e)}}function lp(s,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(s.uniform3i(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(xt(t,e))return;s.uniform3iv(this.addr,e),yt(t,e)}}function hp(s,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(s.uniform4i(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(xt(t,e))return;s.uniform4iv(this.addr,e),yt(t,e)}}function up(s,e){const t=this.cache;t[0]!==e&&(s.uniform1ui(this.addr,e),t[0]=e)}function dp(s,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(s.uniform2ui(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(xt(t,e))return;s.uniform2uiv(this.addr,e),yt(t,e)}}function fp(s,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(s.uniform3ui(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(xt(t,e))return;s.uniform3uiv(this.addr,e),yt(t,e)}}function pp(s,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(s.uniform4ui(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(xt(t,e))return;s.uniform4uiv(this.addr,e),yt(t,e)}}function mp(s,e,t){const n=this.cache,i=t.allocateTextureUnit();n[0]!==i&&(s.uniform1i(this.addr,i),n[0]=i);const r=this.type===s.SAMPLER_2D_SHADOW?rl:sl;t.setTexture2D(e||r,i)}function gp(s,e,t){const n=this.cache,i=t.allocateTextureUnit();n[0]!==i&&(s.uniform1i(this.addr,i),n[0]=i),t.setTexture3D(e||al,i)}function vp(s,e,t){const n=this.cache,i=t.allocateTextureUnit();n[0]!==i&&(s.uniform1i(this.addr,i),n[0]=i),t.setTextureCube(e||cl,i)}function _p(s,e,t){const n=this.cache,i=t.allocateTextureUnit();n[0]!==i&&(s.uniform1i(this.addr,i),n[0]=i),t.setTexture2DArray(e||ol,i)}function xp(s){switch(s){case 5126:return ep;case 35664:return tp;case 35665:return np;case 35666:return ip;case 35674:return sp;case 35675:return rp;case 35676:return op;case 5124:case 35670:return ap;case 35667:case 35671:return cp;case 35668:case 35672:return lp;case 35669:case 35673:return hp;case 5125:return up;case 36294:return dp;case 36295:return fp;case 36296:return pp;case 35678:case 36198:case 36298:case 36306:case 35682:return mp;case 35679:case 36299:case 36307:return gp;case 35680:case 36300:case 36308:case 36293:return vp;case 36289:case 36303:case 36311:case 36292:return _p}}function yp(s,e){s.uniform1fv(this.addr,e)}function bp(s,e){const t=Gi(e,this.size,2);s.uniform2fv(this.addr,t)}function Mp(s,e){const t=Gi(e,this.size,3);s.uniform3fv(this.addr,t)}function Sp(s,e){const t=Gi(e,this.size,4);s.uniform4fv(this.addr,t)}function Ep(s,e){const t=Gi(e,this.size,4);s.uniformMatrix2fv(this.addr,!1,t)}function wp(s,e){const t=Gi(e,this.size,9);s.uniformMatrix3fv(this.addr,!1,t)}function Tp(s,e){const t=Gi(e,this.size,16);s.uniformMatrix4fv(this.addr,!1,t)}function Ap(s,e){s.uniform1iv(this.addr,e)}function Cp(s,e){s.uniform2iv(this.addr,e)}function Rp(s,e){s.uniform3iv(this.addr,e)}function Pp(s,e){s.uniform4iv(this.addr,e)}function Lp(s,e){s.uniform1uiv(this.addr,e)}function Dp(s,e){s.uniform2uiv(this.addr,e)}function Op(s,e){s.uniform3uiv(this.addr,e)}function Ip(s,e){s.uniform4uiv(this.addr,e)}function Np(s,e,t){const n=this.cache,i=e.length,r=lr(t,i);xt(n,r)||(s.uniform1iv(this.addr,r),yt(n,r));for(let o=0;o!==i;++o)t.setTexture2D(e[o]||sl,r[o])}function Up(s,e,t){const n=this.cache,i=e.length,r=lr(t,i);xt(n,r)||(s.uniform1iv(this.addr,r),yt(n,r));for(let o=0;o!==i;++o)t.setTexture3D(e[o]||al,r[o])}function Fp(s,e,t){const n=this.cache,i=e.length,r=lr(t,i);xt(n,r)||(s.uniform1iv(this.addr,r),yt(n,r));for(let o=0;o!==i;++o)t.setTextureCube(e[o]||cl,r[o])}function zp(s,e,t){const n=this.cache,i=e.length,r=lr(t,i);xt(n,r)||(s.uniform1iv(this.addr,r),yt(n,r));for(let o=0;o!==i;++o)t.setTexture2DArray(e[o]||ol,r[o])}function Bp(s){switch(s){case 5126:return yp;case 35664:return bp;case 35665:return Mp;case 35666:return Sp;case 35674:return Ep;case 35675:return wp;case 35676:return Tp;case 5124:case 35670:return Ap;case 35667:case 35671:return Cp;case 35668:case 35672:return Rp;case 35669:case 35673:return Pp;case 5125:return Lp;case 36294:return Dp;case 36295:return Op;case 36296:return Ip;case 35678:case 36198:case 36298:case 36306:case 35682:return Np;case 35679:case 36299:case 36307:return Up;case 35680:case 36300:case 36308:case 36293:return Fp;case 36289:case 36303:case 36311:case 36292:return zp}}class Gp{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.type=t.type,this.setValue=xp(t.type)}}class kp{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.type=t.type,this.size=t.size,this.setValue=Bp(t.type)}}class Hp{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,t,n){const i=this.seq;for(let r=0,o=i.length;r!==o;++r){const a=i[r];a.setValue(e,t[a.id],n)}}}const qr=/(\w+)(\])?(\[|\.)?/g;function Qa(s,e){s.seq.push(e),s.map[e.id]=e}function Vp(s,e,t){const n=s.name,i=n.length;for(qr.lastIndex=0;;){const r=qr.exec(n),o=qr.lastIndex;let a=r[1];const c=r[2]==="]",l=r[3];if(c&&(a=a|0),l===void 0||l==="["&&o+2===i){Qa(t,l===void 0?new Gp(a,s,e):new kp(a,s,e));break}else{let u=t.map[a];u===void 0&&(u=new Hp(a),Qa(t,u)),t=u}}}class Xs{constructor(e,t){this.seq=[],this.map={};const n=e.getProgramParameter(t,e.ACTIVE_UNIFORMS);for(let i=0;i<n;++i){const r=e.getActiveUniform(t,i),o=e.getUniformLocation(t,r.name);Vp(r,o,this)}}setValue(e,t,n,i){const r=this.map[t];r!==void 0&&r.setValue(e,n,i)}setOptional(e,t,n){const i=t[n];i!==void 0&&this.setValue(e,n,i)}static upload(e,t,n,i){for(let r=0,o=t.length;r!==o;++r){const a=t[r],c=n[a.id];c.needsUpdate!==!1&&a.setValue(e,c.value,i)}}static seqWithValue(e,t){const n=[];for(let i=0,r=e.length;i!==r;++i){const o=e[i];o.id in t&&n.push(o)}return n}}function ec(s,e,t){const n=s.createShader(e);return s.shaderSource(n,t),s.compileShader(n),n}const Wp=37297;let Xp=0;function jp(s,e){const t=s.split(`
`),n=[],i=Math.max(e-6,0),r=Math.min(e+6,t.length);for(let o=i;o<r;o++){const a=o+1;n.push(`${a===e?">":" "} ${a}: ${t[o]}`)}return n.join(`
`)}function qp(s){const e=tt.getPrimaries(tt.workingColorSpace),t=tt.getPrimaries(s);let n;switch(e===t?n="":e===$s&&t===Ys?n="LinearDisplayP3ToLinearSRGB":e===Ys&&t===$s&&(n="LinearSRGBToLinearDisplayP3"),s){case En:case rr:return[n,"LinearTransferOETF"];case wt:case To:return[n,"sRGBTransferOETF"];default:return console.warn("THREE.WebGLProgram: Unsupported color space:",s),[n,"LinearTransferOETF"]}}function tc(s,e,t){const n=s.getShaderParameter(e,s.COMPILE_STATUS),i=s.getShaderInfoLog(e).trim();if(n&&i==="")return"";const r=/ERROR: 0:(\d+)/.exec(i);if(r){const o=parseInt(r[1]);return t.toUpperCase()+`

`+i+`

`+jp(s.getShaderSource(e),o)}else return i}function Yp(s,e){const t=qp(e);return`vec4 ${s}( vec4 value ) { return ${t[0]}( ${t[1]}( value ) ); }`}function $p(s,e){let t;switch(e){case sh:t="Linear";break;case rh:t="Reinhard";break;case oh:t="OptimizedCineon";break;case ah:t="ACESFilmic";break;case lh:t="AgX";break;case ch:t="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",e),t="Linear"}return"vec3 "+s+"( vec3 color ) { return "+t+"ToneMapping( color ); }"}function Zp(s){return[s.extensionDerivatives||s.envMapCubeUVHeight||s.bumpMap||s.normalMapTangentSpace||s.clearcoatNormalMap||s.flatShading||s.shaderID==="physical"?"#extension GL_OES_standard_derivatives : enable":"",(s.extensionFragDepth||s.logarithmicDepthBuffer)&&s.rendererExtensionFragDepth?"#extension GL_EXT_frag_depth : enable":"",s.extensionDrawBuffers&&s.rendererExtensionDrawBuffers?"#extension GL_EXT_draw_buffers : require":"",(s.extensionShaderTextureLOD||s.envMap||s.transmission)&&s.rendererExtensionShaderTextureLod?"#extension GL_EXT_shader_texture_lod : enable":""].filter(Ti).join(`
`)}function Kp(s){return[s.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":""].filter(Ti).join(`
`)}function Jp(s){const e=[];for(const t in s){const n=s[t];n!==!1&&e.push("#define "+t+" "+n)}return e.join(`
`)}function Qp(s,e){const t={},n=s.getProgramParameter(e,s.ACTIVE_ATTRIBUTES);for(let i=0;i<n;i++){const r=s.getActiveAttrib(e,i),o=r.name;let a=1;r.type===s.FLOAT_MAT2&&(a=2),r.type===s.FLOAT_MAT3&&(a=3),r.type===s.FLOAT_MAT4&&(a=4),t[o]={type:r.type,location:s.getAttribLocation(e,o),locationSize:a}}return t}function Ti(s){return s!==""}function nc(s,e){const t=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return s.replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,t).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function ic(s,e){return s.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}const em=/^[ \t]*#include +<([\w\d./]+)>/gm;function xo(s){return s.replace(em,nm)}const tm=new Map([["encodings_fragment","colorspace_fragment"],["encodings_pars_fragment","colorspace_pars_fragment"],["output_fragment","opaque_fragment"]]);function nm(s,e){let t=We[e];if(t===void 0){const n=tm.get(e);if(n!==void 0)t=We[n],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',e,n);else throw new Error("Can not resolve #include <"+e+">")}return xo(t)}const im=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function sc(s){return s.replace(im,sm)}function sm(s,e,t,n){let i="";for(let r=parseInt(e);r<parseInt(t);r++)i+=n.replace(/\[\s*i\s*\]/g,"[ "+r+" ]").replace(/UNROLLED_LOOP_INDEX/g,r);return i}function rc(s){let e="precision "+s.precision+` float;
precision `+s.precision+" int;";return s.precision==="highp"?e+=`
#define HIGH_PRECISION`:s.precision==="mediump"?e+=`
#define MEDIUM_PRECISION`:s.precision==="lowp"&&(e+=`
#define LOW_PRECISION`),e}function rm(s){let e="SHADOWMAP_TYPE_BASIC";return s.shadowMapType===Dc?e="SHADOWMAP_TYPE_PCF":s.shadowMapType===Oc?e="SHADOWMAP_TYPE_PCF_SOFT":s.shadowMapType===yn&&(e="SHADOWMAP_TYPE_VSM"),e}function om(s){let e="ENVMAP_TYPE_CUBE";if(s.envMap)switch(s.envMapMode){case Ni:case Ui:e="ENVMAP_TYPE_CUBE";break;case sr:e="ENVMAP_TYPE_CUBE_UV";break}return e}function am(s){let e="ENVMAP_MODE_REFLECTION";if(s.envMap)switch(s.envMapMode){case Ui:e="ENVMAP_MODE_REFRACTION";break}return e}function cm(s){let e="ENVMAP_BLENDING_NONE";if(s.envMap)switch(s.combine){case Ic:e="ENVMAP_BLENDING_MULTIPLY";break;case nh:e="ENVMAP_BLENDING_MIX";break;case ih:e="ENVMAP_BLENDING_ADD";break}return e}function lm(s){const e=s.envMapCubeUVHeight;if(e===null)return null;const t=Math.log2(e)-2,n=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,t),7*16)),texelHeight:n,maxMip:t}}function hm(s,e,t,n){const i=s.getContext(),r=t.defines;let o=t.vertexShader,a=t.fragmentShader;const c=rm(t),l=om(t),h=am(t),u=cm(t),f=lm(t),d=t.isWebGL2?"":Zp(t),g=Kp(t),v=Jp(r),m=i.createProgram();let p,_,x=t.glslVersion?"#version "+t.glslVersion+`
`:"";t.isRawShaderMaterial?(p=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,v].filter(Ti).join(`
`),p.length>0&&(p+=`
`),_=[d,"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,v].filter(Ti).join(`
`),_.length>0&&(_+=`
`)):(p=[rc(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,v,t.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",t.batching?"#define USE_BATCHING":"",t.instancing?"#define USE_INSTANCING":"",t.instancingColor?"#define USE_INSTANCING_COLOR":"",t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+h:"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.displacementMap?"#define USE_DISPLACEMENTMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.mapUv?"#define MAP_UV "+t.mapUv:"",t.alphaMapUv?"#define ALPHAMAP_UV "+t.alphaMapUv:"",t.lightMapUv?"#define LIGHTMAP_UV "+t.lightMapUv:"",t.aoMapUv?"#define AOMAP_UV "+t.aoMapUv:"",t.emissiveMapUv?"#define EMISSIVEMAP_UV "+t.emissiveMapUv:"",t.bumpMapUv?"#define BUMPMAP_UV "+t.bumpMapUv:"",t.normalMapUv?"#define NORMALMAP_UV "+t.normalMapUv:"",t.displacementMapUv?"#define DISPLACEMENTMAP_UV "+t.displacementMapUv:"",t.metalnessMapUv?"#define METALNESSMAP_UV "+t.metalnessMapUv:"",t.roughnessMapUv?"#define ROUGHNESSMAP_UV "+t.roughnessMapUv:"",t.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+t.anisotropyMapUv:"",t.clearcoatMapUv?"#define CLEARCOATMAP_UV "+t.clearcoatMapUv:"",t.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+t.clearcoatNormalMapUv:"",t.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+t.clearcoatRoughnessMapUv:"",t.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+t.iridescenceMapUv:"",t.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+t.iridescenceThicknessMapUv:"",t.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+t.sheenColorMapUv:"",t.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+t.sheenRoughnessMapUv:"",t.specularMapUv?"#define SPECULARMAP_UV "+t.specularMapUv:"",t.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+t.specularColorMapUv:"",t.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+t.specularIntensityMapUv:"",t.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+t.transmissionMapUv:"",t.thicknessMapUv?"#define THICKNESSMAP_UV "+t.thicknessMapUv:"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.flatShading?"#define FLAT_SHADED":"",t.skinning?"#define USE_SKINNING":"",t.morphTargets?"#define USE_MORPHTARGETS":"",t.morphNormals&&t.flatShading===!1?"#define USE_MORPHNORMALS":"",t.morphColors&&t.isWebGL2?"#define USE_MORPHCOLORS":"",t.morphTargetsCount>0&&t.isWebGL2?"#define MORPHTARGETS_TEXTURE":"",t.morphTargetsCount>0&&t.isWebGL2?"#define MORPHTARGETS_TEXTURE_STRIDE "+t.morphTextureStride:"",t.morphTargetsCount>0&&t.isWebGL2?"#define MORPHTARGETS_COUNT "+t.morphTargetsCount:"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+c:"",t.sizeAttenuation?"#define USE_SIZEATTENUATION":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.useLegacyLights?"#define LEGACY_LIGHTS":"",t.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",t.logarithmicDepthBuffer&&t.rendererExtensionFragDepth?"#define USE_LOGDEPTHBUF_EXT":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#if ( defined( USE_MORPHTARGETS ) && ! defined( MORPHTARGETS_TEXTURE ) )","	attribute vec3 morphTarget0;","	attribute vec3 morphTarget1;","	attribute vec3 morphTarget2;","	attribute vec3 morphTarget3;","	#ifdef USE_MORPHNORMALS","		attribute vec3 morphNormal0;","		attribute vec3 morphNormal1;","		attribute vec3 morphNormal2;","		attribute vec3 morphNormal3;","	#else","		attribute vec3 morphTarget4;","		attribute vec3 morphTarget5;","		attribute vec3 morphTarget6;","		attribute vec3 morphTarget7;","	#endif","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(Ti).join(`
`),_=[d,rc(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,v,t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.matcap?"#define USE_MATCAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+l:"",t.envMap?"#define "+h:"",t.envMap?"#define "+u:"",f?"#define CUBEUV_TEXEL_WIDTH "+f.texelWidth:"",f?"#define CUBEUV_TEXEL_HEIGHT "+f.texelHeight:"",f?"#define CUBEUV_MAX_MIP "+f.maxMip+".0":"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoat?"#define USE_CLEARCOAT":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.iridescence?"#define USE_IRIDESCENCE":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaTest?"#define USE_ALPHATEST":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.sheen?"#define USE_SHEEN":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors||t.instancingColor?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.gradientMap?"#define USE_GRADIENTMAP":"",t.flatShading?"#define FLAT_SHADED":"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+c:"",t.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.useLegacyLights?"#define LEGACY_LIGHTS":"",t.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",t.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",t.logarithmicDepthBuffer&&t.rendererExtensionFragDepth?"#define USE_LOGDEPTHBUF_EXT":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",t.toneMapping!==Nn?"#define TONE_MAPPING":"",t.toneMapping!==Nn?We.tonemapping_pars_fragment:"",t.toneMapping!==Nn?$p("toneMapping",t.toneMapping):"",t.dithering?"#define DITHERING":"",t.opaque?"#define OPAQUE":"",We.colorspace_pars_fragment,Yp("linearToOutputTexel",t.outputColorSpace),t.useDepthPacking?"#define DEPTH_PACKING "+t.depthPacking:"",`
`].filter(Ti).join(`
`)),o=xo(o),o=nc(o,t),o=ic(o,t),a=xo(a),a=nc(a,t),a=ic(a,t),o=sc(o),a=sc(a),t.isWebGL2&&t.isRawShaderMaterial!==!0&&(x=`#version 300 es
`,p=[g,"precision mediump sampler2DArray;","#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+p,_=["precision mediump sampler2DArray;","#define varying in",t.glslVersion===Sa?"":"layout(location = 0) out highp vec4 pc_fragColor;",t.glslVersion===Sa?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+_);const b=x+p+o,R=x+_+a,T=ec(i,i.VERTEX_SHADER,b),E=ec(i,i.FRAGMENT_SHADER,R);i.attachShader(m,T),i.attachShader(m,E),t.index0AttributeName!==void 0?i.bindAttribLocation(m,0,t.index0AttributeName):t.morphTargets===!0&&i.bindAttribLocation(m,0,"position"),i.linkProgram(m);function O(B){if(s.debug.checkShaderErrors){const q=i.getProgramInfoLog(m).trim(),L=i.getShaderInfoLog(T).trim(),F=i.getShaderInfoLog(E).trim();let G=!0,Z=!0;if(i.getProgramParameter(m,i.LINK_STATUS)===!1)if(G=!1,typeof s.debug.onShaderError=="function")s.debug.onShaderError(i,m,T,E);else{const K=tc(i,T,"vertex"),J=tc(i,E,"fragment");console.error("THREE.WebGLProgram: Shader Error "+i.getError()+" - VALIDATE_STATUS "+i.getProgramParameter(m,i.VALIDATE_STATUS)+`

Program Info Log: `+q+`
`+K+`
`+J)}else q!==""?console.warn("THREE.WebGLProgram: Program Info Log:",q):(L===""||F==="")&&(Z=!1);Z&&(B.diagnostics={runnable:G,programLog:q,vertexShader:{log:L,prefix:p},fragmentShader:{log:F,prefix:_}})}i.deleteShader(T),i.deleteShader(E),M=new Xs(i,m),w=Qp(i,m)}let M;this.getUniforms=function(){return M===void 0&&O(this),M};let w;this.getAttributes=function(){return w===void 0&&O(this),w};let N=t.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return N===!1&&(N=i.getProgramParameter(m,Wp)),N},this.destroy=function(){n.releaseStatesOfProgram(this),i.deleteProgram(m),this.program=void 0},this.type=t.shaderType,this.name=t.shaderName,this.id=Xp++,this.cacheKey=e,this.usedTimes=1,this.program=m,this.vertexShader=T,this.fragmentShader=E,this}let um=0;class dm{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e){const t=e.vertexShader,n=e.fragmentShader,i=this._getShaderStage(t),r=this._getShaderStage(n),o=this._getShaderCacheForMaterial(e);return o.has(i)===!1&&(o.add(i),i.usedTimes++),o.has(r)===!1&&(o.add(r),r.usedTimes++),this}remove(e){const t=this.materialCache.get(e);for(const n of t)n.usedTimes--,n.usedTimes===0&&this.shaderCache.delete(n.code);return this.materialCache.delete(e),this}getVertexShaderID(e){return this._getShaderStage(e.vertexShader).id}getFragmentShaderID(e){return this._getShaderStage(e.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){const t=this.materialCache;let n=t.get(e);return n===void 0&&(n=new Set,t.set(e,n)),n}_getShaderStage(e){const t=this.shaderCache;let n=t.get(e);return n===void 0&&(n=new fm(e),t.set(e,n)),n}}class fm{constructor(e){this.id=um++,this.code=e,this.usedTimes=0}}function pm(s,e,t,n,i,r,o){const a=new Ao,c=new dm,l=[],h=i.isWebGL2,u=i.logarithmicDepthBuffer,f=i.vertexTextures;let d=i.precision;const g={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function v(M){return M===0?"uv":`uv${M}`}function m(M,w,N,B,q){const L=B.fog,F=q.geometry,G=M.isMeshStandardMaterial?B.environment:null,Z=(M.isMeshStandardMaterial?t:e).get(M.envMap||G),K=Z&&Z.mapping===sr?Z.image.height:null,J=g[M.type];M.precision!==null&&(d=i.getMaxPrecision(M.precision),d!==M.precision&&console.warn("THREE.WebGLProgram.getParameters:",M.precision,"not supported, using",d,"instead."));const Q=F.morphAttributes.position||F.morphAttributes.normal||F.morphAttributes.color,ne=Q!==void 0?Q.length:0;let ce=0;F.morphAttributes.position!==void 0&&(ce=1),F.morphAttributes.normal!==void 0&&(ce=2),F.morphAttributes.color!==void 0&&(ce=3);let X,ee,pe,Se;if(J){const ft=hn[J];X=ft.vertexShader,ee=ft.fragmentShader}else X=M.vertexShader,ee=M.fragmentShader,c.update(M),pe=c.getVertexShaderID(M),Se=c.getFragmentShaderID(M);const ve=s.getRenderTarget(),De=q.isInstancedMesh===!0,Ie=q.isBatchedMesh===!0,we=!!M.map,ze=!!M.matcap,D=!!Z,ue=!!M.aoMap,$=!!M.lightMap,ae=!!M.bumpMap,Y=!!M.normalMap,Te=!!M.displacementMap,ge=!!M.emissiveMap,A=!!M.metalnessMap,S=!!M.roughnessMap,U=M.anisotropy>0,re=M.clearcoat>0,ie=M.iridescence>0,te=M.sheen>0,Ee=M.transmission>0,fe=U&&!!M.anisotropyMap,ye=re&&!!M.clearcoatMap,Pe=re&&!!M.clearcoatNormalMap,ke=re&&!!M.clearcoatRoughnessMap,se=ie&&!!M.iridescenceMap,Ke=ie&&!!M.iridescenceThicknessMap,Xe=te&&!!M.sheenColorMap,Be=te&&!!M.sheenRoughnessMap,Re=!!M.specularMap,_e=!!M.specularColorMap,P=!!M.specularIntensityMap,le=Ee&&!!M.transmissionMap,Ae=Ee&&!!M.thicknessMap,Me=!!M.gradientMap,oe=!!M.alphaMap,I=M.alphaTest>0,he=!!M.alphaHash,me=!!M.extensions,Ne=!!F.attributes.uv1,Le=!!F.attributes.uv2,$e=!!F.attributes.uv3;let Ze=Nn;return M.toneMapped&&(ve===null||ve.isXRRenderTarget===!0)&&(Ze=s.toneMapping),{isWebGL2:h,shaderID:J,shaderType:M.type,shaderName:M.name,vertexShader:X,fragmentShader:ee,defines:M.defines,customVertexShaderID:pe,customFragmentShaderID:Se,isRawShaderMaterial:M.isRawShaderMaterial===!0,glslVersion:M.glslVersion,precision:d,batching:Ie,instancing:De,instancingColor:De&&q.instanceColor!==null,supportsVertexTextures:f,outputColorSpace:ve===null?s.outputColorSpace:ve.isXRRenderTarget===!0?ve.texture.colorSpace:En,map:we,matcap:ze,envMap:D,envMapMode:D&&Z.mapping,envMapCubeUVHeight:K,aoMap:ue,lightMap:$,bumpMap:ae,normalMap:Y,displacementMap:f&&Te,emissiveMap:ge,normalMapObjectSpace:Y&&M.normalMapType===bh,normalMapTangentSpace:Y&&M.normalMapType===Wc,metalnessMap:A,roughnessMap:S,anisotropy:U,anisotropyMap:fe,clearcoat:re,clearcoatMap:ye,clearcoatNormalMap:Pe,clearcoatRoughnessMap:ke,iridescence:ie,iridescenceMap:se,iridescenceThicknessMap:Ke,sheen:te,sheenColorMap:Xe,sheenRoughnessMap:Be,specularMap:Re,specularColorMap:_e,specularIntensityMap:P,transmission:Ee,transmissionMap:le,thicknessMap:Ae,gradientMap:Me,opaque:M.transparent===!1&&M.blending===Ri,alphaMap:oe,alphaTest:I,alphaHash:he,combine:M.combine,mapUv:we&&v(M.map.channel),aoMapUv:ue&&v(M.aoMap.channel),lightMapUv:$&&v(M.lightMap.channel),bumpMapUv:ae&&v(M.bumpMap.channel),normalMapUv:Y&&v(M.normalMap.channel),displacementMapUv:Te&&v(M.displacementMap.channel),emissiveMapUv:ge&&v(M.emissiveMap.channel),metalnessMapUv:A&&v(M.metalnessMap.channel),roughnessMapUv:S&&v(M.roughnessMap.channel),anisotropyMapUv:fe&&v(M.anisotropyMap.channel),clearcoatMapUv:ye&&v(M.clearcoatMap.channel),clearcoatNormalMapUv:Pe&&v(M.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:ke&&v(M.clearcoatRoughnessMap.channel),iridescenceMapUv:se&&v(M.iridescenceMap.channel),iridescenceThicknessMapUv:Ke&&v(M.iridescenceThicknessMap.channel),sheenColorMapUv:Xe&&v(M.sheenColorMap.channel),sheenRoughnessMapUv:Be&&v(M.sheenRoughnessMap.channel),specularMapUv:Re&&v(M.specularMap.channel),specularColorMapUv:_e&&v(M.specularColorMap.channel),specularIntensityMapUv:P&&v(M.specularIntensityMap.channel),transmissionMapUv:le&&v(M.transmissionMap.channel),thicknessMapUv:Ae&&v(M.thicknessMap.channel),alphaMapUv:oe&&v(M.alphaMap.channel),vertexTangents:!!F.attributes.tangent&&(Y||U),vertexColors:M.vertexColors,vertexAlphas:M.vertexColors===!0&&!!F.attributes.color&&F.attributes.color.itemSize===4,vertexUv1s:Ne,vertexUv2s:Le,vertexUv3s:$e,pointsUvs:q.isPoints===!0&&!!F.attributes.uv&&(we||oe),fog:!!L,useFog:M.fog===!0,fogExp2:L&&L.isFogExp2,flatShading:M.flatShading===!0,sizeAttenuation:M.sizeAttenuation===!0,logarithmicDepthBuffer:u,skinning:q.isSkinnedMesh===!0,morphTargets:F.morphAttributes.position!==void 0,morphNormals:F.morphAttributes.normal!==void 0,morphColors:F.morphAttributes.color!==void 0,morphTargetsCount:ne,morphTextureStride:ce,numDirLights:w.directional.length,numPointLights:w.point.length,numSpotLights:w.spot.length,numSpotLightMaps:w.spotLightMap.length,numRectAreaLights:w.rectArea.length,numHemiLights:w.hemi.length,numDirLightShadows:w.directionalShadowMap.length,numPointLightShadows:w.pointShadowMap.length,numSpotLightShadows:w.spotShadowMap.length,numSpotLightShadowsWithMaps:w.numSpotLightShadowsWithMaps,numLightProbes:w.numLightProbes,numClippingPlanes:o.numPlanes,numClipIntersection:o.numIntersection,dithering:M.dithering,shadowMapEnabled:s.shadowMap.enabled&&N.length>0,shadowMapType:s.shadowMap.type,toneMapping:Ze,useLegacyLights:s._useLegacyLights,decodeVideoTexture:we&&M.map.isVideoTexture===!0&&tt.getTransfer(M.map.colorSpace)===rt,premultipliedAlpha:M.premultipliedAlpha,doubleSided:M.side===At,flipSided:M.side===kt,useDepthPacking:M.depthPacking>=0,depthPacking:M.depthPacking||0,index0AttributeName:M.index0AttributeName,extensionDerivatives:me&&M.extensions.derivatives===!0,extensionFragDepth:me&&M.extensions.fragDepth===!0,extensionDrawBuffers:me&&M.extensions.drawBuffers===!0,extensionShaderTextureLOD:me&&M.extensions.shaderTextureLOD===!0,extensionClipCullDistance:me&&M.extensions.clipCullDistance&&n.has("WEBGL_clip_cull_distance"),rendererExtensionFragDepth:h||n.has("EXT_frag_depth"),rendererExtensionDrawBuffers:h||n.has("WEBGL_draw_buffers"),rendererExtensionShaderTextureLod:h||n.has("EXT_shader_texture_lod"),rendererExtensionParallelShaderCompile:n.has("KHR_parallel_shader_compile"),customProgramCacheKey:M.customProgramCacheKey()}}function p(M){const w=[];if(M.shaderID?w.push(M.shaderID):(w.push(M.customVertexShaderID),w.push(M.customFragmentShaderID)),M.defines!==void 0)for(const N in M.defines)w.push(N),w.push(M.defines[N]);return M.isRawShaderMaterial===!1&&(_(w,M),x(w,M),w.push(s.outputColorSpace)),w.push(M.customProgramCacheKey),w.join()}function _(M,w){M.push(w.precision),M.push(w.outputColorSpace),M.push(w.envMapMode),M.push(w.envMapCubeUVHeight),M.push(w.mapUv),M.push(w.alphaMapUv),M.push(w.lightMapUv),M.push(w.aoMapUv),M.push(w.bumpMapUv),M.push(w.normalMapUv),M.push(w.displacementMapUv),M.push(w.emissiveMapUv),M.push(w.metalnessMapUv),M.push(w.roughnessMapUv),M.push(w.anisotropyMapUv),M.push(w.clearcoatMapUv),M.push(w.clearcoatNormalMapUv),M.push(w.clearcoatRoughnessMapUv),M.push(w.iridescenceMapUv),M.push(w.iridescenceThicknessMapUv),M.push(w.sheenColorMapUv),M.push(w.sheenRoughnessMapUv),M.push(w.specularMapUv),M.push(w.specularColorMapUv),M.push(w.specularIntensityMapUv),M.push(w.transmissionMapUv),M.push(w.thicknessMapUv),M.push(w.combine),M.push(w.fogExp2),M.push(w.sizeAttenuation),M.push(w.morphTargetsCount),M.push(w.morphAttributeCount),M.push(w.numDirLights),M.push(w.numPointLights),M.push(w.numSpotLights),M.push(w.numSpotLightMaps),M.push(w.numHemiLights),M.push(w.numRectAreaLights),M.push(w.numDirLightShadows),M.push(w.numPointLightShadows),M.push(w.numSpotLightShadows),M.push(w.numSpotLightShadowsWithMaps),M.push(w.numLightProbes),M.push(w.shadowMapType),M.push(w.toneMapping),M.push(w.numClippingPlanes),M.push(w.numClipIntersection),M.push(w.depthPacking)}function x(M,w){a.disableAll(),w.isWebGL2&&a.enable(0),w.supportsVertexTextures&&a.enable(1),w.instancing&&a.enable(2),w.instancingColor&&a.enable(3),w.matcap&&a.enable(4),w.envMap&&a.enable(5),w.normalMapObjectSpace&&a.enable(6),w.normalMapTangentSpace&&a.enable(7),w.clearcoat&&a.enable(8),w.iridescence&&a.enable(9),w.alphaTest&&a.enable(10),w.vertexColors&&a.enable(11),w.vertexAlphas&&a.enable(12),w.vertexUv1s&&a.enable(13),w.vertexUv2s&&a.enable(14),w.vertexUv3s&&a.enable(15),w.vertexTangents&&a.enable(16),w.anisotropy&&a.enable(17),w.alphaHash&&a.enable(18),w.batching&&a.enable(19),M.push(a.mask),a.disableAll(),w.fog&&a.enable(0),w.useFog&&a.enable(1),w.flatShading&&a.enable(2),w.logarithmicDepthBuffer&&a.enable(3),w.skinning&&a.enable(4),w.morphTargets&&a.enable(5),w.morphNormals&&a.enable(6),w.morphColors&&a.enable(7),w.premultipliedAlpha&&a.enable(8),w.shadowMapEnabled&&a.enable(9),w.useLegacyLights&&a.enable(10),w.doubleSided&&a.enable(11),w.flipSided&&a.enable(12),w.useDepthPacking&&a.enable(13),w.dithering&&a.enable(14),w.transmission&&a.enable(15),w.sheen&&a.enable(16),w.opaque&&a.enable(17),w.pointsUvs&&a.enable(18),w.decodeVideoTexture&&a.enable(19),M.push(a.mask)}function b(M){const w=g[M.type];let N;if(w){const B=hn[w];N=$h.clone(B.uniforms)}else N=M.uniforms;return N}function R(M,w){let N;for(let B=0,q=l.length;B<q;B++){const L=l[B];if(L.cacheKey===w){N=L,++N.usedTimes;break}}return N===void 0&&(N=new hm(s,w,M,r),l.push(N)),N}function T(M){if(--M.usedTimes===0){const w=l.indexOf(M);l[w]=l[l.length-1],l.pop(),M.destroy()}}function E(M){c.remove(M)}function O(){c.dispose()}return{getParameters:m,getProgramCacheKey:p,getUniforms:b,acquireProgram:R,releaseProgram:T,releaseShaderCache:E,programs:l,dispose:O}}function mm(){let s=new WeakMap;function e(r){let o=s.get(r);return o===void 0&&(o={},s.set(r,o)),o}function t(r){s.delete(r)}function n(r,o,a){s.get(r)[o]=a}function i(){s=new WeakMap}return{get:e,remove:t,update:n,dispose:i}}function gm(s,e){return s.groupOrder!==e.groupOrder?s.groupOrder-e.groupOrder:s.renderOrder!==e.renderOrder?s.renderOrder-e.renderOrder:s.material.id!==e.material.id?s.material.id-e.material.id:s.z!==e.z?s.z-e.z:s.id-e.id}function oc(s,e){return s.groupOrder!==e.groupOrder?s.groupOrder-e.groupOrder:s.renderOrder!==e.renderOrder?s.renderOrder-e.renderOrder:s.z!==e.z?e.z-s.z:s.id-e.id}function ac(){const s=[];let e=0;const t=[],n=[],i=[];function r(){e=0,t.length=0,n.length=0,i.length=0}function o(u,f,d,g,v,m){let p=s[e];return p===void 0?(p={id:u.id,object:u,geometry:f,material:d,groupOrder:g,renderOrder:u.renderOrder,z:v,group:m},s[e]=p):(p.id=u.id,p.object=u,p.geometry=f,p.material=d,p.groupOrder=g,p.renderOrder=u.renderOrder,p.z=v,p.group=m),e++,p}function a(u,f,d,g,v,m){const p=o(u,f,d,g,v,m);d.transmission>0?n.push(p):d.transparent===!0?i.push(p):t.push(p)}function c(u,f,d,g,v,m){const p=o(u,f,d,g,v,m);d.transmission>0?n.unshift(p):d.transparent===!0?i.unshift(p):t.unshift(p)}function l(u,f){t.length>1&&t.sort(u||gm),n.length>1&&n.sort(f||oc),i.length>1&&i.sort(f||oc)}function h(){for(let u=e,f=s.length;u<f;u++){const d=s[u];if(d.id===null)break;d.id=null,d.object=null,d.geometry=null,d.material=null,d.group=null}}return{opaque:t,transmissive:n,transparent:i,init:r,push:a,unshift:c,finish:h,sort:l}}function vm(){let s=new WeakMap;function e(n,i){const r=s.get(n);let o;return r===void 0?(o=new ac,s.set(n,[o])):i>=r.length?(o=new ac,r.push(o)):o=r[i],o}function t(){s=new WeakMap}return{get:e,dispose:t}}function _m(){const s={};return{get:function(e){if(s[e.id]!==void 0)return s[e.id];let t;switch(e.type){case"DirectionalLight":t={direction:new y,color:new Fe};break;case"SpotLight":t={position:new y,direction:new y,color:new Fe,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":t={position:new y,color:new Fe,distance:0,decay:0};break;case"HemisphereLight":t={direction:new y,skyColor:new Fe,groundColor:new Fe};break;case"RectAreaLight":t={color:new Fe,position:new y,halfWidth:new y,halfHeight:new y};break}return s[e.id]=t,t}}}function xm(){const s={};return{get:function(e){if(s[e.id]!==void 0)return s[e.id];let t;switch(e.type){case"DirectionalLight":t={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new j};break;case"SpotLight":t={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new j};break;case"PointLight":t={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new j,shadowCameraNear:1,shadowCameraFar:1e3};break}return s[e.id]=t,t}}}let ym=0;function bm(s,e){return(e.castShadow?2:0)-(s.castShadow?2:0)+(e.map?1:0)-(s.map?1:0)}function Mm(s,e){const t=new _m,n=xm(),i={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let h=0;h<9;h++)i.probe.push(new y);const r=new y,o=new ot,a=new ot;function c(h,u){let f=0,d=0,g=0;for(let B=0;B<9;B++)i.probe[B].set(0,0,0);let v=0,m=0,p=0,_=0,x=0,b=0,R=0,T=0,E=0,O=0,M=0;h.sort(bm);const w=u===!0?Math.PI:1;for(let B=0,q=h.length;B<q;B++){const L=h[B],F=L.color,G=L.intensity,Z=L.distance,K=L.shadow&&L.shadow.map?L.shadow.map.texture:null;if(L.isAmbientLight)f+=F.r*G*w,d+=F.g*G*w,g+=F.b*G*w;else if(L.isLightProbe){for(let J=0;J<9;J++)i.probe[J].addScaledVector(L.sh.coefficients[J],G);M++}else if(L.isDirectionalLight){const J=t.get(L);if(J.color.copy(L.color).multiplyScalar(L.intensity*w),L.castShadow){const Q=L.shadow,ne=n.get(L);ne.shadowBias=Q.bias,ne.shadowNormalBias=Q.normalBias,ne.shadowRadius=Q.radius,ne.shadowMapSize=Q.mapSize,i.directionalShadow[v]=ne,i.directionalShadowMap[v]=K,i.directionalShadowMatrix[v]=L.shadow.matrix,b++}i.directional[v]=J,v++}else if(L.isSpotLight){const J=t.get(L);J.position.setFromMatrixPosition(L.matrixWorld),J.color.copy(F).multiplyScalar(G*w),J.distance=Z,J.coneCos=Math.cos(L.angle),J.penumbraCos=Math.cos(L.angle*(1-L.penumbra)),J.decay=L.decay,i.spot[p]=J;const Q=L.shadow;if(L.map&&(i.spotLightMap[E]=L.map,E++,Q.updateMatrices(L),L.castShadow&&O++),i.spotLightMatrix[p]=Q.matrix,L.castShadow){const ne=n.get(L);ne.shadowBias=Q.bias,ne.shadowNormalBias=Q.normalBias,ne.shadowRadius=Q.radius,ne.shadowMapSize=Q.mapSize,i.spotShadow[p]=ne,i.spotShadowMap[p]=K,T++}p++}else if(L.isRectAreaLight){const J=t.get(L);J.color.copy(F).multiplyScalar(G),J.halfWidth.set(L.width*.5,0,0),J.halfHeight.set(0,L.height*.5,0),i.rectArea[_]=J,_++}else if(L.isPointLight){const J=t.get(L);if(J.color.copy(L.color).multiplyScalar(L.intensity*w),J.distance=L.distance,J.decay=L.decay,L.castShadow){const Q=L.shadow,ne=n.get(L);ne.shadowBias=Q.bias,ne.shadowNormalBias=Q.normalBias,ne.shadowRadius=Q.radius,ne.shadowMapSize=Q.mapSize,ne.shadowCameraNear=Q.camera.near,ne.shadowCameraFar=Q.camera.far,i.pointShadow[m]=ne,i.pointShadowMap[m]=K,i.pointShadowMatrix[m]=L.shadow.matrix,R++}i.point[m]=J,m++}else if(L.isHemisphereLight){const J=t.get(L);J.skyColor.copy(L.color).multiplyScalar(G*w),J.groundColor.copy(L.groundColor).multiplyScalar(G*w),i.hemi[x]=J,x++}}_>0&&(e.isWebGL2?s.has("OES_texture_float_linear")===!0?(i.rectAreaLTC1=de.LTC_FLOAT_1,i.rectAreaLTC2=de.LTC_FLOAT_2):(i.rectAreaLTC1=de.LTC_HALF_1,i.rectAreaLTC2=de.LTC_HALF_2):s.has("OES_texture_float_linear")===!0?(i.rectAreaLTC1=de.LTC_FLOAT_1,i.rectAreaLTC2=de.LTC_FLOAT_2):s.has("OES_texture_half_float_linear")===!0?(i.rectAreaLTC1=de.LTC_HALF_1,i.rectAreaLTC2=de.LTC_HALF_2):console.error("THREE.WebGLRenderer: Unable to use RectAreaLight. Missing WebGL extensions.")),i.ambient[0]=f,i.ambient[1]=d,i.ambient[2]=g;const N=i.hash;(N.directionalLength!==v||N.pointLength!==m||N.spotLength!==p||N.rectAreaLength!==_||N.hemiLength!==x||N.numDirectionalShadows!==b||N.numPointShadows!==R||N.numSpotShadows!==T||N.numSpotMaps!==E||N.numLightProbes!==M)&&(i.directional.length=v,i.spot.length=p,i.rectArea.length=_,i.point.length=m,i.hemi.length=x,i.directionalShadow.length=b,i.directionalShadowMap.length=b,i.pointShadow.length=R,i.pointShadowMap.length=R,i.spotShadow.length=T,i.spotShadowMap.length=T,i.directionalShadowMatrix.length=b,i.pointShadowMatrix.length=R,i.spotLightMatrix.length=T+E-O,i.spotLightMap.length=E,i.numSpotLightShadowsWithMaps=O,i.numLightProbes=M,N.directionalLength=v,N.pointLength=m,N.spotLength=p,N.rectAreaLength=_,N.hemiLength=x,N.numDirectionalShadows=b,N.numPointShadows=R,N.numSpotShadows=T,N.numSpotMaps=E,N.numLightProbes=M,i.version=ym++)}function l(h,u){let f=0,d=0,g=0,v=0,m=0;const p=u.matrixWorldInverse;for(let _=0,x=h.length;_<x;_++){const b=h[_];if(b.isDirectionalLight){const R=i.directional[f];R.direction.setFromMatrixPosition(b.matrixWorld),r.setFromMatrixPosition(b.target.matrixWorld),R.direction.sub(r),R.direction.transformDirection(p),f++}else if(b.isSpotLight){const R=i.spot[g];R.position.setFromMatrixPosition(b.matrixWorld),R.position.applyMatrix4(p),R.direction.setFromMatrixPosition(b.matrixWorld),r.setFromMatrixPosition(b.target.matrixWorld),R.direction.sub(r),R.direction.transformDirection(p),g++}else if(b.isRectAreaLight){const R=i.rectArea[v];R.position.setFromMatrixPosition(b.matrixWorld),R.position.applyMatrix4(p),a.identity(),o.copy(b.matrixWorld),o.premultiply(p),a.extractRotation(o),R.halfWidth.set(b.width*.5,0,0),R.halfHeight.set(0,b.height*.5,0),R.halfWidth.applyMatrix4(a),R.halfHeight.applyMatrix4(a),v++}else if(b.isPointLight){const R=i.point[d];R.position.setFromMatrixPosition(b.matrixWorld),R.position.applyMatrix4(p),d++}else if(b.isHemisphereLight){const R=i.hemi[m];R.direction.setFromMatrixPosition(b.matrixWorld),R.direction.transformDirection(p),m++}}}return{setup:c,setupView:l,state:i}}function cc(s,e){const t=new Mm(s,e),n=[],i=[];function r(){n.length=0,i.length=0}function o(u){n.push(u)}function a(u){i.push(u)}function c(u){t.setup(n,u)}function l(u){t.setupView(n,u)}return{init:r,state:{lightsArray:n,shadowsArray:i,lights:t},setupLights:c,setupLightsView:l,pushLight:o,pushShadow:a}}function Sm(s,e){let t=new WeakMap;function n(r,o=0){const a=t.get(r);let c;return a===void 0?(c=new cc(s,e),t.set(r,[c])):o>=a.length?(c=new cc(s,e),a.push(c)):c=a[o],c}function i(){t=new WeakMap}return{get:n,dispose:i}}class Em extends wn{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=xh,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}}class wm extends wn{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}}const Tm=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,Am=`uniform sampler2D shadow_pass;
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
}`;function Cm(s,e,t){let n=new Co;const i=new j,r=new j,o=new Et,a=new Em({depthPacking:yh}),c=new wm,l={},h=t.maxTextureSize,u={[un]:kt,[kt]:un,[At]:At},f=new zn({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new j},radius:{value:4}},vertexShader:Tm,fragmentShader:Am}),d=f.clone();d.defines.HORIZONTAL_PASS=1;const g=new it;g.setAttribute("position",new Nt(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const v=new Oe(g,f),m=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=Dc;let p=this.type;this.render=function(T,E,O){if(m.enabled===!1||m.autoUpdate===!1&&m.needsUpdate===!1||T.length===0)return;const M=s.getRenderTarget(),w=s.getActiveCubeFace(),N=s.getActiveMipmapLevel(),B=s.state;B.setBlending(In),B.buffers.color.setClear(1,1,1,1),B.buffers.depth.setTest(!0),B.setScissorTest(!1);const q=p!==yn&&this.type===yn,L=p===yn&&this.type!==yn;for(let F=0,G=T.length;F<G;F++){const Z=T[F],K=Z.shadow;if(K===void 0){console.warn("THREE.WebGLShadowMap:",Z,"has no shadow.");continue}if(K.autoUpdate===!1&&K.needsUpdate===!1)continue;i.copy(K.mapSize);const J=K.getFrameExtents();if(i.multiply(J),r.copy(K.mapSize),(i.x>h||i.y>h)&&(i.x>h&&(r.x=Math.floor(h/J.x),i.x=r.x*J.x,K.mapSize.x=r.x),i.y>h&&(r.y=Math.floor(h/J.y),i.y=r.y*J.y,K.mapSize.y=r.y)),K.map===null||q===!0||L===!0){const ne=this.type!==yn?{minFilter:Gt,magFilter:Gt}:{};K.map!==null&&K.map.dispose(),K.map=new Jn(i.x,i.y,ne),K.map.texture.name=Z.name+".shadowMap",K.camera.updateProjectionMatrix()}s.setRenderTarget(K.map),s.clear();const Q=K.getViewportCount();for(let ne=0;ne<Q;ne++){const ce=K.getViewport(ne);o.set(r.x*ce.x,r.y*ce.y,r.x*ce.z,r.y*ce.w),B.viewport(o),K.updateMatrices(Z,ne),n=K.getFrustum(),b(E,O,K.camera,Z,this.type)}K.isPointLightShadow!==!0&&this.type===yn&&_(K,O),K.needsUpdate=!1}p=this.type,m.needsUpdate=!1,s.setRenderTarget(M,w,N)};function _(T,E){const O=e.update(v);f.defines.VSM_SAMPLES!==T.blurSamples&&(f.defines.VSM_SAMPLES=T.blurSamples,d.defines.VSM_SAMPLES=T.blurSamples,f.needsUpdate=!0,d.needsUpdate=!0),T.mapPass===null&&(T.mapPass=new Jn(i.x,i.y)),f.uniforms.shadow_pass.value=T.map.texture,f.uniforms.resolution.value=T.mapSize,f.uniforms.radius.value=T.radius,s.setRenderTarget(T.mapPass),s.clear(),s.renderBufferDirect(E,null,O,f,v,null),d.uniforms.shadow_pass.value=T.mapPass.texture,d.uniforms.resolution.value=T.mapSize,d.uniforms.radius.value=T.radius,s.setRenderTarget(T.map),s.clear(),s.renderBufferDirect(E,null,O,d,v,null)}function x(T,E,O,M){let w=null;const N=O.isPointLight===!0?T.customDistanceMaterial:T.customDepthMaterial;if(N!==void 0)w=N;else if(w=O.isPointLight===!0?c:a,s.localClippingEnabled&&E.clipShadows===!0&&Array.isArray(E.clippingPlanes)&&E.clippingPlanes.length!==0||E.displacementMap&&E.displacementScale!==0||E.alphaMap&&E.alphaTest>0||E.map&&E.alphaTest>0){const B=w.uuid,q=E.uuid;let L=l[B];L===void 0&&(L={},l[B]=L);let F=L[q];F===void 0&&(F=w.clone(),L[q]=F,E.addEventListener("dispose",R)),w=F}if(w.visible=E.visible,w.wireframe=E.wireframe,M===yn?w.side=E.shadowSide!==null?E.shadowSide:E.side:w.side=E.shadowSide!==null?E.shadowSide:u[E.side],w.alphaMap=E.alphaMap,w.alphaTest=E.alphaTest,w.map=E.map,w.clipShadows=E.clipShadows,w.clippingPlanes=E.clippingPlanes,w.clipIntersection=E.clipIntersection,w.displacementMap=E.displacementMap,w.displacementScale=E.displacementScale,w.displacementBias=E.displacementBias,w.wireframeLinewidth=E.wireframeLinewidth,w.linewidth=E.linewidth,O.isPointLight===!0&&w.isMeshDistanceMaterial===!0){const B=s.properties.get(w);B.light=O}return w}function b(T,E,O,M,w){if(T.visible===!1)return;if(T.layers.test(E.layers)&&(T.isMesh||T.isLine||T.isPoints)&&(T.castShadow||T.receiveShadow&&w===yn)&&(!T.frustumCulled||n.intersectsObject(T))){T.modelViewMatrix.multiplyMatrices(O.matrixWorldInverse,T.matrixWorld);const q=e.update(T),L=T.material;if(Array.isArray(L)){const F=q.groups;for(let G=0,Z=F.length;G<Z;G++){const K=F[G],J=L[K.materialIndex];if(J&&J.visible){const Q=x(T,J,M,w);T.onBeforeShadow(s,T,E,O,q,Q,K),s.renderBufferDirect(O,null,q,Q,T,K),T.onAfterShadow(s,T,E,O,q,Q,K)}}}else if(L.visible){const F=x(T,L,M,w);T.onBeforeShadow(s,T,E,O,q,F,null),s.renderBufferDirect(O,null,q,F,T,null),T.onAfterShadow(s,T,E,O,q,F,null)}}const B=T.children;for(let q=0,L=B.length;q<L;q++)b(B[q],E,O,M,w)}function R(T){T.target.removeEventListener("dispose",R);for(const O in l){const M=l[O],w=T.target.uuid;w in M&&(M[w].dispose(),delete M[w])}}}function Rm(s,e,t){const n=t.isWebGL2;function i(){let I=!1;const he=new Et;let me=null;const Ne=new Et(0,0,0,0);return{setMask:function(Le){me!==Le&&!I&&(s.colorMask(Le,Le,Le,Le),me=Le)},setLocked:function(Le){I=Le},setClear:function(Le,$e,Ze,ht,ft){ft===!0&&(Le*=ht,$e*=ht,Ze*=ht),he.set(Le,$e,Ze,ht),Ne.equals(he)===!1&&(s.clearColor(Le,$e,Ze,ht),Ne.copy(he))},reset:function(){I=!1,me=null,Ne.set(-1,0,0,0)}}}function r(){let I=!1,he=null,me=null,Ne=null;return{setTest:function(Le){Le?Ie(s.DEPTH_TEST):we(s.DEPTH_TEST)},setMask:function(Le){he!==Le&&!I&&(s.depthMask(Le),he=Le)},setFunc:function(Le){if(me!==Le){switch(Le){case $l:s.depthFunc(s.NEVER);break;case Zl:s.depthFunc(s.ALWAYS);break;case Kl:s.depthFunc(s.LESS);break;case js:s.depthFunc(s.LEQUAL);break;case Jl:s.depthFunc(s.EQUAL);break;case Ql:s.depthFunc(s.GEQUAL);break;case eh:s.depthFunc(s.GREATER);break;case th:s.depthFunc(s.NOTEQUAL);break;default:s.depthFunc(s.LEQUAL)}me=Le}},setLocked:function(Le){I=Le},setClear:function(Le){Ne!==Le&&(s.clearDepth(Le),Ne=Le)},reset:function(){I=!1,he=null,me=null,Ne=null}}}function o(){let I=!1,he=null,me=null,Ne=null,Le=null,$e=null,Ze=null,ht=null,ft=null;return{setTest:function(Qe){I||(Qe?Ie(s.STENCIL_TEST):we(s.STENCIL_TEST))},setMask:function(Qe){he!==Qe&&!I&&(s.stencilMask(Qe),he=Qe)},setFunc:function(Qe,mt,ln){(me!==Qe||Ne!==mt||Le!==ln)&&(s.stencilFunc(Qe,mt,ln),me=Qe,Ne=mt,Le=ln)},setOp:function(Qe,mt,ln){($e!==Qe||Ze!==mt||ht!==ln)&&(s.stencilOp(Qe,mt,ln),$e=Qe,Ze=mt,ht=ln)},setLocked:function(Qe){I=Qe},setClear:function(Qe){ft!==Qe&&(s.clearStencil(Qe),ft=Qe)},reset:function(){I=!1,he=null,me=null,Ne=null,Le=null,$e=null,Ze=null,ht=null,ft=null}}}const a=new i,c=new r,l=new o,h=new WeakMap,u=new WeakMap;let f={},d={},g=new WeakMap,v=[],m=null,p=!1,_=null,x=null,b=null,R=null,T=null,E=null,O=null,M=new Fe(0,0,0),w=0,N=!1,B=null,q=null,L=null,F=null,G=null;const Z=s.getParameter(s.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let K=!1,J=0;const Q=s.getParameter(s.VERSION);Q.indexOf("WebGL")!==-1?(J=parseFloat(/^WebGL (\d)/.exec(Q)[1]),K=J>=1):Q.indexOf("OpenGL ES")!==-1&&(J=parseFloat(/^OpenGL ES (\d)/.exec(Q)[1]),K=J>=2);let ne=null,ce={};const X=s.getParameter(s.SCISSOR_BOX),ee=s.getParameter(s.VIEWPORT),pe=new Et().fromArray(X),Se=new Et().fromArray(ee);function ve(I,he,me,Ne){const Le=new Uint8Array(4),$e=s.createTexture();s.bindTexture(I,$e),s.texParameteri(I,s.TEXTURE_MIN_FILTER,s.NEAREST),s.texParameteri(I,s.TEXTURE_MAG_FILTER,s.NEAREST);for(let Ze=0;Ze<me;Ze++)n&&(I===s.TEXTURE_3D||I===s.TEXTURE_2D_ARRAY)?s.texImage3D(he,0,s.RGBA,1,1,Ne,0,s.RGBA,s.UNSIGNED_BYTE,Le):s.texImage2D(he+Ze,0,s.RGBA,1,1,0,s.RGBA,s.UNSIGNED_BYTE,Le);return $e}const De={};De[s.TEXTURE_2D]=ve(s.TEXTURE_2D,s.TEXTURE_2D,1),De[s.TEXTURE_CUBE_MAP]=ve(s.TEXTURE_CUBE_MAP,s.TEXTURE_CUBE_MAP_POSITIVE_X,6),n&&(De[s.TEXTURE_2D_ARRAY]=ve(s.TEXTURE_2D_ARRAY,s.TEXTURE_2D_ARRAY,1,1),De[s.TEXTURE_3D]=ve(s.TEXTURE_3D,s.TEXTURE_3D,1,1)),a.setClear(0,0,0,1),c.setClear(1),l.setClear(0),Ie(s.DEPTH_TEST),c.setFunc(js),ge(!1),A(Wo),Ie(s.CULL_FACE),Y(In);function Ie(I){f[I]!==!0&&(s.enable(I),f[I]=!0)}function we(I){f[I]!==!1&&(s.disable(I),f[I]=!1)}function ze(I,he){return d[I]!==he?(s.bindFramebuffer(I,he),d[I]=he,n&&(I===s.DRAW_FRAMEBUFFER&&(d[s.FRAMEBUFFER]=he),I===s.FRAMEBUFFER&&(d[s.DRAW_FRAMEBUFFER]=he)),!0):!1}function D(I,he){let me=v,Ne=!1;if(I)if(me=g.get(he),me===void 0&&(me=[],g.set(he,me)),I.isWebGLMultipleRenderTargets){const Le=I.texture;if(me.length!==Le.length||me[0]!==s.COLOR_ATTACHMENT0){for(let $e=0,Ze=Le.length;$e<Ze;$e++)me[$e]=s.COLOR_ATTACHMENT0+$e;me.length=Le.length,Ne=!0}}else me[0]!==s.COLOR_ATTACHMENT0&&(me[0]=s.COLOR_ATTACHMENT0,Ne=!0);else me[0]!==s.BACK&&(me[0]=s.BACK,Ne=!0);Ne&&(t.isWebGL2?s.drawBuffers(me):e.get("WEBGL_draw_buffers").drawBuffersWEBGL(me))}function ue(I){return m!==I?(s.useProgram(I),m=I,!0):!1}const $={[jn]:s.FUNC_ADD,[Il]:s.FUNC_SUBTRACT,[Nl]:s.FUNC_REVERSE_SUBTRACT};if(n)$[Yo]=s.MIN,$[$o]=s.MAX;else{const I=e.get("EXT_blend_minmax");I!==null&&($[Yo]=I.MIN_EXT,$[$o]=I.MAX_EXT)}const ae={[Ul]:s.ZERO,[Fl]:s.ONE,[zl]:s.SRC_COLOR,[co]:s.SRC_ALPHA,[Wl]:s.SRC_ALPHA_SATURATE,[Hl]:s.DST_COLOR,[Gl]:s.DST_ALPHA,[Bl]:s.ONE_MINUS_SRC_COLOR,[lo]:s.ONE_MINUS_SRC_ALPHA,[Vl]:s.ONE_MINUS_DST_COLOR,[kl]:s.ONE_MINUS_DST_ALPHA,[Xl]:s.CONSTANT_COLOR,[jl]:s.ONE_MINUS_CONSTANT_COLOR,[ql]:s.CONSTANT_ALPHA,[Yl]:s.ONE_MINUS_CONSTANT_ALPHA};function Y(I,he,me,Ne,Le,$e,Ze,ht,ft,Qe){if(I===In){p===!0&&(we(s.BLEND),p=!1);return}if(p===!1&&(Ie(s.BLEND),p=!0),I!==Ol){if(I!==_||Qe!==N){if((x!==jn||T!==jn)&&(s.blendEquation(s.FUNC_ADD),x=jn,T=jn),Qe)switch(I){case Ri:s.blendFuncSeparate(s.ONE,s.ONE_MINUS_SRC_ALPHA,s.ONE,s.ONE_MINUS_SRC_ALPHA);break;case Xo:s.blendFunc(s.ONE,s.ONE);break;case jo:s.blendFuncSeparate(s.ZERO,s.ONE_MINUS_SRC_COLOR,s.ZERO,s.ONE);break;case qo:s.blendFuncSeparate(s.ZERO,s.SRC_COLOR,s.ZERO,s.SRC_ALPHA);break;default:console.error("THREE.WebGLState: Invalid blending: ",I);break}else switch(I){case Ri:s.blendFuncSeparate(s.SRC_ALPHA,s.ONE_MINUS_SRC_ALPHA,s.ONE,s.ONE_MINUS_SRC_ALPHA);break;case Xo:s.blendFunc(s.SRC_ALPHA,s.ONE);break;case jo:s.blendFuncSeparate(s.ZERO,s.ONE_MINUS_SRC_COLOR,s.ZERO,s.ONE);break;case qo:s.blendFunc(s.ZERO,s.SRC_COLOR);break;default:console.error("THREE.WebGLState: Invalid blending: ",I);break}b=null,R=null,E=null,O=null,M.set(0,0,0),w=0,_=I,N=Qe}return}Le=Le||he,$e=$e||me,Ze=Ze||Ne,(he!==x||Le!==T)&&(s.blendEquationSeparate($[he],$[Le]),x=he,T=Le),(me!==b||Ne!==R||$e!==E||Ze!==O)&&(s.blendFuncSeparate(ae[me],ae[Ne],ae[$e],ae[Ze]),b=me,R=Ne,E=$e,O=Ze),(ht.equals(M)===!1||ft!==w)&&(s.blendColor(ht.r,ht.g,ht.b,ft),M.copy(ht),w=ft),_=I,N=!1}function Te(I,he){I.side===At?we(s.CULL_FACE):Ie(s.CULL_FACE);let me=I.side===kt;he&&(me=!me),ge(me),I.blending===Ri&&I.transparent===!1?Y(In):Y(I.blending,I.blendEquation,I.blendSrc,I.blendDst,I.blendEquationAlpha,I.blendSrcAlpha,I.blendDstAlpha,I.blendColor,I.blendAlpha,I.premultipliedAlpha),c.setFunc(I.depthFunc),c.setTest(I.depthTest),c.setMask(I.depthWrite),a.setMask(I.colorWrite);const Ne=I.stencilWrite;l.setTest(Ne),Ne&&(l.setMask(I.stencilWriteMask),l.setFunc(I.stencilFunc,I.stencilRef,I.stencilFuncMask),l.setOp(I.stencilFail,I.stencilZFail,I.stencilZPass)),U(I.polygonOffset,I.polygonOffsetFactor,I.polygonOffsetUnits),I.alphaToCoverage===!0?Ie(s.SAMPLE_ALPHA_TO_COVERAGE):we(s.SAMPLE_ALPHA_TO_COVERAGE)}function ge(I){B!==I&&(I?s.frontFace(s.CW):s.frontFace(s.CCW),B=I)}function A(I){I!==Ll?(Ie(s.CULL_FACE),I!==q&&(I===Wo?s.cullFace(s.BACK):I===Dl?s.cullFace(s.FRONT):s.cullFace(s.FRONT_AND_BACK))):we(s.CULL_FACE),q=I}function S(I){I!==L&&(K&&s.lineWidth(I),L=I)}function U(I,he,me){I?(Ie(s.POLYGON_OFFSET_FILL),(F!==he||G!==me)&&(s.polygonOffset(he,me),F=he,G=me)):we(s.POLYGON_OFFSET_FILL)}function re(I){I?Ie(s.SCISSOR_TEST):we(s.SCISSOR_TEST)}function ie(I){I===void 0&&(I=s.TEXTURE0+Z-1),ne!==I&&(s.activeTexture(I),ne=I)}function te(I,he,me){me===void 0&&(ne===null?me=s.TEXTURE0+Z-1:me=ne);let Ne=ce[me];Ne===void 0&&(Ne={type:void 0,texture:void 0},ce[me]=Ne),(Ne.type!==I||Ne.texture!==he)&&(ne!==me&&(s.activeTexture(me),ne=me),s.bindTexture(I,he||De[I]),Ne.type=I,Ne.texture=he)}function Ee(){const I=ce[ne];I!==void 0&&I.type!==void 0&&(s.bindTexture(I.type,null),I.type=void 0,I.texture=void 0)}function fe(){try{s.compressedTexImage2D.apply(s,arguments)}catch(I){console.error("THREE.WebGLState:",I)}}function ye(){try{s.compressedTexImage3D.apply(s,arguments)}catch(I){console.error("THREE.WebGLState:",I)}}function Pe(){try{s.texSubImage2D.apply(s,arguments)}catch(I){console.error("THREE.WebGLState:",I)}}function ke(){try{s.texSubImage3D.apply(s,arguments)}catch(I){console.error("THREE.WebGLState:",I)}}function se(){try{s.compressedTexSubImage2D.apply(s,arguments)}catch(I){console.error("THREE.WebGLState:",I)}}function Ke(){try{s.compressedTexSubImage3D.apply(s,arguments)}catch(I){console.error("THREE.WebGLState:",I)}}function Xe(){try{s.texStorage2D.apply(s,arguments)}catch(I){console.error("THREE.WebGLState:",I)}}function Be(){try{s.texStorage3D.apply(s,arguments)}catch(I){console.error("THREE.WebGLState:",I)}}function Re(){try{s.texImage2D.apply(s,arguments)}catch(I){console.error("THREE.WebGLState:",I)}}function _e(){try{s.texImage3D.apply(s,arguments)}catch(I){console.error("THREE.WebGLState:",I)}}function P(I){pe.equals(I)===!1&&(s.scissor(I.x,I.y,I.z,I.w),pe.copy(I))}function le(I){Se.equals(I)===!1&&(s.viewport(I.x,I.y,I.z,I.w),Se.copy(I))}function Ae(I,he){let me=u.get(he);me===void 0&&(me=new WeakMap,u.set(he,me));let Ne=me.get(I);Ne===void 0&&(Ne=s.getUniformBlockIndex(he,I.name),me.set(I,Ne))}function Me(I,he){const Ne=u.get(he).get(I);h.get(he)!==Ne&&(s.uniformBlockBinding(he,Ne,I.__bindingPointIndex),h.set(he,Ne))}function oe(){s.disable(s.BLEND),s.disable(s.CULL_FACE),s.disable(s.DEPTH_TEST),s.disable(s.POLYGON_OFFSET_FILL),s.disable(s.SCISSOR_TEST),s.disable(s.STENCIL_TEST),s.disable(s.SAMPLE_ALPHA_TO_COVERAGE),s.blendEquation(s.FUNC_ADD),s.blendFunc(s.ONE,s.ZERO),s.blendFuncSeparate(s.ONE,s.ZERO,s.ONE,s.ZERO),s.blendColor(0,0,0,0),s.colorMask(!0,!0,!0,!0),s.clearColor(0,0,0,0),s.depthMask(!0),s.depthFunc(s.LESS),s.clearDepth(1),s.stencilMask(4294967295),s.stencilFunc(s.ALWAYS,0,4294967295),s.stencilOp(s.KEEP,s.KEEP,s.KEEP),s.clearStencil(0),s.cullFace(s.BACK),s.frontFace(s.CCW),s.polygonOffset(0,0),s.activeTexture(s.TEXTURE0),s.bindFramebuffer(s.FRAMEBUFFER,null),n===!0&&(s.bindFramebuffer(s.DRAW_FRAMEBUFFER,null),s.bindFramebuffer(s.READ_FRAMEBUFFER,null)),s.useProgram(null),s.lineWidth(1),s.scissor(0,0,s.canvas.width,s.canvas.height),s.viewport(0,0,s.canvas.width,s.canvas.height),f={},ne=null,ce={},d={},g=new WeakMap,v=[],m=null,p=!1,_=null,x=null,b=null,R=null,T=null,E=null,O=null,M=new Fe(0,0,0),w=0,N=!1,B=null,q=null,L=null,F=null,G=null,pe.set(0,0,s.canvas.width,s.canvas.height),Se.set(0,0,s.canvas.width,s.canvas.height),a.reset(),c.reset(),l.reset()}return{buffers:{color:a,depth:c,stencil:l},enable:Ie,disable:we,bindFramebuffer:ze,drawBuffers:D,useProgram:ue,setBlending:Y,setMaterial:Te,setFlipSided:ge,setCullFace:A,setLineWidth:S,setPolygonOffset:U,setScissorTest:re,activeTexture:ie,bindTexture:te,unbindTexture:Ee,compressedTexImage2D:fe,compressedTexImage3D:ye,texImage2D:Re,texImage3D:_e,updateUBOMapping:Ae,uniformBlockBinding:Me,texStorage2D:Xe,texStorage3D:Be,texSubImage2D:Pe,texSubImage3D:ke,compressedTexSubImage2D:se,compressedTexSubImage3D:Ke,scissor:P,viewport:le,reset:oe}}function Pm(s,e,t,n,i,r,o){const a=i.isWebGL2,c=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,l=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),h=new WeakMap;let u;const f=new WeakMap;let d=!1;try{d=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function g(A,S){return d?new OffscreenCanvas(A,S):Ks("canvas")}function v(A,S,U,re){let ie=1;if((A.width>re||A.height>re)&&(ie=re/Math.max(A.width,A.height)),ie<1||S===!0)if(typeof HTMLImageElement<"u"&&A instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&A instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&A instanceof ImageBitmap){const te=S?_o:Math.floor,Ee=te(ie*A.width),fe=te(ie*A.height);u===void 0&&(u=g(Ee,fe));const ye=U?g(Ee,fe):u;return ye.width=Ee,ye.height=fe,ye.getContext("2d").drawImage(A,0,0,Ee,fe),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+A.width+"x"+A.height+") to ("+Ee+"x"+fe+")."),ye}else return"data"in A&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+A.width+"x"+A.height+")."),A;return A}function m(A){return Ea(A.width)&&Ea(A.height)}function p(A){return a?!1:A.wrapS!==an||A.wrapT!==an||A.minFilter!==Gt&&A.minFilter!==Ht}function _(A,S){return A.generateMipmaps&&S&&A.minFilter!==Gt&&A.minFilter!==Ht}function x(A){s.generateMipmap(A)}function b(A,S,U,re,ie=!1){if(a===!1)return S;if(A!==null){if(s[A]!==void 0)return s[A];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+A+"'")}let te=S;if(S===s.RED&&(U===s.FLOAT&&(te=s.R32F),U===s.HALF_FLOAT&&(te=s.R16F),U===s.UNSIGNED_BYTE&&(te=s.R8)),S===s.RED_INTEGER&&(U===s.UNSIGNED_BYTE&&(te=s.R8UI),U===s.UNSIGNED_SHORT&&(te=s.R16UI),U===s.UNSIGNED_INT&&(te=s.R32UI),U===s.BYTE&&(te=s.R8I),U===s.SHORT&&(te=s.R16I),U===s.INT&&(te=s.R32I)),S===s.RG&&(U===s.FLOAT&&(te=s.RG32F),U===s.HALF_FLOAT&&(te=s.RG16F),U===s.UNSIGNED_BYTE&&(te=s.RG8)),S===s.RGBA){const Ee=ie?qs:tt.getTransfer(re);U===s.FLOAT&&(te=s.RGBA32F),U===s.HALF_FLOAT&&(te=s.RGBA16F),U===s.UNSIGNED_BYTE&&(te=Ee===rt?s.SRGB8_ALPHA8:s.RGBA8),U===s.UNSIGNED_SHORT_4_4_4_4&&(te=s.RGBA4),U===s.UNSIGNED_SHORT_5_5_5_1&&(te=s.RGB5_A1)}return(te===s.R16F||te===s.R32F||te===s.RG16F||te===s.RG32F||te===s.RGBA16F||te===s.RGBA32F)&&e.get("EXT_color_buffer_float"),te}function R(A,S,U){return _(A,U)===!0||A.isFramebufferTexture&&A.minFilter!==Gt&&A.minFilter!==Ht?Math.log2(Math.max(S.width,S.height))+1:A.mipmaps!==void 0&&A.mipmaps.length>0?A.mipmaps.length:A.isCompressedTexture&&Array.isArray(A.image)?S.mipmaps.length:1}function T(A){return A===Gt||A===Zo||A===xr?s.NEAREST:s.LINEAR}function E(A){const S=A.target;S.removeEventListener("dispose",E),M(S),S.isVideoTexture&&h.delete(S)}function O(A){const S=A.target;S.removeEventListener("dispose",O),N(S)}function M(A){const S=n.get(A);if(S.__webglInit===void 0)return;const U=A.source,re=f.get(U);if(re){const ie=re[S.__cacheKey];ie.usedTimes--,ie.usedTimes===0&&w(A),Object.keys(re).length===0&&f.delete(U)}n.remove(A)}function w(A){const S=n.get(A);s.deleteTexture(S.__webglTexture);const U=A.source,re=f.get(U);delete re[S.__cacheKey],o.memory.textures--}function N(A){const S=A.texture,U=n.get(A),re=n.get(S);if(re.__webglTexture!==void 0&&(s.deleteTexture(re.__webglTexture),o.memory.textures--),A.depthTexture&&A.depthTexture.dispose(),A.isWebGLCubeRenderTarget)for(let ie=0;ie<6;ie++){if(Array.isArray(U.__webglFramebuffer[ie]))for(let te=0;te<U.__webglFramebuffer[ie].length;te++)s.deleteFramebuffer(U.__webglFramebuffer[ie][te]);else s.deleteFramebuffer(U.__webglFramebuffer[ie]);U.__webglDepthbuffer&&s.deleteRenderbuffer(U.__webglDepthbuffer[ie])}else{if(Array.isArray(U.__webglFramebuffer))for(let ie=0;ie<U.__webglFramebuffer.length;ie++)s.deleteFramebuffer(U.__webglFramebuffer[ie]);else s.deleteFramebuffer(U.__webglFramebuffer);if(U.__webglDepthbuffer&&s.deleteRenderbuffer(U.__webglDepthbuffer),U.__webglMultisampledFramebuffer&&s.deleteFramebuffer(U.__webglMultisampledFramebuffer),U.__webglColorRenderbuffer)for(let ie=0;ie<U.__webglColorRenderbuffer.length;ie++)U.__webglColorRenderbuffer[ie]&&s.deleteRenderbuffer(U.__webglColorRenderbuffer[ie]);U.__webglDepthRenderbuffer&&s.deleteRenderbuffer(U.__webglDepthRenderbuffer)}if(A.isWebGLMultipleRenderTargets)for(let ie=0,te=S.length;ie<te;ie++){const Ee=n.get(S[ie]);Ee.__webglTexture&&(s.deleteTexture(Ee.__webglTexture),o.memory.textures--),n.remove(S[ie])}n.remove(S),n.remove(A)}let B=0;function q(){B=0}function L(){const A=B;return A>=i.maxTextures&&console.warn("THREE.WebGLTextures: Trying to use "+A+" texture units while this GPU supports only "+i.maxTextures),B+=1,A}function F(A){const S=[];return S.push(A.wrapS),S.push(A.wrapT),S.push(A.wrapR||0),S.push(A.magFilter),S.push(A.minFilter),S.push(A.anisotropy),S.push(A.internalFormat),S.push(A.format),S.push(A.type),S.push(A.generateMipmaps),S.push(A.premultiplyAlpha),S.push(A.flipY),S.push(A.unpackAlignment),S.push(A.colorSpace),S.join()}function G(A,S){const U=n.get(A);if(A.isVideoTexture&&Te(A),A.isRenderTargetTexture===!1&&A.version>0&&U.__version!==A.version){const re=A.image;if(re===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(re.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{pe(U,A,S);return}}t.bindTexture(s.TEXTURE_2D,U.__webglTexture,s.TEXTURE0+S)}function Z(A,S){const U=n.get(A);if(A.version>0&&U.__version!==A.version){pe(U,A,S);return}t.bindTexture(s.TEXTURE_2D_ARRAY,U.__webglTexture,s.TEXTURE0+S)}function K(A,S){const U=n.get(A);if(A.version>0&&U.__version!==A.version){pe(U,A,S);return}t.bindTexture(s.TEXTURE_3D,U.__webglTexture,s.TEXTURE0+S)}function J(A,S){const U=n.get(A);if(A.version>0&&U.__version!==A.version){Se(U,A,S);return}t.bindTexture(s.TEXTURE_CUBE_MAP,U.__webglTexture,s.TEXTURE0+S)}const Q={[fo]:s.REPEAT,[an]:s.CLAMP_TO_EDGE,[po]:s.MIRRORED_REPEAT},ne={[Gt]:s.NEAREST,[Zo]:s.NEAREST_MIPMAP_NEAREST,[xr]:s.NEAREST_MIPMAP_LINEAR,[Ht]:s.LINEAR,[hh]:s.LINEAR_MIPMAP_NEAREST,[es]:s.LINEAR_MIPMAP_LINEAR},ce={[Mh]:s.NEVER,[Ch]:s.ALWAYS,[Sh]:s.LESS,[Xc]:s.LEQUAL,[Eh]:s.EQUAL,[Ah]:s.GEQUAL,[wh]:s.GREATER,[Th]:s.NOTEQUAL};function X(A,S,U){if(U?(s.texParameteri(A,s.TEXTURE_WRAP_S,Q[S.wrapS]),s.texParameteri(A,s.TEXTURE_WRAP_T,Q[S.wrapT]),(A===s.TEXTURE_3D||A===s.TEXTURE_2D_ARRAY)&&s.texParameteri(A,s.TEXTURE_WRAP_R,Q[S.wrapR]),s.texParameteri(A,s.TEXTURE_MAG_FILTER,ne[S.magFilter]),s.texParameteri(A,s.TEXTURE_MIN_FILTER,ne[S.minFilter])):(s.texParameteri(A,s.TEXTURE_WRAP_S,s.CLAMP_TO_EDGE),s.texParameteri(A,s.TEXTURE_WRAP_T,s.CLAMP_TO_EDGE),(A===s.TEXTURE_3D||A===s.TEXTURE_2D_ARRAY)&&s.texParameteri(A,s.TEXTURE_WRAP_R,s.CLAMP_TO_EDGE),(S.wrapS!==an||S.wrapT!==an)&&console.warn("THREE.WebGLRenderer: Texture is not power of two. Texture.wrapS and Texture.wrapT should be set to THREE.ClampToEdgeWrapping."),s.texParameteri(A,s.TEXTURE_MAG_FILTER,T(S.magFilter)),s.texParameteri(A,s.TEXTURE_MIN_FILTER,T(S.minFilter)),S.minFilter!==Gt&&S.minFilter!==Ht&&console.warn("THREE.WebGLRenderer: Texture is not power of two. Texture.minFilter should be set to THREE.NearestFilter or THREE.LinearFilter.")),S.compareFunction&&(s.texParameteri(A,s.TEXTURE_COMPARE_MODE,s.COMPARE_REF_TO_TEXTURE),s.texParameteri(A,s.TEXTURE_COMPARE_FUNC,ce[S.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){const re=e.get("EXT_texture_filter_anisotropic");if(S.magFilter===Gt||S.minFilter!==xr&&S.minFilter!==es||S.type===Dn&&e.has("OES_texture_float_linear")===!1||a===!1&&S.type===ts&&e.has("OES_texture_half_float_linear")===!1)return;(S.anisotropy>1||n.get(S).__currentAnisotropy)&&(s.texParameterf(A,re.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(S.anisotropy,i.getMaxAnisotropy())),n.get(S).__currentAnisotropy=S.anisotropy)}}function ee(A,S){let U=!1;A.__webglInit===void 0&&(A.__webglInit=!0,S.addEventListener("dispose",E));const re=S.source;let ie=f.get(re);ie===void 0&&(ie={},f.set(re,ie));const te=F(S);if(te!==A.__cacheKey){ie[te]===void 0&&(ie[te]={texture:s.createTexture(),usedTimes:0},o.memory.textures++,U=!0),ie[te].usedTimes++;const Ee=ie[A.__cacheKey];Ee!==void 0&&(ie[A.__cacheKey].usedTimes--,Ee.usedTimes===0&&w(S)),A.__cacheKey=te,A.__webglTexture=ie[te].texture}return U}function pe(A,S,U){let re=s.TEXTURE_2D;(S.isDataArrayTexture||S.isCompressedArrayTexture)&&(re=s.TEXTURE_2D_ARRAY),S.isData3DTexture&&(re=s.TEXTURE_3D);const ie=ee(A,S),te=S.source;t.bindTexture(re,A.__webglTexture,s.TEXTURE0+U);const Ee=n.get(te);if(te.version!==Ee.__version||ie===!0){t.activeTexture(s.TEXTURE0+U);const fe=tt.getPrimaries(tt.workingColorSpace),ye=S.colorSpace===Jt?null:tt.getPrimaries(S.colorSpace),Pe=S.colorSpace===Jt||fe===ye?s.NONE:s.BROWSER_DEFAULT_WEBGL;s.pixelStorei(s.UNPACK_FLIP_Y_WEBGL,S.flipY),s.pixelStorei(s.UNPACK_PREMULTIPLY_ALPHA_WEBGL,S.premultiplyAlpha),s.pixelStorei(s.UNPACK_ALIGNMENT,S.unpackAlignment),s.pixelStorei(s.UNPACK_COLORSPACE_CONVERSION_WEBGL,Pe);const ke=p(S)&&m(S.image)===!1;let se=v(S.image,ke,!1,i.maxTextureSize);se=ge(S,se);const Ke=m(se)||a,Xe=r.convert(S.format,S.colorSpace);let Be=r.convert(S.type),Re=b(S.internalFormat,Xe,Be,S.colorSpace,S.isVideoTexture);X(re,S,Ke);let _e;const P=S.mipmaps,le=a&&S.isVideoTexture!==!0&&Re!==Hc,Ae=Ee.__version===void 0||ie===!0,Me=R(S,se,Ke);if(S.isDepthTexture)Re=s.DEPTH_COMPONENT,a?S.type===Dn?Re=s.DEPTH_COMPONENT32F:S.type===Ln?Re=s.DEPTH_COMPONENT24:S.type===Yn?Re=s.DEPTH24_STENCIL8:Re=s.DEPTH_COMPONENT16:S.type===Dn&&console.error("WebGLRenderer: Floating point depth texture requires WebGL2."),S.format===$n&&Re===s.DEPTH_COMPONENT&&S.type!==wo&&S.type!==Ln&&(console.warn("THREE.WebGLRenderer: Use UnsignedShortType or UnsignedIntType for DepthFormat DepthTexture."),S.type=Ln,Be=r.convert(S.type)),S.format===Fi&&Re===s.DEPTH_COMPONENT&&(Re=s.DEPTH_STENCIL,S.type!==Yn&&(console.warn("THREE.WebGLRenderer: Use UnsignedInt248Type for DepthStencilFormat DepthTexture."),S.type=Yn,Be=r.convert(S.type))),Ae&&(le?t.texStorage2D(s.TEXTURE_2D,1,Re,se.width,se.height):t.texImage2D(s.TEXTURE_2D,0,Re,se.width,se.height,0,Xe,Be,null));else if(S.isDataTexture)if(P.length>0&&Ke){le&&Ae&&t.texStorage2D(s.TEXTURE_2D,Me,Re,P[0].width,P[0].height);for(let oe=0,I=P.length;oe<I;oe++)_e=P[oe],le?t.texSubImage2D(s.TEXTURE_2D,oe,0,0,_e.width,_e.height,Xe,Be,_e.data):t.texImage2D(s.TEXTURE_2D,oe,Re,_e.width,_e.height,0,Xe,Be,_e.data);S.generateMipmaps=!1}else le?(Ae&&t.texStorage2D(s.TEXTURE_2D,Me,Re,se.width,se.height),t.texSubImage2D(s.TEXTURE_2D,0,0,0,se.width,se.height,Xe,Be,se.data)):t.texImage2D(s.TEXTURE_2D,0,Re,se.width,se.height,0,Xe,Be,se.data);else if(S.isCompressedTexture)if(S.isCompressedArrayTexture){le&&Ae&&t.texStorage3D(s.TEXTURE_2D_ARRAY,Me,Re,P[0].width,P[0].height,se.depth);for(let oe=0,I=P.length;oe<I;oe++)_e=P[oe],S.format!==cn?Xe!==null?le?t.compressedTexSubImage3D(s.TEXTURE_2D_ARRAY,oe,0,0,0,_e.width,_e.height,se.depth,Xe,_e.data,0,0):t.compressedTexImage3D(s.TEXTURE_2D_ARRAY,oe,Re,_e.width,_e.height,se.depth,0,_e.data,0,0):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):le?t.texSubImage3D(s.TEXTURE_2D_ARRAY,oe,0,0,0,_e.width,_e.height,se.depth,Xe,Be,_e.data):t.texImage3D(s.TEXTURE_2D_ARRAY,oe,Re,_e.width,_e.height,se.depth,0,Xe,Be,_e.data)}else{le&&Ae&&t.texStorage2D(s.TEXTURE_2D,Me,Re,P[0].width,P[0].height);for(let oe=0,I=P.length;oe<I;oe++)_e=P[oe],S.format!==cn?Xe!==null?le?t.compressedTexSubImage2D(s.TEXTURE_2D,oe,0,0,_e.width,_e.height,Xe,_e.data):t.compressedTexImage2D(s.TEXTURE_2D,oe,Re,_e.width,_e.height,0,_e.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):le?t.texSubImage2D(s.TEXTURE_2D,oe,0,0,_e.width,_e.height,Xe,Be,_e.data):t.texImage2D(s.TEXTURE_2D,oe,Re,_e.width,_e.height,0,Xe,Be,_e.data)}else if(S.isDataArrayTexture)le?(Ae&&t.texStorage3D(s.TEXTURE_2D_ARRAY,Me,Re,se.width,se.height,se.depth),t.texSubImage3D(s.TEXTURE_2D_ARRAY,0,0,0,0,se.width,se.height,se.depth,Xe,Be,se.data)):t.texImage3D(s.TEXTURE_2D_ARRAY,0,Re,se.width,se.height,se.depth,0,Xe,Be,se.data);else if(S.isData3DTexture)le?(Ae&&t.texStorage3D(s.TEXTURE_3D,Me,Re,se.width,se.height,se.depth),t.texSubImage3D(s.TEXTURE_3D,0,0,0,0,se.width,se.height,se.depth,Xe,Be,se.data)):t.texImage3D(s.TEXTURE_3D,0,Re,se.width,se.height,se.depth,0,Xe,Be,se.data);else if(S.isFramebufferTexture){if(Ae)if(le)t.texStorage2D(s.TEXTURE_2D,Me,Re,se.width,se.height);else{let oe=se.width,I=se.height;for(let he=0;he<Me;he++)t.texImage2D(s.TEXTURE_2D,he,Re,oe,I,0,Xe,Be,null),oe>>=1,I>>=1}}else if(P.length>0&&Ke){le&&Ae&&t.texStorage2D(s.TEXTURE_2D,Me,Re,P[0].width,P[0].height);for(let oe=0,I=P.length;oe<I;oe++)_e=P[oe],le?t.texSubImage2D(s.TEXTURE_2D,oe,0,0,Xe,Be,_e):t.texImage2D(s.TEXTURE_2D,oe,Re,Xe,Be,_e);S.generateMipmaps=!1}else le?(Ae&&t.texStorage2D(s.TEXTURE_2D,Me,Re,se.width,se.height),t.texSubImage2D(s.TEXTURE_2D,0,0,0,Xe,Be,se)):t.texImage2D(s.TEXTURE_2D,0,Re,Xe,Be,se);_(S,Ke)&&x(re),Ee.__version=te.version,S.onUpdate&&S.onUpdate(S)}A.__version=S.version}function Se(A,S,U){if(S.image.length!==6)return;const re=ee(A,S),ie=S.source;t.bindTexture(s.TEXTURE_CUBE_MAP,A.__webglTexture,s.TEXTURE0+U);const te=n.get(ie);if(ie.version!==te.__version||re===!0){t.activeTexture(s.TEXTURE0+U);const Ee=tt.getPrimaries(tt.workingColorSpace),fe=S.colorSpace===Jt?null:tt.getPrimaries(S.colorSpace),ye=S.colorSpace===Jt||Ee===fe?s.NONE:s.BROWSER_DEFAULT_WEBGL;s.pixelStorei(s.UNPACK_FLIP_Y_WEBGL,S.flipY),s.pixelStorei(s.UNPACK_PREMULTIPLY_ALPHA_WEBGL,S.premultiplyAlpha),s.pixelStorei(s.UNPACK_ALIGNMENT,S.unpackAlignment),s.pixelStorei(s.UNPACK_COLORSPACE_CONVERSION_WEBGL,ye);const Pe=S.isCompressedTexture||S.image[0].isCompressedTexture,ke=S.image[0]&&S.image[0].isDataTexture,se=[];for(let oe=0;oe<6;oe++)!Pe&&!ke?se[oe]=v(S.image[oe],!1,!0,i.maxCubemapSize):se[oe]=ke?S.image[oe].image:S.image[oe],se[oe]=ge(S,se[oe]);const Ke=se[0],Xe=m(Ke)||a,Be=r.convert(S.format,S.colorSpace),Re=r.convert(S.type),_e=b(S.internalFormat,Be,Re,S.colorSpace),P=a&&S.isVideoTexture!==!0,le=te.__version===void 0||re===!0;let Ae=R(S,Ke,Xe);X(s.TEXTURE_CUBE_MAP,S,Xe);let Me;if(Pe){P&&le&&t.texStorage2D(s.TEXTURE_CUBE_MAP,Ae,_e,Ke.width,Ke.height);for(let oe=0;oe<6;oe++){Me=se[oe].mipmaps;for(let I=0;I<Me.length;I++){const he=Me[I];S.format!==cn?Be!==null?P?t.compressedTexSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+oe,I,0,0,he.width,he.height,Be,he.data):t.compressedTexImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+oe,I,_e,he.width,he.height,0,he.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):P?t.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+oe,I,0,0,he.width,he.height,Be,Re,he.data):t.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+oe,I,_e,he.width,he.height,0,Be,Re,he.data)}}}else{Me=S.mipmaps,P&&le&&(Me.length>0&&Ae++,t.texStorage2D(s.TEXTURE_CUBE_MAP,Ae,_e,se[0].width,se[0].height));for(let oe=0;oe<6;oe++)if(ke){P?t.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+oe,0,0,0,se[oe].width,se[oe].height,Be,Re,se[oe].data):t.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+oe,0,_e,se[oe].width,se[oe].height,0,Be,Re,se[oe].data);for(let I=0;I<Me.length;I++){const me=Me[I].image[oe].image;P?t.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+oe,I+1,0,0,me.width,me.height,Be,Re,me.data):t.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+oe,I+1,_e,me.width,me.height,0,Be,Re,me.data)}}else{P?t.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+oe,0,0,0,Be,Re,se[oe]):t.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+oe,0,_e,Be,Re,se[oe]);for(let I=0;I<Me.length;I++){const he=Me[I];P?t.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+oe,I+1,0,0,Be,Re,he.image[oe]):t.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+oe,I+1,_e,Be,Re,he.image[oe])}}}_(S,Xe)&&x(s.TEXTURE_CUBE_MAP),te.__version=ie.version,S.onUpdate&&S.onUpdate(S)}A.__version=S.version}function ve(A,S,U,re,ie,te){const Ee=r.convert(U.format,U.colorSpace),fe=r.convert(U.type),ye=b(U.internalFormat,Ee,fe,U.colorSpace);if(!n.get(S).__hasExternalTextures){const ke=Math.max(1,S.width>>te),se=Math.max(1,S.height>>te);ie===s.TEXTURE_3D||ie===s.TEXTURE_2D_ARRAY?t.texImage3D(ie,te,ye,ke,se,S.depth,0,Ee,fe,null):t.texImage2D(ie,te,ye,ke,se,0,Ee,fe,null)}t.bindFramebuffer(s.FRAMEBUFFER,A),Y(S)?c.framebufferTexture2DMultisampleEXT(s.FRAMEBUFFER,re,ie,n.get(U).__webglTexture,0,ae(S)):(ie===s.TEXTURE_2D||ie>=s.TEXTURE_CUBE_MAP_POSITIVE_X&&ie<=s.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&s.framebufferTexture2D(s.FRAMEBUFFER,re,ie,n.get(U).__webglTexture,te),t.bindFramebuffer(s.FRAMEBUFFER,null)}function De(A,S,U){if(s.bindRenderbuffer(s.RENDERBUFFER,A),S.depthBuffer&&!S.stencilBuffer){let re=a===!0?s.DEPTH_COMPONENT24:s.DEPTH_COMPONENT16;if(U||Y(S)){const ie=S.depthTexture;ie&&ie.isDepthTexture&&(ie.type===Dn?re=s.DEPTH_COMPONENT32F:ie.type===Ln&&(re=s.DEPTH_COMPONENT24));const te=ae(S);Y(S)?c.renderbufferStorageMultisampleEXT(s.RENDERBUFFER,te,re,S.width,S.height):s.renderbufferStorageMultisample(s.RENDERBUFFER,te,re,S.width,S.height)}else s.renderbufferStorage(s.RENDERBUFFER,re,S.width,S.height);s.framebufferRenderbuffer(s.FRAMEBUFFER,s.DEPTH_ATTACHMENT,s.RENDERBUFFER,A)}else if(S.depthBuffer&&S.stencilBuffer){const re=ae(S);U&&Y(S)===!1?s.renderbufferStorageMultisample(s.RENDERBUFFER,re,s.DEPTH24_STENCIL8,S.width,S.height):Y(S)?c.renderbufferStorageMultisampleEXT(s.RENDERBUFFER,re,s.DEPTH24_STENCIL8,S.width,S.height):s.renderbufferStorage(s.RENDERBUFFER,s.DEPTH_STENCIL,S.width,S.height),s.framebufferRenderbuffer(s.FRAMEBUFFER,s.DEPTH_STENCIL_ATTACHMENT,s.RENDERBUFFER,A)}else{const re=S.isWebGLMultipleRenderTargets===!0?S.texture:[S.texture];for(let ie=0;ie<re.length;ie++){const te=re[ie],Ee=r.convert(te.format,te.colorSpace),fe=r.convert(te.type),ye=b(te.internalFormat,Ee,fe,te.colorSpace),Pe=ae(S);U&&Y(S)===!1?s.renderbufferStorageMultisample(s.RENDERBUFFER,Pe,ye,S.width,S.height):Y(S)?c.renderbufferStorageMultisampleEXT(s.RENDERBUFFER,Pe,ye,S.width,S.height):s.renderbufferStorage(s.RENDERBUFFER,ye,S.width,S.height)}}s.bindRenderbuffer(s.RENDERBUFFER,null)}function Ie(A,S){if(S&&S.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(t.bindFramebuffer(s.FRAMEBUFFER,A),!(S.depthTexture&&S.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");(!n.get(S.depthTexture).__webglTexture||S.depthTexture.image.width!==S.width||S.depthTexture.image.height!==S.height)&&(S.depthTexture.image.width=S.width,S.depthTexture.image.height=S.height,S.depthTexture.needsUpdate=!0),G(S.depthTexture,0);const re=n.get(S.depthTexture).__webglTexture,ie=ae(S);if(S.depthTexture.format===$n)Y(S)?c.framebufferTexture2DMultisampleEXT(s.FRAMEBUFFER,s.DEPTH_ATTACHMENT,s.TEXTURE_2D,re,0,ie):s.framebufferTexture2D(s.FRAMEBUFFER,s.DEPTH_ATTACHMENT,s.TEXTURE_2D,re,0);else if(S.depthTexture.format===Fi)Y(S)?c.framebufferTexture2DMultisampleEXT(s.FRAMEBUFFER,s.DEPTH_STENCIL_ATTACHMENT,s.TEXTURE_2D,re,0,ie):s.framebufferTexture2D(s.FRAMEBUFFER,s.DEPTH_STENCIL_ATTACHMENT,s.TEXTURE_2D,re,0);else throw new Error("Unknown depthTexture format")}function we(A){const S=n.get(A),U=A.isWebGLCubeRenderTarget===!0;if(A.depthTexture&&!S.__autoAllocateDepthBuffer){if(U)throw new Error("target.depthTexture not supported in Cube render targets");Ie(S.__webglFramebuffer,A)}else if(U){S.__webglDepthbuffer=[];for(let re=0;re<6;re++)t.bindFramebuffer(s.FRAMEBUFFER,S.__webglFramebuffer[re]),S.__webglDepthbuffer[re]=s.createRenderbuffer(),De(S.__webglDepthbuffer[re],A,!1)}else t.bindFramebuffer(s.FRAMEBUFFER,S.__webglFramebuffer),S.__webglDepthbuffer=s.createRenderbuffer(),De(S.__webglDepthbuffer,A,!1);t.bindFramebuffer(s.FRAMEBUFFER,null)}function ze(A,S,U){const re=n.get(A);S!==void 0&&ve(re.__webglFramebuffer,A,A.texture,s.COLOR_ATTACHMENT0,s.TEXTURE_2D,0),U!==void 0&&we(A)}function D(A){const S=A.texture,U=n.get(A),re=n.get(S);A.addEventListener("dispose",O),A.isWebGLMultipleRenderTargets!==!0&&(re.__webglTexture===void 0&&(re.__webglTexture=s.createTexture()),re.__version=S.version,o.memory.textures++);const ie=A.isWebGLCubeRenderTarget===!0,te=A.isWebGLMultipleRenderTargets===!0,Ee=m(A)||a;if(ie){U.__webglFramebuffer=[];for(let fe=0;fe<6;fe++)if(a&&S.mipmaps&&S.mipmaps.length>0){U.__webglFramebuffer[fe]=[];for(let ye=0;ye<S.mipmaps.length;ye++)U.__webglFramebuffer[fe][ye]=s.createFramebuffer()}else U.__webglFramebuffer[fe]=s.createFramebuffer()}else{if(a&&S.mipmaps&&S.mipmaps.length>0){U.__webglFramebuffer=[];for(let fe=0;fe<S.mipmaps.length;fe++)U.__webglFramebuffer[fe]=s.createFramebuffer()}else U.__webglFramebuffer=s.createFramebuffer();if(te)if(i.drawBuffers){const fe=A.texture;for(let ye=0,Pe=fe.length;ye<Pe;ye++){const ke=n.get(fe[ye]);ke.__webglTexture===void 0&&(ke.__webglTexture=s.createTexture(),o.memory.textures++)}}else console.warn("THREE.WebGLRenderer: WebGLMultipleRenderTargets can only be used with WebGL2 or WEBGL_draw_buffers extension.");if(a&&A.samples>0&&Y(A)===!1){const fe=te?S:[S];U.__webglMultisampledFramebuffer=s.createFramebuffer(),U.__webglColorRenderbuffer=[],t.bindFramebuffer(s.FRAMEBUFFER,U.__webglMultisampledFramebuffer);for(let ye=0;ye<fe.length;ye++){const Pe=fe[ye];U.__webglColorRenderbuffer[ye]=s.createRenderbuffer(),s.bindRenderbuffer(s.RENDERBUFFER,U.__webglColorRenderbuffer[ye]);const ke=r.convert(Pe.format,Pe.colorSpace),se=r.convert(Pe.type),Ke=b(Pe.internalFormat,ke,se,Pe.colorSpace,A.isXRRenderTarget===!0),Xe=ae(A);s.renderbufferStorageMultisample(s.RENDERBUFFER,Xe,Ke,A.width,A.height),s.framebufferRenderbuffer(s.FRAMEBUFFER,s.COLOR_ATTACHMENT0+ye,s.RENDERBUFFER,U.__webglColorRenderbuffer[ye])}s.bindRenderbuffer(s.RENDERBUFFER,null),A.depthBuffer&&(U.__webglDepthRenderbuffer=s.createRenderbuffer(),De(U.__webglDepthRenderbuffer,A,!0)),t.bindFramebuffer(s.FRAMEBUFFER,null)}}if(ie){t.bindTexture(s.TEXTURE_CUBE_MAP,re.__webglTexture),X(s.TEXTURE_CUBE_MAP,S,Ee);for(let fe=0;fe<6;fe++)if(a&&S.mipmaps&&S.mipmaps.length>0)for(let ye=0;ye<S.mipmaps.length;ye++)ve(U.__webglFramebuffer[fe][ye],A,S,s.COLOR_ATTACHMENT0,s.TEXTURE_CUBE_MAP_POSITIVE_X+fe,ye);else ve(U.__webglFramebuffer[fe],A,S,s.COLOR_ATTACHMENT0,s.TEXTURE_CUBE_MAP_POSITIVE_X+fe,0);_(S,Ee)&&x(s.TEXTURE_CUBE_MAP),t.unbindTexture()}else if(te){const fe=A.texture;for(let ye=0,Pe=fe.length;ye<Pe;ye++){const ke=fe[ye],se=n.get(ke);t.bindTexture(s.TEXTURE_2D,se.__webglTexture),X(s.TEXTURE_2D,ke,Ee),ve(U.__webglFramebuffer,A,ke,s.COLOR_ATTACHMENT0+ye,s.TEXTURE_2D,0),_(ke,Ee)&&x(s.TEXTURE_2D)}t.unbindTexture()}else{let fe=s.TEXTURE_2D;if((A.isWebGL3DRenderTarget||A.isWebGLArrayRenderTarget)&&(a?fe=A.isWebGL3DRenderTarget?s.TEXTURE_3D:s.TEXTURE_2D_ARRAY:console.error("THREE.WebGLTextures: THREE.Data3DTexture and THREE.DataArrayTexture only supported with WebGL2.")),t.bindTexture(fe,re.__webglTexture),X(fe,S,Ee),a&&S.mipmaps&&S.mipmaps.length>0)for(let ye=0;ye<S.mipmaps.length;ye++)ve(U.__webglFramebuffer[ye],A,S,s.COLOR_ATTACHMENT0,fe,ye);else ve(U.__webglFramebuffer,A,S,s.COLOR_ATTACHMENT0,fe,0);_(S,Ee)&&x(fe),t.unbindTexture()}A.depthBuffer&&we(A)}function ue(A){const S=m(A)||a,U=A.isWebGLMultipleRenderTargets===!0?A.texture:[A.texture];for(let re=0,ie=U.length;re<ie;re++){const te=U[re];if(_(te,S)){const Ee=A.isWebGLCubeRenderTarget?s.TEXTURE_CUBE_MAP:s.TEXTURE_2D,fe=n.get(te).__webglTexture;t.bindTexture(Ee,fe),x(Ee),t.unbindTexture()}}}function $(A){if(a&&A.samples>0&&Y(A)===!1){const S=A.isWebGLMultipleRenderTargets?A.texture:[A.texture],U=A.width,re=A.height;let ie=s.COLOR_BUFFER_BIT;const te=[],Ee=A.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT,fe=n.get(A),ye=A.isWebGLMultipleRenderTargets===!0;if(ye)for(let Pe=0;Pe<S.length;Pe++)t.bindFramebuffer(s.FRAMEBUFFER,fe.__webglMultisampledFramebuffer),s.framebufferRenderbuffer(s.FRAMEBUFFER,s.COLOR_ATTACHMENT0+Pe,s.RENDERBUFFER,null),t.bindFramebuffer(s.FRAMEBUFFER,fe.__webglFramebuffer),s.framebufferTexture2D(s.DRAW_FRAMEBUFFER,s.COLOR_ATTACHMENT0+Pe,s.TEXTURE_2D,null,0);t.bindFramebuffer(s.READ_FRAMEBUFFER,fe.__webglMultisampledFramebuffer),t.bindFramebuffer(s.DRAW_FRAMEBUFFER,fe.__webglFramebuffer);for(let Pe=0;Pe<S.length;Pe++){te.push(s.COLOR_ATTACHMENT0+Pe),A.depthBuffer&&te.push(Ee);const ke=fe.__ignoreDepthValues!==void 0?fe.__ignoreDepthValues:!1;if(ke===!1&&(A.depthBuffer&&(ie|=s.DEPTH_BUFFER_BIT),A.stencilBuffer&&(ie|=s.STENCIL_BUFFER_BIT)),ye&&s.framebufferRenderbuffer(s.READ_FRAMEBUFFER,s.COLOR_ATTACHMENT0,s.RENDERBUFFER,fe.__webglColorRenderbuffer[Pe]),ke===!0&&(s.invalidateFramebuffer(s.READ_FRAMEBUFFER,[Ee]),s.invalidateFramebuffer(s.DRAW_FRAMEBUFFER,[Ee])),ye){const se=n.get(S[Pe]).__webglTexture;s.framebufferTexture2D(s.DRAW_FRAMEBUFFER,s.COLOR_ATTACHMENT0,s.TEXTURE_2D,se,0)}s.blitFramebuffer(0,0,U,re,0,0,U,re,ie,s.NEAREST),l&&s.invalidateFramebuffer(s.READ_FRAMEBUFFER,te)}if(t.bindFramebuffer(s.READ_FRAMEBUFFER,null),t.bindFramebuffer(s.DRAW_FRAMEBUFFER,null),ye)for(let Pe=0;Pe<S.length;Pe++){t.bindFramebuffer(s.FRAMEBUFFER,fe.__webglMultisampledFramebuffer),s.framebufferRenderbuffer(s.FRAMEBUFFER,s.COLOR_ATTACHMENT0+Pe,s.RENDERBUFFER,fe.__webglColorRenderbuffer[Pe]);const ke=n.get(S[Pe]).__webglTexture;t.bindFramebuffer(s.FRAMEBUFFER,fe.__webglFramebuffer),s.framebufferTexture2D(s.DRAW_FRAMEBUFFER,s.COLOR_ATTACHMENT0+Pe,s.TEXTURE_2D,ke,0)}t.bindFramebuffer(s.DRAW_FRAMEBUFFER,fe.__webglMultisampledFramebuffer)}}function ae(A){return Math.min(i.maxSamples,A.samples)}function Y(A){const S=n.get(A);return a&&A.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&S.__useRenderToTexture!==!1}function Te(A){const S=o.render.frame;h.get(A)!==S&&(h.set(A,S),A.update())}function ge(A,S){const U=A.colorSpace,re=A.format,ie=A.type;return A.isCompressedTexture===!0||A.isVideoTexture===!0||A.format===go||U!==En&&U!==Jt&&(tt.getTransfer(U)===rt?a===!1?e.has("EXT_sRGB")===!0&&re===cn?(A.format=go,A.minFilter=Ht,A.generateMipmaps=!1):S=qc.sRGBToLinear(S):(re!==cn||ie!==Un)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",U)),S}this.allocateTextureUnit=L,this.resetTextureUnits=q,this.setTexture2D=G,this.setTexture2DArray=Z,this.setTexture3D=K,this.setTextureCube=J,this.rebindTextures=ze,this.setupRenderTarget=D,this.updateRenderTargetMipmap=ue,this.updateMultisampleRenderTarget=$,this.setupDepthRenderbuffer=we,this.setupFrameBufferTexture=ve,this.useMultisampledRTT=Y}function Lm(s,e,t){const n=t.isWebGL2;function i(r,o=Jt){let a;const c=tt.getTransfer(o);if(r===Un)return s.UNSIGNED_BYTE;if(r===Fc)return s.UNSIGNED_SHORT_4_4_4_4;if(r===zc)return s.UNSIGNED_SHORT_5_5_5_1;if(r===uh)return s.BYTE;if(r===dh)return s.SHORT;if(r===wo)return s.UNSIGNED_SHORT;if(r===Uc)return s.INT;if(r===Ln)return s.UNSIGNED_INT;if(r===Dn)return s.FLOAT;if(r===ts)return n?s.HALF_FLOAT:(a=e.get("OES_texture_half_float"),a!==null?a.HALF_FLOAT_OES:null);if(r===fh)return s.ALPHA;if(r===cn)return s.RGBA;if(r===ph)return s.LUMINANCE;if(r===mh)return s.LUMINANCE_ALPHA;if(r===$n)return s.DEPTH_COMPONENT;if(r===Fi)return s.DEPTH_STENCIL;if(r===go)return a=e.get("EXT_sRGB"),a!==null?a.SRGB_ALPHA_EXT:null;if(r===gh)return s.RED;if(r===Bc)return s.RED_INTEGER;if(r===vh)return s.RG;if(r===Gc)return s.RG_INTEGER;if(r===kc)return s.RGBA_INTEGER;if(r===yr||r===br||r===Mr||r===Sr)if(c===rt)if(a=e.get("WEBGL_compressed_texture_s3tc_srgb"),a!==null){if(r===yr)return a.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(r===br)return a.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(r===Mr)return a.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(r===Sr)return a.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(a=e.get("WEBGL_compressed_texture_s3tc"),a!==null){if(r===yr)return a.COMPRESSED_RGB_S3TC_DXT1_EXT;if(r===br)return a.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(r===Mr)return a.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(r===Sr)return a.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(r===Ko||r===Jo||r===Qo||r===ea)if(a=e.get("WEBGL_compressed_texture_pvrtc"),a!==null){if(r===Ko)return a.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(r===Jo)return a.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(r===Qo)return a.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(r===ea)return a.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(r===Hc)return a=e.get("WEBGL_compressed_texture_etc1"),a!==null?a.COMPRESSED_RGB_ETC1_WEBGL:null;if(r===ta||r===na)if(a=e.get("WEBGL_compressed_texture_etc"),a!==null){if(r===ta)return c===rt?a.COMPRESSED_SRGB8_ETC2:a.COMPRESSED_RGB8_ETC2;if(r===na)return c===rt?a.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:a.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(r===ia||r===sa||r===ra||r===oa||r===aa||r===ca||r===la||r===ha||r===ua||r===da||r===fa||r===pa||r===ma||r===ga)if(a=e.get("WEBGL_compressed_texture_astc"),a!==null){if(r===ia)return c===rt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:a.COMPRESSED_RGBA_ASTC_4x4_KHR;if(r===sa)return c===rt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:a.COMPRESSED_RGBA_ASTC_5x4_KHR;if(r===ra)return c===rt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:a.COMPRESSED_RGBA_ASTC_5x5_KHR;if(r===oa)return c===rt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:a.COMPRESSED_RGBA_ASTC_6x5_KHR;if(r===aa)return c===rt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:a.COMPRESSED_RGBA_ASTC_6x6_KHR;if(r===ca)return c===rt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:a.COMPRESSED_RGBA_ASTC_8x5_KHR;if(r===la)return c===rt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:a.COMPRESSED_RGBA_ASTC_8x6_KHR;if(r===ha)return c===rt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:a.COMPRESSED_RGBA_ASTC_8x8_KHR;if(r===ua)return c===rt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:a.COMPRESSED_RGBA_ASTC_10x5_KHR;if(r===da)return c===rt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:a.COMPRESSED_RGBA_ASTC_10x6_KHR;if(r===fa)return c===rt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:a.COMPRESSED_RGBA_ASTC_10x8_KHR;if(r===pa)return c===rt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:a.COMPRESSED_RGBA_ASTC_10x10_KHR;if(r===ma)return c===rt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:a.COMPRESSED_RGBA_ASTC_12x10_KHR;if(r===ga)return c===rt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:a.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(r===Er||r===va||r===_a)if(a=e.get("EXT_texture_compression_bptc"),a!==null){if(r===Er)return c===rt?a.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:a.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(r===va)return a.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(r===_a)return a.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(r===_h||r===xa||r===ya||r===ba)if(a=e.get("EXT_texture_compression_rgtc"),a!==null){if(r===Er)return a.COMPRESSED_RED_RGTC1_EXT;if(r===xa)return a.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(r===ya)return a.COMPRESSED_RED_GREEN_RGTC2_EXT;if(r===ba)return a.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return r===Yn?n?s.UNSIGNED_INT_24_8:(a=e.get("WEBGL_depth_texture"),a!==null?a.UNSIGNED_INT_24_8_WEBGL:null):s[r]!==void 0?s[r]:null}return{convert:i}}class Dm extends Tt{constructor(e=[]){super(),this.isArrayCamera=!0,this.cameras=e}}class ct extends vt{constructor(){super(),this.isGroup=!0,this.type="Group"}}const Om={type:"move"};class Yr{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new ct,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new ct,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new y,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new y),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new ct,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new y,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new y),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){const t=this._hand;if(t)for(const n of e.hand.values())this._getHandJoint(t,n)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,t,n){let i=null,r=null,o=null;const a=this._targetRay,c=this._grip,l=this._hand;if(e&&t.session.visibilityState!=="visible-blurred"){if(l&&e.hand){o=!0;for(const v of e.hand.values()){const m=t.getJointPose(v,n),p=this._getHandJoint(l,v);m!==null&&(p.matrix.fromArray(m.transform.matrix),p.matrix.decompose(p.position,p.rotation,p.scale),p.matrixWorldNeedsUpdate=!0,p.jointRadius=m.radius),p.visible=m!==null}const h=l.joints["index-finger-tip"],u=l.joints["thumb-tip"],f=h.position.distanceTo(u.position),d=.02,g=.005;l.inputState.pinching&&f>d+g?(l.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!l.inputState.pinching&&f<=d-g&&(l.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else c!==null&&e.gripSpace&&(r=t.getPose(e.gripSpace,n),r!==null&&(c.matrix.fromArray(r.transform.matrix),c.matrix.decompose(c.position,c.rotation,c.scale),c.matrixWorldNeedsUpdate=!0,r.linearVelocity?(c.hasLinearVelocity=!0,c.linearVelocity.copy(r.linearVelocity)):c.hasLinearVelocity=!1,r.angularVelocity?(c.hasAngularVelocity=!0,c.angularVelocity.copy(r.angularVelocity)):c.hasAngularVelocity=!1));a!==null&&(i=t.getPose(e.targetRaySpace,n),i===null&&r!==null&&(i=r),i!==null&&(a.matrix.fromArray(i.transform.matrix),a.matrix.decompose(a.position,a.rotation,a.scale),a.matrixWorldNeedsUpdate=!0,i.linearVelocity?(a.hasLinearVelocity=!0,a.linearVelocity.copy(i.linearVelocity)):a.hasLinearVelocity=!1,i.angularVelocity?(a.hasAngularVelocity=!0,a.angularVelocity.copy(i.angularVelocity)):a.hasAngularVelocity=!1,this.dispatchEvent(Om)))}return a!==null&&(a.visible=i!==null),c!==null&&(c.visible=r!==null),l!==null&&(l.visible=o!==null),this}_getHandJoint(e,t){if(e.joints[t.jointName]===void 0){const n=new ct;n.matrixAutoUpdate=!1,n.visible=!1,e.joints[t.jointName]=n,e.add(n)}return e.joints[t.jointName]}}class Im extends ti{constructor(e,t){super();const n=this;let i=null,r=1,o=null,a="local-floor",c=1,l=null,h=null,u=null,f=null,d=null,g=null;const v=t.getContextAttributes();let m=null,p=null;const _=[],x=[],b=new j;let R=null;const T=new Tt;T.layers.enable(1),T.viewport=new Et;const E=new Tt;E.layers.enable(2),E.viewport=new Et;const O=[T,E],M=new Dm;M.layers.enable(1),M.layers.enable(2);let w=null,N=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(X){let ee=_[X];return ee===void 0&&(ee=new Yr,_[X]=ee),ee.getTargetRaySpace()},this.getControllerGrip=function(X){let ee=_[X];return ee===void 0&&(ee=new Yr,_[X]=ee),ee.getGripSpace()},this.getHand=function(X){let ee=_[X];return ee===void 0&&(ee=new Yr,_[X]=ee),ee.getHandSpace()};function B(X){const ee=x.indexOf(X.inputSource);if(ee===-1)return;const pe=_[ee];pe!==void 0&&(pe.update(X.inputSource,X.frame,l||o),pe.dispatchEvent({type:X.type,data:X.inputSource}))}function q(){i.removeEventListener("select",B),i.removeEventListener("selectstart",B),i.removeEventListener("selectend",B),i.removeEventListener("squeeze",B),i.removeEventListener("squeezestart",B),i.removeEventListener("squeezeend",B),i.removeEventListener("end",q),i.removeEventListener("inputsourceschange",L);for(let X=0;X<_.length;X++){const ee=x[X];ee!==null&&(x[X]=null,_[X].disconnect(ee))}w=null,N=null,e.setRenderTarget(m),d=null,f=null,u=null,i=null,p=null,ce.stop(),n.isPresenting=!1,e.setPixelRatio(R),e.setSize(b.width,b.height,!1),n.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(X){r=X,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(X){a=X,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return l||o},this.setReferenceSpace=function(X){l=X},this.getBaseLayer=function(){return f!==null?f:d},this.getBinding=function(){return u},this.getFrame=function(){return g},this.getSession=function(){return i},this.setSession=async function(X){if(i=X,i!==null){if(m=e.getRenderTarget(),i.addEventListener("select",B),i.addEventListener("selectstart",B),i.addEventListener("selectend",B),i.addEventListener("squeeze",B),i.addEventListener("squeezestart",B),i.addEventListener("squeezeend",B),i.addEventListener("end",q),i.addEventListener("inputsourceschange",L),v.xrCompatible!==!0&&await t.makeXRCompatible(),R=e.getPixelRatio(),e.getSize(b),i.renderState.layers===void 0||e.capabilities.isWebGL2===!1){const ee={antialias:i.renderState.layers===void 0?v.antialias:!0,alpha:!0,depth:v.depth,stencil:v.stencil,framebufferScaleFactor:r};d=new XRWebGLLayer(i,t,ee),i.updateRenderState({baseLayer:d}),e.setPixelRatio(1),e.setSize(d.framebufferWidth,d.framebufferHeight,!1),p=new Jn(d.framebufferWidth,d.framebufferHeight,{format:cn,type:Un,colorSpace:e.outputColorSpace,stencilBuffer:v.stencil})}else{let ee=null,pe=null,Se=null;v.depth&&(Se=v.stencil?t.DEPTH24_STENCIL8:t.DEPTH_COMPONENT24,ee=v.stencil?Fi:$n,pe=v.stencil?Yn:Ln);const ve={colorFormat:t.RGBA8,depthFormat:Se,scaleFactor:r};u=new XRWebGLBinding(i,t),f=u.createProjectionLayer(ve),i.updateRenderState({layers:[f]}),e.setPixelRatio(1),e.setSize(f.textureWidth,f.textureHeight,!1),p=new Jn(f.textureWidth,f.textureHeight,{format:cn,type:Un,depthTexture:new il(f.textureWidth,f.textureHeight,pe,void 0,void 0,void 0,void 0,void 0,void 0,ee),stencilBuffer:v.stencil,colorSpace:e.outputColorSpace,samples:v.antialias?4:0});const De=e.properties.get(p);De.__ignoreDepthValues=f.ignoreDepthValues}p.isXRRenderTarget=!0,this.setFoveation(c),l=null,o=await i.requestReferenceSpace(a),ce.setContext(i),ce.start(),n.isPresenting=!0,n.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(i!==null)return i.environmentBlendMode};function L(X){for(let ee=0;ee<X.removed.length;ee++){const pe=X.removed[ee],Se=x.indexOf(pe);Se>=0&&(x[Se]=null,_[Se].disconnect(pe))}for(let ee=0;ee<X.added.length;ee++){const pe=X.added[ee];let Se=x.indexOf(pe);if(Se===-1){for(let De=0;De<_.length;De++)if(De>=x.length){x.push(pe),Se=De;break}else if(x[De]===null){x[De]=pe,Se=De;break}if(Se===-1)break}const ve=_[Se];ve&&ve.connect(pe)}}const F=new y,G=new y;function Z(X,ee,pe){F.setFromMatrixPosition(ee.matrixWorld),G.setFromMatrixPosition(pe.matrixWorld);const Se=F.distanceTo(G),ve=ee.projectionMatrix.elements,De=pe.projectionMatrix.elements,Ie=ve[14]/(ve[10]-1),we=ve[14]/(ve[10]+1),ze=(ve[9]+1)/ve[5],D=(ve[9]-1)/ve[5],ue=(ve[8]-1)/ve[0],$=(De[8]+1)/De[0],ae=Ie*ue,Y=Ie*$,Te=Se/(-ue+$),ge=Te*-ue;ee.matrixWorld.decompose(X.position,X.quaternion,X.scale),X.translateX(ge),X.translateZ(Te),X.matrixWorld.compose(X.position,X.quaternion,X.scale),X.matrixWorldInverse.copy(X.matrixWorld).invert();const A=Ie+Te,S=we+Te,U=ae-ge,re=Y+(Se-ge),ie=ze*we/S*A,te=D*we/S*A;X.projectionMatrix.makePerspective(U,re,ie,te,A,S),X.projectionMatrixInverse.copy(X.projectionMatrix).invert()}function K(X,ee){ee===null?X.matrixWorld.copy(X.matrix):X.matrixWorld.multiplyMatrices(ee.matrixWorld,X.matrix),X.matrixWorldInverse.copy(X.matrixWorld).invert()}this.updateCamera=function(X){if(i===null)return;M.near=E.near=T.near=X.near,M.far=E.far=T.far=X.far,(w!==M.near||N!==M.far)&&(i.updateRenderState({depthNear:M.near,depthFar:M.far}),w=M.near,N=M.far);const ee=X.parent,pe=M.cameras;K(M,ee);for(let Se=0;Se<pe.length;Se++)K(pe[Se],ee);pe.length===2?Z(M,T,E):M.projectionMatrix.copy(T.projectionMatrix),J(X,M,ee)};function J(X,ee,pe){pe===null?X.matrix.copy(ee.matrixWorld):(X.matrix.copy(pe.matrixWorld),X.matrix.invert(),X.matrix.multiply(ee.matrixWorld)),X.matrix.decompose(X.position,X.quaternion,X.scale),X.updateMatrixWorld(!0),X.projectionMatrix.copy(ee.projectionMatrix),X.projectionMatrixInverse.copy(ee.projectionMatrixInverse),X.isPerspectiveCamera&&(X.fov=vo*2*Math.atan(1/X.projectionMatrix.elements[5]),X.zoom=1)}this.getCamera=function(){return M},this.getFoveation=function(){if(!(f===null&&d===null))return c},this.setFoveation=function(X){c=X,f!==null&&(f.fixedFoveation=X),d!==null&&d.fixedFoveation!==void 0&&(d.fixedFoveation=X)};let Q=null;function ne(X,ee){if(h=ee.getViewerPose(l||o),g=ee,h!==null){const pe=h.views;d!==null&&(e.setRenderTargetFramebuffer(p,d.framebuffer),e.setRenderTarget(p));let Se=!1;pe.length!==M.cameras.length&&(M.cameras.length=0,Se=!0);for(let ve=0;ve<pe.length;ve++){const De=pe[ve];let Ie=null;if(d!==null)Ie=d.getViewport(De);else{const ze=u.getViewSubImage(f,De);Ie=ze.viewport,ve===0&&(e.setRenderTargetTextures(p,ze.colorTexture,f.ignoreDepthValues?void 0:ze.depthStencilTexture),e.setRenderTarget(p))}let we=O[ve];we===void 0&&(we=new Tt,we.layers.enable(ve),we.viewport=new Et,O[ve]=we),we.matrix.fromArray(De.transform.matrix),we.matrix.decompose(we.position,we.quaternion,we.scale),we.projectionMatrix.fromArray(De.projectionMatrix),we.projectionMatrixInverse.copy(we.projectionMatrix).invert(),we.viewport.set(Ie.x,Ie.y,Ie.width,Ie.height),ve===0&&(M.matrix.copy(we.matrix),M.matrix.decompose(M.position,M.quaternion,M.scale)),Se===!0&&M.cameras.push(we)}}for(let pe=0;pe<_.length;pe++){const Se=x[pe],ve=_[pe];Se!==null&&ve!==void 0&&ve.update(Se,ee,l||o)}Q&&Q(X,ee),ee.detectedPlanes&&n.dispatchEvent({type:"planesdetected",data:ee}),g=null}const ce=new nl;ce.setAnimationLoop(ne),this.setAnimationLoop=function(X){Q=X},this.dispose=function(){}}}function Nm(s,e){function t(m,p){m.matrixAutoUpdate===!0&&m.updateMatrix(),p.value.copy(m.matrix)}function n(m,p){p.color.getRGB(m.fogColor.value,Qc(s)),p.isFog?(m.fogNear.value=p.near,m.fogFar.value=p.far):p.isFogExp2&&(m.fogDensity.value=p.density)}function i(m,p,_,x,b){p.isMeshBasicMaterial||p.isMeshLambertMaterial?r(m,p):p.isMeshToonMaterial?(r(m,p),u(m,p)):p.isMeshPhongMaterial?(r(m,p),h(m,p)):p.isMeshStandardMaterial?(r(m,p),f(m,p),p.isMeshPhysicalMaterial&&d(m,p,b)):p.isMeshMatcapMaterial?(r(m,p),g(m,p)):p.isMeshDepthMaterial?r(m,p):p.isMeshDistanceMaterial?(r(m,p),v(m,p)):p.isMeshNormalMaterial?r(m,p):p.isLineBasicMaterial?(o(m,p),p.isLineDashedMaterial&&a(m,p)):p.isPointsMaterial?c(m,p,_,x):p.isSpriteMaterial?l(m,p):p.isShadowMaterial?(m.color.value.copy(p.color),m.opacity.value=p.opacity):p.isShaderMaterial&&(p.uniformsNeedUpdate=!1)}function r(m,p){m.opacity.value=p.opacity,p.color&&m.diffuse.value.copy(p.color),p.emissive&&m.emissive.value.copy(p.emissive).multiplyScalar(p.emissiveIntensity),p.map&&(m.map.value=p.map,t(p.map,m.mapTransform)),p.alphaMap&&(m.alphaMap.value=p.alphaMap,t(p.alphaMap,m.alphaMapTransform)),p.bumpMap&&(m.bumpMap.value=p.bumpMap,t(p.bumpMap,m.bumpMapTransform),m.bumpScale.value=p.bumpScale,p.side===kt&&(m.bumpScale.value*=-1)),p.normalMap&&(m.normalMap.value=p.normalMap,t(p.normalMap,m.normalMapTransform),m.normalScale.value.copy(p.normalScale),p.side===kt&&m.normalScale.value.negate()),p.displacementMap&&(m.displacementMap.value=p.displacementMap,t(p.displacementMap,m.displacementMapTransform),m.displacementScale.value=p.displacementScale,m.displacementBias.value=p.displacementBias),p.emissiveMap&&(m.emissiveMap.value=p.emissiveMap,t(p.emissiveMap,m.emissiveMapTransform)),p.specularMap&&(m.specularMap.value=p.specularMap,t(p.specularMap,m.specularMapTransform)),p.alphaTest>0&&(m.alphaTest.value=p.alphaTest);const _=e.get(p).envMap;if(_&&(m.envMap.value=_,m.flipEnvMap.value=_.isCubeTexture&&_.isRenderTargetTexture===!1?-1:1,m.reflectivity.value=p.reflectivity,m.ior.value=p.ior,m.refractionRatio.value=p.refractionRatio),p.lightMap){m.lightMap.value=p.lightMap;const x=s._useLegacyLights===!0?Math.PI:1;m.lightMapIntensity.value=p.lightMapIntensity*x,t(p.lightMap,m.lightMapTransform)}p.aoMap&&(m.aoMap.value=p.aoMap,m.aoMapIntensity.value=p.aoMapIntensity,t(p.aoMap,m.aoMapTransform))}function o(m,p){m.diffuse.value.copy(p.color),m.opacity.value=p.opacity,p.map&&(m.map.value=p.map,t(p.map,m.mapTransform))}function a(m,p){m.dashSize.value=p.dashSize,m.totalSize.value=p.dashSize+p.gapSize,m.scale.value=p.scale}function c(m,p,_,x){m.diffuse.value.copy(p.color),m.opacity.value=p.opacity,m.size.value=p.size*_,m.scale.value=x*.5,p.map&&(m.map.value=p.map,t(p.map,m.uvTransform)),p.alphaMap&&(m.alphaMap.value=p.alphaMap,t(p.alphaMap,m.alphaMapTransform)),p.alphaTest>0&&(m.alphaTest.value=p.alphaTest)}function l(m,p){m.diffuse.value.copy(p.color),m.opacity.value=p.opacity,m.rotation.value=p.rotation,p.map&&(m.map.value=p.map,t(p.map,m.mapTransform)),p.alphaMap&&(m.alphaMap.value=p.alphaMap,t(p.alphaMap,m.alphaMapTransform)),p.alphaTest>0&&(m.alphaTest.value=p.alphaTest)}function h(m,p){m.specular.value.copy(p.specular),m.shininess.value=Math.max(p.shininess,1e-4)}function u(m,p){p.gradientMap&&(m.gradientMap.value=p.gradientMap)}function f(m,p){m.metalness.value=p.metalness,p.metalnessMap&&(m.metalnessMap.value=p.metalnessMap,t(p.metalnessMap,m.metalnessMapTransform)),m.roughness.value=p.roughness,p.roughnessMap&&(m.roughnessMap.value=p.roughnessMap,t(p.roughnessMap,m.roughnessMapTransform)),e.get(p).envMap&&(m.envMapIntensity.value=p.envMapIntensity)}function d(m,p,_){m.ior.value=p.ior,p.sheen>0&&(m.sheenColor.value.copy(p.sheenColor).multiplyScalar(p.sheen),m.sheenRoughness.value=p.sheenRoughness,p.sheenColorMap&&(m.sheenColorMap.value=p.sheenColorMap,t(p.sheenColorMap,m.sheenColorMapTransform)),p.sheenRoughnessMap&&(m.sheenRoughnessMap.value=p.sheenRoughnessMap,t(p.sheenRoughnessMap,m.sheenRoughnessMapTransform))),p.clearcoat>0&&(m.clearcoat.value=p.clearcoat,m.clearcoatRoughness.value=p.clearcoatRoughness,p.clearcoatMap&&(m.clearcoatMap.value=p.clearcoatMap,t(p.clearcoatMap,m.clearcoatMapTransform)),p.clearcoatRoughnessMap&&(m.clearcoatRoughnessMap.value=p.clearcoatRoughnessMap,t(p.clearcoatRoughnessMap,m.clearcoatRoughnessMapTransform)),p.clearcoatNormalMap&&(m.clearcoatNormalMap.value=p.clearcoatNormalMap,t(p.clearcoatNormalMap,m.clearcoatNormalMapTransform),m.clearcoatNormalScale.value.copy(p.clearcoatNormalScale),p.side===kt&&m.clearcoatNormalScale.value.negate())),p.iridescence>0&&(m.iridescence.value=p.iridescence,m.iridescenceIOR.value=p.iridescenceIOR,m.iridescenceThicknessMinimum.value=p.iridescenceThicknessRange[0],m.iridescenceThicknessMaximum.value=p.iridescenceThicknessRange[1],p.iridescenceMap&&(m.iridescenceMap.value=p.iridescenceMap,t(p.iridescenceMap,m.iridescenceMapTransform)),p.iridescenceThicknessMap&&(m.iridescenceThicknessMap.value=p.iridescenceThicknessMap,t(p.iridescenceThicknessMap,m.iridescenceThicknessMapTransform))),p.transmission>0&&(m.transmission.value=p.transmission,m.transmissionSamplerMap.value=_.texture,m.transmissionSamplerSize.value.set(_.width,_.height),p.transmissionMap&&(m.transmissionMap.value=p.transmissionMap,t(p.transmissionMap,m.transmissionMapTransform)),m.thickness.value=p.thickness,p.thicknessMap&&(m.thicknessMap.value=p.thicknessMap,t(p.thicknessMap,m.thicknessMapTransform)),m.attenuationDistance.value=p.attenuationDistance,m.attenuationColor.value.copy(p.attenuationColor)),p.anisotropy>0&&(m.anisotropyVector.value.set(p.anisotropy*Math.cos(p.anisotropyRotation),p.anisotropy*Math.sin(p.anisotropyRotation)),p.anisotropyMap&&(m.anisotropyMap.value=p.anisotropyMap,t(p.anisotropyMap,m.anisotropyMapTransform))),m.specularIntensity.value=p.specularIntensity,m.specularColor.value.copy(p.specularColor),p.specularColorMap&&(m.specularColorMap.value=p.specularColorMap,t(p.specularColorMap,m.specularColorMapTransform)),p.specularIntensityMap&&(m.specularIntensityMap.value=p.specularIntensityMap,t(p.specularIntensityMap,m.specularIntensityMapTransform))}function g(m,p){p.matcap&&(m.matcap.value=p.matcap)}function v(m,p){const _=e.get(p).light;m.referencePosition.value.setFromMatrixPosition(_.matrixWorld),m.nearDistance.value=_.shadow.camera.near,m.farDistance.value=_.shadow.camera.far}return{refreshFogUniforms:n,refreshMaterialUniforms:i}}function Um(s,e,t,n){let i={},r={},o=[];const a=t.isWebGL2?s.getParameter(s.MAX_UNIFORM_BUFFER_BINDINGS):0;function c(_,x){const b=x.program;n.uniformBlockBinding(_,b)}function l(_,x){let b=i[_.id];b===void 0&&(g(_),b=h(_),i[_.id]=b,_.addEventListener("dispose",m));const R=x.program;n.updateUBOMapping(_,R);const T=e.render.frame;r[_.id]!==T&&(f(_),r[_.id]=T)}function h(_){const x=u();_.__bindingPointIndex=x;const b=s.createBuffer(),R=_.__size,T=_.usage;return s.bindBuffer(s.UNIFORM_BUFFER,b),s.bufferData(s.UNIFORM_BUFFER,R,T),s.bindBuffer(s.UNIFORM_BUFFER,null),s.bindBufferBase(s.UNIFORM_BUFFER,x,b),b}function u(){for(let _=0;_<a;_++)if(o.indexOf(_)===-1)return o.push(_),_;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function f(_){const x=i[_.id],b=_.uniforms,R=_.__cache;s.bindBuffer(s.UNIFORM_BUFFER,x);for(let T=0,E=b.length;T<E;T++){const O=Array.isArray(b[T])?b[T]:[b[T]];for(let M=0,w=O.length;M<w;M++){const N=O[M];if(d(N,T,M,R)===!0){const B=N.__offset,q=Array.isArray(N.value)?N.value:[N.value];let L=0;for(let F=0;F<q.length;F++){const G=q[F],Z=v(G);typeof G=="number"||typeof G=="boolean"?(N.__data[0]=G,s.bufferSubData(s.UNIFORM_BUFFER,B+L,N.__data)):G.isMatrix3?(N.__data[0]=G.elements[0],N.__data[1]=G.elements[1],N.__data[2]=G.elements[2],N.__data[3]=0,N.__data[4]=G.elements[3],N.__data[5]=G.elements[4],N.__data[6]=G.elements[5],N.__data[7]=0,N.__data[8]=G.elements[6],N.__data[9]=G.elements[7],N.__data[10]=G.elements[8],N.__data[11]=0):(G.toArray(N.__data,L),L+=Z.storage/Float32Array.BYTES_PER_ELEMENT)}s.bufferSubData(s.UNIFORM_BUFFER,B,N.__data)}}}s.bindBuffer(s.UNIFORM_BUFFER,null)}function d(_,x,b,R){const T=_.value,E=x+"_"+b;if(R[E]===void 0)return typeof T=="number"||typeof T=="boolean"?R[E]=T:R[E]=T.clone(),!0;{const O=R[E];if(typeof T=="number"||typeof T=="boolean"){if(O!==T)return R[E]=T,!0}else if(O.equals(T)===!1)return O.copy(T),!0}return!1}function g(_){const x=_.uniforms;let b=0;const R=16;for(let E=0,O=x.length;E<O;E++){const M=Array.isArray(x[E])?x[E]:[x[E]];for(let w=0,N=M.length;w<N;w++){const B=M[w],q=Array.isArray(B.value)?B.value:[B.value];for(let L=0,F=q.length;L<F;L++){const G=q[L],Z=v(G),K=b%R;K!==0&&R-K<Z.boundary&&(b+=R-K),B.__data=new Float32Array(Z.storage/Float32Array.BYTES_PER_ELEMENT),B.__offset=b,b+=Z.storage}}}const T=b%R;return T>0&&(b+=R-T),_.__size=b,_.__cache={},this}function v(_){const x={boundary:0,storage:0};return typeof _=="number"||typeof _=="boolean"?(x.boundary=4,x.storage=4):_.isVector2?(x.boundary=8,x.storage=8):_.isVector3||_.isColor?(x.boundary=16,x.storage=12):_.isVector4?(x.boundary=16,x.storage=16):_.isMatrix3?(x.boundary=48,x.storage=48):_.isMatrix4?(x.boundary=64,x.storage=64):_.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",_),x}function m(_){const x=_.target;x.removeEventListener("dispose",m);const b=o.indexOf(x.__bindingPointIndex);o.splice(b,1),s.deleteBuffer(i[x.id]),delete i[x.id],delete r[x.id]}function p(){for(const _ in i)s.deleteBuffer(i[_]);o=[],i={},r={}}return{bind:c,update:l,dispose:p}}class ll{constructor(e={}){const{canvas:t=Lh(),context:n=null,depth:i=!0,stencil:r=!0,alpha:o=!1,antialias:a=!1,premultipliedAlpha:c=!0,preserveDrawingBuffer:l=!1,powerPreference:h="default",failIfMajorPerformanceCaveat:u=!1}=e;this.isWebGLRenderer=!0;let f;n!==null?f=n.getContextAttributes().alpha:f=o;const d=new Uint32Array(4),g=new Int32Array(4);let v=null,m=null;const p=[],_=[];this.domElement=t,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this._outputColorSpace=wt,this._useLegacyLights=!1,this.toneMapping=Nn,this.toneMappingExposure=1;const x=this;let b=!1,R=0,T=0,E=null,O=-1,M=null;const w=new Et,N=new Et;let B=null;const q=new Fe(0);let L=0,F=t.width,G=t.height,Z=1,K=null,J=null;const Q=new Et(0,0,F,G),ne=new Et(0,0,F,G);let ce=!1;const X=new Co;let ee=!1,pe=!1,Se=null;const ve=new ot,De=new j,Ie=new y,we={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};function ze(){return E===null?Z:1}let D=n;function ue(C,z){for(let H=0;H<C.length;H++){const W=C[H],k=t.getContext(W,z);if(k!==null)return k}return null}try{const C={alpha:!0,depth:i,stencil:r,antialias:a,premultipliedAlpha:c,preserveDrawingBuffer:l,powerPreference:h,failIfMajorPerformanceCaveat:u};if("setAttribute"in t&&t.setAttribute("data-engine",`three.js r${Eo}`),t.addEventListener("webglcontextlost",oe,!1),t.addEventListener("webglcontextrestored",I,!1),t.addEventListener("webglcontextcreationerror",he,!1),D===null){const z=["webgl2","webgl","experimental-webgl"];if(x.isWebGL1Renderer===!0&&z.shift(),D=ue(z,C),D===null)throw ue(z)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}typeof WebGLRenderingContext<"u"&&D instanceof WebGLRenderingContext&&console.warn("THREE.WebGLRenderer: WebGL 1 support was deprecated in r153 and will be removed in r163."),D.getShaderPrecisionFormat===void 0&&(D.getShaderPrecisionFormat=function(){return{rangeMin:1,rangeMax:1,precision:1}})}catch(C){throw console.error("THREE.WebGLRenderer: "+C.message),C}let $,ae,Y,Te,ge,A,S,U,re,ie,te,Ee,fe,ye,Pe,ke,se,Ke,Xe,Be,Re,_e,P,le;function Ae(){$=new jf(D),ae=new Gf(D,$,e),$.init(ae),_e=new Lm(D,$,ae),Y=new Rm(D,$,ae),Te=new $f(D),ge=new mm,A=new Pm(D,$,Y,ge,ae,_e,Te),S=new Hf(x),U=new Xf(x),re=new nu(D,ae),P=new zf(D,$,re,ae),ie=new qf(D,re,Te,P),te=new Qf(D,ie,re,Te),Xe=new Jf(D,ae,A),ke=new kf(ge),Ee=new pm(x,S,U,$,ae,P,ke),fe=new Nm(x,ge),ye=new vm,Pe=new Sm($,ae),Ke=new Ff(x,S,U,Y,te,f,c),se=new Cm(x,te,ae),le=new Um(D,Te,ae,Y),Be=new Bf(D,$,Te,ae),Re=new Yf(D,$,Te,ae),Te.programs=Ee.programs,x.capabilities=ae,x.extensions=$,x.properties=ge,x.renderLists=ye,x.shadowMap=se,x.state=Y,x.info=Te}Ae();const Me=new Im(x,D);this.xr=Me,this.getContext=function(){return D},this.getContextAttributes=function(){return D.getContextAttributes()},this.forceContextLoss=function(){const C=$.get("WEBGL_lose_context");C&&C.loseContext()},this.forceContextRestore=function(){const C=$.get("WEBGL_lose_context");C&&C.restoreContext()},this.getPixelRatio=function(){return Z},this.setPixelRatio=function(C){C!==void 0&&(Z=C,this.setSize(F,G,!1))},this.getSize=function(C){return C.set(F,G)},this.setSize=function(C,z,H=!0){if(Me.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}F=C,G=z,t.width=Math.floor(C*Z),t.height=Math.floor(z*Z),H===!0&&(t.style.width=C+"px",t.style.height=z+"px"),this.setViewport(0,0,C,z)},this.getDrawingBufferSize=function(C){return C.set(F*Z,G*Z).floor()},this.setDrawingBufferSize=function(C,z,H){F=C,G=z,Z=H,t.width=Math.floor(C*H),t.height=Math.floor(z*H),this.setViewport(0,0,C,z)},this.getCurrentViewport=function(C){return C.copy(w)},this.getViewport=function(C){return C.copy(Q)},this.setViewport=function(C,z,H,W){C.isVector4?Q.set(C.x,C.y,C.z,C.w):Q.set(C,z,H,W),Y.viewport(w.copy(Q).multiplyScalar(Z).floor())},this.getScissor=function(C){return C.copy(ne)},this.setScissor=function(C,z,H,W){C.isVector4?ne.set(C.x,C.y,C.z,C.w):ne.set(C,z,H,W),Y.scissor(N.copy(ne).multiplyScalar(Z).floor())},this.getScissorTest=function(){return ce},this.setScissorTest=function(C){Y.setScissorTest(ce=C)},this.setOpaqueSort=function(C){K=C},this.setTransparentSort=function(C){J=C},this.getClearColor=function(C){return C.copy(Ke.getClearColor())},this.setClearColor=function(){Ke.setClearColor.apply(Ke,arguments)},this.getClearAlpha=function(){return Ke.getClearAlpha()},this.setClearAlpha=function(){Ke.setClearAlpha.apply(Ke,arguments)},this.clear=function(C=!0,z=!0,H=!0){let W=0;if(C){let k=!1;if(E!==null){const be=E.texture.format;k=be===kc||be===Gc||be===Bc}if(k){const be=E.texture.type,Ce=be===Un||be===Ln||be===wo||be===Yn||be===Fc||be===zc,Ue=Ke.getClearColor(),Ge=Ke.getClearAlpha(),je=Ue.r,He=Ue.g,Ve=Ue.b;Ce?(d[0]=je,d[1]=He,d[2]=Ve,d[3]=Ge,D.clearBufferuiv(D.COLOR,0,d)):(g[0]=je,g[1]=He,g[2]=Ve,g[3]=Ge,D.clearBufferiv(D.COLOR,0,g))}else W|=D.COLOR_BUFFER_BIT}z&&(W|=D.DEPTH_BUFFER_BIT),H&&(W|=D.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),D.clear(W)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){t.removeEventListener("webglcontextlost",oe,!1),t.removeEventListener("webglcontextrestored",I,!1),t.removeEventListener("webglcontextcreationerror",he,!1),ye.dispose(),Pe.dispose(),ge.dispose(),S.dispose(),U.dispose(),te.dispose(),P.dispose(),le.dispose(),Ee.dispose(),Me.dispose(),Me.removeEventListener("sessionstart",ft),Me.removeEventListener("sessionend",Qe),Se&&(Se.dispose(),Se=null),mt.stop()};function oe(C){C.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),b=!0}function I(){console.log("THREE.WebGLRenderer: Context Restored."),b=!1;const C=Te.autoReset,z=se.enabled,H=se.autoUpdate,W=se.needsUpdate,k=se.type;Ae(),Te.autoReset=C,se.enabled=z,se.autoUpdate=H,se.needsUpdate=W,se.type=k}function he(C){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",C.statusMessage)}function me(C){const z=C.target;z.removeEventListener("dispose",me),Ne(z)}function Ne(C){Le(C),ge.remove(C)}function Le(C){const z=ge.get(C).programs;z!==void 0&&(z.forEach(function(H){Ee.releaseProgram(H)}),C.isShaderMaterial&&Ee.releaseShaderCache(C))}this.renderBufferDirect=function(C,z,H,W,k,be){z===null&&(z=we);const Ce=k.isMesh&&k.matrixWorld.determinant()<0,Ue=wl(C,z,H,W,k);Y.setMaterial(W,Ce);let Ge=H.index,je=1;if(W.wireframe===!0){if(Ge=ie.getWireframeAttribute(H),Ge===void 0)return;je=2}const He=H.drawRange,Ve=H.attributes.position;let pt=He.start*je,Xt=(He.start+He.count)*je;be!==null&&(pt=Math.max(pt,be.start*je),Xt=Math.min(Xt,(be.start+be.count)*je)),Ge!==null?(pt=Math.max(pt,0),Xt=Math.min(Xt,Ge.count)):Ve!=null&&(pt=Math.max(pt,0),Xt=Math.min(Xt,Ve.count));const bt=Xt-pt;if(bt<0||bt===1/0)return;P.setup(k,W,Ue,H,Ge);let fn,at=Be;if(Ge!==null&&(fn=re.get(Ge),at=Re,at.setIndex(fn)),k.isMesh)W.wireframe===!0?(Y.setLineWidth(W.wireframeLinewidth*ze()),at.setMode(D.LINES)):at.setMode(D.TRIANGLES);else if(k.isLine){let qe=W.linewidth;qe===void 0&&(qe=1),Y.setLineWidth(qe*ze()),k.isLineSegments?at.setMode(D.LINES):k.isLineLoop?at.setMode(D.LINE_LOOP):at.setMode(D.LINE_STRIP)}else k.isPoints?at.setMode(D.POINTS):k.isSprite&&at.setMode(D.TRIANGLES);if(k.isBatchedMesh)at.renderMultiDraw(k._multiDrawStarts,k._multiDrawCounts,k._multiDrawCount);else if(k.isInstancedMesh)at.renderInstances(pt,bt,k.count);else if(H.isInstancedBufferGeometry){const qe=H._maxInstanceCount!==void 0?H._maxInstanceCount:1/0,mr=Math.min(H.instanceCount,qe);at.renderInstances(pt,bt,mr)}else at.render(pt,bt)};function $e(C,z,H){C.transparent===!0&&C.side===At&&C.forceSinglePass===!1?(C.side=kt,C.needsUpdate=!0,ls(C,z,H),C.side=un,C.needsUpdate=!0,ls(C,z,H),C.side=At):ls(C,z,H)}this.compile=function(C,z,H=null){H===null&&(H=C),m=Pe.get(H),m.init(),_.push(m),H.traverseVisible(function(k){k.isLight&&k.layers.test(z.layers)&&(m.pushLight(k),k.castShadow&&m.pushShadow(k))}),C!==H&&C.traverseVisible(function(k){k.isLight&&k.layers.test(z.layers)&&(m.pushLight(k),k.castShadow&&m.pushShadow(k))}),m.setupLights(x._useLegacyLights);const W=new Set;return C.traverse(function(k){const be=k.material;if(be)if(Array.isArray(be))for(let Ce=0;Ce<be.length;Ce++){const Ue=be[Ce];$e(Ue,H,k),W.add(Ue)}else $e(be,H,k),W.add(be)}),_.pop(),m=null,W},this.compileAsync=function(C,z,H=null){const W=this.compile(C,z,H);return new Promise(k=>{function be(){if(W.forEach(function(Ce){ge.get(Ce).currentProgram.isReady()&&W.delete(Ce)}),W.size===0){k(C);return}setTimeout(be,10)}$.get("KHR_parallel_shader_compile")!==null?be():setTimeout(be,10)})};let Ze=null;function ht(C){Ze&&Ze(C)}function ft(){mt.stop()}function Qe(){mt.start()}const mt=new nl;mt.setAnimationLoop(ht),typeof self<"u"&&mt.setContext(self),this.setAnimationLoop=function(C){Ze=C,Me.setAnimationLoop(C),C===null?mt.stop():mt.start()},Me.addEventListener("sessionstart",ft),Me.addEventListener("sessionend",Qe),this.render=function(C,z){if(z!==void 0&&z.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(b===!0)return;C.matrixWorldAutoUpdate===!0&&C.updateMatrixWorld(),z.parent===null&&z.matrixWorldAutoUpdate===!0&&z.updateMatrixWorld(),Me.enabled===!0&&Me.isPresenting===!0&&(Me.cameraAutoUpdate===!0&&Me.updateCamera(z),z=Me.getCamera()),C.isScene===!0&&C.onBeforeRender(x,C,z,E),m=Pe.get(C,_.length),m.init(),_.push(m),ve.multiplyMatrices(z.projectionMatrix,z.matrixWorldInverse),X.setFromProjectionMatrix(ve),pe=this.localClippingEnabled,ee=ke.init(this.clippingPlanes,pe),v=ye.get(C,p.length),v.init(),p.push(v),ln(C,z,0,x.sortObjects),v.finish(),x.sortObjects===!0&&v.sort(K,J),this.info.render.frame++,ee===!0&&ke.beginShadows();const H=m.state.shadowsArray;if(se.render(H,C,z),ee===!0&&ke.endShadows(),this.info.autoReset===!0&&this.info.reset(),Ke.render(v,C),m.setupLights(x._useLegacyLights),z.isArrayCamera){const W=z.cameras;for(let k=0,be=W.length;k<be;k++){const Ce=W[k];zo(v,C,Ce,Ce.viewport)}}else zo(v,C,z);E!==null&&(A.updateMultisampleRenderTarget(E),A.updateRenderTargetMipmap(E)),C.isScene===!0&&C.onAfterRender(x,C,z),P.resetDefaultState(),O=-1,M=null,_.pop(),_.length>0?m=_[_.length-1]:m=null,p.pop(),p.length>0?v=p[p.length-1]:v=null};function ln(C,z,H,W){if(C.visible===!1)return;if(C.layers.test(z.layers)){if(C.isGroup)H=C.renderOrder;else if(C.isLOD)C.autoUpdate===!0&&C.update(z);else if(C.isLight)m.pushLight(C),C.castShadow&&m.pushShadow(C);else if(C.isSprite){if(!C.frustumCulled||X.intersectsSprite(C)){W&&Ie.setFromMatrixPosition(C.matrixWorld).applyMatrix4(ve);const Ce=te.update(C),Ue=C.material;Ue.visible&&v.push(C,Ce,Ue,H,Ie.z,null)}}else if((C.isMesh||C.isLine||C.isPoints)&&(!C.frustumCulled||X.intersectsObject(C))){const Ce=te.update(C),Ue=C.material;if(W&&(C.boundingSphere!==void 0?(C.boundingSphere===null&&C.computeBoundingSphere(),Ie.copy(C.boundingSphere.center)):(Ce.boundingSphere===null&&Ce.computeBoundingSphere(),Ie.copy(Ce.boundingSphere.center)),Ie.applyMatrix4(C.matrixWorld).applyMatrix4(ve)),Array.isArray(Ue)){const Ge=Ce.groups;for(let je=0,He=Ge.length;je<He;je++){const Ve=Ge[je],pt=Ue[Ve.materialIndex];pt&&pt.visible&&v.push(C,Ce,pt,H,Ie.z,Ve)}}else Ue.visible&&v.push(C,Ce,Ue,H,Ie.z,null)}}const be=C.children;for(let Ce=0,Ue=be.length;Ce<Ue;Ce++)ln(be[Ce],z,H,W)}function zo(C,z,H,W){const k=C.opaque,be=C.transmissive,Ce=C.transparent;m.setupLightsView(H),ee===!0&&ke.setGlobalState(x.clippingPlanes,H),be.length>0&&El(k,be,z,H),W&&Y.viewport(w.copy(W)),k.length>0&&cs(k,z,H),be.length>0&&cs(be,z,H),Ce.length>0&&cs(Ce,z,H),Y.buffers.depth.setTest(!0),Y.buffers.depth.setMask(!0),Y.buffers.color.setMask(!0),Y.setPolygonOffset(!1)}function El(C,z,H,W){if((H.isScene===!0?H.overrideMaterial:null)!==null)return;const be=ae.isWebGL2;Se===null&&(Se=new Jn(1,1,{generateMipmaps:!0,type:$.has("EXT_color_buffer_half_float")?ts:Un,minFilter:es,samples:be?4:0})),x.getDrawingBufferSize(De),be?Se.setSize(De.x,De.y):Se.setSize(_o(De.x),_o(De.y));const Ce=x.getRenderTarget();x.setRenderTarget(Se),x.getClearColor(q),L=x.getClearAlpha(),L<1&&x.setClearColor(16777215,.5),x.clear();const Ue=x.toneMapping;x.toneMapping=Nn,cs(C,H,W),A.updateMultisampleRenderTarget(Se),A.updateRenderTargetMipmap(Se);let Ge=!1;for(let je=0,He=z.length;je<He;je++){const Ve=z[je],pt=Ve.object,Xt=Ve.geometry,bt=Ve.material,fn=Ve.group;if(bt.side===At&&pt.layers.test(W.layers)){const at=bt.side;bt.side=kt,bt.needsUpdate=!0,Bo(pt,H,W,Xt,bt,fn),bt.side=at,bt.needsUpdate=!0,Ge=!0}}Ge===!0&&(A.updateMultisampleRenderTarget(Se),A.updateRenderTargetMipmap(Se)),x.setRenderTarget(Ce),x.setClearColor(q,L),x.toneMapping=Ue}function cs(C,z,H){const W=z.isScene===!0?z.overrideMaterial:null;for(let k=0,be=C.length;k<be;k++){const Ce=C[k],Ue=Ce.object,Ge=Ce.geometry,je=W===null?Ce.material:W,He=Ce.group;Ue.layers.test(H.layers)&&Bo(Ue,z,H,Ge,je,He)}}function Bo(C,z,H,W,k,be){C.onBeforeRender(x,z,H,W,k,be),C.modelViewMatrix.multiplyMatrices(H.matrixWorldInverse,C.matrixWorld),C.normalMatrix.getNormalMatrix(C.modelViewMatrix),k.onBeforeRender(x,z,H,W,C,be),k.transparent===!0&&k.side===At&&k.forceSinglePass===!1?(k.side=kt,k.needsUpdate=!0,x.renderBufferDirect(H,z,W,k,C,be),k.side=un,k.needsUpdate=!0,x.renderBufferDirect(H,z,W,k,C,be),k.side=At):x.renderBufferDirect(H,z,W,k,C,be),C.onAfterRender(x,z,H,W,k,be)}function ls(C,z,H){z.isScene!==!0&&(z=we);const W=ge.get(C),k=m.state.lights,be=m.state.shadowsArray,Ce=k.state.version,Ue=Ee.getParameters(C,k.state,be,z,H),Ge=Ee.getProgramCacheKey(Ue);let je=W.programs;W.environment=C.isMeshStandardMaterial?z.environment:null,W.fog=z.fog,W.envMap=(C.isMeshStandardMaterial?U:S).get(C.envMap||W.environment),je===void 0&&(C.addEventListener("dispose",me),je=new Map,W.programs=je);let He=je.get(Ge);if(He!==void 0){if(W.currentProgram===He&&W.lightsStateVersion===Ce)return ko(C,Ue),He}else Ue.uniforms=Ee.getUniforms(C),C.onBuild(H,Ue,x),C.onBeforeCompile(Ue,x),He=Ee.acquireProgram(Ue,Ge),je.set(Ge,He),W.uniforms=Ue.uniforms;const Ve=W.uniforms;return(!C.isShaderMaterial&&!C.isRawShaderMaterial||C.clipping===!0)&&(Ve.clippingPlanes=ke.uniform),ko(C,Ue),W.needsLights=Al(C),W.lightsStateVersion=Ce,W.needsLights&&(Ve.ambientLightColor.value=k.state.ambient,Ve.lightProbe.value=k.state.probe,Ve.directionalLights.value=k.state.directional,Ve.directionalLightShadows.value=k.state.directionalShadow,Ve.spotLights.value=k.state.spot,Ve.spotLightShadows.value=k.state.spotShadow,Ve.rectAreaLights.value=k.state.rectArea,Ve.ltc_1.value=k.state.rectAreaLTC1,Ve.ltc_2.value=k.state.rectAreaLTC2,Ve.pointLights.value=k.state.point,Ve.pointLightShadows.value=k.state.pointShadow,Ve.hemisphereLights.value=k.state.hemi,Ve.directionalShadowMap.value=k.state.directionalShadowMap,Ve.directionalShadowMatrix.value=k.state.directionalShadowMatrix,Ve.spotShadowMap.value=k.state.spotShadowMap,Ve.spotLightMatrix.value=k.state.spotLightMatrix,Ve.spotLightMap.value=k.state.spotLightMap,Ve.pointShadowMap.value=k.state.pointShadowMap,Ve.pointShadowMatrix.value=k.state.pointShadowMatrix),W.currentProgram=He,W.uniformsList=null,He}function Go(C){if(C.uniformsList===null){const z=C.currentProgram.getUniforms();C.uniformsList=Xs.seqWithValue(z.seq,C.uniforms)}return C.uniformsList}function ko(C,z){const H=ge.get(C);H.outputColorSpace=z.outputColorSpace,H.batching=z.batching,H.instancing=z.instancing,H.instancingColor=z.instancingColor,H.skinning=z.skinning,H.morphTargets=z.morphTargets,H.morphNormals=z.morphNormals,H.morphColors=z.morphColors,H.morphTargetsCount=z.morphTargetsCount,H.numClippingPlanes=z.numClippingPlanes,H.numIntersection=z.numClipIntersection,H.vertexAlphas=z.vertexAlphas,H.vertexTangents=z.vertexTangents,H.toneMapping=z.toneMapping}function wl(C,z,H,W,k){z.isScene!==!0&&(z=we),A.resetTextureUnits();const be=z.fog,Ce=W.isMeshStandardMaterial?z.environment:null,Ue=E===null?x.outputColorSpace:E.isXRRenderTarget===!0?E.texture.colorSpace:En,Ge=(W.isMeshStandardMaterial?U:S).get(W.envMap||Ce),je=W.vertexColors===!0&&!!H.attributes.color&&H.attributes.color.itemSize===4,He=!!H.attributes.tangent&&(!!W.normalMap||W.anisotropy>0),Ve=!!H.morphAttributes.position,pt=!!H.morphAttributes.normal,Xt=!!H.morphAttributes.color;let bt=Nn;W.toneMapped&&(E===null||E.isXRRenderTarget===!0)&&(bt=x.toneMapping);const fn=H.morphAttributes.position||H.morphAttributes.normal||H.morphAttributes.color,at=fn!==void 0?fn.length:0,qe=ge.get(W),mr=m.state.lights;if(ee===!0&&(pe===!0||C!==M)){const Zt=C===M&&W.id===O;ke.setState(W,C,Zt)}let ut=!1;W.version===qe.__version?(qe.needsLights&&qe.lightsStateVersion!==mr.state.version||qe.outputColorSpace!==Ue||k.isBatchedMesh&&qe.batching===!1||!k.isBatchedMesh&&qe.batching===!0||k.isInstancedMesh&&qe.instancing===!1||!k.isInstancedMesh&&qe.instancing===!0||k.isSkinnedMesh&&qe.skinning===!1||!k.isSkinnedMesh&&qe.skinning===!0||k.isInstancedMesh&&qe.instancingColor===!0&&k.instanceColor===null||k.isInstancedMesh&&qe.instancingColor===!1&&k.instanceColor!==null||qe.envMap!==Ge||W.fog===!0&&qe.fog!==be||qe.numClippingPlanes!==void 0&&(qe.numClippingPlanes!==ke.numPlanes||qe.numIntersection!==ke.numIntersection)||qe.vertexAlphas!==je||qe.vertexTangents!==He||qe.morphTargets!==Ve||qe.morphNormals!==pt||qe.morphColors!==Xt||qe.toneMapping!==bt||ae.isWebGL2===!0&&qe.morphTargetsCount!==at)&&(ut=!0):(ut=!0,qe.__version=W.version);let Bn=qe.currentProgram;ut===!0&&(Bn=ls(W,z,k));let Ho=!1,ki=!1,gr=!1;const Pt=Bn.getUniforms(),Gn=qe.uniforms;if(Y.useProgram(Bn.program)&&(Ho=!0,ki=!0,gr=!0),W.id!==O&&(O=W.id,ki=!0),Ho||M!==C){Pt.setValue(D,"projectionMatrix",C.projectionMatrix),Pt.setValue(D,"viewMatrix",C.matrixWorldInverse);const Zt=Pt.map.cameraPosition;Zt!==void 0&&Zt.setValue(D,Ie.setFromMatrixPosition(C.matrixWorld)),ae.logarithmicDepthBuffer&&Pt.setValue(D,"logDepthBufFC",2/(Math.log(C.far+1)/Math.LN2)),(W.isMeshPhongMaterial||W.isMeshToonMaterial||W.isMeshLambertMaterial||W.isMeshBasicMaterial||W.isMeshStandardMaterial||W.isShaderMaterial)&&Pt.setValue(D,"isOrthographic",C.isOrthographicCamera===!0),M!==C&&(M=C,ki=!0,gr=!0)}if(k.isSkinnedMesh){Pt.setOptional(D,k,"bindMatrix"),Pt.setOptional(D,k,"bindMatrixInverse");const Zt=k.skeleton;Zt&&(ae.floatVertexTextures?(Zt.boneTexture===null&&Zt.computeBoneTexture(),Pt.setValue(D,"boneTexture",Zt.boneTexture,A)):console.warn("THREE.WebGLRenderer: SkinnedMesh can only be used with WebGL 2. With WebGL 1 OES_texture_float and vertex textures support is required."))}k.isBatchedMesh&&(Pt.setOptional(D,k,"batchingTexture"),Pt.setValue(D,"batchingTexture",k._matricesTexture,A));const vr=H.morphAttributes;if((vr.position!==void 0||vr.normal!==void 0||vr.color!==void 0&&ae.isWebGL2===!0)&&Xe.update(k,H,Bn),(ki||qe.receiveShadow!==k.receiveShadow)&&(qe.receiveShadow=k.receiveShadow,Pt.setValue(D,"receiveShadow",k.receiveShadow)),W.isMeshGouraudMaterial&&W.envMap!==null&&(Gn.envMap.value=Ge,Gn.flipEnvMap.value=Ge.isCubeTexture&&Ge.isRenderTargetTexture===!1?-1:1),ki&&(Pt.setValue(D,"toneMappingExposure",x.toneMappingExposure),qe.needsLights&&Tl(Gn,gr),be&&W.fog===!0&&fe.refreshFogUniforms(Gn,be),fe.refreshMaterialUniforms(Gn,W,Z,G,Se),Xs.upload(D,Go(qe),Gn,A)),W.isShaderMaterial&&W.uniformsNeedUpdate===!0&&(Xs.upload(D,Go(qe),Gn,A),W.uniformsNeedUpdate=!1),W.isSpriteMaterial&&Pt.setValue(D,"center",k.center),Pt.setValue(D,"modelViewMatrix",k.modelViewMatrix),Pt.setValue(D,"normalMatrix",k.normalMatrix),Pt.setValue(D,"modelMatrix",k.matrixWorld),W.isShaderMaterial||W.isRawShaderMaterial){const Zt=W.uniformsGroups;for(let _r=0,Cl=Zt.length;_r<Cl;_r++)if(ae.isWebGL2){const Vo=Zt[_r];le.update(Vo,Bn),le.bind(Vo,Bn)}else console.warn("THREE.WebGLRenderer: Uniform Buffer Objects can only be used with WebGL 2.")}return Bn}function Tl(C,z){C.ambientLightColor.needsUpdate=z,C.lightProbe.needsUpdate=z,C.directionalLights.needsUpdate=z,C.directionalLightShadows.needsUpdate=z,C.pointLights.needsUpdate=z,C.pointLightShadows.needsUpdate=z,C.spotLights.needsUpdate=z,C.spotLightShadows.needsUpdate=z,C.rectAreaLights.needsUpdate=z,C.hemisphereLights.needsUpdate=z}function Al(C){return C.isMeshLambertMaterial||C.isMeshToonMaterial||C.isMeshPhongMaterial||C.isMeshStandardMaterial||C.isShadowMaterial||C.isShaderMaterial&&C.lights===!0}this.getActiveCubeFace=function(){return R},this.getActiveMipmapLevel=function(){return T},this.getRenderTarget=function(){return E},this.setRenderTargetTextures=function(C,z,H){ge.get(C.texture).__webglTexture=z,ge.get(C.depthTexture).__webglTexture=H;const W=ge.get(C);W.__hasExternalTextures=!0,W.__hasExternalTextures&&(W.__autoAllocateDepthBuffer=H===void 0,W.__autoAllocateDepthBuffer||$.has("WEBGL_multisampled_render_to_texture")===!0&&(console.warn("THREE.WebGLRenderer: Render-to-texture extension was disabled because an external texture was provided"),W.__useRenderToTexture=!1))},this.setRenderTargetFramebuffer=function(C,z){const H=ge.get(C);H.__webglFramebuffer=z,H.__useDefaultFramebuffer=z===void 0},this.setRenderTarget=function(C,z=0,H=0){E=C,R=z,T=H;let W=!0,k=null,be=!1,Ce=!1;if(C){const Ge=ge.get(C);Ge.__useDefaultFramebuffer!==void 0?(Y.bindFramebuffer(D.FRAMEBUFFER,null),W=!1):Ge.__webglFramebuffer===void 0?A.setupRenderTarget(C):Ge.__hasExternalTextures&&A.rebindTextures(C,ge.get(C.texture).__webglTexture,ge.get(C.depthTexture).__webglTexture);const je=C.texture;(je.isData3DTexture||je.isDataArrayTexture||je.isCompressedArrayTexture)&&(Ce=!0);const He=ge.get(C).__webglFramebuffer;C.isWebGLCubeRenderTarget?(Array.isArray(He[z])?k=He[z][H]:k=He[z],be=!0):ae.isWebGL2&&C.samples>0&&A.useMultisampledRTT(C)===!1?k=ge.get(C).__webglMultisampledFramebuffer:Array.isArray(He)?k=He[H]:k=He,w.copy(C.viewport),N.copy(C.scissor),B=C.scissorTest}else w.copy(Q).multiplyScalar(Z).floor(),N.copy(ne).multiplyScalar(Z).floor(),B=ce;if(Y.bindFramebuffer(D.FRAMEBUFFER,k)&&ae.drawBuffers&&W&&Y.drawBuffers(C,k),Y.viewport(w),Y.scissor(N),Y.setScissorTest(B),be){const Ge=ge.get(C.texture);D.framebufferTexture2D(D.FRAMEBUFFER,D.COLOR_ATTACHMENT0,D.TEXTURE_CUBE_MAP_POSITIVE_X+z,Ge.__webglTexture,H)}else if(Ce){const Ge=ge.get(C.texture),je=z||0;D.framebufferTextureLayer(D.FRAMEBUFFER,D.COLOR_ATTACHMENT0,Ge.__webglTexture,H||0,je)}O=-1},this.readRenderTargetPixels=function(C,z,H,W,k,be,Ce){if(!(C&&C.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let Ue=ge.get(C).__webglFramebuffer;if(C.isWebGLCubeRenderTarget&&Ce!==void 0&&(Ue=Ue[Ce]),Ue){Y.bindFramebuffer(D.FRAMEBUFFER,Ue);try{const Ge=C.texture,je=Ge.format,He=Ge.type;if(je!==cn&&_e.convert(je)!==D.getParameter(D.IMPLEMENTATION_COLOR_READ_FORMAT)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}const Ve=He===ts&&($.has("EXT_color_buffer_half_float")||ae.isWebGL2&&$.has("EXT_color_buffer_float"));if(He!==Un&&_e.convert(He)!==D.getParameter(D.IMPLEMENTATION_COLOR_READ_TYPE)&&!(He===Dn&&(ae.isWebGL2||$.has("OES_texture_float")||$.has("WEBGL_color_buffer_float")))&&!Ve){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}z>=0&&z<=C.width-W&&H>=0&&H<=C.height-k&&D.readPixels(z,H,W,k,_e.convert(je),_e.convert(He),be)}finally{const Ge=E!==null?ge.get(E).__webglFramebuffer:null;Y.bindFramebuffer(D.FRAMEBUFFER,Ge)}}},this.copyFramebufferToTexture=function(C,z,H=0){const W=Math.pow(2,-H),k=Math.floor(z.image.width*W),be=Math.floor(z.image.height*W);A.setTexture2D(z,0),D.copyTexSubImage2D(D.TEXTURE_2D,H,0,0,C.x,C.y,k,be),Y.unbindTexture()},this.copyTextureToTexture=function(C,z,H,W=0){const k=z.image.width,be=z.image.height,Ce=_e.convert(H.format),Ue=_e.convert(H.type);A.setTexture2D(H,0),D.pixelStorei(D.UNPACK_FLIP_Y_WEBGL,H.flipY),D.pixelStorei(D.UNPACK_PREMULTIPLY_ALPHA_WEBGL,H.premultiplyAlpha),D.pixelStorei(D.UNPACK_ALIGNMENT,H.unpackAlignment),z.isDataTexture?D.texSubImage2D(D.TEXTURE_2D,W,C.x,C.y,k,be,Ce,Ue,z.image.data):z.isCompressedTexture?D.compressedTexSubImage2D(D.TEXTURE_2D,W,C.x,C.y,z.mipmaps[0].width,z.mipmaps[0].height,Ce,z.mipmaps[0].data):D.texSubImage2D(D.TEXTURE_2D,W,C.x,C.y,Ce,Ue,z.image),W===0&&H.generateMipmaps&&D.generateMipmap(D.TEXTURE_2D),Y.unbindTexture()},this.copyTextureToTexture3D=function(C,z,H,W,k=0){if(x.isWebGL1Renderer){console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: can only be used with WebGL2.");return}const be=C.max.x-C.min.x+1,Ce=C.max.y-C.min.y+1,Ue=C.max.z-C.min.z+1,Ge=_e.convert(W.format),je=_e.convert(W.type);let He;if(W.isData3DTexture)A.setTexture3D(W,0),He=D.TEXTURE_3D;else if(W.isDataArrayTexture||W.isCompressedArrayTexture)A.setTexture2DArray(W,0),He=D.TEXTURE_2D_ARRAY;else{console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: only supports THREE.DataTexture3D and THREE.DataTexture2DArray.");return}D.pixelStorei(D.UNPACK_FLIP_Y_WEBGL,W.flipY),D.pixelStorei(D.UNPACK_PREMULTIPLY_ALPHA_WEBGL,W.premultiplyAlpha),D.pixelStorei(D.UNPACK_ALIGNMENT,W.unpackAlignment);const Ve=D.getParameter(D.UNPACK_ROW_LENGTH),pt=D.getParameter(D.UNPACK_IMAGE_HEIGHT),Xt=D.getParameter(D.UNPACK_SKIP_PIXELS),bt=D.getParameter(D.UNPACK_SKIP_ROWS),fn=D.getParameter(D.UNPACK_SKIP_IMAGES),at=H.isCompressedTexture?H.mipmaps[k]:H.image;D.pixelStorei(D.UNPACK_ROW_LENGTH,at.width),D.pixelStorei(D.UNPACK_IMAGE_HEIGHT,at.height),D.pixelStorei(D.UNPACK_SKIP_PIXELS,C.min.x),D.pixelStorei(D.UNPACK_SKIP_ROWS,C.min.y),D.pixelStorei(D.UNPACK_SKIP_IMAGES,C.min.z),H.isDataTexture||H.isData3DTexture?D.texSubImage3D(He,k,z.x,z.y,z.z,be,Ce,Ue,Ge,je,at.data):H.isCompressedArrayTexture?(console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: untested support for compressed srcTexture."),D.compressedTexSubImage3D(He,k,z.x,z.y,z.z,be,Ce,Ue,Ge,at.data)):D.texSubImage3D(He,k,z.x,z.y,z.z,be,Ce,Ue,Ge,je,at),D.pixelStorei(D.UNPACK_ROW_LENGTH,Ve),D.pixelStorei(D.UNPACK_IMAGE_HEIGHT,pt),D.pixelStorei(D.UNPACK_SKIP_PIXELS,Xt),D.pixelStorei(D.UNPACK_SKIP_ROWS,bt),D.pixelStorei(D.UNPACK_SKIP_IMAGES,fn),k===0&&W.generateMipmaps&&D.generateMipmap(He),Y.unbindTexture()},this.initTexture=function(C){C.isCubeTexture?A.setTextureCube(C,0):C.isData3DTexture?A.setTexture3D(C,0):C.isDataArrayTexture||C.isCompressedArrayTexture?A.setTexture2DArray(C,0):A.setTexture2D(C,0),Y.unbindTexture()},this.resetState=function(){R=0,T=0,E=null,Y.reset(),P.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return Mn}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;const t=this.getContext();t.drawingBufferColorSpace=e===To?"display-p3":"srgb",t.unpackColorSpace=tt.workingColorSpace===rr?"display-p3":"srgb"}get outputEncoding(){return console.warn("THREE.WebGLRenderer: Property .outputEncoding has been removed. Use .outputColorSpace instead."),this.outputColorSpace===wt?Zn:Vc}set outputEncoding(e){console.warn("THREE.WebGLRenderer: Property .outputEncoding has been removed. Use .outputColorSpace instead."),this.outputColorSpace=e===Zn?wt:En}get useLegacyLights(){return console.warn("THREE.WebGLRenderer: The property .useLegacyLights has been deprecated. Migrate your lighting according to the following guide: https://discourse.threejs.org/t/updates-to-lighting-in-three-js-r155/53733."),this._useLegacyLights}set useLegacyLights(e){console.warn("THREE.WebGLRenderer: The property .useLegacyLights has been deprecated. Migrate your lighting according to the following guide: https://discourse.threejs.org/t/updates-to-lighting-in-three-js-r155/53733."),this._useLegacyLights=e}}class Fm extends ll{}Fm.prototype.isWebGL1Renderer=!0;class zm extends vt{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,t){return super.copy(e,t),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){const t=super.toJSON(e);return this.fog!==null&&(t.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(t.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(t.object.backgroundIntensity=this.backgroundIntensity),t}}class Bm{constructor(e,t){this.isInterleavedBuffer=!0,this.array=e,this.stride=t,this.count=e!==void 0?e.length/t:0,this.usage=mo,this._updateRange={offset:0,count:-1},this.updateRanges=[],this.version=0,this.uuid=Sn()}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}get updateRange(){return console.warn("THREE.InterleavedBuffer: updateRange() is deprecated and will be removed in r169. Use addUpdateRange() instead."),this._updateRange}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.array=new e.array.constructor(e.array),this.count=e.count,this.stride=e.stride,this.usage=e.usage,this}copyAt(e,t,n){e*=this.stride,n*=t.stride;for(let i=0,r=this.stride;i<r;i++)this.array[e+i]=t.array[n+i];return this}set(e,t=0){return this.array.set(e,t),this}clone(e){e.arrayBuffers===void 0&&(e.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=Sn()),e.arrayBuffers[this.array.buffer._uuid]===void 0&&(e.arrayBuffers[this.array.buffer._uuid]=this.array.slice(0).buffer);const t=new this.array.constructor(e.arrayBuffers[this.array.buffer._uuid]),n=new this.constructor(t,this.stride);return n.setUsage(this.usage),n}onUpload(e){return this.onUploadCallback=e,this}toJSON(e){return e.arrayBuffers===void 0&&(e.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=Sn()),e.arrayBuffers[this.array.buffer._uuid]===void 0&&(e.arrayBuffers[this.array.buffer._uuid]=Array.from(new Uint32Array(this.array.buffer))),{uuid:this.uuid,buffer:this.array.buffer._uuid,type:this.array.constructor.name,stride:this.stride}}}const zt=new y;class Js{constructor(e,t,n,i=!1){this.isInterleavedBufferAttribute=!0,this.name="",this.data=e,this.itemSize=t,this.offset=n,this.normalized=i}get count(){return this.data.count}get array(){return this.data.array}set needsUpdate(e){this.data.needsUpdate=e}applyMatrix4(e){for(let t=0,n=this.data.count;t<n;t++)zt.fromBufferAttribute(this,t),zt.applyMatrix4(e),this.setXYZ(t,zt.x,zt.y,zt.z);return this}applyNormalMatrix(e){for(let t=0,n=this.count;t<n;t++)zt.fromBufferAttribute(this,t),zt.applyNormalMatrix(e),this.setXYZ(t,zt.x,zt.y,zt.z);return this}transformDirection(e){for(let t=0,n=this.count;t<n;t++)zt.fromBufferAttribute(this,t),zt.transformDirection(e),this.setXYZ(t,zt.x,zt.y,zt.z);return this}setX(e,t){return this.normalized&&(t=nt(t,this.array)),this.data.array[e*this.data.stride+this.offset]=t,this}setY(e,t){return this.normalized&&(t=nt(t,this.array)),this.data.array[e*this.data.stride+this.offset+1]=t,this}setZ(e,t){return this.normalized&&(t=nt(t,this.array)),this.data.array[e*this.data.stride+this.offset+2]=t,this}setW(e,t){return this.normalized&&(t=nt(t,this.array)),this.data.array[e*this.data.stride+this.offset+3]=t,this}getX(e){let t=this.data.array[e*this.data.stride+this.offset];return this.normalized&&(t=bn(t,this.array)),t}getY(e){let t=this.data.array[e*this.data.stride+this.offset+1];return this.normalized&&(t=bn(t,this.array)),t}getZ(e){let t=this.data.array[e*this.data.stride+this.offset+2];return this.normalized&&(t=bn(t,this.array)),t}getW(e){let t=this.data.array[e*this.data.stride+this.offset+3];return this.normalized&&(t=bn(t,this.array)),t}setXY(e,t,n){return e=e*this.data.stride+this.offset,this.normalized&&(t=nt(t,this.array),n=nt(n,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=n,this}setXYZ(e,t,n,i){return e=e*this.data.stride+this.offset,this.normalized&&(t=nt(t,this.array),n=nt(n,this.array),i=nt(i,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=n,this.data.array[e+2]=i,this}setXYZW(e,t,n,i,r){return e=e*this.data.stride+this.offset,this.normalized&&(t=nt(t,this.array),n=nt(n,this.array),i=nt(i,this.array),r=nt(r,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=n,this.data.array[e+2]=i,this.data.array[e+3]=r,this}clone(e){if(e===void 0){console.log("THREE.InterleavedBufferAttribute.clone(): Cloning an interleaved buffer attribute will de-interleave buffer data.");const t=[];for(let n=0;n<this.count;n++){const i=n*this.data.stride+this.offset;for(let r=0;r<this.itemSize;r++)t.push(this.data.array[i+r])}return new Nt(new this.array.constructor(t),this.itemSize,this.normalized)}else return e.interleavedBuffers===void 0&&(e.interleavedBuffers={}),e.interleavedBuffers[this.data.uuid]===void 0&&(e.interleavedBuffers[this.data.uuid]=this.data.clone(e)),new Js(e.interleavedBuffers[this.data.uuid],this.itemSize,this.offset,this.normalized)}toJSON(e){if(e===void 0){console.log("THREE.InterleavedBufferAttribute.toJSON(): Serializing an interleaved buffer attribute will de-interleave buffer data.");const t=[];for(let n=0;n<this.count;n++){const i=n*this.data.stride+this.offset;for(let r=0;r<this.itemSize;r++)t.push(this.data.array[i+r])}return{itemSize:this.itemSize,type:this.array.constructor.name,array:t,normalized:this.normalized}}else return e.interleavedBuffers===void 0&&(e.interleavedBuffers={}),e.interleavedBuffers[this.data.uuid]===void 0&&(e.interleavedBuffers[this.data.uuid]=this.data.toJSON(e)),{isInterleavedBufferAttribute:!0,itemSize:this.itemSize,data:this.data.uuid,offset:this.offset,normalized:this.normalized}}}class sn extends wn{constructor(e){super(),this.isSpriteMaterial=!0,this.type="SpriteMaterial",this.color=new Fe(16777215),this.map=null,this.alphaMap=null,this.rotation=0,this.sizeAttenuation=!0,this.transparent=!0,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.alphaMap=e.alphaMap,this.rotation=e.rotation,this.sizeAttenuation=e.sizeAttenuation,this.fog=e.fog,this}}let yi;const ji=new y,bi=new y,Mi=new y,Si=new j,qi=new j,hl=new ot,Ds=new y,Yi=new y,Os=new y,lc=new j,$r=new j,hc=new j;class ns extends vt{constructor(e=new sn){if(super(),this.isSprite=!0,this.type="Sprite",yi===void 0){yi=new it;const t=new Float32Array([-.5,-.5,0,0,0,.5,-.5,0,1,0,.5,.5,0,1,1,-.5,.5,0,0,1]),n=new Bm(t,5);yi.setIndex([0,1,2,0,2,3]),yi.setAttribute("position",new Js(n,3,0,!1)),yi.setAttribute("uv",new Js(n,2,3,!1))}this.geometry=yi,this.material=e,this.center=new j(.5,.5)}raycast(e,t){e.camera===null&&console.error('THREE.Sprite: "Raycaster.camera" needs to be set in order to raycast against sprites.'),bi.setFromMatrixScale(this.matrixWorld),hl.copy(e.camera.matrixWorld),this.modelViewMatrix.multiplyMatrices(e.camera.matrixWorldInverse,this.matrixWorld),Mi.setFromMatrixPosition(this.modelViewMatrix),e.camera.isPerspectiveCamera&&this.material.sizeAttenuation===!1&&bi.multiplyScalar(-Mi.z);const n=this.material.rotation;let i,r;n!==0&&(r=Math.cos(n),i=Math.sin(n));const o=this.center;Is(Ds.set(-.5,-.5,0),Mi,o,bi,i,r),Is(Yi.set(.5,-.5,0),Mi,o,bi,i,r),Is(Os.set(.5,.5,0),Mi,o,bi,i,r),lc.set(0,0),$r.set(1,0),hc.set(1,1);let a=e.ray.intersectTriangle(Ds,Yi,Os,!1,ji);if(a===null&&(Is(Yi.set(-.5,.5,0),Mi,o,bi,i,r),$r.set(0,1),a=e.ray.intersectTriangle(Ds,Os,Yi,!1,ji),a===null))return;const c=e.ray.origin.distanceTo(ji);c<e.near||c>e.far||t.push({distance:c,point:ji.clone(),uv:Yt.getInterpolation(ji,Ds,Yi,Os,lc,$r,hc,new j),face:null,object:this})}copy(e,t){return super.copy(e,t),e.center!==void 0&&this.center.copy(e.center),this.material=e.material,this}}function Is(s,e,t,n,i,r){Si.subVectors(s,t).addScalar(.5).multiply(n),i!==void 0?(qi.x=r*Si.x-i*Si.y,qi.y=i*Si.x+r*Si.y):qi.copy(Si),s.copy(e),s.x+=qi.x,s.y+=qi.y,s.applyMatrix4(hl)}class Qt extends wn{constructor(e){super(),this.isLineBasicMaterial=!0,this.type="LineBasicMaterial",this.color=new Fe(16777215),this.map=null,this.linewidth=1,this.linecap="round",this.linejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.linewidth=e.linewidth,this.linecap=e.linecap,this.linejoin=e.linejoin,this.fog=e.fog,this}}const uc=new y,dc=new y,fc=new ot,Zr=new ar,Ns=new or;class Li extends vt{constructor(e=new it,t=new Qt){super(),this.isLine=!0,this.type="Line",this.geometry=e,this.material=t,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}computeLineDistances(){const e=this.geometry;if(e.index===null){const t=e.attributes.position,n=[0];for(let i=1,r=t.count;i<r;i++)uc.fromBufferAttribute(t,i-1),dc.fromBufferAttribute(t,i),n[i]=n[i-1],n[i]+=uc.distanceTo(dc);e.setAttribute("lineDistance",new et(n,1))}else console.warn("THREE.Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}raycast(e,t){const n=this.geometry,i=this.matrixWorld,r=e.params.Line.threshold,o=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),Ns.copy(n.boundingSphere),Ns.applyMatrix4(i),Ns.radius+=r,e.ray.intersectsSphere(Ns)===!1)return;fc.copy(i).invert(),Zr.copy(e.ray).applyMatrix4(fc);const a=r/((this.scale.x+this.scale.y+this.scale.z)/3),c=a*a,l=new y,h=new y,u=new y,f=new y,d=this.isLineSegments?2:1,g=n.index,m=n.attributes.position;if(g!==null){const p=Math.max(0,o.start),_=Math.min(g.count,o.start+o.count);for(let x=p,b=_-1;x<b;x+=d){const R=g.getX(x),T=g.getX(x+1);if(l.fromBufferAttribute(m,R),h.fromBufferAttribute(m,T),Zr.distanceSqToSegment(l,h,f,u)>c)continue;f.applyMatrix4(this.matrixWorld);const O=e.ray.origin.distanceTo(f);O<e.near||O>e.far||t.push({distance:O,point:u.clone().applyMatrix4(this.matrixWorld),index:x,face:null,faceIndex:null,object:this})}}else{const p=Math.max(0,o.start),_=Math.min(m.count,o.start+o.count);for(let x=p,b=_-1;x<b;x+=d){if(l.fromBufferAttribute(m,x),h.fromBufferAttribute(m,x+1),Zr.distanceSqToSegment(l,h,f,u)>c)continue;f.applyMatrix4(this.matrixWorld);const T=e.ray.origin.distanceTo(f);T<e.near||T>e.far||t.push({distance:T,point:u.clone().applyMatrix4(this.matrixWorld),index:x,face:null,faceIndex:null,object:this})}}}updateMorphTargets(){const t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){const i=t[n[0]];if(i!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,o=i.length;r<o;r++){const a=i[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=r}}}}}const pc=new y,mc=new y;class Di extends Li{constructor(e,t){super(e,t),this.isLineSegments=!0,this.type="LineSegments"}computeLineDistances(){const e=this.geometry;if(e.index===null){const t=e.attributes.position,n=[];for(let i=0,r=t.count;i<r;i+=2)pc.fromBufferAttribute(t,i),mc.fromBufferAttribute(t,i+1),n[i]=i===0?0:n[i-1],n[i+1]=n[i]+pc.distanceTo(mc);e.setAttribute("lineDistance",new et(n,1))}else console.warn("THREE.LineSegments.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}}class hr extends Ft{constructor(e,t,n,i,r,o,a,c,l){super(e,t,n,i,r,o,a,c,l),this.isCanvasTexture=!0,this.needsUpdate=!0}}class dn{constructor(){this.type="Curve",this.arcLengthDivisions=200}getPoint(){return console.warn("THREE.Curve: .getPoint() not implemented."),null}getPointAt(e,t){const n=this.getUtoTmapping(e);return this.getPoint(n,t)}getPoints(e=5){const t=[];for(let n=0;n<=e;n++)t.push(this.getPoint(n/e));return t}getSpacedPoints(e=5){const t=[];for(let n=0;n<=e;n++)t.push(this.getPointAt(n/e));return t}getLength(){const e=this.getLengths();return e[e.length-1]}getLengths(e=this.arcLengthDivisions){if(this.cacheArcLengths&&this.cacheArcLengths.length===e+1&&!this.needsUpdate)return this.cacheArcLengths;this.needsUpdate=!1;const t=[];let n,i=this.getPoint(0),r=0;t.push(0);for(let o=1;o<=e;o++)n=this.getPoint(o/e),r+=n.distanceTo(i),t.push(r),i=n;return this.cacheArcLengths=t,t}updateArcLengths(){this.needsUpdate=!0,this.getLengths()}getUtoTmapping(e,t){const n=this.getLengths();let i=0;const r=n.length;let o;t?o=t:o=e*n[r-1];let a=0,c=r-1,l;for(;a<=c;)if(i=Math.floor(a+(c-a)/2),l=n[i]-o,l<0)a=i+1;else if(l>0)c=i-1;else{c=i;break}if(i=c,n[i]===o)return i/(r-1);const h=n[i],f=n[i+1]-h,d=(o-h)/f;return(i+d)/(r-1)}getTangent(e,t){let i=e-1e-4,r=e+1e-4;i<0&&(i=0),r>1&&(r=1);const o=this.getPoint(i),a=this.getPoint(r),c=t||(o.isVector2?new j:new y);return c.copy(a).sub(o).normalize(),c}getTangentAt(e,t){const n=this.getUtoTmapping(e);return this.getTangent(n,t)}computeFrenetFrames(e,t){const n=new y,i=[],r=[],o=[],a=new y,c=new ot;for(let d=0;d<=e;d++){const g=d/e;i[d]=this.getTangentAt(g,new y)}r[0]=new y,o[0]=new y;let l=Number.MAX_VALUE;const h=Math.abs(i[0].x),u=Math.abs(i[0].y),f=Math.abs(i[0].z);h<=l&&(l=h,n.set(1,0,0)),u<=l&&(l=u,n.set(0,1,0)),f<=l&&n.set(0,0,1),a.crossVectors(i[0],n).normalize(),r[0].crossVectors(i[0],a),o[0].crossVectors(i[0],r[0]);for(let d=1;d<=e;d++){if(r[d]=r[d-1].clone(),o[d]=o[d-1].clone(),a.crossVectors(i[d-1],i[d]),a.length()>Number.EPSILON){a.normalize();const g=Math.acos(St(i[d-1].dot(i[d]),-1,1));r[d].applyMatrix4(c.makeRotationAxis(a,g))}o[d].crossVectors(i[d],r[d])}if(t===!0){let d=Math.acos(St(r[0].dot(r[e]),-1,1));d/=e,i[0].dot(a.crossVectors(r[0],r[e]))>0&&(d=-d);for(let g=1;g<=e;g++)r[g].applyMatrix4(c.makeRotationAxis(i[g],d*g)),o[g].crossVectors(i[g],r[g])}return{tangents:i,normals:r,binormals:o}}clone(){return new this.constructor().copy(this)}copy(e){return this.arcLengthDivisions=e.arcLengthDivisions,this}toJSON(){const e={metadata:{version:4.6,type:"Curve",generator:"Curve.toJSON"}};return e.arcLengthDivisions=this.arcLengthDivisions,e.type=this.type,e}fromJSON(e){return this.arcLengthDivisions=e.arcLengthDivisions,this}}class Po extends dn{constructor(e=0,t=0,n=1,i=1,r=0,o=Math.PI*2,a=!1,c=0){super(),this.isEllipseCurve=!0,this.type="EllipseCurve",this.aX=e,this.aY=t,this.xRadius=n,this.yRadius=i,this.aStartAngle=r,this.aEndAngle=o,this.aClockwise=a,this.aRotation=c}getPoint(e,t){const n=t||new j,i=Math.PI*2;let r=this.aEndAngle-this.aStartAngle;const o=Math.abs(r)<Number.EPSILON;for(;r<0;)r+=i;for(;r>i;)r-=i;r<Number.EPSILON&&(o?r=0:r=i),this.aClockwise===!0&&!o&&(r===i?r=-i:r=r-i);const a=this.aStartAngle+e*r;let c=this.aX+this.xRadius*Math.cos(a),l=this.aY+this.yRadius*Math.sin(a);if(this.aRotation!==0){const h=Math.cos(this.aRotation),u=Math.sin(this.aRotation),f=c-this.aX,d=l-this.aY;c=f*h-d*u+this.aX,l=f*u+d*h+this.aY}return n.set(c,l)}copy(e){return super.copy(e),this.aX=e.aX,this.aY=e.aY,this.xRadius=e.xRadius,this.yRadius=e.yRadius,this.aStartAngle=e.aStartAngle,this.aEndAngle=e.aEndAngle,this.aClockwise=e.aClockwise,this.aRotation=e.aRotation,this}toJSON(){const e=super.toJSON();return e.aX=this.aX,e.aY=this.aY,e.xRadius=this.xRadius,e.yRadius=this.yRadius,e.aStartAngle=this.aStartAngle,e.aEndAngle=this.aEndAngle,e.aClockwise=this.aClockwise,e.aRotation=this.aRotation,e}fromJSON(e){return super.fromJSON(e),this.aX=e.aX,this.aY=e.aY,this.xRadius=e.xRadius,this.yRadius=e.yRadius,this.aStartAngle=e.aStartAngle,this.aEndAngle=e.aEndAngle,this.aClockwise=e.aClockwise,this.aRotation=e.aRotation,this}}class Gm extends Po{constructor(e,t,n,i,r,o){super(e,t,n,n,i,r,o),this.isArcCurve=!0,this.type="ArcCurve"}}function Lo(){let s=0,e=0,t=0,n=0;function i(r,o,a,c){s=r,e=a,t=-3*r+3*o-2*a-c,n=2*r-2*o+a+c}return{initCatmullRom:function(r,o,a,c,l){i(o,a,l*(a-r),l*(c-o))},initNonuniformCatmullRom:function(r,o,a,c,l,h,u){let f=(o-r)/l-(a-r)/(l+h)+(a-o)/h,d=(a-o)/h-(c-o)/(h+u)+(c-a)/u;f*=h,d*=h,i(o,a,f,d)},calc:function(r){const o=r*r,a=o*r;return s+e*r+t*o+n*a}}}const Us=new y,Kr=new Lo,Jr=new Lo,Qr=new Lo;class km extends dn{constructor(e=[],t=!1,n="centripetal",i=.5){super(),this.isCatmullRomCurve3=!0,this.type="CatmullRomCurve3",this.points=e,this.closed=t,this.curveType=n,this.tension=i}getPoint(e,t=new y){const n=t,i=this.points,r=i.length,o=(r-(this.closed?0:1))*e;let a=Math.floor(o),c=o-a;this.closed?a+=a>0?0:(Math.floor(Math.abs(a)/r)+1)*r:c===0&&a===r-1&&(a=r-2,c=1);let l,h;this.closed||a>0?l=i[(a-1)%r]:(Us.subVectors(i[0],i[1]).add(i[0]),l=Us);const u=i[a%r],f=i[(a+1)%r];if(this.closed||a+2<r?h=i[(a+2)%r]:(Us.subVectors(i[r-1],i[r-2]).add(i[r-1]),h=Us),this.curveType==="centripetal"||this.curveType==="chordal"){const d=this.curveType==="chordal"?.5:.25;let g=Math.pow(l.distanceToSquared(u),d),v=Math.pow(u.distanceToSquared(f),d),m=Math.pow(f.distanceToSquared(h),d);v<1e-4&&(v=1),g<1e-4&&(g=v),m<1e-4&&(m=v),Kr.initNonuniformCatmullRom(l.x,u.x,f.x,h.x,g,v,m),Jr.initNonuniformCatmullRom(l.y,u.y,f.y,h.y,g,v,m),Qr.initNonuniformCatmullRom(l.z,u.z,f.z,h.z,g,v,m)}else this.curveType==="catmullrom"&&(Kr.initCatmullRom(l.x,u.x,f.x,h.x,this.tension),Jr.initCatmullRom(l.y,u.y,f.y,h.y,this.tension),Qr.initCatmullRom(l.z,u.z,f.z,h.z,this.tension));return n.set(Kr.calc(c),Jr.calc(c),Qr.calc(c)),n}copy(e){super.copy(e),this.points=[];for(let t=0,n=e.points.length;t<n;t++){const i=e.points[t];this.points.push(i.clone())}return this.closed=e.closed,this.curveType=e.curveType,this.tension=e.tension,this}toJSON(){const e=super.toJSON();e.points=[];for(let t=0,n=this.points.length;t<n;t++){const i=this.points[t];e.points.push(i.toArray())}return e.closed=this.closed,e.curveType=this.curveType,e.tension=this.tension,e}fromJSON(e){super.fromJSON(e),this.points=[];for(let t=0,n=e.points.length;t<n;t++){const i=e.points[t];this.points.push(new y().fromArray(i))}return this.closed=e.closed,this.curveType=e.curveType,this.tension=e.tension,this}}function gc(s,e,t,n,i){const r=(n-e)*.5,o=(i-t)*.5,a=s*s,c=s*a;return(2*t-2*n+r+o)*c+(-3*t+3*n-2*r-o)*a+r*s+t}function Hm(s,e){const t=1-s;return t*t*e}function Vm(s,e){return 2*(1-s)*s*e}function Wm(s,e){return s*s*e}function Ki(s,e,t,n){return Hm(s,e)+Vm(s,t)+Wm(s,n)}function Xm(s,e){const t=1-s;return t*t*t*e}function jm(s,e){const t=1-s;return 3*t*t*s*e}function qm(s,e){return 3*(1-s)*s*s*e}function Ym(s,e){return s*s*s*e}function Ji(s,e,t,n,i){return Xm(s,e)+jm(s,t)+qm(s,n)+Ym(s,i)}class Do extends dn{constructor(e=new j,t=new j,n=new j,i=new j){super(),this.isCubicBezierCurve=!0,this.type="CubicBezierCurve",this.v0=e,this.v1=t,this.v2=n,this.v3=i}getPoint(e,t=new j){const n=t,i=this.v0,r=this.v1,o=this.v2,a=this.v3;return n.set(Ji(e,i.x,r.x,o.x,a.x),Ji(e,i.y,r.y,o.y,a.y)),n}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this.v3.copy(e.v3),this}toJSON(){const e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e.v3=this.v3.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this.v3.fromArray(e.v3),this}}class Ai extends dn{constructor(e=new y,t=new y,n=new y,i=new y){super(),this.isCubicBezierCurve3=!0,this.type="CubicBezierCurve3",this.v0=e,this.v1=t,this.v2=n,this.v3=i}getPoint(e,t=new y){const n=t,i=this.v0,r=this.v1,o=this.v2,a=this.v3;return n.set(Ji(e,i.x,r.x,o.x,a.x),Ji(e,i.y,r.y,o.y,a.y),Ji(e,i.z,r.z,o.z,a.z)),n}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this.v3.copy(e.v3),this}toJSON(){const e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e.v3=this.v3.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this.v3.fromArray(e.v3),this}}class ul extends dn{constructor(e=new j,t=new j){super(),this.isLineCurve=!0,this.type="LineCurve",this.v1=e,this.v2=t}getPoint(e,t=new j){const n=t;return e===1?n.copy(this.v2):(n.copy(this.v2).sub(this.v1),n.multiplyScalar(e).add(this.v1)),n}getPointAt(e,t){return this.getPoint(e,t)}getTangent(e,t=new j){return t.subVectors(this.v2,this.v1).normalize()}getTangentAt(e,t){return this.getTangent(e,t)}copy(e){return super.copy(e),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){const e=super.toJSON();return e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}}class dl extends dn{constructor(e=new y,t=new y){super(),this.isLineCurve3=!0,this.type="LineCurve3",this.v1=e,this.v2=t}getPoint(e,t=new y){const n=t;return e===1?n.copy(this.v2):(n.copy(this.v2).sub(this.v1),n.multiplyScalar(e).add(this.v1)),n}getPointAt(e,t){return this.getPoint(e,t)}getTangent(e,t=new y){return t.subVectors(this.v2,this.v1).normalize()}getTangentAt(e,t){return this.getTangent(e,t)}copy(e){return super.copy(e),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){const e=super.toJSON();return e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}}class fl extends dn{constructor(e=new j,t=new j,n=new j){super(),this.isQuadraticBezierCurve=!0,this.type="QuadraticBezierCurve",this.v0=e,this.v1=t,this.v2=n}getPoint(e,t=new j){const n=t,i=this.v0,r=this.v1,o=this.v2;return n.set(Ki(e,i.x,r.x,o.x),Ki(e,i.y,r.y,o.y)),n}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){const e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}}class $m extends dn{constructor(e=new y,t=new y,n=new y){super(),this.isQuadraticBezierCurve3=!0,this.type="QuadraticBezierCurve3",this.v0=e,this.v1=t,this.v2=n}getPoint(e,t=new y){const n=t,i=this.v0,r=this.v1,o=this.v2;return n.set(Ki(e,i.x,r.x,o.x),Ki(e,i.y,r.y,o.y),Ki(e,i.z,r.z,o.z)),n}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){const e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}}class pl extends dn{constructor(e=[]){super(),this.isSplineCurve=!0,this.type="SplineCurve",this.points=e}getPoint(e,t=new j){const n=t,i=this.points,r=(i.length-1)*e,o=Math.floor(r),a=r-o,c=i[o===0?o:o-1],l=i[o],h=i[o>i.length-2?i.length-1:o+1],u=i[o>i.length-3?i.length-1:o+2];return n.set(gc(a,c.x,l.x,h.x,u.x),gc(a,c.y,l.y,h.y,u.y)),n}copy(e){super.copy(e),this.points=[];for(let t=0,n=e.points.length;t<n;t++){const i=e.points[t];this.points.push(i.clone())}return this}toJSON(){const e=super.toJSON();e.points=[];for(let t=0,n=this.points.length;t<n;t++){const i=this.points[t];e.points.push(i.toArray())}return e}fromJSON(e){super.fromJSON(e),this.points=[];for(let t=0,n=e.points.length;t<n;t++){const i=e.points[t];this.points.push(new j().fromArray(i))}return this}}var yo=Object.freeze({__proto__:null,ArcCurve:Gm,CatmullRomCurve3:km,CubicBezierCurve:Do,CubicBezierCurve3:Ai,EllipseCurve:Po,LineCurve:ul,LineCurve3:dl,QuadraticBezierCurve:fl,QuadraticBezierCurve3:$m,SplineCurve:pl});class Zm extends dn{constructor(){super(),this.type="CurvePath",this.curves=[],this.autoClose=!1}add(e){this.curves.push(e)}closePath(){const e=this.curves[0].getPoint(0),t=this.curves[this.curves.length-1].getPoint(1);if(!e.equals(t)){const n=e.isVector2===!0?"LineCurve":"LineCurve3";this.curves.push(new yo[n](t,e))}return this}getPoint(e,t){const n=e*this.getLength(),i=this.getCurveLengths();let r=0;for(;r<i.length;){if(i[r]>=n){const o=i[r]-n,a=this.curves[r],c=a.getLength(),l=c===0?0:1-o/c;return a.getPointAt(l,t)}r++}return null}getLength(){const e=this.getCurveLengths();return e[e.length-1]}updateArcLengths(){this.needsUpdate=!0,this.cacheLengths=null,this.getCurveLengths()}getCurveLengths(){if(this.cacheLengths&&this.cacheLengths.length===this.curves.length)return this.cacheLengths;const e=[];let t=0;for(let n=0,i=this.curves.length;n<i;n++)t+=this.curves[n].getLength(),e.push(t);return this.cacheLengths=e,e}getSpacedPoints(e=40){const t=[];for(let n=0;n<=e;n++)t.push(this.getPoint(n/e));return this.autoClose&&t.push(t[0]),t}getPoints(e=12){const t=[];let n;for(let i=0,r=this.curves;i<r.length;i++){const o=r[i],a=o.isEllipseCurve?e*2:o.isLineCurve||o.isLineCurve3?1:o.isSplineCurve?e*o.points.length:e,c=o.getPoints(a);for(let l=0;l<c.length;l++){const h=c[l];n&&n.equals(h)||(t.push(h),n=h)}}return this.autoClose&&t.length>1&&!t[t.length-1].equals(t[0])&&t.push(t[0]),t}copy(e){super.copy(e),this.curves=[];for(let t=0,n=e.curves.length;t<n;t++){const i=e.curves[t];this.curves.push(i.clone())}return this.autoClose=e.autoClose,this}toJSON(){const e=super.toJSON();e.autoClose=this.autoClose,e.curves=[];for(let t=0,n=this.curves.length;t<n;t++){const i=this.curves[t];e.curves.push(i.toJSON())}return e}fromJSON(e){super.fromJSON(e),this.autoClose=e.autoClose,this.curves=[];for(let t=0,n=e.curves.length;t<n;t++){const i=e.curves[t];this.curves.push(new yo[i.type]().fromJSON(i))}return this}}class Qs extends Zm{constructor(e){super(),this.type="Path",this.currentPoint=new j,e&&this.setFromPoints(e)}setFromPoints(e){this.moveTo(e[0].x,e[0].y);for(let t=1,n=e.length;t<n;t++)this.lineTo(e[t].x,e[t].y);return this}moveTo(e,t){return this.currentPoint.set(e,t),this}lineTo(e,t){const n=new ul(this.currentPoint.clone(),new j(e,t));return this.curves.push(n),this.currentPoint.set(e,t),this}quadraticCurveTo(e,t,n,i){const r=new fl(this.currentPoint.clone(),new j(e,t),new j(n,i));return this.curves.push(r),this.currentPoint.set(n,i),this}bezierCurveTo(e,t,n,i,r,o){const a=new Do(this.currentPoint.clone(),new j(e,t),new j(n,i),new j(r,o));return this.curves.push(a),this.currentPoint.set(r,o),this}splineThru(e){const t=[this.currentPoint.clone()].concat(e),n=new pl(t);return this.curves.push(n),this.currentPoint.copy(e[e.length-1]),this}arc(e,t,n,i,r,o){const a=this.currentPoint.x,c=this.currentPoint.y;return this.absarc(e+a,t+c,n,i,r,o),this}absarc(e,t,n,i,r,o){return this.absellipse(e,t,n,n,i,r,o),this}ellipse(e,t,n,i,r,o,a,c){const l=this.currentPoint.x,h=this.currentPoint.y;return this.absellipse(e+l,t+h,n,i,r,o,a,c),this}absellipse(e,t,n,i,r,o,a,c){const l=new Po(e,t,n,i,r,o,a,c);if(this.curves.length>0){const u=l.getPoint(0);u.equals(this.currentPoint)||this.lineTo(u.x,u.y)}this.curves.push(l);const h=l.getPoint(1);return this.currentPoint.copy(h),this}copy(e){return super.copy(e),this.currentPoint.copy(e.currentPoint),this}toJSON(){const e=super.toJSON();return e.currentPoint=this.currentPoint.toArray(),e}fromJSON(e){return super.fromJSON(e),this.currentPoint.fromArray(e.currentPoint),this}}class Oo extends it{constructor(e=[new j(0,-.5),new j(.5,0),new j(0,.5)],t=12,n=0,i=Math.PI*2){super(),this.type="LatheGeometry",this.parameters={points:e,segments:t,phiStart:n,phiLength:i},t=Math.floor(t),i=St(i,0,Math.PI*2);const r=[],o=[],a=[],c=[],l=[],h=1/t,u=new y,f=new j,d=new y,g=new y,v=new y;let m=0,p=0;for(let _=0;_<=e.length-1;_++)switch(_){case 0:m=e[_+1].x-e[_].x,p=e[_+1].y-e[_].y,d.x=p*1,d.y=-m,d.z=p*0,v.copy(d),d.normalize(),c.push(d.x,d.y,d.z);break;case e.length-1:c.push(v.x,v.y,v.z);break;default:m=e[_+1].x-e[_].x,p=e[_+1].y-e[_].y,d.x=p*1,d.y=-m,d.z=p*0,g.copy(d),d.x+=v.x,d.y+=v.y,d.z+=v.z,d.normalize(),c.push(d.x,d.y,d.z),v.copy(g)}for(let _=0;_<=t;_++){const x=n+_*h*i,b=Math.sin(x),R=Math.cos(x);for(let T=0;T<=e.length-1;T++){u.x=e[T].x*b,u.y=e[T].y,u.z=e[T].x*R,o.push(u.x,u.y,u.z),f.x=_/t,f.y=T/(e.length-1),a.push(f.x,f.y);const E=c[3*T+0]*b,O=c[3*T+1],M=c[3*T+0]*R;l.push(E,O,M)}}for(let _=0;_<t;_++)for(let x=0;x<e.length-1;x++){const b=x+_*e.length,R=b,T=b+e.length,E=b+e.length+1,O=b+1;r.push(R,T,O),r.push(E,O,T)}this.setIndex(r),this.setAttribute("position",new et(o,3)),this.setAttribute("uv",new et(a,2)),this.setAttribute("normal",new et(l,3))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Oo(e.points,e.segments,e.phiStart,e.phiLength)}}class Bi extends it{constructor(e=1,t=1,n=1,i=32,r=1,o=!1,a=0,c=Math.PI*2){super(),this.type="CylinderGeometry",this.parameters={radiusTop:e,radiusBottom:t,height:n,radialSegments:i,heightSegments:r,openEnded:o,thetaStart:a,thetaLength:c};const l=this;i=Math.floor(i),r=Math.floor(r);const h=[],u=[],f=[],d=[];let g=0;const v=[],m=n/2;let p=0;_(),o===!1&&(e>0&&x(!0),t>0&&x(!1)),this.setIndex(h),this.setAttribute("position",new et(u,3)),this.setAttribute("normal",new et(f,3)),this.setAttribute("uv",new et(d,2));function _(){const b=new y,R=new y;let T=0;const E=(t-e)/n;for(let O=0;O<=r;O++){const M=[],w=O/r,N=w*(t-e)+e;for(let B=0;B<=i;B++){const q=B/i,L=q*c+a,F=Math.sin(L),G=Math.cos(L);R.x=N*F,R.y=-w*n+m,R.z=N*G,u.push(R.x,R.y,R.z),b.set(F,E,G).normalize(),f.push(b.x,b.y,b.z),d.push(q,1-w),M.push(g++)}v.push(M)}for(let O=0;O<i;O++)for(let M=0;M<r;M++){const w=v[M][O],N=v[M+1][O],B=v[M+1][O+1],q=v[M][O+1];h.push(w,N,q),h.push(N,B,q),T+=6}l.addGroup(p,T,0),p+=T}function x(b){const R=g,T=new j,E=new y;let O=0;const M=b===!0?e:t,w=b===!0?1:-1;for(let B=1;B<=i;B++)u.push(0,m*w,0),f.push(0,w,0),d.push(.5,.5),g++;const N=g;for(let B=0;B<=i;B++){const L=B/i*c+a,F=Math.cos(L),G=Math.sin(L);E.x=M*G,E.y=m*w,E.z=M*F,u.push(E.x,E.y,E.z),f.push(0,w,0),T.x=F*.5+.5,T.y=G*.5*w+.5,d.push(T.x,T.y),g++}for(let B=0;B<i;B++){const q=R+B,L=N+B;b===!0?h.push(L,L+1,q):h.push(L+1,L,q),O+=3}l.addGroup(p,O,b===!0?1:2),p+=O}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Bi(e.radiusTop,e.radiusBottom,e.height,e.radialSegments,e.heightSegments,e.openEnded,e.thetaStart,e.thetaLength)}}class Io extends Bi{constructor(e=1,t=1,n=32,i=1,r=!1,o=0,a=Math.PI*2){super(0,e,t,n,i,r,o,a),this.type="ConeGeometry",this.parameters={radius:e,height:t,radialSegments:n,heightSegments:i,openEnded:r,thetaStart:o,thetaLength:a}}static fromJSON(e){return new Io(e.radius,e.height,e.radialSegments,e.heightSegments,e.openEnded,e.thetaStart,e.thetaLength)}}const Fs=new y,zs=new y,eo=new y,Bs=new Yt;class Qi extends it{constructor(e=null,t=1){if(super(),this.type="EdgesGeometry",this.parameters={geometry:e,thresholdAngle:t},e!==null){const i=Math.pow(10,4),r=Math.cos($i*t),o=e.getIndex(),a=e.getAttribute("position"),c=o?o.count:a.count,l=[0,0,0],h=["a","b","c"],u=new Array(3),f={},d=[];for(let g=0;g<c;g+=3){o?(l[0]=o.getX(g),l[1]=o.getX(g+1),l[2]=o.getX(g+2)):(l[0]=g,l[1]=g+1,l[2]=g+2);const{a:v,b:m,c:p}=Bs;if(v.fromBufferAttribute(a,l[0]),m.fromBufferAttribute(a,l[1]),p.fromBufferAttribute(a,l[2]),Bs.getNormal(eo),u[0]=`${Math.round(v.x*i)},${Math.round(v.y*i)},${Math.round(v.z*i)}`,u[1]=`${Math.round(m.x*i)},${Math.round(m.y*i)},${Math.round(m.z*i)}`,u[2]=`${Math.round(p.x*i)},${Math.round(p.y*i)},${Math.round(p.z*i)}`,!(u[0]===u[1]||u[1]===u[2]||u[2]===u[0]))for(let _=0;_<3;_++){const x=(_+1)%3,b=u[_],R=u[x],T=Bs[h[_]],E=Bs[h[x]],O=`${b}_${R}`,M=`${R}_${b}`;M in f&&f[M]?(eo.dot(f[M].normal)<=r&&(d.push(T.x,T.y,T.z),d.push(E.x,E.y,E.z)),f[M]=null):O in f||(f[O]={index0:l[_],index1:l[x],normal:eo.clone()})}}for(const g in f)if(f[g]){const{index0:v,index1:m}=f[g];Fs.fromBufferAttribute(a,v),zs.fromBufferAttribute(a,m),d.push(Fs.x,Fs.y,Fs.z),d.push(zs.x,zs.y,zs.z)}this.setAttribute("position",new et(d,3))}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}}class ur extends Qs{constructor(e){super(e),this.uuid=Sn(),this.type="Shape",this.holes=[]}getPointsHoles(e){const t=[];for(let n=0,i=this.holes.length;n<i;n++)t[n]=this.holes[n].getPoints(e);return t}extractPoints(e){return{shape:this.getPoints(e),holes:this.getPointsHoles(e)}}copy(e){super.copy(e),this.holes=[];for(let t=0,n=e.holes.length;t<n;t++){const i=e.holes[t];this.holes.push(i.clone())}return this}toJSON(){const e=super.toJSON();e.uuid=this.uuid,e.holes=[];for(let t=0,n=this.holes.length;t<n;t++){const i=this.holes[t];e.holes.push(i.toJSON())}return e}fromJSON(e){super.fromJSON(e),this.uuid=e.uuid,this.holes=[];for(let t=0,n=e.holes.length;t<n;t++){const i=e.holes[t];this.holes.push(new Qs().fromJSON(i))}return this}}const Km={triangulate:function(s,e,t=2){const n=e&&e.length,i=n?e[0]*t:s.length;let r=ml(s,0,i,t,!0);const o=[];if(!r||r.next===r.prev)return o;let a,c,l,h,u,f,d;if(n&&(r=ng(s,e,r,t)),s.length>80*t){a=l=s[0],c=h=s[1];for(let g=t;g<i;g+=t)u=s[g],f=s[g+1],u<a&&(a=u),f<c&&(c=f),u>l&&(l=u),f>h&&(h=f);d=Math.max(l-a,h-c),d=d!==0?32767/d:0}return is(r,o,t,a,c,d,0),o}};function ml(s,e,t,n,i){let r,o;if(i===fg(s,e,t,n)>0)for(r=e;r<t;r+=n)o=vc(r,s[r],s[r+1],o);else for(r=t-n;r>=e;r-=n)o=vc(r,s[r],s[r+1],o);return o&&dr(o,o.next)&&(rs(o),o=o.next),o}function ei(s,e){if(!s)return s;e||(e=s);let t=s,n;do if(n=!1,!t.steiner&&(dr(t,t.next)||lt(t.prev,t,t.next)===0)){if(rs(t),t=e=t.prev,t===t.next)break;n=!0}else t=t.next;while(n||t!==e);return e}function is(s,e,t,n,i,r,o){if(!s)return;!o&&r&&ag(s,n,i,r);let a=s,c,l;for(;s.prev!==s.next;){if(c=s.prev,l=s.next,r?Qm(s,n,i,r):Jm(s)){e.push(c.i/t|0),e.push(s.i/t|0),e.push(l.i/t|0),rs(s),s=l.next,a=l.next;continue}if(s=l,s===a){o?o===1?(s=eg(ei(s),e,t),is(s,e,t,n,i,r,2)):o===2&&tg(s,e,t,n,i,r):is(ei(s),e,t,n,i,r,1);break}}}function Jm(s){const e=s.prev,t=s,n=s.next;if(lt(e,t,n)>=0)return!1;const i=e.x,r=t.x,o=n.x,a=e.y,c=t.y,l=n.y,h=i<r?i<o?i:o:r<o?r:o,u=a<c?a<l?a:l:c<l?c:l,f=i>r?i>o?i:o:r>o?r:o,d=a>c?a>l?a:l:c>l?c:l;let g=n.next;for(;g!==e;){if(g.x>=h&&g.x<=f&&g.y>=u&&g.y<=d&&Ci(i,a,r,c,o,l,g.x,g.y)&&lt(g.prev,g,g.next)>=0)return!1;g=g.next}return!0}function Qm(s,e,t,n){const i=s.prev,r=s,o=s.next;if(lt(i,r,o)>=0)return!1;const a=i.x,c=r.x,l=o.x,h=i.y,u=r.y,f=o.y,d=a<c?a<l?a:l:c<l?c:l,g=h<u?h<f?h:f:u<f?u:f,v=a>c?a>l?a:l:c>l?c:l,m=h>u?h>f?h:f:u>f?u:f,p=bo(d,g,e,t,n),_=bo(v,m,e,t,n);let x=s.prevZ,b=s.nextZ;for(;x&&x.z>=p&&b&&b.z<=_;){if(x.x>=d&&x.x<=v&&x.y>=g&&x.y<=m&&x!==i&&x!==o&&Ci(a,h,c,u,l,f,x.x,x.y)&&lt(x.prev,x,x.next)>=0||(x=x.prevZ,b.x>=d&&b.x<=v&&b.y>=g&&b.y<=m&&b!==i&&b!==o&&Ci(a,h,c,u,l,f,b.x,b.y)&&lt(b.prev,b,b.next)>=0))return!1;b=b.nextZ}for(;x&&x.z>=p;){if(x.x>=d&&x.x<=v&&x.y>=g&&x.y<=m&&x!==i&&x!==o&&Ci(a,h,c,u,l,f,x.x,x.y)&&lt(x.prev,x,x.next)>=0)return!1;x=x.prevZ}for(;b&&b.z<=_;){if(b.x>=d&&b.x<=v&&b.y>=g&&b.y<=m&&b!==i&&b!==o&&Ci(a,h,c,u,l,f,b.x,b.y)&&lt(b.prev,b,b.next)>=0)return!1;b=b.nextZ}return!0}function eg(s,e,t){let n=s;do{const i=n.prev,r=n.next.next;!dr(i,r)&&gl(i,n,n.next,r)&&ss(i,r)&&ss(r,i)&&(e.push(i.i/t|0),e.push(n.i/t|0),e.push(r.i/t|0),rs(n),rs(n.next),n=s=r),n=n.next}while(n!==s);return ei(n)}function tg(s,e,t,n,i,r){let o=s;do{let a=o.next.next;for(;a!==o.prev;){if(o.i!==a.i&&hg(o,a)){let c=vl(o,a);o=ei(o,o.next),c=ei(c,c.next),is(o,e,t,n,i,r,0),is(c,e,t,n,i,r,0);return}a=a.next}o=o.next}while(o!==s)}function ng(s,e,t,n){const i=[];let r,o,a,c,l;for(r=0,o=e.length;r<o;r++)a=e[r]*n,c=r<o-1?e[r+1]*n:s.length,l=ml(s,a,c,n,!1),l===l.next&&(l.steiner=!0),i.push(lg(l));for(i.sort(ig),r=0;r<i.length;r++)t=sg(i[r],t);return t}function ig(s,e){return s.x-e.x}function sg(s,e){const t=rg(s,e);if(!t)return e;const n=vl(t,s);return ei(n,n.next),ei(t,t.next)}function rg(s,e){let t=e,n=-1/0,i;const r=s.x,o=s.y;do{if(o<=t.y&&o>=t.next.y&&t.next.y!==t.y){const f=t.x+(o-t.y)*(t.next.x-t.x)/(t.next.y-t.y);if(f<=r&&f>n&&(n=f,i=t.x<t.next.x?t:t.next,f===r))return i}t=t.next}while(t!==e);if(!i)return null;const a=i,c=i.x,l=i.y;let h=1/0,u;t=i;do r>=t.x&&t.x>=c&&r!==t.x&&Ci(o<l?r:n,o,c,l,o<l?n:r,o,t.x,t.y)&&(u=Math.abs(o-t.y)/(r-t.x),ss(t,s)&&(u<h||u===h&&(t.x>i.x||t.x===i.x&&og(i,t)))&&(i=t,h=u)),t=t.next;while(t!==a);return i}function og(s,e){return lt(s.prev,s,e.prev)<0&&lt(e.next,s,s.next)<0}function ag(s,e,t,n){let i=s;do i.z===0&&(i.z=bo(i.x,i.y,e,t,n)),i.prevZ=i.prev,i.nextZ=i.next,i=i.next;while(i!==s);i.prevZ.nextZ=null,i.prevZ=null,cg(i)}function cg(s){let e,t,n,i,r,o,a,c,l=1;do{for(t=s,s=null,r=null,o=0;t;){for(o++,n=t,a=0,e=0;e<l&&(a++,n=n.nextZ,!!n);e++);for(c=l;a>0||c>0&&n;)a!==0&&(c===0||!n||t.z<=n.z)?(i=t,t=t.nextZ,a--):(i=n,n=n.nextZ,c--),r?r.nextZ=i:s=i,i.prevZ=r,r=i;t=n}r.nextZ=null,l*=2}while(o>1);return s}function bo(s,e,t,n,i){return s=(s-t)*i|0,e=(e-n)*i|0,s=(s|s<<8)&16711935,s=(s|s<<4)&252645135,s=(s|s<<2)&858993459,s=(s|s<<1)&1431655765,e=(e|e<<8)&16711935,e=(e|e<<4)&252645135,e=(e|e<<2)&858993459,e=(e|e<<1)&1431655765,s|e<<1}function lg(s){let e=s,t=s;do(e.x<t.x||e.x===t.x&&e.y<t.y)&&(t=e),e=e.next;while(e!==s);return t}function Ci(s,e,t,n,i,r,o,a){return(i-o)*(e-a)>=(s-o)*(r-a)&&(s-o)*(n-a)>=(t-o)*(e-a)&&(t-o)*(r-a)>=(i-o)*(n-a)}function hg(s,e){return s.next.i!==e.i&&s.prev.i!==e.i&&!ug(s,e)&&(ss(s,e)&&ss(e,s)&&dg(s,e)&&(lt(s.prev,s,e.prev)||lt(s,e.prev,e))||dr(s,e)&&lt(s.prev,s,s.next)>0&&lt(e.prev,e,e.next)>0)}function lt(s,e,t){return(e.y-s.y)*(t.x-e.x)-(e.x-s.x)*(t.y-e.y)}function dr(s,e){return s.x===e.x&&s.y===e.y}function gl(s,e,t,n){const i=ks(lt(s,e,t)),r=ks(lt(s,e,n)),o=ks(lt(t,n,s)),a=ks(lt(t,n,e));return!!(i!==r&&o!==a||i===0&&Gs(s,t,e)||r===0&&Gs(s,n,e)||o===0&&Gs(t,s,n)||a===0&&Gs(t,e,n))}function Gs(s,e,t){return e.x<=Math.max(s.x,t.x)&&e.x>=Math.min(s.x,t.x)&&e.y<=Math.max(s.y,t.y)&&e.y>=Math.min(s.y,t.y)}function ks(s){return s>0?1:s<0?-1:0}function ug(s,e){let t=s;do{if(t.i!==s.i&&t.next.i!==s.i&&t.i!==e.i&&t.next.i!==e.i&&gl(t,t.next,s,e))return!0;t=t.next}while(t!==s);return!1}function ss(s,e){return lt(s.prev,s,s.next)<0?lt(s,e,s.next)>=0&&lt(s,s.prev,e)>=0:lt(s,e,s.prev)<0||lt(s,s.next,e)<0}function dg(s,e){let t=s,n=!1;const i=(s.x+e.x)/2,r=(s.y+e.y)/2;do t.y>r!=t.next.y>r&&t.next.y!==t.y&&i<(t.next.x-t.x)*(r-t.y)/(t.next.y-t.y)+t.x&&(n=!n),t=t.next;while(t!==s);return n}function vl(s,e){const t=new Mo(s.i,s.x,s.y),n=new Mo(e.i,e.x,e.y),i=s.next,r=e.prev;return s.next=e,e.prev=s,t.next=i,i.prev=t,n.next=t,t.prev=n,r.next=n,n.prev=r,n}function vc(s,e,t,n){const i=new Mo(s,e,t);return n?(i.next=n.next,i.prev=n,n.next.prev=i,n.next=i):(i.prev=i,i.next=i),i}function rs(s){s.next.prev=s.prev,s.prev.next=s.next,s.prevZ&&(s.prevZ.nextZ=s.nextZ),s.nextZ&&(s.nextZ.prevZ=s.prevZ)}function Mo(s,e,t){this.i=s,this.x=e,this.y=t,this.prev=null,this.next=null,this.z=0,this.prevZ=null,this.nextZ=null,this.steiner=!1}function fg(s,e,t,n){let i=0;for(let r=e,o=t-n;r<t;r+=n)i+=(s[o]-s[r])*(s[r+1]+s[o+1]),o=r;return i}let Oi=class _l{static area(e){const t=e.length;let n=0;for(let i=t-1,r=0;r<t;i=r++)n+=e[i].x*e[r].y-e[r].x*e[i].y;return n*.5}static isClockWise(e){return _l.area(e)<0}static triangulateShape(e,t){const n=[],i=[],r=[];_c(e),xc(n,e);let o=e.length;t.forEach(_c);for(let c=0;c<t.length;c++)i.push(o),o+=t[c].length,xc(n,t[c]);const a=Km.triangulate(n,i);for(let c=0;c<a.length;c+=3)r.push(a.slice(c,c+3));return r}};function _c(s){const e=s.length;e>2&&s[e-1].equals(s[0])&&s.pop()}function xc(s,e){for(let t=0;t<e.length;t++)s.push(e[t].x),s.push(e[t].y)}class No extends it{constructor(e=new ur([new j(.5,.5),new j(-.5,.5),new j(-.5,-.5),new j(.5,-.5)]),t={}){super(),this.type="ExtrudeGeometry",this.parameters={shapes:e,options:t},e=Array.isArray(e)?e:[e];const n=this,i=[],r=[];for(let a=0,c=e.length;a<c;a++){const l=e[a];o(l)}this.setAttribute("position",new et(i,3)),this.setAttribute("uv",new et(r,2)),this.computeVertexNormals();function o(a){const c=[],l=t.curveSegments!==void 0?t.curveSegments:12,h=t.steps!==void 0?t.steps:1,u=t.depth!==void 0?t.depth:1;let f=t.bevelEnabled!==void 0?t.bevelEnabled:!0,d=t.bevelThickness!==void 0?t.bevelThickness:.2,g=t.bevelSize!==void 0?t.bevelSize:d-.1,v=t.bevelOffset!==void 0?t.bevelOffset:0,m=t.bevelSegments!==void 0?t.bevelSegments:3;const p=t.extrudePath,_=t.UVGenerator!==void 0?t.UVGenerator:pg;let x,b=!1,R,T,E,O;p&&(x=p.getSpacedPoints(h),b=!0,f=!1,R=p.computeFrenetFrames(h,!1),T=new y,E=new y,O=new y),f||(m=0,d=0,g=0,v=0);const M=a.extractPoints(l);let w=M.shape;const N=M.holes;if(!Oi.isClockWise(w)){w=w.reverse();for(let D=0,ue=N.length;D<ue;D++){const $=N[D];Oi.isClockWise($)&&(N[D]=$.reverse())}}const q=Oi.triangulateShape(w,N),L=w;for(let D=0,ue=N.length;D<ue;D++){const $=N[D];w=w.concat($)}function F(D,ue,$){return ue||console.error("THREE.ExtrudeGeometry: vec does not exist"),D.clone().addScaledVector(ue,$)}const G=w.length,Z=q.length;function K(D,ue,$){let ae,Y,Te;const ge=D.x-ue.x,A=D.y-ue.y,S=$.x-D.x,U=$.y-D.y,re=ge*ge+A*A,ie=ge*U-A*S;if(Math.abs(ie)>Number.EPSILON){const te=Math.sqrt(re),Ee=Math.sqrt(S*S+U*U),fe=ue.x-A/te,ye=ue.y+ge/te,Pe=$.x-U/Ee,ke=$.y+S/Ee,se=((Pe-fe)*U-(ke-ye)*S)/(ge*U-A*S);ae=fe+ge*se-D.x,Y=ye+A*se-D.y;const Ke=ae*ae+Y*Y;if(Ke<=2)return new j(ae,Y);Te=Math.sqrt(Ke/2)}else{let te=!1;ge>Number.EPSILON?S>Number.EPSILON&&(te=!0):ge<-Number.EPSILON?S<-Number.EPSILON&&(te=!0):Math.sign(A)===Math.sign(U)&&(te=!0),te?(ae=-A,Y=ge,Te=Math.sqrt(re)):(ae=ge,Y=A,Te=Math.sqrt(re/2))}return new j(ae/Te,Y/Te)}const J=[];for(let D=0,ue=L.length,$=ue-1,ae=D+1;D<ue;D++,$++,ae++)$===ue&&($=0),ae===ue&&(ae=0),J[D]=K(L[D],L[$],L[ae]);const Q=[];let ne,ce=J.concat();for(let D=0,ue=N.length;D<ue;D++){const $=N[D];ne=[];for(let ae=0,Y=$.length,Te=Y-1,ge=ae+1;ae<Y;ae++,Te++,ge++)Te===Y&&(Te=0),ge===Y&&(ge=0),ne[ae]=K($[ae],$[Te],$[ge]);Q.push(ne),ce=ce.concat(ne)}for(let D=0;D<m;D++){const ue=D/m,$=d*Math.cos(ue*Math.PI/2),ae=g*Math.sin(ue*Math.PI/2)+v;for(let Y=0,Te=L.length;Y<Te;Y++){const ge=F(L[Y],J[Y],ae);ve(ge.x,ge.y,-$)}for(let Y=0,Te=N.length;Y<Te;Y++){const ge=N[Y];ne=Q[Y];for(let A=0,S=ge.length;A<S;A++){const U=F(ge[A],ne[A],ae);ve(U.x,U.y,-$)}}}const X=g+v;for(let D=0;D<G;D++){const ue=f?F(w[D],ce[D],X):w[D];b?(E.copy(R.normals[0]).multiplyScalar(ue.x),T.copy(R.binormals[0]).multiplyScalar(ue.y),O.copy(x[0]).add(E).add(T),ve(O.x,O.y,O.z)):ve(ue.x,ue.y,0)}for(let D=1;D<=h;D++)for(let ue=0;ue<G;ue++){const $=f?F(w[ue],ce[ue],X):w[ue];b?(E.copy(R.normals[D]).multiplyScalar($.x),T.copy(R.binormals[D]).multiplyScalar($.y),O.copy(x[D]).add(E).add(T),ve(O.x,O.y,O.z)):ve($.x,$.y,u/h*D)}for(let D=m-1;D>=0;D--){const ue=D/m,$=d*Math.cos(ue*Math.PI/2),ae=g*Math.sin(ue*Math.PI/2)+v;for(let Y=0,Te=L.length;Y<Te;Y++){const ge=F(L[Y],J[Y],ae);ve(ge.x,ge.y,u+$)}for(let Y=0,Te=N.length;Y<Te;Y++){const ge=N[Y];ne=Q[Y];for(let A=0,S=ge.length;A<S;A++){const U=F(ge[A],ne[A],ae);b?ve(U.x,U.y+x[h-1].y,x[h-1].x+$):ve(U.x,U.y,u+$)}}}ee(),pe();function ee(){const D=i.length/3;if(f){let ue=0,$=G*ue;for(let ae=0;ae<Z;ae++){const Y=q[ae];De(Y[2]+$,Y[1]+$,Y[0]+$)}ue=h+m*2,$=G*ue;for(let ae=0;ae<Z;ae++){const Y=q[ae];De(Y[0]+$,Y[1]+$,Y[2]+$)}}else{for(let ue=0;ue<Z;ue++){const $=q[ue];De($[2],$[1],$[0])}for(let ue=0;ue<Z;ue++){const $=q[ue];De($[0]+G*h,$[1]+G*h,$[2]+G*h)}}n.addGroup(D,i.length/3-D,0)}function pe(){const D=i.length/3;let ue=0;Se(L,ue),ue+=L.length;for(let $=0,ae=N.length;$<ae;$++){const Y=N[$];Se(Y,ue),ue+=Y.length}n.addGroup(D,i.length/3-D,1)}function Se(D,ue){let $=D.length;for(;--$>=0;){const ae=$;let Y=$-1;Y<0&&(Y=D.length-1);for(let Te=0,ge=h+m*2;Te<ge;Te++){const A=G*Te,S=G*(Te+1),U=ue+ae+A,re=ue+Y+A,ie=ue+Y+S,te=ue+ae+S;Ie(U,re,ie,te)}}}function ve(D,ue,$){c.push(D),c.push(ue),c.push($)}function De(D,ue,$){we(D),we(ue),we($);const ae=i.length/3,Y=_.generateTopUV(n,i,ae-3,ae-2,ae-1);ze(Y[0]),ze(Y[1]),ze(Y[2])}function Ie(D,ue,$,ae){we(D),we(ue),we(ae),we(ue),we($),we(ae);const Y=i.length/3,Te=_.generateSideWallUV(n,i,Y-6,Y-3,Y-2,Y-1);ze(Te[0]),ze(Te[1]),ze(Te[3]),ze(Te[1]),ze(Te[2]),ze(Te[3])}function we(D){i.push(c[D*3+0]),i.push(c[D*3+1]),i.push(c[D*3+2])}function ze(D){r.push(D.x),r.push(D.y)}}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}toJSON(){const e=super.toJSON(),t=this.parameters.shapes,n=this.parameters.options;return mg(t,n,e)}static fromJSON(e,t){const n=[];for(let r=0,o=e.shapes.length;r<o;r++){const a=t[e.shapes[r]];n.push(a)}const i=e.options.extrudePath;return i!==void 0&&(e.options.extrudePath=new yo[i.type]().fromJSON(i)),new No(n,e.options)}}const pg={generateTopUV:function(s,e,t,n,i){const r=e[t*3],o=e[t*3+1],a=e[n*3],c=e[n*3+1],l=e[i*3],h=e[i*3+1];return[new j(r,o),new j(a,c),new j(l,h)]},generateSideWallUV:function(s,e,t,n,i,r){const o=e[t*3],a=e[t*3+1],c=e[t*3+2],l=e[n*3],h=e[n*3+1],u=e[n*3+2],f=e[i*3],d=e[i*3+1],g=e[i*3+2],v=e[r*3],m=e[r*3+1],p=e[r*3+2];return Math.abs(a-h)<Math.abs(o-l)?[new j(o,1-c),new j(l,1-u),new j(f,1-g),new j(v,1-p)]:[new j(a,1-c),new j(h,1-u),new j(d,1-g),new j(m,1-p)]}};function mg(s,e,t){if(t.shapes=[],Array.isArray(s))for(let n=0,i=s.length;n<i;n++){const r=s[n];t.shapes.push(r.uuid)}else t.shapes.push(s.uuid);return t.options=Object.assign({},e),e.extrudePath!==void 0&&(t.options.extrudePath=e.extrudePath.toJSON()),t}class fr extends it{constructor(e=new ur([new j(0,.5),new j(-.5,-.5),new j(.5,-.5)]),t=12){super(),this.type="ShapeGeometry",this.parameters={shapes:e,curveSegments:t};const n=[],i=[],r=[],o=[];let a=0,c=0;if(Array.isArray(e)===!1)l(e);else for(let h=0;h<e.length;h++)l(e[h]),this.addGroup(a,c,h),a+=c,c=0;this.setIndex(n),this.setAttribute("position",new et(i,3)),this.setAttribute("normal",new et(r,3)),this.setAttribute("uv",new et(o,2));function l(h){const u=i.length/3,f=h.extractPoints(t);let d=f.shape;const g=f.holes;Oi.isClockWise(d)===!1&&(d=d.reverse());for(let m=0,p=g.length;m<p;m++){const _=g[m];Oi.isClockWise(_)===!0&&(g[m]=_.reverse())}const v=Oi.triangulateShape(d,g);for(let m=0,p=g.length;m<p;m++){const _=g[m];d=d.concat(_)}for(let m=0,p=d.length;m<p;m++){const _=d[m];i.push(_.x,_.y,0),r.push(0,0,1),o.push(_.x,_.y)}for(let m=0,p=v.length;m<p;m++){const _=v[m],x=_[0]+u,b=_[1]+u,R=_[2]+u;n.push(x,b,R),c+=3}}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}toJSON(){const e=super.toJSON(),t=this.parameters.shapes;return gg(t,e)}static fromJSON(e,t){const n=[];for(let i=0,r=e.shapes.length;i<r;i++){const o=t[e.shapes[i]];n.push(o)}return new fr(n,e.curveSegments)}}function gg(s,e){if(e.shapes=[],Array.isArray(s))for(let t=0,n=s.length;t<n;t++){const i=s[t];e.shapes.push(i.uuid)}else e.shapes.push(s.uuid);return e}class er extends it{constructor(e=1,t=.4,n=12,i=48,r=Math.PI*2){super(),this.type="TorusGeometry",this.parameters={radius:e,tube:t,radialSegments:n,tubularSegments:i,arc:r},n=Math.floor(n),i=Math.floor(i);const o=[],a=[],c=[],l=[],h=new y,u=new y,f=new y;for(let d=0;d<=n;d++)for(let g=0;g<=i;g++){const v=g/i*r,m=d/n*Math.PI*2;u.x=(e+t*Math.cos(m))*Math.cos(v),u.y=(e+t*Math.cos(m))*Math.sin(v),u.z=t*Math.sin(m),a.push(u.x,u.y,u.z),h.x=e*Math.cos(v),h.y=e*Math.sin(v),f.subVectors(u,h).normalize(),c.push(f.x,f.y,f.z),l.push(g/i),l.push(d/n)}for(let d=1;d<=n;d++)for(let g=1;g<=i;g++){const v=(i+1)*d+g-1,m=(i+1)*(d-1)+g-1,p=(i+1)*(d-1)+g,_=(i+1)*d+g;o.push(v,m,_),o.push(m,p,_)}this.setIndex(o),this.setAttribute("position",new et(a,3)),this.setAttribute("normal",new et(c,3)),this.setAttribute("uv",new et(l,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new er(e.radius,e.tube,e.radialSegments,e.tubularSegments,e.arc)}}class Kn extends wn{constructor(e){super(),this.isMeshStandardMaterial=!0,this.defines={STANDARD:""},this.type="MeshStandardMaterial",this.color=new Fe(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new Fe(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=Wc,this.normalScale=new j(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.defines={STANDARD:""},this.color.copy(e.color),this.roughness=e.roughness,this.metalness=e.metalness,this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.roughnessMap=e.roughnessMap,this.metalnessMap=e.metalnessMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapIntensity=e.envMapIntensity,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}}class vg extends Qt{constructor(e){super(),this.isLineDashedMaterial=!0,this.type="LineDashedMaterial",this.scale=1,this.dashSize=3,this.gapSize=1,this.setValues(e)}copy(e){return super.copy(e),this.scale=e.scale,this.dashSize=e.dashSize,this.gapSize=e.gapSize,this}}class xl extends vt{constructor(e,t=1){super(),this.isLight=!0,this.type="Light",this.color=new Fe(e),this.intensity=t}dispose(){}copy(e,t){return super.copy(e,t),this.color.copy(e.color),this.intensity=e.intensity,this}toJSON(e){const t=super.toJSON(e);return t.object.color=this.color.getHex(),t.object.intensity=this.intensity,this.groundColor!==void 0&&(t.object.groundColor=this.groundColor.getHex()),this.distance!==void 0&&(t.object.distance=this.distance),this.angle!==void 0&&(t.object.angle=this.angle),this.decay!==void 0&&(t.object.decay=this.decay),this.penumbra!==void 0&&(t.object.penumbra=this.penumbra),this.shadow!==void 0&&(t.object.shadow=this.shadow.toJSON()),t}}const to=new ot,yc=new y,bc=new y;class _g{constructor(e){this.camera=e,this.bias=0,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new j(512,512),this.map=null,this.mapPass=null,this.matrix=new ot,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new Co,this._frameExtents=new j(1,1),this._viewportCount=1,this._viewports=[new Et(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(e){const t=this.camera,n=this.matrix;yc.setFromMatrixPosition(e.matrixWorld),t.position.copy(yc),bc.setFromMatrixPosition(e.target.matrixWorld),t.lookAt(bc),t.updateMatrixWorld(),to.multiplyMatrices(t.projectionMatrix,t.matrixWorldInverse),this._frustum.setFromProjectionMatrix(to),n.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),n.multiply(to)}getViewport(e){return this._viewports[e]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(e){return this.camera=e.camera.clone(),this.bias=e.bias,this.radius=e.radius,this.mapSize.copy(e.mapSize),this}clone(){return new this.constructor().copy(this)}toJSON(){const e={};return this.bias!==0&&(e.bias=this.bias),this.normalBias!==0&&(e.normalBias=this.normalBias),this.radius!==1&&(e.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(e.mapSize=this.mapSize.toArray()),e.camera=this.camera.toJSON(!1).object,delete e.camera.matrix,e}}class xg extends _g{constructor(){super(new It(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}}class yg extends xl{constructor(e,t){super(e,t),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(vt.DEFAULT_UP),this.updateMatrix(),this.target=new vt,this.shadow=new xg}dispose(){this.shadow.dispose()}copy(e){return super.copy(e),this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}}class bg extends xl{constructor(e,t){super(e,t),this.isAmbientLight=!0,this.type="AmbientLight"}}class pr{constructor(e,t,n=0,i=1/0){this.ray=new ar(e,t),this.near=n,this.far=i,this.camera=null,this.layers=new Ao,this.params={Mesh:{},Line:{threshold:1},LOD:{},Points:{threshold:1},Sprite:{}}}set(e,t){this.ray.set(e,t)}setFromCamera(e,t){t.isPerspectiveCamera?(this.ray.origin.setFromMatrixPosition(t.matrixWorld),this.ray.direction.set(e.x,e.y,.5).unproject(t).sub(this.ray.origin).normalize(),this.camera=t):t.isOrthographicCamera?(this.ray.origin.set(e.x,e.y,(t.near+t.far)/(t.near-t.far)).unproject(t),this.ray.direction.set(0,0,-1).transformDirection(t.matrixWorld),this.camera=t):console.error("THREE.Raycaster: Unsupported camera type: "+t.type)}intersectObject(e,t=!0,n=[]){return So(e,this,n,t),n.sort(Mc),n}intersectObjects(e,t=!0,n=[]){for(let i=0,r=e.length;i<r;i++)So(e[i],this,n,t);return n.sort(Mc),n}}function Mc(s,e){return s.distance-e.distance}function So(s,e,t,n){if(s.layers.test(e.layers)&&s.raycast(e,t),n===!0){const i=s.children;for(let r=0,o=i.length;r<o;r++)So(i[r],e,t,!0)}}class Sc{constructor(e=1,t=0,n=0){return this.radius=e,this.phi=t,this.theta=n,this}set(e,t,n){return this.radius=e,this.phi=t,this.theta=n,this}copy(e){return this.radius=e.radius,this.phi=e.phi,this.theta=e.theta,this}makeSafe(){return this.phi=Math.max(1e-6,Math.min(Math.PI-1e-6,this.phi)),this}setFromVector3(e){return this.setFromCartesianCoords(e.x,e.y,e.z)}setFromCartesianCoords(e,t,n){return this.radius=Math.sqrt(e*e+t*t+n*n),this.radius===0?(this.theta=0,this.phi=0):(this.theta=Math.atan2(e,n),this.phi=Math.acos(St(t/this.radius,-1,1))),this}clone(){return new this.constructor().copy(this)}}const Ec=new y;let Hs,no;class io extends vt{constructor(e=new y(0,0,1),t=new y(0,0,0),n=1,i=16776960,r=n*.2,o=r*.2){super(),this.type="ArrowHelper",Hs===void 0&&(Hs=new it,Hs.setAttribute("position",new et([0,0,0,0,1,0],3)),no=new Bi(0,.5,1,5,1),no.translate(0,-.5,0)),this.position.copy(t),this.line=new Li(Hs,new Qt({color:i,toneMapped:!1})),this.line.matrixAutoUpdate=!1,this.add(this.line),this.cone=new Oe(no,new Ct({color:i,toneMapped:!1})),this.cone.matrixAutoUpdate=!1,this.add(this.cone),this.setDirection(e),this.setLength(n,r,o)}setDirection(e){if(e.y>.99999)this.quaternion.set(0,0,0,1);else if(e.y<-.99999)this.quaternion.set(1,0,0,0);else{Ec.set(e.z,0,-e.x).normalize();const t=Math.acos(e.y);this.quaternion.setFromAxisAngle(Ec,t)}}setLength(e,t=e*.2,n=t*.2){this.line.scale.set(1,Math.max(1e-4,e-t),1),this.line.updateMatrix(),this.cone.scale.set(n,t,n),this.cone.position.y=e,this.cone.updateMatrix()}setColor(e){this.line.material.color.set(e),this.cone.material.color.set(e)}copy(e){return super.copy(e,!1),this.line.copy(e.line),this.cone.copy(e.cone),this}dispose(){this.line.geometry.dispose(),this.line.material.dispose(),this.cone.geometry.dispose(),this.cone.material.dispose()}}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:Eo}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=Eo);class Mg{constructor(){V(this,"listeners",{})}on(e,t){this.listeners[e]||(this.listeners[e]=[]),this.listeners[e].push(t)}off(e,t){this.listeners[e]&&(this.listeners[e]=this.listeners[e].filter(n=>n!==t))}emit(e,t){this.listeners[e]&&this.listeners[e].forEach(n=>n(t))}}const wc={type:"change"},so={type:"start"},Tc={type:"end"},Vs=new ar,Ac=new on,Sg=Math.cos(70*Ph.DEG2RAD);class Eg extends ti{constructor(e,t){super(),this.object=e,this.domElement=t,this.domElement.style.touchAction="none",this.enabled=!0,this.target=new y,this.cursor=new y,this.minDistance=0,this.maxDistance=1/0,this.minZoom=0,this.maxZoom=1/0,this.minTargetRadius=0,this.maxTargetRadius=1/0,this.minPolarAngle=0,this.maxPolarAngle=Math.PI,this.minAzimuthAngle=-1/0,this.maxAzimuthAngle=1/0,this.enableDamping=!1,this.dampingFactor=.05,this.enableZoom=!0,this.zoomSpeed=1,this.enableRotate=!0,this.rotateSpeed=1,this.enablePan=!0,this.panSpeed=1,this.screenSpacePanning=!0,this.keyPanSpeed=7,this.zoomToCursor=!1,this.autoRotate=!1,this.autoRotateSpeed=2,this.keys={LEFT:"ArrowLeft",UP:"ArrowUp",RIGHT:"ArrowRight",BOTTOM:"ArrowDown"},this.mouseButtons={LEFT:rn.ROTATE,MIDDLE:rn.DOLLY,RIGHT:rn.PAN},this.touches={ONE:ii.ROTATE,TWO:ii.DOLLY_PAN},this.target0=this.target.clone(),this.position0=this.object.position.clone(),this.zoom0=this.object.zoom,this._domElementKeyEvents=null,this.getPolarAngle=function(){return a.phi},this.getAzimuthalAngle=function(){return a.theta},this.getDistance=function(){return this.object.position.distanceTo(this.target)},this.listenToKeyEvents=function(P){P.addEventListener("keydown",Pe),this._domElementKeyEvents=P},this.stopListenToKeyEvents=function(){this._domElementKeyEvents.removeEventListener("keydown",Pe),this._domElementKeyEvents=null},this.saveState=function(){n.target0.copy(n.target),n.position0.copy(n.object.position),n.zoom0=n.object.zoom},this.reset=function(){n.target.copy(n.target0),n.object.position.copy(n.position0),n.object.zoom=n.zoom0,n.object.updateProjectionMatrix(),n.dispatchEvent(wc),n.update(),r=i.NONE},this.update=function(){const P=new y,le=new Qn().setFromUnitVectors(e.up,new y(0,1,0)),Ae=le.clone().invert(),Me=new y,oe=new Qn,I=new y,he=2*Math.PI;return function(Ne=null){const Le=n.object.position;P.copy(Le).sub(n.target),P.applyQuaternion(le),a.setFromVector3(P),n.autoRotate&&r===i.NONE&&B(w(Ne)),n.enableDamping?(a.theta+=c.theta*n.dampingFactor,a.phi+=c.phi*n.dampingFactor):(a.theta+=c.theta,a.phi+=c.phi);let $e=n.minAzimuthAngle,Ze=n.maxAzimuthAngle;isFinite($e)&&isFinite(Ze)&&($e<-Math.PI?$e+=he:$e>Math.PI&&($e-=he),Ze<-Math.PI?Ze+=he:Ze>Math.PI&&(Ze-=he),$e<=Ze?a.theta=Math.max($e,Math.min(Ze,a.theta)):a.theta=a.theta>($e+Ze)/2?Math.max($e,a.theta):Math.min(Ze,a.theta)),a.phi=Math.max(n.minPolarAngle,Math.min(n.maxPolarAngle,a.phi)),a.makeSafe(),n.enableDamping===!0?n.target.addScaledVector(h,n.dampingFactor):n.target.add(h),n.target.sub(n.cursor),n.target.clampLength(n.minTargetRadius,n.maxTargetRadius),n.target.add(n.cursor),n.zoomToCursor&&T||n.object.isOrthographicCamera?a.radius=Q(a.radius):a.radius=Q(a.radius*l),P.setFromSpherical(a),P.applyQuaternion(Ae),Le.copy(n.target).add(P),n.object.lookAt(n.target),n.enableDamping===!0?(c.theta*=1-n.dampingFactor,c.phi*=1-n.dampingFactor,h.multiplyScalar(1-n.dampingFactor)):(c.set(0,0,0),h.set(0,0,0));let ht=!1;if(n.zoomToCursor&&T){let ft=null;if(n.object.isPerspectiveCamera){const Qe=P.length();ft=Q(Qe*l);const mt=Qe-ft;n.object.position.addScaledVector(b,mt),n.object.updateMatrixWorld()}else if(n.object.isOrthographicCamera){const Qe=new y(R.x,R.y,0);Qe.unproject(n.object),n.object.zoom=Math.max(n.minZoom,Math.min(n.maxZoom,n.object.zoom/l)),n.object.updateProjectionMatrix(),ht=!0;const mt=new y(R.x,R.y,0);mt.unproject(n.object),n.object.position.sub(mt).add(Qe),n.object.updateMatrixWorld(),ft=P.length()}else console.warn("WARNING: OrbitControls.js encountered an unknown camera type - zoom to cursor disabled."),n.zoomToCursor=!1;ft!==null&&(this.screenSpacePanning?n.target.set(0,0,-1).transformDirection(n.object.matrix).multiplyScalar(ft).add(n.object.position):(Vs.origin.copy(n.object.position),Vs.direction.set(0,0,-1).transformDirection(n.object.matrix),Math.abs(n.object.up.dot(Vs.direction))<Sg?e.lookAt(n.target):(Ac.setFromNormalAndCoplanarPoint(n.object.up,n.target),Vs.intersectPlane(Ac,n.target))))}else n.object.isOrthographicCamera&&(n.object.zoom=Math.max(n.minZoom,Math.min(n.maxZoom,n.object.zoom/l)),n.object.updateProjectionMatrix(),ht=!0);return l=1,T=!1,ht||Me.distanceToSquared(n.object.position)>o||8*(1-oe.dot(n.object.quaternion))>o||I.distanceToSquared(n.target)>0?(n.dispatchEvent(wc),Me.copy(n.object.position),oe.copy(n.object.quaternion),I.copy(n.target),!0):!1}}(),this.dispose=function(){n.domElement.removeEventListener("contextmenu",Ke),n.domElement.removeEventListener("pointerdown",A),n.domElement.removeEventListener("pointercancel",U),n.domElement.removeEventListener("wheel",te),n.domElement.removeEventListener("pointermove",S),n.domElement.removeEventListener("pointerup",U),n._domElementKeyEvents!==null&&(n._domElementKeyEvents.removeEventListener("keydown",Pe),n._domElementKeyEvents=null)};const n=this,i={NONE:-1,ROTATE:0,DOLLY:1,PAN:2,TOUCH_ROTATE:3,TOUCH_PAN:4,TOUCH_DOLLY_PAN:5,TOUCH_DOLLY_ROTATE:6};let r=i.NONE;const o=1e-6,a=new Sc,c=new Sc;let l=1;const h=new y,u=new j,f=new j,d=new j,g=new j,v=new j,m=new j,p=new j,_=new j,x=new j,b=new y,R=new j;let T=!1;const E=[],O={};let M=!1;function w(P){return P!==null?2*Math.PI/60*n.autoRotateSpeed*P:2*Math.PI/60/60*n.autoRotateSpeed}function N(P){const le=Math.abs(P*.01);return Math.pow(.95,n.zoomSpeed*le)}function B(P){c.theta-=P}function q(P){c.phi-=P}const L=function(){const P=new y;return function(Ae,Me){P.setFromMatrixColumn(Me,0),P.multiplyScalar(-Ae),h.add(P)}}(),F=function(){const P=new y;return function(Ae,Me){n.screenSpacePanning===!0?P.setFromMatrixColumn(Me,1):(P.setFromMatrixColumn(Me,0),P.crossVectors(n.object.up,P)),P.multiplyScalar(Ae),h.add(P)}}(),G=function(){const P=new y;return function(Ae,Me){const oe=n.domElement;if(n.object.isPerspectiveCamera){const I=n.object.position;P.copy(I).sub(n.target);let he=P.length();he*=Math.tan(n.object.fov/2*Math.PI/180),L(2*Ae*he/oe.clientHeight,n.object.matrix),F(2*Me*he/oe.clientHeight,n.object.matrix)}else n.object.isOrthographicCamera?(L(Ae*(n.object.right-n.object.left)/n.object.zoom/oe.clientWidth,n.object.matrix),F(Me*(n.object.top-n.object.bottom)/n.object.zoom/oe.clientHeight,n.object.matrix)):(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - pan disabled."),n.enablePan=!1)}}();function Z(P){n.object.isPerspectiveCamera||n.object.isOrthographicCamera?l/=P:(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),n.enableZoom=!1)}function K(P){n.object.isPerspectiveCamera||n.object.isOrthographicCamera?l*=P:(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),n.enableZoom=!1)}function J(P,le){if(!n.zoomToCursor)return;T=!0;const Ae=n.domElement.getBoundingClientRect(),Me=P-Ae.left,oe=le-Ae.top,I=Ae.width,he=Ae.height;R.x=Me/I*2-1,R.y=-(oe/he)*2+1,b.set(R.x,R.y,1).unproject(n.object).sub(n.object.position).normalize()}function Q(P){return Math.max(n.minDistance,Math.min(n.maxDistance,P))}function ne(P){u.set(P.clientX,P.clientY)}function ce(P){J(P.clientX,P.clientX),p.set(P.clientX,P.clientY)}function X(P){g.set(P.clientX,P.clientY)}function ee(P){f.set(P.clientX,P.clientY),d.subVectors(f,u).multiplyScalar(n.rotateSpeed);const le=n.domElement;B(2*Math.PI*d.x/le.clientHeight),q(2*Math.PI*d.y/le.clientHeight),u.copy(f),n.update()}function pe(P){_.set(P.clientX,P.clientY),x.subVectors(_,p),x.y>0?Z(N(x.y)):x.y<0&&K(N(x.y)),p.copy(_),n.update()}function Se(P){v.set(P.clientX,P.clientY),m.subVectors(v,g).multiplyScalar(n.panSpeed),G(m.x,m.y),g.copy(v),n.update()}function ve(P){J(P.clientX,P.clientY),P.deltaY<0?K(N(P.deltaY)):P.deltaY>0&&Z(N(P.deltaY)),n.update()}function De(P){let le=!1;switch(P.code){case n.keys.UP:P.ctrlKey||P.metaKey||P.shiftKey?q(2*Math.PI*n.rotateSpeed/n.domElement.clientHeight):G(0,n.keyPanSpeed),le=!0;break;case n.keys.BOTTOM:P.ctrlKey||P.metaKey||P.shiftKey?q(-2*Math.PI*n.rotateSpeed/n.domElement.clientHeight):G(0,-n.keyPanSpeed),le=!0;break;case n.keys.LEFT:P.ctrlKey||P.metaKey||P.shiftKey?B(2*Math.PI*n.rotateSpeed/n.domElement.clientHeight):G(n.keyPanSpeed,0),le=!0;break;case n.keys.RIGHT:P.ctrlKey||P.metaKey||P.shiftKey?B(-2*Math.PI*n.rotateSpeed/n.domElement.clientHeight):G(-n.keyPanSpeed,0),le=!0;break}le&&(P.preventDefault(),n.update())}function Ie(P){if(E.length===1)u.set(P.pageX,P.pageY);else{const le=_e(P),Ae=.5*(P.pageX+le.x),Me=.5*(P.pageY+le.y);u.set(Ae,Me)}}function we(P){if(E.length===1)g.set(P.pageX,P.pageY);else{const le=_e(P),Ae=.5*(P.pageX+le.x),Me=.5*(P.pageY+le.y);g.set(Ae,Me)}}function ze(P){const le=_e(P),Ae=P.pageX-le.x,Me=P.pageY-le.y,oe=Math.sqrt(Ae*Ae+Me*Me);p.set(0,oe)}function D(P){n.enableZoom&&ze(P),n.enablePan&&we(P)}function ue(P){n.enableZoom&&ze(P),n.enableRotate&&Ie(P)}function $(P){if(E.length==1)f.set(P.pageX,P.pageY);else{const Ae=_e(P),Me=.5*(P.pageX+Ae.x),oe=.5*(P.pageY+Ae.y);f.set(Me,oe)}d.subVectors(f,u).multiplyScalar(n.rotateSpeed);const le=n.domElement;B(2*Math.PI*d.x/le.clientHeight),q(2*Math.PI*d.y/le.clientHeight),u.copy(f)}function ae(P){if(E.length===1)v.set(P.pageX,P.pageY);else{const le=_e(P),Ae=.5*(P.pageX+le.x),Me=.5*(P.pageY+le.y);v.set(Ae,Me)}m.subVectors(v,g).multiplyScalar(n.panSpeed),G(m.x,m.y),g.copy(v)}function Y(P){const le=_e(P),Ae=P.pageX-le.x,Me=P.pageY-le.y,oe=Math.sqrt(Ae*Ae+Me*Me);_.set(0,oe),x.set(0,Math.pow(_.y/p.y,n.zoomSpeed)),Z(x.y),p.copy(_);const I=(P.pageX+le.x)*.5,he=(P.pageY+le.y)*.5;J(I,he)}function Te(P){n.enableZoom&&Y(P),n.enablePan&&ae(P)}function ge(P){n.enableZoom&&Y(P),n.enableRotate&&$(P)}function A(P){n.enabled!==!1&&(E.length===0&&(n.domElement.setPointerCapture(P.pointerId),n.domElement.addEventListener("pointermove",S),n.domElement.addEventListener("pointerup",U)),Xe(P),P.pointerType==="touch"?ke(P):re(P))}function S(P){n.enabled!==!1&&(P.pointerType==="touch"?se(P):ie(P))}function U(P){Be(P),E.length===0&&(n.domElement.releasePointerCapture(P.pointerId),n.domElement.removeEventListener("pointermove",S),n.domElement.removeEventListener("pointerup",U)),n.dispatchEvent(Tc),r=i.NONE}function re(P){let le;switch(P.button){case 0:le=n.mouseButtons.LEFT;break;case 1:le=n.mouseButtons.MIDDLE;break;case 2:le=n.mouseButtons.RIGHT;break;default:le=-1}switch(le){case rn.DOLLY:if(n.enableZoom===!1)return;ce(P),r=i.DOLLY;break;case rn.ROTATE:if(P.ctrlKey||P.metaKey||P.shiftKey){if(n.enablePan===!1)return;X(P),r=i.PAN}else{if(n.enableRotate===!1)return;ne(P),r=i.ROTATE}break;case rn.PAN:if(P.ctrlKey||P.metaKey||P.shiftKey){if(n.enableRotate===!1)return;ne(P),r=i.ROTATE}else{if(n.enablePan===!1)return;X(P),r=i.PAN}break;default:r=i.NONE}r!==i.NONE&&n.dispatchEvent(so)}function ie(P){switch(r){case i.ROTATE:if(n.enableRotate===!1)return;ee(P);break;case i.DOLLY:if(n.enableZoom===!1)return;pe(P);break;case i.PAN:if(n.enablePan===!1)return;Se(P);break}}function te(P){n.enabled===!1||n.enableZoom===!1||r!==i.NONE||(P.preventDefault(),n.dispatchEvent(so),ve(Ee(P)),n.dispatchEvent(Tc))}function Ee(P){const le=P.deltaMode,Ae={clientX:P.clientX,clientY:P.clientY,deltaY:P.deltaY};switch(le){case 1:Ae.deltaY*=16;break;case 2:Ae.deltaY*=100;break}return P.ctrlKey&&!M&&(Ae.deltaY*=10),Ae}function fe(P){P.key==="Control"&&(M=!0,document.addEventListener("keyup",ye,{passive:!0,capture:!0}))}function ye(P){P.key==="Control"&&(M=!1,document.removeEventListener("keyup",ye,{passive:!0,capture:!0}))}function Pe(P){n.enabled===!1||n.enablePan===!1||De(P)}function ke(P){switch(Re(P),E.length){case 1:switch(n.touches.ONE){case ii.ROTATE:if(n.enableRotate===!1)return;Ie(P),r=i.TOUCH_ROTATE;break;case ii.PAN:if(n.enablePan===!1)return;we(P),r=i.TOUCH_PAN;break;default:r=i.NONE}break;case 2:switch(n.touches.TWO){case ii.DOLLY_PAN:if(n.enableZoom===!1&&n.enablePan===!1)return;D(P),r=i.TOUCH_DOLLY_PAN;break;case ii.DOLLY_ROTATE:if(n.enableZoom===!1&&n.enableRotate===!1)return;ue(P),r=i.TOUCH_DOLLY_ROTATE;break;default:r=i.NONE}break;default:r=i.NONE}r!==i.NONE&&n.dispatchEvent(so)}function se(P){switch(Re(P),r){case i.TOUCH_ROTATE:if(n.enableRotate===!1)return;$(P),n.update();break;case i.TOUCH_PAN:if(n.enablePan===!1)return;ae(P),n.update();break;case i.TOUCH_DOLLY_PAN:if(n.enableZoom===!1&&n.enablePan===!1)return;Te(P),n.update();break;case i.TOUCH_DOLLY_ROTATE:if(n.enableZoom===!1&&n.enableRotate===!1)return;ge(P),n.update();break;default:r=i.NONE}}function Ke(P){n.enabled!==!1&&P.preventDefault()}function Xe(P){E.push(P.pointerId)}function Be(P){delete O[P.pointerId];for(let le=0;le<E.length;le++)if(E[le]==P.pointerId){E.splice(le,1);return}}function Re(P){let le=O[P.pointerId];le===void 0&&(le=new j,O[P.pointerId]=le),le.set(P.pageX,P.pageY)}function _e(P){const le=P.pointerId===E[0]?E[1]:E[0];return O[le]}n.domElement.addEventListener("contextmenu",Ke),n.domElement.addEventListener("pointerdown",A),n.domElement.addEventListener("pointercancel",U),n.domElement.addEventListener("wheel",te,{passive:!1}),document.addEventListener("keydown",fe,{passive:!0,capture:!0}),this.update()}}var dt=(s=>(s.TOP="TOP",s.PERSPECTIVE="PERSPECTIVE",s.FRONT="FRONT",s.LEFT="LEFT",s))(dt||{});class wg{constructor(e,t,n){V(this,"_eventBus");V(this,"container");V(this,"renderer");V(this,"scene");V(this,"views",{});V(this,"activeView","PERSPECTIVE");V(this,"viewLabel");V(this,"viewMenu",null);V(this,"viewMenuCloseHandler",null);V(this,"resetButton");V(this,"controls",null);V(this,"currentToolId",null);this._eventBus=e,this.scene=n,console.log("ViewManager initialized");const i=document.getElementById(t);if(!i)throw new Error(`Container ${t} not found`);this.container=i;const r=document.createElement("div");r.style.position="absolute",r.style.top="65px",r.style.left="75px",r.style.display="flex",r.style.gap="15px",r.style.alignItems="center",r.style.zIndex="2000",r.style.pointerEvents="none",this.container.appendChild(r),this.viewLabel=document.createElement("div"),this.viewLabel.style.color="white",this.viewLabel.style.fontSize="14px",this.viewLabel.style.fontWeight="bold",this.viewLabel.style.fontFamily="Arial, sans-serif",this.viewLabel.style.textShadow="1px 1px 2px black",this.viewLabel.style.cursor="pointer",this.viewLabel.style.pointerEvents="auto",this.viewLabel.style.userSelect="none",this.viewLabel.style.textDecoration="underline",this.viewLabel.style.textDecorationColor="rgba(255,255,255,0.4)",this.viewLabel.onmouseenter=()=>{this.viewLabel.style.color="#aaddff"},this.viewLabel.onmouseleave=()=>{this.viewLabel.style.color="white"},this.viewLabel.onclick=o=>{o.stopPropagation(),this.toggleViewMenu()},r.appendChild(this.viewLabel),this.resetButton=document.createElement("div"),this.resetButton.innerText="Reset",this.resetButton.style.color="#AAAAAA",this.resetButton.style.fontSize="12px",this.resetButton.style.fontFamily="Arial, sans-serif",this.resetButton.style.cursor="pointer",this.resetButton.style.pointerEvents="auto",this.resetButton.style.textShadow="1px 1px 2px black",this.resetButton.style.textDecoration="underline",this.resetButton.onmouseenter=()=>this.resetButton.style.color="#FFFFFF",this.resetButton.onmouseleave=()=>this.resetButton.style.color="#AAAAAA",this.resetButton.onclick=()=>this.resetCurrentView(),r.appendChild(this.resetButton),this.renderer=new ll({antialias:!0}),this.renderer.setSize(this.container.clientWidth,this.container.clientHeight),this.renderer.setPixelRatio(window.devicePixelRatio),this.renderer.shadowMap.enabled=!0,this.renderer.shadowMap.type=Oc,this.container.appendChild(this.renderer.domElement),this.initListeners(),this.initViews(),this.loadState(),this.updateViewLabel(),this.setupControls(),this.animate=this.animate.bind(this),requestAnimationFrame(this.animate),window.addEventListener("resize",()=>this.onWindowResize()),window.addEventListener("beforeunload",()=>this.saveState())}initListeners(){this._eventBus.on("tool-selected",e=>{if(e&&e!=="select"){if(e==="brush_create"&&this.activeView==="TOP"){this.showToast("Pinsel-Erstellung nur in Front- oder Perspektivansicht sinnvoll!",3e3),setTimeout(()=>this._eventBus.emit("tool-selected","select"),0);return}if(e!=="brush_create"&&(this.activeView==="FRONT"||this.activeView==="LEFT")){this.showToast("Erstellen nur in Oben- oder Perspektivansicht möglich!",3e3),setTimeout(()=>this._eventBus.emit("tool-selected","select"),0);return}}this.currentToolId=e,this.updateControlsMode()}),this._eventBus.on("camera-controls-lock",e=>{this.setControlsEnabled(!e)})}showToast(e,t=3e3){const n=document.createElement("div");n.innerText=e,Object.assign(n.style,{position:"absolute",top:"50%",left:"50%",transform:"translate(-50%, -50%)",background:"rgba(0, 0, 0, 0.8)",color:"white",padding:"15px 25px",borderRadius:"5px",fontFamily:"Arial, sans-serif",fontSize:"14px",zIndex:"5000",pointerEvents:"none",opacity:"0",transition:"opacity 0.3s"}),this.container.appendChild(n),requestAnimationFrame(()=>n.style.opacity="1"),setTimeout(()=>{n.style.opacity="0",setTimeout(()=>{n.parentElement&&this.container.removeChild(n)},300)},t)}saveState(){this.controls&&this.views[this.activeView]&&this.views[this.activeView].target.copy(this.controls.target);const e={activeView:this.activeView,views:{}};Object.values(this.views).forEach(t=>{t&&(e.views[t.type]={position:t.camera.position.toArray(),target:t.target.toArray(),zoom:t.camera.zoom})}),localStorage.setItem("viewState",JSON.stringify(e))}loadState(){const e=localStorage.getItem("viewState");if(e)try{const t=JSON.parse(e);t.views&&Object.keys(t.views).forEach(n=>{const i=t.views[n],r=this.views[n];r&&i&&(r.camera.position.fromArray(i.position),r.target.fromArray(i.target),i.zoom&&(r.camera.zoom=i.zoom,r.camera.updateProjectionMatrix()))}),t.activeView&&this.views[t.activeView]&&(this.activeView=t.activeView),this._eventBus.emit("camera-change",null)}catch(t){console.warn("Failed to load view state",t)}}setActiveView(e){this.views[e]&&this.activeView!==e&&(this.controls&&this.views[this.activeView]&&this.views[this.activeView].target.copy(this.controls.target),this.activeView=e,this.updateViewLabel(),this.updateControlsMode(),this.onWindowResize(),this.setupControls(),this.saveState(),this._eventBus.emit("camera-view-changed",e))}getActiveView(){return this.activeView}getActiveCamera(){var e;return(e=this.views[this.activeView])==null?void 0:e.camera}getCanvas(){return this.renderer.domElement}setControlsEnabled(e){this.controls&&(this.controls.enabled=e)}focusOnObject(e){if(!this.controls)return;const t=new ni().setFromObject(e),n=t.getCenter(new y),i=t.getSize(new y);this.controls.target.copy(n);const r=Math.max(i.x,i.y,i.z),o=this.views[this.activeView];if(o&&o.camera instanceof Tt){let c=Math.abs(r/2/Math.tan(Math.PI*45/360))*1.2;const l=new y().subVectors(o.camera.position,n).normalize().multiplyScalar(c);o.camera.position.copy(n).add(l)}else if(o&&o.camera instanceof It){let c=1e3/(r*1.2);o.camera.zoom=Math.min(Math.max(c,.01),100),o.camera.updateProjectionMatrix()}this.controls.update(),this._eventBus.emit("camera-change",null)}getScene(){return this.scene}getControls(){return this.controls}resetCurrentView(){const e=this.views[this.activeView];if(!e)return;const t=5e4;switch(e.target.set(0,0,0),this.controls&&this.controls.target.set(0,0,0),this.activeView){case"TOP":e.camera.position.set(0,t,0),e.camera.lookAt(0,0,0),e.camera.up.set(0,0,-1);break;case"FRONT":e.camera.position.set(0,0,t),e.camera.lookAt(0,0,0);break;case"LEFT":e.camera.position.set(-t,0,0),e.camera.lookAt(0,0,0);break;case"PERSPECTIVE":e.camera.position.set(500,500,500),e.camera.lookAt(0,0,0);break}(e.camera instanceof Tt||e.camera instanceof It)&&(e.camera instanceof It&&(e.camera.zoom=1),e.camera.updateProjectionMatrix()),this.controls&&this.controls.update(),this.saveState(),this._eventBus.emit("camera-change",null)}updateViewLabel(){const e={TOP:"Oben",FRONT:"Vorne",LEFT:"Links",PERSPECTIVE:"Perspektive"};this.viewLabel.innerText=e[this.activeView]}toggleViewMenu(){if(this.viewMenu){this.closeViewMenu();return}const e={TOP:"Oben",FRONT:"Vorne",LEFT:"Links",PERSPECTIVE:"Perspektive"},t=document.createElement("div");this.viewMenu=t,Object.assign(t.style,{position:"absolute",top:"85px",left:"75px",background:"rgba(30, 30, 30, 0.95)",border:"1px solid #555",borderRadius:"4px",zIndex:"3000",overflow:"hidden",boxShadow:"0 4px 12px rgba(0,0,0,0.6)",fontFamily:"Arial, sans-serif",fontSize:"13px",minWidth:"130px"}),["PERSPECTIVE","TOP","FRONT","LEFT"].forEach(i=>{const r=document.createElement("div"),o=i===this.activeView;Object.assign(r.style,{padding:"8px 14px",color:o?"#aaddff":"#dddddd",cursor:"pointer",fontWeight:o?"bold":"normal",background:o?"rgba(0, 122, 204, 0.25)":"transparent",transition:"background 0.15s"}),r.innerText=e[i],r.onmouseenter=()=>{i!==this.activeView&&(r.style.background="rgba(255,255,255,0.08)")},r.onmouseleave=()=>{i!==this.activeView&&(r.style.background="transparent")},r.onclick=a=>{a.stopPropagation(),this.closeViewMenu(),this.setActiveView(i)},t.appendChild(r)}),this.container.appendChild(t);const n=i=>{!t.contains(i.target)&&!this.viewLabel.contains(i.target)&&this.closeViewMenu()};this.viewMenuCloseHandler=n,document.addEventListener("mousedown",n),document.addEventListener("touchstart",n)}closeViewMenu(){this.viewMenu&&(this.viewMenu.parentElement&&this.viewMenu.parentElement.removeChild(this.viewMenu),this.viewMenu=null),this.viewMenuCloseHandler&&(document.removeEventListener("mousedown",this.viewMenuCloseHandler),document.removeEventListener("touchstart",this.viewMenuCloseHandler),this.viewMenuCloseHandler=null)}setupControls(){this.controls&&this.controls.dispose();const e=this.views[this.activeView];e&&(this.controls=new Eg(e.camera,this.renderer.domElement),this.controls.enableDamping=!0,this.controls.dampingFactor=.05,this.controls.addEventListener("end",()=>this.saveState()),this.controls.addEventListener("change",()=>this._eventBus.emit("camera-change",null)),this.controls.target.copy(e.target),this.updateControlsMode(),this.controls.enableRotate=this.activeView==="PERSPECTIVE",this.controls.update())}updateControlsMode(){if(!this.controls)return;this.currentToolId===null||this.currentToolId==="select"||this.currentToolId==="face_select"||this.activeView==="PERSPECTIVE"?this.controls.mouseButtons={LEFT:rn.ROTATE,MIDDLE:rn.DOLLY,RIGHT:rn.PAN}:this.controls.mouseButtons={LEFT:null,MIDDLE:rn.DOLLY,RIGHT:rn.PAN}}initViews(){const e=this.container.clientWidth/this.container.clientHeight,t=500,n=5e4,i=new It(-t*e,t*e,t,-t,-1e6,1e6);i.position.set(0,n,0),i.lookAt(0,0,0),i.up.set(0,0,-1);const r=new Tt(45,e,.1,1e6);r.position.set(500,500,500),r.lookAt(0,0,0);const o=new It(-t*e,t*e,t,-t,-1e6,1e6);o.position.set(0,0,n),o.lookAt(0,0,0);const a=new It(-t*e,t*e,t,-t,-1e6,1e6);a.position.set(-n,0,0),a.lookAt(0,0,0),this.views.TOP={type:"TOP",container:this.container,camera:i,scene:this.scene,target:new y(0,0,0)},this.views.PERSPECTIVE={type:"PERSPECTIVE",container:this.container,camera:r,scene:this.scene,target:new y(0,0,0)},this.views.FRONT={type:"FRONT",container:this.container,camera:o,scene:this.scene,target:new y(0,0,0)},this.views.LEFT={type:"LEFT",container:this.container,camera:a,scene:this.scene,target:new y(0,0,0)}}onWindowResize(){const e=this.container.clientWidth,t=this.container.clientHeight;this.renderer.setSize(e,t);const n=e/t,i=500;Object.values(this.views).forEach(r=>{r&&r.camera instanceof It?(r.camera.left=-i*n,r.camera.right=i*n,r.camera.top=i,r.camera.bottom=-i,r.camera.near=-1e6,r.camera.far=1e6,r.camera.updateProjectionMatrix()):r&&r.camera instanceof Tt&&(r.camera.aspect=n,r.camera.updateProjectionMatrix())}),this._eventBus.emit("camera-change",null)}animate(){requestAnimationFrame(this.animate),this.controls&&this.controls.update();const e=this.views[this.activeView];e&&(this.renderer.clear(),this.renderer.render(e.scene,e.camera))}}class Tg{constructor(e,t){V(this,"eventBus");V(this,"scene");V(this,"objects",[]);V(this,"selectedObjects",new Set);this.eventBus=e,this.scene=t,console.log("ObjectManager initialized"),setInterval(()=>this.sanitizeObjects(),500),this.eventBus.on("object-added",n=>{this.updateObjectVisuals(n)}),this.eventBus.on("delete-selected-object",()=>{this.getSelectedObjects().forEach(i=>this.removeObject(i)),this.selectObject(null),this.eventBus.emit("selection-changed",[])}),this.eventBus.on("update-object-geometry",n=>{(!n.userData.modifiers||n.userData.modifiers.length===0)&&this.updateObjectVisuals(n)})}updateObjectVisuals(e){const t=e.userData.materialParams;if(!t)return;const n="Visual_Wireframe_Overlay",i=r=>{if(r.userData.isHelper||r.name===n||r.userData.isControlPoint||r.userData.isAnchor)return;const o=r.material;o&&(o.isMeshStandardMaterial||o.isMeshPhongMaterial)&&(t.color&&o.color.set(t.color),t.roughness!==void 0&&o.roughness!==void 0&&(o.roughness=t.roughness),t.metalness!==void 0&&o.metalness!==void 0&&(o.metalness=t.metalness),t.opacity!==void 0&&(o.opacity=t.opacity,o.transparent=t.opacity<1,o.depthWrite=t.opacity>=1,o.needsUpdate=!0),t.flatShading!==void 0&&(o.flatShading=t.flatShading,o.needsUpdate=!0));let a=r.children.find(c=>c.name===n);if(t.wireframe){if(!a){const c=r.geometry;if(!c||!c.attributes||!c.attributes.position||c.attributes.position.count===0)return;const l=new Qi(c,1),h=new Qt({color:16777215,transparent:!0,opacity:.5});a=new Di(l,h),a.name=n,a.userData.isGeneratedVisual=!0,a.renderOrder=1,r.add(a)}a.visible=!0}else a&&(r.remove(a),a.geometry&&a.geometry.dispose(),a.material&&a.material.dispose())};e.traverse(r=>{r instanceof Oe&&i(r)})}sanitizeObjects(){this.objects.forEach(t=>{(t.scale.x!==1||t.scale.y!==1||t.scale.z!==1)&&(t.scale.set(1,1,1),t.updateMatrixWorld());let n=!1;(!Number.isFinite(t.position.x)||Math.abs(t.position.x)>5e4)&&(t.position.x=0,n=!0),(!Number.isFinite(t.position.y)||Math.abs(t.position.y)>5e4)&&(t.position.y=0,n=!0),(!Number.isFinite(t.position.z)||Math.abs(t.position.z)>5e4)&&(t.position.z=0,n=!0),n&&(console.warn(`ObjectManager: Rescued corrupted object "${t.name}" from extreme coordinates.`),t.updateMatrixWorld())})}selectObject(e,t=!1){t||(this.selectedObjects.forEach(n=>{this.setObjectHelperVisibility(n,!1),this.setAnchorColor(n,13421772)}),this.selectedObjects.clear()),e&&(t&&this.selectedObjects.has(e)?(this.selectedObjects.delete(e),this.setObjectHelperVisibility(e,!1),this.setAnchorColor(e,13421772)):(this.selectedObjects.add(e),this.setObjectHelperVisibility(e,!0),this.setAnchorColor(e,16711680))),this.eventBus.emit("selection-changed",Array.from(this.selectedObjects))}deselectAll(){this.objects.forEach(e=>{this.setObjectHelperVisibility(e,!1),this.setAnchorColor(e,13421772)}),this.selectedObjects.clear(),this.eventBus.emit("selection-changed",[])}setObjectHelperVisibility(e,t){e.traverse(n=>{n.userData.isControlPoint||n.userData.isHelperLine?n.visible=t:n.userData.isAnchor&&(n.userData.isMainAnchor?n.visible=!0:n.visible=t)})}setAnchorColor(e,t){const n=e.children.find(i=>i.userData.isAnchor&&i.userData.isMainAnchor);if(n){const i=n.material;i&&i.color&&i.color.setHex(t)}}getSelectedObjects(){return Array.from(this.selectedObjects)}getObjects(){return this.objects}addObject(e,t=!0){if(!e.name||e.name.startsWith("Object")||e.name.startsWith("Circle")||e.name.startsWith("Square")||e.name.startsWith("Line")){const n=e.userData.type;let i="Objekt";n==="line"?i="Linie":n==="square"?i="Rechteck":n==="circle"?i="Kreis":n==="background_image"?i="Bild":n==="bezier_path"&&(i=e.userData.isClosed?"Form":"Pfad");const r=this.objects.filter(o=>o.userData.type===n).length+1;e.name=`${i} ${r}`}this.scene.add(e),this.objects.push(e),t&&this.selectObject(e),this.eventBus.emit("object-added",e)}removeObject(e){if(!e)return;e.traverse(n=>{n.geometry&&n.geometry.dispose(),n.material&&(Array.isArray(n.material)?n.material.forEach(i=>i.dispose()):n.material.dispose())}),this.scene.remove(e);const t=this.objects.indexOf(e);t>-1&&this.objects.splice(t,1),this.selectedObjects.delete(e),console.log(`ObjectManager: Object "${e.name}" and its visuals permanently removed.`),this.eventBus.emit("object-removed",e)}clearAll(){this.objects.forEach(e=>{this.scene.remove(e),e.traverse(t=>{t.geometry&&t.geometry.dispose(),t.material&&(Array.isArray(t.material)?t.material.forEach(n=>n.dispose()):t.material.dispose())})}),this.objects=[],this.selectedObjects.clear(),this.eventBus.emit("selection-changed",[]),this.eventBus.emit("objects-cleared",null)}}class Ag{constructor(){V(this,"panel");V(this,"logContainer");V(this,"visible",!1);V(this,"originalConsole",{log:console.log.bind(console),warn:console.warn.bind(console),error:console.error.bind(console),info:console.info.bind(console)});this.panel=this.createPanel(),this.logContainer=this.panel.querySelector(".debug-log"),this.interceptConsoleMethods(),document.body.appendChild(this.panel)}toggle(){this.visible=!this.visible,this.panel.style.display=this.visible?"flex":"none"}destroy(){console.log=this.originalConsole.log,console.warn=this.originalConsole.warn,console.error=this.originalConsole.error,console.info=this.originalConsole.info,this.panel.remove()}createPanel(){const e=document.createElement("div");Object.assign(e.style,{position:"fixed",bottom:"30px",left:"50%",transform:"translateX(-50%)",width:"780px",maxWidth:"95vw",height:"280px",background:"#1a1a1a",border:"1px solid #555",borderRadius:"6px",display:"none",flexDirection:"column",zIndex:"9999",fontFamily:"monospace",fontSize:"12px",boxShadow:"0 4px 24px rgba(0,0,0,0.7)"});const t=document.createElement("div");Object.assign(t.style,{display:"flex",alignItems:"center",justifyContent:"space-between",padding:"4px 10px",background:"#2a2a2a",borderBottom:"1px solid #444",borderRadius:"6px 6px 0 0",cursor:"move",userSelect:"none"});const n=document.createElement("span");n.textContent="Debug Console",n.style.cssText="color: #ccc; font-size: 12px; font-weight: bold;";const i=document.createElement("div");i.style.display="flex",i.style.gap="6px";const r=document.createElement("button");r.textContent="Clear",r.style.cssText="background:#333; color:#aaa; border:1px solid #555; padding:1px 8px; font-size:11px; cursor:pointer; border-radius:3px;";const o=document.createElement("button");o.textContent="✕",o.style.cssText="background:#333; color:#aaa; border:1px solid #555; padding:1px 6px; font-size:11px; cursor:pointer; border-radius:3px;",i.appendChild(r),i.appendChild(o),t.appendChild(n),t.appendChild(i);const a=document.createElement("div");return a.className="debug-log",Object.assign(a.style,{flex:"1",overflowY:"auto",padding:"6px 10px",color:"#ddd",lineHeight:"1.5"}),e.appendChild(t),e.appendChild(a),r.onclick=()=>{a.innerHTML=""},o.onclick=()=>{this.visible=!1,e.style.display="none"},this.makeDraggable(e,t),e}appendEntry(e,t){const n=document.createElement("div"),i={log:"#ddd",info:"#7cf",warn:"#fc7",error:"#f77"};n.style.cssText=`color:${i[e]}; border-bottom:1px solid #2a2a2a; padding:1px 0; white-space:pre-wrap; word-break:break-all;`;const r=e!=="log"?`[${e.toUpperCase()}] `:"";n.textContent=r+t.map(o=>{if(typeof o=="object")try{return JSON.stringify(o,null,2)}catch{return String(o)}return String(o)}).join(" "),this.logContainer.appendChild(n),this.logContainer.scrollTop=this.logContainer.scrollHeight}interceptConsoleMethods(){["log","warn","error","info"].forEach(t=>{const n=this.originalConsole[t];console[t]=(...i)=>{n(...i),this.appendEntry(t,i)}})}makeDraggable(e,t){let n=!1,i=0,r=0,o=0,a=0;const c=h=>{n&&(e.style.left=o+h.clientX-i+"px",e.style.top=a+h.clientY-r+"px")},l=()=>{n=!1};t.addEventListener("mousedown",h=>{n=!0;const u=e.getBoundingClientRect();i=h.clientX,r=h.clientY,o=u.left,a=u.top,e.style.transform="none",e.style.left=o+"px",e.style.top=a+"px",e.style.bottom="auto",h.preventDefault()}),document.addEventListener("mousemove",c),document.addEventListener("mouseup",l)}}class Cg{constructor(e){V(this,"eventBus");V(this,"leftToolbar");V(this,"topToolbar");V(this,"bottomToolbar");V(this,"imageFileInput");V(this,"projectFileInput");V(this,"projectNameDisplay");V(this,"debugConsole");this.eventBus=e,this.debugConsole=new Ag,this.createToolbars(),this.initListeners(),setTimeout(()=>this.eventBus.emit("request-project-name",null),100)}createToolbars(){this.topToolbar=document.createElement("div"),Object.assign(this.topToolbar.style,{position:"absolute",top:"0",left:"0",width:"100%",height:"40px",display:"flex",alignItems:"center",gap:"10px",background:"#222",padding:"0 10px",borderBottom:"1px solid #444",zIndex:"4000",boxSizing:"border-box"}),document.body.appendChild(this.topToolbar),this.leftToolbar=document.createElement("div"),Object.assign(this.leftToolbar.style,{position:"absolute",top:"40px",left:"0",width:"35px",height:"calc(100% - 70px)",display:"flex",flexDirection:"column",alignItems:"center",gap:"10px",background:"#222",padding:"10px 0",borderRight:"1px solid #444",zIndex:"3000",boxSizing:"border-box"}),document.body.appendChild(this.leftToolbar),this.bottomToolbar=document.createElement("div"),Object.assign(this.bottomToolbar.style,{position:"absolute",bottom:"0",left:"0",width:"100%",height:"30px",display:"flex",alignItems:"center",gap:"15px",background:"#222",padding:"0 10px",borderTop:"1px solid #444",zIndex:"3000",boxSizing:"border-box"}),document.body.appendChild(this.bottomToolbar),this.createMenuButton("...",[{label:"Neues Projekt",action:()=>this.eventBus.emit("new-project",null)},{label:"Projekt laden",action:()=>this.triggerProjectLoad()},{label:"Projekt speichern",action:()=>this.eventBus.emit("save-project",null)},{label:"Speichern unter...",action:()=>this.eventBus.emit("save-project-as",null)},{label:"Exportieren (STL)",action:()=>this.eventBus.emit("export-stl",null)},{label:"Hintergrundbild laden",action:()=>this.triggerImageUpload()},{label:"Einstellungen",action:()=>this.eventBus.emit("open-settings",null)}],this.topToolbar);const e=document.createElement("button");e.title="Ausgewählte Objekte löschen (Entf)",e.innerHTML="🗑️",Object.assign(e.style,{width:"25px",height:"25px",cursor:"pointer",border:"1px solid #555",background:"#333",color:"white",borderRadius:"4px",transition:"all 0.2s",fontSize:"14px",marginLeft:"5px",display:"flex",alignItems:"center",justifyContent:"center",lineHeight:"1"}),e.onclick=()=>{this.eventBus.emit("delete-selected-object",null)},this.topToolbar.appendChild(e);const t=document.createElement("div");t.style.cssText="width: 1px; height: 20px; background: #555; margin: 0 5px;",this.topToolbar.appendChild(t),this.addButton("select","➤","Selektieren (V)",this.topToolbar),this.addButton("face_select","⬚","Flächen auswählen",this.topToolbar);const n=document.createElement("button");n.title="Rasterfang (Snap)",n.innerHTML=`
        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" style="display:block; margin:auto;">
            <path d="M6 9 V 15 A 6 6 0 0 0 18 15 V 9" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" />
            <rect x="3" y="4" width="6" height="5" fill="currentColor" />
            <rect x="15" y="4" width="6" height="5" fill="currentColor" />
        </svg>`,Object.assign(n.style,{width:"25px",height:"25px",cursor:"pointer",border:"1px solid #555",background:"#333",color:"#888",borderRadius:"4px",transition:"all 0.2s",padding:"0"});let i=!1;const r=()=>{i?(n.style.background="#007acc",n.style.borderColor="#00aaff",n.style.color="white"):(n.style.background="#333",n.style.borderColor="#555",n.style.color="#888")};n.onclick=()=>{i=!i,this.eventBus.emit("toggle-snap",i),r()},r(),this.topToolbar.appendChild(n);const o=document.createElement("div");Object.assign(o.style,{position:"absolute",left:"50%",transform:"translateX(-50%)",display:"flex",alignItems:"center",gap:"15px"}),this.projectNameDisplay=document.createElement("div"),Object.assign(this.projectNameDisplay.style,{color:"#ffffff",fontSize:"13px",fontWeight:"bold",fontFamily:"Arial, sans-serif",pointerEvents:"none"}),this.projectNameDisplay.innerText="Lade...",o.appendChild(this.projectNameDisplay);const a=document.createElement("button");a.innerHTML="🖌️ 1",a.title="Pinsel-Einstellungen des 1. Pinsels der Davinci Maschine",Object.assign(a.style,{height:"25px",cursor:"pointer",border:"1px solid #555",background:"#333",color:"white",borderRadius:"4px",fontSize:"13px",padding:"0 10px",display:"flex",alignItems:"center",justifyContent:"center"}),a.onclick=()=>{console.log("Toolbar: Brush settings button clicked"),this.eventBus.emit("open-brush-properties",null)},o.appendChild(a),this.topToolbar.appendChild(o);const c=document.createElement("div");c.style.cssText="margin-left: auto; display: flex; align-items: center; gap: 10px;",this.topToolbar.appendChild(c);const l=document.createElement("div");l.style.cssText="display: flex; align-items: center; gap: 5px; border-left: 1px solid #555; padding-left: 10px;",c.appendChild(l);const h=document.createElement("div");h.style.cssText="margin-left: 10px; display: flex; align-items: center; gap: 5px; border-left: 1px solid #555; padding-left: 10px;",c.appendChild(h);const u=document.createElement("button");u.innerHTML="📝",u.title="G-Code generieren",Object.assign(u.style,{width:"30px",height:"25px",cursor:"pointer",border:"1px solid #555",background:"#333",color:"white",borderRadius:"4px",fontSize:"16px",display:"flex",alignItems:"center",justifyContent:"center"}),u.onclick=()=>{this.eventBus.emit("cnc-generate-gcode",null)},h.appendChild(u);const f=document.createElement("button");f.innerHTML="▶️",f.title="Malprozess starten",Object.assign(f.style,{width:"30px",height:"25px",cursor:"pointer",border:"1px solid #555",background:"#333",color:"white",borderRadius:"4px",fontSize:"16px",display:"flex",alignItems:"center",justifyContent:"center"}),f.onclick=()=>{this.eventBus.emit("cnc-start-painting",null)},h.appendChild(f),this.addButton("line","─","Linie (L)",this.leftToolbar),this.addButton("square","■","Quadrat (S)",this.leftToolbar),this.addButton("circle","●","Kreis (C)",this.leftToolbar),this.addButton("brush_create","🖌️","3D Pinsel erstellen",this.leftToolbar);const d=document.createElement("div");d.style.cssText="width: 80%; height: 1px; background: #444; margin: 5px 0;",this.leftToolbar.appendChild(d);const g=document.createElement("div");g.style.flexGrow="1",this.bottomToolbar.appendChild(g);const v=document.createElement("button");v.innerHTML="⌖",v.title="Ansicht zentrieren",v.style.cssText="width: 25px; height: 25px; background: #444; color: white; border: 1px solid #555; padding: 0; font-size: 16px; cursor: pointer; border-radius: 3px; display: flex; align-items: center; justify-content: center;",v.onclick=()=>this.eventBus.emit("ui-focus-clicked",null),this.bottomToolbar.appendChild(v),this.imageFileInput=document.createElement("input"),this.imageFileInput.type="file",this.imageFileInput.accept="image/*",this.imageFileInput.style.display="none",this.imageFileInput.onchange=m=>this.handleImageUpload(m),document.body.appendChild(this.imageFileInput),this.projectFileInput=document.createElement("input"),this.projectFileInput.type="file",this.projectFileInput.accept="application/json",this.projectFileInput.style.display="none",this.projectFileInput.onchange=m=>this.handleProjectUpload(m),document.body.appendChild(this.projectFileInput)}createMenuButton(e,t,n){const i=document.createElement("div");i.style.position="relative",i.style.display="inline-block";const r=document.createElement("button");r.innerText=e,r.style.cssText="background: #333; color: white; border: 1px solid #555; padding: 5px 10px; font-size: 12px; cursor: pointer; border-radius: 4px;";const o=document.createElement("div");Object.assign(o.style,{position:"absolute",top:"100%",left:"0",background:"#333",border:"1px solid #555",minWidth:"150px",display:"none",zIndex:"10000",flexDirection:"column",marginTop:"2px",boxShadow:"2px 2px 5px rgba(0,0,0,0.5)"}),t.forEach(a=>{const c=document.createElement("div");c.innerText=a.label,Object.assign(c.style,{padding:"8px 10px",cursor:"pointer",color:"#eee",fontSize:"12px",borderBottom:"1px solid #444"}),c.onmouseenter=()=>c.style.background="#444",c.onmouseleave=()=>c.style.background="#333",c.onclick=()=>{o.style.display="none",a.action()},o.appendChild(c)}),r.onclick=a=>{a.stopPropagation();const c=o.style.display==="flex";document.querySelectorAll(".toolbar-menu").forEach(l=>l.style.display="none"),o.style.display=c?"none":"flex"},window.addEventListener("click",()=>{o.style.display="none"}),o.classList.add("toolbar-menu"),i.appendChild(r),i.appendChild(o),n.appendChild(i)}triggerImageUpload(){this.imageFileInput.click()}async triggerProjectLoad(){if(window.showOpenFilePicker)try{const[e]=await window.showOpenFilePicker({types:[{description:"JSON-Projektdateien",accept:{"application/json":[".json"]}}],multiple:!1});this.eventBus.emit("load-project-from-handle",e)}catch(e){if(e.name==="AbortError")return;console.error("Error loading file via API:",e),this.projectFileInput.click()}else this.projectFileInput.click()}handleProjectUpload(e){const t=e.target;if(t.files&&t.files[0]){const n=t.files[0];this.eventBus.emit("load-project",n)}t.value=""}handleImageUpload(e){const t=e.target;if(t.files&&t.files[0]){const n=t.files[0],i=new FileReader;i.onload=r=>{var a;const o=new Image;o.onload=()=>{const c=new Ft(o);c.needsUpdate=!0;const l=o.width/o.height,h=200,u=200/l;this.eventBus.emit("create-background-image",{texture:c,width:h,height:u})},o.onerror=()=>{console.error("Toolbar: Image failed to load. The data URL might be corrupt or invalid.")},o.src=(a=r.target)==null?void 0:a.result},i.onerror=()=>{console.error("Toolbar: FileReader failed to read the file.")},i.readAsDataURL(n)}t.value=""}addButton(e,t,n,i){const r=document.createElement("button");r.innerHTML=t,r.title=n,r.dataset.id=e,Object.assign(r.style,{width:"25px",height:"25px",fontSize:"14px",cursor:"pointer",border:"1px solid #555",background:"#333",color:"white",borderRadius:"4px",transition:"all 0.2s"}),r.onclick=o=>{o.stopPropagation(),this.eventBus.emit("tool-selected",e)},i.appendChild(r)}initListeners(){this.eventBus.on("tool-active-changed",e=>{this.updateActiveState(e)}),this.eventBus.on("project-name-changed",e=>{this.projectNameDisplay&&(this.projectNameDisplay.innerText=e)})}updateActiveState(e){document.querySelectorAll("button[data-id]").forEach(n=>{const i=n;i.dataset.id===e?(i.style.background="#007acc",i.style.borderColor="#00aaff"):(i.style.background="#333",i.style.borderColor="#555")})}}class Ot{constructor(e,t,n,i=1,r,o=-1/0,a=1/0,c=2){V(this,"container");V(this,"valueInput");V(this,"onChange");V(this,"step");V(this,"min");V(this,"max");V(this,"timer",null);V(this,"delayTimer",null);V(this,"startTime",0);V(this,"precision");this.step=i,this.onChange=r,this.min=o,this.max=a,this.precision=c,this.container=document.createElement("div"),this.container.style.cssText="display: flex; align-items: center; justify-content: space-between; margin-bottom: 5px; font-size: 11px;";const l=document.createElement("span");l.innerText=t,l.style.marginRight="5px",l.style.width="40px",this.container.appendChild(l);const h=document.createElement("div");h.style.cssText="display: flex; align-items: center; flex: 1;";const u=this.createButton("-");this.setupAutoRepeat(u,-1),this.valueInput=document.createElement("input"),this.valueInput.type="text";const f=Math.pow(10,this.precision);this.valueInput.value=(Math.round(n*f)/f).toString(),this.valueInput.style.cssText="width: 100%; text-align: center; background: #111; color: white; border: 1px solid #444; margin: 0 0px; height: 18px; font-size: 10px; outline: none; selection-background-color: #007acc;";const d=()=>{let v=this.valueInput.value.replace(",",".");const m=parseFloat(v);isNaN(m)||this.updateValue(m)};this.valueInput.onkeydown=v=>{v.key==="Enter"&&(d(),this.valueInput.blur())},this.valueInput.onblur=()=>{d()},this.valueInput.onfocus=()=>{this.valueInput.select()};const g=this.createButton("+");this.setupAutoRepeat(g,1),h.appendChild(u),h.appendChild(this.valueInput),h.appendChild(g),this.container.appendChild(h),e.appendChild(this.container)}createButton(e){const t=document.createElement("button");return t.innerText=e,t.style.cssText="width: 18px; height: 18px; background: #333; color: white; border: 1px solid #555; cursor: pointer; display: flex; align-items: center; justify-content: center; padding: 0; font-size: 10px;",t}setupAutoRepeat(e,t){const n=()=>{this.timer&&(clearInterval(this.timer),this.timer=null),this.delayTimer&&(clearTimeout(this.delayTimer),this.delayTimer=null),e.style.background="#333",window.removeEventListener("mouseup",n,{capture:!0})},i=o=>{this.updateValue(parseFloat(this.valueInput.value)+o*t)},r=()=>{if(!document.body.contains(this.container)){n();return}const o=Date.now()-this.startTime;let a=this.step;o>2e3?a=this.step*100:o>1e3&&(a=this.step*10),i(a)};e.onmousedown=o=>{o.button===0&&(e.style.background="#555",i(this.step),this.startTime=Date.now(),this.delayTimer=setTimeout(()=>{this.timer=setInterval(r,100)},500),window.addEventListener("mouseup",n,{capture:!0}),o.preventDefault())},e.onmouseleave=n}updateValue(e){if(isNaN(e))return;e=Math.min(Math.max(e,this.min),this.max);const t=Math.pow(10,this.precision);e=Math.round(e*t)/t,parseFloat(this.valueInput.value)!==e&&(this.valueInput.value=e.toString()),this.onChange(e)}setValue(e){this.valueInput.value=e.toString()}}class xe{static getCircleTexture(){const e="white_circle";if(this.textureCache[e])return this.textureCache[e];const t=256,n=document.createElement("canvas");n.width=t,n.height=t;const i=n.getContext("2d");if(!i)throw new Error("Could not create canvas context");const r=t/2,o=t/2-2;i.beginPath(),i.arc(r,r,o,0,2*Math.PI),i.fillStyle="#FFFFFF",i.fill();const a=new hr(n);return a.minFilter=Ht,a.magFilter=Ht,this.textureCache[e]=a,a}static createSprite(e,t){const n=this.getCircleTexture(),i=new sn({map:n,color:new Fe(e),depthTest:!1,sizeAttenuation:!0}),r=new ns(i);return r.scale.set(t,t,1),r.frustumCulled=!1,r.renderOrder=9999,r}static createAnchor(e,t){const n=this.createSprite("#FF3333",2);return n.position.copy(e),n.userData.isAnchor=!0,n.userData.pointType=t,n.visible=!1,n}static addAnchor(e){for(let n=e.children.length-1;n>=0;n--)e.children[n].userData.isMainAnchor&&e.remove(e.children[n]);const t=this.createSprite("#FF3333",2.5);t.name=`Anchor_${e.userData.type||"Unknown"}`,t.userData.isAnchor=!0,t.userData.isMainAnchor=!0,t.renderOrder=9999,e.add(t)}static createControlPoint(e,t){const n=this.createSprite("#00FF00",1.5);return n.position.copy(e),n.userData.isControlPoint=!0,n.userData.pointType=t,n.visible=!1,n}static createHelperLine(e,t){const n=new it().setFromPoints([e,t]),i=new vg({color:8947848,dashSize:2,gapSize:1,depthTest:!1}),r=new Li(n,i);return r.computeLineDistances(),r.userData.isHelperLine=!0,r.visible=!1,r.frustumCulled=!1,r}static createBezierPathNode(e){const t=this.createSprite("#FF3333",2);return t.position.copy(e),t.userData.isAnchor=!0,t.userData.isNode=!0,t.userData.pointType="node",t.visible=!1,t}static createBezierSegment(e,t,n,i){const r=new ct;r.userData.type="bezier_line";const o=new y().subVectors(t,e),a=o.length(),c=n||new y().copy(e).add(o.clone().normalize().multiplyScalar(a*.333)),l=i||new y().copy(e).add(o.clone().normalize().multiplyScalar(a*.666)),u=new Ai(e,c,l,t).getPoints(50),f=new it().setFromPoints(u),d=new Qt({color:16777215,depthTest:!1,depthWrite:!1}),g=new Li(f,d);g.userData.isCurve=!0,g.frustumCulled=!1,g.renderOrder=999,r.add(g);const v=new y().addVectors(e,t).multiplyScalar(.5);r.position.copy(v);const m=new y().subVectors(e,v),p=new y().subVectors(t,v),_=new y().subVectors(c,v),x=new y().subVectors(l,v),b=new Ai(m,_,x,p);g.geometry.setFromPoints(b.getPoints(50)),g.userData.curve=b;const R=this.createAnchor(m,"start"),T=this.createAnchor(p,"end"),E=this.createControlPoint(_,"cp1"),O=this.createControlPoint(x,"cp2"),M=this.createHelperLine(m,_),w=this.createHelperLine(p,x);return r.add(R,T,E,O,M,w),r.userData.helpers={start:R,end:T,cp1:E,cp2:O,line1:M,line2:w},this.addAnchor(r),r}static createLinkedBezierSegment(e,t,n,i){const r=new ct;r.userData.type="bezier_line",r.userData.isLinked=!0,r.userData.nodes={start:e,end:t};const o=e.position,a=t.position,c=new y().subVectors(a,o),l=c.length(),h=n||new y().copy(o).add(c.clone().normalize().multiplyScalar(l*.333)),u=i||new y().copy(o).add(c.clone().normalize().multiplyScalar(l*.666)),d=new Ai(o,h,u,a).getPoints(50),g=new it().setFromPoints(d),v=new Qt({color:16777215,depthTest:!1,depthWrite:!1}),m=new Li(g,v);m.userData.isCurve=!0,m.frustumCulled=!1,m.renderOrder=999,r.add(m);const p=this.createControlPoint(h,"cp1"),_=this.createControlPoint(u,"cp2"),x=this.createHelperLine(o,h),b=this.createHelperLine(a,u);return r.add(p,_,x,b),r.userData.helpers={cp1:p,cp2:_,line1:x,line2:b},r}static linearizeBezierSegment(e){if(e.userData.type!=="bezier_line"||!e.userData.isLinked||!e.userData.nodes)return;const t=e.userData.nodes,n=e.userData.helpers;if(!t.start||!t.end||!n.cp1||!n.cp2)return;const i=t.start.position,r=t.end.position,o=new y().subVectors(r,i),a=o.length();n.cp1.position.copy(i).add(o.clone().normalize().multiplyScalar(a*.333)),n.cp2.position.copy(i).add(o.clone().normalize().multiplyScalar(a*.666)),this.updateBezierSegmentGeometry(e)}static updateBezierSegmentGeometry(e){if(e.userData.type!=="bezier_line")return;let t,n,i,r;const o=e.userData.helpers;if(e.userData.isLinked&&e.userData.nodes){const l=e.userData.nodes;t=l.start.position,n=l.end.position,i=o.cp1.position,r=o.cp2.position}else if(o)t=o.start.position,n=o.end.position,i=o.cp1.position,r=o.cp2.position;else return;const a=(l,h,u)=>{l&&(l.geometry.setFromPoints([h,u]),l.computeLineDistances(),l.geometry.attributes.position.needsUpdate=!0,l.geometry.computeBoundingSphere())};a(o.line1,t,i),a(o.line2,n,r);const c=e.children.find(l=>l.userData.isCurve);if(c){let l,h;const u=new y().subVectors(n,t),f=u.length();let d=!1;if(f>1e-4){const g=u.clone().normalize(),v=new y().subVectors(i,t),m=new y().subVectors(r,t),p=new y().crossVectors(v,g).length(),_=new y().crossVectors(m,g).length();p<.01&&_<.01&&(d=!0)}else d=!0;d?(l=new dl(t,n),h=[t,n]):(l=new Ai(t,i,r,n),h=l.getPoints(50)),c.geometry.attributes.position&&c.geometry.attributes.position.count!==h.length&&(c.geometry.dispose(),c.geometry=new it),c.geometry.setFromPoints(h),c.userData.curve=l,c.geometry.attributes.position&&(c.geometry.attributes.position.needsUpdate=!0),c.geometry.computeBoundingSphere()}}static createPath(e,t=!1){if(e.length<2)return null;const n=new ct;n.userData.type="bezier_path",n.userData.isClosed=t;const i=new y;e.forEach(o=>i.add(o)),i.divideScalar(e.length),n.position.copy(i);const r=[];e.forEach((o,a)=>{const c=new y().subVectors(o,i),l=this.createBezierPathNode(c);l.name=`Node_${a}`,n.add(l),r.push(l)});for(let o=0;o<r.length&&!(!t&&o===r.length-1);o++){const a=(o+1)%r.length,c=r[o],l=r[a],h=this.createLinkedBezierSegment(c,l);h.name=`Segment_${o}`,n.add(h)}return this.addAnchor(n),n}static imageToDataURL(e){try{const t=document.createElement("canvas");t.width=e.width,t.height=e.height;const n=t.getContext("2d");return n?(n.drawImage(e,0,0),t.toDataURL("image/png")):""}catch(t){return console.warn("Could not serialize image",t),""}}static serializeBezierGroup(e){if(!e)return null;const t=e.children.filter(i=>i.userData.isNode).map(i=>i.position.toArray()),n=e.children.filter(i=>i.userData.type==="bezier_line").map(i=>{const r=i.userData.helpers;return{cp1:r.cp1.position.toArray(),cp2:r.cp2.position.toArray()}});return{nodes:t,segments:n}}static applyBezierData(e,t){if(!e||!t)return;const n=e.children.filter(r=>r.userData.isNode);t.nodes&&n.length===t.nodes.length&&n.forEach((r,o)=>r.position.fromArray(t.nodes[o]));const i=e.children.filter(r=>r.userData.type==="bezier_line");t.segments&&i.length===t.segments.length&&i.forEach((r,o)=>{const a=t.segments[o],c=r.userData.helpers;c&&(c.cp1.position.fromArray(a.cp1),c.cp2.position.fromArray(a.cp2),this.updateBezierSegmentGeometry(r))})}}V(xe,"textureCache",{});class xn{static createLineFromPoints(e,t){const n=new ct;n.userData.type="line";const i=xe.createBezierPathNode(e),r=xe.createBezierPathNode(t);return n.add(i,r),n.add(xe.createLinkedBezierSegment(i,r)),xe.addAnchor(n),n}static createRectangle(e,t){const n=new ct;n.userData.type="square",n.userData.isClosed=!0;const i=e.y,r=Math.min(e.x,t.x),o=Math.max(e.x,t.x),a=Math.min(e.z,t.z),c=Math.max(e.z,t.z),l=(r+o)/2,h=(a+c)/2;n.position.set(l,i,h);const u=parseFloat((o-r).toFixed(2)),f=parseFloat((c-a).toFixed(2));n.userData.baseSize={width:u,length:f};const d=u/2,g=f/2,v=new y(-d,0,-g),m=new y(d,0,-g),p=new y(d,0,g),_=new y(-d,0,g),x=xe.createBezierPathNode(v),b=xe.createBezierPathNode(m),R=xe.createBezierPathNode(p),T=xe.createBezierPathNode(_);return n.add(x,b,R,T),n.add(xe.createLinkedBezierSegment(x,b),xe.createLinkedBezierSegment(b,R),xe.createLinkedBezierSegment(R,T),xe.createLinkedBezierSegment(T,x)),xe.addAnchor(n),n}static createSquare(e=50){const t=new ct;t.userData.type="square",t.userData.isClosed=!0,t.userData.baseSize={width:e,length:e};const n=e/2,i=new y(-n,0,-n),r=new y(n,0,-n),o=new y(n,0,n),a=new y(-n,0,n),c=xe.createBezierPathNode(i),l=xe.createBezierPathNode(r),h=xe.createBezierPathNode(o),u=xe.createBezierPathNode(a);return t.add(c,l,h,u),t.add(xe.createLinkedBezierSegment(c,l),xe.createLinkedBezierSegment(l,h),xe.createLinkedBezierSegment(h,u),xe.createLinkedBezierSegment(u,c)),xe.addAnchor(t),t}static updateRectangle(e){var f,d;const t=((f=e.userData.baseSize)==null?void 0:f.width)||50,n=((d=e.userData.baseSize)==null?void 0:d.length)||t,i=t/2,r=n/2,o=e.userData.borderRadius,a=o&&o.enabled&&o.radius>0,c=a?Math.min(o.radius,Math.min(i,r)):0,l=.5522847*c,h=g=>{const v=O=>O.userData.isNode&&(g?O.userData.isOffsetNode:!O.userData.isOffsetNode),m=O=>O.userData.type==="bezier_line"&&(g?O.userData.isOffset:!O.userData.isOffset);let p=e.children.filter(v),_=e.children.filter(m);const x=a?8:4;if(p.length!==x||_.length!==x){for(let O=e.children.length-1;O>=0;O--){const M=e.children[O];(v(M)||m(M))&&e.remove(M)}p=[],_=[];for(let O=0;O<x;O++){const M=xe.createBezierPathNode(new y);g&&(M.userData.isOffsetNode=!0,M.visible=!1),e.add(M),p.push(M)}for(let O=0;O<x;O++){const M=p[O],w=p[(O+1)%x],N=xe.createLinkedBezierSegment(M,w);if(g){N.userData.isOffset=!0;const B=N.children.find(q=>q.userData.isCurve);B&&B.material&&(B.material.color.setHex(16755200),B.material.opacity=.5)}e.add(N),_.push(N)}}let b=i,R=r,T=c,E=l;if(g){const O=e.userData.offset,M=O?O.x:0,w=O?O.z:0,N=(M+w)/2;b+=M,R+=w,a&&(T+=N,T<0&&(T=0),E=.5522847*T)}if(!a)p[0].position.set(-b,0,-R),p[1].position.set(b,0,-R),p[2].position.set(b,0,R),p[3].position.set(-b,0,R),_.forEach(O=>xe.linearizeBezierSegment(O));else{p[0].position.set(-b+T,0,-R),p[1].position.set(b-T,0,-R),p[2].position.set(b,0,-R+T),p[3].position.set(b,0,R-T),p[4].position.set(b-T,0,R),p[5].position.set(-b+T,0,R),p[6].position.set(-b,0,R-T),p[7].position.set(-b,0,-R+T),xe.linearizeBezierSegment(_[0]),xe.linearizeBezierSegment(_[2]),xe.linearizeBezierSegment(_[4]),xe.linearizeBezierSegment(_[6]);const O=(M,w,N,B,q)=>{const L=_[M],F=L.userData.helpers;F&&(F.cp1.position.copy(p[M].position).add(new y(w,0,N)),F.cp2.position.copy(p[(M+1)%8].position).add(new y(B,0,q)),xe.updateBezierSegmentGeometry(L))};O(1,E,0,0,-E),O(3,0,E,E,0),O(5,-E,0,0,E),O(7,0,-E,-E,0)}};h(!1);const u=e.userData.offset;if(u&&u.enabled)h(!0);else for(let g=e.children.length-1;g>=0;g--){const v=e.children[g];(v.userData.isOffsetNode||v.userData.isOffset)&&e.remove(v)}}static createCircle(e=25){const t=new ct;t.name="Circle",t.userData.type="circle",t.userData.isClosed=!0,t.userData.baseSize={radius:e};const n=e,i=.5522847*n,r=new y(0,0,-n),o=new y(n,0,0),a=new y(0,0,n),c=new y(-n,0,0),l=xe.createBezierPathNode(r),h=xe.createBezierPathNode(o),u=xe.createBezierPathNode(a),f=xe.createBezierPathNode(c);t.add(l,h,u,f);const d=(g,v,m,p)=>{const _=xe.createLinkedBezierSegment(g,v,m,p);xe.updateBezierSegmentGeometry(_),t.add(_)};return d(l,h,new y(i,0,-n),new y(n,0,-i)),d(h,u,new y(n,0,i),new y(i,0,n)),d(u,f,new y(-i,0,n),new y(-n,0,i)),d(f,l,new y(-n,0,-i),new y(-i,0,-n)),xe.addAnchor(t),t}static updateCircleRadius(e,t){if(!e||e.userData.type!=="circle")return;e.userData.baseSize||(e.userData.baseSize={}),e.userData.baseSize.radius=t;const n=t,i=.5522847*n;e.scale.set(1,1,1);const r=e.children.filter(l=>l.userData.isNode&&!l.userData.isOffsetNode);if(r.length===4){r[0].position.set(0,0,-n),r[1].position.set(n,0,0),r[2].position.set(0,0,n),r[3].position.set(-n,0,0);const l=e.children.filter(h=>h.userData.type==="bezier_line"&&!h.userData.isOffset);if(l.length===4){const h=(u,f,d)=>{const g=u.userData.helpers;g&&(g.cp1.position.copy(f),g.cp2.position.copy(d),xe.updateBezierSegmentGeometry(u))};h(l[0],new y(i,0,-n),new y(n,0,-i)),h(l[1],new y(n,0,i),new y(i,0,n)),h(l[2],new y(-i,0,n),new y(-n,0,i)),h(l[3],new y(-n,0,-i),new y(-i,0,-n))}}const o=e.userData.offset,a=o&&o.enabled,c=()=>{for(let l=e.children.length-1;l>=0;l--){const h=e.children[l];(h.userData.isOffsetNode||h.userData.isOffset)&&e.remove(h)}};if(a){const l=n+(o.radius||0),h=.5522847*l;let u=e.children.filter(g=>g.userData.isNode&&g.userData.isOffsetNode),f=e.children.filter(g=>g.userData.type==="bezier_line"&&g.userData.isOffset);if(u.length!==4||f.length!==4){c();const g=new y(0,0,-l),v=new y(l,0,0),m=new y(0,0,l),p=new y(-l,0,0),_=xe.createBezierPathNode(g),x=xe.createBezierPathNode(v),b=xe.createBezierPathNode(m),R=xe.createBezierPathNode(p);[_,x,b,R].forEach(N=>{N.userData.isOffsetNode=!0,N.visible=!1,e.add(N)}),u=[_,x,b,R];const T=(N,B)=>{const q=xe.createLinkedBezierSegment(N,B);q.userData.isOffset=!0;const L=q.children.find(F=>F.userData.isCurve);return L&&L.material&&(L.material.color.setHex(16755200),L.material.opacity=.5),e.add(q),q},E=T(_,x),O=T(x,b),M=T(b,R),w=T(R,_);f=[E,O,M,w]}u[0].position.set(0,0,-l),u[1].position.set(l,0,0),u[2].position.set(0,0,l),u[3].position.set(-l,0,0);const d=(g,v,m)=>{const p=g.userData.helpers;p&&(p.cp1.position.copy(v),p.cp2.position.copy(m),xe.updateBezierSegmentGeometry(g))};f.length===4&&(d(f[0],new y(h,0,-l),new y(l,0,-h)),d(f[1],new y(l,0,h),new y(h,0,l)),d(f[2],new y(-h,0,l),new y(-l,0,h)),d(f[3],new y(-l,0,-h),new y(-h,0,-l)))}else c()}}class ro{static create(e,t,n){const i=new ct;i.name="BackgroundImage",i.userData.type="background_image",i.userData.baseSize={width:t,height:n};const r=new Fn(t,n);r.rotateX(-Math.PI/2);const o=new Ct({map:e,side:At,transparent:!1,opacity:1,depthWrite:!0}),a=new Oe(r,o);a.userData.isMesh=!0,a.userData.generated=!0,i.add(a);const c=t/2,l=n/2,h=(v,m,p)=>{const _=xe.createSprite("#FFFF00",1.5);return _.position.set(v,0,m),_.userData.isControlPoint=!0,_.userData.pointType=p,_},u=h(-c,-l,"tl"),f=h(c,-l,"tr"),d=h(-c,l,"bl"),g=h(c,l,"br");return i.add(u,f,d,g),i.userData.handles={tl:u,tr:f,bl:d,br:g},xe.addAnchor(i),i}static update(e){if(e.userData.type!=="background_image")return;const t=e.children.find(u=>u.userData.isMesh);if(!t)return;const n=e.userData.handles;if(!n)return;const i=new ni;i.expandByPoint(n.tl.position),i.expandByPoint(n.tr.position),i.expandByPoint(n.bl.position),i.expandByPoint(n.br.position);const r=i.min,o=i.max,a=o.x-r.x,c=o.z-r.z,l=new y;i.getCenter(l),t.geometry.dispose();const h=new Fn(a,c);h.rotateX(-Math.PI/2),h.translate(l.x,0,l.z),t.geometry=h}}class st{static createShape(e,t,n){let i=null;switch(e){case"line":i=xn.createLineFromPoints((n==null?void 0:n.start)||new y(0,0,0),(n==null?void 0:n.end)||new y(50,0,0));break;case"square":i=xn.createSquare((n==null?void 0:n.size)||50);break;case"circle":i=xn.createCircle((n==null?void 0:n.radius)||25);break;case"background_image":n!=null&&n.texture&&(i=ro.create(n.texture,n.width,n.height));break}return i&&(i.userData.type=e,t&&i.position.copy(t),n!=null&&n.position&&i.position.set(n.position[0],n.position[1],n.position[2]),n!=null&&n.rotation&&i.rotation.set(n.rotation[0],n.rotation[1],n.rotation[2]),n!=null&&n.scale&&i.scale.set(n.scale[0],n.scale[1],n.scale[2]),e==="line"&&!i.userData.baseSize?i.userData.baseSize={width:50}:e==="square"&&!i.userData.baseSize?i.userData.baseSize={width:50,length:50}:e==="circle"&&!i.userData.baseSize&&(i.userData.baseSize={radius:25}),!i.userData.isMainAnchor&&e!=="background_image"&&xe.addAnchor(i)),i}static createBrush(e=5,t=60){const n=new ct;n.name="Neuer Pinsel",n.userData.type="bezier_path";const i=new y(e,0,0),r=new y(0,-t,0),o=xe.createBezierPathNode(i),a=xe.createBezierPathNode(r);n.add(o,a);const c=xe.createLinkedBezierSegment(o,a);return c.userData.helpers.cp1.position.set(e*1.05,-t*.2,0),c.userData.helpers.cp2.position.set(e*.8,-t*.4,0),xe.updateBezierSegmentGeometry(c),n.add(c),n.traverse(l=>{(l.userData.isNode||l.userData.isControlPoint||l.userData.isHelperLine)&&(l.visible=!0)}),n.userData.modifiers=[{type:"lathe",name:"Rotation",params:{segments:32,phiStart:0,phiLength:Math.PI*2},active:!0}],xe.addAnchor(n),n}static updateRectangle(e){xn.updateRectangle(e)}static describeObject(e){var n,i;if(!e.userData.type)return null;const t={type:e.userData.type,name:e.name,position:e.position.toArray(),rotation:e.rotation.toArray(),scale:e.scale.toArray(),userData:{...e.userData}};if(e.userData.baseSize&&(t.userData.baseSize={...e.userData.baseSize}),e.userData.type==="line"){const r=e.children.filter(o=>o.userData.isNode);r.length>=2&&(t.start=r[0].position.toArray(),t.end=r[1].position.toArray())}else if(e.userData.type==="background_image"){const r=e.children.find(o=>o.userData.isMesh);if(r&&r.material){const o=r.material;o.map&&o.map.image&&(t.imageData=xe.imageToDataURL(o.map.image),t.width=(n=e.userData.baseSize)==null?void 0:n.width,t.height=(i=e.userData.baseSize)==null?void 0:i.height)}}return t}static recreateShape(e){var o,a,c,l;const t=e.type,n=new y().fromArray(e.position),i={position:e.position,rotation:e.rotation,scale:e.scale,...e.userData};if(t==="line")e.start&&(i.start=new y().fromArray(e.start)),e.end&&(i.end=new y().fromArray(e.end));else if(t==="square")(a=(o=e.userData)==null?void 0:o.baseSize)!=null&&a.width&&(i.size=e.userData.baseSize.width);else if(t==="circle")(l=(c=e.userData)==null?void 0:c.baseSize)!=null&&l.radius&&(i.radius=e.userData.baseSize.radius);else if(t==="background_image"&&e.imageData){const h=new Image;h.src=e.imageData;const u=new Ft(h);h.onload=()=>{u.needsUpdate=!0},i.texture=u,i.width=e.width,i.height=e.height}const r=this.createShape(t,n,i);return r&&(e.name&&(r.name=e.name),e.userData&&(e.userData.baseSize&&(r.userData.baseSize={...e.userData.baseSize}),Object.assign(r.userData,e.userData)),t==="square"&&this.updateRectangle(r)),r}static createModulationPath(e=-20,t=35){const n=new ct;n.name="Modulation_Path",n.userData.type="bezier_path",n.userData.isHelper=!0;const i=xe.createBezierPathNode(new y(0,15,e)),r=xe.createBezierPathNode(new y(0,15,t));n.add(i,r);const o=xe.createLinkedBezierSegment(i,r);o.userData.helpers.cp1.position.set(0,15,e+(t-e)*.33),o.userData.helpers.cp2.position.set(0,15,e+(t-e)*.66),xe.updateBezierSegmentGeometry(o);const a=o.children.find(c=>c.userData.isCurve);return a&&a.material.color.setHex(16711935),n.add(o),n}static createBackgroundImage(e,t,n){return ro.create(e,t,n)}static updateBackgroundImage(e){ro.update(e)}static createPath(e,t=!1){return xe.createPath(e,t)}static createLineFromPoints(e,t){return xn.createLineFromPoints(e,t)}static createBezierSegment(e,t,n,i){return xe.createBezierSegment(e,t,n,i)}static linearizeBezierSegment(e){xe.linearizeBezierSegment(e)}static updateBezierSegmentGeometry(e){xe.updateBezierSegmentGeometry(e)}static addAnchor(e){xe.addAnchor(e)}static createControlPoint(e,t){return xe.createControlPoint(e,t)}static createHelperLine(e,t){return xe.createHelperLine(e,t)}static createRectangle(e,t){return xn.createRectangle(e,t)}static createSquare(e=50){return xn.createSquare(e)}static createCircle(e=25){return xn.createCircle(e)}static updateCircleRadius(e,t){xn.updateCircleRadius(e,t)}}class Rg{constructor(e,t,n,i){V(this,"eventBus");V(this,"modifierManager");V(this,"objectManager");V(this,"container");V(this,"currentObject",null);V(this,"openSections",new Set(["Geometrie","Aktionen","Pinsel 1"]));V(this,"brushState",{type:"Rundpinsel",diameter:5,length:20,color:"#ff0000",grayscale:!1,grayValue:128,transparency:1,showMachineBrush:!1});this.eventBus=e,this.modifierManager=t,this.objectManager=n,this.container=document.createElement("div"),this.setupContainer(),this.initListeners()}setupContainer(){Object.assign(this.container.style,{position:"absolute",top:"40px",right:"0",width:"150px",height:"calc(100% - 70px)",background:"#222",color:"white",padding:"10px",borderLeft:"1px solid #444",fontFamily:"Arial, sans-serif",fontSize:"12px",zIndex:"1000",boxSizing:"border-box",overflowY:"auto"}),this.container.id="properties-panel",["mousedown","mouseup","mousemove","wheel","keydown","keyup"].forEach(e=>this.container.addEventListener(e,t=>t.stopPropagation())),document.body.appendChild(this.container),this.showEmpty()}initListeners(){this.eventBus.on("open-brush-properties",()=>{this.showBrushProperties()}),this.eventBus.on("brush-state-changed",e=>{Object.assign(this.brushState,e),this.container.dataset.objUuid==="brush-settings"&&this.showBrushProperties()}),this.eventBus.on("selection-changed",e=>{e.length===1?this.showProperties(e[0]):this.showEmpty()}),this.eventBus.on("object-added",()=>{this.currentObject?this.renderPanel(this.currentObject):this.showEmpty()}),this.eventBus.on("object-removed",()=>{this.currentObject?this.renderPanel(this.currentObject):this.showEmpty()}),this.eventBus.on("modifier-param-changed",e=>{if(this.currentObject&&this.currentObject.uuid===e.uuid){const t=document.getElementById(`status-manifold-${e.uuid}`);if(t){const n=e.userData.openEdgeCount||0;t.innerText=n>0?`⚠ Warnung: ${n} Löcher / offene Kanten!`:"✔ Modell ist wasserdicht.",t.style.color=n>0?"#ff4444":"#88ff88"}else this.refreshContent(e)}}),this.eventBus.on("modifier-changed",e=>{this.currentObject&&this.currentObject.uuid===e.uuid&&this.refreshContent(e)}),this.eventBus.on("object-modified",e=>{this.currentObject&&this.currentObject.uuid===e.uuid&&this.refreshContent(e)}),this.eventBus.on("preview-object-updated",e=>{e?this.showProperties(e):this.currentObject&&this.currentObject===e&&this.showEmpty()})}showBrushProperties(){try{this.currentObject=null,this.container.innerHTML="",this.container.dataset.objUuid="brush-settings";const e=()=>{this.eventBus.emit("brush-state-changed",this.brushState)},t=document.createElement("div");t.style.cssText="display: flex; justify-content: space-between; align-items: center; margin-bottom: 10px;";const n=document.createElement("h3");n.innerText="Pinsel Einstellungen",n.style.cssText="margin: 0; font-size: 12px; font-weight: normal; color: #ccc;",t.appendChild(n),this.container.appendChild(t);const i=document.createElement("div");this.container.appendChild(i);const r=document.createElement("div");r.innerText="Geometrie",r.style.cssText="font-size: 11px; font-weight: bold; color: #888; margin-bottom: 8px; border-bottom: 1px solid #333; padding-bottom: 2px;",i.appendChild(r);const o=document.createElement("div");o.style.cssText="display: flex; align-items: center; justify-content: space-between; margin-bottom: 10px; font-size: 11px;";const a=document.createElement("span");a.innerText="Pinsel anzeigen",o.appendChild(a);const c=document.createElement("input");c.type="checkbox",c.checked=this.brushState.showMachineBrush,c.onchange=()=>{this.brushState.showMachineBrush=c.checked,e()},o.appendChild(c),i.appendChild(o);const l=document.createElement("div"),h=document.createElement("span");h.innerText="Profil",h.style.fontSize="11px";const u=document.createElement("select");u.style.cssText="width: 100%; margin: 2px 0 5px 0; background: #111; color: white; border: 1px solid #444;",l.appendChild(h),l.appendChild(u);const f=R=>{u.innerHTML="";const T=document.createElement("option");T.value="__default_round__",T.innerText="Standard Rundpinsel",u.appendChild(T),Object.keys(R).forEach(E=>{const O=document.createElement("option");O.value=E,O.innerText=E,u.appendChild(O)})};u.onchange=()=>{const R=u.value;if(R==="__default_round__"){this.eventBus.emit("load-brush-state",{type:"Rundpinsel",bezierProfile:null});return}this.eventBus.emit("request-brush-profiles",T=>{const E=T[R];E&&this.eventBus.emit("load-brush-state",{...this.brushState,...E})})},this.eventBus.on("brush-profiles-updated",f),this.eventBus.emit("request-brush-profiles",f),i.appendChild(l);const d=document.createElement("button");d.innerText="Aktuelles Profil speichern",d.style.cssText="width: 100%; padding: 5px; background: #007acc; color: white; border: none; border-radius: 3px; cursor: pointer; font-size: 10px; margin-bottom: 10px;",d.onclick=()=>{const R=prompt("Bitte geben Sie einen Namen für das aktuelle Pinselprofil ein:");R&&this.eventBus.emit("request-brush-state-sync",T=>{const E={...this.brushState,bezierProfile:T.bezierProfile};this.eventBus.emit("save-brush-profile-current-state",{name:R,profile:E}),alert(`Profil "${R}" wurde gespeichert.`)})},i.appendChild(d),new Ot(i,"Durchm.",this.brushState.diameter,.5,R=>{this.brushState.diameter=R,e()},.1,50),new Ot(i,"Länge",this.brushState.length,1,R=>{this.brushState.length=R,e()},1,200);const g=document.createElement("div");g.style.height="15px",i.appendChild(g);const v=document.createElement("div");v.innerText="Farbe",v.style.cssText="font-size: 11px; font-weight: bold; color: #888; margin-bottom: 8px; border-bottom: 1px solid #333; padding-bottom: 2px;",i.appendChild(v);const m=document.createElement("div");m.style.cssText="display: flex; align-items: center; justify-content: space-between; margin-bottom: 10px; font-size: 11px;";const p=document.createElement("span");p.innerText="Graustufen",m.appendChild(p);const _=document.createElement("input");_.type="checkbox",_.checked=this.brushState.grayscale,m.appendChild(_),i.appendChild(m);const x=document.createElement("div");i.appendChild(x),new Ot(i,"Deckkraft",this.brushState.transparency,.1,R=>{this.brushState.transparency=R,e()},0,1,2);const b=()=>{if(x.innerHTML="",this.brushState.grayscale)new Ot(x,"Grauwert",this.brushState.grayValue,1,R=>{this.brushState.grayValue=Math.round(R);const T=Math.round(this.brushState.grayValue).toString(16).padStart(2,"0");this.brushState.color=`#${T}${T}${T}`,e()},0,255,0);else{const R=document.createElement("div");R.style.cssText="display: flex; align-items: center; justify-content: space-between; font-size: 11px; margin-bottom: 5px;";const T=document.createElement("span");T.innerText="Pinsel-Farbe",R.appendChild(T);const E=document.createElement("input");E.type="color",E.value=this.brushState.color,E.style.cssText="background: none; border: none; width: 30px; height: 20px; cursor: pointer;",E.onchange=()=>{this.brushState.color=E.value,e()},R.appendChild(E),x.appendChild(R)}};b(),_.onchange=()=>{this.brushState.grayscale=_.checked,b(),e()}}catch(e){console.error("PropertiesPanel: Error in showBrushProperties",e)}}showEmpty(){this.currentObject=null;const e=this.objectManager.getObjects(),t=e.filter(n=>n.visible).length;this.container.innerHTML=`
            <h3 style="margin: 0 0 5px 0; font-size: 13px;">Eigenschaften</h3>
            <div style="font-size: 10px; color: #888; margin-bottom: 10px; border-bottom: 1px solid #333; padding-bottom: 5px;">
                Objekte: ${e.length} (${t} sichtbar)
            </div>
            <div style="color: #666; font-style: italic; font-size: 11px;">Kein Objekt ausgewählt</div>
        `}showProperties(e){if(this.currentObject===e){this.refreshContent(e);return}this.currentObject=e,this.renderPanel(e)}refreshContent(e){this.renderPanel(e)}renderPanel(e){var T;this.container.innerHTML="",this.container.dataset.objUuid=e.uuid;const t=document.createElement("div");t.style.cssText="display: flex; justify-content: space-between; align-items: center; margin-bottom: 5px;";const n=document.createElement("h3");n.innerText="Eigenschaften",n.style.cssText="margin: 0; font-size: 13px;",t.appendChild(n);const i=this.objectManager.getObjects(),r=i.filter(E=>E.visible).length,o=document.createElement("div");o.style.cssText="font-size: 10px; color: #888; margin-bottom: 10px; border-bottom: 1px solid #333; padding-bottom: 5px;",o.innerText=`Objekte: ${i.length} (${r} sichtbar)`,this.container.appendChild(t),this.container.appendChild(o);const a=document.createElement("div");a.style.position="relative";const c=document.createElement("button");c.innerText="+",c.title="Modifikatoren hinzufügen",c.style.cssText="width: 20px; height: 20px; background: #444; color: white; border: 1px solid #555; padding: 0; font-size: 16px; cursor: pointer; border-radius: 3px; font-weight: normal; line-height: 18px;";const l=document.createElement("div");l.style.cssText="position: absolute; top: 22px; right: 0; background: #333; border: 1px solid #555; display: none; flex-direction: column; z-index: 2000; box-shadow: 2px 2px 5px rgba(0,0,0,0.5); min-width: 110px;";const h=(E,O,M)=>{const w=document.createElement("div");return w.innerText=E,w.style.cssText="padding: 5px 10px; font-size: 11px; color: #eee; border-bottom: 1px solid #444;",O?(w.style.cursor="pointer",w.onmouseover=()=>w.style.background="#444",w.onmouseout=()=>w.style.background="#333",w.onclick=()=>{M(),l.style.display="none"}):(w.style.color="#666",w.style.cursor="default"),w},u=e.userData.type,f=u==="square"||u==="circle"||u==="bezier_path"&&e.userData.isClosed,d=u==="bezier_path",g=u==="square"||u==="circle"||u==="boolean_result";l.appendChild(h("Extrudieren",f,()=>this.modifierManager.addModifier(e,"extrude"))),l.appendChild(h("Rotation",d,()=>this.modifierManager.addModifier(e,"lathe"))),l.appendChild(h("In Mesh umwandeln",g,()=>this.eventBus.emit("convert-to-mesh",e))),l.appendChild(h("Flächen entfernen",g,()=>this.modifierManager.addModifier(e,"face_delete"))),c.onclick=E=>{E.stopPropagation(),l.style.display=l.style.display==="flex"?"none":"flex"},window.addEventListener("click",()=>{l.style.display="none"},{once:!0}),a.appendChild(c),a.appendChild(l),t.appendChild(a),this.container.appendChild(t);const v=document.createElement("div");v.style.cssText="display: flex; align-items: center; margin-bottom: 10px;";const m=document.createElement("div");m.innerText="Name:",m.style.cssText="width: 35px; margin-right: 2px; font-size: 11px; font-weight: bold;";const p=document.createElement("input");if(p.type="text",p.value=e.name,p.style.cssText="flex: 1; min-width: 0; background: #333; color: white; border: 1px solid #444; padding: 2px 5px; font-size: 11px;",p.onchange=()=>{e.name=p.value},v.appendChild(m),v.appendChild(p),this.container.appendChild(v),(T=e.userData.modifiers)!=null&&T.some(E=>E.type==="lathe")){const E=document.createElement("button");E.innerText="Als Pinselprofil speichern",E.style.cssText="width: 100%; padding: 5px; background: #007acc; color: white; border: none; border-radius: 3px; cursor: pointer; font-size: 10px; margin-bottom: 10px;",E.onclick=()=>{const O=prompt("Bitte geben Sie einen Namen für das Pinselprofil ein:",e.name);if(O){const M=e.userData.modifiers.find(B=>B.type==="lathe"),w=e.children.filter(B=>B.userData.isNode),N=e.children.find(B=>B.userData.type==="bezier_line");if(M&&w.length===2&&N){const B=N.userData.helpers;if(!B||!B.cp1||!B.cp2){alert("Fehler: Kontrollpunkte des Pinselprofils nicht gefunden.");return}let q,L;w[0].position.y<w[1].position.y?(q=w[0],L=w[1]):(q=w[1],L=w[0]);const G={bezierProfile:{p1:new j(L.position.x,L.position.y),cp1:new j(B.cp1.position.x,B.cp1.position.y),cp2:new j(B.cp2.position.x,B.cp2.position.y),p0:new j(q.position.x,q.position.y)},latheSegments:M.params.segments};this.eventBus.emit("save-brush-profile",{name:O,profile:G}),alert(`Profil "${O}" wurde gespeichert.`)}else alert("Fehler: Pinselprofil-Daten (Nodes/Segment) nicht gefunden.")}},this.container.appendChild(E)}const _=this.createMaterialEditor(e);this.container.appendChild(this.createAccordionSection("Material",_));const x=document.createElement("div");this.renderGeometryControls(e,x),this.container.appendChild(this.createAccordionSection("Geometrie",x));const b=e.userData.modifiers&&e.userData.modifiers.length>0,R=e.userData.type==="boolean_result";if(b||R){const E=document.createElement("div");if(b)this.renderModifiersList(e,E);else if(R){const w=document.createElement("div");w.style.cssText="color: #888; font-style: italic; font-size: 10px; padding: 5px;",w.innerText="Boolesches Objekt",E.appendChild(w);const N=document.createElement("div");N.style.cssText="color: #aaa; font-style: italic; font-size: 9px; padding: 5px; border-top: 1px solid #444; margin-top: 5px;",N.innerText="Tipp: Nutze 'In Mesh umwandeln' oben (+), um Flächen löschen zu können.",E.appendChild(N)}const O=document.createElement("div");O.id=`status-manifold-${e.uuid}`,O.style.cssText="padding: 5px; margin-top: 10px; background: #333; border-radius: 3px; font-size: 10px; border: 1px solid #444; border-left: 3px solid #888;";const M=e.userData.openEdgeCount||0;M===0?(O.style.borderLeftColor="#88ff88",O.innerHTML='<span style="color:#88ff88;">✔ Modell ist wasserdicht</span>'):(O.style.borderLeftColor="#ff4444",O.innerHTML=`<span style="color:#ff4444;">⚠ Warnung: ${M} Löcher gefunden!</span><br><span style="color:#aaa;">Modell ist nicht geschlossen.</span>`),E.appendChild(O),this.container.appendChild(this.createAccordionSection("Aktionen",E))}if(e.userData.type==="background_image"){const E=document.createElement("div");let O=4,M=1;new Ot(E,"Anzahl Schichten",O,1,N=>{O=Math.max(2,Math.floor(N))},2,16),new Ot(E,"Spalten",M,1,N=>{M=Math.max(1,Math.floor(N))},1,16);const w=document.createElement("button");w.innerText="Analyse starten",w.style.cssText="background:#007acc; border:1px solid #00aaff; color:white; cursor:pointer; padding: 5px; font-size: 11px; margin-top: 10px; width: 100%;",w.onclick=()=>{this.eventBus.emit("image-analysis-start",{layers:O,columns:M})},E.appendChild(w),this.container.appendChild(this.createAccordionSection("Bildanalyse",E))}}createAccordionSection(e,t){const n=document.createElement("div");n.style.cssText="margin-bottom: 5px; border: 1px solid #444; border-radius: 3px; overflow: hidden;";const i=document.createElement("div");i.style.cssText="background: #333; color: #ddd; padding: 5px 8px; font-size: 11px; font-weight: bold; cursor: pointer; display: flex; justify-content: space-between; align-items: center;";const r=document.createElement("span");r.innerText=e;const o=this.openSections.has(e),a=document.createElement("span");a.innerText=o?"▼":"▶",a.style.fontSize="10px",i.appendChild(r),i.appendChild(a);const c=document.createElement("div");return c.style.cssText=`padding: 5px; background: #222; display: ${o?"block":"none"};`,c.appendChild(t),i.onclick=()=>{c.style.display==="block"?(c.style.display="none",a.innerText="▶",this.openSections.delete(e)):(c.style.display="block",a.innerText="▼",this.openSections.add(e))},n.appendChild(i),n.appendChild(c),n}createMaterialEditor(e){const t=document.createElement("div");if(!e.userData.materialParams){let h="#cccccc";e.traverse(u=>{u instanceof Oe&&u.material.color&&(h="#"+u.material.color.getHexString())}),e.userData.materialParams={color:h,wireframe:!1,roughness:.5,metalness:.1,flatShading:!1,opacity:1}}const n=e.userData.materialParams,i=document.createElement("div");i.style.cssText="display: flex; align-items: center; justify-content: space-between; margin-bottom: 5px; font-size: 11px;";const r=document.createElement("span");r.innerText="Farbe";const o=document.createElement("input");o.type="color",o.value=n.color,o.style.cssText="border: none; width: 40px; height: 20px; cursor: pointer; background: none;",o.oninput=()=>{n.color=o.value,this.eventBus.emit("update-object-geometry",e)},i.appendChild(r),i.appendChild(o),t.appendChild(i);const a=document.createElement("div");a.style.cssText="display: flex; align-items: center; margin-bottom: 5px; font-size: 11px;";const c=document.createElement("input");c.type="checkbox",c.checked=!n.wireframe,c.onchange=()=>{n.wireframe=!c.checked,this.eventBus.emit("update-object-geometry",e)};const l=document.createElement("span");return l.innerText="Solid (Gefüllt)",l.style.marginLeft="5px",a.appendChild(c),a.appendChild(l),t.appendChild(a),n.opacity===void 0&&(n.opacity=1),new Ot(t,"Transparenz",1-n.opacity,.1,h=>{n.opacity=1-Math.max(0,Math.min(1,h)),this.eventBus.emit("update-object-geometry",e)},0,1),this.eventBus.emit("update-object-geometry",e),t}renderGeometryControls(e,t){const n=e.userData.type;if(e instanceof Oe||e instanceof ct&&e.children[0]instanceof Oe){const i=e instanceof Oe?e:e.children[0];if(i.geometry){const r=i.geometry.attributes.position.count,o=i.geometry.index?i.geometry.index.count/3:r/3,a=document.createElement("div");a.style.cssText="font-size: 10px; color: #888; margin-bottom: 10px; border-bottom: 1px solid #333; padding-bottom: 5px;",a.innerText=`Vertices: ${r} | Faces: ${o}`,t.appendChild(a)}}if(n==="square"||n==="bezier_path"&&e.userData.isClosed&&!e.name.includes("Circle")){if(e.userData.offset||(e.userData.offset={enabled:!1,x:5,z:5}),e.userData.baseSize){new Ot(t,"Breite",e.userData.baseSize.width||50,1,l=>{e.userData.baseSize.width=l,st.updateRectangle(e),this.eventBus.emit("update-object-geometry",e)}),new Ot(t,"Länge",e.userData.baseSize.length||50,1,l=>{e.userData.baseSize.length=l,st.updateRectangle(e),this.eventBus.emit("update-object-geometry",e)}),e.userData.borderRadius||(e.userData.borderRadius={enabled:!1,radius:10});const i=document.createElement("div");i.style.cssText="margin-top: 10px; border-top: 1px dashed #444; padding-top: 5px;";const r=document.createElement("div");r.innerText="Ecken / Radius",r.style.cssText="font-size: 11px; font-weight: bold; color: #aaa; margin-bottom: 5px;",i.appendChild(r);const o=document.createElement("div");o.style.cssText="display: flex; align-items: center; margin-bottom: 5px; font-size: 11px;";const a=document.createElement("input");a.type="checkbox",a.checked=e.userData.borderRadius.enabled,a.onchange=()=>{e.userData.borderRadius.enabled=a.checked,st.updateRectangle(e),this.eventBus.emit("update-object-geometry",e)};const c=document.createElement("span");c.innerText="Abgerundet",c.style.marginLeft="5px",o.appendChild(a),o.appendChild(c),i.appendChild(o),new Ot(i,"Radius",e.userData.borderRadius.radius,1,l=>{e.userData.borderRadius.radius=l,e.userData.borderRadius.enabled&&(st.updateRectangle(e),this.eventBus.emit("update-object-geometry",e))}),t.appendChild(i);{const l=document.createElement("div");l.style.cssText="margin-top: 10px; border-top: 1px dashed #444; padding-top: 5px;";const h=document.createElement("div");h.innerText="Offset Kontur",h.style.cssText="font-size: 11px; font-weight: bold; color: #aaa; margin-bottom: 5px;",l.appendChild(h);const u=document.createElement("div");u.style.cssText="display: flex; align-items: center; margin-bottom: 5px; font-size: 11px;";const f=document.createElement("input");f.type="checkbox",f.checked=e.userData.offset.enabled,f.onchange=()=>{e.userData.offset.enabled=f.checked,st.updateRectangle(e),this.eventBus.emit("update-object-geometry",e)};const d=document.createElement("span");d.innerText="Aktivieren",d.style.marginLeft="5px",u.appendChild(f),u.appendChild(d),l.appendChild(u),new Ot(l,"Abstand X",e.userData.offset.x,1,g=>{e.userData.offset.x=g,e.userData.offset.enabled&&(st.updateRectangle(e),this.eventBus.emit("update-object-geometry",e))}),new Ot(l,"Abstand Z",e.userData.offset.z,1,g=>{e.userData.offset.z=g,e.userData.offset.enabled&&(st.updateRectangle(e),this.eventBus.emit("update-object-geometry",e))}),t.appendChild(l)}}}else if((n==="circle"||n==="bezier_path"&&e.name.includes("Circle"))&&(e.userData.offset||(e.userData.offset={enabled:!1,radius:5}),e.userData.baseSize)){new Ot(t,"Radius",e.userData.baseSize.radius||25,1,l=>{e.userData.baseSize.radius=l,this.updateCircle(e)});const i=document.createElement("div");i.style.cssText="margin-top: 10px; border-top: 1px dashed #444; padding-top: 5px;";const r=document.createElement("div");r.innerText="Offset Kontur",r.style.cssText="font-size: 11px; font-weight: bold; color: #aaa; margin-bottom: 5px;",i.appendChild(r);const o=document.createElement("div");o.style.cssText="display: flex; align-items: center; margin-bottom: 5px; font-size: 11px;";const a=document.createElement("input");a.type="checkbox",a.checked=e.userData.offset.enabled,a.onchange=()=>{e.userData.offset.enabled=a.checked,this.updateCircle(e)};const c=document.createElement("span");c.innerText="Aktivieren",c.style.marginLeft="5px",o.appendChild(a),o.appendChild(c),i.appendChild(o),new Ot(i,"Abstand",e.userData.offset.radius,1,l=>{e.userData.offset.radius=l,e.userData.offset.enabled&&this.updateCircle(e)}),t.appendChild(i)}}renderModifiersList(e,t){e.userData.modifiers.forEach((n,i)=>{const r=document.createElement("div");r.style.cssText="background:#2a2a2a; padding:5px; margin-top:5px; border:1px solid #444; font-size: 11px;";const o=document.createElement("div");o.style.cssText="display: flex; align-items: center; justify-content: space-between;";const a=document.createElement("div");a.style.cssText="display: flex; align-items: center; gap: 5px;";const c=document.createElement("input");c.type="checkbox",c.checked=n.active!==!1,c.title="Aktivieren/Deaktivieren",c.onchange=()=>{n.active=c.checked,this.eventBus.emit("modifier-param-changed",e),this.eventBus.emit("update-object-geometry",e)};const l=document.createElement("span");l.innerText=n.name,a.appendChild(c),a.appendChild(l),o.appendChild(a);const h=document.createElement("button");if(h.innerText="x",h.style.cssText="background:none; border:none; color:#f44; cursor:pointer; padding:0; font-size: 10px;",h.onclick=()=>this.modifierManager.removeModifier(e,i),o.appendChild(h),r.appendChild(o),n.type==="extrude"){const u=document.createElement("div");u.style.marginTop="5px",new Ot(r,"Höhe",n.params.height,1,f=>{this.modifierManager.updateModifierParam(e,i,"height",f)})}else if(n.type==="lathe"){const u=document.createElement("div");u.style.marginTop="5px",new Ot(r,"Segmente",n.params.segments||32,1,f=>{this.modifierManager.updateModifierParam(e,i,"segments",Math.round(f))},3,128,0)}else if(n.type==="face_delete"){const u=document.createElement("div");u.style.cssText="margin-top: 5px; color: #aaa; font-style: italic; font-size: 10px;",u.innerText="Im 3D-Fenster Flächen auswählen und dann hier entfernen.",r.appendChild(u);const f=document.createElement("button");f.innerText="Markierte Flächen entfernen",f.style.cssText="background:#555; border:1px solid #666; color:white; cursor:pointer; padding: 4px; font-size: 10px; margin-top: 5px; width: 100%;",f.onclick=()=>{this.eventBus.emit("execute-face-delete",e)},r.appendChild(f)}t.appendChild(r)})}updateCircle(e){const t=e.userData.baseSize.radius;st.updateCircleRadius(e,t)}}class Pg{constructor(e,t,n,i,r){V(this,"eventBus");V(this,"viewManager");V(this,"toolbar");this.eventBus=e,this.viewManager=n,this.toolbar=new Cg(e),new Rg(e,i,t,r),this.initUIListeners(),this.initKeyboardShortcuts()}initUIListeners(){this.eventBus.on("ui-focus-clicked",()=>{const e=window.app.objectManager.getSelectedObjects();e.length===1&&this.viewManager.focusOnObject(e[0])}),this.eventBus.on("toggle-debug-console",()=>{this.toolbar.debugConsole.toggle()})}initKeyboardShortcuts(){window.addEventListener("keydown",e=>{if(e.key==="F12"){e.preventDefault(),this.toolbar.debugConsole.toggle();return}const t=e.target;if(t.tagName==="INPUT"||t.tagName==="TEXTAREA")return;const n=e.key.toLowerCase();switch(n){case"p":this.viewManager.setActiveView(dt.PERSPECTIVE);return;case"t":this.viewManager.setActiveView(dt.TOP);return;case"f":this.viewManager.setActiveView(dt.FRONT);return;case"l":this.viewManager.setActiveView(dt.LEFT);return}switch(n){case"v":this.eventBus.emit("tool-selected","select");break;case"s":this.eventBus.emit("tool-selected","square");break;case"c":this.eventBus.emit("tool-selected","circle");break;case"escape":this.eventBus.emit("tool-selected","select");break;case"d":window.debugScene();break}})}}const Lg=`
  varying vec3 worldPosition;
  void main() {
    worldPosition = position; // Use object-local position
    gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
  }
`,Dg=`
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
`,Ei=16e3;function oo(s,e,t){return new zn({vertexShader:Lg,fragmentShader:Dg,transparent:!0,side:At,depthWrite:!1,depthTest:!1,uniforms:{size1:{value:e},size2:{value:t},color1:{value:new Fe(11184810)},color2:{value:new Fe(6710886)},axis:{value:s}}})}class Og{constructor(e,t,n){V(this,"eventBus");V(this,"viewManager");V(this,"scene");V(this,"gridTop",null);V(this,"gridFront",null);V(this,"gridLeft",null);V(this,"stepSize",10);V(this,"majorStep",100);this.eventBus=e,this.viewManager=t,this.scene=n,this.createGrids(),this.initListeners()}createGrids(){this.clearGrids();const e=new Fn(Ei,Ei,1,1).rotateX(Math.PI/2),t=oo(0,this.stepSize,this.majorStep);this.gridTop=new Oe(e,t),this.gridTop.position.y=-.05,this.gridTop.renderOrder=-100,this.scene.add(this.gridTop);const n=new Fn(Ei,Ei,1,1),i=oo(1,this.stepSize,this.majorStep);this.gridFront=new Oe(n,i),this.gridFront.position.z=-.05,this.gridFront.renderOrder=-100,this.scene.add(this.gridFront);const r=new Fn(Ei,Ei,1,1).rotateY(-Math.PI/2),o=oo(2,this.stepSize,this.majorStep);this.gridLeft=new Oe(r,o),this.gridLeft.position.x=-.05,this.gridLeft.renderOrder=-100,this.scene.add(this.gridLeft),this.updateGridVisibility()}clearGrids(){this.gridTop&&(this.scene.remove(this.gridTop),this.gridTop.geometry.dispose(),this.gridTop.material.dispose()),this.gridFront&&(this.scene.remove(this.gridFront),this.gridFront.geometry.dispose(),this.gridFront.material.dispose()),this.gridLeft&&(this.scene.remove(this.gridLeft),this.gridLeft.geometry.dispose(),this.gridLeft.material.dispose())}initListeners(){this.eventBus.on("camera-view-changed",this.updateGridVisibility.bind(this)),this.eventBus.on("settings-grid-changed",e=>{this.stepSize=e.step,this.majorStep=e.step*10,this.createGrids()}),this.eventBus.on("settings-grid-color-changed",e=>{const t=new Fe(e.color);this.gridTop&&(this.gridTop.material.uniforms.color2.value=t),this.gridFront&&(this.gridFront.material.uniforms.color2.value=t),this.gridLeft&&(this.gridLeft.material.uniforms.color2.value=t)})}updateGridVisibility(){if(!this.gridTop||!this.gridFront||!this.gridLeft)return;const e=this.viewManager.getActiveView?this.viewManager.getActiveView():dt.PERSPECTIVE;this.gridTop.visible=e===dt.TOP||e===dt.PERSPECTIVE,this.gridFront.visible=e===dt.FRONT,this.gridLeft.visible=e===dt.LEFT}}class Ig{constructor(e,t){V(this,"eventBus");V(this,"viewManager");V(this,"topRulerCanvas");V(this,"leftRulerCanvas");V(this,"topCtx");V(this,"leftCtx");V(this,"rulerThickness",20);V(this,"toolbarWidth",35);V(this,"headerHeight",40);V(this,"propertiesWidth",150);V(this,"footerHeight",30);this.eventBus=e,this.viewManager=t,this.topRulerCanvas=document.createElement("canvas"),this.leftRulerCanvas=document.createElement("canvas"),this.topCtx=this.topRulerCanvas.getContext("2d"),this.leftCtx=this.leftRulerCanvas.getContext("2d"),this.setupRulers(),this.initListeners(),setTimeout(()=>this.updateRulers(),100)}setupRulers(){const e=document.getElementById("app");if(!e)return;const t=(i,r)=>{i.style.position="absolute",i.style.backgroundColor="#222",i.style.zIndex="100",i.style.pointerEvents="none",r?(i.style.top=this.headerHeight+"px",i.style.left=this.toolbarWidth+this.rulerThickness+"px",i.style.height=this.rulerThickness+"px",i.style.right=this.propertiesWidth+"px"):(i.style.top=this.headerHeight+this.rulerThickness+"px",i.style.left=this.toolbarWidth+"px",i.style.width=this.rulerThickness+"px",i.style.bottom=this.footerHeight+"px"),e.appendChild(i)};t(this.topRulerCanvas,!0),t(this.leftRulerCanvas,!1);const n=document.createElement("div");Object.assign(n.style,{position:"absolute",top:this.headerHeight+"px",left:this.toolbarWidth+"px",width:this.rulerThickness+"px",height:this.rulerThickness+"px",background:"#333",zIndex:"101",borderRight:"1px solid #555",borderBottom:"1px solid #555",color:"#aaa",fontSize:"9px",display:"flex",alignItems:"center",justifyContent:"center"}),n.innerText="mm",e.appendChild(n)}initListeners(){this.eventBus.on("camera-change",()=>requestAnimationFrame(()=>this.updateRulers()))}getScreenPos(e,t,n){const i=e.clone();i.project(t);const r=(i.x*.5+.5)*n.width,o=(-(i.y*.5)+.5)*n.height;return new j(r+n.left,o+n.top)}updateRulers(){const e=this.viewManager.getActiveView?this.viewManager.getActiveView():dt.PERSPECTIVE;this.topRulerCanvas.style.display="block",this.leftRulerCanvas.style.display="block";const t=this.viewManager.getActiveCamera();if(!t)return;const n=document.getElementById("app");if(!n)return;t.updateMatrixWorld();const i=this.toolbarWidth+this.rulerThickness,r=n.clientWidth-i-this.propertiesWidth;this.topRulerCanvas.width=r,this.topRulerCanvas.height=this.rulerThickness;const o=this.headerHeight+this.rulerThickness,a=n.clientHeight-o-this.footerHeight;this.leftRulerCanvas.width=this.rulerThickness,this.leftRulerCanvas.height=a;const l=this.viewManager.getCanvas().getBoundingClientRect(),h=this.topRulerCanvas.getBoundingClientRect(),u=this.leftRulerCanvas.getBoundingClientRect(),f=this.getScreenPos(new y(0,0,0),t,l);let d=new y(100,0,0);e===dt.TOP||e===dt.PERSPECTIVE||e===dt.FRONT?d.set(100,0,0):e===dt.LEFT&&d.set(0,0,100);const g=this.getScreenPos(d,t,l),v=Math.abs(g.x-f.x)/100,m=f.x-h.left;this.drawRulerAnchor(this.topCtx,!0,m,v);let p=new y(0,0,0);e===dt.TOP||e===dt.PERSPECTIVE?p.set(0,0,100):p.set(0,100,0);const _=this.getScreenPos(p,t,l),x=Math.abs(_.y-f.y)/100,b=_.y<f.y,R=f.y-u.top;this.drawRulerAnchor(this.leftCtx,!1,R,x,b)}drawRulerAnchor(e,t,n,i,r=!1){const o=e.canvas.width,a=e.canvas.height;e.clearRect(0,0,o,a),e.fillStyle="#222",e.fillRect(0,0,o,a),e.strokeStyle="#666",e.fillStyle="#aaa",e.font="10px sans-serif",e.lineWidth=1,e.beginPath(),t?(e.moveTo(0,a-.5),e.lineTo(o,a-.5)):(e.moveTo(o-.5,0),e.lineTo(o-.5,a)),e.stroke();let c=1;for(;c*i<50;)c.toString().startsWith("1")?c*=2:c.toString().startsWith("2")?c*=2.5:c*=2;const l=v=>r?(n-v)/i:(v-n)/i,h=l(0),u=l(t?o:a),f=Math.min(h,u),d=Math.max(h,u),g=Math.ceil(f/c)*c;for(let v=g;v<=d;v+=c){let m=0;if(r?m=n-v*i:m=n+v*i,m=Math.floor(m)+.5,e.beginPath(),Math.abs(v)<1e-4?(e.strokeStyle="#ff4444",e.lineWidth=2):(e.strokeStyle="#666",e.lineWidth=1),t){if(m>=-5&&m<=o+5){e.moveTo(m,a),e.lineTo(m,a-5),e.stroke();const p=Math.round(v*100)/100;e.fillStyle=Math.abs(v)<1e-4?"#ff4444":"#aaa",e.fillText(p.toString(),m+2,a-8)}}else if(m>=-5&&m<=a+5){e.moveTo(o,m),e.lineTo(o-5,m),e.stroke();const p=Math.round(v*100)/100;e.save(),e.translate(o-8,m+2),e.rotate(-Math.PI/2),e.fillStyle=Math.abs(v)<1e-4?"#ff4444":"#aaa",e.fillText(p.toString(),0,0),e.restore()}}}}class Ng extends vt{constructor(e=1){super(),this.initAxes(e)}initAxes(e){const t=new y(0,0,0),n=new y(1,0,0),i=new io(n,t,e,16711680,.2*e,.1*e);this.makeOnTop(i),this.add(i),this.addLabel(e+.1*e,0,0,"X","red");const r=new y(0,1,0),o=new io(r,t,e,65280,.2*e,.1*e);this.makeOnTop(o),this.add(o),this.addLabel(0,e+.1*e,0,"Y","green");const a=new y(0,0,1),c=new io(a,t,e,6711039,.2*e,.1*e);this.makeOnTop(c),this.add(c),this.addLabel(0,0,e+.1*e,"Z","#6666ff")}makeOnTop(e){e.line&&(e.line.renderOrder=999,e.line.material instanceof wn&&(e.line.material.depthTest=!1,e.line.material.depthWrite=!1)),e.cone&&(e.cone.renderOrder=999,e.cone.material instanceof wn&&(e.cone.material.depthTest=!1,e.cone.material.depthWrite=!1))}addLabel(e,t,n,i,r){const o=document.createElement("canvas");o.width=64,o.height=64;const a=o.getContext("2d");a&&(a.font="Bold 48px Arial",a.textAlign="center",a.textBaseline="middle",a.fillStyle=r,a.fillText(i,32,32));const c=new hr(o),l=new sn({map:c,depthTest:!1,depthWrite:!1}),h=new ns(l);h.position.set(e,t,n),h.scale.set(.5,.5,1),this.add(h)}update(e){let t=1;e instanceof Tt?t=this.position.distanceTo(e.position)*.04:e instanceof It&&(t=1/e.zoom*50),t=Math.max(.1,t),this.scale.set(t,t,t)}}class Ug{constructor(e,t){V(this,"eventBus");V(this,"viewManager");V(this,"raycaster");V(this,"pointer");this.eventBus=e,this.viewManager=t,this.raycaster=new pr,this.pointer=new j,this.initListeners()}initListeners(){this.viewManager.getCanvas().addEventListener("pointerdown",t=>this.onPointerDown(t)),window.addEventListener("pointermove",t=>this.onPointerMove(t)),window.addEventListener("pointerup",t=>this.onPointerUp(t))}updatePointer(e){const n=this.viewManager.getCanvas().getBoundingClientRect();this.pointer.x=(e.clientX-n.left)/n.width*2-1,this.pointer.y=-((e.clientY-n.top)/n.height)*2+1;const i=this.viewManager.getActiveCamera();i&&this.raycaster.setFromCamera(this.pointer,i)}getIntersection(){const e=new y,t=this.viewManager.getActiveCamera();if(!t)return null;const n=new y;t.getWorldDirection(n);let i=new y;Math.abs(n.z)>.9?i.set(0,0,1):Math.abs(n.x)>.9?i.set(1,0,0):Math.abs(n.y)>.9?i.set(0,1,0):i.copy(n).negate();const r=new on(i,0);return Math.abs(this.raycaster.ray.direction.dot(i))<1e-4?null:this.raycaster.ray.intersectPlane(r,e)}onPointerDown(e){this.updatePointer(e);const t={originalEvent:e,pointer:this.pointer.clone(),intersection:this.getIntersection(),type:"down"};this.eventBus.emit("interaction-pointer-down",t)}onPointerMove(e){this.updatePointer(e);const t={originalEvent:e,pointer:this.pointer.clone(),intersection:this.getIntersection(),type:"move"};this.eventBus.emit("interaction-pointer-move",t)}onPointerUp(e){this.updatePointer(e);const t={originalEvent:e,pointer:this.pointer.clone(),intersection:this.getIntersection(),type:"up"};this.eventBus.emit("interaction-pointer-up",t)}}class Fg{constructor(e){V(this,"tools",new Map);V(this,"activeTool",null);V(this,"eventBus");this.eventBus=e,this.initListeners()}registerTool(e){this.tools.set(e.id,e)}selectTool(e){this.activeTool&&this.activeTool.deactivate(),e&&this.tools.has(e)?(this.activeTool=this.tools.get(e),this.activeTool.activate(),console.log(`Tool activated: ${e}`)):this.activeTool=null,this.eventBus.emit("tool-active-changed",e)}getActiveToolId(){return this.activeTool?this.activeTool.id:null}initListeners(){this.eventBus.on("interaction-pointer-down",e=>{this.activeTool&&this.activeTool.onPointerDown(e)}),this.eventBus.on("interaction-pointer-move",e=>{this.activeTool&&this.activeTool.onPointerMove(e)}),this.eventBus.on("interaction-pointer-up",e=>{this.activeTool&&this.activeTool.onPointerUp(e)}),this.eventBus.on("tool-selected",e=>{this.selectTool(e)})}}class as{constructor(e,t){V(this,"eventBus");V(this,"objectManager");V(this,"gridStep",10);V(this,"isSnapEnabled",!1);this.eventBus=e,this.objectManager=t,this.eventBus.on("toggle-snap",n=>{this.isSnapEnabled=n}),this.eventBus.on("settings-grid-changed",n=>{this.gridStep=n.step})}applySnap(e){const t=this.isSnapEnabled?Math.max(.1,this.gridStep):0;t>0&&(e.x=Math.round(e.x/t)*t,e.z=Math.round(e.z/t)*t,e.y=Math.round(e.y/t)*t)}getNextName(e){return`${e} ${Date.now()}`}setCameraLock(e){this.eventBus.emit("camera-controls-lock",e)}}class zg extends as{constructor(t,n,i){super(t,i);V(this,"id","line");V(this,"points",[]);V(this,"draftGroup",null);V(this,"draftMovingNode",null);V(this,"lastFixedNode",null)}activate(){this.resetState()}deactivate(){this.finishPath(),this.setCameraLock(!1)}onPointerDown(t){if(t.originalEvent.button!==0){this.finishPath();return}if(!t.intersection)return;const n=t.intersection.clone();this.applySnap(n),this.points.push(n),this.updateDraft(n),this.points.length===1&&this.setCameraLock(!0)}onPointerMove(t){if(this.points.length===0||!t.intersection)return;const n=t.intersection.clone();if(this.applySnap(n),this.draftMovingNode&&this.draftGroup){this.draftMovingNode.position.copy(n);const i=this.draftGroup.children[this.draftGroup.children.length-1];i&&i.userData.type==="bezier_line"&&st.updateBezierSegmentGeometry(i)}}onPointerUp(t){}updateDraft(t){if(this.draftGroup)this.draftMovingNode&&(this.draftMovingNode.position.copy(t),this.lastFixedNode=this.draftMovingNode,this.draftMovingNode=null);else{this.draftGroup=new ct,this.draftGroup.userData.type="draft_path",this.objectManager.addObject(this.draftGroup);const n=xe.createBezierPathNode(t);this.draftGroup.add(n),this.lastFixedNode=n}if(this.draftMovingNode=xe.createBezierPathNode(t.clone()),this.draftGroup.add(this.draftMovingNode),this.lastFixedNode){const n=xe.createLinkedBezierSegment(this.lastFixedNode,this.draftMovingNode);this.draftGroup.add(n)}}finishPath(){if(this.draftGroup&&(this.objectManager.removeObject(this.draftGroup),this.draftGroup=null,this.draftMovingNode=null),this.points.length>=2){const t=st.createPath(this.points,!1);if(t){t.userData.type="line",this.objectManager.addObject(t),this.setCameraLock(!1),this.resetState(),this.eventBus.emit("tool-selected","select"),setTimeout(()=>{this.objectManager.selectObject(t),this.eventBus.emit("selection-changed",[t])},50);return}}this.setCameraLock(!1),this.resetState()}resetState(){this.points=[],this.draftGroup=null,this.draftMovingNode=null,this.lastFixedNode=null}}class Cc{static createTranslateGizmo(){const e=new ct;e.userData.isGizmo=!0,e.userData.mode="translate";const t=.4,n=5,i=20,r=2,o=6,a=6,c=(u,f,d)=>{const g=new ct,v=new Bi(t,t,i,8);v.translate(0,i/2,0);const m=new Io(r,o,16);m.translate(0,i+o/2,0);const p=a,_=i+o,x=_-p,b=new Bi(n,n,x,8);b.translate(0,p+x/2,0);const R=new Oe(b,new Ct({visible:!1,transparent:!0,opacity:0}));R.userData={axis:u,mode:"translate"};const T=new Ct({color:f,depthTest:!1,depthWrite:!1}),E=new Oe(v,T),O=new Oe(m,T);E.userData={axis:u,mode:"translate"},O.userData={axis:u,mode:"translate"},E.renderOrder=100,O.renderOrder=100,g.add(E),g.add(O),g.add(R);const M=this.createLabel(d,"#"+new Fe(f).getHexString());return M.position.set(0,_+4,0),M.userData={axis:u,mode:"translate"},M.renderOrder=100,g.add(M),u==="x"&&g.rotateZ(-Math.PI/2),u==="z"&&g.rotateX(Math.PI/2),g};e.add(c("x",16729156,"X")),e.add(c("y",4521796,"Y")),e.add(c("z",6711039,"Z"));const l=new ur;l.moveTo(0,0),l.lineTo(a,0),l.lineTo(0,a),l.lineTo(0,0);const h=(u,f,d)=>{const g=new ct,v=new fr(l);d!=null&&d.x&&v.rotateX(d.x),d!=null&&d.y&&v.rotateY(d.y);const m=new Ct({color:f,side:At,transparent:!0,opacity:.2,depthTest:!1}),p=new Oe(v,m);p.renderOrder=99,p.userData={axis:u,mode:"translate"};const _=[new j(a,0),new j(0,a)],x=new it().setFromPoints(_);d!=null&&d.x&&x.rotateX(d.x),d!=null&&d.y&&x.rotateY(d.y);const b=new Qt({color:f,depthTest:!1,transparent:!0,opacity:.4}),R=new Li(x,b);return R.renderOrder=99,R.userData={axis:u,noPick:!0},g.add(p),g.add(R),g};return e.add(h("xz",16776960,{x:Math.PI/2})),e.add(h("xy",16776960)),e.add(h("zy",16776960,{y:Math.PI/2})),e}static createRotateGizmo(){const e=new ct;e.userData.isGizmo=!0,e.userData.mode="rotate";const t=30,n=.5,i=4,r=(o,a)=>{const c=new ct,l=new er(t,n,8,64),h=new Ct({color:a,depthTest:!1}),u=new Oe(l,h);u.renderOrder=100,u.userData={axis:o,mode:"rotate"};const f=new er(t,i,8,32),d=new Ct({visible:!1,transparent:!0,opacity:0}),g=new Oe(f,d);return g.userData={axis:o,mode:"rotate"},c.add(u),c.add(g),o==="x"&&c.rotateY(Math.PI/2),o==="y"&&c.rotateX(Math.PI/2),c};return e.add(r("x",16729156)),e.add(r("y",4521796)),e.add(r("z",6711039)),e}static createLabel(e,t){const n=document.createElement("canvas");n.width=64,n.height=64;const i=n.getContext("2d");i.fillStyle="white",i.font="Bold 48px Arial",i.textAlign="center",i.textBaseline="middle",i.fillText(e,32,32);const r=new hr(n),o=new sn({map:r,transparent:!0,color:new Fe(t)}),a=new ns(o);return a.scale.set(6,6,1),a}}class Uo{static updateScales(e,t){e.traverse(r=>{const o=r.userData.isGizmo,a=r.userData.isAnchor,c=r.userData.isControlPoint;if(o||a||c){let l=1;if(t instanceof Tt){const h=new y;r.getWorldPosition(h),l=h.distanceTo(t.position)*.015}else t instanceof It&&(l=1/t.zoom*15);if(l=Math.max(.001,l),o?l*=.15:r.userData.isMainAnchor?l*=1:c?l*=.7:l*=.8,r.parent){const h=new y;r.parent.getWorldScale(h),h.x!==0&&h.y!==0&&h.z!==0?r.scale.set(l/h.x,l/h.y,l/h.z):r.scale.set(l,l,l)}else r.scale.set(l,l,l)}})}}class Bg extends as{constructor(t,n,i,r){super(t,i);V(this,"id","select");V(this,"viewManager");V(this,"raycaster",new pr);V(this,"machineBrush");V(this,"activeGizmoMode","translate");V(this,"translateGizmo");V(this,"rotateGizmo");V(this,"selectedObject",null);V(this,"selectedSubObject",null);V(this,"isDragging",!1);V(this,"dragMode","none");V(this,"dragAxis",null);V(this,"dragStartPoint",new y);V(this,"objectStartPos",new y);V(this,"subObjectStartPos",new y);V(this,"dragPlane",new on);V(this,"dragOffset",new y);V(this,"lastPointer",new j);V(this,"activeAnchor",null);V(this,"hoveredSubObject",null);V(this,"hoveredOriginalColor",null);V(this,"activeSubObjectOriginalColor",null);this.viewManager=n,this.machineBrush=r,window.debugScene=()=>{console.log("--- SCENE DEBUG ---"),this.objectManager.getObjects().forEach(c=>{const l=new y;c.getWorldPosition(l),console.log(`Object: ${c.name} [${c.uuid}]`),console.log(`  Type: ${c.userData.type}, Visible: ${c.visible}`),console.log(`  WorldPos: x=${l.x.toFixed(2)}, y=${l.y.toFixed(2)}, z=${l.z.toFixed(2)}`),console.log(`  LocalScale: x=${c.scale.x.toFixed(2)}, y=${c.scale.y.toFixed(2)}, z=${c.scale.z.toFixed(2)}`),c.children.forEach(h=>{if(h.userData.isAnchor){const u=new y;if(h.getWorldPosition(u),console.log(`    Anchor [${h.uuid}]: x=${u.x.toFixed(2)}, y=${u.y.toFixed(2)}, z=${u.z.toFixed(2)}`),h instanceof ns||h instanceof Oe){const f=h.material;console.log(`      Color: #${f.color.getHexString()}`)}}})}),console.log("Selection:",this.objectManager.getSelectedObjects().map(c=>c.name))},this.raycaster.params.Line.threshold=3,this.translateGizmo=Cc.createTranslateGizmo(),this.rotateGizmo=Cc.createRotateGizmo(),this.translateGizmo.visible=!1,this.rotateGizmo.visible=!1;const o=this.viewManager.getScene();o.add(this.translateGizmo),o.add(this.rotateGizmo),this.eventBus.on("selection-changed",a=>{a.length===1?this.selectedObject=a[0]:this.selectedObject=null,this.updateGizmo()}),window.addEventListener("keydown",a=>{const c=a.target;c.tagName==="INPUT"||c.tagName==="TEXTAREA"||this.selectedObject&&(a.key.toLowerCase()==="t"?(this.activeGizmoMode="translate",this.updateGizmo()):a.key.toLowerCase()==="r"&&(this.activeGizmoMode="rotate",this.updateGizmo()))})}activate(){this.updateGizmo()}deactivate(){this.translateGizmo.visible=!1,this.rotateGizmo.visible=!1,this.selectedObject=null}updateGizmo(){if(this.translateGizmo.visible=!1,this.rotateGizmo.visible=!1,this.viewManager.getScene().traverse(n=>{(n.userData.isAnchor||n.userData.isControlPoint||n.userData.isHelperLine||n.userData.isNode)&&(n.userData.isMainAnchor||(n.visible=!1))}),this.selectedObject){const n=this.activeGizmoMode==="translate"?this.translateGizmo:this.rotateGizmo;n.visible=!0,n.position.copy(this.selectedObject.position),n.quaternion.copy(this.selectedObject.quaternion),this.activeGizmoMode==="translate"&&n.rotation.set(0,0,0);let i=0,r=0;this.selectedObject.traverse(a=>{(a.userData.isMainAnchor||a.userData.isControlPoint||a.userData.isNode||a.userData.isHelperLine)&&(a.visible=!0,a.userData.isNode&&i++,a.userData.isControlPoint&&r++)}),console.log(`SelectTool: Updated visibility for object "${this.selectedObject.name}". Found ${i} nodes and ${r} control points.`);const o=this.viewManager.getActiveCamera();o&&Uo.updateScales(this.viewManager.getScene(),o)}}updateRaycasterThresholds(){const t=this.viewManager.getActiveCamera();if(t instanceof It){const n=t.zoom;this.raycaster.params.Line.threshold=5/n,this.raycaster.params.Points.threshold=5/n}else this.raycaster.params.Line.threshold=.5,this.raycaster.params.Points.threshold=2}constrainToViewPlane(t,n){const i=this.viewManager.getActiveCamera();if(i instanceof It){const r=new y;i.getWorldDirection(r),Math.abs(r.z)>Math.abs(r.x)&&Math.abs(r.z)>Math.abs(r.y)?t.z=n.z:Math.abs(r.x)>Math.abs(r.z)&&Math.abs(r.x)>Math.abs(r.y)?t.x=n.x:t.y=n.y}}onPointerDown(t){if(t.originalEvent.button!==0)return;this.lastPointer.copy(t.pointer),this.updateRaycasterThresholds();const n=this.objectManager.getObjects(),i=this.viewManager.getActiveCamera();if(!i)return;if(this.raycaster.setFromCamera(t.pointer,i),this.raycaster.intersectObject(this.machineBrush.group,!0).length>0){this.eventBus.emit("open-brush-properties",null);return}let o,a=1/0;const c=1e-4,l=new y(t.pointer.x,t.pointer.y,.5);if(n.forEach(f=>{f.visible&&f.traverse(d=>{if((d.userData.isAnchor||d.userData.isControlPoint||d.userData.isNode)&&d.visible){const g=new y;if(d.getWorldPosition(g),g.project(i),g.z>-1&&g.z<1){const v=(g.x-l.x)**2+(g.y-l.y)**2;if(v<c&&v<a){a=v;const m=new y;d.getWorldPosition(m),new y(t.pointer.x,t.pointer.y,0).unproject(i),o={object:d,point:m}}}}})}),o){const f=new y;o.object.getWorldPosition(f)}if(o){const f=o.object;if(f.userData.isAnchor||f.userData.isControlPoint||f.userData.isNode){if(f.userData.isMainAnchor){let d=f.parent;for(;d&&d.parent&&d.parent.type!=="Scene";)d=d.parent;d&&(this.objectManager.selectObject(d),this.startObjectDrag(d),this.activeAnchor=f,this.activeAnchor.material instanceof sn&&this.activeAnchor.material.color.setHex(16776960))}else{this.startSubObjectDrag(f,o.point);let d=f.parent;for(;d&&d.parent&&d.parent.type!=="Scene";)d=d.parent;d&&d!==this.selectedObject&&this.objectManager.selectObject(d)}return}}const h=this.activeGizmoMode==="translate"?this.translateGizmo:this.rotateGizmo;if(h.visible){const f=this.raycastObject(t,h);if(f&&f.object.userData.axis){this.startGizmoDrag(f.object.userData.axis,f.point);return}}const u=this.raycaster.intersectObjects(n,!0);if(u.length>0){let d=u[0].object;for(;d.parent&&d.parent.type!=="Scene";)d=d.parent;this.objectManager.selectObject(d),this.startObjectDrag(d);const g=d.children.find(v=>v.userData.isMainAnchor);g&&(this.activeAnchor=g,this.activeAnchor.material instanceof sn&&this.activeAnchor.material.color.setHex(16776960))}else this.objectManager.deselectAll()}onPointerMove(t){this.updateRaycasterThresholds(),this.isDragging?this.dragMode==="gizmo"?this.handleGizmoDrag(t):this.dragMode==="sub-object"?this.handleSubObjectDrag(t):this.dragMode==="object"&&this.handleObjectDrag(t):this.handleHover(t)}handleHover(t){const n=this.objectManager.getObjects(),i=this.viewManager.getActiveCamera();if(!i)return;let r,o=1/0;const a=1e-4,c=new y(t.pointer.x,t.pointer.y,.5);if(n.forEach(u=>{u.visible&&u.traverse(f=>{if((f.userData.isAnchor||f.userData.isControlPoint||f.userData.isNode)&&f.visible){const d=new y;if(f.getWorldPosition(d),d.project(i),d.z>-1&&d.z<1){const g=(d.x-c.x)**2+(d.y-c.y)**2;g<a&&g<o&&(o=g,r={object:f})}}})}),r){const u=r.object;u.userData.isMainAnchor?this.setGizmoHighlight("all"):this.setGizmoHighlight(null),this.hoveredSubObject!==u&&(this.resetHover(),this.hoveredSubObject=u,(u.material instanceof sn||u.material instanceof Ct)&&(u.userData.uniqueMat||(u.material=u.material.clone(),u.userData.uniqueMat=!0),this.hoveredOriginalColor=u.material.color.getHex(),u.material.color.setHex(16776960),u.material.needsUpdate=!0));return}const l=this.activeGizmoMode==="translate"?this.translateGizmo:this.rotateGizmo;let h=null;if(l.visible){const u=this.raycastObject(t,l);u&&u.object.userData.axis&&(h=u.object.userData.axis)}h?(this.setGizmoHighlight(h),this.resetHover()):(this.setGizmoHighlight(null),this.resetHover())}resetHover(){if(this.hoveredSubObject&&this.hoveredOriginalColor!==null){const t=this.hoveredSubObject.material;if(t instanceof sn||t instanceof Ct){let n=!1;if(this.selectedObject){let i=this.hoveredSubObject.parent;for(;i&&i.parent&&i.parent.type!=="Scene";)i=i.parent;i===this.selectedObject&&(n=!0)}n?this.hoveredSubObject.userData.isControlPoint?t.color.setHex(65280):t.color.setHex(16711680):t.color.setHex(this.hoveredOriginalColor)}}this.hoveredSubObject=null,this.hoveredOriginalColor=null}onPointerUp(t){if(this.isDragging=!1,this.dragMode="none",this.setCameraLock(!1),this.activeAnchor&&(this.activeAnchor.material instanceof sn&&this.activeAnchor.material.color.setHex(16711680),this.activeAnchor=null),this.selectedSubObject&&this.activeSubObjectOriginalColor!==null){const n=this.selectedSubObject;(n.material instanceof sn||n.material instanceof Ct)&&n.material.color.setHex(this.activeSubObjectOriginalColor),this.activeSubObjectOriginalColor=null}this.selectedSubObject=null,this.setGizmoHighlight(null)}setGizmoHighlight(t){this.translateGizmo.traverse(i=>{if(i instanceof Oe||i instanceof ns){const r=i.userData.axis;if(!r)return;const o=i.material;if(!o)return;let a=16777215;r==="x"&&(a=16729156),r==="y"&&(a=4521796),r==="z"&&(a=6711039),t==="all"||t===r?(o.color.setHex(16776960),i instanceof Oe&&(o.opacity=.6)):(o.color.setHex(a),i instanceof Oe&&r.length>1&&(o.opacity=.2))}})}raycastObject(t,n){const i=this.viewManager.getActiveCamera();if(!i)return null;this.raycaster.setFromCamera(t.pointer,i);const r=this.raycaster.intersectObject(n,!0);return r.length>0?r[0]:null}startGizmoDrag(t,n){this.isDragging=!0,this.dragMode="gizmo",this.dragAxis=t,this.dragStartPoint.copy(n),this.selectedObject&&this.objectStartPos.copy(this.selectedObject.position),this.setCameraLock(!0),this.setGizmoHighlight(t);const i=new y,r=new y,o=this.viewManager.getActiveCamera();o&&o.getWorldDirection(r);const a=new y;t.includes("x")?a.set(1,0,0):t.includes("y")?a.set(0,1,0):t.includes("z")&&a.set(0,0,1),Math.abs(a.dot(r))>.9?Math.abs(r.y)>.9?i.set(0,0,1):i.set(0,1,0):t==="x"?i.crossVectors(new y(1,0,0),r).cross(new y(1,0,0)):t==="y"?i.crossVectors(new y(0,1,0),r).cross(new y(0,1,0)):t==="z"?i.crossVectors(new y(0,0,1),r).cross(new y(0,0,1)):t==="xz"?i.set(0,1,0):t==="xy"?i.set(0,0,1):t==="zy"&&i.set(1,0,0),i.normalize(),this.dragPlane.setFromNormalAndCoplanarPoint(i,n)}startObjectDrag(t){this.isDragging=!0,this.dragMode="object",this.objectStartPos.copy(t.position),this.setCameraLock(!0);const n=this.viewManager.getActiveCamera();let i=new y(0,1,0);if(n){const o=new y;n.getWorldDirection(o),i.copy(o).negate()}this.dragPlane.setFromNormalAndCoplanarPoint(i,t.position);const r=new y;if(this.raycaster.ray.intersectPlane(this.dragPlane,r)){const o=new y().subVectors(t.position,r);o.length()>5e4,this.dragOffset.copy(o)}else{this.isDragging=!1,this.dragMode="none",this.setCameraLock(!1);return}this.setGizmoHighlight("all")}startSubObjectDrag(t,n){this.isDragging=!0,this.dragMode="sub-object",this.selectedSubObject=t,this.setCameraLock(!0);const i=t;(i.material instanceof sn||i.material instanceof Ct)&&(this.activeSubObjectOriginalColor=i.material.color.getHex(),i.material.color.setHex(16776960));const r=new y;t.getWorldPosition(r),this.subObjectStartPos.copy(r);const o=this.viewManager.getActiveCamera();let a=new y(0,1,0);if(o){const l=new y;o.getWorldDirection(l),a.copy(l).negate()}this.dragPlane.setFromNormalAndCoplanarPoint(a,n),this.dragStartPoint.copy(n);const c=new y;this.raycaster.ray.intersectPlane(this.dragPlane,c)?this.dragOffset.subVectors(r,c):this.dragOffset.set(0,0,0)}handleGizmoDrag(t){if(!this.selectedObject||!this.dragAxis)return;const n=this.viewManager.getActiveCamera();if(!n)return;this.raycaster.setFromCamera(t.pointer,n);const i=new y;if(this.raycaster.ray.intersectPlane(this.dragPlane,i)&&this.activeGizmoMode==="translate"){const r=i.clone().sub(this.dragStartPoint),o=this.objectStartPos.clone();this.dragAxis.includes("x")&&(o.x+=r.x),this.dragAxis.includes("y")&&(o.y+=r.y),this.dragAxis.includes("z")&&(o.z+=r.z),this.constrainToViewPlane(o,this.objectStartPos),this.viewManager.getActiveView()===dt.TOP&&(o.y=this.objectStartPos.y),this.applySnap(o),Number.isFinite(o.x)&&Number.isFinite(o.y)&&Number.isFinite(o.z)&&Math.abs(o.x)<2e4&&Math.abs(o.y)<2e4&&Math.abs(o.z)<2e4&&this.selectedObject.position.copy(o),this.updateGizmo()}}handleObjectDrag(t){if(!this.selectedObject)return;const n=this.viewManager.getActiveCamera();if(!n)return;const i=new j().copy(t.pointer).sub(this.lastPointer);this.lastPointer.copy(t.pointer);let r=null;if(n instanceof It){const o={width:n.right-n.left,height:n.top-n.bottom},a=new y(i.x*o.width/n.zoom,i.y*o.height/n.zoom,0);a.applyQuaternion(n.quaternion),r=this.selectedObject.position.clone().add(a)}else{this.raycaster.setFromCamera(t.pointer,n);const o=new y;this.raycaster.ray.intersectPlane(this.dragPlane,o)&&(r=o.add(this.dragOffset))}if(r){if(isNaN(r.x)||isNaN(r.y)||isNaN(r.z)||r.length()>1e6)return;if(this.constrainToViewPlane(r,this.objectStartPos),this.viewManager.getActiveView()===dt.TOP&&(r.y=this.objectStartPos.y),this.applySnap(r),this.constrainToViewPlane(r,this.objectStartPos),this.viewManager.getActiveView()===dt.TOP&&(r.y=this.objectStartPos.y),!Number.isFinite(r.x)||!Number.isFinite(r.y)||!Number.isFinite(r.z)){console.error(`DEBUG: Invalid position detected for object ${this.selectedObject.name}:`,r);return}if(Math.abs(r.x)>1e4||Math.abs(r.y)>1e4||Math.abs(r.z)>1e4){console.warn(`DEBUG: Object ${this.selectedObject.name} move blocked - out of bounds:`,r);return}this.selectedObject.position.copy(r),this.updateGizmo()}}handleSubObjectDrag(t){if(!this.selectedSubObject)return;const n=this.viewManager.getActiveCamera();if(!n)return;let i=null;if(n instanceof It){const r=new j().copy(t.pointer).sub(this.lastPointer);this.lastPointer.copy(t.pointer);const o={width:n.right-n.left,height:n.top-n.bottom},a=new y(r.x*o.width/n.zoom,r.y*o.height/n.zoom,0);a.applyQuaternion(n.quaternion);const c=new y;this.selectedSubObject.getWorldPosition(c),i=c.add(a)}else{this.raycaster.setFromCamera(t.pointer,n);const r=new y;this.raycaster.ray.intersectPlane(this.dragPlane,r)&&(i=r.add(this.dragOffset))}if(i){if(this.constrainToViewPlane(i,this.subObjectStartPos),this.viewManager.getActiveView()===dt.TOP&&(i.y=this.subObjectStartPos.y),this.applySnap(i),t.originalEvent.altKey){if(n instanceof It){const o=new j().copy(t.pointer).sub(this.lastPointer),a={width:n.right-n.left,height:n.top-n.bottom},c=new y(o.x*a.width/n.zoom,o.y*a.height/n.zoom,0).applyQuaternion(n.quaternion),l=new y;this.selectedSubObject.getWorldPosition(l),i=l.add(c)}else{const o=new y;this.raycaster.ray.intersectPlane(this.dragPlane,o)&&i.copy(o.add(this.dragOffset))}this.constrainToViewPlane(i,this.subObjectStartPos),this.viewManager.getActiveView()===dt.TOP&&(i.y=this.subObjectStartPos.y)}if(!Number.isFinite(i.x)||!Number.isFinite(i.y)||!Number.isFinite(i.z)){console.error("DEBUG: Invalid sub-object position detected:",i);return}if(Math.abs(i.x)>1e4||Math.abs(i.y)>1e4||Math.abs(i.z)>1e4){console.warn("DEBUG: Sub-object move blocked - out of bounds:",i);return}const r=this.selectedSubObject.parent;if(r){const o=i.clone();r.worldToLocal(o);const a=this.selectedSubObject.position.clone(),c=o.clone().sub(a);this.selectedSubObject.position.copy(o),r.userData.type==="bezier_line"&&st.updateBezierSegmentGeometry(r);const l=r.userData.type==="bezier_path"||r.userData.type==="circle"||r.userData.type==="square"||r.userData.type==="line";this.selectedSubObject.userData.isNode&&l?r.children.forEach(u=>{if(u.userData.type==="bezier_line"&&u.userData.isLinked&&u.userData.nodes){const f=u.userData.nodes,d=u.userData.helpers,g=f.start===this.selectedSubObject,v=f.end===this.selectedSubObject;if(g||v){const m=f.start===this.selectedSubObject?o:f.start.position,p=f.end===this.selectedSubObject?o:f.end.position,_=f.start===this.selectedSubObject?a:f.start.position,x=f.end===this.selectedSubObject?a:f.end.position,b=new y().subVectors(x,_),R=b.length();let T=!1;if(R>.001){b.normalize();const E=d.cp1?new y().subVectors(d.cp1.position,_).cross(b).length():0,O=d.cp2?new y().subVectors(d.cp2.position,_).cross(b).length():0;T=E<.1&&O<.1}if(T){const E=new y().subVectors(p,m),O=E.length();d.cp1&&d.cp1.position.copy(m).add(E.clone().normalize().multiplyScalar(O*.333)),d.cp2&&d.cp2.position.copy(m).add(E.clone().normalize().multiplyScalar(O*.666))}else g&&d.cp1&&d.cp1.position.add(c),v&&d.cp2&&d.cp2.position.add(c);st.updateBezierSegmentGeometry(u)}}}):st.updateBezierSegmentGeometry(r),r.userData.type==="background_image"&&st.updateBackgroundImage(r),r.userData.type==="bezier_path"&&!this.selectedSubObject.userData.isNode&&r.children.forEach(u=>{u.userData.type==="bezier_line"&&u.userData.isLinked&&st.updateBezierSegmentGeometry(u)});let h=r;for(;h.parent&&h.parent.type!=="Scene";)h=h.parent;this.eventBus.emit("update-object-geometry",h)}}}}class Gg extends as{constructor(t,n,i){super(t,i);V(this,"id","square");V(this,"viewManager");V(this,"drawing",!1);V(this,"startPoint",new y);V(this,"previewObject",null);this.viewManager=n}activate(){this.drawing=!1,this.removePreview()}deactivate(){this.drawing=!1,this.setCameraLock(!1),this.removePreview()}onPointerDown(t){if(t.originalEvent.button!==0||!this.viewManager.getActiveCamera())return;const i=this.getIntersectionPoint(t);if(i)if(!this.drawing)this.drawing=!0,this.setCameraLock(!0),this.startPoint.copy(i),this.createPreview(i);else if(this.drawing=!1,this.setCameraLock(!1),this.previewObject){this.previewObject.userData.type="square",this.updateBaseSize(this.previewObject,this.startPoint,i);const r=this.previewObject;this.previewObject=null,this.eventBus.emit("preview-object-updated",null),this.eventBus.emit("tool-selected","select"),setTimeout(()=>{this.objectManager.selectObject(r),this.eventBus.emit("selection-changed",[r])},50)}else this.removePreview()}onPointerMove(t){if(!this.drawing||!this.previewObject)return;const n=this.getIntersectionPoint(t);n&&this.updatePreview(n)}onPointerUp(t){}getIntersectionPoint(t){const n=this.viewManager.getActiveCamera();if(!n)return null;const i=new pr;i.setFromCamera(t.pointer,n);const r=this.drawing?this.startPoint.y:0,o=new on(new y(0,1,0),-r),a=new y;return i.ray.intersectPlane(o,a)?(this.applySnap(a),a):null}createPreview(t){this.previewObject=st.createRectangle(this.startPoint,t),this.previewObject&&(this.previewObject.userData.type="square",this.updateBaseSize(this.previewObject,this.startPoint,t),this.objectManager.addObject(this.previewObject,!1),this.eventBus.emit("preview-object-updated",this.previewObject))}updatePreview(t){if(!this.previewObject)return;const n=this.startPoint,i=t,r=n.y,o=Math.min(n.x,i.x),a=Math.max(n.x,i.x),c=Math.min(n.z,i.z),l=Math.max(n.z,i.z),h=(o+a)/2,u=(c+l)/2;this.previewObject.position.set(h,r,u);const f=a-o,d=l-c,g=f/2,v=d/2,m=this.previewObject.children.filter(p=>p.userData.isNode);m.length===4&&(m[0].position.set(-g,0,-v),m[1].position.set(g,0,-v),m[2].position.set(g,0,v),m[3].position.set(-g,0,v),this.previewObject.children.filter(_=>_.userData.type==="bezier_line").forEach(_=>st.linearizeBezierSegment(_))),this.previewObject.traverse(p=>{p.userData.isMainAnchor?p.visible=!0:(p.userData.isNode||p.userData.isControlPoint||p.userData.isHelperLine)&&(p.visible=!1)}),this.updateBaseSize(this.previewObject,n,i),this.eventBus.emit("preview-object-updated",this.previewObject)}updateBaseSize(t,n,i){const r=Math.abs(n.x-i.x),o=Math.abs(n.z-i.z);t.userData.baseSize||(t.userData.baseSize={}),t.userData.baseSize.width=r,t.userData.baseSize.length=o}removePreview(){this.previewObject&&(this.objectManager.removeObject(this.previewObject),this.previewObject=null,this.eventBus.emit("preview-object-updated",null))}}class kg extends as{constructor(t,n,i){super(t,i);V(this,"id","circle");V(this,"startPoint",null);V(this,"previewObject",null)}activate(){this.resetState()}deactivate(){this.cancel(),this.setCameraLock(!1)}onPointerDown(t){if(t.originalEvent.button!==0){this.cancel(),this.setCameraLock(!1);return}if(!t.intersection)return;const n=t.intersection.clone();if(this.applySnap(n),!this.previewObject)this.startPoint=n,this.createPreviewObject(n),this.setCameraLock(!0);else{const i=n.distanceTo(this.startPoint),r=this.previewObject.position.clone();this.objectManager.removeObject(this.previewObject),this.previewObject=null,this.startPoint=null,this.setCameraLock(!1);const o=st.createShape("circle",r);o&&(st.updateCircleRadius(o,Math.max(.1,i)),o.userData.type="circle",this.objectManager.addObject(o),this.eventBus.emit("tool-selected","select"),setTimeout(()=>{this.objectManager.selectObject(o),this.eventBus.emit("selection-changed",[o])},50))}}onPointerMove(t){if(!this.previewObject||!this.startPoint||!t.intersection)return;const n=t.intersection.clone();this.applySnap(n),this.updatePreview(n)}onPointerUp(t){}cancel(){this.previewObject&&(this.objectManager.removeObject(this.previewObject),this.previewObject=null),this.startPoint=null,this.eventBus.emit("preview-object-updated",null)}resetState(){this.startPoint=null,this.previewObject=null}createPreviewObject(t){this.previewObject=st.createShape("circle",t),this.previewObject&&(this.previewObject.userData.type="circle",this.objectManager.addObject(this.previewObject,!1),this.eventBus.emit("preview-object-updated",this.previewObject))}updatePreview(t){if(!this.previewObject||!this.startPoint)return;const n=t.distanceTo(this.startPoint),i=Math.max(.1,n);st.updateCircleRadius(this.previewObject,i),this.eventBus.emit("preview-object-updated",this.previewObject)}}class tr extends as{constructor(t,n,i){super(t,i);V(this,"id","face_select");V(this,"viewManager");V(this,"raycaster",new pr);V(this,"selectedObject",null);V(this,"highlightMeshes",new Map);V(this,"originalWireframeState",new Map);this.viewManager=n,this.eventBus.on("selection-changed",r=>{this.selectedObject=r.length===1?r[0]:null,this._clearHighlights()}),this.eventBus.on("modifier-changed",r=>{var o;this.selectedObject&&this.selectedObject.uuid===r.uuid&&((o=r.userData.modifiers)!=null&&o.some(c=>c.type==="face_delete")||this._clearHighlights())}),this.eventBus.on("execute-face-delete",r=>{this.selectedObject&&this.selectedObject.uuid===r.uuid&&(console.log('FaceSelectTool: "execute-face-delete" empfangen. Geometrie wird aktualisiert.'),this._clearHighlights(),setTimeout(()=>{this.eventBus.emit("update-object-geometry",this.selectedObject)},50))})}_getVisualMesh(){if(!this.selectedObject)return null;const t=this.selectedObject.children.find(n=>n.userData.isGeneratedVisual);return t instanceof Oe?t:null}activate(){this.viewManager.getCanvas().style.cursor="crosshair",console.log("FaceSelectTool: Aktiviert. Klicke auf eine Fläche, um sie auszuwählen/abzuwählen."),this._clearHighlights();const t=this._getVisualMesh();t&&t.material instanceof Kn&&(this.originalWireframeState.has(t.uuid)||this.originalWireframeState.set(t.uuid,t.material.wireframe),t.material.wireframe=!1)}deactivate(){this.viewManager.getCanvas().style.cursor="default",this._clearHighlights();const t=this._getVisualMesh();t&&t.material instanceof Kn&&this.originalWireframeState.has(t.uuid)&&(t.material.wireframe=this.originalWireframeState.get(t.uuid),this.originalWireframeState.delete(t.uuid))}_clearHighlights(){this.highlightMeshes.forEach(t=>{t.parent&&(t.parent.remove(t),t.geometry.dispose(),t.material.dispose())}),this.highlightMeshes.clear()}onPointerDown(t){var a;if(t.originalEvent.button!==0||!this.selectedObject)return;console.log("FaceSelectTool: PointerDown auf ausgewähltem Objekt:",this.selectedObject.name);const n=this.viewManager.getActiveCamera();if(!n)return;this.raycaster.setFromCamera(t.pointer,n);let i=this.selectedObject.children.find(c=>c.userData.isGeneratedVisual);if(i||(i=this.selectedObject.children.find(c=>c.userData.isMesh),!i&&this.selectedObject instanceof Oe&&(i=this.selectedObject)),!i||!(i instanceof Oe)){console.error("FaceSelectTool: Kein Mesh zum Intersecten gefunden.");return}const r=i.material.side;i.material.side=At,console.log("FaceSelectTool: Teste Raycast gegen:",i.name);const o=this.raycaster.intersectObject(i,!0);if(i.material.side=r,console.log(`FaceSelectTool: ${o.length} Treffer gefunden.`),o.length>0){const c=o[0],l=c.object;if(c.faceIndex!==void 0&&c.faceIndex!==null&&l.geometry){const h=c.faceIndex,u=tr._getFaceCentroid(l.geometry,h);if(!u)return;const f=u.toArray().map(m=>m.toFixed(3)).join(","),d=(a=this.selectedObject.userData.modifiers)==null?void 0:a.find(m=>m.type==="face_delete"&&m.active);if(!d){alert('Bitte fügen Sie zuerst den "Flächen entfernen"-Modifikator hinzu.'),console.warn('FaceSelectTool: "Flächen entfernen" Modifikator nicht auf dem Objekt gefunden.'),this.eventBus.emit("tool-selected","select");return}const g=d.params.faces,v=this._findCentroidInArray(g,u);if(v>-1){g.splice(v,1);const m=this.highlightMeshes.get(f);m&&(m.parent&&m.parent.remove(m),m.geometry.dispose(),m.material.dispose(),this.highlightMeshes.delete(f)),console.log(`FaceSelectTool: Face mit Centroid ${f} abgewählt.`)}else{g.push(u);const m=tr._extractFaceGeometry(l.geometry,h),p=new Ct({color:16711680,transparent:!0,opacity:.5,depthTest:!1}),_=new Oe(m,p);_.renderOrder=999,_.userData.isHighlight=!0,this.selectedObject.add(_),this.highlightMeshes.set(f,_),console.log(`FaceSelectTool: Face mit Centroid ${f} ausgewählt und hervorgehoben.`)}console.log("FaceSelectTool: Neue Liste zu löschender Faces (Centroids):",g.map(m=>m.toArray().map(p=>p.toFixed(3)).join(",")))}}}onPointerMove(){}onPointerUp(){}_findCentroidInArray(t,n,i=.01){for(let r=0;r<t.length;r++)if(t[r].distanceTo(n)<i)return r;return-1}static _extractFaceGeometry(t,n){const i=new it,r=t.attributes.position,o=t.attributes.normal,a=t.attributes.uv,c=t.index?t.index.array:null;if(!c)return i;const l=[],h=[],u=[],f=[],d=c[n*3],g=c[n*3+1],v=c[n*3+2];return l.push(r.getX(d),r.getY(d),r.getZ(d)),l.push(r.getX(g),r.getY(g),r.getZ(g)),l.push(r.getX(v),r.getY(v),r.getZ(v)),o&&(h.push(o.getX(d),o.getY(d),o.getZ(d)),h.push(o.getX(g),o.getY(g),o.getZ(g)),h.push(o.getX(v),o.getY(v),o.getZ(v))),a&&(u.push(a.getX(d),a.getY(d)),u.push(a.getX(g),a.getY(g)),u.push(a.getX(v),a.getY(v))),f.push(0,1,2),i.setAttribute("position",new et(l,3)),h.length>0&&i.setAttribute("normal",new et(h,3)),u.length>0&&i.setAttribute("uv",new et(u,2)),i.setIndex(f),i}static _getFaceCentroid(t,n){const i=t.attributes.position,r=t.index?t.index.array:null;if(!r)return null;const o=r[n*3],a=r[n*3+1],c=r[n*3+2],l=new y(i.getX(o),i.getY(o),i.getZ(o)),h=new y(i.getX(a),i.getY(a),i.getZ(a)),u=new y(i.getX(c),i.getY(c),i.getZ(c));return l.add(h).add(u).divideScalar(3)}}function yl(s,e=!1){const t=s[0].index!==null,n=new Set(Object.keys(s[0].attributes)),i=new Set(Object.keys(s[0].morphAttributes)),r={},o={},a=s[0].morphTargetsRelative,c=new it;let l=0;for(let h=0;h<s.length;++h){const u=s[h];let f=0;if(t!==(u.index!==null))return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+". All geometries must have compatible attributes; make sure index attribute exists among all geometries, or in none of them."),null;for(const d in u.attributes){if(!n.has(d))return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+'. All geometries must have compatible attributes; make sure "'+d+'" attribute exists among all geometries, or in none of them.'),null;r[d]===void 0&&(r[d]=[]),r[d].push(u.attributes[d]),f++}if(f!==n.size)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+". Make sure all geometries have the same number of attributes."),null;if(a!==u.morphTargetsRelative)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+". .morphTargetsRelative must be consistent throughout all geometries."),null;for(const d in u.morphAttributes){if(!i.has(d))return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+".  .morphAttributes must be consistent throughout all geometries."),null;o[d]===void 0&&(o[d]=[]),o[d].push(u.morphAttributes[d])}if(e){let d;if(t)d=u.index.count;else if(u.attributes.position!==void 0)d=u.attributes.position.count;else return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+". The geometry must have either an index or a position attribute"),null;c.addGroup(l,d,h),l+=d}}if(t){let h=0;const u=[];for(let f=0;f<s.length;++f){const d=s[f].index;for(let g=0;g<d.count;++g)u.push(d.getX(g)+h);h+=s[f].attributes.position.count}c.setIndex(u)}for(const h in r){const u=Rc(r[h]);if(!u)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed while trying to merge the "+h+" attribute."),null;c.setAttribute(h,u)}for(const h in o){const u=o[h][0].length;if(u===0)break;c.morphAttributes=c.morphAttributes||{},c.morphAttributes[h]=[];for(let f=0;f<u;++f){const d=[];for(let v=0;v<o[h].length;++v)d.push(o[h][v][f]);const g=Rc(d);if(!g)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed while trying to merge the "+h+" morphAttribute."),null;c.morphAttributes[h].push(g)}}return c}function Rc(s){let e,t,n,i=-1,r=0;for(let l=0;l<s.length;++l){const h=s[l];if(h.isInterleavedBufferAttribute)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. InterleavedBufferAttributes are not supported."),null;if(e===void 0&&(e=h.array.constructor),e!==h.array.constructor)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.array must be of consistent array types across matching attributes."),null;if(t===void 0&&(t=h.itemSize),t!==h.itemSize)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.itemSize must be consistent across matching attributes."),null;if(n===void 0&&(n=h.normalized),n!==h.normalized)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.normalized must be consistent across matching attributes."),null;if(i===-1&&(i=h.gpuType),i!==h.gpuType)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.gpuType must be consistent across matching attributes."),null;r+=h.array.length}const o=new e(r);let a=0;for(let l=0;l<s.length;++l)o.set(s[l].array,a),a+=s[l].array.length;const c=new Nt(o,t,n);return i!==void 0&&(c.gpuType=i),c}function Ii(s,e=1e-4){e=Math.max(e,Number.EPSILON);const t={},n=s.getIndex(),i=s.getAttribute("position"),r=n?n.count:i.count;let o=0;const a=Object.keys(s.attributes),c={},l={},h=[],u=["getX","getY","getZ","getW"],f=["setX","setY","setZ","setW"];for(let _=0,x=a.length;_<x;_++){const b=a[_],R=s.attributes[b];c[b]=new Nt(new R.array.constructor(R.count*R.itemSize),R.itemSize,R.normalized);const T=s.morphAttributes[b];T&&(l[b]=new Nt(new T.array.constructor(T.count*T.itemSize),T.itemSize,T.normalized))}const d=e*.5,g=Math.log10(1/e),v=Math.pow(10,g),m=d*v;for(let _=0;_<r;_++){const x=n?n.getX(_):_;let b="";for(let R=0,T=a.length;R<T;R++){const E=a[R],O=s.getAttribute(E),M=O.itemSize;for(let w=0;w<M;w++)b+=`${~~(O[u[w]](x)*v+m)},`}if(b in t)h.push(t[b]);else{for(let R=0,T=a.length;R<T;R++){const E=a[R],O=s.getAttribute(E),M=s.morphAttributes[E],w=O.itemSize,N=c[E],B=l[E];for(let q=0;q<w;q++){const L=u[q],F=f[q];if(N[F](o,O[L](x)),M)for(let G=0,Z=M.length;G<Z;G++)B[G][F](o,M[G][L](x))}}t[b]=o,h.push(o),o++}}const p=s.clone();for(const _ in s.attributes){const x=c[_];if(p.setAttribute(_,new Nt(x.array.slice(0,o*x.itemSize),x.itemSize,x.normalized)),_ in l)for(let b=0;b<l[_].length;b++){const R=l[_][b];p.morphAttributes[_][b]=new Nt(R.array.slice(0,o*R.itemSize),R.itemSize,R.normalized)}}return p.setIndex(h),p}class Ws{static convert(e){var u;const t=[];console.log(`MeshConverter: Starte Umwandlung für "${e.name}"...`),e.updateMatrixWorld(!0);const n=new ot().copy(e.matrixWorld).invert();if(e.traverse(f=>{if(f instanceof Oe&&!f.userData.isGeneratedVisual&&!f.name.includes("Helper")&&f.name!=="Viz_Boundary"&&!f.userData.isHighlight&&f.geometry&&f.geometry.attributes.position&&f.geometry.attributes.position.count>0){const d=f.geometry.clone(),g=new ot().multiplyMatrices(n,f.matrixWorld);d.applyMatrix4(g);const v=g.determinant();if(v<0&&d.index){const p=d.index;for(let _=0;_<p.count;_+=3){const x=p.getX(_),b=p.getX(_+1);p.setX(_,b),p.setX(_+1,x)}}this.snapGeometryToGrid(d);const m=new it;m.setAttribute("position",d.getAttribute("position")),d.index&&m.setIndex(d.index),d.attributes.normal&&m.setAttribute("normal",d.getAttribute("normal")),d.attributes.uv&&m.setAttribute("uv",d.getAttribute("uv")),t.push(Ii(m,.001)),console.log(`  -> Teil gefunden: ${f.name||"Hauptmesh"} (${d.attributes.position.count} Vertices, Mirrored: ${v<0})`)}}),t.length===0)return console.warn("MeshConverter: Keine gültigen Geometrien gefunden!"),null;let i=t.length===1?t[0]:yl(t,!1);i.deleteAttribute("normal"),i.deleteAttribute("uv"),i=Ii(i,.1),i.computeVertexNormals();const r=this.countHoles(i);console.log("MeshConverter: Umwandlung abgeschlossen."),console.log(`- Teile verschmolzen: ${t.length}`),console.log(`- Finale Vertices: ${i.attributes.position.count}`),console.log(`- Löcher gefunden: ${r} ${r===0?"(Wasserdicht ✔)":"(WARNUNG ⚠)"}`);let o="#ff0000";(u=e.userData.materialParams)!=null&&u.color&&(o=e.userData.materialParams.color);const a=e.userData.materialParams||{},c=a.opacity!==void 0?a.opacity:1,l=new Kn({color:new Fe(a.color||o),side:At,wireframe:a.wireframe!==void 0?a.wireframe:!1,roughness:a.roughness!==void 0?a.roughness:.5,metalness:a.metalness!==void 0?a.metalness:.1,flatShading:a.flatShading!==void 0?a.flatShading:!1,opacity:c,transparent:c<1,depthWrite:c>=1}),h=new Oe(i,l);return h.name=e.name+"_Mesh",h.position.set(0,0,0),h.rotation.set(0,0,0),h.scale.set(1,1,1),h.userData.type="converted_mesh",h.userData.isMesh=!0,h.userData.openEdgeCount=r,h.userData.materialParams={color:a.color||o,wireframe:a.wireframe!==void 0?a.wireframe:!1,roughness:a.roughness!==void 0?a.roughness:.5,metalness:a.metalness!==void 0?a.metalness:.1,flatShading:a.flatShading!==void 0?a.flatShading:!1,opacity:c},h}static snapGeometryToGrid(e){if(!e||!e.attributes||!e.attributes.position)return;const t=e.attributes.position,n=100;for(let i=0;i<t.count;i++)t.setXYZ(i,Math.round(t.getX(i)*n)/n,Math.round(t.getY(i)*n)/n,Math.round(t.getZ(i)*n)/n);t.needsUpdate=!0}static mergeAndCountHoles(e){const t=e.clone();t.deleteAttribute("normal"),t.deleteAttribute("uv");const n=Ii(t,.1);return this.countHoles(n)}static countHoles(e){if(!e.index)return 0;const t=new Map,n=e.index;for(let r=0;r<n.count;r+=3){const o=n.getX(r),a=n.getX(r+1),c=n.getX(r+2);[[o,a],[a,c],[c,o]].forEach(([l,h])=>{const u=l<h?`${l}_${h}`:`${h}_${l}`;t.set(u,(t.get(u)||0)+1)})}let i=0;return t.forEach(r=>{r===1&&i++}),i}}class nr{constructor(e){V(this,"eventBus");this.eventBus=e,this.eventBus.on("update-object-geometry",t=>this.applyModifiers(t)),this.eventBus.on("object-added",t=>{setTimeout(()=>this.applyModifiers(t),10)}),this.eventBus.on("convert-to-mesh",t=>{this.addModifier(t,"mesh_convert")})}addModifier(e,t){if(e.userData.modifiers||(e.userData.modifiers=[]),e.userData.modifiers.find(i=>i.type===t))return;let n={};t==="extrude"?n={height:50}:t==="lathe"?n={segments:32,phiStart:0,phiLength:Math.PI*2}:t==="face_delete"&&(n={faces:[]}),e.userData.modifiers.push({type:t,name:this.getModifierName(t),params:n,active:!0}),this.applyModifiers(e),this.eventBus.emit("modifier-changed",e)}getModifierName(e){switch(e){case"extrude":return"Extrudieren";case"lathe":return"Rotation";case"mesh_convert":return"In Mesh umwandeln";case"face_delete":return"Flächen entfernen";default:return"Unbekannter Modifikator"}}updateModifierParam(e,t,n,i){var r;(r=e.userData.modifiers)!=null&&r[t]&&(e.userData.modifiers[t].params[n]=i,this.applyModifiers(e),this.eventBus.emit("modifier-param-changed",e))}removeModifier(e,t){e.userData.modifiers&&e.userData.modifiers[t]&&(e.userData.modifiers.splice(t,1),this.applyModifiers(e),this.eventBus.emit("modifier-changed",e))}applyModifiers(e){this.cleanup(e);const t=e.userData.modifiers||[],n=t.find(c=>c.type==="extrude"&&c.active),i=t.find(c=>c.type==="lathe"&&c.active);let r=t.find(c=>c.type==="mesh_convert"&&c.active);const o=e.userData.materialParams;if(o&&o.color){const c=new Fe(o.color);e.children.forEach(l=>{if(l.userData.type==="bezier_line"){const h=l.children.find(u=>u.userData.isCurve);h&&h.material&&h.material.color.copy(c)}})}if(e.userData.type==="boolean_result"&&t.length===0)return;const a=c=>{const l=Ws.convert(c);if(l){const h=t.find(u=>u.type==="face_delete"&&u.active);if(h&&h.params.faces.length>0){const u=l.geometry,f=new Set,d=h.params.faces;if(u.index){for(let m=0;m<u.index.count/3;m++){const p=nr._getFaceCentroid(u,m);if(p){for(const _ of d)if(_.distanceTo(p)<.01){f.add(m);break}}}const g=[];for(let m=0;m<u.index.count;m+=3){const p=m/3;f.has(p)||g.push(u.index.getX(m),u.index.getY(m),u.index.getZ(m))}const v=new it;v.setAttribute("position",u.attributes.position),u.attributes.normal&&v.setAttribute("normal",u.attributes.normal),u.attributes.uv&&v.setAttribute("uv",u.attributes.uv),v.setIndex(g),l.geometry.dispose(),l.geometry=v,l.geometry.attributes.position.needsUpdate=!0,l.geometry.attributes.normal&&(l.geometry.attributes.normal.needsUpdate=!0),l.geometry.attributes.uv&&(l.geometry.attributes.uv.needsUpdate=!0),l.geometry.index&&(l.geometry.index.needsUpdate=!0),l.material.needsUpdate=!0}}}return l};if(n){const c=this.getShape(e);if(c){const l=new No(c,{depth:n.params.height,bevelEnabled:!1});l.rotateX(-Math.PI/2);const h=(o==null?void 0:o.wireframe)===!0,u=(o==null?void 0:o.opacity)!==void 0?o.opacity:1,f=u<1,d=g=>new Kn({color:new Fe((o==null?void 0:o.color)||13421772),side:g,roughness:(o==null?void 0:o.roughness)!==void 0?o.roughness:.5,metalness:(o==null?void 0:o.metalness)!==void 0?o.metalness:.1,wireframe:h,opacity:u,transparent:f,depthWrite:!f,flatShading:(o==null?void 0:o.flatShading)!==void 0?o.flatShading:!1});if(this.setOriginalVisibility(e,!1),f){const g=new Oe(l,d(kt));g.userData.isGeneratedVisual=!0,g.renderOrder=0,e.add(g);const v=new Oe(l,d(un));v.userData.isGeneratedVisual=!0,v.renderOrder=1,e.add(v)}else{const g=new Oe(l,d(un));g.userData.isGeneratedVisual=!0,e.add(g)}if(o&&!o.wireframe){const g=new Qi(l),v=new Di(g,new Qt({color:0,transparent:!0,opacity:.3}));v.userData.isGeneratedVisual=!0,e.add(v)}e.userData.openEdgeCount=Ws.mergeAndCountHoles(l)}}else if(i){const c=this.getPointsForLathe(e);if(c.length>1){const l=new Oo(c,i.params.segments,i.params.phiStart,i.params.phiLength),h=(o==null?void 0:o.wireframe)===!0,u=(o==null?void 0:o.opacity)!==void 0?o.opacity:1,f=new Kn({color:new Fe((o==null?void 0:o.color)||13421772),side:At,roughness:(o==null?void 0:o.roughness)||.5,metalness:(o==null?void 0:o.metalness)||.1,wireframe:h,opacity:u,transparent:u<1,depthWrite:u>=1}),d=new Oe(l,f);if(d.userData.isGeneratedVisual=!0,this.setOriginalVisibility(e,!1),e.add(d),o&&!o.wireframe){const g=new Qi(d.geometry),v=new Di(g,new Qt({color:0,transparent:!0,opacity:.3}));v.userData.isGeneratedVisual=!0,e.add(v)}e.userData.openEdgeCount=Ws.countHoles(l)}}else if(r){const c=a(e);if(c){if(this.setOriginalVisibility(e,!1),c.userData.isGeneratedVisual=!0,e.add(c),o&&!o.wireframe){const l=new Qi(c.geometry),h=new Di(l,new Qt({color:0,transparent:!0,opacity:.3}));h.userData.isGeneratedVisual=!0,e.add(h)}e.userData.openEdgeCount=c.userData.openEdgeCount}}else{const c=t.find(l=>l.type==="face_delete"&&l.active);if(c){const l=e.children.find(h=>h.userData.isMesh&&!h.userData.isGeneratedVisual);if(l){const h=l.geometry.clone(),u=new Set,f=c.params.faces;if(h.index){for(let v=0;v<h.index.count/3;v++){const m=nr._getFaceCentroid(h,v);if(m){for(const p of f)if(p.distanceTo(m)<.01){u.add(v);break}}}const d=[];for(let v=0;v<h.index.count;v+=3){const m=v/3;u.has(m)||d.push(h.index.getX(v),h.index.getY(v),h.index.getZ(v))}h.setIndex(d),h.computeVertexNormals(),h.attributes.position.needsUpdate=!0,h.attributes.normal&&(h.attributes.normal.needsUpdate=!0),h.attributes.uv&&(h.attributes.uv.needsUpdate=!0),h.index&&(h.index.needsUpdate=!0),l.material.needsUpdate=!0;const g=new Oe(h,l.material);g.userData.isGeneratedVisual=!0,this.setOriginalVisibility(e,!1),e.add(g),e.userData.openEdgeCount=Ws.countHoles(h)}}else this.setOriginalVisibility(e,!0),e.userData.openEdgeCount=0}else if(this.setOriginalVisibility(e,!0),e.userData.openEdgeCount=0,o&&!o.wireframe){const l=this.getShape(e);if(l){const h=new fr(l);h.rotateX(-Math.PI/2);const u=new Kn({color:new Fe(o.color||13421772),side:At,roughness:o.roughness||.5,metalness:o.metalness||.1,polygonOffset:!0,polygonOffsetFactor:1,polygonOffsetUnits:1}),f=new Oe(h,u);f.userData.isGeneratedVisual=!0,e.add(f)}}}e.updateMatrixWorld(!0)}getPointsForLathe(e){const t=e.children.filter(i=>i.userData.type==="bezier_line");if(t.length===0)return[];const n=[];return t.forEach(i=>{const r=i.children.find(a=>a.userData.isCurve);if(!r)return;const o=r.userData.curve;if(o){const a=o.type==="LineCurve3";o.getPoints(a?1:20).forEach(l=>{n.push(new j(l.x,l.y))})}}),n}getShape(e){var o,a,c;const t=e.children.filter(l=>l.userData.type==="bezier_line");if(t.length===0)return null;const n=[...t],i=[];for(;n.length>0;){const l=[];let h=n.shift();if(!h)break;for(l.push(h);;){const g=(o=l[l.length-1].userData.nodes)==null?void 0:o.end;if(l.length>1&&g===((a=l[0].userData.nodes)==null?void 0:a.start)||l.length===1&&g===((c=l[0].userData.nodes)==null?void 0:c.start)||!g)break;const v=n.findIndex(m=>{var p;return((p=m.userData.nodes)==null?void 0:p.start)===g});if(v!==-1)l.push(n[v]),n.splice(v,1);else break}const u=new Qs;let f=!0;l.forEach(d=>{const g=d.children.find(m=>m.userData.isCurve);if(!g)return;const v=g.userData.curve;if(v){const m=v.type==="LineCurve3",p=v.getPoints(m?1:20);f&&(u.moveTo(p[0].x,-p[0].z),f=!1);for(let _=1;_<p.length;_++)u.lineTo(p[_].x,-p[_].z)}}),u.closePath(),i.push(u)}if(i.length===0)return null;i.sort((l,h)=>{const u=f=>{const d=f.getPoints();if(d.length===0)return 0;let g=1/0,v=-1/0,m=1/0,p=-1/0;return d.forEach(_=>{_.x<g&&(g=_.x),_.x>v&&(v=_.x),_.y<m&&(m=_.y),_.y>p&&(p=_.y)}),(v-g)*(p-m)};return u(h)-u(l)});const r=new ur(i[0].getPoints());for(let l=1;l<i.length;l++)r.holes.push(new Qs(i[l].getPoints()));return r}cleanup(e){for(let t=e.children.length-1;t>=0;t--)if(e.children[t].userData.isGeneratedVisual){const n=e.children[t];n.geometry&&n.geometry.dispose(),n.material&&(Array.isArray(n.material)?n.material.forEach(i=>i.dispose()):n.material.dispose()),e.remove(e.children[t])}}setOriginalVisibility(e,t){e.traverse(n=>{if(n!==e&&!n.userData.isGeneratedVisual){if(n.userData.isNode||n.userData.isControlPoint||n.userData.isHelperLine||n.userData.isAnchor)return;(n.userData.generated||n.userData.isCurve||n.userData.isOffset)&&(n.visible=t),n.userData.type==="bezier_line"&&(n.visible=!0)}})}static _getFaceCentroid(e,t){const n=e.attributes.position,i=e.index?e.index.array:null;if(!i)return null;const r=i[t*3],o=i[t*3+1],a=i[t*3+2],c=new y(n.getX(r),n.getY(r),n.getZ(r)),l=new y(n.getX(o),n.getY(o),n.getZ(o)),h=new y(n.getX(a),n.getY(a),n.getZ(a));return c.add(l).add(h).divideScalar(3)}}class Hg{parse(e,t={}){t=Object.assign({binary:!1},t);const n=t.binary,i=[];let r=0;e.traverse(function(p){if(p.isMesh){const _=p.geometry,x=_.index,b=_.getAttribute("position");r+=x!==null?x.count/3:b.count/3,i.push({object3d:p,geometry:_})}});let o,a=80;if(n===!0){const p=r*2+r*3*4*4+80+4,_=new ArrayBuffer(p);o=new DataView(_),o.setUint32(a,r,!0),a+=4}else o="",o+=`solid exported
`;const c=new y,l=new y,h=new y,u=new y,f=new y,d=new y;for(let p=0,_=i.length;p<_;p++){const x=i[p].object3d,b=i[p].geometry,R=b.index,T=b.getAttribute("position");if(R!==null)for(let E=0;E<R.count;E+=3){const O=R.getX(E+0),M=R.getX(E+1),w=R.getX(E+2);g(O,M,w,T,x)}else for(let E=0;E<T.count;E+=3){const O=E+0,M=E+1,w=E+2;g(O,M,w,T,x)}}return n===!1&&(o+=`endsolid exported
`),o;function g(p,_,x,b,R){c.fromBufferAttribute(b,p),l.fromBufferAttribute(b,_),h.fromBufferAttribute(b,x),R.isSkinnedMesh===!0&&(R.applyBoneTransform(p,c),R.applyBoneTransform(_,l),R.applyBoneTransform(x,h)),c.applyMatrix4(R.matrixWorld),l.applyMatrix4(R.matrixWorld),h.applyMatrix4(R.matrixWorld),v(c,l,h),m(c),m(l),m(h),n===!0?(o.setUint16(a,0,!0),a+=2):(o+=`		endloop
`,o+=`	endfacet
`)}function v(p,_,x){u.subVectors(x,_),f.subVectors(p,_),u.cross(f).normalize(),d.copy(u).normalize(),n===!0?(o.setFloat32(a,d.x,!0),a+=4,o.setFloat32(a,d.y,!0),a+=4,o.setFloat32(a,d.z,!0),a+=4):(o+="	facet normal "+d.x+" "+d.y+" "+d.z+`
`,o+=`		outer loop
`)}function m(p){n===!0?(o.setFloat32(a,p.x,!0),a+=4,o.setFloat32(a,p.y,!0),a+=4,o.setFloat32(a,p.z,!0),a+=4):o+="			vertex "+p.x+" "+p.y+" "+p.z+`
`}}}class Vg{constructor(e,t){V(this,"eventBus");V(this,"objectManager");V(this,"fileHandle",null);V(this,"currentProjectName","Unbenanntes Projekt");V(this,"dbName","KonstruktionDB");V(this,"storeName","AutoSave");V(this,"brushProfiles",{});this.eventBus=e,this.objectManager=t,this.eventBus.on("new-project",()=>this.newProject()),this.eventBus.on("save-project",()=>this.saveProject()),this.eventBus.on("save-project-as",()=>this.saveProjectAs()),this.eventBus.on("load-project",n=>this.loadProject(n)),this.eventBus.on("load-project-from-handle",n=>this.loadProjectFromHandle(n)),this.eventBus.on("export-stl",()=>this.exportSTL()),this.eventBus.on("save-brush-profile",({name:n,profile:i})=>{n&&i&&(this.brushProfiles[n]=i,console.log(`Brush profile "${n}" saved.`),this.eventBus.emit("brush-profiles-updated",this.brushProfiles))}),this.eventBus.on("request-brush-profiles",n=>{n&&n(this.brushProfiles)}),this.eventBus.on("save-brush-profile-current-state",({name:n,profile:i})=>{if(n&&i){const r={...i};r.bezierProfile&&(r.bezierProfile={p1:{x:r.bezierProfile.p1.x,y:r.bezierProfile.p1.y},cp1:{x:r.bezierProfile.cp1.x,y:r.bezierProfile.cp1.y},cp2:{x:r.bezierProfile.cp2.x,y:r.bezierProfile.cp2.y},p0:{x:r.bezierProfile.p0.x,y:r.bezierProfile.p0.y}}),this.brushProfiles[n]=r,console.log(`Current brush state saved as profile "${n}".`),this.eventBus.emit("brush-profiles-updated",this.brushProfiles)}}),this.eventBus.on("request-project-name",()=>{this.eventBus.emit("project-name-changed",this.currentProjectName)}),window.addEventListener("beforeunload",()=>this.saveAutoSave()),this.loadAutoSave(),console.log("ProjectManager initialized")}updateProjectName(e){this.currentProjectName=e,this.eventBus.emit("project-name-changed",e)}newProject(){confirm("Möchten Sie wirklich ein neues Projekt starten? Alle ungespeicherten Änderungen gehen verloren.")&&(this.objectManager.clearAll(),this.fileHandle=null,this.updateProjectName("Unbenanntes Projekt"),this.clearAutoSave(),this.eventBus.emit("ui-focus-clicked",null))}async saveAutoSave(){const e=this.getProjectDataAsString(),t=indexedDB.open(this.dbName,1);t.onupgradeneeded=n=>{const i=n.target.result;i.objectStoreNames.contains(this.storeName)||i.createObjectStore(this.storeName)},t.onsuccess=n=>{const o=n.target.result.transaction(this.storeName,"readwrite").objectStore(this.storeName);o.put(e,"lastProject"),o.put(this.currentProjectName,"lastProjectName")}}clearAutoSave(){const e=indexedDB.open(this.dbName,1);e.onsuccess=t=>{const r=t.target.result.transaction(this.storeName,"readwrite").objectStore(this.storeName);r.delete("lastProject"),r.delete("lastProjectName")}}loadAutoSave(){const e=indexedDB.open(this.dbName,1);e.onupgradeneeded=t=>{const n=t.target.result;n.objectStoreNames.contains(this.storeName)||n.createObjectStore(this.storeName)},e.onsuccess=t=>{const r=t.target.result.transaction(this.storeName,"readonly").objectStore(this.storeName),o=r.get("lastProjectName");o.onsuccess=()=>{o.result&&this.updateProjectName(o.result)};const a=r.get("lastProject");a.onsuccess=()=>{if(a.result)try{const c=JSON.parse(a.result);this.loadProjectData(c),console.log("AutoSave loaded.")}catch(c){console.error("Failed to parse AutoSave",c)}}}}async saveProject(){this.fileHandle?(await this.writeDataToFile(this.fileHandle),this.saveAutoSave()):await this.saveProjectAs()}async saveProjectAs(){const e=this.getProjectDataAsString();if(window.showSaveFilePicker)try{const t=await window.showSaveFilePicker({suggestedName:`${this.currentProjectName}.json`,types:[{description:"JSON-Projektdateien",accept:{"application/json":[".json"]}}]});this.fileHandle=t,this.updateProjectName(t.name.replace(".json","")),await this.writeDataToFile(this.fileHandle),this.saveAutoSave()}catch(t){if(t.name==="AbortError")return;console.error("Error saving file:",t)}else{const t=prompt("Bitte geben Sie einen Dateinamen ein:",this.currentProjectName);if(t){this.updateProjectName(t);const n=new Blob([e],{type:"application/json"}),i=URL.createObjectURL(n),r=document.createElement("a");r.href=i,r.download=`${t}.json`,document.body.appendChild(r),r.click(),document.body.removeChild(r),URL.revokeObjectURL(i),this.saveAutoSave()}}}async exportSTL(){const e=this.objectManager.getSelectedObjects();if(e.length===0){alert("Bitte wähle ein Objekt aus, das exportiert werden soll.");return}const t=e[0];let n=null,i=!1;if(t.traverse(g=>{g instanceof Oe&&g.visible&&!g.userData.isHelper&&!g.userData.isGuide&&(i=!0)}),i&&(n=t),!n){alert("Das ausgewählte Objekt enthält kein exportierbares 3D-Mesh. Hast du 'In Mesh umwandeln' oder 'Extrudieren' verwendet?");return}const r=[];n.updateMatrixWorld(!0),n.traverse(g=>{if(g instanceof Oe&&g.geometry&&g.visible&&!g.userData.isHelper){const v=g.geometry.clone();v.applyMatrix4(g.matrixWorld),r.push(v)}});let o=null;if(r.length>0)try{let g=yl(r,!1);g&&(g.deleteAttribute("normal"),g.deleteAttribute("uv"),g=Ii(g,.1),o=new Oe(g))}catch(g){console.warn("Geometry merge failed during check preparation",g)}const a=o?this.getOpenEdges(o):null;if(a){const g=t.matrixWorld.clone().invert();if(a.applyMatrix4(g),t.add(a),setTimeout(()=>{a.parent&&a.parent.remove(a)},1e4),confirm(`Warnung: Das Modell ist nicht wasserdicht! Die offenen Kanten wurden ROT markiert.

Möchtest du versuchen, die Löcher automatisch zu schließen (z.B. durch Vertex-Merge)?`)){let m=o.geometry.clone();m.attributes.normal&&m.deleteAttribute("normal"),m.attributes.uv&&m.deleteAttribute("uv"),m=Ii(m,.6),m.computeVertexNormals(),n=new Oe(m,new Ct)}else if(!confirm("Möchtest du das Modell trotzdem (defekt) exportieren?")){a.parent&&a.parent.remove(a);return}}const c=new ct;c.rotation.x=-Math.PI/2;let l;n.parent===null&&n.uuid!==t.uuid?l=n:l=n.clone(),c.add(l),l.scale.y=-1,l.traverse(g=>{if(g instanceof Oe&&g.geometry&&g.geometry.index){const v=g.geometry.index;for(let m=0;m<v.count;m+=3){const p=v.getX(m),_=v.getX(m+1);v.setX(m,_),v.setX(m+1,p)}g.geometry.index.needsUpdate=!0,g.geometry.computeVertexNormals()}}),c.updateMatrixWorld(!0);const h=new Hg,u={binary:!0},f=h.parse(c,u),d=new Blob([f],{type:"application/octet-stream"});if(window.showSaveFilePicker)try{const v=await(await window.showSaveFilePicker({suggestedName:`${t.name||"Model"}.stl`,types:[{description:"STL 3D Modell",accept:{"model/stl":[".stl"]}}]})).createWritable();await v.write(d),await v.close()}catch(g){g.name!=="AbortError"&&console.error(g)}else{const g=URL.createObjectURL(d),v=document.createElement("a");v.href=g,v.download=`${t.name||"Model"}.stl`,document.body.appendChild(v),v.click(),document.body.removeChild(v),URL.revokeObjectURL(g)}}getOpenEdges(e){if(!e.geometry)return null;let t=e.geometry.clone();if(!t.index)try{t=Ii(t)}catch(h){console.warn("Merge vertices failed during check",h)}if(!t.index)return null;const n=t.index,i={};for(let h=0;h<n.count;h+=3){const u=n.getX(h),f=n.getY(h),d=n.getZ(h),g=(v,m)=>{const p=v<m?`${v}_${m}`:`${m}_${v}`;i[p]=(i[p]||0)+1};g(u,f),g(f,d),g(d,u)}const r=t.attributes.position,o=[];for(const h in i)if(i[h]===1){const u=h.split("_"),f=parseInt(u[0]),d=parseInt(u[1]);o.push(r.getX(f),r.getY(f),r.getZ(f)),o.push(r.getX(d),r.getY(d),r.getZ(d))}if(o.length===0)return null;const a=new it;a.setAttribute("position",new et(o,3));const c=new Qt({color:16711680,linewidth:2,depthTest:!1}),l=new Di(a,c);return l.renderOrder=9999,l}getProjectDataAsString(){const t=this.objectManager.getObjects().map(r=>st.describeObject(r)).filter(r=>r!==null);let n=null;this.eventBus.emit("request-brush-state-sync",r=>{n=r});const i={version:"1.0",objects:t,brushState:n,brushProfiles:this.brushProfiles};return JSON.stringify(i,null,2)}async writeDataToFile(e){try{const t=this.getProjectDataAsString(),n=await e.createWritable();await n.write(t),await n.close(),console.log("Project saved successfully.")}catch(t){console.error("Failed to write to file:",t)}}async loadProjectFromHandle(e){if(confirm("Möchten Sie das Projekt laden? Alle ungespeicherten Änderungen gehen verloren."))try{const t=await e.getFile();this.fileHandle=e,this.updateProjectName(e.name.replace(".json","")),this.processProjectFile(t)}catch(t){console.error("Failed to load project from handle:",t)}}loadProject(e){confirm("Möchten Sie das Projekt laden? Alle ungespeicherten Änderungen gehen verloren.")&&(this.updateProjectName(e.name.replace(".json","")),this.fileHandle=null,this.processProjectFile(e))}processProjectFile(e){const t=new FileReader;t.onload=n=>{var i;try{const r=(i=n.target)==null?void 0:i.result,o=JSON.parse(r);this.loadProjectData(o)}catch(r){alert("Fehler beim Laden der Projektdatei. Ist die Datei korrekt?"),console.error(r)}},t.readAsText(e)}loadProjectData(e){if(!e.objects||e.version!=="1.0")throw new Error("Incompatible or invalid project file.");this.objectManager.clearAll(),this.brushProfiles=e.brushProfiles||{},this.eventBus.emit("brush-profiles-updated",this.brushProfiles),setTimeout(()=>{e.brushState&&this.eventBus.emit("load-brush-state",e.brushState),e.objects.forEach(t=>{const n=st.recreateShape(t);n&&this.objectManager.addObject(n,!1)}),this.objectManager.deselectAll(),this.eventBus.emit("tool-selected","select"),this.eventBus.emit("camera-change",null),this.saveAutoSave()},100)}}class Wg{constructor(e){V(this,"baseUrl");this.baseUrl=`http://${e}`}async sendGcode(e){try{return(await fetch(`${this.baseUrl}/rr_gcode?gcode=${encodeURIComponent(e)}`)).ok}catch(t){return console.error("Failed to send G-Code:",t),!1}}async getMachineStatus(){try{return await(await fetch(`${this.baseUrl}/rr_status?type=3`)).json()}catch(e){return console.error("Failed to get machine status:",e),null}}}class Xg{constructor(e){V(this,"duetClient");console.log(`Robot instance created for IP: ${e}`),this.duetClient=new Wg(e)}async calibrateZAxis(){console.log("Starting Z-Axis calibration..."),await this.duetClient.sendGcode('M98 P"0:/macros/calibrate_z.g"')}async paint(e){return console.log("Sending G-Code to the machine..."),await this.duetClient.sendGcode(e)?console.log("G-Code sent successfully."):console.error("Failed to send G-Code."),Promise.resolve()}}class jg{static zHubToServoAngle(e){const i=e/20*90;return Math.max(0,Math.min(90,i))}}class qg{static generate(){let e="";return e+=`G90 ; Absolute positioning
`,e+=`G21 ; Set units to millimeters
`,e+=`M82 ; Set extruder to absolute mode
`,e+=`
`,e+=`; --- Start Painting ---
`,e+=this.moveTo(10,10),e+=this.setBrushHeight(5),e+=this.setBrushHeight(0),e+=this.moveTo(100,10),e+=this.setBrushHeight(5),e+=`
`,e+=`; --- End Painting ---
`,e+=`G1 X0 Y0 F3000 ; Return to home
`,e}static moveTo(e,t,n=3e3){return`G1 X${e.toFixed(3)} Y${t.toFixed(3)} F${n}
`}static setBrushHeight(e){return`M280 P0 S${jg.zHubToServoAngle(e).toFixed(1)}
`}}class Yg{static async process(e,t){const n=document.createElement("canvas");n.width=e.width,n.height=e.height;const i=n.getContext("2d",{willReadFrequently:!0});if(!i)return[];i.drawImage(e,0,0);const o=i.getImageData(0,0,n.width,n.height).data,a=[],c=255/t;for(let l=0;l<t;l++){const h=l*c,u=(l+1)*c,f=document.createElement("canvas");f.width=n.width,f.height=n.height;const d=f.getContext("2d");if(!d)continue;const g=d.createImageData(n.width,n.height),v=g.data;for(let p=0;p<o.length;p+=4){const _=o[p],x=o[p+1],b=o[p+2],R=o[p+3],T=.299*_+.587*x+.114*b;R>10&&T<250&&T>=h&&T<u&&(v[p]=0,v[p+1]=0,v[p+2]=0,v[p+3]=255)}d.putImageData(g,0,0);const m=new hr(f);a.push(m)}return console.log(`Image processed into ${a.length} layers using thresholding.`),a}}class $g{constructor(e){V(this,"scene");V(this,"brushMesh",null);V(this,"wireframe",null);V(this,"group");V(this,"profile",{p1:new j(0,0),cp1:new j(10,-15),cp2:new j(15,-45),p0:new j(0,-60)});this.scene=e,this.group=new ct,this.group.name="DavinciPinsel1_Group",this.scene.add(this.group)}update(e,t,n){this.clear(),e.bezierProfile&&(this.profile=e.bezierProfile),this.createBezierLatheBrush(e,t,n)}createBezierLatheBrush(e,t,n){const i=e.color||"#cccccc",r=e.transparency!==void 0?e.transparency:1,o=Math.abs(this.profile.p0.y-this.profile.p1.y);let a=0,c=o;t&&t.y<o&&(c=Math.max(2,t.y),a=(o-c)/o);let l=new y;n&&n.length()>.001&&l.copy(n).multiplyScalar(-20),a>0||l.set(0,0,0);const u=o,f=new y(0,0,0),d=Math.sqrt(Math.max(0,Math.pow(u,2)-Math.pow(c,2)));l.length()>d&&l.setLength(d);const g=new y(l.x*.005,-u*.4,l.z*.005),v=new y(l.x*.4,-u*.8,l.z*.4),m=new y(l.x,-c,l.z),p=new Ai(f,g,v,m),_=p.getPoints(24),x=this.profile.p0.y-this.profile.p1.y,b=N=>x===0?0:(N-this.profile.p1.y)/x,R=new Do(new j(this.profile.p1.x,b(this.profile.p1.y)),new j(this.profile.cp1.x,b(this.profile.cp1.y)),new j(this.profile.cp2.x,b(this.profile.cp2.y)),new j(this.profile.p0.x,b(this.profile.p0.y))),T=16,E=[],O=[];for(let N=0;N<_.length;N++){const B=N/(_.length-1),q=R.getPoint(B),L=q.x,F=q.y,G=p.getPoint(F),Z=p.getTangent(F).normalize(),K=Math.abs(Z.y)<.9?new y(0,1,0):new y(1,0,0),J=new y().crossVectors(Z,K).normalize(),Q=new y().crossVectors(J,Z).normalize();for(let ne=0;ne<T;ne++){const ce=ne/T*Math.PI*2,X=G.clone().add(Q.clone().multiplyScalar(Math.cos(ce)*L)).add(J.clone().multiplyScalar(Math.sin(ce)*L));if(E.push(X),N<_.length-1){const ee=N+1,pe=(ne+1)%T,Se=N*T+ne,ve=ee*T+ne,De=ee*T+pe,Ie=N*T+pe;O.push(Se,ve,Ie,ve,De,Ie)}}}const M=new it().setFromPoints(E);M.setIndex(O),M.computeVertexNormals(),this.brushMesh=new Oe(M,new Kn({color:new Fe(i),transparent:r<1,opacity:r,roughness:.6,metalness:.1,side:At})),this.brushMesh.position.set(0,0,0);const w=new Qi(M);this.wireframe=new Di(w,new Qt({color:16777215,transparent:!0,opacity:.2})),this.brushMesh.add(this.wireframe),this.group.add(this.brushMesh)}clear(){for(;this.group.children.length>0;){const e=this.group.children[0];e.geometry&&e.geometry.dispose(),e.material&&(Array.isArray(e.material)?e.material.forEach(t=>t.dispose()):e.material.dispose()),this.group.remove(e)}this.brushMesh=null,this.wireframe=null}setVisible(e){this.group.visible=e}}const Ut=new zm;Ut.background=new Fe(3355443);const bl=new Xg("192.168.1.123");let ir=null;const $t=new $g(Ut);$t.setVisible(!1);let _t={type:"Rundpinsel",diameter:10,length:30,color:"#cccccc",transparency:.8,isProfileActive:!1,showMachineBrush:!1,bezierProfile:null};const On=new y(0,30,0),Pc=new y(0,30,0),Lc=new y(0,0,0),Zg=new bg(16777215,.6);Ut.add(Zg);const Ml=new yg(16777215,.8);Ml.position.set(50,100,70);Ut.add(Ml);const Fo=new Ng(1);Ut.add(Fo);const Je=new Mg,Rt=new Tg(Je,Ut),Wt=new wg(Je,"app",Ut),Kg=new Ug(Je,Wt),Vt=new Fg(Je),Sl=new nr(Je),Jg=new Vg(Je,Rt),Qg=new Og(Je,Wt,Ut),ev=new Ig(Je,Wt);Je.on("request-brush-state-sync",s=>{s(_t)});const tv=()=>({p1:new j(0,0),cp1:new j(10,-15),cp2:new j(15,-45),p0:new j(0,-60)});Je.on("load-brush-state",s=>{s&&(Object.assign(_t,s),s.bezierProfile===null?_t.bezierProfile=tv():s.bezierProfile&&(_t.bezierProfile={p1:new j(s.bezierProfile.p1.x,s.bezierProfile.p1.y),cp1:new j(s.bezierProfile.cp1.x,s.bezierProfile.cp1.y),cp2:new j(s.bezierProfile.cp2.x,s.bezierProfile.cp2.y),p0:new j(s.bezierProfile.p0.x,s.bezierProfile.p0.y)}),$t.update(_t,On),Je.emit("brush-state-changed",_t))});Je.on("brush-state-changed",s=>{Object.assign(_t,s);const e=Vt.getActiveToolId();e&&e!=="select"||!_t.showMachineBrush?$t.setVisible(!1):($t.setVisible(!0),$t.update(_t,On))});Je.on("save-brush-profile",s=>{var t;const e=s.children.filter(n=>n.userData.type==="bezier_line");if(e.length>0){const n=e[0],i=n.userData.nodes,r=n.userData.helpers;if(i&&r){const o=new j(i.start.position.x,i.start.position.y),a=new j(r.cp1.position.x,r.cp1.position.y),c=new j(r.cp2.position.x,r.cp2.position.y),l=new j(i.end.position.x,i.end.position.y);_t.bezierProfile={p1:o,cp1:a,cp2:c,p0:l},_t.color="#"+(((t=s.userData.materialParams)==null?void 0:t.color)||"cccccc").replace("#",""),_t.isProfileActive=!0,$t.update(_t,On),_t.showMachineBrush&&$t.setVisible(!0)}}});Je.on("interaction-pointer-move",s=>{const e=Vt.getActiveToolId();if(e&&e!=="select"||!_t.showMachineBrush){$t.setVisible(!1);return}if($t.setVisible(!0),s.intersection){const n=s.intersection.x,i=s.intersection.y,r=s.intersection.z;let o=30;const a=Wt.getActiveView();a==="PERSPECTIVE"||a==="TOP"?o=(s.pointer.y+1)*30:o=i,Pc.copy(On),On.set(n,o,r);const c=new y().subVectors(On,Pc);c.y=0,c.length()<.01&&c.set(0,0,0),Lc.lerp(c,.15);const l=Lc.clone();l.multiplyScalar(2),l.clampLength(0,20),$t.group.position.set(n,o,r),$t.update(_t,On,l)}});$t.update(_t,On);Je.on("cnc-generate-gcode",()=>{console.log("Generating G-Code..."),ir=qg.generate(),console.log("--- Generated G-Code ---"),console.log(ir),alert("G-Code wurde in der Konsole ausgegeben.")});Je.on("cnc-start-painting",()=>{ir?(console.log("Starting painting process..."),bl.paint(ir),alert("Malprozess wurde gestartet (siehe Konsole für Details).")):(alert("Bitte zuerst G-Code generieren!"),console.warn("Paint process aborted: No G-Code generated yet."))});Je.on("image-analysis-start",async s=>{console.log("Image analysis event triggered with layers:",s.layers);const e=Rt.getObjects().find(i=>i.name==="Background Image");if(!e){console.error("DEBUG: Could not find the original 'Background Image' to analyze."),alert("Fehler: Originales Hintergrundbild nicht gefunden!");return}console.log(`DEBUG: Found original background image: '${e.name}'. Starting analysis.`);const t=e.children.find(i=>i instanceof Oe);if(!t||!(t.material instanceof Ct)||!t.material.map){console.error("Invalid background image object for analysis.");return}const n=t.material.map.image;if(!n){console.error("No image data found in texture.");return}try{const i=await Yg.process(n,s.layers);Rt.getObjects().filter(d=>d.name.startsWith("Analyse-Schicht")).forEach(d=>Rt.removeObject(d));const o=e.userData.baseSize.width,a=e.userData.baseSize.height,c=10,l=s.columns||1,h=l*o+(l-1)*c,u=e.position.x-h/2+o/2,f=e.position.z+a/2+c+a/2;i.forEach((d,g)=>{const v=st.createBackgroundImage(d,o,a);if(v){v.name=`Analyse-Schicht ${g+1}`;const m=g%l,p=Math.floor(g/l),_=u+m*(o+c),x=f+p*(a+c);v.position.set(_,e.position.y,x),v.position.y+=(g+1)*.1;const b=v.children.find(R=>R instanceof Oe);b&&b.material instanceof Ct&&(b.material.color.set(0),b.material.transparent=!0),Rt.addObject(v)}})}catch(i){console.error("Image analysis failed:",i)}});Je.on("create-background-image",s=>{const e=st.createBackgroundImage(s.texture,s.width,s.height);e&&(e.name="Background Image",Rt.addObject(e),Wt.focusOnObject(e))});Je.on("add-mesh-to-scene",s=>{Rt.addObject(s),Vt.selectTool("select"),Rt.selectObject(s)});Je.on("modifier-changed",s=>{var n;const e=(n=s.userData.modifiers)==null?void 0:n.some(i=>i.type==="face_delete"),t=Vt.getActiveToolId()==="face_select";e&&!t?(Vt.selectTool("face_select"),console.log("Auto-switched to FaceSelectTool")):!e&&t&&(Vt.selectTool("select"),console.log("Auto-switched back to SelectTool"))});Je.on("camera-change",()=>{const s=Wt.getActiveCamera();s&&(Fo.update(s),Uo.updateScales(Ut,s))});const ao=Wt.getActiveCamera();ao&&(Fo.update(ao),Uo.updateScales(Ut,ao));Je.on("open-settings",()=>{const s=document.createElement("div");Object.assign(s.style,{position:"fixed",top:"0",left:"0",width:"100vw",height:"100vh",backgroundColor:"rgba(0, 0, 0, 0.5)",zIndex:"9999",display:"flex",justifyContent:"center",alignItems:"center"});const e=document.createElement("div");Object.assign(e.style,{background:"#222",border:"1px solid #444",borderRadius:"8px",padding:"20px",width:"300px",color:"white",fontFamily:"sans-serif"});const t=document.createElement("h3");t.innerText="Einstellungen",t.style.marginTop="0",e.appendChild(t);const n=document.createElement("div");n.style.display="flex",n.style.justifyContent="space-between",n.style.marginBottom="10px";const i=document.createElement("span");i.innerText="Hintergrundfarbe:";const r=document.createElement("input");r.type="color";let o="#333333";Ut.background&&Ut.background instanceof Fe&&(o="#"+Ut.background.getHexString()),r.value=o,r.onchange=d=>{Ut.background=new Fe(d.target.value)},n.appendChild(i),n.appendChild(r),e.appendChild(n);const a=document.createElement("div");a.style.display="flex",a.style.justifyContent="space-between",a.style.marginBottom="20px";const c=document.createElement("span");c.innerText="Gitterfarbe:";const l=document.createElement("input");l.type="color",l.value="#444444",l.onchange=d=>{Je.emit("settings-grid-color-changed",{color:d.target.value})},a.appendChild(c),a.appendChild(l),e.appendChild(a);const h=document.createElement("div");h.style.marginBottom="10px";const u=document.createElement("button");u.innerText="Debug-Konsole öffnen/schließen",Object.assign(u.style,{width:"100%",padding:"8px",background:"#333",color:"#aaa",border:"1px solid #555",borderRadius:"4px",cursor:"pointer",fontSize:"13px"}),u.onclick=()=>{Je.emit("toggle-debug-console",null),document.body.removeChild(s)},h.appendChild(u),e.appendChild(h);const f=document.createElement("button");f.innerText="Schließen",Object.assign(f.style,{width:"100%",padding:"8px",background:"#444",color:"white",border:"none",borderRadius:"4px",cursor:"pointer"}),f.onclick=()=>document.body.removeChild(s),e.appendChild(f),s.appendChild(e),document.body.appendChild(s)});const nv=new Bg(Je,Wt,Rt,$t),iv=new zg(Je,Wt,Rt),sv=new Gg(Je,Wt,Rt),rv=new kg(Je,Wt,Rt),ov=new tr(Je,Wt,Rt);Vt.registerTool(nv);Vt.registerTool(iv);Vt.registerTool(sv);Vt.registerTool(rv);Vt.registerTool(ov);Je.on("tool-selected",s=>{if(s==="brush_create"){const e=(_t.diameter||10)/2,t=_t.length||60,n=st.createBrush(e,t);n.position.set(0,t,0),Rt.addObject(n),Vt.selectTool("select"),Rt.selectObject(n),Je.emit("update-object-geometry",n)}});Vt.selectTool("select");const av=new Pg(Je,Rt,Wt,Sl,Ut);window.app={scene:Ut,eventBus:Je,objectManager:Rt,viewManager:Wt,toolManager:Vt,uiManager:av,interactionManager:Kg,gridManager:Qg,rulerManager:ev,modifierManager:Sl,projectManager:Jg,robot:bl};window.dumpScene=()=>{const s=window.app.viewManager.getActiveCamera(),e=window.app.viewManager;console.log("--- SCENE DUMP ---"),console.log("Active View:",e.getActiveView()),s&&(console.log("Camera Pos:",s.position.x,s.position.y,s.position.z),console.log("Camera Near/Far:",s.near,s.far),s.zoom&&console.log("Camera Zoom:",s.zoom));const t=window.app.gridManager;t&&t.gridFine&&(console.log("Grid Fine Pos:",t.gridFine.position.x,t.gridFine.position.y,t.gridFine.position.z),console.log("Grid Fine Rot:",t.gridFine.rotation.x,t.gridFine.rotation.y,t.gridFine.rotation.z),console.log("Grid Fine RenderOrder:",t.gridFine.renderOrder)),console.log("--- END DUMP ---")};console.log("Konstruktion app started (Modular Rebuild Fixed)");

﻿/**
 * A JavaScript implementation of the SHA family of hashes, as defined in FIPS PUB 180-4 and FIPS PUB 202, as
 * well as the corresponding HMAC implementation as defined in FIPS PUB 198a
 *
 * Copyright 2008-2020 Brian Turek, 1998-2009 Paul Johnston & Contributors
 * Distributed under the BSD License
 * See http://caligatio.github.com/jsSHA/ for more information
 *
 * Two ECMAScript polyfill functions carry the following license:
 *
 * Copyright (c) Microsoft Corporation. All rights reserved.
 * Licensed under the Apache License, Version 2.0 (the "License"); you may not use this file except in compliance with
 * the License. You may obtain a copy of the License at http://www.apache.org/licenses/LICENSE-2.0
 *
 * THIS CODE IS PROVIDED ON AN *AS IS* BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, EITHER EXPRESS OR IMPLIED,
 * INCLUDING WITHOUT LIMITATION ANY IMPLIED WARRANTIES OR CONDITIONS OF TITLE, FITNESS FOR A PARTICULAR PURPOSE,
 * MERCHANTABLITY OR NON-INFRINGEMENT.
 *
 * See the Apache Version 2.0 License for specific language governing permissions and limitations under the License.
 */
!function(t,r){"object"==typeof exports&&"undefined"!=typeof module?module.exports=r():"function"==typeof define&&define.amd?define(r):(t=t||self).jsSHA=r()}(this,(function(){"use strict";var t=function(r,n){return(t=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(t,r){t.__proto__=r}||function(t,r){for(var n in r)r.hasOwnProperty(n)&&(t[n]=r[n])})(r,n)};var r="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/";function n(t,r,n,i){var e,o,s,u=r||[0],f=(n=n||0)>>>3,h=-1===i?3:0;for(e=0;e<t.length;e+=1)o=(s=e+f)>>>2,u.length<=o&&u.push(0),u[o]|=t[e]<<8*(h+i*(s%4));return{value:u,binLen:8*t.length+n}}function i(t,i,e){switch(i){case"UTF8":case"UTF16BE":case"UTF16LE":break;default:throw new Error("encoding must be UTF8, UTF16BE, or UTF16LE")}switch(t){case"HEX":return function(t,r,n){return function(t,r,n,i){var e,o,s,u;if(0!=t.length%2)throw new Error("String of HEX type must be in byte increments");var f=r||[0],h=(n=n||0)>>>3,a=-1===i?3:0;for(e=0;e<t.length;e+=2){if(o=parseInt(t.substr(e,2),16),isNaN(o))throw new Error("String of HEX type contains invalid characters");for(s=(u=(e>>>1)+h)>>>2;f.length<=s;)f.push(0);f[s]|=o<<8*(a+i*(u%4))}return{value:f,binLen:4*t.length+n}}(t,r,n,e)};case"TEXT":return function(t,r,n){return function(t,r,n,i,e){var o,s,u,f,h,a,c,w,E=0,v=n||[0],A=(i=i||0)>>>3;if("UTF8"===r)for(c=-1===e?3:0,u=0;u<t.length;u+=1)for(s=[],128>(o=t.charCodeAt(u))?s.push(o):2048>o?(s.push(192|o>>>6),s.push(128|63&o)):55296>o||57344<=o?s.push(224|o>>>12,128|o>>>6&63,128|63&o):(u+=1,o=65536+((1023&o)<<10|1023&t.charCodeAt(u)),s.push(240|o>>>18,128|o>>>12&63,128|o>>>6&63,128|63&o)),f=0;f<s.length;f+=1){for(h=(a=E+A)>>>2;v.length<=h;)v.push(0);v[h]|=s[f]<<8*(c+e*(a%4)),E+=1}else for(c=-1===e?2:0,w="UTF16LE"===r&&1!==e||"UTF16LE"!==r&&1===e,u=0;u<t.length;u+=1){for(o=t.charCodeAt(u),!0===w&&(o=(f=255&o)<<8|o>>>8),h=(a=E+A)>>>2;v.length<=h;)v.push(0);v[h]|=o<<8*(c+e*(a%4)),E+=2}return{value:v,binLen:8*E+i}}(t,i,r,n,e)};case"B64":return function(t,n,i){return function(t,n,i,e){var o,s,u,f,h,a,c=0,w=n||[0],E=(i=i||0)>>>3,v=-1===e?3:0,A=t.indexOf("=");if(-1===t.search(/^[a-zA-Z0-9=+/]+$/))throw new Error("Invalid character in base-64 string");if(t=t.replace(/=/g,""),-1!==A&&A<t.length)throw new Error("Invalid '=' found in base-64 string");for(o=0;o<t.length;o+=4){for(f=t.substr(o,4),u=0,s=0;s<f.length;s+=1)u|=r.indexOf(f.charAt(s))<<18-6*s;for(s=0;s<f.length-1;s+=1){for(h=(a=c+E)>>>2;w.length<=h;)w.push(0);w[h]|=(u>>>16-8*s&255)<<8*(v+e*(a%4)),c+=1}}return{value:w,binLen:8*c+i}}(t,n,i,e)};case"BYTES":return function(t,r,n){return function(t,r,n,i){var e,o,s,u,f=r||[0],h=(n=n||0)>>>3,a=-1===i?3:0;for(o=0;o<t.length;o+=1)e=t.charCodeAt(o),s=(u=o+h)>>>2,f.length<=s&&f.push(0),f[s]|=e<<8*(a+i*(u%4));return{value:f,binLen:8*t.length+n}}(t,r,n,e)};case"ARRAYBUFFER":try{new ArrayBuffer(0)}catch(t){throw new Error("ARRAYBUFFER not supported by this environment")}return function(t,r,i){return function(t,r,i,e){return n(new Uint8Array(t),r,i,e)}(t,r,i,e)};case"UINT8ARRAY":try{new Uint8Array(0)}catch(t){throw new Error("UINT8ARRAY not supported by this environment")}return function(t,r,i){return n(t,r,i,e)};default:throw new Error("format must be HEX, TEXT, B64, BYTES, ARRAYBUFFER, or UINT8ARRAY")}}function e(t,n,i,e){switch(t){case"HEX":return function(t){return function(t,r,n,i){var e,o,s="",u=r/8,f=-1===n?3:0;for(e=0;e<u;e+=1)o=t[e>>>2]>>>8*(f+n*(e%4)),s+="0123456789abcdef".charAt(o>>>4&15)+"0123456789abcdef".charAt(15&o);return i.outputUpper?s.toUpperCase():s}(t,n,i,e)};case"B64":return function(t){return function(t,n,i,e){var o,s,u,f,h,a="",c=n/8,w=-1===i?3:0;for(o=0;o<c;o+=3)for(f=o+1<c?t[o+1>>>2]:0,h=o+2<c?t[o+2>>>2]:0,u=(t[o>>>2]>>>8*(w+i*(o%4))&255)<<16|(f>>>8*(w+i*((o+1)%4))&255)<<8|h>>>8*(w+i*((o+2)%4))&255,s=0;s<4;s+=1)a+=8*o+6*s<=n?r.charAt(u>>>6*(3-s)&63):e.b64Pad;return a}(t,n,i,e)};case"BYTES":return function(t){return function(t,r,n){var i,e,o="",s=r/8,u=-1===n?3:0;for(i=0;i<s;i+=1)e=t[i>>>2]>>>8*(u+n*(i%4))&255,o+=String.fromCharCode(e);return o}(t,n,i)};case"ARRAYBUFFER":try{new ArrayBuffer(0)}catch(t){throw new Error("ARRAYBUFFER not supported by this environment")}return function(t){return function(t,r,n){var i,e=r/8,o=new ArrayBuffer(e),s=new Uint8Array(o),u=-1===n?3:0;for(i=0;i<e;i+=1)s[i]=t[i>>>2]>>>8*(u+n*(i%4))&255;return o}(t,n,i)};case"UINT8ARRAY":try{new Uint8Array(0)}catch(t){throw new Error("UINT8ARRAY not supported by this environment")}return function(t){return function(t,r,n){var i,e=r/8,o=-1===n?3:0,s=new Uint8Array(e);for(i=0;i<e;i+=1)s[i]=t[i>>>2]>>>8*(o+n*(i%4))&255;return s}(t,n,i)};default:throw new Error("format must be HEX, B64, BYTES, ARRAYBUFFER, or UINT8ARRAY")}}function o(t){var r={outputUpper:!1,b64Pad:"=",shakeLen:-1},n=t||{};if(r.outputUpper=n.outputUpper||!1,n.b64Pad&&(r.b64Pad=n.b64Pad),n.shakeLen){if(n.shakeLen%8!=0)throw new Error("shakeLen must be a multiple of 8");r.shakeLen=n.shakeLen}if("boolean"!=typeof r.outputUpper)throw new Error("Invalid outputUpper formatting option");if("string"!=typeof r.b64Pad)throw new Error("Invalid b64Pad formatting option");return r}function s(t,r){return t<<r|t>>>32-r}function u(t,r,n){return t^r^n}function f(t,r,n){return t&r^t&n^r&n}function h(t,r){var n=(65535&t)+(65535&r);return(65535&(t>>>16)+(r>>>16)+(n>>>16))<<16|65535&n}function a(t,r,n,i,e){var o=(65535&t)+(65535&r)+(65535&n)+(65535&i)+(65535&e);return(65535&(t>>>16)+(r>>>16)+(n>>>16)+(i>>>16)+(e>>>16)+(o>>>16))<<16|65535&o}function c(t){return[1732584193,4023233417,2562383102,271733878,3285377520]}function w(t,r){var n,i,e,o,c,w,E,v,A=[];for(n=r[0],i=r[1],e=r[2],o=r[3],c=r[4],E=0;E<80;E+=1)A[E]=E<16?t[E]:s(A[E-3]^A[E-8]^A[E-14]^A[E-16],1),w=E<20?a(s(n,5),(v=i)&e^~v&o,c,1518500249,A[E]):E<40?a(s(n,5),u(i,e,o),c,1859775393,A[E]):E<60?a(s(n,5),f(i,e,o),c,2400959708,A[E]):a(s(n,5),u(i,e,o),c,3395469782,A[E]),c=o,o=e,e=s(i,30),i=n,n=w;return r[0]=h(n,r[0]),r[1]=h(i,r[1]),r[2]=h(e,r[2]),r[3]=h(o,r[3]),r[4]=h(c,r[4]),r}function E(t,r,n,i){for(var e,o=15+(r+65>>>9<<4),s=r+n;t.length<=o;)t.push(0);for(t[r>>>5]|=128<<24-r%32,t[o]=4294967295&s,t[o-1]=s/4294967296|0,e=0;e<t.length;e+=16)i=w(t.slice(e,e+16),i);return i}return function(r){function n(t,n,e){var o=this;if("SHA-1"!==t)throw new Error("Chosen SHA variant is not supported");return(o=r.call(this,t,n,e)||this).t=-1,o.i=i(o.o,o.s,o.t),o.u=w,o.h=function(t){return t.slice()},o.v=c,o.A=E,o.p=[1732584193,4023233417,2562383102,271733878,3285377520],o.R=512,o.U=160,o.l=!1,o}return function(r,n){function i(){this.constructor=r}t(r,n),r.prototype=null===n?Object.create(n):(i.prototype=n.prototype,new i)}(n,r),n}(function(){function t(t,r,n){var i=n||{};if(this.o=r,this.s=i.encoding||"UTF8",this.numRounds=i.numRounds||1,isNaN(this.numRounds)||this.numRounds!==parseInt(this.numRounds,10)||1>this.numRounds)throw new Error("numRounds must a integer >= 1");this.T=t,this.F=[],this.m=0,this.B=!1,this.g=0,this.H=!1,this.Y=[],this.I=[]}return t.prototype.update=function(t){var r,n=0,i=this.R>>>5,e=this.i(t,this.F,this.m),o=e.binLen,s=e.value,u=o>>>5;for(r=0;r<u;r+=i)n+this.R<=o&&(this.p=this.u(s.slice(r,r+i),this.p),n+=this.R);this.g+=n,this.F=s.slice(n>>>5),this.m=o%this.R,this.B=!0},t.prototype.getHash=function(t,r){var n,i,s=this.U;if(!0===this.H)throw new Error("Cannot call getHash after setting HMAC key");var u=o(r);if(!0===this.l){if(-1===u.shakeLen)throw new Error("shakeLen must be specified in options");s=u.shakeLen}var f=e(t,s,this.t,u);for(i=this.A(this.F.slice(),this.m,this.g,this.h(this.p),s),n=1;n<this.numRounds;n+=1)!0===this.l&&s%32!=0&&(i[i.length-1]&=16777215>>>24-s%32),i=this.A(i,s,0,this.v(this.T),s);return f(i)},t.prototype.setHMACKey=function(t,r,n){var e,o;if(!0===this.H)throw new Error("HMAC key already set");if(!0===this.B)throw new Error("Cannot set HMAC key after calling update");if(!0===this.l)throw new Error("SHAKE is not supported for HMAC");var s=i(r,(n||{}).encoding||"UTF8",this.t)(t),u=s.binLen,f=this.R>>>3,h=f/4-1;for(e=s.value,f<u/8&&(e=this.A(e,u,0,this.v(this.T),this.U));e.length<=h;)e.push(0);for(o=0;o<=h;o+=1)this.Y[o]=909522486^e[o],this.I[o]=1549556828^e[o];this.p=this.u(this.Y,this.p),this.g=this.R,this.H=!0},t.prototype.getHMAC=function(t,r){var n;if(!1===this.H)throw new Error("Cannot call getHMAC without first setting HMAC key");var i=o(r),s=e(t,this.U,this.t,i),u=this.A(this.F.slice(),this.m,this.g,this.h(this.p),this.U);return n=this.u(this.I,this.v(this.T)),s(n=this.A(u,this.U,this.R,n,this.U))},t}())}));

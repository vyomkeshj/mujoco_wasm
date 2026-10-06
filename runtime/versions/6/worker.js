var cy=Object.defineProperty;var ly=(i,e)=>()=>(i&&(e=i(i=0)),e);var hy=(i,e)=>{for(var t in e)cy(i,t,{get:e[t],enumerable:!0})};var pf={};hy(pf,{default:()=>yy});var vy,yy,mf=ly(()=>{vy=(async function(i={}){var e,t=i,n=typeof window=="object",r=typeof WorkerGlobalScope<"u",a=typeof process=="object"&&process.versions?.node&&process.type!="renderer",c=!n&&!a&&!r;if(a){let{createRequire:s}=await import("module");var l=s(import.meta.url)}var u=[],d="./this.program",p=(s,o)=>{throw o},m=import.meta.url,x="";function _(s){return t.locateFile?t.locateFile(s,x):x+s}var b,E;if(a){if(!(typeof process=="object"&&process.versions?.node&&process.type!="renderer"))throw new Error("not compiled for this environment (did you build to HTML and try to run it not on the web, or set ENVIRONMENT to something - like node - and run it someplace else - like on the web?)");var w=process.versions.node,v=w.split(".").slice(0,3);if(v=v[0]*1e4+v[1]*100+v[2].split("-")[0]*1,v<16e4)throw new Error("This emscripten-generated code requires node v16.0.0 (detected v"+w+")");var D=l("fs");m.startsWith("file:")&&(x=l("path").dirname(l("url").fileURLToPath(m))+"/"),E=o=>{o=Me(o)?new URL(o):o;var h=D.readFileSync(o);return H(Buffer.isBuffer(h)),h},b=async(o,h=!0)=>{o=Me(o)?new URL(o):o;var f=D.readFileSync(o,h?void 0:"utf8");return H(h?Buffer.isBuffer(f):typeof f=="string"),f},process.argv.length>1&&(d=process.argv[1].replace(/\\/g,"/")),u=process.argv.slice(2),p=(o,h)=>{throw process.exitCode=o,h}}else if(c){if(typeof process=="object"&&process.versions?.node&&process.type!="renderer"||typeof window=="object"||typeof WorkerGlobalScope<"u")throw new Error("not compiled for this environment (did you build to HTML and try to run it not on the web, or set ENVIRONMENT to something - like node - and run it someplace else - like on the web?)")}else if(n||r){try{x=new URL(".",m).href}catch{}if(!(typeof window=="object"||typeof WorkerGlobalScope<"u"))throw new Error("not compiled for this environment (did you build to HTML and try to run it not on the web, or set ENVIRONMENT to something - like node - and run it someplace else - like on the web?)");r&&(E=s=>{var o=new XMLHttpRequest;return o.open("GET",s,!1),o.responseType="arraybuffer",o.send(null),new Uint8Array(o.response)}),b=async s=>{if(Me(s))return new Promise((h,f)=>{var g=new XMLHttpRequest;g.open("GET",s,!0),g.responseType="arraybuffer",g.onload=()=>{if(g.status==200||g.status==0&&g.response){h(g.response);return}f(g.status)},g.onerror=f,g.send(null)});var o=await fetch(s,{credentials:"same-origin"});if(o.ok)return o.arrayBuffer();throw new Error(o.status+" : "+o.url)}}else throw new Error("environment detection error");var L=console.log.bind(console),N=console.error.bind(console),z="IDBFS is no longer included by default; build with -lidbfs.js",P="PROXYFS is no longer included by default; build with -lproxyfs.js",T="WORKERFS is no longer included by default; build with -lworkerfs.js",B="FETCHFS is no longer included by default; build with -lfetchfs.js",I="ICASEFS is no longer included by default; build with -licasefs.js",R="JSFILEFS is no longer included by default; build with -ljsfilefs.js",W="OPFS is no longer included by default; build with -lopfs.js",j="NODEFS is no longer included by default; build with -lnodefs.js";H(!c,"shell environment detected but not enabled at build time.  Add `shell` to `-sENVIRONMENT` to enable.");var J;typeof WebAssembly!="object"&&N("no native wasm support detected");var Y=!1,ce;function H(s,o){s||Ee("Assertion failed"+(o?": "+o:""))}var Me=s=>s.startsWith("file://");function ie(){var s=lh();H((s&3)==0),s==0&&(s+=4),_e[s>>2]=34821223,_e[s+4>>2]=2310721022,_e[0]=1668509029}function we(){if(!Y){var s=lh();s==0&&(s+=4);var o=_e[s>>2],h=_e[s+4>>2];(o!=34821223||h!=2310721022)&&Ee(`Stack overflow! Stack cookie has been overwritten at ${hi(s)}, expected hex dwords 0x89BACDFE and 0x2135467, but received ${hi(h)} ${hi(o)}`),_e[0]!=1668509029&&Ee("Runtime error: The application has corrupted its heap memory area (address zero)!")}}class X extends Error{}class Be extends X{}class ht extends X{constructor(o){super(o),this.excPtr=o;let h=Xd(o);this.name=h[0],this.message=h[1]}}var At=!0;function Ut(...s){!At&&typeof At<"u"||console.warn(...s)}(()=>{var s=new Int16Array(1),o=new Int8Array(s.buffer);if(s[0]=25459,o[0]!==115||o[1]!==99)throw"Runtime error: expected the system to be little-endian! (Run with -sSUPPORT_BIG_ENDIAN to bypass)"})();function Ct(s){Object.getOwnPropertyDescriptor(t,s)||Object.defineProperty(t,s,{configurable:!0,set(){Ee(`Attempt to set \`Module.${s}\` after it has already been processed.  This can happen, for example, when code is injected via '--post-js' rather than '--pre-js'`)}})}function re(s){return()=>H(!1,`call to '${s}' via reference taken before Wasm module initialization`)}function pe(s){Object.getOwnPropertyDescriptor(t,s)&&Ee(`\`Module.${s}\` was supplied but \`${s}\` not included in INCOMING_MODULE_JS_API`)}function ke(s){return s==="FS_createPath"||s==="FS_createDataFile"||s==="FS_createPreloadedFile"||s==="FS_unlink"||s==="addRunDependency"||s==="FS_createLazyFile"||s==="FS_createDevice"||s==="removeRunDependency"}function dt(s,o){typeof globalThis<"u"&&!Object.getOwnPropertyDescriptor(globalThis,s)&&Object.defineProperty(globalThis,s,{configurable:!0,get(){o()}})}function Ze(s,o){dt(s,()=>{Zn(`\`${s}\` is not longer defined by emscripten. ${o}`)})}Ze("buffer","Please use HEAP8.buffer or wasmMemory.buffer"),Ze("asm","Please use wasmExports instead");function vt(s){dt(s,()=>{var o=`\`${s}\` is a library symbol and not included by default; add it to your library.js __deps or to DEFAULT_LIBRARY_FUNCS_TO_INCLUDE on the command line`,h=s;h.startsWith("_")||(h="$"+s),o+=` (e.g. -sDEFAULT_LIBRARY_FUNCS_TO_INCLUDE='${h}')`,ke(s)&&(o+=". Alternatively, forcing filesystem support (-sFORCE_FILESYSTEM) can export this for you"),Zn(o)}),Qt(s)}function Qt(s){Object.getOwnPropertyDescriptor(t,s)||Object.defineProperty(t,s,{configurable:!0,get(){var o=`'${s}' was not exported. add it to EXPORTED_RUNTIME_METHODS (see the Emscripten FAQ)`;ke(s)&&(o+=". Alternatively, forcing filesystem support (-sFORCE_FILESYSTEM) can export this for you"),Ee(o)}})}var gt,Ot,V,je,tt,bt,Ue,Te,_e,ot,O,A,Q,le=!1;function de(){var s=V.buffer;je=new Int8Array(s),bt=new Int16Array(s),tt=new Uint8Array(s),Ue=new Uint16Array(s),Te=new Int32Array(s),_e=new Uint32Array(s),ot=new Float32Array(s),O=new Float64Array(s),A=new BigInt64Array(s),Q=new BigUint64Array(s)}H(typeof Int32Array<"u"&&typeof Float64Array<"u"&&Int32Array.prototype.subarray!=null&&Int32Array.prototype.set!=null,"JS engine does not provide full typed array support");function se(){if(t.preRun)for(typeof t.preRun=="function"&&(t.preRun=[t.preRun]);t.preRun.length;)lo(t.preRun.shift());Ct("preRun"),Ft(co)}function Ye(){H(!le),le=!0,we(),!t.noFSInit&&!M.initialized&&M.init(),gn.init(),gr.__wasm_call_ctors(),M.ignorePermissions=!1}function Ie(){if(we(),t.postRun)for(typeof t.postRun=="function"&&(t.postRun=[t.postRun]);t.postRun.length;)Nn(t.postRun.shift());Ct("postRun"),Ft(Un)}var Xe=0,Ve=null,fe={},Se=null;function Qe(s){Xe++,t.monitorRunDependencies?.(Xe),s?(H(!fe[s]),fe[s]=1,Se===null&&typeof setInterval<"u"&&(Se=setInterval(()=>{if(Y){clearInterval(Se),Se=null;return}var o=!1;for(var h in fe)o||(o=!0,N("still waiting on run dependencies:")),N(`dependency: ${h}`);o&&N("(end of list)")},1e4))):N("warning: run dependency added without ID")}function Je(s){if(Xe--,t.monitorRunDependencies?.(Xe),s?(H(fe[s]),delete fe[s]):N("warning: run dependency removed without ID"),Xe==0&&(Se!==null&&(clearInterval(Se),Se=null),Ve)){var o=Ve;Ve=null,o()}}function Ee(s){t.onAbort?.(s),s="Aborted("+s+")",N(s),Y=!0;var o=new WebAssembly.RuntimeError(s);throw Ot?.(o),o}function $e(s,o){return(...h)=>{H(le,`native function \`${s}\` called before runtime initialization`);var f=gr[s];return H(f,`exported native function \`${s}\` not found`),H(h.length<=o,`native function \`${s}\` called with ${h.length} args but expects ${o}`),f(...h)}}var G;function Pe(){return t.locateFile?_("mujoco.wasm"):new URL("mujoco.wasm",import.meta.url).href}function Ce(s){if(s==G&&J)return new Uint8Array(J);if(E)return E(s);throw"both async and sync fetching of the wasm failed"}async function Re(s){if(!J)try{var o=await b(s);return new Uint8Array(o)}catch{}return Ce(s)}async function be(s,o){try{var h=await Re(s),f=await WebAssembly.instantiate(h,o);return f}catch(g){N(`failed to asynchronously prepare wasm: ${g}`),Me(G)&&N(`warning: Loading from a file URI (${G}) is not supported in most browsers. See https://emscripten.org/docs/getting_started/FAQ.html#how-do-i-run-a-local-webserver-for-testing-why-does-my-program-stall-in-downloading-or-preparing`),Ee(g)}}async function ue(s,o,h){if(!s&&typeof WebAssembly.instantiateStreaming=="function"&&!Me(o)&&!a)try{var f=fetch(o,{credentials:"same-origin"}),g=await WebAssembly.instantiateStreaming(f,h);return g}catch(y){N(`wasm streaming compile failed: ${y}`),N("falling back to ArrayBuffer instantiation")}return be(o,h)}function He(){return{env:sf,wasi_snapshot_preview1:sf}}async function ut(){function s(S,C){return gr=S.exports,V=gr.memory,H(V,"memory not found in wasm exports"),de(),bo=gr.__indirect_function_table,H(bo,"table not found in wasm exports"),hx(gr),Je("wasm-instantiate"),gr}Qe("wasm-instantiate");var o=t;function h(S){return H(t===o,"the Module object should not be replaced during async compilation - perhaps the order of HTML elements is wrong?"),o=null,s(S.instance)}var f=He();if(t.instantiateWasm)return new Promise((S,C)=>{try{t.instantiateWasm(f,(U,$)=>{S(s(U,$))})}catch(U){N(`Module.instantiateWasm callback failed with error: ${U}`),C(U)}});G??=Pe();var g=await ue(J,G,f),y=h(g);return y}class zt{name="ExitStatus";constructor(o){this.message=`Program terminated with exit(${o})`,this.status=o}}var Ft=s=>{for(;s.length>0;)s.shift()(t)},Un=[],Nn=s=>Un.push(s),co=[],lo=s=>co.push(s);function $l(s,o="i8"){switch(o.endsWith("*")&&(o="*"),o){case"i1":return je[s];case"i8":return je[s];case"i16":return bt[s>>1];case"i32":return Te[s>>2];case"i64":return A[s>>3];case"float":return ot[s>>2];case"double":return O[s>>3];case"*":return _e[s>>2];default:Ee(`invalid type for getValue: ${o}`)}}var li=!0,hi=s=>(H(typeof s=="number"),s>>>=0,"0x"+s.toString(16).padStart(8,"0"));function Xl(s,o,h="i8"){switch(h.endsWith("*")&&(h="*"),h){case"i1":je[s]=o;break;case"i8":je[s]=o;break;case"i16":bt[s>>1]=o;break;case"i32":Te[s>>2]=o;break;case"i64":A[s>>3]=BigInt(o);break;case"float":ot[s>>2]=o;break;case"double":O[s>>3]=o;break;case"*":_e[s>>2]=o;break;default:Ee(`invalid type for setValue: ${h}`)}}var ge=s=>Kd(s),me=()=>ef(),Zn=s=>{Zn.shown||={},Zn.shown[s]||(Zn.shown[s]=1,a&&(s="warning: "+s),N(s))},ur=typeof TextDecoder<"u"?new TextDecoder:void 0,Ci=(s,o=0,h=NaN)=>{for(var f=o+h,g=o;s[g]&&!(g>=f);)++g;if(g-o>16&&s.buffer&&ur)return ur.decode(s.subarray(o,g));for(var y="";o<g;){var S=s[o++];if(!(S&128)){y+=String.fromCharCode(S);continue}var C=s[o++]&63;if((S&224)==192){y+=String.fromCharCode((S&31)<<6|C);continue}var U=s[o++]&63;if((S&240)==224?S=(S&15)<<12|C<<6|U:((S&248)!=240&&Zn("Invalid UTF-8 leading byte "+hi(S)+" encountered when deserializing a UTF-8 string in wasm memory to a JS string!"),S=(S&7)<<18|C<<12|U<<6|s[o++]&63),S<65536)y+=String.fromCharCode(S);else{var $=S-65536;y+=String.fromCharCode(55296|$>>10,56320|$&1023)}}return y},Wn=(s,o)=>(H(typeof s=="number",`UTF8ToString expects a number (got ${typeof s})`),s?Ci(tt,s,o):""),jl=(s,o,h,f)=>Ee(`Assertion failed: ${Wn(s)}, at: `+[o?Wn(o):"unknown filename",h,f?Wn(f):"unknown function"]),Jn=[],Xr=0,ql=s=>{var o=new q(s);return o.get_caught()||(o.set_caught(!0),Xr--),o.set_rethrown(!1),Jn.push(o),Ao(s),rf(s)},Yl=()=>{if(!Jn.length)return 0;var s=Jn[Jn.length-1];return Ao(s.excPtr),s.excPtr},Kn=0,F=()=>{ve(0,0),H(Jn.length>0);var s=Jn.pop();hh(s.excPtr),Kn=0};class q{constructor(o){this.excPtr=o,this.ptr=o-24}set_type(o){_e[this.ptr+4>>2]=o}get_type(){return _e[this.ptr+4>>2]}set_destructor(o){_e[this.ptr+8>>2]=o}get_destructor(){return _e[this.ptr+8>>2]}set_caught(o){o=o?1:0,je[this.ptr+12]=o}get_caught(){return je[this.ptr+12]!=0}set_rethrown(o){o=o?1:0,je[this.ptr+13]=o}get_rethrown(){return je[this.ptr+13]!=0}init(o,h){this.set_adjusted_ptr(0),this.set_type(o),this.set_destructor(h)}set_adjusted_ptr(o){_e[this.ptr+16>>2]=o}get_adjusted_ptr(){return _e[this.ptr+16>>2]}}var te=s=>Zd(s),ne=s=>{var o=Kn?.excPtr;if(!o)return te(0),0;var h=new q(o);h.set_adjusted_ptr(o);var f=h.get_type();if(!f)return te(0),o;for(var g of s){if(g===0||g===f)break;var y=h.ptr+16;if(nf(g,f,y))return te(g),o}return te(f),o},Z=()=>ne([]),Ae=s=>ne([s]),Le=(s,o)=>ne([s,o]),ze=()=>{var s=Jn.pop();s||Ee("no exception to throw");var o=s.excPtr;throw s.get_rethrown()||(Jn.push(s),s.set_rethrown(!0),s.set_caught(!1),Xr++),Kn=new ht(o),Kn},Ne=s=>{if(s){var o=new q(s);Jn.push(o),o.set_rethrown(!0),ze()}},nt=(s,o,h)=>{var f=new q(s);throw f.init(o,h),Kn=new ht(s),Xr++,Kn},rt=()=>Xr,Ke=s=>{throw Kn||(Kn=new ht(s)),Kn},Oe={isAbs:s=>s.charAt(0)==="/",splitPath:s=>{var o=/^(\/?|)([\s\S]*?)((?:\.{1,2}|[^\/]+?|)(\.[^.\/]*|))(?:[\/]*)$/;return o.exec(s).slice(1)},normalizeArray:(s,o)=>{for(var h=0,f=s.length-1;f>=0;f--){var g=s[f];g==="."?s.splice(f,1):g===".."?(s.splice(f,1),h++):h&&(s.splice(f,1),h--)}if(o)for(;h;h--)s.unshift("..");return s},normalize:s=>{var o=Oe.isAbs(s),h=s.slice(-1)==="/";return s=Oe.normalizeArray(s.split("/").filter(f=>!!f),!o).join("/"),!s&&!o&&(s="."),s&&h&&(s+="/"),(o?"/":"")+s},dirname:s=>{var o=Oe.splitPath(s),h=o[0],f=o[1];return!h&&!f?".":(f&&(f=f.slice(0,-1)),h+f)},basename:s=>s&&s.match(/([^\/]+|\/)\/*$/)[1],join:(...s)=>Oe.normalize(s.join("/")),join2:(s,o)=>Oe.normalize(s+"/"+o)},Lt=()=>{if(a){var s=l("crypto");return o=>s.randomFillSync(o)}return o=>crypto.getRandomValues(o)},Wt=s=>{(Wt=Lt())(s)},Nt={resolve:(...s)=>{for(var o="",h=!1,f=s.length-1;f>=-1&&!h;f--){var g=f>=0?s[f]:M.cwd();if(typeof g!="string")throw new TypeError("Arguments to path.resolve must be strings");if(!g)return"";o=g+"/"+o,h=Oe.isAbs(g)}return o=Oe.normalizeArray(o.split("/").filter(y=>!!y),!h).join("/"),(h?"/":"")+o||"."},relative:(s,o)=>{s=Nt.resolve(s).slice(1),o=Nt.resolve(o).slice(1);function h($){for(var K=0;K<$.length&&$[K]==="";K++);for(var ae=$.length-1;ae>=0&&$[ae]==="";ae--);return K>ae?[]:$.slice(K,ae-K+1)}for(var f=h(s.split("/")),g=h(o.split("/")),y=Math.min(f.length,g.length),S=y,C=0;C<y;C++)if(f[C]!==g[C]){S=C;break}for(var U=[],C=S;C<f.length;C++)U.push("..");return U=U.concat(g.slice(S)),U.join("/")}},Dt=[],qe=s=>{for(var o=0,h=0;h<s.length;++h){var f=s.charCodeAt(h);f<=127?o++:f<=2047?o+=2:f>=55296&&f<=57343?(o+=4,++h):o+=3}return o},Ht=(s,o,h,f)=>{if(H(typeof s=="string",`stringToUTF8Array expects a string (got ${typeof s})`),!(f>0))return 0;for(var g=h,y=h+f-1,S=0;S<s.length;++S){var C=s.codePointAt(S);if(C<=127){if(h>=y)break;o[h++]=C}else if(C<=2047){if(h+1>=y)break;o[h++]=192|C>>6,o[h++]=128|C&63}else if(C<=65535){if(h+2>=y)break;o[h++]=224|C>>12,o[h++]=128|C>>6&63,o[h++]=128|C&63}else{if(h+3>=y)break;C>1114111&&Zn("Invalid Unicode code point "+hi(C)+" encountered when serializing a JS string to a UTF-8 string in wasm memory! (Valid unicode code points should be in range 0-0x10FFFF)."),o[h++]=240|C>>18,o[h++]=128|C>>12&63,o[h++]=128|C>>6&63,o[h++]=128|C&63,S++}}return o[h]=0,h-g},wt=(s,o,h)=>{var f=h>0?h:qe(s)+1,g=new Array(f),y=Ht(s,g,0,g.length);return o&&(g.length=y),g},Sn=()=>{if(!Dt.length){var s=null;if(a){var o=256,h=Buffer.alloc(o),f=0,g=process.stdin.fd;try{f=D.readSync(g,h,0,o)}catch(y){if(y.toString().includes("EOF"))f=0;else throw y}f>0&&(s=h.slice(0,f).toString("utf-8"))}else typeof window<"u"&&typeof window.prompt=="function"&&(s=window.prompt("Input: "),s!==null&&(s+=`
`));if(!s)return null;Dt=wt(s,!0)}return Dt.shift()},gn={ttys:[],init(){},shutdown(){},register(s,o){gn.ttys[s]={input:[],output:[],ops:o},M.registerDevice(s,gn.stream_ops)},stream_ops:{open(s){var o=gn.ttys[s.node.rdev];if(!o)throw new M.ErrnoError(43);s.tty=o,s.seekable=!1},close(s){s.tty.ops.fsync(s.tty)},fsync(s){s.tty.ops.fsync(s.tty)},read(s,o,h,f,g){if(!s.tty||!s.tty.ops.get_char)throw new M.ErrnoError(60);for(var y=0,S=0;S<f;S++){var C;try{C=s.tty.ops.get_char(s.tty)}catch{throw new M.ErrnoError(29)}if(C===void 0&&y===0)throw new M.ErrnoError(6);if(C==null)break;y++,o[h+S]=C}return y&&(s.node.atime=Date.now()),y},write(s,o,h,f,g){if(!s.tty||!s.tty.ops.put_char)throw new M.ErrnoError(60);try{for(var y=0;y<f;y++)s.tty.ops.put_char(s.tty,o[h+y])}catch{throw new M.ErrnoError(29)}return f&&(s.node.mtime=s.node.ctime=Date.now()),y}},default_tty_ops:{get_char(s){return Sn()},put_char(s,o){o===null||o===10?(L(Ci(s.output)),s.output=[]):o!=0&&s.output.push(o)},fsync(s){s.output?.length>0&&(L(Ci(s.output)),s.output=[])},ioctl_tcgets(s){return{c_iflag:25856,c_oflag:5,c_cflag:191,c_lflag:35387,c_cc:[3,28,127,21,4,0,1,0,17,19,26,0,18,15,23,22,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0]}},ioctl_tcsets(s,o,h){return 0},ioctl_tiocgwinsz(s){return[24,80]}},default_tty1_ops:{put_char(s,o){o===null||o===10?(N(Ci(s.output)),s.output=[]):o!=0&&s.output.push(o)},fsync(s){s.output?.length>0&&(N(Ci(s.output)),s.output=[])}}},xn=s=>{Ee("internal error: mmapAlloc called but `emscripten_builtin_memalign` native symbol not exported")},ct={ops_table:null,mount(s){return ct.createNode(null,"/",16895,0)},createNode(s,o,h,f){if(M.isBlkdev(h)||M.isFIFO(h))throw new M.ErrnoError(63);ct.ops_table||={dir:{node:{getattr:ct.node_ops.getattr,setattr:ct.node_ops.setattr,lookup:ct.node_ops.lookup,mknod:ct.node_ops.mknod,rename:ct.node_ops.rename,unlink:ct.node_ops.unlink,rmdir:ct.node_ops.rmdir,readdir:ct.node_ops.readdir,symlink:ct.node_ops.symlink},stream:{llseek:ct.stream_ops.llseek}},file:{node:{getattr:ct.node_ops.getattr,setattr:ct.node_ops.setattr},stream:{llseek:ct.stream_ops.llseek,read:ct.stream_ops.read,write:ct.stream_ops.write,mmap:ct.stream_ops.mmap,msync:ct.stream_ops.msync}},link:{node:{getattr:ct.node_ops.getattr,setattr:ct.node_ops.setattr,readlink:ct.node_ops.readlink},stream:{}},chrdev:{node:{getattr:ct.node_ops.getattr,setattr:ct.node_ops.setattr},stream:M.chrdev_stream_ops}};var g=M.createNode(s,o,h,f);return M.isDir(g.mode)?(g.node_ops=ct.ops_table.dir.node,g.stream_ops=ct.ops_table.dir.stream,g.contents={}):M.isFile(g.mode)?(g.node_ops=ct.ops_table.file.node,g.stream_ops=ct.ops_table.file.stream,g.usedBytes=0,g.contents=null):M.isLink(g.mode)?(g.node_ops=ct.ops_table.link.node,g.stream_ops=ct.ops_table.link.stream):M.isChrdev(g.mode)&&(g.node_ops=ct.ops_table.chrdev.node,g.stream_ops=ct.ops_table.chrdev.stream),g.atime=g.mtime=g.ctime=Date.now(),s&&(s.contents[o]=g,s.atime=s.mtime=s.ctime=g.atime),g},getFileDataAsTypedArray(s){return s.contents?s.contents.subarray?s.contents.subarray(0,s.usedBytes):new Uint8Array(s.contents):new Uint8Array(0)},expandFileStorage(s,o){var h=s.contents?s.contents.length:0;if(!(h>=o)){var f=1024*1024;o=Math.max(o,h*(h<f?2:1.125)>>>0),h!=0&&(o=Math.max(o,256));var g=s.contents;s.contents=new Uint8Array(o),s.usedBytes>0&&s.contents.set(g.subarray(0,s.usedBytes),0)}},resizeFileStorage(s,o){if(s.usedBytes!=o)if(o==0)s.contents=null,s.usedBytes=0;else{var h=s.contents;s.contents=new Uint8Array(o),h&&s.contents.set(h.subarray(0,Math.min(o,s.usedBytes))),s.usedBytes=o}},node_ops:{getattr(s){var o={};return o.dev=M.isChrdev(s.mode)?s.id:1,o.ino=s.id,o.mode=s.mode,o.nlink=1,o.uid=0,o.gid=0,o.rdev=s.rdev,M.isDir(s.mode)?o.size=4096:M.isFile(s.mode)?o.size=s.usedBytes:M.isLink(s.mode)?o.size=s.link.length:o.size=0,o.atime=new Date(s.atime),o.mtime=new Date(s.mtime),o.ctime=new Date(s.ctime),o.blksize=4096,o.blocks=Math.ceil(o.size/o.blksize),o},setattr(s,o){for(let h of["mode","atime","mtime","ctime"])o[h]!=null&&(s[h]=o[h]);o.size!==void 0&&ct.resizeFileStorage(s,o.size)},lookup(s,o){throw new M.ErrnoError(44)},mknod(s,o,h,f){return ct.createNode(s,o,h,f)},rename(s,o,h){var f;try{f=M.lookupNode(o,h)}catch{}if(f){if(M.isDir(s.mode))for(var g in f.contents)throw new M.ErrnoError(55);M.hashRemoveNode(f)}delete s.parent.contents[s.name],o.contents[h]=s,s.name=h,o.ctime=o.mtime=s.parent.ctime=s.parent.mtime=Date.now()},unlink(s,o){delete s.contents[o],s.ctime=s.mtime=Date.now()},rmdir(s,o){var h=M.lookupNode(s,o);for(var f in h.contents)throw new M.ErrnoError(55);delete s.contents[o],s.ctime=s.mtime=Date.now()},readdir(s){return[".","..",...Object.keys(s.contents)]},symlink(s,o,h){var f=ct.createNode(s,o,41471,0);return f.link=h,f},readlink(s){if(!M.isLink(s.mode))throw new M.ErrnoError(28);return s.link}},stream_ops:{read(s,o,h,f,g){var y=s.node.contents;if(g>=s.node.usedBytes)return 0;var S=Math.min(s.node.usedBytes-g,f);if(H(S>=0),S>8&&y.subarray)o.set(y.subarray(g,g+S),h);else for(var C=0;C<S;C++)o[h+C]=y[g+C];return S},write(s,o,h,f,g,y){if(H(!(o instanceof ArrayBuffer)),o.buffer===je.buffer&&(y=!1),!f)return 0;var S=s.node;if(S.mtime=S.ctime=Date.now(),o.subarray&&(!S.contents||S.contents.subarray)){if(y)return H(g===0,"canOwn must imply no weird position inside the file"),S.contents=o.subarray(h,h+f),S.usedBytes=f,f;if(S.usedBytes===0&&g===0)return S.contents=o.slice(h,h+f),S.usedBytes=f,f;if(g+f<=S.usedBytes)return S.contents.set(o.subarray(h,h+f),g),f}if(ct.expandFileStorage(S,g+f),S.contents.subarray&&o.subarray)S.contents.set(o.subarray(h,h+f),g);else for(var C=0;C<f;C++)S.contents[g+C]=o[h+C];return S.usedBytes=Math.max(S.usedBytes,g+f),f},llseek(s,o,h){var f=o;if(h===1?f+=s.position:h===2&&M.isFile(s.node.mode)&&(f+=s.node.usedBytes),f<0)throw new M.ErrnoError(28);return f},mmap(s,o,h,f,g){if(!M.isFile(s.node.mode))throw new M.ErrnoError(43);var y,S,C=s.node.contents;if(!(g&2)&&C&&C.buffer===je.buffer)S=!1,y=C.byteOffset;else{if(S=!0,y=xn(o),!y)throw new M.ErrnoError(48);C&&((h>0||h+o<C.length)&&(C.subarray?C=C.subarray(h,h+o):C=Array.prototype.slice.call(C,h,h+o)),je.set(C,y))}return{ptr:y,allocated:S}},msync(s,o,h,f,g){return ct.stream_ops.write(s,o,0,f,h,!1),0}}},$t=async s=>{var o=await b(s);return H(o,`Loading data file "${s}" failed (no arrayBuffer).`),new Uint8Array(o)},ln=(...s)=>M.createDataFile(...s),Rn=s=>{for(var o=s;;){if(!fe[s])return s;s=o+Math.random()}},on=[],_n=(s,o,h,f)=>{typeof Browser<"u"&&Browser.init();var g=!1;return on.forEach(y=>{g||y.canHandle(o)&&(y.handle(s,o,h,f),g=!0)}),g},jr=(s,o,h,f,g,y,S,C,U,$)=>{var K=o?Nt.resolve(Oe.join2(s,o)):s,ae=Rn(`cp ${K}`);function he(oe){function xe(et){$?.(),C||ln(s,o,et,f,g,U),y?.(),Je(ae)}_n(oe,K,xe,()=>{S?.(),Je(ae)})||xe(oe)}Qe(ae),typeof h=="string"?$t(h).then(he,S):he(h)},Ri=s=>{var o={r:0,"r+":2,w:577,"w+":578,a:1089,"a+":1090},h=o[s];if(typeof h>"u")throw new Error(`Unknown file open mode: ${s}`);return h},Zl=(s,o)=>{var h=0;return s&&(h|=365),o&&(h|=146),h},Xm=s=>Wn(Yd(s)),vd={EPERM:63,ENOENT:44,ESRCH:71,EINTR:27,EIO:29,ENXIO:60,E2BIG:1,ENOEXEC:45,EBADF:8,ECHILD:12,EAGAIN:6,EWOULDBLOCK:6,ENOMEM:48,EACCES:2,EFAULT:21,ENOTBLK:105,EBUSY:10,EEXIST:20,EXDEV:75,ENODEV:43,ENOTDIR:54,EISDIR:31,EINVAL:28,ENFILE:41,EMFILE:33,ENOTTY:59,ETXTBSY:74,EFBIG:22,ENOSPC:51,ESPIPE:70,EROFS:69,EMLINK:34,EPIPE:64,EDOM:18,ERANGE:68,ENOMSG:49,EIDRM:24,ECHRNG:106,EL2NSYNC:156,EL3HLT:107,EL3RST:108,ELNRNG:109,EUNATCH:110,ENOCSI:111,EL2HLT:112,EDEADLK:16,ENOLCK:46,EBADE:113,EBADR:114,EXFULL:115,ENOANO:104,EBADRQC:103,EBADSLT:102,EDEADLOCK:16,EBFONT:101,ENOSTR:100,ENODATA:116,ETIME:117,ENOSR:118,ENONET:119,ENOPKG:120,EREMOTE:121,ENOLINK:47,EADV:122,ESRMNT:123,ECOMM:124,EPROTO:65,EMULTIHOP:36,EDOTDOT:125,EBADMSG:9,ENOTUNIQ:126,EBADFD:127,EREMCHG:128,ELIBACC:129,ELIBBAD:130,ELIBSCN:131,ELIBMAX:132,ELIBEXEC:133,ENOSYS:52,ENOTEMPTY:55,ENAMETOOLONG:37,ELOOP:32,EOPNOTSUPP:138,EPFNOSUPPORT:139,ECONNRESET:15,ENOBUFS:42,EAFNOSUPPORT:5,EPROTOTYPE:67,ENOTSOCK:57,ENOPROTOOPT:50,ESHUTDOWN:140,ECONNREFUSED:14,EADDRINUSE:3,ECONNABORTED:13,ENETUNREACH:40,ENETDOWN:38,ETIMEDOUT:73,EHOSTDOWN:142,EHOSTUNREACH:23,EINPROGRESS:26,EALREADY:7,EDESTADDRREQ:17,EMSGSIZE:35,EPROTONOSUPPORT:66,ESOCKTNOSUPPORT:137,EADDRNOTAVAIL:4,ENETRESET:39,EISCONN:30,ENOTCONN:53,ETOOMANYREFS:141,EUSERS:136,EDQUOT:19,ESTALE:72,ENOTSUP:138,ENOMEDIUM:148,EILSEQ:25,EOVERFLOW:61,ECANCELED:11,ENOTRECOVERABLE:56,EOWNERDEAD:62,ESTRPIPE:135},M={root:null,mounts:[],devices:{},streams:[],nextInode:1,nameTable:null,currentPath:"/",initialized:!1,ignorePermissions:!0,filesystems:null,syncFSRequests:0,readFiles:{},ErrnoError:class extends Error{name="ErrnoError";constructor(s){super(le?Xm(s):""),this.errno=s;for(var o in vd)if(vd[o]===s){this.code=o;break}}},FSStream:class{shared={};get object(){return this.node}set object(s){this.node=s}get isRead(){return(this.flags&2097155)!==1}get isWrite(){return(this.flags&2097155)!==0}get isAppend(){return this.flags&1024}get flags(){return this.shared.flags}set flags(s){this.shared.flags=s}get position(){return this.shared.position}set position(s){this.shared.position=s}},FSNode:class{node_ops={};stream_ops={};readMode=365;writeMode=146;mounted=null;constructor(s,o,h,f){s||(s=this),this.parent=s,this.mount=s.mount,this.id=M.nextInode++,this.name=o,this.mode=h,this.rdev=f,this.atime=this.mtime=this.ctime=Date.now()}get read(){return(this.mode&this.readMode)===this.readMode}set read(s){s?this.mode|=this.readMode:this.mode&=~this.readMode}get write(){return(this.mode&this.writeMode)===this.writeMode}set write(s){s?this.mode|=this.writeMode:this.mode&=~this.writeMode}get isFolder(){return M.isDir(this.mode)}get isDevice(){return M.isChrdev(this.mode)}},lookupPath(s,o={}){if(!s)throw new M.ErrnoError(44);o.follow_mount??=!0,Oe.isAbs(s)||(s=M.cwd()+"/"+s);e:for(var h=0;h<40;h++){for(var f=s.split("/").filter($=>!!$),g=M.root,y="/",S=0;S<f.length;S++){var C=S===f.length-1;if(C&&o.parent)break;if(f[S]!=="."){if(f[S]===".."){if(y=Oe.dirname(y),M.isRoot(g)){s=y+"/"+f.slice(S+1).join("/");continue e}else g=g.parent;continue}y=Oe.join2(y,f[S]);try{g=M.lookupNode(g,f[S])}catch($){if($?.errno===44&&C&&o.noent_okay)return{path:y};throw $}if(M.isMountpoint(g)&&(!C||o.follow_mount)&&(g=g.mounted.root),M.isLink(g.mode)&&(!C||o.follow)){if(!g.node_ops.readlink)throw new M.ErrnoError(52);var U=g.node_ops.readlink(g);Oe.isAbs(U)||(U=Oe.dirname(y)+"/"+U),s=U+"/"+f.slice(S+1).join("/");continue e}}}return{path:y,node:g}}throw new M.ErrnoError(32)},getPath(s){for(var o;;){if(M.isRoot(s)){var h=s.mount.mountpoint;return o?h[h.length-1]!=="/"?`${h}/${o}`:h+o:h}o=o?`${s.name}/${o}`:s.name,s=s.parent}},hashName(s,o){for(var h=0,f=0;f<o.length;f++)h=(h<<5)-h+o.charCodeAt(f)|0;return(s+h>>>0)%M.nameTable.length},hashAddNode(s){var o=M.hashName(s.parent.id,s.name);s.name_next=M.nameTable[o],M.nameTable[o]=s},hashRemoveNode(s){var o=M.hashName(s.parent.id,s.name);if(M.nameTable[o]===s)M.nameTable[o]=s.name_next;else for(var h=M.nameTable[o];h;){if(h.name_next===s){h.name_next=s.name_next;break}h=h.name_next}},lookupNode(s,o){var h=M.mayLookup(s);if(h)throw new M.ErrnoError(h);for(var f=M.hashName(s.id,o),g=M.nameTable[f];g;g=g.name_next){var y=g.name;if(g.parent.id===s.id&&y===o)return g}return M.lookup(s,o)},createNode(s,o,h,f){H(typeof s=="object");var g=new M.FSNode(s,o,h,f);return M.hashAddNode(g),g},destroyNode(s){M.hashRemoveNode(s)},isRoot(s){return s===s.parent},isMountpoint(s){return!!s.mounted},isFile(s){return(s&61440)===32768},isDir(s){return(s&61440)===16384},isLink(s){return(s&61440)===40960},isChrdev(s){return(s&61440)===8192},isBlkdev(s){return(s&61440)===24576},isFIFO(s){return(s&61440)===4096},isSocket(s){return(s&49152)===49152},flagsToPermissionString(s){var o=["r","w","rw"][s&3];return s&512&&(o+="w"),o},nodePermissions(s,o){return M.ignorePermissions?0:o.includes("r")&&!(s.mode&292)||o.includes("w")&&!(s.mode&146)||o.includes("x")&&!(s.mode&73)?2:0},mayLookup(s){if(!M.isDir(s.mode))return 54;var o=M.nodePermissions(s,"x");return o||(s.node_ops.lookup?0:2)},mayCreate(s,o){if(!M.isDir(s.mode))return 54;try{var h=M.lookupNode(s,o);return 20}catch{}return M.nodePermissions(s,"wx")},mayDelete(s,o,h){var f;try{f=M.lookupNode(s,o)}catch(y){return y.errno}var g=M.nodePermissions(s,"wx");if(g)return g;if(h){if(!M.isDir(f.mode))return 54;if(M.isRoot(f)||M.getPath(f)===M.cwd())return 10}else if(M.isDir(f.mode))return 31;return 0},mayOpen(s,o){return s?M.isLink(s.mode)?32:M.isDir(s.mode)&&(M.flagsToPermissionString(o)!=="r"||o&576)?31:M.nodePermissions(s,M.flagsToPermissionString(o)):44},checkOpExists(s,o){if(!s)throw new M.ErrnoError(o);return s},MAX_OPEN_FDS:4096,nextfd(){for(var s=0;s<=M.MAX_OPEN_FDS;s++)if(!M.streams[s])return s;throw new M.ErrnoError(33)},getStreamChecked(s){var o=M.getStream(s);if(!o)throw new M.ErrnoError(8);return o},getStream:s=>M.streams[s],createStream(s,o=-1){return H(o>=-1),s=Object.assign(new M.FSStream,s),o==-1&&(o=M.nextfd()),s.fd=o,M.streams[o]=s,s},closeStream(s){M.streams[s]=null},dupStream(s,o=-1){var h=M.createStream(s,o);return h.stream_ops?.dup?.(h),h},doSetAttr(s,o,h){var f=s?.stream_ops.setattr,g=f?s:o;f??=o.node_ops.setattr,M.checkOpExists(f,63),f(g,h)},chrdev_stream_ops:{open(s){var o=M.getDevice(s.node.rdev);s.stream_ops=o.stream_ops,s.stream_ops.open?.(s)},llseek(){throw new M.ErrnoError(70)}},major:s=>s>>8,minor:s=>s&255,makedev:(s,o)=>s<<8|o,registerDevice(s,o){M.devices[s]={stream_ops:o}},getDevice:s=>M.devices[s],getMounts(s){for(var o=[],h=[s];h.length;){var f=h.pop();o.push(f),h.push(...f.mounts)}return o},syncfs(s,o){typeof s=="function"&&(o=s,s=!1),M.syncFSRequests++,M.syncFSRequests>1&&N(`warning: ${M.syncFSRequests} FS.syncfs operations in flight at once, probably just doing extra work`);var h=M.getMounts(M.root.mount),f=0;function g(S){return H(M.syncFSRequests>0),M.syncFSRequests--,o(S)}function y(S){if(S)return y.errored?void 0:(y.errored=!0,g(S));++f>=h.length&&g(null)}h.forEach(S=>{if(!S.type.syncfs)return y(null);S.type.syncfs(S,s,y)})},mount(s,o,h){if(typeof s=="string")throw s;var f=h==="/",g=!h,y;if(f&&M.root)throw new M.ErrnoError(10);if(!f&&!g){var S=M.lookupPath(h,{follow_mount:!1});if(h=S.path,y=S.node,M.isMountpoint(y))throw new M.ErrnoError(10);if(!M.isDir(y.mode))throw new M.ErrnoError(54)}var C={type:s,opts:o,mountpoint:h,mounts:[]},U=s.mount(C);return U.mount=C,C.root=U,f?M.root=U:y&&(y.mounted=C,y.mount&&y.mount.mounts.push(C)),U},unmount(s){var o=M.lookupPath(s,{follow_mount:!1});if(!M.isMountpoint(o.node))throw new M.ErrnoError(28);var h=o.node,f=h.mounted,g=M.getMounts(f);Object.keys(M.nameTable).forEach(S=>{for(var C=M.nameTable[S];C;){var U=C.name_next;g.includes(C.mount)&&M.destroyNode(C),C=U}}),h.mounted=null;var y=h.mount.mounts.indexOf(f);H(y!==-1),h.mount.mounts.splice(y,1)},lookup(s,o){return s.node_ops.lookup(s,o)},mknod(s,o,h){var f=M.lookupPath(s,{parent:!0}),g=f.node,y=Oe.basename(s);if(!y)throw new M.ErrnoError(28);if(y==="."||y==="..")throw new M.ErrnoError(20);var S=M.mayCreate(g,y);if(S)throw new M.ErrnoError(S);if(!g.node_ops.mknod)throw new M.ErrnoError(63);return g.node_ops.mknod(g,y,o,h)},statfs(s){return M.statfsNode(M.lookupPath(s,{follow:!0}).node)},statfsStream(s){return M.statfsNode(s.node)},statfsNode(s){var o={bsize:4096,frsize:4096,blocks:1e6,bfree:5e5,bavail:5e5,files:M.nextInode,ffree:M.nextInode-1,fsid:42,flags:2,namelen:255};return s.node_ops.statfs&&Object.assign(o,s.node_ops.statfs(s.mount.opts.root)),o},create(s,o=438){return o&=4095,o|=32768,M.mknod(s,o,0)},mkdir(s,o=511){return o&=1023,o|=16384,M.mknod(s,o,0)},mkdirTree(s,o){var h=s.split("/"),f="";for(var g of h)if(g){(f||Oe.isAbs(s))&&(f+="/"),f+=g;try{M.mkdir(f,o)}catch(y){if(y.errno!=20)throw y}}},mkdev(s,o,h){return typeof h>"u"&&(h=o,o=438),o|=8192,M.mknod(s,o,h)},symlink(s,o){if(!Nt.resolve(s))throw new M.ErrnoError(44);var h=M.lookupPath(o,{parent:!0}),f=h.node;if(!f)throw new M.ErrnoError(44);var g=Oe.basename(o),y=M.mayCreate(f,g);if(y)throw new M.ErrnoError(y);if(!f.node_ops.symlink)throw new M.ErrnoError(63);return f.node_ops.symlink(f,g,s)},rename(s,o){var h=Oe.dirname(s),f=Oe.dirname(o),g=Oe.basename(s),y=Oe.basename(o),S,C,U;if(S=M.lookupPath(s,{parent:!0}),C=S.node,S=M.lookupPath(o,{parent:!0}),U=S.node,!C||!U)throw new M.ErrnoError(44);if(C.mount!==U.mount)throw new M.ErrnoError(75);var $=M.lookupNode(C,g),K=Nt.relative(s,f);if(K.charAt(0)!==".")throw new M.ErrnoError(28);if(K=Nt.relative(o,h),K.charAt(0)!==".")throw new M.ErrnoError(55);var ae;try{ae=M.lookupNode(U,y)}catch{}if($!==ae){var he=M.isDir($.mode),oe=M.mayDelete(C,g,he);if(oe)throw new M.ErrnoError(oe);if(oe=ae?M.mayDelete(U,y,he):M.mayCreate(U,y),oe)throw new M.ErrnoError(oe);if(!C.node_ops.rename)throw new M.ErrnoError(63);if(M.isMountpoint($)||ae&&M.isMountpoint(ae))throw new M.ErrnoError(10);if(U!==C&&(oe=M.nodePermissions(C,"w"),oe))throw new M.ErrnoError(oe);M.hashRemoveNode($);try{C.node_ops.rename($,U,y),$.parent=U}catch(xe){throw xe}finally{M.hashAddNode($)}}},rmdir(s){var o=M.lookupPath(s,{parent:!0}),h=o.node,f=Oe.basename(s),g=M.lookupNode(h,f),y=M.mayDelete(h,f,!0);if(y)throw new M.ErrnoError(y);if(!h.node_ops.rmdir)throw new M.ErrnoError(63);if(M.isMountpoint(g))throw new M.ErrnoError(10);h.node_ops.rmdir(h,f),M.destroyNode(g)},readdir(s){var o=M.lookupPath(s,{follow:!0}),h=o.node,f=M.checkOpExists(h.node_ops.readdir,54);return f(h)},unlink(s){var o=M.lookupPath(s,{parent:!0}),h=o.node;if(!h)throw new M.ErrnoError(44);var f=Oe.basename(s),g=M.lookupNode(h,f),y=M.mayDelete(h,f,!1);if(y)throw new M.ErrnoError(y);if(!h.node_ops.unlink)throw new M.ErrnoError(63);if(M.isMountpoint(g))throw new M.ErrnoError(10);h.node_ops.unlink(h,f),M.destroyNode(g)},readlink(s){var o=M.lookupPath(s),h=o.node;if(!h)throw new M.ErrnoError(44);if(!h.node_ops.readlink)throw new M.ErrnoError(28);return h.node_ops.readlink(h)},stat(s,o){var h=M.lookupPath(s,{follow:!o}),f=h.node,g=M.checkOpExists(f.node_ops.getattr,63);return g(f)},fstat(s){var o=M.getStreamChecked(s),h=o.node,f=o.stream_ops.getattr,g=f?o:h;return f??=h.node_ops.getattr,M.checkOpExists(f,63),f(g)},lstat(s){return M.stat(s,!0)},doChmod(s,o,h,f){M.doSetAttr(s,o,{mode:h&4095|o.mode&-4096,ctime:Date.now(),dontFollow:f})},chmod(s,o,h){var f;if(typeof s=="string"){var g=M.lookupPath(s,{follow:!h});f=g.node}else f=s;M.doChmod(null,f,o,h)},lchmod(s,o){M.chmod(s,o,!0)},fchmod(s,o){var h=M.getStreamChecked(s);M.doChmod(h,h.node,o,!1)},doChown(s,o,h){M.doSetAttr(s,o,{timestamp:Date.now(),dontFollow:h})},chown(s,o,h,f){var g;if(typeof s=="string"){var y=M.lookupPath(s,{follow:!f});g=y.node}else g=s;M.doChown(null,g,f)},lchown(s,o,h){M.chown(s,o,h,!0)},fchown(s,o,h){var f=M.getStreamChecked(s);M.doChown(f,f.node,!1)},doTruncate(s,o,h){if(M.isDir(o.mode))throw new M.ErrnoError(31);if(!M.isFile(o.mode))throw new M.ErrnoError(28);var f=M.nodePermissions(o,"w");if(f)throw new M.ErrnoError(f);M.doSetAttr(s,o,{size:h,timestamp:Date.now()})},truncate(s,o){if(o<0)throw new M.ErrnoError(28);var h;if(typeof s=="string"){var f=M.lookupPath(s,{follow:!0});h=f.node}else h=s;M.doTruncate(null,h,o)},ftruncate(s,o){var h=M.getStreamChecked(s);if(o<0||(h.flags&2097155)===0)throw new M.ErrnoError(28);M.doTruncate(h,h.node,o)},utime(s,o,h){var f=M.lookupPath(s,{follow:!0}),g=f.node,y=M.checkOpExists(g.node_ops.setattr,63);y(g,{atime:o,mtime:h})},open(s,o,h=438){if(s==="")throw new M.ErrnoError(44);o=typeof o=="string"?Ri(o):o,o&64?h=h&4095|32768:h=0;var f,g;if(typeof s=="object")f=s;else{g=s.endsWith("/");var y=M.lookupPath(s,{follow:!(o&131072),noent_okay:!0});f=y.node,s=y.path}var S=!1;if(o&64)if(f){if(o&128)throw new M.ErrnoError(20)}else{if(g)throw new M.ErrnoError(31);f=M.mknod(s,h|511,0),S=!0}if(!f)throw new M.ErrnoError(44);if(M.isChrdev(f.mode)&&(o&=-513),o&65536&&!M.isDir(f.mode))throw new M.ErrnoError(54);if(!S){var C=M.mayOpen(f,o);if(C)throw new M.ErrnoError(C)}o&512&&!S&&M.truncate(f,0),o&=-131713;var U=M.createStream({node:f,path:M.getPath(f),flags:o,seekable:!0,position:0,stream_ops:f.stream_ops,ungotten:[],error:!1});return U.stream_ops.open&&U.stream_ops.open(U),S&&M.chmod(f,h&511),t.logReadFiles&&!(o&1)&&(s in M.readFiles||(M.readFiles[s]=1)),U},close(s){if(M.isClosed(s))throw new M.ErrnoError(8);s.getdents&&(s.getdents=null);try{s.stream_ops.close&&s.stream_ops.close(s)}catch(o){throw o}finally{M.closeStream(s.fd)}s.fd=null},isClosed(s){return s.fd===null},llseek(s,o,h){if(M.isClosed(s))throw new M.ErrnoError(8);if(!s.seekable||!s.stream_ops.llseek)throw new M.ErrnoError(70);if(h!=0&&h!=1&&h!=2)throw new M.ErrnoError(28);return s.position=s.stream_ops.llseek(s,o,h),s.ungotten=[],s.position},read(s,o,h,f,g){if(H(h>=0),f<0||g<0)throw new M.ErrnoError(28);if(M.isClosed(s))throw new M.ErrnoError(8);if((s.flags&2097155)===1)throw new M.ErrnoError(8);if(M.isDir(s.node.mode))throw new M.ErrnoError(31);if(!s.stream_ops.read)throw new M.ErrnoError(28);var y=typeof g<"u";if(!y)g=s.position;else if(!s.seekable)throw new M.ErrnoError(70);var S=s.stream_ops.read(s,o,h,f,g);return y||(s.position+=S),S},write(s,o,h,f,g,y){if(H(h>=0),f<0||g<0)throw new M.ErrnoError(28);if(M.isClosed(s))throw new M.ErrnoError(8);if((s.flags&2097155)===0)throw new M.ErrnoError(8);if(M.isDir(s.node.mode))throw new M.ErrnoError(31);if(!s.stream_ops.write)throw new M.ErrnoError(28);s.seekable&&s.flags&1024&&M.llseek(s,0,2);var S=typeof g<"u";if(!S)g=s.position;else if(!s.seekable)throw new M.ErrnoError(70);var C=s.stream_ops.write(s,o,h,f,g,y);return S||(s.position+=C),C},mmap(s,o,h,f,g){if((f&2)!==0&&(g&2)===0&&(s.flags&2097155)!==2)throw new M.ErrnoError(2);if((s.flags&2097155)===1)throw new M.ErrnoError(2);if(!s.stream_ops.mmap)throw new M.ErrnoError(43);if(!o)throw new M.ErrnoError(28);return s.stream_ops.mmap(s,o,h,f,g)},msync(s,o,h,f,g){return H(h>=0),s.stream_ops.msync?s.stream_ops.msync(s,o,h,f,g):0},ioctl(s,o,h){if(!s.stream_ops.ioctl)throw new M.ErrnoError(59);return s.stream_ops.ioctl(s,o,h)},readFile(s,o={}){if(o.flags=o.flags||0,o.encoding=o.encoding||"binary",o.encoding!=="utf8"&&o.encoding!=="binary")throw new Error(`Invalid encoding type "${o.encoding}"`);var h=M.open(s,o.flags),f=M.stat(s),g=f.size,y=new Uint8Array(g);return M.read(h,y,0,g,0),o.encoding==="utf8"&&(y=Ci(y)),M.close(h),y},writeFile(s,o,h={}){h.flags=h.flags||577;var f=M.open(s,h.flags,h.mode);if(typeof o=="string"&&(o=new Uint8Array(wt(o,!0))),ArrayBuffer.isView(o))M.write(f,o,0,o.byteLength,void 0,h.canOwn);else throw new Error("Unsupported data type");M.close(f)},cwd:()=>M.currentPath,chdir(s){var o=M.lookupPath(s,{follow:!0});if(o.node===null)throw new M.ErrnoError(44);if(!M.isDir(o.node.mode))throw new M.ErrnoError(54);var h=M.nodePermissions(o.node,"x");if(h)throw new M.ErrnoError(h);M.currentPath=o.path},createDefaultDirectories(){M.mkdir("/tmp"),M.mkdir("/home"),M.mkdir("/home/web_user")},createDefaultDevices(){M.mkdir("/dev"),M.registerDevice(M.makedev(1,3),{read:()=>0,write:(f,g,y,S,C)=>S,llseek:()=>0}),M.mkdev("/dev/null",M.makedev(1,3)),gn.register(M.makedev(5,0),gn.default_tty_ops),gn.register(M.makedev(6,0),gn.default_tty1_ops),M.mkdev("/dev/tty",M.makedev(5,0)),M.mkdev("/dev/tty1",M.makedev(6,0));var s=new Uint8Array(1024),o=0,h=()=>(o===0&&(Wt(s),o=s.byteLength),s[--o]);M.createDevice("/dev","random",h),M.createDevice("/dev","urandom",h),M.mkdir("/dev/shm"),M.mkdir("/dev/shm/tmp")},createSpecialDirectories(){M.mkdir("/proc");var s=M.mkdir("/proc/self");M.mkdir("/proc/self/fd"),M.mount({mount(){var o=M.createNode(s,"fd",16895,73);return o.stream_ops={llseek:ct.stream_ops.llseek},o.node_ops={lookup(h,f){var g=+f,y=M.getStreamChecked(g),S={parent:null,mount:{mountpoint:"fake"},node_ops:{readlink:()=>y.path},id:g+1};return S.parent=S,S},readdir(){return Array.from(M.streams.entries()).filter(([h,f])=>f).map(([h,f])=>h.toString())}},o}},{},"/proc/self/fd")},createStandardStreams(s,o,h){s?M.createDevice("/dev","stdin",s):M.symlink("/dev/tty","/dev/stdin"),o?M.createDevice("/dev","stdout",null,o):M.symlink("/dev/tty","/dev/stdout"),h?M.createDevice("/dev","stderr",null,h):M.symlink("/dev/tty1","/dev/stderr");var f=M.open("/dev/stdin",0),g=M.open("/dev/stdout",1),y=M.open("/dev/stderr",1);H(f.fd===0,`invalid handle for stdin (${f.fd})`),H(g.fd===1,`invalid handle for stdout (${g.fd})`),H(y.fd===2,`invalid handle for stderr (${y.fd})`)},staticInit(){M.nameTable=new Array(4096),M.mount(ct,{},"/"),M.createDefaultDirectories(),M.createDefaultDevices(),M.createSpecialDirectories(),M.filesystems={MEMFS:ct}},init(s,o,h){H(!M.initialized,"FS.init was previously called. If you want to initialize later with custom parameters, remove any earlier calls (note that one is automatically added to the generated code)"),M.initialized=!0,s??=t.stdin,o??=t.stdout,h??=t.stderr,M.createStandardStreams(s,o,h)},quit(){M.initialized=!1,ch(0);for(var s of M.streams)s&&M.close(s)},findObject(s,o){var h=M.analyzePath(s,o);return h.exists?h.object:null},analyzePath(s,o){try{var h=M.lookupPath(s,{follow:!o});s=h.path}catch{}var f={isRoot:!1,exists:!1,error:0,name:null,path:null,object:null,parentExists:!1,parentPath:null,parentObject:null};try{var h=M.lookupPath(s,{parent:!0});f.parentExists=!0,f.parentPath=h.path,f.parentObject=h.node,f.name=Oe.basename(s),h=M.lookupPath(s,{follow:!o}),f.exists=!0,f.path=h.path,f.object=h.node,f.name=h.node.name,f.isRoot=h.path==="/"}catch(g){f.error=g.errno}return f},createPath(s,o,h,f){s=typeof s=="string"?s:M.getPath(s);for(var g=o.split("/").reverse();g.length;){var y=g.pop();if(y){var S=Oe.join2(s,y);try{M.mkdir(S)}catch(C){if(C.errno!=20)throw C}s=S}}return S},createFile(s,o,h,f,g){var y=Oe.join2(typeof s=="string"?s:M.getPath(s),o),S=Zl(f,g);return M.create(y,S)},createDataFile(s,o,h,f,g,y){var S=o;s&&(s=typeof s=="string"?s:M.getPath(s),S=o?Oe.join2(s,o):s);var C=Zl(f,g),U=M.create(S,C);if(h){if(typeof h=="string"){for(var $=new Array(h.length),K=0,ae=h.length;K<ae;++K)$[K]=h.charCodeAt(K);h=$}M.chmod(U,C|146);var he=M.open(U,577);M.write(he,h,0,h.length,0,y),M.close(he),M.chmod(U,C)}},createDevice(s,o,h,f){var g=Oe.join2(typeof s=="string"?s:M.getPath(s),o),y=Zl(!!h,!!f);M.createDevice.major??=64;var S=M.makedev(M.createDevice.major++,0);return M.registerDevice(S,{open(C){C.seekable=!1},close(C){f?.buffer?.length&&f(10)},read(C,U,$,K,ae){for(var he=0,oe=0;oe<K;oe++){var xe;try{xe=h()}catch{throw new M.ErrnoError(29)}if(xe===void 0&&he===0)throw new M.ErrnoError(6);if(xe==null)break;he++,U[$+oe]=xe}return he&&(C.node.atime=Date.now()),he},write(C,U,$,K,ae){for(var he=0;he<K;he++)try{f(U[$+he])}catch{throw new M.ErrnoError(29)}return K&&(C.node.mtime=C.node.ctime=Date.now()),he}}),M.mkdev(g,y,S)},forceLoadFile(s){if(s.isDevice||s.isFolder||s.link||s.contents)return!0;if(typeof XMLHttpRequest<"u")throw new Error("Lazy loading should have been performed (contents set) in createLazyFile, but it was not. Lazy loading only works in web workers. Use --embed-file or --preload-file in emcc on the main thread.");try{s.contents=E(s.url),s.usedBytes=s.contents.length}catch{throw new M.ErrnoError(29)}},createLazyFile(s,o,h,f,g){class y{lengthKnown=!1;chunks=[];get(oe){if(!(oe>this.length-1||oe<0)){var xe=oe%this.chunkSize,et=oe/this.chunkSize|0;return this.getter(et)[xe]}}setDataGetter(oe){this.getter=oe}cacheLength(){var oe=new XMLHttpRequest;if(oe.open("HEAD",h,!1),oe.send(null),!(oe.status>=200&&oe.status<300||oe.status===304))throw new Error("Couldn't load "+h+". Status: "+oe.status);var xe=Number(oe.getResponseHeader("Content-length")),et,St=(et=oe.getResponseHeader("Accept-Ranges"))&&et==="bytes",xt=(et=oe.getResponseHeader("Content-Encoding"))&&et==="gzip",Gt=1024*1024;St||(Gt=xe);var Rt=(rn,En)=>{if(rn>En)throw new Error("invalid range ("+rn+", "+En+") or no bytes requested!");if(En>xe-1)throw new Error("only "+xe+" bytes available! programmer error!");var Bt=new XMLHttpRequest;if(Bt.open("GET",h,!1),xe!==Gt&&Bt.setRequestHeader("Range","bytes="+rn+"-"+En),Bt.responseType="arraybuffer",Bt.overrideMimeType&&Bt.overrideMimeType("text/plain; charset=x-user-defined"),Bt.send(null),!(Bt.status>=200&&Bt.status<300||Bt.status===304))throw new Error("Couldn't load "+h+". Status: "+Bt.status);return Bt.response!==void 0?new Uint8Array(Bt.response||[]):wt(Bt.responseText||"",!0)},vn=this;vn.setDataGetter(rn=>{var En=rn*Gt,Bt=(rn+1)*Gt-1;if(Bt=Math.min(Bt,xe-1),typeof vn.chunks[rn]>"u"&&(vn.chunks[rn]=Rt(En,Bt)),typeof vn.chunks[rn]>"u")throw new Error("doXHR failed!");return vn.chunks[rn]}),(xt||!xe)&&(Gt=xe=1,xe=this.getter(0).length,Gt=xe,L("LazyFiles on gzip forces download of the whole file when length is accessed")),this._length=xe,this._chunkSize=Gt,this.lengthKnown=!0}get length(){return this.lengthKnown||this.cacheLength(),this._length}get chunkSize(){return this.lengthKnown||this.cacheLength(),this._chunkSize}}if(typeof XMLHttpRequest<"u"){if(!r)throw"Cannot do synchronous binary XHRs outside webworkers in modern browsers. Use --embed-file or --preload-file in emcc";var S=new y,C={isDevice:!1,contents:S}}else var C={isDevice:!1,url:h};var U=M.createFile(s,o,C,f,g);C.contents?U.contents=C.contents:C.url&&(U.contents=null,U.url=C.url),Object.defineProperties(U,{usedBytes:{get:function(){return this.contents.length}}});var $={},K=Object.keys(U.stream_ops);K.forEach(he=>{var oe=U.stream_ops[he];$[he]=(...xe)=>(M.forceLoadFile(U),oe(...xe))});function ae(he,oe,xe,et,St){var xt=he.node.contents;if(St>=xt.length)return 0;var Gt=Math.min(xt.length-St,et);if(H(Gt>=0),xt.slice)for(var Rt=0;Rt<Gt;Rt++)oe[xe+Rt]=xt[St+Rt];else for(var Rt=0;Rt<Gt;Rt++)oe[xe+Rt]=xt.get(St+Rt);return Gt}return $.read=(he,oe,xe,et,St)=>(M.forceLoadFile(U),ae(he,oe,xe,et,St)),$.mmap=(he,oe,xe,et,St)=>{M.forceLoadFile(U);var xt=xn(oe);if(!xt)throw new M.ErrnoError(48);return ae(he,je,xt,oe,xe),{ptr:xt,allocated:!0}},U.stream_ops=$,U},absolutePath(){Ee("FS.absolutePath has been removed; use PATH_FS.resolve instead")},createFolder(){Ee("FS.createFolder has been removed; use FS.mkdir instead")},createLink(){Ee("FS.createLink has been removed; use FS.symlink instead")},joinPath(){Ee("FS.joinPath has been removed; use PATH.join instead")},mmapAlloc(){Ee("FS.mmapAlloc has been replaced by the top level function mmapAlloc")},standardizePath(){Ee("FS.standardizePath has been removed; use PATH.normalize instead")}},qt={DEFAULT_POLLMASK:5,calculateAt(s,o,h){if(Oe.isAbs(o))return o;var f;if(s===-100)f=M.cwd();else{var g=qt.getStreamFromFD(s);f=g.path}if(o.length==0){if(!h)throw new M.ErrnoError(44);return f}return f+"/"+o},writeStat(s,o){Te[s>>2]=o.dev,Te[s+4>>2]=o.mode,_e[s+8>>2]=o.nlink,Te[s+12>>2]=o.uid,Te[s+16>>2]=o.gid,Te[s+20>>2]=o.rdev,A[s+24>>3]=BigInt(o.size),Te[s+32>>2]=4096,Te[s+36>>2]=o.blocks;var h=o.atime.getTime(),f=o.mtime.getTime(),g=o.ctime.getTime();return A[s+40>>3]=BigInt(Math.floor(h/1e3)),_e[s+48>>2]=h%1e3*1e3*1e3,A[s+56>>3]=BigInt(Math.floor(f/1e3)),_e[s+64>>2]=f%1e3*1e3*1e3,A[s+72>>3]=BigInt(Math.floor(g/1e3)),_e[s+80>>2]=g%1e3*1e3*1e3,A[s+88>>3]=BigInt(o.ino),0},writeStatFs(s,o){Te[s+4>>2]=o.bsize,Te[s+40>>2]=o.bsize,Te[s+8>>2]=o.blocks,Te[s+12>>2]=o.bfree,Te[s+16>>2]=o.bavail,Te[s+20>>2]=o.files,Te[s+24>>2]=o.ffree,Te[s+28>>2]=o.fsid,Te[s+44>>2]=o.flags,Te[s+36>>2]=o.namelen},doMsync(s,o,h,f,g){if(!M.isFile(o.node.mode))throw new M.ErrnoError(43);if(f&2)return 0;var y=tt.slice(s,s+h);M.msync(o,y,g,h,f)},getStreamFromFD(s){var o=M.getStreamChecked(s);return o},varargs:void 0,getStr(s){var o=Wn(s);return o}};function jm(s,o,h){try{var f=qt.getStreamFromFD(s);if(H(!h),f.fd===o)return-28;if(o<0||o>=M.MAX_OPEN_FDS)return-8;var g=M.getStream(o);return g&&M.close(g),M.dupStream(f,o).fd}catch(y){if(typeof M>"u"||y.name!=="ErrnoError")throw y;return-y.errno}}var ho=()=>{H(qt.varargs!=null);var s=Te[+qt.varargs>>2];return qt.varargs+=4,s},qr=ho;function qm(s,o,h){qt.varargs=h;try{var f=qt.getStreamFromFD(s);switch(o){case 0:{var g=ho();if(g<0)return-28;for(;M.streams[g];)g++;var y;return y=M.dupStream(f,g),y.fd}case 1:case 2:return 0;case 3:return f.flags;case 4:{var g=ho();return f.flags|=g,0}case 12:{var g=qr(),S=0;return bt[g+S>>1]=2,0}case 13:case 14:return 0}return-28}catch(C){if(typeof M>"u"||C.name!=="ErrnoError")throw C;return-C.errno}}function Ym(s,o){try{return qt.writeStat(o,M.fstat(s))}catch(h){if(typeof M>"u"||h.name!=="ErrnoError")throw h;return-h.errno}}function Zm(s,o,h){qt.varargs=h;try{var f=qt.getStreamFromFD(s);switch(o){case 21509:return f.tty?0:-59;case 21505:{if(!f.tty)return-59;if(f.tty.ops.ioctl_tcgets){var g=f.tty.ops.ioctl_tcgets(f),y=qr();Te[y>>2]=g.c_iflag||0,Te[y+4>>2]=g.c_oflag||0,Te[y+8>>2]=g.c_cflag||0,Te[y+12>>2]=g.c_lflag||0;for(var S=0;S<32;S++)je[y+S+17]=g.c_cc[S]||0;return 0}return 0}case 21510:case 21511:case 21512:return f.tty?0:-59;case 21506:case 21507:case 21508:{if(!f.tty)return-59;if(f.tty.ops.ioctl_tcsets){for(var y=qr(),C=Te[y>>2],U=Te[y+4>>2],$=Te[y+8>>2],K=Te[y+12>>2],ae=[],S=0;S<32;S++)ae.push(je[y+S+17]);return f.tty.ops.ioctl_tcsets(f.tty,o,{c_iflag:C,c_oflag:U,c_cflag:$,c_lflag:K,c_cc:ae})}return 0}case 21519:{if(!f.tty)return-59;var y=qr();return Te[y>>2]=0,0}case 21520:return f.tty?-28:-59;case 21531:{var y=qr();return M.ioctl(f,o,y)}case 21523:{if(!f.tty)return-59;if(f.tty.ops.ioctl_tiocgwinsz){var he=f.tty.ops.ioctl_tiocgwinsz(f.tty),y=qr();bt[y>>1]=he[0],bt[y+2>>1]=he[1]}return 0}case 21524:return f.tty?0:-59;case 21515:return f.tty?0:-59;default:return-28}}catch(oe){if(typeof M>"u"||oe.name!=="ErrnoError")throw oe;return-oe.errno}}function Jm(s,o){try{return s=qt.getStr(s),qt.writeStat(o,M.lstat(s))}catch(h){if(typeof M>"u"||h.name!=="ErrnoError")throw h;return-h.errno}}function Km(s,o,h,f){try{o=qt.getStr(o);var g=f&256,y=f&4096;return f=f&-6401,H(!f,`unknown flags in __syscall_newfstatat: ${f}`),o=qt.calculateAt(s,o,y),qt.writeStat(h,g?M.lstat(o):M.stat(o))}catch(S){if(typeof M>"u"||S.name!=="ErrnoError")throw S;return-S.errno}}function Qm(s,o,h,f){qt.varargs=f;try{o=qt.getStr(o),o=qt.calculateAt(s,o);var g=f?ho():0;return M.open(o,h,g).fd}catch(y){if(typeof M>"u"||y.name!=="ErrnoError")throw y;return-y.errno}}function e0(s,o){try{return s=qt.getStr(s),qt.writeStat(o,M.stat(s))}catch(h){if(typeof M>"u"||h.name!=="ErrnoError")throw h;return-h.errno}}var t0=()=>Ee("native code called abort()"),nn=s=>{for(var o="";;){var h=tt[s++];if(!h)return o;o+=String.fromCharCode(h)}},Yr={},dr={},uo={},Xs=class extends Error{constructor(o){super(o),this.name="BindingError"}},Mt=s=>{throw new Xs(s)};function n0(s,o,h={}){var f=o.name;if(s||Mt(`type "${f}" must have a positive integer typeid pointer`),dr.hasOwnProperty(s)){if(h.ignoreDuplicateRegistrations)return;Mt(`Cannot register type '${f}' twice`)}if(dr[s]=o,delete uo[s],Yr.hasOwnProperty(s)){var g=Yr[s];delete Yr[s],g.forEach(y=>y())}}function $n(s,o,h={}){if(o.argPackAdvance===void 0)throw new TypeError("registerType registeredInstance requires argPackAdvance");return n0(s,o,h)}var yd=(s,o,h)=>{switch(o){case 1:return h?f=>je[f]:f=>tt[f];case 2:return h?f=>bt[f>>1]:f=>Ue[f>>1];case 4:return h?f=>Te[f>>2]:f=>_e[f>>2];case 8:return h?f=>A[f>>3]:f=>Q[f>>3];default:throw new TypeError(`invalid integer width (${o}): ${s}`)}},fr=s=>{if(s===null)return"null";var o=typeof s;return o==="object"||o==="array"||o==="function"?s.toString():""+s},bd=(s,o,h,f)=>{if(o<h||o>f)throw new TypeError(`Passing a number "${fr(o)}" from JS side to C/C++ side to an argument of type "${s}", which is outside the valid range [${h}, ${f}]!`)},i0=(s,o,h,f,g)=>{o=nn(o);let y=f===0n,S=C=>C;if(y){let C=h*8;S=U=>BigInt.asUintN(C,U),g=S(g)}$n(s,{name:o,fromWireType:S,toWireType:(C,U)=>{if(typeof U=="number")U=BigInt(U);else if(typeof U!="bigint")throw new TypeError(`Cannot convert "${fr(U)}" to ${this.name}`);return bd(o,U,f,g),U},argPackAdvance:ui,readValueFromPointer:yd(o,h,!y),destructorFunction:null})},ui=8,r0=(s,o,h,f)=>{o=nn(o),$n(s,{name:o,fromWireType:function(g){return!!g},toWireType:function(g,y){return y?h:f},argPackAdvance:ui,readValueFromPointer:function(g){return this.fromWireType(tt[g])},destructorFunction:null})},s0=s=>({count:s.count,deleteScheduled:s.deleteScheduled,preservePointerOnDelete:s.preservePointerOnDelete,ptr:s.ptr,ptrType:s.ptrType,smartPtr:s.smartPtr,smartPtrType:s.smartPtrType}),Jl=s=>{function o(h){return h.$$.ptrType.registeredClass.name}Mt(o(s)+" instance already deleted")},Kl=!1,wd=s=>{},a0=s=>{s.smartPtr?s.smartPtrType.rawDestructor(s.smartPtr):s.ptrType.registeredClass.rawDestructor(s.ptr)},Md=s=>{s.count.value-=1;var o=s.count.value===0;o&&a0(s)},Sd=(s,o,h)=>{if(o===h)return s;if(h.baseClass===void 0)return null;var f=Sd(s,o,h.baseClass);return f===null?null:h.downcast(f)},Ed={},o0={},c0=(s,o)=>{for(o===void 0&&Mt("ptr should not be undefined");s.baseClass;)o=s.upcast(o),s=s.baseClass;return o},l0=(s,o)=>(o=c0(s,o),o0[o]),h0=class extends Error{constructor(o){super(o),this.name="InternalError"}},fo=s=>{throw new h0(s)},po=(s,o)=>{(!o.ptrType||!o.ptr)&&fo("makeClassHandle requires ptr and ptrType");var h=!!o.smartPtrType,f=!!o.smartPtr;return h!==f&&fo("Both smartPtrType and smartPtr must be specified"),o.count={value:1},js(Object.create(s,{$$:{value:o,writable:!0}}))};function Td(s){var o=this.getPointee(s);if(!o)return this.destructor(s),null;var h=l0(this.registeredClass,o);if(h!==void 0){if(h.$$.count.value===0)return h.$$.ptr=o,h.$$.smartPtr=s,h.clone();var f=h.clone();return this.destructor(s),f}function g(){return this.isSmartPointer?po(this.registeredClass.instancePrototype,{ptrType:this.pointeeType,ptr:o,smartPtrType:this,smartPtr:s}):po(this.registeredClass.instancePrototype,{ptrType:this,ptr:s})}var y=this.registeredClass.getActualType(o),S=Ed[y];if(!S)return g.call(this);var C;this.isConst?C=S.constPointerType:C=S.pointerType;var U=Sd(o,this.registeredClass,C.registeredClass);return U===null?g.call(this):this.isSmartPointer?po(C.registeredClass.instancePrototype,{ptrType:C,ptr:U,smartPtrType:this,smartPtr:s}):po(C.registeredClass.instancePrototype,{ptrType:C,ptr:U})}var js=s=>typeof FinalizationRegistry>"u"?(js=o=>o,s):(Kl=new FinalizationRegistry(o=>{console.warn(o.leakWarning),Md(o.$$)}),js=o=>{var h=o.$$,f=!!h.smartPtr;if(f){var g={$$:h},y=h.ptrType.registeredClass,S=new Error(`Embind found a leaked C++ instance ${y.name} <${hi(h.ptr)}>.
We'll free it automatically in this case, but this functionality is not reliable across various environments.
Make sure to invoke .delete() manually once you're done with the instance instead.
Originally allocated`);"captureStackTrace"in Error&&Error.captureStackTrace(S,Td),g.leakWarning=S.stack.replace(/^Error: /,""),Kl.register(o,g,o)}return o},wd=o=>Kl.unregister(o),js(s)),mo=[],u0=()=>{for(;mo.length;){var s=mo.pop();s.$$.deleteScheduled=!1,s.delete()}},Ad,d0=()=>{let s=go.prototype;Object.assign(s,{isAliasOf(h){if(!(this instanceof go)||!(h instanceof go))return!1;var f=this.$$.ptrType.registeredClass,g=this.$$.ptr;h.$$=h.$$;for(var y=h.$$.ptrType.registeredClass,S=h.$$.ptr;f.baseClass;)g=f.upcast(g),f=f.baseClass;for(;y.baseClass;)S=y.upcast(S),y=y.baseClass;return f===y&&g===S},clone(){if(this.$$.ptr||Jl(this),this.$$.preservePointerOnDelete)return this.$$.count.value+=1,this;var h=js(Object.create(Object.getPrototypeOf(this),{$$:{value:s0(this.$$)}}));return h.$$.count.value+=1,h.$$.deleteScheduled=!1,h},delete(){this.$$.ptr||Jl(this),this.$$.deleteScheduled&&!this.$$.preservePointerOnDelete&&Mt("Object already scheduled for deletion"),wd(this),Md(this.$$),this.$$.preservePointerOnDelete||(this.$$.smartPtr=void 0,this.$$.ptr=void 0)},isDeleted(){return!this.$$.ptr},deleteLater(){return this.$$.ptr||Jl(this),this.$$.deleteScheduled&&!this.$$.preservePointerOnDelete&&Mt("Object already scheduled for deletion"),mo.push(this),mo.length===1&&Ad&&Ad(u0),this.$$.deleteScheduled=!0,this}});let o=Symbol.dispose;o&&(s[o]=s.delete)};function go(){}var xo=(s,o)=>Object.defineProperty(o,"name",{value:s}),Ql=(s,o,h)=>{if(s[o].overloadTable===void 0){var f=s[o];s[o]=function(...g){return s[o].overloadTable.hasOwnProperty(g.length)||Mt(`Function '${h}' called with an invalid number of arguments (${g.length}) - expects one of (${s[o].overloadTable})!`),s[o].overloadTable[g.length].apply(this,g)},s[o].overloadTable=[],s[o].overloadTable[f.argCount]=f}},eh=(s,o,h)=>{t.hasOwnProperty(s)?((h===void 0||t[s].overloadTable!==void 0&&t[s].overloadTable[h]!==void 0)&&Mt(`Cannot register public name '${s}' twice`),Ql(t,s,s),t[s].overloadTable.hasOwnProperty(h)&&Mt(`Cannot register multiple overloads of a function with the same number of arguments (${h})!`),t[s].overloadTable[h]=o):(t[s]=o,t[s].argCount=h)},f0=48,p0=57,m0=s=>{H(typeof s=="string"),s=s.replace(/[^a-zA-Z0-9_]/g,"$");var o=s.charCodeAt(0);return o>=f0&&o<=p0?`_${s}`:s};function g0(s,o,h,f,g,y,S,C){this.name=s,this.constructor=o,this.instancePrototype=h,this.rawDestructor=f,this.baseClass=g,this.getActualType=y,this.upcast=S,this.downcast=C,this.pureVirtualFunctions=[]}var _o=(s,o,h)=>{for(;o!==h;)o.upcast||Mt(`Expected null or instance of ${h.name}, got an instance of ${o.name}`),s=o.upcast(s),o=o.baseClass;return s};function x0(s,o){if(o===null)return this.isReference&&Mt(`null is not a valid ${this.name}`),0;o.$$||Mt(`Cannot pass "${fr(o)}" as a ${this.name}`),o.$$.ptr||Mt(`Cannot pass deleted object as a pointer of type ${this.name}`);var h=o.$$.ptrType.registeredClass,f=_o(o.$$.ptr,h,this.registeredClass);return f}function _0(s,o){var h;if(o===null)return this.isReference&&Mt(`null is not a valid ${this.name}`),this.isSmartPointer?(h=this.rawConstructor(),s!==null&&s.push(this.rawDestructor,h),h):0;(!o||!o.$$)&&Mt(`Cannot pass "${fr(o)}" as a ${this.name}`),o.$$.ptr||Mt(`Cannot pass deleted object as a pointer of type ${this.name}`),!this.isConst&&o.$$.ptrType.isConst&&Mt(`Cannot convert argument of type ${o.$$.smartPtrType?o.$$.smartPtrType.name:o.$$.ptrType.name} to parameter type ${this.name}`);var f=o.$$.ptrType.registeredClass;if(h=_o(o.$$.ptr,f,this.registeredClass),this.isSmartPointer)switch(o.$$.smartPtr===void 0&&Mt("Passing raw pointer to smart pointer is illegal"),this.sharingPolicy){case 0:o.$$.smartPtrType===this?h=o.$$.smartPtr:Mt(`Cannot convert argument of type ${o.$$.smartPtrType?o.$$.smartPtrType.name:o.$$.ptrType.name} to parameter type ${this.name}`);break;case 1:h=o.$$.smartPtr;break;case 2:if(o.$$.smartPtrType===this)h=o.$$.smartPtr;else{var g=o.clone();h=this.rawShare(h,en.toHandle(()=>g.delete())),s!==null&&s.push(this.rawDestructor,h)}break;default:Mt("Unsupporting sharing policy")}return h}function v0(s,o){if(o===null)return this.isReference&&Mt(`null is not a valid ${this.name}`),0;o.$$||Mt(`Cannot pass "${fr(o)}" as a ${this.name}`),o.$$.ptr||Mt(`Cannot pass deleted object as a pointer of type ${this.name}`),o.$$.ptrType.isConst&&Mt(`Cannot convert argument of type ${o.$$.ptrType.name} to parameter type ${this.name}`);var h=o.$$.ptrType.registeredClass,f=_o(o.$$.ptr,h,this.registeredClass);return f}function vo(s){return this.fromWireType(_e[s>>2])}var y0=()=>{Object.assign(yo.prototype,{getPointee(s){return this.rawGetPointee&&(s=this.rawGetPointee(s)),s},destructor(s){this.rawDestructor?.(s)},argPackAdvance:ui,readValueFromPointer:vo,fromWireType:Td})};function yo(s,o,h,f,g,y,S,C,U,$,K){this.name=s,this.registeredClass=o,this.isReference=h,this.isConst=f,this.isSmartPointer=g,this.pointeeType=y,this.sharingPolicy=S,this.rawGetPointee=C,this.rawConstructor=U,this.rawShare=$,this.rawDestructor=K,!g&&o.baseClass===void 0?f?(this.toWireType=x0,this.destructorFunction=null):(this.toWireType=v0,this.destructorFunction=null):this.toWireType=_0}var Cd=(s,o,h)=>{t.hasOwnProperty(s)||fo("Replacing nonexistent public symbol"),t[s].overloadTable!==void 0&&h!==void 0?t[s].overloadTable[h]=o:(t[s]=o,t[s].argCount=h)},Rd=[],bo,ye=s=>{var o=Rd[s];return o||(Rd[s]=o=bo.get(s)),H(bo.get(s)==o,"JavaScript-side Wasm function table mirror is out of date!"),o},di=(s,o,h=!1)=>{H(!h,"Async bindings are only supported with JSPI."),s=nn(s);function f(){var y=ye(o);return y}var g=f();return typeof g!="function"&&Mt(`unknown function pointer with signature ${s}: ${o}`),g};class b0 extends Error{}var Id=s=>{var o=qd(s),h=nn(o);return ei(o),h},pr=(s,o)=>{var h=[],f={};function g(y){if(!f[y]&&!dr[y]){if(uo[y]){uo[y].forEach(g);return}h.push(y),f[y]=!0}}throw o.forEach(g),new b0(`${s}: `+h.map(Id).join([", "]))},Qn=(s,o,h)=>{s.forEach(C=>uo[C]=o);function f(C){var U=h(C);U.length!==s.length&&fo("Mismatched type converter count");for(var $=0;$<s.length;++$)$n(s[$],U[$])}var g=new Array(o.length),y=[],S=0;o.forEach((C,U)=>{dr.hasOwnProperty(C)?g[U]=dr[C]:(y.push(C),Yr.hasOwnProperty(C)||(Yr[C]=[]),Yr[C].push(()=>{g[U]=dr[C],++S,S===y.length&&f(g)}))}),y.length===0&&f(g)},w0=(s,o,h,f,g,y,S,C,U,$,K,ae,he)=>{K=nn(K),y=di(g,y),C&&=di(S,C),$&&=di(U,$),he=di(ae,he);var oe=m0(K);eh(oe,function(){pr(`Cannot construct ${K} due to unbound types`,[f])}),Qn([s,o,h],f?[f]:[],xe=>{xe=xe[0];var et,St;f?(et=xe.registeredClass,St=et.instancePrototype):St=go.prototype;var xt=xo(K,function(...Bt){if(Object.getPrototypeOf(this)!==Gt)throw new Xs(`Use 'new' to construct ${K}`);if(Rt.constructor_body===void 0)throw new Xs(`${K} has no accessible constructor`);var xr=Rt.constructor_body[Bt.length];if(xr===void 0)throw new Xs(`Tried to invoke ctor of ${K} with invalid number of parameters (${Bt.length}) - expected (${Object.keys(Rt.constructor_body).toString()}) parameters instead!`);return xr.apply(this,Bt)}),Gt=Object.create(St,{constructor:{value:xt}});xt.prototype=Gt;var Rt=new g0(K,xt,Gt,he,et,y,C,$);Rt.baseClass&&(Rt.baseClass.__derivedClasses??=[],Rt.baseClass.__derivedClasses.push(Rt));var vn=new yo(K,Rt,!0,!1,!1),rn=new yo(K+"*",Rt,!1,!1,!1),En=new yo(K+" const*",Rt,!1,!0,!1);return Ed[s]={pointerType:rn,constPointerType:En},Cd(oe,xt),[vn,rn,En]})},th=s=>{for(;s.length;){var o=s.pop(),h=s.pop();h(o)}};function Pd(s){for(var o=1;o<s.length;++o)if(s[o]!==null&&s[o].destructorFunction===void 0)return!0;return!1}function M0(s,o,h,f,g){if(s<o||s>h){var y=o==h?o:`${o} to ${h}`;g(`function ${f} called with ${s} arguments, expected ${y}`)}}function S0(s,o,h,f){var g=Pd(s),y=s.length-2,S=[],C=["fn"];o&&C.push("thisWired");for(var U=0;U<y;++U)S.push(`arg${U}`),C.push(`arg${U}Wired`);S=S.join(","),C=C.join(",");var $=`return function (${S}) {
`;$+=`checkArgCount(arguments.length, minArgs, maxArgs, humanName, throwBindingError);
`,g&&($+=`var destructors = [];
`);var K=g?"destructors":"null",ae=["humanName","throwBindingError","invoker","fn","runDestructors","retType","classParam"];o&&($+=`var thisWired = classParam['toWireType'](${K}, this);
`);for(var U=0;U<y;++U)$+=`var arg${U}Wired = argType${U}['toWireType'](${K}, arg${U});
`,ae.push(`argType${U}`);$+=(h||f?"var rv = ":"")+`invoker(${C});
`;var he=h?"rv":"";if(g)$+=`runDestructors(destructors);
`;else for(var U=o?1:2;U<s.length;++U){var oe=U===1?"thisWired":"arg"+(U-2)+"Wired";s[U].destructorFunction!==null&&($+=`${oe}_dtor(${oe});
`,ae.push(`${oe}_dtor`))}return h&&($+=`var ret = retType['fromWireType'](rv);
return ret;
`),$+=`}
`,ae.push("checkArgCount","minArgs","maxArgs"),$=`if (arguments.length !== ${ae.length}){ throw new Error(humanName + "Expected ${ae.length} closure arguments " + arguments.length + " given."); }
${$}`,[ae,$]}function E0(s){for(var o=s.length-2,h=s.length-1;h>=2&&s[h].optional;--h)o--;return o}function wo(s,o,h,f,g,y){var S=o.length;S<2&&Mt("argTypes array size mismatch! Must at least get return value and 'this' types!"),H(!y,"Async bindings are only supported with JSPI.");for(var C=o[1]!==null&&h!==null,U=Pd(o),$=o[0].name!=="void",K=S-2,ae=E0(o),he=[s,Mt,f,g,th,o[0],o[1]],oe=0;oe<S-2;++oe)he.push(o[oe+2]);if(!U)for(var oe=C?1:2;oe<o.length;++oe)o[oe].destructorFunction!==null&&he.push(o[oe].destructorFunction);he.push(M0,ae,K);let[xe,et]=S0(o,C,$,y);var St=new Function(...xe,et)(...he);return xo(s,St)}var Mo=(s,o)=>{for(var h=[],f=0;f<s;f++)h.push(_e[o+f*4>>2]);return h},nh=s=>{s=s.trim();let o=s.indexOf("(");return o===-1?s:(H(s.endsWith(")"),"Parentheses for argument names should match."),s.slice(0,o))},T0=(s,o,h,f,g,y,S,C,U)=>{var $=Mo(h,f);o=nn(o),o=nh(o),y=di(g,y,C),Qn([],[s],K=>{K=K[0];var ae=`${K.name}.${o}`;function he(){pr(`Cannot call ${ae} due to unbound types`,$)}o.startsWith("@@")&&(o=Symbol[o.substring(2)]);var oe=K.registeredClass.constructor;return oe[o]===void 0?(he.argCount=h-1,oe[o]=he):(Ql(oe,o,ae),oe[o].overloadTable[h-1]=he),Qn([],$,xe=>{var et=[xe[0],null].concat(xe.slice(1)),St=wo(ae,et,null,y,S,C);if(oe[o].overloadTable===void 0?(St.argCount=h-1,oe[o]=St):oe[o].overloadTable[h-1]=St,K.registeredClass.__derivedClasses)for(let xt of K.registeredClass.__derivedClasses)xt.constructor.hasOwnProperty(o)||(xt.constructor[o]=St);return[]}),[]})},A0=(s,o,h,f,g,y)=>{H(o>0);var S=Mo(o,h);g=di(f,g);var C=[y],U=[];Qn([],[s],$=>{$=$[0];var K=`constructor ${$.name}`;if($.registeredClass.constructor_body===void 0&&($.registeredClass.constructor_body=[]),$.registeredClass.constructor_body[o-1]!==void 0)throw new Xs(`Cannot register multiple constructors with identical number of parameters (${o-1}) for class '${$.name}'! Overload resolution is currently only performed using the parameter count, not actual type info!`);return $.registeredClass.constructor_body[o-1]=()=>{pr(`Cannot construct ${$.name} due to unbound types`,S)},Qn([],S,ae=>(ae.splice(1,0,null),$.registeredClass.constructor_body[o-1]=wo(K,ae,null,g,y),[])),[]})},C0=(s,o,h,f,g,y,S,C,U,$)=>{var K=Mo(h,f);o=nn(o),o=nh(o),y=di(g,y,U),Qn([],[s],ae=>{ae=ae[0];var he=`${ae.name}.${o}`;o.startsWith("@@")&&(o=Symbol[o.substring(2)]),C&&ae.registeredClass.pureVirtualFunctions.push(o);function oe(){pr(`Cannot call ${he} due to unbound types`,K)}var xe=ae.registeredClass.instancePrototype,et=xe[o];return et===void 0||et.overloadTable===void 0&&et.className!==ae.name&&et.argCount===h-2?(oe.argCount=h-2,oe.className=ae.name,xe[o]=oe):(Ql(xe,o,he),xe[o].overloadTable[h-2]=oe),Qn([],K,St=>{var xt=wo(he,St,ae,y,S,U);return xe[o].overloadTable===void 0?(xt.argCount=h-2,xe[o]=xt):xe[o].overloadTable[h-2]=xt,[]}),[]})},Fd=(s,o,h)=>(s instanceof Object||Mt(`${h} with invalid "this": ${s}`),s instanceof o.registeredClass.constructor||Mt(`${h} incompatible with "this" of type ${s.constructor.name}`),s.$$.ptr||Mt(`cannot call emscripten binding method ${h} on deleted object`),_o(s.$$.ptr,s.$$.ptrType.registeredClass,o.registeredClass)),R0=(s,o,h,f,g,y,S,C,U,$)=>{o=nn(o),g=di(f,g),Qn([],[s],K=>{K=K[0];var ae=`${K.name}.${o}`,he={get(){pr(`Cannot access ${ae} due to unbound types`,[h,S])},enumerable:!0,configurable:!0};return U?he.set=()=>pr(`Cannot access ${ae} due to unbound types`,[h,S]):he.set=oe=>Mt(ae+" is a read-only property"),Object.defineProperty(K.registeredClass.instancePrototype,o,he),Qn([],U?[h,S]:[h],oe=>{var xe=oe[0],et={get(){var xt=Fd(this,K,ae+" getter");return xe.fromWireType(g(y,xt))},enumerable:!0};if(U){U=di(C,U);var St=oe[1];et.set=function(xt){var Gt=Fd(this,K,ae+" setter"),Rt=[];U($,Gt,St.toWireType(Rt,xt)),th(Rt)}}return Object.defineProperty(K.registeredClass.instancePrototype,o,et),[]}),[]})},I0=(s,o,h)=>{s=nn(s),Qn([],[o],f=>(f=f[0],t[s]=f.fromWireType(h),[]))},Dd=[],fi=[0,1,,1,null,1,!0,1,!1,1],ih=s=>{s>9&&--fi[s+1]===0&&(H(fi[s]!==void 0,"Decref for unallocated handle."),fi[s]=void 0,Dd.push(s))},en={toValue:s=>(s||Mt(`Cannot use deleted val. handle = ${s}`),H(s===2||fi[s]!==void 0&&s%2===0,`invalid handle: ${s}`),fi[s]),toHandle:s=>{switch(s){case void 0:return 2;case null:return 4;case!0:return 6;case!1:return 8;default:{let o=Dd.pop()||fi.length;return fi[o]=s,fi[o+1]=1,o}}}},Ld={name:"emscripten::val",fromWireType:s=>{var o=en.toValue(s);return ih(s),o},toWireType:(s,o)=>en.toHandle(o),argPackAdvance:ui,readValueFromPointer:vo,destructorFunction:null},Ud=s=>$n(s,Ld),P0=(s,o,h)=>{switch(o){case 1:return h?function(f){return this.fromWireType(je[f])}:function(f){return this.fromWireType(tt[f])};case 2:return h?function(f){return this.fromWireType(bt[f>>1])}:function(f){return this.fromWireType(Ue[f>>1])};case 4:return h?function(f){return this.fromWireType(Te[f>>2])}:function(f){return this.fromWireType(_e[f>>2])};default:throw new TypeError(`invalid integer width (${o}): ${s}`)}},F0=(s,o,h,f)=>{o=nn(o);function g(){}g.values={},$n(s,{name:o,constructor:g,fromWireType:function(y){return this.constructor.values[y]},toWireType:(y,S)=>S.value,argPackAdvance:ui,readValueFromPointer:P0(o,h,f),destructorFunction:null}),eh(o,g)},qs=(s,o)=>{var h=dr[s];return h===void 0&&Mt(`${o} has unknown type ${Id(s)}`),h},D0=(s,o,h)=>{var f=qs(s,"enum");o=nn(o);var g=f.constructor,y=Object.create(f.constructor.prototype,{value:{value:h},constructor:{value:xo(`${f.name}_${o}`,function(){})}});g.values[h]=y,g[o]=y},L0=(s,o)=>{switch(o){case 4:return function(h){return this.fromWireType(ot[h>>2])};case 8:return function(h){return this.fromWireType(O[h>>3])};default:throw new TypeError(`invalid float width (${o}): ${s}`)}},U0=(s,o,h)=>{o=nn(o),$n(s,{name:o,fromWireType:f=>f,toWireType:(f,g)=>{if(typeof g!="number"&&typeof g!="boolean")throw new TypeError(`Cannot convert ${fr(g)} to ${this.name}`);return g},argPackAdvance:ui,readValueFromPointer:L0(o,h),destructorFunction:null})},N0=(s,o,h,f,g,y,S,C)=>{var U=Mo(o,h);s=nn(s),s=nh(s),g=di(f,g,S),eh(s,function(){pr(`Cannot call ${s} due to unbound types`,U)},o-1),Qn([],U,$=>{var K=[$[0],null].concat($.slice(1));return Cd(s,wo(s,K,null,g,y,S),o-1),[]})},k0=(s,o,h,f,g)=>{o=nn(o);let y=f===0,S=U=>U;if(y){var C=32-8*h;S=U=>U<<C>>>C,g=S(g)}$n(s,{name:o,fromWireType:S,toWireType:(U,$)=>{if(typeof $!="number"&&typeof $!="boolean")throw new TypeError(`Cannot convert "${fr($)}" to ${o}`);return bd(o,$,f,g),$},argPackAdvance:ui,readValueFromPointer:yd(o,h,f!==0),destructorFunction:null})},O0=(s,o,h)=>{var f=[Int8Array,Uint8Array,Int16Array,Uint16Array,Int32Array,Uint32Array,Float32Array,Float64Array,BigInt64Array,BigUint64Array],g=f[o];function y(S){var C=_e[S>>2],U=_e[S+4>>2];return new g(je.buffer,U,C)}h=nn(h),$n(s,{name:h,fromWireType:y,argPackAdvance:ui,readValueFromPointer:y},{ignoreDuplicateRegistrations:!0})},B0=Object.assign({optional:!0},Ld),z0=(s,o)=>{$n(s,B0)},mr=(s,o,h)=>(H(typeof h=="number","stringToUTF8(str, outPtr, maxBytesToWrite) is missing the third parameter that specifies the length of the output buffer!"),Ht(s,tt,o,h)),V0=(s,o)=>{o=nn(o);var h=!0;$n(s,{name:o,fromWireType(f){var g=_e[f>>2],y=f+4,S;if(h)for(var C=y,U=0;U<=g;++U){var $=y+U;if(U==g||tt[$]==0){var K=$-C,ae=Wn(C,K);S===void 0?S=ae:(S+="\0",S+=ae),C=$+1}}else{for(var he=new Array(g),U=0;U<g;++U)he[U]=String.fromCharCode(tt[y+U]);S=he.join("")}return ei(f),S},toWireType(f,g){g instanceof ArrayBuffer&&(g=new Uint8Array(g));var y,S=typeof g=="string";S||ArrayBuffer.isView(g)&&g.BYTES_PER_ELEMENT==1||Mt("Cannot pass non-string to std::string"),h&&S?y=qe(g):y=g.length;var C=oh(4+y+1),U=C+4;if(_e[C>>2]=y,S)if(h)mr(g,U,y+1);else for(var $=0;$<y;++$){var K=g.charCodeAt($);K>255&&(ei(C),Mt("String has UTF-16 code units that do not fit in 8 bits")),tt[U+$]=K}else tt.set(g,U);return f!==null&&f.push(ei,C),C},argPackAdvance:ui,readValueFromPointer:vo,destructorFunction(f){ei(f)}})},Nd=typeof TextDecoder<"u"?new TextDecoder("utf-16le"):void 0,H0=(s,o)=>{H(s%2==0,"Pointer passed to UTF16ToString must be aligned to two bytes!");for(var h=s>>1,f=h+o/2,g=h;!(g>=f)&&Ue[g];)++g;if(g-h>16&&Nd)return Nd.decode(Ue.subarray(h,g));for(var y="",S=h;!(S>=f);++S){var C=Ue[S];if(C==0)break;y+=String.fromCharCode(C)}return y},G0=(s,o,h)=>{if(H(o%2==0,"Pointer passed to stringToUTF16 must be aligned to two bytes!"),H(typeof h=="number","stringToUTF16(str, outPtr, maxBytesToWrite) is missing the third parameter that specifies the length of the output buffer!"),h??=2147483647,h<2)return 0;h-=2;for(var f=o,g=h<s.length*2?h/2:s.length,y=0;y<g;++y){var S=s.charCodeAt(y);bt[o>>1]=S,o+=2}return bt[o>>1]=0,o-f},W0=s=>s.length*2,$0=(s,o)=>{H(s%4==0,"Pointer passed to UTF32ToString must be aligned to four bytes!");for(var h="",f=0;!(f>=o/4);f++){var g=Te[s+f*4>>2];if(!g)break;h+=String.fromCodePoint(g)}return h},X0=(s,o,h)=>{if(H(o%4==0,"Pointer passed to stringToUTF32 must be aligned to four bytes!"),H(typeof h=="number","stringToUTF32(str, outPtr, maxBytesToWrite) is missing the third parameter that specifies the length of the output buffer!"),h??=2147483647,h<4)return 0;for(var f=o,g=f+h-4,y=0;y<s.length;++y){var S=s.codePointAt(y);if(S>65535&&y++,Te[o>>2]=S,o+=4,o+4>g)break}return Te[o>>2]=0,o-f},j0=s=>{for(var o=0,h=0;h<s.length;++h){var f=s.codePointAt(h);f>65535&&h++,o+=4}return o},q0=(s,o,h)=>{h=nn(h);var f,g,y,S;o===2?(f=H0,g=G0,S=W0,y=C=>Ue[C>>1]):o===4&&(f=$0,g=X0,S=j0,y=C=>_e[C>>2]),$n(s,{name:h,fromWireType:C=>{for(var U=_e[C>>2],$,K=C+4,ae=0;ae<=U;++ae){var he=C+4+ae*o;if(ae==U||y(he)==0){var oe=he-K,xe=f(K,oe);$===void 0?$=xe:($+="\0",$+=xe),K=he+o}}return ei(C),$},toWireType:(C,U)=>{typeof U!="string"&&Mt(`Cannot pass non-string to C++ string type ${h}`);var $=S(U),K=oh(4+$+o);return _e[K>>2]=$/o,g(U,K+4,$+o),C!==null&&C.push(ei,K),K},argPackAdvance:ui,readValueFromPointer:vo,destructorFunction(C){ei(C)}})},Y0=(s,o)=>{Ud(s)},Z0=(s,o)=>{o=nn(o),$n(s,{isVoid:!0,name:o,argPackAdvance:0,fromWireType:()=>{},toWireType:(h,f)=>{}})},J0=()=>{throw new Be},kd=(s,o,h)=>{var f=[],g=s.toWireType(f,h);return f.length&&(_e[o>>2]=en.toHandle(f)),g},K0=(s,o,h)=>(s=en.toValue(s),o=qs(o,"emval::as"),kd(o,h,s)),Q0=(s,o)=>(s=en.toValue(s),o=qs(o,"emval::as"),o.toWireType(null,s)),So=[],eg=(s,o,h,f)=>(s=So[s],o=en.toValue(o),s(null,o,h,f)),tg={},rh=s=>{var o=tg[s];return o===void 0?nn(s):o},ng=(s,o,h,f,g)=>(s=So[s],o=en.toValue(o),h=rh(h),s(o,o[h],f,g)),Od=()=>globalThis,ig=s=>s===0?en.toHandle(Od()):(s=rh(s),en.toHandle(Od()[s])),rg=s=>{var o=So.length;return So.push(s),o},sg=(s,o)=>{for(var h=new Array(s),f=0;f<s;++f)h[f]=qs(_e[o+f*4>>2],`parameter ${f}`);return h},ag=(s,o,h)=>{var f=sg(s,o),g=f.shift();s--;var y=`return function (obj, func, destructorsRef, args) {
`,S=0,C=[];h===0&&C.push("obj");for(var U=["retType"],$=[g],K=0;K<s;++K)C.push(`arg${K}`),U.push(`argType${K}`),$.push(f[K]),y+=`  var arg${K} = argType${K}.readValueFromPointer(args${S?"+"+S:""});
`,S+=f[K].argPackAdvance;var ae=h===1?"new func":"func.call";y+=`  var rv = ${ae}(${C.join(", ")});
`,g.isVoid||(U.push("emval_returnValue"),$.push(kd),y+=`  return emval_returnValue(retType, destructorsRef, rv);
`),y+=`};
`;var he=new Function(...U,y)(...$),oe=`methodCaller<(${f.map(xe=>xe.name).join(", ")}) => ${g.name}>`;return rg(xo(oe,he))},og=(s,o)=>(s=en.toValue(s),o=en.toValue(o),en.toHandle(s[o])),cg=s=>{s>9&&(fi[s+1]+=1)},lg=s=>(s=en.toValue(s),typeof s=="number"),hg=s=>(s=en.toValue(s),typeof s=="string"),ug=()=>en.toHandle([]),dg=s=>en.toHandle(rh(s)),fg=s=>{var o=en.toValue(s);th(o),ih(s)},pg=(s,o)=>{s=qs(s,"_emval_take_value");var h=s.readValueFromPointer(o);return en.toHandle(h)},mg=s=>{throw s=en.toValue(s),s},gg=s=>s%4===0&&(s%100!==0||s%400===0),xg=[0,31,60,91,121,152,182,213,244,274,305,335],_g=[0,31,59,90,120,151,181,212,243,273,304,334],Bd=s=>{var o=gg(s.getFullYear()),h=o?xg:_g,f=h[s.getMonth()]+s.getDate()-1;return f},vg=9007199254740992,yg=-9007199254740992,sh=s=>s<yg||s>vg?NaN:Number(s);function bg(s,o){s=sh(s);var h=new Date(s*1e3);Te[o>>2]=h.getSeconds(),Te[o+4>>2]=h.getMinutes(),Te[o+8>>2]=h.getHours(),Te[o+12>>2]=h.getDate(),Te[o+16>>2]=h.getMonth(),Te[o+20>>2]=h.getFullYear()-1900,Te[o+24>>2]=h.getDay();var f=Bd(h)|0;Te[o+28>>2]=f,Te[o+36>>2]=-(h.getTimezoneOffset()*60);var g=new Date(h.getFullYear(),0,1),y=new Date(h.getFullYear(),6,1).getTimezoneOffset(),S=g.getTimezoneOffset(),C=(y!=S&&h.getTimezoneOffset()==Math.min(S,y))|0;Te[o+32>>2]=C}var wg=function(s){var o=(()=>{var h=new Date(Te[s+20>>2]+1900,Te[s+16>>2],Te[s+12>>2],Te[s+8>>2],Te[s+4>>2],Te[s>>2],0),f=Te[s+32>>2],g=h.getTimezoneOffset(),y=new Date(h.getFullYear(),0,1),S=new Date(h.getFullYear(),6,1).getTimezoneOffset(),C=y.getTimezoneOffset(),U=Math.min(C,S);if(f<0)Te[s+32>>2]=+(S!=C&&U==g);else if(f>0!=(U==g)){var $=Math.max(C,S),K=f>0?U:$;h.setTime(h.getTime()+(K-g)*6e4)}Te[s+24>>2]=h.getDay();var ae=Bd(h)|0;Te[s+28>>2]=ae,Te[s>>2]=h.getSeconds(),Te[s+4>>2]=h.getMinutes(),Te[s+8>>2]=h.getHours(),Te[s+12>>2]=h.getDate(),Te[s+16>>2]=h.getMonth(),Te[s+20>>2]=h.getYear();var he=h.getTime();return isNaN(he)?-1:he/1e3})();return BigInt(o)},Mg=(s,o,h,f)=>{var g=new Date().getFullYear(),y=new Date(g,0,1),S=new Date(g,6,1),C=y.getTimezoneOffset(),U=S.getTimezoneOffset(),$=Math.max(C,U);_e[s>>2]=$*60,Te[o>>2]=+(C!=U);var K=oe=>{var xe=oe>=0?"-":"+",et=Math.abs(oe),St=String(Math.floor(et/60)).padStart(2,"0"),xt=String(et%60).padStart(2,"0");return`UTC${xe}${St}${xt}`},ae=K(C),he=K(U);H(ae),H(he),H(qe(ae)<=16,`timezone name truncated to fit in TZNAME_MAX (${ae})`),H(qe(he)<=16,`timezone name truncated to fit in TZNAME_MAX (${he})`),U<C?(mr(ae,h,17),mr(he,f,17)):(mr(ae,f,17),mr(he,h,17))},zd=()=>performance.now(),Vd=()=>Date.now(),Sg=1,Eg=s=>s>=0&&s<=3;function Tg(s,o,h){if(o=sh(o),!Eg(s))return 28;var f;if(s===0)f=Vd();else if(Sg)f=zd();else return 52;var g=Math.round(f*1e3*1e3);return A[h>>3]=BigInt(g),0}var Eo=[],Ag=(s,o)=>{H(Array.isArray(Eo)),H(o%16==0),Eo.length=0;for(var h;h=tt[s++];){var f=String.fromCharCode(h),g=["d","f","i","p"];g.push("j"),H(g.includes(f),`Invalid character ${h}("${f}") in readEmAsmArgs! Use only [${g}], and do not specify "v" for void return argument.`);var y=h!=105;y&=h!=112,o+=y&&o%8?4:0,Eo.push(h==112?_e[o>>2]:h==106?A[o>>3]:h==105?Te[o>>2]:O[o>>3]),o+=y?8:4}return Eo},Cg=(s,o,h)=>{var f=Ag(o,h);return H(jd.hasOwnProperty(s),`No EM_ASM constant found at address ${s}.  The loaded WebAssembly file is likely out of sync with the generated JavaScript.`),jd[s](...f)},Rg=(s,o,h)=>Cg(s,o,h),Hd=()=>2147483648,Ig=()=>Hd(),Pg=(s,o)=>(H(o,"alignment argument is required"),Math.ceil(s/o)*o),Fg=s=>{var o=V.buffer,h=(s-o.byteLength+65535)/65536|0;try{return V.grow(h),de(),1}catch(f){N(`growMemory: Attempted to grow heap from ${o.byteLength} bytes to ${s} bytes, but got error: ${f}`)}},Dg=s=>{var o=tt.length;s>>>=0,H(s>o);var h=Hd();if(s>h)return N(`Cannot enlarge memory, requested ${s} bytes, but the limit is ${h} bytes!`),!1;for(var f=1;f<=4;f*=2){var g=o*(1+.2/f);g=Math.min(g,s+100663296);var y=Math.min(h,Pg(Math.max(s,g),65536)),S=Fg(y);if(S)return!0}return N(`Failed to grow the heap from ${o} bytes to ${y} bytes, not enough memory!`),!1},ah={},Lg=()=>d||"./this.program",Ys=()=>{if(!Ys.strings){var s=(typeof navigator=="object"&&navigator.language||"C").replace("-","_")+".UTF-8",o={USER:"web_user",LOGNAME:"web_user",PATH:"/",PWD:"/",HOME:"/home/web_user",LANG:s,_:Lg()};for(var h in ah)ah[h]===void 0?delete o[h]:o[h]=ah[h];var f=[];for(var h in o)f.push(`${h}=${o[h]}`);Ys.strings=f}return Ys.strings},Ug=(s,o)=>{var h=0,f=0;for(var g of Ys()){var y=o+h;_e[s+f>>2]=y,h+=mr(g,y,1/0)+1,f+=4}return 0},Ng=(s,o)=>{var h=Ys();_e[s>>2]=h.length;var f=0;for(var g of h)f+=qe(g)+1;return _e[o>>2]=f,0},Gd=0,Wd=()=>li||Gd>0,kg=s=>{ce=s,Wd()||(t.onExit?.(s),Y=!0),p(s,new zt(s))},Og=(s,o)=>{if(ce=s,Q_(),Wd()&&!o){var h=`program exited (with status: ${s}), but keepRuntimeAlive() is set (counter=${Gd}) due to an async operation, so halting execution but not exiting the runtime or preventing further async execution (you can use emscripten_force_exit, if you want to force a true shutdown)`;Ot?.(h),N(h)}kg(s)},Bg=Og;function zg(s){try{var o=qt.getStreamFromFD(s);return M.close(o),0}catch(h){if(typeof M>"u"||h.name!=="ErrnoError")throw h;return h.errno}}var Vg=(s,o,h,f)=>{for(var g=0,y=0;y<h;y++){var S=_e[o>>2],C=_e[o+4>>2];o+=8;var U=M.read(s,je,S,C,f);if(U<0)return-1;if(g+=U,U<C)break;typeof f<"u"&&(f+=U)}return g};function Hg(s,o,h,f){try{var g=qt.getStreamFromFD(s),y=Vg(g,o,h);return _e[f>>2]=y,0}catch(S){if(typeof M>"u"||S.name!=="ErrnoError")throw S;return S.errno}}function Gg(s,o,h,f){o=sh(o);try{if(isNaN(o))return 61;var g=qt.getStreamFromFD(s);return M.llseek(g,o,h),A[f>>3]=BigInt(g.position),g.getdents&&o===0&&h===0&&(g.getdents=null),0}catch(y){if(typeof M>"u"||y.name!=="ErrnoError")throw y;return y.errno}}var Wg=(s,o,h,f)=>{for(var g=0,y=0;y<h;y++){var S=_e[o>>2],C=_e[o+4>>2];o+=8;var U=M.write(s,je,S,C,f);if(U<0)return-1;if(g+=U,U<C)break;typeof f<"u"&&(f+=U)}return g};function $g(s,o,h,f){try{var g=qt.getStreamFromFD(s),y=Wg(g,o,h);return _e[f>>2]=y,0}catch(S){if(typeof M>"u"||S.name!=="ErrnoError")throw S;return S.errno}}var Xg=s=>s,jg=s=>{var o=t["_"+s];return H(o,"Cannot call unknown function "+s+", make sure it is exported"),o},qg=(s,o)=>{H(s.length>=0,"writeArrayToMemory array must have a length (should be an array or typed array)"),je.set(s,o)},To=s=>Qd(s),Yg=s=>{var o=qe(s)+1,h=To(o);return mr(s,h,o),h},$d=(s,o,h,f,g)=>{var y={string:xe=>{var et=0;return xe!=null&&xe!==0&&(et=Yg(xe)),et},array:xe=>{var et=To(xe.length);return qg(xe,et),et}};function S(xe){return o==="string"?Wn(xe):o==="boolean"?!!xe:xe}var C=jg(s),U=[],$=0;if(H(o!=="array",'Return type should not be "array".'),f)for(var K=0;K<f.length;K++){var ae=y[h[K]];ae?($===0&&($=me()),U[K]=ae(f[K])):U[K]=f[K]}var he=C(...U);function oe(xe){return $!==0&&ge($),S(xe)}return he=oe(he),he},Zg=(s,o,h,f)=>(...g)=>$d(s,o,h,g,f),Jg=(...s)=>M.createPath(...s),Kg=(...s)=>M.unlink(...s),Qg=(...s)=>M.createLazyFile(...s),ex=(...s)=>M.createDevice(...s),tx=s=>Ao(s),nx=s=>hh(s),ix=s=>{var o=me(),h=To(4),f=To(4);tf(s,h,f);var g=_e[h>>2],y=_e[f>>2],S=Wn(g);ei(g);var C;return y&&(C=Wn(y),ei(y)),ge(o),[S,C]},Xd=s=>ix(s);M.createPreloadedFile=jr,M.staticInit(),d0(),y0(),H(fi.length===10),t.noExitRuntime&&(li=t.noExitRuntime),t.preloadPlugins&&(on=t.preloadPlugins),t.print&&(L=t.print),t.printErr&&(N=t.printErr),t.wasmBinary&&(J=t.wasmBinary),ax(),t.arguments&&(u=t.arguments),t.thisProgram&&(d=t.thisProgram),H(typeof t.memoryInitializerPrefixURL>"u","Module.memoryInitializerPrefixURL option was removed, use Module.locateFile instead"),H(typeof t.pthreadMainPrefixURL>"u","Module.pthreadMainPrefixURL option was removed, use Module.locateFile instead"),H(typeof t.cdInitializerPrefixURL>"u","Module.cdInitializerPrefixURL option was removed, use Module.locateFile instead"),H(typeof t.filePackagePrefixURL>"u","Module.filePackagePrefixURL option was removed, use Module.locateFile instead"),H(typeof t.read>"u","Module.read option was removed"),H(typeof t.readAsync>"u","Module.readAsync option was removed (modify readAsync in JS)"),H(typeof t.readBinary>"u","Module.readBinary option was removed (modify readBinary in JS)"),H(typeof t.setWindowTitle>"u","Module.setWindowTitle option was removed (modify emscripten_set_window_title in JS)"),H(typeof t.TOTAL_MEMORY>"u","Module.TOTAL_MEMORY has been renamed Module.INITIAL_MEMORY"),H(typeof t.ENVIRONMENT>"u","Module.ENVIRONMENT has been deprecated. To force the environment, use the ENVIRONMENT compile-time option (for example, -sENVIRONMENT=web or -sENVIRONMENT=node)"),H(typeof t.STACK_SIZE>"u","STACK_SIZE can no longer be set at runtime.  Use -sSTACK_SIZE at link time"),H(typeof t.wasmMemory>"u","Use of `wasmMemory` detected.  Use -sIMPORTED_MEMORY to define wasmMemory externally"),H(typeof t.INITIAL_MEMORY>"u","Detected runtime INITIAL_MEMORY setting.  Use -sIMPORTED_MEMORY to define wasmMemory dynamically"),t.addRunDependency=Qe,t.removeRunDependency=Je,t.ccall=$d,t.cwrap=Zg,t.FS_createPreloadedFile=jr,t.FS_unlink=Kg,t.FS_createPath=Jg,t.FS_createDevice=ex,t.FS=M,t.FS_createDataFile=ln,t.FS_createLazyFile=Qg,t.MEMFS=ct;var rx=["writeI53ToI64","writeI53ToI64Clamped","writeI53ToI64Signaling","writeI53ToU64Clamped","writeI53ToU64Signaling","readI53FromI64","readI53FromU64","convertI32PairToI53","convertI32PairToI53Checked","convertU32PairToI53","getTempRet0","zeroMemory","withStackSave","inetPton4","inetNtop4","inetPton6","inetNtop6","readSockaddr","writeSockaddr","emscriptenLog","runMainThreadEmAsm","jstoi_q","autoResumeAudioContext","getDynCaller","dynCall","handleException","runtimeKeepalivePush","runtimeKeepalivePop","callUserCallback","maybeExit","asmjsMangle","HandleAllocator","getNativeTypeSize","addOnInit","addOnPostCtor","addOnPreMain","addOnExit","STACK_SIZE","STACK_ALIGN","POINTER_SIZE","ASSERTIONS","uleb128Encode","sigToWasmTypes","generateFuncType","convertJsFunctionToWasm","getEmptyTableSlot","updateTableMap","getFunctionAddress","addFunction","removeFunction","reallyNegative","unSign","strLen","reSign","formatString","intArrayToString","stringToAscii","stringToNewUTF8","registerKeyEventCallback","maybeCStringToJsString","findEventTarget","getBoundingClientRect","fillMouseEventData","registerMouseEventCallback","registerWheelEventCallback","registerUiEventCallback","registerFocusEventCallback","fillDeviceOrientationEventData","registerDeviceOrientationEventCallback","fillDeviceMotionEventData","registerDeviceMotionEventCallback","screenOrientation","fillOrientationChangeEventData","registerOrientationChangeEventCallback","fillFullscreenChangeEventData","registerFullscreenChangeEventCallback","JSEvents_requestFullscreen","JSEvents_resizeCanvasForFullscreen","registerRestoreOldStyle","hideEverythingExceptGivenElement","restoreHiddenElements","setLetterbox","softFullscreenResizeWebGLRenderTarget","doRequestFullscreen","fillPointerlockChangeEventData","registerPointerlockChangeEventCallback","registerPointerlockErrorEventCallback","requestPointerLock","fillVisibilityChangeEventData","registerVisibilityChangeEventCallback","registerTouchEventCallback","fillGamepadEventData","registerGamepadEventCallback","registerBeforeUnloadEventCallback","fillBatteryEventData","battery","registerBatteryEventCallback","setCanvasElementSize","getCanvasElementSize","jsStackTrace","getCallstack","convertPCtoSourceLocation","wasiRightsToMuslOFlags","wasiOFlagsToMuslOFlags","safeSetTimeout","setImmediateWrapped","safeRequestAnimationFrame","clearImmediateWrapped","registerPostMainLoop","registerPreMainLoop","getPromise","makePromise","idsToPromises","makePromiseCallback","Browser_asyncPrepareDataCounter","arraySum","addDays","getSocketFromFD","getSocketAddress","FS_mkdirTree","_setNetworkCallback","heapObjectForWebGLType","toTypedArrayIndex","webgl_enable_ANGLE_instanced_arrays","webgl_enable_OES_vertex_array_object","webgl_enable_WEBGL_draw_buffers","webgl_enable_WEBGL_multi_draw","webgl_enable_EXT_polygon_offset_clamp","webgl_enable_EXT_clip_control","webgl_enable_WEBGL_polygon_mode","emscriptenWebGLGet","computeUnpackAlignedImageSize","colorChannelsInGlTextureFormat","emscriptenWebGLGetTexPixelData","emscriptenWebGLGetUniform","webglGetUniformLocation","webglPrepareUniformLocationsBeforeFirstUse","webglGetLeftBracePos","emscriptenWebGLGetVertexAttrib","__glGetActiveAttribOrUniform","writeGLArray","registerWebGlEventCallback","runAndAbortIfError","ALLOC_NORMAL","ALLOC_STACK","allocate","writeStringToMemory","writeAsciiToMemory","demangle","stackTrace","getFunctionArgsName","createJsInvokerSignature","PureVirtualError","registerInheritedInstance","unregisterInheritedInstance","getInheritedInstanceCount","getLiveInheritedInstances","setDelayFunction","count_emval_handles"];rx.forEach(vt);var sx=["run","out","err","callMain","abort","wasmMemory","wasmExports","HEAPF32","HEAPF64","HEAP8","HEAPU8","HEAP16","HEAPU16","HEAP32","HEAPU32","HEAP64","HEAPU64","writeStackCookie","checkStackCookie","INT53_MAX","INT53_MIN","bigintToI53Checked","stackSave","stackRestore","stackAlloc","setTempRet0","ptrToString","exitJS","getHeapMax","growMemory","ENV","ERRNO_CODES","strError","DNS","Protocols","Sockets","timers","warnOnce","readEmAsmArgsArray","readEmAsmArgs","runEmAsmFunction","getExecutableName","keepRuntimeAlive","asyncLoad","alignMemory","mmapAlloc","wasmTable","getUniqueRunDependency","noExitRuntime","addOnPreRun","addOnPostRun","freeTableIndexes","functionsInTableMap","setValue","getValue","PATH","PATH_FS","UTF8Decoder","UTF8ArrayToString","UTF8ToString","stringToUTF8Array","stringToUTF8","lengthBytesUTF8","intArrayFromString","AsciiToString","UTF16Decoder","UTF16ToString","stringToUTF16","lengthBytesUTF16","UTF32ToString","stringToUTF32","lengthBytesUTF32","stringToUTF8OnStack","writeArrayToMemory","JSEvents","specialHTMLTargets","findCanvasEventTarget","currentFullscreenStrategy","restoreOldWindowedStyle","UNWIND_CACHE","ExitStatus","getEnvStrings","checkWasiClock","doReadv","doWritev","initRandomFill","randomFill","emSetImmediate","emClearImmediate_deps","emClearImmediate","promiseMap","uncaughtExceptionCount","exceptionLast","exceptionCaught","ExceptionInfo","findMatchingCatch","getExceptionMessageCommon","Browser","requestFullscreen","requestFullScreen","setCanvasSize","getUserMedia","createContext","getPreloadedImageData__data","wget","MONTH_DAYS_REGULAR","MONTH_DAYS_LEAP","MONTH_DAYS_REGULAR_CUMULATIVE","MONTH_DAYS_LEAP_CUMULATIVE","isLeapYear","ydayFromDate","SYSCALLS","preloadPlugins","FS_modeStringToFlags","FS_getMode","FS_stdin_getChar_buffer","FS_stdin_getChar","FS_readFile","FS_root","FS_mounts","FS_devices","FS_streams","FS_nextInode","FS_nameTable","FS_currentPath","FS_initialized","FS_ignorePermissions","FS_filesystems","FS_syncFSRequests","FS_readFiles","FS_lookupPath","FS_getPath","FS_hashName","FS_hashAddNode","FS_hashRemoveNode","FS_lookupNode","FS_createNode","FS_destroyNode","FS_isRoot","FS_isMountpoint","FS_isFile","FS_isDir","FS_isLink","FS_isChrdev","FS_isBlkdev","FS_isFIFO","FS_isSocket","FS_flagsToPermissionString","FS_nodePermissions","FS_mayLookup","FS_mayCreate","FS_mayDelete","FS_mayOpen","FS_checkOpExists","FS_nextfd","FS_getStreamChecked","FS_getStream","FS_createStream","FS_closeStream","FS_dupStream","FS_doSetAttr","FS_chrdev_stream_ops","FS_major","FS_minor","FS_makedev","FS_registerDevice","FS_getDevice","FS_getMounts","FS_syncfs","FS_mount","FS_unmount","FS_lookup","FS_mknod","FS_statfs","FS_statfsStream","FS_statfsNode","FS_create","FS_mkdir","FS_mkdev","FS_symlink","FS_rename","FS_rmdir","FS_readdir","FS_readlink","FS_stat","FS_fstat","FS_lstat","FS_doChmod","FS_chmod","FS_lchmod","FS_fchmod","FS_doChown","FS_chown","FS_lchown","FS_fchown","FS_doTruncate","FS_truncate","FS_ftruncate","FS_utime","FS_open","FS_close","FS_isClosed","FS_llseek","FS_read","FS_write","FS_mmap","FS_msync","FS_ioctl","FS_writeFile","FS_cwd","FS_chdir","FS_createDefaultDirectories","FS_createDefaultDevices","FS_createSpecialDirectories","FS_createStandardStreams","FS_staticInit","FS_init","FS_quit","FS_findObject","FS_analyzePath","FS_createFile","FS_forceLoadFile","FS_absolutePath","FS_createFolder","FS_createLink","FS_joinPath","FS_mmapAlloc","FS_standardizePath","TTY","PIPEFS","SOCKFS","tempFixedLengthArray","miniTempWebGLFloatBuffers","miniTempWebGLIntBuffers","GL","AL","GLUT","EGL","GLEW","IDBStore","SDL","SDL_gfx","allocateUTF8","allocateUTF8OnStack","print","printErr","jstoi_s","InternalError","BindingError","throwInternalError","throwBindingError","registeredTypes","awaitingDependencies","typeDependencies","tupleRegistrations","structRegistrations","sharedRegisterType","whenDependentTypesAreResolved","getTypeName","getFunctionName","heap32VectorToArray","requireRegisteredType","usesDestructorStack","checkArgCount","getRequiredArgCount","createJsInvoker","UnboundTypeError","GenericWireTypeSize","EmValType","EmValOptionalType","throwUnboundTypeError","ensureOverloadTable","exposePublicSymbol","replacePublicSymbol","createNamedFunction","embindRepr","registeredInstances","getBasestPointer","getInheritedInstance","registeredPointers","registerType","integerReadValueFromPointer","enumReadValueFromPointer","floatReadValueFromPointer","assertIntegerRange","readPointer","runDestructors","craftInvokerFunction","embind__requireFunction","genericPointerToWireType","constNoSmartPtrRawPointerToWireType","nonConstNoSmartPtrRawPointerToWireType","init_RegisteredPointer","RegisteredPointer","RegisteredPointer_fromWireType","runDestructor","releaseClassHandle","finalizationRegistry","detachFinalizer_deps","detachFinalizer","attachFinalizer","makeClassHandle","init_ClassHandle","ClassHandle","throwInstanceAlreadyDeleted","deletionQueue","flushPendingDeletes","delayFunction","RegisteredClass","shallowCopyInternalPointer","downcastPointer","upcastPointer","validateThis","char_0","char_9","makeLegalFunctionName","emval_freelist","emval_handles","emval_symbols","getStringOrSymbol","Emval","emval_get_global","emval_returnValue","emval_lookupTypes","emval_methodCallers","emval_addMethodCaller"];sx.forEach(Qt),t.incrementExceptionRefcount=tx,t.decrementExceptionRefcount=nx,t.getExceptionMessage=Xd;function ax(){pe("fetchSettings")}var jd={684552:()=>{typeof t<"u"&&"mjDISABLESTRING mjENABLESTRING mjFRAMESTRING mjLABELSTRING mjRNDSTRING mjTIMERSTRING mjVISSTRING".split(" ").forEach(function(s){Object.defineProperty(t,s,{get:function(){return t["get_"+s]()},set:function(o){},enumerable:!0,configurable:!0})})}},qd=re("___getTypeName"),oh=re("_malloc"),ox=re("___cxa_free_exception"),ch=re("_fflush"),ei=re("_free"),lh=re("_emscripten_stack_get_end"),cx=re("_emscripten_stack_get_base"),Yd=re("_strerror"),ve=re("_setThrew"),Zd=re("__emscripten_tempret_set"),Jd=re("_emscripten_stack_init"),lx=re("_emscripten_stack_get_free"),Kd=re("__emscripten_stack_restore"),Qd=re("__emscripten_stack_alloc"),ef=re("_emscripten_stack_get_current"),hh=re("___cxa_decrement_exception_refcount"),Ao=re("___cxa_increment_exception_refcount"),tf=re("___get_exception_message"),nf=re("___cxa_can_catch"),rf=re("___cxa_get_exception_ptr");function hx(s){qd=$e("__getTypeName",1),oh=$e("malloc",1),ox=$e("__cxa_free_exception",1),ch=$e("fflush",1),ei=$e("free",1),lh=s.emscripten_stack_get_end,cx=s.emscripten_stack_get_base,Yd=$e("strerror",1),ve=$e("setThrew",2),Zd=$e("_emscripten_tempret_set",1),Jd=s.emscripten_stack_init,lx=s.emscripten_stack_get_free,Kd=s._emscripten_stack_restore,Qd=s._emscripten_stack_alloc,ef=s.emscripten_stack_get_current,hh=$e("__cxa_decrement_exception_refcount",1),Ao=$e("__cxa_increment_exception_refcount",1),tf=$e("__get_exception_message",3),nf=$e("__cxa_can_catch",3),rf=$e("__cxa_get_exception_ptr",1)}var sf={__assert_fail:jl,__cxa_begin_catch:ql,__cxa_current_primary_exception:Yl,__cxa_end_catch:F,__cxa_find_matching_catch_2:Z,__cxa_find_matching_catch_3:Ae,__cxa_find_matching_catch_4:Le,__cxa_rethrow:ze,__cxa_rethrow_primary_exception:Ne,__cxa_throw:nt,__cxa_uncaught_exceptions:rt,__resumeException:Ke,__syscall_dup3:jm,__syscall_fcntl64:qm,__syscall_fstat64:Ym,__syscall_ioctl:Zm,__syscall_lstat64:Jm,__syscall_newfstatat:Km,__syscall_openat:Qm,__syscall_stat64:e0,_abort_js:t0,_embind_register_bigint:i0,_embind_register_bool:r0,_embind_register_class:w0,_embind_register_class_class_function:T0,_embind_register_class_constructor:A0,_embind_register_class_function:C0,_embind_register_class_property:R0,_embind_register_constant:I0,_embind_register_emval:Ud,_embind_register_enum:F0,_embind_register_enum_value:D0,_embind_register_float:U0,_embind_register_function:N0,_embind_register_integer:k0,_embind_register_memory_view:O0,_embind_register_optional:z0,_embind_register_std_string:V0,_embind_register_std_wstring:q0,_embind_register_user_type:Y0,_embind_register_void:Z0,_emscripten_throw_longjmp:J0,_emval_as:K0,_emval_as_int64:Q0,_emval_call:eg,_emval_call_method:ng,_emval_decref:ih,_emval_get_global:ig,_emval_get_method_caller:ag,_emval_get_property:og,_emval_incref:cg,_emval_is_number:lg,_emval_is_string:hg,_emval_new_array:ug,_emval_new_cstring:dg,_emval_run_destructors:fg,_emval_take_value:pg,_emval_throw:mg,_localtime_js:bg,_mktime_js:wg,_tzset_js:Mg,clock_time_get:Tg,emscripten_asm_const_int:Rg,emscripten_date_now:Vd,emscripten_get_heap_max:Ig,emscripten_get_now:zd,emscripten_resize_heap:Dg,environ_get:Ug,environ_sizes_get:Ng,exit:Bg,fd_close:zg,fd_read:Hg,fd_seek:Gg,fd_write:$g,invoke_ddd:O_,invoke_dddi:t_,invoke_dddidi:n_,invoke_ddidi:e_,invoke_di:i_,invoke_dii:$x,invoke_diii:Ex,invoke_diiii:Qx,invoke_diiiidd:Jx,invoke_diiiidi:Cx,invoke_diiiii:vx,invoke_diiiiii:Lx,invoke_diiiiiii:r_,invoke_diiiiiiiii:Fx,invoke_diiiiiiiiiiii:Dx,invoke_fiii:Y_,invoke_i:yx,invoke_id:M_,invoke_ii:fx,invoke_iid:p_,invoke_iidddd:G_,invoke_iidiii:Hx,invoke_iidiiid:zx,invoke_iidiiiiidi:Gx,invoke_iif:H_,invoke_iii:ux,invoke_iiid:Wx,invoke_iiididdddddd:Vx,invoke_iiidiiiiiiii:Bx,invoke_iiii:gx,invoke_iiiidddiiiii:a_,invoke_iiiii:Sx,invoke_iiiiid:E_,invoke_iiiiii:v_,invoke_iiiiiii:g_,invoke_iiiiiiii:f_,invoke_iiiiiiiidd:T_,invoke_iiiiiiiii:Zx,invoke_iiiiiiiiii:x_,invoke_iiiiiiiiiidddiiiiiiiii:Ox,invoke_iiiiiiiiiii:q_,invoke_iiiiiiiiiiii:Z_,invoke_iiiiiiiiiiiii:P_,invoke_iiij:__,invoke_iiji:S_,invoke_j:X_,invoke_ji:N_,invoke_jiiii:y_,invoke_jij:k_,invoke_v:mx,invoke_vi:px,invoke_vid:m_,invoke_viddd:b_,invoke_vidddd:w_,invoke_vidi:Kx,invoke_vidiii:Nx,invoke_vii:_x,invoke_viid:qx,invoke_viiddi:I_,invoke_viiddidi:R_,invoke_viiddii:s_,invoke_viidi:jx,invoke_viidii:Ax,invoke_viidiii:u_,invoke_viidiiid:l_,invoke_viidiiiii:kx,invoke_viidiiiiidi:d_,invoke_viidiiiiiiii:Ux,invoke_viii:dx,invoke_viiid:Ix,invoke_viiidd:C_,invoke_viiidi:Xx,invoke_viiididdddddd:h_,invoke_viiidiiiiiiii:c_,invoke_viiii:wx,invoke_viiiiddd:A_,invoke_viiiidi:B_,invoke_viiiifi:z_,invoke_viiiii:xx,invoke_viiiiid:Rx,invoke_viiiiii:bx,invoke_viiiiiii:Tx,invoke_viiiiiiii:Yx,invoke_viiiiiiiiii:L_,invoke_viiiiiiiiiidddiiiiiiiii:o_,invoke_viiiiiiiiiiid:Px,invoke_viiiiiiiiiiiii:D_,invoke_viiiiiiiiiiiiiii:J_,invoke_viiiiiiiiiiiiiiiiii:U_,invoke_viiiij:W_,invoke_viiij:Mx,invoke_viij:$_,invoke_viijii:j_,invoke_vij:V_,invoke_vijjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjj:F_,llvm_eh_typeid_for:Xg},gr=await ut();function ux(s,o,h){var f=me();try{return ye(s)(o,h)}catch(g){if(ge(f),!(g instanceof X))throw g;ve(1,0)}}function dx(s,o,h,f){var g=me();try{ye(s)(o,h,f)}catch(y){if(ge(g),!(y instanceof X))throw y;ve(1,0)}}function fx(s,o){var h=me();try{return ye(s)(o)}catch(f){if(ge(h),!(f instanceof X))throw f;ve(1,0)}}function px(s,o){var h=me();try{ye(s)(o)}catch(f){if(ge(h),!(f instanceof X))throw f;ve(1,0)}}function mx(s){var o=me();try{ye(s)()}catch(h){if(ge(o),!(h instanceof X))throw h;ve(1,0)}}function gx(s,o,h,f){var g=me();try{return ye(s)(o,h,f)}catch(y){if(ge(g),!(y instanceof X))throw y;ve(1,0)}}function xx(s,o,h,f,g,y){var S=me();try{ye(s)(o,h,f,g,y)}catch(C){if(ge(S),!(C instanceof X))throw C;ve(1,0)}}function _x(s,o,h){var f=me();try{ye(s)(o,h)}catch(g){if(ge(f),!(g instanceof X))throw g;ve(1,0)}}function vx(s,o,h,f,g,y){var S=me();try{return ye(s)(o,h,f,g,y)}catch(C){if(ge(S),!(C instanceof X))throw C;ve(1,0)}}function yx(s){var o=me();try{return ye(s)()}catch(h){if(ge(o),!(h instanceof X))throw h;ve(1,0)}}function bx(s,o,h,f,g,y,S){var C=me();try{ye(s)(o,h,f,g,y,S)}catch(U){if(ge(C),!(U instanceof X))throw U;ve(1,0)}}function wx(s,o,h,f,g){var y=me();try{ye(s)(o,h,f,g)}catch(S){if(ge(y),!(S instanceof X))throw S;ve(1,0)}}function Mx(s,o,h,f,g){var y=me();try{ye(s)(o,h,f,g)}catch(S){if(ge(y),!(S instanceof X))throw S;ve(1,0)}}function Sx(s,o,h,f,g){var y=me();try{return ye(s)(o,h,f,g)}catch(S){if(ge(y),!(S instanceof X))throw S;ve(1,0)}}function Ex(s,o,h,f){var g=me();try{return ye(s)(o,h,f)}catch(y){if(ge(g),!(y instanceof X))throw y;ve(1,0)}}function Tx(s,o,h,f,g,y,S,C){var U=me();try{ye(s)(o,h,f,g,y,S,C)}catch($){if(ge(U),!($ instanceof X))throw $;ve(1,0)}}function Ax(s,o,h,f,g,y){var S=me();try{ye(s)(o,h,f,g,y)}catch(C){if(ge(S),!(C instanceof X))throw C;ve(1,0)}}function Cx(s,o,h,f,g,y,S){var C=me();try{return ye(s)(o,h,f,g,y,S)}catch(U){if(ge(C),!(U instanceof X))throw U;ve(1,0)}}function Rx(s,o,h,f,g,y,S){var C=me();try{ye(s)(o,h,f,g,y,S)}catch(U){if(ge(C),!(U instanceof X))throw U;ve(1,0)}}function Ix(s,o,h,f,g){var y=me();try{ye(s)(o,h,f,g)}catch(S){if(ge(y),!(S instanceof X))throw S;ve(1,0)}}function Px(s,o,h,f,g,y,S,C,U,$,K,ae,he){var oe=me();try{ye(s)(o,h,f,g,y,S,C,U,$,K,ae,he)}catch(xe){if(ge(oe),!(xe instanceof X))throw xe;ve(1,0)}}function Fx(s,o,h,f,g,y,S,C,U,$){var K=me();try{return ye(s)(o,h,f,g,y,S,C,U,$)}catch(ae){if(ge(K),!(ae instanceof X))throw ae;ve(1,0)}}function Dx(s,o,h,f,g,y,S,C,U,$,K,ae,he){var oe=me();try{return ye(s)(o,h,f,g,y,S,C,U,$,K,ae,he)}catch(xe){if(ge(oe),!(xe instanceof X))throw xe;ve(1,0)}}function Lx(s,o,h,f,g,y,S){var C=me();try{return ye(s)(o,h,f,g,y,S)}catch(U){if(ge(C),!(U instanceof X))throw U;ve(1,0)}}function Ux(s,o,h,f,g,y,S,C,U,$,K,ae){var he=me();try{ye(s)(o,h,f,g,y,S,C,U,$,K,ae)}catch(oe){if(ge(he),!(oe instanceof X))throw oe;ve(1,0)}}function Nx(s,o,h,f,g,y){var S=me();try{ye(s)(o,h,f,g,y)}catch(C){if(ge(S),!(C instanceof X))throw C;ve(1,0)}}function kx(s,o,h,f,g,y,S,C,U){var $=me();try{ye(s)(o,h,f,g,y,S,C,U)}catch(K){if(ge($),!(K instanceof X))throw K;ve(1,0)}}function Ox(s,o,h,f,g,y,S,C,U,$,K,ae,he,oe,xe,et,St,xt,Gt,Rt,vn,rn){var En=me();try{return ye(s)(o,h,f,g,y,S,C,U,$,K,ae,he,oe,xe,et,St,xt,Gt,Rt,vn,rn)}catch(Bt){if(ge(En),!(Bt instanceof X))throw Bt;ve(1,0)}}function Bx(s,o,h,f,g,y,S,C,U,$,K,ae){var he=me();try{return ye(s)(o,h,f,g,y,S,C,U,$,K,ae)}catch(oe){if(ge(he),!(oe instanceof X))throw oe;ve(1,0)}}function zx(s,o,h,f,g,y,S){var C=me();try{return ye(s)(o,h,f,g,y,S)}catch(U){if(ge(C),!(U instanceof X))throw U;ve(1,0)}}function Vx(s,o,h,f,g,y,S,C,U,$,K,ae){var he=me();try{return ye(s)(o,h,f,g,y,S,C,U,$,K,ae)}catch(oe){if(ge(he),!(oe instanceof X))throw oe;ve(1,0)}}function Hx(s,o,h,f,g,y){var S=me();try{return ye(s)(o,h,f,g,y)}catch(C){if(ge(S),!(C instanceof X))throw C;ve(1,0)}}function Gx(s,o,h,f,g,y,S,C,U,$){var K=me();try{return ye(s)(o,h,f,g,y,S,C,U,$)}catch(ae){if(ge(K),!(ae instanceof X))throw ae;ve(1,0)}}function Wx(s,o,h,f){var g=me();try{return ye(s)(o,h,f)}catch(y){if(ge(g),!(y instanceof X))throw y;ve(1,0)}}function $x(s,o,h){var f=me();try{return ye(s)(o,h)}catch(g){if(ge(f),!(g instanceof X))throw g;ve(1,0)}}function Xx(s,o,h,f,g,y){var S=me();try{ye(s)(o,h,f,g,y)}catch(C){if(ge(S),!(C instanceof X))throw C;ve(1,0)}}function jx(s,o,h,f,g){var y=me();try{ye(s)(o,h,f,g)}catch(S){if(ge(y),!(S instanceof X))throw S;ve(1,0)}}function qx(s,o,h,f){var g=me();try{ye(s)(o,h,f)}catch(y){if(ge(g),!(y instanceof X))throw y;ve(1,0)}}function Yx(s,o,h,f,g,y,S,C,U){var $=me();try{ye(s)(o,h,f,g,y,S,C,U)}catch(K){if(ge($),!(K instanceof X))throw K;ve(1,0)}}function Zx(s,o,h,f,g,y,S,C,U){var $=me();try{return ye(s)(o,h,f,g,y,S,C,U)}catch(K){if(ge($),!(K instanceof X))throw K;ve(1,0)}}function Jx(s,o,h,f,g,y,S){var C=me();try{return ye(s)(o,h,f,g,y,S)}catch(U){if(ge(C),!(U instanceof X))throw U;ve(1,0)}}function Kx(s,o,h,f){var g=me();try{ye(s)(o,h,f)}catch(y){if(ge(g),!(y instanceof X))throw y;ve(1,0)}}function Qx(s,o,h,f,g){var y=me();try{return ye(s)(o,h,f,g)}catch(S){if(ge(y),!(S instanceof X))throw S;ve(1,0)}}function e_(s,o,h,f,g){var y=me();try{return ye(s)(o,h,f,g)}catch(S){if(ge(y),!(S instanceof X))throw S;ve(1,0)}}function t_(s,o,h,f){var g=me();try{return ye(s)(o,h,f)}catch(y){if(ge(g),!(y instanceof X))throw y;ve(1,0)}}function n_(s,o,h,f,g,y){var S=me();try{return ye(s)(o,h,f,g,y)}catch(C){if(ge(S),!(C instanceof X))throw C;ve(1,0)}}function i_(s,o){var h=me();try{return ye(s)(o)}catch(f){if(ge(h),!(f instanceof X))throw f;ve(1,0)}}function r_(s,o,h,f,g,y,S,C){var U=me();try{return ye(s)(o,h,f,g,y,S,C)}catch($){if(ge(U),!($ instanceof X))throw $;ve(1,0)}}function s_(s,o,h,f,g,y,S){var C=me();try{ye(s)(o,h,f,g,y,S)}catch(U){if(ge(C),!(U instanceof X))throw U;ve(1,0)}}function a_(s,o,h,f,g,y,S,C,U,$,K,ae){var he=me();try{return ye(s)(o,h,f,g,y,S,C,U,$,K,ae)}catch(oe){if(ge(he),!(oe instanceof X))throw oe;ve(1,0)}}function o_(s,o,h,f,g,y,S,C,U,$,K,ae,he,oe,xe,et,St,xt,Gt,Rt,vn,rn,En){var Bt=me();try{ye(s)(o,h,f,g,y,S,C,U,$,K,ae,he,oe,xe,et,St,xt,Gt,Rt,vn,rn,En)}catch(xr){if(ge(Bt),!(xr instanceof X))throw xr;ve(1,0)}}function c_(s,o,h,f,g,y,S,C,U,$,K,ae,he){var oe=me();try{ye(s)(o,h,f,g,y,S,C,U,$,K,ae,he)}catch(xe){if(ge(oe),!(xe instanceof X))throw xe;ve(1,0)}}function l_(s,o,h,f,g,y,S,C){var U=me();try{ye(s)(o,h,f,g,y,S,C)}catch($){if(ge(U),!($ instanceof X))throw $;ve(1,0)}}function h_(s,o,h,f,g,y,S,C,U,$,K,ae,he){var oe=me();try{ye(s)(o,h,f,g,y,S,C,U,$,K,ae,he)}catch(xe){if(ge(oe),!(xe instanceof X))throw xe;ve(1,0)}}function u_(s,o,h,f,g,y,S){var C=me();try{ye(s)(o,h,f,g,y,S)}catch(U){if(ge(C),!(U instanceof X))throw U;ve(1,0)}}function d_(s,o,h,f,g,y,S,C,U,$,K){var ae=me();try{ye(s)(o,h,f,g,y,S,C,U,$,K)}catch(he){if(ge(ae),!(he instanceof X))throw he;ve(1,0)}}function f_(s,o,h,f,g,y,S,C){var U=me();try{return ye(s)(o,h,f,g,y,S,C)}catch($){if(ge(U),!($ instanceof X))throw $;ve(1,0)}}function p_(s,o,h){var f=me();try{return ye(s)(o,h)}catch(g){if(ge(f),!(g instanceof X))throw g;ve(1,0)}}function m_(s,o,h){var f=me();try{ye(s)(o,h)}catch(g){if(ge(f),!(g instanceof X))throw g;ve(1,0)}}function g_(s,o,h,f,g,y,S){var C=me();try{return ye(s)(o,h,f,g,y,S)}catch(U){if(ge(C),!(U instanceof X))throw U;ve(1,0)}}function x_(s,o,h,f,g,y,S,C,U,$){var K=me();try{return ye(s)(o,h,f,g,y,S,C,U,$)}catch(ae){if(ge(K),!(ae instanceof X))throw ae;ve(1,0)}}function __(s,o,h,f){var g=me();try{return ye(s)(o,h,f)}catch(y){if(ge(g),!(y instanceof X))throw y;ve(1,0)}}function v_(s,o,h,f,g,y){var S=me();try{return ye(s)(o,h,f,g,y)}catch(C){if(ge(S),!(C instanceof X))throw C;ve(1,0)}}function y_(s,o,h,f,g){var y=me();try{return ye(s)(o,h,f,g)}catch(S){if(ge(y),!(S instanceof X))throw S;return ve(1,0),0n}}function b_(s,o,h,f,g){var y=me();try{ye(s)(o,h,f,g)}catch(S){if(ge(y),!(S instanceof X))throw S;ve(1,0)}}function w_(s,o,h,f,g,y){var S=me();try{ye(s)(o,h,f,g,y)}catch(C){if(ge(S),!(C instanceof X))throw C;ve(1,0)}}function M_(s,o){var h=me();try{return ye(s)(o)}catch(f){if(ge(h),!(f instanceof X))throw f;ve(1,0)}}function S_(s,o,h,f){var g=me();try{return ye(s)(o,h,f)}catch(y){if(ge(g),!(y instanceof X))throw y;ve(1,0)}}function E_(s,o,h,f,g,y){var S=me();try{return ye(s)(o,h,f,g,y)}catch(C){if(ge(S),!(C instanceof X))throw C;ve(1,0)}}function T_(s,o,h,f,g,y,S,C,U,$){var K=me();try{return ye(s)(o,h,f,g,y,S,C,U,$)}catch(ae){if(ge(K),!(ae instanceof X))throw ae;ve(1,0)}}function A_(s,o,h,f,g,y,S,C){var U=me();try{ye(s)(o,h,f,g,y,S,C)}catch($){if(ge(U),!($ instanceof X))throw $;ve(1,0)}}function C_(s,o,h,f,g,y){var S=me();try{ye(s)(o,h,f,g,y)}catch(C){if(ge(S),!(C instanceof X))throw C;ve(1,0)}}function R_(s,o,h,f,g,y,S,C){var U=me();try{ye(s)(o,h,f,g,y,S,C)}catch($){if(ge(U),!($ instanceof X))throw $;ve(1,0)}}function I_(s,o,h,f,g,y){var S=me();try{ye(s)(o,h,f,g,y)}catch(C){if(ge(S),!(C instanceof X))throw C;ve(1,0)}}function P_(s,o,h,f,g,y,S,C,U,$,K,ae,he){var oe=me();try{return ye(s)(o,h,f,g,y,S,C,U,$,K,ae,he)}catch(xe){if(ge(oe),!(xe instanceof X))throw xe;ve(1,0)}}function F_(s,o,h,f,g,y,S,C,U,$,K,ae,he,oe,xe,et,St,xt,Gt,Rt,vn,rn,En,Bt,xr,tv,nv,iv,rv,sv,av,ov,cv,lv,hv,uv,dv,fv,pv,mv,gv,xv,_v,vv,yv,bv,wv,Mv,Sv,Ev,Tv,Av,Cv,Rv,Iv,Pv,Fv,Dv,Lv,Uv,Nv,kv,Ov,Bv,zv,Vv,Hv,Gv,Wv,$v,Xv,jv,qv,Yv,Zv,Jv,Kv,Qv,ey,ty,ny,iy,ry,sy,ay){var oy=me();try{ye(s)(o,h,f,g,y,S,C,U,$,K,ae,he,oe,xe,et,St,xt,Gt,Rt,vn,rn,En,Bt,xr,tv,nv,iv,rv,sv,av,ov,cv,lv,hv,uv,dv,fv,pv,mv,gv,xv,_v,vv,yv,bv,wv,Mv,Sv,Ev,Tv,Av,Cv,Rv,Iv,Pv,Fv,Dv,Lv,Uv,Nv,kv,Ov,Bv,zv,Vv,Hv,Gv,Wv,$v,Xv,jv,qv,Yv,Zv,Jv,Kv,Qv,ey,ty,ny,iy,ry,sy,ay)}catch(of){if(ge(oy),!(of instanceof X))throw of;ve(1,0)}}function D_(s,o,h,f,g,y,S,C,U,$,K,ae,he,oe){var xe=me();try{ye(s)(o,h,f,g,y,S,C,U,$,K,ae,he,oe)}catch(et){if(ge(xe),!(et instanceof X))throw et;ve(1,0)}}function L_(s,o,h,f,g,y,S,C,U,$,K){var ae=me();try{ye(s)(o,h,f,g,y,S,C,U,$,K)}catch(he){if(ge(ae),!(he instanceof X))throw he;ve(1,0)}}function U_(s,o,h,f,g,y,S,C,U,$,K,ae,he,oe,xe,et,St,xt,Gt){var Rt=me();try{ye(s)(o,h,f,g,y,S,C,U,$,K,ae,he,oe,xe,et,St,xt,Gt)}catch(vn){if(ge(Rt),!(vn instanceof X))throw vn;ve(1,0)}}function N_(s,o){var h=me();try{return ye(s)(o)}catch(f){if(ge(h),!(f instanceof X))throw f;return ve(1,0),0n}}function k_(s,o,h){var f=me();try{return ye(s)(o,h)}catch(g){if(ge(f),!(g instanceof X))throw g;return ve(1,0),0n}}function O_(s,o,h){var f=me();try{return ye(s)(o,h)}catch(g){if(ge(f),!(g instanceof X))throw g;ve(1,0)}}function B_(s,o,h,f,g,y,S){var C=me();try{ye(s)(o,h,f,g,y,S)}catch(U){if(ge(C),!(U instanceof X))throw U;ve(1,0)}}function z_(s,o,h,f,g,y,S){var C=me();try{ye(s)(o,h,f,g,y,S)}catch(U){if(ge(C),!(U instanceof X))throw U;ve(1,0)}}function V_(s,o,h){var f=me();try{ye(s)(o,h)}catch(g){if(ge(f),!(g instanceof X))throw g;ve(1,0)}}function H_(s,o,h){var f=me();try{return ye(s)(o,h)}catch(g){if(ge(f),!(g instanceof X))throw g;ve(1,0)}}function G_(s,o,h,f,g,y){var S=me();try{return ye(s)(o,h,f,g,y)}catch(C){if(ge(S),!(C instanceof X))throw C;ve(1,0)}}function W_(s,o,h,f,g,y){var S=me();try{ye(s)(o,h,f,g,y)}catch(C){if(ge(S),!(C instanceof X))throw C;ve(1,0)}}function $_(s,o,h,f){var g=me();try{ye(s)(o,h,f)}catch(y){if(ge(g),!(y instanceof X))throw y;ve(1,0)}}function X_(s){var o=me();try{return ye(s)()}catch(h){if(ge(o),!(h instanceof X))throw h;return ve(1,0),0n}}function j_(s,o,h,f,g,y){var S=me();try{ye(s)(o,h,f,g,y)}catch(C){if(ge(S),!(C instanceof X))throw C;ve(1,0)}}function q_(s,o,h,f,g,y,S,C,U,$,K){var ae=me();try{return ye(s)(o,h,f,g,y,S,C,U,$,K)}catch(he){if(ge(ae),!(he instanceof X))throw he;ve(1,0)}}function Y_(s,o,h,f){var g=me();try{return ye(s)(o,h,f)}catch(y){if(ge(g),!(y instanceof X))throw y;ve(1,0)}}function Z_(s,o,h,f,g,y,S,C,U,$,K,ae){var he=me();try{return ye(s)(o,h,f,g,y,S,C,U,$,K,ae)}catch(oe){if(ge(he),!(oe instanceof X))throw oe;ve(1,0)}}function J_(s,o,h,f,g,y,S,C,U,$,K,ae,he,oe,xe,et){var St=me();try{ye(s)(o,h,f,g,y,S,C,U,$,K,ae,he,oe,xe,et)}catch(xt){if(ge(St),!(xt instanceof X))throw xt;ve(1,0)}}var af;function K_(){Jd(),ie()}function uh(){if(Xe>0){Ve=uh;return}if(K_(),se(),Xe>0){Ve=uh;return}function s(){H(!af),af=!0,t.calledRun=!0,!Y&&(Ye(),gt?.(t),t.onRuntimeInitialized?.(),Ct("onRuntimeInitialized"),H(!t._main,'compiled without a main, but one is present. if you added it from JS, use Module["onRuntimeInitialized"]'),Ie())}t.setStatus?(t.setStatus("Running..."),setTimeout(()=>{setTimeout(()=>t.setStatus(""),1),s()},1)):s(),we()}function Q_(){var s=L,o=N,h=!1;L=N=f=>{h=!0};try{ch(0),["stdout","stderr"].forEach(f=>{var g=M.analyzePath("/dev/"+f);if(g){var y=g.object,S=y.rdev,C=gn.ttys[S];C?.output?.length&&(h=!0)}})}catch{}L=s,N=o,h&&Zn("stdio streams had content in them that was not flushed. you should set EXIT_RUNTIME to 1 (see the Emscripten FAQ), or make sure to emit a newline when you printf etc.")}function ev(){if(t.preInit)for(typeof t.preInit=="function"&&(t.preInit=[t.preInit]);t.preInit.length>0;)t.preInit.shift()();Ct("preInit")}ev(),uh(),le?e=t:e=new Promise((s,o)=>{gt=s,Ot=o});for(let s of Object.keys(t))s in i||Object.defineProperty(i,s,{configurable:!0,get(){Ee(`Access to module property ('${s}') is no longer possible via the module constructor argument; Instead, use the result of the module constructor.`)}});return e}),yy=vy});function dh(i){let e=new TextDecoder().decode(i.subarray(0,Math.min(i.length,80))).trimStart(),t=i.length>=84?new DataView(i.buffer,i.byteOffset,i.byteLength).getUint32(80,!0):-1,n=i.length>=84&&84+t*50===i.length;if(!n&&e.startsWith("solid"))return uy(new TextDecoder().decode(i));if(!n)throw new Error(`not an STL file (${i.length} bytes)`);let r=new DataView(i.buffer,i.byteOffset,i.byteLength),a=new Float32Array(t*9),c=84;for(let l=0;l<t;l++){c+=12;for(let u=0;u<9;u++)a[l*9+u]=r.getFloat32(c,!0),c+=4;c+=2}return a}function uy(i){let e=[],t=/vertex\s+([-+0-9.eE]+)\s+([-+0-9.eE]+)\s+([-+0-9.eE]+)/g,n;for(;n=t.exec(i);)e.push(Number(n[1]),Number(n[2]),Number(n[3]));if(e.length%9!==0)throw new Error("ASCII STL: vertex count is not a multiple of 3");return Float32Array.from(e)}function Co(i){let e=i.length/9,t=new ArrayBuffer(84+e*50),n=new DataView(t);new Uint8Array(t,0,80).set(new TextEncoder().encode("RunMachine body-frame mesh").subarray(0,80)),n.setUint32(80,e,!0);let r=84;for(let a=0;a<e;a++){let c=i.subarray(a*9,a*9+9),l=c[3]-c[0],u=c[4]-c[1],d=c[5]-c[2],p=c[6]-c[0],m=c[7]-c[1],x=c[8]-c[2],_=u*x-d*m,b=d*p-l*x,E=l*m-u*p,w=Math.hypot(_,b,E)||1;_/=w,b/=w,E/=w,n.setFloat32(r,_,!0),n.setFloat32(r+4,b,!0),n.setFloat32(r+8,E,!0),r+=12;for(let v=0;v<9;v++)n.setFloat32(r,c[v],!0),r+=4;n.setUint16(r,0,!0),r+=2}return new Uint8Array(t)}function Ro(i){if(i.length<9)throw new Error("empty mesh");let e=[1/0,1/0,1/0],t=[-1/0,-1/0,-1/0];for(let u=0;u<i.length;u+=3)for(let d=0;d<3;d++){let p=i[u+d];p<e[d]&&(e[d]=p),p>t[d]&&(t[d]=p)}let n=[(e[0]+t[0])/2,(e[1]+t[1])/2,(e[2]+t[2])/2],r=0,a=[0,0,0];for(let u=0;u<i.length;u+=9){let d=i[u]-n[0],p=i[u+1]-n[1],m=i[u+2]-n[2],x=i[u+3]-n[0],_=i[u+4]-n[1],b=i[u+5]-n[2],E=i[u+6]-n[0],w=i[u+7]-n[1],v=i[u+8]-n[2],D=(d*(_*v-b*w)-p*(x*v-b*E)+m*(x*w-_*E))/6;r+=D,a[0]+=D*(d+x+E)/4,a[1]+=D*(p+_+w)/4,a[2]+=D*(m+b+v)/4}let c=Math.abs(r),l=c>1e-12?[n[0]+a[0]/r,n[1]+a[1]/r,n[2]+a[2]/r]:n;return{positions:i,bbox:{min:e,max:t},centroid:l,volume:c}}function Io(i,e,t){let n=new Float32Array(i.length);for(let r=0;r<i.length;r+=3)n[r]=(i[r]-e[0])*t,n[r+1]=(i[r+1]-e[1])*t,n[r+2]=(i[r+2]-e[2])*t;return n}function cf(i,e){let[t,n,r]=i,[a,c,l]=e,u=[[t,n,r],[a,n,r],[a,c,r],[t,c,r],[t,n,l],[a,n,l],[a,c,l],[t,c,l]],d=[[0,3,2,1],[4,5,6,7],[0,1,5,4],[1,2,6,5],[2,3,7,6],[3,0,4,7]],p=[];for(let[m,x,_,b]of d)p.push(...u[m],...u[x],...u[_],...u[m],...u[_],...u[b]);return Float32Array.from(p)}function lf(i,e,t,n,r=24){let a=[],c=(e+1)%3,l=(e+2)%3,u=(p,m)=>{let x=[0,0,0];return x[e]=i[e]+m,x[c]=i[c]+t*Math.cos(p),x[l]=i[l]+t*Math.sin(p),x},d=(p,m)=>{let x=[...i];return x[e]+=p,x};for(let p=0;p<r;p++){let m=p/r*Math.PI*2,x=(p+1)/r*Math.PI*2,_=u(m,-n/2),b=u(x,-n/2),E=u(m,n/2),w=u(x,n/2);a.push(..._,...b,...w,..._,...w,...E),a.push(...d(n/2,!1),...E,...w),a.push(...d(-n/2,!0),...b,..._)}return Float32Array.from(a)}function hf(i,e,t=24){let n=[],r=Math.max(3,Math.floor(t/2)),a=(c,l)=>{let u=l/r*Math.PI,d=c/t*Math.PI*2;return[i[0]+e*Math.sin(u)*Math.cos(d),i[1]+e*Math.sin(u)*Math.sin(d),i[2]+e*Math.cos(u)]};for(let c=0;c<r;c++)for(let l=0;l<t;l++){let u=a(l,c),d=a(l+1,c),p=a(l+1,c+1),m=a(l,c+1);c>0&&n.push(...u,...m,...p),c<r-1&&n.push(...u,...p,...d)}return Float32Array.from(n)}function fh(i){return i.kind==="box"?cf(i.min,i.max):i.kind==="cylinder"?lf(i.center,i.axis==="x"?0:i.axis==="y"?1:2,i.r,i.length):hf(i.center,i.r)}var pi=(i,e)=>[i[0]+e[0],i[1]+e[1],i[2]+e[2]],Xt=(i,e)=>[i[0]-e[0],i[1]-e[1],i[2]-e[2]],Yt=(i,e)=>[i[0]*e,i[1]*e,i[2]*e],ph=(i,e)=>i[0]*e[0]+i[1]*e[1]+i[2]*e[2],Jr=(i,e)=>[i[1]*e[2]-i[2]*e[1],i[2]*e[0]-i[0]*e[2],i[0]*e[1]-i[1]*e[0]],hn=i=>Math.hypot(i[0],i[1],i[2]);function Xn(i){let e=hn(i);if(e<1e-12)throw new Error("zero-length vector");return[i[0]/e,i[1]/e,i[2]/e]}var mi=[1,0,0,0];function _r(i,e){let[t,n,r,a]=i,[c,l,u,d]=e;return[t*c-n*l-r*u-a*d,t*l+n*c+r*d-a*u,t*u-n*d+r*c+a*l,t*d+n*u-r*l+a*c]}function Zr(i,e){let t=Xn(i),n=Math.sin(e/2);return[Math.cos(e/2),t[0]*n,t[1]*n,t[2]*n]}function dy(i){let e=a=>a*Math.PI/180,t=Zr([1,0,0],e(i[0])),n=Zr([0,1,0],e(i[1])),r=Zr([0,0,1],e(i[2]));return _r(_r(t,n),r)}function Ii(i,e){let[t,n,r,a]=i,c=[n,r,a],l=Jr(c,e),u=Jr(c,l);return[e[0]+2*(t*l[0]+u[0]),e[1]+2*(t*l[1]+u[1]),e[2]+2*(t*l[2]+u[2])]}function mh(i){let e=Xn(i),t=[0,0,1],n=ph(t,e);if(n>1-1e-9)return[1,0,0,0];if(n<-1+1e-9)return[0,1,0,0];let r=Jr(t,e);return Zr(r,Math.acos(Math.max(-1,Math.min(1,n))))}var Po=i=>[i[0],-i[1],-i[2],-i[3]];function Fo(i){let e=Math.hypot(i[0],i[1],i[2],i[3])||1;return[i[0]/e,i[1]/e,i[2]/e,i[3]/e]}function Zs(i){return i?.quat?Fo(i.quat):i?.euler?dy(i.euler):mi}function st(i){if(!Number.isFinite(i))throw new Error(`not a finite number: ${i}`);let e=Number(i.toFixed(7)).toString();return e.includes("e")?i.toFixed(9).replace(/0+$/,"").replace(/\.$/,""):e==="-0"?"0":e}var Vt=i=>i.map(st).join(" ");var dn=.001,uf=1e3,fy=.8,df=5e-4;function Js(i){if(i.primitive)return`primitive:${JSON.stringify(i.primitive)}`;let e=i.key??i.fileId??i.url;if(!e)throw new Error("a mesh reference needs a key, fileId, url or primitive");return e}var it=i=>i.replace(/[&<>"']/g,e=>({"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&apos;"})[e]),un=i=>i.replace(/[^A-Za-z0-9_.:-]/g,"_");function vr(i,e){let t=(i??e).trim().replace(/^#/,""),n=t.length===3?t.split("").map(a=>a+a).join(""):t;if(!/^[0-9a-fA-F]{6}$/.test(n))throw new Error(`colour must be #rrggbb (got "${i}")`);let r=Number.parseInt(n,16);return`${st((r>>16&255)/255)} ${st((r>>8&255)/255)} ${st((r&255)/255)} 1`}function Do(i){return`${st(i??fy)} 0.005 0.0001`}var gh=class{assets=[];bodies=[];contact=[];equality=[];actuators=[];sensors=[]};function xh(i){let{world:e,meshes:t}=i;if(e.version!=="world/1")throw new Error(`unknown world version "${e.version}" (this runtime reads world/1)`);let n=[],r=new gh,a=[],c=[],l=[],u=[],d=[],p=e.timestep??.001;if(!(p>0&&p<=.01))throw new Error(`timestep must be in (0, 0.01] seconds (got ${p})`);let m=e.gravity??[0,0,-9.81],x=e.ground!==null,_=e.ground?.size??10,b={sky:e.look?.sky??"#dfe9f3",floor:e.ground?.color??e.look?.floor??"#cfd6dc",groundSize:_,ground:x},E=(P,T)=>{if(P.primitive)return Ro(fh(P.primitive));let B=Js(P),I=t[B];if(!I)throw new Error(`${T}: mesh "${B}" was not given to the compiler`);let R=I instanceof Float32Array?I:dh(I);return Ro(R)};x?(r.bodies.push(`<geom name="floor" type="plane" size="${st(_)} ${st(_)} 0.1" friction="${Do(e.ground?.friction??1)}" rgba="${vr(b.floor,"#cfd6dc")}"/>`),a.push({name:"world",ref:"world",origin:[0,0,0],geoms:[{kind:"plane",size:[_,_,0],pos:[0,0,0],quat:mi,color:b.floor}]})):a.push({name:"world",ref:"world",origin:[0,0,0],geoms:[]});let w=new Set;for(let P of e.objects??[]){if(w.has(P.id))throw new Error(`two objects share the id "${P.id}"`);w.add(P.id),py(P,r,a,d,E,n)}let v=new Set;for(let P of e.machines??[]){if(v.has(P.id))throw new Error(`two machines share the id "${P.id}"`);if(v.add(P.id),w.has(P.id))throw new Error(`machine "${P.id}" has the same id as an object`);xy(P,r,a,c,l,u,d,E,n)}let D=e.metrics??[],L=new Set(a.map(P=>P.ref)),N=new Set(c.map(P=>P.ref));for(let P of D){if(P.kind==="time_to"){if(!D.some(T=>T.id===P.target))throw new Error(`metric "${P.id}": time_to needs another metric id as target (got "${P.target}")`)}else if(P.kind==="joint_angle"){if(!N.has(P.target))throw new Error(`metric "${P.id}": unknown joint "${P.target}" (joints: ${[...N].join(", ")||"none"})`)}else if(!L.has(P.target))throw new Error(`metric "${P.id}": unknown body "${P.target}" (bodies: ${[...L].filter(T=>T!=="world").join(", ")||"none"})`);if(P.kind==="touched"&&(!P.other||!L.has(P.other)))throw new Error(`metric "${P.id}": touched needs \`other\` naming a body`);if(P.kind==="inside"&&!P.region)throw new Error(`metric "${P.id}": inside needs a region {min, max}`)}return{mjcf:['<mujoco model="runmachine">','  <compiler angle="radian" autolimits="true"/>',`  <option timestep="${st(p)}" gravity="${Vt(m)}" integrator="implicitfast"/>`,"  <default>",`    <geom condim="3" friction="${Do(void 0)}" solref="0.01 1"/>`,'    <joint armature="0.00001"/>',"  </default>","  <asset>",...r.assets.map(P=>`    ${P}`),"  </asset>","  <worldbody>",...r.bodies.map(P=>`    ${P}`),"  </worldbody>","  <contact>",...r.contact.map(P=>`    ${P}`),"  </contact>","  <equality>",...r.equality.map(P=>`    ${P}`),"  </equality>","  <actuator>",...r.actuators.map(P=>`    ${P}`),"  </actuator>","  <sensor>",...r.sensors.map(P=>`    ${P}`),"  </sensor>","</mujoco>",""].join(`
`),files:d,bodies:a,joints:c,actuators:l,sensors:u,metrics:D,timestep:p,gravity:m,look:b,warnings:n}}function py(i,e,t,n,r,a){let c=`obj.${un(i.id)}`,l=Zs(i.pose),u=i.pose?.pos??[0,0,0],d=i.material?.color??"#5c7cfa",p=Do(i.material?.friction),m=i.material?.mass!==void 0?` mass="${st(Math.max(df,i.material.mass/1e3))}"`:` density="${st(i.material?.density??uf)}"`,x=[],_=[],b=i.shape,E=u,w=l;switch(b.kind){case"box":_.push(`<geom type="box" size="${Vt(Yt(b.size,.5))}"${m} friction="${p}" rgba="${vr(d,"#5c7cfa")}"/>`),x.push({kind:"box",size:b.size,pos:[0,0,0],quat:mi,color:d});break;case"sphere":_.push(`<geom type="sphere" size="${st(b.r)}"${m} friction="${p}" rgba="${vr(d,"#5c7cfa")}"/>`),x.push({kind:"sphere",size:[b.r,0,0],pos:[0,0,0],quat:mi,color:d});break;case"cylinder":_.push(`<geom type="cylinder" size="${st(b.r)} ${st(b.h/2)}"${m} friction="${p}" rgba="${vr(d,"#5c7cfa")}"/>`),x.push({kind:"cylinder",size:[b.r,b.h,0],pos:[0,0,0],quat:mi,color:d});break;case"capsule":_.push(`<geom type="capsule" size="${st(b.r)} ${st(b.h/2)}"${m} friction="${p}" rgba="${vr(d,"#5c7cfa")}"/>`),x.push({kind:"capsule",size:[b.r,b.h,0],pos:[0,0,0],quat:mi,color:d});break;case"ramp":{let D=Math.atan2(b.h,b.l),L=Math.hypot(b.l,b.h),N=Zr([0,1,0],-D),z=[b.l/2,0,b.h/2],P=Ii(N,[0,0,-.02/2]);E=pi(u,Ii(l,pi(z,P))),w=_r(l,N),_.push(`<geom type="box" size="${Vt([L/2,b.w/2,.02/2])}"${m} friction="${p}" rgba="${vr(d,"#8d99ae")}"/>`),x.push({kind:"box",size:[L,b.w,.02],pos:[0,0,0],quat:mi,color:d}),i.fixed||a.push(`ramp "${i.id}" is not fixed \u2014 it will slide; set fixed:true for a real ramp`);break}case"mesh":{let v=r(b.mesh,`object "${i.id}"`),D=b.scale??1,L=Io(v.positions,v.centroid,D),N=`${c}.stl`;n.push({name:N,bytes:Co(L)}),e.assets.push(`<mesh name="${it(c)}" file="${it(N)}"/>`),E=pi(u,Ii(l,Yt(v.centroid,D)));let z=b.collider??"hull";ff(_,x,z,{name:c,data:v,local:L,k:D,color:d,fr:p,massAttr:m,warnings:a,what:`object "${i.id}"`});break}default:throw new Error(`object "${i.id}": unknown shape "${b.kind}"`)}e.bodies.push(`<body name="${it(c)}" pos="${Vt(E)}" quat="${Vt(w)}">`),i.fixed||e.bodies.push(`  <freejoint name="${it(c)}.free"/>`);for(let v of _)e.bodies.push(`  ${v}`);e.bodies.push("</body>"),t.push({name:c,ref:i.id,object:i.id,origin:E,geoms:x})}function ff(i,e,t,n){let r=u=>`<geom type="mesh" mesh="${it(n.name)}"${n.massAttr} friction="${n.fr}" rgba="${vr(n.color,"#5c7cfa")}"${u?' contype="0" conaffinity="0" group="1"':""}/>`,a=typeof t=="string"?t:t.kind;if(a==="hull"||a==="exact"){a==="exact"&&n.warnings.push(`${n.what}: exact colliders are not built yet \u2014 using the convex hull`),i.push(r(!1)),e.push({kind:"mesh",positions:n.local,color:n.color});return}if(a==="none"){i.push(r(!0)),e.push({kind:"mesh",positions:n.local,color:n.color,visualOnly:!0});return}let c=typeof t=="string"?gy(t,n.data,n.k,n.what,n.warnings):my(t,n.data.centroid,n.k);if(!c){i.push(r(!1)),e.push({kind:"mesh",positions:n.local,color:n.color});return}i.push(r(!0)),e.push({kind:"mesh",positions:n.local,color:n.color,visualOnly:!0});let l=c;if(l.kind==="cylinder"){let u=mh(l.axis);i.push(`<geom type="cylinder" size="${st(l.radius)} ${st(l.length/2)}" pos="${Vt(l.center)}" quat="${Vt(u)}" mass="0" friction="${n.fr}" rgba="0 0 0 0"/>`)}else if(l.kind==="sphere")i.push(`<geom type="sphere" size="${st(l.radius)}" pos="${Vt(l.center)}" mass="0" friction="${n.fr}" rgba="0 0 0 0"/>`);else if(l.kind==="box")i.push(`<geom type="box" size="${Vt(Yt(l.size,.5))}" pos="${Vt(l.center)}" quat="${Vt(l.quat??mi)}" mass="0" friction="${n.fr}" rgba="0 0 0 0"/>`);else if(l.kind==="capsule"){let u=mh(l.axis);i.push(`<geom type="capsule" size="${st(l.radius)} ${st(Math.max(0,l.length/2-l.radius))}" pos="${Vt(l.center)}" quat="${Vt(u)}" mass="0" friction="${n.fr}" rgba="0 0 0 0"/>`)}}function my(i,e,t){let n=Yt(Xt(i.center,e),t);return i.kind==="cylinder"?{kind:"cylinder",axis:i.axis,radius:i.radius*t,length:i.length*t,center:n}:i.kind==="sphere"?{kind:"sphere",radius:i.radius*t,center:n}:{kind:"box",size:Yt(i.size,t),center:n,quat:i.quat}}function gy(i,e,t,n,r){let a=Xt(e.bbox.max,e.bbox.min),c=Yt(pi(e.bbox.min,e.bbox.max),.5),l=Yt(Xt(c,e.centroid),t);if(i==="box")return{kind:"box",size:Yt(a,t),center:l};let u=(d,p)=>Math.abs(d-p)<=.03*Math.max(d,p);if(i==="sphere")return u(a[0],a[1])&&u(a[1],a[2])?{kind:"sphere",radius:Math.max(...a)/2*t,center:l}:(r.push(`${n}: not round enough for a sphere collider (extents ${a.map(d=>d.toFixed(2)).join(" \xD7 ")}) \u2014 using the convex hull`),null);for(let d=0;d<3;d++){let p=(d+1)%3,m=(d+2)%3;if(u(a[p],a[m])&&!u(a[d],a[p])){let x=[0,0,0];return x[d]=1,{kind:i,axis:x,radius:a[p]/2*t,length:a[d]*t,center:l}}}return u(a[0],a[1])&&u(a[1],a[2])?{kind:i,axis:[0,0,1],radius:a[0]/2*t,length:a[2]*t,center:l}:(r.push(`${n}: no axis with a round cross-section for a ${i} collider (extents ${a.map(d=>d.toFixed(2)).join(" \xD7 ")}) \u2014 using the convex hull`),null)}function xy(i,e,t,n,r,a,c,l,u){let d=i.package;if(d?.version!=="machine/1")throw new Error(`machine "${i.id}": unknown package version "${d?.version}" (this runtime reads machine/1)`);if(d.units!=="mm")throw new Error(`machine "${i.id}": units must be mm (got "${d.units}")`);let p=un(i.id),m=Zs(i.pose),x=i.pose?.pos??[0,0,0],_=new Map;for(let T of d.parts){if(_.has(T.id))throw new Error(`machine "${i.id}": two parts share the id "${T.id}"`);if(!T.bodies?.length)throw new Error(`machine "${i.id}": part "${T.id}" has no bodies`);let B=T.bodies.map(Y=>({body:Y,data:l(Y.mesh,`machine "${i.id}" part "${T.id}" body "${Y.name}"`)})),I=0,R=[0,0,0],W=[1/0,1/0,1/0],j=[-1/0,-1/0,-1/0];for(let{data:Y}of B){let ce=Y.volume>0?Y.volume:1e-9;I+=ce;for(let H=0;H<3;H++)R[H]+=Y.centroid[H]*ce,W[H]=Math.min(W[H],Y.bbox.min[H]),j[H]=Math.max(j[H],Y.bbox.max[H])}let J=[R[0]/I,R[1]/I,R[2]/I];_.set(T.id,{machine:i.id,part:T,name:`${p}.${un(T.id)}`,centroid:J,bboxMin:W,bboxMax:j,volume:I,bodyMeshes:B,children:[],parentEdge:null})}let b=(T,B)=>{let I=_.get(T);if(!I)throw new Error(`machine "${i.id}": ${B} names an unknown part "${T}" (parts: ${[..._.keys()].join(", ")})`);return I},E=new Set;for(let T of d.joints){if(E.has(T.id))throw new Error(`machine "${i.id}": two joints share the id "${T.id}"`);if(E.add(T.id),T.parent===T.child)throw new Error(`machine "${i.id}": joint "${T.id}" connects part "${T.child}" to itself`);if(T.parent!=="world"&&b(T.parent,`joint "${T.id}"`),b(T.child,`joint "${T.id}"`),(T.type==="hinge"||T.type==="slide")&&!T.axis)throw new Error(`machine "${i.id}": joint "${T.id}" (${T.type}) needs an axis {point, dir}`);if(T.type==="ball"&&!T.axis)throw new Error(`machine "${i.id}": joint "${T.id}" (ball) needs an axis {point} for its anchor`);T.axis&&Xn(T.axis.dir)}for(let T of d.ground)b(T,"ground");let w=new Set,v=[];for(let T of d.ground){let B=b(T,"ground");B.parentEdge||(B.parentEdge={parent:null,joint:null,synthetic:"weld"},v.push(B))}for(let T of d.joints){if(T.parent!=="world")continue;let B=b(T.child,`joint "${T.id}"`);if(B.parentEdge){u.push(`machine "${i.id}": joint "${T.id}" to the world is extra \u2014 "${T.child}" is already attached; it becomes a constraint`);continue}B.parentEdge={parent:null,joint:T},w.add(T.id),v.push(B)}let D=T=>{for(let B of d.joints){if(w.has(B.id)||B.parent==="world")continue;let I=null,R=!0;B.parent===T.part.id?I=b(B.child,`joint "${B.id}"`):B.child===T.part.id&&(I=b(B.parent,`joint "${B.id}"`),R=!1),!(!I||I.parentEdge)&&(R||u.push(`machine "${i.id}": joint "${B.id}" is written child\u2192parent for the tree; the axis is kept, the sign of its angle follows the tree`),I.parentEdge={parent:T,joint:B},T.children.push({part:I,joint:B}),w.add(B.id),v.push(I))}};for(;v.length;)D(v.shift());for(let T of _.values())if(!T.parentEdge)for(T.parentEdge={parent:null,joint:null,synthetic:"free"},v.push(T);v.length;)D(v.shift());let L=d.joints.filter(T=>!w.has(T.id)&&T.parent!=="world"),N=d.joints.filter(T=>!w.has(T.id)&&T.parent==="world"),z=(T,B)=>{let I="  ".repeat(B),R=!T.parentEdge?.parent,W=R?pi(x,Ii(m,Yt(T.centroid,dn))):Yt(Xt(T.centroid,(T.parentEdge?.parent).centroid),dn),j=R?m:mi;e.bodies.push(`${I}<body name="${it(T.name)}" pos="${Vt(W)}" quat="${Vt(j)}">`);let J=T.parentEdge,Y=J?.joint??null;if(J?.synthetic==="free"||Y&&Y.type==="free"){let ie=Y?`${p}.${un(Y.id)}`:`${T.name}.free`;e.bodies.push(`${I}  <freejoint name="${it(ie)}"/>`),n.push({name:ie,ref:Y?`${i.id}.${Y.id}`:`${i.id}.${T.part.id}.free`,type:"free",body:T.name,machine:i.id})}else if(Y&&Y.type!=="fixed"){let ie=`${p}.${un(Y.id)}`,we=Y.axis,X=Yt(Xt(we.point,T.centroid),dn),Be=[`name="${it(ie)}"`,`type="${Y.type}"`,`pos="${Vt(X)}"`];if(Y.type!=="ball"&&Be.push(`axis="${Vt(Xn(we.dir))}"`),Y.range&&Y.type!=="ball"){let ht=Y.type==="slide"?dn:Math.PI/180;Be.push(`range="${st(Y.range[0]*ht)} ${st(Y.range[1]*ht)}"`)}if(Y.damping!==void 0&&Be.push(`damping="${st(Y.damping)}"`),Y.friction!==void 0&&Be.push(`frictionloss="${st(Y.friction)}"`),Y.armature!==void 0&&Be.push(`armature="${st(Y.armature)}"`),Y.spring){let ht=Y.type==="slide"?dn:Math.PI/180;Be.push(`stiffness="${st(Y.spring.stiffness)}"`,`springref="${st(Y.spring.rest*ht)}"`)}e.bodies.push(`${I}  <joint ${Be.join(" ")}/>`),n.push({name:ie,ref:`${i.id}.${Y.id}`,type:Y.type,body:T.name,machine:i.id})}let ce=[],H=T.part.material??{},Me=Do(H.friction);for(let{body:ie,data:we}of T.bodyMeshes){let X=`${T.name}.${un(ie.nodeId)}`,Be=Io(we.positions,T.centroid,dn),ht=`${X}.stl`;c.push({name:ht,bytes:Co(Be)}),e.assets.push(`<mesh name="${it(X)}" file="${it(ht)}"/>`);let At=T.volume>0?(we.volume>0?we.volume:1e-9)/T.volume:1/T.bodyMeshes.length,Ut=H.mass!==void 0?` mass="${st(Math.max(df*At,H.mass/1e3*At))}"`:` density="${st(H.density??uf)}"`,Ct=[];ff(Ct,ce,ie.collider??"hull",{name:X,data:we,local:Be,k:dn,color:ie.color??T.part.color??"#9aa5b1",fr:Me,massAttr:Ut,warnings:u,what:`machine "${i.id}" part "${T.part.id}" body "${ie.name}"`});for(let re of Ct)e.bodies.push(`${I}  ${re}`)}for(let ie of d.sensors)!("part"in ie)||ie.part!==T.part.id||_y(ie,T,p,i.id,e,a,I+"  ");for(let ie of T.children)z(ie.part,B+1);e.bodies.push(`${I}</body>`),t.push({name:T.name,ref:`${i.id}.${T.part.id}`,machine:i.id,part:T.part.id,origin:R?W:pi(x,Ii(m,Yt(T.centroid,dn))),geoms:ce})};for(let T of _.values())T.parentEdge?.parent||z(T,0);for(let T of L){let B=b(T.parent,`joint "${T.id}"`),I=b(T.child,`joint "${T.id}"`);if(T.type==="fixed")e.equality.push(`<weld name="${it(`${p}.${un(T.id)}`)}" body1="${it(B.name)}" body2="${it(I.name)}"/>`);else{let R=Yt(Xt(T.axis.point,B.centroid),dn);e.equality.push(`<connect name="${it(`${p}.${un(T.id)}`)}" body1="${it(B.name)}" body2="${it(I.name)}" anchor="${Vt(R)}"/>`),u.push(`machine "${i.id}": joint "${T.id}" closes a loop \u2014 modelled as a ball at its anchor (H3)`)}e.contact.push(`<exclude body1="${it(B.name)}" body2="${it(I.name)}"/>`)}for(let T of N){let B=b(T.child,`joint "${T.id}"`);e.equality.push(`<weld name="${it(`${p}.${un(T.id)}`)}" body1="world" body2="${it(B.name)}"/>`)}for(let T of d.sensors){if(T.type!=="encoder")continue;if(!E.has(T.joint))throw new Error(`machine "${i.id}": sensor "${T.id}" names an unknown joint "${T.joint}"`);let B=`${p}.${un(T.joint)}`,I=`${p}.${un(T.id)}`;e.sensors.push(`<jointpos name="${it(I)}.pos" joint="${it(B)}"/>`,`<jointvel name="${it(I)}.vel" joint="${it(B)}"/>`),a.push({name:I,ref:`${i.id}.${T.id}`,machine:i.id,type:"encoder",mj:[`${I}.pos`,`${I}.vel`]})}let P=new Map(d.joints.map(T=>[T.id,T]));for(let T of d.motors){let B=P.get(T.joint);if(!B)throw new Error(`machine "${i.id}": motor "${T.id}" names an unknown joint "${T.joint}"`);if(B.type!=="hinge"&&B.type!=="slide")throw new Error(`machine "${i.id}": motor "${T.id}" can only drive a hinge or a slide (joint "${B.id}" is ${B.type})`);if(!(T.maxTorque>0))throw new Error(`machine "${i.id}": motor "${T.id}" needs maxTorque > 0`);let I=`${p}.${un(B.id)}`,R=`${p}.${un(T.id)}`,W=B.type==="slide"?dn:1,j=T.maxTorque,J=(T.maxSpeed??(B.type==="slide"?500:30))*W,Y=T.gear??1;if(T.kind==="velocity"){let ce=j/Math.max(.3*J,1e-6);e.actuators.push(`<velocity name="${it(R)}" joint="${it(I)}" kv="${st(ce)}" gear="${st(Y)}" ctrlrange="${st(-J)} ${st(J)}" forcerange="${st(-j)} ${st(j)}"/>`)}else if(T.kind==="position"){let ce=j/(B.type==="slide"?.01:.2),H=ce*.05,Me=B.range?[B.range[0]*(B.type==="slide"?dn:Math.PI/180),B.range[1]*(B.type==="slide"?dn:Math.PI/180)]:[-Math.PI*4,Math.PI*4];e.actuators.push(`<position name="${it(R)}" joint="${it(I)}" kp="${st(ce)}" kv="${st(H)}" gear="${st(Y)}" ctrlrange="${st(Me[0])} ${st(Me[1])}" forcerange="${st(-j)} ${st(j)}"/>`)}else e.actuators.push(`<motor name="${it(R)}" joint="${it(I)}" gear="${st(Y)}" ctrlrange="${st(-j)} ${st(j)}"/>`);r.push({name:R,ref:`${i.id}.${T.id}`,machine:i.id,joint:`${i.id}.${B.id}`,kind:T.kind,maxTorque:j,maxSpeed:J})}for(let T of d.gears){let B=P.get(T.driver),I=P.get(T.driven);if(!B||!I)throw new Error(`machine "${i.id}": gear "${T.id}" names an unknown joint (${B?T.driven:T.driver})`);if(B.type!=="hinge"||I.type!=="hinge")throw new Error(`machine "${i.id}": gear "${T.id}" couples two hinges (got ${B.type} and ${I.type})`);let R=T.ratio??(T.teeth?-T.teeth[0]/T.teeth[1]:NaN);if(!Number.isFinite(R)||R===0)throw new Error(`machine "${i.id}": gear "${T.id}" needs teeth [driver, driven] or a non-zero ratio`);e.equality.push(`<joint name="${it(`${p}.${un(T.id)}`)}" joint1="${it(`${p}.${un(I.id)}`)}" joint2="${it(`${p}.${un(B.id)}`)}" polycoef="0 ${st(R)} 0 0 0"/>`);let W=b(B.child,`gear "${T.id}"`),j=b(I.child,`gear "${T.id}"`);W!==j&&e.contact.push(`<exclude body1="${it(W.name)}" body2="${it(j.name)}"/>`)}}function _y(i,e,t,n,r,a,c){let l=`${t}.${un(i.id)}`,u=`${n}.${i.id}`;switch(i.type){case"camera":{let d=Xn(i.look),p=i.up?Xn(i.up):[0,0,1];Math.abs(ph(d,p))>.999&&(p=Math.abs(d[2])<.9?[0,0,1]:[0,1,0]);let m=Yt(d,-1),x=Xn(Jr(p,m)),_=Xn(Jr(m,x)),b=Yt(Xt(i.position,e.centroid),dn);r.bodies.push(`${c}<camera name="${it(l)}" pos="${Vt(b)}" xyaxes="${Vt(x)} ${Vt(_)}" fovy="${st(i.fov)}"/>`),a.push({name:l,ref:u,machine:n,type:"camera",mj:[],camera:{name:l,width:i.width,height:i.height,fov:i.fov}});return}case"imu":{let d=Yt(Xt(i.position??e.centroid,e.centroid),dn);r.bodies.push(`${c}<site name="${it(l)}.site" pos="${Vt(d)}" size="0.002"/>`),r.sensors.push(`<accelerometer name="${it(l)}.acc" site="${it(l)}.site"/>`,`<gyro name="${it(l)}.gyro" site="${it(l)}.site"/>`),a.push({name:l,ref:u,machine:n,type:"imu",mj:[`${l}.acc`,`${l}.gyro`]});return}case"rangefinder":{let d=Yt(Xt(i.position,e.centroid),dn);r.bodies.push(`${c}<site name="${it(l)}.site" pos="${Vt(d)}" zaxis="${Vt(Xn(i.dir))}" size="0.002"/>`),r.sensors.push(`<rangefinder name="${it(l)}.range" site="${it(l)}.site" cutoff="${st(i.maxRange??10)}"/>`),a.push({name:l,ref:u,machine:n,type:"rangefinder",mj:[`${l}.range`]});return}case"touch":{let d=Yt(Xt(e.bboxMax,e.bboxMin),.5*dn),p=Yt(Xt(Yt(pi(e.bboxMin,e.bboxMax),.5),e.centroid),dn);r.bodies.push(`${c}<site name="${it(l)}.site" type="box" pos="${Vt(p)}" size="${Vt(d.map(m=>m+.001))}"/>`),r.sensors.push(`<touch name="${it(l)}.touch" site="${it(l)}.site"/>`),a.push({name:l,ref:u,machine:n,type:"touch",mj:[`${l}.touch`]});return}case"gps":{r.sensors.push(`<framepos name="${it(l)}.pos" objtype="body" objname="${it(e.name)}"/>`,`<framelinvel name="${it(l)}.vel" objtype="body" objname="${it(e.name)}"/>`),a.push({name:l,ref:u,machine:n,type:"gps",mj:[`${l}.pos`,`${l}.vel`]});return}default:return}}var gf=["qpos","qvel","act","qacc_warmstart","ctrl","qfrc_applied"],_h=null;async function _f(i={}){return i.module?i.module:(_h||(_h=(async()=>{let e=(await Promise.resolve().then(()=>(mf(),pf))).default,t=i.wasmUrl?{locateFile:(n,r)=>n.endsWith(".wasm")?i.wasmUrl:r+n}:void 0;return e(t)})()),_h)}var Ks=class i{constructor(e){this.mj=e;this.version="3.15.0"}name="mujoco";version;timestep=.001;model=null;data=null;vfs=null;bodyIds=new Map;bodyList=[];jointIds=new Map;jointList=[];actIds=new Map;sensorIds=new Map;camIds=new Map;geomBody=new Int32Array(0);static async create(e={}){return new i(await _f(e))}m(){if(!this.model)throw new Error("no world loaded");return this.model}d(){if(!this.data)throw new Error("no world loaded");return this.data}load(e){this.dispose();let t=this.mj,n=new t.MjVFS;for(let m of e.files)n.addBuffer(m.name,m.bytes);let r;try{r=t.parseXMLString(e.mjcf,n)}catch(m){throw n.delete(),new Error(`the world did not parse: ${xf(m)}`)}let a;try{a=t.mj_compile(r,n)}catch(m){throw r.delete(),n.delete(),new Error(`the world did not compile: ${xf(m)}`)}r.delete(),this.vfs=n,this.model=a,this.data=new t.MjData(a),this.timestep=a.opt.timestep;let c=t.mjtObj,l=(m,x)=>{let _=[];for(let b=0;b<x;b++)_.push(t.mj_id2name(a,m,b)||`#${b}`);return _};this.bodyList=l(c.mjOBJ_BODY.value,a.nbody),this.bodyIds=new Map(this.bodyList.map((m,x)=>[m,x])),this.jointList=l(c.mjOBJ_JOINT.value,a.njnt),this.jointIds=new Map(this.jointList.map((m,x)=>[m,x]));let u=l(c.mjOBJ_ACTUATOR.value,a.nu);this.actIds=new Map(u.map((m,x)=>[m,x]));let d=l(c.mjOBJ_SENSOR.value,a.nsensor);this.sensorIds=new Map(d.map((m,x)=>[m,x]));let p=l(c.mjOBJ_CAMERA.value,a.ncam);return this.camIds=new Map(p.map((m,x)=>[m,x])),this.geomBody=Int32Array.from(a.geom_bodyid),t.mj_forward(a,this.data),{bodies:this.bodyList.slice(),joints:this.jointList.slice(),actuators:u,sensors:d,cameras:p,nq:a.nq,nv:a.nv}}reset(){this.mj.mj_resetData(this.m(),this.d()),this.mj.mj_forward(this.m(),this.d())}step(e){let t=this.m(),n=this.d();for(let r=0;r<e;r++)this.mj.mj_step(t,n)}forward(){this.mj.mj_forward(this.m(),this.d())}time(){return this.d().time}bodyNames(){return this.bodyList}poses(e){let t=this.d(),n=t.xpos,r=t.xquat,a=this.bodyList.length;for(let c=0;c<a;c++)e[c*7]=n[c*3],e[c*7+1]=n[c*3+1],e[c*7+2]=n[c*3+2],e[c*7+3]=r[c*4],e[c*7+4]=r[c*4+1],e[c*7+5]=r[c*4+2],e[c*7+6]=r[c*4+3]}bid(e){let t=this.bodyIds.get(e);if(t===void 0)throw new Error(`unknown body "${e}" (bodies: ${this.bodyList.filter(n=>n!=="world").join(", ")})`);return t}bodyPos(e){let t=this.bid(e),n=this.d().xpos;return[n[t*3],n[t*3+1],n[t*3+2]]}bodyQuat(e){let t=this.bid(e),n=this.d().xquat;return[n[t*4],n[t*4+1],n[t*4+2],n[t*4+3]]}jid(e){let t=this.jointIds.get(e);if(t===void 0)throw new Error(`unknown joint "${e}" (joints: ${this.jointList.join(", ")})`);return t}joint(e){let t=this.jid(e),n=this.m(),r=this.d(),a=n.jnt_qposadr[t],c=n.jnt_dofadr[t];return{q:r.qpos[a],qd:r.qvel[c]}}jointNames(){return this.jointList}jointQ(e){let t=this.m(),r=this.d().qpos,a=t.jnt_qposadr;for(let c=0;c<this.jointList.length;c++)e[c]=r[a[c]]}setCtrl(e,t){let n=this.actIds.get(e);if(n===void 0)throw new Error(`unknown motor "${e}" (motors: ${[...this.actIds.keys()].join(", ")||"none"})`);if(!Number.isFinite(t))throw new Error(`motor "${e}": the target must be a finite number (got ${t})`);let a=this.m().actuator_ctrlrange,c=a[n*2],l=a[n*2+1],u=c<l?Math.min(l,Math.max(c,t)):t;this.d().ctrl[n]=u}ctrl(e){let t=this.actIds.get(e);if(t===void 0)throw new Error(`unknown motor "${e}"`);return this.d().ctrl[t]}sensor(e){let t=this.sensorIds.get(e);if(t===void 0)throw new Error(`unknown sensor "${e}"`);let n=this.m(),r=n.sensor_adr[t],a=n.sensor_dim[t];return this.d().sensordata.slice(r,r+a)}cameraPose(e){let t=this.camIds.get(e);if(t===void 0)throw new Error(`unknown camera "${e}" (cameras: ${[...this.camIds.keys()].join(", ")||"none"})`);let n=this.d(),r=this.m(),a=n.cam_xpos,c=n.cam_xmat;return{pos:[a[t*3],a[t*3+1],a[t*3+2]],mat:Array.from(c.subarray(t*9,t*9+9)),fovy:r.cam_fovy[t]}}contacts(){let t=this.d().contact,n=[];try{let r=t.size();for(let a=0;a<r;a++){let c=t.get(a);if(!c)continue;let l=c.pos;n.push({a:this.bodyList[this.geomBody[c.geom1]],b:this.bodyList[this.geomBody[c.geom2]],dist:c.dist,pos:[l[0],l[1],l[2]]})}}finally{t.delete()}return n}applyForce(e,t,n){let r=this.bid(e);this.mj.mj_applyFT(this.m(),this.d(),[...t],[0,0,0],[...n],r,this.d().qfrc_applied)}clearForces(){this.d().qfrc_applied.fill(0)}save(){let e=this.d(),t=gf.map(c=>e[c]),n=1+t.reduce((c,l)=>c+l.length,0),r=new Float64Array(n);r[0]=e.time;let a=1;for(let c of t)r.set(c,a),a+=c.length;return r}restore(e){let t=this.d(),n=1;for(let r of gf){let a=t[r];if(n+a.length>e.length)throw new Error("restore: the saved state is from another world");a.set(e.subarray(n,n+a.length)),n+=a.length}t.time=e[0],this.mj.mj_forward(this.m(),t)}dispose(){this.data?.delete(),this.model?.delete(),this.vfs?.delete(),this.data=null,this.model=null,this.vfs=null,this.bodyIds.clear(),this.jointIds.clear(),this.actIds.clear(),this.sensorIds.clear(),this.camIds.clear(),this.bodyList=[],this.jointList=[]}};function xf(i){return(i instanceof Error?i.message:typeof i=="string"?i:typeof i=="number"?`engine error code ${i}`:(()=>{try{return JSON.stringify(i)}catch{return String(i)}})()).replace(/^MuJoCo Error:\s*/i,"").trim()}var Qr=class{constructor(e,t=.001){this.traj=e;this.timestep=t}name="recorded";version="1";timestep;t=0;world=null;load(e){return this.world=e,{bodies:this.traj.bodies.slice(),joints:this.traj.joints.slice(),actuators:[],sensors:[],cameras:[],nq:0,nv:0}}reset(){this.t=0}step(e){this.t+=e*this.timestep}seek(e){this.t=Math.max(0,e)}time(){return this.t}duration(){return(this.traj.samples-1)/this.traj.rate}sampleIndex(){let e=Math.round(this.t*this.traj.rate);return Math.max(0,Math.min(this.traj.samples-1,e))}bodyNames(){return this.traj.bodies}poses(e){let n=this.sampleIndex()*this.traj.stride+1;e.set(this.traj.data.subarray(n,n+this.traj.bodies.length*7))}bodyPos(e){let t=this.traj.bodies.indexOf(e);if(t<0)throw new Error(`unknown body "${e}"`);let n=this.sampleIndex()*this.traj.stride+1+t*7,r=this.traj.data;return[r[n],r[n+1],r[n+2]]}bodyQuat(e){let t=this.traj.bodies.indexOf(e);if(t<0)throw new Error(`unknown body "${e}"`);let n=this.sampleIndex()*this.traj.stride+1+t*7+3,r=this.traj.data;return[r[n],r[n+1],r[n+2],r[n+3]]}joint(e){let t=this.traj.joints.indexOf(e);if(t<0)throw new Error(`unknown joint "${e}"`);let n=this.sampleIndex(),r=l=>this.traj.data[l*this.traj.stride+1+this.traj.bodies.length*7+t],a=r(n),c=n>0?(a-r(n-1))*this.traj.rate:0;return{q:a,qd:c}}jointNames(){return this.traj.joints}jointQ(e){let t=this.sampleIndex()*this.traj.stride+1+this.traj.bodies.length*7;e.set(this.traj.data.subarray(t,t+this.traj.joints.length))}get hasCamera(){return!!this.traj.camera&&this.traj.camera.length>=7}cameraAt(){let e=this.traj.camera;if(!e||e.length<7)return null;let t=Math.min(this.sampleIndex(),e.length/7-1)*7;return{pos:[e[t],e[t+1],e[t+2]],look:[e[t+3],e[t+4],e[t+5]],fov:e[t+6]}}setCtrl(){}ctrl(){return 0}sensor(e){throw new Error(`a recording has no live sensors ("${e}")`)}cameraPose(e){throw this.world?.sensors.find(n=>n.camera?.name===e)?new Error("camera poses are not recorded yet"):new Error(`unknown camera "${e}"`)}contacts(){return[]}applyForce(){}save(){return Float64Array.of(this.t)}restore(e){this.t=e[0]??0}dispose(){this.world=null}};function vh(i){let e=i.camera&&i.camera.length?i.camera:null,t=e?{v:2,bodies:i.bodies,joints:i.joints,rate:i.rate,stride:i.stride,samples:i.samples,camera:e.length}:{v:1,bodies:i.bodies,joints:i.joints,rate:i.rate,stride:i.stride,samples:i.samples},n=new TextEncoder().encode(JSON.stringify(t)),r=new Uint8Array(4+n.length+i.data.byteLength+(e?e.byteLength:0));return new DataView(r.buffer).setUint32(0,n.length,!0),r.set(n,4),r.set(new Uint8Array(i.data.buffer,i.data.byteOffset,i.data.byteLength),4+n.length),e&&r.set(new Uint8Array(e.buffer,e.byteOffset,e.byteLength),4+n.length+i.data.byteLength),r}var Ph=(i,e,t)=>{if(!e.has(i))throw TypeError("Cannot "+t)},k=(i,e,t)=>(Ph(i,e,"read from private field"),t?t.call(i):e.get(i)),De=(i,e,t)=>{if(e.has(i))throw TypeError("Cannot add the same private member more than once");e instanceof WeakSet?e.add(i):e.set(i,t)},pt=(i,e,t,n)=>(Ph(i,e,"write to private field"),n?n.call(i,t):e.set(i,t),t),Ge=(i,e,t)=>(Ph(i,e,"access private method"),t),yf=class{constructor(i){this.value=i}},Fh=class{constructor(i){this.value=i}},bf=i=>i<256?1:i<65536?2:i<1<<24?3:i<2**32?4:i<2**40?5:6,by=i=>{if(i<127)return 1;if(i<16383)return 2;if(i<(1<<21)-1)return 3;if(i<(1<<28)-1)return 4;if(i<2**35-1)return 5;if(i<2**42-1)return 6;throw new Error("EBML VINT size not supported "+i)},es=(i,e,t)=>{let n=0;for(let r=e;r<t;r++){let a=Math.floor(r/8),c=i[a],l=7-(r&7),u=(c&1<<l)>>l;n<<=1,n|=u}return n},wy=(i,e,t,n)=>{for(let r=e;r<t;r++){let a=Math.floor(r/8),c=i[a],l=7-(r&7);c&=~(1<<l),c|=(n&1<<t-r-1)>>t-r-1<<l,i[a]=c}},vE=Symbol("isTarget"),Xo=class{},Dh=class extends Xo{constructor(){super(...arguments),this.buffer=null}},wf=class extends Xo{constructor(i){if(super(),this.options=i,typeof i!="object")throw new TypeError("StreamTarget requires an options object to be passed to its constructor.");if(i.onData){if(typeof i.onData!="function")throw new TypeError("options.onData, when provided, must be a function.");if(i.onData.length<2)throw new TypeError("options.onData, when provided, must be a function that takes in at least two arguments (data and position). Ignoring the position argument, which specifies the byte offset at which the data is to be written, can lead to broken outputs.")}if(i.onHeader&&typeof i.onHeader!="function")throw new TypeError("options.onHeader, when provided, must be a function.");if(i.onCluster&&typeof i.onCluster!="function")throw new TypeError("options.onCluster, when provided, must be a function.");if(i.chunked!==void 0&&typeof i.chunked!="boolean")throw new TypeError("options.chunked, when provided, must be a boolean.");if(i.chunkSize!==void 0&&(!Number.isInteger(i.chunkSize)||i.chunkSize<1024))throw new TypeError("options.chunkSize, when provided, must be an integer and not smaller than 1024.")}},My=class extends Xo{constructor(i,e){if(super(),this.stream=i,this.options=e,!(i instanceof FileSystemWritableFileStream))throw new TypeError("FileSystemWritableFileStreamTarget requires a FileSystemWritableFileStream instance.");if(e!==void 0&&typeof e!="object")throw new TypeError("FileSystemWritableFileStreamTarget's options, when provided, must be an object.");if(e&&e.chunkSize!==void 0&&(!Number.isInteger(e.chunkSize)||e.chunkSize<=0))throw new TypeError("options.chunkSize, when provided, must be a positive integer")}},qi,Pt,yh,Mf,bh,Sf,wh,Ef,Lo,Mh,Sh,Tf,Af=class{constructor(){De(this,yh),De(this,bh),De(this,wh),De(this,Lo),De(this,Sh),this.pos=0,De(this,qi,new Uint8Array(8)),De(this,Pt,new DataView(k(this,qi).buffer)),this.offsets=new WeakMap,this.dataOffsets=new WeakMap}seek(i){this.pos=i}writeEBMLVarInt(i,e=by(i)){let t=0;switch(e){case 1:k(this,Pt).setUint8(t++,128|i);break;case 2:k(this,Pt).setUint8(t++,64|i>>8),k(this,Pt).setUint8(t++,i);break;case 3:k(this,Pt).setUint8(t++,32|i>>16),k(this,Pt).setUint8(t++,i>>8),k(this,Pt).setUint8(t++,i);break;case 4:k(this,Pt).setUint8(t++,16|i>>24),k(this,Pt).setUint8(t++,i>>16),k(this,Pt).setUint8(t++,i>>8),k(this,Pt).setUint8(t++,i);break;case 5:k(this,Pt).setUint8(t++,8|i/2**32&7),k(this,Pt).setUint8(t++,i>>24),k(this,Pt).setUint8(t++,i>>16),k(this,Pt).setUint8(t++,i>>8),k(this,Pt).setUint8(t++,i);break;case 6:k(this,Pt).setUint8(t++,4|i/2**40&3),k(this,Pt).setUint8(t++,i/2**32|0),k(this,Pt).setUint8(t++,i>>24),k(this,Pt).setUint8(t++,i>>16),k(this,Pt).setUint8(t++,i>>8),k(this,Pt).setUint8(t++,i);break;default:throw new Error("Bad EBML VINT size "+e)}this.write(k(this,qi).subarray(0,t))}writeEBML(i){if(i!==null)if(i instanceof Uint8Array)this.write(i);else if(Array.isArray(i))for(let e of i)this.writeEBML(e);else if(this.offsets.set(i,this.pos),Ge(this,Lo,Mh).call(this,i.id),Array.isArray(i.data)){let e=this.pos,t=i.size===-1?1:i.size??4;i.size===-1?Ge(this,yh,Mf).call(this,255):this.seek(this.pos+t);let n=this.pos;if(this.dataOffsets.set(i,n),this.writeEBML(i.data),i.size!==-1){let r=this.pos-n,a=this.pos;this.seek(e),this.writeEBMLVarInt(r,t),this.seek(a)}}else if(typeof i.data=="number"){let e=i.size??bf(i.data);this.writeEBMLVarInt(e),Ge(this,Lo,Mh).call(this,i.data,e)}else typeof i.data=="string"?(this.writeEBMLVarInt(i.data.length),Ge(this,Sh,Tf).call(this,i.data)):i.data instanceof Uint8Array?(this.writeEBMLVarInt(i.data.byteLength,i.size),this.write(i.data)):i.data instanceof yf?(this.writeEBMLVarInt(4),Ge(this,bh,Sf).call(this,i.data.value)):i.data instanceof Fh&&(this.writeEBMLVarInt(8),Ge(this,wh,Ef).call(this,i.data.value))}};qi=new WeakMap;Pt=new WeakMap;yh=new WeakSet;Mf=function(i){k(this,Pt).setUint8(0,i),this.write(k(this,qi).subarray(0,1))};bh=new WeakSet;Sf=function(i){k(this,Pt).setFloat32(0,i,!1),this.write(k(this,qi).subarray(0,4))};wh=new WeakSet;Ef=function(i){k(this,Pt).setFloat64(0,i,!1),this.write(k(this,qi))};Lo=new WeakSet;Mh=function(i,e=bf(i)){let t=0;switch(e){case 6:k(this,Pt).setUint8(t++,i/2**40|0);case 5:k(this,Pt).setUint8(t++,i/2**32|0);case 4:k(this,Pt).setUint8(t++,i>>24);case 3:k(this,Pt).setUint8(t++,i>>16);case 2:k(this,Pt).setUint8(t++,i>>8);case 1:k(this,Pt).setUint8(t++,i);break;default:throw new Error("Bad UINT size "+e)}this.write(k(this,qi).subarray(0,t))};Sh=new WeakSet;Tf=function(i){this.write(new Uint8Array(i.split("").map(e=>e.charCodeAt(0))))};var Uo,Er,ha,No,Eh,Sy=class extends Af{constructor(i){super(),De(this,No),De(this,Uo,void 0),De(this,Er,new ArrayBuffer(2**16)),De(this,ha,new Uint8Array(k(this,Er))),pt(this,Uo,i)}write(i){Ge(this,No,Eh).call(this,this.pos+i.byteLength),k(this,ha).set(i,this.pos),this.pos+=i.byteLength}finalize(){Ge(this,No,Eh).call(this,this.pos),k(this,Uo).buffer=k(this,Er).slice(0,this.pos)}};Uo=new WeakMap;Er=new WeakMap;ha=new WeakMap;No=new WeakSet;Eh=function(i){let e=k(this,Er).byteLength;for(;e<i;)e*=2;if(e===k(this,Er).byteLength)return;let t=new ArrayBuffer(e),n=new Uint8Array(t);n.set(k(this,ha),0),pt(this,Er,t),pt(this,ha,n)};var ts,gi,xi,yr,ga=class extends Af{constructor(i){super(),this.target=i,De(this,ts,!1),De(this,gi,void 0),De(this,xi,void 0),De(this,yr,void 0)}write(i){if(!k(this,ts))return;let e=this.pos;if(e<k(this,xi)){if(e+i.byteLength<=k(this,xi))return;i=i.subarray(k(this,xi)-e),e=0}let t=e+i.byteLength-k(this,xi),n=k(this,gi).byteLength;for(;n<t;)n*=2;if(n!==k(this,gi).byteLength){let r=new Uint8Array(n);r.set(k(this,gi),0),pt(this,gi,r)}k(this,gi).set(i,e-k(this,xi)),pt(this,yr,Math.max(k(this,yr),e+i.byteLength))}startTrackingWrites(){pt(this,ts,!0),pt(this,gi,new Uint8Array(2**10)),pt(this,xi,this.pos),pt(this,yr,this.pos)}getTrackedWrites(){if(!k(this,ts))throw new Error("Can't get tracked writes since nothing was tracked.");let e={data:k(this,gi).subarray(0,k(this,yr)-k(this,xi)),start:k(this,xi),end:k(this,yr)};return pt(this,gi,void 0),pt(this,ts,!1),e}};ts=new WeakMap;gi=new WeakMap;xi=new WeakMap;yr=new WeakMap;var Ey=2**24,Ty=2,br,ss,ia,Qs,Di,kn,zo,Th,Lh,Cf,Uh,Rf,ra,Vo,Nh=class extends ga{constructor(i,e){super(i),De(this,zo),De(this,Lh),De(this,Uh),De(this,ra),De(this,br,[]),De(this,ss,0),De(this,ia,void 0),De(this,Qs,void 0),De(this,Di,void 0),De(this,kn,[]),pt(this,ia,e),pt(this,Qs,i.options?.chunked??!1),pt(this,Di,i.options?.chunkSize??Ey)}write(i){super.write(i),k(this,br).push({data:i.slice(),start:this.pos}),this.pos+=i.byteLength}flush(){if(k(this,br).length===0)return;let i=[],e=[...k(this,br)].sort((t,n)=>t.start-n.start);i.push({start:e[0].start,size:e[0].data.byteLength});for(let t=1;t<e.length;t++){let n=i[i.length-1],r=e[t];r.start<=n.start+n.size?n.size=Math.max(n.size,r.start+r.data.byteLength-n.start):i.push({start:r.start,size:r.data.byteLength})}for(let t of i){t.data=new Uint8Array(t.size);for(let n of k(this,br))t.start<=n.start&&n.start<t.start+t.size&&t.data.set(n.data,n.start-t.start);if(k(this,Qs))Ge(this,zo,Th).call(this,t.data,t.start),Ge(this,ra,Vo).call(this);else{if(k(this,ia)&&t.start<k(this,ss))throw new Error("Internal error: Monotonicity violation.");this.target.options.onData?.(t.data,t.start),pt(this,ss,t.start+t.data.byteLength)}}k(this,br).length=0}finalize(){k(this,Qs)&&Ge(this,ra,Vo).call(this,!0)}};br=new WeakMap;ss=new WeakMap;ia=new WeakMap;Qs=new WeakMap;Di=new WeakMap;kn=new WeakMap;zo=new WeakSet;Th=function(i,e){let t=k(this,kn).findIndex(l=>l.start<=e&&e<l.start+k(this,Di));t===-1&&(t=Ge(this,Uh,Rf).call(this,e));let n=k(this,kn)[t],r=e-n.start,a=i.subarray(0,Math.min(k(this,Di)-r,i.byteLength));n.data.set(a,r);let c={start:r,end:r+a.byteLength};if(Ge(this,Lh,Cf).call(this,n,c),n.written[0].start===0&&n.written[0].end===k(this,Di)&&(n.shouldFlush=!0),k(this,kn).length>Ty){for(let l=0;l<k(this,kn).length-1;l++)k(this,kn)[l].shouldFlush=!0;Ge(this,ra,Vo).call(this)}a.byteLength<i.byteLength&&Ge(this,zo,Th).call(this,i.subarray(a.byteLength),e+a.byteLength)};Lh=new WeakSet;Cf=function(i,e){let t=0,n=i.written.length-1,r=-1;for(;t<=n;){let a=Math.floor(t+(n-t+1)/2);i.written[a].start<=e.start?(t=a+1,r=a):n=a-1}for(i.written.splice(r+1,0,e),(r===-1||i.written[r].end<e.start)&&r++;r<i.written.length-1&&i.written[r].end>=i.written[r+1].start;)i.written[r].end=Math.max(i.written[r].end,i.written[r+1].end),i.written.splice(r+1,1)};Uh=new WeakSet;Rf=function(i){let t={start:Math.floor(i/k(this,Di))*k(this,Di),data:new Uint8Array(k(this,Di)),written:[],shouldFlush:!1};return k(this,kn).push(t),k(this,kn).sort((n,r)=>n.start-r.start),k(this,kn).indexOf(t)};ra=new WeakSet;Vo=function(i=!1){for(let e=0;e<k(this,kn).length;e++){let t=k(this,kn)[e];if(!(!t.shouldFlush&&!i)){for(let n of t.written){if(k(this,ia)&&t.start+n.start<k(this,ss))throw new Error("Internal error: Monotonicity violation.");this.target.options.onData?.(t.data.subarray(n.start,n.end),t.start+n.start),pt(this,ss,t.start+n.end)}k(this,kn).splice(e--,1)}}};var Ay=class extends Nh{constructor(i,e){super(new wf({onData:(t,n)=>i.stream.write({type:"write",data:t,position:n}),chunked:!0,chunkSize:i.options?.chunkSize}),e)}},ds=1,ua=2,Ho=3,Cy=1,Ry=2,Iy=17,Py=2**15,sa=2**13,vf="https://github.com/Vanilagy/webm-muxer",If=6,Pf=5,Fy=["strict","offset","permissive"],at,We,da,fa,Fi,fs,ns,Tr,ps,Yi,as,os,vi,xa,cs,Xi,ji,wr,aa,oa,ls,hs,Go,pa,ca,Ah,Ff,Ch,Df,kh,Lf,Oh,Uf,Bh,Nf,zh,kf,Vh,Of,jo,Hh,qo,Gh,Wh,Bf,Mr,is,Sr,rs,Rh,zf,Ih,Vf,ea,ko,ta,Oo,$h,Hf,_i,Pi,us,ma,la,Wo,Xh,Gf,$o,jh,na,Bo,Wf=class{constructor(i){De(this,Ah),De(this,Ch),De(this,kh),De(this,Oh),De(this,Bh),De(this,zh),De(this,Vh),De(this,jo),De(this,qo),De(this,Wh),De(this,Mr),De(this,Sr),De(this,Rh),De(this,Ih),De(this,ea),De(this,ta),De(this,$h),De(this,_i),De(this,us),De(this,la),De(this,Xh),De(this,$o),De(this,na),De(this,at,void 0),De(this,We,void 0),De(this,da,void 0),De(this,fa,void 0),De(this,Fi,void 0),De(this,fs,void 0),De(this,ns,void 0),De(this,Tr,void 0),De(this,ps,void 0),De(this,Yi,void 0),De(this,as,void 0),De(this,os,void 0),De(this,vi,void 0),De(this,xa,void 0),De(this,cs,0),De(this,Xi,[]),De(this,ji,[]),De(this,wr,[]),De(this,aa,void 0),De(this,oa,void 0),De(this,ls,-1),De(this,hs,-1),De(this,Go,-1),De(this,pa,void 0),De(this,ca,!1),Ge(this,Ah,Ff).call(this,i),pt(this,at,{type:"webm",firstTimestampBehavior:"strict",...i}),this.target=i.target;let e=!!k(this,at).streaming;if(i.target instanceof Dh)pt(this,We,new Sy(i.target));else if(i.target instanceof wf)pt(this,We,new Nh(i.target,e));else if(i.target instanceof My)pt(this,We,new Ay(i.target,e));else throw new Error(`Invalid target: ${i.target}`);Ge(this,Ch,Df).call(this)}addVideoChunk(i,e,t){if(!(i instanceof EncodedVideoChunk))throw new TypeError("addVideoChunk's first argument (chunk) must be of type EncodedVideoChunk.");if(e&&typeof e!="object")throw new TypeError("addVideoChunk's second argument (meta), when provided, must be an object.");if(t!==void 0&&(!Number.isFinite(t)||t<0))throw new TypeError("addVideoChunk's third argument (timestamp), when provided, must be a non-negative real number.");let n=new Uint8Array(i.byteLength);i.copyTo(n),this.addVideoChunkRaw(n,i.type,t??i.timestamp,e)}addVideoChunkRaw(i,e,t,n){if(!(i instanceof Uint8Array))throw new TypeError("addVideoChunkRaw's first argument (data) must be an instance of Uint8Array.");if(e!=="key"&&e!=="delta")throw new TypeError("addVideoChunkRaw's second argument (type) must be either 'key' or 'delta'.");if(!Number.isFinite(t)||t<0)throw new TypeError("addVideoChunkRaw's third argument (timestamp) must be a non-negative real number.");if(n&&typeof n!="object")throw new TypeError("addVideoChunkRaw's fourth argument (meta), when provided, must be an object.");if(Ge(this,na,Bo).call(this),!k(this,at).video)throw new Error("No video track declared.");k(this,aa)===void 0&&pt(this,aa,t),n&&Ge(this,Rh,zf).call(this,n);let r=Ge(this,ta,Oo).call(this,i,e,t,ds);for(k(this,at).video.codec==="V_VP9"&&Ge(this,Ih,Vf).call(this,r),pt(this,ls,r.timestamp);k(this,ji).length>0&&k(this,ji)[0].timestamp<=r.timestamp;){let a=k(this,ji).shift();Ge(this,_i,Pi).call(this,a,!1)}!k(this,at).audio||r.timestamp<=k(this,hs)?Ge(this,_i,Pi).call(this,r,!0):k(this,Xi).push(r),Ge(this,ea,ko).call(this),Ge(this,Mr,is).call(this)}addAudioChunk(i,e,t){if(!(i instanceof EncodedAudioChunk))throw new TypeError("addAudioChunk's first argument (chunk) must be of type EncodedAudioChunk.");if(e&&typeof e!="object")throw new TypeError("addAudioChunk's second argument (meta), when provided, must be an object.");if(t!==void 0&&(!Number.isFinite(t)||t<0))throw new TypeError("addAudioChunk's third argument (timestamp), when provided, must be a non-negative real number.");let n=new Uint8Array(i.byteLength);i.copyTo(n),this.addAudioChunkRaw(n,i.type,t??i.timestamp,e)}addAudioChunkRaw(i,e,t,n){if(!(i instanceof Uint8Array))throw new TypeError("addAudioChunkRaw's first argument (data) must be an instance of Uint8Array.");if(e!=="key"&&e!=="delta")throw new TypeError("addAudioChunkRaw's second argument (type) must be either 'key' or 'delta'.");if(!Number.isFinite(t)||t<0)throw new TypeError("addAudioChunkRaw's third argument (timestamp) must be a non-negative real number.");if(n&&typeof n!="object")throw new TypeError("addAudioChunkRaw's fourth argument (meta), when provided, must be an object.");if(Ge(this,na,Bo).call(this),!k(this,at).audio)throw new Error("No audio track declared.");k(this,oa)===void 0&&pt(this,oa,t),n?.decoderConfig&&(k(this,at).streaming?pt(this,Yi,Ge(this,us,ma).call(this,n.decoderConfig.description)):Ge(this,la,Wo).call(this,k(this,Yi),n.decoderConfig.description));let r=Ge(this,ta,Oo).call(this,i,e,t,ua);for(pt(this,hs,r.timestamp);k(this,Xi).length>0&&k(this,Xi)[0].timestamp<=r.timestamp;){let a=k(this,Xi).shift();Ge(this,_i,Pi).call(this,a,!0)}!k(this,at).video||r.timestamp<=k(this,ls)?Ge(this,_i,Pi).call(this,r,!k(this,at).video):k(this,ji).push(r),Ge(this,ea,ko).call(this),Ge(this,Mr,is).call(this)}addSubtitleChunk(i,e,t){if(typeof i!="object"||!i)throw new TypeError("addSubtitleChunk's first argument (chunk) must be an object.");if(!(i.body instanceof Uint8Array))throw new TypeError("body must be an instance of Uint8Array.");if(!Number.isFinite(i.timestamp)||i.timestamp<0)throw new TypeError("timestamp must be a non-negative real number.");if(!Number.isFinite(i.duration)||i.duration<0)throw new TypeError("duration must be a non-negative real number.");if(i.additions&&!(i.additions instanceof Uint8Array))throw new TypeError("additions, when present, must be an instance of Uint8Array.");if(typeof e!="object")throw new TypeError("addSubtitleChunk's second argument (meta) must be an object.");if(Ge(this,na,Bo).call(this),!k(this,at).subtitles)throw new Error("No subtitle track declared.");e?.decoderConfig&&(k(this,at).streaming?pt(this,as,Ge(this,us,ma).call(this,e.decoderConfig.description)):Ge(this,la,Wo).call(this,k(this,as),e.decoderConfig.description));let n=Ge(this,ta,Oo).call(this,i.body,"key",t??i.timestamp,Ho,i.duration,i.additions);pt(this,Go,n.timestamp),k(this,wr).push(n),Ge(this,ea,ko).call(this),Ge(this,Mr,is).call(this)}finalize(){if(k(this,ca))throw new Error("Cannot finalize a muxer more than once.");for(;k(this,Xi).length>0;)Ge(this,_i,Pi).call(this,k(this,Xi).shift(),!0);for(;k(this,ji).length>0;)Ge(this,_i,Pi).call(this,k(this,ji).shift(),!0);for(;k(this,wr).length>0&&k(this,wr)[0].timestamp<=k(this,cs);)Ge(this,_i,Pi).call(this,k(this,wr).shift(),!1);if(k(this,vi)&&Ge(this,$o,jh).call(this),k(this,We).writeEBML(k(this,os)),!k(this,at).streaming){let i=k(this,We).pos,e=k(this,We).pos-k(this,Sr,rs);k(this,We).seek(k(this,We).offsets.get(k(this,da))+4),k(this,We).writeEBMLVarInt(e,If),k(this,ns).data=new Fh(k(this,cs)),k(this,We).seek(k(this,We).offsets.get(k(this,ns))),k(this,We).writeEBML(k(this,ns)),k(this,Fi).data[0].data[1].data=k(this,We).offsets.get(k(this,os))-k(this,Sr,rs),k(this,Fi).data[1].data[1].data=k(this,We).offsets.get(k(this,fa))-k(this,Sr,rs),k(this,Fi).data[2].data[1].data=k(this,We).offsets.get(k(this,fs))-k(this,Sr,rs),k(this,We).seek(k(this,We).offsets.get(k(this,Fi))),k(this,We).writeEBML(k(this,Fi)),k(this,We).seek(i)}Ge(this,Mr,is).call(this),k(this,We).finalize(),pt(this,ca,!0)}};at=new WeakMap;We=new WeakMap;da=new WeakMap;fa=new WeakMap;Fi=new WeakMap;fs=new WeakMap;ns=new WeakMap;Tr=new WeakMap;ps=new WeakMap;Yi=new WeakMap;as=new WeakMap;os=new WeakMap;vi=new WeakMap;xa=new WeakMap;cs=new WeakMap;Xi=new WeakMap;ji=new WeakMap;wr=new WeakMap;aa=new WeakMap;oa=new WeakMap;ls=new WeakMap;hs=new WeakMap;Go=new WeakMap;pa=new WeakMap;ca=new WeakMap;Ah=new WeakSet;Ff=function(i){if(typeof i!="object")throw new TypeError("The muxer requires an options object to be passed to its constructor.");if(!(i.target instanceof Xo))throw new TypeError("The target must be provided and an instance of Target.");if(i.video){if(typeof i.video.codec!="string")throw new TypeError(`Invalid video codec: ${i.video.codec}. Must be a string.`);if(!Number.isInteger(i.video.width)||i.video.width<=0)throw new TypeError(`Invalid video width: ${i.video.width}. Must be a positive integer.`);if(!Number.isInteger(i.video.height)||i.video.height<=0)throw new TypeError(`Invalid video height: ${i.video.height}. Must be a positive integer.`);if(i.video.frameRate!==void 0&&(!Number.isFinite(i.video.frameRate)||i.video.frameRate<=0))throw new TypeError(`Invalid video frame rate: ${i.video.frameRate}. Must be a positive number.`);if(i.video.alpha!==void 0&&typeof i.video.alpha!="boolean")throw new TypeError(`Invalid video alpha: ${i.video.alpha}. Must be a boolean.`)}if(i.audio){if(typeof i.audio.codec!="string")throw new TypeError(`Invalid audio codec: ${i.audio.codec}. Must be a string.`);if(!Number.isInteger(i.audio.numberOfChannels)||i.audio.numberOfChannels<=0)throw new TypeError(`Invalid number of audio channels: ${i.audio.numberOfChannels}. Must be a positive integer.`);if(!Number.isInteger(i.audio.sampleRate)||i.audio.sampleRate<=0)throw new TypeError(`Invalid audio sample rate: ${i.audio.sampleRate}. Must be a positive integer.`);if(i.audio.bitDepth!==void 0&&(!Number.isInteger(i.audio.bitDepth)||i.audio.bitDepth<=0))throw new TypeError(`Invalid audio bit depth: ${i.audio.bitDepth}. Must be a positive integer.`)}if(i.subtitles&&typeof i.subtitles.codec!="string")throw new TypeError(`Invalid subtitles codec: ${i.subtitles.codec}. Must be a string.`);if(i.type!==void 0&&!["webm","matroska"].includes(i.type))throw new TypeError(`Invalid type: ${i.type}. Must be 'webm' or 'matroska'.`);if(i.firstTimestampBehavior&&!Fy.includes(i.firstTimestampBehavior))throw new TypeError(`Invalid first timestamp behavior: ${i.firstTimestampBehavior}`);if(i.streaming!==void 0&&typeof i.streaming!="boolean")throw new TypeError(`Invalid streaming option: ${i.streaming}. Must be a boolean.`)};Ch=new WeakSet;Df=function(){k(this,We)instanceof ga&&k(this,We).target.options.onHeader&&k(this,We).startTrackingWrites(),Ge(this,kh,Lf).call(this),k(this,at).streaming||Ge(this,zh,kf).call(this),Ge(this,Vh,Of).call(this),Ge(this,Oh,Uf).call(this),Ge(this,Bh,Nf).call(this),k(this,at).streaming||(Ge(this,jo,Hh).call(this),Ge(this,qo,Gh).call(this)),Ge(this,Wh,Bf).call(this),Ge(this,Mr,is).call(this)};kh=new WeakSet;Lf=function(){let i={id:440786851,data:[{id:17030,data:1},{id:17143,data:1},{id:17138,data:4},{id:17139,data:8},{id:17026,data:k(this,at).type??"webm"},{id:17031,data:2},{id:17029,data:2}]};k(this,We).writeEBML(i)};Oh=new WeakSet;Uf=function(){pt(this,ps,{id:236,size:4,data:new Uint8Array(sa)}),pt(this,Yi,{id:236,size:4,data:new Uint8Array(sa)}),pt(this,as,{id:236,size:4,data:new Uint8Array(sa)})};Bh=new WeakSet;Nf=function(){pt(this,Tr,{id:21936,data:[{id:21937,data:2},{id:21946,data:2},{id:21947,data:2},{id:21945,data:0}]})};zh=new WeakSet;kf=function(){let i=new Uint8Array([28,83,187,107]),e=new Uint8Array([21,73,169,102]),t=new Uint8Array([22,84,174,107]);pt(this,Fi,{id:290298740,data:[{id:19899,data:[{id:21419,data:i},{id:21420,size:5,data:0}]},{id:19899,data:[{id:21419,data:e},{id:21420,size:5,data:0}]},{id:19899,data:[{id:21419,data:t},{id:21420,size:5,data:0}]}]})};Vh=new WeakSet;Of=function(){let i={id:17545,data:new Fh(0)};pt(this,ns,i);let e={id:357149030,data:[{id:2807729,data:1e6},{id:19840,data:vf},{id:22337,data:vf},k(this,at).streaming?null:i]};pt(this,fa,e)};jo=new WeakSet;Hh=function(){let i={id:374648427,data:[]};pt(this,fs,i),k(this,at).video&&i.data.push({id:174,data:[{id:215,data:ds},{id:29637,data:ds},{id:131,data:Cy},{id:134,data:k(this,at).video.codec},k(this,ps),k(this,at).video.frameRate?{id:2352003,data:1e9/k(this,at).video.frameRate}:null,{id:224,data:[{id:176,data:k(this,at).video.width},{id:186,data:k(this,at).video.height},k(this,at).video.alpha?{id:21440,data:1}:null,k(this,Tr)]}]}),k(this,at).audio&&(pt(this,Yi,k(this,at).streaming?k(this,Yi)||null:{id:236,size:4,data:new Uint8Array(sa)}),i.data.push({id:174,data:[{id:215,data:ua},{id:29637,data:ua},{id:131,data:Ry},{id:134,data:k(this,at).audio.codec},k(this,Yi),{id:225,data:[{id:181,data:new yf(k(this,at).audio.sampleRate)},{id:159,data:k(this,at).audio.numberOfChannels},k(this,at).audio.bitDepth?{id:25188,data:k(this,at).audio.bitDepth}:null]}]})),k(this,at).subtitles&&i.data.push({id:174,data:[{id:215,data:Ho},{id:29637,data:Ho},{id:131,data:Iy},{id:134,data:k(this,at).subtitles.codec},k(this,as)]})};qo=new WeakSet;Gh=function(){let i={id:408125543,size:k(this,at).streaming?-1:If,data:[k(this,at).streaming?null:k(this,Fi),k(this,fa),k(this,fs)]};if(pt(this,da,i),k(this,We).writeEBML(i),k(this,We)instanceof ga&&k(this,We).target.options.onHeader){let{data:e,start:t}=k(this,We).getTrackedWrites();k(this,We).target.options.onHeader(e,t)}};Wh=new WeakSet;Bf=function(){pt(this,os,{id:475249515,data:[]})};Mr=new WeakSet;is=function(){k(this,We)instanceof Nh&&k(this,We).flush()};Sr=new WeakSet;rs=function(){return k(this,We).dataOffsets.get(k(this,da))};Rh=new WeakSet;zf=function(i){if(i.decoderConfig){if(i.decoderConfig.colorSpace){let e=i.decoderConfig.colorSpace;if(pt(this,pa,e),k(this,Tr).data=[{id:21937,data:{rgb:1,bt709:1,bt470bg:5,smpte170m:6}[e.matrix]},{id:21946,data:{bt709:1,smpte170m:6,"iec61966-2-1":13}[e.transfer]},{id:21947,data:{bt709:1,bt470bg:5,smpte170m:6}[e.primaries]},{id:21945,data:[1,2][Number(e.fullRange)]}],!k(this,at).streaming){let t=k(this,We).pos;k(this,We).seek(k(this,We).offsets.get(k(this,Tr))),k(this,We).writeEBML(k(this,Tr)),k(this,We).seek(t)}}i.decoderConfig.description&&(k(this,at).streaming?pt(this,ps,Ge(this,us,ma).call(this,i.decoderConfig.description)):Ge(this,la,Wo).call(this,k(this,ps),i.decoderConfig.description))}};Ih=new WeakSet;Vf=function(i){if(i.type!=="key"||!k(this,pa))return;let e=0;if(es(i.data,0,2)!==2)return;e+=2;let t=(es(i.data,e+1,e+2)<<1)+es(i.data,e+0,e+1);e+=2,t===3&&e++;let n=es(i.data,e+0,e+1);if(e++,n)return;let r=es(i.data,e+0,e+1);if(e++,r!==0)return;e+=2;let a=es(i.data,e+0,e+24);if(e+=24,a!==4817730)return;t>=2&&e++;let c={rgb:7,bt709:2,bt470bg:1,smpte170m:3}[k(this,pa).matrix];wy(i.data,e+0,e+3,c)};ea=new WeakSet;ko=function(){let i=Math.min(k(this,at).video?k(this,ls):1/0,k(this,at).audio?k(this,hs):1/0),e=k(this,wr);for(;e.length>0&&e[0].timestamp<=i;)Ge(this,_i,Pi).call(this,e.shift(),!k(this,at).video&&!k(this,at).audio)};ta=new WeakSet;Oo=function(i,e,t,n,r,a){let c=Ge(this,$h,Hf).call(this,t,n);return{data:i,additions:a,type:e,timestamp:c,duration:r,trackNumber:n}};$h=new WeakSet;Hf=function(i,e){let t=e===ds?k(this,ls):e===ua?k(this,hs):k(this,Go);if(e!==Ho){let n=e===ds?k(this,aa):k(this,oa);if(k(this,at).firstTimestampBehavior==="strict"&&t===-1&&i!==0)throw new Error(`The first chunk for your media track must have a timestamp of 0 (received ${i}). Non-zero first timestamps are often caused by directly piping frames or audio data from a MediaStreamTrack into the encoder. Their timestamps are typically relative to the age of the document, which is probably what you want.

If you want to offset all timestamps of a track such that the first one is zero, set firstTimestampBehavior: 'offset' in the options.
If you want to allow non-zero first timestamps, set firstTimestampBehavior: 'permissive'.
`);k(this,at).firstTimestampBehavior==="offset"&&(i-=n)}if(i<t)throw new Error(`Timestamps must be monotonically increasing (went from ${t} to ${i}).`);if(i<0)throw new Error(`Timestamps must be non-negative (received ${i}).`);return i};_i=new WeakSet;Pi=function(i,e){k(this,at).streaming&&!k(this,fs)&&(Ge(this,jo,Hh).call(this),Ge(this,qo,Gh).call(this));let t=Math.floor(i.timestamp/1e3),n=t-k(this,xa),r=e&&i.type==="key"&&n>=1e3,a=n>=Py;if((!k(this,vi)||r||a)&&(Ge(this,Xh,Gf).call(this,t),n=0),n<0)return;let c=new Uint8Array(4),l=new DataView(c.buffer);if(l.setUint8(0,128|i.trackNumber),l.setInt16(1,n,!1),i.duration===void 0&&!i.additions){l.setUint8(3,+(i.type==="key")<<7);let u={id:163,data:[c,i.data]};k(this,We).writeEBML(u)}else{let u=Math.floor(i.duration/1e3),d={id:160,data:[{id:161,data:[c,i.data]},i.duration!==void 0?{id:155,data:u}:null,i.additions?{id:30113,data:i.additions}:null]};k(this,We).writeEBML(d)}pt(this,cs,Math.max(k(this,cs),t))};us=new WeakSet;ma=function(i){return{id:25506,size:4,data:new Uint8Array(i)}};la=new WeakSet;Wo=function(i,e){let t=k(this,We).pos;k(this,We).seek(k(this,We).offsets.get(i));let n=6+e.byteLength,r=sa-n;if(r<0){let a=e.byteLength+r;e instanceof ArrayBuffer?e=e.slice(0,a):e=e.buffer.slice(0,a),r=0}i=[Ge(this,us,ma).call(this,e),{id:236,size:4,data:new Uint8Array(r)}],k(this,We).writeEBML(i),k(this,We).seek(t)};Xh=new WeakSet;Gf=function(i){k(this,vi)&&Ge(this,$o,jh).call(this),k(this,We)instanceof ga&&k(this,We).target.options.onCluster&&k(this,We).startTrackingWrites(),pt(this,vi,{id:524531317,size:k(this,at).streaming?-1:Pf,data:[{id:231,data:i}]}),k(this,We).writeEBML(k(this,vi)),pt(this,xa,i);let e=k(this,We).offsets.get(k(this,vi))-k(this,Sr,rs);k(this,os).data.push({id:187,data:[{id:179,data:i},k(this,at).video?{id:183,data:[{id:247,data:ds},{id:241,data:e}]}:null,k(this,at).audio?{id:183,data:[{id:247,data:ua},{id:241,data:e}]}:null]})};$o=new WeakSet;jh=function(){if(!k(this,at).streaming){let i=k(this,We).pos-k(this,We).dataOffsets.get(k(this,vi)),e=k(this,We).pos;k(this,We).seek(k(this,We).offsets.get(k(this,vi))+4),k(this,We).writeEBMLVarInt(i,Pf),k(this,We).seek(e)}if(k(this,We)instanceof ga&&k(this,We).target.options.onCluster){let{data:i,start:e}=k(this,We).getTrackedWrites();k(this,We).target.options.onCluster(i,e,k(this,xa))}};na=new WeakSet;Bo=function(){if(k(this,ca))throw new Error("Cannot add new video or audio chunks after the file has been finalized.")};var Dy=/(?:(\d{2}):)?(\d{2}):(\d{2}).(\d{3})/;var yE=new TextEncoder,Ly,Uy,Ny,ky,Oy,By,zy,Vy,Hy;Ly=new WeakMap;Uy=new WeakMap;Ny=new WeakMap;ky=new WeakMap;Oy=new WeakMap;By=new WeakSet;zy=function(i){let e=Dy.exec(i);if(!e)throw new Error("Expected match.");return 3600*1e3*Number(e[1]||"0")+60*1e3*Number(e[2])+1e3*Number(e[3])+Number(e[4])};Vy=new WeakSet;Hy=function(i){let e=Math.floor(i/36e5),t=Math.floor(i%(3600*1e3)/(60*1e3)),n=Math.floor(i%(60*1e3)/1e3),r=i%1e3;return e.toString().padStart(2,"0")+":"+t.toString().padStart(2,"0")+":"+n.toString().padStart(2,"0")+"."+r.toString().padStart(3,"0")};function qh(){return typeof VideoEncoder<"u"&&typeof VideoFrame<"u"}async function Gy(i,e,t){let n=[{codec:"vp09.00.10.08",muxCodec:"V_VP9"},{codec:"vp8",muxCodec:"V_VP8"}];for(let r of n)try{if((await VideoEncoder.isConfigSupported({codec:r.codec,width:i,height:e,framerate:t,bitrate:4e6})).supported)return r}catch{}throw new Error("this browser has no VP9 or VP8 video encoder (WebCodecs)")}async function $f(i,e,t){if(!qh())throw new Error("films need WebCodecs (VideoEncoder); this browser has none");let{width:n,height:r,fps:a}=i;if(n%2||r%2)throw new Error("film width and height must be even");let{codec:c,muxCodec:l}=await Gy(n,r,a),u=new Dh,d=new Wf({target:u,video:{codec:l,width:n,height:r,frameRate:a},firstTimestampBehavior:"offset"}),p=null,m=new VideoEncoder({output:(_,b)=>d.addVideoChunk(_,b),error:_=>{p=_}});m.configure({codec:c,width:n,height:r,framerate:a,bitrate:Math.round(n*r*a*.12),latencyMode:"quality"});let x=1e6/a;for(let _=0;_<i.frames;_++){if(p)throw p;let b=await e(_),E=new VideoFrame(b,{format:"RGBA",codedWidth:n,codedHeight:r,timestamp:Math.round(_*x),duration:Math.round(x)});m.encode(E,{keyFrame:_%(a*2)===0}),E.close(),m.encodeQueueSize>8&&await new Promise(w=>setTimeout(w,0)),t?.(_+1)}if(await m.flush(),m.close(),p)throw p;return d.finalize(),new Uint8Array(u.buffer)}var In="esoulRunMachine";function Yh(i){if(i instanceof Error)return i.message||i.name||"error";if(typeof i=="string")return i;if(typeof i=="number")return`the engine threw (code ${i}); the world may be invalid`;if(i&&typeof i=="object"){let e=i;if(typeof e.message=="string")return e.message;if(typeof e.error=="string")return e.error;try{return JSON.stringify(i).slice(0,500)}catch{}}return String(i)}var xp=0,Iu=1,_p=2;var Pu=1,Gc=2,Mi=3,zi=0,Tn=1,Si=2,Ei=0,Fr=1,Fu=2,Du=3,Lu=4,vp=5,ir=100,yp=101,bp=102,wp=103,Mp=104,Sp=200,Ep=201,Tp=202,Ap=203,gc=204,xc=205,Cp=206,Rp=207,Ip=208,Pp=209,Fp=210,Dp=211,Lp=212,Up=213,Np=214,Wc=0,$c=1,Xc=2,Dr=3,jc=4,qc=5,Yc=6,Zc=7,Uu=0,kp=1,Op=2,Gi=0,Bp=1,zp=2,Vp=3,Hp=4,Gp=5,Wp=6,$p=7;var Nu=300,Br=301,zr=302,Jc=303,Kc=304,qa=306,_c=1e3,bi=1001,vc=1002,Fn=1003,Xp=1004;var Ya=1005;var Vn=1006,Qc=1007;var or=1008;var ci=1009,ku=1010,Ou=1011,Os=1012,el=1013,cr=1014,Ti=1015,Vr=1016,tl=1017,nl=1018,Bs=1020,Bu=35902,zu=35899,Vu=1021,Hu=1022,Yn=1023,Cs=1026,zs=1027,Gu=1028,il=1029,rl=1030,sl=1031;var al=1033,Za=33776,Ja=33777,Ka=33778,Qa=33779,ol=35840,cl=35841,ll=35842,hl=35843,ul=36196,dl=37492,fl=37496,pl=37808,ml=37809,gl=37810,xl=37811,_l=37812,vl=37813,yl=37814,bl=37815,wl=37816,Ml=37817,Sl=37818,El=37819,Tl=37820,Al=37821,Cl=36492,Rl=36494,Il=36495,Pl=36283,Fl=36284,Dl=36285,Ll=36286;var Sa=2300,yc=2301,mc=2302,bu=2400,wu=2401,Mu=2402;var jp=3200,qp=3201;var Wu=0,Yp=1,Wi="",zn="srgb",Lr="srgb-linear",Ea="linear",kt="srgb";var Pr=7680;var Su=519,Zp=512,Jp=513,Kp=514,$u=515,Qp=516,em=517,tm=518,nm=519,Eu=35044;var Xu="300 es",ri=2e3,Ta=2001;function ju(i){for(let e=i.length-1;e>=0;--e)if(i[e]>=65535)return!0;return!1}function Aa(i){return document.createElementNS("http://www.w3.org/1999/xhtml",i)}function im(){let i=Aa("canvas");return i.style.display="block",i}var Xf={},Rs=null;function qu(...i){let e="THREE."+i.shift();Rs?Rs("log",e,...i):console.log(e,...i)}function lt(...i){let e="THREE."+i.shift();Rs?Rs("warn",e,...i):console.warn(e,...i)}function yt(...i){let e="THREE."+i.shift();Rs?Rs("error",e,...i):console.error(e,...i)}function Is(...i){let e=i.join(" ");e in Xf||(Xf[e]=!0,lt(...i))}function rm(i,e,t){return new Promise(function(n,r){function a(){switch(i.clientWaitSync(e,i.SYNC_FLUSH_COMMANDS_BIT,0)){case i.WAIT_FAILED:r();break;case i.TIMEOUT_EXPIRED:setTimeout(a,t);break;default:n()}}setTimeout(a,t)})}var Vi=class{addEventListener(e,t){this._listeners===void 0&&(this._listeners={});let n=this._listeners;n[e]===void 0&&(n[e]=[]),n[e].indexOf(t)===-1&&n[e].push(t)}hasEventListener(e,t){let n=this._listeners;return n===void 0?!1:n[e]!==void 0&&n[e].indexOf(t)!==-1}removeEventListener(e,t){let n=this._listeners;if(n===void 0)return;let r=n[e];if(r!==void 0){let a=r.indexOf(t);a!==-1&&r.splice(a,1)}}dispatchEvent(e){let t=this._listeners;if(t===void 0)return;let n=t[e.type];if(n!==void 0){e.target=this;let r=n.slice(0);for(let a=0,c=r.length;a<c;a++)r[a].call(this,e);e.target=null}}},yn=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"];var Zh=Math.PI/180,bc=180/Math.PI;function eo(){let i=Math.random()*4294967295|0,e=Math.random()*4294967295|0,t=Math.random()*4294967295|0,n=Math.random()*4294967295|0;return(yn[i&255]+yn[i>>8&255]+yn[i>>16&255]+yn[i>>24&255]+"-"+yn[e&255]+yn[e>>8&255]+"-"+yn[e>>16&15|64]+yn[e>>24&255]+"-"+yn[t&63|128]+yn[t>>8&255]+"-"+yn[t>>16&255]+yn[t>>24&255]+yn[n&255]+yn[n>>8&255]+yn[n>>16&255]+yn[n>>24&255]).toLowerCase()}function Et(i,e,t){return Math.max(e,Math.min(t,i))}function Wy(i,e){return(i%e+e)%e}function Jh(i,e,t){return(1-t)*i+t*e}function _a(i,e){switch(e.constructor){case Float32Array:return i;case Uint32Array:return i/4294967295;case Uint16Array:return i/65535;case Uint8Array:return i/255;case Int32Array:return Math.max(i/2147483647,-1);case Int16Array:return Math.max(i/32767,-1);case Int8Array:return Math.max(i/127,-1);default:throw new Error("Invalid component type.")}}function Pn(i,e){switch(e.constructor){case Float32Array:return i;case Uint32Array:return Math.round(i*4294967295);case Uint16Array:return Math.round(i*65535);case Uint8Array:return Math.round(i*255);case Int32Array:return Math.round(i*2147483647);case Int16Array:return Math.round(i*32767);case Int8Array:return Math.round(i*127);default:throw new Error("Invalid component type.")}}var Tt=class i{constructor(e=0,t=0){i.prototype.isVector2=!0,this.x=e,this.y=t}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,t){return this.x=e,this.y=t,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){let t=this.x,n=this.y,r=e.elements;return this.x=r[0]*t+r[3]*n+r[6],this.y=r[1]*t+r[4]*n+r[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,t){return this.x=Et(this.x,e.x,t.x),this.y=Et(this.y,e.y,t.y),this}clampScalar(e,t){return this.x=Et(this.x,e,t),this.y=Et(this.y,e,t),this}clampLength(e,t){let n=this.length();return this.divideScalar(n||1).multiplyScalar(Et(n,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){let t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;let n=this.dot(e)/t;return Math.acos(Et(n,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){let t=this.x-e.x,n=this.y-e.y;return t*t+n*n}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this}rotateAround(e,t){let n=Math.cos(t),r=Math.sin(t),a=this.x-e.x,c=this.y-e.y;return this.x=a*n-c*r+e.x,this.y=a*r+c*n+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}},si=class{constructor(e=0,t=0,n=0,r=1){this.isQuaternion=!0,this._x=e,this._y=t,this._z=n,this._w=r}static slerpFlat(e,t,n,r,a,c,l){let u=n[r+0],d=n[r+1],p=n[r+2],m=n[r+3],x=a[c+0],_=a[c+1],b=a[c+2],E=a[c+3];if(l<=0){e[t+0]=u,e[t+1]=d,e[t+2]=p,e[t+3]=m;return}if(l>=1){e[t+0]=x,e[t+1]=_,e[t+2]=b,e[t+3]=E;return}if(m!==E||u!==x||d!==_||p!==b){let w=u*x+d*_+p*b+m*E;w<0&&(x=-x,_=-_,b=-b,E=-E,w=-w);let v=1-l;if(w<.9995){let D=Math.acos(w),L=Math.sin(D);v=Math.sin(v*D)/L,l=Math.sin(l*D)/L,u=u*v+x*l,d=d*v+_*l,p=p*v+b*l,m=m*v+E*l}else{u=u*v+x*l,d=d*v+_*l,p=p*v+b*l,m=m*v+E*l;let D=1/Math.sqrt(u*u+d*d+p*p+m*m);u*=D,d*=D,p*=D,m*=D}}e[t]=u,e[t+1]=d,e[t+2]=p,e[t+3]=m}static multiplyQuaternionsFlat(e,t,n,r,a,c){let l=n[r],u=n[r+1],d=n[r+2],p=n[r+3],m=a[c],x=a[c+1],_=a[c+2],b=a[c+3];return e[t]=l*b+p*m+u*_-d*x,e[t+1]=u*b+p*x+d*m-l*_,e[t+2]=d*b+p*_+l*x-u*m,e[t+3]=p*b-l*m-u*x-d*_,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,t,n,r){return this._x=e,this._y=t,this._z=n,this._w=r,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,t=!0){let n=e._x,r=e._y,a=e._z,c=e._order,l=Math.cos,u=Math.sin,d=l(n/2),p=l(r/2),m=l(a/2),x=u(n/2),_=u(r/2),b=u(a/2);switch(c){case"XYZ":this._x=x*p*m+d*_*b,this._y=d*_*m-x*p*b,this._z=d*p*b+x*_*m,this._w=d*p*m-x*_*b;break;case"YXZ":this._x=x*p*m+d*_*b,this._y=d*_*m-x*p*b,this._z=d*p*b-x*_*m,this._w=d*p*m+x*_*b;break;case"ZXY":this._x=x*p*m-d*_*b,this._y=d*_*m+x*p*b,this._z=d*p*b+x*_*m,this._w=d*p*m-x*_*b;break;case"ZYX":this._x=x*p*m-d*_*b,this._y=d*_*m+x*p*b,this._z=d*p*b-x*_*m,this._w=d*p*m+x*_*b;break;case"YZX":this._x=x*p*m+d*_*b,this._y=d*_*m+x*p*b,this._z=d*p*b-x*_*m,this._w=d*p*m-x*_*b;break;case"XZY":this._x=x*p*m-d*_*b,this._y=d*_*m-x*p*b,this._z=d*p*b+x*_*m,this._w=d*p*m+x*_*b;break;default:lt("Quaternion: .setFromEuler() encountered an unknown order: "+c)}return t===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,t){let n=t/2,r=Math.sin(n);return this._x=e.x*r,this._y=e.y*r,this._z=e.z*r,this._w=Math.cos(n),this._onChangeCallback(),this}setFromRotationMatrix(e){let t=e.elements,n=t[0],r=t[4],a=t[8],c=t[1],l=t[5],u=t[9],d=t[2],p=t[6],m=t[10],x=n+l+m;if(x>0){let _=.5/Math.sqrt(x+1);this._w=.25/_,this._x=(p-u)*_,this._y=(a-d)*_,this._z=(c-r)*_}else if(n>l&&n>m){let _=2*Math.sqrt(1+n-l-m);this._w=(p-u)/_,this._x=.25*_,this._y=(r+c)/_,this._z=(a+d)/_}else if(l>m){let _=2*Math.sqrt(1+l-n-m);this._w=(a-d)/_,this._x=(r+c)/_,this._y=.25*_,this._z=(u+p)/_}else{let _=2*Math.sqrt(1+m-n-l);this._w=(c-r)/_,this._x=(a+d)/_,this._y=(u+p)/_,this._z=.25*_}return this._onChangeCallback(),this}setFromUnitVectors(e,t){let n=e.dot(t)+1;return n<1e-8?(n=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=n):(this._x=0,this._y=-e.z,this._z=e.y,this._w=n)):(this._x=e.y*t.z-e.z*t.y,this._y=e.z*t.x-e.x*t.z,this._z=e.x*t.y-e.y*t.x,this._w=n),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(Et(this.dot(e),-1,1)))}rotateTowards(e,t){let n=this.angleTo(e);if(n===0)return this;let r=Math.min(1,t/n);return this.slerp(e,r),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,t){let n=e._x,r=e._y,a=e._z,c=e._w,l=t._x,u=t._y,d=t._z,p=t._w;return this._x=n*p+c*l+r*d-a*u,this._y=r*p+c*u+a*l-n*d,this._z=a*p+c*d+n*u-r*l,this._w=c*p-n*l-r*u-a*d,this._onChangeCallback(),this}slerp(e,t){if(t<=0)return this;if(t>=1)return this.copy(e);let n=e._x,r=e._y,a=e._z,c=e._w,l=this.dot(e);l<0&&(n=-n,r=-r,a=-a,c=-c,l=-l);let u=1-t;if(l<.9995){let d=Math.acos(l),p=Math.sin(d);u=Math.sin(u*d)/p,t=Math.sin(t*d)/p,this._x=this._x*u+n*t,this._y=this._y*u+r*t,this._z=this._z*u+a*t,this._w=this._w*u+c*t,this._onChangeCallback()}else this._x=this._x*u+n*t,this._y=this._y*u+r*t,this._z=this._z*u+a*t,this._w=this._w*u+c*t,this.normalize();return this}slerpQuaternions(e,t,n){return this.copy(e).slerp(t,n)}random(){let e=2*Math.PI*Math.random(),t=2*Math.PI*Math.random(),n=Math.random(),r=Math.sqrt(1-n),a=Math.sqrt(n);return this.set(r*Math.sin(e),r*Math.cos(e),a*Math.sin(t),a*Math.cos(t))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,t=0){return this._x=e[t],this._y=e[t+1],this._z=e[t+2],this._w=e[t+3],this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._w,e}fromBufferAttribute(e,t){return this._x=e.getX(t),this._y=e.getY(t),this._z=e.getZ(t),this._w=e.getW(t),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}},ee=class i{constructor(e=0,t=0,n=0){i.prototype.isVector3=!0,this.x=e,this.y=t,this.z=n}set(e,t,n){return n===void 0&&(n=this.z),this.x=e,this.y=t,this.z=n,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,t){return this.x=e.x*t.x,this.y=e.y*t.y,this.z=e.z*t.z,this}applyEuler(e){return this.applyQuaternion(jf.setFromEuler(e))}applyAxisAngle(e,t){return this.applyQuaternion(jf.setFromAxisAngle(e,t))}applyMatrix3(e){let t=this.x,n=this.y,r=this.z,a=e.elements;return this.x=a[0]*t+a[3]*n+a[6]*r,this.y=a[1]*t+a[4]*n+a[7]*r,this.z=a[2]*t+a[5]*n+a[8]*r,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){let t=this.x,n=this.y,r=this.z,a=e.elements,c=1/(a[3]*t+a[7]*n+a[11]*r+a[15]);return this.x=(a[0]*t+a[4]*n+a[8]*r+a[12])*c,this.y=(a[1]*t+a[5]*n+a[9]*r+a[13])*c,this.z=(a[2]*t+a[6]*n+a[10]*r+a[14])*c,this}applyQuaternion(e){let t=this.x,n=this.y,r=this.z,a=e.x,c=e.y,l=e.z,u=e.w,d=2*(c*r-l*n),p=2*(l*t-a*r),m=2*(a*n-c*t);return this.x=t+u*d+c*m-l*p,this.y=n+u*p+l*d-a*m,this.z=r+u*m+a*p-c*d,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){let t=this.x,n=this.y,r=this.z,a=e.elements;return this.x=a[0]*t+a[4]*n+a[8]*r,this.y=a[1]*t+a[5]*n+a[9]*r,this.z=a[2]*t+a[6]*n+a[10]*r,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,t){return this.x=Et(this.x,e.x,t.x),this.y=Et(this.y,e.y,t.y),this.z=Et(this.z,e.z,t.z),this}clampScalar(e,t){return this.x=Et(this.x,e,t),this.y=Et(this.y,e,t),this.z=Et(this.z,e,t),this}clampLength(e,t){let n=this.length();return this.divideScalar(n||1).multiplyScalar(Et(n,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,t){let n=e.x,r=e.y,a=e.z,c=t.x,l=t.y,u=t.z;return this.x=r*u-a*l,this.y=a*c-n*u,this.z=n*l-r*c,this}projectOnVector(e){let t=e.lengthSq();if(t===0)return this.set(0,0,0);let n=e.dot(this)/t;return this.copy(e).multiplyScalar(n)}projectOnPlane(e){return Kh.copy(this).projectOnVector(e),this.sub(Kh)}reflect(e){return this.sub(Kh.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){let t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;let n=this.dot(e)/t;return Math.acos(Et(n,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){let t=this.x-e.x,n=this.y-e.y,r=this.z-e.z;return t*t+n*n+r*r}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,t,n){let r=Math.sin(t)*e;return this.x=r*Math.sin(n),this.y=Math.cos(t)*e,this.z=r*Math.cos(n),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,t,n){return this.x=e*Math.sin(t),this.y=n,this.z=e*Math.cos(t),this}setFromMatrixPosition(e){let t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this}setFromMatrixScale(e){let t=this.setFromMatrixColumn(e,0).length(),n=this.setFromMatrixColumn(e,1).length(),r=this.setFromMatrixColumn(e,2).length();return this.x=t,this.y=n,this.z=r,this}setFromMatrixColumn(e,t){return this.fromArray(e.elements,t*4)}setFromMatrix3Column(e,t){return this.fromArray(e.elements,t*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){let e=Math.random()*Math.PI*2,t=Math.random()*2-1,n=Math.sqrt(1-t*t);return this.x=n*Math.cos(e),this.y=t,this.z=n*Math.sin(e),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}},Kh=new ee,jf=new si,mt=class i{constructor(e,t,n,r,a,c,l,u,d){i.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,t,n,r,a,c,l,u,d)}set(e,t,n,r,a,c,l,u,d){let p=this.elements;return p[0]=e,p[1]=r,p[2]=l,p[3]=t,p[4]=a,p[5]=u,p[6]=n,p[7]=c,p[8]=d,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){let t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],this}extractBasis(e,t,n){return e.setFromMatrix3Column(this,0),t.setFromMatrix3Column(this,1),n.setFromMatrix3Column(this,2),this}setFromMatrix4(e){let t=e.elements;return this.set(t[0],t[4],t[8],t[1],t[5],t[9],t[2],t[6],t[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){let n=e.elements,r=t.elements,a=this.elements,c=n[0],l=n[3],u=n[6],d=n[1],p=n[4],m=n[7],x=n[2],_=n[5],b=n[8],E=r[0],w=r[3],v=r[6],D=r[1],L=r[4],N=r[7],z=r[2],P=r[5],T=r[8];return a[0]=c*E+l*D+u*z,a[3]=c*w+l*L+u*P,a[6]=c*v+l*N+u*T,a[1]=d*E+p*D+m*z,a[4]=d*w+p*L+m*P,a[7]=d*v+p*N+m*T,a[2]=x*E+_*D+b*z,a[5]=x*w+_*L+b*P,a[8]=x*v+_*N+b*T,this}multiplyScalar(e){let t=this.elements;return t[0]*=e,t[3]*=e,t[6]*=e,t[1]*=e,t[4]*=e,t[7]*=e,t[2]*=e,t[5]*=e,t[8]*=e,this}determinant(){let e=this.elements,t=e[0],n=e[1],r=e[2],a=e[3],c=e[4],l=e[5],u=e[6],d=e[7],p=e[8];return t*c*p-t*l*d-n*a*p+n*l*u+r*a*d-r*c*u}invert(){let e=this.elements,t=e[0],n=e[1],r=e[2],a=e[3],c=e[4],l=e[5],u=e[6],d=e[7],p=e[8],m=p*c-l*d,x=l*u-p*a,_=d*a-c*u,b=t*m+n*x+r*_;if(b===0)return this.set(0,0,0,0,0,0,0,0,0);let E=1/b;return e[0]=m*E,e[1]=(r*d-p*n)*E,e[2]=(l*n-r*c)*E,e[3]=x*E,e[4]=(p*t-r*u)*E,e[5]=(r*a-l*t)*E,e[6]=_*E,e[7]=(n*u-d*t)*E,e[8]=(c*t-n*a)*E,this}transpose(){let e,t=this.elements;return e=t[1],t[1]=t[3],t[3]=e,e=t[2],t[2]=t[6],t[6]=e,e=t[5],t[5]=t[7],t[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){let t=this.elements;return e[0]=t[0],e[1]=t[3],e[2]=t[6],e[3]=t[1],e[4]=t[4],e[5]=t[7],e[6]=t[2],e[7]=t[5],e[8]=t[8],this}setUvTransform(e,t,n,r,a,c,l){let u=Math.cos(a),d=Math.sin(a);return this.set(n*u,n*d,-n*(u*c+d*l)+c+e,-r*d,r*u,-r*(-d*c+u*l)+l+t,0,0,1),this}scale(e,t){return this.premultiply(Qh.makeScale(e,t)),this}rotate(e){return this.premultiply(Qh.makeRotation(-e)),this}translate(e,t){return this.premultiply(Qh.makeTranslation(e,t)),this}makeTranslation(e,t){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,t,0,0,1),this}makeRotation(e){let t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,n,t,0,0,0,1),this}makeScale(e,t){return this.set(e,0,0,0,t,0,0,0,1),this}equals(e){let t=this.elements,n=e.elements;for(let r=0;r<9;r++)if(t[r]!==n[r])return!1;return!0}fromArray(e,t=0){for(let n=0;n<9;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){let n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e}clone(){return new this.constructor().fromArray(this.elements)}},Qh=new mt,qf=new mt().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),Yf=new mt().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);function $y(){let i={enabled:!0,workingColorSpace:Lr,spaces:{},convert:function(r,a,c){return this.enabled===!1||a===c||!a||!c||(this.spaces[a].transfer===kt&&(r.r=Bi(r.r),r.g=Bi(r.g),r.b=Bi(r.b)),this.spaces[a].primaries!==this.spaces[c].primaries&&(r.applyMatrix3(this.spaces[a].toXYZ),r.applyMatrix3(this.spaces[c].fromXYZ)),this.spaces[c].transfer===kt&&(r.r=As(r.r),r.g=As(r.g),r.b=As(r.b))),r},workingToColorSpace:function(r,a){return this.convert(r,this.workingColorSpace,a)},colorSpaceToWorking:function(r,a){return this.convert(r,a,this.workingColorSpace)},getPrimaries:function(r){return this.spaces[r].primaries},getTransfer:function(r){return r===Wi?Ea:this.spaces[r].transfer},getToneMappingMode:function(r){return this.spaces[r].outputColorSpaceConfig.toneMappingMode||"standard"},getLuminanceCoefficients:function(r,a=this.workingColorSpace){return r.fromArray(this.spaces[a].luminanceCoefficients)},define:function(r){Object.assign(this.spaces,r)},_getMatrix:function(r,a,c){return r.copy(this.spaces[a].toXYZ).multiply(this.spaces[c].fromXYZ)},_getDrawingBufferColorSpace:function(r){return this.spaces[r].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(r=this.workingColorSpace){return this.spaces[r].workingColorSpaceConfig.unpackColorSpace},fromWorkingColorSpace:function(r,a){return Is("ColorManagement: .fromWorkingColorSpace() has been renamed to .workingToColorSpace()."),i.workingToColorSpace(r,a)},toWorkingColorSpace:function(r,a){return Is("ColorManagement: .toWorkingColorSpace() has been renamed to .colorSpaceToWorking()."),i.colorSpaceToWorking(r,a)}},e=[.64,.33,.3,.6,.15,.06],t=[.2126,.7152,.0722],n=[.3127,.329];return i.define({[Lr]:{primaries:e,whitePoint:n,transfer:Ea,toXYZ:qf,fromXYZ:Yf,luminanceCoefficients:t,workingColorSpaceConfig:{unpackColorSpace:zn},outputColorSpaceConfig:{drawingBufferColorSpace:zn}},[zn]:{primaries:e,whitePoint:n,transfer:kt,toXYZ:qf,fromXYZ:Yf,luminanceCoefficients:t,outputColorSpaceConfig:{drawingBufferColorSpace:zn}}}),i}var It=$y();function Bi(i){return i<.04045?i*.0773993808:Math.pow(i*.9478672986+.0521327014,2.4)}function As(i){return i<.0031308?i*12.92:1.055*Math.pow(i,.41666)-.055}var ms,wc=class{static getDataURL(e,t="image/png"){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let n;if(e instanceof HTMLCanvasElement)n=e;else{ms===void 0&&(ms=Aa("canvas")),ms.width=e.width,ms.height=e.height;let r=ms.getContext("2d");e instanceof ImageData?r.putImageData(e,0,0):r.drawImage(e,0,0,e.width,e.height),n=ms}return n.toDataURL(t)}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){let t=Aa("canvas");t.width=e.width,t.height=e.height;let n=t.getContext("2d");n.drawImage(e,0,0,e.width,e.height);let r=n.getImageData(0,0,e.width,e.height),a=r.data;for(let c=0;c<a.length;c++)a[c]=Bi(a[c]/255)*255;return n.putImageData(r,0,0),t}else if(e.data){let t=e.data.slice(0);for(let n=0;n<t.length;n++)t instanceof Uint8Array||t instanceof Uint8ClampedArray?t[n]=Math.floor(Bi(t[n]/255)*255):t[n]=Bi(t[n]);return{data:t,width:e.width,height:e.height}}else return lt("ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}},Xy=0,Ps=class{constructor(e=null){this.isSource=!0,Object.defineProperty(this,"id",{value:Xy++}),this.uuid=eo(),this.data=e,this.dataReady=!0,this.version=0}getSize(e){let t=this.data;return typeof HTMLVideoElement<"u"&&t instanceof HTMLVideoElement?e.set(t.videoWidth,t.videoHeight,0):t instanceof VideoFrame?e.set(t.displayHeight,t.displayWidth,0):t!==null?e.set(t.width,t.height,t.depth||0):e.set(0,0,0),e}set needsUpdate(e){e===!0&&this.version++}toJSON(e){let t=e===void 0||typeof e=="string";if(!t&&e.images[this.uuid]!==void 0)return e.images[this.uuid];let n={uuid:this.uuid,url:""},r=this.data;if(r!==null){let a;if(Array.isArray(r)){a=[];for(let c=0,l=r.length;c<l;c++)r[c].isDataTexture?a.push(eu(r[c].image)):a.push(eu(r[c]))}else a=eu(r);n.url=a}return t||(e.images[this.uuid]=n),n}};function eu(i){return typeof HTMLImageElement<"u"&&i instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&i instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&i instanceof ImageBitmap?wc.getDataURL(i):i.data?{data:Array.from(i.data),width:i.width,height:i.height,type:i.data.constructor.name}:(lt("Texture: Unable to serialize Texture."),{})}var jy=0,tu=new ee,Dn=class i extends Vi{constructor(e=i.DEFAULT_IMAGE,t=i.DEFAULT_MAPPING,n=bi,r=bi,a=Vn,c=or,l=Yn,u=ci,d=i.DEFAULT_ANISOTROPY,p=Wi){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:jy++}),this.uuid=eo(),this.name="",this.source=new Ps(e),this.mipmaps=[],this.mapping=t,this.channel=0,this.wrapS=n,this.wrapT=r,this.magFilter=a,this.minFilter=c,this.anisotropy=d,this.format=l,this.internalFormat=null,this.type=u,this.offset=new Tt(0,0),this.repeat=new Tt(1,1),this.center=new Tt(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new mt,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=p,this.userData={},this.updateRanges=[],this.version=0,this.onUpdate=null,this.renderTarget=null,this.isRenderTargetTexture=!1,this.isArrayTexture=!!(e&&e.depth&&e.depth>1),this.pmremVersion=0}get width(){return this.source.getSize(tu).x}get height(){return this.source.getSize(tu).y}get depth(){return this.source.getSize(tu).z}get image(){return this.source.data}set image(e=null){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.renderTarget=e.renderTarget,this.isRenderTargetTexture=e.isRenderTargetTexture,this.isArrayTexture=e.isArrayTexture,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}setValues(e){for(let t in e){let n=e[t];if(n===void 0){lt(`Texture.setValues(): parameter '${t}' has value of undefined.`);continue}let r=this[t];if(r===void 0){lt(`Texture.setValues(): property '${t}' does not exist.`);continue}r&&n&&r.isVector2&&n.isVector2||r&&n&&r.isVector3&&n.isVector3||r&&n&&r.isMatrix3&&n.isMatrix3?r.copy(n):this[t]=n}}toJSON(e){let t=e===void 0||typeof e=="string";if(!t&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];let n={metadata:{version:4.7,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(n.userData=this.userData),t||(e.textures[this.uuid]=n),n}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==Nu)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case _c:e.x=e.x-Math.floor(e.x);break;case bi:e.x=e.x<0?0:1;break;case vc:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case _c:e.y=e.y-Math.floor(e.y);break;case bi:e.y=e.y<0?0:1;break;case vc:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(e){e===!0&&this.pmremVersion++}};Dn.DEFAULT_IMAGE=null;Dn.DEFAULT_MAPPING=Nu;Dn.DEFAULT_ANISOTROPY=1;var Kt=class i{constructor(e=0,t=0,n=0,r=1){i.prototype.isVector4=!0,this.x=e,this.y=t,this.z=n,this.w=r}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,t,n,r){return this.x=e,this.y=t,this.z=n,this.w=r,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;case 3:this.w=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this.w=e.w+t.w,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this.w+=e.w*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this.w=e.w-t.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){let t=this.x,n=this.y,r=this.z,a=this.w,c=e.elements;return this.x=c[0]*t+c[4]*n+c[8]*r+c[12]*a,this.y=c[1]*t+c[5]*n+c[9]*r+c[13]*a,this.z=c[2]*t+c[6]*n+c[10]*r+c[14]*a,this.w=c[3]*t+c[7]*n+c[11]*r+c[15]*a,this}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this.w/=e.w,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);let t=Math.sqrt(1-e.w*e.w);return t<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/t,this.y=e.y/t,this.z=e.z/t),this}setAxisAngleFromRotationMatrix(e){let t,n,r,a,u=e.elements,d=u[0],p=u[4],m=u[8],x=u[1],_=u[5],b=u[9],E=u[2],w=u[6],v=u[10];if(Math.abs(p-x)<.01&&Math.abs(m-E)<.01&&Math.abs(b-w)<.01){if(Math.abs(p+x)<.1&&Math.abs(m+E)<.1&&Math.abs(b+w)<.1&&Math.abs(d+_+v-3)<.1)return this.set(1,0,0,0),this;t=Math.PI;let L=(d+1)/2,N=(_+1)/2,z=(v+1)/2,P=(p+x)/4,T=(m+E)/4,B=(b+w)/4;return L>N&&L>z?L<.01?(n=0,r=.707106781,a=.707106781):(n=Math.sqrt(L),r=P/n,a=T/n):N>z?N<.01?(n=.707106781,r=0,a=.707106781):(r=Math.sqrt(N),n=P/r,a=B/r):z<.01?(n=.707106781,r=.707106781,a=0):(a=Math.sqrt(z),n=T/a,r=B/a),this.set(n,r,a,t),this}let D=Math.sqrt((w-b)*(w-b)+(m-E)*(m-E)+(x-p)*(x-p));return Math.abs(D)<.001&&(D=1),this.x=(w-b)/D,this.y=(m-E)/D,this.z=(x-p)/D,this.w=Math.acos((d+_+v-1)/2),this}setFromMatrixPosition(e){let t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this.w=t[15],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,t){return this.x=Et(this.x,e.x,t.x),this.y=Et(this.y,e.y,t.y),this.z=Et(this.z,e.z,t.z),this.w=Et(this.w,e.w,t.w),this}clampScalar(e,t){return this.x=Et(this.x,e,t),this.y=Et(this.y,e,t),this.z=Et(this.z,e,t),this.w=Et(this.w,e,t),this}clampLength(e,t){let n=this.length();return this.divideScalar(n||1).multiplyScalar(Et(n,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this.w+=(e.w-this.w)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this.w=e.w+(t.w-e.w)*n,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this.w=e[t+3],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e[t+3]=this.w,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this.w=e.getW(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}},Mc=class extends Vi{constructor(e=1,t=1,n={}){super(),n=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:Vn,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1,depth:1,multiview:!1},n),this.isRenderTarget=!0,this.width=e,this.height=t,this.depth=n.depth,this.scissor=new Kt(0,0,e,t),this.scissorTest=!1,this.viewport=new Kt(0,0,e,t);let r={width:e,height:t,depth:n.depth},a=new Dn(r);this.textures=[];let c=n.count;for(let l=0;l<c;l++)this.textures[l]=a.clone(),this.textures[l].isRenderTargetTexture=!0,this.textures[l].renderTarget=this;this._setTextureOptions(n),this.depthBuffer=n.depthBuffer,this.stencilBuffer=n.stencilBuffer,this.resolveDepthBuffer=n.resolveDepthBuffer,this.resolveStencilBuffer=n.resolveStencilBuffer,this._depthTexture=null,this.depthTexture=n.depthTexture,this.samples=n.samples,this.multiview=n.multiview}_setTextureOptions(e={}){let t={minFilter:Vn,generateMipmaps:!1,flipY:!1,internalFormat:null};e.mapping!==void 0&&(t.mapping=e.mapping),e.wrapS!==void 0&&(t.wrapS=e.wrapS),e.wrapT!==void 0&&(t.wrapT=e.wrapT),e.wrapR!==void 0&&(t.wrapR=e.wrapR),e.magFilter!==void 0&&(t.magFilter=e.magFilter),e.minFilter!==void 0&&(t.minFilter=e.minFilter),e.format!==void 0&&(t.format=e.format),e.type!==void 0&&(t.type=e.type),e.anisotropy!==void 0&&(t.anisotropy=e.anisotropy),e.colorSpace!==void 0&&(t.colorSpace=e.colorSpace),e.flipY!==void 0&&(t.flipY=e.flipY),e.generateMipmaps!==void 0&&(t.generateMipmaps=e.generateMipmaps),e.internalFormat!==void 0&&(t.internalFormat=e.internalFormat);for(let n=0;n<this.textures.length;n++)this.textures[n].setValues(t)}get texture(){return this.textures[0]}set texture(e){this.textures[0]=e}set depthTexture(e){this._depthTexture!==null&&(this._depthTexture.renderTarget=null),e!==null&&(e.renderTarget=this),this._depthTexture=e}get depthTexture(){return this._depthTexture}setSize(e,t,n=1){if(this.width!==e||this.height!==t||this.depth!==n){this.width=e,this.height=t,this.depth=n;for(let r=0,a=this.textures.length;r<a;r++)this.textures[r].image.width=e,this.textures[r].image.height=t,this.textures[r].image.depth=n,this.textures[r].isData3DTexture!==!0&&(this.textures[r].isArrayTexture=this.textures[r].image.depth>1);this.dispose()}this.viewport.set(0,0,e,t),this.scissor.set(0,0,e,t)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.textures.length=0;for(let t=0,n=e.textures.length;t<n;t++){this.textures[t]=e.textures[t].clone(),this.textures[t].isRenderTargetTexture=!0,this.textures[t].renderTarget=this;let r=Object.assign({},e.textures[t].image);this.textures[t].source=new Ps(r)}return this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,this.resolveDepthBuffer=e.resolveDepthBuffer,this.resolveStencilBuffer=e.resolveStencilBuffer,e.depthTexture!==null&&(this.depthTexture=e.depthTexture.clone()),this.samples=e.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}},Hn=class extends Mc{constructor(e=1,t=1,n={}){super(e,t,n),this.isWebGLRenderTarget=!0}},Ca=class extends Dn{constructor(e=null,t=1,n=1,r=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:t,height:n,depth:r},this.magFilter=Fn,this.minFilter=Fn,this.wrapR=bi,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(e){this.layerUpdates.add(e)}clearLayerUpdates(){this.layerUpdates.clear()}};var Sc=class extends Dn{constructor(e=null,t=1,n=1,r=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:t,height:n,depth:r},this.magFilter=Fn,this.minFilter=Fn,this.wrapR=bi,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}};var ai=class{constructor(e=new ee(1/0,1/0,1/0),t=new ee(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=t}set(e,t){return this.min.copy(e),this.max.copy(t),this}setFromArray(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t+=3)this.expandByPoint(ti.fromArray(e,t));return this}setFromBufferAttribute(e){this.makeEmpty();for(let t=0,n=e.count;t<n;t++)this.expandByPoint(ti.fromBufferAttribute(e,t));return this}setFromPoints(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t++)this.expandByPoint(e[t]);return this}setFromCenterAndSize(e,t){let n=ti.copy(t).multiplyScalar(.5);return this.min.copy(e).sub(n),this.max.copy(e).add(n),this}setFromObject(e,t=!1){return this.makeEmpty(),this.expandByObject(e,t)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,t=!1){e.updateWorldMatrix(!1,!1);let n=e.geometry;if(n!==void 0){let a=n.getAttribute("position");if(t===!0&&a!==void 0&&e.isInstancedMesh!==!0)for(let c=0,l=a.count;c<l;c++)e.isMesh===!0?e.getVertexPosition(c,ti):ti.fromBufferAttribute(a,c),ti.applyMatrix4(e.matrixWorld),this.expandByPoint(ti);else e.boundingBox!==void 0?(e.boundingBox===null&&e.computeBoundingBox(),Yo.copy(e.boundingBox)):(n.boundingBox===null&&n.computeBoundingBox(),Yo.copy(n.boundingBox)),Yo.applyMatrix4(e.matrixWorld),this.union(Yo)}let r=e.children;for(let a=0,c=r.length;a<c;a++)this.expandByObject(r[a],t);return this}containsPoint(e){return e.x>=this.min.x&&e.x<=this.max.x&&e.y>=this.min.y&&e.y<=this.max.y&&e.z>=this.min.z&&e.z<=this.max.z}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,t){return t.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return e.max.x>=this.min.x&&e.min.x<=this.max.x&&e.max.y>=this.min.y&&e.min.y<=this.max.y&&e.max.z>=this.min.z&&e.min.z<=this.max.z}intersectsSphere(e){return this.clampPoint(e.center,ti),ti.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let t,n;return e.normal.x>0?(t=e.normal.x*this.min.x,n=e.normal.x*this.max.x):(t=e.normal.x*this.max.x,n=e.normal.x*this.min.x),e.normal.y>0?(t+=e.normal.y*this.min.y,n+=e.normal.y*this.max.y):(t+=e.normal.y*this.max.y,n+=e.normal.y*this.min.y),e.normal.z>0?(t+=e.normal.z*this.min.z,n+=e.normal.z*this.max.z):(t+=e.normal.z*this.max.z,n+=e.normal.z*this.min.z),t<=-e.constant&&n>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(va),Zo.subVectors(this.max,va),gs.subVectors(e.a,va),xs.subVectors(e.b,va),_s.subVectors(e.c,va),Zi.subVectors(xs,gs),Ji.subVectors(_s,xs),Ar.subVectors(gs,_s);let t=[0,-Zi.z,Zi.y,0,-Ji.z,Ji.y,0,-Ar.z,Ar.y,Zi.z,0,-Zi.x,Ji.z,0,-Ji.x,Ar.z,0,-Ar.x,-Zi.y,Zi.x,0,-Ji.y,Ji.x,0,-Ar.y,Ar.x,0];return!nu(t,gs,xs,_s,Zo)||(t=[1,0,0,0,1,0,0,0,1],!nu(t,gs,xs,_s,Zo))?!1:(Jo.crossVectors(Zi,Ji),t=[Jo.x,Jo.y,Jo.z],nu(t,gs,xs,_s,Zo))}clampPoint(e,t){return t.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,ti).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(ti).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(Li[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),Li[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),Li[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),Li[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),Li[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),Li[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),Li[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),Li[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(Li),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}toJSON(){return{min:this.min.toArray(),max:this.max.toArray()}}fromJSON(e){return this.min.fromArray(e.min),this.max.fromArray(e.max),this}},Li=[new ee,new ee,new ee,new ee,new ee,new ee,new ee,new ee],ti=new ee,Yo=new ai,gs=new ee,xs=new ee,_s=new ee,Zi=new ee,Ji=new ee,Ar=new ee,va=new ee,Zo=new ee,Jo=new ee,Cr=new ee;function nu(i,e,t,n,r){for(let a=0,c=i.length-3;a<=c;a+=3){Cr.fromArray(i,a);let l=r.x*Math.abs(Cr.x)+r.y*Math.abs(Cr.y)+r.z*Math.abs(Cr.z),u=e.dot(Cr),d=t.dot(Cr),p=n.dot(Cr);if(Math.max(-Math.max(u,d,p),Math.min(u,d,p))>l)return!1}return!0}var qy=new ai,ya=new ee,iu=new ee,Ur=class{constructor(e=new ee,t=-1){this.isSphere=!0,this.center=e,this.radius=t}set(e,t){return this.center.copy(e),this.radius=t,this}setFromPoints(e,t){let n=this.center;t!==void 0?n.copy(t):qy.setFromPoints(e).getCenter(n);let r=0;for(let a=0,c=e.length;a<c;a++)r=Math.max(r,n.distanceToSquared(e[a]));return this.radius=Math.sqrt(r),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){let t=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=t*t}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,t){let n=this.center.distanceToSquared(e);return t.copy(e),n>this.radius*this.radius&&(t.sub(this.center).normalize(),t.multiplyScalar(this.radius).add(this.center)),t}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;ya.subVectors(e,this.center);let t=ya.lengthSq();if(t>this.radius*this.radius){let n=Math.sqrt(t),r=(n-this.radius)*.5;this.center.addScaledVector(ya,r/n),this.radius+=r}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(iu.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(ya.copy(e.center).add(iu)),this.expandByPoint(ya.copy(e.center).sub(iu))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}toJSON(){return{radius:this.radius,center:this.center.toArray()}}fromJSON(e){return this.radius=e.radius,this.center.fromArray(e.center),this}},Ui=new ee,ru=new ee,Ko=new ee,Ki=new ee,su=new ee,Qo=new ee,au=new ee,Fs=class{constructor(e=new ee,t=new ee(0,0,-1)){this.origin=e,this.direction=t}set(e,t){return this.origin.copy(e),this.direction.copy(t),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,t){return t.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,Ui)),this}closestPointToPoint(e,t){t.subVectors(e,this.origin);let n=t.dot(this.direction);return n<0?t.copy(this.origin):t.copy(this.origin).addScaledVector(this.direction,n)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){let t=Ui.subVectors(e,this.origin).dot(this.direction);return t<0?this.origin.distanceToSquared(e):(Ui.copy(this.origin).addScaledVector(this.direction,t),Ui.distanceToSquared(e))}distanceSqToSegment(e,t,n,r){ru.copy(e).add(t).multiplyScalar(.5),Ko.copy(t).sub(e).normalize(),Ki.copy(this.origin).sub(ru);let a=e.distanceTo(t)*.5,c=-this.direction.dot(Ko),l=Ki.dot(this.direction),u=-Ki.dot(Ko),d=Ki.lengthSq(),p=Math.abs(1-c*c),m,x,_,b;if(p>0)if(m=c*u-l,x=c*l-u,b=a*p,m>=0)if(x>=-b)if(x<=b){let E=1/p;m*=E,x*=E,_=m*(m+c*x+2*l)+x*(c*m+x+2*u)+d}else x=a,m=Math.max(0,-(c*x+l)),_=-m*m+x*(x+2*u)+d;else x=-a,m=Math.max(0,-(c*x+l)),_=-m*m+x*(x+2*u)+d;else x<=-b?(m=Math.max(0,-(-c*a+l)),x=m>0?-a:Math.min(Math.max(-a,-u),a),_=-m*m+x*(x+2*u)+d):x<=b?(m=0,x=Math.min(Math.max(-a,-u),a),_=x*(x+2*u)+d):(m=Math.max(0,-(c*a+l)),x=m>0?a:Math.min(Math.max(-a,-u),a),_=-m*m+x*(x+2*u)+d);else x=c>0?-a:a,m=Math.max(0,-(c*x+l)),_=-m*m+x*(x+2*u)+d;return n&&n.copy(this.origin).addScaledVector(this.direction,m),r&&r.copy(ru).addScaledVector(Ko,x),_}intersectSphere(e,t){Ui.subVectors(e.center,this.origin);let n=Ui.dot(this.direction),r=Ui.dot(Ui)-n*n,a=e.radius*e.radius;if(r>a)return null;let c=Math.sqrt(a-r),l=n-c,u=n+c;return u<0?null:l<0?this.at(u,t):this.at(l,t)}intersectsSphere(e){return e.radius<0?!1:this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){let t=e.normal.dot(this.direction);if(t===0)return e.distanceToPoint(this.origin)===0?0:null;let n=-(this.origin.dot(e.normal)+e.constant)/t;return n>=0?n:null}intersectPlane(e,t){let n=this.distanceToPlane(e);return n===null?null:this.at(n,t)}intersectsPlane(e){let t=e.distanceToPoint(this.origin);return t===0||e.normal.dot(this.direction)*t<0}intersectBox(e,t){let n,r,a,c,l,u,d=1/this.direction.x,p=1/this.direction.y,m=1/this.direction.z,x=this.origin;return d>=0?(n=(e.min.x-x.x)*d,r=(e.max.x-x.x)*d):(n=(e.max.x-x.x)*d,r=(e.min.x-x.x)*d),p>=0?(a=(e.min.y-x.y)*p,c=(e.max.y-x.y)*p):(a=(e.max.y-x.y)*p,c=(e.min.y-x.y)*p),n>c||a>r||((a>n||isNaN(n))&&(n=a),(c<r||isNaN(r))&&(r=c),m>=0?(l=(e.min.z-x.z)*m,u=(e.max.z-x.z)*m):(l=(e.max.z-x.z)*m,u=(e.min.z-x.z)*m),n>u||l>r)||((l>n||n!==n)&&(n=l),(u<r||r!==r)&&(r=u),r<0)?null:this.at(n>=0?n:r,t)}intersectsBox(e){return this.intersectBox(e,Ui)!==null}intersectTriangle(e,t,n,r,a){su.subVectors(t,e),Qo.subVectors(n,e),au.crossVectors(su,Qo);let c=this.direction.dot(au),l;if(c>0){if(r)return null;l=1}else if(c<0)l=-1,c=-c;else return null;Ki.subVectors(this.origin,e);let u=l*this.direction.dot(Qo.crossVectors(Ki,Qo));if(u<0)return null;let d=l*this.direction.dot(su.cross(Ki));if(d<0||u+d>c)return null;let p=-l*Ki.dot(au);return p<0?null:this.at(p/c,a)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}},Zt=class i{constructor(e,t,n,r,a,c,l,u,d,p,m,x,_,b,E,w){i.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,t,n,r,a,c,l,u,d,p,m,x,_,b,E,w)}set(e,t,n,r,a,c,l,u,d,p,m,x,_,b,E,w){let v=this.elements;return v[0]=e,v[4]=t,v[8]=n,v[12]=r,v[1]=a,v[5]=c,v[9]=l,v[13]=u,v[2]=d,v[6]=p,v[10]=m,v[14]=x,v[3]=_,v[7]=b,v[11]=E,v[15]=w,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new i().fromArray(this.elements)}copy(e){let t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],t[9]=n[9],t[10]=n[10],t[11]=n[11],t[12]=n[12],t[13]=n[13],t[14]=n[14],t[15]=n[15],this}copyPosition(e){let t=this.elements,n=e.elements;return t[12]=n[12],t[13]=n[13],t[14]=n[14],this}setFromMatrix3(e){let t=e.elements;return this.set(t[0],t[3],t[6],0,t[1],t[4],t[7],0,t[2],t[5],t[8],0,0,0,0,1),this}extractBasis(e,t,n){return e.setFromMatrixColumn(this,0),t.setFromMatrixColumn(this,1),n.setFromMatrixColumn(this,2),this}makeBasis(e,t,n){return this.set(e.x,t.x,n.x,0,e.y,t.y,n.y,0,e.z,t.z,n.z,0,0,0,0,1),this}extractRotation(e){let t=this.elements,n=e.elements,r=1/vs.setFromMatrixColumn(e,0).length(),a=1/vs.setFromMatrixColumn(e,1).length(),c=1/vs.setFromMatrixColumn(e,2).length();return t[0]=n[0]*r,t[1]=n[1]*r,t[2]=n[2]*r,t[3]=0,t[4]=n[4]*a,t[5]=n[5]*a,t[6]=n[6]*a,t[7]=0,t[8]=n[8]*c,t[9]=n[9]*c,t[10]=n[10]*c,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromEuler(e){let t=this.elements,n=e.x,r=e.y,a=e.z,c=Math.cos(n),l=Math.sin(n),u=Math.cos(r),d=Math.sin(r),p=Math.cos(a),m=Math.sin(a);if(e.order==="XYZ"){let x=c*p,_=c*m,b=l*p,E=l*m;t[0]=u*p,t[4]=-u*m,t[8]=d,t[1]=_+b*d,t[5]=x-E*d,t[9]=-l*u,t[2]=E-x*d,t[6]=b+_*d,t[10]=c*u}else if(e.order==="YXZ"){let x=u*p,_=u*m,b=d*p,E=d*m;t[0]=x+E*l,t[4]=b*l-_,t[8]=c*d,t[1]=c*m,t[5]=c*p,t[9]=-l,t[2]=_*l-b,t[6]=E+x*l,t[10]=c*u}else if(e.order==="ZXY"){let x=u*p,_=u*m,b=d*p,E=d*m;t[0]=x-E*l,t[4]=-c*m,t[8]=b+_*l,t[1]=_+b*l,t[5]=c*p,t[9]=E-x*l,t[2]=-c*d,t[6]=l,t[10]=c*u}else if(e.order==="ZYX"){let x=c*p,_=c*m,b=l*p,E=l*m;t[0]=u*p,t[4]=b*d-_,t[8]=x*d+E,t[1]=u*m,t[5]=E*d+x,t[9]=_*d-b,t[2]=-d,t[6]=l*u,t[10]=c*u}else if(e.order==="YZX"){let x=c*u,_=c*d,b=l*u,E=l*d;t[0]=u*p,t[4]=E-x*m,t[8]=b*m+_,t[1]=m,t[5]=c*p,t[9]=-l*p,t[2]=-d*p,t[6]=_*m+b,t[10]=x-E*m}else if(e.order==="XZY"){let x=c*u,_=c*d,b=l*u,E=l*d;t[0]=u*p,t[4]=-m,t[8]=d*p,t[1]=x*m+E,t[5]=c*p,t[9]=_*m-b,t[2]=b*m-_,t[6]=l*p,t[10]=E*m+x}return t[3]=0,t[7]=0,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromQuaternion(e){return this.compose(Yy,e,Zy)}lookAt(e,t,n){let r=this.elements;return On.subVectors(e,t),On.lengthSq()===0&&(On.z=1),On.normalize(),Qi.crossVectors(n,On),Qi.lengthSq()===0&&(Math.abs(n.z)===1?On.x+=1e-4:On.z+=1e-4,On.normalize(),Qi.crossVectors(n,On)),Qi.normalize(),ec.crossVectors(On,Qi),r[0]=Qi.x,r[4]=ec.x,r[8]=On.x,r[1]=Qi.y,r[5]=ec.y,r[9]=On.y,r[2]=Qi.z,r[6]=ec.z,r[10]=On.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){let n=e.elements,r=t.elements,a=this.elements,c=n[0],l=n[4],u=n[8],d=n[12],p=n[1],m=n[5],x=n[9],_=n[13],b=n[2],E=n[6],w=n[10],v=n[14],D=n[3],L=n[7],N=n[11],z=n[15],P=r[0],T=r[4],B=r[8],I=r[12],R=r[1],W=r[5],j=r[9],J=r[13],Y=r[2],ce=r[6],H=r[10],Me=r[14],ie=r[3],we=r[7],X=r[11],Be=r[15];return a[0]=c*P+l*R+u*Y+d*ie,a[4]=c*T+l*W+u*ce+d*we,a[8]=c*B+l*j+u*H+d*X,a[12]=c*I+l*J+u*Me+d*Be,a[1]=p*P+m*R+x*Y+_*ie,a[5]=p*T+m*W+x*ce+_*we,a[9]=p*B+m*j+x*H+_*X,a[13]=p*I+m*J+x*Me+_*Be,a[2]=b*P+E*R+w*Y+v*ie,a[6]=b*T+E*W+w*ce+v*we,a[10]=b*B+E*j+w*H+v*X,a[14]=b*I+E*J+w*Me+v*Be,a[3]=D*P+L*R+N*Y+z*ie,a[7]=D*T+L*W+N*ce+z*we,a[11]=D*B+L*j+N*H+z*X,a[15]=D*I+L*J+N*Me+z*Be,this}multiplyScalar(e){let t=this.elements;return t[0]*=e,t[4]*=e,t[8]*=e,t[12]*=e,t[1]*=e,t[5]*=e,t[9]*=e,t[13]*=e,t[2]*=e,t[6]*=e,t[10]*=e,t[14]*=e,t[3]*=e,t[7]*=e,t[11]*=e,t[15]*=e,this}determinant(){let e=this.elements,t=e[0],n=e[4],r=e[8],a=e[12],c=e[1],l=e[5],u=e[9],d=e[13],p=e[2],m=e[6],x=e[10],_=e[14],b=e[3],E=e[7],w=e[11],v=e[15];return b*(+a*u*m-r*d*m-a*l*x+n*d*x+r*l*_-n*u*_)+E*(+t*u*_-t*d*x+a*c*x-r*c*_+r*d*p-a*u*p)+w*(+t*d*m-t*l*_-a*c*m+n*c*_+a*l*p-n*d*p)+v*(-r*l*p-t*u*m+t*l*x+r*c*m-n*c*x+n*u*p)}transpose(){let e=this.elements,t;return t=e[1],e[1]=e[4],e[4]=t,t=e[2],e[2]=e[8],e[8]=t,t=e[6],e[6]=e[9],e[9]=t,t=e[3],e[3]=e[12],e[12]=t,t=e[7],e[7]=e[13],e[13]=t,t=e[11],e[11]=e[14],e[14]=t,this}setPosition(e,t,n){let r=this.elements;return e.isVector3?(r[12]=e.x,r[13]=e.y,r[14]=e.z):(r[12]=e,r[13]=t,r[14]=n),this}invert(){let e=this.elements,t=e[0],n=e[1],r=e[2],a=e[3],c=e[4],l=e[5],u=e[6],d=e[7],p=e[8],m=e[9],x=e[10],_=e[11],b=e[12],E=e[13],w=e[14],v=e[15],D=m*w*d-E*x*d+E*u*_-l*w*_-m*u*v+l*x*v,L=b*x*d-p*w*d-b*u*_+c*w*_+p*u*v-c*x*v,N=p*E*d-b*m*d+b*l*_-c*E*_-p*l*v+c*m*v,z=b*m*u-p*E*u-b*l*x+c*E*x+p*l*w-c*m*w,P=t*D+n*L+r*N+a*z;if(P===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);let T=1/P;return e[0]=D*T,e[1]=(E*x*a-m*w*a-E*r*_+n*w*_+m*r*v-n*x*v)*T,e[2]=(l*w*a-E*u*a+E*r*d-n*w*d-l*r*v+n*u*v)*T,e[3]=(m*u*a-l*x*a-m*r*d+n*x*d+l*r*_-n*u*_)*T,e[4]=L*T,e[5]=(p*w*a-b*x*a+b*r*_-t*w*_-p*r*v+t*x*v)*T,e[6]=(b*u*a-c*w*a-b*r*d+t*w*d+c*r*v-t*u*v)*T,e[7]=(c*x*a-p*u*a+p*r*d-t*x*d-c*r*_+t*u*_)*T,e[8]=N*T,e[9]=(b*m*a-p*E*a-b*n*_+t*E*_+p*n*v-t*m*v)*T,e[10]=(c*E*a-b*l*a+b*n*d-t*E*d-c*n*v+t*l*v)*T,e[11]=(p*l*a-c*m*a-p*n*d+t*m*d+c*n*_-t*l*_)*T,e[12]=z*T,e[13]=(p*E*r-b*m*r+b*n*x-t*E*x-p*n*w+t*m*w)*T,e[14]=(b*l*r-c*E*r-b*n*u+t*E*u+c*n*w-t*l*w)*T,e[15]=(c*m*r-p*l*r+p*n*u-t*m*u-c*n*x+t*l*x)*T,this}scale(e){let t=this.elements,n=e.x,r=e.y,a=e.z;return t[0]*=n,t[4]*=r,t[8]*=a,t[1]*=n,t[5]*=r,t[9]*=a,t[2]*=n,t[6]*=r,t[10]*=a,t[3]*=n,t[7]*=r,t[11]*=a,this}getMaxScaleOnAxis(){let e=this.elements,t=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],n=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],r=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(t,n,r))}makeTranslation(e,t,n){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,t,0,0,1,n,0,0,0,1),this}makeRotationX(e){let t=Math.cos(e),n=Math.sin(e);return this.set(1,0,0,0,0,t,-n,0,0,n,t,0,0,0,0,1),this}makeRotationY(e){let t=Math.cos(e),n=Math.sin(e);return this.set(t,0,n,0,0,1,0,0,-n,0,t,0,0,0,0,1),this}makeRotationZ(e){let t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,0,n,t,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,t){let n=Math.cos(t),r=Math.sin(t),a=1-n,c=e.x,l=e.y,u=e.z,d=a*c,p=a*l;return this.set(d*c+n,d*l-r*u,d*u+r*l,0,d*l+r*u,p*l+n,p*u-r*c,0,d*u-r*l,p*u+r*c,a*u*u+n,0,0,0,0,1),this}makeScale(e,t,n){return this.set(e,0,0,0,0,t,0,0,0,0,n,0,0,0,0,1),this}makeShear(e,t,n,r,a,c){return this.set(1,n,a,0,e,1,c,0,t,r,1,0,0,0,0,1),this}compose(e,t,n){let r=this.elements,a=t._x,c=t._y,l=t._z,u=t._w,d=a+a,p=c+c,m=l+l,x=a*d,_=a*p,b=a*m,E=c*p,w=c*m,v=l*m,D=u*d,L=u*p,N=u*m,z=n.x,P=n.y,T=n.z;return r[0]=(1-(E+v))*z,r[1]=(_+N)*z,r[2]=(b-L)*z,r[3]=0,r[4]=(_-N)*P,r[5]=(1-(x+v))*P,r[6]=(w+D)*P,r[7]=0,r[8]=(b+L)*T,r[9]=(w-D)*T,r[10]=(1-(x+E))*T,r[11]=0,r[12]=e.x,r[13]=e.y,r[14]=e.z,r[15]=1,this}decompose(e,t,n){let r=this.elements,a=vs.set(r[0],r[1],r[2]).length(),c=vs.set(r[4],r[5],r[6]).length(),l=vs.set(r[8],r[9],r[10]).length();this.determinant()<0&&(a=-a),e.x=r[12],e.y=r[13],e.z=r[14],ni.copy(this);let d=1/a,p=1/c,m=1/l;return ni.elements[0]*=d,ni.elements[1]*=d,ni.elements[2]*=d,ni.elements[4]*=p,ni.elements[5]*=p,ni.elements[6]*=p,ni.elements[8]*=m,ni.elements[9]*=m,ni.elements[10]*=m,t.setFromRotationMatrix(ni),n.x=a,n.y=c,n.z=l,this}makePerspective(e,t,n,r,a,c,l=ri,u=!1){let d=this.elements,p=2*a/(t-e),m=2*a/(n-r),x=(t+e)/(t-e),_=(n+r)/(n-r),b,E;if(u)b=a/(c-a),E=c*a/(c-a);else if(l===ri)b=-(c+a)/(c-a),E=-2*c*a/(c-a);else if(l===Ta)b=-c/(c-a),E=-c*a/(c-a);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+l);return d[0]=p,d[4]=0,d[8]=x,d[12]=0,d[1]=0,d[5]=m,d[9]=_,d[13]=0,d[2]=0,d[6]=0,d[10]=b,d[14]=E,d[3]=0,d[7]=0,d[11]=-1,d[15]=0,this}makeOrthographic(e,t,n,r,a,c,l=ri,u=!1){let d=this.elements,p=2/(t-e),m=2/(n-r),x=-(t+e)/(t-e),_=-(n+r)/(n-r),b,E;if(u)b=1/(c-a),E=c/(c-a);else if(l===ri)b=-2/(c-a),E=-(c+a)/(c-a);else if(l===Ta)b=-1/(c-a),E=-a/(c-a);else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+l);return d[0]=p,d[4]=0,d[8]=0,d[12]=x,d[1]=0,d[5]=m,d[9]=0,d[13]=_,d[2]=0,d[6]=0,d[10]=b,d[14]=E,d[3]=0,d[7]=0,d[11]=0,d[15]=1,this}equals(e){let t=this.elements,n=e.elements;for(let r=0;r<16;r++)if(t[r]!==n[r])return!1;return!0}fromArray(e,t=0){for(let n=0;n<16;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){let n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e[t+9]=n[9],e[t+10]=n[10],e[t+11]=n[11],e[t+12]=n[12],e[t+13]=n[13],e[t+14]=n[14],e[t+15]=n[15],e}},vs=new ee,ni=new Zt,Yy=new ee(0,0,0),Zy=new ee(1,1,1),Qi=new ee,ec=new ee,On=new ee,Zf=new Zt,Jf=new si,oi=class i{constructor(e=0,t=0,n=0,r=i.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=t,this._z=n,this._order=r}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,t,n,r=this._order){return this._x=e,this._y=t,this._z=n,this._order=r,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,t=this._order,n=!0){let r=e.elements,a=r[0],c=r[4],l=r[8],u=r[1],d=r[5],p=r[9],m=r[2],x=r[6],_=r[10];switch(t){case"XYZ":this._y=Math.asin(Et(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-p,_),this._z=Math.atan2(-c,a)):(this._x=Math.atan2(x,d),this._z=0);break;case"YXZ":this._x=Math.asin(-Et(p,-1,1)),Math.abs(p)<.9999999?(this._y=Math.atan2(l,_),this._z=Math.atan2(u,d)):(this._y=Math.atan2(-m,a),this._z=0);break;case"ZXY":this._x=Math.asin(Et(x,-1,1)),Math.abs(x)<.9999999?(this._y=Math.atan2(-m,_),this._z=Math.atan2(-c,d)):(this._y=0,this._z=Math.atan2(u,a));break;case"ZYX":this._y=Math.asin(-Et(m,-1,1)),Math.abs(m)<.9999999?(this._x=Math.atan2(x,_),this._z=Math.atan2(u,a)):(this._x=0,this._z=Math.atan2(-c,d));break;case"YZX":this._z=Math.asin(Et(u,-1,1)),Math.abs(u)<.9999999?(this._x=Math.atan2(-p,d),this._y=Math.atan2(-m,a)):(this._x=0,this._y=Math.atan2(l,_));break;case"XZY":this._z=Math.asin(-Et(c,-1,1)),Math.abs(c)<.9999999?(this._x=Math.atan2(x,d),this._y=Math.atan2(l,a)):(this._x=Math.atan2(-p,_),this._y=0);break;default:lt("Euler: .setFromRotationMatrix() encountered an unknown order: "+t)}return this._order=t,n===!0&&this._onChangeCallback(),this}setFromQuaternion(e,t,n){return Zf.makeRotationFromQuaternion(e),this.setFromRotationMatrix(Zf,t,n)}setFromVector3(e,t=this._order){return this.set(e.x,e.y,e.z,t)}reorder(e){return Jf.setFromEuler(this),this.setFromQuaternion(Jf,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}};oi.DEFAULT_ORDER="XYZ";var Ds=class{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}},Jy=0,Kf=new ee,ys=new si,Ni=new Zt,tc=new ee,ba=new ee,Ky=new ee,Qy=new si,Qf=new ee(1,0,0),ep=new ee(0,1,0),tp=new ee(0,0,1),np={type:"added"},eb={type:"removed"},bs={type:"childadded",child:null},ou={type:"childremoved",child:null},pn=class i extends Vi{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:Jy++}),this.uuid=eo(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=i.DEFAULT_UP.clone();let e=new ee,t=new oi,n=new si,r=new ee(1,1,1);function a(){n.setFromEuler(t,!1)}function c(){t.setFromQuaternion(n,void 0,!1)}t._onChange(a),n._onChange(c),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:t},quaternion:{configurable:!0,enumerable:!0,value:n},scale:{configurable:!0,enumerable:!0,value:r},modelViewMatrix:{value:new Zt},normalMatrix:{value:new mt}}),this.matrix=new Zt,this.matrixWorld=new Zt,this.matrixAutoUpdate=i.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=i.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new Ds,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.customDepthMaterial=void 0,this.customDistanceMaterial=void 0,this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,t){this.quaternion.setFromAxisAngle(e,t)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,t){return ys.setFromAxisAngle(e,t),this.quaternion.multiply(ys),this}rotateOnWorldAxis(e,t){return ys.setFromAxisAngle(e,t),this.quaternion.premultiply(ys),this}rotateX(e){return this.rotateOnAxis(Qf,e)}rotateY(e){return this.rotateOnAxis(ep,e)}rotateZ(e){return this.rotateOnAxis(tp,e)}translateOnAxis(e,t){return Kf.copy(e).applyQuaternion(this.quaternion),this.position.add(Kf.multiplyScalar(t)),this}translateX(e){return this.translateOnAxis(Qf,e)}translateY(e){return this.translateOnAxis(ep,e)}translateZ(e){return this.translateOnAxis(tp,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(Ni.copy(this.matrixWorld).invert())}lookAt(e,t,n){e.isVector3?tc.copy(e):tc.set(e,t,n);let r=this.parent;this.updateWorldMatrix(!0,!1),ba.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?Ni.lookAt(ba,tc,this.up):Ni.lookAt(tc,ba,this.up),this.quaternion.setFromRotationMatrix(Ni),r&&(Ni.extractRotation(r.matrixWorld),ys.setFromRotationMatrix(Ni),this.quaternion.premultiply(ys.invert()))}add(e){if(arguments.length>1){for(let t=0;t<arguments.length;t++)this.add(arguments[t]);return this}return e===this?(yt("Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.removeFromParent(),e.parent=this,this.children.push(e),e.dispatchEvent(np),bs.child=e,this.dispatchEvent(bs),bs.child=null):yt("Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.remove(arguments[n]);return this}let t=this.children.indexOf(e);return t!==-1&&(e.parent=null,this.children.splice(t,1),e.dispatchEvent(eb),ou.child=e,this.dispatchEvent(ou),ou.child=null),this}removeFromParent(){let e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),Ni.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),Ni.multiply(e.parent.matrixWorld)),e.applyMatrix4(Ni),e.removeFromParent(),e.parent=this,this.children.push(e),e.updateWorldMatrix(!1,!0),e.dispatchEvent(np),bs.child=e,this.dispatchEvent(bs),bs.child=null,this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,t){if(this[e]===t)return this;for(let n=0,r=this.children.length;n<r;n++){let c=this.children[n].getObjectByProperty(e,t);if(c!==void 0)return c}}getObjectsByProperty(e,t,n=[]){this[e]===t&&n.push(this);let r=this.children;for(let a=0,c=r.length;a<c;a++)r[a].getObjectsByProperty(e,t,n);return n}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(ba,e,Ky),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(ba,Qy,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);let t=this.matrixWorld.elements;return e.set(t[8],t[9],t[10]).normalize()}raycast(){}traverse(e){e(this);let t=this.children;for(let n=0,r=t.length;n<r;n++)t[n].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);let t=this.children;for(let n=0,r=t.length;n<r;n++)t[n].traverseVisible(e)}traverseAncestors(e){let t=this.parent;t!==null&&(e(t),t.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,e=!0);let t=this.children;for(let n=0,r=t.length;n<r;n++)t[n].updateMatrixWorld(e)}updateWorldMatrix(e,t){let n=this.parent;if(e===!0&&n!==null&&n.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),t===!0){let r=this.children;for(let a=0,c=r.length;a<c;a++)r[a].updateWorldMatrix(!1,!0)}}toJSON(e){let t=e===void 0||typeof e=="string",n={};t&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},n.metadata={version:4.7,type:"Object",generator:"Object3D.toJSON"});let r={};r.uuid=this.uuid,r.type=this.type,this.name!==""&&(r.name=this.name),this.castShadow===!0&&(r.castShadow=!0),this.receiveShadow===!0&&(r.receiveShadow=!0),this.visible===!1&&(r.visible=!1),this.frustumCulled===!1&&(r.frustumCulled=!1),this.renderOrder!==0&&(r.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(r.userData=this.userData),r.layers=this.layers.mask,r.matrix=this.matrix.toArray(),r.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(r.matrixAutoUpdate=!1),this.isInstancedMesh&&(r.type="InstancedMesh",r.count=this.count,r.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(r.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(r.type="BatchedMesh",r.perObjectFrustumCulled=this.perObjectFrustumCulled,r.sortObjects=this.sortObjects,r.drawRanges=this._drawRanges,r.reservedRanges=this._reservedRanges,r.geometryInfo=this._geometryInfo.map(l=>({...l,boundingBox:l.boundingBox?l.boundingBox.toJSON():void 0,boundingSphere:l.boundingSphere?l.boundingSphere.toJSON():void 0})),r.instanceInfo=this._instanceInfo.map(l=>({...l})),r.availableInstanceIds=this._availableInstanceIds.slice(),r.availableGeometryIds=this._availableGeometryIds.slice(),r.nextIndexStart=this._nextIndexStart,r.nextVertexStart=this._nextVertexStart,r.geometryCount=this._geometryCount,r.maxInstanceCount=this._maxInstanceCount,r.maxVertexCount=this._maxVertexCount,r.maxIndexCount=this._maxIndexCount,r.geometryInitialized=this._geometryInitialized,r.matricesTexture=this._matricesTexture.toJSON(e),r.indirectTexture=this._indirectTexture.toJSON(e),this._colorsTexture!==null&&(r.colorsTexture=this._colorsTexture.toJSON(e)),this.boundingSphere!==null&&(r.boundingSphere=this.boundingSphere.toJSON()),this.boundingBox!==null&&(r.boundingBox=this.boundingBox.toJSON()));function a(l,u){return l[u.uuid]===void 0&&(l[u.uuid]=u.toJSON(e)),u.uuid}if(this.isScene)this.background&&(this.background.isColor?r.background=this.background.toJSON():this.background.isTexture&&(r.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(r.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){r.geometry=a(e.geometries,this.geometry);let l=this.geometry.parameters;if(l!==void 0&&l.shapes!==void 0){let u=l.shapes;if(Array.isArray(u))for(let d=0,p=u.length;d<p;d++){let m=u[d];a(e.shapes,m)}else a(e.shapes,u)}}if(this.isSkinnedMesh&&(r.bindMode=this.bindMode,r.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(a(e.skeletons,this.skeleton),r.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){let l=[];for(let u=0,d=this.material.length;u<d;u++)l.push(a(e.materials,this.material[u]));r.material=l}else r.material=a(e.materials,this.material);if(this.children.length>0){r.children=[];for(let l=0;l<this.children.length;l++)r.children.push(this.children[l].toJSON(e).object)}if(this.animations.length>0){r.animations=[];for(let l=0;l<this.animations.length;l++){let u=this.animations[l];r.animations.push(a(e.animations,u))}}if(t){let l=c(e.geometries),u=c(e.materials),d=c(e.textures),p=c(e.images),m=c(e.shapes),x=c(e.skeletons),_=c(e.animations),b=c(e.nodes);l.length>0&&(n.geometries=l),u.length>0&&(n.materials=u),d.length>0&&(n.textures=d),p.length>0&&(n.images=p),m.length>0&&(n.shapes=m),x.length>0&&(n.skeletons=x),_.length>0&&(n.animations=_),b.length>0&&(n.nodes=b)}return n.object=r,n;function c(l){let u=[];for(let d in l){let p=l[d];delete p.metadata,u.push(p)}return u}}clone(e){return new this.constructor().copy(this,e)}copy(e,t=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),t===!0)for(let n=0;n<e.children.length;n++){let r=e.children[n];this.add(r.clone())}return this}};pn.DEFAULT_UP=new ee(0,1,0);pn.DEFAULT_MATRIX_AUTO_UPDATE=!0;pn.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;var ii=new ee,ki=new ee,cu=new ee,Oi=new ee,ws=new ee,Ms=new ee,ip=new ee,lu=new ee,hu=new ee,uu=new ee,du=new Kt,fu=new Kt,pu=new Kt,nr=class i{constructor(e=new ee,t=new ee,n=new ee){this.a=e,this.b=t,this.c=n}static getNormal(e,t,n,r){r.subVectors(n,t),ii.subVectors(e,t),r.cross(ii);let a=r.lengthSq();return a>0?r.multiplyScalar(1/Math.sqrt(a)):r.set(0,0,0)}static getBarycoord(e,t,n,r,a){ii.subVectors(r,t),ki.subVectors(n,t),cu.subVectors(e,t);let c=ii.dot(ii),l=ii.dot(ki),u=ii.dot(cu),d=ki.dot(ki),p=ki.dot(cu),m=c*d-l*l;if(m===0)return a.set(0,0,0),null;let x=1/m,_=(d*u-l*p)*x,b=(c*p-l*u)*x;return a.set(1-_-b,b,_)}static containsPoint(e,t,n,r){return this.getBarycoord(e,t,n,r,Oi)===null?!1:Oi.x>=0&&Oi.y>=0&&Oi.x+Oi.y<=1}static getInterpolation(e,t,n,r,a,c,l,u){return this.getBarycoord(e,t,n,r,Oi)===null?(u.x=0,u.y=0,"z"in u&&(u.z=0),"w"in u&&(u.w=0),null):(u.setScalar(0),u.addScaledVector(a,Oi.x),u.addScaledVector(c,Oi.y),u.addScaledVector(l,Oi.z),u)}static getInterpolatedAttribute(e,t,n,r,a,c){return du.setScalar(0),fu.setScalar(0),pu.setScalar(0),du.fromBufferAttribute(e,t),fu.fromBufferAttribute(e,n),pu.fromBufferAttribute(e,r),c.setScalar(0),c.addScaledVector(du,a.x),c.addScaledVector(fu,a.y),c.addScaledVector(pu,a.z),c}static isFrontFacing(e,t,n,r){return ii.subVectors(n,t),ki.subVectors(e,t),ii.cross(ki).dot(r)<0}set(e,t,n){return this.a.copy(e),this.b.copy(t),this.c.copy(n),this}setFromPointsAndIndices(e,t,n,r){return this.a.copy(e[t]),this.b.copy(e[n]),this.c.copy(e[r]),this}setFromAttributeAndIndices(e,t,n,r){return this.a.fromBufferAttribute(e,t),this.b.fromBufferAttribute(e,n),this.c.fromBufferAttribute(e,r),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return ii.subVectors(this.c,this.b),ki.subVectors(this.a,this.b),ii.cross(ki).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return i.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,t){return i.getBarycoord(e,this.a,this.b,this.c,t)}getInterpolation(e,t,n,r,a){return i.getInterpolation(e,this.a,this.b,this.c,t,n,r,a)}containsPoint(e){return i.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return i.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,t){let n=this.a,r=this.b,a=this.c,c,l;ws.subVectors(r,n),Ms.subVectors(a,n),lu.subVectors(e,n);let u=ws.dot(lu),d=Ms.dot(lu);if(u<=0&&d<=0)return t.copy(n);hu.subVectors(e,r);let p=ws.dot(hu),m=Ms.dot(hu);if(p>=0&&m<=p)return t.copy(r);let x=u*m-p*d;if(x<=0&&u>=0&&p<=0)return c=u/(u-p),t.copy(n).addScaledVector(ws,c);uu.subVectors(e,a);let _=ws.dot(uu),b=Ms.dot(uu);if(b>=0&&_<=b)return t.copy(a);let E=_*d-u*b;if(E<=0&&d>=0&&b<=0)return l=d/(d-b),t.copy(n).addScaledVector(Ms,l);let w=p*b-_*m;if(w<=0&&m-p>=0&&_-b>=0)return ip.subVectors(a,r),l=(m-p)/(m-p+(_-b)),t.copy(r).addScaledVector(ip,l);let v=1/(w+E+x);return c=E*v,l=x*v,t.copy(n).addScaledVector(ws,c).addScaledVector(Ms,l)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}},sm={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},er={h:0,s:0,l:0},nc={h:0,s:0,l:0};function mu(i,e,t){return t<0&&(t+=1),t>1&&(t-=1),t<1/6?i+(e-i)*6*t:t<1/2?e:t<2/3?i+(e-i)*6*(2/3-t):i}var ft=class{constructor(e,t,n){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,t,n)}set(e,t,n){if(t===void 0&&n===void 0){let r=e;r&&r.isColor?this.copy(r):typeof r=="number"?this.setHex(r):typeof r=="string"&&this.setStyle(r)}else this.setRGB(e,t,n);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,t=zn){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,It.colorSpaceToWorking(this,t),this}setRGB(e,t,n,r=It.workingColorSpace){return this.r=e,this.g=t,this.b=n,It.colorSpaceToWorking(this,r),this}setHSL(e,t,n,r=It.workingColorSpace){if(e=Wy(e,1),t=Et(t,0,1),n=Et(n,0,1),t===0)this.r=this.g=this.b=n;else{let a=n<=.5?n*(1+t):n+t-n*t,c=2*n-a;this.r=mu(c,a,e+1/3),this.g=mu(c,a,e),this.b=mu(c,a,e-1/3)}return It.colorSpaceToWorking(this,r),this}setStyle(e,t=zn){function n(a){a!==void 0&&parseFloat(a)<1&&lt("Color: Alpha component of "+e+" will be ignored.")}let r;if(r=/^(\w+)\(([^\)]*)\)/.exec(e)){let a,c=r[1],l=r[2];switch(c){case"rgb":case"rgba":if(a=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(l))return n(a[4]),this.setRGB(Math.min(255,parseInt(a[1],10))/255,Math.min(255,parseInt(a[2],10))/255,Math.min(255,parseInt(a[3],10))/255,t);if(a=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(l))return n(a[4]),this.setRGB(Math.min(100,parseInt(a[1],10))/100,Math.min(100,parseInt(a[2],10))/100,Math.min(100,parseInt(a[3],10))/100,t);break;case"hsl":case"hsla":if(a=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(l))return n(a[4]),this.setHSL(parseFloat(a[1])/360,parseFloat(a[2])/100,parseFloat(a[3])/100,t);break;default:lt("Color: Unknown color model "+e)}}else if(r=/^\#([A-Fa-f\d]+)$/.exec(e)){let a=r[1],c=a.length;if(c===3)return this.setRGB(parseInt(a.charAt(0),16)/15,parseInt(a.charAt(1),16)/15,parseInt(a.charAt(2),16)/15,t);if(c===6)return this.setHex(parseInt(a,16),t);lt("Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,t);return this}setColorName(e,t=zn){let n=sm[e.toLowerCase()];return n!==void 0?this.setHex(n,t):lt("Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=Bi(e.r),this.g=Bi(e.g),this.b=Bi(e.b),this}copyLinearToSRGB(e){return this.r=As(e.r),this.g=As(e.g),this.b=As(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=zn){return It.workingToColorSpace(bn.copy(this),e),Math.round(Et(bn.r*255,0,255))*65536+Math.round(Et(bn.g*255,0,255))*256+Math.round(Et(bn.b*255,0,255))}getHexString(e=zn){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,t=It.workingColorSpace){It.workingToColorSpace(bn.copy(this),t);let n=bn.r,r=bn.g,a=bn.b,c=Math.max(n,r,a),l=Math.min(n,r,a),u,d,p=(l+c)/2;if(l===c)u=0,d=0;else{let m=c-l;switch(d=p<=.5?m/(c+l):m/(2-c-l),c){case n:u=(r-a)/m+(r<a?6:0);break;case r:u=(a-n)/m+2;break;case a:u=(n-r)/m+4;break}u/=6}return e.h=u,e.s=d,e.l=p,e}getRGB(e,t=It.workingColorSpace){return It.workingToColorSpace(bn.copy(this),t),e.r=bn.r,e.g=bn.g,e.b=bn.b,e}getStyle(e=zn){It.workingToColorSpace(bn.copy(this),e);let t=bn.r,n=bn.g,r=bn.b;return e!==zn?`color(${e} ${t.toFixed(3)} ${n.toFixed(3)} ${r.toFixed(3)})`:`rgb(${Math.round(t*255)},${Math.round(n*255)},${Math.round(r*255)})`}offsetHSL(e,t,n){return this.getHSL(er),this.setHSL(er.h+e,er.s+t,er.l+n)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,t){return this.r=e.r+t.r,this.g=e.g+t.g,this.b=e.b+t.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,t){return this.r+=(e.r-this.r)*t,this.g+=(e.g-this.g)*t,this.b+=(e.b-this.b)*t,this}lerpColors(e,t,n){return this.r=e.r+(t.r-e.r)*n,this.g=e.g+(t.g-e.g)*n,this.b=e.b+(t.b-e.b)*n,this}lerpHSL(e,t){this.getHSL(er),e.getHSL(nc);let n=Jh(er.h,nc.h,t),r=Jh(er.s,nc.s,t),a=Jh(er.l,nc.l,t);return this.setHSL(n,r,a),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){let t=this.r,n=this.g,r=this.b,a=e.elements;return this.r=a[0]*t+a[3]*n+a[6]*r,this.g=a[1]*t+a[4]*n+a[7]*r,this.b=a[2]*t+a[5]*n+a[8]*r,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,t=0){return this.r=e[t],this.g=e[t+1],this.b=e[t+2],this}toArray(e=[],t=0){return e[t]=this.r,e[t+1]=this.g,e[t+2]=this.b,e}fromBufferAttribute(e,t){return this.r=e.getX(t),this.g=e.getY(t),this.b=e.getZ(t),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}},bn=new ft;ft.NAMES=sm;var tb=0,Hi=class extends Vi{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:tb++}),this.uuid=eo(),this.name="",this.type="Material",this.blending=Fr,this.side=zi,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=gc,this.blendDst=xc,this.blendEquation=ir,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new ft(0,0,0),this.blendAlpha=0,this.depthFunc=Dr,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=Su,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=Pr,this.stencilZFail=Pr,this.stencilZPass=Pr,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.allowOverride=!0,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(let t in e){let n=e[t];if(n===void 0){lt(`Material: parameter '${t}' has value of undefined.`);continue}let r=this[t];if(r===void 0){lt(`Material: '${t}' is not a property of THREE.${this.type}.`);continue}r&&r.isColor?r.set(n):r&&r.isVector3&&n&&n.isVector3?r.copy(n):this[t]=n}}toJSON(e){let t=e===void 0||typeof e=="string";t&&(e={textures:{},images:{}});let n={metadata:{version:4.7,type:"Material",generator:"Material.toJSON"}};n.uuid=this.uuid,n.type=this.type,this.name!==""&&(n.name=this.name),this.color&&this.color.isColor&&(n.color=this.color.getHex()),this.roughness!==void 0&&(n.roughness=this.roughness),this.metalness!==void 0&&(n.metalness=this.metalness),this.sheen!==void 0&&(n.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(n.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(n.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(n.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(n.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(n.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(n.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(n.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(n.shininess=this.shininess),this.clearcoat!==void 0&&(n.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(n.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(n.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(n.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(n.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,n.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.sheenColorMap&&this.sheenColorMap.isTexture&&(n.sheenColorMap=this.sheenColorMap.toJSON(e).uuid),this.sheenRoughnessMap&&this.sheenRoughnessMap.isTexture&&(n.sheenRoughnessMap=this.sheenRoughnessMap.toJSON(e).uuid),this.dispersion!==void 0&&(n.dispersion=this.dispersion),this.iridescence!==void 0&&(n.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(n.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(n.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(n.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(n.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(n.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(n.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(n.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(n.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(n.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(n.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(n.lightMap=this.lightMap.toJSON(e).uuid,n.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(n.aoMap=this.aoMap.toJSON(e).uuid,n.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(n.bumpMap=this.bumpMap.toJSON(e).uuid,n.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(n.normalMap=this.normalMap.toJSON(e).uuid,n.normalMapType=this.normalMapType,n.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(n.displacementMap=this.displacementMap.toJSON(e).uuid,n.displacementScale=this.displacementScale,n.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(n.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(n.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(n.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(n.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(n.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(n.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(n.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(n.combine=this.combine)),this.envMapRotation!==void 0&&(n.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(n.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(n.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(n.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(n.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(n.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(n.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(n.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(n.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(n.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(n.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(n.size=this.size),this.shadowSide!==null&&(n.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(n.sizeAttenuation=this.sizeAttenuation),this.blending!==Fr&&(n.blending=this.blending),this.side!==zi&&(n.side=this.side),this.vertexColors===!0&&(n.vertexColors=!0),this.opacity<1&&(n.opacity=this.opacity),this.transparent===!0&&(n.transparent=!0),this.blendSrc!==gc&&(n.blendSrc=this.blendSrc),this.blendDst!==xc&&(n.blendDst=this.blendDst),this.blendEquation!==ir&&(n.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(n.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(n.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(n.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(n.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(n.blendAlpha=this.blendAlpha),this.depthFunc!==Dr&&(n.depthFunc=this.depthFunc),this.depthTest===!1&&(n.depthTest=this.depthTest),this.depthWrite===!1&&(n.depthWrite=this.depthWrite),this.colorWrite===!1&&(n.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(n.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==Su&&(n.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(n.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(n.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==Pr&&(n.stencilFail=this.stencilFail),this.stencilZFail!==Pr&&(n.stencilZFail=this.stencilZFail),this.stencilZPass!==Pr&&(n.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(n.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(n.rotation=this.rotation),this.polygonOffset===!0&&(n.polygonOffset=!0),this.polygonOffsetFactor!==0&&(n.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(n.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(n.linewidth=this.linewidth),this.dashSize!==void 0&&(n.dashSize=this.dashSize),this.gapSize!==void 0&&(n.gapSize=this.gapSize),this.scale!==void 0&&(n.scale=this.scale),this.dithering===!0&&(n.dithering=!0),this.alphaTest>0&&(n.alphaTest=this.alphaTest),this.alphaHash===!0&&(n.alphaHash=!0),this.alphaToCoverage===!0&&(n.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(n.premultipliedAlpha=!0),this.forceSinglePass===!0&&(n.forceSinglePass=!0),this.wireframe===!0&&(n.wireframe=!0),this.wireframeLinewidth>1&&(n.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(n.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(n.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(n.flatShading=!0),this.visible===!1&&(n.visible=!1),this.toneMapped===!1&&(n.toneMapped=!1),this.fog===!1&&(n.fog=!1),Object.keys(this.userData).length>0&&(n.userData=this.userData);function r(a){let c=[];for(let l in a){let u=a[l];delete u.metadata,c.push(u)}return c}if(t){let a=r(e.textures),c=r(e.images);a.length>0&&(n.textures=a),c.length>0&&(n.images=c)}return n}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;let t=e.clippingPlanes,n=null;if(t!==null){let r=t.length;n=new Array(r);for(let a=0;a!==r;++a)n[a]=t[a].clone()}return this.clippingPlanes=n,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}},Ra=class extends Hi{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new ft(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new oi,this.combine=Uu,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}};var tn=new ee,ic=new Tt,nb=0,wn=class{constructor(e,t,n=!1){if(Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,Object.defineProperty(this,"id",{value:nb++}),this.name="",this.array=e,this.itemSize=t,this.count=e!==void 0?e.length/t:0,this.normalized=n,this.usage=Eu,this.updateRanges=[],this.gpuType=Ti,this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this}copyAt(e,t,n){e*=this.itemSize,n*=t.itemSize;for(let r=0,a=this.itemSize;r<a;r++)this.array[e+r]=t.array[n+r];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let t=0,n=this.count;t<n;t++)ic.fromBufferAttribute(this,t),ic.applyMatrix3(e),this.setXY(t,ic.x,ic.y);else if(this.itemSize===3)for(let t=0,n=this.count;t<n;t++)tn.fromBufferAttribute(this,t),tn.applyMatrix3(e),this.setXYZ(t,tn.x,tn.y,tn.z);return this}applyMatrix4(e){for(let t=0,n=this.count;t<n;t++)tn.fromBufferAttribute(this,t),tn.applyMatrix4(e),this.setXYZ(t,tn.x,tn.y,tn.z);return this}applyNormalMatrix(e){for(let t=0,n=this.count;t<n;t++)tn.fromBufferAttribute(this,t),tn.applyNormalMatrix(e),this.setXYZ(t,tn.x,tn.y,tn.z);return this}transformDirection(e){for(let t=0,n=this.count;t<n;t++)tn.fromBufferAttribute(this,t),tn.transformDirection(e),this.setXYZ(t,tn.x,tn.y,tn.z);return this}set(e,t=0){return this.array.set(e,t),this}getComponent(e,t){let n=this.array[e*this.itemSize+t];return this.normalized&&(n=_a(n,this.array)),n}setComponent(e,t,n){return this.normalized&&(n=Pn(n,this.array)),this.array[e*this.itemSize+t]=n,this}getX(e){let t=this.array[e*this.itemSize];return this.normalized&&(t=_a(t,this.array)),t}setX(e,t){return this.normalized&&(t=Pn(t,this.array)),this.array[e*this.itemSize]=t,this}getY(e){let t=this.array[e*this.itemSize+1];return this.normalized&&(t=_a(t,this.array)),t}setY(e,t){return this.normalized&&(t=Pn(t,this.array)),this.array[e*this.itemSize+1]=t,this}getZ(e){let t=this.array[e*this.itemSize+2];return this.normalized&&(t=_a(t,this.array)),t}setZ(e,t){return this.normalized&&(t=Pn(t,this.array)),this.array[e*this.itemSize+2]=t,this}getW(e){let t=this.array[e*this.itemSize+3];return this.normalized&&(t=_a(t,this.array)),t}setW(e,t){return this.normalized&&(t=Pn(t,this.array)),this.array[e*this.itemSize+3]=t,this}setXY(e,t,n){return e*=this.itemSize,this.normalized&&(t=Pn(t,this.array),n=Pn(n,this.array)),this.array[e+0]=t,this.array[e+1]=n,this}setXYZ(e,t,n,r){return e*=this.itemSize,this.normalized&&(t=Pn(t,this.array),n=Pn(n,this.array),r=Pn(r,this.array)),this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=r,this}setXYZW(e,t,n,r,a){return e*=this.itemSize,this.normalized&&(t=Pn(t,this.array),n=Pn(n,this.array),r=Pn(r,this.array),a=Pn(a,this.array)),this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=r,this.array[e+3]=a,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){let e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(e.name=this.name),this.usage!==Eu&&(e.usage=this.usage),e}};var Ia=class extends wn{constructor(e,t,n){super(new Uint16Array(e),t,n)}};var Pa=class extends wn{constructor(e,t,n){super(new Uint32Array(e),t,n)}};var Jt=class extends wn{constructor(e,t,n){super(new Float32Array(e),t,n)}},ib=0,jn=new Zt,gu=new pn,Ss=new ee,Bn=new ai,wa=new ai,cn=new ee,mn=class i extends Vi{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:ib++}),this.uuid=eo(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(ju(e)?Pa:Ia)(e,1):this.index=e,this}setIndirect(e){return this.indirect=e,this}getIndirect(){return this.indirect}getAttribute(e){return this.attributes[e]}setAttribute(e,t){return this.attributes[e]=t,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,t,n=0){this.groups.push({start:e,count:t,materialIndex:n})}clearGroups(){this.groups=[]}setDrawRange(e,t){this.drawRange.start=e,this.drawRange.count=t}applyMatrix4(e){let t=this.attributes.position;t!==void 0&&(t.applyMatrix4(e),t.needsUpdate=!0);let n=this.attributes.normal;if(n!==void 0){let a=new mt().getNormalMatrix(e);n.applyNormalMatrix(a),n.needsUpdate=!0}let r=this.attributes.tangent;return r!==void 0&&(r.transformDirection(e),r.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(e){return jn.makeRotationFromQuaternion(e),this.applyMatrix4(jn),this}rotateX(e){return jn.makeRotationX(e),this.applyMatrix4(jn),this}rotateY(e){return jn.makeRotationY(e),this.applyMatrix4(jn),this}rotateZ(e){return jn.makeRotationZ(e),this.applyMatrix4(jn),this}translate(e,t,n){return jn.makeTranslation(e,t,n),this.applyMatrix4(jn),this}scale(e,t,n){return jn.makeScale(e,t,n),this.applyMatrix4(jn),this}lookAt(e){return gu.lookAt(e),gu.updateMatrix(),this.applyMatrix4(gu.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(Ss).negate(),this.translate(Ss.x,Ss.y,Ss.z),this}setFromPoints(e){let t=this.getAttribute("position");if(t===void 0){let n=[];for(let r=0,a=e.length;r<a;r++){let c=e[r];n.push(c.x,c.y,c.z||0)}this.setAttribute("position",new Jt(n,3))}else{let n=Math.min(e.length,t.count);for(let r=0;r<n;r++){let a=e[r];t.setXYZ(r,a.x,a.y,a.z||0)}e.length>t.count&&lt("BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),t.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new ai);let e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){yt("BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new ee(-1/0,-1/0,-1/0),new ee(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),t)for(let n=0,r=t.length;n<r;n++){let a=t[n];Bn.setFromBufferAttribute(a),this.morphTargetsRelative?(cn.addVectors(this.boundingBox.min,Bn.min),this.boundingBox.expandByPoint(cn),cn.addVectors(this.boundingBox.max,Bn.max),this.boundingBox.expandByPoint(cn)):(this.boundingBox.expandByPoint(Bn.min),this.boundingBox.expandByPoint(Bn.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&yt('BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new Ur);let e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){yt("BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new ee,1/0);return}if(e){let n=this.boundingSphere.center;if(Bn.setFromBufferAttribute(e),t)for(let a=0,c=t.length;a<c;a++){let l=t[a];wa.setFromBufferAttribute(l),this.morphTargetsRelative?(cn.addVectors(Bn.min,wa.min),Bn.expandByPoint(cn),cn.addVectors(Bn.max,wa.max),Bn.expandByPoint(cn)):(Bn.expandByPoint(wa.min),Bn.expandByPoint(wa.max))}Bn.getCenter(n);let r=0;for(let a=0,c=e.count;a<c;a++)cn.fromBufferAttribute(e,a),r=Math.max(r,n.distanceToSquared(cn));if(t)for(let a=0,c=t.length;a<c;a++){let l=t[a],u=this.morphTargetsRelative;for(let d=0,p=l.count;d<p;d++)cn.fromBufferAttribute(l,d),u&&(Ss.fromBufferAttribute(e,d),cn.add(Ss)),r=Math.max(r,n.distanceToSquared(cn))}this.boundingSphere.radius=Math.sqrt(r),isNaN(this.boundingSphere.radius)&&yt('BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){let e=this.index,t=this.attributes;if(e===null||t.position===void 0||t.normal===void 0||t.uv===void 0){yt("BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}let n=t.position,r=t.normal,a=t.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new wn(new Float32Array(4*n.count),4));let c=this.getAttribute("tangent"),l=[],u=[];for(let B=0;B<n.count;B++)l[B]=new ee,u[B]=new ee;let d=new ee,p=new ee,m=new ee,x=new Tt,_=new Tt,b=new Tt,E=new ee,w=new ee;function v(B,I,R){d.fromBufferAttribute(n,B),p.fromBufferAttribute(n,I),m.fromBufferAttribute(n,R),x.fromBufferAttribute(a,B),_.fromBufferAttribute(a,I),b.fromBufferAttribute(a,R),p.sub(d),m.sub(d),_.sub(x),b.sub(x);let W=1/(_.x*b.y-b.x*_.y);isFinite(W)&&(E.copy(p).multiplyScalar(b.y).addScaledVector(m,-_.y).multiplyScalar(W),w.copy(m).multiplyScalar(_.x).addScaledVector(p,-b.x).multiplyScalar(W),l[B].add(E),l[I].add(E),l[R].add(E),u[B].add(w),u[I].add(w),u[R].add(w))}let D=this.groups;D.length===0&&(D=[{start:0,count:e.count}]);for(let B=0,I=D.length;B<I;++B){let R=D[B],W=R.start,j=R.count;for(let J=W,Y=W+j;J<Y;J+=3)v(e.getX(J+0),e.getX(J+1),e.getX(J+2))}let L=new ee,N=new ee,z=new ee,P=new ee;function T(B){z.fromBufferAttribute(r,B),P.copy(z);let I=l[B];L.copy(I),L.sub(z.multiplyScalar(z.dot(I))).normalize(),N.crossVectors(P,I);let W=N.dot(u[B])<0?-1:1;c.setXYZW(B,L.x,L.y,L.z,W)}for(let B=0,I=D.length;B<I;++B){let R=D[B],W=R.start,j=R.count;for(let J=W,Y=W+j;J<Y;J+=3)T(e.getX(J+0)),T(e.getX(J+1)),T(e.getX(J+2))}}computeVertexNormals(){let e=this.index,t=this.getAttribute("position");if(t!==void 0){let n=this.getAttribute("normal");if(n===void 0)n=new wn(new Float32Array(t.count*3),3),this.setAttribute("normal",n);else for(let x=0,_=n.count;x<_;x++)n.setXYZ(x,0,0,0);let r=new ee,a=new ee,c=new ee,l=new ee,u=new ee,d=new ee,p=new ee,m=new ee;if(e)for(let x=0,_=e.count;x<_;x+=3){let b=e.getX(x+0),E=e.getX(x+1),w=e.getX(x+2);r.fromBufferAttribute(t,b),a.fromBufferAttribute(t,E),c.fromBufferAttribute(t,w),p.subVectors(c,a),m.subVectors(r,a),p.cross(m),l.fromBufferAttribute(n,b),u.fromBufferAttribute(n,E),d.fromBufferAttribute(n,w),l.add(p),u.add(p),d.add(p),n.setXYZ(b,l.x,l.y,l.z),n.setXYZ(E,u.x,u.y,u.z),n.setXYZ(w,d.x,d.y,d.z)}else for(let x=0,_=t.count;x<_;x+=3)r.fromBufferAttribute(t,x+0),a.fromBufferAttribute(t,x+1),c.fromBufferAttribute(t,x+2),p.subVectors(c,a),m.subVectors(r,a),p.cross(m),n.setXYZ(x+0,p.x,p.y,p.z),n.setXYZ(x+1,p.x,p.y,p.z),n.setXYZ(x+2,p.x,p.y,p.z);this.normalizeNormals(),n.needsUpdate=!0}}normalizeNormals(){let e=this.attributes.normal;for(let t=0,n=e.count;t<n;t++)cn.fromBufferAttribute(e,t),cn.normalize(),e.setXYZ(t,cn.x,cn.y,cn.z)}toNonIndexed(){function e(l,u){let d=l.array,p=l.itemSize,m=l.normalized,x=new d.constructor(u.length*p),_=0,b=0;for(let E=0,w=u.length;E<w;E++){l.isInterleavedBufferAttribute?_=u[E]*l.data.stride+l.offset:_=u[E]*p;for(let v=0;v<p;v++)x[b++]=d[_++]}return new wn(x,p,m)}if(this.index===null)return lt("BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;let t=new i,n=this.index.array,r=this.attributes;for(let l in r){let u=r[l],d=e(u,n);t.setAttribute(l,d)}let a=this.morphAttributes;for(let l in a){let u=[],d=a[l];for(let p=0,m=d.length;p<m;p++){let x=d[p],_=e(x,n);u.push(_)}t.morphAttributes[l]=u}t.morphTargetsRelative=this.morphTargetsRelative;let c=this.groups;for(let l=0,u=c.length;l<u;l++){let d=c[l];t.addGroup(d.start,d.count,d.materialIndex)}return t}toJSON(){let e={metadata:{version:4.7,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.type,this.name!==""&&(e.name=this.name),Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0){let u=this.parameters;for(let d in u)u[d]!==void 0&&(e[d]=u[d]);return e}e.data={attributes:{}};let t=this.index;t!==null&&(e.data.index={type:t.array.constructor.name,array:Array.prototype.slice.call(t.array)});let n=this.attributes;for(let u in n){let d=n[u];e.data.attributes[u]=d.toJSON(e.data)}let r={},a=!1;for(let u in this.morphAttributes){let d=this.morphAttributes[u],p=[];for(let m=0,x=d.length;m<x;m++){let _=d[m];p.push(_.toJSON(e.data))}p.length>0&&(r[u]=p,a=!0)}a&&(e.data.morphAttributes=r,e.data.morphTargetsRelative=this.morphTargetsRelative);let c=this.groups;c.length>0&&(e.data.groups=JSON.parse(JSON.stringify(c)));let l=this.boundingSphere;return l!==null&&(e.data.boundingSphere=l.toJSON()),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;let t={};this.name=e.name;let n=e.index;n!==null&&this.setIndex(n.clone());let r=e.attributes;for(let d in r){let p=r[d];this.setAttribute(d,p.clone(t))}let a=e.morphAttributes;for(let d in a){let p=[],m=a[d];for(let x=0,_=m.length;x<_;x++)p.push(m[x].clone(t));this.morphAttributes[d]=p}this.morphTargetsRelative=e.morphTargetsRelative;let c=e.groups;for(let d=0,p=c.length;d<p;d++){let m=c[d];this.addGroup(m.start,m.count,m.materialIndex)}let l=e.boundingBox;l!==null&&(this.boundingBox=l.clone());let u=e.boundingSphere;return u!==null&&(this.boundingSphere=u.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}},rp=new Zt,Rr=new Fs,rc=new Ur,sp=new ee,sc=new ee,ac=new ee,oc=new ee,xu=new ee,cc=new ee,ap=new ee,lc=new ee,Ln=class extends pn{constructor(e=new mn,t=new Ra){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=t,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.count=1,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){let t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){let r=t[n[0]];if(r!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let a=0,c=r.length;a<c;a++){let l=r[a].name||String(a);this.morphTargetInfluences.push(0),this.morphTargetDictionary[l]=a}}}}getVertexPosition(e,t){let n=this.geometry,r=n.attributes.position,a=n.morphAttributes.position,c=n.morphTargetsRelative;t.fromBufferAttribute(r,e);let l=this.morphTargetInfluences;if(a&&l){cc.set(0,0,0);for(let u=0,d=a.length;u<d;u++){let p=l[u],m=a[u];p!==0&&(xu.fromBufferAttribute(m,e),c?cc.addScaledVector(xu,p):cc.addScaledVector(xu.sub(t),p))}t.add(cc)}return t}raycast(e,t){let n=this.geometry,r=this.material,a=this.matrixWorld;r!==void 0&&(n.boundingSphere===null&&n.computeBoundingSphere(),rc.copy(n.boundingSphere),rc.applyMatrix4(a),Rr.copy(e.ray).recast(e.near),!(rc.containsPoint(Rr.origin)===!1&&(Rr.intersectSphere(rc,sp)===null||Rr.origin.distanceToSquared(sp)>(e.far-e.near)**2))&&(rp.copy(a).invert(),Rr.copy(e.ray).applyMatrix4(rp),!(n.boundingBox!==null&&Rr.intersectsBox(n.boundingBox)===!1)&&this._computeIntersections(e,t,Rr)))}_computeIntersections(e,t,n){let r,a=this.geometry,c=this.material,l=a.index,u=a.attributes.position,d=a.attributes.uv,p=a.attributes.uv1,m=a.attributes.normal,x=a.groups,_=a.drawRange;if(l!==null)if(Array.isArray(c))for(let b=0,E=x.length;b<E;b++){let w=x[b],v=c[w.materialIndex],D=Math.max(w.start,_.start),L=Math.min(l.count,Math.min(w.start+w.count,_.start+_.count));for(let N=D,z=L;N<z;N+=3){let P=l.getX(N),T=l.getX(N+1),B=l.getX(N+2);r=hc(this,v,e,n,d,p,m,P,T,B),r&&(r.faceIndex=Math.floor(N/3),r.face.materialIndex=w.materialIndex,t.push(r))}}else{let b=Math.max(0,_.start),E=Math.min(l.count,_.start+_.count);for(let w=b,v=E;w<v;w+=3){let D=l.getX(w),L=l.getX(w+1),N=l.getX(w+2);r=hc(this,c,e,n,d,p,m,D,L,N),r&&(r.faceIndex=Math.floor(w/3),t.push(r))}}else if(u!==void 0)if(Array.isArray(c))for(let b=0,E=x.length;b<E;b++){let w=x[b],v=c[w.materialIndex],D=Math.max(w.start,_.start),L=Math.min(u.count,Math.min(w.start+w.count,_.start+_.count));for(let N=D,z=L;N<z;N+=3){let P=N,T=N+1,B=N+2;r=hc(this,v,e,n,d,p,m,P,T,B),r&&(r.faceIndex=Math.floor(N/3),r.face.materialIndex=w.materialIndex,t.push(r))}}else{let b=Math.max(0,_.start),E=Math.min(u.count,_.start+_.count);for(let w=b,v=E;w<v;w+=3){let D=w,L=w+1,N=w+2;r=hc(this,c,e,n,d,p,m,D,L,N),r&&(r.faceIndex=Math.floor(w/3),t.push(r))}}}};function rb(i,e,t,n,r,a,c,l){let u;if(e.side===Tn?u=n.intersectTriangle(c,a,r,!0,l):u=n.intersectTriangle(r,a,c,e.side===zi,l),u===null)return null;lc.copy(l),lc.applyMatrix4(i.matrixWorld);let d=t.ray.origin.distanceTo(lc);return d<t.near||d>t.far?null:{distance:d,point:lc.clone(),object:i}}function hc(i,e,t,n,r,a,c,l,u,d){i.getVertexPosition(l,sc),i.getVertexPosition(u,ac),i.getVertexPosition(d,oc);let p=rb(i,e,t,n,sc,ac,oc,ap);if(p){let m=new ee;nr.getBarycoord(ap,sc,ac,oc,m),r&&(p.uv=nr.getInterpolatedAttribute(r,l,u,d,m,new Tt)),a&&(p.uv1=nr.getInterpolatedAttribute(a,l,u,d,m,new Tt)),c&&(p.normal=nr.getInterpolatedAttribute(c,l,u,d,m,new ee),p.normal.dot(n.direction)>0&&p.normal.multiplyScalar(-1));let x={a:l,b:u,c:d,normal:new ee,materialIndex:0};nr.getNormal(sc,ac,oc,x.normal),p.face=x,p.barycoord=m}return p}var rr=class i extends mn{constructor(e=1,t=1,n=1,r=1,a=1,c=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:t,depth:n,widthSegments:r,heightSegments:a,depthSegments:c};let l=this;r=Math.floor(r),a=Math.floor(a),c=Math.floor(c);let u=[],d=[],p=[],m=[],x=0,_=0;b("z","y","x",-1,-1,n,t,e,c,a,0),b("z","y","x",1,-1,n,t,-e,c,a,1),b("x","z","y",1,1,e,n,t,r,c,2),b("x","z","y",1,-1,e,n,-t,r,c,3),b("x","y","z",1,-1,e,t,n,r,a,4),b("x","y","z",-1,-1,e,t,-n,r,a,5),this.setIndex(u),this.setAttribute("position",new Jt(d,3)),this.setAttribute("normal",new Jt(p,3)),this.setAttribute("uv",new Jt(m,2));function b(E,w,v,D,L,N,z,P,T,B,I){let R=N/T,W=z/B,j=N/2,J=z/2,Y=P/2,ce=T+1,H=B+1,Me=0,ie=0,we=new ee;for(let X=0;X<H;X++){let Be=X*W-J;for(let ht=0;ht<ce;ht++){let At=ht*R-j;we[E]=At*D,we[w]=Be*L,we[v]=Y,d.push(we.x,we.y,we.z),we[E]=0,we[w]=0,we[v]=P>0?1:-1,p.push(we.x,we.y,we.z),m.push(ht/T),m.push(1-X/B),Me+=1}}for(let X=0;X<B;X++)for(let Be=0;Be<T;Be++){let ht=x+Be+ce*X,At=x+Be+ce*(X+1),Ut=x+(Be+1)+ce*(X+1),Ct=x+(Be+1)+ce*X;u.push(ht,At,Ct),u.push(At,Ut,Ct),ie+=6}l.addGroup(_,ie,I),_+=ie,x+=Me}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new i(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}};function Hr(i){let e={};for(let t in i){e[t]={};for(let n in i[t]){let r=i[t][n];r&&(r.isColor||r.isMatrix3||r.isMatrix4||r.isVector2||r.isVector3||r.isVector4||r.isTexture||r.isQuaternion)?r.isRenderTargetTexture?(lt("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[t][n]=null):e[t][n]=r.clone():Array.isArray(r)?e[t][n]=r.slice():e[t][n]=r}}return e}function Mn(i){let e={};for(let t=0;t<i.length;t++){let n=Hr(i[t]);for(let r in n)e[r]=n[r]}return e}function sb(i){let e=[];for(let t=0;t<i.length;t++)e.push(i[t].clone());return e}function Yu(i){let e=i.getRenderTarget();return e===null?i.outputColorSpace:e.isXRRenderTarget===!0?e.texture.colorSpace:It.workingColorSpace}var am={clone:Hr,merge:Mn},ab=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,ob=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`,qn=class extends Hi{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=ab,this.fragmentShader=ob,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=Hr(e.uniforms),this.uniformsGroups=sb(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this}toJSON(e){let t=super.toJSON(e);t.glslVersion=this.glslVersion,t.uniforms={};for(let r in this.uniforms){let c=this.uniforms[r].value;c&&c.isTexture?t.uniforms[r]={type:"t",value:c.toJSON(e).uuid}:c&&c.isColor?t.uniforms[r]={type:"c",value:c.getHex()}:c&&c.isVector2?t.uniforms[r]={type:"v2",value:c.toArray()}:c&&c.isVector3?t.uniforms[r]={type:"v3",value:c.toArray()}:c&&c.isVector4?t.uniforms[r]={type:"v4",value:c.toArray()}:c&&c.isMatrix3?t.uniforms[r]={type:"m3",value:c.toArray()}:c&&c.isMatrix4?t.uniforms[r]={type:"m4",value:c.toArray()}:t.uniforms[r]={value:c}}Object.keys(this.defines).length>0&&(t.defines=this.defines),t.vertexShader=this.vertexShader,t.fragmentShader=this.fragmentShader,t.lights=this.lights,t.clipping=this.clipping;let n={};for(let r in this.extensions)this.extensions[r]===!0&&(n[r]=!0);return Object.keys(n).length>0&&(t.extensions=n),t}},Fa=class extends pn{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new Zt,this.projectionMatrix=new Zt,this.projectionMatrixInverse=new Zt,this.coordinateSystem=ri,this._reversedDepth=!1}get reversedDepth(){return this._reversedDepth}copy(e,t){return super.copy(e,t),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(e,t){super.updateWorldMatrix(e,t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}},tr=new ee,op=new Tt,cp=new Tt,fn=class extends Fa{constructor(e=50,t=1,n=.1,r=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=n,this.far=r,this.focus=10,this.aspect=t,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){let t=.5*this.getFilmHeight()/e;this.fov=bc*2*Math.atan(t),this.updateProjectionMatrix()}getFocalLength(){let e=Math.tan(Zh*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return bc*2*Math.atan(Math.tan(Zh*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(e,t,n){tr.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),t.set(tr.x,tr.y).multiplyScalar(-e/tr.z),tr.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),n.set(tr.x,tr.y).multiplyScalar(-e/tr.z)}getViewSize(e,t){return this.getViewBounds(e,op,cp),t.subVectors(cp,op)}setViewOffset(e,t,n,r,a,c){this.aspect=e/t,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=r,this.view.width=a,this.view.height=c,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let e=this.near,t=e*Math.tan(Zh*.5*this.fov)/this.zoom,n=2*t,r=this.aspect*n,a=-.5*r,c=this.view;if(this.view!==null&&this.view.enabled){let u=c.fullWidth,d=c.fullHeight;a+=c.offsetX*r/u,t-=c.offsetY*n/d,r*=c.width/u,n*=c.height/d}let l=this.filmOffset;l!==0&&(a+=e*l/this.getFilmWidth()),this.projectionMatrix.makePerspective(a,a+r,t,t-n,e,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){let t=super.toJSON(e);return t.object.fov=this.fov,t.object.zoom=this.zoom,t.object.near=this.near,t.object.far=this.far,t.object.focus=this.focus,t.object.aspect=this.aspect,this.view!==null&&(t.object.view=Object.assign({},this.view)),t.object.filmGauge=this.filmGauge,t.object.filmOffset=this.filmOffset,t}},Es=-90,Ts=1,Ec=class extends pn{constructor(e,t,n){super(),this.type="CubeCamera",this.renderTarget=n,this.coordinateSystem=null,this.activeMipmapLevel=0;let r=new fn(Es,Ts,e,t);r.layers=this.layers,this.add(r);let a=new fn(Es,Ts,e,t);a.layers=this.layers,this.add(a);let c=new fn(Es,Ts,e,t);c.layers=this.layers,this.add(c);let l=new fn(Es,Ts,e,t);l.layers=this.layers,this.add(l);let u=new fn(Es,Ts,e,t);u.layers=this.layers,this.add(u);let d=new fn(Es,Ts,e,t);d.layers=this.layers,this.add(d)}updateCoordinateSystem(){let e=this.coordinateSystem,t=this.children.concat(),[n,r,a,c,l,u]=t;for(let d of t)this.remove(d);if(e===ri)n.up.set(0,1,0),n.lookAt(1,0,0),r.up.set(0,1,0),r.lookAt(-1,0,0),a.up.set(0,0,-1),a.lookAt(0,1,0),c.up.set(0,0,1),c.lookAt(0,-1,0),l.up.set(0,1,0),l.lookAt(0,0,1),u.up.set(0,1,0),u.lookAt(0,0,-1);else if(e===Ta)n.up.set(0,-1,0),n.lookAt(-1,0,0),r.up.set(0,-1,0),r.lookAt(1,0,0),a.up.set(0,0,1),a.lookAt(0,1,0),c.up.set(0,0,-1),c.lookAt(0,-1,0),l.up.set(0,-1,0),l.lookAt(0,0,1),u.up.set(0,-1,0),u.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(let d of t)this.add(d),d.updateMatrixWorld()}update(e,t){this.parent===null&&this.updateMatrixWorld();let{renderTarget:n,activeMipmapLevel:r}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());let[a,c,l,u,d,p]=this.children,m=e.getRenderTarget(),x=e.getActiveCubeFace(),_=e.getActiveMipmapLevel(),b=e.xr.enabled;e.xr.enabled=!1;let E=n.texture.generateMipmaps;n.texture.generateMipmaps=!1,e.setRenderTarget(n,0,r),e.render(t,a),e.setRenderTarget(n,1,r),e.render(t,c),e.setRenderTarget(n,2,r),e.render(t,l),e.setRenderTarget(n,3,r),e.render(t,u),e.setRenderTarget(n,4,r),e.render(t,d),n.texture.generateMipmaps=E,e.setRenderTarget(n,5,r),e.render(t,p),e.setRenderTarget(m,x,_),e.xr.enabled=b,n.texture.needsPMREMUpdate=!0}},Da=class extends Dn{constructor(e=[],t=Br,n,r,a,c,l,u,d,p){super(e,t,n,r,a,c,l,u,d,p),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}},Tc=class extends Hn{constructor(e=1,t={}){super(e,e,t),this.isWebGLCubeRenderTarget=!0;let n={width:e,height:e,depth:1},r=[n,n,n,n,n,n];this.texture=new Da(r),this._setTextureOptions(t),this.texture.isRenderTargetTexture=!0}fromEquirectangularTexture(e,t){this.texture.type=t.type,this.texture.colorSpace=t.colorSpace,this.texture.generateMipmaps=t.generateMipmaps,this.texture.minFilter=t.minFilter,this.texture.magFilter=t.magFilter;let n={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},r=new rr(5,5,5),a=new qn({name:"CubemapFromEquirect",uniforms:Hr(n.uniforms),vertexShader:n.vertexShader,fragmentShader:n.fragmentShader,side:Tn,blending:Ei});a.uniforms.tEquirect.value=t;let c=new Ln(r,a),l=t.minFilter;return t.minFilter===or&&(t.minFilter=Vn),new Ec(1,10,this).update(e,c),t.minFilter=l,c.geometry.dispose(),c.material.dispose(),this}clear(e,t=!0,n=!0,r=!0){let a=e.getRenderTarget();for(let c=0;c<6;c++)e.setRenderTarget(this,c),e.clear(t,n,r);e.setRenderTarget(a)}},wi=class extends pn{constructor(){super(),this.isGroup=!0,this.type="Group"}},cb={type:"move"},Ls=class{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new wi,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new wi,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new ee,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new ee),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new wi,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new ee,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new ee),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){let t=this._hand;if(t)for(let n of e.hand.values())this._getHandJoint(t,n)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,t,n){let r=null,a=null,c=null,l=this._targetRay,u=this._grip,d=this._hand;if(e&&t.session.visibilityState!=="visible-blurred"){if(d&&e.hand){c=!0;for(let E of e.hand.values()){let w=t.getJointPose(E,n),v=this._getHandJoint(d,E);w!==null&&(v.matrix.fromArray(w.transform.matrix),v.matrix.decompose(v.position,v.rotation,v.scale),v.matrixWorldNeedsUpdate=!0,v.jointRadius=w.radius),v.visible=w!==null}let p=d.joints["index-finger-tip"],m=d.joints["thumb-tip"],x=p.position.distanceTo(m.position),_=.02,b=.005;d.inputState.pinching&&x>_+b?(d.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!d.inputState.pinching&&x<=_-b&&(d.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else u!==null&&e.gripSpace&&(a=t.getPose(e.gripSpace,n),a!==null&&(u.matrix.fromArray(a.transform.matrix),u.matrix.decompose(u.position,u.rotation,u.scale),u.matrixWorldNeedsUpdate=!0,a.linearVelocity?(u.hasLinearVelocity=!0,u.linearVelocity.copy(a.linearVelocity)):u.hasLinearVelocity=!1,a.angularVelocity?(u.hasAngularVelocity=!0,u.angularVelocity.copy(a.angularVelocity)):u.hasAngularVelocity=!1));l!==null&&(r=t.getPose(e.targetRaySpace,n),r===null&&a!==null&&(r=a),r!==null&&(l.matrix.fromArray(r.transform.matrix),l.matrix.decompose(l.position,l.rotation,l.scale),l.matrixWorldNeedsUpdate=!0,r.linearVelocity?(l.hasLinearVelocity=!0,l.linearVelocity.copy(r.linearVelocity)):l.hasLinearVelocity=!1,r.angularVelocity?(l.hasAngularVelocity=!0,l.angularVelocity.copy(r.angularVelocity)):l.hasAngularVelocity=!1,this.dispatchEvent(cb)))}return l!==null&&(l.visible=r!==null),u!==null&&(u.visible=a!==null),d!==null&&(d.visible=c!==null),this}_getHandJoint(e,t){if(e.joints[t.jointName]===void 0){let n=new wi;n.matrixAutoUpdate=!1,n.visible=!1,e.joints[t.jointName]=n,e.add(n)}return e.joints[t.jointName]}};var La=class i{constructor(e,t=1,n=1e3){this.isFog=!0,this.name="",this.color=new ft(e),this.near=t,this.far=n}clone(){return new i(this.color,this.near,this.far)}toJSON(){return{type:"Fog",name:this.name,color:this.color.getHex(),near:this.near,far:this.far}}},Ua=class extends pn{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new oi,this.environmentIntensity=1,this.environmentRotation=new oi,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,t){return super.copy(e,t),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,this.backgroundRotation.copy(e.backgroundRotation),this.environmentIntensity=e.environmentIntensity,this.environmentRotation.copy(e.environmentRotation),e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){let t=super.toJSON(e);return this.fog!==null&&(t.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(t.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(t.object.backgroundIntensity=this.backgroundIntensity),t.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(t.object.environmentIntensity=this.environmentIntensity),t.object.environmentRotation=this.environmentRotation.toArray(),t}};var Ac=class extends Dn{constructor(e=null,t=1,n=1,r,a,c,l,u,d=Fn,p=Fn,m,x){super(null,c,l,u,d,p,r,a,m,x),this.isDataTexture=!0,this.image={data:e,width:t,height:n},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}};var _u=new ee,lb=new ee,hb=new mt,yi=class{constructor(e=new ee(1,0,0),t=0){this.isPlane=!0,this.normal=e,this.constant=t}set(e,t){return this.normal.copy(e),this.constant=t,this}setComponents(e,t,n,r){return this.normal.set(e,t,n),this.constant=r,this}setFromNormalAndCoplanarPoint(e,t){return this.normal.copy(e),this.constant=-t.dot(this.normal),this}setFromCoplanarPoints(e,t,n){let r=_u.subVectors(n,t).cross(lb.subVectors(e,t)).normalize();return this.setFromNormalAndCoplanarPoint(r,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){let e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,t){return t.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,t){let n=e.delta(_u),r=this.normal.dot(n);if(r===0)return this.distanceToPoint(e.start)===0?t.copy(e.start):null;let a=-(e.start.dot(this.normal)+this.constant)/r;return a<0||a>1?null:t.copy(e.start).addScaledVector(n,a)}intersectsLine(e){let t=this.distanceToPoint(e.start),n=this.distanceToPoint(e.end);return t<0&&n>0||n<0&&t>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,t){let n=t||hb.getNormalMatrix(e),r=this.coplanarPoint(_u).applyMatrix4(e),a=this.normal.applyMatrix3(n).normalize();return this.constant=-r.dot(a),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}},Ir=new Ur,ub=new Tt(.5,.5),uc=new ee,Us=class{constructor(e=new yi,t=new yi,n=new yi,r=new yi,a=new yi,c=new yi){this.planes=[e,t,n,r,a,c]}set(e,t,n,r,a,c){let l=this.planes;return l[0].copy(e),l[1].copy(t),l[2].copy(n),l[3].copy(r),l[4].copy(a),l[5].copy(c),this}copy(e){let t=this.planes;for(let n=0;n<6;n++)t[n].copy(e.planes[n]);return this}setFromProjectionMatrix(e,t=ri,n=!1){let r=this.planes,a=e.elements,c=a[0],l=a[1],u=a[2],d=a[3],p=a[4],m=a[5],x=a[6],_=a[7],b=a[8],E=a[9],w=a[10],v=a[11],D=a[12],L=a[13],N=a[14],z=a[15];if(r[0].setComponents(d-c,_-p,v-b,z-D).normalize(),r[1].setComponents(d+c,_+p,v+b,z+D).normalize(),r[2].setComponents(d+l,_+m,v+E,z+L).normalize(),r[3].setComponents(d-l,_-m,v-E,z-L).normalize(),n)r[4].setComponents(u,x,w,N).normalize(),r[5].setComponents(d-u,_-x,v-w,z-N).normalize();else if(r[4].setComponents(d-u,_-x,v-w,z-N).normalize(),t===ri)r[5].setComponents(d+u,_+x,v+w,z+N).normalize();else if(t===Ta)r[5].setComponents(u,x,w,N).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+t);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),Ir.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{let t=e.geometry;t.boundingSphere===null&&t.computeBoundingSphere(),Ir.copy(t.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(Ir)}intersectsSprite(e){Ir.center.set(0,0,0);let t=ub.distanceTo(e.center);return Ir.radius=.7071067811865476+t,Ir.applyMatrix4(e.matrixWorld),this.intersectsSphere(Ir)}intersectsSphere(e){let t=this.planes,n=e.center,r=-e.radius;for(let a=0;a<6;a++)if(t[a].distanceToPoint(n)<r)return!1;return!0}intersectsBox(e){let t=this.planes;for(let n=0;n<6;n++){let r=t[n];if(uc.x=r.normal.x>0?e.max.x:e.min.x,uc.y=r.normal.y>0?e.max.y:e.min.y,uc.z=r.normal.z>0?e.max.z:e.min.z,r.distanceToPoint(uc)<0)return!1}return!0}containsPoint(e){let t=this.planes;for(let n=0;n<6;n++)if(t[n].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}};var Nr=class extends Hi{constructor(e){super(),this.isLineBasicMaterial=!0,this.type="LineBasicMaterial",this.color=new ft(16777215),this.map=null,this.linewidth=1,this.linecap="round",this.linejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.linewidth=e.linewidth,this.linecap=e.linecap,this.linejoin=e.linejoin,this.fog=e.fog,this}},Cc=new ee,Rc=new ee,lp=new Zt,Ma=new Fs,dc=new Ur,vu=new ee,hp=new ee,Ns=class extends pn{constructor(e=new mn,t=new Nr){super(),this.isLine=!0,this.type="Line",this.geometry=e,this.material=t,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}computeLineDistances(){let e=this.geometry;if(e.index===null){let t=e.attributes.position,n=[0];for(let r=1,a=t.count;r<a;r++)Cc.fromBufferAttribute(t,r-1),Rc.fromBufferAttribute(t,r),n[r]=n[r-1],n[r]+=Cc.distanceTo(Rc);e.setAttribute("lineDistance",new Jt(n,1))}else lt("Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}raycast(e,t){let n=this.geometry,r=this.matrixWorld,a=e.params.Line.threshold,c=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),dc.copy(n.boundingSphere),dc.applyMatrix4(r),dc.radius+=a,e.ray.intersectsSphere(dc)===!1)return;lp.copy(r).invert(),Ma.copy(e.ray).applyMatrix4(lp);let l=a/((this.scale.x+this.scale.y+this.scale.z)/3),u=l*l,d=this.isLineSegments?2:1,p=n.index,x=n.attributes.position;if(p!==null){let _=Math.max(0,c.start),b=Math.min(p.count,c.start+c.count);for(let E=_,w=b-1;E<w;E+=d){let v=p.getX(E),D=p.getX(E+1),L=fc(this,e,Ma,u,v,D,E);L&&t.push(L)}if(this.isLineLoop){let E=p.getX(b-1),w=p.getX(_),v=fc(this,e,Ma,u,E,w,b-1);v&&t.push(v)}}else{let _=Math.max(0,c.start),b=Math.min(x.count,c.start+c.count);for(let E=_,w=b-1;E<w;E+=d){let v=fc(this,e,Ma,u,E,E+1,E);v&&t.push(v)}if(this.isLineLoop){let E=fc(this,e,Ma,u,b-1,_,b-1);E&&t.push(E)}}}updateMorphTargets(){let t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){let r=t[n[0]];if(r!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let a=0,c=r.length;a<c;a++){let l=r[a].name||String(a);this.morphTargetInfluences.push(0),this.morphTargetDictionary[l]=a}}}}};function fc(i,e,t,n,r,a,c){let l=i.geometry.attributes.position;if(Cc.fromBufferAttribute(l,r),Rc.fromBufferAttribute(l,a),t.distanceSqToSegment(Cc,Rc,vu,hp)>n)return;vu.applyMatrix4(i.matrixWorld);let d=e.ray.origin.distanceTo(vu);if(!(d<e.near||d>e.far))return{distance:d,point:hp.clone().applyMatrix4(i.matrixWorld),index:c,face:null,faceIndex:null,barycoord:null,object:i}}var up=new ee,dp=new ee,Ic=class extends Ns{constructor(e,t){super(e,t),this.isLineSegments=!0,this.type="LineSegments"}computeLineDistances(){let e=this.geometry;if(e.index===null){let t=e.attributes.position,n=[];for(let r=0,a=t.count;r<a;r+=2)up.fromBufferAttribute(t,r),dp.fromBufferAttribute(t,r+1),n[r]=r===0?0:n[r-1],n[r+1]=n[r]+up.distanceTo(dp);e.setAttribute("lineDistance",new Jt(n,1))}else lt("LineSegments.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}};var Na=class extends Dn{constructor(e,t,n=cr,r,a,c,l=Fn,u=Fn,d,p=Cs,m=1){if(p!==Cs&&p!==zs)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");let x={width:e,height:t,depth:m};super(x,r,a,c,l,u,p,n,d),this.isDepthTexture=!0,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.source=new Ps(Object.assign({},e.image)),this.compareFunction=e.compareFunction,this}toJSON(e){let t=super.toJSON(e);return this.compareFunction!==null&&(t.compareFunction=this.compareFunction),t}},ka=class extends Dn{constructor(e=null){super(),this.sourceTexture=e,this.isExternalTexture=!0}copy(e){return super.copy(e),this.sourceTexture=e.sourceTexture,this}},Oa=class i extends mn{constructor(e=1,t=1,n=4,r=8,a=1){super(),this.type="CapsuleGeometry",this.parameters={radius:e,height:t,capSegments:n,radialSegments:r,heightSegments:a},t=Math.max(0,t),n=Math.max(1,Math.floor(n)),r=Math.max(3,Math.floor(r)),a=Math.max(1,Math.floor(a));let c=[],l=[],u=[],d=[],p=t/2,m=Math.PI/2*e,x=t,_=2*m+x,b=n*2+a,E=r+1,w=new ee,v=new ee;for(let D=0;D<=b;D++){let L=0,N=0,z=0,P=0;if(D<=n){let I=D/n,R=I*Math.PI/2;N=-p-e*Math.cos(R),z=e*Math.sin(R),P=-e*Math.cos(R),L=I*m}else if(D<=n+a){let I=(D-n)/a;N=-p+I*t,z=e,P=0,L=m+I*x}else{let I=(D-n-a)/n,R=I*Math.PI/2;N=p+e*Math.sin(R),z=e*Math.cos(R),P=e*Math.sin(R),L=m+x+I*m}let T=Math.max(0,Math.min(1,L/_)),B=0;D===0?B=.5/r:D===b&&(B=-.5/r);for(let I=0;I<=r;I++){let R=I/r,W=R*Math.PI*2,j=Math.sin(W),J=Math.cos(W);v.x=-z*J,v.y=N,v.z=z*j,l.push(v.x,v.y,v.z),w.set(-z*J,P,z*j),w.normalize(),u.push(w.x,w.y,w.z),d.push(R+B,T)}if(D>0){let I=(D-1)*E;for(let R=0;R<r;R++){let W=I+R,j=I+R+1,J=D*E+R,Y=D*E+R+1;c.push(W,j,J),c.push(j,Y,J)}}}this.setIndex(c),this.setAttribute("position",new Jt(l,3)),this.setAttribute("normal",new Jt(u,3)),this.setAttribute("uv",new Jt(d,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new i(e.radius,e.height,e.capSegments,e.radialSegments,e.heightSegments)}};var Ba=class i extends mn{constructor(e=1,t=1,n=1,r=32,a=1,c=!1,l=0,u=Math.PI*2){super(),this.type="CylinderGeometry",this.parameters={radiusTop:e,radiusBottom:t,height:n,radialSegments:r,heightSegments:a,openEnded:c,thetaStart:l,thetaLength:u};let d=this;r=Math.floor(r),a=Math.floor(a);let p=[],m=[],x=[],_=[],b=0,E=[],w=n/2,v=0;D(),c===!1&&(e>0&&L(!0),t>0&&L(!1)),this.setIndex(p),this.setAttribute("position",new Jt(m,3)),this.setAttribute("normal",new Jt(x,3)),this.setAttribute("uv",new Jt(_,2));function D(){let N=new ee,z=new ee,P=0,T=(t-e)/n;for(let B=0;B<=a;B++){let I=[],R=B/a,W=R*(t-e)+e;for(let j=0;j<=r;j++){let J=j/r,Y=J*u+l,ce=Math.sin(Y),H=Math.cos(Y);z.x=W*ce,z.y=-R*n+w,z.z=W*H,m.push(z.x,z.y,z.z),N.set(ce,T,H).normalize(),x.push(N.x,N.y,N.z),_.push(J,1-R),I.push(b++)}E.push(I)}for(let B=0;B<r;B++)for(let I=0;I<a;I++){let R=E[I][B],W=E[I+1][B],j=E[I+1][B+1],J=E[I][B+1];(e>0||I!==0)&&(p.push(R,W,J),P+=3),(t>0||I!==a-1)&&(p.push(W,j,J),P+=3)}d.addGroup(v,P,0),v+=P}function L(N){let z=b,P=new Tt,T=new ee,B=0,I=N===!0?e:t,R=N===!0?1:-1;for(let j=1;j<=r;j++)m.push(0,w*R,0),x.push(0,R,0),_.push(.5,.5),b++;let W=b;for(let j=0;j<=r;j++){let Y=j/r*u+l,ce=Math.cos(Y),H=Math.sin(Y);T.x=I*H,T.y=w*R,T.z=I*ce,m.push(T.x,T.y,T.z),x.push(0,R,0),P.x=ce*.5+.5,P.y=H*.5*R+.5,_.push(P.x,P.y),b++}for(let j=0;j<r;j++){let J=z+j,Y=W+j;N===!0?p.push(Y,Y+1,J):p.push(Y+1,Y,J),B+=3}d.addGroup(v,B,N===!0?1:2),v+=B}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new i(e.radiusTop,e.radiusBottom,e.height,e.radialSegments,e.heightSegments,e.openEnded,e.thetaStart,e.thetaLength)}};var kr=class i extends mn{constructor(e=1,t=1,n=1,r=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:t,widthSegments:n,heightSegments:r};let a=e/2,c=t/2,l=Math.floor(n),u=Math.floor(r),d=l+1,p=u+1,m=e/l,x=t/u,_=[],b=[],E=[],w=[];for(let v=0;v<p;v++){let D=v*x-c;for(let L=0;L<d;L++){let N=L*m-a;b.push(N,-D,0),E.push(0,0,1),w.push(L/l),w.push(1-v/u)}}for(let v=0;v<u;v++)for(let D=0;D<l;D++){let L=D+d*v,N=D+d*(v+1),z=D+1+d*(v+1),P=D+1+d*v;_.push(L,N,P),_.push(N,z,P)}this.setIndex(_),this.setAttribute("position",new Jt(b,3)),this.setAttribute("normal",new Jt(E,3)),this.setAttribute("uv",new Jt(w,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new i(e.width,e.height,e.widthSegments,e.heightSegments)}};var za=class i extends mn{constructor(e=1,t=32,n=16,r=0,a=Math.PI*2,c=0,l=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:e,widthSegments:t,heightSegments:n,phiStart:r,phiLength:a,thetaStart:c,thetaLength:l},t=Math.max(3,Math.floor(t)),n=Math.max(2,Math.floor(n));let u=Math.min(c+l,Math.PI),d=0,p=[],m=new ee,x=new ee,_=[],b=[],E=[],w=[];for(let v=0;v<=n;v++){let D=[],L=v/n,N=0;v===0&&c===0?N=.5/t:v===n&&u===Math.PI&&(N=-.5/t);for(let z=0;z<=t;z++){let P=z/t;m.x=-e*Math.cos(r+P*a)*Math.sin(c+L*l),m.y=e*Math.cos(c+L*l),m.z=e*Math.sin(r+P*a)*Math.sin(c+L*l),b.push(m.x,m.y,m.z),x.copy(m).normalize(),E.push(x.x,x.y,x.z),w.push(P+N,1-L),D.push(d++)}p.push(D)}for(let v=0;v<n;v++)for(let D=0;D<t;D++){let L=p[v][D+1],N=p[v][D],z=p[v+1][D],P=p[v+1][D+1];(v!==0||c>0)&&_.push(L,N,P),(v!==n-1||u<Math.PI)&&_.push(N,z,P)}this.setIndex(_),this.setAttribute("position",new Jt(b,3)),this.setAttribute("normal",new Jt(E,3)),this.setAttribute("uv",new Jt(w,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new i(e.radius,e.widthSegments,e.heightSegments,e.phiStart,e.phiLength,e.thetaStart,e.thetaLength)}};var ks=class extends Hi{constructor(e){super(),this.isMeshStandardMaterial=!0,this.type="MeshStandardMaterial",this.defines={STANDARD:""},this.color=new ft(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new ft(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=Wu,this.normalScale=new Tt(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new oi,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.defines={STANDARD:""},this.color.copy(e.color),this.roughness=e.roughness,this.metalness=e.metalness,this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.roughnessMap=e.roughnessMap,this.metalnessMap=e.metalnessMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.envMapIntensity=e.envMapIntensity,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}};var Pc=class extends Hi{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=jp,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}},Fc=class extends Hi{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}};function pc(i,e){return!i||i.constructor===e?i:typeof e.BYTES_PER_ELEMENT=="number"?new e(i):Array.prototype.slice.call(i)}function db(i){return ArrayBuffer.isView(i)&&!(i instanceof DataView)}var Or=class{constructor(e,t,n,r){this.parameterPositions=e,this._cachedIndex=0,this.resultBuffer=r!==void 0?r:new t.constructor(n),this.sampleValues=t,this.valueSize=n,this.settings=null,this.DefaultSettings_={}}evaluate(e){let t=this.parameterPositions,n=this._cachedIndex,r=t[n],a=t[n-1];e:{t:{let c;n:{i:if(!(e<r)){for(let l=n+2;;){if(r===void 0){if(e<a)break i;return n=t.length,this._cachedIndex=n,this.copySampleValue_(n-1)}if(n===l)break;if(a=r,r=t[++n],e<r)break t}c=t.length;break n}if(!(e>=a)){let l=t[1];e<l&&(n=2,a=l);for(let u=n-2;;){if(a===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(n===u)break;if(r=a,a=t[--n-1],e>=a)break t}c=n,n=0;break n}break e}for(;n<c;){let l=n+c>>>1;e<t[l]?c=l:n=l+1}if(r=t[n],a=t[n-1],a===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(r===void 0)return n=t.length,this._cachedIndex=n,this.copySampleValue_(n-1)}this._cachedIndex=n,this.intervalChanged_(n,a,r)}return this.interpolate_(n,a,e,r)}getSettings_(){return this.settings||this.DefaultSettings_}copySampleValue_(e){let t=this.resultBuffer,n=this.sampleValues,r=this.valueSize,a=e*r;for(let c=0;c!==r;++c)t[c]=n[a+c];return t}interpolate_(){throw new Error("call to abstract method")}intervalChanged_(){}},Dc=class extends Or{constructor(e,t,n,r){super(e,t,n,r),this._weightPrev=-0,this._offsetPrev=-0,this._weightNext=-0,this._offsetNext=-0,this.DefaultSettings_={endingStart:bu,endingEnd:bu}}intervalChanged_(e,t,n){let r=this.parameterPositions,a=e-2,c=e+1,l=r[a],u=r[c];if(l===void 0)switch(this.getSettings_().endingStart){case wu:a=e,l=2*t-n;break;case Mu:a=r.length-2,l=t+r[a]-r[a+1];break;default:a=e,l=n}if(u===void 0)switch(this.getSettings_().endingEnd){case wu:c=e,u=2*n-t;break;case Mu:c=1,u=n+r[1]-r[0];break;default:c=e-1,u=t}let d=(n-t)*.5,p=this.valueSize;this._weightPrev=d/(t-l),this._weightNext=d/(u-n),this._offsetPrev=a*p,this._offsetNext=c*p}interpolate_(e,t,n,r){let a=this.resultBuffer,c=this.sampleValues,l=this.valueSize,u=e*l,d=u-l,p=this._offsetPrev,m=this._offsetNext,x=this._weightPrev,_=this._weightNext,b=(n-t)/(r-t),E=b*b,w=E*b,v=-x*w+2*x*E-x*b,D=(1+x)*w+(-1.5-2*x)*E+(-.5+x)*b+1,L=(-1-_)*w+(1.5+_)*E+.5*b,N=_*w-_*E;for(let z=0;z!==l;++z)a[z]=v*c[p+z]+D*c[d+z]+L*c[u+z]+N*c[m+z];return a}},Lc=class extends Or{constructor(e,t,n,r){super(e,t,n,r)}interpolate_(e,t,n,r){let a=this.resultBuffer,c=this.sampleValues,l=this.valueSize,u=e*l,d=u-l,p=(n-t)/(r-t),m=1-p;for(let x=0;x!==l;++x)a[x]=c[d+x]*m+c[u+x]*p;return a}},Uc=class extends Or{constructor(e,t,n,r){super(e,t,n,r)}interpolate_(e){return this.copySampleValue_(e-1)}},Gn=class{constructor(e,t,n,r){if(e===void 0)throw new Error("THREE.KeyframeTrack: track name is undefined");if(t===void 0||t.length===0)throw new Error("THREE.KeyframeTrack: no keyframes in track named "+e);this.name=e,this.times=pc(t,this.TimeBufferType),this.values=pc(n,this.ValueBufferType),this.setInterpolation(r||this.DefaultInterpolation)}static toJSON(e){let t=e.constructor,n;if(t.toJSON!==this.toJSON)n=t.toJSON(e);else{n={name:e.name,times:pc(e.times,Array),values:pc(e.values,Array)};let r=e.getInterpolation();r!==e.DefaultInterpolation&&(n.interpolation=r)}return n.type=e.ValueTypeName,n}InterpolantFactoryMethodDiscrete(e){return new Uc(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodLinear(e){return new Lc(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodSmooth(e){return new Dc(this.times,this.values,this.getValueSize(),e)}setInterpolation(e){let t;switch(e){case Sa:t=this.InterpolantFactoryMethodDiscrete;break;case yc:t=this.InterpolantFactoryMethodLinear;break;case mc:t=this.InterpolantFactoryMethodSmooth;break}if(t===void 0){let n="unsupported interpolation for "+this.ValueTypeName+" keyframe track named "+this.name;if(this.createInterpolant===void 0)if(e!==this.DefaultInterpolation)this.setInterpolation(this.DefaultInterpolation);else throw new Error(n);return lt("KeyframeTrack:",n),this}return this.createInterpolant=t,this}getInterpolation(){switch(this.createInterpolant){case this.InterpolantFactoryMethodDiscrete:return Sa;case this.InterpolantFactoryMethodLinear:return yc;case this.InterpolantFactoryMethodSmooth:return mc}}getValueSize(){return this.values.length/this.times.length}shift(e){if(e!==0){let t=this.times;for(let n=0,r=t.length;n!==r;++n)t[n]+=e}return this}scale(e){if(e!==1){let t=this.times;for(let n=0,r=t.length;n!==r;++n)t[n]*=e}return this}trim(e,t){let n=this.times,r=n.length,a=0,c=r-1;for(;a!==r&&n[a]<e;)++a;for(;c!==-1&&n[c]>t;)--c;if(++c,a!==0||c!==r){a>=c&&(c=Math.max(c,1),a=c-1);let l=this.getValueSize();this.times=n.slice(a,c),this.values=this.values.slice(a*l,c*l)}return this}validate(){let e=!0,t=this.getValueSize();t-Math.floor(t)!==0&&(yt("KeyframeTrack: Invalid value size in track.",this),e=!1);let n=this.times,r=this.values,a=n.length;a===0&&(yt("KeyframeTrack: Track is empty.",this),e=!1);let c=null;for(let l=0;l!==a;l++){let u=n[l];if(typeof u=="number"&&isNaN(u)){yt("KeyframeTrack: Time is not a valid number.",this,l,u),e=!1;break}if(c!==null&&c>u){yt("KeyframeTrack: Out of order keys.",this,l,u,c),e=!1;break}c=u}if(r!==void 0&&db(r))for(let l=0,u=r.length;l!==u;++l){let d=r[l];if(isNaN(d)){yt("KeyframeTrack: Value is not a valid number.",this,l,d),e=!1;break}}return e}optimize(){let e=this.times.slice(),t=this.values.slice(),n=this.getValueSize(),r=this.getInterpolation()===mc,a=e.length-1,c=1;for(let l=1;l<a;++l){let u=!1,d=e[l],p=e[l+1];if(d!==p&&(l!==1||d!==e[0]))if(r)u=!0;else{let m=l*n,x=m-n,_=m+n;for(let b=0;b!==n;++b){let E=t[m+b];if(E!==t[x+b]||E!==t[_+b]){u=!0;break}}}if(u){if(l!==c){e[c]=e[l];let m=l*n,x=c*n;for(let _=0;_!==n;++_)t[x+_]=t[m+_]}++c}}if(a>0){e[c]=e[a];for(let l=a*n,u=c*n,d=0;d!==n;++d)t[u+d]=t[l+d];++c}return c!==e.length?(this.times=e.slice(0,c),this.values=t.slice(0,c*n)):(this.times=e,this.values=t),this}clone(){let e=this.times.slice(),t=this.values.slice(),n=this.constructor,r=new n(this.name,e,t);return r.createInterpolant=this.createInterpolant,r}};Gn.prototype.ValueTypeName="";Gn.prototype.TimeBufferType=Float32Array;Gn.prototype.ValueBufferType=Float32Array;Gn.prototype.DefaultInterpolation=yc;var sr=class extends Gn{constructor(e,t,n){super(e,t,n)}};sr.prototype.ValueTypeName="bool";sr.prototype.ValueBufferType=Array;sr.prototype.DefaultInterpolation=Sa;sr.prototype.InterpolantFactoryMethodLinear=void 0;sr.prototype.InterpolantFactoryMethodSmooth=void 0;var Nc=class extends Gn{constructor(e,t,n,r){super(e,t,n,r)}};Nc.prototype.ValueTypeName="color";var kc=class extends Gn{constructor(e,t,n,r){super(e,t,n,r)}};kc.prototype.ValueTypeName="number";var Oc=class extends Or{constructor(e,t,n,r){super(e,t,n,r)}interpolate_(e,t,n,r){let a=this.resultBuffer,c=this.sampleValues,l=this.valueSize,u=(n-t)/(r-t),d=e*l;for(let p=d+l;d!==p;d+=4)si.slerpFlat(a,0,c,d-l,c,d,u);return a}},Va=class extends Gn{constructor(e,t,n,r){super(e,t,n,r)}InterpolantFactoryMethodLinear(e){return new Oc(this.times,this.values,this.getValueSize(),e)}};Va.prototype.ValueTypeName="quaternion";Va.prototype.InterpolantFactoryMethodSmooth=void 0;var ar=class extends Gn{constructor(e,t,n){super(e,t,n)}};ar.prototype.ValueTypeName="string";ar.prototype.ValueBufferType=Array;ar.prototype.DefaultInterpolation=Sa;ar.prototype.InterpolantFactoryMethodLinear=void 0;ar.prototype.InterpolantFactoryMethodSmooth=void 0;var Bc=class extends Gn{constructor(e,t,n,r){super(e,t,n,r)}};Bc.prototype.ValueTypeName="vector";var zc=class{constructor(e,t,n){let r=this,a=!1,c=0,l=0,u,d=[];this.onStart=void 0,this.onLoad=e,this.onProgress=t,this.onError=n,this._abortController=null,this.itemStart=function(p){l++,a===!1&&r.onStart!==void 0&&r.onStart(p,c,l),a=!0},this.itemEnd=function(p){c++,r.onProgress!==void 0&&r.onProgress(p,c,l),c===l&&(a=!1,r.onLoad!==void 0&&r.onLoad())},this.itemError=function(p){r.onError!==void 0&&r.onError(p)},this.resolveURL=function(p){return u?u(p):p},this.setURLModifier=function(p){return u=p,this},this.addHandler=function(p,m){return d.push(p,m),this},this.removeHandler=function(p){let m=d.indexOf(p);return m!==-1&&d.splice(m,2),this},this.getHandler=function(p){for(let m=0,x=d.length;m<x;m+=2){let _=d[m],b=d[m+1];if(_.global&&(_.lastIndex=0),_.test(p))return b}return null},this.abort=function(){return this.abortController.abort(),this._abortController=null,this}}get abortController(){return this._abortController||(this._abortController=new AbortController),this._abortController}},om=new zc,Vc=class{constructor(e){this.manager=e!==void 0?e:om,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={}}load(){}loadAsync(e,t){let n=this;return new Promise(function(r,a){n.load(e,r,t,a)})}parse(){}setCrossOrigin(e){return this.crossOrigin=e,this}setWithCredentials(e){return this.withCredentials=e,this}setPath(e){return this.path=e,this}setResourcePath(e){return this.resourcePath=e,this}setRequestHeader(e){return this.requestHeader=e,this}abort(){return this}};Vc.DEFAULT_MATERIAL_NAME="__DEFAULT";var Ha=class extends pn{constructor(e,t=1){super(),this.isLight=!0,this.type="Light",this.color=new ft(e),this.intensity=t}dispose(){}copy(e,t){return super.copy(e,t),this.color.copy(e.color),this.intensity=e.intensity,this}toJSON(e){let t=super.toJSON(e);return t.object.color=this.color.getHex(),t.object.intensity=this.intensity,this.groundColor!==void 0&&(t.object.groundColor=this.groundColor.getHex()),this.distance!==void 0&&(t.object.distance=this.distance),this.angle!==void 0&&(t.object.angle=this.angle),this.decay!==void 0&&(t.object.decay=this.decay),this.penumbra!==void 0&&(t.object.penumbra=this.penumbra),this.shadow!==void 0&&(t.object.shadow=this.shadow.toJSON()),this.target!==void 0&&(t.object.target=this.target.uuid),t}},Ga=class extends Ha{constructor(e,t,n){super(e,n),this.isHemisphereLight=!0,this.type="HemisphereLight",this.position.copy(pn.DEFAULT_UP),this.updateMatrix(),this.groundColor=new ft(t)}copy(e,t){return super.copy(e,t),this.groundColor.copy(e.groundColor),this}},yu=new Zt,fp=new ee,pp=new ee,Tu=class{constructor(e){this.camera=e,this.intensity=1,this.bias=0,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new Tt(512,512),this.mapType=ci,this.map=null,this.mapPass=null,this.matrix=new Zt,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new Us,this._frameExtents=new Tt(1,1),this._viewportCount=1,this._viewports=[new Kt(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(e){let t=this.camera,n=this.matrix;fp.setFromMatrixPosition(e.matrixWorld),t.position.copy(fp),pp.setFromMatrixPosition(e.target.matrixWorld),t.lookAt(pp),t.updateMatrixWorld(),yu.multiplyMatrices(t.projectionMatrix,t.matrixWorldInverse),this._frustum.setFromProjectionMatrix(yu,t.coordinateSystem,t.reversedDepth),t.reversedDepth?n.set(.5,0,0,.5,0,.5,0,.5,0,0,1,0,0,0,0,1):n.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),n.multiply(yu)}getViewport(e){return this._viewports[e]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(e){return this.camera=e.camera.clone(),this.intensity=e.intensity,this.bias=e.bias,this.radius=e.radius,this.autoUpdate=e.autoUpdate,this.needsUpdate=e.needsUpdate,this.normalBias=e.normalBias,this.blurSamples=e.blurSamples,this.mapSize.copy(e.mapSize),this}clone(){return new this.constructor().copy(this)}toJSON(){let e={};return this.intensity!==1&&(e.intensity=this.intensity),this.bias!==0&&(e.bias=this.bias),this.normalBias!==0&&(e.normalBias=this.normalBias),this.radius!==1&&(e.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(e.mapSize=this.mapSize.toArray()),e.camera=this.camera.toJSON(!1).object,delete e.camera.matrix,e}};var Wa=class extends Fa{constructor(e=-1,t=1,n=1,r=-1,a=.1,c=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=t,this.top=n,this.bottom=r,this.near=a,this.far=c,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,t,n,r,a,c){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=r,this.view.width=a,this.view.height=c,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let e=(this.right-this.left)/(2*this.zoom),t=(this.top-this.bottom)/(2*this.zoom),n=(this.right+this.left)/2,r=(this.top+this.bottom)/2,a=n-e,c=n+e,l=r+t,u=r-t;if(this.view!==null&&this.view.enabled){let d=(this.right-this.left)/this.view.fullWidth/this.zoom,p=(this.top-this.bottom)/this.view.fullHeight/this.zoom;a+=d*this.view.offsetX,c=a+d*this.view.width,l-=p*this.view.offsetY,u=l-p*this.view.height}this.projectionMatrix.makeOrthographic(a,c,l,u,this.near,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){let t=super.toJSON(e);return t.object.zoom=this.zoom,t.object.left=this.left,t.object.right=this.right,t.object.top=this.top,t.object.bottom=this.bottom,t.object.near=this.near,t.object.far=this.far,this.view!==null&&(t.object.view=Object.assign({},this.view)),t}},Au=class extends Tu{constructor(){super(new Wa(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}},$a=class extends Ha{constructor(e,t){super(e,t),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(pn.DEFAULT_UP),this.updateMatrix(),this.target=new pn,this.shadow=new Au}dispose(){this.shadow.dispose()}copy(e){return super.copy(e),this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}};var Hc=class extends fn{constructor(e=[]){super(),this.isArrayCamera=!0,this.isMultiViewCamera=!1,this.cameras=e}};var Zu="\\[\\]\\.:\\/",fb=new RegExp("["+Zu+"]","g"),Ju="[^"+Zu+"]",pb="[^"+Zu.replace("\\.","")+"]",mb=/((?:WC+[\/:])*)/.source.replace("WC",Ju),gb=/(WCOD+)?/.source.replace("WCOD",pb),xb=/(?:\.(WC+)(?:\[(.+)\])?)?/.source.replace("WC",Ju),_b=/\.(WC+)(?:\[(.+)\])?/.source.replace("WC",Ju),vb=new RegExp("^"+mb+gb+xb+_b+"$"),yb=["material","materials","bones","map"],Cu=class{constructor(e,t,n){let r=n||jt.parseTrackName(t);this._targetGroup=e,this._bindings=e.subscribe_(t,r)}getValue(e,t){this.bind();let n=this._targetGroup.nCachedObjects_,r=this._bindings[n];r!==void 0&&r.getValue(e,t)}setValue(e,t){let n=this._bindings;for(let r=this._targetGroup.nCachedObjects_,a=n.length;r!==a;++r)n[r].setValue(e,t)}bind(){let e=this._bindings;for(let t=this._targetGroup.nCachedObjects_,n=e.length;t!==n;++t)e[t].bind()}unbind(){let e=this._bindings;for(let t=this._targetGroup.nCachedObjects_,n=e.length;t!==n;++t)e[t].unbind()}},jt=class i{constructor(e,t,n){this.path=t,this.parsedPath=n||i.parseTrackName(t),this.node=i.findNode(e,this.parsedPath.nodeName),this.rootNode=e,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}static create(e,t,n){return e&&e.isAnimationObjectGroup?new i.Composite(e,t,n):new i(e,t,n)}static sanitizeNodeName(e){return e.replace(/\s/g,"_").replace(fb,"")}static parseTrackName(e){let t=vb.exec(e);if(t===null)throw new Error("PropertyBinding: Cannot parse trackName: "+e);let n={nodeName:t[2],objectName:t[3],objectIndex:t[4],propertyName:t[5],propertyIndex:t[6]},r=n.nodeName&&n.nodeName.lastIndexOf(".");if(r!==void 0&&r!==-1){let a=n.nodeName.substring(r+1);yb.indexOf(a)!==-1&&(n.nodeName=n.nodeName.substring(0,r),n.objectName=a)}if(n.propertyName===null||n.propertyName.length===0)throw new Error("PropertyBinding: can not parse propertyName from trackName: "+e);return n}static findNode(e,t){if(t===void 0||t===""||t==="."||t===-1||t===e.name||t===e.uuid)return e;if(e.skeleton){let n=e.skeleton.getBoneByName(t);if(n!==void 0)return n}if(e.children){let n=function(a){for(let c=0;c<a.length;c++){let l=a[c];if(l.name===t||l.uuid===t)return l;let u=n(l.children);if(u)return u}return null},r=n(e.children);if(r)return r}return null}_getValue_unavailable(){}_setValue_unavailable(){}_getValue_direct(e,t){e[t]=this.targetObject[this.propertyName]}_getValue_array(e,t){let n=this.resolvedProperty;for(let r=0,a=n.length;r!==a;++r)e[t++]=n[r]}_getValue_arrayElement(e,t){e[t]=this.resolvedProperty[this.propertyIndex]}_getValue_toArray(e,t){this.resolvedProperty.toArray(e,t)}_setValue_direct(e,t){this.targetObject[this.propertyName]=e[t]}_setValue_direct_setNeedsUpdate(e,t){this.targetObject[this.propertyName]=e[t],this.targetObject.needsUpdate=!0}_setValue_direct_setMatrixWorldNeedsUpdate(e,t){this.targetObject[this.propertyName]=e[t],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_array(e,t){let n=this.resolvedProperty;for(let r=0,a=n.length;r!==a;++r)n[r]=e[t++]}_setValue_array_setNeedsUpdate(e,t){let n=this.resolvedProperty;for(let r=0,a=n.length;r!==a;++r)n[r]=e[t++];this.targetObject.needsUpdate=!0}_setValue_array_setMatrixWorldNeedsUpdate(e,t){let n=this.resolvedProperty;for(let r=0,a=n.length;r!==a;++r)n[r]=e[t++];this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_arrayElement(e,t){this.resolvedProperty[this.propertyIndex]=e[t]}_setValue_arrayElement_setNeedsUpdate(e,t){this.resolvedProperty[this.propertyIndex]=e[t],this.targetObject.needsUpdate=!0}_setValue_arrayElement_setMatrixWorldNeedsUpdate(e,t){this.resolvedProperty[this.propertyIndex]=e[t],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_fromArray(e,t){this.resolvedProperty.fromArray(e,t)}_setValue_fromArray_setNeedsUpdate(e,t){this.resolvedProperty.fromArray(e,t),this.targetObject.needsUpdate=!0}_setValue_fromArray_setMatrixWorldNeedsUpdate(e,t){this.resolvedProperty.fromArray(e,t),this.targetObject.matrixWorldNeedsUpdate=!0}_getValue_unbound(e,t){this.bind(),this.getValue(e,t)}_setValue_unbound(e,t){this.bind(),this.setValue(e,t)}bind(){let e=this.node,t=this.parsedPath,n=t.objectName,r=t.propertyName,a=t.propertyIndex;if(e||(e=i.findNode(this.rootNode,t.nodeName),this.node=e),this.getValue=this._getValue_unavailable,this.setValue=this._setValue_unavailable,!e){lt("PropertyBinding: No target node found for track: "+this.path+".");return}if(n){let d=t.objectIndex;switch(n){case"materials":if(!e.material){yt("PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!e.material.materials){yt("PropertyBinding: Can not bind to material.materials as node.material does not have a materials array.",this);return}e=e.material.materials;break;case"bones":if(!e.skeleton){yt("PropertyBinding: Can not bind to bones as node does not have a skeleton.",this);return}e=e.skeleton.bones;for(let p=0;p<e.length;p++)if(e[p].name===d){d=p;break}break;case"map":if("map"in e){e=e.map;break}if(!e.material){yt("PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!e.material.map){yt("PropertyBinding: Can not bind to material.map as node.material does not have a map.",this);return}e=e.material.map;break;default:if(e[n]===void 0){yt("PropertyBinding: Can not bind to objectName of node undefined.",this);return}e=e[n]}if(d!==void 0){if(e[d]===void 0){yt("PropertyBinding: Trying to bind to objectIndex of objectName, but is undefined.",this,e);return}e=e[d]}}let c=e[r];if(c===void 0){let d=t.nodeName;yt("PropertyBinding: Trying to update property for track: "+d+"."+r+" but it wasn't found.",e);return}let l=this.Versioning.None;this.targetObject=e,e.isMaterial===!0?l=this.Versioning.NeedsUpdate:e.isObject3D===!0&&(l=this.Versioning.MatrixWorldNeedsUpdate);let u=this.BindingType.Direct;if(a!==void 0){if(r==="morphTargetInfluences"){if(!e.geometry){yt("PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.",this);return}if(!e.geometry.morphAttributes){yt("PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.morphAttributes.",this);return}e.morphTargetDictionary[a]!==void 0&&(a=e.morphTargetDictionary[a])}u=this.BindingType.ArrayElement,this.resolvedProperty=c,this.propertyIndex=a}else c.fromArray!==void 0&&c.toArray!==void 0?(u=this.BindingType.HasFromToArray,this.resolvedProperty=c):Array.isArray(c)?(u=this.BindingType.EntireArray,this.resolvedProperty=c):this.propertyName=r;this.getValue=this.GetterByBindingType[u],this.setValue=this.SetterByBindingTypeAndVersioning[u][l]}unbind(){this.node=null,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}};jt.Composite=Cu;jt.prototype.BindingType={Direct:0,EntireArray:1,ArrayElement:2,HasFromToArray:3};jt.prototype.Versioning={None:0,NeedsUpdate:1,MatrixWorldNeedsUpdate:2};jt.prototype.GetterByBindingType=[jt.prototype._getValue_direct,jt.prototype._getValue_array,jt.prototype._getValue_arrayElement,jt.prototype._getValue_toArray];jt.prototype.SetterByBindingTypeAndVersioning=[[jt.prototype._setValue_direct,jt.prototype._setValue_direct_setNeedsUpdate,jt.prototype._setValue_direct_setMatrixWorldNeedsUpdate],[jt.prototype._setValue_array,jt.prototype._setValue_array_setNeedsUpdate,jt.prototype._setValue_array_setMatrixWorldNeedsUpdate],[jt.prototype._setValue_arrayElement,jt.prototype._setValue_arrayElement_setNeedsUpdate,jt.prototype._setValue_arrayElement_setMatrixWorldNeedsUpdate],[jt.prototype._setValue_fromArray,jt.prototype._setValue_fromArray_setNeedsUpdate,jt.prototype._setValue_fromArray_setMatrixWorldNeedsUpdate]];var kE=new Float32Array(1);var mp=new Zt,Xa=class{constructor(e,t,n=0,r=1/0){this.ray=new Fs(e,t),this.near=n,this.far=r,this.camera=null,this.layers=new Ds,this.params={Mesh:{},Line:{threshold:1},LOD:{},Points:{threshold:1},Sprite:{}}}set(e,t){this.ray.set(e,t)}setFromCamera(e,t){t.isPerspectiveCamera?(this.ray.origin.setFromMatrixPosition(t.matrixWorld),this.ray.direction.set(e.x,e.y,.5).unproject(t).sub(this.ray.origin).normalize(),this.camera=t):t.isOrthographicCamera?(this.ray.origin.set(e.x,e.y,(t.near+t.far)/(t.near-t.far)).unproject(t),this.ray.direction.set(0,0,-1).transformDirection(t.matrixWorld),this.camera=t):yt("Raycaster: Unsupported camera type: "+t.type)}setFromXRController(e){return mp.identity().extractRotation(e.matrixWorld),this.ray.origin.setFromMatrixPosition(e.matrixWorld),this.ray.direction.set(0,0,-1).applyMatrix4(mp),this}intersectObject(e,t=!0,n=[]){return Ru(e,this,n,t),n.sort(gp),n}intersectObjects(e,t=!0,n=[]){for(let r=0,a=e.length;r<a;r++)Ru(e[r],this,n,t);return n.sort(gp),n}};function gp(i,e){return i.distance-e.distance}function Ru(i,e,t,n){let r=!0;if(i.layers.test(e.layers)&&i.raycast(e,t)===!1&&(r=!1),r===!0&&n===!0){let a=i.children;for(let c=0,l=a.length;c<l;c++)Ru(a[c],e,t,!0)}}var ja=class extends Ic{constructor(e=10,t=10,n=4473924,r=8947848){n=new ft(n),r=new ft(r);let a=t/2,c=e/t,l=e/2,u=[],d=[];for(let x=0,_=0,b=-l;x<=t;x++,b+=c){u.push(-l,0,b,l,0,b),u.push(b,0,-l,b,0,l);let E=x===a?n:r;E.toArray(d,_),_+=3,E.toArray(d,_),_+=3,E.toArray(d,_),_+=3,E.toArray(d,_),_+=3}let p=new mn;p.setAttribute("position",new Jt(u,3)),p.setAttribute("color",new Jt(d,3));let m=new Nr({vertexColors:!0,toneMapped:!1});super(p,m),this.type="GridHelper"}dispose(){this.geometry.dispose(),this.material.dispose()}};function Ku(i,e,t,n){let r=bb(n);switch(t){case Vu:return i*e;case Gu:return i*e/r.components*r.byteLength;case il:return i*e/r.components*r.byteLength;case rl:return i*e*2/r.components*r.byteLength;case sl:return i*e*2/r.components*r.byteLength;case Hu:return i*e*3/r.components*r.byteLength;case Yn:return i*e*4/r.components*r.byteLength;case al:return i*e*4/r.components*r.byteLength;case Za:case Ja:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*8;case Ka:case Qa:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*16;case cl:case hl:return Math.max(i,16)*Math.max(e,8)/4;case ol:case ll:return Math.max(i,8)*Math.max(e,8)/2;case ul:case dl:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*8;case fl:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*16;case pl:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*16;case ml:return Math.floor((i+4)/5)*Math.floor((e+3)/4)*16;case gl:return Math.floor((i+4)/5)*Math.floor((e+4)/5)*16;case xl:return Math.floor((i+5)/6)*Math.floor((e+4)/5)*16;case _l:return Math.floor((i+5)/6)*Math.floor((e+5)/6)*16;case vl:return Math.floor((i+7)/8)*Math.floor((e+4)/5)*16;case yl:return Math.floor((i+7)/8)*Math.floor((e+5)/6)*16;case bl:return Math.floor((i+7)/8)*Math.floor((e+7)/8)*16;case wl:return Math.floor((i+9)/10)*Math.floor((e+4)/5)*16;case Ml:return Math.floor((i+9)/10)*Math.floor((e+5)/6)*16;case Sl:return Math.floor((i+9)/10)*Math.floor((e+7)/8)*16;case El:return Math.floor((i+9)/10)*Math.floor((e+9)/10)*16;case Tl:return Math.floor((i+11)/12)*Math.floor((e+9)/10)*16;case Al:return Math.floor((i+11)/12)*Math.floor((e+11)/12)*16;case Cl:case Rl:case Il:return Math.ceil(i/4)*Math.ceil(e/4)*16;case Pl:case Fl:return Math.ceil(i/4)*Math.ceil(e/4)*8;case Dl:case Ll:return Math.ceil(i/4)*Math.ceil(e/4)*16}throw new Error(`Unable to determine texture byte length for ${t} format.`)}function bb(i){switch(i){case ci:case ku:return{byteLength:1,components:1};case Os:case Ou:case Vr:return{byteLength:2,components:1};case tl:case nl:return{byteLength:2,components:4};case cr:case el:case Ti:return{byteLength:4,components:1};case Bu:case zu:return{byteLength:4,components:3}}throw new Error(`Unknown texture type ${i}.`)}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:"181"}}));typeof window<"u"&&(window.__THREE__?lt("WARNING: Multiple instances of Three.js being imported."):window.__THREE__="181");function Im(){let i=null,e=!1,t=null,n=null;function r(a,c){t(a,c),n=i.requestAnimationFrame(r)}return{start:function(){e!==!0&&t!==null&&(n=i.requestAnimationFrame(r),e=!0)},stop:function(){i.cancelAnimationFrame(n),e=!1},setAnimationLoop:function(a){t=a},setContext:function(a){i=a}}}function Mb(i){let e=new WeakMap;function t(l,u){let d=l.array,p=l.usage,m=d.byteLength,x=i.createBuffer();i.bindBuffer(u,x),i.bufferData(u,d,p),l.onUploadCallback();let _;if(d instanceof Float32Array)_=i.FLOAT;else if(typeof Float16Array<"u"&&d instanceof Float16Array)_=i.HALF_FLOAT;else if(d instanceof Uint16Array)l.isFloat16BufferAttribute?_=i.HALF_FLOAT:_=i.UNSIGNED_SHORT;else if(d instanceof Int16Array)_=i.SHORT;else if(d instanceof Uint32Array)_=i.UNSIGNED_INT;else if(d instanceof Int32Array)_=i.INT;else if(d instanceof Int8Array)_=i.BYTE;else if(d instanceof Uint8Array)_=i.UNSIGNED_BYTE;else if(d instanceof Uint8ClampedArray)_=i.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+d);return{buffer:x,type:_,bytesPerElement:d.BYTES_PER_ELEMENT,version:l.version,size:m}}function n(l,u,d){let p=u.array,m=u.updateRanges;if(i.bindBuffer(d,l),m.length===0)i.bufferSubData(d,0,p);else{m.sort((_,b)=>_.start-b.start);let x=0;for(let _=1;_<m.length;_++){let b=m[x],E=m[_];E.start<=b.start+b.count+1?b.count=Math.max(b.count,E.start+E.count-b.start):(++x,m[x]=E)}m.length=x+1;for(let _=0,b=m.length;_<b;_++){let E=m[_];i.bufferSubData(d,E.start*p.BYTES_PER_ELEMENT,p,E.start,E.count)}u.clearUpdateRanges()}u.onUploadCallback()}function r(l){return l.isInterleavedBufferAttribute&&(l=l.data),e.get(l)}function a(l){l.isInterleavedBufferAttribute&&(l=l.data);let u=e.get(l);u&&(i.deleteBuffer(u.buffer),e.delete(l))}function c(l,u){if(l.isInterleavedBufferAttribute&&(l=l.data),l.isGLBufferAttribute){let p=e.get(l);(!p||p.version<l.version)&&e.set(l,{buffer:l.buffer,type:l.type,bytesPerElement:l.elementSize,version:l.version});return}let d=e.get(l);if(d===void 0)e.set(l,t(l,u));else if(d.version<l.version){if(d.size!==l.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");n(d.buffer,l,u),d.version=l.version}}return{get:r,remove:a,update:c}}var Sb=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,Eb=`#ifdef USE_ALPHAHASH
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
#endif`,Tb=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,Ab=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,Cb=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,Rb=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,Ib=`#ifdef USE_AOMAP
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
#endif`,Pb=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,Fb=`#ifdef USE_BATCHING
	#if ! defined( GL_ANGLE_multi_draw )
	#define gl_DrawID _gl_DrawID
	uniform int _gl_DrawID;
	#endif
	uniform highp sampler2D batchingTexture;
	uniform highp usampler2D batchingIdTexture;
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
	float getIndirectIndex( const in int i ) {
		int size = textureSize( batchingIdTexture, 0 ).x;
		int x = i % size;
		int y = i / size;
		return float( texelFetch( batchingIdTexture, ivec2( x, y ), 0 ).r );
	}
#endif
#ifdef USE_BATCHING_COLOR
	uniform sampler2D batchingColorTexture;
	vec3 getBatchingColor( const in float i ) {
		int size = textureSize( batchingColorTexture, 0 ).x;
		int j = int( i );
		int x = j % size;
		int y = j / size;
		return texelFetch( batchingColorTexture, ivec2( x, y ), 0 ).rgb;
	}
#endif`,Db=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,Lb=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,Ub=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,Nb=`float G_BlinnPhong_Implicit( ) {
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
} // validated`,kb=`#ifdef USE_IRIDESCENCE
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
#endif`,Ob=`#ifdef USE_BUMPMAP
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
#endif`,Bb=`#if NUM_CLIPPING_PLANES > 0
	vec4 plane;
	#ifdef ALPHA_TO_COVERAGE
		float distanceToPlane, distanceGradient;
		float clipOpacity = 1.0;
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
			distanceGradient = fwidth( distanceToPlane ) / 2.0;
			clipOpacity *= smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			if ( clipOpacity == 0.0 ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			float unionClipOpacity = 1.0;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
				distanceGradient = fwidth( distanceToPlane ) / 2.0;
				unionClipOpacity *= 1.0 - smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			}
			#pragma unroll_loop_end
			clipOpacity *= 1.0 - unionClipOpacity;
		#endif
		diffuseColor.a *= clipOpacity;
		if ( diffuseColor.a == 0.0 ) discard;
	#else
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
	#endif
#endif`,zb=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,Vb=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,Hb=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,Gb=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,Wb=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,$b=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec3 vColor;
#endif`,Xb=`#if defined( USE_COLOR_ALPHA )
	vColor = vec4( 1.0 );
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	vColor = vec3( 1.0 );
#endif
#ifdef USE_COLOR
	vColor *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.xyz *= instanceColor.xyz;
#endif
#ifdef USE_BATCHING_COLOR
	vec3 batchingColor = getBatchingColor( getIndirectIndex( gl_DrawID ) );
	vColor.xyz *= batchingColor.xyz;
#endif`,jb=`#define PI 3.141592653589793
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
} // validated`,qb=`#ifdef ENVMAP_TYPE_CUBE_UV
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
#endif`,Yb=`vec3 transformedNormal = objectNormal;
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
#endif`,Zb=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,Jb=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,Kb=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,Qb=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,ew="gl_FragColor = linearToOutputTexel( gl_FragColor );",tw=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,nw=`#ifdef USE_ENVMAP
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
		vec4 envColor = textureCube( envMap, envMapRotation * vec3( flipEnvMap * reflectVec.x, reflectVec.yz ) );
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
#endif`,iw=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
#endif`,rw=`#ifdef USE_ENVMAP
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
#endif`,sw=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,aw=`#ifdef USE_ENVMAP
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
#endif`,ow=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,cw=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,lw=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,hw=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,uw=`#ifdef USE_GRADIENTMAP
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
}`,dw=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,fw=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,pw=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,mw=`uniform bool receiveShadow;
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
	float distanceFalloff = 1.0 / max( pow( lightDistance, decayExponent ), 0.01 );
	if ( cutoffDistance > 0.0 ) {
		distanceFalloff *= pow2( saturate( 1.0 - pow4( lightDistance / cutoffDistance ) ) );
	}
	return distanceFalloff;
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
#endif`,gw=`#ifdef USE_ENVMAP
	vec3 getIBLIrradiance( const in vec3 normal ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * worldNormal, 1.0 );
			return PI * envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	vec3 getIBLRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 reflectVec = reflect( - viewDir, normal );
			reflectVec = normalize( mix( reflectVec, normal, pow4( roughness ) ) );
			reflectVec = inverseTransformDirection( reflectVec, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * reflectVec, roughness );
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
#endif`,xw=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,_w=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,vw=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,yw=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,bw=`PhysicalMaterial material;
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
#ifdef USE_DISPERSION
	material.dispersion = dispersion;
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
#endif`,ww=`uniform sampler2D dfgLUT;
struct PhysicalMaterial {
	vec3 diffuseColor;
	float roughness;
	vec3 specularColor;
	float specularF90;
	float dispersion;
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
	mat3 mat = mInv * transpose( mat3( T1, T2, N ) );
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
	vec2 uv = vec2( roughness, dotNV );
	return texture2D( dfgLUT, uv ).rg;
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
vec3 BRDF_GGX_Multiscatter( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material ) {
	vec3 singleScatter = BRDF_GGX( lightDir, viewDir, normal, material );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	vec2 dfgV = DFGApprox( vec3(0.0, 0.0, 1.0), vec3(sqrt(1.0 - dotNV * dotNV), 0.0, dotNV), material.roughness );
	vec2 dfgL = DFGApprox( vec3(0.0, 0.0, 1.0), vec3(sqrt(1.0 - dotNL * dotNL), 0.0, dotNL), material.roughness );
	vec3 FssEss_V = material.specularColor * dfgV.x + material.specularF90 * dfgV.y;
	vec3 FssEss_L = material.specularColor * dfgL.x + material.specularF90 * dfgL.y;
	float Ess_V = dfgV.x + dfgV.y;
	float Ess_L = dfgL.x + dfgL.y;
	float Ems_V = 1.0 - Ess_V;
	float Ems_L = 1.0 - Ess_L;
	vec3 Favg = material.specularColor + ( 1.0 - material.specularColor ) * 0.047619;
	vec3 Fms = FssEss_V * FssEss_L * Favg / ( 1.0 - Ems_V * Ems_L * Favg * Favg + EPSILON );
	float compensationFactor = Ems_V * Ems_L;
	vec3 multiScatter = Fms * compensationFactor;
	return singleScatter + multiScatter;
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
	reflectedLight.directSpecular += irradiance * BRDF_GGX_Multiscatter( directLight.direction, geometryViewDir, geometryNormal, material );
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
}`,Mw=`
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
		directLight.color *= ( directLight.visible && receiveShadow ) ? getPointShadow( pointShadowMap[ i ], pointLightShadow.shadowMapSize, pointLightShadow.shadowIntensity, pointLightShadow.shadowBias, pointLightShadow.shadowRadius, vPointShadowCoord[ i ], pointLightShadow.shadowCameraNear, pointLightShadow.shadowCameraFar ) : 1.0;
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
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( spotShadowMap[ i ], spotLightShadow.shadowMapSize, spotLightShadow.shadowIntensity, spotLightShadow.shadowBias, spotLightShadow.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
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
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( directionalShadowMap[ i ], directionalLightShadow.shadowMapSize, directionalLightShadow.shadowIntensity, directionalLightShadow.shadowBias, directionalLightShadow.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
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
#endif`,Sw=`#if defined( RE_IndirectDiffuse )
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
#endif`,Ew=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,Tw=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,Aw=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,Cw=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,Rw=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,Iw=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,Pw=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,Fw=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`,Dw=`#if defined( USE_POINTS_UV )
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
#endif`,Lw=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,Uw=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,Nw=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,kw=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,Ow=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,Bw=`#ifdef USE_MORPHTARGETS
	#ifndef USE_INSTANCING_MORPH
		uniform float morphTargetBaseInfluence;
		uniform float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	#endif
	uniform sampler2DArray morphTargetsTexture;
	uniform ivec2 morphTargetsTextureSize;
	vec4 getMorph( const in int vertexIndex, const in int morphTargetIndex, const in int offset ) {
		int texelIndex = vertexIndex * MORPHTARGETS_TEXTURE_STRIDE + offset;
		int y = texelIndex / morphTargetsTextureSize.x;
		int x = texelIndex - y * morphTargetsTextureSize.x;
		ivec3 morphUV = ivec3( x, y, morphTargetIndex );
		return texelFetch( morphTargetsTexture, morphUV, 0 );
	}
#endif`,zw=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,Vw=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
vec3 nonPerturbedNormal = normal;`,Hw=`#ifdef USE_NORMALMAP_OBJECTSPACE
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
#endif`,Gw=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Ww=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,$w=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,Xw=`#ifdef USE_NORMALMAP
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
#endif`,jw=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,qw=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,Yw=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,Zw=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,Jw=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,Kw=`vec3 packNormalToRGB( const in vec3 normal ) {
	return normalize( normal ) * 0.5 + 0.5;
}
vec3 unpackRGBToNormal( const in vec3 rgb ) {
	return 2.0 * rgb.xyz - 1.0;
}
const float PackUpscale = 256. / 255.;const float UnpackDownscale = 255. / 256.;const float ShiftRight8 = 1. / 256.;
const float Inv255 = 1. / 255.;
const vec4 PackFactors = vec4( 1.0, 256.0, 256.0 * 256.0, 256.0 * 256.0 * 256.0 );
const vec2 UnpackFactors2 = vec2( UnpackDownscale, 1.0 / PackFactors.g );
const vec3 UnpackFactors3 = vec3( UnpackDownscale / PackFactors.rg, 1.0 / PackFactors.b );
const vec4 UnpackFactors4 = vec4( UnpackDownscale / PackFactors.rgb, 1.0 / PackFactors.a );
vec4 packDepthToRGBA( const in float v ) {
	if( v <= 0.0 )
		return vec4( 0., 0., 0., 0. );
	if( v >= 1.0 )
		return vec4( 1., 1., 1., 1. );
	float vuf;
	float af = modf( v * PackFactors.a, vuf );
	float bf = modf( vuf * ShiftRight8, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec4( vuf * Inv255, gf * PackUpscale, bf * PackUpscale, af );
}
vec3 packDepthToRGB( const in float v ) {
	if( v <= 0.0 )
		return vec3( 0., 0., 0. );
	if( v >= 1.0 )
		return vec3( 1., 1., 1. );
	float vuf;
	float bf = modf( v * PackFactors.b, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec3( vuf * Inv255, gf * PackUpscale, bf );
}
vec2 packDepthToRG( const in float v ) {
	if( v <= 0.0 )
		return vec2( 0., 0. );
	if( v >= 1.0 )
		return vec2( 1., 1. );
	float vuf;
	float gf = modf( v * 256., vuf );
	return vec2( vuf * Inv255, gf );
}
float unpackRGBAToDepth( const in vec4 v ) {
	return dot( v, UnpackFactors4 );
}
float unpackRGBToDepth( const in vec3 v ) {
	return dot( v, UnpackFactors3 );
}
float unpackRGToDepth( const in vec2 v ) {
	return v.r * UnpackFactors2.r + v.g * UnpackFactors2.g;
}
vec4 pack2HalfToRGBA( const in vec2 v ) {
	vec4 r = vec4( v.x, fract( v.x * 255.0 ), v.y, fract( v.y * 255.0 ) );
	return vec4( r.x - r.y / 255.0, r.y, r.z - r.w / 255.0, r.w );
}
vec2 unpackRGBATo2Half( const in vec4 v ) {
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
}`,Qw=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,eM=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,tM=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,nM=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,iM=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,rM=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,sM=`#if NUM_SPOT_LIGHT_COORDS > 0
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
			float shadowIntensity;
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
			float shadowIntensity;
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
			float shadowIntensity;
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
		float depth = unpackRGBAToDepth( texture2D( depths, uv ) );
		#ifdef USE_REVERSED_DEPTH_BUFFER
			return step( depth, compare );
		#else
			return step( compare, depth );
		#endif
	}
	vec2 texture2DDistribution( sampler2D shadow, vec2 uv ) {
		return unpackRGBATo2Half( texture2D( shadow, uv ) );
	}
	float VSMShadow( sampler2D shadow, vec2 uv, float compare ) {
		float occlusion = 1.0;
		vec2 distribution = texture2DDistribution( shadow, uv );
		#ifdef USE_REVERSED_DEPTH_BUFFER
			float hard_shadow = step( distribution.x, compare );
		#else
			float hard_shadow = step( compare, distribution.x );
		#endif
		if ( hard_shadow != 1.0 ) {
			float distance = compare - distribution.x;
			float variance = max( 0.00000, distribution.y * distribution.y );
			float softness_probability = variance / (variance + distance * distance );			softness_probability = clamp( ( softness_probability - 0.3 ) / ( 0.95 - 0.3 ), 0.0, 1.0 );			occlusion = clamp( max( hard_shadow, softness_probability ), 0.0, 1.0 );
		}
		return occlusion;
	}
	float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
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
		return mix( 1.0, shadow, shadowIntensity );
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
	float getPointShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		
		float lightToPositionLength = length( lightToPosition );
		if ( lightToPositionLength - shadowCameraFar <= 0.0 && lightToPositionLength - shadowCameraNear >= 0.0 ) {
			float dp = ( lightToPositionLength - shadowCameraNear ) / ( shadowCameraFar - shadowCameraNear );			dp += shadowBias;
			vec3 bd3D = normalize( lightToPosition );
			vec2 texelSize = vec2( 1.0 ) / ( shadowMapSize * vec2( 4.0, 2.0 ) );
			#if defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_PCF_SOFT ) || defined( SHADOWMAP_TYPE_VSM )
				vec2 offset = vec2( - 1, 1 ) * shadowRadius * texelSize.y;
				shadow = (
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
				shadow = texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp );
			#endif
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
#endif`,aM=`#if NUM_SPOT_LIGHT_COORDS > 0
	uniform mat4 spotLightMatrix[ NUM_SPOT_LIGHT_COORDS ];
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform mat4 directionalShadowMatrix[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		struct SpotLightShadow {
			float shadowIntensity;
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
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
#endif`,oM=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
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
#endif`,cM=`float getShadowMask() {
	float shadow = 1.0;
	#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
		directionalLight = directionalLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( directionalShadowMap[ i ], directionalLight.shadowMapSize, directionalLight.shadowIntensity, directionalLight.shadowBias, directionalLight.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_SHADOWS; i ++ ) {
		spotLight = spotLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( spotShadowMap[ i ], spotLight.shadowMapSize, spotLight.shadowIntensity, spotLight.shadowBias, spotLight.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
		pointLight = pointLightShadows[ i ];
		shadow *= receiveShadow ? getPointShadow( pointShadowMap[ i ], pointLight.shadowMapSize, pointLight.shadowIntensity, pointLight.shadowBias, pointLight.shadowRadius, vPointShadowCoord[ i ], pointLight.shadowCameraNear, pointLight.shadowCameraFar ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#endif
	return shadow;
}`,lM=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,hM=`#ifdef USE_SKINNING
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
#endif`,uM=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,dM=`#ifdef USE_SKINNING
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
#endif`,fM=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,pM=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,mM=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,gM=`#ifndef saturate
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
vec3 CineonToneMapping( vec3 color ) {
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
	color *= toneMappingExposure;
	color = LINEAR_SRGB_TO_LINEAR_REC2020 * color;
	color = AgXInsetMatrix * color;
	color = max( color, 1e-10 );	color = log2( color );
	color = ( color - AgxMinEv ) / ( AgxMaxEv - AgxMinEv );
	color = clamp( color, 0.0, 1.0 );
	color = agxDefaultContrastApprox( color );
	color = AgXOutsetMatrix * color;
	color = pow( max( vec3( 0.0 ), color ), vec3( 2.2 ) );
	color = LINEAR_REC2020_TO_LINEAR_SRGB * color;
	color = clamp( color, 0.0, 1.0 );
	return color;
}
vec3 NeutralToneMapping( vec3 color ) {
	const float StartCompression = 0.8 - 0.04;
	const float Desaturation = 0.15;
	color *= toneMappingExposure;
	float x = min( color.r, min( color.g, color.b ) );
	float offset = x < 0.08 ? x - 6.25 * x * x : 0.04;
	color -= offset;
	float peak = max( color.r, max( color.g, color.b ) );
	if ( peak < StartCompression ) return color;
	float d = 1. - StartCompression;
	float newPeak = 1. - d * d / ( peak + d - StartCompression );
	color *= newPeak / peak;
	float g = 1. - 1. / ( Desaturation * ( peak - newPeak ) + 1. );
	return mix( color, vec3( newPeak ), g );
}
vec3 CustomToneMapping( vec3 color ) { return color; }`,xM=`#ifdef USE_TRANSMISSION
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
		pos, modelMatrix, viewMatrix, projectionMatrix, material.dispersion, material.ior, material.thickness,
		material.attenuationColor, material.attenuationDistance );
	material.transmissionAlpha = mix( material.transmissionAlpha, transmitted.a, material.transmission );
	totalDiffuse = mix( totalDiffuse, transmitted.rgb, material.transmission );
#endif`,_M=`#ifdef USE_TRANSMISSION
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
		const in mat4 viewMatrix, const in mat4 projMatrix, const in float dispersion, const in float ior, const in float thickness,
		const in vec3 attenuationColor, const in float attenuationDistance ) {
		vec4 transmittedLight;
		vec3 transmittance;
		#ifdef USE_DISPERSION
			float halfSpread = ( ior - 1.0 ) * 0.025 * dispersion;
			vec3 iors = vec3( ior - halfSpread, ior, ior + halfSpread );
			for ( int i = 0; i < 3; i ++ ) {
				vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, iors[ i ], modelMatrix );
				vec3 refractedRayExit = position + transmissionRay;
				vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
				vec2 refractionCoords = ndcPos.xy / ndcPos.w;
				refractionCoords += 1.0;
				refractionCoords /= 2.0;
				vec4 transmissionSample = getTransmissionSample( refractionCoords, roughness, iors[ i ] );
				transmittedLight[ i ] = transmissionSample[ i ];
				transmittedLight.a += transmissionSample.a;
				transmittance[ i ] = diffuseColor[ i ] * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance )[ i ];
			}
			transmittedLight.a /= 3.0;
		#else
			vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, ior, modelMatrix );
			vec3 refractedRayExit = position + transmissionRay;
			vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
			vec2 refractionCoords = ndcPos.xy / ndcPos.w;
			refractionCoords += 1.0;
			refractionCoords /= 2.0;
			transmittedLight = getTransmissionSample( refractionCoords, roughness, ior );
			transmittance = diffuseColor * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance );
		#endif
		vec3 attenuatedColor = transmittance * transmittedLight.rgb;
		vec3 F = EnvironmentBRDF( n, v, specularColor, specularF90, roughness );
		float transmittanceFactor = ( transmittance.r + transmittance.g + transmittance.b ) / 3.0;
		return vec4( ( 1.0 - F ) * attenuatedColor, 1.0 - ( 1.0 - transmittedLight.a ) * transmittanceFactor );
	}
#endif`,vM=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,yM=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,bM=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,wM=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`,MM=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,SM=`uniform sampler2D t2D;
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
}`,EM=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,TM=`#ifdef ENVMAP_TYPE_CUBE
	uniform samplerCube envMap;
#elif defined( ENVMAP_TYPE_CUBE_UV )
	uniform sampler2D envMap;
#endif
uniform float flipEnvMap;
uniform float backgroundBlurriness;
uniform float backgroundIntensity;
uniform mat3 backgroundRotation;
varying vec3 vWorldDirection;
#include <cube_uv_reflection_fragment>
void main() {
	#ifdef ENVMAP_TYPE_CUBE
		vec4 texColor = textureCube( envMap, backgroundRotation * vec3( flipEnvMap * vWorldDirection.x, vWorldDirection.yz ) );
	#elif defined( ENVMAP_TYPE_CUBE_UV )
		vec4 texColor = textureCubeUV( envMap, backgroundRotation * vWorldDirection, backgroundBlurriness );
	#else
		vec4 texColor = vec4( 0.0, 0.0, 0.0, 1.0 );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,AM=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,CM=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,RM=`#include <common>
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
	#include <morphinstance_vertex>
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
}`,IM=`#if DEPTH_PACKING == 3200
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
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#if DEPTH_PACKING == 3200
		diffuseColor.a = opacity;
	#endif
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <logdepthbuf_fragment>
	#ifdef USE_REVERSED_DEPTH_BUFFER
		float fragCoordZ = vHighPrecisionZW[ 0 ] / vHighPrecisionZW[ 1 ];
	#else
		float fragCoordZ = 0.5 * vHighPrecisionZW[ 0 ] / vHighPrecisionZW[ 1 ] + 0.5;
	#endif
	#if DEPTH_PACKING == 3200
		gl_FragColor = vec4( vec3( 1.0 - fragCoordZ ), opacity );
	#elif DEPTH_PACKING == 3201
		gl_FragColor = packDepthToRGBA( fragCoordZ );
	#elif DEPTH_PACKING == 3202
		gl_FragColor = vec4( packDepthToRGB( fragCoordZ ), 1.0 );
	#elif DEPTH_PACKING == 3203
		gl_FragColor = vec4( packDepthToRG( fragCoordZ ), 0.0, 1.0 );
	#endif
}`,PM=`#define DISTANCE
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
	#include <morphinstance_vertex>
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
}`,FM=`#define DISTANCE
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
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	float dist = length( vWorldPosition - referencePosition );
	dist = ( dist - nearDistance ) / ( farDistance - nearDistance );
	dist = saturate( dist );
	gl_FragColor = packDepthToRGBA( dist );
}`,DM=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,LM=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,UM=`uniform float scale;
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
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,NM=`uniform vec3 diffuse;
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
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	if ( mod( vLineDistance, totalSize ) > dashSize ) {
		discard;
	}
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,kM=`#include <common>
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
	#include <morphinstance_vertex>
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
}`,OM=`uniform vec3 diffuse;
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
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
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
}`,BM=`#define LAMBERT
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
	#include <morphinstance_vertex>
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
}`,zM=`#define LAMBERT
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
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
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
}`,VM=`#define MATCAP
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
	#include <morphinstance_vertex>
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
}`,HM=`#define MATCAP
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
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
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
}`,GM=`#define NORMAL
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
	#include <morphinstance_vertex>
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
}`,WM=`#define NORMAL
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
	vec4 diffuseColor = vec4( 0.0, 0.0, 0.0, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	gl_FragColor = vec4( packNormalToRGB( normal ), diffuseColor.a );
	#ifdef OPAQUE
		gl_FragColor.a = 1.0;
	#endif
}`,$M=`#define PHONG
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
	#include <morphinstance_vertex>
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
}`,XM=`#define PHONG
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
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
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
}`,jM=`#define STANDARD
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
	#include <morphinstance_vertex>
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
}`,qM=`#define STANDARD
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
#ifdef USE_DISPERSION
	uniform float dispersion;
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
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
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
}`,YM=`#define TOON
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
	#include <morphinstance_vertex>
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
}`,ZM=`#define TOON
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
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
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
}`,JM=`uniform float size;
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
	#include <morphinstance_vertex>
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
}`,KM=`uniform vec3 diffuse;
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
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
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
}`,QM=`#include <common>
#include <batching_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <shadowmap_pars_vertex>
void main() {
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
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
}`,eS=`uniform vec3 color;
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
}`,tS=`uniform float rotation;
uniform vec2 center;
#include <common>
#include <uv_pars_vertex>
#include <fog_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	vec4 mvPosition = modelViewMatrix[ 3 ];
	vec2 scale = vec2( length( modelMatrix[ 0 ].xyz ), length( modelMatrix[ 1 ].xyz ) );
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
}`,nS=`uniform vec3 diffuse;
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
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
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
}`,_t={alphahash_fragment:Sb,alphahash_pars_fragment:Eb,alphamap_fragment:Tb,alphamap_pars_fragment:Ab,alphatest_fragment:Cb,alphatest_pars_fragment:Rb,aomap_fragment:Ib,aomap_pars_fragment:Pb,batching_pars_vertex:Fb,batching_vertex:Db,begin_vertex:Lb,beginnormal_vertex:Ub,bsdfs:Nb,iridescence_fragment:kb,bumpmap_pars_fragment:Ob,clipping_planes_fragment:Bb,clipping_planes_pars_fragment:zb,clipping_planes_pars_vertex:Vb,clipping_planes_vertex:Hb,color_fragment:Gb,color_pars_fragment:Wb,color_pars_vertex:$b,color_vertex:Xb,common:jb,cube_uv_reflection_fragment:qb,defaultnormal_vertex:Yb,displacementmap_pars_vertex:Zb,displacementmap_vertex:Jb,emissivemap_fragment:Kb,emissivemap_pars_fragment:Qb,colorspace_fragment:ew,colorspace_pars_fragment:tw,envmap_fragment:nw,envmap_common_pars_fragment:iw,envmap_pars_fragment:rw,envmap_pars_vertex:sw,envmap_physical_pars_fragment:gw,envmap_vertex:aw,fog_vertex:ow,fog_pars_vertex:cw,fog_fragment:lw,fog_pars_fragment:hw,gradientmap_pars_fragment:uw,lightmap_pars_fragment:dw,lights_lambert_fragment:fw,lights_lambert_pars_fragment:pw,lights_pars_begin:mw,lights_toon_fragment:xw,lights_toon_pars_fragment:_w,lights_phong_fragment:vw,lights_phong_pars_fragment:yw,lights_physical_fragment:bw,lights_physical_pars_fragment:ww,lights_fragment_begin:Mw,lights_fragment_maps:Sw,lights_fragment_end:Ew,logdepthbuf_fragment:Tw,logdepthbuf_pars_fragment:Aw,logdepthbuf_pars_vertex:Cw,logdepthbuf_vertex:Rw,map_fragment:Iw,map_pars_fragment:Pw,map_particle_fragment:Fw,map_particle_pars_fragment:Dw,metalnessmap_fragment:Lw,metalnessmap_pars_fragment:Uw,morphinstance_vertex:Nw,morphcolor_vertex:kw,morphnormal_vertex:Ow,morphtarget_pars_vertex:Bw,morphtarget_vertex:zw,normal_fragment_begin:Vw,normal_fragment_maps:Hw,normal_pars_fragment:Gw,normal_pars_vertex:Ww,normal_vertex:$w,normalmap_pars_fragment:Xw,clearcoat_normal_fragment_begin:jw,clearcoat_normal_fragment_maps:qw,clearcoat_pars_fragment:Yw,iridescence_pars_fragment:Zw,opaque_fragment:Jw,packing:Kw,premultiplied_alpha_fragment:Qw,project_vertex:eM,dithering_fragment:tM,dithering_pars_fragment:nM,roughnessmap_fragment:iM,roughnessmap_pars_fragment:rM,shadowmap_pars_fragment:sM,shadowmap_pars_vertex:aM,shadowmap_vertex:oM,shadowmask_pars_fragment:cM,skinbase_vertex:lM,skinning_pars_vertex:hM,skinning_vertex:uM,skinnormal_vertex:dM,specularmap_fragment:fM,specularmap_pars_fragment:pM,tonemapping_fragment:mM,tonemapping_pars_fragment:gM,transmission_fragment:xM,transmission_pars_fragment:_M,uv_pars_fragment:vM,uv_pars_vertex:yM,uv_vertex:bM,worldpos_vertex:wM,background_vert:MM,background_frag:SM,backgroundCube_vert:EM,backgroundCube_frag:TM,cube_vert:AM,cube_frag:CM,depth_vert:RM,depth_frag:IM,distanceRGBA_vert:PM,distanceRGBA_frag:FM,equirect_vert:DM,equirect_frag:LM,linedashed_vert:UM,linedashed_frag:NM,meshbasic_vert:kM,meshbasic_frag:OM,meshlambert_vert:BM,meshlambert_frag:zM,meshmatcap_vert:VM,meshmatcap_frag:HM,meshnormal_vert:GM,meshnormal_frag:WM,meshphong_vert:$M,meshphong_frag:XM,meshphysical_vert:jM,meshphysical_frag:qM,meshtoon_vert:YM,meshtoon_frag:ZM,points_vert:JM,points_frag:KM,shadow_vert:QM,shadow_frag:eS,sprite_vert:tS,sprite_frag:nS},Fe={common:{diffuse:{value:new ft(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new mt},alphaMap:{value:null},alphaMapTransform:{value:new mt},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new mt}},envmap:{envMap:{value:null},envMapRotation:{value:new mt},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98},dfgLUT:{value:null}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new mt}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new mt}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new mt},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new mt},normalScale:{value:new Tt(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new mt},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new mt}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new mt}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new mt}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new ft(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new ft(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new mt},alphaTest:{value:0},uvTransform:{value:new mt}},sprite:{diffuse:{value:new ft(16777215)},opacity:{value:1},center:{value:new Tt(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new mt},alphaMap:{value:null},alphaMapTransform:{value:new mt},alphaTest:{value:0}}},Ai={basic:{uniforms:Mn([Fe.common,Fe.specularmap,Fe.envmap,Fe.aomap,Fe.lightmap,Fe.fog]),vertexShader:_t.meshbasic_vert,fragmentShader:_t.meshbasic_frag},lambert:{uniforms:Mn([Fe.common,Fe.specularmap,Fe.envmap,Fe.aomap,Fe.lightmap,Fe.emissivemap,Fe.bumpmap,Fe.normalmap,Fe.displacementmap,Fe.fog,Fe.lights,{emissive:{value:new ft(0)}}]),vertexShader:_t.meshlambert_vert,fragmentShader:_t.meshlambert_frag},phong:{uniforms:Mn([Fe.common,Fe.specularmap,Fe.envmap,Fe.aomap,Fe.lightmap,Fe.emissivemap,Fe.bumpmap,Fe.normalmap,Fe.displacementmap,Fe.fog,Fe.lights,{emissive:{value:new ft(0)},specular:{value:new ft(1118481)},shininess:{value:30}}]),vertexShader:_t.meshphong_vert,fragmentShader:_t.meshphong_frag},standard:{uniforms:Mn([Fe.common,Fe.envmap,Fe.aomap,Fe.lightmap,Fe.emissivemap,Fe.bumpmap,Fe.normalmap,Fe.displacementmap,Fe.roughnessmap,Fe.metalnessmap,Fe.fog,Fe.lights,{emissive:{value:new ft(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:_t.meshphysical_vert,fragmentShader:_t.meshphysical_frag},toon:{uniforms:Mn([Fe.common,Fe.aomap,Fe.lightmap,Fe.emissivemap,Fe.bumpmap,Fe.normalmap,Fe.displacementmap,Fe.gradientmap,Fe.fog,Fe.lights,{emissive:{value:new ft(0)}}]),vertexShader:_t.meshtoon_vert,fragmentShader:_t.meshtoon_frag},matcap:{uniforms:Mn([Fe.common,Fe.bumpmap,Fe.normalmap,Fe.displacementmap,Fe.fog,{matcap:{value:null}}]),vertexShader:_t.meshmatcap_vert,fragmentShader:_t.meshmatcap_frag},points:{uniforms:Mn([Fe.points,Fe.fog]),vertexShader:_t.points_vert,fragmentShader:_t.points_frag},dashed:{uniforms:Mn([Fe.common,Fe.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:_t.linedashed_vert,fragmentShader:_t.linedashed_frag},depth:{uniforms:Mn([Fe.common,Fe.displacementmap]),vertexShader:_t.depth_vert,fragmentShader:_t.depth_frag},normal:{uniforms:Mn([Fe.common,Fe.bumpmap,Fe.normalmap,Fe.displacementmap,{opacity:{value:1}}]),vertexShader:_t.meshnormal_vert,fragmentShader:_t.meshnormal_frag},sprite:{uniforms:Mn([Fe.sprite,Fe.fog]),vertexShader:_t.sprite_vert,fragmentShader:_t.sprite_frag},background:{uniforms:{uvTransform:{value:new mt},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:_t.background_vert,fragmentShader:_t.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new mt}},vertexShader:_t.backgroundCube_vert,fragmentShader:_t.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:_t.cube_vert,fragmentShader:_t.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:_t.equirect_vert,fragmentShader:_t.equirect_frag},distanceRGBA:{uniforms:Mn([Fe.common,Fe.displacementmap,{referencePosition:{value:new ee},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:_t.distanceRGBA_vert,fragmentShader:_t.distanceRGBA_frag},shadow:{uniforms:Mn([Fe.lights,Fe.fog,{color:{value:new ft(0)},opacity:{value:1}}]),vertexShader:_t.shadow_vert,fragmentShader:_t.shadow_frag}};Ai.physical={uniforms:Mn([Ai.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new mt},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new mt},clearcoatNormalScale:{value:new Tt(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new mt},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new mt},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new mt},sheen:{value:0},sheenColor:{value:new ft(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new mt},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new mt},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new mt},transmissionSamplerSize:{value:new Tt},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new mt},attenuationDistance:{value:0},attenuationColor:{value:new ft(0)},specularColor:{value:new ft(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new mt},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new mt},anisotropyVector:{value:new Tt},anisotropyMap:{value:null},anisotropyMapTransform:{value:new mt}}]),vertexShader:_t.meshphysical_vert,fragmentShader:_t.meshphysical_frag};var Ul={r:0,b:0,g:0},Gr=new oi,iS=new Zt;function rS(i,e,t,n,r,a,c){let l=new ft(0),u=a===!0?0:1,d,p,m=null,x=0,_=null;function b(L){let N=L.isScene===!0?L.background:null;return N&&N.isTexture&&(N=(L.backgroundBlurriness>0?t:e).get(N)),N}function E(L){let N=!1,z=b(L);z===null?v(l,u):z&&z.isColor&&(v(z,1),N=!0);let P=i.xr.getEnvironmentBlendMode();P==="additive"?n.buffers.color.setClear(0,0,0,1,c):P==="alpha-blend"&&n.buffers.color.setClear(0,0,0,0,c),(i.autoClear||N)&&(n.buffers.depth.setTest(!0),n.buffers.depth.setMask(!0),n.buffers.color.setMask(!0),i.clear(i.autoClearColor,i.autoClearDepth,i.autoClearStencil))}function w(L,N){let z=b(N);z&&(z.isCubeTexture||z.mapping===qa)?(p===void 0&&(p=new Ln(new rr(1,1,1),new qn({name:"BackgroundCubeMaterial",uniforms:Hr(Ai.backgroundCube.uniforms),vertexShader:Ai.backgroundCube.vertexShader,fragmentShader:Ai.backgroundCube.fragmentShader,side:Tn,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),p.geometry.deleteAttribute("normal"),p.geometry.deleteAttribute("uv"),p.onBeforeRender=function(P,T,B){this.matrixWorld.copyPosition(B.matrixWorld)},Object.defineProperty(p.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),r.update(p)),Gr.copy(N.backgroundRotation),Gr.x*=-1,Gr.y*=-1,Gr.z*=-1,z.isCubeTexture&&z.isRenderTargetTexture===!1&&(Gr.y*=-1,Gr.z*=-1),p.material.uniforms.envMap.value=z,p.material.uniforms.flipEnvMap.value=z.isCubeTexture&&z.isRenderTargetTexture===!1?-1:1,p.material.uniforms.backgroundBlurriness.value=N.backgroundBlurriness,p.material.uniforms.backgroundIntensity.value=N.backgroundIntensity,p.material.uniforms.backgroundRotation.value.setFromMatrix4(iS.makeRotationFromEuler(Gr)),p.material.toneMapped=It.getTransfer(z.colorSpace)!==kt,(m!==z||x!==z.version||_!==i.toneMapping)&&(p.material.needsUpdate=!0,m=z,x=z.version,_=i.toneMapping),p.layers.enableAll(),L.unshift(p,p.geometry,p.material,0,0,null)):z&&z.isTexture&&(d===void 0&&(d=new Ln(new kr(2,2),new qn({name:"BackgroundMaterial",uniforms:Hr(Ai.background.uniforms),vertexShader:Ai.background.vertexShader,fragmentShader:Ai.background.fragmentShader,side:zi,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),d.geometry.deleteAttribute("normal"),Object.defineProperty(d.material,"map",{get:function(){return this.uniforms.t2D.value}}),r.update(d)),d.material.uniforms.t2D.value=z,d.material.uniforms.backgroundIntensity.value=N.backgroundIntensity,d.material.toneMapped=It.getTransfer(z.colorSpace)!==kt,z.matrixAutoUpdate===!0&&z.updateMatrix(),d.material.uniforms.uvTransform.value.copy(z.matrix),(m!==z||x!==z.version||_!==i.toneMapping)&&(d.material.needsUpdate=!0,m=z,x=z.version,_=i.toneMapping),d.layers.enableAll(),L.unshift(d,d.geometry,d.material,0,0,null))}function v(L,N){L.getRGB(Ul,Yu(i)),n.buffers.color.setClear(Ul.r,Ul.g,Ul.b,N,c)}function D(){p!==void 0&&(p.geometry.dispose(),p.material.dispose(),p=void 0),d!==void 0&&(d.geometry.dispose(),d.material.dispose(),d=void 0)}return{getClearColor:function(){return l},setClearColor:function(L,N=1){l.set(L),u=N,v(l,u)},getClearAlpha:function(){return u},setClearAlpha:function(L){u=L,v(l,u)},render:E,addToRenderList:w,dispose:D}}function sS(i,e){let t=i.getParameter(i.MAX_VERTEX_ATTRIBS),n={},r=x(null),a=r,c=!1;function l(R,W,j,J,Y){let ce=!1,H=m(J,j,W);a!==H&&(a=H,d(a.object)),ce=_(R,J,j,Y),ce&&b(R,J,j,Y),Y!==null&&e.update(Y,i.ELEMENT_ARRAY_BUFFER),(ce||c)&&(c=!1,N(R,W,j,J),Y!==null&&i.bindBuffer(i.ELEMENT_ARRAY_BUFFER,e.get(Y).buffer))}function u(){return i.createVertexArray()}function d(R){return i.bindVertexArray(R)}function p(R){return i.deleteVertexArray(R)}function m(R,W,j){let J=j.wireframe===!0,Y=n[R.id];Y===void 0&&(Y={},n[R.id]=Y);let ce=Y[W.id];ce===void 0&&(ce={},Y[W.id]=ce);let H=ce[J];return H===void 0&&(H=x(u()),ce[J]=H),H}function x(R){let W=[],j=[],J=[];for(let Y=0;Y<t;Y++)W[Y]=0,j[Y]=0,J[Y]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:W,enabledAttributes:j,attributeDivisors:J,object:R,attributes:{},index:null}}function _(R,W,j,J){let Y=a.attributes,ce=W.attributes,H=0,Me=j.getAttributes();for(let ie in Me)if(Me[ie].location>=0){let X=Y[ie],Be=ce[ie];if(Be===void 0&&(ie==="instanceMatrix"&&R.instanceMatrix&&(Be=R.instanceMatrix),ie==="instanceColor"&&R.instanceColor&&(Be=R.instanceColor)),X===void 0||X.attribute!==Be||Be&&X.data!==Be.data)return!0;H++}return a.attributesNum!==H||a.index!==J}function b(R,W,j,J){let Y={},ce=W.attributes,H=0,Me=j.getAttributes();for(let ie in Me)if(Me[ie].location>=0){let X=ce[ie];X===void 0&&(ie==="instanceMatrix"&&R.instanceMatrix&&(X=R.instanceMatrix),ie==="instanceColor"&&R.instanceColor&&(X=R.instanceColor));let Be={};Be.attribute=X,X&&X.data&&(Be.data=X.data),Y[ie]=Be,H++}a.attributes=Y,a.attributesNum=H,a.index=J}function E(){let R=a.newAttributes;for(let W=0,j=R.length;W<j;W++)R[W]=0}function w(R){v(R,0)}function v(R,W){let j=a.newAttributes,J=a.enabledAttributes,Y=a.attributeDivisors;j[R]=1,J[R]===0&&(i.enableVertexAttribArray(R),J[R]=1),Y[R]!==W&&(i.vertexAttribDivisor(R,W),Y[R]=W)}function D(){let R=a.newAttributes,W=a.enabledAttributes;for(let j=0,J=W.length;j<J;j++)W[j]!==R[j]&&(i.disableVertexAttribArray(j),W[j]=0)}function L(R,W,j,J,Y,ce,H){H===!0?i.vertexAttribIPointer(R,W,j,Y,ce):i.vertexAttribPointer(R,W,j,J,Y,ce)}function N(R,W,j,J){E();let Y=J.attributes,ce=j.getAttributes(),H=W.defaultAttributeValues;for(let Me in ce){let ie=ce[Me];if(ie.location>=0){let we=Y[Me];if(we===void 0&&(Me==="instanceMatrix"&&R.instanceMatrix&&(we=R.instanceMatrix),Me==="instanceColor"&&R.instanceColor&&(we=R.instanceColor)),we!==void 0){let X=we.normalized,Be=we.itemSize,ht=e.get(we);if(ht===void 0)continue;let At=ht.buffer,Ut=ht.type,Ct=ht.bytesPerElement,re=Ut===i.INT||Ut===i.UNSIGNED_INT||we.gpuType===el;if(we.isInterleavedBufferAttribute){let pe=we.data,ke=pe.stride,dt=we.offset;if(pe.isInstancedInterleavedBuffer){for(let Ze=0;Ze<ie.locationSize;Ze++)v(ie.location+Ze,pe.meshPerAttribute);R.isInstancedMesh!==!0&&J._maxInstanceCount===void 0&&(J._maxInstanceCount=pe.meshPerAttribute*pe.count)}else for(let Ze=0;Ze<ie.locationSize;Ze++)w(ie.location+Ze);i.bindBuffer(i.ARRAY_BUFFER,At);for(let Ze=0;Ze<ie.locationSize;Ze++)L(ie.location+Ze,Be/ie.locationSize,Ut,X,ke*Ct,(dt+Be/ie.locationSize*Ze)*Ct,re)}else{if(we.isInstancedBufferAttribute){for(let pe=0;pe<ie.locationSize;pe++)v(ie.location+pe,we.meshPerAttribute);R.isInstancedMesh!==!0&&J._maxInstanceCount===void 0&&(J._maxInstanceCount=we.meshPerAttribute*we.count)}else for(let pe=0;pe<ie.locationSize;pe++)w(ie.location+pe);i.bindBuffer(i.ARRAY_BUFFER,At);for(let pe=0;pe<ie.locationSize;pe++)L(ie.location+pe,Be/ie.locationSize,Ut,X,Be*Ct,Be/ie.locationSize*pe*Ct,re)}}else if(H!==void 0){let X=H[Me];if(X!==void 0)switch(X.length){case 2:i.vertexAttrib2fv(ie.location,X);break;case 3:i.vertexAttrib3fv(ie.location,X);break;case 4:i.vertexAttrib4fv(ie.location,X);break;default:i.vertexAttrib1fv(ie.location,X)}}}}D()}function z(){B();for(let R in n){let W=n[R];for(let j in W){let J=W[j];for(let Y in J)p(J[Y].object),delete J[Y];delete W[j]}delete n[R]}}function P(R){if(n[R.id]===void 0)return;let W=n[R.id];for(let j in W){let J=W[j];for(let Y in J)p(J[Y].object),delete J[Y];delete W[j]}delete n[R.id]}function T(R){for(let W in n){let j=n[W];if(j[R.id]===void 0)continue;let J=j[R.id];for(let Y in J)p(J[Y].object),delete J[Y];delete j[R.id]}}function B(){I(),c=!0,a!==r&&(a=r,d(a.object))}function I(){r.geometry=null,r.program=null,r.wireframe=!1}return{setup:l,reset:B,resetDefaultState:I,dispose:z,releaseStatesOfGeometry:P,releaseStatesOfProgram:T,initAttributes:E,enableAttribute:w,disableUnusedAttributes:D}}function aS(i,e,t){let n;function r(d){n=d}function a(d,p){i.drawArrays(n,d,p),t.update(p,n,1)}function c(d,p,m){m!==0&&(i.drawArraysInstanced(n,d,p,m),t.update(p,n,m))}function l(d,p,m){if(m===0)return;e.get("WEBGL_multi_draw").multiDrawArraysWEBGL(n,d,0,p,0,m);let _=0;for(let b=0;b<m;b++)_+=p[b];t.update(_,n,1)}function u(d,p,m,x){if(m===0)return;let _=e.get("WEBGL_multi_draw");if(_===null)for(let b=0;b<d.length;b++)c(d[b],p[b],x[b]);else{_.multiDrawArraysInstancedWEBGL(n,d,0,p,0,x,0,m);let b=0;for(let E=0;E<m;E++)b+=p[E]*x[E];t.update(b,n,1)}}this.setMode=r,this.render=a,this.renderInstances=c,this.renderMultiDraw=l,this.renderMultiDrawInstances=u}function oS(i,e,t,n){let r;function a(){if(r!==void 0)return r;if(e.has("EXT_texture_filter_anisotropic")===!0){let T=e.get("EXT_texture_filter_anisotropic");r=i.getParameter(T.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else r=0;return r}function c(T){return!(T!==Yn&&n.convert(T)!==i.getParameter(i.IMPLEMENTATION_COLOR_READ_FORMAT))}function l(T){let B=T===Vr&&(e.has("EXT_color_buffer_half_float")||e.has("EXT_color_buffer_float"));return!(T!==ci&&n.convert(T)!==i.getParameter(i.IMPLEMENTATION_COLOR_READ_TYPE)&&T!==Ti&&!B)}function u(T){if(T==="highp"){if(i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.HIGH_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.HIGH_FLOAT).precision>0)return"highp";T="mediump"}return T==="mediump"&&i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.MEDIUM_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let d=t.precision!==void 0?t.precision:"highp",p=u(d);p!==d&&(lt("WebGLRenderer:",d,"not supported, using",p,"instead."),d=p);let m=t.logarithmicDepthBuffer===!0,x=t.reversedDepthBuffer===!0&&e.has("EXT_clip_control"),_=i.getParameter(i.MAX_TEXTURE_IMAGE_UNITS),b=i.getParameter(i.MAX_VERTEX_TEXTURE_IMAGE_UNITS),E=i.getParameter(i.MAX_TEXTURE_SIZE),w=i.getParameter(i.MAX_CUBE_MAP_TEXTURE_SIZE),v=i.getParameter(i.MAX_VERTEX_ATTRIBS),D=i.getParameter(i.MAX_VERTEX_UNIFORM_VECTORS),L=i.getParameter(i.MAX_VARYING_VECTORS),N=i.getParameter(i.MAX_FRAGMENT_UNIFORM_VECTORS),z=b>0,P=i.getParameter(i.MAX_SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:a,getMaxPrecision:u,textureFormatReadable:c,textureTypeReadable:l,precision:d,logarithmicDepthBuffer:m,reversedDepthBuffer:x,maxTextures:_,maxVertexTextures:b,maxTextureSize:E,maxCubemapSize:w,maxAttributes:v,maxVertexUniforms:D,maxVaryings:L,maxFragmentUniforms:N,vertexTextures:z,maxSamples:P}}function cS(i){let e=this,t=null,n=0,r=!1,a=!1,c=new yi,l=new mt,u={value:null,needsUpdate:!1};this.uniform=u,this.numPlanes=0,this.numIntersection=0,this.init=function(m,x){let _=m.length!==0||x||n!==0||r;return r=x,n=m.length,_},this.beginShadows=function(){a=!0,p(null)},this.endShadows=function(){a=!1},this.setGlobalState=function(m,x){t=p(m,x,0)},this.setState=function(m,x,_){let b=m.clippingPlanes,E=m.clipIntersection,w=m.clipShadows,v=i.get(m);if(!r||b===null||b.length===0||a&&!w)a?p(null):d();else{let D=a?0:n,L=D*4,N=v.clippingState||null;u.value=N,N=p(b,x,L,_);for(let z=0;z!==L;++z)N[z]=t[z];v.clippingState=N,this.numIntersection=E?this.numPlanes:0,this.numPlanes+=D}};function d(){u.value!==t&&(u.value=t,u.needsUpdate=n>0),e.numPlanes=n,e.numIntersection=0}function p(m,x,_,b){let E=m!==null?m.length:0,w=null;if(E!==0){if(w=u.value,b!==!0||w===null){let v=_+E*4,D=x.matrixWorldInverse;l.getNormalMatrix(D),(w===null||w.length<v)&&(w=new Float32Array(v));for(let L=0,N=_;L!==E;++L,N+=4)c.copy(m[L]).applyMatrix4(D,l),c.normal.toArray(w,N),w[N+3]=c.constant}u.value=w,u.needsUpdate=!0}return e.numPlanes=E,e.numIntersection=0,w}}function lS(i){let e=new WeakMap;function t(c,l){return l===Jc?c.mapping=Br:l===Kc&&(c.mapping=zr),c}function n(c){if(c&&c.isTexture){let l=c.mapping;if(l===Jc||l===Kc)if(e.has(c)){let u=e.get(c).texture;return t(u,c.mapping)}else{let u=c.image;if(u&&u.height>0){let d=new Tc(u.height);return d.fromEquirectangularTexture(i,c),e.set(c,d),c.addEventListener("dispose",r),t(d.texture,c.mapping)}else return null}}return c}function r(c){let l=c.target;l.removeEventListener("dispose",r);let u=e.get(l);u!==void 0&&(e.delete(l),u.dispose())}function a(){e=new WeakMap}return{get:n,dispose:a}}var lr=4,cm=[.125,.215,.35,.446,.526,.582],$r=20,hS=256,to=new Wa,lm=new ft,Qu=null,ed=0,td=0,nd=!1,uS=new ee,kl=class{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._sizeLods=[],this._sigmas=[],this._lodMeshes=[],this._backgroundBox=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._blurMaterial=null,this._ggxMaterial=null}fromScene(e,t=0,n=.1,r=100,a={}){let{size:c=256,position:l=uS}=a;Qu=this._renderer.getRenderTarget(),ed=this._renderer.getActiveCubeFace(),td=this._renderer.getActiveMipmapLevel(),nd=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(c);let u=this._allocateTargets();return u.depthBuffer=!0,this._sceneToCubeUV(e,n,r,u,l),t>0&&this._blur(u,0,0,t),this._applyPMREM(u),this._cleanup(u),u}fromEquirectangular(e,t=null){return this._fromTexture(e,t)}fromCubemap(e,t=null){return this._fromTexture(e,t)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=dm(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=um(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose(),this._backgroundBox!==null&&(this._backgroundBox.geometry.dispose(),this._backgroundBox.material.dispose())}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._ggxMaterial!==null&&this._ggxMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodMeshes.length;e++)this._lodMeshes[e].geometry.dispose()}_cleanup(e){this._renderer.setRenderTarget(Qu,ed,td),this._renderer.xr.enabled=nd,e.scissorTest=!1,Vs(e,0,0,e.width,e.height)}_fromTexture(e,t){e.mapping===Br||e.mapping===zr?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),Qu=this._renderer.getRenderTarget(),ed=this._renderer.getActiveCubeFace(),td=this._renderer.getActiveMipmapLevel(),nd=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;let n=t||this._allocateTargets();return this._textureToCubeUV(e,n),this._applyPMREM(n),this._cleanup(n),n}_allocateTargets(){let e=3*Math.max(this._cubeSize,112),t=4*this._cubeSize,n={magFilter:Vn,minFilter:Vn,generateMipmaps:!1,type:Vr,format:Yn,colorSpace:Lr,depthBuffer:!1},r=hm(e,t,n);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==t){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=hm(e,t,n);let{_lodMax:a}=this;({lodMeshes:this._lodMeshes,sizeLods:this._sizeLods,sigmas:this._sigmas}=dS(a)),this._blurMaterial=pS(a,e,t),this._ggxMaterial=fS(a,e,t)}return r}_compileMaterial(e){let t=new Ln(new mn,e);this._renderer.compile(t,to)}_sceneToCubeUV(e,t,n,r,a){let u=new fn(90,1,t,n),d=[1,-1,1,1,1,1],p=[1,1,1,-1,-1,-1],m=this._renderer,x=m.autoClear,_=m.toneMapping;m.getClearColor(lm),m.toneMapping=Gi,m.autoClear=!1,m.state.buffers.depth.getReversed()&&(m.setRenderTarget(r),m.clearDepth(),m.setRenderTarget(null)),this._backgroundBox===null&&(this._backgroundBox=new Ln(new rr,new Ra({name:"PMREM.Background",side:Tn,depthWrite:!1,depthTest:!1})));let E=this._backgroundBox,w=E.material,v=!1,D=e.background;D?D.isColor&&(w.color.copy(D),e.background=null,v=!0):(w.color.copy(lm),v=!0);for(let L=0;L<6;L++){let N=L%3;N===0?(u.up.set(0,d[L],0),u.position.set(a.x,a.y,a.z),u.lookAt(a.x+p[L],a.y,a.z)):N===1?(u.up.set(0,0,d[L]),u.position.set(a.x,a.y,a.z),u.lookAt(a.x,a.y+p[L],a.z)):(u.up.set(0,d[L],0),u.position.set(a.x,a.y,a.z),u.lookAt(a.x,a.y,a.z+p[L]));let z=this._cubeSize;Vs(r,N*z,L>2?z:0,z,z),m.setRenderTarget(r),v&&m.render(E,u),m.render(e,u)}m.toneMapping=_,m.autoClear=x,e.background=D}_textureToCubeUV(e,t){let n=this._renderer,r=e.mapping===Br||e.mapping===zr;r?(this._cubemapMaterial===null&&(this._cubemapMaterial=dm()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=um());let a=r?this._cubemapMaterial:this._equirectMaterial,c=this._lodMeshes[0];c.material=a;let l=a.uniforms;l.envMap.value=e;let u=this._cubeSize;Vs(t,0,0,3*u,2*u),n.setRenderTarget(t),n.render(c,to)}_applyPMREM(e){let t=this._renderer,n=t.autoClear;t.autoClear=!1;let r=this._lodMeshes.length;for(let a=1;a<r;a++)this._applyGGXFilter(e,a-1,a);t.autoClear=n}_applyGGXFilter(e,t,n){let r=this._renderer,a=this._pingPongRenderTarget,c=this._ggxMaterial,l=this._lodMeshes[n];l.material=c;let u=c.uniforms,d=n/(this._lodMeshes.length-1),p=t/(this._lodMeshes.length-1),m=Math.sqrt(d*d-p*p),x=.05+d*.95,_=m*x,{_lodMax:b}=this,E=this._sizeLods[n],w=3*E*(n>b-lr?n-b+lr:0),v=4*(this._cubeSize-E);u.envMap.value=e.texture,u.roughness.value=_,u.mipInt.value=b-t,Vs(a,w,v,3*E,2*E),r.setRenderTarget(a),r.render(l,to),u.envMap.value=a.texture,u.roughness.value=0,u.mipInt.value=b-n,Vs(e,w,v,3*E,2*E),r.setRenderTarget(e),r.render(l,to)}_blur(e,t,n,r,a){let c=this._pingPongRenderTarget;this._halfBlur(e,c,t,n,r,"latitudinal",a),this._halfBlur(c,e,n,n,r,"longitudinal",a)}_halfBlur(e,t,n,r,a,c,l){let u=this._renderer,d=this._blurMaterial;c!=="latitudinal"&&c!=="longitudinal"&&yt("blur direction must be either latitudinal or longitudinal!");let p=3,m=this._lodMeshes[r];m.material=d;let x=d.uniforms,_=this._sizeLods[n]-1,b=isFinite(a)?Math.PI/(2*_):2*Math.PI/(2*$r-1),E=a/b,w=isFinite(a)?1+Math.floor(p*E):$r;w>$r&&lt(`sigmaRadians, ${a}, is too large and will clip, as it requested ${w} samples when the maximum is set to ${$r}`);let v=[],D=0;for(let T=0;T<$r;++T){let B=T/E,I=Math.exp(-B*B/2);v.push(I),T===0?D+=I:T<w&&(D+=2*I)}for(let T=0;T<v.length;T++)v[T]=v[T]/D;x.envMap.value=e.texture,x.samples.value=w,x.weights.value=v,x.latitudinal.value=c==="latitudinal",l&&(x.poleAxis.value=l);let{_lodMax:L}=this;x.dTheta.value=b,x.mipInt.value=L-n;let N=this._sizeLods[r],z=3*N*(r>L-lr?r-L+lr:0),P=4*(this._cubeSize-N);Vs(t,z,P,3*N,2*N),u.setRenderTarget(t),u.render(m,to)}};function dS(i){let e=[],t=[],n=[],r=i,a=i-lr+1+cm.length;for(let c=0;c<a;c++){let l=Math.pow(2,r);e.push(l);let u=1/l;c>i-lr?u=cm[c-i+lr-1]:c===0&&(u=0),t.push(u);let d=1/(l-2),p=-d,m=1+d,x=[p,p,m,p,m,m,p,p,m,m,p,m],_=6,b=6,E=3,w=2,v=1,D=new Float32Array(E*b*_),L=new Float32Array(w*b*_),N=new Float32Array(v*b*_);for(let P=0;P<_;P++){let T=P%3*2/3-1,B=P>2?0:-1,I=[T,B,0,T+2/3,B,0,T+2/3,B+1,0,T,B,0,T+2/3,B+1,0,T,B+1,0];D.set(I,E*b*P),L.set(x,w*b*P);let R=[P,P,P,P,P,P];N.set(R,v*b*P)}let z=new mn;z.setAttribute("position",new wn(D,E)),z.setAttribute("uv",new wn(L,w)),z.setAttribute("faceIndex",new wn(N,v)),n.push(new Ln(z,null)),r>lr&&r--}return{lodMeshes:n,sizeLods:e,sigmas:t}}function hm(i,e,t){let n=new Hn(i,e,t);return n.texture.mapping=qa,n.texture.name="PMREM.cubeUv",n.scissorTest=!0,n}function Vs(i,e,t,n,r){i.viewport.set(e,t,n,r),i.scissor.set(e,t,n,r)}function fS(i,e,t){return new qn({name:"PMREMGGXConvolution",defines:{GGX_SAMPLES:hS,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/t,CUBEUV_MAX_MIP:`${i}.0`},uniforms:{envMap:{value:null},roughness:{value:0},mipInt:{value:0}},vertexShader:Bl(),fragmentShader:`

			precision highp float;
			precision highp int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform float roughness;
			uniform float mipInt;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			#define PI 3.14159265359

			// Van der Corput radical inverse
			float radicalInverse_VdC(uint bits) {
				bits = (bits << 16u) | (bits >> 16u);
				bits = ((bits & 0x55555555u) << 1u) | ((bits & 0xAAAAAAAAu) >> 1u);
				bits = ((bits & 0x33333333u) << 2u) | ((bits & 0xCCCCCCCCu) >> 2u);
				bits = ((bits & 0x0F0F0F0Fu) << 4u) | ((bits & 0xF0F0F0F0u) >> 4u);
				bits = ((bits & 0x00FF00FFu) << 8u) | ((bits & 0xFF00FF00u) >> 8u);
				return float(bits) * 2.3283064365386963e-10; // / 0x100000000
			}

			// Hammersley sequence
			vec2 hammersley(uint i, uint N) {
				return vec2(float(i) / float(N), radicalInverse_VdC(i));
			}

			// GGX VNDF importance sampling (Eric Heitz 2018)
			// "Sampling the GGX Distribution of Visible Normals"
			// https://jcgt.org/published/0007/04/01/
			vec3 importanceSampleGGX_VNDF(vec2 Xi, vec3 V, float roughness) {
				float alpha = roughness * roughness;

				// Section 3.2: Transform view direction to hemisphere configuration
				vec3 Vh = normalize(vec3(alpha * V.x, alpha * V.y, V.z));

				// Section 4.1: Orthonormal basis
				float lensq = Vh.x * Vh.x + Vh.y * Vh.y;
				vec3 T1 = lensq > 0.0 ? vec3(-Vh.y, Vh.x, 0.0) / sqrt(lensq) : vec3(1.0, 0.0, 0.0);
				vec3 T2 = cross(Vh, T1);

				// Section 4.2: Parameterization of projected area
				float r = sqrt(Xi.x);
				float phi = 2.0 * PI * Xi.y;
				float t1 = r * cos(phi);
				float t2 = r * sin(phi);
				float s = 0.5 * (1.0 + Vh.z);
				t2 = (1.0 - s) * sqrt(1.0 - t1 * t1) + s * t2;

				// Section 4.3: Reprojection onto hemisphere
				vec3 Nh = t1 * T1 + t2 * T2 + sqrt(max(0.0, 1.0 - t1 * t1 - t2 * t2)) * Vh;

				// Section 3.4: Transform back to ellipsoid configuration
				return normalize(vec3(alpha * Nh.x, alpha * Nh.y, max(0.0, Nh.z)));
			}

			void main() {
				vec3 N = normalize(vOutputDirection);
				vec3 V = N; // Assume view direction equals normal for pre-filtering

				vec3 prefilteredColor = vec3(0.0);
				float totalWeight = 0.0;

				// For very low roughness, just sample the environment directly
				if (roughness < 0.001) {
					gl_FragColor = vec4(bilinearCubeUV(envMap, N, mipInt), 1.0);
					return;
				}

				// Tangent space basis for VNDF sampling
				vec3 up = abs(N.z) < 0.999 ? vec3(0.0, 0.0, 1.0) : vec3(1.0, 0.0, 0.0);
				vec3 tangent = normalize(cross(up, N));
				vec3 bitangent = cross(N, tangent);

				for(uint i = 0u; i < uint(GGX_SAMPLES); i++) {
					vec2 Xi = hammersley(i, uint(GGX_SAMPLES));

					// For PMREM, V = N, so in tangent space V is always (0, 0, 1)
					vec3 H_tangent = importanceSampleGGX_VNDF(Xi, vec3(0.0, 0.0, 1.0), roughness);

					// Transform H back to world space
					vec3 H = normalize(tangent * H_tangent.x + bitangent * H_tangent.y + N * H_tangent.z);
					vec3 L = normalize(2.0 * dot(V, H) * H - V);

					float NdotL = max(dot(N, L), 0.0);

					if(NdotL > 0.0) {
						// Sample environment at fixed mip level
						// VNDF importance sampling handles the distribution filtering
						vec3 sampleColor = bilinearCubeUV(envMap, L, mipInt);

						// Weight by NdotL for the split-sum approximation
						// VNDF PDF naturally accounts for the visible microfacet distribution
						prefilteredColor += sampleColor * NdotL;
						totalWeight += NdotL;
					}
				}

				if (totalWeight > 0.0) {
					prefilteredColor = prefilteredColor / totalWeight;
				}

				gl_FragColor = vec4(prefilteredColor, 1.0);
			}
		`,blending:Ei,depthTest:!1,depthWrite:!1})}function pS(i,e,t){let n=new Float32Array($r),r=new ee(0,1,0);return new qn({name:"SphericalGaussianBlur",defines:{n:$r,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/t,CUBEUV_MAX_MIP:`${i}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:n},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:r}},vertexShader:Bl(),fragmentShader:`

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
		`,blending:Ei,depthTest:!1,depthWrite:!1})}function um(){return new qn({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:Bl(),fragmentShader:`

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
		`,blending:Ei,depthTest:!1,depthWrite:!1})}function dm(){return new qn({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:Bl(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:Ei,depthTest:!1,depthWrite:!1})}function Bl(){return`

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
	`}function mS(i){let e=new WeakMap,t=null;function n(l){if(l&&l.isTexture){let u=l.mapping,d=u===Jc||u===Kc,p=u===Br||u===zr;if(d||p){let m=e.get(l),x=m!==void 0?m.texture.pmremVersion:0;if(l.isRenderTargetTexture&&l.pmremVersion!==x)return t===null&&(t=new kl(i)),m=d?t.fromEquirectangular(l,m):t.fromCubemap(l,m),m.texture.pmremVersion=l.pmremVersion,e.set(l,m),m.texture;if(m!==void 0)return m.texture;{let _=l.image;return d&&_&&_.height>0||p&&_&&r(_)?(t===null&&(t=new kl(i)),m=d?t.fromEquirectangular(l):t.fromCubemap(l),m.texture.pmremVersion=l.pmremVersion,e.set(l,m),l.addEventListener("dispose",a),m.texture):null}}}return l}function r(l){let u=0,d=6;for(let p=0;p<d;p++)l[p]!==void 0&&u++;return u===d}function a(l){let u=l.target;u.removeEventListener("dispose",a);let d=e.get(u);d!==void 0&&(e.delete(u),d.dispose())}function c(){e=new WeakMap,t!==null&&(t.dispose(),t=null)}return{get:n,dispose:c}}function gS(i){let e={};function t(n){if(e[n]!==void 0)return e[n];let r=i.getExtension(n);return e[n]=r,r}return{has:function(n){return t(n)!==null},init:function(){t("EXT_color_buffer_float"),t("WEBGL_clip_cull_distance"),t("OES_texture_float_linear"),t("EXT_color_buffer_half_float"),t("WEBGL_multisampled_render_to_texture"),t("WEBGL_render_shared_exponent")},get:function(n){let r=t(n);return r===null&&Is("WebGLRenderer: "+n+" extension not supported."),r}}}function xS(i,e,t,n){let r={},a=new WeakMap;function c(m){let x=m.target;x.index!==null&&e.remove(x.index);for(let b in x.attributes)e.remove(x.attributes[b]);x.removeEventListener("dispose",c),delete r[x.id];let _=a.get(x);_&&(e.remove(_),a.delete(x)),n.releaseStatesOfGeometry(x),x.isInstancedBufferGeometry===!0&&delete x._maxInstanceCount,t.memory.geometries--}function l(m,x){return r[x.id]===!0||(x.addEventListener("dispose",c),r[x.id]=!0,t.memory.geometries++),x}function u(m){let x=m.attributes;for(let _ in x)e.update(x[_],i.ARRAY_BUFFER)}function d(m){let x=[],_=m.index,b=m.attributes.position,E=0;if(_!==null){let D=_.array;E=_.version;for(let L=0,N=D.length;L<N;L+=3){let z=D[L+0],P=D[L+1],T=D[L+2];x.push(z,P,P,T,T,z)}}else if(b!==void 0){let D=b.array;E=b.version;for(let L=0,N=D.length/3-1;L<N;L+=3){let z=L+0,P=L+1,T=L+2;x.push(z,P,P,T,T,z)}}else return;let w=new(ju(x)?Pa:Ia)(x,1);w.version=E;let v=a.get(m);v&&e.remove(v),a.set(m,w)}function p(m){let x=a.get(m);if(x){let _=m.index;_!==null&&x.version<_.version&&d(m)}else d(m);return a.get(m)}return{get:l,update:u,getWireframeAttribute:p}}function _S(i,e,t){let n;function r(x){n=x}let a,c;function l(x){a=x.type,c=x.bytesPerElement}function u(x,_){i.drawElements(n,_,a,x*c),t.update(_,n,1)}function d(x,_,b){b!==0&&(i.drawElementsInstanced(n,_,a,x*c,b),t.update(_,n,b))}function p(x,_,b){if(b===0)return;e.get("WEBGL_multi_draw").multiDrawElementsWEBGL(n,_,0,a,x,0,b);let w=0;for(let v=0;v<b;v++)w+=_[v];t.update(w,n,1)}function m(x,_,b,E){if(b===0)return;let w=e.get("WEBGL_multi_draw");if(w===null)for(let v=0;v<x.length;v++)d(x[v]/c,_[v],E[v]);else{w.multiDrawElementsInstancedWEBGL(n,_,0,a,x,0,E,0,b);let v=0;for(let D=0;D<b;D++)v+=_[D]*E[D];t.update(v,n,1)}}this.setMode=r,this.setIndex=l,this.render=u,this.renderInstances=d,this.renderMultiDraw=p,this.renderMultiDrawInstances=m}function vS(i){let e={geometries:0,textures:0},t={frame:0,calls:0,triangles:0,points:0,lines:0};function n(a,c,l){switch(t.calls++,c){case i.TRIANGLES:t.triangles+=l*(a/3);break;case i.LINES:t.lines+=l*(a/2);break;case i.LINE_STRIP:t.lines+=l*(a-1);break;case i.LINE_LOOP:t.lines+=l*a;break;case i.POINTS:t.points+=l*a;break;default:yt("WebGLInfo: Unknown draw mode:",c);break}}function r(){t.calls=0,t.triangles=0,t.points=0,t.lines=0}return{memory:e,render:t,programs:null,autoReset:!0,reset:r,update:n}}function yS(i,e,t){let n=new WeakMap,r=new Kt;function a(c,l,u){let d=c.morphTargetInfluences,p=l.morphAttributes.position||l.morphAttributes.normal||l.morphAttributes.color,m=p!==void 0?p.length:0,x=n.get(l);if(x===void 0||x.count!==m){let I=function(){T.dispose(),n.delete(l),l.removeEventListener("dispose",I)};x!==void 0&&x.texture.dispose();let _=l.morphAttributes.position!==void 0,b=l.morphAttributes.normal!==void 0,E=l.morphAttributes.color!==void 0,w=l.morphAttributes.position||[],v=l.morphAttributes.normal||[],D=l.morphAttributes.color||[],L=0;_===!0&&(L=1),b===!0&&(L=2),E===!0&&(L=3);let N=l.attributes.position.count*L,z=1;N>e.maxTextureSize&&(z=Math.ceil(N/e.maxTextureSize),N=e.maxTextureSize);let P=new Float32Array(N*z*4*m),T=new Ca(P,N,z,m);T.type=Ti,T.needsUpdate=!0;let B=L*4;for(let R=0;R<m;R++){let W=w[R],j=v[R],J=D[R],Y=N*z*4*R;for(let ce=0;ce<W.count;ce++){let H=ce*B;_===!0&&(r.fromBufferAttribute(W,ce),P[Y+H+0]=r.x,P[Y+H+1]=r.y,P[Y+H+2]=r.z,P[Y+H+3]=0),b===!0&&(r.fromBufferAttribute(j,ce),P[Y+H+4]=r.x,P[Y+H+5]=r.y,P[Y+H+6]=r.z,P[Y+H+7]=0),E===!0&&(r.fromBufferAttribute(J,ce),P[Y+H+8]=r.x,P[Y+H+9]=r.y,P[Y+H+10]=r.z,P[Y+H+11]=J.itemSize===4?r.w:1)}}x={count:m,texture:T,size:new Tt(N,z)},n.set(l,x),l.addEventListener("dispose",I)}if(c.isInstancedMesh===!0&&c.morphTexture!==null)u.getUniforms().setValue(i,"morphTexture",c.morphTexture,t);else{let _=0;for(let E=0;E<d.length;E++)_+=d[E];let b=l.morphTargetsRelative?1:1-_;u.getUniforms().setValue(i,"morphTargetBaseInfluence",b),u.getUniforms().setValue(i,"morphTargetInfluences",d)}u.getUniforms().setValue(i,"morphTargetsTexture",x.texture,t),u.getUniforms().setValue(i,"morphTargetsTextureSize",x.size)}return{update:a}}function bS(i,e,t,n){let r=new WeakMap;function a(u){let d=n.render.frame,p=u.geometry,m=e.get(u,p);if(r.get(m)!==d&&(e.update(m),r.set(m,d)),u.isInstancedMesh&&(u.hasEventListener("dispose",l)===!1&&u.addEventListener("dispose",l),r.get(u)!==d&&(t.update(u.instanceMatrix,i.ARRAY_BUFFER),u.instanceColor!==null&&t.update(u.instanceColor,i.ARRAY_BUFFER),r.set(u,d))),u.isSkinnedMesh){let x=u.skeleton;r.get(x)!==d&&(x.update(),r.set(x,d))}return m}function c(){r=new WeakMap}function l(u){let d=u.target;d.removeEventListener("dispose",l),t.remove(d.instanceMatrix),d.instanceColor!==null&&t.remove(d.instanceColor)}return{update:a,dispose:c}}var Pm=new Dn,fm=new Na(1,1),Fm=new Ca,Dm=new Sc,Lm=new Da,pm=[],mm=[],gm=new Float32Array(16),xm=new Float32Array(9),_m=new Float32Array(4);function Gs(i,e,t){let n=i[0];if(n<=0||n>0)return i;let r=e*t,a=pm[r];if(a===void 0&&(a=new Float32Array(r),pm[r]=a),e!==0){n.toArray(a,0);for(let c=1,l=0;c!==e;++c)l+=t,i[c].toArray(a,l)}return a}function sn(i,e){if(i.length!==e.length)return!1;for(let t=0,n=i.length;t<n;t++)if(i[t]!==e[t])return!1;return!0}function an(i,e){for(let t=0,n=e.length;t<n;t++)i[t]=e[t]}function zl(i,e){let t=mm[e];t===void 0&&(t=new Int32Array(e),mm[e]=t);for(let n=0;n!==e;++n)t[n]=i.allocateTextureUnit();return t}function wS(i,e){let t=this.cache;t[0]!==e&&(i.uniform1f(this.addr,e),t[0]=e)}function MS(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(i.uniform2f(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(sn(t,e))return;i.uniform2fv(this.addr,e),an(t,e)}}function SS(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(i.uniform3f(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else if(e.r!==void 0)(t[0]!==e.r||t[1]!==e.g||t[2]!==e.b)&&(i.uniform3f(this.addr,e.r,e.g,e.b),t[0]=e.r,t[1]=e.g,t[2]=e.b);else{if(sn(t,e))return;i.uniform3fv(this.addr,e),an(t,e)}}function ES(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(i.uniform4f(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(sn(t,e))return;i.uniform4fv(this.addr,e),an(t,e)}}function TS(i,e){let t=this.cache,n=e.elements;if(n===void 0){if(sn(t,e))return;i.uniformMatrix2fv(this.addr,!1,e),an(t,e)}else{if(sn(t,n))return;_m.set(n),i.uniformMatrix2fv(this.addr,!1,_m),an(t,n)}}function AS(i,e){let t=this.cache,n=e.elements;if(n===void 0){if(sn(t,e))return;i.uniformMatrix3fv(this.addr,!1,e),an(t,e)}else{if(sn(t,n))return;xm.set(n),i.uniformMatrix3fv(this.addr,!1,xm),an(t,n)}}function CS(i,e){let t=this.cache,n=e.elements;if(n===void 0){if(sn(t,e))return;i.uniformMatrix4fv(this.addr,!1,e),an(t,e)}else{if(sn(t,n))return;gm.set(n),i.uniformMatrix4fv(this.addr,!1,gm),an(t,n)}}function RS(i,e){let t=this.cache;t[0]!==e&&(i.uniform1i(this.addr,e),t[0]=e)}function IS(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(i.uniform2i(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(sn(t,e))return;i.uniform2iv(this.addr,e),an(t,e)}}function PS(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(i.uniform3i(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(sn(t,e))return;i.uniform3iv(this.addr,e),an(t,e)}}function FS(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(i.uniform4i(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(sn(t,e))return;i.uniform4iv(this.addr,e),an(t,e)}}function DS(i,e){let t=this.cache;t[0]!==e&&(i.uniform1ui(this.addr,e),t[0]=e)}function LS(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(i.uniform2ui(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(sn(t,e))return;i.uniform2uiv(this.addr,e),an(t,e)}}function US(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(i.uniform3ui(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(sn(t,e))return;i.uniform3uiv(this.addr,e),an(t,e)}}function NS(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(i.uniform4ui(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(sn(t,e))return;i.uniform4uiv(this.addr,e),an(t,e)}}function kS(i,e,t){let n=this.cache,r=t.allocateTextureUnit();n[0]!==r&&(i.uniform1i(this.addr,r),n[0]=r);let a;this.type===i.SAMPLER_2D_SHADOW?(fm.compareFunction=$u,a=fm):a=Pm,t.setTexture2D(e||a,r)}function OS(i,e,t){let n=this.cache,r=t.allocateTextureUnit();n[0]!==r&&(i.uniform1i(this.addr,r),n[0]=r),t.setTexture3D(e||Dm,r)}function BS(i,e,t){let n=this.cache,r=t.allocateTextureUnit();n[0]!==r&&(i.uniform1i(this.addr,r),n[0]=r),t.setTextureCube(e||Lm,r)}function zS(i,e,t){let n=this.cache,r=t.allocateTextureUnit();n[0]!==r&&(i.uniform1i(this.addr,r),n[0]=r),t.setTexture2DArray(e||Fm,r)}function VS(i){switch(i){case 5126:return wS;case 35664:return MS;case 35665:return SS;case 35666:return ES;case 35674:return TS;case 35675:return AS;case 35676:return CS;case 5124:case 35670:return RS;case 35667:case 35671:return IS;case 35668:case 35672:return PS;case 35669:case 35673:return FS;case 5125:return DS;case 36294:return LS;case 36295:return US;case 36296:return NS;case 35678:case 36198:case 36298:case 36306:case 35682:return kS;case 35679:case 36299:case 36307:return OS;case 35680:case 36300:case 36308:case 36293:return BS;case 36289:case 36303:case 36311:case 36292:return zS}}function HS(i,e){i.uniform1fv(this.addr,e)}function GS(i,e){let t=Gs(e,this.size,2);i.uniform2fv(this.addr,t)}function WS(i,e){let t=Gs(e,this.size,3);i.uniform3fv(this.addr,t)}function $S(i,e){let t=Gs(e,this.size,4);i.uniform4fv(this.addr,t)}function XS(i,e){let t=Gs(e,this.size,4);i.uniformMatrix2fv(this.addr,!1,t)}function jS(i,e){let t=Gs(e,this.size,9);i.uniformMatrix3fv(this.addr,!1,t)}function qS(i,e){let t=Gs(e,this.size,16);i.uniformMatrix4fv(this.addr,!1,t)}function YS(i,e){i.uniform1iv(this.addr,e)}function ZS(i,e){i.uniform2iv(this.addr,e)}function JS(i,e){i.uniform3iv(this.addr,e)}function KS(i,e){i.uniform4iv(this.addr,e)}function QS(i,e){i.uniform1uiv(this.addr,e)}function e1(i,e){i.uniform2uiv(this.addr,e)}function t1(i,e){i.uniform3uiv(this.addr,e)}function n1(i,e){i.uniform4uiv(this.addr,e)}function i1(i,e,t){let n=this.cache,r=e.length,a=zl(t,r);sn(n,a)||(i.uniform1iv(this.addr,a),an(n,a));for(let c=0;c!==r;++c)t.setTexture2D(e[c]||Pm,a[c])}function r1(i,e,t){let n=this.cache,r=e.length,a=zl(t,r);sn(n,a)||(i.uniform1iv(this.addr,a),an(n,a));for(let c=0;c!==r;++c)t.setTexture3D(e[c]||Dm,a[c])}function s1(i,e,t){let n=this.cache,r=e.length,a=zl(t,r);sn(n,a)||(i.uniform1iv(this.addr,a),an(n,a));for(let c=0;c!==r;++c)t.setTextureCube(e[c]||Lm,a[c])}function a1(i,e,t){let n=this.cache,r=e.length,a=zl(t,r);sn(n,a)||(i.uniform1iv(this.addr,a),an(n,a));for(let c=0;c!==r;++c)t.setTexture2DArray(e[c]||Fm,a[c])}function o1(i){switch(i){case 5126:return HS;case 35664:return GS;case 35665:return WS;case 35666:return $S;case 35674:return XS;case 35675:return jS;case 35676:return qS;case 5124:case 35670:return YS;case 35667:case 35671:return ZS;case 35668:case 35672:return JS;case 35669:case 35673:return KS;case 5125:return QS;case 36294:return e1;case 36295:return t1;case 36296:return n1;case 35678:case 36198:case 36298:case 36306:case 35682:return i1;case 35679:case 36299:case 36307:return r1;case 35680:case 36300:case 36308:case 36293:return s1;case 36289:case 36303:case 36311:case 36292:return a1}}var rd=class{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.type=t.type,this.setValue=VS(t.type)}},sd=class{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.type=t.type,this.size=t.size,this.setValue=o1(t.type)}},ad=class{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,t,n){let r=this.seq;for(let a=0,c=r.length;a!==c;++a){let l=r[a];l.setValue(e,t[l.id],n)}}},id=/(\w+)(\])?(\[|\.)?/g;function vm(i,e){i.seq.push(e),i.map[e.id]=e}function c1(i,e,t){let n=i.name,r=n.length;for(id.lastIndex=0;;){let a=id.exec(n),c=id.lastIndex,l=a[1],u=a[2]==="]",d=a[3];if(u&&(l=l|0),d===void 0||d==="["&&c+2===r){vm(t,d===void 0?new rd(l,i,e):new sd(l,i,e));break}else{let m=t.map[l];m===void 0&&(m=new ad(l),vm(t,m)),t=m}}}var Hs=class{constructor(e,t){this.seq=[],this.map={};let n=e.getProgramParameter(t,e.ACTIVE_UNIFORMS);for(let r=0;r<n;++r){let a=e.getActiveUniform(t,r),c=e.getUniformLocation(t,a.name);c1(a,c,this)}}setValue(e,t,n,r){let a=this.map[t];a!==void 0&&a.setValue(e,n,r)}setOptional(e,t,n){let r=t[n];r!==void 0&&this.setValue(e,n,r)}static upload(e,t,n,r){for(let a=0,c=t.length;a!==c;++a){let l=t[a],u=n[l.id];u.needsUpdate!==!1&&l.setValue(e,u.value,r)}}static seqWithValue(e,t){let n=[];for(let r=0,a=e.length;r!==a;++r){let c=e[r];c.id in t&&n.push(c)}return n}};function ym(i,e,t){let n=i.createShader(e);return i.shaderSource(n,t),i.compileShader(n),n}var l1=37297,h1=0;function u1(i,e){let t=i.split(`
`),n=[],r=Math.max(e-6,0),a=Math.min(e+6,t.length);for(let c=r;c<a;c++){let l=c+1;n.push(`${l===e?">":" "} ${l}: ${t[c]}`)}return n.join(`
`)}var bm=new mt;function d1(i){It._getMatrix(bm,It.workingColorSpace,i);let e=`mat3( ${bm.elements.map(t=>t.toFixed(4))} )`;switch(It.getTransfer(i)){case Ea:return[e,"LinearTransferOETF"];case kt:return[e,"sRGBTransferOETF"];default:return lt("WebGLProgram: Unsupported color space: ",i),[e,"LinearTransferOETF"]}}function wm(i,e,t){let n=i.getShaderParameter(e,i.COMPILE_STATUS),a=(i.getShaderInfoLog(e)||"").trim();if(n&&a==="")return"";let c=/ERROR: 0:(\d+)/.exec(a);if(c){let l=parseInt(c[1]);return t.toUpperCase()+`

`+a+`

`+u1(i.getShaderSource(e),l)}else return a}function f1(i,e){let t=d1(e);return[`vec4 ${i}( vec4 value ) {`,`	return ${t[1]}( vec4( value.rgb * ${t[0]}, value.a ) );`,"}"].join(`
`)}function p1(i,e){let t;switch(e){case Bp:t="Linear";break;case zp:t="Reinhard";break;case Vp:t="Cineon";break;case Hp:t="ACESFilmic";break;case Wp:t="AgX";break;case $p:t="Neutral";break;case Gp:t="Custom";break;default:lt("WebGLProgram: Unsupported toneMapping:",e),t="Linear"}return"vec3 "+i+"( vec3 color ) { return "+t+"ToneMapping( color ); }"}var Nl=new ee;function m1(){It.getLuminanceCoefficients(Nl);let i=Nl.x.toFixed(4),e=Nl.y.toFixed(4),t=Nl.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${i}, ${e}, ${t} );`,"	return dot( weights, rgb );","}"].join(`
`)}function g1(i){return[i.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",i.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(no).join(`
`)}function x1(i){let e=[];for(let t in i){let n=i[t];n!==!1&&e.push("#define "+t+" "+n)}return e.join(`
`)}function _1(i,e){let t={},n=i.getProgramParameter(e,i.ACTIVE_ATTRIBUTES);for(let r=0;r<n;r++){let a=i.getActiveAttrib(e,r),c=a.name,l=1;a.type===i.FLOAT_MAT2&&(l=2),a.type===i.FLOAT_MAT3&&(l=3),a.type===i.FLOAT_MAT4&&(l=4),t[c]={type:a.type,location:i.getAttribLocation(e,c),locationSize:l}}return t}function no(i){return i!==""}function Mm(i,e){let t=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return i.replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,t).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function Sm(i,e){return i.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}var v1=/^[ \t]*#include +<([\w\d./]+)>/gm;function od(i){return i.replace(v1,b1)}var y1=new Map;function b1(i,e){let t=_t[e];if(t===void 0){let n=y1.get(e);if(n!==void 0)t=_t[n],lt('WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',e,n);else throw new Error("Can not resolve #include <"+e+">")}return od(t)}var w1=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function Em(i){return i.replace(w1,M1)}function M1(i,e,t,n){let r="";for(let a=parseInt(e);a<parseInt(t);a++)r+=n.replace(/\[\s*i\s*\]/g,"[ "+a+" ]").replace(/UNROLLED_LOOP_INDEX/g,a);return r}function Tm(i){let e=`precision ${i.precision} float;
	precision ${i.precision} int;
	precision ${i.precision} sampler2D;
	precision ${i.precision} samplerCube;
	precision ${i.precision} sampler3D;
	precision ${i.precision} sampler2DArray;
	precision ${i.precision} sampler2DShadow;
	precision ${i.precision} samplerCubeShadow;
	precision ${i.precision} sampler2DArrayShadow;
	precision ${i.precision} isampler2D;
	precision ${i.precision} isampler3D;
	precision ${i.precision} isamplerCube;
	precision ${i.precision} isampler2DArray;
	precision ${i.precision} usampler2D;
	precision ${i.precision} usampler3D;
	precision ${i.precision} usamplerCube;
	precision ${i.precision} usampler2DArray;
	`;return i.precision==="highp"?e+=`
#define HIGH_PRECISION`:i.precision==="mediump"?e+=`
#define MEDIUM_PRECISION`:i.precision==="lowp"&&(e+=`
#define LOW_PRECISION`),e}function S1(i){let e="SHADOWMAP_TYPE_BASIC";return i.shadowMapType===Pu?e="SHADOWMAP_TYPE_PCF":i.shadowMapType===Gc?e="SHADOWMAP_TYPE_PCF_SOFT":i.shadowMapType===Mi&&(e="SHADOWMAP_TYPE_VSM"),e}function E1(i){let e="ENVMAP_TYPE_CUBE";if(i.envMap)switch(i.envMapMode){case Br:case zr:e="ENVMAP_TYPE_CUBE";break;case qa:e="ENVMAP_TYPE_CUBE_UV";break}return e}function T1(i){let e="ENVMAP_MODE_REFLECTION";if(i.envMap)switch(i.envMapMode){case zr:e="ENVMAP_MODE_REFRACTION";break}return e}function A1(i){let e="ENVMAP_BLENDING_NONE";if(i.envMap)switch(i.combine){case Uu:e="ENVMAP_BLENDING_MULTIPLY";break;case kp:e="ENVMAP_BLENDING_MIX";break;case Op:e="ENVMAP_BLENDING_ADD";break}return e}function C1(i){let e=i.envMapCubeUVHeight;if(e===null)return null;let t=Math.log2(e)-2,n=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,t),112)),texelHeight:n,maxMip:t}}function R1(i,e,t,n){let r=i.getContext(),a=t.defines,c=t.vertexShader,l=t.fragmentShader,u=S1(t),d=E1(t),p=T1(t),m=A1(t),x=C1(t),_=g1(t),b=x1(a),E=r.createProgram(),w,v,D=t.glslVersion?"#version "+t.glslVersion+`
`:"";t.isRawShaderMaterial?(w=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,b].filter(no).join(`
`),w.length>0&&(w+=`
`),v=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,b].filter(no).join(`
`),v.length>0&&(v+=`
`)):(w=[Tm(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,b,t.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",t.batching?"#define USE_BATCHING":"",t.batchingColor?"#define USE_BATCHING_COLOR":"",t.instancing?"#define USE_INSTANCING":"",t.instancingColor?"#define USE_INSTANCING_COLOR":"",t.instancingMorph?"#define USE_INSTANCING_MORPH":"",t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+p:"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.displacementMap?"#define USE_DISPLACEMENTMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.mapUv?"#define MAP_UV "+t.mapUv:"",t.alphaMapUv?"#define ALPHAMAP_UV "+t.alphaMapUv:"",t.lightMapUv?"#define LIGHTMAP_UV "+t.lightMapUv:"",t.aoMapUv?"#define AOMAP_UV "+t.aoMapUv:"",t.emissiveMapUv?"#define EMISSIVEMAP_UV "+t.emissiveMapUv:"",t.bumpMapUv?"#define BUMPMAP_UV "+t.bumpMapUv:"",t.normalMapUv?"#define NORMALMAP_UV "+t.normalMapUv:"",t.displacementMapUv?"#define DISPLACEMENTMAP_UV "+t.displacementMapUv:"",t.metalnessMapUv?"#define METALNESSMAP_UV "+t.metalnessMapUv:"",t.roughnessMapUv?"#define ROUGHNESSMAP_UV "+t.roughnessMapUv:"",t.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+t.anisotropyMapUv:"",t.clearcoatMapUv?"#define CLEARCOATMAP_UV "+t.clearcoatMapUv:"",t.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+t.clearcoatNormalMapUv:"",t.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+t.clearcoatRoughnessMapUv:"",t.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+t.iridescenceMapUv:"",t.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+t.iridescenceThicknessMapUv:"",t.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+t.sheenColorMapUv:"",t.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+t.sheenRoughnessMapUv:"",t.specularMapUv?"#define SPECULARMAP_UV "+t.specularMapUv:"",t.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+t.specularColorMapUv:"",t.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+t.specularIntensityMapUv:"",t.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+t.transmissionMapUv:"",t.thicknessMapUv?"#define THICKNESSMAP_UV "+t.thicknessMapUv:"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.flatShading?"#define FLAT_SHADED":"",t.skinning?"#define USE_SKINNING":"",t.morphTargets?"#define USE_MORPHTARGETS":"",t.morphNormals&&t.flatShading===!1?"#define USE_MORPHNORMALS":"",t.morphColors?"#define USE_MORPHCOLORS":"",t.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+t.morphTextureStride:"",t.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+t.morphTargetsCount:"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+u:"",t.sizeAttenuation?"#define USE_SIZEATTENUATION":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",t.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(no).join(`
`),v=[Tm(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,b,t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",t.map?"#define USE_MAP":"",t.matcap?"#define USE_MATCAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+d:"",t.envMap?"#define "+p:"",t.envMap?"#define "+m:"",x?"#define CUBEUV_TEXEL_WIDTH "+x.texelWidth:"",x?"#define CUBEUV_TEXEL_HEIGHT "+x.texelHeight:"",x?"#define CUBEUV_MAX_MIP "+x.maxMip+".0":"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoat?"#define USE_CLEARCOAT":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.dispersion?"#define USE_DISPERSION":"",t.iridescence?"#define USE_IRIDESCENCE":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaTest?"#define USE_ALPHATEST":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.sheen?"#define USE_SHEEN":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors||t.instancingColor||t.batchingColor?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.gradientMap?"#define USE_GRADIENTMAP":"",t.flatShading?"#define FLAT_SHADED":"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+u:"",t.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",t.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",t.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",t.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",t.toneMapping!==Gi?"#define TONE_MAPPING":"",t.toneMapping!==Gi?_t.tonemapping_pars_fragment:"",t.toneMapping!==Gi?p1("toneMapping",t.toneMapping):"",t.dithering?"#define DITHERING":"",t.opaque?"#define OPAQUE":"",_t.colorspace_pars_fragment,f1("linearToOutputTexel",t.outputColorSpace),m1(),t.useDepthPacking?"#define DEPTH_PACKING "+t.depthPacking:"",`
`].filter(no).join(`
`)),c=od(c),c=Mm(c,t),c=Sm(c,t),l=od(l),l=Mm(l,t),l=Sm(l,t),c=Em(c),l=Em(l),t.isRawShaderMaterial!==!0&&(D=`#version 300 es
`,w=[_,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+w,v=["#define varying in",t.glslVersion===Xu?"":"layout(location = 0) out highp vec4 pc_fragColor;",t.glslVersion===Xu?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+v);let L=D+w+c,N=D+v+l,z=ym(r,r.VERTEX_SHADER,L),P=ym(r,r.FRAGMENT_SHADER,N);r.attachShader(E,z),r.attachShader(E,P),t.index0AttributeName!==void 0?r.bindAttribLocation(E,0,t.index0AttributeName):t.morphTargets===!0&&r.bindAttribLocation(E,0,"position"),r.linkProgram(E);function T(W){if(i.debug.checkShaderErrors){let j=r.getProgramInfoLog(E)||"",J=r.getShaderInfoLog(z)||"",Y=r.getShaderInfoLog(P)||"",ce=j.trim(),H=J.trim(),Me=Y.trim(),ie=!0,we=!0;if(r.getProgramParameter(E,r.LINK_STATUS)===!1)if(ie=!1,typeof i.debug.onShaderError=="function")i.debug.onShaderError(r,E,z,P);else{let X=wm(r,z,"vertex"),Be=wm(r,P,"fragment");yt("THREE.WebGLProgram: Shader Error "+r.getError()+" - VALIDATE_STATUS "+r.getProgramParameter(E,r.VALIDATE_STATUS)+`

Material Name: `+W.name+`
Material Type: `+W.type+`

Program Info Log: `+ce+`
`+X+`
`+Be)}else ce!==""?lt("WebGLProgram: Program Info Log:",ce):(H===""||Me==="")&&(we=!1);we&&(W.diagnostics={runnable:ie,programLog:ce,vertexShader:{log:H,prefix:w},fragmentShader:{log:Me,prefix:v}})}r.deleteShader(z),r.deleteShader(P),B=new Hs(r,E),I=_1(r,E)}let B;this.getUniforms=function(){return B===void 0&&T(this),B};let I;this.getAttributes=function(){return I===void 0&&T(this),I};let R=t.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return R===!1&&(R=r.getProgramParameter(E,l1)),R},this.destroy=function(){n.releaseStatesOfProgram(this),r.deleteProgram(E),this.program=void 0},this.type=t.shaderType,this.name=t.shaderName,this.id=h1++,this.cacheKey=e,this.usedTimes=1,this.program=E,this.vertexShader=z,this.fragmentShader=P,this}var I1=0,cd=class{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e){let t=e.vertexShader,n=e.fragmentShader,r=this._getShaderStage(t),a=this._getShaderStage(n),c=this._getShaderCacheForMaterial(e);return c.has(r)===!1&&(c.add(r),r.usedTimes++),c.has(a)===!1&&(c.add(a),a.usedTimes++),this}remove(e){let t=this.materialCache.get(e);for(let n of t)n.usedTimes--,n.usedTimes===0&&this.shaderCache.delete(n.code);return this.materialCache.delete(e),this}getVertexShaderID(e){return this._getShaderStage(e.vertexShader).id}getFragmentShaderID(e){return this._getShaderStage(e.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){let t=this.materialCache,n=t.get(e);return n===void 0&&(n=new Set,t.set(e,n)),n}_getShaderStage(e){let t=this.shaderCache,n=t.get(e);return n===void 0&&(n=new ld(e),t.set(e,n)),n}},ld=class{constructor(e){this.id=I1++,this.code=e,this.usedTimes=0}};function P1(i,e,t,n,r,a,c){let l=new Ds,u=new cd,d=new Set,p=[],m=r.logarithmicDepthBuffer,x=r.vertexTextures,_=r.precision,b={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function E(I){return d.add(I),I===0?"uv":`uv${I}`}function w(I,R,W,j,J){let Y=j.fog,ce=J.geometry,H=I.isMeshStandardMaterial?j.environment:null,Me=(I.isMeshStandardMaterial?t:e).get(I.envMap||H),ie=Me&&Me.mapping===qa?Me.image.height:null,we=b[I.type];I.precision!==null&&(_=r.getMaxPrecision(I.precision),_!==I.precision&&lt("WebGLProgram.getParameters:",I.precision,"not supported, using",_,"instead."));let X=ce.morphAttributes.position||ce.morphAttributes.normal||ce.morphAttributes.color,Be=X!==void 0?X.length:0,ht=0;ce.morphAttributes.position!==void 0&&(ht=1),ce.morphAttributes.normal!==void 0&&(ht=2),ce.morphAttributes.color!==void 0&&(ht=3);let At,Ut,Ct,re;if(we){let Ft=Ai[we];At=Ft.vertexShader,Ut=Ft.fragmentShader}else At=I.vertexShader,Ut=I.fragmentShader,u.update(I),Ct=u.getVertexShaderID(I),re=u.getFragmentShaderID(I);let pe=i.getRenderTarget(),ke=i.state.buffers.depth.getReversed(),dt=J.isInstancedMesh===!0,Ze=J.isBatchedMesh===!0,vt=!!I.map,Qt=!!I.matcap,gt=!!Me,Ot=!!I.aoMap,V=!!I.lightMap,je=!!I.bumpMap,tt=!!I.normalMap,bt=!!I.displacementMap,Ue=!!I.emissiveMap,Te=!!I.metalnessMap,_e=!!I.roughnessMap,ot=I.anisotropy>0,O=I.clearcoat>0,A=I.dispersion>0,Q=I.iridescence>0,le=I.sheen>0,de=I.transmission>0,se=ot&&!!I.anisotropyMap,Ye=O&&!!I.clearcoatMap,Ie=O&&!!I.clearcoatNormalMap,Xe=O&&!!I.clearcoatRoughnessMap,Ve=Q&&!!I.iridescenceMap,fe=Q&&!!I.iridescenceThicknessMap,Se=le&&!!I.sheenColorMap,Qe=le&&!!I.sheenRoughnessMap,Je=!!I.specularMap,Ee=!!I.specularColorMap,$e=!!I.specularIntensityMap,G=de&&!!I.transmissionMap,Pe=de&&!!I.thicknessMap,Ce=!!I.gradientMap,Re=!!I.alphaMap,be=I.alphaTest>0,ue=!!I.alphaHash,He=!!I.extensions,ut=Gi;I.toneMapped&&(pe===null||pe.isXRRenderTarget===!0)&&(ut=i.toneMapping);let zt={shaderID:we,shaderType:I.type,shaderName:I.name,vertexShader:At,fragmentShader:Ut,defines:I.defines,customVertexShaderID:Ct,customFragmentShaderID:re,isRawShaderMaterial:I.isRawShaderMaterial===!0,glslVersion:I.glslVersion,precision:_,batching:Ze,batchingColor:Ze&&J._colorsTexture!==null,instancing:dt,instancingColor:dt&&J.instanceColor!==null,instancingMorph:dt&&J.morphTexture!==null,supportsVertexTextures:x,outputColorSpace:pe===null?i.outputColorSpace:pe.isXRRenderTarget===!0?pe.texture.colorSpace:Lr,alphaToCoverage:!!I.alphaToCoverage,map:vt,matcap:Qt,envMap:gt,envMapMode:gt&&Me.mapping,envMapCubeUVHeight:ie,aoMap:Ot,lightMap:V,bumpMap:je,normalMap:tt,displacementMap:x&&bt,emissiveMap:Ue,normalMapObjectSpace:tt&&I.normalMapType===Yp,normalMapTangentSpace:tt&&I.normalMapType===Wu,metalnessMap:Te,roughnessMap:_e,anisotropy:ot,anisotropyMap:se,clearcoat:O,clearcoatMap:Ye,clearcoatNormalMap:Ie,clearcoatRoughnessMap:Xe,dispersion:A,iridescence:Q,iridescenceMap:Ve,iridescenceThicknessMap:fe,sheen:le,sheenColorMap:Se,sheenRoughnessMap:Qe,specularMap:Je,specularColorMap:Ee,specularIntensityMap:$e,transmission:de,transmissionMap:G,thicknessMap:Pe,gradientMap:Ce,opaque:I.transparent===!1&&I.blending===Fr&&I.alphaToCoverage===!1,alphaMap:Re,alphaTest:be,alphaHash:ue,combine:I.combine,mapUv:vt&&E(I.map.channel),aoMapUv:Ot&&E(I.aoMap.channel),lightMapUv:V&&E(I.lightMap.channel),bumpMapUv:je&&E(I.bumpMap.channel),normalMapUv:tt&&E(I.normalMap.channel),displacementMapUv:bt&&E(I.displacementMap.channel),emissiveMapUv:Ue&&E(I.emissiveMap.channel),metalnessMapUv:Te&&E(I.metalnessMap.channel),roughnessMapUv:_e&&E(I.roughnessMap.channel),anisotropyMapUv:se&&E(I.anisotropyMap.channel),clearcoatMapUv:Ye&&E(I.clearcoatMap.channel),clearcoatNormalMapUv:Ie&&E(I.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:Xe&&E(I.clearcoatRoughnessMap.channel),iridescenceMapUv:Ve&&E(I.iridescenceMap.channel),iridescenceThicknessMapUv:fe&&E(I.iridescenceThicknessMap.channel),sheenColorMapUv:Se&&E(I.sheenColorMap.channel),sheenRoughnessMapUv:Qe&&E(I.sheenRoughnessMap.channel),specularMapUv:Je&&E(I.specularMap.channel),specularColorMapUv:Ee&&E(I.specularColorMap.channel),specularIntensityMapUv:$e&&E(I.specularIntensityMap.channel),transmissionMapUv:G&&E(I.transmissionMap.channel),thicknessMapUv:Pe&&E(I.thicknessMap.channel),alphaMapUv:Re&&E(I.alphaMap.channel),vertexTangents:!!ce.attributes.tangent&&(tt||ot),vertexColors:I.vertexColors,vertexAlphas:I.vertexColors===!0&&!!ce.attributes.color&&ce.attributes.color.itemSize===4,pointsUvs:J.isPoints===!0&&!!ce.attributes.uv&&(vt||Re),fog:!!Y,useFog:I.fog===!0,fogExp2:!!Y&&Y.isFogExp2,flatShading:I.flatShading===!0&&I.wireframe===!1,sizeAttenuation:I.sizeAttenuation===!0,logarithmicDepthBuffer:m,reversedDepthBuffer:ke,skinning:J.isSkinnedMesh===!0,morphTargets:ce.morphAttributes.position!==void 0,morphNormals:ce.morphAttributes.normal!==void 0,morphColors:ce.morphAttributes.color!==void 0,morphTargetsCount:Be,morphTextureStride:ht,numDirLights:R.directional.length,numPointLights:R.point.length,numSpotLights:R.spot.length,numSpotLightMaps:R.spotLightMap.length,numRectAreaLights:R.rectArea.length,numHemiLights:R.hemi.length,numDirLightShadows:R.directionalShadowMap.length,numPointLightShadows:R.pointShadowMap.length,numSpotLightShadows:R.spotShadowMap.length,numSpotLightShadowsWithMaps:R.numSpotLightShadowsWithMaps,numLightProbes:R.numLightProbes,numClippingPlanes:c.numPlanes,numClipIntersection:c.numIntersection,dithering:I.dithering,shadowMapEnabled:i.shadowMap.enabled&&W.length>0,shadowMapType:i.shadowMap.type,toneMapping:ut,decodeVideoTexture:vt&&I.map.isVideoTexture===!0&&It.getTransfer(I.map.colorSpace)===kt,decodeVideoTextureEmissive:Ue&&I.emissiveMap.isVideoTexture===!0&&It.getTransfer(I.emissiveMap.colorSpace)===kt,premultipliedAlpha:I.premultipliedAlpha,doubleSided:I.side===Si,flipSided:I.side===Tn,useDepthPacking:I.depthPacking>=0,depthPacking:I.depthPacking||0,index0AttributeName:I.index0AttributeName,extensionClipCullDistance:He&&I.extensions.clipCullDistance===!0&&n.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(He&&I.extensions.multiDraw===!0||Ze)&&n.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:n.has("KHR_parallel_shader_compile"),customProgramCacheKey:I.customProgramCacheKey()};return zt.vertexUv1s=d.has(1),zt.vertexUv2s=d.has(2),zt.vertexUv3s=d.has(3),d.clear(),zt}function v(I){let R=[];if(I.shaderID?R.push(I.shaderID):(R.push(I.customVertexShaderID),R.push(I.customFragmentShaderID)),I.defines!==void 0)for(let W in I.defines)R.push(W),R.push(I.defines[W]);return I.isRawShaderMaterial===!1&&(D(R,I),L(R,I),R.push(i.outputColorSpace)),R.push(I.customProgramCacheKey),R.join()}function D(I,R){I.push(R.precision),I.push(R.outputColorSpace),I.push(R.envMapMode),I.push(R.envMapCubeUVHeight),I.push(R.mapUv),I.push(R.alphaMapUv),I.push(R.lightMapUv),I.push(R.aoMapUv),I.push(R.bumpMapUv),I.push(R.normalMapUv),I.push(R.displacementMapUv),I.push(R.emissiveMapUv),I.push(R.metalnessMapUv),I.push(R.roughnessMapUv),I.push(R.anisotropyMapUv),I.push(R.clearcoatMapUv),I.push(R.clearcoatNormalMapUv),I.push(R.clearcoatRoughnessMapUv),I.push(R.iridescenceMapUv),I.push(R.iridescenceThicknessMapUv),I.push(R.sheenColorMapUv),I.push(R.sheenRoughnessMapUv),I.push(R.specularMapUv),I.push(R.specularColorMapUv),I.push(R.specularIntensityMapUv),I.push(R.transmissionMapUv),I.push(R.thicknessMapUv),I.push(R.combine),I.push(R.fogExp2),I.push(R.sizeAttenuation),I.push(R.morphTargetsCount),I.push(R.morphAttributeCount),I.push(R.numDirLights),I.push(R.numPointLights),I.push(R.numSpotLights),I.push(R.numSpotLightMaps),I.push(R.numHemiLights),I.push(R.numRectAreaLights),I.push(R.numDirLightShadows),I.push(R.numPointLightShadows),I.push(R.numSpotLightShadows),I.push(R.numSpotLightShadowsWithMaps),I.push(R.numLightProbes),I.push(R.shadowMapType),I.push(R.toneMapping),I.push(R.numClippingPlanes),I.push(R.numClipIntersection),I.push(R.depthPacking)}function L(I,R){l.disableAll(),R.supportsVertexTextures&&l.enable(0),R.instancing&&l.enable(1),R.instancingColor&&l.enable(2),R.instancingMorph&&l.enable(3),R.matcap&&l.enable(4),R.envMap&&l.enable(5),R.normalMapObjectSpace&&l.enable(6),R.normalMapTangentSpace&&l.enable(7),R.clearcoat&&l.enable(8),R.iridescence&&l.enable(9),R.alphaTest&&l.enable(10),R.vertexColors&&l.enable(11),R.vertexAlphas&&l.enable(12),R.vertexUv1s&&l.enable(13),R.vertexUv2s&&l.enable(14),R.vertexUv3s&&l.enable(15),R.vertexTangents&&l.enable(16),R.anisotropy&&l.enable(17),R.alphaHash&&l.enable(18),R.batching&&l.enable(19),R.dispersion&&l.enable(20),R.batchingColor&&l.enable(21),R.gradientMap&&l.enable(22),I.push(l.mask),l.disableAll(),R.fog&&l.enable(0),R.useFog&&l.enable(1),R.flatShading&&l.enable(2),R.logarithmicDepthBuffer&&l.enable(3),R.reversedDepthBuffer&&l.enable(4),R.skinning&&l.enable(5),R.morphTargets&&l.enable(6),R.morphNormals&&l.enable(7),R.morphColors&&l.enable(8),R.premultipliedAlpha&&l.enable(9),R.shadowMapEnabled&&l.enable(10),R.doubleSided&&l.enable(11),R.flipSided&&l.enable(12),R.useDepthPacking&&l.enable(13),R.dithering&&l.enable(14),R.transmission&&l.enable(15),R.sheen&&l.enable(16),R.opaque&&l.enable(17),R.pointsUvs&&l.enable(18),R.decodeVideoTexture&&l.enable(19),R.decodeVideoTextureEmissive&&l.enable(20),R.alphaToCoverage&&l.enable(21),I.push(l.mask)}function N(I){let R=b[I.type],W;if(R){let j=Ai[R];W=am.clone(j.uniforms)}else W=I.uniforms;return W}function z(I,R){let W;for(let j=0,J=p.length;j<J;j++){let Y=p[j];if(Y.cacheKey===R){W=Y,++W.usedTimes;break}}return W===void 0&&(W=new R1(i,R,I,a),p.push(W)),W}function P(I){if(--I.usedTimes===0){let R=p.indexOf(I);p[R]=p[p.length-1],p.pop(),I.destroy()}}function T(I){u.remove(I)}function B(){u.dispose()}return{getParameters:w,getProgramCacheKey:v,getUniforms:N,acquireProgram:z,releaseProgram:P,releaseShaderCache:T,programs:p,dispose:B}}function F1(){let i=new WeakMap;function e(c){return i.has(c)}function t(c){let l=i.get(c);return l===void 0&&(l={},i.set(c,l)),l}function n(c){i.delete(c)}function r(c,l,u){i.get(c)[l]=u}function a(){i=new WeakMap}return{has:e,get:t,remove:n,update:r,dispose:a}}function D1(i,e){return i.groupOrder!==e.groupOrder?i.groupOrder-e.groupOrder:i.renderOrder!==e.renderOrder?i.renderOrder-e.renderOrder:i.material.id!==e.material.id?i.material.id-e.material.id:i.z!==e.z?i.z-e.z:i.id-e.id}function Am(i,e){return i.groupOrder!==e.groupOrder?i.groupOrder-e.groupOrder:i.renderOrder!==e.renderOrder?i.renderOrder-e.renderOrder:i.z!==e.z?e.z-i.z:i.id-e.id}function Cm(){let i=[],e=0,t=[],n=[],r=[];function a(){e=0,t.length=0,n.length=0,r.length=0}function c(m,x,_,b,E,w){let v=i[e];return v===void 0?(v={id:m.id,object:m,geometry:x,material:_,groupOrder:b,renderOrder:m.renderOrder,z:E,group:w},i[e]=v):(v.id=m.id,v.object=m,v.geometry=x,v.material=_,v.groupOrder=b,v.renderOrder=m.renderOrder,v.z=E,v.group=w),e++,v}function l(m,x,_,b,E,w){let v=c(m,x,_,b,E,w);_.transmission>0?n.push(v):_.transparent===!0?r.push(v):t.push(v)}function u(m,x,_,b,E,w){let v=c(m,x,_,b,E,w);_.transmission>0?n.unshift(v):_.transparent===!0?r.unshift(v):t.unshift(v)}function d(m,x){t.length>1&&t.sort(m||D1),n.length>1&&n.sort(x||Am),r.length>1&&r.sort(x||Am)}function p(){for(let m=e,x=i.length;m<x;m++){let _=i[m];if(_.id===null)break;_.id=null,_.object=null,_.geometry=null,_.material=null,_.group=null}}return{opaque:t,transmissive:n,transparent:r,init:a,push:l,unshift:u,finish:p,sort:d}}function L1(){let i=new WeakMap;function e(n,r){let a=i.get(n),c;return a===void 0?(c=new Cm,i.set(n,[c])):r>=a.length?(c=new Cm,a.push(c)):c=a[r],c}function t(){i=new WeakMap}return{get:e,dispose:t}}function U1(){let i={};return{get:function(e){if(i[e.id]!==void 0)return i[e.id];let t;switch(e.type){case"DirectionalLight":t={direction:new ee,color:new ft};break;case"SpotLight":t={position:new ee,direction:new ee,color:new ft,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":t={position:new ee,color:new ft,distance:0,decay:0};break;case"HemisphereLight":t={direction:new ee,skyColor:new ft,groundColor:new ft};break;case"RectAreaLight":t={color:new ft,position:new ee,halfWidth:new ee,halfHeight:new ee};break}return i[e.id]=t,t}}}function N1(){let i={};return{get:function(e){if(i[e.id]!==void 0)return i[e.id];let t;switch(e.type){case"DirectionalLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Tt};break;case"SpotLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Tt};break;case"PointLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Tt,shadowCameraNear:1,shadowCameraFar:1e3};break}return i[e.id]=t,t}}}var k1=0;function O1(i,e){return(e.castShadow?2:0)-(i.castShadow?2:0)+(e.map?1:0)-(i.map?1:0)}function B1(i){let e=new U1,t=N1(),n={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let d=0;d<9;d++)n.probe.push(new ee);let r=new ee,a=new Zt,c=new Zt;function l(d){let p=0,m=0,x=0;for(let I=0;I<9;I++)n.probe[I].set(0,0,0);let _=0,b=0,E=0,w=0,v=0,D=0,L=0,N=0,z=0,P=0,T=0;d.sort(O1);for(let I=0,R=d.length;I<R;I++){let W=d[I],j=W.color,J=W.intensity,Y=W.distance,ce=W.shadow&&W.shadow.map?W.shadow.map.texture:null;if(W.isAmbientLight)p+=j.r*J,m+=j.g*J,x+=j.b*J;else if(W.isLightProbe){for(let H=0;H<9;H++)n.probe[H].addScaledVector(W.sh.coefficients[H],J);T++}else if(W.isDirectionalLight){let H=e.get(W);if(H.color.copy(W.color).multiplyScalar(W.intensity),W.castShadow){let Me=W.shadow,ie=t.get(W);ie.shadowIntensity=Me.intensity,ie.shadowBias=Me.bias,ie.shadowNormalBias=Me.normalBias,ie.shadowRadius=Me.radius,ie.shadowMapSize=Me.mapSize,n.directionalShadow[_]=ie,n.directionalShadowMap[_]=ce,n.directionalShadowMatrix[_]=W.shadow.matrix,D++}n.directional[_]=H,_++}else if(W.isSpotLight){let H=e.get(W);H.position.setFromMatrixPosition(W.matrixWorld),H.color.copy(j).multiplyScalar(J),H.distance=Y,H.coneCos=Math.cos(W.angle),H.penumbraCos=Math.cos(W.angle*(1-W.penumbra)),H.decay=W.decay,n.spot[E]=H;let Me=W.shadow;if(W.map&&(n.spotLightMap[z]=W.map,z++,Me.updateMatrices(W),W.castShadow&&P++),n.spotLightMatrix[E]=Me.matrix,W.castShadow){let ie=t.get(W);ie.shadowIntensity=Me.intensity,ie.shadowBias=Me.bias,ie.shadowNormalBias=Me.normalBias,ie.shadowRadius=Me.radius,ie.shadowMapSize=Me.mapSize,n.spotShadow[E]=ie,n.spotShadowMap[E]=ce,N++}E++}else if(W.isRectAreaLight){let H=e.get(W);H.color.copy(j).multiplyScalar(J),H.halfWidth.set(W.width*.5,0,0),H.halfHeight.set(0,W.height*.5,0),n.rectArea[w]=H,w++}else if(W.isPointLight){let H=e.get(W);if(H.color.copy(W.color).multiplyScalar(W.intensity),H.distance=W.distance,H.decay=W.decay,W.castShadow){let Me=W.shadow,ie=t.get(W);ie.shadowIntensity=Me.intensity,ie.shadowBias=Me.bias,ie.shadowNormalBias=Me.normalBias,ie.shadowRadius=Me.radius,ie.shadowMapSize=Me.mapSize,ie.shadowCameraNear=Me.camera.near,ie.shadowCameraFar=Me.camera.far,n.pointShadow[b]=ie,n.pointShadowMap[b]=ce,n.pointShadowMatrix[b]=W.shadow.matrix,L++}n.point[b]=H,b++}else if(W.isHemisphereLight){let H=e.get(W);H.skyColor.copy(W.color).multiplyScalar(J),H.groundColor.copy(W.groundColor).multiplyScalar(J),n.hemi[v]=H,v++}}w>0&&(i.has("OES_texture_float_linear")===!0?(n.rectAreaLTC1=Fe.LTC_FLOAT_1,n.rectAreaLTC2=Fe.LTC_FLOAT_2):(n.rectAreaLTC1=Fe.LTC_HALF_1,n.rectAreaLTC2=Fe.LTC_HALF_2)),n.ambient[0]=p,n.ambient[1]=m,n.ambient[2]=x;let B=n.hash;(B.directionalLength!==_||B.pointLength!==b||B.spotLength!==E||B.rectAreaLength!==w||B.hemiLength!==v||B.numDirectionalShadows!==D||B.numPointShadows!==L||B.numSpotShadows!==N||B.numSpotMaps!==z||B.numLightProbes!==T)&&(n.directional.length=_,n.spot.length=E,n.rectArea.length=w,n.point.length=b,n.hemi.length=v,n.directionalShadow.length=D,n.directionalShadowMap.length=D,n.pointShadow.length=L,n.pointShadowMap.length=L,n.spotShadow.length=N,n.spotShadowMap.length=N,n.directionalShadowMatrix.length=D,n.pointShadowMatrix.length=L,n.spotLightMatrix.length=N+z-P,n.spotLightMap.length=z,n.numSpotLightShadowsWithMaps=P,n.numLightProbes=T,B.directionalLength=_,B.pointLength=b,B.spotLength=E,B.rectAreaLength=w,B.hemiLength=v,B.numDirectionalShadows=D,B.numPointShadows=L,B.numSpotShadows=N,B.numSpotMaps=z,B.numLightProbes=T,n.version=k1++)}function u(d,p){let m=0,x=0,_=0,b=0,E=0,w=p.matrixWorldInverse;for(let v=0,D=d.length;v<D;v++){let L=d[v];if(L.isDirectionalLight){let N=n.directional[m];N.direction.setFromMatrixPosition(L.matrixWorld),r.setFromMatrixPosition(L.target.matrixWorld),N.direction.sub(r),N.direction.transformDirection(w),m++}else if(L.isSpotLight){let N=n.spot[_];N.position.setFromMatrixPosition(L.matrixWorld),N.position.applyMatrix4(w),N.direction.setFromMatrixPosition(L.matrixWorld),r.setFromMatrixPosition(L.target.matrixWorld),N.direction.sub(r),N.direction.transformDirection(w),_++}else if(L.isRectAreaLight){let N=n.rectArea[b];N.position.setFromMatrixPosition(L.matrixWorld),N.position.applyMatrix4(w),c.identity(),a.copy(L.matrixWorld),a.premultiply(w),c.extractRotation(a),N.halfWidth.set(L.width*.5,0,0),N.halfHeight.set(0,L.height*.5,0),N.halfWidth.applyMatrix4(c),N.halfHeight.applyMatrix4(c),b++}else if(L.isPointLight){let N=n.point[x];N.position.setFromMatrixPosition(L.matrixWorld),N.position.applyMatrix4(w),x++}else if(L.isHemisphereLight){let N=n.hemi[E];N.direction.setFromMatrixPosition(L.matrixWorld),N.direction.transformDirection(w),E++}}}return{setup:l,setupView:u,state:n}}function Rm(i){let e=new B1(i),t=[],n=[];function r(p){d.camera=p,t.length=0,n.length=0}function a(p){t.push(p)}function c(p){n.push(p)}function l(){e.setup(t)}function u(p){e.setupView(t,p)}let d={lightsArray:t,shadowsArray:n,camera:null,lights:e,transmissionRenderTarget:{}};return{init:r,state:d,setupLights:l,setupLightsView:u,pushLight:a,pushShadow:c}}function z1(i){let e=new WeakMap;function t(r,a=0){let c=e.get(r),l;return c===void 0?(l=new Rm(i),e.set(r,[l])):a>=c.length?(l=new Rm(i),c.push(l)):l=c[a],l}function n(){e=new WeakMap}return{get:t,dispose:n}}var V1=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,H1=`uniform sampler2D shadow_pass;
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
}`;function G1(i,e,t){let n=new Us,r=new Tt,a=new Tt,c=new Kt,l=new Pc({depthPacking:qp}),u=new Fc,d={},p=t.maxTextureSize,m={[zi]:Tn,[Tn]:zi,[Si]:Si},x=new qn({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new Tt},radius:{value:4}},vertexShader:V1,fragmentShader:H1}),_=x.clone();_.defines.HORIZONTAL_PASS=1;let b=new mn;b.setAttribute("position",new wn(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));let E=new Ln(b,x),w=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=Pu;let v=this.type;this.render=function(P,T,B){if(w.enabled===!1||w.autoUpdate===!1&&w.needsUpdate===!1||P.length===0)return;let I=i.getRenderTarget(),R=i.getActiveCubeFace(),W=i.getActiveMipmapLevel(),j=i.state;j.setBlending(Ei),j.buffers.depth.getReversed()===!0?j.buffers.color.setClear(0,0,0,0):j.buffers.color.setClear(1,1,1,1),j.buffers.depth.setTest(!0),j.setScissorTest(!1);let J=v!==Mi&&this.type===Mi,Y=v===Mi&&this.type!==Mi;for(let ce=0,H=P.length;ce<H;ce++){let Me=P[ce],ie=Me.shadow;if(ie===void 0){lt("WebGLShadowMap:",Me,"has no shadow.");continue}if(ie.autoUpdate===!1&&ie.needsUpdate===!1)continue;r.copy(ie.mapSize);let we=ie.getFrameExtents();if(r.multiply(we),a.copy(ie.mapSize),(r.x>p||r.y>p)&&(r.x>p&&(a.x=Math.floor(p/we.x),r.x=a.x*we.x,ie.mapSize.x=a.x),r.y>p&&(a.y=Math.floor(p/we.y),r.y=a.y*we.y,ie.mapSize.y=a.y)),ie.map===null||J===!0||Y===!0){let Be=this.type!==Mi?{minFilter:Fn,magFilter:Fn}:{};ie.map!==null&&ie.map.dispose(),ie.map=new Hn(r.x,r.y,Be),ie.map.texture.name=Me.name+".shadowMap",ie.camera.updateProjectionMatrix()}i.setRenderTarget(ie.map),i.clear();let X=ie.getViewportCount();for(let Be=0;Be<X;Be++){let ht=ie.getViewport(Be);c.set(a.x*ht.x,a.y*ht.y,a.x*ht.z,a.y*ht.w),j.viewport(c),ie.updateMatrices(Me,Be),n=ie.getFrustum(),N(T,B,ie.camera,Me,this.type)}ie.isPointLightShadow!==!0&&this.type===Mi&&D(ie,B),ie.needsUpdate=!1}v=this.type,w.needsUpdate=!1,i.setRenderTarget(I,R,W)};function D(P,T){let B=e.update(E);x.defines.VSM_SAMPLES!==P.blurSamples&&(x.defines.VSM_SAMPLES=P.blurSamples,_.defines.VSM_SAMPLES=P.blurSamples,x.needsUpdate=!0,_.needsUpdate=!0),P.mapPass===null&&(P.mapPass=new Hn(r.x,r.y)),x.uniforms.shadow_pass.value=P.map.texture,x.uniforms.resolution.value=P.mapSize,x.uniforms.radius.value=P.radius,i.setRenderTarget(P.mapPass),i.clear(),i.renderBufferDirect(T,null,B,x,E,null),_.uniforms.shadow_pass.value=P.mapPass.texture,_.uniforms.resolution.value=P.mapSize,_.uniforms.radius.value=P.radius,i.setRenderTarget(P.map),i.clear(),i.renderBufferDirect(T,null,B,_,E,null)}function L(P,T,B,I){let R=null,W=B.isPointLight===!0?P.customDistanceMaterial:P.customDepthMaterial;if(W!==void 0)R=W;else if(R=B.isPointLight===!0?u:l,i.localClippingEnabled&&T.clipShadows===!0&&Array.isArray(T.clippingPlanes)&&T.clippingPlanes.length!==0||T.displacementMap&&T.displacementScale!==0||T.alphaMap&&T.alphaTest>0||T.map&&T.alphaTest>0||T.alphaToCoverage===!0){let j=R.uuid,J=T.uuid,Y=d[j];Y===void 0&&(Y={},d[j]=Y);let ce=Y[J];ce===void 0&&(ce=R.clone(),Y[J]=ce,T.addEventListener("dispose",z)),R=ce}if(R.visible=T.visible,R.wireframe=T.wireframe,I===Mi?R.side=T.shadowSide!==null?T.shadowSide:T.side:R.side=T.shadowSide!==null?T.shadowSide:m[T.side],R.alphaMap=T.alphaMap,R.alphaTest=T.alphaToCoverage===!0?.5:T.alphaTest,R.map=T.map,R.clipShadows=T.clipShadows,R.clippingPlanes=T.clippingPlanes,R.clipIntersection=T.clipIntersection,R.displacementMap=T.displacementMap,R.displacementScale=T.displacementScale,R.displacementBias=T.displacementBias,R.wireframeLinewidth=T.wireframeLinewidth,R.linewidth=T.linewidth,B.isPointLight===!0&&R.isMeshDistanceMaterial===!0){let j=i.properties.get(R);j.light=B}return R}function N(P,T,B,I,R){if(P.visible===!1)return;if(P.layers.test(T.layers)&&(P.isMesh||P.isLine||P.isPoints)&&(P.castShadow||P.receiveShadow&&R===Mi)&&(!P.frustumCulled||n.intersectsObject(P))){P.modelViewMatrix.multiplyMatrices(B.matrixWorldInverse,P.matrixWorld);let J=e.update(P),Y=P.material;if(Array.isArray(Y)){let ce=J.groups;for(let H=0,Me=ce.length;H<Me;H++){let ie=ce[H],we=Y[ie.materialIndex];if(we&&we.visible){let X=L(P,we,I,R);P.onBeforeShadow(i,P,T,B,J,X,ie),i.renderBufferDirect(B,null,J,X,P,ie),P.onAfterShadow(i,P,T,B,J,X,ie)}}}else if(Y.visible){let ce=L(P,Y,I,R);P.onBeforeShadow(i,P,T,B,J,ce,null),i.renderBufferDirect(B,null,J,ce,P,null),P.onAfterShadow(i,P,T,B,J,ce,null)}}let j=P.children;for(let J=0,Y=j.length;J<Y;J++)N(j[J],T,B,I,R)}function z(P){P.target.removeEventListener("dispose",z);for(let B in d){let I=d[B],R=P.target.uuid;R in I&&(I[R].dispose(),delete I[R])}}}var W1={[Wc]:$c,[Xc]:Yc,[jc]:Zc,[Dr]:qc,[$c]:Wc,[Yc]:Xc,[Zc]:jc,[qc]:Dr};function $1(i,e){function t(){let G=!1,Pe=new Kt,Ce=null,Re=new Kt(0,0,0,0);return{setMask:function(be){Ce!==be&&!G&&(i.colorMask(be,be,be,be),Ce=be)},setLocked:function(be){G=be},setClear:function(be,ue,He,ut,zt){zt===!0&&(be*=ut,ue*=ut,He*=ut),Pe.set(be,ue,He,ut),Re.equals(Pe)===!1&&(i.clearColor(be,ue,He,ut),Re.copy(Pe))},reset:function(){G=!1,Ce=null,Re.set(-1,0,0,0)}}}function n(){let G=!1,Pe=!1,Ce=null,Re=null,be=null;return{setReversed:function(ue){if(Pe!==ue){let He=e.get("EXT_clip_control");ue?He.clipControlEXT(He.LOWER_LEFT_EXT,He.ZERO_TO_ONE_EXT):He.clipControlEXT(He.LOWER_LEFT_EXT,He.NEGATIVE_ONE_TO_ONE_EXT),Pe=ue;let ut=be;be=null,this.setClear(ut)}},getReversed:function(){return Pe},setTest:function(ue){ue?pe(i.DEPTH_TEST):ke(i.DEPTH_TEST)},setMask:function(ue){Ce!==ue&&!G&&(i.depthMask(ue),Ce=ue)},setFunc:function(ue){if(Pe&&(ue=W1[ue]),Re!==ue){switch(ue){case Wc:i.depthFunc(i.NEVER);break;case $c:i.depthFunc(i.ALWAYS);break;case Xc:i.depthFunc(i.LESS);break;case Dr:i.depthFunc(i.LEQUAL);break;case jc:i.depthFunc(i.EQUAL);break;case qc:i.depthFunc(i.GEQUAL);break;case Yc:i.depthFunc(i.GREATER);break;case Zc:i.depthFunc(i.NOTEQUAL);break;default:i.depthFunc(i.LEQUAL)}Re=ue}},setLocked:function(ue){G=ue},setClear:function(ue){be!==ue&&(Pe&&(ue=1-ue),i.clearDepth(ue),be=ue)},reset:function(){G=!1,Ce=null,Re=null,be=null,Pe=!1}}}function r(){let G=!1,Pe=null,Ce=null,Re=null,be=null,ue=null,He=null,ut=null,zt=null;return{setTest:function(Ft){G||(Ft?pe(i.STENCIL_TEST):ke(i.STENCIL_TEST))},setMask:function(Ft){Pe!==Ft&&!G&&(i.stencilMask(Ft),Pe=Ft)},setFunc:function(Ft,Un,Nn){(Ce!==Ft||Re!==Un||be!==Nn)&&(i.stencilFunc(Ft,Un,Nn),Ce=Ft,Re=Un,be=Nn)},setOp:function(Ft,Un,Nn){(ue!==Ft||He!==Un||ut!==Nn)&&(i.stencilOp(Ft,Un,Nn),ue=Ft,He=Un,ut=Nn)},setLocked:function(Ft){G=Ft},setClear:function(Ft){zt!==Ft&&(i.clearStencil(Ft),zt=Ft)},reset:function(){G=!1,Pe=null,Ce=null,Re=null,be=null,ue=null,He=null,ut=null,zt=null}}}let a=new t,c=new n,l=new r,u=new WeakMap,d=new WeakMap,p={},m={},x=new WeakMap,_=[],b=null,E=!1,w=null,v=null,D=null,L=null,N=null,z=null,P=null,T=new ft(0,0,0),B=0,I=!1,R=null,W=null,j=null,J=null,Y=null,ce=i.getParameter(i.MAX_COMBINED_TEXTURE_IMAGE_UNITS),H=!1,Me=0,ie=i.getParameter(i.VERSION);ie.indexOf("WebGL")!==-1?(Me=parseFloat(/^WebGL (\d)/.exec(ie)[1]),H=Me>=1):ie.indexOf("OpenGL ES")!==-1&&(Me=parseFloat(/^OpenGL ES (\d)/.exec(ie)[1]),H=Me>=2);let we=null,X={},Be=i.getParameter(i.SCISSOR_BOX),ht=i.getParameter(i.VIEWPORT),At=new Kt().fromArray(Be),Ut=new Kt().fromArray(ht);function Ct(G,Pe,Ce,Re){let be=new Uint8Array(4),ue=i.createTexture();i.bindTexture(G,ue),i.texParameteri(G,i.TEXTURE_MIN_FILTER,i.NEAREST),i.texParameteri(G,i.TEXTURE_MAG_FILTER,i.NEAREST);for(let He=0;He<Ce;He++)G===i.TEXTURE_3D||G===i.TEXTURE_2D_ARRAY?i.texImage3D(Pe,0,i.RGBA,1,1,Re,0,i.RGBA,i.UNSIGNED_BYTE,be):i.texImage2D(Pe+He,0,i.RGBA,1,1,0,i.RGBA,i.UNSIGNED_BYTE,be);return ue}let re={};re[i.TEXTURE_2D]=Ct(i.TEXTURE_2D,i.TEXTURE_2D,1),re[i.TEXTURE_CUBE_MAP]=Ct(i.TEXTURE_CUBE_MAP,i.TEXTURE_CUBE_MAP_POSITIVE_X,6),re[i.TEXTURE_2D_ARRAY]=Ct(i.TEXTURE_2D_ARRAY,i.TEXTURE_2D_ARRAY,1,1),re[i.TEXTURE_3D]=Ct(i.TEXTURE_3D,i.TEXTURE_3D,1,1),a.setClear(0,0,0,1),c.setClear(1),l.setClear(0),pe(i.DEPTH_TEST),c.setFunc(Dr),je(!1),tt(Iu),pe(i.CULL_FACE),Ot(Ei);function pe(G){p[G]!==!0&&(i.enable(G),p[G]=!0)}function ke(G){p[G]!==!1&&(i.disable(G),p[G]=!1)}function dt(G,Pe){return m[G]!==Pe?(i.bindFramebuffer(G,Pe),m[G]=Pe,G===i.DRAW_FRAMEBUFFER&&(m[i.FRAMEBUFFER]=Pe),G===i.FRAMEBUFFER&&(m[i.DRAW_FRAMEBUFFER]=Pe),!0):!1}function Ze(G,Pe){let Ce=_,Re=!1;if(G){Ce=x.get(Pe),Ce===void 0&&(Ce=[],x.set(Pe,Ce));let be=G.textures;if(Ce.length!==be.length||Ce[0]!==i.COLOR_ATTACHMENT0){for(let ue=0,He=be.length;ue<He;ue++)Ce[ue]=i.COLOR_ATTACHMENT0+ue;Ce.length=be.length,Re=!0}}else Ce[0]!==i.BACK&&(Ce[0]=i.BACK,Re=!0);Re&&i.drawBuffers(Ce)}function vt(G){return b!==G?(i.useProgram(G),b=G,!0):!1}let Qt={[ir]:i.FUNC_ADD,[yp]:i.FUNC_SUBTRACT,[bp]:i.FUNC_REVERSE_SUBTRACT};Qt[wp]=i.MIN,Qt[Mp]=i.MAX;let gt={[Sp]:i.ZERO,[Ep]:i.ONE,[Tp]:i.SRC_COLOR,[gc]:i.SRC_ALPHA,[Fp]:i.SRC_ALPHA_SATURATE,[Ip]:i.DST_COLOR,[Cp]:i.DST_ALPHA,[Ap]:i.ONE_MINUS_SRC_COLOR,[xc]:i.ONE_MINUS_SRC_ALPHA,[Pp]:i.ONE_MINUS_DST_COLOR,[Rp]:i.ONE_MINUS_DST_ALPHA,[Dp]:i.CONSTANT_COLOR,[Lp]:i.ONE_MINUS_CONSTANT_COLOR,[Up]:i.CONSTANT_ALPHA,[Np]:i.ONE_MINUS_CONSTANT_ALPHA};function Ot(G,Pe,Ce,Re,be,ue,He,ut,zt,Ft){if(G===Ei){E===!0&&(ke(i.BLEND),E=!1);return}if(E===!1&&(pe(i.BLEND),E=!0),G!==vp){if(G!==w||Ft!==I){if((v!==ir||N!==ir)&&(i.blendEquation(i.FUNC_ADD),v=ir,N=ir),Ft)switch(G){case Fr:i.blendFuncSeparate(i.ONE,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case Fu:i.blendFunc(i.ONE,i.ONE);break;case Du:i.blendFuncSeparate(i.ZERO,i.ONE_MINUS_SRC_COLOR,i.ZERO,i.ONE);break;case Lu:i.blendFuncSeparate(i.DST_COLOR,i.ONE_MINUS_SRC_ALPHA,i.ZERO,i.ONE);break;default:yt("WebGLState: Invalid blending: ",G);break}else switch(G){case Fr:i.blendFuncSeparate(i.SRC_ALPHA,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case Fu:i.blendFuncSeparate(i.SRC_ALPHA,i.ONE,i.ONE,i.ONE);break;case Du:yt("WebGLState: SubtractiveBlending requires material.premultipliedAlpha = true");break;case Lu:yt("WebGLState: MultiplyBlending requires material.premultipliedAlpha = true");break;default:yt("WebGLState: Invalid blending: ",G);break}D=null,L=null,z=null,P=null,T.set(0,0,0),B=0,w=G,I=Ft}return}be=be||Pe,ue=ue||Ce,He=He||Re,(Pe!==v||be!==N)&&(i.blendEquationSeparate(Qt[Pe],Qt[be]),v=Pe,N=be),(Ce!==D||Re!==L||ue!==z||He!==P)&&(i.blendFuncSeparate(gt[Ce],gt[Re],gt[ue],gt[He]),D=Ce,L=Re,z=ue,P=He),(ut.equals(T)===!1||zt!==B)&&(i.blendColor(ut.r,ut.g,ut.b,zt),T.copy(ut),B=zt),w=G,I=!1}function V(G,Pe){G.side===Si?ke(i.CULL_FACE):pe(i.CULL_FACE);let Ce=G.side===Tn;Pe&&(Ce=!Ce),je(Ce),G.blending===Fr&&G.transparent===!1?Ot(Ei):Ot(G.blending,G.blendEquation,G.blendSrc,G.blendDst,G.blendEquationAlpha,G.blendSrcAlpha,G.blendDstAlpha,G.blendColor,G.blendAlpha,G.premultipliedAlpha),c.setFunc(G.depthFunc),c.setTest(G.depthTest),c.setMask(G.depthWrite),a.setMask(G.colorWrite);let Re=G.stencilWrite;l.setTest(Re),Re&&(l.setMask(G.stencilWriteMask),l.setFunc(G.stencilFunc,G.stencilRef,G.stencilFuncMask),l.setOp(G.stencilFail,G.stencilZFail,G.stencilZPass)),Ue(G.polygonOffset,G.polygonOffsetFactor,G.polygonOffsetUnits),G.alphaToCoverage===!0?pe(i.SAMPLE_ALPHA_TO_COVERAGE):ke(i.SAMPLE_ALPHA_TO_COVERAGE)}function je(G){R!==G&&(G?i.frontFace(i.CW):i.frontFace(i.CCW),R=G)}function tt(G){G!==xp?(pe(i.CULL_FACE),G!==W&&(G===Iu?i.cullFace(i.BACK):G===_p?i.cullFace(i.FRONT):i.cullFace(i.FRONT_AND_BACK))):ke(i.CULL_FACE),W=G}function bt(G){G!==j&&(H&&i.lineWidth(G),j=G)}function Ue(G,Pe,Ce){G?(pe(i.POLYGON_OFFSET_FILL),(J!==Pe||Y!==Ce)&&(i.polygonOffset(Pe,Ce),J=Pe,Y=Ce)):ke(i.POLYGON_OFFSET_FILL)}function Te(G){G?pe(i.SCISSOR_TEST):ke(i.SCISSOR_TEST)}function _e(G){G===void 0&&(G=i.TEXTURE0+ce-1),we!==G&&(i.activeTexture(G),we=G)}function ot(G,Pe,Ce){Ce===void 0&&(we===null?Ce=i.TEXTURE0+ce-1:Ce=we);let Re=X[Ce];Re===void 0&&(Re={type:void 0,texture:void 0},X[Ce]=Re),(Re.type!==G||Re.texture!==Pe)&&(we!==Ce&&(i.activeTexture(Ce),we=Ce),i.bindTexture(G,Pe||re[G]),Re.type=G,Re.texture=Pe)}function O(){let G=X[we];G!==void 0&&G.type!==void 0&&(i.bindTexture(G.type,null),G.type=void 0,G.texture=void 0)}function A(){try{i.compressedTexImage2D(...arguments)}catch(G){G("WebGLState:",G)}}function Q(){try{i.compressedTexImage3D(...arguments)}catch(G){G("WebGLState:",G)}}function le(){try{i.texSubImage2D(...arguments)}catch(G){G("WebGLState:",G)}}function de(){try{i.texSubImage3D(...arguments)}catch(G){G("WebGLState:",G)}}function se(){try{i.compressedTexSubImage2D(...arguments)}catch(G){G("WebGLState:",G)}}function Ye(){try{i.compressedTexSubImage3D(...arguments)}catch(G){G("WebGLState:",G)}}function Ie(){try{i.texStorage2D(...arguments)}catch(G){G("WebGLState:",G)}}function Xe(){try{i.texStorage3D(...arguments)}catch(G){G("WebGLState:",G)}}function Ve(){try{i.texImage2D(...arguments)}catch(G){G("WebGLState:",G)}}function fe(){try{i.texImage3D(...arguments)}catch(G){G("WebGLState:",G)}}function Se(G){At.equals(G)===!1&&(i.scissor(G.x,G.y,G.z,G.w),At.copy(G))}function Qe(G){Ut.equals(G)===!1&&(i.viewport(G.x,G.y,G.z,G.w),Ut.copy(G))}function Je(G,Pe){let Ce=d.get(Pe);Ce===void 0&&(Ce=new WeakMap,d.set(Pe,Ce));let Re=Ce.get(G);Re===void 0&&(Re=i.getUniformBlockIndex(Pe,G.name),Ce.set(G,Re))}function Ee(G,Pe){let Re=d.get(Pe).get(G);u.get(Pe)!==Re&&(i.uniformBlockBinding(Pe,Re,G.__bindingPointIndex),u.set(Pe,Re))}function $e(){i.disable(i.BLEND),i.disable(i.CULL_FACE),i.disable(i.DEPTH_TEST),i.disable(i.POLYGON_OFFSET_FILL),i.disable(i.SCISSOR_TEST),i.disable(i.STENCIL_TEST),i.disable(i.SAMPLE_ALPHA_TO_COVERAGE),i.blendEquation(i.FUNC_ADD),i.blendFunc(i.ONE,i.ZERO),i.blendFuncSeparate(i.ONE,i.ZERO,i.ONE,i.ZERO),i.blendColor(0,0,0,0),i.colorMask(!0,!0,!0,!0),i.clearColor(0,0,0,0),i.depthMask(!0),i.depthFunc(i.LESS),c.setReversed(!1),i.clearDepth(1),i.stencilMask(4294967295),i.stencilFunc(i.ALWAYS,0,4294967295),i.stencilOp(i.KEEP,i.KEEP,i.KEEP),i.clearStencil(0),i.cullFace(i.BACK),i.frontFace(i.CCW),i.polygonOffset(0,0),i.activeTexture(i.TEXTURE0),i.bindFramebuffer(i.FRAMEBUFFER,null),i.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),i.bindFramebuffer(i.READ_FRAMEBUFFER,null),i.useProgram(null),i.lineWidth(1),i.scissor(0,0,i.canvas.width,i.canvas.height),i.viewport(0,0,i.canvas.width,i.canvas.height),p={},we=null,X={},m={},x=new WeakMap,_=[],b=null,E=!1,w=null,v=null,D=null,L=null,N=null,z=null,P=null,T=new ft(0,0,0),B=0,I=!1,R=null,W=null,j=null,J=null,Y=null,At.set(0,0,i.canvas.width,i.canvas.height),Ut.set(0,0,i.canvas.width,i.canvas.height),a.reset(),c.reset(),l.reset()}return{buffers:{color:a,depth:c,stencil:l},enable:pe,disable:ke,bindFramebuffer:dt,drawBuffers:Ze,useProgram:vt,setBlending:Ot,setMaterial:V,setFlipSided:je,setCullFace:tt,setLineWidth:bt,setPolygonOffset:Ue,setScissorTest:Te,activeTexture:_e,bindTexture:ot,unbindTexture:O,compressedTexImage2D:A,compressedTexImage3D:Q,texImage2D:Ve,texImage3D:fe,updateUBOMapping:Je,uniformBlockBinding:Ee,texStorage2D:Ie,texStorage3D:Xe,texSubImage2D:le,texSubImage3D:de,compressedTexSubImage2D:se,compressedTexSubImage3D:Ye,scissor:Se,viewport:Qe,reset:$e}}function X1(i,e,t,n,r,a,c){let l=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,u=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),d=new Tt,p=new WeakMap,m,x=new WeakMap,_=!1;try{_=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function b(O,A){return _?new OffscreenCanvas(O,A):Aa("canvas")}function E(O,A,Q){let le=1,de=ot(O);if((de.width>Q||de.height>Q)&&(le=Q/Math.max(de.width,de.height)),le<1)if(typeof HTMLImageElement<"u"&&O instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&O instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&O instanceof ImageBitmap||typeof VideoFrame<"u"&&O instanceof VideoFrame){let se=Math.floor(le*de.width),Ye=Math.floor(le*de.height);m===void 0&&(m=b(se,Ye));let Ie=A?b(se,Ye):m;return Ie.width=se,Ie.height=Ye,Ie.getContext("2d").drawImage(O,0,0,se,Ye),lt("WebGLRenderer: Texture has been resized from ("+de.width+"x"+de.height+") to ("+se+"x"+Ye+")."),Ie}else return"data"in O&&lt("WebGLRenderer: Image in DataTexture is too big ("+de.width+"x"+de.height+")."),O;return O}function w(O){return O.generateMipmaps}function v(O){i.generateMipmap(O)}function D(O){return O.isWebGLCubeRenderTarget?i.TEXTURE_CUBE_MAP:O.isWebGL3DRenderTarget?i.TEXTURE_3D:O.isWebGLArrayRenderTarget||O.isCompressedArrayTexture?i.TEXTURE_2D_ARRAY:i.TEXTURE_2D}function L(O,A,Q,le,de=!1){if(O!==null){if(i[O]!==void 0)return i[O];lt("WebGLRenderer: Attempt to use non-existing WebGL internal format '"+O+"'")}let se=A;if(A===i.RED&&(Q===i.FLOAT&&(se=i.R32F),Q===i.HALF_FLOAT&&(se=i.R16F),Q===i.UNSIGNED_BYTE&&(se=i.R8)),A===i.RED_INTEGER&&(Q===i.UNSIGNED_BYTE&&(se=i.R8UI),Q===i.UNSIGNED_SHORT&&(se=i.R16UI),Q===i.UNSIGNED_INT&&(se=i.R32UI),Q===i.BYTE&&(se=i.R8I),Q===i.SHORT&&(se=i.R16I),Q===i.INT&&(se=i.R32I)),A===i.RG&&(Q===i.FLOAT&&(se=i.RG32F),Q===i.HALF_FLOAT&&(se=i.RG16F),Q===i.UNSIGNED_BYTE&&(se=i.RG8)),A===i.RG_INTEGER&&(Q===i.UNSIGNED_BYTE&&(se=i.RG8UI),Q===i.UNSIGNED_SHORT&&(se=i.RG16UI),Q===i.UNSIGNED_INT&&(se=i.RG32UI),Q===i.BYTE&&(se=i.RG8I),Q===i.SHORT&&(se=i.RG16I),Q===i.INT&&(se=i.RG32I)),A===i.RGB_INTEGER&&(Q===i.UNSIGNED_BYTE&&(se=i.RGB8UI),Q===i.UNSIGNED_SHORT&&(se=i.RGB16UI),Q===i.UNSIGNED_INT&&(se=i.RGB32UI),Q===i.BYTE&&(se=i.RGB8I),Q===i.SHORT&&(se=i.RGB16I),Q===i.INT&&(se=i.RGB32I)),A===i.RGBA_INTEGER&&(Q===i.UNSIGNED_BYTE&&(se=i.RGBA8UI),Q===i.UNSIGNED_SHORT&&(se=i.RGBA16UI),Q===i.UNSIGNED_INT&&(se=i.RGBA32UI),Q===i.BYTE&&(se=i.RGBA8I),Q===i.SHORT&&(se=i.RGBA16I),Q===i.INT&&(se=i.RGBA32I)),A===i.RGB&&(Q===i.UNSIGNED_INT_5_9_9_9_REV&&(se=i.RGB9_E5),Q===i.UNSIGNED_INT_10F_11F_11F_REV&&(se=i.R11F_G11F_B10F)),A===i.RGBA){let Ye=de?Ea:It.getTransfer(le);Q===i.FLOAT&&(se=i.RGBA32F),Q===i.HALF_FLOAT&&(se=i.RGBA16F),Q===i.UNSIGNED_BYTE&&(se=Ye===kt?i.SRGB8_ALPHA8:i.RGBA8),Q===i.UNSIGNED_SHORT_4_4_4_4&&(se=i.RGBA4),Q===i.UNSIGNED_SHORT_5_5_5_1&&(se=i.RGB5_A1)}return(se===i.R16F||se===i.R32F||se===i.RG16F||se===i.RG32F||se===i.RGBA16F||se===i.RGBA32F)&&e.get("EXT_color_buffer_float"),se}function N(O,A){let Q;return O?A===null||A===cr||A===Bs?Q=i.DEPTH24_STENCIL8:A===Ti?Q=i.DEPTH32F_STENCIL8:A===Os&&(Q=i.DEPTH24_STENCIL8,lt("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):A===null||A===cr||A===Bs?Q=i.DEPTH_COMPONENT24:A===Ti?Q=i.DEPTH_COMPONENT32F:A===Os&&(Q=i.DEPTH_COMPONENT16),Q}function z(O,A){return w(O)===!0||O.isFramebufferTexture&&O.minFilter!==Fn&&O.minFilter!==Vn?Math.log2(Math.max(A.width,A.height))+1:O.mipmaps!==void 0&&O.mipmaps.length>0?O.mipmaps.length:O.isCompressedTexture&&Array.isArray(O.image)?A.mipmaps.length:1}function P(O){let A=O.target;A.removeEventListener("dispose",P),B(A),A.isVideoTexture&&p.delete(A)}function T(O){let A=O.target;A.removeEventListener("dispose",T),R(A)}function B(O){let A=n.get(O);if(A.__webglInit===void 0)return;let Q=O.source,le=x.get(Q);if(le){let de=le[A.__cacheKey];de.usedTimes--,de.usedTimes===0&&I(O),Object.keys(le).length===0&&x.delete(Q)}n.remove(O)}function I(O){let A=n.get(O);i.deleteTexture(A.__webglTexture);let Q=O.source,le=x.get(Q);delete le[A.__cacheKey],c.memory.textures--}function R(O){let A=n.get(O);if(O.depthTexture&&(O.depthTexture.dispose(),n.remove(O.depthTexture)),O.isWebGLCubeRenderTarget)for(let le=0;le<6;le++){if(Array.isArray(A.__webglFramebuffer[le]))for(let de=0;de<A.__webglFramebuffer[le].length;de++)i.deleteFramebuffer(A.__webglFramebuffer[le][de]);else i.deleteFramebuffer(A.__webglFramebuffer[le]);A.__webglDepthbuffer&&i.deleteRenderbuffer(A.__webglDepthbuffer[le])}else{if(Array.isArray(A.__webglFramebuffer))for(let le=0;le<A.__webglFramebuffer.length;le++)i.deleteFramebuffer(A.__webglFramebuffer[le]);else i.deleteFramebuffer(A.__webglFramebuffer);if(A.__webglDepthbuffer&&i.deleteRenderbuffer(A.__webglDepthbuffer),A.__webglMultisampledFramebuffer&&i.deleteFramebuffer(A.__webglMultisampledFramebuffer),A.__webglColorRenderbuffer)for(let le=0;le<A.__webglColorRenderbuffer.length;le++)A.__webglColorRenderbuffer[le]&&i.deleteRenderbuffer(A.__webglColorRenderbuffer[le]);A.__webglDepthRenderbuffer&&i.deleteRenderbuffer(A.__webglDepthRenderbuffer)}let Q=O.textures;for(let le=0,de=Q.length;le<de;le++){let se=n.get(Q[le]);se.__webglTexture&&(i.deleteTexture(se.__webglTexture),c.memory.textures--),n.remove(Q[le])}n.remove(O)}let W=0;function j(){W=0}function J(){let O=W;return O>=r.maxTextures&&lt("WebGLTextures: Trying to use "+O+" texture units while this GPU supports only "+r.maxTextures),W+=1,O}function Y(O){let A=[];return A.push(O.wrapS),A.push(O.wrapT),A.push(O.wrapR||0),A.push(O.magFilter),A.push(O.minFilter),A.push(O.anisotropy),A.push(O.internalFormat),A.push(O.format),A.push(O.type),A.push(O.generateMipmaps),A.push(O.premultiplyAlpha),A.push(O.flipY),A.push(O.unpackAlignment),A.push(O.colorSpace),A.join()}function ce(O,A){let Q=n.get(O);if(O.isVideoTexture&&Te(O),O.isRenderTargetTexture===!1&&O.isExternalTexture!==!0&&O.version>0&&Q.__version!==O.version){let le=O.image;if(le===null)lt("WebGLRenderer: Texture marked for update but no image data found.");else if(le.complete===!1)lt("WebGLRenderer: Texture marked for update but image is incomplete");else{re(Q,O,A);return}}else O.isExternalTexture&&(Q.__webglTexture=O.sourceTexture?O.sourceTexture:null);t.bindTexture(i.TEXTURE_2D,Q.__webglTexture,i.TEXTURE0+A)}function H(O,A){let Q=n.get(O);if(O.isRenderTargetTexture===!1&&O.version>0&&Q.__version!==O.version){re(Q,O,A);return}else O.isExternalTexture&&(Q.__webglTexture=O.sourceTexture?O.sourceTexture:null);t.bindTexture(i.TEXTURE_2D_ARRAY,Q.__webglTexture,i.TEXTURE0+A)}function Me(O,A){let Q=n.get(O);if(O.isRenderTargetTexture===!1&&O.version>0&&Q.__version!==O.version){re(Q,O,A);return}t.bindTexture(i.TEXTURE_3D,Q.__webglTexture,i.TEXTURE0+A)}function ie(O,A){let Q=n.get(O);if(O.version>0&&Q.__version!==O.version){pe(Q,O,A);return}t.bindTexture(i.TEXTURE_CUBE_MAP,Q.__webglTexture,i.TEXTURE0+A)}let we={[_c]:i.REPEAT,[bi]:i.CLAMP_TO_EDGE,[vc]:i.MIRRORED_REPEAT},X={[Fn]:i.NEAREST,[Xp]:i.NEAREST_MIPMAP_NEAREST,[Ya]:i.NEAREST_MIPMAP_LINEAR,[Vn]:i.LINEAR,[Qc]:i.LINEAR_MIPMAP_NEAREST,[or]:i.LINEAR_MIPMAP_LINEAR},Be={[Zp]:i.NEVER,[nm]:i.ALWAYS,[Jp]:i.LESS,[$u]:i.LEQUAL,[Kp]:i.EQUAL,[tm]:i.GEQUAL,[Qp]:i.GREATER,[em]:i.NOTEQUAL};function ht(O,A){if(A.type===Ti&&e.has("OES_texture_float_linear")===!1&&(A.magFilter===Vn||A.magFilter===Qc||A.magFilter===Ya||A.magFilter===or||A.minFilter===Vn||A.minFilter===Qc||A.minFilter===Ya||A.minFilter===or)&&lt("WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),i.texParameteri(O,i.TEXTURE_WRAP_S,we[A.wrapS]),i.texParameteri(O,i.TEXTURE_WRAP_T,we[A.wrapT]),(O===i.TEXTURE_3D||O===i.TEXTURE_2D_ARRAY)&&i.texParameteri(O,i.TEXTURE_WRAP_R,we[A.wrapR]),i.texParameteri(O,i.TEXTURE_MAG_FILTER,X[A.magFilter]),i.texParameteri(O,i.TEXTURE_MIN_FILTER,X[A.minFilter]),A.compareFunction&&(i.texParameteri(O,i.TEXTURE_COMPARE_MODE,i.COMPARE_REF_TO_TEXTURE),i.texParameteri(O,i.TEXTURE_COMPARE_FUNC,Be[A.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){if(A.magFilter===Fn||A.minFilter!==Ya&&A.minFilter!==or||A.type===Ti&&e.has("OES_texture_float_linear")===!1)return;if(A.anisotropy>1||n.get(A).__currentAnisotropy){let Q=e.get("EXT_texture_filter_anisotropic");i.texParameterf(O,Q.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(A.anisotropy,r.getMaxAnisotropy())),n.get(A).__currentAnisotropy=A.anisotropy}}}function At(O,A){let Q=!1;O.__webglInit===void 0&&(O.__webglInit=!0,A.addEventListener("dispose",P));let le=A.source,de=x.get(le);de===void 0&&(de={},x.set(le,de));let se=Y(A);if(se!==O.__cacheKey){de[se]===void 0&&(de[se]={texture:i.createTexture(),usedTimes:0},c.memory.textures++,Q=!0),de[se].usedTimes++;let Ye=de[O.__cacheKey];Ye!==void 0&&(de[O.__cacheKey].usedTimes--,Ye.usedTimes===0&&I(A)),O.__cacheKey=se,O.__webglTexture=de[se].texture}return Q}function Ut(O,A,Q){return Math.floor(Math.floor(O/Q)/A)}function Ct(O,A,Q,le){let se=O.updateRanges;if(se.length===0)t.texSubImage2D(i.TEXTURE_2D,0,0,0,A.width,A.height,Q,le,A.data);else{se.sort((fe,Se)=>fe.start-Se.start);let Ye=0;for(let fe=1;fe<se.length;fe++){let Se=se[Ye],Qe=se[fe],Je=Se.start+Se.count,Ee=Ut(Qe.start,A.width,4),$e=Ut(Se.start,A.width,4);Qe.start<=Je+1&&Ee===$e&&Ut(Qe.start+Qe.count-1,A.width,4)===Ee?Se.count=Math.max(Se.count,Qe.start+Qe.count-Se.start):(++Ye,se[Ye]=Qe)}se.length=Ye+1;let Ie=i.getParameter(i.UNPACK_ROW_LENGTH),Xe=i.getParameter(i.UNPACK_SKIP_PIXELS),Ve=i.getParameter(i.UNPACK_SKIP_ROWS);i.pixelStorei(i.UNPACK_ROW_LENGTH,A.width);for(let fe=0,Se=se.length;fe<Se;fe++){let Qe=se[fe],Je=Math.floor(Qe.start/4),Ee=Math.ceil(Qe.count/4),$e=Je%A.width,G=Math.floor(Je/A.width),Pe=Ee,Ce=1;i.pixelStorei(i.UNPACK_SKIP_PIXELS,$e),i.pixelStorei(i.UNPACK_SKIP_ROWS,G),t.texSubImage2D(i.TEXTURE_2D,0,$e,G,Pe,Ce,Q,le,A.data)}O.clearUpdateRanges(),i.pixelStorei(i.UNPACK_ROW_LENGTH,Ie),i.pixelStorei(i.UNPACK_SKIP_PIXELS,Xe),i.pixelStorei(i.UNPACK_SKIP_ROWS,Ve)}}function re(O,A,Q){let le=i.TEXTURE_2D;(A.isDataArrayTexture||A.isCompressedArrayTexture)&&(le=i.TEXTURE_2D_ARRAY),A.isData3DTexture&&(le=i.TEXTURE_3D);let de=At(O,A),se=A.source;t.bindTexture(le,O.__webglTexture,i.TEXTURE0+Q);let Ye=n.get(se);if(se.version!==Ye.__version||de===!0){t.activeTexture(i.TEXTURE0+Q);let Ie=It.getPrimaries(It.workingColorSpace),Xe=A.colorSpace===Wi?null:It.getPrimaries(A.colorSpace),Ve=A.colorSpace===Wi||Ie===Xe?i.NONE:i.BROWSER_DEFAULT_WEBGL;i.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,A.flipY),i.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,A.premultiplyAlpha),i.pixelStorei(i.UNPACK_ALIGNMENT,A.unpackAlignment),i.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,Ve);let fe=E(A.image,!1,r.maxTextureSize);fe=_e(A,fe);let Se=a.convert(A.format,A.colorSpace),Qe=a.convert(A.type),Je=L(A.internalFormat,Se,Qe,A.colorSpace,A.isVideoTexture);ht(le,A);let Ee,$e=A.mipmaps,G=A.isVideoTexture!==!0,Pe=Ye.__version===void 0||de===!0,Ce=se.dataReady,Re=z(A,fe);if(A.isDepthTexture)Je=N(A.format===zs,A.type),Pe&&(G?t.texStorage2D(i.TEXTURE_2D,1,Je,fe.width,fe.height):t.texImage2D(i.TEXTURE_2D,0,Je,fe.width,fe.height,0,Se,Qe,null));else if(A.isDataTexture)if($e.length>0){G&&Pe&&t.texStorage2D(i.TEXTURE_2D,Re,Je,$e[0].width,$e[0].height);for(let be=0,ue=$e.length;be<ue;be++)Ee=$e[be],G?Ce&&t.texSubImage2D(i.TEXTURE_2D,be,0,0,Ee.width,Ee.height,Se,Qe,Ee.data):t.texImage2D(i.TEXTURE_2D,be,Je,Ee.width,Ee.height,0,Se,Qe,Ee.data);A.generateMipmaps=!1}else G?(Pe&&t.texStorage2D(i.TEXTURE_2D,Re,Je,fe.width,fe.height),Ce&&Ct(A,fe,Se,Qe)):t.texImage2D(i.TEXTURE_2D,0,Je,fe.width,fe.height,0,Se,Qe,fe.data);else if(A.isCompressedTexture)if(A.isCompressedArrayTexture){G&&Pe&&t.texStorage3D(i.TEXTURE_2D_ARRAY,Re,Je,$e[0].width,$e[0].height,fe.depth);for(let be=0,ue=$e.length;be<ue;be++)if(Ee=$e[be],A.format!==Yn)if(Se!==null)if(G){if(Ce)if(A.layerUpdates.size>0){let He=Ku(Ee.width,Ee.height,A.format,A.type);for(let ut of A.layerUpdates){let zt=Ee.data.subarray(ut*He/Ee.data.BYTES_PER_ELEMENT,(ut+1)*He/Ee.data.BYTES_PER_ELEMENT);t.compressedTexSubImage3D(i.TEXTURE_2D_ARRAY,be,0,0,ut,Ee.width,Ee.height,1,Se,zt)}A.clearLayerUpdates()}else t.compressedTexSubImage3D(i.TEXTURE_2D_ARRAY,be,0,0,0,Ee.width,Ee.height,fe.depth,Se,Ee.data)}else t.compressedTexImage3D(i.TEXTURE_2D_ARRAY,be,Je,Ee.width,Ee.height,fe.depth,0,Ee.data,0,0);else lt("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else G?Ce&&t.texSubImage3D(i.TEXTURE_2D_ARRAY,be,0,0,0,Ee.width,Ee.height,fe.depth,Se,Qe,Ee.data):t.texImage3D(i.TEXTURE_2D_ARRAY,be,Je,Ee.width,Ee.height,fe.depth,0,Se,Qe,Ee.data)}else{G&&Pe&&t.texStorage2D(i.TEXTURE_2D,Re,Je,$e[0].width,$e[0].height);for(let be=0,ue=$e.length;be<ue;be++)Ee=$e[be],A.format!==Yn?Se!==null?G?Ce&&t.compressedTexSubImage2D(i.TEXTURE_2D,be,0,0,Ee.width,Ee.height,Se,Ee.data):t.compressedTexImage2D(i.TEXTURE_2D,be,Je,Ee.width,Ee.height,0,Ee.data):lt("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):G?Ce&&t.texSubImage2D(i.TEXTURE_2D,be,0,0,Ee.width,Ee.height,Se,Qe,Ee.data):t.texImage2D(i.TEXTURE_2D,be,Je,Ee.width,Ee.height,0,Se,Qe,Ee.data)}else if(A.isDataArrayTexture)if(G){if(Pe&&t.texStorage3D(i.TEXTURE_2D_ARRAY,Re,Je,fe.width,fe.height,fe.depth),Ce)if(A.layerUpdates.size>0){let be=Ku(fe.width,fe.height,A.format,A.type);for(let ue of A.layerUpdates){let He=fe.data.subarray(ue*be/fe.data.BYTES_PER_ELEMENT,(ue+1)*be/fe.data.BYTES_PER_ELEMENT);t.texSubImage3D(i.TEXTURE_2D_ARRAY,0,0,0,ue,fe.width,fe.height,1,Se,Qe,He)}A.clearLayerUpdates()}else t.texSubImage3D(i.TEXTURE_2D_ARRAY,0,0,0,0,fe.width,fe.height,fe.depth,Se,Qe,fe.data)}else t.texImage3D(i.TEXTURE_2D_ARRAY,0,Je,fe.width,fe.height,fe.depth,0,Se,Qe,fe.data);else if(A.isData3DTexture)G?(Pe&&t.texStorage3D(i.TEXTURE_3D,Re,Je,fe.width,fe.height,fe.depth),Ce&&t.texSubImage3D(i.TEXTURE_3D,0,0,0,0,fe.width,fe.height,fe.depth,Se,Qe,fe.data)):t.texImage3D(i.TEXTURE_3D,0,Je,fe.width,fe.height,fe.depth,0,Se,Qe,fe.data);else if(A.isFramebufferTexture){if(Pe)if(G)t.texStorage2D(i.TEXTURE_2D,Re,Je,fe.width,fe.height);else{let be=fe.width,ue=fe.height;for(let He=0;He<Re;He++)t.texImage2D(i.TEXTURE_2D,He,Je,be,ue,0,Se,Qe,null),be>>=1,ue>>=1}}else if($e.length>0){if(G&&Pe){let be=ot($e[0]);t.texStorage2D(i.TEXTURE_2D,Re,Je,be.width,be.height)}for(let be=0,ue=$e.length;be<ue;be++)Ee=$e[be],G?Ce&&t.texSubImage2D(i.TEXTURE_2D,be,0,0,Se,Qe,Ee):t.texImage2D(i.TEXTURE_2D,be,Je,Se,Qe,Ee);A.generateMipmaps=!1}else if(G){if(Pe){let be=ot(fe);t.texStorage2D(i.TEXTURE_2D,Re,Je,be.width,be.height)}Ce&&t.texSubImage2D(i.TEXTURE_2D,0,0,0,Se,Qe,fe)}else t.texImage2D(i.TEXTURE_2D,0,Je,Se,Qe,fe);w(A)&&v(le),Ye.__version=se.version,A.onUpdate&&A.onUpdate(A)}O.__version=A.version}function pe(O,A,Q){if(A.image.length!==6)return;let le=At(O,A),de=A.source;t.bindTexture(i.TEXTURE_CUBE_MAP,O.__webglTexture,i.TEXTURE0+Q);let se=n.get(de);if(de.version!==se.__version||le===!0){t.activeTexture(i.TEXTURE0+Q);let Ye=It.getPrimaries(It.workingColorSpace),Ie=A.colorSpace===Wi?null:It.getPrimaries(A.colorSpace),Xe=A.colorSpace===Wi||Ye===Ie?i.NONE:i.BROWSER_DEFAULT_WEBGL;i.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,A.flipY),i.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,A.premultiplyAlpha),i.pixelStorei(i.UNPACK_ALIGNMENT,A.unpackAlignment),i.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,Xe);let Ve=A.isCompressedTexture||A.image[0].isCompressedTexture,fe=A.image[0]&&A.image[0].isDataTexture,Se=[];for(let ue=0;ue<6;ue++)!Ve&&!fe?Se[ue]=E(A.image[ue],!0,r.maxCubemapSize):Se[ue]=fe?A.image[ue].image:A.image[ue],Se[ue]=_e(A,Se[ue]);let Qe=Se[0],Je=a.convert(A.format,A.colorSpace),Ee=a.convert(A.type),$e=L(A.internalFormat,Je,Ee,A.colorSpace),G=A.isVideoTexture!==!0,Pe=se.__version===void 0||le===!0,Ce=de.dataReady,Re=z(A,Qe);ht(i.TEXTURE_CUBE_MAP,A);let be;if(Ve){G&&Pe&&t.texStorage2D(i.TEXTURE_CUBE_MAP,Re,$e,Qe.width,Qe.height);for(let ue=0;ue<6;ue++){be=Se[ue].mipmaps;for(let He=0;He<be.length;He++){let ut=be[He];A.format!==Yn?Je!==null?G?Ce&&t.compressedTexSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ue,He,0,0,ut.width,ut.height,Je,ut.data):t.compressedTexImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ue,He,$e,ut.width,ut.height,0,ut.data):lt("WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):G?Ce&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ue,He,0,0,ut.width,ut.height,Je,Ee,ut.data):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ue,He,$e,ut.width,ut.height,0,Je,Ee,ut.data)}}}else{if(be=A.mipmaps,G&&Pe){be.length>0&&Re++;let ue=ot(Se[0]);t.texStorage2D(i.TEXTURE_CUBE_MAP,Re,$e,ue.width,ue.height)}for(let ue=0;ue<6;ue++)if(fe){G?Ce&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ue,0,0,0,Se[ue].width,Se[ue].height,Je,Ee,Se[ue].data):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ue,0,$e,Se[ue].width,Se[ue].height,0,Je,Ee,Se[ue].data);for(let He=0;He<be.length;He++){let zt=be[He].image[ue].image;G?Ce&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ue,He+1,0,0,zt.width,zt.height,Je,Ee,zt.data):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ue,He+1,$e,zt.width,zt.height,0,Je,Ee,zt.data)}}else{G?Ce&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ue,0,0,0,Je,Ee,Se[ue]):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ue,0,$e,Je,Ee,Se[ue]);for(let He=0;He<be.length;He++){let ut=be[He];G?Ce&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ue,He+1,0,0,Je,Ee,ut.image[ue]):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ue,He+1,$e,Je,Ee,ut.image[ue])}}}w(A)&&v(i.TEXTURE_CUBE_MAP),se.__version=de.version,A.onUpdate&&A.onUpdate(A)}O.__version=A.version}function ke(O,A,Q,le,de,se){let Ye=a.convert(Q.format,Q.colorSpace),Ie=a.convert(Q.type),Xe=L(Q.internalFormat,Ye,Ie,Q.colorSpace),Ve=n.get(A),fe=n.get(Q);if(fe.__renderTarget=A,!Ve.__hasExternalTextures){let Se=Math.max(1,A.width>>se),Qe=Math.max(1,A.height>>se);de===i.TEXTURE_3D||de===i.TEXTURE_2D_ARRAY?t.texImage3D(de,se,Xe,Se,Qe,A.depth,0,Ye,Ie,null):t.texImage2D(de,se,Xe,Se,Qe,0,Ye,Ie,null)}t.bindFramebuffer(i.FRAMEBUFFER,O),Ue(A)?l.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,le,de,fe.__webglTexture,0,bt(A)):(de===i.TEXTURE_2D||de>=i.TEXTURE_CUBE_MAP_POSITIVE_X&&de<=i.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&i.framebufferTexture2D(i.FRAMEBUFFER,le,de,fe.__webglTexture,se),t.bindFramebuffer(i.FRAMEBUFFER,null)}function dt(O,A,Q){if(i.bindRenderbuffer(i.RENDERBUFFER,O),A.depthBuffer){let le=A.depthTexture,de=le&&le.isDepthTexture?le.type:null,se=N(A.stencilBuffer,de),Ye=A.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,Ie=bt(A);Ue(A)?l.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,Ie,se,A.width,A.height):Q?i.renderbufferStorageMultisample(i.RENDERBUFFER,Ie,se,A.width,A.height):i.renderbufferStorage(i.RENDERBUFFER,se,A.width,A.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,Ye,i.RENDERBUFFER,O)}else{let le=A.textures;for(let de=0;de<le.length;de++){let se=le[de],Ye=a.convert(se.format,se.colorSpace),Ie=a.convert(se.type),Xe=L(se.internalFormat,Ye,Ie,se.colorSpace),Ve=bt(A);Q&&Ue(A)===!1?i.renderbufferStorageMultisample(i.RENDERBUFFER,Ve,Xe,A.width,A.height):Ue(A)?l.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,Ve,Xe,A.width,A.height):i.renderbufferStorage(i.RENDERBUFFER,Xe,A.width,A.height)}}i.bindRenderbuffer(i.RENDERBUFFER,null)}function Ze(O,A){if(A&&A.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(t.bindFramebuffer(i.FRAMEBUFFER,O),!(A.depthTexture&&A.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");let le=n.get(A.depthTexture);le.__renderTarget=A,(!le.__webglTexture||A.depthTexture.image.width!==A.width||A.depthTexture.image.height!==A.height)&&(A.depthTexture.image.width=A.width,A.depthTexture.image.height=A.height,A.depthTexture.needsUpdate=!0),ce(A.depthTexture,0);let de=le.__webglTexture,se=bt(A);if(A.depthTexture.format===Cs)Ue(A)?l.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,i.DEPTH_ATTACHMENT,i.TEXTURE_2D,de,0,se):i.framebufferTexture2D(i.FRAMEBUFFER,i.DEPTH_ATTACHMENT,i.TEXTURE_2D,de,0);else if(A.depthTexture.format===zs)Ue(A)?l.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,i.DEPTH_STENCIL_ATTACHMENT,i.TEXTURE_2D,de,0,se):i.framebufferTexture2D(i.FRAMEBUFFER,i.DEPTH_STENCIL_ATTACHMENT,i.TEXTURE_2D,de,0);else throw new Error("Unknown depthTexture format")}function vt(O){let A=n.get(O),Q=O.isWebGLCubeRenderTarget===!0;if(A.__boundDepthTexture!==O.depthTexture){let le=O.depthTexture;if(A.__depthDisposeCallback&&A.__depthDisposeCallback(),le){let de=()=>{delete A.__boundDepthTexture,delete A.__depthDisposeCallback,le.removeEventListener("dispose",de)};le.addEventListener("dispose",de),A.__depthDisposeCallback=de}A.__boundDepthTexture=le}if(O.depthTexture&&!A.__autoAllocateDepthBuffer){if(Q)throw new Error("target.depthTexture not supported in Cube render targets");let le=O.texture.mipmaps;le&&le.length>0?Ze(A.__webglFramebuffer[0],O):Ze(A.__webglFramebuffer,O)}else if(Q){A.__webglDepthbuffer=[];for(let le=0;le<6;le++)if(t.bindFramebuffer(i.FRAMEBUFFER,A.__webglFramebuffer[le]),A.__webglDepthbuffer[le]===void 0)A.__webglDepthbuffer[le]=i.createRenderbuffer(),dt(A.__webglDepthbuffer[le],O,!1);else{let de=O.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,se=A.__webglDepthbuffer[le];i.bindRenderbuffer(i.RENDERBUFFER,se),i.framebufferRenderbuffer(i.FRAMEBUFFER,de,i.RENDERBUFFER,se)}}else{let le=O.texture.mipmaps;if(le&&le.length>0?t.bindFramebuffer(i.FRAMEBUFFER,A.__webglFramebuffer[0]):t.bindFramebuffer(i.FRAMEBUFFER,A.__webglFramebuffer),A.__webglDepthbuffer===void 0)A.__webglDepthbuffer=i.createRenderbuffer(),dt(A.__webglDepthbuffer,O,!1);else{let de=O.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,se=A.__webglDepthbuffer;i.bindRenderbuffer(i.RENDERBUFFER,se),i.framebufferRenderbuffer(i.FRAMEBUFFER,de,i.RENDERBUFFER,se)}}t.bindFramebuffer(i.FRAMEBUFFER,null)}function Qt(O,A,Q){let le=n.get(O);A!==void 0&&ke(le.__webglFramebuffer,O,O.texture,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,0),Q!==void 0&&vt(O)}function gt(O){let A=O.texture,Q=n.get(O),le=n.get(A);O.addEventListener("dispose",T);let de=O.textures,se=O.isWebGLCubeRenderTarget===!0,Ye=de.length>1;if(Ye||(le.__webglTexture===void 0&&(le.__webglTexture=i.createTexture()),le.__version=A.version,c.memory.textures++),se){Q.__webglFramebuffer=[];for(let Ie=0;Ie<6;Ie++)if(A.mipmaps&&A.mipmaps.length>0){Q.__webglFramebuffer[Ie]=[];for(let Xe=0;Xe<A.mipmaps.length;Xe++)Q.__webglFramebuffer[Ie][Xe]=i.createFramebuffer()}else Q.__webglFramebuffer[Ie]=i.createFramebuffer()}else{if(A.mipmaps&&A.mipmaps.length>0){Q.__webglFramebuffer=[];for(let Ie=0;Ie<A.mipmaps.length;Ie++)Q.__webglFramebuffer[Ie]=i.createFramebuffer()}else Q.__webglFramebuffer=i.createFramebuffer();if(Ye)for(let Ie=0,Xe=de.length;Ie<Xe;Ie++){let Ve=n.get(de[Ie]);Ve.__webglTexture===void 0&&(Ve.__webglTexture=i.createTexture(),c.memory.textures++)}if(O.samples>0&&Ue(O)===!1){Q.__webglMultisampledFramebuffer=i.createFramebuffer(),Q.__webglColorRenderbuffer=[],t.bindFramebuffer(i.FRAMEBUFFER,Q.__webglMultisampledFramebuffer);for(let Ie=0;Ie<de.length;Ie++){let Xe=de[Ie];Q.__webglColorRenderbuffer[Ie]=i.createRenderbuffer(),i.bindRenderbuffer(i.RENDERBUFFER,Q.__webglColorRenderbuffer[Ie]);let Ve=a.convert(Xe.format,Xe.colorSpace),fe=a.convert(Xe.type),Se=L(Xe.internalFormat,Ve,fe,Xe.colorSpace,O.isXRRenderTarget===!0),Qe=bt(O);i.renderbufferStorageMultisample(i.RENDERBUFFER,Qe,Se,O.width,O.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+Ie,i.RENDERBUFFER,Q.__webglColorRenderbuffer[Ie])}i.bindRenderbuffer(i.RENDERBUFFER,null),O.depthBuffer&&(Q.__webglDepthRenderbuffer=i.createRenderbuffer(),dt(Q.__webglDepthRenderbuffer,O,!0)),t.bindFramebuffer(i.FRAMEBUFFER,null)}}if(se){t.bindTexture(i.TEXTURE_CUBE_MAP,le.__webglTexture),ht(i.TEXTURE_CUBE_MAP,A);for(let Ie=0;Ie<6;Ie++)if(A.mipmaps&&A.mipmaps.length>0)for(let Xe=0;Xe<A.mipmaps.length;Xe++)ke(Q.__webglFramebuffer[Ie][Xe],O,A,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+Ie,Xe);else ke(Q.__webglFramebuffer[Ie],O,A,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+Ie,0);w(A)&&v(i.TEXTURE_CUBE_MAP),t.unbindTexture()}else if(Ye){for(let Ie=0,Xe=de.length;Ie<Xe;Ie++){let Ve=de[Ie],fe=n.get(Ve),Se=i.TEXTURE_2D;(O.isWebGL3DRenderTarget||O.isWebGLArrayRenderTarget)&&(Se=O.isWebGL3DRenderTarget?i.TEXTURE_3D:i.TEXTURE_2D_ARRAY),t.bindTexture(Se,fe.__webglTexture),ht(Se,Ve),ke(Q.__webglFramebuffer,O,Ve,i.COLOR_ATTACHMENT0+Ie,Se,0),w(Ve)&&v(Se)}t.unbindTexture()}else{let Ie=i.TEXTURE_2D;if((O.isWebGL3DRenderTarget||O.isWebGLArrayRenderTarget)&&(Ie=O.isWebGL3DRenderTarget?i.TEXTURE_3D:i.TEXTURE_2D_ARRAY),t.bindTexture(Ie,le.__webglTexture),ht(Ie,A),A.mipmaps&&A.mipmaps.length>0)for(let Xe=0;Xe<A.mipmaps.length;Xe++)ke(Q.__webglFramebuffer[Xe],O,A,i.COLOR_ATTACHMENT0,Ie,Xe);else ke(Q.__webglFramebuffer,O,A,i.COLOR_ATTACHMENT0,Ie,0);w(A)&&v(Ie),t.unbindTexture()}O.depthBuffer&&vt(O)}function Ot(O){let A=O.textures;for(let Q=0,le=A.length;Q<le;Q++){let de=A[Q];if(w(de)){let se=D(O),Ye=n.get(de).__webglTexture;t.bindTexture(se,Ye),v(se),t.unbindTexture()}}}let V=[],je=[];function tt(O){if(O.samples>0){if(Ue(O)===!1){let A=O.textures,Q=O.width,le=O.height,de=i.COLOR_BUFFER_BIT,se=O.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,Ye=n.get(O),Ie=A.length>1;if(Ie)for(let Ve=0;Ve<A.length;Ve++)t.bindFramebuffer(i.FRAMEBUFFER,Ye.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+Ve,i.RENDERBUFFER,null),t.bindFramebuffer(i.FRAMEBUFFER,Ye.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+Ve,i.TEXTURE_2D,null,0);t.bindFramebuffer(i.READ_FRAMEBUFFER,Ye.__webglMultisampledFramebuffer);let Xe=O.texture.mipmaps;Xe&&Xe.length>0?t.bindFramebuffer(i.DRAW_FRAMEBUFFER,Ye.__webglFramebuffer[0]):t.bindFramebuffer(i.DRAW_FRAMEBUFFER,Ye.__webglFramebuffer);for(let Ve=0;Ve<A.length;Ve++){if(O.resolveDepthBuffer&&(O.depthBuffer&&(de|=i.DEPTH_BUFFER_BIT),O.stencilBuffer&&O.resolveStencilBuffer&&(de|=i.STENCIL_BUFFER_BIT)),Ie){i.framebufferRenderbuffer(i.READ_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.RENDERBUFFER,Ye.__webglColorRenderbuffer[Ve]);let fe=n.get(A[Ve]).__webglTexture;i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,fe,0)}i.blitFramebuffer(0,0,Q,le,0,0,Q,le,de,i.NEAREST),u===!0&&(V.length=0,je.length=0,V.push(i.COLOR_ATTACHMENT0+Ve),O.depthBuffer&&O.resolveDepthBuffer===!1&&(V.push(se),je.push(se),i.invalidateFramebuffer(i.DRAW_FRAMEBUFFER,je)),i.invalidateFramebuffer(i.READ_FRAMEBUFFER,V))}if(t.bindFramebuffer(i.READ_FRAMEBUFFER,null),t.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),Ie)for(let Ve=0;Ve<A.length;Ve++){t.bindFramebuffer(i.FRAMEBUFFER,Ye.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+Ve,i.RENDERBUFFER,Ye.__webglColorRenderbuffer[Ve]);let fe=n.get(A[Ve]).__webglTexture;t.bindFramebuffer(i.FRAMEBUFFER,Ye.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+Ve,i.TEXTURE_2D,fe,0)}t.bindFramebuffer(i.DRAW_FRAMEBUFFER,Ye.__webglMultisampledFramebuffer)}else if(O.depthBuffer&&O.resolveDepthBuffer===!1&&u){let A=O.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT;i.invalidateFramebuffer(i.DRAW_FRAMEBUFFER,[A])}}}function bt(O){return Math.min(r.maxSamples,O.samples)}function Ue(O){let A=n.get(O);return O.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&A.__useRenderToTexture!==!1}function Te(O){let A=c.render.frame;p.get(O)!==A&&(p.set(O,A),O.update())}function _e(O,A){let Q=O.colorSpace,le=O.format,de=O.type;return O.isCompressedTexture===!0||O.isVideoTexture===!0||Q!==Lr&&Q!==Wi&&(It.getTransfer(Q)===kt?(le!==Yn||de!==ci)&&lt("WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):yt("WebGLTextures: Unsupported texture color space:",Q)),A}function ot(O){return typeof HTMLImageElement<"u"&&O instanceof HTMLImageElement?(d.width=O.naturalWidth||O.width,d.height=O.naturalHeight||O.height):typeof VideoFrame<"u"&&O instanceof VideoFrame?(d.width=O.displayWidth,d.height=O.displayHeight):(d.width=O.width,d.height=O.height),d}this.allocateTextureUnit=J,this.resetTextureUnits=j,this.setTexture2D=ce,this.setTexture2DArray=H,this.setTexture3D=Me,this.setTextureCube=ie,this.rebindTextures=Qt,this.setupRenderTarget=gt,this.updateRenderTargetMipmap=Ot,this.updateMultisampleRenderTarget=tt,this.setupDepthRenderbuffer=vt,this.setupFrameBufferTexture=ke,this.useMultisampledRTT=Ue}function j1(i,e){function t(n,r=Wi){let a,c=It.getTransfer(r);if(n===ci)return i.UNSIGNED_BYTE;if(n===tl)return i.UNSIGNED_SHORT_4_4_4_4;if(n===nl)return i.UNSIGNED_SHORT_5_5_5_1;if(n===Bu)return i.UNSIGNED_INT_5_9_9_9_REV;if(n===zu)return i.UNSIGNED_INT_10F_11F_11F_REV;if(n===ku)return i.BYTE;if(n===Ou)return i.SHORT;if(n===Os)return i.UNSIGNED_SHORT;if(n===el)return i.INT;if(n===cr)return i.UNSIGNED_INT;if(n===Ti)return i.FLOAT;if(n===Vr)return i.HALF_FLOAT;if(n===Vu)return i.ALPHA;if(n===Hu)return i.RGB;if(n===Yn)return i.RGBA;if(n===Cs)return i.DEPTH_COMPONENT;if(n===zs)return i.DEPTH_STENCIL;if(n===Gu)return i.RED;if(n===il)return i.RED_INTEGER;if(n===rl)return i.RG;if(n===sl)return i.RG_INTEGER;if(n===al)return i.RGBA_INTEGER;if(n===Za||n===Ja||n===Ka||n===Qa)if(c===kt)if(a=e.get("WEBGL_compressed_texture_s3tc_srgb"),a!==null){if(n===Za)return a.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(n===Ja)return a.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(n===Ka)return a.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(n===Qa)return a.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(a=e.get("WEBGL_compressed_texture_s3tc"),a!==null){if(n===Za)return a.COMPRESSED_RGB_S3TC_DXT1_EXT;if(n===Ja)return a.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(n===Ka)return a.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(n===Qa)return a.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(n===ol||n===cl||n===ll||n===hl)if(a=e.get("WEBGL_compressed_texture_pvrtc"),a!==null){if(n===ol)return a.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(n===cl)return a.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(n===ll)return a.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(n===hl)return a.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(n===ul||n===dl||n===fl)if(a=e.get("WEBGL_compressed_texture_etc"),a!==null){if(n===ul||n===dl)return c===kt?a.COMPRESSED_SRGB8_ETC2:a.COMPRESSED_RGB8_ETC2;if(n===fl)return c===kt?a.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:a.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(n===pl||n===ml||n===gl||n===xl||n===_l||n===vl||n===yl||n===bl||n===wl||n===Ml||n===Sl||n===El||n===Tl||n===Al)if(a=e.get("WEBGL_compressed_texture_astc"),a!==null){if(n===pl)return c===kt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:a.COMPRESSED_RGBA_ASTC_4x4_KHR;if(n===ml)return c===kt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:a.COMPRESSED_RGBA_ASTC_5x4_KHR;if(n===gl)return c===kt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:a.COMPRESSED_RGBA_ASTC_5x5_KHR;if(n===xl)return c===kt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:a.COMPRESSED_RGBA_ASTC_6x5_KHR;if(n===_l)return c===kt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:a.COMPRESSED_RGBA_ASTC_6x6_KHR;if(n===vl)return c===kt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:a.COMPRESSED_RGBA_ASTC_8x5_KHR;if(n===yl)return c===kt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:a.COMPRESSED_RGBA_ASTC_8x6_KHR;if(n===bl)return c===kt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:a.COMPRESSED_RGBA_ASTC_8x8_KHR;if(n===wl)return c===kt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:a.COMPRESSED_RGBA_ASTC_10x5_KHR;if(n===Ml)return c===kt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:a.COMPRESSED_RGBA_ASTC_10x6_KHR;if(n===Sl)return c===kt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:a.COMPRESSED_RGBA_ASTC_10x8_KHR;if(n===El)return c===kt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:a.COMPRESSED_RGBA_ASTC_10x10_KHR;if(n===Tl)return c===kt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:a.COMPRESSED_RGBA_ASTC_12x10_KHR;if(n===Al)return c===kt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:a.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(n===Cl||n===Rl||n===Il)if(a=e.get("EXT_texture_compression_bptc"),a!==null){if(n===Cl)return c===kt?a.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:a.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(n===Rl)return a.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(n===Il)return a.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(n===Pl||n===Fl||n===Dl||n===Ll)if(a=e.get("EXT_texture_compression_rgtc"),a!==null){if(n===Pl)return a.COMPRESSED_RED_RGTC1_EXT;if(n===Fl)return a.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(n===Dl)return a.COMPRESSED_RED_GREEN_RGTC2_EXT;if(n===Ll)return a.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return n===Bs?i.UNSIGNED_INT_24_8:i[n]!==void 0?i[n]:null}return{convert:t}}var q1=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,Y1=`
uniform sampler2DArray depthColor;
uniform float depthWidth;
uniform float depthHeight;

void main() {

	vec2 coord = vec2( gl_FragCoord.x / depthWidth, gl_FragCoord.y / depthHeight );

	if ( coord.x >= 1.0 ) {

		gl_FragDepth = texture( depthColor, vec3( coord.x - 1.0, coord.y, 1 ) ).r;

	} else {

		gl_FragDepth = texture( depthColor, vec3( coord.x, coord.y, 0 ) ).r;

	}

}`,hd=class{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(e,t){if(this.texture===null){let n=new ka(e.texture);(e.depthNear!==t.depthNear||e.depthFar!==t.depthFar)&&(this.depthNear=e.depthNear,this.depthFar=e.depthFar),this.texture=n}}getMesh(e){if(this.texture!==null&&this.mesh===null){let t=e.cameras[0].viewport,n=new qn({vertexShader:q1,fragmentShader:Y1,uniforms:{depthColor:{value:this.texture},depthWidth:{value:t.z},depthHeight:{value:t.w}}});this.mesh=new Ln(new kr(20,20),n)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}},ud=class extends Vi{constructor(e,t){super();let n=this,r=null,a=1,c=null,l="local-floor",u=1,d=null,p=null,m=null,x=null,_=null,b=null,E=typeof XRWebGLBinding<"u",w=new hd,v={},D=t.getContextAttributes(),L=null,N=null,z=[],P=[],T=new Tt,B=null,I=new fn;I.viewport=new Kt;let R=new fn;R.viewport=new Kt;let W=[I,R],j=new Hc,J=null,Y=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(re){let pe=z[re];return pe===void 0&&(pe=new Ls,z[re]=pe),pe.getTargetRaySpace()},this.getControllerGrip=function(re){let pe=z[re];return pe===void 0&&(pe=new Ls,z[re]=pe),pe.getGripSpace()},this.getHand=function(re){let pe=z[re];return pe===void 0&&(pe=new Ls,z[re]=pe),pe.getHandSpace()};function ce(re){let pe=P.indexOf(re.inputSource);if(pe===-1)return;let ke=z[pe];ke!==void 0&&(ke.update(re.inputSource,re.frame,d||c),ke.dispatchEvent({type:re.type,data:re.inputSource}))}function H(){r.removeEventListener("select",ce),r.removeEventListener("selectstart",ce),r.removeEventListener("selectend",ce),r.removeEventListener("squeeze",ce),r.removeEventListener("squeezestart",ce),r.removeEventListener("squeezeend",ce),r.removeEventListener("end",H),r.removeEventListener("inputsourceschange",Me);for(let re=0;re<z.length;re++){let pe=P[re];pe!==null&&(P[re]=null,z[re].disconnect(pe))}J=null,Y=null,w.reset();for(let re in v)delete v[re];e.setRenderTarget(L),_=null,x=null,m=null,r=null,N=null,Ct.stop(),n.isPresenting=!1,e.setPixelRatio(B),e.setSize(T.width,T.height,!1),n.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(re){a=re,n.isPresenting===!0&&lt("WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(re){l=re,n.isPresenting===!0&&lt("WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return d||c},this.setReferenceSpace=function(re){d=re},this.getBaseLayer=function(){return x!==null?x:_},this.getBinding=function(){return m===null&&E&&(m=new XRWebGLBinding(r,t)),m},this.getFrame=function(){return b},this.getSession=function(){return r},this.setSession=async function(re){if(r=re,r!==null){if(L=e.getRenderTarget(),r.addEventListener("select",ce),r.addEventListener("selectstart",ce),r.addEventListener("selectend",ce),r.addEventListener("squeeze",ce),r.addEventListener("squeezestart",ce),r.addEventListener("squeezeend",ce),r.addEventListener("end",H),r.addEventListener("inputsourceschange",Me),D.xrCompatible!==!0&&await t.makeXRCompatible(),B=e.getPixelRatio(),e.getSize(T),E&&"createProjectionLayer"in XRWebGLBinding.prototype){let ke=null,dt=null,Ze=null;D.depth&&(Ze=D.stencil?t.DEPTH24_STENCIL8:t.DEPTH_COMPONENT24,ke=D.stencil?zs:Cs,dt=D.stencil?Bs:cr);let vt={colorFormat:t.RGBA8,depthFormat:Ze,scaleFactor:a};m=this.getBinding(),x=m.createProjectionLayer(vt),r.updateRenderState({layers:[x]}),e.setPixelRatio(1),e.setSize(x.textureWidth,x.textureHeight,!1),N=new Hn(x.textureWidth,x.textureHeight,{format:Yn,type:ci,depthTexture:new Na(x.textureWidth,x.textureHeight,dt,void 0,void 0,void 0,void 0,void 0,void 0,ke),stencilBuffer:D.stencil,colorSpace:e.outputColorSpace,samples:D.antialias?4:0,resolveDepthBuffer:x.ignoreDepthValues===!1,resolveStencilBuffer:x.ignoreDepthValues===!1})}else{let ke={antialias:D.antialias,alpha:!0,depth:D.depth,stencil:D.stencil,framebufferScaleFactor:a};_=new XRWebGLLayer(r,t,ke),r.updateRenderState({baseLayer:_}),e.setPixelRatio(1),e.setSize(_.framebufferWidth,_.framebufferHeight,!1),N=new Hn(_.framebufferWidth,_.framebufferHeight,{format:Yn,type:ci,colorSpace:e.outputColorSpace,stencilBuffer:D.stencil,resolveDepthBuffer:_.ignoreDepthValues===!1,resolveStencilBuffer:_.ignoreDepthValues===!1})}N.isXRRenderTarget=!0,this.setFoveation(u),d=null,c=await r.requestReferenceSpace(l),Ct.setContext(r),Ct.start(),n.isPresenting=!0,n.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(r!==null)return r.environmentBlendMode},this.getDepthTexture=function(){return w.getDepthTexture()};function Me(re){for(let pe=0;pe<re.removed.length;pe++){let ke=re.removed[pe],dt=P.indexOf(ke);dt>=0&&(P[dt]=null,z[dt].disconnect(ke))}for(let pe=0;pe<re.added.length;pe++){let ke=re.added[pe],dt=P.indexOf(ke);if(dt===-1){for(let vt=0;vt<z.length;vt++)if(vt>=P.length){P.push(ke),dt=vt;break}else if(P[vt]===null){P[vt]=ke,dt=vt;break}if(dt===-1)break}let Ze=z[dt];Ze&&Ze.connect(ke)}}let ie=new ee,we=new ee;function X(re,pe,ke){ie.setFromMatrixPosition(pe.matrixWorld),we.setFromMatrixPosition(ke.matrixWorld);let dt=ie.distanceTo(we),Ze=pe.projectionMatrix.elements,vt=ke.projectionMatrix.elements,Qt=Ze[14]/(Ze[10]-1),gt=Ze[14]/(Ze[10]+1),Ot=(Ze[9]+1)/Ze[5],V=(Ze[9]-1)/Ze[5],je=(Ze[8]-1)/Ze[0],tt=(vt[8]+1)/vt[0],bt=Qt*je,Ue=Qt*tt,Te=dt/(-je+tt),_e=Te*-je;if(pe.matrixWorld.decompose(re.position,re.quaternion,re.scale),re.translateX(_e),re.translateZ(Te),re.matrixWorld.compose(re.position,re.quaternion,re.scale),re.matrixWorldInverse.copy(re.matrixWorld).invert(),Ze[10]===-1)re.projectionMatrix.copy(pe.projectionMatrix),re.projectionMatrixInverse.copy(pe.projectionMatrixInverse);else{let ot=Qt+Te,O=gt+Te,A=bt-_e,Q=Ue+(dt-_e),le=Ot*gt/O*ot,de=V*gt/O*ot;re.projectionMatrix.makePerspective(A,Q,le,de,ot,O),re.projectionMatrixInverse.copy(re.projectionMatrix).invert()}}function Be(re,pe){pe===null?re.matrixWorld.copy(re.matrix):re.matrixWorld.multiplyMatrices(pe.matrixWorld,re.matrix),re.matrixWorldInverse.copy(re.matrixWorld).invert()}this.updateCamera=function(re){if(r===null)return;let pe=re.near,ke=re.far;w.texture!==null&&(w.depthNear>0&&(pe=w.depthNear),w.depthFar>0&&(ke=w.depthFar)),j.near=R.near=I.near=pe,j.far=R.far=I.far=ke,(J!==j.near||Y!==j.far)&&(r.updateRenderState({depthNear:j.near,depthFar:j.far}),J=j.near,Y=j.far),j.layers.mask=re.layers.mask|6,I.layers.mask=j.layers.mask&3,R.layers.mask=j.layers.mask&5;let dt=re.parent,Ze=j.cameras;Be(j,dt);for(let vt=0;vt<Ze.length;vt++)Be(Ze[vt],dt);Ze.length===2?X(j,I,R):j.projectionMatrix.copy(I.projectionMatrix),ht(re,j,dt)};function ht(re,pe,ke){ke===null?re.matrix.copy(pe.matrixWorld):(re.matrix.copy(ke.matrixWorld),re.matrix.invert(),re.matrix.multiply(pe.matrixWorld)),re.matrix.decompose(re.position,re.quaternion,re.scale),re.updateMatrixWorld(!0),re.projectionMatrix.copy(pe.projectionMatrix),re.projectionMatrixInverse.copy(pe.projectionMatrixInverse),re.isPerspectiveCamera&&(re.fov=bc*2*Math.atan(1/re.projectionMatrix.elements[5]),re.zoom=1)}this.getCamera=function(){return j},this.getFoveation=function(){if(!(x===null&&_===null))return u},this.setFoveation=function(re){u=re,x!==null&&(x.fixedFoveation=re),_!==null&&_.fixedFoveation!==void 0&&(_.fixedFoveation=re)},this.hasDepthSensing=function(){return w.texture!==null},this.getDepthSensingMesh=function(){return w.getMesh(j)},this.getCameraTexture=function(re){return v[re]};let At=null;function Ut(re,pe){if(p=pe.getViewerPose(d||c),b=pe,p!==null){let ke=p.views;_!==null&&(e.setRenderTargetFramebuffer(N,_.framebuffer),e.setRenderTarget(N));let dt=!1;ke.length!==j.cameras.length&&(j.cameras.length=0,dt=!0);for(let gt=0;gt<ke.length;gt++){let Ot=ke[gt],V=null;if(_!==null)V=_.getViewport(Ot);else{let tt=m.getViewSubImage(x,Ot);V=tt.viewport,gt===0&&(e.setRenderTargetTextures(N,tt.colorTexture,tt.depthStencilTexture),e.setRenderTarget(N))}let je=W[gt];je===void 0&&(je=new fn,je.layers.enable(gt),je.viewport=new Kt,W[gt]=je),je.matrix.fromArray(Ot.transform.matrix),je.matrix.decompose(je.position,je.quaternion,je.scale),je.projectionMatrix.fromArray(Ot.projectionMatrix),je.projectionMatrixInverse.copy(je.projectionMatrix).invert(),je.viewport.set(V.x,V.y,V.width,V.height),gt===0&&(j.matrix.copy(je.matrix),j.matrix.decompose(j.position,j.quaternion,j.scale)),dt===!0&&j.cameras.push(je)}let Ze=r.enabledFeatures;if(Ze&&Ze.includes("depth-sensing")&&r.depthUsage=="gpu-optimized"&&E){m=n.getBinding();let gt=m.getDepthInformation(ke[0]);gt&&gt.isValid&&gt.texture&&w.init(gt,r.renderState)}if(Ze&&Ze.includes("camera-access")&&E){e.state.unbindTexture(),m=n.getBinding();for(let gt=0;gt<ke.length;gt++){let Ot=ke[gt].camera;if(Ot){let V=v[Ot];V||(V=new ka,v[Ot]=V);let je=m.getCameraImage(Ot);V.sourceTexture=je}}}}for(let ke=0;ke<z.length;ke++){let dt=P[ke],Ze=z[ke];dt!==null&&Ze!==void 0&&Ze.update(dt,pe,d||c)}At&&At(re,pe),pe.detectedPlanes&&n.dispatchEvent({type:"planesdetected",data:pe}),b=null}let Ct=new Im;Ct.setAnimationLoop(Ut),this.setAnimationLoop=function(re){At=re},this.dispose=function(){}}},Wr=new oi,Z1=new Zt;function J1(i,e){function t(w,v){w.matrixAutoUpdate===!0&&w.updateMatrix(),v.value.copy(w.matrix)}function n(w,v){v.color.getRGB(w.fogColor.value,Yu(i)),v.isFog?(w.fogNear.value=v.near,w.fogFar.value=v.far):v.isFogExp2&&(w.fogDensity.value=v.density)}function r(w,v,D,L,N){v.isMeshBasicMaterial||v.isMeshLambertMaterial?a(w,v):v.isMeshToonMaterial?(a(w,v),m(w,v)):v.isMeshPhongMaterial?(a(w,v),p(w,v)):v.isMeshStandardMaterial?(a(w,v),x(w,v),v.isMeshPhysicalMaterial&&_(w,v,N)):v.isMeshMatcapMaterial?(a(w,v),b(w,v)):v.isMeshDepthMaterial?a(w,v):v.isMeshDistanceMaterial?(a(w,v),E(w,v)):v.isMeshNormalMaterial?a(w,v):v.isLineBasicMaterial?(c(w,v),v.isLineDashedMaterial&&l(w,v)):v.isPointsMaterial?u(w,v,D,L):v.isSpriteMaterial?d(w,v):v.isShadowMaterial?(w.color.value.copy(v.color),w.opacity.value=v.opacity):v.isShaderMaterial&&(v.uniformsNeedUpdate=!1)}function a(w,v){w.opacity.value=v.opacity,v.color&&w.diffuse.value.copy(v.color),v.emissive&&w.emissive.value.copy(v.emissive).multiplyScalar(v.emissiveIntensity),v.map&&(w.map.value=v.map,t(v.map,w.mapTransform)),v.alphaMap&&(w.alphaMap.value=v.alphaMap,t(v.alphaMap,w.alphaMapTransform)),v.bumpMap&&(w.bumpMap.value=v.bumpMap,t(v.bumpMap,w.bumpMapTransform),w.bumpScale.value=v.bumpScale,v.side===Tn&&(w.bumpScale.value*=-1)),v.normalMap&&(w.normalMap.value=v.normalMap,t(v.normalMap,w.normalMapTransform),w.normalScale.value.copy(v.normalScale),v.side===Tn&&w.normalScale.value.negate()),v.displacementMap&&(w.displacementMap.value=v.displacementMap,t(v.displacementMap,w.displacementMapTransform),w.displacementScale.value=v.displacementScale,w.displacementBias.value=v.displacementBias),v.emissiveMap&&(w.emissiveMap.value=v.emissiveMap,t(v.emissiveMap,w.emissiveMapTransform)),v.specularMap&&(w.specularMap.value=v.specularMap,t(v.specularMap,w.specularMapTransform)),v.alphaTest>0&&(w.alphaTest.value=v.alphaTest);let D=e.get(v),L=D.envMap,N=D.envMapRotation;L&&(w.envMap.value=L,Wr.copy(N),Wr.x*=-1,Wr.y*=-1,Wr.z*=-1,L.isCubeTexture&&L.isRenderTargetTexture===!1&&(Wr.y*=-1,Wr.z*=-1),w.envMapRotation.value.setFromMatrix4(Z1.makeRotationFromEuler(Wr)),w.flipEnvMap.value=L.isCubeTexture&&L.isRenderTargetTexture===!1?-1:1,w.reflectivity.value=v.reflectivity,w.ior.value=v.ior,w.refractionRatio.value=v.refractionRatio),v.lightMap&&(w.lightMap.value=v.lightMap,w.lightMapIntensity.value=v.lightMapIntensity,t(v.lightMap,w.lightMapTransform)),v.aoMap&&(w.aoMap.value=v.aoMap,w.aoMapIntensity.value=v.aoMapIntensity,t(v.aoMap,w.aoMapTransform))}function c(w,v){w.diffuse.value.copy(v.color),w.opacity.value=v.opacity,v.map&&(w.map.value=v.map,t(v.map,w.mapTransform))}function l(w,v){w.dashSize.value=v.dashSize,w.totalSize.value=v.dashSize+v.gapSize,w.scale.value=v.scale}function u(w,v,D,L){w.diffuse.value.copy(v.color),w.opacity.value=v.opacity,w.size.value=v.size*D,w.scale.value=L*.5,v.map&&(w.map.value=v.map,t(v.map,w.uvTransform)),v.alphaMap&&(w.alphaMap.value=v.alphaMap,t(v.alphaMap,w.alphaMapTransform)),v.alphaTest>0&&(w.alphaTest.value=v.alphaTest)}function d(w,v){w.diffuse.value.copy(v.color),w.opacity.value=v.opacity,w.rotation.value=v.rotation,v.map&&(w.map.value=v.map,t(v.map,w.mapTransform)),v.alphaMap&&(w.alphaMap.value=v.alphaMap,t(v.alphaMap,w.alphaMapTransform)),v.alphaTest>0&&(w.alphaTest.value=v.alphaTest)}function p(w,v){w.specular.value.copy(v.specular),w.shininess.value=Math.max(v.shininess,1e-4)}function m(w,v){v.gradientMap&&(w.gradientMap.value=v.gradientMap)}function x(w,v){w.metalness.value=v.metalness,v.metalnessMap&&(w.metalnessMap.value=v.metalnessMap,t(v.metalnessMap,w.metalnessMapTransform)),w.roughness.value=v.roughness,v.roughnessMap&&(w.roughnessMap.value=v.roughnessMap,t(v.roughnessMap,w.roughnessMapTransform)),v.envMap&&(w.envMapIntensity.value=v.envMapIntensity)}function _(w,v,D){w.ior.value=v.ior,v.sheen>0&&(w.sheenColor.value.copy(v.sheenColor).multiplyScalar(v.sheen),w.sheenRoughness.value=v.sheenRoughness,v.sheenColorMap&&(w.sheenColorMap.value=v.sheenColorMap,t(v.sheenColorMap,w.sheenColorMapTransform)),v.sheenRoughnessMap&&(w.sheenRoughnessMap.value=v.sheenRoughnessMap,t(v.sheenRoughnessMap,w.sheenRoughnessMapTransform))),v.clearcoat>0&&(w.clearcoat.value=v.clearcoat,w.clearcoatRoughness.value=v.clearcoatRoughness,v.clearcoatMap&&(w.clearcoatMap.value=v.clearcoatMap,t(v.clearcoatMap,w.clearcoatMapTransform)),v.clearcoatRoughnessMap&&(w.clearcoatRoughnessMap.value=v.clearcoatRoughnessMap,t(v.clearcoatRoughnessMap,w.clearcoatRoughnessMapTransform)),v.clearcoatNormalMap&&(w.clearcoatNormalMap.value=v.clearcoatNormalMap,t(v.clearcoatNormalMap,w.clearcoatNormalMapTransform),w.clearcoatNormalScale.value.copy(v.clearcoatNormalScale),v.side===Tn&&w.clearcoatNormalScale.value.negate())),v.dispersion>0&&(w.dispersion.value=v.dispersion),v.iridescence>0&&(w.iridescence.value=v.iridescence,w.iridescenceIOR.value=v.iridescenceIOR,w.iridescenceThicknessMinimum.value=v.iridescenceThicknessRange[0],w.iridescenceThicknessMaximum.value=v.iridescenceThicknessRange[1],v.iridescenceMap&&(w.iridescenceMap.value=v.iridescenceMap,t(v.iridescenceMap,w.iridescenceMapTransform)),v.iridescenceThicknessMap&&(w.iridescenceThicknessMap.value=v.iridescenceThicknessMap,t(v.iridescenceThicknessMap,w.iridescenceThicknessMapTransform))),v.transmission>0&&(w.transmission.value=v.transmission,w.transmissionSamplerMap.value=D.texture,w.transmissionSamplerSize.value.set(D.width,D.height),v.transmissionMap&&(w.transmissionMap.value=v.transmissionMap,t(v.transmissionMap,w.transmissionMapTransform)),w.thickness.value=v.thickness,v.thicknessMap&&(w.thicknessMap.value=v.thicknessMap,t(v.thicknessMap,w.thicknessMapTransform)),w.attenuationDistance.value=v.attenuationDistance,w.attenuationColor.value.copy(v.attenuationColor)),v.anisotropy>0&&(w.anisotropyVector.value.set(v.anisotropy*Math.cos(v.anisotropyRotation),v.anisotropy*Math.sin(v.anisotropyRotation)),v.anisotropyMap&&(w.anisotropyMap.value=v.anisotropyMap,t(v.anisotropyMap,w.anisotropyMapTransform))),w.specularIntensity.value=v.specularIntensity,w.specularColor.value.copy(v.specularColor),v.specularColorMap&&(w.specularColorMap.value=v.specularColorMap,t(v.specularColorMap,w.specularColorMapTransform)),v.specularIntensityMap&&(w.specularIntensityMap.value=v.specularIntensityMap,t(v.specularIntensityMap,w.specularIntensityMapTransform))}function b(w,v){v.matcap&&(w.matcap.value=v.matcap)}function E(w,v){let D=e.get(v).light;w.referencePosition.value.setFromMatrixPosition(D.matrixWorld),w.nearDistance.value=D.shadow.camera.near,w.farDistance.value=D.shadow.camera.far}return{refreshFogUniforms:n,refreshMaterialUniforms:r}}function K1(i,e,t,n){let r={},a={},c=[],l=i.getParameter(i.MAX_UNIFORM_BUFFER_BINDINGS);function u(D,L){let N=L.program;n.uniformBlockBinding(D,N)}function d(D,L){let N=r[D.id];N===void 0&&(b(D),N=p(D),r[D.id]=N,D.addEventListener("dispose",w));let z=L.program;n.updateUBOMapping(D,z);let P=e.render.frame;a[D.id]!==P&&(x(D),a[D.id]=P)}function p(D){let L=m();D.__bindingPointIndex=L;let N=i.createBuffer(),z=D.__size,P=D.usage;return i.bindBuffer(i.UNIFORM_BUFFER,N),i.bufferData(i.UNIFORM_BUFFER,z,P),i.bindBuffer(i.UNIFORM_BUFFER,null),i.bindBufferBase(i.UNIFORM_BUFFER,L,N),N}function m(){for(let D=0;D<l;D++)if(c.indexOf(D)===-1)return c.push(D),D;return yt("WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function x(D){let L=r[D.id],N=D.uniforms,z=D.__cache;i.bindBuffer(i.UNIFORM_BUFFER,L);for(let P=0,T=N.length;P<T;P++){let B=Array.isArray(N[P])?N[P]:[N[P]];for(let I=0,R=B.length;I<R;I++){let W=B[I];if(_(W,P,I,z)===!0){let j=W.__offset,J=Array.isArray(W.value)?W.value:[W.value],Y=0;for(let ce=0;ce<J.length;ce++){let H=J[ce],Me=E(H);typeof H=="number"||typeof H=="boolean"?(W.__data[0]=H,i.bufferSubData(i.UNIFORM_BUFFER,j+Y,W.__data)):H.isMatrix3?(W.__data[0]=H.elements[0],W.__data[1]=H.elements[1],W.__data[2]=H.elements[2],W.__data[3]=0,W.__data[4]=H.elements[3],W.__data[5]=H.elements[4],W.__data[6]=H.elements[5],W.__data[7]=0,W.__data[8]=H.elements[6],W.__data[9]=H.elements[7],W.__data[10]=H.elements[8],W.__data[11]=0):(H.toArray(W.__data,Y),Y+=Me.storage/Float32Array.BYTES_PER_ELEMENT)}i.bufferSubData(i.UNIFORM_BUFFER,j,W.__data)}}}i.bindBuffer(i.UNIFORM_BUFFER,null)}function _(D,L,N,z){let P=D.value,T=L+"_"+N;if(z[T]===void 0)return typeof P=="number"||typeof P=="boolean"?z[T]=P:z[T]=P.clone(),!0;{let B=z[T];if(typeof P=="number"||typeof P=="boolean"){if(B!==P)return z[T]=P,!0}else if(B.equals(P)===!1)return B.copy(P),!0}return!1}function b(D){let L=D.uniforms,N=0,z=16;for(let T=0,B=L.length;T<B;T++){let I=Array.isArray(L[T])?L[T]:[L[T]];for(let R=0,W=I.length;R<W;R++){let j=I[R],J=Array.isArray(j.value)?j.value:[j.value];for(let Y=0,ce=J.length;Y<ce;Y++){let H=J[Y],Me=E(H),ie=N%z,we=ie%Me.boundary,X=ie+we;N+=we,X!==0&&z-X<Me.storage&&(N+=z-X),j.__data=new Float32Array(Me.storage/Float32Array.BYTES_PER_ELEMENT),j.__offset=N,N+=Me.storage}}}let P=N%z;return P>0&&(N+=z-P),D.__size=N,D.__cache={},this}function E(D){let L={boundary:0,storage:0};return typeof D=="number"||typeof D=="boolean"?(L.boundary=4,L.storage=4):D.isVector2?(L.boundary=8,L.storage=8):D.isVector3||D.isColor?(L.boundary=16,L.storage=12):D.isVector4?(L.boundary=16,L.storage=16):D.isMatrix3?(L.boundary=48,L.storage=48):D.isMatrix4?(L.boundary=64,L.storage=64):D.isTexture?lt("WebGLRenderer: Texture samplers can not be part of an uniforms group."):lt("WebGLRenderer: Unsupported uniform value type.",D),L}function w(D){let L=D.target;L.removeEventListener("dispose",w);let N=c.indexOf(L.__bindingPointIndex);c.splice(N,1),i.deleteBuffer(r[L.id]),delete r[L.id],delete a[L.id]}function v(){for(let D in r)i.deleteBuffer(r[D]);c=[],r={},a={}}return{bind:u,update:d,dispose:v}}var Q1=new Uint16Array([11481,15204,11534,15171,11808,15015,12385,14843,12894,14716,13396,14600,13693,14483,13976,14366,14237,14171,14405,13961,14511,13770,14605,13598,14687,13444,14760,13305,14822,13066,14876,12857,14923,12675,14963,12517,14997,12379,15025,12230,15049,12023,15070,11843,15086,11687,15100,11551,15111,11433,15120,11330,15127,11217,15132,11060,15135,10922,15138,10801,15139,10695,15139,10600,13012,14923,13020,14917,13064,14886,13176,14800,13349,14666,13513,14526,13724,14398,13960,14230,14200,14020,14383,13827,14488,13651,14583,13491,14667,13348,14740,13132,14803,12908,14856,12713,14901,12542,14938,12394,14968,12241,14992,12017,15010,11822,15024,11654,15034,11507,15041,11380,15044,11269,15044,11081,15042,10913,15037,10764,15031,10635,15023,10520,15014,10419,15003,10330,13657,14676,13658,14673,13670,14660,13698,14622,13750,14547,13834,14442,13956,14317,14112,14093,14291,13889,14407,13704,14499,13538,14586,13389,14664,13201,14733,12966,14792,12758,14842,12577,14882,12418,14915,12272,14940,12033,14959,11826,14972,11646,14980,11490,14983,11355,14983,11212,14979,11008,14971,10830,14961,10675,14950,10540,14936,10420,14923,10315,14909,10204,14894,10041,14089,14460,14090,14459,14096,14452,14112,14431,14141,14388,14186,14305,14252,14130,14341,13941,14399,13756,14467,13585,14539,13430,14610,13272,14677,13026,14737,12808,14790,12617,14833,12449,14869,12303,14896,12065,14916,11845,14929,11655,14937,11490,14939,11347,14936,11184,14930,10970,14921,10783,14912,10621,14900,10480,14885,10356,14867,10247,14848,10062,14827,9894,14805,9745,14400,14208,14400,14206,14402,14198,14406,14174,14415,14122,14427,14035,14444,13913,14469,13767,14504,13613,14548,13463,14598,13324,14651,13082,14704,12858,14752,12658,14795,12483,14831,12330,14860,12106,14881,11875,14895,11675,14903,11501,14905,11351,14903,11178,14900,10953,14892,10757,14880,10589,14865,10442,14847,10313,14827,10162,14805,9965,14782,9792,14757,9642,14731,9507,14562,13883,14562,13883,14563,13877,14566,13862,14570,13830,14576,13773,14584,13689,14595,13582,14613,13461,14637,13336,14668,13120,14704,12897,14741,12695,14776,12516,14808,12358,14835,12150,14856,11910,14870,11701,14878,11519,14882,11361,14884,11187,14880,10951,14871,10748,14858,10572,14842,10418,14823,10286,14801,10099,14777,9897,14751,9722,14725,9567,14696,9430,14666,9309,14702,13604,14702,13604,14702,13600,14703,13591,14705,13570,14707,13533,14709,13477,14712,13400,14718,13305,14727,13106,14743,12907,14762,12716,14784,12539,14807,12380,14827,12190,14844,11943,14855,11727,14863,11539,14870,11376,14871,11204,14868,10960,14858,10748,14845,10565,14829,10406,14809,10269,14786,10058,14761,9852,14734,9671,14705,9512,14674,9374,14641,9253,14608,9076,14821,13366,14821,13365,14821,13364,14821,13358,14821,13344,14821,13320,14819,13252,14817,13145,14815,13011,14814,12858,14817,12698,14823,12539,14832,12389,14841,12214,14850,11968,14856,11750,14861,11558,14866,11390,14867,11226,14862,10972,14853,10754,14840,10565,14823,10401,14803,10259,14780,10032,14754,9820,14725,9635,14694,9473,14661,9333,14627,9203,14593,8988,14557,8798,14923,13014,14922,13014,14922,13012,14922,13004,14920,12987,14919,12957,14915,12907,14909,12834,14902,12738,14894,12623,14888,12498,14883,12370,14880,12203,14878,11970,14875,11759,14873,11569,14874,11401,14872,11243,14865,10986,14855,10762,14842,10568,14825,10401,14804,10255,14781,10017,14754,9799,14725,9611,14692,9445,14658,9301,14623,9139,14587,8920,14548,8729,14509,8562,15008,12672,15008,12672,15008,12671,15007,12667,15005,12656,15001,12637,14997,12605,14989,12556,14978,12490,14966,12407,14953,12313,14940,12136,14927,11934,14914,11742,14903,11563,14896,11401,14889,11247,14879,10992,14866,10767,14851,10570,14833,10400,14812,10252,14789,10007,14761,9784,14731,9592,14698,9424,14663,9279,14627,9088,14588,8868,14548,8676,14508,8508,14467,8360,15080,12386,15080,12386,15079,12385,15078,12383,15076,12378,15072,12367,15066,12347,15057,12315,15045,12253,15030,12138,15012,11998,14993,11845,14972,11685,14951,11530,14935,11383,14920,11228,14904,10981,14887,10762,14870,10567,14850,10397,14827,10248,14803,9997,14774,9771,14743,9578,14710,9407,14674,9259,14637,9048,14596,8826,14555,8632,14514,8464,14471,8317,14427,8182,15139,12008,15139,12008,15138,12008,15137,12007,15135,12003,15130,11990,15124,11969,15115,11929,15102,11872,15086,11794,15064,11693,15041,11581,15013,11459,14987,11336,14966,11170,14944,10944,14921,10738,14898,10552,14875,10387,14850,10239,14824,9983,14794,9758,14762,9563,14728,9392,14692,9244,14653,9014,14611,8791,14569,8597,14526,8427,14481,8281,14436,8110,14391,7885,15188,11617,15188,11617,15187,11617,15186,11618,15183,11617,15179,11612,15173,11601,15163,11581,15150,11546,15133,11495,15110,11427,15083,11346,15051,11246,15024,11057,14996,10868,14967,10687,14938,10517,14911,10362,14882,10206,14853,9956,14821,9737,14787,9543,14752,9375,14715,9228,14675,8980,14632,8760,14589,8565,14544,8395,14498,8248,14451,8049,14404,7824,14357,7630,15228,11298,15228,11298,15227,11299,15226,11301,15223,11303,15219,11302,15213,11299,15204,11290,15191,11271,15174,11217,15150,11129,15119,11015,15087,10886,15057,10744,15024,10599,14990,10455,14957,10318,14924,10143,14891,9911,14856,9701,14820,9516,14782,9352,14744,9200,14703,8946,14659,8725,14615,8533,14568,8366,14521,8220,14472,7992,14423,7770,14374,7578,14315,7408,15260,10819,15260,10819,15259,10822,15258,10826,15256,10832,15251,10836,15246,10841,15237,10838,15225,10821,15207,10788,15183,10734,15151,10660,15120,10571,15087,10469,15049,10359,15012,10249,14974,10041,14937,9837,14900,9647,14860,9475,14820,9320,14779,9147,14736,8902,14691,8688,14646,8499,14598,8335,14549,8189,14499,7940,14448,7720,14397,7529,14347,7363,14256,7218,15285,10410,15285,10411,15285,10413,15284,10418,15282,10425,15278,10434,15272,10442,15264,10449,15252,10445,15235,10433,15210,10403,15179,10358,15149,10301,15113,10218,15073,10059,15033,9894,14991,9726,14951,9565,14909,9413,14865,9273,14822,9073,14777,8845,14730,8641,14682,8459,14633,8300,14583,8129,14531,7883,14479,7670,14426,7482,14373,7321,14305,7176,14201,6939,15305,9939,15305,9940,15305,9945,15304,9955,15302,9967,15298,9989,15293,10010,15286,10033,15274,10044,15258,10045,15233,10022,15205,9975,15174,9903,15136,9808,15095,9697,15053,9578,15009,9451,14965,9327,14918,9198,14871,8973,14825,8766,14775,8579,14725,8408,14675,8259,14622,8058,14569,7821,14515,7615,14460,7435,14405,7276,14350,7108,14256,6866,14149,6653,15321,9444,15321,9445,15321,9448,15320,9458,15317,9470,15314,9490,15310,9515,15302,9540,15292,9562,15276,9579,15251,9577,15226,9559,15195,9519,15156,9463,15116,9389,15071,9304,15025,9208,14978,9023,14927,8838,14878,8661,14827,8496,14774,8344,14722,8206,14667,7973,14612,7749,14556,7555,14499,7382,14443,7229,14385,7025,14322,6791,14210,6588,14100,6409,15333,8920,15333,8921,15332,8927,15332,8943,15329,8965,15326,9002,15322,9048,15316,9106,15307,9162,15291,9204,15267,9221,15244,9221,15212,9196,15175,9134,15133,9043,15088,8930,15040,8801,14990,8665,14938,8526,14886,8391,14830,8261,14775,8087,14719,7866,14661,7664,14603,7482,14544,7322,14485,7178,14426,6936,14367,6713,14281,6517,14166,6348,14054,6198,15341,8360,15341,8361,15341,8366,15341,8379,15339,8399,15336,8431,15332,8473,15326,8527,15318,8585,15302,8632,15281,8670,15258,8690,15227,8690,15191,8664,15149,8612,15104,8543,15055,8456,15001,8360,14948,8259,14892,8122,14834,7923,14776,7734,14716,7558,14656,7397,14595,7250,14534,7070,14472,6835,14410,6628,14350,6443,14243,6283,14125,6135,14010,5889,15348,7715,15348,7717,15348,7725,15347,7745,15345,7780,15343,7836,15339,7905,15334,8e3,15326,8103,15310,8193,15293,8239,15270,8270,15240,8287,15204,8283,15163,8260,15118,8223,15067,8143,15014,8014,14958,7873,14899,7723,14839,7573,14778,7430,14715,7293,14652,7164,14588,6931,14524,6720,14460,6531,14396,6362,14330,6210,14207,6015,14086,5781,13969,5576,15352,7114,15352,7116,15352,7128,15352,7159,15350,7195,15348,7237,15345,7299,15340,7374,15332,7457,15317,7544,15301,7633,15280,7703,15251,7754,15216,7775,15176,7767,15131,7733,15079,7670,15026,7588,14967,7492,14906,7387,14844,7278,14779,7171,14714,6965,14648,6770,14581,6587,14515,6420,14448,6269,14382,6123,14299,5881,14172,5665,14049,5477,13929,5310,15355,6329,15355,6330,15355,6339,15355,6362,15353,6410,15351,6472,15349,6572,15344,6688,15337,6835,15323,6985,15309,7142,15287,7220,15260,7277,15226,7310,15188,7326,15142,7318,15090,7285,15036,7239,14976,7177,14914,7045,14849,6892,14782,6736,14714,6581,14645,6433,14576,6293,14506,6164,14438,5946,14369,5733,14270,5540,14140,5369,14014,5216,13892,5043,15357,5483,15357,5484,15357,5496,15357,5528,15356,5597,15354,5692,15351,5835,15347,6011,15339,6195,15328,6317,15314,6446,15293,6566,15268,6668,15235,6746,15197,6796,15152,6811,15101,6790,15046,6748,14985,6673,14921,6583,14854,6479,14785,6371,14714,6259,14643,6149,14571,5946,14499,5750,14428,5567,14358,5401,14242,5250,14109,5111,13980,4870,13856,4657,15359,4555,15359,4557,15358,4573,15358,4633,15357,4715,15355,4841,15353,5061,15349,5216,15342,5391,15331,5577,15318,5770,15299,5967,15274,6150,15243,6223,15206,6280,15161,6310,15111,6317,15055,6300,14994,6262,14928,6208,14860,6141,14788,5994,14715,5838,14641,5684,14566,5529,14492,5384,14418,5247,14346,5121,14216,4892,14079,4682,13948,4496,13822,4330,15359,3498,15359,3501,15359,3520,15359,3598,15358,3719,15356,3860,15355,4137,15351,4305,15344,4563,15334,4809,15321,5116,15303,5273,15280,5418,15250,5547,15214,5653,15170,5722,15120,5761,15064,5763,15002,5733,14935,5673,14865,5597,14792,5504,14716,5400,14640,5294,14563,5185,14486,5041,14410,4841,14335,4655,14191,4482,14051,4325,13918,4183,13790,4012,15360,2282,15360,2285,15360,2306,15360,2401,15359,2547,15357,2748,15355,3103,15352,3349,15345,3675,15336,4020,15324,4272,15307,4496,15285,4716,15255,4908,15220,5086,15178,5170,15128,5214,15072,5234,15010,5231,14943,5206,14871,5166,14796,5102,14718,4971,14639,4833,14559,4687,14480,4541,14402,4401,14315,4268,14167,4142,14025,3958,13888,3747,13759,3556,15360,923,15360,925,15360,946,15360,1052,15359,1214,15357,1494,15356,1892,15352,2274,15346,2663,15338,3099,15326,3393,15309,3679,15288,3980,15260,4183,15226,4325,15185,4437,15136,4517,15080,4570,15018,4591,14950,4581,14877,4545,14800,4485,14720,4411,14638,4325,14556,4231,14475,4136,14395,3988,14297,3803,14145,3628,13999,3465,13861,3314,13729,3177,15360,263,15360,264,15360,272,15360,325,15359,407,15358,548,15356,780,15352,1144,15347,1580,15339,2099,15328,2425,15312,2795,15292,3133,15264,3329,15232,3517,15191,3689,15143,3819,15088,3923,15025,3978,14956,3999,14882,3979,14804,3931,14722,3855,14639,3756,14554,3645,14470,3529,14388,3409,14279,3289,14124,3173,13975,3055,13834,2848,13701,2658,15360,49,15360,49,15360,52,15360,75,15359,111,15358,201,15356,283,15353,519,15348,726,15340,1045,15329,1415,15314,1795,15295,2173,15269,2410,15237,2649,15197,2866,15150,3054,15095,3140,15032,3196,14963,3228,14888,3236,14808,3224,14725,3191,14639,3146,14553,3088,14466,2976,14382,2836,14262,2692,14103,2549,13952,2409,13808,2278,13674,2154,15360,4,15360,4,15360,4,15360,13,15359,33,15358,59,15357,112,15353,199,15348,302,15341,456,15331,628,15316,827,15297,1082,15272,1332,15241,1601,15202,1851,15156,2069,15101,2172,15039,2256,14970,2314,14894,2348,14813,2358,14728,2344,14640,2311,14551,2263,14463,2203,14376,2133,14247,2059,14084,1915,13930,1761,13784,1609,13648,1464,15360,0,15360,0,15360,0,15360,3,15359,18,15358,26,15357,53,15354,80,15348,97,15341,165,15332,238,15318,326,15299,427,15275,529,15245,654,15207,771,15161,885,15108,994,15046,1089,14976,1170,14900,1229,14817,1266,14731,1284,14641,1282,14550,1260,14460,1223,14370,1174,14232,1116,14066,1050,13909,981,13761,910,13623,839]),$i=null;function eE(){return $i===null&&($i=new Ac(Q1,32,32,rl,Vr),$i.minFilter=Vn,$i.magFilter=Vn,$i.wrapS=bi,$i.wrapT=bi,$i.generateMipmaps=!1,$i.needsUpdate=!0),$i}var Ol=class{constructor(e={}){let{canvas:t=im(),context:n=null,depth:r=!0,stencil:a=!1,alpha:c=!1,antialias:l=!1,premultipliedAlpha:u=!0,preserveDrawingBuffer:d=!1,powerPreference:p="default",failIfMajorPerformanceCaveat:m=!1,reversedDepthBuffer:x=!1}=e;this.isWebGLRenderer=!0;let _;if(n!==null){if(typeof WebGLRenderingContext<"u"&&n instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");_=n.getContextAttributes().alpha}else _=c;let b=new Set([al,sl,il]),E=new Set([ci,cr,Os,Bs,tl,nl]),w=new Uint32Array(4),v=new Int32Array(4),D=null,L=null,N=[],z=[];this.domElement=t,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.toneMapping=Gi,this.toneMappingExposure=1,this.transmissionResolutionScale=1;let P=this,T=!1;this._outputColorSpace=zn;let B=0,I=0,R=null,W=-1,j=null,J=new Kt,Y=new Kt,ce=null,H=new ft(0),Me=0,ie=t.width,we=t.height,X=1,Be=null,ht=null,At=new Kt(0,0,ie,we),Ut=new Kt(0,0,ie,we),Ct=!1,re=new Us,pe=!1,ke=!1,dt=new Zt,Ze=new ee,vt=new Kt,Qt={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0},gt=!1;function Ot(){return R===null?X:1}let V=n;function je(F,q){return t.getContext(F,q)}try{let F={alpha:!0,depth:r,stencil:a,antialias:l,premultipliedAlpha:u,preserveDrawingBuffer:d,powerPreference:p,failIfMajorPerformanceCaveat:m};if("setAttribute"in t&&t.setAttribute("data-engine",`three.js r${"181"}`),t.addEventListener("webglcontextlost",be,!1),t.addEventListener("webglcontextrestored",ue,!1),t.addEventListener("webglcontextcreationerror",He,!1),V===null){let q="webgl2";if(V=je(q,F),V===null)throw je(q)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}}catch(F){throw F("WebGLRenderer: "+F.message),F}let tt,bt,Ue,Te,_e,ot,O,A,Q,le,de,se,Ye,Ie,Xe,Ve,fe,Se,Qe,Je,Ee,$e,G,Pe;function Ce(){tt=new gS(V),tt.init(),$e=new j1(V,tt),bt=new oS(V,tt,e,$e),Ue=new $1(V,tt),bt.reversedDepthBuffer&&x&&Ue.buffers.depth.setReversed(!0),Te=new vS(V),_e=new F1,ot=new X1(V,tt,Ue,_e,bt,$e,Te),O=new lS(P),A=new mS(P),Q=new Mb(V),G=new sS(V,Q),le=new xS(V,Q,Te,G),de=new bS(V,le,Q,Te),Qe=new yS(V,bt,ot),Ve=new cS(_e),se=new P1(P,O,A,tt,bt,G,Ve),Ye=new J1(P,_e),Ie=new L1,Xe=new z1(tt),Se=new rS(P,O,A,Ue,de,_,u),fe=new G1(P,de,bt),Pe=new K1(V,Te,bt,Ue),Je=new aS(V,tt,Te),Ee=new _S(V,tt,Te),Te.programs=se.programs,P.capabilities=bt,P.extensions=tt,P.properties=_e,P.renderLists=Ie,P.shadowMap=fe,P.state=Ue,P.info=Te}Ce();let Re=new ud(P,V);this.xr=Re,this.getContext=function(){return V},this.getContextAttributes=function(){return V.getContextAttributes()},this.forceContextLoss=function(){let F=tt.get("WEBGL_lose_context");F&&F.loseContext()},this.forceContextRestore=function(){let F=tt.get("WEBGL_lose_context");F&&F.restoreContext()},this.getPixelRatio=function(){return X},this.setPixelRatio=function(F){F!==void 0&&(X=F,this.setSize(ie,we,!1))},this.getSize=function(F){return F.set(ie,we)},this.setSize=function(F,q,te=!0){if(Re.isPresenting){lt("WebGLRenderer: Can't change size while VR device is presenting.");return}ie=F,we=q,t.width=Math.floor(F*X),t.height=Math.floor(q*X),te===!0&&(t.style.width=F+"px",t.style.height=q+"px"),this.setViewport(0,0,F,q)},this.getDrawingBufferSize=function(F){return F.set(ie*X,we*X).floor()},this.setDrawingBufferSize=function(F,q,te){ie=F,we=q,X=te,t.width=Math.floor(F*te),t.height=Math.floor(q*te),this.setViewport(0,0,F,q)},this.getCurrentViewport=function(F){return F.copy(J)},this.getViewport=function(F){return F.copy(At)},this.setViewport=function(F,q,te,ne){F.isVector4?At.set(F.x,F.y,F.z,F.w):At.set(F,q,te,ne),Ue.viewport(J.copy(At).multiplyScalar(X).round())},this.getScissor=function(F){return F.copy(Ut)},this.setScissor=function(F,q,te,ne){F.isVector4?Ut.set(F.x,F.y,F.z,F.w):Ut.set(F,q,te,ne),Ue.scissor(Y.copy(Ut).multiplyScalar(X).round())},this.getScissorTest=function(){return Ct},this.setScissorTest=function(F){Ue.setScissorTest(Ct=F)},this.setOpaqueSort=function(F){Be=F},this.setTransparentSort=function(F){ht=F},this.getClearColor=function(F){return F.copy(Se.getClearColor())},this.setClearColor=function(){Se.setClearColor(...arguments)},this.getClearAlpha=function(){return Se.getClearAlpha()},this.setClearAlpha=function(){Se.setClearAlpha(...arguments)},this.clear=function(F=!0,q=!0,te=!0){let ne=0;if(F){let Z=!1;if(R!==null){let Ae=R.texture.format;Z=b.has(Ae)}if(Z){let Ae=R.texture.type,Le=E.has(Ae),ze=Se.getClearColor(),Ne=Se.getClearAlpha(),nt=ze.r,rt=ze.g,Ke=ze.b;Le?(w[0]=nt,w[1]=rt,w[2]=Ke,w[3]=Ne,V.clearBufferuiv(V.COLOR,0,w)):(v[0]=nt,v[1]=rt,v[2]=Ke,v[3]=Ne,V.clearBufferiv(V.COLOR,0,v))}else ne|=V.COLOR_BUFFER_BIT}q&&(ne|=V.DEPTH_BUFFER_BIT),te&&(ne|=V.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),V.clear(ne)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){t.removeEventListener("webglcontextlost",be,!1),t.removeEventListener("webglcontextrestored",ue,!1),t.removeEventListener("webglcontextcreationerror",He,!1),Se.dispose(),Ie.dispose(),Xe.dispose(),_e.dispose(),O.dispose(),A.dispose(),de.dispose(),G.dispose(),Pe.dispose(),se.dispose(),Re.dispose(),Re.removeEventListener("sessionstart",lo),Re.removeEventListener("sessionend",$l),li.stop()};function be(F){F.preventDefault(),qu("WebGLRenderer: Context Lost."),T=!0}function ue(){qu("WebGLRenderer: Context Restored."),T=!1;let F=Te.autoReset,q=fe.enabled,te=fe.autoUpdate,ne=fe.needsUpdate,Z=fe.type;Ce(),Te.autoReset=F,fe.enabled=q,fe.autoUpdate=te,fe.needsUpdate=ne,fe.type=Z}function He(F){yt("WebGLRenderer: A WebGL context could not be created. Reason: ",F.statusMessage)}function ut(F){let q=F.target;q.removeEventListener("dispose",ut),zt(q)}function zt(F){Ft(F),_e.remove(F)}function Ft(F){let q=_e.get(F).programs;q!==void 0&&(q.forEach(function(te){se.releaseProgram(te)}),F.isShaderMaterial&&se.releaseShaderCache(F))}this.renderBufferDirect=function(F,q,te,ne,Z,Ae){q===null&&(q=Qt);let Le=Z.isMesh&&Z.matrixWorld.determinant()<0,ze=jl(F,q,te,ne,Z);Ue.setMaterial(ne,Le);let Ne=te.index,nt=1;if(ne.wireframe===!0){if(Ne=le.getWireframeAttribute(te),Ne===void 0)return;nt=2}let rt=te.drawRange,Ke=te.attributes.position,Oe=rt.start*nt,Lt=(rt.start+rt.count)*nt;Ae!==null&&(Oe=Math.max(Oe,Ae.start*nt),Lt=Math.min(Lt,(Ae.start+Ae.count)*nt)),Ne!==null?(Oe=Math.max(Oe,0),Lt=Math.min(Lt,Ne.count)):Ke!=null&&(Oe=Math.max(Oe,0),Lt=Math.min(Lt,Ke.count));let Wt=Lt-Oe;if(Wt<0||Wt===1/0)return;G.setup(Z,ne,ze,te,Ne);let Nt,Dt=Je;if(Ne!==null&&(Nt=Q.get(Ne),Dt=Ee,Dt.setIndex(Nt)),Z.isMesh)ne.wireframe===!0?(Ue.setLineWidth(ne.wireframeLinewidth*Ot()),Dt.setMode(V.LINES)):Dt.setMode(V.TRIANGLES);else if(Z.isLine){let qe=ne.linewidth;qe===void 0&&(qe=1),Ue.setLineWidth(qe*Ot()),Z.isLineSegments?Dt.setMode(V.LINES):Z.isLineLoop?Dt.setMode(V.LINE_LOOP):Dt.setMode(V.LINE_STRIP)}else Z.isPoints?Dt.setMode(V.POINTS):Z.isSprite&&Dt.setMode(V.TRIANGLES);if(Z.isBatchedMesh)if(Z._multiDrawInstances!==null)Is("WebGLRenderer: renderMultiDrawInstances has been deprecated and will be removed in r184. Append to renderMultiDraw arguments and use indirection."),Dt.renderMultiDrawInstances(Z._multiDrawStarts,Z._multiDrawCounts,Z._multiDrawCount,Z._multiDrawInstances);else if(tt.get("WEBGL_multi_draw"))Dt.renderMultiDraw(Z._multiDrawStarts,Z._multiDrawCounts,Z._multiDrawCount);else{let qe=Z._multiDrawStarts,Ht=Z._multiDrawCounts,wt=Z._multiDrawCount,Sn=Ne?Q.get(Ne).bytesPerElement:1,gn=_e.get(ne).currentProgram.getUniforms();for(let xn=0;xn<wt;xn++)gn.setValue(V,"_gl_DrawID",xn),Dt.render(qe[xn]/Sn,Ht[xn])}else if(Z.isInstancedMesh)Dt.renderInstances(Oe,Wt,Z.count);else if(te.isInstancedBufferGeometry){let qe=te._maxInstanceCount!==void 0?te._maxInstanceCount:1/0,Ht=Math.min(te.instanceCount,qe);Dt.renderInstances(Oe,Wt,Ht)}else Dt.render(Oe,Wt)};function Un(F,q,te){F.transparent===!0&&F.side===Si&&F.forceSinglePass===!1?(F.side=Tn,F.needsUpdate=!0,ur(F,q,te),F.side=zi,F.needsUpdate=!0,ur(F,q,te),F.side=Si):ur(F,q,te)}this.compile=function(F,q,te=null){te===null&&(te=F),L=Xe.get(te),L.init(q),z.push(L),te.traverseVisible(function(Z){Z.isLight&&Z.layers.test(q.layers)&&(L.pushLight(Z),Z.castShadow&&L.pushShadow(Z))}),F!==te&&F.traverseVisible(function(Z){Z.isLight&&Z.layers.test(q.layers)&&(L.pushLight(Z),Z.castShadow&&L.pushShadow(Z))}),L.setupLights();let ne=new Set;return F.traverse(function(Z){if(!(Z.isMesh||Z.isPoints||Z.isLine||Z.isSprite))return;let Ae=Z.material;if(Ae)if(Array.isArray(Ae))for(let Le=0;Le<Ae.length;Le++){let ze=Ae[Le];Un(ze,te,Z),ne.add(ze)}else Un(Ae,te,Z),ne.add(Ae)}),L=z.pop(),ne},this.compileAsync=function(F,q,te=null){let ne=this.compile(F,q,te);return new Promise(Z=>{function Ae(){if(ne.forEach(function(Le){_e.get(Le).currentProgram.isReady()&&ne.delete(Le)}),ne.size===0){Z(F);return}setTimeout(Ae,10)}tt.get("KHR_parallel_shader_compile")!==null?Ae():setTimeout(Ae,10)})};let Nn=null;function co(F){Nn&&Nn(F)}function lo(){li.stop()}function $l(){li.start()}let li=new Im;li.setAnimationLoop(co),typeof self<"u"&&li.setContext(self),this.setAnimationLoop=function(F){Nn=F,Re.setAnimationLoop(F),F===null?li.stop():li.start()},Re.addEventListener("sessionstart",lo),Re.addEventListener("sessionend",$l),this.render=function(F,q){if(q!==void 0&&q.isCamera!==!0){yt("WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(T===!0)return;if(F.matrixWorldAutoUpdate===!0&&F.updateMatrixWorld(),q.parent===null&&q.matrixWorldAutoUpdate===!0&&q.updateMatrixWorld(),Re.enabled===!0&&Re.isPresenting===!0&&(Re.cameraAutoUpdate===!0&&Re.updateCamera(q),q=Re.getCamera()),F.isScene===!0&&F.onBeforeRender(P,F,q,R),L=Xe.get(F,z.length),L.init(q),z.push(L),dt.multiplyMatrices(q.projectionMatrix,q.matrixWorldInverse),re.setFromProjectionMatrix(dt,ri,q.reversedDepth),ke=this.localClippingEnabled,pe=Ve.init(this.clippingPlanes,ke),D=Ie.get(F,N.length),D.init(),N.push(D),Re.enabled===!0&&Re.isPresenting===!0){let Ae=P.xr.getDepthSensingMesh();Ae!==null&&hi(Ae,q,-1/0,P.sortObjects)}hi(F,q,0,P.sortObjects),D.finish(),P.sortObjects===!0&&D.sort(Be,ht),gt=Re.enabled===!1||Re.isPresenting===!1||Re.hasDepthSensing()===!1,gt&&Se.addToRenderList(D,F),this.info.render.frame++,pe===!0&&Ve.beginShadows();let te=L.state.shadowsArray;fe.render(te,F,q),pe===!0&&Ve.endShadows(),this.info.autoReset===!0&&this.info.reset();let ne=D.opaque,Z=D.transmissive;if(L.setupLights(),q.isArrayCamera){let Ae=q.cameras;if(Z.length>0)for(let Le=0,ze=Ae.length;Le<ze;Le++){let Ne=Ae[Le];ge(ne,Z,F,Ne)}gt&&Se.render(F);for(let Le=0,ze=Ae.length;Le<ze;Le++){let Ne=Ae[Le];Xl(D,F,Ne,Ne.viewport)}}else Z.length>0&&ge(ne,Z,F,q),gt&&Se.render(F),Xl(D,F,q);R!==null&&I===0&&(ot.updateMultisampleRenderTarget(R),ot.updateRenderTargetMipmap(R)),F.isScene===!0&&F.onAfterRender(P,F,q),G.resetDefaultState(),W=-1,j=null,z.pop(),z.length>0?(L=z[z.length-1],pe===!0&&Ve.setGlobalState(P.clippingPlanes,L.state.camera)):L=null,N.pop(),N.length>0?D=N[N.length-1]:D=null};function hi(F,q,te,ne){if(F.visible===!1)return;if(F.layers.test(q.layers)){if(F.isGroup)te=F.renderOrder;else if(F.isLOD)F.autoUpdate===!0&&F.update(q);else if(F.isLight)L.pushLight(F),F.castShadow&&L.pushShadow(F);else if(F.isSprite){if(!F.frustumCulled||re.intersectsSprite(F)){ne&&vt.setFromMatrixPosition(F.matrixWorld).applyMatrix4(dt);let Le=de.update(F),ze=F.material;ze.visible&&D.push(F,Le,ze,te,vt.z,null)}}else if((F.isMesh||F.isLine||F.isPoints)&&(!F.frustumCulled||re.intersectsObject(F))){let Le=de.update(F),ze=F.material;if(ne&&(F.boundingSphere!==void 0?(F.boundingSphere===null&&F.computeBoundingSphere(),vt.copy(F.boundingSphere.center)):(Le.boundingSphere===null&&Le.computeBoundingSphere(),vt.copy(Le.boundingSphere.center)),vt.applyMatrix4(F.matrixWorld).applyMatrix4(dt)),Array.isArray(ze)){let Ne=Le.groups;for(let nt=0,rt=Ne.length;nt<rt;nt++){let Ke=Ne[nt],Oe=ze[Ke.materialIndex];Oe&&Oe.visible&&D.push(F,Le,Oe,te,vt.z,Ke)}}else ze.visible&&D.push(F,Le,ze,te,vt.z,null)}}let Ae=F.children;for(let Le=0,ze=Ae.length;Le<ze;Le++)hi(Ae[Le],q,te,ne)}function Xl(F,q,te,ne){let{opaque:Z,transmissive:Ae,transparent:Le}=F;L.setupLightsView(te),pe===!0&&Ve.setGlobalState(P.clippingPlanes,te),ne&&Ue.viewport(J.copy(ne)),Z.length>0&&me(Z,q,te),Ae.length>0&&me(Ae,q,te),Le.length>0&&me(Le,q,te),Ue.buffers.depth.setTest(!0),Ue.buffers.depth.setMask(!0),Ue.buffers.color.setMask(!0),Ue.setPolygonOffset(!1)}function ge(F,q,te,ne){if((te.isScene===!0?te.overrideMaterial:null)!==null)return;L.state.transmissionRenderTarget[ne.id]===void 0&&(L.state.transmissionRenderTarget[ne.id]=new Hn(1,1,{generateMipmaps:!0,type:tt.has("EXT_color_buffer_half_float")||tt.has("EXT_color_buffer_float")?Vr:ci,minFilter:or,samples:4,stencilBuffer:a,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:It.workingColorSpace}));let Ae=L.state.transmissionRenderTarget[ne.id],Le=ne.viewport||J;Ae.setSize(Le.z*P.transmissionResolutionScale,Le.w*P.transmissionResolutionScale);let ze=P.getRenderTarget(),Ne=P.getActiveCubeFace(),nt=P.getActiveMipmapLevel();P.setRenderTarget(Ae),P.getClearColor(H),Me=P.getClearAlpha(),Me<1&&P.setClearColor(16777215,.5),P.clear(),gt&&Se.render(te);let rt=P.toneMapping;P.toneMapping=Gi;let Ke=ne.viewport;if(ne.viewport!==void 0&&(ne.viewport=void 0),L.setupLightsView(ne),pe===!0&&Ve.setGlobalState(P.clippingPlanes,ne),me(F,te,ne),ot.updateMultisampleRenderTarget(Ae),ot.updateRenderTargetMipmap(Ae),tt.has("WEBGL_multisampled_render_to_texture")===!1){let Oe=!1;for(let Lt=0,Wt=q.length;Lt<Wt;Lt++){let Nt=q[Lt],{object:Dt,geometry:qe,material:Ht,group:wt}=Nt;if(Ht.side===Si&&Dt.layers.test(ne.layers)){let Sn=Ht.side;Ht.side=Tn,Ht.needsUpdate=!0,Zn(Dt,te,ne,qe,Ht,wt),Ht.side=Sn,Ht.needsUpdate=!0,Oe=!0}}Oe===!0&&(ot.updateMultisampleRenderTarget(Ae),ot.updateRenderTargetMipmap(Ae))}P.setRenderTarget(ze,Ne,nt),P.setClearColor(H,Me),Ke!==void 0&&(ne.viewport=Ke),P.toneMapping=rt}function me(F,q,te){let ne=q.isScene===!0?q.overrideMaterial:null;for(let Z=0,Ae=F.length;Z<Ae;Z++){let Le=F[Z],{object:ze,geometry:Ne,group:nt}=Le,rt=Le.material;rt.allowOverride===!0&&ne!==null&&(rt=ne),ze.layers.test(te.layers)&&Zn(ze,q,te,Ne,rt,nt)}}function Zn(F,q,te,ne,Z,Ae){F.onBeforeRender(P,q,te,ne,Z,Ae),F.modelViewMatrix.multiplyMatrices(te.matrixWorldInverse,F.matrixWorld),F.normalMatrix.getNormalMatrix(F.modelViewMatrix),Z.onBeforeRender(P,q,te,ne,F,Ae),Z.transparent===!0&&Z.side===Si&&Z.forceSinglePass===!1?(Z.side=Tn,Z.needsUpdate=!0,P.renderBufferDirect(te,q,ne,Z,F,Ae),Z.side=zi,Z.needsUpdate=!0,P.renderBufferDirect(te,q,ne,Z,F,Ae),Z.side=Si):P.renderBufferDirect(te,q,ne,Z,F,Ae),F.onAfterRender(P,q,te,ne,Z,Ae)}function ur(F,q,te){q.isScene!==!0&&(q=Qt);let ne=_e.get(F),Z=L.state.lights,Ae=L.state.shadowsArray,Le=Z.state.version,ze=se.getParameters(F,Z.state,Ae,q,te),Ne=se.getProgramCacheKey(ze),nt=ne.programs;ne.environment=F.isMeshStandardMaterial?q.environment:null,ne.fog=q.fog,ne.envMap=(F.isMeshStandardMaterial?A:O).get(F.envMap||ne.environment),ne.envMapRotation=ne.environment!==null&&F.envMap===null?q.environmentRotation:F.envMapRotation,nt===void 0&&(F.addEventListener("dispose",ut),nt=new Map,ne.programs=nt);let rt=nt.get(Ne);if(rt!==void 0){if(ne.currentProgram===rt&&ne.lightsStateVersion===Le)return Wn(F,ze),rt}else ze.uniforms=se.getUniforms(F),F.onBeforeCompile(ze,P),rt=se.acquireProgram(ze,Ne),nt.set(Ne,rt),ne.uniforms=ze.uniforms;let Ke=ne.uniforms;return(!F.isShaderMaterial&&!F.isRawShaderMaterial||F.clipping===!0)&&(Ke.clippingPlanes=Ve.uniform),Wn(F,ze),ne.needsLights=Xr(F),ne.lightsStateVersion=Le,ne.needsLights&&(Ke.ambientLightColor.value=Z.state.ambient,Ke.lightProbe.value=Z.state.probe,Ke.directionalLights.value=Z.state.directional,Ke.directionalLightShadows.value=Z.state.directionalShadow,Ke.spotLights.value=Z.state.spot,Ke.spotLightShadows.value=Z.state.spotShadow,Ke.rectAreaLights.value=Z.state.rectArea,Ke.ltc_1.value=Z.state.rectAreaLTC1,Ke.ltc_2.value=Z.state.rectAreaLTC2,Ke.pointLights.value=Z.state.point,Ke.pointLightShadows.value=Z.state.pointShadow,Ke.hemisphereLights.value=Z.state.hemi,Ke.directionalShadowMap.value=Z.state.directionalShadowMap,Ke.directionalShadowMatrix.value=Z.state.directionalShadowMatrix,Ke.spotShadowMap.value=Z.state.spotShadowMap,Ke.spotLightMatrix.value=Z.state.spotLightMatrix,Ke.spotLightMap.value=Z.state.spotLightMap,Ke.pointShadowMap.value=Z.state.pointShadowMap,Ke.pointShadowMatrix.value=Z.state.pointShadowMatrix),ne.currentProgram=rt,ne.uniformsList=null,rt}function Ci(F){if(F.uniformsList===null){let q=F.currentProgram.getUniforms();F.uniformsList=Hs.seqWithValue(q.seq,F.uniforms)}return F.uniformsList}function Wn(F,q){let te=_e.get(F);te.outputColorSpace=q.outputColorSpace,te.batching=q.batching,te.batchingColor=q.batchingColor,te.instancing=q.instancing,te.instancingColor=q.instancingColor,te.instancingMorph=q.instancingMorph,te.skinning=q.skinning,te.morphTargets=q.morphTargets,te.morphNormals=q.morphNormals,te.morphColors=q.morphColors,te.morphTargetsCount=q.morphTargetsCount,te.numClippingPlanes=q.numClippingPlanes,te.numIntersection=q.numClipIntersection,te.vertexAlphas=q.vertexAlphas,te.vertexTangents=q.vertexTangents,te.toneMapping=q.toneMapping}function jl(F,q,te,ne,Z){q.isScene!==!0&&(q=Qt),ot.resetTextureUnits();let Ae=q.fog,Le=ne.isMeshStandardMaterial?q.environment:null,ze=R===null?P.outputColorSpace:R.isXRRenderTarget===!0?R.texture.colorSpace:Lr,Ne=(ne.isMeshStandardMaterial?A:O).get(ne.envMap||Le),nt=ne.vertexColors===!0&&!!te.attributes.color&&te.attributes.color.itemSize===4,rt=!!te.attributes.tangent&&(!!ne.normalMap||ne.anisotropy>0),Ke=!!te.morphAttributes.position,Oe=!!te.morphAttributes.normal,Lt=!!te.morphAttributes.color,Wt=Gi;ne.toneMapped&&(R===null||R.isXRRenderTarget===!0)&&(Wt=P.toneMapping);let Nt=te.morphAttributes.position||te.morphAttributes.normal||te.morphAttributes.color,Dt=Nt!==void 0?Nt.length:0,qe=_e.get(ne),Ht=L.state.lights;if(pe===!0&&(ke===!0||F!==j)){let on=F===j&&ne.id===W;Ve.setState(ne,F,on)}let wt=!1;ne.version===qe.__version?(qe.needsLights&&qe.lightsStateVersion!==Ht.state.version||qe.outputColorSpace!==ze||Z.isBatchedMesh&&qe.batching===!1||!Z.isBatchedMesh&&qe.batching===!0||Z.isBatchedMesh&&qe.batchingColor===!0&&Z.colorTexture===null||Z.isBatchedMesh&&qe.batchingColor===!1&&Z.colorTexture!==null||Z.isInstancedMesh&&qe.instancing===!1||!Z.isInstancedMesh&&qe.instancing===!0||Z.isSkinnedMesh&&qe.skinning===!1||!Z.isSkinnedMesh&&qe.skinning===!0||Z.isInstancedMesh&&qe.instancingColor===!0&&Z.instanceColor===null||Z.isInstancedMesh&&qe.instancingColor===!1&&Z.instanceColor!==null||Z.isInstancedMesh&&qe.instancingMorph===!0&&Z.morphTexture===null||Z.isInstancedMesh&&qe.instancingMorph===!1&&Z.morphTexture!==null||qe.envMap!==Ne||ne.fog===!0&&qe.fog!==Ae||qe.numClippingPlanes!==void 0&&(qe.numClippingPlanes!==Ve.numPlanes||qe.numIntersection!==Ve.numIntersection)||qe.vertexAlphas!==nt||qe.vertexTangents!==rt||qe.morphTargets!==Ke||qe.morphNormals!==Oe||qe.morphColors!==Lt||qe.toneMapping!==Wt||qe.morphTargetsCount!==Dt)&&(wt=!0):(wt=!0,qe.__version=ne.version);let Sn=qe.currentProgram;wt===!0&&(Sn=ur(ne,q,Z));let gn=!1,xn=!1,ct=!1,$t=Sn.getUniforms(),ln=qe.uniforms;if(Ue.useProgram(Sn.program)&&(gn=!0,xn=!0,ct=!0),ne.id!==W&&(W=ne.id,xn=!0),gn||j!==F){Ue.buffers.depth.getReversed()&&F.reversedDepth!==!0&&(F._reversedDepth=!0,F.updateProjectionMatrix()),$t.setValue(V,"projectionMatrix",F.projectionMatrix),$t.setValue(V,"viewMatrix",F.matrixWorldInverse);let _n=$t.map.cameraPosition;_n!==void 0&&_n.setValue(V,Ze.setFromMatrixPosition(F.matrixWorld)),bt.logarithmicDepthBuffer&&$t.setValue(V,"logDepthBufFC",2/(Math.log(F.far+1)/Math.LN2)),(ne.isMeshPhongMaterial||ne.isMeshToonMaterial||ne.isMeshLambertMaterial||ne.isMeshBasicMaterial||ne.isMeshStandardMaterial||ne.isShaderMaterial)&&$t.setValue(V,"isOrthographic",F.isOrthographicCamera===!0),j!==F&&(j=F,xn=!0,ct=!0)}if(Z.isSkinnedMesh){$t.setOptional(V,Z,"bindMatrix"),$t.setOptional(V,Z,"bindMatrixInverse");let on=Z.skeleton;on&&(on.boneTexture===null&&on.computeBoneTexture(),$t.setValue(V,"boneTexture",on.boneTexture,ot))}Z.isBatchedMesh&&($t.setOptional(V,Z,"batchingTexture"),$t.setValue(V,"batchingTexture",Z._matricesTexture,ot),$t.setOptional(V,Z,"batchingIdTexture"),$t.setValue(V,"batchingIdTexture",Z._indirectTexture,ot),$t.setOptional(V,Z,"batchingColorTexture"),Z._colorsTexture!==null&&$t.setValue(V,"batchingColorTexture",Z._colorsTexture,ot));let Rn=te.morphAttributes;if((Rn.position!==void 0||Rn.normal!==void 0||Rn.color!==void 0)&&Qe.update(Z,te,Sn),(xn||qe.receiveShadow!==Z.receiveShadow)&&(qe.receiveShadow=Z.receiveShadow,$t.setValue(V,"receiveShadow",Z.receiveShadow)),ne.isMeshGouraudMaterial&&ne.envMap!==null&&(ln.envMap.value=Ne,ln.flipEnvMap.value=Ne.isCubeTexture&&Ne.isRenderTargetTexture===!1?-1:1),ne.isMeshStandardMaterial&&ne.envMap===null&&q.environment!==null&&(ln.envMapIntensity.value=q.environmentIntensity),ln.dfgLUT!==void 0&&(ln.dfgLUT.value=eE()),xn&&($t.setValue(V,"toneMappingExposure",P.toneMappingExposure),qe.needsLights&&Jn(ln,ct),Ae&&ne.fog===!0&&Ye.refreshFogUniforms(ln,Ae),Ye.refreshMaterialUniforms(ln,ne,X,we,L.state.transmissionRenderTarget[F.id]),Hs.upload(V,Ci(qe),ln,ot)),ne.isShaderMaterial&&ne.uniformsNeedUpdate===!0&&(Hs.upload(V,Ci(qe),ln,ot),ne.uniformsNeedUpdate=!1),ne.isSpriteMaterial&&$t.setValue(V,"center",Z.center),$t.setValue(V,"modelViewMatrix",Z.modelViewMatrix),$t.setValue(V,"normalMatrix",Z.normalMatrix),$t.setValue(V,"modelMatrix",Z.matrixWorld),ne.isShaderMaterial||ne.isRawShaderMaterial){let on=ne.uniformsGroups;for(let _n=0,jr=on.length;_n<jr;_n++){let Ri=on[_n];Pe.update(Ri,Sn),Pe.bind(Ri,Sn)}}return Sn}function Jn(F,q){F.ambientLightColor.needsUpdate=q,F.lightProbe.needsUpdate=q,F.directionalLights.needsUpdate=q,F.directionalLightShadows.needsUpdate=q,F.pointLights.needsUpdate=q,F.pointLightShadows.needsUpdate=q,F.spotLights.needsUpdate=q,F.spotLightShadows.needsUpdate=q,F.rectAreaLights.needsUpdate=q,F.hemisphereLights.needsUpdate=q}function Xr(F){return F.isMeshLambertMaterial||F.isMeshToonMaterial||F.isMeshPhongMaterial||F.isMeshStandardMaterial||F.isShadowMaterial||F.isShaderMaterial&&F.lights===!0}this.getActiveCubeFace=function(){return B},this.getActiveMipmapLevel=function(){return I},this.getRenderTarget=function(){return R},this.setRenderTargetTextures=function(F,q,te){let ne=_e.get(F);ne.__autoAllocateDepthBuffer=F.resolveDepthBuffer===!1,ne.__autoAllocateDepthBuffer===!1&&(ne.__useRenderToTexture=!1),_e.get(F.texture).__webglTexture=q,_e.get(F.depthTexture).__webglTexture=ne.__autoAllocateDepthBuffer?void 0:te,ne.__hasExternalTextures=!0},this.setRenderTargetFramebuffer=function(F,q){let te=_e.get(F);te.__webglFramebuffer=q,te.__useDefaultFramebuffer=q===void 0};let ql=V.createFramebuffer();this.setRenderTarget=function(F,q=0,te=0){R=F,B=q,I=te;let ne=!0,Z=null,Ae=!1,Le=!1;if(F){let Ne=_e.get(F);if(Ne.__useDefaultFramebuffer!==void 0)Ue.bindFramebuffer(V.FRAMEBUFFER,null),ne=!1;else if(Ne.__webglFramebuffer===void 0)ot.setupRenderTarget(F);else if(Ne.__hasExternalTextures)ot.rebindTextures(F,_e.get(F.texture).__webglTexture,_e.get(F.depthTexture).__webglTexture);else if(F.depthBuffer){let Ke=F.depthTexture;if(Ne.__boundDepthTexture!==Ke){if(Ke!==null&&_e.has(Ke)&&(F.width!==Ke.image.width||F.height!==Ke.image.height))throw new Error("WebGLRenderTarget: Attached DepthTexture is initialized to the incorrect size.");ot.setupDepthRenderbuffer(F)}}let nt=F.texture;(nt.isData3DTexture||nt.isDataArrayTexture||nt.isCompressedArrayTexture)&&(Le=!0);let rt=_e.get(F).__webglFramebuffer;F.isWebGLCubeRenderTarget?(Array.isArray(rt[q])?Z=rt[q][te]:Z=rt[q],Ae=!0):F.samples>0&&ot.useMultisampledRTT(F)===!1?Z=_e.get(F).__webglMultisampledFramebuffer:Array.isArray(rt)?Z=rt[te]:Z=rt,J.copy(F.viewport),Y.copy(F.scissor),ce=F.scissorTest}else J.copy(At).multiplyScalar(X).floor(),Y.copy(Ut).multiplyScalar(X).floor(),ce=Ct;if(te!==0&&(Z=ql),Ue.bindFramebuffer(V.FRAMEBUFFER,Z)&&ne&&Ue.drawBuffers(F,Z),Ue.viewport(J),Ue.scissor(Y),Ue.setScissorTest(ce),Ae){let Ne=_e.get(F.texture);V.framebufferTexture2D(V.FRAMEBUFFER,V.COLOR_ATTACHMENT0,V.TEXTURE_CUBE_MAP_POSITIVE_X+q,Ne.__webglTexture,te)}else if(Le){let Ne=q;for(let nt=0;nt<F.textures.length;nt++){let rt=_e.get(F.textures[nt]);V.framebufferTextureLayer(V.FRAMEBUFFER,V.COLOR_ATTACHMENT0+nt,rt.__webglTexture,te,Ne)}}else if(F!==null&&te!==0){let Ne=_e.get(F.texture);V.framebufferTexture2D(V.FRAMEBUFFER,V.COLOR_ATTACHMENT0,V.TEXTURE_2D,Ne.__webglTexture,te)}W=-1},this.readRenderTargetPixels=function(F,q,te,ne,Z,Ae,Le,ze=0){if(!(F&&F.isWebGLRenderTarget)){yt("WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let Ne=_e.get(F).__webglFramebuffer;if(F.isWebGLCubeRenderTarget&&Le!==void 0&&(Ne=Ne[Le]),Ne){Ue.bindFramebuffer(V.FRAMEBUFFER,Ne);try{let nt=F.textures[ze],rt=nt.format,Ke=nt.type;if(!bt.textureFormatReadable(rt)){yt("WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!bt.textureTypeReadable(Ke)){yt("WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}q>=0&&q<=F.width-ne&&te>=0&&te<=F.height-Z&&(F.textures.length>1&&V.readBuffer(V.COLOR_ATTACHMENT0+ze),V.readPixels(q,te,ne,Z,$e.convert(rt),$e.convert(Ke),Ae))}finally{let nt=R!==null?_e.get(R).__webglFramebuffer:null;Ue.bindFramebuffer(V.FRAMEBUFFER,nt)}}},this.readRenderTargetPixelsAsync=async function(F,q,te,ne,Z,Ae,Le,ze=0){if(!(F&&F.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let Ne=_e.get(F).__webglFramebuffer;if(F.isWebGLCubeRenderTarget&&Le!==void 0&&(Ne=Ne[Le]),Ne)if(q>=0&&q<=F.width-ne&&te>=0&&te<=F.height-Z){Ue.bindFramebuffer(V.FRAMEBUFFER,Ne);let nt=F.textures[ze],rt=nt.format,Ke=nt.type;if(!bt.textureFormatReadable(rt))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!bt.textureTypeReadable(Ke))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");let Oe=V.createBuffer();V.bindBuffer(V.PIXEL_PACK_BUFFER,Oe),V.bufferData(V.PIXEL_PACK_BUFFER,Ae.byteLength,V.STREAM_READ),F.textures.length>1&&V.readBuffer(V.COLOR_ATTACHMENT0+ze),V.readPixels(q,te,ne,Z,$e.convert(rt),$e.convert(Ke),0);let Lt=R!==null?_e.get(R).__webglFramebuffer:null;Ue.bindFramebuffer(V.FRAMEBUFFER,Lt);let Wt=V.fenceSync(V.SYNC_GPU_COMMANDS_COMPLETE,0);return V.flush(),await rm(V,Wt,4),V.bindBuffer(V.PIXEL_PACK_BUFFER,Oe),V.getBufferSubData(V.PIXEL_PACK_BUFFER,0,Ae),V.deleteBuffer(Oe),V.deleteSync(Wt),Ae}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")},this.copyFramebufferToTexture=function(F,q=null,te=0){let ne=Math.pow(2,-te),Z=Math.floor(F.image.width*ne),Ae=Math.floor(F.image.height*ne),Le=q!==null?q.x:0,ze=q!==null?q.y:0;ot.setTexture2D(F,0),V.copyTexSubImage2D(V.TEXTURE_2D,te,0,0,Le,ze,Z,Ae),Ue.unbindTexture()};let Yl=V.createFramebuffer(),Kn=V.createFramebuffer();this.copyTextureToTexture=function(F,q,te=null,ne=null,Z=0,Ae=null){Ae===null&&(Z!==0?(Is("WebGLRenderer: copyTextureToTexture function signature has changed to support src and dst mipmap levels."),Ae=Z,Z=0):Ae=0);let Le,ze,Ne,nt,rt,Ke,Oe,Lt,Wt,Nt=F.isCompressedTexture?F.mipmaps[Ae]:F.image;if(te!==null)Le=te.max.x-te.min.x,ze=te.max.y-te.min.y,Ne=te.isBox3?te.max.z-te.min.z:1,nt=te.min.x,rt=te.min.y,Ke=te.isBox3?te.min.z:0;else{let Rn=Math.pow(2,-Z);Le=Math.floor(Nt.width*Rn),ze=Math.floor(Nt.height*Rn),F.isDataArrayTexture?Ne=Nt.depth:F.isData3DTexture?Ne=Math.floor(Nt.depth*Rn):Ne=1,nt=0,rt=0,Ke=0}ne!==null?(Oe=ne.x,Lt=ne.y,Wt=ne.z):(Oe=0,Lt=0,Wt=0);let Dt=$e.convert(q.format),qe=$e.convert(q.type),Ht;q.isData3DTexture?(ot.setTexture3D(q,0),Ht=V.TEXTURE_3D):q.isDataArrayTexture||q.isCompressedArrayTexture?(ot.setTexture2DArray(q,0),Ht=V.TEXTURE_2D_ARRAY):(ot.setTexture2D(q,0),Ht=V.TEXTURE_2D),V.pixelStorei(V.UNPACK_FLIP_Y_WEBGL,q.flipY),V.pixelStorei(V.UNPACK_PREMULTIPLY_ALPHA_WEBGL,q.premultiplyAlpha),V.pixelStorei(V.UNPACK_ALIGNMENT,q.unpackAlignment);let wt=V.getParameter(V.UNPACK_ROW_LENGTH),Sn=V.getParameter(V.UNPACK_IMAGE_HEIGHT),gn=V.getParameter(V.UNPACK_SKIP_PIXELS),xn=V.getParameter(V.UNPACK_SKIP_ROWS),ct=V.getParameter(V.UNPACK_SKIP_IMAGES);V.pixelStorei(V.UNPACK_ROW_LENGTH,Nt.width),V.pixelStorei(V.UNPACK_IMAGE_HEIGHT,Nt.height),V.pixelStorei(V.UNPACK_SKIP_PIXELS,nt),V.pixelStorei(V.UNPACK_SKIP_ROWS,rt),V.pixelStorei(V.UNPACK_SKIP_IMAGES,Ke);let $t=F.isDataArrayTexture||F.isData3DTexture,ln=q.isDataArrayTexture||q.isData3DTexture;if(F.isDepthTexture){let Rn=_e.get(F),on=_e.get(q),_n=_e.get(Rn.__renderTarget),jr=_e.get(on.__renderTarget);Ue.bindFramebuffer(V.READ_FRAMEBUFFER,_n.__webglFramebuffer),Ue.bindFramebuffer(V.DRAW_FRAMEBUFFER,jr.__webglFramebuffer);for(let Ri=0;Ri<Ne;Ri++)$t&&(V.framebufferTextureLayer(V.READ_FRAMEBUFFER,V.COLOR_ATTACHMENT0,_e.get(F).__webglTexture,Z,Ke+Ri),V.framebufferTextureLayer(V.DRAW_FRAMEBUFFER,V.COLOR_ATTACHMENT0,_e.get(q).__webglTexture,Ae,Wt+Ri)),V.blitFramebuffer(nt,rt,Le,ze,Oe,Lt,Le,ze,V.DEPTH_BUFFER_BIT,V.NEAREST);Ue.bindFramebuffer(V.READ_FRAMEBUFFER,null),Ue.bindFramebuffer(V.DRAW_FRAMEBUFFER,null)}else if(Z!==0||F.isRenderTargetTexture||_e.has(F)){let Rn=_e.get(F),on=_e.get(q);Ue.bindFramebuffer(V.READ_FRAMEBUFFER,Yl),Ue.bindFramebuffer(V.DRAW_FRAMEBUFFER,Kn);for(let _n=0;_n<Ne;_n++)$t?V.framebufferTextureLayer(V.READ_FRAMEBUFFER,V.COLOR_ATTACHMENT0,Rn.__webglTexture,Z,Ke+_n):V.framebufferTexture2D(V.READ_FRAMEBUFFER,V.COLOR_ATTACHMENT0,V.TEXTURE_2D,Rn.__webglTexture,Z),ln?V.framebufferTextureLayer(V.DRAW_FRAMEBUFFER,V.COLOR_ATTACHMENT0,on.__webglTexture,Ae,Wt+_n):V.framebufferTexture2D(V.DRAW_FRAMEBUFFER,V.COLOR_ATTACHMENT0,V.TEXTURE_2D,on.__webglTexture,Ae),Z!==0?V.blitFramebuffer(nt,rt,Le,ze,Oe,Lt,Le,ze,V.COLOR_BUFFER_BIT,V.NEAREST):ln?V.copyTexSubImage3D(Ht,Ae,Oe,Lt,Wt+_n,nt,rt,Le,ze):V.copyTexSubImage2D(Ht,Ae,Oe,Lt,nt,rt,Le,ze);Ue.bindFramebuffer(V.READ_FRAMEBUFFER,null),Ue.bindFramebuffer(V.DRAW_FRAMEBUFFER,null)}else ln?F.isDataTexture||F.isData3DTexture?V.texSubImage3D(Ht,Ae,Oe,Lt,Wt,Le,ze,Ne,Dt,qe,Nt.data):q.isCompressedArrayTexture?V.compressedTexSubImage3D(Ht,Ae,Oe,Lt,Wt,Le,ze,Ne,Dt,Nt.data):V.texSubImage3D(Ht,Ae,Oe,Lt,Wt,Le,ze,Ne,Dt,qe,Nt):F.isDataTexture?V.texSubImage2D(V.TEXTURE_2D,Ae,Oe,Lt,Le,ze,Dt,qe,Nt.data):F.isCompressedTexture?V.compressedTexSubImage2D(V.TEXTURE_2D,Ae,Oe,Lt,Nt.width,Nt.height,Dt,Nt.data):V.texSubImage2D(V.TEXTURE_2D,Ae,Oe,Lt,Le,ze,Dt,qe,Nt);V.pixelStorei(V.UNPACK_ROW_LENGTH,wt),V.pixelStorei(V.UNPACK_IMAGE_HEIGHT,Sn),V.pixelStorei(V.UNPACK_SKIP_PIXELS,gn),V.pixelStorei(V.UNPACK_SKIP_ROWS,xn),V.pixelStorei(V.UNPACK_SKIP_IMAGES,ct),Ae===0&&q.generateMipmaps&&V.generateMipmap(Ht),Ue.unbindTexture()},this.initRenderTarget=function(F){_e.get(F).__webglFramebuffer===void 0&&ot.setupRenderTarget(F)},this.initTexture=function(F){F.isCubeTexture?ot.setTextureCube(F,0):F.isData3DTexture?ot.setTexture3D(F,0):F.isDataArrayTexture||F.isCompressedArrayTexture?ot.setTexture2DArray(F,0):ot.setTexture2D(F,0),Ue.unbindTexture()},this.resetState=function(){B=0,I=0,R=null,Ue.reset(),G.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return ri}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;let t=this.getContext();t.drawingBufferColorSpace=It._getDrawingBufferColorSpace(e),t.unpackColorSpace=It._getUnpackColorSpace()}};var nE=new ee(0,0,1),Vl=class{renderer;scene=new Ua;camera;orbit={target:new ee(0,0,.05),distance:.8,azimuth:-.7,elevation:.45,follow:null};groups=new Map;bodyIndex=new Map;sensorCams=new Map;sun;width;height;floor=null;grid=null;captureRt=null;highlighted=null;raycaster=new Xa;trailLine=null;trailPts=new Float32Array(0);trailN=0;trailBody=null;trailLast=new ee(1/0,1/0,1/0);mode="orbit";constructor(e,t,n,r=1){this.renderer=new Ol({canvas:e,antialias:!0,preserveDrawingBuffer:!0}),this.renderer.setPixelRatio(r),this.renderer.setSize(t,n,!1),this.renderer.shadowMap.enabled=!0,this.renderer.shadowMap.type=Gc,this.width=t,this.height=n,this.camera=new fn(42,t/n,.005,200),this.camera.up.copy(nE),this.scene.background=new ft("#dfe9f3"),this.scene.add(new Ga(16777215,8952234,.9)),this.sun=new $a(16777215,2.2),this.sun.position.set(1.5,-2,3),this.sun.castShadow=!0,this.sun.shadow.mapSize.set(2048,2048),this.sun.shadow.bias=-5e-4,this.sun.shadow.normalBias=.002,this.scene.add(this.sun),this.scene.add(this.sun.target),this.applyOrbit()}resize(e,t,n=1){this.width=e,this.height=t,this.renderer.setPixelRatio(n),this.renderer.setSize(e,t,!1),this.camera.aspect=e/t,this.camera.updateProjectionMatrix()}build(e){for(let c of this.groups.values())this.scene.remove(c);this.groups.clear(),this.bodyIndex.clear();for(let c of this.sensorCams.values())c.rt.dispose();this.sensorCams.clear(),this.floor&&this.scene.remove(this.floor),this.grid&&this.scene.remove(this.grid),this.scene.background=new ft(e.look.sky),this.scene.fog=new La(new ft(e.look.sky),6,40);let t=e.look.groundSize;e.look.ground&&(this.floor=new Ln(new kr(t*2,t*2),new ks({color:new ft(e.look.floor),roughness:.95,metalness:0})),this.floor.receiveShadow=!0,this.scene.add(this.floor),this.grid=new ja(t*2,t*20,10134961,12107976),this.grid.rotation.x=Math.PI/2,this.grid.material.transparent=!0,this.grid.material.opacity=.35,this.grid.position.z=5e-4,this.scene.add(this.grid));let n=Math.min(t,6),r=this.sun.shadow.camera;r.left=-n,r.right=n,r.top=n,r.bottom=-n,r.near=.1,r.far=20,r.updateProjectionMatrix();let a=new ai;for(let c of e.bodies){if(c.name==="world")continue;let l=new wi;l.name=c.name;for(let u of c.geoms){let d=this.makeGeom(u);d&&l.add(d)}l.position.set(c.origin[0],c.origin[1],c.origin[2]),this.scene.add(l),this.groups.set(c.name,l),a.expandByObject(l)}for(let c of e.sensors){if(!c.camera)continue;let l=new fn(c.camera.fov,c.camera.width/c.camera.height,.003,100);l.matrixAutoUpdate=!1;let u=new Hn(c.camera.width,c.camera.height,{depthBuffer:!0});this.sensorCams.set(c.camera.name,{cam:l,rt:u,buf:new Uint8Array(c.camera.width*c.camera.height*4),flipped:new Uint8ClampedArray(c.camera.width*c.camera.height*4)})}a.isEmpty()||this.fit(a)}makeGeom(e){let t=new ft(e.color),n=new ks({color:t,roughness:.55,metalness:.08});if(e.visualOnly&&e.kind!=="mesh")return null;let r,a=new Ln;switch(e.kind){case"mesh":{r=new mn,r.setAttribute("position",new wn(e.positions.slice(),3)),r.computeVertexNormals();break}case"box":r=new rr(e.size[0],e.size[1],e.size[2]);break;case"sphere":r=new za(e.size[0],32,24);break;case"cylinder":r=new Ba(e.size[0],e.size[0],e.size[1],40),a.quaternion.setFromAxisAngle(new ee(1,0,0),Math.PI/2);break;case"capsule":r=new Oa(e.size[0],Math.max(0,e.size[1]-2*e.size[0]),8,24),a.quaternion.setFromAxisAngle(new ee(1,0,0),Math.PI/2);break;default:return null}if(a.geometry=r,a.material=n,a.castShadow=!0,a.receiveShadow=!0,e.kind!=="mesh"){let c=new si(e.quat[1],e.quat[2],e.quat[3],e.quat[0]);a.quaternion.premultiply(c),a.position.set(e.pos[0],e.pos[1],e.pos[2])}return a}setPoses(e,t,n=!0){for(let r=0;r<e.length;r++){let a=this.groups.get(e[r]);a&&(a.position.set(t[r*7],t[r*7+1],t[r*7+2]),a.quaternion.set(t[r*7+4],t[r*7+5],t[r*7+6],t[r*7+3]))}n&&this.extendTrail()}highlight(e){let t=(n,r)=>{let a=n?this.groups.get(n):null;a&&a.traverse(c=>{let l=c.material;l&&l.emissive&&(l.emissive.set(r?16756782:0),l.emissiveIntensity=r?.35:0)})};t(this.highlighted,!1),this.highlighted=e,t(e,!0)}trail(e){if(this.trailLine&&(this.scene.remove(this.trailLine),this.trailLine.geometry.dispose(),this.trailLine.material.dispose(),this.trailLine=null),this.trailBody=e,this.trailN=0,this.trailLast.set(1/0,1/0,1/0),!e)return;let t=6e3;this.trailPts=new Float32Array(t*3);let n=new mn;n.setAttribute("position",new wn(this.trailPts,3)),n.setDrawRange(0,0);let r=new Nr({color:15246927,transparent:!0,opacity:.9,depthTest:!1});this.trailLine=new Ns(n,r),this.trailLine.renderOrder=10,this.trailLine.frustumCulled=!1,this.scene.add(this.trailLine)}clearTrail(){this.trailN=0,this.trailLast.set(1/0,1/0,1/0),this.trailLine&&this.trailLine.geometry.setDrawRange(0,0)}extendTrail(){if(!this.trailLine||!this.trailBody)return;let e=this.groups.get(this.trailBody)?.position;if(!e||e.distanceTo(this.trailLast)<.002)return;let t=this.trailPts.length/3;this.trailN>=t&&(this.trailPts.copyWithin(0,300),this.trailN-=100),this.trailPts[this.trailN*3]=e.x,this.trailPts[this.trailN*3+1]=e.y,this.trailPts[this.trailN*3+2]=e.z+.001,this.trailN++,this.trailLast.copy(e);let n=this.trailLine.geometry.getAttribute("position");n.needsUpdate=!0,this.trailLine.geometry.setDrawRange(0,this.trailN)}pick(e,t){this.raycaster.setFromCamera(new Tt(e*2-1,-(t*2-1)),this.camera);let n=this.raycaster.intersectObjects([...this.groups.values()],!0);for(let r of n){let a=r.object;for(;a&&!(a instanceof wi&&this.groups.has(a.name));)a=a.parent;if(a)return a.name}return null}preset(e){let t=this.sceneBounds();if(t.isEmpty())return;let n=t.getCenter(new ee),a=Math.max(.02,t.getSize(new ee).length()/2)*2.4/Math.min(1,this.camera.aspect||1),c=this.orbit;this.mode="orbit",c.follow=null,c.target.copy(n),c.distance=a,e==="top"?(c.azimuth=-Math.PI/2,c.elevation=1.45):e==="front"?(c.azimuth=-Math.PI/2,c.elevation=.12):e==="side"?(c.azimuth=0,c.elevation=.12):(c.azimuth=-.7,c.elevation=.45),this.applyOrbit(!0)}bodyPosition(e){let t=this.groups.get(e);return t?t.position.clone():null}setCamera(e,t,n){this.mode="scripted",this.camera.position.set(e[0],e[1],e[2]),this.camera.lookAt(t[0],t[1],t[2]),n&&Math.abs(n-this.camera.fov)>1e-6&&(this.camera.fov=n,this.camera.updateProjectionMatrix()),this.sun.target.position.set(t[0],t[1],t[2]),this.sun.position.set(t[0]+1.5,t[1]-2,t[2]+3)}grab(){if(this.mode!=="scripted")return;let e=this.camera.position,t=this.sun.target.position;this.mode="orbit",this.lookAt([e.x,e.y,e.z],[t.x,t.y,t.z])}cameraPose(){let e=this.camera.position,t=this.mode==="scripted"?this.sun.target.position:this.orbit.target;return{pos:[e.x,e.y,e.z],look:[t.x,t.y,t.z],fov:this.camera.fov}}applyOrbit(e=!1){if(this.mode==="scripted")return;let t=this.orbit;if(t.follow){let r=this.groups.get(t.follow)?.position;r&&t.target.lerp(r,e?1:.25)}let n=Math.cos(t.elevation);this.camera.position.set(t.target.x+t.distance*n*Math.cos(t.azimuth),t.target.y+t.distance*n*Math.sin(t.azimuth),t.target.z+t.distance*Math.sin(t.elevation)),this.camera.lookAt(t.target),this.sun.target.position.copy(t.target),this.sun.position.set(t.target.x+1.5,t.target.y-2,t.target.z+3)}rotate(e,t){this.grab(),this.orbit.azimuth-=e*.006,this.orbit.elevation=Math.max(-1.45,Math.min(1.5,this.orbit.elevation+t*.006)),this.applyOrbit()}pan(e,t){this.grab();let n=this.orbit,r=new ee().setFromMatrixColumn(this.camera.matrix,0),a=new ee().setFromMatrixColumn(this.camera.matrix,1),c=n.distance*.0016;n.target.addScaledVector(r,-e*c).addScaledVector(a,t*c),n.follow=null,this.applyOrbit()}zoom(e){this.grab(),this.orbit.distance=Math.max(.02,Math.min(100,this.orbit.distance*Math.exp(e*.0012))),this.applyOrbit()}lookAt(e,t){this.mode="orbit";let n=this.orbit;n.follow=null,n.target.set(t[0],t[1],t[2]);let r=new ee(e[0]-t[0],e[1]-t[1],e[2]-t[2]);n.distance=Math.max(.02,r.length()),n.azimuth=Math.atan2(r.y,r.x),n.elevation=Math.asin(Math.max(-1,Math.min(1,r.z/n.distance))),this.applyOrbit()}fit(e){this.mode="orbit";let t=e??this.sceneBounds();if(t.isEmpty())return;let n=t.getCenter(new ee),r=Math.max(.02,t.getSize(new ee).length()/2);this.orbit.target.copy(n),this.orbit.distance=r*2.4/Math.min(1,this.camera.aspect||1),this.applyOrbit()}sceneBounds(){let e=new ai;for(let t of this.groups.values())e.expandByObject(t);return e}follow(e){this.mode="orbit",this.orbit.follow=e,this.applyOrbit(!0)}render(){this.applyOrbit(),this.renderer.setRenderTarget(null),this.renderer.render(this.scene,this.camera)}renderCamera(e,t,n){let r=this.sensorCams.get(e.name);if(!r)throw new Error(`renderer has no camera "${e.name}"`);let a=t.mat;return r.cam.matrixWorld.set(a[0],a[1],a[2],t.pos[0],a[3],a[4],a[5],t.pos[1],a[6],a[7],a[8],t.pos[2],0,0,0,1),r.cam.matrixWorldInverse.copy(r.cam.matrixWorld).invert(),r.cam.fov=t.fovy,r.cam.updateProjectionMatrix(),this.renderer.setRenderTarget(r.rt),this.renderer.render(this.scene,r.cam),this.renderer.readRenderTargetPixels(r.rt,0,0,e.width,e.height,r.buf),this.renderer.setRenderTarget(null),Um(r.buf,r.flipped,e.width,e.height),{width:e.width,height:e.height,rgba:r.flipped}}capture(e,t){(!this.captureRt||this.captureRt.width!==e||this.captureRt.height!==t)&&(this.captureRt?.dispose(),this.captureRt=new Hn(e,t,{depthBuffer:!0,samples:4}));let n=this.camera.aspect;this.camera.aspect=e/t,this.camera.updateProjectionMatrix(),this.applyOrbit(!0),this.renderer.setRenderTarget(this.captureRt),this.renderer.render(this.scene,this.camera);let r=new Uint8Array(e*t*4);this.renderer.readRenderTargetPixels(this.captureRt,0,0,e,t,r),this.renderer.setRenderTarget(null),this.camera.aspect=n,this.camera.updateProjectionMatrix();let a=new Uint8ClampedArray(e*t*4);return Um(r,a,e,t),a}async cameraJpeg(e,t,n=.7){let r=this.renderCamera(e,t,!1),a=new OffscreenCanvas(r.width,r.height),c=a.getContext("2d");if(!c)throw new Error("no 2D context");c.putImageData(new ImageData(r.rgba,r.width,r.height),0,0);let l=await a.convertToBlob({type:"image/jpeg",quality:n}),u=new Uint8Array(await l.arrayBuffer()),d="";for(let p=0;p<u.length;p+=32768)d+=String.fromCharCode.apply(null,Array.from(u.subarray(p,p+32768)));return`data:image/jpeg;base64,${btoa(d)}`}dispose(){for(let e of this.sensorCams.values())e.rt.dispose();this.captureRt?.dispose(),this.renderer.dispose()}};function Um(i,e,t,n){let r=t*4;for(let a=0;a<n;a++)e.set(i.subarray((n-1-a)*r,(n-a)*r),a*r)}async function Nm(i,e,t){let n=typeof OffscreenCanvas<"u"?new OffscreenCanvas(e,t):(()=>{let c=document.createElement("canvas");return c.width=e,c.height=t,c})(),r=n.getContext("2d");if(!r)throw new Error("no 2D context for the snapshot");r.putImageData(new ImageData(i,e,t),0,0);let a="convertToBlob"in n?await n.convertToBlob({type:"image/png"}):await new Promise((c,l)=>n.toBlob(u=>u?c(u):l(new Error("toBlob failed")),"image/png"));return new Uint8Array(await a.arrayBuffer())}function dd(i,e,t,n,r=.5){let a=i.timestep,c=Math.max(1,Math.round(Math.max(.01,r)/a)),l,u,d;if(n.machineId){let m=(t.machines??[]).find(E=>E.id===n.machineId);if(!m)throw new Error(`no machine "${n.machineId}" in the world (machines: ${(t.machines??[]).map(E=>E.id).join(", ")||"none"})`);let x=e.joints.find(E=>E.machine===m.id&&E.type==="free"),_=e.bodies.filter(E=>E.machine===m.id),b=x?.body??_[_.length-1]?.name;if(!b)throw new Error(`machine "${m.id}" has no bodies`);if(!x)throw new Error(`machine "${m.id}" is fixed to the world (a grounded part): nothing to settle`);l=m.pose,u=b,d=e.bodies.find(E=>E.name===b)?.ref??b}else if(n.objectId){let m=(t.objects??[]).find(_=>_.id===n.objectId);if(!m)throw new Error(`no object "${n.objectId}" in the world (objects: ${(t.objects??[]).map(_=>_.id).join(", ")||"none"})`);if(m.fixed)throw new Error(`object "${m.id}" is fixed: nothing to settle`);let x=e.bodies.find(_=>_.object===m.id);if(!x)throw new Error(`object "${m.id}" has no body`);l=m.pose,u=x.name,d=m.id}else throw new Error("settle needs a machineId or an objectId");let p=i.save();try{i.reset();let m=i.bodyPos(u),x=i.bodyQuat(u),_=Zs(l),b=l?.pos??[0,0,0],E=Fo(_r(Po(_),x)),w=Ii(Po(_),Xt(m,b));i.step(c),i.forward?.();let v=i.bodyPos(u),D=i.bodyQuat(u);i.step(Math.max(1,Math.round(.02/a))),i.forward?.();let L=i.bodyPos(u),N=hn(Xt(L,v))/.02,z=Fo(_r(D,Po(E))),P=Xt(v,Ii(z,w)),T=B=>Math.round(B*1e5)/1e5;return{ref:d,pose:{pos:P.map(T),quat:z.map(T)},moved:T(hn(Xt(v,m))),settled:N<.001,seconds:c*a}}finally{i.restore(p)}}var km=Math.PI/180,Ws=class{constructor(e,t={pos:[1.2,-1.2,.7],look:[0,0,.05],fov:42}){this.scene=e;this.pos=[...t.pos],this.look=[...t.look],this.fovDeg=t.fov}mode={kind:"free"};pos;look;fovDeg;lookTarget=null;calls=0;get active(){return this.calls>0}get scripted(){return this.mode.kind!=="free"}pose(){return{pos:[...this.pos],look:[...this.look],fov:this.fovDeg}}api(){let e=this;return{follow(t,n={}){e.check(t,"follow"),e.calls++,e.mode={kind:"follow",target:t,distance:io(n.distance,1.2,"distance"),height:io(n.height,.5,"height"),azimuth:io(n.azimuthDeg,0,"azimuthDeg")*km,lag:iE(io(n.lag,.5,"lag"))},e.lookTarget=t},lookAt(t){e.check(t,"lookAt"),e.calls++,e.lookTarget=t,e.mode.kind==="free"&&(e.mode={kind:"fixed"})},at(t){if(!hr(t))throw new Error("camera.at([x, y, z]) takes metres");e.calls++,e.pos=[t[0],t[1],t[2]],e.mode={kind:"fixed"}},fov(t){if(!(t>=5&&t<=150))throw new Error(`camera.fov(deg): 5..150 (got ${t})`);e.calls++,e.fovDeg=t},frame(t,n={}){if(!Array.isArray(t)||!t.length)throw new Error("camera.frame([targets]) needs at least one target");for(let r of t)e.check(r,"frame");e.calls++,e.mode={kind:"frame",targets:t.slice(),margin:io(n.margin,1.2,"margin")},e.lookTarget=null},path(t,n={}){if(!Array.isArray(t)||!t.length)throw new Error("camera.path([{ t, at, lookAt }]) needs at least one key");let r=t.map((a,c)=>{if(!a||typeof a.t!="number"||!hr(a.at))throw new Error(`camera.path: key ${c} needs { t (s), at: [x, y, z] }`);return a.lookAt!==void 0&&e.check(a.lookAt,"path"),{t:a.t,at:[a.at[0],a.at[1],a.at[2]],lookAt:a.lookAt}}).sort((a,c)=>a.t-c.t);e.calls++,e.mode={kind:"path",keys:r,loop:!!n.loop,ease:n.ease==="smooth"?"smooth":"linear"}},release(){e.calls++,e.mode={kind:"free"},e.lookTarget=null},get position(){return[...e.pos]},get target(){return[...e.look]}}}check(e,t){if(!hr(e)){if(typeof e!="string"||!e)throw new Error(`camera.${t}: a target is a machine id, "machine.part", an object id, or [x, y, z]`);if(!this.scene.machineBodies(e)&&!this.scene.bodyOf(e))throw new Error(`camera.${t}: nothing is called "${e}" in this world`)}}point(e){if(hr(e))return[e[0],e[1],e[2]];let t=this.scene.machineBodies(e);if(t&&t.length)return this.scene.bodyPos(t[0]);let n=this.scene.bodyOf(e);if(!n)throw new Error(`camera: "${e}" is not in the world any more`);return this.scene.bodyPos(n)}heading(e){if(hr(e))return 0;let t=this.scene.machineBodies(e),n=t&&t.length?t[0]:this.scene.bodyOf(e);if(!n)return 0;let r=this.scene.bodyQuat(n),[a,c,l,u]=r;return Math.atan2(2*(a*u+c*l),1-2*(l*l+u*u))}update(e,t){let n=this.mode;if(n.kind!=="free"){if(n.kind==="follow"){let r=this.point(n.target),a=this.heading(n.target)+n.azimuth+Math.PI,c=[r[0]+Math.cos(a)*n.distance,r[1]+Math.sin(a)*n.distance,r[2]+n.height],l=n.lag<=0?0:Math.pow(n.lag,e/.02);this.pos=[c[0]+(this.pos[0]-c[0])*l,c[1]+(this.pos[1]-c[1])*l,c[2]+(this.pos[2]-c[2])*l],this.look=this.lookTarget?this.point(this.lookTarget):r;return}if(n.kind==="fixed"){this.lookTarget&&(this.look=this.point(this.lookTarget));return}if(n.kind==="frame"){let r=[1/0,1/0,1/0],a=[-1/0,-1/0,-1/0],c=(x,_)=>{for(let b=0;b<3;b++)r[b]=Math.min(r[b],x[b]-_),a[b]=Math.max(a[b],x[b]+_)};for(let x of n.targets){if(hr(x)){c(x,.02);continue}let _=this.scene.machineBodies(x),b=_&&_.length?_:[this.scene.bodyOf(x)];for(let E of b)c(this.scene.bodyPos(E),this.scene.bodyRadius(E))}let l=[(r[0]+a[0])/2,(r[1]+a[1])/2,(r[2]+a[2])/2],u=Math.max(.02,hn(Xt(a,r))/2),d=Xt(this.pos,this.look),p=hn(d)>1e-6?Xn(d):[.6,-.6,.5],m=u*n.margin/Math.sin(this.fovDeg*km/2);this.look=l,this.pos=pi(l,Yt(p,Math.max(.05,m)));return}if(n.kind==="path"){let{at:r,lookAt:a}=Om(n.keys,t,{loop:n.loop,ease:n.ease});this.pos=r,a!==void 0?this.look=this.point(a):this.lookTarget&&(this.look=this.point(this.lookTarget))}}}};function Om(i,e,t={}){if(!i.length)throw new Error("an empty path");let n=i[0],r=i[i.length-1],a=e;if(t.loop&&r.t>n.t){let E=r.t-n.t;a=n.t+((e-n.t)%E+E)%E}if(a<=n.t)return{at:[...n.at],lookAt:n.lookAt};if(a>=r.t)return{at:[...r.at],lookAt:r.lookAt};let c=0;for(;c<i.length-1&&i[c+1].t<=a;)c++;let l=i[c],u=i[c+1],d=u.t-l.t,p=d>0?(a-l.t)/d:1;t.ease==="smooth"&&(p=p*p*(3-2*p));let m=[l.at[0]+(u.at[0]-l.at[0])*p,l.at[1]+(u.at[1]-l.at[1])*p,l.at[2]+(u.at[2]-l.at[2])*p],x=l.lookAt,_=u.lookAt,b;return hr(x)&&hr(_)?b=[x[0]+(_[0]-x[0])*p,x[1]+(_[1]-x[1])*p,x[2]+(_[2]-x[2])*p]:b=p<.5?x??_:_??x,{at:m,lookAt:b}}function hr(i){return Array.isArray(i)&&i.length===3&&i.every(e=>typeof e=="number"&&Number.isFinite(e))}function io(i,e,t){if(i===void 0)return e;if(typeof i!="number"||!Number.isFinite(i))throw new Error(`camera: ${t} must be a number`);return i}var iE=i=>Math.max(0,Math.min(1,i));var ro=class{constructor(e,t,n){this.bodyName=t;this.jointName=n;for(let r of e){let a=r.kind==="time_to"||r.kind==="joint_angle"?null:t(r.target),c=r.kind==="joint_angle"?n(r.target):null;this.tracks.push({m:r,body:a,joint:c,start:null,prev:null,maxHeight:-1/0,maxSpeed:0,firstAt:null,value:!1})}}tracks=[];update(e,t,n){let r=this.tracks.some(a=>a.m.kind==="touched")?e.contacts():[];for(let a of this.tracks)if(a.body){let c=e.bodyPos(a.body);if(a.start||(a.start=c),c[2]>a.maxHeight&&(a.maxHeight=c[2]),a.prev&&n>0){let l=hn(Xt(c,a.prev))/n;l>a.maxSpeed&&(a.maxSpeed=l)}if(a.prev=c,a.m.kind==="inside"&&a.m.region){let{min:l,max:u}=a.m.region,d=c[0]>=l[0]&&c[0]<=u[0]&&c[1]>=l[1]&&c[1]<=u[1]&&c[2]>=l[2]&&c[2]<=u[2];a.value=d,d&&a.firstAt===null&&(a.firstAt=t)}if(a.m.kind==="touched"&&a.m.other){let l=this.bodyName(a.m.other);r.some(d=>d.a===a.body&&d.b===l||d.b===a.body&&d.a===l)&&(a.value=!0,a.firstAt===null&&(a.firstAt=t))}}for(let a of this.tracks){if(a.m.kind!=="time_to")continue;let c=this.tracks.find(l=>l.m.id===a.m.target);c&&c.firstAt!==null&&a.firstAt===null&&(a.firstAt=c.firstAt)}}results(e,t){let n={},r=a=>Math.round(a*1e3)/1e3;for(let a of this.tracks){let c=a.m,l=c.target,u;switch(c.kind){case"position":{let d=a.body?e.bodyPos(a.body):[0,0,0],p=[r(d[0]),r(d[1]),r(d[2])];u={id:c.id,kind:c.kind,value:p,unit:"m",text:`${l} is at (${p.join(", ")}) m`};break}case"max_height":u={id:c.id,kind:c.kind,value:r(a.maxHeight),unit:"m",text:`${l} reached ${r(a.maxHeight)} m`};break;case"max_speed":u={id:c.id,kind:c.kind,value:r(a.maxSpeed),unit:"m/s",text:`${l} moved at up to ${r(a.maxSpeed)} m/s`};break;case"distance_from_start":{let d=a.body?e.bodyPos(a.body):[0,0,0],p=a.start?r(hn(Xt(d,a.start))):0;u={id:c.id,kind:c.kind,value:p,unit:"m",text:`${l} ended ${p} m from where it started`};break}case"joint_angle":{let d=a.joint?e.joint(a.joint):{q:0,qd:0},p=r(d.q*180/Math.PI);u={id:c.id,kind:c.kind,value:p,unit:"deg",text:`${l} is at ${p}\xB0`};break}case"inside":u={id:c.id,kind:c.kind,value:a.value,text:a.value?`${l} is inside the region${a.firstAt!==null?` (since ${r(a.firstAt)} s)`:""}`:`${l} is not inside the region`};break;case"touched":u={id:c.id,kind:c.kind,value:a.value,text:a.value?`${l} touched ${c.other} at ${r(a.firstAt??0)} s`:`${l} never touched ${c.other}`};break;case"time_to":u={id:c.id,kind:c.kind,value:a.firstAt,unit:"s",text:a.firstAt!==null?`${c.target} happened at ${r(a.firstAt)} s`:`${c.target} did not happen in ${r(t)} s`};break;default:u={id:c.id,kind:c.kind,value:null,text:`${c.kind}: not computed`}}n[c.id]=u}return n}};var Bm=["fetch","XMLHttpRequest","WebSocket","importScripts","postMessage","self","window","globalThis","document","navigator","indexedDB","caches","Worker","SharedArrayBuffer","Atomics","Function"];function fd(i,e="program"){let n=`"use strict";
${i.replace(/^\s*export\s+(?=(async\s+)?function|const|let|var|class)/gm,"")}
;return { setup: typeof setup === "function" ? setup : undefined, loop: typeof loop === "function" ? loop : undefined };`,r;try{r=new Function(...Bm,n)}catch(c){throw new Error(`${e}: ${c.message}`)}let a;try{a=r(...Bm.map(()=>{}))}catch(c){throw new Error(`${e} threw while loading: ${c.message}`)}if(!a.loop&&!a.setup)throw new Error(`${e}: define function loop(ctx) { \u2026 } (and optionally setup(ctx))`);return a}function pd(i){let e=i>>>0;return()=>{e=e+1831565813>>>0;let t=e;return t=Math.imul(t^t>>>15,t|1),t^=t+Math.imul(t^t>>>7,t|61),((t^t>>>14)>>>0)/4294967296}}var zm={red:[-20,20],orange:[20,45],yellow:[45,70],green:[70,170],cyan:[170,200],blue:[200,260],purple:[260,300],magenta:[300,340],pink:[300,345]};function md(i,e){let t=null,n=.45,r=.25,a=null;if(typeof e=="string"){let x=e.toLowerCase();if(x==="white")a="white";else if(x==="black")a="black";else if(zm[x])t=zm[x];else throw new Error(`unknown colour "${e}" (red, orange, yellow, green, cyan, blue, purple, magenta, white, black, or {hue:[a,b]})`)}else t=e.hue,e.sat!==void 0&&(n=e.sat),e.val!==void 0&&(r=e.val);let{width:c,height:l,rgba:u}=i,d=0,p=0,m=0;for(let x=0;x<l;x++)for(let _=0;_<c;_++){let b=(x*c+_)*4,E=u[b]/255,w=u[b+1]/255,v=u[b+2]/255,D=Math.max(E,w,v),L=Math.min(E,w,v),N=D,z=D>0?(D-L)/D:0,P=!1;if(a==="white")P=z<.15&&N>.8;else if(a==="black")P=N<.15;else if(t&&z>=n&&N>=r){let T=D-L,B=0;T>0&&(D===E?B=60*((w-v)/T%6):D===w?B=60*((v-E)/T+2):B=60*((E-w)/T+4)),B<0&&(B+=360);let[I,R]=t;P=I<0?B>=I+360||B<=R:B>=I&&B<=R}P&&(d++,p+=_,m+=x)}return d?{x:(p/d+.5)/c,y:(m/d+.5)/l,area:d/(c*l),count:d}:null}var so=180/Math.PI,Vm="?",Hm={pos:[1.2,-1.2,.7],look:[0,0,.05],fov:42},ao=class extends Error{},oo=class{constructor(e,t,n={}){this.engine=e;this.world=t;this.opts=n;this.now=n.now??(()=>typeof performance<"u"?performance.now():Date.now()),this.bodyNames=e.bodyNames(),this.poseBuf=new Float32Array(this.bodyNames.length*7),this.prevPoses=new Float32Array(this.bodyNames.length*7),this.qBuf=new Float32Array(e.jointNames().length);for(let r of t.bodies)this.radii.set(r.name,rE(r));this.director=new Ws(this.cameraScene(),Hm)}now;spec=null;programs=[];tracker=null;k=1;dt=.02;ticks=0;sampleEvery=1;samples=[];sampleRate=60;poseBuf;qBuf;prevPoses;logs=[];droppedLogs=0;custom={};stopReason=null;failure=null;startedAt=0;slowTicks=0;cameraCache=new Map;random=Math.random;warnings=[];contextCache=new Map;director;cameraSamples=[];shared={};radii=new Map;bodyNames;cameraScene(){let e=this;return{machineBodies(t){if(!e.machineIds().includes(t))return null;let n=e.rootBodyOf(t),r=e.world.bodies.filter(a=>a.machine===t&&a.name!==n).map(a=>a.name);return n?[n,...r]:r},bodyOf(t){return e.bodyName(t)},bodyPos(t){return e.engine.bodyPos(t)},bodyQuat(t){return e.engine.bodyQuat(t)},bodyRadius(t){return e.radii.get(t)??.02}}}rootBodyOf(e){let t=this.world.joints.find(r=>r.machine===e&&r.type==="free");if(t)return t.body;let n=this.world.bodies.filter(r=>r.machine===e);return n.length?n[n.length-1].name:null}cameraPose(){return this.director.pose()}get cameraScripted(){return this.director.active}bodyName(e){return this.world.bodies.find(t=>t.ref===e)?.name??null}jointName(e){return this.world.joints.find(t=>t.ref===e)?.name??null}machineIds(){return[...new Set(this.world.bodies.map(e=>e.machine).filter(e=>!!e))]}begin(e){this.spec=e,this.engine.reset();let t=e.programs??[],n=t.reduce((l,u)=>Math.min(l,u.rate??50),50),r=this.engine.timestep;this.k=Math.max(1,Math.round(1/(n*r))),this.dt=this.k*r;let a=e.record?.trajectoryRate??60;this.sampleEvery=Math.max(1,Math.round(1/(this.dt*a))),this.sampleRate=1/(this.dt*this.sampleEvery),this.ticks=0,this.samples=[],this.logs=[],this.drainedLogs=0,this.droppedLogs=0,this.custom={},this.stopReason=null,this.failure=null,this.slowTicks=0,this.warnings=this.world.warnings.slice(),this.contextCache.clear(),this.random=pd(e.seed??1),this.shared={},this.cameraSamples=[],this.director=new Ws(this.cameraScene(),e.camera??Hm),this.tracker=new ro(this.world.metrics,l=>this.bodyName(l),l=>this.jointName(l));let c=this.machineIds();this.programs=t.map(l=>{let u;if(l.machine==="*")u=null;else if(l.machine){if(!c.includes(l.machine))throw new Error(`program "${l.name??l.id}" drives machine "${l.machine}", which is not in the world (machines: ${c.join(", ")||"none"})`);u=l.machine}else u=c.length===1?c[0]:c.length>1?Vm:null;return{program:l,hooks:fd(l.source,l.name??l.id),machine:u}}),this.engine.poses(this.prevPoses),this.engine.poses(this.poseBuf),this.tracker.update(this.engine,0,0),this.startedAt=this.now();for(let l of this.programs)if(l.hooks.setup)try{l.hooks.setup(this.context(l))}catch(u){if(u instanceof ao)break;this.failure=`program "${l.program.name??l.program.id}" failed in setup: ${u.message}`;return}this.sample()}get done(){return!this.spec||this.failure||this.stopReason!==null?!0:this.ticks*this.dt>=this.spec.duration-1e-9}get time(){return this.engine.time()}get progress(){return{t:this.ticks*this.dt,ticks:this.ticks,duration:this.spec?.duration??0}}stop(e){this.stopReason===null&&(this.stopReason=e)}tick(){if(this.done)return!1;let e=this.now();this.cameraCache.clear(),this.engine.clearForces?.();for(let c of this.programs)if(c.hooks.loop)try{c.hooks.loop(this.context(c))}catch(l){if(l instanceof ao)break;return this.failure=`program "${c.program.name??c.program.id}" failed at ${(this.ticks*this.dt).toFixed(2)} s: ${l.message}`,!1}let n=this.now()-e,r=this.opts.tickBudgetMs??50;if(n>r){if(this.slowTicks++,this.slowTicks>=(this.opts.slowTicksAllowed??10))return this.failure=`program too slow: ${n.toFixed(0)} ms per tick at ${(1/this.dt).toFixed(0)} Hz (budget ${r} ms)`,!1}else this.slowTicks=0;this.prevPoses.set(this.poseBuf),this.engine.step(this.k),this.ticks++;let a=this.ticks*this.dt;this.engine.poses(this.poseBuf),this.tracker?.update(this.engine,a,this.dt);try{this.director.update(this.dt,a)}catch(c){return this.failure=`camera failed at ${a.toFixed(2)} s: ${c.message}`,!1}return this.ticks%this.sampleEvery===0&&this.sample(),!this.done}sample(){let e=this.bodyNames.length,t=this.qBuf.length,n=new Float32Array(1+e*7+t);n[0]=this.ticks*this.dt,this.engine.poses(this.poseBuf),n.set(this.poseBuf,1),this.engine.jointQ(this.qBuf),n.set(this.qBuf,1+e*7),this.samples.push(n);let r=this.director.pose();this.cameraSamples.push(Float32Array.of(r.pos[0],r.pos[1],r.pos[2],r.look[0],r.look[1],r.look[2],r.fov))}end(){if(!this.spec)throw new Error("begin() first");let e=this.ticks*this.dt,t=this.bodyNames.length,n=this.qBuf.length,r=1+t*7+n,a=new Float32Array(r*this.samples.length);this.samples.forEach((p,m)=>a.set(p,m*r));let c={bodies:this.bodyNames.slice(),joints:this.engine.jointNames().slice(),rate:this.sampleRate,stride:r,samples:this.samples.length,data:a};if(this.director.active){let p=new Float32Array(7*this.cameraSamples.length);this.cameraSamples.forEach((m,x)=>p.set(m,x*7)),c.camera=p}let l=this.droppedLogs?[...this.logs,`\u2026 ${this.droppedLogs} more lines not kept`]:this.logs.slice(),u=this.tracker?this.tracker.results(this.engine,e):{},d=this.failure?"failed":this.stopReason!==null?"stopped":"finished";return{runId:this.spec.runId,status:d,reason:this.failure??this.stopReason??void 0,time:Math.round(e*1e6)/1e6,ticks:this.ticks,wallMs:Math.round(this.now()-this.startedAt),metrics:u,custom:{...this.custom},logs:l,trajectory:c,warnings:this.warnings.slice(),camera:this.director.active?"scripted":"free"}}runAll(e){for(this.begin(e);this.tick(););return this.end()}drainedLogs=0;drainLogs(){let e=this.logs.slice(this.drainedLogs);return this.drainedLogs=this.logs.length,e}poses(e){this.engine.poses(e)}log(...e){let t=this.opts.maxLogs??2e3,n=e.map(r=>typeof r=="string"?r:sE(r)).join(" ");if(this.logs.length>=t){this.droppedLogs++;return}this.logs.push(`${(this.ticks*this.dt).toFixed(2)}s ${n}`)}bodyVelocity(e){let t=this.bodyNames.indexOf(e);if(t<0)throw new Error(`unknown body "${e}"`);if(this.ticks===0)return[0,0,0];let n=this.prevPoses,r=this.poseBuf;return[(r[t*7]-n[t*7])/this.dt,(r[t*7+1]-n[t*7+1])/this.dt,(r[t*7+2]-n[t*7+2])/this.dt]}bodyHandle(e){let t=this.bodyName(e);if(!t)throw new Error(`unknown body "${e}" (bodies: ${this.world.bodies.map(a=>a.ref).filter(a=>a!=="world").join(", ")})`);let n=this.engine,r=this;return{ref:e,get position(){return n.bodyPos(t)},get quat(){return n.bodyQuat(t)},get velocity(){return r.bodyVelocity(t)},get speed(){return hn(r.bodyVelocity(t))},get height(){return n.bodyPos(t)[2]},push(a,c){n.applyForce(t,a,c??n.bodyPos(t))},distanceTo(a){let c=Array.isArray(a)?a:a.position;return hn(Xt(n.bodyPos(t),c))}}}sensorHandle(e){let t=this.engine,n=this;switch(e.type){case"encoder":return{get angle(){return t.sensor(e.mj[0])[0]*so},get speed(){return t.sensor(e.mj[1])[0]*so},get radians(){return t.sensor(e.mj[0])[0]}};case"imu":return{get accel(){return Array.from(t.sensor(e.mj[0]))},get gyro(){return Array.from(t.sensor(e.mj[1]))}};case"rangefinder":return{get distance(){return t.sensor(e.mj[0])[0]},get hit(){return t.sensor(e.mj[0])[0]>=0}};case"touch":return{get force(){return t.sensor(e.mj[0])[0]},get touching(){return t.sensor(e.mj[0])[0]>0}};case"gps":return{get position(){return Array.from(t.sensor(e.mj[0]))},get velocity(){return Array.from(t.sensor(e.mj[1]))}};case"camera":{let r=e.camera;return{width:r.width,height:r.height,image(a){return n.cameraImage(r,!!a?.depth)},find(a){return md(n.cameraImage(r,!1),a)},depth(){return n.cameraImage(r,!0).depth}}}default:throw new Error(`sensor "${e.ref}": unknown type`)}}cameraImage(e,t){let n=`${e.name}:${t?"d":"c"}`,r=this.cameraCache.get(n)??(t?void 0:this.cameraCache.get(`${e.name}:d`));if(r)return r;let a=this.opts.cameraRenderer;if(!a)throw new Error(`camera "${e.name}" cannot see here: this host has no renderer (run in the tab or headless)`);let c=a.render(e,this.engine.cameraPose(e.name),t);return this.cameraCache.set(n,c),c}machineHandle(e){let t=this.world,n=this.engine,r=this,a=t.actuators.filter(p=>p.machine===e),c=t.joints.filter(p=>p.machine===e),l=t.sensors.filter(p=>p.machine===e),u=t.bodies.filter(p=>p.machine===e),d=a.map(p=>p.ref.slice(e.length+1));return{id:e,motors:d,joints:c.map(p=>p.ref.slice(e.length+1)),sensors:l.map(p=>p.ref.slice(e.length+1)),parts:u.map(p=>p.part),motor(p){let m=a.find(b=>b.ref===`${e}.${p}`);if(!m)throw new Error(`machine "${e}" has no motor "${p}" (motors: ${d.join(", ")||"none"})`);let x=c.find(b=>b.ref===m.joint)?.type==="slide",_={kind:m.kind,maxTorque:m.maxTorque,maxSpeed:m.maxSpeed,speed(b){if(m.kind!=="velocity")throw new Error(`motor "${p}" is a ${m.kind} motor: use ${m.kind==="position"?"angle(deg)":"torque(Nm)"}`);return n.setCtrl(m.name,x?b*.001:b),_},rpm(b){return _.speed(b*2*Math.PI/60)},angle(b){if(m.kind!=="position")throw new Error(`motor "${p}" is a ${m.kind} motor: use ${m.kind==="velocity"?"speed(rad/s)":"torque(Nm)"}`);return n.setCtrl(m.name,x?b*.001:b/so),_},position(b){return _.angle(b)},torque(b){if(m.kind!=="torque")throw new Error(`motor "${p}" is a ${m.kind} motor: use ${m.kind==="velocity"?"speed(rad/s)":"angle(deg)"}`);return n.setCtrl(m.name,b),_},set(b){return n.setCtrl(m.name,b),_},stop(){return n.setCtrl(m.name,0),_},get target(){return n.ctrl(m.name)}};return _},joint(p){let m=c.find(x=>x.ref===`${e}.${p}`);if(!m)throw new Error(`machine "${e}" has no joint "${p}" (joints: ${c.map(x=>x.ref.slice(e.length+1)).join(", ")||"none"})`);return{type:m.type,get angle(){return n.joint(m.name).q*(m.type==="slide"?1e3:so)},get speed(){return n.joint(m.name).qd*(m.type==="slide"?1e3:so)},get radians(){return n.joint(m.name).q}}},sensor(p){let m=l.find(x=>x.ref===`${e}.${p}`);if(!m)throw new Error(`machine "${e}" has no sensor "${p}" (sensors: ${l.map(x=>x.ref.slice(e.length+1)).join(", ")||"none"})`);return r.sensorHandle(m)},part(p){return r.bodyHandle(`${e}.${p}`)},get position(){let p=r.rootBodyOf(e);return p?n.bodyPos(p):[0,0,0]},get velocity(){let p=r.rootBodyOf(e);return p?r.bodyVelocity(p):[0,0,0]},get quat(){let p=r.rootBodyOf(e);return p?n.bodyQuat(p):[1,0,0,0]}}}context(e){let t=e.program.id,n=this.contextCache.get(t);if(n)return n.t=this.ticks*this.dt,n.tick=this.ticks,n;let r=this,a={};for(let p of this.machineIds())a[p]=this.machineHandle(p);let c={get time(){return r.ticks*r.dt},gravity:this.world.gravity,object(p){return r.bodyHandle(p)},body(p){return r.bodyHandle(p)},machine(p){let m=a[p];if(!m)throw new Error(`no machine "${p}" (machines: ${Object.keys(a).join(", ")||"none"})`);return m},contacts(){let p=m=>r.world.bodies.find(x=>x.name===m)?.ref??m;return r.engine.contacts().map(m=>({a:p(m.a),b:p(m.b),pos:m.pos}))},stop(p="stopped by the program"){throw r.stop(String(p)),new ao(p)},metric(p,m){if(typeof p!="string"||!Number.isFinite(m))throw new Error("metric(name, number)");r.custom[p]=m},shared:this.shared},l=e.program.name??e.program.id,u=e.machine===Vm?new Proxy({},{get(p,m){if(!(m==="then"||typeof m=="symbol"))throw new Error(`program "${l}" does not say which machine it drives (machines: ${Object.keys(a).join(", ")}) \u2014 set machine, or use machines["${Object.keys(a)[0]}"]`)}}):e.machine?a[e.machine]:void 0,d={t:this.ticks*this.dt,dt:this.dt,tick:this.ticks,machine:u,machines:a,world:c,camera:this.director.api(),log:(...p)=>this.log(...p),random:()=>this.random(),Math};return this.contextCache.set(t,d),d}};function rE(i){let e=0;for(let t of i.geoms)if(t.kind==="mesh"){let n=t.positions,r=0;for(let a=0;a<n.length;a+=3)r=Math.max(r,n[a]*n[a]+n[a+1]*n[a+1]+n[a+2]*n[a+2]);e=Math.max(e,Math.sqrt(r))}else t.kind==="sphere"?e=Math.max(e,hn(t.pos)+t.size[0]):t.kind==="box"?e=Math.max(e,hn(t.pos)+hn(t.size)/2):(t.kind==="cylinder"||t.kind==="capsule")&&(e=Math.max(e,hn(t.pos)+Math.hypot(t.size[0],t.size[1]/2)));return e||.02}function sE(i){try{return JSON.stringify(i,(e,t)=>typeof t=="number"?Math.round(t*1e3)/1e3:t)??String(i)}catch{return String(i)}}var gd=6,xd="runmachine";var aE=200*1024*1024,Gl=class{constructor(e){this.o=e}engine=null;compiled=null;renderer=null;sim=null;run=null;outputs=new Map;outputBytes=0;results=new Map;playing=!1;speed=1;visible=!0;frameHandle=null;poseBuf=new Float32Array(0);lastFrame=0;meshCache=new Map;outputSeq=0;replay=null;watching=null;world=null;attached=!0;async init(){this.engine=await Ks.create({wasmUrl:this.o.wasmUrl}),this.renderer=new Vl(this.o.canvas,this.o.width,this.o.height,this.o.dpr),this.renderer.render(),this.o.post({[In]:1,type:"ready",runtime:gd,name:xd,engines:[`mujoco@${this.engine.version}`],caps:{offscreen:typeof OffscreenCanvas<"u",webcodecs:qh(),worker:this.o.inWorker}}),this.schedule()}async handle(e){let t=e.args??{};switch(e.method){case"ping":return{runtime:gd,name:xd,engines:this.engine?[`mujoco@${this.engine.version}`]:[],loaded:!!this.compiled,playing:this.playing,t:this.sim?.time??0};case"load":return this.load(t);case"run":return this.startRun(t);case"control":return this.control(t);case"snapshot":return this.snapshot(t);case"film":return this.film(t);case"read":return this.read(t);case"result":return this.resultOf(String(t.runId??""));case"probe":return this.probe(t);case"settle":return this.settle(t);case"camera":return this.camera(t);case"select":{let{renderer:n}=this.need(),r=typeof t.ref=="string"?t.ref:null,a=r?this.bodyNameOf(r):null;return n.highlight(a),t.trail!==!1&&n.trail(a),this.renderNow(),{selected:a?r:null}}case"trail":{let{renderer:n}=this.need(),r=typeof t.ref=="string"?t.ref:null;return n.trail(r?this.bodyNameOf(r):null),{trailing:r}}case"replay":return this.replayControl(t);case"watch":{let{compiled:n}=this.need(),r=typeof t.sensor=="string"?t.sensor:null;if(!r)return this.watching=null,{watching:null};let a=n.sensors.find(c=>(c.ref===r||c.name===r)&&c.camera);if(!a)throw new Error(`no camera sensor "${r}" (cameras: ${n.sensors.filter(c=>c.camera).map(c=>c.ref).join(", ")||"none"})`);return this.watching={sensor:a.name,everyMs:Math.max(100,1e3/Number(t.fps??8)),last:0},this.postFrame(!0),{watching:a.ref}}case"pick":{let{renderer:n}=this.need(),r=n.pick(Number(t.x??.5),Number(t.y??.5));return{ref:r?this.compiled?.bodies.find(a=>a.name===r)?.ref??r:null}}case"world":return this.describeWorld(!!t.mjcf);case"dispose":return this.disposeWorld(),{ok:!0};default:throw new Error(`unknown method "${e.method}" (ping, load, run, control, snapshot, film, read, result, probe, settle, camera, select, pick, trail, replay, watch, world, dispose)`)}}need(){if(!this.engine||!this.renderer)throw new Error("the runtime is still booting");if(!this.compiled||!this.sim)throw new Error("no world is loaded: call load first");return{engine:this.engine,compiled:this.compiled,renderer:this.renderer,sim:this.sim}}async fetchMesh(e,t){let n=this.meshCache.get(e);if(n)return n;let r;if(typeof t=="object"&&"base64"in t)r=cE(t.base64);else{let a=typeof t=="string"?t:t.url;r=await this.pool.run(async()=>{let c=null;for(let l=1;l<=3;l++)try{let u=await fetch(a,{mode:"cors",credentials:"omit",cache:"force-cache",signal:AbortSignal.timeout(l===1?12e3:2e4)});if(!u.ok)throw new Error(`${u.status} ${u.statusText}`);return new Uint8Array(await u.arrayBuffer())}catch(u){c=u}throw new Error(`mesh "${e}": ${c?.message??"failed"} fetching ${a} (3 attempts)`)})}return this.meshCache.set(e,r),this.meshCache.size>400&&this.meshCache.delete(this.meshCache.keys().next().value),r}pool=new _d(2);async load(e){if(!this.engine||!this.renderer)throw new Error("the runtime is still booting");let t=e.world;if(!t||typeof t!="object")throw new Error("load needs a world");let n=e.meshes??{},r=new Set;for(let _ of t.machines??[])for(let b of _.package?.parts??[])for(let E of b.bodies??[])E.mesh?.primitive||r.add(Js(E.mesh));for(let _ of t.objects??[])_.shape?.kind==="mesh"&&!_.shape.mesh?.primitive&&r.add(Js(_.shape.mesh));let a={},c=Cn();await Promise.all([...r].map(async _=>{let b=n[_];if(!b)throw new Error(`mesh "${_}" has no source in meshes (a URL or base64)`);a[_]=await this.fetchMesh(_,b)}));let l=Cn();this.stopLoop();let u=xh({world:t,meshes:a}),d=Cn();console.log(`runmachine load: ${r.size} mesh(es) in ${(l-c).toFixed(0)} ms, compiled in ${(d-l).toFixed(0)} ms, ${u.files.length} file(s), mjcf ${u.mjcf.length} chars`);let p=this.engine.load(u);this.compiled=u,this.world=t,this.attached=!0;let m=this.renderer;this.sim=new oo(this.engine,u,{cameraRenderer:{render:(_,b,E)=>m.renderCamera(_,b,E)}}),this.renderer.build(u),this.poseBuf=new Float32Array(p.bodies.length*7),this.engine.poses(this.poseBuf),this.renderer.setPoses(p.bodies,this.poseBuf),this.renderer.render(),this.playing=!1,this.run=null,this.notifyState();let x=this.renderer.sceneBounds();return{...p,bounds:x.isEmpty()?null:{min:[x.min.x,x.min.y,x.min.z],max:[x.max.x,x.max.y,x.max.z]},warnings:u.warnings,machines:[...new Set(u.bodies.map(_=>_.machine).filter(Boolean))],actuatorRefs:u.actuators.map(_=>({ref:_.ref,kind:_.kind,maxTorque:_.maxTorque,maxSpeed:_.maxSpeed})),sensorRefs:u.sensors.map(_=>({ref:_.ref,type:_.type})),jointRefs:u.joints.map(_=>({ref:_.ref,type:_.type})),bodyRefs:u.bodies.map(_=>_.ref).filter(_=>_!=="world"),timestep:u.timestep}}disposeWorld(){this.stopLoop(),this.run=null,this.sim=null,this.compiled=null,this.world=null,this.engine?.dispose(),this.playing=!1}settle(e){let{engine:t,compiled:n}=this.need();if(this.run)throw new Error(`a run is in progress (${this.run.spec.runId}): stop it before settling`);if(!this.world)throw new Error("no world is loaded: call load first");let r=e.seconds===void 0?.5:Number(e.seconds);if(!(r>0&&r<=30))throw new Error("settle: seconds must be between 0 and 30");let a=dd(t,n,this.world,{machineId:typeof e.machineId=="string"?e.machineId:void 0,objectId:typeof e.objectId=="string"?e.objectId:void 0},r);return this.renderNow(),a}startRun(e){let{sim:t,compiled:n}=this.need();if(this.run)throw new Error(`a run is in progress (${this.run.spec.runId}): control stop first`);if(typeof e.runId!="string"||!e.runId)throw new Error("run needs a runId");let r=Number(e.duration);if(!(r>=0))throw new Error("run needs a duration in seconds (0 = until stopped)");let a=(e.realtime??!this.o.inWorker,!!e.realtime);this.speed=e.speed&&e.speed>0?e.speed:1;let c=this.renderer?.cameraPose();return t.begin({runId:e.runId,seed:e.seed,duration:r>0?r:Number.POSITIVE_INFINITY,programs:e.programs??[],record:e.record,camera:c}),this.replay=null,this.attached=!0,this.renderer?.clearTrail(),new Promise((l,u)=>{this.run={spec:e,sim:t,realtime:a,resolve:l,reject:u,wallStart:Cn(),simAtStart:0,lastProgress:0},this.playing=!0,this.notifyState(),a?this.schedule():this.runFast(n)})}async runFast(e){let t=this.run;if(!t)return;let n=.5;try{for(;this.run===t;){let r=t.sim.progress.t+n,a=!0;for(;a&&t.sim.progress.t<r;)a=t.sim.tick();if(this.progress(t),!a)break;await new Promise(c=>setTimeout(c,0))}this.run===t&&this.finish(t)}catch(r){this.run===t&&this.fail(t,r)}}progress(e){let t=e.sim.progress.t,n=(Cn()-e.wallStart)/1e3,r=n>0?t/n:0;if(Cn()-e.lastProgress>250){e.lastProgress=Cn(),this.o.post({[In]:1,type:"progress",runId:e.spec.runId,t,duration:e.spec.duration,rtf:r});let a=e.sim.drainLogs();a.length&&this.o.post({[In]:1,type:"logs",runId:e.spec.runId,lines:a})}}finish(e){let t=e.sim.end(),n=t.trajectory,r=this.keepOutput(`traj-${e.spec.runId}`,"trajectory","application/octet-stream",vh(n),`${e.spec.runId}.traj`);this.results.set(e.spec.runId,{result:t,trajectory:n}),this.results.size>4&&this.results.delete(this.results.keys().next().value),this.run=null,this.playing=!1,this.notifyState(),this.o.post({[In]:1,type:"run-finished",runId:e.spec.runId,status:t.status,reason:t.reason});let a=this.summary(t);(async()=>{let l=[r];if(e.spec.film)try{l.push(await this.renderFilm(e.spec.runId,e.spec.film))}catch(u){a.warnings.push(`film: ${u.message}`)}return{...a,outputs:l}})().then(l=>e.resolve(l),l=>e.reject(l))}fail(e,t){this.run=null,this.playing=!1,this.notifyState(),this.o.post({[In]:1,type:"run-finished",runId:e.spec.runId,status:"failed",reason:t.message}),e.reject(t)}summary(e){let{trajectory:t,...n}=e;return{...n,trajectory:{bodies:t.bodies.length,joints:t.joints.length,rate:t.rate,samples:t.samples,camera:!!t.camera},warnings:e.warnings.slice()}}resultOf(e){let t=this.results.get(e);if(!t)throw new Error(`no result for run "${e}" here (results kept: ${[...this.results.keys()].join(", ")||"none"})`);return this.summary(t.result)}control(e){let t=String(e.action??"");switch(t){case"pause":this.playing=!1;break;case"resume":case"play":if(!this.run)throw new Error("nothing to resume: start a run");this.playing=!0,this.run&&(this.run.wallStart=Cn()-this.run.sim.progress.t/this.speed*1e3);break;case"speed":this.speed=Math.max(.01,Math.min(16,Number(e.speed??1))),this.run&&(this.run.wallStart=Cn()-this.run.sim.progress.t/this.speed*1e3);break;case"stop":{let n=this.run;if(!n)throw new Error("no run to stop");n.sim.stop(String(e.reason??"stopped")),n.realtime&&this.finish(n);break}case"step":{let n=this.run;if(!n)throw new Error("no run to step");this.playing=!1;let r=Math.max(1,Math.min(1e3,Number(e.ticks??1)));for(let a=0;a<r&&n.sim.tick();a++);this.renderNow(),n.sim.done&&this.finish(n);break}default:throw new Error(`unknown control "${t}" (pause, resume, speed, stop, step)`)}return this.notifyState(),{playing:this.playing,speed:this.speed,t:this.sim?.time??0}}async postFrame(e=!1){let t=this.watching;if(!t||!this.renderer||!this.engine||!this.compiled||!e&&Cn()-t.last<t.everyMs)return;t.last=Cn();let n=this.compiled.sensors.find(r=>r.name===t.sensor);if(n?.camera)try{let r=await this.renderer.cameraJpeg(n.camera,this.engine.cameraPose(n.camera.name));this.o.post({[In]:1,type:"frame",sensor:n.ref,t:this.sim?.time??0,dataUrl:r})}catch{}}replayControl(e){let{compiled:t,renderer:n,engine:r}=this.need();if(this.run)throw new Error("a run is in progress; stop it before replaying");let a=String(e.action??"seek");if(a==="stop")return this.replay&&(this.replay=null,r.poses(this.poseBuf),n.setPoses(r.bodyNames(),this.poseBuf,!1),n.clearTrail(),this.renderNow()),{replaying:null};let c=String(e.runId??[...this.results.keys()].pop()??""),l=this.results.get(c);if(!l)throw new Error(`no recording of run "${c}" in this view (kept: ${[...this.results.keys()].join(", ")||"none"})`);if(!this.replay||this.replay.runId!==c){let p=new Qr(l.trajectory,t.timestep);p.load(t),this.replay={runId:c,engine:p,poses:new Float32Array(l.trajectory.bodies.length*7),playing:!1,speed:1,wallStart:0,simStart:0},this.attached=!0,n.clearTrail()}let u=this.replay,d=u.engine.duration();return a==="seek"?(u.playing=!1,u.engine.seek(Math.max(0,Math.min(d,Number(e.t??0)))),this.showReplayFrame()):a==="play"?(u.speed=e.speed&&Number(e.speed)>0?Number(e.speed):1,u.simStart=u.engine.time()>=d-1e-6?0:u.engine.time(),u.wallStart=Cn(),u.playing=!0,this.schedule()):a==="pause"&&(u.playing=!1),{replaying:c,t:u.engine.time(),duration:d,playing:u.playing}}showReplayFrame(){let e=this.replay;if(!e||!this.renderer)return;e.engine.poses(e.poses),this.renderer.setPoses(e.engine.bodyNames(),e.poses,!0);let t=this.attached?e.engine.cameraAt():null;t&&this.renderer.setCamera(t.pos,t.look,t.fov),this.renderer.render(),this.o.post({[In]:1,type:"state",playing:e.playing,t:e.engine.time(),runId:`replay:${e.runId}`,speed:e.speed,scripted:!!t})}notifyState(){let e=!!(this.run&&this.run.sim.cameraScripted&&this.attached);this.o.post({[In]:1,type:"state",playing:this.playing,t:this.sim?.time??0,runId:this.run?.spec.runId??null,speed:this.speed,scripted:e})}setVisible(e){this.visible=e,e&&this.schedule()}resize(e,t,n){this.renderer?.resize(e,t,n),this.renderNow()}input(e){let t=this.renderer;if(t){if((e.type==="drag"||e.type==="wheel"||e.type==="fit")&&(this.attached=!1),e.type==="drag")e.buttons===2||e.shift?t.pan(e.dx??0,e.dy??0):t.rotate(e.dx??0,e.dy??0);else if(e.type==="wheel")t.zoom(e.deltaY??0);else if(e.type==="fit")t.fit();else if(e.type==="pick"){let n=e,r=t.pick(n.x??.5,n.y??.5),a=r?this.compiled?.bodies.find(c=>c.name===r)?.ref??r:null;t.highlight(r),this.o.post({[In]:1,type:"picked",ref:a,x:n.x??.5,y:n.y??.5})}this.renderNow()}}schedule(){if(this.frameHandle!==null)return;let e=typeof requestAnimationFrame=="function"?requestAnimationFrame:t=>setTimeout(()=>t(Cn()),16);this.frameHandle=e(t=>{this.frameHandle=null,this.frame(t)})}stopLoop(){this.playing=!1}frame(e){let t=this.replay;if(t&&t.playing&&!this.run){let r=t.simStart+(Cn()-t.wallStart)/1e3*t.speed,a=t.engine.duration();t.engine.seek(Math.min(a,r)),r>=a&&(t.playing=!1),this.showReplayFrame(),this.lastFrame=e,(t.playing||this.visible)&&this.schedule();return}let n=this.run;if(n&&n.realtime&&this.playing){let r=(Cn()-n.wallStart)/1e3*this.speed,a=0;try{for(;n.sim.progress.t<r&&a<400&&n.sim.tick();)a++}catch(c){this.fail(n,c)}this.run===n&&(this.progress(n),n.sim.done&&this.finish(n))}e-this.lastFrame>12&&(this.renderNow(),this.lastFrame=e,this.watching&&this.run&&this.postFrame()),(this.visible||this.run&&this.playing)&&this.schedule()}renderNow(){if(!this.renderer||!this.engine||!this.compiled){this.renderer?.render();return}if(this.replay&&!this.run){this.showReplayFrame();return}if(this.engine.poses(this.poseBuf),this.renderer.setPoses(this.engine.bodyNames(),this.poseBuf,!!this.run),this.run&&this.attached&&this.run.sim.cameraScripted){let e=this.run.sim.cameraPose();this.renderer.setCamera(e.pos,e.look,e.fov)}this.renderer.render()}keepOutput(e,t,n,r,a){let c=`${e}-${(this.outputSeq++).toString(36)}`,l={id:c,kind:t,mime:n,bytes:r.byteLength,name:a};for(this.outputs.set(c,{info:l,bytes:r}),this.outputBytes+=r.byteLength;this.outputBytes>aE&&this.outputs.size>1;){let u=this.outputs.keys().next().value;this.outputBytes-=this.outputs.get(u)?.bytes.byteLength??0,this.outputs.delete(u)}return l}read(e){let t=String(e.outputId??""),n=this.outputs.get(t);if(!n)throw new Error(`no output "${t}" (kept: ${[...this.outputs.keys()].join(", ")||"none"})`);let r=Math.max(0,Number(e.offset??0)),a=Math.max(0,Math.min(Number(e.length??1e6),n.bytes.byteLength-r)),c=n.bytes.subarray(r,r+a);return{id:t,offset:r,length:a,total:n.bytes.byteLength,base64:oE(c),done:r+a>=n.bytes.byteLength,mime:n.info.mime,name:n.info.name}}async snapshot(e){let{renderer:t}=this.need(),n=Hl(Number(e.width??1280)),r=Hl(Number(e.height??720));e.camera&&this.camera(e.camera),this.renderNow();let a=t.capture(n,r),c=await Nm(a,n,r);return{...this.keepOutput("snap","snapshot","image/png",c,`snapshot-${Date.now()}.png`),t:this.sim?.time??0}}async film(e){let t=e.runId??[...this.results.keys()].pop();if(!t)throw new Error("no run to film: run first");return this.renderFilm(t,e)}async renderFilm(e,t){let{renderer:n,compiled:r,engine:a}=this.need(),c=this.results.get(e);if(!c)throw new Error(`no result for run "${e}"`);let l=t.quality??"draft",u=l==="youtube"?{w:1920,h:1080,fps:60}:l==="share"?{w:1280,h:720,fps:30}:{w:640,h:360,fps:24},d=Hl(t.width??u.w),p=Hl(t.height??u.h),m=t.fps??u.fps,x=t.speed&&t.speed>0?t.speed:1,_=c.trajectory,b=(_.samples-1)/_.rate,E=Math.max(0,t.from??0),w=Math.min(b,t.to??b),v=Math.max(1,Math.floor((w-E)/x*m));if(v>2e4)throw new Error(`that film would be ${v} frames; shorten it or lower the fps`);let D=new Qr(_,r.timestep);D.load(r);let L=this.poseBuf.slice(),N={...n.orbit,target:n.orbit.target.clone()},z=n.mode,P=n.cameraPose(),T=t.camera??(D.hasCamera?{kind:"scripted"}:{kind:"follow"});if(T.kind==="scripted"&&!D.hasCamera)throw new Error(`run "${e}" has no scripted camera: its programs never called camera.*`);let B=T.target?this.bodyNameOf(T.target):r.bodies.find(R=>R.machine)?.name??null,I=new Float32Array(_.bodies.length*7);try{let R=await $f({width:d,height:p,fps:m,frames:v},W=>{let j=E+W/m*x;if(D.seek(j),D.poses(I),n.setPoses(_.bodies,I),T.kind==="scripted"){let J=D.cameraAt();J&&n.setCamera(J.pos,J.look,J.fov)}else T.kind==="orbit"?(n.mode="orbit",n.orbit.follow=B,n.orbit.azimuth=(N.azimuth??0)+(T.turn??20)*Math.PI/180*(W/m),T.distance&&(n.orbit.distance=T.distance),T.elevation!==void 0&&(n.orbit.elevation=T.elevation*Math.PI/180)):T.kind==="lookAt"&&T.eye&&T.lookAt?n.lookAt(T.eye,T.lookAt):T.kind==="fit"?(n.mode="orbit",n.orbit.follow=null):(n.mode="orbit",n.orbit.follow=B,T.distance&&(n.orbit.distance=T.distance),T.elevation!==void 0&&(n.orbit.elevation=T.elevation*Math.PI/180));return n.capture(d,p)});return this.keepOutput(`film-${e}`,"film","video/webm",R,`${e}.webm`)}finally{Object.assign(n.orbit,N),n.orbit.target.copy(N.target),n.mode=z,z==="scripted"&&n.setCamera(P.pos,P.look,P.fov),n.setPoses(a.bodyNames(),L),n.render()}}bodyNameOf(e){let t=this.compiled;return t?t.bodies.find(n=>n.ref===e||n.name===e)?.name??t.bodies.find(n=>n.machine===e)?.name??null:null}probe(e){let{engine:t,compiled:n,sim:r}=this.need(),a=Array.isArray(e.bodies)?e.bodies:n.bodies.filter(x=>x.name!=="world").map(x=>x.ref),c={};for(let x of a){let _=this.bodyNameOf(x);if(!_)throw new Error(`unknown body "${x}" (bodies: ${n.bodies.map(b=>b.ref).filter(b=>b!=="world").join(", ")})`);c[x]={position:t.bodyPos(_).map(An),quat:t.bodyQuat(_).map(An)}}let l={};for(let x of n.joints){if(x.type==="free")continue;let _=t.joint(x.name);l[x.ref]={q:An(_.q),qd:An(_.qd)}}let u=x=>n.bodies.find(_=>_.name===x)?.ref??x,d=e.contacts===!1?[]:t.contacts().slice(0,50).map(x=>({a:u(x.a),b:u(x.b),dist:An(x.dist)})),p=this.renderer?.sceneBounds(),m=p&&!p.isEmpty()?{min:[p.min.x,p.min.y,p.min.z].map(An),max:[p.max.x,p.max.y,p.max.z].map(An)}:null;return{t:An(r.time),playing:this.playing,runId:this.run?.spec.runId??null,bodies:c,joints:l,contacts:d,bounds:m}}camera(e){let{renderer:t}=this.need();if(e.kind==="scripted"){this.attached=!0;let r=this.run&&this.run.sim.cameraScripted?this.run.sim.cameraPose():null,a=!r&&this.replay?this.replay.engine.cameraAt():null,c=!r&&!a?[...this.results.values()].reverse().find(u=>u.trajectory.camera)?.trajectory:null,l=r??a??(c?.camera?{pos:[c.camera[c.camera.length-7],c.camera[c.camera.length-6],c.camera[c.camera.length-5]],look:[c.camera[c.camera.length-4],c.camera[c.camera.length-3],c.camera[c.camera.length-2]],fov:c.camera[c.camera.length-1]}:null);if(!l)throw new Error("no scripted camera to follow: no program has driven the camera here");return t.setCamera(l.pos,l.look,l.fov),this.renderNow(),{scripted:!0,eye:l.pos.map(An),lookAt:l.look.map(An),fov:An(l.fov)}}(e.kind||e.rotate||e.zoom)&&(this.attached=!1),e.rotate&&t.rotate(e.rotate.dx,e.rotate.dy),e.zoom&&t.zoom(e.zoom),e.kind==="fit"&&t.fit(),e.kind==="preset"&&t.preset(e.view??"iso"),e.kind==="lookAt"&&e.eye&&e.lookAt&&t.lookAt(e.eye,e.lookAt),e.kind==="follow"&&t.follow(e.target?this.bodyNameOf(e.target):null),e.distance&&(t.orbit.distance=e.distance),e.elevation!==void 0&&(t.orbit.elevation=e.elevation*Math.PI/180),this.renderNow();let n=t.orbit;return{target:[n.target.x,n.target.y,n.target.z].map(An),distance:An(n.distance),azimuth:An(n.azimuth),elevation:An(n.elevation),follow:n.follow,scripted:!1}}describeWorld(e){let{compiled:t}=this.need();return{bodies:t.bodies.filter(n=>n.name!=="world").map(n=>({ref:n.ref,machine:n.machine,part:n.part,object:n.object,geoms:n.geoms.length})),joints:t.joints.map(n=>({ref:n.ref,type:n.type})),actuators:t.actuators.map(n=>({ref:n.ref,kind:n.kind,maxTorque:n.maxTorque,maxSpeed:n.maxSpeed})),sensors:t.sensors.map(n=>({ref:n.ref,type:n.type,camera:n.camera?{width:n.camera.width,height:n.camera.height,fov:n.camera.fov}:void 0})),metrics:t.metrics,timestep:t.timestep,gravity:t.gravity,warnings:t.warnings,mjcf:e?t.mjcf:void 0}}},_d=class{constructor(e){this.n=e}active=0;queue=[];run(e){return new Promise((t,n)=>{let r=()=>{this.active++,e().then(t,n).finally(()=>{this.active--,this.queue.shift()?.()})};this.active<this.n?r():this.queue.push(r)})}},An=i=>Math.round(i*1e4)/1e4,Hl=i=>Math.max(2,Math.round(i/2)*2),Cn=()=>typeof performance<"u"?performance.now():Date.now();function oE(i){let e="";for(let n=0;n<i.length;n+=32768)e+=String.fromCharCode.apply(null,Array.from(i.subarray(n,n+32768)));return btoa(e)}function cE(i){let e=atob(i),t=new Uint8Array(e.length);for(let n=0;n<e.length;n++)t[n]=e.charCodeAt(n);return t}var Wl=self,$s=null,$m=[],Gm=i=>Wl.postMessage({kind:"notice",notice:i});async function Wm(i){if(!$s){$m.push(i);return}try{let e=await $s.handle(i);Wl.postMessage({kind:"reply",reply:{[In]:1,id:i.id,ok:!0,result:e}})}catch(e){console.error(`runmachine ${i.method}:`,e),Wl.postMessage({kind:"reply",reply:{[In]:1,id:i.id,ok:!1,error:Yh(e)}})}}Wl.onmessage=async i=>{let e=i.data;switch(e.kind){case"init":{let t=new Gl({canvas:e.canvas,wasmUrl:e.wasmUrl,width:e.width,height:e.height,dpr:e.dpr,post:Gm,inWorker:!0});try{await t.init(),$s=t;for(let n of $m.splice(0))Wm(n)}catch(n){Gm({[In]:1,type:"error",error:Yh(n)})}break}case"request":Wm(e.req);break;case"input":$s?.input(e.ev);break;case"resize":$s?.resize(e.width,e.height,e.dpr);break;case"visible":$s?.setVisible(e.visible);break}};
/*! Bundled license information:

three/build/three.core.js:
three/build/three.module.js:
  (**
   * @license
   * Copyright 2010-2025 Three.js Authors
   * SPDX-License-Identifier: MIT
   *)
*/

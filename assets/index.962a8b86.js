import{m as e}from"./vendor.945d06ae.js";!function(e=".",o="__import__"){try{self[o]=new Function("u","return import(u)")}catch(t){const r=new URL(e,location),n=e=>{URL.revokeObjectURL(e.src),e.remove()};self[o]=e=>new Promise(((t,s)=>{const a=new URL(e,r);if(self[o].moduleMap[a])return t(self[o].moduleMap[a]);const m=new Blob([`import * as m from '${a}';`,`${o}.moduleMap['${a}']=m;`],{type:"text/javascript"}),l=Object.assign(document.createElement("script"),{type:"module",src:URL.createObjectURL(m),onerror(){s(new Error(`Failed to import: ${e}`)),n(l)},onload(){t(self[o].moduleMap[a]),n(l)}});document.head.appendChild(l)})),self[o].moduleMap={}}}("/assets/");OverlayScrollbars(document.getElementsByTagName("body"),{className:"os-theme-light"}),window.Alpine=e,e.start();

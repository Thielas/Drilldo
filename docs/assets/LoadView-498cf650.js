import{_ as g,u as _,a as v,o as r,c as u,b as s,d as o,e as c,f as x,g as w,n as k,Q as y,A as q,U as p,p as C,h as L}from"./index-d80f71a8.js";const a=i=>(C("data-v-a045f1e3"),i=i(),L(),i),S={class:"loader-container"},E=a(()=>s("h1",null,"Uploading your test data",-1)),I={class:"but-par"},V={key:0},$={key:0,class:"but-container"},B={key:0,class:"but-par"},M=a(()=>s("p",{class:"stats text"}," (Optional) You can also upload statistics from a prior session to allow question shuffle to prefer questions where you make mistakes. ",-1)),N={key:1,class:"navigator"},R=a(()=>s("p",{class:"explore text"},"Explore questions to revise your knowledge:",-1)),D=a(()=>s("span",{class:"but-text"},"Explore questions",-1)),Q=[D],U={class:"but-par"},A=a(()=>s("p",{class:"test text"},"Or you can start testing right away:",-1)),O=a(()=>s("span",{class:"but-text"},"Start testing",-1)),T=[O],z={key:2,class:"but-par offset"},F=a(()=>s("p",{class:"reset text"}," If you want to clear all questions, click this button: ",-1)),J=a(()=>s("span",{class:"but-text"},"Reset questions",-1)),Y=[J],j={__name:"LoadView",setup(i){const e=_(y),h=_(q),d=v();d.showMobileMenu=!1;function f(n){n.forEach(function(t){let l=0;t.answers.forEach(function(m){m.correct&&l++}),e.save({number:t.number,question:t.question,maxScore:l,answers:t.answers})})}function b(n){n.length!=e.all().length&&console.error("Error loading stats: Number of questions doesn't match"),n.forEach(function(t){e.where("number",t.number).update({numCorrect:t.numCorrect,numIncorrect:t.numIncorrect})}),d.statsLoaded=!0}return(n,t)=>(r(),u("div",S,[E,s("div",I,[o(e).all().length===0?(r(),u("p",V," First you need to upload your questions: ")):c("",!0),o(e).all().length===0?(r(),x(p,{key:1,onData:f,buttonText:"Load Questions"})):c("",!0)]),o(e).all().length>=1?(r(),u("div",$,[o(d).statsLoaded?c("",!0):(r(),u("div",B,[M,w(p,{onData:b,buttonText:"Load statistics"})]))])):c("",!0),o(e).all().length>=1?(r(),u("div",N,[s("div",{class:k(["but-par",{offset:!o(d).statsLoaded}])},[R,s("button",{class:"explore button",onClick:t[0]||(t[0]=l=>n.$router.push("/explore"))},Q)],2),s("div",U,[A,s("button",{class:"test button",onClick:t[1]||(t[1]=l=>n.$router.push("/test"))},T)])])):c("",!0),o(e).all().length>=1?(r(),u("div",z,[F,s("button",{class:"reset button",onClick:t[2]||(t[2]=l=>{o(e).flush(),o(h).flush()})},Y)])):c("",!0)]))}},H=g(j,[["__scopeId","data-v-a045f1e3"]]);export{H as default};

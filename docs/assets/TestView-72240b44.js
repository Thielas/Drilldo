import{r as S,v as I,b as k}from"./index-7718f21e.js";import{_ as M,u as V,Q as N}from"./UploadJsonComponent-f26af479.js";import{u as Q,s as b,O as m,o as d,c as _,a as o,V as h,b as l,S as q,e as R,d as T,p as B,g as E}from"./viewer-56c5588e.js";import{Q as U}from"./QuestionComponent-e4cf44a7.js";import{Q as $}from"./QuestionControlComponent-f3643f9e.js";const i=c=>(B("data-v-508bfe07"),c=c(),E(),c),A={class:"view-container"},D={key:0,class:"test-selector"},O=i(()=>o("h1",null,"Create your own test:",-1)),j={class:"form"},z=i(()=>o("span",null,"Select number of questions to test:",-1)),F={class:"form"},G=i(()=>o("span",null," Select maximum number of answers to be shown per question (0 to show all) ",-1)),H={class:"form"},J=i(()=>o("span",null," Do you want to use statistics to prefer questions where you make mistakes more often? ",-1)),K=i(()=>o("span",{class:"but-text"},"Start",-1)),L=[K],P={key:1,class:"test-container"},W={__name:"TestView",setup(c){const n=V(N),r=Q();n.where("showResults",!0).update({showResults:!1}),r.index=0,r.showMobileMenu=!1,r.viewMode=!1,r.editMode=!1;const{index:w}=b(r),{questions:p}=b(r),s=m(n.all().length),a=m(4),f=m(!0),v=m(!1);n.all().length===0&&S.push("/");function x(){const u=n.with("answers").get();f.value?u.sort((e,t)=>e.numIncorrect+e.numCorrect===0&&t.numIncorrect+t.numCorrect!==0||e.numIncorrect+e.numCorrect!==0&&t.numIncorrect+t.numCorrect===0?e.numIncorrect+e.numCorrect<t.numIncorrect+t.numCorrect?-1:1:e.numIncorrect!==t.numIncorrect?e.numIncorrect>t.numIncorrect?-1:1:e.numCorrect!==t.numCorrect?e.numCorrect<t.numCorrect?-1:1:Math.random()>.5?1:-1):u.sort((e,t)=>Math.random()>.5?1:-1),s.value>=0&&(u.length=s.value,u.sort((e,t)=>Math.random()>.5?1:-1)),u.forEach(function(e){let t=0;e.answers.sort((C,X)=>Math.random()>.5?1:-1),a.value>0&&a.value<=e.answers.length&&(e.answers.length=a.value),e.answers.forEach(function(C){C.correct&&t++}),n.save({id:e.id,maxScore:t})}),r.questions=u,v.value=!v.value}function g(){s.value>n.all().length?s.value=n.all().length:s.value<0&&(s.value=1)}function y(){s.value<0&&(s.value=0)}return(u,e)=>(d(),_("div",A,[v.value?(d(),_("div",P,[l(p).length>=1?(d(),q(U,{question:l(p)[l(w)],key:l(p)[l(w)].id},null,8,["question"])):R("",!0),T($)])):(d(),_("div",D,[O,o("div",j,[z,h(o("input",{type:"number","onUpdate:modelValue":e[0]||(e[0]=t=>s.value=t),onInput:e[1]||(e[1]=t=>g())},null,544),[[I,s.value]])]),o("div",F,[G,h(o("input",{type:"number","onUpdate:modelValue":e[2]||(e[2]=t=>a.value=t),onInput:e[3]||(e[3]=t=>y())},null,544),[[I,a.value]])]),o("div",H,[J,h(o("input",{type:"checkbox","onUpdate:modelValue":e[4]||(e[4]=t=>f.value=t)},null,512),[[k,f.value]])]),o("button",{class:"button",onClick:e[5]||(e[5]=t=>x())},L)]))]))}},se=M(W,[["__scopeId","data-v-508bfe07"]]);export{se as default};

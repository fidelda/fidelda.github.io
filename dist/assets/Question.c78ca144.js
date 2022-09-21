import{s as u,u as c,r as d}from"./button.esm.83859734.js";import{u as p}from"./users.bf872cf1.js";import{w as f}from"./db.c58fff9f.js";import{s as _}from"./selectbutton.esm.bb7423d1.js";import{h as a,o as v,c as h,e,b,j as r,u as $}from"./index.109dad95.js";import{_ as w}from"./0plugin-vue0export-helper.15deba66.js";const B={name:"Question",components:{SelectButton:_,Button:u},setup:()=>({v$:c(),store:p()}),data(){return{concentration:null,concentrationOptions:[{name:"1: Very bad",value:1},{name:"2: Bad",value:2},{name:"3: Good",value:3},{name:"4: Very good",value:4}],submitted:!1}},validations(){return{concentration:{required:d}}},methods:{handleSubmit(t){if(this.submitted=!0,t)this.storeData(),f(),this.$router.push("endscreen");else return},storeData(){this.store.insertConcentrationAfter(Number(this.concentration.value))}}},y={class:"main-wrapper"},S=e("h3",{class:"info-text"},"Please answer this last question before submitting your results",-1),V={class:"form-field-content-wrapper"},g=e("p",{class:"form-field-text"},"Rate from 1-4 how well this statement applied to you during the experiment:*",-1),q=e("p",{class:"form-field-quote"},'"I am in a calm environment with enough light and I am able to concentrate."',-1),x={class:"form-button-wrapper"};function C(t,o,D,N,n,i){const l=a("SelectButton"),m=a("Button");return v(),h("main",y,[S,e("form",{class:"form-wrapper",onSubmit:o[1]||(o[1]=$(s=>i.handleSubmit(!t.v$.$invalid),["prevent"]))},[e("div",{class:b(["form-field",{"p-error":t.v$.concentration.$invalid&&n.submitted}])},[e("div",V,[g,q,r(l,{class:"form-selectbutton",modelValue:t.v$.concentration.$model,"onUpdate:modelValue":o[0]||(o[0]=s=>t.v$.concentration.$model=s),options:n.concentrationOptions,optionLabel:"name",dataKey:"value","aria-labelledby":"single"},null,8,["modelValue","options"])])],2),e("div",x,[r(m,{type:"submit",label:"Submit",class:"mt-2"})])],32)])}const z=w(B,[["render",C]]);export{z as default};
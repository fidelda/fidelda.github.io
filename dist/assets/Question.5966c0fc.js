import{s as m,u as c,r as d}from"./button.esm.cc9a7ef5.js";import{u as p}from"./users.ebb36542.js";import{w as f}from"./db.09f5c6ed.js";import{s as _}from"./selectbutton.esm.0dfdc1ce.js";import{h as a,o as h,c as v,e,b,j as r,u as w}from"./index.a1cb3b10.js";import{_ as $}from"./0plugin-vue0export-helper.15deba66.js";const B={name:"Question",components:{SelectButton:_,Button:m},setup:()=>({v$:c(),store:p()}),data(){return{concentration:null,concentrationOptions:[{name:"1: Very bad",value:1},{name:"2: Bad",value:2},{name:"3: Good",value:3},{name:"4: Very good",value:4}],submitted:!1}},validations(){return{concentration:{required:d}}},methods:{handleSubmit(t){if(this.submitted=!0,t)this.storeData(),f(),this.$router.push("endscreen");else return},storeData(){this.store.insertConcentrationAfter(Number(this.concentration.value))}}},y={class:"main-wrapper"},S=e("h3",{class:"info-text"},"Please answer this last question before submitting your results",-1),g={class:"form-field-content-wrapper"},V=e("p",{class:"form-field-text"},"Rate from 1-4 how well this statement applied to you during the experiment:*",-1),x=e("p",{class:"form-field-quote"},'"During the experiment I was in a calm environment with enough light and I was able to concentrate."',-1),D={class:"form-button-wrapper"};function q(t,o,C,N,n,i){const l=a("SelectButton"),u=a("Button");return h(),v("main",y,[S,e("form",{class:"form-wrapper",onSubmit:o[1]||(o[1]=w(s=>i.handleSubmit(!t.v$.$invalid),["prevent"]))},[e("div",{class:b(["form-field",{"p-error":t.v$.concentration.$invalid&&n.submitted}])},[e("div",g,[V,x,r(l,{class:"form-selectbutton",modelValue:t.v$.concentration.$model,"onUpdate:modelValue":o[0]||(o[0]=s=>t.v$.concentration.$model=s),options:n.concentrationOptions,optionLabel:"name",dataKey:"value","aria-labelledby":"single"},null,8,["modelValue","options"])])],2),e("div",D,[r(u,{type:"submit",label:"Submit",class:"mt-2"})])],32)])}const z=$(B,[["render",q]]);export{z as default};

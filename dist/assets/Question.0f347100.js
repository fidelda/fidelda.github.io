import{s as c,u as m,r as p}from"./button.esm.a106f37d.js";import{u as f,h as r,o as v,c as _,e as t,b as h,j as i,v as b,x as w,y as $}from"./index.4502a972.js";import{w as S}from"./db.33e1bb97.js";import{s as y}from"./selectbutton.esm.35163192.js";import{_ as B}from"./0plugin-vue0export-helper.15deba66.js";const V={name:"Question",components:{SelectButton:y,Button:c},setup:()=>({v$:m(),store:f()}),data(){return{concentration:null,concentrationOptions:[{name:"1: Very bad",value:1},{name:"2: Bad",value:2},{name:"3: Good",value:3},{name:"4: Very good",value:4}],submitted:!1}},validations(){return{concentration:{required:p}}},beforeMount(){window.addEventListener("beforeunload",this.preventNav)},methods:{handleSubmit(e){if(this.submitted=!0,e)this.storeData(),S(),this.$router.push("endscreen");else return},storeData(){this.store.insertConcentrationAfter(Number(this.concentration.value))},preventNav(e){this.allowLeave||(e.preventDefault(),e.returnValue="")}}},n=e=>(w("data-v-2f40571d"),e=e(),$(),e),g={class:"main-wrapper"},I=n(()=>t("h3",{class:"info-text"},"Please answer this last question before submitting your results",-1)),x={class:"form-field-content-wrapper"},D=n(()=>t("p",{class:"form-field-text"},"Rate from 1-4 how well this statement applied to you during the experiment:*",-1)),N=n(()=>t("p",{class:"form-field-quote"},'"During the experiment I was in a calm environment with enough light and I was able to concentrate."',-1)),q={class:"form-button-wrapper"};function C(e,o,L,Q,s,l){const u=r("SelectButton"),d=r("Button");return v(),_("main",g,[I,t("form",{class:"form-wrapper",onSubmit:o[1]||(o[1]=b(a=>l.handleSubmit(!e.v$.$invalid),["prevent"]))},[t("div",{class:h(["form-field",{"p-error":e.v$.concentration.$invalid&&s.submitted}])},[t("div",x,[D,N,i(u,{class:"form-selectbutton",modelValue:e.v$.concentration.$model,"onUpdate:modelValue":o[0]||(o[0]=a=>e.v$.concentration.$model=a),options:s.concentrationOptions,optionLabel:"name",dataKey:"value","aria-labelledby":"single"},null,8,["modelValue","options"])])],2),t("div",q,[i(d,{type:"submit",label:"Submit",class:"mt-2"})])],32)])}const j=B(V,[["render",C],["__scopeId","data-v-2f40571d"]]);export{j as default};
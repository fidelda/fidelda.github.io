import{w as a}from"./db.c58fff9f.js";import{u as m}from"./users.bf872cf1.js";import{_}from"./0plugin-vue0export-helper.15deba66.js";import{o as l,c as d,e as t}from"./index.109dad95.js";const h=""+new URL("2W.5e3051c7.svg",import.meta.url).href,p=""+new URL("3G.3407eed2.svg",import.meta.url).href,u=""+new URL("7P.3cac2b37.svg",import.meta.url).href,g=""+new URL("5S.fc20469e.svg",import.meta.url).href;const f={name:"Letters1",setup:()=>({store:m()}),data(){return{start_timestamp:null,images:[{first:h,second:p,correct_img:2},{first:u,second:g,correct_img:1}],index:0}},created(){this.start_timestamp=Date.now()},methods:{handleClick(i){const e=Date.now()-this.start_timestamp,r=this.images[this.index].correct_img,o=i==r;this.store.insertLetterData(this.index,{correct_img:r,clicked_img:i,is_user_right:o,time:e}),this.index<this.images.length-1?(this.index++,this.start_timestamp=Date.now()):(a(),this.$router.push("question"))}}},x={class:"main-wrapper"},v={class:"card"},w={class:"flex flex-wrap card-container justify-content-center",style:{"max-width":"700px"}},L={class:"image-box"},k=["src"],y={class:"image-box"},U=["src"];function C(i,e,r,o,s,n){return l(),d("main",x,[t("div",v,[t("div",w,[t("div",L,[t("img",{src:`${s.images[s.index].first}`,class:"study-image",onClick:e[0]||(e[0]=c=>n.handleClick(1))},null,8,k)]),t("div",y,[t("img",{src:`${s.images[s.index].second}`,class:"study-image",onClick:e[1]||(e[1]=c=>n.handleClick(2))},null,8,U)])])])])}const B=_(f,[["render",C]]);export{B as default};
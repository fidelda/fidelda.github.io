import"./db.6d759d63.js";import{u as a}from"./users.3d94720d.js";import{_ as c}from"./0plugin-vue0export-helper.15deba66.js";import{P as n,o as m,c as _,e}from"./index.12ee6e46.js";const l=""+new URL("2W.5e3051c7.svg",import.meta.url).href,d=""+new URL("3G.3407eed2.svg",import.meta.url).href;const g={name:"Letters1",setup:()=>({store:a()}),data(){return{correct_img:2,start_timestamp:null,end_timestamp:null,images:["@/assets/svgs/2W.svg","@/assets/svgs/7P.svg"],index:0,cur_img:"2W"}},created(){this.start_timestamp=Date.now()},mounted(){},methods:{handleClick(s){this.end_timestamp=Date.now();const t=s==this.correct_img,o=this.end_timestamp-this.start_timestamp;console.log(this.correct_img),console.log(t),console.log(o),this.store.insertLetterData(0,{correct_img:this.correct_img,clicked_img:s,is_user_right:t,time:o}),console.log(n(this.store.getLetterDataById(0))),this.$router.push("question")}}},p={class:"main-wrapper"},u={class:"card"},h={class:"flex flex-wrap card-container justify-content-center",style:{"max-width":"700px"}},f={class:"image-box"},v={class:"image-box"};function x(s,t,o,k,w,r){return m(),_("main",p,[e("div",u,[e("div",h,[e("div",f,[e("img",{src:l,class:"study-image",onClick:t[0]||(t[0]=i=>r.handleClick(1))})]),e("div",v,[e("img",{src:d,class:"study-image",onClick:t[1]||(t[1]=i=>r.handleClick(2))})])])])])}const B=c(g,[["render",x]]);export{B as default};
import{_,B as u,b as h,r as c,o as d,c as f,d as o,w as b,e as a,v as i,f as v,g,h as w,i as y,p as B,j as k}from"./index-0b4c5e9c.js";const x="/assets/contact-b744afb3.jpg";const M={name:"BookingForm",components:{Button:u,BootstrapModal:h},data(){return{showThankyouModal:!1,name:"",email:"",phone:"",problem:""}},methods:{contactFormSubmit(){let l={Name:this.name,Email:this.email,Phone:this.phone,Problem:this.problem};this.axios({method:"post",url:"formBooking.php",data:l}).then(t=>{this.showThankyouModal=!0},t=>{console.log(t)})}}},s=l=>(B("data-v-d5582674"),l=l(),k(),l),C={class:"container container-tr pb-5"},S=s(()=>o("h2",{class:"text-center my-4"},"Contact Us",-1)),V={class:"row"},T=s(()=>o("div",{class:"col-lg-5"},[o("img",{src:x,alt:"contact",class:"img-fluid d-none d-lg-block"})],-1)),N={class:"col-lg-7"},U=s(()=>o("p",{class:"mt-4"}," Complete the form below and a member of our team will be in contact shortly. ",-1)),q=s(()=>o("p",null," We are always known for our committed and best customer support. ",-1)),F={class:"row"},I={class:"col-md-4"},E={class:"form-group"},P=s(()=>o("label",{for:"name"},"Name",-1)),j={class:"col-md-4"},D={class:"form-group"},A=s(()=>o("label",{for:"email"},"Email",-1)),W={class:"col-md-4"},z={class:"form-group"},G=s(()=>o("label",{for:"phone"},"Phone",-1)),H={class:"row"},J={class:"col-md-12"},K={class:"form-group"},L=s(()=>o("label",{for:"problem"},"Message",-1)),O={class:"row"},Q={class:"form-group mx-auto my-2"},R=s(()=>o("h6",null," Thank you for contacting us. ",-1)),X=s(()=>o("p",null," A member of our team will be in touch with you shortly. ",-1));function Y(l,t,Z,$,n,r){const m=c("Button"),p=c("BootstrapModal");return d(),f("main",null,[o("div",C,[S,o("div",V,[T,o("div",N,[U,q,o("form",{onSubmit:t[4]||(t[4]=b((...e)=>r.contactFormSubmit&&r.contactFormSubmit(...e),["prevent"]))},[o("div",F,[o("div",I,[o("div",E,[P,a(o("input",{type:"text",class:"form-control",id:"name","onUpdate:modelValue":t[0]||(t[0]=e=>n.name=e),required:""},null,512),[[i,n.name]])])]),o("div",j,[o("div",D,[A,a(o("input",{type:"email",class:"form-control",id:"email","onUpdate:modelValue":t[1]||(t[1]=e=>n.email=e),required:""},null,512),[[i,n.email]])])]),o("div",W,[o("div",z,[G,a(o("input",{type:"text",class:"form-control",id:"phone","onUpdate:modelValue":t[2]||(t[2]=e=>n.phone=e),required:""},null,512),[[i,n.phone]])])])]),o("div",H,[o("div",J,[o("div",K,[L,a(o("textarea",{class:"form-control",rows:"4",id:"problem","onUpdate:modelValue":t[3]||(t[3]=e=>n.problem=e),required:""},null,512),[[i,n.problem]])])])]),o("div",O,[o("div",Q,[v(m,{type:"submit",btnTitle:"Submit"})])])],32)])]),n.showThankyouModal?(d(),g(p,{key:0,onClose:t[5]||(t[5]=e=>l.$router.go(0))},{default:w(()=>[R,X]),_:1})):y("",!0)])])}const to=_(M,[["render",Y],["__scopeId","data-v-d5582674"]]);export{to as default};
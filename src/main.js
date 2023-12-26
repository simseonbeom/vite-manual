

import './styles/main.css'
import {button} from "@/styles/main.module.css";
import jsLogo from "@/assets/javascript.svg";
import img from "@/assets/8b.jpg";


const app = document.querySelector('#app');

const template = /* html */`
  <figure>
    <img src="${img}" alt="" />
    <figcaption>자바스크립트 로고</figcaption>
  </figure>
`


app.insertAdjacentHTML('beforeend',template)












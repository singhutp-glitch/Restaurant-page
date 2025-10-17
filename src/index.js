console.log('hello');

import foodyimg from "./foody.jpeg";

const home=document.querySelector('div#content');
const head=document.createElement('h1');
const pic=document.createElement('img');
const para=document.createElement('p');

head.textContent="Hey Foody";
pic.src=foodyimg;
para.textContent="The Best Restaurent in your city";

home.appendChild(head);
home.appendChild(pic);
home.appendChild(para);
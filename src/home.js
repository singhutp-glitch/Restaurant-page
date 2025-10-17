export {loadPage}
import foodyimg from "./foody.jpeg";

function loadPage()
{

const home=document.querySelector('div#content');
const btn1=document.createElement('button');
const btn2=document.createElement('button');
const btn3=document.createElement('button');
const head=document.createElement('h1');
const pic=document.createElement('img');
const para=document.createElement('p');

head.textContent="Hey Foody";
pic.src=foodyimg;
para.textContent="The Best Restaurent in your city";

btn1.textContent="Home";
btn2.textContent="Menu";
btn3.textContent="About";


home.appendChild(btn1);
home.appendChild(btn2);
home.appendChild(btn3);
home.appendChild(head);
home.appendChild(pic);
home.appendChild(para);
}
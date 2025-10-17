console.log('hello');
import {loadPage} from "./home.js"
import { loadMenu } from "./menu.js";

loadPage();
const tabs=document.querySelector('nav');
tabs.addEventListener('click',function(event){
    const value =event.target.classList.value;
    if(value==='home')
    {
        loadPage();
    }
    else if(value==="menu")
    {
        loadMenu();
    }
})
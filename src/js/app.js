import {select} from './settings.js';
import SideMenu from './components/SideMenu.js';

const app = {
    initSideMenu: function(){
        const thisApp = this;

        const sideMenuElem = document.querySelector(select.containerOf.sideMenu);
        new SideMenu(sideMenuElem);
    },
  
    init: function(){
        const thisApp = this;
        this.initSideMenu();
    },
  
  };
  
app.init();
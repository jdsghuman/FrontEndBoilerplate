import $ from 'jquery';

class MobileMenu {
  constructor(){
    this.siteHeader = $('.site-header');
    this.events();
  }
  events(){
    this.siteHeader.click(function(){
      alert('text class clicked!');
    });
  }
}

export default MobileMenu;

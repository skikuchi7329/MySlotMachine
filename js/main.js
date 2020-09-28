'use strict'

{
  class Panel {
    constructor(){
      const section = document.createElement('section');
      section.classList.add('panel');

      this.img = document.createElement('img');
      this.img.src = 'img/seven.png';
      
      this.stop = document.createElement('div');
      
    }
  }
}
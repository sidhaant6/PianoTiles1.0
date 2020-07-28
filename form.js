class Form {

    constructor() {
      this.input = createInput("Name");
      this.buttonClassic = createButton('Classic');
      this.buttonArcade = createButton('Arcade');
      this.button7 = createButton('7x7');
      this.greeting = createElement('h2');
      this.title = createElement('h2');

    }
    hide(){
      this.greeting.hide();
      this.button7.hide();
      this.input.hide();
      this.title.hide();
      this.buttonClassic.hide();
      this.buttonArcade.hide();
    }
  
    display(){
      this.title.html("Piano Tiles");
      this.title.position(450/2 - 50, 0);
  
      this.input.position(450/2 - 40 , 550/2 - 80);
      this.button7.position(450/2 + 60, 550/2);
      this.buttonClassic.position(450/2,550/2);
      this.buttonArcade.position(450/2 - 60, 550/2)
  
      this.buttonClassic.mousePressed(()=>{
        this.input.hide();
        this.buttonClassic.hide();
        this.buttonArcade.hide();
        this.button7.hide();
        
        classic.tiles();


       // player.name = this.input.value();
       var name= this.input.value();
        this.greeting.html("Hello " + name)
        this.greeting.position(450/2 - 70, 550/4);
      });
  
      this.buttonArcade.mousePressed(()=>{
        this.input.hide();
        this.buttonClassic.hide();
        this.buttonArcade.hide();
        this.button7.hide();


       // player.name = this.input.value();
       var name= this.input.value();
        this.greeting.html("Hello " + name)
        this.greeting.position(450/2 - 70, 550/4);
      });
  
      this.button7.mousePressed(()=>{
        this.input.hide();
        this.buttonClassic.hide();
        this.buttonArcade.hide();
        this.button7.hide();


       // player.name = this.input.value();
       var name= this.input.value();
        this.greeting.html("Hello " + name)
        this.greeting.position(450/2 - 70, 550/4);
      });
  
      
  
    }
  }
  
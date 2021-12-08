let cnv = document.getElementById("Mycanvas"); 
let ctx = cnv.getContext("2d");
let div = document.getElementById("parent");

let map_cnv = document.createElement('canvas');
map_cnv.width = cnv.width;
map_cnv.height = cnv.height;
let map_ctx = map_cnv.getContext("2d");

// paramètre map 
let tlm;
let tls;
let tls1;
let tls_elts = [];

// incrémentation rectangle 
let i = 10;
let y = 320;


let move_div1 = false;
let move_div2 = false;
let move_div3 = false;

let sonMarcheJ = new Audio("./Musique/marche.mp3");
let frappeJ1_son = new Audio("./Musique/frappe1J.mp3");
let frappe3J_son = new Audio("./Musique/kick.mp3");
let coup2poing = new Audio("./Musique/punch.mp3");
let bombe_son = new Audio("./Musique/bombe.mp3");
let son_jeu = new Audio("./Musique/background.mp3");
let degaE1_son = new Audio("./Musique/f1.mp3");
let frappe_E1_son = new Audio("./Musique/F1E1.mp3");
let charge_pistolet = new Audio("./Musique/chargepistolet.mp3");
let tire_son= new Audio("./Musique/tire.mp3");
let victoire_son = new Audio("./Musique/victoire.mp3");
let mort_degat_son =  new Audio("./Musique/dead.mp3");
let magie_son = new Audio("./Musique/load.mp3");
let recharge_vie_son = new Audio("./Musique/vie.mp3");


let img = new Image();
let img0 = new Image();
let img1 = new Image();
let img2 = new Image();
let img3 = new Image();
let img4 = new Image();
let img5 = new Image();
let img6 = new Image();
let img7 = new Image();
let img8 = new Image();
let img9 = new Image();
let img10 = new Image();
let img11 = new Image();
let img12 = new Image();
let img13 = new Image();
let img14 = new Image();
let img15 = new Image();
let img16 = new Image();
let img17 = new Image();
let img18 = new Image();
let img19 = new Image();
let img20 = new Image();

img.src = "./image/spritesheet/partie1.png";
img0.src = "./image/spritesheet/ennemi.png";
img1.src = "./image/spritesheet/dead.png";
img2.src = "./image/spritesheet/GrimpeJ.png";
img3.src = "./image/spritesheet/magie2.png";
img4.src = "./image/spritesheet/degatJ.png";
img5.src = "./image/spritesheet/militaire.png";
img6.src = "./image/spritesheet/feu.png";
img7.src = "./image/spritesheet/FrappeE.png";
img8.src = "/image/vie/1.png";
img9.src = "/image/vie/2.png";
img10.src = "/image/vie/3.png";
img11.src = "/image/vie/4.png";
img12.src = "/image/vie/5.png";
img13.src = "/image/vie/6.png";
img14.src = "/image/spritesheet/Ennemi3.png";
img15.src = "/image/spritesheet/statique.png";
img16.src = "/image/spritesheet/tireE4.png";
img17.src = "./image/spritesheet/bombe.png";
img18.src = "./image/spritesheet/boum.png";
img19.src = "./image/spritesheet/vie.png";
img20.src = "./image/spritesheet/block.png";

let tabE = [];
let tabE2 = [];
let tabE3 = [];
let tabJ = [];

let tab_marche = [];
let tab_frappe1 = [];
let tab_frappe2 = [];
let tab_frappe3 = [];
let tab_frappeE1 = [];
let tab_frappeE2 = [];
let tab_mortE2 = [];
let tab_degatE2 = [];
let tab_marcheE2 = [];
let tab_degat_j = [];
let tab_explosion = [];

let tab_vie = [];
let Tab_statique_e = [];
let Tab_degat_e = [];
let tab_mort = [];
let tab_mort2 = [];
let tab_grimpeJ = [];
let tab_descendre = [];
let tab_magieJ = [];
let tab_militaireM = [];
let tab_militaireT = [];

let vitesse_tire = 0;
let index_vie = 0;
let marche_id = 0;
let magie_id = 0;
let grimpe_id = 0;
let descendre_id = 0;
let frappe1_id = 0;
let frappe2_id = 0;
let frappe3_id = 0;
let statique_id = 0;
let degatJ_id = 0;
let degat_id = 0;
let mort_id = 0;
let mort2_id = 0;
let marcheE3_id = 0;
let FrappeE1_id = 0;
let statiqueJ_id = 0;

let FrappeE2_id = 0;
let mortE2_id = 0;
let degatE2_id = 0;
let marcheE2_id = 0;
let tireE4_id = 0;
let explosion_id = 0;

let movej_x = 0; 
let movej_x1 = 112; 
let movej_y = 380; 

let coup_on = -1;
let coup_on1 = -1;
let generation_on = -1;
let dega_on = 0;
let moveE_x = 550;
let moveE_y = 78;
let index = 0;
let index_vitesse = 0;
let tire_on = 0;

let marche = true;


let frappe1 = false;
let frappe2 = false;
let frappe3 = false;
let chrono = false;
let chrono1 = false;
let degat = false;
let degatJ = false;
let degatE2 = false;
let generation = false;
let generationE2 = false;
let generationE2_2 = false;
let generationE3 = false;
let generationE4 = false;
let combat1 = true;
let joueurvie = false;
let statiqueJ = false;
let statiqueE = false;
let frappeE1 = false;
let FrappeE2 = false;
let statiqueE3 = false;
let statiqueE4 = false;


let joueurvieM1 = false;
let joueurvieM2 = false;
let joueurvieM3 = false;

let mort = false;
let mort2 = false;
let mort3 = false;
let mort4 = false;
let grimpe = false;
let descendre = false;
let disparition = false;
let santé = false;
let magie = false;
let tireE4 = false;
let explosion = false;
let bombe = false;
let generation_bloc = false;

let tab_posE = [[550,1150,1700,1700,850],[78,76,360,360,385,365]]; // position ennemis (change en fonction de la taille des ennemis)
let tab_vitesseJ = [10,5];

let e1 = tab_posE[0][index]; 
let e2 = e1 + 70; 

let rect; 
let rect1; 


// construction map 

function onload_tlm () {
  
  if(this.status == 200) {
    
    tlm = JSON.parse(this.responseText);
    tls = new Image();
    tls1 = new Image();
    tls.src = "./image/tilesets/terrain.png";
    
    tls.onload = function() {
      
      // let tls_i = 1;
      // let tls_j = 1;
        
      let tls_imageheight = tlm["tilesets"][0]["imageheight"];
      let tls_imagewidth = tlm["tilesets"][0]["imagewidth"];
      // let tls_margin = 0;
      // let tls_spacing = 0;
      let tls_tileheight = tlm["tilesets"][0]["tileheight"];
      // let tls_tilecount = tlm["tilesets"][0]["tilecount"];
      
      let canvas = document.createElement('canvas'); 
      canvas.height = tls_imageheight;
      canvas.width = tls_imagewidth;
      let context = canvas.getContext('2d');
      context.drawImage(tls, 0, 0, tls.width, tls.height); 
      
      for(let ih = 0; ih < tls_imageheight; ih += tls_tileheight) {
        
        for(let iw = 0; iw < tls_imagewidth; iw += tls_tileheight) {
          
          let canvas2 = document.createElement('canvas');
          canvas2.height = tls_tileheight;
          canvas2.width = tls_tileheight;
          let context2 = canvas2.getContext('2d'); 
          let canvasImageData = context.getImageData(iw, ih, tls_tileheight, tls_tileheight);
          context2.putImageData(canvasImageData, 0,0);
          tls_elts.push(canvas2);
        }
      }
  
      let layer0_data = tlm["layers"][0]["data"];
      let layer0_height = tlm["layers"][0]["height"];
      let layer0_width = tlm["layers"][0]["width"];
      let layer0_data_i = 0;
  
      let layer1_data = tlm["layers"][1]["data"];
      let layer1_height = tlm["layers"][1]["height"];
      let layer1_width = tlm["layers"][1]["width"];
      
      for(let ih = 0; ih < layer0_height; ih += 1){

        for(let iw = 0; iw < layer0_width; iw += 1){

          if(layer0_data[layer0_data_i] > 0){

            map_ctx.drawImage(tls_elts[layer0_data[layer0_data_i]-1],iw*tls_tileheight, ih*tls_tileheight);

          }

          layer0_data_i += 1;

          }

        }
  
        let layer1_data_i = 0;
  
        for(let ih = 0; ih < layer1_height; ih += 1) {

          for(let iw = 0; iw < layer1_width; iw += 1) {

            if(layer1_data[layer1_data_i] > 0){
  
              map_ctx.drawImage(tls_elts[layer1_data[layer1_data_i]-1],iw*tls_tileheight, ih*tls_tileheight); 

          }
  
          layer1_data_i += 1;

        }

      }

    }
  }
  
}

let xobj = new XMLHttpRequest();
xobj.onload = onload_tlm;
xobj.overrideMimeType("application/json");
xobj.open("GET", "./image/tilemaps/carteofficiel.json", true);
xobj.send();


// partie decoupage d'image personnages 

img4.onload = function() {

  let canvas1 = document.createElement("canvas"); 

  canvas1.width = 224;  
  canvas1.height = 127;   

  let context1 = canvas1.getContext("2d");
  context1.drawImage(img4,0,0,224,127); // image intégrale 

  for(let j = 0; j < 1; j++) {
      
      
      for(let i = 0; i < 2; i++) { 
          
          let canvasImageData1 = context1.getImageData(i* 112, 0, 112, 127);  //vlr modifier pour ajuster le découpage 
          let canvas2 = document.createElement("canvas"); 
          canvas2.width = 224;
          canvas2.height = 127;
          let context2 = canvas2.getContext("2d");
          context2.putImageData(canvasImageData1, 0,0); // introduction des parties découpées dans le nvx canvas 

          tab_degat_j.push(canvas2); // tab pour chaque mouvements 
      }
  }

}

img18.onload = function() {
  
  let canvas1 = document.createElement("canvas"); 

  canvas1.width = 623;  
  canvas1.height = 167;   

  let context1 = canvas1.getContext("2d");
  context1.drawImage(img18,0,0,623,167);

  for(let j = 0; j < 1; j++) {
    
    for(let i = 0; i < 4; i++) { 
      
      let canvasImageData1 = context1.getImageData(i* 170, 0, 170, 167);  //vlr modifier pour ajouter le découpage 
      let canvas2 = document.createElement("canvas"); 
      canvas2.width = 623;
      canvas2.height = 167;
      let context2 = canvas2.getContext("2d");
      context2.putImageData(canvasImageData1, 0,0); 
      
      tab_explosion.push(canvas2); 


      }
    }
  }


img16.onload = function(){
  
  let canvas1 = document.createElement("canvas"); 

  canvas1.width = 409; 
  canvas1.height = 111;   

  let context1 = canvas1.getContext("2d");
  context1.drawImage(img16,0,0,409,111); 

  for(let j = 0; j < 1; j++) {

    for(let i = 0; i < 4; i++) { 
      
      let canvasImageData1 = context1.getImageData(i* 120, 0, 120, 111);  //vlr modifier pour ajouter le découpage 
      let canvas2 = document.createElement("canvas"); 
      canvas2.width = 409;
      canvas2.height = 111;
      let context2 = canvas2.getContext("2d");
      context2.putImageData(canvasImageData1, 0,0); // introduction des parties découpées dans le nvx canvas 
      
      tab_militaireT.push(canvas2);

    }
    
    for(let i = 0; i < 4; i++) { 
      
      let canvasImageData1 = context1.getImageData(i* 120, 0, 120, 111);   
      let canvas2 = document.createElement("canvas"); 
      canvas2.width = 409;
      canvas2.height = 111;
      let context2 = canvas2.getContext("2d");
      context2.putImageData(canvasImageData1, 0,0);  
      
      tab_militaireT.push(canvas2);  

    }
    
    for(let i = 0; i < 4; i++) { 
      
      let canvasImageData1 = context1.getImageData(i* 120, 0, 120, 111);   
      let canvas2 = document.createElement("canvas"); 
      canvas2.width = 409;
      canvas2.height = 111;
      let context2 = canvas2.getContext("2d");
      context2.putImageData(canvasImageData1, 0,0); 

      tab_militaireT.push(canvas2);  
    
    }
    
    for(let i = 0; i < 4; i++) { 
      
      let canvasImageData1 = context1.getImageData(i* 110, 0, 110, 111);  
      let canvas2 = document.createElement("canvas"); 
      canvas2.width = 409;
      canvas2.height = 111;
      let context2 = canvas2.getContext("2d");
      context2.putImageData(canvasImageData1, 0,0);  
      
      tab_militaireT.push(canvas2); 
    }
  }
}


img14.onload = function() {
  
  let canvas1 = document.createElement("canvas"); 

  canvas1.width = 1152;  
  canvas1.height = 136;   

  let context1 = canvas1.getContext("2d");
  context1.drawImage(img14,0,0,1152,136);  
  
  for(let j = 0; j < 1; j++) {
    
    for(let i = 0; i < 3; i++) { 
      
      let canvasImageData1 = context1.getImageData(i* 105, 0, 105, 136);   
      let canvas2 = document.createElement("canvas"); 
      canvas2.width = 1152;
      canvas2.height = 136;
      let context2 = canvas2.getContext("2d");
      context2.putImageData(canvasImageData1, 0,0);  
      
      tab_marcheE2.push(canvas2);  

    }

    for(let i = 3; i < 5; i++) { 
      
      let canvasImageData1 = context1.getImageData(i* 110, 0, 110, 136);   
      let canvas2 = document.createElement("canvas"); 
      canvas2.width = 1152;
      canvas2.height = 136;
      let context2 = canvas2.getContext("2d");
      context2.putImageData(canvasImageData1, 0,0);  

      tab_frappeE2.push(canvas2); 

    }

    for(let i = 5; i < 7; i++) { 
      
      let canvasImageData1 = context1.getImageData(i* 109.8, 0, 109.8, 136);  
      let canvas2 = document.createElement("canvas"); 
      canvas2.width = 1552; 
      canvas2.height = 136;
      let context2 = canvas2.getContext("2d");
      context2.putImageData(canvasImageData1, 0,0);  

      tab_degatE2.push(canvas2); 
    
    }
    
    for(let i = 7; i < 10; i++) { 
      
      let canvasImageData1 = context1.getImageData(i* 114, 0, 114, 136); 
      let canvas2 = document.createElement("canvas"); 
      canvas2.width = 1552;
      canvas2.height = 136;
      let context2 = canvas2.getContext("2d");
      context2.putImageData(canvasImageData1, 0,0); 
      tab_mortE2.push(canvas2); 
    
    }
  }
}



img7.onload = function() {

  let canvas1 = document.createElement("canvas"); 

  canvas1.width = 168;  
  canvas1.height = 115;   

  let context1 = canvas1.getContext("2d");
  context1.drawImage(img7,0,0,168,115);  

  for(let j = 0; j < 1; j++) {
      
      
      for(let i = 0; i < 2; i++) { 
          
          let canvasImageData1 = context1.getImageData(i* 76, 0, 76, 115);   
          let canvas2 = document.createElement("canvas"); 
          canvas2.width = 168;
          canvas2.height = 115;
          let context2 = canvas2.getContext("2d");
          context2.putImageData(canvasImageData1, 0,0); 

          tab_frappeE1.push(canvas2); 
      }
  }

}


img5.onload = function() {

  let canvas1 = document.createElement("canvas"); 

  canvas1.width = 271;  
  canvas1.height = 175;   

  let context1 = canvas1.getContext("2d");
  context1.drawImage(img5,0,0,271,175);

  for(let j = 0; j < 1; j++) {
      
      
      for(let i = 0; i < 3; i++) { 
          
          let canvasImageData1 = context1.getImageData(i* 90, 0, 90, 175);   
          let canvas2 = document.createElement("canvas"); 
          canvas2.width = 271;
          canvas2.height = 175;
          let context2 = canvas2.getContext("2d");
          context2.putImageData(canvasImageData1, 0,0);  

          tab_militaireM.push(canvas2);  
      }
  }
}



img3.onload = function() {

  let canvas1 = document.createElement("canvas"); 

  canvas1.width = 672;  
  canvas1.height = 175;   

  let context1 = canvas1.getContext("2d");
  context1.drawImage(img3,0,0,784,175); 

  for(let j = 0; j < 1; j++) {
      
      
      for(let i = 0; i < 6; i++) { 
          
          let canvasImageData1 = context1.getImageData(i* 112, 0, 112, 175);  
          let canvas2 = document.createElement("canvas"); 
          canvas2.width = 672;
          canvas2.height = 175;
          let context2 = canvas2.getContext("2d");
          context2.putImageData(canvasImageData1, 0,0);  

          tab_magieJ.push(canvas2); 
      }
  }
}


img2.onload = function() {

  let canvas1 = document.createElement("canvas"); 

  canvas1.width = 224; 
  canvas1.height = 149;   

  let context1 = canvas1.getContext("2d");
  context1.drawImage(img2,0,0,224,149);  

  for(let j = 0; j < 1; j++) {
      
      
      for(let i = 0; i < 2; i++) { 
          
          let canvasImageData1 = context1.getImageData(i* 112, 0, 112, 149);  
          let canvas2 = document.createElement("canvas"); 
          canvas2.width = 224;
          canvas2.height = 149;
          let context2 = canvas2.getContext("2d");
          context2.putImageData(canvasImageData1, 0,0); 
          tab_grimpeJ.push(canvas2); 
          tab_descendre.push(canvas2);
      }
  }

}


img1.onload = function() {

  let canvas1 = document.createElement("canvas"); 

  canvas1.width = 324;  
  canvas1.height = 119;   

  let context1 = canvas1.getContext("2d");
  context1.drawImage(img1,0,0,324,119);  

  for(let j = 0; j < 1; j++) {
      
      
      for(let i = 0; i < 3; i++) { 
          
          let canvasImageData1 = context1.getImageData(i* 100, 0, 120, 112);   
          let canvas2 = document.createElement("canvas"); 
          canvas2.width = 324;
          canvas2.height = 119;
          let context2 = canvas2.getContext("2d");
          context2.putImageData(canvasImageData1, 0,0); 

          tab_mort.push(canvas2);
          tab_mort2.push(canvas2);
      }
  }
}

img0.onload = function() {

  let canvas1 = document.createElement("canvas"); 

  canvas1.width = 360;  
  canvas1.height = 124;  

  let context1 = canvas1.getContext("2d");
  context1.drawImage(img0, 0,0, 360 , 124); 

  for(let j = 0; j < 1; j++) {
      
      
      for(let i = 0; i < 3; i++) { 
          
          let canvasImageData1 = context1.getImageData(i* 70, 0, 70, 124); 
          let canvas2 = document.createElement("canvas"); 
          canvas2.width = 360;
          canvas2.height = 124;
          let context2 = canvas2.getContext("2d");
          context2.putImageData(canvasImageData1, 0,0);

          Tab_statique_e.push(canvas2); 

      }

      for(let i = 3; i < 5; i++) { 
          
          let canvasImageData1 = context1.getImageData(i* 70, 0, 67, 124);   
          let canvas2 = document.createElement("canvas"); 
          canvas2.width = 360;
          canvas2.height = 124;
          let context2 = canvas2.getContext("2d");
          context2.putImageData(canvasImageData1, 0,0); 

          Tab_degat_e.push(canvas2);  

      }
  }
  
}

img.onload = function() {

  let canvas1 = document.createElement("canvas"); 

  canvas1.width = 1008;  
  canvas1.height = 136;   

  let context1 = canvas1.getContext("2d");
  context1.drawImage(img, 0,0, 1008 , 136); 

  for(let j = 0; j < 1; j++) {
    
    for(let i = 0; i < 3; i++) { 
      
      let canvasImageData1 = context1.getImageData(i* 112,  0/*j * 15*/, 112, 136); 
      let canvas2 = document.createElement("canvas"); 
      canvas2.width = 1008;
      canvas2.height = 136;
      let context2 = canvas2.getContext("2d");
      context2.putImageData(canvasImageData1, 0,0); 
      tab_marche.push(canvas2);
    }

    for(let i = 3; i < 5; i++) { 
      
      let canvasImageData1 = context1.getImageData(i* 112, /* 0*/j * 15, 112, 136); 
      let canvas2 = document.createElement("canvas"); 
      canvas2.width = 1008;
      canvas2.height = 136;
      let context2 = canvas2.getContext("2d");
      context2.putImageData(canvasImageData1, 0,0); 
      
      tab_frappe1.push(canvas2); 
    
    }
    
    for(let i = 5; i < 7; i++) { 
      
      let canvasImageData1 = context1.getImageData(i* 112, /* 0*/j * 15, 112, 136); 
      let canvas2 = document.createElement("canvas"); 
      canvas2.width = 1008;
      canvas2.height = 136;
      let context2 = canvas2.getContext("2d");
      context2.putImageData(canvasImageData1, 0,0);  
      
      tab_frappe2.push(canvas2);  
    
    }

    for(let i = 7; i < 9; i++) { 
      
      let canvasImageData1 = context1.getImageData(i* 112, /* 0*/j * 15, 112, 136); 
      let canvas2 = document.createElement("canvas"); 
      canvas2.width = 1008;
      canvas2.height = 136;
      let context2 = canvas2.getContext("2d");
      context2.putImageData(canvasImageData1, 0,0); 

      tab_frappe3.push(canvas2); 
    }
  }
};


// fonction collision

function collision(rectangle1,rectangle2){
  
  // ajoutement des valeurs pour rapprocher les personnages au maximun
  if(rectangle1.x+movej_x < rectangle2.x + rectangle2.x1 &&
    
    rectangle1.x+movej_x+ rectangle1.x1 > rectangle2.x+ moveE_x + 445){
      
      degat = true;
      
      if(coup_on == 20 && marche == true){
        
        degat = false;
        disparition = false;
        mort = true;
        moveE_y = 130;
        // console.log("la il tombe")
      
      }
    
    }else{
      
      console.log("pas de collision")

    }

  }


function charge_png(){

  tab_vie.push(img8);
  tab_vie.push(img9);
  tab_vie.push(img10);
  tab_vie.push(img11);
  tab_vie.push(img12);
  tab_vie.push(img13);

  tabE.push(Tab_statique_e); //0
  tabE.push(Tab_degat_e); //1
  tabE.push(tab_frappeE1); //2
  tabE.push(tab_mort); //3
  tabE.push(tab_mort2);//4

  tabJ.push(tab_marche); //0
  tabJ.push(tab_frappe1); //1
  tabJ.push(tab_frappe2); //2
  tabJ.push(tab_frappe3); //3
  tabJ.push(tab_grimpeJ); //4
  tabJ.push(tab_degat_j);//5
  tabJ.push(tab_magieJ); //6
  tabJ.push(tab_descendre);

  tabE2.push(tab_marcheE2); //0
  tabE2.push(tab_frappeE2); //1
  tabE2.push(tab_degatE2); //2
  tabE2.push(tab_mortE2); //3
  
  tabE3.push(tab_militaireM);//0
  tabE3.push(tab_militaireT);//1

  
}  

function coulissement(x,y){

  div.scroll({
    left:x,  //1790 fin de la map 
    behavior:y
  });

}

function bloc(){

  let index = 0;

  for(let i = 0; i < 3 ; i++){

    index += 50;
    ctx.drawImage(img20,2070+index,111);

  }
}

let lancement = true;
let play = false;
let bouton = document.getElementById("jouer");


function draw() {

  
  if(lancement == true){

    ctx.fillStyle = "black";
    ctx.fillRect(0, 0, cnv.width, cnv.height);bouton.addEventListener("click", () => {lancement = false; play = true;});

  }

  if(play == true){
    
    son_jeu.play();

    let canvasImageData = map_ctx.getImageData(0, 0, cnv.width, cnv.height); 
    ctx.putImageData(canvasImageData,0,0);
    


  
  e1 = tab_posE[0][index]; // x départ du joueur
  e2 = e1 + 70; // largeur du joueur


  rect = {x : movej_x, y : movej_y, x1 :movej_x1, y1 : movej_y+112}; 
  rect1 = {x : e1, y : 70, x1 : e2, y1 : 190}; 

  
  if(combat1 == true){collision(rect,rect1)}; // collision entre les joueurs 
        
  if(magie_id == tab_magieJ.length) {magie_id = 0;}
  if(marche_id == tab_marche.length) {marche_id = 0;}
  if(grimpe_id == tab_grimpeJ.length) {grimpe_id = 0;}
  if(statiqueJ_id == tab_marche.length) {statiqueJ_id = tab_marche.length-3;}
  if(frappe1_id == tab_frappe1.length){frappe1_id = 0;}
  if(frappe2_id == tab_frappe2.length){frappe2_id = 0;}
  if(frappe3_id == tab_frappe3.length){frappe3_id = 0;}
  if(FrappeE1_id == tab_frappeE1.length){FrappeE1_id = 0;}
  if(statique_id == Tab_statique_e.length){statique_id = 0;}
  if(degat_id == Tab_degat_e.length){degat_id = 0;}
  if(degatJ_id == tab_degat_j.length){degatJ_id = 0;}
  if(mort_id == tab_mort.length){mort_id = tab_mort.length-1;}
  if(mort2_id == tab_mort.length){mort2_id = tab_mort.length-1;}
  if(explosion_id == tab_explosion.length){explosion_id =explosion_id-1;} //E5_id = E5_id-1; bombe reste bloqué sur une image 
  if(FrappeE2_id == tab_frappeE2.length){FrappeE2_id = 0;}
  if(marcheE2_id == tab_marcheE2.length){marcheE2_id = 0;}
  if(marcheE3_id == tab_militaireM.length){marcheE3_id = 0;}
  if(degatE2_id == tab_degatE2.length){degatE2_id = 0;}
  if(mortE2_id == tab_mortE2.length){mortE2_id = 0;}
  if(tireE4_id == tab_militaireT.length){tireE4_id = tireE4_id - 1;}
  

  if(chrono == true && frappe1 == true){ctx.drawImage(tab_frappe1[frappe1_id],movej_x,movej_y);coup_on++;frappeJ1_son.play();} // 5 pour les frappes les mettrs dans un tab et parcourir le tab ?pour trouver une true 
  if(degatJ == true){ctx.drawImage(tabJ[5][degatJ_id],movej_x,movej_y);mort_degat_son.play();}
  if(statiqueJ == true){ctx.drawImage(tabJ[0][statiqueJ_id],movej_x,movej_y);}
  if(marche == true){ctx.drawImage(tabJ[0][marche_id],movej_x,movej_y);movej_x += tab_vitesseJ[index_vitesse]; movej_x1 += tab_vitesseJ[index_vitesse];console.log(/*tab_vitesseJ[index_vitesse]*/"marche:",movej_x); sonMarcheJ.play();} // regler x à +10;
  if(grimpe == true){ctx.drawImage(tabJ[4][grimpe_id],movej_x,movej_y);movej_y -= 8;console.log("y",movej_y)} //2
  if(descendre == true){ctx.drawImage(tabJ[4][grimpe_id],movej_x,movej_y);movej_y += 8;}
  if(frappe2 == true){ctx.drawImage(tabJ[2][frappe2_id],movej_x,movej_y);coup_on++;console.log("frappe2",coup_on);frappeJ1_son.play();}
  if(frappe3 == true){ctx.drawImage(tabJ[3][frappe3_id],movej_x,movej_y);coup_on++;console.log("frappe3",coup_on);frappe3J_son.play();}
  if(magie == true){ctx.drawImage(tabJ[6][magie_id],movej_x,movej_y);coup_on++;console.log("magie",coup_on,"x",movej_x,"position",tab_posE[0][3]);magie_son.play();} //modfier movey dans update
  // if(frappe1 == true){ctx.drawImage(tab_frappe1[frappe1_id],movej_x,movej_y);coup_on++;console.log("frappe1",coup_on)}
                
  // Partie generation ennemis


  if(mort == false && degat == false){ctx.drawImage(tabE[0][statique_id],moveE_x,moveE_y);} // E1 
  if(generation == true){ctx.drawImage(tabE[0][statique_id],tab_posE[0][index],/*moveE_y*/tab_posE[1][index]);tab_posE[0][index] -= 3; coup_on++;}  
  if(generationE2 == true){ctx.drawImage(tabE2[0][marcheE2_id],tab_posE[0][2],tab_posE[1][2]);tab_posE[0][2]-= 3; console.log(tab_posE[0][2],tab_posE[1][2])}//mettre les position en dur 
  if(generationE2_2 == true){ctx.drawImage(tabE2[0][marcheE2_id],tab_posE[0][3],tab_posE[1][2]);tab_posE[0][3]-= 3;}
  if(generationE3 == true){ctx.drawImage(tabE2[0][marcheE2_id],tab_posE[0][3],tab_posE[1][2]);tab_posE[0][3]-= 3;}
  if(generationE4 == true){ctx.drawImage(tabE3[0][marcheE3_id],tab_posE[0][4],tab_posE[1][5],250,130);tab_posE[0][4]+= 10;console.log("marche e",tab_posE[0][4])}

  // Partie instruction ennemis 

  if(statiqueE == true){ctx.drawImage(tabE[0][statique_id],tab_posE[0][index],tab_posE[1][index]);}
  if(statiqueE4 == true){ctx.drawImage(img15,tab_posE[0][4],390,100,100);charge_pistolet.play();}
  if(frappeE1 == true){ctx.drawImage(tabE[2][FrappeE1_id],tab_posE[0][index],tab_posE[1][index]);coup_on++;frappe_E1_son.play();}
  if(FrappeE2 == true){ctx.drawImage(tabE2[1][FrappeE2_id],tab_posE[0][2],tab_posE[1][2]);coup_on++;coup2poing.play();}
  if(degat == true){ctx.drawImage(tabE[1][degat_id],tab_posE[0][index],tab_posE[1][index]);degaE1_son.play();}
  if(degat == false && mort == true){ctx.drawImage(tabE[3][mort_id],moveE_x,moveE_y);} 
  if(degat == false && mort2 == true){ctx.drawImage(tabE[3][mort2_id],tab_posE[0][index],tab_posE[1][index]+63);}
  if(degatE2 == false && mort3 == true){ctx.drawImage(tabE2[3][mort2_id],tab_posE[0][2],tab_posE[1][2]+63);}
  if(degatE2 == false && mort4 == true){ctx.drawImage(tabE2[3][mort2_id],tab_posE[0][3],tab_posE[1][2]+63);}
  if(degatE2 == true){ctx.drawImage(tabE2[2][degatE2_id],tab_posE[0][2],tab_posE[1][2]);mort_degat_son.play();}
  if(tireE4 == true){ctx.drawImage(tabE3[1][tireE4_id],tab_posE[0][4],tab_posE[1][5],250,130);tire_on++;console.log("le tire",tire_on,vitesse_tire);tire_son.play();}
  if(bombe == true){ctx.drawImage(img17,1445,425,80,80);}
  if(explosion == true){bombe = false;ctx.drawImage(tab_explosion[explosion_id],1445,380);coup_on++;console.log("explosion",coup_on);bombe_son.play();}
  if(santé == true){ctx.drawImage(img19,1910,268,30,30);}
  if(generation_bloc == true){bloc();}
  
  // partie instruction general 

  if(movej_x == 310){marche = false; grimpe = true;} 
  if(movej_x == 300){index_vitesse+=1;}  
  if(movej_y == 76 && movej_x < 315){marche = true ; grimpe = false;} 
  if(movej_x == 480){marche = false; frappe1 = true; chrono = true;}
  
  if(coup_on == 20){coup_on = coup_on;frappe1 =false; chrono = false ; marche = true;}
  if(movej_x == 710){generation = true;index+=1;combat1 = false;}
  
  if(tab_posE[0][1] == movej_x + 120){tab_posE[0][1] = tab_posE[0][1]; marche = false; statiqueJ = true;console.log(movej_x)}
  if(tab_posE[0][1] == movej_x + 63 && coup_on < 80){tab_posE[0][1] = tab_posE[0][1];statiqueJ = false; degatJ = true; generation = false; frappeE1 = true;console.log("op",tab_posE[0][1],coup_on,index);/*console.log(movej_x+63,movej_x)*/}

  if(coup_on == 85){coup_on = coup_on;index_vie = 1;degatJ = false; frappe2 = true; frappeE1 = false ;degat = true;mort =false;generationE2 = true;}
  if(coup_on == 95){coup_on = coup_on;frappe2 = false;frappe1 = true;chrono = true;/*console.log(coup_on)*/}
  
  if(coup_on == 100){coup_on = coup_on;frappe1 = false;chrono = false;degat = false; mort2 = true;marche = true;/*console.log(console.log(movej_x))*/}
  if(movej_x == 1170){marche = false; descendre = true;/*console.log("affiche x",movej_x)*/}
  if(movej_y == 380 && movej_x > 1000 && coup_on == 100){descendre = false; marche = true;/*console.log("affiche x",movej_x)*/} 
  
  if(movej_x == 1275 && coup_on == 100){tab_posE[0][2] = tab_posE[0][2];marche = false; frappe2 = true;degatE2 = true; generationE2 = false;console.log("fin",tab_posE[0][2])}
  if(coup_on == 115){frappe2 = false; degatJ = true; degatE2 = false; FrappeE2 = true;mort2 = false;}
  if(coup_on == 123){FrappeE2 = false; degatE2 = true;degatJ = false;frappe3 = true;index_vie = 2;}
  if(coup_on == 130){frappe3 = false; degatE2 = false; FrappeE2 = true; degatJ = true;}
  if(coup_on == 135){FrappeE2 = false; degatE2 = true;degatJ = false;frappe2 = true;index_vie = 3;}
  if(coup_on == 139){degatE2 = false; mort3 = true; marche = true; frappe2 = false;}

  if(coup_on == 115){generationE2_2 = true;} 
  if(movej_x == 1440 && coup_on == 139){marche = false; magie = true; movej_y -= 35; console.log("y :",movej_y)}
  if(tab_posE[0][3] == movej_x + 80){tab_posE[0][3] = tab_posE[0][3]; generationE2_2 = false; mort4 = true; magie = false; frappe3 = true;}//generationE3 = true;}
  if(coup_on == 145){frappe3 = false; marche = true;movej_y = tab_posE[1][4];}
  

  
  if(coup_on == 130){generationE4 = true;}
  if(coup_on == 139){generationE4 = false; statiqueE4 = true; console.log(" a la fin ",coup_on)}
  if(movej_x == 1500){statiqueE4 = false; tireE4 = true;}
  if(movej_x > 1500 && movej_x < 1550){vitesse_tire += 55;ctx.drawImage(img6,1000+vitesse_tire,380);console.log(vitesse_tire)}
  if(movej_x > 1560 && coup_on < 149){index_vie = 5; movej_y -= 5; marche = false; magie = true;} 
  if(coup_on == 160){tireE4 = false;generationE4 = true , movej_y = 380; magie = false ; marche = true; bombe = true;}
  if(tab_posE[0][4] == 1450){generationE4 = false; mort3 = false; mort4 = false; explosion = true;}
  if(coup_on == 175){explosion = false; santé= true;}
  if(movej_x == 1710 && coup_on < 177){marche = false; grimpe = true;} 
  if(movej_y == 212 && santé == true){grimpe = false; marche = true;}
  
  if(movej_x == 1838){mort_degat_son.play();}
  if(movej_x == 1840 && santé == true){index_vie = 0;movej_y = 190; santé = false; marche = false;magie = true;recharge_vie_son.play();}
  if(coup_on == 226 && coup_on < 230){magie = false;movej_x = 1710; movej_y = 220;grimpe = true;}
  if(movej_y == 12 && movej_x > 1000 ){grimpe = false; marche = true};
  if(movej_x == 2000 && coup_on < 315){movej_y = 10; marche = false; magie = true; move_div2 = false; move_div3=true}
  if(coup_on > 350 /*&& movej_x == 2000*/){magie = false;generation_bloc= true ;marche = true;}
  if(movej_x == 2340){marche = false; statiqueJ = true;victoire_son.play();}
  


  ctx.drawImage(tab_vie[0],-10,0,150,40)

  // vie du personnage principale

  if(joueurvieM1 == true){ctx.drawImage(tab_vie[index_vie],900,0,150,40)};
  if(joueurvieM2 == true){ctx.drawImage(tab_vie[index_vie],1650,0,150,40)};
  if(joueurvieM3 == true){ctx.drawImage(tab_vie[index_vie],1780,0,150,40)};

  // console.log("coup",coup_on,"marche",marche,"frappe1",frappe1,"degat",degatJ,"statique",statiqueJ)
  

  // incrémentation tab mouvements personnage 
  magie_id++;
  marche_id++;
  marcheE2_id++;
  marcheE3_id++;
  grimpe_id++;
  explosion_id++;
  frappe1_id++;
  frappe2_id++;
  frappe3_id++;
  FrappeE1_id++;
  FrappeE2_id++;
  statique_id++;
  degat_id++;
  degatE2_id++;
  degatJ_id++;
  mort_id++;
  mortE2_id++;
  mort2_id++;
  tireE4_id++;
  statiqueJ_id++;
  
  
  
  ;

  ctx.beginPath();
  ctx.moveTo(rect.x,rect.y);
  ctx.lineTo(rect.x1,rect.y);
  ctx.moveTo(rect.x1,rect.y);
  ctx.lineTo(rect.x1,rect.y1);
  ctx.moveTo(rect.x1,rect.y1);
  ctx.lineTo(rect.x,rect.y1);
  ctx.moveTo(rect.x,rect.y1);
  ctx.lineTo(rect.x,rect.y);
  // ctx.stroke();
  
  ctx.beginPath();
  ctx.moveTo(rect1.x,rect1.y);
  ctx.lineTo(rect1.x1,rect1.y);
  ctx.moveTo(rect1.x1,rect1.y);
  ctx.lineTo(rect1.x1,rect1.y1);
  ctx.moveTo(rect1.x1,rect1.y1);
  ctx.lineTo(rect1.x,rect1.y1);
  ctx.moveTo(rect1.x,rect1.y1);
  ctx.lineTo(rect1.x,rect1.y);
  // ctx.stroke();
  


// coulissement div 

  if(movej_x == 710){move_div1 = true;}
  if(santé == true){move_div1 = false;move_div2 = true;}

  if(move_div1 == true ){
    coulissement(900,'smooth');
    joueurvieM1 = true;
  }

  if(move_div2 == true ){
    coulissement(1650,'smooth'); 
    joueurvieM1 = false;
    joueurvieM2 = true;
    bombe_son.pause();bombe_son.currentTime = 0;
  }

  if(move_div3 == true){
    coulissement(1780,'smooth'); 
    joueurvieM2 = false;
    joueurvieM3 = true;
    bombe_son.pause();bombe_son.currentTime = 0;
  }

}
}
    
charge_png();
function update() {draw();}
setInterval(update,150);

 



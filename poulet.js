var play_id;
var author_id;
var coord_dict = {};
var author_list = [];
var play_list = [];
var author_id_dict = {};
var author_genre_dict = {};
var play_id_dict = {};
var play_genre_dict = {};
var authors_set;
var plays_set;

var tpx = 0;
var tpy = 0;
var tpw = 0;
var tph = 0;
var crossw = 0;
var crossh = 0;
var season_data;
var performances;
var plays;
var arr = [];
var months = [{
  'nom': 'Janvier',
  'nb_jours': 31,
  'position': "01",
  'cumul': 0
}, {
  'nom': 'Février',
  'nb_jours': 29,
  'position': "02",
  'cumul': 31
}, {
  'nom': 'Mars',
  'nb_jours': 31,
  'position': "03",
  'cumul': 60
}, {
  'nom': 'Avril',
  'nb_jours': 30,
  'position': "04",
  'cumul': 90
}, {
  'nom': 'Mai',
  'nb_jours': 31,
  'position': "05",
  'cumul': 121
}, {
  'nom': 'Juin',
  'nb_jours': 30,
  'position': "06",
  'cumul': 151
}, {
  'nom': 'Juillet',
  'nb_jours': 31,
  'position': "07",
  'cumul': 182
}, {
  'nom': 'Août',
  'nb_jours': 31,
  'position': "08",
  'cumul': 213
}, {
  'nom': 'Septembre',
  'nb_jours': 30,
  'position': "09",
  'cumul': 243
}, {
  'nom': 'Octobre',
  'nb_jours': 31,
  'position': "10",
  'cumul': 274
}, {
  'nom': 'Novembre',
  'nb_jours': 30,
  'position': "11",
  'cumul': 304
}, {
  'nom': 'Décembre',
  'nb_jours': 31,
  'position': "12",
  'cumul': 335
}];


var annee = {}
offset = 80;
xaxis = 365;
yaxis = 365 * 2;

var mov = 0;
var speed = 0;
var img;
var ax = 0;
var ay = 0;
var selected;
var isOverText;

function preload() {
  // Get the most recent earthquake in the database
  season_data = loadJSON('seasons.json');
  //performances = loadJSON('performances_1700.json');
  plays = loadJSON('plays.json');
  img = loadImage("Yoshida_Komagatake.jpg");


}

p5.disableFriendlyErrors = true;

function setup() {
  //isOverText = false;

  //loadJSON('seasons.json', draw);
  createCanvas(2000, 3000);
  textFont("Metrophobic");
  //noLoop();
  //var perf_length = Object.keys(performances).length
  var plays_length = Object.keys(plays).length

  for (var e = 0; e < plays_length; e++) {
    if (plays[e].id === 5268) {
      console.log(e)
    }
    if (plays[e].genre == "comédie") {
      author_genre_dict[plays[e].author] = [160, 82, 45];
      play_genre_dict[plays[e].title] = [160, 82, 45];
    } else if (plays[e].genre == "tragédie") {
      author_genre_dict[plays[e].author] = [0, 49, 83];
      play_genre_dict[plays[e].title] = [0, 49, 83];
    } else if (plays[e].genre == "drame") {
      author_genre_dict[plays[e].author] = [40, 36, 34];
      play_genre_dict[plays[e].title] = [40, 36, 34];
    } else if (plays[e].genre == "comédie-ballet") {
      author_genre_dict[plays[e].author] = [227, 38, 54];
      play_genre_dict[plays[e].title] = [227, 38, 54];
    } else {
      author_genre_dict[plays[e].author] = [237, 125, 146];
      play_genre_dict[plays[e].title] = [227, 38, 54];
    }
    for (var s = 0; s < Object.keys(season_data).length; s++) {
      season_data[s].months = {}
      var cumul = 0;
      year_summary = season_data[s].year_summary
        //console.log(season_data[s].year_summary)
      if (season_data[s].play_id == plays[e].id) {
        season_data[s].title = plays[e].title;
        season_data[s].author = plays[e].author;
        season_data[s].author_id = plays[e].author;
        season_data[s].genre = plays[e].genre;

      }
      months.forEach(function(m) {
        var y = 0;
        //cumul += year_summary[m.position].length;
        cumul += xaxis / 11;
        var monthy = map(cumul * 1.35, xaxis + offset, 0, 0, xaxis);
        var monthx = map(cumul * 2 + 600, 0, yaxis + offset, 0, xaxis);
        season_data[s].months[m.position] = {
          'monthy': monthy,
          'monthx': monthx,
          'author_location': []
        }
        if (year_summary[m.position] !== undefined) {

          year_summary[m.position].forEach(function(id) {
            //y += 7;
            if (id == plays[e].id) {
              year_summary[m.position][year_summary[m.position].indexOf(id)] = plays[e].author
            }
            /* if (isOdd(year_summary[m.position].indexOf(id)) == 1) {
               y += 7;
             }
             season_data[s].months[m.position].author_location.push(y)*/

          })

        }

      })
      if (year_summary !== undefined) {
        //console.log(year_summary)
        /*for (var m; m < Object.keys(year_summary).length; m++) {
          console.log(year_summary[Object.keys(year_summary)[m]])
        }*/
      }
      if (season_data[s].author !== undefined) {
        author_list.push(season_data[s].author);
        author_id_dict[season_data[s].author] = season_data[s].author_id;
        //author_genre_dict[season_data[i].author] = season_data[i].color
        play_list.push(season_data[s].title);
        play_id_dict[season_data[s].title] = season_data[s].play_id;
        //console.log(season_data[s].months)
        //console.log(season_data[s])
      }
    }



  }
  authors_set = author_list.filter(function(elem, index, self) {
    return index == self.indexOf(elem);
  });
  authors_set = authors_set.sort();
  plays_set = play_list.filter(function(elem, index, self) {
    return index == self.indexOf(elem);
  });
  plays_set = plays_set.sort();
  //console.log(author_id_dict, play_id_dict)
  //rect(20,20,50,50)
}





function draw() {
  mov += speed;
  clear();
//draw legend
push()
fill(255)
rect(2.5, 2.5, 845, 75)
pop()
push()
textSize(20);
textStyle(BOLD);
text("Légende", 10,20)
pop()
push()
fill(160, 82, 45)
noStroke()
ellipse(10, 30, 7, 7)
text("Comédie",20,33.5)
pop()
push()
fill(10, 49, 83)
noStroke()
ellipse(10, 40, 7, 7)
text("Tragédie",20,43.5)
pop()
push()
fill(40, 36, 34)
noStroke()
ellipse(10, 50, 7, 7)
text("Drame",20,53.5)
pop()
push()
noStroke()
fill(227, 38, 54)
ellipse(10, 60, 7, 7)
text("Comédie-ballet",20,63.5)
pop()
push()
fill(237, 125, 146)
noStroke()
ellipse(10, 70, 7, 7)
text("Autre",20,73.5)
pop()
push()
text("Le tableau représente les pièces ainsi que leurs auteurs ayant fait le plus de recettes lors d'une année de représentation.", 140,40);
text("Cliquez sur une année pour voir s'afficher la chronologie des auteurs ayant fait le plus de recettes au cours de l'année sélectionnée : ", 140, 50);
text("    deux auteurs s'affichent alors par lignes, correspondant aux deux parties d'une soirée de la comédie française.", 140, 60);
pop()

//draw frame
  var ya = 0;
  var yb = 0;
  var yc = 0;
  var yd = 0;
  authors_set.forEach(function(a) {
    var authorlabel = a;
    var author_id = author_id_dict[authorlabel];
    var author_genre = author_genre_dict[authorlabel];
    
    if (isOdd(authors_set.indexOf(a)) == 1) {
      yc = yc + 15;
      crd_dict(author_id, authorlabel, 1140, 267, 1140, 263, TWO_PI, QUARTER_PI, yc, true, 'author');
      x = coord_dict[author_id].ttranslation[0];
      y = coord_dict[author_id].ttranslation[1] + coord_dict[author_id].y - 5;
      w = 150;
      h = 10;

      if ((mouseX > x) && (mouseX < x + w) &&
        (mouseY > y) && (mouseY < y + h)) {
        textSize(20);
        fill(255, 0, 0);
        //cache(coord_dict[play_id].ttranslation, coord_dict[play_id].rotation, coord_dict[play_id].y, 200, -15);
        //cache(coord_dict[author_id].ttranslation, coord_dict[author_id].rotation, coord_dict[author_id].y, 200, -15);
      } else {
        textSize(12);
        //fill(255);
        fill(100);
      }
      authordisplay = cadre(texttranslation, ellipsetranslation, authorlabel, textrotation, ellipserotation, yc, coord_dict[author_id].odd, author_genre, coord_dict[author_id]['type']);
    } else {
      yd = yd + 15;
      //crd_dict(author_id, authorlabel, 330, 705, 330, 720, -HALF_PI, yd);
      crd_dict(author_id, authorlabel, 330, 270, 300, 265, TWO_PI, QUARTER_PI, yd, false, 'author');
      x = coord_dict[author_id].ttranslation[0] + 15;
      y = coord_dict[author_id].ttranslation[1] + coord_dict[author_id].y - 5;
      w = -150;
      h = 10;

      if ((mouseX < x) && (mouseX > x + w) &&
        (mouseY > y) && (mouseY < y + h)) {
        //x = 20;
        textSize(20);
        fill(255, 0, 0);
        //cache(coord_dict[play_id].ttranslation, coord_dict[play_id].rotation, coord_dict[play_id].y, 200, -15);
        //cache(coord_dict[author_id].ttranslation, coord_dict[author_id].rotation, coord_dict[author_id].y, 200, -15);
      } else {
        textSize(12);
        fill(100);
      }
      push();
      //textAlign(RIGHT)
      authordisplay = cadre(texttranslation, ellipsetranslation, authorlabel, textrotation, ellipserotation, yd, coord_dict[author_id].odd, author_genre, coord_dict[author_id]['type']);
      pop();
    }
  });





  plays_set.forEach(function(p) {
    var playlabel = p;
    var play_id = play_id_dict[playlabel];
    var play_genre = play_genre_dict[playlabel];
    
    if (isOdd(plays_set.indexOf(p)) == 1) {
      ya = ya + 15;
      crd_dict(play_id, playlabel, 340, 265, 335, 270, PI + HALF_PI, -QUARTER_PI, ya, true, 'play');
      x = coord_dict[play_id].ttranslation[0] + coord_dict[play_id].y - 5;
      y = coord_dict[play_id].ttranslation[1];
      w = 10;
      h = -150;

      if ((mouseX > x) && (mouseX < x + w) &&
        (mouseY < y) && (mouseY > y + h)) {
        //x = 20;
        textSize(20);
        fill(255, 0, 0);
        //cache(coord_dict[play_id].ttranslation, coord_dict[play_id].rotation, coord_dict[play_id].y, 200, -15);
        //cache(coord_dict[author_id].ttranslation, coord_dict[author_id].rotation, coord_dict[author_id].y, 200, -15);
      } else {
        textSize(12);
        //fill(255);
        fill(100);
      }
      playdisplay = cadre(texttranslation, ellipsetranslation, playlabel, textrotation, ellipserotation, ya, coord_dict[play_id].odd, play_genre, coord_dict[play_id]['type']);
    } else {
      yb = yb + 15;
      //crd_dict(play_id, playlabel, 330, 275, 315, 275, TWO_PI, yb);
      crd_dict(play_id, playlabel, 340, 735, 335, 760, -HALF_PI, -QUARTER_PI, yb, false, 'play');
      //d = dist(mouseX, mouseY, coord_dict[play_id].ttranslation[0] + 20, coord_dict[play_id].ttranslation[1] + coord_dict[play_id].y - 5);
      x = coord_dict[play_id].ttranslation[0] + coord_dict[play_id].y - 5;
      y = coord_dict[play_id].ttranslation[1] - 15;
      w = 10;
      h = 150;

      if ((mouseX > x) && (mouseX < x + w) &&
        (mouseY > y) && (mouseY < y + h)) {
        //x = 20;
        textSize(20);
        fill(255, 0, 0);
        //cache(coord_dict[play_id].ttranslation, coord_dict[play_id].rotation, coord_dict[play_id].y, 200, -15);
        //cache(coord_dict[author_id].ttranslation, coord_dict[author_id].rotation, coord_dict[author_id].y, 200, -15);
      } else {
        textSize(12);
        //fill(255);
        fill(100);
      }
      push();
      //textAlign(RIGHT)
      playdisplay = cadre(texttranslation, ellipsetranslation, playlabel, textrotation, ellipserotation, yb, coord_dict[play_id].odd, play_genre, coord_dict[play_id]['type']);
      pop();
    }
  })




  for (var o = 0; o < Object.keys(season_data).length; o++) {
    year_summary = season_data[o].year_summary;
    yearx = coord_dict[season_data[o].play_id].translation[0] + coord_dict[season_data[o].play_id].y + 5;
    yeary = coord_dict[season_data[o].author_id].translation[1] + coord_dict[season_data[o].author_id].y - 5;


    push();
    if (season_data[o].author === "Saint-Foix (Germain-François Poullain de)" || season_data[o].author === "Voltaire (François-Marie Arouet dit)" && season_data[o].duplicate_number === undefined && season_data[o].play_id !== 5385 || season_data[o].author === "Simonet de Maisonneuve (Louis-Jean-Baptiste)") {
      
      push()
      translate(coord_dict[season_data[o].play_id].translation[0] + coord_dict[season_data[o].play_id].y - 5, coord_dict[season_data[o].author_id].translation[1] + coord_dict[season_data[o].author_id].y - 10)
      rotate(-QUARTER_PI)
      text(season_data[o].year, 0, 0);
      pop()
    } else if (season_data[o].author == "Voltaire (François-Marie Arouet dit)" && season_data[o].duplicate_number === 0 || season_data[o].play_id == 5385) {
      push()
      translate(coord_dict[season_data[o].play_id].translation[0] + coord_dict[season_data[o].play_id].y - 5, coord_dict[season_data[o].author_id].translation[1] + coord_dict[season_data[o].author_id].y - 15)
      rotate(2 * -QUARTER_PI)
      text(season_data[o].year, 0, 0);
      pop()
    } else if (season_data[o].author == "Voltaire (François-Marie Arouet dit)" && season_data[o].duplicate_number === 1 || season_data[o].play_id == 5219) {
      push()
      translate(coord_dict[season_data[o].play_id].translation[0] + coord_dict[season_data[o].play_id].y - 0, coord_dict[season_data[o].author_id].translation[1] + coord_dict[season_data[o].author_id].y - 10)
      rotate(-QUARTER_PI)
      text(season_data[o].year, 0, 0);
      pop()
    } else if (season_data[o].author === "La Noue (Jean-Baptiste Simon Sauvé de La Noue, dit)" || season_data[o].author == "Picard (Louis-Benoît)") {
      //console.log(season_data[o].year)
      push()

      text(season_data[o].year, coord_dict[season_data[o].play_id].translation[0] + coord_dict[season_data[o].play_id].y - 0, coord_dict[season_data[o].author_id].translation[1] + coord_dict[season_data[o].author_id].y - 5);
      pop()
    } else if (season_data[o].author == "Aigueberre (Jean Dumas d')" || season_data[o].author == "Barthe (Nicolas-Thomas)" || season_data[o].author == "Baron (Michel Boyron dit)" || season_data[o].author == "Brueys (David-Augustin de)") {
      push()
      translate(coord_dict[season_data[o].play_id].translation[0] + coord_dict[season_data[o].play_id].y - 5, coord_dict[season_data[o].author_id].translation[1] + coord_dict[season_data[o].author_id].y - 10)
      rotate(QUARTER_PI)
      text(season_data[o].year, 0, 0);
      pop()
    } else if (season_data[o].play_id == 5268 || season_data[o].play_id == 5222) {
      push()
      textAlign(RIGHT)
      text(season_data[o].year, coord_dict[season_data[o].play_id].translation[0] + coord_dict[season_data[o].play_id].y - 0, coord_dict[season_data[o].author_id].translation[1] + coord_dict[season_data[o].author_id].y - 5);
      pop()
    } else if (season_data[o].duplicate_number !== undefined) {
      push()
      duplicate = season_data[o].duplicate_number
        
      if (duplicate === 0) {
        push()
        translate(coord_dict[season_data[o].play_id].translation[0] + coord_dict[season_data[o].play_id].y - 5, coord_dict[season_data[o].author_id].translation[1] + coord_dict[season_data[o].author_id].y - 5)
        rotate(QUARTER_PI)
        text(season_data[o].year, 0, 0);
        pop()
      } else if (duplicate === 1) {
        push()
        translate(coord_dict[season_data[o].play_id].translation[0] + coord_dict[season_data[o].play_id].y - 5, coord_dict[season_data[o].author_id].translation[1] + coord_dict[season_data[o].author_id].y - 5)
        rotate(-QUARTER_PI)
        text(season_data[o].year, 0, 0);
        pop()
      } else if (duplicate === 2) {
        text(season_data[o].year, coord_dict[season_data[o].play_id].translation[0] + coord_dict[season_data[o].play_id].y + 2, coord_dict[season_data[o].author_id].translation[1] + coord_dict[season_data[o].author_id].y - 5);
      } else if (duplicate === 3) {
        textAlign(RIGHT)
        text(season_data[o].year, coord_dict[season_data[o].play_id].translation[0] + coord_dict[season_data[o].play_id].y - 10, coord_dict[season_data[o].author_id].translation[1] + coord_dict[season_data[o].author_id].y - 5);

      }
      pop()
    } else if (isOdd(o) == 1) {
      push();
      translate(coord_dict[season_data[o].play_id].translation[0] + coord_dict[season_data[o].play_id].y - 10, coord_dict[season_data[o].author_id].translation[1] + coord_dict[season_data[o].author_id].y - 5);
      rotate(QUARTER_PI);
      noStroke();
      text(season_data[o].year, 0, 0);
      pop();
    } else {
      push();
      translate(coord_dict[season_data[o].play_id].translation[0] + coord_dict[season_data[o].play_id].y - 10, coord_dict[season_data[o].author_id].translation[1] + coord_dict[season_data[o].author_id].y - 5);
      rotate(-QUARTER_PI);
      noStroke();
      text(season_data[o].year, 0, 0);
      pop();
    }


    //text(season_data[o].year, coord_dict[season_data[o].play_id].translation[0] + coord_dict[season_data[o].play_id].y - 10, coord_dict[season_data[o].author_id].translation[1] + coord_dict[season_data[o].author_id].y - 5);
    //}
    d = dist(mouseX, mouseY, coord_dict[season_data[o].play_id].translation[0] + coord_dict[season_data[o].play_id].y + 5, coord_dict[season_data[o].author_id].translation[1] + coord_dict[season_data[o].author_id].y - 5);
    //console.log(d)
    //push()

    if (d < 20) {
      push();
      stroke(255, 0, 0);
      textSize(20);
      fill(255, 0, 0);
      cursor(HAND)
      cache(coord_dict[season_data[o].play_id].ttranslation, coord_dict[season_data[o].play_id].trotation, coord_dict[season_data[o].play_id].y, 500, -15, coord_dict[season_data[o].play_id].odd, coord_dict[season_data[o].play_id]['type']);
      cache(coord_dict[season_data[o].author_id].ttranslation, coord_dict[season_data[o].author_id].trotation, coord_dict[season_data[o].author_id].y, 500, -15, coord_dict[season_data[o].author_id].odd, coord_dict[season_data[o].author_id]['type']);
      cadre(coord_dict[season_data[o].play_id].ttranslation, coord_dict[season_data[o].play_id].translation, coord_dict[season_data[o].play_id].label, coord_dict[season_data[o].play_id].trotation, coord_dict[season_data[o].play_id].rotation, coord_dict[season_data[o].play_id].y, coord_dict[season_data[o].play_id].odd, play_genre_dict[season_data[o].title], coord_dict[season_data[o].play_id]['type']);
      cadre(coord_dict[season_data[o].author_id].ttranslation, coord_dict[season_data[o].author_id].translation, coord_dict[season_data[o].author_id].label, coord_dict[season_data[o].author_id].trotation, coord_dict[season_data[o].author_id].rotation, coord_dict[season_data[o].author_id].y, coord_dict[season_data[o].author_id].odd, author_genre_dict[season_data[o].author], coord_dict[season_data[o].author_id]['type']);

      if (coord_dict[season_data[o].author_id].odd === true) {
        line(coord_dict[season_data[o].play_id].translation[0] + coord_dict[season_data[o].play_id].y + 0, coord_dict[season_data[o].author_id].translation[1] + coord_dict[season_data[o].author_id].y - 10, coord_dict[season_data[o].author_id].translation[0] - 7, coord_dict[season_data[o].author_id].translation[1] + coord_dict[season_data[o].author_id].y - 8.5);
      } else {
        line(coord_dict[season_data[o].play_id].translation[0] + coord_dict[season_data[o].play_id].y + 0, coord_dict[season_data[o].author_id].translation[1] + coord_dict[season_data[o].author_id].y - 10, coord_dict[season_data[o].author_id].translation[0] + 6, coord_dict[season_data[o].author_id].translation[1] + coord_dict[season_data[o].author_id].y - 8.5);
      }
      if (coord_dict[season_data[o].play_id].odd === true) {
        line(coord_dict[season_data[o].play_id].translation[0] + coord_dict[season_data[o].play_id].y + 0, coord_dict[season_data[o].author_id].translation[1] + coord_dict[season_data[o].author_id].y - 10, coord_dict[season_data[o].play_id].translation[0] + coord_dict[season_data[o].play_id].y - 8.5, coord_dict[season_data[o].play_id].translation[1] + 7);
      } else {
        line(coord_dict[season_data[o].play_id].translation[0] + coord_dict[season_data[o].play_id].y + 0, coord_dict[season_data[o].author_id].translation[1] + coord_dict[season_data[o].author_id].y - 10, coord_dict[season_data[o].play_id].translation[0] + coord_dict[season_data[o].play_id].y - 8.5, coord_dict[season_data[o].play_id].translation[1] - 7);
      }
      pop();
    }
    //mov+=1;
    //fill(255);

    if (d < 20 && tpx === 0) {
      selected = o;
      isOverText = false;

      //mov = 0;
      //console.log(selected)
    } else if (d > 20 && tpx > 0) {
      isOverText = true;
      selected = selected
      year_summary = season_data[selected].year_summary;
      //console.log(isOverText)

    }
    //mov +=2;

    if (d < 150 /*||tpx > 0*/ ) {

      //mov+=2;
      /*cursor(ARROW)
      if (mouseX >= tph && mouseX <= tph + crossw && mouseY >= tpw && mouseY <= tpw + crossh) {
        cursor(HAND)
      }*/

      push();
      noStroke()
      fill(255)
      push();
      fill(255, 0, 0);
      translate(tpx, tpy);
      rect(tpw, tph, crossw, crossh);
      fill(255);
      textAlign(CENTER)
      textSize(20)
      text('x', tpw + 10, tph + 15)
      pop();
      rect(tpx, tpy, tpw, tph);
      image(img, tpx + offset, tpy,yaxis,-xaxis-offset );
      pop()
      var cumul = 0;
      ord = line(tpx + offset, tpy - (xaxis + offset), tpx + offset, tpy);
      //abs = line(yearx + offset, yeary - offset, yearx + yaxis, yeary - offset);
      abs = line(tpx + offset, tpy - 1, tpx + yaxis, tpy - 1);

      //console.log(year_summary['01'])
      months.forEach(function(m) {
        //mov += 1
        //var y = 0;
        //cumul += year_summary[m.position].length;
        //cumul += xaxis / 11;

        if (year_summary[m.position] !== undefined) {
          y = 0;
          //var monthy = map(cumul * 1.35, xaxis + offset, 0, 0, xaxis);
          //var monthx = map(cumul * 2 + 600, 0, yaxis + offset, 0, xaxis);
          push();
          pop();
          push();
          fill(0);
          textSize(12);
          textAlign(RIGHT);
          text(m.nom + ' _', tpx + offset, tpy - xaxis + season_data[o].months[m.position].monthy);

          pop();
          Object.keys(year_summary[m.position]).forEach(function(a) {


            push();
            //if (ay + season_data[o].months[m.position].monthy > tph) {
            
            
            textFont('Metrophobic');
            textSize(9);
            textStyle(BOLD)
            fill(author_genre_dict[year_summary[m.position][a]]);
            if (isOdd(a) === 0) {
              y += 7;
              textAlign(RIGHT);
            }

            ax = y + mov;
            ay = y - mov;

            /*}else{
              translate(0,0)
              ax = 0;
              ay = 0;
            }*/
            //y+=7;

            if (ay + (tpy - xaxis + season_data[o].months[m.position].monthy) > tpy - xaxis + season_data[0].months['12'].monthy) {
              translate(tpx + season_data[o].months[m.position].monthx, tpy - xaxis + season_data[o].months[m.position].monthy);
              text('+ ' + year_summary[m.position][a], ax, ay);
              
            }else {
              push()
              translate(1100,275)
              text('+ ' + year_summary[m.position][a], ax, 0)
              pop()
            }
            pop();
            //console.log(year_summary[m.position][a], ay + season_data[o].months[m.position].monthy , tph)
            //console.log(tpy - xaxis + season_data[0].months['12'].monthy, tpy - xaxis + season_data[0].months['12'].monthy + ay)
            //season_data[o].months[m.position].author_location.push(y)


          });
        }

      });
    }

    //console.log(season_data[0].year, season_data[0].year_summary['12'], tpy - xaxis + season_data[0].months['12'].monthy, -xaxis - offset)
    //console.log(season_data[0].months['12'])
  }
  //pop()

  pop()

  //rect(tpx, tpy, tpw, tph)
  //}


}

function mouseClicked() {
  //console.log(selected);

  if (tpx === 0 /*&& d > 20*/ ) {
    tpx = 340;
    tpy = 720;
    tph = -xaxis - offset;
    tpw = yaxis + offset;
    crossw = 20;
    crossh = 20;
    speed = 0.3;
  } else {
    ax = 0;
    ay = 0;
    tpx = 0;
    tpy = 0;
    tpw = 0;
    tph = 0;
    crossw = 0;
    crossh = 0;
    speed = 0;
    mov = 0;

  }
}
//}




//console.log(coord_dict)

function isOdd(num) {
  return num % 2;
}

/*function cadre(texttrans, ellipsetrans, donnee, textrot, ellipserot, ycoord, odd, color) {
  x = 15;
  push();
  noStroke();

  fill(color);
  push();

  translate(texttrans[0], texttrans[1]);
  rotate(textrot);
  //var ratingGray = map(num, 0, 355, 0, 255);
  if (odd === false) {
    textAlign(RIGHT);
  }

  text(donnee, x, ycoord);
  pop();
  push();
  translate(ellipsetrans[0], ellipsetrans[1]);
  rotate(ellipserot);
  //fill(100);
  ellipse(0, ycoord - x / 2, x, 15);
  pop();
  pop();
}*/

function cadre(texttrans, ellipsetrans, donnee, textrot, ellipserot, ycoord, odd, color, type) {
  x = 15;
  push();
  noStroke();

  fill(color);
  push();
  if (type === 'play') {
  translate(texttrans[0] + ycoord, texttrans[1] - x) ;
  } else {
    translate(texttrans[0] + x, texttrans[1] + ycoord) ;
  }
  rotate(textrot);
  //var ratingGray = map(num, 0, 355, 0, 255);
  if (odd === false) {
    textAlign(RIGHT);
  }

  text(donnee, 0, 0);
  pop();
  push();
  translate(ellipsetrans[0], ellipsetrans[1]);
  rotate(ellipserot);
  //fill(100);
  ellipse(0, ycoord - x / 2, x, 15);
  pop();
  pop();
}

function crd_dict(id, label, etx, ety, ttx, tty, erot, trot, y, bool, type) {
  coord_dict[id] = {};
  coord_dict[id]['translation'] = [etx, ety];
  coord_dict[id]['ttranslation'] = [ttx, tty];
  coord_dict[id]['y'] = y;
  coord_dict[id]['rotation'] = erot;
  coord_dict[id]['trotation'] = trot;
  coord_dict[id]['label'] = label;
  coord_dict[id]['odd'] = bool;
  coord_dict[id]['type'] = type;
  texttranslation = [ttx, tty];
  ellipsetranslation = coord_dict[id]['translation'];
  ellipserotation = coord_dict[id]['rotation'];
  textrotation = coord_dict[id]['trotation'];

}


function cache(texttrans, rotation, ycoord, width, height, odd, type) {
  push()
  noStroke()
  fill(255);
  if (type === 'play') {
  translate(texttrans[0] + ycoord, texttrans[1] - 15) ;
  } else {
    translate(texttrans[0] + 15, texttrans[1] + ycoord) ;
  }
  //translate(texttrans[0], texttrans[1]);
  rotate(rotation);
  if (odd === false) {
    width = -width
  }
  rect(0, 0, width, height);
  pop()
}

function mode(arr) {
  return arr.sort((a, b) =>
    arr.filter(v => v === a).length - arr.filter(v => v === b).length
  ).pop();
}
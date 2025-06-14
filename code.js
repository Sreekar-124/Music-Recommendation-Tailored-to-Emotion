var songrun = false;
var count = 1;
var mod = 1;
var path = [
  "songs\\closer.mp3",
  "songs\\tum saath ho.mp3",
  "songs\\channa mereya.mp3",
  "songs\\vachindi kada.mp3",
  "songs\\kamariya.mp3",
  "songs\\chogada.mp3",
  "songs\\ban ja rani.mp3",
  "songs\\Banduk meri laila.mp3",
  "songs\\barish.mp3",
  "songs\\haareya.mp3",
  "songs\\ik vari aa.mp3",
  "songs\\main tera.mp3",
  "songs\\mercy.mp3",
  "songs\\musafir.mp3",
  "songs\\o sathi.mp3",
  "songs\\phir bhi.mp3",
];

var sname = [
  "Closer",
  "Agar tum saath ho",
  "Channa Mereya",
  "Vachindi kada avakasam",
  "Kamariya",
  "Chogada",
  "Ban Ja tu meri Rani",
  "Banduk Meri Laila",
  "Barish",
  "Haareya",
  "Ik vari aa",
  "main tera boyfriend",
  "mercy",
  "musafir",
  "o sathi",
  "Phir Bhi",
];

var sd = [
  "Artists:The Chainsmokers<br>Released:2016",
  "Artists:Arijit Singh, Rahman<br>Movie:Tamasha<br>Released:2015 ",
  "Artists: Arijit Singh,Pritam Chakraborty<br>Movie:Ae dil hai mushkil<br>Released:2016 ",
  "Artists:Abhay Jodhpurkar,Sirivennela Seetharama Sastry,Mickey J Meyer<br>Movie:Brahmotsavam<br>Released:2016 ",
  "Artists: Darshan Raval , DJ Chetas, Lijo George<br>Movie:Mitron<br>Released:2018 ",
  "Artists: Darshan Raval, Asees Kaur , Lijo George, DJ Chetas <br>Movie:Loveyatri<br>Released:2018 ",
  "Artist: Guru Randhawa<br>Movie: Tumhari Sulu<br>Released: 2017",
  "Artists: Ash King, Jigar Saraiya<br>Featured artists: Sidharth Malhotra, Raftaar<br>Movie: A Gentleman<br>Released: 2017",
  "Artists: Ash King, Shashaa Tirupati<br>Movie: Half Girlfriend<br>Released: 2017<br>Awards: Zee Cine Award for Song of the Year",
  "Artist: Arijit Singh<br>Movie: Meri Pyaari Bindu<br>Released: 2017<br>Nominations: Mirchi Music Awards for Best Song Producer - Programming & Arranging",
  "Artist: Arijit Singh<br>Movie: Raabta<br>Released: 2017",
  "Artists: Arijit Singh, Neha Kakkar, Meet Bros<br>Movie: Raabta<br>Released: 2017<br>Composer(s): : Sohrabbudin (Original); Sourav Roy (Revamped).<br>Genre: Dance music",
  "Artist: Badshah<br>Released: 2017<br>Nominations: Mirchi Music Awards for Best Song Engineer - Recording and Mixing",
  "Artist: KK<br>Movie: Shab<br>Released: 2017",
  "Artist: Arijit Singh<br>Movie: Shab<br>Released: 2017",
  "Artists: Arijit Singh, Shashaa Tirupati<br>Movie: Half Girlfriend<br>Released: 2017<br>Written: 2001 (lyrics)<br>Lyricist(s): Manoj Muntashir<br>Composer(s): Mithoon",
];

var bool = [];
for (var i = 0; i < sd.length; i++) bool[i] = false;

var icon = [
  "images/1.jpg",
  "images/2.jpg",
  "images/3.jpg",
  "images/4.jpg",
  "images/5.jpg",
  "images/6.jpg",
  "images/7.jpg",
  "images/8.jpg",
  "images/9.jpg",
  "images/10.jpg",
  "images/11.jpg",
  "images/12.jpg",
  "images/13.jpg",
  "images/14.jpg",
  "images/15.jpg",
  "images/16.jpg",
];

var mood = [
  ["7", "8", "9"],
  ["6", "4", "5", "10", "11"],
  ["3", "2", "12", "13", "14"],
  ["1", "15", "16"],
];
var mmm = [
  "4.png", //1st song
  "3.png", //2nd song
  "3.png", //3rd song
  "2.png", //4th song
  "2.png", //5th song
  "2.png", //6th song
  "2.png", //7th song
  "1.png", //8th song
  "4.png", //9th song
  "4.png", //10th song
  "2.png", //11th song
  "3.png", //12th song
  "3.png", //13th song
  "3.png", //14th song
  "4.png", //15th song
  "4.png", //16th song
];

var songs = new Array(icon.length);
for (var i = 0; i < icon.length; i++) {
  songs[i] = new Array(4);
  songs[i][0] = path[i];
  songs[i][1] = sd[i];
  songs[i][2] = icon[i];
  songs[i][3] = mmm[i];
  console.log(songs[i][0]);
  console.log(songs[i][1]);
  console.log(songs[i][2]);
  var ins = document.createElement("div");
  ins.id = "b" + i;
  ins.setAttribute("class", "song");
  document.body.appendChild(ins);
  document.getElementById("b" + i).innerHTML =
    '<div id="pic"  style=\'background-image: url("' +
    songs[i][2] +
    '");\'>  <input type="button" id="' +
    "a" +
    i +
    '" class="play" > <input type="button" id="' +
    "c" +
    i +
    '" class="add">  </div><div id="data"><br><br>' +
    songs[i][1] +
    "</div>";
  document.getElementById("a" + i).onclick = function () {
    play(this);
  };
  document.getElementById("c" + i).onclick = function () {
    addq(this);
  };
}

function setmod(elem) {
  mod = elem.value;
  if (mod == 2) {
    getTime();
  } else if (mod == 3) {
    rand_play(); 
  }
}

function play(elem) {
  console.log(elem.id);
  var x = elem.id.slice(1);
  var z = songs[x][0];
  document.getElementById("sname").innerHTML = sname[x];
  document.getElementById("sel").src = z;
  document.getElementById("main_slider").load();
  document.getElementById("main_slider").play();
  document.getElementById("emoji").style.backgroundImage =
    "url('" + songs[x][3] + "')";
  songrun = true;
}

var eqc = 1;
var sqc = 1;

function addq(elem) {
  console.log("Adding song: " + elem.id);
  var x = elem.id.slice(1);
  if (!songrun) {
    var z = songs[x][0];
    document.getElementById("sname").innerHTML = sname[x];
    document.getElementById("sel").src = z;
    document.getElementById("main_slider").load();
    document.getElementById("main_slider").play();
    document.getElementById("emoji").style.backgroundImage =
      "url('" + songs[x][3] + "')";
    songrun = true;
    return;
  }
  if (bool[x] == true) return;

  bool[x] = true;
  var l = document.createElement("label");
  l.id = "e" + eqc;
  l.name = x;
  l.innerHTML = sname[x] + "<br>";
  document.getElementById("queue").appendChild(l);
  eqc = eqc + 1;
}

function nextsong() {
  if (sqc == eqc) {
    alert("Queue is empty.");
    return;
  }
  var elem = document.getElementById("e" + sqc);
  var xa = elem.name;
  var pa = songs[xa][0];
  bool[xa] = false;
  document.getElementById("sname").innerHTML = sname[xa];
  document.getElementById("sel").src = pa;
  document.getElementById("main_slider").load();
  document.getElementById("main_slider").play();
  document.getElementById("emoji").style.backgroundImage =
    "url('" + songs[xa][3] + "')";

  songrun = true;
  document.getElementById("queue").removeChild(elem);
  sqc = sqc + 1;
}

function next_in_Q() {
  songrun = false;
  if (sqc == eqc) {
    alert("Queue is empty.");
    return;
  }
  var elem = document.getElementById("e" + sqc);
  var xa = elem.name;
  var pa = songs[xa][0];
  document.getElementById("sname").innerHTML = sname[xa];
  document.getElementById("sel").src = pa;
  document.getElementById("main_slider").load();
  document.getElementById("main_slider").play();
  document.getElementById("emoji").style.backgroundImage =
    "url('" + songs[xa][3] + "')";
  songrun = true;
  document.getElementById("queue").removeChild(elem);
  sqc = sqc + 1;
}

function rand_play() {
  songrun = false; 
  var index = Math.floor(Math.random() * path.length); 
  var pa = songs[index][0];
  document.getElementById("sname").innerHTML = sname[index];
  document.getElementById("sel").src = pa;
  document.getElementById("main_slider").load();
  document.getElementById("main_slider").play();
  document.getElementById("emoji").style.backgroundImage =
    "url('" + songs[index][3] + "')";
  songrun = true;
}

function moody(val) {
  var index = Math.random() * mood[val].length;
  index = parseInt(index);
  var pa = songs[mood[val][index] - 1][0];
  document.getElementById("sname").innerHTML = sname[mood[val][index] - 1];
  document.getElementById("sel").src = pa;
  document.getElementById("main_slider").load();
  document.getElementById("main_slider").play();
  document.getElementById("emoji").style.backgroundImage =
    "url('" + songs[mood[val][index] - 1][3] + "')";
  songrun = true;
}

function getTime() {
  eel.getEmotion()(function (emotion) {
    console.log("Detected emotion: " + emotion);

    let moodIndex = 0;

    if (emotion === "happy") moody(1);
    else if (emotion === "neutral") moody(3);
    else if (emotion === "sad") moody(2);
    else if (emotion === "angry") moody(0);
    else {
      alert("Face not detected. Please try again.");
      return;
    }
  });
}

$(".song").hover(
  function () {
    TweenMax.to($(this), 0.5, { y: -30, ease: Power2.easeInOut }),
      $(this).addClass("shadow"),
      TweenMax.to($(this).children(".data"), 0.5, {
        opacity: 1,
        ease: Power2.easeInOut,
      });
  },

  function () {
    TweenMax.to($(this), 0.5, { y: 0, ease: Power2.easeInOut }),
      $(this).removeClass("shadow"),
      TweenMax.to($(this).children(".data"), 0.5, {
        opacity: 0,
        ease: Power2.easeInOut,
      });
  }
);

'use strict';
var tempoConst = 60,
      parts = ["soprano1L", "soprano2L", "altL", "tenor1L", "tenor2L", "baritonL", "basL"],
      vol = 70,
      qs = (sel) => document.querySelector(sel),
      qa = (sel) => document.querySelectorAll(sel);

var song = "",
    songID = "",
    toneKey = "tone65",
    tone = 65,
    golosa = [true, true, true, true, true, true, true],
    velocity = [70, 70, 70, 70, 70, 70, 70],
    activePage = 'irmos',
    pageName = '';

window.addEventListener("load", function(e){
  // alert(CryptoJS.MD5(''))
  qs('#' + toneKey).classList.add("keyChoise");
  choosePage(activePage);
})

window.addEventListener("resize", function (e) {
  if (document.documentElement.clientWidth > 820) qs('#mobileMenu').classList.remove("active");
}, true)

qs('#checkbox_navbar').addEventListener('change', function(e) {
  qs('body').classList.toggle('add-font')
})

function generateTemplate(id) {
  var inner = '<h3>Выберите мелодию:</h3><div class="flex">';
  Object.keys(data[id]).map(function(i){
    inner += '<div class="btn" onclick="chooseSong(`' + i + '`)" id="' + i + '">' + data[id][i][7] + '</div>'
  })
  inner += '</div><h3 id="textMelodyShort"></h3>';
  qs('#template').innerHTML = inner;
}

var resetVolume = (id) => qs('#' + id).value = vol;
var resetTempo = (id) => qs('#' + id).value = -5;

var changeActiveParts = (parts, value) =>
  value ? parts.map((part) => {
        qs('#' + part.slice(0, -1) + "Div").classList.remove("off");
        qs('#' + part.slice(0, -1)).checked = true;
      }) : parts.map((part) => {
        qs('#' + part.slice(0, -1) + "Div").classList.add("off");
        qs('#' + part.slice(0, -1)).checked = false;
      });

function choosePage(id) {
  qs('#wrongPassword').style.display = 'none';
  qa('.' + activePage).forEach(e => e.classList.remove('keyChoise'));
  qa('.' + id).forEach(e => e.classList.add('keyChoise'));
  qs('#mobileMenu').classList.remove("active");
  activePage = id;

  if (data.favorite.some(e => e === id)) {
    pageName = 'Избранное';
    qa('.favorite').forEach(e => e.classList.add('keyChoise'));
  }
  else {
    pageName = qs('.' + id).textContent;
    qa('.favorite').forEach(e => e.classList.remove('keyChoise'));
  }

  if (id === 'favorite') {
    qs('#bodyDiv').style.display = 'none';
    qs('#password').style.display = 'flex';
    qa('.favorite').forEach(e => e.classList.add('keyChoise'));
  } else {
    qs('#password').style.display = 'none';
    qs('#bodyDiv').style.display = 'block';
    generateTemplate(id);
    var newSongID = Object.keys(data[id])[0];
    changeSong(newSongID, id);
    qs('#' + newSongID).classList.add("keyChoise");
    songID = newSongID;
  }
}

function chooseSong(id) {
  console.log(songID)
  qs('#' + songID).classList.remove("keyChoise");
  qs('#' + id).classList.add("keyChoise");
  changeSong(id, activePage);
  songID = id;
}

function changeSong(melodyID, pageID) {
  qs('#textMelody').innerHTML = data[pageID][melodyID][6];
  qs('#textMelodyShort').innerHTML = data[pageID][melodyID][5];
  changeActiveParts(parts, false);
  changeActiveParts(data[pageID][melodyID][0], true);
  song = makeShortMelody(data[pageID][melodyID][1], data[pageID][melodyID][2]);
  qs('#player_short').src = song;
}

function chooseTone(value, id) {
  qs('#' + toneKey).classList.remove("keyChoise");
  qs('#' + id).classList.add("keyChoise");
  toneKey = id;
  tone = value;
}

function generateSong() {
  golosa = ["soprano1", "soprano2", "alt", "tenor1", "tenor2", "bariton", "bas"].map((id) => qs('#' + id).checked);

  if (golosa.every(g => g === false)) {
    window.alert('Невозможно сгенерировать мелодию: не выбрана ни одна партия')
  } else {
    velocity = ["soprano1Vol", "soprano2Vol", "altVol", "tenor1Vol", "tenor2Vol", "baritonVol", "basVol"].map((id) => qs('#' + id).value);

    console.log(golosa);
    console.log(velocity);

    song = makeMelody(data[activePage][songID][3], data[activePage][songID][4])

    qs('#trackName').innerHTML = pageName + ' "' + qs('#' + songID).textContent + '" в транспонировании  ' + qs('#' + toneKey).textContent + ' в темпе ' + (Number(qs('#tempo').value) + 11);
    qs('#songDiv').classList.remove("off");
    qs('#player').src = song;
  }
}

function rotateArray(arr) {
  var newArr = [];
  arr[0].map((note) => newArr.push([]));
  arr.map((part, n) => part.map((note, i) => newArr[i].push(note)));
  return newArr;
}

function makeShortMelody(melodyData, tempoData) {
  tempoData = tempoData.map((str) => str.map((t) => t * tempoConst));
  var volume = Array(melodyData.length).fill(70);
  return makeMidi(melodyData, tempoData, volume);
}

function makeMelody(melodyData, tempoData) {
  var delta = 65 - tone,
    melody = [],
    temp = [],
    volume = [],
    tempo = Math.abs(qs('#tempo').value) * tempoConst / 3;

  golosa.map((g, i) => {
    if (g) {
      melody.push(melodyData[i].map((note) => (note !== 0 ? note - delta : 0)));
      temp.push(tempoData[i].map((t) => t * tempo));
      volume.push(Number(velocity[i]));
    }
  });
  return makeMidi(melody, temp, volume);
}

function makeMidi(melody, temp, volume) {
  var file = new Midi.File();
  var tracks = [];

  melody.map((part) => tracks.push(new Midi.Track()));
  melody = rotateArray(melody);

  console.log(melody);

  melody.map((chord, i) => {
    chord.forEach((note, part) => {
      if (note !== 0 && part < chord.length - 1) {
        var partsWithSameNote = chord
          .map((n, j) => (note === n ? j : ""))
          .filter(String);
        if (partsWithSameNote.length > 1) {
          var volumesOfParts = partsWithSameNote.map((ind) => volume[ind]);
          var partWithMaxVolume =
            partsWithSameNote[
              volumesOfParts.indexOf(Math.max.apply(null, volumesOfParts))
            ];
          partsWithSameNote.map((index) =>
            index !== partWithMaxVolume ? (chord[index] = 0) : 0
          );
        }
      }
    });
    chord.map((note, part) =>
      tracks[part].addNote(0, note, temp[part][i], 0, volume[part])
    );
  });
  console.log(melody);

  tracks.map((t) => file.addTrack(t));
  return "data:audio/midi;base64," + btoa(file.toBytes());
}

function downloadSong() {
  song !== "" ? (document.location = song) : alert("Пустой трек");
}

var openMenu = () => qs('#mobileMenu').classList.toggle("active")

function openPage() {
  var k = CryptoJS.MD5(qs('#inputPassword').value);
  if (k == key1) {
    choosePage('pstgu');
    qs('#password').style.display = 'flex';
    qs('#wrongPassword').style.display = 'none';
  } else if (k == key2) {
    choosePage('fermata');
    qs('#password').style.display = 'flex';
    qs('#wrongPassword').style.display = 'none';
  } else {
    qs('#bodyDiv').style.display = 'none';
    qs('#wrongPassword').style.display = 'block';
  }
}

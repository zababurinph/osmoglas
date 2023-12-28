const tempoConst = 62,
      parts = ["soprano1L", "soprano2L", "altL", "tenor1L", "tenor2L", "baritonL", "basL"],
      vol = 70,
      qs = (sel) => document.querySelector(sel)
      qa = (sel) => document.querySelectorAll(sel);

let song = "",
    songID = "",
    tempoKey = "mid",
    tempo = 100,
    toneKey = "toneFa",
    tone = 65,
    golosa = [true, true, true, true, true, true, true],
    velocity = [70, 70, 70, 70, 70, 70, 70],
    activePage = 'stihira';

window.addEventListener("load", (e) => {
  generateTemlate(activePage);
  songID = Object.keys(data[activePage])[0];
  qa('.' + activePage).forEach(e => e.classList.add('keyChoise'));
  qs('#' + songID).classList.add("keyChoise");
  qs('#' + toneKey).classList.add("keyChoise");
  qs('#' + tempoKey).classList.add("keyChoise");
  qs('#textMelody').innerHTML = data[activePage][songID][6];
  qs('#textMelodyShort').innerHTML = data[activePage][songID][5];
  song = makeShortMelody(data[activePage][songID][1], data[activePage][songID][2]);
  qs('#player_short').src = song;
  changeActiveParts(data[activePage][songID][0], true);
})

window.addEventListener("resize", (e) => {
    if (document.documentElement.clientWidth > 600) qs('#mobileMenu').classList.remove("active")
}, true)

function generateTemlate(id) {
  if (['tropar', 'kondak', 'stihira'].some(e => e === id)) {
    qs('#template').innerHTML =
        '<h3>Выберите глас:</h3>' +
        '<div class="glass">' +
          '<div class="btn keyChoise" onclick="chooseSong(`glas1`)" id="glas1">Глас 1</div>' +
          '<div class="btn" onclick="chooseSong(`glas2`)" id="glas2">Глас 2</div>' +
          '<div class="btn" onclick="chooseSong(`glas3`)" id="glas3">Глас 3</div>' +
          '<div class="btn" onclick="chooseSong(`glas4`)" id="glas4">Глас 4</div>' +
          '<div class="btn" onclick="chooseSong(`glas5`)" id="glas5">Глас 5</div>' +
          '<div class="btn" onclick="chooseSong(`glas6`)" id="glas6">Глас 6</div>' +
          '<div class="btn" onclick="chooseSong(`glas7`)" id="glas7">Глас 7</div>' +
          '<div class="btn" onclick="chooseSong(`glas8`)" id="glas8">Глас 8</div>' +
        '</div>' +
        '<h3 id="textMelodyShort"></h3>';
  } else if (id === 'favorite') {
    qs('#template').innerHTML =
        '<h3>Выберите мелодию:</h3>' +
        '<div class="glass">' +
          '<div class="btn keyChoise" onclick="chooseSong(`kenguru`)" id="kenguru">Кенгуру</div>' +
        '</div>' +
        '<h3 id="textMelodyShort"></h3>';
  } else {
    qs('#template').innerHTML = '<h3>Неизвестная страница</h3>'
  }
}

const resetVolume = (id) => qs('#' + id).value = vol;

const changeActiveParts = (parts, value) =>
  value ? parts.map((part) => {
        qs('#' + part).classList.remove("off");
        qs('#' + part.slice(0, -1)).checked = true;
        qs('#' + part.slice(0, -1) + "Vol").classList.remove("off");
        qs('#' + part.slice(0, -1) + "Res").classList.remove("off");
      }) : parts.map((part) => {
        qs('#' + part).classList.add("off");
        qs('#' + part.slice(0, -1)).checked = false;
        qs('#' + part.slice(0, -1) + "Vol").classList.add("off");
        qs('#' + part.slice(0, -1) + "Res").classList.add("off");
      });

function choosePage(id) {
  qa('.' + activePage).forEach(e => e.classList.remove('keyChoise'));
  qa('.' + id).forEach(e => e.classList.add('keyChoise'));
  generateTemlate(id);
  let newSongID = Object.keys(data[id])[0];
  changeSong(newSongID, id);
  songID = newSongID;
  activePage = id;
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

function chooseTempo(value, id) {
  qs('#' + tempoKey).classList.remove("keyChoise");
  qs('#' + id).classList.add("keyChoise");
  tempoKey = id;
  tempo = value;
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

    qs('#trackName').innerHTML = qs('.' + activePage).textContent + ' "' + qs('#' + songID).textContent + '" в тоне  "' + qs('#' + toneKey).textContent + '" в темпе "' + qs('#' + tempoKey).textContent + '"';
    qs('#btnPlay').classList.remove("not-active");
    qs('#trackName').classList.remove("not-active");
    qs('#player').src = song;
  }
}

function rotateArray(arr) {
  let newArr = [];
  arr[0].map((note) => newArr.push([]));
  arr.map((part, n) => part.map((note, i) => newArr[i].push(note)));
  return newArr;
}

function makeShortMelody(melodyData, tempoData) {
  tempoData = tempoData.map((str) => str.map((t) => t * tempoConst));
  let volume = Array(melodyData.length).fill(70);
  return makeMidi(melodyData, tempoData, volume);
}

function makeMelody(melodyData, tempoData) {
  let delta = 65 - tone,
    melody = [],
    temp = [],
    volume = [];

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
  let file = new Midi.File();
  let tracks = [];

  melody.map((part) => tracks.push(new Midi.Track()));
  melody = rotateArray(melody);

  console.log(melody);

  melody.map((chord, i) => {
    chord.forEach((note, part) => {
      if (note !== 0 && part < chord.length - 1) {
        let partsWithSameNote = chord
          .map((n, j) => (note === n ? j : ""))
          .filter(String);
        if (partsWithSameNote.length > 1) {
          let volumesOfParts = partsWithSameNote.map((ind) => volume[ind]);
          let partWithMaxVolume =
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

function openMenu() {
  qs('#mobileMenu').classList.toggle("active");
  qs('.menuLogo').classList.toggle('menuLogoOpen')
}

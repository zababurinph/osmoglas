const tempoConst = 150,
      parts = ["soprano1L", "soprano2L", "altL", "tenor1L", "tenor2L", "baritonL", "basL"],
      vol = 70,
      qs = (sel) => document.querySelector(sel)
      qa = (sel) => document.querySelectorAll(sel);

let song = "",
    songID = "",
    toneKey = "tone65",
    tone = 65,
    golosa = [true, true, true, true, true, true, true],
    velocity = [70, 70, 70, 70, 70, 70, 70],
    activePage = 'favorite',
    access = false;

window.addEventListener("load", (e) => {
  qs('#' + toneKey).classList.add("keyChoise");
  choosePage(activePage);
})

window.addEventListener("resize", (e) => {
    if (document.documentElement.clientWidth > 600) qs('#mobileMenu').classList.remove("active")
}, true)

function generateTemplate(id) {
  let inner = '<h3>Выберите мелодию:</h3><div class="flex">';
  Object.keys(data[id]).map(i => inner += '<div class="btn" onclick="chooseSong(`' + i + '`)" id="' + i + '">' + data[id][i][7] + '</div>')
  inner += '</div><h3 id="textMelodyShort"></h3>';
  qs('#template').innerHTML = inner;
}

const resetVolume = (id) => qs('#' + id).value = vol;
const resetTempo = (id) => qs('#' + id).value = -100;

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
  if (id === 'favorite') {
    if (!access) qs('#bodyDiv').style.display = 'none';
    qs('#password').style.display = 'flex';
  }
  else {
    qs('#password').style.display = 'none';
    qs('#bodyDiv').style.display = 'block';
  }
  qa('.' + activePage).forEach(e => e.classList.remove('keyChoise'));
  qa('.' + id).forEach(e => e.classList.add('keyChoise'));
  generateTemplate(id);
  let newSongID = Object.keys(data[id])[0];
  changeSong(newSongID, id);
  qs('#' + newSongID).classList.add("keyChoise");
  songID = newSongID;
  activePage = id;
  qs('#mobileMenu').classList.remove("active");
  qs('.menuLogo').classList.remove('menuLogoOpen')
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

    qs('#trackName').innerHTML = qs('.' + activePage).textContent + ' "' + qs('#' + songID).textContent + '" в тональности  "' + qs('#' + toneKey).textContent + '" в темпе ' + (qs('#tempo').value);
    qs('#songDiv').classList.remove("off");
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
    volume = [],
    tempo = Math.abs(qs('#tempo').value);

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

function openPage() {
  if (CryptoJS.MD5(qs('#inputPassword').value) == key) {
    qs('#bodyDiv').style.display = 'block';
    access = true;
  }
}

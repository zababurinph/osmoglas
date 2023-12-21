const tempoConst = 62,
  parts = [
    "soprano1L",
    "soprano2L",
    "altL",
    "tenor1L",
    "tenor2L",
    "baritonL",
    "basL",
  ],
  vol = 70;

let song = "",
  glas = "glas1",
  tempoKey = "mid",
  tempo = 100,
  toneKey = "toneFa",
  tone = 65,
  golosa = [true, true, true, true, true, true, true],
  velocity = [70, 70, 70, 70, 70, 70, 70];

window.addEventListener("load", (e) => {
  document.getElementById(glas).classList.add("keyChoise");
  document.getElementById(toneKey).classList.add("keyChoise");
  document.getElementById(tempoKey).classList.add("keyChoise");
  document.getElementById("tropar").innerHTML = tropar[0];
  song = makeShortMelody(glas1Data[1], glas1Data[2]);
  document.getElementById("player_short").src = song;
  changeActiveParts(glas1Data[0], true);
});

window.addEventListener(
  "resize",
  (e) => {
    if (document.documentElement.clientWidth > 600)
      document.getElementById("mobileMenu").classList.remove("active");
  },
  true
);

function resetVolume(id) {
  document.getElementById(id).value = vol;
}

function changeActiveParts(parts, value) {
  value
    ? parts.map((part) => {
        document.getElementById(part).classList.remove("off");
        document.getElementById(part.slice(0, -1)).checked = true;
        document
          .getElementById(part.slice(0, -1) + "Vol")
          .classList.remove("off");
        document
          .getElementById(part.slice(0, -1) + "Res")
          .classList.remove("off");
      })
    : parts.map((part) => {
        document.getElementById(part).classList.add("off");
        document.getElementById(part.slice(0, -1)).checked = false;
        document.getElementById(part.slice(0, -1) + "Vol").classList.add("off");
        document.getElementById(part.slice(0, -1) + "Res").classList.add("off");
      });
}

function chooseGlas(id) {
  document.getElementById(glas).classList.remove("keyChoise");
  document.getElementById(id).classList.add("keyChoise");
  document.getElementById("tropar").innerHTML =
    tropar[Number(id.replace("glas", "")) - 1];
  changeActiveParts(parts, false);
  switch (id) {
    case "glas1":
      changeActiveParts(glas1Data[0], true);
      song = makeShortMelody(glas1Data[1], glas1Data[2]);
      break;
    case "glas2":
      changeActiveParts(glas2Data[0], true);
      song = makeShortMelody(glas2Data[1], glas2Data[2]);
      break;
    case "glas3":
      changeActiveParts(glas3Data[0], true);
      song = makeShortMelody(glas3Data[1], glas3Data[2]);
      break;
    default:
      alert("Нет такой распевки");
      song = "";
      break;
  }
  glas = id;
  document.getElementById("player_short").src = song;
}

function chooseTone(value, id) {
  document.getElementById(toneKey).classList.remove("keyChoise");
  document.getElementById(id).classList.add("keyChoise");
  toneKey = id;
  tone = value;
}

function chooseTempo(value, id) {
  document.getElementById(tempoKey).classList.remove("keyChoise");
  document.getElementById(id).classList.add("keyChoise");
  tempoKey = id;
  tempo = value;
}

function generateSong() {
  golosa = [
    "soprano1",
    "soprano2",
    "alt",
    "tenor1",
    "tenor2",
    "bariton",
    "bas",
  ].map((id) => document.getElementById(id).checked);
  velocity = [
    document.getElementById("soprano1Vol").value,
    document.getElementById("soprano2Vol").value,
    document.getElementById("altVol").value,
    document.getElementById("tenor1Vol").value,
    document.getElementById("tenor2Vol").value,
    document.getElementById("baritonVol").value,
    document.getElementById("basVol").value,
  ];
  console.log(golosa);
  console.log(velocity);
  switch (glas) {
    case "glas1":
      song = makeMelody(glas1Data[3], glas1Data[4]);
      break;
    case "glas2":
      song = makeMelody(glas2Data[3], glas2Data[4]);
      break;
    case "glas3":
      song = makeMelody(glas3Data[3], glas3Data[4]);
      break;
    default:
      alert("Нет такой распевки");
      song = "";
      return;
  }
  document.getElementById("trackName").innerHTML =
    '"' +
    document.getElementById(glas).textContent +
    '" в тоне  "' +
    document.getElementById(toneKey).textContent +
    '" в темпе "' +
    document.getElementById(tempoKey).textContent +
    '"';
  document.getElementById("btnPlay").classList.remove("not-active");
  document.getElementById("trackName").classList.remove("not-active");
  document.getElementById("player").src = song;
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
  document.getElementById("mobileMenu").classList.toggle("active");
}

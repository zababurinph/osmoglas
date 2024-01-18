//@formatter:off

'use strict';
var vol = 80,
    qs = (sel) => document.querySelector(sel),
    qa = (sel) => document.querySelectorAll(sel);

var song = "",
    songID = "",
    toneKey = "tone65",
    tone = 0,
    parts = {soprano1: true, soprano2: true, alt: true, tenor1: true, tenor2: true, bariton: true, bas: true},
    velocity = {soprano1: vol, soprano2: vol, alt: vol, tenor1: vol, tenor2: vol, bariton: vol, bas: vol},
    tempoSong = 120,
    activePage = 'glases',
    activeChapter = '',
    pageName = '';

window.addEventListener("load", e => {
  qs('#' + toneKey).classList.add("keyChoise");
  activeChapter = Object.keys(data2[activePage])[0];
  choosePage(activePage);
  qs('#vizualizer-piano').config = {noteHeight: 10, activeNoteRGB: '152, 40, 40, 100'};
  // qs('#vizualizer-staff').config = {activeNoteRGB: '152, 40, 40, 100'};
})

window.addEventListener("resize", e => {
  if (document.documentElement.clientWidth > 820) {
    qs('#mobileMenu').classList.add('notActive');
    qs('.separator').classList.remove('notActive');
  }
}, true)

qs('#checkbox_navbar').addEventListener('change', e => {
  qs('body').classList.toggle('add-font')
})

function generateTemplatePage(id) {
  var inner = '<h3>Выберите раздел:</h3><div class="flex">';

  Object.keys(data2[id]).map(i => inner += '<div class="btn" onclick="chooseChapter(`' + i + '`)" id="' + i + '">' + data2[id][i].name + '</div>');
  inner += '</div><h3>Выберите мелодию:</h3><div id="templateMelody" class="flex">';
  inner += generateTemplateChapter(Object.keys(data2[id])[0]);
  inner += '</div><h3 id="textMelodyShort"></h3>';

  qs('#template').innerHTML = inner;
}

function generateTemplateChapter(id) {
  var inner = '';
  Object.keys(data2[activePage][id]).map(i => {
    if (i !== 'name') inner += '<div class="btn" onclick="chooseSong(`' + i + '`)" id="' + i + '">' + data2[activePage][id][i].name + '</div>';
  });
  return inner;
}

var resetVolume = (id) => qs('#' + id).value = vol;

function changeActiveParts(parts, value) {
  value ? parts.map((part) => {
        qs('#' + part + "Div").classList.remove("off");
        qs('#' + part).checked = true;
      }) : parts.map((part) => {
        qs('#' + part + "Div").classList.add("off");
        qs('#' + part).checked = false;
      });
}

function choosePage(id) {
  resetMidiPlayer();
  qs('#template').innerHTML = '';
  ['.wrongPassword', '.password', '#bodyDiv', '#instruction', '#donut', '#mobileMenu'].forEach(e => qs(e).classList.add('notActive'));
  qa('.' + activePage).forEach(e => e.classList.remove('keyChoise'));
  qa('.' + id).forEach(e => e.classList.add('keyChoise'));

  activePage = id;

  if (id === 'favorite') {
    pageName = 'Избранное';
    qs('.password').classList.remove('notActive');
    qa('.favorite').forEach(e => e.classList.add('keyChoise'));
  } else if (['instruction', 'donut'].some(e => e === id)) {
    qs('#' + id).classList.remove('notActive');
  } else {
    qs('#bodyDiv').classList.remove('notActive');
    generateTemplatePage(id);
    activeChapter = Object.keys(data2[id])[0];
    pageName = qs('#' + activeChapter).textContent;
    chooseChapter(activeChapter);
    qs('#' + songID).classList.add("keyChoise");
  }
}

function chooseChapter(id) {
  console.log(id);
  resetMidiPlayer();
  qs('#' + activeChapter).classList.remove("keyChoise");
  qs('#' + id).classList.add("keyChoise");

  qs('#templateMelody').innerHTML = generateTemplateChapter(id);

  pageName = qs('#' + id).textContent;
  activeChapter = id;
  songID = Object.keys(data2[activePage][id])[1];

  qs('#' + songID).classList.add("keyChoise");
  changeSong(songID, id, activePage);
}

function chooseSong(id) {
  console.log(id);
  resetMidiPlayer();
  qs('#' + songID).classList.remove("keyChoise");
  qs('#' + id).classList.add("keyChoise");
  changeSong(id, activeChapter, activePage);
}

async function changeSong(melodyID, chapterID, pageID) {
  qs('#textMelody').innerHTML = data2[pageID][chapterID][melodyID].text;
  qs('#textMelodyShort').innerHTML = data2[pageID][chapterID][melodyID].textShort;
  changeActiveParts(Object.keys(parts), false);

  var url = data2[pageID][chapterID][melodyID].url;
  var midi = new Midi();
  midi = await Midi.fromUrl(url);
  var activeParts = [];
  midi.tracks.map(t => activeParts.push(t.name));
  changeActiveParts(activeParts, true);

  tempoSong = midi.header.tempos[0].bpm;
  changeTempo(tempoSong);

  if (['tropar', 'kondak'].some(e => e === chapterID)) {
    midi = await Midi.fromUrl(data2[pageID][chapterID][melodyID].urlShort);
    song = jsonToMidi(setVolume(midi, vol));
  } else
    song = makeShortMelody(midi, data2[pageID][chapterID][melodyID].lengthShort);

  qs('#player_short').src = song;
  songID = melodyID;
}

function changeTempo(tempo) {
  qs('#tempoRange').value = tempo || tempoSong;
  qs('#tempoInput').value = tempo || tempoSong;
}

function chooseTone(value, id) {
  qs('#' + toneKey).classList.remove("keyChoise");
  qs('#' + id).classList.add("keyChoise");
  toneKey = id;
  tone = value;
}

async function generateSong() {
  Object.keys(parts).map(part => {
    parts[part] = qs('#' + part).checked
  })

  if (Object.keys(parts).every(part => parts[part] === false)) {
    window.alert('Невозможно сгенерировать мелодию: не выбрана ни одна партия')
  } else {
    Object.keys(velocity).map(part => velocity[part] = qs('#' + part + 'Vol').value)

    console.log(parts);
    console.log(velocity);

    tempoSong = qs('#tempoInput').value;
    song = await makeMelody(data2[activePage][activeChapter][songID].url);

    qs('#trackName').innerHTML = pageName + ' "' + qs('#' + songID).textContent + '" в транспонировании  ' + tone + ' в темпе ' + tempoSong;
    qs('#songDiv').classList.remove("off");
    qs('#player').src = song;
    // qs('#playerViz').src = song;
  }
}

function setVolume(midi, volume) {
  midi.tracks.map(track => track.notes.forEach(note => note.velocity = volume));
  return midi;
}

function makeShortMelody(midi, len) {
  var lenToTick = midi.tracks[0].notes[len].ticks;
  midi.tracks.map(track => {
    var i = 0,
        newNotes = [];
    while (track.notes[i].ticks < lenToTick) {
      newNotes.push(track.notes[i]);
      i++;
    }
    track.notes = newNotes;
  })

  return jsonToMidi(setVolume(midi, vol));
}

async function makeMelody(url) {
  var midi = new Midi();
  midi = await Midi.fromUrl(url);

  midi.header.tempos.forEach(tempo => tempo.bpm = tempoSong);

  var newTracks = [];
  Object.keys(parts).map(part => {
    if (parts[part]) newTracks.push(midi.tracks.filter(track => track.name === part)[0]);
  });

  midi.tracks = newTracks;
  midi.tracks.map(track => {
    track.notes.forEach(note => {
      note.midi += tone;
      note.velocity = velocity[track.name];
    })
  });

  return jsonToMidi(midi);
}

function jsonToMidi(json) {
  var file = new MidiLocal.File({ticks: json.header.ppq}),
      tracks = [];

  json.tracks.map(t => tracks.push(new MidiLocal.Track()));

  json.tracks.map((t, i) => {
    tracks[i].setTempo(json.header.tempos[i].bpm, 0);
    t.notes.map(note => tracks[i].addNote(0, note.midi, note.durationTicks, 0, note.velocity));
  })

  tracks.map(t => file.addTrack(t));
  return "data:audio/midi;base64," + btoa(file.toBytes());
}

var openMenu = () => qs('#mobileMenu').classList.toggle('notActive')

function generateTemplateFavorite(id) {
  qs('.wrongPassword').classList.add('notActive');

  activeChapter = id;

  var inner = '';
  inner += '<h3>Выберите мелодию:</h3><div id="templateMelody" class="flex">';
  inner += generateTemplateChapter(id);
  inner += '</div><h3 id="textMelodyShort"></h3>';
  qs('#template').innerHTML = inner;

  var newSongID = Object.keys(data2[activePage][id])[0];

  qs('#' + newSongID).classList.add("keyChoise");
  changeSong(newSongID, activeChapter, activePage);
  qs('#bodyDiv').classList.remove('notActive');
}

function openPage() {
  resetMidiPlayer();
  var k = qs('#inputPassword').value + key;

  if (k === key1) generateTemplateFavorite('pstgu');
  else if (k === key2) generateTemplateFavorite('fermata');
  else {
    qs('#bodyDiv').classList.add('notActive');
    qs('#template').innerHTML = '';
    qs('.wrongPassword').classList.remove('notActive');
  }
}

function resetMidiPlayer() {
  qs('#trackName').innerHTML = 'Неизвестно';
  qs('#player').src = '';
  qs('#player_short').src = '';
  qs('#songDiv').classList.add('off');
  qs('#vizualizer-piano').classList.add('notActive');
  qs('#vizualizer-lines').classList.add('notActive');
}

function downloadSong() {
  song !== "" ? (document.location = song) : alert("Пустой трек");
}
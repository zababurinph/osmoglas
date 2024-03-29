//@formatter:off

'use strict';
var volumeConst = 80,
    tempoConst = 120,
    pageConst = 'glases',
    qs = (sel) => document.querySelector(sel),
    qa = (sel) => document.querySelectorAll(sel);

window.addEventListener("load", e => {
  qs('#tone0').classList.add("keyChoise");
  choosePage(pageConst);
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
  var inner = '<h3>Выберите раздел:</h3><div class="flex" id="chapters">';

  Object.keys(data[id]).map(i => inner += '<div class="btn" onclick="chooseChapter(`' + i + '`)" id="' + i + '">' + data[id][i].name + '</div>');
  inner += '</div>' +
      '<h3>Выберите мелодию:</h3>' +
        '<div id="templateMelody" class="flex"></div>' +
      '<h3 id="textMelodyShort"></h3>';

  qs('#template').innerHTML = inner;
}

function generateTemplateChapter(pageID, id) {
  var inner = '';
  Object.keys(data[pageID][id]).map(i => {
    if (i !== 'name') inner += '<div class="btn" onclick="chooseSong(`' + i + '`)" id="' + i + '">' + data[pageID][id][i].name + '</div>';
  });
  qs('#templateMelody').innerHTML = inner;
}

function choosePage(id) {
  resetMidiPlayer();
  qs('#template').innerHTML = '';
  ['.wrongPassword', '.password', '#bodyDiv', '#instructionPage', '#donutPage', '#mobileMenu'].forEach(e => qs(e).classList.add('notActive'));
  ['.btnMenu', '.btnMenuMobile'].map(page => qa(page).forEach(e => e.classList.remove('keyChoise')));
  qa('.' + id).forEach(e => e.classList.add('keyChoise'));

  if (id === 'favorite') {
    qs('.password').classList.remove('notActive');
    qa('.favorite').forEach(e => e.classList.add('keyChoise'));
  } else if (['instruction', 'donut'].some(e => e === id)) {
    qs('#' + id + 'Page').classList.remove('notActive');
  } else {
    qs('#bodyDiv').classList.remove('notActive');
    generateTemplatePage(id);
    var activeChapter = Object.keys(data[id])[0];
    var songID = chooseChapter(activeChapter);
    qs('#' + songID).classList.add("keyChoise");
  }
}

function chooseChapter(id) {
  // console.log(id);

  resetMidiPlayer();
  var activeChapter = qs('#chapters .keyChoise'),
      activePage = qs('.menu .keyChoise');
  if (activeChapter !== null) activeChapter.classList.remove("keyChoise");
  qs('#' + id).classList.add("keyChoise");

  generateTemplateChapter(activePage.id, id);

  var songID = Object.keys(data[activePage.id][id])[1];

  qs('#' + songID).classList.add("keyChoise");
  changeSong(songID, id, activePage.id);
  return songID;
}

function chooseSong(id) {
  // console.log(id);

  resetMidiPlayer();
  var activeSong = qs('#templateMelody .keyChoise');
  if (activeSong !== null) activeSong.classList.remove("keyChoise");
  qs('#' + id).classList.add("keyChoise");

  var activeChapterID = qs('#chapters .keyChoise').id,
      activePageID = qs('.menu .keyChoise').id;

  changeSong(id, activeChapterID, activePageID);
}

async function changeSong(melodyID, chapterID, pageID) {
  qs('#textMelody').innerHTML = data[pageID][chapterID][melodyID].text;
  qs('#textMelodyShort').innerHTML = data[pageID][chapterID][melodyID].textShort;
  changeActiveParts(getPartsArray(), false);

  var midi = new Midi(),
      song = '',
      url = data[pageID][chapterID][melodyID].url,
      activeParts = [];

  midi = await Midi.fromUrl(url);
  midi.tracks.map(t => activeParts.push(t.name));
  changeActiveParts(activeParts, true);
  changeTempo(midi.header.tempos[0].bpm);

  if (['tropar', 'kondak'].some(e => e === chapterID)) {
    midi = await Midi.fromUrl(data[pageID][chapterID][melodyID].urlShort);
  } else {
    var lenToTick = midi.tracks[0].notes[data[pageID][chapterID][melodyID].lengthShort].ticks;
    midi.tracks.forEach(track => {
      var i = 0,
          newNotes = [];
      while (track.notes[i].ticks < lenToTick) {
        newNotes.push(track.notes[i]);
        i++;
      }
      track.notes = newNotes;
    })
  }

  midi = doubleTempo(midi);
  midi = setVolume(midi, volumeConst);
  song = jsonToMidi(midi);

  qs('#player_short').src = song;
}

async function generateSong() {
  var partsObj = {};
  qa('.parts input[type = "checkbox"]').forEach(input => partsObj[input.id] = input.checked);

  if (Object.keys(partsObj).every(part => partsObj[part] === false)) {
    window.alert('Невозможно сгенерировать мелодию: не выбрана ни одна партия')
  } else {
    var tempo = qs('#tempoInput').value,
        tone = Number(qs('.tone-div .keyChoise').textContent),
        volumeObj = {},
        activePage = qs('.menu .keyChoise'),
        activeSong = qs('#templateMelody .keyChoise'),
        activeChapter = '',
        checkPass = qs('.password').classList.value.indexOf('notActive') >= 0;

    if (checkPass) activeChapter = qs('#chapters .keyChoise')
    else activeChapter = qs('#inputPassword').value;

    qa('.parts input[type = "range"]').forEach(input => volumeObj[input.id.replace('Vol', '')] = input.value);

    var song = await makeMelody(data[activePage.id][checkPass ? activeChapter.id : activeChapter][activeSong.id].url, partsObj, tempo, tone, volumeObj);

    qs('#trackName').innerHTML = (checkPass ? activeChapter : activePage).textContent + ' "' + activeSong.textContent + '" в транспонировании  ' + tone + ' в темпе ' + tempo;
    qs('#songDiv').classList.remove("off");
    qs('#player').src = song;
    qs('#vizualizer-lines').src = song;
    qs('#vizualizer-piano').src = song;
    // downloadSong(song);
  }
}

async function makeMelody(url, partsObj, tempo, deltaTone, volumeObj) {
  var midi = new Midi();
  midi = await Midi.fromUrl(url);
    
  midi.header.tempos[0].bpm = tempo;
  // midi.header.tempos.forEach(t => t.bpm = tempo);

  var newTracks = [];
  Object.keys(partsObj).map(part => {
    if (partsObj[part]) newTracks.push(midi.tracks.filter(track => track.name === part)[0]);
  });
    
  if (newTracks.length === 1) {
    qs('#vizualizer-lines').classList.add('notActive');
    qs('#vizualizer-piano').classList.remove('notActive');
  }
  else {
    qs('#vizualizer-piano').classList.add('notActive');
    qs('#vizualizer-lines').classList.remove('notActive');
  }
    
  midi.tracks = newTracks;
  midi.tracks.map(track => {
    track.notes.forEach(note => {
      note.midi += deltaTone;
      note.velocity = volumeObj[track.name];
    })
  });
    
  return jsonToMidi(midi);
}

function jsonToMidi(json) {
  // console.log(json);

  var file = new MidiLocal.File({ticks: json.header.ppq}),
      tracks = [],
      time = 0,
      oldTicks = 0,
      nextTS = 0;

  json.tracks.map(t => tracks.push(new MidiLocal.Track()));
  tracks[0].setTimeSignature(json.header.timeSignatures[nextTS].timeSignature[0], json.header.timeSignatures[nextTS].timeSignature[1], 0);
  nextTS += 1;

  json.tracks.map((t, i) => {
    tracks[i].setTempo(json.header.tempos[0].bpm, 0);
    oldTicks = 0;
    t.notes.map(note => {
      if (i === 0)
        if (json.header.timeSignatures.length >= nextTS + 1)
          if (note.ticks === json.header.timeSignatures[nextTS].ticks) {
            tracks[0].setTimeSignature(json.header.timeSignatures[nextTS].timeSignature[0], json.header.timeSignatures[nextTS].timeSignature[1], 0);
            nextTS += 1;
            // console.log('nextTS')
      }
      // console.log('after loop')
      if (note.ticks !== oldTicks) time = note.ticks - oldTicks;
      // console.log(note.midi + ' ' + note.durationTicks + ' ' + time)
      tracks[i].addNote(0, note.midi, note.durationTicks, time, note.velocity);
      oldTicks = note.ticks + note.durationTicks;
      time = 0;
      // console.log(i);
      // console.log(note);
    });
  })
  // console.log('OK4');
    
  tracks.map(t => file.addTrack(t));
  return "data:audio/midi;base64," + btoa(file.toBytes());
}

//-------------------------------------------------------------------------------------------------------------------

function generateTemplateFavorite(id) {
  qs('.wrongPassword').classList.add('notActive');

  var activePageID = qs('.menu .keyChoise').id;

  qs('#template').innerHTML =
      '<h3>Выберите мелодию:</h3>' +
        '<div id="templateMelody" class="flex"></div>' +
      '<h3 id="textMelodyShort"></h3>';
  generateTemplateChapter(activePageID, id);

  var songID = Object.keys(data[activePageID][id])[0];

  qs('#' + songID).classList.add("keyChoise");
  changeSong(songID, id, activePageID);
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

//-------------------------------------------------------------------------------------------------------------------

var openMenu = () => qs('#mobileMenu').classList.toggle('notActive')
var resetMidiPlayer = () => {
  qs('#trackName').innerHTML = 'Неизвестно';
  qs('#player').src = '';
  qs('#player_short').src = '';
  qs('#songDiv').classList.add('off');
  qs('#vizualizer-piano').classList.add('notActive');
  qs('#vizualizer-lines').classList.add('notActive');
}
var chooseTone = (value) => {
  qa('.tone-div div').forEach(div => div.classList.remove("keyChoise"));
  qs('#tone' + value).classList.add("keyChoise");
}
var changeActiveParts = (parts, value) => {
  value ? parts.map((part) => {
    // console.log(part);
    qs('#' + part + "Div").classList.remove("off");
    qs('#' + part).checked = true;
  }) : parts.map((part) => {
    qs('#' + part + "Div").classList.add("off");
    qs('#' + part).checked = false;
  });
}

//-------------------------------------------------------------------------------------------------------------------

var resetVolume = (id) => qs('#' + id).value = volumeConst;
var getPartsArray = () => {
  var partsArr = [];
  qa('.parts input[type = "checkbox"]').forEach(input => partsArr.push(input.id));
  return partsArr;
}
var changeTempo = (tempo) => {
  qs('#tempoRange').value = tempo || tempoConst;
  qs('#tempoInput').value = tempo || tempoConst;
}
var setVolume = (midi, volume) => {
  midi.tracks.map(track => track.notes.forEach(note => note.velocity = volume));
  return midi;
}
var doubleTempo = (midi) => {
  midi.header.tempos.forEach(t => t.bpm *= 2);
  return midi;
}
var setTimeSignature = (midi, ts) => {
  var timeSignature = []
  midi.tracks.map((t, i) => timeSignature.push({
    ticks: 0,
    timeSignature: ts,
    measures: 0
  }));
  midi.header.timeSignatures = timeSignature;
  return midi;
}
var downloadSong = (obj) => {
  obj !== "" ?
      document.location = obj
      // document.location = jsonToMidi2(jsonFrom)
       :
      alert("Пусто");
};
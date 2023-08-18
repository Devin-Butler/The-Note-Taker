const express = require('express');
const fs = require('fs');
const notesData = require('./db/db.json')

const app = express();

app.use(express.static('public'));

app.get('GET/notes', (req, res) => {
    res.sendFile(path.join(notesPage, 'notes.html'));
  });
  
  app.get('GET/*', (req, res) => {
    res.sendFile(path.join(indexPage, 'index.html'));
  });

  app.get('/api/notes', (req, res) => {
    console.log('REQ', req.params);
  
    const savedNotes = req.params.savedNotes();
  
    for (let i = 0; i < savedNotes.length; i++) {
      if (savedNotes === [i].note.toLowerCase()) {
        return res.json( [i]);
      }
    }


  });
  
  
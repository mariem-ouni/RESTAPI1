// Importer Express
const express = require('express');
require("dotenv").config
const app = express(); // Initialiser l'application Express

// Définir un port pour le serveur
const PORT = process.env.PORT || 3000;

// Middleware pour parser les requêtes JSON
app.use(express.json());

// Définir une route de base (facultative)
app.get('/', (req, res) => {
  res.send('Bienvenue sur le serveur Express');
});

// Démarrer le serveur
app.listen(PORT, () => {
  console.log(`Le serveur Express est en cours d'exécution sur le port ${PORT}`);
});


// Importer mongoose en premier !
const mongoose = require('mongoose');

// URL de connexion locale
const url = 'mongodb://localhost:27017/maBaseDeDonnees';

// Connexion à MongoDB
mongoose.connect(url)
  .then(() => console.log('Connecté à MongoDB'))
  .catch(err => console.log('Erreur de connexion:', err));




  
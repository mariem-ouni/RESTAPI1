const mongoose = require('mongoose');

const User = require('./models/User'); // Assurez-vous que le chemin est correct


// Définir le schéma de l'utilisateur
const userSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true, // Le champ est requis
    trim: true // Supprimer les espaces
  },
  email: {
    type: String,
    required: true, // Le champ est requis
    unique: true, // L'email doit être unique
    lowercase: true, // Convertir l'email en minuscules
    trim: true // Supprimer les espaces
  },
  password: {
    type: String,
    required: true // Le champ est requis
  },
  createdAt: {
    type: Date,
    default: Date.now // Date de création par défaut
  }
});

// Exporter le modèle User basé sur le schéma userSchema
module.exports = mongoose.model('User', userSchema);

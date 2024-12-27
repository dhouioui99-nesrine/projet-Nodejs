const express = require('express');

const router = express.Router();
const evaluationModel = require('../models/evaluationModel');


router.post('/create', async (req, res) => {
    try {
      console.log('Requête reçue avec les données suivantes :', req.body);
  
      const { email, Note, DateE, comments } = req.body;
      if (!email || !Note || !DateE || !comments) {
        return res.status(400).json({ message: 'Tous les champs sont requis.' });
      }
  
      console.log('Création d\'une nouvelle évaluation...');
      const evaluation = new evaluationModel({ email, Note, DateE, comments });
  
      const savedEvaluation = await evaluation.save();
      console.log('Évaluation sauvegardée avec succès :', savedEvaluation);
  
      res.status(201).json({ message: 'Évaluation ajoutée avec succès.', savedEvaluation });
    } catch (error) {
      console.error('Erreur lors de l\'ajout de l\'évaluation :', error);
      res.status(500).json({ message: 'Erreur .', error: error.message });
    }
  });

 router.get('/all', async (req, res) => {
  try {
    // Récupération de toutes les évaluations
    const evaluations = await evaluationModel.find();

    // Renvoi des données récupérées
    res.status(200).json(evaluations);
  } catch (error) {
    console.error('Erreur lors de la récupération des évaluations :', error);

    // Gestion de l'erreur avec un message significatif
    res.status(500).json({ message: 'Erreur lors de la récupération des évaluations.' });
  }
});

  
  module.exports = router;

const express = require('express');
const LeaveRequest = require('../models/LeaveRequest');
const router = express.Router();

router.post('/create', async (req, res) => {
  try {
    const { startDate, endDate, leaveType, comments, userId } = req.body;
    const leaveRequest = new LeaveRequest({
      startDate,
      endDate,
      leaveType,
      comments,
     // user: userId, 
    });

    await leaveRequest.save();
    res.status(201).json({ message: 'Demande de congé envoyée avec succès !' });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Erreur lors de la création de la demande de congé.' });
  }
});


router.get('/', async (req, res) => {
  try {
    const leaveRequests = await LeaveRequest.find();
    res.status(200).json(leaveRequests);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Erreur lors de la récupération des demandes de congé.' });
  }
});
router.put('/:id/status', async (req, res) => {
    const { id } = req.params;
    const { status } = req.body;  // Statut à mettre à jour (Approuvé ou Rejeté)
  
    if (!['Approuvé', 'Rejeté'].includes(status)) {
      return res.status(400).json({ message: 'Statut invalide' });
    }
  
    try {
      const leave = await LeaveRequest.findByIdAndUpdate(
        id,
        { status },
        { new: true } 
      );
  
      if (!leave) {
        return res.status(404).json({ message: 'Demande de congé non trouvée' });
      }
  
      res.status(200).json(leave);
    } catch (error) {
      console.error('Erreur lors de la mise à jour du statut:', error);
      res.status(500).json({ message: 'Erreur lors de la mise à jour du statut.' });
    }
  });

module.exports = router;

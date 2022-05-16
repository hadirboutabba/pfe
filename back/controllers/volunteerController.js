
var bcrypt = require('bcryptjs');

const jwt = require("jsonwebtoken");
const VolunteerOpp = require("../models/volunteerOpp");

exports.AddVolunteerOpp = (req, res) => {
  console.log(req.body);
  VolunteerOpp(req.body).save().then(data => {
      return res.status(200).json({
          message: "L'VolunteerOpp  est ajoutée avec succèe"

      });
  }).catch(err => {
      console.log(err)
      res.status(500).send({
          message: err.message || "erreur du serveur."
      });
  })}


  exports.getVolunteerOpp = (req, res) => {
    try {
        VolunteerOpp.find((err, result)=> {
          if (result)return res.status(200).json(result)
          if(err) return res.status(400).json({ message: "Erreur" });
        })
      } catch (e) {
        console.error(e);
        res.status(500).json({ message: e.message|| "erreur du serveur." });
      }
}


exports.updateVolunteerOpp= (req, res) => {
    try {
        VolunteerOpp.findByIdAndUpdate(req.params.id, { $set: { Title:req.body.Title ,CompanyName:req.body.CompanyName,Description:req.body.Description,URL:req.body.URL } }, (err, result)=> {
            if (result) return res.status(200).json({ message: "modification avec succès."})
            if(err) return res.status(400).json({ message: "Erreur" });
        })
    } catch (e) {
        res.status(500).json({ message: e });
    }}
exports.deleteVolunteerOpp= (req, res) => { 
    try {
        VolunteerOpp.findByIdAndDelete(req.params.id, (err, result)=> {
            if (result) return res.status(200).json({ message: "suppression avec succès"})
            if(err) return res.status(400).json({ message: "Erreur" });
            
        })
    } catch (e) {
        res.status(500).json({ message: e });
    }
}


var bcrypt = require('bcryptjs');

const jwt = require("jsonwebtoken");
const jobOpp = require("../models/jobOpp");

exports.AddjobOpp = (req, res) => {
  console.log(req.body);
  jobOpp(req.body).save().then(data => {
      return res.status(200).json({
          message: "L'jobOpp  est ajoutée avec succèe"

      });
  }).catch(err => {
      console.log(err)
      res.status(500).send({
          message: err.message || "erreur du serveur."
      });
  })}


  exports.getjobOpp = (req, res) => {
    try {
        jobOpp.find((err, result)=> {
          if (result)return res.status(200).json(result)
          if(err) return res.status(400).json({ message: "Erreur" });
        })
      } catch (e) {
        console.error(e);
        res.status(500).json({ message: e.message|| "erreur du serveur." });
      }
}


exports.updatejobOpp= (req, res) => {
    try {
        jobOpp.findByIdAndUpdate(req.params.id, { $set: { Title:req.body.Title ,CompanyName:req.body.CompanyName,Description:req.body.Description,URL:req.body.URL } }, (err, result)=> {
            if (result) return res.status(200).json({ message: "modification avec succès."})
            if(err) return res.status(400).json({ message: "Erreur" });
        })
    } catch (e) {
        res.status(500).json({ message: e });
    }}
exports.deletejobOpp= (req, res) => { 
    try {
        jobOpp.findByIdAndDelete(req.params.id, (err, result)=> {
            if (result) return res.status(200).json({ message: "suppression avec succès"})
            if(err) return res.status(400).json({ message: "Erreur" });
            
        })
    } catch (e) {
        res.status(500).json({ message: e });
    }
}

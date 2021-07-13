const express = require("express");
const uuid = require("uuid");
const router = express.Router();
const members = require("../../members");

// Get all Members

router.get("/", (req, res) => res.json(members));

// Get Single Members
router.get("/:id", (req, res) => {
  const found = members.some((member) => member.id === parseInt(req.params.id));

  if (found) {
    res.json(members.filter((member) => member.id === parseInt(req.params.id)));
  } else {
    res.status(400).json({ msg: `Member not found of ${req.params.id}` });
  }
});

//  Create Members

router.post("/", (req, res) => {
  const newMember = {
    id: uuid.v4(),
    name: req.body.name,
    email: req.body.email,
    status: "active",
  };

  if (!newMember.name || !newMember.email) {
    return res.status(400).json({ msg: "Please include a name and email" });
  }

  members.push(newMember);
  res.json(members);
});

// Update Members

router.put("/:id", (req, res) => {
  const found = members.some((member) => member.id === parseInt(req.params.id));

  if (found) {
    const updateMembers = req.body;
    members.forEach((member) => {
      if (member.id === parseInt(req.params.id)) {
        member.name = updateMembers.name ? updateMembers.name : member.name;
        member.email = updateMembers.email ? updateMembers.email : member.email;

        res.json({ msg: "Member updated", member });
      }
    });
  } else {
    res.status(400).json({ msg: `Member not found of ${req.params.id}` });
  }
});

// Delete Member

router.delete("/:id", (req, res) => {
  const found = members.some((member) => member.id === parseInt(req.params.id));

  if (found) {
    res.json({
      msg: "members deleted",
      members: members.filter(
        (member) => member.id !== parseInt(req.params.id)
      ),
    });
  } else {
    res.status(400).json({ msg: `Member not found of ${req.params.id}` });
  }
});

module.exports = router;

var express = require ( 'express');
var router = express.Router();

let goals = [
    {id_: 1, goals: 'Task 1', description: 'Description for Task 1', duedate: '2024-07-01'},
    {id_: 2, goals: 'Task 2', description: 'Description for Task 2', duedate: '2024-07-02'},
    {id_: 3, goals: 'Task 3', description: 'Description for Task 3', duedate: '2024-07-03'}
];



router.get ('/getGoals', (req, res) =>{
    res.json(goals);
});

router.post('/addGoal', (req, res) => {
  const { name, description, duedate } = req.body;
  const newGoal = {
    id: Math.floor(Math.random() * 1000) + 1,
    name,
    description,
    duedate
  };
  tasks.push(newGoal);
  res.json(newGoal;
});

router.delete('/deleteGoal/:id', (req, res) => {
  const goalId = parseInt(req.params.id);
  tasks = goal.filter(goal => goal.id !== GoalId);
  res.json({ message: `Task with id ${goalId} deleted` });
});



module.exports = router;

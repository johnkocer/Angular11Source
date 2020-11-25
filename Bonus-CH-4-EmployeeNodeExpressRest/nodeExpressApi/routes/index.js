var express = require('express');
var router = express.Router();

const { v4: uuidv4 } = require('uuid');

const low = require('lowdb')
const FileSync = require('lowdb/adapters/FileSync');
const { json } = require('express');
 
const adapter = new FileSync('db.json')
const db = low(adapter)

db.defaults({ employees: [], user: {} })
  .write()

router.get('/api/employees', (req, res, next) => {
  let resData= db.get('employees').value();
  console.log("[Employees - GET ALL]", resData.length)
  console.table( resData.slice(0,5))
  res.status(200).json(resData);
});

router.post('/api/employees', (req, res, next) => {
  let data = req.body;
  data.id = uuidv4();
  let item = db.get('employees').push(data).last().value();
  console.log("[Employees - POST]",  item)
  res.status(200).json(item);
});

router.get('/api/employees/:id', (req, res, next) => {
  let id = req.params.id;
  let item = db.get('employees').find({id}).value();
  console.log("[Employees - GET  ] Item: ", item)
  res.status(200).json(item);
});

router.get('/api/employees/byName/:name', (req, res, next) => {

  let name = req.params.name;
  let list = db.get('employees').filter(t=>t.name.toLowerCase().includes(name.toLowerCase())).value();

  console.log(`[Employees - GET  ] Search name: ${name} - Record Count: ${list.length} `)
  console.table( list.slice(0,5))

  res.status(200).json(list);
});


router.put('/api/employees/:id', (req, res, next) => {
  let id = req.params.id;
  let item = db.get('employees').find({id}).assign(req.body).value();
  console.log("[Employees - PUT] ", item)
  
  res.status(200).json(item);
});

router.delete('/api/employees/:id', (req, res, next) => {
  let id = req.params.id;
  let item = db.get('employees').find({id}).value();
  db.get('employees').remove({id}).value();
  console.log("[Employees - DELETE]", item)

  res.status(200).json(item);
});

module.exports = router;
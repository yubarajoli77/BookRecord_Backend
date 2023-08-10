const express = require('express');
const router = express.Router();

router.get('/', (req,res,next)=>{
  res.status(200).json({
    message: "Success user get",
    metadata: {
      hostname: req.hostname,
      method: req.method
    }
  });
})

router.get("/:id",(req,res,next)=>{
  res.status(200).json({
    message: "Success user get by id",
    metadata:{
      id: req.params.id,
      hostname: req.hostname,
      method: req.method
    }
  })
})

router.post('/', (req,res,next)=>{
  const body = req.body;

  res.status(200).json({
    message: "Success user post",
    metadata: {
      body: body,
      hostname: req.hostname,
      method: req.method
    }
  });
})


router.put('/:id', (req,res,next)=>{
  res.status(200).json({
    message: "Success user put",
    metadata: {
      id: req.params.id,
      hostname: req.hostname,
      method: req.method
    }
  });
})


router.delete('/:id', (req,res,next)=>{
  res.status(200).json({
    message: "Success user delete",
    metadata: {
      id: req.params.id,
      hostname: req.hostname,
      method: req.method
    }
  });
})

module.exports = router;

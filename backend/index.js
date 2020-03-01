const express = require('express')
const mongoose = require('mongoose')
const bodyParser = require('body-parser')
const cors = require('cors')

const app = express()

const Wish = require('./schema');


//middleware
app.use(cors())
app.use(bodyParser.json({limit: '50mb'}));
app.use(bodyParser.urlencoded({ extended: true}));

mongoose.connect('mongodb+srv://sayedabdul:sayed9124@todo-wkuw1.mongodb.net/test?retryWrites=true&w=majority', { useNewUrlParser: true, useUnifiedTopology: true, useFindAndModify: false } )
// DeprecationWarning: Mongoose: `findOneAndUpdate()` and `findOneAndDelete()` without the `useFindAndModify` option set to false are deprecated.(while deleting showing error thats why we have to write { useFindAndModify: false } )
.then(res => console.log('connected'))
.catch(err => console.log(err))

// const data = [
//   { name: 'Ram', age: 21 },
//   { name: 'Shyam', age: 31 },
//   { name: 'Karan', age: 41 },
//   { name: 'Arjun', age: 51 }
// ]

// app.get('/data', (req, res) => {
//   res.json(data)
// })

//
app.get('/data',(req,res)=>{
  Wish.find({}).then(data=>{
      console.log(data)
      res.json(data)
      // res.render('home',{wish:data})
  })
})
   
//post routes
app.post('/sent',(req,res)=>{
  const Item = new Wish({
      wish: req.body.item
  });
  Item.save().then(data=>{
      console.log("saved")
      res.send(data)
  }).catch(err=>{
      throw err;
  })

})

//delete routes

app.delete('/remove/:id',(req,res)=>{

  Wish.findOneAndRemove({_id:req.params.id}).then(data=>{
      console.log("deleted")
      res.send(data)
  })
 
})

//



const PORT = process.env.port || 5000

app.listen(PORT)
var url = 'mongodb://localhost:27017/learnyoumongo'
var age = parseInt(process.argv[2])
var mongo = require('mongodb').MongoClient
mongo.connect(url, function(err, db) {
  if (err) throw err
    // db connections
    var parrots = db.collection('parrots')
  parrots.find({
    age: {
      
      $gt: +age
    }
  }).toArray(function(err, docs) {
   
    if (err) throw err
    console.log(docs)
    
    db.close()
  })
})
use('Database');

// db.contacts.find()
// db.contacts.find({phone :"9123456789"})
// db.contacts.find({price :{$gte: 1000, $lte:500}})
// in mongodb AND is by default is assigned as (,)(comma)
// db.products.find({ $or: [{ category: "Electronics" }, { stock: { $lt: 50 } }] })

// db.products.find({}, { name: 1, price: 1, _id: 0 })    //Hide the information like ID of mongodb in the document and make information precise  

// db.products.find().sort({ price:-1 }).limit(2)

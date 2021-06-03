#Save is deprecated

db.studentDB.save({name: 'Tom', age: 28});

#insertOne()

use productDB

# Insert a Document without Specifying an _id Field
db.products.insertOne({item:"card", qty:15 });

# Insert a Document Specifying an _id Field
db.products.insertOne({ _id: 10, item:"box", qty: 20 });

# Inserting an duplicate value for any key that is part of a unique index, such as _id, throws an exception. 

db.products.insertOne({ _id: 10, item:"box", qty: 20 });

# To get detailed error information

try {
   db.products.insertOne( { _id: 10, "item" : "packing peanuts", "qty" : 200 } );
} catch (e) {
   print (e);
}

#Increase Write Concern
Given a three member replica set, the following operation specifies a w of majority, wtimeout of 100:

db.products.insertOne(
       { "item": "envelopes", "qty": 100, type: "Self-Sealing" },
       { writeConcern: { w : "majority", wtimeout : 100 } }
   );


#Insert Several Document without Specifying an _id Field

db.products.insertMany( [
      { item: "card", qty: 15 },
      { item: "envelope", qty: 20 },
      { item: "stamps" , qty: 30 }
   ] );

#Insert Several Document Specifying an _id Field
 db.products.insertMany( [
      { _id: 10, item: "large box", qty: 20 },
      { _id: 11, item: "small box", qty: 55 },
      { _id: 12, item: "medium box", qty: 30 }
   ] );
   
# Inserting a duplicate value for any key that is part of a unique index, such as _id, throws an exception

try {
   db.products.insertMany( [
      { _id: 13, item: "envelopes", qty: 60 },
      { _id: 13, item: "stamps", qty: 110 },
      { _id: 14, item: "packing tape", qty: 38 }
   ] );
} catch (e) {
   print (e);
}   

db.dropDatabase()


#Unordered Inserts
The following attempts to insert multiple documents with _id field and ordered: false.

With ordered to false, the insert operation would continue with any remaining documents.

try {
   db.products.insertMany( [
      { _id: 10, item: "large box", qty: 20 },
      { _id: 11, item: "small box", qty: 55 },
      { _id: 11, item: "medium box", qty: 30 },
      { _id: 12, item: "envelope", qty: 100},
      { _id: 13, item: "stamps", qty: 125 },
      { _id: 13, item: "tape", qty: 20},
      { _id: 14, item: "bubble wrap", qty: 30}
   ], { ordered: false } );
} catch (e) {
   print (e);
}


#db.collection.insert()
Collection.insert() is deprecated.

#Insert a Document without Specifying an _id Field
db.products.insert( { item: "card", qty: 15 } )

#Insert a Document Specifying an _id Field
db.products.insert( { _id: 10, item: "box", qty: 20 } )

#Insert Multiple Documents
db.products.insert(
   [
     { _id: 11, item: "pencil", qty: 50, type: "no.2" },
     { item: "pen", qty: 20 },
     { item: "eraser", qty: 25 }
   ]
)

# Drop collection
db.students.drop()

#using Drop Command
db.runCommand( { drop: "products" } )

#dROP DATABASE
use temp
db.runCommand( { dropDatabase: 1 } )
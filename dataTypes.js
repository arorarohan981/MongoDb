use studentdb

#String

# Deprecated
db.studentdb.insert({"name": "Sakshi")

# delete the document
db.studentdb.deleteMany({})

# Insert another document
db.studentdb.insertOne({"name": "Aman")

#NULL
db.studentdb.insertOne({"emailID ": null})

# Boolean
db.studentdb.insertOne({"name":"Rohan","IndianNational": true})

#Number
db.studentdb.insertOne({"name":"Pradnya","percentage": 76.56})

db.studentdb.insertOne({"name":"Mayur","rollno": 6})

db.studentdb.insertOne({"name":"Jay","landLineNo": NumberInt("02027640406")})
db.studentdb.insinsertOneert({"name":"Yash","mobileNo": NumberInt("9123456789")})

db.studentdb.insertOne({"name":"Yash","mobileNo": NumberLong("9123456789")})
db.studentdb.insertOne({"name":"Yash","credit_card_no": NumberLong("1234567812345678")})

#date
db.studentdb.insertOne({"name":"Nikhil","doj": new Date() })
db.studentdb.insertOne({"name":"Nikhil","doj": new ISODate() })
db.studentdb.insertOne({"name":"Nikhil","doj":  Date() })
db.studentdb.insertOne({"name":"Nikhil","dob":  Date("2001,2,12") })

db.studentdb.insertOne({"name":"Nikhil","dob":  ISODate("2001-01-01T08:15:39.736Z") })


# Insert many document using Array

db.studentdb.insertOne({"name":"Rameshwari","course_enrolled": ["C","Cpp","DSA"] })

var courses = ["Java","C","Cpp","SQL","DSA","Python","Mongo"]
db.studentdb.insertOne({"name":"Rohan","course_enrolled": courses })

db.studentdb.insertMany([{"emailID ": "asif@impetus.com"},{"emailID ": "aman@impetus.com"}])

#embeded document
db.studentdb.insertOne({"name" : "Nikhil","marks" : {"Phy" : 94, "Chem" : 96, "Math" : 80}})
var score={"Phy" : 94, "Chem" : 96, "Math" : 80}
db.studentdb.insertOne({"name" : "Aman","marks" : score})


#find
db.users.find( {"name" : {"$regex" : /nikhil/i } })

# Object

var listing = {
	"listing_url": "https://www.airbnb.com/rooms/1001265",
	"name": "Ocean View Waikiki Marina w/prkg",
	"summary": "A great location that work perfectly for business, education, or simple visit.",
	"host": {
		"host_id": "5448114",
		"host_name": "David",
		"host_location": "Honolulu, Hawaii, United States"
	}
}

db.studentDB.insertOne({"hotel":listing})
db.studentDB.find()
listing.host
listing.host.host_name


# revisit Array
var doc = {
  first_array: [4,3,2,1]
}

Each element in an array can be accessed using its index position. While accessing an element on a specific index position, the index number is enclosed in square brackets. 
> doc.first_array[3]

Using the index position, you can also add new elements to an existing array, as in the following example:
> doc.first_array[4] = 99

Upon printing the array, you will see that the fifth element has been added correctly, which contains the index position, 4:
> doc.first_array
[ 4, 3, 2, 1, 99 ]

Just like objects having embedded objects, arrays can also have embedded arrays. The following syntax adds an embedded array into the sixth element:
> doc.first_array[5] = [11, 12]
[ 11, 12 ]

If you print the array, you will see the embedded array as follows:
> doc.first_array

Now, you can use the square notation, [], to access the elements of a specific index in the embedded array, as follows:
> doc.first_array[5][1]

The array can contain any MongoDB valid data type fields. This can be seen in the following snippet:

// array of strings
[ "this", "is", "a", "text" ] 

// array of doubles
[ 1.1, 3.2, 553.54 ]

// array of Json objects
[ { "a" : 1 }, { "a" : 2, "b" : 3 }, { "c" : 1 } ] 

// array of mixed elements
[ 12, "text", 4.35, [ 3, 2 ], { "type" : "object" } ]

#ObjectId

Every document in a collection must have an _id that contains a unique value. This field acts as a primary key to these documents. The primary keys are used to uniquely identify the documents, and they are always indexed. The value of the _id field must be unique in a collection. When you work with any dataset, each dataset represents a different context, and based on the context, you can identify whether your data has a primary key. For example, if you are dealing with the users' data, the users' email addresses will always be unique and can be considered the most appropriate _id field. However, for some datasets that do not have a unique key, you can simply omit the _id field.
If you insert a document without an _id field, the MongoDB driver will autogenerate a unique ID and add it to the document. So, when you retrieve the inserted document, you will find _id is generated with a unique value of random text. When the _id field is automatically added by the driver, the value is generated using ObjectId. 

var uniqueID = new ObjectId()
uniqueID.getTimestamp() 
uniqueID.toString()
uniqueID.valueOf()  


#Binary Data

Binary data, also called BinData, is a BSON data type for storing data that exists in a binary format. This data type gives you the ability to store almost anything in the database, including files such as text, videos, music, and more.

var myImage = BinData(0,'R0lGODlhEAAQAPcAADg8qgB5AAB9AEQ8qgCBADxErgCFAEhArgCJABCBEACNABCJEHGVmXWZmf99\nAP+BAP+FAP+FEP+JAK6Vof+JEP+NALKZoaqy4ra+6sK66sa+6rLStrLWtr7evsLiwu7Wwv/myv/m\nzv///wAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA\nAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA\nAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA\nAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA\nAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA\nAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA\nAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA\nAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA\nAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA\nAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA\nAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA\nAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAACwAAAAAEAAQAAAIdwBFCBxI\nsKDBgwgTDnxQQYLDhxAdVnhA4YGDixgzXqQYwSLGBxAgeNwYIQSIkyc/WJjwAeXJEAYvFACAQaHA\nDAcGaDDooYNPnxsYNODw06eHBAICKA0gwICBpEsFJFhAQIDVq1itEqCqAIHXr2C9KiBgs6zZsgEB\nADs=\n')


{
"india":myImage
}




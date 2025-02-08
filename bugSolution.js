```javascript
// Solution: Create an index on the field used in the $group stage before running the aggregation
db.collection.createIndex( { fieldName: 1 } );
db.collection.aggregate([
  {$match: { /* some filter */ } },
  {$group: {_id: '$fieldName', count: {$sum: 1}}}, 
  {$sort: {count: -1}},
  {$limit: 10}
])
```
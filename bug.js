```javascript
// Incorrect aggregation pipeline causing unexpected results
db.collection.aggregate([
  {$match: { /* some filter */ } },
  {$group: {_id: '$fieldName', count: {$sum: 1}}}, //This might cause issues if fieldName is not indexed and has many values.
  {$sort: {count: -1}},
  {$limit: 10}
])
```
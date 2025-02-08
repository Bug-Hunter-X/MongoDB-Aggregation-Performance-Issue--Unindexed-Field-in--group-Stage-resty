# MongoDB Aggregation Performance Issue: Unindexed Field in $group Stage

This repository demonstrates a common performance issue in MongoDB aggregations.  The problem arises when using the `$group` stage with a field that lacks an index. This can lead to significant performance degradation, especially for large collections.

## The Problem
The provided `bug.js` file contains an aggregation pipeline that groups documents by a field (`fieldName`) without an index.  This causes MongoDB to perform a collection scan, which is computationally expensive for large datasets, leading to slow query execution and potentially incorrect results.

## The Solution
The `bugSolution.js` file presents the corrected aggregation pipeline. By adding an index to the `fieldName` before running the aggregation, MongoDB can efficiently perform the grouping operation, significantly improving performance.

## How to Reproduce
1.  Clone this repository.
2.  Create a MongoDB collection and populate it with a large number of documents.
3.  Run `bug.js` to see the performance issue.
4.  Run `bugSolution.js` to observe the performance improvement after creating the index.

## Lessons Learned
- Always index fields used in the `$group` stage of MongoDB aggregations to ensure optimal performance.
- Proper indexing is crucial for efficient query operations in MongoDB.
- Regularly review your query plans to identify potential performance bottlenecks.
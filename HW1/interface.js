/*
 *  Inserts "doc" into the collection "movies".
 */
exports.insert = function(db, doc, callback) {
    db.collection('movies').insert(doc, function(error, docs) {
        if (error) {
            console.log(error);
            process.exit(1);
        }
    });
    callback(null);
};

/*
 *  Finds all documents in the "movies" collection
 *  whose "director" field equals the given director,
 *  ordered by the movie's "title" field. See
 *  http://mongodb.github.io/node-mongodb-native/2.0/api/Cursor.html#sort
 */
exports.byDirector = function(db, director, callback) {
    var query = {director: director};
    var title = {'title': 1};
    db.collection('movies').find(query).sort(title).toArray(function(error,docs) {
    	if(error) {
    		console.log(error);
    		process.exit(1);
    	}
    	docs.forEach(function(doc) {
    		console.log(JSON.stringify(doc));
    });
    	    callback(null, docs);
    });
};
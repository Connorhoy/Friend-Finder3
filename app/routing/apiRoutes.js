// preload friends
var friends = require('../data/friends');

// routing
module.exports = function(app) {
    // get all friends in list
    app.get('/api/friends', function(req, res) {
        res.json(friends);
    });

    // determine the best friend based on req.body
    app.post('/api/friends', function(req, res) {
        console.log('in api post');
        console.log(req.body);

        var newFriend = req.body;
        var friendScore;
        var topFriendScore = 100; // default top score
        var topFriend;
        
        for (var i in friends) {
            // reset friend score
            friendScore = 0;

            // get friend score for this friend
            for (var j in friends[i].scores) {
                friendScore += Math.abs(parseInt(newFriend.scores[j]) - parseInt(friends[i].scores[j]));
            }

            // check for new topFriend
            if (friendScore < topFriendScore) {
                topFriendScore = friendScore;
                topFriend = friends[i];
            }
        }

        // add this person to friends
        friends.push(newFriend);

        // return top friend as json object
        res.json(topFriend);
    });
}
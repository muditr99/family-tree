const User = require('../models/user');
// const Node = require('../assets/js/class');
// const BST = require('../assets/js/class');

module.exports.home = function(req, res){
    User.find({}).sort({age: -1}).exec(function(err, users){
        if(err){
            console.log('error in finding users', err);
            return;
        }
        return res.render('home', {
            title: 'home',
            users: users
        })
    })
}

module.exports.create = function(req, res){
    User.create(req.body, function(err, newUser){
        if(err){
            console.log('error in creating user', err);
            return;
        }
        return res.redirect('/');
    })
}

module.exports.remove = function(req, res){
    let id = req.query.id;
    User.findByIdAndDelete(id, function(err){
        if(err){
            console.log('error in removing user', err);
            return;
        }
        return res.redirect('/');
    })
}

module.exports.update = function(req, res){
    let id = req.query.id;
    User.findById(id, function(err, user){
        if(err){
            console.log('error in displaying the update page', err);
            return;
        }
        return res.render('update', {
            title: 'update user',
            user: user
        })
    })
}

module.exports.edit = function(req, res){
    let id = req.body._id;
    User.findByIdAndUpdate(id, req.body, { new: true }, function(err, user){
        if(err){
            console.log('error in updating the user', err);
            return;
        }
        return res.redirect('/');
    })
}
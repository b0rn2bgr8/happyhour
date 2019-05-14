var User = require('../models/user');

module.exports = app => {
    app.get('/', (req, res) => {
        res.json({
            message: "Welcome To My World"
        })
    })
    app.get('/getAllUsers', (req, res) => {
        User
            .find({})
            .exec((err, users) => {
                if (err) { console.log(err); }
                res.json(users);
            });
    });

    app.post('/newUser', (req, res) => {
        let obj = req.body;
        let user = new User(obj).save(err => {
            if (err) { console.log(err); }
            res.json(user);
        });
    });

    app.put('/user/:id', (req, res) => {
        User
            .findById(req.params.id)
            .exec((err, user) => {
                if (err) { console.log(err); }
                res.json(user);
            });
    });

    app.delete('/user/:id', (req, res) => {
        User
            .findByIdAndDelete(req.params.id, (err) => {
                if (err) { console.log(err); }
                res.json({ message: "user removed" });
            })
    })
}
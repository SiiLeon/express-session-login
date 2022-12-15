let express = require('express')
let router = express.Router();

router.get('/protected',(req,res) => {

    if(req.session.userid){
        res.send("Welcome User <a href=\'/logout'>click to logout</a>");
    }else
        res.redirect('form.html')
});

router.get('/logout',(req,res) => {
    req.session.destroy();
    res.redirect('/');
});
router.post('/user',(req,res) => {
    if(req.body.username == myusername && req.body.password == mypassword){

        req.session.userid=req.body.username;
        console.log(req.session)
        res.redirect('/protected');
    }
    else{
        res.send('Invalid username or password');
    }
})

router.get("/", (req, res) => {
    res.send("Hello World");
})
module.exports = router;
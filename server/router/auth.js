const jwt = require("jsonwebtoken");
const express = require("express");
const router = express.Router();
require("../db/connection");
const User = require("../model/userSchema");
const bcrypt = require("bcryptjs");
// const authenticate = require("../middleware/authenticate");

router.get("/", (req, res) => {
    res.send("Hello World from Server router.js")
});


//register user with async-await
router.post("/signup", async (req, res) => {

    const { fullName, email, phone, password, confirmPassword } = req.body

    if (!fullName || !email || !phone || !password || !confirmPassword) {
        return res.status(422).json({ error: "please filled the field correctly" })
    }

    try {
        const userExist = await User.findOne({ email: email });

        if (userExist) {
            return res.status(422).json({ error: "Email already Exist" })
        } else if (password != confirmPassword) {
            return res.status(422).json({ error: "Password are not matching" })
        } else {
            const user = new User({ fullName, email, phone, password, confirmPassword });
            await user.save();
            res.status(201).json({ message: "user registerd successfully" })
        }

    } catch (err) {
        console.log(err)
    }
})

// Sign In user
router.post("/signin", async (req, res) => {

    try {
        // let token;
        const { email, password } = req.body;

        if (!email || !password) {
            return res.status(400).json({ error: "invalid details" })
        }

        const userLogin = await User.findOne({ email: email });
        if (userLogin) {
            const isMatch = await bcrypt.compare(password, userLogin.password);

            // // genrate a token
            // token = jwt.sign({ userId: userLogin._id }, secretkey)
            // res.status(200).json(token)


            if (!isMatch) {
                res.status(400).json({ error: "invalid crediential" })
            } else {
                res.json({ message: "user signin successfully" })
            }

        } else {
            res.json({ error: "invalid crediential " })
        }

    } catch (err) {
        console.log(err)
    }
})

//  About page
// router.get("/about", authenticate, (req, res) => {
//     res.send(req.rootUser)
// });


// get user data for contact and home page
// router.get("/getdata", authenticate, (req, res) => {
//     res.send(req.rootUser)
// });

// contact us page
// router.post("/contact", authenticate, async (req, res) => {

//     try {
//         const { fullName, email, phone, message } = req.body;

//         if (!fullName || !email || !phone || !message) {
//             console.log("error in contact form")
//             return res.json({ error: "plz filled the contact form" })
//         }

//         const userContact = await User.findOne({ _id: req.userID });

//         if (userContact) {
//             const userMessage = await userContact.addMessage(fullName, email, phone, message)
//             await userContact.save();

//             res.status(201).json({ message: "user contact successfully " })
//         }

//     } catch (error) {
//         console.log(error)
//     }

// });

// logout page
// router.get("/logout", (req, res) => {
//     res.clearCookie("jwtoken", { path: "/" })
//     res.status(200).send("user Logout")
// });

// router.get("/checkAuth", authenticate, (req, res) => {
//     res.status(200).json({ message: "User is authenticated" });
// });

module.exports = router;









// ------------------------------------------------------------------------//
//registerd user with promises
// router.post("/register", (req, res) => {
//     const { name, email, phone, work, password, confirmpassword } = req.body

//     if (!name || !email || !phone || !work || !password || !confirmpassword) {
//         return res.status(422).json({ error: "please filled the field correctly" })
//     }

//     User.findOne({ email: email })
//         .then((userExist) => {
//             if (userExist) {
//                 return res.status(422).json({ error: "Email already Exist" })
//             }

//             const user = new User({ name, email, phone, work, password, confirmpassword });

//             user.save().then(() => {
//                 res.status(201).json({ message: "user registerd successfully" })
//             }).catch((err) => res.status(500).json({ error: "failed to registerd" }))

//         }).catch((err) => { console.log(err) })

// })
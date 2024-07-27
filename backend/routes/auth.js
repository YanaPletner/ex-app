import { Router } from 'express'
const router = Router()

import { users } from "../db.js"

import { check, validationResult } from 'express-validator'

import bcrypt from "bcrypt"

import JWT from "jsonwebtoken"

router.post('/signup', [
    check("email", "Please provide a valid email").isEmail(),
    check("password", "Please provide a password with at least 6 characters").isLength({
        min: 6
    })
], async (req, res) => {
    const { email, password } = req.body

    //VALIDATE THE USER
    const errors = validationResult(req)
    // console.log(email + '\n' + password)
    if (!errors.isEmpty()) return res.status(400).json({
        errors: errors.array()
    })

    //VALIDATE IF USER EXIST OR NOT
    let user = users.find(user => {
        return user.email === email
    })

    if (user) {
        return res.status(400).json({
            "errors": [
                {
                    "msg": "This user already exist"
                }
            ]
        })
    }

    const hashedPassword = await bcrypt.hash(password, 10)

    users.push({
        email,
        password: hashedPassword
    })

    console.log(users)

    const token = await JWT.sign({
        email
    }, "ljrhfo93i4weflkhqlwo4iru8129lkdho4i5t34rj", {
        expiresIn: 360000
    })

    res.json({
        token
    })

})

router.post("/login", async (req, res) => {
    const { email, password } = req.body

    let user = users.find(user => {
        return user.email === email
    })

    if (!user) {
        return res.status(400).json({
            "errors": [
                {
                    "msg": "Invalid Credentails"
                }
            ]
        })
    }

    let isMatch = await bcrypt.compare(password, user.password)

    if (!isMatch) {
        return res.status(400).json({
            "errors": [
                {
                    "msg": "Invalid Credentails"
                }
            ]
        })
    }

    const token = await JWT.sign({
        email
    }, "ljrhfo93i4weflkhqlwo4iru8129lkdho4i5t34rj", {
        expiresIn: 360000
    })

    res.json({
        token
    })

})

router.get("/all", (req, res) => {
    res.json(users)
})

export default router
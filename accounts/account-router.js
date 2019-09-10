const router = require('express').Router()

const db = require('../data/dbConfig')

router.get('/', (req, res) => {
    db('accounts').then(acc => {
        res.status(201).json({ accounts })
    })
        .catch((err) => {
            res.status(500).json({ err })
        })
})
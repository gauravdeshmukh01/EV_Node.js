const express = require('express')
const app = express()
const fs = require('fs')

let usrs = fs.readFileSync("MOCK_DATA.json")
var users = JSON.parse(usrs)

export const getUser = (req, res) => {
    res.send(users)
}

export const getUserBrow = (req, res) => {
    const html = `<ul>${users.map((users) =>
        <li>${users.id} ${users.first_name} ${users.email}</li>).join("")}</ul>`
    res.send(html)
}

export const getUserByID = (req, res) => {
    const id = req.params.id
    const usr = users.find((u) => u.id == id)
    res.send(usr)
}
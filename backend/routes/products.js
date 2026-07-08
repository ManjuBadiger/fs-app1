const express = require("express");
const authMiddleware = require("../auth");
const router = express.Router();

router.get("/list", authMiddleware, (req, res) => {
    const data = [{
        "title": "product1",
        "description": "this is product one"
    },
{
        "title": "product1",
        "description": "this is product one"
    },
{
        "title": "product1",
        "description": "this is product one"
    },
{
        "title": "product1",
        "description": "this is product one"
    },
{
        "title": "product1",
        "description": "this is product one"
    }]

    res.status(200).json(data);
})

module.exports = router;
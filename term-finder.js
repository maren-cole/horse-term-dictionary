const express = require('express');
const cors = require('cors');

const corsOptions = {
    origin: 'http://localhost:9000',
    optionsSuccessStatus: 200,
};

const app = express(cors(corsOptions));

const terms = [
    {
        term: "Palomino",
        definition: "A horse color that is golden with a flaxen mane and tail."
    },
    {
        term: "Chestnut",
        definition: "A horse color that is a light reddish brown."
    },
    {
        term: "Bay",
        definition: "A horse color that is brown with a black mane, tail and points."
    },
    {
        term: "Mare",
        definition: "A female horse."
    },
    {
        term: "Gelding",
        definition: "A male horse that cannot reproduce."
    },
    {
        term: "Stallion",
        definition: "A male horse that is intact."
    },
    {
        term: "Dressage",
        definition: "A discipline of riding and training a horse in a manner that develops obedience, flexibility, and balance."
    },
    {
        term: "Eventing",
        definition: "an equestrian sport in which competitors must take part in each of several contests, usually cross-country, dressage, and show jumping."
    },
    {
        term: "Hand",
        definition: "A unit for measuring horse height. 1 hand is equal to 4 inches."
    },
    {
        term: "Endurance",
        definition: "An equestrian sport based on controlled long-distance races."
    }
];

app.get('/terms', cors(corsOptions), (req, res) => {
    res.json(terms);
});

app.get('/term-definition/:term', cors(corsOptions), (req, res) => {
    const term = req.params.term.charAt(0).toUpperCase() + req.params.term.slice(1); // Capitalize term
    const foundTerm = terms.find(item => item.term === term);

    if (foundTerm) {
        res.json(foundTerm);
    } else {
        res.status(404).json({ error: "Term not found" });
    }
});

const PORT = process.env.PORT || 8080;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});

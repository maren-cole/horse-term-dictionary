from flask import Flask, jsonify


app = Flask(__name__)

terms = [
        {
            "term": "Palomino",
            "definition": "A horse color that is golden with a flaxen mane \
            and tail."
        },
        {
            "term": "Chestnut",
            "definition": "A horse color that is a light reddish brown."
        },
        {
            "term": "Bay",
            "definition": "A horse color that is brown with a black mane, \
            tail and points."
        },
        {
            "term": "Mare",
            "definition": "A female horse."
        },
        {
            "term": "Gelding",
            "definition": "A male horse that cannot reproduce."
        },
        {
            "term": "Stallion",
            "definition": "A male horse that is intact."
        },
        {
            "term": "Dressage",
            "definition": "A discipline of riding and training a horse in \
            a manner that develops obedience, flexibility, and balance."
        },
        {
            "term": "Eventing",
            "definition": "an equestrian sport in which competitors must \
            take part in each of several contests, usually cross-country,\
             dressage, and show jumping."
        },
        {
            "term": "Hand",
            "definition": "A unit for measuring horse height. 1 hand is equal \
            to 4 inches."
        },
        {
            "term": "Endurance",
            "definition": "An equestrian sport based on controlled \
            long-distance races."
        }
    ]


@app.route('/term-definition/<term>', methods=['GET'])
def get_term_definition(term):
    term = term.capitalize()  # Capitalize to match terms list
    for item in terms:
        if item["term"] == term:
            return jsonify(item)
    return jsonify({"error": "Term not found"}), 404


if __name__ == '__main__':
    app.run()

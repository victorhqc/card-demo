export class CardsController {
    constructor(app) {
        var baseRoute = '/v1/cards/';

        app.get(baseRoute, this.index.bind(this));
    }

    index(req, res) {
        res.json({
            cards: [
                {
                    id: 1,
                    text: 'Simple example'
                },
                {
                    id: 2,
                    text: 'Another example'
                },
                {
                    id: 3,
                    text: 'Foo Bar card'
                }
            ]
        });
    }
}

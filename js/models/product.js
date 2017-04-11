var app = app || {};

app.Product = Backbone.Model.extend({
    defaults: {
    	id: 1,
        name: 'Churrito',
        price: 0.0,
        stock: 0,
        created_at: "2017-04-10T02:43:05.146Z",
    	updated_at: "2017-04-10T02:43:05.146Z"
    }
});
var app = app || {};

app.Snacks = Backbone.Collection.extend({
    model: app.Product,
    url: 'http://localhost:3000/products'
});
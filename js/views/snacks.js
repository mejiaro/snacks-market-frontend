var app = app || {};

app.SnacksView = Backbone.View.extend({
    el: '#products',

    initialize: function() {
        this.collection = new app.Snacks();
        this.collection.fetch({reset: true })
        this.render();

        this.listenTo( this.collection, 'add', this.renderProduct );
        this.listenTo( this.collection, 'reset', this.render)
    },

    // render library by rendering each product in its collection
    render: function() {
        this.collection.each(function( item ) {
            this.renderProduct( item );
        }, this );
    },

    // render a product by creating a ProductView and appending the
    // element it renders to the library's element
    renderProduct: function( item ) {
        var productView = new app.ProductView({
            model: item
        });
        this.$el.append( productView.render().el );
    }
});

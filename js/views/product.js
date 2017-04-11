var app = app || {};

app.ProductView = Backbone.View.extend({
    tagName: 'div',
    className: 'productContainer',
    template: _.template( $( '#productTemplate' ).html() ),

    render: function() {
        //this.el is what we defined in tagName. use $el to get access to jQuery html() function
        this.$el.html( this.template( this.model.attributes ) );

        return this;
    }
});
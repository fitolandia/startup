var React = require('react');
var _ = require('lodash');

var Button = React.createClass({

    propTypes: {
        onClick: React.PropTypes.func.isRequired
    },

    render: function() {
        return(
            <div>
                <button {...this.getProps()}>{this.props.children}</button>
            </div>
        );
    },

    getProps: function () {
        return {
            onClick: this.handleClick
        }
    },

    handleClick: function (event) {
        this.props.onClick();
    }
});

module.exports = Button;


var React = require('react');
var _ = require('lodash');

var Input = React.createClass({

    propTypes: {
        defaultValue: React.PropTypes.string,
        label: React.PropTypes.string.isRequired,
        onChange: React.PropTypes.func,
        value: React.PropTypes.string
    },

    getInitialState: function () {
        return {
           value: this.props.defaultValue
        }
    },

    render: function () {
        return (
            <div>
                <span>{this.props.label}</span>
                <input {...this.getProps()}/>
            </div>
        );
    },

    getProps: function () {
        return {
         placeholder: this.props.label,
         value: this.getValue(),
         onChange: this.handleChange
        };
    },

    getValue: function () {
        return (_.isUndefined(this.props.value)) ? this.state.value : this.props.value;
    },

    handleChange: function (event) {
        this.setState({value: event.target.value});

        if (this.props.onChange) {
            this.props.onChange(event);
        }
    }
});

module.exports = Input;

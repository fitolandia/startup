var react = require ('react');

var FormGroup = react.createClass ({
   render: function () {
       return (
           <div>
               {this.props.children}
           </div>
       )
   }
});

module.exports = FormGroup;
var React = require('react');
var ReactDOM = require('react-dom');
var WebIconList = require('./web-icon-list');


 var liste = ["https://webpack.github.io", "https://www.npmjs.com", "http://bower.io", "https://angularjs.org", "https://facebook.github.io/react"]

ReactDOM.render(
    <WebIconList websites={liste} />,
    document.getElementById('content')
);
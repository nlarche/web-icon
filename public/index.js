var React = require('react');
var ReactDOM = require('react-dom');
var WebIconList = require('../src').WebIconList;


 var liste = ["https://webpack.github.io/assets/favicon.png", "https://www.npmjs.com", "http://bower.io", "https://angularjs.org", "https://facebook.github.io/react"]

ReactDOM.render(
    <WebIconList websites={liste} />,
    document.getElementById('content')
);  
# web-icon
fetch and display favicon from website url

[![version](https://img.shields.io/npm/v/web-icon.svg)](https://www.npmjs.com/package/web-icon)
[![travis build](https://img.shields.io/travis/nlarche/web-icon.svg)](https://travis-ci.org/nlarche/web-icon)
[![semantic-release](https://img.shields.io/badge/%20%20%F0%9F%93%A6%F0%9F%9A%80-semantic--release-e10079.svg)](https://github.com/semantic-release/semantic-release)

[Demo](http://nlarche.github.io/web-icon/)


```js
var icons = ["https://webpack.github.io/assets/favicon.png", "https://www.npmjs.com", "http://bower.io", "https://angularjs.org", "https://facebook.github.io/react"]

/*
* websites : Array of url (an image or a websites)
* noLink : Disable link on web-icon default false
* grayscale : Display a grayscale image default false
*/
ReactDOM.render(
    <WebIconList websites={icons} noLink={false} grayscale={false} />,
    document.getElementById('list')
); 

/*
* url : url of an image or a websites
* noLink : Disable link on web-icon default false
* grayscale : Display a grayscale image default false
*/
ReactDOM.render(
    <WebIcon ulr={icons[0]} noLink={false} grayscale={false} />,
    document.getElementById('simple')
);

```




---
### Todos

- Add zoom on mouseover on a floating div
- Add exemple to readme and gh-pages


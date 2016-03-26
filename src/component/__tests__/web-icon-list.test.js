jest.unmock('../web-icon-list');

import React from 'react';
import ReactDOM from 'react-dom';
import TestUtils from 'react-addons-test-utils';
import WebIconList from '../web-icon-list';

describe('Webicon', () => {
    
  beforeEach(function () {
      
      this.liste = [
          "https://webpack.github.io/assets/favicon.png", 
          "https://www.npmjs.com", 
          "http://bower.io", 
          "https://angularjs.org", 
          "https://facebook.github.io/react"
          ];
    // Render a webiconList
    this.component = TestUtils.renderIntoDocument(<WebIconList websites={this.liste} />);
    this.renderedDOM = () => ReactDOM.findDOMNode(this.component); 
  });  
    
  it('Render the webiconList component', function () {
    // Verify that it's the node is not null
    expect(this.renderedDOM()).not.toEqual(null);   
  });
 
  
});


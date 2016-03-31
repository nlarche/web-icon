jest.unmock('../web-icon');

import React from 'react';
import ReactDOM from 'react-dom';
import TestUtils from 'react-addons-test-utils';
import WebIcon from '../web-icon';

describe('Webicon', () => {

    beforeEach(function() {
        // Render a webicon
        this.component = TestUtils.renderIntoDocument(<WebIcon url="http://www.google.com" />);
        this.renderedDOM = () => ReactDOM.findDOMNode(this.component);
    });

    it('Render the webicon component', function() {
        // Verify that it's the node is not null
        expect(this.renderedDOM()).not.toEqual(null);
    });

    it("Render an image", function() {
        let img = this.renderedDOM().querySelectorAll("img");

        expect(img.length).toEqual(1);
        expect(img[0].src).toEqual("http://www.google.com/favicon.ico");
        expect(img[0].alt).toEqual("www.google.com");
    });

    it("Render a href", function() {
        let a = this.renderedDOM().querySelectorAll("a");

        expect(a.length).toEqual(1);
        expect(a[0].href).toEqual("http://www.google.com/");
        expect(a[0].title).toEqual("www.google.com");
    });

    it("Should update url", function() {
        ReactDOM.render(<WebIcon url="https://github.com/" />, ReactDOM.findDOMNode(this.component).parentNode);
        let a = this.renderedDOM().querySelectorAll("a");

        expect(a.length).toEqual(1);
        expect(a[0].href).toEqual("https://github.com/");
        expect(a[0].title).toEqual("github.com");
    });

});

describe('Webicon url favicon', () => {

    beforeEach(function() {
        // Render a webicon
        this.component = TestUtils.renderIntoDocument(<WebIcon url="http://www.google.com/assets/favicon.ico" />);
        this.renderedDOM = () => ReactDOM.findDOMNode(this.component);
    });

    it('Render the webicon component', function() {
        // Verify that it's the node is not null
        expect(this.renderedDOM()).not.toEqual(null);
    });

    it("Render an image", function() {
        let img = this.renderedDOM().querySelectorAll("img");

        expect(img.length).toEqual(1);
        expect(img[0].src).toEqual("http://www.google.com/assets/favicon.ico");
        expect(img[0].alt).toEqual("www.google.com");
    });

    it("Render a href", function() {
        let a = this.renderedDOM().querySelectorAll("a");

        expect(a.length).toEqual(1);
        expect(a[0].href).toEqual("http://www.google.com/");
        expect(a[0].title).toEqual("www.google.com");
    });

});

describe('Webicon no Link favicon', () => {

    beforeEach(function() {
        // Render a webicon
        this.component = TestUtils.renderIntoDocument(<WebIcon url="http://www.google.com/assets/favicon.ico" noLink={true} />);
        this.renderedDOM = () => ReactDOM.findDOMNode(this.component);
    });

    it('Render the webicon component', function() {
        // Verify that it's the node is not null
        expect(this.renderedDOM()).not.toEqual(null);
    });

    it("Render an image", function() {
        let img = this.renderedDOM().querySelectorAll("img");

        expect(img.length).toEqual(1);
        expect(img[0].src).toEqual("http://www.google.com/assets/favicon.ico");
        expect(img[0].alt).toEqual("www.google.com");
    });

    it("Render no href", function() {
        let a = this.renderedDOM().querySelectorAll("a");

        expect(a.length).toEqual(0);

    });

});
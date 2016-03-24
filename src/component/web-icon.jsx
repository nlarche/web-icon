var React = require('react');
const Styles = {
    webIconList : {
       display: 'flex',
       flexDirection: 'row',    
       width : '30%'     
    },
    webIcon: {
        display: 'flex',
        alignItems: 'center',
        width: '100%',
        height: '33%',
    },
    image : {
        width: '32px'
    }
};

var WebIcon = React.createClass({
    render: function() {
        var parser = document.createElement('a');
        parser.href = this.props.url;

        var favicon = this.props.url + "/favicon.ico";
        var name = parser.hostname;

        return (
            <div style={Styles.webIcon} >
                <a href={this.props.url} title={name} target="_blank" >
                    <img src={favicon} alt={name} style={Styles.image}/>
                </a>
            </div>
        );
    }
});

module.exports = WebIcon;




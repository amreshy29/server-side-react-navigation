var React = require('react');

class DefaultLayout extends React.Component {
    render() {
        return (
            <html>
            <head>
                <title>{this.props.title}</title>
                <link href="style.css" rel="stylesheet" />
            </head>

            <body>
                <h1>Newtonflash</h1>
                {this.props.children}
            </body>
            </html>
        );
    }
}

module.exports = DefaultLayout;
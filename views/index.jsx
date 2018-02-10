var React = require('react');
var DefaultLayout = require('./layouts/default');
var NavBar = require('./components/navigation-bar');

class HelloMessage extends React.Component {
    render() {

        return (
            <DefaultLayout>
                <div id="root">

                </div>
            </DefaultLayout>
        );
    }
}

module.exports = HelloMessage;
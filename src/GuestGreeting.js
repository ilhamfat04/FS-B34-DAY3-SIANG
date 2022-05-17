import React, { Component } from 'react'

export default class GuestGreeting extends Component {

    componentDidMount() {
        console.log("Guest Greeting comp did mount");
    }
    //Create method WillUnmount inside it can print "GuestG reeting Component Will Unmount" here...
    componentWillUnmount() {
        console.log("Guest Greeting comp will unmount");
    }

    render() {
        return (
            <div className="text-center h1 bg-secondary text-light py-5">
                Please Login !
            </div>
        )
    }
}

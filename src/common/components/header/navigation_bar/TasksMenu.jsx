/**
 * Tasks menu of the header component
 * @author patrickkerrypei / https://github.com/patrickkerrypei
 */

import React, {Component} from 'react';

export default class TasksMenu extends Component {

    render() {
        return (
            <li className="dropdown tasks-menu">

                <a href="#" className="dropdown-toggle" data-toggle="dropdown">
                    <i className="fa fa-flag-o"/>
                    <span className="label label-danger">9</span>
                </a>

                <ul className="dropdown-menu">
                    <li className="header">You have 9 tasks</li>
                    <li>
                        <ul className="menu">
                            <li>
                                <a href="#">
                                    <h3>
                                        Design some buttons
                                        <small className="pull-right">20%</small>
                                    </h3>
                                    <div className="progress xs">
                                        <div className="progress-bar progress-bar-aqua" style={{width: '20%'}}
                                             role="progressbar" aria-valuenow="20" aria-valuemin="0"
                                             aria-valuemax="100">
                                            <span className="sr-only">20% Complete</span>
                                        </div>
                                    </div>
                                </a>
                            </li>
                        </ul>
                    </li>
                    <li className="footer">
                        <a href="#">View all tasks</a>
                    </li>
                </ul>

            </li>
        );
    }
}

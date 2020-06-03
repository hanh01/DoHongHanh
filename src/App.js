import React, {Component} from 'react';
import logo from './logo.svg';
import './App.css';
// import  ReactDOM from 'react-dom';
// import Demo from "./component/Demo";
// import Demo1 from "./component/Demo1";
// import Props from "./component/Props";
import TaskFrom from "./Project/TaskFrom";
import Control from "./Project/Control";
import TaskList from "./Project/TaskList";

class App extends Component{
    render(){
        return(
            <div className="container">
                <div className="text-center">
                    <h1>Quan li cong viec</h1>
                    <hr/>
                </div>
                <div className="row">
                    <div className="col-xs-4 col-sm-4 col-md-4 col-lg-4">
                       <TaskFrom/>
                    </div>
                    <div className="col-xs-8 col-sm-8 col-md-8 col-lg-8">
                        <button type="button" className="btn btn-primary">
                            <span className="fa fa-plus mr-5"></span>Them cong viec
                        </button>
                        <Control/>
                        <div className="row mt-15">
                            <div className="col-xs-12 col-sm-12 col-md-12 col-lg-12">
                                <TaskList/>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}
export default App;


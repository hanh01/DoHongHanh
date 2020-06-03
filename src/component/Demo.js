import React,{Component} from "react";

class Demo extends Component{
    render(){
        return(
            <nav className="navbar navbar-inverse">
                <div className="container">
                    <a className="navbar-brand" href="a">Title</a>
                    <ul className="nav navbar-nav">
                        <li className="active">
                            <a href="a">Home</a>
                        </li>
                        <li>
                            <a href="a">Link</a>
                        </li>
                    </ul>
                </div>
            </nav>
        );
    }
}
export default Demo;
import React,{Component} from 'react';
import './App.css';
import Search from "./Component/Search";
import Checkbox from "./Component/Checkbox";
import Table from "./Component/Table";
import AddUsers from "./Component/AddUsers";

class App extends Component{
    constructor(props) {
        super(props);
        this.state = {
            isDisplayForm : false
        }
    }

    onToggleForm = () => {
        this.setState({
            isDisplayForm : !this.state.isDisplayForm
        });
    }
    onExit = () => {
        this.setState({
            isDisplayForm : false
        });
    }

    render(){
        var{ isDisplayForm } = this.state;
        var elmAddUsers = isDisplayForm ? <AddUsers onExit={this.onExit}/> : '';
        return(
            <div className="container">
                <div className="text-center">
                    <h1>Quản lý người dùng</h1>
                    <hr/>
                </div>
                <div className="row">
                    <div className="col-xs-4 col-sm-4 col-md-4 col-lg-4">
                        <div className="panel panel-warning">
                            <div className="panel-heading">
                                <h3 className="panel-title">Tìm người dùng</h3>
                            </div>
                            <div className="panel-body mt-20">
                                <form>
                                   <Search/>
                                    <h5 className="mt-30">Trạng Thái hoạt động</h5>
                                   <Checkbox/>
                                </form>
                            </div>
                        </div>
                        { elmAddUsers }
                    </div>


                    <div className="col-xs-8 col-sm-8 col-md-8 col-lg-8">
                       <button type="button" className="btn btn-primary add" onClick={this.onToggleForm}>
                           <span className="fa fa-plus"/> Thêm Người Dùng
                       </button>
                        <h5 className="cl-blue">Danh Sách Người Dùng</h5>
                        <div className="row ">
                            <div className="col-xs-12 col-sm-12 col-md-12 col-lg-12 mt-30">
                                <Table/>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}
export default App;

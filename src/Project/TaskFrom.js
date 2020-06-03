import React,{Component} from "react";

class TaskFrom extends Component{
    render(){
        return(
            <div>
                <div className="panel panel-warning">
                    <div className="panel-heading">
                        <h3 className="panel-title">Them cong viec</h3>
                    </div>
                    <div className="panel-body">
                        <form>
                            <div className="form-group">
                                <label>Ten :</label>
                                <input type="text" className="form-control"/>
                            </div>
                            <label>Trang Thai :</label>
                            <select className="form-control" required="required">
                                <option value="1">Kich hoat</option>
                                <option value="0">An</option>
                            </select>
                            <br/>
                            <div className="text-center">
                                <button type="submit" className="btn btn-warning">Them</button>&nbsp;
                                <button type="submit" className="btn btn-danger">Huy Bo</button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        )
    }
}
export default TaskFrom;
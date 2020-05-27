import React,{Component} from "react";

class AddUsers extends Component{
    onExit = () => {
        this.props.onExit();
    }
    render(){
        return(
            <div className="panel panel-warning mt-20" >
                <div className="panel-heading">
                    <h3 className="panel-title">Thêm Người Dùng</h3>
                </div>
                <div className="panel-body">
                    <form>
                        <div className="form-group">
                            <label>Tên đăng nhập :</label>
                            <input type="text" className="form-control"/>
                        </div>
                        <div className="form-group">
                            <label>Email :</label>
                            <input type="text" className="form-control"/>
                        </div>
                        <div className="form-group">
                            <label>Ghi chú :</label>
                            <input type="text" className="form-control form-control-one"/>
                        </div>
                        <div className="Save-delete">
                            <button type="submit" className="btn btn-success"><b>+</b> Lưu Lại</button>&nbsp;
                            <button type="submit" className="btn btn-danger" onClick={this.onExit }><b>x</b> Hủy Bỏ</button>
                        </div>
                    </form>
                </div>
            </div>
        )
    }
}
export default AddUsers;
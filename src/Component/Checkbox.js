import React,{Component} from "react";

class Checkbox extends Component{
    render(){
        return(
            <div>
                <div className="checkbox">
                    <label><input type="radio" name="check"  value="v1"/> Tất cả</label>
                </div>
                <div className="checkbox">
                    <label><input type="radio" name="check" value="v2"/> Đang hoạt động</label>
                </div>
                <div className="checkbox">
                    <label ><input type="radio" name="check"  value="v3"/> Ngừng hoạt động</label>
                </div>

                <button name="btn-register" className="btn btn-primary btn-block mt-30">Hiển Thị Danh Sách Người Dùng</button>
            </div>
        )
    }
}
export default Checkbox;
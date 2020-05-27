import React,{Component} from "react";

class Table extends Component{
    render(){
        return(
            <table className="table table-bordered table-hover">
                <thead>
                <tr>
                    <th className="text-center">STT</th>
                    <th className="text-center">Tên Đăng Nhập</th>
                    <th className="text-center">Email</th>
                    <th className="text-center">Trạng hoạt động</th>
                    <th className="text-center">Thông tin người dùng</th>
                </tr>
                </thead>
                <tbody>
                <tr>
                    <td className="text-center">1</td>
                    <td>Nguyễn Văn A</td>
                    <td>vana11@gmail.com</td>
                    <td className="text-center">Đang hoạt động</td>
                    <td className="text-center">
                        <button type="button" className="btn btn-success">
                            <span className="fa fa-plus"></span> Xem thông tin
                        </button>
                    </td>
                </tr>
                <tr>
                    <td className="text-center">2</td>
                    <td>Nguyễn Văn B</td>
                    <td>vanb11@gmail.com</td>
                    <td className="text-center">Ngừng hoạt động</td>
                    <td className="text-center">
                        <button type="button" className="btn btn-success">
                            <span className="fa fa-plus"></span> Xem thông tin
                        </button>
                    </td>
                </tr>
                <tr>
                    <td className="text-center">3</td>
                    <td>Nguyễn Văn C</td>
                    <td>vanc11@gmail.com</td>
                    <td className="text-center">Đang hoạt động</td>
                    <td className="text-center">
                        <button type="button" className="btn btn-success">
                            <span className="fa fa-plus"></span> Xem thông tin
                        </button>
                    </td>
                </tr>
                <tr>
                    <td className="text-center">4</td>
                    <td>Nguyễn Văn D</td>
                    <td>vand11@gmail.com</td>
                    <td className="text-center">Ngừng hoạt động</td>
                    <td className="text-center">
                        <button type="button" className="btn btn-success">
                            <span className="fa fa-plus"></span> Xem thông tin
                        </button>
                    </td>
                </tr>
                <tr>
                    <td className="text-center">5</td>
                    <td>Nguyễn Văn H</td>
                    <td>vanh11@gmail.com</td>
                    <td className="text-center">Đang hoạt động</td>
                    <td className="text-center">
                        <button type="button" className="btn btn-success">
                            <span className="fa fa-plus"></span> Xem thông tin
                        </button>
                    </td>
                </tr>
                </tbody>
            </table>
        )
    }
}
export default Table;
import React,{Component} from "react";
import { Drawer, Button } from 'antd';
import './Table.css';

class Table extends Component{
    state = { visible: false, setVisible: false};
    render(){

        const showDrawer = () => {
            this.setState({
                setVisible: true,
                visible: false,
            })
        };

        const onClose = () => {
            this.setState({
                setVisible: false,
                visible: false,
            })
        };
        const { setVisible,visible } = this.state;
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
                        <Button type="button" className="btn btn-success" onClick={showDrawer} >
                            <span className="fa fa-plus"></span> Xem thông tin
                        </Button>
                        <Drawer
                            title="Basic Drawer1"
                            placement="top"
                            closable={false}
                            onClose={onClose}
                            visible={setVisible}
                        >
                            <p>Some contents...</p>
                            <p>Some contents...</p>
                            <p>Some contents...</p>
                            <p>Some contents...</p>
                            <p>Some contents...</p>
                            <p>Some contents...</p>
                            <p>Some contents...</p>
                            <p>Some contents...</p>
                            <p>Some contents...</p>
                            <p>Some contents...</p>
                            <p>Some contents...</p>
                            <p>Some contents...</p>
                            <p>Some contents...</p>
                            <p>Some contents...</p>
                            <p>Some contents...</p>
                            <p>Some contents...</p>
                            <p>Some contents...</p>
                            <p>Some contents...</p>
                            <p>Some contents...</p>
                            <p>Some contents...</p>
                            <p>Some contents...</p>
                            <p>Some contents hihi...</p>
                        </Drawer>
                    </td>
                </tr>
                <tr>
                    <td className="text-center">2</td>
                    <td>Nguyễn Văn B</td>
                    <td>vanb11@gmail.com</td>
                    <td className="text-center">Ngừng hoạt động</td>
                    <td className="text-center">
                        <Button type="button" className="btn btn-success" onClick={showDrawer}>
                            <span className="fa fa-plus"></span> Xem thông tin
                        </Button>
                        <Drawer
                            title="Basic Drawer2"
                            placement="top"
                            closable={false}
                            onClose={onClose}
                            visible={setVisible}
                        >
                            <p>Some contents...</p>
                            <p>Some contents...</p>
                            <p>Some contents...</p>
                            <p>Some contents...</p>
                            <p>Some contents...</p>
                            <p>Some contents...</p>
                            <p>Some condtents...</p>
                        </Drawer>
                    </td>
                </tr>
                <tr>
                    <td className="text-center">3</td>
                    <td>Nguyễn Văn C</td>
                    <td>vanc11@gmail.com</td>
                    <td className="text-center">Đang hoạt động</td>
                    <td className="text-center">
                        <Button type="button" className="btn btn-success" onClick={showDrawer}>
                            <span className="fa fa-plus"></span> Xem thông tin
                        </Button>
                        <Drawer
                            title="Basic Drawer3"
                            placement="top"
                            closable={false}
                            onClose={onClose}
                            visible={setVisible}
                        >
                            <p>Some contents...</p>
                            <p>Some contents...</p>
                            <p>Some contents...</p>
                            <p>Some contents...</p>
                            <p>Some contents...</p>
                            <p>Some contents...</p>
                            <p>Some condtents...</p>
                        </Drawer>
                    </td>
                </tr>
                <tr>
                    <td className="text-center">4</td>
                    <td>Nguyễn Văn D</td>
                    <td>vand11@gmail.com</td>
                    <td className="text-center">Ngừng hoạt động</td>
                    <td className="text-center">
                        <Button type="button" className="btn btn-success"  onClick={showDrawer}>
                            <span className="fa fa-plus"></span> Xem thông tin
                        </Button>
                        <Drawer
                            title="Basic Drawer4"
                            placement="top"
                            closable={false}
                            onClose={onClose}
                            visible={setVisible}
                        >
                            <p>Some contents...</p>
                            <p>Some contents...</p>
                            <p>Some contents...</p>
                            <p>Some contents...</p>
                            <p>Some contents...</p>
                            <p>Some contents...</p>
                            <p>Some condtents...</p>
                        </Drawer>
                    </td>
                </tr>
                <tr>
                    <td className="text-center">5</td>
                    <td>Nguyễn Văn H</td>
                    <td>vanh11@gmail.com</td>
                    <td className="text-center">Đang hoạt động</td>
                    <td className="text-center">
                        <Button type="button" className="btn btn-success" onClick={showDrawer}>
                            <span className="fa fa-plus"></span> Xem thông tin
                        </Button>
                        <Drawer
                            title="Basic Drawer5"
                            placement="top"
                            closable={false}
                            onClose={onClose}
                            visible={setVisible}
                        >
                            <p>Some contents...</p>
                            <p>Some contents...</p>
                            <p>Some contents...</p>
                            <p>Some contents...</p>
                            <p>Some contents...</p>
                            <p>Some contents...</p>
                            <p>Some condtents...</p>
                        </Drawer>
                    </td>
                </tr>
                </tbody>
            </table>
        )
    }
}
export default Table;


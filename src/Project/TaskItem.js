import React,{Component} from "react";

class TaskItem extends Component{
    render(){
        return(
            <tr>
                <td>1</td>
                <td>Hoc lap trinh</td>
                <td className="text-center">
                        <span className="label label-success">
                            Kich hoat
                        </span>
                </td>
                <td className="text-center">
                    <button type="button" className="btn btn-warning">
                        <span className="fa fa-pencil mr-5"></span>Sua
                    </button>
                    &nbsp;
                    <button type="button" className="btn btn-danger">
                        <span className="fa fa-trash mr-5"></span>Xoa
                    </button>
                </td>
            </tr>
        );
    }
}
export default TaskItem;
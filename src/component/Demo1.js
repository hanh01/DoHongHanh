import React,{Component} from "react";
import Demo from "./Demo";
import Props from "./Props";

class Demo1 extends Component{
    render(){
        return(
            <div>
                <Demo/>
                <div className="container">
                    <div className="row">
                        <div className="col-xs-12 col-sm-12 col-md-12 col-lg-12">
                            <Props
                                name="Iphone 11"
                                price=" 10 000 000"
                                image="https://cdn.nguyenkimmall.com/images/detailed/610/10043537_IPHONE_11-PRO-MAX-64GB-XAM_01_isos-7r.jpg"
                            />
                            <Props
                                name="Iphone 7"
                                price="  6 000 000"
                                image="https://cdn.nguyenkimmall.com/images/detailed/610/10043537_IPHONE_11-PRO-MAX-64GB-XAM_01_isos-7r.jpg"
                            />
                            <Props
                                name="Iphone 7 Plus"
                                price="7 000 000"
                                image="https://cdn.nguyenkimmall.com/images/detailed/610/10043537_IPHONE_11-PRO-MAX-64GB-XAM_01_isos-7r.jpg"
                            />
                            <Props
                                name="Iphone 11 Pro"
                                price=" 10 000 000"
                                image="https://cdn.nguyenkimmall.com/images/detailed/610/10043537_IPHONE_11-PRO-MAX-64GB-XAM_01_isos-7r.jpg"
                            />
                            <Props
                                name="Iphone 8"
                                price=" 8 000 000"
                                image="https://cdn.nguyenkimmall.com/images/detailed/610/10043537_IPHONE_11-PRO-MAX-64GB-XAM_01_isos-7r.jpg"
                            />
                        </div>
                    </div>

                </div>

            </div>
        );
    }
}
export default Demo1;
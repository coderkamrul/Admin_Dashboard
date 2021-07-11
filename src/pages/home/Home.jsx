import React from 'react'
import Chart from '../../components/chart/Chart';
import Featuredinfo from '../../components/featuredinfo/Featuredinfo';
import "./home.css";
import {Userdata} from "../../dummyData"
import WidgetSm from '../../components/widgetSm/WidgetSm';
import WidgetLg from '../../components/widgetLg/WidgetLg';

function Home() {
    return (
        <div className="home">
            <Featuredinfo />
            <Chart data={Userdata} title="User Analytics" grid datakey="Active User"/>
            <div className="homeWidgets">
                <WidgetSm />
                <WidgetLg />
            </div>
        </div>
    )
}

export default Home

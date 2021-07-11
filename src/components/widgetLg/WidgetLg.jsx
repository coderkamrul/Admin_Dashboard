import React from 'react'
import "./widgetLg.css"

function WidgetLg() {

    const Button =({type})=>{
        return <button className={"widgetLgButton " + type}>{type}</button>
    }
    return (
        <div className="widgetLg">
            <h3 className="widgetLgTitle">Latest transactions</h3>
            <table className="widgetLgTable">
                <tr className="widgetLgTr">
                    <th className="widgetLgTh">Customer</th>
                    <th className="widgetLgTh">Date</th>
                    <th className="widgetLgTh">Amount</th>
                    <th className="widgetLgTh">Status</th>
                </tr>
                <tr className="widgetLgTr">
                    <td className="widgetLgUser">
                        < img src = "https://images.unsplash.com/photo-1529626455594-4ff0802cfb7e?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=668&q=80"
                        className = "widgetLgImg" / >
                        <span className = "widgetLgName">Susan Crol</span>
                    </td>
                    <td className = "widgetLgDate">2 Jun 2021</td>
                    <td className = "widgetLgAmount">$122.00</td>
                    <td className = "widgetLgStatus"><Button type = "Approved"/></td>
                </tr>
                <tr className="widgetLgTr">
                    <td className="widgetLgUser">
                        < img src = "https://images.unsplash.com/photo-1529626455594-4ff0802cfb7e?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=668&q=80"
                        className = "widgetLgImg" / >
                        <span className = "widgetLgName">Susan Crol</span>
                    </td>
                    <td className = "widgetLgDate">2 Jun 2021</td>
                    <td className = "widgetLgAmount">$122.00</td>
                    <td className = "widgetLgStatus"><Button type = "Declined"/></td>
                </tr>
                <tr className="widgetLgTr">
                    <td className="widgetLgUser">
                        < img src = "https://images.unsplash.com/photo-1529626455594-4ff0802cfb7e?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=668&q=80"
                        className = "widgetLgImg" / >
                        <span className = "widgetLgName">Susan Crol</span>
                    </td>
                    <td className = "widgetLgDate">2 Jun 2021</td>
                    <td className = "widgetLgAmount">$122.00</td>
                    <td className = "widgetLgStatus"><Button type = "Pending"/></td>
                </tr>
                <tr className="widgetLgTr">
                    <td className="widgetLgUser">
                        < img src = "https://images.unsplash.com/photo-1529626455594-4ff0802cfb7e?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=668&q=80"
                        className = "widgetLgImg" / >
                        <span className = "widgetLgName">Susan Crol</span>
                    </td>
                    <td className = "widgetLgDate">2 Jun 2021</td>
                    <td className = "widgetLgAmount">$122.00</td>
                    <td className = "widgetLgStatus"><Button type = "Approved"/></td>
                </tr>
            </table>
        </div>
    )
}

export default WidgetLg

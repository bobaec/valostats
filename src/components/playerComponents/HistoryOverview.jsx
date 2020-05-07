import React from "react";
import "./HistoryOverview.scss";

export default function Rank() {
  return (
    <React.Fragment>
      <div className="history-overview-navigation">
        <ul>
          <li>Total</li>
          <li>Ranked Solo</li>
          <li>Ranked Flex</li>
          <li className="selected">Queue Type</li>
        </ul>


        <div className="agent-searchbox">
        <div className="seperator"></div>
          <div>
            Search an Agent <i class="fas fa-search"></i>
          </div>
        </div>
      </div>

      <div className="overview-game-average-stat-box">
        <div className="box">
          <div className="flex-row">
            <table>
              <tr>
                <span>20G</span><span> </span>
                <span>12W</span><span> </span>
                <span>7L</span><span> </span>
              </tr>
              <tr>
                <i class="fas fa-chart-pie fa-6x"></i>
              </tr>
            </table>
            <table id="table2">
              <tr>
                <span>5.3 / 3.5 / 10.0</span>
              </tr>
              <tr>
                <span>4.36:1 (61%)</span>
              </tr>
            </table>
          </div>

          <div className="seperator"></div>

          <div className="flex-row">
            <table>
              <tr>
                <td>icon </td>
                <td>info </td>
                <td>info </td>
              </tr>
              <tr></tr>
              <tr></tr>
            </table>
          </div>

          <div className="seperator"></div>

          <div className="flex-row">
            <table>
              <tr>
                <td>icon </td>
                <td>info </td>
                <td>info </td>
              </tr>
              <tr></tr>
              <tr></tr>
            </table>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
}

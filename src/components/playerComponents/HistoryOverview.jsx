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
          <li className='selected'>Queue Type</li>
        </ul>
        <div className="agent-searchbox">
          <div className="seperator"></div>
          <div>Search an Agent</div>
        </div>
      </div>
    </React.Fragment>
  );
}

import React, { useState } from "react";
import "./HistoryOverviewSearchbox.scss";

export default function HistoryOverviewSearchBox() {
  const [state, setState] = useState({
    showDropdown: false,
  });

  return (
    <>
      <div className="history-overview-searchbox">
        <div className="searchbox-input">
          <input
            type="text"
            class="Input"
            placeholder="Search an Agent"
            onFocus={(e) => setState({ ...state, showDropdown: true })}
            onBlur={(e) => setState({ ...state, showDropdown: false })}
          ></input>
          <i className="fas fa-search" ></i>
        </div>
        <div className="searchbox-dropdown-menu">
          {state.showDropdown && (
            <ul id="searchbox-dropdown-agent-list">
              <li>All Agents</li>
              <li>Breach</li>
              <li>Brimstone</li>
              <li>Cypher</li>
              <li>Jett</li>
              <li>Omen</li>
              <li>Phoenix</li>
              <li>Sage</li>
              <li>Sova</li>
              <li>Viper</li>
            </ul>
          )}
        </div>
      </div>
    </>
  );
}
{
  /* this should be an input with autocomplete */
}

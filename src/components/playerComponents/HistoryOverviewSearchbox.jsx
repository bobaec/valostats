import React, { useState } from "react";
import "./HistoryOverviewSearchbox.scss";

export default function HistoryOverviewSearchBox() {
  const [state, setState] = useState({
    showDropdown: false,
    filter: "",
  });

  let characterList = [
    "Breach",
    "Brimstone",
    "Cypher",
    "Jett",
    "Omen",
    "Phoenix",
    "Sage",
    "Sova",
    "Viper",
  ];

  let dropdownList =
    state.filter === ""
      ? characterList.map((characterName) => <li>{characterName}</li>)
      : characterList
          .filter((characterName) =>
            characterName.toLowerCase().startsWith(state.filter.toLowerCase())
          )
          .map((filteredCharacterName) => <li>{filteredCharacterName}</li>);

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
            onChange={(e) => setState({ ...state, filter: e.target.value })}
          ></input>
          <i className="fas fa-search"></i>
        </div>
        <div className="searchbox-dropdown-menu">
          {state.showDropdown && (
            <ul id="searchbox-dropdown-agent-list">
              <li>All Agents</li>
              {dropdownList}
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

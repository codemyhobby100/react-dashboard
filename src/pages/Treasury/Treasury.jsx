import React from "react";
import { asset_value,account_value } from "../../data";
import css from '../Dashboard/Dashboard.module.css';
import "./style/style.css";
import AssetValue from "../../components/Treasury/asset_value";
import AccountValue from "../../components/Treasury/account_value";
function Treasury() {
  return (
      <div className="treasury">
        <div className="treasury__info">
          <h2 className="treasury__info-header">Treasury</h2>
          <div className="treasury__info actions">
            <button className="actions__yellow">
              <div className="actions__yellow-icon"></div>
              <p> Move Money</p>
            </button>
            <button className="actions__grey">
              <div className="actions__grey icon"></div>
              <p>116</p>
            </button>
            <button className="actions__grey">
              <div className="actions__grey icon"></div>
              <p> ?</p>
            </button>
          </div>
        </div>

        <div className="treasury__value">
          <div className="treasury__value asset__values">
            {asset_value.map((item) => {
              return <AssetValue {...item} />;
            })}
          </div>
          <button className="treasury__value button">
            Manage Accounts
          </button>
        </div>

        <div className="treasury__account">
            {account_value.map((account)=>{
              return <AccountValue {...account} />
            })}
        </div>
      </div>
  );
}

export default Treasury;

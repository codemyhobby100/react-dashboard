import React from 'react'

function AccountValue({ accountName, value,color }) {
  return (
    <div className="account" style={{ backgroundColor: `${color}` }}>
      <div
        className="account__color"
        style={{ backgroundColor: `${color}` }}
      ></div>
      <div className="account__value">
        <p>{accountName}</p>
        <p className="value">{value ?  `$${value}` : ""} </p>
      </div>
    </div>
  );
}

export default AccountValue
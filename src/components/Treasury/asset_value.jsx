import React from 'react'

function AssetValue({title,value}) {
  let asset_value = value.toString().split('.');

  return (
    <div className="asset">
      <p className="title">{title}</p>
      <div className="asset__value value">
        <p className="value__whole">${parseInt(asset_value[0]).toLocaleString()}</p>
        <p className="value__decimal">.{asset_value[1]}</p>
      </div>
    </div>
  );
}

export default AssetValue;
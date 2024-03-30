import React from 'react';

const BrandCard = ({ brandName, imageUrl, link }) => {
  return (
    <a href={link}>
      <div className="border rounded-3" style={{ width: 150, textAlign: 'center' }}>
        <div className="p-3">
          <img src={imageUrl} alt={brandName} className="rounded mx-auto d-block" />
        </div>
        <hr style={{ margin: 0, color: '#DEE1E6' }} />
        <div className="p-2 cstm-new-brand-text">{brandName}</div>
      </div>
    </a>
  );
};

export default BrandCard;

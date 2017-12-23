import React from 'react';

const createImageSourceUrl = (imageId) => {
  return `https://images.craigslist.org/${imageId.split(',')[0].substring(2)}_300x300.jpg`;
};

const CraigslistListItem = ({ item, toggleShowHide }) => {
  return (
    <div>
      <h3>{item.title}</h3>
      <p>{item.neighborhood} ~ <span style={{ color: 'red' }}>{item.price}</span></p>
      {(item.images) ?
        <img
          src={createImageSourceUrl(item.images)}
        />
        : <p>No image</p>}
      <a href={item.href}><p>link</p></a>
      <p>id: {item.id} </p>
      <p>showStatus: {item.show.toString()}</p>
      <button onClick={() => toggleShowHide(item.id, item.show)}>Hide Post</button>
      <br />
    </div>
  );
};

export default CraigslistListItem;

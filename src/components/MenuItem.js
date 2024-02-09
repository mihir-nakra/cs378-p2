import React from 'react';


// This is a functional component that represents a single menu item. It currently takes in the title and displays it in an h2 element.
// Modify the component to take in all the other properties of a menu item you need and display them in the component.
// Use bootstrap to style the elements so that it looks like the mockup in the assignment.
// Hint: You can use the image name to get the image from the images folder.
const MenuItem = ({ title, description, imageName, price }) => {
    return (
        <div>
            <div className="container menu-item">
      <div className="row justify-content-center g-4">
        <img src={`./images/${imageName}`} className="menu-image" alt={title} />
        <div className="col">
          <p className="item-title">{title}</p>
          <p className="item-description">{description}</p>
          <div className="d-flex justify-content-between">
              <p className="item-price">{price}</p>
              <button className="item-button">Add</button>
          </div>
        </div>
      </div>
    </div>


    <div className="spacer-small"></div>
        </div>
    );
};

export default MenuItem;

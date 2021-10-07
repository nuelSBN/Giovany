import React from "react";
import "./itemContainer.css";

function ItemContainer() {
  return (
    <div className="itemContainer">
      <div className="items">
        <p className="itemNumber">1</p>
        <h3 className="itemObjectiveHead">
          Flexible lease lengths and start dates
        </h3>
        <p className="itemObjectives">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Reiciendis,
          aut veniam id ab quos, consequatur cupiditate dignissimos delectus
        </p>
      </div>
      <div className="items">
        <p className="itemNumber">2</p>
        <h3 className="itemObjectiveHead">
          Need to move? You can transfer homes
        </h3>
        <p className="itemObjectives">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Reiciendis,
          aut veniam id ab quos, consequatur cupiditate dignissimos delectus
        </p>
      </div>
      <div className="items">
        <p className="itemNumber">3</p>
        <h3 className="itemObjectiveHead">
          Roommate moving out? We’ll help you find a new one
        </h3>
        <p className="itemObjectives">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Reiciendis,
          aut veniam id ab quos, consequatur cupiditate dignissimos delectus
        </p>
      </div>
      <div className="items">
        <p className="itemNumber">4</p>
        <h3 className="itemObjectiveHead">Build a house profile</h3>
        <p className="itemObjectives">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Reiciendis,
          aut veniam id ab quos, consequatur cupiditate dignissimos delectus
        </p>
      </div>
    </div>
  );
}

export default ItemContainer;

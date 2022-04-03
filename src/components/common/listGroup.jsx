import React from "react";

function ListGroup(props) {
  const { items, onItemSelect, selectedItem, valueProperty, textProperty } =
    props;
  return (
    <ul className="list-group">
      {items.map((item) => (
        <li
        onClick={() => onItemSelect(item)}
          key={item[valueProperty]}
          className={
            item === selectedItem ? "list-group-item acive" : "list-group-item"
          }
          
        >
          {item[textProperty]}
        </li>
      ))}
    </ul>
  );
}

ListGroup.defaultProps = {
  textProperty: "name",
  valueProperty: "_id",
};

export default ListGroup;

import React from 'react';

const ListItem = (props) => (
    <tr>
      <td>{props.item.date}</td>
      <td>{props.item.description}</td>
      <td>{props.item.category1}</td>
      <td>{((props.item.category2) ? props.item.category2 : "No data")}</td>
      <td>{props.item.lang}</td>
      <td>{props.item.granularity}</td>
    </tr>
);

export default ListItem;
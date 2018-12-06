import React from 'react';
import ListItem from './ListItem.jsx'

const List = (props) => {
  return (
    <div className="pure-table pure-table-bordered">
      <table>
        <tr>
          <th>Event Date</th>
          <th>Description of Event</th> 
          <th>Data</th>
          <th>Category</th>
          <th>Lang</th>
          <th>Detail</th>
        </tr>
        {props.data.map(item => <ListItem item={item}/>)}
      </table>
    </div>
  )
}


export default List;
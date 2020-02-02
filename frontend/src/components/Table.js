import React from 'react';

function Table()
{
    return(
        <div className="T1">
        <table>
          <tr>
            <th>First Name</th>
            <th>Last Name</th>
            <th>Phone Number</th>
         
          </tr>
          <tr>
            <td>Jill</td>
            <td>Smith</td>
            <td>555-555-5556</td>
       
          </tr>
          <tr>
            <td>Eve</td>
            <td>Jackson</td>
            <td>555-555-5556</td>
         
          </tr>
          <tr>
            <td>Adam</td>
            <td>Johnson</td>
            <td>555-555-5556</td>
           
          </tr>
        </table>
      </div>
    );
}

export default Table;
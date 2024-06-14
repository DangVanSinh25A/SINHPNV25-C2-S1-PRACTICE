import React from "react"
function cart(prop){
    return(
      <div className={prop.index}>
      <table>
            <thead>
              <tr>
                <th>First name</th>
                <th>Last name</th>
                <th>Score</th>
              </tr>
              </thead>
              <tbody>
                      <tr>
                          <td>First name {prop.FirstName}</td>
                          <td>Last name {prop.LastName}</td>
                          <td className={prop.number<50?"warning":""}>{prop.number}</td>
                        </tr>
              </tbody>
      </table>
      </div>
    )
}
export default cart;

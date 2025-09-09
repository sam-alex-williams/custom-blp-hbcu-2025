import React from "react";
import '../styles.css';

export const Features = (props) => {
  let listItems = [];
  let subLists = 0;
  for (let i = 0; i < props.data.items.length; i++){
    const subIndex = i % 4;
    if (subIndex === 0){
      subLists += 1;
      listItems.push([]);
    }
    listItems[subLists - 1].splice(subIndex, 0, props.data.items[i]);
  }

  console.log(listItems);
  const dynamicColsMD = (subN) => {
    return `col-md-${12 / subN}`;
  }

  const dynamicColsXS = (i,subN) => {
    return `col-xs-${((subN % 2 === 1 && i + 1 === subN) ? 12 : 6)}`
  }

  return (
    <div id="features">
      <div className="container feature-container justify-content-center">
        {props.data && props.data.h2 ? <h2>{props.data.h2}</h2> : ''}
        {listItems ? listItems.map((d, x) => (
          <div className="row text-center feature-icons">
          {listItems[x].map((d, y) => (
                <div key={`${d.title}-${x}-${y}`} 
                className={`${dynamicColsXS(y, listItems[x].length)} ${dynamicColsMD(listItems[x].length)}`}>
                  {" "}
                  <i className={d.icon}></i>
                  <h3>{d.title}</h3>
                  <p>{d.text}</p>
                </div>
              ))}
        </div>
        )): "Loading..."}
      </div>
    </div>
  );
};

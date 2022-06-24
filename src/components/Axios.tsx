import React, { useState } from 'react';
import axios from 'axios';

export default function Axios() {

  const initialState = [
    {
    icon: "",
    name: "",
    chat_link:"",
    rarity: "",
    flags: []
    }
  ]

  const [currentItem, setcurrentItem] = useState<Array<{icon:string, name: string, chat_link: string, rarity: string, flags: Array<string>}>>(initialState)
  const [dataAvailable, setdataAvailable] = useState(false)

 const fetchData = (ID:number) => axios.get(`https://api.guildwars2.com/v2/items?ids=${ID}&lang=en`)
    .then(function(response){
      setcurrentItem(response.data);
    })
    .then(function(){
      setdataAvailable(true);
    })
    .catch(function(error){
      console.log(error);
    })
  
  const listOfLegendaryGreatswords = [
    {
      name: "Twilight",
      ID: 30704
    },
    {
      name: "Eternity",
      ID: 30689
    },
    {
      name: "Sunrise",
      ID: 30703
    },
    {
      name: "Exordium",
      ID: 90551
    },
    {
      name: "Aurene's Bite",
      ID: 96356
    },
  ]

  return (
    <div>
      <div className="App">
        <ul>
          {listOfLegendaryGreatswords.map((greatsword, i) => <li key={i}>{greatsword.name} <button onClick={()=>fetchData(greatsword.ID)}> Press to download the data about {greatsword.name} </button></li>)}
        </ul>
      </div>
      {dataAvailable && <div>
        <h1>Item informations:</h1>
        <p>
          Sword icon: <img src={currentItem[0].icon} alt="Icon of currently selected greatsword" /> <br />
          Sword name: {currentItem[0].name} <br />          
          Rarity: {currentItem[0].rarity} <br />
          in game link: {currentItem[0].chat_link} <button onClick={()=>navigator.clipboard.writeText(currentItem[0].chat_link)}>Copy to clipboard</button> <br />
          Is the item account bound?: {currentItem[0].flags.includes("AccountBound") ? "Yes" : "No"}
        </p>
      </div>}
    </div>
  );
}


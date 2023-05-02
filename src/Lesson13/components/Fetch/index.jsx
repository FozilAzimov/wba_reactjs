import React, { useEffect, useState } from 'react';

export default function Fetch() {

  const [name, setName] = useState('Namangan');

  const [data, setData] = useState({});

  const onSelect = (param) => {
    setName(param);
  }

  const endpoint = `http://api.weatherapi.com/v1/current.json?key=ec8bf3f960c94073b35170212233004&q=${ name }&aqi=no`;

  useEffect(() => {
    fetch(endpoint, {
      // method: 'GET','PUT','DELETE','POST'
      method: 'POST',
      headers: {
        'Content-type': 'application/json', // shunday yoshilishi shart;
      },
      body: JSON.stringify({ id: 7, name: "Gulbashakar" }),
    })
      .then((res) => res.json())
      .then((res) => setData(res.location));
  }, [name]);

  // useEffect(() => {
  //   const getData = async () => {
  //     let res = await fetch(endpoint);
  //     res = await res.json();
  //     return res;
  //   }
  //   getData(endpoint);
  // }, [name]);

  const url = new URL(endpoint);

  console.log(url.searchParams);
  console.log(url.searchParams.get('q'));

  return (
    <>
      {
        data ?
          (<div>
            <h1>Body</h1>
            <h1>Country: { data.country }</h1>
            <h1>Localetime: { data.localtime }</h1>
            <h1>Name: { data.name }</h1>
          </div>) :
          (<h1>Loading...</h1>)
      }
      <select onChange={ ({ target }) => onSelect(target.value) }>
        <option value="Namangan">Namangan</option>
        <option value="Andijon">Andijon</option>
        <option value="Buxoro">Buxoro</option>
        <option value="Toshkent">Toshkent</option>
        <option value="Chust">Chust</option>
      </select>
    </>
  )
}

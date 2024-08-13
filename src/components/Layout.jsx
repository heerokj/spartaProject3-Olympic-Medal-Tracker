import { useState } from 'react'

export const CountrySection = () => {
  const [countries, setCountries] = useState([])

  // input창을 핸들링하기위한 스테이트
  const [newCountry, setNewCountry] = useState("");
  const [newGold, setNewGold] = useState(0);
  const [newSilver, setNewSilver] = useState(0);
  const [newBronze, setNewBronze] = useState(0);


    // 업데이트 함수
  const handleUpdate = () => {
    if(newCountry === ""){
      alert("국가명을 입력해주세요.")
      return;
    }
    const targetCountry = countries.find(function(country){
      return country.name === newCountry
    });
    if(targetCountry === undefined){
      alert("등록되지 않은 국가입니다.")
      return;
    }
    // map을 사용함
    const newCountries = countries.map(function(country){
      if(country.name === targetCountry.name){
        return {...country, gold:newGold, silver:newSilver, bronze:newBronze}
      }else{
        return country
      }
    })
    // 정렬
    const sortNewNation = newCountries.sort(function(a, b){
      return b.gold- a.gold;
    })

    setCountries(sortNewNation)
    setNewCountry("");
    setNewGold(0);
    setNewSilver(0);
    setNewBronze(0);
  }

    // 삭제함수
    const handleDelete = (id) => {
      //삭제할 대상 id
      
    }

    return (
      <div className='container'>
        <form className='main' onSubmit={function(e){
          e.preventDefault();
  
          if(newCountry === ""){
            alert("국가명을 입력해주세요.")
            return;
          }
  
          // 이미 등록된 국가 체크
          const targetCountry = countries.find(function(country){
            return country.name === newCountry
          });
          if(targetCountry){
            alert("이미 등록된 국가입니다.")
            return;
          }
  
          //갱신할 배열
          const newNation = [
            ...countries,
            {
              id: new Date().getTime(),
              name: newCountry,
              gold: Number(newGold),
              silver: Number(newSilver),
              bronze: Number(newBronze)
            }
          ];
  
          const sortNewNation = newNation.sort(function(a, b){
            return b.gold- a.gold;
          })
  
          //setCountries
          setCountries(sortNewNation);
          setNewCountry("");
          setNewGold(0);
          setNewSilver(0);
          setNewBronze(0);
        }} >
          <div>
            <label>국가명</label>
            <input type="text" value={newCountry} onChange={function(e){
              setNewCountry(e.target.value);
            }} placeholder='국가명'/>
          </div>
          <div>
            <label>금메달🥇</label>
            <input type="number" value={newGold} onChange={function(e){
              setNewGold(e.target.value);
            }}/>
          </div>
          <div>
            <label>은메달🥈</label>
            <input type="number" value={newSilver} onChange={function(e){
              setNewSilver(e.target.value);
            }} />
          </div>
          <div>
            <label>동메달🥉</label>
            <input type="number" value={newBronze} onChange={function(e){
              setNewBronze(e.target.value);
            }} />
          </div>
          <div className='btn-group'>
            <button type='submit'>국가 추가</button>
            <button type='button' onClick={handleUpdate}>업데이트</button>
          </div>
        </form>
        <div>
            <table>
              <thead>
                <tr>
                  <th>국가명</th>
                  <th>금메달</th>
                  <th>은메달</th>
                  <th>동메달</th>
                  <th>총개수</th>
                  <th>상태</th>
                </tr>
              </thead>
              {countries.map(function(country){
                return (
              <tbody key={country.id}>
                <tr>
                  <td>{country.name}</td>
                  <td>{country.gold}</td>
                  <td>{country.silver}</td>
                  <td>{country.bronze}</td>
                  <td>{country.gold + country.silver + country.bronze}</td>
                  <td><button onClick={function(){
                    const deleteCountry = countries.filter(function(del){
                      if(del.id === country.id){ //추가된 것 중 루프돌기 === 선택한 것
                        return false
                      }else{
                        return true
                      }
                    })
                    setCountries(deleteCountry)
                  }}>삭제</button></td>
                </tr>
              </tbody>
                )
              })}
            </table>
        </div>
      </div>
    )
}
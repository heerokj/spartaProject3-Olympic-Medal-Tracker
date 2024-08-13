import { useState } from 'react'
import './App.css'

const App = () => {

  const [countries, setCountries] = useState([])

  // input창을 핸들링하기위한 스테이트
  const [newCountry, setNewCountry] = useState("");
  const [newGold, setNewGold] = useState(0);
  const [newSilver, setNewSilver] = useState(0);
  const [newBronze, setNewBronze] = useState(0);

  return (
    <div className='container'>
      <h1>2024 파리 올림픽</h1>
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
          <label>금메달</label>
          <input type="number" value={newGold} onChange={function(e){
            setNewGold(e.target.value);
          }}/>
        </div>
        <div>
          <label>은메달</label>
          <input type="number" value={newSilver} onChange={function(e){
            setNewSilver(e.target.value);
          }} />
        </div>
        <div>
          <label>동메달</label>
          <input type="number" value={newBronze} onChange={function(e){
            setNewBronze(e.target.value);
          }} />
        </div>
        <div className='btn-group'>
          <button type='submit'>국가 추가</button>
          <button type='button' onClick={function(){
            // 1. input창 중에 나라이름에 매칭된 state 정보
            // 2. state에 있는 나라이름으로 현재 존재하는 countries 배열에서 찾아
            // by find => 내가 수정하려고 하는 대상 국가 
            if(newCountry === ""){
              alert("국가명을 입력해주세요.")
              return;
            }

            const targetCountry = countries.find(function(country){
              return country.name === newCountry
            });
            console.log(targetCountry) // 추가된 것 중 선택된것(업데이트 될 대상)

            if(targetCountry === undefined){
              alert("등록되지 않은 국가입니다.")
              return;
            }
            // 3. map을 사용함 (** 업데이트해서 내보내는 길이가 기존 배열 길이와 같잖아! ==> map!!)
            // 3-1. map이 하나하나 순회를 도는데, targetCountry의 이름과 일치하면 => 수정하여 내보내
            // 3-2. map이 하나하나 순회를 도는데, targetCountry의 이름과 일치하지 않으면 => 그대로 내보내 
            const newCountries = countries.map(function(country){
              if(country.name === targetCountry.name){
                return {...country, gold:newGold, silver:newSilver, bronze:newBronze}
              }else{
                return country
              }
            })
            
            const sortNewNation = newCountries.sort(function(a, b){
              return b.gold- a.gold;
            })

            // 4. setCountries
            setCountries(sortNewNation)

            // 5. input에 연결되어있는 state들을 초기화
            setNewCountry("");
            setNewGold(0);
            setNewSilver(0);
            setNewBronze(0);

          }}>업데이트</button>
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
            <tbody>
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

export default App
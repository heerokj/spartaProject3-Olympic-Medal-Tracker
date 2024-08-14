import React from "react";

const List = ({ countries, setCountries }) => {
  //삭제 함수
  const handleDelete = (name) => {
    if (window.confirm("삭제하시겠습니까?")) {
      const deleteCountry = countries.filter(function (del) {
        if (del.id === name) {
          return false;
        } else {
          return true;
        }
      });
      setCountries(deleteCountry);
    } else {
    }
  };

  return (
    <>
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
        <tbody>
          {countries.map(function (country) {
            return (
              <tr key={country.id}>
                <td>{country.name}</td>
                <td>{country.gold}</td>
                <td>{country.silver}</td>
                <td>{country.bronze}</td>
                <td>{country.gold + country.silver + country.bronze}</td>
                <td>
                  <button
                    onClick={() => {
                      handleDelete(country.id);
                    }}
                  >
                    삭제
                  </button>
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </>
  );
};

export default List;

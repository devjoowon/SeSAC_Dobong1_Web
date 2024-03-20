import { useState } from "react";

export default function PracMap02_byAllie() {
  const [comment, setComment] = useState([
    { writer: "주돌", title: "안녕하쇼" },
    { writer: "희돌", title: "방가방가" },
    { writer: "나돌", title: "꾸도링" },
  ]);

  /* 표에 추가하기 */
  const [inputTitle, setInputTitle] = useState(""); // 제목 input
  const [inputWriter, setInputWriter] = useState(""); // 작성자 input

  /* 검색 관련 */
  const [result, setResult] = useState([]); // 검색결과 배열
  const [inputSearch, setInputSearch] = useState(""); // 검색어 input
  const [searchType, setSearchType] = useState("writer"); // 검색 타입 select

  /* 추가하는 함수 */
  const addComment = () => {
    let newComment = {
      writer: inputWriter,
      title: inputTitle,
    };
    setComment([...comment, newComment]); // 기존에 있던 값들을 가져오기 위해 전개연산자 사용
    setInputWriter("");
    setInputTitle("");
  };

  /* 검색 타입 선택하는 함수 */
  const selectSearchType = (e) => {
    setSearchType(e.target.value);
  };

  /* 검색 결과 함수 */
  const searchComment = () => {
    if (inputSearch.trim().length === 0) return;
    let searchResult = comment.filter((item) => {
      console.log(item); // writer: '주돌', title: '안녕하쇼'
      console.log(item[searchType]); // 검색타입이 writer면 writer값만(주돌), title이면 title값만(안녕하쇼)
      console.log(item[searchType].includes(inputSearch)); // true(검색어가 포함된 경우) or false
      if (!item[searchType].includes(inputSearch)) {
        return null;
      }
      return item;
    });
    console.log(searchResult); // 검색 결과
    setResult(searchResult);
    setInputSearch("");
  };
  console.log("result", result);

  /* 전체 결과 함수 */
  const getTotalComment = () => {
    setResult(comment);
  };

  return (
    <div>
      {/* 등록폼 */}
      <form>
        <label htmlFor="writer">작성자</label>
        <input
          type="text"
          id="writer"
          value={inputWriter}
          onChange={(e) => setInputWriter(e.target.value)}
        />
        <label htmlFor="title">제목</label>
        <input
          type="text"
          id="title"
          value={inputTitle}
          onChange={(e) => setInputTitle(e.target.value)}
        />

        <button type="button" onClick={addComment}>
          작성
        </button>
      </form>

      {/* 검색폼 */}
      <form>
        <select onChange={selectSearchType}>
          <option value="writer">작성자</option>
          <option value="title">제목</option>
        </select>
        <input
          type="text"
          placeholder="검색어를 입력해주세요."
          value={inputSearch}
          onChange={(e) => {
            setInputSearch(e.target.value);
          }}
        />
        <button type="button" onClick={searchComment}>
          검색
        </button>
        <button type="button" onClick={getTotalComment}>
          전체
        </button>
      </form>

      {/* 모든 데이터 table */}
      <table border={1} style={{ margin: "30px auto", width: "400px" }}>
        <thead>
          <tr>
            <th>번호</th>
            <th>제목</th>
            <th>작성자</th>
          </tr>
        </thead>
        <tbody>
          {comment.map((co, idx) => {
            // co에 object들이 담겨져 있음
            return (
              <tr key={idx}>
                <td>{idx + 1}</td>
                <td>{co.title}</td>
                <td>{co.writer}</td>
              </tr>
            );
          })}
        </tbody>
      </table>

      {/* 검색 결과 table */}
      {result.length === 0 ? (
        <h5>검색 결과가 없습니다.</h5>
      ) : (
        <table border={1} style={{ margin: "30px auto", width: "400px" }}>
          <thead>
            <tr>
              <th>번호</th>
              <th>제목</th>
              <th>작성자</th>
            </tr>
          </thead>
          <tbody>
            {result.map((el, idx) => {
              return (
                <tr key={idx}>
                  <td>{idx + 1}</td>
                  <td>{el.title}</td>
                  <td>{el.writer}</td>
                </tr>
              );
            })}
          </tbody>
        </table>
      )}
    </div>
  );
}

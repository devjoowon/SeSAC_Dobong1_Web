import { useNavigate, useParams, useSearchParams } from "react-router-dom";

export default function StudentPage() {
  const { studentName } = useParams();
  console.log(studentName);

  const [realName, setRealName] = useSearchParams();
  console.log(realName.get("name"));

  const navigate = useNavigate();
  return (
    <>
      <p>학생 이름은 {studentName} 입니다.</p>
      {realName.get("name") && (
        <p>실제 학생 이름은 {realName.get("name")}입니다.</p>
      )}
      <button onClick={() => navigate(-1)}>이전 페이지로</button>
    </>
  );
}

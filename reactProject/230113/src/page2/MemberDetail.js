import styled from "styled-components";
import { useParams, useNavigate } from "react-router-dom";
import { useAxios } from "./useAxios";

const UserInfo = styled.div`
  border: 1px solid #000;
  width: 70vw;
  padding: 20px;
  h2 {
    margin: 20px 0;
    font-size: 1.1em;
    border-bottom: 1px #000 dotted;
  }
`;

function MemberDetail({ item }) {
  const { memberId } = useParams();
  const nav = useNavigate();
  // 페이지 이동, 이전 페이지, 이후 페이지 등

  const { data } = useAxios(
    `https://jsonplaceholder.typicode.com/users/${memberId}`
  );
  const { name, phone, email, address, company } = data;

  const onGo = () => {
    // nav("/"); 처음 페이지로
    nav(-1); // 이전 한 단계 전으로 // (-3) 이전 3단계 전으로 // (2) 이후 2단 후로
    // nav("/member"); // 페이지명으로 이동
  };

  return (
    <UserInfo>
      <h2>회원 상세 정보: {memberId}</h2>
      <h3>이름: {name}</h3>
      <ul>
        <li>연락처: {phone}</li>
        <li>이메일: {email}</li>
        {/*         <li>주소: {address.street}</li>
        <li>도시: {address.city}</li>
        <li>회사: {company.name}</li> */}
      </ul>
      <button onClick={onGo}>이전(목록)으로</button>
    </UserInfo>
  );
}

export default MemberDetail;

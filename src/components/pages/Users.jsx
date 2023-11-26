import styled from "styled-components";
import { SearchInput } from "../molecules/SearchInput";
import { UserCard } from "../organisms/user/UserCard";

const users = [...Array(10).keys()].map((val) => {
  return {
    id: val,
    name: `じゃけぇ-${val}`,
    image: "https://source.unsplash.com/photos/NE0XGVKTmcA",
    email: "12345@ecample.com",
    phone: "090-1234-5678",
    company: {
      name: "テスト株式会社"
    },
    website: "https://www.google.com"
  };
});

export const Users = () => {
  return (
    <SContainer>
      <h2>ユーザー一覧</h2>
      <SearchInput />
      <SUserArea>
        {users.map((user) => (
          <UserCard key={user.id} user={user} />
        ))}
      </SUserArea>
    </SContainer>
  );
};

const SContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 24px;
`;

const SUserArea = styled.div`
padding-top:40px;
width:100%;
disolay;grid;
grid-template-colmuns:repeat(auto-fit,minmax(200px,1fr));
grid-gap:20px;`;

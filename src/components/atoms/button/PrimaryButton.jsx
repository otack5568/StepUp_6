import styled from "styled-components";
import { BaseButton } from "./BaseButton";

export const PrimaryButton = (props) => {
  const { children } = props;
  return <SButton>{children}</SButton>;
};

//styled(ベースとなるコンポーネント)で、設定済みのものを読み込める
const SButton = styled(BaseButton)`
  background-color: #40514e;
`;

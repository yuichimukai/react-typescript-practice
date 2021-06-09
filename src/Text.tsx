import { VFC } from "react";

type Props = {
  color: string;
  fontSize: string;
};

//version18からはFCにchildrenは入らなくなるため今は暫定的にVFCを利用している

export const Text: VFC<Props> = (props) => {
  const { color, fontSize } = props;
  return <p style={{ color, fontSize }}>テキストです</p>;
};

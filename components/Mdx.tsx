import { useMDXComponent } from "next-contentlayer/hooks";

interface Props {
  code: string;
}

const Mdx = ({ code }: Props) => {
  const MdxComponent = useMDXComponent(code);
  return <MdxComponent />;
};

export default Mdx;

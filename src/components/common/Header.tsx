type HeadingProps = {
  id: string;
} & React.HTMLProps<HTMLHeadingElement>;

export const Heading = {
  H1: (props: HeadingProps) => (
    <h1 {...props} id={props.id} className="text-2xl font-bold">
      {props.children}
    </h1>
  ),
  H2: (props: HeadingProps) => (
    <h2 {...props} id={props.id} className="text-xl font-bold">
      {props.children}
    </h2>
  ),
};

type Heading = {
  id: string;
  children: string;
};

export const Heading = {
  H1: (props: Heading) => (
    <h1 id={props.id} className="text-2xl font-bold">
      {props.children}
    </h1>
  ),
  H2: (props: Heading) => (
    <h2 id={props.id} className="text-xl font-bold">
      {props.children}
    </h2>
  ),
};

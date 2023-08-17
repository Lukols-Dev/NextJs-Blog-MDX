export const Heading = {
  H1: ({ id, children }: any) => (
    <h1 id={id} className="text-2xl font-bold">
      {children}
    </h1>
  ),
  H2: ({ id, children }: any) => (
    <h2 id={id} className="text-xl font-bold">
      {children}
    </h2>
  ),
};

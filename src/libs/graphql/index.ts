export const parsePagination = (value: any, hasNodes?: boolean) => {
  const { edges } = value;
  return edges.map((elem: any) => {
    if (hasNodes) {
      const { node } = elem;
      return node;
    }
    return elem;
  });
};

export interface TableProps {
  prop?: string;
}

export function Table({ prop = "default value" }: TableProps) {
  return <div className="">Table {prop}</div>;
}

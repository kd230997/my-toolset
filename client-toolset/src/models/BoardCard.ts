import { BaseProps } from "./BaseProps";

export interface BoardCardProps extends BaseProps {
  title?: string;
  content?: any;
  owner?: string;
  dateCreated?: Date;
}

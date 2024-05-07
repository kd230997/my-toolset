import { BoardCardProps } from "../../models/BoardCard";

export default function BoardCard(props?: BoardCardProps) {
  return (
    <div
      key={props?.id}
      className={`${props?.customClass} w-fit h-fit min-h-96 min-w-96 rounded-md p-4 shadow-primary-text-lighter shadow-md hover:shadow-lg hover:shadow-primary-text-dark bg-primary-content/75 text-primary-text-dark`}
    >
      <h1>{props?.title || "Default Title"}</h1>
      <div className="mt-1">{props?.content}</div>
    </div>
  );
}

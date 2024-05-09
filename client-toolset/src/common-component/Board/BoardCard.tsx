import { BoardCardProps } from "../../models/BoardCard";

export default function BoardCard(props?: BoardCardProps) {
  return (
    <div
      key={props?.id}
      className={`${props?.customClass} w-fit h-fit min-h-96 min-w-80 rounded-lg p-4 shadow-primary-text-lighter shadow-md hover:shadow-lg hover:shadow-primary-text-dark bg-white/75 text-primary-text-dark`}
    >
      {/* Title and header action */}
      <div className="h-1/4">
        {props?.title || <h1 className=" font-extrabold">{"Default Title"}</h1>}
      </div>
      {/* Content */}
      <div className="mt-5 min-h-80">{props?.content}</div>
      <br />
      {/* Bottom action */}
      <div>

      </div>
      <br />
      {/* Bottom */}
      <div className="h-1/4 flex flex-row justify-between text-sm">
        <p className="">{props?.owner}</p>
        <p className="">{props?.dateCreated?.toDateString()}</p>
      </div>
    </div>
  );
}

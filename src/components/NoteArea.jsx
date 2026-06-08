import { HiDotsHorizontal } from "react-icons/hi";
import NoteText from "./ui/NoteText";

export default function NoteArea({datetime, typenote}) {
  return (
    <div className="flex-1 flex flex-col">
        <div className="py-4 px-4 border-b-2 border-slate-300  flex justify-between items-center">
          <h4 className='font-medium text-2xl'>{datetime}</h4>
          <HiDotsHorizontal className="text-2xl" />
        </div>
        <NoteText typetext={typenote} />
    </div>
  )
}

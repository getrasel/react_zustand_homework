import { HiMiniBars3BottomLeft } from "react-icons/hi2";

export default function NoteItem({isActive, itembg, datetime, notetextmain, onClick }) {
  return (
    <div
        onClick={onClick}>
        <div
         className={`flex gap-4 items-start py-6 px-4 ${isActive ? itembg : "bg-slate-200"} hover:bg-slate-300 border-b-2 border-slate-300 transition duration-300`}>
            <HiMiniBars3BottomLeft className="text-2xl text-blue-500" />
            <div>
                <h3 className="text-xl font-medium leading-4 mb-2">{datetime}</h3>
                <p>{notetextmain}</p>
            </div>
        </div>
    </div>
  )
}

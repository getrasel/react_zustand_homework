import { FaCirclePlus } from "react-icons/fa6";
import { TbFilter2Down } from "react-icons/tb";
import { IoMdSearch } from "react-icons/io";
import { MdEventNote } from "react-icons/md";
import NoteItem from "./ui/NoteItem";
import { useState } from "react";
import NoteArea from "../components/NoteArea";

export default function NoteSidebar() {
  const [datetime, setDatetime] = useState("Sunday, Jun 7, 2026 at 9:09 PM")
  const [notetextmain, setNotetextmain] = useState("How are you");
  return (
      <div className="flex">
        <div className="border-r-2 border-slate-300 h-screen min-w-md">
          <div className="p-4 border-b-2 border-slate-300">
            <div className="flex justify-between">
              <p className="text-xl font-medium flex gap-2 items-center"><MdEventNote /> Note</p>
              <div className="flex gap-3.5">
                <TbFilter2Down className="text-2xl" />
                <FaCirclePlus className="text-2xl text-blue-500" />
              </div>
            </div>
            <div className="mt-4 flex border rounded-full border-slate-400  items-center pl-2">
              <IoMdSearch className="text-2xl"/>
              <input type="text" className="w-full pl-2 py-2 px-3 focus-visible:outline-0" />
            </div>
          </div>
          <div>
            <NoteItem 
            itembg={`bg-slate-300`} 
            datetime={"Sunday, Jun 7, 2026 at 9:09 PM"} 
            notetextmain="How are you"
            onClick={() => {
              setNotetextmain("How are you")
              setDatetime("Sunday, Jun 7, 2026 at 9:09 PM")
            }} />
            <NoteItem 
            itembg={`bg-slate-200`} 
            datetime={"Saterday, Jun 6, 2026 at 12:00PM"} 
            notetextmain="Hello"
            onClick={() => {
              setNotetextmain("Hello")
              setDatetime("Saterday, Jun 6, 2026 at 12:00PM")
            }} />
          </div>
        </div>
        <NoteArea datetime={datetime} typenote={notetextmain} />
        
    </div>
  )
}

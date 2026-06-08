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

  const [activeId, setActiveId] = useState(0)

  const notes = [
   { id:1, datetime:"Sunday, Jun 7, 2026 at 9:09 PM", notetextmain: "How are you?"},
   { id:2, datetime:"Saterday, Jun 6, 2026 at 12:00PM", notetextmain: "hello"},
   { id:3, datetime:"monday, Jun 8, 2026 at 05:00PM", notetextmain: "where are you from?"}
  ]
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
            {notes.map((note, index) => {
              return(
                <NoteItem 
                key={index}
                itembg="bg-slate-300"
                datetime={note.datetime}
                notetextmain={note.notetextmain}
                isActive={activeId === note.id}
                onClick={() => {
                  setActiveId(note.id)
                  setDatetime(note.datetime)
                  setNotetextmain(note.notetextmain)
                }}
              />
              )
            })}
          </div>
        </div>
        <NoteArea datetime={datetime} typenote={notetextmain} />
        
    </div>
  )
}

import NoteArea from "../components/NoteArea";
import NoteSidebar from "../components/NoteSidebar";

export default function HomePage({datetime}) {
  return (
    <div>
      <div className="flex">
        <NoteSidebar />
        <NoteArea datetime={datetime} />
      </div>

    </div>
  )
}

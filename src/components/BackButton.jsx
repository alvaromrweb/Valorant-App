import { useContext } from "react";
import { ProfileContext } from "../context/profile"

export default function BackButton() {
  const {resetApp} = useContext(ProfileContext)
    const handleBack = e => {
        e.preventDefault();
        resetApp()
    }
  return (
    <div className="absolute left-0 top-0">
        <button className="bg-slate-900 text-white hover:bg-white hover:text-slate-900 transition-colors py-2 px-10 text-xl font-bold rounded" onClick={handleBack}>Back</button>
    </div>
  )
}

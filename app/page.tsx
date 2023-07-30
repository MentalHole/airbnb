import Modal from "./components/Modals/Modal";
import Navbar from "./components/Navbar/Navbar";

export default function Home() {
  return (
    
    <div className="black text-2x1">
      <Modal isOpen />
      <Navbar />
    </div>
  )
}

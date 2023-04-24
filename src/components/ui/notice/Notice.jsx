import { useAuthCtx } from "../../../store/AuthProvider";



function Notice() {
  const { notice,ui } = useAuthCtx();
  const { show, type, msg } = notice;





const handleClose = () => ui.closeAlert();

return show ? (
  <div className="flex justify-center   ">
  <div className={`${type} rounded-xl  text-black flex items-center `}>
    <p className="msg">{msg}</p>
    <button className="border-none" onClick={handleClose}>
      &times;
    </button>
  </div>
</div>
) : null;
}

export default Notice;

import { useAuthCtx } from "../../../store/AuthProvider";


function Notice() {
  const { notice,ui } = useAuthCtx();
  const { show, msg } = notice;





const handleClose = () => ui.closeAlert();

return show ? (
  <div style={{ background: "green" }}>
    <p className="msg">{msg}</p>
    <button className="close-button" onClick={handleClose}>
      &times;
    </button>
  </div>
) : null;
}

export default Notice;

import { useAuthCtx } from "../../../store/AuthProvider";


function Notice() {
  const { notice } = useAuthCtx();
  const { show, msg } = notice;



  return show ? (
    <div style={{ background: "green" }}>
      <p>{msg}</p>
    </div>
  ) : null;
}

export default Notice;

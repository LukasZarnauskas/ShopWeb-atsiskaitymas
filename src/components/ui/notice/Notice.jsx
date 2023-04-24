import { useAuthCtx } from "../../../store/AuthProvider";



function Notice() {
  const { notice } = useAuthCtx();
  const { show, type, msg } = notice;







return show ? (
  <div className="flex justify-center   ">
  <div className={`${type} rounded-xl  text-black flex items-center `}>
    <p className="msg">{msg}</p>
  </div>
</div>
) : null;
}

export default Notice;

import "./Btn.css";

function Modal(props) {
  let validBtn = false
  if (props.type === "submit") {
    validBtn = true
  }
  return <button type={props.type} onClick={props.onClick} className={`${validBtn ? "btn" : "cancelBtn"}`}>{props.value}</button>;
}

export default Modal;

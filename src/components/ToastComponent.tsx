import { Button, Toast, ToastBody } from "reactstrap";

const ToastComponent = (props: {
  isOpen: boolean;
  setIsOpen: (isOpen: boolean) => void;
  message: string;
  color: string;
}) => {
  return (
    <Toast
      className={`fixed-bottom text-white ms-auto me-2 mb-2 bg-${props.color}`}
      isOpen={props.isOpen}
    >
      <ToastBody className="d-flex justify-content-between">
        {props.message}
        <Button
          className="btn-close-white"
          close
          onClick={() => props.setIsOpen(false)}
        ></Button>
      </ToastBody>
    </Toast>
  );
};

export default ToastComponent;

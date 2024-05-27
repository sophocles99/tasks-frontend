import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCircle, faCircleCheck } from "@fortawesome/free-regular-svg-icons";
import { faRotate } from "@fortawesome/free-solid-svg-icons";

type StatusIconProps = {
  status: Status;
};

const StatusIcon = ({ status }: StatusIconProps) => {
  const statusIcons = {
    done: faCircleCheck,
    "in progress": faRotate,
    "not done": faCircle,
  };

  return (
    <div>
      <FontAwesomeIcon icon={statusIcons[status]} />
    </div>
  );
};

export default StatusIcon;

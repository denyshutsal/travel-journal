import "./Date.scss";

function Date(props) {
  return (
    <div className="date card__date">
      <span>
        <time dateTime={props.machineStartDate} title={props.machineStartDate}>
          {props.startDate}
        </time>
      </span>
      -
      <span>
        <time dateTime={props.machineEndDate} title={props.machineEndDate}>
          {props.endDate}
        </time>
      </span>
    </div>
  );
}

export default Date;

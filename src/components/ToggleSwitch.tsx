import React, { FC } from "react";
import './togglestyle.scss'

type ToggleProps = {
  id: string,
  Text: string,
  onChange?: (e: any) => void,
  defaultChecked?: boolean,
  Small?: boolean,
  currentValue?: boolean,
}

const ToggleSWitch: FC<ToggleProps> = ({ id = 'toggle-switch', Text, ...rest }) => <div
    className={"toggle-switch" + (rest.Small ? "small-switch" : "")}
  >
    <input
      type="checkbox"
      className="toggle-switch-checkbox"
      id={id}
      checked={rest.currentValue}
      defaultChecked
      onChange={rest.onChange}
    />
    {id ? (
      <label className="toggle-switch-label" htmlFor={id}>
        <span
          className="toggle-switch-inner"
        />
        <span
          className="toggle-switch-switch"
        />
      </label>
    ) : null}

  </div>

export default ToggleSWitch;
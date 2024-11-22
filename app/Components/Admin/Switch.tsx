

'use client'


import React, { useState } from "react";

import style from "@/app/style/Components/Switcher.module.scss"


// import "@/app/style/Components/Switcher.css"

function ToggleSwitch() {

  const [isToggled, setIsToggled] = useState(false);
  const onToggle = () => setIsToggled(!isToggled);

  return (

    <label className={style['Switcher']}>
        <input type="checkbox" checked={isToggled} onChange={onToggle} />

        <span className={style['Switcher__switch']} />
    </label>

    // <label className="toggle-switch">
    //   <input type="checkbox" checked={isToggled} onChange={onToggle} />
    //   <span className="switch" />
    // </label>
  );
}
export default ToggleSwitch;
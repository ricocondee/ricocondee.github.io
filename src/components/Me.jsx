import React from 'react'
import mySelf from "../assets/me.jpg";
import mySelfNBG from "../assets/meNoBG.png";

const Me = () => {
  return (
    <div className="myself">
    <img src={mySelf} alt="Emanuel Rico Conde" />
    <img src={mySelfNBG} className="to__border" alt="" />
  </div>
  )
}

export default Me
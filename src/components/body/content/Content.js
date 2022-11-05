import React from "react";
import ContentLayout from "../../../layout/ContentLayout";
import Newmoviescroll from "../scrollmoviemenu/Newmoviescroll";
import Newtvserialscroll from "../scrollmoviemenu/Newtvserialscroll";
import Nowplaying from "../scrollmoviemenu/Nowplaying";
import TrendingMovie from "../scrollmoviemenu/TrendingMovie";

const Content = () => {
  return (
    <div className="font-raleway mt-5 py-4 gap-20" >
      <Newmoviescroll />
      <Newtvserialscroll />
      <Nowplaying/>
      <TrendingMovie />
    </div>
  );
};

export default Content;

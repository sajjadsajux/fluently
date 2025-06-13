import React, { useEffect } from "react";

const SetTitle = (title) => {
  useEffect(() => {
    if (title) {
      document.title = title;
    }
  }, [title]);
};

export default SetTitle;

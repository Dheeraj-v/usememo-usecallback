import React from "react";
function Footer() {
  console.log("re-rendered footercontent");
  return <div>Footer content</div>;
}
export default React.memo(Footer);

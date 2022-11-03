import React from "react";

function withLogging(WrappedComponet) {
  return class extends React.Component {

    hanleClick = this.hanleClick.bind(this);
    
    hanleClick() {
      console.log("дополнительная логика");
    }
    render() {
      return <WrappedComponet onClick={this.hanleClick} />;
    }
  };
}

export default withLogging;

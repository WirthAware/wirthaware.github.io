import React, { Component } from 'react';
import Typist from 'react-typist';

class RestartingTypist extends Component {
  state = {
    typing: true,
    index: 0,
  }

  done = () => {
    this.setState({ typing: false }, () => {
      setTimeout(() => this.setState({ typing: true, index: this.state.index + 1 }), this.props.timeout || 1200);
    });
  }
  render() {
    const {timeout, content, ...props} = this.props;
    const children  = content(this.state.index);
    return this.state.typing ?
      <Typist {...props} onTypingDone={this.done}>
        {children}
      </Typist>
      : <span>{children}</span>;
  }
}

export default RestartingTypist;

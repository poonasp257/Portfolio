import React, { Component } from 'react';
import PropTypes from 'prop-types'
import './Menu.css'
import { redBright } from 'ansi-colors';

class BurgerMenu extends Component {
  constructor(props) {
    super(props);
    this.state = {
      menuOpen: false,
    }
  }

  handleMenuClick() {
    this.setState({ menuOpen: !this.state.menuOpen });
  }

  handleLinkClick() {
    this.setState({ menuOpen: false });
  }

  render() {
    const styles =
    {
      button: {
        position: 'sticky',
        top: 10,
        left: 0,
        right: 10,
        float: 'right',
        zIndex: '99',
        opacity: 0.9,
        display:'flex',
        color: 'gray',
      },
      footer: {
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        width: '100vw',
        height: '100vh',
      },
    }
    const menu = ['Home.', 'Project.', 'About Me.']
    const menuItems = menu.map((val, index) => {
      return (
        <MenuItem
          key={index}
          delay={`${index * 0.1}s`}
          onClick={() => { this.handleLinkClick(); }}>{val}</MenuItem>)
    });

    return (
      <div>
        <div style={styles.button}>
          <MenuButton open={this.state.menuOpen} onClick={() => this.handleMenuClick()} color='gray' />
        </div>
        <Menu open={this.state.menuOpen}>
          {menuItems}
        </Menu>
        <div style={styles.footer}>
          <Footer open={this.state.menuOpen} />        
        </div>
      </div>
    )
  }
}

/* MenuItem.jsx*/
class MenuItem extends Component {
  constructor(props) {
    super(props);
    this.state = {
      hover: false,
    }
  }

  handleHover() {
    this.setState({ hover: !this.state.hover });
  }

  render() {
    const styles = {
      container: {
        opacity: 0,
        animation: '1s appear forwards',
        animationDelay: this.props.delay,
      },
      menuItem: {
        fontFamily: `'Open Sans', sans-serif`,
        fontSize: '1.2rem',
        padding: '1rem 0',
        margin: '0 5%',
        cursor: 'pointer',
        color: this.state.hover ? '#87cefa' : 'gray',
        transition: 'color 0.2s ease-in-out',
        animation: '0.5s slideIn forwards',
        animationDelay: this.props.delay,

      },
      line: {
        width: '90%',
        height: '1px',
        background: 'gray',
        margin: '0 auto',
        animation: '0.5s shrink forwards',
        animationDelay: this.props.delay,

      }
    }
    return (
      <div style={styles.container}>
        <div
          style={styles.menuItem}
          onMouseEnter={() => { this.handleHover(); }}
          onMouseLeave={() => { this.handleHover(); }}
          onClick={this.props.onClick}
        >
          {this.props.children}
        </div>
        <div style={styles.line} />
      </div>
    )
  }
}

/* Menu.jsx */
class Menu extends Component {
  constructor(props) {
    super(props);
    this.state = {
      open: this.props.open,
    }
  }

  componentWillReceiveProps(nextProps) {
    if (nextProps.open !== this.state.open) {
      this.setState({ open: nextProps.open });
    }
  }

  render() {
    const styles = {
      container: {
        position: 'absolute',
        top: 0,
        left: 0,
        height: this.state.open ? '100%' : 0,
        width: '100vw',
        display: 'flex',
        flexDirection: 'column',
        background: 'white',
        opacity: 0.95,
        color: '#fafafa',
        transition: 'height 0.3s ease',
        zIndex: 2,
      },
      menuList: {
        paddingTop: '3rem',
      }
    }
    return (
      <div style={styles.container}>
        {
          this.state.open ?
            <div style={styles.menuList}>
              {this.props.children}
            </div> : null
        }
      </div>
    )
  }
}

/* MenuButton.jsx */
class MenuButton extends Component {
  constructor(props) {
    super(props);
    this.state = {
      open: this.props.open,
      color: this.props.color ? this.props.color : 'gray',
    }
  }

  componentWillReceiveProps(nextProps) {
    if (nextProps.open !== this.state.open) {
      this.setState({ open: nextProps.open });
    }
  }

  handleClick() {
    this.setState({ open: !this.state.open });
  }

  render() {
    const styles = {
      container: {
        height: '32px',
        width: '32px',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        cursor: 'pointer',
        padding: '4px',
      },
      line: {
        height: '2px',
        width: '40px',
        background: this.state.color,
        transition: 'all 0.5s ease',
      },
      lineTop: {
        transform: this.state.open ? 'translateX(1px) rotate(45deg)' : 'none',
        transformOrigin: 'top left',
        marginBottom: '10px',
      },
      lineMiddle: {
        opacity: this.state.open ? 0 : 1,
        transform: this.state.open ? 'translateX(-16px)' : 'none',
      },
      lineBottom: {
        transform: this.state.open ? 'translateY(4px) rotate(-45deg)' : 'none',
        transformOrigin: 'top left',
        marginTop: '10px',
      },
    }
    return (
      <div style={styles.container}
        onClick={this.props.onClick ? this.props.onClick :
          () => { this.handleClick(); }}>
        <div style={{ ...styles.line, ...styles.lineTop }} />
        <div style={{ ...styles.line, ...styles.lineMiddle }} />
        <div style={{ ...styles.line, ...styles.lineBottom }} />
      </div>
    )
  }
}

/* Footer.jsx */
class Footer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      open: this.props.open,
    }
  }

  render() {
    const styles = {
      footer: {
        position: 'absolute',
        bottom: 0,
        width: '100%',
        marginTop: '1rem',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        color: 'black',
      },
      line: {
        height: '1px',
        width: '90%',
        background: 'black',
      },
      text: {
        padding: '0.5rem',
      },
      social: {
        width: '1.6em',
        height: '1.6em',
      }
    }

    return (
      <div style={styles.footer}>
        <div style={styles.line}></div>
        <ul className="social">
          <li className="social__icon_1">
            <a href="https://github.com/poonasp257" target="_blank"/>
          </li>
          <li className="social__icon_2">
            <a href="https://github.com/poonasp257" target="_blank"/>
          </li>
        </ul>
      </div>
    )
  }
}

export default BurgerMenu;
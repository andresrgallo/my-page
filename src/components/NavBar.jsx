import React, { Component } from 'react';
import M from 'materialize-css/dist/js/materialize.min.js';
import styled from 'styled-components';

const Nav = styled.nav`
	background-color: transparent;
  box-shadow: 0 0;
  display: flex;
  justify-content: center;
  letter-spacing: 2.5px;
  .sidenav-trigger {
    color: orange
    text-align: left;
    width: 100%;
  }
  .hide-on-med-and-down {
    min-height: 48px;
    width: auto;
    text-align: center
		li a {
      font-size: 12px
      color: white;
      &:hover {
        color: orange
      }
		}
  }
	}
`;

class NavBar extends Component {
	componentDidMount() {
		var elems = document.querySelectorAll('.sidenav');
		var instance = M.Sidenav.init(elems, {
			edge: 'left',
			inDuration: 250
		});
	}

	render() {
		return (
			<React.Fragment>
				<Nav className="nav-wrapper">
					<a href="#" data-target="mobile-demo" className="sidenav-trigger">
						<i className="material-icons">menu</i>
					</a>
					<ul className="hide-on-med-and-down">
						<li>
							<a href="#header">INTRO</a>
						</li>
						<li>
							<a href="#about">ABOUT</a>
						</li>
						<li>
							<a href="#resume">RESUME</a>
						</li>
						<li>
							<a href="#portfolio">MY WORKS</a>
						</li>
						<li>
							<a href="#contact">CONTACT</a>
						</li>
					</ul>
				</Nav>

				<ul className="sidenav" id="mobile-demo">
					<li>
						<a href="#header">INTRO</a>
					</li>
					<li>
						<a href="#about">ABOUT</a>
					</li>
					<li>
						<a href="#resume">RESUME</a>
					</li>
					<li>
						<a href="#portfolio">WORKS</a>
					</li>
					<li>
						<a href="#contact">CONTACT</a>
					</li>
				</ul>
			</React.Fragment>
		);
	}
}

export default NavBar;

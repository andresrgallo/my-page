import React, { Component } from 'react';
import M from 'materialize-css/dist/js/materialize.min.js';
import styled from 'styled-components';

const Nav = styled.nav`

  background-color: transparent;
  box-shadow: 0 0;
  display: flex;
	justify-content: center;
	position: fixed;
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
	margin-top: 0;
	
`;

const Ul = styled.ul`
	background-color: #333333a8;
	li a {
		color: white;
	}
	@media only screen and (max-width: 600px) {
		width: 150px;
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
				<Nav id="navbar">
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

				<Ul className="sidenav" id="mobile-demo">
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
				</Ul>
			</React.Fragment>
		);
	}
}

export default NavBar;

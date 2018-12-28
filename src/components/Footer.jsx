import React from 'react';
import styled from 'styled-components';

import { SocialIcons } from './Header';
import { Chevron } from './Header';

const Footer = () => {
	const FooterSection = styled.footer`
		padding: 48px 0;
		background-color: #101010;
		text-align: center;
	`;
	return (
		<React.Fragment>
			<FooterSection>
				<div className="row">
					<div>
						<Chevron title="Back to Top" href="#header">
							<i class="fas fa-chevron-circle-up" />
						</Chevron>
						<SocialIcons style={{ padding: 0 }}>
							<li>
								<a
									href="https://www.facebook.com/andres.r.gallo"
									target="_blank"
									rel="noopener noreferrer"
								>
									<i className=" fab fa-facebook-f" />
								</a>
							</li>
							<li>
								<a
									href="https://www.linkedin.com/in/andres-rodriguez-9a2bab15b/"
									target="_blank"
									rel="noopener noreferrer"
								>
									<i className="fab fa-linkedin-in" />
								</a>
							</li>
							<li>
								<a
									href="https://github.com/andresrgallo"
									target="_blank"
									rel="noopener noreferrer"
								>
									<i className="fab fa-github" />
								</a>
							</li>
						</SocialIcons>
					</div>
				</div>
			</FooterSection>
		</React.Fragment>
	);
};

export default Footer;

import React, { Component } from 'react';
import './ExperienceCard.css';

class ExperienceCard extends Component {
    render() {
		const experience = this.props.experience;
		const theme = this.props.theme;
        return (
					<div
						className="experience-card"
						style={{ border: `1.5px solid ${experience["color"]}`}}
					>
						<div className="experience-card-logo-div">
							<img
								className="experience-card-logo"
								src={require(`../../assests/images/${experience["logo_path"]}`)}
								alt=""
							/>
						</div>
						<div className="experience-card-body-div">
							<div className="experience-card-header-div">
								<div className="experience-card-heading-left">
									<h3 className="experience-card-title" style={{ color: theme.secondaryText }}>{experience["title"]}</h3>
									<p className="experience-card-company" style={{ color: theme.secondaryText }}>
                                        <a href={experience["company_url"]} target="_blank" rel="noopener noreferrer">
										    {experience["company"]}
                                        </a>
									</p>
								</div>
                                <div className="experience-card-heading-right">
                                    <p className="experience-card-duration" style={{ color: theme.yolo1 }}>{experience["duration"]}</p>
                                    <p className="experience-card-location" style={{ color: theme.yolo1 }}>{experience["location"]}</p>
                                </div>
							</div>
                            <p className="experience-card-description" style={{ color: theme.secondaryText }}>{experience["description"]}</p>
						</div>
					</div>
				);
    }
}

export default ExperienceCard;
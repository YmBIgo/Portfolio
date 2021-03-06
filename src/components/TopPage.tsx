import React, {useEffect, useState} from "react"
import {useSelector, useDispatch} from "react-redux"
import axios from "axios"

import {Link} from "react-router-dom"

import {RootState} from "../type/root_reducer"
import {change_language} from "../redux/action/language"

import "../css/top_page.css"

import {BsCodeSlash,
		BsVectorPen} from "react-icons/bs"
import {FaLanguage} from "react-icons/fa"
import {SiMinutemailer} from "react-icons/si"

type Props = {}

const TopPage: React.FC<Props> = () => {

	const dispatch = useDispatch()
	const language = useSelector((state: RootState) => state.language)

	const [name, setName] = useState<string>("")
	const [email, setEmail] = useState<string>("")
	const [content, setContent] = useState<string>("")
	const [privacyAgreement, setPrivacyAgreement] = useState<boolean>(true)

	const email_regex = /^[A-Za-z0-9]{1}[A-Za-z0-9_.-]*@{1}[A-Za-z0-9_.-]+.[A-Za-z0-9]+$/;

	const onClickInqueryBtn = () => {
		const error_message = document.getElementById("top-page-inquery-error-message") as HTMLDivElement
		const success_message = document.getElementById("top-page-inquery-success-message") as HTMLDivElement
		success_message.style.display = "none"
		if (!email_regex.test(email)) {
			error_message.style.display = "block"
			return
		}
		if (!name || !content || !privacyAgreement) {
			error_message.style.display = "block"
			return
		}
		error_message.style.display = "none"
		// 
		success_message.style.display = "block"
		const cloud_function_url = "https://asia-northeast1-mercurial-snow-332407.cloudfunctions.net/PortfolioEmailSendgrid/emailPortfolio?name=" + name + "&content=" + content + "&email=" + email
		axios.get(cloud_function_url)
		setName("")
		setContent("")
		setEmail("")
		setPrivacyAgreement(false)
	}

	useEffect(() => {
		// const smooth_title = document.getElementsByClassName("smooth-header2-title")[0] as HTMLHeadingElement
		// setTimeout(() => {
		// 	smooth_title.classList.add("is-animated")
		// }, 1000)
		const name_title = document.getElementsByClassName("top-page-profile-my-name")[0] as HTMLHeadingElement
		setTimeout(() => {
			name_title.classList.add("is-animated")
		}, 200)
		// const portfolio_title = document.getElementsByClassName("top-page-portfolio")[0] as HTMLHeadingElement
		// window.addEventListener('scroll', function(){
		// 	const scroll = window.scrollY
		// 	const height = window.innerHeight
		// 	const pos = portfolio_title.getBoundingClientRect().top + scroll
		// 	if (scroll > pos - height + 100 ) {
		// 		portfolio_title.classList.add('is_animated')
		// 	}
		// })
	}, [])

	return(
		<>
			<div className="top-page-header">
				<div className="top-page-header-black-section slidein anim is-animated">
				</div>
			</div>
			<div className="top-page-header2">
				<div className="top-page-header2-title">
{/*					<h1 className="smooth-header2-title">
						Welcome to my site.
					</h1>*/}
					<div className="top-page-header2-img">
					</div>
				</div>
			</div>
			<div className="top-page-profile">
				<div className="top-page-profile1">
					<div className="row">
						<div className="col-sm-3">
							<img
								src="https://storage.googleapis.com/kurihara_kazuya_image/profile/kazuya_kurihara2.jpg"
								className="top-page-profile1-img"
							/>
						</div>
						<div className="col-sm-9">
							<div className="top-page-profile1-detail">
								<h1 className="top-page-profile-my-name">
									????????????
									{"???"}
									<small>Kazuya Kurihara</small>
								</h1>
								<div className="top-page-profile1-job">
									?????????????????????????????????????????????
								</div>
								<p>
									<span className="top-page-profile1-email">Email???coffeecupjp@gmail.com</span>
									<br/>
									???????????????(?????????7???)????????????
								</p>
							</div>
						</div>
					</div>
				</div>
				<div className="top-page-profile2">
					<div className="top-page-profile2-detail">
						1996????????????????????????
						<br/>
						????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????9???????????????????????????
						<br/>
						??????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????
					</div>
					<div className="top-page-profile-2-detail-btn">
						<Link
							to="/profile"
							className="btn btn-secondary profile-btn"
						>
							???????????????????????????
						</Link>
					</div>
				</div>
			</div>
			<div className="top-page-concept">
				<div className="row">
					<div className="col-12 col-sm-6">
						<div className="top-page-concept-left">
							<hr className="left-hr" />
							<h3>
								Policy
								<br />
								<small>
									{ language.language == "ja" && <>??????</> }
									{ language.language == "en" && <>Policy</> }
									{ language.language == "zh_CN" && <>??????</> }
								</small>
							</h3>
							<div className="row">
								<div className="col-1">
									<div className="top-page-concept-left-left-kakko">
									???
									</div>
								</div>
								<div className="col-10">
									<p className="top-page-concept-left-content">
										{ language.language == "ja" && <>???????????? "??????"???"??????"????????????</>}
										{ language.language == "en" && <>Make customers impressed and satisfied.</>}
										{ language.language == "zh_CN" && <>??????????????? "??????" ??? "??????"???</>}
									</p>
								</div>
								<div className="col-1">
									<div className="top-page-concept-left-right-kakko">
										???
									</div>
								</div>
							</div>
						</div>
					</div>
					<div className="col-12 col-sm-6">
						<div className="top-page-concept-right">
							<p className="top-page-concept-right-content">
								{ language.language == "ja" &&
									<>
									???????????????????????????????????????????????????????????????
									<br />
									??????????????? ???????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????
									<br />
									???????????????????????????????????????????????????????????????????????????????????????????????????????????????
									<br />
									??????????????????????????????????????????????????????????????????????????????????????????
									<br />
									</>
								}
								{ language.language == "en" &&
									<>
									Internet keeps growing.
									<br />
									In these environment, I contribute to customer's business by adopting new ideas and methods without sticking to existing frameworks.
									<br />
									Our mission is to provide high quality services for customers's satisfaction.
									<br />
									From now on, I become one can support customer's growth.
									<br />
									</>
								}
								{ language.language == "zh_CN" &&
									<>
									?????????????????????????????????
									<br />
									??????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????
									<br />
									???????????????????????????????????????????????????????????????????????????
									<br />
									???????????????????????????????????????????????????
									<br />
									</>
								}
								{/*
								<button
									className="btn btn-secondary"
									style={{marginTop: "20px"}}
								>
									??????????????????
								</button>
								*/}
							</p>
						</div>
					</div>
				</div>
			</div>
			<div className="top-page-service" id="about">
				<h3 className="text-center">
					{ language.language == "ja" && <>????????????</>}
					{ language.language == "en" && <>Service</>}
					{ language.language == "zh_CN" && <>??????</>}
				</h3>
				<hr className="hr-small" />
				<div className="row">
					{/*
					<div className="col-sm-4 col-12">
						<h5 className="text-center">
							{ language.language == "ja" && <>??????????????????</>}
							{ language.language == "en" && <>Coding</>}
							{ language.language == "zh_CN" && <>??????</>}
							<br />
							<small>Coding</small>
						</h5>
						<p className="top-page-service-detail-text text-left">
							<BsCodeSlash size={100}/>
							<div className="top-page-service-detail-text-inner">
								{ language.language == "ja" &&
									<>
									????????????Ruby on Rails???React (Redux)???GraphQL (Apollo)???Express???Python(Django)???Firebase ?????????????????????????????????
									<br/>
									<a href="https://github.com/YmBIgo" target="_blank">Github??????????????????</a>???
									<br/>
									Github ?????????<a href="https://github.com/YmBIgo/Twitter_Clone_React" target="_blank">?????????????????????</a>???<a href="https://github.com/YmBIgo/React_Chat_Clone" target="_blank">LINE</a> ??????????????????????????????????????????
									</>
								}
								{ language.language == "en" &&
									<>
									Studing Ruby on Rails???React (Redux)???GraphQL (Apollo)???Express???Python(Django)???Firebase by myself.
									<br/>
									<a href="https://github.com/YmBIgo" target="_blank">Github is here</a>.
									<br/>
									There are <a href="https://github.com/YmBIgo/Twitter_Clone_React" target="_blank">Simple Twitter</a> and <a href="https://github.com/YmBIgo/React_Chat_Clone" target="_blank">Chat App</a> Portfolios on Github website.
									</>
								}
								{ language.language == "zh_CN" &&
									<>
									????????? Ruby on Rails???React (Redux)???GraphQL (Apollo)???Express???Python(Django)???Firebase ?????????
									<br/>
									<a href="https://github.com/YmBIgo" target="_blank">Github?????????</a>???
									<br/>
									Github ?????????<a href="https://github.com/YmBIgo/Twitter_Clone_React" target="_blank">???????????????app</a>???<a href="https://github.com/YmBIgo/React_Chat_Clone" target="_blank">LINE app</a> ??????????????????
									</>
								}
							</div>
						</p>
					</div>
					*/}
					<div className="col-sm-4 col-12">
						<h5 className="text-center">
							{ language.language == "ja" && <>????????????</>}
							{ language.language == "en" && <>Design</>}
							{ language.language == "zh_CN" && <>??????</>}
							<br />
							<small>Design</small>
						</h5>
						{ language.language == "ja" &&
							<p className="top-page-service-detail-text text-left">
								<BsVectorPen size={100}/>
								<div className="top-page-service-detail-text-inner">
									<a href="https://storageapi-334003.de.r.appspot.com" target="_blank">??????????????????????????????</a>???????????????????????????????????????
									???????????????????????????????????????????????????????????????????????????
									<br/>
									?????????????????????????????? Bootstrap ??????????????????????????????Material UI ????????????????????????????????????
								</div>
							</p>
						}
						{ language.language == "en" &&
							<p className="top-page-service-detail-text text-left">
								<BsVectorPen size={100}/>
								<div className="top-page-service-detail-text-inner">
									Have exprience to develop <a href="https://storageapi-334003.de.r.appspot.com" target="_blank">Hotel's homepage</a>.
									Designing pages by copying other websites.
									<br/>
									I usually use Bootstrap, but have interest in Material UI or other libraries.
								</div>
							</p>
						}
						{ language.language == "zh_CN" &&
							<p className="top-page-service-detail-text text-left">
								<BsVectorPen size={100}/>
								<div className="top-page-service-detail-text-inner">
									???????????????<a href="https://storageapi-334003.de.r.appspot.com" target="_blank">???????????????</a>???????????????????????????
									???????????????????????????????????????
									<br/>
									???????????? Bootstrap????????????????????? Material UI ?????????
								</div>
							</p>
						}
					</div>
					<div className="col-sm-4 col-12">
						<h5 className="text-center">
							{ language.language == "ja" && <>?????????</>}
							{ language.language == "en" && <>Language</>}
							{ language.language == "zh_CN" && <>??????</>}
							<br/>
							<small>Language</small>
						</h5>
						{ language.language == "ja" &&
							<p className="top-page-service-detail-text">
								<FaLanguage size={100}/>
								<br/>
								<div className="top-page-service-detail-text-inner">
									??????????????????????????????(TOEIC850???)????????????(??????????????????6???)??????????????????
									?????????????????????????????????????????????????????????????????????
								</div>
							</p>
						}
						{ language.language == "en" &&
							<p className="top-page-service-detail-text">
								<FaLanguage size={100}/>
								<br/>
								<div className="top-page-service-detail-text-inner">
									Besides Japanese, can use English(TOEIC850 Points), Chinese(HSK6???).
									I have experience to develop multi language homepage.
								</div>
							</p>
						}
						{ language.language == "zh_CN" &&
							<p className="top-page-service-detail-text">
								<FaLanguage size={100}/>
								<br/>
								<div className="top-page-service-detail-text-inner">
									????????????????????????????????????(TOEIC850???)?????????(??????????????????6???)???
									???????????????????????????????????????????????????????????????
								</div>
							</p>
						}
					</div>
					<div className="col-sm-4 col-12">
						<h5 className="text-center">
							{ language.language == "ja" && <>????????????????????????</>}
							{ language.language == "en" && <>Consulting</>}
							{ language.language == "zh_CN" && <>??????</>}
							<br/>
							<small>Consulting</small>
						</h5>
						{ language.language == "ja" &&
							<p className="top-page-service-detail-text">
								<SiMinutemailer size={100}/>
								<br/>
								<div className="top-page-service-detail-text-inner">
									????????????????????????????????????????????????????????????
								</div>
							</p>
						}
						{ language.language == "en" &&
							<p className="top-page-service-detail-text">
								<SiMinutemailer size={100}/>
								<br/>
								<div className="top-page-service-detail-text-inner">
									I can support your vision to advance to Japanese / Taiwanese / Chinese market.
								</div>
							</p>
						}
						{ language.language == "zh_CN" &&
							<p className="top-page-service-detail-text">
								<SiMinutemailer size={100}/>
								<br/>
								<div className="top-page-service-detail-text-inner">
									???????????????????????????/??????/????????????????????????
								</div>
							</p>
						}
					</div>
				</div>
			</div>
			<div className="top-page-inquery">
				<h3 className="text-center top-page-inquery-title">
					{ language.language == "ja" && <>??????????????????</>}
					{ language.language == "en" && <>Contact</>}
					{ language.language == "zh_CN" && <>??????</>}
				</h3>
				<p className="text-left top-page-inquery-title-text">
					{ language.language == "ja" &&
						<>
							????????????????????????????????????????????????????????????????????????????????????????????????????????????
							<br/>
							???????????????????????????????????????????????????????????????????????????2??????????????????????????????????????????????????????
						</>
					}
					{ language.language == "en" &&
						<>
							Thank you for seeing our homepage.
							<br/>
							If you have questions or requests, please contact. I will contact you within 2 business days.
						</>
					}
					{ language.language == "zh_CN" &&
						<>
							???????????????????????????
							<br/>
							???????????????????????????????????????????????????????????????????????????????????????
						</>
					}
					<div
						className="alert alert-danger"
						style={{marginTop: "20px", display: "none"}}
						id="top-page-inquery-error-message"
					>
						{ language.language == "ja" && <>???????????????????????????????????????</>}
						{ language.language == "en" && <>Input correct information.</>}
						{ language.language == "zh_CN" && <>????????????????????????</>}
					</div>
					<div
						className="alert alert-success"
						style={{marginTop: "20px", display: "none"}}
						id="top-page-inquery-success-message"
					>
						{ language.language == "ja" && <>???????????????????????????????????????????????????????????????</>}
						{ language.language == "en" && <>Thank you. Successfully send contents.</>}
						{ language.language == "zh_CN" && <>???????????????????????????</>}
					</div>
					<div className="top-page-inquery-form-content">
						<label>
							{ language.language == "ja" && <>?????????</>}
							{ language.language == "en" && <>Name</>}
							{ language.language == "zh_CN" && <>??????</>}
						</label>
						<input
							type="text"
							className="form-control top-page-inquery-input"
							onChange={(e) => setName(e.target.value)}
							value={name}
						/>
						<label>
							{ language.language == "ja" && <>?????????????????????</>}
							{ language.language == "en" && <>Email</>}
							{ language.language == "zh_CN" && <>????????????</>}
						</label>
						<input
							type="text"
							className="form-control top-page-inquery-input"
							onChange={(e) => setEmail(e.target.value)}
							value={email}
						/>
						<label>
							{ language.language == "ja" && <>??????</>}
							{ language.language == "en" && <>Content</>}
							{ language.language == "zh_CN" && <>??????</>}
						</label>
						<textarea
							className="form-control top-page-inquery-textarea"
							onChange={(e) => setContent(e.target.value)}
							value={content}
						>
						</textarea>
						<br />
						{/*
						<p>
							<input
								type="checkbox"
								checked={privacyAgreement}
								onChange={(e) => setPrivacyAgreement(!privacyAgreement)}
							/>
							{ language.language == "ja" && <>??????????????????????????????????????????????????????????????????</>}
							{ language.language == "en" && <>Agree on Privacy Policy and send.</>}
							{ language.language == "zh_CN" && <>???????????????????????????</>}
						</p>
						*/}
						<button
							className="btn btn-danger btn-sm"
							onClick={() => onClickInqueryBtn()}
						>
							{ language.language == "ja" && <>????????????</>}
							{ language.language == "en" && <>Send</>}
							{ language.language == "zh_CN" && <>??????</>}
						</button>
					</div>
				</p>
			</div>
			{/*
			<div className="top-page-portfolio" id="works">
				<h3 className="text-center top-page-portfolio-title">
					{ language.language == "ja" && <>?????????????????????</>}
					{ language.language == "en" && <>Portfolio</>}
					{ language.language == "zh_CN" && <>??????</>}
				</h3>
				<hr className="hr-small" />
				<div className="row">
					<div className="col-sm-4 col-12">
						<h4 className="portfolio-title">
							{ language.language == "ja" && <>??????????????????????????????</>}
							{ language.language == "en" && <>Hotel homepage</>}
							{ language.language == "zh_CN" && <>???????????????</>}
						</h4>
						<img src="https://storage.googleapis.com/kazuya_portfolio/image/megufuji_portfolio.png"
							className="portfolio-image"
						/>
						<p className="portfolio-text">
							<a href="https://storageapi-334003.de.r.appspot.com" target="_blank">???????????????????????????</a>
						</p>
					</div>
					<div className="col-sm-4 col-12">
						<h4 className="portfolio-title">
							{ language.language == "ja" && <>????????????</>}
							{ language.language == "en" && <>Editor</>}
							{ language.language == "zh_CN" && <>????????????</>}
						</h4>
						<img src="https://storage.googleapis.com/kazuya_portfolio/image/editor_portfolio.png"
							className="portfolio-image"
						/>
						<p className="portfolio-text">
							<a href="https://www.youtube.com/watch?v=50887YGo4LI" target="_blank">Youtube??????????????????</a>
							<br />
							<a href="https://github.com/YmBIgo/EditorSampleForMac" target="_blank">Github????????????</a>
							<br />
						</p>
					</div>
					<div className="col-sm-4 col-12">
						<h4 className="portfolio-title">
							{ language.language == "ja" && <>?????????????????????</>}
							{ language.language == "en" && <>Chat App</>}
							{ language.language == "zh_CN" && <>??????App</>}
						</h4>
						<img src="https://storage.googleapis.com/kazuya_portfolio/image/line_portfolio.png"
							className="portfolio-image"
						/>
						<p className="portfolio-text">
							<a href="https://www.youtube.com/watch?v=gDGg7s7PoOA" target="_blank">Youtube??????????????????</a>
							<br />
							<a href="https://github.com/YmBIgo/React_Chat_Clone" target="_blank">Github????????????</a>
						</p>
					</div>
					<div className="col-sm-4 col-12">
						<h4 className="portfolio-title">
							{ language.language == "ja" && <>Twitter ????????????</>}
							{ language.language == "en" && <>Simple Twitter</>}
							{ language.language == "zh_CN" && <>????????????App</>}
						</h4>
						<img src="https://storage.googleapis.com/kazuya_portfolio/image/twitter_portfolio.png"
							className="portfolio-image"
						/>
						<p className="portfolio-text">
							<a href="https://www.youtube.com/watch?v=L80DRYbZll4" target="_blank">Youtube??????????????????</a>
							<br />
							<a href="https://github.com/YmBIgo/Twitter_Clone_React" target="_blank">Github????????????</a>
						</p>
					</div>
				</div>
			</div>
			*/}
		</>
	)
}

export default TopPage
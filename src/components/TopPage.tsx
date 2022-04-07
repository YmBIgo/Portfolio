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
									栗原和也
									{"　"}
									<small>Kazuya Kurihara</small>
								</h1>
								<div className="top-page-profile1-job">
									担当：プログラミング・デザイン
								</div>
								<p>
									<span className="top-page-profile1-email">Email：coffeecupjp@gmail.com</span>
									<br/>
									趣味：囲碁(ネット7段)・山登り
								</p>
							</div>
						</div>
					</div>
				</div>
				<div className="top-page-profile2">
					<div className="top-page-profile2-detail">
						1996年、東京生まれ。
						<br/>
						中学校から慶應中等部に入学し、大学まで慶應。高校の時は、囲碁で個人神奈川県優勝・団体全国9位の結果を残した。
						<br/>
						新卒でコンサル会社に入社するも、半年で退社。その後は、プログラミングの受託や実家のホテルの手伝いをしている。
					</div>
					<div className="top-page-profile-2-detail-btn">
						<Link
							to="/profile"
							className="btn btn-secondary w-25 profile-btn"
						>
							プロフィールを見る
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
									{ language.language == "ja" && <>理念</> }
									{ language.language == "en" && <>Policy</> }
									{ language.language == "zh_CN" && <>理想</> }
								</small>
							</h3>
							<div className="row">
								<div className="col-1">
									<div className="top-page-concept-left-left-kakko">
									「
									</div>
								</div>
								<div className="col-10">
									<p className="top-page-concept-left-content">
										{ language.language == "ja" && <>お客様に "感動"と"満足"を与える</>}
										{ language.language == "en" && <>Make customers impressed and satisfied.</>}
										{ language.language == "zh_CN" && <>让客户留下 "感动" 和 "满意"。</>}
									</p>
								</div>
								<div className="col-1">
									<div className="top-page-concept-left-right-kakko">
										」
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
									インターネットは、ますます成長しています。
									<br />
									そんな中で 私は、既存の枠組みに囚われず、新しい発想や方法を取り入れて、お客様の事業の発展に貢献していきます。
									<br />
									私の使命は、お客様の満足のために、質の高いサービスを提供し続けることです。
									<br />
									これからも、お客様の成長を支えていける存在になっていきます。
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
									网络网在继续的成长着。
									<br />
									在这个环境下，不要被固执现存的构造，采用新的想法跟方法，我要对客户的事业的发展贡献。
									<br />
									我的使命是，为了客户的满足，一直提供着高质的服务。
									<br />
									从此以来，我要成为可以贡献的人才。
									<br />
									</>
								}
								{/*
								<button
									className="btn btn-secondary"
									style={{marginTop: "20px"}}
								>
									詳細はこちら
								</button>
								*/}
							</p>
						</div>
					</div>
				</div>
			</div>
			<div className="top-page-service" id="about">
				<h3 className="text-center">
					{ language.language == "ja" && <>サービス</>}
					{ language.language == "en" && <>Service</>}
					{ language.language == "zh_CN" && <>服务</>}
				</h3>
				<hr className="hr-small" />
				<div className="row">
					{/*
					<div className="col-sm-4 col-12">
						<h5 className="text-center">
							{ language.language == "ja" && <>コーディング</>}
							{ language.language == "en" && <>Coding</>}
							{ language.language == "zh_CN" && <>程序</>}
							<br />
							<small>Coding</small>
						</h5>
						<p className="top-page-service-detail-text text-left">
							<BsCodeSlash size={100}/>
							<div className="top-page-service-detail-text-inner">
								{ language.language == "ja" &&
									<>
									独学で、Ruby on Rails・React (Redux)・GraphQL (Apollo)・Express・Python(Django)・Firebase などを習っております。
									<br/>
									<a href="https://github.com/YmBIgo" target="_blank">Githubはこちらから</a>。
									<br/>
									Github には、<a href="https://github.com/YmBIgo/Twitter_Clone_React" target="_blank">簡易ツイッター</a>や<a href="https://github.com/YmBIgo/React_Chat_Clone" target="_blank">LINE</a> のポートフォリオがあります。
									</>
								}
								{ language.language == "en" &&
									<>
									Studing Ruby on Rails・React (Redux)・GraphQL (Apollo)・Express・Python(Django)・Firebase by myself.
									<br/>
									<a href="https://github.com/YmBIgo" target="_blank">Github is here</a>.
									<br/>
									There are <a href="https://github.com/YmBIgo/Twitter_Clone_React" target="_blank">Simple Twitter</a> and <a href="https://github.com/YmBIgo/React_Chat_Clone" target="_blank">Chat App</a> Portfolios on Github website.
									</>
								}
								{ language.language == "zh_CN" &&
									<>
									在自学 Ruby on Rails・React (Redux)・GraphQL (Apollo)・Express・Python(Django)・Firebase 等等。
									<br/>
									<a href="https://github.com/YmBIgo" target="_blank">Github在这里</a>。
									<br/>
									Github 上有，<a href="https://github.com/YmBIgo/Twitter_Clone_React" target="_blank">简易的推文app</a>，<a href="https://github.com/YmBIgo/React_Chat_Clone" target="_blank">LINE app</a> 等等的作品。
									</>
								}
							</div>
						</p>
					</div>
					*/}
					<div className="col-sm-4 col-12">
						<h5 className="text-center">
							{ language.language == "ja" && <>デザイン</>}
							{ language.language == "en" && <>Design</>}
							{ language.language == "zh_CN" && <>设计</>}
							<br />
							<small>Design</small>
						</h5>
						{ language.language == "ja" &&
							<p className="top-page-service-detail-text text-left">
								<BsVectorPen size={100}/>
								<div className="top-page-service-detail-text-inner">
									<a href="https://storageapi-334003.de.r.appspot.com" target="_blank">ホテルのホームページ</a>など開発の経験があります。
									似たようなサイトを参考にしてデザインをしています。
									<br/>
									プログラミングは主に Bootstrap を使っておりますが、Material UI などにも興味があります。
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
									有经验设计<a href="https://storageapi-334003.de.r.appspot.com" target="_blank">旅馆的网页</a>等等的开发的经验。
									参考同样的网页，设计内容。
									<br/>
									我常常用 Bootstrap，但是有兴趣用 Material UI 等等。
								</div>
							</p>
						}
					</div>
					<div className="col-sm-4 col-12">
						<h5 className="text-center">
							{ language.language == "ja" && <>外国語</>}
							{ language.language == "en" && <>Language</>}
							{ language.language == "zh_CN" && <>外语</>}
							<br/>
							<small>Language</small>
						</h5>
						{ language.language == "ja" &&
							<p className="top-page-service-detail-text">
								<FaLanguage size={100}/>
								<br/>
								<div className="top-page-service-detail-text-inner">
									日本語以外にも、英語(TOEIC850点)・中国語(漢語水平考試6級)が使えます。
									この実績から、多言語開発をした経験もあります。
								</div>
							</p>
						}
						{ language.language == "en" &&
							<p className="top-page-service-detail-text">
								<FaLanguage size={100}/>
								<br/>
								<div className="top-page-service-detail-text-inner">
									Besides Japanese, can use English(TOEIC850 Points), Chinese(HSK6級).
									I have experience to develop multi language homepage.
								</div>
							</p>
						}
						{ language.language == "zh_CN" &&
							<p className="top-page-service-detail-text">
								<FaLanguage size={100}/>
								<br/>
								<div className="top-page-service-detail-text-inner">
									除了日文以外，可以用英文(TOEIC850分)・中文(汉语水平考试6级)。
									因为这样，在网页开发作了汉语跟英文的网页。
								</div>
							</p>
						}
					</div>
					<div className="col-sm-4 col-12">
						<h5 className="text-center">
							{ language.language == "ja" && <>コンサルティング</>}
							{ language.language == "en" && <>Consulting</>}
							{ language.language == "zh_CN" && <>咨询</>}
							<br/>
							<small>Consulting</small>
						</h5>
						{ language.language == "ja" &&
							<p className="top-page-service-detail-text">
								<SiMinutemailer size={100}/>
								<br/>
								<div className="top-page-service-detail-text-inner">
									日本や台湾・中国への進出提案ができます。
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
									我可以提出进入日本/台湾/中国市场的建议。
								</div>
							</p>
						}
					</div>
				</div>
			</div>
			<div className="top-page-inquery">
				<h3 className="text-center top-page-inquery-title">
					{ language.language == "ja" && <>お問い合わせ</>}
					{ language.language == "en" && <>Contact</>}
					{ language.language == "zh_CN" && <>联络</>}
				</h3>
				<p className="text-left top-page-inquery-title-text">
					{ language.language == "ja" &&
						<>
							この度は、私のホームページにご興味を持っていただきありがとうございます。
							<br/>
							ご依頼・ご質問など、お気軽にお問い合わせください。2営業日以内に折り返し連絡いたします。
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
							感谢你看我的网站。
							<br/>
							如果你有问题或者要求，联络我把。我会两个工作天内会回信的。
						</>
					}
					<div
						className="alert alert-danger"
						style={{marginTop: "20px", display: "none"}}
						id="top-page-inquery-error-message"
					>
						{ language.language == "ja" && <>正しい情報を入力して下さい</>}
						{ language.language == "en" && <>Input correct information.</>}
						{ language.language == "zh_CN" && <>输入真确的资料。</>}
					</div>
					<div
						className="alert alert-success"
						style={{marginTop: "20px", display: "none"}}
						id="top-page-inquery-success-message"
					>
						{ language.language == "ja" && <>ありがとうございます。送信に成功しました。</>}
						{ language.language == "en" && <>Thank you. Successfully send contents.</>}
						{ language.language == "zh_CN" && <>谢谢。成功发信了。</>}
					</div>
					<div className="top-page-inquery-form-content">
						<label>
							{ language.language == "ja" && <>お名前</>}
							{ language.language == "en" && <>Name</>}
							{ language.language == "zh_CN" && <>名字</>}
						</label>
						<input
							type="text"
							className="form-control top-page-inquery-input"
							onChange={(e) => setName(e.target.value)}
							value={name}
						/>
						<label>
							{ language.language == "ja" && <>メールアドレス</>}
							{ language.language == "en" && <>Email</>}
							{ language.language == "zh_CN" && <>电子邮箱</>}
						</label>
						<input
							type="text"
							className="form-control top-page-inquery-input"
							onChange={(e) => setEmail(e.target.value)}
							value={email}
						/>
						<label>
							{ language.language == "ja" && <>内容</>}
							{ language.language == "en" && <>Content</>}
							{ language.language == "zh_CN" && <>内容</>}
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
							{ language.language == "ja" && <>プライバシーポリシーに同意の上、送信します。</>}
							{ language.language == "en" && <>Agree on Privacy Policy and send.</>}
							{ language.language == "zh_CN" && <>同意隐私政策并发送</>}
						</p>
						*/}
						<button
							className="btn btn-danger btn-sm"
							onClick={() => onClickInqueryBtn()}
						>
							{ language.language == "ja" && <>送信する</>}
							{ language.language == "en" && <>Send</>}
							{ language.language == "zh_CN" && <>发信</>}
						</button>
					</div>
				</p>
			</div>
			{/*
			<div className="top-page-portfolio" id="works">
				<h3 className="text-center top-page-portfolio-title">
					{ language.language == "ja" && <>ポートフォリオ</>}
					{ language.language == "en" && <>Portfolio</>}
					{ language.language == "zh_CN" && <>作品</>}
				</h3>
				<hr className="hr-small" />
				<div className="row">
					<div className="col-sm-4 col-12">
						<h4 className="portfolio-title">
							{ language.language == "ja" && <>ホテルのホームページ</>}
							{ language.language == "en" && <>Hotel homepage</>}
							{ language.language == "zh_CN" && <>旅馆的网页</>}
						</h4>
						<img src="https://storage.googleapis.com/kazuya_portfolio/image/megufuji_portfolio.png"
							className="portfolio-image"
						/>
						<p className="portfolio-text">
							<a href="https://storageapi-334003.de.r.appspot.com" target="_blank">ページはこちらから</a>
						</p>
					</div>
					<div className="col-sm-4 col-12">
						<h4 className="portfolio-title">
							{ language.language == "ja" && <>エディタ</>}
							{ language.language == "en" && <>Editor</>}
							{ language.language == "zh_CN" && <>编辑程序</>}
						</h4>
						<img src="https://storage.googleapis.com/kazuya_portfolio/image/editor_portfolio.png"
							className="portfolio-image"
						/>
						<p className="portfolio-text">
							<a href="https://www.youtube.com/watch?v=50887YGo4LI" target="_blank">Youtubeはこちらから</a>
							<br />
							<a href="https://github.com/YmBIgo/EditorSampleForMac" target="_blank">Githubはこちら</a>
							<br />
						</p>
					</div>
					<div className="col-sm-4 col-12">
						<h4 className="portfolio-title">
							{ language.language == "ja" && <>チャットアプリ</>}
							{ language.language == "en" && <>Chat App</>}
							{ language.language == "zh_CN" && <>聊天App</>}
						</h4>
						<img src="https://storage.googleapis.com/kazuya_portfolio/image/line_portfolio.png"
							className="portfolio-image"
						/>
						<p className="portfolio-text">
							<a href="https://www.youtube.com/watch?v=gDGg7s7PoOA" target="_blank">Youtubeはこちらから</a>
							<br />
							<a href="https://github.com/YmBIgo/React_Chat_Clone" target="_blank">Githubはこちら</a>
						</p>
					</div>
					<div className="col-sm-4 col-12">
						<h4 className="portfolio-title">
							{ language.language == "ja" && <>Twitter クローン</>}
							{ language.language == "en" && <>Simple Twitter</>}
							{ language.language == "zh_CN" && <>简易推文App</>}
						</h4>
						<img src="https://storage.googleapis.com/kazuya_portfolio/image/twitter_portfolio.png"
							className="portfolio-image"
						/>
						<p className="portfolio-text">
							<a href="https://www.youtube.com/watch?v=L80DRYbZll4" target="_blank">Youtubeはこちらから</a>
							<br />
							<a href="https://github.com/YmBIgo/Twitter_Clone_React" target="_blank">Githubはこちら</a>
						</p>
					</div>
				</div>
			</div>
			*/}
		</>
	)
}

export default TopPage
import React, {useEffect} from "react"
import {useSelector, useDispatch} from "react-redux"

import {Link} from "react-router-dom"

import {RootState} from "../type/root_reducer"
import {change_language} from "../redux/action/language"

import {Navbar, Nav} from "react-bootstrap"
import {Container} from "react-bootstrap"
import "../css/top_page.css"

import {BsCodeSlash,
		BsVectorPen} from "react-icons/bs"
import {FaLanguage} from "react-icons/fa"

type Props = {}

const TopPage: React.FC<Props> = () => {

	const dispatch = useDispatch()
	const language = useSelector((state: RootState) => state.language)

	useEffect(() => {
		const smooth_title = document.getElementsByClassName("smooth-header2-title")[0] as HTMLHeadingElement
		setTimeout(() => {
			smooth_title.classList.add("is-animated")
		}, 1000)
	}, [])

	return(
		<>
			<div className="top-page-header">
				<div className="top-page-header-black-section slidein anim is-animated">
				</div>
			</div>
			<div className="top-page-navbar">
				<Navbar className="fixed-top" style={{backgroundColor: "white"}}>
				  <Container>
				    <Navbar.Brand href="#home">Kazuya Kurihara</Navbar.Brand>
				    <Navbar.Toggle />
				    <Nav className="justify-content-end">
				      <Nav.Link href="#about">
				        About
				      </Nav.Link>
				      <Nav.Link href="#works">	
				      	Works
				      </Nav.Link>
				      <Nav.Link onClick={() => dispatch(change_language("ja"))}>
				      	日本語
				      </Nav.Link>
				      <Nav.Link onClick={() => dispatch(change_language("en"))}>
				      	English
				      </Nav.Link>
				      <Nav.Link onClick={() => dispatch(change_language("zh_CN"))}>
				      	漢語
				      </Nav.Link>
				    </Nav>
				  </Container>
				</Navbar>
			</div>
			<div className="top-page-header2">
				<div className="top-page-header2-title">
					<h1 className="smooth-header2-title">
						Kazuya Kurihara
					</h1>
					<div className="top-page-header2-img">
					</div>
				</div>
			</div>
			<div className="top-page-concept">
				<div className="row">
					<div className="col-6">
						<div className="top-page-concept-left">
							<hr className="left-hr" />
							<h3>
								Policy
								<br />
								<small>理念</small>
							</h3>
							<div className="row">
								<div className="col-1">
									「
								</div>
								<div className="col-10">
									<p className="top-page-concept-left-content">
										テストテストテストテストテスト
									</p>
								</div>
								<div className="col-1">
									<div style={{marginTop:"100px"}}>
										」
									</div>
								</div>
							</div>
						</div>
					</div>
					<div className="col-6">
						<div className="top-page-concept-right">
							<p className="top-page-concept-right-content">
								テストテストテストテストテスト
								<br />
								テストテストテストテストテストテスト
								<br />
								テストテストテストテストテストテストテストテストテスト
								<br />
								テストテストテストテストテストテストテストテストテスト
								<br />
								テストテストテストテストテストテストテストテストテスト
								<br />
								テストテストテストテストテストテストテストテストテスト
							</p>
							<button className="btn btn-secondary">
								詳細はこちら
							</button>
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
					<div className="col-4">
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
					<div className="col-4">
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
					<div className="col-4">
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
									この経験から、<a href="https://storageapi-334003.de.r.appspot.com" target="_blank">ホテルのホームページ</a>の多言語開発をしたこともあります。
								</div>
							</p>
						}
						{ language.language == "en" &&
							<p className="top-page-service-detail-text">
								<FaLanguage size={100}/>
								<br/>
								<div className="top-page-service-detail-text-inner">
									Besides Japanese, can use English(TOEIC850 Points), Chinese(HSK6級).
									I have experience to develop <a href="https://storageapi-334003.de.r.appspot.com" target="_blank">multi language homepage (Hotel's homepage)</a>.
								</div>
							</p>
						}
						{ language.language == "zh_CN" &&
							<p className="top-page-service-detail-text">
								<FaLanguage size={100}/>
								<br/>
								<div className="top-page-service-detail-text-inner">
									除了日文以外，可以用英文(TOEIC850分)・汉语(汉语水平考试6级)。
									因为这样，在<a href="https://storageapi-334003.de.r.appspot.com" target="_blank">旅馆的网页</a>的开发作了汉语跟英文的网页。
								</div>
							</p>
						}
					</div>
				</div>
			</div>
			<div className="top-page-portfolio" id="works">
				<h3 className="text-center">
					{ language.language == "ja" && <>ポートフォリオ</>}
					{ language.language == "en" && <>Portfolio</>}
					{ language.language == "zh_CN" && <>作品</>}
				</h3>
				<hr className="hr-small" />
				<div className="row">
					<div className="col-4">
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
					<div className="col-4">
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
					<div className="col-4">
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
					<div className="col-4">
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
		</>
	)
}

export default TopPage
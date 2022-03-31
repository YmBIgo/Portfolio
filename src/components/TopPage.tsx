import React from "react"

import {Link} from "react-router-dom"

import {Navbar, Nav} from "react-bootstrap"
import {Container} from "react-bootstrap"
import "../css/top_page.css"

import {BsCodeSlash,
		BsVectorPen} from "react-icons/bs"
import {FaLanguage} from "react-icons/fa"

type Props = {}

const TopPage: React.FC<Props> = () => {
	return(
		<>
			<div className="top-page-header">
				<Navbar>
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
				    </Nav>
				  </Container>
				</Navbar>
			</div>
			<div className="top-page-service" id="about">
				<h3 className="text-center">
					サービス
				</h3>
				<hr className="hr-small" />
				<div className="row">
					<div className="col-4">
						<h5 className="text-center">
							コーディング
							<br />
							<small>Coding</small>
						</h5>
						<p className="top-page-service-detail-text text-left">
							<BsCodeSlash size={100}/>
							<div className="top-page-service-detail-text-inner">
								独学で、Ruby on Rails・React (Redux)・GraphQL (Apollo)・Express・Python(Django)・Firebase などを習っております。
								<br/>
								<a href="https://github.com/YmBIgo" target="_blank">Githubはこちらから</a>。
								<br/>
								Github には、<a href="https://github.com/YmBIgo/Twitter_Clone_React" target="_blank">簡易ツイッター</a>や<a href="https://github.com/YmBIgo/React_Chat_Clone" target="_blank">LINE</a> のポートフォリオがあります。
							</div>
						</p>
					</div>
					<div className="col-4">
						<h5 className="text-center">
							デザイン
							<br />
							<small>Design</small>
						</h5>
						<p className="top-page-service-detail-text text-left">
							<BsVectorPen size={100}/>
							<div className="top-page-service-detail-text-inner">
								<a href="https://storageapi-334003.de.r.appspot.com" target="_blank">ホテルのホームページ</a>など開発の経験があります。
								似たようなサイトを参考にしてデザインをしています。
								<br/>
								プログラミングは主に Bootstrap を使っておりますが、Material UI などにも興味があります。
							</div>
						</p>
					</div>
					<div className="col-4">
						<h5 className="text-center">
							外国語
							<br/>
							<small>Language</small>
						</h5>
						<p className="top-page-service-detail-text">
							<FaLanguage size={100}/>
							<br/>
							<div className="top-page-service-detail-text-inner">
								日本語以外にも、英語(TOEIC850点)・中国語(漢語水平考試6級)が使えます。
								この経験から、<a href="https://storageapi-334003.de.r.appspot.com" target="_blank">ホテルのホームページ</a>の多言語開発をしたこともあります。
							</div>
						</p>
					</div>
				</div>
			</div>
			<div className="top-page-portfolio" id="works">
				<h3 className="text-center">
					ポートフォリオ
				</h3>
				<hr className="hr-small" />
				<div className="row">
					<div className="col-4">
						<h4 className="portfolio-title">
							ホテルのホームページ
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
							Editor
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
							チャットアプリ
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
							Twitter クローン
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
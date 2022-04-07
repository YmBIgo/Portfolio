import React from "react"

import "../css/profile.css"

import {FaBirthdayCake} from "react-icons/fa"
import {FaLocationArrow} from "react-icons/fa"
import {FiMail} from "react-icons/fi"
import {AiOutlineGlobal} from "react-icons/ai"

type Props = {}

const Profile: React.FC<Props> = () => {
	return(
		<>
			<div className="profile-page-main-area">

				{/* Card1 */}
				<div className="profile-page-card1">
					<div className="row">
						<div className="col-4">
							<div className="profile-page-card1-left">
								<img
									src="https://storage.googleapis.com/kurihara_kazuya_image/profile/kazuya_kurihara2.jpg"
									className="profile-page-card1-img"
								/>
								<h1 className="profile-page-card1-title">
									栗原 和也
								</h1>
								<p className="profile-page-card1-job">
									<small>プログラマー</small>
								</p>
								<div className="profile-page-card1-info">
									<p>
										<FaBirthdayCake/>{"　"}1996/2/18
										<br/>
										<FaLocationArrow/>{"　"}山梨県富士吉田市
										<br/>
										<FiMail/>{"　"}coffeecupjp@gmail.com
										<br/>
										<AiOutlineGlobal/>{"　"}
										<a href="https://mercurial-snow-332407.de.r.appspot.com" target="_blank" className="profile-page-card1-info-url">
											<span>個人ページ</span>
										</a>
									</p>
								</div>
							</div>
						</div>
						<div className="col-7">
							<div className="profile-page-card1-center">
								<p className="profile-page-card1-self-intro">
									<div className="profile-page-card1-self-intro-title">
										About
									</div>
									東京出身、慶應中等部・慶應高校・慶應大学卒。
									高校の時は、囲碁で個人神奈川県優勝・団体全国9位の結果を残した。
									<br/>
									大学在学中から、アリババ株式会社・訪問販売の営業のインターンを経て、コンサル会社に新卒で入社。
									コンサル会社を退社後は、趣味のプログラミングを始め、Ruby on Rails・React・Node.js・GraphQL・Django などでの開発を個人で行う。
									<br/>
									現在は、<a href="https://megufuji.de.r.appspot.com" target="_blank">ホテルのホームページ</a>などホームページの制作を行なっている。
								</p>
							</div>
						</div>
						<div className="col-1">
						</div>
					</div>
				</div>

				{/* Card2 */}
				<div className="profile-page-card2">
					<div className="profile-page-card2-work">
						<h3 className="profile-page-card2-work-title">
							Work Experience
						</h3>
						<div className="profile-page-card2-work-content-area">
							<h5 className="profile-page-card2-work-content-area-title">
								株式会社アリババ
								<br/>
								<small>インターン</small>
								<br/>
								<small style={{fontWeight: "300"}}>2017/11 〜 2018/9</small>
							</h5>
							<p className="profile-page-card2-work-content-area-content">
								インターンとして、マーケットリサーチ ・ Python を使ったアリババのページの情報自動収集 や Excelのマクロの開発 に取り組んだ。
							</p>
							<br />
							<h5 className="profile-page-card2-work-content-area-title">
								株式会社ステップハウス
								<br/>
								<small>インターン</small>
								<br/>
								<small style={{fontWeight: "300"}}>2018/9 〜 2019/3</small>
							</h5>
							<p className="profile-page-card2-work-content-area-content">
								インターンとして、価格300万円する環境商材を販売する訪問販売のアポ取りを行なった。結果、半年で 1500万円程度の売上に貢献するアポを取れた。
							</p>
							<br/>
							<h5 className="profile-page-card2-work-content-area-title">
								コンサル会社
								<br/>
								<small>正社員</small>
								<br/>
								<small style={{fontWeight: "300"}}>2019/1 〜 2019/7</small>
							</h5>
							<p className="profile-page-card2-work-content-area-content">
								大手企業の人事戦略をコンサルする部署に配属。
							</p>
							<br/>
							<h5 className="profile-page-card2-work-content-area-title">
								実家のホテル
								<br/>
								<small>正社員</small>
								<br/>
								<small style={{fontWeight: "300"}}>2021/9 〜 現在</small>
							</h5>
							<p className="profile-page-card2-work-content-area-content">
								実家が運営する富士吉田にあるホテルで、ホテルの運営に関わる仕事を行う。
							</p>
						</div>
						<br/>
						<h3 className="profile-page-card2-work-title">
							Education
						</h3>
						<div className="profile-page-card2-education-content-area">
							<h5 className="profile-page-card2-education-content-area-title">
								慶應大学
								<br/>
								<small>総合政策学部総合政策学科</small>
								<br/>
								<small style={{fontWeight: "300"}}>2014/4 〜 2018/9</small>
							</h5>
							<p className="profile-page-card2-education-content-area-content">
								Ruby on Rails 始め、プログラミングを学び、自分でプログラミングの教材を作ったりした。
							</p>
							<br/>
							<h5 className="profile-page-card2-education-content-area-title">
								慶應高校
								<br/>
								<small style={{fontWeight: "300"}}>2011/3 〜 2014/3</small>
							</h5>
							<p className="profile-page-card2-education-content-area-content">
								囲碁で個人団体神奈川県優勝・団体全国9位の結果を残した。
							</p>
							<br/>
							<h5 className="profile-page-card2-education-content-area-title">
								慶應中等部
								<br/>
								<small style={{fontWeight: "300"}}>2008/3 〜 2011/3</small>
							</h5>
							<p className="profile-page-card2-education-content-area-content">
								山岳部で、山登りをしていた。
							</p>
						</div>
						<br/>
						<h3 className="profile-page-card2-portfolio-title">
							Works
						</h3>
						<div className="profile-page-card2-portfolio-content-area">
							<img
								src="https://storage.googleapis.com/megufuji_images/TopPageImageGallery/MeguFuji_Logo.jpeg"
								className="profile-page-card2-portfolio-content-area-img"
							/>
							<h5 className="profile-page-card2-portfolio-content-area-title">
								<a
									href="https://megufuji.de.r.appspot.com"
									target="_blank"
									style={{color:"black", textDecoration: "none"}}
								>
									MeguFuji
								</a>
							</h5>
						</div>
					</div>
				</div>
			</div>
		</>
	)
}

export default Profile
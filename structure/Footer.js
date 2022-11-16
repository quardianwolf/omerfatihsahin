import React from 'react'

const Footer = ( { iletisimData }) => {
  return (
    <>
    <footer id="Footer" className="clearfix">
			<div className="container">
				<div className="row">
					<>
					<div className="col-12">
						<hr className="no_line" style={{margin:"0 auto 100px"}}/> </div>
					<div className="col-md-4 text-center">						
						<h4>SOSYAL MEDYA</h4>				
						<hr className="no_line" style={{margin:" 0 auto 10px auto"}}/>
						<a href="https://www.instagram.com/dromerfatih/" > Instagram<i className="icon-right-thin"></i> <i className="icon-instagram"></i> </a>
						<a href="https://www.facebook.com/uzmdromerfatihsahin/"><br/> Facebook <i className="icon-right-thin"></i> <i className="icon-facebook"></i></a>					
						</div>
					<div className="col-md-4 text-center">						
						<div className="image_frame image_item no_link scale-with-grid aligncenter no_border">
							<div className="image_wrapper"><img className="scale-with-grid footer-logo" src='/assets/images/omersticky.png' alt="logo" width="94" height="182"/> </div>
						</div>
					</div>
					<div className="col-md-4 text-center">
						<h4>İLETİŞİM BİLGİLERİ</h4>
						<hr className="no_line" style={{margin:" 0 auto 10px auto"}}/>
						<p> Harbiye Mah Maçka Cd No: 1 Feza Aprt Kat:4, 34367 Şişli/İstanbul</p>
						<hr className="no_line" style={{margin:" 0 auto 10px auto"}}/>
							
					</div>
					<div className="col-12">
						<hr className="no_line" style={{margin:"0 auto 80px"}}/> </div>
						</>
				</div>
			</div>
			<div className="footer_copy">
				<div className="container">
					<div className="column one"> <a id="back_to_top" className="footer_button" href=""><i className="icon-up-open-big"></i></a>
						<div className="copyright"> © 2022 - Ömer Fatih Şahin</div>
					</div>
				</div>
			</div>
		</footer>
		<div id="Side_slide" className="right dark" data-width="250">
		<div className="close-wrapper"> <a href="#" className="close"><i className="icon-cancel-fine"></i></a> </div>
		<div className="extras">
			<div className="extras-wrapper"></div>
		</div>
		<div className="menu_wrapper"></div>
	</div>
	<div id="body_overlay"></div>
  </>
  )
}


export const getServerSideProps = async () => {


	const iletisimQuery = '*[_type == "iletisim"]';
	const iletisimData = await client.fetch(iletisimQuery);



	return {
		props: { iletisimData }
	}
}


export default Footer
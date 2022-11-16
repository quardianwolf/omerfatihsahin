import React, { useState } from 'react'
import { client, urlFor } from '../lib/client';

import { Footer } from '../structure';

const iletisim = ({ iletisimData }) => {

	const [formData, setFormData] = useState({ name: '', email: '', message: '', subject: '', });
	const [isFormSubmitted, setIsFormSubmitted] = useState(false);
	const [loading, setLoading] = useState(false);

	const { name, email, message, subject } = formData;

	const handleChangeInput = (e) => {
		const { name, value } = e.target;
		setFormData({ ...formData, [name]: value });
	};

	const handleSubmit = () => {
		setLoading(true);

		const contact = {
			_type: 'contact',
			name: formData.name,
			email: formData.email,
			message: formData.message,
			subject: formData.subject,
		};

		client.create(contact)
			.then(() => {
				setLoading(false);
				setIsFormSubmitted(true);
			})
			.catch((err) => console.log(err));
	};

	return (
		<>
			<div className="section iletisimSayfa" >
				<div className="mfn-drag-helper placeholder-wrap"></div>
			</div>
			<div className="section mcb-section no-margin-v equal-height-wrap bg-cover" style={{ backgroundColor: "#1e232b", paddingTop: "107px" }}>
				<div className="container">
					<div className="row">
						{iletisimData.map((iletisimm, i) => {
							return (
								<div className="col-md-4" style={{ padding: "80px 5% 65px", backgroundColor: "#e0dad2", zIndex: "99" }} key={i}>
									<div className="mcb-wrap-inner" >
										<div className="column mcb-column one column_column">
											<div className="column_attr clearfix mobile_align_center">
												<h4>{iletisimm.address}</h4>
												<hr className="no_line" style={{ margin: "0 auto 40px auto" }} />
												<h3>{iletisimm.phone_1}</h3>
												<hr className="no_line" style={{ margin: "0 auto 40px auto" }} />
												<h4>Hemen Randevu Al!</h4>
												<hr className="no_line" style={{ margin: "0 auto 20px auto" }} />
											</div>
											<hr className="no_line" style={{ margin: "0 auto 20px auto" }} />
											<div className="iletisimIcon">
												<a href={iletisimm.instagram}><i className="icon-instagram iletisiminsta"></i> </a>
												<a href={iletisimm.facebook}><i className="icon-facebook iletisimface"></i></a>
											</div>
										</div>
									</div>
								</div>

							)
						})}
						{iletisimData.map((iletisimm, i) => {
							return (
								<div className="col-md-4" >
									<img key={i} src={urlFor(iletisimm.image[0])} style={{ position: "absolute", left: "-100px", width: "553px", height: "645px" }} />
									<hr className="no_line" style={{ margin: "0 auto 300px auto" }} />
								</div>
							)
						})}
						<div className="col-md-4" style={{ padding: "40px 40px 25px", backgroundColor: "#e0dad2" }}>
							<div className="mobile_align_center">
								<h3>RANDEVU AL</h3>
								<hr className="no_line" style={{ margin: "0 auto 20px auto" }} />
								<div id="contactWrapper">
									<div id="contactform">
										{!isFormSubmitted ?
											<form method="post" id="reused_form">
												<div className="column one">
													<input value={name} placeholder="İsminiz" type="text" name="name" required="" maxLength="50" onChange={handleChangeInput} /></div>
												<div className="column one">
													<input value={email} placeholder="E-posta Adresiniz" type="email" name="email" required="" maxLength="50" onChange={handleChangeInput} /> </div>
												<div className="column one">
													<input value={subject} placeholder="Konu" type="text" name="subject" maxLength="50" onChange={handleChangeInput} /> </div>
												<div className="column one">
													<textarea value={message} placeholder="Mesaj" name="message" rows="10" maxLength="6000" required="" onChange={handleChangeInput}></textarea>
												</div>
												<div className="column one">
													<button className="button-primary" id="submit" onClick={handleSubmit} type="submit">{!loading ? 'Mesaj Gonder' : 'Gonderiliyor...'}</button>
												</div>
											</form>
											:
											<div id="success_message" style={{ display: "none" }}>
												<h3>MESAJINIZ BIZE ULASTI!</h3>
												<p>We will get back to you soon.</p>
											</div>}
										<div id="error_message" style={{ width: "100%", height: "100%", display: "none" }}>
											<h3>Error</h3> Sorry there was an error sending your form.</div>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
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


export default iletisim
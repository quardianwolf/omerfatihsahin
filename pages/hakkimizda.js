import React from 'react'
import { client, urlFor } from '../lib/client'
import PortableText from '@sanity/block-content-to-react'

const hakkimizda = ({hakkimdaData}) => {
	
	
	return (
		<div id="Content">
			{hakkimdaData.map((hakkimda, i)=>(
			<div className="section mcb-section no-margin-h no-margin-v equal-height hakkimizdaSayfa" key={i}>
				<div className="container">
					<div className="row">
						<div className="col-md-6">
							<div className="image_frame image_item no_link scale-with-grid no_border">
								{hakkimda.image.map((img,i)=>{return( 
								<div className="image_wrapper"><img key={i} className="scale-with-grid hakkimdaresim" src={urlFor(img&&img)} alt="church3-about-pic3" width={1200} height={500}/> </div>
								)})}
								</div>
						</div>
						<div className="col-md-6">
							<div className="column_attr clearfix mobile_align_center" style={{padding:"0 3%"}}>
								<h2>{hakkimda.name}</h2>
								<hr className="no_line" style={{margin: "0 auto 30px auto"}}/>
                                {hakkimda.content.map((con, i)=>{
									console.log(con)
									return(
									<>
									{con.children.map((child, i)=>{
										return(
											<>
											{child.text}
											</>
										)
									})}
									</>
								)})}
                                <hr className="no_line" style={{margin:" 0 auto 20px auto"}}/>
							</div>
						</div>
						<div className="col-12">
							<hr className="no_line" style={{margin: "0 auto 80px auto"}}/> </div>
					</div>
				</div>
			</div>
			))}
		</div>
	)
}

export const getServerSideProps = async () => {

  
	const hakkimdaQuery = '*[_type == "hakkimda"]';
	const hakkimdaData = await client.fetch(hakkimdaQuery);

	return {
	  props: {  hakkimdaData }
	}
  }


export default hakkimizda
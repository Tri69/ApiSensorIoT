import {SchemaSensorTanah} from "./dataBase/connect.js";

export const getModel = async (req, res) => {
	const getData = await SchemaSensorTanah.find();
	
	res.json({
		statusCode : 200,
		massage : "Success, get All Data",
		data : getData
	})
}

export const postModel = async (req, res, next) => {
	const {presentase, kondisi, date} = req.body;
	try{
		const postData = new SchemaSensorTanah({presentase, kondisi, date})
		const condition = await postData.save();
		if(!condition){
			res.json({
				statusCode : 301,
				massage : "gagal Upload"
			})
		} 
		res.json({
			statusCode : 201,
			massage: "Succes, Created",
			data : {
				presentase : presentase,
				kondisi  : kondisi,
				date : date,
			}
		})
		next()
	}catch {
		res.json("Gga;")
	}
}
import {SchemaSensorTanah} from "./dataBase/connect.js";

export const getModel = async (req, res) => {
	const getData = await SchemaSensorTanah.find();
	
	res.json({
		statusCode : 200,
		massage : "Success, get All Data",
		data : getData
	})
}
function getDates() {
	let dates = new Date();
	var hours = dates.getHours();
	var minitus = dates.getMinutes();
	var second = dates.getSeconds();
	var day = dates.getDate();
	var month = dates.getMonth();
	var year = dates.getFullYear();
	
	const datesFull = `${hours}:${minitus}:${second} , ${day}-${month}-${year}`;
	return datesFull;
}
export const postModel = async (req, res, next) => {
	const {presentase, kondisi} = req.body;
	const b = getDates();
	const newObject = {
		presentase : presentase,
		kondisi : kondisi,
		date : b
	}
	
		const postData = new SchemaSensorTanah(newObject);
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
				date : b,
			}
		})
		next()
	
}
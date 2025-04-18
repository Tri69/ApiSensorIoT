import mongoose, { Schema } from "mongoose";

const URI_MONGODB_ATLAS = "mongodb+srv://ilhamtauhandoyo:1oBNKnvfmJHTotql@data1.tec7t.mongodb.net/DataIoT?retryWrites=true&w=majority&appName=Data1"
mongoose.connect(URI_MONGODB_ATLAS);
const db = mongoose.connection;

db.once('open', ()=> {
	console.log('connect')
})

const SchemaData = mongoose.Schema({
	presentase : {
		type : String,
		required : true
	},
	kondisi : {
		type : String,
		required : true
	},
	date : {
		type : String,
		required : true
	}
})
export const SchemaSensorTanah = mongoose.model("SensorTanah", SchemaData);
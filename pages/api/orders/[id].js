import dbConnect from "../../../util/mongo"
import Order from "../../../models/Order";

const handle = async (req, res) =>{
    const {method, query:{id}} = req;

    if(method === "GET"){
        try{
            const order = await Order.findById(id);
            res.status(200).json(order);
        }catch(err){
            res.status(500).json(err);
        }
    }
    if(method === "PUT"){}
    if(method === "DELETE"){}
};



export default handle;
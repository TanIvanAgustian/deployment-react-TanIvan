import { useParams } from "react-router"
import { getComment } from "../../FetchData/StoreManagement"

export default function Comment(){
    const {id} = useParams()
    
    const {data} = getComment()

    const item = data?.Comment.filter((element)=> element.product_id == id)

    return <>
    <h1>Comment :</h1>
    {item?.map((post) =>(
        <div class="card">
            <div className="row">
                <div class="card-body col-2">
                    <h5 class="card-title">Username</h5>
                    <p class="card-text">Komentar</p>
                </div>
                <div class="card-body col-10">
                    <h5 class="card-title">:   {post.name}</h5>
                    <p class="card-text">:   {post.comment}</p>
                </div>
            </div>
        </div>
    ))}
    </>
}
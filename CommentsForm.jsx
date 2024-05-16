import { useState } from "react";
import "./Comment.jsx";

export default function Commentform(addNewComment) {
    let [formData, setFormData] = useState({
        username: "",
        remarks: "",
        rating: 5
    });

    let handleInputChange = (event) => {
        setFormData((currData) => {
            return {...currData, [event.target.name]: event.target.value };
        });
    };

    let handleSubmit = (event) => {
        console.log(formData);
        addNewComment(formData);
        event.preventDefault();
        setFormData({
            username: "",
            remarks: "",
            rating: 5,
        });
    }

    return  (
        <div>
            <h4>Give a comment!</h4>
            <form onClick={handleSubmit}>
                <label htmlFor="username">Username</label>
                <input type="text" id="username" placeholder="username"  value={formData.username} onChange={handleInputChange} name="username"/>
                <br /><br /><br /><br />

                <label htmlFor="remarks">Reamrks</label>
                <textarea value={formData.remarks} id="remarks" placeholder="add few remarks" onChange={handleInputChange} name="remarks"></textarea>
                <br /><br /><br /><br />

                <label htmlFor="rating">Rating</label>
                <input type="number" id="rating" placeholder="rating" min={1} max={5} value={formData.rating} onChange={handleInputChange} name="rating"/>
                <br /><br /><br /><br />

                <button>Add Comment</button>
            </form>
        </div>
    );
}

import './formstyle.css';
export default function Model({ isvisble, content }) {
    if (isvisble) return (
        <div className="model flex" style={{
            position: "absolute", backgroundColor: "rgba(0,0,0,0.50)",
            color: "green",
            width: "100%",
            height: "100%",
            margin: "0px",
            padding: "0px",

        }}>
            <div style={{
                backgroundColor: "white",
                color: "green",
                padding: "10px",
                margin: "10px",
                width: "48%"

            }}>
                {content}
            </div>
        </div>
    ); else return <></>

}
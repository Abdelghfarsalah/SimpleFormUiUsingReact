import { useState } from "react";
import "./formstyle.css";
import Model from "./model";
export default function MyForm() {

    const [showmodel, setshowmodel] = useState(false);
    const [forminputs, setforminputs] = useState({ name: "", age: null, phonenumber: "", areyouemployee: true, salaey: "less than 500$" });
    function HnadelEnableOrnotButton() {
        if (forminputs.name !== "" && forminputs.age !== "" && forminputs.phonenumber != "") {
            return true;
        } else {
            return false;
        }
    }
    function isNumber(str) {
        return /^-?\d+(\.\d+)?$/.test(str);
    }
    function displaycontent() {
        if (forminputs.age < 18 || forminputs.age > 1000) {
            return "Age munst be more than 18 and less than 100";
        } else if (forminputs.phonenumber.length != 10) {
            return "phone number must be valid"
        } else {
            return "The From has been submitted successfully "
        }
    }

    return (
        <div onClick={() => {
            if (showmodel) {
                setshowmodel(false)
            }
        }} className="flex " style={{
            marginTop: "150px",
            width: "50%",

        }} >
            <form onSubmit={(event) => {
                event.preventDefault(); console.log(forminputs)
            }} className="flex" style={{
                display: "felx",
                flexDirection: "column",
                color: "white",
                backgroundColor: "#2B009D",
                width: "100%",
                padding: "20px",
                borderRadius: "10px"
            }}>
                <h1>
                    Requesting A loen
                </h1>
                <hr></hr>

                <label>Name</label>
                <input type="text" value={forminputs.name} onChange={(event) => {
                    // const newinputform = { ...forminputs };
                    // newinputform.name = event.target.value;

                    // setforminputs(newinputform);
                    setforminputs({ ...forminputs, name: event.target.value });


                }} />

                <label>Phone number</label>
                <input type="text" value={forminputs.phonenumber} onChange={(event) => {
                    // const newinputform = { ...forminputs };
                    // newinputform.name = event.target.value;

                    // setforminputs(newinputform);
                    setforminputs({ ...forminputs, phonenumber: event.target.value });


                }} />

                <label>age</label>
                <input type="number" value={forminputs.age} onChange={(event) => {
                    // const newinputform = { ...forminputs };
                    // newinputform.name = event.target.value;

                    // setforminputs(newinputform);
                    setforminputs({ ...forminputs, age: event.target.value });


                }} />


                <label>Are you employee</label>
                <input type="checkbox" checked={forminputs.areyouemployee} style={{
                    width: "25px",
                    height: "25px",

                }} value={forminputs.areyouemployee} onChange={(event) => {
                    // const newinputform = { ...forminputs };
                    // newinputform.name = event.target.value;

                    // setforminputs(newinputform);
                    setforminputs({ ...forminputs, areyouemployee: event.target.checked });


                }} />


                <label>Are you employee</label>
                <select value={forminputs.salaey} onChange={(event) => {
                    // const newinputform = { ...forminputs };
                    // newinputform.name = event.target.value;

                    // setforminputs(newinputform);
                    setforminputs({ ...forminputs, salaey: event.target.value });


                }}>
                    <option>less than 500$</option>
                    <option>more than 500$ less than 2000$</option>
                    <option>more than 2000$</option>
                </select>
                <button className={!HnadelEnableOrnotButton() ? "disabled" : null} disabled={!HnadelEnableOrnotButton()} onClick={(event) => {
                    setshowmodel(true);
                }}>Submit</button>
            </form>

            <Model isvisble={showmodel} content={displaycontent()} />
        </div>
    );

}
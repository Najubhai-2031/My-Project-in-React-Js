import React from 'react';
import { useNavigate } from 'react-router-dom';
import NavbarMenu from './NavbarMenu';


function Contactus() {

    let Navigate = useNavigate();
    return (
        <React.Fragment>
            <NavbarMenu />
            <div className='abc' style={{marginTop: '100px'}}>
                <form action="" method='get'>
                    <br />
                    <div className="container-sm w-50 p-3 h-50 opacity-100 shadow-lg p-3 mb-5 bg-body rounded " style={{ width: "120px", backgroundColor: "rgba(0,0,255,.1)" }}>
                        <div align="center">
                            <h1>Registration Form</h1>
                        </div>
                        <br />
                        <div className="form-floating mb-3" >
                            <input type="text" className="form-control" id="floatingInput" placeholder="Name" required />
                            <label htmlFor="floatingInput">Full Name<p style={{ marginTop: "-20px", marginLeft: "80px", textAlign: "right", color: "red" }}>*</p></label>
                        </div>
                        <div className="form-floating mb-3" >
                            <input type="email" className="form-control" id="floatingInput" placeholder="name@example.com" />
                            <label htmlFor="floatingInput">Email address<p style={{ marginTop: "-20px", marginLeft: "105px", textAlign: "right", color: "red" }}>*</p></label>
                        </div>
                        <div className="form-floating mb-3">
                            <input type="password" pattern="^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%^&*_=+-]).{8,24}$" className="form-control" id="floatingPassword" placeholder="Password" />
                            <label htmlFor="floatingPassword">Password<p style={{ marginTop: "-20px", marginLeft: "80px", textAlign: "right", color: "red" }}>*</p></label>
                        </div>
                        <div className="form-floating mb-3" >
                            <input type="text" className="form-control" id="floatingAddress" placeholder="Address" />
                            <label htmlFor="floatingAddress">Address<p style={{ marginTop: "-20px", marginLeft: "80px", textAlign: "right", color: "red" }}>*</p></label>
                        </div>
                        <div>
                            <label> <b> Select Game:-</b> <p style={{ marginTop: "-20px", marginLeft: "110px", textAlign: "right", color: "red" }}>*</p></label>
                            <div className="form-check form-switch" >
                                <input className="form-check-input" type="checkbox" role="switch" id="flexSwitchCheckDefault" />
                                <label className="form-check-label" htmlFor="flexSwitchCheckDefault">Cricket</label>
                            </div>
                            <div className="form-check form-switch">
                                <input className="form-check-input" type="checkbox" role="switch" id="flexSwitchCheckChecked" />
                                <label className="form-check-label" htmlFor="flexSwitchCheckChecked">Hockey</label>
                            </div>
                            <div className="form-check form-switch">
                                <input className="form-check-input" type="checkbox" role="switch" id="flexSwitchCheckDisabled" />
                                <label className="form-check-label" htmlFor="flexSwitchCheckDisabled">FootBall</label>
                            </div>
                            <div className="form-check form-switch">
                                <input className="form-check-input" type="checkbox" role="switch" id="flexSwitchCheckCheckedDisabled" />
                                <label className="form-check-label" htmlFor="flexSwitchCheckCheckedDisabled">Kabaddi</label>
                            </div>
                        </div>
                        <br />
                        <div>
                            <label> <b> Gender:-</b> <p style={{ marginTop: "-20px", marginLeft: "80px", textAlign: "right", color: "red" }}>*</p></label>
                            <div className="form-check">
                                <input className="form-check-input" type="radio" name="male" id="exampleRadios1" value="Male" />
                                <label className="form-check-label" htmlFor="exampleRadios1">
                                    Male
                                </label>
                            </div>
                            <div className="form-check">
                                <input className="form-check-input" type="radio" name="female" id="exampleRadios2" value="Female" />
                                <label className="form-check-label" htmlFor="exampleRadios2">
                                    Female
                                </label>
                            </div>
                            <div className="form-check">
                                <input className="form-check-input" type="radio" name="other" id="exampleRadios3" value="Other" />
                                <label className="form-check-label" htmlFor="exampleRadios3">
                                    Other
                                </label>
                            </div>
                        </div>
                        <br />
                        <div>
                            <label> <b> Select Your City:-</b> <p style={{ marginTop: "-20px", marginLeft: "135px", textAlign: "right", color: "red" }}>*</p></label>
                            <select className="form-select" aria-label="Default select example">
                                <option selected>-select-</option>
                                <option value="1">Ahmedabad</option>
                                <option value="2">Bhavnagar</option>
                                <option value="3">Rajkot</option>
                            </select>
                            <br />
                        </div>
                        <div className="mb-3">
                            <label htmlFor="formFile" className="form-label"><b> Upload Your Photo</b> <p style={{ marginTop: "-20px", marginLeft: "150px", textAlign: "right", color: "red" }}>*</p></label>
                            <input className="form-control" type="file" id="formFile" />
                        </div>

                        <br />
                        <div align="center">
                            <button type="submit" className="btn btn-primary">Submit</button> &nbsp;
                            <button type="reset" className="btn btn-primary">Reset</button>&nbsp;&nbsp;
                            <button onClick={() => Navigate('/')} className="btn btn-primary">Go Back</button>
                        </div>
                        <br /><br /><br /><br />
                    </div>
                </form>
            </div>
        </React.Fragment>
    );
}

export default Contactus;
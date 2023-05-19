import React from 'react'
import './AddBirthday.css';
import {useNavigate} from "react-router-dom";

const AddBirthday = () => {

    const navigate = useNavigate();
    
  return (
    <div>
      <div className="container">
        <div className="d-flex justify-content-center mt-4">
        <div className="area4">
        <div className="card mt-3">
         <div className="d-flex justify-content-center">
            <div className="Birthdaylogo mt-2"></div>
         </div>
         <div className="addBirth mt-1">Add Your Birthday</div>
         <div className="publicProfile">This won't be a part of your public profile.</div>
         <a href="/" className="why">Why do i need to provide my birthday?</a>
         <div className=" dropdown row align-items-centre ml-5 mt-3">
           
           <select class="col form-control mr-2" id="month" name="month">
              <option value="">Month</option>
              <option value="01">January</option>
              <option value="02">February</option>
              <option value="03">March</option>
              <option value="04">April</option>
              <option value="05">May</option>
              <option value="06">June</option>
              <option value="07">July</option>
              <option value="09">September</option>
              <option value="10">October</option>
              <option value="11">November</option>
              <option value="12">December</option>
           </select>
          
           <select className="col  form-control mr-2" id="day" name="day">
           <option value="">Day</option>
           <option value="01">01</option>
           <option value="02">02</option>
           <option value="03">03</option>
           <option value="04">04</option>
           <option value="05">05</option>
           <option value="06">06</option>
           <option value="07">07</option>
           <option value="08">08</option>
           <option value="09">09</option>
           <option value="10">10</option>
           <option value="11">11</option>
           <option value="12">12</option>
           <option value="13">13</option>
           <option value="14">14</option>
           <option value="15">15</option>
           <option value="16">16</option>
           <option value="17">17</option>
           <option value="18">18</option>
           <option value="19">19</option>
           <option value="20">20</option>
           <option value="21">21</option>
           <option value="22">22</option>
           <option value="23">23</option>
           <option value="24">24</option>
           <option value="25">25</option>
           <option value="26">26</option>
           <option value="27">27</option>
           <option value="28">28</option>
           <option value="29">29</option>
           <option value="30">30</option>
           <option value="31">31</option>
           </select>
          
          <select className="col  form-control" id="year" name="year">
       <option value="">Year</option>
       <option value="1951">1951</option>
       <option value="1952">1952</option>
       <option value="1953">1953</option>
       <option value="1954">1954</option>
       <option value="1955">1955</option>
       <option value="1956">1956</option>
       <option value="1957">1957</option>
       <option value="1958">1958</option>
       <option value="1959">1959</option>
       <option value="1960">1960</option>
       <option value="1961">1961</option>
       <option value="1962">1962</option>
       <option value="1963">1963</option>
       <option value="1964">1964</option>
       <option value="1965">1965</option>
       <option value="1966">1966</option>
       <option value="1967">1967</option>
       <option value="1968">1968</option>
       <option value="1969">1969</option>
       <option value="1970">1970</option>
       <option value="1971">1971</option>
       <option value="1972">1972</option>
       <option value="1973">1973</option>
       <option value="1974">1974</option>
       <option value="1975">1975</option>
       <option value="1976">1976</option>
       <option value="1977">1977</option>
       <option value="1978">1978</option>
       <option value="1979">1979</option>
       <option value="1980">1980</option>
       <option value="1981">1981</option>
       <option value="1982">1982</option>
       <option value="1983">1983</option>
       <option value="1984">1984</option>
       <option value="1985">1985</option>
       <option value="1986">1986</option>
       <option value="1987">1987</option>
       <option value="1988">1988</option>
       <option value="1989">1989</option>
       <option value="1990">1990</option>
       <option value="1991">1991</option>
       <option value="1992">1992</option>
       <option value="1993">1993</option>
       <option value="1994">1994</option>
       <option value="1995">1995</option>
       <option value="1996">1996</option>
       <option value="1997">1997</option>
       <option value="1998">1998</option>
       <option value="1999">1999</option>
       <option value="2000">2000</option>
       <option value="2001">2001</option>
       <option value="2002">2002</option>
       <option value="2003">2003</option>
       <option value="2004">2004</option>
       <option value="2005">2005</option>
       <option value="2006">2006</option>
       <option value="2007">2007</option>
       <option value="2008">2008</option>
       <option value="2009">2009</option>
       <option value="2010">2010</option>
       <option value="2011">2011</option>
       <option value="2012">2012</option>
       <option value="2013">2013</option>
       <option value="2014">2014</option>
       <option value="2015">2015</option>
       <option value="2016">2016</option>
       <option value="2017">2017</option>
       <option value="2018">2018</option>
       <option value="2019">2019</option>
       <option value="2020">2020</option>
       <option value="2021">2021</option>
       <option value="2022">2022</option>
       <option value="2023">2023</option>
          </select>
          <div className="need-to-enter">Yoy need to enter the date you were born</div>  
         </div>
  
        <div className="own-birthday"> Use your own birthday, even if this account is for a business, a pet, or something else</div>

         <button onClick={()=>navigate('/OneMoreStep')} type="button" className="btn ml-4 mr-4 mt-4 mb-4">Next</button>
         <div className="line ml-4">OR</div>   
           <a className="go-back mb-4" href="/goBack">Go Back</a>
         </div>
       <div className="card mt-2 mb-3">
         <div className="card-body text-center">Have an account?
           <a href="/signup">Log in</a>
         </div>
        </div>
       </div>
      </div>
     </div>
    </div>
  )
}
export default AddBirthday;
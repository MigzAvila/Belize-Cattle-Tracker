import * as React from "react";
import { styled } from "@mui/material/styles";
import Grid from "@mui/material/Grid";
import Paper from "@mui/material/Paper";
import Box from "@mui/material/Box";
import contactUsClass from "../../styles/ContactUs.module.css";

const Item = styled(Paper)(({ theme }) => ({
  ...theme.typography.body2,
  textAlign: "center",
  boxShadow: "none",
  color: theme.palette.text.secondary,
  borderRadius: "20px",
  background: "transparent",
}));
const ContactUs = () => {
  return (
    <>
      {/* image contact form */}
      <div style={{ borderColor: "black", width: "60%", margin: "0 auto" }}><br/>
        <div className={contactUsClass.formHeader}>
          <h1 className={contactUsClass.h1}>
            <span className={contactUsClass.emailEnvelope}>&nbsp;</span>Contact Us
          </h1>
          <div className={contactUsClass.formHeader}>
            <h1 aria-hidden="true" role="presentation"></h1>
            <div id="requiredMessageBlock">
              Asterisk indicates Required Field
            </div>{" "}
          </div>
        </div>
        <form
          id="inquiry-form"
          name="xinquiry"
          method="post"
          action=""
          data-ds-form="xInquiry"
          novalidate="novalidate"
          className={contactUsClass.form}
        >
          <Grid sx={{ borderColor: "black" }}>
            <ul className={contactUsClass.formUl}>
              <li id="formFirstName" className={contactUsClass.formUlLi}>
                <div className={contactUsClass.formField}>
                  {/* <div class="label placeholder">First Name</div> */}
                  <input
                    className={contactUsClass.input}
                    aria-label="First Name"
                    name="fname"
                    placeholder="First Name"
                    type="text"
                    // value=""
                    aria-required="true"
                    autocomplete="given-name"
                  />
                  <div className={contactUsClass.formRequired}>*</div>
                </div>
                <div class="formError"></div>
              </li>
              <li id="formLastName" className={contactUsClass.formUlLi}>
                <div className={contactUsClass.formField}>
                  {/* <div class="label placeholder">Last Name</div> */}
                  <input
                    className={contactUsClass.input}
                    aria-label="Last Name"
                    name="lname"
                    type="text"
                    // value=""
                    placeholder="Last Name"
                    aria-required="true"
                    autocomplete="family-name"
                  />
                  <div className={contactUsClass.formRequired}>*</div>
                </div>
                <div class="formError"></div>
              </li>
              <li id="formEmail" className={contactUsClass.formUlLi}>
                <div className={contactUsClass.formField}>
                  {/* <div class="label placeholder">Email</div> */}
                  <input
                    className={contactUsClass.input}
                    aria-label="Email"
                    name="email"
                    type="text"
                    // value=""
                    placeholder="Email"
                    aria-required="true"
                    autocomplete="email"
                  />
                  <div className={contactUsClass.formRequired}>*</div>
                </div>
                <div class="formError"></div>
              </li>
              <li id="formTelephone" className={contactUsClass.formUlLi}>
                <div className={contactUsClass.formField}>
                  {/* <div class="label placeholder">Phone</div> */}
                  <input
                    className={contactUsClass.input}
                    aria-label="Phone"
                    name="telephone"
                    type="text"
                    // value=""
                    placeholder="Phone"
                    autocomplete="tel"
                  />
                  <div className={contactUsClass.formRequired}></div>
                </div>
                <div class="formError"></div>
              </li>
              {/* <!-- FH - New Fields added - 03/10/2022 --> */}
              <li id="formPostalCode" className={contactUsClass.formUlLi}>
                <div className={contactUsClass.formField}>
                  {/* <div class="label placeholder">Postal Code</div> */}
                  <input
                    className={contactUsClass.input}
                    aria-label="Postal Code"
                    name="Postal Code"
                    type="text"
                    // value=""
                    placeholder="Postal Code"
                  />
                </div>
              </li>
              <li id="formCity" className={contactUsClass.formUlLi}>
                <div className={contactUsClass.formField}>
                  {/* <div class="label placeholder">City</div> */}
                  <input
                    className={contactUsClass.input}
                    aria-label="City"
                    name="City"
                    type="text"
                    // value=""
                    placeholder="City"
                    autocomplete="address-level2"
                  />
                </div>
              </li>
              {/* <!-- end of new fields added --> */}
              <li id="formLocations" className={contactUsClass.formUlLi}>
                <div
                  className={[
                    contactUsClass.formField,
                    contactUsClass.formLocations,
                  ]}
                >
                  <div class="label placeholder"></div>
                  <select
                    className={contactUsClass.select}
                    name="location"
                    id="location"
                    class="DealerLocation"
                    aria-label="Select A Location"
                    aria-required="true"
                  >
                    <option value="">Select A Location</option>
                    <option value="Windsor">Windsor</option>
                    <option value="Aylesford">Aylesford</option>
                    <option value="Moncton">Moncton</option>
                  </select>
                </div>
                <div class="formError"></div>
              </li>
            </ul>
            <ul class="ulComments" role="presentation">
              <li
                id="formComments"
                role="presentation"
                className={contactUsClass.formUlLi}
              >
                <div className={contactUsClass.formField}>
                  {/* <div className={contactUsClass.label}>Comments/Questions</div> */}
                  <textarea
                    className={contactUsClass.textarea}
                    aria-label="Comments/Questions"
                    name="comments"
                    placeholder="Comments/Questions"
                  ></textarea>
                  <div className={contactUsClass.formRequired}></div>
                </div>
                <div class="formError"></div>
              </li>
            </ul>
            <div id="newsletter-subscribe">
              <input
                className={contactUsClass.inputCheckBox}
                aria-label="Newsletter Opt-In"
                name="NewsletterOptIn"
                type="checkbox"
                value="Y"
                aria-labelledby="newsletter-subscribe-label"
              />{" "}
              &nbsp;
              <span id="newsletter-subscribe-label">
                Yes, I would like to receive commercial information from Nova
                International and Kubota Canada Ltd. about Kubota products,
                including promotions, offers, news, and customer satisfaction
                material! I understand I can later unsubscribe. Consent is
                sought by the Dealer for itself and for Kubota Canada. Kubota
                Canada Ltd. 5900 14th Avenue Markham, ON, L3S 4K4,{" "}
                <a href="mailto: kcl_g.customerservice@kubota.com">
                  kcl_g.customerservice@kubota.com
                </a>
                . You may view the Kubota Canada Privacy Policy at:{" "}
                <a href="/read-our-privacy-statement--xprivacy">
                  Privacy Policy
                </a>
                .
              </span>
            </div>{" "}
            <ul className={contactUsClass.submitBlock} role="presentation">
              <li class={contactUsClass.submitBlockLi} role="presentation">
                <button
                  className={contactUsClass.submitBlockLiButton}
                  id="btnSubmit"
                  name="submit"
                  type="submit"
                  value="Submit"
                >
                  Submit
                </button>
              </li>
            </ul>
          </Grid>
        </form>
        <br /><br /><br />
      </div>
    </>
  );
};
// const ContactUs = () => {
//   return (
//     <>
//       {/* image contact form */}
//       <Box
//         sx={{
//           width: "auto",
//           height: "auto",
//           paddingTop: "50px",
//           backgroundRepeat: "no-repeat",
//           backgroundSize: "cover",
//           backgroundPosition: "center",
//           paddingBottom: "50px",
//         }}
//       >
//         <Grid
//           container
//           justifyContent="center"
//           rowSpacing={1}
//           columnSpacing={{ xs: 1, sm: 2, md: 3 }}
//           sx={{ paddingTop: "30px" }}
//         >
//           <Grid item xs={10}>
//             <Item sx={{ fontSize: "30px", fontWeight: "bold" }}>
//               GET IN TOUCH
//             </Item>
//             <Item sx={{ fontSize: "15px" }}>
//               If you have any question, you can contact Us lorem
//               aslfjsalkdfhskldf lksfjslkf sldfh sdajfhsa flkasf hsdkjf
//             </Item>
//           </Grid>
//         </Grid>
//       </Box>
//     </>
//   );
// };

export default ContactUs;

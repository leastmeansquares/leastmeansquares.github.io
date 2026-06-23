
// INDEX PAGE

const indexPage = () => {


    const testimonialShift = (right) => {
        
        testimonialSlide[current].classList.add("hide");
        current = (current + 2 * (1 && right) + 10)  % 11;
        testimonialSlide[current].classList.remove("hide");
    }


    let testimonialSlide = [];
    const leftBtn = document.getElementById("testimonial-left");
    const rightBtn = document.getElementById("testimonial-right");

    for (let i = 0; i < 11; i++){
        testimonialSlide.push(document.getElementById(`testimonial-${i}`));
    }

    let current = 0;

    leftBtn.addEventListener("click", () => testimonialShift(false));
    rightBtn.addEventListener("click", () => testimonialShift(true));

    const mainImage = document.getElementById("hero-img");

    heroSRCS = [
        "images/Backgrounds/garden-1.jpeg",
        "images/Backgrounds/Castleford & Pontefract Landmarks/Buttercross.jpg",
        "images/Backgrounds/exterior-1.jpeg",
        "images/Backgrounds/Castleford & Pontefract Landmarks/castleford-landmarks-5.jpg",
        "images/Backgrounds/exterior-2.jpeg",
        "images/Backgrounds/Castleford & Pontefract Landmarks/castleford-landmarks-10.jpg",
        "images/Maintenance/maintenance-garden.jpg",
        "images/Backgrounds/Castleford & Pontefract Landmarks/castleford-landmarks-1.jpg",
        "images/Maintenance/logo-garden.jpg",
        "images/Backgrounds/Castleford & Pontefract Landmarks/castleford-landmarks-8.jpg",
    ]

    let srcCounter = 0;
    const srcLen = heroSRCS.length;

    const imageTransition = () => {
        if (srcCounter < srcLen - 1) {
            srcCounter += 1;
            mainImage.src = heroSRCS[srcCounter];
        }
        else {
            mainImage.src = heroSRCS[0];
            srcCounter = 0;
        }
        setTimeout(imageTransition, 5000);
    }
    
    setTimeout(imageTransition, 5000);
}


// LETTINGS PAGE


const lettingsPage = () => {

    const servicesTitle = document.getElementById("services-title");
    const textDisplay = document.getElementById("text-display");
    const servicesImage = document.getElementById("services-image");

    const textObj = {
        lettingsBtn1: ["Let Only Service",
                        "For the landlords who simply want the agent to find a good quality tenant, complete the necessary checks and make the transition as smooth as possible for them to manage the property themselves.",
                        "#d1dffa"],
        lettingsBtn2: ["Rent Collection & Bond Registration",
                        "Similar to the Let-Only service above but this includes an Inventory & Property Condition Report which goes hand-in-hand with registering the security deposit. Once the tenancy commences, we then continue to collect the rent and provide monthly statements and support for the landlord. Generally, this is for landlords who prefer to be involved directly with the day-to-day running of the property but who have a back-up with the agent for the financial and legal aspects of the tenancy. You can upgrade at any time to Full-Management.",
                        "#b3e6e6"],
        lettingsBtn3: ["Full Management",
                        "This is the most popular choice for landlords, managing the tenants, maintenance/safety checks, rent collection and dealing with any issues. The agent takes over the full running of the property and keeps the landlord updated on an ongoing basis. A landlord would only normally go to the property in between tenancies for their own peace of mind.",
                        "#218e91"],
        lettingsBtn4: ["Full Management PLUS",
                        "In addition to the Full-Management of your property, we also include the MV-Plan service (as below) which aims to reduce the number of call-out charges for non- specialist, small maintenance jobs which the agent may be able to undertake ie. tightening screws, battery replacement, small repairs (although material costs may still apply).",
                        "#7b68ee"],
        lettingsBtn5: ["MV-Plan",
                        "The maintenance Visit Plan (MV-Plan) is best described as “A Letting Agent with basic maintenance/handyman included”. The MV-Plan can be selected as a stand-alone service or taken as an upgrade to a Management Plan for a small increase on monthly commission. This type of plan would benefit a landlord who doesn’t have time to spend at the property for maintenance/handyman visits and checks but with the added advantage of the feedback of the letting agent.",
                        "#ffddcc"],
        lettingsBtn6: ["Maintenance Services",
                        "Our years of experience in dealing with maintenance and general repairs is paramount to a quality inspection as we can identify or resolve many of the issues on our visits. Additional maintenance services we can organise for landlords include Annual Gas Safety Certificates (CP12), Energy Performance Certificate (EPC - 10 years), Electrical Installation Condition Reports (EICR- 5 Years), Additional Specialist Certificates, or Checks for Compliance. Please see Maintenance Page for more details",
                    "#e0e0e0"]
        }



    const lettingsBtnClick = (btn) => {

        servicesTitle.innerText = `${textObj[btn.id][0]}`;
        textDisplay.innerText = `${textObj[btn.id][1]}`;
        servicesTitle.style.color = `${textObj[btn.id][2]}`;
        lettingsBtn1.classList.remove("pressed");
        lettingsBtn2.classList.remove("pressed");
        lettingsBtn3.classList.remove("pressed");
        lettingsBtn4.classList.remove("pressed");
        lettingsBtn5.classList.remove("pressed");
        lettingsBtn6.classList.remove("pressed");
        btn.classList.add("pressed");
    }

    document.body.querySelectorAll(".lettings-btn").forEach((btn) => 
        btn.addEventListener("click", ()=>lettingsBtnClick(btn))
        
    )

    lettingsBtnClick(document.getElementById("lettingsBtn1"));
}


// MAINTENANCE PAGE


const maintenancePage = () => {

    const maintenanceBoxes = {
        dropdownBtn1: dropdownBox1,
        dropdownBtn2: dropdownBox2,
        dropdownBtn3: dropdownBox3,
        dropdownBtn4: dropdownBox4,
        dropdownBtn5: dropdownBox5,
        dropdownBtn6: dropdownBox6,
        dropdownBtn7: dropdownBox7,
        dropdownBtn8: dropdownBox8,
        dropdownBtn9: dropdownBox9,
        dropdownBtn10: dropdownBox10,
        dropdownBtn11: dropdownBox11
    }

    const workBtn = document.getElementById("our-work");
    const workImage = document.getElementById("work-image");

    workImage.textsrc = workImage.src;


    const imageSRCs = [
        "images/Maintenance/logo-garden.jpg",
        "images/Maintenance/maintenance-in-progress-2.jpg",
        "images/Maintenance/maintenance-8.jpg",
        "images/Maintenance/maintenance-9.jpg",
        "images/Maintenance/maintenance-10.jpg",
        "images/Maintenance/maintenance-in-progress-1.jpg",
        "images/Maintenance/maintenance-2.jpg",
        "images/Maintenance/maintenance-property-1.jpg",
        "images/Maintenance/maintenance-property-2.jpg",
        "images/Maintenance/maintenance-1.jpg",
        "images/Maintenance/maintenance-3.jpg",
        "images/Maintenance/maintenance-4.jpg",
        "images/Maintenance/maintenance-5.jpg",
        "images/Maintenance/maintenance-6.jpg",
        "images/Maintenance/maintenance-7.jpg",
        "images/Maintenance/maintenance-11.jpg",
        "images/Maintenance/maintenance-12.jpg",
        "images/Maintenance/maintenance-13.jpg",
        "images/Maintenance/maintenance-14.jpg",
        "images/Maintenance/maintenance-15.jpg",
        "images/Maintenance/maintenance-16.jpg"
    ]


    const cycleImage = () => {

        let oldSRC = "";
        
        for (src of imageSRCs){
            
            if (oldSRC == workImage.textsrc){
                workImage.textsrc = src;
                workImage.src = src;
                return;
            }
            else {
                oldSRC = src;
            }
        }
        workImage.src = imageSRCs[0];
        workImage.textsrc = imageSRCs[0];
    }


    workBtn.addEventListener("click", cycleImage);

    cycleImage();

    dropDownBtnAdd(maintenanceBoxes);



    let testimonials = document.getElementById("testimonial-container") || document.body.querySelectorAll(".testimonial-box");
    let firstBox = document.getElementById("first-box");
    let lastBox = document.getElementById("last-box");



    const verticalScroll = (event) => {


        testimonials = document.getElementById("testimonial-container") || document.body.querySelectorAll(".testimonial-box");
        firstBox = document.getElementById("first-box");
        lastBox = document.getElementById("last-box");
        viewBox = testimonials.getBoundingClientRect();

        event.preventDefault();

        if (!event.deltaY) {
            return;
          }

        event.currentTarget.scrollTop += 0.75 * (event.deltaY + event.deltaX);

        firstBox.position = firstBox.getBoundingClientRect();
        lastBox.position = lastBox.getBoundingClientRect();

        
        if (viewBox.top >= lastBox.position.top && event.deltaY > 0){
            event.currentTarget.scrollTop = firstBox.position.top;
        }

        else if (viewBox.top <= firstBox.position.top && event.deltaY < 0){
            event.currentTarget.scrollTop = lastBox.position.top; 
        }

      }


      if (!window.matchMedia("(pointer: coarse)").matches) {
        testimonials.scrollTop += 0.5 * testimonials.scrollWidth;
        testimonials.addEventListener("wheel", verticalScroll);
    }

}

const tenantPage = () => {

    let pageBtn = ["","","","","","",""];
    let buttonBox = ["","","","","","",""];
    const arrangementBoxB = document.getElementById("arrangement-box-b");


    for (let i = 0; i < 7; i++){
        pageBtn[i] = document.getElementById(`page-btn-${i}`);
        buttonBox[i] = document.getElementById(`btn-text-${i}`);
    }

    const pageBtnClick = (btn) => {

        for (i = 0; i < 7; i++){

            if (btn === pageBtn[i]){
                foundButton = i;
            }

            else {
                pageBtn[i].classList.remove("pressed");
                buttonBox[i].classList.add("hide");
            }
        }

        pageBtn[foundButton].classList.add("pressed");
        buttonBox[foundButton].classList.remove("hide");
        arrangementBoxB.scrollTop = 0;
    }

    document.body.querySelectorAll(".page-btn").forEach((btn) => 
        btn.addEventListener("click", ()=>pageBtnClick(btn))
    )

    pageBtnClick(pageBtn[0]);



}



// PERSISTENT FEATURES

const mainForm = document.getElementById("main-form");
mainForm.selection = document.getElementById("pick-subject");
const outerBck = document.getElementById("bck-display-outer");
const getStartedBtn = document.getElementById("get-started");
const footerSubject = document.getElementById("page-subject");
const formSubject = document.getElementById("pick-subject");
const viewing = document.body.querySelectorAll(".viewing");
const maintenanceRequest = document.body.querySelectorAll(".maintenance-request");
const viewingRequired = document.body.querySelectorAll(".viewing-required");
const maintenanceRequired = document.body.querySelectorAll(".maintenance-required");
const messageLabel = document.getElementById("message-label");
const message = document.getElementById("message");
const addressFirstLine = document.getElementById("address");
const addressPostcode = document.getElementById("postcode");
const addressLabel = document.getElementById("address-label");
const postcodeLabel = document.getElementById("postcode-label");

const contactUsClick = () => {

    if (mainForm.style.display){
        cancelClick();
    }
    else {
        cancelClick();
        mainForm.style.display = "flex";
        outerBck.style.display = "block";
        outerBck.style.opacity = "0.6";
        document.removeEventListener("scroll", cancelClick);
        formSetup();
    }
}

const formSetup = () => {

    if (formSubject.value === "Arrange a Viewing"){
        viewing.forEach((e) => e.classList.remove("hide"));
        maintenanceRequest.forEach((e) => e.classList.add("hide"));
        messageLabel.innerText = "Please state any relevant information below which may influence any decision to let the property"
        message.required = false;
        addressFirstLine.required = true;
        addressPostcode.required = true;
        addressLabel.innerText = "First Line of Address"
        postcodeLabel.innerText = "Postcode"
        viewingRequired.forEach((e) => e.attributes.required = "required");
        maintenanceRequired.forEach((e) => e.attributes.required = "");
    }
    else if (formSubject.value === "Report a Maintenance Issue"){
        viewing.forEach((e) => e.classList.add("hide"));
        maintenanceRequest.forEach((e) => e.classList.remove("hide"));
        messageLabel.innerText = "What is the maintenance issue / enquiry?"
        message.required = true;
        addressFirstLine.required = false;
        addressPostcode.required = false;
        addressLabel.innerText = "First Line of Address (Optional)"
        postcodeLabel.innerText = "Postcode (Optional)"
        viewingRequired.forEach((e) => e.attributes.required = "");
        maintenanceRequired.forEach((e) => e.attributes.required = "required");
    }
    else {
        viewing.forEach((e) => e.classList.add("hide"));
        maintenanceRequest.forEach((e) => e.classList.add("hide"));
        messageLabel.innerText = "Message"
        message.required = true;
        addressFirstLine.required = false;
        addressPostcode.required = false;
        addressLabel.innerText = "First Line of Address (Optional)"
        postcodeLabel.innerText = "Postcode (Optional)"
        viewingRequired.forEach((e) => e.attributes.required = "");
        maintenanceRequired.forEach((e) => e.attributes.required = "");
    };
}

document.body.querySelectorAll(".form-btn").forEach((btn) => 
    btn.addEventListener("click", contactUsClick)
)

getStartedBtn.addEventListener("click", () => {
    mainForm.selection.value = footerSubject.value;
    contactUsClick()
}
);

formSubject.addEventListener("change", formSetup);


const headerClick = () => {

    if (headerDisplay.style.display){
        document.removeEventListener("scroll", cancelClick);
        cancelClick();
    }
    else {
        document.addEventListener("scroll", cancelClick);
        cancelClick();
        headerDisplay.style.display = "block";
        outerBck.style.display = "block";
        outerBck.style.opacity = "0";
    }
}

const cancelClick = () => {
    mainForm.style.display = "";
    outerBck.style.display = "";
    headerDisplay.style.display = "";
    privacyDisplay.classList.add("hide");
}


const headerDisplay = document.getElementById("header-display");
document.getElementById("header-btn").addEventListener("click", headerClick);
outerBck.addEventListener("click", cancelClick);



const dropDownBtnAdd = (boxes) => {

    

    const dropdownBtnClick = (btn) => {
        
        btn.classList.toggle("pressed");
        boxes[btn.id].classList.toggle("pressed");
        btn.lastChild.classList.toggle("down");

    }
    
    document.body.querySelectorAll(".dropdown-btn").forEach((btn) => 
        btn.addEventListener("click", ()=> dropdownBtnClick(btn))      
    )

}


/*const footerBtns = document.body.querySelectorAll(".footer-button");
const discoveryDropdown = document.getElementById("discovery-dropdown");
const getInTouchDropdown = document.getElementById("get-in-touch-dropdown");
const footerBoxes = {
    discoveryBtn: discoveryDropdown,
    getInTouchBtn: getInTouchDropdown
}

dropDownBtnAdd(footerBoxes);*/

const privacyDisplay = document.getElementById("privacy-display")

const privacyPolicyClick = () => {
    privacyDisplay.classList.toggle("hide");
}

document.body.querySelectorAll(".privacy-policy").forEach((btn) => 
    btn.addEventListener("click", privacyPolicyClick)
)



if (location.pathname === "/lettings.html" || location.pathname === "/lettings"){
    try {lettingsPage()}
    catch {alert("Error: Invalid location for JavaScript");}
}
else if (location.pathname === "/maintenance.html" || location.pathname === "https://leastmeansquares.github.io/maintenance.html" || location.pathname === "/maintenance"){
    try {maintenancePage()}
    catch {alert("Error: Invalid location for JavaScript");}
}
else if (location.pathname === "/tenants.html" || location.pathname === "https://leastmeansquares.github.io/tenants.html" || location.pathname === "/tenants"){
    try {tenantPage()}
    catch {alert("Error: Invalid location for JavaScript");}
}
else {
    try {indexPage()}
    catch {alert("Error: Invalid location for JavaScript");}
}

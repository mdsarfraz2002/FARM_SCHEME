
function fetchSchemes() {
    const stateSelect = document.getElementById('stateSelect');
    const selectedState = stateSelect.value;
    const schemesOutput = document.getElementById('schemesOutput');

    // Fetch schemes based on the selected state
    const selectedStateSchemes = getSelectedStateSchemes(selectedState);

    // Display schemes in the output div
    schemesOutput.innerHTML = `<h3>Schemes for ${selectedState.charAt(0).toUpperCase() + selectedState.slice(1)}</h3>`;
    selectedStateSchemes.forEach((scheme) => {
        schemesOutput.innerHTML += `<p>${scheme}</p>`;
    });
}
function fetchSchemes() {
    const stateSelect = document.getElementById('stateSelect');
    const selectedState = stateSelect.value;
    const schemesOutput = document.getElementById('schemesOutput');

    // Fetch schemes based on the selected state
    const selectedStateSchemes = getSelectedStateSchemes(selectedState);

    // Display schemes in the output div
    schemesOutput.innerHTML = `<h3>Schemes for ${selectedState.charAt(0).toUpperCase() + selectedState.slice(1)}</h3>`;
    selectedStateSchemes.forEach((scheme) => {
        schemesOutput.innerHTML += `<p>${scheme}</p>`;
    });
}
function getSelectedStateSchemes(selectedState) {
    // Assuming you have a function to fetch schemes from the intents file
    // Replace this with your actual implementation
    // This is just a mock implementation
    const mockSchemes = {
        delhi: ["These are some of the  government schemes availble for farmers: <br> 1.<a target=\"_blank\" href=\"http://agriinfra.dac.gov.in/\"> Agriculture Infrastructure Fund</a><br> 2.<a target=\"_blank\" href=\"https://extensionreforms.dacnet.nic.in/DashBoard_Statusatma.aspx\"> ATMA</a> <br> 3.<a target=\"_blank\" href=\"https://agmarknet.gov.in/PriceAndArrivals/arrivals1.aspx\"> AGMARKNET</a><br> 4.<a target=\"_blank\" href=\"https://midh.gov.in/nhmapplication/feedback/midhKPI.aspx\">Horticulture</a><br> 5.<a target=\"_blank\" href=\"https://agriwelfare.gov.in/Documents/Pesticides_Registration.pdf\">Online Pesticide Registration</a><br> 6. <a target=\"_blank\" href=\"https://pqms.cgg.gov.in/pqms-angular/home\">Plant Quarantine Clearance</a><br> 7. <a target=\"_blank\" href=\"https://www.dbtdacfw.gov.in/\">DBT in Agriculture</a><br> 8. <a target=\"_blank\" href=\"https://pmksy.gov.in/mis/frmDashboard.aspx\">Pradhanmantri Krishi Sinchayee Yojana</a> <br> 9. <a target=\"_blank\" href=\"https://mkisan.gov.in/Home/KCCDashboard\">Kisan Call Center</a><br> 10. <a target=\"_blank\" href=\"https://mkisan.gov.in/\">mKisan</a><br> 11. <a target=\"_blank\" href=\"https://pgsindia-ncof.gov.in/home.aspx\">Jaivik Kheti</a><br> 12. <a target=\"_blank\" href=\"https://enam.gov.in/web/\">e-Nam</a><br> 13. <a target=\"_blank\" href=\"https://soilhealth.dac.gov.in/home\">Soil Health Card</a><br> 14.<a target=\"_blank\" href=\"https://pmfby.gov.in/ext/rpt/ssfr_17\">Pradhan Mantri Fasal Bima Yojana</a><br>"],
        karnataka: ["These are some of the karnata government schemes availble for farmers:<br> 1.<a target=\"_blank\" href=\"https://raitamitra.karnataka.gov.in/info-2/Chief+Minister+Raitha+Vidya+Nidhi/en\"> Chief Minister Raitha Vidya Nidhi</a><br> 2.<a target=\"_blank\" href=\"https://raitamitra.karnataka.gov.in/info-2/Pradhan+Mantri+KIsan+SAmman+Nidhi+(PM+KISAN)/en\"> Pradhan Mantri KIsan SAmman Nidhi (PM KISAN)</a><br> 3.<a target=\"_blank\" href=\"https://raitamitra.karnataka.gov.in/info-2/Organic+Farming+and+Millet+Promotional+Programs/Savayava+Siri/en\">Savayava Siri</a><br> 4.<a target=\"_blank\" href=\"https://raitamitra.karnataka.gov.in/info-2/Rashtriya+Krishi+Vikas+Yojana(RKVY+RAFTAAR)/en\">Rashtriya Krishi Vikas Yojana(RKVY RAFTAAR)</a><br>  5a.<a target=\"_blank\" href=\"https://raitamitra.karnataka.gov.in/info-2/FERTILIZER+AND+MANURE/Guideline+and+Circulars/en\">Fertilizer and Manure </a><br> 5b.<a target=\"_blank\" href=\"https://raitamitra.karnataka.gov.in/info-2/FERTILIZER+AND+MANURE/Rate+Contract/en\">Rate Contract</a><br> 5c.<a target=\"_blank\" href=\"https://raitamitra.karnataka.gov.in/info-2/FERTILIZER+AND+MANURE/Quality+Control+and+Notifications/en\">Quality Control and Notifications</a><br> 5d.<a target=\"_blank\" href=\"https://ifms.dbtfert.nic.in/portal/iFMSportal;jsessionid=97DD7B73CD213A7C54DD1310C018D694.jvm1\">Fertilizer Supply Report</a><br> 6.<a target=\"_blank\" href=\"https://raitamitra.karnataka.gov.in/info-2/krushi+Bhagya/en\">krushi Bhagya</a><br>"],
        tamilnadu: ["These are some of the tamilnaadu government schemes availble for farmers:<br> 1.<a target=\"_blank\" href=\"https://www.tn.gov.in/scheme/data_view/6853\"> Distribution of Certified Seeds of maize</a><br> 2.<a target=\"_blank\" href=\"https://www.tn.gov.in/scheme/data_view/7613\"> Distribution of Certified seeds - Oil Seeds</a><br> 3.<a target=\"_blank\" href=\"https://www.tn.gov.in/scheme/data_view/7075\"> Distribution of Gypsum</a><br> 4.<a target=\"_blank\" href=\"https://www.tn.gov.in/scheme/data_view/6849\"> Distribution of Soil Health card</a><br> 5.<a target=\"_blank\" href=\"https://www.tn.gov.in/scheme/data_view/6847\"> Farmers Training</a><br>"],
        
        kerala: ["These are some of the kerala government schemes availble for farmers: <br> 1.<a target=\"_blank\" href=\"https://keralaagriculture.gov.in/en/2021/05/05/rice-development-2/\"> Rice Development</a><br> 2.<a target=\"_blank\" href=\"https://keralaagriculture.gov.in/en/2021/05/05/location-specific-crops/\"> Farm Plan Based Production Programme including pre-production support</a> <br> 3.<a target=\"_blank\" href=\"https://keralaagriculture.gov.in/en/2021/05/05/vegetable-development-2/\"> Vegetable Development </a><br> 4.<a target=\"_blank\" href=\"https://keralaagriculture.gov.in/en/2021/05/05/coconut-development-2/\">Coconut Development</a><br> 5.<a target=\"_blank\" href=\"https://keralaagriculture.gov.in/en/2021/09/13/fwfb/\">Farmer Welfare Fund Board </a><br> "],
        central_government:["These are some of the central government schemes availble for farmers: <br> 1.<a target=\"_blank\" href=\"http://agriinfra.dac.gov.in/\"> Agriculture Infrastructure Fund</a><br> 2.<a target=\"_blank\" href=\"https://extensionreforms.dacnet.nic.in/DashBoard_Statusatma.aspx\"> ATMA</a> <br> 3.<a target=\"_blank\" href=\"https://agmarknet.gov.in/PriceAndArrivals/arrivals1.aspx\"> AGMARKNET</a><br> 4.<a target=\"_blank\" href=\"https://midh.gov.in/nhmapplication/feedback/midhKPI.aspx\">Horticulture</a><br> 5.<a target=\"_blank\" href=\"https://agriwelfare.gov.in/Documents/Pesticides_Registration.pdf\">Online Pesticide Registration</a><br> 6. <a target=\"_blank\" href=\"https://pqms.cgg.gov.in/pqms-angular/home\">Plant Quarantine Clearance</a><br> 7. <a target=\"_blank\" href=\"https://www.dbtdacfw.gov.in/\">DBT in Agriculture</a><br> 8. <a target=\"_blank\" href=\"https://pmksy.gov.in/mis/frmDashboard.aspx\">Pradhanmantri Krishi Sinchayee Yojana</a> <br> 9. <a target=\"_blank\" href=\"https://mkisan.gov.in/Home/KCCDashboard\">Kisan Call Center</a><br> 10. <a target=\"_blank\" href=\"https://mkisan.gov.in/\">mKisan</a><br> 11. <a target=\"_blank\" href=\"https://pgsindia-ncof.gov.in/home.aspx\">Jaivik Kheti</a><br> 12. <a target=\"_blank\" href=\"https://enam.gov.in/web/\">e-Nam</a><br> 13. <a target=\"_blank\" href=\"https://soilhealth.dac.gov.in/home\">Soil Health Card</a><br> 14.<a target=\"_blank\" href=\"https://pmfby.gov.in/ext/rpt/ssfr_17\">Pradhan Mantri Fasal Bima Yojana</a><br>"]
    };

    return mockSchemes[selectedState] || [];
}

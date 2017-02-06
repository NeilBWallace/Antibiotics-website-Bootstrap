function retrieve_drugs() {

    var drug = [
           {
               ID: 1,
               Area: "Upper Respiratory",
               Infection: "Otitis media (acute)",
               Comments: "Offer an immediate antibiotic prescription if:<li> " +
               "Patient is systemically unwell </li><li> Patient at high risk of serious " +
               "complications </li><li> Patients with symptoms for > 4 days and are not improving." +
               "</li>Consider 2 or 3 day delayed prescription or immediate antibiotics for pain relief if:" +
               "<li>< 2 years with bilateral acute otitis media (AOM)or bulging membrane and " +
               "≥ 4 marked symptoms<li> All ages with otorrhoea",
               FirstLine: "Do not routinely prescribe antibiotics. For acute attacks with no systemic features advise paracetamol or ibuprofen for pain. ",
               SecondLine: "Amoxicillin or Clarithromycin (penicillin allergy) for 5 days. Consult current BNF for Children for doses.  "
           }
    ,
    {
        ID:2,
        Area: "Upper Respiratory",
        Infection: "Otitis Externa (acute)",
        Comments: "<p>Only consider adding an oral antibiotic for patients with severe infection. If an oral antibiotic is required, consider a 7 day course of Flucloxacillin or Clarithromycin if the patient is penicillin allergic.<li > Do <b > NOT </b> prescribe Chloramphenicol ear drops as they can cause dermatitis in about 10 % of patients.</li><li > Do <b > NOT </b> prescribe Fluoroquinolone♣ ear drops(Ciprofloxacin♣ or Ofloxacin♣) as they are unlicensed.",
        FirstLine: "Do not routinely prescribe oral antibiotics and advise use of adequate analgesia.",
        SecondLine: "Acetic acid 2% Spray TDS. For more severe cases (pain, deafness, discharge) consider a topical antibiotic with or without a corticosteroid. <p> For 7 days"
    },

    {
        ID:3,
        Area: "Upper Respiratory",
        Infection: "Sinusitis (acute)",
        Comments: "",
        FirstLine: "Do not routinely prescribe prescribe antibiotics and advise use of adequate analgesia. Only prescribe antibiotics for those at high risk of complications or when acute bacterial sinusitis is suspected.",
        SecondLine: "Amoxicillin 500 mg TDS or Clarithromycin 500mg BD or Doxycycline 200mg stat then 100mg OD.<p > Consider Erythromycin for pregnant women and Co-amoxiclav♣ for persistent symptoms.<p> For 7 days"
    },

    {
        ID: 5,
        Area: "Lower Respiratory",
        Infection: "Bronchiectasis (infective exacerbation of non CF patients)",
        Comments: "<b>Send sputum for culture and sensitivity testing BEFORE starting antibiotics</b>. If there is no previous bacteriology available, promptly prescribe an antibiotic as indicated and do not await the results of culture.<p > Review the response to empirical treatment when culture and sensitivity results are available.<p > If culture and sensitivity results are available, prescribe according to advice.",
        FirstLine: "Amoxicillin 500mg TDS <p > for 10 to 14 days",
        SecondLine: "<b>Penicillin allergy</b> Clarithromycin 500mg BD or Doxycycline 200mg stat then 100mg OD for 10 to 14 days"
    },

    {
        ID: 6,
        Area: "Lower Respiratory",
        Infection: "Bronchitis (acute)",
        Comments: "Consider immediate antibiotics if<br/> > 80 years <b > and </b>oral steroids,diabetic,congestive heart failure <br/><b > OR </b><br/> 65 years with 2 of above.",
        FirstLine: "Amoxicillin 500mg TDS for 5 days",
        SecondLine: "Doxycycline 200mg stat then 100mg OD or Clarithromycin 500mg for 5 days"
    },

    {
        ID: 7,
        Area: "Lower Respiratory",
        Infection: "Community acquired pneumonia - treatment in the community",
        Comments: "<b>Start antibiotics immediately.</b> Use <b>CRB65</b> score to help guide and review. <p > 1 - 2 = hospital assessment or admission.<p > 3 - 4 = Urgent admission. <p > Each scores 1: Confusion(AMT < 8); Respiratory rate > 30 / minute; BP systolic < 90 or diastolic ≤60; Age > 65. <p > Give immediate IM Benzylpenicillin or oral Amoxicillin (1G) or Clarithromycin (500mg) in penicillin allergy if delayed admission or life threatening.",
        FirstLine: "<b> If CRB65 score = 0 </b> <br/> Amoxicillin 500mg TDS for 5 days <p > <br/><b > If CRB65 score = 1 and patient at home </b> <br/> Amoxicillin 500mg TDS plus Clarithromycin 500mg BD for 7 to 10 days ",
        SecondLine: "<b>If CRB65 score = 0 </b><br/> Clarithromycin 500mg BD for 5 days <br/> or  <br/> Doxycycline 200mg stat then 100mg OD for 5 days <br/><b > If CRB65 score = 1 and patient at home </b> <br/> Doxycyline 200mg stat then 100mg OD for 7 to 10 days"
    },

    {
        ID: 8,
        Area: "Meningitis",
        Infection: "Suspected meningococcal disease",
        Comments: "<b>Transfer all patients to hospital immediately.</b><br/> See Intranet for complete guideline.",
        FirstLine: "<p>Adults and children aged 10 years and over Benzylpenicillin IV (preferable) or IM 1200mg,<p > Children aged 1 to 9 years 600mg,children aged under 1 year 300mg",
        SecondLine: "Withhold benzylpenicillin only in children and young people who have a clear history of anaphylaxis after a previous dose; a history of a rash following penicillin is not a contraindication. <br/> <font color ='Red'>HCT ONLY</font></style> <br/><font color='yellow'>cefotaxime</font> IV (preferable) or IM <br/> Adults and children over 12 years 1g <br/> Child under 12 years 50mg / kg"
    },

    {
        ID: 9,
        Area: "Urinary Tract",
        Infection: "UTI in women with no visible haematuria, not pregnant or catheterised (all ages from 14 years onwards) ",
        Comments: "An antibiotic should be offered when symptoms are moderate or severe.  If symptoms of a UTI persist following treatment, send urine for culture and sensitivity and adjust treatment as necessary. ",
        FirstLine: "Nitrofurantoin 100mg BD (MR) or 50mg QDS for 3 days",
        SecondLine: "Trimethoprim 200mg BD or Pivmecillinam 400mg stat then 200mg TDS (where sensitivities available) for 3 days"
    },

    {
        ID: 10,
        Area: "Urinary Tract",
        Infection: "UTI in women with haematuria and not pregnant (all ages from 14 years onwards) ",
        Comments: "Midstream specimen of urine should always be taken to confirm sensitivity.<br/> See intranet for complete guideline",
        FirstLine: "Nitrofurantoin 100mg BD (MR) or 50mg QDS for 3 days",
        SecondLine: "Trimethoprim 200mg BD or Pivmecillinam 400mg stat then 200mg TDS (where sensitivities available) for 3 days"
    },

    {
        ID: 11,
        Area: "Urinary Tract",
        Infection: "UTI in pregnancy",
        Comments: "<b>MSU should always be taken to confirm sensitivity. Do not use " +
        "dipstick testing to screen for bacterial UTI at any antenatal visit. </b>" +
        "<p > A further MSU should be sent 7 days after treatment has finished as a " +
        "test of cure.If treating with trimethoprim, give folic acid 5mg daily during first trimester and do " +
        "not give trimethoprim if folate deficiency is suspected or woman is taking a folate antagonist." +
         "<p > Do not use nitrofurantoin in women who are G6PD deficient." +
         "<p > Short term use of nitrofurantoin is unlikely to cause problems to the foetus." +
         "<p > Cefalexin♣ is less preferred due to concerns that broad spectrum antibiotics increase the risk of < i > Clostridium difficile </ i > which can be life threatening in pregnant women and also because of the risk of resistant UTIs." +
        "  <p > Amoxicillin is only recommended if the organism is susceptible as resistance is common." +
        "<br/> See intranet for complete guideline",
        FirstLine: "Nitrofurantoin 50mg QDS for 7 days",
        SecondLine: "Trimethoprim 200mg BD (off label use) or Cefalexin♣ 500mg BD (less preferred) for 7 days"
    },

    {
        ID: 12,
        Area: "Urinary Tract",
        Infection: "Asymptomatic bacteriuria in pregnancy (only treat when sensitivities are known)",
        Comments: "Screen for asymptomatic bacteriuria at the first antenatal visit by sending urine for culture.<br/> See intranet for complete guideline.",
        FirstLine: "Amoxicillin 500mg TDS for 7 days",
        SecondLine: "Nitrofurantoin 100mg MR BD or 50mg QDS or Trimethoprim 200mg BD (off label use) or Cefalexin♣ 500mg BD (less preferred) for 7 days"
    },

    {
        ID: 13,
        Area: "Urinary Tract",
        Infection: "UTI with catheter",
        Comments: "CSU should always be taken to confirm sensitivity. NEVER use dipstick testing to diagnose UTI in catheterised patients.<br/> See Intranet for complete guideline.",
        FirstLine: "Trimethoprim 200mg BD for 7 days",
        SecondLine: "Nitrofurantoin 100mg BD MR or 50mg QDS for 7 days"
    },

    {
        ID: 14,
        Area: "Urinary Tract",
        Infection: "UTI in men",
        Comments: "<b>MSU should always be taken to confirm sensitivity</b>. Consider prostatitis.",
        FirstLine: "Trimethoprim 200mg BD<p > for 7 days",
        SecondLine: "Nitrofurantoin 100mg BD (MR) or 50mg QDS or Pivmecillinam 400mg stat then 200mg TDS (where sensitivities available) <p > for 7 days"
    },

    {
        ID: 15,
        Area: "Urinary Tract",
        Infection: "UTI in children ( ≤ 16 years)",
        Comments: "<p><b>Children < 3 months</b>  Refer for emergency assessment but do not take an MSU as this will not alter management in primary care." +
        "<p ><b > Children 3 months to 3 years </b> Urgently refer those children at high risk for serious illness and consider referring those at intermediate risk for serious illness. For all other children, treat with antibiotics whilst awaiting results of urine culture." +
        "<p ><b > Children over 3 years </b> Urgently refer those children at high risk for serious illness and consider referring those at intermediate risk for serious illness. For all other children, send an MSU before treating with an antibiotic.",
        FirstLine: "Trimethoprim (see BNF for children for doses) for 3 days",
        SecondLine: "<p>Nitrofurantoin (see BNF for children for doses) for 3 days" +
        "<p > or Co-amoxiclav♣ (for upper UTI and treat for 7 - 10 days)"
    },

    {
        ID: 16,
        Area: "Urinary Tract",
        Infection: "UTI - recurrent (≥ 3 per year) in non-pregnant women over 14 years",
        Comments: "<p>Consider prophylactic treatment when there is unacceptable discomfort or disruption to daily life." +
        "<p > Offer a script for stand - by treatment before considering prophylactic antibiotics." +
        " <br/> See Intranet for complete guideline.",
        FirstLine: "Trimethoprim 100mg nocte for 6 month trial",
        SecondLine: "Nitrofurantoin 50mg to 100mg nocte 6 month trial"
    },

    {
        ID: 17,
        Area: "Urinary Tract",
        Infection: "Pyelonephritis (acute)",
        Comments: "<p><b>MSU should always be taken to confirm sensitivity.</b> If no response within 24 hours or there is clinical deterioration, arrange for admission.",
        FirstLine: "Ciprofloxacin♣ 500mg BD for 7 days",
        SecondLine: "<p> Co-amoxiclav♣ 625mg TDS for 14 days" +
        "<p ><b ><u> For pregnant women </u></b>" +
        "Cefalexin♣ 500mg BD for 10 to 14 days"
    },

    {
        ID: 18,
        Area: "Urinary Tract",
        Infection: "Prostatitis (acute)",
        Comments: "<b>MSU should always be taken to confirm sensitivity.</b>" +
        "<p > 4 weeks treatment may prevent chronic infection.Quinolones♣ are more effective as they achieve higher prostate levels.If patient is sexually active," +
        "chlamydia needs to be excluded",
        FirstLine: "Ciprofloxacin♣ 500mg BD for 4 weeks",
        SecondLine: "Trimethoprim 200mg BD (off label use) for 4 weeks"
    },

    {
        ID: 20,
        Area: "Gastro Intestinal Tract",
        Infection: "Gastro-enteritis",
        Comments: "<b>Antibiotics are not recommended for adults with diarrhoea of unknown pathology.</b>" +
        "<p > Evidence from 3 small randomised controlled trials(RCTs) suggests they have minimal benefits," +
        "there is a risk of serious adverse effects associated with their use and their use promotes the development of resistant bacteria." +
        "<p > Fluid replacement is essential and check travel," +
        "food," +
        "hospital and antibiotic history as C.difficile is increasing. <p > Please send stool specimens from suspected cases of food poisoning and post antibiotic use and notify Public Health England after seeking advice from a public health doctor if an outbreak is suspected.",
        FirstLine: "",
        SecondLine: ""
    },

    {
        ID: 21,
        Area: "Gastro Intestinal Tract",
        Infection: "Clostridium difficile Infection (CDI)",
        Comments: "When prescribing an antibiotic for any indication in patients who have had a previous <i>Clostridium difficile</i> infection, advice should be sought from a microbiologist to avoid any potential relapse." +
        "<p > Stop all antibiotics unless it is absolutely essential that they are continued in which case the patient should be carefully monitored for deterioration(consider hospital admission in these circumstances) and review need for PPI therapy. ",
        FirstLine: "Metronidazole 400mg to 500mg TDS (1st/2nd episodes) for 10-14 days",
        SecondLine: "Vancomycin 125mg QDS (3rd episode or if severe or if type 027 confirmed). Fidaxomicin 200mg BD should be considered for patients with severe CDI who are considered at high risk for recurrence, only after discussion  with a microbiologist for 10-14 days"
    },

    {
        ID: 22,
        Area: "Gastro Intestinal Tract",
        Infection: "CDI recurrence",
        Comments: "<p>Discuss management with a consultant microbiologist for advice on sending specimens and treatment options. Sending repeat specimens within 28 days of a positive test are not helpful due to ongoing presence of toxins in the gut." +
        "<p > Recurrent disease occurs in about 20 % of patients treated initially with either Metronidazole or vancomycin.The same antibiotic that was used initially can be used to treat the first recurrence.Withhold antibiotic treatment if symptoms mild." +
        "<p > ",
        FirstLine: "Fidaxomicin 200mg BD (discuss with microbiologist) for 14 days",
        SecondLine: "Vancomycin 125mg QDS for 14 days"
    },

    {
        ID: 23,
        Area: "Gastro Intestinal Tract",
        Infection: "Helicobacter pylori eradication (positive test)",
        Comments: "<p> SEE CURRENT BNF FOR INFORMATION.<br/> See Intranet for complete Guideline.",
        FirstLine: "PPI (eg Lansoprazole 30mg BD) plus Amoxicillin 1G BD with either Clarithromycin 500mg BD or Metronidazole 400mg BD for 7 days<br/> <b > OR </b><br/> PPI(eg Lansoprazole 30mg BD) plus Clarithromycin 250mg BD with Metronidazole 400mg BD for 7 days",
        SecondLine: "PPI BD plus 2 unused antibiotics: Amoxicillin 1G BD, Metronidazole 400mg BD, Tetracycline 500mg QDS, Clarithromycin 500mg BD, Levofloxacin♣ 250mg BD for 14 days"
    },

    {
        ID: 24,
        Area: "Gastro Intestinal Tract",
        Infection: "Threadworm",
        Comments: "<p>Treat all household contacts. Advise morning showers/baths and general hand hygiene for 2 weeks PLUS wash sleepwear, bed linen, dust and vacuum on day one. " +
        "<p > Also clean bathroom thoroughly," +
        "by damp dusting surfaces with cloth rinsed frequently in hot water.For children under the age of 6 months and pregnant women," +
        "physical removal of eggs and hygiene measures should be used for 6 weeks.",
        FirstLine: "Mebendazole 100mg stat (for adults and children over 6 months but unlicensed in children under 2 years). Repeat stat dose after 14 days.",
        SecondLine: ""
    },

    {
        ID: 25,
        Area: "Gastro Intestinal Tract",
        Infection: "Diverticulitis (acute)",
        Comments: "<p>Broad spectrum antibiotics should be prescribed to cover both anaerobes and Gram-negative rods." +
        "<p > Paracetamol should be prescribed for pain(avoid NSAIDs and opioid analgesics where possible due to increased risk of diverticular perforation) and the patient should be advised to consume clear liquids only." +
        "<p > Solid food can be gradually introduced as symptoms improve over 2 to 3 days." +
        "<p > Review within 48 hours or sooner if symptoms deteriorate.",
        FirstLine: "Co-amoxiclav♣ 625mg TDS for 7 days",
        SecondLine: "Metronidazole 400mg TDS plus Ciprofloxacin♣ 500mg BD in penicillin allergy for 7 days"
    },

    {
        ID: 26,
        Area: "Genital Tract",
        Infection: "Vaginal candidiasis",
        Comments: "Evidence shows that oral triazoles are as effective as vaginal imidazoles. Many treatments are available to buy ‘over the counter’.",
        FirstLine: "Clotrimazole cream 10% PV or Clotrimazole 500mg pessary<p > STAT dose",
        SecondLine: "Fluconazole 150mg oral <p > STAT dose "
    },

    {
        ID: 27,
        Area: "Genital Tract",
        Infection: "Vaginal candidiasis in pregnancy",
        Comments: "<p>Counsel patient that applicators may be used but care must be taken to avoid damage to the cervix. " +
        "<p > Pessaries may be inserted by hand." +
        "<p > For vulval symptoms," +
        "consider prescribing topical Clotrimazole cream in addition to intravaginal Clotrimazole or Miconazole.",
        FirstLine: "Clotrimazole 100mg pessary for 7 days",
        SecondLine: "Miconazole 2% intravaginal cream one applicatorful BD for 7 days"
    },

    {
        ID: 28,
        Area: "Genital Tract",
        Infection: "Bacterial vaginosis",
        Comments: "A stat dose of Metronidazole 2g is associated with a higher relapse rate than a 7 day course." +
        "<p  style = 'font-size:50>Avoid 2g stat dose in pregnancy. Topical treatment gives similar cure rates but is more expensive.",
        FirstLine: "Metronidazole 400mg BD or 2g stat for 5 to 7 days",
        SecondLine: "Clindamycin 2% vaginal cream 5g at night for 7 days<br/> OR <br/>Metronidazole 0.75 % vaginal gel 5g at night for 5 days"
    },

    {
        ID: 29,
        Area: "Genital Tract",
        Infection: "Chlamydia trachomatis",
        Comments: "<p>All people with a positive chlamydia test should be offered treatment, support to notify partners and testing for other STIs." +
        "<p > This service can be provided by GPs or GUM clinics." +
        "<p > Refer to BASHH guidelines in pregnancy or breastfeeding as Doxycycline is contraindicated and test for cure 6 weeks after treatment(5 weeks with Erythromycin) due to lower cure rate in pregnancy. ",
        FirstLine: "Azithromycin 1g STAT dose",
        SecondLine: "Doxycycline 100mg BD for 7 days"
    },


    {
        ID: 30,
        Area: "Genital Tract",
        Infection: "Epididymo-orchitis",
        Comments: "Use ofloxacin♣ for all cases where patient is allergic to Cephalosporins♣ and/or Doxycycline. If Quinolones♣ are contraindicated, Co-amoxiclav♣ 625mg TDS for 10 days can be used.",
        FirstLine: "Due to any sexually transmitted pathogen Triaxone♣ 500mg IM(stat) PLUS Doxycycline 100mg BD for 10 to 14 days",
        SecondLine: "<p><u>Under</u> 35 years and/or high risk of sexually transmitted infection (non - gonoccocal)" +
          "Doxycycline 100mg BD or Ofloxacin♣ 200mg BD for 14 days" +
           "<p >< u > Over </ u > 35 years and / or low risk of sexually transmitted infection" +
            "Ciprofloxacin♣ 500mg BD(10 days) or Ofloxacin♣ 200mg BD(14 days)"
    },

    {
        ID: 31,
        Area: "Genital Tract",
        Infection: "Trichomonas vaginalis",
        Comments: "Refer to GUM clinic and treat partners simultaneously. Avoid 2g stat dose in pregnancy.",
        FirstLine: "Metronidazole 400mg to 500mg BD for 5-7 days <br > or 2g stat ",
        SecondLine: "Tinidazole 2g stat"
    },

    {
        ID: 32,
        Area: "Genital Tract",
        Infection: "Pelvic Inflammatory Disease (PID)",
        Comments: "Refer patients and contacts to GUM clinic. <p > Test for<i > N.Gonorrhoeae </i> and Chlamydia." +
        " <p > There is emerging clinical resistance to Quinolones♣ and they therefore should not be used for patients at high risk of gonococcal infection.",
        FirstLine: "Ceftriaxone♣ 500mg IM (single dose) plus 14 days of Metronidazole 400mg BD and Doxycycline 100mg BD if gonorrhoea likely.",
        SecondLine: "Metronidazole 400mg BD plus ofloxacin♣ 400mg BD for 14 days"
    },



    {
        ID: 33,
        Area: "Viral Infections",
        Infection: "Chicken Pox",
        Comments: " If pregnant, immunocompromised or neonatal seek urgent specialist advice." +
        "<p > If patients develop life - threatening complications such as encephalitis, pneumonia or CNS deterioration they should be sent immediately to hospital.It is recommended that non-immune immunocompromised patients or pregnant women who come into contact with chicken pox are given Varicella - Zoster immunoglobulin(VZIG) if they meet the criteria according to the current 'green' book." +
         "<p > Supplies can be obtained from PHE Colindale on 020 8327 7471.",
        FirstLine: " <p > Consider Aciclovir if onset of rash is < 24 hours and patient is over 14 years; or severe pain; or dense/ oral rash; or secondary household case; or smoker. <br/> Aciclovir 800mg five times a day for 7 days",
        SecondLine: "No second line agent"
    },


    {
        ID: 34,
        Area: "Viral Infections",
        Infection: "Herpes Simplex (oral)",
        Comments: "Counsel patient that treatment needs to be initiated at the onset of symptoms before vesicles appear and that topical antivirals only affect the course of the current episode - they do not cure the individual or prevent further recurrence.",
        FirstLine: "Cold sores resolve after 7-10 days without treatment.",
        SecondLine: "Aciclovir 5% topical cream five times a day for 5 days"
    },

    {
        ID: 35,
        Area: "Viral Infections",
        Infection: "Shingles",
        Comments: "",
        FirstLine: "If pregnant or immunocompromised, seek urgent specialist advice. Treat if over 50 years and within 72 hours of the rash or if there is active ophthalmic infection, non- truncal involvement, moderate/severe pain or rash. <br/> Aciclovir 800mg five times a day for 7 days",
        SecondLine: "Valaciclovir 1g TDS or Famciclovir 500mg TDS or Famciclovir 750mg OD<b > Use if compliance is a problem because cost is considerably greater than Aciclovir </b> for 7 days"
    },

    {
        ID: 36,
        Area: "Dental Infections",
        Infection: "Dental Abscess",
        Comments: "<p>  For HCT patients please see separate policy available on request." +
       "<p > Advise the patient to seek treatment from a dental practitioner.Only prescribe an antibiotic for patients who are systemically unwell or if there are signs of severe infection such as fever, lymphadenopathy, cellulitis or diffuse swelling or if there is a high risk of complications.",
        FirstLine: "Amoxicillin 500mg TDS or Phenoxymethylpenicillin 500mg - 1G QDS." +
         "<p > In severe or spreading infection add Metronidazole 400mg TDS" +
         "<p > For 5 days.",
        SecondLine: "Clarithromycin 500mg BD (penicillin allergy) In severe or spreading infection add Metronidazole 400mg TDS for 5 days"
    },

    {
        ID: 37,
        Area: "Upper Respiratory",
        Infection: "Pharyngitis / sore throat / tonsillitis",
        Comments: "<p>Patients with 3 or 4 Centor criteria (history of fever, purulent or enlarged tonsils, cervical adenopathy, absence of cough) or history of otitis media may benefit from antibiotics." +
         "<p > Prescribe an antibiotic for those with features of marked systemic upset, an increased risk of serious complications and patients with valvular heart disease.",
        FirstLine: "Do not routinely prescribe antibiotics. Consider a delayed prescribing strategy.",
        SecondLine: "<p > Phenoxymethylpenicillin 500mg QDS for 10 days <p > Clarithromycin 500mg BD for 5 days"
    },

    {
        ID: 38,
        Area: "Lower Respiratory",
        Infection: "Acute exacerbation of COPD",
        Comments: "Treat exacerbations promptly with antibiotics if purulent sputum or clinical signs of pneumonia. Risk factors for antibiotic resistant organisms include co-morbidities, severe COPD, frequent exacerbations or antibiotic treatment within last 3 months. Oral steroids may be considered in conjunction with antibiotics where increased breathlessness interferes with the activities of daily living.",
        FirstLine: "Amoxicillin 500mg TDS or Doxycycline 200mg stat then 100mg OD for 5 days",
        SecondLine: "Clarithromycin 500mg BD or Co-amoxiclav♣ 625mg TDS(only if patient has antibiotic resistance factors such as comorbid disease, severe COPD, frequent exacerbations or antibiotic use in the last 3 months) for 5 days"
    },

    {
        ID: 39,
        Area: "Lower Respiratory",
        Infection: "(HCT) Low Severity Community Acquired Pneumonia: Treatment in Hospital Setting",
        Comments: "<p>Do not routinely offer a glucocorticosteriod to patients with community acquired pneumonia unless they have other conditions for which glucocorticosteriod therapy is indicated (NICE) ",
        FirstLine: "If CRB65 score 0-1:  Amoxicillin 500mg – 1g tds <br/> If <b > penicillin allergic </b>:  Clarithromycin 500mg bd PO for 7 days" +
         "<br/> If CRB65 score 2:  Amoxicillin 500mg – 1g tds plus Clarithromycin 500mg bd PO" +
    "<br/> If <b > penicillin allergic </b>:  Doxycycline 200mg STAT po then 100mg od for 7 days",
        SecondLine: "If CRB65 score 0-1, 2 <p > Alternative if intravenous treatment needed because patient cannot take by mouth:" +
                          "Amoxicillin 500mg – 1g tds IV / Clarithromycin 500mg bd IV for 7 days"
    },


    {
        ID: 40,
        Area: "Lower Respiratory",
        Infection: "(HCT) Moderate and High severity Community Acquired Pneumonia: Treatment in Hospital Setting",
        Comments: "Offer antibiotic therapy as soon after diagnosis as possible and certainly within 4 hours (NICE)." +
       "<p > Do not routinely offer a glucocorticosteriod to patients with community acquired pneumonia unless they have other conditions for which glucocorticosteriod therapy is indicated (NICE)",
        FirstLine: "If CRB65 score 3 - 5:  Co-amoxiclav♣ 1.2g tds IV plus Clarithromycin 500mg bd IV" +
          "<br/> Switch to oral Co-amoxiclav / Clarithromycin when clinically appropriate for 10 days",
        SecondLine: "<p>  CRB65 score 3-5<p ><b > If penicillin allergic </b>:  Teicoplanin 400mg once daily(after" +
          "3 loading doses of 400mg 12 hourly) plus Clarithromycin 500mg bd IV / po <b> (Consult Consultant Microbiologist advice) </b>10 days depending on clinical judgement"
    },

    {
        ID: 41,
        Area: "Lower Respiratory",
        Infection: "(HCT) Aspiration pneumonia ",
        Comments: "",
        FirstLine: "Co-amoxiclav♣ IV 1.2g 8 hourly for 7-10 days",
        SecondLine: "If allergic to penicillin: Clarithromycin IV/oral 500mg 12 hourly plus Metronidazole IV 500mg or oral 400mg 8 hourly<br/> If severe and hospital acquired add Ciprofloxacin as above for 7 - 10 days"
    },


    {
        ID: 42,
        Area: "Septicaemia",
        Infection: "(HCT) Septicaemia",
        Comments: "Continue to follow the care plan as provided by the acute setting",
        FirstLine: "",
        SecondLine: ""
    },

    {
        ID: 43,
        Area: "Urinary Tract Infection",
        Infection: "(HCT) Urinary catheter insertion or change ",
        Comments: "",
        FirstLine: "",
        SecondLine: ""
    },

    {
        ID: 44,
        Area: "Gastro Intestinal Tract",
        Infection: "(HCT) Clostridium difficile infection (CDI)",
        Comments: "70% respond to Metronidazole in 5 days; 92% in 14 days. Recurrent disease occurs in about 20% of patients treated initially with either Metronidazole or vancomycin. The same antibiotic that was used initially can be used to treat the first recurrence because the majority of recurrences are reinfections as opposed to relapses." +
        "<b> Vancomycin preparation for injection is now licensed for oral use and is cheaper than the capsules(~£32 versus £90 for a 10 - to 14 - day course).It is also easier to swallow.The contents of vials for parenteral administration may be used for oral administration. After initial reconstitution of the vial, the selected dose may be diluted in 30 ml of water and given to the patient to drink, or the diluted material may be administered by a nasogastric tube.  </b>" +
       "<p >  <p ><b > Prompt starting of treatment if essential - staff MUST contact their on call pharmacist OR other community hospitals to obtain treatment antibiotics if there is none on site out of hours.  In hours obtain promptly from usual pharmacy<b >",
        FirstLine: "<b>CDI Disease Severity Treatment" +
         " Failure to respond after 7th day of treatment or evidence of worsening symptoms / failure to respond </b>" +
         "<p ><b > Mild & Moderate </b>" +
          "Oral Metronidazole 400 - 500mg tds for 10 - 14 days" +
         " Oral vancomycin 125mg qds for 10 - 14 days." +
          "Discuss with consultant microbiologist" +
          "<p ><b > Severe </b>" +
          "<p > Oral vancomycin 125mg qds for 10 - 14 days" +
          " <p > NB: Oral fidaxomicin 200mg bd for 10 - 14 days could be considered for patients with severe CDI who are considered at high risk of recurrence, but only in consultation with a consultant microbiologist; these include elderly patients with multiple co - morbidities who are receiving concomitant antibiotics." +
          "In severe CDI cases not responding to oral vancomycin 125mg qds, high dose oral vancomycin(up to - 500mg qds, administered via nasogastric tube if necessary), +/ -IV Metronidazole 500mg tds is recommended.Oral fidaxomicin 200mg bd is an alternative but only on consultation with a consultant microbiologist." +
          "<p ><b > Life Threatening </b>" +
         "<p > Oral vancomycin up to 500mg qds for 10 - 14 days(via NG tube if necessary) or rectal installation plus IV Metronidazole 500mg tds" +
         "<p > **NOTE: Where local prevalence of ribotype 027 is increased or where there is suspicion of ribotype 027, oral vancomycin (125mg – 500mg qds) may be recommended, as 1st line treatment.Discuss with consultant microbiologist" +
         "<p > Patients with severe or life threatening CDI require close monitoring with specialist surgical input(PHE, 2013) and should be transferred to the local acute hospital.",
        SecondLine: ""
    },

    {
        ID: 45,
        Area: "Gastro Intestinal Tract",
        Infection: "(HCT) CDI recurrence",
        Comments: "Send stool sample for confirmation. Withhold antibiotic treatment if symptoms mild. Discuss management with a consultant microbiologist. Fidaxomicin is preferred for recurrent disease because of the increased risk of further recurrences.",
        FirstLine: "<p>**NOTE:<p > 1.Where local prevalence of ribotype 027 is increased or where there is suspicion of ribotype 027," +
         "oral vancomycin(125mg – 500mg qds) may be recommended, as 1st line treatment.Discuss with consultant microbiologist" +
         " <p > Patients with severe or life threatening CDI require close monitoring with specialist surgical input(PHE, 2013) and should be transferred to the local acute hospital.",
        SecondLine: ""
    },

    {
        ID: 46,
        Area: "Skin Infections",
        Infection: "Acne (moderate or severe)",
        Comments: "<p>For mild acne, a topical retinoid such as adapalene." +
     "<p  > Oral antibiotics and topical antibiotics should not be prescribed together." +
     "<p > For moderate or severe acne," +
      "Lymecycline 408mg OD or OxyTetracycline 500mg BD for up to 6 months.Discontinue when further improvement is unlikely." +
       "<p > Tetracyclines should not be used in pregnancy, breastfeeding or in children under the age of 12 as they are deposited in teeth and bones.",
        FirstLine: "<p>For mild acne, a topical retinoid such as adapalene.<p > For moderate or severe acne Lymecycline 408mg OD or OxyTetracycline 500mg BD for up to 6 months.Discontinue when further improvement is unlikely.",
        SecondLine: "Erythromycin 500mg (2x250mg) BD (in pregnancy or if Tetracyclines not tolerated) <p > Treat for up to 6 months.Discontinue when further improvement is unlikely."
    },

    {
        ID: 47,
        Area: "Skin Infections",
        Infection: "Bites (animal and human)",
        Comments: "Thorough irrigation is important. Antibiotic prophylaxis advised for all cat bites; animal bites to the hand, foot or face; puncture wounds; wounds requiring surgical debridement; wounds involving joints, tendons, ligaments or suspected fractures. " +
        "<p > Also patients at risk of serious wound infection e.g.diabetics," +
        "cirrhotics,asplenic or immunocompromised patients and the elderly." +
        "<p > Antibiotic prophylaxis advised for all human bites and review after 24 and 48 hours if infected." +
        " <p > Assess for HIV, tetanus, hepatitis B & C in human bites and tetanus and rabies risk in animal bites. ",
        FirstLine: "Co-amoxiclav♣ 375mg - 625mg TDS (animal and human) for 7 days",
        SecondLine: "Animal Bites (penicillin allergy) Metronidazole 400mg TDS plus Doxycycline 100mg BD for 7 days<p > Human Bites(penicillin allergy) Metronidazole 200mg to 400mg TDS plus Clarithromycin 250mg to 500mg BD for 7 days"
    },

    {
        ID: 48,
        Area: "Skin Infections",
        Infection: "Bites (insect)",
        Comments: "Treat as for cellulitis if infected. Fever/lymphangitis are indicators for treatment. Hot/sore bites may be due to local histamine release.",
        FirstLine: "Flucloxacillin 250mg - 500mg QDS for 7 days",
        SecondLine: "Clarithromycin 250mg – 500mg BD (penicillin allergy) for 7 days"
    },

    {
        ID: 49,
        Area: "Skin Infections",
        Infection: "Boils",
        Comments: "Antibiotics are not always necessary but can be considered if the lesion is large or there is associated fever or cellulitis, there are co-morbidities e.g. diabetes or complications are more likely because of the site affected e.g. face. Self care advice should also be given",
        FirstLine: "Flucloxacillin 250mg – 500mg  for 7 days",
        SecondLine: "Clarithromycin 250mg – 500mg BD (penicillin allergy) or Erythromycin 250mg – 500mg (2x250mg) QDS (in pregnancy) for 7 days"
    },

    {
        ID: 50,
        Area: "Skin Infections",
        Infection: "Cellulitis - mild or moderate",
        Comments: "Patients who are afebrile and otherwise healthy should be treated as indicated with a single antibiotic. If response is slow, treat for a further 7 days. Consider referring patients who have recurrent cellulitis, the elderly and those who are vulnerable to infection.",
        FirstLine: "Flucloxacillin 500mg QDS for 7 days",
        SecondLine: "<p>Clarithromycin 500mg BD (penicillin allergy) for 7 days<p > Co-amoxiclav♣ (for facial cellulitis) 625mg TDS for 7 days"
    },

    {
        ID: 51,
        Area: "Skin Infections",
        Infection: "Conjunctivitis",
        Comments: "Most infections are viral, self-limiting and will clear within 1-2 weeks without treatment (even if they are bacterial). Chloramphenicol is available to buy over the counter for patients over the age of 2 years.",
        FirstLine: "Local cleansing of affected eye(s) using boiled, cooled water can be recommended before use of topical antibiotics.<p  > Treat for 48 hours after resolution",
        SecondLine: "Chloramphenicol 0.5% drops 2 hourly for 2 days then 4 hourly whilst awake or chloramphenicol 1% eye ointment at night or Fusidic acid eye drops 1% BD<p > Treat for 48 hours after resolution "
    },

    {
        ID: 52,
        Area: "Skin Infections",
        Infection: "Dermatophyte finger or toe nail infection",
        Comments: "<p > Take behind the nail scrapings.<p > Fingers require 2 pulsed courses and toes require at least 3 courses",
        FirstLine: "Treatment should ONLY be started if infection is confirmed. If symptoms are not troublesome or pateints are not at increased risk of developing side effects, then self care measures should be considered. ENHCCG have stated that the treatment of dermatophyte infections is a LOW priority." +
           "<br/> Terbinafine 250mg OD <p > Fingers 6 to 12 weeks <p > Toes 3 - 6 months",
        SecondLine: "<p>Amorolfine 5% topical paint (very superficial infections only) once or twice a week" +
       "<p > Fingers - 6 months" +
        "<p > Toes – 9 to 12 months" +
        "<p > Itraconazole pulsed therapy 200mg BD 1 week with subsequent courses repeated after 21 days"
    },

    {
        ID: 53,
        Area: "Skin Infections",
        Infection: "Dermatophyte skin infection",
        Comments: "Send skin scrapings and consider oral Terbinafine or Itraconazole if intractable. Topical Terbinafine is as effective as Clotrimazole.",
        FirstLine: "Clotrimazole 1% cream BD-TDS for 1-2 weeks after the infected area has healed",
        SecondLine: "Terbinafine 1% cream BD (not licenced for use in children) for 7-14 days"
    },

    {
        ID: 54,
        Area: "Skin Infections",
        Infection: "Eczema",
        Comments: "If there are no visible signs of infection, the use of antibiotics either alone or in combination with corticosteroids, encourages resistance and does not improve healing. Consider infection if there is no response to emollients or topical steroids. In infected eczema, treat as per impetigo. ",
        FirstLine: "",
        SecondLine: ""
    },

    {
        ID: 55,
        Area: "Skin Infections",
        Infection: "Impetigo",
        Comments: "Topical treatments should be reserved for localised/minor infection to prevent resistance developing.",
        FirstLine: "Fusidic acid 2% cream/ointment TDS (non bullous/localised/minor infection) for 5 days<p  > OR Flucloxacillin 500mg QDS(bullous and non bullous) for 7 days",
        SecondLine: "Clarithromycin 250-500mg BD (penicillin allergy – bullous and non bullous) for 7 days"
    },

    {
        ID: 56,
        Area: "Skin Infections",
        Infection: "Leg Ulcers",
        Comments: "<b>Ulcers always colonise at some point. Antibiotics do not improve healing unless there is active infection.</b>" +
        "If response is slow,treat for a further 7 days.Swabs and antibiotics are only indicated if there is either cellulitis or evidence of clinical infection e.g.inflammation, redness, pyrexia, increased pain or enlarging ulcer.Send pre-treatment swab in active infection and review antibiotics after culture results. Refer for specialist opinion in severe infection e.g.diabetics.",
        FirstLine: "Flucloxacillin 500mg QDS for 7 days",
        SecondLine: "Clarithromycin 500mg BD for 7 days"
    },


    {
        ID: 57,
        Area: "Skin Infections",
        Infection: "Mastitis",
        Comments: "Antibiotic treatment is recommended if the woman has an infected nipple fissure, symptoms do not improve or are worsening after 12-24 hours despite effective milk removal or bacterial culture is positive." +
        "<p > Antibiotics indicated are only excreted in very small amounts and the infant should not be affected but occasionally stools may be looser or more frequent or the infant may be more irritable." +
         "<p > The woman should continue to breastfeed and paracetamol can be used to relieve discomfort in addition to warm compresses on the breast or a warm bath / shower.",
        FirstLine: "Flucloxacillin 500mg QDS for 14 days",
        SecondLine: "Erythromycin 250mg – 500mg QDS for 14 days"
    },

    {
        ID: 58,
        Area: "Skin Infections",
        Infection: "Pilonidal sinus disease (discharging)",
        Comments: "<p>Consider treatment with antibiotics if cellulitis is suspected. Refer patients to a colorectal or general surgical unit for treatment, urgency depending on clinical judgement. Offer paracetamol for pain and/or fever and consider NSAIDs if pain is not controlled. ",
        FirstLine: "Flucloxacillin 500mg QDS for 7 days",
        SecondLine: "<b>True penicillin allergy - </b>Clarithromycin 500mg BD(or Erythromycin 500mg QDS if pregnant or breastfeeding) PLUS Metronidazole 400mg TDS for 7 days"
    },


    {
        ID: 59,
        Area: "Skin Infections",
        Infection: "Post-operative wound infection",
        Comments: "",
        FirstLine: "<p>Flucloxacillin 500mg QDS (‘clean’ surgery) for 7 days" +
        "<p > Co-amoxiclav♣ 625mg TDS(contaminated abdominal or pelvic surgery) for 7 days",
        SecondLine: "Clarithromycin 500mg BD (penicillin allergy) for 7 days" +
        "<p > OR" +
         "<p > Clarithromycin 500mg BD plus Metronidazole 400mg TDS for 7 days"
    },

    {
        ID: 60,
        Area: "Skin Infections",
        Infection: "PVL",
        Comments: "Panton-Valentine Leukocidin (PVL) is a toxin produced by 4.9% of <i>S.aureus</i> from boils/abscesses. " +
        "<p > The bacteria can rarely cause severe invasive infections in healthy people." +
        "<p > Send swabs if recurrent boils / abscesses." +
        "<p > Risks: close contact in communities or sports, poor hygiene, eczema.",
        FirstLine: "",
        SecondLine: ""
    },

    {
        ID: 61,
        Area: "Skin Infections",
        Infection: "Scabies",
        Comments: "Treat whole body from ear/chin downwards including under the nails. The very young, elderly and immunocompromised should also apply treatment to the face and scalp. Treat <b>ALL</b> household and sexual contacts within 24 hours." +
        "<p > Note - Should only be treated if strong suspicion of scabies and preferably with firm diagnosis which requires skin scrapings of a burrow or under dermatoscope mites can be seen." +
        "<p > Ensure sufficient quantities of topical preparation supplied." +
        "<p > For the immunosuppressed  and for crusted scabies and for scabies in an institution - oral Ivermectin should be considered in consultation with a consultant microbiologist.",
        FirstLine: "Permethrin 5% dermal cream Repeat after 7 days.",
        SecondLine: "Malathion 0.5% aqueous liquid – in permethrin allergy Repeat after. For 7 days"
    },

    {
        ID: 62,
        Area: "Skin Infections",
        Infection: "(HCT) Acne (moderate or severe)",
        Comments: "Note antibiotics are only appropriate for inflammatory acne and will not clear the key lesion which is the blocked pore." +
        "Treatment options should follow:" +
        "1st line - a topical retinoid / topical retinoid plus benzyl peroxide" +
        "2nd line - topical retinoid plus topical antibiotic" +
         "3rd line - topical retinoid with oral antibiotic." +
         "Note topical antibiotics and oral antibiotic preparations should not be used concurrently." +
         "Tetracyclines should not be used in pregnancy," +
        "breastfeeding or in children under the age of 12 as they are deposited in teeth and bones.",
        FirstLine: "Lymecycline 408mg OD",
        SecondLine: "Erythromycin 500mg (2x250mg) BD (in pregnancy or if Tetracyclines not tolerated)"
    },

    {
        ID: 63,
        Area: "Skin Infections",
        Infection: "(HCT) Cellulitis - mild",
        Comments: "Patients who are afebrile and otherwise healthy should be treated as indicated with a single antibiotic. If response is slow, treat for a further 7 days. Consider referring patients who have recurrent cellulitis, the elderly and those who are vulnerable to infection.",
        FirstLine: "<p>Flucloxacillin 500mg QDS <p > If MRSA colonised and strain sensitive to Tetracycline Doxycycline 100mg bd for 7 days (see rationale / comments)",
        SecondLine: "Clarithromycin 500mg BD (penicillin allergy) for 7 days Co-amoxiclav♣ (for facial cellulitis) 625mg TDS for 7 days"
    },

    {
        ID: 64,
        Area: "Skin infections",
        Infection: "(HCT) Cellulitis - Moderate or severe",
        Comments: "Cellulitis – moderate or severe Systemic antibiotics only if clinical evidence of infection or patient is systemically unwell or purulent discharge present <p> If MRSA suspected then add Teicoplanin 400mg bd every 12 hours for 3 doses then 400mg od for 10 days" +
        "For advice on the management of cellulitis in patients with lymphoedema see Consensus Document on the management of cellulitis in lymphoedema",
        FirstLine: "<b><p>Moderate/ Severe:</b>" +
          "Benzylpenicillin IV 1.2g QDS plus" +
           "Flucloxacillin IV1g QDS" +
           "for 7 - 14 days depending on clinical decision" +
            "See rationale /comments <p > If changing from IV, change to oral Amoxicillin AND oral Flucloxacillin" +
           "for 7 - 14 days depending on clinical decision See rationale /comments",
        SecondLine: "If allergic to penicillin:" +
         "Teicoplanin 400mg every 12 hours for 3 doses then 400mg daily" +
        "If penicillin or Ceftriaxone allergy" +
        "Teicoplanin 400mg every 12 hours for 3 doses then 400mg daily <p >for 7 - 14 days depending on clinical decision" +
    "See rationale/comments"
    },

    {
        ID: 65,
        Area: "Skin Infections",
        Infection: "(HCT) Cellulitis - In Home First OPAT service within Lower Lea Valley only",
        Comments: "Cellulitis in Home First OPAT Service within Lower Lea Valley only" +
        "<p > For patients referred by WHHT for OPAT please refer to outpatient parenteral antibiotic therapy" +
        "<p > Once patient apyrexial for 48 hours and has a definite improvement in appearance of cellulitis oral switch to Flucloxacillin 500mg qds plus Amoxicillin 500mg tds for a minimum of 7 days" +
    "or if penicillin allergy Clarithromycin 500mg bd for a minimum of 7 days",
        FirstLine: "Ceftriaxone♣ 2g for initial dose then 1g daily See rationale/comments",
        SecondLine: "If penicillin or Ceftriaxone allergy Teicoplanin 400mg every 12 hours for 3 doses then 400mg daily See rationale /comments"
    },


    {
        ID: 66,
        Area: "Skin Infections",
        Infection: "(HCT) Diabetic foot",
        Comments: "Note patients with peripheral neuropathy and or peripheral vascular disease do not always display the normal inflammatory signs of redness, heat and swelling for example" +
        "Severe / limb threatening diabetic / Hot Foot is a medical emergency that requires co - ordinated input from the Diabetes Podiatrist," +
        "Consultant Diabetologist and Consultant Microbiologist in addition to surgical input MRSA colonisation or pseudomonas suspected – discuss with microbiology team",
        FirstLine: "<p>a) Mild infections:Flucloxacillin 500mg - 1g qds" +
         "<p > b) Moderate infections:Co-amoxiclav♣ 1.2g IV tds" +
         "<p > c) Severe infections:" +
         "Contact Consultant Microbiologist recommendation and refer to the acute medical/ diabetes team for further advice" +
          "<p > Cellulitis:As cellulitis section",
        SecondLine: "<p>For penicillin allergy  Doxycycline 100mg bd" +
    "<p > For penicillin allergy  Teicoplanin 400mg every 12 hours for 3 doses then 400mg daily plus Doxycycline 100mg bd" +
    "<p > Contact Consultant Microbiologist" +
    "<p > 7 - 14 days" +
    "<p > Discuss with local microbiology team"
    },

    {
        ID: 67,
        Area: "Skin Infections",
        Infection: "(HCT)(class 1) Cellulitis related to leg ulcers/ lymphedema ",
        Comments: "<br/>Cellulitis related to leg ulcer(s) CREST guidance Class I" +
        "<br/> Class I - Patients have no signs of systemic toxicity," +
        "have no uncontrolled co - morbidities and can " +
        "usually be managed with oral anti - microbials on an outpatient basis " +
        "<br/> Step down to oral therapy as soon as clinically appropriate(usually within 3 - 4 days) - see Class 1 for dosages.Courses of antibiotics for 1 - 2 months may be required to resolve all signs of acute inflammation have resolved.",
        FirstLine: "<p>Flucloxacillin 500mg QDS. Total course length dependent on clinical presentation but no less than 14 days.",
        SecondLine: "Clarithromycin 500mg BD. Total course length dependent on clinical presentation but no less than 14 days."
    },

    {
        ID: 68,
        Area: "Skin Infections",
        Infection: "(HCT)(class 11/111) Cellulitis related to leg ulcers / lymphedema ",
        Comments: "<p>Class II -Patients are either systemically ill or systemically well but with a co-morbidity such as peripheral vascular disease, chronic venous insufficiency or morbid obesity which may complicate or delay resolution of their infection." +
       "<p > Class III - patients may have a significant systemic upset such as acute confusion," +
        "tachycardia," +
        "tachypnoea," +
        "hypotension or may have unstable co - morbidities that may interfere with a response to therapy or have a limb threatening infection due to vascular compromise." +
        "<p > Courses of antibiotics for 1 - 2 months may be required to resolve all signs of acute inflammation.",
        FirstLine: "Flucloxacillin 2g QDS IV Total course length dependent of clinical presentation but typically up to 14 days  – step down to oral therapy as soon as clinically appropriate (usually within 3-4 days) - see Class I for dosages",
        SecondLine: "Clarithromycin 500mg BD IV<p > Total course length dependent of clinical presentation but typically up to 14 days  – step down to oral therapy as soon as clinically appropriate(usually within 3 - 4 days) - see Class I for dosages"
    },

    {
        ID: 69,
        Area: "Skin Infections",
        Infection: "(HCT) (Class IV)  Cellulitis related to leg ulcers /  lymphedema",
        Comments: "Cellulitis related to leg ulcer(s) Class IV <br/> Class IV - patients have sepsis syndrome or severe life threatening infection such as necrotizing fasciitis.",
        FirstLine: "Contact Consultant Microbiologist ",
        SecondLine: ""
    },

    {
        ID: 70,
        Area: "Skin Infections",
        Infection: "(HCT) Recurrent cellulits related to leg ulcers / lymphodema",
        Comments: "Recurrent cellulitis related to leg ulcers/lymphedema - 2 or more episodes at the same site  <p > CREST(Clinical Resource Efficiency Support Team) Management of Cellulitis in Adults guidance 2005",
        FirstLine: "Penicillin V 250mg bd <p > Up to 2 years depending on clinical situation,",
        SecondLine: "Erythromycin 250mg bd  <p > Up to 2 years depending on clinical situation<br/> or Clarithromycin 250mg od"
    },

    {
        ID: 71,
        Area: "Skin Infections",
        Infection: "(HCT) Dirty penetrating wound",
        Comments: "Consider tetanus prophylaxis",
        FirstLine: "Co-amoxiclav♣ 625mg tds PO (or 1.2g tds IV for severe infection)",
        SecondLine: "If allergic to penicillin: Contact Consultant Microbiologist"
    },

    {
        ID: 72,
        Area: "Skin infections",
        Infection: "(HCT) Acute osteomylelitis",
        Comments: "Blood cultures are essential. Review therapy when culture results are available and the pathogen has been identified.Initial high dose parenteral therapy is essential.",
        FirstLine: "Flucloxacillin 1 – 2g qds IV plus sodium fusidate 500mg tds orally (NOT IV) Step down to oral antibiotics after 10 – 14 days.<p >for 4 – 6 weeks  ",
        SecondLine: "Penicillin allergy – Teicoplanin 400mg every 12 hours for 3 doses then 400mg daily plus sodium fusidate 500mg tds orally (NOT IV)<p >for 4 – 6 weeks  "
    },

    {
        ID: 73,
        Area: "Skin Infections",
        Infection: "(HCT) Septic athritis",
        Comments: "Blood cultures essential. Aspirate pus for Gram film and culture before initiating treatment with antibiotics. Review therapy when culture results available and pathogen known.Initial high dose parenteral therapy is essential.",
        FirstLine: "Flucloxacillin 1 – 2g qds IV plus sodium fusidate 500mg tds orally(not IV)" +
          "Consider oral switch when clinically appropriate" +
        "<p > Treat for 4 – 6 weeks with at least 14 days of IV therapy",
        SecondLine: "Penicillin allergy – Teicoplanin 400mg every 12 hours for 3 doses then 400mg daily plus sodium fusidate 500mg tds orally (NOT IV)<p > Treat for 4 – 6 weeks with at least 14 days of IV therapy"
    },


    {
        ID: 74,
        Area: "Dental Infections",
        Infection: "(HCT Dental Services)",
        Comments: "refer to separate policy available via HCT intranet",
        FirstLine: "",
        SecondLine: ""
    }];
    return drug
}
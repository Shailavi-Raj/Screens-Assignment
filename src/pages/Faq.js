import React, { useState } from "react";
import Aboutbar from "../components/Aboutbar";
import AboutSide from "../components/AboutSide";
import { AppBar, Tab, Tabs, Typography, Box } from "@material-ui/core";
import { ListGroup, Badge, Table } from "react-bootstrap";
import "./Faq.css";

const Panel = (props) => (
  <div hidden={props.value !== props.index}>
    <Typography>{props.children}</Typography>
  </div>
);

function Faq() {
  const [index, setIndex] = useState(0);
  const onTabClicked = (event, index) => {
    setIndex(index);
  };
  return (
    <div className="Faq">
      <Aboutbar />
      <AboutSide />
      <Box
        sx={{
          bgcolor: "#15b2b8",
          marginLeft: 250,
          marginRight: 100,
          marginTop: 50,
        }}
      >
        <AppBar position="static" color="secondary" height="20">
          {" "}
          <Tabs
            value={index}
            onChange={onTabClicked}
            indicatorColor="secondary"
            textColor="white"
            variant="fullWidth"
            color="secondary"
          >
            <Tab label="Covid FAQ" />
            <Tab label="Technical FAQ" />
            <Tab label="Post Covid FAQ" />
          </Tabs>
        </AppBar>

        <Panel value={index} index={0}>
          <ListGroup as="ol" numbered>
            <ListGroup.Item
              as="li"
              className="d-flex justify-content-between align-items-start"
            >
              <div className="ms-2 me-auto">
                <div className="fw-bold">
                  How likely am I to catch COVID-19?
                </div>
                <p>
                  The risk depends on where you are - and more specifically,
                  whether there is a COVID-19 outbreak unfolding there
                </p>
                <p>
                  For most people in most locations the risk of catching
                  COVID-19 is still low. However, there are now places around
                  the world (cities or areas) where the disease is spreading.
                  For people living in, or visiting, these areas the risk of
                  catching COVID-19 is higher. Governments and health
                  authorities are taking vigorous action every time a new case
                  of COVID-19 is identified. Be sure to comply with any local
                  restrictions on travel, movement or large gatherings.
                  Cooperating with disease control efforts will reduce your risk
                  of catching or spreading COVID-19{" "}
                </p>
                <p>
                  COVID-19 outbreaks can be contained and transmission stopped,
                  as has been shown in China and some other countries.
                  Unfortunately, new outbreaks can emerge rapidly. It’s
                  important to be aware of the situation where you are or intend
                  to go.
                </p>
              </div>
            </ListGroup.Item>
            <ListGroup.Item
              as="li"
              className="d-flex justify-content-between align-items-start"
            >
              <div className="ms-2 me-auto">
                <div className="fw-bold">How can i Prevent Covid-19</div>
                <p>
                  The best way to prevent illness is to avoid being exposed to
                  the virus. The CDC recommends everyday preventive actions to
                  help prevent the spread of respiratory diseases. They include:
                </p>
                <ol>
                  <li>
                    Wash your hands often with plain soap and water. The CDC
                    recommends washing your hands often with soap and water for
                    at least 20 seconds, especially after you have been in a
                    public place, or after blowing your nose, coughing, or
                    sneezing. If soap and water are not available, the CDC
                    recommends using an alcohol-based hand sanitizer that
                    contains at least 60 percent alcohol.
                  </li>
                  <li>
                    Cover your mouth and nose with a cloth face covering or
                    non-surgical mask when around others. Find more information
                    about how to select, wear, and clean your mask.
                  </li>
                  <li>
                    Get the COVID-19 vaccine when it is offered to you. Once you
                    are fully vaccinated, you may be able to start doing some
                    things that you had stopped doing because of the pandemic.
                  </li>
                  <li>
                    Follow CDC guidance on large gatherings, social distancing
                    and mask wearing, based on if you are fully vaccinated or
                    not.
                  </li>
                </ol>
              </div>
            </ListGroup.Item>
            <ListGroup.Item
              as="li"
              className="d-flex justify-content-between align-items-start"
            >
              <div className="ms-2 me-auto">
                <div className="fw-bold">
                  {" "}
                  Who is at risk of developing severe illness
                </div>
                While we are still learning about how COVID-2019 affects people,
                older persons and persons with pre-existing medical conditions
                such as high blood pressure, heart disease, lung disease, cancer
                or diabetes appear to develop serious illness more often than
                others.
              </div>
            </ListGroup.Item>
            <ListGroup.Item
              as="li"
              className="d-flex justify-content-between align-items-start"
            >
              <div className="ms-2 me-auto">
                <div className="fw-bold">
                  Are antibiotics effective in preventing or treating the
                  COVID-19?
                </div>
                <p>
                  No. Antibiotics do not work against viruses, they only work on
                  bacterial infections. COVID-19 is caused by a virus, so
                  antibiotics do not work. Antibiotics should not be used as a
                  means of prevention or treatment of COVID-19. They should only
                  be used as directed by a physician to treat a bacterial
                  infection
                </p>
              </div>
              <Badge variant="primary" pill>
                14
              </Badge>
            </ListGroup.Item>
            <ListGroup.Item
              as="li"
              className="d-flex justify-content-between align-items-start"
            >
              <div className="ms-2 me-auto">
                <div className="fw-bold">
                  {" "}
                  Are there any medicines or therapies that can prevent or cure
                  COVID-19
                </div>
                While some western, traditional or home remedies may provide
                comfort and alleviate symptoms of COVID-19, there is no evidence
                that current medicine can prevent or cure the disease. We does
                not recommend self-medication with any medicines, including
                antibiotics, as a prevention or cure for COVID-19. However,
                there are several ongoing clinical trials that include both
                western and traditional medicines. We will continue to provide
                updated information as soon as clinical findings are available.
              </div>
            </ListGroup.Item>
            <ListGroup.Item
              as="li"
              className="d-flex justify-content-between align-items-start"
            >
              <div className="ms-2 me-auto">
                <div className="fw-bold">
                  {" "}
                  Should I wear mask to protect myself
                </div>
                <p>
                  Only wear a mask if you are ill with COVID-19 symptoms
                  (especially coughing) or looking after someone who may have
                  COVID-19. Disposable face mask can only be used once. If you
                  are not ill or looking after someone who is ill then you are
                  wasting a mask. There is a world-wide shortage of masks, so We
                  urge people to use masks wisely.
                </p>
                <p>
                  We advises rational use of medical masks to avoid unnecessary
                  wastage of precious resources and mis-use of masks The most
                  effective ways to protect yourself and others against COVID-19
                  are to frequently clean your hands, cover your cough with the
                  bend of elbow or tissue and maintain a distance of at least 1
                  meter (3 feet) from people who are coughing or sneezing.
                </p>
              </div>
            </ListGroup.Item>
          </ListGroup>
        </Panel>
        <Panel value={index} index={1}>
          <ListGroup as="ol" numbered>
            <ListGroup.Item
              as="li"
              className="d-flex justify-content-between align-items-start"
            >
              <div className="ms-2 me-auto">
                <div className="fw-bold">
                  If my phone number will be blocked how will I access my
                  account?
                </div>
                <p>You have to signup with new account using new number</p>
              </div>
            </ListGroup.Item>
            <ListGroup.Item
              as="li"
              className="d-flex justify-content-between align-items-start"
            >
              <div className="ms-2 me-auto">
                <div className="fw-bold">
                  Can I add more than 3 beneficiaries
                </div>
                <p>
                  No, In one single account only three beneficiaries can be a
                </p>
              </div>
            </ListGroup.Item>
            <ListGroup.Item
              as="li"
              className="d-flex justify-content-between align-items-start"
            >
              <div className="ms-2 me-auto">
                <div className="fw-bold">
                  Can I update my details after signup
                </div>
                <p>
                  Yes, you can update your credentials as well as your
                  beneficiaries credentials
                </p>
              </div>
            </ListGroup.Item>
            <ListGroup.Item
              as="li"
              className="d-flex justify-content-between align-items-start"
            >
              <div className="ms-2 me-auto">
                <div className="fw-bold">
                  Can I update my account mobile number
                </div>
                <p>
                  No you can't update your account mobile number. If it is lost
                  or not working you need to register again with another one
                </p>
              </div>
            </ListGroup.Item>
            <ListGroup.Item
              as="li"
              className="d-flex justify-content-between align-items-start"
            >
              <div className="ms-2 me-auto">
                <div className="fw-bold">
                  Can I Reschedule my vaccination date{" "}
                </div>
                <p>Yes, you can reschedule it easily by to Schedule section</p>
              </div>
            </ListGroup.Item>
            <ListGroup.Item
              as="li"
              className="d-flex justify-content-between align-items-start"
            >
              <div className="ms-2 me-auto">
                <div className="fw-bold">How can I check my schedule ? </div>
                <p>
                  You can check your schedule as well as your beneficiaries
                  schedule in schedule section
                </p>
              </div>
            </ListGroup.Item>
            <ListGroup.Item
              as="li"
              className="d-flex justify-content-between align-items-start"
            >
              <div className="ms-2 me-auto">
                <div className="fw-bold">Will I have to provide feedback </div>
                <p>
                  It's not compulsory, but if you do provide us it will be help
                </p>
              </div>
            </ListGroup.Item>
            <ListGroup.Item
              as="li"
              className="d-flex justify-content-between align-items-start"
            >
              <div className="ms-2 me-auto">
                <div className="fw-bold">
                  Can I print my certificate again one's I have downloaded{" "}
                </div>
                <p>Yes, you can print your certificate</p>
              </div>
            </ListGroup.Item>
            <ListGroup.Item
              as="li"
              className="d-flex justify-content-between align-items-start"
            >
              <div className="ms-2 me-auto">
                <div className="fw-bold">
                  Can I remove or delete registered user{" "}
                </div>
                <p>Yes , you can delete registered user</p>
              </div>
            </ListGroup.Item>
          </ListGroup>
        </Panel>
        <Panel value={index} index={2}>
          <ListGroup>
            <ListGroup.Item
              as="li"
              className="d-flex justify-content-between align-items-start"
            >
              <div className="ms-2 me-auto">
                <div className="fw-bold">
                  Are there any side effects? What should I do if I suffer from
                  any side effects?{" "}
                </div>
                <p>
                  The vaccine has been assessed to be safe for use. However, you
                  may experience common side effects, similar to other vaccines.
                  Most side effects are mild or moderate, and usually get better
                  within a few days. The table below lists some common side
                  effects that have been reported with this vaccine, and how to
                  manage them.
                </p>
                <Table striped bordered size="sm">
                  <thead>
                    <td>
                      <strong> Side Effects </strong>
                    </td>
                    <td>
                      <strong>How to manage</strong>
                    </td>
                  </thead>

                  <tr>
                    <td>Pain, redness, swelling at the injection site</td>
                    <td rowSpan="3">
                      Those with fever are advised to self-isolate at home until
                      the fever subsides. Paracetamol 1 to 2 tablets for the
                      other side effects every 6 hours as needed.
                    </td>
                  </tr>
                  <tr>
                    <td>Fever, chills</td>
                  </tr>
                  <tr>
                    <td> muscle pain, joint pain</td>
                  </tr>
                  <tr>
                    <td>Tiredness</td>
                    <td>Rest</td>
                  </tr>
                  <tr>
                    <td>Lymph node swelling at neck or arms</td>
                    <td>Usually gets better by itself in a week or so</td>
                  </tr>
                </Table>
                <p>See a doctor if:</p>
                <ul>
                  <li>The side effects persist or get worse</li>
                  <li>The fever persists for more than 48 hours (2 days)</li>
                  <li>
                    {" "}
                    Respiratory symptoms such as cough, runny nose, sore throat,
                    shortness of breath or loss of sense of taste and smell
                    develop
                  </li>
                  <li>
                    Heart or chest symptoms such as chest pain, shortness of
                    breath or abnormal heart beats develop.
                  </li>
                  <p>
                    In very rare cases, this vaccine can cause a severe allergic
                    reaction. Signs of a severe allergic reaction include
                    difficulty breathing, swelling of your face, throat, eyes or
                    lips, a fast heartbeat, dizziness and weakness, a bad rash
                    all over your body. If you experience a severe allergic
                    reaction, seek medical attention immediately. Call 995 or go
                    to the nearest A&E immediately.
                  </p>
                </ul>
              </div>
            </ListGroup.Item>
            <ListGroup.Item
              as="li"
              className="d-flex justify-content-between align-items-start"
            >
              <div className="ms-2 me-auto">
                <div className="fw-bold">
                  How long do we have to observe and report the side effects
                  from the vaccine? Which side effect takes the longest to
                  manifest?
                </div>
                <p>
                  Most side effects will resolve within 3 days. Though uncommon,
                  lymphadenopathy (lymph node swelling) can be vaccine-related
                  and takes around 7 to 10 days to resolve.
                </p>
              </div>
            </ListGroup.Item>
            <ListGroup.Item
              as="li"
              className="d-flex justify-content-between align-items-start"
            >
              <div className="ms-2 me-auto">
                <div className="fw-bold">
                  {" "}
                  What is myocarditis and pericarditis? Can the vaccine lead to
                  myocarditis and pericarditis?
                </div>
                <p>
                  Myocarditis and pericarditis are inflammatory conditions
                  affecting the heart muscles and the outer lining of the heart,
                  respectively. Patients may present with symptoms such as chest
                  pain, shortness of breath or abnormal heartbeats. Local
                  incidence rates remain low and the cases are usually mild and
                  recover well.
                </p>
                <p>
                  Vaccinated persons who received the Pfizer-BioNTech/Comirnaty
                  or Moderna vaccines, in particular adolescents and young
                  persons, are advised to avoid strenuous physical activities
                  such as running, weightlifting, competitive sports, or playing
                  ball games for two weeks after their first and second
                  vaccination doses, as a precautionary measure.{" "}
                </p>
                <p>
                  During this time, they should seek medical attention promptly
                  if they develop chest pain, shortness of breath or
                  palpitations.
                </p>
              </div>
            </ListGroup.Item>

            <ListGroup.Item
              as="li"
              className="d-flex justify-content-between align-items-start"
            >
              <div className="ms-2 me-auto">
                <div className="fw-bold">
                  Would there be post-vaccination monitoring in place, e.g. will
                  some staff and residents continually be tested for COVID-19
                  virus antibodies, to determine durability of the vaccination
                  response?{" "}
                </div>
                <p>
                  As a condition for the interim authorisation under PSAR,
                  vaccine companies including Sinovac, Pfizer-BioNTech/
                  Comirnaty and Moderna are required to monitor the longer-term
                  efficacy of the vaccine to determine the duration of
                  protection against COVID-19, as well as follow up on the
                  safety of the vaccine for a longer period of time to determine
                  its full safety profile. Vaccine companies must continue
                  submitting the longer term follow up data to HSA to assure the
                  continued effectiveness and safety of the vaccine. HSA will
                  actively review the data to ensure that the benefits of the
                  vaccine continue to outweigh the known risks. When sufficient
                  data is available for full registration, the companies will be
                  required to file an application to transit the status of the
                  product from PSAR interim authorisation to full registration.
                </p>
                <p>
                  Research studies will be conducted to better understand the
                  impact of the COVID-19 vaccination, including the durability
                  and the extent the vaccine is able to prevent transmission.
                  Hence, vaccinated persons may be recruited for such studies.
                </p>
              </div>
            </ListGroup.Item>
            <ListGroup.Item
              as="li"
              className="d-flex justify-content-between align-items-start"
            >
              <div className="ms-2 me-auto">
                <div className="fw-bold">
                  What happens if I develop an allergic reaction to my first
                  dose?
                </div>
                <p>
                  You should seek medical attention, if you experience a
                  possible allergic reaction to the first dose (e.g. eye or lip
                  swelling, hives, generalised skin rashes, breathlessness).
                  Fever, chills, muscle pain, headaches, injection site pain are
                  not allergic reactions.
                </p>
                <p>
                  You should discuss your suitability for COVID-19 vaccination
                  with your doctor. Persons with an allergic reaction assessed
                  to be caused by the vaccine and who are advised that they
                  should not take the subsequent dose of the vaccine, should
                  cancel the appointment for it.
                </p>
                <p>
                  Nevertheless, persons who had developed the following skin
                  reactions to a previous dose of the mRNA-based vaccine may be
                  able to receive a subsequent dose of the same vaccine:
                </p>
                <ol>
                  <li>
                    {" "}
                    Non-severe skin reactions occurring more than four hours
                    after vaccination without other symptoms
                  </li>
                  <li>
                    Non-specific skin symptoms such as itching without a rash, a
                    red patch beyond the injection site or eczema
                  </li>
                  <li>
                    Flares of underlying skin condition such as psoriasis and
                    eczema
                  </li>
                </ol>

                <p>
                  Medical personnel at the vaccination sites will also assess
                  the suitability of individuals to receive the vaccination
                  before they are vaccinated.
                </p>
                <p>
                  Persons who are unable to complete the full two-dose regime of
                  the PSAR-authorised mRNA vaccines, due to valid medical
                  reasons, should receive the Sinovac-CoronaVac vaccine.
                </p>
              </div>
            </ListGroup.Item>
            <ListGroup.Item
              as="li"
              className="d-flex justify-content-between align-items-start"
            >
              <div className="ms-2 me-auto">
                <div className="fw-bold">
                  Which are the healthcare providers that can provide this
                  service?
                </div>
                <p>
                  Most clinics will be able to provide serology testing to
                  confirm whether the individual has undergone the vaccinations.
                  phpc.gov.sg provides the list of some clinics’ addresses and
                  contact details (not exhaustive)*. Please call in advance to
                  check that the clinic is able to support serology testing for
                  persons vaccinated overseas and update their record on the
                  National Immunisation Registry.
                </p>

                <p>
                  <i>
                    * The polyclinics do not provide serology testing for
                    verification of overseas vaccination.
                  </i>
                </p>
              </div>
            </ListGroup.Item>
            <ListGroup.Item
              as="li"
              className="d-flex justify-content-between align-items-start"
            >
              <div className="ms-2 me-auto">
                <div className="fw-bold">
                  Is it safe for an individual to re-take the COVID-19
                  vaccination if the serology test result is negative?
                </div>
                <p>
                  There are no known safety issues with re-taking the COVID-19
                  vaccination. However, some may experience more noticeable side
                  effects such as injection site pain, muscle aches and fever.
                </p>
              </div>
            </ListGroup.Item>
            <ListGroup.Item
              as="li"
              className="d-flex justify-content-between align-items-start"
            >
              <div className="ms-2 me-auto">
                <div className="fw-bold">What will the charges be? </div>
                <p>
                  The charges will be determined by the private healthcare
                  providers providing the service. Please contact the clinics
                  directly about the charges.
                </p>
              </div>
            </ListGroup.Item>
          </ListGroup>
        </Panel>
      </Box>
    </div>
  );
}

export default Faq;

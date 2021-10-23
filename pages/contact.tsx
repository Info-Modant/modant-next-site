import {Layout} from "../components/Layout";
import {Color} from "../utilities/color";
import {Title} from "../components/smallcomponents/Title";
import {ContactUsInfo} from "../data/dataStructure";
import {Formik, Field} from 'formik';
import {CheckboxContainer, SubjectContainer} from "../components/smallcomponents/Form";

const contactUsInfo = require('../data/contactUsInfo.json') as ContactUsInfo;

export default function ContactPage() {

  return (
    <Layout className="contact-page">
      <Title title="Contact Us" underlineColor={ Color.Primary } />
      <ContactUsContainer />
    </Layout>
  )
}

function ContactUsContainer() {

  return (
    <div className="contact-us-container">
      <ContactForm />
      <MoreInfo contactUsInfo={ contactUsInfo } />
    </div>
  )
}

interface InitialValues {
  name: string,
  email: string,
  description: string,
  enhancements: Enhancements,
}

interface Enhancements {
  droneFootage: boolean,
  ultraHd: boolean,
}

function ContactForm() {

  const initialValues: InitialValues = {
    name: '',
    email: '',
    description: '',
    enhancements: {
      droneFootage: false,
      ultraHd: false,
    },
  };

  return (
    <div className="contact-form">
      <Formik
        initialValues={ initialValues }
        onSubmit={ (values, { setSubmitting }) => {
          console.log(values);
        } }
      >
        {
          ({ values,
             handleBlur,
             handleChange,
             handleSubmit }) =>
            <form onSubmit={ handleSubmit }>
              <SubjectContainer title="Name">
                <input id="name" name="name" value={ values.name } onChange={ handleChange } onBlur={ handleBlur } />
              </SubjectContainer>
              <SubjectContainer title="Email">
                <input id="email" name="email" value={ values.email } onChange={ handleChange } onBlur={ handleBlur } />
              </SubjectContainer>
              <SubjectContainer title="Brief description">
                <textarea id="description" name="description" value={ values.description } onChange={ handleChange } onBlur={ handleBlur } />
              </SubjectContainer>
              <SubjectContainer title="Enhancements">

                <CheckboxContainer label="Drone Footage">
                  <Field type="checkbox" id="droneFootage" name="enhancements.droneFootage"
                         checked={ values.enhancements.droneFootage } value={ values.enhancements.droneFootage } />
                </CheckboxContainer>
                <CheckboxContainer label="Ultra HD - 4K Footage">
                  <Field type="checkbox" id="enhancements-ultraHd" name="enhancements.ultraHd"
                         checked={ values.enhancements.ultraHd }  value={ values.enhancements.ultraHd } />
                </CheckboxContainer>

              </SubjectContainer>
            </form>
        }
      </Formik>
    </div>
  )
}

interface MoreInfoProps {
  contactUsInfo: ContactUsInfo
}

function MoreInfo({ contactUsInfo }: MoreInfoProps) {

  const { contactMethods, address } = contactUsInfo;

  return (
    <div className="more-info">
      <h2>By Appointment Only.</h2>
      <div className="address">
        <span>{ address.addressLine1 }</span>
        <span>{ address.addressLine2 }</span>
        <span>{ address.city }, { address.postcode }</span>
      </div>
      <div className="contact-methods">
        {
          contactMethods.map((c, i) =>
            <a key={ i } href={ c.href }>{ c.displayName }</a>
          )
        }
      </div>
    </div>
  )
}
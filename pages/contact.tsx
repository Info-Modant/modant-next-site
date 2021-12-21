import {Layout} from "../components/Layout";
import {Color} from "../utilities/color";
import {CapitalisedHeading, Title} from "../components/smallcomponents/Title";
import {ContactUsInfo} from "../data/dataStructure";
import {Formik, Field} from 'formik';
import {
  ButtonContainer,
  CheckboxContainer,
  CheckBoxFieldContainer,
  SubjectContainer
} from "../components/smallcomponents/Form";
import {Button} from "../components/smallcomponents/Button";
import { RegExp } from "../utilities/regExp";
import {sendForm} from "../library/database";

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

export interface ContactFormValues {
  name: string,
  email: string,
  description: string,
  enhancements: Enhancements,
}

interface FormErrors {
  name?: string,
  email?: string,
  description?: string,
}

interface Enhancements {
  droneFootage: boolean,
  ultraHd: boolean,
}

function ContactForm() {

  const initialValues: ContactFormValues = {
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
        validate={ ({ name, email, description }) => {
          const errors: FormErrors = {};

          if (name.trim().length < 3) {
            errors.name = 'Name must be at least 3 characters';
          }

          if (email.trim().length < 3 || !email.match(RegExp.Email)) {
            errors.email = 'Email is invalid';
          }

          if (description.trim().length < 10) {
            errors.description = 'Description must at least contain 10 characters';
          }

          return errors;
        } }
        onSubmit={ (values, { setSubmitting }) => {
          setSubmitting(true);
          sendForm(values)
            .then(() => setSubmitting(false));
        } }
      >
        {
          ({ values,
             handleBlur,
             handleChange,
             handleSubmit,
             touched,
             errors,
             isValid,
             isSubmitting,
             dirty
          }) =>
            <form onSubmit={ handleSubmit }>
              <SubjectContainer title="Name" inputLength={ values.name.length } error={ touched.name ? errors.name : undefined }>
                <input id="name" name="name" className="text-input" placeholder="Name"
                       value={ values.name } onChange={ handleChange } onBlur={ handleBlur } />
              </SubjectContainer>
              <SubjectContainer title="Email" inputLength={ values.email.length } error={ touched.email ? errors.email : undefined }>
                <input id="email" name="email" className="text-input" placeholder="Email"
                       value={ values.email } onChange={ handleChange } onBlur={ handleBlur } />
              </SubjectContainer>
              <SubjectContainer title="Brief description" inputLength={ values.description.length } error={ touched.description ? errors.description : undefined }>
                <textarea id="description" name="description" placeholder="Description"
                          value={ values.description } onChange={ handleChange } onBlur={ handleBlur } />
              </SubjectContainer>
              <CheckBoxFieldContainer title="Enhancements">

                <CheckboxContainer label="Drone Footage">
                  <Field type="checkbox" id="droneFootage" name="enhancements.droneFootage"
                         checked={ values.enhancements.droneFootage } value={ values.enhancements.droneFootage } />
                </CheckboxContainer>
                <CheckboxContainer label="Ultra HD - 4K Footage">
                  <Field type="checkbox" id="enhancements-ultraHd" name="enhancements.ultraHd"
                         checked={ values.enhancements.ultraHd }  value={ values.enhancements.ultraHd } />
                </CheckboxContainer>

              </CheckBoxFieldContainer>

              <ButtonContainer>
                <Button type="submit" disabled={ !isValid || isSubmitting || !dirty }>Send</Button>
              </ButtonContainer>
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
      <CapitalisedHeading wrapper="h2" fontWeight="200">
        By Appointment Only.
      </CapitalisedHeading>
      <section className="remainder">
        <div className="address">
          <p>{ address.addressLine1 }</p>
          <p>{ address.addressLine2 }</p>
          <p>{ address.city }, { address.postcode }</p>
        </div>
        <div className="contact-methods">
          {
            contactMethods.map((c, i) =>
              <a key={ i } href={ c.href } target="_blank" rel="noreferrer"><p>{ c.displayName }</p></a>
            )
          }
        </div>
      </section>
    </div>
  )
}
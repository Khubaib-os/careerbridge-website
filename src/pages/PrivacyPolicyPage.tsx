import ContentPage from '../components/ContentPage';
const page = {
  "title": "Privacy Policy",
  "tagline": "Privacy Policy.",
  "summary": "Important information about CareerBridge and your use of our website and services.",
  "sections": [
    {
      "title": "Overview",
      "body": "CareerBridge may process personal information when people inquire about services, request a consultation or participate in a recruiting support engagement. This draft must be customized to actual operations and applicable law before publication."
    },
    {
      "title": "Information collected",
      "body": "Depending on the service, information may include name, email, phone number, employment history, resume, qualifications, target roles, communication preferences, application records and messages. Avoid submitting sensitive information unless specifically required and authorized."
    },
    {
      "title": "Sources of information",
      "body": "Information may come directly from you, documents you provide, authorized agency partners or publicly accessible professional profiles where collection is lawful."
    },
    {
      "title": "Purposes of use",
      "body": "We may use data to respond to inquiries, assess service fit, perform agreed research or application support, communicate about progress, maintain records and comply with legal obligations."
    },
    {
      "title": "Legal basis and consent",
      "body": "Where laws such as GDPR apply, the appropriate legal basis must be identified for each processing activity. Consent, contractual necessity and legitimate interests are not interchangeable."
    },
    {
      "title": "Sharing and recipients",
      "body": "Information may need to be shared with prospective employers, recruiting partners and technology providers only as authorized and necessary. The actual recipient categories and processors must be documented."
    },
    {
      "title": "International transfers",
      "body": "International service delivery can involve cross-border processing. Transfer mechanisms, locations and safeguards must be identified before launch."
    },
    {
      "title": "Security and access",
      "body": "Use role-based access, appropriate authentication, secure transmission and vendor reviews. No internet service can promise absolute security."
    },
    {
      "title": "Retention and deletion",
      "body": "Specific retention periods must be established for inquiries, resumes, application logs and client records. Requests to delete data may be subject to legal or contractual retention obligations."
    },
    {
      "title": "Your rights",
      "body": "Depending on your jurisdiction, you may have rights to access, correct, erase, restrict, object to or transfer personal information, and to contact a data protection authority."
    },
    {
      "title": "Cookies and analytics",
      "body": "See the Cookie Policy for information about website storage and tracking. Nonessential tools must be configured in accordance with applicable consent requirements."
    },
    {
      "title": "Contact and updates",
      "body": "Insert the verified legal entity name, registered address, privacy contact email, effective date and last-updated date before publication."
    }
  ],
  "category": "legal"
};
export default function PrivacyPolicyPage(){return <ContentPage {...page} legal/>}

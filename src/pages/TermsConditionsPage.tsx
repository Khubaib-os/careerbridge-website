import ContentPage from '../components/ContentPage';
const page = {
  "title": "Terms & Conditions",
  "tagline": "Terms & Conditions.",
  "summary": "Important information about CareerBridge and your use of our website and services.",
  "sections": [
    {
      "title": "Scope and acceptance",
      "body": "These draft terms describe use of the CareerBridge website and general service expectations. A signed statement of work or service agreement should govern paid engagements and take precedence where specified."
    },
    {
      "title": "Services",
      "body": "Services may include reverse recruiting, job research, application support, career documents, outreach preparation, interview preparation and recruiting operations for agency partners."
    },
    {
      "title": "Eligibility and authority",
      "body": "Clients must provide accurate information and have authority to authorize any application, communication or sharing of candidate data."
    },
    {
      "title": "Client responsibilities",
      "body": "Clients are responsible for truthful qualifications, timely feedback, access approvals, interview attendance and decisions regarding offers or employment."
    },
    {
      "title": "No placement guarantee",
      "body": "CareerBridge does not control employers, job boards, hiring timelines, interview invitations, job offers or employment outcomes. No outcome is guaranteed."
    },
    {
      "title": "Third-party platforms",
      "body": "Use of job boards, social platforms and employer systems remains subject to their own terms. Activities requiring permission will not be performed without appropriate authorization."
    },
    {
      "title": "Scope and changes",
      "body": "Deliverables, turnaround times, review rounds, service exclusions and change requests must be defined in the agreed proposal or statement of work."
    },
    {
      "title": "Fees and payment",
      "body": "Actual fees, invoicing, payment methods, taxes, late-payment rules and currency must be set out in a separate approved agreement. No fee terms are invented here."
    },
    {
      "title": "Cancellation and refunds",
      "body": "Cancellation rights, refunds and termination conditions must be specified in the signed agreement and comply with applicable consumer law."
    },
    {
      "title": "Intellectual property",
      "body": "Ownership and permitted use of custom documents, research outputs, templates and pre-existing materials should be stated in the relevant service agreement."
    },
    {
      "title": "Confidentiality and data",
      "body": "Both parties should protect confidential information and follow agreed privacy, access and data handling requirements."
    },
    {
      "title": "Liability and disputes",
      "body": "Any limitation of liability, warranties, dispute process and governing law require jurisdiction-specific legal review and cannot be finalized from this template."
    },
    {
      "title": "Changes and contact",
      "body": "Publish the verified contracting entity, legal contact information, effective date and notice process before going live."
    }
  ],
  "category": "legal"
};
export default function TermsConditionsPage(){return <ContentPage {...page} legal/>}

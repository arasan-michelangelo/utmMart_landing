// app/terms/page.tsx

import React from "react";

export default function TermsPage() {
  return (
    <main className="max-w-3xl mx-auto px-4 py-8 text-gray-800">
      {/* Title */}
      <h1 className="text-2xl font-semibold mb-2">Terms &amp; Conditions</h1>
      <p className="mb-6 text-xs text-gray-500">Last updated: September 22, 2025</p>

      {/* Introduction */}
      <section className="mb-6 text-sm leading-6">
        <p>
          Welcome to <strong>Campus</strong>! These Terms &amp; Conditions (&quot;<strong>Terms</strong>&quot;) govern your use of our services (&quot;<strong>Services</strong>&quot;), including the mobile app and website. By using Campus, you agree to comply with these Terms. If you do not agree, please do not use our Services.
        </p>
      </section>

      {/* Summary of Key Points */}
      <section className="mb-6 text-sm leading-6">
        <h2 className="font-medium mb-2">Summary of Key Points</h2>
        <ul className="list-disc ml-5 space-y-2">
          <li>
            <strong>Eligibility:</strong> You must be a student or authorized user.{" "}
            <a href="#eligibility" className="text-sky-600 hover:underline">Learn more</a>
          </li>
          <li>
            <strong>Account Security:</strong> Keep your login details secure.{" "}
            <a href="#account" className="text-sky-600 hover:underline">Learn more</a>
          </li>
          <li>
            <strong>User Responsibilities:</strong> Follow rules, respect others, and avoid prohibited actions.{" "}
            <a href="#responsibilities" className="text-sky-600 hover:underline">Learn more</a>
          </li>
          <li>
            <strong>User-Generated Content:</strong> You own your content but grant Campus a license.{" "}
            <a href="#ugc" className="text-sky-600 hover:underline">Learn more</a>
          </li>
          <li>
            <strong>Prohibited Activities:</strong> No illegal, harmful, or disruptive behavior.{" "}
            <a href="#prohibited" className="text-sky-600 hover:underline">Learn more</a>
          </li>
          <li>
            <strong>Third-Party Services:</strong> We are not responsible for third-party content.{" "}
            <a href="#thirdparty" className="text-sky-600 hover:underline">Learn more</a>
          </li>
          <li>
            <strong>Termination:</strong> Violations may result in account suspension or termination.{" "}
            <a href="#termination" className="text-sky-600 hover:underline">Learn more</a>
          </li>
          <li>
            <strong>Dispute Resolution:</strong> How disputes are handled.{" "}
            <a href="#disputes" className="text-sky-600 hover:underline">Learn more</a>
          </li>
          <li>
            <strong>Governing Law:</strong> Laws that apply.{" "}
            <a href="#law" className="text-sky-600 hover:underline">Learn more</a>
          </li>
        </ul>
      </section>

      {/* Eligibility */}
      <section id="eligibility" className="mb-6 text-sm leading-6">
        <h2 className="font-medium mb-2">Eligibility</h2>
        <p>
          To use Campus, you must be at least 16 years old (or the legal age in your jurisdiction) and a student or authorized member of the Campus community.
        </p>
      </section>

      {/* Account Registration and Security */}
      <section id="account" className="mb-6 text-sm leading-6">
        <h2 className="font-medium mb-2">Account Registration and Security</h2>
        <p>
          You are responsible for maintaining the confidentiality of your account and password. Notify Campus immediately of any unauthorized use. You agree to provide accurate and complete registration information.
        </p>
      </section>

      {/* User Responsibilities */}
      <section id="responsibilities" className="mb-6 text-sm leading-6">
        <h2 className="font-medium mb-2">User Responsibilities</h2>
        <ul className="list-disc ml-5 space-y-1">
          <li>Follow all rules and community guidelines.</li>
          <li>Respect other users and avoid harassment.</li>
          <li>Not engage in illegal, fraudulent, or harmful activities.</li>
          <li>Provide accurate information when interacting with the Services.</li>
        </ul>
      </section>

      {/* User-Generated Content */}
      <section id="ugc" className="mb-6 text-sm leading-6">
        <h2 className="font-medium mb-2">User-Generated Content</h2>
        <p>
          You retain ownership of content you create, but by posting on Campus, you grant us a worldwide, non-exclusive, royalty-free license to use, display, modify, and distribute your content in connection with the Services. Campus may remove content that violates these Terms or applicable law.
        </p>
      </section>

      {/* Prohibited Activities */}
      <section id="prohibited" className="mb-6 text-sm leading-6">
        <h2 className="font-medium mb-2">Prohibited Activities</h2>
        <ul className="list-disc ml-5 space-y-1">
          <li>Posting illegal, harmful, or offensive content.</li>
          <li>Harassment, bullying, or hate speech.</li>
          <li>Spamming, phishing, or deceptive practices.</li>
          <li>Attempting to hack or disrupt Campus services.</li>
          <li>Violating others&apos; privacy or intellectual property rights.</li>
        </ul>
      </section>

      {/* Third-Party Services */}
      <section id="thirdparty" className="mb-6 text-sm leading-6">
        <h2 className="font-medium mb-2">Third-Party Services</h2>
        <p>
          Our Services may include links to third-party websites or services. Campus is not responsible for their content, policies, or practices. Users should review third-party terms and privacy policies separately.
        </p>
      </section>

      {/* Fees and Payments */}
      <section id="fees" className="mb-6 text-sm leading-6">
        <h2 className="font-medium mb-2">Fees and Payments</h2>
        <p>
          If Campus introduces in-app purchases or paid features, payment terms will be clearly described. Refunds will follow applicable policies and local laws.
        </p>
      </section>

      {/* Termination */}
      <section id="termination" className="mb-6 text-sm leading-6">
        <h2 className="font-medium mb-2">Termination</h2>
        <p>
          Campus may suspend or terminate your account if you violate these Terms, engage in prohibited activities, or breach applicable laws. Termination may be temporary or permanent. Content posted by you may be removed.
        </p>
      </section>

      {/* Dispute Resolution */}
      <section id="disputes" className="mb-6 text-sm leading-6">
        <h2 className="font-medium mb-2">Dispute Resolution</h2>
        <p>
          Any disputes arising from these Terms should first be addressed informally. If unresolved, disputes will be governed by applicable law. Binding arbitration or small claims court may apply depending on jurisdiction.
        </p>
      </section>

      {/* Disclaimers */}
      <section id="disclaimers" className="mb-6 text-sm leading-6">
        <h2 className="font-medium mb-2">Disclaimers</h2>
        <p>
          Campus provides Services &quot;as is&quot; without warranties of any kind. We do not guarantee uninterrupted or error-free service. Users accept all risks associated with use of the Services.
        </p>
      </section>

      {/* Limitation of Liability */}
      <section id="liability" className="mb-6 text-sm leading-6">
        <h2 className="font-medium mb-2">Limitation of Liability</h2>
        <p>
          To the maximum extent permitted by law, Campus shall not be liable for any indirect, incidental, or consequential damages arising from your use of the Services.
        </p>
      </section>

      {/* Governing Law */}
      <section id="law" className="mb-6 text-sm leading-6">
        <h2 className="font-medium mb-2">Governing Law</h2>
        <p>
          These Terms are governed by the laws of your country or jurisdiction. Any disputes will be resolved according to applicable legal procedures.
        </p>
      </section>

      {/* Severability */}
      <section id="severability" className="mb-6 text-sm leading-6">
        <h2 className="font-medium mb-2">Severability</h2>
        <p>
          If any provision of these Terms is found invalid or unenforceable, the remaining provisions remain in effect.
        </p>
      </section>

      {/* Entire Agreement */}
      <section id="entire" className="mb-6 text-sm leading-6">
        <h2 className="font-medium mb-2">Entire Agreement</h2>
        <p>
          These Terms, together with the Privacy Policy, constitute the entire agreement between you and Campus regarding your use of the Services.
        </p>
      </section>

      {/* Contact Information */}
      <section className="mb-6 text-sm leading-6">
        <h2 className="font-medium mb-2">Contact Us</h2>
        <p>
          For questions or concerns regarding these Terms, contact us at:{" "}
          <a
            href="mailto:arasanmalai123@gmail.com"
            className="text-sky-600 hover:underline"
          >
            arasanmalai123@gmail.com
          </a>.
        </p>
      </section>
    </main>
  );
}

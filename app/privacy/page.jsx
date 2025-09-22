// app/privacy/page.tsx

import React from "react";

export default function PrivacyPage() {
  return (
    <main className="max-w-3xl mx-auto px-4 py-8 text-gray-800">
      {/* Title */}
      <h1 className="text-2xl font-semibold mb-2">Privacy Policy</h1>
      <p className="mb-6 text-xs text-gray-500">Last updated: September 22, 2025</p>

      {/* Intro */}
      <section className="mb-6 text-sm leading-6">
        <p className="mb-3">
          This Privacy Notice for <strong>Campus</strong> (&quot;<strong>we</strong>&quot;, &quot;<strong>us</strong>&quot;, or &quot;<strong>our</strong>&quot;) explains how and why we may
          access, collect, store, use, and/or share (<strong>process</strong>) your personal
          information when you use our services (<strong>Services</strong>), including when you:
        </p>
        <ul className="list-disc ml-5 space-y-1">
          <li>Download and use the Campus mobile app or website.</li>
          <li>Engage with features such as anonymous posts, chats, or the student marketplace.</li>
          <li>Interact with us in any other related way — including support, events, or inquiries.</li>
        </ul>
      </section>

      {/* Questions or concerns */}
      <section className="mb-6 text-sm leading-6">
        <h2 className="font-medium mb-2">Questions or concerns?</h2>
        <p>
          Reading this Privacy Notice will help you understand your privacy rights and choices.
          We are responsible for making decisions about how your personal information is processed. 
          If you do not agree with our policies and practices, please do not use our Services. 
          If you still have any questions or concerns, please contact us at{" "}
          <a
            href="mailto:arasanmalai123@gmail.com"
            className="text-sky-600 hover:underline"
          >
            arasanmalai123@gmail.com
          </a>.
        </p>
      </section>

      {/* Summary of key points */}
      <section className="mb-6 text-sm leading-6">
        <h2 className="font-medium mb-2">Summary of Key Points</h2>
        <p className="mb-3">
          This summary provides key points from our Privacy Notice, but you can find more details 
          about any of these topics by clicking the related links below or by using our table of contents.
        </p>
        <ul className="list-disc ml-5 space-y-2">
          <li>
            <strong>What personal information do we process?</strong> When you visit, use, or 
            navigate our Services, we may process personal information depending on how you interact 
            with us and the Services, the choices you make, and the products and features you use.{" "}
            <a href="#personalinfo" className="text-sky-600 hover:underline">
              Learn more
            </a>
          </li>
          <li>
            <strong>Do we process any sensitive personal information?</strong> Some of the 
            information may be considered “special” or “sensitive” in certain jurisdictions, 
            for example your racial or ethnic origins, sexual orientation, and religious beliefs. 
            We may process sensitive personal information when necessary with your consent or as 
            otherwise permitted by law.{" "}
            <a href="#sensitiveinfo" className="text-sky-600 hover:underline">
              Learn more
            </a>
          </li>
          <li>
            <strong>Do we collect any information from third parties?</strong> We may collect 
            information from public databases, marketing partners, social media platforms, and other 
            outside sources.{" "}
            <a href="#othersources" className="text-sky-600 hover:underline">
              Learn more
            </a>
          </li>
          <li>
            <strong>How do we process your information?</strong> We process your information to 
            provide, improve, and administer our Services, communicate with you, for security and 
            fraud prevention, and to comply with law. We may also process your information for other 
            purposes with your consent.{" "}
            <a href="#infouse" className="text-sky-600 hover:underline">
              Learn more
            </a>
          </li>
          <li>
            <strong>In what situations and with which parties do we share personal information?</strong>{" "}
            We may share information in specific situations and with specific third parties.{" "}
            <a href="#whoshare" className="text-sky-600 hover:underline">
              Learn more
            </a>
          </li>
          <li>
            <strong>How do we keep your information safe?</strong> We have adequate organizational 
            and technical processes and procedures in place to protect your personal information. 
            However, no electronic transmission over the internet or information storage technology 
            can be guaranteed to be 100% secure.{" "}
            <a href="#infosafe" className="text-sky-600 hover:underline">
              Learn more
            </a>
          </li>
          <li>
            <strong>What are your rights?</strong> Depending on where you are located geographically, 
            the applicable privacy law may mean you have certain rights regarding your personal 
            information.{" "}
            <a href="#privacyrights" className="text-sky-600 hover:underline">
              Learn more
            </a>
          </li>
          <li>
            <strong>How do you exercise your rights?</strong> The easiest way to exercise your rights 
            is by contacting us at{" "}
            <a
              href="mailto:arasanmalai123@gmail.com"
              className="text-sky-600 hover:underline"
            >
              arasanmalai123@gmail.com
            </a>. We will consider and act upon any request in accordance with applicable data 
            protection laws.
          </li>
        </ul>

        <p className="mt-4">
          Want to learn more about what we do with any information we collect?{" "}
          <a href="#toc" className="text-sky-600 hover:underline">
            Review the Privacy Notice in full
          </a>.
        </p>
      </section>


            {/* Personal Information We Process */}
      <section id="personalinfo" className="mb-6 text-sm leading-6">
        <h2 className="font-medium mb-2">What Personal Information Do We Process?</h2>
        <p className="mb-3">
          Depending on how you interact with <strong>Campus</strong> and our Services, we may process information such as:
        </p>
        <ul className="list-disc ml-5 space-y-1">
          <li>Account registration details like your name, email, and password.</li>
          <li>Information you provide in posts, chats, and marketplace listings.</li>
          <li>Usage and analytics data, such as how you interact with features.</li>
          <li>Device information, IP address, and location data, if you allow it.</li>
        </ul>
        <p>
          We only collect information that is necessary to provide, improve, and personalize our Services.
        </p>
      </section>

      {/* Sensitive Information */}
      <section id="sensitiveinfo" className="mb-6 text-sm leading-6">
        <h2 className="font-medium mb-2">Do We Process Sensitive Personal Information?</h2>
        <p className="mb-3">
          Certain information may be considered sensitive depending on local law, such as:
        </p>
        <ul className="list-disc ml-5 space-y-1">
          <li>Racial or ethnic origins</li>
          <li>Sexual orientation</li>
          <li>Religious beliefs</li>
        </ul>
        <p>
          <strong>Campus</strong> will only process sensitive information with your consent or where legally allowed.
        </p>
      </section>

      {/* Information from Third Parties */}
      <section id="othersources" className="mb-6 text-sm leading-6">
        <h2 className="font-medium mb-2">Do We Collect Information from Third Parties?</h2>
        <p>
          Yes. We may receive information about you from external sources like public databases, marketing partners, or social media platforms. We only use this information to provide and improve our Services.
        </p>
      </section>

      {/* How We Use Information */}
      <section id="infouse" className="mb-6 text-sm leading-6">
        <h2 className="font-medium mb-2">How Do We Process Your Information?</h2>
        <p>
          <strong>Campus</strong> processes personal information to:
        </p>
        <ul className="list-disc ml-5 space-y-1">
          <li>Provide and improve the Services.</li>
          <li>Communicate with you.</li>
          <li>Ensure security and prevent fraud.</li>
          <li>Comply with legal obligations.</li>
          <li>With your consent, use it for other specific purposes.</li>
        </ul>
      </section>
      {/* Who We Share Information With */}
      <section id="whoshare" className="mb-6 text-sm leading-6">
        <h2 className="font-medium mb-2">In What Situations and With Which Parties Do We Share Personal Information?</h2>
        <p>
          <strong>Campus</strong> may share your personal information with:
        </p>
        <ul className="list-disc ml-5 space-y-1">
          <li>Service providers who help operate or improve our Services.</li>
          <li>Business partners for joint services or promotions.</li>
          <li>Legal authorities if required by law, regulation, or legal process.</li>
          <li>Other users, when you post content or interact publicly within our Services.</li>
        </ul>
        <p>
          We ensure that any third party we share information with follows strict data protection rules.
        </p>
      </section>

      {/* How We Keep Your Information Safe */}
      <section id="infosafe" className="mb-6 text-sm leading-6">
        <h2 className="font-medium mb-2">How Do We Keep Your Information Safe?</h2>
        <p>
          <strong>Campus</strong> takes appropriate organizational and technical measures to protect your personal information. This includes encryption, secure storage, and access control. However, no system is completely secure, so we cannot guarantee 100% protection.
        </p>
      </section>

      {/* Your Privacy Rights */}
      <section id="privacyrights" className="mb-6 text-sm leading-6">
        <h2 className="font-medium mb-2">What Are Your Rights?</h2>
        <p>
          Depending on your location, you may have rights under applicable privacy laws. These can include:
        </p>
        <ul className="list-disc ml-5 space-y-1">
          <li>Accessing your personal information.</li>
          <li>Correcting inaccurate or incomplete information.</li>
          <li>Deleting your personal information.</li>
          <li>Restricting or objecting to certain processing activities.</li>
          <li>Withdrawing consent where processing is based on your consent.</li>
        </ul>
        <p>
          You can exercise your rights by contacting us at{" "}
          <a
            href="mailto:arasanmalai123@gmail.com"
            className="text-sky-600 hover:underline"
          >
            arasanmalai123@gmail.com
          </a>. We will respond in accordance with applicable data protection laws.
        </p>
      </section>

      {/* Updates to This Privacy Notice */}
      <section className="mb-6 text-sm leading-6">
        <h2 className="font-medium mb-2">Updates to This Privacy Notice</h2>
        <p>
          <strong>Campus</strong> may update this Privacy Notice from time to time. Any updates will be posted on this page with the &quot;Last updated&quot; date revised. We encourage you to review this Privacy Notice periodically to stay informed about how we are protecting your information.
        </p>
      </section>

      {/* Contact Information */}
      <section className="mb-6 text-sm leading-6">
        <h2 className="font-medium mb-2">Contact Us</h2>
        <p>
          If you have any questions, concerns, or requests regarding this Privacy Notice or your personal information, please contact us at:
        </p>
        <p>
          Email:{" "}
          <a
            href="mailto:arasanmalai123@gmail.com"
            className="text-sky-600 hover:underline"
          >
            arasanmalai123@gmail.com
          </a>
        </p>
      </section>

    </main>
  );
}

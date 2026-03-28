import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Affiliate Disclosure — StayDen",
  description: "Full transparency about how StayDen funds its editorial work through affiliate partnerships and PDF guide sales.",
};

export default function DisclosurePage() {
  return (
    <>
      <div className="page-header">
        <h1 className="page-header__title">
          Affiliate <em>Disclosure</em>
        </h1>
        <p className="page-header__sub">Transparency is non-negotiable</p>
      </div>

      <div className="page-body">
        <p>
          StayDen is an independently operated publication. We believe in full
          transparency about how we fund our work and maintain editorial
          independence.
        </p>

        <h2>Affiliate Links</h2>
        <p>
          Some of the links on StayDen are affiliate links. This means that if
          you click on a link and make a purchase, we may receive a small
          commission at no additional cost to you. These commissions help us
          maintain the site, fund product testing, and continue creating
          high-quality content.
        </p>

        <h2>Editorial Independence</h2>
        <p>
          Affiliate partnerships never influence our reviews or recommendations.
          Every product featured on StayDen has been personally tested and
          evaluated by our team. If a product does not meet our standards, it
          does not appear on the site — regardless of any potential commission.
        </p>

        <h2>Product Selection</h2>
        <p>
          We choose which products to review based on reader interest, market
          relevance, and our own curiosity. Brands do not pay for placement in
          our editorial content. Sponsored content, if it ever appears, will
          always be clearly labeled as such.
        </p>

        <h2>PDF Guides</h2>
        <p>
          Our downloadable PDF guides are original content created by the
          StayDen team. Revenue from guide sales goes directly to supporting
          our editorial operations and expanding our testing capabilities.
        </p>

        <h2>Questions</h2>
        <p>
          If you have any questions about our affiliate relationships or
          editorial policies, contact us at hello@stayden.com. We are happy
          to discuss how we work.
        </p>
      </div>
    </>
  );
}

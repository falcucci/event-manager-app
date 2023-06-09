const SEO = ({ description, keywords, title }) => (
  <>
    <title>{title}</title>
    <meta name="description" content={description} />
    <meta name="keywords" content={keywords?.join(", ")} />
    <meta property="og:type" content="website" />
    <meta name="og:title" property="og:title" content={title} />
    <meta
      name="og:description"
      property="og:description"
      content={description}
    />
    <meta property="og:site_name" content="" />
    <meta property="og:url" content="" />
    <meta name="twitter:card" content="event" />
    <meta name="twitter:title" content={title} />
    <meta name="twitter:description" content={description} />
    <meta name="twitter:site" content={title} />
    <meta name="twitter:creator" content="@alexfalcucci" />
    <meta name="twitter:image" content="" />
    <meta property="og:image" content="" />
    <link rel="icon" type="image/png" href="/italy.png" />
    <link
      rel="apple-touch-icon"
      type="image/png"
      href="/italy.png"
    />
  </>
);

SEO.defaultProps = {
  title: "Event Manager",
  description:
    "Yet another app that allows users to create, manage, and view events.",
  keywords: [
    "react",
    "reactjs",
    "styled-components",
    "styledcomponents",
    "nextjs",
  ],
};

export default SEO;

import { Helmet } from "react-helmet";

interface MetaProps {
  title?: string;
  description?: string;
  keywords?: string;
}

const Meta = ({ title, description, keywords }: MetaProps) => {
  return (
    <Helmet>
      <title>{title}</title>
      <meta name="description" content={description} />
      <meta name="keywords" content={keywords} />
    </Helmet>
  );
};

Meta.defaultProps = {
  title: "Ohamadike Foundation",
  description: `
  Established in 2010 and registered with CAC/IT/N0 38276, Ohamadike International Foundation 
  is a nonprofit organization dedicated to alleviating the suffering of the less privileged 
  and physically challenged across the West African sub-region.
  `,
  keywords:
    "Ohamadike, Foundation, NGO, Nonprofit, Charity, West Africa, Physically Challenged, Less Privileged, Support, Aid, Community Development",
};

export default Meta;

import { Head } from '@inertiajs/react';

interface PageHeadProps {
  title: string;
  description: string;
  canonical: string;
  keywords?: string;
}

export default function PageHead({ title, description, canonical, keywords }: PageHeadProps) {
  return (
    <Head title={title}>
      <meta head-key="description" name="description" content={description} />
      {keywords && <meta head-key="keywords" name="keywords" content={keywords} />}
      <link head-key="canonical" rel="canonical" href={canonical} />
    </Head>
  );
}

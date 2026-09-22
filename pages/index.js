import Head from 'next/head';
import Layout, { siteTitle } from '../components/layout';
import utilStyles from '../styles/utils.module.css';
 
export default function Home() {
  return (
    <Layout home>
      <Head>
        <title>{siteTitle}</title>
      </Head>
      <section className={utilStyles.headingMd}>
        <p>10 Things That Require Zero Effort</p>
        <p>- Being On Time<br />
        - Making An Effort<br />
        - Being High Energy<br />
        - Having A Positive Attitude<br />
        - Being Passionate<br />
        - Using Good Body Language<br />
        - Being Coachable<br />
        - Doing A Little Extra<br />
        - Being Prepared<br />
        - Having A Strong Work Ethic<br /></p>
        <p>
          (This is a sample website - you’ll be building a site like this on{' '}
          <a href="https://nextjs.org/learn">our Next.js tutorial</a>.)
        </p>
      </section>
    </Layout>
  );
}

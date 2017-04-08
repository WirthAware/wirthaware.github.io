import React from 'react';
import Head from 'next/head';

import {
  Layout,
  Header,
  Avatar,
  Section,
  SectionContent,
} from '../components';

export default () => (
  <div>
    <Head>
      <title>About me</title>
      <meta name="viewport" content="width=device-width, initial-scale=1" />

      <link rel="stylesheet" type="text/css" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.css" />
    </Head>

    <Layout>
      <Header title="About" />

      <Section>
        <Avatar description="Hello, my name is Stephan" />
      </Section>

      <SectionContent title="Programmierer" text="Ich liebe es zu lernen. Zu Programmieren ist nicht nur ein Job für mich, es ist auch mein Hobby." />
      <SectionContent title="Programmierer" text="Ich liebe es zu lernen. Zu Programmieren ist nicht nur ein Job für mich, es ist auch mein Hobby." />
    </Layout>
  </div>
);

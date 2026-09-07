/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import Hero from './components/Hero';
import Problem from './components/Problem';
import Opportunity from './components/Opportunity';
import Content from './components/Content';
import Benefits from './components/Benefits';
import Bonus from './components/Bonus';
import Offer from './components/Offer';
import Guarantee from './components/Guarantee';
import Faq from './components/Faq';
import Footer from './components/Footer';

export default function App() {
  return (
    <main className="min-h-screen bg-brand-cream font-sans selection:bg-brand-light selection:text-white">
      <Hero />
      <Problem />
      <Opportunity />
      <Content />
      <Benefits />
      <Bonus />
      <Offer />
      <Guarantee />
      <Faq />
      <Footer />
    </main>
  );
}


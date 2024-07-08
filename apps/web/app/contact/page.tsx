'use client';

import Footer from '@repo/ui/components/footer/footer';
import ReachOut from '@repo/ui/components/ReachOut';
import React from 'react';

function Contact() {
  return (
    <section>
      <div className="py-12 px-6 bg-primarygreen">
        <div className="max-w-7xl mx-auto mt-20">
          <ReachOut />
        </div>
      </div>
    </section>
  );
}

export default Contact;

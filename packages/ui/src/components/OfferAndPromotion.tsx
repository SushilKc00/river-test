import React from 'react';
import FormattedText from './formattedText';

export interface OfferAndPromotion {
  title: string;
}

function OfferAndPromotion({ title }: OfferAndPromotion) {
  return (
    <section>
      <div className="grid md:grid-cols-2 gap-8 items-center">
        <div>
          {title && (
            <FormattedText className="sm:text-5xl text-md sm:w-[80%] capitalize text-white md:text-start text-center">
              {title}
            </FormattedText>
          )}
        </div>
        <div>
          <div className="border-b border-b-gray-700 py-2 pr-6 flex justify-between">
            <input
              type="text"
              placeholder="Enter your email address"
              className="bg-transparent outline-none text-white sm:text-md text-sm font-roboto"
            />
            <button className="text-white sm:text-md text-sm font-roboto">Subscribe</button>
          </div>
        </div>
      </div>
    </section>
  );
}

export default OfferAndPromotion;

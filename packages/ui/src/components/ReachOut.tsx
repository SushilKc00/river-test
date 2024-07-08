import React from 'react';
import FormattedText from './formattedText';

function ReachOut() {
  return (
    <div className="flex justify-center items-center">
      <div>
        <FormattedText className="text-center text-3xl text-white mt-6">
          Reach out to Jia Organic
        </FormattedText>
        <form
          action="https://formbold.com/s/3wrDl"
          method="POST"
          encType="multipart/form-data"
          className="mt-10 flex flex-col gap-5"
        >
          <div className="flex gap-6">
            <input
              type="text"
              placeholder="First Name"
              name="First Name"
              required
              className="bg-transparent border placeholder:text-white border-white rounded-sm px-2 py-1 text-md text-white outline-none w-full"
            />
            <input
              type="text"
              placeholder="Last Name"
              name="Last Name"
              className="bg-transparent border placeholder:text-white border-white rounded-sm px-2 py-1 text-md text-white outline-none w-full"
            />
          </div>

          <div className="flex gap-6">
            <input
              type="text"
              name="Contact"
              required
              placeholder="Contact Number"
              className="bg-transparent border placeholder:text-white border-white rounded-sm px-2 py-1 text-md text-white outline-none w-full"
            />
            <input
              type="text"
              name="Email"
              placeholder="Email Address"
              className="bg-transparent border placeholder:text-white border-white rounded-sm px-2 py-1 text-md text-white outline-none w-full"
            />
          </div>

          <div className="flex gap-6">
            <textarea
              rows={6}
              placeholder="Message"
              name="Message"
              className="placeholder:text-white outline-none bg-transparent border border-white rounded-sm px-2 py-1 text-md text-white w-full"
            />
          </div>

          <div className="flex justify-center">
            <input
              type="submit"
              className="border border-white  rounded-sm font-bold px-16 py-1 text-mda text-white cursor-pointer"
            />
          </div>
        </form>
      </div>
    </div>
  );
}

export default ReachOut;

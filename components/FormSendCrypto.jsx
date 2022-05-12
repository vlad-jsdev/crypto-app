import { useAppContext } from "../context/TransactionContext";
import { useState } from "react";

const FormSendCrypto = () => {
  const { handleChange, formData, sendTransaction } = useAppContext();

  const handleSubmit = (e) => {
    const { addressTo, amount, keyword, message } = formData;

    e.preventDefault();
    console.log({ addressTo, amount, keyword, message });

    if (!addressTo || !amount || !keyword || !message) {
      return;
    }

    sendTransaction();
  };
  return (
    <form onSubmit={handleSubmit}>
      <div className="mb-6">
        <label
          htmlFor="addressTo"
          className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300"
        >
          Address to
        </label>
        <input
          type="text"
          id="addressTo"
          name="addressTo"
          className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
          placeholder="Address to"
          onChange={handleChange}
          required
        />
      </div>
      <div className="mb-6">
        <label
          htmlFor="amount"
          className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300"
        >
          Amount (ETH)
        </label>
        <input
          type="text"
          id="amount"
          name="amount"
          className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
          onChange={handleChange}
          required
        />
      </div>
      <div className="mb-6">
        <label
          htmlFor="keyword"
          className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300"
        >
          Keyword
        </label>
        <input
          type="text"
          id="keyword"
          name="keyword"
          className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
          onChange={handleChange}
          required
        />
      </div>
      <div className="mb-6">
        <label
          htmlFor="message"
          className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300"
        >
          Message
        </label>
        <input
          type="text"
          id="message"
          name="message"
          className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
          onChange={handleChange}
          required
        />
      </div>
      <button
        type="submit"
        className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
      >
        Send Now
      </button>
    </form>
  );
};

export default FormSendCrypto;

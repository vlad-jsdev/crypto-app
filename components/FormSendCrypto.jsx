import { useAppContext } from "../context/TransactionContext";
import Spinner from "./Spinner";

const FormSendCrypto = () => {
  const { handleChange, formData, sendTransaction, isLoading, setFormData } =
    useAppContext();

  const handleSubmit = (e) => {
    e.preventDefault();
    const { addressTo, amount } = formData;
    if (!addressTo || !amount) {
      return;
    }

    sendTransaction();
  };
  return (
    <div className="w-full p-4 lg:max-w-sm bg-white rounded-lg border border-gray-200 drop-shadow-2xl sm:p-6 lg:p-8 dark:bg-gray-800 dark:border-gray-700">
      <h5 className="py-4 text-xl font-medium text-gray-900 dark:text-white">
        Send in one click
      </h5>
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
            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-indigo-500 focus:border-indigo-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white"
            placeholder="Wallet address"
            value={formData.addressTo}
            onChange={handleChange}
            required
          />
        </div>
        <div className="mb-6">
          <label
            htmlFor="amount"
            className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300"
          >
            Amount
          </label>
          <input
            type="number"
            id="amount"
            name="amount"
            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-indigo-500 focus:border-indigo-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white"
            placeholder="Amount"
            value={formData.amount}
            onChange={handleChange}
            required
          />
        </div>
        {/*<div className="mb-6">*/}
        {/*  <label*/}
        {/*    htmlFor="keyword"*/}
        {/*    className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300"*/}
        {/*  >*/}
        {/*    Keyword*/}
        {/*  </label>*/}
        {/*  <input*/}
        {/*    type="text"*/}
        {/*    id="keyword"*/}
        {/*    name="keyword"*/}
        {/*    className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-indigo-500 focus:border-indigo-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white"*/}
        {/*    onChange={handleChange}*/}
        {/*    required*/}
        {/*  />*/}
        {/*</div>*/}
        {/*<div className="mb-6">*/}
        {/*  <label*/}
        {/*    htmlFor="message"*/}
        {/*    className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300"*/}
        {/*  >*/}
        {/*    Message*/}
        {/*  </label>*/}
        {/*  <input*/}
        {/*    type="text"*/}
        {/*    id="message"*/}
        {/*    name="message"*/}
        {/*    className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-indigo-500 focus:border-indigo-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white"*/}
        {/*    onChange={handleChange}*/}
        {/*    required*/}
        {/*  />*/}
        {/*</div>*/}
        <button
          type="submit"
          className="my-4 w-full text-white bg-indigo-600 hover:bg-indigo-800 focus:ring-4 focus:outline-none focus:ring-indigo-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-indigo-600 dark:hover:bg-indigo-400 dark:focus:ring-indigo-800"
        >
          Send Now
        </button>
      </form>
      {isLoading && (
        <div className="absolute flex justify-center right-0 top-0 w-full h-full bg-indigo-100 opacity-75">
          <Spinner />
        </div>
      )}
    </div>
  );
};

export default FormSendCrypto;

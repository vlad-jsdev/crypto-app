import ArrowUpIcon from "../assets/images/arrow-up.svg";
import ArrowDownIcon from "../assets/images/arrow-down.svg";

const CryptoThTitle = ({ sortCrypto, type, toggle, isType, title }) => (
  <th
    scope="col"
    className="px-6 py-3 cursor-pointer"
    onClick={() => sortCrypto(type)}
  >
    <span className="inline">{title}</span>
    {isType === type && (
      <img
        src={toggle ? ArrowUpIcon.src : ArrowDownIcon.src}
        className="inline h-3"
      />
    )}
  </th>
);

export default CryptoThTitle;

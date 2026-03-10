const Card = (props) => {
  const {
    logo,
    company,
    isNew,
    isFeatured,
    position,
    postedAt,
    contract,
    location,
  } = props;
  return (
    <li className="bg-white mb-5 py-10">
      <div className="flexing">
        <img src={logo} className="logo" />
        <div className="flexing flex-col">
          <div className="flex_gap2">
            <p className="text-teal-500 bold_text">{company}</p>
            {isNew == true && (
              <p className="bg-teal-500 badge-inside-style">NEW!</p>
            )}
            {isFeatured == true && (
              <p className="bg-zinc-950 badge-inside-style">FEATURED</p>
            )}
          </div>
          <p className="flexing bold_text">{position}</p>
          <div className="flex_gap2 text-sm">
            <p>{postedAt}</p>
            <p className="ligt_gray_text">•</p>
            <p>{contract}</p>
            <p className="ligt_gray_text">•</p>
            <p>{location}</p>
          </div>
        </div>
      </div>
    </li>
  );
};

export default Card;

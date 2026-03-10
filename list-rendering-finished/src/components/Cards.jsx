import Card from "./Card";

const Cards = ({ data }) => {
  return (
    <main className="job_list_background py-15">
      <ul className="job_list_background">
        {data.map((info) => {
          return (
            <Card key={info.id} logo={info.logo} company={info.company} isNew={info.new} isFeatured={info.featured} position={info.position} postedAt={info.postedAt} contract={info.contract} location={info.location}/>
          );
        })}
      </ul>
    </main>
  );
};

export default Cards;

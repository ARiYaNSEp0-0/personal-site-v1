import { Heading } from "../index";
import "./Statistics.css";

const Statistics = () => {
  const stats = [
    {
      id: 1,
      title: (
        <Heading level="h3">
          سال <span>تجربه</span>
        </Heading>
      ),
      value: "۸+",
    },
    {
      id: 2,
      title: (
        <Heading level="h3">
          تکمیل شده <span>پروژه ها</span>
        </Heading>
      ),
      value: "۲۰+",
    },
    {
      id: 3,
      title: (
        <Heading level="h3">
          شرکت ها <span>کار</span>
        </Heading>
      ),
      value: "۵+",
    },
  ];
  return (
    <section className="statistics" style={{ display: "none" }}>
      <ul className="statistics__list flex-center">
        {stats.map((stat) => (
          <li key={stat.id}>
            <div className="statistics__value flex-center">{stat.value}</div>
            <div className="statistics__title">{stat.title}</div>
          </li>
        ))}
      </ul>
    </section>
  );
};

export default Statistics;

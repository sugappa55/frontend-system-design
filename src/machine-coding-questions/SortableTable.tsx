import { ChangeEvent, useEffect, useState } from "react";

const articles = [
  {
    id: 1,
    title: "The Benefits of Regular Exercise",
    noOfViews: 1200,
    dateOfPublish: "2022-03-22",
  },
  {
    id: 2,
    title: "10 Easy Ways to Boost Your Energy Levels",
    noOfViews: 2400,
    dateOfPublish: "2021-11-10",
  },
  {
    id: 6,
    title: "10 Easy Ways to Boost Your Energy Levels",
    noOfViews: 2400,
    dateOfPublish: "2021-11-09",
  },
  {
    id: 3,
    title: "How to Stay Productive When Working From Home",
    noOfViews: 3200,
    dateOfPublish: "2022-01-15",
  },
  {
    id: 4,
    title: "The Top 5 Strategies for a Successful Job Interview",
    noOfViews: 1800,
    dateOfPublish: "2022-03-22",
  },
  {
    id: 5,
    title: "Why Sleep is Essential for Good Health",
    noOfViews: 5000,
    dateOfPublish: "2022-02-10",
  },
];
const SortableTable = () => {
  const [sortViews, setSortViews] = useState(true);
  const [data, setData] = useState(articles);

  const onChangeRadio = (e: ChangeEvent<HTMLInputElement>) => {
    if (e.target.checked) {
      setSortViews(e.target.id === "by-views");
    }
  };

  useEffect(() => {
    setData((p) => {
      const tableData = structuredClone(p);
      const field = sortViews ? "noOfViews" : "dateOfPublish";
      tableData.sort((a, b) => {
        if (field === "noOfViews") return b.noOfViews - a.noOfViews;
        if (a[field] === b[field]) return b.noOfViews - a.noOfViews;
        return new Date(b.dateOfPublish) - new Date(a.dateOfPublish);
      });
      return tableData;
    });
  }, [sortViews]);

  return (
    <div>
      <div className="flex gap-4 justify-center my-4">
        Sort by
        <label className="flex gap-1 cursor-pointer">
          <input
            type="radio"
            name="sortField"
            defaultChecked={!sortViews}
            id="by-date"
            onChange={onChangeRadio}
          />
          Most Recent
        </label>
        <label className="flex gap-1 cursor-pointer">
          <input
            type="radio"
            name="sortField"
            defaultChecked={sortViews}
            onChange={onChangeRadio}
            id="by-views"
          />
          Most Viewed
        </label>
      </div>
      <br />
      <table>
        <thead>
          <tr>
            <th className="p-2 border border-teal-600">Title</th>
            <th className="p-2 border border-teal-600">No. of Views</th>
            <th className="p-2 border border-teal-600">Date of Publish</th>
          </tr>
        </thead>
        <tbody>
          {data.map((article) => (
            <tr>
              <td className="p-2 border border-teal-600">{article.title}</td>
              <td className="p-2 border border-teal-600">
                {article.noOfViews}
              </td>
              <td className="p-2 border border-teal-600">
                {article.dateOfPublish}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default SortableTable;

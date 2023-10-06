import { useContext } from "react";
import { NewsCategoryContext } from "../../Provider/NewsCategoryProvider";

const LeftSideBar = () => {
  const categoryData = useContext(NewsCategoryContext);
//   console.log(categoryData);

  return (
    <>
    <h2 className=" text-xl font-semibold mb-5 "> All Caterogy </h2>
    <h2 className=" bg-slate-300 text-center p-5 mb-5 rounded-lg"> National News</h2>
    <div>
      {categoryData.map((category) => {
        return (
          <ul className=" drawer tetx-[30px]" key={categoryData.id}>
            <li className="mb-7">{category.category_name}</li>
          </ul>
        );
      })}
    </div>
    </>
  );
};

export default LeftSideBar;

import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  getcategory,
  getfetchproduct,
} from "../rtx-store/Slices/proposalsproduct";
import { Link } from "react-router-dom";

function Proposalspage() {
  let produts = useSelector((state) => state.detail);
  let produtssame = useSelector((state) => state.proposals);
  console.log(produtssame);
  let updata;
  if (produtssame.length === 0) {
    updata = new Date();
  }
  useEffect(() => {
    if (produts.category !== undefined) {
      dispatch(getcategory(produts.category));
      dispatch(getfetchproduct());
    }
  }, [updata]);
  let dispatch = useDispatch();

  return (
    <>
      {" "}
      <div className="bg-white">
        <div className="mx-auto max-w-2xl px-4 py-16 sm:px-6 sm:py-24 lg:max-w-7xl lg:px-8">
          <h2 className="text-2xl font-bold tracking-tight text-gray-900">
            Customers also purchased
          </h2>
          <div className="mt-6 grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-4 xl:gap-x-8">
            {typeof produtssame === "object"
              ? produtssame.map((e) => {
                  return (
                    <div key={e.id} className="group relative">
                      <div className="aspect-h-1 aspect-w-1 w-full overflow-hidden rounded-md bg-gray-200 lg:aspect-none group-hover:opacity-75 lg:h-80">
                        <img
                          src={e.image}
                          alt="Front of men&#039;s Basic Tee in black."
                          className="h-full w-full  object-center lg:h-full lg:w-full"
                        />
                      </div>
                      <div className="mt-4 flex justify-between">
                        <div>
                          <Link
                            to={`http://localhost:3000/details/${e.id}`}
                            className="nav-link btn"
                            onClick={() => {
                              console.log(
                                window.location.replace(
                                  `http://localhost:3000/details/${e.id}`
                                )
                              );
                            }}
                          >
                            <h3 className="text-sm text-gray-700">
                              <span
                                aria-hidden="true"
                                className="absolute inset-0"
                              ></span>
                              {e.title}
                            </h3>
                          </Link>
                          <p className="mt-1 text-sm text-gray-500">
                            {e.category}
                          </p>
                        </div>
                        <p className="text-sm font-medium text-gray-900">
                          {e.price}$
                        </p>
                      </div>
                    </div>
                  );
                })
              : null}{" "}
          </div>
        </div>
      </div>
    </>
  );
}

export default Proposalspage;

import React, { useEffect, useState } from "react";
import Sidebar from "../Components/SidebarComponent/Sidebar";
import Topbar from "../Components/TopbarComponent/Topbar";
import { FaUserGraduate } from "react-icons/fa";
import { GiNotebook } from "react-icons/gi";
import { ImAirplane } from "react-icons/im";
import { TbChecklist } from "react-icons/tb";
import { BsCalendarDay } from "react-icons/bs";
import "../CSS/University.css";
import ApplicantChart from "../Components/DashboardComponent/Charts/ApplicantChart";
import "../CSS/University.css";
import axios from "axios";
import AddPackage from "../Components/packages/addPackage";

const Dashboard = () => {
  const [totalsamacharNews, settotalsamacharNews] = useState();
  const [totalBankNews, settotalBankNews] = useState();
  const [totalDarsanNews, settotalDarsanNews] = useState();
  const [totaladdnews, settotaladdnews] = useState();
  const [totalnews, settotalnews] = useState();
  const [employeeDetails, setEmployeeDetails] = useState();

  const headers = {
    Authorization: `Bearer ${localStorage.getItem("token")}`,
  };
  console.log(process.env.REACT_APP_URL, "as")

  useEffect(() => {
    const apiCalls = [
      axios.get(`${process.env.REACT_APP_URL}/posts/getAll`),
      axios.get(`${process.env.REACT_APP_URL}/samachar`),
      axios.get(`${process.env.REACT_APP_URL}/bank-market`),
      axios.get(`${process.env.REACT_APP_URL}/philosophy`),
      axios.get(`${process.env.REACT_APP_URL}/additional`),
    ];

    Promise.all(apiCalls)
      .then((responses) => {
        const [posts1, samachar, bank, darsan, additional] = responses;
        setEmployeeDetails(posts1.data.post.length);
        settotalnews(posts1.data.post.length);
        settotalsamacharNews(samachar.data.post.length);
        settotalBankNews(bank.data.post.length);
        settotalDarsanNews(darsan.data.post.length);
        settotaladdnews(additional.data.post.length);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);
  return (
    <>
      <Topbar />
      <div className="flex gap-3">
        <Sidebar />
        {/* Main container */}
        <div
          id="maincontainer"
          className="w-full pr-5 pt-5 pb-5 h-[90vh] overflow-y-auto"
        >
          {/* Top Section */}
          <div className="w-full h-12 p-2 flex items-center justify-between">
            <div className="w-fit">
              <p className="font-poppins text-lg font-bold tracking-wide">
                <span className="text-[#2266D1] text-xl">Welcome,</span>{" "}
                {employeeDetails &&
                  employeeDetails.user &&
                  employeeDetails.user.name}{" "}
              </p>
            </div>
          </div>
          {/* Second Section */}
          <div className="w-full p-2 grid grid-cols-5 gap-5 mt-5">
            {/* Total student */}
            <div className="w-full rounded-sm p-3 flex items-center gap-5 bg-[#1298EA] shadow-sm border-[1px] relative">
              <p className="text-5xl text-white opacity-10 absolute right-7">
                <FaUserGraduate />
              </p>
              <div className="flex flex-col items-start text-white">
                <p className="font-poppins text-2xl font-bold  tracking-wide">
                  {totalsamacharNews}
                </p>
                <p className="font-poppins text-sm tracking-wide">
                  सबै अर्थ खबर
                </p>
              </div>
            </div>
            {/* Total student */}
            <div className="w-full rounded-sm p-3 flex items-center gap-5 bg-[#6C52F3] shadow-sm border-[1px] relative">
              <p className="text-5xl text-white opacity-10 absolute right-5">
                <GiNotebook />
              </p>
              <div className="flex flex-col items-start text-white">
                <p className="font-poppins text-2xl font-bold  tracking-wide">
                  {totalBankNews}
                </p>
                <p className="font-poppins text-sm tracking-wide">
                  सबै बैंक/बजार खबर
                </p>
              </div>
            </div>
            {/* Total student */}
            <div className="w-full rounded-sm p-3 flex items-center gap-5 bg-[#03999F] shadow-sm border-[1px] relative">
              <p className="text-5xl text-white opacity-10 absolute right-5">
                <ImAirplane />
              </p>
              <div className="flex flex-col items-start text-white">
                <p className="font-poppins text-2xl font-bold  tracking-wide">
                  {totalDarsanNews}
                </p>
                <p className="font-poppins text-sm tracking-wide">
                  सबै दर्शनसंवाद खबर
                </p>
              </div>
            </div>
            {/* Total student */}
            <div className="w-full rounded-sm p-3 flex items-center gap-5 bg-[#2A3948] shadow-sm border-[1px] relative">
              <p className="text-5xl text-white opacity-10 absolute right-5 rotate-6">
                <TbChecklist />
              </p>
              <div className="flex flex-col items-start text-white">
                <p className="font-poppins text-2xl font-bold  tracking-wide">
                  {totaladdnews}
                </p>
                <p className="font-poppins text-sm tracking-wide">सबै थप खबर</p>
              </div>
            </div>
            {/* Total student */}
            <div className="w-full rounded-sm p-3 flex items-center gap-5 bg-[#F5B800] shadow-sm border-[1px] relative">
              <p className="text-5xl text-white opacity-10 absolute right-5 rotate-6">
                <BsCalendarDay />
              </p>
              <div className="flex flex-col items-start text-white">
                <p className="font-poppins text-2xl font-bold  tracking-wide"></p>
                <p className="font-poppins text-2xl font-bold  tracking-wide">
                  {totalnews}
                </p>
                <p className="font-poppins text-sm tracking-wide">सबै खबर</p>
              </div>
            </div>
          </div>
          {/* Third section / applicant chart */}
          <div className="w-full p-2 mt-5">
            <div className="w-full">
              <ApplicantChart />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Dashboard;

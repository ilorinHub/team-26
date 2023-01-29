import React from "react";
import SlideShow from "./SlideShow";

function RLanding() {
  return (
    <div className="px-8 lg:px-[150px] md:text-left lg:pt-20 space-y-14">
      <div className="flex flex-col md:flex-row ">
        <div className="flex flex-col items-center md:items-start  mx-auto md:mr-40 w-[9rem] my-5 md:my-0">
          {" "}
          <h3 className="text-3xl md:text-5xl font-bold   ">Vision</h3>
          <span className="-mt-1 md:mt-0 w-8 md:w-14 bg-green h-1 md:h-2"></span>
        </div>
        <p className="md:w-[700px] md:text-lg">
          An education system that provides inclusive, qualitative Education and
          high-level manpower training for sustainable growth, development,
          self-reliance and life-long learning by improving the quality of
          teaching in primary and secondary schools and technical skill
          acquisition centres through the provision of affordable qualitative
          and quantitative education to its citizenry at various stages in their
          development.
        </p>
      </div>
      <div className="flex flex-col md:flex-row  ">
        <div className="flex flex-col items-center md:items-start mx-auto md:mr-40 w-[9rem] my-5 md:my-0 ">
          {" "}
          <h3 className="text-3xl md:text-5xl font-bold  ">Mission</h3>
          <span className="-mt-1 md:mt-0 w-8 md:w-14 bg-green h-1 md:h-2"></span>
        </div>
        <p className=" md:w-[700px] md:text-lg">
          The mission of the Ministry is to attain a high level of literacy and
          numeracy standard in Basic and Senior Secondary Schools in the state.
          This is achievable by improving teaching staff quality and by ensuring
          quality educational opportunities in conformity with national standard
          and to develop productive, competent and responsible citizens.
        </p>
      </div>

      <div className=" flex flex-col md:flex-row ">
        <div className="flex flex-col items-center md:items-start mx-auto md:mr-40 w-[9rem] my-5 md:my-0 ">
          {" "}
          <h3 className="text-2xl md:text-5xl font-bold  ">Mandate</h3>
          <span className="-mt-1 md:mt-0 w-8 md:w-14 bg-green h-1 md:h-2"></span>
        </div>
        <ul className="ml-4  md:w-[700px]  md:text-lg">
          <li className="list-disc">
            Formulation of education policies at primary and secondary schools
          </li>
          <li className="list-disc">
            Establishment and development of Educational Institutions
          </li>
          <li className="list-disc">
            Management and Supervision of Educational Institutions
          </li>
          <li className="list-disc">
            Development and implementation of School’s Curricula
          </li>
          <li className="list-disc">
            Inspection of Educational Establishments{" "}
          </li>
          <li className="list-disc">
            Ensuring High Educational Standards at all levels
          </li>
          <li className="list-disc">
            Conducting various Internal and External Examinations
          </li>
          <li className="list-disc">
            Special Education and Education of the Handicapped
          </li>
          <li className="list-disc">Registration of Teachers</li>
          <li className="list-disc">Educational Guidance and Counseling</li>
          <li className="list-disc">
            Organization of Schools Sports Programmes
          </li>
          <li className="list-disc">Educational Research and Planning</li>
          <li className="list-disc">Educational Research Center</li>
        </ul>
      </div>
    </div>
  );
}

export default RLanding;

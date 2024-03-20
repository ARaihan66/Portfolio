import {
  Tabs,
  TabsHeader,
  TabsBody,
  Tab,
  TabPanel,
} from "@material-tailwind/react";
import Lottie from "react-lottie";
import graduation from "../file_animation/Graduation.json";

const Education = () => {
  const graduationSendMessage = {
    loop: true,
    autoplay: true,
    animationData: graduation,
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice",
    },
  };

  const data = [
    {
      label: "SSC",
      value: "ssc",
      institute: "Bilkarilla B.M. High School",
      passYear: "2013",
      group: "Science",
      result: "5.00 out of 5.00",
      desc: "Received honors for academic excellence. Engaged in internships with industry-leading companies, gaining hands-on experience in the field of science and technology.",
    },
    {
      label: "HSC",
      value: "hsc",
      institute: "Manda Momin Shahana Govt. College",
      passYear: "2016",
      group: "Science",
      result: "5.00 out of 5.00",
      desc: "Participated in various science exhibitions. Also, engaged in internships with industry-leading companies, further enhancing practical knowledge and skills.",
    },
    {
      label: "GRADUATION",
      value: "graduation",
      institute: "Stamford University Bangladesh",
      passYear: "2022",
      group: "Computer Science & Engineering",
      result: "3.84 out of 4.00",
      desc: "Engaged in internships with industry-leading companies, gaining valuable insights and practical experience. Contributed to research projects and academic publications during the course of study.",
    },
  ];

  return (
    <section id="education" className="mx-5 md:mx-20">
      <h2 className="uppercase text-center my-5 md:my-10  text-white">
        Education Background
      </h2>
      <Tabs value="ssc">
        <TabsHeader>
          {data.map(({ label, value }) => (
            <Tab key={value} value={value}>
              <p className="font-semibold"> {label}</p>
            </Tab>
          ))}
        </TabsHeader>
        <TabsBody className="bg-gray-500 my-5 rounded-lg">
          {data.map(({ value, institute, group, desc, result, passYear }) => (
            <TabPanel
              key={value}
              value={value}
              className="flex flex-col md:flex-row"
            >
              <div className="basis-1/2 flex flex-col gap-2 text-justify  text-black">
                <p>
                  <spn className="font-semibold">Institute:</spn> {institute}
                </p>
                <p>
                  <spn className="font-semibold">Group:</spn> {group}
                </p>
                <p>
                  <spn className="font-semibold">Result:</spn> {result}
                </p>
                <p><spn className="font-semibold">Passing Year:</spn> {passYear}</p>
                <p><spn className="font-semibold">Description:</spn> {desc}</p>
              </div>
              <div className="basis-1/2 flex justify-center items-center">
                <div className="w-[50%] h-[100%] bg-white rounded-full my-5">
                  <Lottie options={graduationSendMessage} />
                </div>
              </div>
            </TabPanel>
          ))}
        </TabsBody>
      </Tabs>
    </section>
  );
};

export default Education;

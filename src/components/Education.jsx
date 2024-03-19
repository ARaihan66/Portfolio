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
    <section className="mx-5 md:mx-20">
      <h2 className="uppercase text-center my-5 md:my-10  text-white">
        Education Background
      </h2>
      <Tabs value="ssc">
        <TabsHeader>
          {data.map(({ label, value }) => (
            <Tab key={value} value={value}>
              {label}
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
              <div className="basis-1/2 flex flex-col gap-2 text-justify font-semibold text-black">
                <p>Institute: {institute}</p>
                <p>Group: {group}</p>
                <p>Result: {result}</p>
                <p>Passing Year: {passYear}</p>
                <p>Description: {desc}</p>
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
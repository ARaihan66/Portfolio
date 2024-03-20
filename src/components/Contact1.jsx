
import {
  Card,
  CardBody,
  Tabs,
  TabsHeader,
  TabsBody,
  Tab,
  TabPanel,
} from "@material-tailwind/react";
import {
  BanknotesIcon,
  CreditCardIcon,
  LockClosedIcon,
} from "@heroicons/react/24/solid";

const ContactForm = () => {
  const [type, setType] = useState("message");

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const { name, email, subject, message } = formData;

  const defaultSendMessage = {
    loop: true,
    autoplay: true,
    animationData: Email,
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice",
    },
  };

  const handleOnChange = (event) => {
    setFormData((preState) => ({
      ...preState,
      [event.target.name]: event.target.value,
    }));
  };

  return (
    <section id="contact" className=" bg-indigo-900">
      <h2 className="uppercase text-center my-5 md:my-10  text-white">
        Contact
      </h2>
      <div>
        
        <div className="basis-1/2">
          
        </div>
      </div>
    </section>
  );
};

export default ContactForm;


import { services } from "../../assets/data/services";
import ServiceCard from "./serviceCard";
const ServiceList = () => {
  return (
    <div className="w-[100%] lg:relative lg:left-[10rem]">
       < div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3 lg:gap[30px] mt-[30px] lg:mt-[55px] justify-evenly">
      {services.map((item, index) => {
        return <ServiceCard key={index} index={index} item={item} />;
      })}
    </div>

    </div>
    
  );
};

export default ServiceList;
